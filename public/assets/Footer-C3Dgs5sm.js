import {
    j as e
} from "./framer-C_Gpxhjm.js";
import {
    T as t
} from "./TermsPrivacyDialog-D4Wacw8W.js";
import {
    N as r
} from "./index-DGn1on1U.js";
import "./dialog-C9noMzaw.js";
import "./radix-2-YDU1c1.js";
import "./recharts-C2k-4Gok.js";

function m() {
    return e.jsx("footer", {
        className: "border-t border-border py-8 px-4 mt-8",
        children: e.jsxs("div", {
            className: "max-w-2xl mx-auto",
            children: [e.jsx("div", {
                className: "bg-muted rounded-lg p-4 mb-6",
                children: e.jsxs("p", {
                    className: "text-sm text-muted-foreground leading-relaxed",
                    children: [e.jsx("span", {
                        className: "font-semibold",
                        children: "Disclaimer:"
                    }), " The Compensation Eligibility Tool is for general guidance only and does not guarantee compensation. We are not a law firm and do not provide legal advice. If you qualify, we may connect you with an attorney, but no attorney-client relationship exists unless you sign with them. Our service is free to you; participating partners and attorneys may compensate us."]
                })
            }), e.jsxs("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-4",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [e.jsx("img", {
                        src: r,
                        alt: "File My Claim",
                        className: "w-8 h-8 object-contain"
                    }), e.jsx("div", {
                        className: "text-sm text-muted-foreground",
                        children: e.jsxs("p", {
                            children: ["© ", new Date().getFullYear(), " Accident Estimator"]
                        })
                    })]
                }), e.jsx(t, {
                    children: e.jsx("button", {
                        className: "text-sm text-muted-foreground border border-border rounded px-3 py-1.5 hover:bg-muted transition-colors",
                        children: "Terms & Privacy"
                    })
                })]
            })]
        })
    })
}
export {
    m as
    default
};