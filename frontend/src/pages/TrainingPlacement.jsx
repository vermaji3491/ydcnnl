import React from "react";
import { createPortal } from "react-dom";
import {
  MapPin,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Factory,
  Settings,
  Handshake,
  Target,
  Lightbulb,
  Users,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  Camera,
  Quote,
  X,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import { apiFetch } from "../lib/api";

const toList = (value, fallback = []) => {
  if (Array.isArray(value)) return value.filter(Boolean);

  if (!value) return fallback;

  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter(Boolean);
    }
  } catch {
    // Text fields can contain one item per line.
  }

  return String(value)
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
};

const toGallery = (visit) => {
  const gallery = toList(visit.gallery);

  return [
    ...new Set(
      [visit.main_image, ...gallery].filter(Boolean)
    ),
  ];
};

const TrainingPlacement = () => {
  const [selectedVisit, setSelectedVisit] = React.useState(null);
  const [liveVisits, setLiveVisits] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePreview = (images, index) => {
    setSelectedImage({ images, index });
  };

  const moveImagePreview = (direction) => {
    setSelectedImage((current) => {
      if (!current || current.images.length < 2) return current;

      return {
        ...current,
        index:
          (current.index + direction + current.images.length) %
          current.images.length,
      };
    });
  };

  /*
   * ============================================================
   * DEFAULT INDUSTRIAL VISITS
   * ============================================================
   */

  const defaultVisits = [
    {
      id: "duropacking",

      image:
       "/images/industrial/Duropackaging/duro4.jpeg",
      logo: "DUROPACKING",

      company: "Duropacking Pvt. Ltd.",

      date: "14 Sept 2025",

      location: "Rewari, Haryana",

      category: "Packaging & Manufacturing",

      description:
        "Duropacking Pvt. Ltd. is a leading manufacturer of high-quality packaging solutions, serving various industries with innovative and sustainable products. The visit gave students valuable exposure to packaging production, quality control, logistics and workplace safety.",

      learnings: [
        "Packaging manufacturing process",
        "Quality control and testing",
        "Workplace safety and standards",
        "Supply chain and logistics",
      ],

      duration: "Full-day industrial visit",

      students: "50+ students",

      purpose:
        "The visit gave students an opportunity to understand packaging and manufacturing operations, from production and quality checks to workplace safety and movement of finished products.",

      whatStudentsSaw: [
        "Packaging production workflow",
        "Machinery and production equipment",
        "Quality inspection and testing stages",
        "Material handling and workplace safety",
        "Storage, dispatch and logistics processes",
      ],

      activities: [
        "Guided industrial facility tour",
        "Observation of packaging production",
        "Demonstration of machinery and processes",
        "Interaction with technical and operations staff",
        "Discussion on quality and workplace safety",
      ],

      outcomes: [
        "Practical knowledge of packaging operations",
        "Understanding of quality assurance practices",
        "Awareness of industrial safety procedures",
        "Exposure to supply-chain and logistics activities",
        "Better understanding of professional work culture",
      ],

      coordinator:
        "Training & Placement Cell, Yaduvanshi Degree College",

      galleryImages: [
      "/images/industrial/Duropackaging/duro1.jpeg", 
      "/images/industrial/Duropackaging/duro2.jpeg", 
      "/images/industrial/Duropackaging/duro3.jpeg", 
      "/images/industrial/Duropackaging/duro4.jpeg", 
      "/images/industrial/Duropackaging/duro5.jpeg", 
      "/images/industrial/Duropackaging/duro6.jpeg", 
      "/images/industrial/Duropackaging/duro7.jpeg", 
      "/images/industrial/Duropackaging/duro8.jpeg", 
      "/images/industrial/Duropackaging/duro9.jpeg", 
      "/images/industrial/Duropackaging/duro10.jpeg", 
      "/images/industrial/Duropackaging/duro11.jpeg", 
      "/images/industrial/Duropackaging/duro12.jpeg", 
      "/images/industrial/Duropackaging/duro13.jpeg", 
      
      "/images/industrial/Duropackaging/duro15.jpeg", 
      "/images/industrial/Duropackaging/duro16.jpeg",
      "/images/industrial/Duropackaging/duro17.jpeg", 
      "/images/industrial/Duropackaging/duro18.jpeg", 
      "/images/industrial/Duropackaging/duro19.jpeg",
      ]
    },

    {
      id: "acym",

      image:
        "/images/industrial/acym/acymmain.jpeg",

      logo: "ACYM",

      company: "ACYM Pvt. Limited",

      date: "12 Nov 2024",

      location: "Bhiwadi, Alwar, Rajasthan",

      category: "Manufacturing",

      description:
        "ACYM Pvt. Limited is a manufacturing company in Bhiwadi (Alwar). The visit provided students with valuable insights into industrial operations, production systems, quality control and workplace safety.",

      learnings: [
        "Manufacturing process and workflow",
        "Quality control and testing",
        "Advanced machinery and automation",
        "Safety standards and workplace discipline",
        "Innovation and continuous improvement",
      ],

      duration: "Full-day industrial visit",

      students: "60+ students",

      purpose:
        "The visit was organized to connect classroom learning with practical industrial experience and help students understand how engineering, management, production, quality and safety work together in a professional environment.",

      whatStudentsSaw: [
        "Production and assembly workflow",
        "Industrial machinery and automated systems",
        "Quality inspection and testing",
        "Safety procedures and standard operating practices",
        "Coordination between different industrial teams",
      ],

      activities: [
        "Guided tour of the industrial facility",
        "Observation of production operations",
        "Interaction with industry professionals",
        "Discussion on quality control and safety",
        "Question-and-answer session with the industry team",
      ],

      outcomes: [
        "Better understanding of real industrial workflows",
        "Awareness of quality and safety standards",
        "Practical exposure to modern technology",
        "Improved understanding of professional workplace culture",
        "Stronger connection between theory and practice",
      ],

      coordinator:
        "Training & Placement Cell, Yaduvanshi Degree College",

      galleryImages: [
        "/images/industrial/acym/acym1.jpeg",
        "/images/industrial/acym/acym2.jpeg",
        "/images/industrial/acym/acym3.jpeg",
        "/images/industrial/acym/acym4.jpeg",
        "/images/industrial/acym/acym5.jpeg",
        "/images/industrial/acym/acym6.jpeg",
        "/images/industrial/acym/acym7.jpeg",
        "/images/industrial/acym/acym8.jpeg",
        "/images/industrial/acym/acym9.jpeg",
        "/images/industrial/acym/acym10.jpeg",
        "/images/industrial/acym/acym11.jpeg",
        "/images/industrial/acym/acym12.jpeg",
        "/images/industrial/acym/acym13.jpeg",
        "/images/industrial/acym/acym14.jpeg",
        "/images/industrial/acym/acym15.jpeg",
        "/images/industrial/acym/acym116.jpeg",
        "/images/industrial/acym/acym17.jpeg",
        "/images/industrial/acym/acym18.jpeg",
        "/images/industrial/acym/acym19.jpeg",
        "/images/industrial/acym/acym20.jpeg",
        "/images/industrial/acym/acym21.jpeg",
        "/images/industrial/acym/acym22.jpeg",
        "/images/industrial/acym/acym23.jpeg",
        "/images/industrial/acym/acym24.jpeg",
        "/images/industrial/acym/acym25.jpeg",
        "/images/industrial/acym/acymmain.jpeg",
      ],
    },

    /*
     * ==========================================================
     * THIRD INDUSTRIAL VISIT
     * FSTC FLYING SCHOOL
     * ==========================================================
     */

    {
      id: "fstc",

      /*
       * Put your FSTC main image here:
       * public/images/industrial/fstc/hero.jpg
       */
      image:
        "/images/industrial/fstc/hero.jpg",

      logo: "FSTC",

      company: "FSTC Flying School",

      /*
       * If you have the exact visit date, replace this.
       */
      date: "Industrial Visit",

      location: "Bachod, Haryana",

      category: "Aviation & Flying Training",

      description:
        "Students visited FSTC Flying School at Bachod, Haryana, to gain exposure to the aviation and flying-training environment. The visit helped students understand aircraft operations, aviation facilities, pilot training and the professional environment associated with the aviation sector.",

      learnings: [
        "Introduction to aviation and flying operations",
        "Aircraft and aviation facilities",
        "Pilot training environment",
        "Aviation safety and procedures",
        "Career opportunities in the aviation sector",
      ],

      duration: "Industrial / Educational visit",

      students: "Students of Yaduvanshi Degree College",

      purpose:
        "The purpose of the visit was to provide students with practical exposure to the aviation sector and help them understand the professional environment, facilities and career opportunities associated with flying and aviation training.",

      whatStudentsSaw: [
        "Flying school facilities",
        "Aircraft and aviation infrastructure",
        "Flying-training environment",
        "Aviation safety procedures",
        "Interaction with aviation professionals",
      ],

      activities: [
        "Guided visit of the flying school",
        "Introduction to aviation facilities",
        "Observation of aircraft and training infrastructure",
        "Interaction with aviation professionals",
        "Discussion about aviation careers",
      ],

      outcomes: [
        "Better understanding of the aviation sector",
        "Awareness of flying-training facilities",
        "Knowledge of aviation safety practices",
        "Exposure to aviation career opportunities",
        "Practical learning beyond the classroom",
      ],

      coordinator:
        "Training & Placement Cell, Yaduvanshi Degree College",

      /*
       * Add your actual FSTC photographs in:
       *
       * public/images/industrial/fstc/
       *
       * hero.jpg
       * fstc1.jpg
       * fstc2.jpg
       * fstc3.jpg
       * fstc4.jpg
       * fstc5.jpg
       */

      galleryImages: [
        "/images/industrial/fstc/hero.jpg",
        "/images/industrial/fstc/fstc1.jpg",
        "/images/industrial/fstc/fstc2.jpg",
        "/images/industrial/fstc/fstc3.jpg",
        "/images/industrial/fstc/fstc4.jpg",
        "/images/industrial/fstc/fstc5.jpg",
      ],
    },
  ];

  /*
   * ============================================================
   * LOAD INDUSTRIAL VISITS FROM BACKEND
   * ============================================================
   */

  React.useEffect(() => {
    const loadVisits = async () => {
      try {
        const result = await apiFetch("/api/industrial-visits");

        const data = result.visits || [];

        if (data.length > 0) {
          const formatted = data.map((visit) => {
            const galleryImages = toGallery(visit);

            const image =
              visit.main_image ||
              galleryImages[0] ||
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=90";

            return {
              id: visit.id,

              image,

              logo: (visit.company_name || "INDUSTRY")
                .slice(0, 12)
                .toUpperCase(),

              company:
                visit.company_name ||
                "Industrial Visit",

              date: visit.visit_date || "Industrial Visit",

              location:
                visit.location || "",

              category:
                visit.category || "Industry",

              description:
                visit.description || "",

              learnings: toList(
                visit.learnings,
                ["Industry exposure and practical learning"]
              ),

              duration:
                visit.duration ||
                "Full-day industrial visit",

              students:
                visit.students ||
                "Students of Yaduvanshi Degree College",

              purpose:
                visit.purpose ||
                visit.description ||
                "",

              whatStudentsSaw: toList(
                visit.what_students_saw
              ),

              activities: toList(
                visit.activities
              ),

              outcomes: toList(
                visit.outcomes
              ),

              coordinator:
                visit.coordinator ||
                "Training & Placement Cell, Yaduvanshi Degree College",

              galleryImages:
                galleryImages.length
                  ? galleryImages
                  : [image],
            };
          });

          setLiveVisits(formatted);
        }
      } catch (error) {
        console.error(
          "Error fetching industrial visits:",
          error
        );
      }
    };

    loadVisits();
  }, []);

  /*
   * Keep backend visits AND make sure FSTC appears.
   *
   * If FSTC is later added to the backend with id "fstc",
   * this code prevents duplication.
   */

  const visits = [
    ...liveVisits,
    ...defaultVisits.filter(
      (defaultVisit) =>
        !liveVisits.some(
          (liveVisit) =>
            liveVisit.id === defaultVisit.id
        )
    ),
  ];

  /*
   * Hero should never use visits[1].
   * This was one reason the hero could break when the
   * number/order of visits changed.
   */

  const heroVisit =
    visits.find(
      (visit) => visit.id === "acym"
    ) ||
    visits[0] ||
    defaultVisits[0];

  /*
   * ============================================================
   * BODY SCROLL CONTROL
   * ============================================================
   */

  React.useEffect(() => {
    const locked =
      selectedVisit !== null ||
      selectedImage !== null;

    document.body.style.overflow =
      locked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVisit, selectedImage]);

  React.useEffect(() => {
    if (!selectedImage) return;

    const handleImageKeys = (event) => {
      if (event.key === "ArrowRight") moveImagePreview(1);
      if (event.key === "ArrowLeft") moveImagePreview(-1);
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleImageKeys);
    return () => window.removeEventListener("keydown", handleImageKeys);
  }, [selectedImage]);

  /*
   * ============================================================
   * FEATURES
   * ============================================================
   */

  const features = [
    {
      icon: <Factory size={34} />,
      title: "Real-World",
      subtitle: "Exposure",
      text: "Experience real industry environments.",
    },
    {
      icon: <Settings size={34} />,
      title: "Practical",
      subtitle: "Learning",
      text: "Understand industrial workflows.",
    },
    {
      icon: <Handshake size={34} />,
      title: "Industry",
      subtitle: "Networking",
      text: "Build professional connections.",
    },
    {
      icon: <Target size={34} />,
      title: "Career",
      subtitle: "Guidance",
      text: "Explore careers and opportunities.",
    },
    {
      icon: <Lightbulb size={34} />,
      title: "Skill",
      subtitle: "Enhancement",
      text: "Develop industry-relevant skills.",
    },
  ];

  /*
   * ============================================================
   * HIGHLIGHTS
   * ============================================================
   */

  const highlights = [
    {
      icon: <Building2 size={30} />,
      number: "120+",
      title: "Recruiting Companies",
      text: "Top brands from various sectors",
    },
    {
      icon: <Users size={30} />,
      number: "92%",
      title: "Placement Rate",
      text: "Consistent growth every year",
    },
    {
      icon: <GraduationCap size={30} />,
      number: "650+",
      title: "Students Placed",
      text: "In reputed organizations",
    },
    {
      icon: <Handshake size={30} />,
      number: "50+",
      title: "Industry Tie-ups",
      text: "For internships & placements",
    },
  ];

  return (
    <div className="tp-page">

      <style>{`

        * {
          box-sizing: border-box;
        }

        .tp-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #fff;
          color: #183b63;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .tp-page button {
          font-family: inherit;
        }

        .tp-container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .tp-page h1,
        .tp-page h2,
        .tp-page h3,
        .tp-page p {
          margin-top: 0;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .tp-hero {
          position: relative;
          min-height: 475px;
          overflow: hidden;
          background: #062452;
          color: #fff;
        }

        .tp-hero-image {
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          width: 53%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .tp-hero-overlay {
          position: absolute;
          z-index: 2;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              #062452 0%,
              #062452 32%,
              rgba(6,36,82,.96) 44%,
              rgba(6,36,82,.72) 58%,
              rgba(6,36,82,.22) 76%,
              rgba(6,36,82,0) 100%
            );
        }

        .tp-hero-content {
          position: relative;
          z-index: 5;
          width: 58%;
          padding: 42px 0 120px;
        }

        .tp-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 30px;

          color: rgba(255,255,255,.76);
          font-size: 13px;
        }

        .tp-breadcrumb-current {
          color: #fff;
          font-weight: 700;
        }

        .tp-hero-label {
          margin-bottom: 13px;

          color: #ff7616;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .tp-hero-title {
          max-width: 700px;
          margin: 0;

          color: #fff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(42px, 5vw, 62px);
          line-height: 1.04;
          font-weight: 700;
        }

        .tp-hero-title span {
          color: #ff7616;
        }

        .tp-hero-line {
          width: 105px;
          height: 4px;

          margin: 21px 0 17px;

          border-radius: 20px;

          background: #ff7616;
        }

        .tp-hero-subtitle {
          margin-bottom: 12px;

          color: #fff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 23px;
          font-weight: 600;
        }

        .tp-hero-description {
          max-width: 650px;

          color: rgba(255,255,255,.9);

          font-size: 15px;
          line-height: 1.75;
        }

        .tp-watermark {
          position: absolute;
          z-index: 3;

          right: 30%;
          top: 80px;

          width: 190px;
          height: 190px;

          border: 2px solid rgba(255,255,255,.08);
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tp-watermark::before {
          content:
            "YADUVANSHI GROUP OF INSTITUTIONS";

          width: 125px;

          color: rgba(255,255,255,.1);

          text-align: center;

          font-size: 10px;
          line-height: 1.5;
          font-weight: 800;
        }

        .tp-hero-wave {
          position: absolute;
          z-index: 8;

          left: 0;
          bottom: -1px;

          width: 100%;
          height: 100px;
        }

        .tp-hero-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .tp-intro {
          padding: 85px 0 40px;
          background: #fff;
        }

        .tp-intro-grid {
          display: grid;
          grid-template-columns: 35% 65%;
          gap: 35px;
          align-items: center;
        }

        .tp-intro-title {
          display: flex;
          align-items: center;
          gap: 15px;

          margin-bottom: 17px;

          color: #062f68;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 28px;
        }

        .tp-intro-title svg {
          flex-shrink: 0;
          color: #ff7616;
        }

        .tp-intro-text {
          color: #526d88;

          font-size: 14px;
          line-height: 1.8;
        }

        .tp-feature-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 13px;
        }

        .tp-feature-card {
          min-height: 165px;

          padding: 20px 12px;

          border: 1px solid #dbe7f2;
          border-radius: 12px;

          background: #fff;

          box-shadow:
            0 7px 24px rgba(6,36,82,.07);

          text-align: center;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          transition: .25s ease;
        }

        .tp-feature-card:hover {
          transform: translateY(-5px);
          border-color: #ff7616;
        }

        .tp-feature-icon {
          margin-bottom: 12px;
          color: #062f68;
        }

        .tp-feature-title {
          color: #062f68;
          font-size: 14px;
          font-weight: 800;
        }

        .tp-feature-subtitle {
          color: #ff7616;
          font-size: 13px;
          font-weight: 800;
        }

        .tp-feature-text {
          margin-top: 8px;
          color: #71869b;
          font-size: 11px;
          line-height: 1.45;
        }

        /* =====================================================
           INDUSTRIAL VISITS
        ===================================================== */

        .tp-section {
          padding: 20px 0 45px;
        }

        .tp-section-header {
          min-height: 82px;

          margin-bottom: 25px;
          padding: 15px 24px;

          border-radius: 11px;

          background:
            linear-gradient(
              90deg,
              #062f68,
              #0a4a8c
            );

          display: flex;
          align-items: center;

          box-shadow:
            0 8px 25px rgba(6,36,82,.13);
        }

        .tp-section-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .tp-section-header h2 {
          margin-bottom: 4px;
          color: #fff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 25px;
        }

        .tp-section-header p {
          margin: 0;
          color: rgba(255,255,255,.82);
          font-size: 13px;
        }

        .tp-visit-card {
          display: grid;
          grid-template-columns: 40% 60%;

          margin-bottom: 27px;

          overflow: hidden;

          border: 1px solid #dbe6f0;
          border-radius: 14px;

          background: #fff;

          box-shadow:
            0 8px 28px rgba(6,36,82,.08);
        }

        .tp-visit-image-wrap {
          position: relative;

          min-height: 330px;

          overflow: hidden;
        }

        .tp-visit-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform .45s ease;
        }

        .tp-visit-card:hover .tp-visit-image {
          transform: scale(1.035);
        }

        .tp-gallery-button {
          position: absolute;

          left: 16px;
          bottom: 16px;

          display: flex;
          align-items: center;
          gap: 7px;

          padding: 9px 14px;

          border-radius: 22px;

          background: rgba(6,36,82,.92);
          color: #fff;

          font-size: 11px;
          font-weight: 700;
        }

        .tp-visit-content {
          padding: 28px 30px;
        }

        .tp-company-heading {
          display: flex;
          align-items: center;
          gap: 18px;

          margin-bottom: 17px;
        }

        .tp-company-logo {
          min-width: 135px;

          color: #062f68;

          font-size: 15px;
          font-weight: 900;
        }

        .tp-company-name {
          color: #062f68;

          font-size: 21px;
          line-height: 1.25;
          font-weight: 800;
        }

        .tp-visit-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 22px;

          margin-bottom: 22px;

          color: #45627e;

          font-size: 12px;
          font-weight: 600;
        }

        .tp-meta-item {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .tp-meta-item svg {
          color: #062f68;
        }

        .tp-category {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 6px 12px;

          border-radius: 18px;

          background: #edf5fd;
          color: #062f68;
        }

        .tp-visit-info-grid {
          display: grid;
          grid-template-columns: 58% 42%;
          gap: 25px;
        }

        .tp-visit-info h3 {
          margin-bottom: 9px;

          color: #062f68;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 18px;
        }

        .tp-visit-info p {
          color: #526d88;

          font-size: 13px;
          line-height: 1.75;
        }

        .tp-learn-box {
          padding-left: 22px;

          border-left: 1px solid #d7e3ee;
        }

        .tp-learning-list {
          list-style: none;

          margin: 0;
          padding: 0;
        }

        .tp-learning-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;

          margin-bottom: 10px;

          color: #365b7e;

          font-size: 12px;
          line-height: 1.5;
        }

        .tp-learning-list svg {
          flex-shrink: 0;
          color: #ff7616;
        }

        .tp-company-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-top: 17px;
          padding: 10px 18px;

          border: 0;
          border-radius: 24px;

          background:
            linear-gradient(
              90deg,
              #ff6f0e,
              #ff8a26
            );

          color: #fff;

          font-size: 12px;
          font-weight: 800;

          cursor: pointer;

          transition: .25s;
        }

        .tp-company-button:hover {
          transform: translateY(-2px);
          box-shadow:
            0 9px 20px rgba(255,118,22,.3);
        }

        /* =====================================================
           HIGHLIGHTS
        ===================================================== */

        .tp-highlights-section {
          padding: 10px 0 45px;
        }

        .tp-highlights-wrapper {
          padding: 28px;

          border: 1px solid #dce8f3;
          border-radius: 15px;

          background: #f4f9fe;
        }

        .tp-highlights-heading {
          display: flex;
          align-items: center;
          gap: 14px;

          margin-bottom: 23px;
        }

        .tp-highlights-heading-icon {
          color: #ff7616;
        }

        .tp-highlights-heading h2 {
          margin: 0;

          color: #062f68;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 27px;
        }

        .tp-highlights-heading p {
          margin: 5px 0 0;

          color: #607b95;

          font-size: 13px;
        }

        .tp-highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .tp-highlight-card {
          min-height: 175px;

          padding: 23px 15px;

          border: 1px solid #dbe7f2;
          border-radius: 12px;

          background: #fff;

          text-align: center;

          box-shadow:
            0 5px 18px rgba(6,36,82,.06);
        }

        .tp-highlight-icon {
          margin-bottom: 9px;
          color: #ff7616;
        }

        .tp-highlight-number {
          color: #062f68;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 31px;
          font-weight: 900;
        }

        .tp-highlight-title {
          color: #062f68;

          font-size: 13px;
          font-weight: 800;
        }

        .tp-highlight-text {
          margin-top: 7px;

          color: #71869b;
          font-size: 11px;
        }

        /* =====================================================
           TESTIMONIAL
        ===================================================== */

        .tp-testimonial {
          overflow: hidden;

          background: #062452;
          color: #fff;
        }

        .tp-testimonial-inner {
          width: min(1240px, calc(100% - 48px));
          min-height: 235px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: 27% 39% 34%;
        }

        .tp-testimonial-image-wrap {
          min-height: 235px;
          overflow: hidden;
        }

        .tp-testimonial-image {
          width: 100%;
          height: 100%;

          min-height: 235px;

          object-fit: cover;
        }

        .tp-quote-area {
          padding: 35px 30px;

          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .tp-quote-mark {
          color: #ff7616;

          font-family: Georgia, serif;
          font-size: 54px;
          line-height: .7;
        }

        .tp-quote-text {
          color: rgba(255,255,255,.92);

          font-size: 13px;
          line-height: 1.75;
        }

        .tp-quote-author {
          margin-top: 12px;

          color: #ff9b49;

          font-size: 11px;
          font-weight: 800;
        }

        .tp-testimonial-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;

          align-content: center;

          padding: 30px;

          border-left: 1px solid rgba(255,255,255,.22);
        }

        .tp-testimonial-point {
          display: flex;
          align-items: center;
          gap: 10px;

          color: #fff;

          font-size: 12px;
          font-weight: 600;
        }

        .tp-point-circle {
          width: 39px;
          height: 39px;

          flex-shrink: 0;

          border: 1px solid rgba(255,255,255,.75);
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* =====================================================
           VISIT DETAILS
        ===================================================== */

        .tp-details-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;

          overflow-y: auto;

          background:
            rgba(3,18,42,.84);

          backdrop-filter: blur(5px);
        }

        .tp-details-page {
          width: 100%;
          min-height: 100vh;

          overflow: hidden;

          background: #fff;
        }

        .tp-details-hero {
          position: relative;

          height: 500px;

          overflow: hidden;

          background: #062452;
          color: #fff;
        }

        .tp-details-hero-image {
          position: absolute;

          top: 0;
          right: 0;

          width: 57%;
          height: 100%;

          object-fit: cover;
        }

        .tp-details-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              #062452 0%,
              #062452 30%,
              rgba(6,36,82,.98) 43%,
              rgba(6,36,82,.72) 58%,
              rgba(6,36,82,.12) 80%,
              rgba(6,36,82,0) 100%
            );
        }

        .tp-details-hero-content {
          position: relative;
          z-index: 5;

          width: min(1240px, calc(100% - 70px));

          margin: 0 auto;

          padding-top: 65px;
        }

        .tp-details-badge {
          display: inline-block;

          margin-bottom: 13px;
          padding: 8px 20px;

          border-radius: 30px;

          background: #ff9f19;
          color: #fff;

          font-size: 13px;
          font-weight: 900;
        }

        .tp-details-hero-content h1 {
          max-width: 680px;

          margin: 0;

          color: #fff;

          font-family: Arial, Helvetica, sans-serif;

          font-size: clamp(40px, 5vw, 64px);
          line-height: 1;
          font-weight: 900;
        }

        .tp-details-hero-content h2 {
          margin: 8px 0 17px;

          color: #ff9f19;

          font-family: Arial, Helvetica, sans-serif;

          font-size: clamp(30px, 4vw, 50px);
          line-height: 1;

          font-weight: 900;
        }

        .tp-details-hero-content h2 span {
          color: #ffb52f;
        }

        .tp-details-tagline {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          margin-bottom: 13px;

          color: #fff;

          font-size: 15px;
          font-weight: 800;
        }

        .tp-details-tagline b {
          color: #ff9f19;
        }

        .tp-details-hero-content > p {
          max-width: 650px;

          color: rgba(255,255,255,.93);

          font-size: 14px;
          line-height: 1.7;
        }

        .tp-details-wave {
          position: absolute;

          z-index: 6;

          bottom: -1px;
          left: 0;

          width: 100%;
          height: 100px;
        }

        .tp-details-wave svg {
          width: 100%;
          height: 100%;
        }

        .tp-details-close {
          position: fixed;

          z-index: 100002;

          top: 18px;
          right: 20px;

          width: 45px;
          height: 45px;

          border: 1px solid rgba(255,255,255,.55);
          border-radius: 50%;

          background: rgba(4,25,55,.7);

          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;
        }

        .tp-details-close:hover {
          background: #ff7616;
        }

        /* =====================================================
           DETAILS INFO BAR
        ===================================================== */

        .tp-details-info-bar {
          position: relative;
          z-index: 10;

          width: min(1180px, calc(100% - 60px));

          min-height: 110px;

          margin: -28px auto 0;

          padding: 15px 18px;

          border-radius: 23px;

          background: #fff;

          box-shadow:
            0 14px 40px rgba(7,48,91,.12);

          display: grid;

          grid-template-columns:
            1.4fr
            repeat(5, 1fr)
            1.1fr;
        }

        .tp-details-company-logo {
          padding: 5px 19px;

          display: flex;
          align-items: center;
          gap: 10px;

          border-right: 1px solid #dbe4ec;
        }

        .tp-acymlogo-mark {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0b6bbd;

          font-size: 30px;
          font-weight: 900;
          font-style: italic;
        }

        .tp-details-company-logo strong {
          display: block;

          color: #0b4f91;

          font-size: 20px;
        }

        .tp-details-company-logo span {
          display: block;

          color: #1d4f7e;

          font-size: 10px;
          font-weight: 700;
        }

        .tp-details-info-item {
          min-height: 65px;

          padding: 7px 13px;

          display: flex;
          align-items: center;
          gap: 9px;

          border-right: 1px solid #dbe4ec;
        }

        .tp-details-info-item > svg {
          flex-shrink: 0;
          color: #0875c9;
        }

        .tp-details-info-item small {
          display: block;

          margin-bottom: 4px;

          color: #64778a;

          font-size: 9px;
        }

        .tp-details-info-item strong {
          display: block;

          color: #263c53;

          font-size: 10px;
          line-height: 1.4;
        }

        .tp-details-gallery-button {
          min-height: 60px;

          margin-left: 12px;

          padding: 0 17px;

          border: 0;
          border-radius: 34px;

          background: #063f79;

          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          font-size: 11px;
          font-weight: 800;

          cursor: pointer;
        }

        /* =====================================================
           DETAILS ABOUT
        ===================================================== */

        .tp-details-about {
          width: min(1160px, calc(100% - 70px));

          margin: 30px auto;

          display: grid;
          grid-template-columns: 47% 53%;
          gap: 35px;
        }

        .tp-details-section-label {
          margin-bottom: 7px;

          color: #0a3d73;

          font-size: 11px;
          font-weight: 900;
          letter-spacing: .5px;
        }

        .tp-details-section-label::before {
          content: "";

          display: inline-block;

          width: 12px;
          height: 4px;

          margin-right: 8px;

          border-radius: 4px;

          background: #ff7616;
        }

        .tp-details-about-text h2 {
          margin-bottom: 9px;

          color: #123c6b;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 27px;
        }

        .tp-details-about-text > p {
          color: #48657e;

          font-size: 13px;
          line-height: 1.7;
        }

        .tp-details-learning-box {
          margin-top: 18px;

          padding: 17px 19px;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #edf7ff,
              #e8f3fc
            );
        }

        .tp-details-learning-heading {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 12px;
        }

        .tp-details-learning-heading svg {
          color: #ff9f19;
        }

        .tp-details-learning-heading h3 {
          margin: 0;

          color: #143e6d;

          font-size: 14px;
        }

        .tp-details-learning-box ul {
          list-style: none;

          margin: 0;
          padding: 0;
        }

        .tp-details-learning-box li {
          display: flex;
          gap: 9px;

          margin: 7px 0;

          color: #234b70;

          font-size: 11px;
        }

        .tp-details-main-gallery {
          min-width: 0;
        }

        .tp-details-feature-photo {
          position: relative;

          height: 230px;

          overflow: hidden;

          border-radius: 13px;

          cursor: pointer;
        }

        .tp-details-feature-photo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform .3s;
        }

        .tp-details-feature-photo:hover img {
          transform: scale(1.03);
        }

        .tp-photo-caption {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 12px 14px;

          background:
            linear-gradient(
              transparent,
              rgba(0,0,0,.85)
            );

          color: #fff;
        }

        .tp-photo-caption strong {
          display: block;
          font-size: 12px;
        }

        .tp-photo-caption span {
          display: block;

          margin-top: 2px;

          font-size: 9px;
        }

        .tp-small-gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          gap: 10px;

          margin-top: 11px;
        }

        .tp-small-gallery-image {
          height: 85px;

          overflow: hidden;

          border-radius: 8px;

          cursor: pointer;
        }

        .tp-small-gallery-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform .3s;
        }

        .tp-small-gallery-image:hover img {
          transform: scale(1.07);
        }

        /* =====================================================
           FOUR DETAIL CARDS
        ===================================================== */

        .tp-details-four-cards {
          width: min(1160px, calc(100% - 70px));

          margin: 28px auto;

          display: grid;
          grid-template-columns: repeat(4, 1fr);

          gap: 15px;
        }

        .tp-details-info-card {
          min-height: 165px;

          padding: 18px;

          border-radius: 11px;
        }

        .tp-details-info-card.purpose {
          background: #eaf5ff;
        }

        .tp-details-info-card.students {
          background: #effbea;
        }

        .tp-details-info-card.activities {
          background: #f3edff;
        }

        .tp-details-info-card.outcomes {
          background: #fff0e7;
        }

        .tp-info-card-icon {
          width: 35px;
          height: 35px;

          margin-bottom: 10px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #0b67b1;
          color: #fff;
        }

        .students .tp-info-card-icon {
          background: #54ad45;
        }

        .activities .tp-info-card-icon {
          background: #813ad4;
        }

        .outcomes .tp-info-card-icon {
          background: #ff7520;
        }

        .tp-details-info-card h3 {
          margin-bottom: 10px;

          color: #123e6d;

          font-size: 14px;
        }

        .tp-details-info-card p,
        .tp-details-info-card li {
          color: #3e5b75;

          font-size: 10.5px;
          line-height: 1.55;
        }

        .tp-details-info-card p {
          margin: 0;
        }

        .tp-details-info-card ul {
          list-style: none;

          margin: 0;
          padding: 0;
        }

        .tp-details-info-card li {
          display: flex;
          gap: 6px;

          margin: 5px 0;
        }

        /* =====================================================
           GALLERY
        ===================================================== */

        .tp-details-gallery-section {
          width: min(1160px, calc(100% - 70px));

          margin: 10px auto 35px;
        }

        .tp-details-gallery-title {
          display: flex;
          align-items: end;
          justify-content: space-between;

          margin-bottom: 15px;
        }

        .tp-details-gallery-title span {
          color: #ff7616;

          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .tp-details-gallery-title h2 {
          margin: 2px 0 0;

          color: #123c6b;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 25px;
        }

        .tp-gallery-count {
          display: flex;
          align-items: center;
          gap: 7px;

          padding: 8px 13px;

          border-radius: 20px;

          background: #f0f6fc;
          color: #31597d;

          font-size: 10px;
          font-weight: 800;
        }

        .tp-details-gallery-grid {
          display: grid;

          grid-template-columns:
            2fr
            1fr
            1fr
            1fr;

          grid-auto-rows: 150px;

          gap: 10px;
        }

        .tp-gallery-photo {
          position: relative;

          overflow: hidden;

          border-radius: 9px;

          cursor: pointer;
        }

        .tp-gallery-photo.large {
          grid-row: span 2;
        }

        .tp-gallery-photo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform .35s;
        }

        .tp-gallery-photo:hover img {
          transform: scale(1.05);
        }

        .tp-gallery-number {
          position: absolute;

          top: 9px;
          left: 9px;

          min-width: 30px;

          padding: 5px 7px;

          border-radius: 5px;

          background: rgba(6,36,82,.75);

          color: #fff;

          font-size: 9px;
          font-weight: 800;
        }

        /* =====================================================
           IMAGE LIGHTBOX
           
           THIS FIXES THE "IMAGE BECOMES TOO BIG" PROBLEM.
        ===================================================== */

        .tp-image-lightbox {
          position: fixed;
          inset: 0;

          z-index: 100010;

          padding: 30px;

          background:
            rgba(0,0,0,.88);

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: zoom-out;
        }

        .tp-image-lightbox-content {
          position: relative;

          width: min(1100px, 92vw);
          height: min(760px, 86vh);

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: default;
        }

        .tp-image-lightbox-content img {
          display: block;

          /*
           * IMPORTANT:
           * The image can NEVER exceed these limits.
           */
          max-width: 90vw;
          max-height: 82vh;

          width: auto;
          height: auto;

          object-fit: contain;

          border-radius: 8px;

          box-shadow:
            0 20px 70px rgba(0,0,0,.5);
        }

        .tp-lightbox-close {
          position: absolute;

          top: -10px;
          right: -10px;

          width: 42px;
          height: 42px;

          border: 0;
          border-radius: 50%;

          background: #ff7616;
          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          z-index: 3;
        }

        .tp-lightbox-close:hover {
          background: #e65e00;
        }

        .tp-lightbox-nav {
          position: fixed;
          top: 50%;
          z-index: 4;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          transform: translateY(-50%);
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 50%;
          background: rgba(255,255,255,.92);
          color: #062452;
          cursor: pointer;
          transition: background .2s ease, color .2s ease;
        }

        .tp-lightbox-nav:hover {
          background: #ff7616;
          color: #fff;
        }

        .tp-lightbox-previous {
          left: 24px;
        }

        .tp-lightbox-next {
          right: 24px;
        }

        .tp-lightbox-count {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(0,0,0,.68);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }

        /* =====================================================
           DETAIL FOOTER
        ===================================================== */

        .tp-details-bottom {
          min-height: 125px;

          padding: 22px max(
            30px,
            calc((100% - 1160px) / 2)
          );

          background: #062452;
          color: #fff;

          display: grid;
          grid-template-columns: 1.35fr .95fr 1fr;

          align-items: center;
          gap: 28px;
        }

        .tp-details-quote {
          display: flex;
          gap: 12px;
        }

        .tp-quote-icon {
          color: #ff7616;
        }

        .tp-details-quote h3 {
          margin: 0;

          color: #fff;

          font-size: 14px;
          line-height: 1.45;
        }

        .tp-details-quote p {
          margin: 8px 0 0;

          color: rgba(255,255,255,.75);

          font-size: 10px;
        }

        .tp-coordinator {
          min-height: 65px;

          padding: 10px 16px;

          border-radius: 35px;

          background: #fff;

          color: #173d66;

          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tp-coordinator-icon {
          width: 40px;
          height: 40px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #0a4c88;
          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tp-coordinator small {
          display: block;

          color: #6b7e90;

          font-size: 9px;
        }

        .tp-coordinator strong {
          display: block;

          margin-top: 2px;

          font-size: 10px;
          line-height: 1.4;
        }

        .tp-details-orange-badge {
          justify-self: end;

          min-width: 245px;

          padding: 17px 24px;

          border-radius:
            46%
            54%
            48%
            52%;

          background: #ff9b17;

          color: #082d58;

          transform: rotate(-2deg);
        }

        .tp-details-orange-badge strong {
          display: block;

          font-family: Georgia, serif;

          font-size: 21px;
          font-style: italic;
        }

        .tp-details-orange-badge span {
          display: block;

          font-size: 10px;
          font-weight: 700;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {

          .tp-feature-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .tp-highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tp-details-info-bar {
            grid-template-columns:
              1.4fr
              repeat(3, 1fr);
          }

          .tp-details-gallery-button {
            grid-column: span 2;
          }
        }

        @media (max-width: 850px) {

          .tp-hero {
            min-height: 590px;
          }

          .tp-hero-content {
            width: 100%;
            padding: 35px 0 310px;
          }

          .tp-hero-image {
            top: auto;
            bottom: 0;

            left: 0;

            width: 100%;
            height: 310px;

            opacity: .7;
          }

          .tp-hero-overlay {
            background:
              linear-gradient(
                0deg,
                #062452 0%,
                rgba(6,36,82,.9) 48%,
                rgba(6,36,82,0) 100%
              );
          }

          .tp-watermark {
            display: none;
          }

          .tp-intro-grid {
            grid-template-columns: 1fr;
          }

          .tp-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tp-visit-card {
            grid-template-columns: 1fr;
          }

          .tp-visit-image-wrap {
            height: 290px;
            min-height: 290px;
          }

          .tp-visit-info-grid {
            grid-template-columns: 1fr;
          }

          .tp-learn-box {
            padding: 20px 0 0;

            border-left: 0;
            border-top: 1px solid #d7e3ee;
          }

          .tp-testimonial-inner {
            grid-template-columns: 1fr;
          }

          .tp-testimonial-image-wrap {
            height: 220px;
            min-height: 220px;
          }

          .tp-details-hero {
            height: 600px;
          }

          .tp-details-hero-image {
            top: auto;
            bottom: 0;

            width: 100%;
            height: 300px;
          }

          .tp-details-hero-overlay {
            background:
              linear-gradient(
                0deg,
                #062452 0%,
                rgba(6,36,82,.94) 43%,
                rgba(6,36,82,.05) 100%
              );
          }

          .tp-details-hero-content {
            width: calc(100% - 35px);
            padding-top: 55px;
          }

          .tp-details-info-bar {
            width: calc(100% - 30px);

            margin-top: -15px;

            grid-template-columns: repeat(2, 1fr);
          }

          .tp-details-company-logo {
            grid-column: span 2;
            border-right: 0;
            border-bottom: 1px solid #dbe4ec;
          }

          .tp-details-gallery-button {
            grid-column: span 2;
            margin: 5px 0 0;
          }

          .tp-details-about {
            grid-template-columns: 1fr;
          }

          .tp-details-four-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .tp-details-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tp-gallery-photo.large {
            grid-row: span 1;
          }

          .tp-details-bottom {
            grid-template-columns: 1fr;
          }

          .tp-details-orange-badge {
            justify-self: start;
          }
        }

        @media (max-width: 600px) {

          .tp-container,
          .tp-testimonial-inner {
            width: calc(100% - 28px);
          }

          .tp-hero-title {
            font-size: 38px;
          }

          .tp-feature-grid {
            grid-template-columns: 1fr 1fr;
          }

          .tp-highlights-grid {
            grid-template-columns: 1fr 1fr;
          }

          .tp-section-header {
            align-items: flex-start;
          }

          .tp-company-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 7px;
          }

          .tp-details-hero {
            height: 620px;
          }

          .tp-details-hero-content h1 {
            font-size: 40px;
          }

          .tp-details-hero-content h2 {
            font-size: 31px;
          }

          .tp-details-info-bar {
            grid-template-columns: 1fr 1fr;
          }

          .tp-details-about,
          .tp-details-four-cards,
          .tp-details-gallery-section {
            width: calc(100% - 28px);
          }

          .tp-details-four-cards {
            grid-template-columns: 1fr;
          }

          .tp-details-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: 120px;
          }

          .tp-image-lightbox {
            padding: 15px;
          }

          .tp-image-lightbox-content {
            width: 96vw;
            height: 85vh;
          }

          .tp-image-lightbox-content img {
            max-width: 94vw;
            max-height: 78vh;
          }

          .tp-lightbox-close {
            top: -5px;
            right: -5px;
          }

          .tp-lightbox-previous {
            left: 8px;
          }

          .tp-lightbox-next {
            right: 8px;
          }

          .tp-lightbox-nav {
            width: 40px;
            height: 40px;
          }

          .tp-details-orange-badge {
            width: 100%;
            min-width: 0;
          }
        }

      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tp-hero">

        <img
          className="tp-hero-image"
          src={heroVisit.image}
          alt={heroVisit.company}
        />

        <div className="tp-hero-overlay" />

        <div className="tp-watermark" />

        <div className="tp-container">

          <div className="tp-hero-content">

            <div className="tp-breadcrumb">
              <span>Home</span>
              <span>›</span>
              <span>Student Life</span>
              <span>›</span>

              <span className="tp-breadcrumb-current">
                Training & Placement
              </span>
            </div>

            <div className="tp-hero-label">
              TRAINING & PLACEMENT
            </div>

            <h1 className="tp-hero-title">
              Building Careers
              <br />
              <span>Beyond the Classroom</span>
            </h1>

            <div className="tp-hero-line" />

            <p className="tp-hero-subtitle">
              Learn. Connect. Grow. Succeed.
            </p>

            <p className="tp-hero-description">
              Our Training & Placement Cell connects
              students with industry, practical learning
              and career opportunities through industrial
              visits, training programmes, internships and
              placement support.
            </p>

          </div>

        </div>

        {/* HERO WAVE */}

        <div className="tp-hero-wave">

          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >

            <path
              d="
                M0,0
                L1440,0
                L1440,55
                C1350,94 1270,108 1140,77
                C970,38 760,2 540,82
                C370,145 180,145 0,82
                Z
              "
              fill="#062452"
            />

            <path
              d="
                M0,82
                C180,145 370,145 540,82
                C760,2 970,38 1140,77
                C1270,108 1350,94 1440,55
                L1440,150
                L0,150
                Z
              "
              fill="#fff"
            />

            <path
              d="
                M0,77
                C180,140 370,140 540,77
                C760,-3 970,33 1140,72
                C1270,103 1350,89 1440,50
              "
              fill="none"
              stroke="#ff7616"
              strokeWidth="4"
            />

          </svg>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="tp-intro">

        <div className="tp-container">

          <div className="tp-intro-grid">

            <div>

              <h2 className="tp-intro-title">
                <Target size={40} />

                Industry-Ready Students
              </h2>

              <p className="tp-intro-text">
                The Training & Placement Cell helps
                students transform classroom knowledge
                into practical professional experience.
                Industrial visits expose students to real
                workplaces, processes, technologies and
                professional culture.
              </p>

            </div>

            <div className="tp-feature-grid">

              {features.map((feature) => (

                <div
                  className="tp-feature-card"
                  key={feature.title}
                >

                  <div className="tp-feature-icon">
                    {feature.icon}
                  </div>

                  <div className="tp-feature-title">
                    {feature.title}
                  </div>

                  <div className="tp-feature-subtitle">
                    {feature.subtitle}
                  </div>

                  <div className="tp-feature-text">
                    {feature.text}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIAL VISITS
      ===================================================== */}

      <section className="tp-section">

        <div className="tp-container">

          <div className="tp-section-header">

            <div className="tp-section-header-left">

              <Factory size={34} />

              <div>

                <h2>
                  Industrial Visits
                </h2>

                <p>
                  Real industry exposure that connects
                  classroom concepts with professional
                  practice.
                </p>

              </div>

            </div>

          </div>

          {visits.map((visit) => (

            <article
              className="tp-visit-card"
              key={visit.id}
            >

              <div className="tp-visit-image-wrap">

                <img
                  className="tp-visit-image"
                  src={visit.image}
                  alt={visit.company}
                />

                <div className="tp-gallery-button">

                  <Camera size={14} />

                  {visit.galleryImages.length}
                  {" "}
                  Photos

                </div>

              </div>

              <div className="tp-visit-content">

                <div className="tp-company-heading">

                  <div className="tp-company-logo">
                    {visit.logo}
                  </div>

                  <div className="tp-company-name">
                    {visit.company}
                  </div>

                </div>

                <div className="tp-visit-meta">

                  <div className="tp-meta-item">
                    <CalendarDays size={15} />
                    {visit.date}
                  </div>

                  <div className="tp-meta-item">
                    <MapPin size={15} />
                    {visit.location}
                  </div>

                  <div className="tp-category">
                    <BriefcaseBusiness size={13} />
                    {visit.category}
                  </div>

                </div>

                <div className="tp-visit-info-grid">

                  <div className="tp-visit-info">

                    <h3>
                      About the Visit
                    </h3>

                    <p>
                      {visit.description}
                    </p>

                    <button
                      type="button"
                      className="tp-company-button"
                      onClick={() =>
                        setSelectedVisit(visit)
                      }
                    >
                      View Visit Details

                      <ArrowRight size={14} />

                    </button>

                  </div>

                  <div className="tp-learn-box">

                    <div className="tp-visit-info">

                      <h3>
                        Key Learnings
                      </h3>

                    </div>

                    <ul className="tp-learning-list">

                      {visit.learnings.map(
                        (learning, index) => (

                          <li key={index}>

                            <CheckCircle2 size={15} />

                            <span>
                              {learning}
                            </span>

                          </li>

                        )
                      )}

                    </ul>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          PLACEMENT HIGHLIGHTS
      ===================================================== */}

      <section className="tp-highlights-section">

        <div className="tp-container">

          <div className="tp-highlights-wrapper">

            <div className="tp-highlights-heading">

              <div className="tp-highlights-heading-icon">
                <Award size={32} />
              </div>

              <div>

                <h2>
                  Placement Highlights
                </h2>

                <p>
                  Building strong connections between
                  students and industry.
                </p>

              </div>

            </div>

            <div className="tp-highlights-grid">

              {highlights.map((item) => (

                <div
                  className="tp-highlight-card"
                  key={item.title}
                >

                  <div className="tp-highlight-icon">
                    {item.icon}
                  </div>

                  <div className="tp-highlight-number">
                    {item.number}
                  </div>

                  <div className="tp-highlight-title">
                    {item.title}
                  </div>

                  <div className="tp-highlight-text">
                    {item.text}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}

      <section className="tp-testimonial">

        <div className="tp-testimonial-inner">

          <div className="tp-testimonial-image-wrap">

            <img
              className="tp-testimonial-image"
              src={heroVisit.galleryImages[0]}
              alt="Industrial learning"
            />

          </div>

          <div className="tp-quote-area">

            <div className="tp-quote-mark">
              “
            </div>

            <div>

              <div className="tp-quote-text">
                Industrial exposure helps students
                understand how classroom concepts are
                applied in real professional environments.
              </div>

              <div className="tp-quote-author">
                — Training & Placement Cell,
                Yaduvanshi Degree College
              </div>

            </div>

          </div>

          <div className="tp-testimonial-points">

            <div className="tp-testimonial-point">

              <div className="tp-point-circle">
                <Factory size={17} />
              </div>

              Real workplace exposure

            </div>

            <div className="tp-testimonial-point">

              <div className="tp-point-circle">
                <Users size={17} />
              </div>

              Industry interaction

            </div>

            <div className="tp-testimonial-point">

              <div className="tp-point-circle">
                <Settings size={17} />
              </div>

              Practical understanding

            </div>

            <div className="tp-testimonial-point">

              <div className="tp-point-circle">
                <GraduationCap size={17} />
              </div>

              Career awareness

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FULL VISIT DETAILS
      ===================================================== */}

      {selectedVisit && (

        <div
          className="tp-details-overlay"
          onClick={() =>
            setSelectedVisit(null)
          }
        >

          <div
            className="tp-details-page"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* DETAIL HERO */}

            <section className="tp-details-hero">

              <img
                src={selectedVisit.image}
                alt={selectedVisit.company}
                className="tp-details-hero-image"
              />

              <div className="tp-details-hero-overlay" />

              <div className="tp-details-hero-content">

                <div className="tp-details-badge">
                  INDUSTRIAL VISIT
                </div>

                <h1>
                  {selectedVisit.company
                    .replace(" Pvt. Limited", "")
                    .replace(" Pvt. Ltd.", "")}
                </h1>

                <h2>
                  {selectedVisit.location.split(",")[0]}

                  <span>
                    {" "}
                    (
                    {selectedVisit.location
                      .split(",")
                      .slice(1)
                      .join(",")
                      .trim()}
                    )
                  </span>
                </h2>

                <div className="tp-details-tagline">

                  <span>
                    Real Industry
                  </span>

                  <b>•</b>

                  <span>
                    Real Experience
                  </span>

                  <b>•</b>

                  <span>
                    A Brighter Future
                  </span>

                </div>

                <p>

                  Our students got the opportunity
                  to visit{" "}

                  <strong>
                    {selectedVisit.company}
                  </strong>

                  {" "}— gaining practical exposure
                  to real-world operations and
                  connecting classroom learning with
                  professional practices.

                </p>

              </div>

              <div className="tp-details-wave">

                <svg
                  viewBox="0 0 1440 150"
                  preserveAspectRatio="none"
                >

                  <path
                    d="
                      M0,80
                      C180,145 370,145 540,82
                      C760,2 970,38 1140,77
                      C1270,108 1350,94 1440,55
                      L1440,150
                      L0,150
                      Z
                    "
                    fill="#fff"
                  />

                  <path
                    d="
                      M0,75
                      C180,140 370,140 540,77
                      C760,-3 970,33 1140,72
                      C1270,103 1350,89 1440,50
                    "
                    fill="none"
                    stroke="#ff7616"
                    strokeWidth="4"
                  />

                </svg>

              </div>

            </section>

            {/* INFO BAR */}

            <section className="tp-details-info-bar">

              <div className="tp-details-company-logo">

                <div className="tp-acymlogo-mark">
                  {selectedVisit.logo
                    ?.charAt(0)
                    .toUpperCase()}
                </div>

                <div>

                  <strong>
                    {selectedVisit.logo}
                  </strong>

                  <span>
                    {selectedVisit.category}
                  </span>

                </div>

              </div>

              <div className="tp-details-info-item">

                <CalendarDays />

                <div>

                  <small>
                    Date
                  </small>

                  <strong>
                    {selectedVisit.date}
                  </strong>

                </div>

              </div>

              <div className="tp-details-info-item">

                <MapPin />

                <div>

                  <small>
                    Location
                  </small>

                  <strong>
                    {selectedVisit.location}
                  </strong>

                </div>

              </div>

              <div className="tp-details-info-item">

                <BriefcaseBusiness />

                <div>

                  <small>
                    Category
                  </small>

                  <strong>
                    {selectedVisit.category}
                  </strong>

                </div>

              </div>

              <div className="tp-details-info-item">

                <Users />

                <div>

                  <small>
                    Students
                  </small>

                  <strong>
                    {selectedVisit.students}
                  </strong>

                </div>

              </div>

              <div className="tp-details-info-item">

                <Clock3 />

                <div>

                  <small>
                    Duration
                  </small>

                  <strong>
                    {selectedVisit.duration}
                  </strong>

                </div>

              </div>

              <button
                type="button"
                className="tp-details-gallery-button"
                onClick={() =>
                  document
                    .getElementById(
                      "tp-details-gallery"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >

                <Camera size={19} />

                <span>

                  View Gallery

                  <small>
                    (
                    {
                      selectedVisit
                        .galleryImages
                        .length
                    }
                    {" "}Photos)
                  </small>

                </span>

              </button>

            </section>

            {/* ABOUT + MAIN IMAGE */}

            <section className="tp-details-about">

              <div className="tp-details-about-text">

                <div className="tp-details-section-label">
                  ABOUT THE VISIT
                </div>

                <h2>
                  About the Visit
                </h2>

                <p>
                  {selectedVisit.description}
                </p>

                <div className="tp-details-learning-box">

                  <div className="tp-details-learning-heading">

                    <Lightbulb size={24} />

                    <h3>
                      Key Learnings
                    </h3>

                  </div>

                  <ul>

                    {selectedVisit.learnings.map(
                      (item, index) => (

                        <li key={index}>

                          <CheckCircle2 size={17} />

                          <span>
                            {item}
                          </span>

                        </li>

                      )
                    )}

                  </ul>

                </div>

              </div>

              <div className="tp-details-main-gallery">

                <div
                  className="tp-details-feature-photo"
                  onClick={() =>
                    openImagePreview(selectedVisit.galleryImages, 0)
                  }
                >

                  <img
                    src={
                      selectedVisit
                        .galleryImages[0]
                    }
                    alt="Industrial visit"
                  />

                  <div className="tp-photo-caption">

                    <strong>
                      Inside the Industry
                    </strong>

                    <span>
                      Click to view full image
                    </span>

                  </div>

                </div>

                <div className="tp-small-gallery">

                  {selectedVisit.galleryImages
                    .slice(1, 5)
                    .map((image, index) => (

                      <div
                        className="tp-small-gallery-image"
                        key={index}
                        onClick={() =>
                          openImagePreview(selectedVisit.galleryImages, index + 1)
                        }
                      >

                        <img
                          src={image}
                          alt={
                            `Visit photo ${
                              index + 2
                            }`
                          }
                        />

                      </div>

                    ))}

                </div>

              </div>

            </section>

            {/* FOUR CARDS */}

            <section className="tp-details-four-cards">

              <div className="tp-details-info-card purpose">

                <div className="tp-info-card-icon">
                  <Target size={23} />
                </div>

                <h3>
                  Purpose
                </h3>

                <p>
                  {selectedVisit.purpose}
                </p>

              </div>

              <div className="tp-details-info-card students">

                <div className="tp-info-card-icon">
                  <Users size={23} />
                </div>

                <h3>
                  What Students Saw
                </h3>

                <ul>

                  {selectedVisit.whatStudentsSaw.map(
                    (item, index) => (

                      <li key={index}>

                        <CheckCircle2 size={14} />

                        {item}

                      </li>

                    )
                  )}

                </ul>

              </div>

              <div className="tp-details-info-card activities">

                <div className="tp-info-card-icon">
                  <Settings size={23} />
                </div>

                <h3>
                  Activities
                </h3>

                <ul>

                  {selectedVisit.activities.map(
                    (item, index) => (

                      <li key={index}>

                        <CheckCircle2 size={14} />

                        {item}

                      </li>

                    )
                  )}

                </ul>

              </div>

              <div className="tp-details-info-card outcomes">

                <div className="tp-info-card-icon">
                  <Award size={23} />
                </div>

                <h3>
                  Outcomes
                </h3>

                <ul>

                  {selectedVisit.outcomes.map(
                    (item, index) => (

                      <li key={index}>

                        <CheckCircle2 size={14} />

                        {item}

                      </li>

                    )
                  )}

                </ul>

              </div>

            </section>

            {/* =================================================
                GALLERY
            ================================================= */}

            <section
              className="tp-details-gallery-section"
              id="tp-details-gallery"
            >

              <div className="tp-details-gallery-title">

                <div>

                  <span>
                    VISIT PHOTOGRAPHS
                  </span>

                  <h2>
                    Moments from the Visit
                  </h2>

                </div>

                <div className="tp-gallery-count">

                  <Camera size={18} />

                  {
                    selectedVisit
                      .galleryImages
                      .length
                  }

                  {" "}Photos

                </div>

              </div>

              <div className="tp-details-gallery-grid">

                {selectedVisit.galleryImages.map(
                  (image, index) => (

                    <div
                      className={`tp-gallery-photo ${
                        index === 0
                          ? "large"
                          : ""
                      }`}
                      key={index}
                      onClick={() =>
                        openImagePreview(selectedVisit.galleryImages, index)
                      }
                    >

                      <img
                        src={image}
                        alt={
                          `${selectedVisit.company} visit photo ${
                            index + 1
                          }`
                        }
                      />

                      <div className="tp-gallery-number">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </div>

                    </div>

                  )
                )}

              </div>

            </section>

            {/* FOOTER */}

            <section className="tp-details-bottom">

              <div className="tp-details-quote">

                <div className="tp-quote-icon">
                  <Quote size={27} />
                </div>

                <div>

                  <h3>
                    Small steps in the right
                    direction can make a big
                    difference in your future.
                  </h3>

                  <p>
                    — Yaduvanshi Degree College
                  </p>

                </div>

              </div>

              <div className="tp-coordinator">

                <div className="tp-coordinator-icon">
                  <GraduationCap size={24} />
                </div>

                <div>

                  <small>
                    Coordinator
                  </small>

                  <strong>
                    Training & Placement Cell,
                    <br />
                    Yaduvanshi Degree College
                  </strong>

                </div>

              </div>

              <div className="tp-details-orange-badge">

                <strong>
                  Industrial Visit
                </strong>

                <span>
                  More than a trip...
                </span>

                <span>
                  It's a step towards your future!
                </span>

              </div>

            </section>

          </div>

        </div>

      )}

      {selectedVisit && createPortal(
        <button
          type="button"
          className="tp-details-close"
          onClick={() => setSelectedVisit(null)}
          aria-label="Close visit details"
        >
          <X size={22} />
        </button>,
        document.body
      )}

      {/* =====================================================
          IMAGE LIGHTBOX
          
          Opens when ANY gallery image is clicked.
          The image is constrained and will not fill the
          entire browser window.
      ===================================================== */}

      {selectedImage && (

        <div
          className="tp-image-lightbox"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <div
            className="tp-image-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="tp-lightbox-close"
              onClick={() =>
                setSelectedImage(null)
              }
              aria-label="Close image"
            >
              <X size={22} />
            </button>

            <img
              src={selectedImage.images[selectedImage.index]}
              alt={`${selectedVisit?.company || "Industrial visit"} photo ${selectedImage.index + 1}`}
            />

            {selectedImage.images.length > 1 && (
              <>
                <button
                  type="button"
                  className="tp-lightbox-nav tp-lightbox-previous"
                  onClick={() => moveImagePreview(-1)}
                  aria-label="Previous industrial visit photo"
                >
                  <ChevronLeft size={25} />
                </button>

                <button
                  type="button"
                  className="tp-lightbox-nav tp-lightbox-next"
                  onClick={() => moveImagePreview(1)}
                  aria-label="Next industrial visit photo"
                >
                  <ChevronRight size={25} />
                </button>

                <div className="tp-lightbox-count" aria-live="polite">
                  {selectedImage.index + 1} / {selectedImage.images.length}
                </div>
              </>
            )}

          </div>

        </div>

      )}

    </div>
  );
};

export default TrainingPlacement;