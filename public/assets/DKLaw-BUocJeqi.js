const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/DKLawTestimonials-CLVcmzxy.js", "assets/framer-C_Gpxhjm.js", "assets/star-BKfapDvZ.js", "assets/index-DGn1on1U.js", "assets/recharts-C2k-4Gok.js", "assets/radix-2-YDU1c1.js", "assets/index-DJ_eQkOL.css", "assets/InsuranceLogos-Df9IicsM.js", "assets/CompensationGrid-B37-zUJ6.js", "assets/FAQ-LN7jBCTu.js", "assets/DKLawFooter-gcyw-L-y.js", "assets/TermsPrivacyDialog-D4Wacw8W.js", "assets/dialog-C9noMzaw.js"]))) => i.map(i => d[i]);
import {
    _ as d,
    C as u
} from "./index-DGn1on1U.js";
import {
    j as e,
    r
} from "./framer-C_Gpxhjm.js";
const m = "/assets/dk-law-logo-BJVGfOCQ.webp";

function p() {
    return e.jsx("header", {
        className: "border-b border-border bg-card",
        children: e.jsxs("div", {
            className: "max-w-2xl mx-auto px-4 py-4 flex items-center justify-between",
            children: [e.jsx("img", {
                src: m,
                alt: "DK Law",
                className: "h-8"
            }), e.jsxs("div", {
                className: "text-right",
                children: [e.jsx("p", {
                    className: "text-[10px] text-muted-foreground leading-tight",
                    children: "Attorney Advertising"
                }), e.jsx("p", {
                    className: "text-[10px] text-muted-foreground leading-tight",
                    children: "Daniel Kim, SBN #293432"
                })]
            })]
        })
    })
}
const y = r.lazy(() => d(() =>
        import ("./DKLawTestimonials-CLVcmzxy.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]))),
    w = r.lazy(() => d(() =>
        import ("./InsuranceLogos-Df9IicsM.js"), __vite__mapDeps([7, 1]))),
    f = r.lazy(() => d(() =>
        import ("./CompensationGrid-B37-zUJ6.js"), __vite__mapDeps([8, 1, 3, 4, 5, 6]))),
    h = r.lazy(() => d(() =>
        import ("./FAQ-LN7jBCTu.js"), __vite__mapDeps([9, 1]))),
    _ = r.lazy(() => d(() =>
        import ("./DKLawFooter-gcyw-L-y.js"), __vite__mapDeps([10, 1, 11, 12, 5, 4, 3, 6]))),
    a = {
        title: "Car Accident Attorney Costa Mesa | Free Case Review | DK Law",
        description: "Find out what your car accident case is worth — free, fast, and confidential. Top-rated car accident injury attorney in Costa Mesa. No fees unless you win. Get your free consultation now.",
        keywords: "car accident attorney near me, best car accident lawyer near me, car accident settlement calculator, what is my car accident worth, car accident compensation estimator, insurance lowball offer after accident, car accident case value, car crash lawyer free consultation, motor vehicle accident attorney, car accident injury attorney, personal injury attorney car accident, is my insurance lowballing me, car accident pain and suffering value, how much can I sue for car accident, car accident legal advice, car wreck attorney near me, car accident claim help, free car accident case review, auto accident settlement value, sue insurance company car accident, car accident attorney consultation, car accident case worth calculator, undervalued accident settlement"
    },
    x = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "DK Law - Injury, Accident, and More",
        description: a.description,
        url: "https://file-my-claim-bot.lovable.app/dk-law",
        telephone: "+17142942224",
        address: {
            "@type": "PostalAddress",
            streetAddress: "611 Anton Blvd, Ste 1000",
            addressLocality: "Costa Mesa",
            addressRegion: "CA",
            postalCode: "92626",
            addressCountry: "US"
        },
        areaServed: {
            "@type": "State",
            name: "California"
        },
        priceRange: "Free Consultation",
        openingHours: "Mo-Fr 09:00-18:00",
        sameAs: [],
        attorney: {
            "@type": "Person",
            name: "Daniel Kim",
            jobTitle: "Attorney at Law"
        },
        makesOffer: {
            "@type": "Offer",
            name: "Free Car Accident Case Review",
            description: "Free consultation and case evaluation for car accident victims. No fees unless you win compensation.",
            price: "0",
            priceCurrency: "USD"
        }
    },
    v = () => (r.useEffect(() => {
        document.title = a.title;
        const t = (c, o, l) => {
            let s = document.querySelector(`meta[${c}="${o}"]`);
            s || (s = document.createElement("meta"), s.setAttribute(c, o), document.head.appendChild(s)), s.setAttribute("content", l)
        };
        t("name", "description", a.description), t("name", "keywords", a.keywords), t("property", "og:title", a.title), t("property", "og:description", a.description), t("property", "og:type", "website"), t("property", "og:url", "https://file-my-claim-bot.lovable.app/dk-law"), t("name", "twitter:title", a.title), t("name", "twitter:description", a.description);
        let i = document.querySelector('link[rel="canonical"]');
        i || (i = document.createElement("link"), i.setAttribute("rel", "canonical"), document.head.appendChild(i)), i.setAttribute("href", "https://file-my-claim-bot.lovable.app/dk-law");
        let n = document.querySelector("script[data-dk-law-jsonld]");
        return n || (n = document.createElement("script"), n.setAttribute("type", "application/ld+json"), n.setAttribute("data-dk-law-jsonld", "true"), document.head.appendChild(n)), n.textContent = JSON.stringify(x), () => {
            document.title = "Accident Estimator - Check Your Accident Compensation";
            const c = document.querySelector("script[data-dk-law-jsonld]");
            c == null || c.remove();
            const o = document.querySelector('link[rel="canonical"]');
            o == null || o.remove()
        }
    }, []), e.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [e.jsx(p, {}), e.jsx(u, {
            vendor: "DKLaw"
        }), e.jsxs(r.Suspense, {
            fallback: null,
            children: [e.jsx(y, {}), e.jsx(w, {}), e.jsx(f, {}), e.jsx(h, {}), e.jsx(_, {})]
        })]
    })),
    j = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: v
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    j as D, m as d
};