"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 0.9,
            scrollTrigger: {
              trigger: item,
              start: "top 84%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
