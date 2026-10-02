import { useEffect, useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { apiFetch } from "../lib/api";

const matchesFilters = (achievement, filters) => {
  const searchableText = [
    achievement.student_name,
    achievement.title,
    achievement.description,
    achievement.course,
    achievement.sport,
    achievement.event,
    achievement.exam,
    achievement.subject,
    achievement.score,
    achievement.rank,
  ].filter(Boolean).join(" ").toLowerCase();
  const query = (filters.query || filters.search || "").trim().toLowerCase();
  const year = filters.year || filters.selectedYear || "";
  const course = filters.course || filters.selectedCourse || "";
  const position = filters.position || filters.selectedPosition || "";
  const sport = filters.sport || filters.selectedSport || "";
  const eventCategory = filters.eventCategory || filters.selectedCategory || "";
  const subject = filters.subject || "";
  const exam = filters.exam || "";
  const level = filters.level || filters.selectedLevel || filters.rankLevel || "";
  const rankNumber = Number.parseInt(achievement.rank?.match(/\d+/)?.[0] || "", 10);
  const yearValue = String(achievement.year || "");
  const eventText = [achievement.event, achievement.title, achievement.description]
    .filter(Boolean).join(" ").toLowerCase();

  if (query && !searchableText.includes(query)) return false;
  if (year && year !== "All Years" && year !== "Select Year" && yearValue !== year) return false;
  if (course && course !== "All Courses" && achievement.course !== course) return false;
  if (position && position !== "All Positions" && achievement.rank !== position) return false;
  if (sport && sport !== "All Sports" && (achievement.sport || achievement.course) !== sport) return false;
  if (eventCategory && eventCategory !== "All Categories" && !eventText.includes(eventCategory.toLowerCase())) return false;
  if (subject && subject !== "Select Subject" && subject !== "Select Subject / Branch" && achievement.subject !== subject) return false;
  if (exam && exam !== "Select Exam" && achievement.exam !== exam) return false;

  if (level === "top-25" && (!rankNumber || rankNumber > 25)) return false;
  if (level === "top-50" && (!rankNumber || rankNumber > 50)) return false;
  if (level === "top-100" && (!rankNumber || rankNumber > 100)) return false;
  if (level === "100-plus" && (!rankNumber || rankNumber <= 100)) return false;
  if (level === "50-plus" && (!rankNumber || rankNumber <= 50)) return false;
  if (level && !["All Levels", "top-25", "top-50", "top-100", "100-plus", "50-plus"].includes(level)) {
    const achievementText = [achievement.title, achievement.description, achievement.rank]
      .filter(Boolean).join(" ").toLowerCase();
    if (!achievementText.includes(level.toLowerCase())) return false;
  }

  return true;
};

export default function ManagedAchievements({ category, filters, renderAchievement }) {
  const [achievements, setAchievements] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const [selectedPosition, setSelectedPosition] = useState("All Positions");

  useEffect(() => {
    apiFetch("/api/achievements")
      .then((result) => setAchievements(result.achievements || []))
      .catch((error) => console.error("Error fetching achievements:", error));
  }, []);

  const categoryAchievements = category
    ? achievements.filter((achievement) => Array.isArray(category)
      ? category.includes(achievement.category)
      : achievement.category === category)
    : achievements;

  const options = useMemo(() => ({
    categories: [...new Set(categoryAchievements.map((item) => item.category).filter(Boolean))].sort(),
    years: [...new Set(categoryAchievements.map((item) => String(item.year || "")).filter(Boolean))]
      .sort((first, second) => Number(second) - Number(first)),
    courses: [...new Set(categoryAchievements.map((item) => item.course).filter(Boolean))].sort(),
  }), [categoryAchievements]);

  const activeFilters = category
    ? filters || {}
    : { search, eventCategory: selectedCategory, year: selectedYear, course: selectedCourse, position: selectedPosition };
  const visibleAchievements = categoryAchievements.filter((achievement) => matchesFilters(achievement, activeFilters));

  if (!categoryAchievements.length) return null;

  if (renderAchievement) {
    return visibleAchievements.map((achievement) => renderAchievement(achievement));
  }

  return (
    <section
      className="relative isolate overflow-hidden py-14 text-white sm:py-16"
      aria-labelledby="managed-achievements-title"
      style={{
        backgroundImage: "linear-gradient(115deg, rgba(3,24,53,.96), rgba(6,50,99,.84)), url('/images/college-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="achievement-container relative z-10 mx-auto w-full max-w-6xl px-4">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase text-amber-300">Student Excellence</p>
            <h2 id="managed-achievements-title" className="achievement-serif text-3xl font-bold text-white sm:text-4xl">
              Achievement Gallery
            </h2>
          </div>
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm font-semibold text-white">
            {visibleAchievements.length} records
          </span>
        </div>

        <div className="mb-7 grid gap-3 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-5">
          <label className="relative sm:col-span-2 lg:col-span-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={17} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search achiever"
              aria-label="Search uploaded achievements"
              className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-800 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
          </label>
          <label className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} aria-label="Filter achievements by category" className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-800 outline-none focus:border-amber-400">
              <option>All Categories</option>
              {options.categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <select value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)} aria-label="Filter achievements by year" className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-amber-400">
              <option>All Years</option>
              {options.years.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <select value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)} aria-label="Filter achievements by course" className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-amber-400">
              <option>All Courses</option>
              {options.courses.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <select value={selectedPosition} onChange={(event) => setSelectedPosition(event.target.value)} aria-label="Filter achievements by position" className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-amber-400">
              <option>All Positions</option>
              {[...new Set(categoryAchievements.map((item) => item.rank).filter(Boolean))].sort().map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        {visibleAchievements.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleAchievements.map((achievement) => (
              <article key={achievement.id} className="group overflow-hidden rounded-xl border border-white/30 bg-white text-slate-800 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-52 overflow-hidden bg-slate-200">
                  {achievement.image_url ? (
                    <img
                      src={achievement.image_url}
                      alt={achievement.student_name || achievement.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid h-full place-items-center bg-gradient-to-br from-slate-100 to-slate-300 text-sm font-semibold text-slate-500">No image</div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-xs font-bold text-white">
                    {achievement.category} · {achievement.year}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-navy">{achievement.student_name || achievement.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-orange-700">
                    {[achievement.title, achievement.course, achievement.rank].filter(Boolean).join(" · ")}
                  </p>
                  {achievement.description && <p className="mt-3 text-sm leading-6 text-slate-600">{achievement.description}</p>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-white/40 bg-white/10 p-8 text-center font-semibold text-white">
            No achievements match these filters.
          </p>
        )}
      </div>
    </section>
  );
}