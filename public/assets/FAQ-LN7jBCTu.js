import {
    j as e
} from "./framer-C_Gpxhjm.js";
const o = [{
    q: "Does it cost anything to qualify or get help?",
    a: "No. There's no money out-of-pocket to qualify, and no fees unless you choose to move forward and actually receive compensation. If there's no payout, you owe nothing."
}, {
    q: "How does your the Free Qualification Tool work?",
    a: "Our tool asks a few quick questions about your accident — like when it happened, who was at fault, and whether you had any injuries or treatment. Based on your answers and state laws, we estimate if you could qualify for compensation and connect you with an expert attorney who can review your case for free. All with zero obligation to continue."
}, {
    q: "What makes our service different from just filing a claim with insurance myself?",
    a: "Insurance companies are trained to minimize payouts. Most people accept the first offer — which is usually far less than what their case is actually worth. Our experts know how to properly document your losses and negotiate aggressively. We've seen payouts up to 10x higher than the initial offer."
}, {
    q: "Do I have to go to court?",
    a: "Not usually. Most cases settle without going to court after proper negotiation. Court is only a last resort — and you decide if you're comfortable with that."
}, {
    q: "Do I qualify even if I already got an offer from insurance?",
    a: "Yes — and in most cases, you should not accept that first offer. They usually test to see if you'll settle quickly. Many people later find out they qualified for 5–10x more."
}, {
    q: "What if I wasn't seriously injured? Can I still qualify?",
    a: "Yes. Even minor injuries like soreness, stiffness, or delayed pain can count — especially if they required treatment. Never assume you don't qualify until an expert reviews it."
}];

function s() {
    return e.jsxs("section", {
        className: "py-12 px-4",
        children: [e.jsx("h2", {
            className: "text-2xl font-bold text-foreground text-center mb-8",
            children: "Frequently Asked Questions"
        }), e.jsx("div", {
            className: "max-w-2xl mx-auto space-y-6",
            children: o.map(t => e.jsxs("div", {
                children: [e.jsx("h3", {
                    className: "font-semibold text-foreground text-base mb-2",
                    children: t.q
                }), e.jsx("p", {
                    className: "text-base text-muted-foreground leading-relaxed",
                    children: t.a
                })]
            }, t.q))
        })]
    })
}
export {
    s as
    default
};