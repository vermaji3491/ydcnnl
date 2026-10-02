
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import AboutSociety from "./pages/AboutSociety";
import Approval from "./pages/approval";
import Governingbody from "./pages/Governingbody";
import Affiliation from "./pages/Affiliation";
import Advisoryboard from "./pages/Advisoryboard";
import Founderdirector from "./pages/Founderdirector";
import Ceo from "./pages/Ceo";
import Chairman from "./pages/Chairman";
import Director from "./pages/Director";
import Principal from "./pages/Principal";
import Registrar from "./pages/Registrar";
import Courses from "./pages/Courses";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Campuses from "./pages/Campuses";
import OnlineRegistration from "./pages/OnlineRegistration";
import AdmissionForm from "./pages/AdmissionForm";
import GeneralInstruction from "./pages/GeneralInstruction";
import FeesStructure from "./pages/FeesStructure";
import RulesRegulations from "./pages/RulesRegulations";
import AdmissionCriteria from "./pages/AdmissionCriteria";
import AntiRaggingCell from "./pages/AntiRaggingCell";
import Transportation from "./pages/Transportation";
import ICT from "./pages/ICT";
import TrainingPlacement from "./pages/TrainingPlacement";
import OnlineAdmission from "./pages/OnlineAdmission";
import SportsComplex from "./pages/SportsComplex";
import WiFiCampus from "./pages/WiFiCampus";
import ConferenceWorkshop from "./pages/ConferenceWorkshop";
import PhysicsLab from "./pages/PhysicsLab";
import ChemistryLab from "./pages/ChemistryLab";
import ComputerLab from "./pages/ComputerLab";
import BiologyLab from "./pages/BiologyLab";
import GeographyLab from "./pages/GeographyLab";
import Library from "./pages/Library";
import NSS from "./pages/NSS";
import Achievement from "./pages/Achievement";
import Achievementsports from "./pages/AchievementsSports";
import IITJAM from "./pages/IITJAM";
import NETGATE from "./pages/NETGATE";
import UniversityPosition from "./pages/UniversityPosition";
import CulturalEventsAchievement from "./pages/CulturalEventsAchievement";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import NoticeManagement from "./pages/admin/NoticeManagement";
import FeeManagement from "./pages/admin/FeeManagement";
import AchievementManagement from "./pages/admin/AchievementManagement";
import GalleryManagement from "./pages/admin/GalleryManagement";
import TrainingPlacementManagement from "./pages/admin/TrainingPlacementManagement";
import NSSManagement from "./pages/admin/NSSManagement";
import Recruitment from "./pages/Recruitment";
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission/online-registration" element={<OnlineAdmission />}/>
          <Route path="/about/vision-mission"element={<VisionMission />}/>
          <Route path="/about/society" element={<AboutSociety />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/approval" element={<Approval />} />
          <Route path="/about/affiliation" element={<Affiliation />} />
          <Route path="/about/administration/governing-body" element={<Governingbody />} />
          <Route path="/about/administration/advisory-board" element={<Advisoryboard />} />
          <Route path="/about/administration/founder-director" element={<Founderdirector />} />
          <Route path="/about/administration/ceo" element={<Ceo />} />
          <Route path="/about/administration/chairman" element={<Chairman />} />
          <Route path="/about/administration/director" element={<Director />} />
          <Route path="/about/administration/principal" element={<Principal />} />
          <Route path="/about/administration/registrar" element={<Registrar />} />
          <Route path="/yaduvanshi-campus" element={<Campuses />} />  
          <Route path="/admission/general-instruction" element={<GeneralInstruction />} />
          <Route path="/admission/admission-form" element={<AdmissionForm />} />
          <Route path="/admission/fees-structure" element={<FeesStructure />} />
          <Route path="/admission/rules-regulations" element={<RulesRegulations />} />
          <Route path="/admission/admission-criteria" element={<AdmissionCriteria />} />
          <Route path="/admission/anti-ragging-cell" element={<AntiRaggingCell />} />
          <Route path="/facilities/transportation" element={<Transportation />} />
          <Route path="/facilities/ict" element={<ICT />} />
          <Route path="/admission/online-admission" element={<OnlineRegistration />} />
          <Route path="/training-placement" element={<TrainingPlacement />} />
          <Route path="/facilities/sports-complex" element={<SportsComplex />} />
          <Route path="/facilities/wifi" element={<WiFiCampus />} />
          <Route path="/facilities/conference-workshop" element={<ConferenceWorkshop />} />
          <Route path="/facilities/laboratories/physics-lab" element={<PhysicsLab />} />
          <Route path="/facilities/laboratories/chemistry-lab" element={<ChemistryLab />} />
          <Route path="/facilities/laboratories/biology-lab" element={<BiologyLab />} />
          <Route path="/facilities/laboratories/geography-lab" element={<GeographyLab />} />
          <Route path="/facilities/laboratories/computer-lab" element={<ComputerLab />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/nss" element={<NSS />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/achievement/sports" element={<Achievementsports />} />
          <Route path="/achievement/iit-jam" element={<IITJAM />} />
          <Route path="/achievement/netgate" element={<NETGATE />} />
          <Route path="/achievement/university-position" element={<UniversityPosition />} />
          <Route path="/achievement/cultural-events" element={<CulturalEventsAchievement />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/notices" element={<NoticeManagement />} />
          <Route path="/admin/fees-structure" element={<FeeManagement />} />
          <Route path="/admin/achievements" element={<AchievementManagement />} />
          <Route path="/admin/achievements/:category" element={<AchievementManagement />} />
          <Route path="/admin/gallery" element={<GalleryManagement />} />
          <Route path="/admin/training-placement" element={<TrainingPlacementManagement />} />
          <Route path="/admin/nss" element={<NSSManagement />} />
          <Route path="/recruitment" element={<Recruitment />} /> 
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}