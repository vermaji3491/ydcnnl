import { useEffect, useState } from "react";
import {
  IndianRupee,
  Pencil,
  Plus,
  Save,
  Trash2,
  Loader,
  CheckCircle,
} from "lucide-react";
import { adminApiFetch } from "../../lib/adminApi";
import { apiFetch } from "../../lib/api";
import AdminBackButton from "../../components/AdminBackButton";

const blankForm = {
  course: "",
  duration: "",
  total_fee: "",
  first_year_fee: "",
  other_fee: "",
};

const fallbackCourses = [
  "B.A.",
  "B.Com.",
  "B.Sc.",
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

export default function FeeManagement() {
  const [fees, setFees] = useState([]);
  const [formData, setFormData] = useState(blankForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [courseOptions, setCourseOptions] = useState(fallbackCourses);

  const loadFees = async () => {
    try {
      const result = await adminApiFetch("/api/fees");
      setFees(result.fees || []);
      setError("");
    } catch (fetchError) {
      setError(fetchError.message);
      setFees([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFees();
    apiFetch("/api/courses")
      .then((result) => {
        const activeCourses = (result.courses || []).map((course) => course.name).filter(Boolean);
        setCourseOptions([...new Set([...fallbackCourses, ...activeCourses])].sort());
      })
      .catch(() => setCourseOptions(fallbackCourses));
  }, []);

  const resetForm = () => {
    setFormData(blankForm);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.course.trim() || !formData.duration.trim()) {
      setError("Course name and duration are required.");
      return;
    }

    setSaving(true);
    setError("");

    const payload = {
      course: formData.course.trim(),
      duration: formData.duration.trim(),
      total_fee: Number(formData.total_fee) || 0,
      first_year_fee: Number(formData.first_year_fee) || 0,
      other_fee: Number(formData.other_fee) || 0,
    };

    try {
      await adminApiFetch(`/api/fees${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PUT" : "POST",
        body: payload,
      });
      resetForm();
      await loadFees();
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (fee) => {
    setEditingId(fee.id);
    setFormData({
      course: fee.course,
      duration: fee.duration,
      total_fee: String(fee.total_fee ?? ""),
      first_year_fee: String(fee.first_year_fee ?? ""),
      other_fee: String(fee.other_fee ?? ""),
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this fee record?")) return;

    try {
      await adminApiFetch(`/api/fees/${id}`, { method: "DELETE" });
    } catch (deleteError) {
      setError(deleteError.message);
      return;
    }

    setError("");
    if (editingId === id) resetForm();
    loadFees();
  };

  const formatCurrency = (value) => {
    const num = Number(value || 0);
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">Admin Panel</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Fees Structure Management</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AdminBackButton />
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <IndianRupee className="h-4 w-4 text-orange-500" />
              {fees.length} records
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                {editingId ? <Pencil className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {editingId ? "Edit Fee Record" : "Add New Fee Record"}
              </h2>
            </div>

            {error && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Course</label>
                <select
                  required
                  value={formData.course}
                  onChange={(event) => setFormData((current) => ({ ...current, course: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
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

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Duration</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(event) => setFormData((current) => ({ ...current, duration: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="3 Years"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Total Fee</label>
                <input
                  type="number"
                  min="0"
                  value={formData.total_fee}
                  onChange={(event) => setFormData((current) => ({ ...current, total_fee: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="58000"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">First Year Fee</label>
                <input
                  type="number"
                  min="0"
                  value={formData.first_year_fee}
                  onChange={(event) => setFormData((current) => ({ ...current, first_year_fee: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="35000"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Other Fee</label>
                <input
                  type="number"
                  min="0"
                  value={formData.other_fee}
                  onChange={(event) => setFormData((current) => ({ ...current, other_fee: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="23000"
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
              <h2 className="text-xl font-bold text-slate-900">Current Fee Records</h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                <CheckCircle className="h-3.5 w-3.5" /> Live
              </span>
            </div>

            {loading ? (
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-slate-600">
                <Loader className="h-4 w-4 animate-spin" />
                Loading fee records...
              </div>
            ) : fees.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
                No fee records yet. Add your first course fee.
              </div>
            ) : (
              <div className="space-y-3">
                {fees.map((fee) => (
                  <div key={fee.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900">{fee.course}</h3>
                        <p className="mt-1 text-sm text-slate-600">Duration: {fee.duration}</p>
                        <div className="mt-3 grid gap-2 sm:grid-cols-3">
                          <div className="rounded-lg bg-white p-2">
                            <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">Total</div>
                            <div className="mt-1 font-bold text-slate-900">{formatCurrency(fee.total_fee)}</div>
                          </div>
                          <div className="rounded-lg bg-white p-2">
                            <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">First Year</div>
                            <div className="mt-1 font-bold text-slate-900">{formatCurrency(fee.first_year_fee)}</div>
                          </div>
                          <div className="rounded-lg bg-white p-2">
                            <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">Other Fee</div>
                            <div className="mt-1 font-bold text-slate-900">{formatCurrency(fee.other_fee)}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(fee)}
                          className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(fee.id)}
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
