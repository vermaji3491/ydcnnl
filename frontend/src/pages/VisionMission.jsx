import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  BookOpen,
  Compass,
  Handshake,
  TrendingUp,
  Landmark,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function VisionMission() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about", dropdown: true, active: true },
    { label: "Admission", href: "/admission", dropdown: true },
    { label: "Programs", href: "/programs" },
    { label: "Achievement", href: "/achievement", dropdown: true },
    { label: "Facilities", href: "/facilities", dropdown: true },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Gallery", href: "/gallery" },
    {
      label: "Training & Placement",
      href: "/placement",
    },
    { label: "Contact Us", href: "/contact" },
    { label: "Yaduvanshi Campus", href: "/campuses" },
  ];

  const values = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      text: "Creating an environment where students can learn, explore and develop strong academic foundations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "Encouraging curiosity, creativity and practical thinking to prepare students for a changing world.",
    },
    {
      icon: Users,
      title: "Student Development",
      text: "Supporting students beyond classrooms through activities, leadership opportunities and experiences.",
    },
    {
      icon: Handshake,
      title: "Ethical Values",
      text: "Building responsible individuals who value integrity, respect, discipline and social responsibility.",
    },
  ];

  return (
    <div className="vm-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-background"></div>

        <div className="hero-image">
          <img
            src="/images/college-bg.png"
            alt="Yaduvanshi Degree College campus"
          />

          <div className="hero-image-overlay"></div>
        </div>

        <div className="hero-glow"></div>

        <div className="hero-watermark">
          <img
            src="/images/Cyaduvanshilogo.png"
            alt=""
          />
        </div>

        <div className="hero-content">

          <div className="hero-breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <Link to="/about">About Us</Link>

            <span>/</span>

            <strong>Vision & Mission</strong>
          </div>

          <div className="hero-label">
            <span></span>
            OUR GUIDING PRINCIPLES
          </div>

          <h1>
            Vision <em>&</em>
            <br />
            Mission
          </h1>

          <p>
            Inspiring students through knowledge, values and meaningful
            opportunities to create a better future.
          </p>

          <div className="hero-line"></div>

        </div>

        <div className="hero-bottom">

          <div className="hero-bottom-item">
            <span>01</span>
            <div>
              <strong>Learn</strong>
              <small>Knowledge</small>
            </div>
          </div>

          <div className="hero-bottom-item">
            <span>02</span>
            <div>
              <strong>Grow</strong>
              <small>Character</small>
            </div>
          </div>

          <div className="hero-bottom-item">
            <span>03</span>
            <div>
              <strong>Lead</strong>
              <small>Purpose</small>
            </div>
          </div>

        </div>

        {/* Curved transition */}

        <svg
          className="hero-wave"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 80 C180 155 340 165 520 105 C710 42 850 45 1010 88 C1170 132 1310 126 1440 50 L1440 180 L0 180 Z"
            fill="#f8f5ef"
          />

          <path
            d="M0 70 C180 145 340 155 520 95 C710 32 850 35 1010 78 C1170 122 1310 116 1440 40"
            fill="none"
            stroke="#e86f18"
            strokeWidth="5"
          />
        </svg>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <main className="page-content">

        <section className="intro-section">

          <div className="section-eyebrow">
            <span></span>
            WHO WE ARE
            <span></span>
          </div>

          <h2>
            Education with a
            <span> Purpose</span>
          </h2>

          <p className="intro-text">
            At Yaduvanshi Degree College, education goes beyond textbooks.
            We aim to create an environment where students develop knowledge,
            confidence, values and the ability to contribute meaningfully
            to society.
          </p>

        </section>

        {/* =================================================
            VISION + MISSION
        ================================================= */}

        <section className="mv-section">

          {/* Mission */}

          <article className="mv-card mission-card">

            <div className="card-number">01</div>

            <div className="icon-box">
              <BookOpen size={34} strokeWidth={1.7} />
            </div>

            <div className="card-label">
              WHAT WE DO
            </div>

            <h2>Our Mission</h2>

            <div className="card-line"></div>

            <p>
              To empower students through holistic education, fostering
              innovation, and ethical values for a brighter future.
            </p>

            <div className="card-footer">
              <span>
                <CheckCircle2 size={17} />
                Knowledge
              </span>

              <span>
                <CheckCircle2 size={17} />
                Values
              </span>

              <span>
                <CheckCircle2 size={17} />
                Growth
              </span>
            </div>

          </article>

          {/* Vision */}

          <article className="mv-card vision-card">

            <div className="card-number">02</div>

            <div className="icon-box">
              <Compass size={34} strokeWidth={1.7} />
            </div>

            <div className="card-label">
              WHERE WE AIM
            </div>

            <h2>Our Vision</h2>

            <div className="card-line"></div>

            <p>
              To be a premier institution of academic excellence, shaping
              leaders and global citizens who contribute positively to
              society.
            </p>

            <div className="card-footer">
              <span>
                <CheckCircle2 size={17} />
                Excellence
              </span>

              <span>
                <CheckCircle2 size={17} />
                Leadership
              </span>

              <span>
                <CheckCircle2 size={17} />
                Society
              </span>
            </div>

          </article>

        </section>

        {/* =================================================
            CORE VALUES
        ================================================= */}

        <section className="values-section">

          <div className="values-heading">

            <div>
              <div className="section-eyebrow left">
                <span></span>
                OUR VALUES
              </div>

              <h2>
                Principles that
                <br />
                <span>guide our journey.</span>
              </h2>
            </div>

            <p>
              Our vision and mission are reflected in the everyday
              experiences we create for our students and community.
            </p>

          </div>

          <div className="values-grid">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article className="value-card" key={value.title}>

                  <div className="value-top">
                    <span>0{index + 1}</span>

                    <div className="value-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                  <div className="value-arrow">
                    <ArrowRight size={18} />
                  </div>

                </article>
              );
            })}

          </div>

        </section>

        {/* =================================================
            INSTITUTIONAL PHILOSOPHY
        ================================================= */}

        <section className="philosophy-section">

          <div className="philosophy-image">

            <img
              src="/images/college-bg.png"
              alt="Yaduvanshi Degree College"
            />

            <div className="philosophy-image-overlay"></div>

            <div className="image-badge">
              <Landmark size={22} />
              <span>
                YADUVANSHI
                <small>GROUP OF INSTITUTIONS</small>
              </span>
            </div>

          </div>

          <div className="philosophy-content">

            <div className="section-eyebrow left">
              <span></span>
              OUR PHILOSOPHY
            </div>

            <h2>
              Building futures
              <br />
              through <span>education.</span>
            </h2>

            <p>
              We believe that a meaningful education develops both
              competence and character. Our approach encourages students
              to learn with curiosity, participate actively and become
              responsible members of society.
            </p>

            <div className="philosophy-points">

              <div>
                <div className="point-icon">
                  <Target size={20} />
                </div>

                <div>
                  <strong>Purpose Driven</strong>
                  <span>
                    Learning connected to real-world aspirations.
                  </span>
                </div>
              </div>

              <div>
                <div className="point-icon">
                  <Sparkles size={20} />
                </div>

                <div>
                  <strong>Future Ready</strong>
                  <span>
                    Preparing students for changing opportunities.
                  </span>
                </div>
              </div>

              <div>
                <div className="point-icon">
                  <Handshake size={20} />
                </div>

                <div>
                  <strong>Responsible Citizens</strong>
                  <span>
                    Encouraging integrity and social responsibility.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            BRAND STATEMENT
        ================================================= */}

        <section className="brand-statement">

          <div className="brand-icon">
            <Landmark size={30} strokeWidth={1.4} />
          </div>

          <div className="brand-line"></div>

          <div className="brand-content">

            <span className="brand-small">
              THE YADUVANSHI WAY
            </span>

            <h2>
              TRUST
              <span>•</span>
              SERVICE
              <span>•</span>
              KNOWLEDGE
            </h2>

            <p>
              Empowering learners. Strengthening communities.
              Creating possibilities.
            </p>

          </div>

          <div className="brand-line"></div>

        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="cta-section">

          <div className="cta-pattern"></div>

          <div className="cta-content">

            <div className="cta-icon">
              <GraduationCap size={31} />
            </div>

            <div>
              <span>DISCOVER YADUVANSHI</span>

              <h2>
                Explore our academic journey.
              </h2>
            </div>

          </div>

          <Link to="/about" className="cta-button">
            Explore About Us
            <ArrowRight size={19} />
          </Link>

        </section>

      </main>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap');

        :root {
          --navy: #082b59;
          --navy-dark: #041d3c;
          --orange: #e86f18;
          --orange-dark: #d75d0d;
          --orange-soft: #f4a261;
          --cream: #f8f5ef;
          --cream-dark: #eee6da;
          --white: #ffffff;
          --text: #17202a;
          --muted: #69737d;
          --border: #e6ded3;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "DM Sans", Arial, sans-serif;
          color: var(--text);
          background: var(--cream);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .vm-page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 90% 50%,
              rgba(232,111,24,.055),
              transparent 300px
            ),
            var(--cream);
        }

        /* ===============================================
           TOP BAR
        =============================================== */

        .topbar {
          height: 40px;
          background: var(--navy-dark);
          color: white;
          position: relative;
          z-index: 200;
        }

        .topbar-inner {
          max-width: 1500px;
          height: 100%;
          margin: auto;
          padding: 0 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .top-left {
          display: flex;
          align-items: center;
          gap: 13px;
          font-size: 11px;
          font-weight: 500;
        }

        .top-left span {
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .top-divider {
          width: 1px;
          height: 15px;
          background: rgba(255,255,255,.22);
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .social-icons a {
          display: flex;
          transition: .2s ease;
        }

        .social-icons a:hover {
          color: var(--orange-soft);
          transform: translateY(-2px);
        }

        /* ===============================================
           NAVBAR
        =============================================== */

        .navbar {
          height: 92px;
          background: rgba(255,255,255,.97);
          position: relative;
          z-index: 190;
          border-bottom: 1px solid #e5e5e5;
          transition:
            box-shadow .25s ease,
            height .25s ease;
        }

        .navbar-scrolled {
          position: sticky;
          top: 0;
          height: 78px;
          box-shadow: 0 8px 30px rgba(0,0,0,.09);
          backdrop-filter: blur(10px);
        }

        .nav-inner {
          max-width: 1500px;
          height: 100%;
          margin: auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
        }

        .brand img {
          width: 59px;
          height: 59px;
          object-fit: contain;
        }

        .brand-name {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-name strong {
          color: var(--navy);
          font-size: 25px;
          letter-spacing: -.8px;
          font-weight: 800;
        }

        .brand-name span {
          color: var(--orange);
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 800;
          margin-top: 7px;
        }

        .main-nav {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .main-nav a {
          position: relative;
          display: flex;
          align-items: center;
          color: #12294a;
          white-space: nowrap;
          font-size: 12px;
          font-weight: 600;
          transition: color .2s ease;
        }

        .main-nav a:hover,
        .main-nav a.active {
          color: var(--orange);
        }

        .main-nav a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -11px;
          height: 3px;
          border-radius: 20px;
          background: var(--orange);
        }

        .nav-chevron {
          font-size: 14px;
          margin-left: 4px;
          transform: translateY(-1px);
        }

        .menu-button {
          display: none;
          border: 0;
          background: transparent;
          color: var(--navy);
          cursor: pointer;
        }

        /* ===============================================
           HERO
        =============================================== */

        .hero {
          height: 545px;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: var(--navy);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              #062a56 0%,
              #082f60 42%,
              #0a3769 100%
            );
          z-index: 1;
        }

        .hero-image {
          position: absolute;
          top: 0;
          right: 0;
          width: 57%;
          height: 100%;
          z-index: 2;
          overflow: hidden;
          clip-path: ellipse(84% 90% at 82% 50%);
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transform: scale(1.04);
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(5,32,65,.92) 0%,
              rgba(5,32,65,.50) 19%,
              rgba(5,32,65,.10) 52%,
              rgba(5,32,65,.18) 100%
            );
        }

        .hero-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          left: -210px;
          top: -180px;
          background: rgba(255,255,255,.035);
          z-index: 3;
        }

        .hero-watermark {
          position: absolute;
          z-index: 3;
          left: 8%;
          top: 52px;
          width: 280px;
          height: 280px;
          opacity: .07;
          pointer-events: none;
        }

        .hero-watermark img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .hero-content {
          position: absolute;
          z-index: 10;
          left: max(70px, calc((100% - 1350px) / 2));
          top: 78px;
          max-width: 600px;
          color: white;
        }

        .hero-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          font-size: 13px;
          margin-bottom: 38px;
          color: rgba(255,255,255,.72);
        }

        .hero-breadcrumb a {
          transition: .2s ease;
        }

        .hero-breadcrumb a:hover {
          color: white;
        }

        .hero-breadcrumb strong {
          color: #ff9a51;
          font-weight: 600;
        }

        .hero-breadcrumb span {
          opacity: .5;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #ff9a51;
          font-size: 11px;
          letter-spacing: 2.4px;
          font-weight: 700;
          margin-bottom: 17px;
        }

        .hero-label span {
          width: 28px;
          height: 2px;
          background: var(--orange);
        }

        .hero-content h1 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(58px, 6vw, 84px);
          line-height: .96;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .hero-content h1 em {
          color: #f18a3d;
          font-style: normal;
          font-weight: 500;
        }

        .hero-content p {
          max-width: 480px;
          margin: 25px 0 0;
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.7;
        }

        .hero-line {
          width: 64px;
          height: 4px;
          background: var(--orange);
          margin-top: 26px;
          border-radius: 10px;
        }

        .hero-bottom {
          position: absolute;
          z-index: 12;
          bottom: 72px;
          left: max(70px, calc((100% - 1350px) / 2));
          display: flex;
          gap: 45px;
        }

        .hero-bottom-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
        }

        .hero-bottom-item > span {
          color: #ef8140;
          font-size: 12px;
          font-weight: 700;
        }

        .hero-bottom-item div {
          display: flex;
          flex-direction: column;
        }

        .hero-bottom-item strong {
          font-size: 12px;
          font-weight: 700;
        }

        .hero-bottom-item small {
          margin-top: 2px;
          color: rgba(255,255,255,.48);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-wave {
          position: absolute;
          z-index: 20;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 90px;
          pointer-events: none;
        }

        /* ===============================================
           CONTENT
        =============================================== */

        .page-content {
          position: relative;
          z-index: 30;
          max-width: 1240px;
          margin: auto;
          padding: 75px 30px 70px;
        }

        /* ===============================================
           SECTION HEADING
        =============================================== */

        .section-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--orange);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.6px;
        }

        .section-eyebrow span {
          width: 25px;
          height: 2px;
          background: var(--orange);
        }

        .section-eyebrow.left {
          justify-content: flex-start;
        }

        /* ===============================================
           INTRO
        =============================================== */

        .intro-section {
          max-width: 780px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .intro-section h2 {
          margin: 17px 0 18px;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 45px;
          line-height: 1.15;
        }

        .intro-section h2 span {
          color: var(--orange);
        }

        .intro-text {
          max-width: 680px;
          margin: auto;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
        }

        /* ===============================================
           MISSION / VISION
        =============================================== */

        .mv-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-bottom: 105px;
        }

        .mv-card {
          min-height: 405px;
          position: relative;
          padding: 48px 48px 35px;
          overflow: hidden;
          border-radius: 22px;
          background: white;
          border: 1px solid rgba(0,0,0,.035);
          box-shadow: 0 18px 45px rgba(29,38,47,.09);
          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .mv-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 25px 55px rgba(29,38,47,.13);
        }

        .mv-card::after {
          content: "";
          position: absolute;
          width: 210px;
          height: 210px;
          border-radius: 50%;
          right: -85px;
          bottom: -100px;
          background: rgba(8,43,89,.045);
        }

        .vision-card::after {
          background: rgba(232,111,24,.07);
        }

        .card-number {
          position: absolute;
          top: 29px;
          right: 35px;
          color: #e7e7e7;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 55px;
          font-weight: 700;
          line-height: 1;
        }

        .vision-card .card-number {
          color: #f2e3d8;
        }

        .icon-box {
          width: 74px;
          height: 74px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          color: var(--navy);
          background: #edf3f9;
          margin-bottom: 28px;
        }

        .vision-card .icon-box {
          color: var(--orange);
          background: #fff1e8;
        }

        .card-label {
          color: var(--orange);
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 800;
          margin-bottom: 9px;
        }

        .mv-card h2 {
          margin: 0;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 36px;
          font-weight: 700;
        }

        .vision-card h2 {
          color: var(--orange-dark);
        }

        .card-line {
          width: 45px;
          height: 3px;
          margin: 16px 0 20px;
          background: var(--orange);
          border-radius: 5px;
        }

        .mv-card p {
          position: relative;
          z-index: 2;
          max-width: 510px;
          margin: 0;
          color: #66717b;
          font-size: 15px;
          line-height: 1.8;
        }

        .card-footer {
          position: absolute;
          left: 48px;
          right: 48px;
          bottom: 31px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px solid #ececec;
        }

        .card-footer span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #5f6871;
          font-size: 10px;
          font-weight: 700;
        }

        .card-footer svg {
          color: var(--orange);
        }

        /* ===============================================
           VALUES
        =============================================== */

        .values-section {
          margin-bottom: 110px;
        }

        .values-heading {
          display: grid;
          grid-template-columns: 1fr 430px;
          align-items: end;
          gap: 70px;
          margin-bottom: 38px;
        }

        .values-heading h2 {
          margin: 15px 0 0;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 42px;
          line-height: 1.12;
        }

        .values-heading h2 span {
          color: var(--orange);
        }

        .values-heading > p {
          margin: 0 0 5px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .value-card {
          position: relative;
          min-height: 270px;
          padding: 27px 25px;
          background: white;
          border: 1px solid #ece7df;
          border-radius: 16px;
          transition: .3s ease;
          overflow: hidden;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(232,111,24,.35);
          box-shadow: 0 15px 35px rgba(0,0,0,.07);
        }

        .value-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .value-top > span {
          color: #cfd4d8;
          font-size: 11px;
          font-weight: 800;
        }

        .value-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          background: #fff3eb;
          border-radius: 13px;
        }

        .value-card h3 {
          margin: 32px 0 10px;
          color: var(--navy);
          font-size: 18px;
          font-weight: 700;
        }

        .value-card p {
          margin: 0;
          color: #747d84;
          font-size: 12px;
          line-height: 1.7;
        }

        .value-arrow {
          position: absolute;
          right: 23px;
          bottom: 21px;
          color: var(--orange);
          opacity: .45;
        }

        /* ===============================================
           PHILOSOPHY
        =============================================== */

        .philosophy-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 490px;
          margin-bottom: 100px;
          border-radius: 22px;
          overflow: hidden;
          background: var(--navy);
          box-shadow: 0 22px 55px rgba(5,29,60,.13);
        }

        .philosophy-image {
          position: relative;
          min-height: 490px;
        }

        .philosophy-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .philosophy-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(4,29,60,.05),
              rgba(4,29,60,.65)
            );
        }

        .image-badge {
          position: absolute;
          left: 30px;
          bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
        }

        .image-badge > svg {
          color: #ff9854;
        }

        .image-badge span {
          display: flex;
          flex-direction: column;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .image-badge small {
          margin-top: 4px;
          color: rgba(255,255,255,.65);
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .philosophy-content {
          padding: 65px 65px;
          color: white;
        }

        .philosophy-content .section-eyebrow {
          color: #ff9854;
        }

        .philosophy-content h2 {
          margin: 18px 0 20px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 43px;
          line-height: 1.13;
          font-weight: 600;
        }

        .philosophy-content h2 span {
          color: #ff9250;
        }

        .philosophy-content > p {
          margin: 0;
          max-width: 510px;
          color: rgba(255,255,255,.68);
          font-size: 14px;
          line-height: 1.85;
        }

        .philosophy-points {
          display: grid;
          gap: 18px;
          margin-top: 34px;
        }

        .philosophy-points > div {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .point-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff9854;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 10px;
        }

        .philosophy-points > div > div:last-child {
          display: flex;
          flex-direction: column;
          padding-top: 1px;
        }

        .philosophy-points strong {
          font-size: 12px;
          font-weight: 700;
        }

        .philosophy-points span {
          margin-top: 4px;
          color: rgba(255,255,255,.50);
          font-size: 10px;
        }

        /* ===============================================
           BRAND STATEMENT
        =============================================== */

        .brand-statement {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 80px;
        }

        .brand-line {
          width: 150px;
          height: 1px;
          background: #ddcfc0;
        }

        .brand-icon {
          width: 58px;
          height: 58px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          border: 1px solid #e2d4c4;
          border-radius: 50%;
        }

        .brand-content {
          text-align: center;
        }

        .brand-small {
          display: block;
          margin-bottom: 9px;
          color: #9a8c7c;
          font-size: 9px;
          letter-spacing: 2.5px;
          font-weight: 800;
        }

        .brand-content h2 {
          margin: 0;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 24px;
          letter-spacing: 2px;
        }

        .brand-content h2 span {
          color: var(--orange);
          margin: 0 12px;
        }

        .brand-content p {
          margin: 9px 0 0;
          color: #8a8a8a;
          font-size: 11px;
        }

        /* ===============================================
           CTA
        =============================================== */

        .cta-section {
          position: relative;
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 34px 45px;
          border-radius: 18px;
          overflow: hidden;
          background: var(--orange);
          color: white;
          margin-bottom: 15px;
        }

        .cta-pattern {
          position: absolute;
          width: 350px;
          height: 350px;
          right: -80px;
          top: -150px;
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 50%;
        }

        .cta-pattern::after {
          content: "";
          position: absolute;
          inset: 35px;
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 50%;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .cta-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: rgba(255,255,255,.13);
        }

        .cta-content span {
          display: block;
          margin-bottom: 5px;
          color: rgba(255,255,255,.68);
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .cta-content h2 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 25px;
          font-weight: 600;
        }

        .cta-button {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 19px;
          border-radius: 8px;
          background: white;
          color: var(--navy);
          font-size: 12px;
          font-weight: 800;
          transition: .25s ease;
        }

        .cta-button:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 25px rgba(0,0,0,.15);
        }

        /* ===============================================
           TABLET
        =============================================== */

        @media (max-width: 1250px) {

          .nav-inner {
            padding: 0 25px;
          }

          .main-nav {
            gap: 13px;
          }

          .main-nav a {
            font-size: 10.5px;
          }

          .brand-name strong {
            font-size: 22px;
          }

          .brand-name span {
            font-size: 10px;
          }

          .hero-content,
          .hero-bottom {
            left: 55px;
          }

          .page-content {
            max-width: 1080px;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 900px) {

          .topbar {
            height: 36px;
          }

          .topbar-inner {
            padding: 0 15px;
          }

          .top-left {
            font-size: 9px;
            gap: 7px;
          }

          .top-left span:nth-of-type(2),
          .top-left span:nth-of-type(3),
          .top-divider {
            display: none;
          }

          .social-icons {
            gap: 10px;
          }

          .navbar {
            height: 75px;
          }

          .navbar-scrolled {
            height: 70px;
          }

          .nav-inner {
            padding: 0 16px;
          }

          .brand img {
            width: 51px;
            height: 51px;
          }

          .brand-name strong {
            font-size: 18px;
          }

          .brand-name span {
            font-size: 8px;
            letter-spacing: 2px;
            margin-top: 5px;
          }

          .menu-button {
            display: block;
          }

          .main-nav {
            position: fixed;
            top: 111px;
            left: 0;
            right: 0;
            height: calc(100vh - 111px);
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 12px 20px 30px;
            background: white;
            overflow-y: auto;
            box-shadow: 0 15px 30px rgba(0,0,0,.13);
          }

          .main-nav.mobile-open {
            display: flex;
          }

          .main-nav a {
            min-height: 51px;
            border-bottom: 1px solid #eeeeee;
            font-size: 14px;
          }

          .main-nav a.active::after {
            display: none;
          }

          .nav-chevron {
            margin-left: auto;
          }

          .hero {
            height: 590px;
          }

          .hero-image {
            top: auto;
            bottom: 45px;
            width: 100%;
            height: 245px;
            clip-path: none;
          }

          .hero-image-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5,32,65,.30),
                rgba(5,32,65,.05)
              );
          }

          .hero-watermark {
            left: 25px;
            top: 25px;
            width: 170px;
            height: 170px;
          }

          .hero-content {
            left: 24px;
            right: 20px;
            top: 42px;
          }

          .hero-breadcrumb {
            font-size: 11px;
            margin-bottom: 28px;
          }

          .hero-label {
            font-size: 9px;
            letter-spacing: 1.8px;
          }

          .hero-content h1 {
            font-size: 53px;
            letter-spacing: -1.5px;
          }

          .hero-content p {
            max-width: 430px;
            font-size: 13px;
            line-height: 1.65;
          }

          .hero-bottom {
            left: 24px;
            bottom: 272px;
            gap: 22px;
          }

          .hero-bottom-item small {
            display: none;
          }

          .hero-wave {
            height: 65px;
          }

          .page-content {
            padding: 55px 18px 50px;
          }

          .intro-section {
            margin-bottom: 55px;
          }

          .intro-section h2 {
            font-size: 35px;
          }

          .intro-text {
            font-size: 14px;
          }

          .mv-section {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-bottom: 75px;
          }

          .mv-card {
            min-height: 390px;
            padding: 38px 28px 35px;
          }

          .card-number {
            right: 24px;
          }

          .card-footer {
            left: 28px;
            right: 28px;
          }

          .values-heading {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .values-heading h2 {
            font-size: 35px;
          }

          .values-grid {
            grid-template-columns: 1fr 1fr;
          }

          .philosophy-section {
            grid-template-columns: 1fr;
            margin-bottom: 75px;
          }

          .philosophy-image {
            min-height: 310px;
          }

          .philosophy-content {
            padding: 45px 30px;
          }

          .philosophy-content h2 {
            font-size: 35px;
          }

          .brand-statement {
            gap: 10px;
          }

          .brand-line {
            width: 55px;
          }

          .brand-content h2 {
            font-size: 17px;
            letter-spacing: 1px;
          }

          .brand-content h2 span {
            margin: 0 5px;
          }

          .cta-section {
            align-items: flex-start;
            flex-direction: column;
            padding: 28px;
          }

        }

        /* ===============================================
           SMALL MOBILE
        =============================================== */

        @media (max-width: 520px) {

          .top-left span:first-child {
            font-size: 8px;
          }

          .brand-name strong {
            font-size: 16px;
          }

          .brand-name span {
            font-size: 7px;
            letter-spacing: 1.5px;
          }

          .main-nav {
            top: 111px;
            height: calc(100vh - 111px);
          }

          .hero {
            height: 555px;
          }

          .hero-content {
            top: 35px;
          }

          .hero-breadcrumb {
            margin-bottom: 25px;
          }

          .hero-label {
            margin-bottom: 13px;
          }

          .hero-content h1 {
            font-size: 46px;
          }

          .hero-content p {
            font-size: 12px;
            max-width: 330px;
          }

          .hero-bottom {
            bottom: 248px;
            gap: 16px;
          }

          .hero-bottom-item strong {
            font-size: 10px;
          }

          .hero-image {
            height: 220px;
            bottom: 40px;
          }

          .page-content {
            padding-left: 15px;
            padding-right: 15px;
          }

          .section-eyebrow {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .intro-section h2 {
            font-size: 31px;
          }

          .mv-card {
            min-height: 400px;
            padding: 34px 22px;
          }

          .mv-card h2 {
            font-size: 31px;
          }

          .mv-card p {
            font-size: 13px;
          }

          .card-footer {
            left: 22px;
            right: 22px;
            gap: 9px;
          }

          .card-footer span {
            font-size: 8px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .value-card {
            min-height: 230px;
          }

          .values-heading h2 {
            font-size: 31px;
          }

          .philosophy-content {
            padding: 38px 23px;
          }

          .philosophy-content h2 {
            font-size: 31px;
          }

          .philosophy-content > p {
            font-size: 13px;
          }

          .brand-line {
            width: 28px;
          }

          .brand-icon {
            width: 46px;
            height: 46px;
          }

          .brand-content h2 {
            font-size: 13px;
          }

          .brand-content p {
            font-size: 9px;
          }

          .cta-content h2 {
            font-size: 20px;
          }

        }

      `}</style>

    </div>
  );
}