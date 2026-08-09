import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GroundedBadge-CGhDft-r.js
var import_jsx_runtime = require_jsx_runtime();
function GroundedBadge({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-primary ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: "✓"
		}), "Resume-grounded AI"]
	});
}
//#endregion
export { GroundedBadge as t };
