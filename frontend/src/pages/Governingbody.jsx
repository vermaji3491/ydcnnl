import React from "react";
import {
  ChevronRight,
  Crown,
  Users,
  GraduationCap,
  Building2,
  ShieldCheck,
  UserRound,
  BookOpen,
  Scale,
  Award,
} from "lucide-react";

export default function GoverningBody() {
  return (
    <div className="governing-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="hero">

        {/* BLUE HERO CONTENT */}
        <div className="hero-left">

          {/* Watermark */}
          <div className="hero-watermark">
              <img
                src="/images/Cyaduvanshilogo.png"
                alt=""
              />
            </div>

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>Home</span>
            <ChevronRight size={16} />

            <span>About Us</span>
            <ChevronRight size={16} />

            <span>Administration</span>
            <ChevronRight size={16} />

            <span className="orange">
              Governing Body
            </span>
          </div>

          {/* Heading */}
          <h1>
            Governing Body
          </h1>

          {/* Orange line */}
          <div className="hero-line"></div>

          {/* Subtitle */}
          <h2>
            Guided by Vision. Governed with Responsibility.
          </h2>

          {/* Description */}
          <p>
            Yaduvanshi Degree College is managed under a robust and transparent
            governance framework to ensure academic excellence, institutional
            integrity, and holistic development of students.
          </p>

        </div>


        {/* =====================================================
            HERO IMAGE
        ===================================================== */}
        <div className="hero-right">

          <img
            src="/images/.jpg"
            alt=""
          />

        </div>


        {/* =====================================================
            WAVE
        ===================================================== */}
        <div className="hero-wave">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            {/* Orange border */}
            <path
              className="wave-orange"
              d="
                M0,65
                C180,115 370,120 560,105
                C760,90 920,65 1110,70
                C1260,74 1360,68 1440,45
                L1440,120
                L0,120
                Z
              "
            />

            {/* Cream wave */}
            <path
              className="wave-cream"
              d="
                M0,72
                C180,122 370,127 560,112
                C760,97 920,72 1110,77
                C1260,81 1360,75 1440,52
                L1440,120
                L0,120
                Z
              "
            />

          </svg>
        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <section className="content-wrapper">


        {/* =====================================================
            APEX MANAGEMENT
        ===================================================== */}
        <div className="management-card">

          <h2 className="section-title">
            APEX MANAGEMENT
          </h2>

          <div className="small-orange-line"></div>


          {/* Chairman */}
          <div className="management-row">

            <div className="chairman-photo">
              <img
                src="/images/raobadhur1.jpg"
                alt="Founder and Group Chairman"
              />
            </div>

            <div className="management-text">

              <div className="role">
                Founder &amp; Group Chairman
              </div>

              <div className="name">
                Mr. Rao Bahadur Singh
              </div>

              <div className="orange-short-line"></div>

            </div>

          </div>


          {/* Trust */}
          <div className="management-row">

            <div className="round-icon">
              <Building2 size={34} />
            </div>

            <div className="management-text">

              <div className="role">
                Sponsoring Legal Trust
              </div>

              <div className="name">
                Rao Chiranj Lal Samriti Jan Seva Trust
              </div>

              <div className="established">
                Established 1995
              </div>

              <div className="orange-short-line"></div>

            </div>

          </div>


          {/* Foundation */}
          <div className="management-row">

            <div className="round-icon">
              <ShieldCheck size={34} />
            </div>

            <div className="management-text">

              <div className="role">
                Administrative Oversight
              </div>

              <div className="name">
                Yaduvanshi Education Foundation
              </div>

              <div className="orange-short-line"></div>

            </div>

          </div>


          {/* Principal */}
          <div className="management-row last-row">

            <div className="round-icon">
              <UserRound size={34} />
            </div>

            <div className="management-text">

              <div className="role">
                Executive Campus Head
              </div>

              <div className="name">
                The College Principal
              </div>

              <div className="established">
                Ex-Officio Member Secretary
              </div>

              <div className="orange-short-line"></div>

            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}
        <div className="right-content">

          {/* Statutory Framework */}
          <section className="framework">

            <h2 className="section-heading">
              <span></span>
              STATUTORY GOVERNING COUNCIL FRAMEWORK
            </h2>

            <p className="framework-description">
              In full compliance with guidelines issued by the{" "}
              <strong>
                Directorate of Higher Education (DHE), Haryana
              </strong>{" "}
              and{" "}
              <strong>
                Indira Gandhi University (IGU), Meerpur.
              </strong>
            </p>


            {/* Table */}
            <div className="table-card">

              <div className="table-header">

                <div>
                  BOARD DESIGNATION
                </div>

                <div>
                  SEAT SOURCE &amp; REPRESENTATION
                </div>

                <div>
                  REPRESENTATION TARGET
                </div>

              </div>


              {/* Row 1 */}
              <div className="table-row">

                <div className="designation">
                  <Crown className="orange-icon" size={24} />
                  <span>Board President</span>
                </div>

                <div>
                  Chairman of the Sponsoring Management Trust
                </div>

                <div>
                  Executive Governance
                </div>

              </div>


              {/* Row 2 */}
              <div className="table-row">

                <div className="designation">
                  <Users className="orange-icon" size={24} />
                  <span>Trust Nominees</span>
                </div>

                <div>
                  3 to 5 senior educational members nominated by the Trust
                </div>

                <div>
                  Strategy &amp; Finance
                </div>

              </div>


              {/* Row 3 */}
              <div className="table-row">

                <div className="designation">
                  <GraduationCap className="orange-icon" size={24} />
                  <span>University Nominee</span>
                </div>

                <div>
                  1 senior academician appointed by the Vice-Chancellor of IGU
                </div>

                <div>
                  Academic Compliance
                </div>

              </div>


              {/* Row 4 */}
              <div className="table-row">

                <div className="designation">
                  <Building2 className="orange-icon" size={24} />
                  <span>State Govt. Nominee</span>
                </div>

                <div>
                  1 official representative appointed by the DHE, Haryana
                </div>

                <div>
                  State Norms Audit
                </div>

              </div>


              {/* Row 5 */}
              <div className="table-row">

                <div className="designation">
                  <Users className="orange-icon" size={24} />
                  <span>Faculty Representatives</span>
                </div>

                <div>
                  2 senior institutional professors chosen on a rotational basis
                </div>

                <div>
                  Campus Coordination
                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              STRATEGIC MANDATE
          ===================================================== */}
          <section className="strategic-section">

            <h2 className="strategic-title">
              STRATEGIC MANDATE OF THE BOARD
            </h2>

            <div className="strategic-line"></div>


            <div className="strategic-grid">


              {/* Item 1 */}
              <div className="strategic-item">

                <div className="strategic-icon">
                  <BookOpen size={35} />
                </div>

                <div>

                  <h3>
                    NEP 2020 Integration
                  </h3>

                  <p>
                    Authorizing multi-disciplinary academic expansions and new
                    stream intakes in alignment with the National Education
                    Policy 2020.
                  </p>

                </div>

              </div>


              {/* Item 2 */}
              <div className="strategic-item">

                <div className="strategic-icon">
                  <Building2 size={35} />
                </div>

                <div>

                  <h3>
                    Infrastructure Capital
                  </h3>

                  <p>
                    Sanctioning fiscal budgets for advanced laboratories,
                    computer systems, smart classrooms, and central library
                    resources.
                  </p>

                </div>

              </div>


              {/* Item 3 */}
              <div className="strategic-item">

                <div className="strategic-icon">
                  <Users size={35} />
                </div>

                <div>

                  <h3>
                    Student Accountability
                  </h3>

                  <p>
                    Continuous verification of student welfare metrics and
                    maintaining the state-mandated 30-day Grievance Redressal
                    mechanism for all stakeholders.
                  </p>

                </div>

              </div>

            </div>

          </section>

        </div>

      </section>


      {/* =====================================================
          RESPONSIBILITY BAR
      ===================================================== */}
      <section className="responsibility-bar">


        {/* Transparency */}
        <div className="responsibility-item">

          <div className="responsibility-icon">
            <ShieldCheck size={42} />
          </div>

          <div>
            <h3>Transparency</h3>
            <p>In All Decisions</p>
          </div>

        </div>


        <div className="responsibility-divider"></div>


        {/* Accountability */}
        <div className="responsibility-item">

          <div className="responsibility-icon">
            <Users size={42} />
          </div>

          <div>
            <h3>Accountability</h3>
            <p>At Every Level</p>
          </div>

        </div>


        <div className="responsibility-divider"></div>


        {/* Compliance */}
        <div className="responsibility-item">

          <div className="responsibility-icon">
            <Scale size={42} />
          </div>

          <div>
            <h3>Compliance</h3>
            <p>With State &amp; University</p>
          </div>

        </div>


        <div className="responsibility-divider"></div>


        {/* Commitment */}
        <div className="responsibility-item">

          <div className="responsibility-icon">
            <Award size={42} />
          </div>

          <div>
            <h3>Commitment</h3>
            <p>To Educational Excellence</p>
          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        .governing-page {
          width: 100%;
          min-height: 100vh;
          background: #faf9f6;
          color: #071b48;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .hero {
          position: relative;
          width: 100%;
          height: 390px;

          display: grid;
          grid-template-columns: 53% 47%;

          overflow: hidden;

          background: #061d48;
        }


        /* BLUE LEFT SIDE */

        .hero-left {
          position: relative;

          height: 100%;

          padding:
            36px
            0
            90px
            5.3%;

          color: white;

          overflow: hidden;

          z-index: 3;
        }


        /* Large curved blue edge */

        .hero-left::after {
          content: "";

          position: absolute;

          top: -100px;
          right: -145px;

          width: 245px;
          height: 590px;

          background: #061d48;

          border-radius: 50%;

          z-index: -1;
        }


        /* WATERMARK */

        .hero-watermark {     position: absolute;
          z-index: 1;
          width: 285px;
          height: 285px;
          left: 35%;
          top: 45px;
          opacity: .150;
          object-fit: contain;
          
          pointer-events: none;
        
        }

        .hero-watermark img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }

        /* BREADCRUMB */

        .breadcrumb {
          position: relative;

          display: flex;

          align-items: center;

          gap: 8px;

          font-size: 16px;

          margin-bottom: 20px;

          color: white;

          z-index: 5;
        }

        .breadcrumb .orange {
          color: #ff7900;
        }


        /* HERO HEADING */

        .hero h1 {
          position: relative;

          z-index: 5;

          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 66px;

          line-height: 1.05;

          font-weight: 700;

          color: white;
        }


        /* ORANGE LINE */

        .hero-line {
          position: relative;

          z-index: 5;

          width: 330px;

          height: 3px;

          margin-top: 20px;

          background:
            linear-gradient(
              to right,
              #ff7900 0%,
              #ff7900 22%,
              rgba(255,121,0,0.2) 22%,
              rgba(255,121,0,0.05) 100%
            );
        }


        /* HERO SUBTITLE */

        .hero h2 {
          position: relative;

          z-index: 5;

          margin:
            20px
            0
            12px;

          color: #ff7900;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 23px;

          line-height: 1.3;

          font-weight: 700;
        }


        /* HERO DESCRIPTION */

        .hero p {
          position: relative;

          z-index: 5;

          max-width: 650px;

          margin: 0;

          color: white;

          font-size: 17px;

          line-height: 1.55;
        }


        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .hero-right {
          position: relative;

          height: 100%;

          overflow: hidden;

          z-index: 1;
        }


        .hero-right img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;
        }


        /* Curved overlap between blue and image */

        .hero-right::before {
          content: "";

          position: absolute;

          left: -80px;

          top: -100px;

          width: 155px;

          height: 600px;

          background: #061d48;

          border-radius: 50%;

          z-index: 2;
        }


        /* =====================================================
           HERO WAVE
        ===================================================== */

        .hero-wave {
          position: absolute;

          left: 0;
          bottom: -1px;

          width: 100%;

          height: 105px;

          z-index: 10;

          pointer-events: none;
        }

        .hero-wave svg {
          display: block;

          width: 100%;
          height: 100%;
        }


        /* Orange wave */

        .wave-orange {
          fill: #ff7900;
        }


        /* Cream wave */

        .wave-cream {
          fill: #faf9f6;

          transform:
            translateY(7px);
        }


        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .content-wrapper {
          position: relative;

          width: 91.5%;

          margin:
            28px
            auto
            30px;

          display: grid;

          grid-template-columns:
            32.5%
            1fr;

          gap: 25px;
        }


        /* =====================================================
           MANAGEMENT CARD
        ===================================================== */

        .management-card {
          background:
            rgba(255,255,255,0.78);

          border-radius: 14px;

          padding:
            18px
            22px
            10px;

          box-shadow:
            0 4px 16px
            rgba(0,0,0,0.07);

          min-height: 470px;
        }


        .section-title {
          margin: 0;

          font-size: 20px;

          font-weight: 800;

          color: #061b49;
        }


        .small-orange-line {
          width: 30px;

          height: 2px;

          background: #ff7900;

          margin:
            8px
            0
            5px;
        }


        .management-row {
          min-height: 94px;

          display: flex;

          align-items: center;

          gap: 28px;

          border-bottom:
            1px solid #dedede;
        }


        .management-row.last-row {
          border-bottom: none;
        }


        .chairman-photo {
          width: 86px;
          height: 86px;

          border-radius: 50%;

          overflow: hidden;

          flex-shrink: 0;

          background: #eee;
        }


        .chairman-photo img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }


        .round-icon {
          width: 75px;
          height: 75px;

          border-radius: 50%;

          background: #071d4b;

          color: white;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;
        }


        .management-text {
          min-width: 0;
        }


        .role {
          font-size: 13px;

          color: #111;

          margin-bottom: 3px;
        }


        .name {
          font-size: 16px;

          font-weight: 700;

          line-height: 1.25;

          color: #071c4b;
        }


        .established {
          color: #ff7100;

          font-size: 13px;

          font-weight: 500;

          margin-top: 4px;
        }


        .orange-short-line {
          height: 2px;

          width: 30px;

          background: #ff7100;

          margin-top: 7px;
        }


        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .right-content {
          min-width: 0;
        }


        .section-heading {
          display: flex;

          align-items: center;

          gap: 13px;

          font-size: 20px;

          margin:
            0
            0
            6px;

          font-weight: 800;

          color: #061b49;
        }


        .section-heading span {
          width: 30px;

          height: 2px;

          background: #ff7100;

          display: inline-block;
        }


        .framework-description {
          margin:
            0
            0
            8px;

          color: #111;

          font-size: 13.5px;

          line-height: 1.4;
        }


        /* =====================================================
           TABLE
        ===================================================== */

        .table-card {
          background: white;

          border-radius: 13px;

          overflow: hidden;

          box-shadow:
            0 4px 15px
            rgba(0,0,0,0.08);
        }


        .table-header,
        .table-row {
          display: grid;

          grid-template-columns:
            28%
            45%
            27%;
        }


        .table-header {
          background: #071e4c;

          color: white;

          font-size: 13px;

          font-weight: 700;

          min-height: 34px;

          align-items: center;
        }


        .table-header div {
          padding:
            8px
            12px;

          text-align: center;
        }


        .table-row {
          min-height: 41px;

          border-bottom:
            1px solid #ddd;

          font-size: 13px;

          color: #111;
        }


        .table-row:last-child {
          border-bottom: none;
        }


        .table-row > div {
          padding:
            7px
            13px;

          display: flex;

          align-items: center;

          border-right:
            1px solid #ddd;
        }


        .table-row > div:last-child {
          border-right: none;
        }


        .designation {
          gap: 14px;
        }


        .orange-icon {
          color: #ff7100;

          flex-shrink: 0;
        }


        /* =====================================================
           STRATEGIC
        ===================================================== */

        .strategic-section {
          margin-top: 18px;
        }


        .strategic-title {
          margin: 0;

          font-size: 19px;

          color: #071c4b;

          font-weight: 800;
        }


        .strategic-line {
          height: 2px;

          width: 31px;

          background: #ff7100;

          margin:
            7px
            0
            8px;
        }


        .strategic-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 0;
        }


        .strategic-item {
          display: flex;

          gap: 12px;

          padding:
            8px
            15px;

          border-right:
            1px solid #ddd;
        }


        .strategic-item:first-child {
          padding-left: 0;
        }


        .strategic-item:last-child {
          border-right: none;
        }


        .strategic-icon {
          width: 61px;
          height: 61px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #071d4b;

          color: #ff9a2e;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        .strategic-item h3 {
          font-size: 13px;

          margin:
            0
            0
            6px;

          color: #071b49;
        }


        .strategic-item p {
          font-size: 10.5px;

          line-height: 1.5;

          margin: 0;

          color: #111;
        }


        /* =====================================================
           RESPONSIBILITY BAR
        ===================================================== */

        .responsibility-bar {
          width: 91.5%;

          min-height: 89px;

          margin:
            0
            auto
            15px;

          border-radius: 13px;

          background: #061d4b;

          display: grid;

          grid-template-columns:
            1fr auto
            1fr auto
            1fr auto
            1fr;

          align-items: center;

          padding:
            0
            55px;

          color: white;
        }


        .responsibility-item {
          display: flex;

          align-items: center;

          gap: 17px;

          justify-content: center;
        }


        .responsibility-icon {
          color: #ff7900;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .responsibility-item h3 {
          margin:
            0
            0
            5px;

          font-size: 14px;

          font-weight: 700;
        }


        .responsibility-item p {
          margin: 0;

          font-size: 12px;

          color: white;
        }


        .responsibility-divider {
          height: 43px;

          width: 1px;

          background:
            rgba(255,255,255,0.22);
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1500px) {

          .hero {
            height: 410px;
          }

          .hero-left {
            padding-top: 42px;
          }

          .hero h1 {
            font-size: 70px;
          }

          .hero p {
            font-size: 18px;
            max-width: 700px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {

          .hero {
            height: 370px;
          }

          .hero h1 {
            font-size: 55px;
          }

          .hero h2 {
            font-size: 20px;
          }

          .hero p {
            max-width: 530px;
            font-size: 15px;
          }

          .navigation {
            gap: 22px;
          }

          .content-wrapper {
            grid-template-columns:
              35%
              1fr;
          }

          .responsibility-bar {
            padding:
              0
              25px;
          }

        }


        /* =====================================================
           MOBILE / SMALL TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .hero {
            height: auto;

            min-height: 0;

            display: flex;

            flex-direction: column;

            overflow: hidden;
          }


          .hero-left {
            min-height: 400px;

            height: auto;

            padding:
              35px
              25px
              100px;
          }


          .hero-left::after {
            display: none;
          }


          .hero-watermark {
            width: 270px;
            height: 270px;

            right: -40px;

            top: 65px;
          }


          .hero h1 {
            font-size: 48px;
          }


          .hero h2 {
            font-size: 19px;
          }


          .hero p {
            max-width: 100%;
          }


          .hero-right {
            height: 320px;

            flex-shrink: 0;
          }


          .hero-right::before {
            display: none;
          }


          .hero-wave {
            height: 80px;
          }


          .content-wrapper {
            width: 94%;

            grid-template-columns: 1fr;
          }


          .strategic-grid {
            grid-template-columns: 1fr;
          }


          .strategic-item,
          .strategic-item:first-child {
            border-right: none;

            border-bottom:
              1px solid #ddd;

            padding:
              12px
              0;
          }


          .strategic-item:last-child {
            border-bottom: none;
          }


          .responsibility-bar {
            width: 94%;

            grid-template-columns:
              1fr
              1fr;

            gap: 20px;

            padding: 25px;
          }


          .responsibility-divider {
            display: none;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .hero-left {
            min-height: 420px;

            padding:
              28px
              20px
              95px;
          }


          .breadcrumb {
            font-size: 13px;

            flex-wrap: wrap;
          }


          .hero h1 {
            font-size: 40px;
          }


          .hero h2 {
            font-size: 17px;

            max-width: 90%;
          }


          .hero p {
            font-size: 14px;
          }


          .hero-watermark {
            width: 230px;
            height: 230px;

            opacity: 0.8;
          }


          .hero-right {
            height: 260px;
          }


          .hero-wave {
            height: 65px;
          }


          .table-card {
            overflow-x: auto;
          }


          .table-header,
          .table-row {
            min-width: 700px;
          }


          .responsibility-bar {
            grid-template-columns: 1fr;
          }


          .management-row {
            gap: 15px;
          }

        }

      `}</style>

    </div>
  );
}