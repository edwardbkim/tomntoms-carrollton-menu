"use client";
import { useEffect, useState } from "react";

export function useScrollspy(slugs: readonly string[], offset = 120): string {
  const [activeSlug, setActiveSlug] = useState(slugs[0] ?? "");

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY + offset;
      let current = slugs[0] ?? "";
      for (const slug of slugs) {
        const el = document.getElementById(slug);
        if (el && el.offsetTop <= scrollY) {
          current = slug;
        }
      }
      setActiveSlug(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [slugs, offset]);

  return activeSlug;
}
