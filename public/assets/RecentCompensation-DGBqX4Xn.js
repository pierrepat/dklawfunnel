import {
    r,
    j as e
} from "./framer-C_Gpxhjm.js";
import {
    C as i,
    a as l
} from "./chevron-right-BaXfGb-L.js";
import "./index-DGn1on1U.js";
import "./recharts-C2k-4Gok.js";
import "./radix-2-YDU1c1.js";
const c = "/assets/money-stack-Bx9jU3T6.png",
    t = [{
        amount: "$92,562",
        type: "CAR ACCIDENT PAYOUT",
        detail: "Within 1 year, not at-fault, lower back injury."
    }, {
        amount: "$47,300",
        type: "REAR-END COLLISION",
        detail: "6 months, not at-fault, whiplash and neck pain."
    }, {
        amount: "$128,750",
        type: "T-BONE ACCIDENT",
        detail: "Within 2 years, not at-fault, broken ribs and surgery."
    }, {
        amount: "$31,200",
        type: "FENDER BENDER",
        detail: "3 months, not at-fault, soft tissue damage."
    }];

function h() {
    const [o, n] = r.useState(0), s = t[o];
    return e.jsx("section", {
        className: "py-16 px-4",
        children: e.jsxs("div", {
            className: "max-w-2xl mx-auto flex items-center gap-4",
            children: [e.jsx("button", {
                onClick: () => n(a => (a - 1 + t.length) % t.length),
                className: "p-2 text-muted-foreground hover:text-foreground transition-colors",
                "aria-label": "Previous",
                children: e.jsx(i, {
                    className: "w-6 h-6"
                })
            }), e.jsxs("div", {
                className: "flex-1 flex items-center justify-center gap-4",
                children: [e.jsx("div", {
                    className: "w-16 h-16 flex items-center justify-center flex-shrink-0",
                    children: e.jsx("img", {
                        src: c,
                        alt: "Money",
                        className: "w-16 h-16 object-contain"
                    })
                }), e.jsxs("div", {
                    className: "text-center",
                    children: [e.jsx("p", {
                        className: "text-base font-semibold text-foreground",
                        children: "Recent Compensation"
                    }), e.jsx("p", {
                        className: "text-3xl font-bold text-primary",
                        children: s.amount
                    }), e.jsx("p", {
                        className: "text-sm font-semibold tracking-wider uppercase text-muted-foreground",
                        children: s.type
                    }), e.jsx("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: s.detail
                    })]
                })]
            }), e.jsx("button", {
                onClick: () => n(a => (a + 1) % t.length),
                className: "p-2 text-muted-foreground hover:text-foreground transition-colors",
                "aria-label": "Next",
                children: e.jsx(l, {
                    className: "w-6 h-6"
                })
            })]
        })
    })
}
export {
    h as
    default
};