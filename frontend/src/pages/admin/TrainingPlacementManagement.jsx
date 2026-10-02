import { useEffect, useState } from "react";
import { BriefcaseBusiness, Loader, Pencil, Plus, Save, Trash2 } from "lucide-react";
import { adminApiFetch } from "../../lib/adminApi";
import AdminBackButton from "../../components/AdminBackButton";

const blankForm = {
  company_name: "",
  category: "Manufacturing",
  visit_date: new Date().toISOString().slice(0, 10),
  location: "",
  duration: "Full-day industrial visit",
  students: "",
  purpose: "",
  description: "",
  what_students_saw: "",
  activities: "",
  learnings: "",
  outcomes: "",
  coordinator: "Training & Placement Cell, Yaduvanshi Degree College",
  main_image: "",
  gallery: "",
};

export default function TrainingPlacementManagement() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState(blankForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadItems = async () => {
    try {
      const result = await adminApiFetch("/api/industrial-visits/admin");
      setItems(result.visits || []);
      setError("");
    } catch (fetchError) {
      setError(fetchError.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const resetForm = () => {
    setFormData(blankForm);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.company_name.trim() || !formData.location.trim() || !formData.description.trim()) {
      setError("Company, location and description are required.");
      return;
    }

    setSaving(true);
    setError("");

    const payload = {
      company_name: formData.company_name.trim(),
      category: formData.category,
      visit_date: formData.visit_date,
      location: formData.location.trim(),
      duration: formData.duration.trim(),
      students: formData.students.trim(),
      purpose: formData.purpose.trim(),
      description: formData.description.trim(),
      what_students_saw: formData.what_students_saw.trim(),
      activities: formData.activities.trim(),
      learnings: formData.learnings.trim(),
      outcomes: formData.outcomes.trim(),
      coordinator: formData.coordinator.trim(),
      main_image: formData.main_image.trim(),
      gallery: formData.gallery.split("\n").map((url) => url.trim()).filter(Boolean),
    };

    try {
      await adminApiFetch(`/api/industrial-visits${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PUT" : "POST",
        body: payload,
      });
      resetForm();
      await loadItems();
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      company_name: item.company_name || "",
      category: item.category,
      visit_date: item.visit_date || new Date().toISOString().slice(0, 10),
      location: item.location,
      duration: item.duration || "",
      students: item.students || "",
      purpose: item.purpose || "",
      description: item.description,
      what_students_saw: item.what_students_saw || "",
      activities: item.activities || "",
      learnings: item.learnings || "",
      outcomes: item.outcomes || "",
      coordinator: item.coordinator || "",
      main_image: item.main_image || "",
      gallery: Array.isArray(item.gallery) ? item.gallery.join("\n") : "",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this industrial visit record?")) return;

    try {
      await adminApiFetch(`/api/industrial-visits/${id}`, { method: "DELETE" });
    } catch (deleteError) {
      setError(deleteError.message);
      return;
    }

    setError("");
    if (editingId === id) resetForm();
    loadItems();
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">Admin Panel</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Training & Placement Management</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AdminBackButton />
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <BriefcaseBusiness className="h-4 w-4 text-orange-500" />
              {items.length} visits
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
                {editingId ? "Edit Visit" : "Add New Visit"}
              </h2>
            </div>

            {error && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Company</label>
                <input
                  type="text"
                  value={formData.company_name}
                  onChange={(event) => setFormData((current) => ({ ...current, company_name: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Duropacking Pvt. Ltd."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(event) => setFormData((current) => ({ ...current, category: event.target.value }))}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="Manufacturing"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Visit Date</label>
                  <input
                    type="date"
                    value={formData.visit_date}
                    onChange={(event) => setFormData((current) => ({ ...current, visit_date: event.target.value }))}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(event) => setFormData((current) => ({ ...current, location: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Rewari, Haryana"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Description</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(event) => setFormData((current) => ({ ...current, description: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Write the visit summary..."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="mb-1 block text-sm font-semibold text-slate-700">Duration</label><input type="text" value={formData.duration} onChange={(event) => setFormData((current) => ({ ...current, duration: event.target.value }))} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" placeholder="Full-day industrial visit" /></div>
                <div><label className="mb-1 block text-sm font-semibold text-slate-700">Students</label><input type="text" value={formData.students} onChange={(event) => setFormData((current) => ({ ...current, students: event.target.value }))} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" placeholder="50+ students" /></div>
              </div>

              {[['Purpose', 'purpose'], ['What Students Saw (one item per line)', 'what_students_saw'], ['Activities (one item per line)', 'activities'], ['Key Learnings (one item per line)', 'learnings'], ['Outcomes (one item per line)', 'outcomes']].map(([label, key]) => (
                <div key={key}><label className="mb-1 block text-sm font-semibold text-slate-700">{label}</label><textarea rows={key === "purpose" ? 3 : 4} value={formData[key]} onChange={(event) => setFormData((current) => ({ ...current, [key]: event.target.value }))} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" /></div>
              ))}

              <div><label className="mb-1 block text-sm font-semibold text-slate-700">Coordinator</label><input type="text" value={formData.coordinator} onChange={(event) => setFormData((current) => ({ ...current, coordinator: event.target.value }))} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" /></div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Hero Image URL</label>
                <input
                  type="text"
                  value={formData.main_image}
                  onChange={(event) => setFormData((current) => ({ ...current, main_image: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="/images/industrial/visit.jpg"
                />
              </div>

              <div><label className="mb-1 block text-sm font-semibold text-slate-700">Gallery Image URLs (one per line)</label><textarea rows={4} value={formData.gallery} onChange={(event) => setFormData((current) => ({ ...current, gallery: event.target.value }))} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" placeholder="https://example.com/visit-photo.jpg" /></div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {saving ? <Loader className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {saving ? "Saving..." : editingId ? "Update Visit" : "Save Visit"}
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
              <h2 className="text-xl font-bold text-slate-900">Industrial Visits</h2>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">
                Live
              </span>
            </div>

            {loading ? (
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-slate-600">
                <Loader className="h-4 w-4 animate-spin" />
                Loading industrial visits...
              </div>
            ) : items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
                No visits yet. Add your first visit record.
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">{item.company_name}</h3>
                          <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-orange-700">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{item.location}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Date: {item.visit_date}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(item)}
                          className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
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
