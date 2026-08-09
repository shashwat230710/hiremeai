import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B5ySrqep.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CPVEKEtd.css";
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("hiremeai_theme");
			if (stored === "light" || stored === "dark") return stored;
		}
		return "dark";
	});
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		if (theme === "light") {
			root.classList.add("light");
			root.classList.remove("dark");
		} else {
			root.classList.add("dark");
			root.classList.remove("light");
		}
		localStorage.setItem("hiremeai_theme", theme);
	}, [theme]);
	const toggleTheme = () => {
		setTheme((prev) => prev === "dark" ? "light" : "dark");
	};
	return {
		theme,
		toggleTheme
	};
}
var navLinks = [
	{
		to: "/",
		label: "Home",
		icon: "🏠"
	},
	{
		to: "/chat",
		label: "AI Interview",
		icon: "💬"
	},
	{
		to: "/profile",
		label: "Profile",
		icon: "👤"
	},
	{
		to: "/ats",
		label: "ATS Intelligence",
		icon: "📊"
	},
	{
		to: "/cover-letter",
		label: "Cover Letter",
		icon: "✉️"
	},
	{
		to: "/mock-interview",
		label: "Mock Prep",
		icon: "🎯"
	},
	{
		to: "/analytics",
		label: "Analytics",
		icon: "📈"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { theme, toggleTheme } = useTheme();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main",
			className: "mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 transition-transform hover:scale-105",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-primary-foreground shadow-accent",
						children: "H"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold tracking-tight",
						children: ["HireMe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "AI"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-1 md:flex",
					children: navLinks.map((l) => {
						const active = pathname === l.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: `flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${active ? "bg-primary/15 text-primary border border-primary/20 shadow-sm" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label })]
						}, l.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleTheme,
							"aria-label": "Toggle theme",
							className: "inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface-raised text-sm transition-colors hover:border-primary/50",
							title: `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
							children: theme === "dark" ? "☀️" : "🌙"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chat",
							className: "hidden sm:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5",
							children: "Start Interview AI ↗"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileOpen(!mobileOpen),
							className: "inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface-raised text-base md:hidden",
							"aria-label": "Toggle menu",
							children: mobileOpen ? "✕" : "☰"
						})
					]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border bg-background px-4 py-4 md:hidden animate-rise",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: navLinks.map((l) => {
					const active = pathname === l.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						onClick: () => setMobileOpen(false),
						className: `flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${active ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base",
							children: l.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label })]
					}, l.to);
				})
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "HireMeAI — Interview a candidate's AI" },
			{
				name: "description",
				content: "Recruiters can interview an AI representation of a candidate, grounded strictly in their resume."
			},
			{
				property: "og:title",
				content: "HireMeAI — Interview a candidate's AI"
			},
			{
				property: "og:description",
				content: "Ask an AI about a candidate's skills, experience and projects."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Manrope:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "border-t border-border py-6 text-center text-xs text-muted-foreground",
					children: "HireMeAI · AI answers are grounded in the candidate's resume."
				})
			]
		})
	});
}
var candidate = {
	name: "Raj",
	title: "Full Stack & Mobile App Developer",
	tagline: "BTech CSE student specializing in Data Structures & Algorithms, Full Stack Web Development (MERN, Spring Boot), and Mobile Apps (Flutter).",
	location: "CGC Landran / Buxar, India",
	email: "rajkumarbxr78@gmail.com",
	phone: "+91-7004155718",
	linkedin: "https://linkedin.com/in/Raj.",
	github: "https://github.com/Raj-cgc",
	summary: "Detail-oriented BTech CSE student with a strong foundation in Data Structures and Algorithms and practical experience in Full Stack development and App Development. Skilled in building efficient applications and solving complex problems with clean, maintainable code.",
	highlights: [
		{
			label: "Focus",
			value: "Full Stack & Mobile"
		},
		{
			label: "Stack",
			value: "C++ · React · Flutter"
		},
		{
			label: "Education",
			value: "B.Tech CSE (CGPA 8.68)"
		}
	],
	skills: [
		"C++",
		"Java",
		"HTML / CSS",
		"JavaScript",
		"Spring Boot",
		"React.js",
		"Node.js",
		"Express.js",
		"Flutter & Dart",
		"MySQL",
		"MongoDB",
		"Firebase",
		"OOP & Low Level Design",
		"DSA & Operating Systems",
		"DBMS"
	],
	experience: [{
		company: "Full Stack & Mobile Projects",
		role: "Full Stack & App Developer",
		duration: "2023 — Present",
		description: "Built MediBuddy (a role-based MERN doctor appointment portal with RESTful APIs) and WE CHAT (a real-time messaging mobile application built with Flutter & Firebase). Solved 1000+ DSA problems on LeetCode.",
		skills: [
			"C++",
			"Java",
			"React.js",
			"Node.js",
			"Express.js",
			"Flutter",
			"Firebase",
			"MongoDB"
		]
	}],
	education: [
		{
			institution: "B.Tech. Computer Science & Engineering",
			detail: "Chandigarh Engineering College, CGC, Landran — Expected 2027 | CGPA: 8.68 / 10"
		},
		{
			institution: "Senior Secondary (Class XII)",
			detail: "Cambridge Sr. Sec. School, Buxar — Completed 2022 | Score: 97%"
		},
		{
			institution: "Secondary (Class X)",
			detail: "St. Pauls School, Sasaram — Completed 2020 | Score: 88.6%"
		}
	],
	projects: [{
		name: "MediBuddy — Doctor Appointment App",
		description: "Built a role-based doctor appointment portal where patients can easily book appointments, doctors manage work, and admin manages overall workflow. Designed RESTful APIs for authentication, scheduling, and medical history.",
		tags: [
			"MERN Stack",
			"React.js",
			"Node.js",
			"Express.js",
			"MongoDB"
		],
		github: "https://github.com/Raj-cgc"
	}, {
		name: "WE CHAT — Real Time Chat App",
		description: "Developed a real-time messaging application using Flutter and Dart, enabling one-to-one chat with instant message delivery, Firebase Authentication, and Cloud Firestore synchronization across devices.",
		tags: [
			"Flutter",
			"Dart",
			"Firebase",
			"Firestore",
			"Mobile App"
		],
		github: "https://github.com/Raj-cgc"
	}],
	certifications: [
		"HackerRank: Secured 5-star badge in Problem Solving and C++",
		"LeetCode: Solved 1000+ DSA problems with active contest rating of 1800+",
		"NPTEL Certification (DBMS): Completed with Silver badge",
		"Infosys Springboard Certification: Certified HTML, CSS, JavaScript Developer",
		"Smart India Hackathon (SIH 2025): SIH 2025 Participant"
	]
};
var suggestedQuestions = [
	"What are Raj's strongest technical skills?",
	"Tell me about Raj's MediBuddy doctor appointment project.",
	"Tell me about WE CHAT built with Flutter & Firebase.",
	"What is Raj's CGPA and educational background?",
	"What competitive programming rating and badges does Raj hold?"
];
var $$splitComponentImporter$6 = () => import("./routes-DQRCoHS5.mjs");
var title$2 = `${candidate.name} — AI Career & Resume Intelligence Platform | HireMeAI`;
var description$2 = `AI-powered resume grounded candidate interview, ATS compatibility scoring, cover letter generator, and STAR mock interview preparation platform.`;
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: description$2
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: description$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./analytics-CCmqvM6j.mjs");
var Route$5 = createFileRoute("/analytics")({
	head: () => ({ meta: [{ title: `User Analytics & Job Tracker | HireMeAI` }, {
		name: "description",
		content: "Track application success rate, ATS score history, skills growth, and job search analytics."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./ats-CrsbaFiy.mjs");
var Route$4 = createFileRoute("/ats")({
	head: () => ({ meta: [{ title: `ATS Resume Intelligence & Job Matcher | HireMeAI` }, {
		name: "description",
		content: "Audit ATS resume compatibility score, keyword density, and match against job descriptions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./chat-CSikI8JP.mjs");
var title$1 = `Interview ${candidate.name}'s AI | HireMeAI`;
var description$1 = `Ask questions and get resume-grounded answers about ${candidate.name}'s skills, experience and projects.`;
var Route$3 = createFileRoute("/chat")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./cover-letter-CWqvUFbP.mjs");
var Route$2 = createFileRoute("/cover-letter")({
	head: () => ({ meta: [{ title: `AI Cover Letter Generator | HireMeAI` }, {
		name: "description",
		content: "Generate tailored, professional cover letters based on candidate resume and target company/role."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./mock-interview-5nsbWo0z.mjs");
var Route$1 = createFileRoute("/mock-interview")({
	head: () => ({ meta: [{ title: `AI Mock Interview Room & STAR Practice | HireMeAI` }, {
		name: "description",
		content: "Practice technical, behavioral (STAR), and architecture interview questions with instant AI evaluation."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./profile-CCzrJVf0.mjs");
var title = `${candidate.name} — Candidate Profile | HireMeAI`;
var description = `Skills, experience timeline, education, projects, and certifications for ${candidate.name}, ${candidate.title}.`;
var Route = createFileRoute("/profile")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AnalyticsRoute: Route$5.update({
		id: "/analytics",
		path: "/analytics",
		getParentRoute: () => Route$7
	}),
	AtsRoute: Route$4.update({
		id: "/ats",
		path: "/ats",
		getParentRoute: () => Route$7
	}),
	ChatRoute: Route$3.update({
		id: "/chat",
		path: "/chat",
		getParentRoute: () => Route$7
	}),
	CoverLetterRoute: Route$2.update({
		id: "/cover-letter",
		path: "/cover-letter",
		getParentRoute: () => Route$7
	}),
	MockInterviewRoute: Route$1.update({
		id: "/mock-interview",
		path: "/mock-interview",
		getParentRoute: () => Route$7
	}),
	ProfileRoute: Route.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { candidate as n, suggestedQuestions as r, router_exports as t };
