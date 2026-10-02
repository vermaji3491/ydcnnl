import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Users,
  BookOpen,
  FileText,
  Settings,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../lib/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const result = await apiFetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("adminToken", result.token);
      navigate("/admin/dashboard");
    } catch (loginError) {
      setError(loginError.message || "Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBackToWebsite = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f4f8fc] flex flex-col">
      {/* ================= MAIN AREA ================= */}
      <div className="flex-1 grid lg:grid-cols-2">

        {/* ================= LEFT PANEL ================= */}
        <section className="relative overflow-hidden bg-[#062b63] text-white min-h-[650px] lg:min-h-screen">

          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#062b63] via-[#073b78] to-[#031c43]" />

          {/* Decorative circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-400/10" />
          <div className="absolute bottom-32 -right-24 w-80 h-80 rounded-full bg-orange-400/10" />

          <div className="relative z-10 h-full flex flex-col">

            {/* College Branding */}
            <div className="px-8 md:px-12 lg:px-16 pt-10">
              <div className="flex items-center gap-5">

                {/* Logo */}
                <div className="w-24 h-24 rounded-full border-4 border-orange-400 bg-white flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    src="/images/Cyaduvanshilogo.png"
                    alt="Yaduvanshi Degree College Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide">
                    YADUVANSHI
                  </h1>

                  <h2 className="text-xl md:text-2xl font-serif font-semibold">
                    DEGREE COLLEGE
                  </h2>

                  <p className="mt-2 text-sm tracking-[0.3em] text-orange-300">
                    Learn • Grow • Achieve
                  </p>
                </div>
              </div>
            </div>

            {/* Main Message */}
            <div className="px-8 md:px-12 lg:px-16 mt-12">
              <div className="w-16 h-1 bg-orange-500 mb-5" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Empowering Education,
                <span className="block text-orange-400">
                  Building a Brighter Future
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-blue-50 text-base md:text-lg leading-7">
                The Admin Panel provides a secure and efficient platform
                to manage all academic and institutional activities of
                Yaduvanshi Degree College.
              </p>
            </div>

            {/* Features */}
            <div className="px-8 md:px-12 lg:px-16 mt-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-2xl">

                <Feature
                  icon={<Users size={25} />}
                  title="Manage"
                  subtitle="Students"
                />

                <Feature
                  icon={<BookOpen size={25} />}
                  title="Track"
                  subtitle="Academics"
                />

                <Feature
                  icon={<FileText size={25} />}
                  title="Handle"
                  subtitle="Admissions"
                />

                <Feature
                  icon={<Settings size={25} />}
                  title="Control"
                  subtitle="Operations"
                />

              </div>
            </div>

            {/* Campus Image */}
            <div className="absolute bottom-0 left-0 right-0 h-[35%] min-h-[230px]">
              <img
                src="/images/campus.jpg"
                alt="Yaduvanshi Degree College Campus"
                className="w-full h-full object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#031c43] via-transparent to-transparent" />
            </div>

            {/* Orange Curve */}
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
              <div className="absolute -bottom-16 -left-10 w-[110%] h-32 bg-orange-500 rounded-[50%]" />
              <div className="absolute -bottom-24 -left-10 w-[110%] h-36 bg-[#062b63] rounded-[50%]" />
            </div>

            {/* Slogan */}
            <div className="absolute bottom-8 left-8 md:left-12 z-20">
              <p className="font-serif italic text-xl md:text-2xl">
                Together Towards
              </p>
              <p className="font-serif italic text-xl md:text-2xl text-orange-400">
                Excellence
              </p>

              <div className="w-32 h-1 bg-orange-400 mt-2" />
            </div>

          </div>
        </section>

        {/* ================= RIGHT LOGIN PANEL ================= */}
        <section className="relative flex items-center justify-center px-5 py-12 md:px-10 lg:px-16 bg-[#f7fafc] overflow-hidden">

          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-orange-100 rounded-bl-full opacity-60" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-tl-full opacity-60" />

          <div className="relative z-10 w-full max-w-xl">

            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-[0_15px_50px_rgba(5,40,90,0.12)] border border-blue-50 p-7 md:p-10">

              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#082d65]">
                  Admin Login
                </h2>

                <p className="mt-3 text-[#174b89]">
                  Access your dashboard to manage the college operations.
                </p>

                <div className="w-16 h-1 bg-orange-500 mt-5" />
              </div>

              {/* Form */}
              <form onSubmit={handleLogin}>

                {error && (
                  <p role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                    {error}
                  </p>
                )}

                {/* Username */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#123d72] mb-2">
                    Username / Email ID
                  </label>

                  <div className="relative">
                    <User
                      size={21}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#18508f]"
                    />

                    <input
                      type="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username / Email ID"
                      required
                      className="w-full h-16 pl-14 pr-5 rounded-xl border border-blue-200 outline-none text-[#082d65] placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#123d72] mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={21}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#18508f]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                      className="w-full h-16 pl-14 pr-14 rounded-xl border border-blue-200 outline-none text-[#082d65] placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-[#18508f] hover:text-orange-500"
                    >
                      {showPassword ? (
                        <EyeOff size={21} />
                      ) : (
                        <Eye size={21} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember / Forgot */}
                <div className="flex items-center justify-between gap-4 mb-7">

                  <label className="flex items-center gap-3 text-sm text-[#174b89] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 accent-orange-500"
                    />

                    Remember Me
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-orange-500 transition"
                  >
                    Forgot Password?
                  </button>

                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-16 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-orange-200 transition duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ArrowRight size={24} />
                  {submitting ? "Signing in..." : "Login"}
                </button>

                {/* ================= BACK TO WEBSITE ================= */}
                <button
                  type="button"
                  onClick={handleBackToWebsite}
                  className="w-full h-14 mt-4 rounded-xl border-2 border-[#0a3974] text-[#0a3974] font-semibold flex items-center justify-center gap-2 hover:bg-[#0a3974] hover:text-white transition duration-300"
                >
                  <ArrowLeft size={20} />
                  Back to Website
                </button>

              </form>

              {/* Secure Access */}
              <div className="flex items-center gap-4 my-7">
                <div className="h-px bg-blue-100 flex-1" />

                <div className="flex items-center gap-2 text-sm text-[#174b89]">
                  <ShieldCheck size={18} />
                  Secure Access
                </div>

                <div className="h-px bg-blue-100 flex-1" />
              </div>

              {/* Security Notice */}
              <div className="flex gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">

                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#0a3974] text-white flex items-center justify-center">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0a3974]">
                    Authorized Access Only
                  </h4>

                  <p className="text-sm text-[#285785] mt-1 leading-6">
                    This panel is restricted to authorized personnel only.
                    Unauthorized access is prohibited.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#062b63] text-white px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">

        <p className="text-blue-100">
          © 2026 Yaduvanshi Degree College. All Rights Reserved.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-orange-400">
            Admin Panel
          </span>

          <span className="text-blue-300">|</span>

          <span>
            Yaduvanshi Degree College
          </span>
        </div>

      </footer>
    </div>
  );
};

/* ================= FEATURE COMPONENT ================= */

const Feature = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center gap-3 border-r border-blue-300/40 last:border-0 pr-4">

      <div className="w-12 h-12 rounded-full border-2 border-orange-500 text-orange-400 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-sm">
          {title}
        </p>

        <p className="text-sm text-blue-100">
          {subtitle}
        </p>
      </div>

    </div>
  );
};

export default AdminLogin;