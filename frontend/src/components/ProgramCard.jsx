import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramCard({ title, subtitle, image, description }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">{subtitle}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        <Link to="/courses" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">Explore Program <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
}