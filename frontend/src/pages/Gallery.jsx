import { useEffect, useMemo, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Building2,
  GraduationCap,
  Trophy,
  CalendarDays,
  FlaskConical,
  Users,
  Maximize2,
  Volleyball,
} from "lucide-react";
import { apiFetch } from "../lib/api";

/* =========================================================
   VERIFIED LOCAL GALLERY PHOTOS
   ========================================================= */

const createNumberedPhotos = ({
  directory,
  start,
  end,
  category,
  idPrefix,
  title,
  padding = 4,
  extension = "JPG",
  skip = [],
}) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index)
    .filter((number) => !skip.includes(number))
    .map((number, index) => ({
      id: `${idPrefix}-${number}`,
      title: typeof title === "function" ? title(number, index) : title,
      category,
      image: `/images/${directory}/DSC_${String(number).padStart(padding, "0")}.${extension}`,
    }));

const createPhotos = (files, category, idPrefix, getTitle) =>
  files.map((file, index) => ({
    id: `${idPrefix}-${index + 1}`,
    title: getTitle(file, index),
    category,
    image: `/images/${file}`,
  }));

const campusExtensions = [
  "jpg", "jpg", "jpg", "png", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg",
    "png", "png", "png", "png", "jpg", "jpg", "png", "jpg", "png", "jpg",
];

const campusFiles = campusExtensions.map(
  (extension, index) => `campuses/college-${String(index + 1).padStart(2, "0")}.${extension}`
);

const guestFiles = [
  "DSC_0283.JPG", "DSC_0290.JPG", "DSC_0306.JPG", "DSC_0323.JPG",
  "DSC_0329.JPG", "DSC_0346.JPG", "DSC_0347.JPG", "DSC_0374.JPG",
  "DSC_0375.JPG", "DSC_0402.JPG", "DSC_0405.JPG", "DSC_0409.JPG",
  "DSC_0418.JPG", "DSC_0420.JPG", "DSC_0424.JPG", "DSC_0446 - Copy.JPG",
  "DSC_0452.JPG", "DSC_0474.JPG", "DSC_0475.JPG", "DSC_0488 - Copy.JPG",
  "DSC_0536.JPG", "DSC_0539.JPG", "DSC_0552.JPG", "DSC_0559.JPG",
  "DSC_0561.JPG", "DSC_0575.JPG",
].map((file) => `gallery/guest/${file}`);

const facilityFiles = [
  ...Array.from({ length: 8 }, (_, index) => `labs/physics/DSC_${1274 + index}.JPG`),
  ...Array.from({ length: 5 }, (_, index) => `labs/chemistry/DSC_${1258 + index}.JPG`),
  "labs/chemistry/chem-1.png",
  ...Array.from({ length: 9 }, (_, index) => `labs/biology/DSC_${1282 + index}.JPG`),
  ...["comp1.png", "comp2.png", "comp3.png", "comp5.png", "comp6.png", "comp7.png", "comp8.png", "comp9.png"].map((file) => `labs/computer/${file}`),
  ...Array.from({ length: 7 }, (_, index) => `labs/geography/DSC_${1268 + index}.JPG`),
];

const localPhotos = [
  ...createPhotos(campusFiles, "Campus", "campus", (_, index) => `Yaduvanshi Campus ${index + 1}`),
  ...createPhotos(guestFiles, "Events", "guest", (_, index) => `Guest Visit ${index + 1}`),
  ...createNumberedPhotos({
    directory: "gallery/student",
    start: 496,
    end: 516,
    category: "Students",
    idPrefix: "student",
    title: "Assembly",
  }),
  ...createNumberedPhotos({
    directory: "gallery/sports",
    start: 248,
    end: 313,
    category: "Sports",
    idPrefix: "sports",
    title: "Inter College Volleyball Competition Tournament",
    skip: [254],
  }),
  ...createPhotos(facilityFiles, "Facilities", "facility", (file) => {
    const lab = file.split("/")[1];
    return `${lab.charAt(0).toUpperCase()}${lab.slice(1)} Laboratory`;
  }),
  ...createNumberedPhotos({
    directory: "gallery/fresher26",
    start: 1,
    end: 26,
    category: "Cultural",
    idPrefix: "fresher26",
    title: "Freshers 2026",
    padding: 2,
  }),
];

/* =========================================================
   CATEGORY INFORMATION
   ========================================================= */

const categories = [
  {
    name: "All",
    icon: Images,
  },
  {
    name: "Campus",
    icon: Building2,
  },
  {
    name: "Events",
    icon: CalendarDays,
  },
  {
    name: "Students",
    icon: GraduationCap,
  },
  {
    name: "Sports",
    icon: Trophy,
  },
  {
    name: "Facilities",
    icon: FlaskConical,
  },
  {
    name: "Cultural",
    icon: Users,
  },
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [photos, setPhotos] = useState(localPhotos);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  /* =======================================================
     LOAD BACKEND GALLERY
     ======================================================= */

  useEffect(() => {
    const loadGallery = async () => {
      setLoading(true);

      try {
        const result = await apiFetch("/api/gallery");

        const items = result?.gallery || [];

        if (items.length > 0) {
          const backendPhotos = items
            .map((item, index) => ({
              id: item.id || `backend-${index}`,
              title: item.title || "Campus Photo",
              category: item.category || "Campus",
              image: item.image_url || "",
              featured: Boolean(item.featured),
            }))
            .filter((item) => Boolean(item.image));

          if (backendPhotos.length > 0) {
            setPhotos([...localPhotos, ...backendPhotos]);
          } else {
            setPhotos(localPhotos);
          }
        } else {
          setPhotos(localPhotos);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setPhotos(localPhotos);
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  /* =======================================================
     FILTER PHOTOS
     ======================================================= */

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") {
      return photos;
    }

    return photos.filter(
      (photo) =>
        photo.category?.toLowerCase() ===
        activeCategory.toLowerCase()
    );
  }, [photos, activeCategory]);

  /* =======================================================
     OPEN IMAGE
     ======================================================= */

  const openImage = (photo) => {
    const index = filteredPhotos.findIndex(
      (item) => item.id === photo.id
    );

    setSelected({
      photo,
      index: index >= 0 ? index : 0,
    });
  };

  /* =======================================================
     CLOSE LIGHTBOX
     ======================================================= */

  const closeLightbox = () => {
    setSelected(null);
  };

  /* =======================================================
     NEXT IMAGE
     ======================================================= */

  const nextImage = () => {
    if (!selected || filteredPhotos.length === 0) {
      return;
    }

    const nextIndex =
      (selected.index + 1) % filteredPhotos.length;

    setSelected({
      photo: filteredPhotos[nextIndex],
      index: nextIndex,
    });
  };

  /* =======================================================
     PREVIOUS IMAGE
     ======================================================= */

  const previousImage = () => {
    if (!selected || filteredPhotos.length === 0) {
      return;
    }

    const previousIndex =
      (selected.index - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setSelected({
      photo: filteredPhotos[previousIndex],
      index: previousIndex,
    });
  };

  /* =======================================================
     KEYBOARD CONTROLS
     ======================================================= */

  useEffect(() => {
    if (!selected) {
      return;
    }

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [selected, filteredPhotos]);

  /* =======================================================
     PREVENT BODY SCROLL
     ======================================================= */

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  /* =======================================================
     FEATURED PHOTOS
     ======================================================= */

  const featuredPhotos = photos.filter(
    (photo) => photo.featured
  );

  const heroPhotos =
    featuredPhotos.length > 0
      ? featuredPhotos.slice(0, 2)
      : photos.slice(0, 2);

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <>
{/* ========================= ATTRACTIVE GALLERY HERO ========================= */}
<section className="gallery-hero relative min-h-[680px] overflow-hidden bg-[#06182D] text-white lg:min-h-[760px]">

  {/* =========================================================
      BACKGROUND COLLEGE IMAGE
      Use the existing public image asset from the project.
  ========================================================= */}
  <div className="absolute inset-0 z-0">

    <img
      src="/images/college-bg.png"
      alt="Yaduvanshi Degree College Campus"
      className="h-full w-full object-cover object-center"
      onError={(e) => {
        e.currentTarget.src = "/images/collegebg.png";
      }}
    />

  </div>


  {/* =========================================================
      IMAGE OVERLAY
      Much lighter than the previous version so the college
      building remains clearly visible.
  ========================================================= */}

  <div className="absolute inset-0 z-[1] bg-black/25" />

  <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#06182D]/90 via-[#06182D]/55 to-transparent" />

  <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#06182D]/90 via-transparent to-[#06182D]/20" />


  {/* =========================================================
      GOLD LIGHT EFFECT
  ========================================================= */}

  <div className="absolute -right-32 top-20 z-[2] h-[420px] w-[420px] rounded-full bg-[#E58A00]/15 blur-[110px]" />

  <div className="absolute -left-32 bottom-10 z-[2] h-[300px] w-[300px] rounded-full bg-[#FFB84D]/10 blur-[100px]" />


  {/* =========================================================
      DECORATIVE ARCHITECTURAL FRAME
  ========================================================= */}

  <div className="pointer-events-none absolute right-[5%] top-[12%] z-[3] hidden h-[430px] w-[330px] rounded-[180px_180px_30px_30px] border border-[#FFB84D]/25 lg:block" />

  <div className="pointer-events-none absolute right-[6.5%] top-[14%] z-[3] hidden h-[400px] w-[300px] rounded-[170px_170px_25px_25px] border border-white/10 lg:block" />


  {/* =========================================================
      MAIN CONTENT
  ========================================================= */}

  <div className="container-wide relative z-10 flex min-h-[680px] items-center py-28 lg:min-h-[760px]">

    <div className="max-w-3xl">


      {/* Breadcrumb */}

      <div className="mb-7 flex items-center gap-3 text-sm font-semibold">

        <span className="text-white/70">
          Home
        </span>

        <span className="text-[#FFB84D]">
          /
        </span>

        <span className="text-[#FFB84D]">
          Gallery
        </span>

      </div>


      {/* Premium label */}

      <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-5 py-2.5 shadow-xl backdrop-blur-md">

        <span className="relative flex h-2.5 w-2.5">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFB84D] opacity-70" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FFB84D]" />

        </span>

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-white">
          Yaduvanshi Degree College
        </span>

      </div>


      {/* Main heading */}

      <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]">

        Moments

        <span className="block text-[#FFB84D]">
          That Matter.
        </span>

      </h1>


      {/* Gold line */}

      <div className="mt-8 flex items-center gap-2">

        <div className="h-[4px] w-24 rounded-full bg-[#E58A00]" />

        <div className="h-[4px] w-10 rounded-full bg-[#FFB84D]" />

        <div className="h-[4px] w-3 rounded-full bg-white/70" />

      </div>


      {/* Description */}

      <p className="mt-7 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">

        Explore the campus, celebrations, achievements,
        student life and unforgettable memories of
        Yaduvanshi Degree College.

      </p>


      {/* Buttons */}

      <div className="mt-9 flex flex-wrap items-center gap-4">


        {/* Explore button */}

        <a
          href="#gallery"
          className="group inline-flex items-center gap-3 rounded-full bg-[#E58A00] px-7 py-4 font-bold text-white shadow-[0_18px_45px_rgba(229,138,0,0.30)] transition duration-300 hover:-translate-y-1 hover:bg-[#F39A12] hover:shadow-[0_22px_55px_rgba(229,138,0,0.40)]"
        >

          <Images size={19} />

          <span>
            Explore Gallery
          </span>

          <ChevronRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </a>


        {/* Photo counter */}

        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-6 py-3.5 backdrop-blur-md">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">

            <Images
              size={18}
              className="text-[#FFB84D]"
            />

          </div>

          <div>

            <div className="text-xl font-black leading-none">
              {photos.length}+
            </div>

            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">
              Photos & Moments
            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          CATEGORY STRIP
      ========================================================= */}

      <div className="mt-12 flex flex-wrap items-center gap-3">

        <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md">

          <div className="flex items-center gap-2">

            <Building2
              size={15}
              className="text-[#FFB84D]"
            />

            <span className="text-xs font-semibold text-white/80">
              Campus
            </span>

          </div>

        </div>


        <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md">

          <div className="flex items-center gap-2">

            <CalendarDays
              size={15}
              className="text-[#FFB84D]"
            />

            <span className="text-xs font-semibold text-white/80">
              Events
            </span>

          </div>

        </div>


        <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md">

          <div className="flex items-center gap-2">

            <Trophy
              size={15}
              className="text-[#FFB84D]"
            />

            <span className="text-xs font-semibold text-white/80">
              Achievements
            </span>

          </div>

        </div>


        <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md">

          <div className="flex items-center gap-2">

            <GraduationCap
              size={15}
              className="text-[#FFB84D]"
            />

            <span className="text-xs font-semibold text-white/80">
              Student Life
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>


  {/* =========================================================
      FLOATING GALLERY CARD
  ========================================================= */}

  <div className="absolute bottom-28 right-[7%] z-20 hidden w-[260px] rounded-[30px] border border-white/20 bg-[#07182D]/55 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.40)] backdrop-blur-xl xl:block">

    {/* Card top */}

    <div className="flex items-center justify-between">

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFB84D]">
          Campus Gallery
        </p>

        <p className="mt-1 text-xs text-white/50">
          A visual journey
        </p>

      </div>


      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E58A00] shadow-lg">

        <Images size={17} />

      </div>

    </div>


    {/* Card heading */}

    <h3 className="mt-6 text-2xl font-black leading-tight">

      Every frame

      <span className="block text-[#FFB84D]">
        tells a story.
      </span>

    </h3>


    <p className="mt-3 text-xs leading-5 text-white/55">
      Discover the people, places and memories
      behind life at Yaduvanshi.
    </p>


    {/* Divider */}

    <div className="my-5 h-px bg-white/10" />


    {/* Card stats */}

    <div className="grid grid-cols-2 gap-3">

      <div className="rounded-2xl bg-white/5 p-3">

        <p className="text-xl font-black text-[#FFB84D]">
          {photos.length}+
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
          Memories
        </p>

      </div>


      <div className="rounded-2xl bg-white/5 p-3">

        <p className="text-xl font-black text-[#FFB84D]">
          06
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
          Categories
        </p>

      </div>

    </div>

  </div>


  {/* =========================================================
      VERTICAL GOLD ACCENT
  ========================================================= */}

  <div className="absolute right-[4%] top-[20%] z-10 hidden h-[330px] w-[2px] bg-gradient-to-b from-transparent via-[#FFB84D] to-transparent opacity-50 xl:block" />


  {/* =========================================================
      BOTTOM GOLD LINE
  ========================================================= */}

  <div className="absolute bottom-[28px] left-0 right-0 z-30 h-[2px] bg-gradient-to-r from-transparent via-[#FFB84D] to-transparent opacity-70" />


  {/* =========================================================
      CURVED WHITE TRANSITION
  ========================================================= */}

  <div className="absolute bottom-[-1px] left-0 z-30 h-24 w-full overflow-hidden">

    <div className="absolute -bottom-16 left-1/2 h-36 w-[120%] -translate-x-1/2 rounded-[50%] bg-white" />

  </div>


  {/* =========================================================
      IMAGE FALLBACK MESSAGE
      Only appears if image cannot be loaded.
  ========================================================= */}

  <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">

    <div className="hidden text-center">
      <p className="text-sm text-white/60">
        college_bg.png not found
      </p>
    </div>

  </div>


</section>
      {/* =====================================================
          GALLERY SECTION
          ===================================================== */}

      <section
        id="gallery"
        className="container-wide py-16 lg:py-24"
      >
        {/* SECTION HEADER */}

        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E58A00]">
              Discover Campus Life
            </p>

            <h2 className="text-4xl font-black text-[#0A2342] sm:text-5xl">
              Moments That
              <span className="text-[#E58A00]">
                {" "}
                Matter
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Browse photographs from campus life, academic
              activities, events, sports, cultural programmes
              and student achievements.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-600">
            <Images
              size={18}
              className="text-[#E58A00]"
            />

            {filteredPhotos.length} Photos
          </div>
        </div>

        {/* ===================================================
            CATEGORY FILTERS
            =================================================== */}

        <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => {
            const Icon = category.icon;

            const active =
              activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() =>
                  setActiveCategory(category.name)
                }
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                  active
                    ? "bg-[#0A2342] text-white shadow-lg"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                <Icon size={17} />

                {category.name}
              </button>
            );
          })}
        </div>

        {/* ===================================================
            LOADING
            =================================================== */}

        {loading && (
          <div className="mb-8 rounded-2xl bg-slate-50 p-5 text-center text-sm font-semibold text-slate-500">
            Loading gallery...
          </div>
        )}

        {/* ===================================================
            MASONRY GALLERY
            =================================================== */}

        {filteredPhotos.length > 0 ? (
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredPhotos.map((photo, index) => {
              const isVolleyballPhoto = /^sports-(2[4-9]\d|30\d|31[0-3])$/.test(photo.id);

              return (
                <button
                  key={`${photo.id}-${index}`}
                  onClick={() => openImage(photo)}
                  className="group relative mb-5 block w-full overflow-hidden rounded-[24px] bg-slate-100 text-left shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="block h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />

                {/* Hover overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Category */}

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0A2342] opacity-0 shadow transition duration-300 group-hover:opacity-100">
                  {photo.category}
                </div>

                {/* Zoom icon */}

                <div className="absolute right-4 top-4 rounded-full bg-[#E58A00] p-3 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  <Maximize2 size={18} />
                </div>

                {/* Bottom title */}

                {!isVolleyballPhoto && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#FFB84D]">
                    {photo.category}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    {photo.title}
                  </h3>
                  </div>
                )}

                {isVolleyballPhoto && (
                  <div className="px-4 py-3 text-center text-sm font-bold text-[#0A2342]">
                    {photo.title}
                  </div>
                )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-16 text-center">
            <Images
              size={45}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-5 text-xl font-bold text-[#0A2342]">
              No photos available
            </h3>

            <p className="mt-2 text-slate-500">
              Photos for this category will appear here.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          GALLERY INFORMATION
          ===================================================== */}

      <section className="bg-[#F8F9FA] py-20">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {/* CAMPUS */}

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <Building2
                className="text-[#E58A00]"
                size={32}
              />

              <h3 className="mt-5 text-xl font-bold text-[#0A2342]">
                Campus
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore photographs of the college campus,
                buildings, surroundings and infrastructure.
              </p>
            </div>

            {/* EVENTS */}

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <CalendarDays
                className="text-[#E58A00]"
                size={32}
              />

              <h3 className="mt-5 text-xl font-bold text-[#0A2342]">
                Events & Activities
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                View memorable moments from academic,
                cultural and college events.
              </p>
            </div>

            {/* STUDENT LIFE */}

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <Users
                className="text-[#E58A00]"
                size={32}
              />

              <h3 className="mt-5 text-xl font-bold text-[#0A2342]">
                Student Life
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Discover student activities, sports,
                celebrations and everyday campus life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
          ===================================================== */}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* CLOSE BUTTON */}

          <button
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="fixed right-5 top-5 z-[110] rounded-full bg-white p-3 text-[#0A2342] shadow-2xl transition hover:scale-110 hover:bg-[#E58A00] hover:text-white"
          >
            <X size={24} />
          </button>

          {/* PREVIOUS BUTTON */}

          {filteredPhotos.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="fixed left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#0A2342] shadow-xl backdrop-blur transition hover:scale-110 hover:bg-[#E58A00] hover:text-white sm:left-8 sm:p-4"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* NEXT BUTTON */}

          {filteredPhotos.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="fixed right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#0A2342] shadow-xl backdrop-blur transition hover:scale-110 hover:bg-[#E58A00] hover:text-white sm:right-8 sm:p-4"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* IMAGE CONTENT */}

          <div
            className="flex max-h-[92vh] max-w-6xl flex-col items-center"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="relative flex max-h-[78vh] items-center justify-center">
              <img
                src={selected.photo.image}
                alt={selected.photo.title}
                className="max-h-[78vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              />
            </div>

            {/* TITLE */}

            <div className="mt-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84D]">
                {selected.photo.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                {selected.photo.title}
              </h3>

              {/* COUNTER */}

              <div className="mt-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                {selected.index + 1} /{" "}
                {filteredPhotos.length}
              </div>
            </div>
          </div>

          {/* MOBILE HINT */}

          <div className="pointer-events-none fixed bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium text-white/50 sm:hidden">
            Swipe or use arrows to navigate
          </div>
        </div>
      )}
    </>
  );
}