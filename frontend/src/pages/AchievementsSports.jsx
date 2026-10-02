import React, { useMemo, useState } from "react";
import {
  Trophy,
  CalendarDays,
  Medal,
  Users,
  Search,
  ChevronDown,
  ArrowRight,
  Award,
  Target,
} from "lucide-react";
import ManagedAchievements from "../components/ManagedAchievements";

const sportsAchievements = [
  {
    name: "Priya Sharma",
    sport: "Athletics",
    achievement: "Gold Medal - State Championship",
    year: "2026",
    position: "1st",
    image: "/images/sports/priya-sharma.jpg",
  },
  {
    name: "Rahul Verma",
    sport: "Cricket",
    achievement: "Best Batsman - Inter College",
    year: "2025",
    position: "2nd",
    image: "/images/sports/rahul-verma.jpg",
  },
  {
    name: "Sneha Patel",
    sport: "Table Tennis",
    achievement: "Bronze Medal - University Level",
    year: "2024",
    position: "3rd",
    image: "/images/sports/sneha-patel.jpg",
  },
  {
    name: "Aman Kumar",
    sport: "Badminton",
    achievement: "Gold Medal - State Level",
    year: "2023",
    position: "1st",
    image: "/images/sports/aman-kumar.jpg",
  },
];

const yearlyAchievements = [
  { year: "2026", count: "28 Achievers" },
  { year: "2025", count: "32 Achievers" },
  { year: "2024", count: "26 Achievers" },
  { year: "2023", count: "24 Achievers" },
  { year: "2022", count: "20 Achievers" },
  { year: "2021", count: "18 Achievers" },
  { year: "2020", count: "16 Achievers" },
  { year: "2019", count: "14 Achievers" },
  { year: "2018", count: "12 Achievers" },
  { year: "2017", count: "10 Achievers" },
  { year: "2016", count: "8 Achievers" },
  { year: "2015", count: "6 Achievers" },
];

const sports = [
  "All Sports",
  "Athletics",
  "Cricket",
  "Table Tennis",
  "Badminton",
  "Football",
  "Basketball",
];

const levels = [
  "All Levels",
  "State Level",
  "University Level",
  "Inter College",
  "National Level",
];

export default function AchievementsSports() {
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredAchievements = useMemo(() => {
    return sportsAchievements.filter((item) => {
      const searchMatch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.sport.toLowerCase().includes(search.toLowerCase());

      const sportMatch =
        selectedSport === "All Sports" ||
        item.sport === selectedSport;

      const yearMatch =
        selectedYear === "All Years" ||
        item.year === selectedYear;

      const levelMatch =
        selectedLevel === "All Levels" ||
        item.achievement.includes(selectedLevel);

      return searchMatch && sportMatch && yearMatch && levelMatch;
    });
  }, [search, selectedSport, selectedYear, selectedLevel]);

  return (
    <div className="sports-achievement-page">

      <style>{`

        /* =========================================================
           GLOBAL
        ========================================================= */

        * {
          box-sizing: border-box;
        }

        .sports-achievement-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #082d63;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .sports-achievement-page h1,
        .sports-achievement-page h2,
        .sports-achievement-page h3 {
          font-family: Georgia, "Times New Roman", serif;
        }

        .sports-container {
          width: min(94%, 1450px);
          margin: auto;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .sports-hero {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              #03295e 0%,
              #052f69 38%,
              rgba(5, 47, 105, 0.72) 58%,
              rgba(5, 47, 105, 0.18) 100%
            ),
            url("/images/sports/sports-hero.jpg") center / cover
              no-repeat;
        }

        .sports-hero::after {
          content: "";
          position: absolute;
          left: -5%;
          right: -5%;
          bottom: -70px;
          height: 130px;
          background: white;
          border-radius: 50% 50% 0 0 / 70% 70% 0 0;
          border-top: 7px solid #ff9d1c;
        }

        .sports-hero-content {
          position: relative;
          z-index: 2;
          padding: 55px 0 110px;
          width: min(94%, 1450px);
          margin: auto;
        }

        .sports-breadcrumb {
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          margin-bottom: 18px;
        }

        .sports-breadcrumb span {
          color: #ffad26;
        }

        .sports-label {
          color: #ffad26;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .sports-hero h1 {
          margin: 0;
          color: white;
          font-size: clamp(48px, 6vw, 76px);
          line-height: 0.95;
          font-weight: 700;
        }

        .sports-hero h1 span {
          color: #ffb52e;
        }

        .sports-hero-description {
          max-width: 570px;
          margin-top: 22px;
          color: white;
          font-size: 16px;
          line-height: 1.65;
        }

        .sports-hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .sports-btn {
          border: 1px solid #ffb52e;
          padding: 13px 24px;
          border-radius: 30px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s;
        }

        .sports-btn-primary {
          background: #ffb52e;
          color: #082d63;
        }

        .sports-btn-secondary {
          background: transparent;
          color: white;
        }

        .sports-btn:hover {
          transform: translateY(-2px);
        }

        /* =========================================================
           STATISTICS
        ========================================================= */

        .sports-stats {
          position: relative;
          z-index: 5;
          margin-top: -15px;
        }

        .sports-stats-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(8, 45, 99, 0.10);
          border: 1px solid #e5edf7;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 12px;
        }

        .sports-stat {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 14px;
          border-right: 1px solid #dce4ef;
        }

        .sports-stat:last-child {
          border-right: none;
        }

        .sports-stat-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffca57;
          color: #082d63;
        }

        .sports-stat-number {
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 700;
          color: #082d63;
        }

        .sports-stat-text {
          font-size: 12px;
          color: #31547e;
          margin-top: 2px;
        }

        /* =========================================================
           SECTION TITLE
        ========================================================= */

        .sports-section {
          padding: 65px 0 20px;
        }

        .sports-section-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .sports-section-small {
          color: #f28a00;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .sports-section-heading h2 {
          margin: 8px 0;
          font-size: 36px;
          color: #082d63;
        }

        .sports-section-heading p {
          max-width: 650px;
          margin: auto;
          color: #426080;
          font-size: 14px;
          line-height: 1.6;
        }

        /* =========================================================
           FILTERS
        ========================================================= */

        .sports-filters {
          background: #f8fbff;
          border: 1px solid #dceaf8;
          border-radius: 12px;
          padding: 10px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 10px;
          margin-bottom: 25px;
        }

        .sports-filter {
          position: relative;
        }

        .sports-filter input,
        .sports-filter select {
          width: 100%;
          height: 48px;
          border: 1px solid #d7e4f2;
          border-radius: 8px;
          background: white;
          padding: 0 42px;
          color: #082d63;
          outline: none;
          font-size: 13px;
        }

        .sports-filter select {
          padding-left: 15px;
          appearance: none;
          cursor: pointer;
        }

        .sports-filter svg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 14px;
          color: #174f8b;
          pointer-events: none;
        }

        .sports-select-arrow {
          position: absolute;
          right: 13px;
          left: auto !important;
        }

        /* =========================================================
           ACHIEVEMENT CARDS
        ========================================================= */

        .sports-achievement-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .sports-achievement-card {
          overflow: hidden;
          background: white;
          border-radius: 10px;
          border: 1px solid #dce8f4;
          box-shadow: 0 5px 18px rgba(8,45,99,0.08);
          transition: 0.3s;
        }

        .sports-achievement-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(8,45,99,0.14);
        }

        .sports-card-image {
          height: 185px;
          position: relative;
          overflow: hidden;
          background: #eaf1f8;
        }

        .sports-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .sports-position {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffbd31;
          color: #082d63;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 13px;
          box-shadow: 0 3px 10px rgba(0,0,0,.18);
        }

        .sports-position.second {
          background: #c8ced4;
        }

        .sports-position.third {
          background: #e69b63;
        }

        .sports-card-content {
          padding: 14px;
        }

        .sports-tag {
          display: inline-block;
          background: #0a4c91;
          color: white;
          padding: 4px 11px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          margin-top: -28px;
          position: relative;
        }

        .sports-card-content h3 {
          margin: 12px 0 8px;
          font-size: 21px;
          color: #082d63;
        }

        .sports-card-detail {
          display: flex;
          gap: 7px;
          align-items: center;
          color: #476688;
          font-size: 12px;
          margin: 7px 0;
        }

        .sports-card-detail svg {
          color: #0b4e91;
        }

        /* =========================================================
           JOURNEY
        ========================================================= */

        .sports-journey {
          padding: 55px 0;
        }

        .sports-journey-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 28px;
        }

        .sports-journey-title small {
          color: #f28a00;
          letter-spacing: 2px;
          font-weight: 800;
          font-size: 12px;
        }

        .sports-journey-title h2 {
          margin: 7px 0 0;
          font-size: 32px;
        }

        .sports-journey-description {
          max-width: 360px;
          border-left: 2px solid #d9e2ec;
          padding-left: 18px;
          color: #37618e;
          font-size: 13px;
          line-height: 1.6;
        }

        .sports-years-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 15px;
        }

        .sports-year-card {
          background: white;
          border: 1px solid #e0eaf4;
          border-radius: 10px;
          padding: 16px;
          min-height: 85px;
          box-shadow: 0 5px 15px rgba(8,45,99,0.05);
          position: relative;
          transition: .25s;
        }

        .sports-year-card:hover {
          border-color: #ffad22;
          transform: translateY(-3px);
        }

        .sports-year-top {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sports-year-icon {
          width: 32px;
          height: 32px;
          background: #082d63;
          border-radius: 7px;
          color: #ffbd31;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sports-year {
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 700;
        }

        .sports-year-count {
          margin-left: 42px;
          margin-top: 7px;
          font-size: 11px;
          color: #426080;
        }

        .sports-year-arrow {
          position: absolute;
          right: 13px;
          top: 20px;
          color: #f28a00;
        }

        /* =========================================================
           CTA
        ========================================================= */

        .sports-cta {
          position: relative;
          overflow: hidden;
          min-height: 135px;
          border-radius: 15px;
          margin: 10px 0 55px;
          padding: 25px 35px;
          background:
            linear-gradient(
              90deg,
              rgba(3,35,79,.98),
              rgba(3,53,104,.88)
            ),
            url("/images/sports/sports-banner.jpg") center / cover;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .sports-cta h2 {
          margin: 0 0 6px;
          font-size: 30px;
        }

        .sports-cta h2 span {
          color: #ffb62c;
        }

        .sports-cta p {
          margin: 0;
          font-size: 13px;
        }

        .sports-cta-button {
          white-space: nowrap;
          border: none;
          background: #ffb72d;
          color: #082d63;
          padding: 14px 24px;
          border-radius: 25px;
          font-weight: 800;
          cursor: pointer;
        }

        /* =========================================================
           FOOTER
        ========================================================= */

        .sports-footer {
          background: #032754;
          color: white;
          padding: 35px 0 20px;
        }

        .sports-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 35px;
          padding-bottom: 25px;
          border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .sports-footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sports-footer-logo-icon {
          width: 48px;
          height: 48px;
          border: 2px solid #ffb52e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffb52e;
        }

        .sports-footer-logo strong {
          font-family: Georgia, serif;
          font-size: 18px;
        }

        .sports-footer h4 {
          margin: 0 0 13px;
          color: #ffb52e;
          font-size: 14px;
        }

        .sports-footer a {
          display: block;
          color: #d9e7f5;
          text-decoration: none;
          font-size: 12px;
          margin: 8px 0;
        }

        .sports-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 18px;
          font-size: 11px;
          color: #c8d7e8;
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media (max-width: 1100px) {

          .sports-achievement-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sports-years-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .sports-filters {
            grid-template-columns: repeat(2, 1fr);
          }

          .sports-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 750px) {

          .sports-hero {
            min-height: 520px;
          }

          .sports-hero-content {
            padding-top: 35px;
          }

          .sports-hero h1 {
            font-size: 48px;
          }

          .sports-stats-card {
            grid-template-columns: repeat(2, 1fr);
          }

          .sports-stat:nth-child(2) {
            border-right: none;
          }

          .sports-stat:nth-child(-n+2) {
            border-bottom: 1px solid #dce4ef;
          }

          .sports-achievement-grid {
            grid-template-columns: 1fr;
          }

          .sports-years-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sports-journey-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .sports-filters {
            grid-template-columns: 1fr;
          }

          .sports-cta {
            flex-direction: column;
            align-items: flex-start;
          }

          .sports-footer-grid {
            grid-template-columns: 1fr;
          }

          .sports-footer-bottom {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {

          .sports-stats-card {
            grid-template-columns: 1fr;
          }

          .sports-stat {
            border-right: none !important;
            border-bottom: 1px solid #dce4ef;
          }

          .sports-stat:last-child {
            border-bottom: none;
          }

          .sports-years-grid {
            grid-template-columns: 1fr;
          }

          .sports-hero h1 {
            font-size: 42px;
          }
        }

      `}</style>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="sports-hero">

        <div className="sports-hero-content">

          <div className="sports-breadcrumb">
            Home &nbsp;›&nbsp; Achievements &nbsp;›&nbsp;
            <span>Sports Achievements</span>
          </div>

          <div className="sports-label">
            Achievements
          </div>

          <h1>
            Sports
            <br />
            <span>Achievements</span>
          </h1>

          <p className="sports-hero-description">
            Celebrating the spirit, discipline and determination of
            our students who have brought glory to Yaduvanshi
            Degree College through their outstanding performance
            in sports.
          </p>

          <div className="sports-hero-buttons">
            <button className="sports-btn sports-btn-primary">
              Explore Sports Achievers
              <ArrowRight
                size={15}
                style={{ marginLeft: 8, verticalAlign: "middle" }}
              />
            </button>

            <button className="sports-btn sports-btn-secondary">
              Explore Programs
            </button>
          </div>

        </div>

      </section>

      {/* =========================================================
          STATISTICS
      ========================================================= */}

      <section className="sports-stats">
        <div className="sports-container">

          <div className="sports-stats-card">

            <div className="sports-stat">
              <div className="sports-stat-icon">
                <Trophy size={24} />
              </div>

              <div>
                <div className="sports-stat-number">250+</div>
                <div className="sports-stat-text">
                  Sports Achievers
                </div>
              </div>
            </div>

            <div className="sports-stat">
              <div className="sports-stat-icon">
                <CalendarDays size={24} />
              </div>

              <div>
                <div className="sports-stat-number">12+</div>
                <div className="sports-stat-text">
                  Years of Excellence
                </div>
              </div>
            </div>

            <div className="sports-stat">
              <div className="sports-stat-icon">
                <Medal size={24} />
              </div>

              <div>
                <div className="sports-stat-number">20+</div>
                <div className="sports-stat-text">
                  Sports Disciplines
                </div>
              </div>
            </div>

            <div className="sports-stat">
              <div className="sports-stat-icon">
                <Users size={24} />
              </div>

              <div>
                <div className="sports-stat-number">500+</div>
                <div className="sports-stat-text">
                  Inter & Intra College Events
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          ACHIEVEMENT GALLERY
      ========================================================= */}

      <section className="sports-section">

        <div className="sports-container">

          <div className="sports-section-heading">

            <div className="sports-section-small">
              Our Sports Legacy
            </div>

            <h2>
              Sports Achievement Gallery
            </h2>

            <p>
              Explore the names of our talented students who
              have made us proud in various sports at
              inter-college, university and state level
              competitions.
            </p>

          </div>

          {/* FILTERS */}

          <div className="sports-filters">

            <div className="sports-filter">
              <Search size={17} />

              <input
                type="text"
                placeholder="Search Student Name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="sports-filter">

              <select
                value={selectedSport}
                onChange={(e) =>
                  setSelectedSport(e.target.value)
                }
              >
                {sports.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={17}
                className="sports-select-arrow"
              />

            </div>

            <div className="sports-filter">

              <select
                value={selectedYear}
                onChange={(e) =>
                  setSelectedYear(e.target.value)
                }
              >
                <option>All Years</option>

                {yearlyAchievements.map((item) => (
                  <option key={item.year}>
                    {item.year}
                  </option>
                ))}

              </select>

              <ChevronDown
                size={17}
                className="sports-select-arrow"
              />

            </div>

            <div className="sports-filter">

              <select
                value={selectedLevel}
                onChange={(e) =>
                  setSelectedLevel(e.target.value)
                }
              >
                {levels.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={17}
                className="sports-select-arrow"
              />

            </div>

          </div>

          {/* CARDS */}

          <div className="sports-achievement-grid">

            {filteredAchievements.map((student) => (

              <div
                className="sports-achievement-card"
                key={student.name}
              >

                <div className="sports-card-image">

                  <img
                    src={student.image}
                    alt={student.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    className={`sports-position ${
                      student.position === "2nd"
                        ? "second"
                        : student.position === "3rd"
                        ? "third"
                        : ""
                    }`}
                  >
                    {student.position}
                  </div>

                </div>

                <div className="sports-card-content">

                  <span className="sports-tag">
                    {student.sport.toUpperCase()}
                  </span>

                  <h3>
                    {student.name}
                  </h3>

                  <div className="sports-card-detail">
                    <Award size={15} />
                    {student.sport}
                  </div>

                  <div className="sports-card-detail">
                    <Medal size={15} />
                    {student.achievement}
                  </div>

                  <div className="sports-card-detail">
                    <CalendarDays size={15} />
                    {student.year}
                  </div>

                </div>

              </div>

            ))}

            <ManagedAchievements
              category="Sports"
              filters={{ search, selectedSport, selectedYear, selectedLevel }}
              renderAchievement={(achievement) => {
                const student = {
                  name: achievement.student_name || achievement.title,
                  sport: achievement.sport || achievement.course || "Sports",
                  achievement: achievement.description || achievement.title,
                  year: achievement.year,
                  position: achievement.rank || "Achiever",
                  image: achievement.image_url,
                };

                return (
                  <div className="sports-achievement-card" key={achievement.id}>
                    <div className="sports-card-image">
                      <img src={student.image} alt={student.name} loading="lazy" />
                      <div className={`sports-position ${student.position === "2nd" ? "second" : student.position === "3rd" ? "third" : ""}`}>
                        {student.position}
                      </div>
                    </div>
                    <div className="sports-card-content">
                      <span className="sports-tag">{student.sport.toUpperCase()}</span>
                      <h3>{student.name}</h3>
                      <div className="sports-card-detail"><Award size={15} />{student.sport}</div>
                      <div className="sports-card-detail"><Medal size={15} />{student.achievement}</div>
                      <div className="sports-card-detail"><CalendarDays size={15} />{student.year}</div>
                    </div>
                  </div>
                );
              }}
            />

          </div>

          {filteredAchievements.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "40px",
                color: "#55708f",
              }}
            >
              No sports achievements found.
            </div>
          )}

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button className="sports-btn sports-btn-primary">
              View All Sports Achievements
              <ArrowRight
                size={15}
                style={{
                  marginLeft: 7,
                  verticalAlign: "middle",
                }}
              />
            </button>
          </div>

        </div>

      </section>

        {/* =========================================================
          SPORTS JOURNEY
      ========================================================= */}

      <section className="sports-journey">

        <div className="sports-container">

          <div className="sports-journey-header">

            <div className="sports-journey-title">

              <small>
                SPORTS THROUGH THE YEARS
              </small>

              <h2>
                Our Sports Journey
              </h2>

            </div>

            <p className="sports-journey-description">
              From district-level to national-level
              competitions, our students have consistently
              shown excellence and brought pride to the
              college.
            </p>

          </div>

          <div className="sports-years-grid">

            {yearlyAchievements.map((item) => (

              <div
                className="sports-year-card"
                key={item.year}
              >

                <div className="sports-year-top">

                  <div className="sports-year-icon">
                    <CalendarDays size={17} />
                  </div>

                  <div className="sports-year">
                    {item.year}
                  </div>

                </div>

                <div className="sports-year-count">
                  {item.count}
                </div>

                <ArrowRight
                  size={15}
                  className="sports-year-arrow"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <div className="sports-container">

        <section className="sports-cta">

          <div>

            <h2>
              The Legacy <span>Continues</span>
            </h2>

            <p>
              Your Passion. Our Support. A Winning Future.
            </p>

            <p style={{ marginTop: 5 }}>
              Be a part of Yaduvanshi's next success story.
            </p>

          </div>

          <button className="sports-cta-button">
            Explore Programs
            <ArrowRight
              size={15}
              style={{
                marginLeft: 7,
                verticalAlign: "middle",
              }}
            />
          </button>

        </section>

      </div>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="sports-footer">

        <div className="sports-container">

          <div className="sports-footer-grid">

            <div>

              <div className="sports-footer-logo">

                <div className="sports-footer-logo-icon">
                  <Trophy size={25} />
                </div>

                <strong>
                  YADUVANSHI
                  <br />
                  DEGREE COLLEGE
                </strong>

              </div>

            </div>

            <div>

              <h4>Quick Links</h4>

              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/courses">Academics</a>
              <a href="/admission">Admissions</a>

            </div>

            <div>

              <h4>Achievements</h4>

              <a href="/achievements/sports">
                Sports Achievements
              </a>

              <a href="/achievements">
                Student Achievements
              </a>

              <a href="/gallery">
                Gallery
              </a>

            </div>

            <div>

              <h4>Contact</h4>

              <a href="/contact">
                Contact Us
              </a>

              <a href="/training-placement">
                Training & Placement
              </a>

              <a href="/campus">
                Campus
              </a>

            </div>

          </div>

          <div className="sports-footer-bottom">

            <span>
              © 2026 Yaduvanshi Degree College.
              All Rights Reserved.
            </span>

            <span>
              Education Builds Better Futures
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}