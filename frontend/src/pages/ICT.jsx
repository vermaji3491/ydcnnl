import React from "react";
import {
  Monitor,
  Wifi,
  Server,
  Laptop,
  Projector,
  Video,
  Network,
  ShieldCheck,
  Cloud,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const ICT = () => {
  const facilities = [
    {
      icon: <Monitor size={30} />,
      title: "Computer Labs",
      text: "Modern computer facilities are available to support practical learning, programming, academic projects and digital activities.",
    },
    {
      icon: <Wifi size={30} />,
      title: "High-Speed Internet",
      text: "Internet connectivity supports online learning, research, digital resources and academic communication across the campus.",
    },
    {
      icon: <Projector size={30} />,
      title: "Smart Classrooms",
      text: "ICT-enabled classrooms provide digital teaching facilities to make classroom learning more interactive and engaging.",
    },
    {
      icon: <Video size={30} />,
      title: "Audio Visual Facilities",
      text: "Audio-visual equipment helps faculty members deliver presentations, demonstrations and multimedia-based lectures.",
    },
    {
      icon: <Server size={30} />,
      title: "IT Infrastructure",
      text: "The institution maintains essential IT infrastructure to support academic, administrative and communication requirements.",
    },
    {
      icon: <Network size={30} />,
      title: "Campus Networking",
      text: "Network facilities help connect different academic and administrative areas for efficient digital communication.",
    },
  ];

  const digitalFeatures = [
    "ICT-enabled teaching and learning",
    "Internet access for academic activities",
    "Digital presentations and multimedia teaching",
    "Computer-based practical learning",
    "Online academic resources",
    "Digital communication facilities",
    "Technology-supported administration",
    "Access to modern learning tools",
  ];

  return (
    <div className="ict-page">

      {/* ================= HERO ================= */}
      <section className="ict-hero">
        <div className="ict-hero-overlay"></div>

        <div className="ict-container ict-hero-content">
          <div className="ict-hero-text">

            <div className="ict-small-label">
              <span></span>
              FACILITIES
            </div>

            <h1>
              Information &amp;
              <br />
              <strong>Communication Technology</strong>
            </h1>

            <p>
              Technology-enabled facilities supporting modern education,
              digital learning, academic research and campus communication.
            </p>

            <div className="ict-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Facilities</span>
              <span>/</span>
              <span>ICT</span>
            </div>
          </div>

          <div className="ict-hero-card">
            <div className="ict-hero-icon">
              <Monitor size={48} strokeWidth={1.6} />
            </div>

            <h3>Digital Learning</h3>

            <p>
              Empowering students and faculty through technology-enabled
              education.
            </p>

            <div className="ict-hero-line"></div>
          </div>
        </div>

        {/* CURVE */}
        <svg
          className="ict-wave"
          viewBox="0 0 1536 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="ict-wave-orange"
            d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1536,40"
          />

          <path
            className="ict-wave-cream"
            d="M0,120 C150,213 355,215 555,140 C775,59 990,97 1160,134 C1280,160 1365,142 1440,95 L1536,47 L1536,220 L0,220 Z"
          />
        </svg>
      </section>

      {/* ================= INTRO ================= */}
      <section className="ict-intro">
        <div className="ict-container">

          <div className="ict-section-heading">
            <div className="ict-heading-tag">
              <span></span>
              ICT FACILITIES
            </div>

            <h2>
              Technology Supporting
              <br />
              <span>Modern Education</span>
            </h2>
          </div>

          <div className="ict-intro-grid">

            <div className="ict-intro-image">
              <div className="ict-image-box">
                <div className="ict-image-content">
                  <Laptop size={72} strokeWidth={1.2} />
                  <h3>Smart Campus</h3>
                  <p>
                    Technology-enabled learning environment
                  </p>
                </div>
              </div>

              <div className="ict-experience">
                <strong>ICT</strong>
                <span>Enabled Campus</span>
              </div>
            </div>

            <div className="ict-intro-content">
              <h3>
                Information &amp; Communication Technology
              </h3>

              <p>
                Yaduvanshi Degree College provides technology-enabled
                facilities to support teaching, learning, research and
                academic communication. ICT plays an important role in
                creating an engaging and accessible learning environment
                for students and faculty.
              </p>

              <p>
                The institution encourages the use of digital resources,
                computer facilities, internet connectivity and multimedia
                tools as part of the academic environment.
              </p>

              <div className="ict-highlight">
                <ShieldCheck size={28} />

                <div>
                  <strong>Technology-Enabled Learning</strong>
                  <p>
                    Supporting students and faculty with digital tools
                    and modern teaching resources.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className="ict-facilities">
        <div className="ict-container">

          <div className="ict-section-heading center">
            <div className="ict-heading-tag">
              <span></span>
              OUR ICT FACILITIES
            </div>

            <h2>
              Digital Infrastructure
              <br />
              <span>for Learning &amp; Research</span>
            </h2>

            <p>
              The campus provides a range of ICT facilities designed to
              support academic and administrative activities.
            </p>
          </div>

          <div className="ict-card-grid">

            {facilities.map((item, index) => (
              <div className="ict-card" key={index}>

                <div className="ict-card-icon">
                  {item.icon}
                </div>

                <div className="ict-card-number">
                  0{index + 1}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="ict-card-bottom">
                  <span>ICT Facility</span>
                  <ArrowRight size={18} />
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= DIGITAL LEARNING ================= */}
      <section className="ict-digital">
        <div className="ict-container">

          <div className="ict-digital-box">

            <div className="ict-digital-left">
              <div className="ict-heading-tag light">
                <span></span>
                DIGITAL CAMPUS
              </div>

              <h2>
                Enhancing Learning
                <br />
                Through <span>Technology</span>
              </h2>

              <p>
                ICT facilities provide students and faculty with access
                to technology-supported learning opportunities and
                digital academic resources.
              </p>

              <Link to="/contact" className="ict-button">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="ict-digital-right">

              <div className="ict-digital-icon">
                <Cloud size={54} strokeWidth={1.4} />
              </div>

              <h3>Digital Learning Environment</h3>

              <p>
                Technology is integrated into academic activities to
                encourage interactive, flexible and resource-rich
                learning.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="ict-features">
        <div className="ict-container">

          <div className="ict-feature-grid">

            <div className="ict-feature-heading">
              <div className="ict-heading-tag">
                <span></span>
                KEY FEATURES
              </div>

              <h2>
                Technology at the
                <br />
                <span>Heart of Learning</span>
              </h2>

              <p>
                ICT infrastructure contributes to a connected and
                technology-supported campus environment.
              </p>
            </div>

            <div className="ict-feature-list">

              {digitalFeatures.map((feature, index) => (
                <div className="ict-feature-item" key={index}>
                  <CheckCircle2 size={21} />
                  <span>{feature}</span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="ict-cta">
        <div className="ict-container">

          <div className="ict-cta-box">

            <div>
              <div className="ict-heading-tag light">
                <span></span>
                YADUVANSHI DEGREE COLLEGE
              </div>

              <h2>
                Building a
                <span> Technology-Enabled</span>
                Campus
              </h2>

              <p>
                Supporting education with modern digital infrastructure
                and technology-enabled learning facilities.
              </p>
            </div>

            <Link to="/facilities" className="ict-cta-button">
              Explore Facilities
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .ict-page {
          font-family: "DM Sans", Arial, sans-serif;
          color: #243447;
          background: #fffdf9;
          overflow: hidden;
        }

        .ict-container {
          width: min(1180px, 92%);
          margin: auto;
        }

        /* HERO */

        .ict-hero {
          min-height: 570px;
          position: relative;
          background:
            linear-gradient(
              120deg,
              rgba(3, 29, 69, 0.98),
              rgba(8, 48, 96, 0.94)
            );
          color: white;
          overflow: hidden;
        }

        .ict-hero-overlay {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: rgba(255, 118, 0, 0.09);
          right: -120px;
          top: -160px;
        }

        .ict-hero-content {
          min-height: 510px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 70px;
          position: relative;
          z-index: 2;
          padding-bottom: 80px;
        }

        .ict-hero-text {
          max-width: 680px;
        }

        .ict-small-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ff8a19;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .ict-small-label span {
          width: 35px;
          height: 2px;
          background: #ff7600;
        }

        .ict-hero h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.08;
          margin: 0 0 22px;
          font-weight: 400;
        }

        .ict-hero h1 strong {
          color: #ff8a19;
          font-weight: 500;
        }

        .ict-hero-text > p {
          max-width: 600px;
          color: #dbe5f2;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .ict-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: #cbd7e5;
          font-size: 14px;
        }

        .ict-breadcrumb a {
          color: #ff8a19;
          text-decoration: none;
          font-weight: 700;
        }

        .ict-hero-card {
          width: 285px;
          min-width: 285px;
          padding: 38px 30px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          box-shadow: 0 20px 50px rgba(0,0,0,.18);
        }

        .ict-hero-icon {
          width: 78px;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: #ff8a19;
          background: rgba(255,118,0,.12);
          margin-bottom: 25px;
        }

        .ict-hero-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          margin: 0 0 10px;
        }

        .ict-hero-card p {
          color: #d6dfeb;
          line-height: 1.7;
          font-size: 14px;
          margin: 0;
        }

        .ict-hero-line {
          width: 50px;
          height: 3px;
          background: #ff7600;
          margin-top: 25px;
        }

        .ict-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 170px;
          z-index: 3;
        }

        .ict-wave-orange {
          fill: none;
          stroke: #ff7600;
          stroke-width: 5;
        }

        .ict-wave-cream {
          fill: #fffdf9;
        }

        /* SECTION HEADING */

        .ict-section-heading {
          margin-bottom: 55px;
        }

        .ict-section-heading.center {
          text-align: center;
        }

        .ict-heading-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ff7600;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .ict-section-heading.center .ict-heading-tag {
          justify-content: center;
        }

        .ict-heading-tag span {
          width: 32px;
          height: 2px;
          background: #ff7600;
        }

        .ict-heading-tag.light {
          color: #ff9a35;
        }

        .ict-section-heading h2,
        .ict-feature-heading h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #062452;
          font-size: clamp(34px, 4vw, 50px);
          line-height: 1.15;
          font-weight: 400;
          margin: 0;
        }

        .ict-section-heading h2 span,
        .ict-feature-heading h2 span {
          color: #ff7600;
        }

        .ict-section-heading.center p {
          max-width: 650px;
          margin: 18px auto 0;
          line-height: 1.8;
          color: #64748b;
        }

        /* INTRO */

        .ict-intro {
          padding: 80px 0 100px;
          background: #fffdf9;
        }

        .ict-intro-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 75px;
          align-items: center;
        }

        .ict-intro-image {
          position: relative;
        }

        .ict-image-box {
          min-height: 430px;
          border-radius: 24px;
          background:
            radial-gradient(
              circle at 30% 30%,
              rgba(255,118,0,.18),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #082b59,
              #061e42
            );
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 60px rgba(6,36,82,.15);
          position: relative;
          overflow: hidden;
        }

        .ict-image-box::before {
          content: "";
          position: absolute;
          width: 270px;
          height: 270px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 50%;
        }

        .ict-image-content {
          text-align: center;
          position: relative;
          color: white;
        }

        .ict-image-content svg {
          color: #ff8a19;
          margin-bottom: 20px;
        }

        .ict-image-content h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          margin: 0 0 8px;
        }

        .ict-image-content p {
          color: #cad6e4;
          margin: 0;
        }

        .ict-experience {
          position: absolute;
          right: -25px;
          bottom: 35px;
          background: #ff7600;
          color: white;
          padding: 18px 25px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 35px rgba(255,118,0,.25);
        }

        .ict-experience strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
        }

        .ict-experience span {
          font-size: 12px;
          margin-top: 2px;
        }

        .ict-intro-content h3 {
          color: #062452;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 31px;
          margin: 0 0 20px;
        }

        .ict-intro-content > p {
          color: #617083;
          line-height: 1.9;
          margin-bottom: 17px;
        }

        .ict-highlight {
          margin-top: 28px;
          display: flex;
          gap: 17px;
          padding: 20px;
          border-left: 4px solid #ff7600;
          background: #fff3e7;
          border-radius: 0 12px 12px 0;
        }

        .ict-highlight svg {
          color: #ff7600;
          min-width: 28px;
        }

        .ict-highlight strong {
          color: #062452;
        }

        .ict-highlight p {
          margin: 5px 0 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }

        /* FACILITIES */

        .ict-facilities {
          padding: 100px 0;
          background: #f8f1e8;
        }

        .ict-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .ict-card {
          background: white;
          border-radius: 18px;
          padding: 30px;
          position: relative;
          border: 1px solid #eee6dc;
          transition: .3s ease;
          overflow: hidden;
        }

        .ict-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 45px rgba(6,36,82,.12);
        }

        .ict-card-icon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff0e3;
          color: #ff7600;
          border-radius: 14px;
          margin-bottom: 25px;
        }

        .ict-card-number {
          position: absolute;
          right: 25px;
          top: 25px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          color: #edf0f4;
          font-weight: 700;
        }

        .ict-card h3 {
          color: #062452;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          margin: 0 0 12px;
        }

        .ict-card p {
          color: #697789;
          font-size: 14px;
          line-height: 1.75;
          min-height: 100px;
        }

        .ict-card-bottom {
          border-top: 1px solid #edf0f3;
          padding-top: 16px;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ff7600;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        /* DIGITAL */

        .ict-digital {
          padding: 100px 0;
          background: white;
        }

        .ict-digital-box {
          border-radius: 25px;
          padding: 60px;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(255,118,0,.12),
              transparent 25%
            ),
            #062452;
          color: white;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 70px;
          align-items: center;
        }

        .ict-digital-left h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 45px;
          line-height: 1.15;
          font-weight: 400;
          margin: 0 0 18px;
        }

        .ict-digital-left h2 span {
          color: #ff8a19;
        }

        .ict-digital-left > p {
          max-width: 570px;
          color: #cbd7e5;
          line-height: 1.8;
        }

        .ict-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ff7600;
          color: white;
          text-decoration: none;
          padding: 14px 22px;
          border-radius: 8px;
          margin-top: 15px;
          font-weight: 700;
          transition: .25s;
        }

        .ict-button:hover {
          background: #ff8a19;
          transform: translateY(-2px);
        }

        .ict-digital-right {
          padding: 35px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.05);
          border-radius: 18px;
        }

        .ict-digital-icon {
          width: 75px;
          height: 75px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,118,0,.12);
          color: #ff8a19;
          margin-bottom: 22px;
        }

        .ict-digital-right h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          margin: 0 0 12px;
        }

        .ict-digital-right p {
          color: #cbd7e5;
          line-height: 1.75;
          margin: 0;
        }

        /* FEATURES */

        .ict-features {
          padding: 100px 0;
          background: #fffdf9;
        }

        .ict-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .ict-feature-heading p {
          color: #657387;
          line-height: 1.8;
          max-width: 500px;
          margin-top: 22px;
        }

        .ict-feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .ict-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px;
          background: white;
          border: 1px solid #ece7df;
          border-radius: 10px;
          color: #334155;
          font-size: 14px;
        }

        .ict-feature-item svg {
          color: #ff7600;
          min-width: 21px;
        }

        /* CTA */

        .ict-cta {
          padding: 30px 0 100px;
          background: #fffdf9;
        }

        .ict-cta-box {
          padding: 50px 55px;
          border-radius: 22px;
          background: #f8f1e8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .ict-cta-box h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #062452;
          font-size: 39px;
          font-weight: 400;
          margin: 0 0 12px;
        }

        .ict-cta-box h2 span {
          color: #ff7600;
        }

        .ict-cta-box p {
          color: #657387;
          margin: 0;
          line-height: 1.7;
        }

        .ict-cta-button {
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 24px;
          background: #062452;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 700;
          transition: .25s;
        }

        .ict-cta-button:hover {
          background: #ff7600;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .ict-hero-content {
            gap: 35px;
          }

          .ict-intro-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ict-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ict-digital-box {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ict-feature-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }
        }

        @media (max-width: 760px) {

          .ict-hero {
            min-height: 680px;
          }

          .ict-hero-content {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 70px;
          }

          .ict-hero-card {
            display: none;
          }

          .ict-hero h1 {
            font-size: 42px;
          }

          .ict-wave {
            height: 120px;
          }

          .ict-card-grid {
            grid-template-columns: 1fr;
          }

          .ict-feature-list {
            grid-template-columns: 1fr;
          }

          .ict-digital-box {
            padding: 35px 25px;
          }

          .ict-digital-left h2 {
            font-size: 35px;
          }

          .ict-cta-box {
            padding: 35px 25px;
            flex-direction: column;
            align-items: flex-start;
          }

          .ict-cta-box h2 {
            font-size: 32px;
          }

          .ict-experience {
            right: 10px;
          }
        }

        @media (max-width: 480px) {

          .ict-container {
            width: 90%;
          }

          .ict-intro,
          .ict-facilities,
          .ict-digital,
          .ict-features {
            padding: 70px 0;
          }

          .ict-image-box {
            min-height: 350px;
          }

          .ict-section-heading h2,
          .ict-feature-heading h2 {
            font-size: 34px;
          }

          .ict-card {
            padding: 25px;
          }
        }

      `}</style>
    </div>
  );
};

export default ICT;
