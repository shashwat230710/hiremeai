import { i as __toESM } from "../_runtime.mjs";
import { i as fetchAnalyticsData } from "./chat-D_RYNE7-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-CCmqvM6j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AnalyticsPage() {
	const [data, setData] = (0, import_react.useState)(null);
	const [newCompany, setNewCompany] = (0, import_react.useState)("");
	const [newRole, setNewRole] = (0, import_react.useState)("");
	const [applications, setApplications] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetchAnalyticsData().then((res) => {
			setData(res);
			setApplications(res.applications);
		}).catch((err) => console.error(err));
	}, []);
	const addApplication = () => {
		if (!newCompany || !newRole) return;
		const newApp = {
			id: `app-${Date.now()}`,
			company: newCompany,
			role: newRole,
			status: "Applied",
			date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			match_score: 92
		};
		setApplications([newApp, ...applications]);
		setNewCompany("");
		setNewRole("");
	};
	const updateStatus = (id, newStatus) => {
		setApplications(applications.map((a) => a.id === id ? {
			...a,
			status: newStatus
		} : a));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary",
						children: "📈 Intelligence Dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-bold sm:text-4xl",
						children: "Analytics & Job Application Tracker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Monitor resume impressions, ATS compatibility trajectory, skills growth, and active job applications."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8",
				children: [
					{
						label: "Resume Impressions",
						val: data ? data.metrics.resume_impressions : 1420,
						icon: "👁️",
						sub: "+12% this week"
					},
					{
						label: "Average ATS Score",
						val: `${data ? data.metrics.ats_compatibility_avg : 92}%`,
						icon: "📊",
						sub: "Enterprise Ready"
					},
					{
						label: "Practice Streak",
						val: `${data ? data.metrics.streak_days : 7} Days`,
						icon: "🔥",
						sub: "Daily Mock Room"
					},
					{
						label: "Active Applications",
						val: applications.length,
						icon: "💼",
						sub: `${applications.filter((a) => a.status === "Interview Scheduled").length} Interviewing`
					}
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
								children: m.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl",
								children: m.icon
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-2xl font-bold font-display text-foreground",
							children: m.val
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-primary font-medium",
							children: m.sub
						})
					]
				}, m.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-6 shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold border-b border-border pb-3",
								children: "Active Job Applications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2 items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newCompany,
										onChange: (e) => setNewCompany(e.target.value),
										placeholder: "Company Name",
										className: "flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newRole,
										onChange: (e) => setNewRole(e.target.value),
										placeholder: "Role Title",
										className: "flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: addApplication,
										className: "rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-accent transition-transform hover:-translate-y-0.5",
										children: "+ Add Application"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border text-muted-foreground uppercase",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "pb-3",
												children: "Company & Role"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "pb-3",
												children: "Match Score"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "pb-3",
												children: "Status"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "pb-3 text-right",
												children: "Actions"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-border/60",
										children: applications.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "hover:bg-surface-raised/50",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "py-3.5 font-medium",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-semibold text-foreground",
														children: app.company
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[11px] text-muted-foreground",
														children: app.role
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary",
														children: [app.match_score, "% Match"]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: app.status,
														onChange: (e) => updateStatus(app.id, e.target.value),
														className: "rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-semibold text-foreground focus:outline-none",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Applied",
																children: "Applied"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Screening",
																children: "Screening"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Interview Scheduled",
																children: "Interview Scheduled"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Offer Received",
																children: "Offer Received"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Rejected",
																children: "Rejected"
															})
														]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3.5 text-right text-muted-foreground",
													children: app.date
												})
											]
										}, app.id))
									})]
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-6 shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold border-b border-border pb-3",
							children: "Skills Proficiency Trajectory"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-4",
							children: (data?.skills_growth || [
								{
									skill: "React.js / Frontend",
									level: 95
								},
								{
									skill: "Data Structures & DSA",
									level: 92
								},
								{
									skill: "Node.js / Express Backend",
									level: 88
								},
								{
									skill: "Flutter / Mobile",
									level: 85
								},
								{
									skill: "Database (MongoDB & SQL)",
									level: 84
								}
							]).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs font-medium mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.skill }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-primary font-bold",
									children: [s.level, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 w-full overflow-hidden rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-primary transition-all duration-500",
									style: { width: `${s.level}%` }
								})
							})] }, s.skill))
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { AnalyticsPage as component };
