import { i as __toESM } from "../_runtime.mjs";
import { a as fetchMockQuestions, r as evaluateMockAnswer } from "./chat-D_RYNE7-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mock-interview-5nsbWo0z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MockInterviewPage() {
	const [categories, setCategories] = (0, import_react.useState)([]);
	const [selectedCat, setSelectedCat] = (0, import_react.useState)("behavioral");
	const [currentQIndex, setCurrentQIndex] = (0, import_react.useState)(0);
	const [answer, setAnswer] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [evaluation, setEvaluation] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		fetchMockQuestions().then((res) => {
			setCategories(res.categories);
		}).catch((err) => console.error(err));
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
				answer
			});
			setEvaluation(res);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};
	const insertSTARHelper = (part) => {
		const templates = {
			Situation: "Situation: While working on [Project Name, e.g. MediBuddy], our team needed to... ",
			Task: "Task: My responsibility was to design and implement... ",
			Action: "Action: I engineered the RESTful APIs / algorithm using [Tech, e.g. React/Node/C++] by... ",
			Result: "Result: As a result, system efficiency improved and we successfully... "
		};
		setAnswer((prev) => prev ? `${prev}\n${templates[part]}` : templates[part]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary",
						children: "🎤 AI Mock Interview Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-bold sm:text-4xl",
						children: "Interactive Mock Interview & STAR Evaluator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Practice role-specific interview questions, structure answers with the STAR technique, and get instant feedback."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3 mb-8",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setSelectedCat(c.id);
						setCurrentQIndex(0);
						setAnswer("");
						setEvaluation(null);
					},
					className: `rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${selectedCat === c.id ? "bg-primary text-primary-foreground shadow-accent" : "panel text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
					children: c.title
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-6 shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs text-muted-foreground mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Category: ", activeCategory?.title] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Question ",
									currentQIndex + 1,
									" of ",
									activeCategory?.questions.length || 1
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold text-foreground leading-snug",
								children: activeQuestion
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setCurrentQIndex((prev) => (prev + 1) % (activeCategory?.questions.length || 1));
										setAnswer("");
										setEvaluation(null);
									},
									className: "text-xs text-primary font-semibold hover:underline",
									children: "🔄 Next Question"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold text-foreground",
									children: "Your Response (Type or Use STAR Helpers)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-muted-foreground",
									children: [answer.split(/\s+/).filter(Boolean).length, " words"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex flex-wrap gap-2",
								children: [
									"Situation",
									"Task",
									"Action",
									"Result"
								].map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => insertSTARHelper(part),
									className: "rounded-lg border border-border bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary hover:text-primary",
									children: ["+ ", part]
								}, part))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: answer,
								onChange: (e) => setAnswer(e.target.value),
								placeholder: "Structure your answer using Situation, Task, Action, Result...",
								rows: 8,
								className: "w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleEvaluate,
									disabled: loading || !answer.trim(),
									className: "rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5 disabled:opacity-50",
									children: loading ? "Evaluating Answer..." : "Evaluate Response 🚀"
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-6 shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold border-b border-border pb-3",
							children: "AI Evaluation Results"
						}), evaluation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-5 animate-rise",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex size-20 items-center justify-center rounded-full border-4 border-primary/40 bg-surface-raised font-display text-2xl font-extrabold text-primary",
										children: [evaluation.overall_score, "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-semibold",
										children: "Answer Quality Score"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: evaluation.length_feedback
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2",
									children: "STAR Structure Check"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-lg bg-surface-raised p-2.5 border border-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Situation / Context" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: evaluation.star_breakdown.situation_task
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-lg bg-surface-raised p-2.5 border border-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Action Verbs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: evaluation.star_breakdown.action_taken
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-lg bg-surface-raised p-2.5 border border-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Result & Metrics" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary",
												children: evaluation.star_breakdown.result_impact
											})]
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2",
									children: "Action Items to Improve"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-xs text-muted-foreground",
									children: evaluation.improvement_tips.map((tip, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-bold",
											children: "💡"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tip })]
									}, idx))
								})] })
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-16 text-center text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl mb-2",
								children: "🎯"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium",
								children: "Type your answer on the left and click \"Evaluate Response\" to view real-time feedback."
							})]
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { MockInterviewPage as component };
