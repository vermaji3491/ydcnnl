import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ManagedAchievements from "../components/ManagedAchievements";
import {
  Search,
  CalendarDays,
  Users,
  Music,
  Trophy,
  Star,
  ArrowRight,
  X,
  MapPin,
  Clock3,
  Palette,
  Drama,
  Mic2,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    name: "Anjali Sharma",
    category: "Dance",
    event: "Inter College Dance Competition",
    year: "2025",
    course: "B.Sc. (PCM)",
    rank: "1st",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Rohan Verma",
    category: "Music",
    event: "Solo Singing Competition",
    year: "2025",
    course: "B.Com.",
    rank: "1st",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Sneha Patel",
    category: "Art & Craft",
    event: "Art Exhibition",
    year: "2024",
    course: "B.Sc. (Maths)",
    rank: "2nd",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Amit Kumar",
    category: "Drama",
    event: "Street Play Competition",
    year: "2024",
    course: "B.A.",
    rank: "1st",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Priya Singh",
    category: "Group Performance",
    event: "Dance Competition",
    year: "2023",
    course: "B.Com.",
    rank: "1st",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Neha Gupta",
    category: "Music",
    event: "Classical Singing",
    year: "2023",
    course: "B.Sc. (PCM)",
    rank: "2nd",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Karan Mehta",
    category: "Debate",
    event: "Debate Competition",
    year: "2022",
    course: "B.Sc. (Computer Science)",
    rank: "1st",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Isha Sharma",
    category: "Group Performance",
    event: "Annual Cultural Fest",
    year: "2022",
    course: "B.A.",
    rank: "3rd",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "All Categories",
  "Dance",
  "Music",
  "Art & Craft",
  "Drama",
  "Debate",
  "Group Performance",
];

const years = [
  "All Years",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1100&q=85",
];

export default function CulturalEventsAchievement() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("All Years");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const filteredAchievements = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return achievements.filter((item) => {
      const matchesSearch =
        !searchText ||
        `${item.name} ${item.event} ${item.course} ${item.category}`
          .toLowerCase()
          .includes(searchText);

      const matchesCategory =
        category === "All Categories" ||
        item.category === category;

      const matchesYear =
        year === "All Years" ||
        item.year === year;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [search, category, year]);

  return (
    <div className="cea-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        .cea-page {
          --navy: #062452;
          --navy-light: #0b3b78;
          --gold: #ffbd35;
          --orange: #ff7600;
          --cream: #fffdf9;
          --soft: #f5f8fc;
          --text: #17375f;
          --muted: #718198;

          background: var(--cream);
          color: var(--text);
          font-family: "DM Sans", Arial, sans-serif;
          overflow: hidden;
        }

        .cea-page a {
          text-decoration: none;
        }

        .cea-page button,
        .cea-page input,
        .cea-page select {
          font: inherit;
        }

        /* ================= HERO ================= */

        .cea-hero {
          min-height: 485px;
          position: relative;
          overflow: hidden;
          color: white;

          background:
            linear-gradient(
              90deg,
              rgba(2, 20, 48, 0.98) 0%,
              rgba(5, 40, 82, 0.91) 43%,
              rgba(5, 39, 78, 0.45) 73%,
              rgba(2, 19, 44, 0.68) 100%
            ),
            url("https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1900&q=90")
              center/cover;
        }

        .cea-hero-inner {
          width: min(1250px, 92%);
          min-height: 485px;
          margin: auto;

          display: flex;
          align-items: center;

          position: relative;
          z-index: 2;
        }

        .cea-hero-content {
          width: 58%;
          padding: 45px 0 110px;
        }

        .cea-kicker {
          color: #ffc13c;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .cea-hero h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(44px, 6vw, 73px);
          line-height: 0.98;
          letter-spacing: -2px;
        }

        .cea-hero h1 span {
          color: var(--gold);
        }

        .cea-hero-description {
          max-width: 600px;
          margin: 20px 0 10px;

          color: rgba(255, 255, 255, 0.86);
          font-size: 15px;
          line-height: 1.7;
        }

        .cea-script {
          margin: 15px 0 20px;
          color: #ffc13c;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 19px;
        }

        .cea-script span {
          padding: 0 10px;
        }

        .cea-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cea-btn {
          border: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;

          font-size: 11px;
          font-weight: 900;

          transition: 0.2s;
          cursor: pointer;
        }

        .cea-btn-primary {
          background: var(--gold);
          color: var(--navy);
        }

        .cea-btn-primary:hover {
          background: white;
          transform: translateY(-2px);
        }

        .cea-btn-outline {
          border: 1px solid rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.07);
          color: white;
        }

        .cea-btn-outline:hover {
          background: rgba(255,255,255,0.16);
        }

        .cea-hero-photo {
          position: absolute;
          right: 3%;
          top: 35px;

          width: 48%;
          height: 360px;

          border-radius: 180px 0 0 180px;
          overflow: hidden;

          opacity: 0.9;

          background:
            url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1300&q=90")
            center/cover;
        }

        .cea-wave {
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 90px;
          z-index: 4;
        }

        .cea-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ================= STATS ================= */

        .cea-stats-wrap {
          width: min(1100px, 92%);
          margin: -1px auto 0;
          position: relative;
          z-index: 8;
        }

        .cea-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          padding: 9px;

          background: white;
          border: 1px solid #e1e8ef;
          border-radius: 15px;

          box-shadow: 0 14px 35px rgba(6,36,82,0.08);
        }

        .cea-stat {
          min-height: 76px;
          padding: 10px 17px;

          display: flex;
          align-items: center;
          gap: 12px;

          border-right: 1px solid #e7edf3;
        }

        .cea-stat:last-child {
          border-right: 0;
        }

        .cea-stat-icon {
          width: 47px;
          height: 47px;
          flex: 0 0 47px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: #ffe7aa;
          color: var(--navy);
        }

        .cea-stat strong {
          display: block;
          color: var(--navy);
          font-family: Georgia, serif;
          font-size: 26px;
        }

        .cea-stat span {
          display: block;
          margin-top: 3px;
          color: #718198;
          font-size: 9px;
        }

        /* ================= INTRO ================= */

        .cea-intro {
          width: min(900px, 92%);
          margin: auto;
          padding: 60px 0 25px;
          text-align: center;
        }

        .cea-label {
          color: #c77700;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .cea-intro h2 {
          margin: 7px 0;
          color: var(--navy);
          font-family: Georgia, serif;
          font-size: clamp(34px, 4vw, 48px);
        }

        .cea-intro h2 span {
          color: var(--orange);
        }

        .cea-intro p {
          max-width: 720px;
          margin: auto;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* ================= FILTER ================= */

        .cea-filter {
          width: min(1120px, 92%);
          margin: 12px auto 30px;

          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 9px;

          padding: 10px;

          background: white;
          border: 1px solid #dfe7ef;
          border-radius: 13px;

          box-shadow: 0 7px 22px rgba(6,36,82,0.04);
        }

        .cea-field {
          position: relative;
        }

        .cea-field svg {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #718198;
        }

        .cea-field input,
        .cea-field select {
          width: 100%;
          height: 44px;

          padding: 0 12px 0 40px;

          border: 1px solid #dce5ed;
          border-radius: 8px;

          background: #fbfcfe;
          color: #294665;

          outline: none;
        }

        .cea-field input:focus,
        .cea-field select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(255,189,53,0.13);
        }

        /* ================= ACHIEVEMENT CARDS ================= */

        .cea-achievement-grid {
          width: min(1120px, 92%);
          margin: auto;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;

          padding-bottom: 55px;
        }

        .cea-card {
          overflow: hidden;

          background: white;
          border: 1px solid #dfe7ef;
          border-radius: 12px;

          box-shadow: 0 7px 20px rgba(6,36,82,0.05);

          transition: 0.22s;
        }

        .cea-card:hover {
          transform: translateY(-5px);
          border-color: #ffb63a;
          box-shadow: 0 16px 30px rgba(6,36,82,0.12);
        }

        .cea-card-image {
          height: 175px;
          position: relative;
          overflow: hidden;
          background: #eaf0f7;
        }

        .cea-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: 0.3s;
        }

        .cea-card:hover .cea-card-image img {
          transform: scale(1.06);
        }

        .cea-category {
          position: absolute;
          top: 9px;
          left: 9px;

          padding: 5px 8px;

          border-radius: 999px;

          background: #fff0bb;
          color: #8e5700;

          font-size: 8px;
          font-weight: 900;
        }

        .cea-rank {
          position: absolute;
          top: 9px;
          right: 9px;

          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: var(--gold);
          color: white;

          font-size: 8px;
          font-weight: 900;

          border: 2px solid white;
        }

        .cea-card-content {
          padding: 12px;
        }

        .cea-card-content h3 {
          margin: 0 0 4px;
          color: var(--navy);
          font-size: 14px;
        }

        .cea-course {
          color: #df7000;
          font-size: 9px;
          font-weight: 900;
        }

        .cea-event {
          margin-top: 7px;
          color: #718198;
          font-size: 8px;
          line-height: 1.5;
        }

        .cea-year {
          margin-top: 5px;
          color: #8a97a8;
          font-size: 8px;
        }

        .cea-view-details {
          width: 100%;
          margin-top: 10px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;

          padding: 8px 10px;

          border: 0;
          border-radius: 999px;

          background: var(--navy);
          color: white;

          font-size: 8px;
          font-weight: 900;
        }

        .cea-view-details:hover {
          background: var(--gold);
          color: var(--navy);
        }

        /* ================= FEATURE ================= */

        .cea-feature {
          width: min(1120px, 92%);
          margin: 0 auto 55px;

          display: grid;
          grid-template-columns: 0.9fr 1.6fr;
          gap: 13px;

          padding: 14px;

          border-radius: 15px;

          background: linear-gradient(120deg,#062452,#0b427f);
          color: white;
        }

        .cea-feature-content {
          padding: 25px 20px;
        }

        .cea-feature-label {
          color: #ffc13c;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .cea-feature h2 {
          margin: 8px 0;
          font-family: Georgia, serif;
          font-size: 28px;
        }

        .cea-feature p {
          color: rgba(255,255,255,0.74);
          font-size: 10px;
          line-height: 1.7;
        }

        .cea-feature-gallery {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 7px;
          min-height: 250px;
        }

        .cea-feature-gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .cea-feature-gallery img:first-child {
          grid-row: span 2;
        }

        /* ================= TIMELINE ================= */

        .cea-timeline {
          width: min(1120px, 92%);
          margin: 0 auto 65px;
        }

        .cea-section-heading {
          text-align: center;
          margin-bottom: 22px;
        }

        .cea-section-heading small {
          color: #c77700;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .cea-section-heading h2 {
          margin: 7px 0 0;
          color: var(--navy);
          font-family: Georgia, serif;
          font-size: 36px;
        }

        .cea-timeline-grid {
          display: grid;
          grid-template-columns: repeat(6,1fr);
          gap: 9px;
        }

        .cea-time-card {
          padding: 13px;

          display: flex;
          align-items: center;
          gap: 8px;

          border: 1px solid #dfe7ef;
          border-radius: 10px;

          background: white;

          cursor: pointer;
          transition: 0.2s;
        }

        .cea-time-card:hover,
        .cea-time-card.active {
          border-color: #ffb83d;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(6,36,82,0.08);
        }

        .cea-time-icon {
          width: 35px;
          height: 35px;
          flex: 0 0 35px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: #ffe8ac;
          color: var(--navy);
        }

        .cea-time-card strong {
          display: block;
          color: var(--navy);
          font: 700 18px Georgia, serif;
        }

        .cea-time-card span {
          display: block;
          margin-top: 2px;
          color: #7c8b9d;
          font-size: 8px;
        }

        /* ================= CTA ================= */

        .cea-cta {
          background:
            linear-gradient(
              90deg,
              rgba(3,22,52,.97),
              rgba(5,52,99,.9)
            ),
            url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85")
            center/cover;

          color: white;
        }

        .cea-cta-inner {
          width: min(1120px,92%);
          min-height: 145px;
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .cea-cta small {
          color: #ffc13c;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .cea-cta h2 {
          margin: 5px 0;
          font-family: Georgia, serif;
          font-size: 30px;
        }

        .cea-cta h2 span {
          color: #ffbd35;
        }

        .cea-cta p {
          margin: 0;
          color: rgba(255,255,255,.7);
          font-size: 10px;
        }

        /* ================= MODAL ================= */

        .cea-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;

          padding: 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(1,12,30,.85);
          backdrop-filter: blur(8px);
        }

        .cea-modal {
          width: min(850px,100%);
          max-height: calc(100vh - 36px);

          overflow: auto;

          border-radius: 18px;
          background: white;

          box-shadow: 0 30px 90px rgba(0,0,0,.45);
        }

        .cea-modal-top {
          position: relative;

          display: grid;
          grid-template-columns: 44% 56%;

          min-height: 330px;
        }

        .cea-modal-top > img {
          width: 100%;
          height: 100%;
          min-height: 330px;
          object-fit: cover;
        }

        .cea-modal-info {
          padding: 32px;
          color: white;

          background: linear-gradient(
            145deg,
            #062452,
            #0b427f
          );
        }

        .cea-modal-info small {
          color: #ffc13c;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .cea-modal-info h2 {
          margin: 8px 0 4px;
          font-family: Georgia, serif;
          font-size: 31px;
        }

        .cea-modal-info strong {
          color: #ffc13c;
          font-size: 11px;
        }

        .cea-modal-info p {
          color: rgba(255,255,255,.73);
          font-size: 10px;
          line-height: 1.7;
        }

        .cea-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 17px;
        }

        .cea-meta div {
          padding: 10px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 8px;
          background: rgba(255,255,255,.05);
        }

        .cea-meta span {
          display: block;
          color: rgba(255,255,255,.5);
          font-size: 7px;
        }

        .cea-meta b {
          display: block;
          margin-top: 3px;
          font-size: 9px;
        }

        .cea-close {
          position: absolute;
          top: 13px;
          right: 13px;

          width: 37px;
          height: 37px;

          border: 1px solid rgba(255,255,255,.25);
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(0,0,0,.2);
          color: white;
          cursor: pointer;
        }

        .cea-modal-gallery {
          padding: 22px;
        }

        .cea-modal-gallery h3 {
          margin: 0 0 13px;
          color: var(--navy);
          font-family: Georgia, serif;
          font-size: 23px;
        }

        .cea-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 8px;
        }

        .cea-gallery-grid img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:1000px) {
          .cea-achievement-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .cea-timeline-grid {
            grid-template-columns: repeat(3,1fr);
          }

          .cea-hero-content {
            width: 70%;
          }

          .cea-hero-photo {
            opacity: .55;
          }
        }

        @media(max-width:700px) {
          .cea-hero {
            min-height: 620px;
          }

          .cea-hero-inner {
            min-height: 620px;
            align-items: flex-start;
          }

          .cea-hero-content {
            width: 100%;
            padding-top: 65px;
          }

          .cea-hero-photo {
            width: 80%;
            height: 230px;
            right: -15%;
            top: auto;
            bottom: 65px;
          }

          .cea-stats {
            grid-template-columns: 1fr 1fr;
          }

          .cea-stat:nth-child(2) {
            border-right: 0;
          }

          .cea-stat:nth-child(n+3) {
            border-top: 1px solid #e7edf3;
          }

          .cea-filter {
            grid-template-columns: 1fr;
          }

          .cea-feature {
            grid-template-columns: 1fr;
          }

          .cea-timeline-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .cea-cta-inner {
            display: block;
            padding: 28px 0;
          }

          .cea-cta .cea-btn {
            margin-top: 15px;
          }

          .cea-modal-top {
            grid-template-columns: 1fr;
          }

          .cea-modal-top > img {
            height: 250px;
            min-height: 250px;
          }
        }

        @media(max-width:480px) {
          .cea-achievement-grid {
            grid-template-columns: 1fr;
          }

          .cea-stat {
            padding: 8px;
          }

          .cea-stat-icon {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
          }

          .cea-stat strong {
            font-size: 21px;
          }

          .cea-stat span {
            font-size: 7px;
          }

          .cea-timeline-grid {
            grid-template-columns: 1fr 1fr;
          }

          .cea-gallery-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      {/* ================= HERO ================= */}

      <section className="cea-hero">
        <div className="cea-hero-inner">

          <div className="cea-hero-content">

            <div className="cea-kicker">
              Achievements
            </div>

            <h1>
              Cultural Events
              <br />
              <span>Achievements</span>
            </h1>

            <p className="cea-hero-description">
              Celebrating the creativity, talent and passion of our students
              who have brought laurels to the college through outstanding
              performances in various cultural events.
            </p>

            <div className="cea-script">
              Talent <span>•</span>
              Tradition <span>•</span>
              Togetherness
            </div>

            <div className="cea-buttons">

              <a
                href="#achievers"
                className="cea-btn cea-btn-primary"
              >
                Explore Achievements
                <ArrowRight size={14} />
              </a>

              <button
                className="cea-btn cea-btn-outline"
                onClick={() => setShowGallery(true)}
              >
                View Gallery
                <ArrowRight size={14} />
              </button>

            </div>

          </div>

          <div className="cea-hero-photo"></div>

        </div>

        <div className="cea-wave">
          <svg
            viewBox="0 0 1536 150"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 70
                C180 138 390 138 580 84
                C780 28 980 45 1160 77
                C1320 105 1430 90 1536 43
                L1536 150
                L0 150 Z
              "
              fill="#fffdf9"
            />

            <path
              d="
                M0 62
                C180 130 390 130 580 76
                C780 20 980 37 1160 69
                C1320 97 1430 82 1536 35
              "
              fill="none"
              stroke="#ff7600"
              strokeWidth="4"
            />
          </svg>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <div className="cea-stats-wrap">

        <div className="cea-stats">

          <div className="cea-stat">
            <div className="cea-stat-icon">
              <Trophy size={21} />
            </div>

            <div>
              <strong>25+</strong>
              <span>Cultural Event Achievers</span>
            </div>
          </div>

          <div className="cea-stat">
            <div className="cea-stat-icon">
              <Users size={21} />
            </div>

            <div>
              <strong>5+</strong>
              <span>Major Festivals</span>
            </div>
          </div>

          <div className="cea-stat">
            <div className="cea-stat-icon">
              <Music size={21} />
            </div>

            <div>
              <strong>10+</strong>
              <span>Clubs & Societies</span>
            </div>
          </div>

          <div className="cea-stat">
            <div className="cea-stat-icon">
              <Star size={21} />
            </div>

            <div>
              <strong>500+</strong>
              <span>Student Participation</span>
            </div>
          </div>

        </div>

      </div>

      {/* ================= INTRO ================= */}

      <section
        className="cea-intro"
        id="achievers"
      >

        <div className="cea-label">
          Our Cultural Legacy
        </div>

        <h2>
          Cultural Events <span>Achievers</span>
        </h2>

        <p>
          Explore the names of talented students who have won recognition
          in cultural events and competitions. Search achievements by
          student, category and year.
        </p>

      </section>

      {/* ================= FILTER ================= */}

      <section className="cea-filter">

        <div className="cea-field">

          <Search size={16} />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Student Name..."
          />

        </div>

        <div className="cea-field">

          <Music size={16} />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        <div className="cea-field">

          <CalendarDays size={16} />

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

      </section>

      {/* ================= ACHIEVEMENT CARDS ================= */}

      <section className="cea-achievement-grid">

        {filteredAchievements.map((student) => (

          <article
            className="cea-card"
            key={student.id}
          >

            <div className="cea-card-image">

              <img
                src={student.image}
                alt={student.name}
                loading="lazy"
              />

              <span className="cea-category">
                {student.category}
              </span>

              <span className="cea-rank">
                {student.rank}
              </span>

            </div>

            <div className="cea-card-content">

              <h3>
                {student.name}
              </h3>

              <div className="cea-course">
                {student.course}
              </div>

              <div className="cea-event">
                {student.event}
              </div>

              <div className="cea-year">
                Year: {student.year}
              </div>

              <button
                className="cea-view-details"
                onClick={() => setSelectedStudent(student)}
              >
                View Details
                <ArrowRight size={11} />
              </button>

            </div>

          </article>

        ))}

        <ManagedAchievements
          category="Cultural Events"
          filters={{ search, selectedCategory: category, year }}
          renderAchievement={(achievement) => {
            const student = {
              id: achievement.id,
              name: achievement.student_name || achievement.title,
              event: achievement.event || achievement.title,
              course: achievement.course,
              category: "Cultural Events",
              rank: achievement.rank || "Participant",
              year: achievement.year,
              image: achievement.image_url,
              description: achievement.description,
            };

            return (
              <article className="cea-card" key={achievement.id}>
                <div className="cea-card-image">
                  <img src={student.image} alt={student.name} loading="lazy" />
                  <span className="cea-category">{student.category}</span>
                  <span className="cea-rank">{student.rank}</span>
                </div>
                <div className="cea-card-content">
                  <h3>{student.name}</h3>
                  <div className="cea-course">{student.course}</div>
                  <div className="cea-event">{student.event}</div>
                  <div className="cea-year">Year: {student.year}</div>
                  <button className="cea-view-details" onClick={() => setSelectedStudent(student)}>
                    View Details <ArrowRight size={11} />
                  </button>
                </div>
              </article>
            );
          }}
        />

        {filteredAchievements.length === 0 && (

          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              padding: "50px 20px",
              background: "#fff",
              border: "1px dashed #d6e0e9",
              borderRadius: "14px",
            }}
          >
            <Search
              size={30}
              color="#ff7600"
            />

            <h3>
              No Achievement Found
            </h3>

            <p
              style={{
                color: "#78879a",
                fontSize: "12px",
              }}
            >
              Try another student name, category or year.
            </p>

          </div>

        )}

      </section>

      {/* ================= FEATURED ================= */}

      <section className="cea-feature">

        <div className="cea-feature-content">

          <div className="cea-feature-label">
            ★ Featured Achievement
          </div>

          <h2>
            Annual Cultural Fest 2025
          </h2>

          <p>
            Our students showcased exceptional talent in dance, music,
            drama and creative arts during the Annual Cultural Fest.
          </p>

          <button
            className="cea-btn cea-btn-primary"
            onClick={() => setShowGallery(true)}
          >
            View Full Gallery
            <ArrowRight size={13} />
          </button>

        </div>

        <div className="cea-feature-gallery">

          {galleryImages.slice(0, 5).map((image, index) => (

            <img
              key={image}
              src={image}
              alt={`Cultural event ${index + 1}`}
              loading="lazy"
            />

          ))}

        </div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="cea-timeline">

        <div className="cea-section-heading">

          <small>
            Our Journey
          </small>

          <h2>
            Event Achievement Timeline
          </h2>

        </div>

        <div className="cea-timeline-grid">

          {["2025","2024","2023","2022","2021","2020"].map(
            (item, index) => (

              <button
                key={item}
                className={`cea-time-card ${
                  index === 0 ? "active" : ""
                }`}
                onClick={() => setYear(item)}
              >

                <div className="cea-time-icon">
                  <Trophy size={16} />
                </div>

                <div>
                  <strong>{item}</strong>

                  <span>
                    {6 - Math.min(index, 3)} Achievers
                  </span>
                </div>

                <ArrowRight
                  size={13}
                  style={{ marginLeft: "auto" }}
                />

              </button>

            )
          )}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cea-cta">

        <div className="cea-cta-inner">

          <div>

            <small>
              Your Talent Deserves a Bigger Stage
            </small>

            <h2>
              Be Part of Yaduvanshi's{" "}
              <span>Next Celebration</span>
            </h2>

            <p>
              Discover programs and opportunities to showcase your talent.
            </p>

          </div>

          <Link
            to="/courses"
            className="cea-btn cea-btn-primary"
          >
            Explore Programs
            <ArrowRight size={13} />
          </Link>

        </div>

      </section>

      {/* ================= STUDENT MODAL ================= */}

      {selectedStudent && (

        <div
          className="cea-modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedStudent(null);
            }
          }}
        >

          <div className="cea-modal">

            <div className="cea-modal-top">

              <button
                className="cea-close"
                onClick={() => setSelectedStudent(null)}
              >
                <X size={18} />
              </button>

              <img
                src={selectedStudent.image}
                alt={selectedStudent.name}
              />

              <div className="cea-modal-info">

                <small>
                  CULTURAL ACHIEVEMENT
                </small>

                <h2>
                  {selectedStudent.name}
                </h2>

                <strong>
                  {selectedStudent.category}
                  {" · "}
                  {selectedStudent.rank}
                </strong>

                <p>
                  Achievement details for this student can be connected
                  to your official college records. Replace the demo
                  information and photographs with actual achievement data.
                </p>

                <div className="cea-meta">

                  <div>
                    <span>EVENT</span>
                    <b>{selectedStudent.event}</b>
                  </div>

                  <div>
                    <span>YEAR</span>
                    <b>{selectedStudent.year}</b>
                  </div>

                  <div>
                    <span>COURSE</span>
                    <b>{selectedStudent.course}</b>
                  </div>

                  <div>
                    <span>ACHIEVEMENT</span>
                    <b>{selectedStudent.rank} Position</b>
                  </div>

                </div>

              </div>

            </div>

            <div className="cea-modal-gallery">

              <h3>
                Achievement Gallery
              </h3>

              <div className="cea-gallery-grid">

                {[
                  selectedStudent.image,
                  ...galleryImages.slice(0,5),
                ].map((image,index) => (

                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={`${selectedStudent.name} achievement ${index + 1}`}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ================= FULL GALLERY MODAL ================= */}

      {showGallery && (

        <div
          className="cea-modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowGallery(false);
            }
          }}
        >

          <div className="cea-modal">

            <div
              style={{
                position: "relative",
                padding: "30px",
                color: "#fff",
                background:
                  "linear-gradient(135deg,#062452,#0a3977)",
              }}
            >

              <button
                className="cea-close"
                onClick={() => setShowGallery(false)}
              >
                <X size={18} />
              </button>

              <small
                style={{
                  color: "#ffc13c",
                  fontWeight: 900,
                  letterSpacing: 2,
                }}
              >
                CULTURAL EVENTS
              </small>

              <h2
                style={{
                  margin: "8px 0",
                  fontFamily: "Georgia,serif",
                  fontSize: "34px",
                }}
              >
                Cultural Celebration Gallery
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,.72)",
                  fontSize: "11px",
                }}
              >
                A visual collection of dance, music, drama,
                festivals, art and student performances.
              </p>

            </div>

            <div className="cea-modal-gallery">

              <div className="cea-gallery-grid">

                {galleryImages.map((image,index) => (

                  <img
                    key={image}
                    src={image}
                    alt={`Cultural gallery ${index + 1}`}
                    style={{ height: "190px" }}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}