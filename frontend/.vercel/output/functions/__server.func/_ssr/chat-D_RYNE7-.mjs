//#region node_modules/.nitro/vite/services/ssr/assets/chat-D_RYNE7-.js
var API_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_API_URL": "http://localhost:8000"
}["VITE_API_URL"] ?? "http://localhost:8000";
async function askCandidate(question, signal) {
	const res = await fetch(`${API_URL.replace(/\/$/, "")}/chat`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ question }),
		signal: signal ?? null
	});
	if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
	const data = await res.json();
	if (typeof data.answer !== "string") throw new Error("Unexpected response from the interview service.");
	return data.answer;
}
async function analyzeATS(jobDescription) {
	const res = await fetch(`${API_URL.replace(/\/$/, "")}/ats-analyze`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ job_description: jobDescription })
	});
	if (!res.ok) throw new Error("ATS Analysis failed");
	return await res.json();
}
async function generateCoverLetter(params) {
	const res = await fetch(`${API_URL.replace(/\/$/, "")}/generate-cover-letter`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(params)
	});
	if (!res.ok) throw new Error("Cover letter generation failed");
	return await res.json();
}
async function fetchMockQuestions() {
	const res = await fetch(`${API_URL.replace(/\/$/, "")}/mock-interview/questions`);
	if (!res.ok) throw new Error("Failed to fetch mock questions");
	return await res.json();
}
async function evaluateMockAnswer(params) {
	const res = await fetch(`${API_URL.replace(/\/$/, "")}/mock-interview/evaluate`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(params)
	});
	if (!res.ok) throw new Error("Mock answer evaluation failed");
	return await res.json();
}
async function fetchAnalyticsData() {
	const res = await fetch(`${API_URL.replace(/\/$/, "")}/analytics/data`);
	if (!res.ok) throw new Error("Failed to fetch analytics");
	return await res.json();
}
//#endregion
export { fetchMockQuestions as a, fetchAnalyticsData as i, askCandidate as n, generateCoverLetter as o, evaluateMockAnswer as r, analyzeATS as t };
