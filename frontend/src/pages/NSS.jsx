import React from "react";
import {
  Users,
  HeartHandshake,
  Leaf,
  Droplets,
  Megaphone,
  HeartPulse,
  GraduationCap,
  CalendarDays,
  ArrowRight,
  Camera,
  HandHeart,
  Globe2,
  ShieldCheck,
  Sparkles,
  Trees,
  Stethoscope,
  School,
  Quote,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { apiFetch } from "../lib/api";

const activities = [
  {
    title: "Blood Donation Camp",
    text: "Voluntary blood donation and awareness activities for community welfare.",
    image: "/images/nss/blood-donation.jpg",
    icon: HeartPulse,
  },
  {
    title: "Tree Plantation Drive",
    text: "Students participate in plantation activities and promote environmental awareness.",
    image: "/images/nss/tree-plantation.jpg",
    icon: Trees,
  },
  {
    title: "Cleanliness Campaign",
    text: "Community cleanliness drives promoting hygiene and responsible citizenship.",
    image: "/images/nss/cleanliness.jpg",
    icon: Leaf,
  },
  {
    title: "Awareness Programs",
    text: "Awareness campaigns addressing social, health and environmental issues.",
    image: "/images/nss/awareness.jpg",
    icon: Megaphone,
  },
  {
    title: "Rural & Community Service",
    text: "Students connect with communities and participate in social service activities.",
    image: "/images/nss/community-service.jpg",
    icon: Users,
  },
];

const galleryImages = [
  {
    image: "/images/nss/nss-gallery-1.jpg",
    title: "Community Service",
  },
  {
    image: "/images/nss/nss-gallery-2.jpg",
    title: "Tree Plantation",
  },
  {
    image: "/images/nss/nss-gallery-3.jpg",
    title: "Cleanliness Drive",
  },
  {
    image: "/images/nss/nss-gallery-4.jpg",
    title: "NSS Awareness Camp",
  },
  {
    image: "/images/nss/nss-gallery-5.jpg",
    title: "Blood Donation Camp",
  },
  {
    image: "/images/nss/nss-gallery-6.jpg",
    title: "Village Visit",
  },
  {
    image: "/images/nss/nss-gallery-7.jpg",
    title: "Student Volunteers",
  },
  {
    image: "/images/nss/nss-gallery-8.jpg",
    title: "Social Awareness",
  },
  {
    image: "/images/nss/nss-gallery-9.jpg",
    title: "NSS Special Camp",
  },
  {
    image: "/images/nss/nss-gallery-10.jpg",
    title: "Environmental Activity",
  },
];

const benefits = [
  {
    title: "Community Service",
    text: "Understand the importance of helping society and working for the community.",
    icon: HeartHandshake,
  },
  {
    title: "Personality Development",
    text: "Develop confidence, communication skills and a responsible attitude.",
    icon: Users,
  },
  {
    title: "Leadership Qualities",
    text: "Students get opportunities to organize and participate in meaningful activities.",
    icon: Sparkles,
  },
  {
    title: "Social Responsibility",
    text: "Build awareness about social issues and develop a spirit of service.",
    icon: HandHeart,
  },
  {
    title: "Environmental Awareness",
    text: "Participate in plantation, cleanliness and environmental protection activities.",
    icon: Leaf,
  },
];

const yearlyActivities = [
  {
    year: "2025–26",
    title: "Community Service",
    text: "Social awareness and community welfare activities.",
  },
  {
    year: "2024–25",
    title: "Health Camp",
    text: "Health awareness and blood donation activities.",
  },
  {
    year: "2023–24",
    title: "Cleanliness Drive",
    text: "Cleanliness, sanitation and plantation initiatives.",
  },
  {
    year: "2022–23",
    title: "Awareness Rally",
    text: "Awareness campaigns and village/community visits.",
  },
  {
    year: "2021–22",
    title: "Education Support",
    text: "Educational awareness and social development activities.",
  },
];

const NSS = () => {
  const [liveActivities, setLiveActivities] = React.useState([]);
  const [liveGalleryImages, setLiveGalleryImages] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const [{ activities = [] }, { gallery = [] }] = await Promise.all([
          apiFetch("/api/nss-activities"),
          apiFetch("/api/gallery"),
        ]);

        if (activities.length > 0) {
        setLiveActivities(
          activities.map((item) => ({
            title: item.title,
            text: item.description,
            image: item.image_url || "/images/nss/default.jpg",
            icon: HeartPulse,
          }))
        );
        }

        if (gallery.length > 0) {
        setLiveGalleryImages(
          gallery.slice(0, 10).map((item) => ({
            image: item.image_url,
            title: item.title,
          }))
        );
        }
      } catch (error) {
        console.error("Error fetching NSS content:", error);
      }
    };

    loadData();
  }, []);

  const activityData = liveActivities.length ? liveActivities : activities;
  const galleryData = liveGalleryImages.length ? liveGalleryImages : galleryImages;

  return (
    <div className="nss-page">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="nss-hero">

        <div className="nss-hero-left">

          <div className="nss-hero-pattern"></div>

          <div className="nss-hero-content">

            <div className="nss-kicker">
              <Users size={18} />
              FACILITIES & ACTIVITIES
            </div>

            <h1>
              National Service
              <br />
              Scheme <span>(NSS)</span>
            </h1>

            <h2>Not Me But You</h2>

            <p>
              The National Service Scheme at Yaduvanshi Degree College
              encourages students to develop social responsibility,
              leadership qualities and a spirit of service through
              meaningful community activities.
            </p>

            <div className="nss-hero-buttons">

              <Link
                to="/admission/online-admission"
                className="nss-orange-btn"
              >
                Join NSS
                <ArrowRight size={17} />
              </Link>

              <a
                href="#nss-gallery"
                className="nss-outline-btn"
              >
                View Gallery
              </a>

            </div>

          </div>

          <div className="nss-hero-seal">

            <div className="nss-seal-circle">

              <img
                src="/images/nss/nss-logo.png"
                alt="National Service Scheme"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="nss-seal-fallback">
                <Globe2 size={52} />
                <span>NSS</span>
                <small>NOT ME BUT YOU</small>
              </div>

            </div>

          </div>

        </div>

        <div className="nss-hero-image">

          <img
            src="/images/nss/nss-hero.jpg"
            alt="NSS students participating in community service"
          />

          <div className="nss-image-label">
            <Users size={19} />
            <div>
              <strong>Active NSS Volunteers</strong>
              <span>Service • Leadership • Community</span>
            </div>
          </div>

        </div>

        <div className="nss-hero-wave">
          <svg
            viewBox="0 0 1536 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M0,120
                C170,210 350,205 545,138
                C745,70 920,90 1100,126
                C1260,158 1380,137 1536,45
                L1536,220
                L0,220
                Z
              "
              fill="#fffdf9"
            />

            <path
              d="
                M0,112
                C170,202 350,197 545,130
                C745,62 920,82 1100,118
                C1260,150 1380,129 1536,37
              "
              fill="none"
              stroke="#ff7600"
              strokeWidth="5"
            />
          </svg>
        </div>

      </section>


      {/* =========================================================
          ABOUT NSS
      ========================================================== */}
      <section className="nss-section nss-about">

        <div className="nss-container">

          <div className="nss-about-grid">

            <div className="nss-about-text">

              <div className="nss-section-label">
                <span></span>
                ABOUT NSS
              </div>

              <h2>
                What is National
                <br />
                Service Scheme <em>(NSS)</em>?
              </h2>

              <p>
                The National Service Scheme (NSS) is a student-focused
                community service programme that provides opportunities
                to young people to participate in social welfare,
                community development and service activities.
              </p>

              <p>
                At Yaduvanshi Degree College, NSS activities are designed
                to encourage students to understand their responsibilities
                towards society while developing confidence, leadership,
                teamwork and social awareness.
              </p>

              <div className="nss-about-note">
                <Quote size={24} />

                <div>
                  <p>
                    “The real strength of a nation lies in the youth
                    who care for the society.”
                  </p>

                  <span>— NSS</span>
                </div>
              </div>

            </div>


            <div className="nss-about-right">

              <div className="nss-benefits-grid">

                {benefits.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      className="nss-benefit-card"
                      key={index}
                    >
                      <div className="nss-benefit-icon">
                        <Icon size={24} />
                      </div>

                      <h3>{item.title}</h3>

                      <p>{item.text}</p>
                    </div>
                  );

                })}

              </div>

              <div className="nss-about-image">

                <img
                  src="/images/nss/nss-about.jpg"
                  alt="NSS student volunteer"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ACTIVITIES
      ========================================================== */}
      <section className="nss-section nss-activities">

        <div className="nss-container">

          <div className="nss-section-heading-row">

            <div>

              <div className="nss-section-label">
                <span></span>
                OUR NSS ACTIVITIES
              </div>

              <h2>
                Service Today,
                <em> A Better Tomorrow</em>
              </h2>

              <p>
                NSS volunteers participate in activities that create
                awareness, encourage social responsibility and bring
                positive change to the community.
              </p>

            </div>

            <a
              href="#nss-gallery"
              className="nss-small-btn"
            >
              View All Activities
              <ArrowRight size={16} />
            </a>

          </div>


          <div className="nss-activity-grid">

            {activityData.map((activity, index) => {

              const Icon = activity.icon;

              return (
                <article
                  className="nss-activity-card"
                  key={index}
                >

                  <div className="nss-activity-image">

                    <img
                      src={activity.image}
                      alt={activity.title}
                    />

                    <div className="nss-activity-number">
                      0{index + 1}
                    </div>

                  </div>

                  <div className="nss-activity-content">

                    <div className="nss-activity-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3>{activity.title}</h3>
                      <p>{activity.text}</p>
                    </div>

                  </div>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          GALLERY
      ========================================================== */}
      <section
        className="nss-section nss-gallery-section"
        id="nss-gallery"
      >

        <div className="nss-container">

          <div className="nss-section-heading-row">

            <div>

              <div className="nss-section-label">
                <span></span>
                GLIMPSES OF NSS ACTIVITIES
              </div>

              <h2>
                Moments of Service,
                <em> Spirit of Unity</em>
              </h2>

              <p>
                Explore memorable moments from NSS activities,
                community programmes, awareness drives and
                student volunteer initiatives.
              </p>

            </div>

            <a
              href="#nss-gallery"
              className="nss-small-btn"
            >
              <Camera size={16} />
              View More Photos
            </a>

          </div>


          <div className="nss-gallery-grid">

            {galleryData.map((item, index) => (

              <div
                className="nss-gallery-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="nss-gallery-overlay">

                  <Camera size={17} />

                  <span>{item.title}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          YEAR WISE NSS
      ========================================================== */}
      <section className="nss-section nss-years">

        <div className="nss-container">

          <div className="nss-years-box">

            <div className="nss-years-intro">

              <div className="nss-section-label">
                <span></span>
                NSS EVERY YEAR
              </div>

              <h2>
                Our Journey Through
                <br />
                the <em>Years</em>
              </h2>

              <p>
                NSS activities can be presented year-wise so students,
                parents and visitors can easily explore the initiatives
                conducted during each academic session.
              </p>

            </div>


            <div className="nss-years-list">

              {yearlyActivities.map((item, index) => (

                <Link
                  to={`/facilities/nss/${item.year
                    .replace("–", "-")
                    .replace(" ", "-")
                    .toLowerCase()}`}
                  className="nss-year-card"
                  key={index}
                >

                  <div className="nss-year-icon">
                    <CalendarDays size={23} />
                  </div>

                  <strong>{item.year}</strong>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <span className="nss-year-arrow">
                    <ArrowRight size={15} />
                  </span>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY NSS
      ========================================================== */}
      <section className="nss-why">

        <div className="nss-why-pattern"></div>

        <div className="nss-container">

          <div className="nss-why-grid">

            <div>

              <div className="nss-why-label">
                <span></span>
                WHY JOIN NSS?
              </div>

              <h2>
                Be a Part of
                <br />
                <em>Something Meaningful</em>
              </h2>

              <p>
                Join NSS and experience opportunities to serve,
                learn, lead and grow while contributing positively
                to society.
              </p>

            </div>


            <div className="nss-why-points">

              <div>
                <CheckCircle2 size={20} />
                <span>Develop leadership and teamwork</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Participate in community activities</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Build social awareness</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Gain practical life experience</span>
              </div>

            </div>


            <div className="nss-why-action">

              <div className="nss-why-icon">
                <HandHeart size={36} />
              </div>

              <h3>
                Serve · Learn · Grow
              </h3>

              <p>
                Become an active part of the Yaduvanshi NSS family.
              </p>

              <Link
                to="/admission/online-admission"
                className="nss-orange-btn"
              >
                Join NSS
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ADMISSION CTA
      ========================================================== */}
      <section className="nss-admission">

        <div className="nss-container">

          <div className="nss-admission-box">

            <div className="nss-admission-icon">
              <GraduationCap size={34} />
            </div>

            <div>

              <div className="nss-section-label">
                <span></span>
                BUILD YOUR FUTURE
              </div>

              <h2>
                Learn. Serve.
                <em> Grow.</em>
              </h2>

              <p>
                Join Yaduvanshi Degree College and become part of
                an academic environment that encourages learning,
                leadership and social responsibility.
              </p>

            </div>

            <Link
              to="/admission/online-admission"
              className="nss-orange-btn"
            >
              Apply for Admission
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          PAGE CSS
      ========================================================== */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .nss-page {
          width: 100%;
          overflow: hidden;
          background: #fffdf9;
          color: #092f5f;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .nss-container {
          width: min(1180px, calc(100% - 80px));
          margin: 0 auto;
        }


        /* =========================================
           HERO
        ========================================== */

        .nss-hero {
          position: relative;
          min-height: 520px;
          display: flex;
          overflow: hidden;
          background: #052b59;
        }

        .nss-hero-left {
          position: relative;
          z-index: 3;
          width: 56%;
          min-height: 520px;
          background:
            linear-gradient(
              135deg,
              #03234a 0%,
              #052b59 60%,
              #07396e 100%
            );
          color: white;
          overflow: hidden;
        }

        .nss-hero-pattern {
          position: absolute;
          width: 430px;
          height: 430px;
          right: -120px;
          top: 35px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,.07);
          box-shadow:
            0 0 0 35px rgba(255,255,255,.025),
            0 0 0 70px rgba(255,255,255,.018);
        }

        .nss-hero-content {
          position: relative;
          z-index: 3;
          width: min(590px, 90%);
          padding: 62px 35px 110px 48px;
        }

        .nss-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ff8a00;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .6px;
          margin-bottom: 14px;
        }

        .nss-hero h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(45px, 5vw, 72px);
          line-height: .98;
          letter-spacing: -2px;
        }

        .nss-hero h1 span {
          color: #ff7600;
        }

        .nss-hero h2 {
          margin: 14px 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          color: #ffffff;
        }

        .nss-hero-content > p {
          max-width: 540px;
          margin: 0;
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255,255,255,.91);
        }

        .nss-hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .nss-orange-btn,
        .nss-outline-btn,
        .nss-small-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          border-radius: 30px;
          transition: .25s ease;
          cursor: pointer;
        }

        .nss-orange-btn {
          padding: 13px 22px;
          background: #ff7600;
          color: white;
          font-weight: 800;
          border: 1px solid #ff7600;
          box-shadow: 0 8px 20px rgba(255,118,0,.20);
        }

        .nss-orange-btn:hover {
          transform: translateY(-2px);
          background: #e96300;
        }

        .nss-outline-btn {
          padding: 12px 22px;
          color: white;
          border: 1px solid rgba(255,255,255,.85);
          font-weight: 700;
        }

        .nss-outline-btn:hover {
          background: white;
          color: #052b59;
        }


        /* HERO SEAL */

        .nss-hero-seal {
          position: absolute;
          z-index: 8;
          right: 22px;
          top: 85px;
          width: 155px;
          height: 155px;
        }

        .nss-seal-circle {
          width: 155px;
          height: 155px;
          border-radius: 50%;
          border: 4px solid white;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,.25);
        }

        .nss-seal-circle img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 8px;
        }

        .nss-seal-fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #052b59;
          text-align: center;
        }

        .nss-seal-fallback span {
          font-weight: 900;
          font-size: 24px;
        }

        .nss-seal-fallback small {
          font-size: 7px;
          font-weight: 800;
        }


        /* HERO IMAGE */

        .nss-hero-image {
          position: absolute;
          z-index: 2;
          right: 0;
          top: 0;
          width: 51%;
          height: 520px;
          overflow: hidden;
        }

        .nss-hero-image::before {
          content: "";
          position: absolute;
          z-index: 2;
          left: -1px;
          top: 0;
          width: 150px;
          height: 100%;
          background: linear-gradient(
            90deg,
            #052b59 0%,
            rgba(5,43,89,.7) 25%,
            rgba(5,43,89,0) 100%
          );
        }

        .nss-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .nss-image-label {
          position: absolute;
          z-index: 4;
          right: 28px;
          bottom: 70px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 15px;
          background: #ff7600;
          color: white;
          box-shadow: 0 10px 25px rgba(0,0,0,.25);
        }

        .nss-image-label strong,
        .nss-image-label span {
          display: block;
        }

        .nss-image-label strong {
          font-size: 13px;
        }

        .nss-image-label span {
          margin-top: 2px;
          font-size: 11px;
          opacity: .9;
        }


        /* WAVE */

        .nss-hero-wave {
          position: absolute;
          z-index: 10;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 125px;
          pointer-events: none;
        }

        .nss-hero-wave svg {
          display: block;
          width: 100%;
          height: 100%;
        }


        /* =========================================
           COMMON SECTIONS
        ========================================== */

        .nss-section {
          padding: 70px 0;
        }

        .nss-section-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 9px;
          color: #073c73;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .5px;
        }

        .nss-section-label span {
          display: inline-block;
          width: 23px;
          height: 3px;
          background: #ff7600;
          border-radius: 4px;
        }

        .nss-section h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          color: #073b70;
          font-size: clamp(31px, 3.4vw, 46px);
          line-height: 1.08;
          letter-spacing: -.8px;
        }

        .nss-section h2 em {
          color: #ff7600;
          font-style: normal;
        }

        .nss-section p {
          color: #15558a;
          line-height: 1.65;
        }


        /* =========================================
           ABOUT
        ========================================== */

        .nss-about {
          background: #fffdf9;
        }

        .nss-about-grid {
          display: grid;
          grid-template-columns: .9fr 1.35fr;
          gap: 55px;
          align-items: center;
        }

        .nss-about-text > p {
          max-width: 550px;
          font-size: 15px;
          margin: 15px 0;
        }

        .nss-about-note {
          margin-top: 22px;
          padding: 20px;
          display: flex;
          gap: 15px;
          align-items: flex-start;
          background: #f5f6f7;
          border-radius: 13px;
          border: 1px solid #e9ecef;
        }

        .nss-about-note svg {
          flex: 0 0 auto;
          color: #ff7600;
        }

        .nss-about-note p {
          margin: 0;
          font-family: Georgia, serif;
          font-style: italic;
          color: #143c68;
          font-size: 15px;
        }

        .nss-about-note span {
          display: block;
          margin-top: 8px;
          text-align: right;
          font-weight: 800;
          color: #123e6b;
        }

        .nss-about-right {
          display: grid;
          grid-template-columns: 1fr 180px;
          gap: 20px;
          align-items: stretch;
        }

        .nss-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }

        .nss-benefit-card {
          padding: 20px 14px;
          background: white;
          border-radius: 12px;
          border: 1px solid #edf0f2;
          box-shadow: 0 7px 25px rgba(0,0,0,.06);
          text-align: center;
          transition: .25s ease;
        }

        .nss-benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.10);
        }

        .nss-benefit-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2f8fc;
          color: #ff7600;
        }

        .nss-benefit-card h3 {
          margin: 0;
          font-size: 13px;
          color: #073b70;
        }

        .nss-benefit-card p {
          margin: 6px 0 0;
          font-size: 11px;
          line-height: 1.5;
        }

        .nss-about-image {
          height: 100%;
          min-height: 310px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,.12);
        }

        .nss-about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


        /* =========================================
           ACTIVITIES
        ========================================== */

        .nss-activities {
          background: #fbf8f1;
        }

        .nss-section-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 30px;
        }

        .nss-section-heading-row p {
          max-width: 620px;
          margin-bottom: 0;
        }

        .nss-small-btn {
          padding: 11px 18px;
          border: 1px solid #ff7600;
          color: #073b70;
          white-space: nowrap;
          font-weight: 800;
          font-size: 13px;
          background: white;
        }

        .nss-small-btn:hover {
          background: #ff7600;
          color: white;
        }

        .nss-activity-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 17px;
        }

        .nss-activity-card {
          overflow: hidden;
          border-radius: 13px;
          background: white;
          border: 1px solid #ececec;
          box-shadow: 0 7px 22px rgba(0,0,0,.05);
        }

        .nss-activity-image {
          height: 180px;
          position: relative;
          overflow: hidden;
        }

        .nss-activity-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .nss-activity-card:hover img {
          transform: scale(1.06);
        }

        .nss-activity-number {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 5px 8px;
          background: #ff7600;
          color: white;
          font-size: 10px;
          font-weight: 900;
          border-radius: 6px;
        }

        .nss-activity-content {
          display: flex;
          gap: 10px;
          padding: 15px;
        }

        .nss-activity-icon {
          flex: 0 0 auto;
          color: #ff7600;
        }

        .nss-activity-content h3 {
          margin: 0;
          color: #073b70;
          font-size: 14px;
        }

        .nss-activity-content p {
          margin: 6px 0 0;
          font-size: 11px;
          line-height: 1.5;
        }


        /* =========================================
           GALLERY
        ========================================== */

        .nss-gallery-section {
          background: #fffdf9;
        }

        .nss-gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }

        .nss-gallery-card {
          height: 165px;
          border-radius: 11px;
          overflow: hidden;
          position: relative;
          background: #eee;
        }

        .nss-gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .nss-gallery-card:hover img {
          transform: scale(1.08);
        }

        .nss-gallery-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px;
          color: white;
          background: linear-gradient(
            transparent,
            rgba(0,30,65,.92)
          );
          font-size: 11px;
          font-weight: 700;
        }


        /* =========================================
           YEARS
        ========================================== */

        .nss-years {
          background: #edf6fc;
        }

        .nss-years-box {
          display: grid;
          grid-template-columns: .7fr 1.7fr;
          gap: 35px;
          align-items: center;
          padding: 35px;
          border: 1px solid #dbeaf4;
          border-radius: 18px;
          background: rgba(255,255,255,.65);
        }

        .nss-years-intro h2 {
          font-size: 35px;
        }

        .nss-years-intro p {
          max-width: 350px;
          font-size: 14px;
        }

        .nss-years-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .nss-year-card {
          position: relative;
          padding: 17px;
          background: white;
          border-radius: 12px;
          text-decoration: none;
          color: #073b70;
          border: 1px solid #edf0f2;
          box-shadow: 0 6px 20px rgba(0,0,0,.05);
          transition: .25s ease;
        }

        .nss-year-card:hover {
          transform: translateY(-4px);
          border-color: #ff7600;
        }

        .nss-year-icon {
          width: 40px;
          height: 40px;
          border-radius: 9px;
          background: #fff4e9;
          color: #ff7600;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .nss-year-card strong {
          color: #ff7600;
          font-size: 12px;
        }

        .nss-year-card h3 {
          margin: 5px 0;
          font-size: 13px;
        }

        .nss-year-card p {
          margin: 0;
          font-size: 10px;
          line-height: 1.45;
        }

        .nss-year-arrow {
          position: absolute;
          right: 13px;
          bottom: 13px;
          color: #ff7600;
        }


        /* =========================================
           WHY NSS
        ========================================== */

        .nss-why {
          position: relative;
          overflow: hidden;
          padding: 55px 0;
          color: white;
          background:
            linear-gradient(
              120deg,
              #042653,
              #063a70
            );
        }

        .nss-why-pattern {
          position: absolute;
          inset: 0;
          opacity: .08;
          background-image:
            radial-gradient(
              circle at 20% 40%,
              white 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        .nss-why-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 1fr .8fr;
          gap: 45px;
          align-items: center;
        }

        .nss-why-label {
          display: flex;
          gap: 8px;
          align-items: center;
          font-size: 11px;
          font-weight: 800;
          color: #ff8a00;
        }

        .nss-why-label span {
          width: 25px;
          height: 3px;
          background: #ff7600;
        }

        .nss-why h2 {
          margin: 9px 0 12px;
          font-family: Georgia, serif;
          font-size: 42px;
          line-height: 1.05;
        }

        .nss-why h2 em {
          color: #ff7600;
          font-style: normal;
        }

        .nss-why p {
          color: rgba(255,255,255,.85);
          line-height: 1.6;
          font-size: 14px;
        }

        .nss-why-points {
          display: grid;
          gap: 14px;
        }

        .nss-why-points div {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 13px;
        }

        .nss-why-points svg {
          color: #ff7600;
          flex: 0 0 auto;
        }

        .nss-why-action {
          padding: 23px;
          text-align: center;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 15px;
          background: rgba(255,255,255,.06);
        }

        .nss-why-icon {
          color: #ff7600;
        }

        .nss-why-action h3 {
          margin: 10px 0 0;
          font-family: Georgia, serif;
          font-size: 24px;
        }

        .nss-why-action p {
          font-size: 12px;
        }


        /* =========================================
           ADMISSION CTA
        ========================================== */

        .nss-admission {
          padding: 55px 0;
          background: #fffdf9;
        }

        .nss-admission-box {
          display: grid;
          grid-template-columns: 70px 1fr auto;
          gap: 25px;
          align-items: center;
          padding: 30px 35px;
          border-radius: 17px;
          background: #f2f8fc;
          border: 1px solid #dceaf3;
        }

        .nss-admission-icon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ff7600;
          color: white;
        }

        .nss-admission-box h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 33px;
          color: #073b70;
        }

        .nss-admission-box h2 em {
          color: #ff7600;
          font-style: normal;
        }

        .nss-admission-box p {
          margin: 7px 0 0;
          font-size: 13px;
          max-width: 650px;
        }


        /* =========================================
           RESPONSIVE
        ========================================== */

        @media (max-width: 1100px) {

          .nss-container {
            width: min(94%, 1050px);
          }

          .nss-activity-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .nss-gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .nss-about-grid {
            grid-template-columns: 1fr;
          }

          .nss-about-right {
            grid-template-columns: 1fr 200px;
          }

          .nss-why-grid {
            grid-template-columns: 1fr 1fr;
          }

          .nss-why-action {
            grid-column: 1 / -1;
          }

        }


        @media (max-width: 900px) {

          .nss-hero {
            min-height: 760px;
            display: block;
          }

          .nss-hero-left {
            width: 100%;
            min-height: 520px;
          }

          .nss-hero-image {
            width: 100%;
            height: 330px;
            top: auto;
            bottom: 0;
          }

          .nss-hero-image::before {
            width: 100%;
            height: 100px;
            top: 0;
            left: 0;
            background: linear-gradient(
              180deg,
              #052b59,
              rgba(5,43,89,0)
            );
          }

          .nss-hero-content {
            padding: 55px 25px 120px;
          }

          .nss-hero-seal {
            right: 30px;
            top: 105px;
            width: 110px;
            height: 110px;
          }

          .nss-seal-circle {
            width: 110px;
            height: 110px;
          }

          .nss-about-right {
            grid-template-columns: 1fr;
          }

          .nss-about-image {
            height: 280px;
            min-height: 0;
          }

          .nss-years-box {
            grid-template-columns: 1fr;
          }

          .nss-years-intro p {
            max-width: none;
          }

          .nss-why-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .nss-why-action {
            grid-column: auto;
          }

          .nss-admission-box {
            grid-template-columns: 60px 1fr;
          }

          .nss-admission-box > .nss-orange-btn {
            grid-column: 1 / -1;
            justify-self: start;
          }

        }


        @media (max-width: 650px) {

          .nss-container {
            width: calc(100% - 30px);
          }

          .nss-section {
            padding: 50px 0;
          }

          .nss-hero {
            min-height: 720px;
          }

          .nss-hero-left {
            min-height: 470px;
          }

          .nss-hero-content {
            width: 100%;
            padding: 40px 20px 105px;
          }

          .nss-hero h1 {
            font-size: 44px;
          }

          .nss-hero h2 {
            font-size: 23px;
          }

          .nss-hero-content > p {
            font-size: 14px;
          }

          .nss-hero-seal {
            display: none;
          }

          .nss-hero-image {
            height: 300px;
          }

          .nss-image-label {
            right: 15px;
            bottom: 42px;
            padding: 9px 12px;
          }

          .nss-section-heading-row {
            display: block;
          }

          .nss-section-heading-row .nss-small-btn {
            margin-top: 15px;
          }

          .nss-benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .nss-activity-grid {
            grid-template-columns: 1fr;
          }

          .nss-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .nss-gallery-card {
            height: 135px;
          }

          .nss-years-box {
            padding: 20px;
          }

          .nss-years-list {
            grid-template-columns: 1fr 1fr;
          }

          .nss-why h2 {
            font-size: 34px;
          }

          .nss-admission-box {
            grid-template-columns: 1fr;
          }

          .nss-admission-icon {
            width: 54px;
            height: 54px;
          }

        }


        @media (max-width: 420px) {

          .nss-benefits-grid {
            grid-template-columns: 1fr;
          }

          .nss-years-list {
            grid-template-columns: 1fr;
          }

          .nss-gallery-grid {
            grid-template-columns: 1fr;
          }

          .nss-gallery-card {
            height: 190px;
          }

        }

      `}</style>

    </div>
  );
};

export default NSS;