import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { fetchAnalyticsData, type AnalyticsData } from "@/api/chat";
import { candidate } from "@/data/candidate";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: `User Analytics & Job Tracker | HireMeAI` },
      { name: "description", content: "Track application success rate, ATS score history, skills growth, and job search analytics." },
    ],
  }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [newCompany, setNewCompany] = useState("");
  const [newRole, setNewRole] = useState("");
  const [applications, setApplications] = useState<AnalyticsData["applications"]>([]);

  useEffect(() => {
    fetchAnalyticsData()
      .then((res) => {
        setData(res);
        setApplications(res.applications);
      })
      .catch((err) => console.error(err));
  }, []);

  const addApplication = () => {
    if (!newCompany || !newRole) return;
    const newApp = {
      id: `app-${Date.now()}`,
      company: newCompany,
      role: newRole,
      status: "Applied",
      date: new Date().toISOString().split("T")[0],
      match_score: 92,
    };
    setApplications([newApp, ...applications]);
    setNewCompany("");
    setNewRole("");
  };

  const updateStatus = (id: string, newStatus: string) => {
    setApplications(
      applications.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
          📈 Intelligence Dashboard
        </span>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Analytics & Job Application Tracker</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Monitor resume impressions, ATS compatibility trajectory, skills growth, and active job applications.
        </p>
      </header>

      {/* Top Metrics Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { label: "Resume Impressions", val: data ? data.metrics.resume_impressions : 1420, icon: "👁️", sub: "+12% this week" },
          { label: "Average ATS Score", val: `${data ? data.metrics.ats_compatibility_avg : 92}%`, icon: "📊", sub: "Enterprise Ready" },
          { label: "Practice Streak", val: `${data ? data.metrics.streak_days : 7} Days`, icon: "🔥", sub: "Daily Mock Room" },
          { label: "Active Applications", val: applications.length, icon: "💼", sub: `${applications.filter((a) => a.status === "Interview Scheduled").length} Interviewing` },
        ].map((m) => (
          <div key={m.label} className="panel p-5 shadow-elevated">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{m.label}</span>
              <span className="text-xl">{m.icon}</span>
            </div>
            <div className="mt-3 text-2xl font-bold font-display text-foreground">{m.val}</div>
            <p className="mt-1 text-xs text-primary font-medium">{m.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left Column: Job Application Kanban & Table */}
        <div className="space-y-6">
          <div className="panel p-6 shadow-elevated">
            <h2 className="text-lg font-semibold border-b border-border pb-3">Active Job Applications</h2>

            {/* Quick Add Form */}
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <input
                type="text"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                placeholder="Company Name"
                className="flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
              />
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Role Title"
                className="flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
              />
              <button
                onClick={addApplication}
                className="rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5"
              >
                + Add Application
              </button>
            </div>

            {/* Applications Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase">
                    <th className="pb-3">Company & Role</th>
                    <th className="pb-3">Match Score</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-surface-raised/50">
                      <td className="py-3.5 font-medium">
                        <div className="font-semibold text-foreground">{app.company}</div>
                        <div className="text-[11px] text-muted-foreground">{app.role}</div>
                      </td>
                      <td className="py-3.5">
                        <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                          {app.match_score}% Match
                        </span>
                      </td>
                      <td className="py-3.5">
                        <select
                          value={app.status}
                          onChange={(e) => updateStatus(app.id, e.target.value)}
                          className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-semibold text-foreground focus:outline-none"
                        >
                          <option value="Applied">Applied</option>
                          <option value="Screening">Screening</option>
                          <option value="Interview Scheduled">Interview Scheduled</option>
                          <option value="Offer Received">Offer Received</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="py-3.5 text-right text-muted-foreground">
                        {app.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Skills Growth Progress */}
        <div className="space-y-6">
          <div className="panel p-6 shadow-elevated">
            <h2 className="text-base font-semibold border-b border-border pb-3">Skills Proficiency Trajectory</h2>
            <div className="mt-5 space-y-4">
              {(data?.skills_growth || [
                { skill: "React.js / Frontend", level: 95 },
                { skill: "Data Structures & DSA", level: 92 },
                { skill: "Node.js / Express Backend", level: 88 },
                { skill: "Flutter / Mobile", level: 85 },
                { skill: "Database (MongoDB & SQL)", level: 84 },
              ]).map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>{s.skill}</span>
                    <span className="text-primary font-bold">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
