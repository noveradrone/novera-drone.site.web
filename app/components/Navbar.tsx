"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavbarProps = {
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Navbar({ ctaLabel = "Demander un devis", ctaHref = "/demander-un-devis" }: NavbarProps) {
  const [overLightSection, setOverLightSection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const mobileCtaLabel = /devis/i.test(ctaLabel) ? "Devis" : "Contact";

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
        overLightSection ? "border-black/80 bg-black/95" : ""
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

        <div className="relative flex items-center gap-1.5 sm:gap-3">
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
              <Link
                onClick={() => setMobileOpen(false)}
                href="/"
                className={`block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10 ${isActive("/") ? "bg-white/10" : ""}`}
              >
                Accueil
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                href="/services"
                className={`block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10 ${
                  isActive("/services") ? "bg-white/10" : ""
                }`}
              >
                Services
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                href="/drone"
                className={`block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10 ${
                  isActive("/drone") ? "bg-white/10" : ""
                }`}
              >
                Drone
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                href="/novera-drone-solidaire"
                className={`block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10 ${
                  isActive("/novera-drone-solidaire") ? "bg-white/10" : ""
                }`}
              >
                Solidaire
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                href={ctaHref}
                className="mt-1 block rounded-xl bg-blue-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-400"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}

          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 md:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-1.5 text-sm transition hover:bg-white/10 hover:text-white ${
                isActive("/") ? "bg-white/10 text-white" : "text-slate-200"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className={`rounded-full px-4 py-1.5 text-sm transition hover:bg-white/10 hover:text-white ${
                isActive("/services") ? "bg-white/10 text-white" : "text-slate-200"
              }`}
            >
              Services
            </Link>
            <Link
              href="/drone"
              className={`rounded-full px-4 py-1.5 text-sm transition hover:bg-white/10 hover:text-white ${
                isActive("/drone") ? "bg-white/10 text-white" : "text-slate-200"
              }`}
            >
              Drone
            </Link>
            <Link
              href="/novera-drone-solidaire"
              className={`rounded-full px-4 py-1.5 text-sm transition hover:bg-white/10 hover:text-white ${
                isActive("/novera-drone-solidaire") ? "bg-white/10 text-white" : "text-slate-200"
              }`}
            >
              Solidaire
            </Link>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex whitespace-nowrap rounded-full bg-blue-500 px-2.5 py-1.5 text-[11px] font-medium text-white transition hover:bg-blue-400 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">{mobileCtaLabel}</span>
            <span className="hidden sm:inline">{ctaLabel}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
