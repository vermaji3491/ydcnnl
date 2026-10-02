import { useEffect, useState } from "react";
import {
  Bell,
  CheckCircle,
  Loader,
  Pencil,
  Plus,
  Save,
  Trash2,
  XCircle,
} from "lucide-react";
import { adminApiFetch } from "../../lib/adminApi";
import AdminBackButton from "../../components/AdminBackButton";

const blankForm = {
  title: "",
  description: "",
  date: new Date().toISOString().slice(0, 10),
  is_active: true,
};

export default function NoticeManagement() {
  const [notices, setNotices] = useState([]);
  const [formData, setFormData] = useState(blankForm);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const loadNotices = async () => {
    try {
      const result = await adminApiFetch("/api/notices/admin");
      setNotices(result.notices || []);
      setError("");
    } catch (fetchError) {
      setError(fetchError.message);
      setNotices([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNotices();
  }, []);

  const resetForm = () => {
    setFormData(blankForm);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      setError("Title and description are required.");
      return;
    }

    setIsSaving(true);
    setError("");

    const payload = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      date: formData.date || new Date().toISOString().slice(0, 10),
      is_active: formData.is_active,
    };

    try {
      await adminApiFetch(`/api/notices${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PUT" : "POST",
        body: payload,
      });
      resetForm();
      await loadNotices();
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (notice) => {
    setEditingId(notice.id);
    setFormData({
      title: notice.title,
      description: notice.description,
      date: notice.date || new Date().toISOString().slice(0, 10),
      is_active: notice.is_active,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this notice?")) return;

    try {
      await adminApiFetch(`/api/notices/${id}`, { method: "DELETE" });
    } catch (deleteError) {
      setError(deleteError.message);
      return;
    }

    setError("");
    if (editingId === id) resetForm();
    loadNotices();
  };

  const handleToggleActive = async (notice) => {
    try {
      await adminApiFetch(`/api/notices/${notice.id}`, {
        method: "PUT",
        body: { is_active: !notice.is_active },
      });
    } catch (updateError) {
      setError(updateError.message);
      return;
    }

    loadNotices();
  };

  const formatDate = (value) => {
    if (!value) return "Not set";
    return new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Admin Panel
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Home Notices Management</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AdminBackButton />
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Bell className="h-4 w-4 text-orange-500" />
              {notices.length} notices
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
                {editingId ? "Edit Notice" : "Add New Notice"}
              </h2>
            </div>

            {error && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, title: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Admission Notice 2026-27"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Description</label>
                <textarea
                  rows={5}
                  value={formData.description}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, description: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Write the notice details here..."
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, date: event.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, is_active: event.target.checked }))
                  }
                  className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
                />
                Show this notice on the public website
              </label>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSaving ? <Loader className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {isSaving ? "Saving..." : editingId ? "Update Notice" : "Save Notice"}
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
              <h2 className="text-xl font-bold text-slate-900">Current Notices</h2>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">
                Live
              </span>
            </div>

            {isLoading ? (
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-slate-600">
                <Loader className="h-4 w-4 animate-spin" />
                Loading notices...
              </div>
            ) : notices.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
                No notices yet. Add your first notice from the form.
              </div>
            ) : (
              <div className="space-y-3">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">{notice.title}</h3>
                          {notice.is_active ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                              <CheckCircle className="h-3 w-3" /> Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-200 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                              <XCircle className="h-3 w-3" /> Inactive
                            </span>
                          )}
                        </div>

                        <p className="text-sm leading-6 text-slate-600">{notice.description}</p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {formatDate(notice.date)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleToggleActive(notice)}
                          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                        >
                          {notice.is_active ? "Hide" : "Show"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEdit(notice)}
                          className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(notice.id)}
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
