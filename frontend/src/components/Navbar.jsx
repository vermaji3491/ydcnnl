import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

// ======================================================
// ADMINISTRATION
// ======================================================

const adminItems = [
  ["Governing Body", "/about/administration/governing-body"],
  ["Advisory Board", "/about/administration/advisory-board"],
  ["Founder Director", "/about/administration/founder-director"],
  ["CEO", "/about/administration/ceo"],
  ["Chairman", "/about/administration/chairman"],
  ["Registrar", "/about/administration/registrar"],
  ["Director", "/about/administration/director"],
  ["Principal", "/about/administration/principal"],
];

// ======================================================
// ADMISSION
// ======================================================

const admissionItems = [
  ["Online Registration", "/admission/online-registration"],
  ["Admission Form", "/admission/admission-form"],
  ["Online Admission", "/admission/online-admission"],
  ["General Instruction", "/admission/general-instruction"],
  ["Admission Criteria", "/admission/admission-criteria"],
  ["Fees Structure", "/admission/fees-structure"],
  ["Rules and Regulations", "/admission/rules-regulations"],
  ["Anti Ragging Cell", "/admission/anti-ragging-cell"],
];

// ======================================================
// LABORATORIES
// ======================================================

const laboratoryItems = [
  ["Physics Lab", "/facilities/laboratories/physics-lab"],
  ["Chemistry Lab", "/facilities/laboratories/chemistry-lab"],
  ["Biology Lab", "/facilities/laboratories/biology-lab"],
  ["Computer Lab", "/facilities/laboratories/computer-lab"],
  ["Geography Lab", "/facilities/laboratories/geography-lab"],
];

// ======================================================
// NAVBAR
// ======================================================

export default function Navbar() {
  // ====================================================
  // MAIN MOBILE MENU
  // ====================================================

  const [open, setOpen] = useState(false);

  // ====================================================
  // DROPDOWN STATES
  // ====================================================

  const [aboutOpen, setAboutOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const [admissionOpen, setAdmissionOpen] = useState(false);

  // Achievement has ONE dropdown only
  const [achievementOpen, setAchievementOpen] = useState(false);

  // Facilities
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [laboratoryOpen, setLaboratoryOpen] = useState(false);

  // ====================================================
  // PAGE + SCROLL STATE
  // ====================================================

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTransparent = isHomePage && !scrolled;

  // ====================================================
  // CLOSE MOBILE MENU
  // ====================================================

  const closeMobileMenu = () => {
    setOpen(false);

    setAboutOpen(false);
    setAdminOpen(false);

    setAdmissionOpen(false);

    setAchievementOpen(false);

    setFacilitiesOpen(false);
    setLaboratoryOpen(false);
  };

  // ====================================================
  // ACTIVE NAV LINK CLASS
  // ====================================================

  const navLinkClass = ({ isActive }) =>
    isActive
      ? `relative py-7 text-sm font-semibold transition-colors ${
          isTransparent
            ? "text-white"
            : "text-navy"
        } after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold`
      : `relative py-7 text-sm font-semibold transition-colors ${
          isTransparent
            ? "text-white hover:text-gold"
            : "text-slate-600 hover:text-navy"
        }`;

  // ====================================================
  // DROPDOWN BUTTON CLASS
  // ====================================================

  const dropdownButtonClass = `flex items-center gap-1 py-7 text-sm font-semibold transition-colors ${
    isTransparent
      ? "text-white hover:text-gold"
      : "text-slate-600 hover:text-navy"
  }`;

  return (
    <>
      {/* ==================================================
          MAIN NAVBAR
          ================================================== */}

      <header
        className={`
          ${
            isHomePage
              ? "fixed left-0 right-0 top-0"
              : "sticky top-0"
          }
          z-50 border-b transition-all duration-500
          ${
            isHomePage && !scrolled
              ? "border-transparent bg-transparent shadow-none"
              : "border-slate-200 bg-white shadow-sm"
          }
        `}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4">
          <div className="flex h-20 items-center justify-between">

            {/* ==================================================
                LOGO
                ================================================== */}

            <Link
              to="/"
              className="flex items-center"
              onClick={closeMobileMenu}
            >
              <img
                src="/images/yaduvanshilogo.png"
                alt="Yaduvanshi Degree College"
                className="h-14 w-auto max-w-[190px] object-contain"
              />
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
                ================================================== */}

            <nav className="hidden items-center gap-6 lg:flex">

              {/* ==================================================
                  HOME
                  ================================================== */}

              <NavLink
                to="/"
                className={navLinkClass}
              >
                Home
              </NavLink>

              {/* ==================================================
                  ABOUT US
                  ================================================== */}

              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => {
                  setAboutOpen(false);
                  setAdminOpen(false);
                }}
              >
                <button className={dropdownButtonClass}>
                  About Us
                  <ChevronDown size={15} />
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      className="absolute left-0 top-full w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                    >
                      <NavLink
                        to="/about"
                        className="dropdown-link"
                      >
                        About Institute
                      </NavLink>

                      <NavLink
                        to="/about/vision-mission"
                        className="dropdown-link"
                      >
                        Vision & Mission
                      </NavLink>

                      <NavLink
                        to="/about/society"
                        className="dropdown-link"
                      >
                        About Society
                      </NavLink>

                      <NavLink
                        to="/about/approval"
                        className="dropdown-link"
                      >
                        Approval
                      </NavLink>

                      <NavLink
                        to="/about/affiliation"
                        className="dropdown-link"
                      >
                        Affiliation
                      </NavLink>

                      {/* ADMINISTRATION */}

                      <div
                        className="relative"
                        onMouseEnter={() =>
                          setAdminOpen(true)
                        }
                        onMouseLeave={() =>
                          setAdminOpen(false)
                        }
                      >
                        <button className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-navy">
                          Administration

                          <ChevronRight size={15} />
                        </button>

                        <AnimatePresence>
                          {adminOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                x: 10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              exit={{
                                opacity: 0,
                                x: 10,
                              }}
                              className="absolute left-full top-0 ml-1 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                            >
                              {adminItems.map(
                                ([label, path]) => (
                                  <NavLink
                                    key={path}
                                    to={path}
                                    className="dropdown-link"
                                  >
                                    {label}
                                  </NavLink>
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ==================================================
                  ADMISSION
                  ================================================== */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setAdmissionOpen(true)
                }
                onMouseLeave={() =>
                  setAdmissionOpen(false)
                }
              >
                <button className={dropdownButtonClass}>
                  Admission
                  <ChevronDown size={15} />
                </button>

                <AnimatePresence>
                  {admissionOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      className="absolute left-0 top-full w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                    >
                      {admissionItems.map(
                        ([label, path]) => (
                          <NavLink
                            key={path}
                            to={path}
                            className="dropdown-link"
                          >
                            {label}
                          </NavLink>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ==================================================
                  PROGRAMS
                  ================================================== */}

              <NavLink
                to="/courses"
                className={navLinkClass}
              >
                Programs
              </NavLink>

              {/* ==================================================
                  ACHIEVEMENT
                  ================================================== */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setAchievementOpen(true)
                }
                onMouseLeave={() =>
                  setAchievementOpen(false)
                }
              >
                <button className={dropdownButtonClass}>
                  Achievement
                  <ChevronDown size={15} />
                </button>

                <AnimatePresence>
                  {achievementOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      className="absolute left-0 top-full w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                    >

                      {/* ======================================
                          UNIVERSITY POSITION
                          DIRECT PAGE LINK
                          ====================================== */}

                      <NavLink
                        to="/achievement/university-position"
                        className="dropdown-link"
                      >
                        University Position
                      </NavLink>

                      {/* ======================================
                          IIT JAM
                          DIRECT PAGE LINK
                          ====================================== */}

                      <NavLink
                        to="/achievement/iit-jam"
                        className="dropdown-link"
                      >
                        IIT JAM
                      </NavLink>

                      {/* SPORTS */}

                      <NavLink
                        to="/achievement/sports"
                        className="dropdown-link"
                      >
                        Achievement in Sports
                      </NavLink>

                      {/* CULTURAL EVENTS */}

                      <NavLink
                        to="/achievement/cultural-events"
                        className="dropdown-link"
                      >
                        Achievement in Cultural Events
                      </NavLink>

                      {/* NET / GATE */}

                      <NavLink
                        to="/achievement/netgate"
                        className="dropdown-link"
                      >
                        NET / GATE
                      </NavLink>

                     

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ==================================================
                  FACILITIES
                  ================================================== */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setFacilitiesOpen(true)
                }
                onMouseLeave={() => {
                  setFacilitiesOpen(false);
                  setLaboratoryOpen(false);
                }}
              >
                <button className={dropdownButtonClass}>
                  Facilities
                  <ChevronDown size={15} />
                </button>

                <AnimatePresence>
                  {facilitiesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      className="absolute left-0 top-full w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                    >

                      {/* EXAM SAARTHI */}

                      <a
                        href="https://examsaarthi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-link"
                      >
                        Previous Year Question Papers
                      </a>

                      {/* ICT */}

                      <NavLink
                        to="/facilities/ict"
                        className="dropdown-link"
                      >
                        Information and Communication Technology (ICT)
                      </NavLink>

                      {/* ======================================
                          LABORATORIES
                          THIS IS STILL A SUBMENU
                          ====================================== */}

                      <div
                        className="relative"
                        onMouseEnter={() =>
                          setLaboratoryOpen(true)
                        }
                        onMouseLeave={() =>
                          setLaboratoryOpen(false)
                        }
                      >
                        <button className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-navy">
                          Laboratories

                          <ChevronRight size={15} />
                        </button>

                        <AnimatePresence>
                          {laboratoryOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                x: 10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              exit={{
                                opacity: 0,
                                x: 10,
                              }}
                              className="absolute left-full top-0 ml-1 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                            >
                              {laboratoryItems.map(
                                ([label, path]) => (
                                  <NavLink
                                    key={path}
                                    to={path}
                                    className="dropdown-link"
                                  >
                                    {label}
                                  </NavLink>
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* ======================================
                          LIBRARY
                          DIRECT LINK - NO DROPDOWN
                          ====================================== */}

                      <NavLink
                        to="/facilities/library"
                        className="dropdown-link"
                      >
                        Library
                      </NavLink>

                      {/* SPORTS */}

                      <NavLink
                        to="/facilities/sports-complex"
                        className="dropdown-link"
                      >
                        Sports Complex
                      </NavLink>

                      {/* TRANSPORTATION */}

                      <NavLink
                        to="/facilities/transportation"
                        className="dropdown-link"
                      >
                        Transportation
                      </NavLink>

                      {/* ======================================
                          NSS
                          DIRECT LINK - NO DROPDOWN
                          ====================================== */}

                      <NavLink
                        to="/facilities/nss"
                        className="dropdown-link"
                      >
                        National Service Scheme
                      </NavLink>

                                  
                      {/* WIFI */}

                      <NavLink
                        to="/facilities/wifi"
                        className="dropdown-link"
                      >
                        Wi-Fi Enabled Campus
                      </NavLink>

                      {/* CONFERENCE */}

                      <NavLink
                        to="/facilities/conference-workshop"
                        className="dropdown-link"
                      >
                        Conference and Workshop
                      </NavLink>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ==================================================
                  GALLERY
                  ================================================== */}

              <NavLink
                to="/gallery"
                className={navLinkClass}
              >
                Gallery
              </NavLink>

              {/* ==================================================
                  TRAINING & PLACEMENT
                  ================================================== */}

              <NavLink
                to="/training-placement"
                className={navLinkClass}
              >
                Training & Placement
              </NavLink>

              {/* ==================================================
                  CONTACT
                  ================================================== */}

              <NavLink
                to="/contact"
                className={navLinkClass}
              >
                Contact Us
              </NavLink>

              {/* ==================================================
                  YADUVANSHI CAMPUS
                  ================================================== */}

              <NavLink
                to="/yaduvanshi-campus"
                className={navLinkClass}
              >
                Yaduvanshi Campus
              </NavLink>

            </nav>

            {/* ==================================================
                MOBILE MENU BUTTON
                ================================================== */}

            <button
              className={`rounded-lg p-2 transition-colors lg:hidden ${
                isTransparent
                  ? "text-white"
                  : "text-navy"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>
        </div>

        {/* ==================================================
            MOBILE NAVIGATION
            ================================================== */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="border-t border-slate-200 bg-white lg:hidden"
            >
              <div className="max-h-[80vh] overflow-y-auto px-4 py-4">

                {/* HOME */}

                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className="mobile-link"
                >
                  Home
                </NavLink>

                {/* ==================================================
                    ABOUT US
                    ================================================== */}

                <button
                  onClick={() =>
                    setAboutOpen(!aboutOpen)
                  }
                  className="mobile-dropdown-button"
                >
                  <span>About Us</span>

                  <ChevronDown
                    size={18}
                    className={`transition ${
                      aboutOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {aboutOpen && (
                  <div className="ml-4 border-l border-slate-200 pl-3">

                    <NavLink
                      to="/about"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      About Institute
                    </NavLink>

                    <NavLink
                      to="/about/vision-mission"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Vision & Mission
                    </NavLink>

                    <NavLink
                      to="/about/society"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      About Society
                    </NavLink>

                    <NavLink
                      to="/about/approval"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Approval
                    </NavLink>

                    <NavLink
                      to="/about/affiliation"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Affiliation
                    </NavLink>

                    {/* ADMINISTRATION */}

                    <button
                      onClick={() =>
                        setAdminOpen(!adminOpen)
                      }
                      className="mobile-dropdown-button text-sm"
                    >
                      <span>
                        Administration
                      </span>

                      <ChevronDown
                        size={16}
                        className={`transition ${
                          adminOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {adminOpen && (
                      <div className="ml-4 border-l border-slate-200 pl-3">
                        {adminItems.map(
                          ([label, path]) => (
                            <NavLink
                              key={path}
                              to={path}
                              onClick={
                                closeMobileMenu
                              }
                              className="mobile-sub-link"
                            >
                              {label}
                            </NavLink>
                          )
                        )}
                      </div>
                    )}

                  </div>
                )}

                {/* ==================================================
                    ADMISSION
                    ================================================== */}

                <button
                  onClick={() =>
                    setAdmissionOpen(
                      !admissionOpen
                    )
                  }
                  className="mobile-dropdown-button"
                >
                  <span>Admission</span>

                  <ChevronDown
                    size={18}
                    className={`transition ${
                      admissionOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {admissionOpen && (
                  <div className="ml-4 border-l border-slate-200 pl-3">
                    {admissionItems.map(
                      ([label, path]) => (
                        <NavLink
                          key={path}
                          to={path}
                          onClick={
                            closeMobileMenu
                          }
                          className="mobile-sub-link"
                        >
                          {label}
                        </NavLink>
                      )
                    )}
                  </div>
                )}

                {/* PROGRAMS */}

                <NavLink
                  to="/courses"
                  onClick={closeMobileMenu}
                  className="mobile-link"
                >
                  Programs
                </NavLink>

                {/* ==================================================
                    ACHIEVEMENT
                    ================================================== */}

                <button
                  onClick={() =>
                    setAchievementOpen(
                      !achievementOpen
                    )
                  }
                  className="mobile-dropdown-button"
                >
                  <span>Achievement</span>

                  <ChevronDown
                    size={18}
                    className={`transition ${
                      achievementOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {achievementOpen && (
                  <div className="ml-4 border-l border-slate-200 pl-3">

                    {/* ==========================================
                        UNIVERSITY POSITION
                        DIRECT LINK
                        ========================================== */}

                    <NavLink
                      to="/achievement/university-position"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      University Position
                    </NavLink>

                    {/* ==========================================
                        IIT JAM
                        DIRECT LINK
                        ========================================== */}

                    <NavLink
                      to="/achievement/iit-jam"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      IIT JAM
                    </NavLink>

                    {/* SPORTS */}

                    <NavLink
                      to="/achievement/sports"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Achievement in Sports
                    </NavLink>

                    {/* CULTURAL */}

                    <NavLink
                      to="/achievement/cultural-events"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Achievement in Cultural Events
                    </NavLink>

                    {/* NET / GATE */}

                    <NavLink
                      to="/achievement/netgate"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      NET / GATE
                    </NavLink>

                    {/* PHOTO GALLERY */}

                    <NavLink
                      to="/achievement/photo-gallery"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Photo Gallery
                    </NavLink>

                  </div>
                )}

                {/* ==================================================
                    FACILITIES
                    ================================================== */}

                <button
                  onClick={() =>
                    setFacilitiesOpen(
                      !facilitiesOpen
                    )
                  }
                  className="mobile-dropdown-button"
                >
                  <span>Facilities</span>

                  <ChevronDown
                    size={18}
                    className={`transition ${
                      facilitiesOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {facilitiesOpen && (
                  <div className="ml-4 border-l border-slate-200 pl-3">

                    {/* PREVIOUS YEAR QUESTION PAPERS */}

                    <a
                      href="https://examsaarthi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-sub-link"
                    >
                      Previous Year Question Papers
                    </a>

                    {/* ICT */}

                    <NavLink
                      to="/facilities/ict"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Information and Communication Technology (ICT)
                    </NavLink>

                    {/* LABORATORIES */}

                    <button
                      onClick={() =>
                        setLaboratoryOpen(
                          !laboratoryOpen
                        )
                      }
                      className="mobile-dropdown-button text-sm"
                    >
                      <span>
                        Laboratories
                      </span>

                      <ChevronDown
                        size={16}
                        className={`transition ${
                          laboratoryOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {laboratoryOpen && (
                      <div className="ml-4 border-l border-slate-200 pl-3">
                        {laboratoryItems.map(
                          ([label, path]) => (
                            <NavLink
                              key={path}
                              to={path}
                              onClick={
                                closeMobileMenu
                              }
                              className="mobile-sub-link"
                            >
                              {label}
                            </NavLink>
                          )
                        )}
                      </div>
                    )}

                    {/* ==========================================
                        LIBRARY
                        DIRECT LINK
                        ========================================== */}

                    <NavLink
                      to="/facilities/library"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Library
                    </NavLink>

                    {/* SPORTS */}

                    <NavLink
                      to="/facilities/sports-complex"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Sports Complex
                    </NavLink>

                    {/* TRANSPORTATION */}

                    <NavLink
                      to="/facilities/transportation"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Transportation
                    </NavLink>

                    {/* ==========================================
                        NSS
                        DIRECT LINK
                        ========================================== */}

                    <NavLink
                      to="/facilities/nss"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      National Service Scheme
                    </NavLink>

                    {/* CAFETERIA */}

                    <NavLink
                      to="/facilities/cafeteria"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Cafeteria
                    </NavLink>

                    {/* WIFI */}

                    <NavLink
                      to="/facilities/wifi"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Wi-Fi Enabled Campus
                    </NavLink>

                    {/* CONFERENCE */}

                    <NavLink
                      to="/facilities/conference-workshop"
                      onClick={closeMobileMenu}
                      className="mobile-sub-link"
                    >
                      Conference and Workshop
                    </NavLink>

                  </div>
                )}

                {/* CAMPUS LIFE */}

                <NavLink
                  to="/facilities"
                  onClick={closeMobileMenu}
                  className="mobile-link"
                >
                  Campus Life
                </NavLink>

                {/* GALLERY */}

                <NavLink
                  to="/gallery"
                  onClick={closeMobileMenu}
                  className="mobile-link"
                >
                  Gallery
                </NavLink>

                {/* TRAINING & PLACEMENT */}

                <NavLink
                  to="/training-placement"
                  onClick={closeMobileMenu}
                  className="mobile-link"
                >
                  Training & Placement
                </NavLink>

                {/* CONTACT */}

                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="mobile-link"
                >
                  Contact Us
                </NavLink>

                {/* YADUVANSHI CAMPUS */}

                <NavLink
                  to="/yaduvanshi-campus"
                  onClick={closeMobileMenu}
                  className="mobile-link"
                >
                  Yaduvanshi Campus
                </NavLink>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==================================================
          NAVBAR CSS
          ================================================== */}

      <style>{`
        .dropdown-link {
          display: block;
          width: 100%;
          border-radius: 0.5rem;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #334155;
          transition: all 0.2s ease;
        }

        .dropdown-link:hover {
          background: #f1f5f9;
          color: #0a192f;
        }

        .mobile-link {
          display: block;
          width: 100%;
          padding: 0.8rem 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: #334155;
          border-bottom: 1px solid #e2e8f0;
        }

        .mobile-link:hover {
          color: #0a192f;
        }

        .mobile-dropdown-button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: #334155;
          border-bottom: 1px solid #e2e8f0;
          background: transparent;
          border-left: 0;
          border-right: 0;
          border-top: 0;
        }

        .mobile-dropdown-button:hover {
          color: #0a192f;
        }

        .mobile-sub-link {
          display: block;
          width: 100%;
          padding: 0.65rem 0;
          font-size: 0.875rem;
          color: #475569;
        }

        .mobile-sub-link:hover {
          color: #0a192f;
        }
      `}</style>
    </>
  );
}