import React, { useState } from "react";
import {
  ShieldCheck,
  FileText,
  GraduationCap,
  BookOpen,
  Clock3,
  CreditCard,
  UserCheck,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Phone,
  ClipboardCheck,
} from "lucide-react";

export default function RulesRegulations() {
  const [openSection, setOpenSection] = useState(0);

  const ruleSections = [
    {
      icon: ClipboardCheck,
      title: "Admission & Registration",
      short: "Important requirements for admission and registration.",
      rules: [
        "Admission shall be granted only after submission of the required documents and completion of the prescribed admission procedure.",
        "Students must provide correct and complete information in the admission form.",
        "Admission is subject to fulfilment of the eligibility conditions prescribed for the concerned programme.",
        "Original certificates and documents may be required for verification at the time of admission.",
        "A student must complete registration within the prescribed schedule notified by the college.",
        "Admission may be cancelled if any information or document submitted by the applicant is found to be false or incorrect.",
      ],
    },
    {
      icon: GraduationCap,
      title: "Academic Rules",
      short: "Rules related to classes, attendance and academic discipline.",
      rules: [
        "Students are expected to attend classes regularly and maintain the attendance required under applicable university and college rules.",
        "Students should report to classes on time and follow the academic schedule issued by the college.",
        "Students are expected to participate sincerely in lectures, practicals, tutorials, examinations and other academic activities.",
        "Students must carry their identity card while attending the college.",
        "Students should follow the instructions issued by teachers and authorised college authorities.",
        "Any academic work, assignment or practical record should be submitted within the prescribed deadline.",
      ],
    },
    {
      icon: BookOpen,
      title: "Examination Rules",
      short: "Guidelines for internal and university examinations.",
      rules: [
        "Students must appear for examinations according to the schedule notified by the college or affiliating university.",
        "A valid college identity card and examination-related documents must be carried wherever required.",
        "Students must follow all instructions issued by the examination authorities.",
        "Use of unfair means in an examination shall be dealt with according to the applicable rules.",
        "Students should reach the examination venue sufficiently before the scheduled commencement of the examination.",
        "Examination forms and prescribed examination fees must be submitted within the notified dates.",
      ],
    },
    {
      icon: CreditCard,
      title: "Fee & Payment Rules",
      short: "Important information regarding college fees.",
      rules: [
        "Students must pay the prescribed fees within the dates notified by the college.",
        "Fee payment should be made only through the officially authorised payment methods.",
        "Students should retain the fee receipt or transaction proof for future reference.",
        "University examination, registration and other applicable charges may be payable separately.",
        "Delay in payment may attract applicable late fees or other consequences as per college rules.",
        "Fees once paid shall be governed by the applicable refund and cancellation policy of the college.",
      ],
    },
    {
      icon: UserCheck,
      title: "Student Conduct",
      short: "Expected behaviour and responsibilities on campus.",
      rules: [
        "Students are expected to maintain discipline and respectful behaviour within the college campus.",
        "Students must respect faculty members, staff, visitors and fellow students.",
        "Damage to college property may result in disciplinary action and recovery of the applicable cost.",
        "Students should maintain cleanliness and use campus facilities responsibly.",
        "Unauthorised activities, disturbance of academic work or behaviour affecting the college environment may invite disciplinary action.",
        "Students should follow all notices, instructions and directions issued by authorised college authorities.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Campus Safety & Discipline",
      short: "Rules designed to maintain a safe learning environment.",
      rules: [
        "Students must follow campus safety instructions and cooperate with college authorities.",
        "Entry into restricted areas without permission is not permitted.",
        "Students must not engage in activities that threaten the safety, dignity or wellbeing of any member of the college community.",
        "Smoking, consumption of prohibited substances and other activities prohibited by law or college policy are not permitted on campus.",
        "Any incident requiring immediate attention should be reported to the appropriate college authority.",
        "Students are expected to contribute to a safe, respectful and inclusive campus environment.",
      ],
    },
  ];

  const importantPoints = [
    "Carry your college identity card whenever you are on campus.",
    "Check the college notice board/official communication regularly.",
    "Observe the prescribed attendance requirements.",
    "Submit forms and documents before the notified deadlines.",
    "Maintain discipline during classes, practicals and examinations.",
    "Protect college property and keep the campus clean.",
  ];

  return (
    <div className="rules-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        .rules-page {
          min-height: 100vh;
          background: #fbf7f1;
          color: #072656;
          font-family: "DM Sans", Arial, sans-serif;
        }

        /* =========================
           HERO
        ========================= */

        .rules-hero {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          background:
          
            linear-gradient(
              120deg,
              #061d45 0%,
              #061d45 65%,
              #061d45 100%
            );
        }

        .rules-hero::before {
          content: "";
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.08);
          right: -170px;
          top: -230px;
        }

        .rules-hero::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 1px solid rgba(255,118,0,.16);
          right: 100px;
          bottom: 55px;
        }

        .hero-inner {
          position: relative;
          z-index: 4;
          max-width: 1250px;
          margin: auto;
          padding: 70px 30px 125px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          color: rgba(255,255,255,.65);
          font-size: 13px;
        }

        .breadcrumb .current {
          color: #ff8420;
          font-weight: 700;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 15px;
          border-radius: 30px;
          background: rgba(255,118,0,.13);
          border: 1px solid rgba(255,145,55,.3);
          color: #ff9748;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 18px 0 12px;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1.05;
        }

        .hero-title span {
          color: #ff790b;
        }

        .hero-text {
          max-width: 700px;
          margin: 0;
          color: rgba(255,255,255,.74);
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
          fill: #fbf7f1;
        }

        .orange-wave-line {
          fill: none;
          stroke: #ff7600;
          stroke-width: 5;
          stroke-linecap: round;
        }

        /* =========================
           MAIN
        ========================= */

        .rules-container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          padding: 25px 0 90px;
        }

        .intro {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 45px;
        }

        .section-kicker {
          color: #ef6900;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.7px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .section-title {
          margin: 0;
          color: #092a51;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(30px, 4vw, 43px);
        }

        .section-text {
          margin: 13px auto 0;
          color: #717b88;
          line-height: 1.75;
          font-size: 14px;
        }

        /* =========================
           NOTICE
        ========================= */

        .important-notice {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 22px;
          margin-bottom: 35px;
          border-radius: 14px;
          border: 1px solid #f0cda9;
          background: #fff1e2;
        }

        .notice-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #ff7600;
          color: white;
        }

        .important-notice h3 {
          margin: 0 0 5px;
          color: #092a51;
          font-size: 15px;
        }

        .important-notice p {
          margin: 0;
          color: #707986;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================
           RULE LAYOUT
        ========================= */

        .rules-layout {
          display: grid;
          grid-template-columns: 340px minmax(0, 1fr);
          gap: 25px;
          align-items: start;
        }

        .category-list {
          position: sticky;
          top: 95px;
          padding: 10px;
          border: 1px solid #e6ddd3;
          border-radius: 17px;
          background: white;
          box-shadow: 0 12px 35px rgba(30,40,55,.06);
        }

        .category-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 13px;
          border: none;
          border-radius: 11px;
          background: transparent;
          text-align: left;
          cursor: pointer;
          color: #566273;
          font-family: inherit;
          transition: .25s;
        }

        .category-item:hover {
          background: #fff3e7;
          color: #d96300;
        }

        .category-item.active {
          background: #092a51;
          color: white;
          box-shadow: 0 7px 18px rgba(9,42,81,.18);
        }

        .category-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #fff1e2;
          color: #ed6b06;
        }

        .category-item.active .category-icon {
          background: #ff7600;
          color: white;
        }

        .category-content {
          min-width: 0;
        }

        .category-title {
          display: block;
          font-size: 13px;
          font-weight: 800;
        }

        .category-short {
          display: block;
          margin-top: 3px;
          font-size: 10px;
          line-height: 1.35;
          opacity: .72;
        }

        .category-arrow {
          margin-left: auto;
          opacity: .6;
        }

        /* =========================
           RULE CARD
        ========================= */

        .rules-card {
          border: 1px solid #e6ddd3;
          border-radius: 20px;
          background: white;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(30,40,55,.06);
        }

        .rules-card-head {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 25px 28px;
          background:
            linear-gradient(
              120deg,
              #08264b,
              #0b3a70
            );
          color: white;
        }

        .rules-card-icon {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #ff7600;
          color: white;
        }

        .rules-card-head h2 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 27px;
        }

        .rules-card-head p {
          margin: 4px 0 0;
          color: rgba(255,255,255,.68);
          font-size: 12px;
        }

        .rules-list {
          padding: 10px 28px 20px;
        }

        .rule {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 13px;
          padding: 19px 0;
          border-bottom: 1px solid #eee7df;
        }

        .rule:last-child {
          border-bottom: none;
        }

        .rule-number {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff0df;
          color: #e56500;
          font-size: 11px;
          font-weight: 800;
        }

        .rule p {
          margin: 0;
          color: #596575;
          font-size: 13px;
          line-height: 1.75;
        }

        /* =========================
           QUICK RULES
        ========================= */

        .quick-section {
          margin-top: 65px;
        }

        .quick-header {
          margin-bottom: 22px;
        }

        .quick-header h2 {
          margin: 0;
          color: #092a51;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 30px;
        }

        .quick-header p {
          margin: 7px 0 0;
          color: #717b88;
          font-size: 13px;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .quick-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 17px;
          border-radius: 13px;
          background: white;
          border: 1px solid #e7ded5;
          box-shadow: 0 8px 25px rgba(30,40,55,.04);
        }

        .quick-check {
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #fff0df;
          color: #ed6904;
        }

        .quick-item p {
          margin: 0;
          color: #5e6978;
          font-size: 12px;
          line-height: 1.55;
        }

        /* =========================
           DISCLAIMER
        ========================= */

        .disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-top: 35px;
          padding: 18px 20px;
          border-left: 4px solid #ff7600;
          background: #fff;
          border-top: 1px solid #ebe2d9;
          border-right: 1px solid #ebe2d9;
          border-bottom: 1px solid #ebe2d9;
          border-radius: 0 11px 11px 0;
        }

        .disclaimer svg {
          flex-shrink: 0;
          color: #ff7600;
          margin-top: 2px;
        }

        .disclaimer p {
          margin: 0;
          color: #697382;
          font-size: 11px;
          line-height: 1.65;
        }

        /* =========================
           CTA
        ========================= */

        .rules-cta {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          margin-top: 50px;
          padding: 32px 35px;
          border-radius: 19px;
          background: linear-gradient(115deg, #062448, #0c3b70);
          color: white;
        }

        .rules-cta::after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
          right: -65px;
          top: -105px;
        }

        .cta-text {
          position: relative;
          z-index: 2;
        }

        .cta-text h2 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
        }

        .cta-text p {
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
          color: white;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.08);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 950px) {
          .rules-layout {
            grid-template-columns: 1fr;
          }

          .category-list {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .quick-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .rules-container {
            width: min(100% - 24px, 1180px);
          }

          .hero-inner {
            padding: 60px 20px 115px;
          }

          .hero-title {
            font-size: 42px;
          }

          .category-list {
            grid-template-columns: 1fr;
          }

          .rules-card-head {
            padding: 21px;
          }

          .rules-list {
            padding: 8px 18px 15px;
          }

          .quick-grid {
            grid-template-columns: 1fr;
          }

          .rules-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 26px 22px;
          }
        }
      `}</style>

      {/* =========================
          HERO
      ========================= */}

      <section className="rules-hero">
        <div className="hero-inner">

          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Admission</span>
            <span>/</span>
            <span className="current">
              Rules & Regulations
            </span>
          </div>

          

          <h1 className="hero-title">
            Rules & <span>Regulations</span>
          </h1>

          <p className="hero-text">
            Important guidelines for students seeking admission
            and studying at Yaduvanshi Degree College. Please
            read the applicable instructions carefully before
            completing the admission process.
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
          MAIN
      ========================= */}

      <main className="rules-container">

        <section className="intro">
          <div className="section-kicker">
            Student Guidelines
          </div>

          <h2 className="section-title">
            Rules for a Responsible Campus
          </h2>

          <p className="section-text">
            These guidelines are intended to help students
            understand the important requirements related to
            admission, academics, examinations, fees, conduct
            and campus discipline.
          </p>
        </section>

        {/* NOTICE */}

        <div className="important-notice">
          <div className="notice-icon">
            <AlertTriangle size={21} />
          </div>

          <div>
            <h3>Important Notice</h3>

            <p>
              Students are advised to follow the latest
              notifications, instructions and policies issued
              by Yaduvanshi Degree College and the applicable
              affiliating/university authorities. In case of
              any difference, the latest official notification
              shall apply.
            </p>
          </div>
        </div>

        {/* =========================
            RULES
        ========================= */}

        <section className="rules-layout">

          {/* CATEGORY MENU */}

          <div className="category-list">
            {ruleSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <button
                  key={index}
                  className={
                    openSection === index
                      ? "category-item active"
                      : "category-item"
                  }
                  onClick={() => setOpenSection(index)}
                >
                  <div className="category-icon">
                    <Icon size={18} />
                  </div>

                  <div className="category-content">
                    <span className="category-title">
                      {section.title}
                    </span>

                    <span className="category-short">
                      {section.short}
                    </span>
                  </div>

                  <ChevronDown
                    size={15}
                    className="category-arrow"
                  />
                </button>
              );
            })}
          </div>

          {/* RULE CONTENT */}

          <div className="rules-card">

            <div className="rules-card-head">
              <div className="rules-card-icon">
                {React.createElement(
                  ruleSections[openSection].icon,
                  { size: 25 }
                )}
              </div>

              <div>
                <h2>
                  {ruleSections[openSection].title}
                </h2>

                <p>
                  {ruleSections[openSection].short}
                </p>
              </div>
            </div>

            <div className="rules-list">

              {ruleSections[openSection].rules.map(
                (rule, index) => (
                  <div className="rule" key={index}>

                    <div className="rule-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p>{rule}</p>

                  </div>
                )
              )}

            </div>

          </div>

        </section>

        {/* =========================
            QUICK RULES
        ========================= */}

        <section className="quick-section">

          <div className="quick-header">
            <div className="section-kicker">
              Remember
            </div>

            <h2>
              Important Points for Every Student
            </h2>

            <p>
              A few simple practices help maintain a positive
              and disciplined college environment.
            </p>
          </div>

          <div className="quick-grid">

            {importantPoints.map((point, index) => (
              <div className="quick-item" key={index}>

                <div className="quick-check">
                  <CheckCircle2 size={16} />
                </div>

                <p>{point}</p>

              </div>
            ))}

          </div>

        </section>

        {/* DISCLAIMER */}

        <div className="disclaimer">
          <FileText size={17} />

          <p>
            <strong>Note:</strong> The rules displayed on this
            webpage are presented as general admission and
            student guidelines. Students should always refer to
            the latest official college/university notification,
            prospectus and applicable regulations for the
            current requirements.
          </p>
        </div>

        {/* =========================
            CTA
        ========================= */}

        <section className="rules-cta">

          <div className="cta-text">
            <h2>
              Ready to Apply?
            </h2>

            <p>
              Read the instructions, prepare your documents and
              continue with the admission process.
            </p>
          </div>

          <div className="cta-buttons">

            <a
              href="/admission/admission-form"
              className="cta-btn cta-primary"
            >
              Admission Form
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