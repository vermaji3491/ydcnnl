import React from "react";
import {
  Globe2,
  Lightbulb,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const IMAGE = "/images";

export default function Principal() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');

        .founder-page {
          --navy: #062451;
          --navy2: #082d63;
          --orange: #ff6b00;
          --cream: #fffaf2;
          --text: #061f4d;
          font-family: "DM Sans", Arial, sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at 8% 55%, rgba(255,107,0,.06) 0 85px, transparent 86px),
            radial-gradient(circle at 96% 75%, rgba(255,107,0,.05) 0 100px, transparent 101px),
            var(--cream);
          overflow: hidden;
        }

        .founder-hero {
          position: relative;
          min-height: 515px;
          color: #fff;
          overflow: hidden;
          background: var(--navy);
        }

        .founder-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(2,25,60,.98) 0%, rgba(3,31,72,.94) 38%, rgba(4,31,72,.58) 58%, rgba(4,31,72,.06) 100%),
            url("/images/founder-campus.jpg") center right / cover no-repeat;
        }

        .founder-hero-content {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 64px));
          margin: 0 auto;
          padding: 50px 0 115px;
        }

        .founder-breadcrumb {
          font-size: 15px;
          margin-bottom: 35px;
          color: rgba(255,255,255,.94);
        }

        .founder-breadcrumb span {
          color: var(--orange);
        }

        .founder-kicker {
          color: var(--orange);
          font-weight: 700;
          font-size: 18px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .founder-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(44px, 5vw, 68px);
          line-height: 1.05;
          margin: 0;
          max-width: 560px;
          color: #fff;
        }

        .founder-line {
          width: 92px;
          height: 4px;
          background: var(--orange);
          border-radius: 10px;
          margin: 28px 0;
          position: relative;
        }

        .founder-line::before,
        .founder-line::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 7px;
          height: 7px;
          background: var(--orange);
          border-radius: 50%;
          transform: translateY(-50%);
        }

        .founder-line::before { left: -2px; }
        .founder-line::after { right: -2px; }

        .founder-tagline {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 25px;
          margin: 0 0 20px;
          color: #fff;
        }

        .founder-description {
          max-width: 500px;
          font-size: 17px;
          line-height: 1.8;
          margin: 0;
          color: rgba(255,255,255,.96);
        }

        .founder-seal {
          position: absolute;
          z-index: 1;
          width: 285px;
          height: 285px;
          left: 35%;
          top: 45px;
          opacity: .15;
          object-fit: contain;
          
          pointer-events: none;
        }

        /* Same curved transition style used for the Advisory page */
        .founder-curve {
          position: absolute;
          z-index: 4;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 105px;
          pointer-events: none;
        }

        .founder-curve svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .founder-main {
          width: min(1180px, calc(100% - 64px));
          margin: 0 auto;
          padding: 55px 0 30px;
        }

        .founder-profile {
          display: grid;
          grid-template-columns: 390px 1fr;
          gap: 58px;
          align-items: center;
        }

        .founder-photo-wrap {
          position: relative;
          padding: 10px;
          border: 1.5px solid var(--orange);
          border-radius: 25px;
          background: #fff;
          box-shadow: 0 12px 35px rgba(6,36,81,.13);
        }

        .founder-photo-wrap::before {
          content: "";
          position: absolute;
          width: 125px;
          height: 125px;
          left: -42px;
          bottom: 105px;
          border-radius: 50%;
          background: var(--navy);
          z-index: -1;
        }

        .founder-photo {
          display: block;
          width: 100%;
          aspect-ratio: 0.84;
          object-fit: cover;
          object-position: center top;
          border-radius: 17px;
          background: #eee;
        }

        .founder-dots {
          position: absolute;
          left: -45px;
          bottom: -18px;
          width: 145px;
          height: 120px;
          background-image: radial-gradient(var(--orange) 1.5px, transparent 1.5px);
          background-size: 12px 12px;
          opacity: .9;
          z-index: -1;
        }

        .founder-small-title {
          color: var(--orange);
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 15px;
        }

        .founder-name {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(38px, 4vw, 54px);
          line-height: 1.1;
          margin: 0;
          color: var(--navy);
        }

        .founder-role {
          color: var(--orange);
          font-size: 21px;
          font-weight: 600;
          margin: 18px 0 18px;
        }

        .founder-text {
          font-size: 17px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .founder-quote {
          margin-top: 55px;
          padding: 38px 55px;
          border: 1px solid rgba(6,36,81,.10);
          border-radius: 16px;
          background: rgba(255,255,255,.62);
          box-shadow: 0 8px 28px rgba(6,36,81,.04);
          position: relative;
        }

        .quote-mark {
          color: var(--orange);
          font-family: Georgia, serif;
          font-size: 75px;
          line-height: .7;
          position: absolute;
          left: 28px;
          top: 35px;
        }

        .quote-text {
          margin: 0 0 20px 45px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 20px;
          line-height: 1.65;
        }

        .quote-author {
          margin-left: 45px;
          color: var(--orange);
          font-size: 18px;
          font-weight: 700;
        }

        .quote-author small {
          display: block;
          color: var(--text);
          font-size: 14px;
          margin-top: 5px;
        }

        .founder-values {
          margin-top: 25px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: var(--navy);
          border-radius: 18px;
          overflow: hidden;
          color: #fff;
          box-shadow: 0 10px 30px rgba(6,36,81,.14);
        }

        .value-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 25px 22px;
          border-right: 1px solid rgba(255,255,255,.18);
        }

        .value-card:last-child { border-right: 0; }

        .value-icon {
          flex: 0 0 auto;
          color: var(--orange);
        }

        .value-card strong {
          display: block;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .value-card span {
          display: block;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255,255,255,.9);
        }

        .founder-bottom-space {
          height: 35px;
        }

        @media (max-width: 900px) {
          .founder-hero { min-height: 610px; }
          .founder-hero-content { width: min(92%, 700px); padding-top: 35px; }
          .founder-seal { left: 45%; width: 240px; height: 240px; }
          .founder-profile { grid-template-columns: 1fr; gap: 45px; }
          .founder-photo-wrap { max-width: 420px; margin: 0 auto; }
          .founder-values { grid-template-columns: repeat(2, 1fr); }
          .value-card:nth-child(2) { border-right: 0; }
          .value-card:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.18); }
        }

        @media (max-width: 600px) {
          .founder-hero { min-height: 650px; }
          .founder-hero-content,
          .founder-main { width: calc(100% - 34px); }
          .founder-breadcrumb { font-size: 13px; margin-bottom: 28px; }
          .founder-kicker { font-size: 15px; }
          .founder-description { font-size: 15px; }
          .founder-curve { height: 70px; }
          .founder-profile { gap: 35px; }
          .founder-name { font-size: 36px; }
          .founder-text { font-size: 15px; }
          .founder-quote { padding: 30px 24px; }
          .quote-text { margin-left: 30px; font-size: 17px; }
          .quote-author { margin-left: 30px; }
          .quote-mark { left: 14px; }
          .founder-values { grid-template-columns: 1fr; }
          .value-card,
          .value-card:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.18);
          }
          .value-card:last-child { border-bottom: 0; }
        }
      `}</style>

      <main className="founder-page">
        <section className="founder-hero">
          <img
            className="founder-seal"
            src={`${IMAGE}/Cyaduvanshilogo.png`}
            alt=""
          />

          <div className="founder-hero-content">
            <div className="founder-breadcrumb">
              Home&nbsp;&nbsp;&gt;&nbsp;&nbsp; About Us&nbsp;&nbsp;&gt;&nbsp;&nbsp;
              Administration&nbsp;&nbsp;&gt;&nbsp;&nbsp;
              <span>Principal</span>
            </div>

            <div className="founder-kicker">Principal</div>

            <h1 className="founder-title">Principal</h1>

            <div className="founder-line" />

            <h2 className="founder-tagline">
              Vision. Leadership. Excellence.
            </h2>

            <p className="founder-description">
              Guided by a vision for transformative education, the
              Principal has played a pivotal role in shaping the Yaduvanshi
              educational legacy and building institutions committed to
              excellence, values and social responsibility.
            </p>
          </div>

          <div className="founder-curve" aria-hidden="true">
            <svg viewBox="0 0 1440 115" preserveAspectRatio="none">
              <path
                fill="#fffaf2"
                d="M0,82 C210,132 430,124 650,92 C875,58 1080,86 1235,76 C1320,70 1385,48 1440,17 L1440,115 L0,115 Z"
              />
              <path
                d="M0,78 C210,128 430,120 650,88 C875,54 1080,82 1235,72 C1320,66 1385,44 1440,13"
                fill="none"
                stroke="#ff6b00"
                strokeWidth="7"
              />
            </svg>
          </div>
        </section>

        <section className="founder-main">
          <div className="founder-profile">
            <div className="founder-photo-wrap">
              <img
                className="founder-photo"
                src={`${IMAGE}/founder-Principal.png`}
                alt="Dr. Naveen Adlakha, Principal"
              />
              <div className="founder-dots" aria-hidden="true" />
            </div>

            <div>
              <p className="founder-small-title">
                Our Inspiration. Our Guiding Force.
              </p>

              <div className="founder-line" />

              <h2 className="founder-name">Dr. Naveen Adlakha</h2>

              <div className="founder-role">Principal</div>

              <div className="founder-line" />

              <p className="founder-text">
               The Principal of YDC NNL plays a vital role in guiding the academic and administrative development of the institution. With a strong commitment to quality education and student success, the Principal works toward creating a disciplined, inclusive, and progressive learning environment where every student is encouraged to discover their potential and achieve their aspirations.
                    </p>

              <p className="founder-text">
               The leadership focuses on strengthening academic standards, supporting innovative teaching practices, encouraging faculty development, and providing students with opportunities for practical learning and personal growth. At Yaduvanshi Degree College, education is viewed as a journey that develops not only knowledge and professional skills but also confidence, discipline, ethical values, and social responsibility.
              </p>

              <p className="founder-text">
               The Principal works closely with faculty members, students, and the wider college community to ensure that academic activities are effectively planned and implemented. Special emphasis is placed on student participation, career development, co-curricular activities, and preparing young learners to respond confidently to the challenges of a changing world.   </p>
           
           <p className="founder-text">
With a student-first approach and a commitment to continuous improvement, the Principal strives to strengthen YDC NNL as a supportive and dynamic centre of higher education. The vision is to empower students with the knowledge, skills, and values needed to become capable professionals, responsible citizens, and lifelong learners.
           </p>
            </div>
          </div>

          <div className="founder-quote">
            <div className="quote-mark">“</div>
            <p className="quote-text">
              “Education becomes meaningful when knowledge is transformed into confidence, character, and the courage to make a positive difference.”
            </p>
            <div className="quote-author">
              – Dr. Naveen Adlakha
              <small>Principal</small>
            </div>
          </div>

          <div className="founder-values">
            <div className="value-card">
              <Lightbulb className="value-icon" size={43} strokeWidth={1.7} />
              <div>
                <strong>Visionary Leadership</strong>
                <span>Building institutions that inspire and transform.</span>
              </div>
            </div>

            <div className="value-card">
              <ShieldCheck className="value-icon" size={43} strokeWidth={1.7} />
              <div>
                <strong>Value Based Education</strong>
                <span>Nurturing values, character and lifelong learning.</span>
              </div>
            </div>

            <div className="value-card">
              <UsersRound className="value-icon" size={43} strokeWidth={1.7} />
              <div>
                <strong>Student First Approach</strong>
                <span>Every decision is driven by student success.</span>
              </div>
            </div>

            <div className="value-card">
              <Globe2 className="value-icon" size={43} strokeWidth={1.7} />
              <div>
                <strong>Social Responsibility</strong>
                <span>Committed to society, nation and humanity.</span>
              </div>
            </div>
          </div>

          <div className="founder-bottom-space" />
        </section>
      </main>
    </>
  );
}
