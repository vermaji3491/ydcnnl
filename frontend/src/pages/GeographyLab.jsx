import React from "react";
import { useState } from "react";
import {
  Globe2,
  Map,
  MapPinned,
  Compass,
  Mountain,
  Satellite,
  GraduationCap,
  Search,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Layers3,
  Navigation,
  BarChart3,
  Route,
  Leaf,
  Camera,
  BookOpen,
  Award,
} from "lucide-react";

const GeographyLab = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  /* =========================================================
     GEOGRAPHY LAB IMAGES

     Put your actual images inside:

     public/images/geography/

     Example:
     geography-hero.jpg
     geography-lab.jpg
     geography-students.jpg
     geography-survey.jpg
     geography-gis.jpg
     geography-model.jpg
  ========================================================= */

  const GALLERY = {
    hero: "/images/labs/geography/DSC_1268.JPG",

    lab: "/images/labs/geography/DSC_1269.JPG",

    student1: "/images/labs/geography/DSC_1270.JPG",

    student2: "/images/labs/geography/DSC_1271.JPG",

    student3: "/images/labs/geography/DSC_1272.JPG",

    student4: "/images/labs/geography/DSC_1273.JPG",
  };

  /* =========================================================
     FACILITIES
  ========================================================= */

  const facilities = [
    {
      icon: Map,
      title: "Maps & Atlases",
      text: "Physical, political, thematic and regional maps support practical geographical study and interpretation.",
    },
    {
      icon: Globe2,
      title: "Globes & Models",
      text: "Globes and geographical models help students understand continents, coordinates and physical features.",
    },
    {
      icon: Satellite,
      title: "Remote Sensing",
      text: "Students are introduced to satellite imagery, remote sensing concepts and geographical observation.",
    },
    {
      icon: Layers3,
      title: "Survey Resources",
      text: "Survey resources support practical understanding of measurements, mapping and geographical data collection.",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      text: "Students learn to collect, present and interpret geographical information through practical activities.",
    },
    {
      icon: Compass,
      title: "Field Study",
      text: "Field-oriented activities help students connect classroom concepts with real geographical environments.",
    },
  ];

  /* =========================================================
     STUDY AREAS
  ========================================================= */

  const studyAreas = [
    "Physical Geography",
    "Human Geography",
    "Economic Geography",
    "Regional Geography",
    "Cartography",
    "Climatology",
    "Geomorphology",
    "Environmental Geography",
    "Remote Sensing",
    "Geographical Techniques",
  ];

  /* =========================================================
     EQUIPMENT
  ========================================================= */

  const equipment = [
    "Physical Maps",
    "Political Maps",
    "Thematic Maps",
    "World Globe",
    "India Globe",
    "Topographical Sheets",
    "Survey Instruments",
    "Weather Instruments",
    "Geographical Models",
    "Charts & Diagrams",
    "Satellite Images",
    "Statistical Resources",
  ];

  /* =========================================================
     STUDENT ACTIVITIES
  ========================================================= */

  const activities = [
    {
      image: GALLERY.student1,
      icon: Map,
      title: "Map Reading & Analysis",
      text: "Students develop practical skills in reading, interpreting and analysing geographical maps.",
    },
    {
      image: GALLERY.student2,
      icon: Navigation,
      title: "Surveying Practice",
      text: "Practical exposure to basic surveying, measurement and field-oriented geographical techniques.",
    },
    {
      image: GALLERY.student3,
      icon: Satellite,
      title: "GIS & Digital Mapping",
      text: "Students explore digital geographical information and modern mapping concepts.",
    },
    {
      image: GALLERY.student4,
      icon: Mountain,
      title: "Model & Project Study",
      text: "Geographical models and projects help students understand physical and environmental processes.",
    },
  ];

  return (
    <div className="geography-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="geo-hero">

        <div className="geo-hero-bg">
          <img
            src={GALLERY.hero}
            alt="Geography Laboratory at Yaduvanshi Degree College"
          />
        </div>

        <div className="geo-hero-overlay"></div>

        <div className="geo-container geo-hero-content">

          <div className="geo-hero-text">

            <div className="geo-eyebrow">
              <Globe2 size={16} />
              FACILITIES & LABORATORIES
            </div>

            <h1>
              Geography
              <span>Laboratory</span>
            </h1>

            <h2>
              Explore the World. Understand the Environment.
            </h2>

            <p>
              Discover geography through maps, models, fieldwork,
              geographical data and practical learning at Yaduvanshi
              Degree College.
            </p>

            <div className="geo-hero-buttons">

              <a
                href="/admission/online-admission"
                className="geo-primary-btn"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </a>

              <a
                href="/facilities"
                className="geo-secondary-btn"
              >
                Explore Facilities
              </a>

            </div>

            <div className="geo-breadcrumb">

              <span>Home</span>
              <ArrowRight size={14} />

              <span>Facilities</span>
              <ArrowRight size={14} />

              <span>Laboratories</span>
              <ArrowRight size={14} />

              <strong>Geography Lab</strong>

            </div>

          </div>

        </div>

        {/* WAVE */}

        <div className="geo-wave">

          <svg
            viewBox="0 0 1536 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >

            <path
              d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1536,42 L1536,220 L0,220 Z"
              fill="#fffdf9"
            />

            <path
              d="M0,108 C150,201 355,204 555,129 C775,48 990,86 1160,123 C1280,149 1365,131 1440,84"
              fill="none"
              stroke="#ff7600"
              strokeWidth="5"
            />

          </svg>

        </div>

      </section>


      {/* =====================================================
          ABOUT LAB
      ===================================================== */}

      <section className="geo-about">

        <div className="geo-container geo-about-grid">

          <div className="geo-about-text">

            <span className="geo-label">
              ABOUT THE GEOGRAPHY LAB
            </span>

            <h2>
              Understand Places,
              <br />
              People and
              <span> Our Planet</span>
            </h2>

            <p>
              The Geography Laboratory at Yaduvanshi Degree College
              provides students with a practical environment to study
              geographical concepts through maps, models, data,
              observation and field-oriented activities.
            </p>

            <p>
              Practical learning helps students develop geographical
              awareness, analytical thinking and a better understanding
              of the physical and human environment around us.
            </p>

            <div className="geo-about-features">

              <div>
                <div className="geo-about-icon">
                  <Map size={22} />
                </div>

                <strong>Real Maps</strong>

                <span>
                  Maps & Atlases
                </span>
              </div>

              <div>
                <div className="geo-about-icon">
                  <Globe2 size={22} />
                </div>

                <strong>Physical Resources</strong>

                <span>
                  Globes & Models
                </span>
              </div>

              <div>
                <div className="geo-about-icon">
                  <Users size={22} />
                </div>

                <strong>Hands-on Learning</strong>

                <span>
                  Practical Activities
                </span>
              </div>

              <div>
                <div className="geo-about-icon">
                  <Compass size={22} />
                </div>

                <strong>Field Study</strong>

                <span>
                  Observation & Survey
                </span>
              </div>

            </div>

          </div>


          {/* IMAGE COLLAGE */}

          <div className="geo-photo-collage">

            <div className="geo-main-photo">

              <img
                src={GALLERY.lab}
                alt="Geography laboratory"
              />

              <div className="geo-photo-badge">
                <MapPinned size={17} />
                Modern Learning Environment
              </div>

              <div className="geo-photo-bottom">
                <Globe2 size={20} />

                <span>Maps</span>
                <i></i>

                <span>Globes</span>
                <i></i>

                <span>GIS</span>
                <i></i>

                <span>Survey</span>
              </div>

            </div>

            <div className="geo-small-photos">

              <img
                src={GALLERY.student1}
                alt="Students performing geography practical"
              />

              <img
                src={GALLERY.student2}
                alt="Geography surveying activity"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="geo-facilities">

        <div className="geo-container">

          <div className="geo-heading">

            <span className="geo-label">
              LAB FACILITIES
            </span>

            <h2>
              Resources for
              <span> Geographical Learning</span>
            </h2>

            <p>
              Practical resources help students connect geographical
              theory with observation, analysis and real-world learning.
            </p>

          </div>


          <div className="geo-facility-grid">

            {facilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  className="geo-facility-card"
                  key={index}
                >

                  <div className="geo-facility-top">

                    <div className="geo-facility-icon">
                      <Icon size={27} />
                    </div>

                    <span>
                      0{index + 1}
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="geo-card-arrow">
                    <ArrowRight size={17} />
                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          STUDENTS IN ACTION
      ===================================================== */}

      <section className="geo-students">

        <div className="geo-container">

          <div className="geo-heading geo-heading-left">

            <span className="geo-label">
              STUDENTS IN ACTION
            </span>

            <h2>
              Hands-on Learning,
              <br />
              <span>Real-World Skills</span>
            </h2>

            <p>
              Students can strengthen their understanding through
              practical exercises, geographical observation, mapping,
              surveying and project-based activities.
            </p>

          </div>


          <div className="geo-activity-grid">

            {activities.map((activity, index) => {

              const Icon = activity.icon;

              return (
                <div
                  className="geo-activity-card"
                  key={index}
                >

                  <div className="geo-activity-image">

                    <img
                      src={activity.image}
                      alt={activity.title}
                    />

                    <div className="geo-image-number">
                      0{index + 1}
                    </div>

                  </div>

                  <div className="geo-activity-content">

                    <div className="geo-activity-icon">
                      <Icon size={19} />
                    </div>

                    <div>

                      <h3>
                        {activity.title}
                      </h3>

                      <p>
                        {activity.text}
                      </p>

                    </div>

                  </div>

                </div>
              );

            })}

          </div>

          {showAllPhotos && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <img
                src="/images/labs/geography/DSC_1274.JPG"
                alt="Geography laboratory photo"
                className="h-64 w-full rounded-xl object-cover"
              />
            </div>
          )}

          <div className="geo-gallery-button-wrap">

            <button
              type="button"
              onClick={() => setShowAllPhotos((visible) => !visible)}
              aria-expanded={showAllPhotos}
              className="geo-outline-btn cursor-pointer bg-transparent"
            >
              <Camera size={17} />
              {showAllPhotos ? "Show Fewer Photos" : "View More Photos"}
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          AREAS OF STUDY
      ===================================================== */}

      <section className="geo-study">

        <div className="geo-container geo-study-grid">

          <div>

            <span className="geo-label">
              AREAS OF STUDY
            </span>

            <h2>
              Explore Different Branches of
              <span> Geography</span>
            </h2>

            <p>
              Laboratory resources and practical activities support
              learning across different areas of geographical study.
            </p>


            <div className="geo-study-list">

              {studyAreas.map((item, index) => (

                <div key={index}>

                  <CheckCircle2 size={17} />

                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          <div className="geo-world-visual">

            <div className="geo-world-glow"></div>

            <div className="geo-world-circle">

              <Globe2
                size={135}
                strokeWidth={0.8}
              />

            </div>

            <div className="geo-orbit orbit-one"></div>
            <div className="geo-orbit orbit-two"></div>

            <div className="geo-floating-tag tag-one">
              <Map size={19} />
              Cartography
            </div>

            <div className="geo-floating-tag tag-two">
              <Satellite size={19} />
              Remote Sensing
            </div>

            <div className="geo-floating-tag tag-three">
              <Mountain size={19} />
              Physical Geography
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EQUIPMENT
      ===================================================== */}

      <section className="geo-equipment">

        <div className="geo-container">

          <div className="geo-heading">

            <span className="geo-label">
              LAB RESOURCES
            </span>

            <h2>
              Geography Laboratory
              <span> Equipment</span>
            </h2>

            <p>
              Maps, models, instruments and other learning resources
              support practical geographical study.
            </p>

          </div>


          <div className="geo-equipment-grid">

            {equipment.map((item, index) => (

              <div
                className="geo-equipment-item"
                key={index}
              >

                <CheckCircle2 size={18} />

                <span>
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY STUDY
      ===================================================== */}

      <section className="geo-why">

        <div className="geo-container geo-why-grid">

          <div className="geo-why-text">

            <span className="geo-label white-label">
              WHY STUDY AT YADUVANSHI DEGREE COLLEGE?
            </span>

            <h2>
              Your Future in
              <br />
              Geography
              <span> Starts Here</span>
            </h2>

            <p>
              Develop practical understanding, strengthen academic
              concepts and discover how geography connects classroom
              learning with the world around us.
            </p>

          </div>


          <div className="geo-benefit-grid">

            <div>

              <div className="geo-benefit-icon">
                <GraduationCap size={25} />
              </div>

              <strong>
                Academic Learning
              </strong>

              <span>
                Strengthen concepts through practical activities.
              </span>

            </div>


            <div>

              <div className="geo-benefit-icon">
                <Globe2 size={25} />
              </div>

              <strong>
                Modern Resources
              </strong>

              <span>
                Learn with maps, models and geographical resources.
              </span>

            </div>


            <div>

              <div className="geo-benefit-icon">
                <Navigation size={25} />
              </div>

              <strong>
                Field Learning
              </strong>

              <span>
                Connect geographical concepts with real environments.
              </span>

            </div>


            <div>

              <div className="geo-benefit-icon">
                <Award size={25} />
              </div>

              <strong>
                Skill Development
              </strong>

              <span>
                Develop analytical and observational skills.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMISSION CTA
      ===================================================== */}

      <section className="geo-admission">

        <div className="geo-container geo-admission-inner">

          <div>

            <span>
              EXPLORE • LEARN • DISCOVER
            </span>

            <h2>
              Begin Your Academic Journey
              <br />
              at <strong>Yaduvanshi Degree College</strong>
            </h2>

            <p>
              Explore our programs, facilities and learning environment
              and take the next step towards your higher education.
            </p>

          </div>


          <div className="geo-admission-actions">

            <a
              href="/admission/online-admission"
              className="geo-admission-btn"
            >
              Apply for Admission
              <ArrowRight size={19} />
            </a>

            <a
              href="/courses"
              className="geo-admission-link"
            >
              Explore Programs
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          PAGE CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .geography-page {
          width: 100%;
          overflow: hidden;
          background: #fffdf9;
          color: #26364a;
        }

        .geo-container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .geo-hero {
          position: relative;
          min-height: 610px;
          overflow: hidden;
          background: #062452;
          color: white;
        }

        .geo-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .geo-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .geo-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;

          background:
            linear-gradient(
              90deg,
              rgba(3,25,58,.98) 0%,
              rgba(3,30,68,.94) 35%,
              rgba(4,39,78,.55) 58%,
              rgba(4,30,63,.15) 100%
            );
        }

        .geo-hero-content {
          position: relative;
          z-index: 3;

          min-height: 575px;

          display: flex;
          align-items: center;

          padding-top: 55px;
          padding-bottom: 135px;
        }

        .geo-hero-text {
          max-width: 610px;
        }

        .geo-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          color: #ff9b4a;

          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.8px;

          margin-bottom: 18px;
        }

        .geo-eyebrow svg {
          color: #ff7600;
        }

        .geo-hero h1 {
          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(48px, 6vw, 76px);
          line-height: .98;

          margin: 0 0 20px;

          letter-spacing: -2.5px;
        }

        .geo-hero h1 span {
          display: block;
          color: #ff7600;
        }

        .geo-hero h2 {
          font-family: Georgia, "Times New Roman", serif;

          font-size: 23px;
          line-height: 1.35;

          margin: 0 0 15px;

          color: white;
        }

        .geo-hero-text > p {
          max-width: 570px;

          color: #dbe6f2;

          font-size: 16px;
          line-height: 1.8;

          margin: 0 0 28px;
        }

        .geo-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;

          margin-bottom: 27px;
        }

        .geo-primary-btn,
        .geo-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          min-height: 48px;
          padding: 0 21px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;

          transition: .25s ease;
        }

        .geo-primary-btn {
          color: white;
          background: #ff7600;
          box-shadow: 0 10px 25px rgba(255,118,0,.22);
        }

        .geo-primary-btn:hover {
          transform: translateY(-3px);
          background: #e96500;
        }

        .geo-secondary-btn {
          color: #062452;
          background: white;
        }

        .geo-secondary-btn:hover {
          transform: translateY(-3px);
        }

        .geo-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;

          color: #b9c9da;

          font-size: 12px;
        }

        .geo-breadcrumb strong {
          color: #ff9748;
        }

        .geo-wave {
          position: absolute;
          z-index: 5;

          bottom: -1px;
          left: 0;

          width: 100%;
          height: 145px;
        }

        .geo-wave svg {
          display: block;
          width: 100%;
          height: 100%;
        }


        /* =====================================================
           GENERAL
        ===================================================== */

        .geo-about,
        .geo-students,
        .geo-study {
          padding: 95px 0;
        }

        .geo-label {
          display: inline-block;

          color: #ff7600;

          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.8px;

          margin-bottom: 12px;
        }

        .geo-label::before {
          content: "";

          display: inline-block;

          width: 38px;
          height: 3px;

          vertical-align: middle;

          margin-right: 9px;

          background: #ff7600;
        }

        .geo-about h2,
        .geo-heading h2,
        .geo-study h2,
        .geo-why h2 {
          font-family: Georgia, "Times New Roman", serif;

          color: #062452;

          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.13;

          letter-spacing: -.7px;

          margin: 0 0 17px;
        }

        .geo-about h2 span,
        .geo-heading h2 span,
        .geo-study h2 span {
          color: #ff7600;
        }

        .geo-about-text > p,
        .geo-heading > p,
        .geo-study > p {
          color: #657184;

          font-size: 15px;
          line-height: 1.85;
        }


        /* =====================================================
           ABOUT
        ===================================================== */

        .geo-about-grid {
          display: grid;

          grid-template-columns: .95fr 1.05fr;

          align-items: center;

          gap: 75px;
        }

        .geo-about-text > p {
          max-width: 570px;
        }

        .geo-about-features {
          display: grid;

          grid-template-columns: repeat(4,1fr);

          gap: 10px;

          margin-top: 30px;
        }

        .geo-about-features > div {
          min-height: 115px;

          padding: 16px 11px;

          text-align: center;

          background: white;

          border: 1px solid #ece5dd;

          border-radius: 13px;
        }

        .geo-about-icon {
          color: #ff7600;

          margin-bottom: 9px;
        }

        .geo-about-features strong,
        .geo-about-features span {
          display: block;
        }

        .geo-about-features strong {
          color: #062452;

          font-size: 12px;

          margin-bottom: 4px;
        }

        .geo-about-features span {
          color: #7b8795;

          font-size: 10px;

          line-height: 1.4;
        }


        /* =====================================================
           PHOTO COLLAGE
        ===================================================== */

        .geo-photo-collage {
          display: grid;

          grid-template-columns: 1fr .36fr;

          gap: 12px;

          min-height: 440px;
        }

        .geo-main-photo {
          position: relative;

          overflow: hidden;

          border-radius: 20px;

          min-height: 440px;

          background: #dce7e2;
        }

        .geo-main-photo img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .geo-photo-badge {
          position: absolute;

          top: 16px;
          left: 16px;

          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 9px 13px;

          color: white;

          background: #ff7600;

          border-radius: 20px;

          font-size: 11px;
          font-weight: 800;
        }

        .geo-photo-bottom {
          position: absolute;

          left: 16px;
          right: 16px;
          bottom: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          padding: 12px 15px;

          border-radius: 12px;

          color: white;

          background: rgba(6,36,82,.93);

          backdrop-filter: blur(8px);

          font-size: 11px;
          font-weight: 700;
        }

        .geo-photo-bottom svg {
          color: #ff7600;
        }

        .geo-photo-bottom i {
          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: #8ca0b6;
        }

        .geo-small-photos {
          display: grid;

          grid-template-rows: 1fr 1fr;

          gap: 12px;
        }

        .geo-small-photos img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          border-radius: 15px;
        }


        /* =====================================================
           FACILITIES
        ===================================================== */

        .geo-facilities {
          padding: 95px 0;

          background: #f8f1e8;
        }

        .geo-heading {
          max-width: 700px;

          margin: 0 auto 48px;

          text-align: center;
        }

        .geo-facility-grid {
          display: grid;

          grid-template-columns: repeat(3,1fr);

          gap: 20px;
        }

        .geo-facility-card {
          position: relative;

          min-height: 250px;

          padding: 28px;

          background: white;

          border: 1px solid #ede2d4;

          border-radius: 18px;

          transition: .3s ease;

          overflow: hidden;
        }

        .geo-facility-card:hover {
          transform: translateY(-7px);

          border-color: rgba(255,118,0,.45);

          box-shadow:
            0 20px 45px rgba(6,36,82,.11);
        }

        .geo-facility-top {
          display: flex;

          align-items: center;
          justify-content: space-between;
        }

        .geo-facility-icon {
          width: 56px;
          height: 56px;

          display: grid;
          place-items: center;

          color: #ff7600;

          background: #fff1e5;

          border-radius: 14px;
        }

        .geo-facility-top > span {
          color: #e8e0d6;

          font-family: Georgia, serif;

          font-size: 28px;
          font-weight: bold;
        }

        .geo-facility-card h3 {
          color: #062452;

          font-family: Georgia, serif;

          font-size: 20px;

          margin: 20px 0 8px;
        }

        .geo-facility-card p {
          color: #6c7887;

          font-size: 13px;
          line-height: 1.7;

          margin: 0;
        }

        .geo-card-arrow {
          position: absolute;

          right: 23px;
          bottom: 22px;

          color: #ff7600;

          opacity: .65;
        }


        /* =====================================================
           STUDENTS
        ===================================================== */

        .geo-heading-left {
          text-align: left;

          margin-left: 0;
        }

        .geo-heading-left p {
          max-width: 620px;
        }

        .geo-activity-grid {
          display: grid;

          grid-template-columns: repeat(4,1fr);

          gap: 17px;
        }

        .geo-activity-card {
          background: white;

          border: 1px solid #eae3db;

          border-radius: 16px;

          overflow: hidden;

          transition: .3s ease;
        }

        .geo-activity-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 18px 40px rgba(6,36,82,.11);
        }

        .geo-activity-image {
          position: relative;

          height: 215px;

          overflow: hidden;
        }

        .geo-activity-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition: .4s ease;
        }

        .geo-activity-card:hover
        .geo-activity-image img {
          transform: scale(1.05);
        }

        .geo-image-number {
          position: absolute;

          top: 10px;
          right: 10px;

          width: 32px;
          height: 32px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: white;

          background: #062452;

          font-size: 11px;
          font-weight: 800;
        }

        .geo-activity-content {
          display: flex;

          gap: 12px;

          padding: 17px;
        }

        .geo-activity-icon {
          flex-shrink: 0;

          width: 36px;
          height: 36px;

          display: grid;
          place-items: center;

          color: #ff7600;

          background: #fff1e5;

          border-radius: 9px;
        }

        .geo-activity-content h3 {
          color: #062452;

          font-family: Georgia, serif;

          font-size: 15px;

          margin: 0 0 5px;
        }

        .geo-activity-content p {
          color: #75808e;

          font-size: 11px;

          line-height: 1.55;

          margin: 0;
        }

        .geo-gallery-button-wrap {
          display: flex;
          justify-content: center;

          margin-top: 35px;
        }

        .geo-outline-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 12px 19px;

          color: #062452;

          border: 1.5px solid #062452;

          border-radius: 9px;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;

          transition: .25s;
        }

        .geo-outline-btn:hover {
          color: white;
          background: #062452;
        }


        /* =====================================================
           STUDY
        ===================================================== */

        .geo-study {
          background: #fffdf9;
        }

        .geo-study-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          align-items: center;

          gap: 80px;
        }

        .geo-study-grid > div:first-child > p {
          max-width: 570px;
        }

        .geo-study-list {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;

          margin-top: 27px;
        }

        .geo-study-list div {
          display: flex;
          align-items: center;

          gap: 8px;

          padding: 12px 13px;

          border-radius: 9px;

          background: #f8f1e8;

          color: #435164;

          font-size: 12px;
        }

        .geo-study-list svg {
          flex-shrink: 0;

          color: #ff7600;
        }


        /* WORLD VISUAL */

        .geo-world-visual {
          position: relative;

          height: 450px;

          display: grid;
          place-items: center;

          overflow: hidden;

          background: #062452;

          border-radius: 28px;
        }

        .geo-world-glow {
          position: absolute;

          width: 350px;
          height: 350px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,118,0,.20),
              transparent 67%
            );
        }

        .geo-world-circle {
          position: relative;
          z-index: 3;

          width: 185px;
          height: 185px;

          display: grid;
          place-items: center;

          color: #ff8a2a;

          border: 1px solid rgba(255,118,0,.35);

          border-radius: 50%;

          background: rgba(255,255,255,.05);
        }

        .geo-orbit {
          position: absolute;

          border: 1px dashed rgba(255,255,255,.17);

          border-radius: 50%;
        }

        .orbit-one {
          width: 290px;
          height: 290px;
        }

        .orbit-two {
          width: 405px;
          height: 405px;
        }

        .geo-floating-tag {
          position: absolute;
          z-index: 4;

          display: flex;
          align-items: center;
          gap: 7px;

          padding: 11px 14px;

          color: white;

          background: rgba(255,255,255,.10);

          border: 1px solid rgba(255,255,255,.15);

          border-radius: 11px;

          backdrop-filter: blur(9px);

          font-size: 11px;
          font-weight: 700;
        }

        .geo-floating-tag svg {
          color: #ff8a2a;
        }

        .tag-one {
          top: 45px;
          left: 35px;
        }

        .tag-two {
          top: 155px;
          right: 30px;
        }

        .tag-three {
          bottom: 43px;
          left: 45px;
        }


        /* =====================================================
           EQUIPMENT
        ===================================================== */

        .geo-equipment {
          padding: 95px 0;

          background: #f8f1e8;
        }

        .geo-equipment-grid {
          display: grid;

          grid-template-columns: repeat(4,1fr);

          gap: 11px;
        }

        .geo-equipment-item {
          display: flex;
          align-items: center;

          gap: 9px;

          padding: 15px;

          color: #455467;

          background: white;

          border: 1px solid #e9dfd2;

          border-radius: 10px;

          font-size: 12px;
        }

        .geo-equipment-item svg {
          flex-shrink: 0;

          color: #ff7600;
        }


        /* =====================================================
           WHY YADUVANSHI
        ===================================================== */

        .geo-why {
          padding: 80px 0;

          color: white;

          background:
            linear-gradient(
              110deg,
              #041d42,
              #062d5d
            );
        }

        .geo-why-grid {
          display: grid;

          grid-template-columns: .9fr 1.1fr;

          align-items: center;

          gap: 70px;
        }

        .white-label {
          color: #ff9a4a;
        }

        .geo-why h2 {
          color: white;
        }

        .geo-why h2 span {
          color: #ff7600;
        }

        .geo-why-text p {
          max-width: 520px;

          color: #cfdae7;

          line-height: 1.8;

          font-size: 14px;
        }

        .geo-benefit-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 13px;
        }

        .geo-benefit-grid > div {
          padding: 22px;

          background: rgba(255,255,255,.07);

          border: 1px solid rgba(255,255,255,.12);

          border-radius: 15px;
        }

        .geo-benefit-icon {
          width: 45px;
          height: 45px;

          display: grid;
          place-items: center;

          margin-bottom: 13px;

          color: #ff7600;

          background: rgba(255,118,0,.13);

          border-radius: 11px;
        }

        .geo-benefit-grid strong,
        .geo-benefit-grid span {
          display: block;
        }

        .geo-benefit-grid strong {
          color: white;

          font-size: 14px;

          margin-bottom: 6px;
        }

        .geo-benefit-grid span {
          color: #afc0d3;

          font-size: 11px;

          line-height: 1.5;
        }


        /* =====================================================
           ADMISSION CTA
        ===================================================== */

        .geo-admission {
          padding: 65px 0;

          background: #ff7600;

          color: white;
        }

        .geo-admission-inner {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 40px;
        }

        .geo-admission-inner > div:first-child > span {
          font-size: 11px;
          font-weight: 900;

          letter-spacing: 2px;

          color: #fff2e7;
        }

        .geo-admission h2 {
          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(29px,4vw,43px);

          line-height: 1.15;

          margin: 10px 0;
        }

        .geo-admission h2 strong {
          color: #062452;
        }

        .geo-admission p {
          max-width: 600px;

          color: #fff0e5;

          font-size: 14px;
          line-height: 1.7;

          margin: 0;
        }

        .geo-admission-actions {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 14px;
        }

        .geo-admission-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 15px 21px;

          color: white;

          background: #062452;

          border-radius: 10px;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;

          white-space: nowrap;

          transition: .25s;
        }

        .geo-admission-btn:hover {
          transform: translateY(-3px);

          background: #041a3b;
        }

        .geo-admission-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          color: #062452;

          text-decoration: none;

          font-size: 12px;
          font-weight: 800;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .geo-about-grid {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .geo-photo-collage {
            max-width: 760px;
          }

          .geo-facility-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .geo-activity-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .geo-equipment-grid {
            grid-template-columns: repeat(3,1fr);
          }

          .geo-study-grid,
          .geo-why-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .geo-world-visual {
            max-width: 650px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .geo-container {
            width: min(92%, 600px);
          }

          .geo-hero {
            min-height: 750px;
          }

          .geo-hero-content {
            min-height: 710px;

            align-items: flex-start;

            padding-top: 100px;
            padding-bottom: 110px;
          }

          .geo-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(3,25,58,.97),
                rgba(3,30,68,.75)
              );
          }

          .geo-hero h1 {
            font-size: 52px;
          }

          .geo-hero h2 {
            font-size: 20px;
          }

          .geo-wave {
            height: 105px;
          }

          .geo-about,
          .geo-students,
          .geo-study,
          .geo-equipment {
            padding: 70px 0;
          }

          .geo-about-features {
            grid-template-columns: 1fr 1fr;
          }

          .geo-photo-collage {
            grid-template-columns: 1fr;

            min-height: auto;
          }

          .geo-main-photo {
            min-height: 340px;
          }

          .geo-small-photos {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 170px;
          }

          .geo-facilities {
            padding: 70px 0;
          }

          .geo-facility-grid {
            grid-template-columns: 1fr;
          }

          .geo-activity-grid {
            grid-template-columns: 1fr;
          }

          .geo-activity-image {
            height: 230px;
          }

          .geo-study-list {
            grid-template-columns: 1fr;
          }

          .geo-equipment-grid {
            grid-template-columns: 1fr 1fr;
          }

          .geo-world-visual {
            height: 370px;
          }

          .geo-benefit-grid {
            grid-template-columns: 1fr;
          }

          .geo-admission-inner {
            flex-direction: column;

            align-items: flex-start;
          }

          .geo-admission-actions {
            flex-direction: row;

            align-items: center;

            flex-wrap: wrap;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .geo-hero h1 {
            font-size: 43px;
          }

          .geo-hero-buttons {
            flex-direction: column;

            align-items: stretch;
          }

          .geo-primary-btn,
          .geo-secondary-btn {
            width: 100%;
          }

          .geo-about-features {
            grid-template-columns: 1fr 1fr;
          }

          .geo-photo-bottom {
            gap: 6px;

            font-size: 9px;
          }

          .geo-equipment-grid {
            grid-template-columns: 1fr;
          }

          .geo-floating-tag {
            font-size: 9px;

            padding: 9px 11px;
          }

          .tag-one {
            left: 15px;
          }

          .tag-two {
            right: 15px;
          }

          .tag-three {
            left: 15px;
          }

        }

      `}</style>

    </div>
  );
};

export default GeographyLab;