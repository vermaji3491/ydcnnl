import { useEffect, useState } from "react";
import { Bell, ArrowRight } from "lucide-react";
import { apiFetch } from "../lib/api";

const fallbackNotices = [
  ["Admission Notice 2026–27", "Admissions are open for UG programs.", "20 May"],
  ["Exam Schedule Released", "Check the latest examination schedule.", "18 May"],
  ["Scholarship Applications", "Merit-based scholarship applications are invited.", "15 May"],
];

export default function NoticeBoard() {
  const [notices, setNotices] = useState(fallbackNotices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchNotices = async () => {
      let notices = [];
      try {
        const result = await apiFetch("/api/notices");
        notices = (result.notices || []).slice(0, 3);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }

      if (!isMounted) return;

      if (notices.length > 0) {
        setNotices(
          notices.map((notice) => [
            notice.title,
            notice.description,
            notice.date
              ? new Date(`${notice.date}T00:00:00`).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })
              : "Latest",
          ])
        );
      } else {
        setNotices(fallbackNotices);
      }

      setLoading(false);
    };

    fetchNotices();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="rounded-2xl bg-navy p-6 text-white shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-serif text-xl font-bold">
          <Bell className="text-gold" /> Notice Board
        </h3>
        <button className="text-sm font-bold text-gold">
          View All <ArrowRight size={15} className="inline" />
        </button>
      </div>

      <div className="mt-4 divide-y divide-white/10">
        {loading ? (
          <div className="py-4 text-sm text-slate-300">Loading notices...</div>
        ) : (
          notices.map(([title, desc, date]) => (
            <div key={`${title}-${date}`} className="grid grid-cols-[1fr_auto] gap-4 py-4">
              <div>
                <h4 className="font-bold">{title}</h4>
                <p className="mt-1 text-xs leading-5 text-slate-300">{desc}</p>
              </div>
              <span className="text-xs font-bold text-gold">{date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}