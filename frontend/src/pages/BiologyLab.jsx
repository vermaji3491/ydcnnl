import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Dna,
  Eye,
  FlaskConical,
  GraduationCap,
  Leaf,
  Microscope,
  Search,
  Sprout,
  TestTube2,
  Users,
  Target,
  ShieldCheck,
  Activity,
  Database,
} from "lucide-react";

/* =========================================================
   BIOLOGY LAB IMAGES

   Put your images inside:

   public/images/biology/

   Recommended files:

   biology-hero.jpg
   biology-lab.jpg
   biology-student-1.jpg
   biology-student-2.jpg
   biology-student-3.jpg
   biology-student-4.jpg
   biology-microscope.jpg
   biology-plant.jpg

========================================================= */

const images = {
  hero: "/images/labs/biology/DSC_1282.JPG",
  lab: "/images/labs/biology/DSC_1283.JPG",
  student1: "/images/labs/biology/DSC_1284.JPG",
  student2: "/images/labs/biology/DSC_1285.JPG",
  student3: "/images/labs/biology/DSC_1286.JPG",
  student4: "/images/labs/biology/DSC_1287.JPG",
  microscope: "/images/labs/biology/DSC_1288.JPG",
  plant: "/images/labs/biology/DSC_1289.JPG",
};


/* =========================================================
   LAB FACILITIES
========================================================= */

const facilities = [
  {
    icon: Microscope,
    title: "Microscopes",
    text: "Microscopes for observing cells, tissues and microorganisms.",
  },
  {
    icon: Dna,
    title: "Specimen Collection",
    text: "Biological specimens and prepared slides for practical study.",
  },
  {
    icon: Leaf,
    title: "Plant Studies",
    text: "Resources for understanding plant structure, diversity and anatomy.",
  },
  {
    icon: FlaskConical,
    title: "Culture Media",
    text: "Laboratory resources supporting microbiology and practical work.",
  },
  {
    icon: TestTube2,
    title: "Biological Tools",
    text: "Essential tools for experiments, observations and research.",
  },
  {
    icon: Database,
    title: "Research Resources",
    text: "Academic resources supporting biological investigation and learning.",
  },
];


/* =========================================================
   QUICK REFERENCE
========================================================= */

const quickReference = [
  {
    icon: GraduationCap,
    title: "Academic Area",
    value: "Biology & Life Sciences",
  },
  {
    icon: Microscope,
    title: "Practical Learning",
    value: "Hands-on Laboratory Work",
  },
  {
    icon: Leaf,
    title: "Study Areas",
    value: "Botany & Zoology",
  },
  {
    icon: FlaskConical,
    title: "Research Focus",
    value: "Experimental Learning",
  },
  {
    icon: Users,
    title: "Learning Environment",
    value: "Student-Centred Practical Training",
  },
];


/* =========================================================
   PRACTICAL AREAS
========================================================= */

const practicalAreas = [
  "Cell Biology",
  "Botany",
  "Zoology",
  "Microbiology",
  "Plant Physiology",
  "Life Sciences",
];


/* =========================================================
   STUDENT DEVELOPMENT
========================================================= */

const development = [
  {
    icon: Brain,
    title: "Analytical Thinking",
    text: "Students learn to observe, interpret and solve biological problems.",
  },
  {
    icon: Eye,
    title: "Observation Skills",
    text: "Practical activities improve scientific observation and accuracy.",
  },
  {
    icon: Search,
    title: "Research Skills",
    text: "Students develop curiosity and an approach towards scientific inquiry.",
  },
  {
    icon: Users,
    title: "Teamwork",
    text: "Experiments encourage collaboration and communication.",
  },
];


/* =========================================================
   BIOLOGY LAB PAGE
========================================================= */

const BiologyLab = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  return (
    <div className="biology-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="biology-hero">

        <div className="biology-hero-left">

          <div className="biology-watermark">
            <Dna size={190} />
          </div>

          <div className="biology-hero-inner">

            <div className="biology-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/facilities">Facilities</Link>
              <span>/</span>
              <span>Biology Laboratory</span>
            </div>

            <div className="biology-kicker">
              FACILITIES & LABORATORIES
            </div>

            <h1>
              Biology
              <span>Laboratory.</span>
            </h1>

            <div className="biology-orange-line"></div>

            <p className="biology-hero-description">
              Explore the science of life through practical learning,
              observation and experimentation in our well-equipped
              Biology Laboratory.
            </p>

            <div className="biology-hero-features">

              <div>
                <ShieldCheck />
                <span>
                  Practical
                  <br />
                  Learning
                </span>
              </div>

              <div>
                <Microscope />
                <span>
                  Modern
                  <br />
                  Equipment
                </span>
              </div>

              <div>
                <Leaf />
                <span>
                  Life Science
                  <br />
                  Exploration
                </span>
              </div>

            </div>

          </div>
        </div>


        <div className="biology-hero-right">

          <img
            src={images.hero}
            alt="Students working in Biology Laboratory"
          />

          <div className="biology-hero-image-caption">
            <span>SCIENCE</span>
            <strong>DISCOVERY</strong>
          </div>

        </div>


        {/* Curved Hero Bottom */}

        <div className="biology-hero-wave">

          <svg
            viewBox="0 0 1536 180"
            preserveAspectRatio="none"
          >

            <path
              d="
                M0 105
                C190 175 370 172 565 116
                C760 60 965 65 1150 105
                C1300 137 1415 118 1536 48
                L1536 180
                L0 180
                Z
              "
              fill="#fffdf9"
            />

            <path
              d="
                M0 96
                C190 166 370 163 565 107
                C760 51 965 56 1150 96
                C1300 128 1415 109 1536 39
              "
              fill="none"
              stroke="#ff7600"
              strokeWidth="5"
            />

          </svg>

        </div>

      </section>

      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}

      <section className="biology-about">

        <div className="biology-container">

          <div className="biology-section-heading centered">

            <div className="section-heading-line">
              <span></span>
              ABOUT THE BIOLOGY LAB
              <span></span>
            </div>

            <h2>
              Where Curiosity Grows
              <strong> into Knowledge</strong>
            </h2>

          </div>


          <div className="biology-about-layout">

            <div className="biology-about-image">

              <img
                src={images.lab}
                alt="Yaduvanshi Biology Laboratory"
              />

              <div className="image-label">
                <Leaf size={18} />
                Modern Biology Laboratory
              </div>

            </div>


            <div className="biology-about-content">

              <p>
                The Biology Laboratory at Yaduvanshi Degree College
                provides students with a practical environment to
                understand the living world through observation,
                experimentation and scientific investigation.
              </p>

              <p>
                The laboratory supports academic learning in areas
                including Botany, Zoology, Cell Biology, Microbiology
                and other life-science related subjects.
              </p>


              <div className="biology-check-list">

                <div>
                  <CheckCircle2 />
                  <span>Hands-on laboratory learning</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Practical observation and experimentation</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Scientific research orientation</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Student-centred learning environment</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES + QUICK REFERENCE
      ====================================================== */}

      <section className="biology-facilities-section">

        <div className="biology-container">

          <div className="biology-section-heading centered">

            <div className="section-heading-line">
              <span></span>
              LABORATORY RESOURCES
              <span></span>
            </div>

            <h2>
              Facilities for
              <strong> Better Biological Learning</strong>
            </h2>

          </div>


          <div className="biology-resource-layout">

            {/* LEFT CARDS */}

            <div className="biology-resource-grid">

              {facilities.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="biology-resource-card"
                    key={item.title}
                  >

                    <div className="resource-icon">
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


            {/* RIGHT QUICK REFERENCE */}

            <aside className="biology-reference">

              <div className="reference-header">
                <span>QUICK REFERENCE</span>
                <strong>LABORATORY PROFILE</strong>
              </div>


              <div className="reference-body">

                {quickReference.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      className="reference-row"
                      key={item.title}
                    >

                      <Icon />

                      <span>{item.title}</span>

                      <strong>{item.value}</strong>

                    </div>
                  );

                })}

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRACTICAL LEARNING
      ====================================================== */}

      <section className="biology-practical">

        <div className="biology-container">

          <div className="biology-section-heading centered">

            <div className="section-heading-line">
              <span></span>
              PRACTICAL LEARNING
              <span></span>
            </div>

            <h2>
              From Classroom
              <strong> to Real Life</strong>
            </h2>

            <p>
              Students participate in practical activities that connect
              classroom concepts with real biological observations.
            </p>

          </div>


          <div className="biology-gallery">

            <div className="biology-gallery-card large">

              <img
                src={images.student1}
                alt="Biology student using microscope"
              />

              <div className="gallery-caption">
                <Microscope />
                Microscope Observation
              </div>

            </div>


            <div className="biology-gallery-card">

              <img
                src={images.student2}
                alt="Biology practical experiment"
              />

              <div className="gallery-caption">
                <FlaskConical />
                Laboratory Experiment
              </div>

            </div>


            <div className="biology-gallery-card">

              <img
                src={images.student3}
                alt="Biology students performing experiment"
              />

              <div className="gallery-caption">
                <Users />
                Team Practical
              </div>

            </div>


            <div className="biology-gallery-card">

              <img
                src={images.student4}
                alt="Biology practical learning"
              />

              <div className="gallery-caption">
                <Leaf />
                Plant Study
              </div>

            </div>

          </div>

        </div>

      </section>

      {showAllPhotos && (
        <div className="biology-container mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <img
            src="/images/labs/biology/DSC_1288.JPG"
            alt="Biology laboratory microscope"
            className="h-64 w-full rounded-xl object-cover"
          />
          <img
            src="/images/labs/biology/DSC_1289.JPG"
            alt="Biology laboratory plant study"
            className="h-64 w-full rounded-xl object-cover"
          />
          <img
            src="/images/labs/biology/DSC_1290.JPG"
            alt="Biology laboratory practical"
            className="h-64 w-full rounded-xl object-cover"
          />
        </div>
      )}

      <div className="my-8 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAllPhotos((visible) => !visible)}
          aria-expanded={showAllPhotos}
          className="inline-flex items-center gap-2 rounded-md border border-green-700 px-4 py-2 text-sm font-semibold text-green-800 hover:bg-green-50"
        >
          {showAllPhotos ? "Show Fewer Photos" : "View More Photos"}
          <ArrowRight size={17} />
        </button>
      </div>


      {/* =====================================================
          AREAS OF STUDY
      ====================================================== */}

      <section className="biology-study-section">

        <div className="biology-container biology-study-layout">

          <div>

            <div className="section-heading-line left">
              <span></span>
              AREAS OF STUDY
            </div>

            <h2>
              Learning Beyond
              <strong> the Classroom</strong>
            </h2>

            <p>
              The laboratory provides practical exposure across important
              areas of biological science, helping students develop a
              stronger understanding of life and natural systems.
            </p>

          </div>


          <div className="biology-study-grid">

            {practicalAreas.map((item, index) => (

              <div
                className="biology-study-card"
                key={item}
              >

                <div className="study-number">
                  0{index + 1}
                </div>

                <Leaf />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STUDENT DEVELOPMENT
      ====================================================== */}

      <section className="biology-development">

        <div className="biology-container">

          <div className="biology-section-heading centered">

            <div className="section-heading-line">
              <span></span>
              STUDENT DEVELOPMENT
              <span></span>
            </div>

            <h2>
              Building Future
              <strong> Science Professionals</strong>
            </h2>

          </div>


          <div className="biology-development-grid">

            {development.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="biology-development-card"
                  key={item.title}
                >

                  <div className="development-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="biology-final-cta">

        <div className="biology-final-overlay"></div>

        <div className="biology-container biology-final-content">

          <div>

            <div className="cta-kicker">
              SCIENCE
              <span>•</span>
              DISCOVERY
              <span>•</span>
              OPPORTUNITY
            </div>

            <h2>
              Explore the World of
              <strong> Life</strong>
            </h2>

            <p>
              Discover practical learning opportunities and build a
              strong foundation for your future in Biology and Life Sciences.
            </p>

          </div>


          <Link
            to="/admission/online-admission"
            className="biology-cta-button"
          >
            Apply for Admission
            <ArrowRight />
          </Link>

        </div>

      </section>


      {/* =====================================================
          PAGE CSS
      ====================================================== */}

      <style>{`

        /* =====================================================
           BASE
        ====================================================== */

        .biology-page {
          width: 100%;
          overflow: hidden;
          background: #fffdf9;
          color: #071f49;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .biology-container {
          width: min(1370px, 92%);
          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .biology-hero {
          position: relative;
          min-height: 520px;
          display: flex;
          overflow: hidden;
          background: #062452;
        }

        .biology-hero-left {
          position: relative;
          z-index: 4;
          width: 52%;
          min-height: 520px;
          background:
            linear-gradient(
              135deg,
              #031d43 0%,
              #062452 65%,
              #082f5e 100%
            );
          color: white;
          overflow: hidden;
        }

        .biology-hero-left::after {
          content: "";
          position: absolute;
          right: -70px;
          top: 0;
          width: 120px;
          height: 100%;
          background: #062452;
          transform: skewX(-8deg);
        }

        .biology-watermark {
          position: absolute;
          right: 100px;
          top: 45px;
          color: rgba(255,255,255,0.035);
          pointer-events: none;
        }

        .biology-hero-inner {
          position: relative;
          z-index: 5;
          width: min(650px, 88%);
          margin-left: auto;
          margin-right: 5%;
          padding-top: 45px;
        }

        .biology-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 30px;
          color: rgba(255,255,255,0.65);
          font-size: 12px;
        }

        .biology-breadcrumb a {
          color: white;
          text-decoration: none;
        }

        .biology-kicker {
          margin-bottom: 12px;
          color: #ff8a00;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.4px;
        }

        .biology-hero h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(54px, 5.5vw, 82px);
          line-height: 0.98;
          color: white;
          letter-spacing: -2px;
        }

        .biology-hero h1 span {
          color: #ff8500;
        }

        .biology-orange-line {
          width: 58px;
          height: 4px;
          margin: 22px 0 16px;
          background: #ff7600;
        }

        .biology-hero-description {
          max-width: 530px;
          margin: 0;
          color: #edf4ff;
          font-size: 16px;
          line-height: 1.7;
        }

        .biology-hero-features {
          display: flex;
          gap: 0;
          margin-top: 28px;
        }

        .biology-hero-features > div {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 160px;
          padding-right: 28px;
          margin-right: 25px;
          border-right: 1px solid rgba(255,255,255,0.16);
        }

        .biology-hero-features > div:last-child {
          border-right: 0;
        }

        .biology-hero-features svg {
          width: 34px;
          height: 34px;
          color: #ff8500;
          stroke-width: 1.7;
        }

        .biology-hero-features span {
          color: white;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
        }


        /* RIGHT IMAGE */

        .biology-hero-right {
          position: absolute;
          z-index: 2;
          top: 0;
          right: 0;
          width: 51%;
          height: 520px;
          overflow: hidden;
        }

        .biology-hero-right img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .biology-hero-right::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(6,36,82,0.65) 0%,
              rgba(6,36,82,0.08) 28%,
              transparent 60%
            );
        }

        .biology-hero-image-caption {
          position: absolute;
          z-index: 5;
          right: 45px;
          bottom: 95px;
          padding: 13px 20px;
          border-radius: 9px;
          background: rgba(4,45,42,0.84);
          color: white;
          transform: rotate(-4deg);
        }

        .biology-hero-image-caption span {
          display: block;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .biology-hero-image-caption strong {
          display: block;
          font-family: Georgia, serif;
          font-size: 23px;
          font-style: italic;
        }


        /* WAVE */

        .biology-hero-wave {
          position: absolute;
          z-index: 15;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 110px;
          pointer-events: none;
        }

        .biology-hero-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }


        /* =====================================================
           SECTION HEADING
        ====================================================== */

        .biology-section-heading {
          margin-bottom: 45px;
        }

        .biology-section-heading.centered {
          text-align: center;
        }

        .section-heading-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 13px;
          color: #09285a;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.4px;
        }

        .section-heading-line span {
          width: 48px;
          height: 3px;
          background: #ff7600;
        }

        .section-heading-line.left {
          justify-content: flex-start;
        }

        .biology-section-heading h2,
        .biology-study-layout h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: #09285a;
          font-size: clamp(35px, 4vw, 52px);
          line-height: 1.08;
        }

        .biology-section-heading h2 strong,
        .biology-study-layout h2 strong {
          color: #f47600;
          font-weight: 700;
        }

        .biology-section-heading p {
          max-width: 680px;
          margin: 15px auto 0;
          color: #4d6077;
          font-size: 15px;
          line-height: 1.7;
        }


        /* =====================================================
           ABOUT
        ====================================================== */

        .biology-about {
          padding: 80px 0;
          background: #fffdf9;
        }

        .biology-about-layout {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 55px;
          align-items: center;
        }

        .biology-about-image {
          position: relative;
          height: 390px;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(5,35,70,0.13);
        }

        .biology-about-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .image-label {
          position: absolute;
          left: 18px;
          top: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          border-radius: 30px;
          background: #08744c;
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .biology-about-content p {
          margin: 0 0 16px;
          color: #415b75;
          font-size: 16px;
          line-height: 1.75;
        }

        .biology-check-list {
          margin-top: 25px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .biology-check-list div {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #183e67;
          font-size: 13px;
          font-weight: 600;
        }

        .biology-check-list svg {
          flex-shrink: 0;
          width: 20px;
          color: #08744c;
        }


        /* =====================================================
           FACILITIES
        ====================================================== */

        .biology-facilities-section {
          padding: 80px 0;
          background: #f8f1e8;
        }

        .biology-resource-layout {
          display: grid;
          grid-template-columns: 1.55fr 0.75fr;
          gap: 25px;
          align-items: stretch;
        }

        .biology-resource-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .biology-resource-card {
          min-height: 140px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 24px;
          border-radius: 17px;
          background: white;
          border: 1px solid #eee5da;
          box-shadow: 0 7px 25px rgba(38,35,25,0.06);
        }

        .resource-icon {
          flex-shrink: 0;
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #eef8f1;
          color: #08744c;
        }

        .resource-icon svg {
          width: 27px;
        }

        .biology-resource-card h3 {
          margin: 2px 0 7px;
          color: #09285a;
          font-size: 17px;
        }

        .biology-resource-card p {
          margin: 0;
          color: #53667a;
          font-size: 13px;
          line-height: 1.55;
        }


        /* =====================================================
           QUICK REFERENCE
        ====================================================== */

        .biology-reference {
          overflow: hidden;
          border-radius: 20px;
          background: white;
          box-shadow: 0 10px 30px rgba(5,35,70,0.1);
        }

        .reference-header {
          padding: 20px 22px;
          background: #062452;
          color: white;
        }

        .reference-header span {
          display: block;
          font-size: 13px;
          font-weight: 700;
        }

        .reference-header strong {
          display: block;
          margin-top: 3px;
          color: #ff8500;
          font-size: 18px;
        }

        .reference-body {
          padding: 4px 0;
        }

        .reference-row {
          display: grid;
          grid-template-columns: 30px 1fr 1fr;
          align-items: center;
          gap: 8px;
          padding: 15px 18px;
          border-bottom: 1px solid #e8e8e8;
        }

        .reference-row:last-child {
          border-bottom: 0;
        }

        .reference-row svg {
          width: 23px;
          color: #ff7600;
        }

        .reference-row span {
          color: #273d58;
          font-size: 12px;
          font-weight: 600;
        }

        .reference-row strong {
          color: #09285a;
          font-size: 12px;
          line-height: 1.35;
        }


        /* =====================================================
           PRACTICAL LEARNING
        ====================================================== */

        .biology-practical {
          padding: 85px 0;
          background: #fffdf9;
        }

        .biology-gallery {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          grid-template-rows: 225px 225px;
          gap: 15px;
        }

        .biology-gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          background: #ddd;
        }

        .biology-gallery-card.large {
          grid-row: 1 / 3;
        }

        .biology-gallery-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .biology-gallery-card:hover img {
          transform: scale(1.05);
        }

        .gallery-caption {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          border-radius: 9px;
          background: rgba(4,39,76,0.94);
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .gallery-caption svg {
          width: 17px;
          color: #ff8500;
        }


        /* =====================================================
           STUDY AREAS
        ====================================================== */

        .biology-study-section {
          padding: 85px 0;
          background: #062452;
          color: white;
        }

        .biology-study-layout {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 65px;
          align-items: center;
        }

        .biology-study-layout h2 {
          color: white;
        }

        .biology-study-layout p {
          max-width: 500px;
          margin: 20px 0 0;
          color: #dce8f5;
          line-height: 1.75;
        }

        .biology-study-layout .section-heading-line {
          color: white;
        }

        .biology-study-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 14px;
        }

        .biology-study-card {
          position: relative;
          min-height: 145px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
        }

        .study-number {
          position: absolute;
          top: 10px;
          right: 13px;
          color: rgba(255,255,255,0.25);
          font-size: 12px;
          font-weight: 700;
        }

        .biology-study-card svg {
          width: 30px;
          margin-bottom: 12px;
          color: #ff8500;
        }

        .biology-study-card span {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }


        /* =====================================================
           DEVELOPMENT
        ====================================================== */

        .biology-development {
          padding: 85px 0;
          background: #fffdf9;
        }

        .biology-development-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .biology-development-card {
          min-height: 220px;
          padding: 30px 20px;
          text-align: center;
          border-radius: 17px;
          background: white;
          border: 1px solid #e9e9e9;
          box-shadow: 0 8px 25px rgba(4,35,70,0.06);
        }

        .development-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #edf4fb;
          color: #09285a;
        }

        .development-icon svg {
          width: 30px;
        }

        .biology-development-card h3 {
          margin: 0 0 10px;
          color: #09285a;
          font-size: 17px;
        }

        .biology-development-card p {
          margin: 0;
          color: #5b6e82;
          font-size: 13px;
          line-height: 1.6;
        }


        /* =====================================================
           FINAL CTA
        ====================================================== */

        .biology-final-cta {
          position: relative;
          min-height: 260px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            url("/images/biology/biology-hero.jpg")
            center / cover no-repeat;
        }

        .biology-final-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(2,29,59,0.96),
              rgba(3,70,54,0.82)
            );
        }

        .biology-final-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          color: white;
        }

        .cta-kicker {
          margin-bottom: 10px;
          color: white;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .cta-kicker span {
          margin: 0 8px;
          color: #ff8500;
        }

        .biology-final-content h2 {
          margin: 0 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(35px, 4vw, 52px);
          line-height: 1;
        }

        .biology-final-content h2 strong {
          color: #ff8500;
        }

        .biology-final-content p {
          max-width: 650px;
          margin: 0;
          color: #e8f1f5;
          line-height: 1.6;
        }

        .biology-cta-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 24px;
          border-radius: 30px;
          background: #ff7600;
          color: white;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .biology-cta-button:hover {
          background: #e96100;
          transform: translateY(-2px);
        }

        .biology-cta-button svg {
          width: 18px;
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1050px) {

          .biology-hero-left {
            width: 56%;
          }

          .biology-hero-right {
            width: 48%;
          }

          .biology-hero-inner {
            width: 90%;
          }

          .biology-about-layout {
            grid-template-columns: 1fr;
          }

          .biology-resource-layout {
            grid-template-columns: 1fr;
          }

          .biology-reference {
            max-width: 700px;
          }

          .biology-study-layout {
            grid-template-columns: 1fr;
          }

          .biology-development-grid {
            grid-template-columns: 1fr 1fr;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 760px) {

          .biology-hero {
            display: block;
            min-height: 780px;
          }

          .biology-hero-left {
            width: 100%;
            min-height: 500px;
          }

          .biology-hero-left::after {
            display: none;
          }

          .biology-hero-right {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 340px;
          }

          .biology-hero-right::after {
            background:
              linear-gradient(
                180deg,
                rgba(6,36,82,0.25),
                transparent 50%
              );
          }

          .biology-hero-inner {
            width: 90%;
            margin: 0 auto;
            padding-top: 30px;
          }

          .biology-hero h1 {
            font-size: 55px;
          }

          .biology-hero-description {
            font-size: 14px;
          }

          .biology-hero-features {
            margin-top: 20px;
          }

          .biology-hero-features > div {
            min-width: 0;
            flex: 1;
            padding-right: 12px;
            margin-right: 12px;
          }

          .biology-hero-features svg {
            width: 27px;
          }

          .biology-hero-features span {
            font-size: 10px;
          }

          .biology-hero-wave {
            height: 80px;
          }

          .biology-about,
          .biology-facilities-section,
          .biology-practical,
          .biology-study-section,
          .biology-development {
            padding: 60px 0;
          }

          .biology-check-list {
            grid-template-columns: 1fr;
          }

          .biology-resource-grid {
            grid-template-columns: 1fr;
          }

          .biology-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 210px 210px 210px;
          }

          .biology-gallery-card.large {
            grid-column: 1 / 3;
            grid-row: auto;
          }

          .biology-study-grid {
            grid-template-columns: 1fr 1fr;
          }

          .biology-final-content {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 55px;
            padding-bottom: 55px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {

          .biology-hero {
            min-height: 750px;
          }

          .biology-hero-left {
            min-height: 480px;
          }

          .biology-hero-right {
            height: 320px;
          }

          .biology-hero h1 {
            font-size: 47px;
          }

          .biology-kicker {
            font-size: 13px;
          }

          .biology-hero-features {
            gap: 5px;
          }

          .biology-hero-features > div {
            margin-right: 4px;
            padding-right: 4px;
          }

          .biology-hero-image-caption {
            right: 18px;
            bottom: 70px;
          }

          .biology-about-image {
            height: 300px;
          }

          .biology-resource-card {
            padding: 18px;
          }

          .biology-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 230px);
          }

          .biology-gallery-card.large {
            grid-column: auto;
          }

          .biology-study-grid {
            grid-template-columns: 1fr 1fr;
          }

          .biology-development-grid {
            grid-template-columns: 1fr;
          }

          .reference-row {
            grid-template-columns: 27px 1fr;
          }

          .reference-row strong {
            grid-column: 2;
          }

        }

      `}</style>

    </div>
  );
};

export default BiologyLab;