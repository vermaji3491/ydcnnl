import { Link } from "react-router-dom";
import React, { useMemo, useState } from "react";
import ManagedAchievements from "../components/ManagedAchievements";
import {
  Trophy,
  Medal,
  Award,
  Search,
  GraduationCap,
  Users,
  CalendarDays,
  ArrowRight,
  Crown,
  Star,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const YEARS = [
  2026,
  2025,
  2024,
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
  2017,
  2016,
  2015,
];

/*
  ============================================================
  UNIVERSITY POSITION HOLDERS
  ============================================================

  Add your real students here.

  Example:

  {
    id: 1,
    year: 2026,
    name: "Student Name",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2025-26",
    image: "/images/achievements/student-name.jpg"
  }

  You can add hundreds/thousands of records using the
  same structure.
*/

const positionHolders = [
  {
    id: 1,
    year: 2026,
    name: "Priya Sharma",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2025-26",
    image: "/images/achievements/2026/priya-sharma.jpg",
  },

  {
    id: 2,
    year: 2026,
    name: "Rahul Verma",
    course: "B.Com.",
    position: "2nd",
    university: "Indira Gandhi University",
    session: "2025-26",
    image: "/images/achievements/2026/rahul-verma.jpg",
  },

  {
    id: 3,
    year: 2026,
    name: "Sneha Patel",
    course: "B.A.",
    position: "3rd",
    university: "Indira Gandhi University",
    session: "2025-26",
    image: "/images/achievements/2026/sneha-patel.jpg",
  },

  {
    id: 4,
    year: 2025,
    name: "Rohan Singh",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2024-25",
    image: "/images/achievements/2025/rohan-singh.jpg",
  },

  {
    id: 5,
    year: 2025,
    name: "Neha Gupta",
    course: "B.Com.",
    position: "2nd",
    university: "Indira Gandhi University",
    session: "2024-25",
    image: "/images/achievements/2025/neha-gupta.jpg",
  },

  {
    id: 6,
    year: 2024,
    name: "Anjali Verma",
    course: "B.Com.",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2023-24",
    image: "/images/achievements/2024/anjali-verma.jpg",
  },

  {
    id: 7,
    year: 2024,
    name: "Sahil Khan",
    course: "B.Sc.",
    position: "2nd",
    university: "Indira Gandhi University",
    session: "2023-24",
    image: "/images/achievements/2024/sahil-khan.jpg",
  },

  {
    id: 8,
    year: 2023,
    name: "Neha Sharma",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2022-23",
    image: "/images/achievements/2023/neha-sharma.jpg",
  },

  {
    id: 9,
    year: 2022,
    name: "Rohit Kumar",
    course: "B.Com.",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2021-22",
    image: "/images/achievements/2022/rohit-kumar.jpg",
  },

  {
    id: 10,
    year: 2021,
    name: "Pooja Singh",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2020-21",
    image: "/images/achievements/2021/pooja-singh.jpg",
  },

  {
    id: 11,
    year: 2020,
    name: "Aman Kumar",
    course: "B.Com.",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2019-20",
    image: "/images/achievements/2020/aman-kumar.jpg",
  },

  {
    id: 12,
    year: 2019,
    name: "Snehal Gupta",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2018-19",
    image: "/images/achievements/2019/snehal-gupta.jpg",
  },

  {
    id: 13,
    year: 2018,
    name: "Vivek Yadav",
    course: "B.Com.",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2017-18",
    image: "/images/achievements/2018/vivek-yadav.jpg",
  },

  {
    id: 14,
    year: 2017,
    name: "Pallavi Sharma",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2016-17",
    image: "/images/achievements/2017/pallavi-sharma.jpg",
  },

  {
    id: 15,
    year: 2016,
    name: "Rohini Gupta",
    course: "B.Com.",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2015-16",
    image: "/images/achievements/2016/rohini-gupta.jpg",
  },

  {
    id: 16,
    year: 2015,
    name: "Tanya Sharma",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Indira Gandhi University",
    session: "2014-15",
    image: "/images/achievements/2015/tanya-sharma.jpg",
  },
  {
    id: 17,
    year: 2026,
    name: "Demo Student Aditi Rao",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 18,
    year: 2026,
    name: "Demo Student Arjun Mehta",
    course: "B.Com.",
    position: "2nd",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 19,
    year: 2026,
    name: "Demo Student Kavya Sharma",
    course: "B.A.",
    position: "3rd",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 20,
    year: 2026,
    name: "Demo Student Rohan Verma",
    course: "B.Sc.",
    position: "1st",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 21,
    year: 2026,
    name: "Demo Student Meera Singh",
    course: "B.Com.",
    position: "2nd",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 22,
    year: 2026,
    name: "Demo Student Kabir Yadav",
    course: "B.A.",
    position: "3rd",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 23,
    year: 2026,
    name: "Demo Student Sana Khan",
    course: "B.Sc. (PCM)",
    position: "1st",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 24,
    year: 2026,
    name: "Demo Student Nikhil Kumar",
    course: "B.Com.",
    position: "2nd",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 25,
    year: 2026,
    name: "Demo Student Isha Patel",
    course: "B.A.",
    position: "3rd",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 26,
    year: 2026,
    name: "Demo Student Dev Malhotra",
    course: "B.Sc.",
    position: "1st",
    university: "Sample Data - Indira Gandhi University",
    session: "2025-26",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85",
  },
];

const fallbackImages = [
  "/images/campus1.png",
  "/images/campus2.png",
  "/images/campus3.png",
  "/images/handon.png",
];

function Achievement() {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const [selectedPosition, setSelectedPosition] =
    useState("All Positions");

  const courses = useMemo(() => {
    return [
      "All Courses",
      ...Array.from(
        new Set(positionHolders.map((student) => student.course))
      ),
    ];
  }, []);

  const positions = [
    "All Positions",
    "1st",
    "2nd",
    "3rd",
  ];

  const filteredStudents = useMemo(() => {
    return positionHolders.filter((student) => {
      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.course
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCourse =
        selectedCourse === "All Courses" ||
        student.course === selectedCourse;

      const matchesPosition =
        selectedPosition === "All Positions" ||
        student.position === selectedPosition;

      return (
        matchesSearch &&
        matchesCourse &&
        matchesPosition
      );
    });
  }, [search, selectedCourse, selectedPosition]);

  const totalPositions = 1231;

  const getStudentsByYear = (year) => {
    return filteredStudents.filter(
      (student) => student.year === year
    );
  };

  return (
    <>
      <style>{`

        /* ======================================================
           GLOBAL
        ====================================================== */

        .achievement-page {
          background: #fffdf9;
          color: #243247;
          overflow: hidden;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .achievement-page * {
          box-sizing: border-box;
        }

        .achievement-container {
          width: min(1280px, calc(100% - 40px));
          margin: 0 auto;
        }

        .achievement-serif {
          font-family: Georgia, "Times New Roman", serif;
        }


        /* ======================================================
           HERO
        ====================================================== */

        .achievement-hero {
          position: relative;
          min-height: 570px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(3, 28, 65, 0.98) 0%,
              rgba(6, 36, 82, 0.94) 44%,
              rgba(6, 36, 82, 0.65) 70%,
              rgba(6, 36, 82, 0.25) 100%
            ),
            url("/images/collegebg.png");

          background-size: cover;
          background-position: center;
          color: white;
        }

        .achievement-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 78% 42%,
              rgba(255, 118, 0, 0.16),
              transparent 28%
            );
          pointer-events: none;
        }

        .achievement-watermark {
          position: absolute;
          right: 4%;
          top: 80px;
          width: 430px;
          opacity: 0.08;
          z-index: 1;
        }

        .achievement-watermark img {
          width: 100%;
          display: block;
          filter: grayscale(1) brightness(4);
        }

        .achievement-hero-inner {
          position: relative;
          z-index: 3;
          width: min(1280px, calc(100% - 40px));
          min-height: 570px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }

        .achievement-hero-content {
          width: 58%;
          padding: 75px 0 145px;
        }

        .achievement-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 30px;
          background: rgba(255, 118, 0, 0.14);
          border: 1px solid rgba(255, 166, 67, 0.4);
          color: #ffb13b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .achievement-kicker::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff7600;
          box-shadow: 0 0 0 5px rgba(255,118,0,.12);
        }

        .achievement-hero h1 {
          margin: 0;
          max-width: 850px;
          font-size: clamp(46px, 5.2vw, 78px);
          line-height: 0.98;
          letter-spacing: -2px;
          font-weight: 700;
        }

        .achievement-hero h1 span {
          display: block;
          color: #ff9d22;
        }

        .achievement-hero-description {
          max-width: 650px;
          margin: 25px 0 0;
          color: #dbe7f7;
          font-size: 18px;
          line-height: 1.75;
        }

        .achievement-hero-buttons {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .achievement-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 22px;
          border-radius: 10px;
          background: #ff7600;
          color: white;
          text-decoration: none;
          font-weight: 800;
          box-shadow: 0 12px 28px rgba(255,118,0,.25);
          transition: .25s ease;
        }

        .achievement-btn-primary:hover {
          transform: translateY(-2px);
          background: #e96500;
        }

        .achievement-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 22px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.35);
          color: white;
          text-decoration: none;
          font-weight: 700;
          background: rgba(255,255,255,.07);
          transition: .25s ease;
        }

        .achievement-btn-secondary:hover {
          background: white;
          color: #062452;
        }

        .achievement-trophy {
          position: absolute;
          right: 5%;
          bottom: 80px;
          width: 370px;
          height: 370px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .achievement-trophy::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 174, 55, .08);
          border: 1px solid rgba(255, 174, 55, .25);
          box-shadow:
            0 0 70px rgba(255, 174, 55, .10),
            inset 0 0 50px rgba(255, 174, 55, .04);
        }

        .achievement-trophy-icon {
          position: relative;
          width: 210px;
          height: 210px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(145deg, #fff0bf, #ffb62e 50%, #b66a00);
          color: #6b4100;
          box-shadow:
            0 30px 60px rgba(0,0,0,.28),
            inset 0 4px 8px rgba(255,255,255,.8);
        }

        .achievement-trophy-icon svg {
          width: 100px;
          height: 100px;
        }

        .achievement-trophy-label {
          position: absolute;
          bottom: 3px;
          background: #062452;
          border: 2px solid #ffae32;
          color: #ffce72;
          padding: 9px 22px;
          border-radius: 30px;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 1px;
        }


        /* ======================================================
           WAVE
        ====================================================== */

        .achievement-wave {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 125px;
          z-index: 5;
        }

        .achievement-wave svg {
          display: block;
          width: 100%;
          height: 100%;
        }


        /* ======================================================
           STATS
        ====================================================== */

        .achievement-stats-wrap {
          position: relative;
          z-index: 10;
          margin-top: -40px;
        }

        .achievement-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: white;
          border-radius: 18px;
          box-shadow: 0 18px 50px rgba(6,36,82,.10);
          border: 1px solid #e9edf3;
          overflow: hidden;
        }

        .achievement-stat {
          position: relative;
          min-height: 125px;
          padding: 25px 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .achievement-stat:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 25%;
          height: 50%;
          width: 1px;
          background: #e9edf3;
        }

        .achievement-stat-icon {
          flex: 0 0 54px;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #062452;
          background: #fff0cb;
        }

        .achievement-stat-number {
          font-family: Georgia, serif;
          color: #062452;
          font-size: 29px;
          line-height: 1;
          font-weight: 700;
        }

        .achievement-stat-label {
          margin-top: 6px;
          color: #6b7789;
          font-size: 12px;
          font-weight: 700;
        }


        /* ======================================================
           INTRO
        ====================================================== */

        .achievement-intro {
          text-align: center;
          padding: 75px 0 35px;
        }

        .achievement-section-label {
          color: #df7100;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .achievement-intro h2 {
          margin: 9px 0 12px;
          color: #062452;
          font-size: clamp(32px, 4vw, 49px);
          line-height: 1.05;
        }

        .achievement-intro p {
          max-width: 730px;
          margin: auto;
          color: #667386;
          line-height: 1.8;
          font-size: 15px;
        }


        /* ======================================================
           SEARCH / FILTER
        ====================================================== */

        .achievement-filter-box {
          margin: 20px auto 65px;
          padding: 18px;
          border-radius: 18px;
          background: white;
          border: 1px solid #e5eaf1;
          box-shadow: 0 14px 35px rgba(6,36,82,.06);
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 13px;
        }

        .achievement-search {
          position: relative;
        }

        .achievement-search svg {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #8994a4;
        }

        .achievement-input,
        .achievement-select {
          width: 100%;
          height: 49px;
          border: 1px solid #dfe5ed;
          border-radius: 10px;
          outline: none;
          background: #fff;
          color: #27364b;
          font: inherit;
          padding: 0 15px;
        }

        .achievement-input {
          padding-left: 45px;
        }

        .achievement-input:focus,
        .achievement-select:focus {
          border-color: #ff7600;
          box-shadow: 0 0 0 3px rgba(255,118,0,.09);
        }


        /* ======================================================
           YEAR SECTION
        ====================================================== */

        .achievement-year-section {
          margin-bottom: 70px;
          scroll-margin-top: 100px;
        }

        .achievement-year-heading {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 22px;
        }

        .achievement-year-number {
          position: relative;
          min-width: 130px;
          padding: 12px 21px;
          border-radius: 12px;
          background: #062452;
          color: white;
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 700;
          text-align: center;
          box-shadow: 0 8px 22px rgba(6,36,82,.16);
        }

        .achievement-year-section:first-of-type .achievement-year-number {
          background: linear-gradient(135deg, #ff7600, #eaa000);
        }

        .achievement-year-line {
          height: 1px;
          flex: 1;
          background: linear-gradient(
            90deg,
            #d7dde6,
            transparent
          );
        }

        .achievement-year-count {
          color: #7b8798;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }


        /* ======================================================
           POSITION CARDS
        ====================================================== */

        .achievement-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .achievement-card {
          position: relative;
          overflow: hidden;
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8ef;
          box-shadow: 0 8px 25px rgba(6,36,82,.055);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .achievement-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(6,36,82,.13);
        }

        .achievement-card-top {
          height: 7px;
          background: #062452;
        }

        .achievement-card:first-child .achievement-card-top {
          background: #ff7600;
        }

        .achievement-card-body {
          padding: 20px;
        }

        .achievement-photo-wrap {
          position: relative;
          width: 100%;
          height: 215px;
          overflow: hidden;
          border-radius: 12px;
          background: #eef2f6;
        }

        .achievement-photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .achievement-card:hover .achievement-photo {
          transform: scale(1.04);
        }

        .achievement-rank {
          position: absolute;
          left: 12px;
          bottom: 12px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #fff3c9, #ffad1f);
          color: #704100;
          border: 3px solid white;
          box-shadow: 0 6px 15px rgba(0,0,0,.18);
          font-size: 13px;
          font-weight: 900;
        }

        .achievement-position {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 17px;
          padding: 6px 10px;
          border-radius: 30px;
          background: #fff2db;
          color: #d66b00;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .achievement-card h3 {
          margin: 10px 0 4px;
          color: #062452;
          font-family: Georgia, serif;
          font-size: 22px;
        }

        .achievement-course {
          color: #394a61;
          font-size: 13px;
          font-weight: 800;
        }

        .achievement-university {
          margin-top: 5px;
          color: #788596;
          font-size: 11px;
          line-height: 1.5;
        }

        .achievement-session {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 13px;
          padding-top: 12px;
          border-top: 1px solid #edf0f4;
          color: #778496;
          font-size: 11px;
          font-weight: 700;
        }


        /* ======================================================
           EMPTY YEAR
        ====================================================== */

        .achievement-empty {
          padding: 28px;
          border: 1px dashed #d5dce5;
          border-radius: 14px;
          background: rgba(255,255,255,.6);
          color: #8a95a4;
          text-align: center;
          font-size: 13px;
        }


        /* ======================================================
           LEGACY CTA
        ====================================================== */

        .achievement-legacy {
          position: relative;
          overflow: hidden;
          margin-top: 15px;
          background:
            linear-gradient(
              90deg,
              rgba(6,36,82,.98),
              rgba(6,36,82,.88)
            ),
            url("/images/campus1.png");
          background-size: cover;
          background-position: center;
          color: white;
        }

        .achievement-legacy-inner {
          position: relative;
          z-index: 2;
          width: min(1280px, calc(100% - 40px));
          min-height: 250px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .achievement-legacy-content {
          max-width: 700px;
          padding: 40px 0;
        }

        .achievement-legacy-small {
          color: #ffac32;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .achievement-legacy h2 {
          margin: 8px 0;
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
        }

        .achievement-legacy h2 span {
          color: #ff9c20;
        }

        .achievement-legacy p {
          margin: 0;
          color: #d4deeb;
          line-height: 1.7;
        }

        .achievement-legacy-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 23px;
          background: #ff7600;
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 800;
          white-space: nowrap;
          transition: .25s ease;
        }

        .achievement-legacy-btn:hover {
          background: #e96600;
          transform: translateY(-2px);
        }


        /* ======================================================
           RESPONSIVE
        ====================================================== */

        @media (max-width: 1150px) {

          .achievement-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .achievement-trophy {
            right: 0;
            transform: scale(.85);
          }

          .achievement-hero-content {
            width: 64%;
          }
        }


        @media (max-width: 900px) {

          .achievement-hero {
            min-height: 670px;
          }

          .achievement-hero-inner {
            min-height: 670px;
          }

          .achievement-hero-content {
            width: 100%;
            padding-bottom: 220px;
          }

          .achievement-trophy {
            width: 220px;
            height: 220px;
            right: 50%;
            transform: translateX(50%) scale(.65);
            bottom: 40px;
          }

          .achievement-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .achievement-stat:nth-child(2)::after {
            display: none;
          }

          .achievement-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .achievement-filter-box {
            grid-template-columns: 1fr;
          }

          .achievement-legacy-inner {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 35px 0;
          }
        }


        @media (max-width: 600px) {

          .achievement-container {
            width: min(100% - 24px, 1280px);
          }

          .achievement-hero-inner {
            width: calc(100% - 28px);
          }

          .achievement-hero h1 {
            font-size: 45px;
            letter-spacing: -1.5px;
          }

          .achievement-hero-description {
            font-size: 15px;
          }

          .achievement-watermark {
            width: 250px;
            right: -40px;
          }

          .achievement-stats {
            grid-template-columns: 1fr;
          }

          .achievement-stat {
            min-height: 100px;
          }

          .achievement-stat:not(:last-child)::after {
            top: auto;
            right: 10%;
            left: 10%;
            bottom: 0;
            width: 80%;
            height: 1px;
          }

          .achievement-grid {
            grid-template-columns: 1fr;
          }

          .achievement-year-heading {
            flex-wrap: wrap;
          }

          .achievement-year-line {
            display: none;
          }

          .achievement-year-count {
            width: 100%;
          }

          .achievement-year-number {
            min-width: 105px;
            font-size: 25px;
          }

          .achievement-photo-wrap {
            height: 250px;
          }

          .achievement-wave {
            height: 70px;
          }
        }

      `}</style>

      <main className="achievement-page">

        {/* ====================================================
            HERO
        ==================================================== */}

        <section className="achievement-hero">

          <div className="achievement-watermark">
            <img
              src="/images/yaduvanshilogo.png"
              alt=""
            />
          </div>

          <div className="achievement-hero-inner">

            <div className="achievement-hero-content">

              <div className="achievement-kicker">
                Academic Excellence
              </div>

              <h1 className="achievement-serif">
                University Position
                <span>Holders</span>
              </h1>

              <p className="achievement-hero-description">
                Celebrating the brilliance, dedication and
                academic excellence of Yaduvanshi Degree
                College students who have secured positions
                at the university level over the years.
              </p>

              <div className="achievement-hero-buttons">

                <a
                  href="#position-holders"
                  className="achievement-btn-primary"
                >
                  Explore Position Holders
                  <ArrowRight size={17} />
                </a>

                <Link
                  to="/courses"
                  className="achievement-btn-secondary"
                >
                  Explore Our Programs
                </Link>

              </div>

            </div>

            <div className="achievement-trophy">

              <div className="achievement-trophy-icon">
                <Trophy />
              </div>

              <div className="achievement-trophy-label">
                EXCELLENCE IN EDUCATION
              </div>

            </div>

          </div>

          {/* HERO WAVE */}

          <div className="achievement-wave">

            <svg
              viewBox="0 0 1536 220"
              preserveAspectRatio="none"
              aria-hidden="true"
            >

              <path
                d="
                  M0,110
                  C160,205 355,208 555,133
                  C775,52 990,90 1160,127
                  C1280,153 1365,135 1440,88
                  L1536,45
                  L1536,220
                  L0,220
                  Z
                "
                fill="#fffdf9"
              />

              <path
                d="
                  M0,104
                  C160,199 355,202 555,126
                  C775,45 990,84 1160,121
                  C1280,147 1365,129 1440,82
                "
                fill="none"
                stroke="#ff7600"
                strokeWidth="5"
              />

            </svg>

          </div>

        </section>


        {/* ====================================================
            STATISTICS
        ==================================================== */}

        <section className="achievement-stats-wrap">

          <div className="achievement-container">

            <div className="achievement-stats">

              <div className="achievement-stat">

                <div className="achievement-stat-icon">
                  <Trophy size={26} />
                </div>

                <div>
                  <div className="achievement-stat-number">
                    1231+
                  </div>

                  <div className="achievement-stat-label">
                    University Positions
                  </div>
                </div>

              </div>


              <div className="achievement-stat">

                <div className="achievement-stat-icon">
                  <CalendarDays size={25} />
                </div>

                <div>
                  <div className="achievement-stat-number">
                    11+
                  </div>

                  <div className="achievement-stat-label">
                    Years of Excellence
                  </div>
                </div>

              </div>


              <div className="achievement-stat">

                <div className="achievement-stat-icon">
                  <GraduationCap size={27} />
                </div>

                <div>
                  <div className="achievement-stat-number">
                    50+
                  </div>

                  <div className="achievement-stat-label">
                    Academic Programs
                  </div>
                </div>

              </div>


              <div className="achievement-stat">

                <div className="achievement-stat-icon">
                  <Users size={25} />
                </div>

                <div>
                  <div className="achievement-stat-number">
                    1000+
                  </div>

                  <div className="achievement-stat-label">
                    Student Achievers
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            INTRO
        ==================================================== */}

        <section className="achievement-intro">

          <div className="achievement-container">

            <div className="achievement-section-label">
              Our Academic Legacy
            </div>

            <h2 className="achievement-serif">
              University Position Holders
            </h2>

            <p>
              A proud record of students who have achieved
              university-level positions through dedication,
              discipline and academic excellence. Explore
              their achievements year by year.
            </p>

          </div>

        </section>


        {/* ====================================================
            SEARCH + FILTER
        ==================================================== */}

        <section id="position-holders">

          <div className="achievement-container">

            <div className="achievement-filter-box">

              <div className="achievement-search">

                <Search size={18} />

                <input
                  type="text"
                  className="achievement-input"
                  placeholder="Search student or course..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>


              <select
                className="achievement-select"
                value={selectedCourse}
                onChange={(e) =>
                  setSelectedCourse(e.target.value)
                }
              >

                {courses.map((course) => (
                  <option
                    key={course}
                    value={course}
                  >
                    {course}
                  </option>
                ))}

              </select>


              <select
                className="achievement-select"
                value={selectedPosition}
                onChange={(e) =>
                  setSelectedPosition(e.target.value)
                }
              >

                {positions.map((position) => (
                  <option
                    key={position}
                    value={position}
                  >
                    {position}
                  </option>
                ))}

              </select>

            </div>


            {/* ==================================================
                ALL YEARS
            ================================================== */}

            {YEARS.map((year) => {

              const students = getStudentsByYear(year);

              return (

                <section
                  key={year}
                  className="achievement-year-section"
                  id={`year-${year}`}
                >

                  <div className="achievement-year-heading">

                    <div className="achievement-year-number">
                      {year}
                    </div>

                    <div className="achievement-year-line"></div>

                    <div className="achievement-year-count">
                      {students.length > 0
                        ? `${students.length} Position Holder${
                            students.length !== 1
                              ? "s"
                              : ""
                          }`
                        : "Position holders will appear here"}
                    </div>

                  </div>


                  {students.length > 0 ? (

                    <div className="achievement-grid">

                      {students.map((student, index) => {

                        const fallback =
                          fallbackImages[
                            index %
                              fallbackImages.length
                          ];

                        return (

                          <article
                            className="achievement-card"
                            key={student.id}
                          >

                            <div className="achievement-card-top"></div>

                            <div className="achievement-card-body">

                              <div className="achievement-photo-wrap">

                                <img
                                  className="achievement-photo"
                                  src={
                                    student.image ||
                                    fallback
                                  }
                                  alt={student.name}
                                  onError={(e) => {
                                    e.currentTarget.src =
                                      fallback;
                                  }}
                                />

                                <div className="achievement-rank">
                                  {student.position}
                                </div>

                              </div>


                              <div className="achievement-position">

                                {student.position === "1st" ? (
                                  <Crown size={12} />
                                ) : (
                                  <Medal size={12} />
                                )}

                                University Position
                              </div>


                              <h3>
                                {student.name}
                              </h3>

                              <div className="achievement-course">
                                {student.course}
                              </div>

                              <div className="achievement-university">
                                {student.university}
                              </div>

                              <div className="achievement-session">

                                <CalendarDays size={13} />

                                Session {student.session}

                              </div>

                            </div>

                          </article>

                        );
                      })}

                    </div>

                  ) : (

                    <div className="achievement-empty">

                      Position-holder records for{" "}
                      <strong>{year}</strong>{" "}
                      will appear here.

                    </div>

                  )}

                </section>

              );

            })}

          </div>

        </section>


        {/* ====================================================
            LEGACY CTA
        ==================================================== */}

        <ManagedAchievements />

        <section className="achievement-legacy">

          <div className="achievement-legacy-inner">

            <div className="achievement-legacy-content">

              <div className="achievement-legacy-small">
                The Legacy Continues
              </div>

              <h2 className="achievement-serif">
                Your Name Could{" "}
                <span>Be Here</span>
              </h2>

              <p>
                Work hard. Stay focused. Make your mark.
                The next university position holder could
                be you.
              </p>

            </div>


            <Link
              to="/courses"
              className="achievement-legacy-btn"
            >
              Explore Our Programs
              <ArrowRight size={17} />
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}

export default Achievement;