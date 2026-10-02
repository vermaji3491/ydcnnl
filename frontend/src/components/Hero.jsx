import { useEffect, useState } from "react";
import {
  ArrowRight,
  PlayCircle,
  GraduationCap,
  Users,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: "college",
    eyebrow: "Yaduvanshi Degree College",
    title: "Learn. Lead.",
    highlight: "Achieve.",
    description:
      "A place where quality education meets modern learning, personal growth and real opportunity.",
    primaryLabel: "Explore Programs",
    primaryPath: "/courses",
    secondaryLabel: "Apply for Admission",
    secondaryPath: "/admission/online-admission",
    highlights: [
      [GraduationCap, "Quality", "Education"],
      [Users, "Student", "Focused"],
      [BookOpen, "Modern", "Learning"],
    ],
  },
  {
    id: "careers",
    eyebrow: "Careers at Yaduvanshi",
    title: "Build your career.",
    highlight: "Shape future minds.",
    description:
      "Bring your experience to a student-focused college and grow with a team committed to teaching, learning and opportunity.",
    primaryLabel: "View Open Positions",
    primaryPath: "/recruitment",
    secondaryLabel: "About the College",
    secondaryPath: "/about",
    highlights: [
      [BriefcaseBusiness, "Teaching", "Careers"],
      [Users, "Student", "Impact"],
      [ArrowRight, "Apply", "Online"],
    ],
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const moveSlide = (direction) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-navy text-white"
      aria-roledescription="carousel"
      aria-label="Yaduvanshi College and careers"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/college-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,20,43,.94)_0%,rgba(5,25,51,.82)_48%,rgba(5,25,51,.24)_100%)]" />

      <div className="container-wide relative flex min-h-[650px] items-center py-20 pb-32 sm:min-h-[690px]">
          <div
            key={slide.id}
            className="max-w-4xl"
            aria-live="polite"
          >
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              <span className="h-0.5 w-9 bg-gold" />
              {slide.eyebrow}
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[.98] sm:text-6xl lg:text-7xl">
              {slide.title}{" "}
              <span className="text-gold">{slide.highlight}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={slide.primaryPath} className="btn-gold">
                {slide.primaryLabel}
                <ArrowRight size={18} />
              </Link>

              <Link to={slide.secondaryPath} className="btn-outline">
                {slide.id === "college" && <PlayCircle size={18} />}
                {slide.secondaryLabel}
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6">
              {slide.highlights.map(([Icon, title, subtitle]) => (
                <div key={title} className="flex items-center gap-2 sm:gap-3">
                  <Icon className="shrink-0 text-gold" size={25} />
                  <div>
                    <b className="block text-sm sm:text-base">{title}</b>
                    <span className="text-xs text-slate-300 sm:text-sm">{subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        <div className="absolute bottom-7 left-0 right-0 flex items-center justify-between">
          <div className="flex items-center gap-2" aria-label="Choose a slide">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${item.eyebrow} slide`}
                aria-pressed={activeSlide === index}
                className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-9 bg-gold" : "w-2 bg-white/60 hover:bg-white"}`}
              />
            ))}
            <span className="ml-2 text-xs font-semibold text-white/75">
              0{activeSlide + 1} <span className="text-white/40">/</span> 0{slides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="Previous slide"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="Next slide"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ChevronRight size={19} />
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}