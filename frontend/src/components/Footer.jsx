import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  X,
  Code2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const [developerOpen, setDeveloperOpen] = useState(false);

  // ================================
  // YOUR DETAILS
  // Replace these with your details
  // ================================
  const developerInfo = {
    name: "Mahesh verma",
    role: "Web Designer & Developer",
    email: "officialvermaji2756@gmail.com",
    phone: "+91 7742973491",
    whatsapp: "+91 7742973491",
    portfolio: "https://linkedin.com/in/mahesh-verma-0b",
    photo: "/images/Developer.png",
  };

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-navy text-white">
        <div className="container-wide grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/yaduvanshilogo.png"
                alt="Yaduvanshi Degree College"
                className="h-13 w-auto rounded-xl object-contain"
              />

              <div></div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Empowering students through quality education, innovation,
              character and holistic development.
            </p>

            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/20 p-2 transition hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="font-serif text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <Link
                to="/"
                className="transition hover:text-gold"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition hover:text-gold"
              >
                About Us
              </Link>

              <Link
                to="/courses"
                className="transition hover:text-gold"
              >
                Programs
              </Link>

              <Link
                to="/facilities"
                className="transition hover:text-gold"
              >
                Facilities
              </Link>

              <Link
                to="/gallery"
                className="transition hover:text-gold"
              >
                Campus Life
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-gold"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ================= ADMISSIONS ================= */}
          <div>
            <h3 className="font-serif text-lg font-bold">
              Admissions
            </h3>

            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <span>Admission Process</span>
              <span>Eligibility</span>
              <span>Application Form</span>
              <span>Fee Structure</span>
              <span>Scholarships</span>
              <span>FAQs</span>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="font-serif text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-300">

              <div className="flex gap-2">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-gold"
                />
                Narnaul, Haryana – 123001
              </div>

              <div className="flex gap-2">
                <Phone
                  size={17}
                  className="text-gold"
                />
                +91-8607052424
              </div>

              <div className="flex gap-2">
                <Mail
                  size={17}
                  className="text-gold"
                />
                ydcnnl@gmail.com
              </div>

              <div className="flex gap-2">
                <Clock
                  size={17}
                  className="text-gold"
                />
                Mon–Sat: 8:00 AM–5:00 PM
              </div>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10">
          <div className="container-wide flex flex-col justify-between gap-3 py-4 text-xs text-slate-400 sm:flex-row sm:items-center">

            <span>
              © 2026 Yaduvanshi Degree College. All Rights Reserved.
            </span>

            <div className="flex flex-wrap items-center gap-4">

              <span>
                Privacy Policy · Terms & Conditions
              </span>

              {/* ================= DEVELOPER LINK ================= */}
              <button
                type="button"
                onClick={() => setDeveloperOpen(true)}
                className="group inline-flex items-center gap-1.5 font-medium text-slate-300 transition hover:text-gold"
              >
                <Code2
                  size={14}
                  className="transition group-hover:rotate-6"
                />

                Designed & Developed by
                <span className="text-gold">
                  {developerInfo.name}
                </span>
              </button>

            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          DEVELOPER PROFILE MODAL
      ===================================================== */}
      {developerOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setDeveloperOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* TOP DESIGN */}
            <div className="relative h-28 bg-navy">

              <div className="absolute inset-0 opacity-20">
                <div className="absolute -right-10 -top-20 h-48 w-48 rounded-full border-[30px] border-orange-400" />
                <div className="absolute -left-16 bottom-[-70px] h-40 w-40 rounded-full border-[20px] border-orange-400" />
              </div>

              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setDeveloperOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Close developer profile"
              >
                <X size={18} />
              </button>
            </div>

            {/* PROFILE CONTENT */}
            <div className="relative px-6 pb-7">

              {/* PHOTO */}
              <div className="-mt-14 flex justify-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-xl">
                  <img
                    src={developerInfo.photo}
                    alt={developerInfo.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Fallback icon */}
                  <div className="flex h-full w-full items-center justify-center bg-orange-50 text-orange-500">
                    <Code2 size={38} />
                  </div>
                </div>
              </div>

              {/* NAME */}
              <div className="mt-4 text-center">
                <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-600">
                  Website Designer & Developer
                </span>

                <h2 className="mt-3 font-serif text-2xl font-bold text-[#062452]">
                  {developerInfo.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {developerInfo.role}
                </p>
              </div>

              {/* SKILLS */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {[
                  "React",
                  "JavaScript",
                  "UI/UX",
                  "Web Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CONTACT */}
              <div className="mt-6 space-y-3">

                <a
                  href={`mailto:${developerInfo.email}`}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Mail size={17} />
                  </span>

                  <span className="break-all">
                    {developerInfo.email}
                  </span>
                </a>

                <a
                  href={`tel:${developerInfo.phone}`}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Phone size={17} />
                  </span>

                  {developerInfo.phone}
                </a>

              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 grid grid-cols-2 gap-3">

                <a
                  href={`https://wa.me/${developerInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>

                <a
                  href={developerInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                >
                  <ExternalLink size={17} />
                  linkedin
                </a>

              </div>

              {/* BOTTOM MESSAGE */}
              <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 p-4 text-center">
                <p className="text-sm font-semibold text-[#062452]">
                  Need a website like this?
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Get in touch for modern, responsive and professional
                  website design & development.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}