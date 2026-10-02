import React from "react";

/*
  ============================================================
  AFFILIATION PAGE
  ============================================================

  Required images:

  public/
    images/
      yaduvanshilogo.png
      approval-hero.jpg
      igu-logo.png
      dhe-logo.png
      aicte-logo.png

  This page is designed to work with the Navbar already
  present in App.jsx.
*/


/* ============================================================
   IMAGE PATHS
============================================================ */

const A = {
  logo: "/images/yaduvanshilogo.png",
  campus: "/images/approval-hero.jpg",
  igu: "/images/igu-logo.png",
  dhe: "/images/dhe-logo.png",
  aicte: "/images/aicte-logo.png",
};


/* ============================================================
   ICON COMPONENT
============================================================ */

function Icon({ type, size = 58 }) {

  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };


  const icons = {

    globe: (
      <svg {...common}>
        <circle cx="32" cy="32" r="22" />
        <path d="M10 32h44" />
        <path d="M32 10c6 6.5 9 14 9 22s-3 15.5-9 22" />
        <path d="M32 10c-6 6.5-9 14-9 22s3 15.5 9 22" />
      </svg>
    ),


    government: (
      <svg {...common}>
        <path d="M11 26 32 14l21 12" />
        <path d="M16 29v19" />
        <path d="M25 29v19" />
        <path d="M39 29v19" />
        <path d="M48 29v19" />
        <path d="M10 50h44" />
        <path d="M8 54h48" />
      </svg>
    ),


    book: (
      <svg {...common}>
        <path d="M12 13h17c4 0 7 3 7 7v31c-2-2-5-3-8-3H12V13Z" />
        <path d="M52 13H35c-4 0-7 3-7 7v31c2-2 5-3 8-3h16V13Z" />
        <path d="m22 26 5 5 9-10" />
      </svg>
    ),


    growth: (
      <svg {...common}>
        <path d="M11 50h42" />
        <path d="M16 45V33" />
        <path d="M27 45V27" />
        <path d="M38 45V20" />
        <path d="M49 45V12" />
        <path d="m12 29 12-8 10 5 17-16" />
        <path d="M43 10h8v8" />
      </svg>
    ),


    graduation: (
      <svg {...common}>
        <path d="m7 25 25-13 25 13-25 13L7 25Z" />
        <path d="M16 31v10c9 7 23 7 32 0V31" />
        <path d="M57 25v15" />
        <path d="M52 42c2 1 3 3 3 6" />
      </svg>
    ),


    clipboard: (
      <svg {...common}>
        <rect x="14" y="14" width="36" height="42" rx="4" />
        <path d="M24 14v-4h16v4" />
        <path d="M23 27h18" />
        <path d="M23 36h13" />
        <path d="M23 45h9" />
        <circle cx="47" cy="47" r="9" fill="white" />
        <path d="m43 47 3 3 5-6" />
      </svg>
    ),


    trophy: (
      <svg {...common}>
        <path d="M20 14h24v10c0 10-5 16-12 16s-12-6-12-16V14Z" />
        <path d="M20 18H9v5c0 8 5 13 13 13" />
        <path d="M44 18h11v5c0 8-5 13-13 13" />
        <path d="M32 40v9" />
        <path d="M23 54h18" />
        <path d="M26 49h12" />
        <path d="m32 18 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.8L32 18Z" />
      </svg>
    ),


    people: (
      <svg {...common}>
        <circle cx="32" cy="18" r="6" />
        <circle cx="16" cy="24" r="5" />
        <circle cx="48" cy="24" r="5" />
        <path d="M21 48v-7c0-7 5-11 11-11s11 4 11 11v7" />
        <path d="M7 47v-5c0-5 4-8 9-8 3 0 5 1 7 3" />
        <path d="M57 47v-5c0-5-4-8-9-8-3 0-5 1-7 3" />
      </svg>
    ),


    shield: (
      <svg {...common}>
        <path d="M32 8 52 15v16c0 13-8 21-20 25C20 52 12 44 12 31V15L32 8Z" />
        <path d="m22 32 7 7 14-15" />
      </svg>
    ),

  };


  return icons[type] || null;
}


/* ============================================================
   CHECK ICON
============================================================ */

const Check = () => (
  <span className="check">✓</span>
);


/* ============================================================
   INFORMATION CARD
============================================================ */

function InfoCard({
  number,
  title,
  icon,
  children,
}) {

  return (

    <article className="info-card">

      <div className="card-title">

        <span className="number">
          {number}
        </span>

        <h3>
          {title}
        </h3>

      </div>


      <div className="card-body">

        <div className="card-icon">
          <Icon
            type={icon}
            size={70}
          />
        </div>


        <div className="card-copy">
          {children}
        </div>

      </div>

    </article>

  );
}


/* ============================================================
   MAIN COMPONENT
============================================================ */

function Affiliation() {

  return (

    <div className="affiliation-page">

      <main id="top">


        {/* ==================================================
            HERO
        ================================================== */}

        <section className="hero">


          {/* ==================================================
              WATERMARK LOGO
          ================================================== */}

          <img
            src={A.logo}
            alt=""
            className="hero-watermark"
            aria-hidden="true"
          />


          {/* ==================================================
              HERO LEFT
          ================================================== */}

          <div className="hero-left">


            <div className="hero-left-content">


              {/* BREADCRUMB */}

              <div className="breadcrumbs">

                <span>Home</span>

                <b>›</b>

                <span>About Us</span>

                <b>›</b>

                <em>
                  Affiliation
                </em>

              </div>


              {/* TITLE */}

              <h1>

                University Affiliation

                <br />

                <span>&amp;</span>{" "}
                Academic Integration

              </h1>


              <div className="orange-line" />


              {/* SUBTITLE */}

              <h2>
                Proudly Affiliated. Academically Aligned.
              </h2>


              {/* DESCRIPTION */}

              <p className="intro">

                Yaduvanshi Degree College is a permanently
                affiliated constituent unit of Indira Gandhi
                University (IGU), Meerpur (Rewari). Our
                academic ecosystem aligns seamlessly with
                national and state education policy parameters.

              </p>


              {/* AFFILIATION INFORMATION */}

              <div className="affiliation-row">


                {/* UNIVERSITY CARD */}

                <div className="igu-pill">

                  <img
                    src={A.igu}
                    alt="Indira Gandhi University"
                  />

                  <div>

                    <strong>
                      INDIRA GANDHI
                      <br />
                      UNIVERSITY
                    </strong>

                    <span>
                      Meerpur (Rewari), Haryana
                    </span>

                    <b>
                      Permanently Affiliated
                    </b>

                  </div>

                </div>


                {/* BENEFITS */}

                <div className="benefits">

                  <div>
                    <Check />
                    Degrees awarded by IGU, Meerpur
                  </div>

                  <div>
                    <Check />
                    Recognized for Govt. Jobs &amp;
                    Higher Studies
                  </div>

                  <div>
                    <Check />
                    Quality Education. Global Recognition
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
              HERO RIGHT
          ================================================== */}

          <div className="hero-right">


            {/* CAMPUS IMAGE */}

            <div className="campus-wrap">

              <img
                className="campus"
                src={A.campus}
                alt="Yaduvanshi Degree College Campus"
              />


            </div>


            {/* FEATURE STRIP */}

            <div className="feature-strip">


              <div className="feature">

                <Icon
                  type="graduation"
                  size={48}
                />

                <div>

                  <b>
                    UG &amp; PG
                  </b>

                  <span>
                    Programs
                  </span>

                </div>

              </div>


              <div className="divider" />


              <div className="feature">

                <Icon
                  type="clipboard"
                  size={48}
                />

                <div>

                  <b>
                    IGU
                  </b>

                  <span>
                    Syllabus
                  </span>

                </div>

              </div>


              <div className="divider" />


              <div className="feature">

                <Icon
                  type="shield"
                  size={48}
                />

                <div>

                  <b>
                    Globally
                  </b>

                  <span>
                    Recognized
                  </span>

                </div>

              </div>


              <div className="divider" />


              <div className="feature">

                <Icon
                  type="people"
                  size={48}
                />

                <div>

                  <b>
                    Future
                  </b>

                  <span>
                    Ready Education
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
              HERO CURVE
          ================================================== */}

          <div
            className="hero-wave"
            aria-hidden="true"
          >

            <svg
              viewBox="0 0 1600 120"
              preserveAspectRatio="none"
            >

              {/* ORANGE OUTER CURVE */}

              <path
                d="
                  M0 35
                  C260 105 520 105 790 72
                  C1080 38 1290 28 1600 58
                  L1600 120
                  L0 120
                  Z
                "
                fill="#ff740b"
              />


              {/* CREAM INNER CURVE */}

              <path
                d="
                  M0 43
                  C260 113 520 113 790 80
                  C1080 46 1290 36 1600 66
                  L1600 120
                  L0 120
                  Z
                "
                fill="#faf9f6"
              />

            </svg>

          </div>

        </section>


        {/* ==================================================
            CONTENT
        ================================================== */}

        <section className="content">


          <div className="content-inner">


            {/* ==================================================
                THREE TOP CARDS
            ================================================== */}

            <div className="cards-grid">


              <InfoCard
                number="01"
                title="ACADEMIC CURRICULUM & EXAMINATIONS"
                icon="graduation"
              >

                <p>
                  <Check />
                  <b>Syllabus &amp; Courses:</b>{" "}
                  Curriculum and course structure prepared
                  by IGU Academic Council.
                </p>

                <p>
                  <Check />
                  <b>Examinations:</b>{" "}
                  Conducted and certified by the Controller
                  of Examinations (COE), Indira Gandhi
                  University.
                </p>

                <p>
                  <Check />
                  <b>Degree Validation:</b>{" "}
                  Degrees are awarded by IGU, Meerpur and
                  valid for Govt. jobs, private careers &
                  global studies.
                </p>

              </InfoCard>


              <InfoCard
                number="02"
                title="CAPACITY & COURSE APPROVALS"
                icon="clipboard"
              >

                <p>
                  <Check />
                  <b>Standard Intake Safeguards:</b>{" "}
                  Faculty-to-student ratio, classrooms,
                  and labs are audited by IGU inspection
                  committees.
                </p>

                <p>
                  <Check />
                  <b>Credit System Compliance:</b>{" "}
                  Implements the dynamic choice-based
                  credit system and multidisciplinary
                  frameworks as per IGU norms.
                </p>

              </InfoCard>


              <InfoCard
                number="03"
                title="SPORTS & CULTURAL OPPORTUNITIES"
                icon="trophy"
              >

                <p>
                  <Check />
                  <b>Inter-University Participation:</b>{" "}
                  Represent our college in IGU inter-college
                  sports meets, youth festivals &amp;
                  cultural conventions.
                </p>

                <p>
                  <Check />
                  <b>National Schemes:</b>{" "}
                  Active units of NSS &amp; Youth Red Cross,
                  certified and monitored by IGU, Meerpur.
                </p>

              </InfoCard>

            </div>


            {/* ==================================================
                BOTTOM GRID
            ================================================== */}

            <div className="bottom-grid">


              {/* AFFILIATION HIGHLIGHTS */}

              <section className="panel highlights">

                <h3>
                  AFFILIATION HIGHLIGHTS
                </h3>

                <div className="small-line" />


                <div className="highlight-items">


                  <div>

                    <div className="round-icon">

                      <Icon
                        type="globe"
                        size={42}
                      />

                    </div>

                    <b>
                      Global
                      <br />
                      Recognition
                    </b>

                  </div>


                  <div>

                    <div className="round-icon">

                      <Icon
                        type="government"
                        size={42}
                      />

                    </div>

                    <b>
                      Govt. Job
                      <br />
                      Eligibility
                    </b>

                  </div>


                  <div>

                    <div className="round-icon">

                      <Icon
                        type="book"
                        size={42}
                      />

                    </div>

                    <b>
                      Quality
                      <br />
                      Education
                    </b>

                  </div>


                  <div>

                    <div className="round-icon">

                      <Icon
                        type="growth"
                        size={42}
                      />

                    </div>

                    <b>
                      Career
                      <br />
                      Growth
                    </b>

                  </div>


                </div>

              </section>


              {/* RECOGNIZED BY */}

              <section className="panel recognized">

                <h3>
                  RECOGNIZED BY
                </h3>

                <div className="small-line" />


                <div className="recognition-logos">


                  <div>

                    <img
                      src={A.dhe}
                      alt="Directorate of Higher Education Haryana"
                    />

                    <span>
                      Directorate of Higher
                      <br />
                      Education (DHE), Haryana
                    </span>

                  </div>


                  <i />


                  <div>

                    <img
                      src={A.aicte}
                      alt="AICTE"
                    />

                    <span>
                      All India Council
                      <br />
                      for Technical Education
                      <br />
                      (AICTE)
                    </span>

                  </div>


                  <i />


                  <div>

                    <img
                      src={A.igu}
                      alt="Indira Gandhi University"
                    />

                    <span>
                      Indira Gandhi University
                      <br />
                      Meerpur, Rewari
                    </span>

                  </div>


                </div>

              </section>


              {/* OUR COMMITMENT */}

              <section className="commitment">

                <h3>
                  OUR COMMITMENT
                </h3>


                <div className="commit-row">

                  <Icon
                    type="shield"
                    size={80}
                  />

                  <p>

                    We are committed to maintaining the
                    highest standards of academic integrity,
                    institutional governance, and regulatory
                    compliance to ensure a bright and
                    successful future for every student.

                  </p>

                </div>


                <div className="tagline">
                  Building Futures. Inspiring Excellence.
                </div>

              </section>


            </div>

          </div>

        </section>

      </main>


      {/* ====================================================
          CSS
      ==================================================== */}

      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap'
        );


        /* ====================================================
           VARIABLES
        ==================================================== */

        :root {

          --navy: #082655;
          --deep: #032352;
          --orange: #ff740b;
          --ink: #081d47;
          --cream: #faf9f6;
          --white: #ffffff;
          --border: #ebe7df;

        }


        /* ====================================================
           GLOBAL
        ==================================================== */

        * {
          box-sizing: border-box;
        }


        html {
          scroll-behavior: smooth;
        }


        body {
          margin: 0;
          background: var(--cream);
          color: var(--ink);
          font-family:
            "DM Sans",
            Arial,
            sans-serif;
        }


        img {
          max-width: 100%;
          display: block;
        }


        .affiliation-page {
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: var(--cream);
        }


        /* ====================================================
           HERO
        ==================================================== */

        .hero {

          position: relative;

          display: grid;

          grid-template-columns:
            48.5%
            51.5%;

          min-height: 505px;

          color: #ffffff;

          background: #032452;

          overflow: hidden;

        }


        /* ====================================================
           WATERMARK LOGO
        ==================================================== */

        .hero-watermark {

          position: absolute;

          width: 430px;
          height: 430px;

          object-fit: contain;

          left: 43%;

          top: 47%;

          transform:
            translate(-50%, -50%);

          opacity: 0.055;

          filter:
            grayscale(100%)
            brightness(2);

          pointer-events: none;

          user-select: none;

          z-index: 3;

        }


        /* ====================================================
           LEFT HERO
        ==================================================== */

        .hero-left {

          position: relative;

          min-height: 505px;

          padding:
            36px
            48px
            60px
            max(32px, 3.25vw);

          background:

            radial-gradient(
              circle at 78% 20%,
              rgba(55,105,165,.25),
              transparent 38%
            ),

            linear-gradient(
              120deg,
              #071d45 0%,
              #032453 72%,
              #062e63 100%
            );

          z-index: 4;

        }


        .hero-left-content {

          position: relative;

          z-index: 6;

          max-width: 670px;

        }


        /* ====================================================
           BREADCRUMBS
        ==================================================== */

        .breadcrumbs {

          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 8px;

          margin-bottom: 20px;

          font-size: 15px;

          color: rgba(255,255,255,.95);

        }


        .breadcrumbs b {

          font-size: 21px;

          font-weight: 400;

          opacity: .85;

        }


        .breadcrumbs em {

          font-style: normal;

          color: var(--orange);

          font-weight: 500;

        }


        /* ====================================================
           TITLE
        ==================================================== */

        .hero h1 {

          margin: 0;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: clamp(
            38px,
            3.35vw,
            51px
          );

          line-height: 1.14;

          letter-spacing: -1.2px;

          font-weight: 800;

          color: #ffffff;

          position: relative;

          z-index: 5;

        }


        .hero h1 span {

          color: var(--orange);

        }


        /* ====================================================
           ORANGE LINE
        ==================================================== */

        .orange-line {

          width: 48px;

          height: 3px;

          background: var(--orange);

          margin:
            16px
            0
            20px;

        }


        /* ====================================================
           SUBTITLE
        ==================================================== */

        .hero-left h2 {

          margin:
            0
            0
            12px;

          color: var(--orange);

          font-size: 17px;

          line-height: 1.3;

          font-weight: 800;

        }


        /* ====================================================
           INTRO
        ==================================================== */

        .intro {

          max-width: 600px;

          margin: 0;

          color: #f6f8fc;

          font-size: 14.5px;

          line-height: 1.55;

        }


        /* ====================================================
           AFFILIATION ROW
        ==================================================== */

        .affiliation-row {

          display: flex;

          align-items: center;

          gap: 18px;

          margin-top: 18px;

          position: relative;

          z-index: 7;

        }


        /* ====================================================
           IGU CARD
        ==================================================== */

        .igu-pill {

          width: 298px;

          min-height: 92px;

          padding:
            9px
            13px;

          display: flex;

          align-items: center;

          gap: 10px;

          flex-shrink: 0;

          background: #ffffff;

          color: #081d47;

          border-radius: 15px;

          box-shadow:
            0 7px 22px
            rgba(0,0,0,.15);

        }


        .igu-pill img {

          width: 70px;

          height: 70px;

          object-fit: contain;

          flex-shrink: 0;

        }


        .igu-pill strong {

          display: block;

          font-size: 16px;

          line-height: 1.03;

          font-weight: 800;

        }


        .igu-pill span {

          display: block;

          margin:
            5px
            0
            4px;

          font-size: 12.5px;

        }


        .igu-pill b {

          display: inline-block;

          padding:
            3px
            8px;

          border-radius: 8px;

          background: var(--orange);

          color: #ffffff;

          font-size: 10.5px;

          line-height: 1.2;

        }


        /* ====================================================
           BENEFITS
        ==================================================== */

        .benefits {

          display: grid;

          gap: 8px;

          padding-left: 15px;

          border-left:
            1px solid
            rgba(255,255,255,.30);

          font-size: 12.5px;

          line-height: 1.3;

          white-space: nowrap;

        }


        .check {

          width: 17px;

          height: 17px;

          display: inline-grid;

          place-items: center;

          margin-right: 7px;

          border:
            2px solid
            var(--orange);

          border-radius: 50%;

          color: var(--orange);

          font-size: 10px;

          font-weight: 800;

          line-height: 1;

          vertical-align: -3px;

        }


        /* ====================================================
           RIGHT HERO
        ==================================================== */

        .hero-right {

          position: relative;

          min-height: 505px;

          background: #072b5c;

          z-index: 2;

        }


        /* ====================================================
           CAMPUS IMAGE
        ==================================================== */

        .campus-wrap {

          position: relative;

          width: 100%;

          height: 355px;

          overflow: visible;

        }


        .campus {

          width: 100%;

          height: 355px;

          object-fit: cover;

          object-position: center center;

          position: relative;

          z-index: 1;

        }


        /* ====================================================
           IMAGE SOFT OVERLAY
        ==================================================== */

        .campus-wrap::after {

          display: none;
}


        /* ====================================================
           IGU SEAL
        ==================================================== */

        .igu-seal {

          position: absolute;

          left: 64px;

          top: 50%;

          transform: translateY(-50%);

          width: 148px;
          height: 148px;

          padding: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: transparent;

          border: none;

          border-radius: 50%;

          box-shadow: none;

          z-index: 20;

        }

        .igu-seal img {

          width: 100%;
          height: 100%;

          object-fit: contain;

          border-radius: 50%;

          display: block;

        }
       
        /* ====================================================
           FEATURE STRIP
        ==================================================== */

        .feature-strip {

          position: relative;

          z-index: 5;

          height: 130px;

          display: grid;

          grid-template-columns:
            1fr
            1px
            1fr
            1px
            1fr
            1px
            1fr;

          align-items: center;

          gap: 18px;

          padding:
            0
            28px
            0
            66px;

          background: #072b5c;

        }


        .feature {

          min-width: 0;

          display: flex;

          align-items: center;

          gap: 11px;

        }


        .feature svg {

          color: #ffffff;

          flex-shrink: 0;

        }


        .feature b {

          display: block;

          font-size: 16px;

          line-height: 1.05;

          white-space: nowrap;

        }


        .feature span {

          display: block;

          margin-top: 4px;

          font-size: 12px;

          line-height: 1.2;

          white-space: nowrap;

        }


        .divider {

          width: 1px;

          height: 38px;

          background:
            rgba(255,255,255,.32);

        }


        /* ====================================================
           HERO WAVE
        ==================================================== */

        .hero-wave {

          position: absolute;

          left: 0;

          right: 0;

          bottom: -1px;

          width: 100%;

          height: 74px;

          z-index: 20;

          pointer-events: none;

        }


        .hero-wave svg {

          display: block;

          width: 100%;

          height: 100%;

        }


        /* ====================================================
           CONTENT
        ==================================================== */

        .content {

          position: relative;

          margin-top: 0;

          padding:
            35px
            1.2vw
            32px;

          background:

            radial-gradient(
              circle at 2% 10%,
              rgba(255,188,75,.14) 0 2px,
              transparent 3px
            )
            0 0 / 22px 22px,

            var(--cream);

        }


        .content-inner {

          width: 100%;

          max-width: 1500px;

          margin: 0 auto;

        }


        /* ====================================================
           TOP CARDS
        ==================================================== */

        .cards-grid {

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0,1fr));

          gap: 24px;

        }


        .info-card,
        .panel {

          background:
            rgba(255,255,255,.88);

          border:
            1px solid
            var(--border);

          border-radius: 15px;

          box-shadow:
            0 5px 18px
            rgba(8,29,71,.06);

        }


        .info-card {

          min-height: 220px;

          padding:
            12px
            18px
            18px;

        }


        .card-title {

          min-height: 35px;

          display: flex;

          align-items: center;

          gap: 12px;

          padding-bottom: 8px;

          border-bottom:
            1px solid
            #eeeae3;

        }


        .number {

          width: 36px;

          height: 28px;

          display: grid;

          place-items: center;

          flex-shrink: 0;

          border-radius: 6px;

          background: var(--orange);

          color: #ffffff;

          font-size: 16px;

          font-weight: 700;

        }


        .card-title h3 {

          margin: 0;

          color: #092050;

          font-size: 15px;

          line-height: 1.2;

          font-weight: 800;

        }


        .card-body {

          display: grid;

          grid-template-columns:
            88px
            1fr;

          align-items: center;

          gap: 7px;

          padding-top: 10px;

        }


        .card-icon {

          display: flex;

          justify-content: center;

          color: #092e68;

        }


        .card-copy {

          color: #101a31;

          font-size: 13px;

          line-height: 1.55;

        }


        .card-copy p {

          margin:
            0
            0
            7px;

        }


        .card-copy p:last-child {

          margin-bottom: 0;

        }


        .card-copy .check {

          width: 14px;

          height: 14px;

          font-size: 9px;

          margin-right: 6px;

          vertical-align: -2px;

        }


        /* ====================================================
           BOTTOM GRID
        ==================================================== */

        .bottom-grid {

          display: grid;

          grid-template-columns:
            1fr
            1.03fr
            .98fr;

          gap: 24px;

          margin-top: 20px;

        }


        /* ====================================================
           PANELS
        ==================================================== */

        .panel {

          min-height: 203px;

          padding:
            18px
            24px;

        }


        .panel h3,
        .commitment h3 {

          margin: 0;

          color: #092050;

          font-size: 16px;

          font-weight: 800;

        }


        .small-line {

          width: 40px;

          height: 2px;

          margin:
            10px
            0
            14px;

          background: var(--orange);

        }


        /* ====================================================
           HIGHLIGHTS
        ==================================================== */

        .highlight-items {

          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 10px;

          text-align: center;

        }


        .highlight-items > div {

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 7px;

        }


        .round-icon {

          width: 62px;

          height: 62px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: #092e68;

          color: #ffffff;

        }


        .highlight-items b {

          color: #092050;

          font-size: 12px;

          line-height: 1.22;

        }


        /* ====================================================
           RECOGNITION
        ==================================================== */

        .recognition-logos {

          display: grid;

          grid-template-columns:
            1fr
            1px
            1fr
            1px
            1fr;

          align-items: center;

          gap: 12px;

          text-align: center;

        }


        .recognition-logos div {

          display: flex;

          flex-direction: column;

          align-items: center;

        }


        .recognition-logos img {

          width: 82px;

          height: 66px;

          object-fit: contain;

          margin-bottom: 6px;

        }


        .recognition-logos span {

          color: #101a31;

          font-size: 10.5px;

          line-height: 1.25;

        }


        .recognition-logos i {

          width: 1px;

          height: 92px;

          background: #d7d7d7;

        }


        /* ====================================================
           COMMITMENT
        ==================================================== */

        .commitment {

          min-height: 203px;

          padding:
            16px
            27px;

          border-radius: 15px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #0a2f65,
              #062657
            );

          box-shadow:
            0 5px 18px
            rgba(8,29,71,.08);

        }


        .commitment h3 {

          color: var(--orange);

        }


        .commit-row {

          display: flex;

          align-items: center;

          gap: 17px;

          margin-top: 5px;

        }


        .commit-row svg {

          color: #ffffff;

          flex-shrink: 0;

        }


        .commit-row p {

          margin: 0;

          font-size: 12px;

          line-height: 1.45;

        }


        .tagline {

          margin-top: 8px;

          text-align: center;

          color: var(--orange);

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 18px;

          font-style: italic;

        }


        /* ====================================================
           1300px
        ==================================================== */

        @media (max-width: 1300px) {

          .hero {

            grid-template-columns:
              49%
              51%;

          }


          .hero-left {

            padding-left:
              3vw;

            padding-right:
              30px;

          }


          .hero h1 {

            font-size: 43px;

          }


          .benefits {

            font-size: 11.5px;

          }


          .igu-pill {

            width: 280px;

          }


          .feature-strip {

            padding-left: 55px;

            gap: 12px;

          }


          .feature {

            gap: 8px;

          }


          .feature b {

            font-size: 14px;

          }


          .feature span {

            font-size: 11px;

          }

        }


        /* ====================================================
           1050px
        ==================================================== */

        @media (max-width: 1050px) {

          .hero {

            grid-template-columns:
              1fr;

            min-height: auto;

          }


          .hero-left {

            min-height: auto;

            padding:
              40px
              35px
              70px;

          }


          .hero-left-content {

            max-width: 850px;

            margin: 0 auto;

          }


          .hero-right {

            min-height: auto;

          }


          .campus-wrap {

            height: 350px;

          }


          .campus {

            height: 350px;

          }


          .campus-wrap::before {

            display: none;

          }


          .igu-seal {

            left: 30px;

            bottom: 18px;

          }


          .feature-strip {

            padding:
              0
              35px;

          }


          .hero-wave {

            display: none;

          }


          .content {

            padding-top: 30px;

          }


          .hero-watermark {

            left: 50%;

            top: 32%;

            opacity: .045;

          }

        }


        /* ====================================================
           800px
        ==================================================== */

        @media (max-width: 800px) {

          .cards-grid,
          .bottom-grid {

            grid-template-columns: 1fr;

          }


          .bottom-grid {

            gap: 16px;

          }


          .feature-strip {

            height: auto;

            grid-template-columns:
              repeat(2,1fr);

            gap: 25px;

            padding:
              25px
              30px;

          }


          .divider {

            display: none;

          }


          .feature {

            justify-content: center;

          }


          .hero-left {

            padding:
              35px
              25px
              55px;

          }


          .hero h1 {

            font-size: 40px;

          }


          .affiliation-row {

            align-items: stretch;

          }


          .benefits {

            white-space: normal;

          }

        }


        /* ====================================================
           620px
        ==================================================== */

        @media (max-width: 620px) {

          .hero-left {

            padding:
              30px
              20px
              45px;

          }


          .breadcrumbs {

            font-size: 13px;

            margin-bottom: 18px;

          }


          .hero h1 {

            font-size: 33px;

            line-height: 1.14;

            letter-spacing: -.6px;

          }


          .hero-left h2 {

            font-size: 15px;

          }


          .intro {

            font-size: 13.5px;

          }


          .affiliation-row {

            flex-direction: column;

          }


          .igu-pill {

            width: 100%;

          }


          .benefits {

            padding:
              12px
              0
              0;

            border-left: 0;

            border-top:
              1px solid
              rgba(255,255,255,.25);

          }


          .campus-wrap {

            height: 245px;

          }


          .campus {

            height: 245px;

          }


          .igu-seal {

            width: 110px;

            height: 110px;

            left: 18px;

            bottom: 15px;

            padding: 7px;

          }


          .feature-strip {

            grid-template-columns:
              repeat(2,1fr);

            padding:
              20px;

            gap: 20px;

          }


          .feature {

            justify-content: flex-start;

          }


          .feature b {

            font-size: 13px;

          }


          .feature span {

            font-size: 10px;

          }


          .feature svg {

            width: 38px;

            height: 38px;

          }


          .content {

            padding:
              22px
              12px
              25px;

          }


          .info-card {

            min-height: auto;

          }


          .card-body {

            grid-template-columns:
              70px
              1fr;

          }


          .card-title h3 {

            font-size: 13px;

          }


          .panel {

            padding:
              15px;

          }


          .highlight-items {

            gap: 3px;

          }


          .round-icon {

            width: 52px;

            height: 52px;

          }


          .recognition-logos {

            gap: 6px;

          }


          .recognition-logos img {

            width: 58px;

            height: 52px;

          }


          .recognition-logos span {

            font-size: 8.5px;

          }


          .commit-row {

            align-items: flex-start;

          }


          .commit-row svg {

            width: 65px;

            height: 65px;

          }


          .hero-watermark {

            width: 300px;

            height: 300px;

            top: 38%;

            opacity: .04;

          }

        }

      `}</style>

    </div>

  );
}


/* ============================================================
   EXPORT
============================================================ */

export default Affiliation;