import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/chat", label: "AI Interview", icon: "💬" },
  { to: "/profile", label: "Profile", icon: "👤" },
  { to: "/ats", label: "ATS Intelligence", icon: "📊" },
  { to: "/cover-letter", label: "Cover Letter", icon: "✉️" },
  { to: "/mock-interview", label: "Mock Prep", icon: "🎯" },
  { to: "/analytics", label: "Analytics", icon: "📈" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md transition-colors">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link to="/" className="flex items-center gap-2.5 transition-transform hover:scale-105">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-primary-foreground shadow-accent">
            H
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            HireMe<span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                  active
                    ? "bg-primary/15 text-primary border border-primary/20 shadow-sm"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                }`}
              >
                <span>{l.icon}</span>
                <span>{l.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Actions & Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface-raised text-sm transition-colors hover:border-primary/50"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link
            to="/chat"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5"
          >
            Start Interview AI ↗
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface-raised text-base md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background px-4 py-4 md:hidden animate-rise">
          <div className="grid gap-2">
            {navLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <span className="text-base">{l.icon}</span>
                  <span>{l.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
