import { useEffect, useState } from "react";

const SEGMENTS = 6;

export function ScrollStories() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setP(max > 0 ? scrollY / max : 0);
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  return (
    <div className="flex gap-1.5" aria-hidden>
      {Array.from({ length: SEGMENTS }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, p * SEGMENTS - i));
        return (
          <span key={i} className="relative h-[3px] w-6 overflow-hidden rounded-full bg-muted sm:w-9">
            <span className="absolute inset-y-0 left-0 bg-foreground" style={{ width: `${fill * 100}%` }} />
          </span>
        );
      })}
    </div>
  );
}
