"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [overLightSection, setOverLightSection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const parseRgb = (value: string): [number, number, number] | null => {
      const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!match) return null;
      return [Number(match[1]), Number(match[2]), Number(match[3])];
    };

    const getEffectiveBackground = (el: Element | null): [number, number, number] | null => {
      let node: Element | null = el;
      while (node && node !== document.documentElement) {
        const bg = window.getComputedStyle(node).backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          const rgb = parseRgb(bg);
          if (rgb) return rgb;
        }
        node = node.parentElement;
      }
      return null;
    };

    const isLightRgb = (rgb: [number, number, number]) => {
      const [r, g, b] = rgb.map((v) => v / 255);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luminance > 0.62;
    };

    const detectBackground = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nav = document.querySelector("header[data-navbar='main']") as HTMLElement | null;
        if (!nav) return;
        const navRect = nav.getBoundingClientRect();
        const target = document.elementFromPoint(window.innerWidth / 2, Math.min(navRect.bottom + 4, window.innerHeight - 1));
        const markerLight = !!target?.closest("[data-light-section='true']");
        const rgb = getEffectiveBackground(target);
        const computedLight = rgb ? isLightRgb(rgb) : false;
        const isLight = markerLight || computedLight;
        setOverLightSection(isLight);
      });
    };

    detectBackground();
    window.addEventListener("scroll", detectBackground, { passive: true });
    window.addEventListener("resize", detectBackground);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", detectBackground);
      window.removeEventListener("resize", detectBackground);
    };
  }, []);

  return (
    <header
      data-navbar="main"
      className={`fixed inset-x-0 top-0 z-50 mx-auto mt-2 w-[97%] max-w-6xl rounded-2xl glass transition-colors duration-300 sm:mt-3 sm:w-[96%] ${
        overLightSection ? "border-slate-700/70 bg-slate-900/90" : ""
      }`}
    >
      <nav className="flex h-14 items-center justify-between px-3 sm:h-16 sm:px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-white sm:gap-2.5 sm:tracking-[0.15em]">
          <span className="h-9 w-[58px] shrink-0 sm:h-11 sm:w-[70px]">
            <Image
              src="/images/logo.png/logo_nav_cropped.png"
              alt="Logo Novera Drone"
              width={140}
              height={88}
              className="h-full w-full object-contain brightness-0 invert"
            />
          </span>
          <span className="hidden sm:inline">NOVERA DRONE</span>
        </Link>

        <div className="relative flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-100 transition hover:bg-white/10 md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Ouvrir le menu"
          >
            Menu
          </button>

          {mobileOpen ? (
            <div className="absolute right-0 top-11 z-20 w-56 overflow-hidden rounded-2xl border border-white/20 bg-[#0b1225]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
              <Link onClick={() => setMobileOpen(false)} href="/" className="block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10">
                Accueil
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                href="/services"
                className="block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10"
              >
                Services
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                href="/demander-un-devis"
                className="mt-1 block rounded-xl bg-blue-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-400"
              >
                Demander un devis
              </Link>
            </div>
          ) : null}

          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 md:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-1.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="rounded-full px-4 py-1.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              Services
            </Link>
          </div>
          <Link
            href="/demander-un-devis"
            className="hidden whitespace-nowrap rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400 md:inline-flex"
          >
            Demander un devis
          </Link>
        </div>
      </nav>
    </header>
  );
}
