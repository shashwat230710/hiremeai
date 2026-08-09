import { i as __toESM } from "../_runtime.mjs";
import { t as analyzeATS } from "./chat-D_RYNE7-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as candidate } from "./router-B5ySrqep.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ats-CrsbaFiy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ATSPage() {
	const [jobDescription, setJobDescription] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [atsResult, setAtsResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const runAnalysis = async (jdText) => {
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
	(0, import_react.useEffect)(() => {
		runAnalysis();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-8 text-center sm:text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary",
					children: "🎯 ATS Intelligence Engine 2.0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl font-bold sm:text-4xl",
					children: "Resume ATS Compatibility & Job Matcher"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted-foreground sm:text-base",
					children: [
						"Analyze ",
						candidate.name,
						"'s resume compatibility, keyword density, ATS section scores, and target job description alignment."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1fr_380px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-5 sm:p-6 shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "Match Against Target Job Description"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Paste a target job posting (e.g. Full Stack Developer, Flutter Engineer) to check keyword overlap & ATS readiness."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: jobDescription,
								onChange: (e) => setJobDescription(e.target.value),
								placeholder: "Paste job description text here...",
								rows: 5,
								className: "mt-4 w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2 justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Tip: Include key tech stacks like React, Node.js, C++, Docker, AWS, or Flutter."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => runAnalysis(jobDescription),
									disabled: loading,
									className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5 disabled:opacity-50",
									children: loading ? "Analyzing ATS..." : "Analyze Job Alignment ⚡"
								})]
							})
						]
					}),
					atsResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-5 sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "ATS Section Health Scores"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid gap-4 sm:grid-cols-2",
							children: [
								{
									label: "Contact Info & Links",
									score: atsResult.section_scores.contact_info
								},
								{
									label: "Technical Skills",
									score: atsResult.section_scores.skills
								},
								{
									label: "Experience & Achievements",
									score: atsResult.section_scores.experience
								},
								{
									label: "Education & Credentials",
									score: atsResult.section_scores.education
								},
								{
									label: "Format & Structure",
									score: atsResult.section_scores.formatting
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-surface-raised p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-primary",
										children: [s.score, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-primary transition-all duration-500",
										style: { width: `${s.score}%` }
									})
								})]
							}, s.label))
						})]
					}),
					atsResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-5 sm:p-6 space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-emerald-400 flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"✅ Matched Target Keywords (",
								atsResult.matched_keywords.length,
								")"
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: atsResult.matched_keywords.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300",
								children: k
							}, k))
						})] }), atsResult.missing_keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-amber-400 flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"⚠️ Recommended Keywords to Include (",
								atsResult.missing_keywords.length,
								")"
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: atsResult.missing_keywords.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300",
								children: ["+ ", k]
							}, k))
						})] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-6 text-center shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold text-muted-foreground uppercase tracking-widest",
								children: "Overall ATS Score"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto my-6 flex size-36 items-center justify-center rounded-full border-4 border-primary/40 bg-surface-raised shadow-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-4xl font-extrabold text-primary",
									children: [atsResult ? atsResult.overall_ats_score : 92, "%"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-primary",
								children: atsResult && atsResult.overall_ats_score >= 85 ? "✨ Highly Compatible with Enterprise ATS" : "Good compatibility - ready for optimization"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: [
									"Keyword Density: ",
									atsResult ? atsResult.keyword_density_percent : 86,
									"%"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📈 Quantifiable Metrics Found" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-xs text-muted-foreground",
							children: (atsResult?.quantifiable_metrics_found || [
								"1000+ DSA Problems Solved",
								"1800+ LeetCode Contest Rating",
								"8.68 / 10 B.Tech CGPA",
								"97% Class XII Marks"
							]).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-lg bg-surface-raised p-2.5 border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-bold",
									children: "✓"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: m
								})]
							}, m))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Smart Optimization Tips"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2.5 text-xs leading-relaxed text-muted-foreground",
							children: (atsResult?.suggestions || ["Use strong action verbs like 'Engineered', 'Optimized', 'Deployed'.", "Quantify achievements with stats & benchmarks."]).map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-bold",
									children: "•"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
							}, idx))
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { ATSPage as component };
