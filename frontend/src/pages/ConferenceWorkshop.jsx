import React from "react";
import {
  CalendarDays,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Clock3,
  UserRound,
  Lightbulb,
  CheckCircle2,
  Target,
  Users,
  Mic2,
  Presentation,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ConferenceWorkshop = () => {
  const events = [
    {
      image: "/images/latex.png",
      title: "LaTeX Workshop",
      type: "Ongoing",
      description:
        "A 4-Week LaTeX Workshop to help students develop an important academic and professional skill. Learn to create professional documents, research papers, project reports, and more with expert guidance.",
      duration: "4 Weeks",
      session: "3 Hours per Week",
      resource: "Prof. Satish Khurana Ji",
      designation: "Senior Professor, Indira Gandhi University, Meerpur",
      featured: true,
    },
    {
      image: "/images/workshop-2.png",
      title: "Upcoming Workshop",
      description:
        "Skill-oriented workshops designed to provide students with practical knowledge and exposure to emerging academic and professional areas.",
      duration: "Details will be announced soon.",
      session: "Stay Tuned",
      resource: "Expert Faculty",
      designation: "Yaduvanshi Degree College",
      icon: <Users size={31} />,
    },
    {
      image: "/images/latex1.png",
      title: "Upcoming Conference",
      description:
        "Conferences and expert sessions provide students with opportunities to interact with professionals, researchers and academic experts.",
      duration: "Details will be announced soon.",
      session: "Stay Tuned",
      resource: "Guest Speakers",
      designation: "Yaduvanshi Degree College",
      icon: <Mic2 size={31} />,
    },
    {
      image: "/images/latex2.png",
      title: "Guest Lecture / Expert Session",
      description:
        "Interactive guest lectures and expert sessions help students understand current trends, career opportunities and practical applications.",
      duration: "Details will be announced soon.",
      session: "Stay Tuned",
      resource: "Industry Experts",
      designation: "Yaduvanshi Degree College",
      icon: <Presentation size={31} />,
    },
  ];

  const benefits = [
    "Professional academic documents",
    "Research Papers & Articles",
    "Project Reports",
    "Dissertations & Theses",
    "Presentations & Technical Documents",
    "Well-formatted mathematical equations and references",
  ];

  return (
    <div className="cw-page">
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =====================================================
           GLOBAL PAGE
        ===================================================== */

        .cw-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #153d6b;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .cw-page h1,
        .cw-page h2,
        .cw-page h3,
        .cw-page p {
          margin-top: 0;
        }

        .cw-container {
          width: min(1240px, calc(100% - 60px));
          margin: 0 auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .cw-hero {
          position: relative;
          min-height: 370px;
          overflow: hidden;
          background: #062452;
          color: #ffffff;
        }

        .cw-hero-content {
          position: relative;
          z-index: 5;
          width: 54%;
          padding: 20px 0 80px;
        }

        .cw-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
          color: rgba(255,255,255,.82);
          font-size: 12px;
        }

        .cw-breadcrumb span:last-child {
          color: #ffffff;
          font-weight: 600;
        }

        .cw-label {
          margin-bottom: 3px;
          color: #ff7616;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .cw-title {
          max-width: 580px;
          margin: 0;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 4.5vw, 60px);
          line-height: .98;
          font-weight: 700;
        }

        .cw-title span {
          color: #ff7616;
        }

        .cw-title-line {
          width: 105px;
          height: 4px;
          margin: 14px 0 12px;
          border-radius: 10px;
          background: #ff7616;
        }

        .cw-tagline {
          margin-bottom: 9px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 700;
        }

        .cw-tagline span {
          color: #ff7616;
          margin: 0 8px;
        }

        .cw-description {
          max-width: 590px;
          margin: 0;
          color: rgba(255,255,255,.91);
          font-size: 13px;
          line-height: 1.7;
        }

        /* Hero image */

        .cw-hero-image {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          width: 52%;
          height: 100%;
          object-fit: cover;
        }

        .cw-hero-overlay {
          position: absolute;
          top: 0;
          right: 42%;
          z-index: 2;
          width: 260px;
          height: 100%;
          background: linear-gradient(
            90deg,
            #062452 0%,
            rgba(6,36,82,.98) 35%,
            rgba(6,36,82,.55) 70%,
            rgba(6,36,82,0) 100%
          );
          clip-path: polygon(
            0 0,
            100% 0,
            70% 100%,
            0 100%
          );
        }

        /* Watermark */

        .cw-watermark {
          position: absolute;
          z-index: 3;
          top: 32px;
          left: 38%;
          width: 190px;
          height: 190px;
          border: 2px solid rgba(255,255,255,.08);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: .8;
        }

        .cw-watermark::before {
          content: "YADUVANSHI GROUP OF INSTITUTIONS";
          width: 130px;
          text-align: center;
          color: rgba(255,255,255,.09);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* Hero curve */

        .cw-wave {
          position: absolute;
          left: 0;
          bottom: -1px;
          z-index: 5;
          width: 100%;
          height: 65px;
        }

        /* =====================================================
           EVENTS INTRO
        ===================================================== */

        .cw-events {
          padding: 34px 0 26px;
          background: #ffffff;
        }

        .cw-events-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 18px;
        }

        .cw-heading-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cw-heading-icon {
          flex-shrink: 0;
          color: #ff7616;
        }

        .cw-small-label {
          margin-bottom: 4px;
          color: #ff7616;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .3px;
        }

        .cw-main-heading {
          margin: 0;
          color: #083b72;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 31px;
          line-height: 1.1;
        }

        .cw-heading-description {
          margin: 8px 0 0;
          color: #42688e;
          font-size: 13px;
        }

        .cw-view-all {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 20px;
          border-radius: 25px;
          background: #e4f3ff;
          color: #073c74;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          transition: .25s;
        }

        .cw-view-all:hover {
          background: #ff7616;
          color: #ffffff;
        }

        /* =====================================================
           FEATURED EVENT
        ===================================================== */

        .cw-featured {
          display: grid;
          grid-template-columns: 32% 39% 29%;
          min-height: 340px;
          padding: 10px;
          border: 1px solid #d8eaf8;
          border-radius: 9px;
          background: #ffffff;
          box-shadow: 0 7px 25px rgba(5,53,100,.07);
        }

        /* Featured image */

        .cw-featured-image {
          position: relative;
          min-height: 315px;
          overflow: hidden;
          border-radius: 6px;
        }

        .cw-featured-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .cw-featured-badge {
          position: absolute;
          top: 0;
          left: 0;
          padding: 7px 14px;
          border-radius: 0 0 18px 0;
          background: #ff7616;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
        }

        /* Center */

        .cw-featured-content {
          padding: 8px 26px;
        }

        .cw-featured-title {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 11px;
          color: #06376c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          font-weight: 700;
        }

        .cw-featured-title svg {
          flex-shrink: 0;
        }

        .cw-featured-description {
          margin-bottom: 15px;
          color: #245787;
          font-size: 12px;
          line-height: 1.65;
        }

        .cw-info-row {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 10px 0;
          border-top: 1px solid #dbeaf6;
        }

        .cw-info-icon {
          width: 30px;
          flex-shrink: 0;
          color: #073c75;
        }

        .cw-info-label {
          display: block;
          margin-bottom: 2px;
          color: #567796;
          font-size: 10px;
          font-weight: 600;
        }

        .cw-info-value {
          display: block;
          color: #073c75;
          font-size: 12px;
          font-weight: 700;
        }

        .cw-info-small {
          color: #567796;
          font-size: 9px;
        }

        /* Right learning panel */

        .cw-learning {
          margin: 3px 0;
          padding: 15px 18px;
          border-radius: 6px;
          background: linear-gradient(
            180deg,
            #fff8f3,
            #fff2e9
          );
        }

        .cw-learning-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 13px;
          color: #073c74;
          font-size: 15px;
          font-weight: 800;
        }

        .cw-learning-title svg {
          color: #ff7616;
        }

        .cw-benefits {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cw-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 8px;
          color: #124b83;
          font-size: 11px;
          line-height: 1.4;
        }

        .cw-benefits svg {
          flex-shrink: 0;
          margin-top: 1px;
          color: #ff7616;
        }

        .cw-learning-note {
          display: flex;
          gap: 10px;
          margin: 15px -18px -15px;
          padding: 14px 17px;
          border-top: 1px solid rgba(255,118,22,.15);
          color: #174d82;
          font-size: 10px;
          line-height: 1.5;
        }

        .cw-learning-note svg {
          flex-shrink: 0;
          color: #ff7616;
        }

        /* =====================================================
           WORKSHOP LIST
        ===================================================== */

        .cw-more-section {
          padding: 8px 0 34px;
        }

        .cw-more-wrapper {
          display: grid;
          grid-template-columns: 32% 68%;
          gap: 20px;
          padding: 18px;
          border: 1px solid #d9eaf7;
          border-radius: 9px;
          background: #ffffff;
          box-shadow: 0 6px 22px rgba(5,53,100,.05);
        }

        .cw-more-intro {
          padding: 5px 8px;
        }

        .cw-more-icon {
          color: #ff7616;
          margin-bottom: 10px;
        }

        .cw-more-label {
          margin-bottom: 12px;
          color: #073c74;
          font-size: 12px;
          font-weight: 700;
        }

        .cw-more-title {
          margin-bottom: 10px;
          color: #073c74;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          line-height: 1.15;
        }

        .cw-more-text {
          color: #315f89;
          font-size: 12px;
          line-height: 1.65;
        }

        .cw-explore {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 12px;
          padding: 11px 20px;
          border-radius: 25px;
          background: #ff7616;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          transition: .25s;
        }

        .cw-explore:hover {
          background: #062452;
          transform: translateY(-2px);
        }

        /* Cards */

        .cw-event-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .cw-mini-card {
          position: relative;
          min-height: 225px;
          overflow: hidden;
          border: 1px solid #d8e7f4;
          border-radius: 6px;
          background: #ffffff;
          box-shadow: 0 3px 12px rgba(6,36,82,.05);
          transition: .25s;
        }

        .cw-mini-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 9px 20px rgba(6,36,82,.11);
        }

        .cw-mini-image {
          position: relative;
          height: 95px;
          overflow: hidden;
          background: #edf5fb;
        }

        .cw-mini-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cw-mini-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,.35);
        }

        .cw-ongoing {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
          padding: 5px 10px;
          border-radius: 0 0 0 15px;
          background: #ff7616;
          color: #ffffff;
          font-size: 9px;
          font-weight: 800;
        }

        .cw-mini-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 3;
          transform: translate(-50%,-50%);
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #063c74;
          box-shadow: 0 3px 12px rgba(0,0,0,.1);
        }

        .cw-mini-content {
          padding: 11px 12px;
        }

        .cw-mini-title {
          margin-bottom: 9px;
          color: #073c74;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 800;
        }

        .cw-mini-details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: #335f88;
          font-size: 9px;
          line-height: 1.35;
        }

        .cw-mini-detail {
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }

        .cw-mini-detail svg {
          flex-shrink: 0;
          color: #073c74;
        }

        .cw-stay-tuned {
          display: block;
          width: fit-content;
          margin: 12px auto 0;
          padding: 5px 15px;
          border-radius: 15px;
          background: #e9f6fd;
          color: #174e81;
          font-size: 8px;
          font-weight: 700;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .cw-cta {
          position: relative;
          overflow: hidden;
          min-height: 190px;
          display: grid;
          grid-template-columns: 39% 61%;
          background: #062452;
          color: #ffffff;
        }

        .cw-cta-image {
          position: relative;
          min-height: 190px;
          overflow: hidden;
        }

        .cw-cta-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cw-cta-image::after {
          content: "";
          position: absolute;
          top: 0;
          right: -1px;
          width: 95px;
          height: 100%;
          background: #062452;
          clip-path: polygon(
            100% 0,
            100% 100%,
            0 100%
          );
        }

        .cw-cta-content {
          position: relative;
          z-index: 2;
          padding: 28px 35px;
        }

        .cw-cta-label {
          margin-bottom: 5px;
          color: #ff7616;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .cw-cta-title {
          margin-bottom: 4px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
        }

        .cw-cta-subtitle {
          margin-bottom: 9px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
        }

        .cw-cta-text {
          max-width: 500px;
          margin-bottom: 14px;
          color: rgba(255,255,255,.86);
          font-size: 11px;
          line-height: 1.55;
        }

        .cw-cta-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cw-cta-primary,
        .cw-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 17px;
          border-radius: 22px;
          font-size: 10px;
          font-weight: 800;
        }

        .cw-cta-primary {
          background: #ff7616;
          color: #ffffff;
        }

        .cw-cta-secondary {
          border: 1px solid rgba(255,255,255,.7);
          color: #ffffff;
        }

        .cw-cta-primary:hover {
          background: #ffffff;
          color: #062452;
        }

        .cw-cta-secondary:hover {
          background: #ffffff;
          color: #062452;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {

          .cw-container {
            width: min(100% - 40px, 1240px);
          }

          .cw-hero-content {
            width: 60%;
          }

          .cw-featured {
            grid-template-columns: 34% 38% 28%;
          }

          .cw-featured-content {
            padding: 8px 18px;
          }

          .cw-more-wrapper {
            grid-template-columns: 28% 72%;
          }

          .cw-event-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 850px) {

          .cw-container {
            width: calc(100% - 30px);
          }

          .cw-hero {
            min-height: 500px;
          }

          .cw-hero-content {
            width: 100%;
            padding: 25px 0 250px;
          }

          .cw-hero-image {
            top: auto;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 250px;
          }

          .cw-hero-overlay {
            top: auto;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 290px;
            background: linear-gradient(
              0deg,
              #062452 0%,
              rgba(6,36,82,.75) 55%,
              rgba(6,36,82,0) 100%
            );
            clip-path: none;
          }

          .cw-watermark {
            display: none;
          }

          .cw-featured {
            grid-template-columns: 1fr;
          }

          .cw-featured-image {
            min-height: 300px;
            height: 300px;
          }

          .cw-featured-content {
            padding: 22px;
          }

          .cw-learning {
            margin: 0;
          }

          .cw-more-wrapper {
            grid-template-columns: 1fr;
          }

          .cw-event-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .cw-cta {
            grid-template-columns: 1fr;
          }

          .cw-cta-image {
            height: 230px;
            min-height: 230px;
          }

          .cw-cta-image::after {
            display: none;
          }
        }

        @media (max-width: 600px) {

          .cw-container {
            width: calc(100% - 26px);
          }

          .cw-hero {
            min-height: 500px;
          }

          .cw-hero-content {
            padding: 20px 0 235px;
          }

          .cw-breadcrumb {
            font-size: 10px;
          }

          .cw-label {
            font-size: 13px;
          }

          .cw-title {
            font-size: 36px;
          }

          .cw-title-line {
            width: 80px;
            height: 3px;
            margin: 12px 0;
          }

          .cw-tagline {
            font-size: 14px;
          }

          .cw-description {
            font-size: 11px;
            line-height: 1.6;
          }

          .cw-hero-image {
            height: 220px;
          }

          .cw-hero-overlay {
            height: 260px;
          }

          .cw-wave {
            height: 55px;
          }

          /* Heading */

          .cw-events {
            padding-top: 28px;
          }
          .cw-events-heading {
            flex-direction: column;
            align-items: flex-start;
          }

          .cw-heading-left {
            align-items: flex-start;
          }

          .cw-main-heading {
            font-size: 26px;
          }

          .cw-heading-description {
            font-size: 11px;
            line-height: 1.6;
          }

          .cw-view-all {
            align-self: flex-start;
            padding: 10px 16px;
            font-size: 11px;
          }

          /* Featured Event */

          .cw-featured {
            padding: 7px;
          }

          .cw-featured-image {
            min-height: 250px;
            height: 250px;
          }

          .cw-featured-content {
            padding: 18px 12px;
          }

          .cw-featured-title {
            font-size: 22px;
            gap: 10px;
          }

          .cw-featured-description {
            font-size: 11px;
            line-height: 1.65;
          }

          .cw-info-row {
            gap: 10px;
            padding: 9px 0;
          }

          .cw-info-label {
            font-size: 9px;
          }

          .cw-info-value {
            font-size: 11px;
          }

          .cw-learning {
            padding: 14px;
          }

          .cw-learning-title {
            font-size: 14px;
          }

          .cw-benefits li {
            font-size: 10px;
          }

          .cw-learning-note {
            margin-left: -14px;
            margin-right: -14px;
            margin-bottom: -14px;
            padding: 12px 14px;
            font-size: 9px;
          }

          /* More workshops */

          .cw-more-section {
            padding-bottom: 28px;
          }

          .cw-more-wrapper {
            padding: 13px;
          }

          .cw-more-intro {
            padding: 4px;
          }

          .cw-more-title {
            font-size: 21px;
          }

          .cw-more-text {
            font-size: 11px;
          }

          .cw-explore {
            font-size: 10px;
            padding: 10px 17px;
          }

          .cw-event-cards {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .cw-mini-card {
            min-height: 235px;
          }

          .cw-mini-image {
            height: 120px;
          }

          .cw-mini-content {
            padding: 13px;
          }

          .cw-mini-title {
            font-size: 12px;
          }

          .cw-mini-details {
            font-size: 9px;
          }

          /* CTA */

          .cw-cta {
            min-height: auto;
          }

          .cw-cta-image {
            height: 190px;
            min-height: 190px;
          }

          .cw-cta-content {
            padding: 24px 20px 28px;
          }

          .cw-cta-title {
            font-size: 22px;
          }

          .cw-cta-subtitle {
            font-size: 13px;
          }

          .cw-cta-text {
            font-size: 10px;
          }

          .cw-cta-buttons {
            flex-direction: column;
            align-items: flex-start;
          }

          .cw-cta-primary,
          .cw-cta-secondary {
            font-size: 10px;
          }
        }

        @media (max-width: 400px) {

          .cw-container {
            width: calc(100% - 20px);
          }

          .cw-title {
            font-size: 32px;
          }

          .cw-featured-title {
            font-size: 20px;
          }

          .cw-main-heading {
            font-size: 23px;
          }

          .cw-featured-image {
            height: 220px;
            min-height: 220px;
          }

          .cw-cta-title {
            font-size: 20px;
          }
        }

      `}</style>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="cw-hero">

        <div className="cw-container">

          <div className="cw-hero-content">

            <div className="cw-breadcrumb">
              <span>Home</span>
              <ArrowRight size={13} />
              <span>Facilities</span>
              <ArrowRight size={13} />
              <span>Conference & Workshop</span>
            </div>

            <div className="cw-label">
              FACILITIES
            </div>

            <h1 className="cw-title">
              Conference &<br />
              <span>Workshop</span>
            </h1>

            <div className="cw-title-line"></div>

            <div className="cw-tagline">
              Bridging Knowledge
              <span>|</span>
              Building Skills
              <span>|</span>
              Shaping Future
            </div>

            <p className="cw-description">
              At Yaduvanshi Degree College, we regularly organize conferences,
              seminars and workshops to provide students with exposure to
              new ideas, industry trends and expert guidance. These events
              create opportunities for learning, collaboration and holistic
              development.
            </p>

          </div>

        </div>

        {/* Hero Image */}

        <img
          className="cw-hero-image"
          src="/images/chero.png"
          alt="Conference and Workshop"
        />

        <div className="cw-hero-overlay"></div>

        <div className="cw-watermark"></div>


        {/* Hero Wave */}

        <svg
          className="cw-wave"
          viewBox="0 0 1536 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0,20
              C180,85 380,90 580,55
              C780,20 930,40 1110,55
              C1280,70 1410,50 1536,5
              L1536,100
              L0,100
              Z
            "
            fill="#ffffff"
          />

          <path
            d="
              M0,20
              C180,85 380,90 580,55
              C780,20 930,40 1110,55
              C1280,70 1410,50 1536,5
            "
            fill="none"
            stroke="#ff7616"
            strokeWidth="4"
          />
        </svg>

      </section>


      {/* =====================================================
          EVENTS SECTION
      ===================================================== */}

      <section className="cw-events">

        <div className="cw-container">

          <div className="cw-events-heading">

            <div className="cw-heading-left">

              <CalendarDays
                className="cw-heading-icon"
                size={46}
              />

              <div>

                <div className="cw-small-label">
                  UPCOMING & RECENT EVENTS
                </div>

                <h2 className="cw-main-heading">
                  Conferences & Workshops
                </h2>

                <p className="cw-heading-description">
                  Enhance your knowledge. Build your skills.
                  Create new opportunities.
                </p>

              </div>

            </div>

            <button className="cw-view-all">
              View All Events
              <ArrowRight size={16} />
            </button>

          </div>


          {/* =================================================
              FEATURED EVENT
          ================================================= */}

          <div className="cw-featured">

            {/* IMAGE */}

            <div className="cw-featured-image">

              <img
                src={events[0].image}
                alt={events[0].title}
              />

              <div className="cw-featured-badge">
                FEATURED EVENT
              </div>

            </div>


            {/* CENTER CONTENT */}

            <div className="cw-featured-content">

              <h3 className="cw-featured-title">

                <GraduationCap size={36} />

                {events[0].title}

              </h3>

              <p className="cw-featured-description">
                {events[0].description}
              </p>


              {/* Duration */}

              <div className="cw-info-row">

                <div className="cw-info-icon">
                  <CalendarDays size={29} />
                </div>

                <div>
                  <span className="cw-info-label">
                    Duration
                  </span>

                  <span className="cw-info-value">
                    {events[0].duration}
                  </span>
                </div>

              </div>


              {/* Session */}

              <div className="cw-info-row">

                <div className="cw-info-icon">
                  <Clock3 size={29} />
                </div>

                <div>
                  <span className="cw-info-label">
                    Session
                  </span>

                  <span className="cw-info-value">
                    {events[0].session}
                  </span>
                </div>

              </div>


              {/* Resource Person */}

              <div className="cw-info-row">

                <div className="cw-info-icon">
                  <UserRound size={29} />
                </div>

                <div>

                  <span className="cw-info-label">
                    Resource Person
                  </span>

                  <span className="cw-info-value">
                    {events[0].resource}
                  </span>

                  <span className="cw-info-small">
                    {events[0].designation}
                  </span>

                </div>

              </div>

            </div>


            {/* LEARNING PANEL */}

            <div className="cw-learning">

              <div className="cw-learning-title">

                <Lightbulb size={28} />

                Why Learn LaTeX?

              </div>


              <ul className="cw-benefits">

                {benefits.map((benefit, index) => (

                  <li key={index}>

                    <CheckCircle2 size={15} />

                    <span>{benefit}</span>

                  </li>

                ))}

              </ul>


              <div className="cw-learning-note">

                <Target size={27} />

                <span>
                  This workshop can be especially useful for
                  students planning for higher studies, research,
                  projects, dissertations and academic writing.
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MORE WORKSHOPS & CONFERENCES
      ===================================================== */}

      <section className="cw-more-section">

        <div className="cw-container">

          <div className="cw-more-wrapper">

            {/* INTRO */}

            <div className="cw-more-intro">

              <CalendarDays
                className="cw-more-icon"
                size={34}
              />

              <div className="cw-more-label">
                Learning Beyond the Classroom
              </div>

              <h2 className="cw-more-title">
                More Workshops & Conferences
              </h2>

              <p className="cw-more-text">
                We regularly host seminars, workshops,
                guest lectures and expert sessions to keep
                you updated and prepared for the future.
              </p>

              <button className="cw-explore">

                Explore Upcoming Events

                <ArrowRight size={15} />

              </button>

            </div>


            {/* EVENT CARDS */}

            <div className="cw-event-cards">

              {events.map((event, index) => (

                <div
                  className="cw-mini-card"
                  key={index}
                >

                  <div className="cw-mini-image">

                    <img
                      src={event.image}
                      alt={event.title}
                    />

                    {event.type && (
                      <div className="cw-ongoing">
                        {event.type}
                      </div>
                    )}

                    {!event.featured && event.icon && (

                      <div className="cw-mini-icon">
                        {event.icon}
                      </div>

                    )}

                  </div>


                  <div className="cw-mini-content">

                    <h3 className="cw-mini-title">
                      {event.title}
                    </h3>


                    {event.featured ? (

                      <div className="cw-mini-details">

                        <div className="cw-mini-detail">

                          <CalendarDays size={13} />

                          <span>
                            {event.duration}
                          </span>

                        </div>

                        <div className="cw-mini-detail">

                          <Clock3 size={13} />

                          <span>
                            {event.session}
                          </span>

                        </div>

                        <div className="cw-mini-detail">

                          <UserRound size={13} />

                          <span>
                            {event.resource}
                          </span>

                        </div>

                        <div className="cw-mini-detail">

                          <span>
                            {event.designation}
                          </span>

                        </div>

                      </div>

                    ) : (

                      <>
                        <div className="cw-mini-details">

                          <div className="cw-mini-detail">

                            <span>
                              {event.description}
                            </span>

                          </div>

                        </div>

                        <span className="cw-stay-tuned">
                          Stay Tuned
                        </span>
                      </>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="cw-cta">

        <div className="cw-cta-image">

          <img
            src="/images/cfoot.png"
            alt="Yaduvanshi Students"
          />

        </div>


        <div className="cw-cta-content">

          <div className="cw-cta-label">
            YOUR FUTURE STARTS HERE
          </div>

          <h2 className="cw-cta-title">
            Learn beyond the classroom.
          </h2>

          <div className="cw-cta-subtitle">
            Build skills for higher studies,
            research and your career.
          </div>

          <p className="cw-cta-text">
            Choose a campus where academic learning
            connects with practical skills, expert guidance
            and future opportunities.
          </p>


          <div className="cw-cta-buttons">

            <a
              href="/admission/online-admission"
              className="cw-cta-primary"
            >
              Explore Admissions
              <ArrowRight size={15} />
            </a>

            <a
              href="/"
              className="cw-cta-secondary"
            >
              Discover Yaduvanshi
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ConferenceWorkshop;