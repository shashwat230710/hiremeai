import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as candidate } from "./router-B5ySrqep.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CCzrJVf0.js
var import_jsx_runtime = require_jsx_runtime();
function ExperienceTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-6 border-l border-border pl-6",
		children: candidate.experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute top-1.5 -left-[31px] size-2.5 rounded-full bg-primary ring-4 ring-background"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: job.role
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: job.duration
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-primary",
					children: job.company
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: job.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-2",
					children: job.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-surface-raised px-2 py-1 text-[11px] text-muted-foreground",
						children: s
					}, s))
				})
			]
		}, `${job.company}-${job.role}`))
	});
}
function Section({ heading, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel p-5 sm:p-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-semibold sm:text-xl",
			children: heading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5",
			children
		})]
	});
}
function ProfilePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-primary uppercase font-semibold",
							children: "✓ Verified Resume Profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl font-semibold sm:text-4xl",
							children: candidate.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted-foreground",
							children: [
								candidate.title,
								" · ",
								candidate.location
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/chat",
						className: "inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: "Ask Candidate AI"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: candidate.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3 text-xs",
					children: [
						candidate.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${candidate.email}`,
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-raised px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/50",
							children: ["✉️ ", candidate.email]
						}),
						candidate.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${candidate.phone}`,
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-raised px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/50",
							children: ["📞 ", candidate.phone]
						}),
						candidate.linkedin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: candidate.linkedin,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-raised px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/50",
							children: "🔗 LinkedIn"
						}),
						candidate.github && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: candidate.github,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-raised px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/50",
							children: "💻 GitHub"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					heading: "Technical Skills",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: candidate.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-border bg-surface-raised px-3.5 py-1.5 text-sm font-medium text-foreground",
							children: s
						}, s))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					heading: "Experience",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceTimeline, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					heading: "Projects",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: candidate.projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border/60 bg-surface-raised p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold",
										children: p.name
									}), p.github && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: p.github,
										target: "_blank",
										rel: "noreferrer",
										className: "text-xs text-primary hover:underline",
										children: "GitHub ↗"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-2",
									children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary",
										children: t
									}, t))
								})
							]
						}, p.name))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					heading: "Education",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: candidate.education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-border/50 bg-surface-raised p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-medium",
								children: e.institution
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: e.detail
							})]
						}, e.institution))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					heading: "Achievements & Certifications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-2",
						children: candidate.certifications.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2.5 rounded-xl border border-border/50 bg-surface-raised p-3.5 text-sm text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-bold",
								children: "🏆"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
						}, c))
					})
				})
			]
		})]
	});
}
//#endregion
export { ProfilePage as component };
