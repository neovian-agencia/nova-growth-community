import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { CHECKOUT_URL } from "@/lib/products";

export function useInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, on] as const;
}

export function Hl({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [ref, on] = useInView<HTMLSpanElement>(0.8);
  return (
    <span ref={ref} data-on={on} className="hl" style={{ transitionDelay: `${delay}ms, ${delay + 250}ms` }}>
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const [ref, on] = useInView<HTMLDivElement>(0.15);
  return (
    <Tag ref={ref} data-on={on} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function CountUp({ to, prefix = "", suffix = "", duration = 1400 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const [ref, on] = useInView<HTMLSpanElement>(0.6);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!on) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {v.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function BuyButton({ children = "Quero o material", size = "md" }: { children?: ReactNode; size?: "md" | "lg" }) {
  const pad = size === "lg" ? "px-8 py-5 text-lg" : "px-5 py-3 text-sm";
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 bg-foreground font-bold text-background transition-transform hover:-translate-y-0.5 ${pad}`}
    >
      {children}
      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Eyebrow({ children, n }: { children: ReactNode; n?: string }) {
  return (
    <div className="eyebrow flex items-center gap-3">
      {n && <span className="font-mono text-foreground">{n}</span>}
      {n && <span className="h-px w-8 bg-border" />}
      {children}
    </div>
  );
}
