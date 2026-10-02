import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  BriefcaseBusiness,
  Images,
  HeartHandshake,
  Upload,
  Plus,
  ArrowRight,
  LogOut,
  LayoutDashboard,
  Settings,
  Bell,
  IndianRupee,
  GraduationCap,
  Medal,
  Music,
  Dumbbell,
  BookOpen,
  Award,
  FileText,
  Image as ImageIcon,
  Megaphone,
  Users,
  Video,
  Eye,
  Home,
  ChevronRight,
  ClipboardList,
} from "lucide-react";
import { apiFetch } from "../lib/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [statsError, setStatsError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin", { replace: true });
      return;
    }

    apiFetch("/api/admin/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((result) => setStats(result.stats))
      .catch((error) => {
        if (error.status === 401) {
          localStorage.removeItem("adminToken");
          sessionStorage.removeItem("adminToken");
          navigate("/admin", { replace: true });
          return;
        }
        setStatsError("Backend counts are temporarily unavailable.");
      });
  }, [navigate]);

  /*
  ============================================================
  MAIN MANAGEMENT CARDS
  ============================================================
  */

  const managementCards = [
    {
      title: "Achievements",
      description:
        "Manage university positions, IIT JAM, sports, cultural events, NET/GATE and other college achievements.",
      icon: Trophy,
      number: "01",
      path: "/admin/achievements",
      action: "Manage Achievements",
      className: "orange",
    },

    {
      title: "Home Notices",
      description:
        "Create, edit and remove important notices, announcements and admission notifications displayed on the home page.",
      icon: Bell,
      number: "02",
      path: "/admin/notices",
      action: "Manage Notices",
      className: "blue",
    },

    {
      title: "Fees Structure",
      description:
        "Manage course-wise fees, tuition fees, examination fees and other fee information displayed on the website.",
      icon: IndianRupee,
      number: "03",
      path: "/admin/fees-structure",
      action: "Manage Fees",
      className: "green",
    },

    {
      title: "Gallery",
      description:
        "Upload and manage college photographs, event images, campus photographs and videos.",
      icon: Images,
      number: "04",
      path: "/admin/gallery",
      action: "Manage Gallery",
      className: "purple",
    },

    {
      title: "Training & Placement",
      description:
        "Manage industrial visits, companies, placement information, photographs, videos and student learning outcomes.",
      icon: BriefcaseBusiness,
      number: "05",
      path: "/admin/training-placement",
      action: "Manage Visits",
      className: "blue",
    },

    {
      title: "NSS",
      description:
        "Manage NSS activities, blood donation camps, tree plantation, awareness programs and NSS photographs.",
      icon: HeartHandshake,
      number: "06",
      path: "/admin/nss",
      action: "Manage NSS",
      className: "green",
    },
  ];

  /*
  ============================================================
  ACHIEVEMENT CATEGORIES
  ============================================================
  */

  const achievementCategories = [
    {
      title: "University Position",
      icon: GraduationCap,
      path: "/admin/achievements/university-position",
    },
    {
      title: "IIT JAM",
      icon: BookOpen,
      path: "/admin/achievements/iit-jam",
    },
    {
      title: "Sports",
      icon: Dumbbell,
      path: "/admin/achievements/sports",
    },
    {
      title: "Cultural Events",
      icon: Music,
      path: "/admin/achievements/cultural-events",
    },
    {
      title: "GATE",
      icon: Award,
      path: "/admin/achievements/gate",
    },
    {
      title: "Achievement Gallery",
      icon: Images,
      path: "/admin/achievements/gallery",
    },
  ];

  /*
  ============================================================
  QUICK ACTIONS
  ============================================================
  */

  const quickActions = [
    {
      title: "Add Achievement",
      icon: Trophy,
      path: "/admin/achievements",
    },

    {
      title: "Add Notice",
      icon: Bell,
      path: "/admin/notices",
    },

    {
      title: "Add Fee Structure",
      icon: IndianRupee,
      path: "/admin/fees-structure",
    },

    {
      title: "Upload Image",
      icon: Upload,
      path: "/admin/gallery",
    },

    {
      title: "Add Industrial Visit",
      icon: BriefcaseBusiness,
      path: "/admin/training-placement",
    },

    {
      title: "Add NSS Activity",
      icon: HeartHandshake,
      path: "/admin/nss",
    },
  ];

  /*
  ============================================================
  RECENT CONTENT
  ============================================================
  */

  const recentContent = [
    {
      title: "University Position",
      category: "Achievement",
      date: "Recently",
      icon: GraduationCap,
    },
    {
      title: "Admission Notice",
      category: "Home Notice",
      date: "Recently",
      icon: Bell,
    },
    {
      title: "B.Sc. Fee Structure",
      category: "Fees",
      date: "Recently",
      icon: IndianRupee,
    },
    {
      title: "Campus Gallery",
      category: "Gallery",
      date: "Recently",
      icon: Images,
    },
  ];

  /*
  ============================================================
  LOGOUT
  ============================================================
  */

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  return (
    <div className="admin-dashboard">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="admin-sidebar">

        <div className="admin-brand">

          <img
            src="/images/Cyaduvanshilogo.png"
            alt="Yaduvanshi Degree College"
          />

          <div>
            <h2>Yaduvanshi</h2>
            <span>Admin Panel</span>
          </div>

        </div>

        <nav className="admin-navigation">

          <a
            href="/admin/dashboard"
            className="admin-nav-link active"
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>

          <a
            href="/admin/achievements"
            className="admin-nav-link"
          >
            <Trophy size={20} />
            <span>Achievements</span>
          </a>

          <a
            href="/admin/notices"
            className="admin-nav-link"
          >
            <Bell size={20} />
            <span>Home Notices</span>
          </a>

          <a
            href="/admin/fees-structure"
            className="admin-nav-link"
          >
            <IndianRupee size={20} />
            <span>Fees Structure</span>
          </a>

          <a
            href="/admin/training-placement"
            className="admin-nav-link"
          >
            <BriefcaseBusiness size={20} />
            <span>Training & Placement</span>
          </a>

          <a
            href="/admin/gallery"
            className="admin-nav-link"
          >
            <Images size={20} />
            <span>Gallery</span>
          </a>

          <a
            href="/admin/nss"
            className="admin-nav-link"
          >
            <HeartHandshake size={20} />
            <span>NSS</span>
          </a>

        </nav>

        <div className="sidebar-bottom">

          <a
            href="/"
            className="admin-nav-link"
          >
            <Eye size={20} />
            <span>View Website</span>
          </a>

          <button
            type="button"
            className="admin-logout"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="admin-main">

        {/* ===================================================
            TOP BAR
        =================================================== */}

        <header className="admin-topbar">

          <div>

            <p className="admin-small-title">
              YADUVANSHI DEGREE COLLEGE
            </p>

            <h1>
              Admin Dashboard
            </h1>

          </div>

          <div className="admin-topbar-actions">

            <a
              href="/"
              className="admin-home-button"
              aria-label="Go to home page"
            >
              <Home size={17} />
              <span>Home</span>
            </a>

            <div className="admin-profile">

              <div className="admin-profile-avatar">
                A
              </div>

              <div>
                <strong>Administrator</strong>
                <span>Website Manager</span>
              </div>
            </div>

          </div>

        </header>

        {/* ===================================================
            WELCOME BANNER
        =================================================== */}

        <section className="admin-welcome">

          <div className="welcome-content">

            <span className="welcome-label">
              CONTROL PANEL
            </span>

            <h2>
              Welcome to the
              <br />
              <span>Yaduvanshi Admin Panel</span>
            </h2>

            <p>
              Manage your college website content from one
              central dashboard. Add achievements, notices,
              fee structures, images, industrial visits and
              NSS activities.
            </p>

            <div className="welcome-buttons">

              <a
                href="/"
                className="welcome-button primary"
              >
                <Eye size={17} />
                View Website
              </a>

              <a
                href="/admin/achievements"
                className="welcome-button secondary"
              >
                <Plus size={17} />
                Add Content
              </a>

            </div>

          </div>

          <div className="welcome-icon">
            <Settings size={90} />
          </div>

        </section>

        {/* ===================================================
            STATISTICS
        =================================================== */}

        <section className="admin-stats">

          <div className="stat-card">

            <div className="stat-icon orange">
              <Trophy />
            </div>

            <div>
              <span>Achievements</span>
              <strong>{stats?.Achievement ?? "—"}</strong>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon blue">
              <Bell />
            </div>

            <div>
              <span>Home Notices</span>
              <strong>{stats?.Notice ?? "—"}</strong>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon green">
              <GraduationCap />
            </div>

            <div>
              <span>Admissions</span>
              <strong>{stats?.Admission ?? "—"}</strong>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple">
              <Images />
            </div>

            <div>
              <span>Gallery Items</span>
              <strong>{stats?.Gallery ?? "—"}</strong>
            </div>

          </div>

        </section>

        {statsError && (
          <p role="status" className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {statsError}
          </p>
        )}

        {/* ===================================================
            WEBSITE MANAGEMENT
        =================================================== */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span>
                CONTENT MANAGEMENT
              </span>

              <h2>
                Manage Website
              </h2>

            </div>

          </div>

          <div className="management-grid">

            {managementCards.map((card) => {

              const Icon = card.icon;

              return (

                <div
                  className="management-card"
                  key={card.title}
                >

                  <div className="card-top">

                    <span className="card-number">
                      {card.number}
                    </span>

                    <div
                      className={`management-icon ${card.className}`}
                    >
                      <Icon size={26} />
                    </div>

                  </div>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.description}
                  </p>

                  <a href={card.path}>

                    {card.action}

                    <ArrowRight size={17} />

                  </a>

                </div>

              );

            })}

          </div>

        </section>

        {/* ===================================================
            ACHIEVEMENT MANAGEMENT
        =================================================== */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span>
                ACHIEVEMENT MANAGEMENT
              </span>

              <h2>
                Manage Achievement Categories
              </h2>

            </div>

            <a
              href="/admin/achievements"
              className="view-all-link"
            >
              View All
              <ChevronRight size={16} />
            </a>

          </div>

          <div className="achievement-management-grid">

            {achievementCategories.map((item) => {

              const Icon = item.icon;

              return (

                <a
                  href={item.path}
                  className="achievement-management-card"
                  key={item.title}
                >

                  <div className="achievement-card-icon">
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <span>
                      Manage Records
                    </span>

                  </div>

                  <ArrowRight size={18} />

                </a>

              );

            })}

          </div>

        </section>

        {/* ===================================================
            QUICK ACTIONS
        =================================================== */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span>
                QUICK ACTIONS
              </span>

              <h2>
                Add New Content
              </h2>

            </div>

          </div>

          <div className="quick-grid">

            {quickActions.map((item) => {

              const Icon = item.icon;

              return (

                <a
                  href={item.path}
                  className="quick-action"
                  key={item.title}
                >

                  <div className="quick-icon">
                    <Icon size={21} />
                  </div>

                  <span>
                    {item.title}
                  </span>

                  <Plus size={18} />

                </a>

              );

            })}

          </div>

        </section>

        {/* ===================================================
            RECENT CONTENT
        =================================================== */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span>
                CONTENT OVERVIEW
              </span>

              <h2>
                Recently Managed
              </h2>

            </div>

          </div>

          <div className="recent-content">

            {recentContent.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  className="recent-item"
                  key={item.title}
                >

                  <div className="recent-icon">
                    <Icon size={20} />
                  </div>

                  <div className="recent-info">

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.category}
                    </span>

                  </div>

                  <span className="recent-date">
                    {item.date}
                  </span>

                  <ArrowRight
                    size={17}
                    className="recent-arrow"
                  />

                </div>

              );

            })}

          </div>

        </section>

        {/* ===================================================
            MEDIA INFORMATION
        =================================================== */}

        <section className="media-info">

          <div className="media-info-icon">
            <Upload size={28} />
          </div>

          <div className="media-info-content">

            <h3>
              Upload Images & Videos
            </h3>

            <p>
              Upload JPG, PNG, WEBP images and MP4 videos
              from the Gallery, Achievement, NSS and
              Training & Placement management sections.
            </p>

          </div>

          <div className="media-types">

            <span>
              <ImageIcon size={17} />
              Images
            </span>

            <span>
              <Video size={17} />
              Videos
            </span>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="admin-footer">

          <span>
            © 2026 Yaduvanshi Degree College
          </span>

          <span>
            Admin Control Panel
          </span>

        </footer>

      </main>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .admin-dashboard {
          min-height: 100vh;
          background: #f5f7fb;
          color: #172033;
          display: flex;
          font-family:
            Inter,
            Arial,
            Helvetica,
            sans-serif;
        }

        /* ==================================================
           SIDEBAR
        ================================================== */

        .admin-sidebar {
          width: 270px;
          min-height: 100vh;
          background: #062452;
          color: white;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          z-index: 50;
        }

        .admin-brand {
          height: 90px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 20px;
          border-bottom:
            1px solid rgba(255,255,255,.1);
        }

        .admin-brand img {
          width: 54px;
          height: 54px;
          object-fit: contain;
          border-radius: 50%;
          background: white;
        }

        .admin-brand h2 {
          margin: 0;
          font-size: 19px;
        }

        .admin-brand span {
          font-size: 12px;
          color: #ffb16f;
        }

        .admin-navigation {
          padding: 25px 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .admin-nav-link {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 13px 15px;
          border-radius: 9px;
          color: rgba(255,255,255,.75);
          text-decoration: none;
          font-size: 14px;
          transition: .2s;
        }

        .admin-nav-link:hover {
          background: rgba(255,255,255,.09);
          color: white;
        }

        .admin-nav-link.active {
          background: #ff7600;
          color: white;
        }

        .sidebar-bottom {
          margin-top: auto;
          padding: 15px;
          border-top:
            1px solid rgba(255,255,255,.1);
        }

        .admin-logout {
          width: 100%;
          border: 0;
          background: transparent;
          color: rgba(255,255,255,.75);
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 13px 15px;
          cursor: pointer;
          border-radius: 9px;
          font-size: 14px;
        }

        .admin-logout:hover {
          background: rgba(255,255,255,.09);
          color: white;
        }

        /* ==================================================
           MAIN
        ================================================== */

        .admin-main {
          margin-left: 270px;
          width: calc(100% - 270px);
          min-height: 100vh;
          padding: 0 38px 30px;
        }

        .admin-topbar {
          min-height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e6ee;
          margin-bottom: 28px;
        }

        .admin-small-title {
          margin: 0 0 5px;
          color: #ff7600;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .admin-topbar h1 {
          margin: 0;
          font-size: 28px;
          color: #062452;
        }

        .admin-topbar-actions {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .admin-home-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 14px;
          border: 1px solid #dbe4ef;
          border-radius: 9px;
          background: white;
          color: #062452;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          transition: .2s ease;
        }

        .admin-home-button:hover {
          border-color: #ff7600;
          color: #ff7600;
          transform: translateY(-1px);
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .admin-profile-avatar {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          background: #ff7600;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .admin-profile strong,
        .admin-profile span {
          display: block;
        }

        .admin-profile strong {
          font-size: 14px;
        }

        .admin-profile span {
          color: #7b8494;
          font-size: 11px;
          margin-top: 3px;
        }

        /* ==================================================
           WELCOME
        ================================================== */

        .admin-welcome {
          min-height: 275px;
          border-radius: 20px;
          background:
            linear-gradient(
              120deg,
              #062452,
              #0b3d78
            );
          color: white;
          padding: 38px 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          position: relative;
        }

        .admin-welcome::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          border: 60px solid rgba(255,118,0,.07);
          right: -60px;
          top: -180px;
        }

        .admin-welcome::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255,118,0,.06);
          left: 42%;
          bottom: -110px;
        }

        .welcome-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
        }

        .welcome-label {
          color: #ff9b4b;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .welcome-content h2 {
          margin: 10px 0;
          font-size: 34px;
          line-height: 1.2;
        }

        .welcome-content h2 span {
          color: #ff9b4b;
        }

        .welcome-content p {
          margin: 0;
          max-width: 650px;
          line-height: 1.7;
          color: rgba(255,255,255,.76);
          font-size: 14px;
        }

        .welcome-buttons {
          display: flex;
          gap: 12px;
          margin-top: 22px;
        }

        .welcome-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        .welcome-button.primary {
          background: #ff7600;
          color: white;
        }

        .welcome-button.secondary {
          border: 1px solid rgba(255,255,255,.25);
          color: white;
          background: rgba(255,255,255,.06);
        }

        .welcome-icon {
          position: relative;
          z-index: 2;
          opacity: .14;
          margin-right: 40px;
        }

        /* ==================================================
           STATS
        ================================================== */

        .admin-stats {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin: 25px 0 38px;
        }

        .stat-card {
          background: white;
          border: 1px solid #e5e8ef;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow:
            0 4px 15px rgba(20,30,50,.03);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon.orange {
          background: #fff0e4;
          color: #ff7600;
        }

        .stat-icon.blue {
          background: #e8f0ff;
          color: #245bb5;
        }

        .stat-icon.green {
          background: #e7f7ef;
          color: #22945b;
        }

        .stat-icon.purple {
          background: #f1eaff;
          color: #7148bb;
        }

        .stat-card span {
          display: block;
          color: #7c8492;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .stat-card strong {
          font-size: 25px;
          color: #062452;
        }

        /* ==================================================
           SECTIONS
        ================================================== */

        .dashboard-section {
          margin-bottom: 40px;
        }

        .section-heading {
          margin-bottom: 18px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .section-heading span {
          font-size: 10px;
          color: #ff7600;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .section-heading h2 {
          margin: 5px 0 0;
          color: #062452;
          font-size: 24px;
        }

        .view-all-link {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #ff7600;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        /* ==================================================
           MANAGEMENT
        ================================================== */

        .management-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .management-card {
          background: white;
          border: 1px solid #e4e8ef;
          border-radius: 16px;
          padding: 24px;
          min-height: 275px;
          display: flex;
          flex-direction: column;
          transition: .25s;
        }

        .management-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 15px 35px rgba(10,30,60,.09);
          border-color: #ffb47c;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-number {
          font-size: 11px;
          color: #a0a7b2;
          font-weight: 800;
        }

        .management-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .management-icon.orange {
          background: #fff1e7;
          color: #ff7600;
        }

        .management-icon.blue {
          background: #e8f0ff;
          color: #245bb5;
        }

        .management-icon.green {
          background: #e7f7ef;
          color: #22945b;
        }

        .management-icon.purple {
          background: #f1eaff;
          color: #7148bb;
        }

        .management-card h3 {
          margin: 22px 0 8px;
          color: #062452;
          font-size: 19px;
        }

        .management-card p {
          color: #6f7785;
          font-size: 13px;
          line-height: 1.65;
          margin: 0 0 20px;
        }

        .management-card a {
          margin-top: auto;
          color: #ff7600;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* ==================================================
           ACHIEVEMENT CATEGORIES
        ================================================== */

        .achievement-management-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .achievement-management-card {
          background: white;
          border: 1px solid #e4e8ef;
          border-radius: 13px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #172033;
          transition: .2s;
        }

        .achievement-management-card:hover {
          border-color: #ff7600;
          transform: translateY(-2px);
          box-shadow:
            0 10px 25px rgba(10,30,60,.06);
        }

        .achievement-card-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #fff1e7;
          color: #ff7600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .achievement-management-card h3 {
          margin: 0 0 3px;
          font-size: 14px;
          color: #062452;
        }

        .achievement-management-card span {
          font-size: 11px;
          color: #89919d;
        }

        .achievement-management-card > svg {
          margin-left: auto;
          color: #a0a7b2;
        }

        /* ==================================================
           QUICK ACTIONS
        ================================================== */

        .quick-grid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 14px;
        }

        .quick-action {
          background: white;
          border: 1px solid #e4e8ef;
          border-radius: 12px;
          padding: 16px;
          text-decoration: none;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 11px;
          transition: .2s;
        }

        .quick-action:hover {
          border-color: #ff7600;
          color: #ff7600;
        }

        .quick-action span {
          font-size: 13px;
          font-weight: 700;
          flex: 1;
        }

        .quick-icon {
          width: 38px;
          height: 38px;
          background: #fff0e4;
          color: #ff7600;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ==================================================
           RECENT CONTENT
        ================================================== */

        .recent-content {
          background: white;
          border: 1px solid #e4e8ef;
          border-radius: 15px;
          overflow: hidden;
        }

        .recent-item {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px 18px;
          border-bottom: 1px solid #edf0f4;
        }

        .recent-item:last-child {
          border-bottom: 0;
        }

        .recent-icon {
          width: 40px;
          height: 40px;
          border-radius: 9px;
          background: #fff1e7;
          color: #ff7600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .recent-info {
          flex: 1;
        }

        .recent-info strong {
          display: block;
          color: #062452;
          font-size: 13px;
        }

        .recent-info span {
          display: block;
          color: #8b929d;
          font-size: 11px;
          margin-top: 3px;
        }

        .recent-date {
          font-size: 11px;
          color: #969daa;
        }

        .recent-arrow {
          color: #b2b7c0;
        }

        /* ==================================================
           MEDIA
        ================================================== */

        .media-info {
          background: #fff8f2;
          border: 1px solid #ffe1cc;
          border-radius: 15px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 17px;
          margin-bottom: 35px;
        }

        .media-info-icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          border-radius: 11px;
          background: #ff7600;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .media-info-content {
          flex: 1;
        }

        .media-info h3 {
          margin: 0 0 4px;
          color: #062452;
          font-size: 16px;
        }

        .media-info p {
          margin: 0;
          color: #737b87;
          font-size: 12px;
          line-height: 1.6;
        }

        .media-types {
          display: flex;
          gap: 8px;
        }

        .media-types span {
          display: flex;
          align-items: center;
          gap: 5px;
          background: white;
          border: 1px solid #eadfd6;
          padding: 8px 10px;
          border-radius: 8px;
          color: #555e6c;
          font-size: 11px;
          font-weight: 700;
        }

        /* ==================================================
           FOOTER
        ================================================== */

        .admin-footer {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #e1e5eb;
          padding-top: 20px;
          color: #8b929d;
          font-size: 11px;
        }

        /* ==================================================
           RESPONSIVE
        ================================================== */

        @media (max-width: 1200px) {

          .management-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .achievement-management-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .admin-stats {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        @media (max-width: 900px) {

          .admin-sidebar {
            width: 220px;
          }

          .admin-main {
            margin-left: 220px;
            width: calc(100% - 220px);
            padding: 0 22px 25px;
          }

          .quick-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .admin-welcome {
            padding: 30px;
          }

        }

        @media (max-width: 700px) {

          .admin-sidebar {
            position: relative;
            width: 100%;
            min-height: auto;
          }

          .admin-dashboard {
            display: block;
          }

          .admin-navigation {
            display: grid;
            grid-template-columns:
              repeat(2, 1fr);
          }

          .sidebar-bottom {
            margin-top: 0;
          }

          .admin-main {
            margin-left: 0;
            width: 100%;
            padding: 0 15px 25px;
          }

          .admin-topbar {
            align-items: flex-start;
            gap: 15px;
            flex-direction: column;
            padding: 20px 0;
          }

          .admin-profile {
            align-self: flex-start;
          }

          .admin-stats,
          .management-grid,
          .achievement-management-grid,
          .quick-grid {
            grid-template-columns: 1fr;
          }

          .welcome-icon {
            display: none;
          }

          .welcome-content h2 {
            font-size: 27px;
          }

          .welcome-buttons {
            flex-direction: column;
            align-items: flex-start;
          }

          .media-info {
            align-items: flex-start;
            flex-direction: column;
          }

          .media-types {
            flex-wrap: wrap;
          }

          .admin-footer {
            flex-direction: column;
            gap: 8px;
          }

        }

      `}</style>

    </div>
  );
};

export default AdminDashboard;