import React from "react";
import {
  GraduationCap,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  ArrowRight,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdmissionCriteria = () => {
  const criteria = [
    {
      icon: <GraduationCap size={28} />,
      title: "Educational Qualification",
      text: "Applicants must have passed the qualifying examination required for the selected programme.",
    },
    {
      icon: <Award size={28} />,
      title: "Merit / Eligibility",
      text: "Admission is subject to the eligibility requirements and merit criteria applicable to the programme.",
    },
    {
      icon: <Users size={28} />,
      title: "Eligible Applicants",
      text: "Students fulfilling the prescribed academic requirements may apply for admission.",
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: "Verification",
      text: "Original academic and supporting documents are required for verification during the admission process.",
    },
  ];

  const programmes = [
    {
      programme: "B.A.",
      eligibility:
        "Passed Senior Secondary / 10+2 examination from a recognized board.",
    },
    {
      programme: "B.Com.",
      eligibility:
        "Passed Senior Secondary / 10+2 examination from a recognized board.",
    },
    {
      programme: "B.Sc.",
      eligibility:
        "Passed Senior Secondary / 10+2 examination with the required subjects for the programme.",
    },
    {
      programme: "BCA",
      eligibility:
        "Passed Senior Secondary / 10+2 examination with the subjects prescribed for the programme.",
    },
    {
      programme: "BBA",
      eligibility:
        "Passed Senior Secondary / 10+2 examination from a recognized board.",
    },
    {
      programme: "B.Ed.",
      eligibility:
        "Admission is subject to the prescribed graduation-level qualification and applicable admission rules.",
    },
    {
      programme: "M.A.",
      eligibility:
        "Bachelor's degree with the required subject / qualification as prescribed for the programme.",
    },
    {
      programme: "M.Com.",
      eligibility:
        "Bachelor's degree with the required qualification as prescribed for the programme.",
    },
    {
      programme: "M.Sc.",
      eligibility:
        "Bachelor's degree in the relevant subject with the required qualification.",
    },
    {
      programme: "MBA",
      eligibility:
        "Bachelor's degree from a recognized university, subject to applicable admission requirements.",
    },
  ];

  const documents = [
    "10th class certificate / marksheet",
    "12th class certificate / marksheet",
    "Graduation marksheets and degree certificate, where applicable",
    "Transfer Certificate / Migration Certificate, where applicable",
    "Character Certificate",
    "Recent passport-size photographs",
    "Valid identity proof",
    "Category / reservation certificate, where applicable",
    "Other documents required by the college / university",
  ];

  const steps = [
    {
      number: "01",
      title: "Check Eligibility",
      text: "Review the qualification and eligibility requirements for your desired programme.",
    },
    {
      number: "02",
      title: "Complete Registration",
      text: "Register through the applicable online admission / registration process.",
    },
    {
      number: "03",
      title: "Submit Documents",
      text: "Provide the required academic and supporting documents for verification.",
    },
    {
      number: "04",
      title: "Admission Confirmation",
      text: "Complete the remaining admission formalities after eligibility and document verification.",
    },
  ];

  return (
    <div className="criteria-page">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="criteria-hero">

        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>

        <div className="criteria-hero-inner">

          {/* Left */}
          <div className="criteria-hero-content">
             <div className="criteria-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Admission</span>
              <span>/</span>
              <strong>Admission Criteria</strong>
            </div>
           
            <h1>
              Admission <span>Criteria</span>
            </h1>

            <p>
              Explore the eligibility requirements and admission guidelines
              for different programmes offered by Yaduvanshi Degree College.
            </p>

           

          </div>

          {/* Right */}
          <div className="criteria-hero-right">

            <div className="hero-info-card">

              <div className="hero-info-icon">
                <BookOpen size={38} />
              </div>

              <h3>
                Know Before You Apply
              </h3>

              <p>
                Check the programme-wise eligibility requirements and keep
                your documents ready before starting the admission process.
              </p>

              <Link
                to="/admission/online-admission"
                className="hero-info-button"
              >
                Online Admission
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

        {/* Curved Wave */}
        <div className="criteria-wave-wrapper">
          <svg
            className="criteria-wave"
            viewBox="0 0 1536 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="criteria-orange-line"
              d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1536,45"
            />

            <path
              className="criteria-white-wave"
              d="M0,130 C150,220 355,220 555,145 C775,64 990,100 1160,137 C1280,163 1365,145 1440,98 C1490,72 1515,57 1536,50 L1536,220 L0,220 Z"
            />
          </svg>
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="criteria-intro">

        <div className="intro-box">

          <div className="section-tag">
            ADMISSION INFORMATION
          </div>

          <h2>
            Admission Criteria at Yaduvanshi Degree College
          </h2>

          <p>
            Admission to various programmes is based on the prescribed
            educational qualification, eligibility requirements and
            applicable admission rules. Students are advised to carefully
            check the requirements of the programme they wish to pursue
            before submitting their application.
          </p>

          <div className="important-note">
            <CheckCircle2 size={22} />

            <div>
              <strong>Important:</strong>
              <span>
                Eligibility requirements may vary according to the programme
                and applicable university / regulatory guidelines.
              </span>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          FOUR CRITERIA CARDS
      ====================================================== */}
      <section className="criteria-section">

        <div className="section-heading">

          <div className="section-tag">
            ELIGIBILITY
          </div>

          <h2>
            Key Admission Criteria
          </h2>

          <p>
            Students should fulfil the applicable requirements before
            applying for admission.
          </p>

        </div>


        <div className="criteria-grid">

          {criteria.map((item, index) => (
            <div className="criteria-card" key={index}>

              <div className="criteria-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          PROGRAMME WISE ELIGIBILITY
      ====================================================== */}
      <section className="programme-section">

        <div className="section-heading">

          <div className="section-tag">
            PROGRAMMES
          </div>

          <h2>
            Programme-wise Eligibility
          </h2>

          <p>
            General eligibility information for selected undergraduate and
            postgraduate programmes.
          </p>

        </div>


        <div className="table-wrapper">

          <table className="eligibility-table">

            <thead>
              <tr>
                <th>Programme</th>
                <th>General Eligibility</th>
              </tr>
            </thead>

            <tbody>

              {programmes.map((item, index) => (
                <tr key={index}>

                  <td>
                    <strong>{item.programme}</strong>
                  </td>

                  <td>
                    {item.eligibility}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* =====================================================
          DOCUMENTS
      ====================================================== */}
      <section className="documents-section">

        <div className="documents-container">

          <div className="documents-content">

            <div className="section-tag">
              DOCUMENT VERIFICATION
            </div>

            <h2>
              Documents Required
            </h2>

            <p>
              Applicants should keep the required documents ready for the
              admission and verification process.
            </p>

            <div className="documents-list">

              {documents.map((document, index) => (
                <div
                  className="document-item"
                  key={index}
                >
                  <CheckCircle2 size={19} />
                  <span>{document}</span>
                </div>
              ))}

            </div>

          </div>


          <div className="document-side-card">

            <div className="document-large-icon">
              <FileText size={42} />
            </div>

            <h3>
              Keep Your Documents Ready
            </h3>

            <p>
              Ensure that your certificates and supporting documents are
              available before completing the admission process.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMISSION PROCESS
      ====================================================== */}
      <section className="process-section">

        <div className="section-heading">

          <div className="section-tag">
            HOW TO APPLY
          </div>

          <h2>
            Admission Process
          </h2>

          <p>
            Follow these general steps to proceed with your admission.
          </p>

        </div>


        <div className="process-grid">

          {steps.map((step, index) => (
            <div
              className="process-card"
              key={index}
            >

              <div className="process-number">
                {step.number}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

              {index < steps.length - 1 && (
                <div className="process-arrow">
                  <ArrowRight size={18} />
                </div>
              )}

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="criteria-cta">

        <div className="cta-inner">

          <div>
            <span className="cta-label">
              START YOUR JOURNEY
            </span>

            <h2>
              Ready to Apply for Admission?
            </h2>

            <p>
              Check your eligibility and proceed to the online admission
              process.
            </p>
          </div>

          <Link
            to="/admission/online-admission"
            className="cta-button"
          >
            Online Admission
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>


      {/* =====================================================
          CSS
      ====================================================== */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .criteria-page {
          width: 100%;
          background: #ffffff;
          color: #2d3748;
          font-family: "DM Sans", Arial, sans-serif;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .criteria-hero {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #061d45;
          color: #ffffff;
        }

        .criteria-hero-inner {
          position: relative;
          z-index: 3;

          width: 100%;
          max-width: 1200px;

          min-height: 420px;

          margin: 0 auto;

          padding: 70px 35px 110px;

          display: grid;
          grid-template-columns: 1.2fr 0.8fr;

          align-items: center;

          gap: 60px;
        }


        /* Hero Content */

        .criteria-hero-content {
          position: relative;
          z-index: 4;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 16px;

          color: #ff9f1c;

          font-size: 14px;
          font-weight: 700;

          letter-spacing: 1.5px;
        }

        .criteria-hero-content h1 {
          margin: 0 0 18px;

          font-family: "Playfair Display", Georgia, serif;

          font-size: clamp(42px, 5vw, 64px);

          line-height: 1.05;

          font-weight: 700;
        }

        .criteria-hero-content h1 span {
          color: #ff9f1c;
        }

        .criteria-hero-content p {
          max-width: 650px;

          margin: 0 0 25px;

          color: rgba(255,255,255,0.88);

          font-size: 17px;

          line-height: 1.7;
        }


        /* Breadcrumb */

        .criteria-breadcrumb {
          display: flex;
          align-items: center;

          flex-wrap: wrap;
          gap: 9px;
        margin-bottom: 22px

          font-size: 14px;

          color: rgba(255,255,255,0.65);
        }

        .criteria-breadcrumb a {
          color: #ff9f1c;

          text-decoration: none;

          font-weight: 600;
        }

        .criteria-breadcrumb strong {
          color: #ffffff;
        }


        /* Hero Right Card */

        .criteria-hero-right {
          display: flex;

          align-items: center;
          justify-content: center;
        }

        .hero-info-card {
          width: 100%;
          max-width: 365px;

          padding: 30px;

          border: 1px solid rgba(255,255,255,0.18);

          border-radius: 20px;

          background: rgba(255,255,255,0.10);

          backdrop-filter: blur(10px);

          box-shadow:
            0 20px 50px rgba(0,0,0,0.20);
        }

        .hero-info-icon {
          width: 70px;
          height: 70px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 20px;

          border-radius: 18px;

          background: #ff9f1c;

          color: #062452;
        }

        .hero-info-card h3 {
          margin: 0 0 10px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 25px;
        }

        .hero-info-card p {
          margin: 0 0 22px;

          color: rgba(255,255,255,0.78);

          font-size: 15px;

          line-height: 1.6;
        }

        .hero-info-button {
          width: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          padding: 13px 18px;

          border-radius: 8px;

          background: #ff9f1c;

          color: #062452;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;

          transition: all 0.25s ease;
        }

        .hero-info-button:hover {
          background: #ffffff;

          transform: translateY(-2px);
        }


        /* Decoration */

        .hero-decoration {
          position: absolute;

          border-radius: 50%;

          border: 1px solid rgba(255,159,28,0.16);
        }

        .hero-decoration-one {
          width: 360px;
          height: 360px;

          right: -150px;
          top: -170px;
        }

        .hero-decoration-two {
          width: 230px;
          height: 230px;

          right: 80px;
          bottom: -170px;

          border-color: rgba(255,255,255,0.10);
        }


        /* =====================================================
           HERO WAVE
        ====================================================== */

        .criteria-wave-wrapper {
          position: absolute;

          z-index: 5;

          left: 0;
          right: 0;
          bottom: 0;

          height: 145px;

          pointer-events: none;
        }

        .criteria-wave {
          width: 100%;
          height: 100%;

          position: absolute;

          left: 0;
          bottom: 0;
        }

        .criteria-white-wave {
          fill: #ffffff;
        }

        .criteria-orange-line {
          fill: none;

          stroke: #ff9f1c;

          stroke-width: 5;

          stroke-linecap: round;
        }


        /* =====================================================
           COMMON SECTIONS
        ====================================================== */

        .criteria-intro,
        .criteria-section,
        .programme-section,
        .documents-section,
        .process-section {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          padding: 75px 30px;
        }

        .section-heading {
          text-align: center;

          max-width: 720px;

          margin: 0 auto 42px;
        }

        .section-tag {
          display: inline-block;

          margin-bottom: 10px;

          color: #e58a00;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 1.8px;
        }

        .section-heading h2,
        .intro-box h2,
        .documents-content h2 {
          margin: 0 0 13px;

          color: #102a43;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 36px;

          line-height: 1.2;
        }

        .section-heading p,
        .intro-box p,
        .documents-content > p {
          margin: 0;

          color: #64748b;

          font-size: 16px;

          line-height: 1.7;
        }


        /* =====================================================
           INTRO
        ====================================================== */

        .criteria-intro {
          padding-top: 35px;
          padding-bottom: 30px;
        }

        .intro-box {
          padding: 38px;

          border-radius: 18px;

          background: #fffaf3;

          border: 1px solid #f2dfc4;
        }

        .intro-box h2 {
          font-size: 32px;
        }

        .important-note {
          display: flex;

          align-items: flex-start;

          gap: 13px;

          margin-top: 25px;

          padding: 16px 18px;

          border-left: 4px solid #ff9f1c;

          border-radius: 8px;

          background: #ffffff;
        }

        .important-note svg {
          flex-shrink: 0;

          color: #e58a00;
        }

        .important-note div {
          display: flex;

          flex-wrap: wrap;

          gap: 5px;
        }

        .important-note strong {
          color: #102a43;
        }

        .important-note span {
          color: #64748b;
        }


        /* =====================================================
           CRITERIA CARDS
        ====================================================== */

        .criteria-section {
          padding-top: 45px;
        }

        .criteria-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 22px;
        }

        .criteria-card {
          padding: 28px 23px;

          border: 1px solid #e2e8f0;

          border-radius: 15px;

          background: #ffffff;

          box-shadow:
            0 8px 25px rgba(15,40,70,0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .criteria-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 15px 35px rgba(15,40,70,0.10);
        }

        .criteria-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 20px;

          border-radius: 14px;

          background: #fff3df;

          color: #e58a00;
        }

        .criteria-card h3 {
          margin: 0 0 10px;

          color: #102a43;

          font-size: 19px;
        }

        .criteria-card p {
          margin: 0;

          color: #64748b;

          font-size: 14px;

          line-height: 1.65;
        }


        /* =====================================================
           PROGRAMME TABLE
        ====================================================== */

        .programme-section {
          max-width: 1200px;

          padding-top: 45px;
        }

        .table-wrapper {
          overflow-x: auto;

          border: 1px solid #dbe3ed;

          border-radius: 15px;

          box-shadow:
            0 8px 25px rgba(15,40,70,0.05);
        }

        .eligibility-table {
          width: 100%;

          border-collapse: collapse;

          min-width: 700px;

          background: #ffffff;
        }

        .eligibility-table th {
          padding: 17px 20px;

          background: #062452;

          color: #ffffff;

          text-align: left;

          font-size: 15px;

          font-weight: 700;
        }

        .eligibility-table td {
          padding: 17px 20px;

          border-bottom: 1px solid #e8edf3;

          color: #64748b;

          font-size: 14px;

          line-height: 1.55;
        }

        .eligibility-table tbody tr:nth-child(even) {
          background: #f8fafc;
        }

        .eligibility-table tbody tr:hover {
          background: #fff8ec;
        }

        .eligibility-table td:first-child {
          width: 180px;

          color: #102a43;
        }


        /* =====================================================
           DOCUMENTS
        ====================================================== */

        .documents-section {
          max-width: 1200px;

          padding-top: 45px;
        }

        .documents-container {
          display: grid;

          grid-template-columns: 1.35fr 0.65fr;

          gap: 45px;

          padding: 45px;

          border-radius: 20px;

          background: #f8fafc;

          border: 1px solid #e2e8f0;
        }

        .documents-content h2 {
          font-size: 34px;
        }

        .documents-list {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 13px;

          margin-top: 28px;
        }

        .document-item {
          display: flex;

          align-items: flex-start;

          gap: 10px;

          padding: 12px;

          border-radius: 8px;

          background: #ffffff;

          color: #475569;

          font-size: 14px;

          line-height: 1.5;
        }

        .document-item svg {
          flex-shrink: 0;

          color: #e58a00;

          margin-top: 1px;
        }


        /* Side Card */

        .document-side-card {
          align-self: center;

          padding: 32px;

          border-radius: 17px;

          background: #062452;

          color: #ffffff;

          text-align: center;
        }

        .document-large-icon {
          width: 75px;
          height: 75px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin: 0 auto 20px;

          border-radius: 18px;

          background: #ff9f1c;

          color: #062452;
        }

        .document-side-card h3 {
          margin: 0 0 12px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 23px;
        }

        .document-side-card p {
          margin: 0;

          color: rgba(255,255,255,0.75);

          font-size: 14px;

          line-height: 1.65;
        }


        /* =====================================================
           PROCESS
        ====================================================== */

        .process-section {
          padding-top: 45px;
        }

        .process-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 20px;
        }

        .process-card {
          position: relative;

          padding: 27px 22px;

          border: 1px solid #e2e8f0;

          border-radius: 15px;

          background: #ffffff;

          box-shadow:
            0 7px 22px rgba(15,40,70,0.04);
        }

        .process-number {
          margin-bottom: 18px;

          color: #ff9f1c;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 27px;

          font-weight: 700;
        }

        .process-card h3 {
          margin: 0 0 9px;

          color: #102a43;

          font-size: 18px;
        }

        .process-card p {
          margin: 0;

          color: #64748b;

          font-size: 14px;

          line-height: 1.6;
        }

        .process-arrow {
          position: absolute;

          top: 32px;
          right: -16px;

          width: 32px;
          height: 32px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #ff9f1c;

          color: #062452;

          z-index: 2;
        }


        /* =====================================================
           CTA
        ====================================================== */

        .criteria-cta {
          width: 100%;

          padding: 65px 30px;

          background: #062452;

          color: #ffffff;
        }

        .cta-inner {
          max-width: 1140px;

          margin: 0 auto;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;
        }

        .cta-label {
          color: #ff9f1c;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 1.8px;
        }

        .cta-inner h2 {
          margin: 8px 0 8px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 34px;
        }

        .cta-inner p {
          margin: 0;

          color: rgba(255,255,255,0.72);

          font-size: 15px;
        }

        .cta-button {
          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          padding: 14px 23px;

          border-radius: 8px;

          background: #ff9f1c;

          color: #062452;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;

          transition: all 0.25s ease;
        }

        .cta-button:hover {
          background: #ffffff;

          transform: translateY(-2px);
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1000px) {

          .criteria-hero-inner {
            grid-template-columns: 1fr;
          }

          .criteria-hero-right {
            display: none;
          }

          .criteria-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .process-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .process-arrow {
            display: none;
          }

          .documents-container {
            grid-template-columns: 1fr;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 650px) {

          .criteria-hero {
            min-height: 370px;
          }

          .criteria-hero-inner {
            min-height: 370px;

            padding:
              45px
              20px
              95px;
          }

          .hero-label {
            font-size: 11px;

            letter-spacing: 1px;
          }

          .criteria-hero-content h1 {
            font-size: 40px;
          }

          .criteria-hero-content p {
            font-size: 14px;

            line-height: 1.6;
          }

          .criteria-breadcrumb {
            font-size: 12px;
          }

          .criteria-wave-wrapper {
            height: 100px;
          }


          .criteria-intro,
          .criteria-section,
          .programme-section,
          .documents-section,
          .process-section {
            padding:
              50px
              18px;
          }

          .criteria-intro {
            padding-top: 30px;
          }

          .section-heading h2,
          .intro-box h2,
          .documents-content h2 {
            font-size: 28px;
          }


          .intro-box {
            padding: 25px 20px;
          }

          .intro-box h2 {
            font-size: 26px;
          }

          .important-note {
            flex-direction: column;

            gap: 8px;
          }


          .criteria-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }


          .documents-container {
            padding: 25px 20px;

            gap: 25px;
          }

          .documents-list {
            grid-template-columns: 1fr;

            gap: 10px;
          }


          .process-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }


          .cta-inner {
            flex-direction: column;

            align-items: flex-start;
          }

          .cta-inner h2 {
            font-size: 28px;
          }

          .cta-button {
            width: 100%;
          }

        }

      `}</style>
    </div>
  );
};

export default AdmissionCriteria;