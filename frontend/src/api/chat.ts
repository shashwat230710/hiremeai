const API_URL = (import.meta.env['VITE_API_URL'] as string | undefined) ?? "http://localhost:8000";

export type ChatResponse = { answer: string };

export async function askCandidate(question: string, signal?: AbortSignal): Promise<string> {
  const res = await fetch(`${API_URL.replace(/\/$/, "")}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
    signal: signal ?? null,
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const data = (await res.json()) as Partial<ChatResponse>;
  if (typeof data.answer !== "string") {
    throw new Error("Unexpected response from the interview service.");
  }
  return data.answer;
}

export type ATSResult = {
  overall_ats_score: number;
  section_scores: {
    contact_info: number;
    skills: number;
    experience: number;
    education: number;
    formatting: number;
  };
  matched_keywords: string[];
  missing_keywords: string[];
  keyword_density_percent: number;
  suggestions: string[];
  quantifiable_metrics_found: string[];
};

export async function analyzeATS(jobDescription?: string): Promise<ATSResult> {
  const res = await fetch(`${API_URL.replace(/\/$/, "")}/ats-analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ job_description: jobDescription }),
  });
  if (!res.ok) throw new Error("ATS Analysis failed");
  return (await res.json()) as ATSResult;
}

export type CoverLetterResult = {
  cover_letter: string;
  tone: string;
  company_name: string;
  job_role: string;
};

export async function generateCoverLetter(params: {
  job_role: string;
  company_name: string;
  tone: string;
  custom_notes?: string;
}): Promise<CoverLetterResult> {
  const res = await fetch(`${API_URL.replace(/\/$/, "")}/generate-cover-letter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error("Cover letter generation failed");
  return (await res.json()) as CoverLetterResult;
}

export type MockCategory = {
  id: string;
  title: string;
  description: string;
  questions: string[];
};

export async function fetchMockQuestions(): Promise<{ categories: MockCategory[] }> {
  const res = await fetch(`${API_URL.replace(/\/$/, "")}/mock-interview/questions`);
  if (!res.ok) throw new Error("Failed to fetch mock questions");
  return (await res.json()) as { categories: MockCategory[] };
}

export type MockEvaluation = {
  overall_score: number;
  word_count: number;
  star_breakdown: {
    situation_task: string;
    action_taken: string;
    result_impact: string;
  };
  length_feedback: string;
  improvement_tips: string[];
  sample_refined_bullet: string;
};

export async function evaluateMockAnswer(params: {
  question: string;
  category: string;
  answer: string;
}): Promise<MockEvaluation> {
  const res = await fetch(`${API_URL.replace(/\/$/, "")}/mock-interview/evaluate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error("Mock answer evaluation failed");
  return (await res.json()) as MockEvaluation;
}

export type AnalyticsData = {
  metrics: {
    resume_impressions: number;
    ats_compatibility_avg: number;
    mock_interviews_completed: number;
    streak_days: number;
    applications_sent: number;
    interviews_scheduled: number;
    offers_received: number;
  };
  score_history: Array<{ date: string; ats_score: number; interview_score: number }>;
  skills_growth: Array<{ skill: string; level: number }>;
  applications: Array<{
    id: string;
    company: string;
    role: string;
    status: string;
    date: string;
    match_score: number;
  }>;
};

export async function fetchAnalyticsData(): Promise<AnalyticsData> {
  const res = await fetch(`${API_URL.replace(/\/$/, "")}/analytics/data`);
  if (!res.ok) throw new Error("Failed to fetch analytics");
  return (await res.json()) as AnalyticsData;
}
