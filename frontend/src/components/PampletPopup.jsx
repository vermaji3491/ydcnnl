import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const pamphlets = [
  "/pamphlets/admission.jpg",
  "/pamphlets/college.jpg",
  "/pamphlets/event.jpg",
];

export default function PamphletPopup() {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(0);

  // Automatically change pamphlet
  useEffect(() => {
    if (!open || pamphlets.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pamphlets.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [open]);

  if (!open) return null;

  const nextPamphlet = () => {
    setCurrent((prev) => (prev + 1) % pamphlets.length);
  };

  const previousPamphlet = () => {
    setCurrent(
      (prev) => (prev - 1 + pamphlets.length) % pamphlets.length
    );
  };

  return (
    <div className="pamphlet-overlay">

      {/* Popup */}
      <div className="pamphlet-modal">

        {/* Close button */}
        <button
          className="pamphlet-close"
          onClick={() => setOpen(false)}
          aria-label="Close pamphlet"
        >
          <X size={25} />
        </button>

        {/* Pamphlet */}
        <div className="pamphlet-image-wrapper">
          <img
            src={pamphlets[current]}
            alt={`Yaduvanshi Degree College pamphlet ${current + 1}`}
            className="pamphlet-image"
          />
        </div>

        {/* Previous */}
        {pamphlets.length > 1 && (
          <button
            className="pamphlet-arrow pamphlet-left"
            onClick={previousPamphlet}
            aria-label="Previous pamphlet"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Next */}
        {pamphlets.length > 1 && (
          <button
            className="pamphlet-arrow pamphlet-right"
            onClick={nextPamphlet}
            aria-label="Next pamphlet"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Dots */}
        {pamphlets.length > 1 && (
          <div className="pamphlet-dots">
            {pamphlets.map((_, index) => (
              <button
                key={index}
                className={`pamphlet-dot ${
                  current === index ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Open pamphlet ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .pamphlet-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 25px;

          background: rgba(5, 18, 35, 0.58);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          animation: pamphletOverlayIn 0.35s ease forwards;
        }

        .pamphlet-modal {
          position: relative;

          width: min(540px, 92vw);
          max-height: 92vh;

          display: flex;
          align-items: center;
          justify-content: center;

          animation: pamphletZoomIn 0.45s cubic-bezier(
            0.16,
            1,
            0.3,
            1
          ) forwards;
        }

        .pamphlet-image-wrapper {
          position: relative;

          max-width: 100%;
          max-height: 88vh;

          overflow: hidden;

          border-radius: 10px;

          background: white;

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.45),
            0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .pamphlet-image {
          display: block;

          width: 100%;
          max-height: 88vh;

          object-fit: contain;

          transition: opacity 0.35s ease,
                      transform 0.35s ease;
        }

        .pamphlet-close {
          position: absolute;

          top: -18px;
          right: -18px;

          z-index: 10;

          width: 44px;
          height: 44px;

          border: 2px solid rgba(255,255,255,0.8);
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          color: white;
          background: #0a2342;

          box-shadow: 0 8px 25px rgba(0,0,0,0.35);

          transition: all 0.25s ease;
        }

        .pamphlet-close:hover {
          transform: rotate(90deg) scale(1.08);
          background: #e58a00;
        }

        .pamphlet-arrow {
          position: absolute;

          top: 50%;
          transform: translateY(-50%);

          width: 46px;
          height: 46px;

          border: 0;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          color: white;
          background: #0a2342;

          box-shadow: 0 8px 25px rgba(0,0,0,0.35);

          transition: all 0.25s ease;
        }

        .pamphlet-arrow:hover {
          background: #e58a00;
          transform: translateY(-50%) scale(1.08);
        }

        .pamphlet-left {
          left: -65px;
        }

        .pamphlet-right {
          right: -65px;
        }

        .pamphlet-dots {
          position: absolute;

          bottom: -35px;
          left: 50%;

          transform: translateX(-50%);

          display: flex;
          gap: 8px;
        }

        .pamphlet-dot {
          width: 9px;
          height: 9px;

          padding: 0;
          border: 0;
          border-radius: 50%;

          cursor: pointer;

          background: rgba(255,255,255,0.55);

          transition: all 0.25s ease;
        }

        .pamphlet-dot.active {
          width: 25px;
          border-radius: 10px;
          background: #e58a00;
        }

        @keyframes pamphletOverlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes pamphletZoomIn {
          from {
            opacity: 0;
            transform: scale(0.82) translateY(20px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 700px) {

          .pamphlet-overlay {
            padding: 18px;
          }

          .pamphlet-modal {
            width: min(92vw, 500px);
          }

          .pamphlet-close {
            top: -14px;
            right: -8px;

            width: 40px;
            height: 40px;
          }

          .pamphlet-left {
            left: 8px;
          }

          .pamphlet-right {
            right: 8px;
          }

          .pamphlet-arrow {
            width: 40px;
            height: 40px;

            background: rgba(10,35,66,0.9);
          }

          .pamphlet-dots {
            bottom: -28px;
          }
        }
      `}</style>
    </div>
  );
}