import React, { useEffect, useMemo, useState } from "react";
import {
  Trophy, Medal, Award, GraduationCap, CalendarDays, Users, Search,
  Filter, X, ChevronRight, ArrowRight, Crown, Images, Star, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { apiFetch } from "../lib/api";

/*
  UNIVERSITY POSITION PAGE
  Route: /achievement/university-position

  This is the SECOND page.
  Achievement.jsx remains the MAIN achievement page at /achievement.

  The photos below are demo/stock images. Replace them with your real
  position-holder photographs later.
*/

const photos = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=85",
];

const gallery = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90",
];

const years = [
  ["2026",128,[
    ["Priya Sharma","1st","B.Sc. (PCM)",photos[0]],
    ["Rahul Verma","2nd","B.Com.",photos[1]],
    ["Sneha Patel","3rd","B.A.",photos[2]],
  ]],
  ["2025",96,[
    ["Rohan Singh","1st","B.Sc. (PCM)",photos[3]],
    ["Neha Gupta","2nd","B.Com.",photos[4]],
    ["Vikas Yadav","3rd","B.A.",photos[5]],
  ]],
  ["2024",88,[
    ["Anjali Verma","1st","B.Com.",photos[6]],
    ["Sahil Khan","2nd","B.Sc.",photos[7]],
    ["Ritika Singh","3rd","B.A.",photos[0]],
  ]],
  ["2023",76,[
    ["Neha Sharma","1st","B.Sc. (PCM)",photos[2]],
    ["Karan Patel","2nd","B.Com.",photos[7]],
    ["Pooja Tiwari","3rd","B.A.",photos[4]],
  ]],
  ["2022",65,[
    ["Rohit Kumar","1st","B.Com.",photos[1]],
    ["Simran Kaur","2nd","B.Sc.",photos[6]],
    ["Aditya Sharma","3rd","B.A.",photos[3]],
  ]],
  ["2021",58,[
    ["Pooja Singh","1st","B.Sc. (PCM)",photos[4]],
    ["Arjun Yadav","2nd","B.Com.",photos[5]],
    ["Sneha Rathi","3rd","B.A.",photos[2]],
  ]],
  ["2020",72,[
    ["Aman Kumar","1st","B.Com.",photos[5]],
    ["Riya Sharma","2nd","B.Sc.",photos[2]],
    ["Sandeep Singh","3rd","B.A.",photos[7]],
  ]],
  ["2019",68,[
    ["Snehal Gupta","1st","B.Sc. (PCM)",photos[0]],
    ["Harsh Vardhan","2nd","B.Com.",photos[3]],
    ["Nitika Singh","3rd","B.A.",photos[4]],
  ]],
  ["2018",62,[
    ["Vivek Yadav","1st","B.Com.",photos[1]],
    ["Anjali Verma","2nd","B.Sc.",photos[6]],
    ["Ritu Singh","3rd","M.Com.",photos[2]],
  ]],
  ["2017",54,[
    ["Pallavi Sharma","1st","B.Sc. (PCM)",photos[4]],
    ["Saurabh Kumar","2nd","B.Com.",photos[7]],
    ["Kajal Patel","3rd","B.A.",photos[6]],
  ]],
  ["2016",48,[
    ["Rohini Gupta","1st","B.Com.",photos[2]],
    ["Nitin Yadav","2nd","B.Sc.",photos[1]],
    ["Priya Singh","3rd","B.A.",photos[0]],
  ]],
  ["2015",42,[
    ["Tanya Sharma","1st","B.Sc. (PCM)",photos[0]],
    ["Vikram Singh","2nd","B.Com.",photos[5]],
    ["Shreya Patel","3rd","B.A.",photos[4]],
  ]],
];

const studentData = years.flatMap(([year, positions, students]) =>
  students.map(([name, rank, course, photo]) => ({
    name, rank, course, photo, year, positions,
    session: `${Number(year)-1}–${String(year).slice(2)}`,
    subject: "University Position Holder",
    photos: [photo, ...gallery.slice(0, 5)],
  }))
);

export default function UniversityPosition() {
  const [managedAchievements, setManagedAchievements] = useState([]);
  const [trophyImageFailed, setTrophyImageFailed] = useState(false);
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All Courses");
  const [rank, setRank] = useState("All Positions");
  const [selected, setSelected] = useState(null);
  const [galleryYear, setGalleryYear] = useState(null);

  useEffect(() => {
    apiFetch("/api/achievements")
      .then((result) => setManagedAchievements(result.achievements || []))
      .catch((error) => console.error("Error fetching university positions:", error));
  }, []);

  const courses = useMemo(
    () => ["All Courses", ...new Set([
      ...studentData.map((student) => student.course),
      ...managedAchievements.map((achievement) => achievement.course).filter(Boolean),
    ])],
    [managedAchievements]
  );

  const filteredYears = useMemo(() => {
    const q = search.trim().toLowerCase();
    const groupsByYear = new Map(years.map(([year, positions, students]) => [
      year,
      {
        year,
        positions,
        latest: year === "2026",
        students: students.map(([name, studentRank, studentCourse, photo]) => ({
          name,
          rank: studentRank,
          course: studentCourse,
          photo,
          year,
          positions,
          session: `${Number(year)-1}–${String(year).slice(2)}`,
          subject: "University Position Holder",
          photos: [photo, ...gallery.slice(0, 5)],
        })),
      },
    ]));

    managedAchievements
      .filter((achievement) => achievement.category === "University Position")
      .forEach((achievement, index) => {
        const year = String(achievement.year || new Date().getFullYear());
        const group = groupsByYear.get(year) || {
          year,
          positions: 0,
          latest: year === String(new Date().getFullYear()),
          students: [],
        };
        const photo = achievement.image_url || photos[index % photos.length];
        group.students.unshift({
          id: achievement.id,
          name: achievement.student_name || achievement.title,
          rank: achievement.rank || "Position Holder",
          course: achievement.course || "",
          photo,
          year,
          positions: group.positions + 1,
          session: `${Number(year)-1}–${String(year).slice(2)}`,
          subject: achievement.title || "University Position Holder",
          description: achievement.description,
          photos: achievement.image_url ? [achievement.image_url] : [photo],
        });
        group.positions += 1;
        groupsByYear.set(year, group);
      });

    return [...groupsByYear.values()]
      .sort((first, second) => Number(second.year) - Number(first.year))
      .map((group) => ({
        ...group,
        students: group.students
          .filter((s) => {
            const text = `${s.name} ${s.course} ${s.subject}`.toLowerCase();
            return (!q || text.includes(q)) &&
              (course === "All Courses" || s.course === course) &&
              (rank === "All Positions" || s.rank === rank);
          }),
      }))
      .filter((g) => g.students.length);
  }, [search, course, rank, managedAchievements]);

  return (
    <div className="up-page">
      <style>{`
        *{box-sizing:border-box}
        .up-page{--navy:#062452;--deep:#031735;--blue:#0a3977;--orange:#ff7600;--gold:#ffb21c;--cream:#fffdf9;--soft:#f5f8fc;--text:#17375f;--muted:#687b94;background:var(--cream);color:var(--text);font-family:"DM Sans",Arial,sans-serif;overflow:hidden}
        .up-page a{text-decoration:none}
        .up-page button,.up-page input,.up-page select{font:inherit}
        .up-page button{cursor:pointer}

        /* HERO - designed to match the supplied screenshot */
        .up-hero{position:relative;min-height:505px;color:#fff;overflow:hidden;background:
          linear-gradient(90deg,rgba(2,23,53,.98) 0%,rgba(5,42,85,.9) 45%,rgba(4,42,82,.38) 74%,rgba(3,23,53,.62) 100%),
          url("/images/igu.png") center/cover no-repeat,
          url("https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=90") center/cover}
        .up-hero-inner{width:min(1320px,92%);min-height:505px;margin:auto;position:relative;z-index:3;display:flex;align-items:center}
        .up-copy{width:57%;padding:50px 0 115px}
        .up-breadcrumb{display:flex;gap:8px;align-items:center;color:rgba(255,255,255,.7);font-size:12px;margin-bottom:20px}
        .up-breadcrumb a{color:#fff}
        .up-kicker{display:inline-flex;align-items:center;gap:8px;padding:7px 13px;border:1px solid rgba(255,190,50,.45);border-radius:999px;background:rgba(255,118,0,.13);color:#ffc34d;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;margin-bottom:17px}
        .up-hero h1{margin:0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(46px,6vw,77px);line-height:.98;letter-spacing:-2px}
        .up-hero h1 span{color:#ffb72b}
        .up-hero p{max-width:650px;margin:20px 0;color:rgba(255,255,255,.86);font-size:16px;line-height:1.7}
        .up-actions{display:flex;gap:10px;flex-wrap:wrap}
        .up-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 17px;border-radius:10px;font-size:12px;font-weight:900;transition:.2s}
        .up-btn-primary{background:#ffbf3f;color:var(--navy)}
        .up-btn-primary:hover{transform:translateY(-2px);background:#fff}
        .up-btn-ghost{border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.08);color:#fff}
        .up-btn-ghost:hover{background:rgba(255,255,255,.16)}
        .up-trophy{position:absolute;right:8%;top:48%;transform:translateY(-50%);z-index:4;width:330px;height:330px;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(255,183,40,.2),transparent 68%)}
        .up-trophy-inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center}
        .up-trophy-inner img{display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 18px 22px rgba(0,0,0,.28))}
        .up-trophy-inner svg{width:82px;height:82px;color:#ffbf3f;filter:drop-shadow(0 12px 16px rgba(0,0,0,.35))}
        .up-wave{position:absolute;z-index:7;bottom:-1px;left:0;width:100%;height:95px}.up-wave svg{width:100%;height:100%;display:block}

        /* STATS */
        .up-stats-wrap{position:relative;z-index:10;width:min(1120px,92%);margin:-1px auto 0}
        .up-stats{display:grid;grid-template-columns:repeat(4,1fr);padding:10px;border:1px solid #e1e8ef;border-radius:16px;background:#fff;box-shadow:0 13px 35px rgba(6,36,82,.09)}
        .up-stat{display:flex;align-items:center;gap:13px;padding:12px 18px;border-right:1px solid #e6ecf2;min-height:78px}.up-stat:last-child{border-right:0}
        .up-stat-icon{width:48px;height:48px;flex:0 0 48px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--navy);background:#ffe8ad}
        .up-stat strong{display:block;font-family:Georgia,serif;font-size:27px;color:var(--navy);line-height:1}.up-stat span{display:block;color:#60728b;font-size:10px;margin-top:5px}

        /* INTRO */
        .up-intro{width:min(1000px,92%);margin:auto;padding:60px 0 25px;text-align:center}
        .up-label{color:#c67900;font-size:11px;font-weight:900;letter-spacing:2px;text-transform:uppercase}
        .up-intro h2{margin:8px 0 0;font-family:Georgia,serif;color:var(--navy);font-size:clamp(34px,4vw,49px)}.up-intro h2 span{color:var(--orange)}
        .up-intro p{max-width:760px;margin:12px auto;color:var(--muted);font-size:14px;line-height:1.75}

        /* FILTER BAR */
        .up-filters{width:min(1120px,92%);margin:15px auto 34px;padding:11px;display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:9px;border:1px solid #e1e7ee;border-radius:14px;background:#fff;box-shadow:0 8px 24px rgba(6,36,82,.05)}
        .up-field{position:relative}.up-field svg{position:absolute;left:13px;top:50%;transform:translateY(-50%);color:#718198;pointer-events:none}.up-field input,.up-field select{width:100%;height:45px;border:1px solid #dfe6ee;border-radius:9px;background:#fbfcfe;color:#233f63;padding:0 12px 0 40px;outline:none}.up-field input:focus,.up-field select:focus{border-color:#ffb21c;box-shadow:0 0 0 3px rgba(255,178,28,.12)}

        /* YEAR CARDS */
        .up-years{width:min(1120px,92%);margin:auto;padding-bottom:78px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .up-year{scroll-margin-top:90px;border-radius:12px;transition:.2s}
        .up-year.selected{outline:3px solid rgba(255,178,28,.42);outline-offset:3px}
        .up-year-head{width:100%;display:flex;align-items:center;min-height:55px;padding:0;border:0;background:var(--navy);color:#fff;border-radius:12px 12px 0 0;overflow:hidden;cursor:pointer;text-align:left}
        .up-year.latest .up-year-head{background:linear-gradient(100deg,#f0a300,#d98200)}
        .up-year-number{min-width:125px;padding:13px 16px;font:700 25px Georgia,serif}.up-latest{margin-left:7px;padding:4px 8px;border-radius:99px;background:#fff0bd;color:#9b5e00;font:900 8px Arial,sans-serif;text-transform:uppercase;vertical-align:middle}
        .up-year-count{flex:1;text-align:right;padding:0 8px;font-size:8px;font-weight:800}.up-view-all{border:0;background:transparent;color:#ffd45b;font-size:8px;font-weight:900;padding:0 10px}.up-view-all:hover{color:#fff}
        .up-year-body{padding:15px;border:1px solid #e2e8ef;border-top:0;border-radius:0 0 12px 12px;background:#fff}
        .up-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:12px;align-items:stretch}
        .up-year-collapsed{display:flex;align-items:center;justify-content:center;min-height:100%;padding:12px;color:#8492a2;font-size:8px;font-weight:800;text-align:center}
        .up-selected-results{grid-column:1 / -1;padding:22px;border:1px solid #e2e8ef;border-radius:14px;background:#fff;box-shadow:0 10px 28px rgba(6,36,82,.07)}
        .up-selected-results h3{margin:0;color:var(--navy);font:700 25px Georgia,serif}.up-selected-results h3 span{color:var(--orange)}
        .up-selected-results p{margin:6px 0 18px;color:var(--muted);font-size:12px}.up-selected-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}

        /* POSITION CARD */
        .up-card{position:relative;display:grid;grid-template-columns:108px 1fr;min-height:151px;border:1px solid #e3e9f0;border-radius:11px;background:#fff;overflow:hidden;cursor:pointer;box-shadow:0 6px 20px rgba(6,36,82,.05);transition:.22s}
        .up-card.featured{display:block;min-height:205px}.up-card.featured .up-photo{height:122px;min-height:122px}.up-card.featured .up-content{padding:9px 11px}.up-card.featured .up-content h3{font-size:13px}.up-card.featured .up-subject{margin-top:5px}
        .up-mini-list{display:grid;gap:8px}.up-mini-card{display:grid;grid-template-columns:35px 1fr;align-items:center;gap:7px;min-width:0;padding:4px;border-bottom:1px solid #edf1f5;cursor:pointer}.up-mini-card:last-child{border-bottom:0}.up-mini-card img{width:35px;height:35px;border-radius:50%;object-fit:cover}.up-mini-card strong{display:block;overflow:hidden;color:var(--navy);font-size:8px;text-overflow:ellipsis;white-space:nowrap}.up-mini-card span{display:block;margin-top:2px;overflow:hidden;color:#8492a2;font-size:7px;text-overflow:ellipsis;white-space:nowrap}
        .up-card:hover{transform:translateY(-4px);border-color:#ffb63a;box-shadow:0 16px 30px rgba(6,36,82,.12)}
        .up-photo{position:relative;min-height:151px;background:#eaf0f7;overflow:hidden}.up-photo img{width:100%;height:100%;display:block;object-fit:cover;transition:.3s}.up-card:hover .up-photo img{transform:scale(1.05)}
        .up-rank{position:absolute;left:7px;bottom:7px;display:flex;align-items:center;gap:4px;padding:6px 8px;border-radius:99px;background:#fff0bb;color:#9a5b00;font-size:9px;font-weight:900;box-shadow:0 4px 12px rgba(0,0,0,.12)}
        .up-content{padding:14px 12px}.up-card-label{display:block;color:#8997a9;font-size:7px;font-weight:900;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px}.up-content h3{margin:0 0 4px;color:var(--navy);font-size:15px}.up-course{color:#e17700;font-size:9px;font-weight:900}.up-subject{margin-top:10px;color:#65778e;font-size:8px;line-height:1.45}.up-session{margin-top:5px;color:#8a98a9;font-size:8px}.up-hint{position:absolute;right:8px;bottom:8px;display:flex;align-items:center;gap:3px;color:#a0690e;font-size:7px;font-weight:900;opacity:0;transition:.2s}.up-card:hover .up-hint{opacity:1}

        /* LEGACY */
        .up-legacy{background:linear-gradient(90deg,rgba(3,23,53,.98),rgba(5,49,94,.94)),url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85") center/cover;color:#fff}
        .up-legacy-inner{width:min(1120px,92%);min-height:145px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:20px}.up-legacy small{color:#ffc04b;font-weight:900;letter-spacing:2px;text-transform:uppercase}.up-legacy h2{margin:5px 0 3px;font:700 31px Georgia,serif}.up-legacy h2 span{color:#ffbd3b}.up-legacy p{margin:0;color:rgba(255,255,255,.7);font-size:10px}.up-legacy a{display:inline-flex;align-items:center;gap:7px;padding:11px 16px;border-radius:99px;background:#ffbd3b;color:var(--navy);font-size:10px;font-weight:900;white-space:nowrap}

        /* YEAR GALLERY MODAL */
        .up-year-overlay{position:fixed;z-index:99990;inset:0;padding:18px;display:flex;align-items:center;justify-content:center;background:rgba(1,14,32,.86);backdrop-filter:blur(9px);overflow:auto}
        .up-year-modal{width:min(1160px,100%);max-height:calc(100vh - 36px);overflow:auto;border-radius:20px;background:#f7f9fc;box-shadow:0 35px 100px rgba(0,0,0,.45)}
        .up-year-modal-head{position:relative;padding:31px 34px;color:#fff;background:radial-gradient(circle at 90% 10%,rgba(255,185,45,.28),transparent 27%),linear-gradient(135deg,#062452,#0a3977)}
        .up-year-modal-head small{color:#ffc34d;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase}
        .up-year-modal-head h2{margin:6px 0 4px;font:700 clamp(30px,4vw,45px) Georgia,serif}.up-year-modal-head h2 span{color:#ffbd3b}
        .up-year-modal-head p{margin:0;max-width:700px;color:rgba(255,255,255,.75);font-size:11px;line-height:1.6}
        .up-year-modal-count{display:inline-flex;margin-top:14px;padding:7px 10px;border:1px solid rgba(255,255,255,.16);border-radius:99px;background:rgba(255,255,255,.08);font-size:9px;font-weight:900}
        .up-year-gallery{padding:25px;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        .up-gallery-student{position:relative;overflow:hidden;border-radius:13px;border:1px solid #e0e7ef;background:#fff;cursor:pointer;box-shadow:0 7px 20px rgba(6,36,82,.06);transition:.22s}
        .up-gallery-student:hover{transform:translateY(-5px);border-color:#ffb63a;box-shadow:0 16px 30px rgba(6,36,82,.13)}
        .up-gallery-student-photo{position:relative;height:215px;background:#eaf0f7;overflow:hidden}
        .up-gallery-student-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:.35s}.up-gallery-student:hover img{transform:scale(1.06)}
        .up-gallery-rank{position:absolute;left:9px;top:9px;display:flex;align-items:center;gap:5px;padding:6px 9px;border-radius:99px;background:#fff0bb;color:#945a00;font-size:9px;font-weight:900;box-shadow:0 4px 12px rgba(0,0,0,.13)}
        .up-gallery-student-info{padding:13px}.up-gallery-student-info h3{margin:0 0 4px;color:var(--navy);font-size:14px}.up-gallery-student-info strong{color:#e17700;font-size:9px}.up-gallery-student-info p{margin:6px 0 0;color:#78889c;font-size:8px}
        .up-gallery-open{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:9px;border-top:1px solid #edf1f5;color:#a0690e;font-size:8px;font-weight:900}

        /* GALLERY MODAL */
        .up-overlay{position:fixed;z-index:99999;inset:0;padding:20px;display:flex;align-items:center;justify-content:center;background:rgba(1,14,32,.84);backdrop-filter:blur(8px);overflow:auto}
        .up-modal{width:min(1080px,100%);max-height:calc(100vh - 40px);overflow:auto;border-radius:19px;background:#fff;box-shadow:0 35px 100px rgba(0,0,0,.4)}
        .up-modal-top{position:relative;display:grid;grid-template-columns:245px 1fr;min-height:260px;background:var(--navy);color:#fff}.up-modal-main{width:100%;height:100%;min-height:260px;object-fit:cover}.up-modal-info{padding:31px 36px;background:radial-gradient(circle at 90% 10%,rgba(255,157,18,.2),transparent 28%),linear-gradient(135deg,#062452,#0a3977)}
        .up-close{position:absolute;right:13px;top:13px;z-index:3;width:37px;height:37px;border:1px solid rgba(255,255,255,.2);border-radius:50%;background:rgba(0,0,0,.2);color:#fff;display:flex;align-items:center;justify-content:center}.up-close:hover{background:var(--orange)}
        .up-modal-rank{display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border-radius:99px;background:#fff0bb;color:#935800;font-size:9px;font-weight:900;text-transform:uppercase}.up-modal-info h2{margin:14px 0 3px;font:700 34px Georgia,serif}.up-modal-course{color:#ffc04a;font-size:12px;font-weight:900}.up-modal-info p{max-width:650px;margin:13px 0;color:rgba(255,255,255,.74);font-size:11px;line-height:1.65}.up-meta{display:flex;flex-wrap:wrap;gap:7px}.up-meta span{display:flex;align-items:center;gap:5px;padding:6px 8px;border:1px solid rgba(255,255,255,.13);border-radius:7px;color:rgba(255,255,255,.8);background:rgba(255,255,255,.06);font-size:8px}
        .up-modal-body{padding:27px}.up-modal-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.up-modal-title h3{margin:0;font:700 25px Georgia,serif;color:var(--navy)}.up-modal-title span{color:#7d8ca0;font-size:9px;font-weight:900}
        .up-gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-auto-rows:145px;gap:9px}.up-gallery-item{position:relative;overflow:hidden;border-radius:10px;background:#edf2f7}.up-gallery-item:first-child{grid-row:span 2}.up-gallery-item img{width:100%;height:100%;object-fit:cover;display:block;transition:.3s}.up-gallery-item:hover img{transform:scale(1.05)}.up-gallery-caption{position:absolute;left:8px;right:8px;bottom:8px;padding:6px 7px;border-radius:6px;color:#fff;background:rgba(3,23,53,.68);font-size:8px;font-weight:800}
        .up-modal-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:17px}.up-info-card{padding:14px;border:1px solid #e4e9ef;border-radius:10px;background:#f7f9fb}.up-info-card svg{color:var(--orange)}.up-info-card strong{display:block;margin-top:7px;color:var(--navy);font-size:10px}.up-info-card p{margin:3px 0 0;color:#75849a;font-size:8px;line-height:1.5}

        @media(max-width:1000px){.up-copy{width:70%}.up-trophy{right:1%;opacity:.55}.up-years{grid-template-columns:repeat(2,1fr)}.up-year-gallery{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:760px){.up-hero{min-height:650px}.up-hero-inner{min-height:650px;align-items:flex-start}.up-copy{width:100%;padding-top:58px}.up-trophy{width:190px;height:190px;right:50%;bottom:70px;top:auto;transform:translateX(50%)}.up-trophy-inner{width:120px;height:120px}.up-trophy-inner svg{width:58px;height:58px}.up-stats{grid-template-columns:1fr 1fr}.up-stat:nth-child(2){border-right:0}.up-stat:nth-child(n+3){border-top:1px solid #e6ecf2}.up-filters{grid-template-columns:1fr}.up-years{grid-template-columns:1fr}.up-grid{grid-template-columns:1.05fr .95fr}.up-selected-grid{grid-template-columns:1fr 1fr}.up-legacy-inner{display:block;padding:27px 0}.up-legacy a{display:inline-flex;margin-top:15px}.up-modal-top{grid-template-columns:1fr}.up-modal-main{height:235px;min-height:235px}.up-modal-info{padding:25px}.up-modal-cards{grid-template-columns:1fr}.up-gallery{grid-template-columns:1fr 1fr}.up-gallery-item:first-child{grid-column:span 2;grid-row:span 1}}
        @media(max-width:520px){.up-hero h1{font-size:45px}.up-stats-wrap,.up-filters,.up-years{width:94%}.up-stat{padding:8px;gap:8px}.up-stat-icon{width:39px;height:39px;flex-basis:39px}.up-stat strong{font-size:21px}.up-stat span{font-size:8px}.up-year-number{min-width:88px;font-size:21px}.up-year-count{display:none}.up-grid,.up-selected-grid{grid-template-columns:1fr}.up-card.featured{min-height:180px}.up-photo{min-height:145px}.up-selected-results{padding:16px}.up-overlay{padding:7px}.up-modal{max-height:calc(100vh - 14px)}.up-modal-body{padding:17px}.up-gallery{grid-template-columns:1fr;grid-auto-rows:180px}.up-gallery-item:first-child{grid-column:auto}}
      `}</style>

      {/* HERO */}
      <section className="up-hero">
        <div className="up-hero-inner">
          <div className="up-copy">
            <div className="up-breadcrumb">
              <Link to="/">Home</Link><span>/</span>
              <Link to="/achievement">Achievements</Link><span>/</span>
              <span>University Position</span>
            </div>

            <div className="up-kicker"><Trophy size={13}/> Academic Excellence</div>

            <h1>
              University Position
              <br/>
              <span>Holders</span>
            </h1>

            <p>
              Celebrating the brilliance, dedication and hard work of our
              students who have secured university positions over the years.
            </p>

            <div className="up-actions">
              <a href="#position-holders" className="up-btn up-btn-primary">
                Explore Position Holders <ArrowRight size={15}/>
              </a>
              <a href="#position-holders" className="up-btn up-btn-ghost">
                View All Achievements <ExternalLink size={14}/>
              </a>
            </div>
          </div>

          <div className="up-trophy">
            <div className="up-trophy-inner">
              {trophyImageFailed ? (
                <Trophy aria-hidden="true" />
              ) : (
                <img
                  src="/images/igu-trophy.png"
                  alt="Gold trophy celebrating university position holders"
                  onError={() => setTrophyImageFailed(true)}
                />
              )}
            </div>
          </div>
        </div>

        <div className="up-wave">
          <svg viewBox="0 0 1536 160" preserveAspectRatio="none">
            <path d="M0 75 C180 145 370 145 565 90 C780 30 975 52 1160 84 C1300 108 1415 93 1536 45 L1536 160 L0 160 Z" fill="#fffdf9"/>
            <path d="M0 67 C180 137 370 137 565 82 C780 22 975 44 1160 76 C1300 100 1415 85 1536 37" fill="none" stroke="#ff7600" strokeWidth="4"/>
          </svg>
        </div>
      </section>

      {/* STATS */}
      <div className="up-stats-wrap">
        <div className="up-stats">
          <div className="up-stat"><div className="up-stat-icon"><Trophy size={22}/></div><div><strong>1231+</strong><span>Total University Positions</span></div></div>
          <div className="up-stat"><div className="up-stat-icon"><CalendarDays size={22}/></div><div><strong>11+</strong><span>Years of Excellence</span></div></div>
          <div className="up-stat"><div className="up-stat-icon"><GraduationCap size={22}/></div><div><strong>50+</strong><span>Courses Represented</span></div></div>
          <div className="up-stat"><div className="up-stat-icon"><Users size={22}/></div><div><strong>1000+</strong><span>Proud Families</span></div></div>
        </div>
      </div>

      {/* INTRO */}
      <section className="up-intro" id="position-holders">
        <div className="up-label">Our University Toppers</div>
        <h2>Year Wise <span>Position Holders</span></h2>
        <p>
          Explore the names of our bright students who have secured university
          positions over the years. Their success is a testament to the
          relentless pursuit of excellence at Yaduvanshi Degree College.
        </p>
      </section>

      {/* SEARCH + FILTER */}
      <section className="up-filters">
        <div className="up-field">
          <Search size={17}/>
          <input
            type="search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search student, course or achievement..."
          />
        </div>
        <div className="up-field">
          <Filter size={17}/>
          <select value={course} onChange={(e)=>setCourse(e.target.value)}>
            {courses.map((c)=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="up-field">
          <Medal size={17}/>
          <select value={rank} onChange={(e)=>setRank(e.target.value)}>
            <option>All Positions</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
          </select>
        </div>
      </section>

      {/* YEAR SECTIONS */}
      <section className="up-years">
        {filteredYears.map((group)=>(
          <section className={`up-year ${group.latest ? "latest": ""}`} id={`year-${group.year}`} key={group.year} onClick={() => setGalleryYear(group.year)}>
            <button
              type="button"
              className="up-year-head"
              onClick={() => setGalleryYear(group.year)}
              aria-label={`Show ${group.year} position holders`}
            >
              <div className="up-year-number">
                {group.year}
                {group.latest && <span className="up-latest">Latest</span>}
              </div>
              <div className="up-year-count">{group.positions} Positions</div>
              <span className="up-view-all">View All →</span>
            </button>

            <div className="up-year-body">
              <div className="up-grid">
                {group.students.slice(0, 1).map((student)=>(
                  <article
                    className="up-card featured"
                    key={`${group.year}-${student.name}`}
                    onClick={(e)=>{e.stopPropagation();setSelected(student)}}
                    onKeyDown={(e)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setSelected(student)}}}
                    tabIndex={0}
                    role="button"
                  >
                    <div className="up-photo">
                      <img src={student.photo} alt={student.name} loading="lazy"/>
                      <div className="up-rank">
                        {student.rank==="1st"?<Crown size={10}/>:<Medal size={10}/>} {student.rank}
                      </div>
                    </div>
                    <div className="up-content">
                      <span className="up-card-label">University Achievement</span>
                      <h3>{student.name}</h3>
                      <div className="up-course">{student.course}</div>
                      <div className="up-subject">{student.subject}</div>
                      <div className="up-session">Session {student.session}</div>
                    </div>
                    <div className="up-hint">View Photos <ChevronRight size={11}/></div>
                  </article>
                ))}

                <div className="up-mini-list">
                  {group.students.slice(1).map((student)=>(
                    <article
                      className="up-mini-card"
                      key={`${group.year}-mini-${student.name}`}
                      onClick={(e)=>{e.stopPropagation();setSelected(student)}}
                      tabIndex={0}
                      role="button"
                      onKeyDown={(e)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setSelected(student)}}}
                    >
                      <img src={student.photo} alt={student.name} loading="lazy"/>
                      <div>
                        <strong>{student.name}</strong>
                        <span>{student.course} · {student.rank}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {filteredYears.length===0 && (
          <div style={{textAlign:"center",padding:"50px 20px",background:"#fff",border:"1px dashed #d5dfe9",borderRadius:14}}>
            <Search size={30} color="#ff7600"/>
            <h3>No position holder found</h3>
            <p>Try another name, course or position.</p>
          </div>
        )}
      </section>

      {/* LEGACY */}
      <section className="up-legacy">
        <div className="up-legacy-inner">
          <div>
            <small>The Legacy Continues</small>
            <h2>Your Name Could <span>Be Here</span></h2>
            <p>Work hard. Stay focused. Make your mark. Be a part of Yaduvanshi's next success story.</p>
          </div>
          <Link to="/courses">Explore Our Programs <ArrowRight size={13}/></Link>
        </div>
      </section>

      {/* YEAR CLICK GALLERY */}
      {galleryYear && (() => {
        const group = filteredYears.find((g) => g.year === galleryYear);
        if (!group) return null;
        return (
          <div
            className="up-year-overlay"
            onMouseDown={(e)=>{if(e.target===e.currentTarget)setGalleryYear(null)}}
          >
            <div className="up-year-modal" role="dialog" aria-modal="true">
              <div className="up-year-modal-head">
                <button className="up-close" onClick={()=>setGalleryYear(null)} aria-label="Close year gallery">
                  <X size={19}/>
                </button>
                <small>University Position Holders</small>
                <h2><span>{group.year}</span> Achievement Gallery</h2>
                <p>All position-holder photographs available for {group.year}. Click any student to open the complete student achievement gallery.</p>
                <div className="up-year-modal-count">{group.positions} University Positions</div>
              </div>

              <div className="up-year-gallery">
                {group.students.map((student)=>(
                  <article
                    className="up-gallery-student"
                    key={`gallery-${group.year}-${student.name}`}
                    onClick={()=>setSelected(student)}
                  >
                    <div className="up-gallery-student-photo">
                      <img src={student.photo} alt={student.name} loading="lazy"/>
                      <div className="up-gallery-rank">
                        {student.rank==="1st"?<Crown size={10}/>:<Medal size={10}/>} {student.rank}
                      </div>
                    </div>
                    <div className="up-gallery-student-info">
                      <h3>{student.name}</h3>
                      <strong>{student.course}</strong>
                      <p>{student.subject} · Session {student.session}</p>
                      <div className="up-gallery-open">
                        <span>View Student Photos</span><ArrowRight size={11}/>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

    
      {/* CARD CLICK GALLERY */}
      {selected && (
        <div
          className="up-overlay"
          onMouseDown={(e)=>{if(e.target===e.currentTarget)setSelected(null)}}
        >
          <div className="up-modal" role="dialog" aria-modal="true">
            <div className="up-modal-top">
              <button className="up-close" onClick={()=>setSelected(null)} aria-label="Close">
                <X size={19}/>
              </button>

              <img className="up-modal-main" src={selected.photo} alt={selected.name}/>

              <div className="up-modal-info">
                <div className="up-modal-rank">
                  {selected.rank==="1st"?<Crown size={12}/>:<Medal size={12}/>}
                  {selected.rank} University Position
                </div>
                <h2>{selected.name}</h2>
                <div className="up-modal-course">{selected.course}</div>
                <p>
                  This achievement profile is designed for the complete
                  university-position record. Replace this demo text with the
                  student's real achievement story, certificate details and
                  event information.
                </p>
                <div className="up-meta">
                  <span><CalendarDays size={11}/> {selected.year}</span>
                  <span><GraduationCap size={11}/> {selected.session}</span>
                  <span><Trophy size={11}/> {selected.positions} positions</span>
                </div>
              </div>
            </div>

            <div className="up-modal-body">
              <div className="up-modal-title">
                <h3>Achievement Gallery</h3>
                <span><Images size={11}/> {selected.photos?.length || gallery.length} Photos</span>
              </div>

              <div className="up-gallery">
                {(selected.photos || gallery).map((image,index)=>(
                  <div className="up-gallery-item" key={`${image}-${index}`}>
                    <img src={image} alt={`${selected.name} achievement ${index+1}`} loading="lazy"/>
                    <div className="up-gallery-caption">
                      {["University Achievement","Campus Moment","Academic Excellence","Celebration","Proud Yaduvanshi Moment","Success Story"][index]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="up-modal-cards">
                <div className="up-info-card">
                  <Trophy size={19}/>
                  <strong>University Position</strong>
                  <p>{selected.rank} position in the university result.</p>
                </div>
                <div className="up-info-card">
                  <GraduationCap size={19}/>
                  <strong>Academic Programme</strong>
                  <p>{selected.course} · {selected.subject}</p>
                </div>
                <div className="up-info-card">
                  <Star size={19}/>
                  <strong>Yaduvanshi Legacy</strong>
                  <p>Replace demo photographs with the student's real gallery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
