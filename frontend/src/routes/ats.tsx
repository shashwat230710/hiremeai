import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { analyzeATS, type ATSResult } from "@/api/chat";
import { candidate } from "@/data/candidate";

export const Route = createFileRoute("/ats")({
  head: () => ({
    meta: [
      { title: `ATS Resume Intelligence & Job Matcher | HireMeAI` },
      { name: "description", content: "Audit ATS resume compatibility score, keyword density, and match against job descriptions." },
    ],
  }),
  component: ATSPage,
});

function ATSPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [atsResult, setAtsResult] = useState<ATSResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runAnalysis = async (jdText?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeATS(jdText);
      setAtsResult(data);
    } catch (err) {
      setError("Failed to run ATS analysis. Please ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runAnalysis();
  }, []);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8 text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
          🎯 ATS Intelligence Engine 2.0
        </span>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Resume ATS Compatibility & Job Matcher</h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Analyze {candidate.name}'s resume compatibility, keyword density, ATS section scores, and target job description alignment.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left Column: Job Description Matcher & Breakdown */}
        <div className="space-y-6">
          {/* Target Job Matcher Card */}
          <div className="panel p-5 sm:p-6 shadow-elevated">
            <h2 className="text-lg font-semibold">Match Against Target Job Description</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Paste a target job posting (e.g. Full Stack Developer, Flutter Engineer) to check keyword overlap & ATS readiness.
            </p>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job description text here..."
              rows={5}
              className="mt-4 w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <div className="mt-3 flex flex-wrap gap-2 justify-between items-center">
              <span className="text-xs text-muted-foreground">
                Tip: Include key tech stacks like React, Node.js, C++, Docker, AWS, or Flutter.
              </span>
              <button
                onClick={() => runAnalysis(jobDescription)}
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {loading ? "Analyzing ATS..." : "Analyze Job Alignment ⚡"}
              </button>
            </div>
          </div>

          {/* Section Breakdown Scores */}
          {atsResult && (
            <div className="panel p-5 sm:p-6">
              <h2 className="text-lg font-semibold">ATS Section Health Scores</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Contact Info & Links", score: atsResult.section_scores.contact_info },
                  { label: "Technical Skills", score: atsResult.section_scores.skills },
                  { label: "Experience & Achievements", score: atsResult.section_scores.experience },
                  { label: "Education & Credentials", score: atsResult.section_scores.education },
                  { label: "Format & Structure", score: atsResult.section_scores.formatting },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-surface-raised p-4">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span>{s.label}</span>
                      <span className="text-primary">{s.score}%</span>
                    </div>
                    <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${s.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Keywords Found vs Missing */}
          {atsResult && (
            <div className="panel p-5 sm:p-6 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                  <span>✅ Matched Target Keywords ({atsResult.matched_keywords.length})</span>
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {atsResult.matched_keywords.map((k) => (
                    <span
                      key={k}
                      className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              {atsResult.missing_keywords.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                    <span>⚠️ Recommended Keywords to Include ({atsResult.missing_keywords.length})</span>
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {atsResult.missing_keywords.map((k) => (
                      <span
                        key={k}
                        className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300"
                      >
                        + {k}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Score Summary Gauge & Recommendations */}
        <div className="space-y-6">
          {/* ATS Score Circular Badge */}
          <div className="panel p-6 text-center shadow-elevated">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Overall ATS Score
            </h2>
            <div className="relative mx-auto my-6 flex size-36 items-center justify-center rounded-full border-4 border-primary/40 bg-surface-raised shadow-accent">
              <span className="font-display text-4xl font-extrabold text-primary">
                {atsResult ? atsResult.overall_ats_score : 92}%
              </span>
            </div>
            <p className="text-xs font-semibold text-primary">
              {atsResult && atsResult.overall_ats_score >= 85
                ? "✨ Highly Compatible with Enterprise ATS"
                : "Good compatibility - ready for optimization"}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Keyword Density: {atsResult ? atsResult.keyword_density_percent : 86}%
            </p>
          </div>

          {/* Quantifiable Metrics Card */}
          <div className="panel p-5">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <span>📈 Quantifiable Metrics Found</span>
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              {(atsResult?.quantifiable_metrics_found || [
                "1000+ DSA Problems Solved",
                "1800+ LeetCode Contest Rating",
                "8.68 / 10 B.Tech CGPA",
                "97% Class XII Marks",
              ]).map((m) => (
                <li key={m} className="flex items-center gap-2 rounded-lg bg-surface-raised p-2.5 border border-border">
                  <span className="text-primary font-bold">✓</span>
                  <span className="font-medium text-foreground">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actionable Improvement Tips */}
          <div className="panel p-5">
            <h3 className="text-sm font-semibold">Smart Optimization Tips</h3>
            <ul className="mt-3 space-y-2.5 text-xs leading-relaxed text-muted-foreground">
              {(atsResult?.suggestions || [
                "Use strong action verbs like 'Engineered', 'Optimized', 'Deployed'.",
                "Quantify achievements with stats & benchmarks.",
              ]).map((s, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
