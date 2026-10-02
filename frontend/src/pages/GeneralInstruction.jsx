import React from "react";
import {
  CheckCircle2,
  FileText,
  GraduationCap,
  ClipboardCheck,
  AlertCircle,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function GeneralInstruction() {
  return (
    <div className="general-page">

      {/* ================= HERO SECTION ================= */}
      <section className="instruction-hero">

        {/* Left Content */}
        <div className="hero-content">
          <div className="breadcrumb">
            Home <span>›</span> Admission <span>›</span>
            <strong>General Instruction</strong>
          </div>

          <div className="hero-small-title">
            ADMISSION
          </div>

          <h1>
            General <span>Instructions</span>
          </h1>

          <div className="orange-line"></div>

          <h2>
            Your Admission Journey Starts Here
          </h2>

          <p>
            Please read the following instructions carefully before applying
            for admission to Yaduvanshi Degree College. These guidelines will
            help you complete the admission process smoothly and correctly.
          </p>
        </div>

        

        {/* Hero wave */}
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


      {/* ================= MAIN CONTENT ================= */}
      <main className="instruction-container">

        {/* Page Heading */}
        <div className="section-heading">
          <div className="heading-icon">
            <FileText size={28} />
          </div>

          <div>
            <span>ADMISSION GUIDELINES</span>
            <h2>General Instructions</h2>
          </div>
        </div>


        {/* Introduction */}
        <div className="intro-card">
          <div className="intro-icon">
            <GraduationCap size={34} />
          </div>

          <div>
            <h3>Important Instructions for Applicants</h3>

            <p>
              Candidates seeking admission to Yaduvanshi Degree College are
              advised to carefully read all admission instructions, eligibility
              requirements and applicable rules before submitting the
              application form.
            </p>

            <p>
              Applicants should ensure that all information entered in the
              application form is complete, correct and supported by the
              required documents.
            </p>
          </div>
        </div>


        {/* ================= INSTRUCTIONS GRID ================= */}
        <div className="instruction-grid">

          {/* 01 */}
          <div className="instruction-card">
            <div className="number">01</div>

            <div className="card-icon">
              <ClipboardCheck size={26} />
            </div>

            <h3>Application Form</h3>

            <p>
              Fill in the admission application form carefully. All mandatory
              fields should be completed before submitting the form.
            </p>
          </div>


          {/* 02 */}
          <div className="instruction-card">
            <div className="number">02</div>

            <div className="card-icon">
              <FileText size={26} />
            </div>

            <h3>Correct Information</h3>

            <p>
              Enter your name, date of birth, contact details, academic
              qualifications and other information exactly as mentioned in
              your official documents.
            </p>
          </div>


          {/* 03 */}
          <div className="instruction-card">
            <div className="number">03</div>

            <div className="card-icon">
              <BookOpen size={26} />
            </div>

            <h3>Course Selection</h3>

            <p>
              Select the course and programme carefully according to your
              eligibility and academic interest.
            </p>
          </div>


          {/* 04 */}
          <div className="instruction-card">
            <div className="number">04</div>

            <div className="card-icon">
              <CheckCircle2 size={26} />
            </div>

            <h3>Required Documents</h3>

            <p>
              Keep all required academic, identity and other supporting
              documents ready before completing the admission process.
            </p>
          </div>


          {/* 05 */}
          <div className="instruction-card">
            <div className="number">05</div>

            <div className="card-icon">
              <GraduationCap size={26} />
            </div>

            <h3>Eligibility</h3>

            <p>
              Candidates must satisfy the eligibility criteria prescribed for
              the selected course before applying for admission.
            </p>
          </div>


          {/* 06 */}
          <div className="instruction-card">
            <div className="number">06</div>

            <div className="card-icon">
              <AlertCircle size={26} />
            </div>

            <h3>Verify Before Submission</h3>

            <p>
              Review the complete application form carefully before final
              submission. Incorrect or incomplete information may affect the
              admission process.
            </p>
          </div>

        </div>


        {/* ================= IMPORTANT POINTS ================= */}
        <section className="important-section">

          <div className="important-header">
            <div className="important-icon">
              <AlertCircle size={28} />
            </div>

            <div>
              <span>PLEASE NOTE</span>
              <h2>Important Points</h2>
            </div>
          </div>


          <div className="important-list">

            <div className="important-item">
              <CheckCircle2 size={22} />
              <p>
                Applicants should provide only accurate and authentic
                information in the admission application.
              </p>
            </div>

            <div className="important-item">
              <CheckCircle2 size={22} />
              <p>
                The applicant should keep a copy of the submitted application
                form and acknowledgement for future reference.
              </p>
            </div>

            <div className="important-item">
              <CheckCircle2 size={22} />
              <p>
                Admission will be subject to fulfilment of the prescribed
                eligibility requirements and applicable admission rules.
              </p>
            </div>

            <div className="important-item">
              <CheckCircle2 size={22} />
              <p>
                Candidates should regularly check the college website and
                admission notices for important updates.
              </p>
            </div>

            <div className="important-item">
              <CheckCircle2 size={22} />
              <p>
                Submission of an application does not by itself guarantee
                admission to the selected programme.
              </p>
            </div>

          </div>
        </section>


        {/* ================= DOCUMENTS ================= */}
        <section className="documents-section">

          <div className="documents-heading">
            <FileText size={28} />

            <div>
              <span>DOCUMENTATION</span>
              <h2>Keep Your Documents Ready</h2>
            </div>
          </div>


          <div className="documents-grid">

            <div>
              <CheckCircle2 />
              <span>Academic Certificates / Mark Sheets</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Recent Passport Size Photograph</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Identity / Address Proof</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Transfer / Migration Certificate, if applicable</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Category Certificate, if applicable</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Other documents required for the selected programme</span>
            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="admission-cta">

          <div>
            <span>READY TO APPLY?</span>

            <h2>
              Begin Your Journey With
              <strong> Yaduvanshi Degree College</strong>
            </h2>

            <p>
              Complete your application carefully and take the next step
              towards your academic future.
            </p>
          </div>

          <a href="/admission/online-admission" className="admission-cta-button">
            Online Admission
            <ArrowRight size={20} />
          </a>

        </section>

      </main>


      {/* ================= BOTTOM VALUES BAR ================= */}
      <section className="values-bar">

        <div>
          <GraduationCap />
          <span>
            <strong>Quality Education</strong>
            For a Brighter Future
          </span>
        </div>

        <div>
          <CheckCircle2 />
          <span>
            <strong>Value Based Education</strong>
            Nurturing values & character
          </span>
        </div>

        <div>
          <ClipboardCheck />
          <span>
            <strong>Student First Approach</strong>
            Every decision for students
          </span>
        </div>

        <div>
          <BookOpen />
          <span>
            <strong>Academic Excellence</strong>
            Learning for a better future
          </span>
        </div>

      </section>


      {/* ================= PAGE CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .general-page {
          min-height: 100vh;
          background: #fffdf9;
          color: #071d49;
          font-family: "DM Sans", Arial, sans-serif;
        }


        /* ================= HERO ================= */

        .instruction-hero {
          position: relative;
          height: 470px;
          overflow: hidden;
          display: flex;
          background: #061d45;
          color: white;
        }

        .hero-content {
          width: 53%;
          padding: 48px 40px 90px 7%;
          position: relative;
          z-index: 5;
        }

        .breadcrumb {
          font-size: 15px;
          margin-bottom: 38px;
          color: #ffffff;
        }

        .breadcrumb span {
          margin: 0 9px;
          color: #cbd5e1;
        }

        .breadcrumb strong {
          color: #ff7900;
          font-weight: 500;
        }

        .hero-small-title {
          color: #ff7900;
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .hero-content h1 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(44px, 4vw, 65px);
          line-height: 1.05;
          font-weight: 700;
        }

        .hero-content h1 span {
          color: #ff7900;
        }

        .orange-line {
          width: 90px;
          height: 4px;
          background: #ff7900;
          margin: 24px 0;
          border-radius: 10px;
        }

        .hero-content h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 23px;
          margin: 0 0 17px;
          color: white;
        }

        .hero-content p {
          max-width: 540px;
          font-size: 16px;
          line-height: 1.7;
          color: #f0f5ff;
          margin: 0;
        }


        /* HERO IMAGE */

        .hero-image {
          position: absolute;
          right: 0;
          top: 0;
          width: 57%;
          height: 100%;
          overflow: hidden;

          clip-path: ellipse(75% 100% at 75% 50%);
        }

        .hero-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              #031d4b 0%,
              rgba(3,29,75,0.55) 15%,
              rgba(3,29,75,0) 45%
            );
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }




        /* HERO WAVE */

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


        /* ================= MAIN ================= */

        .instruction-container {
          width: min(1180px, 92%);
          margin: 0 auto;
          padding: 70px 0 30px;
        }


        /* SECTION HEADING */

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 35px;
          text-align: left;
        }

        .heading-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #ff7900;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .section-heading span,
        .important-header span,
        .documents-heading span,
        .admission-cta span {
          color: #ff7900;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .section-heading h2,
        .important-header h2,
        .documents-heading h2 {
          margin: 3px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          color: #092454;
        }


        /* INTRO */

        .intro-card {
          display: flex;
          gap: 25px;
          padding: 30px 35px;
          background: white;
          border-radius: 18px;
          border: 1px solid #eeeae3;
          box-shadow: 0 8px 28px rgba(5, 30, 70, 0.08);
          margin-bottom: 35px;
        }

        .intro-icon {
          min-width: 65px;
          height: 65px;
          border-radius: 50%;
          background: #062557;
          color: #ff7900;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .intro-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          margin: 0 0 8px;
          color: #092454;
        }

        .intro-card p {
          margin: 5px 0;
          color: #334155;
          line-height: 1.7;
          font-size: 15px;
        }


        /* ================= INSTRUCTION CARDS ================= */

        .instruction-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-bottom: 50px;
        }

        .instruction-card {
          position: relative;
          background: white;
          border: 1px solid #eeeae3;
          border-radius: 16px;
          padding: 30px 25px 25px;
          min-height: 250px;
          overflow: hidden;
          transition: 0.3s ease;
          box-shadow: 0 5px 20px rgba(4, 30, 70, 0.06);
        }

        .instruction-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(4, 30, 70, 0.12);
          border-color: #ff7900;
        }

        .number {
          position: absolute;
          top: 0;
          right: 0;
          width: 58px;
          height: 58px;
          background: #ff7900;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          font-weight: 800;
          clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);
        }

        .card-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #052451;
          color: #ff7900;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .instruction-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          color: #092454;
          font-size: 22px;
          margin: 0 0 10px;
        }

        .instruction-card p {
          color: #475569;
          line-height: 1.65;
          font-size: 14px;
          margin: 0;
        }


        /* ================= IMPORTANT ================= */

        .important-section {
          background: #f8f4ed;
          border-radius: 20px;
          padding: 38px;
          border: 1px solid #eee6db;
          margin-bottom: 45px;
        }

        .important-header {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-bottom: 28px;
        }

        .important-icon {
          width: 55px;
          height: 55px;
          background: #062557;
          color: #ff7900;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .important-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .important-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: white;
          padding: 17px;
          border-radius: 10px;
        }

        .important-item svg {
          min-width: 21px;
          color: #ff7900;
          margin-top: 2px;
        }

        .important-item p {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
          color: #26364f;
        }


        /* ================= DOCUMENTS ================= */

        .documents-section {
          margin-bottom: 45px;
        }

        .documents-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .documents-heading > svg {
          color: #ff7900;
        }

        .documents-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .documents-grid div {
          display: flex;
          gap: 12px;
          align-items: center;
          background: white;
          border: 1px solid #eeeae3;
          border-radius: 10px;
          padding: 17px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }

        .documents-grid svg {
          width: 21px;
          color: #ff7900;
          flex-shrink: 0;
        }

        .documents-grid span {
          font-size: 14px;
          line-height: 1.45;
          color: #1e3558;
        }


        /* ================= CTA ================= */

        .admission-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background: #052451;
          border-radius: 20px;
          padding: 35px 40px;
          color: white;
          margin-bottom: 45px;
          position: relative;
          overflow: hidden;
        }

        .admission-cta::after {
          content: "";
          position: absolute;
          width: 200px;
          height: 200px;
          border: 35px solid rgba(255,121,0,0.12);
          border-radius: 50%;
          right: -70px;
          top: -80px;
        }

        .admission-cta h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          margin: 5px 0 7px;
        }

        .admission-cta h2 strong {
          color: #ff7900;
        }

        .admission-cta p {
          margin: 0;
          color: #dbe6f5;
          font-size: 14px;
        }

        .admission-cta a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ff7900;
          color: white;
          text-decoration: none;
          padding: 14px 23px;
          border-radius: 9px;
          font-weight: 700;
          white-space: nowrap;
          transition: 0.3s;
          position: relative;
          z-index: 2;
        }

        .admission-cta a:hover {
          background: #e96500;
          transform: translateY(-2px);
        }


        /* ================= VALUES BAR ================= */

        .values-bar {
          width: min(1180px, 92%);
          margin: 0 auto 35px;
          padding: 25px 30px;
          border-radius: 18px;
          background: #052451;
          color: white;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .values-bar > div {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 22px;
          border-right: 1px solid rgba(255,255,255,0.2);
        }

        .values-bar > div:last-child {
          border-right: none;
        }

        .values-bar svg {
          color: #ff7900;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }

        .values-bar span {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          line-height: 1.5;
          color: #dbe6f5;
        }

        .values-bar strong {
          color: white;
          font-size: 13px;
          margin-bottom: 2px;
        }


        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {

          .instruction-hero {
            height: auto;
            min-height: 570px;
          }

          .hero-content {
            width: 100%;
            padding: 35px 7% 180px;
            z-index: 5;
          }

          .hero-image {
            width: 100%;
            height: 230px;
            top: auto;
            bottom: 0;
            clip-path: none;
          }

          .hero-curve,
          .hero-orange-curve {
            display: none;
          }

          .instruction-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .documents-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .values-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .values-bar > div:nth-child(2) {
            border-right: none;
          }
        }


        @media (max-width: 600px) {

          .instruction-hero {
            min-height: 600px;
          }

          .hero-content {
            padding: 30px 6% 260px;
          }

          .breadcrumb {
            font-size: 13px;
            margin-bottom: 25px;
          }

          .hero-content h1 {
            font-size: 42px;
          }

          .hero-content h2 {
            font-size: 20px;
          }

          .hero-content p {
            font-size: 14px;
          }

          .instruction-container {
            width: 90%;
            padding-top: 45px;
          }

          .section-heading h2,
          .important-header h2,
          .documents-heading h2 {
            font-size: 25px;
          }

          .intro-card {
            flex-direction: column;
            padding: 25px;
          }

          .instruction-grid {
            grid-template-columns: 1fr;
          }

          .important-section {
            padding: 25px;
          }

          .important-list {
            grid-template-columns: 1fr;
          }

          .documents-grid {
            grid-template-columns: 1fr;
          }

          .admission-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 25px;
          }

          .values-bar {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .values-bar > div {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            padding: 15px 0;
          }

          .values-bar > div:last-child {
            border-bottom: none;
          }
        }

      `}</style>
    </div>
  );
}