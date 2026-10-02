import React from "react";
import { Link } from "react-router-dom";
export default function Approval() {
  const approvals = [
    {
      no: "01",
      image: "/images/dhe-logo.png",
      title: (
        <>
          Directorate of Higher Education
          <br />
          (DHE), Government of Haryana
        </>
      ),
      text:
        "The college operates under the direct administrative purview and periodic inspection cycles of the Department of Higher Education, Haryana. We follow all the state guidelines related to student welfare, reservation policies, and operational norms.",
    },
    {
      no: "02",
      image: "/images/aicte-logo.png",
      title: (
        <>
          All India Council for
          <br />
          Technical Education (AICTE)
        </>
      ),
      text:
        "Our technical and professional courses such as BCA are approved and accredited by AICTE, New Delhi. This ensures that our laboratories, curriculum, and computing facilities meet national standards.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "DM Sans", Arial, sans-serif;
          color: #071b45;
          background: #fbfaf7;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        :root {
          --navy: #06265a;
          --navy-dark: #041e48;
          --navy-light: #0a326b;
          --orange: #ff7800;
          --orange-light: #ff9700;
          --cream: #fbfaf7;
          --cream-dark: #f5eee3;
          --text: #071b45;
          --black: #111111;
          --border: #e8e1d6;
        }

        /* =====================================================
           PAGE
        ===================================================== */

        .approval-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 5% 48%,
              rgba(255, 153, 0, 0.08),
              transparent 19%
            ),
            radial-gradient(
              circle at 96% 75%,
              rgba(255, 153, 0, 0.08),
              transparent 20%
            ),
            var(--cream);
        }

        /* =====================================================
           TOP BAR
        ===================================================== */

        .approval-topbar {
          width: 100%;
          min-height: 42px;

          background: linear-gradient(
            90deg,
            #04234f 0%,
            #062d65 100%
          );

          color: #ffffff;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 30px;

          font-size: 13px;
          font-weight: 600;
        }

        .approval-top-left {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .approval-top-item {
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .approval-top-icon {
          font-size: 14px;
        }

        .approval-socials {
          display: flex;
          align-items: center;
          gap: 22px;
          font-size: 14px;
          font-weight: 800;
        }

        /* =====================================================
           NAVBAR
        ===================================================== */

        .approval-navbar {
          width: 100%;
          height: 105px;

          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 31px;

          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);

          position: relative;
          z-index: 50;
        }

        .approval-brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .approval-brand img {
          width: 300px;
          height: auto;
          max-height: 82px;
          object-fit: contain;
          display: block;
        }

        .approval-nav-links {
          height: 100%;

          display: flex;
          align-items: center;

          gap: 42px;

          font-size: 14px;
          font-weight: 600;

          color: #06163d;
        }

        .approval-nav-link {
          height: 100%;

          display: flex;
          align-items: center;

          position: relative;

          padding-top: 2px;

          transition: color 0.2s ease;
        }

        .approval-nav-link:hover {
          color: var(--orange);
        }

        .approval-nav-link.active {
          color: var(--orange);
        }

        .approval-nav-link.active::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;

          bottom: 21px;

          height: 3px;

          background: var(--orange);
        }

        /* =====================================================
           HERO
        ===================================================== */

        
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
        
        
        .approval-hero {
          position: relative;

          width: 100%;
          height: 420px;
          min-height: 420px;

          background: #ffffff;

          overflow: hidden;
        }

        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .approval-hero-image {
          position: absolute;

          top: 0;
          right: 0;

          width: 52%;
          height: 100%;

          background-image:
            linear-gradient(
              90deg,
              rgba(4, 35, 82, 0.08),
              transparent 35%
            ),
            url("/images/approval-hero.jpg");

          background-size: cover;

          /*
            IMPORTANT:
            Image is positioned slightly to the right so
            the blue curved panel can overlap it cleanly.
          */
          background-position: center center;

          border-bottom-left-radius: 170px 110px;

          z-index: 1;
        }

        /* =====================================================
           BLUE HERO PANEL
           
           IMPORTANT FIX:
           The blue shape itself is now created using ::before.
           This prevents clip-path from clipping the text.
        ===================================================== */

        .approval-hero-blue {
          position: absolute;

          left: 0;
          top: 0;

          width: 55%;
          height: 100%;

          z-index: 3;

          /*
            DO NOT use clip-path directly on this container.
            The content must remain completely visible.
          */
          overflow: visible;
        }

        .approval-hero-blue::before {
          content: "";

          position: absolute;

          left: -1px;
          top: 0;

          width: 100%;
          height: 100%;

          background:
            linear-gradient(
              115deg,
              #052654 0%,
              #062c65 72%,
              #0a315f 100%
            );

          /*
            Curved right edge.
            This creates the same visual relationship as
            the desired reference image without clipping
            the content.
          */
          clip-path: ellipse(
            82% 100% at 19% 50%
          );

          z-index: -1;
        }

        /* =====================================================
           WATERMARK
        ===================================================== */

        .approval-watermark {
          position: absolute;

          z-index: 1;

          left: 230px;
          top: 20px;

          width: 280px;
          height: 280px;

          opacity: 0.15;

          pointer-events: none;
        }

        .approval-watermark img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }

        /* =====================================================
           HERO CONTENT
        ===================================================== */

        .approval-hero-content {
          position: relative;

          z-index: 5;

          width: 100%;
          max-width: 690px;

          min-height: 420px;

          padding:
            38px
            70px
            50px
            70px;

          color: #ffffff;

          /*
            Keeps all content inside the visible blue region.
          */
          pointer-events: none;
        }

        .approval-kicker {
          position: relative;
          z-index: 6;

          color: var(--orange);

          font-size: 17px;
          font-weight: 800;

          letter-spacing: 0.2px;

          text-transform: uppercase;

          margin-bottom: 8px;
        }

        .approval-small-line {
          width: 56px;
          height: 3px;

          background: var(--orange);

          margin-bottom: 13px;

          position: relative;
          z-index: 6;
        }

        .approval-hero h1 {
          position: relative;
          z-index: 6;

          margin: 0 0 14px;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 55px;

          line-height: 1.04;

          font-weight: 800;

          letter-spacing: -1px;

          color: #ffffff;
        }

        .approval-hero h1 span {
          color: var(--orange);
        }

        .approval-hero-rule {
          position: relative;
          z-index: 6;

          width: 58px;
          height: 4px;

          background: var(--orange);

          margin-bottom: 13px;
        }

        .approval-hero-description {
          position: relative;
          z-index: 6;

          max-width: 500px;

          margin: 0 0 23px;

          color: #ffffff;

          font-size: 15.5px;

          line-height: 1.48;

          font-weight: 400;
        }

        /* =====================================================
           HERO FEATURES
        ===================================================== */

        .approval-hero-features {
          position: relative;
          z-index: 6;

          display: flex;

          gap: 25px;

          max-width: 620px;
        }

        .approval-hero-feature {
          display: flex;

          align-items: center;

          gap: 10px;

          min-width: 0;

          padding-right: 20px;

          border-right:
            1px solid
            rgba(255, 255, 255, 0.15);
        }

        .approval-hero-feature:last-child {
          border-right: 0;
        }

        .approval-hero-feature-icon {
          width: 40px;
          height: 40px;

          display: grid;
          place-items: center;

          color: var(--orange);

          font-size: 29px;

          flex: none;
        }

        .approval-hero-feature-text {
          color: #ffffff;

          font-size: 12.5px;

          line-height: 1.35;

          font-weight: 600;
        }

        /* =====================================================
           HERO WAVES
        ===================================================== */

        .approval-hero-wave {
          position: absolute;

          z-index: 8;

          left: 0;
          right: 0;

          bottom: -1px;

          width: 100%;
          height: 95px;

          display: block;

          pointer-events: none;
        }

        .approval-hero-orange-wave {
          position: absolute;

          z-index: 9;

          left: 0;
          right: 0;

          bottom: -1px;

          width: 100%;
          height: 95px;

          display: block;

          pointer-events: none;
        }

        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .approval-main {
          width: calc(100% - 108px);

          max-width: 1450px;

          margin: 0 auto;

          padding:
            24px
            0
            55px;
        }

        /* =====================================================
           SECTION HEADINGS
        ===================================================== */

        .approval-section-heading {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 14px;

          margin:
            0
            0
            18px;

          color: #0a2454;

          font-size: 19px;

          font-weight: 800;

          text-transform: uppercase;

          text-align: center;
        }

        .approval-heading-line {
          width: 53px;
          height: 2px;

          background: var(--orange);

          position: relative;

          flex: none;
        }

        .approval-heading-line.left::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--orange);

          position: absolute;

          right: 0;
          top: -2px;
        }

        .approval-heading-line.right::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--orange);

          position: absolute;

          left: 0;
          top: -2px;
        }

        /* =====================================================
           APPROVAL GRID
        ===================================================== */

        .approval-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 2.15fr)
            minmax(350px, 1fr);

          gap: 22px;

          align-items: stretch;
        }

        .approval-cards {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;
        }

        /* =====================================================
           APPROVAL CARD
        ===================================================== */

        .approval-card {
          position: relative;

          min-height: 250px;

          background: #ffffff;

          border:
            1px solid
            var(--border);

          border-radius: 17px;

          padding:
            30px
            25px
            24px
            175px;

          box-shadow:
            0 7px 20px
            rgba(22, 29, 42, 0.09);

          overflow: hidden;
        }

        .approval-ribbon {
          position: absolute;

          left: 20px;
          top: 5px;

          width: 35px;
          height: 50px;

          background: var(--orange);

          color: #ffffff;

          display: flex;

          align-items: flex-start;
          justify-content: center;

          padding-top: 8px;

          font-size: 16px;

          font-weight: 800;

          clip-path:
            polygon(
              0 0,
              100% 0,
              100% 80%,
              50% 100%,
              0 80%
            );
        }

        .approval-logo {
          position: absolute;

          left: 28px;
          top: 58px;

          width: 115px;
          height: 115px;

          object-fit: contain;
        }

        .approval-card h3 {
          margin:
            2px
            0
            12px;

          color: #061b4c;

          font-size: 17px;

          line-height: 1.2;

          font-weight: 800;
        }

        .approval-mini-line {
          width: 39px;
          height: 3px;

          background: var(--orange);

          margin-bottom: 13px;
        }

        .approval-card p {
          margin: 0;

          color: #171717;

          font-size: 13px;

          line-height: 1.55;
        }

        /* =====================================================
           REGULATORY MATRIX
        ===================================================== */

        .approval-matrix {
          background: #ffffff;

          border-radius: 17px;

          overflow: hidden;

          border:
            1px solid
            var(--border);

          box-shadow:
            0 7px 20px
            rgba(22, 29, 42, 0.09);
        }

        .matrix-header {
          min-height: 68px;

          padding:
            16px
            20px
            12px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #08285c,
              #06224f
            );
        }

        .matrix-header strong {
          display: block;

          font-size: 17px;

          line-height: 1.05;
        }

        .matrix-header span {
          display: block;

          color: var(--orange);

          font-size: 16px;

          font-weight: 800;

          margin-top: 2px;
        }

        .matrix-row {
          min-height: 50px;

          display: grid;

          grid-template-columns:
            1.02fr
            1.2fr;

          align-items: center;

          border-bottom:
            1px solid
            #e8e2d8;

          padding:
            6px
            18px;

          column-gap: 15px;
        }

        .matrix-row:last-child {
          border-bottom: 0;
        }

        .matrix-label {
          display: flex;

          align-items: center;

          gap: 11px;

          color: #06183e;

          font-size: 12.5px;

          font-weight: 600;
        }

        .matrix-icon {
          width: 25px;

          color: var(--orange);

          font-size: 22px;

          text-align: center;
        }

        .matrix-value {
          color: #06183e;

          font-size: 12.5px;

          line-height: 1.3;
        }

        /* =====================================================
           COMPLIANCE
        ===================================================== */

        .approval-disclosures {
          position: relative;

          margin-top: 21px;

          padding:
            8px
            30px
            16px;

          background: #ffffff;

          border:
            1px solid
            var(--border);

          border-radius: 17px;

          box-shadow:
            0 7px 20px
            rgba(22, 29, 42, 0.07);

          overflow: hidden;
        }

        .disclosure-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;
        }

        .disclosure-item {
          min-height: 90px;

          display: flex;

          gap: 16px;

          position: relative;

          padding:
            12px
            25px
            6px
            75px;
        }

        .disclosure-item + .disclosure-item {
          border-left:
            1px solid
            #ddd6ca;
        }

        .disclosure-icon {
          position: absolute;

          left: 0;
          top: 12px;

          width: 52px;
          height: 52px;

          border-radius: 50%;

          background: #062a60;

          color: var(--orange);

          display: grid;

          place-items: center;

          font-size: 27px;

          font-weight: 500;
        }

        .disclosure-item h3 {
          margin:
            0
            0
            4px;

          color: #081e4d;

          font-size: 16px;

          line-height: 1.3;
        }

        .disclosure-item p {
          margin: 0;

          color: #171717;

          font-size: 12.5px;

          line-height: 1.5;
        }

        .disclosure-item a {
          display: inline-block;

          margin-top: 5px;

          color: #ed6500;

          font-size: 12px;

          font-weight: 600;
        }

        /* =====================================================
           BOTTOM WAVE
        ===================================================== */

        .approval-bottom-wave {
          width: 100%;

          height: 55px;

          position: relative;

          overflow: hidden;
        }

        .approval-bottom-wave::before {
          content: "";

          position: absolute;

          left: -5%;

          width: 110%;

          height: 95px;

          top: 25px;

          background: #062958;

          transform: rotate(-1.5deg);

          border-radius:
            50%
            50%
            0
            0 /
            100%
            100%
            0
            0;
        }

        .approval-bottom-wave::after {
          content: "";

          position: absolute;

          left: -5%;

          width: 110%;

          height: 10px;

          top: 22px;

          background: var(--orange);

          transform: rotate(-1.5deg);
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1150px) {
          .approval-nav-links {
            gap: 20px;
          }

          .approval-brand img {
            width: 255px;
          }

          .approval-hero-blue {
            width: 57%;
          }

          .approval-hero-image {
            width: 52%;
          }

          .approval-hero-content {
            padding-left: 50px;
            padding-right: 35px;
          }

          .approval-hero h1 {
            font-size: 47px;
          }

          .approval-card {
            padding-left: 145px;
          }

          .approval-logo {
            width: 100px;
            height: 100px;
            left: 23px;
          }
        }

        /* =====================================================
           TABLET / MOBILE
        ===================================================== */

        @media (max-width: 900px) {
          .approval-topbar {
            height: auto;

            min-height: 42px;

            padding:
              7px
              15px;
          }

          .approval-top-left {
            gap: 12px;

            flex-wrap: wrap;
          }

          .approval-top-item {
            font-size: 10px;
          }

          .approval-socials {
            display: none;
          }

          .approval-navbar {
            height: 82px;

            padding:
              10px
              18px;
          }

          .approval-brand img {
            width: 235px;
          }

          .approval-nav-links {
            display: none;
          }

          /* -------------------------------------------------
             MOBILE HERO
          ------------------------------------------------- */

          .approval-hero {
            height: 650px;
            min-height: 650px;
          }

          .approval-hero-image {
            width: 100%;
            height: 48%;

            top: 0;
            right: 0;

            border-radius: 0;

            background-position: center center;
          }

          .approval-hero-blue {
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;

            z-index: 3;
          }

          .approval-hero-blue::before {
            left: 0;
            top: 17%;

            width: 100%;
            height: 83%;

            clip-path:
              ellipse(
                105% 68% at 30% 76%
              );
          }

          .approval-watermark {
            left: 50%;
            top: 34%;

            transform: translateX(-50%);

            width: 220px;
            height: 220px;
          }

          .approval-hero-content {
            width: 100%;

            min-height: 650px;

            max-width: none;

            padding:
              275px
              30px
              60px;
          }

          .approval-hero h1 {
            font-size: 43px;
          }

          .approval-hero-description {
            font-size: 14px;

            max-width: 600px;
          }

          .approval-hero-features {
            gap: 12px;

            flex-wrap: wrap;
          }

          .approval-hero-feature {
            padding-right: 10px;
          }

          .approval-main {
            width:
              calc(100% - 35px);
          }

          .approval-grid {
            grid-template-columns: 1fr;
          }

          .approval-cards {
            grid-template-columns: 1fr;
          }

          .disclosure-grid {
            grid-template-columns: 1fr;
          }

          .disclosure-item + .disclosure-item {
            border-left: 0;

            border-top:
              1px solid
              #ddd6ca;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .approval-top-left .approval-top-item:nth-child(2) {
            display: none;
          }

          .approval-brand img {
            width: 205px;
          }

          .approval-hero {
            height: 690px;
            min-height: 690px;
          }

          .approval-hero-image {
            height: 43%;
          }

          .approval-hero-blue::before {
            top: 15%;

            height: 85%;

            clip-path:
              ellipse(
                125% 64% at 24% 78%
              );
          }

          .approval-hero-content {
            padding:
              250px
              22px
              55px;
          }

          .approval-hero h1 {
            font-size: 36px;

            letter-spacing: -0.5px;
          }

          .approval-hero-description {
            font-size: 13.5px;

            line-height: 1.5;
          }

          .approval-hero-features {
            display: grid;

            grid-template-columns: 1fr;

            gap: 8px;
          }

          .approval-hero-feature {
            border: 0;

            padding-right: 0;
          }

          .approval-section-heading {
            font-size: 15px;

            gap: 8px;
          }

          .approval-heading-line {
            width: 28px;
          }

          .approval-card {
            min-height: 390px;

            padding:
              100px
              20px
              22px;
          }

          .approval-logo {
            left: 50%;
            top: 45px;

            transform:
              translateX(-50%);

            width: 100px;
            height: 80px;
          }

          .approval-ribbon {
            left: 16px;
          }

          .matrix-row {
            grid-template-columns:
              1fr
              1fr;
          }

          .approval-disclosures {
            padding:
              7px
              16px
              15px;
          }

          .disclosure-item {
            padding-left: 68px;
            padding-right: 0;
          }
        }
      `}</style>

      <div className="approval-page">

      
        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="approval-hero">

          {/* HERO IMAGE */}

          <div
            className="approval-hero-image"
            aria-label="Yaduvanshi approval and recognition"
          />

          {/* BLUE HERO PANEL */}

          <div className="approval-hero-blue">

            {/* WATERMARK */}

            <div className="approval-watermark">
              <img
                src="/images/Cyaduvanshilogo.png"
                alt=""
              />
            </div>

            {/* HERO CONTENT */}

            <div className="approval-hero-content">

              {/* Breadcrumb */}
           <div className="hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <span>Approvals</span>
            </div>
             
              <div className="approval-kicker">
                Approvals &amp; Recognitions
              </div>

              <div className="approval-small-line"></div>

              <h1>
                Our <span>Approvals.</span>
                <br />
                Your Assurance.
              </h1>
                

              <div className="approval-hero-rule"></div>

              <p className="approval-hero-description">
                Yaduvanshi Group of Institutions is committed to
                excellence, transparency, and the highest standards
                of education. Our approvals and recognitions reflect
                our dedication to quality, compliance, and student
                success.
              </p>

            </div>

          </div>

          {/* =================================================
              CREAM WAVE
          ================================================= */}

          <svg
            className="approval-hero-wave"
            viewBox="0 0 1440 230"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1440,230 L0,230 Z"
              fill="#f7f0e6"
            />
          </svg>

          {/* =================================================
              ORANGE WAVE
          ================================================= */}

          <svg
            className="approval-hero-orange-wave"
            viewBox="0 0 1440 230"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,101 C150,194 355,197 555,122 C775,41 990,79 1160,116 C1280,142 1365,124 1440,77"
              fill="none"
              stroke="#ef6c00"
              strokeWidth="5"
            />
          </svg>

        </section>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <main className="approval-main">

          {/* =====================================================
              STATUTORY APPROVALS HEADING
          ===================================================== */}

          <div className="approval-section-heading">

            <span className="approval-heading-line left"></span>

            STATUTORY APPROVALS &amp; RECOGNITIONS

            <span className="approval-heading-line right"></span>

          </div>

          {/* =====================================================
              APPROVAL CARDS + REGULATORY MATRIX
          ===================================================== */}

          <section className="approval-grid">

            {/* APPROVAL CARDS */}

            <div className="approval-cards">

              {approvals.map((item) => (

                <article
                  className="approval-card"
                  key={item.no}
                >

                  <div className="approval-ribbon">
                    {item.no}
                  </div>

                  <img
                    className="approval-logo"
                    src={item.image}
                    alt="Approval authority"
                  />

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <div className="approval-mini-line"></div>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </article>

              ))}

            </div>

            {/* =================================================
                QUICK REFERENCE
            ================================================= */}

            <aside className="approval-matrix">

              <div className="matrix-header">

                <strong>
                  QUICK REFERENCE
                </strong>

                <span>
                  REGULATORY MATRIX
                </span>

              </div>

              {/* ROW 1 */}

              <div className="matrix-row">

                <div className="matrix-label">

                  <span className="matrix-icon">
                    ♧
                  </span>

                  Parent Trust

                </div>

                <div className="matrix-value">
                  Rao Chiranji Lal Samriti
                  <br />
                  Jan Seva Trust, Mahendragarh
                </div>

              </div>

              {/* ROW 2 */}

              <div className="matrix-row">

                <div className="matrix-label">

                  <span className="matrix-icon">
                    ⌂
                  </span>

                  State Government Approval

                </div>

                <div className="matrix-value">
                  Directorate of Higher
                  <br />
                  Education (DHE), Haryana
                </div>

              </div>

              {/* ROW 3 */}

              <div className="matrix-row">

                <div className="matrix-label">

                  <span className="matrix-icon">
                    ⚙
                  </span>

                  National Technical Council

                </div>

                <div className="matrix-value">
                  AICTE Accreditation
                </div>

              </div>

              {/* ROW 4 */}

              <div className="matrix-row">

                <div className="matrix-label">

                  <span className="matrix-icon">
                    ♧
                  </span>

                  Co-Educational Status

                </div>

                <div className="matrix-value">
                  Fully Co-Educational
                  <br />
                  (UG &amp; PG Streams)
                </div>

              </div>

              {/* ROW 5 */}

              <div className="matrix-row">

                <div className="matrix-label">

                  <span className="matrix-icon">
                    ◇
                  </span>

                  Admission Channel

                </div>

                <div className="matrix-value">
                  DHE Centralized
                  <br />
                  Online Admission Portal
                </div>

              </div>

            </aside>

          </section>

          {/* =====================================================
              COMPLIANCE & TRANSPARENCY
          ===================================================== */}

          <section className="approval-disclosures">

            <div className="approval-section-heading">

              <span className="approval-heading-line left"></span>

              COMPLIANCE &amp; TRANSPARENCY DISCLOSURES

              <span className="approval-heading-line right"></span>

            </div>

            <div className="disclosure-grid">

              {/* CENTRALIZED ADMISSIONS */}

              <article className="disclosure-item">

                <div className="disclosure-icon">
                  ◎
                </div>

                <div>

                  <h3>
                    Centralized Admissions
                  </h3>

                  <p>
                    In compliance with the state directives,
                    seat allocation for all courses is executed
                    strictly on a merit basis through the Haryana
                    DHE Admission Portal.
                  </p>

                  <a
                    href="https://admissions.highereduhry.ac.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://admissions.highereduhry.ac.in/ ↗
                  </a>

                </div>

              </article>

              {/* FEE STRUCTURE */}

              <article className="disclosure-item">

                <div className="disclosure-icon">
                  ₹
                </div>

                <div>

                  <h3>
                    Fee Structure Regulatory Conformity
                  </h3>

                  <p>
                    The academic and development fees for every
                    program at Yaduvanshi Group of Institutions
                    are mapped to applicable state fee regulations
                    and government norms.
                  </p>

                </div>

              </article>

            </div>

          </section>

        </main>

        {/* =====================================================
            BOTTOM CURVE
        ===================================================== */}

        <div className="approval-bottom-wave"></div>

      </div>
    </>
  );
}