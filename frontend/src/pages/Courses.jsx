import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  Search,
  Clock3,
  Users,
} from "lucide-react";

const programs = [
  {
    name: "B.A.",
    full: "Bachelor of Arts",
    category: "Undergraduate",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    subjects: "Humanities, languages and social sciences",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "B.Com.",
    full: "Bachelor of Commerce",
    category: "Undergraduate",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    subjects: "Accounting, business, finance and economics",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "B.Sc.",
    full: "Bachelor of Science",
    category: "Undergraduate",
    duration: "3 Years",
    eligibility: "10+2 with relevant subjects",
    subjects: "Scientific concepts, laboratory work and analysis",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "BCA",
    full: "Bachelor of Computer Applications",
    category: "Undergraduate",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    subjects: "Programming, databases, web and computer applications",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "BBA",
    full: "Bachelor of Business Administration",
    category: "Undergraduate",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    subjects: "Management, marketing, finance and entrepreneurship",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "B.Ed.",
    full: "Bachelor of Education",
    category: "Undergraduate",
    duration: "2 Years",
    eligibility: "As per applicable university norms",
    subjects: "Education, teaching methodology and practical training",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "B.Tech.",
    full: "Bachelor of Technology",
    category: "Engineering",
    duration: "4 Years",
    eligibility: "10+2 with relevant subjects",
    subjects: "Engineering, technology, practical and project-based learning",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "CSE",
    full: "Computer Science & Engineering",
    category: "Engineering",
    duration: "4 Years",
    eligibility: "10+2 with Physics and Mathematics",
    subjects: "Programming, algorithms, databases, AI and software",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "CSE AI & ML",
    full: "Computer Science & Engineering – AI & ML",
    category: "Engineering",
    duration: "4 Years",
    eligibility: "10+2 with relevant subjects",
    subjects: "Artificial intelligence, machine learning and computing",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "M.A.",
    full: "Master of Arts",
    category: "Postgraduate",
    duration: "2 Years",
    eligibility: "Relevant bachelor's degree",
    subjects: "Advanced study in humanities and social sciences",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "M.Com.",
    full: "Master of Commerce",
    category: "Postgraduate",
    duration: "2 Years",
    eligibility: "B.Com. or equivalent",
    subjects: "Advanced accounting, finance, commerce and management",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "M.Sc.",
    full: "Master of Science",
    category: "Postgraduate",
    duration: "2 Years",
    eligibility: "Relevant bachelor's degree",
    subjects: "Advanced scientific study, research and laboratory work",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "M.Tech.",
    full: "Master of Technology",
    category: "Postgraduate",
    duration: "2 Years",
    eligibility: "Relevant engineering degree",
    subjects: "Advanced engineering, technology and research",
    image:
      "https://images.unsplash.com/photo-1581092918484-8313b9b4d7d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "MBA",
    full: "Master of Business Administration",
    category: "Postgraduate",
    duration: "2 Years",
    eligibility: "Bachelor's degree",
    subjects: "Management, finance, marketing, HR and strategy",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Polytechnic",
    full: "Diploma Engineering Programmes",
    category: "Diploma",
    duration: "3 Years",
    eligibility: "10th or equivalent",
    subjects: "Engineering fundamentals, practical training and projects",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = [
  "All",
  "Undergraduate",
  "Engineering",
  "Postgraduate",
  "Diploma",
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesCategory =
        activeCategory === "All" ||
        program.category === activeCategory;

      const text = `
        ${program.name}
        ${program.full}
        ${program.category}
        ${program.subjects}
      `.toLowerCase();

      return (
        matchesCategory &&
        text.includes(search.toLowerCase())
      );
    });
  }, [activeCategory, search]);

  return (
    <>
      <style>{`
        .programs-page {
          background: #f8fafc;
          min-height: 100vh;
        }

        /* HERO */

        .programs-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(212,175,55,.18),
              transparent 0%
            ),
            linear-gradient(
              120deg,
              #072656,
              #072656
            );
          color: white;
          padding: 90px 0 120px;
        }

        .programs-hero::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
          right: -120px;
          top: -220px;
        }

        .programs-hero::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border: 1px solid rgba(212,175,55,.18);
          border-radius: 50%;
          right: 180px;
          top: 100px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 30px;
          background: rgba(212,175,55,.12);
          border: 1px solid rgba(212,175,55,.3);
          color: #e3bd42;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hero-title {
          margin-top: 20px;
          max-width: 800px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.05;
        }

        .hero-title span {
          color: #d4af37;
        }

        .hero-description {
          max-width: 690px;
          margin-top: 18px;
          color: rgba(255,255,255,.75);
          font-size: 17px;
          line-height: 1.8;
        }

        .hero-wave,
        .hero-orange-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 145px;
          z-index: 5;
          pointer-events: none;
        }

        .hero-orange-wave {
          z-index: 6;
        }

        /* MAIN */

        .programs-main {
          padding: 30px 0 90px;
        }

        .programs-heading {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 35px;
        }

        .programs-heading small {
          color: #c48a00;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 12px;
        }

        .programs-heading h2 {
          margin: 8px 0;
          color: #0a2342;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
        }

        .programs-heading p {
          color: #687386;
          line-height: 1.7;
          font-size: 14px;
        }

        /* TOOLBAR */

        .program-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
        }

        .category-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .category-tab {
          border: 1px solid #dfe4ea;
          background: white;
          color: #566273;
          padding: 9px 15px;
          border-radius: 30px;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          transition: .25s;
        }

        .category-tab:hover {
          border-color: #d4af37;
          color: #9b7500;
        }

        .category-tab.active {
          background: #0a2342;
          border-color: #0a2342;
          color: white;
        }

        .search-wrapper {
          position: relative;
          width: 250px;
          flex-shrink: 0;
        }

        .search-wrapper svg {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #8b95a3;
        }

        .search-wrapper input {
          width: 100%;
          height: 42px;
          border: 1px solid #dfe4ea;
          background: white;
          border-radius: 10px;
          padding: 0 12px 0 38px;
          outline: none;
          font-family: inherit;
        }

        .search-wrapper input:focus {
          border-color: #d4af37;
          box-shadow: 0 0 0 3px rgba(212,175,55,.12);
        }

        /* PROGRAM GRID */

        .program-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .program-card {
          overflow: hidden;
          border-radius: 18px;
          background: white;
          border: 1px solid #e4e8ed;
          box-shadow: 0 8px 28px rgba(22,35,50,.06);
          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .program-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 42px rgba(22,35,50,.12);
        }

        .program-image {
          position: relative;
          height: 190px;
          overflow: hidden;
        }

        .program-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .program-card:hover .program-image img {
          transform: scale(1.06);
        }

        .program-category {
          position: absolute;
          left: 12px;
          top: 12px;
          padding: 6px 10px;
          border-radius: 20px;
          background: rgba(6,29,58,.9);
          color: white;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .6px;
        }

        .program-body {
          padding: 19px;
        }

        .program-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .program-name {
          margin: 0;
          color: #0a2342;
          font-size: 25px;
          font-weight: 800;
        }

        .program-full {
          margin-top: 3px;
          color: #bd8c08;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.4;
        }

        .program-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #fff7dc;
          color: #b88900;
        }

        .program-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 17px;
        }

        .meta-box {
          padding: 10px;
          border-radius: 9px;
          background: #f7f9fb;
        }

        .meta-box span {
          display: block;
          color: #8a94a2;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: .5px;
          font-weight: 800;
        }

        .meta-box strong {
          display: block;
          margin-top: 3px;
          color: #293548;
          font-size: 10px;
          line-height: 1.35;
        }

        .program-subjects {
          min-height: 62px;
          margin-top: 14px;
          color: #687386;
          font-size: 11px;
          line-height: 1.6;
        }

        .program-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding-top: 12px;
          border-top: 1px solid #edf0f3;
          width: 100%;
          color: #0a2342;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        .program-link svg {
          color: #d4af37;
          transition: transform .2s;
        }

        .program-link:hover svg {
          transform: translateX(4px);
        }

        /* EMPTY */

        .empty-state {
          grid-column: 1 / -1;
          padding: 60px 20px;
          text-align: center;
          border: 1px dashed #ccd3dc;
          border-radius: 16px;
          background: white;
        }

        .empty-state h3 {
          margin: 12px 0 5px;
          color: #0a2342;
        }

        .empty-state p {
          color: #778292;
          font-size: 13px;
        }

        /* INFO */

        .important-box {
          margin-top: 45px;
          padding: 20px;
          border-left: 4px solid #d4af37;
          border-radius: 0 12px 12px 0;
          background: white;
          box-shadow: 0 7px 22px rgba(20,30,45,.05);
          color: #657184;
          font-size: 12px;
          line-height: 1.7;
        }

        .important-box strong {
          color: #0a2342;
        }

        /* CTA */

        .program-cta {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          margin-top: 35px;
          padding: 32px;
          border-radius: 18px;
          background: linear-gradient(120deg, #071f40, #0c3969);
          color: white;
        }

        .program-cta h2 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
        }

        .program-cta p {
          margin: 6px 0 0;
          color: rgba(255,255,255,.7);
          font-size: 12px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 9px;
          background: #d4af37;
          color: #091e38;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* RESPONSIVE */

        @media (max-width: 1150px) {
          .program-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 850px) {
          .program-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .search-wrapper {
            width: 100%;
          }

          .program-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .programs-hero {
            padding: 65px 0 105px;
          }

          .hero-title {
            font-size: 43px;
          }

          .program-grid {
            grid-template-columns: 1fr;
          }

          .program-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="programs-page">

        {/* =========================
            HERO
        ========================= */}

        <section className="programs-hero">
          <div className="container-wide hero-content">

            <div className="hero-kicker">
              <GraduationCap size={15} />
              Academic Excellence
            </div>

            <h1 className="hero-title">
              Our Academic <span>Programs</span>
            </h1>

            <p className="hero-description">
              Discover programmes designed to build knowledge,
              practical skills and professional confidence for
              your future.
            </p>

          </div>

          <svg
            className="hero-wave"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,100 C170,185 350,200 550,130 C760,55 940,70 1110,120 C1260,165 1360,135 1440,70 L1440,220 L0,220 Z"
              fill="#f8fafc"
            />
          </svg>

          <svg
            className="hero-orange-wave"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,91 C170,176 350,191 550,121 C760,46 940,61 1110,111 C1260,156 1360,126 1440,61"
              fill="none"
              stroke="#ff7600"
              strokeWidth="10"
            />
          </svg>
        </section>

        {/* =========================
            MAIN
        ========================= */}

        <main className="container-wide programs-main">

          <div className="programs-heading">
            <small>Explore Your Future</small>

            <h2>
              Find the Right Programme
            </h2>

            <p>
              Explore undergraduate, engineering, postgraduate
              and diploma programmes available through the
              Yaduvanshi academic environment.
            </p>
          </div>

          {/* TOOLBAR */}

          <div className="program-toolbar">

            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "category-tab active"
                      : "category-tab"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="search-wrapper">
              <Search size={16} />

              <input
                type="text"
                placeholder="Search programme..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

          </div>

          {/* PROGRAM CARDS */}

          <div className="program-grid">

            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <article
                  className="program-card"
                  key={program.name}
                >

                  <div className="program-image">

                    <img
                      src={program.image}
                      alt={program.full}
                      loading="lazy"
                    />

                    <span className="program-category">
                      {program.category}
                    </span>

                  </div>

                  <div className="program-body">

                    <div className="program-top">

                      <div>
                        <h2 className="program-name">
                          {program.name}
                        </h2>

                        <div className="program-full">
                          {program.full}
                        </div>
                      </div>

                      <div className="program-icon">
                        <BookOpenCheck size={19} />
                      </div>

                    </div>

                    <div className="program-meta">

                      <div className="meta-box">
                        <span>
                          <Clock3 size={9} />
                          Duration
                        </span>

                        <strong>
                          {program.duration}
                        </strong>
                      </div>

                      <div className="meta-box">
                        <span>
                          <Users size={9} />
                          Eligibility
                        </span>

                        <strong>
                          {program.eligibility}
                        </strong>
                      </div>

                    </div>

                    <p className="program-subjects">
                      <strong>Study areas:</strong>{" "}
                      {program.subjects}
                    </p>

                    <a
                      href="/contact"
                      className="program-link"
                    >
                      Enquire About Programme
                      <ArrowRight size={16} />
                    </a>

                  </div>

                </article>
              ))
            ) : (
              <div className="empty-state">

                <Search size={30} />

                <h3>
                  No programme found
                </h3>

                <p>
                  Try another programme name or category.
                </p>

              </div>
            )}

          </div>

          {/* IMPORTANT */}

          <div className="important-box">
            <strong>Important:</strong>{" "}
            Programme names, eligibility criteria, duration,
            curriculum, intake and admission dates should be
            verified against the college's current officially
            approved information before publication.
          </div>

          {/* CTA */}

          <section className="program-cta">

            <div>
              <h2>
                Find Your Path at Yaduvanshi
              </h2>

              <p>
                Explore your preferred programme and continue
                with the admission process.
              </p>
            </div>

            <a
              href="/admission/online-registration"
              className="cta-button"
            >
              Apply for Admission
              <ArrowRight size={16} />
            </a>

          </section>

        </main>
      </div>
    </>
  );
}