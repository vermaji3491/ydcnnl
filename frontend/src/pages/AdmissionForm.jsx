import { ArrowRight, FileText } from "lucide-react";

const AdmissionForm = () => {
  const pdfUrl = "/pdf/Admission.pdf";

  return (
    <div className="admission-form-page">
      <section className="admission-form-hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Admission</span>
              <span>/</span>
              <strong>Admission Form</strong>
            </div>

            <h1>
              Admission <span>Form</span>
            </h1>

            <p>
              Download or open the official admission form to complete your
              application with Yaduvanshi Degree College and secure your place
              for the upcoming academic session.
            </p>

           
          </div>

          <div className="hero-right">
            <div className="hero-admission-card">
              <div className="hero-card-icon">
                <FileText size={40} />
              </div>

              <h3>Download Application</h3>

              <p>Access the official admission form in PDF format.</p>

              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="hero-portal-button">
                Open Admission Form
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
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

      <div className="admission-content">
        <div className="admission-notice">
          <h2>Admission Form</h2>
          <p>
            Download the latest form, fill it carefully, and submit the required
            documents as per the guidelines.
          </p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            Download PDF
          </a>
        </div>

        <div className="pdf-container">
          <iframe src={pdfUrl} title="Admission Form PDF" width="100%" height="800px" />
        </div>
      </div>

      <style>{`


        .admission-form-page {
          width: 100%;
          min-height: 100vh;
          background: #f7f4ee;
          color: #0d1d3a;
          overflow: hidden;
        }

        .admission-form-hero {
          position: relative;
          overflow: hidden;
          background: #061d45;
          min-height: 470px;
          color: #fff;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: center;
          min-height: 430px;
          padding: 60px 5% 80px;
        }

        .hero-content {
          max-width: 720px;
        }

        .hero-small-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 12px;
          font-weight: 700;
          color: #f7c76d;
        }

        .hero-content h1 {
          margin: 22px 0 18px;
          font-size: clamp(2.5rem, 4vw, 4.5rem);
          line-height: 1.04;
          font-weight: 800;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
        }

        .hero-content h1 span {
          color: #ff8a1c;
        }

        .hero-content p {
          max-width: 620px;
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-breadcrumb a {
          color: #f7c76d;
          text-decoration: none;
          font-weight: 600;
        }

        .hero-breadcrumb strong {
          color: #ff8a1c;
        }

        .hero-right {
          display: flex;
          justify-content: center;
        }

        .hero-admission-card {
          width: min(100%, 420px);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 22px;
          padding: 28px 24px 22px;
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(6px);
        }

        .hero-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 18px;
          background: rgba(247, 199, 109, 0.18);
          color: #f7c76d;
          margin-bottom: 16px;
        }

        .hero-admission-card h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
        }

        .hero-admission-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
        }

        .hero-portal-button {
          margin-top: 18px;
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(135deg, #f7c76d, #ff8a1c);
          color: #071d45;
          padding: 14px 20px;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 12px 28px rgba(247, 199, 109, 0.25);
        }

        .hero-portal-button:hover {
          transform: translateY(-2px);
        }

        .hero-wave-wrapper {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 120px;
          z-index: 3;
          pointer-events: none;
        }

        .hero-wave {
          display: block;
          width: 100%;
          height: 100%;
        }

        .orange-wave-line {
          fill: none;
          stroke: #ff8a1c;
          stroke-width: 8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .white-wave {
          fill: #f7f4ee;
        }

        .admission-content {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 5% 60px;
        }

        .admission-notice {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #ece2d8;
          border-radius: 18px;
          padding: 28px 30px;
          box-shadow: 0 10px 25px rgba(8, 29, 71, 0.06);
          margin-bottom: 24px;
        }

        .admission-notice h2 {
          margin: 0 0 10px;
          color: #072656;
          font-size: clamp(1.6rem, 2vw, 2.2rem);
          font-weight: 800;
        }

        .admission-notice p {
          margin: 0 0 18px;
          color: #1b2942;
          line-height: 1.8;
          font-size: 1rem;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #ff8a1c;
          color: #fff;
          text-decoration: none;
          padding: 12px 22px;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: 0 8px 18px rgba(255, 138, 28, 0.25);
        }

        .pdf-container {
          background: #fff;
          border-radius: 18px;
          border: 1px solid #ece2d8;
          box-shadow: 0 10px 25px rgba(8, 29, 71, 0.06);
          overflow: hidden;
          padding: 10px;
        }

        .pdf-container iframe {
          display: block;
          width: 100%;
          min-height: 820px;
          border: none;
          border-radius: 12px;
          background: #fff;
        }

        @media (max-width: 980px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding-top: 50px;
          }

          .hero-right {
            justify-content: flex-start;
          }

          .hero-wave-wrapper {
            height: 90px;
          }
        }

        @media (max-width: 640px) {
          .admission-form-hero {
            min-height: 390px;
          }

          .hero-inner {
            padding: 42px 18px 68px;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .hero-admission-card {
            padding: 22px 18px;
          }

          .admission-content {
            padding: 26px 18px 48px;
          }

          .pdf-container iframe {
            min-height: 620px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdmissionForm;