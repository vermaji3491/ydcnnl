import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  GraduationCap,
  Building2,
  Users,
  BriefcaseBusiness,
  Trophy,
  ShieldCheck,
  HeartHandshake,
  Eye,
  Target,
  BookOpen,
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

/*
  AboutSociety.jsx
  -------------------------------------------------------
  One-file React page: JSX + complete CSS are contained
  in this file.

  Required images:
    public/images/Cyaduvanshilogo.jpg
    public/images/campus3.png
    public/images/handon.png
*/

export default function AboutSociety() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      text: "We believe in transparency, honesty and strong ethical principles in everything we do.",
    },
    {
      icon: HeartHandshake,
      title: "Compassion",
      text: "We care for communities and work towards their holistic growth and well-being.",
    },
    {
      icon: GraduationCap,
      title: "Excellence",
      text: "We strive for the highest standards in education and all our social initiatives.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      text: "We promote equal opportunities for all without any discrimination.",
    },
    {
      icon: BarChart3,
      title: "Growth",
      text: "We are committed to continuous improvement and nation-building through service.",
    },
  ];

  const impact = [
    { icon: GraduationCap, number: "29+", label: "Years of", sub: "Excellence" },
    { icon: Building2, number: "15+", label: "Institutions", sub: "Across Haryana" },
    { icon: Users, number: "25000+", label: "Students", sub: "Empowered" },
    { icon: BriefcaseBusiness, number: "1000+", label: "Top Recruiters", sub: "& Partners" },
    { icon: Trophy, number: "100+", label: "Awards &", sub: "Recognitions" },
  ];

  return (
    <div className="society-page">
      {/* ===================== HERO ===================== */}
      <section className="society-hero">
        <div className="hero-watermark">
          <img src="/images/Cyaduvanshilogo.png" alt="" />
        </div>

        <div className="hero-copy">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/about">About Us</a>
            <span>›</span>
            <b>About Society</b>
          </div>

          <div className="orange-line hero-line" />

          <h1>About Society</h1>

          <div className="orange-line short-line" />

          <h2>A Legacy of Service. A Vision for Humanity.</h2>

          <p>
            Rao Chiranji Lal Samriti Jan Seva Trust, the founding force behind
            Yaduvanshi Group of Institutions, is dedicated to social upliftment
            through quality education, healthcare, and community development
            since 1995.
          </p>
        </div>

        <div className="hero-image-wrap">
          <img
            src="/images/college-bg.png"
            alt="Yaduvanshi campus"
            className="hero-campus-image"
          />
        </div>

        <svg
          className="hero-wave"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="cream-fill"
            d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1440,230 L0,230 Z"
            fill="#f7f0e6"
          />
          <path
            className="orange-stroke"
            d="M0,101 C150,194 355,197 555,122 C775,41 990,79 1160,116 C1280,142 1365,124 1440,77"
            fill="none"
            stroke="#ef6c00"
            strokeWidth="12"
          />
        </svg>
      </section>

      {/* ===================== TRUST CONTENT ===================== */}
      <main className="society-main">
        <section className="trust-section">
          <div className="trust-copy">
            <div className="section-kicker">ABOUT THE TRUST</div>
            <div className="small-orange-rule">
              <span />
            </div>

            <h2>Rao Chiranji Lal Samriti<br />Jan Seva Trust</h2>

            <p>
             For more than three decades, Rao Chiranji Lal Samriti Jan Seva Trust
              has been dedicated to serving communities through education, healthcare,
               and rural welfare. Established in 1995 by the visionary Shri Rao Bahadur Singh,
                the Trust was founded on a simple but enduring belief: meaningful social change
                 begins by creating opportunities for people to learn, stay healthy, and build better lives.
            </p>

            <p>
             Education is at the centre of the Trust’s vision.
              We believe that quality education can open doors, build confidence,
               and shape responsible citizens. Through our educational initiatives, we focus on learning, 
               character, practical skills, and the overall growth of young people.
            </p>

            <p>
             Our work also extends to healthcare and community welfare, with a focus on supporting 
             individuals and families who need greater access to essential services and opportunities,
              particularly in rural communities. 
            </p>

            <p>
              Guided by the values of service, compassion, integrity, and social responsibility,
               the Trust continues to carry forward the vision of its founder. Our aim is not simply
                to provide assistance, but to create lasting opportunities that enable individuals and
                 communities to move forward with greater confidence and dignity.
            </p>

            <div className="trust-features">
              <div className="trust-feature">
                <div className="feature-icon">
                  <HeartHandshake size={38} />
                </div>
                <strong>Service to<br />Society</strong>
              </div>

              <div className="trust-feature">
                <div className="feature-icon">
                  <BookOpen size={38} />
                </div>
                <strong>Promotion of<br />Education</strong>
              </div>

              <div className="trust-feature">
                <div className="feature-icon">
                  <Users size={38} />
                </div>
                <strong>Community<br />Development</strong>
              </div>
            </div>
          </div>

          <div className="trust-visual">
            <div className="hands-image-card">
              <img
                src="/images/handon.jpg"
                alt="Community and service"
              />
              <div className="logo-badge">
                <img
                  src="/images/Cyaduvanshilogo.png"
                  alt="Yaduvanshi logo"
                />
              </div>
            </div>

            <div className="mission-vision-card">
              <div className="mv-item">
                <div className="mv-icon"><Target size={37} /></div>
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    To uplift society through education, healthcare, and social
                    welfare initiatives.
                  </p>
                </div>
              </div>

              <div className="mv-divider" />

              <div className="mv-item">
                <div className="mv-icon"><Eye size={37} /></div>
                <div>
                  <h3>Our Vision</h3>
                  <p>
                    A progressive society where every individual has equal
                    opportunities to learn, grow and succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== VALUES ===================== */}
        <section className="values-section">
          <div className="center-kicker">OUR CORE VALUES</div>
          <div className="center-rule"><span /></div>

          <div className="values-grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article className="value-card" key={value.title}>
                  <div className="value-icon">
                    <Icon size={43} strokeWidth={1.9} />
                  </div>
                  <h3>{value.title}</h3>
                  <div className="value-orange-line" />
                  <p>{value.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================== IMPACT ===================== */}
        <section className="impact-section">
          <div className="impact-bg" />

          <h2>Our Impact</h2>
          <div className="impact-rule"><span /></div>

          <div className="impact-grid">
            {impact.map((item) => {
              const Icon = item.icon;
              return (
                <div className="impact-item" key={item.number}>
                  <div className="impact-icon">
                    <Icon size={43} strokeWidth={1.8} />
                  </div>
                  <strong>{item.number}</strong>
                  <span>{item.label}</span>
                  <span>{item.sub}</span>
                </div>
              );
            })}
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
          text-decoration: none;
          color: inherit;
        }

        .society-page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 8% 70%, rgba(232, 221, 201, .45) 0 70px, transparent 71px),
            radial-gradient(circle at 98% 75%, rgba(232, 221, 201, .42) 0 80px, transparent 81px),
            #f8f2e9;
        }

        /* TOP BAR */
        .society-topbar {
          height: 43px;
          background: #06254b;
          color: #fff;
        }

        .society-topbar-inner {
          max-width: 1500px;
          height: 100%;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 600;
        }

        .top-info {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .top-info span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .top-info i {
          width: 1px;
          height: 17px;
          background: rgba(255,255,255,.25);
        }

        .socials {
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .socials a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        /* NAV */
        .society-navbar {
          height: 105px;
          background: #fff;
          position: relative;
          z-index: 50;
          box-shadow: 0 1px 0 rgba(6,37,75,.07);
        }

        .nav-inner {
          max-width: 1500px;
          height: 100%;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
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

        .brand-name {
          display: flex;
          flex-direction: column;
          line-height: .94;
        }

        .brand-name strong {
          color: #062b59;
          font-size: 26px;
          letter-spacing: -.8px;
          font-weight: 800;
        }

        .brand-name span {
          color: #e65d1a;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: .6px;
          margin-top: 7px;
        }

        .main-nav {
          display: flex;
          align-items: stretch;
          height: 100%;
          gap: 29px;
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
          bottom: 23px;
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

        /* HERO */
        .society-hero {
          position: relative;
          height: 420px;
          background: #062a55;
          overflow: hidden;
          isolation: isolate;
        }

        .hero-copy {
          position: absolute;
          z-index: 10;
          left: max(56px, calc((100% - 1380px) / 2));
          top: 53px;
          width: 510px;
          color: white;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 29px;
        }

        .breadcrumb a {
          color: #fff;
        }

        .breadcrumb b {
          color: #fff;
          font-weight: 500;
        }

        .orange-line {
          height: 4px;
          background: #ff8a00;
        }

        .hero-line {
          width: 48px;
          margin-bottom: 20px;
          display: none;
        }

        .society-hero h1 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(46px, 4.2vw, 62px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -.8px;
        }

        .short-line {
          width: 90px;
          margin: 17px 0 17px;
          height: 3px;
          position: relative;
        }

        .short-line::after {
          content: "";
          position: absolute;
          right: -2px;
          top: -2px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff8a00;
        }

        .society-hero h2 {
          margin: 0 0 17px;
          color: #ff9800;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 700;
        }

        .society-hero p {
          max-width: 390px;
          margin: 0;
          color: #fff;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 400;
        }

        .hero-watermark {
          position: absolute;
          z-index: 2;
          left: 178px;
          top: 18px;
          width: 320px;
          height: 320px;
          opacity: .13;
          filter: grayscale(.5);
        }

        .hero-watermark img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .hero-image-wrap {
          position: absolute;
          z-index: 1;
          right: -1px;
          top: 0;
          width: 56%;
          height: 100%;
          overflow: hidden;
          clip-path: ellipse(86% 95% at 83% 50%);
        }

        .hero-campus-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-image-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(6,42,85,.20), transparent 28%);
        }

        .hero-wave {
          position: absolute;
          z-index: 20;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 65px;
          display: block;
          pointer-events: none;
        }

        .cream-fill {
          fill: #f7f0e6;
        }

        .orange-stroke {
          fill: none;
          stroke: #ef6c00;
          stroke-width: 12;
        }

        /* MAIN */
        .society-main {
          position: relative;
          z-index: 30;
          max-width: 1450px;
          margin: 0 auto;
          padding: 22px 48px 55px;
        }

        .trust-section {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: start;
          gap: 72px;
          padding-top: 35px;
        }

        .trust-copy {
          padding-top: 8px;
        }

        .section-kicker,
        .center-kicker {
          color: #df5b15;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .15px;
        }

        .small-orange-rule {
          width: 44px;
          height: 3px;
          background: #e96b18;
          margin: 9px 0 20px;
          position: relative;
        }

        .small-orange-rule span {
          position: absolute;
          right: -2px;
          top: -2px;
          width: 7px;
          height: 7px;
          background: #e96b18;
          border-radius: 50%;
        }

        .trust-copy h2 {
          margin: 0 0 21px;
          color: #0b2d5a;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          line-height: 1.18;
          font-weight: 800;
        }

        .trust-copy p {
          max-width: 490px;
          margin: 0 0 18px;
          color: #111;
          font-size: 14px;
          line-height: 1.62;
        }

        .trust-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 27px;
        }

        .trust-feature {
          text-align: center;
          color: #0a2c58;
        }

        .feature-icon {
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #062d61;
        }

        .feature-icon svg {
          stroke: #062d61;
        }

        .trust-feature strong {
          display: block;
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.45;
        }

        .trust-visual {
          position: relative;
          padding-top: 0;
        }

        .hands-image-card {
          height: 390px;
          border-radius: 17px;
          overflow: hidden;
          background: #ddd;
          position: relative;
          box-shadow: 0 9px 20px rgba(0,0,0,.16);
        }

        .hands-image-card > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .logo-badge {
          position: absolute;
          left: 23px;
          top: 15px;
          width: 108px;
          height: 108px;
          padding: 9px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 4px 13px rgba(0,0,0,.18);
        }

        .logo-badge img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }

        .mission-vision-card {
          position: relative;
          margin: -57px 0 0 10px;
          width: calc(100% - 10px);
          min-height: 130px;
          border-radius: 16px;
          background: #062d61;
          color: white;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: center;
          padding: 18px 26px;
          box-shadow: 0 8px 17px rgba(0,0,0,.23);
          z-index: 5;
        }

        .mv-item {
          display: grid;
          grid-template-columns: 45px 1fr;
          gap: 12px;
          align-items: start;
        }

        .mv-icon {
          color: #ff9400;
          padding-top: 1px;
        }

        .mv-item h3 {
          margin: 0 0 6px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 17px;
          color: white;
        }

        .mv-item p {
          margin: 0;
          font-size: 12px;
          line-height: 1.55;
          color: #fff;
        }

        .mv-divider {
          height: 78px;
          background: rgba(255,255,255,.48);
        }

        /* VALUES */
        .values-section {
          margin-top: 43px;
        }

        .center-kicker {
          text-align: center;
        }

        .center-rule {
          width: 44px;
          height: 3px;
          margin: 9px auto 17px;
          background: #e96b18;
          position: relative;
        }

        .center-rule span {
          position: absolute;
          right: -2px;
          top: -2px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e96b18;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 17px;
        }

        .value-card {
          min-height: 220px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(24,32,43,.11);
          border-bottom: 4px solid #ef650d;
          padding: 21px 16px 19px;
          text-align: center;
          position: relative;
        }

        .value-card::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 4px;
          border-radius: 0 0 12px 12px;
          background: #f36d0c;
        }

        .value-icon {
          height: 67px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #082e5d;
        }

        .value-card h3 {
          margin: 4px 0 7px;
          color: #0a2d59;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 17px;
          font-weight: 800;
        }

        .value-orange-line {
          width: 42px;
          height: 3px;
          background: #ef6b13;
          margin: 0 auto 13px;
        }

        .value-card p {
          margin: 0;
          color: #151515;
          font-size: 12px;
          line-height: 1.62;
        }

        /* IMPACT */
        .impact-section {
          position: relative;
          margin-top: 30px;
          min-height: 192px;
          border-radius: 17px;
          overflow: hidden;
          background: #062b5a;
          color: white;
          box-shadow: 0 6px 16px rgba(0,0,0,.14);
        }

        .impact-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(5,43,88,.90), rgba(5,43,88,.94)),
            url("/images/campus3.png") center / cover;
          opacity: .72;
        }

        .impact-section h2 {
          position: relative;
          margin: 14px 0 0;
          text-align: center;
          color: #ff9800;
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
        }

        .impact-rule {
          position: relative;
          width: 52px;
          height: 2px;
          background: #ff9700;
          margin: 6px auto 7px;
        }

        .impact-rule span {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          right: -2px;
          top: -2px;
          background: #ff9700;
        }

        .impact-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          margin: 0 55px;
        }

        .impact-item {
          min-height: 125px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,.35);
          padding: 4px 15px 8px;
        }

        .impact-item:last-child {
          border-right: 0;
        }

        .impact-icon {
          color: #ff9900;
          height: 39px;
          display: flex;
          align-items: center;
        }

        .impact-item strong {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 30px;
          line-height: 1.1;
          margin: 4px 0 4px;
        }

        .impact-item span {
          color: #ff9800;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
        }

        /* TABLET */
        @media (max-width: 1150px) {
          .main-nav {
            gap: 17px;
          }

          .main-nav a {
            font-size: 12px;
          }

          .brand-name strong {
            font-size: 23px;
          }

          .brand-name span {
            font-size: 13px;
          }

          .trust-section {
            gap: 40px;
          }

          .hero-copy {
            left: 45px;
            width: 440px;
          }

          .hero-image-wrap {
            width: 59%;
          }
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .society-topbar {
            height: auto;
            min-height: 43px;
          }

          .society-topbar-inner {
            padding: 8px 16px;
          }

          .top-info {
            gap: 9px;
            flex-wrap: wrap;
            font-size: 10px;
          }

          .top-info i,
          .top-info span:nth-of-type(3) {
            display: none;
          }

          .socials {
            gap: 10px;
          }

          .society-navbar {
            height: 78px;
          }

          .nav-inner {
            padding: 0 16px;
          }

          .brand img {
            width: 54px;
            height: 54px;
          }

          .brand-name strong {
            font-size: 20px;
          }

          .brand-name span {
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
            padding: 12px 18px 18px;
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

          .society-hero {
            height: 590px;
          }

          .hero-image-wrap {
            top: auto;
            bottom: 65px;
            width: 100%;
            height: 245px;
            clip-path: none;
            border-radius: 0;
          }

          .hero-copy {
            top: 35px;
            left: 24px;
            right: 24px;
            width: auto;
          }

          .hero-watermark {
            left: 80px;
            top: 10px;
            width: 270px;
            height: 270px;
          }

          .society-hero h1 {
            font-size: 46px;
          }

          .society-hero h2 {
            font-size: 16px;
          }

          .society-hero p {
            max-width: 440px;
            font-size: 13px;
          }

          .hero-wave {
            height: 75px;
          }

          .society-main {
            padding: 15px 20px 40px;
          }

          .trust-section {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .trust-copy h2 {
            font-size: 28px;
          }

          .hands-image-card {
            height: 330px;
          }

          .mission-vision-card {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: -35px;
            width: calc(100% - 10px);
          }

          .mv-divider {
            display: none;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
            margin: 0 20px;
          }

          .impact-item {
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.28);
          }
        }

        @media (max-width: 520px) {
          .top-info span:nth-of-type(2) {
            display: none;
          }

          .brand-name strong {
            font-size: 17px;
          }

          .brand-name span {
            font-size: 9px;
          }

          .society-hero {
            height: 570px;
          }

          .society-hero h1 {
            font-size: 38px;
          }

          .hero-image-wrap {
            height: 215px;
            bottom: 62px;
          }

          .hero-copy {
            top: 27px;
          }

          .breadcrumb {
            font-size: 11px;
            margin-bottom: 19px;
          }

          .society-hero h2 {
            font-size: 14px;
          }

          .society-hero p {
            font-size: 12px;
            max-width: 340px;
          }

          .trust-features {
            gap: 5px;
          }

          .trust-feature strong {
            font-size: 11px;
          }

          .hands-image-card {
            height: 270px;
          }

          .logo-badge {
            width: 82px;
            height: 82px;
            left: 13px;
            top: 12px;
          }

          .mission-vision-card {
            padding: 17px;
          }

          .mv-item {
            grid-template-columns: 38px 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .value-card {
            min-height: 190px;
          }

          .impact-grid {
            grid-template-columns: 1fr;
          }

          .impact-item {
            min-height: 115px;
          }
        }
      `}</style>
    </div>
  );
}
