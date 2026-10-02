import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Award,
  CheckCircle,
  Loader,
  Pencil,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { adminApiFetch } from "../../lib/adminApi";
import { apiFetch } from "../../lib/api";
import AdminBackButton from "../../components/AdminBackButton";

const categories = [
  "University Position",
  "IIT JAM",
  "Sports",
  "Cultural Events",
  "GATE",
  "NET / GATE",
  "Photo Gallery",
];

const categoryFromSlug = {
  "university-position": "University Position",
  "iit-jam": "IIT JAM",
  sports: "Sports",
  "cultural-events": "Cultural Events",
  gate: "GATE",
  "net-gate": "NET / GATE",
  gallery: "Photo Gallery",
};

const fallbackCourses = [
  "B.A.",
  "B.Com.",
  "B.Sc.",
  "B.Sc. (PCM)",
  "B.Sc. (Maths)",
  "B.Sc. (Computer Science)",
  "BCA",
  "BBA",
  "B.Ed.",
  "B.Tech.",
  "CSE",
  "CSE AI & ML",
  "M.A.",
  "M.Com.",
  "M.Sc.",
  "M.Tech.",
  "MBA",
  "Polytechnic",
];

const blankForm = {
  category: "University Position",
  year: String(new Date().getFullYear()),
  title: "",
  student_name: "",
  course: "",
  rank: "",
  sport: "",
  event: "",
  exam: "",
  subject: "",
  score: "",
  description: "",
  image_url: "",
};

export default function AchievementManagement() {
  const { category: categorySlug } = useParams();
  const initialCategory = categoryFromSlug[categorySlug] || blankForm.category;
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState(() => ({ ...blankForm, category: initialCategory }));
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [courseOptions, setCourseOptions] = useState(fallbackCourses);

  const loadRecords = async () => {
    try {
      const result = await adminApiFetch("/api/achievements/admin");
      setRecords(result.achievements || []);
      setError("");
    } catch (fetchError) {
      setError(fetchError.message);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecords();
    apiFetch("/api/courses")
      .then((result) => {
        const activeCourses = (result.courses || []).map((course) => course.name).filter(Boolean);
        setCourseOptions([...new Set([...fallbackCourses, ...activeCourses])].sort());
      })
      .catch(() => setCourseOptions(fallbackCourses));
  }, []);

  useEffect(() => {
    if (!editingId) {
      setFormData((current) => ({ ...current, category: initialCategory }));
    }
  }, [initialCategory, editingId]);

  const resetForm = () => {
    setFormData({ ...blankForm, category: initialCategory });
    setEditingId(null);
    setImageFile(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isGallery = formData.category === "Photo Gallery";
    const requiresStudent = !isGallery;
    const requiresSubject = ["IIT JAM", "NET", "GATE", "NET / GATE"].includes(formData.category);
    const title = formData.title.trim() || (formData.category === "University Position" ? "University Position Holder" : "");

    if (!formData.category || (!title && formData.category !== "University Position")) {
      setError("Category and achievement title are required.");
      return;
    }

    if (requiresStudent && !formData.student_name.trim()) {
      setError("Student name is required for this achievement category.");
      return;
    }

    if (formData.category === "University Position" && (!formData.course.trim() || !formData.rank.trim())) {
      setError("Course and university position are required.");
      return;
    }

    if (formData.category === "Sports" && !formData.sport.trim()) {
      setError("Sport is required for a sports achievement.");
      return;
    }

    if (formData.category === "Cultural Events" && !formData.event.trim()) {
      setError("Event is required for a cultural achievement.");
      return;
    }

    if (requiresSubject && !formData.subject.trim()) {
      setError("Subject or branch is required for this achievement category.");
      return;
    }

    if (["NET", "GATE", "NET / GATE"].includes(formData.category) && !formData.exam) {
      setError("Choose whether this record is for NET or GATE.");
      return;
    }

    if (!imageFile && !formData.image_url.trim()) {
      setError("Upload an achievement image or enter an image URL.");
      return;
    }

    setSaving(true);
    setError("");

    const payload = {
      title,
      period: String(formData.year),
      category: formData.category,
      year: Number(formData.year) || new Date().getFullYear(),
      student_name: formData.student_name.trim() || null,
      course: formData.course.trim(),
      rank: formData.rank.trim(),
      sport: formData.sport.trim(),
      event: formData.event.trim(),
      exam: formData.exam || (formData.category === "NET" || formData.category === "GATE" ? formData.category : ""),
      subject: formData.subject.trim(),
      score: formData.score.trim(),
      description: formData.description.trim(),
      image_url: formData.image_url.trim(),
    };

    const body = imageFile ? new FormData() : payload;
    if (imageFile) {
      Object.entries(payload).forEach(([key, value]) => {
        if (value != null) body.append(key, String(value));
      });
      body.append("image", imageFile);
    }

    try {
      await adminApiFetch(`/api/achievements${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PUT" : "POST",
        body,
      });
      resetForm();
      await loadRecords();
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setFormData({
      category: record.category,
      year: String(record.year || new Date().getFullYear()),
      title: record.title || "",
      student_name: record.student_name || "",
      course: record.course || "",
      rank: record.rank || "",
      sport: record.sport || "",
      event: record.event || "",
      exam: record.exam || "",
      subject: record.subject || "",
      score: record.score || "",
      description: record.description || "",
      image_url: record.image_url || "",
    });
    setImageFile(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this achievement record?")) return;

    try {
      await adminApiFetch(`/api/achievements/${id}`, { method: "DELETE" });
    } catch (deleteError) {
      setError(deleteError.message);
      return;
    }

    setError("");
    if (editingId === id) resetForm();
    loadRecords();
  };

  const isGallery = formData.category === "Photo Gallery";
  const isLegacyNet = formData.category === "NET";
  const isUniversityPosition = formData.category === "University Position";
  const isSports = formData.category === "Sports";
  const isCultural = formData.category === "Cultural Events";
  const isIitJam = formData.category === "IIT JAM";
  const isNetGate = ["NET", "GATE", "NET / GATE"].includes(formData.category);
  const fieldClass = "w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100";
  const updateField = (field, value) => setFormData((current) => ({ ...current, [field]: value }));

  const textField = (field, label, placeholder, required = false) => (
    <div key={field}>
      <label className="mb-1 block text-sm font-semibold text-slate-700">{label}</label>
      <input
        type="text"
        required={required}
        value={formData[field]}
        onChange={(event) => updateField(field, event.target.value)}
        className={fieldClass}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">Admin Panel</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              {categorySlug ? `${formData.category} Management` : "Achievements Management"}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AdminBackButton />
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Award className="h-4 w-4 text-orange-500" />
              {records.length} records
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[430px_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                {editingId ? <Pencil className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {editingId ? "Edit Achievement" : "Add New Achievement"}
              </h2>
            </div>

            {error && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Category</label>
                <select
                  value={formData.category}
                  onChange={(event) => setFormData((current) => ({ ...current, category: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                  {isLegacyNet && <option value="NET">NET (existing record)</option>}
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Year</label>
                  <input
                    type="number"
                    min="2000"
                    max="2100"
                    value={formData.year}
                    onChange={(event) => updateField("year", event.target.value)}
                    className={fieldClass}
                  />
                </div>
                {!isGallery && textField("rank", isSports || isCultural ? "Award / Position" : isNetGate ? "Rank / Qualification" : "Rank / Position", "1st / Gold / AIR 42", isUniversityPosition || isSports || isCultural || isIitJam || isNetGate)}
              </div>

              {!isGallery && textField("student_name", "Student Name", "Student full name", true)}

              {formData.category !== "University Position" && textField(
                "title",
                isSports || isCultural ? "Achievement" : isIitJam || isNetGate ? "Achievement / Qualification" : "Title",
                isSports ? "Gold medal, state championship" : isCultural ? "Best performer, annual fest" : "Achievement title",
                true
              )}

              {!isGallery && (
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Course / Class</label>
                  <select
                    required={isUniversityPosition}
                    value={formData.course}
                    onChange={(event) => updateField("course", event.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Select a course</option>
                    {formData.course && !courseOptions.includes(formData.course) && (
                      <option value={formData.course}>{formData.course}</option>
                    )}
                    {courseOptions.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
              )}
              {isSports && textField("sport", "Sport", "Athletics, Cricket, Badminton", true)}
              {isCultural && textField("event", "Cultural Event", "Dance, Music, Theatre", true)}
              {(isIitJam || isNetGate) && textField("subject", "Subject / Branch", "Physics, Chemistry, Computer Science", true)}

              {isNetGate && (
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Exam</label>
                  <select
                    required
                    value={formData.exam || (formData.category === "NET" || formData.category === "GATE" ? formData.category : "")}
                    onChange={(event) => updateField("exam", event.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Choose NET or GATE</option>
                    <option value="NET">NET</option>
                    <option value="GATE">GATE</option>
                  </select>
                </div>
              )}

              {isNetGate && textField("score", "Score (optional)", "98.5% or 802/1000")}

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Description</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(event) => updateField("description", event.target.value)}
                  className={fieldClass}
                  placeholder="Write the achievement details..."
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Image URL</label>
                <input
                  type="text"
                  value={formData.image_url}
                  onChange={(event) => updateField("image_url", event.target.value)}
                  className={fieldClass}
                  placeholder="/images/achievements/2026/record-name.jpg"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Or Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => setImageFile(event.target.files?.[0] || null)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm outline-none file:mr-3 file:rounded-lg file:border-0 file:bg-orange-100 file:px-3 file:py-2 file:font-semibold file:text-orange-700"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {saving ? <Loader className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {saving ? "Saving..." : editingId ? "Update Record" : "Save Record"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Current Achievements</h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                <CheckCircle className="h-3.5 w-3.5" /> Live
              </span>
            </div>

            {loading ? (
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-slate-600">
                <Loader className="h-4 w-4 animate-spin" />
                Loading achievements...
              </div>
            ) : records.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
                No achievement records yet. Add your first record from the form.
              </div>
            ) : (
              <div className="space-y-3">
                {records.map((record) => (
                  <div key={record.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">{record.student_name || record.title}</h3>
                          <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-orange-700">
                            {record.category}
                          </span>
                        </div>

                        {(record.course || record.sport || record.event || record.subject) && (
                          <div className="mb-2 text-sm text-slate-600">
                            <span className="font-semibold">{record.sport ? "Sport" : record.event ? "Event" : record.subject ? "Subject" : "Course"}:</span>{" "}
                            {record.sport || record.event || record.subject || record.course}
                          </div>
                        )}

                        {(record.exam || record.rank || record.score) && (
                          <div className="mb-2 text-sm text-slate-600">
                            <span className="font-semibold">{record.exam ? "Exam" : "Rank / Score"}:</span>{" "}
                            {[record.exam, record.rank, record.score].filter(Boolean).join(" · ")}
                          </div>
                        )}

                        {record.description && (
                          <p className="text-sm leading-6 text-slate-600">{record.description}</p>
                        )}

                        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Year: {record.year}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(record)}
                          className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(record.id)}
                          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
