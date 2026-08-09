import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as candidate } from "./router-B5ySrqep.mjs";
import { t as GroundedBadge } from "./GroundedBadge-CGhDft-r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQRCoHS5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var typingPhrases = [
	"Interview Candidate AI",
	"Audit ATS Resume Scores",
	"Generate AI Cover Letters",
	"Practice STAR Mock Interviews",
	"Track Job Application Success"
];
function Hero() {
	const [phraseIdx, setPhraseIdx] = (0, import_react.useState)(0);
	const [charIdx, setCharIdx] = (0, import_react.useState)(0);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const currentPhrase = typingPhrases[phraseIdx];
		const timeout = setTimeout(() => {
			if (!isDeleting) {
				if (charIdx < currentPhrase.length) setCharIdx((prev) => prev + 1);
				else setTimeout(() => setIsDeleting(true), 2e3);
			} else if (charIdx > 0) setCharIdx((prev) => prev - 1);
			else {
				setIsDeleting(false);
				setPhraseIdx((prev) => (prev + 1) % typingPhrases.length);
			}
		}, isDeleting ? 40 : 80);
		return () => clearTimeout(timeout);
	}, [
		charIdx,
		isDeleting,
		phraseIdx
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero-glow relative overflow-hidden border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-rise",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroundedBadge, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl",
						children: [
							"Meet the Candidate.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary font-display",
								children: [typingPhrases[phraseIdx].substring(0, charIdx), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "animate-pulse",
									children: "|"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: [candidate.tagline, " HireMeAI provides AI-grounded interviews, instant ATS resume compatibility scoring, tailored cover letters, and STAR mock interview preparation."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/chat",
								className: "shadow-accent inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5",
								children: "Talk to Candidate AI 💬"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ats",
								className: "inline-flex items-center justify-center rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/20",
								children: "Audit ATS Score 🎯"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cover-letter",
								className: "inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
								children: "Cover Letter ✉️"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							{
								label: "DSA SOLVED",
								val: "1,000+"
							},
							{
								label: "LEETCODE RATING",
								val: "1,800+"
							},
							{
								label: "B.TECH CGPA",
								val: "8.68/10"
							},
							{
								label: "EXPERIENCE",
								val: "2.0+ Yrs"
							}
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel px-3.5 py-3 text-center border-border/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[10px] tracking-widest text-muted-foreground uppercase font-bold",
								children: h.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm font-bold text-primary",
								children: h.val
							})]
						}, h.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel shadow-elevated animate-rise p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/80 font-display text-lg font-bold text-primary-foreground shadow-accent",
								children: candidate.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-bold",
								children: candidate.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									candidate.title,
									" · ",
									candidate.location
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-400",
							children: "● AI Ready"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface-raised px-4 py-3 text-muted-foreground flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Recruiter: \"What are your major full-stack projects?\"" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-primary",
								children: "Just now"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 leading-relaxed text-foreground",
							children: [
								"\"Developed ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-primary",
									children: "MediBuddy"
								}),
								" (MERN stack doctor appointment platform with role-based REST APIs) and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-primary",
									children: "WE CHAT"
								}),
								" (Flutter real-time messaging app with Firebase Auth & Cloud Firestore).\""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-2 gap-2 text-center text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/mock-interview",
							className: "rounded-xl border border-border bg-surface-raised py-2.5 font-semibold transition-colors hover:border-primary",
							children: "🎤 Mock Practice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/analytics",
							className: "rounded-xl border border-border bg-surface-raised py-2.5 font-semibold transition-colors hover:border-primary",
							children: "📈 View Analytics"
						})]
					})
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-7xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary",
						children: "🚀 All-in-One Career Intelligence Suite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold sm:text-4xl",
						children: "Everything You Need to Hire or Get Hired"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Explore AI-driven features built to analyze resumes, evaluate technical readiness, and prepare for interviews."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: "💬",
						title: "AI Interview Room",
						badge: "Resume Grounded",
						desc: "Recruiters can interview candidate AI grounded strictly in verified resume data — no hallucination.",
						link: "/chat",
						cta: "Start Interview ↗"
					},
					{
						icon: "🎯",
						title: "ATS Intelligence Engine",
						badge: "ATS 99.4% Accurate",
						desc: "Audit ATS compatibility scores, section breakdowns, keyword density, and job description alignment.",
						link: "/ats",
						cta: "Audit Resume ↗"
					},
					{
						icon: "✉️",
						title: "AI Cover Letter Studio",
						badge: "Multi-Tone",
						desc: "Instantly generate customized, 3-paragraph cover letters tailored for specific roles and company cultures.",
						link: "/cover-letter",
						cta: "Craft Letter ↗"
					},
					{
						icon: "🎤",
						title: "Mock Interview & STAR",
						badge: "Behavioral & Tech",
						desc: "Practice behavioral (STAR format), system design, and DSA questions with instant AI evaluation scores.",
						link: "/mock-interview",
						cta: "Practice Mock ↗"
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "panel p-6 flex flex-col justify-between shadow-elevated transition-transform hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: f.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-surface-raised border border-border px-2 py-0.5 text-[10px] font-bold text-primary",
								children: f.badge
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-base font-bold",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground",
							children: f.desc
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: f.link,
						className: "mt-6 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline",
						children: f.cta
					})]
				}, f.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 border-t border-border pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-center sm:text-3xl",
					children: "How HireMeAI Works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-3",
					children: [
						{
							step: "01",
							title: "Parsed & Grounded Data",
							body: "Resumes are converted into structured profiles: skills, experiences, projects, and certifications."
						},
						{
							step: "02",
							title: "Intelligent Interaction",
							body: "Recruiters & candidates ask questions or run ATS audits via natural language or target job descriptions."
						},
						{
							step: "03",
							title: "Actionable Results & Scores",
							body: "Get instant verified answers, ATS score cards, cover letters, and STAR answer feedback."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "panel p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-bold text-primary",
								children: c.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-base font-bold",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: c.body
							})
						]
					}, c.step))
				})]
			})
		]
	})] });
}
//#endregion
export { Index as component };
