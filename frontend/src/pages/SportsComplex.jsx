import React from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  Dumbbell,
  Users,
  Target,
  Medal,
  Volleyball,
  CircleDot,
  Table2,
  ArrowRight,
  Award,
  ShieldCheck,
  Flame,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const SportsComplex = () => {
  /* =========================================================
     SPORTS FACILITIES
  ========================================================= */

  const sportsFacilities = [
    {
      title: "Cricket Ground",
      subtitle: "Pitch  |  Nets  |  Practice Area",
      image: "/images/campus1.png",
      icon: <CircleDot size={24} />,
    },
    {
      title: "Football Ground",
      subtitle: "Full Size Ground  |  Practice Area",
      image: "/images/campus2.png",
      icon: <CircleDot size={24} />,
    },
    {
      title: "Basketball Court",
      subtitle: "Outdoor Court  |  Practice Sessions",
      image: "/images/campus3.png",
      icon: <CircleDot size={24} />,
    },
    {
      title: "Volleyball Court",
      subtitle: "Professional Court  |  Tournaments",
      image: "/images/campus1.png",
      icon: <Volleyball size={24} />,
    },
    {
      title: "Badminton / Indoor Court",
      subtitle: "Indoor Hall  |  Coaching",
      image: "/images/indoor-sports.jpg",
      icon: <CircleDot size={24} />,
    },
    {
      title: "Indoor Games",
      subtitle: "Table Tennis  |  Chess  |  Carrom",
      image: "/images/indoor-games.jpg",
      icon: <Table2 size={24} />,
    },
  ];

  /* =========================================================
     COACHES
  ========================================================= */

  const coaches = [
    {
      name: "Mr. Rohit Sharma",
      role: "Cricket Coach",
      experience: "Ex-State Player",
      years: "8+ Years",
      achievement: "Championship Training",
      quote: "Discipline today builds champions tomorrow.",
      image: "/images/coach1.jpg",
    },
    {
      name: "Ms. Priya Singh",
      role: "Volleyball Coach",
      experience: "National Player",
      years: "6+ Years",
      achievement: "Teamwork & Fitness",
      quote: "Teamwork creates winners.",
      image: "/images/coach2.jpg",
    },
    {
      name: "Mr. Sanjay Verma",
      role: "Football Coach",
      experience: "AFC Certified",
      years: "7+ Years",
      achievement: "Competitive Training",
      quote: "Better players build better teams.",
      image: "/images/coach3.jpg",
    },
    {
      name: "Mr. Ajay Kumar",
      role: "Fitness Trainer",
      experience: "Certified Trainer",
      years: "5+ Years",
      achievement: "Strength & Conditioning",
      quote: "Fitness is the foundation of success.",
      image: "/images/coach4.jpg",
    },
  ];

  /* =========================================================
     ACHIEVEMENTS
  ========================================================= */

  const achievements = [
    {
      number: "50+",
      title: "Inter-College Wins",
      icon: <Trophy size={24} />,
    },
    {
      number: "25+",
      title: "District Level Medals",
      icon: <Medal size={24} />,
    },
    {
      number: "15+",
      title: "State Level Achievements",
      icon: <Award size={24} />,
    },
    {
      number: "5+",
      title: "National Level Participation",
      icon: <Star size={24} />,
    },
  ];

  /* =========================================================
     SPORTS CATEGORIES
  ========================================================= */

  const categories = [
    {
      icon: <CircleDot />,
      title: "Cricket",
      text: "Practice, teamwork and competitive spirit.",
    },
    {
      icon: <CircleDot />,
      title: "Football",
      text: "Build speed, strategy and team coordination.",
    },
    {
      icon: <Volleyball />,
      title: "Volleyball",
      text: "Develop teamwork, agility and confidence.",
    },
    {
      icon: <CircleDot />,
      title: "Basketball",
      text: "Improve fitness, focus and coordination.",
    },
    {
      icon: <CircleDot />,
      title: "Badminton",
      text: "Fast-paced training for fitness and reflexes.",
    },
    {
      icon: <Table2 />,
      title: "Indoor Games",
      text: "Chess, carrom and table tennis activities.",
    },
  ];

  /* =========================================================
     HELPER FOR IMAGES
  ========================================================= */

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/images/campus1.png";
  };

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL
        ===================================================== */

        .sports-page {
          --navy: #062650;
          --navy-dark: #031a38;
          --navy-light: #0d396d;
          --orange: #ff8a00;
          --orange-dark: #e86f00;
          --cream: #fff8ed;
          --cream-dark: #f7eee1;
          --white: #ffffff;
          --text: #173b67;
          --muted: #61728a;

          min-height: 100vh;
          background: #ffffff;
          color: var(--text);
          font-family:
            "DM Sans",
            Arial,
            sans-serif;
          overflow: hidden;
        }

        .sports-page *,
        .sports-page *::before,
        .sports-page *::after {
          box-sizing: border-box;
        }

        .sports-container {
          width: min(1160px, calc(100% - 80px));
          margin: 0 auto;
        }

        .sports-page h1,
        .sports-page h2,
        .sports-page h3 {
          font-family:
            "Playfair Display",
            Georgia,
            serif;
        }

        .sports-page a {
          text-decoration: none;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .sports-hero {
          position: relative;
          height: 340px;
          overflow: hidden;
          color: white;
          background: var(--navy);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              90deg,
              rgba(2, 28, 59, 0.97) 0%,
              rgba(3, 38, 77, 0.86) 34%,
              rgba(4, 45, 87, 0.35) 70%,
              rgba(2, 28, 59, 0.18) 100%
            ),
            url("/images/sports-hero.jpg");
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 75% 45%,
              rgba(255, 255, 255, 0.07),
              transparent 28%
            );
          pointer-events: none;
        }

        .sports-hero::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -220px;
          top: -270px;
          border-radius: 50%;
          border: 70px solid rgba(255, 255, 255, 0.025);
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          z-index: 5;
        }

        .hero-content {
          width: 72%;
          padding-top: 8px;
        }

        .hero-breadcrumb {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 15px;
          font-size: 11px;
          color: rgba(255,255,255,0.88);
        }

        .hero-breadcrumb a {
          color: white;
        }

        .hero-breadcrumb span:last-child {
          font-weight: 600;
        }

        .hero-label,
        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .hero-label span,
        .section-label span {
          width: 34px;
          height: 3px;
          background: var(--orange);
          display: inline-block;
        }

        .sports-hero h1 {
          margin: 5px 0 2px;
          font-size: clamp(48px, 5.5vw, 70px);
          line-height: 0.98;
          letter-spacing: -2px;
          color: white;
        }

        .sports-hero h1 strong {
          color: var(--orange);
          font-weight: 800;
        }

        .sports-hero h2 {
          margin: 7px 0 13px;
          font-size: clamp(20px, 2.2vw, 27px);
          line-height: 1.05;
          font-style: italic;
          font-weight: 500;
          color: white;
        }

        .hero-values {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 10px;
          font-weight: 600;
          color: rgba(255,255,255,0.95);
        }

        .hero-values b {
          color: var(--orange);
        }

        .hero-side-text {
          position: absolute;
          right: 15px;
          top: 105px;
          display: flex;
          flex-direction: column;
          font-family:
            "Playfair Display",
            Georgia,
            serif;
          font-size: 28px;
          font-style: italic;
          line-height: 1.25;
          color: white;
          transform: rotate(-4deg);
          text-align: center;
          z-index: 6;
        }

        .hero-side-text::after {
          content: "";
          width: 72px;
          height: 3px;
          background: var(--orange);
          margin: 3px auto 0;
          transform: rotate(-12deg);
        }

        /* watermark */

        .sports-hero::before {
          content: "";
          position: absolute;
          width: 270px;
          height: 270px;
          left: 46%;
          top: 48%;
          transform: translate(-50%, -50%);
          background-image: url("/images/yaduvanshilogo.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.045;
          filter: grayscale(100%) brightness(2);
          z-index: 2;
          pointer-events: none;
        }

        /* Hero wave */

        .hero-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 100px;
          z-index: 8;
          pointer-events: none;
        }

        .orange-wave {
          fill: none;
          stroke: var(--orange);
          stroke-width: 12;
          stroke-linecap: round;
        }

        .cream-wave {
          fill: var(--cream);
          stroke: none;
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .sports-intro {
          background: var(--cream);
          padding: 28px 0 35px;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .image-frame {
          position: relative;
          height: 220px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(3, 26, 56, 0.13);
        }

        .image-frame > img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .image-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 9px 15px;
          border-radius: 8px;
          background: rgba(3, 31, 65, 0.95);
          color: white;
        }

        .badge-icon {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          background: var(--orange);
        }

        .image-badge strong {
          display: block;
          font-size: 12px;
        }

        .image-badge span {
          display: block;
          margin-top: 2px;
          font-size: 9px;
          color: #e5ebf3;
        }

        .intro-content {
          position: relative;
        }

        .intro-content h2,
        .facilities-section h2,
        .achievement-content h2,
        .category-heading h2 {
          margin: 6px 0 12px;
          color: var(--navy);
          font-size: clamp(28px, 3vw, 37px);
          line-height: 1.02;
        }

        .intro-content h2 strong,
        .facilities-section h2 strong,
        .achievement-content h2 strong,
        .category-heading h2 strong {
          color: var(--orange);
        }

        .intro-content p {
          margin: 0 0 8px;
          max-width: 600px;
          font-size: 12px;
          line-height: 1.6;
          color: #395473;
        }

        .intro-icons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 16px;
          border-top: 1px solid #e6ddd0;
          padding-top: 12px;
        }

        .intro-icons > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          color: var(--navy);
          border-right: 1px solid #e4dcd0;
          font-size: 10px;
          font-weight: 700;
        }

        .intro-icons > div:last-child {
          border-right: 0;
        }

        .intro-icons svg {
          width: 21px;
          height: 21px;
          color: var(--orange);
        }


        /* =====================================================
           FACILITIES
        ===================================================== */

        .facilities-section {
          background: #fffaf3;
          padding: 17px 0 35px;
        }

        .section-heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 13px;
        }

        .section-heading-row h2 {
          margin-bottom: 3px;
        }

        .section-heading-row p {
          margin: 0;
          font-size: 11px;
          line-height: 1.5;
          max-width: 520px;
          color: #526985;
        }

        .outline-button,
        .achievement-button,
        .coach-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 9px 15px;
          border: 1px solid var(--orange);
          border-radius: 30px;
          color: var(--navy);
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .outline-button:hover,
        .achievement-button:hover {
          background: var(--orange);
          color: white;
          transform: translateY(-2px);
        }

        .facility-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .facility-card {
          overflow: hidden;
          border-radius: 9px;
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 3px 12px rgba(3, 26, 56, 0.06);
          transition: all 0.25s ease;
        }

        .facility-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(3, 26, 56, 0.12);
        }

        .facility-image {
          position: relative;
          height: 92px;
          overflow: hidden;
          background: #dfe8f0;
        }

        .facility-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .image-fallback {
          position: absolute;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          background: #edf3f8;
        }

        .facility-info {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 10px;
        }

        .facility-icon {
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--orange);
          color: white;
        }

        .facility-text {
          min-width: 0;
          flex: 1;
        }

        .facility-text h3 {
          margin: 0 0 2px;
          font-family:
            "DM Sans",
            Arial,
            sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: var(--navy);
        }

        .facility-text p {
          margin: 0;
          font-size: 8px;
          color: #6b7c91;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .facility-arrow {
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          flex: 0 0 20px;
          border-radius: 50%;
          background: var(--orange);
          color: white;
        }

        .facility-arrow svg {
          width: 12px;
        }


        /* =====================================================
           INDOOR SPORTS
        ===================================================== */

        .indoor-section {
          padding: 55px 0;
          background:
            linear-gradient(
              110deg,
              #03214a,
              #062d5d 60%,
              #08396c
            );
          color: white;
        }

        .indoor-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 55px;
          align-items: center;
        }

        .section-label.light {
          color: var(--orange);
        }

        .indoor-content h2,
        .coaches-header h2 {
          margin: 7px 0 13px;
          color: white;
          font-size: clamp(32px, 4vw, 45px);
          line-height: 1;
        }

        .indoor-content h2 strong,
        .coaches-header h2 strong {
          color: var(--orange);
        }

        .indoor-content p {
          max-width: 470px;
          margin: 0;
          color: rgba(255,255,255,0.78);
          font-size: 12px;
          line-height: 1.7;
        }

        .indoor-icons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 25px;
        }

        .indoor-icons > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 7px;
          color: white;
          font-size: 9px;
        }

        .indoor-icons svg {
          width: 21px;
          color: var(--orange);
        }

        .indoor-gallery {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          grid-template-rows: 105px 105px;
          gap: 10px;
        }

        .gallery-large {
          grid-row: 1 / 3;
        }

        .indoor-gallery > div {
          overflow: hidden;
          border-radius: 9px;
        }

        .indoor-gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .indoor-gallery > div:hover img {
          transform: scale(1.05);
        }


        /* =====================================================
           OUTDOOR
        ===================================================== */

        .outdoor-section {
          padding: 55px 0;
          background: var(--cream);
        }

        .outdoor-grid {
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 50px;
          align-items: center;
        }

        .outdoor-content h2 {
          margin: 7px 0 12px;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 45px);
          line-height: 1;
        }

        .outdoor-content h2 strong {
          color: var(--orange);
        }

        .outdoor-content > p {
          margin: 0;
          font-size: 12px;
          line-height: 1.7;
          color: #506883;
        }

        .outdoor-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 9px;
          margin-top: 20px;
        }

        .outdoor-points span {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          color: var(--navy);
        }

        .outdoor-points svg {
          color: var(--orange);
        }

        .outdoor-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 11px;
        }

        .outdoor-image {
          position: relative;
          height: 135px;
          overflow: hidden;
          border-radius: 9px;
          box-shadow: 0 7px 20px rgba(3, 26, 56, 0.1);
        }

        .outdoor-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .outdoor-image:hover img {
          transform: scale(1.06);
        }

        .outdoor-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 45%,
            rgba(0,0,0,0.6)
          );
        }

        .outdoor-image span {
          position: absolute;
          left: 13px;
          bottom: 10px;
          z-index: 2;
          color: white;
          font-size: 12px;
          font-weight: 800;
        }


        /* =====================================================
           COACHES
        ===================================================== */

        .coaches-section {
          padding: 28px 0 36px;
          background:
            linear-gradient(
              115deg,
              #031d41,
              #062d5c 60%,
              #031c3b
            );
          color: white;
        }

        .coaches-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 25px;
          margin-bottom: 17px;
        }

        .coaches-header p {
          max-width: 390px;
          margin: 0;
          color: rgba(255,255,255,0.8);
          font-size: 10px;
          line-height: 1.55;
        }

        .coach-button {
          color: white;
        }

        .coach-button:hover {
          background: var(--orange);
          color: white;
        }

        .coach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .coach-card {
          overflow: hidden;
          border-radius: 8px;
          background: white;
          color: var(--navy);
          box-shadow: 0 7px 20px rgba(0,0,0,0.15);
          transition: transform 0.25s ease;
        }

        .coach-card:hover {
          transform: translateY(-5px);
        }

        .coach-image {
          position: relative;
          height: 112px;
          overflow: hidden;
          background: #dce5ed;
        }

        .coach-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .coach-placeholder {
          position: absolute;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: #dfe7ef;
          color: var(--navy);
        }

        .coach-info {
          padding: 9px 10px 11px;
        }

        .coach-info h3 {
          margin: 0 0 2px;
          font-family:
            "DM Sans",
            Arial,
            sans-serif;
          font-size: 12px;
          font-weight: 800;
        }

        .coach-info > strong {
          color: var(--orange-dark);
          font-size: 9px;
        }

        .coach-info p {
          display: flex;
          gap: 5px;
          margin: 6px 0 0;
          font-size: 8px;
          line-height: 1.35;
          color: #68798d;
        }

        .coach-info p span {
          color: var(--orange);
        }

        .coach-quote {
          margin-top: 7px;
          padding-top: 7px;
          border-top: 1px solid #e8ebee;
          font-size: 8px;
          font-style: italic;
          font-weight: 700;
          color: var(--navy);
        }


        /* =====================================================
           ACHIEVEMENTS
        ===================================================== */

        .achievement-section {
          padding: 30px 0;
          background: #fffaf3;
        }

        .achievement-grid {
          display: grid;
          grid-template-columns: 0.8fr 0.8fr 1fr;
          gap: 12px;
          align-items: stretch;
        }

        .achievement-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .achievement-content p {
          max-width: 350px;
          margin: 0 0 15px;
          font-size: 10px;
          line-height: 1.6;
          color: #5c718b;
        }

        .achievement-button {
          align-self: flex-start;
        }

        .achievement-photo {
          position: relative;
          min-height: 160px;
          overflow: hidden;
          border-radius: 8px;
          background: #dce6ee;
        }

        .achievement-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .achievement-photo-placeholder {
          position: absolute;
          inset: 0;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--orange);
        }

        .achievement-photo-placeholder span {
          font-size: 11px;
          font-weight: 800;
        }

        .achievement-stats {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
          padding: 8px 17px;
          border: 1px solid #eadbc8;
          border-radius: 8px;
          background: #fffaf3;
        }

        .achievement-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 0;
          border-bottom: 1px solid #ebdfd0;
        }

        .achievement-stat:last-child {
          border-bottom: 0;
        }

        .stat-icon {
          width: 31px;
          height: 31px;
          flex: 0 0 31px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--orange);
          background: #fff0db;
        }

        .achievement-stat strong {
          display: inline-block;
          min-width: 45px;
          color: var(--navy);
          font-family:
            "Playfair Display",
            Georgia,
            serif;
          font-size: 19px;
        }

        .achievement-stat span {
          font-size: 8px;
          color: #65758a;
        }


        /* =====================================================
           CATEGORIES
        ===================================================== */

        .categories-section {
          padding: 45px 0;
          background: white;
        }

        .category-heading {
          text-align: center;
          margin-bottom: 23px;
        }

        .category-heading .section-label {
          justify-content: center;
        }

        .category-heading h2 {
          margin-bottom: 0;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }

        .category-card {
          position: relative;
          min-height: 145px;
          padding: 18px 13px;
          border: 1px solid #e5e9ee;
          border-radius: 9px;
          background: white;
          box-shadow: 0 5px 15px rgba(3, 26, 56, 0.05);
          transition: all 0.25s ease;
        }

        .category-card:hover {
          background: var(--navy);
          color: white;
          transform: translateY(-4px);
        }

        .category-card > svg:first-child {
          width: 26px;
          height: 26px;
          color: var(--orange);
          margin-bottom: 10px;
        }

        .category-card h3 {
          margin: 0 0 6px;
          font-family:
            "DM Sans",
            Arial,
            sans-serif;
          font-size: 12px;
          font-weight: 800;
        }

        .category-card p {
          margin: 0;
          font-size: 8px;
          line-height: 1.45;
          color: #718198;
        }

        .category-card:hover p {
          color: rgba(255,255,255,0.72);
        }

        .category-card > svg:last-child {
          position: absolute;
          right: 10px;
          bottom: 10px;
          width: 14px;
          color: var(--orange);
        }


        /* =====================================================
           CHAMPION CTA
        ===================================================== */

        .champion-section {
          position: relative;
          min-height: 145px;
          overflow: hidden;
          color: white;
          background:
            linear-gradient(
              90deg,
              rgba(2, 29, 61, 0.97),
              rgba(3, 42, 83, 0.76),
              rgba(2, 29, 61, 0.82)
            ),
            url("/images/sports-champions.jpg");
          background-size: cover;
          background-position: center;
        }

        .champion-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.02) 1px,
              transparent 1px
            );
          background-size: 100% 6px;
          opacity: 0.4;
        }

        .champion-container {
          position: relative;
          min-height: 145px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          z-index: 2;
        }

        .champion-title {
          font-family:
            "Playfair Display",
            Georgia,
            serif;
          font-size: clamp(25px, 3.5vw, 39px);
          line-height: 1.02;
          font-style: italic;
        }

        .champion-title strong {
          color: var(--orange);
        }

        .champion-text {
          max-width: 390px;
          font-size: 9px;
          line-height: 1.65;
          color: rgba(255,255,255,0.84);
        }

        .champion-slogan {
          margin-top: 10px;
          display: flex;
          justify-content: flex-end;
          gap: 17px;
          color: white;
          font-family:
            "Playfair Display",
            Georgia,
            serif;
          font-size: 18px;
          font-style: italic;
        }

        .champion-slogan span {
          color: var(--orange);
        }


        /* =====================================================
           FOOTER
        ===================================================== */

        .sports-footer {
          background: #021a36;
          color: white;
          padding-top: 25px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.25fr 0.8fr 0.9fr 1.25fr;
          gap: 35px;
          padding-bottom: 25px;
        }

        .footer-brand img {
          width: 190px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .footer-brand p {
          margin: 8px 0 0;
          max-width: 220px;
          color: rgba(255,255,255,0.62);
          font-size: 8px;
          line-height: 1.6;
        }

        .footer-column {
          border-left: 1px solid rgba(255,255,255,0.16);
          padding-left: 24px;
        }

        .footer-column h4 {
          margin: 0 0 10px;
          font-size: 10px;
          font-weight: 800;
          color: white;
        }

        .footer-column a {
          display: block;
          margin-bottom: 6px;
          color: rgba(255,255,255,0.7);
          font-size: 8px;
          transition: color 0.2s ease;
        }

        .footer-column a:hover {
          color: var(--orange);
        }

        .footer-contact-item {
          display: flex;
          gap: 8px;
          margin-bottom: 7px;
          color: rgba(255,255,255,0.7);
          font-size: 8px;
          line-height: 1.4;
        }

        .footer-contact-item svg {
          width: 12px;
          flex: 0 0 12px;
          color: var(--orange);
        }

        .social-icons {
          display: flex;
          gap: 7px;
          margin-top: 10px;
        }

        .social-icons a {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          color: white;
        }

        .social-icons a:hover {
          border-color: var(--orange);
          background: var(--orange);
        }

        .social-icons svg {
          width: 12px;
          height: 12px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.16);
          min-height: 37px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: rgba(255,255,255,0.6);
          font-size: 7px;
        }

        .footer-bottom-right {
          display: flex;
          gap: 15px;
        }

        .scroll-top {
          position: fixed;
          right: 22px;
          bottom: 20px;
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: var(--orange);
          color: white;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0,0,0,0.18);
          z-index: 100;
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1000px) {

          .sports-container {
            width: min(920px, calc(100% - 45px));
          }

          .intro-grid,
          .indoor-grid,
          .outdoor-grid {
            gap: 30px;
          }

          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer-main {
            grid-template-columns: repeat(2, 1fr);
          }

        }


        @media (max-width: 760px) {

          .sports-container {
            width: calc(100% - 30px);
          }

          .sports-hero {
            height: 400px;
          }

          .hero-content {
            width: 100%;
          }

          .sports-hero h1 {
            font-size: 48px;
          }

          .hero-side-text {
            right: 12px;
            top: 90px;
            font-size: 20px;
          }

          .hero-wave {
            height: 75px;
          }

          .intro-grid,
          .indoor-grid,
          .outdoor-grid,
          .achievement-grid {
            grid-template-columns: 1fr;
          }

          .image-frame {
            height: 240px;
          }

          .facility-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .coach-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-heading-row,
          .coaches-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .indoor-gallery {
            grid-template-rows: 150px 100px;
          }

          .achievement-photo {
            min-height: 220px;
          }

          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .champion-container {
            padding: 25px 0;
            flex-direction: column;
            align-items: flex-start;
          }

          .champion-slogan {
            justify-content: flex-start;
          }

        }


        @media (max-width: 500px) {

          .sports-hero {
            height: 390px;
          }

          .sports-hero h1 {
            font-size: 42px;
          }

          .sports-hero h2 {
            font-size: 21px;
          }

          .hero-side-text {
            display: none;
          }

          .hero-values {
            flex-wrap: wrap;
            gap: 6px;
          }

          .facility-grid,
          .coach-grid,
          .category-grid {
            grid-template-columns: 1fr;
          }

          .intro-icons {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px 0;
          }

          .intro-icons > div:nth-child(2) {
            border-right: 0;
          }

          .outdoor-gallery {
            grid-template-columns: 1fr;
          }

          .outdoor-image {
            height: 170px;
          }

          .indoor-icons {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 15px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footer-column {
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,0.14);
            padding: 18px 0 0;
          }

          .footer-bottom {
            padding: 12px 0;
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-bottom-right {
            flex-wrap: wrap;
          }

          .champion-title {
            font-size: 29px;
          }

        }

      `}</style>


      {/* =====================================================
          PAGE
      ===================================================== */}

      <div className="sports-page">


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="sports-hero">

          <div className="hero-background"></div>

          <div className="hero-overlay"></div>

          <div className="sports-container hero-container">

            <div className="hero-content">

              <div className="hero-breadcrumb">

                <Link to="/">
                  Home
                </Link>

                <span>/</span>

                <Link to="/facilities">
                  Facilities
                </Link>

                <span>/</span>

                <span>
                  Sports Complex
                </span>

              </div>


              <div className="hero-label">
                <span></span>
                FACILITIES
              </div>


              <h1>
                Sports <strong>Complex</strong>
              </h1>


              <h2>
                Building Champions
                <br />
                Beyond the Classroom
              </h2>


              <div className="hero-values">

                <span>Fitness</span>
                <b>|</b>

                <span>Discipline</span>
                <b>|</b>

                <span>Teamwork</span>
                <b>|</b>

                <span>Leadership</span>

              </div>

            </div>


            <div className="hero-side-text">

              <span>Play</span>
              <span>Train</span>
              <span>Achieve</span>

            </div>

          </div>


          {/* CURVED BOTTOM */}

          <svg
            className="hero-wave"
            viewBox="0 0 1536 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >

            <path
              className="orange-wave"
              d="M0,115 C160,205 350,210 555,135 C775,55 990,92 1160,128 C1280,153 1370,137 1450,92 C1490,70 1520,55 1536,48"
            />

            <path
              className="cream-wave"
              d="M0,126 C160,216 350,220 555,145 C775,65 990,102 1160,138 C1280,163 1370,147 1450,102 C1490,80 1520,65 1536,58 L1536,220 L0,220 Z"
            />

          </svg>

        </section>


        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="sports-intro">

          <div className="sports-container">

            <div className="intro-grid">


              <div className="intro-image">

                <div className="image-frame">

                  <img
                    src="/images/campus1.png"
                    alt="Yaduvanshi Degree College Sports Ground"
                    onError={handleImageError}
                  />


                  <div className="image-badge">

                    <div className="badge-icon">
                      <Trophy size={20} />
                    </div>

                    <div>

                      <strong>
                        More Than Just Sports
                      </strong>

                      <span>
                        Fitness • Teamwork • Character
                      </span>

                    </div>

                  </div>

                </div>

              </div>


              <div className="intro-content">

                <div className="section-label">
                  <span></span>
                  OUR SPORTS COMPLEX
                </div>


                <h2>
                  A Campus Where
                  <br />
                  Every Student <strong>Can Play</strong>
                </h2>


                <p>
                  The Sports Complex at Yaduvanshi Degree
                  College provides a well-rounded environment
                  for physical fitness, teamwork, discipline
                  and leadership.
                </p>


                <p>
                  We believe that sports are an important
                  part of holistic education. Participation
                  in sports helps students build confidence,
                  develop leadership qualities and maintain
                  a healthy lifestyle.
                </p>


                <div className="intro-icons">

                  <div>
                    <Dumbbell />
                    <span>Fitness</span>
                  </div>

                  <div>
                    <ShieldCheck />
                    <span>Discipline</span>
                  </div>

                  <div>
                    <Users />
                    <span>Teamwork</span>
                  </div>

                  <div>
                    <Trophy />
                    <span>Leadership</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SPORTS FACILITIES
        ===================================================== */}

        <section className="facilities-section">

          <div className="sports-container">

            <div className="section-heading-row">

              <div>

                <div className="section-label">
                  <span></span>
                  SPORTS FACILITIES
                </div>

                <h2>
                  Our Sports <strong>Facilities</strong>
                </h2>

                <p>
                  From outdoor fields to indoor courts,
                  we offer a wide range of sports facilities
                  to support all students in staying active,
                  competitive and inspired.
                </p>

              </div>


              <Link
                to="/facilities"
                className="outline-button"
              >
                View All Facilities
                <ArrowRight size={15} />
              </Link>

            </div>


            <div className="facility-grid">

              {sportsFacilities.map((facility, index) => (

                <div
                  className="facility-card"
                  key={index}
                >

                  <div className="facility-image">

                    <img
                      src={facility.image}
                      alt={facility.title}
                      onError={handleImageError}
                    />

                  </div>


                  <div className="facility-info">

                    <div className="facility-icon">
                      {facility.icon}
                    </div>


                    <div className="facility-text">

                      <h3>
                        {facility.title}
                      </h3>

                      <p>
                        {facility.subtitle}
                      </p>

                    </div>


                    <span className="facility-arrow">
                      <ArrowRight size={13} />
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            INDOOR SPORTS
        ===================================================== */}

        <section className="indoor-section">

          <div className="sports-container">

            <div className="indoor-grid">


              <div className="indoor-content">

                <div className="section-label light">
                  <span></span>
                  INDOOR SPORTS & RECREATION
                </div>


                <h2>
                  Play. Train.
                  <br />
                  <strong>Stay Fit.</strong>
                </h2>


                <p>
                  Our indoor sports facilities provide a
                  safe, modern and comfortable environment
                  for students to stay active, relax and
                  enjoy their time on campus.
                </p>


                <div className="indoor-icons">

                  <div>
                    <CircleDot />
                    <span>Badminton</span>
                  </div>

                  <div>
                    <Table2 />
                    <span>Table Tennis</span>
                  </div>

                  <div>
                    <Target />
                    <span>Chess & Carrom</span>
                  </div>

                  <div>
                    <Dumbbell />
                    <span>Fitness</span>
                  </div>

                </div>

              </div>


              <div className="indoor-gallery">

                <div className="gallery-large">

                  <img
                    src="/images/indoor-sports.jpg"
                    alt="Indoor badminton sports"
                    onError={handleImageError}
                  />

                </div>


                <div className="gallery-small">

                  <img
                    src="/images/indoor-games.jpg"
                    alt="Indoor games"
                    onError={handleImageError}
                  />

                </div>


                <div className="gallery-small">

                  <img
                    src="/images/campus2.png"
                    alt="Sports activity"
                    onError={handleImageError}
                  />

                </div>


                <div className="gallery-small">

                  <img
                    src="/images/campus3.png"
                    alt="College sports"
                    onError={handleImageError}
                  />

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OUTDOOR SPORTS
        ===================================================== */}

        <section className="outdoor-section">

          <div className="sports-container">

            <div className="outdoor-grid">


              <div className="outdoor-content">

                <div className="section-label">
                  <span></span>
                  OUTDOOR SPORTS
                </div>


                <h2>
                  Fields of
                  <br />
                  <strong>Opportunity</strong>
                </h2>


                <p>
                  Our spacious outdoor grounds provide
                  students with the perfect platform to
                  pursue their sporting dreams and represent
                  the college in various competitions.
                </p>


                <div className="outdoor-points">

                  <span>
                    <CircleDot size={15} />
                    Cricket
                  </span>

                  <span>
                    <CircleDot size={15} />
                    Football
                  </span>

                  <span>
                    <Volleyball size={15} />
                    Volleyball
                  </span>

                  <span>
                    <CircleDot size={15} />
                    Basketball
                  </span>

                </div>

              </div>


              <div className="outdoor-gallery">

                <div className="outdoor-image">

                  <img
                    src="/images/campus1.png"
                    alt="Cricket Ground"
                    onError={handleImageError}
                  />

                  <span>Cricket</span>

                </div>


                <div className="outdoor-image">

                  <img
                    src="/images/campus2.png"
                    alt="Football Ground"
                    onError={handleImageError}
                  />

                  <span>Football</span>

                </div>


                <div className="outdoor-image">

                  <img
                    src="/images/campus3.png"
                    alt="Volleyball Court"
                    onError={handleImageError}
                  />

                  <span>Volleyball</span>

                </div>


                <div className="outdoor-image">

                  <img
                    src="/images/campus1.png"
                    alt="Basketball Court"
                    onError={handleImageError}
                  />

                  <span>Basketball</span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            COACHES
        ===================================================== */}

        <section className="coaches-section">

          <div className="sports-container">

            <div className="coaches-header">

              <div>

                <div className="section-label light">
                  <span></span>
                  OUR COACHES
                </div>

                <h2>
                  Meet Our <strong>Coaches</strong>
                </h2>

                <p>
                  Our experienced and dedicated coaches
                  guide students with expert training,
                  discipline and motivation to help them
                  achieve their best.
                </p>

              </div>


              <Link
                to="/achievement/sports"
                className="coach-button"
              >
                View Sports Achievements
                <ArrowRight size={15} />
              </Link>

            </div>


            <div className="coach-grid">

              {coaches.map((coach, index) => (

                <div
                  className="coach-card"
                  key={index}
                >

                  <div className="coach-image">

                    <img
                      src={coach.image}
                      alt={coach.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="coach-placeholder">
                      <Users size={55} />
                    </div>

                  </div>


                  <div className="coach-info">

                    <h3>
                      {coach.name}
                    </h3>

                    <strong>
                      {coach.role}
                    </strong>


                    <p>
                      <span>●</span>
                      {coach.experience}
                    </p>

                    <p>
                      <span>●</span>
                      {coach.years}
                    </p>

                    <p>
                      <span>●</span>
                      {coach.achievement}
                    </p>


                    <div className="coach-quote">
                      "{coach.quote}"
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            SPORTS ACHIEVEMENTS
        ===================================================== */}

        <section className="achievement-section">

          <div className="sports-container">

            <div className="achievement-grid">


              <div className="achievement-content">

                <div className="section-label">
                  <span></span>
                  SPORTS ACHIEVEMENTS
                </div>


                <h2>
                  Our Sports
                  <br />
                  <strong>Achievements</strong>
                </h2>


                <p>
                  Our students are encouraged to participate
                  in sports competitions and represent
                  Yaduvanshi Degree College at district,
                  state and national levels.
                </p>


                <Link
                  to="/achievement/sports"
                  className="achievement-button"
                >
                  View All Achievements
                  <ArrowRight size={15} />
                </Link>

              </div>


              <div className="achievement-photo">

                <img
                  src="/images/sports-achievement.jpg"
                  alt="Yaduvanshi sports achievement"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="achievement-photo-placeholder">
                  <Trophy size={60} />
                  <span>
                    Sports Achievement
                  </span>
                </div>

              </div>


              <div className="achievement-stats">

                {achievements.map((item, index) => (

                  <div
                    className="achievement-stat"
                    key={index}
                  >

                    <div className="stat-icon">
                      {item.icon}
                    </div>

                    <div>
                      <strong>
                        {item.number}
                      </strong>

                      <span>
                        {item.title}
                      </span>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SPORTS CATEGORIES
        ===================================================== */}

        <section className="categories-section">

          <div className="sports-container">

            <div className="category-heading">

              <div className="section-label">
                <span></span>
                SPORTS AT YADUVANSHI
                <span></span>
              </div>


              <h2>
                Every Game Builds
                <br />
                <strong>Character</strong>
              </h2>

            </div>


            <div className="category-grid">

              {categories.map((category, index) => (

                <div
                  className="category-card"
                  key={index}
                >

                  {category.icon}

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.text}
                  </p>

                  <ArrowRight />

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CREATE CHAMPIONS
        ===================================================== */}

        <section className="champion-section">

          <div className="sports-container champion-container">

            <div>

              <div className="champion-title">
                Create <strong>Champions</strong>
                <br />
                in Sports, Not Only in Academics
              </div>

            </div>


            <div>

              <div className="champion-text">
                At Yaduvanshi Degree College, we believe
                in holistic education. Sports are not just
                a part of our campus life — they are a
                pathway to building stronger, healthier
                and more confident individuals.
              </div>


              <div className="champion-slogan">

                <span>Play</span>
                •
                <span>Train</span>
                •
                <span>Grow</span>

              </div>

            </div>

          </div>

        </section>




        {/* SCROLL TOP */}

        <button
          className="scroll-top"
          aria-label="Scroll to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>

      </div>
    </>
  );
};

export default SportsComplex;