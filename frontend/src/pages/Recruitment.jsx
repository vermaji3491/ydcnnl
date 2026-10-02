import React, { useState } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, FileText, GraduationCap, Mail, Phone, Send, X } from "lucide-react";
import { apiUrl } from "../lib/api";

const vacancies = [
  { id: "assistant-professor", title: "Assistant Professor", department: "Arts / Commerce / Science", type: "Full Time", qualification: "Relevant Master's degree with required eligibility", experience: "As per applicable norms" },
  { id: "lab-assistant", title: "Lab Assistant", department: "Science / Computer", type: "Full Time", qualification: "Relevant diploma / degree", experience: "Relevant laboratory experience preferred" },
  { id: "office-assistant", title: "Office Assistant", department: "Administration", type: "Full Time", qualification: "Graduate with computer proficiency", experience: "Relevant administrative experience preferred" },
  { id: "librarian", title: "Librarian", department: "Library", type: "Full Time", qualification: "Relevant Library Science qualification", experience: "Library experience preferred" },
];

const initialForm = { name:"", email:"", phone:"", dob:"", gender:"", position:"", department:"", qualification:"", specialization:"", experience:"", organization:"", address:"", coverLetter:"", declaration:false };

export default function Recruitment() {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));
  const chooseVacancy = (v) => {
    setForm((f) => ({ ...f, position: v.id, department: v.department }));
    setTimeout(() => document.getElementById("staff-application-form")?.scrollIntoView({ behavior:"smooth", block:"start" }), 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.declaration) {
      alert("Please accept the declaration before submitting your application.");
      return;
    }

    if (!resume) {
      alert("Please upload your resume or CV.");
      return;
    }

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value === undefined || value === null || value === false) return;
      if (typeof value === "boolean") {
        formData.append(key, String(value));
        return;
      }
      formData.append(key, value);
    });

    formData.append("resume", resume);
    documents.forEach((documentFile) => formData.append("documents", documentFile));

    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl("/api/recruitments"), {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit recruitment application.");
      }

      setSubmitted(true);
      setForm(initialForm);
      setResume(null);
      setDocuments([]);
    } catch (error) {
      alert(error.message || "Something went wrong while submitting the application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="recruitment-page">
      <style>{`
        .recruitment-page{--navy:#062452;--orange:#ff7600;--cream:#fffaf3;--text:#26364a;--muted:#66758a;--border:#e5e9ef;background:var(--cream);color:var(--text);min-height:100vh;font-family:"DM Sans",Arial,sans-serif}.recruitment-page *{box-sizing:border-box}
        .recruitment-hero{position:relative;min-height:500px;overflow:hidden;display:flex;align-items:center;background:linear-gradient(90deg,rgba(4,24,55,.97),rgba(6,36,82,.9),rgba(6,36,82,.55)),url("/images/collegebg.png") center/cover no-repeat}.recruitment-hero:after{content:"";position:absolute;left:-5%;right:-5%;bottom:-100px;height:190px;background:var(--cream);border-radius:50% 50% 0 0/70% 70% 0 0}.recruitment-hero-inner{width:min(1180px,calc(100% - 40px));margin:auto;padding:75px 0 120px;position:relative;z-index:2}.recruitment-kicker{display:inline-flex;align-items:center;gap:9px;color:#ffd29b;font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin-bottom:16px}.recruitment-kicker:before{content:"";width:34px;height:2px;background:var(--orange)}.recruitment-hero h1{margin:0;max-width:730px;color:#fff;font-family:Georgia,"Times New Roman",serif;font-size:clamp(42px,6vw,72px);line-height:.98;letter-spacing:-.03em}.recruitment-hero h1 span{color:#ff9a35}.recruitment-hero p{max-width:670px;color:rgba(255,255,255,.84);font-size:17px;line-height:1.8;margin:23px 0 28px}.hero-actions{display:flex;flex-wrap:wrap;gap:13px}.btn{position:relative;overflow:hidden;border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:0 21px;border-radius:999px;font-weight:800;text-decoration:none;transition:transform .25s ease,box-shadow .25s ease,filter .25s ease}.btn:before{content:"";position:absolute;inset:-30% auto auto -20%;width:45%;height:170%;background:linear-gradient(120deg,transparent,rgba(255,255,255,.7),transparent);transform:translateX(-180%) rotate(16deg);transition:transform .8s ease}.btn:hover{transform:translateY(-2px)}.btn:hover:before{transform:translateX(260%) rotate(16deg)}.btn-primary{background:linear-gradient(135deg,#ff9f2e,#ff7d00 52%,#ea5200);color:#fff;box-shadow:0 18px 32px rgba(255,118,0,.24)}.btn-primary:hover{box-shadow:0 25px 34px rgba(255,118,0,.35)}.btn-light{color:var(--navy);background:rgba(255,255,255,.95);box-shadow:0 12px 24px rgba(6,36,82,.14)}.btn-light:hover{background:#fff;box-shadow:0 18px 28px rgba(6,36,82,.18)}
        .stats{width:min(1060px,calc(100% - 40px));margin:-22px auto 0;position:relative;z-index:5;display:grid;grid-template-columns:repeat(3,1fr);background:#fff;border:1px solid rgba(6,36,82,.08);border-radius:18px;box-shadow:0 18px 45px rgba(25,43,70,.1);overflow:hidden}.stat{text-align:center;padding:24px 20px;border-right:1px solid var(--border)}.stat:last-child{border:0}.stat strong{display:block;color:var(--navy);font-size:25px;font-weight:900}.stat span{display:block;color:var(--muted);font-size:13px;margin-top:4px}
        .container{width:min(1180px,calc(100% - 40px));margin:auto}.section{padding:88px 0 20px}.heading{text-align:center;margin-bottom:40px}.heading small{color:#e58a00;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.heading h2{margin:9px 0 12px;color:var(--navy);font-family:Georgia,"Times New Roman",serif;font-size:clamp(31px,4vw,47px)}.heading p{max-width:700px;margin:auto;color:var(--muted);line-height:1.7}
        .vacancy-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.vacancy{background:#fff;border:1px solid var(--border);border-radius:17px;padding:26px;box-shadow:0 9px 28px rgba(20,42,72,.055);transition:.25s}.vacancy:hover{transform:translateY(-4px);box-shadow:0 18px 38px rgba(20,42,72,.1);border-color:rgba(255,118,0,.3)}.vacancy-top{display:flex;gap:15px}.vacancy-icon{flex:0 0 48px;width:48px;height:48px;border-radius:13px;display:grid;place-items:center;background:#fff1e4;color:var(--orange)}.vacancy h3{margin:0;color:var(--navy);font-size:21px}.dept{margin-top:5px;color:#e58a00;font-size:13px;font-weight:800}.meta{display:grid;gap:9px;margin:20px 0;padding-top:17px;border-top:1px solid var(--border)}.meta div{display:flex;gap:9px;color:var(--muted);font-size:13px;line-height:1.5}.meta svg{color:var(--orange);flex:0 0 auto}.apply{width:100%;min-height:44px;border:1px solid #ffd0aa;border-radius:999px;background:linear-gradient(135deg,#fff7f0,#fff);color:var(--navy);font-weight:800;cursor:pointer;display:flex;justify-content:center;align-items:center;gap:8px;transition:all .25s ease}.apply:hover{background:linear-gradient(135deg,#ff8d1f,#ff6500);border-color:var(--orange);color:#fff;box-shadow:0 16px 25px rgba(255,118,0,.2)}
        .application{padding:85px 0 100px;scroll-margin-top:30px}.application-layout{display:grid;grid-template-columns:300px minmax(0,1fr);gap:26px;align-items:start}.side{position:sticky;top:30px;background:var(--navy);color:#fff;border-radius:18px;padding:28px}.side h3{margin:0 0 12px;font-family:Georgia,"Times New Roman",serif;font-size:26px}.side p{color:rgba(255,255,255,.72);line-height:1.65;font-size:13px;margin-bottom:25px}.side ul{list-style:none;padding:0;margin:0;display:grid;gap:14px}.side li{display:flex;gap:10px;color:rgba(255,255,255,.86);font-size:13px;line-height:1.5}.side li svg{color:#ff9a35;flex:0 0 auto}.form-card{background:#fff;border:1px solid var(--border);border-radius:20px;padding:clamp(22px,4vw,38px);box-shadow:0 14px 42px rgba(20,42,72,.07)}.form-title{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;margin-bottom:28px}.form-title h2{color:var(--navy);font-family:Georgia,"Times New Roman",serif;margin:0 0 7px;font-size:32px}.form-title p{margin:0;color:var(--muted);font-size:13px}.selected{background:#fff2e7;color:#a84b00;border-radius:9px;padding:10px 13px;font-size:12px;font-weight:800;white-space:nowrap}.form-section-title{display:flex;align-items:center;gap:10px;color:var(--navy);margin:28px 0 17px;padding-bottom:10px;border-bottom:1px solid var(--border);font-size:16px;font-weight:900}.form-section-title span{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;background:var(--navy);color:#fff;font-size:12px}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px}.field.full{grid-column:1/-1}.field label{display:block;color:#36475c;font-size:12px;font-weight:800;margin-bottom:7px}.field label span{color:var(--orange)}.field input,.field select,.field textarea{width:100%;border:1px solid #dce2e9;background:#fff;color:#26364a;border-radius:9px;outline:none;padding:12px 13px;font:inherit;font-size:13px}.field input,.field select{min-height:45px}.field textarea{min-height:125px;resize:vertical}.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--orange);box-shadow:0 0 0 3px rgba(255,118,0,.1)}.upload{border:1.5px dashed #d5dce5;border-radius:11px;padding:16px;background:#fbfcfd}.upload input{border:0;padding:0;min-height:auto;background:transparent}.note{display:block;margin-top:7px;color:#8793a3;font-size:11px}.file-name{display:block;margin-top:8px;color:var(--navy);font-size:12px;font-weight:700}.declaration{display:flex;gap:10px;align-items:flex-start;padding:15px;margin-top:22px;border-radius:10px;background:#fff9f2;border:1px solid #f4e0ca;color:#5e6977;font-size:12px;line-height:1.6}.declaration input{margin-top:3px;accent-color:var(--orange)}.submit-row{display:flex;justify-content:flex-end;margin-top:22px}
        .contact{background:var(--navy);padding:62px 0;color:#fff}.contact-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:28px}.contact h3{margin:0 0 10px;font-family:Georgia,"Times New Roman",serif;font-size:25px}.contact p{color:rgba(255,255,255,.68);line-height:1.65;font-size:13px;margin:0}.contact-item{display:flex;gap:11px;align-items:flex-start}.contact-item svg{color:#ff9a35;flex:0 0 auto}.overlay{position:fixed;inset:0;background:rgba(3,17,36,.72);display:grid;place-items:center;padding:20px;z-index:100;backdrop-filter:blur(5px)}.modal{width:min(480px,100%);background:#fff;border-radius:20px;padding:34px;text-align:center;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.25)}.success-icon{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;margin:0 auto 17px;background:#e8f8ef;color:#159447}.modal h3{margin:0 0 9px;color:var(--navy);font-family:Georgia,"Times New Roman",serif;font-size:29px}.modal p{color:var(--muted);font-size:13px;line-height:1.7;margin-bottom:22px}.close{position:absolute;top:12px;right:12px;border:0;background:#f2f4f6;color:#536171;width:34px;height:34px;border-radius:50%;cursor:pointer;display:grid;place-items:center}
        @media(max-width:900px){.application-layout{grid-template-columns:1fr}.side{position:static}.contact-grid{grid-template-columns:1fr 1fr}.contact-grid>:first-child{grid-column:1/-1}}@media(max-width:700px){.recruitment-hero{min-height:540px}.recruitment-hero-inner{width:calc(100% - 28px);padding-top:55px}.stats{width:calc(100% - 28px);grid-template-columns:1fr}.stat{border-right:0;border-bottom:1px solid var(--border)}.stat:last-child{border-bottom:0}.container{width:calc(100% - 28px)}.vacancy-grid,.form-grid{grid-template-columns:1fr}.field.full{grid-column:auto}.form-title{flex-direction:column}.selected{white-space:normal}.contact-grid{grid-template-columns:1fr}.contact-grid>:first-child{grid-column:auto}.hero-actions{flex-direction:column}.btn{width:100%}}
      `}</style>

      <section className="recruitment-hero">
        <div className="recruitment-hero-inner">
          <div className="recruitment-kicker">Careers at Yaduvanshi</div>
          <h1>Build Your Career.<br/><span>Shape Future Minds.</span></h1>
          <p>Join the Yaduvanshi Degree College team and contribute to an academic environment focused on teaching, learning, student development and professional growth.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => document.getElementById("vacancies")?.scrollIntoView({behavior:"smooth"})}>View Current Vacancies <ArrowRight size={17}/></button>
            <button className="btn btn-light" onClick={() => document.getElementById("staff-application-form")?.scrollIntoView({behavior:"smooth"})}>Submit Application <Send size={16}/></button>
          </div>
        </div>
      </section>

      <div className="stats"><div className="stat"><strong>Academic Team</strong><span>Teaching & faculty opportunities</span></div><div className="stat"><strong>Staff Careers</strong><span>Academic & administrative roles</span></div><div className="stat"><strong>Apply Online</strong><span>Simple digital application process</span></div></div>

      <section className="section" id="vacancies"><div className="container"><div className="heading"><small>Opportunities</small><h2>Current Vacancies</h2><p>Explore available positions and submit your application for the role that matches your qualification and experience.</p></div><div className="vacancy-grid">{vacancies.map((v)=><article className="vacancy" key={v.id}><div className="vacancy-top"><div className="vacancy-icon">{v.title.includes("Professor")?<GraduationCap size={24}/>:<BriefcaseBusiness size={23}/>}</div><div><h3>{v.title}</h3><div className="dept">{v.department}</div></div></div><div className="meta"><div><Clock3 size={15}/><span>{v.type}</span></div><div><GraduationCap size={15}/><span>{v.qualification}</span></div><div><BriefcaseBusiness size={15}/><span>{v.experience}</span></div></div><button className="apply" onClick={()=>chooseVacancy(v)}>Apply for this position <ArrowRight size={16}/></button></article>)}</div></div></section>

      <section className="application" id="staff-application-form"><div className="container"><div className="heading"><small>Staff Recruitment</small><h2>Submit Your Application</h2><p>Complete the form carefully. Fields marked with an orange star are required.</p></div><div className="application-layout">
        <aside className="side"><h3>Why join us?</h3><p>Become part of an institution where faculty and staff contribute directly to the academic journey of students.</p><ul><li><CheckCircle2 size={17}/><span>Professional academic environment</span></li><li><CheckCircle2 size={17}/><span>Teaching and learning focused culture</span></li><li><CheckCircle2 size={17}/><span>Opportunities across academic departments</span></li><li><CheckCircle2 size={17}/><span>Digital application process</span></li></ul></aside>
        <form className="form-card" onSubmit={handleSubmit}><div className="form-title"><div><h2>Staff Recruitment Form</h2><p>Please provide accurate information for recruitment consideration.</p></div>{form.position&&<div className="selected">Applying for: {vacancies.find(v=>v.id===form.position)?.title}</div>}</div>
          <div className="form-section-title"><span>1</span>Personal Information</div><div className="form-grid">
            <div className="field"><label>Full Name <span>*</span></label><input required value={form.name} onChange={e=>update("name",e.target.value)} placeholder="Enter your full name"/></div>
            <div className="field"><label>Email Address <span>*</span></label><input required type="email" value={form.email} onChange={e=>update("email",e.target.value)} placeholder="name@example.com"/></div>
            <div className="field"><label>Mobile Number <span>*</span></label><input required type="tel" value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="10-digit mobile number"/></div>
            <div className="field"><label>Date of Birth</label><input type="date" value={form.dob} onChange={e=>update("dob",e.target.value)}/></div>
            <div className="field"><label>Gender</label><select value={form.gender} onChange={e=>update("gender",e.target.value)}><option value="">Select gender</option><option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option></select></div>
            <div className="field"><label>Position Applied For <span>*</span></label><select required value={form.position} onChange={e=>{const v=vacancies.find(x=>x.id===e.target.value);update("position",e.target.value);update("department",v?.department||"")}}><option value="">Select position</option>{vacancies.map(v=><option key={v.id} value={v.id}>{v.title}</option>)}</select></div>
          </div>
          <div className="form-section-title"><span>2</span>Academic & Professional Details</div><div className="form-grid">
            <div className="field"><label>Department / Subject</label><input value={form.department} onChange={e=>update("department",e.target.value)} placeholder="Department or subject"/></div>
            <div className="field"><label>Highest Qualification <span>*</span></label><input required value={form.qualification} onChange={e=>update("qualification",e.target.value)} placeholder="e.g. M.Sc., M.Com., Ph.D."/></div>
            <div className="field"><label>Specialization</label><input value={form.specialization} onChange={e=>update("specialization",e.target.value)} placeholder="Area of specialization"/></div>
            <div className="field"><label>Total Experience</label><input value={form.experience} onChange={e=>update("experience",e.target.value)} placeholder="e.g. 5 years"/></div>
            <div className="field full"><label>Current / Previous Organization</label><input value={form.organization} onChange={e=>update("organization",e.target.value)} placeholder="College, university, company or institution"/></div>
            <div className="field full"><label>Address</label><textarea value={form.address} onChange={e=>update("address",e.target.value)} placeholder="Complete correspondence address"/></div>
          </div>
          <div className="form-section-title"><span>3</span>Documents</div><div className="form-grid">
            <div className="field"><label>Resume / CV <span>*</span></label><div className="upload"><input required type="file" accept=".pdf,.doc,.docx" onChange={e=>setResume(e.target.files?.[0]||null)}/><span className="note">PDF, DOC or DOCX. Recommended maximum: 5 MB.</span>{resume&&<span className="file-name"><FileText size={13}/> {resume.name}</span>}</div></div>
            <div className="field full"><label>Cover Letter / Message</label><textarea value={form.coverLetter} onChange={e=>update("coverLetter",e.target.value)} placeholder="Briefly tell us about your professional profile and interest in joining Yaduvanshi."/></div>
          </div>
          <label className="declaration"><input type="checkbox" checked={form.declaration} onChange={e=>update("declaration",e.target.checked)}/><span>I declare that the information provided in this application is true and complete to the best of my knowledge. I understand that providing incorrect information may affect my application.</span></label>
          <div className="submit-row"><button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit Application"} <Send size={16}/></button></div>
        </form></div></div></section>

      <section className="contact"><div className="container contact-grid"><div><h3>Recruitment & Careers</h3><p>For recruitment-related queries, applicants may contact the college through the official communication channels.</p></div><div className="contact-item"><Mail size={18}/><p>Official recruitment email</p></div><div className="contact-item"><Phone size={18}/><p>College office / recruitment desk</p></div></div></section>

      {submitted&&<div className="overlay"><div className="modal"><button className="close" onClick={()=>setSubmitted(false)} aria-label="Close"><X size={17}/></button><div className="success-icon"><CheckCircle2 size={34}/></div><h3>Application Received</h3><p>Your recruitment application has been successfully submitted and stored in the backend. A college team member will review it shortly.</p><button className="btn btn-primary" onClick={()=>{setSubmitted(false);setForm(initialForm);setResume(null);setDocuments([])}}>Continue <ArrowRight size={16}/></button></div></div>}
    </main>
  );
}
