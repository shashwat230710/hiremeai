import { i as __toESM } from "../_runtime.mjs";
import { o as generateCoverLetter } from "./chat-D_RYNE7-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as candidate } from "./router-B5ySrqep.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cover-letter-CWqvUFbP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tones = [
	{
		id: "Enthusiastic",
		label: "🔥 Enthusiastic & Dynamic"
	},
	{
		id: "Formal",
		label: "👔 Formal & Executive"
	},
	{
		id: "Creative",
		label: "🎨 Creative & Innovative"
	},
	{
		id: "Casual",
		label: "💬 Friendly & Direct"
	}
];
function CoverLetterPage() {
	const [jobRole, setJobRole] = (0, import_react.useState)("Full Stack Developer");
	const [companyName, setCompanyName] = (0, import_react.useState)("Tech Innovations Inc.");
	const [tone, setTone] = (0, import_react.useState)("Enthusiastic");
	const [customNotes, setCustomNotes] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleGenerate = async () => {
		setLoading(true);
		setCopied(false);
		try {
			const data = await generateCoverLetter({
				job_role: jobRole,
				company_name: companyName,
				tone,
				custom_notes: customNotes
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary",
					children: "✉️ AI Cover Letter Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl font-bold sm:text-4xl",
					children: "Tailored Cover Letter Generator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: [
						"Instantly generate customized cover letters grounded in ",
						candidate.name,
						"'s verified skills, projects, and accomplishments."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[400px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-5 sm:p-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Target Job Details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-muted-foreground",
						children: "Target Role Title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: jobRole,
						onChange: (e) => setJobRole(e.target.value),
						placeholder: "e.g. Full Stack Engineer, Flutter Developer",
						className: "mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-muted-foreground",
						children: "Company Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: companyName,
						onChange: (e) => setCompanyName(e.target.value),
						placeholder: "e.g. Google, Microsoft, StartupX",
						className: "mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-muted-foreground",
						children: "Tone & Style"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 space-y-2",
						children: tones.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTone(t.id),
							className: `w-full text-left rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${tone === t.id ? "bg-primary text-primary-foreground shadow-accent" : "bg-surface-raised text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"}`,
							children: t.label
						}, t.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-muted-foreground",
						children: "Custom Notes (Optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: customNotes,
						onChange: (e) => setCustomNotes(e.target.value),
						placeholder: "e.g. Emphasize MediBuddy project and 1800+ LeetCode rating",
						rows: 3,
						className: "mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleGenerate,
						disabled: loading,
						className: "w-full rounded-xl bg-primary py-3 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5 disabled:opacity-50",
						children: loading ? "Generating Cover Letter..." : "Generate Cover Letter 🚀"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-6 sm:p-8 flex flex-col justify-between shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Cover Letter Output"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: result ? `${result.job_role} at ${result.company_name}` : "Ready to generate"
					})] }), result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: copyToClipboard,
						className: "rounded-xl border border-border bg-surface-raised px-4 py-2 text-xs font-semibold transition-colors hover:border-primary",
						children: copied ? "✓ Copied to Clipboard!" : "📋 Copy Letter"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 text-sm leading-relaxed whitespace-pre-line text-foreground",
					children: result ? result.cover_letter : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-16 text-center text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl mb-2",
							children: "📄"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Click \"Generate Cover Letter\" to craft your personalized application letter."
						})]
					})
				})] }), result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-border pt-4 text-xs text-muted-foreground flex justify-between items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Verified Candidate: ",
						candidate.name,
						" (",
						candidate.email,
						")"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Tone: ", result.tone] })]
				})]
			})]
		})]
	});
}
//#endregion
export { CoverLetterPage as component };
