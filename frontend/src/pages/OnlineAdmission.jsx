import React from "react";
import {
  CalendarDays,
  Globe,
  MousePointerClick,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const OnlineAdmission = () => {
  const admissionUrl = "https://admissions.highereduhry.ac.in/";

  const openAdmissionPortal = () => {
    window.open(admissionUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="online-admission-page">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <section className="admission-hero">

          {/* Background Decoration */}
          <div className="hero-circle hero-circle-one"></div>
          <div className="hero-circle hero-circle-two"></div>

          <div className="hero-inner">

            {/* Left Content */}
            <div className="hero-content">

              <div className="hero-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/admission/general-instruction">Admission</Link>
                <span>/</span>
                <strong>Online Registration</strong>
              </div>


              <h1>
                Online <span>Registration</span>
              </h1>

              <p>
                Start your academic journey with Yaduvanshi Degree College.
                Complete your online registration and admission process
                through the official Haryana Higher Education portal.
              </p>

             

            </div>

          </div>

          {/* Curved Wave */}
          <div className="hero-wave-wrapper">
            <svg
              className="hero-wave"
              viewBox="0 0 1536 220"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="orange-wave-line"
                d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1536,45"
              />

              <path
                className="white-wave"
                d="M0,130 C150,220 355,220 555,145 C775,64 990,100 1160,137 C1280,163 1365,145 1440,98 C1490,72 1515,57 1536,50 L1536,220 L0,220 Z"
              />
            </svg>
          </div>

        </section>


        {/* =====================================================
            ADMISSION CONTENT
        ====================================================== */}
        <div className="admission-container">

          {/* Registration Notice */}
          <div className="registration-box">

            <h2>
              Online Registration of Applicants on Online Admission Portal
            </h2>

            <div className="date-badge">
              <CalendarDays size={17} />
              <span>07.05.2026 to 12.07.2026</span>
            </div>

          </div>


          {/* Information Heading */}
          <h2 className="information-heading">
            For more information go to Higher Education Website
          </h2>


          {/* Website Preview */}
          <div className="website-preview">

            {/* Browser Header */}
            <div className="browser-header">

              <div className="browser-dots">

                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>

              </div>

              <div className="address-bar">
                https://admissions.highereduhry.ac.in/
              </div>

            </div>


            {/* Website Content */}
            <div className="website-content">

              <h3>
                Online Admission Portal | Department of Higher Education,
                Haryana
              </h3>

              <p>
                Click here to visit the official portal for undergraduate and
                postgraduate admissions, college registrations, and key
                notifications.
              </p>

              <div className="website-link">
                <Globe size={16} />
                <span>
                  admissions.highereduhry.ac.in
                </span>
              </div>

            </div>

          </div>


          {/* Main Admission Button */}
          <button
            className="online-admission-button"
            onClick={openAdmissionPortal}
          >
            <MousePointerClick size={20} />

            <span>
              For Online Admission/Registration Click Here
            </span>
          </button>

        </div>

      </div>


      {/* =====================================================
          CSS
      ====================================================== */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .online-admission-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          font-family: "DM Sans", Arial, sans-serif;
          color: #072656;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .admission-hero {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #061d45;
          color: #ffffff;
        }

        .hero-inner {
          position: relative;
          z-index: 3;

          width: 100%;
          max-width: 1200px;

          min-height: 420px;

          margin: 0 auto;

          padding: 70px 35px 110px;

          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 60px;
        }


        /* Hero Left */

        .hero-content {
          position: relative;
          z-index: 4;
        }

        .hero-small-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 16px;

          color: #ff9f1c;

          font-size: 14px;
          font-weight: 700;

          letter-spacing: 1.5px;
        }

        .hero-content h1 {
          margin: 0 0 18px;

          font-family: "Playfair Display", Georgia, serif;

          font-size: clamp(42px, 5vw, 64px);

          line-height: 1.05;

          font-weight: 700;
        }

        .hero-content h1 span {
          color: #ff9f1c;
        }

        .hero-content p {
          max-width: 650px;

          margin: 0 0 25px;

          color: rgba(255,255,255,0.88);

          font-size: 17px;
          line-height: 1.7;
        }


        /* Breadcrumb */

        .hero-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 22px;

          font-size: 14px;

          color: rgba(255,255,255,0.65);
        }

        .hero-breadcrumb a {
          color: #ff9f1c;
          text-decoration: none;
          font-weight: 600;
        }

        .hero-breadcrumb strong {
          color: #ffffff;
          font-weight: 600;
        }


        /* Hero Right */

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-admission-card {
          width: 100%;
          max-width: 360px;

          padding: 30px;

          border: 1px solid rgba(255,255,255,0.18);

          border-radius: 20px;

          background: rgba(255,255,255,0.10);

          backdrop-filter: blur(10px);

          box-shadow:
            0 20px 50px rgba(0,0,0,0.20);
        }

        .hero-card-icon {
          width: 70px;
          height: 70px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 20px;

          border-radius: 18px;

          background: #ff9f1c;

          color: #062452;

          box-shadow:
            0 10px 25px rgba(255,159,28,0.25);
        }

        .hero-admission-card h3 {
          margin: 0 0 10px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 25px;
        }

        .hero-admission-card p {
          margin: 0 0 22px;

          color: rgba(255,255,255,0.78);

          font-size: 15px;

          line-height: 1.6;
        }

        .hero-portal-button {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 13px 18px;

          border: none;
          border-radius: 8px;

          background: #ff9f1c;
          color: #062452;

          font-family: "DM Sans", Arial, sans-serif;

          font-size: 15px;
          font-weight: 700;

          cursor: pointer;

          transition: all 0.25s ease;
        }

        .hero-portal-button:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }

        .college-application-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 12px;
          padding: 13px 18px;
          border: 1px solid rgba(255,255,255,.6);
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          transition: background .2s ease, color .2s ease;
        }

        .college-application-link:hover {
          background: #fff;
          color: #062452;
        }


        /* Hero Circles */

        .hero-circle {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }

        .hero-circle-one {
          width: 350px;
          height: 350px;

          right: -130px;
          top: -150px;

          border: 1px solid rgba(255,159,28,0.18);
        }

        .hero-circle-two {
          width: 220px;
          height: 220px;

          right: 80px;
          bottom: -150px;

          border: 1px solid rgba(255,255,255,0.10);
        }


        /* =====================================================
           HERO WAVE
        ====================================================== */

        .hero-wave-wrapper {
          position: absolute;

          z-index: 5;

          left: 0;
          right: 0;
          bottom: 0;

          height: 145px;

          pointer-events: none;
        }

        .hero-wave {
          position: absolute;

          width: 100%;
          height: 100%;

          left: 0;
          bottom: 0;
        }

        .white-wave {
          fill: #ffffff;
        }

        .orange-wave-line {
          fill: none;

          stroke: #ff9f1c;

          stroke-width: 5;

          stroke-linecap: round;
        }


        /* =====================================================
           MAIN ADMISSION CARD
        ====================================================== */

        .admission-container {
          position: relative;
          z-index: 10;

          width: calc(100% - 30px);
          max-width: 875px;

          margin: -5px auto 70px;

          padding: 31px;

          background: #ffffff;

          border: 1px solid #dbe3ed;

          border-radius: 20px;

          box-shadow:
            0 10px 30px rgba(20, 40, 70, 0.06);
        }


        /* Registration Box */

        .registration-box {
          width: 100%;

          min-height: 146px;

          padding: 28px 20px 25px;

          border: 1.5px dashed #ad54d4;

          border-radius: 16px;

          background: linear-gradient(
            135deg,
            #fff8ff 0%,
            #f7ecff 100%
          );

          text-align: center;
        }

        .registration-box h2 {
          margin: 0;

          color: #9954b9;

          font-size: 25px;

          font-weight: 700;

          line-height: 1.35;
        }


        /* Date */

        .date-badge {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          margin-top: 16px;

          padding: 11px 21px;

          border-radius: 30px;

          background: #f04b3b;

          color: #ffffff;

          font-size: 16px;

          font-weight: 700;

          box-shadow:
            0 5px 12px rgba(240, 75, 59, 0.15);
        }


        /* Information Heading */

        .information-heading {
          margin: 36px 0 22px;

          color: #142d4d;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 22px;

          font-weight: 700;

          line-height: 1.35;
        }


        /* =====================================================
           WEBSITE PREVIEW
        ====================================================== */

        .website-preview {
          width: 100%;

          overflow: hidden;

          border: 1px solid #cbd8e6;

          border-radius: 15px;

          background: #f8fafc;
        }

        .browser-header {
          height: 63px;

          display: flex;

          align-items: center;
          justify-content: center;

          position: relative;

          padding: 0 25px;

          background: #f0f4f8;

          border-bottom: 1px solid #cbd8e6;
        }


        /* Browser Dots */

        .browser-dots {
          position: absolute;

          left: 20px;
          top: 50%;

          transform: translateY(-50%);

          display: flex;

          align-items: center;

          gap: 8px;
        }

        .dot {
          width: 13px;
          height: 13px;

          display: block;

          border-radius: 50%;
        }

        .dot.red {
          background: #f04444;
        }

        .dot.yellow {
          background: #f5a900;
        }

        .dot.green {
          background: #12b886;
        }


        /* Address Bar */

        .address-bar {
          width: 58%;

          min-width: 300px;

          padding: 9px 15px;

          border: 1px solid #d8e1eb;

          border-radius: 7px;

          background: #ffffff;

          color: #6382a6;

          text-align: center;

          font-family: monospace;

          font-size: 14px;
        }


        /* Website Content */

        .website-content {
          padding: 28px 26px 29px;

          background: #f8fafc;
        }

        .website-content h3 {
          margin: 0 0 15px;

          color: #123b87;

          font-size: 20px;

          font-weight: 700;

          line-height: 1.4;
        }

        .website-content p {
          max-width: 760px;

          margin: 0;

          color: #58708d;

          font-size: 16px;

          line-height: 1.55;
        }


        /* Website Link */

        .website-link {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-top: 20px;

          color: #8da4c0;

          font-size: 14px;

          font-weight: 500;
        }

        .website-link svg {
          color: #36b7ed;
        }


        /* Main Button */

        .online-admission-button {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          min-width: 540px;

          margin: 31px auto 0;

          padding: 18px 25px;

          border: none;

          border-radius: 10px;

          background: #9954b9;

          color: #ffffff;

          font-family: "DM Sans", Arial, sans-serif;

          font-size: 20px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 9px 18px rgba(153, 84, 185, 0.22);

          transition: all 0.25s ease;
        }

        .online-admission-button:hover {
          background: #8544a5;

          transform: translateY(-2px);

          box-shadow:
            0 12px 24px rgba(153, 84, 185, 0.28);
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {

          .hero-inner {
            grid-template-columns: 1fr;

            gap: 25px;

            padding-top: 50px;
          }

          .hero-right {
            display: none;
          }

          .admission-hero {
            min-height: 380px;
          }

          .hero-inner {
            min-height: 380px;
          }

        }


        @media (max-width: 768px) {

          .online-admission-page {
            padding-bottom: 30px;
          }

          .hero-inner {
            padding:
              45px
              25px
              100px;
          }

          .hero-content h1 {
            font-size: 43px;
          }

          .hero-content p {
            font-size: 15px;
          }

          .admission-container {
            width: calc(100% - 20px);

            padding: 22px;

            border-radius: 16px;
          }

          .registration-box {
            padding: 25px 15px;
          }

          .registration-box h2 {
            font-size: 21px;
          }

          .information-heading {
            margin-top: 28px;

            font-size: 20px;
          }

          .address-bar {
            width: 60%;

            min-width: 240px;

            font-size: 12px;
          }

          .website-content h3 {
            font-size: 18px;
          }

          .website-content p {
            font-size: 15px;
          }

          .online-admission-button {
            min-width: 100%;

            font-size: 17px;
          }
        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 520px) {

          .admission-hero {
            min-height: 365px;
          }

          .hero-inner {
            min-height: 365px;

            padding:
              38px
              18px
              95px;
          }

          .hero-small-title {
            font-size: 11px;

            letter-spacing: 1px;
          }

          .hero-content h1 {
            font-size: 39px;
          }

          .hero-content p {
            font-size: 14px;

            line-height: 1.6;
          }

          .hero-breadcrumb {
            font-size: 12px;
          }

          .hero-wave-wrapper {
            height: 100px;
          }

          .admission-container {
            width: calc(100% - 20px);

            padding: 15px;

            border-radius: 14px;
          }

          .registration-box {
            min-height: auto;

            padding: 23px 12px;
          }

          .registration-box h2 {
            font-size: 19px;
          }

          .date-badge {
            padding: 9px 13px;

            font-size: 13px;
          }

          .information-heading {
            margin:
              25px
              0
              17px;

            font-size: 18px;
          }

          .browser-header {
            height: 58px;

            padding: 0 10px;
          }

          .browser-dots {
            left: 12px;

            gap: 5px;
          }

          .dot {
            width: 9px;
            height: 9px;
          }

          .address-bar {
            width: 65%;

            min-width: 0;

            padding: 8px 5px;

            font-size: 9px;
          }

          .website-content {
            padding: 22px 17px;
          }

          .website-content h3 {
            font-size: 17px;
          }

          .website-content p {
            font-size: 14px;
          }

          .website-link {
            font-size: 12px;
          }

          .online-admission-button {
            min-width: 100%;

            margin-top: 24px;

            padding: 15px 12px;

            font-size: 15px;
          }

          .online-admission-button svg {
            width: 17px;
          }

        }

      `}</style>
    </>
  );
};

export default OnlineAdmission;