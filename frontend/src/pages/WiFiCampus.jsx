import React from "react";
import {
  Wifi,
  Laptop,
  ShieldCheck,
  Clock3,
  Smartphone,
  Globe2,
  Zap,
  Users,
  BookOpen,
  Cloud,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function WiFiCampus() {
  const features = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      text: "Fast and reliable internet access across the campus.",
    },
    {
      icon: Laptop,
      title: "Online Learning Support",
      text: "Access to e-resources, virtual classrooms and academic platforms.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Network",
      text: "Safe and protected internet environment for all users.",
    },
    {
      icon: Clock3,
      title: "24/7 Availability",
      text: "Stay connected round the clock, anytime, anywhere.",
    },
    {
      icon: Smartphone,
      title: "Multi-Device Access",
      text: "Connect from laptops, smartphones, tablets and more.",
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Access Study Material",
      text: "Download notes, research papers and e-books easily.",
    },
    {
      icon: Cloud,
      title: "Attend Virtual Classes",
      text: "Join online lectures and webinars from anywhere.",
    },
    {
      icon: Users,
      title: "Collaborate & Communicate",
      text: "Stay in touch with teachers, friends and industry experts.",
    },
    {
      icon: BarChart3,
      title: "Build Your Future",
      text: "Stay updated with placements, exams and career opportunities.",
    },
  ];

  const highlights = [
    {
      icon: Globe2,
      number: "100%",
      title: "Campus Coverage",
    },
    {
      icon: Zap,
      number: "High Speed",
      title: "Internet Connectivity",
    },
    {
      icon: Users,
      number: "All Departments",
      title: "Connected",
    },
    {
      icon: Smartphone,
      number: "Multiple Devices",
      title: "Support",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "DM Sans", Arial, sans-serif;
          color: #063b82;
          background: #ffffff;
        }

        button,
        input,
        textarea,
        select {
          font-family: inherit;
        }

        .wifi-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .wifi-hero {
          position: relative;
          min-height: 430px;
          overflow: hidden;
          background:
            linear-gradient(
              115deg,
              #001f4d 0%,
              #003875 52%,
              #00558e 100%
            );
          color: #fff;
        }

        .wifi-hero-inner {
          position: relative;
          z-index: 5;

          width: min(1400px, calc(100% - 70px));
          min-height: 430px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: 48% 52%;

          align-items: stretch;
        }

        /* =====================================================
           HERO LEFT CONTENT
        ===================================================== */

        .wifi-hero-copy {
          position: relative;
          z-index: 8;

          min-height: 430px;

          padding: 35px 35px 70px 0;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .wifi-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;

          margin-bottom: 14px;

          font-size: 11px;
          color: rgba(255, 255, 255, 0.78);
        }

        .wifi-breadcrumb span:last-child {
          color: #fff;
          font-weight: 700;
        }

        .wifi-eyebrow {
          margin-bottom: 5px;

          color: #ff6900;

          font-size: 13px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .wifi-hero-title {
          margin: 0;

          font-family: "Playfair Display", Georgia, serif;

          font-size: clamp(44px, 5vw, 67px);
          line-height: 0.98;

          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .wifi-hero-title .orange {
          display: block;
          color: #ff6900;
        }

        .wifi-tagline {
          display: flex;
          align-items: center;
          gap: 13px;

          margin-top: 15px;

          font-family: "Playfair Display", Georgia, serif;
          font-size: 17px;
          font-weight: 700;
        }

        .wifi-tagline .divider {
          width: 2px;
          height: 22px;
          background: #ff6900;
        }

        .wifi-hero-description {
          max-width: 570px;

          margin: 14px 0 0;

          font-size: 12.5px;
          line-height: 1.75;

          color: rgba(255, 255, 255, 0.88);
        }

        /* =====================================================
           RIGHT HERO IMAGE
        ===================================================== */

        .wifi-hero-image-wrap {
          position: relative;

          min-height: 430px;

          overflow: hidden;

          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .wifi-hero-image {
          width: 100%;
          height: 100%;

          min-height: 430px;

          display: block;

          object-fit: cover;
          object-position: center;

          filter: saturate(1.03) contrast(1.02);

          transform: scale(1.01);
        }

        /* Soft overlay over right image */

        .wifi-hero-image-wrap::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(0, 31, 77, 0.48) 0%,
              rgba(0, 31, 77, 0.08) 30%,
              rgba(0, 31, 77, 0.02) 65%,
              rgba(0, 31, 77, 0.30) 100%
            );

          pointer-events: none;
        }

        /* Image left curve */

        .wifi-hero-image-wrap::before {
          content: "";

          position: absolute;
          z-index: 4;

          left: -95px;
          top: -30px;

          width: 160px;
          height: 500px;

          background: #00285e;

          clip-path: ellipse(
            65% 58% at 0% 50%
          );
        }

        /* =====================================================
           WIFI BADGE
        ===================================================== */

        .wifi-hero-badge {
          position: absolute;
          z-index: 7;

          right: 34px;
          top: 50%;

          transform: translateY(-50%);

          width: 175px;

          padding: 18px 15px;

          text-align: center;

          color: #fff;

          background: rgba(0, 35, 76, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.22);

          border-radius: 16px;

          backdrop-filter: blur(8px);

          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.22);
        }

        .wifi-badge-icon {
          width: 66px;
          height: 66px;

          margin: 0 auto 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #16b4ef;

          border: 1px solid rgba(22, 180, 239, 0.35);

          border-radius: 50%;

          background: rgba(0, 0, 0, 0.14);
        }

        .wifi-badge-icon svg {
          width: 42px;
          height: 42px;
          stroke-width: 1.6;
        }

        .wifi-hero-badge h3 {
          margin: 0;

          font-family: "Playfair Display", Georgia, serif;

          font-size: 20px;
          line-height: 1.15;

          font-style: italic;
        }

        /* =====================================================
           DECORATIVE ORANGE LINE
        ===================================================== */

        .wifi-hero-accent {
          position: absolute;
          z-index: 8;

          left: 0;
          bottom: 0;

          width: 48%;
          height: 5px;

          background: #ff6900;
        }

        /* =====================================================
           HERO CURVE
        ===================================================== */

        .wifi-hero-curve {
          position: relative;
          z-index: 20;

          height: 42px;

          margin-top: -1px;

          overflow: hidden;

          background: #fff;
        }

        .wifi-hero-curve::before {
          content: "";

          position: absolute;

          left: -5%;
          right: -5%;

          top: -27px;

          height: 55px;

          background: #ff6900;

          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        }

        .wifi-hero-curve::after {
          content: "";

          position: absolute;

          left: -5%;
          right: -5%;

          top: -20px;

          height: 55px;

          background: #fff;

          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        }

        /* =====================================================
           FEATURES
        ===================================================== */

        .wifi-features {
          width: min(1400px, calc(100% - 70px));

          margin: 0 auto;

          padding: 15px 0 18px;

          display: grid;

          grid-template-columns: repeat(5, 1fr);
        }

        .wifi-feature {
          position: relative;

          min-height: 140px;

          padding: 10px 22px 5px;

          text-align: center;
        }

        .wifi-feature:not(:last-child)::after {
          content: "";

          position: absolute;

          top: 12px;
          right: 0;

          width: 1px;
          height: 115px;

          background: #b8d2ed;
        }

        .feature-icon {
          width: 62px;
          height: 62px;

          margin: 0 auto 9px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #003b7c;
          color: #fff;

          box-shadow:
            0 4px 10px rgba(0, 43, 99, 0.15);
        }

        .feature-icon svg {
          width: 32px;
          height: 32px;

          stroke-width: 1.9;
        }

        .wifi-feature h3 {
          margin: 0 0 6px;

          color: #003b7c;

          font-family: "Playfair Display", Georgia, serif;

          font-size: 14px;
          font-weight: 800;
        }

        .wifi-feature p {
          margin: 0 auto;

          max-width: 185px;

          color: #064a95;

          font-size: 12px;
          line-height: 1.55;
        }

        /* =====================================================
           ABOUT
        ===================================================== */

        .wifi-about {
          background:
            linear-gradient(
              90deg,
              #f8fcff 0%,
              #ffffff 50%,
              #f8fcff 100%
            );

          padding: 10px 0 28px;
        }

        .wifi-about-inner {
          width: min(1400px, calc(100% - 70px));

          margin: 0 auto;

          display: grid;

          grid-template-columns: 48% 52%;

          gap: 35px;

          align-items: center;
        }

        .section-heading-line {
          width: 36px;
          height: 4px;

          margin-bottom: 8px;

          background: #ff6900;
        }

        .wifi-section-title {
          margin: 0 0 10px;

          color: #003b7c;

          font-family: "Playfair Display", Georgia, serif;

          font-size: clamp(30px, 3vw, 37px);

          line-height: 1.1;

          font-weight: 800;
        }

        .wifi-about-text {
          margin: 0 0 12px;

          color: #064a95;

          font-size: 13px;

          line-height: 1.65;
        }

        .wifi-check-list {
          margin: 0;
          padding: 0;

          list-style: none;
        }

        .wifi-check-list li {
          display: flex;
          align-items: center;

          gap: 9px;

          margin: 7px 0;

          color: #064a95;

          font-size: 13px;
        }

        .wifi-check-list svg {
          flex-shrink: 0;

          color: #fff;

          background: #ff6900;

          border-radius: 50%;

          width: 18px;
          height: 18px;

          padding: 2px;

          stroke-width: 3;
        }

        .wifi-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          margin-top: 13px;

          padding: 10px 20px;

          border-radius: 22px;

          text-decoration: none;

          color: white;

          background: #003b7c;

          font-size: 12px;
          font-weight: 700;

          transition: 0.25s ease;
        }

        .wifi-explore-btn:hover {
          background: #ff6900;
          transform: translateY(-2px);
        }

        .wifi-about-image {
          position: relative;

          height: 320px;

          overflow: hidden;

          border-radius: 8px;

          box-shadow:
            0 8px 25px rgba(0, 48, 103, 0.13);
        }

        .wifi-about-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .wifi-image-message {
          position: absolute;

          z-index: 2;

          right: 25px;
          top: 40px;

          width: 125px;

          text-align: center;

          color: white;

          font-family: "Playfair Display", Georgia, serif;

          font-size: 20px;

          line-height: 1.1;

          font-style: italic;

          text-shadow:
            0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .wifi-image-message svg {
          width: 60px;
          height: 60px;

          margin-bottom: 5px;

          stroke-width: 1.7;
        }

        /* =====================================================
           HIGHLIGHTS
        ===================================================== */

        .wifi-highlight-wrap {
          width: min(1400px, calc(100% - 50px));

          margin: 0 auto;

          padding: 0 0 25px;
        }

        .wifi-highlight {
          min-height: 150px;

          padding: 15px 14px;

          display: grid;

          grid-template-columns: 2.6fr 1.4fr;

          align-items: center;

          gap: 20px;

          border-radius: 11px;

          background: #eaf6ff;
        }

        .wifi-stat-grid {
          display: grid;

          grid-template-columns: repeat(4, 1fr);

          gap: 10px;
        }

        .wifi-stat {
          min-height: 125px;

          padding: 15px 13px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          border-radius: 7px;

          border: 1px solid #d8eafa;

          background: rgba(255, 255, 255, 0.7);
        }

        .wifi-stat-icon {
          color: #003b7c;

          margin-bottom: 7px;
        }

        .wifi-stat-icon svg {
          width: 34px;
          height: 34px;

          stroke-width: 1.7;
        }

        .wifi-stat strong {
          color: #003b7c;

          font-family: "Playfair Display", Georgia, serif;

          font-size: 18px;

          line-height: 1.15;
        }

        .wifi-stat span {
          margin-top: 3px;

          color: #00448c;

          font-size: 12px;
        }

        .wifi-quote {
          min-height: 125px;

          padding: 15px 20px;

          border-left: 1px solid #9fc6e8;

          display: flex;

          align-items: center;

          position: relative;
        }

        .wifi-quote-mark {
          position: absolute;

          left: 16px;
          top: 8px;

          color: #ff6900;

          font-family: Georgia, serif;

          font-size: 45px;

          font-weight: 800;
        }

        .wifi-quote p {
          margin: 0;

          padding-left: 25px;

          color: #003b7c;

          font-family: Georgia, serif;

          font-size: 14px;

          line-height: 1.7;

          font-style: italic;
        }

        .wifi-quote strong {
          display: block;

          margin-top: 4px;

          text-align: right;

          font-size: 12px;

          font-style: normal;
        }

        /* =====================================================
           HOW IT HELPS
        ===================================================== */

        .wifi-help {
          width: min(1400px, calc(100% - 70px));

          margin: 0 auto;

          padding: 5px 0 30px;

          display: grid;

          grid-template-columns: 55% 45%;

          align-items: center;

          gap: 25px;
        }

        .wifi-benefits {
          display: grid;

          grid-template-columns: repeat(2, 1fr);

          gap: 25px;

          margin-top: 25px;
        }

        .wifi-benefit {
          display: grid;

          grid-template-columns: 48px 1fr;

          gap: 12px;

          align-items: start;
        }

        .benefit-icon {
          width: 45px;
          height: 45px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #fff;

          background: #003b7c;
        }

        .benefit-icon svg {
          width: 24px;
          height: 24px;
        }

        .wifi-benefit h3 {
          margin: 1px 0 4px;

          color: #003b7c;

          font-size: 13px;
          font-weight: 800;
        }

        .wifi-benefit p {
          margin: 0;

          color: #064a95;

          font-size: 12px;

          line-height: 1.55;
        }

        .wifi-help-image {
          position: relative;

          height: 270px;

          border-radius: 7px;

          overflow: hidden;

          box-shadow:
            0 7px 22px rgba(0, 40, 90, 0.12);
        }

        .wifi-help-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .wifi-image-ribbons {
          position: absolute;

          z-index: 3;

          right: -1px;
          top: 35px;

          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .wifi-ribbon {
          position: relative;

          min-width: 105px;

          padding: 9px 14px 9px 18px;

          color: white;

          background: #00458c;

          font-size: 13px;

          font-weight: 800;

          text-align: left;

          clip-path:
            polygon(
              12% 0,
              100% 0,
              88% 50%,
              100% 100%,
              12% 100%,
              0 50%
            );
        }

        .wifi-ribbon.orange {
          background: #ff6900;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .wifi-cta {
          width: min(1400px, calc(100% - 70px));

          min-height: 75px;

          margin: 0 auto 20px;

          padding: 12px 25px;

          border-radius: 5px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          background: #00376f;

          color: white;
        }

        .wifi-cta-left {
          display: flex;

          align-items: center;

          gap: 17px;
        }

        .wifi-cta-icon {
          color: #ff6900;
        }

        .wifi-cta-icon svg {
          width: 35px;
          height: 35px;
        }

        .wifi-cta h2 {
          margin: 0 0 2px;

          font-family: "Playfair Display", Georgia, serif;

          font-size: 20px;
        }

        .wifi-cta p {
          margin: 0;

          color: rgba(255, 255, 255, 0.85);

          font-size: 11px;
        }

        .wifi-cta-btn {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding: 10px 18px;

          border-radius: 9px;

          color: white;

          background: #ff6900;

          text-decoration: none;

          font-size: 11px;

          font-weight: 700;

          white-space: nowrap;

          transition: 0.25s ease;
        }

        .wifi-cta-btn:hover {
          background: #fff;

          color: #00376f;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .wifi-footer {
          background: #002d5f;

          color: white;
        }

        .wifi-footer-main {
          width: min(1400px, calc(100% - 70px));

          min-height: 125px;

          margin: 0 auto;

          padding: 20px 0;

          display: grid;

          grid-template-columns:
            1.2fr
            1.4fr
            1.4fr
            0.8fr;

          gap: 25px;

          align-items: center;
        }

        .wifi-footer-brand {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .wifi-footer-logo {
          width: 53px;
          height: 53px;

          object-fit: contain;
        }

        .wifi-footer-brand-text strong {
          display: block;

          font-size: 18px;

          letter-spacing: 0.3px;
        }

        .wifi-footer-brand-text span {
          color: #ff6900;

          font-size: 10px;

          font-weight: 800;
        }

        .wifi-footer-column {
          min-height: 65px;

          padding-left: 20px;

          border-left:
            1px solid rgba(255, 255, 255, 0.2);
        }

        .wifi-footer-column h4 {
          margin: 0 0 9px;

          font-size: 11px;

          color: white;
        }

        .wifi-footer-column p,
        .wifi-footer-column a {
          margin: 4px 0;

          color: rgba(255, 255, 255, 0.85);

          font-size: 9px;

          text-decoration: none;
        }

        .wifi-footer-links {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;
        }

        .wifi-socials {
          display: flex;

          gap: 14px;
        }

        .wifi-socials a {
          font-size: 16px;

          font-weight: 800;

          color: white;
        }

        .wifi-footer-bottom {
          min-height: 38px;

          border-top:
            1px solid rgba(255, 255, 255, 0.2);

          width: 100%;
        }

        .wifi-footer-bottom-inner {
          width: min(1400px, calc(100% - 70px));

          margin: 0 auto;

          min-height: 38px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;
        }

        .wifi-footer-bottom p {
          margin: 0;

          color: rgba(255, 255, 255, 0.7);

          font-size: 8px;
        }

        .wifi-footer-slogan {
          color: #ff6900 !important;

          font-weight: 700;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .wifi-hero-inner,
          .wifi-about-inner,
          .wifi-help,
          .wifi-features,
          .wifi-footer-main {
            width: min(100% - 40px, 1100px);
          }

          .wifi-highlight-wrap,
          .wifi-cta {
            width: calc(100% - 40px);
          }

          .wifi-stat strong {
            font-size: 15px;
          }
        }

        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {
          .wifi-hero {
            min-height: auto;
          }

          .wifi-hero-inner {
            width: 100%;

            grid-template-columns: 1fr;
          }

          .wifi-hero-copy {
            min-height: 350px;

            padding: 35px 30px 60px;
          }

          .wifi-hero-image-wrap {
            min-height: 350px;

            border-left: 0;

            border-top:
              1px solid rgba(255, 255, 255, 0.08);
          }

          .wifi-hero-image {
            min-height: 350px;
          }

          .wifi-hero-image-wrap::before {
            display: none;
          }

          .wifi-hero-badge {
            right: 30px;
          }

          .wifi-hero-accent {
            width: 100%;
          }

          .wifi-features {
            grid-template-columns: repeat(2, 1fr);
          }

          .wifi-feature {
            border-bottom: 1px solid #d5e5f5;
          }

          .wifi-feature:nth-child(2)::after,
          .wifi-feature:nth-child(4)::after {
            display: none;
          }

          .wifi-about-inner,
          .wifi-help {
            grid-template-columns: 1fr;
          }

          .wifi-about-image {
            height: 350px;
          }

          .wifi-highlight {
            grid-template-columns: 1fr;
          }

          .wifi-stat-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .wifi-quote {
            border-left: 0;

            border-top:
              1px solid #9fc6e8;
          }

          .wifi-footer-main {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .wifi-hero-copy {
            min-height: 330px;

            padding: 25px 20px 55px;
          }

          .wifi-hero-title {
            font-size: 45px;
          }

          .wifi-tagline {
            font-size: 15px;
          }

          .wifi-hero-description {
            font-size: 12px;
          }

          .wifi-hero-image-wrap {
            min-height: 290px;
          }

          .wifi-hero-image {
            min-height: 290px;

            object-position: center;
          }

          .wifi-hero-badge {
            right: 15px;

            width: 135px;

            padding: 13px 10px;
          }

          .wifi-badge-icon {
            width: 52px;
            height: 52px;
          }

          .wifi-badge-icon svg {
            width: 34px;
            height: 34px;
          }

          .wifi-hero-badge h3 {
            font-size: 16px;
          }

          .wifi-features {
            width: calc(100% - 25px);

            grid-template-columns: 1fr;
          }

          .wifi-feature {
            min-height: 125px;

            padding: 10px 20px 15px;
          }

          .wifi-feature:not(:last-child)::after {
            top: auto;

            right: 15%;

            bottom: 0;

            width: 70%;

            height: 1px;
          }

          .wifi-feature:nth-child(2)::after,
          .wifi-feature:nth-child(4)::after {
            display: block;
          }

          .wifi-about-inner,
          .wifi-help,
          .wifi-highlight-wrap,
          .wifi-cta,
          .wifi-footer-main,
          .wifi-footer-bottom-inner {
            width: calc(100% - 25px);
          }

          .wifi-about {
            padding-top: 20px;
          }

          .wifi-section-title {
            font-size: 30px;
          }

          .wifi-about-image {
            height: 260px;
          }

          .wifi-stat-grid {
            grid-template-columns: 1fr 1fr;
          }

          .wifi-stat {
            min-height: 110px;
          }

          .wifi-benefits {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .wifi-help-image {
            height: 230px;
          }

          .wifi-cta {
            flex-direction: column;

            align-items: flex-start;

            padding: 18px;
          }

          .wifi-cta-btn {
            width: 100%;

            justify-content: center;
          }

          .wifi-footer-main {
            grid-template-columns: 1fr;
          }

          .wifi-footer-column {
            padding-left: 0;

            border-left: 0;

            border-top:
              1px solid rgba(255, 255, 255, 0.2);

            padding-top: 15px;
          }

          .wifi-footer-bottom-inner {
            padding: 10px 0;

            flex-direction: column;

            justify-content: center;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {
          .wifi-hero-title {
            font-size: 39px;
          }

          .wifi-hero-image-wrap {
            min-height: 260px;
          }

          .wifi-hero-image {
            min-height: 260px;
          }

          .wifi-hero-badge {
            right: 10px;

            width: 120px;
          }

          .wifi-hero-badge h3 {
            font-size: 14px;
          }

          .wifi-stat-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="wifi-page">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="wifi-hero">

          <div className="wifi-hero-inner">

            {/* ===============================================
                LEFT CONTENT
            =============================================== */}

            <div className="wifi-hero-copy">

              <div className="wifi-breadcrumb">
                <span>Home</span>
                <span>›</span>
                <span>Facilities</span>
                <span>›</span>
                <span>Wi-Fi Enabled Campus</span>
              </div>

              <div className="wifi-eyebrow">
                FACILITIES
              </div>

              <h1 className="wifi-hero-title">
                Wi-Fi Enabled
                <span className="orange">
                  Campus
                </span>
              </h1>

              <div className="wifi-tagline">
                <span>Stay Connected</span>

                <span className="divider"></span>

                <span>Stay Ahead</span>
              </div>

              <p className="wifi-hero-description">
                At Yaduvanshi Degree College, we provide
                a high-speed, secure and reliable Wi-Fi
                enabled campus to keep our students
                connected with the world. Our digital
                infrastructure ensures seamless access
                to online resources, e-learning platforms
                and academic tools, anytime, anywhere.
              </p>

            </div>

            {/* ===============================================
                RIGHT IMAGE
            =============================================== */}

            <div className="wifi-hero-image-wrap">

              <img
                src="/images/facilities/wifi-hero.jpg"
                alt="Student using Wi-Fi at Yaduvanshi Degree College"
                className="wifi-hero-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "/images/wifihero.png";
                }}
              />

              <div className="wifi-hero-badge">

                <div className="wifi-badge-icon">
                  <Wifi />
                </div>

                <h3>
                  Free Wi-Fi
                  <br />
                  Across Campus
                </h3>

              </div>

            </div>

          </div>

          {/* Orange accent */}

          <div
            className="wifi-hero-accent"
            aria-hidden="true"
          />

        </section>

        {/* Hero curve */}

        <div
          className="wifi-hero-curve"
          aria-hidden="true"
        />

        {/* ===================================================
            FEATURE ROW
        =================================================== */}

        <section className="wifi-features">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="wifi-feature"
                key={index}
              >

                <div className="feature-icon">
                  <Icon />
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </div>
            );
          })}

        </section>

        {/* ===================================================
            ABOUT WI-FI
        =================================================== */}

        <section className="wifi-about">

          <div className="wifi-about-inner">

            <div>

              <div className="section-heading-line"></div>

              <h2 className="wifi-section-title">
                About Wi-Fi Enabled Campus
              </h2>

              <p className="wifi-about-text">
                Yaduvanshi Degree College provides a
                modern Wi-Fi enabled campus to support
                digital learning, research and innovation.
                Our campus is equipped with high-speed
                internet connectivity, ensuring that
                students and faculty can access online
                resources, attend virtual classes, and
                stay updated with the latest information
                anytime, anywhere.
              </p>

              <ul className="wifi-check-list">

                <li>
                  <CheckCircle2 />
                  Campus-wide high-speed Wi-Fi coverage
                </li>

                <li>
                  <CheckCircle2 />
                  Easy access to e-books, research journals
                  and online databases
                </li>

                <li>
                  <CheckCircle2 />
                  Supports smart classrooms and digital
                  learning
                </li>

                <li>
                  <CheckCircle2 />
                  Enables smooth communication and
                  collaboration
                </li>

              </ul>

              <a
                href="/facilities"
                className="wifi-explore-btn"
              >
                Explore More Facilities
                <ArrowRight size={16} />
              </a>

            </div>

            <div className="wifi-about-image">

              <img
                src="/images/facilities/wifi-students.jpg"
                alt="Students using Wi-Fi enabled campus"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "/images/wifi.png";
                }}
              />

              <div className="wifi-image-message">

                <Wifi />

                <div>
                  Connect
                  <br />
                  Learn
                  <br />
                  Grow
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            HIGHLIGHTS
        =================================================== */}

        <section className="wifi-highlight-wrap">

          <div className="wifi-highlight">

            <div className="wifi-stat-grid">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    className="wifi-stat"
                    key={index}
                  >

                    <div className="wifi-stat-icon">
                      <Icon />
                    </div>

                    <strong>
                      {item.number}
                    </strong>

                    <span>
                      {item.title}
                    </span>

                  </div>
                );
              })}

            </div>

            <div className="wifi-quote">

              <span className="wifi-quote-mark">
                “
              </span>

              <p>
                The Wi-Fi facility at Yaduvanshi
                Degree College makes learning easier,
                faster and smarter. It helps us stay
                connected with the world.

                <strong>
                  — Student, YDC
                </strong>
              </p>

            </div>

          </div>

        </section>

        {/* ===================================================
            HOW IT HELPS
        =================================================== */}

        <section className="wifi-help">

          <div>

            <div className="section-heading-line"></div>

            <h2 className="wifi-section-title">
              How It Helps You
            </h2>

            <div className="wifi-benefits">

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    className="wifi-benefit"
                    key={index}
                  >

                    <div className="benefit-icon">
                      <Icon />
                    </div>

                    <div>

                      <h3>
                        {benefit.title}
                      </h3>

                      <p>
                        {benefit.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          <div className="wifi-help-image">

            <img
              src="/images/facilities/wifi-laptop.jpg"
              alt="Free Wi-Fi for students"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "/images/wifi1.png";
              }}
            />

            <div className="wifi-image-ribbons">

              <div className="wifi-ribbon">
                STUDY
              </div>

              <div className="wifi-ribbon">
                RESEARCH
              </div>

              <div className="wifi-ribbon orange">
                CONNECT
              </div>

              <div className="wifi-ribbon">
                ACHIEVE
              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            CTA
        =================================================== */}

        <section className="wifi-cta">

          <div className="wifi-cta-left">

            <div className="wifi-cta-icon">
              <Wifi />
            </div>

            <div>

              <h2>
                Need Help or More Information?
              </h2>

              <p>
                Our campus team is always ready to
                assist you.
              </p>

            </div>

          </div>

          <a
            href="/contact"
            className="wifi-cta-btn"
          >
            Contact Us
            <ArrowRight size={15} />
          </a>

        </section>

      </div>
    </>
  );
}