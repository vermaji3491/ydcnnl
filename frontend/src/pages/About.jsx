import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Users,
} from "lucide-react";

export default function AboutSociety() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Programs", "/programs"],
    ["Campuses", "/campuses"],
    ["Facilities", "/facilities"],
    ["Placement", "/placement"],
    ["Gallery", "/gallery"],
    ["Contact Us", "/contact"],
  ];

  const features = [
    {
      icon: Building2,
      title: "Modern Infrastructure",
      text: (
        <>
          Our campuses stand out for their state-of-the-art infrastructure,
          designed to bridge the gap between theoretical knowledge and
          real-world skills.
          <br /><br />
          Students gain hands-on experience through regular industry visits,
          corporate guest lectures, and mandatory internship programs.
        </>
      ),
    },
    {
      icon: GraduationCap,
      title: "Holistic Development",
      text: (
        <>
          We focus on the overall growth of our students by encouraging
          participation in sports, cultural activities, and various clubs
          and societies.
          <br /><br />
          This well-rounded approach helps build confidence, leadership
          skills, and a sense of responsibility.
        </>
      ),
    },
    {
      icon: BriefcaseBusiness,
      title: "Career & Placement",
      text: (
        <>
          We take immense pride in our dedicated placement cell, which
          connects students with top-tier national and multinational
          companies.
          <br /><br />
          Through training, mock interviews, and soft-skills development,
          we empower students to achieve rewarding careers.
        </>
      ),
    },
  ];

  const impact = [
    { icon: GraduationCap, number: "29+", lines: ["Years of", "Excellence"] },
    { icon: Building2, number: "15+", lines: ["Institutions", "Across Haryana"] },
    { icon: Users, number: "25000+", lines: ["Students", "Empowered"], featured: true },
    { icon: BriefcaseBusiness, number: "1000+", lines: ["Top Recruiters", "& Partners"] },
    { icon: Trophy, number: "100+", lines: ["Awards &", "Recognitions"] },
  ];

  return (
    <div className="about-page">
     
      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="hero-blue"></div>

        <div className="hero-watermark">
          <img src="/images/Cyaduvanshilogo.png" alt="" />
        </div>

        <div className="hero-copy">

        {/* Breadcrumb */}
        <div className="hero-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>About Us</span>
        </div>

  <div className="hero-kicker">ABOUT US</div>
          <div className="hero-rule"></div>

          <h1>
            Yaduvanshi
            <br />
            Group of Institutions
          </h1>

          <div className="hero-small-rule"></div>

          <h2>Building Futures. Inspiring Excellence.</h2>

          <p>
            A legacy of trust, a commitment to knowledge, and a vision for a
            better tomorrow.
          </p>
        </div>

        <div className="hero-campus">
          <img src="/images/college-bg.png" alt="Yaduvanshi campus" />
          <div className="hero-image-shade"></div>
        </div>

        <svg
          className="hero-wave"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="cream-wave"
            d="M0 80 C180 155 340 165 520 105 C710 42 850 45 1010 88 C1170 132 1310 126 1440 50 L1440 180 L0 180 Z"
          />
          <path
            className="orange-wave"
            d="M0 70 C180 145 340 155 520 95 C710 32 850 35 1010 78 C1170 122 1310 116 1440 40"
          />
        </svg>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <main className="about-main">
        <section className="who-section">
          <div className="who-copy">
            <div className="section-kicker">WHO WE ARE</div>
            <div className="section-rule"></div>

            <h2>
              About Yaduvanshi
              <br />
              Group of Institutions
            </h2>

            <div className="heading-line"></div>

            <p>
              Yaduvanshi Group of Institutions, founded in 1995 by Mr. Rao
              Bahadur Singh under Rao Chiranji Lal Samriti Jan Seva Trust, is a
              premier educational network across Haryana, including
              Mahendergarh, Narnaul, Rewari, and Sathali.
            </p>

            <p>
              Our lush, modern campuses offer top-tier programs in Engineering,
              Management, Pharmacy, and Education. We focus on academic
              excellence, holistic development, and competitive exam success.
              Combining advanced laboratories, sports, and cultural activities,
              the Group grooms disciplined, skilled global professionals
              deeply rooted in Indian values, ready to face modern challenges
              with confidence.
            </p>
          </div>

          <div className="who-image-wrap">
            <div className="who-image-card">
              <img
                src="/images/raobahadur4.png"
                alt="Yaduvanshi Group of Institutions campus"
              />
            
            </div>
          </div>
        </section>

        {/* ================= FEATURE CARDS ================= */}
        <section className="features-section">
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon">
                  <Icon size={40} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <div className="card-rule"></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ================= IMPACT BAR ================= */}
        <section className="impact-section">
          <div className="impact-background"></div>

          <div className="impact-grid">
            {impact.map(({ icon: Icon, number, lines, featured }) => (
              <div
                className={`impact-item ${featured ? "featured" : ""}`}
                key={number}
              >
                <div className="impact-icon">
                  <Icon size={38} strokeWidth={1.8} />
                </div>

                <strong>{number}</strong>

                <span>{lines[0]}</span>
                <span>{lines[1]}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "DM Sans", Arial, sans-serif;
          color: #111827;
          background: #f8f2e9;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .about-page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 2% 74%, rgba(232,221,201,.5) 0 55px, transparent 56px),
            radial-gradient(circle at 98% 76%, rgba(232,221,201,.45) 0 70px, transparent 71px),
            #f8f2e9;
        }

        /* ================= HEADER ================= */

        .site-header {
          height: 96px;
          background: #fff;
          position: relative;
          z-index: 100;
          box-shadow: 0 1px 0 rgba(6,37,75,.08);
          transition: box-shadow .25s ease;
        }

        .site-header.scrolled {
          position: sticky;
          top: 0;
          box-shadow: 0 5px 18px rgba(6,37,75,.10);
        }

        .header-inner {
          max-width: 1500px;
          height: 100%;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .brand img {
          width: 66px;
          height: 66px;
          object-fit: contain;
          border-radius: 50%;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: .95;
        }

        .brand-text strong {
          color: #062b59;
          font-size: 26px;
          letter-spacing: -.8px;
          font-weight: 800;
        }

        .brand-text span {
          color: #e65d1a;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: .5px;
          margin-top: 7px;
        }

        .main-nav {
          height: 100%;
          display: flex;
          align-items: stretch;
          gap: 28px;
        }

        .main-nav a {
          position: relative;
          display: flex;
          align-items: center;
          white-space: nowrap;
          color: #061e43;
          font-size: 13px;
          font-weight: 600;
          transition: color .2s ease;
        }

        .main-nav a:hover,
        .main-nav a.active {
          color: #ec5d17;
        }

        .main-nav a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 22px;
          height: 3px;
          background: #ef5d19;
        }

        .mobile-menu-button {
          display: none;
          border: 0;
          background: transparent;
          color: #06254b;
          cursor: pointer;
        }

        /* ================= HERO ================= */

          .hero-breadcrumb {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 22px;
            font-size: 14px;
            font-weight: 600;
             color: rgba(255, 255, 255, 0.85);
            }

.hero-breadcrumb a {
  color: #ff9800;
  transition: color 0.2s ease;
}

.hero-breadcrumb a:hover {
  color: #ffffff;
}

.hero-breadcrumb span:last-child {
  color: #ffffff;
}
       
        .about-hero {
          height: 435px;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: #072b5c;
        }

        .hero-blue {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: #072b5c;
        }

        .hero-copy {
          position: absolute;
          z-index: 10;
          left: max(58px, calc((100% - 1410px) / 2));
          top: 64px;
          width: 520px;
          color: #fff;
        }

        .hero-kicker {
          color: #ff9800;
          font-size: 17px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .2px;
        }

        .hero-rule {
          width: 45px;
          height: 3px;
          background: #ff9800;
          margin: 14px 0 22px;
        }

        .hero-copy h1 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(43px, 4.1vw, 61px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -.8px;
        }

        .hero-small-rule {
          width: 46px;
          height: 3px;
          background: #ff9800;
          margin: 23px 0 17px;
        }

        .hero-copy h2 {
          margin: 0 0 17px;
          color: #ff9800;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 700;
        }

        .hero-copy p {
          max-width: 420px;
          margin: 0;
          color: #fff;
          font-size: 15px;
          line-height: 1.55;
        }

        .hero-watermark {
          position: absolute;
          z-index: 3;
          left: 205px;
          top: 18px;
          width: 320px;
          height: 320px;
          opacity: .15;
          pointer-events: none;
        }

        .hero-watermark img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .hero-campus {
          position: absolute;
          z-index: 4;
          right: -1px;
          top: 0;
          width: 57%;
          height: 100%;
          overflow: hidden;
          clip-path: ellipse(88% 96% at 82% 50%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 24%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 24%);
        }

        .hero-campus img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(6,43,89,.34) 0%,
            rgba(6,43,89,.08) 22%,
            transparent 48%
          );
        }

        .hero-wave {
          position: absolute;
          left: 0;
          bottom: -1px;
          z-index: 20;
          width: 100%;
          height: 90px;
          pointer-events: none;
        }

        .cream-wave {
          fill: #f8f2e9;
        }

        .orange-wave {
          fill: none;
          stroke: #ef6c00;
          stroke-width: 11;
        }

        /* ================= MAIN ================= */

        .about-main {
          position: relative;
          z-index: 30;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 58px 42px;
        }

        .who-section {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          align-items: start;
          gap: 75px;
          padding-top: 28px;
        }

        .who-copy {
          padding-top: 0;
        }

        .section-kicker {
          color: #df5b15;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .1px;
        }

        .section-rule {
          width: 45px;
          height: 3px;
          background: #e96b18;
          margin: 9px 0 19px;
        }

        .who-copy h2 {
          margin: 0;
          color: #0b2d5a;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 34px;
          line-height: 1.16;
          font-weight: 800;
        }

        .heading-line {
          width: 260px;
          height: 3px;
          background: #e96b18;
          margin: 20px 0 26px;
          position: relative;
        }

        .heading-line::after {
          content: "";
          position: absolute;
          right: -2px;
          top: -2px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e96b18;
        }

        .who-copy p {
          max-width: 520px;
          margin: 0 0 19px;
          color: #111;
          font-size: 14px;
          line-height: 1.55;
        }

        .who-image-wrap {
          padding-top: 0;
        }

        .who-image-card {
          height: 410px;
          width: 500px;
          border-radius: 17px;
          overflow: hidden;
          background: #ddd;
          position: relative;
          box-shadow: 0 9px 20px rgba(0,0,0,.16);
        }

        .who-image-card > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .image-logo {
          position: absolute;
          left: 22px;
          top: 20px;
          width: 96px;
          height: 96px;
          padding: 8px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 4px 13px rgba(0,0,0,.18);
        }

        .image-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }

        /* ================= FEATURE CARDS ================= */

        .features-section {
          margin-top: 34px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .feature-card {
          min-height: 273px;
          background: rgba(255,255,255,.96);
          border-radius: 13px;
          box-shadow: 0 6px 16px rgba(24,32,43,.11);
          border-bottom: 4px solid #ef650d;
          padding: 42px 20px 20px;
          text-align: center;
          position: relative;
          overflow: visible;
        }

        .feature-card::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 4px;
          border-radius: 0 0 13px 13px;
          background: #f36d0c;
        }

        .feature-icon {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #082f61;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 12px rgba(0,0,0,.2);
          border: 1px solid rgba(255,255,255,.2);
        }

        .feature-card h3 {
          margin: 3px 0 10px;
          color: #0a2d59;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 20px;
          font-weight: 800;
        }

        .card-rule {
          width: 43px;
          height: 3px;
          background: #ef6b13;
          margin: 0 auto 15px;
        }

        .feature-card p {
          margin: 0;
          color: #151515;
          font-size: 12.5px;
          line-height: 1.55;
        }

        /* ================= IMPACT ================= */

        .impact-section {
          position: relative;
          margin-top: 35px;
          min-height: 190px;
          border-radius: 18px;
          overflow: hidden;
          background: #062b5a;
          color: #fff;
          box-shadow: 0 6px 16px rgba(0,0,0,.14);
        }

        .impact-background {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(5,43,88,.89), rgba(5,43,88,.93)),
            url("/images/campus3.png") center / cover;
        }

        .impact-grid {
          position: relative;
          min-height: 190px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          margin: 0;
        }

        .impact-item {
          min-height: 190px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,.35);
          padding: 15px 10px;
        }

        .impact-item:last-child {
          border-right: 0;
        }

        .impact-item.featured {
          background: #ef6b0b;
        }

        .impact-icon {
          color: #ff9900;
          height: 42px;
          display: flex;
          align-items: center;
          margin-bottom: 2px;
        }

        .impact-item.featured .impact-icon {
          color: #fff;
        }

        .impact-item strong {
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          line-height: 1.1;
          margin: 3px 0 5px;
        }

        .impact-item span {
          color: #ff9800;
          font-size: 14px;
          line-height: 1.25;
          font-weight: 700;
        }

        .impact-item.featured span {
          color: #fff;
        }

        /* ================= TABLET ================= */

        @media (max-width: 1150px) {
          .main-nav {
            gap: 17px;
          }

          .main-nav a {
            font-size: 12px;
          }

          .brand-text strong {
            font-size: 23px;
          }

          .brand-text span {
            font-size: 13px;
          }

          .who-section {
            gap: 42px;
          }

          .about-main {
            padding-left: 42px;
            padding-right: 42px;
          }

          .hero-copy {
            left: 45px;
            width: 455px;
          }

          .hero-campus {
            width: 59%;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 900px) {
          .site-header {
            height: 78px;
          }

          .header-inner {
            padding: 0 16px;
          }

          .brand img {
            width: 54px;
            height: 54px;
          }

          .brand-text strong {
            font-size: 20px;
          }

          .brand-text span {
            font-size: 11px;
            margin-top: 4px;
          }

          .mobile-menu-button {
            display: block;
          }

          .main-nav {
            position: absolute;
            top: 78px;
            left: 0;
            right: 0;
            height: auto;
            padding: 10px 18px 18px;
            background: #fff;
            box-shadow: 0 12px 20px rgba(0,0,0,.13);
            display: none;
            flex-direction: column;
            gap: 0;
          }

          .main-nav.mobile-visible {
            display: flex;
          }

          .main-nav a {
            min-height: 43px;
            padding: 0 4px;
            font-size: 14px;
            border-bottom: 1px solid #eee;
          }

          .main-nav a.active::after {
            display: none;
          }

          .about-hero {
            height: auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 38px 24px 105px;
          }

          .hero-copy {
            position: relative;
            inset: auto;
            width: min(100%, 680px);
          }

          .hero-campus {
            position: relative;
            inset: auto;
            width: 100%;
            height: clamp(190px, 42vw, 300px);
            flex: 0 0 auto;
            border-radius: 18px;
            clip-path: none;
            -webkit-mask-image: none;
            mask-image: none;
          }

          .hero-campus img {
            object-position: center 45%;
          }

          .hero-image-shade {
            background: linear-gradient(180deg, rgba(6,43,89,.2), transparent 45%);
          }

          .hero-watermark {
            left: 28px;
            top: 12px;
            width: min(52vw, 250px);
            height: min(52vw, 250px);
            opacity: .08;
          }

          .hero-copy h1 {
            font-size: 43px;
          }

          .hero-copy h2 {
            font-size: 16px;
          }

          .hero-copy p {
            max-width: 430px;
            font-size: 13px;
          }

          .hero-wave {
            height: 65px;
          }

          .about-main {
            padding: 12px 20px 38px;
          }

          .who-section {
            grid-template-columns: 1fr;
            gap: 34px;
            padding-top: 22px;
          }

          .who-copy h2 {
            font-size: 29px;
          }

          .who-copy p {
            max-width: none;
          }

          .who-image-card {
            height: 330px;
          }

          .feature-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }

          .feature-card {
            padding-left: 13px;
            padding-right: 13px;
          }

          .feature-card h3 {
            font-size: 17px;
          }

          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-item {
            min-height: 130px;
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.28);
          }

          .impact-item.featured {
            grid-column: span 2;
            grid-row: 1;
          }
        }

        @media (max-width: 560px) {
          .brand-text strong {
            font-size: 17px;
          }

          .brand-text span {
            font-size: 9px;
          }

          .about-hero {
            padding: 30px 18px 88px;
            gap: 20px;
          }

          .hero-copy {
            top: auto;
          }

          .hero-kicker {
            font-size: 15px;
          }

          .hero-copy h1 {
            font-size: 37px;
          }

          .hero-copy h2 {
            font-size: 14px;
          }

          .hero-copy p {
            font-size: 12px;
            max-width: 340px;
          }

          .hero-campus {
            height: clamp(180px, 58vw, 240px);
          }

          .who-copy h2 {
            font-size: 27px;
          }

          .heading-line {
            width: 220px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .feature-card {
            min-height: 210px;
            padding-top: 39px;
          }

          .feature-card h3 {
            font-size: 20px;
          }

          .impact-grid {
            grid-template-columns: 1fr 1fr;
          }

          .impact-item.featured {
            grid-column: span 2;
            grid-row: auto;
          }

          .impact-item strong {
            font-size: 27px;
          }
        }
      `}</style>
    </div>
  );
}
