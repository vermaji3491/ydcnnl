import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Bus,
  ShieldCheck,
  Clock3,
  Route,
  Headphones,
  Navigation,
  UserCheck,
  Map,
  Info,
  PhoneCall,
  Home,
  Download,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const Transportation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <ShieldCheck />,
      title: "Safe & Secure",
      text: "Well-trained staff with GPS tracking & safety measures.",
    },
    {
      icon: <Bus />,
      title: "Comfortable Buses",
      text: "AC/Non-AC buses with clean and hygienic interiors.",
    },
    {
      icon: <Clock3 />,
      title: "On-Time Service",
      text: "Regular & punctual pick-up and drop facilities.",
    },
    {
      icon: <Route />,
      title: "Wide Coverage",
      text: "Multiple routes across Narnaul and nearby areas.",
    },
    {
      icon: <Headphones />,
      title: "24x7 Support",
      text: "Dedicated transport team for student assistance.",
    },
  ];

  const buses = [
    {
      image: "/images/bus2.png",
      title: "AC Buses",
      text: "For a more comfortable travel experience.",
    },
    {
      image: "/images/bus3.png",
      title: "Non-AC Buses",
      text: "Well-maintained and spacious seating.",
    },
    {
      image: "/images/bus4.png",
      title: "GPS Tracking",
      text: "Real-time tracking for added safety.",
    },
    {
      image: "/images/bus5.png",
      title: "Trained Drivers",
      text: "Experienced and verified drivers.",
    },
  ];

  const routesLeft = [
    "Narnaul (Main Route)",
    "Mahendragarh",
    "Ateli",
    "Nangal Chaudhary",
    "Rewari",
    "Bhiwani",
  ];

  const routesRight = [
    "Jatusana",
    "Kanina",
    "Kosli",
    "Rajound",
    "Tosham",
    "Other Nearby Areas",
  ];

  const information = [
    {
      icon: <Clock3 />,
      title: "Bus Timing",
      text: (
        <>
          Morning: 6:30 AM - 8:30 AM
          <br />
          Evening: 3:30 PM - 5:30 PM
          <br />
          <small>(Timing may vary as per route)</small>
        </>
      ),
    },
    {
      icon: <Bus />,
      title: "Bus Pass",
      text: "Issued at college office after admission confirmation.",
    },
    {
      icon: <PhoneCall />,
      title: "Contact for Transport",
      text: (
        <>
          +91 8607062323 (Transport Incharge)
          <br />
          transport@yaduvanshigroup.edu.in
        </>
      ),
    },
    {
      icon: <Home />,
      title: "Lost & Found",
      text: "Please contact the transport office immediately.",
    },
  ];

  const faqs = [
    "Is transport facility compulsory for all students?",
    "How can I know my route and timing?",
    "What if my bus is delayed?",
    "Can I change my bus route?",
    "Is there a separate transport facility for girls?",
  ];

  return (
    <div className="transport-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="transport-hero">

        <div className="transport-hero-left">

          <div className="transport-container">

            <div className="transport-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/facilities">Facilities</Link>
              <span>›</span>
              <span>Transport</span>
            </div>

            <div className="transport-label">
              FACILITIES
            </div>

            <h1>Transport</h1>

            <div className="transport-tagline">
              <span>Safe Journey</span>
              <b>|</b>
              <span>Comfortable Ride</span>
              <b>|</b>
              <span>Bright Future</span>
            </div>

            <p className="transport-hero-description">
              At Yaduvanshi Degree College, we understand the importance
              of safe and reliable transportation for our students. Our
              well-maintained fleet of buses ensures comfortable, secure
              and punctual travel to and from the college, covering
              multiple routes across Narnaul and nearby areas.
            </p>

          </div>
        </div>

        <div className="transport-hero-image">
          <img
            src="/images/bus1.png"
            alt="Yaduvanshi College Transport"
          />
        </div>

        <svg
          className="transport-wave"
          viewBox="0 0 1536 150"
          preserveAspectRatio="none"
        >
          <path
            className="transport-wave-orange"
            d="M0,102 C190,142 370,145 570,125 C790,102 930,117 1100,128 C1260,139 1400,126 1536,88"
          />

          <path
            className="transport-wave-white"
            d="M0,110 C190,150 370,153 570,133 C790,110 930,125 1100,136 C1260,147 1400,134 1536,96 L1536,150 L0,150 Z"
          />
        </svg>
      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="transport-features">
        <div className="transport-container">

          <div className="transport-feature-grid">

            {features.map((item, index) => (
              <div className="transport-feature" key={index}>

                <div className="transport-feature-icon">
                  {React.cloneElement(item.icon, {
                    size: 24,
                    strokeWidth: 2,
                  })}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          BUS FLEET + ROUTES
      ===================================================== */}
      <section className="transport-main">
        <div className="transport-container">

          <div className="transport-two-column">

            {/* BUS FLEET */}
            <div className="transport-panel fleet-panel">

              <div className="transport-panel-heading">

                <div className="transport-heading-icon">
                  <Bus size={23} />
                </div>

                <div>
                  <h2>Our Bus Fleet</h2>

                  <p>
                    We have a modern fleet of buses to ensure a safe,
                    comfortable and hassle-free journey for all our students.
                  </p>
                </div>

              </div>

              <div className="bus-grid">

                {buses.map((bus, index) => (
                  <div className="bus-card" key={index}>

                    <div className="bus-image">
                      <img
                        src={bus.image}
                        alt={bus.title}
                      />
                    </div>

                    <div className="bus-card-content">

                      <h3>{bus.title}</h3>

                      <p>{bus.text}</p>

                    </div>

                  </div>
                ))}

              </div>

            </div>


            {/* BUS ROUTES */}
            <div className="transport-panel routes-panel">

              <div className="transport-panel-heading">

                <div className="transport-heading-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <h2>Bus Routes</h2>

                  <p>
                    We cover a wide range of areas to make your journey easier.
                  </p>
                </div>

              </div>

              <div className="route-columns">

                <div className="route-list">

                  {routesLeft.map((route, index) => (
                    <div className="route-item" key={index}>
                      <MapPin size={15} />
                      <span>{route}</span>
                    </div>
                  ))}

                </div>

                <div className="route-list">

                  {routesRight.map((route, index) => (
                    <div className="route-item" key={index}>
                      <MapPin size={15} />
                      <span>{route}</span>
                    </div>
                  ))}

                </div>

              </div>

              <button className="small-blue-button">
                View Complete Route Map
                <ArrowRight size={14} />
              </button>

            </div>

          </div>


          {/* =================================================
              MAP + IMPORTANT INFORMATION
          ================================================= */}
          <div className="transport-map-row">

            {/* MAP */}
            <div className="transport-panel map-panel">

              <div className="transport-panel-heading">

                <div className="transport-heading-icon">
                  <Map size={23} />
                </div>

                <div>
                  <h2>Our Bus Routes Map</h2>

                  <p>
                    Find the nearest stop and plan your journey with ease.
                  </p>
                </div>

              </div>

              <div className="map-content">

                <div className="fake-map">

                  <div className="map-center">
                    <MapPin size={30} />
                    <strong>Narnaul</strong>
                  </div>

                  <div className="map-location location-one">
                    <MapPin size={19} />
                    <span>Mahendragarh</span>
                  </div>

                  <div className="map-location location-two">
                    <MapPin size={19} />
                    <span>Rewari</span>
                  </div>

                  <div className="map-location location-three">
                    <MapPin size={19} />
                    <span>Bhiwani</span>
                  </div>

                  <div className="map-location location-four">
                    <MapPin size={19} />
                    <span>Tosham</span>
                  </div>

                  <div className="map-location location-five">
                    <MapPin size={19} />
                    <span>Kosli</span>
                  </div>

                  <div className="map-location location-six">
                    <MapPin size={19} />
                    <span>Kanina</span>
                  </div>

                  <div className="route-line line-one"></div>
                  <div className="route-line line-two"></div>
                  <div className="route-line line-three"></div>
                  <div className="route-line line-four"></div>

                </div>


                <div className="map-legend">

                  <h4>Bus Routes</h4>

                  <div>
                    <span className="legend-dot"></span>
                    Narnaul - Mahendragarh
                  </div>

                  <div>
                    <span className="legend-dot"></span>
                    Narnaul - Rewari
                  </div>

                  <div>
                    <span className="legend-dot"></span>
                    Narnaul - Bhiwani
                  </div>

                  <div>
                    <span className="legend-dot"></span>
                    Narnaul - Ateli
                  </div>

                  <div>
                    <span className="legend-dot"></span>
                    Narnaul - Kosli
                  </div>

                  <div>
                    <span className="legend-dot"></span>
                    Narnaul - Tosham
                  </div>

                  <button className="download-button">
                    <Download size={14} />
                    Download Route Map
                  </button>

                </div>

              </div>

            </div>


            {/* INFORMATION */}
            <div className="transport-panel information-panel">

              <div className="transport-panel-heading">

                <div className="transport-heading-icon">
                  <Info size={23} />
                </div>

                <div>
                  <h2>Important Information</h2>
                </div>

              </div>

              <div className="information-list">

                {information.map((item, index) => (
                  <div className="information-item" key={index}>

                    <div className="information-icon">
                      {React.cloneElement(item.icon, {
                        size: 21,
                        strokeWidth: 2,
                      })}
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              SAFETY + FAQ
          ================================================= */}
          <div className="transport-bottom-grid">

            {/* SAFETY BANNER */}
            <div className="transport-safety">

              <div className="safety-buses">
                <img
                  src="/images/bus7.png"
                  alt="Yaduvanshi buses"
                />
              </div>

              <div className="safety-content">

                <div className="safety-script">
                  Your Safety
                  <br />
                  Our Priority
                </div>

                <div className="safety-orange-line"></div>

                <p>
                  We ensure that every student reaches their destination
                  safely and on time.
                </p>

              </div>

            </div>


            {/* FAQ */}
            <div className="transport-panel faq-panel">

              <div className="transport-panel-heading">

                <div className="transport-heading-icon">
                  <span className="question-mark">?</span>
                </div>

                <div>
                  <h2>Frequently Asked Questions</h2>
                </div>

              </div>

              <div className="faq-list">

                {faqs.map((question, index) => (

                  <div
                    className={`faq-item ${
                      openFaq === index ? "active" : ""
                    }`}
                    key={index}
                  >

                    <button
                      onClick={() =>
                        setOpenFaq(
                          openFaq === index ? null : index
                        )
                      }
                    >

                      <span>{question}</span>

                      <ChevronDown
                        size={16}
                        className={
                          openFaq === index
                            ? "faq-arrow rotate"
                            : "faq-arrow"
                        }
                      />

                    </button>

                    {openFaq === index && (
                      <div className="faq-answer">
                        Please contact the college transport office
                        for detailed information regarding this facility.
                      </div>
                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              CTA
          ================================================= */}
          <section className="transport-cta">

            <div className="transport-cta-icon">
              <Bus size={30} />
            </div>

            <div className="transport-cta-text">

              <h2>Need Help or More Information?</h2>

              <p>
                Our transport team is always ready to assist you.
              </p>

            </div>

            <Link
              to="/contact"
              className="transport-contact-button"
            >
              Contact Transport Office
              <ArrowRight size={16} />
            </Link>

          </section>

        </div>
      </section>


      {/* =====================================================
          PAGE CSS
      ===================================================== */}
<style>{`

/* =====================================================
   YADUVANSHI TRANSPORT PAGE
   STANDARD WEBSITE TYPOGRAPHY & SPACING
===================================================== */

.transport-page {
  width: 100%;
  background: #ffffff;
  color: #12365f;
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  overflow-x: hidden;
}

.transport-page * {
  box-sizing: border-box;
}

.transport-container {
  width: min(1240px, 92%);
  margin: 0 auto;
}


/* =====================================================
   HERO
===================================================== */

.transport-hero {
  position: relative;
  min-height: 390px;
  display: flex;
  overflow: hidden;
  background: #062452;
}

.transport-hero-left {
  width: 58%;
  min-height: 390px;
  background: #062452;
  position: relative;
  z-index: 2;
  color: #ffffff;
  padding: 22px 0 65px;
}

.transport-hero-left::after {
  content: "";
  position: absolute;
  top: 0;
  right: -115px;
  width: 180px;
  height: 100%;
  background: #062452;
  clip-path: ellipse(65% 75% at 30% 50%);
  z-index: -1;
}

.transport-hero-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 57%;
  height: 390px;
  overflow: hidden;
}

.transport-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.transport-breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #dce8f5;
  margin-bottom: 18px;
}

.transport-breadcrumb a {
  color: #ffffff;
  text-decoration: none;
}

.transport-label {
  color: #ff7600;
  font-size: 17px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: .3px;
  margin-bottom: 5px;
}

.transport-hero h1 {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 56px;
  line-height: 1.05;
  font-weight: 700;
  margin: 0 0 15px;
  letter-spacing: -1px;
  color: #ffffff;
}

.transport-tagline {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #ff7600;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 17px;
}

.transport-tagline b {
  color: #ff7600;
  font-weight: 400;
}

.transport-hero-description {
  width: 510px;
  max-width: 100%;
  color: #f2f6fb;
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
}

.transport-wave {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 55px;
  z-index: 5;
}

.transport-wave-orange {
  fill: none;
  stroke: #ff7600;
  stroke-width: 5;
}

.transport-wave-white {
  fill: #ffffff;
}


/* =====================================================
   FEATURES
===================================================== */

.transport-features {
  background: #ffffff;
  padding: 32px 0 35px;
}

.transport-feature-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.transport-feature {
  text-align: center;
  padding: 0 28px;
  min-height: 145px;
  border-right: 1px solid #cbdced;
}

.transport-feature:last-child {
  border-right: none;
}

.transport-feature-icon {
  width: 52px;
  height: 52px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: #062452;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transport-feature-icon svg {
  width: 27px;
  height: 27px;
}

.transport-feature h3 {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 17px;
  line-height: 1.3;
  color: #063c83;
  margin: 0 0 7px;
  font-weight: 700;
}

.transport-feature p {
  font-size: 13px;
  line-height: 1.65;
  color: #315f95;
  margin: 0;
}


/* =====================================================
   MAIN CONTENT
===================================================== */

.transport-main {
  background: #f8fbfe;
  padding: 20px 0 40px;
}

.transport-two-column {
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  gap: 22px;
  margin-bottom: 22px;
}

.transport-panel {
  background: #ffffff;
  border: 1px solid #dfebf6;
  border-radius: 10px;
  box-shadow: 0 3px 14px rgba(6, 36, 82, .045);
}

.fleet-panel,
.routes-panel {
  padding: 22px;
}

.transport-panel-heading {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.transport-heading-icon {
  width: 43px;
  height: 43px;
  min-width: 43px;
  border-radius: 9px;
  background: #062452;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transport-heading-icon svg {
  width: 25px;
  height: 25px;
}

.transport-panel-heading h2 {
  font-family: "Playfair Display", Georgia, serif;
  color: #063b80;
  font-size: 29px;
  line-height: 1.2;
  margin: 0 0 6px;
  font-weight: 700;
}

.transport-panel-heading p {
  color: #315f95;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}


/* =====================================================
   BUS CARDS
===================================================== */

.bus-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.bus-card {
  border: 1px solid #dceafa;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  transition: transform .25s ease, box-shadow .25s ease;
}

.bus-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(6, 36, 82, .09);
}

.bus-image {
  height: 145px;
  overflow: hidden;
}

.bus-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.bus-card-content {
  padding: 14px 13px 16px;
}

.bus-card h3 {
  color: #073d85;
  font-size: 16px;
  line-height: 1.35;
  margin: 0 0 7px;
  font-weight: 700;
}

.bus-card p {
  color: #3769a0;
  font-size: 12px;
  line-height: 1.65;
  margin: 0;
}


/* =====================================================
   ROUTES
===================================================== */

.route-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin: 12px 0 20px;
}

.route-list {
  border-right: 1px solid #c8dcef;
  padding-right: 15px;
}

.route-list:last-child {
  border-right: none;
  padding-right: 0;
}

.route-item {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #164d8e;
  font-size: 13px;
  margin-bottom: 14px;
}

.route-item svg {
  color: #ff7600;
  fill: #ff7600;
  stroke: #ffffff;
  min-width: 17px;
}

.small-blue-button {
  border: none;
  background: #062452;
  color: #ffffff;
  border-radius: 22px;
  padding: 11px 17px;
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
}


/* =====================================================
   MAP + INFORMATION
===================================================== */

.transport-map-row {
  display: grid;
  grid-template-columns: 1.9fr 1fr;
  gap: 22px;
  margin-bottom: 22px;
}

.map-panel,
.information-panel {
  padding: 22px;
}

.map-content {
  display: grid;
  grid-template-columns: 1fr 185px;
  gap: 15px;
}

.fake-map {
  height: 330px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(
      25deg,
      transparent 48%,
      #d2dfeb 49%,
      #d2dfeb 50%,
      transparent 51%
    ),
    linear-gradient(
      -20deg,
      transparent 47%,
      #d2dfeb 48%,
      #d2dfeb 49%,
      transparent 50%
    ),
    repeating-linear-gradient(
      30deg,
      #f5f9f4,
      #f5f9f4 30px,
      #e7f0e6 31px,
      #e7f0e6 32px
    );
  border: 1px solid #dbe8f2;
}

.map-center {
  position: absolute;
  left: 48%;
  top: 48%;
  transform: translate(-50%, -50%);
  z-index: 4;
  text-align: center;
  color: #063d83;
}

.map-center svg {
  color: #ef3f3f;
  fill: #ef3f3f;
  stroke: #ffffff;
  display: block;
  margin: auto;
}

.map-center strong {
  background: #ffffff;
  padding: 5px 9px;
  border-radius: 5px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

.map-location {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 3px;
  color: #174e8d;
  font-size: 12px;
  font-weight: 700;
  z-index: 4;
}

.map-location svg {
  color: #ff7600;
  fill: #ff7600;
  stroke: #ffffff;
}

.map-legend {
  border: 1px solid #dceafa;
  border-radius: 8px;
  padding: 14px;
  font-size: 11px;
  color: #1c548f;
}

.map-legend h4 {
  color: #063d83;
  font-size: 14px;
  margin: 0 0 13px;
}

.map-legend > div {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  line-height: 1.4;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff7600;
  display: inline-block;
}

.download-button {
  width: 100%;
  border: none;
  background: #062452;
  color: #ffffff;
  border-radius: 6px;
  padding: 10px 6px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
}


/* =====================================================
   INFORMATION
===================================================== */

.information-list {
  border-top: 1px solid #e0ebf6;
}

.information-item {
  display: flex;
  gap: 13px;
  padding: 17px 0;
  border-bottom: 1px solid #e2ecf5;
}

.information-icon {
  width: 45px;
  height: 45px;
  min-width: 45px;
  border-radius: 50%;
  background: #062452;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.information-item h4 {
  margin: 0 0 5px;
  font-size: 14px;
  color: #073d83;
}

.information-item p {
  color: #3769a0;
  font-size: 12px;
  line-height: 1.65;
  margin: 0;
}

.information-item small {
  font-size: 10px;
}


/* =====================================================
   SAFETY + FAQ
===================================================== */

.transport-bottom-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 22px;
  margin-bottom: 22px;
}

.transport-safety {
  min-height: 225px;
  border: 1px solid #dfebf6;
  border-radius: 10px;
  background: #edf7ff;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
}

.safety-buses {
  overflow: hidden;
}

.safety-buses img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.safety-content {
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.safety-script {
  font-family: "Brush Script MT", cursive;
  font-size: 30px;
  line-height: 1.05;
  color: #063d83;
}

.safety-orange-line {
  width: 115px;
  height: 2px;
  background: #ff7600;
  margin: 12px 0 15px;
}

.safety-content p {
  color: #134b89;
  font-size: 12px;
  line-height: 1.7;
  margin: 0;
}

.faq-panel {
  padding: 22px;
}

.faq-list {
  border-top: 1px solid #dfeaf5;
}

.faq-item {
  border-bottom: 1px solid #dfeaf5;
}

.faq-item button {
  width: 100%;
  border: none;
  background: #ffffff;
  padding: 14px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  color: #174e8d;
  font-size: 12px;
  line-height: 1.5;
  cursor: pointer;
}

.faq-arrow {
  transition: transform .2s ease;
  color: #063d83;
  min-width: 16px;
}

.faq-arrow.rotate {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 5px 14px;
  color: #607a98;
  font-size: 11px;
  line-height: 1.6;
}

.question-mark {
  font-size: 22px;
  font-weight: 700;
}


/* =====================================================
   CTA
===================================================== */

.transport-cta {
  min-height: 85px;
  padding: 15px 25px;
  background: #062452;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 17px;
  color: #ffffff;
}

.transport-cta-icon {
  color: #ff7600;
  display: flex;
}

.transport-cta-text {
  flex: 1;
}

.transport-cta-text h2 {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 23px;
  line-height: 1.2;
  margin: 0 0 4px;
}

.transport-cta-text p {
  color: #d5e1ef;
  font-size: 12px;
  margin: 0;
}

.transport-contact-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #ff7600;
  color: #ffffff;
  text-decoration: none;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1100px) {

  .transport-container {
    width: 94%;
  }

  .transport-hero h1 {
    font-size: 50px;
  }

  .transport-feature {
    padding: 0 15px;
  }

  .transport-two-column {
    grid-template-columns: 1fr;
  }

  .transport-map-row {
    grid-template-columns: 1fr;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

  .transport-hero {
    min-height: 570px;
  }

  .transport-hero-left {
    width: 100%;
    min-height: 570px;
    padding-top: 28px;
    background: rgba(6, 36, 82, .92);
  }

  .transport-hero-left::after {
    display: none;
  }

  .transport-hero-image {
    width: 100%;
    height: 570px;
  }

  .transport-hero-image::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(6, 36, 82, .68);
  }

  .transport-hero h1 {
    font-size: 44px;
  }

  .transport-hero-description {
    width: 100%;
    font-size: 14px;
  }

  .transport-feature-grid {
    grid-template-columns: 1fr 1fr;
    gap: 25px 0;
  }

  .transport-feature {
    border-right: 1px solid #d5e3f0;
    padding: 0 15px;
  }

  .transport-feature:nth-child(2n) {
    border-right: none;
  }

  .transport-feature h3 {
    font-size: 16px;
  }

  .transport-feature p {
    font-size: 12px;
  }

  .bus-grid {
    grid-template-columns: 1fr 1fr;
  }

  .map-content {
    grid-template-columns: 1fr;
  }

  .transport-bottom-grid {
    grid-template-columns: 1fr;
  }

  .transport-safety {
    grid-template-columns: 1fr;
  }

  .safety-buses {
    height: 200px;
  }

  .transport-cta {
    flex-wrap: wrap;
  }

  .transport-contact-button {
    margin-left: auto;
  }
}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 480px) {

  .transport-feature-grid {
    grid-template-columns: 1fr;
  }

  .transport-feature {
    border-right: none;
    border-bottom: 1px solid #d5e3f0;
    padding: 15px;
  }

  .transport-feature:last-child {
    border-bottom: none;
  }

  .bus-grid {
    grid-template-columns: 1fr;
  }

  .route-columns {
    grid-template-columns: 1fr;
  }

  .route-list {
    border-right: none;
    border-bottom: 1px solid #dceafa;
    padding: 5px 0 10px;
  }

  .route-list:last-child {
    border-bottom: none;
  }

  .transport-hero h1 {
    font-size: 40px;
  }

  .transport-tagline {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 14px;
  }

  .transport-cta {
    padding: 20px;
  }

  .transport-contact-button {
    width: 100%;
    justify-content: center;
    margin-left: 0;
  }

}

`}
</style>
    </div>
  );
};

export default Transportation;