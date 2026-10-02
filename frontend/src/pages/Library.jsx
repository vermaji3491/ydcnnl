import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Library as LibraryIcon,
  Wifi,
  Newspaper,
  FileText,
  GraduationCap,
  Users,
  Monitor,
  Search,
  ArrowRight,
  ExternalLink,
  BookMarked,
  Laptop,
  Clock3,
  Coffee,
  ShieldCheck,
  Download,
  Eye,
  Globe2,
  Database,
  Smartphone,
} from "lucide-react";

/* =========================================================
   LIBRARY PAGE
   Yaduvanshi Degree College
   Route:
   /facilities/library

   Suggested images:
   public/images/library/
   ├── library-hero.jpg
   ├── library-main.jpg
   ├── library-reading.jpg
   ├── library-digital.jpg
   ├── library-books.jpg
   ├── library-students.jpg
   ├── library-study.jpg
   └── library-section.jpg
========================================================= */

const libraryImages = {
  hero: "/images/library/library-hero.jpg",
  main: "/images/library/library-main.jpg",
  reading: "/images/library/library-reading.jpg",
  digital: "/images/library/library-digital.jpg",
  books: "/images/library/library-books.jpg",
  students: "/images/library/library-students.jpg",
  study: "/images/library/library-study.jpg",
  section: "/images/library/library-section.jpg",
};

/* =========================================================
   LIBRARY SERVICES
========================================================= */

const services = [
  {
    icon: BookOpen,
    title: "Textbooks & Reference Books",
    text: "Books for different disciplines, subjects and academic requirements.",
  },
  {
    icon: FileText,
    title: "Previous Year Papers",
    text: "Access previous year question papers to understand exam patterns.",
  },
  {
    icon: Newspaper,
    title: "Newspapers & Magazines",
    text: "Stay updated with national, educational and current affairs.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    text: "High-speed internet access for academic research and learning.",
  },
  {
    icon: Users,
    title: "Reading Space",
    text: "A peaceful and comfortable environment for focused study.",
  },
];

/* =========================================================
   QUESTION PAPER COURSES
========================================================= */

const questionPapers = [
  {
    icon: GraduationCap,
    title: "B.A.",
  },
  {
    icon: BookOpen,
    title: "B.Sc.",
  },
  {
    icon: BookMarked,
    title: "B.Com.",
  },
  {
    icon: Laptop,
    title: "BCA",
  },
  {
    icon: Monitor,
    title: "B.Sc. (CS)",
  },
  {
    icon: BookOpen,
    title: "B.A. (English)",
  },
];

/* =========================================================
   NEWSPAPERS
   Replace/add links whenever required.
========================================================= */

const newspapers = [
  {
    name: "Dainik Bhaskar",
    subtitle: "Hindi",
    logo: "दैनिक भास्कर",
    url: "https://www.bhaskar.com/",
  },
  {
    name: "Times of India",
    subtitle: "English",
    logo: "THE TIMES OF INDIA",
    url: "https://timesofindia.indiatimes.com/",
  },
  {
    name: "Hindustan Times",
    subtitle: "English",
    logo: "Hindustan Times",
    url: "https://www.hindustantimes.com/",
  },
  {
    name: "The Indian Express",
    subtitle: "English",
    logo: "THE INDIAN EXPRESS",
    url: "https://indianexpress.com/",
  },
  {
    name: "Amar Ujala",
    subtitle: "Hindi",
    logo: "अमर उजाला",
    url: "https://www.amarujala.com/",
  },
  {
    name: "The Hindu",
    subtitle: "English",
    logo: "THE HINDU",
    url: "https://www.thehindu.com/",
  },
  {
    name: "Rajasthan Patrika",
    subtitle: "Hindi",
    logo: "राजस्थान पत्रिका",
    url: "https://www.patrika.com/",
  },
  {
    name: "Business Standard",
    subtitle: "English",
    logo: "BS",
    url: "https://www.business-standard.com/",
  },
  {
    name: "The Economic Times",
    subtitle: "English",
    logo: "ET",
    url: "https://economictimes.indiatimes.com/",
  },
  {
    name: "India Today",
    subtitle: "English",
    logo: "INDIA TODAY",
    url: "https://www.indiatoday.in/",
  },
  {
    name: "The Tribune",
    subtitle: "English",
    logo: "The Tribune",
    url: "https://www.tribuneindia.com/",
  },
  {
    name: "Mint",
    subtitle: "English",
    logo: "mint",
    url: "https://www.livemint.com/",
  },
];

/* =========================================================
   EXTRA FACILITIES
========================================================= */

const extraFacilities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    text: "Internet connectivity for research, online learning and academic resources.",
  },
  {
    icon: Monitor,
    title: "Digital Resources",
    text: "Access digital learning material and online academic resources.",
  },
  {
    icon: Search,
    title: "Research Support",
    text: "A suitable environment for assignments, projects and academic research.",
  },
  {
    icon: Clock3,
    title: "Quiet Study Environment",
    text: "A peaceful environment designed for focused study.",
  },
  {
    icon: Coffee,
    title: "Comfortable Space",
    text: "Clean, comfortable and student-friendly reading areas.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    text: "A disciplined and secure environment for students.",
  },
];

/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  {
    image: libraryImages.section,
    title: "Library Section",
    icon: LibraryIcon,
  },
  {
    image: libraryImages.reading,
    title: "Reading Area",
    icon: BookOpen,
  },
  {
    image: libraryImages.digital,
    title: "Digital Section",
    icon: Monitor,
  },
  {
    image: libraryImages.books,
    title: "Book Collection",
    icon: BookMarked,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const Library = () => {
  return (
    <div className="library-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="library-hero">

        <div className="library-hero-left">

          <div className="library-hero-watermark">
            <LibraryIcon size={170} strokeWidth={1} />
          </div>

          <div className="library-hero-content">

            <div className="library-kicker">
              <LibraryIcon size={22} />
              <span>FACILITIES & LIBRARIES</span>
            </div>

            <h1>
              Library.
              <span>Knowledge</span>
              <small>for a Brighter Future.</small>
            </h1>

            <p>
              Our well-equipped library is a hub of knowledge, resources
              and learning. We provide a peaceful and comfortable
              environment for students to study, research and grow
              academically and personally.
            </p>

            <div className="library-hero-buttons">

              <a
                href="#library-resources"
                className="library-primary-btn"
              >
                Explore Library Resources
                <ArrowRight size={18} />
              </a>

              <a
                href="#library-gallery"
                className="library-outline-btn"
              >
                View Gallery
              </a>

            </div>

            <div className="library-hero-features">

              <div>
                <BookOpen size={30} />
                <span>
                  Rich Collection
                  <b>of Books</b>
                </span>
              </div>

              <div>
                <Newspaper size={30} />
                <span>
                  Daily News
                  <b>& Magazines</b>
                </span>
              </div>

              <div>
                <Wifi size={30} />
                <span>
                  Free Wi-Fi
                  <b>(High Speed)</b>
                </span>
              </div>

            </div>

          </div>
        </div>

        <div className="library-hero-image">
          <img
            src={libraryImages.hero}
            alt="Yaduvanshi Degree College Library"
          />

          <div className="library-image-label">
            <LibraryIcon size={20} />
            <span>Well Equipped Library</span>
          </div>
        </div>

        {/* curved bottom */}
        <div className="library-wave">
          <svg
            viewBox="0 0 1536 180"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M0,95
                C180,155 350,165 540,105
                C760,38 950,60 1140,95
                C1300,124 1410,110 1536,35
                L1536,180
                L0,180
                Z
              "
              fill="#fffdf9"
            />

            <path
              d="
                M0,88
                C180,148 350,158 540,98
                C760,31 950,53 1140,88
                C1300,117 1410,103 1536,28
              "
              fill="none"
              stroke="#ff7600"
              strokeWidth="5"
            />
          </svg>
        </div>

      </section>


      {/* =====================================================
          ABOUT LIBRARY
      ===================================================== */}

      <section
        id="library-resources"
        className="library-about section-container"
      >

        <div className="library-about-text">

          <div className="section-label">
            <span></span>
            ABOUT OUR LIBRARY
          </div>

          <h2>
            A Gateway to
            <em>Success</em>
          </h2>

          <p>
            The college library is designed to support your academic
            journey with a wide range of books, reference materials,
            digital resources and current newspapers & magazines.
            It provides a quiet and well-maintained space for focused
            study and research.
          </p>

        </div>

        <div className="library-services-grid">

          {services.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                className="library-service-card"
                key={index}
              >
                <div className="service-icon">
                  <Icon size={31} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          PREVIOUS YEAR QUESTION PAPERS
      ===================================================== */}

      <section className="library-question-section">

        <div className="section-container">

          <div className="question-layout">

            <div className="question-text">

              <div className="section-label">
                <span></span>
                PREVIOUS YEAR QUESTION PAPERS
              </div>

              <h2>
                Prepare Better,
                <em>Score Higher</em>
              </h2>

              <p>
                Access previous year question papers of your course
                to understand the exam pattern, identify important
                topics and improve your preparation.
              </p>

              <button
                className="library-orange-btn"
                type="button"
                onClick={() =>
                  document
                    .getElementById("question-paper-list")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Question Papers
                <ArrowRight size={17} />
              </button>

            </div>


            <div
              id="question-paper-list"
              className="question-course-grid"
            >

              {questionPapers.map((item, index) => {

                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    to={`/library/question-papers/${item.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    className="question-course-card"
                  >
                    <Icon size={31} />

                    <span>{item.title}</span>

                    <small>
                      View Papers
                      <ArrowRight size={13} />
                    </small>
                  </Link>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSPAPERS
      ===================================================== */}

      <section className="newspaper-section">

        <div className="section-container">

          <div className="newspaper-heading">

            <div className="newspaper-heading-text">

              <div className="section-label">
                <span></span>
                NEWSPAPERS & MAGAZINES
              </div>

              <h2>
                Stay Informed,
                <em>Stay Ahead</em>
              </h2>

              <p>
                Our library provides access to leading newspapers
                and magazines in print and digital format, so you
                can stay updated with national and global news,
                current affairs and more.
              </p>

              <a
                href="#newspapers"
                className="library-outline-dark-btn"
              >
                Read News Online
                <ArrowRight size={17} />
              </a>

            </div>

            <div className="newspaper-note">

              <Globe2 size={22} />

              <span>
                Click on any newspaper to read its
                latest edition online.
              </span>

            </div>

          </div>


          <div
            id="newspapers"
            className="newspaper-grid"
          >

            {newspapers.map((paper, index) => (

              <a
                key={index}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="newspaper-card"
                title={`Read ${paper.name} online`}
              >

                <div className="newspaper-logo">
                  {paper.logo}
                </div>

                <strong>{paper.name}</strong>

                <span>{paper.subtitle}</span>

                <div className="newspaper-open">
                  Read Online
                  <ExternalLink size={13} />
                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ADDITIONAL LIBRARY FACILITIES
      ===================================================== */}

      <section className="library-facilities">

        <div className="section-container">

          <div className="facility-heading">

            <div className="section-label">
              <span></span>
              LIBRARY SERVICES
            </div>

            <h2>
              Everything You Need
              <em>to Study Better</em>
            </h2>

            <p>
              A student-friendly academic environment with
              resources and services designed to make learning
              easier and more comfortable.
            </p>

          </div>


          <div className="extra-facilities-grid">

            {extraFacilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  className="extra-facility-card"
                  key={index}
                >

                  <div className="extra-icon">
                    <Icon size={29} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL LIBRARY / WIFI
      ===================================================== */}

      <section className="digital-library-section">

        <div className="section-container">

          <div className="digital-library-inner">

            <div className="digital-icon">
              <Laptop size={52} />
            </div>

            <div className="digital-text">

              <div className="section-label light">
                <span></span>
                DIGITAL LEARNING
              </div>

              <h2>
                Learn Beyond
                <em>Books.</em>
              </h2>

              <p>
                Use the library's digital facilities for online
                research, academic resources, e-learning,
                assignments and project work.
              </p>

            </div>

            <div className="digital-features">

              <div>
                <Wifi size={22} />
                <span>Free Wi-Fi</span>
              </div>

              <div>
                <Database size={22} />
                <span>Digital Resources</span>
              </div>

              <div>
                <Smartphone size={22} />
                <span>Online Learning</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIBRARY GALLERY
      ===================================================== */}

      <section
        id="library-gallery"
        className="library-gallery-section"
      >

        <div className="section-container">

          <div className="gallery-layout">

            <div className="gallery-intro">

              <div className="section-label">
                <span></span>
                LIBRARY GALLERY
              </div>

              <h2>
                A Perfect Space
                <em>for Learning</em>
              </h2>

              <p>
                Explore our library facilities, reading areas,
                digital section and book collection through
                photographs.
              </p>

              <button
                className="library-outline-dark-btn"
                type="button"
              >
                View More Photos
                <ArrowRight size={17} />
              </button>

            </div>


            <div className="library-gallery-grid">

              {gallery.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    className="gallery-card"
                    key={index}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="gallery-caption">

                      <Icon size={17} />

                      <span>{item.title}</span>

                    </div>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMISSION CTA
      ===================================================== */}

      <section className="library-admission">

        <div className="section-container">

          <div className="library-admission-inner">

            <div className="admission-icon">
              <BookOpen size={48} />
            </div>

            <div className="admission-content">

              <div className="section-label light">
                <span></span>
                LIBRARY & LEARNING
              </div>

              <h2>
                Knowledge
                <em>Empowers You</em>
              </h2>

              <p>
                Use our library. Explore. Learn. Grow.
                Build a stronger academic future at
                Yaduvanshi Degree College.
              </p>

            </div>

            <Link
              to="/admission/online-admission"
              className="library-admission-btn"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PAGE CSS
      ===================================================== */}

      <style>{`

        /* ===============================================
           GLOBAL
        =============================================== */

        .library-page {
          --navy: #062452;
          --navy-dark: #031a3a;
          --orange: #ff7600;
          --cream: #fffdf9;
          --cream-dark: #f8f1e8;
          --text: #123a66;
          --muted: #526d89;
          --white: #ffffff;

          width: 100%;
          overflow: hidden;
          background: var(--cream);
          color: var(--text);
          font-family: "DM Sans", Arial, sans-serif;
        }

        .section-container {
          width: min(1400px, 92%);
          margin: 0 auto;
        }


        /* ===============================================
           HERO
        =============================================== */

        .library-hero {
          position: relative;
          min-height: 540px;
          display: flex;
          background: var(--navy);
          overflow: hidden;
        }

        .library-hero-left {
          position: relative;
          width: 54%;
          min-height: 540px;
          z-index: 3;
          background:
            linear-gradient(
              135deg,
              #031a3a 0%,
              #062452 58%,
              #07366b 100%
            );
          color: white;
        }

        .library-hero-content {
          position: relative;
          z-index: 3;
          width: min(620px, 88%);
          margin-left: auto;
          margin-right: 40px;
          padding-top: 58px;
          padding-bottom: 105px;
        }

        .library-hero-watermark {
          position: absolute;
          right: 30px;
          top: 65px;
          opacity: .09;
          color: #3c87c8;
          pointer-events: none;
        }

        .library-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--orange);
          font-weight: 800;
          font-size: 15px;
          letter-spacing: .4px;
          margin-bottom: 14px;
        }

        .library-hero h1 {
          margin: 0;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(50px, 5vw, 76px);
          line-height: .95;
          letter-spacing: -2px;
        }

        .library-hero h1 span {
          display: block;
          color: var(--orange);
        }

        .library-hero h1 small {
          display: block;
          font-size: .48em;
          line-height: 1.15;
          margin-top: 12px;
          letter-spacing: -.5px;
        }

        .library-hero p {
          max-width: 590px;
          margin: 22px 0 22px;
          color: rgba(255,255,255,.91);
          font-size: 16px;
          line-height: 1.65;
        }

        .library-hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .library-primary-btn,
        .library-outline-btn,
        .library-orange-btn,
        .library-outline-dark-btn,
        .library-admission-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          text-decoration: none;
          cursor: pointer;
          border-radius: 30px;
          font-weight: 800;
          transition: .25s ease;
        }

        .library-primary-btn {
          padding: 13px 22px;
          color: white;
          background: var(--orange);
          border: 1px solid var(--orange);
        }

        .library-primary-btn:hover {
          background: #e96500;
          transform: translateY(-2px);
        }

        .library-outline-btn {
          padding: 12px 23px;
          color: white;
          border: 1.5px solid white;
          background: transparent;
        }

        .library-outline-btn:hover {
          color: var(--navy);
          background: white;
        }

        .library-hero-features {
          display: flex;
          gap: 38px;
          margin-top: 32px;
        }

        .library-hero-features > div {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--orange);
        }

        .library-hero-features span {
          color: white;
          font-size: 13px;
          line-height: 1.25;
        }

        .library-hero-features b {
          display: block;
          font-weight: 600;
        }

        .library-hero-image {
          position: absolute;
          right: 0;
          top: 0;
          width: 51%;
          height: 540px;
          z-index: 2;
          overflow: hidden;
          border-bottom-left-radius: 150px;
        }

        .library-hero-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .library-image-label {
          position: absolute;
          right: 30px;
          bottom: 72px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 18px;
          color: white;
          background: var(--orange);
          border-radius: 30px;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(0,0,0,.2);
        }

        .library-wave {
          position: absolute;
          z-index: 10;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 115px;
          pointer-events: none;
        }

        .library-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }


        /* ===============================================
           SECTION LABEL
        =============================================== */

        .section-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--navy);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .3px;
          margin-bottom: 10px;
        }

        .section-label span {
          width: 24px;
          height: 3px;
          background: var(--orange);
          display: block;
        }

        .section-label.light {
          color: white;
        }


        /* ===============================================
           ABOUT
        =============================================== */

        .library-about {
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 34px;
          padding-top: 48px;
          padding-bottom: 52px;
        }

        .library-about-text h2,
        .question-text h2,
        .newspaper-heading-text h2,
        .facility-heading h2,
        .gallery-intro h2,
        .digital-text h2,
        .admission-content h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: var(--navy);
          font-size: clamp(31px, 3vw, 44px);
          line-height: 1.02;
        }

        .library-about-text h2 em,
        .question-text h2 em,
        .newspaper-heading-text h2 em,
        .facility-heading h2 em,
        .gallery-intro h2 em,
        .digital-text h2 em,
        .admission-content h2 em {
          display: block;
          color: var(--orange);
          font-style: normal;
        }

        .library-about-text p,
        .question-text p,
        .newspaper-heading-text p,
        .facility-heading p,
        .gallery-intro p,
        .digital-text p,
        .admission-content p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .library-services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 13px;
        }

        .library-service-card {
          background: white;
          border: 1px solid #e9eef3;
          border-radius: 11px;
          padding: 19px 13px;
          text-align: center;
          box-shadow: 0 7px 22px rgba(15,48,81,.08);
          transition: .25s ease;
        }

        .library-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(15,48,81,.12);
        }

        .service-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          background: #fff8ef;
          border-radius: 50%;
        }

        .library-service-card h3 {
          margin: 7px 0;
          color: var(--navy);
          font-size: 14px;
          line-height: 1.25;
        }

        .library-service-card p {
          margin: 0;
          color: #617991;
          font-size: 11px;
          line-height: 1.45;
        }


        /* ===============================================
           QUESTION PAPERS
        =============================================== */

        .library-question-section {
          background: linear-gradient(
            135deg,
            #f1f8fd,
            #edf7ff
          );
          border-top: 1px solid #e4edf4;
          border-bottom: 1px solid #e4edf4;
          padding: 38px 0;
        }

        .question-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 38px;
          align-items: center;
        }

        .library-orange-btn {
          border: 0;
          padding: 12px 20px;
          color: white;
          background: var(--orange);
          font-size: 13px;
        }

        .library-orange-btn:hover {
          transform: translateY(-2px);
          background: #e96700;
        }

        .question-course-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .question-course-card {
          min-height: 115px;
          padding: 17px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: var(--navy);
          background: white;
          border: 1px solid #e5edf5;
          border-radius: 10px;
          box-shadow: 0 7px 20px rgba(0,48,90,.07);
          transition: .25s ease;
        }

        .question-course-card svg {
          color: var(--navy);
          margin-bottom: 9px;
        }

        .question-course-card span {
          font-size: 13px;
          font-weight: 800;
        }

        .question-course-card small {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 6px;
          color: var(--orange);
          font-size: 10px;
          font-weight: 700;
        }

        .question-course-card:hover {
          transform: translateY(-4px);
          border-color: var(--orange);
        }


        /* ===============================================
           NEWSPAPERS
        =============================================== */

        .newspaper-section {
          padding: 52px 0;
          background: var(--cream);
        }

        .newspaper-heading {
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 30px;
          align-items: end;
        }

        .newspaper-note {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 3px;
          color: var(--muted);
          font-size: 12px;
        }

        .newspaper-note svg {
          color: var(--navy);
          flex-shrink: 0;
        }

        .library-outline-dark-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          color: var(--navy);
          background: white;
          border: 1.5px solid var(--navy);
          border-radius: 25px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: .25s ease;
        }

        .library-outline-dark-btn:hover {
          color: white;
          background: var(--navy);
        }

        .newspaper-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .newspaper-card {
          min-height: 110px;
          padding: 13px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          text-decoration: none;
          background: white;
          border: 1px solid #e9edf0;
          border-radius: 10px;
          box-shadow: 0 5px 18px rgba(0,0,0,.06);
          transition: .25s ease;
        }

        .newspaper-card:hover {
          transform: translateY(-5px);
          border-color: var(--orange);
          box-shadow: 0 12px 27px rgba(0,0,0,.1);
        }

        .newspaper-logo {
          min-height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #172d47;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 900;
        }

        .newspaper-card strong {
          margin-top: 6px;
          color: var(--navy);
          font-size: 11px;
        }

        .newspaper-card > span {
          color: #7990a6;
          font-size: 9px;
          margin-top: 2px;
        }

        .newspaper-open {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 7px;
          color: var(--orange);
          font-size: 9px;
          font-weight: 800;
        }


        /* ===============================================
           FACILITIES
        =============================================== */

        .library-facilities {
          padding: 48px 0;
          background:
            linear-gradient(
              180deg,
              #f8f1e8 0%,
              #fffdf9 100%
            );
        }

        .facility-heading {
          max-width: 610px;
          margin-bottom: 25px;
        }

        .extra-facilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .extra-facility-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          background: white;
          border: 1px solid #e7edf1;
          border-radius: 11px;
          box-shadow: 0 7px 20px rgba(0,0,0,.05);
        }

        .extra-icon {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          background: #fff7ec;
          border-radius: 10px;
        }

        .extra-facility-card h3 {
          margin: 1px 0 5px;
          color: var(--navy);
          font-size: 14px;
        }

        .extra-facility-card p {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.5;
        }


        /* ===============================================
           DIGITAL LIBRARY
        =============================================== */

        .digital-library-section {
          padding: 35px 0;
          background: var(--navy);
        }

        .digital-library-inner {
          min-height: 190px;
          display: grid;
          grid-template-columns: 90px 1fr 320px;
          align-items: center;
          gap: 30px;
        }

        .digital-icon {
          width: 82px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 50%;
          background: rgba(255,255,255,.04);
        }

        .digital-text h2 {
          color: white;
        }

        .digital-text p {
          max-width: 650px;
          margin-bottom: 0;
          color: rgba(255,255,255,.8);
        }

        .digital-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .digital-features div {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 13px;
          color: white;
          background: rgba(255,255,255,.07);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
        }

        .digital-features svg {
          color: var(--orange);
        }


        /* ===============================================
           GALLERY
        =============================================== */

        .library-gallery-section {
          padding: 55px 0;
          background: var(--cream);
        }

        .gallery-layout {
          display: grid;
          grid-template-columns: 285px 1fr;
          gap: 35px;
          align-items: center;
        }

        .library-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .gallery-card {
          position: relative;
          height: 195px;
          overflow: hidden;
          border-radius: 10px;
          background: #ddd;
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.06);
        }

        .gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px 13px;
          color: white;
          background: linear-gradient(
            transparent,
            rgba(0,20,50,.95)
          );
          font-size: 11px;
          font-weight: 800;
        }

        .gallery-caption svg {
          color: white;
        }


        /* ===============================================
           ADMISSION
        =============================================== */

        .library-admission {
          background:
            linear-gradient(
              90deg,
              #062452,
              #07386c
            );
          color: white;
          padding: 28px 0;
        }

        .library-admission-inner {
          min-height: 125px;
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          gap: 22px;
        }

        .admission-icon {
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 50%;
          background: rgba(255,255,255,.05);
        }

        .admission-content h2 {
          color: white;
          font-size: 35px;
        }

        .admission-content p {
          max-width: 600px;
          margin: 8px 0 0;
          color: rgba(255,255,255,.78);
        }

        .library-admission-btn {
          padding: 13px 22px;
          color: white;
          background: var(--orange);
          border: 1px solid var(--orange);
        }

        .library-admission-btn:hover {
          background: #e96700;
          transform: translateY(-2px);
        }


        /* ===============================================
           RESPONSIVE
        =============================================== */

        @media (max-width: 1150px) {

          .library-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .question-course-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .newspaper-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .library-about,
          .question-layout,
          .newspaper-heading,
          .gallery-layout {
            grid-template-columns: 1fr;
          }

          .library-about-text {
            max-width: 620px;
          }

          .newspaper-note {
            margin-top: 10px;
          }

        }


        @media (max-width: 900px) {

          .library-hero {
            min-height: 760px;
            display: block;
          }

          .library-hero-left {
            width: 100%;
            min-height: 520px;
          }

          .library-hero-content {
            width: 88%;
            margin: 0 auto;
            padding-top: 50px;
          }

          .library-hero-image {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 310px;
            border-bottom-left-radius: 0;
          }

          .library-image-label {
            bottom: 42px;
            right: 20px;
          }

          .library-wave {
            height: 85px;
          }

          .extra-facilities-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .digital-library-inner {
            grid-template-columns: 70px 1fr;
          }

          .digital-features {
            grid-column: 2;
            flex-direction: row;
            flex-wrap: wrap;
          }

        }


        @media (max-width: 650px) {

          .section-container {
            width: 90%;
          }

          .library-hero {
            min-height: 730px;
          }

          .library-hero-left {
            min-height: 500px;
          }

          .library-hero h1 {
            font-size: 48px;
          }

          .library-hero p {
            font-size: 14px;
          }

          .library-hero-features {
            gap: 14px;
            flex-wrap: wrap;
          }

          .library-hero-features > div {
            min-width: 120px;
          }

          .library-hero-image {
            height: 285px;
          }

          .library-image-label {
            font-size: 11px;
            padding: 9px 13px;
          }

          .library-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .question-course-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .newspaper-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .extra-facilities-grid {
            grid-template-columns: 1fr;
          }

          .library-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-card {
            height: 160px;
          }

          .digital-library-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .digital-icon {
            margin: auto;
          }

          .digital-features {
            grid-column: auto;
            justify-content: center;
          }

          .library-admission-inner {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
          }

          .admission-content p {
            margin-left: auto;
            margin-right: auto;
          }

        }


        @media (max-width: 430px) {

          .library-services-grid,
          .question-course-grid,
          .newspaper-grid,
          .library-gallery-grid {
            grid-template-columns: 1fr;
          }

          .library-hero h1 {
            font-size: 43px;
          }

          .library-hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .library-primary-btn,
          .library-outline-btn {
            width: 100%;
          }

          .library-wave {
            height: 65px;
          }

        }

      `}</style>

    </div>
  );
};

export default Library;