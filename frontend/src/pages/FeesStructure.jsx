import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  IndianRupee,
  FileText,
  CheckCircle2,
  Download,
  Phone,
  ArrowRight,
} from "lucide-react";
import { apiFetch } from "../lib/api";

const leftCourses = [
  {
    course: "M.Sc.",
    duration: "2 Years",
    details: [
      "Physics (80)",
      "Chemistry (80)",
      "Maths (80)",
      "Botany (40)",
      "Zoology (40)",
      "Geography (40)",
    ],
    fee: "75,000",
    first: "45,000",
    second: "30,000",
    eligibility: "B.Sc. with relevant subject",
    type: "PG",
  },
  {
    course: "B.Sc.",
    duration: "3 Years",
    details: ["Pass Course", "Med. (120)", "N.Med. (340)"],
    fee: "58,000",
    first: "35,000",
    second: "23,000",
    eligibility: "PCB / PCM in 10+2 (Minimum 45%)",
    type: "UG",
  },
  {
    course: "B.Sc.",
    duration: "4 Years",
    details: [
      "Honors in Physics (40)",
      "Honors in Maths (40)",
      "Honors in Botany / Zoology (40)",
    ],
    fee: "65,000",
    first: "40,000",
    second: "25,000",
    eligibility: "10+2 with relevant subjects",
    type: "UG",
  },
  {
    course: "B.Com.",
    duration: "3 Years",
    details: ["Commerce Programme"],
    fee: "45,000",
    first: "25,000",
    second: "20,000",
    eligibility: "10+2 in any stream",
    type: "UG",
  },
  {
    course: "M.Com.",
    duration: "2 Years",
    details: ["Commerce Programme"],
    fee: "45,000",
    first: "25,000",
    second: "20,000",
    eligibility: "B.Com. / equivalent qualification",
    type: "PG",
  },
  {
    course: "B.A.",
    duration: "3 Years",
    details: ["Arts Programme"],
    fee: "45,000",
    first: "25,000",
    second: "20,000",
    eligibility: "10+2 in any stream",
    type: "UG",
  },
];

const rightCourses = [
  {
    course: "B.Tech.",
    duration: "4 Years",
    details: [
      "CSE (120)",
      "CSE AI & ML (60)",
      "ECE (60)",
      "Civil (30)",
      "Electrical (30)",
    ],
    fee: "1,20,000",
    first: "60,000",
    second: "60,000",
    eligibility: "PCM in 10+2 (Minimum 45%)",
    type: "UG",
  },
  {
    course: "M.Tech.",
    duration: "2 Years",
    details: ["CSE (18)", "ECE (18)", "Mech. (18)"],
    fee: "85,675",
    first: "42,838",
    second: "42,837",
    eligibility: "B.Tech. / relevant qualification",
    type: "PG",
  },
  {
    course: "M.B.A.",
    duration: "2 Years",
    details: [
      "HRM",
      "Marketing Management",
      "Financial Management",
      "International Business",
    ],
    fee: "66,000",
    first: "33,000",
    second: "33,000",
    eligibility: "Any UG Course (Minimum 50%)",
    type: "PG",
  },
  {
    course: "Polytechnic",
    duration: "3 Years",
    details: [
      "Civil Engg. (30)",
      "Mech. Engg. (60)",
      "Electrical Engg.",
    ],
    fee: "45,000",
    first: "22,500",
    second: "22,500",
    eligibility: "10th / equivalent qualification",
    type: "DIPLOMA",
  },
  {
    course: "BBA / BCA",
    duration: "3 Years",
    details: ["BBA (60)", "BCA (120)"],
    fee: "55,000",
    first: "27,500",
    second: "27,500",
    eligibility: "10+2 (Any Stream) with minimum 45%",
    type: "UG",
  },
  {
    course: "B.Ed.",
    duration: "2 Years",
    details: ["Teacher Education Programme"],
    fee: "50,440",
    first: "As notified",
    second: "As notified",
    eligibility: "UG / PG qualification as per applicable criteria",
    type: "UG",
  },
];

/*
  SCHOLARSHIP SLABS
  -----------------
  The supplied fee-structure source does not contain an official percentage-
  based scholarship policy. These slabs are UI placeholders and must be
  replaced with the college-approved scholarship policy before publishing.
*/
const scholarshipRules = [
  { min: 90, max: 100, scholarship: 50, label: "90% – 100%" },
  { min: 80, max: 89.99, scholarship: 35, label: "80% – 89.99%" },
  { min: 70, max: 79.99, scholarship: 25, label: "70% – 79.99%" },
  { min: 60, max: 69.99, scholarship: 15, label: "60% – 69.99%" },
  { min: 50, max: 59.99, scholarship: 10, label: "50% – 59.99%" },
];

const getScholarship = (percentage) => {
  const value = Number(percentage);
  if (!Number.isFinite(value) || value < 0 || value > 100) return null;
  return scholarshipRules.find((rule) => value >= rule.min && value <= rule.max) ||
    { scholarship: 0, label: "Below scholarship threshold" };
};

const normalizeSearchText = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

export default function FeesStructure() {
  const [search, setSearch] = useState("");
  const [liveFees, setLiveFees] = useState([]);
  const [percentage, setPercentage] = useState("");
  const scholarshipResult = getScholarship(percentage);

  useEffect(() => {
    const fetchFees = async () => {
      try {
        const result = await apiFetch("/api/fees");
        const data = result.fees || [];
        setLiveFees(
          data.map((fee) => ({
            course: fee.course,
            duration: fee.duration,
            details: [fee.course],
            fee: Number(fee.total_fee || 0).toLocaleString("en-IN"),
            first: Number(fee.first_year_fee || 0).toLocaleString("en-IN"),
            second: Number(fee.other_fee || 0).toLocaleString("en-IN"),
            eligibility: "Fee details managed in admin panel",
            type: "Custom",
          }))
        );
      } catch (error) {
        console.error("Error fetching fee records:", error);
      }
    };

    fetchFees();
  }, []);

  const allCourses = [...leftCourses, ...rightCourses, ...liveFees];

  const filteredLeft = useMemo(() => {
    return leftCourses.filter((item) =>
      normalizeSearchText(
        `${item.course} ${item.details.join(" ")} ${item.eligibility}`
      ).includes(normalizeSearchText(search))
    );
  }, [search]);

  const filteredRight = useMemo(() => {
    return rightCourses.filter((item) =>
      normalizeSearchText(
        `${item.course} ${item.details.join(" ")} ${item.eligibility}`
      ).includes(normalizeSearchText(search))
    );
  }, [search]);

  return (
    <div className="fees-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        .fees-page {
          min-height: 100vh;
          background: #fbf7f1;
          color: #072656;
          font-family: "DM Sans", sans-serif;
        }

        /* =========================
           HERO
        ========================= */

        .fees-hero {
          position: relative;
          min-height: 360px;
          overflow: hidden;
          background:
          
            linear-gradient(
              120deg,
              #061f42,
              #061d45 70%,
              #061d45 100%
            );
        }

        .fees-hero::before {
          content: "";
          position: absolute;
          width: 460px;
          height: 460px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
          right: -170px;
          top: -230px;
        }

        .fees-hero::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(255,118,0,.18);
          border-radius: 50%;
          right: 120px;
          top: 50px;
        }

        .hero-inner {
          position: relative;
          z-index: 4;
          max-width: 1250px;
          margin: auto;
          padding: 68px 30px 125px;
        }

        .breadcrumb {
          display: flex;
          gap: 8px;
          align-items: center;
          color: rgba(255,255,255,.65);
          font-size: 13px;
          margin-bottom: 25px;
        }

        .breadcrumb .current {
          color: #ff8625;
          font-weight: 700;
        }

        .session-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 15px;
          border-radius: 30px;
          background: #ff7600;
          color: white;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .7px;
          text-transform: uppercase;
          box-shadow: 0 8px 25px rgba(255,118,0,.25);
        }

        .hero-title {
          margin: 18px 0 10px;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1.05;
        }

        .hero-title span {
          color: #ff7a08;
        }

        .hero-description {
          max-width: 690px;
          margin: 0;
          color: rgba(255,255,255,.75);
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-wave-wrapper {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 145px;
          z-index: 8;
          pointer-events: none;
        }

        .hero-wave {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
        }

        .white-wave {
          fill: #fffdf9;
        }

        .orange-wave-line {
          fill: none;
          stroke: #ff7900;
          stroke-width: 5;
          stroke-linecap: round;
        }

        /* =========================
           MAIN
        ========================= */

        .fees-container {
          width: min(1280px, calc(100% - 40px));
          margin: auto;
          padding: 20px 0 90px;
        }

        .intro-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 25px;
          margin-bottom: 25px;
        }

        .section-kicker {
          color: #ef6900;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.7px;
          font-weight: 800;
          margin-bottom: 7px;
        }

        .intro-title {
          margin: 0;
          color: #092a51;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 34px;
        }

        .intro-text {
          max-width: 620px;
          margin: 8px 0 0;
          color: #717b88;
          font-size: 14px;
          line-height: 1.7;
        }

        /* SEARCH */

        .search-box {
          min-width: 270px;
          position: relative;
        }

        .search-box svg {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #8b95a1;
        }

        .search-box input {
          width: 100%;
          height: 44px;
          border: 1px solid #ded8d0;
          border-radius: 10px;
          background: white;
          outline: none;
          padding: 0 14px 0 40px;
          color: #1d2939;
          font-family: inherit;
        }

        .search-box input:focus {
          border-color: #ff7600;
          box-shadow: 0 0 0 3px rgba(255,118,0,.1);
        }

        /* =========================
           FEE SHEET
        ========================= */

        .fee-sheet {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          align-items: start;
        }

        .fee-column {
          overflow: hidden;
          border: 1px solid #e4c7a8;
          border-radius: 12px;
          background: white;
          box-shadow: 0 12px 35px rgba(35,42,55,.07);
        }

        .fee-column-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 94px 94px 94px;
          background: #c91525;
          color: white;
        }

        .course-heading {
          padding: 14px 12px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .fee-heading {
          padding: 10px 5px;
          text-align: center;
          border-left: 1px solid rgba(255,255,255,.3);
          font-size: 10px;
          font-weight: 800;
          line-height: 1.15;
        }

        .fee-heading small {
          display: block;
          margin-top: 3px;
          font-size: 8px;
          font-weight: 500;
          opacity: .85;
        }

        .session-strip {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-height: 30px;
          padding: 5px 12px;
          background: #fff3e6;
          border-bottom: 1px solid #e6c6a5;
          color: #a92820;
          font-size: 11px;
          font-weight: 800;
        }

        .fee-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 94px 94px 94px;
          min-height: 78px;
          border-bottom: 1px solid #d98436;
        }

        .fee-row:last-child {
          border-bottom: none;
        }

        .course-info {
          min-width: 0;
          padding: 10px 11px;
          background: #fffdf9;
        }

        .course-name {
          display: flex;
          align-items: baseline;
          gap: 5px;
          flex-wrap: wrap;
          margin-bottom: 3px;
          color: #c91322;
          font-size: 17px;
          line-height: 1.1;
          font-weight: 800;
        }

        .course-duration {
          color: #111827;
          font-size: 9px;
          font-weight: 700;
        }

        .course-details {
          margin: 2px 0;
          color: #263346;
          font-size: 9.5px;
          line-height: 1.35;
        }

        .course-details div {
          display: inline;
        }

        .course-details div:not(:last-child)::after {
          content: ", ";
        }

        .eligibility {
          margin-top: 5px;
          color: #5f6875;
          font-size: 8.5px;
          line-height: 1.25;
        }

        .eligibility strong {
          color: #222d3d;
        }

        .fee-cell {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 6px;
          background: #f9e1c9;
          border-left: 1px solid #efc89f;
          color: #333a44;
          font-size: 11px;
          font-weight: 800;
        }

        .fee-cell.first {
          background: #fff0df;
        }

        .fee-cell.second {
          background: #f7dfc5;
        }

        .fee-cell span {
          display: block;
        }

        .documents {
          margin: 16px 12px 14px;
          border: 1px solid #eb8737;
          border-radius: 7px;
          overflow: hidden;
        }

        .documents-title {
          padding: 6px 9px;
          background: #fff6ed;
          color: #e56809;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 15px;
          font-weight: 700;
        }

        .documents-text {
          padding: 8px 10px;
          color: #5b6572;
          font-size: 8.5px;
          line-height: 1.5;
        }

        /* =========================
           HIGHLIGHT
        ========================= */

        .fee-note {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin: 28px 0;
          padding: 16px 18px;
          border-radius: 12px;
          border: 1px solid #f0cfad;
          background: #fff3e7;
        }

        .fee-note-icon {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #ff7600;
          color: white;
        }

        .fee-note strong {
          display: block;
          color: #092a51;
          font-size: 13px;
          margin-bottom: 3px;
        }

        .fee-note p {
          margin: 0;
          color: #707986;
          font-size: 12px;
          line-height: 1.55;
        }

        /* =========================
           QUICK SUMMARY
        ========================= */

        .summary-section {
          margin-top: 45px;
        }

        .summary-title {
          margin: 0 0 18px;
          color: #092a51;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .summary-card {
          padding: 20px;
          border-radius: 13px;
          background: white;
          border: 1px solid #e8ded4;
          box-shadow: 0 8px 25px rgba(30,40,55,.05);
        }

        .summary-card-label {
          color: #7b8490;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .8px;
          font-weight: 700;
        }

        .summary-card-value {
          margin-top: 5px;
          color: #c91423;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 27px;
          font-weight: 700;
        }

        /* =========================
           CTA
        ========================= */

        .admission-cta {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          margin-top: 45px;
          padding: 32px 35px;
          border-radius: 18px;
          background: linear-gradient(115deg, #062349, #0b3a70);
          color: white;
        }

        .admission-cta::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
          right: -60px;
          top: -90px;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content h2 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
        }

        .cta-content p {
          margin: 7px 0 0;
          color: rgba(255,255,255,.7);
          font-size: 13px;
        }

        .cta-buttons {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 18px;
          border-radius: 9px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition: .25s;
        }

        .cta-primary {
          background: #ff7600;
          color: white;
        }

        .cta-secondary {
          background: rgba(255,255,255,.09);
          color: white;
          border: 1px solid rgba(255,255,255,.18);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
        }

        /* =========================
           SCHOLARSHIP
        ========================= */

        .scholarship-section {
          margin-top: 50px;
          padding: 32px;
          border-radius: 20px;
          background: linear-gradient(135deg, #fff7ed, #fffdf9);
          border: 1px solid #f0d1b1;
          box-shadow: 0 10px 30px rgba(35,42,55,.05);
        }
        .scholarship-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 25px; margin-bottom: 25px;
        }
        .scholarship-header h2 {
          margin: 0 0 7px; color: #092a51;
          font-family: "Playfair Display", Georgia, serif; font-size: 30px;
        }
        .scholarship-header p {
          max-width: 700px; margin: 0; color: #707986; font-size: 13px; line-height: 1.65;
        }
        .scholarship-badge {
          flex: 0 0 auto; padding: 9px 13px; border-radius: 30px;
          background: #ff7600; color: white; font-size: 11px; font-weight: 800;
        }
        .scholarship-content {
          display: grid; grid-template-columns: 1.25fr .75fr; gap: 20px;
        }
        .scholarship-table {
          overflow: hidden; background: white; border: 1px solid #eadfd4; border-radius: 13px;
        }
        .scholarship-table-head, .scholarship-table-row {
          display: grid; grid-template-columns: 1fr 1fr;
        }
        .scholarship-table-head {
          background: #092a51; color: white; font-size: 12px; font-weight: 800;
        }
        .scholarship-table-head div, .scholarship-table-row div { padding: 13px 15px; }
        .scholarship-table-row {
          border-bottom: 1px solid #eee5dc; color: #394555; font-size: 12px;
        }
        .scholarship-table-row:last-child { border-bottom: 0; }
        .scholarship-table-row strong { color: #c91423; }
        .scholarship-calculator {
          background: #092a51; color: white; border-radius: 15px; padding: 23px;
        }
        .scholarship-calculator h3 {
          margin: 0 0 7px; font-family: "Playfair Display", Georgia, serif; font-size: 24px;
        }
        .scholarship-calculator p {
          margin: 0 0 18px; color: rgba(255,255,255,.68); font-size: 12px; line-height: 1.55;
        }
        .percentage-input {
          width: 100%; height: 46px; border: 1px solid rgba(255,255,255,.2);
          border-radius: 9px; background: rgba(255,255,255,.08); color: white; padding: 0 13px; outline: none;
        }
        .percentage-input::placeholder { color: rgba(255,255,255,.48); }
        .scholarship-result {
          margin-top: 17px; padding: 15px; border-radius: 10px;
          background: rgba(255,118,0,.13); border: 1px solid rgba(255,118,0,.35);
        }
        .scholarship-result small { display: block; color: rgba(255,255,255,.62); font-size: 10px; margin-bottom: 4px; }
        .scholarship-result strong { color: #ff9a35; font-size: 27px; }
        .scholarship-result span { display: block; color: rgba(255,255,255,.72); font-size: 11px; margin-top: 3px; }
        .scholarship-disclaimer { margin-top: 14px; color: #8a6b4e; font-size: 10px; line-height: 1.5; }
        .get-admission-note {
          display: inline-flex; align-items: center; gap: 7px; margin-top: 11px;
          color: rgba(255,255,255,.72); font-size: 11px;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 1100px) {
          .fee-column-header,
          .fee-row {
            grid-template-columns: minmax(0, 1fr) 78px 78px 78px;
          }

          .fee-cell {
            font-size: 10px;
          }

          .summary-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 850px) {
          .scholarship-content { grid-template-columns: 1fr; }
          .scholarship-header { flex-direction: column; }

          .fee-sheet {
            grid-template-columns: 1fr;
          }

          .intro-row {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .fees-container {
            width: min(100% - 24px, 1280px);
          }

          .hero-inner {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero-title {
            font-size: 42px;
          }

          .fee-column {
            overflow-x: auto;
          }

          .fee-column-header,
          .fee-row {
            min-width: 620px;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }

          .admission-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 25px;
          }
        }
      `}</style>

      {/* =========================
          HERO
      ========================= */}

      <section className="fees-hero">
        <div className="hero-inner">

          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Admission</span>
            <span>/</span>
            <span className="current">Fees Structure</span>
          </div>

          <div className="session-badge">
            <IndianRupee size={14} />
            Session 2026–27
          </div>

          <h1 className="hero-title">
            Fee <span>Structure</span>
          </h1>

          <p className="hero-description">
            Explore the programme-wise fee structure, installment
            details and eligibility information for admission at
            Yaduvanshi Degree College.
          </p>
        </div>

        <div className="hero-wave-wrapper">
          <svg
            className="hero-wave"
            viewBox="0 0 1536 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="orange-wave-line"
              d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1536,45"
            />

            <path
              className="white-wave"
              d="M0,130 C150,220 355,220 555,145 C775,64 990,100 1160,137 C1280,163 1365,145 1440,98 C1490,72 1515,57 1536,50 L1536,220 L0,220 Z"
            />
          </svg>
        </div>
      </section>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="fees-container">

        <div className="intro-row">
          <div>
            <div className="section-kicker">
              Admission 2026–27
            </div>

            <h2 className="intro-title">
              Programme Fee Details
            </h2>

            <p className="intro-text">
              The fee structure below presents the programme-wise
              total fee and installment schedule in a compact format.
            </p>
          </div>

          <div className="search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* NOTICE */}

        <div className="fee-note">
          <div className="fee-note-icon">
            <IndianRupee size={18} />
          </div>

          <div>
            <strong>Important Fee Information</strong>

            <p>
              Fees shown below are based on the supplied 2026–27
              fee structure. University, examination, registration
              and other applicable charges may be separate where
              applicable.
            </p>
          </div>
        </div>

        {/* =========================
            TWO TABLES
        ========================= */}

        <section className="fee-sheet">

          {/* LEFT */}

          <FeeColumn
            courses={filteredLeft}
          />

          {/* RIGHT */}

          <FeeColumn
            courses={filteredRight}
          />

        </section>

        {/* =========================
            SUMMARY
        ========================= */}

        <section className="summary-section">
          <h2 className="summary-title">
            Admission at a Glance
          </h2>

          <div className="summary-grid">

            <div className="summary-card">
              <div className="summary-card-label">
                Programmes Listed
              </div>

              <div className="summary-card-value">
                {allCourses.length}+
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-card-label">
                Admission Session
              </div>

              <div className="summary-card-value">
                2026–27
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-card-label">
                Installments
              </div>

              <div className="summary-card-value">
                2
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-card-label">
                Institution
              </div>

              <div className="summary-card-value">
                YDC
              </div>
            </div>

          </div>
        </section>

        {/* =========================
            DOCUMENTS
        ========================= */}

        <div className="fee-note" style={{ marginTop: "30px" }}>
          <div className="fee-note-icon">
            <FileText size={18} />
          </div>

          <div>
            <strong>Documents Generally Required</strong>

            <p>
              10th Marksheet, 12th Marksheet, Character Certificate,
              Migration Certificate where applicable, Aadhar Card,
              Family ID, Income Certificate, Category Certificate,
              passport-size photographs and other documents as
              specified by the college.
            </p>
          </div>
        </div>

        {/* =========================
            SCHOLARSHIP
        ========================= */}

        <section className="scholarship-section">
          <div className="scholarship-header">
            <div>
              <div className="section-kicker">Merit Support</div>
              <h2>Scholarship Based on Percentage</h2>
              <p>
                Students can check the percentage-based scholarship structure
                and estimate the applicable merit slab before beginning the
                admission process.
              </p>
            </div>
            <div className="scholarship-badge">Merit Scholarship</div>
          </div>

          <div className="scholarship-content">
            <div className="scholarship-table">
              <div className="scholarship-table-head">
                <div>Qualifying Percentage</div><div>Scholarship</div>
              </div>
              {scholarshipRules.map((rule) => (
                <div className="scholarship-table-row" key={rule.label}>
                  <div>{rule.label}</div><div><strong>{rule.scholarship}%</strong></div>
                </div>
              ))}
            </div>

            <div className="scholarship-calculator">
              <h3>Check Your Scholarship</h3>
              <p>Enter your qualifying percentage to see the configured scholarship slab.</p>
              <input
                className="percentage-input" type="number" min="0" max="100" step="0.01"
                placeholder="Enter percentage e.g. 82.5" value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
              />
              {percentage !== "" && (
                <div className="scholarship-result">
                  <small>Estimated scholarship slab</small>
                  <strong>{scholarshipResult?.scholarship ?? 0}%</strong>
                  <span>{scholarshipResult?.label || "Enter a valid percentage"}</span>
                </div>
              )}
              <div className="scholarship-disclaimer">
                Scholarship eligibility, percentage slabs and applicable conditions must be confirmed against the college's officially approved scholarship policy before publication.
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CTA
        ========================= */}

        <section className="admission-cta">

          <div className="cta-content">
            <h2>Ready to Get Admission?</h2>

            <p>
              Check your fee structure, explore scholarship support and begin your admission process online.
            </p>

            <div className="get-admission-note">
              <CheckCircle2 size={14} />
              Online admission assistance available
            </div>
          </div>

          <div className="cta-buttons">

            <a
              href="/admission/online-admission"
              className="cta-btn cta-primary"
            >
              Apply Now
              <ArrowRight size={16} />
            </a>

            <a
              href="/contact"
              className="cta-btn cta-secondary"
            >
              <Phone size={15} />
              Contact Us
            </a>

          </div>

        </section>

      </main>
    </div>
  );
}


/* =========================================
   FEE COLUMN COMPONENT
========================================= */

function FeeColumn({ courses }) {
  return (
    <div className="fee-column">

      <div className="session-strip">
        Session: 2026–27
      </div>

      <div className="fee-column-header">

        <div className="course-heading">
          Programme
        </div>

        <div className="fee-heading">
          Total Fees
          <small>Annual</small>
        </div>

        <div className="fee-heading">
          1st Installment
          <small>At admission</small>
        </div>

        <div className="fee-heading">
          2nd Installment
          <small>In January</small>
        </div>

      </div>

      {courses.map((item, index) => (
        <div className="fee-row" key={index}>

          <div className="course-info">

            <div className="course-name">
              {item.course}

              <span className="course-duration">
                ({item.duration})
              </span>
            </div>

            <div className="course-details">
              {item.details.map((detail, i) => (
                <div key={i}>
                  {detail}
                </div>
              ))}
            </div>

            <div className="eligibility">
              <strong>Eligibility:</strong>{" "}
              {item.eligibility}
            </div>

          </div>

          <div className="fee-cell">
            <span>₹ {item.fee}</span>
          </div>

          <div className="fee-cell first">
            <span>₹ {item.first}</span>
          </div>

          <div className="fee-cell second">
            <span>₹ {item.second}</span>
          </div>

        </div>
      ))}

      {courses.length > 0 && (
        <div className="documents">

          <div className="documents-title">
            List of Documents
          </div>

          <div className="documents-text">
            10th Marksheet, 12th Marksheet, Character Certificate,
            Migration Certificate, Aadhar Card, Family ID,
            Income Certificate, Category Certificate and
            passport-size photographs.
          </div>

        </div>
      )}

    </div>
  );
}