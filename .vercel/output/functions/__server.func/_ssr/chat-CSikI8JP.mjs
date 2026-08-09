import { i as __toESM } from "../_runtime.mjs";
import { n as askCandidate } from "./chat-D_RYNE7-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as candidate, r as suggestedQuestions } from "./router-B5ySrqep.mjs";
import { t as GroundedBadge } from "./GroundedBadge-CGhDft-r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-CSikI8JP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CandidateSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 place-items-center rounded-full bg-primary/15 font-display text-lg font-semibold text-primary",
					children: candidate.name.charAt(0)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-semibold",
					children: candidate.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						candidate.title,
						" · ",
						candidate.location
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: candidate.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-[11px] tracking-widest text-muted-foreground uppercase",
				children: "Core skills"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-wrap gap-2",
				children: candidate.skills.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border bg-surface-raised px-2.5 py-1 text-xs",
					children: s
				}, s))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroundedBadge, {})
		]
	});
}
var newId = () => Math.random().toString(36).slice(2);
function ChatRoom() {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [lastQuestion, setLastQuestion] = (0, import_react.useState)(null);
	const [summaryOpen, setSummaryOpen] = (0, import_react.useState)(false);
	const textareaRef = (0, import_react.useRef)(null);
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		textareaRef.current?.focus();
	}, []);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
	}, [messages, loading]);
	async function send(question) {
		const q = question.trim();
		if (!q || loading) return;
		setMessages((prev) => [...prev, {
			id: newId(),
			role: "user",
			text: q
		}]);
		setInput("");
		setError(null);
		setLastQuestion(q);
		setLoading(true);
		try {
			const answer = await askCandidate(q);
			setMessages((prev) => [...prev, {
				id: newId(),
				role: "ai",
				text: answer
			}]);
		} catch {
			setError("Unable to connect. Please check that the backend is running.");
		} finally {
			setLoading(false);
			textareaRef.current?.focus();
		}
	}
	function retry() {
		if (lastQuestion) {
			setError(null);
			setMessages((prev) => prev.filter((m) => !(m.role === "user" && m.text === lastQuestion)));
			send(lastQuestion);
		}
	}
	const empty = messages.length === 0 && !loading && !error;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:w-72 lg:shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel hidden p-5 lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandidateSummary, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel overflow-hidden lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-expanded": summaryOpen,
					onClick: () => setSummaryOpen((o) => !o),
					className: "flex w-full items-center justify-between px-4 py-3 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						candidate.name,
						" · ",
						candidate.title
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "text-muted-foreground",
						children: summaryOpen ? "−" : "+"
					})]
				}), summaryOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandidateSummary, {})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel flex min-h-[70vh] flex-1 flex-col lg:h-[calc(100vh-9rem)] lg:min-h-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-sm font-semibold",
						children: "AI Interview Room"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Answers sourced from ",
							candidate.name,
							"'s resume"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroundedBadge, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5",
					role: "log",
					"aria-live": "polite",
					"aria-label": "Interview conversation",
					children: [
						empty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Start the interview"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Pick a question below, or ask your own."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 grid gap-2 sm:grid-cols-2",
									children: suggestedQuestions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => void send(q),
										className: "w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-left text-sm transition-colors hover:border-primary/40 hover:text-primary",
										children: q
									}) }, q))
								})
							]
						}),
						messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `animate-rise flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: m.role === "user" ? "max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground" : "max-w-[90%] rounded-2xl rounded-bl-md border border-border bg-surface-raised px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap",
								children: [m.role === "ai" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-[11px] tracking-widest text-primary uppercase",
									children: "Candidate AI"
								}), m.text]
							})
						}, m.id)),
						loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex gap-1",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thinking-dot size-1.5 rounded-full bg-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "thinking-dot size-1.5 rounded-full bg-primary",
										style: { animationDelay: "0.15s" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "thinking-dot size-1.5 rounded-full bg-primary",
										style: { animationDelay: "0.3s" }
									})
								]
							}), "AI is thinking..."]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "alert",
							className: "rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: error }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: retry,
								className: "mt-3 rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary",
								children: "Retry"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						send(input);
					},
					className: "border-t border-border p-3 sm:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end gap-2 rounded-xl border border-border bg-surface-raised p-2 focus-within:border-primary/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "question",
								className: "sr-only",
								children: "Ask the candidate AI a question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "question",
								ref: textareaRef,
								rows: 1,
								value: input,
								onChange: (e) => setInput(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										send(input);
									}
								},
								placeholder: "Ask about skills, experience, projects…",
								className: "max-h-40 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading || input.trim().length === 0,
								className: "rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity disabled:opacity-40",
								children: "Send"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] text-muted-foreground",
						children: "Enter to send · Shift + Enter for a new line"
					})]
				})
			]
		})]
	});
}
function ChatPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRoom, {});
}
//#endregion
export { ChatPage as component };
