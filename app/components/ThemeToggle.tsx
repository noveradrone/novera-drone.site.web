"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const darkPreferred = saved ? saved === "dark" : true;
    root.classList.toggle("dark", darkPreferred);
    setIsDark(darkPreferred);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Basculer le thème"
      onClick={toggleTheme}
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:shadow-glow"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
