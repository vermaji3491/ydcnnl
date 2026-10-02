import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, Building2, Users, Trophy, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import NoticeBoard from "../components/NoticeBoard";
import ProgramCard from "../components/ProgramCard";
import PamphletPopup from "../components/PamphletPopup";

const img = {
  about: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  ba: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=85",
  bcom: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=85",
  bsc: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=85",
  bca: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85"
};

export default function Home() {
  return (
    <>
      <Hero />
<section className="relative py-8">
        <div className="container-wide">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Users, "Qualified Faculty", "Experienced & dedicated to your success"],
              [BookOpen, "Quality Education", "Industry-oriented curriculum"],
              [Building2, "Modern Campus", "Advanced labs, library & smart classrooms"],
              [Sparkles, "Holistic Development", "Sports, culture & leadership opportunities"]
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="flex gap-3 border-b p-5 last:border-0 sm:border-r lg:border-b-0"
              >
                <Icon className="mt-1 shrink-0 text-gold" size={27} />

                <div>
                  <h3 className="font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-wide py-20">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <NoticeBoard />
          <div className="grid gap-7 md:grid-cols-[1fr_280px]">
            <div>
              <p className="section-kicker">About Yaduvanshi</p>
              <h2 className="section-title">Building Knowledge. Building Character. Building Futures.</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Yaduvanshi Degree College in Narnaul, Haryana is committed to academic excellence, character building and the overall development of students.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[[Trophy,"25+","Years of Excellence"],[Users,"15+","Faculty"],[BookOpen,"8+","Programs"],[Users,"1000+","Students"]].map(([Icon,n,t]) => (
                  <div key={t} className="text-center"><Icon className="mx-auto text-gold" size={24}/><div className="mt-1 text-xl font-bold text-navy">{n}</div><div className="text-[10px] text-slate-500">{t}</div></div>
                ))}
              </div>
              <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-navy">Learn More About Us <ArrowRight size={17} className="text-gold"/></Link>
            </div>
            <img src={img.about} alt="Students learning together" className="h-full min-h-64 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide">
          <div className="text-center"><p className="section-kicker">Academic Programs</p><h2 className="section-title">Explore Our Programs</h2><p className="mx-auto mt-3 max-w-2xl text-slate-600">Choose a degree program designed to develop knowledge, practical skills and career readiness.</p></div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ProgramCard title="B.A." subtitle="Bachelor of Arts" image={img.ba} description="Build strong foundations in humanities, communication and social sciences."/>
            <ProgramCard title="B.Com." subtitle="Bachelor of Commerce" image={img.bcom} description="Develop practical knowledge of accounting, finance, business and economics."/>
            <ProgramCard title="B.Sc." subtitle="Bachelor of Science" image={img.bsc} description="Explore scientific thinking with a strong academic and practical foundation."/>
            <ProgramCard title="BCA" subtitle="Bachelor of Computer Applications" image={img.bca} description="Build your career in IT through programming, applications and digital skills."/>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-wide">
          <div className="text-center"><p className="section-kicker">Campus Life</p><h2 className="section-title text-white">Experience Life at Yaduvanshi</h2></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Smart Classrooms","https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85"],
              ["Library","https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=85"],
              ["Sports","https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=85"],
              ["Events","https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=85"],
              ["Student Activities","https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=85"]
            ].map(([title,image]) => <div key={title} className="group overflow-hidden rounded-xl"><img src={image} alt={title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"/><div className="bg-white/10 px-3 py-3 text-center text-sm font-bold">{title}</div></div>)}
          </div>
          <div className="mt-8 text-center"><Link to="/gallery" className="btn-gold">View More Photos <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <PamphletPopup />

      <section className="container-wide py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <p className="section-kicker">Student Experience</p><h2 className="section-title">What Our Students Say</h2>
            <div className="mt-6 flex gap-5"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/20 text-navy"><Star/></div><div><p className="leading-7 text-slate-600">“A supportive environment where teachers encourage us to learn, grow and prepare for our careers.”</p><p className="mt-3 font-bold text-navy">— Student, B.Sc.</p></div></div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[[Trophy,"100%","Placement Support"],[Users,"50+","Recruiters"],[Building2,"15+","Modern Labs"],[Star,"5K+","Alumni Network"]].map(([Icon,n,t]) => (
              <div key={t} className="rounded-2xl border bg-white p-5 text-center shadow-sm"><Icon className="mx-auto text-gold" size={25}/><div className="mt-3 text-2xl font-bold text-navy">{n}</div><div className="mt-1 text-xs font-semibold text-slate-500">{t}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#062452] via-[#0f2d59] to-[#123d74] py-20 text-white">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-kicker text-gold">Careers</p>
              <h2 className="section-title text-white">Join the Yaduvanshi Team</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-200">
                We are always looking for passionate faculty and staff who can inspire students and help build a strong academic environment for the future.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/recruitment" className="btn-gold">View Openings <ArrowRight size={18} /></Link>
                <Link to="/recruitment#staff-application-form" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">Apply Now</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  [BriefcaseBusiness, "Teaching Roles", "Faculty & subject experts"],
                  [BookOpen, "Academic Support", "Labs, library & student services"],
                  [Users, "Administrative", "Staff & operations positions"]
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 inline-flex rounded-full bg-gold/15 p-2 text-gold"><Icon size={18} /></div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-200">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide pb-16 pt-10">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-navy px-7 py-8 text-white sm:flex-row">
          <div><h2 className="text-3xl font-bold">Your Future Starts Here!</h2><p className="mt-1 text-slate-300">Take the first step towards your academic and career journey.</p></div>
          <Link to="/admission/online-admission" className="btn-gold shrink-0">Apply for Admission <ArrowRight size={18}/></Link>
        </div>
      </section>

      <Link
        to="/recruitment"
        className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#f3c77a]/40 bg-[#081d40] px-3 py-2 text-sm font-bold text-white shadow-[0_16px_40px_rgba(8,29,64,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#f5c876] hover:bg-[#0d274d] sm:px-4"
        aria-label="Open recruitment opportunities"
      >
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#f7d67a] to-[#ff8d2a] text-[#071d3d] shadow-lg shadow-[#f8b870]/30">
          <BriefcaseBusiness size={18} />
        </span>
        <span className="hidden sm:inline">Recruitment</span>
      </Link>

    </>
  );
}