import React, { useState } from "react";
import { apiFetch } from "../lib/api";

export default function OnlineRegistration() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    category: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    address: "",
    course: "",
    academicYear: "2026-27",
    lastQualification: "",
    passingYear: "",
    declaration: false,
  });

  const [documentFile, setDocumentFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setDocumentFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!formData.declaration) {
      setMessage({ type: "error", text: "Please accept the declaration before submitting." });
      return;
    }

    if (documentFile && documentFile.size > 5 * 1024 * 1024) {
      setMessage({ type: "error", text: "Document size must be 5 MB or less." });
      return;
    }

    try {
      setSubmitting(true);

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, String(value));
      });

      if (documentFile) {
        data.append("document", documentFile);
      }

      const result = await apiFetch("/api/admissions", {
        method: "POST",
        body: data,
      });

      setMessage({
        type: "success",
        text: `${result.message || "Admission form submitted successfully!"}${result.admission?._id ? ` Reference ID: ${result.admission._id}.` : ""}`,
      });

      setFormData({
        studentName: "",
        fatherName: "",
        motherName: "",
        dob: "",
        gender: "",
        category: "",
        mobile: "",
        email: "",
        state: "",
        city: "",
        address: "",
        course: "",
        academicYear: "2026-27",
        lastQualification: "",
        passingYear: "",
        declaration: false,
      });
      setDocumentFile(null);

      const fileInput = document.getElementById("admission-document");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Admission submission error:", error);
      setMessage({
        type: "error",
        text: error.message || "Failed to submit admission form. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admission-form-page">

      {/* HERO */}
      <section className="admission-hero">
        <div className="admission-hero-content">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Admission</span>
            <span>›</span>
            <b>Admission Form</b>
          </div>

          <div className="hero-kicker">ADMISSION FORM</div>

          <h1>
            Begin Your
            <span> Journey With Us</span>
          </h1>

          <div className="hero-line"></div>

          <p>
            Complete the admission form below to take the first step
            towards your academic journey at Yaduvanshi Degree College.
          </p>
        </div>

        <div className="hero-campus">
          <img
            src="/images/collegebg.png"
            alt="Yaduvanshi Degree College Campus"
          />
        </div>

        {/* CURVE */}
        <svg
          className="admission-wave"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100
               C170,185 350,200 550,130
               C760,55 940,70 1110,120
               C1260,165 1360,135 1440,70
               L1440,220
               L0,220 Z"
            fill="#f8f1e8"
          />
        </svg>

        <svg
          className="admission-orange-wave"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path
            d="M0,91
               C170,176 350,191 550,121
               C760,46 940,61 1110,111
               C1260,156 1360,126 1440,61"
            fill="none"
            stroke="#ff7600"
            strokeWidth="10"
          />
        </svg>
      </section>


      {/* FORM SECTION */}
      <main className="admission-main">

        <div className="form-container">

          {/* LEFT FORM */}
          <section className="form-card">

            <div className="form-heading">
              <div className="form-icon">👤</div>

              <div>
                <h2>Admission Form</h2>
                <p>
                  Please fill in all the required details carefully.
                </p>
              </div>
            </div>

            <div className="orange-rule"></div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">

              {/* PERSONAL DETAILS */}
              <h3 className="form-section-title">
                Personal Information
              </h3>

              <div className="form-grid">

                <div className="form-group">
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Father's Name <span>*</span>
                  </label>
                  <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Enter father's name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Mother's Name <span>*</span>
                  </label>
                  <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      placeholder="Enter mother's name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Date of Birth <span>*</span>
                  </label>
                  <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                </div>

                <div className="form-group">
                  <label>
                    Gender <span>*</span>
                  </label>

                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Category <span>*</span>
                  </label>

                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select category</option>
                    <option>General</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>OBC</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>


              {/* CONTACT */}
              <h3 className="form-section-title">
                Contact Information
              </h3>

              <div className="form-grid">

                <div className="form-group">
                  <label>
                    Mobile Number <span>*</span>
                  </label>

                  <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      maxLength="10"
                      placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Email Address <span>*</span>
                  </label>

                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    State <span>*</span>
                  </label>

                  <select name="state" value={formData.state} onChange={handleChange} required>
                    <option value="">Select state</option>
                    <option>Haryana</option>
                    <option>Delhi</option>
                    <option>Rajasthan</option>
                    <option>Punjab</option>
                    <option>Uttar Pradesh</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    City <span>*</span>
                  </label>

                  <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                    required
                  />
                </div>

              </div>


              <div className="form-group full">
                <label>
                  Address <span>*</span>
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter your complete address"
                  required
                ></textarea>
              </div>


              {/* ACADEMIC DETAILS */}
              <h3 className="form-section-title">
                Academic Information
              </h3>

              <div className="form-grid">

                <div className="form-group">
                  <label>
                    Course <span>*</span>
                  </label>

                  <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">Select course</option>
                    <option>B.A.</option>
                    <option>B.Com.</option>
                    <option>B.Sc.</option>
                    <option>BCA</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Academic Year <span>*</span>
                  </label>

                  <select name="academicYear" value={formData.academicYear} onChange={handleChange} required>
                    <option value="">Select academic year</option>
                    <option>2026-27</option>
                    <option>2025-26</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Last Qualification <span>*</span>
                  </label>

                  <input
                      type="text"
                      name="lastQualification"
                      value={formData.lastQualification}
                      onChange={handleChange}
                      placeholder="e.g. 12th / Diploma"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Passing Year <span>*</span>
                  </label>

                  <input
                      type="number"
                      name="passingYear"
                      value={formData.passingYear}
                      onChange={handleChange}
                      min="2000"
                      placeholder="Enter passing year"
                    required
                  />
                </div>

              </div>


              {/* DOCUMENT */}
              <h3 className="form-section-title">
                Document Details
              </h3>

              <div className="form-group full">
                <label>
                  Upload Documents
                </label>

                <input
                  id="admission-document"
                  type="file"
                  name="document"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />

                <small>
                  PDF, JPG or PNG format only.
                </small>
              </div>


              {/* DECLARATION */}
              <div className="declaration">

                <label>
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    required
                  />

                  <span>
                    I declare that the information provided by me is
                    correct and complete to the best of my knowledge.
                  </span>
                </label>

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="submit-button"
                disabled={submitting}
              >
                 {submitting ? "Submitting..." : "Submit Admission Form"}
                {!submitting && <span>→</span>}
              </button>

              {message.text && message.type === "error" && (
                <div
                  className={`form-message ${message.type}`}
                  role="alert"
                  aria-live="assertive"
                >
                  {message.text}
                </div>
              )}

            </form>
          </section>


          {/* RIGHT SIDEBAR */}
          <aside className="admission-sidebar">

            <div className="side-card">

              <div className="side-title">
                <span>🎓</span>

                <div>
                  <h3>Why Choose</h3>
                  <h3>Yaduvanshi?</h3>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">📖</div>

                <div>
                  <h4>Quality Education</h4>
                  <p>
                    Academic excellence with modern learning methods.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">👥</div>

                <div>
                  <h4>Experienced Faculty</h4>
                  <p>
                    Learn from qualified and dedicated professionals.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">🏛️</div>

                <div>
                  <h4>Modern Infrastructure</h4>
                  <p>
                    Well-equipped campus with modern facilities.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">💼</div>

                <div>
                  <h4>Career Opportunities</h4>
                  <p>
                    Placement support and industry exposure.
                  </p>
                </div>
              </div>

            </div>


            <div className="quote-card">

              <div className="quote-mark">“</div>

              <p>
                Education is not just about knowledge, it is about
                building character, creating opportunities and
                transforming lives.
              </p>

              <strong>
                — Yaduvanshi Degree College
              </strong>

            </div>


            <div className="help-card">

              <div>
                <h3>Need Help?</h3>
                <p>
                  Contact our admission team
                </p>
              </div>

              <span>→</span>

            </div>

          </aside>

        </div>

      </main>

      {message.type === "success" && (
        <div
          className="success-overlay"
          onClick={() => setMessage({ type: "", text: "" })}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMessage({ type: "", text: "" });
            }
          }}
          tabIndex={-1}
          autoFocus
        >
          <section
            className="success-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-success-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="success-mark" aria-hidden="true">&#10003;</div>
            <h2 id="registration-success-title">Registration submitted</h2>
            <p>{message.text} Your form is ready for a new registration.</p>
          </section>
        </div>
      )}


      {/* BOTTOM VALUES */}
      <section className="values-bar">

        <div>
          <strong>✦</strong>
          <span>
            <b>Quality Education</b>
            For a Brighter Future
          </span>
        </div>

        <div>
          <strong>♢</strong>
          <span>
            <b>Value Based Education</b>
            Nurturing values and character
          </span>
        </div>

        <div>
          <strong>♙</strong>
          <span>
            <b>Student First Approach</b>
            Every decision driven by student success
          </span>
        </div>

        <div>
          <strong>◎</strong>
          <span>
            <b>Social Responsibility</b>
            Committed to society and humanity
          </span>
        </div>

      </section>


      {/* PAGE CSS */}
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .admission-form-page {
          background: #f8f1e8;
          color: #072656;
          font-family: "DM Sans", sans-serif;
          min-height: 100vh;
        }

        /* HERO */

        .admission-hero {
          height: 470px;
          position: relative;
          overflow: hidden;
          background: #061d45;
        }

        .admission-hero-content {
          position: absolute;
          left: 4%;
          top: 45px;
          width: 45%;
          z-index: 4;
          color: white;
        }

        .breadcrumb {
          display: flex;
          gap: 9px;
          align-items: center;
          font-size: 14px;
          margin-bottom: 38px;
        }

        .breadcrumb a {
          color: white;
          text-decoration: none;
        }

        .breadcrumb b {
          color: #ff7600;
        }

        .hero-kicker {
          color: #ff7600;
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .admission-hero h1 {
          font-family: "Playfair Display", serif;
          font-size: clamp(45px, 5vw, 68px);
          line-height: 1.05;
          margin: 0;
          color: white;
        }

        .admission-hero h1 span {
          color: #ff7600;
        }

        .hero-line {
          width: 90px;
          height: 4px;
          background: #ff7600;
          margin: 24px 0;
          border-radius: 10px;
        }

        .admission-hero-content > p {
          font-size: 16px;
          line-height: 1.8;
          max-width: 520px;
          color: #f1f5f9;
        }

        .hero-campus {
          position: absolute;
          right: 0;
          top: 0;
          width: 57%;
          height: 100%;
          overflow: hidden;
          border-radius: 0 0 0 45% / 0 0 0 50%;
        }

        .hero-campus::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #061d45 0%,
            rgba(6,29,69,0.5) 18%,
            rgba(6,29,69,0) 48%
          );
          z-index: 2;
        }

        .hero-campus img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .admission-wave,
        .admission-orange-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 145px;
          z-index: 5;
          pointer-events: none;
        }

        .admission-orange-wave {
          z-index: 6;
        }

        /* MAIN */

        .admission-main {
          max-width: 1400px;
          margin: 0 auto;
          padding: 45px 35px 50px;
        }

        .form-container {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(300px, 0.95fr);
          gap: 28px;
          align-items: start;
        }

        .form-card,
        .side-card,
        .quote-card,
        .help-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 25px rgba(6,29,69,0.08);
        }

        .form-card {
          padding: 35px;
        }

        .form-heading {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .form-icon {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ff7600;
          color: white;
          font-size: 30px;
        }

        .form-heading h2 {
          font-family: "Playfair Display", serif;
          font-size: 34px;
          margin: 0;
          color: #061d45;
        }

        .form-heading p {
          margin: 5px 0 0;
          color: #49627c;
        }

        .orange-rule {
          height: 3px;
          width: 48px;
          background: #ff7600;
          margin: 20px 0 28px;
        }

        .form-section-title {
          font-family: "Playfair Display", serif;
          font-size: 23px;
          color: #061d45;
          margin: 30px 0 18px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e7e1d9;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full {
          margin-top: 20px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #09285a;
        }

        .form-group label span {
          color: #ff4d00;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #dce2e9;
          border-radius: 9px;
          padding: 13px 14px;
          font-family: inherit;
          font-size: 14px;
          color: #061d45;
          background: white;
          outline: none;
          transition: 0.2s;
        }

        .form-group textarea {
          resize: vertical;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #ff7600;
          box-shadow: 0 0 0 3px rgba(255,118,0,0.1);
        }

        .form-group small {
          color: #7b8794;
          font-size: 12px;
        }

        .form-message {
          margin: 22px 0 0;
          padding: 13px 16px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 600;
        }

        .form-message.success {
          color: #176b3a;
          background: #eaf8ef;
          border: 1px solid #b9e5c8;
        }

        .form-message.error {
          color: #a32626;
          background: #fff0f0;
          border: 1px solid #f0bcbc;
        }

        .success-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(6, 29, 69, 0.62);
        }

        .success-dialog {
          width: min(100%, 440px);
          padding: 32px;
          border-radius: 14px;
          background: white;
          text-align: center;
          box-shadow: 0 24px 70px rgba(6, 29, 69, 0.25);
        }

        .success-mark {
          display: grid;
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          place-items: center;
          border-radius: 50%;
          background: #eaf8ef;
          color: #176b3a;
          font-size: 28px;
          font-weight: 700;
        }

        .success-dialog h2 {
          margin: 0;
          color: #061d45;
          font-size: 24px;
        }

        .success-dialog p {
          margin: 12px 0 22px;
          color: #4b5b70;
          line-height: 1.6;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .declaration {
          margin: 25px 0;
        }

        .declaration label {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 13px;
          color: #4b5b70;
        }

        .declaration input {
          margin-top: 3px;
          accent-color: #ff7600;
        }

        .submit-button {
          width: 100%;
          border: none;
          background: linear-gradient(
            90deg,
            #ff6500,
            #ff8600
          );
          color: white;
          padding: 15px 25px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 18px rgba(255,118,0,0.25);
        }

        .submit-button span {
          margin-left: 10px;
        }

        /* SIDEBAR */

        .admission-sidebar {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .side-card {
          overflow: hidden;
        }

        .side-title {
          display: flex;
          gap: 14px;
          align-items: center;
          padding: 25px;
        }

        .side-title > span {
          font-size: 42px;
        }

        .side-title h3 {
          font-family: "Playfair Display", serif;
          margin: 0;
          font-size: 21px;
          color: #061d45;
        }

        .benefit {
          display: flex;
          gap: 15px;
          padding: 17px 22px;
          border-top: 1px solid #eee8df;
        }

        .benefit-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #062653;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .benefit h4 {
          margin: 0 0 5px;
          color: #062653;
          font-size: 16px;
        }

        .benefit p {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
          color: #607086;
        }

        .quote-card {
          background: #fff2e5;
          padding: 25px;
          position: relative;
        }

        .quote-mark {
          color: #ff7600;
          font-family: Georgia, serif;
          font-size: 65px;
          line-height: 40px;
        }

        .quote-card p {
          font-style: italic;
          line-height: 1.7;
          color: #18355d;
        }

        .quote-card strong {
          color: #ff6500;
          font-size: 13px;
        }

        .help-card {
          padding: 22px;
          background: #062653;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .help-card h3 {
          margin: 0 0 5px;
          font-family: "Playfair Display", serif;
        }

        .help-card p {
          margin: 0;
          font-size: 13px;
        }

        .help-card > span {
          color: #ff7600;
          font-size: 30px;
        }

        /* VALUES */

        .values-bar {
          max-width: 1400px;
          margin: 0 auto 30px;
          padding: 20px 30px;
          border-radius: 18px;
          background: #061d45;
          color: white;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .values-bar > div {
          display: flex;
          gap: 15px;
          align-items: center;
          padding: 8px 18px;
          border-right: 1px solid rgba(255,255,255,0.2);
        }

        .values-bar > div:last-child {
          border-right: none;
        }

        .values-bar strong {
          color: #ff7600;
          font-size: 35px;
        }

        .values-bar span {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          line-height: 1.5;
        }

        .values-bar b {
          font-size: 13px;
          margin-bottom: 2px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .admission-hero {
            height: 550px;
          }

          .admission-hero-content {
            width: 55%;
          }

          .form-container {
            grid-template-columns: 1fr;
          }

          .values-bar {
            grid-template-columns: 1fr 1fr;
          }

        }

        @media (max-width: 700px) {

          .admission-hero {
            height: 620px;
          }

          .admission-hero-content {
            left: 25px;
            width: calc(100% - 50px);
          }

          .hero-campus {
            width: 100%;
            opacity: 0.35;
          }

          .admission-hero h1 {
            font-size: 45px;
          }

          .admission-main {
            padding: 30px 15px;
          }

          .form-card {
            padding: 22px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .values-bar {
            margin: 0 15px 25px;
            grid-template-columns: 1fr;
          }

          .values-bar > div {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            padding-bottom: 15px;
          }

          .values-bar > div:last-child {
            border-bottom: none;
          }

        }

      `}</style>

    </div>
  );
}