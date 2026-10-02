import React from "react";
import {
  ShieldCheck,
  Users,
  AlertTriangle,
  FileText,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";

const AntiRaggingCell = () => {
  const objectives = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Zero Tolerance",
      text: "The institution promotes a safe, respectful and ragging-free environment for every student.",
    },
    {
      icon: <Users size={28} />,
      title: "Student Safety",
      text: "Students are encouraged to report any incident or concern related to ragging without hesitation.",
    },
    {
      icon: <Scale size={28} />,
      title: "Fair Action",
      text: "Complaints and reported incidents are handled through the appropriate institutional process.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Positive Campus",
      text: "The college encourages healthy interaction, mutual respect and constructive relationships among students.",
    },
  ];

  const rules = [
    "Ragging in any form is not permitted within the college campus or at activities associated with the institution.",
    "Students should treat fellow students with dignity and respect.",
    "No student should be subjected to physical, verbal, psychological or other forms of harassment.",
    "Students should immediately report any suspected or experienced incident of ragging.",
    "Students are expected to cooperate with the Anti Ragging Cell and college authorities during any inquiry.",
    "Disciplinary action may be taken in accordance with applicable institutional and regulatory rules.",
  ];

  const complaintSteps = [
    {
      number: "01",
      title: "Report the Incident",
      text: "Inform the Anti Ragging Cell, college authority or designated faculty member about the incident.",
    },
    {
      number: "02",
      title: "Provide Information",
      text: "Share relevant details about the incident, including the date, place and persons involved, wherever possible.",
    },
    {
      number: "03",
      title: "Verification",
      text: "The concerned authority reviews the information and follows the applicable institutional procedure.",
    },
    {
      number: "04",
      title: "Appropriate Action",
      text: "Necessary action is taken according to applicable rules and the circumstances of the matter.",
    },
  ];

  return (
    <div className="anti-ragging-page">

      {/* ================= HERO ================= */}
      <section className="ragging-hero">

        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>

        <div className="ragging-hero-inner">

          <div className="ragging-hero-content">

            <div className="hero-label">
               <div className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Admission</span>
              <span>/</span>
              <strong>Anti Ragging Cell</strong>
            </div>
              
            </div>

            <h1>
              Anti <span>Ragging Cell</span>
            </h1>

            <p>
              Promoting a safe, respectful and welcoming campus environment
              where every student can learn, grow and participate without
              fear or harassment.
            </p>
         
          </div>

          <div className="ragging-hero-right">

            <div className="hero-safety-card">

              <div className="safety-icon">
                <ShieldCheck size={40} />
              </div>

              <h3>Ragging-Free Campus</h3>

              <p>
                Every student deserves a campus environment based on dignity,
                safety and mutual respect.
              </p>

              <a
                href="#report"
                className="hero-report-button"
              >
                Know the Procedure
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* WAVE */}
        <div className="ragging-wave-wrapper">

          <svg
            className="ragging-wave"
            viewBox="0 0 1536 220"
            preserveAspectRatio="none"
          >

            <path
              className="ragging-orange-line"
              d="M0,112 C150,205 355,208 555,133 C775,52 990,90 1160,127 C1280,153 1365,135 1440,88 L1536,45"
            />

            <path
              className="ragging-white-wave"
              d="M0,130 C150,220 355,220 555,145 C775,64 990,100 1160,137 C1280,163 1365,145 1440,98 C1490,72 1515,57 1536,50 L1536,220 L0,220 Z"
            />

          </svg>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="ragging-intro">

        <div className="intro-card">

          <div className="section-tag">
            ANTI RAGGING INITIATIVE
          </div>

          <h2>
            Creating a Safe and Respectful Campus
          </h2>

          <p>
            Yaduvanshi Degree College is committed to providing students with
            a positive academic environment. The Anti Ragging Cell works to
            promote awareness, discourage ragging and support students in
            maintaining a campus culture based on dignity, discipline and
            mutual respect.
          </p>

          <div className="important-notice">

            <div className="notice-icon">
              <AlertTriangle size={22} />
            </div>

            <div>
              <strong>Important Notice</strong>

              <span>
                Ragging in any form is prohibited. Students should promptly
                bring any concern or incident to the notice of the appropriate
                college authority.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= OBJECTIVES ================= */}
      <section className="ragging-section">

        <div className="section-heading">

          <div className="section-tag">
            OUR COMMITMENT
          </div>

          <h2>
            Objectives of the Anti Ragging Cell
          </h2>

          <p>
            The Anti Ragging Cell promotes student safety, awareness and a
            healthy academic atmosphere.
          </p>

        </div>

        <div className="objectives-grid">

          {objectives.map((item, index) => (
            <div className="objective-card" key={index}>

              <div className="objective-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= RULES ================= */}
      <section className="rules-section">

        <div className="rules-container">

          <div className="rules-heading">

            <div className="section-tag">
              CAMPUS DISCIPLINE
            </div>

            <h2>Anti Ragging Rules</h2>

            <p>
              Students are expected to maintain discipline and respect the
              dignity of all members of the college community.
            </p>

          </div>

          <div className="rules-list">

            {rules.map((rule, index) => (

              <div className="rule-item" key={index}>

                <div className="rule-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="rule-content">

                  <CheckCircle2 size={20} />

                  <span>{rule}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHAT IS RAGGING ================= */}
      <section className="definition-section">

        <div className="definition-container">

          <div className="definition-icon">
            <AlertTriangle size={38} />
          </div>

          <div className="definition-content">

            <div className="section-tag">
              AWARENESS
            </div>

            <h2>What Students Should Know</h2>

            <p>
              Ragging may involve behaviour that humiliates, intimidates,
              threatens, harasses or causes physical or psychological
              discomfort to another student.
            </p>

            <p>
              Students should not participate in, encourage or remain silent
              about conduct that violates the dignity and safety of others.
            </p>

          </div>

        </div>

      </section>


      {/* ================= REPORT PROCEDURE ================= */}
      <section
        className="complaint-section"
        id="report"
      >

        <div className="section-heading">

          <div className="section-tag">
            REPORTING PROCEDURE
          </div>

          <h2>How to Report an Incident</h2>

          <p>
            Students can follow the institutional reporting procedure if they
            experience or witness a ragging-related incident.
          </p>

        </div>

        <div className="complaint-grid">

          {complaintSteps.map((step, index) => (

            <div className="complaint-card" key={index}>

              <div className="complaint-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="report-section">

        <div className="report-container">

          <div className="report-icon">
            <PhoneCall size={35} />
          </div>

          <div className="report-text">

            <div className="section-tag">
              NEED HELP?
            </div>

            <h2>Report a Ragging-Related Concern</h2>

            <p>
              Students who experience or witness ragging should contact the
              designated Anti Ragging Cell, college administration or
              appropriate faculty authority promptly.
            </p>

          </div>

          <Link
            to="/contact"
            className="contact-button"
          >
            Contact College
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>


      {/* ================= POLICY ================= */}
      <section className="policy-section">

        <div className="policy-card">

          <div className="policy-icon">
            <FileText size={35} />
          </div>

          <div>

            <div className="section-tag">
              POLICY & GUIDELINES
            </div>

            <h2>Student Responsibility</h2>

            <p>
              All students are expected to follow the college's disciplinary
              requirements and applicable anti-ragging rules. Students should
              cooperate with the college authorities in maintaining a safe
              and respectful learning environment.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="ragging-cta">

        <div className="cta-inner">

          <div>

            <span className="cta-label">
              SAFE CAMPUS • RESPECT • DIGNITY
            </span>

            <h2>
              Together for a Ragging-Free Campus
            </h2>

            <p>
              Respect one another and help create a positive environment for
              every student.
            </p>

          </div>

          <Link
            to="/contact"
            className="cta-button"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>


      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .anti-ragging-page {
          width: 100%;
          background: #ffffff;
          color: #2d3748;
          font-family: "DM Sans", Arial, sans-serif;
        }

        /* HERO */

        .ragging-hero {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #061d45;
          color: #ffffff;
        }

        .ragging-hero-inner {
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

        .ragging-hero-content {
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

        .ragging-hero-content h1 {
          margin: 0 0 18px;

          font-family: "Playfair Display", Georgia, serif;

          font-size: clamp(42px, 5vw, 64px);

          line-height: 1.05;

          font-weight: 700;
        }

        .ragging-hero-content h1 span {
          color: #ff9f1c;
        }

        .ragging-hero-content p {
          max-width: 650px;

          margin: 0 0 25px;

          color: rgba(255,255,255,0.88);

          font-size: 17px;

          line-height: 1.7;
        }

        .hero-breadcrumb {
          display: flex;
          align-items: center;

          flex-wrap: wrap;
         
          gap: 9px;
          margin-bottom: 22px
          font-size: 14px;

          color: rgba(255,255,255,0.65);
        }

        .hero-breadcrumb a {
          color: #ff9f1c;
          text-decoration: none;
          font-weight: 600;
        }

        .hero-breadcrumb strong {
          color: #ffffff;
        }

        /* HERO CARD */

        .ragging-hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-safety-card {
          width: 100%;
          max-width: 365px;

          padding: 30px;

          border: 1px solid rgba(255,255,255,0.18);

          border-radius: 20px;

          background: rgba(255,255,255,0.10);

          backdrop-filter: blur(10px);

          box-shadow: 0 20px 50px rgba(0,0,0,0.20);
        }

        .safety-icon {
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

        .hero-safety-card h3 {
          margin: 0 0 10px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 25px;
        }

        .hero-safety-card p {
          margin: 0 0 22px;

          color: rgba(255,255,255,0.78);

          font-size: 15px;

          line-height: 1.6;
        }

        .hero-report-button {
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

        .hero-report-button:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }

        /* DECORATIONS */

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

        /* WAVE */

        .ragging-wave-wrapper {
          position: absolute;

          z-index: 5;

          left: 0;
          right: 0;
          bottom: 0;

          height: 145px;

          pointer-events: none;
        }

        .ragging-wave {
          position: absolute;

          width: 100%;
          height: 100%;

          left: 0;
          bottom: 0;
        }

        .ragging-white-wave {
          fill: #ffffff;
        }

        .ragging-orange-line {
          fill: none;

          stroke: #ff9f1c;

          stroke-width: 5;

          stroke-linecap: round;
        }

        /* COMMON */

        .section-tag {
          display: inline-block;

          margin-bottom: 10px;

          color: #e58a00;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 1.8px;
        }

        .section-heading {
          max-width: 750px;

          margin: 0 auto 42px;

          text-align: center;
        }

        .section-heading h2 {
          margin: 0 0 13px;

          color: #102a43;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 36px;

          line-height: 1.2;
        }

        .section-heading p {
          margin: 0;

          color: #64748b;

          font-size: 16px;

          line-height: 1.7;
        }

        /* INTRO */

        .ragging-intro {
          max-width: 1200px;

          margin: 0 auto;

          padding: 40px 30px 30px;
        }

        .intro-card {
          padding: 38px;

          border-radius: 18px;

          background: #fffaf3;

          border: 1px solid #f2dfc4;
        }

        .intro-card h2 {
          margin: 0 0 14px;

          color: #102a43;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 32px;
        }

        .intro-card > p {
          max-width: 1000px;

          margin: 0;

          color: #64748b;

          font-size: 16px;

          line-height: 1.75;
        }

        .important-notice {
          display: flex;

          align-items: flex-start;

          gap: 14px;

          margin-top: 25px;

          padding: 17px 19px;

          border-left: 4px solid #e58a00;

          border-radius: 8px;

          background: #ffffff;
        }

        .notice-icon {
          flex-shrink: 0;

          color: #e58a00;
        }

        .important-notice div:last-child {
          display: flex;

          flex-direction: column;

          gap: 4px;
        }

        .important-notice strong {
          color: #102a43;
        }

        .important-notice span {
          color: #64748b;

          font-size: 14px;

          line-height: 1.55;
        }

        /* OBJECTIVES */

        .ragging-section {
          max-width: 1200px;

          margin: 0 auto;

          padding: 55px 30px 75px;
        }

        .objectives-grid {
          display: grid;

          grid-template-columns: repeat(4, 1fr);

          gap: 22px;
        }

        .objective-card {
          padding: 28px 23px;

          border: 1px solid #e2e8f0;

          border-radius: 15px;

          background: #ffffff;

          box-shadow: 0 8px 25px rgba(15,40,70,0.05);

          transition: all 0.25s ease;
        }

        .objective-card:hover {
          transform: translateY(-5px);

          box-shadow: 0 15px 35px rgba(15,40,70,0.10);
        }

        .objective-icon {
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

        .objective-card h3 {
          margin: 0 0 10px;

          color: #102a43;

          font-size: 19px;
        }

        .objective-card p {
          margin: 0;

          color: #64748b;

          font-size: 14px;

          line-height: 1.65;
        }

        /* RULES */

        .rules-section {
          width: 100%;

          padding: 75px 30px;

          background: #f8fafc;
        }

        .rules-container {
          max-width: 1100px;

          margin: 0 auto;
        }

        .rules-heading {
          margin-bottom: 35px;
        }

        .rules-heading h2 {
          margin: 0 0 12px;

          color: #102a43;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 35px;
        }

        .rules-heading p {
          max-width: 750px;

          margin: 0;

          color: #64748b;

          line-height: 1.65;
        }

        .rules-list {
          display: flex;

          flex-direction: column;

          gap: 12px;
        }

        .rule-item {
          display: flex;

          align-items: center;

          gap: 18px;

          padding: 17px 20px;

          border: 1px solid #e1e8f0;

          border-radius: 11px;

          background: #ffffff;
        }

        .rule-number {
          flex-shrink: 0;

          width: 45px;
          height: 45px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #062452;

          color: #ff9f1c;

          font-weight: 800;

          font-size: 13px;
        }

        .rule-content {
          display: flex;

          align-items: center;

          gap: 12px;

          color: #475569;

          font-size: 15px;

          line-height: 1.55;
        }

        .rule-content svg {
          flex-shrink: 0;

          color: #e58a00;
        }

        /* DEFINITION */

        .definition-section {
          max-width: 1200px;

          margin: 0 auto;

          padding: 75px 30px;
        }

        .definition-container {
          display: grid;

          grid-template-columns: 100px 1fr;

          align-items: center;

          gap: 35px;

          padding: 40px;

          border-radius: 18px;

          background: #062452;

          color: #ffffff;
        }

        .definition-icon {
          width: 80px;
          height: 80px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 20px;

          background: #ff9f1c;

          color: #062452;
        }

        .definition-content .section-tag {
          color: #ff9f1c;
        }

        .definition-content h2 {
          margin: 0 0 14px;

          color: #ffffff;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 32px;
        }

        .definition-content p {
          margin: 0 0 10px;

          color: rgba(255,255,255,0.76);

          font-size: 15px;

          line-height: 1.7;
        }

        .definition-content p:last-child {
          margin-bottom: 0;
        }

        /* COMPLAINT */

        .complaint-section {
          max-width: 1200px;

          margin: 0 auto;

          padding: 10px 30px 75px;
        }

        .complaint-grid {
          display: grid;

          grid-template-columns: repeat(4, 1fr);

          gap: 20px;
        }

        .complaint-card {
          position: relative;

          padding: 28px 22px;

          border: 1px solid #e2e8f0;

          border-radius: 15px;

          background: #ffffff;

          box-shadow: 0 7px 22px rgba(15,40,70,0.04);
        }

        .complaint-number {
          margin-bottom: 16px;

          color: #ff9f1c;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 28px;

          font-weight: 700;
        }

        .complaint-card h3 {
          margin: 0 0 10px;

          color: #102a43;

          font-size: 18px;
        }

        .complaint-card p {
          margin: 0;

          color: #64748b;

          font-size: 14px;

          line-height: 1.65;
        }

        /* REPORT */

        .report-section {
          width: 100%;

          padding: 60px 30px;

          background: #fffaf3;
        }

        .report-container {
          max-width: 1100px;

          margin: 0 auto;

          display: flex;

          align-items: center;

          gap: 25px;

          padding: 30px;

          border: 1px solid #f0dfc6;

          border-radius: 17px;

          background: #ffffff;
        }

        .report-icon {
          flex-shrink: 0;

          width: 70px;
          height: 70px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 16px;

          background: #fff1da;

          color: #e58a00;
        }

        .report-text {
          flex: 1;
        }

        .report-text h2 {
          margin: 0 0 8px;

          color: #102a43;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 27px;
        }

        .report-text p {
          max-width: 700px;

          margin: 0;

          color: #64748b;

          font-size: 14px;

          line-height: 1.6;
        }

        .contact-button {
          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 13px 20px;

          border-radius: 8px;

          background: #062452;

          color: #ffffff;

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;
        }

        .contact-button:hover {
          background: #ff9f1c;

          color: #062452;
        }

        /* POLICY */

        .policy-section {
          max-width: 1200px;

          margin: 0 auto;

          padding: 65px 30px;
        }

        .policy-card {
          display: flex;

          align-items: flex-start;

          gap: 25px;

          padding: 35px;

          border: 1px solid #e2e8f0;

          border-radius: 17px;

          background: #f8fafc;
        }

        .policy-icon {
          flex-shrink: 0;

          width: 65px;
          height: 65px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 15px;

          background: #062452;

          color: #ff9f1c;
        }

        .policy-card h2 {
          margin: 0 0 10px;

          color: #102a43;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 29px;
        }

        .policy-card p {
          margin: 0;

          color: #64748b;

          font-size: 15px;

          line-height: 1.7;
        }

        /* CTA */

        .ragging-cta {
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

          letter-spacing: 1.7px;
        }

        .cta-inner h2 {
          margin: 8px 0;

          color: #ffffff;

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
        }

        .cta-button:hover {
          background: #ffffff;

          transform: translateY(-2px);
        }

        /* TABLET */

        @media (max-width: 1000px) {

          .ragging-hero-inner {
            grid-template-columns: 1fr;
          }

          .ragging-hero-right {
            display: none;
          }

          .objectives-grid,
          .complaint-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        /* MOBILE */

        @media (max-width: 650px) {

          .ragging-hero {
            min-height: 370px;
          }

          .ragging-hero-inner {
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

          .ragging-hero-content h1 {
            font-size: 40px;
          }

          .ragging-hero-content p {
            font-size: 14px;
            line-height: 1.6;
          }

          .hero-breadcrumb {
            font-size: 12px;
          }

          .ragging-wave-wrapper {
            height: 100px;
          }

          .ragging-intro,
          .ragging-section,
          .definition-section,
          .complaint-section,
          .policy-section {
            padding-left: 18px;
            padding-right: 18px;
          }

          .intro-card {
            padding: 25px 20px;
          }

          .intro-card h2 {
            font-size: 27px;
          }

          .section-heading h2 {
            font-size: 28px;
          }

          .objectives-grid,
          .complaint-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .rules-section {
            padding:
              55px
              18px;
          }

          .rules-heading h2 {
            font-size: 28px;
          }

          .rule-item {
            align-items: flex-start;
            padding: 14px;
          }

          .rule-content {
            align-items: flex-start;
            font-size: 13px;
          }

          .definition-container {
            grid-template-columns: 1fr;

            gap: 20px;

            padding: 28px 22px;
          }

          .definition-icon {
            width: 65px;
            height: 65px;
          }

          .definition-content h2 {
            font-size: 27px;
          }

          .report-section {
            padding:
              45px
              18px;
          }

          .report-container {
            flex-direction: column;
            align-items: flex-start;

            padding: 25px 20px;
          }

          .contact-button {
            width: 100%;
          }

          .policy-card {
            flex-direction: column;
            padding: 25px 20px;
          }

          .policy-card h2 {
            font-size: 26px;
          }

          .ragging-cta {
            padding:
              50px
              20px;
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

export default AntiRaggingCell;