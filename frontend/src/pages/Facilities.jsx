import { BookOpen, Monitor, FlaskConical, Dumbbell, Wifi, Users } from "lucide-react";

const facilities = [
  ["Smart Classrooms",Monitor,"Technology-enabled classrooms for interactive teaching and presentations.","https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"],
  ["Library",BookOpen,"A focused learning space with books, references and digital resources.","https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=85"],
  ["Science Laboratories",FlaskConical,"Practical learning spaces for experiments, demonstrations and analysis.","https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85"],
  ["Sports Facilities",Dumbbell,"Opportunities for fitness, teamwork and outdoor sporting activities.","https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85"],
  ["Digital Connectivity",Wifi,"Connected learning with internet-enabled academic resources.","https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"],
  ["Student Support",Users,"Guidance and support designed to help students succeed academically and personally.","https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"]
];

export default function Facilities() {
  return (
    <>
      <section className="page-hero"><div className="container-wide"><p className="section-kicker">Home / Facilities</p><h1 className="text-5xl font-bold sm:text-6xl">Our Facilities</h1><p className="mt-5 max-w-2xl text-lg text-slate-200">Modern infrastructure and student-friendly spaces for better learning and development.</p></div></section>
      <section className="container-wide py-20"><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{facilities.map(([title,Icon,text,image])=><article key={title} className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"><img src={image} alt={title} className="h-52 w-full object-cover"/><div className="p-6"><Icon className="text-gold" size={28}/><h2 className="mt-4 text-2xl font-bold text-navy">{title}</h2><p className="mt-2 leading-7 text-slate-600">{text}</p></div></article>)}</div></section>
    </>
  );
}