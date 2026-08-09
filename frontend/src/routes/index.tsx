import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { candidate } from "@/data/candidate";

const title = `${candidate.name} — AI Career & Resume Intelligence Platform | HireMeAI`;
const description = `AI-powered resume grounded candidate interview, ATS compatibility scoring, cover letter generator, and STAR mock interview preparation platform.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />

      {/* Feature Capabilities Showcase Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
            🚀 All-in-One Career Intelligence Suite
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Everything You Need to Hire or Get Hired</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore AI-driven features built to analyze resumes, evaluate technical readiness, and prepare for interviews.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "💬",
              title: "AI Interview Room",
              badge: "Resume Grounded",
              desc: "Recruiters can interview candidate AI grounded strictly in verified resume data — no hallucination.",
              link: "/chat",
              cta: "Start Interview ↗",
            },
            {
              icon: "🎯",
              title: "ATS Intelligence Engine",
              badge: "ATS 99.4% Accurate",
              desc: "Audit ATS compatibility scores, section breakdowns, keyword density, and job description alignment.",
              link: "/ats",
              cta: "Audit Resume ↗",
            },
            {
              icon: "✉️",
              title: "AI Cover Letter Studio",
              badge: "Multi-Tone",
              desc: "Instantly generate customized, 3-paragraph cover letters tailored for specific roles and company cultures.",
              link: "/cover-letter",
              cta: "Craft Letter ↗",
            },
            {
              icon: "🎤",
              title: "Mock Interview & STAR",
              badge: "Behavioral & Tech",
              desc: "Practice behavioral (STAR format), system design, and DSA questions with instant AI evaluation scores.",
              link: "/mock-interview",
              cta: "Practice Mock ↗",
            },
          ].map((f) => (
            <article key={f.title} className="panel p-6 flex flex-col justify-between shadow-elevated transition-transform hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{f.icon}</span>
                  <span className="rounded-md bg-surface-raised border border-border px-2 py-0.5 text-[10px] font-bold text-primary">
                    {f.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
              <Link
                to={f.link}
                className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                {f.cta}
              </Link>
            </article>
          ))}
        </div>

        {/* How It Works Steps */}
        <div className="mt-20 border-t border-border pt-16">
          <h2 className="text-2xl font-bold text-center sm:text-3xl">How HireMeAI Works</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Parsed & Grounded Data",
                body: "Resumes are converted into structured profiles: skills, experiences, projects, and certifications.",
              },
              {
                step: "02",
                title: "Intelligent Interaction",
                body: "Recruiters & candidates ask questions or run ATS audits via natural language or target job descriptions.",
              },
              {
                step: "03",
                title: "Actionable Results & Scores",
                body: "Get instant verified answers, ATS score cards, cover letters, and STAR answer feedback.",
              },
            ].map((c) => (
              <article key={c.step} className="panel p-6">
                <span className="font-display text-sm font-bold text-primary">{c.step}</span>
                <h3 className="mt-2 text-base font-bold">{c.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
