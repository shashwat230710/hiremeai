import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { fetchMockQuestions, evaluateMockAnswer, type MockCategory, type MockEvaluation } from "@/api/chat";
import { candidate } from "@/data/candidate";

export const Route = createFileRoute("/mock-interview")({
  head: () => ({
    meta: [
      { title: `AI Mock Interview Room & STAR Practice | HireMeAI` },
      { name: "description", content: "Practice technical, behavioral (STAR), and architecture interview questions with instant AI evaluation." },
    ],
  }),
  component: MockInterviewPage,
});

function MockInterviewPage() {
  const [categories, setCategories] = useState<MockCategory[]>([]);
  const [selectedCat, setSelectedCat] = useState<string>("behavioral");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [evaluation, setEvaluation] = useState<MockEvaluation | null>(null);

  useEffect(() => {
    fetchMockQuestions()
      .then((res) => {
        setCategories(res.categories);
      })
      .catch((err) => console.error(err));
  }, []);

  const activeCategory = categories.find((c) => c.id === selectedCat) || categories[0];
  const activeQuestion = activeCategory?.questions[currentQIndex] || "Tell me about yourself and your technical background.";

  const handleEvaluate = async () => {
    if (!answer.trim()) return;
    setLoading(true);
    try {
      const res = await evaluateMockAnswer({
        question: activeQuestion,
        category: activeCategory?.title || "Behavioral",
        answer,
      });
      setEvaluation(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const insertSTARHelper = (part: "Situation" | "Task" | "Action" | "Result") => {
    const templates = {
      Situation: "Situation: While working on [Project Name, e.g. MediBuddy], our team needed to... ",
      Task: "Task: My responsibility was to design and implement... ",
      Action: "Action: I engineered the RESTful APIs / algorithm using [Tech, e.g. React/Node/C++] by... ",
      Result: "Result: As a result, system efficiency improved and we successfully... ",
    };
    setAnswer((prev) => (prev ? `${prev}\n${templates[part]}` : templates[part]));
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
          🎤 AI Mock Interview Studio
        </span>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Interactive Mock Interview & STAR Evaluator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Practice role-specific interview questions, structure answers with the STAR technique, and get instant feedback.
        </p>
      </header>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setSelectedCat(c.id);
              setCurrentQIndex(0);
              setAnswer("");
              setEvaluation(null);
            }}
            className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              selectedCat === c.id
                ? "bg-primary text-primary-foreground shadow-accent"
                : "panel text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Column: Question Prompt & Answer Input */}
        <div className="space-y-6">
          <div className="panel p-6 shadow-elevated">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <span>Category: {activeCategory?.title}</span>
              <span>Question {currentQIndex + 1} of {activeCategory?.questions.length || 1}</span>
            </div>

            <h2 className="text-lg font-semibold text-foreground leading-snug">{activeQuestion}</h2>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  setCurrentQIndex((prev) => (prev + 1) % (activeCategory?.questions.length || 1));
                  setAnswer("");
                  setEvaluation(null);
                }}
                className="text-xs text-primary font-semibold hover:underline"
              >
                🔄 Next Question
              </button>
            </div>
          </div>

          {/* Answer Input Card */}
          <div className="panel p-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-foreground">Your Response (Type or Use STAR Helpers)</label>
              <span className="text-[11px] text-muted-foreground">{answer.split(/\s+/).filter(Boolean).length} words</span>
            </div>

            {/* STAR Quick Buttons */}
            <div className="mb-3 flex flex-wrap gap-2">
              {(["Situation", "Task", "Action", "Result"] as const).map((part) => (
                <button
                  key={part}
                  onClick={() => insertSTARHelper(part)}
                  className="rounded-lg border border-border bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary hover:text-primary"
                >
                  + {part}
                </button>
              ))}
            </div>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Structure your answer using Situation, Task, Action, Result..."
              rows={8}
              className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleEvaluate}
                disabled={loading || !answer.trim()}
                className="rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {loading ? "Evaluating Answer..." : "Evaluate Response 🚀"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Feedback Card */}
        <div className="space-y-6">
          <div className="panel p-6 shadow-elevated">
            <h3 className="text-base font-semibold border-b border-border pb-3">AI Evaluation Results</h3>

            {evaluation ? (
              <div className="mt-5 space-y-5 animate-rise">
                {/* Score Circle */}
                <div className="flex items-center gap-4">
                  <div className="flex size-20 items-center justify-center rounded-full border-4 border-primary/40 bg-surface-raised font-display text-2xl font-extrabold text-primary">
                    {evaluation.overall_score}%
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Answer Quality Score</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{evaluation.length_feedback}</p>
                  </div>
                </div>

                {/* STAR Analysis */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">STAR Structure Check</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-surface-raised p-2.5 border border-border">
                      <span>Situation / Context</span>
                      <span className="font-bold text-primary">{evaluation.star_breakdown.situation_task}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-surface-raised p-2.5 border border-border">
                      <span>Action Verbs</span>
                      <span className="font-bold text-primary">{evaluation.star_breakdown.action_taken}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-surface-raised p-2.5 border border-border">
                      <span>Result & Metrics</span>
                      <span className="font-bold text-primary">{evaluation.star_breakdown.result_impact}</span>
                    </div>
                  </div>
                </div>

                {/* Actionable Improvement Tips */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Action Items to Improve</h4>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {evaluation.improvement_tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary font-bold">💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-muted-foreground">
                <p className="text-3xl mb-2">🎯</p>
                <p className="text-xs font-medium">Type your answer on the left and click "Evaluate Response" to view real-time feedback.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
