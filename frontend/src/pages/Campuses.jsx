import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Building2,
  GraduationCap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   15 SCHOOL CAMPUSES
========================================================= */

const schoolCampuses = [
  {
    id: "school-01",
    name: "Yaduvanshi International School",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/school-01.jpeg",
    link: "https://ysnmgh.yaduvanshigroup.edu.in",
  },
  {
    id: "school-02",
    name: "Yaduvanshi International School",
    location: "Narnaul, Haryana",
    image: "/images/campuses/school-02.jpeg",
    link: "https://ysnnrl.yaduvanshigroup.edu.in",
  },
  {
    id: "school-03",
    name: "Yaduvanshi International School",
    location: "Rewari, Haryana",
    image: "/images/campuses/school-03.jpeg",
    link: "https://ysnrew.yaduvanshigroup.edu.in",
  },
  {
    id: "school-04",
    name: "Yaduvanshi International School",
    location: "Satnali, Haryana",
    image: "/images/campuses/school-04.jpeg",
    link: "https://ysnmgh.yaduvanshigroup.edu.in",
  },
  {
    id: "school-05",
    name: "Yaduvanshi Public School",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/school-05.jpeg",
    link: "https://ypsmgh.yaduvanshigroup.edu.in",
  },
  {
    id: "school-06",
    name: "Yaduvanshi Public School",
    location: "Narnaul, Haryana",
    image: "/images/campuses/school-06.jpeg",
    link: "https://ypsnrl.yaduvanshigroup.edu.in",
  },
  {
    id: "school-07",
    name: "Yaduvanshi Public School",
    location: "Rewari, Haryana",
    image: "/images/campuses/school-07.jpeg",
    link: "https://ysnkosli.yaduvanshigroup.edu.in",
  },
  {
    id: "school-08",
    name: "Yaduvanshi Public School",
    location: "Satnali, Haryana",
    image: "/images/campuses/school-08.jpeg",
    link: "https://ysngurugramsec33.yaduvanshigroup.edu.in/",
  },
  {
    id: "school-09",
    name: "Yaduvanshi School",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/school-09.jpeg",
    link: "https://ysngurugramsec92.yaduvanshigroup.edu.in",
  },
  {
    id: "school-10",
    name: "Yaduvanshi School",
    location: "Narnaul, Haryana",
    image: "/images/campuses/school-10.jpeg",
    link: "https://hvmmandola.yaduvanshigroup.edu.in",
  },
  {
    id: "school-11",
    name: "Yaduvanshi School",
    location: "Rewari, Haryana",
    image: "/images/campuses/school-11.jpeg",
    link: "https://ysnhansi.yaduvanshigroup.edu.in",
  },
  {
    id: "school-12",
    name: "Yaduvanshi School",
    location: "Satnali, Haryana",
    image: "/images/campuses/school-12.jpeg",
    link: "https://ysnjind.yaduvanshigroup.edu.in/",
  },
  {
    id: "school-13",
    name: "Yaduvanshi Educational Campus",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/school-13.jpeg",
    link: "https://srlvmdhanimahu.yaduvanshigroup.edu.in",
  },
  {
    id: "school-14",
    name: "Yaduvanshi Educational Campus",
    location: "Narnaul, Haryana",
    image: "/images/campuses/school-14.jpeg",
    link: "https://ysnsohali.yaduvanshigroup.edu.in/",
  },
  {
    id: "school-15",
    name: "Yaduvanshi Educational Campus",
    location: "Rewari, Haryana",
    image: "/images/campuses/school-15.jpeg",
    link: "https://ysntapukara.yaduvanshigroup.edu.in",

  },
];

/* =========================================================
   20 HIGHER EDUCATION CAMPUSES
========================================================= */

const higherCampuses = [
  {
    id: "college-01",
    name: "Yaduvanshi College of Engineering & Technology",
    location: "Narnaul, Haryana",
    image: "/images/campuses/college-01.jpg",
    link: "https://ycetnnl.yaduvanshigroup.edu.in",
  },
  {
    id: "college-02",
    name: "Yaduvanshi College of Education",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/college-02.jpg",
    link: "https://ydcmgh.yaduvanshigroup.edu.in",
  },
  {
    id: "college-03",
    name: "Yaduvanshi Degree College ",
    location: "Narnaul, Haryana",
    image: "/images/campuses/college-03.jpg",
    link: "https://ydcnnl.yaduvanshigroup.edu.in",
  },
  {
    id: "college-04",
    name: "RBS Degree College",
    location: "Nangal Chaudhary, Haryana",
    image: "/images/campuses/college-04.jpg",
    link: "https://rbsdcths.yaduvanshigroup.edu.in",
  },
  {
    id: "college-05",
    name: "Yaduvanshi College of Engg. & Technology",
    location: "Sohali, Rajasthan",
    image: "/images/campuses/college-05.jpg",
    link: "https://ycetsohali.yaduvanshigroup.edu.in",
  },
  {
    id: "college-06",
    name: "Yaduvanshi College of Education (B.Ed.,M.Ed.)",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/college-06.jpg",
    link: "https://ycemgh.yaduvanshigroup.edu.in",
  },
  {
    id: "college-07",
    name: "Yaduvanshi College of Education (B.Ed.)",
    location: "Narnaul, Haryana",
    image: "/images/campuses/college-07.jpg",
    link: "https://ycennl.yaduvanshigroup.edu.in",
  },
  {
    id: "college-08",
    name: "Yaduvanshi institution of Education (D.El.Ed.)",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/college-08.jpg",
    link: "https://yiemgh.yaduvanshigroup.edu.in",
  },
  {
    id: "college-09",
    name: "Yaduvanshi Institutio of Education (B.P.Ed.)",
    location: "Mahendergarh, Haryana",
    image: "/images/campuses/college-09.jpg",
    link: "https://yioemgh.yaduvanshigroup.edu.in",
  },
  {
    id: "college-10",
    name: "Yaduvanshi Institute of Education ( D.El.Ed.)",
    location: "Narnaul, Haryana",
    image: "/images/campuses/college-10.jpg",
    link: "https://yiennl.yaduvanshigroup.edu.in",
  },
  {
    id: "college-11",
    name: "Yaduvanshi Institute of Education (D.P.Ed.)",
    location: "Narnaul, Haryana",
    image: "/images/campuses/college-11.jpg",
    link: "https://yioennl.yaduvanshigroup.edu.in",
  },
  {
    id: "college-12",
    name: "Yaduvanshi Institute of eDUCATION (B.Ed.)",
    location: "Sohali, Rajasthan",
    image: "/images/campuses/college-12.jpg",
    link: "https://ycesohali.yaduvanshigroup.edu.in",
  },
  {
    id: "college-13",
    name: "Yaduvanshi Institute of Education (4-Year Integrated B.Ed.)",
    location: "Sohali, Rajasthan",
    image: "/images/campuses/college-13.jpg",
    link: "https://ycoesohali.yaduvanshigroup.edu.in",
  },
  {
    id: "college-14",
    name: "Yaduvanshi Institute of Education (D.El.Ed.)",
    location: "Sohali, Rajasthan",
    image: "/images/campuses/college-14.jpg",
    link: "https://yiesohali.yaduvanshigroup.edu.in",
  },
  {
    id: "college-15",
    name: "Yaduvanshi College of Engineering & Technology",
    location: "Sohali, Rajasthan",
    image: "/images/campuses/college-15.jpg",
    link: "https://ycetsohali.yaduvanshigroup.edu.in",
  },
  {
    id: "college-16",
    name: "Yaduvanshi Institute of Polytechnic",
    location: "Sohali, Rajasthan",
    image: "/images/campuses/college-16.jpg",
    link: "https://ypsohali.yaduvanshigroup.edu.in",
  },
  {
    id: "college-17",
    name: "Yaduvanshi Pvt. ITI College",
    location: "Sohali, Rajasthan",
    image: "/images/campuses/college-17.jpg",
    link: "https://yitisohali.yaduvanshigroup.edu.in",
  },
  {
    id: "college-18",
    name: "Hitkari College of Education (B.Ed.)",
    location: "Mandola, Charkhi Dadri, Haryana",
    image: "/images/campuses/college-18.jpg",
    link: "https://hce.yaduvanshigroup.edu.in",
  },
  {
    id: "college-19",
    name: "Sant Roshanlal College of Education (B.Ed.)",
    location: "Jhunjhunu, Rajasthan",
    image: "/images/campuses/college-19.jpg",
    link: "https://srlcoe.yaduvanshigroup.edu.in",
  },
  {
    id: "college-20",
    name: "Sant Roshanlal College of Education (D.El.Ed.)",
    location: "JHunjhunu, Rajasthan",
    image: "/images/campuses/college-20.jpg",
    link: "https://srlce.yaduvanshigroup.edu.in",
  },
];

/* =========================================================
   REVEAL ANIMATION
========================================================= */

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* =========================================================
   CAMPUS CARD
========================================================= */

const CampusCard = ({ campus, index }) => {
  const [imageError, setImageError] = useState(false);
  const cardLabel = `Open ${campus.name}${campus.location ? ` in ${campus.location}` : ""}`;

  const cardContent = (
    <>
      <div className="campus-card-image-wrap">

        {!imageError ? (
          <img
            src={campus.image}
            alt={campus.name}
            className="campus-card-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="campus-image-placeholder">
            <Building2 size={42} />
            <span>Campus Image</span>
          </div>
        )}

        <div className="campus-card-overlay" />

        <div className="campus-card-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="campus-card-location">
          <MapPin size={14} />
          <span>{campus.location}</span>
        </div>

      </div>

      <div className="campus-card-content">

        <div className="campus-card-icon">
          <Building2 size={20} />
        </div>

        <div className="campus-card-text">

          <h3>
            {campus.name}
          </h3>

          <div className="campus-card-explore">
            {campus.link ? "Visit Campus Website" : "Explore Campus"}
            <ArrowRight size={15} />
          </div>

        </div>

      </div>
    </>
  );

  return (
    <article className="campus-card">
      {campus.link ? (
        <a
          href={campus.link}
          className="campus-card-link-wrapper"
          aria-label={cardLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      ) : (
        <Link
          to={`/campuses/${campus.id}`}
          className="campus-card-link-wrapper"
          aria-label={cardLabel}
        >
          {cardContent}
        </Link>
      )}
    </article>
  );
};

/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({
  eyebrow,
  title,
  description,
  icon: Icon = Building2,
}) => {
  return (
    <div className="section-heading">

      <div className="section-eyebrow">
        <span className="section-eyebrow-line" />

        <Icon size={17} />

        <span>{eyebrow}</span>

        <span className="section-eyebrow-line" />
      </div>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}

    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Campuses = () => {

  const totalCampuses =
    schoolCampuses.length +
    higherCampuses.length;

  return (
    <>
      <style>{`

        /* =====================================================
           MAIN
        ===================================================== */

        .campuses-page {
          --navy: #0a2342;
          --navy-dark: #061a32;
          --navy-light: #12385f;

          --orange: #e58a00;
          --gold: #ff9f1c;

          --cream: #f8f9fa;
          --white: #ffffff;

          --text: #2d3748;
          --muted: #64748b;

          width: 100%;

          overflow: hidden;

          background: var(--cream);

          color: var(--text);

          font-family:
            "DM Sans",
            Arial,
            sans-serif;
        }

        .campuses-container {
          width:
            min(1410px, calc(100% - 40px));

          margin: 0 auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .campus-hero {
          position: relative;

          min-height: 470px;

          overflow: hidden;

          background: var(--navy);

          isolation: isolate;
        }

        .campus-hero-bg {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;

          z-index: -3;

          animation:
            heroZoom 18s
            ease-in-out
            infinite alternate;
        }

        @keyframes heroZoom {

          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.045);
          }

        }

        .campus-hero-overlay {
          position: absolute;

          inset: 0;

          z-index: -2;

          background:
            linear-gradient(
              90deg,
              rgba(5, 27, 62, 0.96) 0%,
              rgba(5, 34, 74, 0.88) 35%,
              rgba(5, 39, 80, 0.62) 60%,
              rgba(5, 34, 73, 0.40) 80%,
              rgba(5, 29, 64, 0.28) 100%
            );
        }

        .campus-hero-inner {
          position: relative;

          z-index: 3;

          min-height: 470px;

          display: flex;

          align-items: center;

          width:
            min(1410px, calc(100% - 40px));

          margin: 0 auto;
        }

        .campus-hero-copy {
          width:
            min(780px, 100%);

          padding:
            65px 0 85px;

          color: white;
        }

        /* =====================================================
           BREADCRUMB
        ===================================================== */

        .campus-breadcrumb {
          display: flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 22px;

          color:
            rgba(255,255,255,0.78);

          font-size: 14px;

          font-weight: 500;
        }

        .campus-breadcrumb span:last-child {
          color: var(--gold);

          font-weight: 600;
        }

        /* =====================================================
           HERO EYEBROW
        ===================================================== */

        .campus-hero-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 16px;

          color: var(--gold);

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 1.8px;

          text-transform: uppercase;
        }

        .campus-hero-eyebrow::before {
          content: "";

          width: 34px;

          height: 2px;

          background:
            var(--gold);
        }

        /* =====================================================
           HERO TITLE
        ===================================================== */

        .campus-hero-title {
          margin: 0;

          color: white;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size:
            clamp(44px, 5.5vw, 76px);

          line-height: 1.02;

          font-weight: 700;

          letter-spacing: -1.8px;
        }

        .campus-hero-title span {
          color: var(--gold);
        }

        .campus-hero-accent {
          width: 82px;

          height: 4px;

          margin: 22px 0;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              var(--orange),
              var(--gold)
            );
        }

        .campus-hero-description {
          max-width: 690px;

          margin: 0;

          color:
            rgba(255,255,255,0.84);

          font-size: 17px;

          line-height: 1.8;
        }

        /* =====================================================
           HERO STATS
        ===================================================== */

        .campus-hero-stats {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 28px;

          margin-top: 30px;
        }

        .campus-hero-stat {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .campus-hero-stat-icon {
          width: 38px;

          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          color: var(--gold);

          background:
            rgba(255,255,255,0.10);

          border:
            1px solid
            rgba(255,255,255,0.16);
        }

        .campus-hero-stat strong {
          display: block;

          color: white;

          font-size: 17px;
        }

        .campus-hero-stat small {
          display: block;

          margin-top: 2px;

          color:
            rgba(255,255,255,0.62);

          font-size: 12px;
        }

        /* =====================================================
           HERO CURVE
        ===================================================== */

        .hero-curve {
          position: relative;

          height: 52px;

          margin-top: -1px;

          overflow: hidden;

          background: var(--cream);

          z-index: 10;
        }

        .hero-curve::before {
          content: "";

          position: absolute;

          left: -5%;
          right: -5%;

          top: -39px;

          height: 75px;

          background:
            var(--orange);

          border-radius: 50%;
        }

        .hero-curve::after {
          content: "";

          position: absolute;

          left: -5%;
          right: -5%;

          top: -46px;

          height: 75px;

          background:
            var(--cream);

          border-radius: 50%;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .campuses-intro {
          padding:
            80px 0 40px;
        }

        .section-heading {
          max-width: 850px;

          margin: 0 auto;

          text-align: center;
        }

        .section-eyebrow {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-bottom: 15px;

          color: var(--orange);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 1.8px;

          text-transform: uppercase;
        }

        .section-eyebrow-line {
          width: 35px;

          height: 2px;

          background:
            var(--orange);
        }

        .section-heading h2 {
          margin: 0;

          color:
            var(--navy);

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size:
            clamp(32px, 4vw, 48px);

          line-height: 1.15;
        }

        .section-heading p {
          margin:
            18px auto 0;

          max-width: 760px;

          color:
            var(--muted);

          font-size: 16px;

          line-height: 1.8;
        }

        /* =====================================================
           CAMPUS SECTION
        ===================================================== */

        .campus-section {
          padding:
            45px 0 85px;
        }

        .campus-section-header {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 30px;

          margin-bottom: 28px;
        }

        .campus-section-title {
          display: flex;

          align-items: center;

          gap: 13px;
        }

        .campus-section-title-icon {
          width: 48px;

          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border-radius: 12px;

          color: white;

          background:
            linear-gradient(
              135deg,
              var(--navy),
              var(--navy-light)
            );
        }

        .campus-section-title h2 {
          margin: 0;

          color:
            var(--navy);

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 31px;
        }

        .campus-section-title p {
          margin:
            4px 0 0;

          color:
            var(--muted);

          font-size: 14px;
        }

        .campus-count {
          padding:
            8px 15px;

          border-radius: 999px;

          color:
            var(--navy);

          background:
            rgba(229,138,0,0.10);

          font-size: 13px;

          font-weight: 700;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .campus-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 22px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .campus-card {
          overflow: hidden;

          border-radius: 18px;

          background:
            var(--white);

          border:
            1px solid
            rgba(10,35,66,0.08);

          box-shadow:
            0 8px 30px
            rgba(10,35,66,0.07);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .campus-card:hover {
          transform:
            translateY(-8px);

          box-shadow:
            0 18px 45px
            rgba(10,35,66,0.14);
        }

        /* IMPORTANT:
           Link fills entire card
        */

        .campus-card-link-wrapper {
          display: block;

          color: inherit;

          text-decoration: none;
        }

        .campus-card-image-wrap {
          position: relative;

          height: 225px;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #dbe7f2,
              #eef3f7
            );
        }

        .campus-card-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.6s ease;
        }

        .campus-card:hover
        .campus-card-image {
          transform:
            scale(1.07);
        }

        /* IMAGE PLACEHOLDER */

        .campus-image-placeholder {
          width: 100%;

          height: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-direction: column;

          gap: 8px;

          color:
            rgba(10,35,66,0.35);

          background:
            linear-gradient(
              135deg,
              #e5edf4,
              #f3f6f9
            );

          font-size: 12px;
        }

        .campus-card-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(4,20,43,0.75) 100%
            );
        }

        /* NUMBER */

        .campus-card-number {
          position: absolute;

          top: 13px;

          right: 13px;

          width: 38px;

          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          color: white;

          background:
            rgba(5,27,62,0.78);

          backdrop-filter:
            blur(8px);

          font-size: 12px;

          font-weight: 700;
        }

        /* LOCATION */

        .campus-card-location {
          position: absolute;

          left: 14px;

          bottom: 13px;

          display: inline-flex;

          align-items: center;

          gap: 6px;

          padding:
            7px 11px;

          border-radius: 999px;

          color: white;

          background:
            rgba(5,27,62,0.78);

          backdrop-filter:
            blur(8px);

          font-size: 11px;

          font-weight: 600;
        }

        .campus-card-location svg {
          color:
            var(--gold);
        }

        /* CONTENT */

        .campus-card-content {
          display: flex;

          gap: 13px;

          padding: 18px;
        }

        .campus-card-icon {
          width: 40px;

          height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border-radius: 10px;

          color:
            var(--orange);

          background:
            rgba(229,138,0,0.10);
        }

        .campus-card-text {
          min-width: 0;
        }

        .campus-card-text h3 {
          margin: 0;

          color:
            var(--navy);

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 17px;

          line-height: 1.35;
        }

        .campus-card-explore {
          display: flex;

          align-items: center;

          gap: 6px;

          margin-top: 10px;

          color:
            var(--orange);

          font-size: 12px;

          font-weight: 700;

          transition:
            gap 0.25s ease;
        }

        .campus-card:hover
        .campus-card-explore {
          gap: 10px;
        }

        /* =====================================================
           REVEAL
        ===================================================== */

        .reveal {
          opacity: 0;

          transform:
            translateY(28px);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .reveal-visible {
          opacity: 1;

          transform:
            translateY(0);
        }

        /* =====================================================
           CTA
        ===================================================== */

        .campuses-cta {
          position: relative;

          margin:
            10px 0 90px;

          padding:
            55px 45px;

          overflow: hidden;

          border-radius: 24px;

          color: white;

          background:
            linear-gradient(
              135deg,
              var(--navy),
              #123a63
            );
        }

        .campuses-cta-content {
          position: relative;

          z-index: 2;

          max-width: 720px;
        }

        .campuses-cta h2 {
          margin: 0;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size:
            clamp(28px, 4vw, 42px);
        }

        .campuses-cta p {
          margin:
            14px 0 25px;

          color:
            rgba(255,255,255,0.75);

          line-height: 1.7;
        }

        .campuses-cta-button {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding:
            13px 21px;

          border-radius: 8px;

          color: white;

          background:
            var(--orange);

          font-size: 14px;

          font-weight: 700;

          text-decoration: none;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .campuses-cta-button:hover {
          transform:
            translateY(-2px);

          background:
            var(--gold);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .campus-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 800px) {

          .campus-hero {
            min-height: 450px;
          }

          .campus-hero-inner {
            min-height: 450px;
          }

          .campus-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5,27,62,0.94),
                rgba(5,34,74,0.78)
              );
          }

          .campus-hero-copy {
            padding:
              55px 0 75px;
          }

          .campus-hero-title {
            font-size:
              clamp(40px, 11vw, 60px);
          }

          .campus-hero-description {
            font-size: 15px;
          }

          .campus-hero-stats {
            gap: 16px;
          }

          .campus-section-header {
            align-items:
              flex-start;

            flex-direction:
              column;

            margin-bottom:
              23px;
          }

          .campus-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;
          }

          .campus-card-image-wrap {
            height: 190px;
          }

          .campus-card-content {
            padding: 15px;
          }

          .campus-card-icon {
            display: none;
          }

          .campus-card-text h3 {
            font-size: 15px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 520px) {

          .campuses-container,
          .campus-hero-inner {
            width:
              min(100% - 28px, 1410px);
          }

          .campus-hero {
            min-height: 500px;
          }

          .campus-hero-inner {
            min-height: 500px;
          }

          .campus-hero-copy {
            padding:
              48px 0 75px;
          }

          .campus-breadcrumb {
            font-size: 12px;
          }

          .campus-hero-eyebrow {
            font-size: 12px;

            letter-spacing:
              1.4px;
          }

          .campus-hero-title {
            font-size: 43px;

            letter-spacing: -1px;
          }

          .campus-hero-description {
            font-size: 14px;
          }

          .campus-hero-stats {
            flex-direction:
              column;

            align-items:
              flex-start;

            gap: 12px;
          }

          .campus-grid {
            grid-template-columns: 1fr;
          }

          .campus-card-image-wrap {
            height: 220px;
          }

          .campuses-cta {
            padding:
              38px 25px;

            border-radius: 18px;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .campus-hero-bg {
            animation: none;
          }

          .campus-card,
          .campus-card-image,
          .campus-card-explore,
          .campuses-cta-button {
            transition: none;
          }

          .reveal {
            opacity: 1;

            transform: none;

            transition: none;
          }

        }

      `}</style>

      <main className="campuses-page">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="campus-hero">

          <img
            className="campus-hero-bg"
            src="/images/collegebg.png"
            alt=""
            aria-hidden="true"
          />

          <div
            className="campus-hero-overlay"
            aria-hidden="true"
          />

          <div className="campus-hero-inner">

            <div className="campus-hero-copy">

              {/* Breadcrumb */}

              <div className="campus-breadcrumb">

                <span>Home</span>

                <ChevronRight size={14} />

                <span>Our Campuses</span>

              </div>

              {/* Eyebrow */}

              <div className="campus-hero-eyebrow">
                Yaduvanshi Group of Institutions
              </div>

              {/* Heading */}

              <h1 className="campus-hero-title">
                Our <span>Campuses</span>
              </h1>

              <div className="campus-hero-accent" />

              <p className="campus-hero-description">
                Explore the educational campuses of the
                Yaduvanshi Group of Institutions, providing
                learning opportunities across schools and
                higher education institutions.
              </p>

              {/* Stats */}

              <div className="campus-hero-stats">

                <div className="campus-hero-stat">

                  <div className="campus-hero-stat-icon">
                    <Building2 size={19} />
                  </div>

                  <div>
                    <strong>15</strong>
                    <small>School Campuses</small>
                  </div>

                </div>

                <div className="campus-hero-stat">

                  <div className="campus-hero-stat-icon">
                    <GraduationCap size={19} />
                  </div>

                  <div>
                    <strong>20</strong>
                    <small>Higher Campuses</small>
                  </div>

                </div>

                <div className="campus-hero-stat">

                  <div className="campus-hero-stat-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <strong>{totalCampuses}</strong>
                    <small>Total Campuses</small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* HERO CURVE */}

        <div className="hero-curve" />

        {/* ===================================================
            INTRO
        =================================================== */}

        <section className="campuses-intro">

          <div className="campuses-container">

            <Reveal>

              <SectionHeading
                eyebrow="Our Educational Network"
                title="35 Campuses, One Educational Vision"
                description="The Yaduvanshi Group of Institutions has established a network of school and higher education campuses designed to provide students with opportunities for academic learning, practical exposure, extracurricular activities and overall development."
                icon={Building2}
              />

            </Reveal>

          </div>

        </section>

        {/* ===================================================
            SCHOOL CAMPUSES
        =================================================== */}

        <section className="campus-section">

          <div className="campuses-container">

            <Reveal>

              <div className="campus-section-header">

                <div className="campus-section-title">

                  <div className="campus-section-title-icon">
                    <Building2 size={23} />
                  </div>

                  <div>

                    <h2>
                      School Campuses
                    </h2>

                    <p>
                      Our school-level educational campuses.
                    </p>

                  </div>

                </div>

                <div className="campus-count">
                  15 Campuses
                </div>

              </div>

            </Reveal>

            <div className="campus-grid">

              {schoolCampuses.map(
                (campus, index) => (

                  <Reveal
                    key={campus.id}
                    delay={index * 50}
                  >

                    <CampusCard
                      campus={campus}
                      index={index}
                    />

                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>

        {/* ===================================================
            HIGHER EDUCATION CAMPUSES
        =================================================== */}

        <section className="campus-section">

          <div className="campuses-container">

            <Reveal>

              <div className="campus-section-header">

                <div className="campus-section-title">

                  <div className="campus-section-title-icon">
                    <GraduationCap size={23} />
                  </div>

                  <div>

                    <h2>
                      Higher Education Campuses
                    </h2>

                    <p>
                      Colleges and higher education
                      institutions of the Yaduvanshi Group.
                    </p>

                  </div>

                </div>

                <div className="campus-count">
                  20 Campuses
                </div>

              </div>

            </Reveal>

            <div className="campus-grid">

              {higherCampuses.map(
                (campus, index) => (

                  <Reveal
                    key={campus.id}
                    delay={index * 50}
                  >

                    <CampusCard
                      campus={campus}
                      index={index}
                    />

                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>

        {/* ===================================================
            CTA
        =================================================== */}

        <div className="campuses-container">

          <Reveal>

            <section className="campuses-cta">

              <div className="campuses-cta-content">

                <h2>
                  Building Futures Through Education
                </h2>

                <p>
                  Explore the Yaduvanshi Group of Institutions
                  and discover educational opportunities across
                  our school and higher education campuses.
                </p>

                <Link
                  to="/contact"
                  className="campuses-cta-button"
                >
                  Contact Us

                  <ArrowRight size={17} />

                </Link>

              </div>

            </section>

          </Reveal>

        </div>

      </main>
    </>
  );
};

export default Campuses;