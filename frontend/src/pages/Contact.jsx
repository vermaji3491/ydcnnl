import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { apiFetch } from "../lib/api";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());

    setError("");
    setSent(false);
    setSubmitting(true);

    try {
      await apiFetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      form.reset();
      setSent(true);
    } catch (submitError) {
      setError(
        submitError.message ||
          "Failed to send your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <style>{`
        .contact-page {
          --contact-navy: #062452;
          --contact-navy-2: #0a356f;
          --contact-orange: #ff7600;
          --contact-gold: #e58a00;
          --contact-cream: #fffaf3;
          --contact-bg: #f7f9fc;
          --contact-text: #26364d;
          --contact-muted: #68778b;
          --contact-line: #e4e9f0;
          background: #fff;
          color: var(--contact-text);
          min-height: 100vh;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {
          box-sizing: border-box;
        }

        .contact-container {
          width: min(1180px, calc(100% - 36px));
          margin: 0 auto;
        }

        /* HERO */
        .contact-hero {
          position: relative;
          min-height: 470px;
          overflow: hidden;
          isolation: isolate;
          background: var(--contact-navy);
        }

        .contact-hero-bg {
          position: absolute;
          z-index: -3;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          animation: contact-hero-zoom 18s ease-in-out infinite alternate;
        }

        @keyframes contact-hero-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.045); }
        }

        .contact-hero-overlay {
          position: absolute;
          z-index: -2;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(5, 27, 62, 0.96) 0%,
            rgba(5, 34, 74, 0.88) 38%,
            rgba(5, 39, 80, 0.62) 70%,
            rgba(5, 29, 64, 0.35) 100%
          );
        }

        .contact-hero-inner {
          position: relative;
          z-index: 3;
          min-height: 470px;
          display: flex;
          align-items: center;
          width: min(1410px, calc(100% - 40px));
          margin: 0 auto;
        }

        .contact-hero-copy {
          width: min(780px, 100%);
          padding: 65px 0 85px;
          color: #fff;
        }

        .contact-hero-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 22px;
          color: rgba(255,255,255,.78);
          font-size: 14px;
          font-weight: 500;
        }

        .contact-hero-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }

        .contact-hero-breadcrumb span {
          color: #f2bf57;
          font-weight: 600;
        }

        .contact-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
          color: #f2bf57;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .contact-hero-eyebrow::before {
          content: "";
          width: 34px;
          height: 2px;
          background: #f2bf57;
        }

        .contact-hero h1 {
          margin: 0;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(44px, 5.5vw, 76px);
          line-height: 1.02;
          font-weight: 700;
          letter-spacing: -1.8px;
        }

        .contact-hero h1 span {
          color: #f2bf57;
        }

        .contact-hero-accent {
          width: 82px;
          height: 4px;
          margin: 22px 0;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--contact-orange), #f2bf57);
        }

        .contact-hero p {
          max-width: 690px;
          margin: 0;
          color: rgba(255,255,255,.84);
          font-size: 17px;
          line-height: 1.8;
        }

        .contact-hero-stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 28px;
          margin-top: 30px;
        }

        .contact-hero-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          color: inherit;
          text-decoration: none;
        }

        .contact-hero-stat-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 50%;
          color: #f2bf57;
          background: rgba(255,255,255,.10);
        }

        .contact-hero-stat strong {
          display: block;
          color: white;
          font-size: 15px;
        }

        .contact-hero-stat small {
          display: block;
          margin-top: 2px;
          color: rgba(255,255,255,.68);
          font-size: 12px;
        }

        .contact-hero-curve {
          position: relative;
          z-index: 4;
          height: 52px;
          margin-top: -1px;
          overflow: hidden;
          background: #fff;
        }

        .contact-hero-curve::before,
        .contact-hero-curve::after {
          content: "";
          position: absolute;
          left: -5%;
          right: -5%;
          height: 75px;
          border-radius: 50%;
        }

        .contact-hero-curve::before {
          top: -39px;
          background: var(--contact-orange);
        }

        .contact-hero-curve::after {
          top: -46px;
          background: #fff;
        }

        .contact-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--contact-orange);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .contact-kicker::before {
          content: "";
          width: 38px;
          height: 3px;
          border-radius: 20px;
          background: var(--contact-orange);
        }

        /* MAIN */
        .contact-main {
          position: relative;
          z-index: 5;
          padding-bottom: 80px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 24px;
          align-items: stretch;
        }

        /* INFORMATION CARD */
        .contact-info {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          padding: 34px;
          color: #fff;
          background:
            radial-gradient(circle at 100% 0%, rgba(255,118,0,.22), transparent 32%),
            linear-gradient(145deg, var(--contact-navy), #031a3c);
          box-shadow: 0 22px 60px rgba(6,36,82,.18);
        }

        .contact-info::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          right: -115px;
          bottom: -120px;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 50%;
        }

        .contact-info-top {
          position: relative;
          z-index: 2;
        }

        .contact-info h2 {
          margin: 8px 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
        }

        .contact-info-intro {
          margin: 0;
          color: rgba(255,255,255,.7);
          line-height: 1.7;
          font-size: 14px;
        }

        .contact-details {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 14px;
          margin-top: 30px;
        }

        .contact-detail {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 15px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 16px;
          background: rgba(255,255,255,.055);
        }

        .contact-detail-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: var(--contact-orange);
          background: rgba(255,255,255,.1);
        }

        .contact-detail strong {
          display: block;
          margin-bottom: 4px;
          font-size: 13px;
        }

        .contact-detail p {
          margin: 0;
          color: rgba(255,255,255,.67);
          font-size: 12px;
          line-height: 1.55;
        }

        .contact-info-footer {
          position: relative;
          z-index: 2;
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.65);
          font-size: 12px;
          line-height: 1.6;
        }

        /* FORM */
        .contact-form-card {
          border: 1px solid var(--contact-line);
          border-radius: 26px;
          padding: 34px;
          background: #fff;
          box-shadow: 0 22px 60px rgba(16,42,67,.08);
        }

        .contact-form-card h2 {
          margin: 0;
          color: var(--contact-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
        }

        .contact-form-card > p {
          margin: 8px 0 0;
          color: var(--contact-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .contact-form {
          margin-top: 27px;
        }

        .contact-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .contact-field {
          display: grid;
          gap: 7px;
        }

        .contact-field.full {
          grid-column: 1 / -1;
        }

        .contact-field label {
          color: var(--contact-navy);
          font-size: 12px;
          font-weight: 800;
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;
          border: 1px solid var(--contact-line);
          border-radius: 13px;
          outline: none;
          background: #fbfcfe;
          color: var(--contact-text);
          font: inherit;
          transition: .2s ease;
        }

        .contact-field input {
          height: 48px;
          padding: 0 14px;
        }

        .contact-field textarea {
          min-height: 140px;
          padding: 13px 14px;
          resize: vertical;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          border-color: var(--contact-orange);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(255,118,0,.08);
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: #a1adbc;
        }

        .contact-error {
          margin-top: 18px;
          padding: 13px 15px;
          border: 1px solid #fecaca;
          border-radius: 12px;
          background: #fef2f2;
          color: #b91c1c;
          font-size: 13px;
          font-weight: 700;
        }

        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 20px;
          min-height: 48px;
          padding: 0 21px;
          border: 0;
          border-radius: 12px;
          background: var(--contact-orange);
          color: #fff;
          font: inherit;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(255,118,0,.2);
          transition: .2s ease;
        }

        .contact-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          background: #e96800;
          box-shadow: 0 14px 30px rgba(255,118,0,.26);
        }

        .contact-submit:disabled {
          cursor: not-allowed;
          opacity: .6;
        }

        /* MAP */
        .contact-map-section {
          margin-top: 24px;
        }

        .contact-map-card {
          overflow: hidden;
          position: relative;
          min-height: 380px;
          border: 1px solid var(--contact-line);
          border-radius: 26px;
          background:
            linear-gradient(rgba(244,248,252,.76), rgba(244,248,252,.76)),
            url("/images/collegebg.png") center/cover;
          box-shadow: 0 18px 45px rgba(16,42,67,.07);
        }

        .contact-map-overlay {
          position: absolute;
          left: 28px;
          bottom: 28px;
          width: min(390px, calc(100% - 56px));
          padding: 22px;
          border-radius: 18px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 18px 45px rgba(16,42,67,.14);
        }

        .contact-map-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #fff1e6;
          color: var(--contact-orange);
        }

        .contact-map-overlay h3 {
          margin: 12px 0 5px;
          color: var(--contact-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
        }

        .contact-map-overlay p {
          margin: 0;
          color: var(--contact-muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .contact-map-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          color: var(--contact-orange);
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        /* TRUST STRIP */
        .contact-trust {
          padding: 75px 0;
          background: var(--contact-bg);
        }

        .contact-trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .contact-trust-card {
          padding: 25px;
          border: 1px solid var(--contact-line);
          border-radius: 20px;
          background: #fff;
        }

        .contact-trust-card svg {
          color: var(--contact-orange);
        }

        .contact-trust-card h3 {
          margin: 12px 0 6px;
          color: var(--contact-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
        }

        .contact-trust-card p {
          margin: 0;
          color: var(--contact-muted);
          font-size: 13px;
          line-height: 1.65;
        }

        /* SUCCESS MODAL */
        .contact-success {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(3, 20, 44, .72);
          backdrop-filter: blur(7px);
        }

        .contact-success-card {
          width: min(430px, 100%);
          padding: 36px;
          border-radius: 24px;
          background: #fff;
          text-align: center;
          box-shadow: 0 30px 90px rgba(0,0,0,.25);
        }

        .contact-success-icon {
          width: 62px;
          height: 62px;
          display: grid;
          place-items: center;
          margin: 0 auto;
          border-radius: 50%;
          color: #fff;
          background: #16a34a;
        }

        .contact-success-card h2 {
          margin: 17px 0 8px;
          color: var(--contact-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
        }

        .contact-success-card p {
          margin: 0;
          color: var(--contact-muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .contact-close {
          margin-top: 23px;
          min-height: 46px;
          padding: 0 21px;
          border: 0;
          border-radius: 11px;
          background: var(--contact-orange);
          color: #fff;
          font: inherit;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-trust-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 800px) {
          .contact-hero,
          .contact-hero-inner {
            min-height: 450px;
          }

          .contact-hero-overlay {
            background: linear-gradient(
              180deg,
              rgba(5,27,62,.94),
              rgba(5,34,74,.78)
            );
          }

          .contact-hero-copy {
            padding: 55px 0 75px;
          }

          .contact-hero h1 {
            font-size: clamp(40px, 11vw, 60px);
          }

          .contact-hero p {
            font-size: 15px;
          }

          .contact-hero-stats {
            gap: 16px;
          }
        }

        @media (max-width: 650px) {
          .contact-container,
          .contact-hero-inner {
            width: min(100% - 26px, 1180px);
          }

          .contact-hero,
          .contact-hero-inner {
            min-height: 500px;
          }

          .contact-hero-inner {
            width: min(100% - 28px, 1410px);
          }

          .contact-hero-copy {
            padding: 48px 0 75px;
          }

          .contact-hero-breadcrumb {
            font-size: 12px;
          }

          .contact-hero-eyebrow {
            font-size: 12px;
            letter-spacing: 1.4px;
          }

          .contact-hero h1 {
            font-size: 43px;
            letter-spacing: -1px;
          }

          .contact-hero p {
            font-size: 14px;
          }

          .contact-hero-stats {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .contact-info,
          .contact-form-card {
            padding: 25px;
            border-radius: 20px;
          }

          .contact-fields {
            grid-template-columns: 1fr;
          }

          .contact-field.full {
            grid-column: auto;
          }

          .contact-map-card {
            min-height: 340px;
          }

          .contact-map-overlay {
            left: 16px;
            bottom: 16px;
            width: calc(100% - 32px);
          }
        }
      `}</style>

      {/* HERO */}
      <section className="contact-hero">
        <img
          className="contact-hero-bg"
          src="/images/collegebg.png"
          alt=""
          aria-hidden="true"
        />

        <div className="contact-hero-overlay" aria-hidden="true" />

        <div className="contact-hero-inner">
          <div className="contact-hero-copy">
            <div className="contact-hero-breadcrumb">
              <a href="/">Home</a>
              <ChevronRight size={14} />
              <span>Contact Us</span>
            </div>

            <div className="contact-hero-eyebrow">
              Yaduvanshi Degree College
            </div>

            <h1>
              Let’s <span>connect</span> and move forward.
            </h1>

            <div className="contact-hero-accent" />

            <p>
              Questions about admissions, programmes, campus life or student
              services? Our team is ready to help.
            </p>

            <div className="contact-hero-stats">
              <a className="contact-hero-stat" href="tel:+918607052424">
                <span className="contact-hero-stat-icon">
                  <Phone size={19} />
                </span>
                <span>
                  <strong>+91-8607052424</strong>
                  <small>Call our office</small>
                </span>
              </a>

              <a className="contact-hero-stat" href="mailto:ydcnnl@gmail.com">
                <span className="contact-hero-stat-icon">
                  <Mail size={19} />
                </span>
                <span>
                  <strong>ydcnnl@gmail.com</strong>
                  <small>Email our team</small>
                </span>
              </a>

              <div className="contact-hero-stat">
                <span className="contact-hero-stat-icon">
                  <MapPin size={19} />
                </span>
                <span>
                  <strong>Narnaul, Haryana</strong>
                  <small>Yaduvanshi Degree College</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-hero-curve" aria-hidden="true" />

      {/* CONTACT AREA */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* CONTACT DETAILS */}
            <aside className="contact-info">
              <div className="contact-info-top">
                <div className="contact-kicker">Contact information</div>

                <h2>Contact Information</h2>

                <p className="contact-info-intro">
                  Reach out to our college office for admissions, academic
                  enquiries, campus information and general assistance.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <strong>Campus Address</strong>
                    <p>
                      Yaduvanshi Degree College,
                      <br />
                      Narnaul, Haryana – 123001
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Phone size={19} />
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p>+91-8607052424</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Mail size={19} />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>ydcnnl@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Clock3 size={19} />
                  </div>
                  <div>
                    <strong>Office Hours</strong>
                    <p>Monday – Saturday, 8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-footer">
                For admission-related enquiries, please include your course
                preference and contact details in your message.
              </div>
            </aside>

            {/* FORM */}
            <section className="contact-form-card">
              <h2>Send Us a Message</h2>
              <p>
                Fill in the form below and our team can respond to your
                enquiry.
              </p>

              {error && (
                <p role="alert" className="contact-error">
                  {error}
                </p>
              )}

              <form onSubmit={submit} className="contact-form">
                <div className="contact-fields">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      placeholder="+91"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      placeholder="Admission enquiry"
                    />
                  </div>

                  <div className="contact-field full">
                    <label htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows="6"
                      placeholder="Write your enquiry or message..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="contact-submit"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </section>
          </div>

          {/* LOCATION */}
          <div className="contact-map-section">
            <div className="contact-map-card">
              <div className="contact-map-overlay">
                <div className="contact-map-icon">
                  <Building2 size={21} />
                </div>

                <h3>Visit Yaduvanshi Degree College</h3>

                <p>
                  Narnaul, Haryana – 123001
                  <br />
                  Use the official Google Maps location here for directions
                  and campus navigation.
                </p>

                <a
                  className="contact-map-link"
                  href="https://www.google.com/maps/search/?api=1&query=Yaduvanshi+Degree+College+Narnaul+Haryana"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="contact-trust">
        <div className="contact-container">
          <div className="contact-trust-grid">
            <article className="contact-trust-card">
              <Phone size={24} />
              <h3>Talk to our team</h3>
              <p>
                Call the college office for quick assistance with general
                enquiries and admissions.
              </p>
            </article>

            <article className="contact-trust-card">
              <Mail size={24} />
              <h3>Write to us</h3>
              <p>
                Send your enquiry through the form and provide enough detail
                for the team to understand your request.
              </p>
            </article>

            <article className="contact-trust-card">
              <MapPin size={24} />
              <h3>Visit the campus</h3>
              <p>
                Use the campus location section above to find the college and
                plan your visit.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SUCCESS MESSAGE */}
      {sent && (
        <div
          className="contact-success"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-thank-you-title"
        >
          <section className="contact-success-card">
            <div className="contact-success-icon">
              <CheckCircle2 size={34} aria-hidden="true" />
            </div>

            <h2 id="contact-thank-you-title">
              Thank you for reaching out
            </h2>

            <p role="status" aria-live="polite">
              Your enquiry has been submitted successfully. Our team can
              review your message and get back to you.
            </p>

            <button
              type="button"
              className="contact-close"
              onClick={() => setSent(false)}
            >
              Close
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
