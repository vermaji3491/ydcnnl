import React, { useMemo, useState } from "react";
import {
  Search,
  CalendarDays,
  BookOpen,
  Users,
  Trophy,
  GraduationCap,
  Award,
  ArrowRight,
  X,
  Target,
  Medal,
} from "lucide-react";
import { Link } from "react-router-dom";
import ManagedAchievements from "../components/ManagedAchievements";

const achievers = [
  {
    id: 1,
    name: "Aarohi Sharma",
    subject: "Physics",
    session: "2025",
    rank: "AIR 12",
    rankNumber: 12,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Qualified IIT JAM with an excellent All India Rank in Physics.",
  },
  {
    id: 2,
    name: "Rohan Verma",
    subject: "Chemistry",
    session: "2025",
    rank: "AIR 45",
    rankNumber: 45,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Successfully qualified IIT JAM Chemistry and continued his academic journey.",
  },
  {
    id: 3,
    name: "Sneha Patel",
    subject: "Mathematics",
    session: "2024",
    rank: "AIR 78",
    rankNumber: 78,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Qualified IIT JAM Mathematics through dedicated preparation.",
  },
  {
    id: 4,
    name: "Aditya Singh",
    subject: "Biology",
    session: "2024",
    rank: "AIR 102",
    rankNumber: 102,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Achieved a strong IIT JAM rank in Biology.",
  },
  {
    id: 5,
    name: "Priya Nair",
    subject: "Chemistry",
    session: "2023",
    rank: "AIR 126",
    rankNumber: 126,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Qualified IIT JAM Chemistry after consistent academic preparation.",
  },
  {
    id: 6,
    name: "Karan Mehta",
    subject: "Physics",
    session: "2023",
    rank: "AIR 148",
    rankNumber: 148,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Secured an IIT JAM rank in Physics.",
  },
  {
    id: 7,
    name: "Isha Gupta",
    subject: "Mathematics",
    session: "2022",
    rank: "AIR 172",
    rankNumber: 172,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Qualified IIT JAM Mathematics with dedicated preparation.",
  },
  {
    id: 8,
    name: "Nikhil Sharma",
    subject: "Biology",
    session: "2022",
    rank: "AIR 198",
    rankNumber: 198,
    category: "IIT JAM",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=700&q=85",
    achievement:
      "Successfully qualified IIT JAM Biology.",
  },
];

const topPerformers = [
  {
    position: 1,
    name: "Ananya Verma",
    subject: "Physics",
    rank: "AIR 12",
    session: "2025",
    label: "Best Performer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=85",
  },
  {
    position: 2,
    name: "Raghav Mehta",
    subject: "Chemistry",
    rank: "AIR 45",
    session: "2025",
    label: "Outstanding Performance",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
  },
  {
    position: 3,
    name: "Diya Sharma",
    subject: "Mathematics",
    rank: "AIR 78",
    session: "2025",
    label: "Remarkable Achievement",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85",
  },
];

const years = [
  { year: "2026", count: "8 Achievers" },
  { year: "2025", count: "10 Achievers" },
  { year: "2024", count: "9 Achievers" },
  { year: "2023", count: "7 Achievers" },
  { year: "2022", count: "6 Achievers" },
  { year: "2021", count: "5 Achievers" },
  { year: "2020", count: "4 Achievers" },
];

function IITJAM() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [rankLevel, setRankLevel] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredAchievers = useMemo(() => {
    return achievers.filter((student) => {
      const searchMatch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.subject.toLowerCase().includes(search.toLowerCase());

      const yearMatch = year ? student.session === year : true;

      const subjectMatch = subject
        ? student.subject === subject
        : true;

      let rankMatch = true;

      if (rankLevel === "top-50") {
        rankMatch = student.rankNumber <= 50;
      }

      if (rankLevel === "top-100") {
        rankMatch = student.rankNumber <= 100;
      }

      if (rankLevel === "100-plus") {
        rankMatch = student.rankNumber > 100;
      }

      return searchMatch && yearMatch && subjectMatch && rankMatch;
    });
  }, [search, year, subject, rankLevel]);

  const clearFilters = () => {
    setSearch("");
    setYear("");
    setSubject("");
    setRankLevel("");
  };

  return (
    <>
      <style>{`

        /* =========================================================
           IIT JAM PAGE
        ========================================================= */

        .iit-page {
          min-height: 100vh;
          background: #fffdf9;
          color: #092d61;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .iit-page * {
          box-sizing: border-box;
        }

        .iit-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .iit-hero {
          position: relative;
          min-height: 470px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(3, 31, 70, 0.98) 0%,
              rgba(3, 31, 70, 0.91) 37%,
              rgba(3, 31, 70, 0.48) 65%,
              rgba(3, 31, 70, 0.35) 100%
            ),
            url("/images/collegebg.png") center/cover no-repeat;
          display: flex;
          align-items: center;
        }

        .iit-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 78% 42%,
              rgba(255, 165, 0, 0.18),
              transparent 28%
            );
          pointer-events: none;
        }

        .iit-hero-content {
          position: relative;
          z-index: 3;
          padding: 80px 0 120px;
          width: 100%;
        }

        .iit-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 30px;
        }

        .iit-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ff9f1c;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .iit-hero h1 {
          margin: 0;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(46px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -2px;
        }

        .iit-hero h1 span {
          color: #ff9818;
        }

        .iit-hero-description {
          max-width: 590px;
          color: rgba(255,255,255,0.88);
          font-size: 16px;
          line-height: 1.7;
          margin: 22px 0 26px;
        }

        .iit-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .iit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 23px;
          border-radius: 999px;
          text-decoration: none;
          border: 1px solid transparent;
          font-size: 14px;
          font-weight: 800;
          transition: 0.25s ease;
          cursor: pointer;
        }

        .iit-btn-primary {
          background: #ff9f1c;
          color: #082c60;
        }

        .iit-btn-primary:hover {
          transform: translateY(-2px);
          background: #ffb43c;
        }

        .iit-btn-outline {
          color: white;
          border-color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.04);
        }

        .iit-btn-outline:hover {
          background: white;
          color: #092d61;
        }

        .iit-trophy-area {
          position: relative;
          min-height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .iit-trophy-glow {
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: rgba(255, 173, 29, 0.2);
          filter: blur(35px);
        }

        .iit-trophy {
          position: relative;
          z-index: 2;
          width: 270px;
          height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .iit-cup {
          position: relative;
          width: 160px;
          height: 135px;
          border-radius: 25px 25px 55px 55px;
          background:
            linear-gradient(
              90deg,
              #a96800,
              #ffd86a 28%,
              #fff1a5 52%,
              #e8a51d 76%,
              #965a00
            );
          box-shadow:
            0 16px 30px rgba(0,0,0,0.35),
            inset 0 -15px 20px rgba(111,60,0,0.22);
        }

        .iit-cup::before,
        .iit-cup::after {
          content: "";
          position: absolute;
          top: 20px;
          width: 50px;
          height: 72px;
          border: 11px solid #e9a51e;
          border-radius: 50%;
          z-index: -1;
        }

        .iit-cup::before {
          left: -42px;
        }

        .iit-cup::after {
          right: -42px;
        }

        .iit-cup-top {
          position: absolute;
          left: 18px;
          right: 18px;
          top: -8px;
          height: 24px;
          border-radius: 50%;
          background: #ffe58b;
          box-shadow: inset 0 -4px 7px rgba(124,75,0,0.25);
        }

        .iit-cup-stem {
          width: 28px;
          height: 48px;
          background: linear-gradient(90deg,#a96800,#ffe481,#bd7400);
        }

        .iit-cup-base {
          width: 120px;
          height: 24px;
          border-radius: 5px;
          background: linear-gradient(90deg,#915700,#f6bf42,#8f5600);
          box-shadow: 0 8px 15px rgba(0,0,0,0.3);
        }

        .iit-cup-label {
          margin-top: 10px;
          background: #062552;
          border: 2px solid #e9aa25;
          color: #ffca52;
          font-weight: 900;
          letter-spacing: 1px;
          padding: 6px 15px;
          border-radius: 4px;
          font-size: 13px;
        }

        .iit-hero-note {
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          max-width: 145px;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 17px;
          line-height: 1.45;
          text-align: center;
        }

        /* wave */

        .iit-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 90px;
          z-index: 4;
        }

        .iit-wave svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* =========================================================
           STATS
        ========================================================= */

        .iit-stats-wrap {
          position: relative;
          z-index: 8;
          margin-top: -1px;
        }

        .iit-stats {
          background: white;
          border: 1px solid #e7edf4;
          box-shadow: 0 15px 45px rgba(9,45,97,0.08);
          border-radius: 17px;
          min-height: 105px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          overflow: hidden;
        }

        .iit-stat {
          position: relative;
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 20px 26px;
        }

        .iit-stat:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 25px;
          height: 55px;
          width: 1px;
          background: #dfe6ef;
        }

        .iit-stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 50px;
          color: #092d61;
          background: #ffab27;
        }

        .iit-stat-number {
          font-family: "Playfair Display", Georgia, serif;
          color: #092d61;
          font-size: 29px;
          line-height: 1;
          font-weight: 800;
        }

        .iit-stat-label {
          margin-top: 5px;
          font-size: 12px;
          color: #49627e;
        }

        /* =========================================================
           SECTION HEADINGS
        ========================================================= */

        .iit-section {
          padding: 78px 0 0;
        }

        .iit-section-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 30px;
        }

        .iit-section-eyebrow {
          color: #f28b00;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .iit-section-heading h2 {
          font-family: "Playfair Display", Georgia, serif;
          color: #092d61;
          font-size: clamp(32px, 4vw, 45px);
          line-height: 1.1;
          margin: 0;
        }

        .iit-section-heading h2 span {
          color: #f28b00;
        }

        .iit-section-heading p {
          color: #52708f;
          font-size: 14px;
          line-height: 1.7;
          margin: 10px auto 0;
          max-width: 650px;
        }

        /* =========================================================
           FILTERS
        ========================================================= */

        .iit-filters {
          display: grid;
          grid-template-columns: 1.5fr repeat(3, 1fr);
          gap: 12px;
          padding: 8px;
          border: 1px solid #dce6f0;
          border-radius: 14px;
          background: #f8fbfe;
          margin-bottom: 22px;
        }

        .iit-input,
        .iit-select {
          min-width: 0;
          height: 46px;
          border: 1px solid #d9e4ef;
          border-radius: 9px;
          background: white;
          color: #092d61;
          padding: 0 14px;
          outline: none;
          font-family: inherit;
          font-size: 12px;
        }

        .iit-input:focus,
        .iit-select:focus {
          border-color: #f5a21c;
          box-shadow: 0 0 0 3px rgba(245,162,28,0.12);
        }

        .iit-search-box {
          position: relative;
        }

        .iit-search-box svg {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #7690aa;
          pointer-events: none;
        }

        .iit-search-box input {
          width: 100%;
          padding-left: 42px;
        }

        .iit-filter-clear {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 8px;
        }

        .iit-clear {
          border: none;
          background: none;
          color: #ed8700;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
        }

        /* =========================================================
           CARDS
        ========================================================= */

        .iit-achievers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .iit-card {
          background: white;
          border: 1px solid #dfe8f1;
          border-radius: 12px;
          padding: 12px;
          box-shadow: 0 8px 25px rgba(11,45,90,0.06);
          transition: 0.25s ease;
          overflow: hidden;
        }

        .iit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 17px 38px rgba(11,45,90,0.13);
        }

        .iit-card-image {
          position: relative;
          height: 180px;
          border-radius: 9px;
          overflow: hidden;
          background: #dfe8f2;
        }

        .iit-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .iit-rank {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 53px;
          height: 53px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #d9f0fc;
          color: #092d61;
          font-size: 11px;
          font-weight: 900;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .iit-rank.gold {
          background: #ffbd4a;
        }

        .iit-rank small {
          font-size: 8px;
          letter-spacing: 0.5px;
        }

        .iit-card-content {
          padding: 10px 3px 2px;
        }

        .iit-card-name {
          margin: 0 0 8px;
          font-size: 15px;
          color: #082d60;
          font-weight: 800;
        }

        .iit-card-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #54708c;
          font-size: 11px;
          margin: 7px 0;
        }

        .iit-card-detail svg {
          color: #092d61;
          flex: 0 0 auto;
        }

        .iit-card-btn {
          width: 100%;
          border: none;
          background: #073a7b;
          color: white;
          height: 38px;
          border-radius: 999px;
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-weight: 700;
          font-size: 11px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .iit-card-btn:hover {
          background: #f29400;
          color: #062552;
        }

        .iit-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          border: 1px dashed #ccd8e5;
          border-radius: 14px;
          color: #607994;
        }

        /* =========================================================
           TOP PERFORMERS
        ========================================================= */

        .iit-top-section {
          margin-top: 55px;
          padding: 32px;
          background: #eef8ff;
          border-radius: 17px;
        }

        .iit-top-heading {
          text-align: center;
          margin-bottom: 25px;
        }

        .iit-top-heading small {
          color: #f29400;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .iit-top-heading h2 {
          font-family: "Playfair Display", Georgia, serif;
          color: #092d61;
          font-size: 33px;
          margin: 5px 0 0;
        }

        .iit-top-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .iit-top-card {
          background: white;
          border-radius: 12px;
          padding: 15px;
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          gap: 15px;
          border: 1px solid #dfe9f2;
        }

        .iit-top-image {
          height: 105px;
          border-radius: 9px;
          overflow: hidden;
        }

        .iit-top-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .iit-position {
          color: #e99816;
          font-weight: 800;
          font-size: 11px;
          margin-bottom: 5px;
        }

        .iit-top-name {
          color: #092d61;
          font-weight: 800;
          font-size: 15px;
          margin-bottom: 8px;
        }

        .iit-top-meta {
          font-size: 11px;
          color: #607994;
          margin: 4px 0;
        }

        .iit-top-rank {
          margin-top: 10px;
          border-radius: 7px;
          padding: 7px 10px;
          background: #fff1cb;
          color: #e18b00;
          font-size: 12px;
          font-weight: 900;
        }

        /* =========================================================
           TIMELINE
        ========================================================= */

        .iit-timeline {
          padding: 60px 0 20px;
        }

        .iit-timeline-heading {
          text-align: center;
          margin-bottom: 25px;
        }

        .iit-timeline-heading small {
          color: #f29400;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .iit-timeline-heading h2 {
          margin: 5px 0 0;
          font-family: "Playfair Display", Georgia, serif;
          color: #092d61;
          font-size: 32px;
        }

        .iit-years {
          display: grid;
          grid-template-columns: repeat(7,1fr);
          gap: 12px;
        }

        .iit-year {
          min-height: 84px;
          border: 1px solid #dbe6ef;
          border-radius: 13px;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 5px 16px rgba(9,45,97,0.04);
          cursor: pointer;
          transition: 0.2s ease;
        }

        .iit-year:hover,
        .iit-year.active {
          background: #ff9f1c;
          border-color: #ff9f1c;
          transform: translateY(-3px);
        }

        .iit-year-number {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 21px;
          font-weight: 900;
          color: #092d61;
        }

        .iit-year-count {
          font-size: 10px;
          color: #6b8097;
          margin-top: 5px;
        }

        .iit-year:hover .iit-year-count,
        .iit-year.active .iit-year-count {
          color: #092d61;
        }

        /* =========================================================
           CTA
        ========================================================= */

        .iit-cta {
          position: relative;
          margin: 55px 0 0;
          min-height: 145px;
          border-radius: 16px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(3,31,70,1),
              rgba(3,31,70,0.93)
            );
          display: flex;
          align-items: center;
        }

        .iit-cta::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 45%;
          height: 100%;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(0,0,0,0.15)
            ),
            url("/images/campus2.png") center/cover;
          opacity: 0.55;
        }

        .iit-cta-content {
          position: relative;
          z-index: 2;
          padding: 25px 35px;
          color: white;
        }

        .iit-cta-content h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          margin: 0;
        }

        .iit-cta-content h2 span {
          color: #ff9f1c;
        }

        .iit-cta-content p {
          margin: 7px 0 18px;
          color: rgba(255,255,255,0.75);
          font-size: 13px;
        }

        /* =========================================================
           MODAL
        ========================================================= */

        .iit-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(2,18,40,0.78);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;
        }

        .iit-modal {
          width: min(760px,100%);
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          position: relative;
        }

        .iit-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 4;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: rgba(0,0,0,0.55);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .iit-modal-image {
          height: 300px;
          overflow: hidden;
        }

        .iit-modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .iit-modal-content {
          padding: 30px;
        }

        .iit-modal-badge {
          display: inline-flex;
          padding: 6px 12px;
          border-radius: 999px;
          background: #fff0cb;
          color: #df8500;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .iit-modal-content h2 {
          font-family: "Playfair Display", Georgia, serif;
          color: #092d61;
          font-size: 34px;
          margin: 0 0 10px;
        }

        .iit-modal-info {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
          margin: 20px 0;
        }

        .iit-modal-info-item {
          padding: 14px;
          border-radius: 9px;
          background: #f3f8fd;
        }

        .iit-modal-info-item small {
          display: block;
          color: #71859b;
          font-size: 10px;
          margin-bottom: 5px;
        }

        .iit-modal-info-item strong {
          color: #092d61;
          font-size: 13px;
        }

        .iit-modal-content p {
          color: #58718b;
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media (max-width: 1100px) {
          .iit-achievers-grid {
            grid-template-columns: repeat(3,1fr);
          }

          .iit-years {
            grid-template-columns: repeat(4,1fr);
          }

          .iit-hero-note {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .iit-hero-grid {
            grid-template-columns: 1fr;
          }

          .iit-hero {
            min-height: 650px;
          }

          .iit-hero-content {
            padding-top: 70px;
          }

          .iit-trophy-area {
            min-height: 230px;
            margin-top: -10px;
          }

          .iit-trophy {
            transform: scale(0.75);
          }

          .iit-stats {
            grid-template-columns: repeat(2,1fr);
          }

          .iit-stat:nth-child(2)::after {
            display: none;
          }

          .iit-filters {
            grid-template-columns: 1fr 1fr;
          }

          .iit-top-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .iit-container {
            width: min(100% - 24px, 600px);
          }

          .iit-hero h1 {
            font-size: 48px;
          }

          .iit-hero-description {
            font-size: 14px;
          }

          .iit-achievers-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .iit-card-image {
            height: 155px;
          }

          .iit-filters {
            grid-template-columns: 1fr;
          }

          .iit-years {
            grid-template-columns: repeat(3,1fr);
          }

          .iit-cta-content h2 {
            font-size: 25px;
          }

          .iit-cta::after {
            width: 55%;
            opacity: 0.3;
          }
        }

        @media (max-width: 520px) {
          .iit-hero {
            min-height: 650px;
          }

          .iit-hero-content {
            padding: 55px 0 90px;
          }

          .iit-hero h1 {
            font-size: 41px;
            letter-spacing: -1px;
          }

          .iit-hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .iit-btn {
            width: 100%;
          }

          .iit-stats {
            grid-template-columns: 1fr;
          }

          .iit-stat:not(:last-child)::after {
            right: 20px;
            left: 20px;
            top: auto;
            bottom: 0;
            width: auto;
            height: 1px;
          }

          .iit-achievers-grid {
            grid-template-columns: 1fr;
          }

          .iit-card-image {
            height: 210px;
          }

          .iit-years {
            grid-template-columns: repeat(2,1fr);
          }

          .iit-top-card {
            grid-template-columns: 85px 1fr;
          }

          .iit-top-image {
            height: 90px;
          }

          .iit-modal-info {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

      <main className="iit-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="iit-hero">
          <div className="iit-hero-content">
            <div className="iit-container">

              <div className="iit-hero-grid">

                <div>
                  <div className="iit-eyebrow">
                    <Award size={15} />
                    Achievements
                  </div>

                  <h1>
                    IIT JAM <span>Achievers</span>
                  </h1>

                  <p className="iit-hero-description">
                    Celebrating the determination and brilliance of our
                    students who have qualified and excelled in IIT JAM,
                    turning their academic dreams into remarkable
                    achievements.
                  </p>

                  <div className="iit-hero-buttons">

                    <a
                      href="#iit-achievers"
                      className="iit-btn iit-btn-primary"
                    >
                      Explore Achievers
                      <ArrowRight size={16} />
                    </a>

                    <Link
                      to="/courses"
                      className="iit-btn iit-btn-outline"
                    >
                      Explore Programs
                      <ArrowRight size={16} />
                    </Link>

                  </div>
                </div>

                <div className="iit-trophy-area">

                  <div className="iit-trophy-glow" />

                  <div className="iit-trophy">

                    <div className="iit-cup">
                      <div className="iit-cup-top" />
                    </div>

                    <div className="iit-cup-stem" />

                    <div className="iit-cup-base" />

                    <div className="iit-cup-label">
                      IIT JAM
                    </div>

                  </div>

                  <div className="iit-hero-note">
                    Dream.
                    <br />
                    Prepare.
                    <br />
                    Achieve.
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="iit-wave">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M0,30
                  C220,100 390,100 600,45
                  C820,-15 1040,65 1220,60
                  C1310,58 1380,45 1440,20
                  L1440,120
                  L0,120
                  Z
                "
                fill="#fffdf9"
              />

              <path
                d="
                  M0,30
                  C220,100 390,100 600,45
                  C820,-15 1040,65 1220,60
                  C1310,58 1380,45 1440,20
                "
                fill="none"
                stroke="#ff9f1c"
                strokeWidth="5"
              />
            </svg>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="iit-stats-wrap">
          <div className="iit-container">

            <div className="iit-stats">

              <div className="iit-stat">
                <div className="iit-stat-icon">
                  <Trophy size={25} />
                </div>

                <div>
                  <div className="iit-stat-number">
                    48+
                  </div>
                  <div className="iit-stat-label">
                    IIT JAM Achievers
                  </div>
                </div>
              </div>

              <div className="iit-stat">
                <div className="iit-stat-icon">
                  <CalendarDays size={25} />
                </div>

                <div>
                  <div className="iit-stat-number">
                    8+
                  </div>
                  <div className="iit-stat-label">
                    Years of Excellence
                  </div>
                </div>
              </div>

              <div className="iit-stat">
                <div className="iit-stat-icon">
                  <GraduationCap size={25} />
                </div>

                <div>
                  <div className="iit-stat-number">
                    4
                  </div>
                  <div className="iit-stat-label">
                    Subjects
                  </div>
                </div>
              </div>

              <div className="iit-stat">
                <div className="iit-stat-icon">
                  <Users size={25} />
                </div>

                <div>
                  <div className="iit-stat-number">
                    12+
                  </div>
                  <div className="iit-stat-label">
                    Academic Mentors
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            ACHIEVEMENT GALLERY
        ===================================================== */}

        <section
          className="iit-section"
          id="iit-achievers"
        >

          <div className="iit-container">

            <div className="iit-section-heading">

              <div className="iit-section-eyebrow">
                Our Academic Legacy
              </div>

              <h2>
                IIT JAM <span>Achievement Gallery</span>
              </h2>

              <p>
                Explore the success stories of our talented students
                who have qualified for IIT JAM and are now pursuing
                their dreams in premier institutes.
              </p>

            </div>

            {/* FILTERS */}

            <div className="iit-filters">

              <div className="iit-search-box">
                <Search size={16} />

                <input
                  className="iit-input"
                  type="text"
                  placeholder="Search Student Name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                className="iit-select"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">
                  Select Year
                </option>

                <option value="2025">
                  2025
                </option>

                <option value="2024">
                  2024
                </option>

                <option value="2023">
                  2023
                </option>

                <option value="2022">
                  2022
                </option>
              </select>

              <select
                className="iit-select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">
                  Select Subject
                </option>

                <option value="Physics">
                  Physics
                </option>

                <option value="Chemistry">
                  Chemistry
                </option>

                <option value="Mathematics">
                  Mathematics
                </option>

                <option value="Biology">
                  Biology
                </option>
              </select>

              <select
                className="iit-select"
                value={rankLevel}
                onChange={(e) => setRankLevel(e.target.value)}
              >
                <option value="">
                  Select Rank / Qualification
                </option>

                <option value="top-50">
                  Top 50
                </option>

                <option value="top-100">
                  Top 100
                </option>

                <option value="100-plus">
                  100+
                </option>
              </select>

            </div>

            {(search || year || subject || rankLevel) && (
              <div className="iit-filter-clear">
                <button
                  className="iit-clear"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* CARDS */}

            <div className="iit-achievers-grid">

              {filteredAchievers.length === 0 ? (
                <div className="iit-empty">
                  No achievers found for the selected filters.
                </div>
              ) : (
                filteredAchievers.map((student) => (
                  <article
                    className="iit-card"
                    key={student.id}
                  >

                    <div className="iit-card-image">

                      <img
                        src={student.image}
                        alt={student.name}
                      />

                      <div
                        className={`iit-rank ${
                          student.rankNumber <= 50
                            ? "gold"
                            : ""
                        }`}
                      >
                        <small>AIR</small>
                        {student.rankNumber}
                      </div>

                    </div>

                    <div className="iit-card-content">

                      <h3 className="iit-card-name">
                        {student.name}
                      </h3>

                      <div className="iit-card-detail">
                        <BookOpen size={14} />
                        {student.subject}
                      </div>

                      <div className="iit-card-detail">
                        <Users size={14} />
                        Session {student.session}
                      </div>

                      <button
                        className="iit-card-btn"
                        onClick={() =>
                          setSelectedStudent(student)
                        }
                      >
                        View Achievement
                        <ArrowRight size={14} />
                      </button>

                    </div>

                  </article>
                ))
              )}

              <ManagedAchievements
                category="IIT JAM"
                filters={{ search, year, subject, rankLevel }}
                renderAchievement={(achievement) => {
                  const rankNumber = Number.parseInt(achievement.rank?.match(/\d+/)?.[0] || "", 10) || 999;
                  const student = {
                    name: achievement.student_name || achievement.title,
                    subject: achievement.subject || achievement.course || achievement.title,
                    session: achievement.year,
                    rank: achievement.rank || "Qualified",
                    rankNumber,
                    category: "IIT JAM",
                    image: achievement.image_url,
                    achievement: achievement.description || achievement.title,
                  };

                  return (
                    <article className="iit-card" key={achievement.id}>
                      <div className="iit-card-image">
                        <img src={student.image} alt={student.name} loading="lazy" />
                        <div className={`iit-rank ${rankNumber <= 50 ? "gold" : ""}`}>
                          <small>Rank</small>{student.rank}
                        </div>
                      </div>
                      <div className="iit-card-content">
                        <h3 className="iit-card-name">{student.name}</h3>
                        <div className="iit-card-detail"><BookOpen size={14} />{student.subject}</div>
                        <div className="iit-card-detail"><Users size={14} />Session {student.session}</div>
                        <button className="iit-card-btn" onClick={() => setSelectedStudent(student)}>
                          View Achievement <ArrowRight size={14} />
                        </button>
                      </div>
                    </article>
                  );
                }}
              />

            </div>

            {/* =================================================
                TOP PERFORMERS
            ================================================= */}

            <section className="iit-top-section">

              <div className="iit-top-heading">

                <small>
                  Top Achievements
                </small>

                <h2>
                  Top IIT JAM Performers
                </h2>

              </div>

              <div className="iit-top-grid">

                {topPerformers.map((student) => (
                  <div
                    className="iit-top-card"
                    key={student.position}
                  >

                    <div className="iit-top-image">
                      <img
                        src={student.image}
                        alt={student.name}
                      />
                    </div>

                    <div>

                      <div className="iit-position">
                        <Medal size={13} />
                        &nbsp; Position {student.position}
                      </div>

                      <div className="iit-top-name">
                        {student.name}
                      </div>

                      <div className="iit-top-meta">
                        {student.subject}
                      </div>

                      <div className="iit-top-meta">
                        Session {student.session}
                      </div>

                      <div className="iit-top-rank">
                        {student.rank}
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </section>

          </div>

        </section>

        {/* =====================================================
          YEAR TIMELINE
        ===================================================== */}

        <section className="iit-timeline">

          <div className="iit-container">

            <div className="iit-timeline-heading">

              <small>
                Our Journey
              </small>

              <h2>
                Achievement Year Timeline
              </h2>

            </div>

            <div className="iit-years">

              {years.map((item, index) => (
                <div
                  className={`iit-year ${
                    index === 0 ? "active" : ""
                  }`}
                  key={item.year}
                  onClick={() => {
                    setYear(
                      item.year === "2026"
                        ? ""
                        : item.year
                    );
                  }}
                >

                  <div className="iit-year-number">
                    {item.year}
                  </div>

                  <div className="iit-year-count">
                    {item.count}
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="iit-container">

          <section className="iit-cta">

            <div className="iit-cta-content">

              <h2>
                Your IIT JAM Journey{" "}
                <span>Starts Here</span>
              </h2>

              <p>
                Learn. Prepare. Achieve.
              </p>

              <Link
                to="/courses"
                className="iit-btn iit-btn-primary"
              >
                Explore Programs
                <ArrowRight size={16} />
              </Link>

            </div>

          </section>

        </div>

        {/* =====================================================
            MODAL
        ===================================================== */}

        {selectedStudent && (
          <div
            className="iit-modal-overlay"
            onClick={() => setSelectedStudent(null)}
          >

            <div
              className="iit-modal"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                className="iit-modal-close"
                onClick={() => setSelectedStudent(null)}
              >
                <X size={20} />
              </button>

              <div className="iit-modal-image">

                <img
                  src={selectedStudent.image}
                  alt={selectedStudent.name}
                />

              </div>

              <div className="iit-modal-content">

                <div className="iit-modal-badge">
                  IIT JAM ACHIEVER
                </div>

                <h2>
                  {selectedStudent.name}
                </h2>

                <div className="iit-modal-info">

                  <div className="iit-modal-info-item">
                    <small>
                      Subject
                    </small>

                    <strong>
                      {selectedStudent.subject}
                    </strong>
                  </div>

                  <div className="iit-modal-info-item">
                    <small>
                      Session
                    </small>

                    <strong>
                      {selectedStudent.session}
                    </strong>
                  </div>

                  <div className="iit-modal-info-item">
                    <small>
                      Rank
                    </small>

                    <strong>
                      {selectedStudent.rank}
                    </strong>
                  </div>

                </div>

                <p>
                  {selectedStudent.achievement}
                </p>

              </div>

            </div>

          </div>
        )}

      </main>
    </>
  );
}

export default IITJAM;