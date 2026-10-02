import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ManagedAchievements from "../components/ManagedAchievements";
import {
  Search,
  CalendarDays,
  BookOpen,
  Users,
  Trophy,
  GraduationCap,
  ArrowRight,
  X,
  Target,
} from "lucide-react";

/* =========================================================
   DEMO ACHIEVEMENT DATA
   Replace these records with verified college records.
========================================================= */

const achievers = [
  {
    id: 1,
    name: "Isha Verma",
    exam: "NET",
    subject: "Life Sciences",
    branch: "UGC NET",
    year: "2026",
    score: "98.5%",
    rank: "12",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    exam: "GATE",
    subject: "Computer Science",
    branch: "GATE",
    year: "2025",
    score: "802/1000",
    rank: "45",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Sneha Patel",
    exam: "NET",
    subject: "Commerce",
    branch: "UGC NET",
    year: "2025",
    score: "88.2%",
    rank: "28",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "Amit Kumar",
    exam: "GATE",
    subject: "Computer Science",
    branch: "GATE",
    year: "2024",
    score: "488/1000",
    rank: "67",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 5,
    name: "Priya Singh",
    exam: "NET",
    subject: "Mathematics",
    branch: "UGC NET",
    year: "2024",
    score: "91.6%",
    rank: "15",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    name: "Priya Mehta",
    exam: "GATE",
    subject: "Electronics & Communication",
    branch: "GATE",
    year: "2023",
    score: "471/1000",
    rank: "73",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
  },
];

const topPerformers = [
  {
    position: 1,
    label: "NET Topper",
    name: "Isha Verma",
    exam: "UGC NET",
    score: "98.5%",
    subject: "Life Sciences",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=85",
  },
  {
    position: 2,
    label: "GATE Topper",
    name: "Rohit Sharma",
    exam: "GATE",
    score: "798/1000",
    subject: "Computer Science",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
  },
  {
    position: 3,
    label: "Research Excellence",
    name: "Neha Gupta",
    exam: "NET",
    score: "96.8%",
    subject: "Commerce",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
  },
];

const years = [
  ["2026", "6 Achievers"],
  ["2025", "8 Achievers"],
  ["2024", "7 Achievers"],
  ["2023", "5 Achievers"],
  ["2022", "4 Achievers"],
  ["2021", "6 Achievers"],
  ["2020", "5 Achievers"],
  ["2019", "4 Achievers"],
  ["2018", "3 Achievers"],
  ["2017", "4 Achievers"],
  ["2016", "2 Achievers"],
  ["2015", "3 Achievers"],
];

const subjects = [
  "Life Sciences",
  "English",
  "Commerce",
  "Mathematics",
  "Computer Science",
  "Electronics & Communication",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function NETGATE() {
  const [search, setSearch] = useState("");
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [level, setLevel] = useState("");
  const [selected, setSelected] = useState(null);

  /* =======================================================
     FILTERING
  ======================================================= */

  const filtered = useMemo(() => {
    return achievers.filter((item) => {
      const q = search.toLowerCase().trim();

      const searchMatch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.branch.toLowerCase().includes(q);

      const examMatch = !exam || item.exam === exam;

      const subjectMatch = !subject || item.subject === subject;

      const yearMatch = !year || item.year === year;

      let levelMatch = true;

      if (level === "top-25") {
        levelMatch = Number(item.rank) <= 25;
      }

      if (level === "top-50") {
        levelMatch = Number(item.rank) <= 50;
      }

      if (level === "50-plus") {
        levelMatch = Number(item.rank) > 50;
      }

      return (
        searchMatch &&
        examMatch &&
        subjectMatch &&
        yearMatch &&
        levelMatch
      );
    });
  }, [search, exam, subject, year, level]);

  const clearFilters = () => {
    setSearch("");
    setExam("");
    setSubject("");
    setYear("");
    setLevel("");
  };

  const hasFilters =
    search || exam || subject || year || level;

  return (
    <>
      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */

        .ng-page {
          --navy: #062b60;
          --navy-dark: #031a3c;
          --navy-light: #073b7d;
          --orange: #ff9f1c;
          --orange-dark: #f28a00;
          --cream: #fffdf9;
          --text: #092d61;
          --muted: #607994;

          min-height: 100vh;
          background: var(--cream);
          color: var(--text);
          font-family: "DM Sans", Arial, sans-serif;
        }

        .ng-page *,
        .ng-page *::before,
        .ng-page *::after {
          box-sizing: border-box;
        }

        .ng-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .ng-hero {
          position: relative;
          min-height: 590px;
          overflow: hidden;
          color: #fff;

          background:
            radial-gradient(
              circle at 78% 40%,
              rgba(255, 159, 28, 0.18),
              transparent 28%
            ),
            linear-gradient(
              115deg,
              #031a3c 0%,
              #062b60 48%,
              #073b7d 100%
            );
        }

        .ng-hero::before {
          content: "";
          position: absolute;
          width: 620px;
          height: 620px;
          right: -170px;
          top: -180px;
          border: 1px solid rgba(255, 159, 28, 0.18);
          border-radius: 50%;
        }

        .ng-hero::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: 40px;
          top: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .ng-hero-content {
          position: relative;
          z-index: 5;
          padding: 72px 0 125px;
        }

        .ng-hero-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 35px;
        }

        /* =====================================================
           HERO LEFT
        ===================================================== */

        .ng-hero-copy {
          position: relative;
          z-index: 10;
          max-width: 650px;
        }

        .ng-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: #ffb52f;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .ng-eyebrow::before {
          content: "";
          width: 42px;
          height: 2px;
          background: var(--orange);
        }

        .ng-hero h1 {
          margin: 17px 0 20px;
          max-width: 650px;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(48px, 6vw, 78px);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .ng-hero h1 span {
          display: block;
          color: var(--orange);
          font-style: italic;
        }

        .ng-hero-description {
          max-width: 570px;
          margin: 0 0 27px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          line-height: 1.8;
        }

        .ng-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ng-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 47px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .ng-btn-primary {
          color: #062b60;
          background: var(--orange);
          border: 1px solid var(--orange);
          box-shadow: 0 10px 25px rgba(255, 159, 28, 0.22);
        }

        .ng-btn-primary:hover {
          transform: translateY(-3px);
          background: #ffb52f;
          box-shadow: 0 15px 30px rgba(255, 159, 28, 0.3);
        }

        .ng-btn-outline {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(6px);
        }

        .ng-btn-outline:hover {
          transform: translateY(-3px);
          color: var(--navy);
          background: #fff;
        }

        .ng-hero-note {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 25px;
          color: rgba(255, 255, 255, 0.62);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .ng-hero-note-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow:
            0 0 0 5px rgba(255, 159, 28, 0.1);
        }

        /* =====================================================
           HERO RIGHT
        ===================================================== */

        .ng-hero-visual {
          position: relative;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ng-campus-frame {
          position: relative;
          width: min(510px, 100%);
          height: 350px;
          overflow: hidden;

          border: 7px solid rgba(255, 255, 255, 0.9);
          border-radius: 26px;

          transform: rotate(2deg);

          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 159, 28, 0.35);
        }

        .ng-campus-frame::after {
          content: "";
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 40%,
              rgba(3, 26, 60, 0.62) 100%
            );
        }

        .ng-campus-frame img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .ng-visual-ring {
          position: absolute;
          width: 360px;
          height: 360px;
          right: 8px;
          top: 13px;
          border: 2px solid rgba(255, 159, 28, 0.65);
          border-radius: 50%;
          pointer-events: none;
        }

        /* =====================================================
           TROPHY
        ===================================================== */

        .ng-trophy {
          position: absolute;
          z-index: 6;
          right: 27px;
          top: 28px;

          width: 72px;
          height: 72px;

          display: grid;
          place-items: center;

          color: #6b4300;

          background:
            linear-gradient(
              145deg,
              #fff1a8,
              #ffb51f 45%,
              #d88700
            );

          border: 5px solid #fff0b0;
          border-radius: 50%;

          box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.3),
            0 0 0 8px rgba(255, 159, 28, 0.12);
        }

        .ng-trophy::before {
          content: "";
          position: absolute;
          width: 96px;
          height: 96px;
          border: 1px dashed rgba(255, 190, 60, 0.7);
          border-radius: 50%;
        }

        /* =====================================================
           FLOATING NET
        ===================================================== */

        .ng-floating-net {
          position: absolute;
          z-index: 8;
          left: -3px;
          top: 44px;

          width: 170px;
          padding: 15px 17px;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.97);
          color: var(--navy);

          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);

          transform: rotate(-4deg);
        }

        .ng-floating-net::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          border-radius: 14px 0 0 14px;
          background: #0564a7;
        }

        .ng-floating-label {
          color: #71849b;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .ng-floating-title {
          margin-top: 5px;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 24px;
          font-weight: 800;
        }

        .ng-floating-sub {
          margin-top: 3px;
          color: #688099;
          font-size: 9px;
        }

        /* =====================================================
           FLOATING GATE
        ===================================================== */

        .ng-floating-gate {
          position: absolute;
          z-index: 8;
          right: -3px;
          bottom: 35px;

          width: 175px;
          padding: 15px 17px;

          border-radius: 14px;

          color: #fff;

          background:
            linear-gradient(
              135deg,
              #f28a00,
              #ffad21
            );

          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);

          transform: rotate(4deg);
        }

        .ng-floating-gate .ng-floating-label {
          color: rgba(255, 255, 255, 0.75);
        }

        .ng-floating-gate .ng-floating-title {
          color: var(--navy);
        }

        .ng-floating-gate .ng-floating-sub {
          color: rgba(6, 43, 96, 0.75);
        }

        /* =====================================================
           DREAM TEXT
        ===================================================== */

        .ng-dream {
          position: absolute;
          z-index: 7;
          right: 15px;
          top: -7px;

          color: #fff;

          font-family: "Playfair Display", Georgia, serif;
          font-size: 19px;
          font-style: italic;
          line-height: 1.2;

          transform: rotate(-6deg);
        }

        .ng-dream::after {
          content: "";
          display: block;
          width: 72px;
          height: 3px;
          margin: 8px 0 0 auto;
          background: var(--orange);
          transform: rotate(-4deg);
        }

        /* =====================================================
           DECORATIVE DOTS
        ===================================================== */

        .ng-orbit-dot {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow:
            0 0 0 6px rgba(255, 159, 28, 0.12);
        }

        .ng-orbit-dot.one {
          top: 18px;
          left: 35%;
        }

        .ng-orbit-dot.two {
          right: 30%;
          bottom: 15px;
          width: 6px;
          height: 6px;
        }

        /* =====================================================
           HERO WAVE
        ===================================================== */

        .ng-wave {
          position: absolute;
          z-index: 20;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 100px;
          pointer-events: none;
        }

        .ng-wave svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* =====================================================
           STATS
        ===================================================== */

        .ng-stats-wrap {
          position: relative;
          z-index: 30;
          margin-top: -1px;
        }

        .ng-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          overflow: hidden;

          background: #fff;
          border: 1px solid #e0e8f0;
          border-radius: 14px;

          box-shadow:
            0 12px 35px rgba(8, 45, 96, 0.07);
        }

        .ng-stat {
          position: relative;

          display: flex;
          align-items: center;

          gap: 14px;
          padding: 18px 25px;
        }

        .ng-stat:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 24px;
          width: 1px;
          height: 48px;
          background: #dfe6ee;
        }

        .ng-stat-icon {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;

          display: grid;
          place-items: center;

          color: var(--navy);
          background: #ffb52e;
          border-radius: 50%;
        }

        .ng-stat-number {
          color: var(--text);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 30px;
          font-weight: 800;
          line-height: 1;
        }

        .ng-stat-label {
          margin-top: 5px;
          color: var(--muted);
          font-size: 11px;
        }

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .ng-section {
          padding: 62px 0 0;
        }

        .ng-heading {
          max-width: 720px;
          margin: 0 auto 27px;
          text-align: center;
        }

        .ng-section-eyebrow {
          color: var(--orange-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ng-heading h2 {
          margin: 5px 0 7px;

          color: var(--text);

          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(31px, 4vw, 43px);
          font-weight: 800;
          line-height: 1.1;
        }

        .ng-heading h2 span {
          color: var(--orange-dark);
        }

        .ng-heading p {
          max-width: 650px;
          margin: auto;

          color: #59718c;
          font-size: 13px;
          line-height: 1.65;
        }

        /* =====================================================
           FILTERS
        ===================================================== */

        .ng-filters {
          display: grid;
          grid-template-columns: 1.35fr repeat(4, 1fr);

          gap: 10px;

          padding: 7px;
          margin-bottom: 22px;

          border: 1px solid #dbe6ef;
          border-radius: 12px;

          background: #f7fbff;
        }

        .ng-search {
          position: relative;
        }

        .ng-search svg {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #7189a2;
        }

        .ng-input,
        .ng-select {
          width: 100%;
          height: 43px;

          border: 1px solid #dbe5ef;
          border-radius: 8px;

          padding: 0 12px;

          outline: none;

          color: var(--text);
          background: #fff;

          font: 11px "DM Sans", Arial, sans-serif;
        }

        .ng-search .ng-input {
          padding-left: 37px;
        }

        .ng-input:focus,
        .ng-select:focus {
          border-color: var(--orange);

          box-shadow:
            0 0 0 3px rgba(255, 159, 28, 0.12);
        }

        .ng-clear {
          display: block;

          margin: -10px 0 14px auto;

          border: 0;
          background: none;

          color: #e48600;

          font-size: 11px;
          font-weight: 800;

          cursor: pointer;
        }

        /* =====================================================
           ACHIEVER CARDS
        ===================================================== */

        .ng-cards {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .ng-card {
          min-width: 0;

          padding: 9px;

          background: #fff;
          border: 1px solid #dfe7ef;
          border-radius: 10px;

          box-shadow:
            0 5px 18px rgba(7, 44, 91, 0.045);

          transition: 0.22s ease;
        }

        .ng-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 14px 28px rgba(7, 44, 91, 0.12);
        }

        .ng-card-image {
          position: relative;

          height: 140px;

          overflow: hidden;
          border-radius: 8px;
          background: #eaf1f7;
        }

        .ng-card-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .ng-exam-badge {
          position: absolute;
          top: 7px;
          left: 7px;

          padding: 5px 8px;

          border-radius: 5px;

          color: #fff;
          background: #0564a7;

          font-size: 9px;
          font-weight: 900;
        }

        .ng-exam-badge.gate {
          background: var(--orange-dark);
        }

        .ng-rank-badge {
          position: absolute;
          top: 6px;
          right: 6px;

          width: 42px;
          height: 51px;

          display: grid;
          place-items: center;

          padding-top: 3px;

          color: #e28b00;
          background: #fff0c9;

          clip-path:
            polygon(
              50% 0,
              100% 14%,
              92% 84%,
              50% 100%,
              8% 84%,
              0 14%
            );

          font-size: 10px;
          font-weight: 900;
          text-align: center;
        }

        .ng-card-body {
          padding: 8px 2px 2px;
        }

        .ng-card-name {
          margin: 0 0 8px;

          color: var(--text);

          font-size: 12px;
          font-weight: 900;
        }

        .ng-detail {
          display: flex;
          align-items: center;
          gap: 5px;

          margin: 5px 0;

          color: #57718d;
          font-size: 9px;
          line-height: 1.35;
        }

        .ng-detail svg {
          flex: 0 0 auto;
          color: var(--navy);
        }

        .ng-card-button {
          width: 100%;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;

          margin-top: 6px;

          border: 0;
          border-radius: 999px;

          color: #fff;
          background: #073b7d;

          cursor: pointer;

          font-size: 9px;
          font-weight: 800;

          transition: 0.2s ease;
        }

        .ng-card-button:hover {
          color: var(--navy);
          background: var(--orange);
        }

        .ng-empty {
          grid-column: 1 / -1;

          padding: 50px 20px;

          border: 1px dashed #cad7e4;
          border-radius: 12px;

          color: var(--muted);

          text-align: center;
        }

        /* =====================================================
           TOP PERFORMERS
        ===================================================== */

        .ng-top {
          margin-top: 45px;
          padding: 28px 14px 30px;

          border-radius: 15px;
          background: #eef8ff;
        }

        .ng-top-heading {
          margin-bottom: 23px;
          text-align: center;
        }

        .ng-top-heading small {
          color: var(--orange-dark);

          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ng-top-heading h2 {
          margin: 5px 0 0;

          color: var(--text);

          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          font-weight: 800;
          line-height: 1.1;
        }

        .ng-top-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .ng-top-card {
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          gap: 13px;

          padding: 13px;

          background: #fff;
          border: 1px solid #dce7f0;
          border-radius: 10px;
        }

        .ng-top-photo {
          position: relative;

          height: 105px;

          overflow: hidden;
          border-radius: 8px;
        }

        .ng-top-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .ng-medal-number {
          position: absolute;
          left: 2px;
          bottom: 2px;

          width: 30px;
          height: 30px;

          display: grid;
          place-items: center;

          color: #fff;
          background: #f2a11c;

          border: 2px solid #fff;
          border-radius: 50%;

          font-size: 12px;
          font-weight: 900;
        }

        .ng-top-label {
          display: inline-block;

          padding: 4px 7px;

          border-radius: 999px;

          color: #bd7300;
          background: #fff0ce;

          font-size: 8px;
          font-weight: 900;
        }

        .ng-top-name {
          margin-top: 7px;

          color: var(--text);

          font-size: 12px;
          font-weight: 900;
        }

        .ng-top-meta {
          margin-top: 5px;

          color: #58718c;

          font-size: 9px;
        }

        /* =====================================================
           YEARS
        ===================================================== */

        .ng-years-section {
          padding: 48px 0 15px;
        }

        .ng-years-heading {
          margin-bottom: 25px;
          text-align: center;
        }

        .ng-years-heading small {
          color: var(--orange-dark);

          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ng-years-heading h2 {
          margin: 5px 0 0;

          color: var(--text);

          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          font-weight: 800;
          line-height: 1.1;
        }

        .ng-years {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 11px;
        }

        .ng-year {
          min-height: 70px;

          display: flex;
          align-items: center;
          gap: 10px;

          padding: 12px 14px;

          border: 1px solid #dce7ef;
          border-radius: 10px;

          background: #fff;

          cursor: pointer;

          transition: 0.2s ease;

          text-align: left;
        }

        .ng-year:hover,
        .ng-year.active {
          background: #fff2d5;
          border-color: #ffc461;
          transform: translateY(-2px);
        }

        .ng-year-icon {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;

          display: grid;
          place-items: center;

          color: #082d60;
          background: #ffb52f;
          border-radius: 50%;
        }

        .ng-year-number {
          display: block;

          color: var(--text);

          font-family: "Playfair Display", Georgia, serif;
          font-size: 18px;
          font-weight: 800;
          line-height: 1;
        }

        .ng-year-count {
          display: block;

          margin-top: 4px;

          color: #6c8298;
          font-size: 9px;
        }

        .ng-year-arrow {
          margin-left: auto;
          color: #ef9200;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .ng-cta {
          position: relative;

          min-height: 150px;

          display: flex;
          align-items: center;

          overflow: hidden;

          margin: 20px 0 35px;

          border-radius: 14px;

          background:
            linear-gradient(
              90deg,
              rgba(2, 31, 70, 0.99),
              rgba(3, 43, 91, 0.9)
            ),
            url("/images/campus2.png") right center / cover no-repeat;
        }

        .ng-cta-content {
          position: relative;
          z-index: 2;

          padding: 25px 30px;

          color: #fff;
        }

        .ng-cta h2 {
          margin: 0;

          color: #fff;

          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          font-weight: 800;
          line-height: 1.1;
        }

        .ng-cta h2 span {
          color: var(--orange);
        }

        .ng-cta p {
          margin: 6px 0 14px;

          color: rgba(255, 255, 255, 0.75);

          font-size: 11px;
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .ng-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;

          display: grid;
          place-items: center;

          padding: 20px;

          background: rgba(0, 19, 43, 0.78);

          backdrop-filter: blur(7px);
        }

        .ng-modal {
          position: relative;

          width: min(700px, 100%);
          max-height: 90vh;

          overflow: auto;

          background: #fff;

          border-radius: 17px;

          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .ng-modal-close {
          position: absolute;
          z-index: 3;

          top: 12px;
          right: 12px;

          width: 36px;
          height: 36px;

          display: grid;
          place-items: center;

          border: 0;
          border-radius: 50%;

          color: #fff;
          background: rgba(0, 0, 0, 0.55);

          cursor: pointer;
        }

        .ng-modal-photo {
          height: 270px;
          background: #eaf1f7;
        }

        .ng-modal-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .ng-modal-body {
          padding: 26px;
        }

        .ng-modal-badge {
          display: inline-block;

          padding: 5px 9px;

          border-radius: 999px;

          color: #d77f00;
          background: #fff0cf;

          font-size: 10px;
          font-weight: 900;
        }

        .ng-modal-body h2 {
          margin: 8px 0 15px;

          color: var(--text);

          font-family: "Playfair Display", Georgia, serif;
          font-size: 31px;
          font-weight: 800;
          line-height: 1.1;
        }

        .ng-modal-info {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .ng-modal-info div {
          padding: 12px;

          border-radius: 8px;

          background: #f3f8fc;
        }

        .ng-modal-info small {
          display: block;

          margin-bottom: 4px;

          color: #75899d;

          font-size: 9px;
        }

        .ng-modal-info strong {
          color: var(--text);
          font-size: 11px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1150px) {
          .ng-cards {
            grid-template-columns: repeat(3, 1fr);
          }

          .ng-filters {
            grid-template-columns: 1.5fr repeat(2, 1fr);
          }

          .ng-years {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 900px) {
          .ng-hero {
            min-height: 790px;
          }

          .ng-hero-grid {
            grid-template-columns: 1fr;
          }

          .ng-hero-copy {
            max-width: 700px;
          }

          .ng-hero-visual {
            min-height: 330px;
            margin-top: 8px;
          }

          .ng-campus-frame {
            width: min(540px, 82%);
            height: 310px;
          }

          .ng-floating-net {
            left: 2%;
          }

          .ng-floating-gate {
            right: 2%;
          }

          .ng-dream {
            right: 7%;
          }

          .ng-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .ng-stat:nth-child(2)::after {
            display: none;
          }

          .ng-filters {
            grid-template-columns: 1fr 1fr;
          }

          .ng-top-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .ng-container {
            width: min(100% - 24px, 600px);
          }

          .ng-hero {
            min-height: 770px;
          }

          .ng-hero-content {
            padding-top: 45px;
          }

          .ng-hero h1 {
            font-size: 46px;
            letter-spacing: -2px;
          }

          .ng-hero-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .ng-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .ng-btn {
            width: 100%;
          }

          .ng-hero-visual {
            min-height: 295px;
          }

          .ng-campus-frame {
            width: 82%;
            height: 245px;
            border-width: 5px;
            border-radius: 18px;
          }

          .ng-visual-ring {
            width: 250px;
            height: 250px;
            right: 7%;
            top: 5px;
          }

          .ng-floating-net {
            width: 135px;
            padding: 11px 13px;
            left: 0;
            top: 25px;
          }

          .ng-floating-gate {
            width: 140px;
            padding: 11px 13px;
            right: 0;
            bottom: 17px;
          }

          .ng-floating-title {
            font-size: 19px;
          }

          .ng-trophy {
            width: 58px;
            height: 58px;
            right: 7px;
            top: 22px;
          }

          .ng-dream {
            display: none;
          }

          .ng-wave {
            height: 70px;
          }

          .ng-filters {
            grid-template-columns: 1fr;
          }

          .ng-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .ng-card-image {
            height: 170px;
          }

          .ng-years {
            grid-template-columns: repeat(2, 1fr);
          }

          .ng-top-card {
            grid-template-columns: 85px 1fr;
          }

          .ng-top-photo {
            height: 90px;
          }
        }

        @media (max-width: 480px) {
          .ng-hero h1 {
            font-size: 40px;
          }

          .ng-stats {
            grid-template-columns: 1fr;
          }

          .ng-stat:not(:last-child)::after {
            left: 20px;
            right: 20px;
            top: auto;
            bottom: 0;
            width: auto;
            height: 1px;
          }

          .ng-cards {
            grid-template-columns: 1fr;
          }

          .ng-card-image {
            height: 220px;
          }

          .ng-years {
            grid-template-columns: 1fr 1fr;
          }

          .ng-modal-info {
            grid-template-columns: 1fr 1fr;
          }

          .ng-modal-photo {
            height: 230px;
          }
        }
      `}</style>

      <main className="ng-page">

        {/* =====================================================
            PREMIUM HERO
        ===================================================== */}

        <section className="ng-hero">

          <div className="ng-hero-content">

            <div className="ng-container">

              <div className="ng-hero-grid">

                {/* ================= LEFT ================= */}

                <div className="ng-hero-copy">

                  <div className="ng-eyebrow">
                    Academic Achievements
                  </div>

                  <h1>
                    NET &amp; GATE
                    <span>Achievements</span>
                  </h1>

                  <p className="ng-hero-description">
                    Celebrating the determination, preparation and
                    academic excellence of Yaduvanshi students who
                    have qualified national-level examinations
                    such as NET and GATE.
                  </p>

                  <div className="ng-buttons">

                    <a
                      href="#net-gate-achievers"
                      className="ng-btn ng-btn-primary"
                    >
                      Explore NET Achievers
                      <ArrowRight size={16} />
                    </a>

                    <a
                      href="#net-gate-achievers"
                      className="ng-btn ng-btn-outline"
                    >
                      Explore GATE Achievers
                      <ArrowRight size={16} />
                    </a>

                  </div>

                  <div className="ng-hero-note">
                    <span className="ng-hero-note-dot"></span>
                    Dream • Prepare • Achieve
                  </div>

                </div>

                {/* ================= RIGHT ================= */}

                <div className="ng-hero-visual">

                  <div className="ng-visual-ring"></div>

                  {/* Campus Image */}

                  <div className="ng-campus-frame">

                    <img
                      src="/images/collegebg.png"
                      alt="Yaduvanshi Degree College campus"
                    />

                  </div>

                  {/* Trophy */}

                  <div className="ng-trophy">
                    <Trophy
                      size={30}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* NET CARD */}

                  <div className="ng-floating-net">

                    <div className="ng-floating-label">
                      National Eligibility Test
                    </div>

                    <div className="ng-floating-title">
                      NET
                    </div>

                    <div className="ng-floating-sub">
                      Research • Teaching • Excellence
                    </div>

                  </div>

                  {/* GATE CARD */}

                  <div className="ng-floating-gate">

                    <div className="ng-floating-label">
                      Graduate Aptitude Test
                    </div>

                    <div className="ng-floating-title">
                      GATE
                    </div>

                    <div className="ng-floating-sub">
                      Technology • Engineering • Future
                    </div>

                  </div>

                  {/* DREAM TEXT */}

                  <div className="ng-dream">
                    Dream
                    <br />
                    Prepare
                    <br />
                    Achieve
                  </div>

                  {/* Decorative Dots */}

                  <span className="ng-orbit-dot one"></span>
                  <span className="ng-orbit-dot two"></span>

                </div>

              </div>

            </div>

          </div>

          {/* CURVED HERO BOTTOM */}

          <div className="ng-wave">

            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >

              <path
                d="
                  M0 35
                  C190 110 370 115 575 58
                  C790 0 980 82 1160 67
                  C1280 58 1360 35 1440 15
                  L1440 120
                  L0 120
                  Z
                "
                fill="#fffdf9"
              />

              <path
                d="
                  M0 35
                  C190 110 370 115 575 58
                  C790 0 980 82 1160 67
                  C1280 58 1360 35 1440 15
                "
                fill="none"
                stroke="#ff9f1c"
                strokeWidth="5"
              />

            </svg>

          </div>

        </section>

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <section className="ng-stats-wrap">

          <div className="ng-container">

            <div className="ng-stats">

              <div className="ng-stat">

                <div className="ng-stat-icon">
                  <Trophy size={24} />
                </div>

                <div>
                  <div className="ng-stat-number">
                    50+
                  </div>

                  <div className="ng-stat-label">
                    Achievers
                  </div>
                </div>

              </div>

              <div className="ng-stat">

                <div className="ng-stat-icon">
                  <CalendarDays size={24} />
                </div>

                <div>
                  <div className="ng-stat-number">
                    10+
                  </div>

                  <div className="ng-stat-label">
                    Years of Excellence
                  </div>
                </div>

              </div>

              <div className="ng-stat">

                <div className="ng-stat-icon">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <div className="ng-stat-number">
                    2
                  </div>

                  <div className="ng-stat-label">
                    National Exams
                  </div>
                </div>

              </div>

              <div className="ng-stat">

                <div className="ng-stat-icon">
                  <Users size={24} />
                </div>

                <div>
                  <div className="ng-stat-number">
                    100+
                  </div>

                  <div className="ng-stat-label">
                    Academic Mentors
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ACHIEVEMENT GALLERY
        ===================================================== */}

        <section
          className="ng-section"
          id="net-gate-achievers"
        >

          <div className="ng-container">

            <div className="ng-heading">

              <div className="ng-section-eyebrow">
                Our Academic Legacy
              </div>

              <h2>
                NET &amp; GATE{" "}
                <span>
                  Achievement Gallery
                </span>
              </h2>

              <p>
                Explore the names of talented students who have
                qualified NET and GATE, showcasing dedication,
                preparation and academic excellence.
              </p>

            </div>

            {/* =================================================
                FILTERS
            ================================================= */}

            <div className="ng-filters">

              <div className="ng-search">

                <Search size={15} />

                <input
                  className="ng-input"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search Student Name..."
                />

              </div>

              <select
                className="ng-select"
                value={exam}
                onChange={(e) =>
                  setExam(e.target.value)
                }
              >
                <option value="">
                  Select Exam
                </option>

                <option value="NET">
                  NET
                </option>

                <option value="GATE">
                  GATE
                </option>
              </select>

              <select
                className="ng-select"
                value={subject}
                onChange={(e) =>
                  setSubject(e.target.value)
                }
              >
                <option value="">
                  Select Subject / Branch
                </option>

                {subjects.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <select
                className="ng-select"
                value={year}
                onChange={(e) =>
                  setYear(e.target.value)
                }
              >
                <option value="">
                  Select Year
                </option>

                {years.map(([itemYear]) => (
                  <option
                    key={itemYear}
                    value={itemYear}
                  >
                    {itemYear}
                  </option>
                ))}
              </select>

              <select
                className="ng-select"
                value={level}
                onChange={(e) =>
                  setLevel(e.target.value)
                }
              >
                <option value="">
                  Achievement Level
                </option>

                <option value="top-25">
                  Top 25
                </option>

                <option value="top-50">
                  Top 50
                </option>

                <option value="50-plus">
                  50+
                </option>
              </select>

            </div>

            {/* CLEAR FILTER */}

            {hasFilters && (
              <button
                type="button"
                className="ng-clear"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            )}

            {/* =================================================
                LOCAL ACHIEVERS + MANAGED ACHIEVEMENTS
            ================================================= */}

            <div className="ng-cards">

              {filtered.length ? (
                filtered.map((student) => (

                  <article
                    className="ng-card"
                    key={student.id}
                  >

                    <div className="ng-card-image">

                      <img
                        src={student.image}
                        alt={student.name}
                        loading="lazy"
                      />

                      <span
                        className={
                          `ng-exam-badge ${
                            student.exam === "GATE"
                              ? "gate"
                              : ""
                          }`
                        }
                      >
                        {student.exam}
                      </span>

                      <span className="ng-rank-badge">
                        Rank
                        <br />
                        {student.rank}
                      </span>

                    </div>

                    <div className="ng-card-body">

                      <h3 className="ng-card-name">
                        {student.name}
                      </h3>

                      <div className="ng-detail">
                        <Users size={11} />
                        {student.branch}
                      </div>

                      <div className="ng-detail">
                        <BookOpen size={11} />
                        {student.subject}
                      </div>

                      <div className="ng-detail">
                        <CalendarDays size={11} />
                        Year: {student.year}
                      </div>

                      <div className="ng-detail">
                        <Target size={11} />
                        Score: {student.score}
                      </div>

                      <button
                        type="button"
                        className="ng-card-button"
                        onClick={() =>
                          setSelected(student)
                        }
                      >
                        View Details
                        <ArrowRight size={12} />
                      </button>

                    </div>

                  </article>

                ))
              ) : (
                <div className="ng-empty">
                  No achievers match your selected filters.
                </div>
              )}

              {/* =================================================
                  BACKEND / MANAGED ACHIEVEMENTS
              ================================================= */}

              <ManagedAchievements
                category={[
                  "NET",
                  "GATE",
                  "NET / GATE",
                ]}
                filters={{
                  search,
                  exam,
                  subject,
                  year,
                  level,
                }}
                renderAchievement={(achievement) => {

                  const student = {
                    id: achievement.id,

                    name:
                      achievement.student_name ||
                      achievement.title ||
                      "Achievement",

                    exam:
                      achievement.exam ||
                      (
                        achievement.category === "GATE"
                          ? "GATE"
                          : "NET"
                      ),

                    branch:
                      achievement.course ||
                      achievement.subject ||
                      achievement.title ||
                      "Academic Achievement",

                    year:
                      achievement.year ||
                      "—",

                    score:
                      achievement.score ||
                      achievement.description ||
                      "See achievement details",

                    rank:
                      achievement.rank ||
                      "Qualified",

                    subject:
                      achievement.subject ||
                      achievement.title ||
                      "Academic Achievement",

                    image:
                      achievement.image_url ||
                      "/images/collegebg.png",
                  };

                  return (
                    <article
                      className="ng-card"
                      key={`managed-${achievement.id}`}
                    >

                      <div className="ng-card-image">

                        <img
                          src={student.image}
                          alt={student.name}
                          loading="lazy"
                        />

                        <span
                          className={
                            `ng-exam-badge ${
                              student.exam === "GATE"
                                ? "gate"
                                : ""
                            }`
                          }
                        >
                          {student.exam}
                        </span>

                        <span className="ng-rank-badge">
                          {student.rank}
                        </span>

                      </div>

                      <div className="ng-card-body">

                        <h3 className="ng-card-name">
                          {student.name}
                        </h3>

                        <div className="ng-detail">
                          <Users size={11} />
                          {student.branch}
                        </div>

                        <div className="ng-detail">
                          <BookOpen size={11} />
                          {student.subject}
                        </div>

                        <div className="ng-detail">
                          <CalendarDays size={11} />
                          Year: {student.year}
                        </div>

                        <div className="ng-detail">
                          <Target size={11} />
                          {student.score}
                        </div>

                        <button
                          type="button"
                          className="ng-card-button"
                          onClick={() =>
                            setSelected(student)
                          }
                        >
                          View Details
                          <ArrowRight size={12} />
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

            <section className="ng-top">

              <div className="ng-top-heading">

                <small>
                  Top Performers
                </small>

                <h2>
                  Our NET &amp; GATE Top Performers
                </h2>

              </div>

              <div className="ng-top-grid">

                {topPerformers.map((student) => (

                  <article
                    className="ng-top-card"
                    key={student.position}
                  >

                    <div className="ng-top-photo">

                      <img
                        src={student.image}
                        alt={student.name}
                        loading="lazy"
                      />

                      <span className="ng-medal-number">
                        {student.position}
                      </span>

                    </div>

                    <div>

                      <span className="ng-top-label">
                        {student.label}
                      </span>

                      <div className="ng-top-name">
                        {student.name}
                      </div>

                      <div className="ng-top-meta">
                        {student.exam} |{" "}
                        {student.score}
                      </div>

                      <div className="ng-top-meta">
                        Subject:{" "}
                        {student.subject}
                      </div>

                      <div className="ng-top-meta">
                        Year:{" "}
                        {student.year}
                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </section>

          </div>

        </section>

        {/* =====================================================
            YEAR JOURNEY
        ===================================================== */}

        <section className="ng-years-section">

          <div className="ng-container">

            <div className="ng-years-heading">

              <small>
                Our Journey
              </small>

              <h2>
                Journey Through the Years
              </h2>

            </div>

            <div className="ng-years">

              {years.map(
                ([itemYear, count], index) => (

                  <button
                    type="button"
                    className={
                      `ng-year ${
                        year === itemYear ||
                        (!year && index === 0)
                          ? "active"
                          : ""
                      }`
                    }
                    key={itemYear}
                    onClick={() => {
                      if (itemYear === year) {
                        setYear("");
                      } else {
                        setYear(itemYear);
                      }

                      document
                        .getElementById(
                          "net-gate-achievers"
                        )
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >

                    <span className="ng-year-icon">
                      <Trophy size={15} />
                    </span>

                    <span>

                      <span className="ng-year-number">
                        {itemYear}
                      </span>

                      <span className="ng-year-count">
                        {count}
                      </span>

                    </span>

                    <ArrowRight
                      size={14}
                      className="ng-year-arrow"
                    />

                  </button>

                )
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="ng-container">

          <section className="ng-cta">

            <div className="ng-cta-content">

              <h2>
                The Legacy{" "}
                <span>
                  Continues
                </span>
              </h2>

              <p>
                Your Name Could Be Here.
                Be a part of Yaduvanshi's
                next success story.
              </p>

              <Link
                to="/courses"
                className="ng-btn ng-btn-primary"
              >
                Explore Programs
                <ArrowRight size={15} />
              </Link>

            </div>

          </section>

        </div>

        {/* =====================================================
            DETAILS MODAL
        ===================================================== */}

        {selected && (

          <div
            className="ng-modal-overlay"
            onClick={() =>
              setSelected(null)
            }
          >

            <div
              className="ng-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                type="button"
                className="ng-modal-close"
                onClick={() =>
                  setSelected(null)
                }
                aria-label="Close achievement details"
              >
                <X size={19} />
              </button>

              <div className="ng-modal-photo">

                <img
                  src={
                    selected.image ||
                    "/images/collegebg.png"
                  }
                  alt={selected.name}
                />

              </div>

              <div className="ng-modal-body">

                <span className="ng-modal-badge">
                  {selected.exam} ACHIEVER
                </span>

                <h2>
                  {selected.name}
                </h2>

                <div className="ng-modal-info">

                  <div>
                    <small>
                      Exam
                    </small>

                    <strong>
                      {selected.exam}
                    </strong>
                  </div>

                  <div>
                    <small>
                      Subject
                    </small>

                    <strong>
                      {selected.subject}
                    </strong>
                  </div>

                  <div>
                    <small>
                      Year
                    </small>

                    <strong>
                      {selected.year}
                    </strong>
                  </div>

                  <div>
                    <small>
                      Score
                    </small>

                    <strong>
                      {selected.score}
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        )}

      </main>
    </>
  );
}