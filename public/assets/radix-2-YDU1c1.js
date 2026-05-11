import {
    r as c,
    j as y,
    R as se,
    a as xn
} from "./framer-C_Gpxhjm.js";
import {
    r as bt,
    R as Qr
} from "./recharts-C2k-4Gok.js";

function F(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Gt(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function En(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Gt(o, t);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const i = r[o];
                typeof i == "function" ? i() : Gt(e[o], null)
            }
        }
    }
}

function W(...e) {
    return c.useCallback(En(...e), e)
}

function Jr(e, t) {
    const n = c.createContext(t),
        r = i => {
            const {
                children: s,
                ...a
            } = i, u = c.useMemo(() => a, Object.values(a));
            return y.jsx(n.Provider, {
                value: u,
                children: s
            })
        };
    r.displayName = e + "Provider";

    function o(i) {
        const s = c.useContext(n);
        if (s) return s;
        if (t !== void 0) return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return [r, o]
}

function Se(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = c.createContext(s),
            u = n.length;
        n = [...n, s];
        const l = p => {
            var g;
            const {
                scope: h,
                children: v,
                ...x
            } = p, f = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[u]) || a, m = c.useMemo(() => x, Object.values(x));
            return y.jsx(f.Provider, {
                value: m,
                children: v
            })
        };
        l.displayName = i + "Provider";

        function d(p, h) {
            var f;
            const v = ((f = h == null ? void 0 : h[e]) == null ? void 0 : f[u]) || a,
                x = c.useContext(v);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``)
        }
        return [l, d]
    }
    const o = () => {
        const i = n.map(s => c.createContext(s));
        return function(a) {
            const u = (a == null ? void 0 : a[e]) || i;
            return c.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: u
                }
            }), [a, u])
        }
    };
    return o.scopeName = e, [r, eo(o, ...t)]
}

function eo(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: u,
                scopeName: l
            }) => {
                const p = u(i)[`__scope${l}`];
                return { ...a,
                    ...p
                }
            }, {});
            return c.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function ge(e) {
    const t = to(e),
        n = c.forwardRef((r, o) => {
            const {
                children: i,
                ...s
            } = r, a = c.Children.toArray(i), u = a.find(no);
            if (u) {
                const l = u.props.children,
                    d = a.map(p => p === u ? c.Children.count(l) > 1 ? c.Children.only(null) : c.isValidElement(l) ? l.props.children : null : p);
                return y.jsx(t, { ...s,
                    ref: o,
                    children: c.isValidElement(l) ? c.cloneElement(l, void 0, d) : null
                })
            }
            return y.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var Aa = ge("Slot");

function to(e) {
    const t = c.forwardRef((n, r) => {
        const {
            children: o,
            ...i
        } = n;
        if (c.isValidElement(o)) {
            const s = oo(o),
                a = ro(i, o.props);
            return o.type !== c.Fragment && (a.ref = r ? En(r, s) : s), c.cloneElement(o, a)
        }
        return c.Children.count(o) > 1 ? c.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var bn = Symbol("radix.slottable");

function Ta(e) {
    const t = ({
        children: n
    }) => y.jsx(y.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = bn, t
}

function no(e) {
    return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bn
}

function ro(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const u = i(...a);
            return o(...a), u
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function oo(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function io(e) {
    const t = e + "CollectionProvider",
        [n, r] = Se(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = f => {
            const {
                scope: m,
                children: g
            } = f, w = se.useRef(null), E = se.useRef(new Map).current;
            return y.jsx(o, {
                scope: m,
                itemMap: E,
                collectionRef: w,
                children: g
            })
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        u = ge(a),
        l = se.forwardRef((f, m) => {
            const {
                scope: g,
                children: w
            } = f, E = i(a, g), b = W(m, E.collectionRef);
            return y.jsx(u, {
                ref: b,
                children: w
            })
        });
    l.displayName = a;
    const d = e + "CollectionItemSlot",
        p = "data-radix-collection-item",
        h = ge(d),
        v = se.forwardRef((f, m) => {
            const {
                scope: g,
                children: w,
                ...E
            } = f, b = se.useRef(null), C = W(m, b), S = i(d, g);
            return se.useEffect(() => (S.itemMap.set(b, {
                ref: b,
                ...E
            }), () => void S.itemMap.delete(b))), y.jsx(h, {
                [p]: "",
                ref: C,
                children: w
            })
        });
    v.displayName = d;

    function x(f) {
        const m = i(e + "CollectionConsumer", f);
        return se.useCallback(() => {
            const w = m.collectionRef.current;
            if (!w) return [];
            const E = Array.from(w.querySelectorAll(`[${p}]`));
            return Array.from(m.itemMap.values()).sort((S, P) => E.indexOf(S.ref.current) - E.indexOf(P.ref.current))
        }, [m.collectionRef, m.itemMap])
    }
    return [{
        Provider: s,
        Slot: l,
        ItemSlot: v
    }, x, r]
}
var so = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    $ = so.reduce((e, t) => {
        const n = ge(`Primitive.${t}`),
            r = c.forwardRef((o, i) => {
                const {
                    asChild: s,
                    ...a
                } = o, u = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(u, { ...a,
                    ref: i
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function Cn(e, t) {
    e && bt.flushSync(() => e.dispatchEvent(t))
}

function q(e) {
    const t = c.useRef(e);
    return c.useEffect(() => {
        t.current = e
    }), c.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function ao(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = q(e);
    c.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var co = "DismissableLayer",
    mt = "dismissableLayer.update",
    lo = "dismissableLayer.pointerDownOutside",
    uo = "dismissableLayer.focusOutside",
    qt, Pn = c.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Xe = c.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...u
        } = e, l = c.useContext(Pn), [d, p] = c.useState(null), h = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, v] = c.useState({}), x = W(t, P => p(P)), f = Array.from(l.layers), [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), g = f.indexOf(m), w = d ? f.indexOf(d) : -1, E = l.layersWithOutsidePointerEventsDisabled.size > 0, b = w >= g, C = po(P => {
            const T = P.target,
                N = [...l.branches].some(D => D.contains(T));
            !b || N || (o == null || o(P), s == null || s(P), P.defaultPrevented || a == null || a())
        }, h), S = mo(P => {
            const T = P.target;
            [...l.branches].some(D => D.contains(T)) || (i == null || i(P), s == null || s(P), P.defaultPrevented || a == null || a())
        }, h);
        return ao(P => {
            w === l.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()))
        }, h), c.useEffect(() => {
            if (d) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (qt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Zt(), () => {
                n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = qt)
            }
        }, [d, h, n, l]), c.useEffect(() => () => {
            d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Zt())
        }, [d, l]), c.useEffect(() => {
            const P = () => v({});
            return document.addEventListener(mt, P), () => document.removeEventListener(mt, P)
        }, []), y.jsx($.div, { ...u,
            ref: x,
            style: {
                pointerEvents: E ? b ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: F(e.onFocusCapture, S.onFocusCapture),
            onBlurCapture: F(e.onBlurCapture, S.onBlurCapture),
            onPointerDownCapture: F(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
Xe.displayName = co;
var fo = "DismissableLayerBranch",
    Rn = c.forwardRef((e, t) => {
        const n = c.useContext(Pn),
            r = c.useRef(null),
            o = W(t, r);
        return c.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), y.jsx($.div, { ...e,
            ref: o
        })
    });
Rn.displayName = fo;

function po(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = q(e),
        r = c.useRef(!1),
        o = c.useRef(() => {});
    return c.useEffect(() => {
        const i = a => {
                if (a.target && !r.current) {
                    let u = function() {
                        Sn(lo, n, l, {
                            discrete: !0
                        })
                    };
                    const l = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
                        once: !0
                    })) : u()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function mo(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = q(e),
        r = c.useRef(!1);
    return c.useEffect(() => {
        const o = i => {
            i.target && !r.current && Sn(uo, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Zt() {
    const e = new CustomEvent(mt);
    document.dispatchEvent(e)
}

function Sn(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Cn(o, i) : o.dispatchEvent(i)
}
var vo = Xe,
    ho = Rn,
    J = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
    go = "Portal",
    Ge = c.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, i] = c.useState(!1);
        J(() => i(!0), []);
        const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? Qr.createPortal(y.jsx($.div, { ...r,
            ref: t
        }), s) : null
    });
Ge.displayName = go;

function wo(e, t) {
    return c.useReducer((n, r) => t[n][r] ? ? n, e)
}
var le = e => {
    const {
        present: t,
        children: n
    } = e, r = yo(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : c.Children.only(n), i = W(r.ref, xo(o));
    return typeof n == "function" || r.isPresent ? c.cloneElement(o, {
        ref: i
    }) : null
};
le.displayName = "Presence";

function yo(e) {
    const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [a, u] = wo(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return c.useEffect(() => {
        const l = Me(r.current);
        i.current = a === "mounted" ? l : "none"
    }, [a]), J(() => {
        const l = r.current,
            d = o.current;
        if (d !== e) {
            const h = i.current,
                v = Me(l);
            e ? u("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(d && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, u]), J(() => {
        if (t) {
            let l;
            const d = t.ownerDocument.defaultView ? ? window,
                p = v => {
                    const f = Me(r.current).includes(v.animationName);
                    if (v.target === t && f && (u("ANIMATION_END"), !o.current)) {
                        const m = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m)
                        })
                    }
                },
                h = v => {
                    v.target === t && (i.current = Me(r.current))
                };
            return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
                d.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
            }
        } else u("ANIMATION_END")
    }, [t, u]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: c.useCallback(l => {
            r.current = l ? getComputedStyle(l) : null, n(l)
        }, [])
    }
}

function Me(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function xo(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Eo = xn[" useInsertionEffect ".trim().toString()] || J;

function Ct({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, i, s] = bo({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, u = a ? e : o; {
        const d = c.useRef(e !== void 0);
        c.useEffect(() => {
            const p = d.current;
            p !== a && console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = a
        }, [a, r])
    }
    const l = c.useCallback(d => {
        var p;
        if (a) {
            const h = Co(d) ? d(e) : d;
            h !== e && ((p = s.current) == null || p.call(s, h))
        } else i(d)
    }, [a, e, i, s]);
    return [u, l]
}

function bo({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = c.useState(e), o = c.useRef(n), i = c.useRef(t);
    return Eo(() => {
        i.current = t
    }, [t]), c.useEffect(() => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n)
    }, [n, o]), [n, r, i]
}

function Co(e) {
    return typeof e == "function"
}
var Po = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    Ro = "VisuallyHidden",
    qe = c.forwardRef((e, t) => y.jsx($.span, { ...e,
        ref: t,
        style: { ...Po,
            ...e.style
        }
    }));
qe.displayName = Ro;
var Oa = qe,
    Pt = "ToastProvider",
    [Rt, So, Ao] = io("Toast"),
    [An, Na] = Se("Toast", [Ao]),
    [To, Ze] = An(Pt),
    Tn = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [a, u] = c.useState(null), [l, d] = c.useState(0), p = c.useRef(!1), h = c.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Pt}\`. Expected non-empty \`string\`.`), y.jsx(Rt.Provider, {
            scope: t,
            children: y.jsx(To, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: l,
                viewport: a,
                onViewportChange: u,
                onToastAdd: c.useCallback(() => d(v => v + 1), []),
                onToastRemove: c.useCallback(() => d(v => v - 1), []),
                isFocusedToastEscapeKeyDownRef: p,
                isClosePausedRef: h,
                children: s
            })
        })
    };
Tn.displayName = Pt;
var On = "ToastViewport",
    Oo = ["F8"],
    vt = "toast.viewportPause",
    ht = "toast.viewportResume",
    Nn = c.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = Oo,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = Ze(On, n), a = So(n), u = c.useRef(null), l = c.useRef(null), d = c.useRef(null), p = c.useRef(null), h = W(t, p, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
        c.useEffect(() => {
            const m = g => {
                var E;
                r.length !== 0 && r.every(b => g[b] || g.code === b) && ((E = p.current) == null || E.focus())
            };
            return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m)
        }, [r]), c.useEffect(() => {
            const m = u.current,
                g = p.current;
            if (x && m && g) {
                const w = () => {
                        if (!s.isClosePausedRef.current) {
                            const S = new CustomEvent(vt);
                            g.dispatchEvent(S), s.isClosePausedRef.current = !0
                        }
                    },
                    E = () => {
                        if (s.isClosePausedRef.current) {
                            const S = new CustomEvent(ht);
                            g.dispatchEvent(S), s.isClosePausedRef.current = !1
                        }
                    },
                    b = S => {
                        !m.contains(S.relatedTarget) && E()
                    },
                    C = () => {
                        m.contains(document.activeElement) || E()
                    };
                return m.addEventListener("focusin", w), m.addEventListener("focusout", b), m.addEventListener("pointermove", w), m.addEventListener("pointerleave", C), window.addEventListener("blur", w), window.addEventListener("focus", E), () => {
                    m.removeEventListener("focusin", w), m.removeEventListener("focusout", b), m.removeEventListener("pointermove", w), m.removeEventListener("pointerleave", C), window.removeEventListener("blur", w), window.removeEventListener("focus", E)
                }
            }
        }, [x, s.isClosePausedRef]);
        const f = c.useCallback(({
            tabbingDirection: m
        }) => {
            const w = a().map(E => {
                const b = E.ref.current,
                    C = [b, ...Vo(b)];
                return m === "forwards" ? C : C.reverse()
            });
            return (m === "forwards" ? w.reverse() : w).flat()
        }, [a]);
        return c.useEffect(() => {
            const m = p.current;
            if (m) {
                const g = w => {
                    var C, S, P;
                    const E = w.altKey || w.ctrlKey || w.metaKey;
                    if (w.key === "Tab" && !E) {
                        const T = document.activeElement,
                            N = w.shiftKey;
                        if (w.target === m && N) {
                            (C = l.current) == null || C.focus();
                            return
                        }
                        const L = f({
                                tabbingDirection: N ? "backwards" : "forwards"
                            }),
                            I = L.findIndex(R => R === T);
                        ot(L.slice(I + 1)) ? w.preventDefault() : N ? (S = l.current) == null || S.focus() : (P = d.current) == null || P.focus()
                    }
                };
                return m.addEventListener("keydown", g), () => m.removeEventListener("keydown", g)
            }
        }, [a, f]), y.jsxs(ho, {
            ref: u,
            role: "region",
            "aria-label": o.replace("{hotkey}", v),
            tabIndex: -1,
            style: {
                pointerEvents: x ? void 0 : "none"
            },
            children: [x && y.jsx(gt, {
                ref: l,
                onFocusFromOutsideViewport: () => {
                    const m = f({
                        tabbingDirection: "forwards"
                    });
                    ot(m)
                }
            }), y.jsx(Rt.Slot, {
                scope: n,
                children: y.jsx($.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: h
                })
            }), x && y.jsx(gt, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    const m = f({
                        tabbingDirection: "backwards"
                    });
                    ot(m)
                }
            })]
        })
    });
Nn.displayName = On;
var Dn = "ToastFocusProxy",
    gt = c.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = Ze(Dn, n);
        return y.jsx(qe, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var l;
                const a = s.relatedTarget;
                !((l = i.viewport) != null && l.contains(a)) && r()
            }
        })
    });
gt.displayName = Dn;
var Ae = "Toast",
    No = "toast.swipeStart",
    Do = "toast.swipeMove",
    Mo = "toast.swipeCancel",
    _o = "toast.swipeEnd",
    Mn = c.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [a, u] = Ct({
            prop: r,
            defaultProp: o ? ? !0,
            onChange: i,
            caller: Ae
        });
        return y.jsx(le, {
            present: n || a,
            children: y.jsx(Fo, {
                open: a,
                ...s,
                ref: t,
                onClose: () => u(!1),
                onPause: q(e.onPause),
                onResume: q(e.onResume),
                onSwipeStart: F(e.onSwipeStart, l => {
                    l.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: F(e.onSwipeMove, l => {
                    const {
                        x: d,
                        y: p
                    } = l.detail.delta;
                    l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
                }),
                onSwipeCancel: F(e.onSwipeCancel, l => {
                    l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: F(e.onSwipeEnd, l => {
                    const {
                        x: d,
                        y: p
                    } = l.detail.delta;
                    l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), u(!1)
                })
            })
        })
    });
Mn.displayName = Ae;
var [Io, Lo] = An(Ae, {
    onClose() {}
}), Fo = c.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: u,
        onResume: l,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: h,
        onSwipeEnd: v,
        ...x
    } = e, f = Ze(Ae, n), [m, g] = c.useState(null), w = W(t, R => g(R)), E = c.useRef(null), b = c.useRef(null), C = o || f.duration, S = c.useRef(0), P = c.useRef(C), T = c.useRef(0), {
        onToastAdd: N,
        onToastRemove: D
    } = f, k = q(() => {
        var M;
        (m == null ? void 0 : m.contains(document.activeElement)) && ((M = f.viewport) == null || M.focus()), s()
    }), L = c.useCallback(R => {
        !R || R === 1 / 0 || (window.clearTimeout(T.current), S.current = new Date().getTime(), T.current = window.setTimeout(k, R))
    }, [k]);
    c.useEffect(() => {
        const R = f.viewport;
        if (R) {
            const M = () => {
                    L(P.current), l == null || l()
                },
                O = () => {
                    const _ = new Date().getTime() - S.current;
                    P.current = P.current - _, window.clearTimeout(T.current), u == null || u()
                };
            return R.addEventListener(vt, O), R.addEventListener(ht, M), () => {
                R.removeEventListener(vt, O), R.removeEventListener(ht, M)
            }
        }
    }, [f.viewport, C, u, l, L]), c.useEffect(() => {
        i && !f.isClosePausedRef.current && L(C)
    }, [i, C, f.isClosePausedRef, L]), c.useEffect(() => (N(), () => D()), [N, D]);
    const I = c.useMemo(() => m ? $n(m) : null, [m]);
    return f.viewport ? y.jsxs(y.Fragment, {
        children: [I && y.jsx(ko, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: I
        }), y.jsx(Io, {
            scope: n,
            onClose: k,
            children: bt.createPortal(y.jsx(Rt.ItemSlot, {
                scope: n,
                children: y.jsx(vo, {
                    asChild: !0,
                    onEscapeKeyDown: F(a, () => {
                        f.isFocusedToastEscapeKeyDownRef.current || k(), f.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: y.jsx($.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": f.swipeDirection,
                        ...x,
                        ref: w,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: F(e.onKeyDown, R => {
                            R.key === "Escape" && (a == null || a(R.nativeEvent), R.nativeEvent.defaultPrevented || (f.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                        }),
                        onPointerDown: F(e.onPointerDown, R => {
                            R.button === 0 && (E.current = {
                                x: R.clientX,
                                y: R.clientY
                            })
                        }),
                        onPointerMove: F(e.onPointerMove, R => {
                            if (!E.current) return;
                            const M = R.clientX - E.current.x,
                                O = R.clientY - E.current.y,
                                _ = !!b.current,
                                A = ["left", "right"].includes(f.swipeDirection),
                                j = ["left", "up"].includes(f.swipeDirection) ? Math.min : Math.max,
                                H = A ? j(0, M) : 0,
                                ue = A ? 0 : j(0, O),
                                be = R.pointerType === "touch" ? 10 : 2,
                                fe = {
                                    x: H,
                                    y: ue
                                },
                                Ne = {
                                    originalEvent: R,
                                    delta: fe
                                };
                            _ ? (b.current = fe, _e(Do, p, Ne, {
                                discrete: !1
                            })) : Qt(fe, f.swipeDirection, be) ? (b.current = fe, _e(No, d, Ne, {
                                discrete: !1
                            }), R.target.setPointerCapture(R.pointerId)) : (Math.abs(M) > be || Math.abs(O) > be) && (E.current = null)
                        }),
                        onPointerUp: F(e.onPointerUp, R => {
                            const M = b.current,
                                O = R.target;
                            if (O.hasPointerCapture(R.pointerId) && O.releasePointerCapture(R.pointerId), b.current = null, E.current = null, M) {
                                const _ = R.currentTarget,
                                    A = {
                                        originalEvent: R,
                                        delta: M
                                    };
                                Qt(M, f.swipeDirection, f.swipeThreshold) ? _e(_o, v, A, {
                                    discrete: !0
                                }) : _e(Mo, h, A, {
                                    discrete: !0
                                }), _.addEventListener("click", j => j.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), f.viewport)
        })]
    }) : null
}), ko = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = Ze(Ae, t), [i, s] = c.useState(!1), [a, u] = c.useState(!1);
    return Wo(() => s(!0)), c.useEffect(() => {
        const l = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(l)
    }, []), a ? null : y.jsx(Ge, {
        asChild: !0,
        children: y.jsx(qe, { ...r,
            children: i && y.jsxs(y.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, jo = "ToastTitle", _n = c.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return y.jsx($.div, { ...r,
        ref: t
    })
});
_n.displayName = jo;
var $o = "ToastDescription",
    In = c.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return y.jsx($.div, { ...r,
            ref: t
        })
    });
In.displayName = $o;
var Ln = "ToastAction",
    Fn = c.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? y.jsx(jn, {
            altText: n,
            asChild: !0,
            children: y.jsx(St, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ln}\`. Expected non-empty \`string\`.`), null)
    });
Fn.displayName = Ln;
var kn = "ToastClose",
    St = c.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = Lo(kn, n);
        return y.jsx(jn, {
            asChild: !0,
            children: y.jsx($.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: F(e.onClick, o.onClose)
            })
        })
    });
St.displayName = kn;
var jn = c.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return y.jsx($.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function $n(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Bo(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...$n(r))
        }
    }), t
}

function _e(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Cn(o, i) : o.dispatchEvent(i)
}
var Qt = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function Wo(e = () => {}) {
    const t = q(e);
    J(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function Bo(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Vo(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function ot(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var Da = Tn,
    Ma = Nn,
    _a = Mn,
    Ia = _n,
    La = In,
    Fa = Fn,
    ka = St,
    Ho = xn[" useId ".trim().toString()] || (() => {}),
    Uo = 0;

function $e(e) {
    const [t, n] = c.useState(Ho());
    return J(() => {
        e || n(r => r ? ? String(Uo++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
const zo = ["top", "right", "bottom", "left"],
    re = Math.min,
    B = Math.max,
    He = Math.round,
    Ie = Math.floor,
    G = e => ({
        x: e,
        y: e
    }),
    Ko = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Yo = {
        start: "end",
        end: "start"
    };

function wt(e, t, n) {
    return B(e, re(t, n))
}

function ee(e, t) {
    return typeof e == "function" ? e(t) : e
}

function te(e) {
    return e.split("-")[0]
}

function xe(e) {
    return e.split("-")[1]
}

function At(e) {
    return e === "x" ? "y" : "x"
}

function Tt(e) {
    return e === "y" ? "height" : "width"
}
const Xo = new Set(["top", "bottom"]);

function X(e) {
    return Xo.has(te(e)) ? "y" : "x"
}

function Ot(e) {
    return At(X(e))
}

function Go(e, t, n) {
    n === void 0 && (n = !1);
    const r = xe(e),
        o = Ot(e),
        i = Tt(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Ue(s)), [s, Ue(s)]
}

function qo(e) {
    const t = Ue(e);
    return [yt(e), t, yt(t)]
}

function yt(e) {
    return e.replace(/start|end/g, t => Yo[t])
}
const Jt = ["left", "right"],
    en = ["right", "left"],
    Zo = ["top", "bottom"],
    Qo = ["bottom", "top"];

function Jo(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? en : Jt : t ? Jt : en;
        case "left":
        case "right":
            return t ? Zo : Qo;
        default:
            return []
    }
}

function ei(e, t, n, r) {
    const o = xe(e);
    let i = Jo(te(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(yt)))), i
}

function Ue(e) {
    return e.replace(/left|right|bottom|top/g, t => Ko[t])
}

function ti(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Wn(e) {
    return typeof e != "number" ? ti(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function ze(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function tn(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = X(t),
        s = Ot(t),
        a = Tt(s),
        u = te(t),
        l = i === "y",
        d = r.x + r.width / 2 - o.width / 2,
        p = r.y + r.height / 2 - o.height / 2,
        h = r[a] / 2 - o[a] / 2;
    let v;
    switch (u) {
        case "top":
            v = {
                x: d,
                y: r.y - o.height
            };
            break;
        case "bottom":
            v = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            v = {
                x: r.x + r.width,
                y: p
            };
            break;
        case "left":
            v = {
                x: r.x - o.width,
                y: p
            };
            break;
        default:
            v = {
                x: r.x,
                y: r.y
            }
    }
    switch (xe(t)) {
        case "start":
            v[s] -= h * (n && l ? -1 : 1);
            break;
        case "end":
            v[s] += h * (n && l ? -1 : 1);
            break
    }
    return v
}
const ni = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s
    } = n, a = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let l = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: p
        } = tn(l, r, u),
        h = r,
        v = {},
        x = 0;
    for (let f = 0; f < a.length; f++) {
        const {
            name: m,
            fn: g
        } = a[f], {
            x: w,
            y: E,
            data: b,
            reset: C
        } = await g({
            x: d,
            y: p,
            initialPlacement: r,
            placement: h,
            strategy: o,
            middlewareData: v,
            rects: l,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = w ? ? d, p = E ? ? p, v = { ...v,
            [m]: { ...v[m],
                ...b
            }
        }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (l = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects), {
            x: d,
            y: p
        } = tn(l, h, u)), f = -1)
    }
    return {
        x: d,
        y: p,
        placement: h,
        strategy: o,
        middlewareData: v
    }
};
async function Pe(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: a,
        strategy: u
    } = e, {
        boundary: l = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: p = "floating",
        altBoundary: h = !1,
        padding: v = 0
    } = ee(t, e), x = Wn(v), m = a[h ? p === "floating" ? "reference" : "floating" : p], g = ze(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: l,
        rootBoundary: d,
        strategy: u
    })), w = p === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = ze(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: w,
        offsetParent: E,
        strategy: u
    }) : w);
    return {
        top: (g.top - C.top + x.top) / b.y,
        bottom: (C.bottom - g.bottom + x.bottom) / b.y,
        left: (g.left - C.left + x.left) / b.x,
        right: (C.right - g.right + x.right) / b.x
    }
}
const ri = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: a,
                middlewareData: u
            } = t, {
                element: l,
                padding: d = 0
            } = ee(e, t) || {};
            if (l == null) return {};
            const p = Wn(d),
                h = {
                    x: n,
                    y: r
                },
                v = Ot(o),
                x = Tt(v),
                f = await s.getDimensions(l),
                m = v === "y",
                g = m ? "top" : "left",
                w = m ? "bottom" : "right",
                E = m ? "clientHeight" : "clientWidth",
                b = i.reference[x] + i.reference[v] - h[v] - i.floating[x],
                C = h[v] - i.reference[v],
                S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
            let P = S ? S[E] : 0;
            (!P || !await (s.isElement == null ? void 0 : s.isElement(S))) && (P = a.floating[E] || i.floating[x]);
            const T = b / 2 - C / 2,
                N = P / 2 - f[x] / 2 - 1,
                D = re(p[g], N),
                k = re(p[w], N),
                L = D,
                I = P - f[x] - k,
                R = P / 2 - f[x] / 2 + T,
                M = wt(L, R, I),
                O = !u.arrow && xe(o) != null && R !== M && i.reference[x] / 2 - (R < L ? D : k) - f[x] / 2 < 0,
                _ = O ? R < L ? R - L : R - I : 0;
            return {
                [v]: h[v] + _,
                data: {
                    [v]: M,
                    centerOffset: R - M - _,
                    ...O && {
                        alignmentOffset: _
                    }
                },
                reset: O
            }
        }
    }),
    oi = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: a,
                    platform: u,
                    elements: l
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: p = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: v = "bestFit",
                    fallbackAxisSideDirection: x = "none",
                    flipAlignment: f = !0,
                    ...m
                } = ee(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const g = te(o),
                    w = X(a),
                    E = te(a) === a,
                    b = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)),
                    C = h || (E || !f ? [Ue(a)] : qo(a)),
                    S = x !== "none";
                !h && S && C.push(...ei(a, f, x, b));
                const P = [a, ...C],
                    T = await Pe(t, m),
                    N = [];
                let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                if (d && N.push(T[g]), p) {
                    const R = Go(o, s, b);
                    N.push(T[R[0]], T[R[1]])
                }
                if (D = [...D, {
                        placement: o,
                        overflows: N
                    }], !N.every(R => R <= 0)) {
                    var k, L;
                    const R = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1,
                        M = P[R];
                    if (M && (!(p === "alignment" ? w !== X(M) : !1) || D.every(A => A.overflows[0] > 0 && X(A.placement) === w))) return {
                        data: {
                            index: R,
                            overflows: D
                        },
                        reset: {
                            placement: M
                        }
                    };
                    let O = (L = D.filter(_ => _.overflows[0] <= 0).sort((_, A) => _.overflows[1] - A.overflows[1])[0]) == null ? void 0 : L.placement;
                    if (!O) switch (v) {
                        case "bestFit":
                            {
                                var I;
                                const _ = (I = D.filter(A => {
                                    if (S) {
                                        const j = X(A.placement);
                                        return j === w || j === "y"
                                    }
                                    return !0
                                }).map(A => [A.placement, A.overflows.filter(j => j > 0).reduce((j, H) => j + H, 0)]).sort((A, j) => A[1] - j[1])[0]) == null ? void 0 : I[0];_ && (O = _);
                                break
                            }
                        case "initialPlacement":
                            O = a;
                            break
                    }
                    if (o !== O) return {
                        reset: {
                            placement: O
                        }
                    }
                }
                return {}
            }
        }
    };

function nn(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function rn(e) {
    return zo.some(t => e[t] >= 0)
}
const ii = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: r = "referenceHidden",
                    ...o
                } = ee(e, t);
                switch (r) {
                    case "referenceHidden":
                        {
                            const i = await Pe(t, { ...o,
                                    elementContext: "reference"
                                }),
                                s = nn(i, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: s,
                                    referenceHidden: rn(s)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const i = await Pe(t, { ...o,
                                    altBoundary: !0
                                }),
                                s = nn(i, n.floating);
                            return {
                                data: {
                                    escapedOffsets: s,
                                    escaped: rn(s)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Bn = new Set(["left", "top"]);
async function si(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = te(n), a = xe(n), u = X(n) === "y", l = Bn.has(s) ? -1 : 1, d = i && u ? -1 : 1, p = ee(t, e);
    let {
        mainAxis: h,
        crossAxis: v,
        alignmentAxis: x
    } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return a && typeof x == "number" && (v = a === "end" ? x * -1 : x), u ? {
        x: v * d,
        y: h * l
    } : {
        x: h * l,
        y: v * d
    }
}
const ai = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: a
                } = t, u = await si(t, e);
                return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + u.x,
                    y: i + u.y,
                    data: { ...u,
                        placement: s
                    }
                }
            }
        }
    },
    ci = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: m => {
                            let {
                                x: g,
                                y: w
                            } = m;
                            return {
                                x: g,
                                y: w
                            }
                        }
                    },
                    ...u
                } = ee(e, t), l = {
                    x: n,
                    y: r
                }, d = await Pe(t, u), p = X(te(o)), h = At(p);
                let v = l[h],
                    x = l[p];
                if (i) {
                    const m = h === "y" ? "top" : "left",
                        g = h === "y" ? "bottom" : "right",
                        w = v + d[m],
                        E = v - d[g];
                    v = wt(w, v, E)
                }
                if (s) {
                    const m = p === "y" ? "top" : "left",
                        g = p === "y" ? "bottom" : "right",
                        w = x + d[m],
                        E = x - d[g];
                    x = wt(w, x, E)
                }
                const f = a.fn({ ...t,
                    [h]: v,
                    [p]: x
                });
                return { ...f,
                    data: {
                        x: f.x - n,
                        y: f.y - r,
                        enabled: {
                            [h]: i,
                            [p]: s
                        }
                    }
                }
            }
        }
    },
    li = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: l = !0
                } = ee(e, t), d = {
                    x: n,
                    y: r
                }, p = X(o), h = At(p);
                let v = d[h],
                    x = d[p];
                const f = ee(a, t),
                    m = typeof f == "number" ? {
                        mainAxis: f,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...f
                    };
                if (u) {
                    const E = h === "y" ? "height" : "width",
                        b = i.reference[h] - i.floating[E] + m.mainAxis,
                        C = i.reference[h] + i.reference[E] - m.mainAxis;
                    v < b ? v = b : v > C && (v = C)
                }
                if (l) {
                    var g, w;
                    const E = h === "y" ? "width" : "height",
                        b = Bn.has(te(o)),
                        C = i.reference[p] - i.floating[E] + (b && ((g = s.offset) == null ? void 0 : g[p]) || 0) + (b ? 0 : m.crossAxis),
                        S = i.reference[p] + i.reference[E] + (b ? 0 : ((w = s.offset) == null ? void 0 : w[p]) || 0) - (b ? m.crossAxis : 0);
                    x < C ? x = C : x > S && (x = S)
                }
                return {
                    [h]: v,
                    [p]: x
                }
            }
        }
    },
    ui = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: a
                } = t, {
                    apply: u = () => {},
                    ...l
                } = ee(e, t), d = await Pe(t, l), p = te(o), h = xe(o), v = X(o) === "y", {
                    width: x,
                    height: f
                } = i.floating;
                let m, g;
                p === "top" || p === "bottom" ? (m = p, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = p, m = h === "end" ? "top" : "bottom");
                const w = f - d.top - d.bottom,
                    E = x - d.left - d.right,
                    b = re(f - d[m], w),
                    C = re(x - d[g], E),
                    S = !t.middlewareData.shift;
                let P = b,
                    T = C;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = E), (r = t.middlewareData.shift) != null && r.enabled.y && (P = w), S && !h) {
                    const D = B(d.left, 0),
                        k = B(d.right, 0),
                        L = B(d.top, 0),
                        I = B(d.bottom, 0);
                    v ? T = x - 2 * (D !== 0 || k !== 0 ? D + k : B(d.left, d.right)) : P = f - 2 * (L !== 0 || I !== 0 ? L + I : B(d.top, d.bottom))
                }
                await u({ ...t,
                    availableWidth: T,
                    availableHeight: P
                });
                const N = await s.getDimensions(a.floating);
                return x !== N.width || f !== N.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Qe() {
    return typeof window < "u"
}

function Ee(e) {
    return Vn(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function V(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Q(e) {
    var t;
    return (t = (Vn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Vn(e) {
    return Qe() ? e instanceof Node || e instanceof V(e).Node : !1
}

function U(e) {
    return Qe() ? e instanceof Element || e instanceof V(e).Element : !1
}

function Z(e) {
    return Qe() ? e instanceof HTMLElement || e instanceof V(e).HTMLElement : !1
}

function on(e) {
    return !Qe() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof V(e).ShadowRoot
}
const fi = new Set(["inline", "contents"]);

function Te(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = z(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !fi.has(o)
}
const di = new Set(["table", "td", "th"]);

function pi(e) {
    return di.has(Ee(e))
}
const mi = [":popover-open", ":modal"];

function Je(e) {
    return mi.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const vi = ["transform", "translate", "scale", "rotate", "perspective"],
    hi = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    gi = ["paint", "layout", "strict", "content"];

function Nt(e) {
    const t = Dt(),
        n = U(e) ? z(e) : e;
    return vi.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || hi.some(r => (n.willChange || "").includes(r)) || gi.some(r => (n.contain || "").includes(r))
}

function wi(e) {
    let t = oe(e);
    for (; Z(t) && !we(t);) {
        if (Nt(t)) return t;
        if (Je(t)) return null;
        t = oe(t)
    }
    return null
}

function Dt() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const yi = new Set(["html", "body", "#document"]);

function we(e) {
    return yi.has(Ee(e))
}

function z(e) {
    return V(e).getComputedStyle(e)
}

function et(e) {
    return U(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function oe(e) {
    if (Ee(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || on(e) && e.host || Q(e);
    return on(t) ? t.host : t
}

function Hn(e) {
    const t = oe(e);
    return we(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Z(t) && Te(t) ? t : Hn(t)
}

function Re(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Hn(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = V(o);
    if (i) {
        const a = xt(s);
        return t.concat(s, s.visualViewport || [], Te(o) ? o : [], a && n ? Re(a) : [])
    }
    return t.concat(o, Re(o, [], n))
}

function xt(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Un(e) {
    const t = z(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Z(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        a = He(n) !== i || He(r) !== s;
    return a && (n = i, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function Mt(e) {
    return U(e) ? e : e.contextElement
}

function ve(e) {
    const t = Mt(e);
    if (!Z(t)) return G(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = Un(t);
    let s = (i ? He(n.width) : n.width) / r,
        a = (i ? He(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    }
}
const xi = G(0);

function zn(e) {
    const t = V(e);
    return !Dt() || !t.visualViewport ? xi : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function Ei(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== V(e) ? !1 : t
}

function ae(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = Mt(e);
    let s = G(1);
    t && (r ? U(r) && (s = ve(r)) : s = ve(e));
    const a = Ei(i, n, r) ? zn(i) : G(0);
    let u = (o.left + a.x) / s.x,
        l = (o.top + a.y) / s.y,
        d = o.width / s.x,
        p = o.height / s.y;
    if (i) {
        const h = V(i),
            v = r && U(r) ? V(r) : r;
        let x = h,
            f = xt(x);
        for (; f && r && v !== x;) {
            const m = ve(f),
                g = f.getBoundingClientRect(),
                w = z(f),
                E = g.left + (f.clientLeft + parseFloat(w.paddingLeft)) * m.x,
                b = g.top + (f.clientTop + parseFloat(w.paddingTop)) * m.y;
            u *= m.x, l *= m.y, d *= m.x, p *= m.y, u += E, l += b, x = V(f), f = xt(x)
        }
    }
    return ze({
        width: d,
        height: p,
        x: u,
        y: l
    })
}

function _t(e, t) {
    const n = et(e).scrollLeft;
    return t ? t.left + n : ae(Q(e)).left + n
}

function Kn(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : _t(e, r)),
        i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}

function bi(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const i = o === "fixed",
        s = Q(r),
        a = t ? Je(t.floating) : !1;
    if (r === s || a && i) return n;
    let u = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = G(1);
    const d = G(0),
        p = Z(r);
    if ((p || !p && !i) && ((Ee(r) !== "body" || Te(s)) && (u = et(r)), Z(r))) {
        const v = ae(r);
        l = ve(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop
    }
    const h = s && !p && !i ? Kn(s, u, !0) : G(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - u.scrollLeft * l.x + d.x + h.x,
        y: n.y * l.y - u.scrollTop * l.y + d.y + h.y
    }
}

function Ci(e) {
    return Array.from(e.getClientRects())
}

function Pi(e) {
    const t = Q(e),
        n = et(e),
        r = e.ownerDocument.body,
        o = B(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = B(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + _t(e);
    const a = -n.scrollTop;
    return z(r).direction === "rtl" && (s += B(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: s,
        y: a
    }
}

function Ri(e, t) {
    const n = V(e),
        r = Q(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        u = 0;
    if (o) {
        i = o.width, s = o.height;
        const l = Dt();
        (!l || l && t === "fixed") && (a = o.offsetLeft, u = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a,
        y: u
    }
}
const Si = new Set(["absolute", "fixed"]);

function Ai(e, t) {
    const n = ae(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = Z(e) ? ve(e) : G(1),
        s = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        u = o * i.x,
        l = r * i.y;
    return {
        width: s,
        height: a,
        x: u,
        y: l
    }
}

function sn(e, t, n) {
    let r;
    if (t === "viewport") r = Ri(e, n);
    else if (t === "document") r = Pi(Q(e));
    else if (U(t)) r = Ai(t, n);
    else {
        const o = zn(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return ze(r)
}

function Yn(e, t) {
    const n = oe(e);
    return n === t || !U(n) || we(n) ? !1 : z(n).position === "fixed" || Yn(n, t)
}

function Ti(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Re(e, [], !1).filter(a => U(a) && Ee(a) !== "body"),
        o = null;
    const i = z(e).position === "fixed";
    let s = i ? oe(e) : e;
    for (; U(s) && !we(s);) {
        const a = z(s),
            u = Nt(s);
        !u && a.position === "fixed" && (o = null), (i ? !u && !o : !u && a.position === "static" && !!o && Si.has(o.position) || Te(s) && !u && Yn(e, s)) ? r = r.filter(d => d !== s) : o = a, s = oe(s)
    }
    return t.set(e, r), r
}

function Oi(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const s = [...n === "clippingAncestors" ? Je(t) ? [] : Ti(t, this._c) : [].concat(n), r],
        a = s[0],
        u = s.reduce((l, d) => {
            const p = sn(t, d, o);
            return l.top = B(p.top, l.top), l.right = re(p.right, l.right), l.bottom = re(p.bottom, l.bottom), l.left = B(p.left, l.left), l
        }, sn(t, a, o));
    return {
        width: u.right - u.left,
        height: u.bottom - u.top,
        x: u.left,
        y: u.top
    }
}

function Ni(e) {
    const {
        width: t,
        height: n
    } = Un(e);
    return {
        width: t,
        height: n
    }
}

function Di(e, t, n) {
    const r = Z(t),
        o = Q(t),
        i = n === "fixed",
        s = ae(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const u = G(0);

    function l() {
        u.x = _t(o)
    }
    if (r || !r && !i)
        if ((Ee(t) !== "body" || Te(o)) && (a = et(t)), r) {
            const v = ae(t, !0, i, t);
            u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop
        } else o && l();
    i && !r && o && l();
    const d = o && !r && !i ? Kn(o, a) : G(0),
        p = s.left + a.scrollLeft - u.x - d.x,
        h = s.top + a.scrollTop - u.y - d.y;
    return {
        x: p,
        y: h,
        width: s.width,
        height: s.height
    }
}

function it(e) {
    return z(e).position === "static"
}

function an(e, t) {
    if (!Z(e) || z(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Q(e) === n && (n = n.ownerDocument.body), n
}

function Xn(e, t) {
    const n = V(e);
    if (Je(e)) return n;
    if (!Z(e)) {
        let o = oe(e);
        for (; o && !we(o);) {
            if (U(o) && !it(o)) return o;
            o = oe(o)
        }
        return n
    }
    let r = an(e, t);
    for (; r && pi(r) && it(r);) r = an(r, t);
    return r && we(r) && it(r) && !Nt(r) ? n : r || wi(e) || n
}
const Mi = async function(e) {
    const t = this.getOffsetParent || Xn,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Di(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function _i(e) {
    return z(e).direction === "rtl"
}
const Ii = {
    convertOffsetParentRelativeRectToViewportRelativeRect: bi,
    getDocumentElement: Q,
    getClippingRect: Oi,
    getOffsetParent: Xn,
    getElementRects: Mi,
    getClientRects: Ci,
    getDimensions: Ni,
    getScale: ve,
    isElement: U,
    isRTL: _i
};

function Gn(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function Li(e, t) {
    let n = null,
        r;
    const o = Q(e);

    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function s(a, u) {
        a === void 0 && (a = !1), u === void 0 && (u = 1), i();
        const l = e.getBoundingClientRect(),
            {
                left: d,
                top: p,
                width: h,
                height: v
            } = l;
        if (a || t(), !h || !v) return;
        const x = Ie(p),
            f = Ie(o.clientWidth - (d + h)),
            m = Ie(o.clientHeight - (p + v)),
            g = Ie(d),
            E = {
                rootMargin: -x + "px " + -f + "px " + -m + "px " + -g + "px",
                threshold: B(0, re(1, u)) || 1
            };
        let b = !0;

        function C(S) {
            const P = S[0].intersectionRatio;
            if (P !== u) {
                if (!b) return s();
                P ? s(!1, P) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            P === 1 && !Gn(l, e.getBoundingClientRect()) && s(), b = !1
        }
        try {
            n = new IntersectionObserver(C, { ...E,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C, E)
        }
        n.observe(e)
    }
    return s(!0), i
}

function Fi(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: u = !1
    } = r, l = Mt(e), d = o || i ? [...l ? Re(l) : [], ...Re(t)] : [];
    d.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }), i && g.addEventListener("resize", n)
    });
    const p = l && a ? Li(l, n) : null;
    let h = -1,
        v = null;
    s && (v = new ResizeObserver(g => {
        let [w] = g;
        w && w.target === l && v && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
            var E;
            (E = v) == null || E.observe(t)
        })), n()
    }), l && !u && v.observe(l), v.observe(t));
    let x, f = u ? ae(e) : null;
    u && m();

    function m() {
        const g = ae(e);
        f && !Gn(f, g) && n(), f = g, x = requestAnimationFrame(m)
    }
    return n(), () => {
        var g;
        d.forEach(w => {
            o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n)
        }), p == null || p(), (g = v) == null || g.disconnect(), v = null, u && cancelAnimationFrame(x)
    }
}
const ki = ai,
    ji = ci,
    $i = oi,
    Wi = ui,
    Bi = ii,
    cn = ri,
    Vi = li,
    Hi = (e, t, n) => {
        const r = new Map,
            o = {
                platform: Ii,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return ni(e, t, { ...o,
            platform: i
        })
    };
var Ui = typeof document < "u",
    zi = function() {},
    We = Ui ? c.useLayoutEffect : zi;

function Ke(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Ke(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ke(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function qn(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function ln(e, t) {
    const n = qn(e);
    return Math.round(t * n) / n
}

function st(e) {
    const t = c.useRef(e);
    return We(() => {
        t.current = e
    }), t
}

function Ki(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: a = !0,
        whileElementsMounted: u,
        open: l
    } = e, [d, p] = c.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [h, v] = c.useState(r);
    Ke(h, r) || v(r);
    const [x, f] = c.useState(null), [m, g] = c.useState(null), w = c.useCallback(A => {
        A !== S.current && (S.current = A, f(A))
    }, []), E = c.useCallback(A => {
        A !== P.current && (P.current = A, g(A))
    }, []), b = i || x, C = s || m, S = c.useRef(null), P = c.useRef(null), T = c.useRef(d), N = u != null, D = st(u), k = st(o), L = st(l), I = c.useCallback(() => {
        if (!S.current || !P.current) return;
        const A = {
            placement: t,
            strategy: n,
            middleware: h
        };
        k.current && (A.platform = k.current), Hi(S.current, P.current, A).then(j => {
            const H = { ...j,
                isPositioned: L.current !== !1
            };
            R.current && !Ke(T.current, H) && (T.current = H, bt.flushSync(() => {
                p(H)
            }))
        })
    }, [h, t, n, k, L]);
    We(() => {
        l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, p(A => ({ ...A,
            isPositioned: !1
        })))
    }, [l]);
    const R = c.useRef(!1);
    We(() => (R.current = !0, () => {
        R.current = !1
    }), []), We(() => {
        if (b && (S.current = b), C && (P.current = C), b && C) {
            if (D.current) return D.current(b, C, I);
            I()
        }
    }, [b, C, I, D, N]);
    const M = c.useMemo(() => ({
            reference: S,
            floating: P,
            setReference: w,
            setFloating: E
        }), [w, E]),
        O = c.useMemo(() => ({
            reference: b,
            floating: C
        }), [b, C]),
        _ = c.useMemo(() => {
            const A = {
                position: n,
                left: 0,
                top: 0
            };
            if (!O.floating) return A;
            const j = ln(O.floating, d.x),
                H = ln(O.floating, d.y);
            return a ? { ...A,
                transform: "translate(" + j + "px, " + H + "px)",
                ...qn(O.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: j,
                top: H
            }
        }, [n, a, O.floating, d.x, d.y]);
    return c.useMemo(() => ({ ...d,
        update: I,
        refs: M,
        elements: O,
        floatingStyles: _
    }), [d, I, M, O, _])
}
const Yi = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? cn({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? cn({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    Xi = (e, t) => ({ ...ki(e),
        options: [e, t]
    }),
    Gi = (e, t) => ({ ...ji(e),
        options: [e, t]
    }),
    qi = (e, t) => ({ ...Vi(e),
        options: [e, t]
    }),
    Zi = (e, t) => ({ ...$i(e),
        options: [e, t]
    }),
    Qi = (e, t) => ({ ...Wi(e),
        options: [e, t]
    }),
    Ji = (e, t) => ({ ...Bi(e),
        options: [e, t]
    }),
    es = (e, t) => ({ ...Yi(e),
        options: [e, t]
    });
var ts = "Arrow",
    Zn = c.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
        } = e;
        return y.jsx($.svg, { ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : y.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Zn.displayName = ts;
var ns = Zn;

function rs(e) {
    const [t, n] = c.useState(void 0);
    return J(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, a;
                if ("borderBoxSize" in i) {
                    const u = i.borderBoxSize,
                        l = Array.isArray(u) ? u[0] : u;
                    s = l.inlineSize, a = l.blockSize
                } else s = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var It = "Popper",
    [Qn, Jn] = Se(It),
    [os, er] = Qn(It),
    tr = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, o] = c.useState(null);
        return y.jsx(os, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
        })
    };
tr.displayName = It;
var nr = "PopperAnchor",
    rr = c.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, i = er(nr, n), s = c.useRef(null), a = W(t, s);
        return c.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : y.jsx($.div, { ...o,
            ref: a
        })
    });
rr.displayName = nr;
var Lt = "PopperContent",
    [is, ss] = Qn(Lt),
    or = c.forwardRef((e, t) => {
        var Vt, Ht, Ut, zt, Kt, Yt;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: u = !0,
            collisionBoundary: l = [],
            collisionPadding: d = 0,
            sticky: p = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: v = "optimized",
            onPlaced: x,
            ...f
        } = e, m = er(Lt, n), [g, w] = c.useState(null), E = W(t, Ce => w(Ce)), [b, C] = c.useState(null), S = rs(b), P = (S == null ? void 0 : S.width) ? ? 0, T = (S == null ? void 0 : S.height) ? ? 0, N = r + (i !== "center" ? "-" + i : ""), D = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, k = Array.isArray(l) ? l : [l], L = k.length > 0, I = {
            padding: D,
            boundary: k.filter(cs),
            altBoundary: L
        }, {
            refs: R,
            floatingStyles: M,
            placement: O,
            isPositioned: _,
            middlewareData: A
        } = Ki({
            strategy: "fixed",
            placement: N,
            whileElementsMounted: (...Ce) => Fi(...Ce, {
                animationFrame: v === "always"
            }),
            elements: {
                reference: m.anchor
            },
            middleware: [Xi({
                mainAxis: o + T,
                alignmentAxis: s
            }), u && Gi({
                mainAxis: !0,
                crossAxis: !1,
                limiter: p === "partial" ? qi() : void 0,
                ...I
            }), u && Zi({ ...I
            }), Qi({ ...I,
                apply: ({
                    elements: Ce,
                    rects: Xt,
                    availableWidth: Xr,
                    availableHeight: Gr
                }) => {
                    const {
                        width: qr,
                        height: Zr
                    } = Xt.reference, De = Ce.floating.style;
                    De.setProperty("--radix-popper-available-width", `${Xr}px`), De.setProperty("--radix-popper-available-height", `${Gr}px`), De.setProperty("--radix-popper-anchor-width", `${qr}px`), De.setProperty("--radix-popper-anchor-height", `${Zr}px`)
                }
            }), b && es({
                element: b,
                padding: a
            }), ls({
                arrowWidth: P,
                arrowHeight: T
            }), h && Ji({
                strategy: "referenceHidden",
                ...I
            })]
        }), [j, H] = ar(O), ue = q(x);
        J(() => {
            _ && (ue == null || ue())
        }, [_, ue]);
        const be = (Vt = A.arrow) == null ? void 0 : Vt.x,
            fe = (Ht = A.arrow) == null ? void 0 : Ht.y,
            Ne = ((Ut = A.arrow) == null ? void 0 : Ut.centerOffset) !== 0,
            [Kr, Yr] = c.useState();
        return J(() => {
            g && Yr(window.getComputedStyle(g).zIndex)
        }, [g]), y.jsx("div", {
            ref: R.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...M,
                transform: _ ? M.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Kr,
                "--radix-popper-transform-origin": [(zt = A.transformOrigin) == null ? void 0 : zt.x, (Kt = A.transformOrigin) == null ? void 0 : Kt.y].join(" "),
                ...((Yt = A.hide) == null ? void 0 : Yt.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: y.jsx(is, {
                scope: n,
                placedSide: j,
                onArrowChange: C,
                arrowX: be,
                arrowY: fe,
                shouldHideArrow: Ne,
                children: y.jsx($.div, {
                    "data-side": j,
                    "data-align": H,
                    ...f,
                    ref: E,
                    style: { ...f.style,
                        animation: _ ? void 0 : "none"
                    }
                })
            })
        })
    });
or.displayName = Lt;
var ir = "PopperArrow",
    as = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    sr = c.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, i = ss(ir, r), s = as[i.placedSide];
        return y.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: y.jsx(ns, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
sr.displayName = ir;

function cs(e) {
    return e !== null
}
var ls = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var m, g, w;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, s = ((m = o.arrow) == null ? void 0 : m.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [l, d] = ar(n), p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], h = (((g = o.arrow) == null ? void 0 : g.x) ? ? 0) + a / 2, v = (((w = o.arrow) == null ? void 0 : w.y) ? ? 0) + u / 2;
        let x = "",
            f = "";
        return l === "bottom" ? (x = s ? p : `${h}px`, f = `${-u}px`) : l === "top" ? (x = s ? p : `${h}px`, f = `${r.floating.height+u}px`) : l === "right" ? (x = `${-u}px`, f = s ? p : `${v}px`) : l === "left" && (x = `${r.floating.width+u}px`, f = s ? p : `${v}px`), {
            data: {
                x,
                y: f
            }
        }
    }
});

function ar(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var us = tr,
    cr = rr,
    fs = or,
    ds = sr,
    at = "focusScope.autoFocusOnMount",
    ct = "focusScope.autoFocusOnUnmount",
    un = {
        bubbles: !1,
        cancelable: !0
    },
    ps = "FocusScope",
    Ft = c.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
        } = e, [a, u] = c.useState(null), l = q(o), d = q(i), p = c.useRef(null), h = W(t, f => u(f)), v = c.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        c.useEffect(() => {
            if (r) {
                let f = function(E) {
                        if (v.paused || !a) return;
                        const b = E.target;
                        a.contains(b) ? p.current = b : ne(p.current, {
                            select: !0
                        })
                    },
                    m = function(E) {
                        if (v.paused || !a) return;
                        const b = E.relatedTarget;
                        b !== null && (a.contains(b) || ne(p.current, {
                            select: !0
                        }))
                    },
                    g = function(E) {
                        if (document.activeElement === document.body)
                            for (const C of E) C.removedNodes.length > 0 && ne(a)
                    };
                document.addEventListener("focusin", f), document.addEventListener("focusout", m);
                const w = new MutationObserver(g);
                return a && w.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), w.disconnect()
                }
            }
        }, [r, a, v.paused]), c.useEffect(() => {
            if (a) {
                dn.add(v);
                const f = document.activeElement;
                if (!a.contains(f)) {
                    const g = new CustomEvent(at, un);
                    a.addEventListener(at, l), a.dispatchEvent(g), g.defaultPrevented || (ms(ys(lr(a)), {
                        select: !0
                    }), document.activeElement === f && ne(a))
                }
                return () => {
                    a.removeEventListener(at, l), setTimeout(() => {
                        const g = new CustomEvent(ct, un);
                        a.addEventListener(ct, d), a.dispatchEvent(g), g.defaultPrevented || ne(f ? ? document.body, {
                            select: !0
                        }), a.removeEventListener(ct, d), dn.remove(v)
                    }, 0)
                }
            }
        }, [a, l, d, v]);
        const x = c.useCallback(f => {
            if (!n && !r || v.paused) return;
            const m = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
                g = document.activeElement;
            if (m && g) {
                const w = f.currentTarget,
                    [E, b] = vs(w);
                E && b ? !f.shiftKey && g === b ? (f.preventDefault(), n && ne(E, {
                    select: !0
                })) : f.shiftKey && g === E && (f.preventDefault(), n && ne(b, {
                    select: !0
                })) : g === w && f.preventDefault()
            }
        }, [n, r, v.paused]);
        return y.jsx($.div, {
            tabIndex: -1,
            ...s,
            ref: h,
            onKeyDown: x
        })
    });
Ft.displayName = ps;

function ms(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (ne(r, {
                select: t
            }), document.activeElement !== n) return
}

function vs(e) {
    const t = lr(e),
        n = fn(t, e),
        r = fn(t.reverse(), e);
    return [n, r]
}

function lr(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function fn(e, t) {
    for (const n of e)
        if (!hs(n, {
                upTo: t
            })) return n
}

function hs(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function gs(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function ne(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && gs(e) && t && e.select()
    }
}
var dn = ws();

function ws() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = pn(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = pn(e, t), (n = e[0]) == null || n.resume()
        }
    }
}

function pn(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function ys(e) {
    return e.filter(t => t.tagName !== "A")
}
var lt = 0;

function ur() {
    c.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? mn()), document.body.insertAdjacentElement("beforeend", e[1] ? ? mn()), lt++, () => {
            lt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), lt--
        }
    }, [])
}

function mn() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var Y = function() {
    return Y = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, Y.apply(this, arguments)
};

function fr(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function xs(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var Be = "right-scroll-bar-position",
    Ve = "width-before-scroll-bar",
    Es = "with-scroll-bars-hidden",
    bs = "--removed-body-scroll-bar-size";

function ut(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function Cs(e, t) {
    var n = c.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var Ps = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
    vn = new WeakMap;

function Rs(e, t) {
    var n = Cs(null, function(r) {
        return e.forEach(function(o) {
            return ut(o, r)
        })
    });
    return Ps(function() {
        var r = vn.get(n);
        if (r) {
            var o = new Set(r),
                i = new Set(e),
                s = n.current;
            o.forEach(function(a) {
                i.has(a) || ut(a, null)
            }), i.forEach(function(a) {
                o.has(a) || ut(a, s)
            })
        }
        vn.set(n, e)
    }, [e]), n
}

function Ss(e) {
    return e
}

function As(e, t) {
    t === void 0 && (t = Ss);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(i) {
                var s = t(i, r);
                return n.push(s),
                    function() {
                        n = n.filter(function(a) {
                            return a !== s
                        })
                    }
            },
            assignSyncMedium: function(i) {
                for (r = !0; n.length;) {
                    var s = n;
                    n = [], s.forEach(i)
                }
                n = {
                    push: function(a) {
                        return i(a)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(i) {
                r = !0;
                var s = [];
                if (n.length) {
                    var a = n;
                    n = [], a.forEach(i), s = n
                }
                var u = function() {
                        var d = s;
                        s = [], d.forEach(i)
                    },
                    l = function() {
                        return Promise.resolve().then(u)
                    };
                l(), n = {
                    push: function(d) {
                        s.push(d), l()
                    },
                    filter: function(d) {
                        return s = s.filter(d), n
                    }
                }
            }
        };
    return o
}

function Ts(e) {
    e === void 0 && (e = {});
    var t = As(null);
    return t.options = Y({
        async: !0,
        ssr: !1
    }, e), t
}
var dr = function(e) {
    var t = e.sideCar,
        n = fr(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return c.createElement(r, Y({}, n))
};
dr.isSideCarExport = !0;

function Os(e, t) {
    return e.useMedium(t), dr
}
var pr = Ts(),
    ft = function() {},
    tt = c.forwardRef(function(e, t) {
        var n = c.useRef(null),
            r = c.useState({
                onScrollCapture: ft,
                onWheelCapture: ft,
                onTouchMoveCapture: ft
            }),
            o = r[0],
            i = r[1],
            s = e.forwardProps,
            a = e.children,
            u = e.className,
            l = e.removeScrollBar,
            d = e.enabled,
            p = e.shards,
            h = e.sideCar,
            v = e.noRelative,
            x = e.noIsolation,
            f = e.inert,
            m = e.allowPinchZoom,
            g = e.as,
            w = g === void 0 ? "div" : g,
            E = e.gapMode,
            b = fr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = h,
            S = Rs([n, t]),
            P = Y(Y({}, b), o);
        return c.createElement(c.Fragment, null, d && c.createElement(C, {
            sideCar: pr,
            removeScrollBar: l,
            shards: p,
            noRelative: v,
            noIsolation: x,
            inert: f,
            setCallbacks: i,
            allowPinchZoom: !!m,
            lockRef: n,
            gapMode: E
        }), s ? c.cloneElement(c.Children.only(a), Y(Y({}, P), {
            ref: S
        })) : c.createElement(w, Y({}, P, {
            className: u,
            ref: S
        }), a))
    });
tt.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
tt.classNames = {
    fullWidth: Ve,
    zeroRight: Be
};
var Ns = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Ds() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Ns();
    return t && e.setAttribute("nonce", t), e
}

function Ms(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function _s(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Is = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = Ds()) && (Ms(t, n), _s(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Ls = function() {
        var e = Is();
        return function(t, n) {
            c.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    mr = function() {
        var e = Ls(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    Fs = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    dt = function(e) {
        return parseInt(e || "", 10) || 0
    },
    ks = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [dt(n), dt(r), dt(o)]
    },
    js = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return Fs;
        var t = ks(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    $s = mr(),
    he = "data-scroll-locked",
    Ws = function(e, t, n, r) {
        var o = e.left,
            i = e.top,
            s = e.right,
            a = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(Es, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(he, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Be, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ve, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Be, " .").concat(Be, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ve, " .").concat(Ve, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(he, `] {
    `).concat(bs, ": ").concat(a, `px;
  }
`)
    },
    hn = function() {
        var e = parseInt(document.body.getAttribute(he) || "0", 10);
        return isFinite(e) ? e : 0
    },
    Bs = function() {
        c.useEffect(function() {
            return document.body.setAttribute(he, (hn() + 1).toString()),
                function() {
                    var e = hn() - 1;
                    e <= 0 ? document.body.removeAttribute(he) : document.body.setAttribute(he, e.toString())
                }
        }, [])
    },
    Vs = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        Bs();
        var i = c.useMemo(function() {
            return js(o)
        }, [o]);
        return c.createElement($s, {
            styles: Ws(i, !t, o, n ? "" : "!important")
        })
    },
    Et = !1;
if (typeof window < "u") try {
    var Le = Object.defineProperty({}, "passive", {
        get: function() {
            return Et = !0, !0
        }
    });
    window.addEventListener("test", Le, Le), window.removeEventListener("test", Le, Le)
} catch {
    Et = !1
}
var de = Et ? {
        passive: !1
    } : !1,
    Hs = function(e) {
        return e.tagName === "TEXTAREA"
    },
    vr = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Hs(e) && n[t] === "visible")
    },
    Us = function(e) {
        return vr(e, "overflowY")
    },
    zs = function(e) {
        return vr(e, "overflowX")
    },
    gn = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = hr(e, r);
            if (o) {
                var i = gr(e, r),
                    s = i[1],
                    a = i[2];
                if (s > a) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    Ks = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    Ys = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    hr = function(e, t) {
        return e === "v" ? Us(t) : zs(t)
    },
    gr = function(e, t) {
        return e === "v" ? Ks(t) : Ys(t)
    },
    Xs = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    Gs = function(e, t, n, r, o) {
        var i = Xs(e, window.getComputedStyle(t).direction),
            s = i * r,
            a = n.target,
            u = t.contains(a),
            l = !1,
            d = s > 0,
            p = 0,
            h = 0;
        do {
            if (!a) break;
            var v = gr(e, a),
                x = v[0],
                f = v[1],
                m = v[2],
                g = f - m - i * x;
            (x || g) && hr(e, a) && (p += g, h += x);
            var w = a.parentNode;
            a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w
        } while (!u && a !== document.body || u && (t.contains(a) || t === a));
        return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (l = !0), l
    },
    Fe = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    wn = function(e) {
        return [e.deltaX, e.deltaY]
    },
    yn = function(e) {
        return e && "current" in e ? e.current : e
    },
    qs = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    Zs = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    Qs = 0,
    pe = [];

function Js(e) {
    var t = c.useRef([]),
        n = c.useRef([0, 0]),
        r = c.useRef(),
        o = c.useState(Qs++)[0],
        i = c.useState(mr)[0],
        s = c.useRef(e);
    c.useEffect(function() {
        s.current = e
    }, [e]), c.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var f = xs([e.lockRef.current], (e.shards || []).map(yn), !0).filter(Boolean);
            return f.forEach(function(m) {
                    return m.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(m) {
                        return m.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = c.useCallback(function(f, m) {
            if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey) return !s.current.allowPinchZoom;
            var g = Fe(f),
                w = n.current,
                E = "deltaX" in f ? f.deltaX : w[0] - g[0],
                b = "deltaY" in f ? f.deltaY : w[1] - g[1],
                C, S = f.target,
                P = Math.abs(E) > Math.abs(b) ? "h" : "v";
            if ("touches" in f && P === "h" && S.type === "range") return !1;
            var T = gn(P, S);
            if (!T) return !0;
            if (T ? C = P : (C = P === "v" ? "h" : "v", T = gn(P, S)), !T) return !1;
            if (!r.current && "changedTouches" in f && (E || b) && (r.current = C), !C) return !0;
            var N = r.current || C;
            return Gs(N, m, f, N === "h" ? E : b, !0)
        }, []),
        u = c.useCallback(function(f) {
            var m = f;
            if (!(!pe.length || pe[pe.length - 1] !== i)) {
                var g = "deltaY" in m ? wn(m) : Fe(m),
                    w = t.current.filter(function(C) {
                        return C.name === m.type && (C.target === m.target || m.target === C.shadowParent) && qs(C.delta, g)
                    })[0];
                if (w && w.should) {
                    m.cancelable && m.preventDefault();
                    return
                }
                if (!w) {
                    var E = (s.current.shards || []).map(yn).filter(Boolean).filter(function(C) {
                            return C.contains(m.target)
                        }),
                        b = E.length > 0 ? a(m, E[0]) : !s.current.noIsolation;
                    b && m.cancelable && m.preventDefault()
                }
            }
        }, []),
        l = c.useCallback(function(f, m, g, w) {
            var E = {
                name: f,
                delta: m,
                target: g,
                should: w,
                shadowParent: ea(g)
            };
            t.current.push(E), setTimeout(function() {
                t.current = t.current.filter(function(b) {
                    return b !== E
                })
            }, 1)
        }, []),
        d = c.useCallback(function(f) {
            n.current = Fe(f), r.current = void 0
        }, []),
        p = c.useCallback(function(f) {
            l(f.type, wn(f), f.target, a(f, e.lockRef.current))
        }, []),
        h = c.useCallback(function(f) {
            l(f.type, Fe(f), f.target, a(f, e.lockRef.current))
        }, []);
    c.useEffect(function() {
        return pe.push(i), e.setCallbacks({
                onScrollCapture: p,
                onWheelCapture: p,
                onTouchMoveCapture: h
            }), document.addEventListener("wheel", u, de), document.addEventListener("touchmove", u, de), document.addEventListener("touchstart", d, de),
            function() {
                pe = pe.filter(function(f) {
                    return f !== i
                }), document.removeEventListener("wheel", u, de), document.removeEventListener("touchmove", u, de), document.removeEventListener("touchstart", d, de)
            }
    }, []);
    var v = e.removeScrollBar,
        x = e.inert;
    return c.createElement(c.Fragment, null, x ? c.createElement(i, {
        styles: Zs(o)
    }) : null, v ? c.createElement(Vs, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}

function ea(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const ta = Os(pr, Js);
var kt = c.forwardRef(function(e, t) {
    return c.createElement(tt, Y({}, e, {
        ref: t,
        sideCar: ta
    }))
});
kt.classNames = tt.classNames;
var na = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    me = new WeakMap,
    ke = new WeakMap,
    je = {},
    pt = 0,
    wr = function(e) {
        return e && (e.host || wr(e.parentNode))
    },
    ra = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = wr(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    oa = function(e, t, n, r) {
        var o = ra(t, Array.isArray(e) ? e : [e]);
        je[n] || (je[n] = new WeakMap);
        var i = je[n],
            s = [],
            a = new Set,
            u = new Set(o),
            l = function(p) {
                !p || a.has(p) || (a.add(p), l(p.parentNode))
            };
        o.forEach(l);
        var d = function(p) {
            !p || u.has(p) || Array.prototype.forEach.call(p.children, function(h) {
                if (a.has(h)) d(h);
                else try {
                    var v = h.getAttribute(r),
                        x = v !== null && v !== "false",
                        f = (me.get(h) || 0) + 1,
                        m = (i.get(h) || 0) + 1;
                    me.set(h, f), i.set(h, m), s.push(h), f === 1 && x && ke.set(h, !0), m === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true")
                } catch (g) {
                    console.error("aria-hidden: cannot operate on ", h, g)
                }
            })
        };
        return d(t), a.clear(), pt++,
            function() {
                s.forEach(function(p) {
                    var h = me.get(p) - 1,
                        v = i.get(p) - 1;
                    me.set(p, h), i.set(p, v), h || (ke.has(p) || p.removeAttribute(r), ke.delete(p)), v || p.removeAttribute(n)
                }), pt--, pt || (me = new WeakMap, me = new WeakMap, ke = new WeakMap, je = {})
            }
    },
    yr = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = na(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), oa(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    nt = "Dialog",
    [xr, ja] = Se(nt),
    [ia, K] = xr(nt),
    Er = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
        } = e, a = c.useRef(null), u = c.useRef(null), [l, d] = Ct({
            prop: r,
            defaultProp: o ? ? !1,
            onChange: i,
            caller: nt
        });
        return y.jsx(ia, {
            scope: t,
            triggerRef: a,
            contentRef: u,
            contentId: $e(),
            titleId: $e(),
            descriptionId: $e(),
            open: l,
            onOpenChange: d,
            onOpenToggle: c.useCallback(() => d(p => !p), [d]),
            modal: s,
            children: n
        })
    };
Er.displayName = nt;
var br = "DialogTrigger",
    Cr = c.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = K(br, n), i = W(t, o.triggerRef);
        return y.jsx($.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Wt(o.open),
            ...r,
            ref: i,
            onClick: F(e.onClick, o.onOpenToggle)
        })
    });
Cr.displayName = br;
var jt = "DialogPortal",
    [sa, Pr] = xr(jt, {
        forceMount: void 0
    }),
    Rr = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
        } = e, i = K(jt, t);
        return y.jsx(sa, {
            scope: t,
            forceMount: n,
            children: c.Children.map(r, s => y.jsx(le, {
                present: n || i.open,
                children: y.jsx(Ge, {
                    asChild: !0,
                    container: o,
                    children: s
                })
            }))
        })
    };
Rr.displayName = jt;
var Ye = "DialogOverlay",
    Sr = c.forwardRef((e, t) => {
        const n = Pr(Ye, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            i = K(Ye, e.__scopeDialog);
        return i.modal ? y.jsx(le, {
            present: r || i.open,
            children: y.jsx(ca, { ...o,
                ref: t
            })
        }) : null
    });
Sr.displayName = Ye;
var aa = ge("DialogOverlay.RemoveScroll"),
    ca = c.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = K(Ye, n);
        return y.jsx(kt, {
            as: aa,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: y.jsx($.div, {
                "data-state": Wt(o.open),
                ...r,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })
        })
    }),
    ce = "DialogContent",
    Ar = c.forwardRef((e, t) => {
        const n = Pr(ce, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            i = K(ce, e.__scopeDialog);
        return y.jsx(le, {
            present: r || i.open,
            children: i.modal ? y.jsx(la, { ...o,
                ref: t
            }) : y.jsx(ua, { ...o,
                ref: t
            })
        })
    });
Ar.displayName = ce;
var la = c.forwardRef((e, t) => {
        const n = K(ce, e.__scopeDialog),
            r = c.useRef(null),
            o = W(t, n.contentRef, r);
        return c.useEffect(() => {
            const i = r.current;
            if (i) return yr(i)
        }, []), y.jsx(Tr, { ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: F(e.onCloseAutoFocus, i => {
                var s;
                i.preventDefault(), (s = n.triggerRef.current) == null || s.focus()
            }),
            onPointerDownOutside: F(e.onPointerDownOutside, i => {
                const s = i.detail.originalEvent,
                    a = s.button === 0 && s.ctrlKey === !0;
                (s.button === 2 || a) && i.preventDefault()
            }),
            onFocusOutside: F(e.onFocusOutside, i => i.preventDefault())
        })
    }),
    ua = c.forwardRef((e, t) => {
        const n = K(ce, e.__scopeDialog),
            r = c.useRef(!1),
            o = c.useRef(!1);
        return y.jsx(Tr, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: i => {
                var s, a;
                (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: i => {
                var u, l;
                (u = e.onInteractOutside) == null || u.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const s = i.target;
                ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
            }
        })
    }),
    Tr = c.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
        } = e, a = K(ce, n), u = c.useRef(null), l = W(t, u);
        return ur(), y.jsxs(y.Fragment, {
            children: [y.jsx(Ft, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
                children: y.jsx(Xe, {
                    role: "dialog",
                    id: a.contentId,
                    "aria-describedby": a.descriptionId,
                    "aria-labelledby": a.titleId,
                    "data-state": Wt(a.open),
                    ...s,
                    ref: l,
                    onDismiss: () => a.onOpenChange(!1)
                })
            }), y.jsxs(y.Fragment, {
                children: [y.jsx(fa, {
                    titleId: a.titleId
                }), y.jsx(pa, {
                    contentRef: u,
                    descriptionId: a.descriptionId
                })]
            })]
        })
    }),
    $t = "DialogTitle",
    Or = c.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = K($t, n);
        return y.jsx($.h2, {
            id: o.titleId,
            ...r,
            ref: t
        })
    });
Or.displayName = $t;
var Nr = "DialogDescription",
    Dr = c.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = K(Nr, n);
        return y.jsx($.p, {
            id: o.descriptionId,
            ...r,
            ref: t
        })
    });
Dr.displayName = Nr;
var Mr = "DialogClose",
    _r = c.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = K(Mr, n);
        return y.jsx($.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: F(e.onClick, () => o.onOpenChange(!1))
        })
    });
_r.displayName = Mr;

function Wt(e) {
    return e ? "open" : "closed"
}
var Ir = "DialogTitleWarning",
    [$a, Lr] = Jr(Ir, {
        contentName: ce,
        titleName: $t,
        docsSlug: "dialog"
    }),
    fa = ({
        titleId: e
    }) => {
        const t = Lr(Ir),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return c.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
        }, [n, e]), null
    },
    da = "DialogDescriptionWarning",
    pa = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Lr(da).contentName}}.`;
        return c.useEffect(() => {
            var i;
            const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(r))
        }, [r, e, t]), null
    },
    Wa = Er,
    Ba = Cr,
    Va = Rr,
    Ha = Sr,
    Ua = Ar,
    za = Or,
    Ka = Dr,
    Ya = _r,
    ma = c.createContext(void 0);

function Xa(e) {
    const t = c.useContext(ma);
    return e || t || "ltr"
}

function Ga(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}

function qa(e) {
    const t = c.useRef({
        value: e,
        previous: e
    });
    return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var rt = "Popover",
    [Fr, Za] = Se(rt, [Jn]),
    Oe = Jn(),
    [va, ie] = Fr(rt),
    kr = e => {
        const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !1
        } = e, a = Oe(t), u = c.useRef(null), [l, d] = c.useState(!1), [p, h] = Ct({
            prop: r,
            defaultProp: o ? ? !1,
            onChange: i,
            caller: rt
        });
        return y.jsx(us, { ...a,
            children: y.jsx(va, {
                scope: t,
                contentId: $e(),
                triggerRef: u,
                open: p,
                onOpenChange: h,
                onOpenToggle: c.useCallback(() => h(v => !v), [h]),
                hasCustomAnchor: l,
                onCustomAnchorAdd: c.useCallback(() => d(!0), []),
                onCustomAnchorRemove: c.useCallback(() => d(!1), []),
                modal: s,
                children: n
            })
        })
    };
kr.displayName = rt;
var jr = "PopoverAnchor",
    ha = c.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = ie(jr, n), i = Oe(n), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: a
        } = o;
        return c.useEffect(() => (s(), () => a()), [s, a]), y.jsx(cr, { ...i,
            ...r,
            ref: t
        })
    });
ha.displayName = jr;
var $r = "PopoverTrigger",
    Wr = c.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = ie($r, n), i = Oe(n), s = W(t, o.triggerRef), a = y.jsx($.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": zr(o.open),
            ...r,
            ref: s,
            onClick: F(e.onClick, o.onOpenToggle)
        });
        return o.hasCustomAnchor ? a : y.jsx(cr, {
            asChild: !0,
            ...i,
            children: a
        })
    });
Wr.displayName = $r;
var Bt = "PopoverPortal",
    [ga, wa] = Fr(Bt, {
        forceMount: void 0
    }),
    Br = e => {
        const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
        } = e, i = ie(Bt, t);
        return y.jsx(ga, {
            scope: t,
            forceMount: n,
            children: y.jsx(le, {
                present: n || i.open,
                children: y.jsx(Ge, {
                    asChild: !0,
                    container: o,
                    children: r
                })
            })
        })
    };
Br.displayName = Bt;
var ye = "PopoverContent",
    Vr = c.forwardRef((e, t) => {
        const n = wa(ye, e.__scopePopover),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            i = ie(ye, e.__scopePopover);
        return y.jsx(le, {
            present: r || i.open,
            children: i.modal ? y.jsx(xa, { ...o,
                ref: t
            }) : y.jsx(Ea, { ...o,
                ref: t
            })
        })
    });
Vr.displayName = ye;
var ya = ge("PopoverContent.RemoveScroll"),
    xa = c.forwardRef((e, t) => {
        const n = ie(ye, e.__scopePopover),
            r = c.useRef(null),
            o = W(t, r),
            i = c.useRef(!1);
        return c.useEffect(() => {
            const s = r.current;
            if (s) return yr(s)
        }, []), y.jsx(kt, {
            as: ya,
            allowPinchZoom: !0,
            children: y.jsx(Hr, { ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: F(e.onCloseAutoFocus, s => {
                    var a;
                    s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus()
                }),
                onPointerDownOutside: F(e.onPointerDownOutside, s => {
                    const a = s.detail.originalEvent,
                        u = a.button === 0 && a.ctrlKey === !0,
                        l = a.button === 2 || u;
                    i.current = l
                }, {
                    checkForDefaultPrevented: !1
                }),
                onFocusOutside: F(e.onFocusOutside, s => s.preventDefault(), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }),
    Ea = c.forwardRef((e, t) => {
        const n = ie(ye, e.__scopePopover),
            r = c.useRef(!1),
            o = c.useRef(!1);
        return y.jsx(Hr, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: i => {
                var s, a;
                (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: i => {
                var u, l;
                (u = e.onInteractOutside) == null || u.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const s = i.target;
                ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
            }
        })
    }),
    Hr = c.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onInteractOutside: d,
            ...p
        } = e, h = ie(ye, n), v = Oe(n);
        return ur(), y.jsx(Ft, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: y.jsx(Xe, {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onInteractOutside: d,
                onEscapeKeyDown: a,
                onPointerDownOutside: u,
                onFocusOutside: l,
                onDismiss: () => h.onOpenChange(!1),
                children: y.jsx(fs, {
                    "data-state": zr(h.open),
                    role: "dialog",
                    id: h.contentId,
                    ...v,
                    ...p,
                    ref: t,
                    style: { ...p.style,
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            })
        })
    }),
    Ur = "PopoverClose",
    ba = c.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = ie(Ur, n);
        return y.jsx($.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: F(e.onClick, () => o.onOpenChange(!1))
        })
    });
ba.displayName = Ur;
var Ca = "PopoverArrow",
    Pa = c.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = Oe(n);
        return y.jsx(ds, { ...o,
            ...r,
            ref: t
        })
    });
Pa.displayName = Ca;

function zr(e) {
    return e ? "open" : "closed"
}
var Qa = kr,
    Ja = Wr,
    ec = Br,
    tc = Vr;
export {
    Fa as A, Va as B, ka as C, La as D, Qa as E, Ja as F, ec as G, tc as H, J as I, Ga as J, Ha as O, Da as P, _a as R, Aa as S, Ia as T, Ma as V, $a as W, Jn as a, cr as b, Se as c, $ as d, F as e, le as f, Xe as g, fs as h, Oa as i, ds as j, Ta as k, qa as l, rs as m, Ct as n, io as o, Xa as p, q, $e as r, ja as s, Ba as t, W as u, Ua as v, za as w, Ka as x, Ya as y, Wa as z
};