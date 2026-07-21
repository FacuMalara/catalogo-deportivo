"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    applyTheme(dark);
  }, []);

  return (
    <Button
      size="sm"
      variant="ghost"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      onPress={() => {
        const next = !isDark;
        setIsDark(next);
        applyTheme(next);
      }}
    >
      {isDark ? "Claro" : "Oscuro"}
    </Button>
  );
}
