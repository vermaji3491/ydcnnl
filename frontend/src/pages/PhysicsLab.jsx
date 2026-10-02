import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  UserRound,
  ShieldCheck,
  Lightbulb,
  Target,
  Atom,
  CheckCircle2,
  ArrowRight,
  Camera,
  Brain,
  Settings,
  TrendingUp,
  BookOpen,
  Microscope,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const PhysicsLab = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const features = [
    {
      icon: <FlaskConical size={32} />,
      title: "Modern Equipment",
      text: "Advanced instruments for accurate results.",
    },
    {
      icon: <UserRound size={32} />,
      title: "Expert Faculty",
      text: "Guidance from experienced educators.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Safe & Supportive Environment",
      text: "Well-maintained and student-friendly lab.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Practical Learning",
      text: "Bridging theory with real-world applications.",
    },
    {
      icon: <Target size={32} />,
      title: "Research Opportunities",
      text: "Encouraging inquiry and innovation.",
    },
  ];

  const equipmentLeft = [
    "Optics kit (Lenses, Mirrors, Prism)",
    "Electromagnetic apparatus",
    "Digital multimeter & power supplies",
    "Galvanometer",
  ];

  const equipmentRight = [
    "CRO (Cathode Ray Oscilloscope)",
    "Newton's rings apparatus",
    "Michelson Interferometer",
    "Spectrometer",
    "And many more...",
  ];

  const learnItems = [
    {
      icon: <Atom size={27} />,
      title: "Conceptual",
      subtitle: "Clarity",
    },
    {
      icon: <Brain size={27} />,
      title: "Analytical",
      subtitle: "Thinking",
    },
    {
      icon: <Settings size={27} />,
      title: "Problem-Solving",
      subtitle: "Skills",
    },
    {
      icon: <TrendingUp size={27} />,
      title: "Career",
      subtitle: "Readiness",
    },
  ];

  const galleryImages = [
    "/images/labs/physics/DSC_1275.JPG",
    "/images/labs/physics/DSC_1276.JPG",
    "/images/labs/physics/DSC_1277.JPG",
    "/images/labs/physics/DSC_1278.JPG",
    "/images/labs/physics/DSC_1279.JPG",
    "/images/labs/physics/DSC_1280.JPG",
    "/images/labs/physics/DSC_1281.JPG",
  ];

  return (
    <div className="physics-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .physics-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #103e72;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .physics-page img {
          max-width: 100%;
        }

        .physics-container {
          width: min(1240px, calc(100% - 60px));
          margin: 0 auto;
        }

        .physics-page h1,
        .physics-page h2,
        .physics-page h3,
        .physics-page p {
          margin-top: 0;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .physics-hero {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          background: #062452;
          color: white;
        }

        .physics-hero-image {
          position: absolute;
          right: 0;
          top: 0;
          width: 55%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .physics-hero-overlay {
          position: absolute;
          top: 0;
          right: 42%;
          width: 300px;
          height: 100%;
          z-index: 2;
          background: linear-gradient(
            90deg,
            #062452 0%,
            rgba(6,36,82,.98) 35%,
            rgba(6,36,82,.75) 62%,
            rgba(6,36,82,0) 100%
          );
          clip-path: polygon(
            0 0,
            100% 0,
            72% 100%,
            0 100%
          );
        }

        .physics-hero-content {
          position: relative;
          z-index: 5;
          width: 52%;
          padding: 20px 0 95px;
        }

        .physics-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          color: rgba(255,255,255,.82);
          font-size: 12px;
        }

        .physics-breadcrumb strong {
          color: #ffffff;
        }

        .physics-label {
          margin-bottom: 4px;
          color: #ff7616;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: .5px;
          text-transform: uppercase;
        }

        .physics-title {
          margin: 0;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 5vw, 66px);
          line-height: .98;
          font-weight: 700;
        }

        .physics-title span {
          color: #ff7616;
        }

        .physics-title-line {
          width: 95px;
          height: 4px;
          margin: 15px 0;
          border-radius: 10px;
          background: #ff7616;
        }

        .physics-tagline {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          font-weight: 700;
        }

        .physics-tagline span {
          color: #ff7616;
        }

        .physics-description {
          max-width: 550px;
          margin-bottom: 20px;
          color: rgba(255,255,255,.92);
          font-size: 14px;
          line-height: 1.7;
        }

        .physics-hero-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 12px 21px;
          border-radius: 25px;
          background: #ff7616;
          color: white;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: .25s;
        }

        .physics-hero-button:hover {
          background: #ffffff;
          color: #062452;
          transform: translateY(-2px);
        }

        .physics-watermark {
          position: absolute;
          z-index: 3;
          left: 37%;
          top: 50px;
          width: 185px;
          height: 185px;
          border: 2px solid rgba(255,255,255,.08);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .physics-watermark::before {
          content: "YADUVANSHI GROUP OF INSTITUTIONS";
          width: 125px;
          text-align: center;
          color: rgba(255,255,255,.09);
          font-size: 10px;
          line-height: 1.5;
          font-weight: 800;
        }

        /* HERO CURVE */

        .physics-wave {
          position: absolute;
          z-index: 6;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 70px;
        }

        /* =====================================================
           WHY CHOOSE
        ===================================================== */

        .why-section {
          padding: 38px 0 30px;
          background: #ffffff;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 28% 72%;
          gap: 25px;
          align-items: stretch;
        }

        .why-intro {
          padding: 5px 7px;
        }

        .orange-label {
          margin-bottom: 5px;
          color: #ff7616;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        .why-title {
          margin-bottom: 10px;
          color: #07386d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          line-height: 1.08;
        }

        .orange-line {
          width: 48px;
          height: 3px;
          margin: 13px 0 17px;
          background: #ff7616;
          border-radius: 10px;
        }

        .why-text {
          color: #365f89;
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .blue-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 24px;
          background: #073c74;
          color: white;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          transition: .25s;
        }

        .blue-button:hover {
          background: #ff7616;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 13px;
        }

        .feature-card {
          min-height: 180px;
          padding: 18px 10px;
          border: 1px solid #d8eaf8;
          border-radius: 9px;
          background: #ffffff;
          box-shadow: 0 7px 22px rgba(6,36,82,.06);
          text-align: center;
          transition: .25s;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: #ff7616;
          box-shadow: 0 14px 28px rgba(6,36,82,.12);
        }

        .feature-icon {
          width: 58px;
          height: 58px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #ff7616;
          box-shadow: 0 5px 18px rgba(6,36,82,.10);
        }

        .feature-title {
          margin-bottom: 8px;
          color: #07386d;
          font-size: 13px;
          line-height: 1.25;
          font-weight: 800;
        }

        .feature-text {
          color: #527494;
          font-size: 10px;
          line-height: 1.5;
        }

        /* =====================================================
           GALLERY + EQUIPMENT
        ===================================================== */

        .lab-section {
          padding: 15px 0 25px;
        }

        .lab-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          gap: 28px;
          align-items: stretch;
        }

        .gallery-card,
        .equipment-card {
          border: 1px solid #d6e8f7;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 6px 22px rgba(6,36,82,.06);
          overflow: hidden;
        }

        .gallery-main {
          position: relative;
          height: 285px;
          overflow: hidden;
        }

        .gallery-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gallery-badge {
          position: absolute;
          top: 10px;
          left: 0;
          padding: 8px 14px;
          border-radius: 0 20px 20px 0;
          background: #ff7616;
          color: white;
          font-size: 11px;
          font-weight: 800;
        }

        .gallery-caption {
          position: absolute;
          right: 18px;
          bottom: 20px;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-style: italic;
          font-weight: 700;
          text-align: right;
          text-shadow: 0 2px 7px rgba(0,0,0,.6);
        }

        .gallery-caption span {
          color: #ff7616;
        }

        .gallery-thumbs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          padding: 12px;
        }

        .gallery-thumb {
          height: 58px;
          overflow: hidden;
          border-radius: 5px;
        }

        .gallery-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .equipment-card {
          padding: 28px;
          background: linear-gradient(
            135deg,
            #ffffff,
            #f4faff
          );
        }

        .equipment-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid #dcecf7;
        }

        .equipment-heading svg {
          color: #073c74;
        }

        .equipment-heading h2 {
          margin: 0;
          color: #07386d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
        }

        .equipment-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 13px;
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
        }

        .equipment-list li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 9px 10px;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.8);
          color: #164e83;
          font-size: 12px;
          line-height: 1.5;
          border: 1px solid #e4eff8;
        }

        .equipment-list svg {
          flex-shrink: 0;
          color: #ff7616;
        }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 15px 10px;
          border-radius: 7px;
          background: #073c74;
          color: white;
        }

        .stat {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 8px;
          border-right: 1px solid rgba(255,255,255,.35);
        }

        .stat:last-child {
          border-right: none;
        }

        .stat svg {
          color: #ff7616;
          flex-shrink: 0;
        }

        .stat-number {
          display: block;
          font-size: 17px;
          font-weight: 800;
        }

        .stat-text {
          display: block;
          color: rgba(255,255,255,.85);
          font-size: 8px;
          line-height: 1.3;
        }

        /* =====================================================
           WHAT YOU'LL LEARN
        ===================================================== */

        .learn-section {
          padding: 0 0 28px;
        }

        .learn-grid {
          display: grid;
          grid-template-columns: 48% 28% 24%;
          min-height: 220px;
          gap: 0;
        }

        .learn-card {
          padding: 20px;
          border: 1px solid #d9eaf7;
          background: #f5fbff;
          border-radius: 9px 0 0 9px;
        }

        .learn-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 7px;
        }

        .learn-heading svg {
          color: #073c74;
        }

        .learn-heading h2 {
          margin: 0;
          color: #07386d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
        }

        .learn-description {
          margin: 0 0 18px 53px;
          color: #315f89;
          font-size: 11px;
          line-height: 1.5;
        }

        .learn-items {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .learn-item {
          min-height: 90px;
          padding: 10px 5px;
          border: 1px solid #dcecf7;
          border-radius: 7px;
          background: white;
          text-align: center;
        }

        .learn-item-icon {
          width: 42px;
          height: 42px;
          margin: 0 auto 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: #ffffff;
          color: #ff7616;
          box-shadow: 0 4px 13px rgba(6,36,82,.10);
        }

        .learn-item-title,
        .learn-item-subtitle {
          display: block;
          color: #073c74;
          font-size: 9px;
          line-height: 1.25;
          font-weight: 800;
        }

        .student-image {
          overflow: hidden;
          border-top: 1px solid #d9eaf7;
          border-bottom: 1px solid #d9eaf7;
        }

        .student-image img {
          width: 100%;
          height: 100%;
          min-height: 220px;
          object-fit: cover;
          display: block;
        }

        .testimonial {
          padding: 22px;
          border-radius: 0 9px 9px 0;
          background: #073c74;
          color: white;
        }

        .quote-mark {
          color: #ff7616;
          font-size: 46px;
          line-height: .7;
          font-family: Georgia, serif;
        }

        .testimonial-text {
          margin: 12px 0 15px;
          color: rgba(255,255,255,.95);
          font-size: 12px;
          line-height: 1.55;
          font-weight: 500;
        }

        .testimonial-author {
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
        }

        .testimonial-course {
          margin-top: 3px;
          color: rgba(255,255,255,.75);
          font-size: 9px;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .physics-cta {
          position: relative;
          min-height: 190px;
          display: grid;
          grid-template-columns: 31% 69%;
          overflow: hidden;
          background: #062452;
        }

        .physics-cta-image {
          position: relative;
          min-height: 190px;
          overflow: hidden;
        }

        .physics-cta-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .physics-cta-image::after {
          content: "";
          position: absolute;
          right: -1px;
          top: 0;
          width: 100px;
          height: 100%;
          background: #062452;
          clip-path: polygon(
            100% 0,
            100% 100%,
            0 100%
          );
        }

        .physics-cta-content {
          padding: 25px 35px;
          color: white;
        }

        .cta-label {
          margin-bottom: 5px;
          color: #ff7616;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .cta-title {
          margin-bottom: 5px;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
        }

        .cta-title span {
          color: #ff7616;
        }

        .cta-text {
          max-width: 530px;
          margin-bottom: 14px;
          color: rgba(255,255,255,.86);
          font-size: 11px;
          line-height: 1.55;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cta-primary,
        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 22px;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          transition: .25s;
        }

        .cta-primary {
          background: #ff7616;
          color: white;
        }

        .cta-secondary {
          border: 1px solid rgba(255,255,255,.75);
          color: white;
        }

        .cta-primary:hover {
          background: white;
          color: #062452;
        }

        .cta-secondary:hover {
          background: white;
          color: #062452;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .physics-container {
            width: calc(100% - 40px);
          }

          .why-grid {
            grid-template-columns: 1fr;
          }

          .feature-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .lab-grid {
            grid-template-columns: 1fr;
          }

          .learn-grid {
            grid-template-columns: 1fr 1fr;
          }

          .learn-card {
            border-radius: 9px 0 0 9px;
          }

          .student-image {
            border-radius: 0 9px 9px 0;
          }

          .testimonial {
            grid-column: 1 / -1;
            border-radius: 0 0 9px 9px;
          }

          .physics-cta {
            grid-template-columns: 35% 65%;
          }
        }

        @media (max-width: 850px) {
          .physics-hero {
            min-height: 580px;
          }

          .physics-hero-content {
            width: 100%;
            padding: 25px 0 300px;
          }

          .physics-hero-image {
            top: auto;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 300px;
          }

          .physics-hero-overlay {
            top: auto;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 340px;
            background: linear-gradient(
              0deg,
              #062452 0%,
              rgba(6,36,82,.72) 50%,
              rgba(6,36,82,0) 100%
            );
            clip-path: none;
          }

          .physics-watermark {
            display: none;
          }

          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .learn-grid {
            grid-template-columns: 1fr;
          }

          .learn-card {
            border-radius: 9px 9px 0 0;
          }

          .student-image {
            height: 280px;
            border-radius: 0;
          }

          .testimonial {
            border-radius: 0 0 9px 9px;
          }

          .physics-cta {
            grid-template-columns: 1fr;
          }

          .physics-cta-image {
            height: 230px;
            min-height: 230px;
          }

          .physics-cta-image::after {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .physics-container {
            width: calc(100% - 26px);
          }

          .physics-hero {
            min-height: 560px;
          }

          .physics-hero-content {
            padding: 20px 0 270px;
          }

          .physics-title {
            font-size: 43px;
          }

          .physics-tagline {
            font-size: 15px;
          }

          .physics-description {
            font-size: 12px;
          }

          .physics-hero-image {
            height: 270px;
          }

          .physics-hero-overlay {
            height: 300px;
          }

          .physics-wave {
            height: 50px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            min-height: 155px;
          }

          .gallery-main {
            height: 220px;
          }

          .equipment-list {
            grid-template-columns: 1fr;
          }

          .stats-strip {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .stat {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,.25);
            padding-bottom: 10px;
          }

          .stat:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .learn-items {
            grid-template-columns: repeat(2, 1fr);
          }

          .learn-description {
            margin-left: 0;
          }

          .physics-cta-content {
            padding: 25px 20px;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="physics-hero">
        <img
          className="physics-hero-image"
          src="/images/physics-lab-hero.jpg"
          alt="Physics laboratory at Yaduvanshi Degree College"
        />

        <div className="physics-hero-overlay"></div>

        <div className="physics-watermark"></div>

        <div className="physics-container">
          <div className="physics-hero-content">

            <div className="physics-breadcrumb">
              <span>Home</span>
              <span>›</span>
              <span>Facilities</span>
              <span>›</span>
              <span>Laboratories</span>
              <span>›</span>
              <strong>Physics Lab</strong>
            </div>

            <div className="physics-label">
              World-Class Facilities
            </div>

            <h1 className="physics-title">
              Physics <span>Lab</span>
            </h1>

            <div className="physics-title-line"></div>

            <div className="physics-tagline">
              <span>Explore</span>
              <b>•</b>
              <span>Experiment</span>
              <b>•</b>
              <span>Excel</span>
            </div>

            <p className="physics-description">
              Our Physics Lab is equipped with modern instruments and
              advanced technology to provide hands-on learning and
              practical exposure, helping students understand the
              fundamental concepts of physics and their real-world
              applications.
            </p>

            <Link
              to="/admission/online-admission"
              className="physics-hero-button"
            >
              Join Now for a Brighter Future
              <ArrowRight size={16} />
            </Link>

          </div>
        </div>

        <svg
          className="physics-wave"
          viewBox="0 0 1536 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0,55
              C180,95 350,90 520,68
              C720,42 850,72 1030,70
              C1230,68 1370,35 1536,5
              L1536,100
              L0,100
              Z
            "
            fill="#ffffff"
          />

          <path
            d="
              M0,55
              C180,95 350,90 520,68
              C720,42 850,72 1030,70
              C1230,68 1370,35 1536,5
            "
            fill="none"
            stroke="#ff7616"
            strokeWidth="4"
          />
        </svg>
      </section>

      {/* =====================================================
          WHY CHOOSE OUR PHYSICS LAB
      ===================================================== */}

      <section className="why-section">
        <div className="physics-container">

          <div className="why-grid">

            <div className="why-intro">

              <div className="orange-label">
                Why Choose Our
              </div>

              <h2 className="why-title">
                Physics Lab?
              </h2>

              <div className="orange-line"></div>

              <p className="why-text">
                At Yaduvanshi Degree College, we believe in experiential
                learning. Our Physics Lab provides a platform where
                students meet practice, curiosity and innovation.
              </p>

              <Link
                to="/facilities"
                className="blue-button"
              >
                Explore More
                <ArrowRight size={15} />
              </Link>

            </div>

            <div className="feature-grid">

              {features.map((feature, index) => (
                <div
                  className="feature-card"
                  key={index}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>

                  <div className="feature-title">
                    {feature.title}
                  </div>

                  <div className="feature-text">
                    {feature.text}
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          LAB GALLERY + MAJOR EQUIPMENT
      ===================================================== */}

      <section className="lab-section">
        <div className="physics-container">

          <div className="lab-grid">

            {/* GALLERY */}

            <div className="gallery-card">

              <div className="gallery-main">

                <img
                  src="/images/labs/physics/DSC_1274.JPG"
                  alt="Students performing physics experiments"
                />

                <div className="gallery-badge">
                  LAB GALLERY
                </div>

                <div className="gallery-caption">
                  Hands-On<br />
                  <span>Learning,</span><br />
                  Real Impact
                </div>

              </div>

              <div className="gallery-thumbs">

                {galleryImages
                  .slice(0, showAllPhotos ? galleryImages.length : 4)
                  .map((image, index) => (
                  <div
                    className="gallery-thumb"
                    key={image}
                  >
                    <img
                      src={image}
                      alt={`Physics laboratory ${index + 1}`}
                    />
                  </div>
                  ))}

              </div>

              <button
                type="button"
                onClick={() => setShowAllPhotos((visible) => !visible)}
                aria-expanded={showAllPhotos}
                className="mx-3 mb-3 inline-flex items-center gap-2 rounded-md border border-orange-500 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50"
              >
                {showAllPhotos ? "Show Fewer Photos" : "View More Photos"}
                <ArrowRight size={16} />
              </button>

            </div>

            {/* EQUIPMENT */}

            <div className="equipment-card">

              <div className="equipment-heading">
                <Atom size={39} />
                <h2>Major Equipment</h2>
              </div>

              <div className="equipment-list">

                {equipmentLeft.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </li>
                ))}

                {equipmentRight.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </li>
                ))}

              </div>

              <div className="stats-strip">

                <div className="stat">
                  <Award size={22} />
                  <div>
                    <span className="stat-number">
                      10+
                    </span>
                    <span className="stat-text">
                      Advanced Instruments
                    </span>
                  </div>
                </div>

                <div className="stat">
                  <FlaskConical size={22} />
                  <div>
                    <span className="stat-number">
                      5
                    </span>
                    <span className="stat-text">
                      Practical Experiments Per Week
                    </span>
                  </div>
                </div>

                <div className="stat">
                  <Lightbulb size={22} />
                  <div>
                    <span className="stat-number">
                      100%
                    </span>
                    <span className="stat-text">
                      Hands-on Learning
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT YOU'LL LEARN
      ===================================================== */}

      <section className="learn-section">
        <div className="physics-container">

          <div className="learn-grid">

            <div className="learn-card">

              <div className="learn-heading">
                <Target size={40} />
                <h2>What You'll Learn</h2>
              </div>

              <div className="orange-line"></div>

              <p className="learn-description">
                Build a strong foundation in physics with practical
                experience and expert guidance.
              </p>

              <div className="learn-items">

                {learnItems.map((item, index) => (
                  <div
                    className="learn-item"
                    key={index}
                  >
                    <div className="learn-item-icon">
                      {item.icon}
                    </div>

                    <span className="learn-item-title">
                      {item.title}
                    </span>

                    <span className="learn-item-subtitle">
                      {item.subtitle}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* STUDENT IMAGE */}

            <div className="student-image">
              <img
                src="/images/physics-student.jpg"
                alt="Physics student at Yaduvanshi Degree College"
              />
            </div>

            {/* TESTIMONIAL */}

            <div className="testimonial">

              <div className="quote-mark">
                “
              </div>

              <p className="testimonial-text">
                The Physics Lab at Yaduvanshi has given me the
                confidence to understand concepts practically.
                The faculty support and modern equipment make
                learning truly enjoyable.
              </p>

              <div className="testimonial-author">
                — Priya Sharma
              </div>

              <div className="testimonial-course">
                B.Sc. (Final Year)
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ADMISSION CTA
      ===================================================== */}

      <section className="physics-cta">

        <div className="physics-cta-image">
          <img
            src="/images/physics-students.jpg"
            alt="Students at Yaduvanshi Degree College"
          />
        </div>

        <div className="physics-cta-content">

          <div className="cta-label">
            YOUR FUTURE STARTS HERE
          </div>

          <h2 className="cta-title">
            Choose Yaduvanshi
            <br />
            <span>Choose Excellence</span>
          </h2>

          <p className="cta-text">
            Get hands-on learning, expert guidance and the right
            environment to build your future career in science
            and technology.
          </p>

          <div className="cta-buttons">

            <Link
              to="/admission/online-admission"
              className="cta-primary"
            >
              Apply for Admission
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/about"
              className="cta-secondary"
            >
              Know More About Us
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default PhysicsLab;
