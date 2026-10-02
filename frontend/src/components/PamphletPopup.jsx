import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Images,
  Pause,
  Play,
  X,
} from "lucide-react";

const pamphlets = [
  {
    image: "/pamphlets/pamphlet1.jpg",
    title: "Admissions & Student Achievements",
    alt: "Yaduvanshi admissions and student achievements pamphlet",
  },
  {
    image: "/pamphlets/pamphlet2.jpg",
    title: "University Merit Highlights",
    alt: "Yaduvanshi university merit highlights pamphlet",
  },
  {
    image: "/pamphlets/pamphlet3.jpg",
    title: "Campus & Programs",
    alt: "Yaduvanshi campus and programs pamphlet",
  },
  {
    image: "/pamphlets/pamphlet4.jpg",
    title: "Admissions 2026–27",
    alt: "Yaduvanshi admissions 2026–27 pamphlet",
  },
  {
    image: "/pamphlets/pamphlet5.jpg",
    title: "College Programs & Facilities",
    alt: "Yaduvanshi college programs and facilities pamphlet",
  },
];

export default function PamphletPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const activePamphlet = pamphlets[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + pamphlets.length) % pamphlets.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % pamphlets.length);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return undefined;

    const timer = window.setInterval(showNext, 5000);
    return () => window.clearInterval(timer);
  }, [isOpen, isPlaying]);

  return (
    <>
      <section className="container-wide py-10">
        <div className="flex flex-col items-start justify-between gap-5 border-y border-slate-200 py-7 sm:flex-row sm:items-center">
          <div>
            <p className="section-kicker">College Information</p>
            <h2 className="mt-1 text-2xl font-bold text-navy">Explore Our Pamphlets</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Browse college, program, admission, and student achievement pamphlets.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveIndex(0);
              setIsPlaying(true);
              setIsOpen(true);
            }}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-navy px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            <Images size={18} />
            View Pamphlets
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-hidden bg-slate-950/20 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label="College pamphlet slideshow"
            aria-roledescription="slideshow"
            className="relative flex h-full w-full flex-col overflow-hidden text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close pamphlets"
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-black/40 text-white transition hover:bg-white hover:text-slate-900 sm:right-7 sm:top-7"
            >
              <X size={21} />
            </button>

            <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-14 py-16 sm:px-24 sm:py-20">
              <img
                src={activePamphlet.image}
                alt={activePamphlet.alt}
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
              />

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous pamphlet"
                className="absolute left-2 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/35 text-white transition hover:bg-white hover:text-slate-900 sm:left-5 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next pamphlet"
                className="absolute right-2 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/35 text-white transition hover:bg-white hover:text-slate-900 sm:right-5 sm:h-12 sm:w-12"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <footer className="absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-4 sm:bottom-7">
              <div className="flex items-center gap-2" aria-label="Choose a pamphlet">
                {pamphlets.map((pamphlet, index) => (
                  <button
                    key={pamphlet.image}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${pamphlet.title}`}
                    aria-pressed={activeIndex === index}
                    className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-7 bg-amber-300" : "w-2 bg-white/55 hover:bg-white"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying((playing) => !playing)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/35 text-white transition hover:bg-white hover:text-slate-900"
              >
                {isPlaying ? <Pause size={17} /> : <Play size={17} />}
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}