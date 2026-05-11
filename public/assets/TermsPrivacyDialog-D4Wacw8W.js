import {
    r as l,
    j as e
} from "./framer-C_Gpxhjm.js";
import {
    D as ce,
    e as de,
    a as he,
    b as ue,
    c as me
} from "./dialog-C9noMzaw.js";
import {
    c as pe,
    u as R,
    p as fe,
    d as A,
    f as I,
    e as j,
    q as S,
    I as xe,
    J as ge
} from "./radix-2-YDU1c1.js";
import {
    r as V
} from "./index-DGn1on1U.js";

function be(r, o) {
    return l.useReducer((t, i) => o[t][i] ? ? t, r)
}
var q = "ScrollArea",
    [$, Oe] = pe(q),
    [ye, b] = $(q),
    G = l.forwardRef((r, o) => {
        const {
            __scopeScrollArea: t,
            type: i = "hover",
            dir: n,
            scrollHideDelay: s = 600,
            ...a
        } = r, [c, d] = l.useState(null), [m, h] = l.useState(null), [p, u] = l.useState(null), [f, g] = l.useState(null), [T, z] = l.useState(null), [w, L] = l.useState(0), [k, _] = l.useState(0), [D, E] = l.useState(!1), [W, N] = l.useState(!1), x = R(o, C => d(C)), y = fe(n);
        return e.jsx(ye, {
            scope: t,
            type: i,
            dir: y,
            scrollHideDelay: s,
            scrollArea: c,
            viewport: m,
            onViewportChange: h,
            content: p,
            onContentChange: u,
            scrollbarX: f,
            onScrollbarXChange: g,
            scrollbarXEnabled: D,
            onScrollbarXEnabledChange: E,
            scrollbarY: T,
            onScrollbarYChange: z,
            scrollbarYEnabled: W,
            onScrollbarYEnabledChange: N,
            onCornerWidthChange: L,
            onCornerHeightChange: _,
            children: e.jsx(A.div, {
                dir: y,
                ...a,
                ref: x,
                style: {
                    position: "relative",
                    "--radix-scroll-area-corner-width": w + "px",
                    "--radix-scroll-area-corner-height": k + "px",
                    ...r.style
                }
            })
        })
    });
G.displayName = q;
var J = "ScrollAreaViewport",
    K = l.forwardRef((r, o) => {
        const {
            __scopeScrollArea: t,
            children: i,
            nonce: n,
            ...s
        } = r, a = b(J, t), c = l.useRef(null), d = R(o, c, a.onViewportChange);
        return e.jsxs(e.Fragment, {
            children: [e.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                },
                nonce: n
            }), e.jsx(A.div, {
                "data-radix-scroll-area-viewport": "",
                ...s,
                ref: d,
                style: {
                    overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                    overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                    ...r.style
                },
                children: e.jsx("div", {
                    ref: a.onContentChange,
                    style: {
                        minWidth: "100%",
                        display: "table"
                    },
                    children: i
                })
            })]
        })
    });
K.displayName = J;
var v = "ScrollAreaScrollbar",
    U = l.forwardRef((r, o) => {
        const {
            forceMount: t,
            ...i
        } = r, n = b(v, r.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
        } = n, c = r.orientation === "horizontal";
        return l.useEffect(() => (c ? s(!0) : a(!0), () => {
            c ? s(!1) : a(!1)
        }), [c, s, a]), n.type === "hover" ? e.jsx(ve, { ...i,
            ref: o,
            forceMount: t
        }) : n.type === "scroll" ? e.jsx(we, { ...i,
            ref: o,
            forceMount: t
        }) : n.type === "auto" ? e.jsx(Q, { ...i,
            ref: o,
            forceMount: t
        }) : n.type === "always" ? e.jsx(X, { ...i,
            ref: o
        }) : null
    });
U.displayName = v;
var ve = l.forwardRef((r, o) => {
        const {
            forceMount: t,
            ...i
        } = r, n = b(v, r.__scopeScrollArea), [s, a] = l.useState(!1);
        return l.useEffect(() => {
            const c = n.scrollArea;
            let d = 0;
            if (c) {
                const m = () => {
                        window.clearTimeout(d), a(!0)
                    },
                    h = () => {
                        d = window.setTimeout(() => a(!1), n.scrollHideDelay)
                    };
                return c.addEventListener("pointerenter", m), c.addEventListener("pointerleave", h), () => {
                    window.clearTimeout(d), c.removeEventListener("pointerenter", m), c.removeEventListener("pointerleave", h)
                }
            }
        }, [n.scrollArea, n.scrollHideDelay]), e.jsx(I, {
            present: t || s,
            children: e.jsx(Q, {
                "data-state": s ? "visible" : "hidden",
                ...i,
                ref: o
            })
        })
    }),
    we = l.forwardRef((r, o) => {
        const {
            forceMount: t,
            ...i
        } = r, n = b(v, r.__scopeScrollArea), s = r.orientation === "horizontal", a = M(() => d("SCROLL_END"), 100), [c, d] = be("hidden", {
            hidden: {
                SCROLL: "scrolling"
            },
            scrolling: {
                SCROLL_END: "idle",
                POINTER_ENTER: "interacting"
            },
            interacting: {
                SCROLL: "interacting",
                POINTER_LEAVE: "idle"
            },
            idle: {
                HIDE: "hidden",
                SCROLL: "scrolling",
                POINTER_ENTER: "interacting"
            }
        });
        return l.useEffect(() => {
            if (c === "idle") {
                const m = window.setTimeout(() => d("HIDE"), n.scrollHideDelay);
                return () => window.clearTimeout(m)
            }
        }, [c, n.scrollHideDelay, d]), l.useEffect(() => {
            const m = n.viewport,
                h = s ? "scrollLeft" : "scrollTop";
            if (m) {
                let p = m[h];
                const u = () => {
                    const f = m[h];
                    p !== f && (d("SCROLL"), a()), p = f
                };
                return m.addEventListener("scroll", u), () => m.removeEventListener("scroll", u)
            }
        }, [n.viewport, s, d, a]), e.jsx(I, {
            present: t || c !== "hidden",
            children: e.jsx(X, {
                "data-state": c === "hidden" ? "hidden" : "visible",
                ...i,
                ref: o,
                onPointerEnter: j(r.onPointerEnter, () => d("POINTER_ENTER")),
                onPointerLeave: j(r.onPointerLeave, () => d("POINTER_LEAVE"))
            })
        })
    }),
    Q = l.forwardRef((r, o) => {
        const t = b(v, r.__scopeScrollArea),
            {
                forceMount: i,
                ...n
            } = r,
            [s, a] = l.useState(!1),
            c = r.orientation === "horizontal",
            d = M(() => {
                if (t.viewport) {
                    const m = t.viewport.offsetWidth < t.viewport.scrollWidth,
                        h = t.viewport.offsetHeight < t.viewport.scrollHeight;
                    a(c ? m : h)
                }
            }, 10);
        return P(t.viewport, d), P(t.content, d), e.jsx(I, {
            present: i || s,
            children: e.jsx(X, {
                "data-state": s ? "visible" : "hidden",
                ...n,
                ref: o
            })
        })
    }),
    X = l.forwardRef((r, o) => {
        const {
            orientation: t = "vertical",
            ...i
        } = r, n = b(v, r.__scopeScrollArea), s = l.useRef(null), a = l.useRef(0), [c, d] = l.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
                size: 0,
                paddingStart: 0,
                paddingEnd: 0
            }
        }), m = oe(c.viewport, c.content), h = { ...i,
            sizes: c,
            onSizesChange: d,
            hasThumb: m > 0 && m < 1,
            onThumbChange: u => s.current = u,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: u => a.current = u
        };

        function p(u, f) {
            return Te(u, a.current, c, f)
        }
        return t === "horizontal" ? e.jsx(Se, { ...h,
            ref: o,
            onThumbPositionChange: () => {
                if (n.viewport && s.current) {
                    const u = n.viewport.scrollLeft,
                        f = F(u, c, n.dir);
                    s.current.style.transform = `translate3d(${f}px, 0, 0)`
                }
            },
            onWheelScroll: u => {
                n.viewport && (n.viewport.scrollLeft = u)
            },
            onDragScroll: u => {
                n.viewport && (n.viewport.scrollLeft = p(u, n.dir))
            }
        }) : t === "vertical" ? e.jsx(je, { ...h,
            ref: o,
            onThumbPositionChange: () => {
                if (n.viewport && s.current) {
                    const u = n.viewport.scrollTop,
                        f = F(u, c);
                    s.current.style.transform = `translate3d(0, ${f}px, 0)`
                }
            },
            onWheelScroll: u => {
                n.viewport && (n.viewport.scrollTop = u)
            },
            onDragScroll: u => {
                n.viewport && (n.viewport.scrollTop = p(u))
            }
        }) : null
    }),
    Se = l.forwardRef((r, o) => {
        const {
            sizes: t,
            onSizesChange: i,
            ...n
        } = r, s = b(v, r.__scopeScrollArea), [a, c] = l.useState(), d = l.useRef(null), m = R(o, d, s.onScrollbarXChange);
        return l.useEffect(() => {
            d.current && c(getComputedStyle(d.current))
        }, [d]), e.jsx(ee, {
            "data-orientation": "horizontal",
            ...n,
            ref: m,
            sizes: t,
            style: {
                bottom: 0,
                left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
                right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
                "--radix-scroll-area-thumb-width": Y(t) + "px",
                ...r.style
            },
            onThumbPointerDown: h => r.onThumbPointerDown(h.x),
            onDragScroll: h => r.onDragScroll(h.x),
            onWheelScroll: (h, p) => {
                if (s.viewport) {
                    const u = s.viewport.scrollLeft + h.deltaX;
                    r.onWheelScroll(u), ie(u, p) && h.preventDefault()
                }
            },
            onResize: () => {
                d.current && s.viewport && a && i({
                    content: s.viewport.scrollWidth,
                    viewport: s.viewport.offsetWidth,
                    scrollbar: {
                        size: d.current.clientWidth,
                        paddingStart: O(a.paddingLeft),
                        paddingEnd: O(a.paddingRight)
                    }
                })
            }
        })
    }),
    je = l.forwardRef((r, o) => {
        const {
            sizes: t,
            onSizesChange: i,
            ...n
        } = r, s = b(v, r.__scopeScrollArea), [a, c] = l.useState(), d = l.useRef(null), m = R(o, d, s.onScrollbarYChange);
        return l.useEffect(() => {
            d.current && c(getComputedStyle(d.current))
        }, [d]), e.jsx(ee, {
            "data-orientation": "vertical",
            ...n,
            ref: m,
            sizes: t,
            style: {
                top: 0,
                right: s.dir === "ltr" ? 0 : void 0,
                left: s.dir === "rtl" ? 0 : void 0,
                bottom: "var(--radix-scroll-area-corner-height)",
                "--radix-scroll-area-thumb-height": Y(t) + "px",
                ...r.style
            },
            onThumbPointerDown: h => r.onThumbPointerDown(h.y),
            onDragScroll: h => r.onDragScroll(h.y),
            onWheelScroll: (h, p) => {
                if (s.viewport) {
                    const u = s.viewport.scrollTop + h.deltaY;
                    r.onWheelScroll(u), ie(u, p) && h.preventDefault()
                }
            },
            onResize: () => {
                d.current && s.viewport && a && i({
                    content: s.viewport.scrollHeight,
                    viewport: s.viewport.offsetHeight,
                    scrollbar: {
                        size: d.current.clientHeight,
                        paddingStart: O(a.paddingTop),
                        paddingEnd: O(a.paddingBottom)
                    }
                })
            }
        })
    }),
    [Ce, Z] = $(v),
    ee = l.forwardRef((r, o) => {
        const {
            __scopeScrollArea: t,
            sizes: i,
            hasThumb: n,
            onThumbChange: s,
            onThumbPointerUp: a,
            onThumbPointerDown: c,
            onThumbPositionChange: d,
            onDragScroll: m,
            onWheelScroll: h,
            onResize: p,
            ...u
        } = r, f = b(v, t), [g, T] = l.useState(null), z = R(o, x => T(x)), w = l.useRef(null), L = l.useRef(""), k = f.viewport, _ = i.content - i.viewport, D = S(h), E = S(d), W = M(p, 10);

        function N(x) {
            if (w.current) {
                const y = x.clientX - w.current.left,
                    C = x.clientY - w.current.top;
                m({
                    x: y,
                    y: C
                })
            }
        }
        return l.useEffect(() => {
            const x = y => {
                const C = y.target;
                (g == null ? void 0 : g.contains(C)) && D(y, _)
            };
            return document.addEventListener("wheel", x, {
                passive: !1
            }), () => document.removeEventListener("wheel", x, {
                passive: !1
            })
        }, [k, g, _, D]), l.useEffect(E, [i, E]), P(g, W), P(f.content, W), e.jsx(Ce, {
            scope: t,
            scrollbar: g,
            hasThumb: n,
            onThumbChange: S(s),
            onThumbPointerUp: S(a),
            onThumbPositionChange: E,
            onThumbPointerDown: S(c),
            children: e.jsx(A.div, { ...u,
                ref: z,
                style: {
                    position: "absolute",
                    ...u.style
                },
                onPointerDown: j(r.onPointerDown, x => {
                    x.button === 0 && (x.target.setPointerCapture(x.pointerId), w.current = g.getBoundingClientRect(), L.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", f.viewport && (f.viewport.style.scrollBehavior = "auto"), N(x))
                }),
                onPointerMove: j(r.onPointerMove, N),
                onPointerUp: j(r.onPointerUp, x => {
                    const y = x.target;
                    y.hasPointerCapture(x.pointerId) && y.releasePointerCapture(x.pointerId), document.body.style.webkitUserSelect = L.current, f.viewport && (f.viewport.style.scrollBehavior = ""), w.current = null
                })
            })
        })
    }),
    H = "ScrollAreaThumb",
    re = l.forwardRef((r, o) => {
        const {
            forceMount: t,
            ...i
        } = r, n = Z(H, r.__scopeScrollArea);
        return e.jsx(I, {
            present: t || n.hasThumb,
            children: e.jsx(Pe, {
                ref: o,
                ...i
            })
        })
    }),
    Pe = l.forwardRef((r, o) => {
        const {
            __scopeScrollArea: t,
            style: i,
            ...n
        } = r, s = b(H, t), a = Z(H, t), {
            onThumbPositionChange: c
        } = a, d = R(o, p => a.onThumbChange(p)), m = l.useRef(void 0), h = M(() => {
            m.current && (m.current(), m.current = void 0)
        }, 100);
        return l.useEffect(() => {
            const p = s.viewport;
            if (p) {
                const u = () => {
                    if (h(), !m.current) {
                        const f = Ee(p, c);
                        m.current = f, c()
                    }
                };
                return c(), p.addEventListener("scroll", u), () => p.removeEventListener("scroll", u)
            }
        }, [s.viewport, h, c]), e.jsx(A.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...n,
            ref: d,
            style: {
                width: "var(--radix-scroll-area-thumb-width)",
                height: "var(--radix-scroll-area-thumb-height)",
                ...i
            },
            onPointerDownCapture: j(r.onPointerDownCapture, p => {
                const f = p.target.getBoundingClientRect(),
                    g = p.clientX - f.left,
                    T = p.clientY - f.top;
                a.onThumbPointerDown({
                    x: g,
                    y: T
                })
            }),
            onPointerUp: j(r.onPointerUp, a.onThumbPointerUp)
        })
    });
re.displayName = H;
var B = "ScrollAreaCorner",
    te = l.forwardRef((r, o) => {
        const t = b(B, r.__scopeScrollArea),
            i = !!(t.scrollbarX && t.scrollbarY);
        return t.type !== "scroll" && i ? e.jsx(Re, { ...r,
            ref: o
        }) : null
    });
te.displayName = B;
var Re = l.forwardRef((r, o) => {
    const {
        __scopeScrollArea: t,
        ...i
    } = r, n = b(B, t), [s, a] = l.useState(0), [c, d] = l.useState(0), m = !!(s && c);
    return P(n.scrollbarX, () => {
        var p;
        const h = ((p = n.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
        n.onCornerHeightChange(h), d(h)
    }), P(n.scrollbarY, () => {
        var p;
        const h = ((p = n.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
        n.onCornerWidthChange(h), a(h)
    }), m ? e.jsx(A.div, { ...i,
        ref: o,
        style: {
            width: s,
            height: c,
            position: "absolute",
            right: n.dir === "ltr" ? 0 : void 0,
            left: n.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...r.style
        }
    }) : null
});

function O(r) {
    return r ? parseInt(r, 10) : 0
}

function oe(r, o) {
    const t = r / o;
    return isNaN(t) ? 0 : t
}

function Y(r) {
    const o = oe(r.viewport, r.content),
        t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
        i = (r.scrollbar.size - t) * o;
    return Math.max(i, 18)
}

function Te(r, o, t, i = "ltr") {
    const n = Y(t),
        s = n / 2,
        a = o || s,
        c = n - a,
        d = t.scrollbar.paddingStart + a,
        m = t.scrollbar.size - t.scrollbar.paddingEnd - c,
        h = t.content - t.viewport,
        p = i === "ltr" ? [0, h] : [h * -1, 0];
    return ne([d, m], p)(r)
}

function F(r, o, t = "ltr") {
    const i = Y(o),
        n = o.scrollbar.paddingStart + o.scrollbar.paddingEnd,
        s = o.scrollbar.size - n,
        a = o.content - o.viewport,
        c = s - i,
        d = t === "ltr" ? [0, a] : [a * -1, 0],
        m = ge(r, d);
    return ne([0, a], [0, c])(m)
}

function ne(r, o) {
    return t => {
        if (r[0] === r[1] || o[0] === o[1]) return o[0];
        const i = (o[1] - o[0]) / (r[1] - r[0]);
        return o[0] + i * (t - r[0])
    }
}

function ie(r, o) {
    return r > 0 && r < o
}
var Ee = (r, o = () => {}) => {
    let t = {
            left: r.scrollLeft,
            top: r.scrollTop
        },
        i = 0;
    return function n() {
        const s = {
                left: r.scrollLeft,
                top: r.scrollTop
            },
            a = t.left !== s.left,
            c = t.top !== s.top;
        (a || c) && o(), t = s, i = window.requestAnimationFrame(n)
    }(), () => window.cancelAnimationFrame(i)
};

function M(r, o) {
    const t = S(r),
        i = l.useRef(0);
    return l.useEffect(() => () => window.clearTimeout(i.current), []), l.useCallback(() => {
        window.clearTimeout(i.current), i.current = window.setTimeout(t, o)
    }, [t, o])
}

function P(r, o) {
    const t = S(o);
    xe(() => {
        let i = 0;
        if (r) {
            const n = new ResizeObserver(() => {
                cancelAnimationFrame(i), i = window.requestAnimationFrame(t)
            });
            return n.observe(r), () => {
                window.cancelAnimationFrame(i), n.unobserve(r)
            }
        }
    }, [r, t])
}
var se = G,
    Ae = K,
    Le = te;
const le = l.forwardRef(({
    className: r,
    children: o,
    ...t
}, i) => e.jsxs(se, {
    ref: i,
    className: V("relative overflow-hidden", r),
    ...t,
    children: [e.jsx(Ae, {
        className: "h-full w-full rounded-[inherit]",
        children: o
    }), e.jsx(ae, {}), e.jsx(Le, {})]
}));
le.displayName = se.displayName;
const ae = l.forwardRef(({
    className: r,
    orientation: o = "vertical",
    ...t
}, i) => e.jsx(U, {
    ref: i,
    orientation: o,
    className: V("flex touch-none select-none transition-colors", o === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", o === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", r),
    ...t,
    children: e.jsx(re, {
        className: "relative flex-1 rounded-full bg-border"
    })
}));
ae.displayName = U.displayName;

function Ie({
    children: r
}) {
    return e.jsxs(ce, {
        children: [e.jsx(de, {
            asChild: !0,
            children: r
        }), e.jsxs(he, {
            className: "max-w-2xl max-h-[85vh] p-0",
            children: [e.jsx(ue, {
                className: "px-6 pt-6 pb-2",
                children: e.jsx(me, {
                    className: "text-xl font-bold",
                    children: "Privacy Policy"
                })
            }), e.jsx(le, {
                className: "px-6 pb-6 h-[70vh]",
                children: e.jsxs("div", {
                    className: "prose prose-sm max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:text-base [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-foreground [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-1 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:text-sm [&_ul]:mb-3 [&_ul]:space-y-1 [&_li]:leading-relaxed",
                    children: [e.jsx("p", {
                        className: "text-xs text-muted-foreground mb-4",
                        children: "Last Updated: October 2, 2025"
                    }), e.jsx("p", {
                        children: 'Welcome to File My Claim ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or interact with file-my-claim.com, including the claim estimator tool located at file-my-claim.com/estimator (collectively referred to as the "Site").'
                    }), e.jsx("p", {
                        children: "The Site is owned and operated by Overnight Holdings LLC, a Wyoming limited liability company."
                    }), e.jsx("p", {
                        children: "If you do not agree with the terms of this Privacy Policy, please do not access or use the Site."
                    }), e.jsx("h2", {
                        children: "Information We Collect"
                    }), e.jsx("p", {
                        children: "When you use the Site or submit information through a form or estimator, we may collect personal information including:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "Name"
                        }), e.jsx("li", {
                            children: "Phone number"
                        }), e.jsx("li", {
                            children: "Email address"
                        }), e.jsx("li", {
                            children: "Mailing address"
                        }), e.jsx("li", {
                            children: "Accident or incident details"
                        }), e.jsx("li", {
                            children: "Information voluntarily provided about your legal matter"
                        })]
                    }), e.jsx("p", {
                        children: "We collect this information only when you voluntarily provide it."
                    }), e.jsx("h2", {
                        children: "Automatically Collected Information"
                    }), e.jsx("p", {
                        children: "When you visit the Site, certain information may automatically be collected, including:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "IP address"
                        }), e.jsx("li", {
                            children: "Device type"
                        }), e.jsx("li", {
                            children: "Browser type and version"
                        }), e.jsx("li", {
                            children: "Pages visited"
                        }), e.jsx("li", {
                            children: "Date and time of visits"
                        }), e.jsx("li", {
                            children: "Time spent on pages"
                        }), e.jsx("li", {
                            children: "Referral sources"
                        })]
                    }), e.jsx("p", {
                        children: "This information helps us understand how visitors interact with the Site and allows us to improve performance and user experience."
                    }), e.jsx("h2", {
                        children: "How We Use Your Information"
                    }), e.jsx("p", {
                        children: "We may use the information we collect to:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "Contact you regarding your inquiry"
                        }), e.jsx("li", {
                            children: "Provide claim estimator results or related information"
                        }), e.jsx("li", {
                            children: "Connect you with a licensed attorney who may assist with your case"
                        }), e.jsx("li", {
                            children: "Respond to customer service requests"
                        }), e.jsx("li", {
                            children: "Improve the functionality of our Site"
                        }), e.jsx("li", {
                            children: "Maintain security and prevent fraud"
                        }), e.jsx("li", {
                            children: "Comply with legal obligations"
                        })]
                    }), e.jsx("p", {
                        children: "By submitting your information, you consent to being contacted by phone, email, or text message regarding your inquiry."
                    }), e.jsx("h2", {
                        children: "SMS / Text Messaging Program"
                    }), e.jsx("p", {
                        children: "If you provide your mobile phone number through our Site, you agree to receive text messages regarding your inquiry."
                    }), e.jsx("p", {
                        children: "Messages may include:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "Case follow-ups"
                        }), e.jsx("li", {
                            children: "Claim status updates"
                        }), e.jsx("li", {
                            children: "Appointment reminders"
                        }), e.jsx("li", {
                            children: "Notifications regarding potential legal representation"
                        }), e.jsx("li", {
                            children: "Customer service communications"
                        })]
                    }), e.jsx("p", {
                        children: "Message frequency may vary."
                    }), e.jsx("p", {
                        children: "Message and data rates may apply."
                    }), e.jsxs("p", {
                        children: ["You may opt out at any time by replying ", e.jsx("strong", {
                            children: "STOP"
                        }), " to any message you receive."]
                    }), e.jsxs("p", {
                        children: ["For assistance, reply ", e.jsx("strong", {
                            children: "HELP"
                        }), " or contact us using the contact information listed below."]
                    }), e.jsx("p", {
                        children: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes."
                    }), e.jsx("p", {
                        children: "Carriers are not liable for delayed or undelivered messages."
                    }), e.jsx("p", {
                        children: "You must be 18 years of age or older to participate in our SMS program."
                    }), e.jsx("h2", {
                        children: "Consent to Contact"
                    }), e.jsx("p", {
                        children: "By submitting your information through this website, you agree that Overnight Holdings LLC, its partners, and participating law firms may contact you regarding your request."
                    }), e.jsx("p", {
                        children: "This contact may include:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "Phone calls"
                        }), e.jsx("li", {
                            children: "Emails"
                        }), e.jsx("li", {
                            children: "SMS text messages"
                        }), e.jsx("li", {
                            children: "Automated dialing technology"
                        }), e.jsx("li", {
                            children: "Artificial or prerecorded voice messages"
                        })]
                    }), e.jsx("p", {
                        children: "These communications may occur even if your phone number is listed on a federal or state Do Not Call registry."
                    }), e.jsx("p", {
                        children: "Consent to contact is not required as a condition of purchasing any goods or services."
                    }), e.jsx("h2", {
                        children: "Sharing Your Information"
                    }), e.jsx("p", {
                        children: "We do not sell or rent your personal information."
                    }), e.jsx("p", {
                        children: "Your information may be shared only with:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "Licensed attorneys or law firms who may contact you regarding your case"
                        }), e.jsx("li", {
                            children: "Service providers that assist in operating the Site"
                        }), e.jsx("li", {
                            children: "Communication providers facilitating contact with you"
                        }), e.jsx("li", {
                            children: "Government authorities when required by law"
                        }), e.jsx("li", {
                            children: "Successor entities in the event of a merger, acquisition, or sale of assets"
                        })]
                    }), e.jsx("p", {
                        children: "All partners and service providers are required to maintain confidentiality and use your information only for authorized purposes."
                    }), e.jsx("h2", {
                        children: "Cookies and Tracking Technologies"
                    }), e.jsx("p", {
                        children: "The Site may use cookies and similar technologies to improve user experience."
                    }), e.jsx("p", {
                        children: "Cookies help us:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "Recognize returning visitors"
                        }), e.jsx("li", {
                            children: "Analyze site traffic"
                        }), e.jsx("li", {
                            children: "Improve website functionality"
                        })]
                    }), e.jsx("p", {
                        children: "You may disable cookies through your browser settings. However, some features of the Site may not function properly without them."
                    }), e.jsx("h2", {
                        children: "Third-Party Services"
                    }), e.jsx("p", {
                        children: "We may use third-party service providers to assist with:"
                    }), e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [e.jsx("li", {
                            children: "Website hosting"
                        }), e.jsx("li", {
                            children: "Analytics"
                        }), e.jsx("li", {
                            children: "Customer communications"
                        }), e.jsx("li", {
                            children: "Marketing and advertising services"
                        }), e.jsx("li", {
                            children: "Infrastructure and security"
                        })]
                    }), e.jsx("p", {
                        children: "These third parties may have access to personal information only to perform specific tasks on our behalf and are prohibited from using it for other purposes."
                    }), e.jsx("h2", {
                        children: "Data Security"
                    }), e.jsx("p", {
                        children: "We implement commercially reasonable technical and organizational security measures designed to protect personal information."
                    }), e.jsx("p", {
                        children: "However, no internet transmission or electronic storage system is completely secure. While we strive to protect your information, we cannot guarantee absolute security."
                    }), e.jsx("h2", {
                        children: "Your Privacy Rights (CCPA / GDPR)"
                    }), e.jsx("p", {
                        children: "Depending on your location, you may have certain rights regarding your personal information. These rights may include:"
                    }), e.jsx("h3", {
                        children: "Right to Access"
                    }), e.jsx("p", {
                        children: "You may request a copy of the personal data we hold about you."
                    }), e.jsx("h3", {
                        children: "Right to Correction"
                    }), e.jsx("p", {
                        children: "You may request corrections to inaccurate information."
                    }), e.jsx("h3", {
                        children: "Right to Deletion"
                    }), e.jsx("p", {
                        children: "You may request deletion of your personal information, subject to legal obligations."
                    }), e.jsx("h3", {
                        children: "Right to Restrict Processing"
                    }), e.jsx("p", {
                        children: "You may request limitations on how your data is processed."
                    }), e.jsx("h3", {
                        children: "Right to Data Portability"
                    }), e.jsx("p", {
                        children: "You may request your data in a portable format."
                    }), e.jsx("h3", {
                        children: "Right to Opt-Out of Sale"
                    }), e.jsx("p", {
                        children: "We do not sell personal information."
                    }), e.jsx("h3", {
                        children: "Right to Withdraw Consent"
                    }), e.jsx("p", {
                        children: "If processing is based on consent, you may withdraw consent at any time."
                    }), e.jsx("h2", {
                        children: "Exercising Your Rights"
                    }), e.jsx("p", {
                        children: "To exercise any privacy rights, contact us at:"
                    }), e.jsxs("p", {
                        children: [e.jsx("strong", {
                            children: "Overnight Holdings LLC"
                        }), e.jsx("br", {}), "5830 E 2nd St, Ste 7000", e.jsx("br", {}), "Casper, WY 82607", e.jsx("br", {}), "United States"]
                    }), e.jsx("p", {
                        children: "We may request identity verification before fulfilling certain requests."
                    }), e.jsx("h2", {
                        children: "Links to Third-Party Websites"
                    }), e.jsx("p", {
                        children: "Our Site may contain links to third-party websites. We are not responsible for the privacy practices, policies, or content of external websites. We encourage you to review the privacy policies of any third-party websites you visit."
                    }), e.jsx("h2", {
                        children: "Children's Privacy"
                    }), e.jsx("p", {
                        children: "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information through the Site, please contact us so we can remove the information."
                    }), e.jsx("h2", {
                        children: "Policy Updates"
                    }), e.jsx("p", {
                        children: "We may update this Privacy Policy periodically. Any changes will be posted on this page and will become effective immediately upon posting. We encourage you to review this page regularly to remain informed about how we protect your information."
                    }), e.jsx("h2", {
                        children: "Business Entity Disclosure"
                    }), e.jsx("p", {
                        children: "This Site is owned and operated by:"
                    }), e.jsxs("p", {
                        children: [e.jsx("strong", {
                            children: "Overnight Holdings LLC"
                        }), e.jsx("br", {}), "A Wyoming limited liability company."]
                    }), e.jsx("p", {
                        children: 'All references to "we," "our," or "us" refer to Overnight Holdings LLC operating the File My Claim website and claim estimator service.'
                    }), e.jsx("h2", {
                        children: "Important Disclaimer"
                    }), e.jsx("p", {
                        children: e.jsx("strong", {
                            children: "We are not a law firm."
                        })
                    }), e.jsx("p", {
                        children: "Overnight Holdings LLC does not provide legal advice and does not review, evaluate, or pre-screen legal claims. Our service connects individuals with participating attorneys who may review submitted information and determine whether they can assist. Legal representation is established only after a written agreement is signed between you and a licensed attorney or law firm."
                    }), e.jsx("h2", {
                        children: "Attorney Advertising Disclosure"
                    }), e.jsx("p", {
                        children: "This website may be considered attorney advertising. The information provided on this website is for informational purposes only and does not constitute legal advice. Using this site does not create an attorney-client relationship. Attorneys who contact you may participate in paid marketing programs. Past results do not guarantee future outcomes, and no outcome is guaranteed. The choice of a lawyer is an important decision and should not be based solely upon advertisements."
                    }), e.jsx("h2", {
                        children: "Contact Information"
                    }), e.jsx("p", {
                        children: "If you have any questions about this Privacy Policy or our practices, please contact us at:"
                    }), e.jsxs("p", {
                        children: [e.jsx("strong", {
                            children: "Overnight Holdings LLC"
                        }), e.jsx("br", {}), "5830 E 2nd St, Ste 7000", e.jsx("br", {}), "Casper, WY 82607", e.jsx("br", {}), "United States"]
                    })]
                })
            })]
        })]
    })
}
export {
    Ie as T
};