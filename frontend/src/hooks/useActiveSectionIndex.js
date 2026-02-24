import { useEffect, useMemo, useRef, useState } from "react";

export function useActiveSectionIndex({ count, rootMargin = "-45% 0px -45% 0px", threshold = [0.1, 0.25, 0.5, 0.75] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const registerSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin,
      threshold,
    }),
    [rootMargin, threshold]
  );

  useEffect(() => {
    const els = sectionRefs.current;
    if (!els.length) return;

    const ratios = new Array(Math.max(count, els.length)).fill(0);
    let rafId = null;

    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const idx = Number(entry.target.dataset.idx);
        if (Number.isFinite(idx)) ratios[idx] = entry.intersectionRatio || 0;
      }

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        let best = 0;
        let bestVal = -1;
        for (let i = 0; i < ratios.length; i += 1) {
          if (ratios[i] > bestVal) {
            bestVal = ratios[i];
            best = i;
          }
        }
        setActiveIndex(best);
      });
    }, observerOptions);

    els.forEach((el, i) => {
      el.dataset.idx = String(i);
      obs.observe(el);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      obs.disconnect();
    };
  }, [count, observerOptions]);

  return { activeIndex, registerSectionRef };
}
