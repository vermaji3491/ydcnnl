import { ArrowLeft } from "lucide-react";

export default function AdminBackButton() {
  return (
    <a
      href="/admin/dashboard"
      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-orange-400 hover:text-orange-600"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Dashboard
    </a>
  );
}
