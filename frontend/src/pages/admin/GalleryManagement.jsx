import { useEffect, useState } from "react";
import { Image as ImageIcon, Loader, Pencil, Plus, Save, Trash2 } from "lucide-react";
import { adminApiFetch } from "../../lib/adminApi";
import AdminBackButton from "../../components/AdminBackButton";

const blankForm = {
  title: "",
  category: "Campus",
  image_url: "",
};

export default function GalleryManagement() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState(blankForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadItems = async () => {
    try {
      const result = await adminApiFetch("/api/gallery/admin");
      setItems(result.gallery || []);
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

    if (!formData.title.trim() || !formData.image_url.trim()) {
      setError("Title and image URL are required.");
      return;
    }

    setSaving(true);
    setError("");

    const payload = {
      title: formData.title.trim(),
      category: formData.category,
      image_url: formData.image_url.trim(),
    };

    try {
      await adminApiFetch(`/api/gallery${editingId ? `/${editingId}` : ""}`, {
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
      title: item.title,
      category: item.category,
      image_url: item.image_url,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this gallery item?")) return;

    try {
      await adminApiFetch(`/api/gallery/${id}`, { method: "DELETE" });
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
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Gallery Management</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AdminBackButton />
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <ImageIcon className="h-4 w-4 text-orange-500" />
              {items.length} items
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
                {editingId ? "Edit Gallery Item" : "Add New Image"}
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
                  onChange={(event) => setFormData((current) => ({ ...current, title: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Campus View"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(event) => setFormData((current) => ({ ...current, category: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Campus"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Image URL</label>
                <input
                  type="text"
                  value={formData.image_url}
                  onChange={(event) => setFormData((current) => ({ ...current, image_url: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="/images/campus.jpg"
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
                {saving ? "Saving..." : editingId ? "Update Item" : "Save Item"}
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
              <h2 className="text-xl font-bold text-slate-900">Current Gallery</h2>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">
                Live
              </span>
            </div>

            {loading ? (
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-slate-600">
                <Loader className="h-4 w-4 animate-spin" />
                Loading gallery...
              </div>
            ) : items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
                No gallery items yet. Add your first image.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                    <img src={item.image_url} alt={item.title} className="h-40 w-full object-cover" />
                    <div className="p-3">
                      <div className="mb-2 text-sm font-bold text-slate-900">{item.title}</div>
                      <div className="mb-3 text-xs uppercase tracking-wide text-slate-500">{item.category}</div>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(item)}
                          className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-2 text-blue-700 hover:bg-blue-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="rounded-lg border border-red-200 bg-red-50 px-2 py-2 text-red-700 hover:bg-red-100"
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
