import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Cpu,
  Code2,
  Wifi,
  ShieldCheck,
  Database,
  GraduationCap,
  Users,
  Globe2,
  Settings,
  Headphones,
  PlayCircle,
  ArrowRight,
  Cloud,
  Laptop,
  Network,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const images = {
  hero: "/images/labs/computer/DSC_1264.JPG",
  lab: "/images/labs/computer/comp1.png",
  student1: "/images/labs/computer/DSC_1265.JPG",
  student2: "/images/labs/computer/DSC_1266.JPG",
  student3: "/images/labs/computer/DSC_1267.JPG",
  student4: "/images/labs/computer/comp2.png",
};

const additionalGalleryImages = [
  "comp3.png",
  "comp5.png",
  "comp6.png",
  "comp7.png",
  "comp8.png",
  "comp9.png",
].map((file) => ({
  src: `/images/labs/computer/${file}`,
  title: `Computer Lab ${file.replace("comp", "").replace(".png", "")}`,
}));

const quickReference = [
  {
    icon: Monitor,
    title: "Infrastructure",
    value: "Modern Computer Lab",
  },
  {
    icon: Cpu,
    title: "Technology",
    value: "Updated Systems",
  },
  {
    icon: Code2,
    title: "Learning",
    value: "Programming & Development",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    value: "High-Speed Internet",
  },
  {
    icon: ShieldCheck,
    title: "Environment",
    value: "Safe & Secure",
  },
];

const facilities = [
  {
    icon: Monitor,
    title: "High-Performance Computers",
    text: "Modern computer systems suitable for programming, academic work and digital learning.",
  },
  {
    icon: Settings,
    title: "Licensed Software",
    text: "Software resources supporting practical training and academic activities.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    text: "Reliable internet access for research, online learning and digital resources.",
  },
  {
    icon: PlayCircle,
    title: "Multimedia Learning",
    text: "Digital tools and multimedia resources for interactive classroom learning.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    text: "Controlled laboratory access and a disciplined learning environment.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    text: "Technical assistance for students during practical and laboratory sessions.",
  },
];

const learningAreas = [
  {
    icon: Code2,
    title: "Programming",
    text: "Programming fundamentals and problem-solving practice.",
  },
  {
    icon: Globe2,
    title: "Web Development",
    text: "Modern web technologies and practical development.",
  },
  {
    icon: Database,
    title: "Database",
    text: "Database concepts, queries and data management.",
  },
  {
    icon: Laptop,
    title: "Digital Applications",
    text: "Productivity tools and computer applications.",
  },
];

const studentSkills = [
  {
    icon: Code2,
    title: "Programming Practice",
  },
  {
    icon: Globe2,
    title: "Web Development",
  },
  {
    icon: Briefcase,
    title: "Project Work",
  },
  {
    icon: Cloud,
    title: "Digital Learning",
  },
];

const ComputerLab = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  return (
    <div className="computer-lab-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="computer-hero">

        {/* LEFT NAVY AREA */}

        <div className="computer-hero-blue">

          <div className="computer-watermark">
            <Monitor size={260} strokeWidth={1} />
          </div>

          <div className="computer-hero-content">

            <div className="computer-kicker">
              <Monitor size={18} />
              FACILITIES & LABORATORIES
            </div>

            <div className="computer-line"></div>

            <h1>
              Computer
              <span>Laboratory.</span>
            </h1>

            <h2>
              Learn Today. Build Tomorrow.
            </h2>

            <p>
              The Computer Laboratory at Yaduvanshi Degree College
              provides students with modern technology, practical
              training and a hands-on learning environment to build
              a strong foundation for their future.
            </p>

            <div className="computer-buttons">

              <Link
                to="/admission/online-admission"
                className="computer-orange-button"
              >
                Apply for Admission
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/facilities"
                className="computer-outline-button"
              >
                Explore Facilities
              </Link>

            </div>

          </div>

          {/* HERO FEATURE STRIP */}

          <div className="computer-hero-features">

            <div>
              <Monitor />
              <span>
                Modern
                <strong>Infrastructure</strong>
              </span>
            </div>

            <div>
              <Cpu />
              <span>
                Latest
                <strong>Technology</strong>
              </span>
            </div>

            <div>
              <Users />
              <span>
                Skilled
                <strong>Guidance</strong>
              </span>
            </div>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="computer-hero-image">

          <img
            src={images.hero}
            alt="Yaduvanshi Computer Laboratory"
          />

          <div className="computer-image-overlay"></div>

          <div className="computer-image-badge">

            <Monitor size={22} />

            <div>
              <span>Well Equipped</span>
              <strong>Computer Lab</strong>
            </div>

          </div>

        </div>


        {/* CURVED SEPARATOR */}

        <div className="computer-hero-wave">

          <svg
            viewBox="0 0 1536 160"
            preserveAspectRatio="none"
          >

            <path
              d="
                M0 88
                C170 150 360 155 555 102
                C760 46 970 50 1150 88
                C1320 124 1430 100 1536 35
              "
              fill="none"
              stroke="#ff7600"
              strokeWidth="5"
            />

            <path
              d="
                M0 95
                C170 157 360 162 555 109
                C760 53 970 57 1150 95
                C1320 131 1430 107 1536 42
                L1536 160
                L0 160
                Z
              "
              fill="#fffdf9"
            />

          </svg>

        </div>

      </section>


      {/* =====================================================
          ABOUT COMPUTER LAB
      ===================================================== */}

      <section className="computer-about">

        <div className="computer-container">

          <div className="computer-about-grid">

            {/* LEFT */}

            <div className="computer-about-text">

              <div className="computer-section-label">
                <span></span>
                ABOUT THE COMPUTER LAB
              </div>

              <h2>
                Empowering Students
                <span>with Digital Skills</span>
              </h2>

              <p>
                The Computer Laboratory at Yaduvanshi Degree College
                provides a modern and well-equipped environment for
                students to learn, practice and master computer
                technologies.
              </p>

              <p>
                It supports academic learning, practical training,
                programming, digital applications and research
                activities.
              </p>

              <div className="computer-about-points">

                <div>
                  <CheckCircle2 />
                  Programming Practice
                </div>

                <div>
                  <CheckCircle2 />
                  Internet & Research
                </div>

                <div>
                  <CheckCircle2 />
                  Software Applications
                </div>

                <div>
                  <CheckCircle2 />
                  Expert Support
                </div>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="computer-about-image">

              <img
                src={images.lab}
                alt="Computer laboratory"
              />

              <div className="computer-lab-label">
                <Monitor size={16} />
                Modern Computer Lab
              </div>

              <div className="computer-lab-bottom">

                <span>Programming</span>
                <b>|</b>
                <span>Web Development</span>
                <b>|</b>
                <span>Database</span>
                <b>|</b>
                <span>Graphic Design</span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="computer-facilities">

        <div className="computer-container">

          <div className="computer-facilities-heading">

            <div className="computer-section-label">
              <span></span>
              LAB FACILITIES
            </div>

            <h2>
              State-of-the-Art Facilities
              <span>for Advanced Learning</span>
            </h2>

            <p>
              Our computer laboratory is equipped with modern
              hardware, software and digital resources to support
              practical learning.
            </p>

          </div>


          <div className="computer-facility-layout">

            {/* CARDS */}

            <div className="computer-facility-grid">

              {facilities.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="computer-facility-card"
                    key={item.title}
                  >

                    <div className="computer-facility-icon">
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

            <aside className="computer-reference">

              <div className="computer-reference-heading">

                <span>QUICK REFERENCE</span>

                <strong>
                  COMPUTER LAB
                </strong>

              </div>

              {quickReference.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="computer-reference-row"
                    key={item.title}
                  >

                    <Icon />

                    <span>
                      {item.title}
                    </span>

                    <strong>
                      {item.value}
                    </strong>

                  </div>
                );

              })}

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING AREAS
      ===================================================== */}

      <section className="computer-learning">

        <div className="computer-container">

          <div className="computer-learning-heading">

            <div className="computer-section-label">
              <span></span>
              DIGITAL LEARNING
            </div>

            <h2>
              Technology That
              <span>Builds Your Future</span>
            </h2>

            <p>
              Students gain practical knowledge across multiple
              areas of computer science and digital technology.
            </p>

          </div>


          <div className="computer-learning-grid">

            {learningAreas.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="computer-learning-card"
                  key={item.title}
                >

                  <Icon />

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          STUDENTS IN ACTION
      ===================================================== */}

      <section className="computer-students">

        <div className="computer-container">

          <div className="computer-student-header">

            <div>

              <div className="computer-section-label">
                <span></span>
                STUDENTS IN ACTION
              </div>

              <h2>
                Learning. Practicing.
                <span>Growing.</span>
              </h2>

              <p>
                Students get hands-on experience in programming,
                web development, design and digital tools,
                preparing them for real-world opportunities.
              </p>

            </div>

            <button
              type="button"
              onClick={() => setShowAllPhotos((visible) => !visible)}
              aria-expanded={showAllPhotos}
              className="computer-gallery-button"
            >
              {showAllPhotos ? "Show Fewer Photos" : "View More Photos"}
              <ArrowRight size={17} />
            </button>

          </div>


          <div className="computer-student-gallery">

            <div className="computer-gallery-card">

              <img
                src={images.student1}
                alt="Programming practice"
              />

              <div>
                <Monitor />
                Programming Practice
              </div>

            </div>


            <div className="computer-gallery-card">

              <img
                src={images.student2}
                alt="Web development"
              />

              <div>
                <Code2 />
                Web Development
              </div>

            </div>


            <div className="computer-gallery-card">

              <img
                src={images.student3}
                alt="Student project work"
              />

              <div>
                <Network />
                Project Work
              </div>

            </div>


            <div className="computer-gallery-card">

              <img
                src={images.student4}
                alt="Digital learning"
              />

              <div>
                <Cloud />
                Digital Learning
              </div>

            </div>

          </div>

          {showAllPhotos && (
            <div className="computer-student-gallery mt-4">
              {additionalGalleryImages.map((image) => (
                <div className="computer-gallery-card" key={image.src}>
                  <img src={image.src} alt={image.title} />
                  <div>
                    <Monitor />
                    {image.title}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          SKILLS / DARK SECTION
      ===================================================== */}

      <section className="computer-skills">

        <div className="computer-container">

          <div className="computer-skills-content">

            <div>

              <div className="computer-skills-label">
                <span></span>
                YOUR FUTURE IN THE DIGITAL WORLD
              </div>

              <h2>
                Gain the Skills.
                <span>Get Ahead.</span>
              </h2>

              <p>
                Join Yaduvanshi Degree College and start your
                journey towards a successful career in technology
                and innovation.
              </p>

            </div>


            <div className="computer-skills-icons">

              <div>
                <GraduationCap />
                <span>Practical<br />Learning</span>
              </div>

              <div>
                <Cpu />
                <span>Modern<br />Technology</span>
              </div>

              <div>
                <Code2 />
                <span>Digital<br />Skills</span>
              </div>

              <div>
                <Briefcase />
                <span>Career<br />Preparation</span>
              </div>

            </div>


            <Link
              to="/admission/online-admission"
              className="computer-admission-button"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL INFORMATION
      ===================================================== */}

      <section className="computer-final">

        <div className="computer-container">

          <div className="computer-final-grid">

            <div>
              <Monitor />
              <h3>Modern Infrastructure</h3>
              <p>
                A technology-focused environment for practical
                computer education.
              </p>
            </div>

            <div>
              <Users />
              <h3>Student Support</h3>
              <p>
                Practical guidance and collaborative learning
                opportunities.
              </p>
            </div>

            <div>
              <Globe2 />
              <h3>Digital Exposure</h3>
              <p>
                Access to digital resources and internet-based
                learning.
              </p>
            </div>

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

        .computer-lab-page {
          width: 100%;
          overflow: hidden;
          background: #fffdf9;
          color: #09285a;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .computer-container {
          width: min(1380px, 91%);
          margin: 0 auto;
        }


        /* =================================================
           HERO
        ================================================= */

        .computer-hero {
          position: relative;
          min-height: 560px;
          background: #062452;
          overflow: hidden;
        }

        .computer-hero-blue {
          position: relative;
          z-index: 3;
          width: 54%;
          min-height: 560px;
          background:
            linear-gradient(
              135deg,
              #041c3b 0%,
              #062452 58%,
              #083768 100%
            );
          color: white;
          border-bottom-right-radius: 180px;
        }

        .computer-watermark {
          position: absolute;
          top: 35px;
          right: 45px;
          opacity: .055;
          pointer-events: none;
        }

        .computer-hero-content {
          position: relative;
          z-index: 2;
          width: 82%;
          margin-left: 9%;
          padding-top: 65px;
        }

        .computer-kicker {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ff8500;
          font-size: 14px;
          font-weight: 800;
        }

        .computer-line {
          width: 38px;
          height: 3px;
          margin: 13px 0;
          background: #ff7600;
        }

        .computer-hero h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(55px, 5.7vw, 82px);
          line-height: .94;
          letter-spacing: -2px;
        }

        .computer-hero h1 span {
          display: block;
          color: #ff8500;
        }

        .computer-hero h2 {
          margin: 15px 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          color: white;
        }

        .computer-hero-content > p {
          max-width: 520px;
          margin: 0;
          color: #dbe7f4;
          font-size: 14px;
          line-height: 1.6;
        }

        .computer-buttons {
          display: flex;
          gap: 12px;
          margin-top: 23px;
        }

        .computer-orange-button,
        .computer-outline-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 18px;
          border-radius: 24px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: .25s ease;
        }

        .computer-orange-button {
          background: #ff7600;
          color: white;
        }

        .computer-outline-button {
          color: white;
          border: 1px solid white;
        }

        .computer-orange-button:hover,
        .computer-outline-button:hover {
          transform: translateY(-2px);
        }


        /* HERO FEATURES */

        .computer-hero-features {
          position: absolute;
          left: 9%;
          bottom: 48px;
          display: flex;
          gap: 30px;
        }

        .computer-hero-features > div {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .computer-hero-features svg {
          width: 27px;
          color: #ff8500;
        }

        .computer-hero-features span {
          display: flex;
          flex-direction: column;
          color: #dce7f4;
          font-size: 10px;
        }

        .computer-hero-features strong {
          color: white;
          font-size: 12px;
        }


        /* HERO IMAGE */

        .computer-hero-image {
          position: absolute;
          z-index: 2;
          top: 0;
          right: 0;
          width: 51%;
          height: 560px;
          overflow: hidden;
          border-bottom-left-radius: 170px;
        }

        .computer-hero-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .computer-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(6,36,82,.42),
              transparent 40%
            );
        }

        .computer-image-badge {
          position: absolute;
          right: 35px;
          bottom: 95px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 16px;
          border-radius: 28px;
          background: #ff7600;
          color: white;
          box-shadow: 0 8px 25px rgba(0,0,0,.22);
        }

        .computer-image-badge div {
          display: flex;
          flex-direction: column;
        }

        .computer-image-badge span {
          font-size: 10px;
        }

        .computer-image-badge strong {
          font-size: 12px;
        }


        /* WAVE */

        .computer-hero-wave {
          position: absolute;
          z-index: 10;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 95px;
        }

        .computer-hero-wave svg {
          width: 100%;
          height: 100%;
        }


        /* =================================================
           SECTION LABEL
        ================================================= */

        .computer-section-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 11px;
          color: #09285a;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .computer-section-label span {
          width: 32px;
          height: 3px;
          background: #ff7600;
        }


        /* =================================================
           ABOUT
        ================================================= */

        .computer-about {
          padding: 65px 0 75px;
          background: #fffdf9;
        }

        .computer-about-grid {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          align-items: center;
          gap: 45px;
        }

        .computer-about-text h2,
        .computer-facilities-heading h2,
        .computer-learning-heading h2,
        .computer-student-header h2 {
          margin: 0;
          color: #09285a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(35px, 4vw, 51px);
          line-height: 1.02;
        }

        .computer-about-text h2 span,
        .computer-facilities-heading h2 span,
        .computer-learning-heading h2 span,
        .computer-student-header h2 span {
          display: block;
          color: #ff7600;
        }

        .computer-about-text p {
          margin: 14px 0 0;
          color: #5c7084;
          font-size: 13px;
          line-height: 1.65;
        }

        .computer-about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 22px;
        }

        .computer-about-points div {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #173b64;
          font-size: 11px;
          font-weight: 700;
        }

        .computer-about-points svg {
          width: 17px;
          color: #ff7600;
        }


        /* IMAGE */

        .computer-about-image {
          position: relative;
          height: 340px;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }

        .computer-about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .computer-lab-label {
          position: absolute;
          left: 15px;
          top: 15px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 14px;
          border-radius: 25px;
          background: #ff7600;
          color: white;
          font-size: 11px;
          font-weight: 700;
        }

        .computer-lab-bottom {
          position: absolute;
          left: 15px;
          right: 15px;
          bottom: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 11px;
          border-radius: 10px;
          background: #062452;
          color: white;
          font-size: 9px;
          font-weight: 700;
        }


        /* =================================================
           FACILITIES
        ================================================= */

        .computer-facilities {
          padding: 70px 0;
          background: #f8f1e8;
        }

        .computer-facilities-heading {
          margin-bottom: 30px;
        }

        .computer-facilities-heading p,
        .computer-learning-heading p {
          max-width: 650px;
          margin-top: 12px;
          color: #617589;
          font-size: 13px;
          line-height: 1.6;
        }

        .computer-facility-layout {
          display: grid;
          grid-template-columns: 1.55fr .75fr;
          gap: 22px;
        }

        .computer-facility-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .computer-facility-card {
          display: flex;
          align-items: center;
          gap: 15px;
          min-height: 125px;
          padding: 18px;
          background: white;
          border: 1px solid #ece4d9;
          border-radius: 14px;
          box-shadow: 0 5px 18px rgba(20,35,50,.05);
        }

        .computer-facility-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff4e5;
          color: #ff7600;
        }

        .computer-facility-icon svg {
          width: 26px;
        }

        .computer-facility-card h3 {
          margin: 0 0 5px;
          color: #09285a;
          font-size: 13px;
        }

        .computer-facility-card p {
          margin: 0;
          color: #66798d;
          font-size: 10px;
          line-height: 1.55;
        }


        /* =================================================
           QUICK REFERENCE
        ================================================= */

        .computer-reference {
          height: fit-content;
          overflow: hidden;
          background: white;
          border-radius: 16px;
          box-shadow: 0 7px 22px rgba(0,0,0,.08);
        }

        .computer-reference-heading {
          padding: 17px 18px;
          background: #062452;
          color: white;
        }

        .computer-reference-heading span,
        .computer-reference-heading strong {
          display: block;
        }

        .computer-reference-heading span {
          font-size: 10px;
          font-weight: 700;
        }

        .computer-reference-heading strong {
          margin-top: 3px;
          color: #ff8500;
          font-size: 18px;
        }

        .computer-reference-row {
          display: grid;
          grid-template-columns: 24px 1fr 1fr;
          gap: 8px;
          align-items: center;
          padding: 13px 14px;
          border-bottom: 1px solid #eee;
        }

        .computer-reference-row svg {
          width: 19px;
          color: #ff7600;
        }

        .computer-reference-row span {
          color: #18385d;
          font-size: 10px;
          font-weight: 700;
        }

        .computer-reference-row strong {
          color: #64778a;
          font-size: 9px;
          font-weight: 500;
        }


        /* =================================================
           LEARNING
        ================================================= */

        .computer-learning {
          padding: 70px 0;
          background: #fffdf9;
        }

        .computer-learning-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
          margin-top: 30px;
        }

        .computer-learning-card {
          min-height: 175px;
          padding: 25px 18px;
          text-align: center;
          border: 1px solid #ececec;
          border-radius: 15px;
          background: white;
          box-shadow: 0 5px 18px rgba(0,0,0,.05);
        }

        .computer-learning-card svg {
          width: 34px;
          color: #ff7600;
        }

        .computer-learning-card h3 {
          margin: 13px 0 7px;
          color: #09285a;
          font-size: 14px;
        }

        .computer-learning-card p {
          margin: 0;
          color: #687a8e;
          font-size: 10px;
          line-height: 1.6;
        }


        /* =================================================
           STUDENTS
        ================================================= */

        .computer-students {
          padding: 70px 0;
          background: #fffdf9;
        }

        .computer-student-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 30px;
        }

        .computer-student-header p {
          max-width: 590px;
          margin-top: 13px;
          color: #5f7387;
          font-size: 13px;
          line-height: 1.6;
        }

        .computer-gallery-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
          padding: 10px 18px;
          border: 1.5px solid #09285a;
          border-radius: 25px;
          color: #09285a;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
        }

        .computer-student-gallery {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 13px;
        }

        .computer-gallery-card {
          overflow: hidden;
          border-radius: 13px;
          background: white;
          box-shadow: 0 5px 20px rgba(0,0,0,.09);
        }

        .computer-gallery-card img {
          width: 100%;
          height: 190px;
          display: block;
          object-fit: cover;
        }

        .computer-gallery-card div {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px;
          color: #09285a;
          font-size: 10px;
          font-weight: 700;
        }

        .computer-gallery-card svg {
          width: 16px;
          color: #ff7600;
        }


        /* =================================================
           DARK CTA
        ================================================= */

        .computer-skills {
          padding: 52px 0;
          background:
            linear-gradient(
              110deg,
              #062452,
              #073d6c
            );
          position: relative;
          overflow: hidden;
        }

        .computer-skills::after {
          content: "";
          position: absolute;
          right: -100px;
          top: -100px;
          width: 420px;
          height: 420px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
        }

        .computer-skills-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 1fr auto;
          align-items: center;
          gap: 35px;
        }

        .computer-skills-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;
          color: #ff8500;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .computer-skills-label span {
          width: 28px;
          height: 3px;
          background: #ff7600;
        }

        .computer-skills h2 {
          margin: 0;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          line-height: 1.05;
        }

        .computer-skills h2 span {
          color: #ff8500;
        }

        .computer-skills p {
          max-width: 460px;
          margin: 10px 0 0;
          color: #dbe7f4;
          font-size: 11px;
          line-height: 1.6;
        }

        .computer-skills-icons {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }

        .computer-skills-icons div {
          text-align: center;
        }

        .computer-skills-icons svg {
          width: 29px;
          color: #ff8500;
          margin-bottom: 7px;
        }

        .computer-skills-icons span {
          color: white;
          font-size: 9px;
          line-height: 1.3;
        }

        .computer-admission-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 13px 19px;
          border-radius: 25px;
          background: #ff7600;
          color: white;
          text-decoration: none;
          white-space: nowrap;
          font-size: 11px;
          font-weight: 700;
        }


        /* =================================================
           FINAL
        ================================================= */

        .computer-final {
          padding: 42px 0;
          background: #f8f1e8;
        }

        .computer-final-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .computer-final-grid > div {
          display: grid;
          grid-template-columns: 48px 1fr;
          column-gap: 14px;
          align-items: center;
          padding: 20px;
          background: white;
          border-radius: 13px;
          border: 1px solid #eee5d9;
        }

        .computer-final-grid svg {
          grid-row: span 2;
          width: 32px;
          color: #ff7600;
        }

        .computer-final-grid h3 {
          margin: 0;
          color: #09285a;
          font-size: 14px;
        }

        .computer-final-grid p {
          margin: 5px 0 0;
          color: #6a7c8e;
          font-size: 10px;
          line-height: 1.5;
        }


        /* =================================================
           TABLET
        ================================================= */

        @media(max-width:1050px) {

          .computer-hero-blue {
            width: 58%;
          }

          .computer-hero-image {
            width: 48%;
          }

          .computer-facility-layout {
            grid-template-columns: 1fr;
          }

          .computer-reference {
            max-width: 650px;
          }

          .computer-skills-content {
            grid-template-columns: 1fr;
          }

          .computer-admission-button {
            width: fit-content;
          }

        }


        /* =================================================
           MOBILE
        ================================================= */

        @media(max-width:760px) {

          .computer-hero {
            min-height: 800px;
          }

          .computer-hero-blue {
            width: 100%;
            min-height: 520px;
            border-bottom-right-radius: 0;
          }

          .computer-hero-image {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 330px;
            border-bottom-left-radius: 0;
          }

          .computer-hero-content {
            width: 88%;
            margin: auto;
            padding-top: 48px;
          }

          .computer-hero h1 {
            font-size: 53px;
          }

          .computer-hero-features {
            display: none;
          }

          .computer-about-grid {
            grid-template-columns: 1fr;
          }

          .computer-facility-grid {
            grid-template-columns: 1fr;
          }

          .computer-learning-grid {
            grid-template-columns: 1fr 1fr;
          }

          .computer-student-header {
            display: block;
          }

          .computer-gallery-button {
            margin-top: 18px;
          }

          .computer-student-gallery {
            grid-template-columns: 1fr 1fr;
          }

          .computer-skills-content {
            grid-template-columns: 1fr;
          }

          .computer-final-grid {
            grid-template-columns: 1fr;
          }

        }


        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media(max-width:480px) {

          .computer-hero {
            min-height: 750px;
          }

          .computer-hero-blue {
            min-height: 470px;
          }

          .computer-hero-image {
            height: 300px;
          }

          .computer-hero h1 {
            font-size: 46px;
          }

          .computer-hero h2 {
            font-size: 17px;
          }

          .computer-buttons {
            flex-wrap: wrap;
          }

          .computer-about-points {
            grid-template-columns: 1fr;
          }

          .computer-about-image {
            height: 280px;
          }

          .computer-lab-bottom {
            gap: 5px;
            font-size: 7px;
          }

          .computer-learning-grid {
            grid-template-columns: 1fr;
          }

          .computer-student-gallery {
            grid-template-columns: 1fr;
          }

          .computer-gallery-card img {
            height: 210px;
          }

          .computer-skills-icons {
            grid-template-columns: 1fr 1fr;
            row-gap: 20px;
          }

          .computer-reference-row {
            grid-template-columns: 22px 1fr;
          }

          .computer-reference-row strong {
            grid-column: 2;
          }

        }

      `}</style>

    </div>
  );
};

export default ComputerLab;