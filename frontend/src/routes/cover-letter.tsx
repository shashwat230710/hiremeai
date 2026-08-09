import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { generateCoverLetter, type CoverLetterResult } from "@/api/chat";
import { candidate } from "@/data/candidate";

export const Route = createFileRoute("/cover-letter")({
  head: () => ({
    meta: [
      { title: `AI Cover Letter Generator | HireMeAI` },
      { name: "description", content: "Generate tailored, professional cover letters based on candidate resume and target company/role." },
    ],
  }),
  component: CoverLetterPage,
});

const tones = [
  { id: "Enthusiastic", label: "🔥 Enthusiastic & Dynamic" },
  { id: "Formal", label: "👔 Formal & Executive" },
  { id: "Creative", label: "🎨 Creative & Innovative" },
  { id: "Casual", label: "💬 Friendly & Direct" },
];

function CoverLetterPage() {
  const [jobRole, setJobRole] = useState("Full Stack Developer");
  const [companyName, setCompanyName] = useState("Tech Innovations Inc.");
  const [tone, setTone] = useState("Enthusiastic");
  const [customNotes, setCustomNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CoverLetterResult | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setCopied(false);
    try {
      const data = await generateCoverLetter({
        job_role: jobRole,
        company_name: companyName,
        tone,
        custom_notes: customNotes,
      });
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result.cover_letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
          ✉️ AI Cover Letter Studio
        </span>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Tailored Cover Letter Generator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Instantly generate customized cover letters grounded in {candidate.name}'s verified skills, projects, and accomplishments.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
        {/* Settings Form */}
        <div className="panel p-5 sm:p-6 space-y-5">
          <h2 className="text-base font-semibold">Target Job Details</h2>

          <div>
            <label className="block text-xs font-medium text-muted-foreground">Target Role Title</label>
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="e.g. Full Stack Engineer, Flutter Developer"
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Google, Microsoft, StartupX"
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground">Tone & Style</label>
            <div className="mt-2 space-y-2">
              {tones.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTone(t.id)}
                  className={`w-full text-left rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    tone === t.id
                      ? "bg-primary text-primary-foreground shadow-accent"
                      : "bg-surface-raised text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground">Custom Notes (Optional)</label>
            <textarea
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="e.g. Emphasize MediBuddy project and 1800+ LeetCode rating"
              rows={3}
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full rounded-xl bg-primary py-3 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {loading ? "Generating Cover Letter..." : "Generate Cover Letter 🚀"}
          </button>
        </div>

        {/* Generated Preview */}
        <div className="panel p-6 sm:p-8 flex flex-col justify-between shadow-elevated">
          <div>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <h2 className="text-base font-semibold">Cover Letter Output</h2>
                <p className="text-xs text-muted-foreground">
                  {result ? `${result.job_role} at ${result.company_name}` : "Ready to generate"}
                </p>
              </div>
              {result && (
                <button
                  onClick={copyToClipboard}
                  className="rounded-xl border border-border bg-surface-raised px-4 py-2 text-xs font-semibold transition-colors hover:border-primary"
                >
                  {copied ? "✓ Copied to Clipboard!" : "📋 Copy Letter"}
                </button>
              )}
            </div>

            <div className="mt-6 text-sm leading-relaxed whitespace-pre-line text-foreground">
              {result ? (
                result.cover_letter
              ) : (
                <div className="py-16 text-center text-muted-foreground">
                  <p className="text-3xl mb-2">📄</p>
                  <p className="text-sm font-medium">Click "Generate Cover Letter" to craft your personalized application letter.</p>
                </div>
              )}
            </div>
          </div>

          {result && (
            <div className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground flex justify-between items-center">
              <span>Verified Candidate: {candidate.name} ({candidate.email})</span>
              <span>Tone: {result.tone}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
