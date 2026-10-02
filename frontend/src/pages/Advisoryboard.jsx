import React from "react";
import {
  ShieldCheck,
  Users,
  Scale,
  Award,
  ChevronRight,
} from "lucide-react";

/*
  Advisory.jsx
  ---------------------------------------------------------
  This file contains the complete Advisory Board page:
  JSX + responsive CSS in ONE file.

  IMPORTANT:
  - Do NOT add another Navbar/Header inside this component if
    your App.jsx already has the common Navbar.
  - Put the images in:
      public/images/
  - Current image paths used below:
      /images/yaduvanshilogo.png
      /images/advisory-campus.jpg
      /images/pavitra-rao.jpg
      /images/manish-rao.jpg
      /images/bimla-devi.jpg
      /images/narender-rao.jpg
      /images/mahesh-yadav.jpg
      /images/devender-yadav.jpg

  If your portrait filenames are different, only change the
  "image" values in advisoryMembers.
*/

const advisoryMembers = [
  {
    number: "01",
    name: "Mrs. Pavitra Rao",
    role: "CHAIRPERSON",
    organization: "Yaduvanshi Education Society",
    image: "/images/pavitra-rao.jpg",
  },
  {
    number: "02",
    name: "Er. Manish Rao",
    role: "VICE PRESIDENT CUM C.E.O.",
    organization: "Yaduvanshi Education Society",
    image: "/images/manish-rao.jpg",
  },
  {
    number: "03",
    name: "Mrs. Bimla Devi",
    role: "MEMBER",
    organization: "Yaduvanshi Education Society",
    image: "/images/bimla-devi.jpg",
  },
  {
    number: "03",
    name: "Mrs. Bimla Devi",
    role: "MEMBER",
    organization: "Yaduvanshi Education Society",
    image: "/images/bimla-devi.jpg",
  },
  {
    number: "03",
    name: "Rdc. Pavitra Society",
    role: "MEMBER",
    organization: "Yaduvanshi Education Society",
    image: "",
  },
  {
    number: "04",
    name: "Advocate Narender Rao",
    role: "MEMBER",
    organization: "Yaduvanshi Education Society",
    image: "/images/narender-rao.jpg",
  },
  {
    number: "05",
    name: "Prof. Mahesh K. Yadav",
    role: "MEMBER SECRETARY AND PRINCIPAL",
    organization: "Yaduvanshi Education Society",
    image: "/images/mahesh-yadav.jpg",
  },
  {
    number: "06",
    name: "Mr. Devender S. Yadav",
    role: "REGISTRAR",
    organization: "Yaduvanshi Education Society",
    image: "/images/devender-yadav.jpg",
  },
];

const leftMembers = advisoryMembers.slice(0, 4);
const rightMembers = advisoryMembers.slice(4);

function MemberCard({ member }) {
  return (
    <article className="advisory-member-card">
      <div className="member-number">
        <span>{member.number}</span>
        <i />
      </div>

      <div className="member-photo-wrap">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="member-photo"
          />
        ) : (
          <div className="member-photo member-photo-empty">
            <Users size={42} strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="member-information">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <div className="member-accent">
          <span />
          <b />
          <span />
        </div>
      </div>

      <div className="member-organization">
        {member.organization}
      </div>
    </article>
  );
}

function BoardColumn({ members }) {
  return (
    <div className="board-column">
      {members.map((member, index) => (
        <MemberCard
          key={`${member.name}-${member.number}-${index}`}
          member={member}
        />
      ))}
    </div>
  );
}

export default function Advisory() {
  return (
    <main className="advisory-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');

        :root {
          --ad-navy: #06275b;
          --ad-navy-dark: #031d49;
          --ad-navy-soft: #0c356e;
          --ad-orange: #ff6a00;
          --ad-orange-2: #ff8a00;
          --ad-cream: #faf7f0;
          --ad-white: #ffffff;
          --ad-text: #09275b;
          --ad-muted: #52627a;
        }

        * {
          box-sizing: border-box;
        }

        .advisory-page {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          overflow: hidden;
          background:
            radial-gradient(circle at 8% 25%, rgba(255, 138, 0, 0.045), transparent 23%),
            radial-gradient(circle at 93% 70%, rgba(6, 39, 91, 0.045), transparent 25%),
            var(--ad-cream);
          color: var(--ad-text);
          font-family: "DM Sans", Arial, sans-serif;
        }

        .advisory-page img {
          display: block;
          max-width: 100%;
        }

        /* --------------------------------------------------
           HERO
        -------------------------------------------------- */

        .advisory-hero {
          position: relative;
          min-height: 405px;
          isolation: isolate;
          overflow: hidden;
          color: white;
          background: var(--ad-navy-dark);
        }

        .hero-campus-image {
          position: absolute;
          z-index: -3;
          top: 0;
          right: 0;
          width: 57%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-image-shade {
          position: absolute;
          z-index: -2;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              #031d49 0%,
              #05265b 38%,
              rgba(5, 38, 91, 0.94) 47%,
              rgba(5, 38, 91, 0.35) 66%,
              rgba(5, 38, 91, 0) 83%
            );
        }
        /* =====================================================
           WATERMARK
        ===================================================== */

        .hero-watermark {
          position: absolute;

          z-index: 1;

          left: 230px;
          top: 20px;

          width: 280px;
          height: 280px;

          opacity: 0.15;

          pointer-events: none;
        }

        .hero-watermark img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
        .hero-inner {
          width: min(1380px, calc(100% - 90px));
          min-height: 405px;
          margin: 0 auto;
          padding: 32px 0 74px;
          position: relative;
          z-index: 2;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          color: rgba(255,255,255,.9);
          font-size: 14px;
          font-weight: 500;
        }

        .breadcrumbs .current {
          color: var(--ad-orange);
        }

        .hero-title {
          max-width: 640px;
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(46px, 5vw, 70px);
          line-height: 1.02;
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .hero-title .orange {
          color: var(--ad-orange);
        }

        .hero-line {
          width: 88px;
          height: 4px;
          margin: 18px 0 18px;
          border-radius: 20px;
          background: var(--ad-orange);
        }

        .hero-description {
          max-width: 575px;
          margin: 0;
          color: rgba(255,255,255,.92);
          font-size: 18px;
          line-height: 1.6;
        }

        /* exact curved transition */
        .hero-curve {
          position: absolute;
          z-index: 5;
          left: -2%;
          bottom: -1px;
          width: 104%;
          height: 72px;
          pointer-events: none;
        }

        .hero-curve svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .hero-curve .curve-white {
          fill: var(--ad-cream);
        }

        .hero-curve .curve-orange {
          fill: var(--ad-orange);
        }

        /* --------------------------------------------------
           SECTION HEADING
        -------------------------------------------------- */

        .board-section {
          position: relative;
          width: min(1380px, calc(100% - 90px));
          margin: 0 auto;
          padding: 18px 0 28px;
        }

        .board-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin: 0 0 20px;
          text-align: center;
        }

        .heading-side-line {
          flex: 1;
          height: 1px;
          max-width: 420px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(6,39,91,.16)
          );
        }

        .heading-side-line.right {
          background: linear-gradient(
            90deg,
            rgba(6,39,91,.16),
            transparent
          );
        }

        .board-heading h2 {
          position: relative;
          margin: 0;
          padding-bottom: 13px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(27px, 3vw, 39px);
          line-height: 1;
          color: var(--ad-navy);
          white-space: nowrap;
        }

        .board-heading h2::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 86px;
          height: 4px;
          border-radius: 20px;
          background: var(--ad-orange);
          transform: translateX(-50%);
        }

        .board-heading h2::before {
          content: "";
          position: absolute;
          left: calc(50% - 48px);
          bottom: 1px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ad-orange);
          box-shadow: 90px 0 0 var(--ad-orange);
          z-index: 2;
        }

        /* --------------------------------------------------
           MEMBERS
        -------------------------------------------------- */

        .members-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .board-column {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .advisory-member-card {
          position: relative;
          min-height: 94px;
          display: grid;
          grid-template-columns: 67px 105px minmax(180px, 1fr) auto;
          align-items: center;
          overflow: hidden;
          border: 1px solid rgba(9,39,91,.06);
          border-radius: 13px;
          background: rgba(255,255,255,.96);
          box-shadow:
            0 5px 17px rgba(13, 35, 64, .10),
            inset 0 1px 0 rgba(255,255,255,.8);
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .advisory-member-card:hover {
          transform: translateY(-3px);
          box-shadow:
            0 12px 25px rgba(13, 35, 64, .15),
            inset 0 1px 0 rgba(255,255,255,.8);
        }

        .member-number {
          position: relative;
          align-self: stretch;
          display: grid;
          place-items: center;
          overflow: visible;
          background: linear-gradient(
            180deg,
            var(--ad-navy),
            #082f6b
          );
          color: white;
        }

        .member-number span {
          position: relative;
          z-index: 2;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
          font-weight: 700;
        }

        .member-number i {
          position: absolute;
          right: -6px;
          width: 12px;
          height: 12px;
          background: var(--ad-orange);
          transform: rotate(45deg);
          z-index: 4;
        }

        .member-photo-wrap {
          height: 88px;
          align-self: center;
          overflow: hidden;
          margin: 3px 0 3px 0;
          background: #edf1f5;
        }

        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .member-photo-empty {
          display: grid;
          place-items: center;
          color: var(--ad-navy);
          background: linear-gradient(135deg,#eef3f8,#dce6f0);
        }

        .member-information {
          min-width: 0;
          padding: 12px 16px 10px 18px;
        }

        .member-information h3 {
          margin: 0;
          color: var(--ad-navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 23px;
          line-height: 1.1;
          font-weight: 700;
        }

        .member-role {
          margin: 7px 0 0;
          color: var(--ad-orange);
          font-size: 13px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: .2px;
        }

        .member-accent {
          display: flex;
          align-items: center;
          gap: 3px;
          width: 30px;
          margin-top: 8px;
        }

        .member-accent span {
          width: 7px;
          height: 3px;
          border-radius: 4px;
          background: var(--ad-orange);
        }

        .member-accent b {
          width: 12px;
          height: 3px;
          border-radius: 4px;
          background: var(--ad-orange);
        }

        .member-organization {
          min-width: 150px;
          margin-right: 17px;
          padding: 11px 15px;
          border-radius: 7px;
          background: linear-gradient(
            180deg,
            rgba(248,249,250,.95),
            rgba(242,243,245,.9)
          );
          color: #24344d;
          font-size: 13px;
          line-height: 1.3;
          text-align: center;
        }

        /* --------------------------------------------------
           VALUES BAR
        -------------------------------------------------- */

        .governance-values {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          margin-top: 5px;
          border-radius: 13px;
          background:
            linear-gradient(
              90deg,
              #031d49,
              #05285f 50%,
              #031d49
            );
          box-shadow: 0 7px 20px rgba(5,35,78,.14);
        }

        .governance-value {
          min-height: 83px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 14px 20px;
          color: white;
          border-right: 1px solid rgba(255,255,255,.22);
        }

        .governance-value:last-child {
          border-right: 0;
        }

        .governance-icon {
          flex: 0 0 auto;
          color: var(--ad-orange);
        }

        .governance-value h3 {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 700;
        }

        .governance-value p {
          margin: 0;
          color: rgba(255,255,255,.9);
          font-size: 13px;
          line-height: 1.3;
        }

        /* --------------------------------------------------
           DECORATION
        -------------------------------------------------- */

        .advisory-page::before {
          content: "";
          position: fixed;
          z-index: -1;
          width: 280px;
          height: 280px;
          left: -190px;
          top: 52%;
          border-radius: 50%;
          background: rgba(255,138,0,.035);
          pointer-events: none;
        }

        .advisory-page::after {
          content: "";
          position: fixed;
          z-index: -1;
          width: 300px;
          height: 300px;
          right: -210px;
          bottom: 5%;
          border-radius: 50%;
          background: rgba(6,39,91,.035);
          pointer-events: none;
        }

        /* --------------------------------------------------
           TABLET
        -------------------------------------------------- */

        @media (max-width: 1120px) {
          .hero-inner,
          .board-section {
            width: min(94%, 1380px);
          }

          .advisory-member-card {
            grid-template-columns: 58px 88px minmax(130px, 1fr);
          }

          .member-organization {
            display: none;
          }

          .member-information h3 {
            font-size: 20px;
          }

          .hero-campus-image {
            width: 53%;
          }

          .hero-image-shade {
            background:
              linear-gradient(
                90deg,
                #031d49 0%,
                #05265b 42%,
                rgba(5,38,91,.78) 61%,
                rgba(5,38,91,.12) 84%
              );
          }
        }

        /* --------------------------------------------------
           MOBILE
        -------------------------------------------------- */

        @media (max-width: 800px) {
          .advisory-hero {
            min-height: 525px;
          }

          .hero-campus-image {
            width: 100%;
            height: 55%;
            top: auto;
            bottom: 0;
          }

          .hero-image-shade {
            background:
              linear-gradient(
                180deg,
                #031d49 0%,
                rgba(3,29,73,.96) 44%,
                rgba(3,29,73,.58) 68%,
                rgba(3,29,73,.10) 100%
              );
          }

          .hero-inner {
            min-height: 525px;
            padding-top: 28px;
            width: calc(100% - 38px);
          }

          .hero-watermark {
            left: 52%;
            top: 35px;
            width: 220px;
            height: 220px;
          }

          .hero-title {
            font-size: 44px;
          }

          .hero-description {
            font-size: 15px;
            max-width: 530px;
          }

          .hero-curve {
            height: 45px;
          }

          .board-section {
            width: calc(100% - 28px);
            padding-top: 14px;
          }

          .heading-side-line {
            display: none;
          }

          .board-heading h2 {
            font-size: 27px;
            white-space: normal;
          }

          .members-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .board-column {
            gap: 12px;
          }

          .advisory-member-card {
            min-height: 90px;
            grid-template-columns: 57px 82px minmax(0, 1fr);
          }

          .member-photo-wrap {
            height: 82px;
          }

          .member-information {
            padding-left: 14px;
            padding-right: 10px;
          }

          .member-information h3 {
            font-size: 18px;
          }

          .member-role {
            font-size: 11px;
          }

          .governance-values {
            grid-template-columns: 1fr 1fr;
          }

          .governance-value {
            min-height: 82px;
            justify-content: flex-start;
            padding: 13px;
          }

          .governance-value:nth-child(2) {
            border-right: 0;
          }

          .governance-value:nth-child(-n+2) {
            border-bottom: 1px solid rgba(255,255,255,.22);
          }

          .governance-value h3 {
            font-size: 14px;
          }

          .governance-value p {
            font-size: 11px;
          }
        }

        @media (max-width: 470px) {
          .hero-title {
            font-size: 38px;
          }

          .breadcrumbs {
            font-size: 12px;
          }

          .advisory-member-card {
            grid-template-columns: 50px 72px minmax(0, 1fr);
          }

          .member-number span {
            font-size: 22px;
          }

          .member-photo-wrap {
            height: 76px;
          }

          .member-information h3 {
            font-size: 16px;
          }

          .member-role {
            font-size: 10px;
          }

          .governance-values {
            grid-template-columns: 1fr;
          }

          .governance-value,
          .governance-value:nth-child(-n+2) {
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.22);
          }

          .governance-value:last-child {
            border-bottom: 0;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="advisory-hero">
        <img
          className="hero-campus-image"
          src="/images/advisory-campus.jpg"
          alt=" "
        />

        <div className="hero-image-shade" />
         <div className="hero-watermark">
              <img
                src="/images/Cyaduvanshilogo.png"
                alt=""
              />
            </div>

        <div className="hero-inner">
          <div className="breadcrumbs">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>About Us</span>
            <ChevronRight size={14} />
            <span>Administration</span>
            <ChevronRight size={14} />
            <span className="current">Advisory Board</span>
          </div>

          <h1 className="hero-title">
            Our <span className="orange">Advisory</span> Board
          </h1>

          <div className="hero-line" />

          <p className="hero-description">
            Guided by experienced visionaries and education leaders,
            our Advisory Board plays a pivotal role in strengthening
            governance, fostering innovation, and ensuring
            institutional excellence.
          </p>
        </div>

        {/* Navy → orange → cream curved transition */}
        <div className="hero-curve" aria-hidden="true">
          <svg
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="curve-orange"
              d="M0 58 C260 102 500 100 745 72 C1000 42 1220 65 1440 0 L1440 110 L0 110 Z"
            />
            <path
              className="curve-white"
              d="M0 69 C260 113 500 111 745 83 C1000 53 1220 76 1440 11 L1440 110 L0 110 Z"
            />
          </svg>
        </div>
      </section>

      {/* =====================================================
          ADVISORY BOARD MEMBERS
      ===================================================== */}
      <section className="board-section">
        <div className="board-heading">
          <div className="heading-side-line" />
          <h2>ADVISORY BOARD MEMBERS</h2>
          <div className="heading-side-line right" />
        </div>

        <div className="members-grid">
          <BoardColumn members={leftMembers} />
          <BoardColumn members={rightMembers} />
        </div>

        {/* =================================================
            GOVERNANCE VALUES
        ================================================= */}
        <div className="governance-values">
          <div className="governance-value">
            <ShieldCheck
              className="governance-icon"
              size={48}
              strokeWidth={1.6}
            />
            <div>
              <h3>Transparency</h3>
              <p>In All Decisions</p>
            </div>
          </div>

          <div className="governance-value">
            <Users
              className="governance-icon"
              size={48}
              strokeWidth={1.6}
            />
            <div>
              <h3>Accountability</h3>
              <p>At Every Level</p>
            </div>
          </div>

          <div className="governance-value">
            <Scale
              className="governance-icon"
              size={48}
              strokeWidth={1.6}
            />
            <div>
              <h3>Compliance</h3>
              <p>With State &amp; University</p>
            </div>
          </div>

          <div className="governance-value">
            <Award
              className="governance-icon"
              size={48}
              strokeWidth={1.6}
            />
            <div>
              <h3>Commitment</h3>
              <p>To Educational Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
