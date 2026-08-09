import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { candidate } from "@/data/candidate";
import { GroundedBadge } from "./GroundedBadge";

const typingPhrases = [
  "Interview Candidate AI",
  "Audit ATS Resume Scores",
  "Generate AI Cover Letters",
  "Practice STAR Mock Interviews",
  "Track Job Application Success",
];

export function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIdx];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIdx < currentPhrase.length) {
            setCharIdx((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIdx > 0) {
            setCharIdx((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setPhraseIdx((prev) => (prev + 1) % typingPhrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx]);

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-rise">
          <GroundedBadge />

          <h1 className="mt-5 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl">
            Meet the Candidate.
            <br />
            <span className="text-primary font-display">
              {typingPhrases[phraseIdx].substring(0, charIdx)}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {candidate.tagline} HireMeAI provides AI-grounded interviews, instant ATS resume compatibility scoring, tailored cover letters, and STAR mock interview preparation.
          </p>

          {/* Call-to-action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/chat"
              className="shadow-accent inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to Candidate AI 💬
            </Link>
            <Link
              to="/ats"
              className="inline-flex items-center justify-center rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/20"
            >
              Audit ATS Score 🎯
            </Link>
            <Link
              to="/cover-letter"
              className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Cover Letter ✉️
            </Link>
          </div>

          {/* Highlights Counter Grid */}
          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "DSA SOLVED", val: "1,000+" },
              { label: "LEETCODE RATING", val: "1,800+" },
              { label: "B.TECH CGPA", val: "8.68/10" },
              { label: "EXPERIENCE", val: "2.0+ Yrs" },
            ].map((h) => (
              <div key={h.label} className="panel px-3.5 py-3 text-center border-border/70">
                <dt className="text-[10px] tracking-widest text-muted-foreground uppercase font-bold">
                  {h.label}
                </dt>
                <dd className="mt-1 text-sm font-bold text-primary">{h.val}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Live Interactive Card Preview */}
        <div className="panel shadow-elevated animate-rise p-5 sm:p-7">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/80 font-display text-lg font-bold text-primary-foreground shadow-accent">
                {candidate.name.charAt(0)}
              </span>
              <div>
                <p className="font-display text-base font-bold">{candidate.name}</p>
                <p className="text-xs text-muted-foreground">
                  {candidate.title} · {candidate.location}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-400">
              ● AI Ready
            </span>
          </div>

          <div className="mt-5 space-y-3 text-xs">
            <div className="rounded-xl bg-surface-raised px-4 py-3 text-muted-foreground flex justify-between items-center">
              <span>Recruiter: "What are your major full-stack projects?"</span>
              <span className="text-[10px] text-primary">Just now</span>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 leading-relaxed text-foreground">
              "Developed <strong className="text-primary">MediBuddy</strong> (MERN stack doctor appointment platform with role-based REST APIs) and <strong className="text-primary">WE CHAT</strong> (Flutter real-time messaging app with Firebase Auth & Cloud Firestore)."
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 text-center text-xs">
            <Link
              to="/mock-interview"
              className="rounded-xl border border-border bg-surface-raised py-2.5 font-semibold transition-colors hover:border-primary"
            >
              🎤 Mock Practice
            </Link>
            <Link
              to="/analytics"
              className="rounded-xl border border-border bg-surface-raised py-2.5 font-semibold transition-colors hover:border-primary"
            >
              📈 View Analytics
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
