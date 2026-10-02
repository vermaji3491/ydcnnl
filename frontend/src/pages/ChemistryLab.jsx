import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Atom,
  Microscope,
  ShieldCheck,
  TestTube2,
  GraduationCap,
  Beaker,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";

const images = {
  hero: "/images/campuses/chemistrylab.png",
  lab: "/images/labs/chemistry/chem-1.png",
  student1: "/images/labs/chemistry/DSC_1258.JPG",
  student2: "/images/labs/chemistry/DSC_1259.JPG",
  student3: "/images/labs/chemistry/DSC_1260.JPG",
  student4: "/images/labs/chemistry/DSC_1261.JPG",
};

const additionalGalleryImages = [
  {
    src: "/images/labs/chemistry/DSC_1262.JPG",
    alt: "Chemistry laboratory practical",
    title: "Chemistry Practical",
  },
];

const facilities = [
  {
    icon: FlaskConical,
    title: "Laboratory Instruments",
    text: "Essential instruments for practical chemistry experiments and observations.",
  },
  {
    icon: Microscope,
    title: "Analytical Equipment",
    text: "Equipment supporting measurement, analysis and scientific investigation.",
  },
  {
    icon: Atom,
    title: "Chemical Resources",
    text: "Organised resources for organic, inorganic and physical chemistry.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Facilities",
    text: "Safety equipment and procedures for responsible laboratory learning.",
  },
  {
    icon: BookOpen,
    title: "Digital Learning",
    text: "Academic resources supporting classroom and practical learning.",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    text: "A clean, organised and student-friendly practical environment.",
  },
];

const practicalAreas = [
  "Organic Chemistry",
  "Inorganic Chemistry",
  "Physical Chemistry",
  "Analytical Chemistry",
];

const quickReference = [
  {
    icon: GraduationCap,
    title: "Academic Area",
    value: "Chemistry & Physical Sciences",
  },
  {
    icon: FlaskConical,
    title: "Learning Method",
    value: "Theory + Practical",
  },
  {
    icon: Atom,
    title: "Core Areas",
    value: "Organic, Inorganic & Physical",
  },
  {
    icon: ShieldCheck,
    title: "Laboratory Environment",
    value: "Safe & Student Friendly",
  },
];

const ChemistryLab = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  return (
    <div className="chemistry-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="chem-hero">

        <div className="chem-hero-blue">

          <div className="chem-hero-watermark">
            <Atom size={260} strokeWidth={1} />
          </div>

          <div className="chem-hero-content">

            <div className="chem-kicker">
              <FlaskConical size={18} />
              FACILITIES & LABORATORIES
            </div>

            <div className="chem-small-line"></div>

            <h1>
              Chemistry
              <span>Laboratory.</span>
            </h1>

            <p className="chem-hero-subtitle">
              Explore Reactions. Discover Possibilities.
            </p>

            <p className="chem-hero-description">
              The Chemistry Laboratory at Yaduvanshi Degree College
              provides students with practical exposure, modern
              laboratory resources and a focused environment for
              scientific learning.
            </p>

            <div className="chem-hero-buttons">

              <Link
                to="/admission/online-admission"
                className="chem-orange-btn"
              >
                Apply for Admission
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/facilities"
                className="chem-white-btn"
              >
                Explore Facilities
              </Link>

            </div>

          </div>

          {/* FEATURES AT BOTTOM */}

          <div className="chem-hero-features">

            <div>
              <ShieldCheck />
              <span>
                Safe
                <strong>Laboratory</strong>
              </span>
            </div>

            <div>
              <Microscope />
              <span>
                Modern
                <strong>Equipment</strong>
              </span>
            </div>

            <div>
              <Atom />
              <span>
                Scientific
                <strong>Learning</strong>
              </span>
            </div>

          </div>

        </div>


        {/* IMAGE */}

        <div className="chem-hero-image">

          <img
            src={images.hero}
            alt="Yaduvanshi Chemistry Laboratory"
          />

          <div className="chem-image-overlay"></div>

          <div className="chem-image-caption">
            <FlaskConical size={19} />
            <div>
              <span>Modern Chemistry</span>
              <strong>Practical Laboratory</strong>
            </div>
          </div>

        </div>


        {/* ORANGE CURVE */}

        <div className="chem-hero-curve">

          <svg
            viewBox="0 0 1536 150"
            preserveAspectRatio="none"
          >

            <path
              d="
                M0 82
                C180 145 350 148 540 96
                C760 37 960 45 1140 83
                C1310 119 1425 96 1536 30
              "
              fill="none"
              stroke="#ff7600"
              strokeWidth="5"
            />

            <path
              d="
                M0 88
                C180 151 350 154 540 102
                C760 43 960 51 1140 89
                C1310 125 1425 102 1536 36
                L1536 150
                L0 150
                Z
              "
              fill="#fffdf9"
            />

          </svg>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="chem-intro">

        <div className="chem-container">

          <div className="chem-intro-heading">

            <div className="chem-section-label">
              <span></span>
              ABOUT THE CHEMISTRY LAB
            </div>

            <h2>
              Building a Strong Foundation
              <span>for a Better Tomorrow</span>
            </h2>

          </div>


          <div className="chem-intro-grid">

            {/* TEXT */}

            <div className="chem-intro-text">

              <p>
                The Chemistry Laboratory at Yaduvanshi Degree College
                is designed to provide students with practical exposure
                to chemical concepts, laboratory techniques and
                scientific investigation.
              </p>

              <p>
                Students learn by performing experiments, observing
                reactions, analysing results and connecting theoretical
                concepts with practical applications.
              </p>

              <div className="chem-check-list">

                <div>
                  <CheckCircle2 />
                  Hands-on experiments
                </div>

                <div>
                  <CheckCircle2 />
                  Modern laboratory equipment
                </div>

                <div>
                  <CheckCircle2 />
                  Scientific approach
                </div>

                <div>
                  <CheckCircle2 />
                  Safe learning environment
                </div>

              </div>

            </div>


            {/* IMAGE */}

            <div className="chem-main-photo">

              <img
                src={images.lab}
                alt="Chemistry laboratory"
              />

              <div className="chem-photo-label">
                <FlaskConical size={16} />
                Modern Chemistry Laboratory
              </div>

              <div className="chem-photo-bottom">

                <span>Organic</span>
                <b>|</b>
                <span>Inorganic</span>
                <b>|</b>
                <span>Physical</span>
                <b>|</b>
                <span>Analytical</span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LAB FACILITIES + QUICK REFERENCE
      ===================================================== */}

      <section className="chem-facilities">

        <div className="chem-container">

          <div className="chem-section-heading">

            <div className="chem-section-label">
              <span></span>
              LAB FACILITIES
            </div>

            <h2>
              Advanced Facilities for
              <span>Practical Chemistry Learning</span>
            </h2>

            <p>
              Resources and facilities designed to support practical
              learning, experimentation and scientific development.
            </p>

          </div>


          <div className="chem-facility-layout">

            {/* LEFT CARDS */}

            <div className="chem-facility-grid">

              {facilities.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="chem-facility-card"
                    key={item.title}
                  >

                    <div className="chem-card-icon">
                      <Icon />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                  </div>
                );

              })}

            </div>


            {/* QUICK REFERENCE */}

            <aside className="chem-reference">

              <div className="chem-reference-heading">

                <span>QUICK REFERENCE</span>

                <strong>
                  CHEMISTRY LAB
                </strong>

              </div>


              {quickReference.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="chem-reference-row"
                    key={item.title}
                  >

                    <Icon />

                    <span>{item.title}</span>

                    <strong>{item.value}</strong>

                  </div>
                );

              })}

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRACTICAL LEARNING
      ===================================================== */}

      <section className="chem-practical">

        <div className="chem-container">

          <div className="chem-practical-header">

            <div>
              <div className="chem-section-label">
                <span></span>
                STUDENTS IN ACTION
              </div>

              <h2>
                Experiments Today,
                <span>Innovations Tomorrow</span>
              </h2>

              <p>
                Students participate in practical sessions and
                laboratory activities that help develop scientific
                thinking, accuracy and confidence.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllPhotos((visible) => !visible)}
              aria-expanded={showAllPhotos}
              className="chem-gallery-button"
            >
              {showAllPhotos ? "Show Fewer Photos" : "View More Photos"}
              <ArrowRight size={17} />
            </button>

          </div>


          <div className="chem-gallery-grid">

            <div className="chem-gallery-card">
              <img
                src={images.student1}
                alt="Chemistry experiment"
              />

              <div>
                <FlaskConical />
                Chemical Reactions
              </div>
            </div>

            <div className="chem-gallery-card">
              <img
                src={images.student2}
                alt="Chemistry titration"
              />

              <div>
                <TestTube2 />
                Titration Practice
              </div>
            </div>

            <div className="chem-gallery-card">
              <img
                src={images.student3}
                alt="Chemistry practical"
              />

              <div>
                <Microscope />
                Instrumentation
              </div>
            </div>

            <div className="chem-gallery-card">
              <img
                src={images.student4}
                alt="Chemistry students"
              />

              <div>
                <Atom />
                Analysis & Research
              </div>
            </div>

          </div>

          {showAllPhotos && (
            <div className="chem-gallery-grid mt-4">
              {additionalGalleryImages.map((image) => (
                <div className="chem-gallery-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                  <div>
                    <FlaskConical />
                    {image.title}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          AREAS OF CHEMISTRY
      ===================================================== */}

      <section className="chem-areas">

        <div className="chem-container">

          <div className="chem-areas-heading">

            <div className="chem-section-label white">
              <span></span>
              AREAS OF PRACTICAL LEARNING
            </div>

            <h2>
              Discover Chemistry
              <span>Through Practice</span>
            </h2>

            <p>
              Laboratory work connects classroom concepts with
              real scientific processes and practical observation.
            </p>

          </div>


          <div className="chem-area-cards">

            {practicalAreas.map((area, index) => (

              <div
                className="chem-area-card"
                key={area}
              >

                <small>
                  0{index + 1}
                </small>

                <Atom />

                <strong>{area}</strong>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STUDENT DEVELOPMENT
      ===================================================== */}

      <section className="chem-development">

        <div className="chem-container">

          <div className="chem-section-heading center">

            <div className="chem-section-label">
              <span></span>
              STUDENT DEVELOPMENT
              <span></span>
            </div>

            <h2>
              Building Skills Beyond
              <span>the Classroom</span>
            </h2>

          </div>


          <div className="chem-development-grid">

            <div>
              <Search />
              <h3>Scientific Observation</h3>
              <p>
                Students learn to observe experiments carefully
                and interpret scientific results.
              </p>
            </div>

            <div>
              <LightbulbIcon />
              <h3>Problem Solving</h3>
              <p>
                Practical work develops analytical thinking and
                scientific problem-solving skills.
              </p>
            </div>

            <div>
              <Beaker />
              <h3>Practical Skills</h3>
              <p>
                Students gain confidence in handling laboratory
                equipment and performing experiments.
              </p>
            </div>

            <div>
              <Users />
              <h3>Teamwork</h3>
              <p>
                Group practicals encourage communication and
                collaborative learning.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="chem-cta">

        <div className="chem-container">

          <div className="chem-cta-content">

            <div>

              <div className="chem-cta-label">
                SCIENCE • DISCOVERY • OPPORTUNITY
              </div>

              <h2>
                Your Future in Science
                <span>Starts Here.</span>
              </h2>

              <p>
                Explore practical learning and build the scientific
                skills needed for your future.
              </p>

            </div>

            <Link
              to="/admission/online-admission"
              className="chem-cta-button"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .chemistry-page {
          width: 100%;
          overflow: hidden;
          background: #fffdf9;
          color: #09285a;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .chem-container {
          width: min(1380px, 91%);
          margin: auto;
        }


        /* ================= HERO ================= */

        .chem-hero {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          background: #062452;
        }

        .chem-hero-blue {
          position: relative;
          z-index: 3;
          width: 53%;
          min-height: 560px;
          color: white;
          background:
            linear-gradient(
              135deg,
              #041c3b,
              #062452 60%,
              #083768
            );
          border-bottom-right-radius: 170px;
        }

        .chem-hero-watermark {
          position: absolute;
          right: 45px;
          top: 30px;
          opacity: .06;
          pointer-events: none;
        }

        .chem-hero-content {
          position: relative;
          z-index: 2;
          width: 82%;
          margin-left: 9%;
          padding-top: 70px;
        }

        .chem-kicker {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ff8a00;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .chem-small-line {
          width: 38px;
          height: 3px;
          margin: 14px 0;
          background: #ff7600;
        }

        .chem-hero h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(54px, 5.5vw, 82px);
          line-height: .95;
          letter-spacing: -2px;
        }

        .chem-hero h1 span {
          display: block;
          color: #ff8500;
        }

        .chem-hero-subtitle {
          margin: 20px 0 7px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          font-weight: 700;
        }

        .chem-hero-description {
          max-width: 535px;
          margin: 0;
          color: #dce7f4;
          font-size: 14px;
          line-height: 1.65;
        }

        .chem-hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .chem-orange-btn,
        .chem-white-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 18px;
          border-radius: 24px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .chem-orange-btn {
          background: #ff7600;
          color: white;
        }

        .chem-white-btn {
          border: 1px solid white;
          color: white;
        }

        .chem-orange-btn:hover,
        .chem-white-btn:hover {
          transform: translateY(-2px);
        }

        .chem-hero-features {
          position: absolute;
          z-index: 4;
          bottom: 52px;
          left: 9%;
          display: flex;
          gap: 32px;
        }

        .chem-hero-features > div {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .chem-hero-features svg {
          width: 27px;
          color: #ff8500;
        }

        .chem-hero-features span {
          display: flex;
          flex-direction: column;
          color: #dce7f4;
          font-size: 10px;
        }

        .chem-hero-features strong {
          color: white;
          font-size: 12px;
        }


        /* HERO IMAGE */

        .chem-hero-image {
          position: absolute;
          z-index: 2;
          right: 0;
          top: 0;
          width: 52%;
          height: 560px;
          overflow: hidden;
          border-bottom-left-radius: 150px;
        }

        .chem-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .chem-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(6,36,82,.42),
              transparent 38%
            );
        }

        .chem-image-caption {
          position: absolute;
          right: 35px;
          bottom: 105px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 16px;
          border-radius: 30px;
          background: #ff7600;
          color: white;
          box-shadow: 0 8px 25px rgba(0,0,0,.2);
        }

        .chem-image-caption div {
          display: flex;
          flex-direction: column;
          font-size: 10px;
        }

        .chem-image-caption strong {
          font-size: 13px;
        }


        /* CURVE */

        .chem-hero-curve {
          position: absolute;
          z-index: 8;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 95px;
        }

        .chem-hero-curve svg {
          width: 100%;
          height: 100%;
        }


        /* ================= HEADINGS ================= */

        .chem-section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #09285a;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .chem-section-label span {
          width: 38px;
          height: 3px;
          background: #ff7600;
        }

        .chem-section-heading {
          margin-bottom: 35px;
        }

        .chem-section-heading.center {
          text-align: center;
        }

        .chem-section-heading.center .chem-section-label {
          justify-content: center;
        }

        .chem-section-heading h2,
        .chem-intro-heading h2,
        .chem-practical-header h2,
        .chem-areas-heading h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 49px);
          line-height: 1.05;
          color: #09285a;
        }

        .chem-section-heading h2 span,
        .chem-intro-heading h2 span,
        .chem-practical-header h2 span {
          color: #ff7600;
        }

        .chem-section-heading p {
          max-width: 650px;
          margin: 13px 0 0;
          color: #5b7086;
          font-size: 14px;
          line-height: 1.6;
        }


        /* ================= INTRO ================= */

        .chem-intro {
          padding: 70px 0 80px;
          background: #fffdf9;
        }

        .chem-intro-heading {
          text-align: center;
          margin-bottom: 35px;
        }

        .chem-intro-heading .chem-section-label {
          justify-content: center;
        }

        .chem-intro-heading h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(35px, 4vw, 50px);
          line-height: 1.05;
        }

        .chem-intro-heading h2 span {
          color: #ff7600;
        }

        .chem-intro-grid {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 45px;
          align-items: center;
        }

        .chem-intro-text p {
          color: #50677f;
          font-size: 14px;
          line-height: 1.7;
        }

        .chem-check-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 22px;
        }

        .chem-check-list div {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
        }

        .chem-check-list svg {
          width: 19px;
          color: #ff7600;
        }

        .chem-main-photo {
          position: relative;
          height: 345px;
          overflow: hidden;
          border-radius: 17px;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }

        .chem-main-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .chem-photo-label {
          position: absolute;
          top: 15px;
          left: 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 14px;
          border-radius: 25px;
          background: #ff7600;
          color: white;
          font-size: 11px;
          font-weight: 700;
        }

        .chem-photo-bottom {
          position: absolute;
          left: 17px;
          right: 17px;
          bottom: 15px;
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 11px;
          border-radius: 10px;
          background: #062452;
          color: white;
          font-size: 10px;
          font-weight: 700;
        }


        /* ================= FACILITIES ================= */

        .chem-facilities {
          padding: 70px 0;
          background: #f8f1e8;
        }

        .chem-facility-layout {
          display: grid;
          grid-template-columns: 1.55fr .75fr;
          gap: 22px;
        }

        .chem-facility-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .chem-facility-card {
          display: flex;
          align-items: center;
          gap: 17px;
          min-height: 135px;
          padding: 18px;
          border-radius: 14px;
          background: white;
          border: 1px solid #eee5d9;
          box-shadow: 0 5px 18px rgba(20,35,50,.05);
        }

        .chem-card-icon {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff4e5;
          color: #ff7600;
        }

        .chem-card-icon svg {
          width: 27px;
        }

        .chem-facility-card h3 {
          margin: 0 0 6px;
          color: #09285a;
          font-size: 14px;
        }

        .chem-facility-card p {
          margin: 0;
          color: #63768a;
          font-size: 11px;
          line-height: 1.55;
        }


        /* QUICK REFERENCE */

        .chem-reference {
          overflow: hidden;
          height: fit-content;
          border-radius: 17px;
          background: white;
          box-shadow: 0 6px 20px rgba(20,35,50,.08);
        }

        .chem-reference-heading {
          padding: 17px 18px;
          background: #062452;
          color: white;
        }

        .chem-reference-heading span,
        .chem-reference-heading strong {
          display: block;
        }

        .chem-reference-heading span {
          font-size: 11px;
          font-weight: 700;
        }

        .chem-reference-heading strong {
          margin-top: 4px;
          color: #ff8500;
          font-size: 18px;
        }

        .chem-reference-row {
          display: grid;
          grid-template-columns: 25px 1fr 1.1fr;
          gap: 8px;
          align-items: center;
          padding: 13px 14px;
          border-bottom: 1px solid #eee;
        }

        .chem-reference-row svg {
          width: 20px;
          color: #ff7600;
        }

        .chem-reference-row span {
          color: #173458;
          font-size: 10px;
          font-weight: 700;
        }

        .chem-reference-row strong {
          color: #52657a;
          font-size: 10px;
          font-weight: 500;
        }


        /* ================= PRACTICAL ================= */

        .chem-practical {
          padding: 70px 0;
          background: #fffdf9;
        }

        .chem-practical-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 28px;
        }

        .chem-practical-header p {
          max-width: 600px;
          margin: 13px 0 0;
          color: #5a7086;
          font-size: 13px;
          line-height: 1.6;
        }

        .chem-gallery-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
          padding: 10px 17px;
          border: 1.5px solid #09285a;
          border-radius: 24px;
          color: #09285a;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
        }

        .chem-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 13px;
        }

        .chem-gallery-card {
          overflow: hidden;
          border-radius: 13px;
          background: white;
          box-shadow: 0 5px 18px rgba(0,0,0,.08);
        }

        .chem-gallery-card img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }

        .chem-gallery-card div {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px;
          color: #09285a;
          font-size: 10px;
          font-weight: 700;
        }

        .chem-gallery-card svg {
          width: 16px;
          color: #ff7600;
        }


        /* ================= AREAS ================= */

        .chem-areas {
          padding: 65px 0;
          background: #062452;
        }

        .chem-areas-heading {
          max-width: 600px;
          margin-bottom: 28px;
        }

        .chem-section-label.white {
          color: white;
        }

        .chem-areas-heading h2 {
          color: white;
        }

        .chem-areas-heading p {
          color: #dce7f4;
          font-size: 13px;
          line-height: 1.6;
        }

        .chem-area-cards {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 13px;
        }

        .chem-area-card {
          position: relative;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 14px;
          background: rgba(255,255,255,.05);
        }

        .chem-area-card small {
          position: absolute;
          top: 12px;
          right: 14px;
          color: rgba(255,255,255,.3);
        }

        .chem-area-card svg {
          width: 35px;
          color: #ff8500;
          margin-bottom: 14px;
        }

        .chem-area-card strong {
          color: white;
          font-size: 12px;
        }


        /* ================= DEVELOPMENT ================= */

        .chem-development {
          padding: 70px 0;
          background: #fffdf9;
        }

        .chem-development-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .chem-development-grid > div {
          padding: 28px 20px;
          text-align: center;
          border-radius: 14px;
          background: white;
          border: 1px solid #eee;
          box-shadow: 0 5px 20px rgba(0,0,0,.05);
        }

        .chem-development-grid svg {
          width: 35px;
          color: #ff7600;
          margin-bottom: 12px;
        }

        .chem-development-grid h3 {
          margin: 0 0 8px;
          color: #09285a;
          font-size: 15px;
        }

        .chem-development-grid p {
          margin: 0;
          color: #617388;
          font-size: 11px;
          line-height: 1.6;
        }


        /* ================= CTA ================= */

        .chem-cta {
          padding: 48px 0;
          background:
            linear-gradient(
              110deg,
              #062452,
              #083d69
            );
        }

        .chem-cta-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .chem-cta-label {
          margin-bottom: 8px;
          color: #ff8500;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
        }

        .chem-cta h2 {
          margin: 0;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 36px;
        }

        .chem-cta h2 span {
          color: #ff8500;
        }

        .chem-cta p {
          margin: 8px 0 0;
          color: #dce7f4;
          font-size: 12px;
        }

        .chem-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 13px 21px;
          border-radius: 25px;
          background: #ff7600;
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }


        /* ================= TABLET ================= */

        @media(max-width:1050px) {

          .chem-hero-blue {
            width: 58%;
          }

          .chem-hero-image {
            width: 48%;
          }

          .chem-facility-layout {
            grid-template-columns: 1fr;
          }

          .chem-reference {
            max-width: 600px;
          }

          .chem-intro-grid {
            grid-template-columns: 1fr 1fr;
          }

        }


        /* ================= MOBILE ================= */

        @media(max-width:760px) {

          .chem-hero {
            min-height: 800px;
          }

          .chem-hero-blue {
            width: 100%;
            min-height: 520px;
            border-bottom-right-radius: 0;
          }

          .chem-hero-image {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 330px;
            border-radius: 0;
          }

          .chem-hero-content {
            width: 88%;
            margin: auto;
            padding-top: 50px;
          }

          .chem-hero h1 {
            font-size: 55px;
          }

          .chem-hero-features {
            display: none;
          }

          .chem-intro-grid {
            grid-template-columns: 1fr;
          }

          .chem-facility-grid {
            grid-template-columns: 1fr;
          }

          .chem-practical-header {
            display: block;
          }

          .chem-gallery-button {
            margin-top: 18px;
          }

          .chem-gallery-grid {
            grid-template-columns: 1fr 1fr;
          }

          .chem-gallery-card img {
            height: 145px;
          }

          .chem-area-cards {
            grid-template-columns: 1fr 1fr;
          }

          .chem-development-grid {
            grid-template-columns: 1fr 1fr;
          }

          .chem-cta-content {
            display: block;
          }

          .chem-cta-button {
            margin-top: 20px;
          }

        }


        @media(max-width:480px) {

          .chem-hero {
            min-height: 750px;
          }

          .chem-hero-blue {
            min-height: 470px;
          }

          .chem-hero-image {
            height: 300px;
          }

          .chem-hero h1 {
            font-size: 48px;
          }

          .chem-hero-subtitle {
            font-size: 17px;
          }

          .chem-hero-buttons {
            flex-wrap: wrap;
          }

          .chem-check-list {
            grid-template-columns: 1fr;
          }

          .chem-photo-bottom {
            gap: 5px;
            font-size: 8px;
          }

          .chem-gallery-grid {
            grid-template-columns: 1fr;
          }

          .chem-area-cards {
            grid-template-columns: 1fr 1fr;
          }

          .chem-development-grid {
            grid-template-columns: 1fr;
          }

          .chem-reference-row {
            grid-template-columns: 22px 1fr;
          }

          .chem-reference-row strong {
            grid-column: 2;
          }

        }

      `}</style>
    </div>
  );
};


/*
  Small icon component used in the development section.
*/

const LightbulbIcon = () => (
  <Sparkles
    size={35}
    color="#ff7600"
  />
);

export default ChemistryLab;