const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/RecentCompensation-DGBqX4Xn.js", "assets/framer-C_Gpxhjm.js", "assets/chevron-right-BaXfGb-L.js", "assets/recharts-C2k-4Gok.js", "assets/radix-2-YDU1c1.js", "assets/Testimonials-D0AgmRg2.js", "assets/star-BKfapDvZ.js", "assets/InsuranceLogos-Df9IicsM.js", "assets/CompensationGrid-B37-zUJ6.js", "assets/FAQ-LN7jBCTu.js", "assets/Footer-C3Dgs5sm.js", "assets/TermsPrivacyDialog-D4Wacw8W.js", "assets/dialog-C9noMzaw.js", "assets/MELawyers-Bi47Lm3p.js", "assets/Dashboard-D-Jq36My.js", "assets/loader-circle-M67zzW_v.js", "assets/ALBTexas-CNtzeAId.js", "assets/MiracleLaw-DcOcbDn1.js", "assets/DKLaw-BUocJeqi.js", "assets/Demo-DSRGQ1g6.js", "assets/Longform-D7QFsRwN.js", "assets/NotFound-CQUfuq6L.js"]))) => i.map(i => d[i]);
var Ks = t => {
    throw TypeError(t)
};
var os = (t, e, r) => e.has(t) || Ks("Cannot " + r);
var S = (t, e, r) => (os(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
    V = (t, e, r) => e.has(t) ? Ks("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r),
    q = (t, e, r, n) => (os(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r),
    we = (t, e, r) => (os(t, e, "access private method"), r);
var Sn = (t, e, r, n) => ({
    set _(s) {
        q(t, e, s, r)
    },
    get _() {
        return S(t, e, n)
    }
});
import {
    r as g,
    j as p,
    a as Lo,
    R as A,
    A as gi,
    m as yi
} from "./framer-C_Gpxhjm.js";
import {
    r as $o,
    R as Do,
    c as vi
} from "./recharts-C2k-4Gok.js";
import {
    V as bi,
    R as wi,
    A as _i,
    C as xi,
    T as ki,
    D as Si,
    P as Mo,
    c as Uo,
    a as Ei,
    u as Ti,
    b as Bo,
    d as qo,
    e as or,
    f as Fo,
    g as Wo,
    h as Ho,
    i as zo,
    j as Vo,
    k as Ko
} from "./radix-2-YDU1c1.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
    new MutationObserver(s => {
        for (const a of s)
            if (a.type === "childList")
                for (const i of a.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(s) {
        const a = {};
        return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function n(s) {
        if (s.ep) return;
        s.ep = !0;
        const a = r(s);
        fetch(s.href, a)
    }
})();
var Ci, Gs = $o;
Ci = Gs.createRoot, Gs.hydrateRoot;
const Go = "modulepreload",
    Jo = function(t) {
        return "/" + t
    },
    Js = {},
    Oe = function(e, r, n) {
        let s = Promise.resolve();
        if (r && r.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"),
                o = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
            s = Promise.allSettled(r.map(l => {
                if (l = Jo(l), l in Js) return;
                Js[l] = !0;
                const c = l.endsWith(".css"),
                    u = c ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${l}"]${u}`)) return;
                const d = document.createElement("link");
                if (d.rel = c ? "stylesheet" : Go, c || (d.as = "script"), d.crossOrigin = "", d.href = l, o && d.setAttribute("nonce", o), document.head.appendChild(d), c) return new Promise((f, h) => {
                    d.addEventListener("load", f), d.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${l}`)))
                })
            }))
        }

        function a(i) {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = i, window.dispatchEvent(o), !o.defaultPrevented) throw i
        }
        return s.then(i => {
            for (const o of i || []) o.status === "rejected" && a(o.reason);
            return e().catch(a)
        })
    };
var Vn = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Kn = typeof window > "u" || "Deno" in globalThis;

function Je() {}

function Yo(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Qo(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function Xo(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}

function ws(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Zo(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Ys(t, e) {
    const {
        type: r = "all",
        exact: n,
        fetchStatus: s,
        predicate: a,
        queryKey: i,
        stale: o
    } = t;
    if (i) {
        if (n) {
            if (e.queryHash !== Us(i, e.options)) return !1
        } else if (!rn(e.queryKey, i)) return !1
    }
    if (r !== "all") {
        const l = e.isActive();
        if (r === "active" && !l || r === "inactive" && l) return !1
    }
    return !(typeof o == "boolean" && e.isStale() !== o || s && s !== e.state.fetchStatus || a && !a(e))
}

function Qs(t, e) {
    const {
        exact: r,
        status: n,
        predicate: s,
        mutationKey: a
    } = t;
    if (a) {
        if (!e.options.mutationKey) return !1;
        if (r) {
            if (tn(e.options.mutationKey) !== tn(a)) return !1
        } else if (!rn(e.options.mutationKey, a)) return !1
    }
    return !(n && e.state.status !== n || s && !s(e))
}

function Us(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || tn)(t)
}

function tn(t) {
    return JSON.stringify(t, (e, r) => _s(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r)
}

function rn(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => rn(t[r], e[r])) : !1
}

function Ai(t, e) {
    if (t === e) return t;
    const r = Xs(t) && Xs(e);
    if (r || _s(t) && _s(e)) {
        const n = r ? t : Object.keys(t),
            s = n.length,
            a = r ? e : Object.keys(e),
            i = a.length,
            o = r ? [] : {},
            l = new Set(n);
        let c = 0;
        for (let u = 0; u < i; u++) {
            const d = r ? u : a[u];
            (!r && l.has(d) || r) && t[d] === void 0 && e[d] === void 0 ? (o[d] = void 0, c++) : (o[d] = Ai(t[d], e[d]), o[d] === t[d] && t[d] !== void 0 && c++)
        }
        return s === i && c === s ? t : o
    }
    return e
}

function Xs(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}

function _s(t) {
    if (!Zs(t)) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const r = e.prototype;
    return !(!Zs(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function Zs(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function el(t) {
    return new Promise(e => {
        setTimeout(e, t)
    })
}

function tl(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Ai(t, e) : e
}

function rl(t, e, r = 0) {
    const n = [...t, e];
    return r && n.length > r ? n.slice(1) : n
}

function nl(t, e, r = 0) {
    const n = [e, ...t];
    return r && n.length > r ? n.slice(0, -1) : n
}
var Bs = Symbol();

function Pi(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Bs ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
var Qt, Rt, xr, li, sl = (li = class extends Vn {
        constructor() {
            super();
            V(this, Qt);
            V(this, Rt);
            V(this, xr);
            q(this, xr, e => {
                if (!Kn && window.addEventListener) {
                    const r = () => e();
                    return window.addEventListener("visibilitychange", r, !1), () => {
                        window.removeEventListener("visibilitychange", r)
                    }
                }
            })
        }
        onSubscribe() {
            S(this, Rt) || this.setEventListener(S(this, xr))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = S(this, Rt)) == null || e.call(this), q(this, Rt, void 0))
        }
        setEventListener(e) {
            var r;
            q(this, xr, e), (r = S(this, Rt)) == null || r.call(this), q(this, Rt, e(n => {
                typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
            }))
        }
        setFocused(e) {
            S(this, Qt) !== e && (q(this, Qt, e), this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(r => {
                r(e)
            })
        }
        isFocused() {
            var e;
            return typeof S(this, Qt) == "boolean" ? S(this, Qt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
        }
    }, Qt = new WeakMap, Rt = new WeakMap, xr = new WeakMap, li),
    Ri = new sl,
    kr, Ot, Sr, ci, al = (ci = class extends Vn {
        constructor() {
            super();
            V(this, kr, !0);
            V(this, Ot);
            V(this, Sr);
            q(this, Sr, e => {
                if (!Kn && window.addEventListener) {
                    const r = () => e(!0),
                        n = () => e(!1);
                    return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
                        window.removeEventListener("online", r), window.removeEventListener("offline", n)
                    }
                }
            })
        }
        onSubscribe() {
            S(this, Ot) || this.setEventListener(S(this, Sr))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = S(this, Ot)) == null || e.call(this), q(this, Ot, void 0))
        }
        setEventListener(e) {
            var r;
            q(this, Sr, e), (r = S(this, Ot)) == null || r.call(this), q(this, Ot, e(this.setOnline.bind(this)))
        }
        setOnline(e) {
            S(this, kr) !== e && (q(this, kr, e), this.listeners.forEach(n => {
                n(e)
            }))
        }
        isOnline() {
            return S(this, kr)
        }
    }, kr = new WeakMap, Ot = new WeakMap, Sr = new WeakMap, ci),
    Un = new al;

function il() {
    let t, e;
    const r = new Promise((s, a) => {
        t = s, e = a
    });
    r.status = "pending", r.catch(() => {});

    function n(s) {
        Object.assign(r, s), delete r.resolve, delete r.reject
    }
    return r.resolve = s => {
        n({
            status: "fulfilled",
            value: s
        }), t(s)
    }, r.reject = s => {
        n({
            status: "rejected",
            reason: s
        }), e(s)
    }, r
}

function ol(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}

function Oi(t) {
    return (t ? ? "online") === "online" ? Un.isOnline() : !0
}
var ji = class extends Error {
    constructor(t) {
        super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
    }
};

function ls(t) {
    return t instanceof ji
}

function Ni(t) {
    let e = !1,
        r = 0,
        n = !1,
        s;
    const a = il(),
        i = m => {
            var y;
            n || (f(new ji(m)), (y = t.abort) == null || y.call(t))
        },
        o = () => {
            e = !0
        },
        l = () => {
            e = !1
        },
        c = () => Ri.isFocused() && (t.networkMode === "always" || Un.isOnline()) && t.canRun(),
        u = () => Oi(t.networkMode) && t.canRun(),
        d = m => {
            var y;
            n || (n = !0, (y = t.onSuccess) == null || y.call(t, m), s == null || s(), a.resolve(m))
        },
        f = m => {
            var y;
            n || (n = !0, (y = t.onError) == null || y.call(t, m), s == null || s(), a.reject(m))
        },
        h = () => new Promise(m => {
            var y;
            s = k => {
                (n || c()) && m(k)
            }, (y = t.onPause) == null || y.call(t)
        }).then(() => {
            var m;
            s = void 0, n || (m = t.onContinue) == null || m.call(t)
        }),
        b = () => {
            if (n) return;
            let m;
            const y = r === 0 ? t.initialPromise : void 0;
            try {
                m = y ? ? t.fn()
            } catch (k) {
                m = Promise.reject(k)
            }
            Promise.resolve(m).then(d).catch(k => {
                var L;
                if (n) return;
                const E = t.retry ? ? (Kn ? 0 : 3),
                    w = t.retryDelay ? ? ol,
                    P = typeof w == "function" ? w(r, k) : w,
                    U = E === !0 || typeof E == "number" && r < E || typeof E == "function" && E(r, k);
                if (e || !U) {
                    f(k);
                    return
                }
                r++, (L = t.onFail) == null || L.call(t, r, k), el(P).then(() => c() ? void 0 : h()).then(() => {
                    e ? f(k) : b()
                })
            })
        };
    return {
        promise: a,
        cancel: i,
        continue: () => (s == null || s(), a),
        cancelRetry: o,
        continueRetry: l,
        canStart: u,
        start: () => (u() ? b() : h().then(b), a)
    }
}
var ll = t => setTimeout(t, 0);

function cl() {
    let t = [],
        e = 0,
        r = o => {
            o()
        },
        n = o => {
            o()
        },
        s = ll;
    const a = o => {
            e ? t.push(o) : s(() => {
                r(o)
            })
        },
        i = () => {
            const o = t;
            t = [], o.length && s(() => {
                n(() => {
                    o.forEach(l => {
                        r(l)
                    })
                })
            })
        };
    return {
        batch: o => {
            let l;
            e++;
            try {
                l = o()
            } finally {
                e--, e || i()
            }
            return l
        },
        batchCalls: o => (...l) => {
            a(() => {
                o(...l)
            })
        },
        schedule: a,
        setNotifyFunction: o => {
            r = o
        },
        setBatchNotifyFunction: o => {
            n = o
        },
        setScheduler: o => {
            s = o
        }
    }
}
var Ee = cl(),
    Xt, ui, Ii = (ui = class {
        constructor() {
            V(this, Xt)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Qo(this.gcTime) && q(this, Xt, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ? ? (Kn ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            S(this, Xt) && (clearTimeout(S(this, Xt)), q(this, Xt, void 0))
        }
    }, Xt = new WeakMap, ui),
    Er, Zt, We, er, _e, pn, tr, Qe, gt, di, ul = (di = class extends Ii {
        constructor(e) {
            super();
            V(this, Qe);
            V(this, Er);
            V(this, Zt);
            V(this, We);
            V(this, er);
            V(this, _e);
            V(this, pn);
            V(this, tr);
            q(this, tr, !1), q(this, pn, e.defaultOptions), this.setOptions(e.options), this.observers = [], q(this, er, e.client), q(this, We, S(this, er).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, q(this, Er, hl(this.options)), this.state = e.state ? ? S(this, Er), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var e;
            return (e = S(this, _e)) == null ? void 0 : e.promise
        }
        setOptions(e) {
            this.options = { ...S(this, pn),
                ...e
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && S(this, We).remove(this)
        }
        setData(e, r) {
            const n = tl(this.state.data, e, this.options);
            return we(this, Qe, gt).call(this, {
                data: n,
                type: "success",
                dataUpdatedAt: r == null ? void 0 : r.updatedAt,
                manual: r == null ? void 0 : r.manual
            }), n
        }
        setState(e, r) {
            we(this, Qe, gt).call(this, {
                type: "setState",
                state: e,
                setStateOptions: r
            })
        }
        cancel(e) {
            var n, s;
            const r = (n = S(this, _e)) == null ? void 0 : n.promise;
            return (s = S(this, _e)) == null || s.cancel(e), r ? r.then(Je).catch(Je) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(S(this, Er))
        }
        isActive() {
            return this.observers.some(e => Zo(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Bs || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(e => ws(e.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !Xo(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            var r;
            const e = this.observers.find(n => n.shouldFetchOnWindowFocus());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = S(this, _e)) == null || r.continue()
        }
        onOnline() {
            var r;
            const e = this.observers.find(n => n.shouldFetchOnReconnect());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = S(this, _e)) == null || r.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), S(this, We).notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e), this.observers.length || (S(this, _e) && (S(this, tr) ? S(this, _e).cancel({
                revert: !0
            }) : S(this, _e).cancelRetry()), this.scheduleGc()), S(this, We).notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || we(this, Qe, gt).call(this, {
                type: "invalidate"
            })
        }
        fetch(e, r) {
            var c, u, d;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (r != null && r.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (S(this, _e)) return S(this, _e).continueRetry(), S(this, _e).promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const f = this.observers.find(h => h.options.queryFn);
                f && this.setOptions(f.options)
            }
            const n = new AbortController,
                s = f => {
                    Object.defineProperty(f, "signal", {
                        enumerable: !0,
                        get: () => (q(this, tr, !0), n.signal)
                    })
                },
                a = () => {
                    const f = Pi(this.options, r),
                        b = (() => {
                            const m = {
                                client: S(this, er),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return s(m), m
                        })();
                    return q(this, tr, !1), this.options.persister ? this.options.persister(f, b, this) : f(b)
                },
                o = (() => {
                    const f = {
                        fetchOptions: r,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: S(this, er),
                        state: this.state,
                        fetchFn: a
                    };
                    return s(f), f
                })();
            (c = this.options.behavior) == null || c.onFetch(o, this), q(this, Zt, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = o.fetchOptions) == null ? void 0 : u.meta)) && we(this, Qe, gt).call(this, {
                type: "fetch",
                meta: (d = o.fetchOptions) == null ? void 0 : d.meta
            });
            const l = f => {
                var h, b, m, y;
                ls(f) && f.silent || we(this, Qe, gt).call(this, {
                    type: "error",
                    error: f
                }), ls(f) || ((b = (h = S(this, We).config).onError) == null || b.call(h, f, this), (y = (m = S(this, We).config).onSettled) == null || y.call(m, this.state.data, f, this)), this.scheduleGc()
            };
            return q(this, _e, Ni({
                initialPromise: r == null ? void 0 : r.initialPromise,
                fn: o.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: f => {
                    var h, b, m, y;
                    if (f === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(f)
                    } catch (k) {
                        l(k);
                        return
                    }(b = (h = S(this, We).config).onSuccess) == null || b.call(h, f, this), (y = (m = S(this, We).config).onSettled) == null || y.call(m, f, this.state.error, this), this.scheduleGc()
                },
                onError: l,
                onFail: (f, h) => {
                    we(this, Qe, gt).call(this, {
                        type: "failed",
                        failureCount: f,
                        error: h
                    })
                },
                onPause: () => {
                    we(this, Qe, gt).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    we(this, Qe, gt).call(this, {
                        type: "continue"
                    })
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0
            })), S(this, _e).start()
        }
    }, Er = new WeakMap, Zt = new WeakMap, We = new WeakMap, er = new WeakMap, _e = new WeakMap, pn = new WeakMap, tr = new WeakMap, Qe = new WeakSet, gt = function(e) {
        const r = n => {
            switch (e.type) {
                case "failed":
                    return { ...n,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...n,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...n,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...n,
                        ...dl(n.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    return q(this, Zt, void 0), { ...n,
                        data: e.data,
                        dataUpdateCount: n.dataUpdateCount + 1,
                        dataUpdatedAt: e.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const s = e.error;
                    return ls(s) && s.revert && S(this, Zt) ? { ...S(this, Zt),
                        fetchStatus: "idle"
                    } : { ...n,
                        error: s,
                        errorUpdateCount: n.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: n.fetchFailureCount + 1,
                        fetchFailureReason: s,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...n,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...n,
                        ...e.state
                    }
            }
        };
        this.state = r(this.state), Ee.batch(() => {
            this.observers.forEach(n => {
                n.onQueryUpdate()
            }), S(this, We).notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }, di);

function dl(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Oi(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function hl(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
        r = e !== void 0,
        n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var at, hi, fl = (hi = class extends Vn {
        constructor(e = {}) {
            super();
            V(this, at);
            this.config = e, q(this, at, new Map)
        }
        build(e, r, n) {
            const s = r.queryKey,
                a = r.queryHash ? ? Us(s, r);
            let i = this.get(a);
            return i || (i = new ul({
                client: e,
                queryKey: s,
                queryHash: a,
                options: e.defaultQueryOptions(r),
                state: n,
                defaultOptions: e.getQueryDefaults(s)
            }), this.add(i)), i
        }
        add(e) {
            S(this, at).has(e.queryHash) || (S(this, at).set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const r = S(this, at).get(e.queryHash);
            r && (e.destroy(), r === e && S(this, at).delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            Ee.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return S(this, at).get(e)
        }
        getAll() {
            return [...S(this, at).values()]
        }
        find(e) {
            const r = {
                exact: !0,
                ...e
            };
            return this.getAll().find(n => Ys(r, n))
        }
        findAll(e = {}) {
            const r = this.getAll();
            return Object.keys(e).length > 0 ? r.filter(n => Ys(e, n)) : r
        }
        notify(e) {
            Ee.batch(() => {
                this.listeners.forEach(r => {
                    r(e)
                })
            })
        }
        onFocus() {
            Ee.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            Ee.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    }, at = new WeakMap, hi),
    it, Se, rr, ot, Ct, fi, pl = (fi = class extends Ii {
        constructor(e) {
            super();
            V(this, ot);
            V(this, it);
            V(this, Se);
            V(this, rr);
            this.mutationId = e.mutationId, q(this, Se, e.mutationCache), q(this, it, []), this.state = e.state || ml(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(e) {
            S(this, it).includes(e) || (S(this, it).push(e), this.clearGcTimeout(), S(this, Se).notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            q(this, it, S(this, it).filter(r => r !== e)), this.scheduleGc(), S(this, Se).notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            S(this, it).length || (this.state.status === "pending" ? this.scheduleGc() : S(this, Se).remove(this))
        }
        continue () {
            var e;
            return ((e = S(this, rr)) == null ? void 0 : e.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(e) {
            var a, i, o, l, c, u, d, f, h, b, m, y, k, E, w, P, U, L, H, me;
            const r = () => {
                we(this, ot, Ct).call(this, {
                    type: "continue"
                })
            };
            q(this, rr, Ni({
                fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
                onFail: (F, fe) => {
                    we(this, ot, Ct).call(this, {
                        type: "failed",
                        failureCount: F,
                        error: fe
                    })
                },
                onPause: () => {
                    we(this, ot, Ct).call(this, {
                        type: "pause"
                    })
                },
                onContinue: r,
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => S(this, Se).canRun(this)
            }));
            const n = this.state.status === "pending",
                s = !S(this, rr).canStart();
            try {
                if (n) r();
                else {
                    we(this, ot, Ct).call(this, {
                        type: "pending",
                        variables: e,
                        isPaused: s
                    }), await ((i = (a = S(this, Se).config).onMutate) == null ? void 0 : i.call(a, e, this));
                    const fe = await ((l = (o = this.options).onMutate) == null ? void 0 : l.call(o, e));
                    fe !== this.state.context && we(this, ot, Ct).call(this, {
                        type: "pending",
                        context: fe,
                        variables: e,
                        isPaused: s
                    })
                }
                const F = await S(this, rr).start();
                return await ((u = (c = S(this, Se).config).onSuccess) == null ? void 0 : u.call(c, F, e, this.state.context, this)), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, F, e, this.state.context)), await ((b = (h = S(this, Se).config).onSettled) == null ? void 0 : b.call(h, F, null, this.state.variables, this.state.context, this)), await ((y = (m = this.options).onSettled) == null ? void 0 : y.call(m, F, null, e, this.state.context)), we(this, ot, Ct).call(this, {
                    type: "success",
                    data: F
                }), F
            } catch (F) {
                try {
                    throw await ((E = (k = S(this, Se).config).onError) == null ? void 0 : E.call(k, F, e, this.state.context, this)), await ((P = (w = this.options).onError) == null ? void 0 : P.call(w, F, e, this.state.context)), await ((L = (U = S(this, Se).config).onSettled) == null ? void 0 : L.call(U, void 0, F, this.state.variables, this.state.context, this)), await ((me = (H = this.options).onSettled) == null ? void 0 : me.call(H, void 0, F, e, this.state.context)), F
                } finally {
                    we(this, ot, Ct).call(this, {
                        type: "error",
                        error: F
                    })
                }
            } finally {
                S(this, Se).runNext(this)
            }
        }
    }, it = new WeakMap, Se = new WeakMap, rr = new WeakMap, ot = new WeakSet, Ct = function(e) {
        const r = n => {
            switch (e.type) {
                case "failed":
                    return { ...n,
                        failureCount: e.failureCount,
                        failureReason: e.error
                    };
                case "pause":
                    return { ...n,
                        isPaused: !0
                    };
                case "continue":
                    return { ...n,
                        isPaused: !1
                    };
                case "pending":
                    return { ...n,
                        context: e.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: e.isPaused,
                        status: "pending",
                        variables: e.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...n,
                        data: e.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...n,
                        data: void 0,
                        error: e.error,
                        failureCount: n.failureCount + 1,
                        failureReason: e.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = r(this.state), Ee.batch(() => {
            S(this, it).forEach(n => {
                n.onMutationUpdate(e)
            }), S(this, Se).notify({
                mutation: this,
                type: "updated",
                action: e
            })
        })
    }, fi);

function ml() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var bt, Xe, mn, pi, gl = (pi = class extends Vn {
    constructor(e = {}) {
        super();
        V(this, bt);
        V(this, Xe);
        V(this, mn);
        this.config = e, q(this, bt, new Set), q(this, Xe, new Map), q(this, mn, 0)
    }
    build(e, r, n) {
        const s = new pl({
            mutationCache: this,
            mutationId: ++Sn(this, mn)._,
            options: e.defaultMutationOptions(r),
            state: n
        });
        return this.add(s), s
    }
    add(e) {
        S(this, bt).add(e);
        const r = En(e);
        if (typeof r == "string") {
            const n = S(this, Xe).get(r);
            n ? n.push(e) : S(this, Xe).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (S(this, bt).delete(e)) {
            const r = En(e);
            if (typeof r == "string") {
                const n = S(this, Xe).get(r);
                if (n)
                    if (n.length > 1) {
                        const s = n.indexOf(e);
                        s !== -1 && n.splice(s, 1)
                    } else n[0] === e && S(this, Xe).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = En(e);
        if (typeof r == "string") {
            const n = S(this, Xe).get(r),
                s = n == null ? void 0 : n.find(a => a.state.status === "pending");
            return !s || s === e
        } else return !0
    }
    runNext(e) {
        var n;
        const r = En(e);
        if (typeof r == "string") {
            const s = (n = S(this, Xe).get(r)) == null ? void 0 : n.find(a => a !== e && a.state.isPaused);
            return (s == null ? void 0 : s.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        Ee.batch(() => {
            S(this, bt).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), S(this, bt).clear(), S(this, Xe).clear()
        })
    }
    getAll() {
        return Array.from(S(this, bt))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(n => Qs(r, n))
    }
    findAll(e = {}) {
        return this.getAll().filter(r => Qs(e, r))
    }
    notify(e) {
        Ee.batch(() => {
            this.listeners.forEach(r => {
                r(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return Ee.batch(() => Promise.all(e.map(r => r.continue().catch(Je))))
    }
}, bt = new WeakMap, Xe = new WeakMap, mn = new WeakMap, pi);

function En(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}

function ea(t) {
    return {
        onFetch: (e, r) => {
            var u, d, f, h, b;
            const n = e.options,
                s = (f = (d = (u = e.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction,
                a = ((h = e.state.data) == null ? void 0 : h.pages) || [],
                i = ((b = e.state.data) == null ? void 0 : b.pageParams) || [];
            let o = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const c = async () => {
                let m = !1;
                const y = w => {
                        Object.defineProperty(w, "signal", {
                            enumerable: !0,
                            get: () => (e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", () => {
                                m = !0
                            }), e.signal)
                        })
                    },
                    k = Pi(e.options, e.fetchOptions),
                    E = async (w, P, U) => {
                        if (m) return Promise.reject();
                        if (P == null && w.pages.length) return Promise.resolve(w);
                        const H = (() => {
                                const X = {
                                    client: e.client,
                                    queryKey: e.queryKey,
                                    pageParam: P,
                                    direction: U ? "backward" : "forward",
                                    meta: e.options.meta
                                };
                                return y(X), X
                            })(),
                            me = await k(H),
                            {
                                maxPages: F
                            } = e.options,
                            fe = U ? nl : rl;
                        return {
                            pages: fe(w.pages, me, F),
                            pageParams: fe(w.pageParams, P, F)
                        }
                    };
                if (s && a.length) {
                    const w = s === "backward",
                        P = w ? yl : ta,
                        U = {
                            pages: a,
                            pageParams: i
                        },
                        L = P(n, U);
                    o = await E(U, L, w)
                } else {
                    const w = t ? ? a.length;
                    do {
                        const P = l === 0 ? i[0] ? ? n.initialPageParam : ta(n, o);
                        if (l > 0 && P == null) break;
                        o = await E(o, P), l++
                    } while (l < w)
                }
                return o
            };
            e.options.persister ? e.fetchFn = () => {
                var m, y;
                return (y = (m = e.options).persister) == null ? void 0 : y.call(m, c, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            } : e.fetchFn = c
        }
    }
}

function ta(t, {
    pages: e,
    pageParams: r
}) {
    const n = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[n], e, r[n], r) : void 0
}

function yl(t, {
    pages: e,
    pageParams: r
}) {
    var n;
    return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, r[0], r) : void 0
}
var ie, jt, Nt, Tr, Cr, It, Ar, Pr, mi, vl = (mi = class {
        constructor(t = {}) {
            V(this, ie);
            V(this, jt);
            V(this, Nt);
            V(this, Tr);
            V(this, Cr);
            V(this, It);
            V(this, Ar);
            V(this, Pr);
            q(this, ie, t.queryCache || new fl), q(this, jt, t.mutationCache || new gl), q(this, Nt, t.defaultOptions || {}), q(this, Tr, new Map), q(this, Cr, new Map), q(this, It, 0)
        }
        mount() {
            Sn(this, It)._++, S(this, It) === 1 && (q(this, Ar, Ri.subscribe(async t => {
                t && (await this.resumePausedMutations(), S(this, ie).onFocus())
            })), q(this, Pr, Un.subscribe(async t => {
                t && (await this.resumePausedMutations(), S(this, ie).onOnline())
            })))
        }
        unmount() {
            var t, e;
            Sn(this, It)._--, S(this, It) === 0 && ((t = S(this, Ar)) == null || t.call(this), q(this, Ar, void 0), (e = S(this, Pr)) == null || e.call(this), q(this, Pr, void 0))
        }
        isFetching(t) {
            return S(this, ie).findAll({ ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return S(this, jt).findAll({ ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = S(this, ie).get(e.queryHash)) == null ? void 0 : r.state.data
        }
        ensureQueryData(t) {
            const e = this.defaultQueryOptions(t),
                r = S(this, ie).build(this, e),
                n = r.state.data;
            return n === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(ws(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(n))
        }
        getQueriesData(t) {
            return S(this, ie).findAll(t).map(({
                queryKey: e,
                state: r
            }) => {
                const n = r.data;
                return [e, n]
            })
        }
        setQueryData(t, e, r) {
            const n = this.defaultQueryOptions({
                    queryKey: t
                }),
                s = S(this, ie).get(n.queryHash),
                a = s == null ? void 0 : s.state.data,
                i = Yo(e, a);
            if (i !== void 0) return S(this, ie).build(this, n).setData(i, { ...r,
                manual: !0
            })
        }
        setQueriesData(t, e, r) {
            return Ee.batch(() => S(this, ie).findAll(t).map(({
                queryKey: n
            }) => [n, this.setQueryData(n, e, r)]))
        }
        getQueryState(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = S(this, ie).get(e.queryHash)) == null ? void 0 : r.state
        }
        removeQueries(t) {
            const e = S(this, ie);
            Ee.batch(() => {
                e.findAll(t).forEach(r => {
                    e.remove(r)
                })
            })
        }
        resetQueries(t, e) {
            const r = S(this, ie);
            return Ee.batch(() => (r.findAll(t).forEach(n => {
                n.reset()
            }), this.refetchQueries({
                type: "active",
                ...t
            }, e)))
        }
        cancelQueries(t, e = {}) {
            const r = {
                    revert: !0,
                    ...e
                },
                n = Ee.batch(() => S(this, ie).findAll(t).map(s => s.cancel(r)));
            return Promise.all(n).then(Je).catch(Je)
        }
        invalidateQueries(t, e = {}) {
            return Ee.batch(() => (S(this, ie).findAll(t).forEach(r => {
                r.invalidate()
            }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...t,
                type: (t == null ? void 0 : t.refetchType) ? ? (t == null ? void 0 : t.type) ? ? "active"
            }, e)))
        }
        refetchQueries(t, e = {}) {
            const r = { ...e,
                    cancelRefetch: e.cancelRefetch ? ? !0
                },
                n = Ee.batch(() => S(this, ie).findAll(t).filter(s => !s.isDisabled() && !s.isStatic()).map(s => {
                    let a = s.fetch(void 0, r);
                    return r.throwOnError || (a = a.catch(Je)), s.state.fetchStatus === "paused" ? Promise.resolve() : a
                }));
            return Promise.all(n).then(Je)
        }
        fetchQuery(t) {
            const e = this.defaultQueryOptions(t);
            e.retry === void 0 && (e.retry = !1);
            const r = S(this, ie).build(this, e);
            return r.isStaleByTime(ws(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(Je).catch(Je)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = ea(t.pages), this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(Je).catch(Je)
        }
        ensureInfiniteQueryData(t) {
            return t.behavior = ea(t.pages), this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return Un.isOnline() ? S(this, jt).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return S(this, ie)
        }
        getMutationCache() {
            return S(this, jt)
        }
        getDefaultOptions() {
            return S(this, Nt)
        }
        setDefaultOptions(t) {
            q(this, Nt, t)
        }
        setQueryDefaults(t, e) {
            S(this, Tr).set(tn(t), {
                queryKey: t,
                defaultOptions: e
            })
        }
        getQueryDefaults(t) {
            const e = [...S(this, Tr).values()],
                r = {};
            return e.forEach(n => {
                rn(t, n.queryKey) && Object.assign(r, n.defaultOptions)
            }), r
        }
        setMutationDefaults(t, e) {
            S(this, Cr).set(tn(t), {
                mutationKey: t,
                defaultOptions: e
            })
        }
        getMutationDefaults(t) {
            const e = [...S(this, Cr).values()],
                r = {};
            return e.forEach(n => {
                rn(t, n.mutationKey) && Object.assign(r, n.defaultOptions)
            }), r
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const e = { ...S(this, Nt).queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return e.queryHash || (e.queryHash = Us(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Bs && (e.enabled = !1), e
        }
        defaultMutationOptions(t) {
            return t != null && t._defaulted ? t : { ...S(this, Nt).mutations,
                ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            S(this, ie).clear(), S(this, jt).clear()
        }
    }, ie = new WeakMap, jt = new WeakMap, Nt = new WeakMap, Tr = new WeakMap, Cr = new WeakMap, It = new WeakMap, Ar = new WeakMap, Pr = new WeakMap, mi),
    bl = g.createContext(void 0),
    wl = ({
        client: t,
        children: e
    }) => (g.useEffect(() => (t.mount(), () => {
        t.unmount()
    }), [t]), p.jsx(bl.Provider, {
        value: t,
        children: e
    }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function nn() {
    return nn = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, nn.apply(this, arguments)
}
var Lt;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(Lt || (Lt = {}));
const ra = "popstate";

function _l(t) {
    t === void 0 && (t = {});

    function e(n, s) {
        let {
            pathname: a,
            search: i,
            hash: o
        } = n.location;
        return xs("", {
            pathname: a,
            search: i,
            hash: o
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }

    function r(n, s) {
        return typeof s == "string" ? s : $i(s)
    }
    return kl(e, r, null, t)
}

function he(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function Li(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function xl() {
    return Math.random().toString(36).substr(2, 8)
}

function na(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function xs(t, e, r, n) {
    return r === void 0 && (r = null), nn({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Or(e) : e, {
        state: r,
        key: e && e.key || n || xl()
    })
}

function $i(t) {
    let {
        pathname: e = "/",
        search: r = "",
        hash: n = ""
    } = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e
}

function Or(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r), t = t.substr(0, r));
        let n = t.indexOf("?");
        n >= 0 && (e.search = t.substr(n), t = t.substr(0, n)), t && (e.pathname = t)
    }
    return e
}

function kl(t, e, r, n) {
    n === void 0 && (n = {});
    let {
        window: s = document.defaultView,
        v5Compat: a = !1
    } = n, i = s.history, o = Lt.Pop, l = null, c = u();
    c == null && (c = 0, i.replaceState(nn({}, i.state, {
        idx: c
    }), ""));

    function u() {
        return (i.state || {
            idx: null
        }).idx
    }

    function d() {
        o = Lt.Pop;
        let y = u(),
            k = y == null ? null : y - c;
        c = y, l && l({
            action: o,
            location: m.location,
            delta: k
        })
    }

    function f(y, k) {
        o = Lt.Push;
        let E = xs(m.location, y, k);
        c = u() + 1;
        let w = na(E, c),
            P = m.createHref(E);
        try {
            i.pushState(w, "", P)
        } catch (U) {
            if (U instanceof DOMException && U.name === "DataCloneError") throw U;
            s.location.assign(P)
        }
        a && l && l({
            action: o,
            location: m.location,
            delta: 1
        })
    }

    function h(y, k) {
        o = Lt.Replace;
        let E = xs(m.location, y, k);
        c = u();
        let w = na(E, c),
            P = m.createHref(E);
        i.replaceState(w, "", P), a && l && l({
            action: o,
            location: m.location,
            delta: 0
        })
    }

    function b(y) {
        let k = s.location.origin !== "null" ? s.location.origin : s.location.href,
            E = typeof y == "string" ? y : $i(y);
        return E = E.replace(/ $/, "%20"), he(k, "No window.location.(origin|href) available to create URL for href: " + E), new URL(E, k)
    }
    let m = {
        get action() {
            return o
        },
        get location() {
            return t(s, i)
        },
        listen(y) {
            if (l) throw new Error("A history only accepts one active listener");
            return s.addEventListener(ra, d), l = y, () => {
                s.removeEventListener(ra, d), l = null
            }
        },
        createHref(y) {
            return e(s, y)
        },
        createURL: b,
        encodeLocation(y) {
            let k = b(y);
            return {
                pathname: k.pathname,
                search: k.search,
                hash: k.hash
            }
        },
        push: f,
        replace: h,
        go(y) {
            return i.go(y)
        }
    };
    return m
}
var sa;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(sa || (sa = {}));

function Sl(t, e, r) {
    return r === void 0 && (r = "/"), El(t, e, r, !1)
}

function El(t, e, r, n) {
    let s = typeof e == "string" ? Or(e) : e,
        a = Ui(s.pathname || "/", r);
    if (a == null) return null;
    let i = Di(t);
    Tl(i);
    let o = null;
    for (let l = 0; o == null && l < i.length; ++l) {
        let c = Dl(a);
        o = Ll(i[l], c, n)
    }
    return o
}

function Di(t, e, r, n) {
    e === void 0 && (e = []), r === void 0 && (r = []), n === void 0 && (n = "");
    let s = (a, i, o) => {
        let l = {
            relativePath: o === void 0 ? a.path || "" : o,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: i,
            route: a
        };
        l.relativePath.startsWith("/") && (he(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(n.length));
        let c = nr([n, l.relativePath]),
            u = r.concat(l);
        a.children && a.children.length > 0 && (he(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), Di(a.children, e, u, c)), !(a.path == null && !a.index) && e.push({
            path: c,
            score: Nl(c, a.index),
            routesMeta: u
        })
    };
    return t.forEach((a, i) => {
        var o;
        if (a.path === "" || !((o = a.path) != null && o.includes("?"))) s(a, i);
        else
            for (let l of Mi(a.path)) s(a, i, l)
    }), e
}

function Mi(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [r, ...n] = e, s = r.endsWith("?"), a = r.replace(/\?$/, "");
    if (n.length === 0) return s ? [a, ""] : [a];
    let i = Mi(n.join("/")),
        o = [];
    return o.push(...i.map(l => l === "" ? a : [a, l].join("/"))), s && o.push(...i), o.map(l => t.startsWith("/") && l === "" ? "/" : l)
}

function Tl(t) {
    t.sort((e, r) => e.score !== r.score ? r.score - e.score : Il(e.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const Cl = /^:[\w-]+$/,
    Al = 3,
    Pl = 2,
    Rl = 1,
    Ol = 10,
    jl = -2,
    aa = t => t === "*";

function Nl(t, e) {
    let r = t.split("/"),
        n = r.length;
    return r.some(aa) && (n += jl), e && (n += Pl), r.filter(s => !aa(s)).reduce((s, a) => s + (Cl.test(a) ? Al : a === "" ? Rl : Ol), n)
}

function Il(t, e) {
    return t.length === e.length && t.slice(0, -1).every((n, s) => n === e[s]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function Ll(t, e, r) {
    let {
        routesMeta: n
    } = t, s = {}, a = "/", i = [];
    for (let o = 0; o < n.length; ++o) {
        let l = n[o],
            c = o === n.length - 1,
            u = a === "/" ? e : e.slice(a.length) || "/",
            d = ia({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: c
            }, u),
            f = l.route;
        if (!d && c && r && !n[n.length - 1].route.index && (d = ia({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, u)), !d) return null;
        Object.assign(s, d.params), i.push({
            params: s,
            pathname: nr([a, d.pathname]),
            pathnameBase: Wl(nr([a, d.pathnameBase])),
            route: f
        }), d.pathnameBase !== "/" && (a = nr([a, d.pathnameBase]))
    }
    return i
}

function ia(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [r, n] = $l(t.path, t.caseSensitive, t.end), s = e.match(r);
    if (!s) return null;
    let a = s[0],
        i = a.replace(/(.)\/+$/, "$1"),
        o = s.slice(1);
    return {
        params: n.reduce((c, u, d) => {
            let {
                paramName: f,
                isOptional: h
            } = u;
            if (f === "*") {
                let m = o[d] || "";
                i = a.slice(0, a.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const b = o[d];
            return h && !b ? c[f] = void 0 : c[f] = (b || "").replace(/%2F/g, "/"), c
        }, {}),
        pathname: a,
        pathnameBase: i,
        pattern: t
    }
}

function $l(t, e, r) {
    e === void 0 && (e = !1), r === void 0 && (r = !0), Li(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let n = [],
        s = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, o, l) => (n.push({
            paramName: o,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (n.push({
        paramName: "*"
    }), s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, e ? void 0 : "i"), n]
}

function Dl(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Li(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
    }
}

function Ui(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length,
        n = t.charAt(r);
    return n && n !== "/" ? null : t.slice(r) || "/"
}

function Ml(t, e) {
    e === void 0 && (e = "/");
    let {
        pathname: r,
        search: n = "",
        hash: s = ""
    } = typeof t == "string" ? Or(t) : t;
    return {
        pathname: r ? r.startsWith("/") ? r : Ul(r, e) : e,
        search: Hl(n),
        hash: zl(s)
    }
}

function Ul(t, e) {
    let r = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(s => {
        s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s)
    }), r.length > 1 ? r.join("/") : "/"
}

function cs(t, e, r, n) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Bl(t) {
    return t.filter((e, r) => r === 0 || e.route.path && e.route.path.length > 0)
}

function ql(t, e) {
    let r = Bl(t);
    return e ? r.map((n, s) => s === r.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}

function Fl(t, e, r, n) {
    n === void 0 && (n = !1);
    let s;
    typeof t == "string" ? s = Or(t) : (s = nn({}, t), he(!s.pathname || !s.pathname.includes("?"), cs("?", "pathname", "search", s)), he(!s.pathname || !s.pathname.includes("#"), cs("#", "pathname", "hash", s)), he(!s.search || !s.search.includes("#"), cs("#", "search", "hash", s)));
    let a = t === "" || s.pathname === "",
        i = a ? "/" : s.pathname,
        o;
    if (i == null) o = r;
    else {
        let d = e.length - 1;
        if (!n && i.startsWith("..")) {
            let f = i.split("/");
            for (; f[0] === "..";) f.shift(), d -= 1;
            s.pathname = f.join("/")
        }
        o = d >= 0 ? e[d] : "/"
    }
    let l = Ml(s, o),
        c = i && i !== "/" && i.endsWith("/"),
        u = (a || i === ".") && r.endsWith("/");
    return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l
}
const nr = t => t.join("/").replace(/\/\/+/g, "/"),
    Wl = t => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Hl = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t,
    zl = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;

function Vl(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const Bi = ["post", "put", "patch", "delete"];
new Set(Bi);
const Kl = ["get", ...Bi];
new Set(Kl);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function sn() {
    return sn = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, sn.apply(this, arguments)
}
const qs = g.createContext(null),
    Gl = g.createContext(null),
    Gn = g.createContext(null),
    Jn = g.createContext(null),
    jr = g.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    qi = g.createContext(null);

function Yn() {
    return g.useContext(Jn) != null
}

function Fs() {
    return Yn() || he(!1), g.useContext(Jn).location
}

function Fi(t) {
    g.useContext(Gn).static || g.useLayoutEffect(t)
}

function Jl() {
    let {
        isDataRoute: t
    } = g.useContext(jr);
    return t ? lc() : Yl()
}

function Yl() {
    Yn() || he(!1);
    let t = g.useContext(qs),
        {
            basename: e,
            future: r,
            navigator: n
        } = g.useContext(Gn),
        {
            matches: s
        } = g.useContext(jr),
        {
            pathname: a
        } = Fs(),
        i = JSON.stringify(ql(s, r.v7_relativeSplatPath)),
        o = g.useRef(!1);
    return Fi(() => {
        o.current = !0
    }), g.useCallback(function(c, u) {
        if (u === void 0 && (u = {}), !o.current) return;
        if (typeof c == "number") {
            n.go(c);
            return
        }
        let d = Fl(c, JSON.parse(i), a, u.relative === "path");
        t == null && e !== "/" && (d.pathname = d.pathname === "/" ? e : nr([e, d.pathname])), (u.replace ? n.replace : n.push)(d, u.state, u)
    }, [e, n, i, a, t])
}

function Ql(t, e) {
    return Xl(t, e)
}

function Xl(t, e, r, n) {
    Yn() || he(!1);
    let {
        navigator: s
    } = g.useContext(Gn), {
        matches: a
    } = g.useContext(jr), i = a[a.length - 1], o = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let c = Fs(),
        u;
    if (e) {
        var d;
        let y = typeof e == "string" ? Or(e) : e;
        l === "/" || (d = y.pathname) != null && d.startsWith(l) || he(!1), u = y
    } else u = c;
    let f = u.pathname || "/",
        h = f;
    if (l !== "/") {
        let y = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let b = Sl(t, {
            pathname: h
        }),
        m = nc(b && b.map(y => Object.assign({}, y, {
            params: Object.assign({}, o, y.params),
            pathname: nr([l, s.encodeLocation ? s.encodeLocation(y.pathname).pathname : y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? l : nr([l, s.encodeLocation ? s.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
        })), a, r, n);
    return e && m ? g.createElement(Jn.Provider, {
        value: {
            location: sn({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: Lt.Pop
        }
    }, m) : m
}

function Zl() {
    let t = oc(),
        e = Vl(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        r = t instanceof Error ? t.stack : null,
        s = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return g.createElement(g.Fragment, null, g.createElement("h2", null, "Unexpected Application Error!"), g.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? g.createElement("pre", {
        style: s
    }, r) : null, null)
}
const ec = g.createElement(Zl, null);
class tc extends g.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? g.createElement(jr.Provider, {
            value: this.props.routeContext
        }, g.createElement(qi.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function rc(t) {
    let {
        routeContext: e,
        match: r,
        children: n
    } = t, s = g.useContext(qs);
    return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id), g.createElement(jr.Provider, {
        value: e
    }, n)
}

function nc(t, e, r, n) {
    var s;
    if (e === void 0 && (e = []), r === void 0 && (r = null), n === void 0 && (n = null), t == null) {
        var a;
        if (!r) return null;
        if (r.errors) t = r.matches;
        else if ((a = n) != null && a.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0) t = r.matches;
        else return null
    }
    let i = t,
        o = (s = r) == null ? void 0 : s.errors;
    if (o != null) {
        let u = i.findIndex(d => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0);
        u >= 0 || he(!1), i = i.slice(0, Math.min(i.length, u + 1))
    }
    let l = !1,
        c = -1;
    if (r && n && n.v7_partialHydration)
        for (let u = 0; u < i.length; u++) {
            let d = i[u];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u), d.route.id) {
                let {
                    loaderData: f,
                    errors: h
                } = r, b = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || b) {
                    l = !0, c >= 0 ? i = i.slice(0, c + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((u, d, f) => {
        let h, b = !1,
            m = null,
            y = null;
        r && (h = o && d.route.id ? o[d.route.id] : void 0, m = d.route.errorElement || ec, l && (c < 0 && f === 0 ? (b = !0, y = null) : c === f && (b = !0, y = d.route.hydrateFallbackElement || null)));
        let k = e.concat(i.slice(0, f + 1)),
            E = () => {
                let w;
                return h ? w = m : b ? w = y : d.route.Component ? w = g.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = u, g.createElement(rc, {
                    match: d,
                    routeContext: {
                        outlet: u,
                        matches: k,
                        isDataRoute: r != null
                    },
                    children: w
                })
            };
        return r && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? g.createElement(tc, {
            location: r.location,
            revalidation: r.revalidation,
            component: m,
            error: h,
            children: E(),
            routeContext: {
                outlet: null,
                matches: k,
                isDataRoute: !0
            }
        }) : E()
    }, null)
}
var Wi = function(t) {
        return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t
    }(Wi || {}),
    Bn = function(t) {
        return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
    }(Bn || {});

function sc(t) {
    let e = g.useContext(qs);
    return e || he(!1), e
}

function ac(t) {
    let e = g.useContext(Gl);
    return e || he(!1), e
}

function ic(t) {
    let e = g.useContext(jr);
    return e || he(!1), e
}

function Hi(t) {
    let e = ic(),
        r = e.matches[e.matches.length - 1];
    return r.route.id || he(!1), r.route.id
}

function oc() {
    var t;
    let e = g.useContext(qi),
        r = ac(Bn.UseRouteError),
        n = Hi(Bn.UseRouteError);
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[n]
}

function lc() {
    let {
        router: t
    } = sc(Wi.UseNavigateStable), e = Hi(Bn.UseNavigateStable), r = g.useRef(!1);
    return Fi(() => {
        r.current = !0
    }), g.useCallback(function(s, a) {
        a === void 0 && (a = {}), r.current && (typeof s == "number" ? t.navigate(s) : t.navigate(s, sn({
            fromRouteId: e
        }, a)))
    }, [t, e])
}

function cc(t, e) {
    t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath
}

function nt(t) {
    he(!1)
}

function uc(t) {
    let {
        basename: e = "/",
        children: r = null,
        location: n,
        navigationType: s = Lt.Pop,
        navigator: a,
        static: i = !1,
        future: o
    } = t;
    Yn() && he(!1);
    let l = e.replace(/^\/*/, "/"),
        c = g.useMemo(() => ({
            basename: l,
            navigator: a,
            static: i,
            future: sn({
                v7_relativeSplatPath: !1
            }, o)
        }), [l, o, a, i]);
    typeof n == "string" && (n = Or(n));
    let {
        pathname: u = "/",
        search: d = "",
        hash: f = "",
        state: h = null,
        key: b = "default"
    } = n, m = g.useMemo(() => {
        let y = Ui(u, l);
        return y == null ? null : {
            location: {
                pathname: y,
                search: d,
                hash: f,
                state: h,
                key: b
            },
            navigationType: s
        }
    }, [l, u, d, f, h, b, s]);
    return m == null ? null : g.createElement(Gn.Provider, {
        value: c
    }, g.createElement(Jn.Provider, {
        children: r,
        value: m
    }))
}

function dc(t) {
    let {
        children: e,
        location: r
    } = t;
    return Ql(ks(e), r)
}
new Promise(() => {});

function ks(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return g.Children.forEach(t, (n, s) => {
        if (!g.isValidElement(n)) return;
        let a = [...e, s];
        if (n.type === g.Fragment) {
            r.push.apply(r, ks(n.props.children, a));
            return
        }
        n.type !== nt && he(!1), !n.props.index || !n.props.children || he(!1);
        let i = {
            id: n.props.id || a.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (i.children = ks(n.props.children, a)), r.push(i)
    }), r
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const hc = "6";
try {
    window.__reactRouterVersion = hc
} catch {}
const fc = "startTransition",
    oa = Lo[fc];

function pc(t) {
    let {
        basename: e,
        children: r,
        future: n,
        window: s
    } = t, a = g.useRef();
    a.current == null && (a.current = _l({
        window: s,
        v5Compat: !0
    }));
    let i = a.current,
        [o, l] = g.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: c
        } = n || {},
        u = g.useCallback(d => {
            c && oa ? oa(() => l(d)) : l(d)
        }, [l, c]);
    return g.useLayoutEffect(() => i.listen(u), [i, u]), g.useEffect(() => cc(n), [n]), g.createElement(uc, {
        basename: e,
        children: r,
        location: o.location,
        navigationType: o.action,
        navigator: i,
        future: n
    })
}
var la;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(la || (la = {}));
var ca;
(function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(ca || (ca = {}));
var ua = ["light", "dark"],
    mc = "(prefers-color-scheme: dark)",
    gc = g.createContext(void 0),
    yc = {
        setTheme: t => {},
        themes: []
    },
    vc = () => {
        var t;
        return (t = g.useContext(gc)) != null ? t : yc
    };
g.memo(({
    forcedTheme: t,
    storageKey: e,
    attribute: r,
    enableSystem: n,
    enableColorScheme: s,
    defaultTheme: a,
    value: i,
    attrs: o,
    nonce: l
}) => {
    let c = a === "system",
        u = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${o.map(b=>`'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`,
        d = s ? ua.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        f = (b, m = !1, y = !0) => {
            let k = i ? i[b] : b,
                E = m ? b + "|| ''" : `'${k}'`,
                w = "";
            return s && y && !m && ua.includes(b) && (w += `d.style.colorScheme = '${b}';`), r === "class" ? m || k ? w += `c.add(${E})` : w += "null" : k && (w += `d[s](n,${E})`), w
        },
        h = t ? `!function(){${u}${f(t)}}()` : n ? `!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${mc}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${f(i?"x[e]":"e",!0)}}${c?"":"else{"+f(a,!1,!1)+"}"}${d}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${f(i?"x[e]":"e",!0)}}else{${f(a,!1,!1)};}${d}}catch(t){}}();`;
    return g.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
});
var bc = t => {
        switch (t) {
            case "success":
                return xc;
            case "info":
                return Sc;
            case "warning":
                return kc;
            case "error":
                return Ec;
            default:
                return null
        }
    },
    wc = Array(12).fill(0),
    _c = ({
        visible: t,
        className: e
    }) => A.createElement("div", {
        className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
        "data-visible": t
    }, A.createElement("div", {
        className: "sonner-spinner"
    }, wc.map((r, n) => A.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${n}`
    })))),
    xc = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    kc = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    Sc = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    Ec = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    Tc = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, A.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), A.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    Cc = () => {
        let [t, e] = A.useState(document.hidden);
        return A.useEffect(() => {
            let r = () => {
                e(document.hidden)
            };
            return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r)
        }, []), t
    },
    Ss = 1,
    Ac = class {
        constructor() {
            this.subscribe = t => (this.subscribers.push(t), () => {
                let e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1)
            }), this.publish = t => {
                this.subscribers.forEach(e => e(t))
            }, this.addToast = t => {
                this.publish(t), this.toasts = [...this.toasts, t]
            }, this.create = t => {
                var e;
                let {
                    message: r,
                    ...n
                } = t, s = typeof(t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : Ss++, a = this.toasts.find(o => o.id === s), i = t.dismissible === void 0 ? !0 : t.dismissible;
                return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), a ? this.toasts = this.toasts.map(o => o.id === s ? (this.publish({ ...o,
                    ...t,
                    id: s,
                    title: r
                }), { ...o,
                    ...t,
                    id: s,
                    dismissible: i,
                    title: r
                }) : o) : this.addToast({
                    title: r,
                    ...n,
                    dismissible: i,
                    id: s
                }), s
            }, this.dismiss = t => (this.dismissedToasts.add(t), t || this.toasts.forEach(e => {
                this.subscribers.forEach(r => r({
                    id: e.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(e => e({
                id: t,
                dismiss: !0
            })), t), this.message = (t, e) => this.create({ ...e,
                message: t
            }), this.error = (t, e) => this.create({ ...e,
                message: t,
                type: "error"
            }), this.success = (t, e) => this.create({ ...e,
                type: "success",
                message: t
            }), this.info = (t, e) => this.create({ ...e,
                type: "info",
                message: t
            }), this.warning = (t, e) => this.create({ ...e,
                type: "warning",
                message: t
            }), this.loading = (t, e) => this.create({ ...e,
                type: "loading",
                message: t
            }), this.promise = (t, e) => {
                if (!e) return;
                let r;
                e.loading !== void 0 && (r = this.create({ ...e,
                    promise: t,
                    type: "loading",
                    message: e.loading,
                    description: typeof e.description != "function" ? e.description : void 0
                }));
                let n = t instanceof Promise ? t : t(),
                    s = r !== void 0,
                    a, i = n.then(async l => {
                        if (a = ["resolve", l], A.isValidElement(l)) s = !1, this.create({
                            id: r,
                            type: "default",
                            message: l
                        });
                        else if (Rc(l) && !l.ok) {
                            s = !1;
                            let c = typeof e.error == "function" ? await e.error(`HTTP error! status: ${l.status}`) : e.error,
                                u = typeof e.description == "function" ? await e.description(`HTTP error! status: ${l.status}`) : e.description;
                            this.create({
                                id: r,
                                type: "error",
                                message: c,
                                description: u
                            })
                        } else if (e.success !== void 0) {
                            s = !1;
                            let c = typeof e.success == "function" ? await e.success(l) : e.success,
                                u = typeof e.description == "function" ? await e.description(l) : e.description;
                            this.create({
                                id: r,
                                type: "success",
                                message: c,
                                description: u
                            })
                        }
                    }).catch(async l => {
                        if (a = ["reject", l], e.error !== void 0) {
                            s = !1;
                            let c = typeof e.error == "function" ? await e.error(l) : e.error,
                                u = typeof e.description == "function" ? await e.description(l) : e.description;
                            this.create({
                                id: r,
                                type: "error",
                                message: c,
                                description: u
                            })
                        }
                    }).finally(() => {
                        var l;
                        s && (this.dismiss(r), r = void 0), (l = e.finally) == null || l.call(e)
                    }),
                    o = () => new Promise((l, c) => i.then(() => a[0] === "reject" ? c(a[1]) : l(a[1])).catch(c));
                return typeof r != "string" && typeof r != "number" ? {
                    unwrap: o
                } : Object.assign(r, {
                    unwrap: o
                })
            }, this.custom = (t, e) => {
                let r = (e == null ? void 0 : e.id) || Ss++;
                return this.create({
                    jsx: t(r),
                    id: r,
                    ...e
                }), r
            }, this.getActiveToasts = () => this.toasts.filter(t => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    Re = new Ac,
    Pc = (t, e) => {
        let r = (e == null ? void 0 : e.id) || Ss++;
        return Re.addToast({
            title: t,
            ...e,
            id: r
        }), r
    },
    Rc = t => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number",
    Oc = Pc,
    jc = () => Re.toasts,
    Nc = () => Re.getActiveToasts(),
    tg = Object.assign(Oc, {
        success: Re.success,
        info: Re.info,
        warning: Re.warning,
        error: Re.error,
        custom: Re.custom,
        message: Re.message,
        promise: Re.promise,
        dismiss: Re.dismiss,
        loading: Re.loading
    }, {
        getHistory: jc,
        getToasts: Nc
    });

function Ic(t, {
    insertAt: e
} = {}) {
    if (typeof document > "u") return;
    let r = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
    n.type = "text/css", e === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t))
}
Ic(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Tn(t) {
    return t.label !== void 0
}
var Lc = 3,
    $c = "32px",
    Dc = "16px",
    da = 4e3,
    Mc = 356,
    Uc = 14,
    Bc = 20,
    qc = 200;

function Ke(...t) {
    return t.filter(Boolean).join(" ")
}

function Fc(t) {
    let [e, r] = t.split("-"), n = [];
    return e && n.push(e), r && n.push(r), n
}
var Wc = t => {
    var e, r, n, s, a, i, o, l, c, u, d;
    let {
        invert: f,
        toast: h,
        unstyled: b,
        interacting: m,
        setHeights: y,
        visibleToasts: k,
        heights: E,
        index: w,
        toasts: P,
        expanded: U,
        removeToast: L,
        defaultRichColors: H,
        closeButton: me,
        style: F,
        cancelButtonStyle: fe,
        actionButtonStyle: X,
        className: j = "",
        descriptionClassName: Me = "",
        duration: ce,
        position: et,
        gap: xe,
        loadingIcon: ve,
        expandByDefault: Ue,
        classNames: D,
        icons: ae,
        closeButtonAriaLabel: be = "Close toast",
        pauseWhenPageIsHidden: K
    } = t, [Y, z] = A.useState(null), [pe, He] = A.useState(null), [G, ut] = A.useState(!1), [$t, Lr] = A.useState(!1), [Dt, Mt] = A.useState(!1), [yn, vn] = A.useState(!1), [$r, Ut] = A.useState(!1), [Te, _t] = A.useState(0), [bn, Dr] = A.useState(0), dt = A.useRef(h.duration || ce || da), Bt = A.useRef(null), je = A.useRef(null), Mr = w === 0, wn = w + 1 <= k, Ce = h.type, ht = h.dismissible !== !1, _n = h.className || "", ss = h.descriptionClassName || "", qt = A.useMemo(() => E.findIndex($ => $.toastId === h.id) || 0, [E, h.id]), as = A.useMemo(() => {
        var $;
        return ($ = h.closeButton) != null ? $ : me
    }, [h.closeButton, me]), Ft = A.useMemo(() => h.duration || ce || da, [h.duration, ce]), Z = A.useRef(0), ze = A.useRef(0), Ur = A.useRef(0), ft = A.useRef(null), [xn, is] = et.split("-"), ir = A.useMemo(() => E.reduce(($, J, ee) => ee >= qt ? $ : $ + J.height, 0), [E, qt]), Br = Cc(), qr = h.invert || f, pt = Ce === "loading";
    ze.current = A.useMemo(() => qt * xe + ir, [qt, ir]), A.useEffect(() => {
        dt.current = Ft
    }, [Ft]), A.useEffect(() => {
        ut(!0)
    }, []), A.useEffect(() => {
        let $ = je.current;
        if ($) {
            let J = $.getBoundingClientRect().height;
            return Dr(J), y(ee => [{
                toastId: h.id,
                height: J,
                position: h.position
            }, ...ee]), () => y(ee => ee.filter(Ie => Ie.toastId !== h.id))
        }
    }, [y, h.id]), A.useLayoutEffect(() => {
        if (!G) return;
        let $ = je.current,
            J = $.style.height;
        $.style.height = "auto";
        let ee = $.getBoundingClientRect().height;
        $.style.height = J, Dr(ee), y(Ie => Ie.find(Le => Le.toastId === h.id) ? Ie.map(Le => Le.toastId === h.id ? { ...Le,
            height: ee
        } : Le) : [{
            toastId: h.id,
            height: ee,
            position: h.position
        }, ...Ie])
    }, [G, h.title, h.description, y, h.id]);
    let Ne = A.useCallback(() => {
        Lr(!0), _t(ze.current), y($ => $.filter(J => J.toastId !== h.id)), setTimeout(() => {
            L(h)
        }, qc)
    }, [h, L, y, ze]);
    A.useEffect(() => {
        if (h.promise && Ce === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
        let $;
        return U || m || K && Br ? (() => {
            if (Ur.current < Z.current) {
                let J = new Date().getTime() - Z.current;
                dt.current = dt.current - J
            }
            Ur.current = new Date().getTime()
        })() : dt.current !== 1 / 0 && (Z.current = new Date().getTime(), $ = setTimeout(() => {
            var J;
            (J = h.onAutoClose) == null || J.call(h, h), Ne()
        }, dt.current)), () => clearTimeout($)
    }, [U, m, h, Ce, K, Br, Ne]), A.useEffect(() => {
        h.delete && Ne()
    }, [Ne, h.delete]);

    function kn() {
        var $, J, ee;
        return ae != null && ae.loading ? A.createElement("div", {
            className: Ke(D == null ? void 0 : D.loader, ($ = h == null ? void 0 : h.classNames) == null ? void 0 : $.loader, "sonner-loader"),
            "data-visible": Ce === "loading"
        }, ae.loading) : ve ? A.createElement("div", {
            className: Ke(D == null ? void 0 : D.loader, (J = h == null ? void 0 : h.classNames) == null ? void 0 : J.loader, "sonner-loader"),
            "data-visible": Ce === "loading"
        }, ve) : A.createElement(_c, {
            className: Ke(D == null ? void 0 : D.loader, (ee = h == null ? void 0 : h.classNames) == null ? void 0 : ee.loader),
            visible: Ce === "loading"
        })
    }
    return A.createElement("li", {
        tabIndex: 0,
        ref: je,
        className: Ke(j, _n, D == null ? void 0 : D.toast, (e = h == null ? void 0 : h.classNames) == null ? void 0 : e.toast, D == null ? void 0 : D.default, D == null ? void 0 : D[Ce], (r = h == null ? void 0 : h.classNames) == null ? void 0 : r[Ce]),
        "data-sonner-toast": "",
        "data-rich-colors": (n = h.richColors) != null ? n : H,
        "data-styled": !(h.jsx || h.unstyled || b),
        "data-mounted": G,
        "data-promise": !!h.promise,
        "data-swiped": $r,
        "data-removed": $t,
        "data-visible": wn,
        "data-y-position": xn,
        "data-x-position": is,
        "data-index": w,
        "data-front": Mr,
        "data-swiping": Dt,
        "data-dismissible": ht,
        "data-type": Ce,
        "data-invert": qr,
        "data-swipe-out": yn,
        "data-swipe-direction": pe,
        "data-expanded": !!(U || Ue && G),
        style: {
            "--index": w,
            "--toasts-before": w,
            "--z-index": P.length - w,
            "--offset": `${$t?Te:ze.current}px`,
            "--initial-height": Ue ? "auto" : `${bn}px`,
            ...F,
            ...h.style
        },
        onDragEnd: () => {
            Mt(!1), z(null), ft.current = null
        },
        onPointerDown: $ => {
            pt || !ht || (Bt.current = new Date, _t(ze.current), $.target.setPointerCapture($.pointerId), $.target.tagName !== "BUTTON" && (Mt(!0), ft.current = {
                x: $.clientX,
                y: $.clientY
            }))
        },
        onPointerUp: () => {
            var $, J, ee, Ie;
            if (yn || !ht) return;
            ft.current = null;
            let Le = Number((($ = je.current) == null ? void 0 : $.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                tt = Number(((J = je.current) == null ? void 0 : J.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                Be = new Date().getTime() - ((ee = Bt.current) == null ? void 0 : ee.getTime()),
                Ae = Y === "x" ? Le : tt,
                x = Math.abs(Ae) / Be;
            if (Math.abs(Ae) >= Bc || x > .11) {
                _t(ze.current), (Ie = h.onDismiss) == null || Ie.call(h, h), He(Y === "x" ? Le > 0 ? "right" : "left" : tt > 0 ? "down" : "up"), Ne(), vn(!0), Ut(!1);
                return
            }
            Mt(!1), z(null)
        },
        onPointerMove: $ => {
            var J, ee, Ie, Le;
            if (!ft.current || !ht || ((J = window.getSelection()) == null ? void 0 : J.toString().length) > 0) return;
            let tt = $.clientY - ft.current.y,
                Be = $.clientX - ft.current.x,
                Ae = (ee = t.swipeDirections) != null ? ee : Fc(et);
            !Y && (Math.abs(Be) > 1 || Math.abs(tt) > 1) && z(Math.abs(Be) > Math.abs(tt) ? "x" : "y");
            let x = {
                x: 0,
                y: 0
            };
            Y === "y" ? (Ae.includes("top") || Ae.includes("bottom")) && (Ae.includes("top") && tt < 0 || Ae.includes("bottom") && tt > 0) && (x.y = tt) : Y === "x" && (Ae.includes("left") || Ae.includes("right")) && (Ae.includes("left") && Be < 0 || Ae.includes("right") && Be > 0) && (x.x = Be), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && Ut(!0), (Ie = je.current) == null || Ie.style.setProperty("--swipe-amount-x", `${x.x}px`), (Le = je.current) == null || Le.style.setProperty("--swipe-amount-y", `${x.y}px`)
        }
    }, as && !h.jsx ? A.createElement("button", {
        "aria-label": be,
        "data-disabled": pt,
        "data-close-button": !0,
        onClick: pt || !ht ? () => {} : () => {
            var $;
            Ne(), ($ = h.onDismiss) == null || $.call(h, h)
        },
        className: Ke(D == null ? void 0 : D.closeButton, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.closeButton)
    }, (a = ae == null ? void 0 : ae.close) != null ? a : Tc) : null, h.jsx || g.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : A.createElement(A.Fragment, null, Ce || h.icon || h.promise ? A.createElement("div", {
        "data-icon": "",
        className: Ke(D == null ? void 0 : D.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || kn() : null, h.type !== "loading" ? h.icon || (ae == null ? void 0 : ae[Ce]) || bc(Ce) : null) : null, A.createElement("div", {
        "data-content": "",
        className: Ke(D == null ? void 0 : D.content, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.content)
    }, A.createElement("div", {
        "data-title": "",
        className: Ke(D == null ? void 0 : D.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? A.createElement("div", {
        "data-description": "",
        className: Ke(Me, ss, D == null ? void 0 : D.description, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), g.isValidElement(h.cancel) ? h.cancel : h.cancel && Tn(h.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || fe,
        onClick: $ => {
            var J, ee;
            Tn(h.cancel) && ht && ((ee = (J = h.cancel).onClick) == null || ee.call(J, $), Ne())
        },
        className: Ke(D == null ? void 0 : D.cancelButton, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.cancelButton)
    }, h.cancel.label) : null, g.isValidElement(h.action) ? h.action : h.action && Tn(h.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || X,
        onClick: $ => {
            var J, ee;
            Tn(h.action) && ((ee = (J = h.action).onClick) == null || ee.call(J, $), !$.defaultPrevented && Ne())
        },
        className: Ke(D == null ? void 0 : D.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
};

function ha() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t
}

function Hc(t, e) {
    let r = {};
    return [t, e].forEach((n, s) => {
        let a = s === 1,
            i = a ? "--mobile-offset" : "--offset",
            o = a ? Dc : $c;

        function l(c) {
            ["top", "right", "bottom", "left"].forEach(u => {
                r[`${i}-${u}`] = typeof c == "number" ? `${c}px` : c
            })
        }
        typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach(c => {
            n[c] === void 0 ? r[`${i}-${c}`] = o : r[`${i}-${c}`] = typeof n[c] == "number" ? `${n[c]}px` : n[c]
        }) : l(o)
    }), r
}
var zc = g.forwardRef(function(t, e) {
    let {
        invert: r,
        position: n = "bottom-right",
        hotkey: s = ["altKey", "KeyT"],
        expand: a,
        closeButton: i,
        className: o,
        offset: l,
        mobileOffset: c,
        theme: u = "light",
        richColors: d,
        duration: f,
        style: h,
        visibleToasts: b = Lc,
        toastOptions: m,
        dir: y = ha(),
        gap: k = Uc,
        loadingIcon: E,
        icons: w,
        containerAriaLabel: P = "Notifications",
        pauseWhenPageIsHidden: U
    } = t, [L, H] = A.useState([]), me = A.useMemo(() => Array.from(new Set([n].concat(L.filter(K => K.position).map(K => K.position)))), [L, n]), [F, fe] = A.useState([]), [X, j] = A.useState(!1), [Me, ce] = A.useState(!1), [et, xe] = A.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), ve = A.useRef(null), Ue = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), D = A.useRef(null), ae = A.useRef(!1), be = A.useCallback(K => {
        H(Y => {
            var z;
            return (z = Y.find(pe => pe.id === K.id)) != null && z.delete || Re.dismiss(K.id), Y.filter(({
                id: pe
            }) => pe !== K.id)
        })
    }, []);
    return A.useEffect(() => Re.subscribe(K => {
        if (K.dismiss) {
            H(Y => Y.map(z => z.id === K.id ? { ...z,
                delete: !0
            } : z));
            return
        }
        setTimeout(() => {
            Do.flushSync(() => {
                H(Y => {
                    let z = Y.findIndex(pe => pe.id === K.id);
                    return z !== -1 ? [...Y.slice(0, z), { ...Y[z],
                        ...K
                    }, ...Y.slice(z + 1)] : [K, ...Y]
                })
            })
        })
    }), []), A.useEffect(() => {
        if (u !== "system") {
            xe(u);
            return
        }
        if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? xe("dark") : xe("light")), typeof window > "u") return;
        let K = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            K.addEventListener("change", ({
                matches: Y
            }) => {
                xe(Y ? "dark" : "light")
            })
        } catch {
            K.addListener(({
                matches: z
            }) => {
                try {
                    xe(z ? "dark" : "light")
                } catch (pe) {
                    console.error(pe)
                }
            })
        }
    }, [u]), A.useEffect(() => {
        L.length <= 1 && j(!1)
    }, [L]), A.useEffect(() => {
        let K = Y => {
            var z, pe;
            s.every(He => Y[He] || Y.code === He) && (j(!0), (z = ve.current) == null || z.focus()), Y.code === "Escape" && (document.activeElement === ve.current || (pe = ve.current) != null && pe.contains(document.activeElement)) && j(!1)
        };
        return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K)
    }, [s]), A.useEffect(() => {
        if (ve.current) return () => {
            D.current && (D.current.focus({
                preventScroll: !0
            }), D.current = null, ae.current = !1)
        }
    }, [ve.current]), A.createElement("section", {
        ref: e,
        "aria-label": `${P} ${Ue}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, me.map((K, Y) => {
        var z;
        let [pe, He] = K.split("-");
        return L.length ? A.createElement("ol", {
            key: K,
            dir: y === "auto" ? ha() : y,
            tabIndex: -1,
            ref: ve,
            className: o,
            "data-sonner-toaster": !0,
            "data-theme": et,
            "data-y-position": pe,
            "data-lifted": X && L.length > 1 && !a,
            "data-x-position": He,
            style: {
                "--front-toast-height": `${((z=F[0])==null?void 0:z.height)||0}px`,
                "--width": `${Mc}px`,
                "--gap": `${k}px`,
                ...h,
                ...Hc(l, c)
            },
            onBlur: G => {
                ae.current && !G.currentTarget.contains(G.relatedTarget) && (ae.current = !1, D.current && (D.current.focus({
                    preventScroll: !0
                }), D.current = null))
            },
            onFocus: G => {
                G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || ae.current || (ae.current = !0, D.current = G.relatedTarget)
            },
            onMouseEnter: () => j(!0),
            onMouseMove: () => j(!0),
            onMouseLeave: () => {
                Me || j(!1)
            },
            onDragEnd: () => j(!1),
            onPointerDown: G => {
                G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || ce(!0)
            },
            onPointerUp: () => ce(!1)
        }, L.filter(G => !G.position && Y === 0 || G.position === K).map((G, ut) => {
            var $t, Lr;
            return A.createElement(Wc, {
                key: G.id,
                icons: w,
                index: ut,
                toast: G,
                defaultRichColors: d,
                duration: ($t = m == null ? void 0 : m.duration) != null ? $t : f,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: r,
                visibleToasts: b,
                closeButton: (Lr = m == null ? void 0 : m.closeButton) != null ? Lr : i,
                interacting: Me,
                position: K,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: be,
                toasts: L.filter(Dt => Dt.position == G.position),
                heights: F.filter(Dt => Dt.position == G.position),
                setHeights: fe,
                expandByDefault: a,
                gap: k,
                loadingIcon: E,
                expanded: X,
                pauseWhenPageIsHidden: U,
                swipeDirections: t.swipeDirections
            })
        })) : null
    }))
});
const Vc = ({ ...t
    }) => {
        const {
            theme: e = "system"
        } = vc();
        return p.jsx(zc, {
            theme: e,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...t
        })
    },
    Kc = 1,
    Gc = 1e6;
let us = 0;

function Jc() {
    return us = (us + 1) % Number.MAX_SAFE_INTEGER, us.toString()
}
const ds = new Map,
    fa = t => {
        if (ds.has(t)) return;
        const e = setTimeout(() => {
            ds.delete(t), Qr({
                type: "REMOVE_TOAST",
                toastId: t
            })
        }, Gc);
        ds.set(t, e)
    },
    Yc = (t, e) => {
        switch (e.type) {
            case "ADD_TOAST":
                return { ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, Kc)
                };
            case "UPDATE_TOAST":
                return { ...t,
                    toasts: t.toasts.map(r => r.id === e.toast.id ? { ...r,
                        ...e.toast
                    } : r)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: r
                    } = e;
                    return r ? fa(r) : t.toasts.forEach(n => {
                        fa(n.id)
                    }),
                    { ...t,
                        toasts: t.toasts.map(n => n.id === r || r === void 0 ? { ...n,
                            open: !1
                        } : n)
                    }
                }
            case "REMOVE_TOAST":
                return e.toastId === void 0 ? { ...t,
                    toasts: []
                } : { ...t,
                    toasts: t.toasts.filter(r => r.id !== e.toastId)
                }
        }
    },
    $n = [];
let Dn = {
    toasts: []
};

function Qr(t) {
    Dn = Yc(Dn, t), $n.forEach(e => {
        e(Dn)
    })
}

function Qc({ ...t
}) {
    const e = Jc(),
        r = s => Qr({
            type: "UPDATE_TOAST",
            toast: { ...s,
                id: e
            }
        }),
        n = () => Qr({
            type: "DISMISS_TOAST",
            toastId: e
        });
    return Qr({
        type: "ADD_TOAST",
        toast: { ...t,
            id: e,
            open: !0,
            onOpenChange: s => {
                s || n()
            }
        }
    }), {
        id: e,
        dismiss: n,
        update: r
    }
}

function Xc() {
    const [t, e] = g.useState(Dn);
    return g.useEffect(() => ($n.push(e), () => {
        const r = $n.indexOf(e);
        r > -1 && $n.splice(r, 1)
    }), [t]), { ...t,
        toast: Qc,
        dismiss: r => Qr({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
const pa = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
    ma = vi,
    Zc = (t, e) => r => {
        var n;
        if ((e == null ? void 0 : e.variants) == null) return ma(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
        const {
            variants: s,
            defaultVariants: a
        } = e, i = Object.keys(s).map(c => {
            const u = r == null ? void 0 : r[c],
                d = a == null ? void 0 : a[c];
            if (u === null) return null;
            const f = pa(u) || pa(d);
            return s[c][f]
        }), o = r && Object.entries(r).reduce((c, u) => {
            let [d, f] = u;
            return f === void 0 || (c[d] = f), c
        }, {}), l = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
            let {
                class: d,
                className: f,
                ...h
            } = u;
            return Object.entries(h).every(b => {
                let [m, y] = b;
                return Array.isArray(y) ? y.includes({ ...a,
                    ...o
                }[m]) : { ...a,
                    ...o
                }[m] === y
            }) ? [...c, d, f] : c
        }, []);
        return ma(t, i, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eu = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    zi = (...t) => t.filter((e, r, n) => !!e && e.trim() !== "" && n.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ru = g.forwardRef(({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: i,
    ...o
}, l) => g.createElement("svg", {
    ref: l,
    ...tu,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: n ? Number(r) * 24 / Number(e) : r,
    className: zi("lucide", s),
    ...o
}, [...i.map(([c, u]) => g.createElement(c, u)), ...Array.isArray(a) ? a : [a]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (t, e) => {
    const r = g.forwardRef(({
        className: n,
        ...s
    }, a) => g.createElement(ru, {
        ref: a,
        iconNode: e,
        className: zi(`lucide-${eu(t)}`, n),
        ...s
    }));
    return r.displayName = `${t}`, r
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nu = ct("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const su = ct("Bike", [
    ["circle", {
        cx: "18.5",
        cy: "17.5",
        r: "3.5",
        key: "15x4ox"
    }],
    ["circle", {
        cx: "5.5",
        cy: "17.5",
        r: "3.5",
        key: "1noe27"
    }],
    ["circle", {
        cx: "15",
        cy: "5",
        r: "1",
        key: "19l28e"
    }],
    ["path", {
        d: "M12 17.5V14l-3-3 4-3 2 3h2",
        key: "1npguv"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const au = ct("Car", [
    ["path", {
        d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
        key: "5owen"
    }],
    ["circle", {
        cx: "7",
        cy: "17",
        r: "2",
        key: "u2ysq9"
    }],
    ["path", {
        d: "M9 17h6",
        key: "r8uit2"
    }],
    ["circle", {
        cx: "17",
        cy: "17",
        r: "2",
        key: "axvx0g"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = ct("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iu = ct("FileCheck", [
    ["path", {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
    }],
    ["path", {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
    }],
    ["path", {
        d: "m9 15 2 2 4-4",
        key: "1grp1n"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ou = ct("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lu = ct("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = ct("Smartphone", [
    ["rect", {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3"
    }],
    ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uu = ct("Truck", [
    ["path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53"
    }],
    ["path", {
        d: "M15 18H9",
        key: "1lyqi6"
    }],
    ["path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
    }],
    ["circle", {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn"
    }],
    ["circle", {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = ct("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Ws = "-",
    hu = t => {
        const e = pu(t),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: n
            } = t;
        return {
            getClassGroupId: i => {
                const o = i.split(Ws);
                return o[0] === "" && o.length !== 1 && o.shift(), Ki(o, e) || fu(i)
            },
            getConflictingClassGroupIds: (i, o) => {
                const l = r[i] || [];
                return o && n[i] ? [...l, ...n[i]] : l
            }
        }
    },
    Ki = (t, e) => {
        var i;
        if (t.length === 0) return e.classGroupId;
        const r = t[0],
            n = e.nextPart.get(r),
            s = n ? Ki(t.slice(1), n) : void 0;
        if (s) return s;
        if (e.validators.length === 0) return;
        const a = t.join(Ws);
        return (i = e.validators.find(({
            validator: o
        }) => o(a))) == null ? void 0 : i.classGroupId
    },
    ga = /^\[(.+)\]$/,
    fu = t => {
        if (ga.test(t)) {
            const e = ga.exec(t)[1],
                r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
            if (r) return "arbitrary.." + r
        }
    },
    pu = t => {
        const {
            theme: e,
            prefix: r
        } = t, n = {
            nextPart: new Map,
            validators: []
        };
        return gu(Object.entries(t.classGroups), r).forEach(([a, i]) => {
            Es(i, n, a, e)
        }), n
    },
    Es = (t, e, r, n) => {
        t.forEach(s => {
            if (typeof s == "string") {
                const a = s === "" ? e : ya(e, s);
                a.classGroupId = r;
                return
            }
            if (typeof s == "function") {
                if (mu(s)) {
                    Es(s(n), e, r, n);
                    return
                }
                e.validators.push({
                    validator: s,
                    classGroupId: r
                });
                return
            }
            Object.entries(s).forEach(([a, i]) => {
                Es(i, ya(e, a), r, n)
            })
        })
    },
    ya = (t, e) => {
        let r = t;
        return e.split(Ws).forEach(n => {
            r.nextPart.has(n) || r.nextPart.set(n, {
                nextPart: new Map,
                validators: []
            }), r = r.nextPart.get(n)
        }), r
    },
    mu = t => t.isThemeGetter,
    gu = (t, e) => e ? t.map(([r, n]) => {
        const s = n.map(a => typeof a == "string" ? e + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, o]) => [e + i, o])) : a);
        return [r, s]
    }) : t,
    yu = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            r = new Map,
            n = new Map;
        const s = (a, i) => {
            r.set(a, i), e++, e > t && (e = 0, n = r, r = new Map)
        };
        return {
            get(a) {
                let i = r.get(a);
                if (i !== void 0) return i;
                if ((i = n.get(a)) !== void 0) return s(a, i), i
            },
            set(a, i) {
                r.has(a) ? r.set(a, i) : s(a, i)
            }
        }
    },
    Gi = "!",
    vu = t => {
        const {
            separator: e,
            experimentalParseClassName: r
        } = t, n = e.length === 1, s = e[0], a = e.length, i = o => {
            const l = [];
            let c = 0,
                u = 0,
                d;
            for (let y = 0; y < o.length; y++) {
                let k = o[y];
                if (c === 0) {
                    if (k === s && (n || o.slice(y, y + a) === e)) {
                        l.push(o.slice(u, y)), u = y + a;
                        continue
                    }
                    if (k === "/") {
                        d = y;
                        continue
                    }
                }
                k === "[" ? c++ : k === "]" && c--
            }
            const f = l.length === 0 ? o : o.substring(u),
                h = f.startsWith(Gi),
                b = h ? f.substring(1) : f,
                m = d && d > u ? d - u : void 0;
            return {
                modifiers: l,
                hasImportantModifier: h,
                baseClassName: b,
                maybePostfixModifierPosition: m
            }
        };
        return r ? o => r({
            className: o,
            parseClassName: i
        }) : i
    },
    bu = t => {
        if (t.length <= 1) return t;
        const e = [];
        let r = [];
        return t.forEach(n => {
            n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n)
        }), e.push(...r.sort()), e
    },
    wu = t => ({
        cache: yu(t.cacheSize),
        parseClassName: vu(t),
        ...hu(t)
    }),
    _u = /\s+/,
    xu = (t, e) => {
        const {
            parseClassName: r,
            getClassGroupId: n,
            getConflictingClassGroupIds: s
        } = e, a = [], i = t.trim().split(_u);
        let o = "";
        for (let l = i.length - 1; l >= 0; l -= 1) {
            const c = i[l],
                {
                    modifiers: u,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: h
                } = r(c);
            let b = !!h,
                m = n(b ? f.substring(0, h) : f);
            if (!m) {
                if (!b) {
                    o = c + (o.length > 0 ? " " + o : o);
                    continue
                }
                if (m = n(f), !m) {
                    o = c + (o.length > 0 ? " " + o : o);
                    continue
                }
                b = !1
            }
            const y = bu(u).join(":"),
                k = d ? y + Gi : y,
                E = k + m;
            if (a.includes(E)) continue;
            a.push(E);
            const w = s(m, b);
            for (let P = 0; P < w.length; ++P) {
                const U = w[P];
                a.push(k + U)
            }
            o = c + (o.length > 0 ? " " + o : o)
        }
        return o
    };

function ku() {
    let t = 0,
        e, r, n = "";
    for (; t < arguments.length;)(e = arguments[t++]) && (r = Ji(e)) && (n && (n += " "), n += r);
    return n
}
const Ji = t => {
    if (typeof t == "string") return t;
    let e, r = "";
    for (let n = 0; n < t.length; n++) t[n] && (e = Ji(t[n])) && (r && (r += " "), r += e);
    return r
};

function Su(t, ...e) {
    let r, n, s, a = i;

    function i(l) {
        const c = e.reduce((u, d) => d(u), t());
        return r = wu(c), n = r.cache.get, s = r.cache.set, a = o, o(l)
    }

    function o(l) {
        const c = n(l);
        if (c) return c;
        const u = xu(l, r);
        return s(l, u), u
    }
    return function() {
        return a(ku.apply(null, arguments))
    }
}
const ne = t => {
        const e = r => r[t] || [];
        return e.isThemeGetter = !0, e
    },
    Yi = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Eu = /^\d+\/\d+$/,
    Tu = new Set(["px", "full", "screen"]),
    Cu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Au = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Pu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Ru = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Ou = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    mt = t => wr(t) || Tu.has(t) || Eu.test(t),
    kt = t => Nr(t, "length", Uu),
    wr = t => !!t && !Number.isNaN(Number(t)),
    hs = t => Nr(t, "number", wr),
    Wr = t => !!t && Number.isInteger(Number(t)),
    ju = t => t.endsWith("%") && wr(t.slice(0, -1)),
    W = t => Yi.test(t),
    St = t => Cu.test(t),
    Nu = new Set(["length", "size", "percentage"]),
    Iu = t => Nr(t, Nu, Qi),
    Lu = t => Nr(t, "position", Qi),
    $u = new Set(["image", "url"]),
    Du = t => Nr(t, $u, qu),
    Mu = t => Nr(t, "", Bu),
    Hr = () => !0,
    Nr = (t, e, r) => {
        const n = Yi.exec(t);
        return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1
    },
    Uu = t => Au.test(t) && !Pu.test(t),
    Qi = () => !1,
    Bu = t => Ru.test(t),
    qu = t => Ou.test(t),
    Fu = () => {
        const t = ne("colors"),
            e = ne("spacing"),
            r = ne("blur"),
            n = ne("brightness"),
            s = ne("borderColor"),
            a = ne("borderRadius"),
            i = ne("borderSpacing"),
            o = ne("borderWidth"),
            l = ne("contrast"),
            c = ne("grayscale"),
            u = ne("hueRotate"),
            d = ne("invert"),
            f = ne("gap"),
            h = ne("gradientColorStops"),
            b = ne("gradientColorStopPositions"),
            m = ne("inset"),
            y = ne("margin"),
            k = ne("opacity"),
            E = ne("padding"),
            w = ne("saturate"),
            P = ne("scale"),
            U = ne("sepia"),
            L = ne("skew"),
            H = ne("space"),
            me = ne("translate"),
            F = () => ["auto", "contain", "none"],
            fe = () => ["auto", "hidden", "clip", "visible", "scroll"],
            X = () => ["auto", W, e],
            j = () => [W, e],
            Me = () => ["", mt, kt],
            ce = () => ["auto", wr, W],
            et = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            xe = () => ["solid", "dashed", "dotted", "double", "none"],
            ve = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            Ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            D = () => ["", "0", W],
            ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            be = () => [wr, W];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Hr],
                spacing: [mt, kt],
                blur: ["none", "", St, W],
                brightness: be(),
                borderColor: [t],
                borderRadius: ["none", "", "full", St, W],
                borderSpacing: j(),
                borderWidth: Me(),
                contrast: be(),
                grayscale: D(),
                hueRotate: be(),
                invert: D(),
                gap: j(),
                gradientColorStops: [t],
                gradientColorStopPositions: [ju, kt],
                inset: X(),
                margin: X(),
                opacity: be(),
                padding: j(),
                saturate: be(),
                scale: be(),
                sepia: D(),
                skew: be(),
                space: j(),
                translate: j()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", W]
                }],
                container: ["container"],
                columns: [{
                    columns: [St]
                }],
                "break-after": [{
                    "break-after": ae()
                }],
                "break-before": [{
                    "break-before": ae()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...et(), W]
                }],
                overflow: [{
                    overflow: fe()
                }],
                "overflow-x": [{
                    "overflow-x": fe()
                }],
                "overflow-y": [{
                    "overflow-y": fe()
                }],
                overscroll: [{
                    overscroll: F()
                }],
                "overscroll-x": [{
                    "overscroll-x": F()
                }],
                "overscroll-y": [{
                    "overscroll-y": F()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [m]
                }],
                "inset-x": [{
                    "inset-x": [m]
                }],
                "inset-y": [{
                    "inset-y": [m]
                }],
                start: [{
                    start: [m]
                }],
                end: [{
                    end: [m]
                }],
                top: [{
                    top: [m]
                }],
                right: [{
                    right: [m]
                }],
                bottom: [{
                    bottom: [m]
                }],
                left: [{
                    left: [m]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Wr, W]
                }],
                basis: [{
                    basis: X()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", W]
                }],
                grow: [{
                    grow: D()
                }],
                shrink: [{
                    shrink: D()
                }],
                order: [{
                    order: ["first", "last", "none", Wr, W]
                }],
                "grid-cols": [{
                    "grid-cols": [Hr]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Wr, W]
                    }, W]
                }],
                "col-start": [{
                    "col-start": ce()
                }],
                "col-end": [{
                    "col-end": ce()
                }],
                "grid-rows": [{
                    "grid-rows": [Hr]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Wr, W]
                    }, W]
                }],
                "row-start": [{
                    "row-start": ce()
                }],
                "row-end": [{
                    "row-end": ce()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", W]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", W]
                }],
                gap: [{
                    gap: [f]
                }],
                "gap-x": [{
                    "gap-x": [f]
                }],
                "gap-y": [{
                    "gap-y": [f]
                }],
                "justify-content": [{
                    justify: ["normal", ...Ue()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...Ue(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...Ue(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [E]
                }],
                px: [{
                    px: [E]
                }],
                py: [{
                    py: [E]
                }],
                ps: [{
                    ps: [E]
                }],
                pe: [{
                    pe: [E]
                }],
                pt: [{
                    pt: [E]
                }],
                pr: [{
                    pr: [E]
                }],
                pb: [{
                    pb: [E]
                }],
                pl: [{
                    pl: [E]
                }],
                m: [{
                    m: [y]
                }],
                mx: [{
                    mx: [y]
                }],
                my: [{
                    my: [y]
                }],
                ms: [{
                    ms: [y]
                }],
                me: [{
                    me: [y]
                }],
                mt: [{
                    mt: [y]
                }],
                mr: [{
                    mr: [y]
                }],
                mb: [{
                    mb: [y]
                }],
                ml: [{
                    ml: [y]
                }],
                "space-x": [{
                    "space-x": [H]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [H]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, e]
                }],
                "min-w": [{
                    "min-w": [W, e, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [W, e, "none", "full", "min", "max", "fit", "prose", {
                        screen: [St]
                    }, St]
                }],
                h: [{
                    h: [W, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [W, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [W, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [W, e, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", St, kt]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hs]
                }],
                "font-family": [{
                    font: [Hr]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", wr, hs]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mt, W]
                }],
                "list-image": [{
                    "list-image": ["none", W]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", W]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [t]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [k]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [t]
                }],
                "text-opacity": [{
                    "text-opacity": [k]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...xe(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", mt, kt]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", mt, W]
                }],
                "text-decoration-color": [{
                    decoration: [t]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", W]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [k]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...et(), Lu]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Iu]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Du]
                }],
                "bg-color": [{
                    bg: [t]
                }],
                "gradient-from-pos": [{
                    from: [b]
                }],
                "gradient-via-pos": [{
                    via: [b]
                }],
                "gradient-to-pos": [{
                    to: [b]
                }],
                "gradient-from": [{
                    from: [h]
                }],
                "gradient-via": [{
                    via: [h]
                }],
                "gradient-to": [{
                    to: [h]
                }],
                rounded: [{
                    rounded: [a]
                }],
                "rounded-s": [{
                    "rounded-s": [a]
                }],
                "rounded-e": [{
                    "rounded-e": [a]
                }],
                "rounded-t": [{
                    "rounded-t": [a]
                }],
                "rounded-r": [{
                    "rounded-r": [a]
                }],
                "rounded-b": [{
                    "rounded-b": [a]
                }],
                "rounded-l": [{
                    "rounded-l": [a]
                }],
                "rounded-ss": [{
                    "rounded-ss": [a]
                }],
                "rounded-se": [{
                    "rounded-se": [a]
                }],
                "rounded-ee": [{
                    "rounded-ee": [a]
                }],
                "rounded-es": [{
                    "rounded-es": [a]
                }],
                "rounded-tl": [{
                    "rounded-tl": [a]
                }],
                "rounded-tr": [{
                    "rounded-tr": [a]
                }],
                "rounded-br": [{
                    "rounded-br": [a]
                }],
                "rounded-bl": [{
                    "rounded-bl": [a]
                }],
                "border-w": [{
                    border: [o]
                }],
                "border-w-x": [{
                    "border-x": [o]
                }],
                "border-w-y": [{
                    "border-y": [o]
                }],
                "border-w-s": [{
                    "border-s": [o]
                }],
                "border-w-e": [{
                    "border-e": [o]
                }],
                "border-w-t": [{
                    "border-t": [o]
                }],
                "border-w-r": [{
                    "border-r": [o]
                }],
                "border-w-b": [{
                    "border-b": [o]
                }],
                "border-w-l": [{
                    "border-l": [o]
                }],
                "border-opacity": [{
                    "border-opacity": [k]
                }],
                "border-style": [{
                    border: [...xe(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [o]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [o]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [k]
                }],
                "divide-style": [{
                    divide: xe()
                }],
                "border-color": [{
                    border: [s]
                }],
                "border-color-x": [{
                    "border-x": [s]
                }],
                "border-color-y": [{
                    "border-y": [s]
                }],
                "border-color-s": [{
                    "border-s": [s]
                }],
                "border-color-e": [{
                    "border-e": [s]
                }],
                "border-color-t": [{
                    "border-t": [s]
                }],
                "border-color-r": [{
                    "border-r": [s]
                }],
                "border-color-b": [{
                    "border-b": [s]
                }],
                "border-color-l": [{
                    "border-l": [s]
                }],
                "divide-color": [{
                    divide: [s]
                }],
                "outline-style": [{
                    outline: ["", ...xe()]
                }],
                "outline-offset": [{
                    "outline-offset": [mt, W]
                }],
                "outline-w": [{
                    outline: [mt, kt]
                }],
                "outline-color": [{
                    outline: [t]
                }],
                "ring-w": [{
                    ring: Me()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [t]
                }],
                "ring-opacity": [{
                    "ring-opacity": [k]
                }],
                "ring-offset-w": [{
                    "ring-offset": [mt, kt]
                }],
                "ring-offset-color": [{
                    "ring-offset": [t]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", St, Mu]
                }],
                "shadow-color": [{
                    shadow: [Hr]
                }],
                opacity: [{
                    opacity: [k]
                }],
                "mix-blend": [{
                    "mix-blend": [...ve(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": ve()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [r]
                }],
                brightness: [{
                    brightness: [n]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", St, W]
                }],
                grayscale: [{
                    grayscale: [c]
                }],
                "hue-rotate": [{
                    "hue-rotate": [u]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [w]
                }],
                sepia: [{
                    sepia: [U]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [r]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [n]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [c]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [u]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [k]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [w]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [U]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [i]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [i]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [i]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
                }],
                duration: [{
                    duration: be()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", W]
                }],
                delay: [{
                    delay: be()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", W]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [P]
                }],
                "scale-x": [{
                    "scale-x": [P]
                }],
                "scale-y": [{
                    "scale-y": [P]
                }],
                rotate: [{
                    rotate: [Wr, W]
                }],
                "translate-x": [{
                    "translate-x": [me]
                }],
                "translate-y": [{
                    "translate-y": [me]
                }],
                "skew-x": [{
                    "skew-x": [L]
                }],
                "skew-y": [{
                    "skew-y": [L]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
                }],
                accent: [{
                    accent: ["auto", t]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
                }],
                "caret-color": [{
                    caret: [t]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", W]
                }],
                fill: [{
                    fill: [t, "none"]
                }],
                "stroke-w": [{
                    stroke: [mt, kt, hs]
                }],
                stroke: [{
                    stroke: [t, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Wu = Su(Fu);

function ar(...t) {
    return Wu(vi(t))
}
const Hu = Mo,
    Xi = g.forwardRef(({
        className: t,
        ...e
    }, r) => p.jsx(bi, {
        ref: r,
        className: ar("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
        ...e
    }));
Xi.displayName = bi.displayName;
const zu = Zc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    Zi = g.forwardRef(({
        className: t,
        variant: e,
        ...r
    }, n) => p.jsx(wi, {
        ref: n,
        className: ar(zu({
            variant: e
        }), t),
        ...r
    }));
Zi.displayName = wi.displayName;
const Vu = g.forwardRef(({
    className: t,
    ...e
}, r) => p.jsx(_i, {
    ref: r,
    className: ar("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", t),
    ...e
}));
Vu.displayName = _i.displayName;
const eo = g.forwardRef(({
    className: t,
    ...e
}, r) => p.jsx(xi, {
    ref: r,
    className: ar("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: p.jsx(du, {
        className: "h-4 w-4"
    })
}));
eo.displayName = xi.displayName;
const to = g.forwardRef(({
    className: t,
    ...e
}, r) => p.jsx(ki, {
    ref: r,
    className: ar("text-sm font-semibold", t),
    ...e
}));
to.displayName = ki.displayName;
const ro = g.forwardRef(({
    className: t,
    ...e
}, r) => p.jsx(Si, {
    ref: r,
    className: ar("text-sm opacity-90", t),
    ...e
}));
ro.displayName = Si.displayName;

function Ku() {
    const {
        toasts: t
    } = Xc();
    return p.jsxs(Hu, {
        children: [t.map(function({
            id: e,
            title: r,
            description: n,
            action: s,
            ...a
        }) {
            return p.jsxs(Zi, { ...a,
                children: [p.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && p.jsx(to, {
                        children: r
                    }), n && p.jsx(ro, {
                        children: n
                    })]
                }), s, p.jsx(eo, {})]
            }, e)
        }), p.jsx(Xi, {})]
    })
}
var [Qn, rg] = Uo("Tooltip", [Ei]), Hs = Ei(), no = "TooltipProvider", Gu = 700, va = "tooltip.open", [Ju, so] = Qn(no), ao = t => {
    const {
        __scopeTooltip: e,
        delayDuration: r = Gu,
        skipDelayDuration: n = 300,
        disableHoverableContent: s = !1,
        children: a
    } = t, i = g.useRef(!0), o = g.useRef(!1), l = g.useRef(0);
    return g.useEffect(() => {
        const c = l.current;
        return () => window.clearTimeout(c)
    }, []), p.jsx(Ju, {
        scope: e,
        isOpenDelayedRef: i,
        delayDuration: r,
        onOpen: g.useCallback(() => {
            window.clearTimeout(l.current), i.current = !1
        }, []),
        onClose: g.useCallback(() => {
            window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, n)
        }, [n]),
        isPointerInTransitRef: o,
        onPointerInTransitChange: g.useCallback(c => {
            o.current = c
        }, []),
        disableHoverableContent: s,
        children: a
    })
};
ao.displayName = no;
var io = "Tooltip",
    [ng, Xn] = Qn(io),
    Ts = "TooltipTrigger",
    Yu = g.forwardRef((t, e) => {
        const {
            __scopeTooltip: r,
            ...n
        } = t, s = Xn(Ts, r), a = so(Ts, r), i = Hs(r), o = g.useRef(null), l = Ti(e, o, s.onTriggerChange), c = g.useRef(!1), u = g.useRef(!1), d = g.useCallback(() => c.current = !1, []);
        return g.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), p.jsx(Bo, {
            asChild: !0,
            ...i,
            children: p.jsx(qo.button, {
                "aria-describedby": s.open ? s.contentId : void 0,
                "data-state": s.stateAttribute,
                ...n,
                ref: l,
                onPointerMove: or(t.onPointerMove, f => {
                    f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (s.onTriggerEnter(), u.current = !0)
                }),
                onPointerLeave: or(t.onPointerLeave, () => {
                    s.onTriggerLeave(), u.current = !1
                }),
                onPointerDown: or(t.onPointerDown, () => {
                    s.open && s.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                        once: !0
                    })
                }),
                onFocus: or(t.onFocus, () => {
                    c.current || s.onOpen()
                }),
                onBlur: or(t.onBlur, s.onClose),
                onClick: or(t.onClick, s.onClose)
            })
        })
    });
Yu.displayName = Ts;
var Qu = "TooltipPortal",
    [sg, Xu] = Qn(Qu, {
        forceMount: void 0
    }),
    Rr = "TooltipContent",
    oo = g.forwardRef((t, e) => {
        const r = Xu(Rr, t.__scopeTooltip),
            {
                forceMount: n = r.forceMount,
                side: s = "top",
                ...a
            } = t,
            i = Xn(Rr, t.__scopeTooltip);
        return p.jsx(Fo, {
            present: n || i.open,
            children: i.disableHoverableContent ? p.jsx(lo, {
                side: s,
                ...a,
                ref: e
            }) : p.jsx(Zu, {
                side: s,
                ...a,
                ref: e
            })
        })
    }),
    Zu = g.forwardRef((t, e) => {
        const r = Xn(Rr, t.__scopeTooltip),
            n = so(Rr, t.__scopeTooltip),
            s = g.useRef(null),
            a = Ti(e, s),
            [i, o] = g.useState(null),
            {
                trigger: l,
                onClose: c
            } = r,
            u = s.current,
            {
                onPointerInTransitChange: d
            } = n,
            f = g.useCallback(() => {
                o(null), d(!1)
            }, [d]),
            h = g.useCallback((b, m) => {
                const y = b.currentTarget,
                    k = {
                        x: b.clientX,
                        y: b.clientY
                    },
                    E = sd(k, y.getBoundingClientRect()),
                    w = ad(k, E),
                    P = id(m.getBoundingClientRect()),
                    U = ld([...w, ...P]);
                o(U), d(!0)
            }, [d]);
        return g.useEffect(() => () => f(), [f]), g.useEffect(() => {
            if (l && u) {
                const b = y => h(y, u),
                    m = y => h(y, l);
                return l.addEventListener("pointerleave", b), u.addEventListener("pointerleave", m), () => {
                    l.removeEventListener("pointerleave", b), u.removeEventListener("pointerleave", m)
                }
            }
        }, [l, u, h, f]), g.useEffect(() => {
            if (i) {
                const b = m => {
                    const y = m.target,
                        k = {
                            x: m.clientX,
                            y: m.clientY
                        },
                        E = (l == null ? void 0 : l.contains(y)) || (u == null ? void 0 : u.contains(y)),
                        w = !od(k, i);
                    E ? f() : w && (f(), c())
                };
                return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b)
            }
        }, [l, u, i, c, f]), p.jsx(lo, { ...t,
            ref: a
        })
    }),
    [ed, td] = Qn(io, {
        isInside: !1
    }),
    rd = Ko("TooltipContent"),
    lo = g.forwardRef((t, e) => {
        const {
            __scopeTooltip: r,
            children: n,
            "aria-label": s,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...o
        } = t, l = Xn(Rr, r), c = Hs(r), {
            onClose: u
        } = l;
        return g.useEffect(() => (document.addEventListener(va, u), () => document.removeEventListener(va, u)), [u]), g.useEffect(() => {
            if (l.trigger) {
                const d = f => {
                    const h = f.target;
                    h != null && h.contains(l.trigger) && u()
                };
                return window.addEventListener("scroll", d, {
                    capture: !0
                }), () => window.removeEventListener("scroll", d, {
                    capture: !0
                })
            }
        }, [l.trigger, u]), p.jsx(Wo, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: d => d.preventDefault(),
            onDismiss: u,
            children: p.jsxs(Ho, {
                "data-state": l.stateAttribute,
                ...c,
                ...o,
                ref: e,
                style: { ...o.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [p.jsx(rd, {
                    children: n
                }), p.jsx(ed, {
                    scope: r,
                    isInside: !0,
                    children: p.jsx(zo, {
                        id: l.contentId,
                        role: "tooltip",
                        children: s || n
                    })
                })]
            })
        })
    });
oo.displayName = Rr;
var co = "TooltipArrow",
    nd = g.forwardRef((t, e) => {
        const {
            __scopeTooltip: r,
            ...n
        } = t, s = Hs(r);
        return td(co, r).isInside ? null : p.jsx(Vo, { ...s,
            ...n,
            ref: e
        })
    });
nd.displayName = co;

function sd(t, e) {
    const r = Math.abs(e.top - t.y),
        n = Math.abs(e.bottom - t.y),
        s = Math.abs(e.right - t.x),
        a = Math.abs(e.left - t.x);
    switch (Math.min(r, n, s, a)) {
        case a:
            return "left";
        case s:
            return "right";
        case r:
            return "top";
        case n:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function ad(t, e, r = 5) {
    const n = [];
    switch (e) {
        case "top":
            n.push({
                x: t.x - r,
                y: t.y + r
            }, {
                x: t.x + r,
                y: t.y + r
            });
            break;
        case "bottom":
            n.push({
                x: t.x - r,
                y: t.y - r
            }, {
                x: t.x + r,
                y: t.y - r
            });
            break;
        case "left":
            n.push({
                x: t.x + r,
                y: t.y - r
            }, {
                x: t.x + r,
                y: t.y + r
            });
            break;
        case "right":
            n.push({
                x: t.x - r,
                y: t.y - r
            }, {
                x: t.x - r,
                y: t.y + r
            });
            break
    }
    return n
}

function id(t) {
    const {
        top: e,
        right: r,
        bottom: n,
        left: s
    } = t;
    return [{
        x: s,
        y: e
    }, {
        x: r,
        y: e
    }, {
        x: r,
        y: n
    }, {
        x: s,
        y: n
    }]
}

function od(t, e) {
    const {
        x: r,
        y: n
    } = t;
    let s = !1;
    for (let a = 0, i = e.length - 1; a < e.length; i = a++) {
        const o = e[a],
            l = e[i],
            c = o.x,
            u = o.y,
            d = l.x,
            f = l.y;
        u > n != f > n && r < (d - c) * (n - u) / (f - u) + c && (s = !s)
    }
    return s
}

function ld(t) {
    const e = t.slice();
    return e.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), cd(e)
}

function cd(t) {
    if (t.length <= 1) return t.slice();
    const e = [];
    for (let n = 0; n < t.length; n++) {
        const s = t[n];
        for (; e.length >= 2;) {
            const a = e[e.length - 1],
                i = e[e.length - 2];
            if ((a.x - i.x) * (s.y - i.y) >= (a.y - i.y) * (s.x - i.x)) e.pop();
            else break
        }
        e.push(s)
    }
    e.pop();
    const r = [];
    for (let n = t.length - 1; n >= 0; n--) {
        const s = t[n];
        for (; r.length >= 2;) {
            const a = r[r.length - 1],
                i = r[r.length - 2];
            if ((a.x - i.x) * (s.y - i.y) >= (a.y - i.y) * (s.x - i.x)) r.pop();
            else break
        }
        r.push(s)
    }
    return r.pop(), e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r)
}
var ud = ao,
    uo = oo;
const dd = ud,
    hd = g.forwardRef(({
        className: t,
        sideOffset: e = 4,
        ...r
    }, n) => p.jsx(uo, {
        ref: n,
        sideOffset: e,
        className: ar("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
        ...r
    }));
hd.displayName = uo.displayName;
const fd = {
    Alabama: ["35203", "36104", "35801", "36602", "36830"],
    Alaska: ["99501", "99701", "99801", "99577", "99654"],
    Arizona: ["85001", "85201", "85701", "86001", "85281"],
    Arkansas: ["72201", "72701", "72901", "71601", "72032"],
    California: ["90001", "94102", "92101", "95814", "93301"],
    Colorado: ["80201", "80301", "80903", "80525", "81001"],
    Connecticut: ["06101", "06510", "06901", "06001", "06604"],
    Delaware: ["19901", "19801", "19702", "19711", "19720"],
    Florida: ["32099", "33101", "33601", "32801", "33301"],
    Georgia: ["30301", "31401", "30901", "31201", "30601"],
    Hawaii: ["96801", "96720", "96732", "96813", "96740"],
    Idaho: ["83701", "83201", "83301", "83501", "83814"],
    Illinois: ["60601", "61602", "62701", "61101", "60401"],
    Indiana: ["46201", "46601", "47901", "47374", "46001"],
    Iowa: ["50301", "52801", "52401", "50010", "51101"],
    Kansas: ["66101", "67201", "66502", "66801", "67401"],
    Kentucky: ["40201", "41001", "42001", "40502", "40701"],
    Louisiana: ["70112", "70801", "71101", "70501", "70601"],
    Maine: ["04101", "04401", "04330", "04240", "04210"],
    Maryland: ["21201", "20601", "21401", "21701", "20901"],
    Massachusetts: ["02101", "01101", "01601", "02301", "01002"],
    Michigan: ["48201", "49001", "48501", "49503", "48601"],
    Minnesota: ["55101", "55801", "56001", "56301", "55901"],
    Mississippi: ["39201", "39501", "38601", "39701", "38801"],
    Missouri: ["63101", "64101", "65801", "65101", "63301"],
    Montana: ["59601", "59101", "59401", "59801", "59301"],
    Nebraska: ["68101", "68501", "69101", "68801", "68701"],
    Nevada: ["89101", "89501", "89701", "89301", "89801"],
    "New Hampshire": ["03301", "03101", "03801", "03060", "03431"],
    "New Jersey": ["07101", "08101", "07002", "08401", "07601"],
    "New Mexico": ["87101", "88001", "87501", "88201", "87301"],
    "New York": ["10001", "14201", "13201", "12201", "10301"],
    "North Carolina": ["27601", "28201", "27101", "28301", "27401"],
    "North Dakota": ["58501", "58102", "58201", "58301", "58701"],
    Ohio: ["43201", "44101", "45201", "43601", "44301"],
    Oklahoma: ["73101", "74101", "73071", "73401", "74401"],
    Oregon: ["97201", "97401", "97301", "97501", "97701"],
    Pennsylvania: ["19101", "15201", "17101", "18501", "16501"],
    "Rhode Island": ["02901", "02860", "02840", "02806", "02871"],
    "South Carolina": ["29201", "29401", "29601", "29801", "29501"],
    "South Dakota": ["57101", "57701", "57401", "57301", "57501"],
    Tennessee: ["37201", "38101", "37901", "37601", "37421"],
    Texas: ["73301", "77001", "78201", "75201", "79901"],
    Utah: ["84101", "84601", "84401", "84720", "84501"],
    Vermont: ["05601", "05401", "05701", "05301", "05201"],
    Virginia: ["23219", "23501", "22301", "24011", "23601"],
    Washington: ["98101", "99201", "98401", "98801", "98501"],
    "West Virginia": ["25301", "26003", "25701", "26501", "24701"],
    Wisconsin: ["53201", "54301", "53701", "54901", "53081"],
    Wyoming: ["82001", "82601", "82901", "82401", "82801"],
    "District of Columbia": ["20001", "20002", "20003", "20004", "20005"]
};

function ba(t, e) {
    if (e && /^\d{5}$/.test(e)) return e;
    const r = fd[t];
    return !r || r.length === 0 ? "00000" : r[Math.floor(Math.random() * r.length)]
}
const pd = {
    35203: "Birmingham",
    36104: "Montgomery",
    35801: "Huntsville",
    36602: "Mobile",
    36830: "Auburn",
    99501: "Anchorage",
    99701: "Fairbanks",
    99801: "Juneau",
    99577: "Eagle River",
    99654: "Wasilla",
    85001: "Phoenix",
    85201: "Mesa",
    85701: "Tucson",
    86001: "Flagstaff",
    85281: "Tempe",
    72201: "Little Rock",
    72701: "Fayetteville",
    72901: "Fort Smith",
    71601: "Pine Bluff",
    72032: "Conway",
    90001: "Los Angeles",
    94102: "San Francisco",
    92101: "San Diego",
    95814: "Sacramento",
    93301: "Bakersfield",
    92626: "Costa Mesa",
    90210: "Beverly Hills",
    90012: "Los Angeles",
    91101: "Pasadena",
    92704: "Santa Ana",
    80201: "Denver",
    80301: "Boulder",
    80903: "Colorado Springs",
    80525: "Fort Collins",
    81001: "Pueblo",
    "06101": "Hartford",
    "06510": "New Haven",
    "06901": "Stamford",
    "06001": "Avon",
    "06604": "Bridgeport",
    19901: "Dover",
    19801: "Wilmington",
    19702: "Newark",
    19711: "Newark",
    19720: "New Castle",
    32099: "Jacksonville",
    33101: "Miami",
    33601: "Tampa",
    32801: "Orlando",
    33301: "Fort Lauderdale",
    30301: "Atlanta",
    31401: "Savannah",
    30901: "Augusta",
    31201: "Macon",
    30601: "Athens",
    96801: "Honolulu",
    96720: "Hilo",
    96732: "Kahului",
    96813: "Honolulu",
    96740: "Kailua-Kona",
    83701: "Boise",
    83201: "Pocatello",
    83301: "Twin Falls",
    83501: "Lewiston",
    83814: "Coeur d'Alene",
    60601: "Chicago",
    61602: "Peoria",
    62701: "Springfield",
    61101: "Rockford",
    60401: "Chicago Heights",
    46201: "Indianapolis",
    46601: "South Bend",
    47901: "Lafayette",
    47374: "Richmond",
    46001: "Alexandria",
    50301: "Des Moines",
    52801: "Davenport",
    52401: "Cedar Rapids",
    50010: "Ames",
    51101: "Sioux City",
    66101: "Kansas City",
    67201: "Wichita",
    66502: "Manhattan",
    66801: "Emporia",
    67401: "Salina",
    40201: "Louisville",
    41001: "Covington",
    42001: "Paducah",
    40502: "Lexington",
    40701: "Corbin",
    70112: "New Orleans",
    70801: "Baton Rouge",
    71101: "Shreveport",
    70501: "Lafayette",
    70601: "Lake Charles",
    "04101": "Portland",
    "04401": "Bangor",
    "04330": "Augusta",
    "04240": "Lewiston",
    "04210": "Auburn",
    21201: "Baltimore",
    20601: "Waldorf",
    21401: "Annapolis",
    21701: "Frederick",
    20901: "Silver Spring",
    "02101": "Boston",
    "01101": "Springfield",
    "01601": "Worcester",
    "02301": "Brockton",
    "01002": "Amherst",
    48201: "Detroit",
    49001: "Kalamazoo",
    48501: "Flint",
    49503: "Grand Rapids",
    48601: "Saginaw",
    55101: "Saint Paul",
    55801: "Duluth",
    56001: "Mankato",
    56301: "St. Cloud",
    55901: "Rochester",
    39201: "Jackson",
    39501: "Gulfport",
    38601: "Batesville",
    39701: "Columbus",
    38801: "Tupelo",
    63101: "St. Louis",
    64101: "Kansas City",
    65801: "Springfield",
    65101: "Jefferson City",
    63301: "St. Charles",
    59601: "Helena",
    59101: "Billings",
    59401: "Great Falls",
    59801: "Missoula",
    59301: "Miles City",
    68101: "Omaha",
    68501: "Lincoln",
    69101: "Ogallala",
    68801: "Grand Island",
    68701: "Norfolk",
    89101: "Las Vegas",
    89501: "Reno",
    89701: "Carson City",
    89301: "Austin",
    89801: "Elko",
    "03301": "Concord",
    "03101": "Manchester",
    "03801": "Portsmouth",
    "03060": "Nashua",
    "03431": "Keene",
    "07101": "Newark",
    "08101": "Camden",
    "07002": "Bayonne",
    "08401": "Atlantic City",
    "07601": "Hackensack",
    87101: "Albuquerque",
    88001: "Las Cruces",
    87501: "Santa Fe",
    88201: "Roswell",
    87301: "Gallup",
    10001: "New York",
    14201: "Buffalo",
    13201: "Syracuse",
    12201: "Albany",
    10301: "Staten Island",
    27601: "Raleigh",
    28201: "Charlotte",
    27101: "Winston-Salem",
    28301: "Fayetteville",
    27401: "Greensboro",
    58501: "Bismarck",
    58102: "Fargo",
    58201: "Grand Forks",
    58301: "Devils Lake",
    58701: "Minot",
    43201: "Columbus",
    44101: "Cleveland",
    45201: "Cincinnati",
    43601: "Toledo",
    44301: "Akron",
    73101: "Oklahoma City",
    74101: "Tulsa",
    73071: "Norman",
    73401: "Ardmore",
    74401: "Muskogee",
    97201: "Portland",
    97401: "Eugene",
    97301: "Salem",
    97501: "Medford",
    97701: "Bend",
    19101: "Philadelphia",
    15201: "Pittsburgh",
    17101: "Harrisburg",
    18501: "Scranton",
    16501: "Erie",
    "02901": "Providence",
    "02860": "Pawtucket",
    "02840": "Newport",
    "02806": "Barrington",
    "02871": "Portsmouth",
    29201: "Columbia",
    29401: "Charleston",
    29601: "Greenville",
    29801: "Aiken",
    29501: "Florence",
    57101: "Sioux Falls",
    57701: "Rapid City",
    57401: "Aberdeen",
    57301: "Mitchell",
    57501: "Pierre",
    37201: "Nashville",
    38101: "Memphis",
    37901: "Knoxville",
    37601: "Johnson City",
    37421: "Chattanooga",
    73301: "Austin",
    77001: "Houston",
    78201: "San Antonio",
    75201: "Dallas",
    79901: "El Paso",
    84101: "Salt Lake City",
    84601: "Provo",
    84401: "Ogden",
    84720: "Cedar City",
    84501: "Price",
    "05601": "Montpelier",
    "05401": "Burlington",
    "05701": "Rutland",
    "05301": "Brattleboro",
    "05201": "Bennington",
    23219: "Richmond",
    23501: "Norfolk",
    22301: "Alexandria",
    24011: "Roanoke",
    23601: "Newport News",
    98101: "Seattle",
    99201: "Spokane",
    98401: "Tacoma",
    98801: "Wenatchee",
    98501: "Olympia",
    25301: "Charleston",
    26003: "Wheeling",
    25701: "Huntington",
    26501: "Morgantown",
    24701: "Princeton",
    53201: "Milwaukee",
    54301: "Green Bay",
    53701: "Madison",
    54901: "Oshkosh",
    53081: "Sheboygan",
    82001: "Cheyenne",
    82601: "Casper",
    82901: "Rock Springs",
    82401: "Worland",
    82801: "Sheridan",
    20001: "Washington",
    20002: "Washington",
    20003: "Washington",
    20004: "Washington",
    20005: "Washington"
};

function md(t) {
    return pd[t] || ""
}
const ue = g.forwardRef(({
    children: t,
    title: e,
    description: r,
    stepKey: n
}, s) => p.jsx(gi, {
    mode: "wait",
    children: p.jsxs(yi.div, {
        ref: s,
        initial: {
            opacity: 0,
            x: 20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: -20
        },
        transition: {
            duration: .3,
            ease: [.4, 0, .2, 1]
        },
        className: "w-full max-w-xl mx-auto bg-card p-8 rounded-xl border border-primary/20",
        style: {
            boxShadow: "0 0 30px hsl(var(--primary) / 0.12), 0 10px 25px -5px rgba(0,0,0,0.08), 0 0 0 1px hsl(var(--primary) / 0.05)"
        },
        children: [p.jsx("h2", {
            className: "text-2xl font-semibold text-foreground mb-2 tracking-tight",
            children: e
        }), r && p.jsx("p", {
            className: "text-muted-foreground mb-6",
            children: r
        }), p.jsx("div", {
            className: "space-y-3",
            children: t
        })]
    }, n)
}));
ue.displayName = "QuestionCard";
const se = ({
        label: t,
        sublabel: e,
        icon: r,
        onClick: n,
        active: s
    }) => p.jsx("button", {
        onClick: n,
        className: `w-full text-center p-3 md:p-5 rounded-lg border-2 md:border-[3px] transition-all duration-300 active:scale-[0.97]
      hover:shadow-md hover:-translate-y-0.5
      ${s?"border-primary bg-card shadow-[0_0_12px_hsl(var(--primary)/0.4)]":"border-foreground/80 bg-card hover:border-primary/50"}`,
        children: p.jsxs("div", {
            className: `flex items-center ${r?"gap-2.5 md:gap-3 justify-start px-1 md:px-2":"justify-center"}`,
            children: [r && p.jsx("span", {
                className: "text-primary [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6",
                children: r
            }), p.jsxs("div", {
                className: r ? "text-left" : "",
                children: [p.jsx("span", {
                    className: "font-semibold text-base md:text-lg text-foreground",
                    children: t
                }), e && p.jsx("p", {
                    className: "text-xs md:text-sm text-muted-foreground mt-0.5",
                    children: e
                })]
            })]
        })
    }),
    wa = "/assets/bear-minor-DnQ1TvYB.png",
    gd = "/assets/file-my-claim-logo-H4jxz8dk.png",
    yd = "/assets/file-my-claim-logo-red-B5d9uJz4.png",
    _a = "/assets/bear-significant-B_vdKZJ0.png",
    xa = "/assets/bear-severe-0yEEaoNb.png",
    vd = ({
        current: t,
        total: e
    }) => {
        const r = Math.round(t / e * 100),
            n = r >= 30,
            s = r >= 80;
        return p.jsxs("div", {
            className: "w-full max-w-xl mx-auto mb-6",
            children: [p.jsx("div", {
                className: "h-2 w-full bg-muted rounded-full overflow-hidden",
                children: p.jsx("div", {
                    className: "h-full rounded-full transition-all duration-700 ease-out",
                    style: {
                        width: `${r}%`,
                        background: "linear-gradient(90deg, hsl(var(--primary)), hsl(145 63% 52%))"
                    }
                })
            }), p.jsxs("div", {
                className: "flex items-center justify-between mt-2",
                children: [n ? p.jsx("p", {
                    className: "text-xs font-semibold text-primary animate-fade-in",
                    children: s ? "🏁 Almost there — just a couple more steps!" : `🎯 Your claim is ${r}% done!`
                }) : p.jsx("span", {}), p.jsxs("p", {
                    className: "text-xs text-muted-foreground tabular-nums",
                    children: [t, " of ", e]
                })]
            })]
        })
    },
    de = g.forwardRef(({
        onBack: t,
        onNext: e,
        nextLabel: r = "Continue",
        nextDisabled: n = !1,
        showBack: s = !0,
        variant: a = "default"
    }, i) => p.jsxs("div", {
        ref: i,
        className: `mt-8 ${a==="accent"?"flex flex-col-reverse gap-3":"flex items-center justify-between"}`,
        children: [s && t ? p.jsx("button", {
            type: "button",
            onClick: t,
            className: `flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium ${a==="accent"?"justify-center":""}`,
            children: "Back"
        }) : p.jsx("div", {}), e && p.jsxs("button", {
            type: "button",
            onClick: e,
            disabled: n,
            className: `flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed
          ${a==="accent"?"bg-accent text-accent-foreground hover:brightness-110 w-full":"bg-primary text-primary-foreground hover:brightness-110"}`,
            children: [r, p.jsx(nu, {
                className: "w-4 h-4"
            })]
        })]
    }));
de.displayName = "NavigationButtons";
const bd = ({
    firstName: t,
    onUnlock: e,
    onBack: r
}) => p.jsxs("div", {
    className: "w-full max-w-xl mx-auto text-center",
    children: [p.jsx("div", {
        className: "bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full inline-block mb-4",
        children: "You pre-qualify!"
    }), p.jsxs("h2", {
        className: "text-2xl font-bold text-foreground mb-6 tracking-tight",
        children: [t ? `${t}, Unlock` : "Unlock", " Your Compensation Plan"]
    }), p.jsx("div", {
        className: "space-y-4 text-left mb-8",
        children: [{
            title: "Get an estimated payout range",
            desc: "Compared to similar cases"
        }, {
            title: "How to get up to 10x more from insurance",
            desc: "Avoid lowball payouts — without going to court"
        }, {
            title: "Free local expert review",
            desc: "A trusted review of your case & next steps"
        }, {
            title: "100% private and no pressure",
            desc: "Move at your own pace — but get paid quickly"
        }].map(n => p.jsxs("div", {
            className: "flex gap-3 items-start",
            children: [p.jsx("div", {
                className: "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5",
                children: p.jsx(Vi, {
                    className: "w-3.5 h-3.5 text-primary"
                })
            }), p.jsxs("div", {
                children: [p.jsx("p", {
                    className: "font-medium text-foreground",
                    children: n.title
                }), p.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: n.desc
                })]
            })]
        }, n.title))
    }), p.jsx("button", {
        onClick: e,
        className: "w-full py-4 px-6 bg-accent text-accent-foreground font-bold rounded-lg transition-all duration-300 active:scale-[0.98] hover:brightness-110 text-lg",
        children: "Unlock My Plan →"
    }), r && p.jsx("button", {
        type: "button",
        onClick: r,
        className: "mt-3 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium mx-auto",
        children: "Back"
    })]
});

function Ze(t) {
    const e = Object.prototype.toString.call(t);
    return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || e === "[object Number]" || typeof t == "string" || e === "[object String]" ? new Date(t) : new Date(NaN)
}

function sr(t, e) {
    return t instanceof Date ? new t.constructor(e) : new Date(e)
}
const ho = 6048e5,
    wd = 864e5,
    ag = 6e4,
    ig = 36e5,
    og = 1e3;
let _d = {};

function Zn() {
    return _d
}

function an(t, e) {
    var o, l, c, u;
    const r = Zn(),
        n = (e == null ? void 0 : e.weekStartsOn) ? ? ((l = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ? ? r.weekStartsOn ? ? ((u = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ? ? 0,
        s = Ze(t),
        a = s.getDay(),
        i = (a < n ? 7 : 0) + a - n;
    return s.setDate(s.getDate() - i), s.setHours(0, 0, 0, 0), s
}

function qn(t) {
    return an(t, {
        weekStartsOn: 1
    })
}

function fo(t) {
    const e = Ze(t),
        r = e.getFullYear(),
        n = sr(t, 0);
    n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
    const s = qn(n),
        a = sr(t, 0);
    a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
    const i = qn(a);
    return e.getTime() >= s.getTime() ? r + 1 : e.getTime() >= i.getTime() ? r : r - 1
}

function ka(t) {
    const e = Ze(t);
    return e.setHours(0, 0, 0, 0), e
}

function Sa(t) {
    const e = Ze(t),
        r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return r.setUTCFullYear(e.getFullYear()), +t - +r
}

function xd(t, e) {
    const r = ka(t),
        n = ka(e),
        s = +r - Sa(r),
        a = +n - Sa(n);
    return Math.round((s - a) / wd)
}

function kd(t) {
    const e = fo(t),
        r = sr(t, 0);
    return r.setFullYear(e, 0, 4), r.setHours(0, 0, 0, 0), qn(r)
}

function Sd(t) {
    return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]"
}

function Ed(t) {
    if (!Sd(t) && typeof t != "number") return !1;
    const e = Ze(t);
    return !isNaN(Number(e))
}

function Td(t) {
    const e = Ze(t),
        r = sr(t, 0);
    return r.setFullYear(e.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r
}
const Cd = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
    Ad = (t, e, r) => {
        let n;
        const s = Cd[t];
        return typeof s == "string" ? n = s : e === 1 ? n = s.one : n = s.other.replace("{{count}}", e.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n
    };

function fs(t) {
    return (e = {}) => {
        const r = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[r] || t.formats[t.defaultWidth]
    }
}
const Pd = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    Rd = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    Od = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    jd = {
        date: fs({
            formats: Pd,
            defaultWidth: "full"
        }),
        time: fs({
            formats: Rd,
            defaultWidth: "full"
        }),
        dateTime: fs({
            formats: Od,
            defaultWidth: "full"
        })
    },
    Nd = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    Id = (t, e, r, n) => Nd[t];

function zr(t) {
    return (e, r) => {
        const n = r != null && r.context ? String(r.context) : "standalone";
        let s;
        if (n === "formatting" && t.formattingValues) {
            const i = t.defaultFormattingWidth || t.defaultWidth,
                o = r != null && r.width ? String(r.width) : i;
            s = t.formattingValues[o] || t.formattingValues[i]
        } else {
            const i = t.defaultWidth,
                o = r != null && r.width ? String(r.width) : t.defaultWidth;
            s = t.values[o] || t.values[i]
        }
        const a = t.argumentCallback ? t.argumentCallback(e) : e;
        return s[a]
    }
}
const Ld = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    $d = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    Dd = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    Md = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    Ud = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    },
    Bd = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    },
    qd = (t, e) => {
        const r = Number(t),
            n = r % 100;
        if (n > 20 || n < 10) switch (n % 10) {
            case 1:
                return r + "st";
            case 2:
                return r + "nd";
            case 3:
                return r + "rd"
        }
        return r + "th"
    },
    Fd = {
        ordinalNumber: qd,
        era: zr({
            values: Ld,
            defaultWidth: "wide"
        }),
        quarter: zr({
            values: $d,
            defaultWidth: "wide",
            argumentCallback: t => t - 1
        }),
        month: zr({
            values: Dd,
            defaultWidth: "wide"
        }),
        day: zr({
            values: Md,
            defaultWidth: "wide"
        }),
        dayPeriod: zr({
            values: Ud,
            defaultWidth: "wide",
            formattingValues: Bd,
            defaultFormattingWidth: "wide"
        })
    };

function Vr(t) {
    return (e, r = {}) => {
        const n = r.width,
            s = n && t.matchPatterns[n] || t.matchPatterns[t.defaultMatchWidth],
            a = e.match(s);
        if (!a) return null;
        const i = a[0],
            o = n && t.parsePatterns[n] || t.parsePatterns[t.defaultParseWidth],
            l = Array.isArray(o) ? Hd(o, d => d.test(i)) : Wd(o, d => d.test(i));
        let c;
        c = t.valueCallback ? t.valueCallback(l) : l, c = r.valueCallback ? r.valueCallback(c) : c;
        const u = e.slice(i.length);
        return {
            value: c,
            rest: u
        }
    }
}

function Wd(t, e) {
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && e(t[r])) return r
}

function Hd(t, e) {
    for (let r = 0; r < t.length; r++)
        if (e(t[r])) return r
}

function zd(t) {
    return (e, r = {}) => {
        const n = e.match(t.matchPattern);
        if (!n) return null;
        const s = n[0],
            a = e.match(t.parsePattern);
        if (!a) return null;
        let i = t.valueCallback ? t.valueCallback(a[0]) : a[0];
        i = r.valueCallback ? r.valueCallback(i) : i;
        const o = e.slice(s.length);
        return {
            value: i,
            rest: o
        }
    }
}
const Vd = /^(\d+)(th|st|nd|rd)?/i,
    Kd = /\d+/i,
    Gd = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    Jd = {
        any: [/^b/i, /^(a|c)/i]
    },
    Yd = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    Qd = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    Xd = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    Zd = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    eh = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    th = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    rh = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    nh = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    sh = {
        ordinalNumber: zd({
            matchPattern: Vd,
            parsePattern: Kd,
            valueCallback: t => parseInt(t, 10)
        }),
        era: Vr({
            matchPatterns: Gd,
            defaultMatchWidth: "wide",
            parsePatterns: Jd,
            defaultParseWidth: "any"
        }),
        quarter: Vr({
            matchPatterns: Yd,
            defaultMatchWidth: "wide",
            parsePatterns: Qd,
            defaultParseWidth: "any",
            valueCallback: t => t + 1
        }),
        month: Vr({
            matchPatterns: Xd,
            defaultMatchWidth: "wide",
            parsePatterns: Zd,
            defaultParseWidth: "any"
        }),
        day: Vr({
            matchPatterns: eh,
            defaultMatchWidth: "wide",
            parsePatterns: th,
            defaultParseWidth: "any"
        }),
        dayPeriod: Vr({
            matchPatterns: rh,
            defaultMatchWidth: "any",
            parsePatterns: nh,
            defaultParseWidth: "any"
        })
    },
    ah = {
        code: "en-US",
        formatDistance: Ad,
        formatLong: jd,
        formatRelative: Id,
        localize: Fd,
        match: sh,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    };

function ih(t) {
    const e = Ze(t);
    return xd(e, Td(e)) + 1
}

function oh(t) {
    const e = Ze(t),
        r = +qn(e) - +kd(e);
    return Math.round(r / ho) + 1
}

function po(t, e) {
    var u, d, f, h;
    const r = Ze(t),
        n = r.getFullYear(),
        s = Zn(),
        a = (e == null ? void 0 : e.firstWeekContainsDate) ? ? ((d = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ? ? s.firstWeekContainsDate ? ? ((h = (f = s.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ? ? 1,
        i = sr(t, 0);
    i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
    const o = an(i, e),
        l = sr(t, 0);
    l.setFullYear(n, 0, a), l.setHours(0, 0, 0, 0);
    const c = an(l, e);
    return r.getTime() >= o.getTime() ? n + 1 : r.getTime() >= c.getTime() ? n : n - 1
}

function lh(t, e) {
    var o, l, c, u;
    const r = Zn(),
        n = (e == null ? void 0 : e.firstWeekContainsDate) ? ? ((l = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : l.firstWeekContainsDate) ? ? r.firstWeekContainsDate ? ? ((u = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ? ? 1,
        s = po(t, e),
        a = sr(t, 0);
    return a.setFullYear(s, 0, n), a.setHours(0, 0, 0, 0), an(a, e)
}

function ch(t, e) {
    const r = Ze(t),
        n = +an(r, e) - +lh(r, e);
    return Math.round(n / ho) + 1
}

function Q(t, e) {
    const r = t < 0 ? "-" : "",
        n = Math.abs(t).toString().padStart(e, "0");
    return r + n
}
const Et = {
        y(t, e) {
            const r = t.getFullYear(),
                n = r > 0 ? r : 1 - r;
            return Q(e === "yy" ? n % 100 : n, e.length)
        },
        M(t, e) {
            const r = t.getMonth();
            return e === "M" ? String(r + 1) : Q(r + 1, 2)
        },
        d(t, e) {
            return Q(t.getDate(), e.length)
        },
        a(t, e) {
            const r = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case "a":
                case "aa":
                    return r.toUpperCase();
                case "aaa":
                    return r;
                case "aaaaa":
                    return r[0];
                case "aaaa":
                default:
                    return r === "am" ? "a.m." : "p.m."
            }
        },
        h(t, e) {
            return Q(t.getHours() % 12 || 12, e.length)
        },
        H(t, e) {
            return Q(t.getHours(), e.length)
        },
        m(t, e) {
            return Q(t.getMinutes(), e.length)
        },
        s(t, e) {
            return Q(t.getSeconds(), e.length)
        },
        S(t, e) {
            const r = e.length,
                n = t.getMilliseconds(),
                s = Math.trunc(n * Math.pow(10, r - 3));
            return Q(s, e.length)
        }
    },
    lr = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    Ea = {
        G: function(t, e, r) {
            const n = t.getFullYear() > 0 ? 1 : 0;
            switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return r.era(n, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return r.era(n, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return r.era(n, {
                        width: "wide"
                    })
            }
        },
        y: function(t, e, r) {
            if (e === "yo") {
                const n = t.getFullYear(),
                    s = n > 0 ? n : 1 - n;
                return r.ordinalNumber(s, {
                    unit: "year"
                })
            }
            return Et.y(t, e)
        },
        Y: function(t, e, r, n) {
            const s = po(t, n),
                a = s > 0 ? s : 1 - s;
            if (e === "YY") {
                const i = a % 100;
                return Q(i, 2)
            }
            return e === "Yo" ? r.ordinalNumber(a, {
                unit: "year"
            }) : Q(a, e.length)
        },
        R: function(t, e) {
            const r = fo(t);
            return Q(r, e.length)
        },
        u: function(t, e) {
            const r = t.getFullYear();
            return Q(r, e.length)
        },
        Q: function(t, e, r) {
            const n = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
                case "Q":
                    return String(n);
                case "QQ":
                    return Q(n, 2);
                case "Qo":
                    return r.ordinalNumber(n, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return r.quarter(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return r.quarter(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return r.quarter(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(t, e, r) {
            const n = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
                case "q":
                    return String(n);
                case "qq":
                    return Q(n, 2);
                case "qo":
                    return r.ordinalNumber(n, {
                        unit: "quarter"
                    });
                case "qqq":
                    return r.quarter(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return r.quarter(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return r.quarter(n, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(t, e, r) {
            const n = t.getMonth();
            switch (e) {
                case "M":
                case "MM":
                    return Et.M(t, e);
                case "Mo":
                    return r.ordinalNumber(n + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return r.month(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return r.month(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return r.month(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(t, e, r) {
            const n = t.getMonth();
            switch (e) {
                case "L":
                    return String(n + 1);
                case "LL":
                    return Q(n + 1, 2);
                case "Lo":
                    return r.ordinalNumber(n + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return r.month(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return r.month(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return r.month(n, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(t, e, r, n) {
            const s = ch(t, n);
            return e === "wo" ? r.ordinalNumber(s, {
                unit: "week"
            }) : Q(s, e.length)
        },
        I: function(t, e, r) {
            const n = oh(t);
            return e === "Io" ? r.ordinalNumber(n, {
                unit: "week"
            }) : Q(n, e.length)
        },
        d: function(t, e, r) {
            return e === "do" ? r.ordinalNumber(t.getDate(), {
                unit: "date"
            }) : Et.d(t, e)
        },
        D: function(t, e, r) {
            const n = ih(t);
            return e === "Do" ? r.ordinalNumber(n, {
                unit: "dayOfYear"
            }) : Q(n, e.length)
        },
        E: function(t, e, r) {
            const n = t.getDay();
            switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return r.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return r.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(t, e, r, n) {
            const s = t.getDay(),
                a = (s - n.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "e":
                    return String(a);
                case "ee":
                    return Q(a, 2);
                case "eo":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "eee":
                    return r.day(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return r.day(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return r.day(s, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return r.day(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(t, e, r, n) {
            const s = t.getDay(),
                a = (s - n.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "c":
                    return String(a);
                case "cc":
                    return Q(a, e.length);
                case "co":
                    return r.ordinalNumber(a, {
                        unit: "day"
                    });
                case "ccc":
                    return r.day(s, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return r.day(s, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return r.day(s, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return r.day(s, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(t, e, r) {
            const n = t.getDay(),
                s = n === 0 ? 7 : n;
            switch (e) {
                case "i":
                    return String(s);
                case "ii":
                    return Q(s, e.length);
                case "io":
                    return r.ordinalNumber(s, {
                        unit: "day"
                    });
                case "iii":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return r.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return r.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(t, e, r) {
            const s = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case "a":
                case "aa":
                    return r.dayPeriod(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return r.dayPeriod(s, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return r.dayPeriod(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return r.dayPeriod(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(t, e, r) {
            const n = t.getHours();
            let s;
            switch (n === 12 ? s = lr.noon : n === 0 ? s = lr.midnight : s = n / 12 >= 1 ? "pm" : "am", e) {
                case "b":
                case "bb":
                    return r.dayPeriod(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return r.dayPeriod(s, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return r.dayPeriod(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return r.dayPeriod(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(t, e, r) {
            const n = t.getHours();
            let s;
            switch (n >= 17 ? s = lr.evening : n >= 12 ? s = lr.afternoon : n >= 4 ? s = lr.morning : s = lr.night, e) {
                case "B":
                case "BB":
                case "BBB":
                    return r.dayPeriod(s, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return r.dayPeriod(s, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return r.dayPeriod(s, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(t, e, r) {
            if (e === "ho") {
                let n = t.getHours() % 12;
                return n === 0 && (n = 12), r.ordinalNumber(n, {
                    unit: "hour"
                })
            }
            return Et.h(t, e)
        },
        H: function(t, e, r) {
            return e === "Ho" ? r.ordinalNumber(t.getHours(), {
                unit: "hour"
            }) : Et.H(t, e)
        },
        K: function(t, e, r) {
            const n = t.getHours() % 12;
            return e === "Ko" ? r.ordinalNumber(n, {
                unit: "hour"
            }) : Q(n, e.length)
        },
        k: function(t, e, r) {
            let n = t.getHours();
            return n === 0 && (n = 24), e === "ko" ? r.ordinalNumber(n, {
                unit: "hour"
            }) : Q(n, e.length)
        },
        m: function(t, e, r) {
            return e === "mo" ? r.ordinalNumber(t.getMinutes(), {
                unit: "minute"
            }) : Et.m(t, e)
        },
        s: function(t, e, r) {
            return e === "so" ? r.ordinalNumber(t.getSeconds(), {
                unit: "second"
            }) : Et.s(t, e)
        },
        S: function(t, e) {
            return Et.S(t, e)
        },
        X: function(t, e, r) {
            const n = t.getTimezoneOffset();
            if (n === 0) return "Z";
            switch (e) {
                case "X":
                    return Ca(n);
                case "XXXX":
                case "XX":
                    return Vt(n);
                case "XXXXX":
                case "XXX":
                default:
                    return Vt(n, ":")
            }
        },
        x: function(t, e, r) {
            const n = t.getTimezoneOffset();
            switch (e) {
                case "x":
                    return Ca(n);
                case "xxxx":
                case "xx":
                    return Vt(n);
                case "xxxxx":
                case "xxx":
                default:
                    return Vt(n, ":")
            }
        },
        O: function(t, e, r) {
            const n = t.getTimezoneOffset();
            switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + Ta(n, ":");
                case "OOOO":
                default:
                    return "GMT" + Vt(n, ":")
            }
        },
        z: function(t, e, r) {
            const n = t.getTimezoneOffset();
            switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + Ta(n, ":");
                case "zzzz":
                default:
                    return "GMT" + Vt(n, ":")
            }
        },
        t: function(t, e, r) {
            const n = Math.trunc(t.getTime() / 1e3);
            return Q(n, e.length)
        },
        T: function(t, e, r) {
            const n = t.getTime();
            return Q(n, e.length)
        }
    };

function Ta(t, e = "") {
    const r = t > 0 ? "-" : "+",
        n = Math.abs(t),
        s = Math.trunc(n / 60),
        a = n % 60;
    return a === 0 ? r + String(s) : r + String(s) + e + Q(a, 2)
}

function Ca(t, e) {
    return t % 60 === 0 ? (t > 0 ? "-" : "+") + Q(Math.abs(t) / 60, 2) : Vt(t, e)
}

function Vt(t, e = "") {
    const r = t > 0 ? "-" : "+",
        n = Math.abs(t),
        s = Q(Math.trunc(n / 60), 2),
        a = Q(n % 60, 2);
    return r + s + e + a
}
const Aa = (t, e) => {
        switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return e.date({
                    width: "full"
                })
        }
    },
    mo = (t, e) => {
        switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            case "pppp":
            default:
                return e.time({
                    width: "full"
                })
        }
    },
    uh = (t, e) => {
        const r = t.match(/(P+)(p+)?/) || [],
            n = r[1],
            s = r[2];
        if (!s) return Aa(t, e);
        let a;
        switch (n) {
            case "P":
                a = e.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                a = e.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                a = e.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                a = e.dateTime({
                    width: "full"
                });
                break
        }
        return a.replace("{{date}}", Aa(n, e)).replace("{{time}}", mo(s, e))
    },
    dh = {
        p: mo,
        P: uh
    },
    hh = /^D+$/,
    fh = /^Y+$/,
    ph = ["D", "DD", "YY", "YYYY"];

function mh(t) {
    return hh.test(t)
}

function gh(t) {
    return fh.test(t)
}

function yh(t, e, r) {
    const n = vh(t, e, r);
    if (console.warn(n), ph.includes(t)) throw new RangeError(n)
}

function vh(t, e, r) {
    const n = t[0] === "Y" ? "years" : "days of the month";
    return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const bh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    wh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    _h = /^'([^]*?)'?$/,
    xh = /''/g,
    kh = /[a-zA-Z]/;

function Tt(t, e, r) {
    var u, d, f, h, b, m, y, k;
    const n = Zn(),
        s = (r == null ? void 0 : r.locale) ? ? n.locale ? ? ah,
        a = (r == null ? void 0 : r.firstWeekContainsDate) ? ? ((d = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ? ? n.firstWeekContainsDate ? ? ((h = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ? ? 1,
        i = (r == null ? void 0 : r.weekStartsOn) ? ? ((m = (b = r == null ? void 0 : r.locale) == null ? void 0 : b.options) == null ? void 0 : m.weekStartsOn) ? ? n.weekStartsOn ? ? ((k = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : k.weekStartsOn) ? ? 0,
        o = Ze(t);
    if (!Ed(o)) throw new RangeError("Invalid time value");
    let l = e.match(wh).map(E => {
        const w = E[0];
        if (w === "p" || w === "P") {
            const P = dh[w];
            return P(E, s.formatLong)
        }
        return E
    }).join("").match(bh).map(E => {
        if (E === "''") return {
            isToken: !1,
            value: "'"
        };
        const w = E[0];
        if (w === "'") return {
            isToken: !1,
            value: Sh(E)
        };
        if (Ea[w]) return {
            isToken: !0,
            value: E
        };
        if (w.match(kh)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + w + "`");
        return {
            isToken: !1,
            value: E
        }
    });
    s.localize.preprocessor && (l = s.localize.preprocessor(o, l));
    const c = {
        firstWeekContainsDate: a,
        weekStartsOn: i,
        locale: s
    };
    return l.map(E => {
        if (!E.isToken) return E.value;
        const w = E.value;
        (!(r != null && r.useAdditionalWeekYearTokens) && gh(w) || !(r != null && r.useAdditionalDayOfYearTokens) && mh(w)) && yh(w, e, String(t));
        const P = Ea[w[0]];
        return P(o, w, s.localize, c)
    }).join("")
}

function Sh(t) {
    const e = t.match(_h);
    return e ? e[1].replace(xh, "'") : t
}

function Eh(t, e, r, n) {
    function s(a) {
        return a instanceof r ? a : new r(function(i) {
            i(a)
        })
    }
    return new(r || (r = Promise))(function(a, i) {
        function o(u) {
            try {
                c(n.next(u))
            } catch (d) {
                i(d)
            }
        }

        function l(u) {
            try {
                c(n.throw(u))
            } catch (d) {
                i(d)
            }
        }

        function c(u) {
            u.done ? a(u.value) : s(u.value).then(o, l)
        }
        c((n = n.apply(t, e || [])).next())
    })
}
const Th = t => t ? (...e) => t(...e) : (...e) => fetch(...e);
class zs extends Error {
    constructor(e, r = "FunctionsError", n) {
        super(e), this.name = r, this.context = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            context: this.context
        }
    }
}
class Ch extends zs {
    constructor(e) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
    }
}
class Pa extends zs {
    constructor(e) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
    }
}
class Ra extends zs {
    constructor(e) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
    }
}
var Cs;
(function(t) {
    t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2"
})(Cs || (Cs = {}));
class Ah {
    constructor(e, {
        headers: r = {},
        customFetch: n,
        region: s = Cs.Any
    } = {}) {
        this.url = e, this.headers = r, this.region = s, this.fetch = Th(n)
    }
    setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`
    }
    invoke(e) {
        return Eh(this, arguments, void 0, function*(r, n = {}) {
            var s;
            let a, i;
            try {
                const {
                    headers: o,
                    method: l,
                    body: c,
                    signal: u,
                    timeout: d
                } = n;
                let f = {},
                    {
                        region: h
                    } = n;
                h || (h = this.region);
                const b = new URL(`${this.url}/${r}`);
                h && h !== "any" && (f["x-region"] = h, b.searchParams.set("forceFunctionRegion", h));
                let m;
                c && (o && !Object.prototype.hasOwnProperty.call(o, "Content-Type") || !o) ? typeof Blob < "u" && c instanceof Blob || c instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream", m = c) : typeof c == "string" ? (f["Content-Type"] = "text/plain", m = c) : typeof FormData < "u" && c instanceof FormData ? m = c : (f["Content-Type"] = "application/json", m = JSON.stringify(c)) : c && typeof c != "string" && !(typeof Blob < "u" && c instanceof Blob) && !(c instanceof ArrayBuffer) && !(typeof FormData < "u" && c instanceof FormData) ? m = JSON.stringify(c) : m = c;
                let y = u;
                d && (i = new AbortController, a = setTimeout(() => i.abort(), d), u ? (y = i.signal, u.addEventListener("abort", () => i.abort())) : y = i.signal);
                const k = yield this.fetch(b.toString(), {
                    method: l || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), o),
                    body: m,
                    signal: y
                }).catch(U => {
                    throw new Ch(U)
                }), E = k.headers.get("x-relay-error");
                if (E && E === "true") throw new Pa(k);
                if (!k.ok) throw new Ra(k);
                let w = ((s = k.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(),
                    P;
                return w === "application/json" ? P = yield k.json(): w === "application/octet-stream" || w === "application/pdf" ? P = yield k.blob(): w === "text/event-stream" ? P = k : w === "multipart/form-data" ? P = yield k.formData(): P = yield k.text(), {
                    data: P,
                    error: null,
                    response: k
                }
            } catch (o) {
                return {
                    data: null,
                    error: o,
                    response: o instanceof Ra || o instanceof Pa ? o.context : void 0
                }
            } finally {
                a && clearTimeout(a)
            }
        })
    }
}
const go = 3,
    Oa = t => Math.min(1e3 * 2 ** t, 3e4),
    Ph = [520, 503],
    yo = ["GET", "HEAD", "OPTIONS"];
var Rh = class extends Error {
    constructor(t) {
        super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            details: this.details,
            hint: this.hint,
            code: this.code
        }
    }
};

function ja(t, e) {
    return new Promise(r => {
        if (e != null && e.aborted) {
            r();
            return
        }
        const n = setTimeout(() => {
            e == null || e.removeEventListener("abort", s), r()
        }, t);

        function s() {
            clearTimeout(n), r()
        }
        e == null || e.addEventListener("abort", s)
    })
}

function Oh(t, e, r, n) {
    return !(!n || r >= go || !yo.includes(t) || !Ph.includes(e))
}
var jh = class {
        constructor(t) {
            var e, r, n, s, a;
            this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = t.method, this.url = t.url, this.headers = new Headers(t.headers), this.schema = t.schema, this.body = t.body, this.shouldThrowOnError = (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1, this.signal = t.signal, this.isMaybeSingle = (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1, this.shouldStripNulls = (n = t.shouldStripNulls) !== null && n !== void 0 ? n : !1, this.urlLengthLimit = (s = t.urlLengthLimit) !== null && s !== void 0 ? s : 8e3, this.retryEnabled = (a = t.retry) !== null && a !== void 0 ? a : !0, t.fetch ? this.fetch = t.fetch : this.fetch = fetch
        }
        throwOnError() {
            return this.shouldThrowOnError = !0, this
        }
        stripNulls() {
            if (this.headers.get("Accept") === "text/csv") throw new Error("stripNulls() cannot be used with csv()");
            return this.shouldStripNulls = !0, this
        }
        setHeader(t, e) {
            return this.headers = new Headers(this.headers), this.headers.set(t, e), this
        }
        retry(t) {
            return this.retryEnabled = t, this
        }
        then(t, e) {
            var r = this;
            if (this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json"), this.shouldStripNulls) {
                const i = this.headers.get("Accept");
                i === "application/vnd.pgrst.object+json" ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped") : (!i || i === "application/json") && this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped")
            }
            const n = this.fetch;
            let a = (async () => {
                let i = 0;
                for (;;) {
                    const c = new Headers(r.headers);
                    i > 0 && c.set("X-Retry-Count", String(i));
                    let u;
                    try {
                        u = await n(r.url.toString(), {
                            method: r.method,
                            headers: c,
                            body: JSON.stringify(r.body),
                            signal: r.signal
                        })
                    } catch (d) {
                        if ((d == null ? void 0 : d.name) === "AbortError" || (d == null ? void 0 : d.code) === "ABORT_ERR" || !yo.includes(r.method)) throw d;
                        if (r.retryEnabled && i < go) {
                            const f = Oa(i);
                            i++, await ja(f, r.signal);
                            continue
                        }
                        throw d
                    }
                    if (Oh(r.method, u.status, i, r.retryEnabled)) {
                        var o, l;
                        const d = (o = (l = u.headers) === null || l === void 0 ? void 0 : l.get("Retry-After")) !== null && o !== void 0 ? o : null,
                            f = d !== null ? Math.max(0, parseInt(d, 10) || 0) * 1e3 : Oa(i);
                        await u.text(), i++, await ja(f, r.signal);
                        continue
                    }
                    return await r.processResponse(u)
                }
            })();
            return this.shouldThrowOnError || (a = a.catch(i => {
                var o;
                let l = "",
                    c = "",
                    u = "";
                const d = i == null ? void 0 : i.cause;
                if (d) {
                    var f, h, b, m;
                    const E = (f = d == null ? void 0 : d.message) !== null && f !== void 0 ? f : "",
                        w = (h = d == null ? void 0 : d.code) !== null && h !== void 0 ? h : "";
                    l = `${(b=i==null?void 0:i.name)!==null&&b!==void 0?b:"FetchError"}: ${i==null?void 0:i.message}`, l += `

Caused by: ${(m=d==null?void 0:d.name)!==null&&m!==void 0?m:"Error"}: ${E}`, w && (l += ` (${w})`), d != null && d.stack && (l += `
${d.stack}`)
                } else {
                    var y;
                    l = (y = i == null ? void 0 : i.stack) !== null && y !== void 0 ? y : ""
                }
                const k = this.url.toString().length;
                return (i == null ? void 0 : i.name) === "AbortError" || (i == null ? void 0 : i.code) === "ABORT_ERR" ? (u = "", c = "Request was aborted (timeout or manual cancellation)", k > this.urlLengthLimit && (c += `. Note: Your request URL is ${k} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : ((d == null ? void 0 : d.name) === "HeadersOverflowError" || (d == null ? void 0 : d.code) === "UND_ERR_HEADERS_OVERFLOW") && (u = "", c = "HTTP headers exceeded server limits (typically 16KB)", k > this.urlLengthLimit && (c += `. Your request URL is ${k} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
                    success: !1,
                    error: {
                        message: `${(o=i==null?void 0:i.name)!==null&&o!==void 0?o:"FetchError"}: ${i==null?void 0:i.message}`,
                        details: l,
                        hint: c,
                        code: u
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ""
                }
            })), a.then(t, e)
        }
        async processResponse(t) {
            var e = this;
            let r = null,
                n = null,
                s = null,
                a = t.status,
                i = t.statusText;
            if (t.ok) {
                var o, l;
                if (e.method !== "HEAD") {
                    var c;
                    const f = await t.text();
                    f === "" || (e.headers.get("Accept") === "text/csv" || e.headers.get("Accept") && (!((c = e.headers.get("Accept")) === null || c === void 0) && c.includes("application/vnd.pgrst.plan+text")) ? n = f : n = JSON.parse(f))
                }
                const u = (o = e.headers.get("Prefer")) === null || o === void 0 ? void 0 : o.match(/count=(exact|planned|estimated)/),
                    d = (l = t.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
                u && d && d.length > 1 && (s = parseInt(d[1])), e.isMaybeSingle && Array.isArray(n) && (n.length > 1 ? (r = {
                    code: "PGRST116",
                    details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                }, n = null, s = null, a = 406, i = "Not Acceptable") : n.length === 1 ? n = n[0] : n = null)
            } else {
                const u = await t.text();
                try {
                    r = JSON.parse(u), Array.isArray(r) && t.status === 404 && (n = [], r = null, a = 200, i = "OK")
                } catch {
                    t.status === 404 && u === "" ? (a = 204, i = "No Content") : r = {
                        message: u
                    }
                }
                if (r && e.shouldThrowOnError) throw new Rh(r)
            }
            return {
                success: r === null,
                error: r,
                data: n,
                count: s,
                status: a,
                statusText: i
            }
        }
        returns() {
            return this
        }
        overrideTypes() {
            return this
        }
    },
    Nh = class extends jh {
        select(t) {
            let e = !1;
            const r = (t ? ? "*").split("").map(n => /\s/.test(n) && !e ? "" : (n === '"' && (e = !e), n)).join("");
            return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this
        }
        order(t, {
            ascending: e = !0,
            nullsFirst: r,
            foreignTable: n,
            referencedTable: s = n
        } = {}) {
            const a = s ? `${s}.order` : "order",
                i = this.url.searchParams.get(a);
            return this.url.searchParams.set(a, `${i?`${i},`:""}${t}.${e?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`), this
        }
        limit(t, {
            foreignTable: e,
            referencedTable: r = e
        } = {}) {
            const n = typeof r > "u" ? "limit" : `${r}.limit`;
            return this.url.searchParams.set(n, `${t}`), this
        }
        range(t, e, {
            foreignTable: r,
            referencedTable: n = r
        } = {}) {
            const s = typeof n > "u" ? "offset" : `${n}.offset`,
                a = typeof n > "u" ? "limit" : `${n}.limit`;
            return this.url.searchParams.set(s, `${t}`), this.url.searchParams.set(a, `${e-t+1}`), this
        }
        abortSignal(t) {
            return this.signal = t, this
        }
        single() {
            return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this
        }
        maybeSingle() {
            return this.isMaybeSingle = !0, this
        }
        csv() {
            return this.headers.set("Accept", "text/csv"), this
        }
        geojson() {
            return this.headers.set("Accept", "application/geo+json"), this
        }
        explain({
            analyze: t = !1,
            verbose: e = !1,
            settings: r = !1,
            buffers: n = !1,
            wal: s = !1,
            format: a = "text"
        } = {}) {
            var i;
            const o = [t ? "analyze" : null, e ? "verbose" : null, r ? "settings" : null, n ? "buffers" : null, s ? "wal" : null].filter(Boolean).join("|"),
                l = (i = this.headers.get("Accept")) !== null && i !== void 0 ? i : "application/json";
            return this.headers.set("Accept", `application/vnd.pgrst.plan+${a}; for="${l}"; options=${o};`), a === "json" ? this : this
        }
        rollback() {
            return this.headers.append("Prefer", "tx=rollback"), this
        }
        returns() {
            return this
        }
        maxAffected(t) {
            return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${t}`), this
        }
    };
const Na = new RegExp("[,()]");
var mr = class extends Nh {
        eq(t, e) {
            return this.url.searchParams.append(t, `eq.${e}`), this
        }
        neq(t, e) {
            return this.url.searchParams.append(t, `neq.${e}`), this
        }
        gt(t, e) {
            return this.url.searchParams.append(t, `gt.${e}`), this
        }
        gte(t, e) {
            return this.url.searchParams.append(t, `gte.${e}`), this
        }
        lt(t, e) {
            return this.url.searchParams.append(t, `lt.${e}`), this
        }
        lte(t, e) {
            return this.url.searchParams.append(t, `lte.${e}`), this
        }
        like(t, e) {
            return this.url.searchParams.append(t, `like.${e}`), this
        }
        likeAllOf(t, e) {
            return this.url.searchParams.append(t, `like(all).{${e.join(",")}}`), this
        }
        likeAnyOf(t, e) {
            return this.url.searchParams.append(t, `like(any).{${e.join(",")}}`), this
        }
        ilike(t, e) {
            return this.url.searchParams.append(t, `ilike.${e}`), this
        }
        ilikeAllOf(t, e) {
            return this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`), this
        }
        ilikeAnyOf(t, e) {
            return this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`), this
        }
        regexMatch(t, e) {
            return this.url.searchParams.append(t, `match.${e}`), this
        }
        regexIMatch(t, e) {
            return this.url.searchParams.append(t, `imatch.${e}`), this
        }
        is(t, e) {
            return this.url.searchParams.append(t, `is.${e}`), this
        }
        isDistinct(t, e) {
            return this.url.searchParams.append(t, `isdistinct.${e}`), this
        } in (t, e) {
            const r = Array.from(new Set(e)).map(n => typeof n == "string" && Na.test(n) ? `"${n}"` : `${n}`).join(",");
            return this.url.searchParams.append(t, `in.(${r})`), this
        }
        notIn(t, e) {
            const r = Array.from(new Set(e)).map(n => typeof n == "string" && Na.test(n) ? `"${n}"` : `${n}`).join(",");
            return this.url.searchParams.append(t, `not.in.(${r})`), this
        }
        contains(t, e) {
            return typeof e == "string" ? this.url.searchParams.append(t, `cs.${e}`) : Array.isArray(e) ? this.url.searchParams.append(t, `cs.{${e.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`), this
        }
        containedBy(t, e) {
            return typeof e == "string" ? this.url.searchParams.append(t, `cd.${e}`) : Array.isArray(e) ? this.url.searchParams.append(t, `cd.{${e.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`), this
        }
        rangeGt(t, e) {
            return this.url.searchParams.append(t, `sr.${e}`), this
        }
        rangeGte(t, e) {
            return this.url.searchParams.append(t, `nxl.${e}`), this
        }
        rangeLt(t, e) {
            return this.url.searchParams.append(t, `sl.${e}`), this
        }
        rangeLte(t, e) {
            return this.url.searchParams.append(t, `nxr.${e}`), this
        }
        rangeAdjacent(t, e) {
            return this.url.searchParams.append(t, `adj.${e}`), this
        }
        overlaps(t, e) {
            return typeof e == "string" ? this.url.searchParams.append(t, `ov.${e}`) : this.url.searchParams.append(t, `ov.{${e.join(",")}}`), this
        }
        textSearch(t, e, {
            config: r,
            type: n
        } = {}) {
            let s = "";
            n === "plain" ? s = "pl" : n === "phrase" ? s = "ph" : n === "websearch" && (s = "w");
            const a = r === void 0 ? "" : `(${r})`;
            return this.url.searchParams.append(t, `${s}fts${a}.${e}`), this
        }
        match(t) {
            return Object.entries(t).filter(([e, r]) => r !== void 0).forEach(([e, r]) => {
                this.url.searchParams.append(e, `eq.${r}`)
            }), this
        }
        not(t, e, r) {
            return this.url.searchParams.append(t, `not.${e}.${r}`), this
        }
        or(t, {
            foreignTable: e,
            referencedTable: r = e
        } = {}) {
            const n = r ? `${r}.or` : "or";
            return this.url.searchParams.append(n, `(${t})`), this
        }
        filter(t, e, r) {
            return this.url.searchParams.append(t, `${e}.${r}`), this
        }
    },
    Ih = class {
        constructor(t, {
            headers: e = {},
            schema: r,
            fetch: n,
            urlLengthLimit: s = 8e3,
            retry: a
        }) {
            this.url = t, this.headers = new Headers(e), this.schema = r, this.fetch = n, this.urlLengthLimit = s, this.retry = a
        }
        cloneRequestState() {
            return {
                url: new URL(this.url.toString()),
                headers: new Headers(this.headers)
            }
        }
        select(t, e) {
            const {
                head: r = !1,
                count: n
            } = e ? ? {}, s = r ? "HEAD" : "GET";
            let a = !1;
            const i = (t ? ? "*").split("").map(c => /\s/.test(c) && !a ? "" : (c === '"' && (a = !a), c)).join(""),
                {
                    url: o,
                    headers: l
                } = this.cloneRequestState();
            return o.searchParams.set("select", i), n && l.append("Prefer", `count=${n}`), new mr({
                method: s,
                url: o,
                headers: l,
                schema: this.schema,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
        insert(t, {
            count: e,
            defaultToNull: r = !0
        } = {}) {
            var n;
            const s = "POST",
                {
                    url: a,
                    headers: i
                } = this.cloneRequestState();
            if (e && i.append("Prefer", `count=${e}`), r || i.append("Prefer", "missing=default"), Array.isArray(t)) {
                const o = t.reduce((l, c) => l.concat(Object.keys(c)), []);
                if (o.length > 0) {
                    const l = [...new Set(o)].map(c => `"${c}"`);
                    a.searchParams.set("columns", l.join(","))
                }
            }
            return new mr({
                method: s,
                url: a,
                headers: i,
                schema: this.schema,
                body: t,
                fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
        upsert(t, {
            onConflict: e,
            ignoreDuplicates: r = !1,
            count: n,
            defaultToNull: s = !0
        } = {}) {
            var a;
            const i = "POST",
                {
                    url: o,
                    headers: l
                } = this.cloneRequestState();
            if (l.append("Prefer", `resolution=${r?"ignore":"merge"}-duplicates`), e !== void 0 && o.searchParams.set("on_conflict", e), n && l.append("Prefer", `count=${n}`), s || l.append("Prefer", "missing=default"), Array.isArray(t)) {
                const c = t.reduce((u, d) => u.concat(Object.keys(d)), []);
                if (c.length > 0) {
                    const u = [...new Set(c)].map(d => `"${d}"`);
                    o.searchParams.set("columns", u.join(","))
                }
            }
            return new mr({
                method: i,
                url: o,
                headers: l,
                schema: this.schema,
                body: t,
                fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
        update(t, {
            count: e
        } = {}) {
            var r;
            const n = "PATCH",
                {
                    url: s,
                    headers: a
                } = this.cloneRequestState();
            return e && a.append("Prefer", `count=${e}`), new mr({
                method: n,
                url: s,
                headers: a,
                schema: this.schema,
                body: t,
                fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
        delete({
            count: t
        } = {}) {
            var e;
            const r = "DELETE",
                {
                    url: n,
                    headers: s
                } = this.cloneRequestState();
            return t && s.append("Prefer", `count=${t}`), new mr({
                method: r,
                url: n,
                headers: s,
                schema: this.schema,
                fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            })
        }
    };

function on(t) {
    "@babel/helpers - typeof";
    return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, on(t)
}

function Lh(t, e) {
    if (on(t) != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(t, e || "default");
        if (on(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}

function $h(t) {
    var e = Lh(t, "string");
    return on(e) == "symbol" ? e : e + ""
}

function Dh(t, e, r) {
    return (e = $h(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Ia(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(s) {
            return Object.getOwnPropertyDescriptor(t, s).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Cn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Ia(Object(r), !0).forEach(function(n) {
            Dh(t, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ia(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return t
}
var Mh = class vo {
    constructor(e, {
        headers: r = {},
        schema: n,
        fetch: s,
        timeout: a,
        urlLengthLimit: i = 8e3,
        retry: o
    } = {}) {
        this.url = e, this.headers = new Headers(r), this.schemaName = n, this.urlLengthLimit = i;
        const l = s ? ? globalThis.fetch;
        a !== void 0 && a > 0 ? this.fetch = (c, u) => {
            const d = new AbortController,
                f = setTimeout(() => d.abort(), a),
                h = u == null ? void 0 : u.signal;
            if (h) {
                if (h.aborted) return clearTimeout(f), l(c, u);
                const b = () => {
                    clearTimeout(f), d.abort()
                };
                return h.addEventListener("abort", b, {
                    once: !0
                }), l(c, Cn(Cn({}, u), {}, {
                    signal: d.signal
                })).finally(() => {
                    clearTimeout(f), h.removeEventListener("abort", b)
                })
            }
            return l(c, Cn(Cn({}, u), {}, {
                signal: d.signal
            })).finally(() => clearTimeout(f))
        } : this.fetch = l, this.retry = o
    }
    from(e) {
        if (!e || typeof e != "string" || e.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
        return new Ih(new URL(`${this.url}/${e}`), {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    schema(e) {
        return new vo(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    rpc(e, r = {}, {
        head: n = !1,
        get: s = !1,
        count: a
    } = {}) {
        var i;
        let o;
        const l = new URL(`${this.url}/rpc/${e}`);
        let c;
        const u = h => h !== null && typeof h == "object" && (!Array.isArray(h) || h.some(u)),
            d = n && Object.values(r).some(u);
        d ? (o = "POST", c = r) : n || s ? (o = n ? "HEAD" : "GET", Object.entries(r).filter(([h, b]) => b !== void 0).map(([h, b]) => [h, Array.isArray(b) ? `{${b.join(",")}}` : `${b}`]).forEach(([h, b]) => {
            l.searchParams.append(h, b)
        })) : (o = "POST", c = r);
        const f = new Headers(this.headers);
        return d ? f.set("Prefer", a ? `count=${a},return=minimal` : "return=minimal") : a && f.set("Prefer", `count=${a}`), new mr({
            method: o,
            url: l,
            headers: f,
            schema: this.schemaName,
            body: c,
            fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
};
class Uh {
    constructor() {}
    static detectEnvironment() {
        var e;
        if (typeof WebSocket < "u") return {
            type: "native",
            constructor: WebSocket
        };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u") return {
            type: "native",
            constructor: globalThis.WebSocket
        };
        if (typeof global < "u" && typeof global.WebSocket < "u") return {
            type: "native",
            constructor: global.WebSocket
        };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u") return {
            type: "cloudflare",
            error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
            workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
        };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge"))) return {
            type: "unsupported",
            error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
            workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
        };
        const r = globalThis.process;
        if (r) {
            const n = r.versions;
            if (n && n.node) {
                const s = n.node,
                    a = parseInt(s.replace(/^v/, "").split(".")[0]);
                return a >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${a} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${a} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const e = this.detectEnvironment();
        if (e.constructor) return e.constructor;
        let r = e.error || "WebSocket not supported in this environment.";
        throw e.workaround && (r += `

Suggested solution: ${e.workaround}`), new Error(r)
    }
    static isWebSocketSupported() {
        try {
            const e = this.detectEnvironment();
            return e.type === "native" || e.type === "ws"
        } catch {
            return !1
        }
    }
}
const Bh = "2.103.0",
    qh = `realtime-js/${Bh}`,
    Fh = "1.0.0",
    bo = "2.0.0",
    Wh = bo,
    Hh = 1e4,
    zh = 100,
    At = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
    },
    wo = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        reply: "phx_reply",
        leave: "phx_leave",
        access_token: "access_token"
    },
    As = {
        connecting: "connecting",
        open: "open",
        closing: "closing",
        closed: "closed"
    };
class Vh {
    constructor(e) {
        this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = {
            userBroadcastPush: 3,
            userBroadcast: 4
        }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = e ? ? []
    }
    encode(e, r) {
        if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string") return r(this._binaryEncodeUserBroadcastPush(e));
        let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return r(JSON.stringify(n))
    }
    _binaryEncodeUserBroadcastPush(e) {
        var r;
        return this._isArrayBuffer((r = e.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e)
    }
    _encodeBinaryUserBroadcastPush(e) {
        var r, n;
        const s = (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
        return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s)
    }
    _encodeJsonUserBroadcastPush(e) {
        var r, n;
        const s = (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {},
            i = new TextEncoder().encode(JSON.stringify(s)).buffer;
        return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, i)
    }
    _encodeUserBroadcastPush(e, r, n) {
        var s, a;
        const i = e.topic,
            o = (s = e.ref) !== null && s !== void 0 ? s : "",
            l = (a = e.join_ref) !== null && a !== void 0 ? a : "",
            c = e.payload.event,
            u = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {},
            d = Object.keys(u).length === 0 ? "" : JSON.stringify(u);
        if (l.length > 255) throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
        if (o.length > 255) throw new Error(`ref length ${o.length} exceeds maximum of 255`);
        if (i.length > 255) throw new Error(`topic length ${i.length} exceeds maximum of 255`);
        if (c.length > 255) throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);
        if (d.length > 255) throw new Error(`metadata length ${d.length} exceeds maximum of 255`);
        const f = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + o.length + i.length + c.length + d.length,
            h = new ArrayBuffer(this.HEADER_LENGTH + f);
        let b = new DataView(h),
            m = 0;
        b.setUint8(m++, this.KINDS.userBroadcastPush), b.setUint8(m++, l.length), b.setUint8(m++, o.length), b.setUint8(m++, i.length), b.setUint8(m++, c.length), b.setUint8(m++, d.length), b.setUint8(m++, r), Array.from(l, k => b.setUint8(m++, k.charCodeAt(0))), Array.from(o, k => b.setUint8(m++, k.charCodeAt(0))), Array.from(i, k => b.setUint8(m++, k.charCodeAt(0))), Array.from(c, k => b.setUint8(m++, k.charCodeAt(0))), Array.from(d, k => b.setUint8(m++, k.charCodeAt(0)));
        var y = new Uint8Array(h.byteLength + n.byteLength);
        return y.set(new Uint8Array(h), 0), y.set(new Uint8Array(n), h.byteLength), y.buffer
    }
    decode(e, r) {
        if (this._isArrayBuffer(e)) {
            let n = this._binaryDecode(e);
            return r(n)
        }
        if (typeof e == "string") {
            const n = JSON.parse(e),
                [s, a, i, o, l] = n;
            return r({
                join_ref: s,
                ref: a,
                topic: i,
                event: o,
                payload: l
            })
        }
        return r({})
    }
    _binaryDecode(e) {
        const r = new DataView(e),
            n = r.getUint8(0),
            s = new TextDecoder;
        switch (n) {
            case this.KINDS.userBroadcast:
                return this._decodeUserBroadcast(e, r, s)
        }
    }
    _decodeUserBroadcast(e, r, n) {
        const s = r.getUint8(1),
            a = r.getUint8(2),
            i = r.getUint8(3),
            o = r.getUint8(4);
        let l = this.HEADER_LENGTH + 4;
        const c = n.decode(e.slice(l, l + s));
        l = l + s;
        const u = n.decode(e.slice(l, l + a));
        l = l + a;
        const d = n.decode(e.slice(l, l + i));
        l = l + i;
        const f = e.slice(l, e.byteLength),
            h = o === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f,
            b = {
                type: this.BROADCAST_EVENT,
                event: u,
                payload: h
            };
        return i > 0 && (b.meta = JSON.parse(d)), {
            join_ref: null,
            ref: null,
            topic: c,
            event: this.BROADCAST_EVENT,
            payload: b
        }
    }
    _isArrayBuffer(e) {
        var r;
        return e instanceof ArrayBuffer || ((r = e == null ? void 0 : e.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer"
    }
    _pick(e, r) {
        return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([n]) => r.includes(n)))
    }
}
var re;
(function(t) {
    t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange"
})(re || (re = {}));
const La = (t, e, r = {}) => {
        var n;
        const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
        return e ? Object.keys(e).reduce((a, i) => (a[i] = Kh(i, t, e, s), a), {}) : {}
    },
    Kh = (t, e, r, n) => {
        const s = e.find(o => o.name === t),
            a = s == null ? void 0 : s.type,
            i = r[t];
        return a && !n.includes(a) ? _o(a, i) : Ps(i)
    },
    _o = (t, e) => {
        if (t.charAt(0) === "_") {
            const r = t.slice(1, t.length);
            return Qh(e, r)
        }
        switch (t) {
            case re.bool:
                return Gh(e);
            case re.float4:
            case re.float8:
            case re.int2:
            case re.int4:
            case re.int8:
            case re.numeric:
            case re.oid:
                return Jh(e);
            case re.json:
            case re.jsonb:
                return Yh(e);
            case re.timestamp:
                return Xh(e);
            case re.abstime:
            case re.date:
            case re.daterange:
            case re.int4range:
            case re.int8range:
            case re.money:
            case re.reltime:
            case re.text:
            case re.time:
            case re.timestamptz:
            case re.timetz:
            case re.tsrange:
            case re.tstzrange:
                return Ps(e);
            default:
                return Ps(e)
        }
    },
    Ps = t => t,
    Gh = t => {
        switch (t) {
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return t
        }
    },
    Jh = t => {
        if (typeof t == "string") {
            const e = parseFloat(t);
            if (!Number.isNaN(e)) return e
        }
        return t
    },
    Yh = t => {
        if (typeof t == "string") try {
            return JSON.parse(t)
        } catch {
            return t
        }
        return t
    },
    Qh = (t, e) => {
        if (typeof t != "string") return t;
        const r = t.length - 1,
            n = t[r];
        if (t[0] === "{" && n === "}") {
            let a;
            const i = t.slice(1, r);
            try {
                a = JSON.parse("[" + i + "]")
            } catch {
                a = i ? i.split(",") : []
            }
            return a.map(o => _o(e, o))
        }
        return t
    },
    Xh = t => typeof t == "string" ? t.replace(" ", "T") : t,
    xo = t => {
        const e = new URL(t);
        return e.protocol = e.protocol.replace(/^ws/i, "http"), e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast", e.href
    };
var Xr = t => typeof t == "function" ? t : function() {
        return t
    },
    Zh = typeof self < "u" ? self : null,
    gr = typeof window < "u" ? window : null,
    st = Zh || gr || globalThis,
    ef = "2.0.0",
    tf = 1e4,
    rf = 1e3,
    lt = {
        connecting: 0,
        open: 1,
        closing: 2,
        closed: 3
    },
    Pe = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
    },
    yt = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        reply: "phx_reply",
        leave: "phx_leave"
    },
    Rs = {
        longpoll: "longpoll",
        websocket: "websocket"
    },
    nf = {
        complete: 4
    },
    Os = "base64url.bearer.phx.",
    An = class {
        constructor(t, e, r, n) {
            this.channel = t, this.event = e, this.payload = r || function() {
                return {}
            }, this.receivedResp = null, this.timeout = n, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0
        }
        resend(t) {
            this.timeout = t, this.reset(), this.send()
        }
        send() {
            this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload(),
                ref: this.ref,
                join_ref: this.channel.joinRef()
            }))
        }
        receive(t, e) {
            return this.hasReceived(t) && e(this.receivedResp.response), this.recHooks.push({
                status: t,
                callback: e
            }), this
        }
        reset() {
            this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1
        }
        destroy() {
            this.cancelRefEvent(), this.cancelTimeout()
        }
        matchReceive({
            status: t,
            response: e,
            _ref: r
        }) {
            this.recHooks.filter(n => n.status === t).forEach(n => n.callback(e))
        }
        cancelRefEvent() {
            this.refEvent && this.channel.off(this.refEvent)
        }
        cancelTimeout() {
            clearTimeout(this.timeoutTimer), this.timeoutTimer = null
        }
        startTimeout() {
            this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, t => {
                this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = t, this.matchReceive(t)
            }), this.timeoutTimer = setTimeout(() => {
                this.trigger("timeout", {})
            }, this.timeout)
        }
        hasReceived(t) {
            return this.receivedResp && this.receivedResp.status === t
        }
        trigger(t, e) {
            this.channel.trigger(this.refEvent, {
                status: t,
                response: e
            })
        }
    },
    ko = class {
        constructor(t, e) {
            this.callback = t, this.timerCalc = e, this.timer = void 0, this.tries = 0
        }
        reset() {
            this.tries = 0, clearTimeout(this.timer)
        }
        scheduleTimeout() {
            clearTimeout(this.timer), this.timer = setTimeout(() => {
                this.tries = this.tries + 1, this.callback()
            }, this.timerCalc(this.tries + 1))
        }
    },
    sf = class {
        constructor(t, e, r) {
            this.state = Pe.closed, this.topic = t, this.params = Xr(e || {}), this.socket = r, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new An(this, yt.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new ko(() => {
                this.socket.isConnected() && this.rejoin()
            }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(() => {
                this.rejoinTimer.reset(), this.isErrored() && this.rejoin()
            })), this.joinPush.receive("ok", () => {
                this.state = Pe.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(n => n.send()), this.pushBuffer = []
            }), this.joinPush.receive("error", n => {
                this.state = Pe.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, n), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
            }), this.onClose(() => {
                this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = Pe.closed, this.socket.remove(this)
            }), this.onError(n => {
                this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, n), this.isJoining() && this.joinPush.reset(), this.state = Pe.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
            }), this.joinPush.receive("timeout", () => {
                this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new An(this, yt.leave, Xr({}), this.timeout).send(), this.state = Pe.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
            }), this.on(yt.reply, (n, s) => {
                this.trigger(this.replyEventName(s), n)
            })
        }
        join(t = this.timeout) {
            if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
            return this.timeout = t, this.joinedOnce = !0, this.rejoin(), this.joinPush
        }
        teardown() {
            this.pushBuffer.forEach(t => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = Pe.closed, this.bindings = []
        }
        onClose(t) {
            this.on(yt.close, t)
        }
        onError(t) {
            return this.on(yt.error, e => t(e))
        }
        on(t, e) {
            let r = this.bindingRef++;
            return this.bindings.push({
                event: t,
                ref: r,
                callback: e
            }), r
        }
        off(t, e) {
            this.bindings = this.bindings.filter(r => !(r.event === t && (typeof e > "u" || e === r.ref)))
        }
        canPush() {
            return this.socket.isConnected() && this.isJoined()
        }
        push(t, e, r = this.timeout) {
            if (e = e || {}, !this.joinedOnce) throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
            let n = new An(this, t, function() {
                return e
            }, r);
            return this.canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n
        }
        leave(t = this.timeout) {
            this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = Pe.leaving;
            let e = () => {
                    this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(yt.close, "leave")
                },
                r = new An(this, yt.leave, Xr({}), t);
            return r.receive("ok", () => e()).receive("timeout", () => e()), r.send(), this.canPush() || r.trigger("ok", {}), r
        }
        onMessage(t, e, r) {
            return e
        }
        filterBindings(t, e, r) {
            return !0
        }
        isMember(t, e, r, n) {
            return this.topic !== t ? !1 : n && n !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
                topic: t,
                event: e,
                payload: r,
                joinRef: n
            }), !1) : !0
        }
        joinRef() {
            return this.joinPush.ref
        }
        rejoin(t = this.timeout) {
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = Pe.joining, this.joinPush.resend(t))
        }
        trigger(t, e, r, n) {
            let s = this.onMessage(t, e, r, n);
            if (e && !s) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
            let a = this.bindings.filter(i => i.event === t && this.filterBindings(i, e, r));
            for (let i = 0; i < a.length; i++) a[i].callback(s, r, n || this.joinRef())
        }
        replyEventName(t) {
            return `chan_reply_${t}`
        }
        isClosed() {
            return this.state === Pe.closed
        }
        isErrored() {
            return this.state === Pe.errored
        }
        isJoined() {
            return this.state === Pe.joined
        }
        isJoining() {
            return this.state === Pe.joining
        }
        isLeaving() {
            return this.state === Pe.leaving
        }
    },
    Fn = class {
        static request(t, e, r, n, s, a, i) {
            if (st.XDomainRequest) {
                let o = new st.XDomainRequest;
                return this.xdomainRequest(o, t, e, n, s, a, i)
            } else if (st.XMLHttpRequest) {
                let o = new st.XMLHttpRequest;
                return this.xhrRequest(o, t, e, r, n, s, a, i)
            } else {
                if (st.fetch && st.AbortController) return this.fetchRequest(t, e, r, n, s, a, i);
                throw new Error("No suitable XMLHttpRequest implementation found")
            }
        }
        static fetchRequest(t, e, r, n, s, a, i) {
            let o = {
                    method: t,
                    headers: r,
                    body: n
                },
                l = null;
            return s && (l = new AbortController, setTimeout(() => l.abort(), s), o.signal = l.signal), st.fetch(e, o).then(c => c.text()).then(c => this.parseJSON(c)).then(c => i && i(c)).catch(c => {
                c.name === "AbortError" && a ? a() : i && i(null)
            }), l
        }
        static xdomainRequest(t, e, r, n, s, a, i) {
            return t.timeout = s, t.open(e, r), t.onload = () => {
                let o = this.parseJSON(t.responseText);
                i && i(o)
            }, a && (t.ontimeout = a), t.onprogress = () => {}, t.send(n), t
        }
        static xhrRequest(t, e, r, n, s, a, i, o) {
            t.open(e, r, !0), t.timeout = a;
            for (let [l, c] of Object.entries(n)) t.setRequestHeader(l, c);
            return t.onerror = () => o && o(null), t.onreadystatechange = () => {
                if (t.readyState === nf.complete && o) {
                    let l = this.parseJSON(t.responseText);
                    o(l)
                }
            }, i && (t.ontimeout = i), t.send(s), t
        }
        static parseJSON(t) {
            if (!t || t === "") return null;
            try {
                return JSON.parse(t)
            } catch {
                return console && console.log("failed to parse JSON response", t), null
            }
        }
        static serialize(t, e) {
            let r = [];
            for (var n in t) {
                if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
                let s = e ? `${e}[${n}]` : n,
                    a = t[n];
                typeof a == "object" ? r.push(this.serialize(a, s)) : r.push(encodeURIComponent(s) + "=" + encodeURIComponent(a))
            }
            return r.join("&")
        }
        static appendParams(t, e) {
            if (Object.keys(e).length === 0) return t;
            let r = t.match(/\?/) ? "&" : "?";
            return `${t}${r}${this.serialize(e)}`
        }
    },
    af = t => {
        let e = "",
            r = new Uint8Array(t),
            n = r.byteLength;
        for (let s = 0; s < n; s++) e += String.fromCharCode(r[s]);
        return btoa(e)
    },
    cr = class {
        constructor(t, e) {
            e && e.length === 2 && e[1].startsWith(Os) && (this.authToken = atob(e[1].slice(Os.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = new Set, this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = lt.connecting, setTimeout(() => this.poll(), 0)
        }
        normalizeEndpoint(t) {
            return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + Rs.websocket), "$1/" + Rs.longpoll)
        }
        endpointURL() {
            return Fn.appendParams(this.pollEndpoint, {
                token: this.token
            })
        }
        closeAndRetry(t, e, r) {
            this.close(t, e, r), this.readyState = lt.connecting
        }
        ontimeout() {
            this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1)
        }
        isActive() {
            return this.readyState === lt.open || this.readyState === lt.connecting
        }
        poll() {
            const t = {
                Accept: "application/json"
            };
            this.authToken && (t["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", t, null, () => this.ontimeout(), e => {
                if (e) {
                    var {
                        status: r,
                        token: n,
                        messages: s
                    } = e;
                    if (r === 410 && this.token !== null) {
                        this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
                        return
                    }
                    this.token = n
                } else r = 0;
                switch (r) {
                    case 200:
                        s.forEach(a => {
                            setTimeout(() => this.onmessage({
                                data: a
                            }), 0)
                        }), this.poll();
                        break;
                    case 204:
                        this.poll();
                        break;
                    case 410:
                        this.readyState = lt.open, this.onopen({}), this.poll();
                        break;
                    case 403:
                        this.onerror(403), this.close(1008, "forbidden", !1);
                        break;
                    case 0:
                    case 500:
                        this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
                        break;
                    default:
                        throw new Error(`unhandled poll status ${r}`)
                }
            })
        }
        send(t) {
            typeof t != "string" && (t = af(t)), this.currentBatch ? this.currentBatch.push(t) : this.awaitingBatchAck ? this.batchBuffer.push(t) : (this.currentBatch = [t], this.currentBatchTimer = setTimeout(() => {
                this.batchSend(this.currentBatch), this.currentBatch = null
            }, 0))
        }
        batchSend(t) {
            this.awaitingBatchAck = !0, this.ajax("POST", {
                "Content-Type": "application/x-ndjson"
            }, t.join(`
`), () => this.onerror("timeout"), e => {
                this.awaitingBatchAck = !1, !e || e.status !== 200 ? (this.onerror(e && e.status), this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = [])
            })
        }
        close(t, e, r) {
            for (let s of this.reqs) s.abort();
            this.readyState = lt.closed;
            let n = Object.assign({
                code: 1e3,
                reason: void 0,
                wasClean: !0
            }, {
                code: t,
                reason: e,
                wasClean: r
            });
            this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", n)) : this.onclose(n)
        }
        ajax(t, e, r, n, s) {
            let a, i = () => {
                this.reqs.delete(a), n()
            };
            a = Fn.request(t, this.endpointURL(), e, r, this.timeout, i, o => {
                this.reqs.delete(a), this.isActive() && s(o)
            }), this.reqs.add(a)
        }
    },
    of = class Jr {
        constructor(e, r = {}) {
            let n = r.events || {
                state: "presence_state",
                diff: "presence_diff"
            };
            this.state = {}, this.pendingDiffs = [], this.channel = e, this.joinRef = null, this.caller = {
                onJoin: function() {},
                onLeave: function() {},
                onSync: function() {}
            }, this.channel.on(n.state, s => {
                let {
                    onJoin: a,
                    onLeave: i,
                    onSync: o
                } = this.caller;
                this.joinRef = this.channel.joinRef(), this.state = Jr.syncState(this.state, s, a, i), this.pendingDiffs.forEach(l => {
                    this.state = Jr.syncDiff(this.state, l, a, i)
                }), this.pendingDiffs = [], o()
            }), this.channel.on(n.diff, s => {
                let {
                    onJoin: a,
                    onLeave: i,
                    onSync: o
                } = this.caller;
                this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = Jr.syncDiff(this.state, s, a, i), o())
            })
        }
        onJoin(e) {
            this.caller.onJoin = e
        }
        onLeave(e) {
            this.caller.onLeave = e
        }
        onSync(e) {
            this.caller.onSync = e
        }
        list(e) {
            return Jr.list(this.state, e)
        }
        inPendingSyncState() {
            return !this.joinRef || this.joinRef !== this.channel.joinRef()
        }
        static syncState(e, r, n, s) {
            let a = this.clone(e),
                i = {},
                o = {};
            return this.map(a, (l, c) => {
                r[l] || (o[l] = c)
            }), this.map(r, (l, c) => {
                let u = a[l];
                if (u) {
                    let d = c.metas.map(m => m.phx_ref),
                        f = u.metas.map(m => m.phx_ref),
                        h = c.metas.filter(m => f.indexOf(m.phx_ref) < 0),
                        b = u.metas.filter(m => d.indexOf(m.phx_ref) < 0);
                    h.length > 0 && (i[l] = c, i[l].metas = h), b.length > 0 && (o[l] = this.clone(u), o[l].metas = b)
                } else i[l] = c
            }), this.syncDiff(a, {
                joins: i,
                leaves: o
            }, n, s)
        }
        static syncDiff(e, r, n, s) {
            let {
                joins: a,
                leaves: i
            } = this.clone(r);
            return n || (n = function() {}), s || (s = function() {}), this.map(a, (o, l) => {
                let c = e[o];
                if (e[o] = this.clone(l), c) {
                    let u = e[o].metas.map(f => f.phx_ref),
                        d = c.metas.filter(f => u.indexOf(f.phx_ref) < 0);
                    e[o].metas.unshift(...d)
                }
                n(o, c, l)
            }), this.map(i, (o, l) => {
                let c = e[o];
                if (!c) return;
                let u = l.metas.map(d => d.phx_ref);
                c.metas = c.metas.filter(d => u.indexOf(d.phx_ref) < 0), s(o, c, l), c.metas.length === 0 && delete e[o]
            }), e
        }
        static list(e, r) {
            return r || (r = function(n, s) {
                return s
            }), this.map(e, (n, s) => r(n, s))
        }
        static map(e, r) {
            return Object.getOwnPropertyNames(e).map(n => r(n, e[n]))
        }
        static clone(e) {
            return JSON.parse(JSON.stringify(e))
        }
    },
    Pn = {
        HEADER_LENGTH: 1,
        META_LENGTH: 4,
        KINDS: {
            push: 0,
            reply: 1,
            broadcast: 2
        },
        encode(t, e) {
            if (t.payload.constructor === ArrayBuffer) return e(this.binaryEncode(t)); {
                let r = [t.join_ref, t.ref, t.topic, t.event, t.payload];
                return e(JSON.stringify(r))
            }
        },
        decode(t, e) {
            if (t.constructor === ArrayBuffer) return e(this.binaryDecode(t)); {
                let [r, n, s, a, i] = JSON.parse(t);
                return e({
                    join_ref: r,
                    ref: n,
                    topic: s,
                    event: a,
                    payload: i
                })
            }
        },
        binaryEncode(t) {
            let {
                join_ref: e,
                ref: r,
                event: n,
                topic: s,
                payload: a
            } = t, i = this.META_LENGTH + e.length + r.length + s.length + n.length, o = new ArrayBuffer(this.HEADER_LENGTH + i), l = new DataView(o), c = 0;
            l.setUint8(c++, this.KINDS.push), l.setUint8(c++, e.length), l.setUint8(c++, r.length), l.setUint8(c++, s.length), l.setUint8(c++, n.length), Array.from(e, d => l.setUint8(c++, d.charCodeAt(0))), Array.from(r, d => l.setUint8(c++, d.charCodeAt(0))), Array.from(s, d => l.setUint8(c++, d.charCodeAt(0))), Array.from(n, d => l.setUint8(c++, d.charCodeAt(0)));
            var u = new Uint8Array(o.byteLength + a.byteLength);
            return u.set(new Uint8Array(o), 0), u.set(new Uint8Array(a), o.byteLength), u.buffer
        },
        binaryDecode(t) {
            let e = new DataView(t),
                r = e.getUint8(0),
                n = new TextDecoder;
            switch (r) {
                case this.KINDS.push:
                    return this.decodePush(t, e, n);
                case this.KINDS.reply:
                    return this.decodeReply(t, e, n);
                case this.KINDS.broadcast:
                    return this.decodeBroadcast(t, e, n)
            }
        },
        decodePush(t, e, r) {
            let n = e.getUint8(1),
                s = e.getUint8(2),
                a = e.getUint8(3),
                i = this.HEADER_LENGTH + this.META_LENGTH - 1,
                o = r.decode(t.slice(i, i + n));
            i = i + n;
            let l = r.decode(t.slice(i, i + s));
            i = i + s;
            let c = r.decode(t.slice(i, i + a));
            i = i + a;
            let u = t.slice(i, t.byteLength);
            return {
                join_ref: o,
                ref: null,
                topic: l,
                event: c,
                payload: u
            }
        },
        decodeReply(t, e, r) {
            let n = e.getUint8(1),
                s = e.getUint8(2),
                a = e.getUint8(3),
                i = e.getUint8(4),
                o = this.HEADER_LENGTH + this.META_LENGTH,
                l = r.decode(t.slice(o, o + n));
            o = o + n;
            let c = r.decode(t.slice(o, o + s));
            o = o + s;
            let u = r.decode(t.slice(o, o + a));
            o = o + a;
            let d = r.decode(t.slice(o, o + i));
            o = o + i;
            let f = t.slice(o, t.byteLength),
                h = {
                    status: d,
                    response: f
                };
            return {
                join_ref: l,
                ref: c,
                topic: u,
                event: yt.reply,
                payload: h
            }
        },
        decodeBroadcast(t, e, r) {
            let n = e.getUint8(1),
                s = e.getUint8(2),
                a = this.HEADER_LENGTH + 2,
                i = r.decode(t.slice(a, a + n));
            a = a + n;
            let o = r.decode(t.slice(a, a + s));
            a = a + s;
            let l = t.slice(a, t.byteLength);
            return {
                join_ref: null,
                ref: null,
                topic: i,
                event: o,
                payload: l
            }
        }
    },
    lf = class {
        constructor(t, e = {}) {
            this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = e.timeout || tf, this.transport = e.transport || st.WebSocket || cr, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = e.longPollFallbackMs, this.fallbackTimer = null, this.sessionStore = e.sessionStorage || st && st.sessionStorage, this.establishedConnections = 0, this.defaultEncoder = Pn.encode.bind(Pn), this.defaultDecoder = Pn.decode.bind(Pn), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = e.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== cr ? (this.encode = e.encode || this.defaultEncoder, this.decode = e.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
            let r = null;
            gr && gr.addEventListener && (gr.addEventListener("pagehide", n => {
                this.conn && (this.disconnect(), r = this.connectClock)
            }), gr.addEventListener("pageshow", n => {
                r === this.connectClock && (r = null, this.connect())
            }), gr.addEventListener("visibilitychange", () => {
                document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()))
            })), this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = e.autoSendHeartbeat ? ? !0, this.heartbeatCallback = e.heartbeatCallback ? ? (() => {}), this.rejoinAfterMs = n => e.rejoinAfterMs ? e.rejoinAfterMs(n) : [1e3, 2e3, 5e3][n - 1] || 1e4, this.reconnectAfterMs = n => e.reconnectAfterMs ? e.reconnectAfterMs(n) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][n - 1] || 5e3, this.logger = e.logger || null, !this.logger && e.debug && (this.logger = (n, s, a) => {
                console.log(`${n}: ${s}`, a)
            }), this.longpollerTimeout = e.longpollerTimeout || 2e4, this.params = Xr(e.params || {}), this.endPoint = `${t}/${Rs.websocket}`, this.vsn = e.vsn || ef, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new ko(() => {
                if (this.pageHidden) {
                    this.log("Not reconnecting as page is hidden!"), this.teardown();
                    return
                }
                this.teardown(async () => {
                    e.beforeReconnect && await e.beforeReconnect(), this.connect()
                })
            }, this.reconnectAfterMs), this.authToken = e.authToken
        }
        getLongPollTransport() {
            return cr
        }
        replaceTransport(t) {
            this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = t
        }
        protocol() {
            return location.protocol.match(/^https/) ? "wss" : "ws"
        }
        endPointURL() {
            let t = Fn.appendParams(Fn.appendParams(this.endPoint, this.params()), {
                vsn: this.vsn
            });
            return t.charAt(0) !== "/" ? t : t.charAt(1) === "/" ? `${this.protocol()}:${t}` : `${this.protocol()}://${location.host}${t}`
        }
        disconnect(t, e, r) {
            this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
                this.disconnecting = !1, t && t()
            }, e, r)
        }
        connect(t) {
            t && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = Xr(t)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== cr ? this.connectWithFallback(cr, this.longPollFallbackMs) : this.transportConnect())
        }
        log(t, e, r) {
            this.logger && this.logger(t, e, r)
        }
        hasLogger() {
            return this.logger !== null
        }
        onOpen(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.open.push([e, t]), e
        }
        onClose(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.close.push([e, t]), e
        }
        onError(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.error.push([e, t]), e
        }
        onMessage(t) {
            let e = this.makeRef();
            return this.stateChangeCallbacks.message.push([e, t]), e
        }
        onHeartbeat(t) {
            this.heartbeatCallback = t
        }
        ping(t) {
            if (!this.isConnected()) return !1;
            let e = this.makeRef(),
                r = Date.now();
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: e
            });
            let n = this.onMessage(s => {
                s.ref === e && (this.off([n]), t(Date.now() - r))
            });
            return !0
        }
        transportName(t) {
            switch (t) {
                case cr:
                    return "LongPoll";
                default:
                    return t.name
            }
        }
        transportConnect() {
            this.connectClock++, this.closeWasClean = !1;
            let t;
            this.authToken && (t = ["phoenix", `${Os}${btoa(this.authToken).replace(/=/g,"")}`]), this.conn = new this.transport(this.endPointURL(), t), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = e => this.onConnError(e), this.conn.onmessage = e => this.onConnMessage(e), this.conn.onclose = e => this.onConnClose(e)
        }
        getSession(t) {
            return this.sessionStore && this.sessionStore.getItem(t)
        }
        storeSession(t, e) {
            this.sessionStore && this.sessionStore.setItem(t, e)
        }
        connectWithFallback(t, e = 2500) {
            clearTimeout(this.fallbackTimer);
            let r = !1,
                n = !0,
                s, a, i = this.transportName(t),
                o = l => {
                    this.log("transport", `falling back to ${i}...`, l), this.off([s, a]), n = !1, this.replaceTransport(t), this.transportConnect()
                };
            if (this.getSession(`phx:fallback:${i}`)) return o("memorized");
            this.fallbackTimer = setTimeout(o, e), a = this.onError(l => {
                this.log("transport", "error", l), n && !r && (clearTimeout(this.fallbackTimer), o(l))
            }), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
                if (r = !0, !n) {
                    let l = this.transportName(t);
                    return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${l}`, "true"), this.log("transport", `established ${l} fallback`)
                }
                clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(o, e), this.ping(l => {
                    this.log("transport", "connected to primary after", l), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer)
                })
            }), this.transportConnect()
        }
        clearHeartbeats() {
            clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer)
        }
        onConnOpen() {
            this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks("open")
        }
        heartbeatTimeout() {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
                try {
                    this.heartbeatCallback("timeout")
                } catch (t) {
                    this.log("error", "error in heartbeat callback", t)
                }
                this.triggerChanError(), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), rf, "heartbeat timeout")
            }
        }
        resetHeartbeat() {
            this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs))
        }
        teardown(t, e, r) {
            if (!this.conn) return t && t();
            const n = this.conn;
            this.waitForBufferDone(n, () => {
                e ? n.close(e, r || "") : n.close(), this.waitForSocketClosed(n, () => {
                    this.conn === n && (this.conn.onopen = function() {}, this.conn.onerror = function() {}, this.conn.onmessage = function() {}, this.conn.onclose = function() {}, this.conn = null), t && t()
                })
            })
        }
        waitForBufferDone(t, e, r = 1) {
            if (r === 5 || !t.bufferedAmount) {
                e();
                return
            }
            setTimeout(() => {
                this.waitForBufferDone(t, e, r + 1)
            }, 150 * r)
        }
        waitForSocketClosed(t, e, r = 1) {
            if (r === 5 || t.readyState === lt.closed) {
                e();
                return
            }
            setTimeout(() => {
                this.waitForSocketClosed(t, e, r + 1)
            }, 150 * r)
        }
        onConnClose(t) {
            this.conn && (this.conn.onclose = () => {}), this.hasLogger() && this.log("transport", "close", t), this.triggerChanError(), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks("close", t)
        }
        onConnError(t) {
            this.hasLogger() && this.log("transport", t);
            let e = this.transport,
                r = this.establishedConnections;
            this.triggerStateCallbacks("error", t, e, r), (e === this.transport || r > 0) && this.triggerChanError()
        }
        triggerChanError() {
            this.channels.forEach(t => {
                t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(yt.error)
            })
        }
        connectionState() {
            switch (this.conn && this.conn.readyState) {
                case lt.connecting:
                    return "connecting";
                case lt.open:
                    return "open";
                case lt.closing:
                    return "closing";
                default:
                    return "closed"
            }
        }
        isConnected() {
            return this.connectionState() === "open"
        }
        remove(t) {
            this.off(t.stateChangeRefs), this.channels = this.channels.filter(e => e !== t)
        }
        off(t) {
            for (let e in this.stateChangeCallbacks) this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(([r]) => t.indexOf(r) === -1)
        }
        channel(t, e = {}) {
            let r = new sf(t, e, this);
            return this.channels.push(r), r
        }
        push(t) {
            if (this.hasLogger()) {
                let {
                    topic: e,
                    event: r,
                    payload: n,
                    ref: s,
                    join_ref: a
                } = t;
                this.log("push", `${e} ${r} (${a}, ${s})`, n)
            }
            this.isConnected() ? this.encode(t, e => this.conn.send(e)) : this.sendBuffer.push(() => this.encode(t, e => this.conn.send(e)))
        }
        makeRef() {
            let t = this.ref + 1;
            return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString()
        }
        sendHeartbeat() {
            if (!this.isConnected()) {
                try {
                    this.heartbeatCallback("disconnected")
                } catch (t) {
                    this.log("error", "error in heartbeat callback", t)
                }
                return
            }
            if (this.pendingHeartbeatRef) {
                this.heartbeatTimeout();
                return
            }
            this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            });
            try {
                this.heartbeatCallback("sent")
            } catch (t) {
                this.log("error", "error in heartbeat callback", t)
            }
            this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs)
        }
        flushSendBuffer() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()), this.sendBuffer = [])
        }
        onConnMessage(t) {
            this.decode(t.data, e => {
                let {
                    topic: r,
                    event: n,
                    payload: s,
                    ref: a,
                    join_ref: i
                } = e;
                if (a && a === this.pendingHeartbeatRef) {
                    const o = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
                    this.clearHeartbeats();
                    try {
                        this.heartbeatCallback(s.status === "ok" ? "ok" : "error", o)
                    } catch (l) {
                        this.log("error", "error in heartbeat callback", l)
                    }
                    this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs))
                }
                this.hasLogger() && this.log("receive", `${s.status||""} ${r} ${n} ${a&&"("+a+")"||""}`.trim(), s);
                for (let o = 0; o < this.channels.length; o++) {
                    const l = this.channels[o];
                    l.isMember(r, n, s, i) && l.trigger(n, s, a, i)
                }
                this.triggerStateCallbacks("message", e)
            })
        }
        triggerStateCallbacks(t, ...e) {
            try {
                this.stateChangeCallbacks[t].forEach(([r, n]) => {
                    try {
                        n(...e)
                    } catch (s) {
                        this.log("error", `error in ${t} callback`, s)
                    }
                })
            } catch (r) {
                this.log("error", `error triggering ${t} callbacks`, r)
            }
        }
        leaveOpenTopic(t) {
            let e = this.channels.find(r => r.topic === t && (r.isJoined() || r.isJoining()));
            e && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${t}"`), e.leave())
        }
    };
class Zr {
    constructor(e, r) {
        const n = uf(r);
        this.presence = new of (e.getChannel(), n), this.presence.onJoin((s, a, i) => {
            const o = Zr.onJoinPayload(s, a, i);
            e.getChannel().trigger("presence", o)
        }), this.presence.onLeave((s, a, i) => {
            const o = Zr.onLeavePayload(s, a, i);
            e.getChannel().trigger("presence", o)
        }), this.presence.onSync(() => {
            e.getChannel().trigger("presence", {
                event: "sync"
            })
        })
    }
    get state() {
        return Zr.transformState(this.presence.state)
    }
    static transformState(e) {
        return e = cf(e), Object.getOwnPropertyNames(e).reduce((r, n) => {
            const s = e[n];
            return r[n] = Mn(s), r
        }, {})
    }
    static onJoinPayload(e, r, n) {
        const s = $a(r),
            a = Mn(n);
        return {
            event: "join",
            key: e,
            currentPresences: s,
            newPresences: a
        }
    }
    static onLeavePayload(e, r, n) {
        const s = $a(r),
            a = Mn(n);
        return {
            event: "leave",
            key: e,
            currentPresences: s,
            leftPresences: a
        }
    }
}

function Mn(t) {
    return t.metas.map(e => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e))
}

function cf(t) {
    return JSON.parse(JSON.stringify(t))
}

function uf(t) {
    return (t == null ? void 0 : t.events) && {
        events: t.events
    }
}

function $a(t) {
    return t != null && t.metas ? Mn(t) : []
}
var Da;
(function(t) {
    t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave"
})(Da || (Da = {}));
class df {
    get state() {
        return this.presenceAdapter.state
    }
    constructor(e, r) {
        this.channel = e, this.presenceAdapter = new Zr(this.channel.channelAdapter, r)
    }
}
class hf {
    constructor(e, r, n) {
        const s = ff(n);
        this.channel = e.getSocket().channel(r, s), this.socket = e
    }
    get state() {
        return this.channel.state
    }
    set state(e) {
        this.channel.state = e
    }
    get joinedOnce() {
        return this.channel.joinedOnce
    }
    get joinPush() {
        return this.channel.joinPush
    }
    get rejoinTimer() {
        return this.channel.rejoinTimer
    }
    on(e, r) {
        return this.channel.on(e, r)
    }
    off(e, r) {
        this.channel.off(e, r)
    }
    subscribe(e) {
        return this.channel.join(e)
    }
    unsubscribe(e) {
        return this.channel.leave(e)
    }
    teardown() {
        this.channel.teardown()
    }
    onClose(e) {
        this.channel.onClose(e)
    }
    onError(e) {
        return this.channel.onError(e)
    }
    push(e, r, n) {
        let s;
        try {
            s = this.channel.push(e, r, n)
        } catch {
            throw `tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`
        }
        if (this.channel.pushBuffer.length > zh) {
            const a = this.channel.pushBuffer.shift();
            a.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${a.event}`, a.payload())
        }
        return s
    }
    updateJoinPayload(e) {
        const r = this.channel.joinPush.payload();
        this.channel.joinPush.payload = () => Object.assign(Object.assign({}, r), e)
    }
    canPush() {
        return this.socket.isConnected() && this.state === At.joined
    }
    isJoined() {
        return this.state === At.joined
    }
    isJoining() {
        return this.state === At.joining
    }
    isClosed() {
        return this.state === At.closed
    }
    isLeaving() {
        return this.state === At.leaving
    }
    updateFilterBindings(e) {
        this.channel.filterBindings = e
    }
    updatePayloadTransform(e) {
        this.channel.onMessage = e
    }
    getChannel() {
        return this.channel
    }
}

function ff(t) {
    return {
        config: Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, t.config)
    }
}
var Ma;
(function(t) {
    t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE"
})(Ma || (Ma = {}));
var br;
(function(t) {
    t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system"
})(br || (br = {}));
var vt;
(function(t) {
    t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR"
})(vt || (vt = {}));
class en {
    get state() {
        return this.channelAdapter.state
    }
    set state(e) {
        this.channelAdapter.state = e
    }
    get joinedOnce() {
        return this.channelAdapter.joinedOnce
    }
    get timeout() {
        return this.socket.timeout
    }
    get joinPush() {
        return this.channelAdapter.joinPush
    }
    get rejoinTimer() {
        return this.channelAdapter.rejoinTimer
    }
    constructor(e, r = {
        config: {}
    }, n) {
        var s, a;
        if (this.topic = e, this.params = r, this.socket = n, this.bindings = {}, this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
                broadcast: {
                    ack: !1,
                    self: !1
                },
                presence: {
                    key: "",
                    enabled: !1
                },
                private: !1
            }, r.config), this.channelAdapter = new hf(this.socket.socketAdapter, e, this.params), this.presence = new df(this), this._onClose(() => {
                this.socket._remove(this)
            }), this._updateFilterTransform(), this.broadcastEndpointURL = xo(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((a = (s = this.params.config) === null || s === void 0 ? void 0 : s.broadcast) === null || a === void 0) && a.replay)) throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`
    }
    subscribe(e, r = this.timeout) {
        var n, s, a;
        if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
            const {
                config: {
                    broadcast: i,
                    presence: o,
                    private: l
                }
            } = this.params, c = (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(h => h.filter)) !== null && s !== void 0 ? s : [], u = !!this.bindings[br.PRESENCE] && this.bindings[br.PRESENCE].length > 0 || ((a = this.params.config.presence) === null || a === void 0 ? void 0 : a.enabled) === !0, d = {}, f = {
                broadcast: i,
                presence: Object.assign(Object.assign({}, o), {
                    enabled: u
                }),
                postgres_changes: c,
                private: l
            };
            this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError(h => {
                e == null || e(vt.CHANNEL_ERROR, h)
            }), this._onClose(() => e == null ? void 0 : e(vt.CLOSED)), this.updateJoinPayload(Object.assign({
                config: f
            }, d)), this._updateFilterMessage(), this.channelAdapter.subscribe(r).receive("ok", async ({
                postgres_changes: h
            }) => {
                if (this.socket._isManualToken() || this.socket.setAuth(), h === void 0) {
                    e == null || e(vt.SUBSCRIBED);
                    return
                }
                this._updatePostgresBindings(h, e)
            }).receive("error", h => {
                this.state = At.errored, e == null || e(vt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(h).join(", ") || "error")))
            }).receive("timeout", () => {
                e == null || e(vt.TIMED_OUT)
            })
        }
        return this
    }
    _updatePostgresBindings(e, r) {
        var n;
        const s = this.bindings.postgres_changes,
            a = (n = s == null ? void 0 : s.length) !== null && n !== void 0 ? n : 0,
            i = [];
        for (let o = 0; o < a; o++) {
            const l = s[o],
                {
                    filter: {
                        event: c,
                        schema: u,
                        table: d,
                        filter: f
                    }
                } = l,
                h = e && e[o];
            if (h && h.event === c && en.isFilterValueEqual(h.schema, u) && en.isFilterValueEqual(h.table, d) && en.isFilterValueEqual(h.filter, f)) i.push(Object.assign(Object.assign({}, l), {
                id: h.id
            }));
            else {
                this.unsubscribe(), this.state = At.errored, r == null || r(vt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                return
            }
        }
        this.bindings.postgres_changes = i, this.state != At.errored && r && r(vt.SUBSCRIBED)
    }
    presenceState() {
        return this.presence.state
    }
    async track(e, r = {}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: e
        }, r.timeout || this.timeout)
    }
    async untrack(e = {}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, e)
    }
    on(e, r, n) {
        const s = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
            a = e === br.PRESENCE || e === br.POSTGRES_CHANGES;
        if (s && a) throw this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
        return this._on(e, r, n)
    }
    async httpSend(e, r, n = {}) {
        var s;
        if (r == null) return Promise.reject("Payload is required for httpSend()");
        const a = {
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json"
        };
        this.socket.accessTokenValue && (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
        const i = {
                method: "POST",
                headers: a,
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: e,
                        payload: r,
                        private: this.private
                    }]
                })
            },
            o = await this._fetchWithTimeout(this.broadcastEndpointURL, i, (s = n.timeout) !== null && s !== void 0 ? s : this.timeout);
        if (o.status === 202) return {
            success: !0
        };
        let l = o.statusText;
        try {
            const c = await o.json();
            l = c.error || c.message || l
        } catch {}
        return Promise.reject(new Error(l))
    }
    async send(e, r = {}) {
        var n, s;
        if (!this.channelAdapter.canPush() && e.type === "broadcast") {
            console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
            const {
                event: a,
                payload: i
            } = e, o = {
                apikey: this.socket.apiKey ? this.socket.apiKey : "",
                "Content-Type": "application/json"
            };
            this.socket.accessTokenValue && (o.Authorization = `Bearer ${this.socket.accessTokenValue}`);
            const l = {
                method: "POST",
                headers: o,
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: a,
                        payload: i,
                        private: this.private
                    }]
                })
            };
            try {
                const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
                return await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()), c.ok ? "ok" : "error"
            } catch (c) {
                return c.name === "AbortError" ? "timed out" : "error"
            }
        } else return new Promise(a => {
            var i, o, l;
            const c = this.channelAdapter.push(e.type, e, r.timeout || this.timeout);
            e.type === "broadcast" && !(!((l = (o = (i = this.params) === null || i === void 0 ? void 0 : i.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && a("ok"), c.receive("ok", () => a("ok")), c.receive("error", () => a("error")), c.receive("timeout", () => a("timed out"))
        })
    }
    updateJoinPayload(e) {
        this.channelAdapter.updateJoinPayload(e)
    }
    async unsubscribe(e = this.timeout) {
        return new Promise(r => {
            this.channelAdapter.unsubscribe(e).receive("ok", () => r("ok")).receive("timeout", () => r("timed out")).receive("error", () => r("error"))
        })
    }
    teardown() {
        this.channelAdapter.teardown()
    }
    async _fetchWithTimeout(e, r, n) {
        const s = new AbortController,
            a = setTimeout(() => s.abort(), n),
            i = await this.socket.fetch(e, Object.assign(Object.assign({}, r), {
                signal: s.signal
            }));
        return clearTimeout(a), i
    }
    _on(e, r, n) {
        const s = e.toLocaleLowerCase(),
            a = this.channelAdapter.on(e, n),
            i = {
                type: s,
                filter: r,
                callback: n,
                ref: a
            };
        return this.bindings[s] ? this.bindings[s].push(i) : this.bindings[s] = [i], this._updateFilterMessage(), this
    }
    _onClose(e) {
        this.channelAdapter.onClose(e)
    }
    _onError(e) {
        this.channelAdapter.onError(e)
    }
    _updateFilterMessage() {
        this.channelAdapter.updateFilterBindings((e, r, n) => {
            var s, a, i, o, l, c, u;
            const d = e.event.toLocaleLowerCase();
            if (this._notThisChannelEvent(d, n)) return !1;
            const f = (s = this.bindings[d]) === null || s === void 0 ? void 0 : s.find(h => h.ref === e.ref);
            if (!f) return !0;
            if (["broadcast", "presence", "postgres_changes"].includes(d))
                if ("id" in f) {
                    const h = f.id,
                        b = (a = f.filter) === null || a === void 0 ? void 0 : a.event;
                    return h && ((i = r.ids) === null || i === void 0 ? void 0 : i.includes(h)) && (b === "*" || (b == null ? void 0 : b.toLocaleLowerCase()) === ((o = r.data) === null || o === void 0 ? void 0 : o.type.toLocaleLowerCase()))
                } else {
                    const h = (c = (l = f == null ? void 0 : f.filter) === null || l === void 0 ? void 0 : l.event) === null || c === void 0 ? void 0 : c.toLocaleLowerCase();
                    return h === "*" || h === ((u = r == null ? void 0 : r.event) === null || u === void 0 ? void 0 : u.toLocaleLowerCase())
                }
            else return f.type.toLocaleLowerCase() === d
        })
    }
    _notThisChannelEvent(e, r) {
        const {
            close: n,
            error: s,
            leave: a,
            join: i
        } = wo;
        return r && [n, s, a, i].includes(e) && r !== this.joinPush.ref
    }
    _updateFilterTransform() {
        this.channelAdapter.updatePayloadTransform((e, r, n) => {
            if (typeof r == "object" && "ids" in r) {
                const s = r.data,
                    {
                        schema: a,
                        table: i,
                        commit_timestamp: o,
                        type: l,
                        errors: c
                    } = s;
                return Object.assign(Object.assign({}, {
                    schema: a,
                    table: i,
                    commit_timestamp: o,
                    eventType: l,
                    new: {},
                    old: {},
                    errors: c
                }), this._getPayloadRecords(s))
            }
            return r
        })
    }
    copyBindings(e) {
        if (this.joinedOnce) throw new Error("cannot copy bindings into joined channel");
        for (const r in e.bindings)
            for (const n of e.bindings[r]) this._on(n.type, n.filter, n.callback)
    }
    static isFilterValueEqual(e, r) {
        return (e ? ? void 0) === (r ? ? void 0)
    }
    _getPayloadRecords(e) {
        const r = {
            new: {},
            old: {}
        };
        return (e.type === "INSERT" || e.type === "UPDATE") && (r.new = La(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (r.old = La(e.columns, e.old_record)), r
    }
}
class pf {
    constructor(e, r) {
        this.socket = new lf(e, r)
    }
    get timeout() {
        return this.socket.timeout
    }
    get endPoint() {
        return this.socket.endPoint
    }
    get transport() {
        return this.socket.transport
    }
    get heartbeatIntervalMs() {
        return this.socket.heartbeatIntervalMs
    }
    get heartbeatCallback() {
        return this.socket.heartbeatCallback
    }
    set heartbeatCallback(e) {
        this.socket.heartbeatCallback = e
    }
    get heartbeatTimer() {
        return this.socket.heartbeatTimer
    }
    get pendingHeartbeatRef() {
        return this.socket.pendingHeartbeatRef
    }
    get reconnectTimer() {
        return this.socket.reconnectTimer
    }
    get vsn() {
        return this.socket.vsn
    }
    get encode() {
        return this.socket.encode
    }
    get decode() {
        return this.socket.decode
    }
    get reconnectAfterMs() {
        return this.socket.reconnectAfterMs
    }
    get sendBuffer() {
        return this.socket.sendBuffer
    }
    get stateChangeCallbacks() {
        return this.socket.stateChangeCallbacks
    }
    connect() {
        this.socket.connect()
    }
    disconnect(e, r, n, s = 1e4) {
        return new Promise(a => {
            setTimeout(() => a("timeout"), s), this.socket.disconnect(() => {
                e(), a("ok")
            }, r, n)
        })
    }
    push(e) {
        this.socket.push(e)
    }
    log(e, r, n) {
        this.socket.log(e, r, n)
    }
    makeRef() {
        return this.socket.makeRef()
    }
    onOpen(e) {
        this.socket.onOpen(e)
    }
    onClose(e) {
        this.socket.onClose(e)
    }
    onError(e) {
        this.socket.onError(e)
    }
    onMessage(e) {
        this.socket.onMessage(e)
    }
    isConnected() {
        return this.socket.isConnected()
    }
    isConnecting() {
        return this.socket.connectionState() == As.connecting
    }
    isDisconnecting() {
        return this.socket.connectionState() == As.closing
    }
    connectionState() {
        return this.socket.connectionState()
    }
    endPointURL() {
        return this.socket.endPointURL()
    }
    sendHeartbeat() {
        this.socket.sendHeartbeat()
    }
    getSocket() {
        return this.socket
    }
}
const mf = {
        HEARTBEAT_INTERVAL: 25e3,
        RECONNECT_DELAY: 10,
        HEARTBEAT_TIMEOUT_FALLBACK: 100
    },
    gf = [1e3, 2e3, 5e3, 1e4],
    yf = 1e4,
    vf = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class bf {
    get endPoint() {
        return this.socketAdapter.endPoint
    }
    get timeout() {
        return this.socketAdapter.timeout
    }
    get transport() {
        return this.socketAdapter.transport
    }
    get heartbeatCallback() {
        return this.socketAdapter.heartbeatCallback
    }
    get heartbeatIntervalMs() {
        return this.socketAdapter.heartbeatIntervalMs
    }
    get heartbeatTimer() {
        return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer
    }
    get pendingHeartbeatRef() {
        return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef
    }
    get reconnectTimer() {
        return this.socketAdapter.reconnectTimer
    }
    get vsn() {
        return this.socketAdapter.vsn
    }
    get encode() {
        return this.socketAdapter.encode
    }
    get decode() {
        return this.socketAdapter.decode
    }
    get reconnectAfterMs() {
        return this.socketAdapter.reconnectAfterMs
    }
    get sendBuffer() {
        return this.socketAdapter.sendBuffer
    }
    get stateChangeCallbacks() {
        return this.socketAdapter.stateChangeCallbacks
    }
    constructor(e, r) {
        var n;
        if (this.channels = new Array, this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new Vh, this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._resolveFetch = a => a ? (...i) => a(...i) : (...i) => fetch(...i), !(!((n = r == null ? void 0 : r.params) === null || n === void 0) && n.apikey)) throw new Error("API key is required to connect to Realtime");
        this.apiKey = r.params.apikey;
        const s = this._initializeOptions(r);
        this.socketAdapter = new pf(e, s), this.httpEndpoint = xo(e), this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
            this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this._setupConnectionHandlers();
            try {
                this.socketAdapter.connect()
            } catch (e) {
                const r = e.message;
                throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`)
            }
            this._handleNodeJsRaceCondition()
        }
    }
    endpointURL() {
        return this.socketAdapter.endPointURL()
    }
    async disconnect(e, r) {
        return this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect(() => {
            clearInterval(this._workerHeartbeatTimer), this._terminateWorker()
        }, e, r)
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(e) {
        const r = await e.unsubscribe();
        return r === "ok" && e.teardown(), this.channels.length === 0 && this.disconnect(), r
    }
    async removeAllChannels() {
        const e = this.channels.map(async n => {
                const s = await n.unsubscribe();
                return n.teardown(), s
            }),
            r = await Promise.all(e);
        return this.disconnect(), r
    }
    log(e, r, n) {
        this.socketAdapter.log(e, r, n)
    }
    connectionState() {
        return this.socketAdapter.connectionState() || As.closed
    }
    isConnected() {
        return this.socketAdapter.isConnected()
    }
    isConnecting() {
        return this.socketAdapter.isConnecting()
    }
    isDisconnecting() {
        return this.socketAdapter.isDisconnecting()
    }
    channel(e, r = {
        config: {}
    }) {
        const n = `realtime:${e}`,
            s = this.getChannels().find(a => a.topic === n);
        if (s) return s; {
            const a = new en(`realtime:${e}`, r, this);
            return this.channels.push(a), a
        }
    }
    push(e) {
        this.socketAdapter.push(e)
    }
    async setAuth(e = null) {
        this._authPromise = this._performAuth(e);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    _isManualToken() {
        return this._manuallySetToken
    }
    async sendHeartbeat() {
        this.socketAdapter.sendHeartbeat()
    }
    onHeartbeat(e) {
        this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e)
    }
    _makeRef() {
        return this.socketAdapter.makeRef()
    }
    _remove(e) {
        this.channels = this.channels.filter(r => r.topic !== e.topic)
    }
    async _performAuth(e = null) {
        let r, n = !1;
        if (e) r = e, n = !0;
        else if (this.accessToken) try {
            r = await this.accessToken()
        } catch (s) {
            this.log("error", "Error fetching access token from callback", s), r = this.accessTokenValue
        } else r = this.accessTokenValue;
        n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach(s => {
            const a = {
                access_token: r,
                version: qh
            };
            r && s.updateJoinPayload(a), s.joinedOnce && s.channelAdapter.isJoined() && s.channelAdapter.push(wo.access_token, {
                access_token: r
            })
        }))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(e = "general") {
        this._isManualToken() || this.setAuth().catch(r => {
            this.log("error", `Error setting auth in ${e}`, r)
        })
    }
    _setupConnectionHandlers() {
        this.socketAdapter.onOpen(() => {
            (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch(r => {
                this.log("error", "error waiting for auth on connect", r)
            }), this.worker && !this.workerRef && this._startWorkerHeartbeat()
        }), this.socketAdapter.onClose(() => {
            this.worker && this.workerRef && this._terminateWorker()
        }), this.socketAdapter.onMessage(e => {
            e.ref && e.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null)
        })
    }
    _handleNodeJsRaceCondition() {
        this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen()
    }
    _wrapHeartbeatCallback(e) {
        return (r, n) => {
            r == "sent" && this._setAuthSafely(), e && e(r, n)
        }
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(e), this.workerRef.onerror = r => {
            this.log("worker", "worker error", r.message), this._terminateWorker(), this.disconnect()
        }, this.workerRef.onmessage = r => {
            r.data.event === "keepAlive" && this.sendHeartbeat()
        }, this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _terminateWorker() {
        this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0)
    }
    _workerObjectUrl(e) {
        let r;
        if (e) r = e;
        else {
            const n = new Blob([vf], {
                type: "application/javascript"
            });
            r = URL.createObjectURL(n)
        }
        return r
    }
    _initializeOptions(e) {
        var r, n, s, a, i, o, l, c, u;
        this.worker = (r = e == null ? void 0 : e.worker) !== null && r !== void 0 ? r : !1, this.accessToken = (n = e == null ? void 0 : e.accessToken) !== null && n !== void 0 ? n : null;
        const d = {};
        d.timeout = (s = e == null ? void 0 : e.timeout) !== null && s !== void 0 ? s : Hh, d.heartbeatIntervalMs = (a = e == null ? void 0 : e.heartbeatIntervalMs) !== null && a !== void 0 ? a : mf.HEARTBEAT_INTERVAL, d.transport = (i = e == null ? void 0 : e.transport) !== null && i !== void 0 ? i : Uh.getWebSocketConstructor(), d.params = e == null ? void 0 : e.params, d.logger = e == null ? void 0 : e.logger, d.heartbeatCallback = this._wrapHeartbeatCallback(e == null ? void 0 : e.heartbeatCallback), d.reconnectAfterMs = (o = e == null ? void 0 : e.reconnectAfterMs) !== null && o !== void 0 ? o : m => gf[m - 1] || yf;
        let f, h;
        const b = (l = e == null ? void 0 : e.vsn) !== null && l !== void 0 ? l : Wh;
        switch (b) {
            case Fh:
                f = (m, y) => y(JSON.stringify(m)), h = (m, y) => y(JSON.parse(m));
                break;
            case bo:
                f = this.serializer.encode.bind(this.serializer), h = this.serializer.decode.bind(this.serializer);
                break;
            default:
                throw new Error(`Unsupported serializer version: ${d.vsn}`)
        }
        if (d.vsn = b, d.encode = (c = e == null ? void 0 : e.encode) !== null && c !== void 0 ? c : f, d.decode = (u = e == null ? void 0 : e.decode) !== null && u !== void 0 ? u : h, d.beforeReconnect = this._reconnectAuth.bind(this), (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level, d.params = Object.assign(Object.assign({}, d.params), {
                log_level: this.logLevel
            })), this.worker) {
            if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
            this.workerUrl = e == null ? void 0 : e.workerUrl, d.autoSendHeartbeat = !this.worker
        }
        return d
    }
    async _reconnectAuth() {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect()
    }
}
var ln = class extends Error {
    constructor(t, e) {
        var r;
        super(t), this.name = "IcebergError", this.status = e.status, this.icebergType = e.icebergType, this.icebergCode = e.icebergCode, this.details = e.details, this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && ((r = e.icebergType) == null ? void 0 : r.includes("CommitState")) === !0
    }
    isNotFound() {
        return this.status === 404
    }
    isConflict() {
        return this.status === 409
    }
    isAuthenticationTimeout() {
        return this.status === 419
    }
};

function wf(t, e, r) {
    const n = new URL(e, t);
    if (r)
        for (const [s, a] of Object.entries(r)) a !== void 0 && n.searchParams.set(s, a);
    return n.toString()
}
async function _f(t) {
    return !t || t.type === "none" ? {} : t.type === "bearer" ? {
        Authorization: `Bearer ${t.token}`
    } : t.type === "header" ? {
        [t.name]: t.value
    } : t.type === "custom" ? await t.getHeaders() : {}
}

function xf(t) {
    const e = t.fetchImpl ? ? globalThis.fetch;
    return {
        async request({
            method: r,
            path: n,
            query: s,
            body: a,
            headers: i
        }) {
            const o = wf(t.baseUrl, n, s),
                l = await _f(t.auth),
                c = await e(o, {
                    method: r,
                    headers: { ...a ? {
                            "Content-Type": "application/json"
                        } : {},
                        ...l,
                        ...i
                    },
                    body: a ? JSON.stringify(a) : void 0
                }),
                u = await c.text(),
                d = (c.headers.get("content-type") || "").includes("application/json"),
                f = d && u ? JSON.parse(u) : u;
            if (!c.ok) {
                const h = d ? f : void 0,
                    b = h == null ? void 0 : h.error;
                throw new ln((b == null ? void 0 : b.message) ? ? `Request failed with status ${c.status}`, {
                    status: c.status,
                    icebergType: b == null ? void 0 : b.type,
                    icebergCode: b == null ? void 0 : b.code,
                    details: h
                })
            }
            return {
                status: c.status,
                headers: c.headers,
                data: f
            }
        }
    }
}

function Rn(t) {
    return t.join("")
}
var kf = class {
    constructor(t, e = "") {
        this.client = t, this.prefix = e
    }
    async listNamespaces(t) {
        const e = t ? {
            parent: Rn(t.namespace)
        } : void 0;
        return (await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces`,
            query: e
        })).data.namespaces.map(n => ({
            namespace: n
        }))
    }
    async createNamespace(t, e) {
        const r = {
            namespace: t.namespace,
            properties: e == null ? void 0 : e.properties
        };
        return (await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces`,
            body: r
        })).data
    }
    async dropNamespace(t) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${Rn(t.namespace)}`
        })
    }
    async loadNamespaceMetadata(t) {
        return {
            properties: (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${Rn(t.namespace)}`
            })).data.properties
        }
    }
    async namespaceExists(t) {
        try {
            return await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${Rn(t.namespace)}`
            }), !0
        } catch (e) {
            if (e instanceof ln && e.status === 404) return !1;
            throw e
        }
    }
    async createNamespaceIfNotExists(t, e) {
        try {
            return await this.createNamespace(t, e)
        } catch (r) {
            if (r instanceof ln && r.status === 409) return;
            throw r
        }
    }
};

function ur(t) {
    return t.join("")
}
var Sf = class {
        constructor(t, e = "", r) {
            this.client = t, this.prefix = e, this.accessDelegation = r
        }
        async listTables(t) {
            return (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${ur(t.namespace)}/tables`
            })).data.identifiers
        }
        async createTable(t, e) {
            const r = {};
            return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces/${ur(t.namespace)}/tables`,
                body: e,
                headers: r
            })).data.metadata
        }
        async updateTable(t, e) {
            const r = await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces/${ur(t.namespace)}/tables/${t.name}`,
                body: e
            });
            return {
                "metadata-location": r.data["metadata-location"],
                metadata: r.data.metadata
            }
        }
        async dropTable(t, e) {
            await this.client.request({
                method: "DELETE",
                path: `${this.prefix}/namespaces/${ur(t.namespace)}/tables/${t.name}`,
                query: {
                    purgeRequested: String((e == null ? void 0 : e.purge) ? ? !1)
                }
            })
        }
        async loadTable(t) {
            const e = {};
            return this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${ur(t.namespace)}/tables/${t.name}`,
                headers: e
            })).data.metadata
        }
        async tableExists(t) {
            const e = {};
            this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
            try {
                return await this.client.request({
                    method: "HEAD",
                    path: `${this.prefix}/namespaces/${ur(t.namespace)}/tables/${t.name}`,
                    headers: e
                }), !0
            } catch (r) {
                if (r instanceof ln && r.status === 404) return !1;
                throw r
            }
        }
        async createTableIfNotExists(t, e) {
            try {
                return await this.createTable(t, e)
            } catch (r) {
                if (r instanceof ln && r.status === 409) return await this.loadTable({
                    namespace: t.namespace,
                    name: e.name
                });
                throw r
            }
        }
    },
    Ef = class {
        constructor(t) {
            var n;
            let e = "v1";
            t.catalogName && (e += `/${t.catalogName}`);
            const r = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
            this.client = xf({
                baseUrl: r,
                auth: t.auth,
                fetchImpl: t.fetch
            }), this.accessDelegation = (n = t.accessDelegation) == null ? void 0 : n.join(","), this.namespaceOps = new kf(this.client, e), this.tableOps = new Sf(this.client, e, this.accessDelegation)
        }
        async listNamespaces(t) {
            return this.namespaceOps.listNamespaces(t)
        }
        async createNamespace(t, e) {
            return this.namespaceOps.createNamespace(t, e)
        }
        async dropNamespace(t) {
            await this.namespaceOps.dropNamespace(t)
        }
        async loadNamespaceMetadata(t) {
            return this.namespaceOps.loadNamespaceMetadata(t)
        }
        async listTables(t) {
            return this.tableOps.listTables(t)
        }
        async createTable(t, e) {
            return this.tableOps.createTable(t, e)
        }
        async updateTable(t, e) {
            return this.tableOps.updateTable(t, e)
        }
        async dropTable(t, e) {
            await this.tableOps.dropTable(t, e)
        }
        async loadTable(t) {
            return this.tableOps.loadTable(t)
        }
        async namespaceExists(t) {
            return this.namespaceOps.namespaceExists(t)
        }
        async tableExists(t) {
            return this.tableOps.tableExists(t)
        }
        async createNamespaceIfNotExists(t, e) {
            return this.namespaceOps.createNamespaceIfNotExists(t, e)
        }
        async createTableIfNotExists(t, e) {
            return this.tableOps.createTableIfNotExists(t, e)
        }
    },
    es = class extends Error {
        constructor(t, e = "storage", r, n) {
            super(t), this.__isStorageError = !0, this.namespace = e, this.name = e === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = n
        }
    };

function ts(t) {
    return typeof t == "object" && t !== null && "__isStorageError" in t
}
var js = class extends es {
        constructor(t, e, r, n = "storage") {
            super(t, n, e, r), this.name = n === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = e, this.statusCode = r
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                statusCode: this.statusCode
            }
        }
    },
    So = class extends es {
        constructor(t, e, r = "storage") {
            super(t, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = e
        }
    };
const Tf = t => t ? (...e) => t(...e) : (...e) => fetch(...e),
    Cf = t => {
        if (typeof t != "object" || t === null) return !1;
        const e = Object.getPrototypeOf(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
    },
    Ns = t => {
        if (Array.isArray(t)) return t.map(r => Ns(r));
        if (typeof t == "function" || t !== Object(t)) return t;
        const e = {};
        return Object.entries(t).forEach(([r, n]) => {
            const s = r.replace(/([-_][a-z])/gi, a => a.toUpperCase().replace(/[-_]/g, ""));
            e[s] = Ns(n)
        }), e
    },
    Af = t => !t || typeof t != "string" || t.length === 0 || t.length > 100 || t.trim() !== t || t.includes("/") || t.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t);

function cn(t) {
    "@babel/helpers - typeof";
    return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, cn(t)
}

function Pf(t, e) {
    if (cn(t) != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(t, e || "default");
        if (cn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}

function Rf(t) {
    var e = Pf(t, "string");
    return cn(e) == "symbol" ? e : e + ""
}

function Of(t, e, r) {
    return (e = Rf(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Ua(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(s) {
            return Object.getOwnPropertyDescriptor(t, s).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function I(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Ua(Object(r), !0).forEach(function(n) {
            Of(t, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ua(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return t
}
const Ba = t => {
        var e;
        return t.msg || t.message || t.error_description || (typeof t.error == "string" ? t.error : (e = t.error) === null || e === void 0 ? void 0 : e.message) || JSON.stringify(t)
    },
    jf = async (t, e, r, n) => {
        if (t !== null && typeof t == "object" && typeof t.json == "function") {
            const s = t;
            let a = parseInt(s.status, 10);
            Number.isFinite(a) || (a = 500), s.json().then(i => {
                const o = (i == null ? void 0 : i.statusCode) || (i == null ? void 0 : i.code) || a + "";
                e(new js(Ba(i), a, o, n))
            }).catch(() => {
                const i = a + "";
                e(new js(s.statusText || `HTTP ${a} error`, a, i, n))
            })
        } else e(new So(Ba(t), t, n))
    },
    Nf = (t, e, r, n) => {
        const s = {
            method: t,
            headers: (e == null ? void 0 : e.headers) || {}
        };
        if (t === "GET" || t === "HEAD" || !n) return I(I({}, s), r);
        if (Cf(n)) {
            var a;
            const i = (e == null ? void 0 : e.headers) || {};
            let o;
            for (const [l, c] of Object.entries(i)) l.toLowerCase() === "content-type" && (o = c);
            s.headers = If(i, "Content-Type", (a = o) !== null && a !== void 0 ? a : "application/json"), s.body = JSON.stringify(n)
        } else s.body = n;
        return e != null && e.duplex && (s.duplex = e.duplex), I(I({}, s), r)
    };

function If(t, e, r) {
    const n = I({}, t);
    for (const s of Object.keys(n)) s.toLowerCase() === e.toLowerCase() && delete n[s];
    return n[e] = r, n
}
async function Kr(t, e, r, n, s, a, i) {
    return new Promise((o, l) => {
        t(r, Nf(e, n, s, a)).then(c => {
            if (!c.ok) throw c;
            if (n != null && n.noResolveJson) return c;
            if (i === "vectors") {
                const u = c.headers.get("content-type");
                if (c.headers.get("content-length") === "0" || c.status === 204) return {};
                if (!u || !u.includes("application/json")) return {}
            }
            return c.json()
        }).then(c => o(c)).catch(c => jf(c, l, n, i))
    })
}

function Eo(t = "storage") {
    return {
        get: async (e, r, n, s) => Kr(e, "GET", r, n, s, void 0, t),
        post: async (e, r, n, s, a) => Kr(e, "POST", r, s, a, n, t),
        put: async (e, r, n, s, a) => Kr(e, "PUT", r, s, a, n, t),
        head: async (e, r, n, s) => Kr(e, "HEAD", r, I(I({}, n), {}, {
            noResolveJson: !0
        }), s, void 0, t),
        remove: async (e, r, n, s, a) => Kr(e, "DELETE", r, s, a, n, t)
    }
}
const Lf = Eo("storage"),
    {
        get: un,
        post: Ye,
        put: Is,
        head: $f,
        remove: Vs
    } = Lf,
    De = Eo("vectors");
var Ir = class {
        constructor(t, e = {}, r, n = "storage") {
            this.shouldThrowOnError = !1, this.url = t, this.headers = Object.fromEntries(Object.entries(e).map(([s, a]) => [s.toLowerCase(), a])), this.fetch = Tf(r), this.namespace = n
        }
        throwOnError() {
            return this.shouldThrowOnError = !0, this
        }
        setHeader(t, e) {
            return this.headers = I(I({}, this.headers), {}, {
                [t.toLowerCase()]: e
            }), this
        }
        async handleOperation(t) {
            var e = this;
            try {
                return {
                    data: await t(),
                    error: null
                }
            } catch (r) {
                if (e.shouldThrowOnError) throw r;
                if (ts(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        }
    },
    Df = class {
        constructor(t, e) {
            this.downloadFn = t, this.shouldThrowOnError = e
        }
        then(t, e) {
            return this.execute().then(t, e)
        }
        async execute() {
            var t = this;
            try {
                return {
                    data: (await t.downloadFn()).body,
                    error: null
                }
            } catch (e) {
                if (t.shouldThrowOnError) throw e;
                if (ts(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        }
    };
let To;
To = Symbol.toStringTag;
var Mf = class {
    constructor(t, e) {
        this.downloadFn = t, this.shouldThrowOnError = e, this[To] = "BlobDownloadBuilder", this.promise = null
    }
    asStream() {
        return new Df(this.downloadFn, this.shouldThrowOnError)
    }
    then(t, e) {
        return this.getPromise().then(t, e)
    } catch (t) {
        return this.getPromise().catch(t)
    } finally(t) {
        return this.getPromise().finally(t)
    }
    getPromise() {
        return this.promise || (this.promise = this.execute()), this.promise
    }
    async execute() {
        var t = this;
        try {
            return {
                data: await (await t.downloadFn()).blob(),
                error: null
            }
        } catch (e) {
            if (t.shouldThrowOnError) throw e;
            if (ts(e)) return {
                data: null,
                error: e
            };
            throw e
        }
    }
};
const Uf = {
        limit: 100,
        offset: 0,
        sortBy: {
            column: "name",
            order: "asc"
        }
    },
    qa = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
    };
var Bf = class extends Ir {
    constructor(t, e = {}, r, n) {
        super(t, e, n, "storage"), this.bucketId = r
    }
    async uploadOrUpdate(t, e, r, n) {
        var s = this;
        return s.handleOperation(async () => {
            let a;
            const i = I(I({}, qa), n);
            let o = I(I({}, s.headers), t === "POST" && {
                "x-upsert": String(i.upsert)
            });
            const l = i.metadata;
            typeof Blob < "u" && r instanceof Blob ? (a = new FormData, a.append("cacheControl", i.cacheControl), l && a.append("metadata", s.encodeMetadata(l)), a.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (a = r, a.has("cacheControl") || a.append("cacheControl", i.cacheControl), l && !a.has("metadata") && a.append("metadata", s.encodeMetadata(l))) : (a = r, o["cache-control"] = `max-age=${i.cacheControl}`, o["content-type"] = i.contentType, l && (o["x-metadata"] = s.toBase64(s.encodeMetadata(l))), (typeof ReadableStream < "u" && a instanceof ReadableStream || a && typeof a == "object" && "pipe" in a && typeof a.pipe == "function") && !i.duplex && (i.duplex = "half")), n != null && n.headers && (o = I(I({}, o), n.headers));
            const c = s._removeEmptyFolders(e),
                u = s._getFinalPath(c),
                d = await (t == "PUT" ? Is : Ye)(s.fetch, `${s.url}/object/${u}`, a, I({
                    headers: o
                }, i != null && i.duplex ? {
                    duplex: i.duplex
                } : {}));
            return {
                path: c,
                id: d.Id,
                fullPath: d.Key
            }
        })
    }
    async upload(t, e, r) {
        return this.uploadOrUpdate("POST", t, e, r)
    }
    async uploadToSignedUrl(t, e, r, n) {
        var s = this;
        const a = s._removeEmptyFolders(t),
            i = s._getFinalPath(a),
            o = new URL(s.url + `/object/upload/sign/${i}`);
        return o.searchParams.set("token", e), s.handleOperation(async () => {
            let l;
            const c = I(I({}, qa), n),
                u = I(I({}, s.headers), {
                    "x-upsert": String(c.upsert)
                });
            return typeof Blob < "u" && r instanceof Blob ? (l = new FormData, l.append("cacheControl", c.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", c.cacheControl)) : (l = r, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType), {
                path: a,
                fullPath: (await Is(s.fetch, o.toString(), l, {
                    headers: u
                })).Key
            }
        })
    }
    async createSignedUploadUrl(t, e) {
        var r = this;
        return r.handleOperation(async () => {
            let n = r._getFinalPath(t);
            const s = I({}, r.headers);
            e != null && e.upsert && (s["x-upsert"] = "true");
            const a = await Ye(r.fetch, `${r.url}/object/upload/sign/${n}`, {}, {
                    headers: s
                }),
                i = new URL(r.url + a.url),
                o = i.searchParams.get("token");
            if (!o) throw new es("No token returned by API");
            return {
                signedUrl: i.toString(),
                path: t,
                token: o
            }
        })
    }
    async update(t, e, r) {
        return this.uploadOrUpdate("PUT", t, e, r)
    }
    async move(t, e, r) {
        var n = this;
        return n.handleOperation(async () => await Ye(n.fetch, `${n.url}/object/move`, {
            bucketId: n.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: r == null ? void 0 : r.destinationBucket
        }, {
            headers: n.headers
        }))
    }
    async copy(t, e, r) {
        var n = this;
        return n.handleOperation(async () => ({
            path: (await Ye(n.fetch, `${n.url}/object/copy`, {
                bucketId: n.bucketId,
                sourceKey: t,
                destinationKey: e,
                destinationBucket: r == null ? void 0 : r.destinationBucket
            }, {
                headers: n.headers
            })).Key
        }))
    }
    async createSignedUrl(t, e, r) {
        var n = this;
        return n.handleOperation(async () => {
            let s = n._getFinalPath(t);
            const a = typeof(r == null ? void 0 : r.transform) == "object" && r.transform !== null && Object.keys(r.transform).length > 0;
            let i = await Ye(n.fetch, `${n.url}/object/sign/${s}`, I({
                expiresIn: e
            }, a ? {
                transform: r.transform
            } : {}), {
                headers: n.headers
            });
            const o = new URLSearchParams;
            r != null && r.download && o.set("download", r.download === !0 ? "" : r.download), (r == null ? void 0 : r.cacheNonce) != null && o.set("cacheNonce", String(r.cacheNonce));
            const l = o.toString(),
                c = a && i.signedURL.includes("/object/sign/") ? i.signedURL.replace("/object/sign/", "/render/image/sign/") : i.signedURL;
            return {
                signedUrl: encodeURI(`${n.url}${c}${l?`&${l}`:""}`)
            }
        })
    }
    async createSignedUrls(t, e, r) {
        var n = this;
        return n.handleOperation(async () => {
            const s = await Ye(n.fetch, `${n.url}/object/sign/${n.bucketId}`, {
                    expiresIn: e,
                    paths: t
                }, {
                    headers: n.headers
                }),
                a = new URLSearchParams;
            r != null && r.download && a.set("download", r.download === !0 ? "" : r.download), (r == null ? void 0 : r.cacheNonce) != null && a.set("cacheNonce", String(r.cacheNonce));
            const i = a.toString();
            return s.map(o => I(I({}, o), {}, {
                signedUrl: o.signedURL ? encodeURI(`${n.url}${o.signedURL}${i?`&${i}`:""}`) : null
            }))
        })
    }
    download(t, e, r) {
        const n = typeof(e == null ? void 0 : e.transform) < "u" ? "render/image/authenticated" : "object",
            s = new URLSearchParams;
        e != null && e.transform && this.applyTransformOptsToQuery(s, e.transform), (e == null ? void 0 : e.cacheNonce) != null && s.set("cacheNonce", String(e.cacheNonce));
        const a = s.toString(),
            i = this._getFinalPath(t),
            o = () => un(this.fetch, `${this.url}/${n}/${i}${a?`?${a}`:""}`, {
                headers: this.headers,
                noResolveJson: !0
            }, r);
        return new Mf(o, this.shouldThrowOnError)
    }
    async info(t) {
        var e = this;
        const r = e._getFinalPath(t);
        return e.handleOperation(async () => Ns(await un(e.fetch, `${e.url}/object/info/${r}`, {
            headers: e.headers
        })))
    }
    async exists(t) {
        var e = this;
        const r = e._getFinalPath(t);
        try {
            return await $f(e.fetch, `${e.url}/object/${r}`, {
                headers: e.headers
            }), {
                data: !0,
                error: null
            }
        } catch (s) {
            if (e.shouldThrowOnError) throw s;
            if (ts(s)) {
                var n;
                const a = s instanceof js ? s.status : s instanceof So ? (n = s.originalError) === null || n === void 0 ? void 0 : n.status : void 0;
                if (a !== void 0 && [400, 404].includes(a)) return {
                    data: !1,
                    error: s
                }
            }
            throw s
        }
    }
    getPublicUrl(t, e) {
        const r = this._getFinalPath(t),
            n = new URLSearchParams;
        e != null && e.download && n.set("download", e.download === !0 ? "" : e.download), e != null && e.transform && this.applyTransformOptsToQuery(n, e.transform), (e == null ? void 0 : e.cacheNonce) != null && n.set("cacheNonce", String(e.cacheNonce));
        const s = n.toString(),
            a = typeof(e == null ? void 0 : e.transform) < "u" ? "render/image" : "object";
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${r}`) + (s ? `?${s}` : "")
            }
        }
    }
    async remove(t) {
        var e = this;
        return e.handleOperation(async () => await Vs(e.fetch, `${e.url}/object/${e.bucketId}`, {
            prefixes: t
        }, {
            headers: e.headers
        }))
    }
    async list(t, e, r) {
        var n = this;
        return n.handleOperation(async () => {
            const s = I(I(I({}, Uf), e), {}, {
                prefix: t || ""
            });
            return await Ye(n.fetch, `${n.url}/object/list/${n.bucketId}`, s, {
                headers: n.headers
            }, r)
        })
    }
    async listV2(t, e) {
        var r = this;
        return r.handleOperation(async () => {
            const n = I({}, t);
            return await Ye(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, n, {
                headers: r.headers
            }, e)
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t.replace(/^\/+/,"")}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    applyTransformOptsToQuery(t, e) {
        return e.width && t.set("width", e.width.toString()), e.height && t.set("height", e.height.toString()), e.resize && t.set("resize", e.resize), e.format && t.set("format", e.format), e.quality && t.set("quality", e.quality.toString()), t
    }
};
const qf = "2.103.0",
    gn = {
        "X-Client-Info": `storage-js/${qf}`
    };
var Ff = class extends Ir {
        constructor(t, e = {}, r, n) {
            const s = new URL(t);
            n != null && n.useNewHostname && /supabase\.(co|in|red)$/.test(s.hostname) && !s.hostname.includes("storage.supabase.") && (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
            const a = s.href.replace(/\/$/, ""),
                i = I(I({}, gn), e);
            super(a, i, r, "storage")
        }
        async listBuckets(t) {
            var e = this;
            return e.handleOperation(async () => {
                const r = e.listBucketOptionsToQueryString(t);
                return await un(e.fetch, `${e.url}/bucket${r}`, {
                    headers: e.headers
                })
            })
        }
        async getBucket(t) {
            var e = this;
            return e.handleOperation(async () => await un(e.fetch, `${e.url}/bucket/${t}`, {
                headers: e.headers
            }))
        }
        async createBucket(t, e = {
            public: !1
        }) {
            var r = this;
            return r.handleOperation(async () => await Ye(r.fetch, `${r.url}/bucket`, {
                id: t,
                name: t,
                type: e.type,
                public: e.public,
                file_size_limit: e.fileSizeLimit,
                allowed_mime_types: e.allowedMimeTypes
            }, {
                headers: r.headers
            }))
        }
        async updateBucket(t, e) {
            var r = this;
            return r.handleOperation(async () => await Is(r.fetch, `${r.url}/bucket/${t}`, {
                id: t,
                name: t,
                public: e.public,
                file_size_limit: e.fileSizeLimit,
                allowed_mime_types: e.allowedMimeTypes
            }, {
                headers: r.headers
            }))
        }
        async emptyBucket(t) {
            var e = this;
            return e.handleOperation(async () => await Ye(e.fetch, `${e.url}/bucket/${t}/empty`, {}, {
                headers: e.headers
            }))
        }
        async deleteBucket(t) {
            var e = this;
            return e.handleOperation(async () => await Vs(e.fetch, `${e.url}/bucket/${t}`, {}, {
                headers: e.headers
            }))
        }
        listBucketOptionsToQueryString(t) {
            const e = {};
            return t && ("limit" in t && (e.limit = String(t.limit)), "offset" in t && (e.offset = String(t.offset)), t.search && (e.search = t.search), t.sortColumn && (e.sortColumn = t.sortColumn), t.sortOrder && (e.sortOrder = t.sortOrder)), Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : ""
        }
    },
    Wf = class extends Ir {
        constructor(t, e = {}, r) {
            const n = t.replace(/\/$/, ""),
                s = I(I({}, gn), e);
            super(n, s, r, "storage")
        }
        async createBucket(t) {
            var e = this;
            return e.handleOperation(async () => await Ye(e.fetch, `${e.url}/bucket`, {
                name: t
            }, {
                headers: e.headers
            }))
        }
        async listBuckets(t) {
            var e = this;
            return e.handleOperation(async () => {
                const r = new URLSearchParams;
                (t == null ? void 0 : t.limit) !== void 0 && r.set("limit", t.limit.toString()), (t == null ? void 0 : t.offset) !== void 0 && r.set("offset", t.offset.toString()), t != null && t.sortColumn && r.set("sortColumn", t.sortColumn), t != null && t.sortOrder && r.set("sortOrder", t.sortOrder), t != null && t.search && r.set("search", t.search);
                const n = r.toString(),
                    s = n ? `${e.url}/bucket?${n}` : `${e.url}/bucket`;
                return await un(e.fetch, s, {
                    headers: e.headers
                })
            })
        }
        async deleteBucket(t) {
            var e = this;
            return e.handleOperation(async () => await Vs(e.fetch, `${e.url}/bucket/${t}`, {}, {
                headers: e.headers
            }))
        }
        from(t) {
            var e = this;
            if (!Af(t)) throw new es("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
            const r = new Ef({
                    baseUrl: this.url,
                    catalogName: t,
                    auth: {
                        type: "custom",
                        getHeaders: async () => e.headers
                    },
                    fetch: this.fetch
                }),
                n = this.shouldThrowOnError;
            return new Proxy(r, {
                get(s, a) {
                    const i = s[a];
                    return typeof i != "function" ? i : async (...o) => {
                        try {
                            return {
                                data: await i.apply(s, o),
                                error: null
                            }
                        } catch (l) {
                            if (n) throw l;
                            return {
                                data: null,
                                error: l
                            }
                        }
                    }
                }
            })
        }
    },
    Hf = class extends Ir {
        constructor(t, e = {}, r) {
            const n = t.replace(/\/$/, ""),
                s = I(I({}, gn), {}, {
                    "Content-Type": "application/json"
                }, e);
            super(n, s, r, "vectors")
        }
        async createIndex(t) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/CreateIndex`, t, {
                headers: e.headers
            }) || {})
        }
        async getIndex(t, e) {
            var r = this;
            return r.handleOperation(async () => await De.post(r.fetch, `${r.url}/GetIndex`, {
                vectorBucketName: t,
                indexName: e
            }, {
                headers: r.headers
            }))
        }
        async listIndexes(t) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/ListIndexes`, t, {
                headers: e.headers
            }))
        }
        async deleteIndex(t, e) {
            var r = this;
            return r.handleOperation(async () => await De.post(r.fetch, `${r.url}/DeleteIndex`, {
                vectorBucketName: t,
                indexName: e
            }, {
                headers: r.headers
            }) || {})
        }
    },
    zf = class extends Ir {
        constructor(t, e = {}, r) {
            const n = t.replace(/\/$/, ""),
                s = I(I({}, gn), {}, {
                    "Content-Type": "application/json"
                }, e);
            super(n, s, r, "vectors")
        }
        async putVectors(t) {
            var e = this;
            if (t.vectors.length < 1 || t.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/PutVectors`, t, {
                headers: e.headers
            }) || {})
        }
        async getVectors(t) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/GetVectors`, t, {
                headers: e.headers
            }))
        }
        async listVectors(t) {
            var e = this;
            if (t.segmentCount !== void 0) {
                if (t.segmentCount < 1 || t.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
                if (t.segmentIndex !== void 0 && (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount)) throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)
            }
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/ListVectors`, t, {
                headers: e.headers
            }))
        }
        async queryVectors(t) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/QueryVectors`, t, {
                headers: e.headers
            }))
        }
        async deleteVectors(t) {
            var e = this;
            if (t.keys.length < 1 || t.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/DeleteVectors`, t, {
                headers: e.headers
            }) || {})
        }
    },
    Vf = class extends Ir {
        constructor(t, e = {}, r) {
            const n = t.replace(/\/$/, ""),
                s = I(I({}, gn), {}, {
                    "Content-Type": "application/json"
                }, e);
            super(n, s, r, "vectors")
        }
        async createBucket(t) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/CreateVectorBucket`, {
                vectorBucketName: t
            }, {
                headers: e.headers
            }) || {})
        }
        async getBucket(t) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/GetVectorBucket`, {
                vectorBucketName: t
            }, {
                headers: e.headers
            }))
        }
        async listBuckets(t = {}) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/ListVectorBuckets`, t, {
                headers: e.headers
            }))
        }
        async deleteBucket(t) {
            var e = this;
            return e.handleOperation(async () => await De.post(e.fetch, `${e.url}/DeleteVectorBucket`, {
                vectorBucketName: t
            }, {
                headers: e.headers
            }) || {})
        }
    },
    Kf = class extends Vf {
        constructor(t, e = {}) {
            super(t, e.headers || {}, e.fetch)
        }
        from(t) {
            return new Gf(this.url, this.headers, t, this.fetch)
        }
        async createBucket(t) {
            var e = () => super.createBucket,
                r = this;
            return e().call(r, t)
        }
        async getBucket(t) {
            var e = () => super.getBucket,
                r = this;
            return e().call(r, t)
        }
        async listBuckets(t = {}) {
            var e = () => super.listBuckets,
                r = this;
            return e().call(r, t)
        }
        async deleteBucket(t) {
            var e = () => super.deleteBucket,
                r = this;
            return e().call(r, t)
        }
    },
    Gf = class extends Hf {
        constructor(t, e, r, n) {
            super(t, e, n), this.vectorBucketName = r
        }
        async createIndex(t) {
            var e = () => super.createIndex,
                r = this;
            return e().call(r, I(I({}, t), {}, {
                vectorBucketName: r.vectorBucketName
            }))
        }
        async listIndexes(t = {}) {
            var e = () => super.listIndexes,
                r = this;
            return e().call(r, I(I({}, t), {}, {
                vectorBucketName: r.vectorBucketName
            }))
        }
        async getIndex(t) {
            var e = () => super.getIndex,
                r = this;
            return e().call(r, r.vectorBucketName, t)
        }
        async deleteIndex(t) {
            var e = () => super.deleteIndex,
                r = this;
            return e().call(r, r.vectorBucketName, t)
        }
        index(t) {
            return new Jf(this.url, this.headers, this.vectorBucketName, t, this.fetch)
        }
    },
    Jf = class extends zf {
        constructor(t, e, r, n, s) {
            super(t, e, s), this.vectorBucketName = r, this.indexName = n
        }
        async putVectors(t) {
            var e = () => super.putVectors,
                r = this;
            return e().call(r, I(I({}, t), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }))
        }
        async getVectors(t) {
            var e = () => super.getVectors,
                r = this;
            return e().call(r, I(I({}, t), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }))
        }
        async listVectors(t = {}) {
            var e = () => super.listVectors,
                r = this;
            return e().call(r, I(I({}, t), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }))
        }
        async queryVectors(t) {
            var e = () => super.queryVectors,
                r = this;
            return e().call(r, I(I({}, t), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }))
        }
        async deleteVectors(t) {
            var e = () => super.deleteVectors,
                r = this;
            return e().call(r, I(I({}, t), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }))
        }
    },
    Yf = class extends Ff {
        constructor(t, e = {}, r, n) {
            super(t, e, r, n)
        }
        from(t) {
            return new Bf(this.url, this.headers, t, this.fetch)
        }
        get vectors() {
            return new Kf(this.url + "/vector", {
                headers: this.headers,
                fetch: this.fetch
            })
        }
        get analytics() {
            return new Wf(this.url + "/iceberg", this.headers, this.fetch)
        }
    };

function rs(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
    return r
}
const Co = "2.103.0",
    yr = 30 * 1e3,
    Ls = 3,
    ps = Ls * yr,
    Qf = "http://localhost:9999",
    Xf = "supabase.auth.token",
    Zf = {
        "X-Client-Info": `gotrue-js/${Co}`
    },
    $s = "X-Supabase-Api-Version",
    Ao = {
        "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01"
        }
    },
    ep = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
    tp = 10 * 60 * 1e3;
class dn extends Error {
    constructor(e, r, n) {
        super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n
    }
}

function O(t) {
    return typeof t == "object" && t !== null && "__isAuthError" in t
}
class rp extends dn {
    constructor(e, r, n) {
        super(e, r, n), this.name = "AuthApiError", this.status = r, this.code = n
    }
}

function np(t) {
    return O(t) && t.name === "AuthApiError"
}
class Gt extends dn {
    constructor(e, r) {
        super(e), this.name = "AuthUnknownError", this.originalError = r
    }
}
class wt extends dn {
    constructor(e, r, n, s) {
        super(e, n, s), this.name = r, this.status = n
    }
}
class $e extends wt {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}

function On(t) {
    return O(t) && t.name === "AuthSessionMissingError"
}
class dr extends wt {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class jn extends wt {
    constructor(e) {
        super(e, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class Nn extends wt {
    constructor(e, r = null) {
        super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}

function sp(t) {
    return O(t) && t.name === "AuthImplicitGrantRedirectError"
}
class Fa extends wt {
    constructor(e, r = null) {
        super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class ap extends wt {
    constructor() {
        super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found")
    }
}
class Ds extends wt {
    constructor(e, r) {
        super(e, "AuthRetryableFetchError", r, void 0)
    }
}

function ms(t) {
    return O(t) && t.name === "AuthRetryableFetchError"
}
class Wa extends wt {
    constructor(e, r, n) {
        super(e, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n
    }
}
class Ms extends wt {
    constructor(e) {
        super(e, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),
    Ha = ` 	
\r=`.split(""),
    ip = (() => {
        const t = new Array(128);
        for (let e = 0; e < t.length; e += 1) t[e] = -1;
        for (let e = 0; e < Ha.length; e += 1) t[Ha[e].charCodeAt(0)] = -2;
        for (let e = 0; e < Wn.length; e += 1) t[Wn[e].charCodeAt(0)] = e;
        return t
    })();

function za(t, e, r) {
    if (t !== null)
        for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6;) {
            const n = e.queue >> e.queuedBits - 6 & 63;
            r(Wn[n]), e.queuedBits -= 6
        } else if (e.queuedBits > 0)
            for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6;) {
                const n = e.queue >> e.queuedBits - 6 & 63;
                r(Wn[n]), e.queuedBits -= 6
            }
}

function Po(t, e, r) {
    const n = ip[t];
    if (n > -1)
        for (e.queue = e.queue << 6 | n, e.queuedBits += 6; e.queuedBits >= 8;) r(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
    else {
        if (n === -2) return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)
    }
}

function Va(t) {
    const e = [],
        r = i => {
            e.push(String.fromCodePoint(i))
        },
        n = {
            utf8seq: 0,
            codepoint: 0
        },
        s = {
            queue: 0,
            queuedBits: 0
        },
        a = i => {
            cp(i, n, r)
        };
    for (let i = 0; i < t.length; i += 1) Po(t.charCodeAt(i), s, a);
    return e.join("")
}

function op(t, e) {
    if (t <= 127) {
        e(t);
        return
    } else if (t <= 2047) {
        e(192 | t >> 6), e(128 | t & 63);
        return
    } else if (t <= 65535) {
        e(224 | t >> 12), e(128 | t >> 6 & 63), e(128 | t & 63);
        return
    } else if (t <= 1114111) {
        e(240 | t >> 18), e(128 | t >> 12 & 63), e(128 | t >> 6 & 63), e(128 | t & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)
}

function lp(t, e) {
    for (let r = 0; r < t.length; r += 1) {
        let n = t.charCodeAt(r);
        if (n > 55295 && n <= 56319) {
            const s = (n - 55296) * 1024 & 65535;
            n = (t.charCodeAt(r + 1) - 56320 & 65535 | s) + 65536, r += 1
        }
        op(n, e)
    }
}

function cp(t, e, r) {
    if (e.utf8seq === 0) {
        if (t <= 127) {
            r(t);
            return
        }
        for (let n = 1; n < 6; n += 1)
            if (!(t >> 7 - n & 1)) {
                e.utf8seq = n;
                break
            }
        if (e.utf8seq === 2) e.codepoint = t & 31;
        else if (e.utf8seq === 3) e.codepoint = t & 15;
        else if (e.utf8seq === 4) e.codepoint = t & 7;
        else throw new Error("Invalid UTF-8 sequence");
        e.utf8seq -= 1
    } else if (e.utf8seq > 0) {
        if (t <= 127) throw new Error("Invalid UTF-8 sequence");
        e.codepoint = e.codepoint << 6 | t & 63, e.utf8seq -= 1, e.utf8seq === 0 && r(e.codepoint)
    }
}

function _r(t) {
    const e = [],
        r = {
            queue: 0,
            queuedBits: 0
        },
        n = s => {
            e.push(s)
        };
    for (let s = 0; s < t.length; s += 1) Po(t.charCodeAt(s), r, n);
    return new Uint8Array(e)
}

function up(t) {
    const e = [];
    return lp(t, r => e.push(r)), new Uint8Array(e)
}

function Yt(t) {
    const e = [],
        r = {
            queue: 0,
            queuedBits: 0
        },
        n = s => {
            e.push(s)
        };
    return t.forEach(s => za(s, r, n)), za(null, r, n), e.join("")
}

function dp(t) {
    return Math.round(Date.now() / 1e3) + t
}

function hp() {
    return Symbol("auth-callback")
}
const ye = () => typeof window < "u" && typeof document < "u",
    Wt = {
        tested: !1,
        writable: !1
    },
    Ro = () => {
        if (!ye()) return !1;
        try {
            if (typeof globalThis.localStorage != "object") return !1
        } catch {
            return !1
        }
        if (Wt.tested) return Wt.writable;
        const t = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), Wt.tested = !0, Wt.writable = !0
        } catch {
            Wt.tested = !0, Wt.writable = !1
        }
        return Wt.writable
    };

function fp(t) {
    const e = {},
        r = new URL(t);
    if (r.hash && r.hash[0] === "#") try {
        new URLSearchParams(r.hash.substring(1)).forEach((s, a) => {
            e[a] = s
        })
    } catch {}
    return r.searchParams.forEach((n, s) => {
        e[s] = n
    }), e
}
const Oo = t => t ? (...e) => t(...e) : (...e) => fetch(...e),
    pp = t => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function",
    vr = async (t, e, r) => {
        await t.setItem(e, JSON.stringify(r))
    },
    Ht = async (t, e) => {
        const r = await t.getItem(e);
        if (!r) return null;
        try {
            return JSON.parse(r)
        } catch {
            return r
        }
    },
    ge = async (t, e) => {
        await t.removeItem(e)
    };
class ns {
    constructor() {
        this.promise = new ns.promiseConstructor((e, r) => {
            this.resolve = e, this.reject = r
        })
    }
}
ns.promiseConstructor = Promise;

function In(t) {
    const e = t.split(".");
    if (e.length !== 3) throw new Ms("Invalid JWT structure");
    for (let n = 0; n < e.length; n++)
        if (!ep.test(e[n])) throw new Ms("JWT not in base64url format");
    return {
        header: JSON.parse(Va(e[0])),
        payload: JSON.parse(Va(e[1])),
        signature: _r(e[2]),
        raw: {
            header: e[0],
            payload: e[1]
        }
    }
}
async function mp(t) {
    return await new Promise(e => {
        setTimeout(() => e(null), t)
    })
}

function gp(t, e) {
    return new Promise((n, s) => {
        (async () => {
            for (let a = 0; a < 1 / 0; a++) try {
                const i = await t(a);
                if (!e(a, null, i)) {
                    n(i);
                    return
                }
            } catch (i) {
                if (!e(a, i)) {
                    s(i);
                    return
                }
            }
        })()
    })
}

function yp(t) {
    return ("0" + t.toString(16)).substr(-2)
}

function vp() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
        const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            n = r.length;
        let s = "";
        for (let a = 0; a < 56; a++) s += r.charAt(Math.floor(Math.random() * n));
        return s
    }
    return crypto.getRandomValues(e), Array.from(e, yp).join("")
}
async function bp(t) {
    const r = new TextEncoder().encode(t),
        n = await crypto.subtle.digest("SHA-256", r),
        s = new Uint8Array(n);
    return Array.from(s).map(a => String.fromCharCode(a)).join("")
}
async function wp(t) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
    const r = await bp(t);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function hr(t, e, r = !1) {
    const n = vp();
    let s = n;
    r && (s += "/PASSWORD_RECOVERY"), await vr(t, `${e}-code-verifier`, s);
    const a = await wp(n);
    return [a, n === a ? "plain" : "s256"]
}
const _p = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;

function xp(t) {
    const e = t.headers.get($s);
    if (!e || !e.match(_p)) return null;
    try {
        return new Date(`${e}T00:00:00.0Z`)
    } catch {
        return null
    }
}

function kp(t) {
    if (!t) throw new Error("Missing exp claim");
    const e = Math.floor(Date.now() / 1e3);
    if (t <= e) throw new Error("JWT has expired")
}

function Sp(t) {
    switch (t) {
        case "RS256":
            return {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
        case "ES256":
            return {
                name: "ECDSA",
                namedCurve: "P-256",
                hash: {
                    name: "SHA-256"
                }
            };
        default:
            throw new Error("Invalid alg claim")
    }
}
const Ep = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function fr(t) {
    if (!Ep.test(t)) throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}

function gs() {
    const t = {};
    return new Proxy(t, {
        get: (e, r) => {
            if (r === "__isUserNotAvailableProxy") return !0;
            if (typeof r == "symbol") {
                const n = r.toString();
                if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)") return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)
        },
        set: (e, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        },
        deleteProperty: (e, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}

function Tp(t, e) {
    return new Proxy(t, {
        get: (r, n, s) => {
            if (n === "__isInsecureUserWarningProxy") return !0;
            if (typeof n == "symbol") {
                const a = n.toString();
                if (a === "Symbol(Symbol.toPrimitive)" || a === "Symbol(Symbol.toStringTag)" || a === "Symbol(util.inspect.custom)" || a === "Symbol(nodejs.util.inspect.custom)") return Reflect.get(r, n, s)
            }
            return !e.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), e.value = !0), Reflect.get(r, n, s)
        }
    })
}

function Ka(t) {
    return JSON.parse(JSON.stringify(t))
}
const Kt = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    Cp = [502, 503, 504];
async function Ga(t) {
    var e;
    if (!pp(t)) throw new Ds(Kt(t), 0);
    if (Cp.includes(t.status)) throw new Ds(Kt(t), t.status);
    let r;
    try {
        r = await t.json()
    } catch (a) {
        throw new Gt(Kt(a), a)
    }
    let n;
    const s = xp(t);
    if (s && s.getTime() >= Ao["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
        if (n === "weak_password") throw new Wa(Kt(r), t.status, ((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
        if (n === "session_not_found") throw new $e
    } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((a, i) => a && typeof i == "string", !0)) throw new Wa(Kt(r), t.status, r.weak_password.reasons);
    throw new rp(Kt(r), t.status || 500, n)
}
const Ap = (t, e, r, n) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return t === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, e == null ? void 0 : e.headers), s.body = JSON.stringify(n), Object.assign(Object.assign({}, s), r))
};
async function N(t, e, r, n) {
    var s;
    const a = Object.assign({}, n == null ? void 0 : n.headers);
    a[$s] || (a[$s] = Ao["2024-01-01"].name), n != null && n.jwt && (a.Authorization = `Bearer ${n.jwt}`);
    const i = (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
    n != null && n.redirectTo && (i.redirect_to = n.redirectTo);
    const o = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : "",
        l = await Pp(t, e, r + o, {
            headers: a,
            noResolveJson: n == null ? void 0 : n.noResolveJson
        }, {}, n == null ? void 0 : n.body);
    return n != null && n.xform ? n == null ? void 0 : n.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function Pp(t, e, r, n, s, a) {
    const i = Ap(e, n, s, a);
    let o;
    try {
        o = await t(r, Object.assign({}, i))
    } catch (l) {
        throw console.error(l), new Ds(Kt(l), 0)
    }
    if (o.ok || await Ga(o), n != null && n.noResolveJson) return o;
    try {
        return await o.json()
    } catch (l) {
        await Ga(l)
    }
}

function Ge(t) {
    var e;
    let r = null;
    jp(t) && (r = Object.assign({}, t), t.expires_at || (r.expires_at = dp(t.expires_in)));
    const n = (e = t.user) !== null && e !== void 0 ? e : t;
    return {
        data: {
            session: r,
            user: n
        },
        error: null
    }
}

function Ja(t) {
    const e = Ge(t);
    return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (e.data.weak_password = t.weak_password), e
}

function Pt(t) {
    var e;
    return {
        data: {
            user: (e = t.user) !== null && e !== void 0 ? e : t
        },
        error: null
    }
}

function Rp(t) {
    return {
        data: t,
        error: null
    }
}

function Op(t) {
    const {
        action_link: e,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: a
    } = t, i = rs(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
        action_link: e,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: a
    }, l = Object.assign({}, i);
    return {
        data: {
            properties: o,
            user: l
        },
        error: null
    }
}

function Ya(t) {
    return t
}

function jp(t) {
    return t.access_token && t.refresh_token && t.expires_in
}
const ys = ["global", "local", "others"];
class Np {
    constructor({
        url: e = "",
        headers: r = {},
        fetch: n
    }) {
        this.url = e, this.headers = r, this.fetch = Oo(n), this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }, this.oauth = {
            listClients: this._listOAuthClients.bind(this),
            createClient: this._createOAuthClient.bind(this),
            getClient: this._getOAuthClient.bind(this),
            updateClient: this._updateOAuthClient.bind(this),
            deleteClient: this._deleteOAuthClient.bind(this),
            regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
        }, this.customProviders = {
            listProviders: this._listCustomProviders.bind(this),
            createProvider: this._createCustomProvider.bind(this),
            getProvider: this._getCustomProvider.bind(this),
            updateProvider: this._updateCustomProvider.bind(this),
            deleteProvider: this._deleteCustomProvider.bind(this)
        }
    }
    async signOut(e, r = ys[0]) {
        if (ys.indexOf(r) < 0) throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ys.join(", ")}`);
        try {
            return await N(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0
            }), {
                data: null,
                error: null
            }
        } catch (n) {
            if (O(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async inviteUserByEmail(e, r = {}) {
        try {
            return await N(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: e,
                    data: r.data
                },
                headers: this.headers,
                redirectTo: r.redirectTo,
                xform: Pt
            })
        } catch (n) {
            if (O(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async generateLink(e) {
        try {
            const {
                options: r
            } = e, n = rs(e, ["options"]), s = Object.assign(Object.assign({}, n), r);
            return "newEmail" in n && (s.new_email = n == null ? void 0 : n.newEmail, delete s.newEmail), await N(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: Op,
                redirectTo: r == null ? void 0 : r.redirectTo
            })
        } catch (r) {
            if (O(r)) return {
                data: {
                    properties: null,
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async createUser(e) {
        try {
            return await N(this.fetch, "POST", `${this.url}/admin/users`, {
                body: e,
                headers: this.headers,
                xform: Pt
            })
        } catch (r) {
            if (O(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async listUsers(e) {
        var r, n, s, a, i, o, l;
        try {
            const c = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                },
                u = await N(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (n = (r = e == null ? void 0 : e.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                        per_page: (a = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && a !== void 0 ? a : ""
                    },
                    xform: Ya
                });
            if (u.error) throw u.error;
            const d = await u.json(),
                f = (i = u.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0,
                h = (l = (o = u.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
            return h.length > 0 && (h.forEach(b => {
                const m = parseInt(b.split(";")[0].split("=")[1].substring(0, 1)),
                    y = JSON.parse(b.split(";")[1].split("=")[1]);
                c[`${y}Page`] = m
            }), c.total = parseInt(f)), {
                data: Object.assign(Object.assign({}, d), c),
                error: null
            }
        } catch (c) {
            if (O(c)) return {
                data: {
                    users: []
                },
                error: c
            };
            throw c
        }
    }
    async getUserById(e) {
        fr(e);
        try {
            return await N(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                xform: Pt
            })
        } catch (r) {
            if (O(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async updateUserById(e, r) {
        fr(e);
        try {
            return await N(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                body: r,
                headers: this.headers,
                xform: Pt
            })
        } catch (n) {
            if (O(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async deleteUser(e, r = !1) {
        fr(e);
        try {
            return await N(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: r
                },
                xform: Pt
            })
        } catch (n) {
            if (O(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async _listFactors(e) {
        fr(e.userId);
        try {
            const {
                data: r,
                error: n
            } = await N(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: r,
                error: n
            }
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _deleteFactor(e) {
        fr(e.userId), fr(e.id);
        try {
            return {
                data: await N(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _listOAuthClients(e) {
        var r, n, s, a, i, o, l;
        try {
            const c = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                },
                u = await N(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (n = (r = e == null ? void 0 : e.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                        per_page: (a = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && a !== void 0 ? a : ""
                    },
                    xform: Ya
                });
            if (u.error) throw u.error;
            const d = await u.json(),
                f = (i = u.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0,
                h = (l = (o = u.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
            return h.length > 0 && (h.forEach(b => {
                const m = parseInt(b.split(";")[0].split("=")[1].substring(0, 1)),
                    y = JSON.parse(b.split(";")[1].split("=")[1]);
                c[`${y}Page`] = m
            }), c.total = parseInt(f)), {
                data: Object.assign(Object.assign({}, d), c),
                error: null
            }
        } catch (c) {
            if (O(c)) return {
                data: {
                    clients: []
                },
                error: c
            };
            throw c
        }
    }
    async _createOAuthClient(e) {
        try {
            return await N(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
                body: e,
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _getOAuthClient(e) {
        try {
            return await N(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _updateOAuthClient(e, r) {
        try {
            return await N(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
                body: r,
                headers: this.headers,
                xform: n => ({
                    data: n,
                    error: null
                })
            })
        } catch (n) {
            if (O(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async _deleteOAuthClient(e) {
        try {
            return await N(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
                headers: this.headers,
                noResolveJson: !0
            }), {
                data: null,
                error: null
            }
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _regenerateOAuthClientSecret(e) {
        try {
            return await N(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _listCustomProviders(e) {
        try {
            const r = {};
            return e != null && e.type && (r.type = e.type), await N(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
                headers: this.headers,
                query: r,
                xform: n => {
                    var s;
                    return {
                        data: {
                            providers: (s = n == null ? void 0 : n.providers) !== null && s !== void 0 ? s : []
                        },
                        error: null
                    }
                }
            })
        } catch (r) {
            if (O(r)) return {
                data: {
                    providers: []
                },
                error: r
            };
            throw r
        }
    }
    async _createCustomProvider(e) {
        try {
            return await N(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
                body: e,
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _getCustomProvider(e) {
        try {
            return await N(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _updateCustomProvider(e, r) {
        try {
            return await N(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
                body: r,
                headers: this.headers,
                xform: n => ({
                    data: n,
                    error: null
                })
            })
        } catch (n) {
            if (O(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async _deleteCustomProvider(e) {
        try {
            return await N(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
                headers: this.headers,
                noResolveJson: !0
            }), {
                data: null,
                error: null
            }
        } catch (r) {
            if (O(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
}

function Qa(t = {}) {
    return {
        getItem: e => t[e] || null,
        setItem: (e, r) => {
            t[e] = r
        },
        removeItem: e => {
            delete t[e]
        }
    }
}
const rt = {
    debug: !!(globalThis && Ro() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class jo extends Error {
    constructor(e) {
        super(e), this.isAcquireTimeout = !0
    }
}
class Xa extends jo {}
async function Ip(t, e, r) {
    rt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const n = new globalThis.AbortController;
    let s;
    e > 0 && (s = setTimeout(() => {
        n.abort(), rt.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t)
    }, e)), await Promise.resolve();
    try {
        return await globalThis.navigator.locks.request(t, e === 0 ? {
            mode: "exclusive",
            ifAvailable: !0
        } : {
            mode: "exclusive",
            signal: n.signal
        }, async a => {
            if (a) {
                clearTimeout(s), rt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, a.name);
                try {
                    return await r()
                } finally {
                    rt.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, a.name)
                }
            } else {
                if (e === 0) throw rt.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new Xa(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
                if (rt.debug) try {
                    const i = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "))
                } catch (i) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
                }
                return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(s), await r()
            }
        })
    } catch (a) {
        if (e > 0 && clearTimeout(s), (a == null ? void 0 : a.name) === "AbortError" && e > 0) {
            if (n.signal.aborted) return rt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", t), console.warn(`@supabase/gotrue-js: Lock "${t}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, {
                mode: "exclusive",
                steal: !0
            }, async i => {
                if (i) {
                    rt.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", t, i.name);
                    try {
                        return await r()
                    } finally {
                        rt.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", t, i.name)
                    }
                } else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await r()
            }));
            throw rt.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", t), new Xa(`Lock "${t}" was released because another request stole it`)
        }
        throw a
    }
}

function Lp() {
    if (typeof globalThis != "object") try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this
            },
            configurable: !0
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
    } catch {
        typeof self < "u" && (self.globalThis = self)
    }
}

function No(t) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(t)) throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
    return t.toLowerCase()
}

function $p(t) {
    return parseInt(t, 16)
}

function Dp(t) {
    const e = new TextEncoder().encode(t);
    return "0x" + Array.from(e, n => n.toString(16).padStart(2, "0")).join("")
}

function Mp(t) {
    var e;
    const {
        chainId: r,
        domain: n,
        expirationTime: s,
        issuedAt: a = new Date,
        nonce: i,
        notBefore: o,
        requestId: l,
        resources: c,
        scheme: u,
        uri: d,
        version: f
    } = t; {
        if (!Number.isInteger(r)) throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
        if (!n) throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
        if (i && i.length < 8) throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${i}`);
        if (!d) throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
        if (f !== "1") throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
        if (!((e = t.statement) === null || e === void 0) && e.includes(`
`)) throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)
    }
    const h = No(t.address),
        b = u ? `${u}://${n}` : n,
        m = t.statement ? `${t.statement}
` : "",
        y = `${b} wants you to sign in with your Ethereum account:
${h}

${m}`;
    let k = `URI: ${d}
Version: ${f}
Chain ID: ${r}${i?`
Nonce: ${i}`:""}
Issued At: ${a.toISOString()}`;
    if (s && (k += `
Expiration Time: ${s.toISOString()}`), o && (k += `
Not Before: ${o.toISOString()}`), l && (k += `
Request ID: ${l}`), c) {
        let E = `
Resources:`;
        for (const w of c) {
            if (!w || typeof w != "string") throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`);
            E += `
- ${w}`
        }
        k += E
    }
    return `${y}
${k}`
}
class le extends Error {
    constructor({
        message: e,
        code: r,
        cause: n,
        name: s
    }) {
        var a;
        super(e, {
            cause: n
        }), this.__isWebAuthnError = !0, this.name = (a = s ? ? (n instanceof Error ? n.name : void 0)) !== null && a !== void 0 ? a : "Unknown Error", this.code = r
    }
}
class Hn extends le {
    constructor(e, r) {
        super({
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: r,
            message: e
        }), this.name = "WebAuthnUnknownError", this.originalError = r
    }
}

function Up({
    error: t,
    options: e
}) {
    var r, n, s;
    const {
        publicKey: a
    } = e;
    if (!a) throw Error("options was missing required publicKey property");
    if (t.name === "AbortError") {
        if (e.signal instanceof AbortSignal) return new le({
            message: "Registration ceremony was sent an abort signal",
            code: "ERROR_CEREMONY_ABORTED",
            cause: t
        })
    } else if (t.name === "ConstraintError") {
        if (((r = a.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0) return new le({
            message: "Discoverable credentials were required but no available authenticator supported it",
            code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
            cause: t
        });
        if (e.mediation === "conditional" && ((n = a.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required") return new le({
            message: "User verification was required during automatic registration but it could not be performed",
            code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
            cause: t
        });
        if (((s = a.authenticatorSelection) === null || s === void 0 ? void 0 : s.userVerification) === "required") return new le({
            message: "User verification was required but no available authenticator supported it",
            code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
            cause: t
        })
    } else {
        if (t.name === "InvalidStateError") return new le({
            message: "The authenticator was previously registered",
            code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
            cause: t
        });
        if (t.name === "NotAllowedError") return new le({
            message: t.message,
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: t
        });
        if (t.name === "NotSupportedError") return a.pubKeyCredParams.filter(o => o.type === "public-key").length === 0 ? new le({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: t
        }) : new le({
            message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: t
        });
        if (t.name === "SecurityError") {
            const i = window.location.hostname;
            if (Io(i)) {
                if (a.rp.id !== i) return new le({
                    message: `The RP ID "${a.rp.id}" is invalid for this domain`,
                    code: "ERROR_INVALID_RP_ID",
                    cause: t
                })
            } else return new le({
                message: `${window.location.hostname} is an invalid domain`,
                code: "ERROR_INVALID_DOMAIN",
                cause: t
            })
        } else if (t.name === "TypeError") {
            if (a.user.id.byteLength < 1 || a.user.id.byteLength > 64) return new le({
                message: "User ID was not between 1 and 64 characters",
                code: "ERROR_INVALID_USER_ID_LENGTH",
                cause: t
            })
        } else if (t.name === "UnknownError") return new le({
            message: "The authenticator was unable to process the specified options, or could not create a new credential",
            code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
            cause: t
        })
    }
    return new le({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
    })
}

function Bp({
    error: t,
    options: e
}) {
    const {
        publicKey: r
    } = e;
    if (!r) throw Error("options was missing required publicKey property");
    if (t.name === "AbortError") {
        if (e.signal instanceof AbortSignal) return new le({
            message: "Authentication ceremony was sent an abort signal",
            code: "ERROR_CEREMONY_ABORTED",
            cause: t
        })
    } else {
        if (t.name === "NotAllowedError") return new le({
            message: t.message,
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: t
        });
        if (t.name === "SecurityError") {
            const n = window.location.hostname;
            if (Io(n)) {
                if (r.rpId !== n) return new le({
                    message: `The RP ID "${r.rpId}" is invalid for this domain`,
                    code: "ERROR_INVALID_RP_ID",
                    cause: t
                })
            } else return new le({
                message: `${window.location.hostname} is an invalid domain`,
                code: "ERROR_INVALID_DOMAIN",
                cause: t
            })
        } else if (t.name === "UnknownError") return new le({
            message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
            code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
            cause: t
        })
    }
    return new le({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
    })
}
class qp {
    createNewAbortSignal() {
        if (this.controller) {
            const r = new Error("Cancelling existing WebAuthn API call for new one");
            r.name = "AbortError", this.controller.abort(r)
        }
        const e = new AbortController;
        return this.controller = e, e.signal
    }
    cancelCeremony() {
        if (this.controller) {
            const e = new Error("Manually cancelling existing WebAuthn API call");
            e.name = "AbortError", this.controller.abort(e), this.controller = void 0
        }
    }
}
const Fp = new qp;

function Wp(t) {
    if (!t) throw new Error("Credential creation options are required");
    if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") return PublicKeyCredential.parseCreationOptionsFromJSON(t);
    const {
        challenge: e,
        user: r,
        excludeCredentials: n
    } = t, s = rs(t, ["challenge", "user", "excludeCredentials"]), a = _r(e).buffer, i = Object.assign(Object.assign({}, r), {
        id: _r(r.id).buffer
    }), o = Object.assign(Object.assign({}, s), {
        challenge: a,
        user: i
    });
    if (n && n.length > 0) {
        o.excludeCredentials = new Array(n.length);
        for (let l = 0; l < n.length; l++) {
            const c = n[l];
            o.excludeCredentials[l] = Object.assign(Object.assign({}, c), {
                id: _r(c.id).buffer,
                type: c.type || "public-key",
                transports: c.transports
            })
        }
    }
    return o
}

function Hp(t) {
    if (!t) throw new Error("Credential request options are required");
    if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") return PublicKeyCredential.parseRequestOptionsFromJSON(t);
    const {
        challenge: e,
        allowCredentials: r
    } = t, n = rs(t, ["challenge", "allowCredentials"]), s = _r(e).buffer, a = Object.assign(Object.assign({}, n), {
        challenge: s
    });
    if (r && r.length > 0) {
        a.allowCredentials = new Array(r.length);
        for (let i = 0; i < r.length; i++) {
            const o = r[i];
            a.allowCredentials[i] = Object.assign(Object.assign({}, o), {
                id: _r(o.id).buffer,
                type: o.type || "public-key",
                transports: o.transports
            })
        }
    }
    return a
}

function zp(t) {
    var e;
    if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
    const r = t;
    return {
        id: t.id,
        rawId: t.id,
        response: {
            attestationObject: Yt(new Uint8Array(t.response.attestationObject)),
            clientDataJSON: Yt(new Uint8Array(t.response.clientDataJSON))
        },
        type: "public-key",
        clientExtensionResults: t.getClientExtensionResults(),
        authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
    }
}

function Vp(t) {
    var e;
    if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
    const r = t,
        n = t.getClientExtensionResults(),
        s = t.response;
    return {
        id: t.id,
        rawId: t.id,
        response: {
            authenticatorData: Yt(new Uint8Array(s.authenticatorData)),
            clientDataJSON: Yt(new Uint8Array(s.clientDataJSON)),
            signature: Yt(new Uint8Array(s.signature)),
            userHandle: s.userHandle ? Yt(new Uint8Array(s.userHandle)) : void 0
        },
        type: "public-key",
        clientExtensionResults: n,
        authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
    }
}

function Io(t) {
    return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)
}

function Za() {
    var t, e;
    return !!(ye() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof((t = navigator == null ? void 0 : navigator.credentials) === null || t === void 0 ? void 0 : t.create) == "function" && typeof((e = navigator == null ? void 0 : navigator.credentials) === null || e === void 0 ? void 0 : e.get) == "function")
}
async function Kp(t) {
    try {
        const e = await navigator.credentials.create(t);
        return e ? e instanceof PublicKeyCredential ? {
            data: e,
            error: null
        } : {
            data: null,
            error: new Hn("Browser returned unexpected credential type", e)
        } : {
            data: null,
            error: new Hn("Empty credential response", e)
        }
    } catch (e) {
        return {
            data: null,
            error: Up({
                error: e,
                options: t
            })
        }
    }
}
async function Gp(t) {
    try {
        const e = await navigator.credentials.get(t);
        return e ? e instanceof PublicKeyCredential ? {
            data: e,
            error: null
        } : {
            data: null,
            error: new Hn("Browser returned unexpected credential type", e)
        } : {
            data: null,
            error: new Hn("Empty credential response", e)
        }
    } catch (e) {
        return {
            data: null,
            error: Bp({
                error: e,
                options: t
            })
        }
    }
}
const Jp = {
        hints: ["security-key"],
        authenticatorSelection: {
            authenticatorAttachment: "cross-platform",
            requireResidentKey: !1,
            userVerification: "preferred",
            residentKey: "discouraged"
        },
        attestation: "direct"
    },
    Yp = {
        userVerification: "preferred",
        hints: ["security-key"],
        attestation: "direct"
    };

function zn(...t) {
    const e = s => s !== null && typeof s == "object" && !Array.isArray(s),
        r = s => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
        n = {};
    for (const s of t)
        if (s)
            for (const a in s) {
                const i = s[a];
                if (i !== void 0)
                    if (Array.isArray(i)) n[a] = i;
                    else if (r(i)) n[a] = i;
                else if (e(i)) {
                    const o = n[a];
                    e(o) ? n[a] = zn(o, i) : n[a] = zn(i)
                } else n[a] = i
            }
    return n
}

function Qp(t, e) {
    return zn(Jp, t, e || {})
}

function Xp(t, e) {
    return zn(Yp, t, e || {})
}
class Zp {
    constructor(e) {
        this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this)
    }
    async _enroll(e) {
        return this.client.mfa.enroll(Object.assign(Object.assign({}, e), {
            factorType: "webauthn"
        }))
    }
    async _challenge({
        factorId: e,
        webauthn: r,
        friendlyName: n,
        signal: s
    }, a) {
        var i;
        try {
            const {
                data: o,
                error: l
            } = await this.client.mfa.challenge({
                factorId: e,
                webauthn: r
            });
            if (!o) return {
                data: null,
                error: l
            };
            const c = s ? ? Fp.createNewAbortSignal();
            if (o.webauthn.type === "create") {
                const {
                    user: u
                } = o.webauthn.credential_options.publicKey;
                if (!u.name) {
                    const d = n;
                    if (d) u.name = `${u.id}:${d}`;
                    else {
                        const h = (await this.client.getUser()).data.user,
                            b = ((i = h == null ? void 0 : h.user_metadata) === null || i === void 0 ? void 0 : i.name) || (h == null ? void 0 : h.email) || (h == null ? void 0 : h.id) || "User";
                        u.name = `${u.id}:${b}`
                    }
                }
                u.displayName || (u.displayName = u.name)
            }
            switch (o.webauthn.type) {
                case "create":
                    {
                        const u = Qp(o.webauthn.credential_options.publicKey, a == null ? void 0 : a.create),
                            {
                                data: d,
                                error: f
                            } = await Kp({
                                publicKey: u,
                                signal: c
                            });
                        return d ? {
                            data: {
                                factorId: e,
                                challengeId: o.id,
                                webauthn: {
                                    type: o.webauthn.type,
                                    credential_response: d
                                }
                            },
                            error: null
                        } : {
                            data: null,
                            error: f
                        }
                    }
                case "request":
                    {
                        const u = Xp(o.webauthn.credential_options.publicKey, a == null ? void 0 : a.request),
                            {
                                data: d,
                                error: f
                            } = await Gp(Object.assign(Object.assign({}, o.webauthn.credential_options), {
                                publicKey: u,
                                signal: c
                            }));
                        return d ? {
                            data: {
                                factorId: e,
                                challengeId: o.id,
                                webauthn: {
                                    type: o.webauthn.type,
                                    credential_response: d
                                }
                            },
                            error: null
                        } : {
                            data: null,
                            error: f
                        }
                    }
            }
        } catch (o) {
            return O(o) ? {
                data: null,
                error: o
            } : {
                data: null,
                error: new Gt("Unexpected error in challenge", o)
            }
        }
    }
    async _verify({
        challengeId: e,
        factorId: r,
        webauthn: n
    }) {
        return this.client.mfa.verify({
            factorId: r,
            challengeId: e,
            webauthn: n
        })
    }
    async _authenticate({
        factorId: e,
        webauthn: {
            rpId: r = typeof window < "u" ? window.location.hostname : void 0,
            rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
            signal: s
        } = {}
    }, a) {
        if (!r) return {
            data: null,
            error: new dn("rpId is required for WebAuthn authentication")
        };
        try {
            if (!Za()) return {
                data: null,
                error: new Gt("Browser does not support WebAuthn", null)
            };
            const {
                data: i,
                error: o
            } = await this.challenge({
                factorId: e,
                webauthn: {
                    rpId: r,
                    rpOrigins: n
                },
                signal: s
            }, {
                request: a
            });
            if (!i) return {
                data: null,
                error: o
            };
            const {
                webauthn: l
            } = i;
            return this._verify({
                factorId: e,
                challengeId: i.challengeId,
                webauthn: {
                    type: l.type,
                    rpId: r,
                    rpOrigins: n,
                    credential_response: l.credential_response
                }
            })
        } catch (i) {
            return O(i) ? {
                data: null,
                error: i
            } : {
                data: null,
                error: new Gt("Unexpected error in authenticate", i)
            }
        }
    }
    async _register({
        friendlyName: e,
        webauthn: {
            rpId: r = typeof window < "u" ? window.location.hostname : void 0,
            rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
            signal: s
        } = {}
    }, a) {
        if (!r) return {
            data: null,
            error: new dn("rpId is required for WebAuthn registration")
        };
        try {
            if (!Za()) return {
                data: null,
                error: new Gt("Browser does not support WebAuthn", null)
            };
            const {
                data: i,
                error: o
            } = await this._enroll({
                friendlyName: e
            });
            if (!i) return await this.client.mfa.listFactors().then(u => {
                var d;
                return (d = u.data) === null || d === void 0 ? void 0 : d.all.find(f => f.factor_type === "webauthn" && f.friendly_name === e && f.status !== "unverified")
            }).then(u => u ? this.client.mfa.unenroll({
                factorId: u == null ? void 0 : u.id
            }) : void 0), {
                data: null,
                error: o
            };
            const {
                data: l,
                error: c
            } = await this._challenge({
                factorId: i.id,
                friendlyName: i.friendly_name,
                webauthn: {
                    rpId: r,
                    rpOrigins: n
                },
                signal: s
            }, {
                create: a
            });
            return l ? this._verify({
                factorId: i.id,
                challengeId: l.challengeId,
                webauthn: {
                    rpId: r,
                    rpOrigins: n,
                    type: l.webauthn.type,
                    credential_response: l.webauthn.credential_response
                }
            }) : {
                data: null,
                error: c
            }
        } catch (i) {
            return O(i) ? {
                data: null,
                error: i
            } : {
                data: null,
                error: new Gt("Unexpected error in register", i)
            }
        }
    }
}
Lp();
const em = {
    url: Qf,
    storageKey: Xf,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: Zf,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
    throwOnError: !1,
    lockAcquireTimeout: 5e3,
    skipAutoInitialize: !1
};
async function ei(t, e, r) {
    return await r()
}
const pr = {};
class hn {
    get jwks() {
        var e, r;
        return (r = (e = pr[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && r !== void 0 ? r : {
            keys: []
        }
    }
    set jwks(e) {
        pr[this.storageKey] = Object.assign(Object.assign({}, pr[this.storageKey]), {
            jwks: e
        })
    }
    get jwks_cached_at() {
        var e, r;
        return (r = (e = pr[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(e) {
        pr[this.storageKey] = Object.assign(Object.assign({}, pr[this.storageKey]), {
            cachedAt: e
        })
    }
    constructor(e) {
        var r, n, s;
        this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
        const a = Object.assign(Object.assign({}, em), e);
        if (this.storageKey = a.storageKey, this.instanceID = (r = hn.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, hn.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!a.debug, typeof a.debug == "function" && (this.logger = a.debug), this.instanceID > 0 && ye()) {
            const i = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
            console.warn(i), this.logDebugMessages && console.trace(i)
        }
        if (this.persistSession = a.persistSession, this.autoRefreshToken = a.autoRefreshToken, this.admin = new Np({
                url: a.url,
                headers: a.headers,
                fetch: a.fetch
            }), this.url = a.url, this.headers = a.headers, this.fetch = Oo(a.fetch), this.lock = a.lock || ei, this.detectSessionInUrl = a.detectSessionInUrl, this.flowType = a.flowType, this.hasCustomAuthorizationHeader = a.hasCustomAuthorizationHeader, this.throwOnError = a.throwOnError, this.lockAcquireTimeout = a.lockAcquireTimeout, a.lock ? this.lock = a.lock : this.persistSession && ye() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = Ip : this.lock = ei, this.jwks || (this.jwks = {
                keys: []
            }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
                webauthn: new Zp(this)
            }, this.oauth = {
                getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
                approveAuthorization: this._approveAuthorization.bind(this),
                denyAuthorization: this._denyAuthorization.bind(this),
                listGrants: this._listOAuthGrants.bind(this),
                revokeGrant: this._revokeOAuthGrant.bind(this)
            }, this.persistSession ? (a.storage ? this.storage = a.storage : Ro() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Qa(this.memoryStorage)), a.userStorage && (this.userStorage = a.userStorage)) : (this.memoryStorage = {}, this.storage = Qa(this.memoryStorage)), ye() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (i) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i)
            }(s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", async i => {
                this._debug("received broadcast notification from other tab or client", i);
                try {
                    await this._notifyAllSubscribers(i.data.event, i.data.session, !1)
                } catch (o) {
                    this._debug("#broadcastChannel", "error", o)
                }
            })
        }
        a.skipAutoInitialize || this.initialize().catch(i => {
            this._debug("#initialize()", "error", i)
        })
    }
    isThrowOnErrorEnabled() {
        return this.throwOnError
    }
    _returnResult(e) {
        if (this.throwOnError && e && e.error) throw e.error;
        return e
    }
    _logPrefix() {
        return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Co}) ${new Date().toISOString()}`
    }
    _debug(...e) {
        return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise)
    }
    async _initialize() {
        var e;
        try {
            let r = {},
                n = "none";
            if (ye() && (r = fp(window.location.href), this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")), ye() && this.detectSessionInUrl && n !== "none") {
                const {
                    data: s,
                    error: a
                } = await this._getSessionFromURL(r, n);
                if (a) {
                    if (this._debug("#_initialize()", "error detecting session from URL", a), sp(a)) {
                        const l = (e = a.details) === null || e === void 0 ? void 0 : e.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable") return {
                            error: a
                        }
                    }
                    return {
                        error: a
                    }
                }
                const {
                    session: i,
                    redirectType: o
                } = s;
                return this._debug("#_initialize()", "detected session in URL", i, "redirect type", o), await this._saveSession(i), setTimeout(async () => {
                    o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i)
                }, 0), {
                    error: null
                }
            }
            return await this._recoverAndRefresh(), {
                error: null
            }
        } catch (r) {
            return O(r) ? this._returnResult({
                error: r
            }) : this._returnResult({
                error: new Gt("Unexpected error during initialization", r)
            })
        } finally {
            await this._handleVisibilityChange(), this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(e) {
        var r, n, s;
        try {
            const a = await N(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        data: (n = (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken
                        }
                    },
                    xform: Ge
                }),
                {
                    data: i,
                    error: o
                } = a;
            if (o || !i) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: o
            });
            const l = i.session,
                c = i.user;
            return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({
                data: {
                    user: c,
                    session: l
                },
                error: null
            })
        } catch (a) {
            if (O(a)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: a
            });
            throw a
        }
    }
    async signUp(e) {
        var r, n, s;
        try {
            let a;
            if ("email" in e) {
                const {
                    email: u,
                    password: d,
                    options: f
                } = e;
                let h = null,
                    b = null;
                this.flowType === "pkce" && ([h, b] = await hr(this.storage, this.storageKey)), a = await N(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: f == null ? void 0 : f.emailRedirectTo,
                    body: {
                        email: u,
                        password: d,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        },
                        code_challenge: h,
                        code_challenge_method: b
                    },
                    xform: Ge
                })
            } else if ("phone" in e) {
                const {
                    phone: u,
                    password: d,
                    options: f
                } = e;
                a = await N(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: u,
                        password: d,
                        data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                        channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        }
                    },
                    xform: Ge
                })
            } else throw new jn("You must provide either an email or phone number and a password");
            const {
                data: i,
                error: o
            } = a;
            if (o || !i) return await ge(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: o
            });
            const l = i.session,
                c = i.user;
            return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({
                data: {
                    user: c,
                    session: l
                },
                error: null
            })
        } catch (a) {
            if (await ge(this.storage, `${this.storageKey}-code-verifier`), O(a)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: a
            });
            throw a
        }
    }
    async signInWithPassword(e) {
        try {
            let r;
            if ("email" in e) {
                const {
                    email: a,
                    password: i,
                    options: o
                } = e;
                r = await N(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    },
                    xform: Ja
                })
            } else if ("phone" in e) {
                const {
                    phone: a,
                    password: i,
                    options: o
                } = e;
                r = await N(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    },
                    xform: Ja
                })
            } else throw new jn("You must provide either an email or phone number and a password");
            const {
                data: n,
                error: s
            } = r;
            if (s) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: s
            });
            if (!n || !n.session || !n.user) {
                const a = new dr;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                })
            }
            return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {
                    weakPassword: n.weak_password
                } : null),
                error: s
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: r
            });
            throw r
        }
    }
    async signInWithOAuth(e) {
        var r, n, s, a;
        return await this._handleProviderSignIn(e.provider, {
            redirectTo: (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
            scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
            queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (a = e.options) === null || a === void 0 ? void 0 : a.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(e) {
        return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e))
    }
    async signInWithWeb3(e) {
        const {
            chain: r
        } = e;
        switch (r) {
            case "ethereum":
                return await this.signInWithEthereum(e);
            case "solana":
                return await this.signInWithSolana(e);
            default:
                throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)
        }
    }
    async signInWithEthereum(e) {
        var r, n, s, a, i, o, l, c, u, d, f;
        let h, b;
        if ("message" in e) h = e.message, b = e.signature;
        else {
            const {
                chain: m,
                wallet: y,
                statement: k,
                options: E
            } = e;
            let w;
            if (ye())
                if (typeof y == "object") w = y;
                else {
                    const F = window;
                    if ("ethereum" in F && typeof F.ethereum == "object" && "request" in F.ethereum && typeof F.ethereum.request == "function") w = F.ethereum;
                    else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof y != "object" || !(E != null && E.url)) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                w = y
            }
            const P = new URL((r = E == null ? void 0 : E.url) !== null && r !== void 0 ? r : window.location.href),
                U = await w.request({
                    method: "eth_requestAccounts"
                }).then(F => F).catch(() => {
                    throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")
                });
            if (!U || U.length === 0) throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
            const L = No(U[0]);
            let H = (n = E == null ? void 0 : E.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
            if (!H) {
                const F = await w.request({
                    method: "eth_chainId"
                });
                H = $p(F)
            }
            const me = {
                domain: P.host,
                address: L,
                statement: k,
                uri: P.href,
                version: "1",
                chainId: H,
                nonce: (s = E == null ? void 0 : E.signInWithEthereum) === null || s === void 0 ? void 0 : s.nonce,
                issuedAt: (i = (a = E == null ? void 0 : E.signInWithEthereum) === null || a === void 0 ? void 0 : a.issuedAt) !== null && i !== void 0 ? i : new Date,
                expirationTime: (o = E == null ? void 0 : E.signInWithEthereum) === null || o === void 0 ? void 0 : o.expirationTime,
                notBefore: (l = E == null ? void 0 : E.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
                requestId: (c = E == null ? void 0 : E.signInWithEthereum) === null || c === void 0 ? void 0 : c.requestId,
                resources: (u = E == null ? void 0 : E.signInWithEthereum) === null || u === void 0 ? void 0 : u.resources
            };
            h = Mp(me), b = await w.request({
                method: "personal_sign",
                params: [Dp(h), L]
            })
        }
        try {
            const {
                data: m,
                error: y
            } = await N(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "ethereum",
                    message: h,
                    signature: b
                }, !((d = e.options) === null || d === void 0) && d.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (f = e.options) === null || f === void 0 ? void 0 : f.captchaToken
                    }
                } : null),
                xform: Ge
            });
            if (y) throw y;
            if (!m || !m.session || !m.user) {
                const k = new dr;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: k
                })
            }
            return m.session && (await this._saveSession(m.session), await this._notifyAllSubscribers("SIGNED_IN", m.session)), this._returnResult({
                data: Object.assign({}, m),
                error: y
            })
        } catch (m) {
            if (O(m)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: m
            });
            throw m
        }
    }
    async signInWithSolana(e) {
        var r, n, s, a, i, o, l, c, u, d, f, h;
        let b, m;
        if ("message" in e) b = e.message, m = e.signature;
        else {
            const {
                chain: y,
                wallet: k,
                statement: E,
                options: w
            } = e;
            let P;
            if (ye())
                if (typeof k == "object") P = k;
                else {
                    const L = window;
                    if ("solana" in L && typeof L.solana == "object" && ("signIn" in L.solana && typeof L.solana.signIn == "function" || "signMessage" in L.solana && typeof L.solana.signMessage == "function")) P = L.solana;
                    else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof k != "object" || !(w != null && w.url)) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                P = k
            }
            const U = new URL((r = w == null ? void 0 : w.url) !== null && r !== void 0 ? r : window.location.href);
            if ("signIn" in P && P.signIn) {
                const L = await P.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, w == null ? void 0 : w.signInWithSolana), {
                    version: "1",
                    domain: U.host,
                    uri: U.href
                }), E ? {
                    statement: E
                } : null));
                let H;
                if (Array.isArray(L) && L[0] && typeof L[0] == "object") H = L[0];
                else if (L && typeof L == "object" && "signedMessage" in L && "signature" in L) H = L;
                else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage" in H && "signature" in H && (typeof H.signedMessage == "string" || H.signedMessage instanceof Uint8Array) && H.signature instanceof Uint8Array) b = typeof H.signedMessage == "string" ? H.signedMessage : new TextDecoder().decode(H.signedMessage), m = H.signature;
                else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage" in P) || typeof P.signMessage != "function" || !("publicKey" in P) || typeof P != "object" || !P.publicKey || !("toBase58" in P.publicKey) || typeof P.publicKey.toBase58 != "function") throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                b = [`${U.host} wants you to sign in with your Solana account:`, P.publicKey.toBase58(), ...E ? ["", E, ""] : [""], "Version: 1", `URI: ${U.href}`, `Issued At: ${(s=(n=w==null?void 0:w.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`, ...!((a = w == null ? void 0 : w.signInWithSolana) === null || a === void 0) && a.notBefore ? [`Not Before: ${w.signInWithSolana.notBefore}`] : [], ...!((i = w == null ? void 0 : w.signInWithSolana) === null || i === void 0) && i.expirationTime ? [`Expiration Time: ${w.signInWithSolana.expirationTime}`] : [], ...!((o = w == null ? void 0 : w.signInWithSolana) === null || o === void 0) && o.chainId ? [`Chain ID: ${w.signInWithSolana.chainId}`] : [], ...!((l = w == null ? void 0 : w.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${w.signInWithSolana.nonce}`] : [], ...!((c = w == null ? void 0 : w.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${w.signInWithSolana.requestId}`] : [], ...!((d = (u = w == null ? void 0 : w.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || d === void 0) && d.length ? ["Resources", ...w.signInWithSolana.resources.map(H => `- ${H}`)] : []].join(`
`);
                const L = await P.signMessage(new TextEncoder().encode(b), "utf8");
                if (!L || !(L instanceof Uint8Array)) throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                m = L
            }
        }
        try {
            const {
                data: y,
                error: k
            } = await N(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: b,
                    signature: Yt(m)
                }, !((f = e.options) === null || f === void 0) && f.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (h = e.options) === null || h === void 0 ? void 0 : h.captchaToken
                    }
                } : null),
                xform: Ge
            });
            if (k) throw k;
            if (!y || !y.session || !y.user) {
                const E = new dr;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: E
                })
            }
            return y.session && (await this._saveSession(y.session), await this._notifyAllSubscribers("SIGNED_IN", y.session)), this._returnResult({
                data: Object.assign({}, y),
                error: k
            })
        } catch (y) {
            if (O(y)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: y
            });
            throw y
        }
    }
    async _exchangeCodeForSession(e) {
        const r = await Ht(this.storage, `${this.storageKey}-code-verifier`),
            [n, s] = (r ? ? "").split("/");
        try {
            if (!n && this.flowType === "pkce") throw new ap;
            const {
                data: a,
                error: i
            } = await N(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: e,
                    code_verifier: n
                },
                xform: Ge
            });
            if (await ge(this.storage, `${this.storageKey}-code-verifier`), i) throw i;
            if (!a || !a.session || !a.user) {
                const o = new dr;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: o
                })
            }
            return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", a.session)), this._returnResult({
                data: Object.assign(Object.assign({}, a), {
                    redirectType: s ? ? null
                }),
                error: i
            })
        } catch (a) {
            if (await ge(this.storage, `${this.storageKey}-code-verifier`), O(a)) return this._returnResult({
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: a
            });
            throw a
        }
    }
    async signInWithIdToken(e) {
        try {
            const {
                options: r,
                provider: n,
                token: s,
                access_token: a,
                nonce: i
            } = e, o = await N(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: s,
                    access_token: a,
                    nonce: i,
                    gotrue_meta_security: {
                        captcha_token: r == null ? void 0 : r.captchaToken
                    }
                },
                xform: Ge
            }), {
                data: l,
                error: c
            } = o;
            if (c) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: c
            });
            if (!l || !l.session || !l.user) {
                const u = new dr;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: u
                })
            }
            return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({
                data: l,
                error: c
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: r
            });
            throw r
        }
    }
    async signInWithOtp(e) {
        var r, n, s, a, i;
        try {
            if ("email" in e) {
                const {
                    email: o,
                    options: l
                } = e;
                let c = null,
                    u = null;
                this.flowType === "pkce" && ([c, u] = await hr(this.storage, this.storageKey));
                const {
                    error: d
                } = await N(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: o,
                        data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
                        create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: c,
                        code_challenge_method: u
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                })
            }
            if ("phone" in e) {
                const {
                    phone: o,
                    options: l
                } = e, {
                    data: c,
                    error: u
                } = await N(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: o,
                        data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                        create_user: (a = l == null ? void 0 : l.shouldCreateUser) !== null && a !== void 0 ? a : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (i = l == null ? void 0 : l.channel) !== null && i !== void 0 ? i : "sms"
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: c == null ? void 0 : c.message_id
                    },
                    error: u
                })
            }
            throw new jn("You must provide either an email or phone number.")
        } catch (o) {
            if (await ge(this.storage, `${this.storageKey}-code-verifier`), O(o)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: o
            });
            throw o
        }
    }
    async verifyOtp(e) {
        var r, n;
        try {
            let s, a;
            "options" in e && (s = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo, a = (n = e.options) === null || n === void 0 ? void 0 : n.captchaToken);
            const {
                data: i,
                error: o
            } = await N(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                    gotrue_meta_security: {
                        captcha_token: a
                    }
                }),
                redirectTo: s,
                xform: Ge
            });
            if (o) throw o;
            if (!i) throw new Error("An error occurred on token verification.");
            const l = i.session,
                c = i.user;
            return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({
                data: {
                    user: c,
                    session: l
                },
                error: null
            })
        } catch (s) {
            if (O(s)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: s
            });
            throw s
        }
    }
    async signInWithSSO(e) {
        var r, n, s, a, i;
        try {
            let o = null,
                l = null;
            this.flowType === "pkce" && ([o, l] = await hr(this.storage, this.storageKey));
            const c = await N(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
                    provider_id: e.providerId
                } : null), "domain" in e ? {
                    domain: e.domain
                } : null), {
                    redirect_to: (n = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0
                }), !((s = e == null ? void 0 : e.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: e.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: o,
                    code_challenge_method: l
                }),
                headers: this.headers,
                xform: Rp
            });
            return !((a = c.data) === null || a === void 0) && a.url && ye() && !(!((i = e.options) === null || i === void 0) && i.skipBrowserRedirect) && window.location.assign(c.data.url), this._returnResult(c)
        } catch (o) {
            if (await ge(this.storage, `${this.storageKey}-code-verifier`), O(o)) return this._returnResult({
                data: null,
                error: o
            });
            throw o
        }
    }
    async reauthenticate() {
        return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async e => {
                const {
                    data: {
                        session: r
                    },
                    error: n
                } = e;
                if (n) throw n;
                if (!r) throw new $e;
                const {
                    error: s
                } = await N(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: r.access_token
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                })
            })
        } catch (e) {
            if (O(e)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: e
            });
            throw e
        }
    }
    async resend(e) {
        try {
            const r = `${this.url}/resend`;
            if ("email" in e) {
                const {
                    email: n,
                    type: s,
                    options: a
                } = e, {
                    error: i
                } = await N(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        email: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    redirectTo: a == null ? void 0 : a.emailRedirectTo
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                })
            } else if ("phone" in e) {
                const {
                    phone: n,
                    type: s,
                    options: a
                } = e, {
                    data: i,
                    error: o
                } = await N(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: i == null ? void 0 : i.message_id
                    },
                    error: o
                })
            }
            throw new jn("You must provide either an email or phone number and a type")
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: r
            });
            throw r
        }
    }
    async getSession() {
        return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async r => r))
    }
    async _acquireLock(e, r) {
        this._debug("#_acquireLock", "begin", e);
        try {
            if (this.lockAcquired) {
                const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(),
                    s = (async () => (await n, await r()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                })()), s
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const n = r();
                    for (this.pendingInLock.push((async () => {
                            try {
                                await n
                            } catch {}
                        })()), await n; this.pendingInLock.length;) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s), this.pendingInLock.splice(0, s.length)
                    }
                    return await n
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1
                }
            })
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(e) {
        this._debug("#_useSession", "begin");
        try {
            const r = await this.__loadSession();
            return await e(r)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let e = null;
            const r = await Ht(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? e = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
                data: {
                    session: null
                },
                error: null
            };
            const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < ps : !1;
            if (this._debug("#__loadSession()", `session has${n?"":" not"} expired`, "expires_at", e.expires_at), !n) {
                if (this.userStorage) {
                    const i = await Ht(this.userStorage, this.storageKey + "-user");
                    i != null && i.user ? e.user = i.user : e.user = gs()
                }
                if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
                    const i = {
                        value: this.suppressGetSessionWarning
                    };
                    e.user = Tp(e.user, i), i.value && (this.suppressGetSessionWarning = !0)
                }
                return {
                    data: {
                        session: e
                    },
                    error: null
                }
            }
            const {
                data: s,
                error: a
            } = await this._callRefreshToken(e.refresh_token);
            return a ? this._returnResult({
                data: {
                    session: null
                },
                error: a
            }) : this._returnResult({
                data: {
                    session: s
                },
                error: null
            })
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(e) {
        if (e) return await this._getUser(e);
        await this.initializePromise;
        const r = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
        return r.data.user && (this.suppressGetSessionWarning = !0), r
    }
    async _getUser(e) {
        try {
            return e ? await N(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: Pt
            }) : await this._useSession(async r => {
                var n, s, a;
                const {
                    data: i,
                    error: o
                } = r;
                if (o) throw o;
                return !(!((n = i.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new $e
                } : await N(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (a = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null && a !== void 0 ? a : void 0,
                    xform: Pt
                })
            })
        } catch (r) {
            if (O(r)) return On(r) && (await this._removeSession(), await ge(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
                data: {
                    user: null
                },
                error: r
            });
            throw r
        }
    }
    async updateUser(e, r = {}) {
        return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, r))
    }
    async _updateUser(e, r = {}) {
        try {
            return await this._useSession(async n => {
                const {
                    data: s,
                    error: a
                } = n;
                if (a) throw a;
                if (!s.session) throw new $e;
                const i = s.session;
                let o = null,
                    l = null;
                this.flowType === "pkce" && e.email != null && ([o, l] = await hr(this.storage, this.storageKey));
                const {
                    data: c,
                    error: u
                } = await N(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: r == null ? void 0 : r.emailRedirectTo,
                    body: Object.assign(Object.assign({}, e), {
                        code_challenge: o,
                        code_challenge_method: l
                    }),
                    jwt: i.access_token,
                    xform: Pt
                });
                if (u) throw u;
                return i.user = c.user, await this._saveSession(i), await this._notifyAllSubscribers("USER_UPDATED", i), this._returnResult({
                    data: {
                        user: i.user
                    },
                    error: null
                })
            })
        } catch (n) {
            if (await ge(this.storage, `${this.storageKey}-code-verifier`), O(n)) return this._returnResult({
                data: {
                    user: null
                },
                error: n
            });
            throw n
        }
    }
    async setSession(e) {
        return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e))
    }
    async _setSession(e) {
        try {
            if (!e.access_token || !e.refresh_token) throw new $e;
            const r = Date.now() / 1e3;
            let n = r,
                s = !0,
                a = null;
            const {
                payload: i
            } = In(e.access_token);
            if (i.exp && (n = i.exp, s = n <= r), s) {
                const {
                    data: o,
                    error: l
                } = await this._callRefreshToken(e.refresh_token);
                if (l) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                });
                if (!o) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                a = o
            } else {
                const {
                    data: o,
                    error: l
                } = await this._getUser(e.access_token);
                if (l) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                });
                a = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: o.user,
                    token_type: "bearer",
                    expires_in: n - r,
                    expires_at: n
                }, await this._saveSession(a), await this._notifyAllSubscribers("SIGNED_IN", a)
            }
            return this._returnResult({
                data: {
                    user: a.user,
                    session: a
                },
                error: null
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: {
                    session: null,
                    user: null
                },
                error: r
            });
            throw r
        }
    }
    async refreshSession(e) {
        return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e))
    }
    async _refreshSession(e) {
        try {
            return await this._useSession(async r => {
                var n;
                if (!e) {
                    const {
                        data: i,
                        error: o
                    } = r;
                    if (o) throw o;
                    e = (n = i.session) !== null && n !== void 0 ? n : void 0
                }
                if (!(e != null && e.refresh_token)) throw new $e;
                const {
                    data: s,
                    error: a
                } = await this._callRefreshToken(e.refresh_token);
                return a ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                }) : s ? this._returnResult({
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                }) : this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                })
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: {
                    user: null,
                    session: null
                },
                error: r
            });
            throw r
        }
    }
    async _getSessionFromURL(e, r) {
        try {
            if (!ye()) throw new Nn("No browser detected.");
            if (e.error || e.error_description || e.error_code) throw new Nn(e.error_description || "Error in URL with unspecified error_description", {
                error: e.error || "unspecified_error",
                code: e.error_code || "unspecified_code"
            });
            switch (r) {
                case "implicit":
                    if (this.flowType === "pkce") throw new Fa("Not a valid PKCE flow url.");
                    break;
                case "pkce":
                    if (this.flowType === "implicit") throw new Nn("Not a valid implicit grant flow url.");
                    break;
                default:
            }
            if (r === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code) throw new Fa("No code detected.");
                const {
                    data: E,
                    error: w
                } = await this._exchangeCodeForSession(e.code);
                if (w) throw w;
                const P = new URL(window.location.href);
                return P.searchParams.delete("code"), window.history.replaceState(window.history.state, "", P.toString()), {
                    data: {
                        session: E.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {
                provider_token: n,
                provider_refresh_token: s,
                access_token: a,
                refresh_token: i,
                expires_in: o,
                expires_at: l,
                token_type: c
            } = e;
            if (!a || !o || !i || !c) throw new Nn("No session defined in URL");
            const u = Math.round(Date.now() / 1e3),
                d = parseInt(o);
            let f = u + d;
            l && (f = parseInt(l));
            const h = f - u;
            h * 1e3 <= yr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${d}s`);
            const b = f - d;
            u - b >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", b, f, u) : u - b < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", b, f, u);
            const {
                data: m,
                error: y
            } = await this._getUser(a);
            if (y) throw y;
            const k = {
                provider_token: n,
                provider_refresh_token: s,
                access_token: a,
                expires_in: d,
                expires_at: f,
                refresh_token: i,
                token_type: c,
                user: m.user
            };
            return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({
                data: {
                    session: k,
                    redirectType: e.type
                },
                error: null
            })
        } catch (n) {
            if (O(n)) return this._returnResult({
                data: {
                    session: null,
                    redirectType: null
                },
                error: n
            });
            throw n
        }
    }
    _isImplicitGrantCallback(e) {
        return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), e) : !!(e.access_token || e.error_description)
    }
    async _isPKCECallback(e) {
        const r = await Ht(this.storage, `${this.storageKey}-code-verifier`);
        return !!(e.code && r)
    }
    async signOut(e = {
        scope: "global"
    }) {
        return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e))
    }
    async _signOut({
        scope: e
    } = {
        scope: "global"
    }) {
        return await this._useSession(async r => {
            var n;
            const {
                data: s,
                error: a
            } = r;
            if (a && !On(a)) return this._returnResult({
                error: a
            });
            const i = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
            if (i) {
                const {
                    error: o
                } = await this.admin.signOut(i, e);
                if (o && !(np(o) && (o.status === 404 || o.status === 401 || o.status === 403) || On(o))) return this._returnResult({
                    error: o
                })
            }
            return e !== "others" && (await this._removeSession(), await ge(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
                error: null
            })
        })
    }
    onAuthStateChange(e) {
        const r = hp(),
            n = {
                id: r,
                callback: e,
                unsubscribe: () => {
                    this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r)
                }
            };
        return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, n), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
            this._emitInitialSession(r)
        })))(), {
            data: {
                subscription: n
            }
        }
    }
    async _emitInitialSession(e) {
        return await this._useSession(async r => {
            var n, s;
            try {
                const {
                    data: {
                        session: a
                    },
                    error: i
                } = r;
                if (i) throw i;
                await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", a)), this._debug("INITIAL_SESSION", "callback id", e, "session", a)
            } catch (a) {
                await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", a), On(a) ? console.warn(a) : console.error(a)
            }
        })
    }
    async resetPasswordForEmail(e, r = {}) {
        let n = null,
            s = null;
        this.flowType === "pkce" && ([n, s] = await hr(this.storage, this.storageKey, !0));
        try {
            return await N(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: e,
                    code_challenge: n,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: r.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: r.redirectTo
            })
        } catch (a) {
            if (await ge(this.storage, `${this.storageKey}-code-verifier`), O(a)) return this._returnResult({
                data: null,
                error: a
            });
            throw a
        }
    }
    async getUserIdentities() {
        var e;
        try {
            const {
                data: r,
                error: n
            } = await this.getUser();
            if (n) throw n;
            return this._returnResult({
                data: {
                    identities: (e = r.user.identities) !== null && e !== void 0 ? e : []
                },
                error: null
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: null,
                error: r
            });
            throw r
        }
    }
    async linkIdentity(e) {
        return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e)
    }
    async linkIdentityOAuth(e) {
        var r;
        try {
            const {
                data: n,
                error: s
            } = await this._useSession(async a => {
                var i, o, l, c, u;
                const {
                    data: d,
                    error: f
                } = a;
                if (f) throw f;
                const h = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: (i = e.options) === null || i === void 0 ? void 0 : i.redirectTo,
                    scopes: (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
                    queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await N(this.fetch, "GET", h, {
                    headers: this.headers,
                    jwt: (u = (c = d.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
                })
            });
            if (s) throw s;
            return ye() && !(!((r = e.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url), this._returnResult({
                data: {
                    provider: e.provider,
                    url: n == null ? void 0 : n.url
                },
                error: null
            })
        } catch (n) {
            if (O(n)) return this._returnResult({
                data: {
                    provider: e.provider,
                    url: null
                },
                error: n
            });
            throw n
        }
    }
    async linkIdentityIdToken(e) {
        return await this._useSession(async r => {
            var n;
            try {
                const {
                    error: s,
                    data: {
                        session: a
                    }
                } = r;
                if (s) throw s;
                const {
                    options: i,
                    provider: o,
                    token: l,
                    access_token: c,
                    nonce: u
                } = e, d = await N(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    jwt: (n = a == null ? void 0 : a.access_token) !== null && n !== void 0 ? n : void 0,
                    body: {
                        provider: o,
                        id_token: l,
                        access_token: c,
                        nonce: u,
                        link_identity: !0,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    xform: Ge
                }), {
                    data: f,
                    error: h
                } = d;
                return h ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                }) : !f || !f.session || !f.user ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: new dr
                }) : (f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("USER_UPDATED", f.session)), this._returnResult({
                    data: f,
                    error: h
                }))
            } catch (s) {
                if (await ge(this.storage, `${this.storageKey}-code-verifier`), O(s)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                });
                throw s
            }
        })
    }
    async unlinkIdentity(e) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {
                    data: a,
                    error: i
                } = r;
                if (i) throw i;
                return await N(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (n = a.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
                })
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: null,
                error: r
            });
            throw r
        }
    }
    async _refreshAccessToken(e) {
        const r = `#_refreshAccessToken(${e.substring(0,5)}...)`;
        this._debug(r, "begin");
        try {
            const n = Date.now();
            return await gp(async s => (s > 0 && await mp(200 * Math.pow(2, s - 1)), this._debug(r, "refreshing attempt", s), await N(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: e
                },
                headers: this.headers,
                xform: Ge
            })), (s, a) => {
                const i = 200 * Math.pow(2, s);
                return a && ms(a) && Date.now() + i - n < yr
            })
        } catch (n) {
            if (this._debug(r, "error", n), O(n)) return this._returnResult({
                data: {
                    session: null,
                    user: null
                },
                error: n
            });
            throw n
        } finally {
            this._debug(r, "end")
        }
    }
    _isValidSession(e) {
        return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e
    }
    async _handleProviderSignIn(e, r) {
        const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: r.redirectTo,
            scopes: r.scopes,
            queryParams: r.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", e, "options", r, "url", n), ye() && !r.skipBrowserRedirect && window.location.assign(n), {
            data: {
                provider: e,
                url: n
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var e, r;
        const n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
            const s = await Ht(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let i = await Ht(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !i && (i = {
                    user: s.user
                }, await vr(this.userStorage, this.storageKey + "-user", i)), s.user = (e = i == null ? void 0 : i.user) !== null && e !== void 0 ? e : gs()
            } else if (s && !s.user && !s.user) {
                const i = await Ht(this.storage, this.storageKey + "-user");
                i && (i != null && i.user) ? (s.user = i.user, await ge(this.storage, this.storageKey + "-user"), await vr(this.storage, this.storageKey, s)) : s.user = gs()
            }
            if (this._debug(n, "session from storage", s), !this._isValidSession(s)) {
                this._debug(n, "session is not valid"), s !== null && await this._removeSession();
                return
            }
            const a = ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < ps;
            if (this._debug(n, `session has${a?"":" not"} expired with margin of ${ps}s`), a) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {
                        error: i
                    } = await this._callRefreshToken(s.refresh_token);
                    i && (console.error(i), ms(i) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", i), await this._removeSession()))
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0) try {
                const {
                    data: i,
                    error: o
                } = await this._getUser(s.access_token);
                !o && (i != null && i.user) ? (s.user = i.user, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification")
            } catch (i) {
                console.error("Error getting user data:", i), this._debug(n, "error getting user data, skipping SIGNED_IN notification", i)
            } else await this._notifyAllSubscribers("SIGNED_IN", s)
        } catch (s) {
            this._debug(n, "error", s), console.error(s);
            return
        } finally {
            this._debug(n, "end")
        }
    }
    async _callRefreshToken(e) {
        var r, n;
        if (!e) throw new $e;
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${e.substring(0,5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new ns;
            const {
                data: a,
                error: i
            } = await this._refreshAccessToken(e);
            if (i) throw i;
            if (!a.session) throw new $e;
            await this._saveSession(a.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", a.session);
            const o = {
                data: a.session,
                error: null
            };
            return this.refreshingDeferred.resolve(o), o
        } catch (a) {
            if (this._debug(s, "error", a), O(a)) {
                const i = {
                    data: null,
                    error: a
                };
                return ms(a) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(i), i
            }
            throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(a), a
        } finally {
            this.refreshingDeferred = null, this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(e, r, n = !0) {
        const s = `#_notifyAllSubscribers(${e})`;
        this._debug(s, "begin", r, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: e,
                session: r
            });
            const a = [],
                i = Array.from(this.stateChangeEmitters.values()).map(async o => {
                    try {
                        await o.callback(e, r)
                    } catch (l) {
                        a.push(l)
                    }
                });
            if (await Promise.all(i), a.length > 0) {
                for (let o = 0; o < a.length; o += 1) console.error(a[o]);
                throw a[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(e) {
        this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await ge(this.storage, `${this.storageKey}-code-verifier`);
        const r = Object.assign({}, e),
            n = r.user && r.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !n && r.user && await vr(this.userStorage, this.storageKey + "-user", {
                user: r.user
            });
            const s = Object.assign({}, r);
            delete s.user;
            const a = Ka(s);
            await vr(this.storage, this.storageKey, a)
        } else {
            const s = Ka(r);
            await vr(this.storage, this.storageKey, s)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await ge(this.storage, this.storageKey), await ge(this.storage, this.storageKey + "-code-verifier"), await ge(this.storage, this.storageKey + "-user"), this.userStorage && await ge(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            e && ye() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e)
        } catch (r) {
            console.error("removing visibilitychange callback failed", r)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
        const e = setInterval(() => this._autoRefreshTokenTick(), yr);
        this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e);
        const r = setTimeout(async () => {
            await this.initializePromise, await this._autoRefreshTokenTick()
        }, 0);
        this.autoRefreshTickTimeout = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const e = this.autoRefreshTicker;
        this.autoRefreshTicker = null, e && clearInterval(e);
        const r = this.autoRefreshTickTimeout;
        this.autoRefreshTickTimeout = null, r && clearTimeout(r)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const e = Date.now();
                    try {
                        return await this._useSession(async r => {
                            const {
                                data: {
                                    session: n
                                }
                            } = r;
                            if (!n || !n.refresh_token || !n.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((n.expires_at * 1e3 - e) / yr);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${yr}ms, refresh threshold is ${Ls} ticks`), s <= Ls && await this._callRefreshToken(n.refresh_token)
                        })
                    } catch (r) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", r)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            })
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof jo) this._debug("auto refresh token tick lock not available");
            else throw e
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"), !ye() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
        try {
            this.visibilityChangedCallback = async () => {
                try {
                    await this._onVisibilityChanged(!1)
                } catch (e) {
                    this._debug("#visibilityChangedCallback", "error", e)
                }
            }, window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0)
        } catch (e) {
            console.error("_handleVisibilityChange", e)
        }
    }
    async _onVisibilityChanged(e) {
        const r = `#_onVisibilityChanged(${e})`;
        this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(e, r, n) {
        const s = [`provider=${encodeURIComponent(r)}`];
        if (n != null && n.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
            const [a, i] = await hr(this.storage, this.storageKey), o = new URLSearchParams({
                code_challenge: `${encodeURIComponent(a)}`,
                code_challenge_method: `${encodeURIComponent(i)}`
            });
            s.push(o.toString())
        }
        if (n != null && n.queryParams) {
            const a = new URLSearchParams(n.queryParams);
            s.push(a.toString())
        }
        return n != null && n.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${e}?${s.join("&")}`
    }
    async _unenroll(e) {
        try {
            return await this._useSession(async r => {
                var n;
                const {
                    data: s,
                    error: a
                } = r;
                return a ? this._returnResult({
                    data: null,
                    error: a
                }) : await N(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                    headers: this.headers,
                    jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                })
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: null,
                error: r
            });
            throw r
        }
    }
    async _enroll(e) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {
                    data: a,
                    error: i
                } = r;
                if (i) return this._returnResult({
                    data: null,
                    error: i
                });
                const o = Object.assign({
                        friendly_name: e.friendlyName,
                        factor_type: e.factorType
                    }, e.factorType === "phone" ? {
                        phone: e.phone
                    } : e.factorType === "totp" ? {
                        issuer: e.issuer
                    } : {}),
                    {
                        data: l,
                        error: c
                    } = await N(this.fetch, "POST", `${this.url}/factors`, {
                        body: o,
                        headers: this.headers,
                        jwt: (n = a == null ? void 0 : a.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                return c ? this._returnResult({
                    data: null,
                    error: c
                }) : (e.factorType === "totp" && l.type === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({
                    data: l,
                    error: null
                }))
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: null,
                error: r
            });
            throw r
        }
    }
    async _verify(e) {
        return this._acquireLock(this.lockAcquireTimeout, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {
                        data: s,
                        error: a
                    } = r;
                    if (a) return this._returnResult({
                        data: null,
                        error: a
                    });
                    const i = Object.assign({
                            challenge_id: e.challengeId
                        }, "webauthn" in e ? {
                            webauthn: Object.assign(Object.assign({}, e.webauthn), {
                                credential_response: e.webauthn.type === "create" ? zp(e.webauthn.credential_response) : Vp(e.webauthn.credential_response)
                            })
                        } : {
                            code: e.code
                        }),
                        {
                            data: o,
                            error: l
                        } = await N(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                            body: i,
                            headers: this.headers,
                            jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                        });
                    return l ? this._returnResult({
                        data: null,
                        error: l
                    }) : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + o.expires_in
                    }, o)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), this._returnResult({
                        data: o,
                        error: l
                    }))
                })
            } catch (r) {
                if (O(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r
            }
        })
    }
    async _challenge(e) {
        return this._acquireLock(this.lockAcquireTimeout, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {
                        data: s,
                        error: a
                    } = r;
                    if (a) return this._returnResult({
                        data: null,
                        error: a
                    });
                    const i = await N(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                        body: e,
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    if (i.error) return i;
                    const {
                        data: o
                    } = i;
                    if (o.type !== "webauthn") return {
                        data: o,
                        error: null
                    };
                    switch (o.webauthn.type) {
                        case "create":
                            return {
                                data: Object.assign(Object.assign({}, o), {
                                    webauthn: Object.assign(Object.assign({}, o.webauthn), {
                                        credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), {
                                            publicKey: Wp(o.webauthn.credential_options.publicKey)
                                        })
                                    })
                                }),
                                error: null
                            };
                        case "request":
                            return {
                                data: Object.assign(Object.assign({}, o), {
                                    webauthn: Object.assign(Object.assign({}, o.webauthn), {
                                        credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), {
                                            publicKey: Hp(o.webauthn.credential_options.publicKey)
                                        })
                                    })
                                }),
                                error: null
                            }
                    }
                })
            } catch (r) {
                if (O(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r
            }
        })
    }
    async _challengeAndVerify(e) {
        const {
            data: r,
            error: n
        } = await this._challenge({
            factorId: e.factorId
        });
        return n ? this._returnResult({
            data: null,
            error: n
        }) : await this._verify({
            factorId: e.factorId,
            challengeId: r.id,
            code: e.code
        })
    }
    async _listFactors() {
        var e;
        const {
            data: {
                user: r
            },
            error: n
        } = await this.getUser();
        if (n) return {
            data: null,
            error: n
        };
        const s = {
            all: [],
            phone: [],
            totp: [],
            webauthn: []
        };
        for (const a of (e = r == null ? void 0 : r.factors) !== null && e !== void 0 ? e : []) s.all.push(a), a.status === "verified" && s[a.factor_type].push(a);
        return {
            data: s,
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel(e) {
        var r, n, s, a;
        if (e) try {
            const {
                payload: h
            } = In(e);
            let b = null;
            h.aal && (b = h.aal);
            let m = b;
            const {
                data: {
                    user: y
                },
                error: k
            } = await this.getUser(e);
            if (k) return this._returnResult({
                data: null,
                error: k
            });
            ((n = (r = y == null ? void 0 : y.factors) === null || r === void 0 ? void 0 : r.filter(P => P.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (m = "aal2");
            const w = h.amr || [];
            return {
                data: {
                    currentLevel: b,
                    nextLevel: m,
                    currentAuthenticationMethods: w
                },
                error: null
            }
        } catch (h) {
            if (O(h)) return this._returnResult({
                data: null,
                error: h
            });
            throw h
        }
        const {
            data: {
                session: i
            },
            error: o
        } = await this.getSession();
        if (o) return this._returnResult({
            data: null,
            error: o
        });
        if (!i) return {
            data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: []
            },
            error: null
        };
        const {
            payload: l
        } = In(i.access_token);
        let c = null;
        l.aal && (c = l.aal);
        let u = c;
        ((a = (s = i.user.factors) === null || s === void 0 ? void 0 : s.filter(h => h.status === "verified")) !== null && a !== void 0 ? a : []).length > 0 && (u = "aal2");
        const f = l.amr || [];
        return {
            data: {
                currentLevel: c,
                nextLevel: u,
                currentAuthenticationMethods: f
            },
            error: null
        }
    }
    async _getAuthorizationDetails(e) {
        try {
            return await this._useSession(async r => {
                const {
                    data: {
                        session: n
                    },
                    error: s
                } = r;
                return s ? this._returnResult({
                    data: null,
                    error: s
                }) : n ? await N(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    xform: a => ({
                        data: a,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new $e
                })
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: null,
                error: r
            });
            throw r
        }
    }
    async _approveAuthorization(e, r) {
        try {
            return await this._useSession(async n => {
                const {
                    data: {
                        session: s
                    },
                    error: a
                } = n;
                if (a) return this._returnResult({
                    data: null,
                    error: a
                });
                if (!s) return this._returnResult({
                    data: null,
                    error: new $e
                });
                const i = await N(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
                    headers: this.headers,
                    jwt: s.access_token,
                    body: {
                        action: "approve"
                    },
                    xform: o => ({
                        data: o,
                        error: null
                    })
                });
                return i.data && i.data.redirect_url && ye() && !(r != null && r.skipBrowserRedirect) && window.location.assign(i.data.redirect_url), i
            })
        } catch (n) {
            if (O(n)) return this._returnResult({
                data: null,
                error: n
            });
            throw n
        }
    }
    async _denyAuthorization(e, r) {
        try {
            return await this._useSession(async n => {
                const {
                    data: {
                        session: s
                    },
                    error: a
                } = n;
                if (a) return this._returnResult({
                    data: null,
                    error: a
                });
                if (!s) return this._returnResult({
                    data: null,
                    error: new $e
                });
                const i = await N(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
                    headers: this.headers,
                    jwt: s.access_token,
                    body: {
                        action: "deny"
                    },
                    xform: o => ({
                        data: o,
                        error: null
                    })
                });
                return i.data && i.data.redirect_url && ye() && !(r != null && r.skipBrowserRedirect) && window.location.assign(i.data.redirect_url), i
            })
        } catch (n) {
            if (O(n)) return this._returnResult({
                data: null,
                error: n
            });
            throw n
        }
    }
    async _listOAuthGrants() {
        try {
            return await this._useSession(async e => {
                const {
                    data: {
                        session: r
                    },
                    error: n
                } = e;
                return n ? this._returnResult({
                    data: null,
                    error: n
                }) : r ? await N(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: r.access_token,
                    xform: s => ({
                        data: s,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new $e
                })
            })
        } catch (e) {
            if (O(e)) return this._returnResult({
                data: null,
                error: e
            });
            throw e
        }
    }
    async _revokeOAuthGrant(e) {
        try {
            return await this._useSession(async r => {
                const {
                    data: {
                        session: n
                    },
                    error: s
                } = r;
                return s ? this._returnResult({
                    data: null,
                    error: s
                }) : n ? (await N(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    query: {
                        client_id: e.clientId
                    },
                    noResolveJson: !0
                }), {
                    data: {},
                    error: null
                }) : this._returnResult({
                    data: null,
                    error: new $e
                })
            })
        } catch (r) {
            if (O(r)) return this._returnResult({
                data: null,
                error: r
            });
            throw r
        }
    }
    async fetchJwk(e, r = {
        keys: []
    }) {
        let n = r.keys.find(o => o.kid === e);
        if (n) return n;
        const s = Date.now();
        if (n = this.jwks.keys.find(o => o.kid === e), n && this.jwks_cached_at + tp > s) return n;
        const {
            data: a,
            error: i
        } = await N(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (i) throw i;
        return !a.keys || a.keys.length === 0 || (this.jwks = a, this.jwks_cached_at = s, n = a.keys.find(o => o.kid === e), !n) ? null : n
    }
    async getClaims(e, r = {}) {
        try {
            let n = e;
            if (!n) {
                const {
                    data: h,
                    error: b
                } = await this.getSession();
                if (b || !h.session) return this._returnResult({
                    data: null,
                    error: b
                });
                n = h.session.access_token
            }
            const {
                header: s,
                payload: a,
                signature: i,
                raw: {
                    header: o,
                    payload: l
                }
            } = In(n);
            r != null && r.allowExpired || kp(a.exp);
            const c = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(s.kid, r != null && r.keys ? {
                keys: r.keys
            } : r == null ? void 0 : r.jwks);
            if (!c) {
                const {
                    error: h
                } = await this.getUser(n);
                if (h) throw h;
                return {
                    data: {
                        claims: a,
                        header: s,
                        signature: i
                    },
                    error: null
                }
            }
            const u = Sp(s.alg),
                d = await crypto.subtle.importKey("jwk", c, u, !0, ["verify"]);
            if (!await crypto.subtle.verify(u, d, i, up(`${o}.${l}`))) throw new Ms("Invalid JWT signature");
            return {
                data: {
                    claims: a,
                    header: s,
                    signature: i
                },
                error: null
            }
        } catch (n) {
            if (O(n)) return this._returnResult({
                data: null,
                error: n
            });
            throw n
        }
    }
}
hn.nextInstanceID = {};
const tm = hn,
    rm = "2.103.0";
let Yr = "";
typeof Deno < "u" ? Yr = "deno" : typeof document < "u" ? Yr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Yr = "react-native" : Yr = "node";
const nm = {
        "X-Client-Info": `supabase-js-${Yr}/${rm}`
    },
    sm = {
        headers: nm
    },
    am = {
        schema: "public"
    },
    im = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
    },
    om = {};

function fn(t) {
    "@babel/helpers - typeof";
    return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, fn(t)
}

function lm(t, e) {
    if (fn(t) != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(t, e || "default");
        if (fn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}

function cm(t) {
    var e = lm(t, "string");
    return fn(e) == "symbol" ? e : e + ""
}

function um(t, e, r) {
    return (e = cm(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function ti(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(s) {
            return Object.getOwnPropertyDescriptor(t, s).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function oe(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? ti(Object(r), !0).forEach(function(n) {
            um(t, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ti(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return t
}
const dm = t => t ? (...e) => t(...e) : (...e) => fetch(...e),
    hm = () => Headers,
    fm = (t, e, r) => {
        const n = dm(r),
            s = hm();
        return async (a, i) => {
            var o;
            const l = (o = await e()) !== null && o !== void 0 ? o : t;
            let c = new s(i == null ? void 0 : i.headers);
            return c.has("apikey") || c.set("apikey", t), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), n(a, oe(oe({}, i), {}, {
                headers: c
            }))
        }
    };

function pm(t) {
    return t.endsWith("/") ? t : t + "/"
}

function mm(t, e) {
    var r, n;
    const {
        db: s,
        auth: a,
        realtime: i,
        global: o
    } = t, {
        db: l,
        auth: c,
        realtime: u,
        global: d
    } = e, f = {
        db: oe(oe({}, l), s),
        auth: oe(oe({}, c), a),
        realtime: oe(oe({}, u), i),
        storage: {},
        global: oe(oe(oe({}, d), o), {}, {
            headers: oe(oe({}, (r = d == null ? void 0 : d.headers) !== null && r !== void 0 ? r : {}), (n = o == null ? void 0 : o.headers) !== null && n !== void 0 ? n : {})
        }),
        accessToken: async () => ""
    };
    return t.accessToken ? f.accessToken = t.accessToken : delete f.accessToken, f
}

function gm(t) {
    const e = t == null ? void 0 : t.trim();
    if (!e) throw new Error("supabaseUrl is required.");
    if (!e.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(pm(e))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
var ym = class extends tm {
        constructor(t) {
            super(t)
        }
    },
    vm = class {
        constructor(t, e, r) {
            var n, s;
            this.supabaseUrl = t, this.supabaseKey = e;
            const a = gm(t);
            if (!e) throw new Error("supabaseKey is required.");
            this.realtimeUrl = new URL("realtime/v1", a), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", a), this.storageUrl = new URL("storage/v1", a), this.functionsUrl = new URL("functions/v1", a);
            const i = `sb-${a.hostname.split(".")[0]}-auth-token`,
                o = {
                    db: am,
                    realtime: om,
                    auth: oe(oe({}, im), {}, {
                        storageKey: i
                    }),
                    global: sm
                },
                l = mm(r ? ? {}, o);
            if (this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (s = l.global.headers) !== null && s !== void 0 ? s : {}, l.accessToken) this.accessToken = l.accessToken, this.auth = new Proxy({}, {
                get: (u, d) => {
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`)
                }
            });
            else {
                var c;
                this.auth = this._initSupabaseAuthClient((c = l.auth) !== null && c !== void 0 ? c : {}, this.headers, l.global.fetch)
            }
            this.fetch = fm(e, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(oe({
                headers: this.headers,
                accessToken: this._getAccessToken.bind(this)
            }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then(u => this.realtime.setAuth(u)).catch(u => console.warn("Failed to set initial Realtime auth token:", u)), this.rest = new Mh(new URL("rest/v1", a).href, {
                headers: this.headers,
                schema: l.db.schema,
                fetch: this.fetch,
                timeout: l.db.timeout,
                urlLengthLimit: l.db.urlLengthLimit
            }), this.storage = new Yf(this.storageUrl.href, this.headers, this.fetch, r == null ? void 0 : r.storage), l.accessToken || this._listenForAuthEvents()
        }
        get functions() {
            return new Ah(this.functionsUrl.href, {
                headers: this.headers,
                customFetch: this.fetch
            })
        }
        from(t) {
            return this.rest.from(t)
        }
        schema(t) {
            return this.rest.schema(t)
        }
        rpc(t, e = {}, r = {
            head: !1,
            get: !1,
            count: void 0
        }) {
            return this.rest.rpc(t, e, r)
        }
        channel(t, e = {
            config: {}
        }) {
            return this.realtime.channel(t, e)
        }
        getChannels() {
            return this.realtime.getChannels()
        }
        removeChannel(t) {
            return this.realtime.removeChannel(t)
        }
        removeAllChannels() {
            return this.realtime.removeAllChannels()
        }
        async _getAccessToken() {
            var t = this,
                e, r;
            if (t.accessToken) return await t.accessToken();
            const {
                data: n
            } = await t.auth.getSession();
            return (e = (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !== null && e !== void 0 ? e : t.supabaseKey
        }
        _initSupabaseAuthClient({
            autoRefreshToken: t,
            persistSession: e,
            detectSessionInUrl: r,
            storage: n,
            userStorage: s,
            storageKey: a,
            flowType: i,
            lock: o,
            debug: l,
            throwOnError: c
        }, u, d) {
            const f = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`
            };
            return new ym({
                url: this.authUrl.href,
                headers: oe(oe({}, f), u),
                storageKey: a,
                autoRefreshToken: t,
                persistSession: e,
                detectSessionInUrl: r,
                storage: n,
                userStorage: s,
                flowType: i,
                lock: o,
                debug: l,
                throwOnError: c,
                fetch: d,
                hasCustomAuthorizationHeader: Object.keys(this.headers).some(h => h.toLowerCase() === "authorization")
            })
        }
        _initRealtimeClient(t) {
            return new bf(this.realtimeUrl.href, oe(oe({}, t), {}, {
                params: oe(oe({}, {
                    apikey: this.supabaseKey
                }), t == null ? void 0 : t.params)
            }))
        }
        _listenForAuthEvents() {
            return this.auth.onAuthStateChange((t, e) => {
                this._handleTokenChanged(t, "CLIENT", e == null ? void 0 : e.access_token)
            })
        }
        _handleTokenChanged(t, e, r) {
            (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r, this.realtime.setAuth(r)) : t === "SIGNED_OUT" && (this.realtime.setAuth(), e == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0)
        }
    };
const bm = (t, e, r) => new vm(t, e, r);

function wm() {
    if (typeof window < "u") return !1;
    const t = globalThis.process;
    if (!t) return !1;
    const e = t.version;
    if (e == null) return !1;
    const r = e.match(/^v(\d+)\./);
    return r ? parseInt(r[1], 10) <= 18 : !1
}
wm() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const _m = "https://plkxsccmiftzqghukdvv.supabase.co/",
    xm = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa3hzY2NtaWZ0enFnaHVrZHZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwMzk4OCwiZXhwIjoyMDkxMzc5OTg4fQ.qJJTGuQaR5fALXtPhCMw76l8x-TRW5csrUZwzwHbBC4",
    ke = bm(_m, xm, {
        auth: {
            storage: localStorage,
            persistSession: !0,
            autoRefreshToken: !0
        }
    });
let vs = null;

function ri() {
    return vs || (vs = `${Date.now()}-${Math.random().toString(36).slice(2,10)}`), vs
}
const ni = new Set;

function Ln(t, e, r, n) {
    const s = `${ri()}-${t}`;
    ni.has(s) || (ni.add(s), ke.from("quiz_step_views").insert({
        session_id: ri(),
        step_name: t,
        step_number: e,
        vendor: r,
        landing_page: window.location.pathname
    }).then(({
        error: a
    }) => {
        a && console.error("Quiz step tracking error:", a)
    }))
}

function si(t) {
    const e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "=([^;]*)"));
    return e ? decodeURIComponent(e[1]) : ""
}

function bs(t) {
    return new URLSearchParams(window.location.search).get(t) || ""
}

function ai() {
    return {
        fbp: si("_fbp"),
        fbc: si("_fbc") || bs("fbclid"),
        gclid: bs("gclid"),
        ttclid: bs("ttclid"),
        page_url: window.location.href,
        event_id: crypto.randomUUID()
    }
}
const km = [{
        label: "Minor Injuries",
        value: "minor",
        sublabel: "bruises, mild whiplash, muscle strain, mild headaches, soreness, small cuts or scrapes"
    }, {
        label: "Significant Injuries",
        value: "significant",
        sublabel: "broken bone, dislocated joint, torn ligament, herniated disc, deep cut with stitches"
    }, {
        label: "Severe Injuries",
        value: "severe",
        sublabel: "traumatic brain injury, spinal cord damage, internal bleeding, multiple fractures, loss of limb"
    }, {
        label: "No Injuries",
        value: "none"
    }],
    Sm = {
        minor: {
            title: "You're likely owed more than you think!",
            message: "Even small injuries can lead to unexpected costs — from doctor visits and missed work, to ongoing pain that insurance may undervalue."
        },
        significant: {
            title: "You're on track for a strong claim!",
            message: "Injuries that disrupt daily life or require medical care often qualify for larger payouts. Insurance companies don't always offer what's fair."
        },
        severe: {
            title: "You may qualify for a max payout!",
            message: "Serious injuries can change everything — and we're truly sorry you're dealing with this. Your compensation could be significantly higher."
        }
    },
    ii = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
    Em = {
        welcome: 0,
        state: 1,
        injury_severity: 2,
        injury_encouragement: 3,
        name: 4,
        at_fault: 5,
        incident_date: 6,
        medical_received: 7,
        represented: 8,
        prequalify: 9,
        email: 10,
        phone: 10,
        phone_otp: 10
    },
    Tm = 11,
    Cm = {
        welcome: 0,
        state: 1,
        injury_severity: 2,
        injury_encouragement: 3,
        name: 4,
        at_fault: 5,
        police_at_scene: 6,
        anyone_insured: 7,
        incident_date: 8,
        medical_received: 9,
        represented: 10,
        received_payment: 11,
        case_description: 12,
        prequalify: 13,
        email: 14,
        phone: 14,
        phone_otp: 14
    },
    Am = 15,
    Pm = {
        welcome: 0,
        state: 1,
        injury_severity: 2,
        injury_encouragement: 3,
        name: 4,
        at_fault: 5,
        incident_date: 6,
        medical_received: 7,
        represented: 8,
        case_description: 9,
        prequalify: 10,
        email: 11,
        phone: 11,
        phone_otp: 11
    },
    Rm = 12,
    Jt = ["MELawyers", "MiracleLaw", "DKLaw"],
    Om = ["at_fault_dq", "represented_dq", "incident_date_dq", "no_injury_dq"],
    jm = ["submitted"];

function Gr(t, e = !1, r = "GetMVA") {
    return e ? Cm[t] ? ? 0 : Jt.includes(r) ? Pm[t] ? ? 0 : Em[t] ? ? 0
}

function oi(t, e) {
    return t ? Am : Jt.includes(e) ? Rm : Tm
}

function zt(t, e) {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
        event: t,
        ...e
    })
}

function Nm({
    vendor: t = "GetMVA",
    longform: e = !1
}) {
    var Ae;
    const r = Jl(),
        n = Fs(),
        s = (Ae = n.state) == null ? void 0 : Ae.quizRedirect,
        [a, i] = g.useState((s == null ? void 0 : s.step) || "welcome"),
        [o, l] = g.useState((s == null ? void 0 : s.data) || {
            incident_date: "",
            injury: "",
            at_fault: "",
            injury_type: "",
            doctor_treatment: "",
            serious_injury: "",
            have_insurance: "",
            represented: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            zip: "",
            case_description: "",
            accident_type: "",
            accident_date: "",
            police_at_scene: "",
            anyone_insured: "",
            received_payment: ""
        }),
        [c, u] = g.useState((s == null ? void 0 : s.selectedState) || (Jt.includes(t) ? "California" : "")),
        [d, f] = g.useState((s == null ? void 0 : s.injurySeverity) || ""),
        [h, b] = g.useState((s == null ? void 0 : s.medicalInterest) || ""),
        [m, y] = g.useState(s != null && s.selectedDate ? new Date(s.selectedDate) : void 0),
        [k, E] = g.useState((s == null ? void 0 : s.selectedDaysAgo) || 0),
        [w, P] = g.useState("options"),
        [U, L] = g.useState(null),
        [H, me] = g.useState(null),
        [F, fe] = g.useState(""),
        [X, j] = g.useState({}),
        [Me, ce] = g.useState(!1),
        [et, xe] = g.useState(!1),
        [ve, Ue] = g.useState(""),
        [D, ae] = g.useState(!1),
        [be, K] = g.useState(!1),
        Y = g.useRef("Skipped"),
        z = g.useRef(null),
        pe = g.useRef(""),
        He = g.useRef(!1),
        G = g.useRef(null),
        [ut, $t] = g.useState(""),
        [Lr, Dt] = g.useState(""),
        [Mt, yn] = g.useState(""),
        vn = g.useRef(Date.now()),
        $r = g.useRef(Date.now()),
        Ut = g.useRef(""),
        Te = g.useRef(null),
        _t = g.useRef(!1),
        bn = g.useRef([]),
        Dr = g.useRef(new Set),
        dt = g.useRef({}),
        Bt = g.useCallback(x => {
            x.preventDefault();
            const v = x.target.name || x.target.placeholder || "unknown";
            bn.current.push(v)
        }, []),
        je = g.useCallback((x, v) => {
            v.target;
            const _ = v.nativeEvent;
            _.inputType === "insertReplacementText" || !_.inputType ? (Dr.current.add(x), dt.current[x] = "autofill") : dt.current[x] || (dt.current[x] = "typed")
        }, []),
        Mr = g.useCallback(() => {
            const x = [],
                v = ai(),
                _ = Array.from(Dr.current),
                T = bn.current,
                C = Te.current;
            if (C) {
                const B = [];
                if (C.ipqs_carrier && B.push(`Phone: ${C.ipqs_carrier}`), C.ipqs_fraud_score != null && B.push(`IPQS Risk: ${C.ipqs_fraud_score}`), C.ipqs_name_match) {
                    const te = {
                        full_match: "Name Match: Yes (first & last)",
                        first_name_match: "Name Match: First name only",
                        last_name_match: "Name Match: Last name only",
                        no_match: "Name Match: No",
                        unavailable: "Name Match: Unavailable"
                    };
                    B.push(te[C.ipqs_name_match] || `Name Match: ${C.ipqs_name_match}`)
                }
                C.ipqs_risky && B.push("IPQS Risky: Yes"), C.ipqs_recent_abuse && B.push("IPQS Recent Abuse: Yes"), C.ipqs_active === !1 && B.push("IPQS Active: No"), B.length > 0 && x.push(B.join(" | "))
            }
            const R = !!(v.fbc || v.gclid || v.ttclid),
                M = v.fbc ? "Meta fbc" : v.gclid ? "Google gclid" : v.ttclid ? "TikTok ttclid" : null;
            if (_.length > 0) {
                const B = _.join(", ");
                R ? x.push(`Contact info may appear pasted but user was unique — identified by ${M} (${v.fbc||v.gclid||v.ttclid}) and used browser autofill for: ${B}`) : x.push(`User used browser autofill for: ${B}. No unique ad click ID detected — user may be organic or direct traffic.`)
            } else R ? x.push(`User manually typed all fields. Identified by unique ${M} (${v.fbc||v.gclid||v.ttclid}).`) : x.push("User manually typed all fields. No unique ad click ID detected.");
            return T.length > 0 && x.push(`Paste was blocked ${T.length} time(s) on: ${T.join(", ")}.`), x.join(" | ")
        }, []);
    g.useEffect(() => {
        var _;
        if (!s) return;
        Ut.current = "", document.querySelectorAll('script[src*="trustedform.com"]').forEach(T => T.remove()), document.querySelectorAll('input[name="xxTrustedFormCertUrl"]').forEach(T => T.remove()), window.history.replaceState({}, "", window.location.pathname + window.location.search);
        const x = document.createElement("script");
        x.type = "text/javascript", x.async = !0, x.src = "https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&l=" + Date.now() + Math.random();
        const v = document.getElementsByTagName("script")[0];
        (_ = v == null ? void 0 : v.parentNode) == null || _.insertBefore(x, v)
    }, []), g.useEffect(() => {
        a !== "welcome" && [wa, _a, xa].forEach(x => {
            const v = new Image;
            v.src = x
        })
    }, [a !== "welcome"]), g.useEffect(() => {
        let x = !1,
            v = null,
            _ = null;
        const T = R => {
                if (!x) {
                    x = !0, Ut.current = R, console.log("TrustedForm cert URL captured:", R);
                    try {
                        const M = new URL(window.location.href);
                        M.searchParams.get("xxTrustedFormCertUrl") !== R && (M.searchParams.set("xxTrustedFormCertUrl", R), window.history.replaceState({}, "", `${M.pathname}?${M.searchParams.toString()}`))
                    } catch {}
                    v && (v.disconnect(), v = null), _ && (clearInterval(_), _ = null)
                }
            },
            C = () => {
                var B, te, qe;
                if (x) return !0;
                const R = (te = (B = window.trustedForm) == null ? void 0 : B.certUrl) == null ? void 0 : te.trim();
                if (R && R.startsWith("http")) return T(R), !0;
                const M = ['input[name="xxTrustedFormCertUrl"]', 'input[id="xxTrustedFormCertUrl_0"]', '[id^="xxTrustedFormCertUrl"]'];
                for (const Fe of M) {
                    const Ve = document.querySelectorAll(Fe);
                    for (const xt of Ve) {
                        const Fr = (qe = xt.value) == null ? void 0 : qe.trim();
                        if (Fr && Fr.startsWith("http")) return T(Fr), !0
                    }
                }
                return !1
            };
        if (!C()) return v = new MutationObserver(() => {
            C()
        }), v.observe(document.body, {
            childList: !0,
            subtree: !0
        }), _ = setInterval(C, 1e3), () => {
            v && v.disconnect(), _ && clearInterval(_)
        }
    }, []), g.useEffect(() => {
        a === "incident_date" && P("options")
    }, [a]), g.useEffect(() => {
        const x = Date.now(),
            v = Math.round((x - vn.current) / 1e3);
        vn.current = x;
        const _ = Gr(a, e, t),
            T = oi(e, t),
            C = Math.round(_ / T * 100);
        zt("quiz_step_view", {
            quiz_step: a,
            quiz_step_number: _,
            quiz_completion_pct: C,
            time_on_previous_step_sec: v,
            time_on_page_sec: Math.round((x - $r.current) / 1e3)
        }), Ln(a, _, t), Om.includes(a) && zt("quiz_disqualified", {
            quiz_dq_step: a,
            quiz_dq_reason: a.replace("_dq", ""),
            quiz_step_number: _
        }), jm.includes(a) && zt("quiz_qualified", {
            quiz_step_number: _,
            total_time_sec: Math.round((x - $r.current) / 1e3)
        })
    }, [a]);
    const wn = x => {
            if (!x) return;
            $t(x);
            const v = new URLSearchParams(window.location.search);
            v.has("ip_address") || (v.set("ip_address", x), window.history.replaceState({}, "", window.location.pathname + "?" + v.toString()))
        },
        Ce = (x, v) => {
            x && ii.includes(x) && (Dt(x), u(T => T || x), console.log("Geo-detected state:", x));
            const _ = (v || "").replace(/\D/g, "").slice(0, 5);
            /^\d{5}$/.test(_) && (yn(_), l(T => ({ ...T,
                zip: _
            })), console.log("Geo-detected zip:", _))
        },
        ht = g.useRef(() => {
            const x = new URLSearchParams(window.location.search);
            return {
                utm_source: x.get("utm_source") || "",
                utm_medium: x.get("utm_medium") || "",
                utm_campaign: x.get("utm_campaign") || "",
                utm_term: x.get("utm_term") || "",
                utm_keyword: x.get("utm_keyword") || x.get("utm_content") || ""
            }
        });
    g.useEffect(() => {
        const x = ht.current(),
            v = _ => {
                ke.from("page_views").insert({
                    landing_page: window.location.pathname,
                    vendor: t,
                    ip_address: _,
                    user_agent: navigator.userAgent,
                    ...x
                }).then(({
                    error: T
                }) => {
                    T && console.error("Page view tracking error:", T)
                })
            };
        fetch("https://ipapi.co/json/", {
            signal: AbortSignal.timeout(4e3)
        }).then(_ => _.json()).then(_ => {
            wn(_.ip || ""), Ce(_.region || "", _.postal || ""), v(_.ip || "")
        }).catch(_ => {
            console.error("Error fetching IP geolocation:", _), fetch("https://api.ipify.org?format=json").then(T => T.json()).then(T => {
                wn(T.ip), v(T.ip || "")
            }).catch(() => v(""))
        })
    }, []);
    const _n = g.useRef(Promise.resolve()),
        ss = () => i("state"),
        qt = () => setTimeout(() => i("prequalify"), 300),
        as = x => x === "none" ? {
            injury: "No",
            serious_injury: "No",
            injury_type: "No Injury"
        } : {
            injury: "Yes",
            serious_injury: x === "significant" || x === "severe" ? "Yes" : "No",
            injury_type: ""
        },
        Ft = (x, v) => {
            if (x === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email";
            if (x === "phone" && !/^\d{10}$/.test(v.replace(/\D/g, ""))) return "Please enter a valid 10-digit phone number";
            if (x === "zip" && !/^\d{5}$/.test(v)) return "Please enter a valid 5-digit zip code";
            if (x === "first_name") {
                if (v.trim().length < 2) return "Please enter your first name (at least 2 characters)";
                if (/^(.)\1+$/.test(v.trim()) || !/[aeiouAEIOU]/.test(v.trim())) return "Please enter a valid first name"
            }
            if (x === "last_name") {
                if (v.trim().length < 2) return "Please enter your last name (at least 2 characters)";
                if (/^(.)\1+$/.test(v.trim()) || !/[aeiouAEIOU]/.test(v.trim())) return "Please enter a valid last name"
            }
            return ""
        },
        Z = (x, v) => {
            l(_ => ({ ..._,
                [x]: v
            })), j(_ => ({ ..._,
                [x]: "",
                form: ""
            }))
        },
        ze = g.useCallback(() => {
            let x = document.querySelector('input[name="xxTrustedFormCertUrl"]');
            if (!x) {
                const v = document.getElementById("trustedform-form") || document.body;
                x = document.createElement("input"), x.type = "hidden", x.name = "xxTrustedFormCertUrl", x.id = "xxTrustedFormCertUrl", v.appendChild(x)
            }
            return x
        }, []),
        Ur = g.useCallback(x => {
            if (!x) return "";
            const v = x.trim();
            Ut.current = v;
            const _ = ze();
            _.value = v, _.setAttribute("value", v);
            const T = new URL(window.location.href);
            return T.searchParams.get("xxTrustedFormCertUrl") !== v && (T.searchParams.set("xxTrustedFormCertUrl", v), window.history.replaceState({}, "", `${T.pathname}?${T.searchParams.toString()}`)), v
        }, [ze]),
        ft = g.useCallback(async () => {
            const x = () => {
                var M, B, te;
                const T = ((B = (M = window.trustedForm) == null ? void 0 : M.certUrl) == null ? void 0 : B.trim()) || "",
                    C = ((te = new URLSearchParams(window.location.search).get("xxTrustedFormCertUrl")) == null ? void 0 : te.trim()) || "",
                    R = ['input[name="xxTrustedFormCertUrl"]', "#xxTrustedFormCertUrl", '[id^="xxTrustedFormCertUrl"]'].map(qe => {
                        var Fe, Ve;
                        return ((Ve = (Fe = document.querySelector(qe)) == null ? void 0 : Fe.value) == null ? void 0 : Ve.trim()) || ""
                    }).find(qe => qe.startsWith("http")) || "";
                return Ur(T || Ut.current || R || C)
            };
            ze();
            let v = x();
            if (v) return v;
            await new Promise(T => {
                var M;
                const C = document.createElement("script");
                C.type = "text/javascript", C.async = !0, C.src = (window.location.protocol === "https:" ? "https" : "http") + "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&l=" + Date.now() + Math.random(), C.onload = () => T(), C.onerror = () => T();
                const R = document.getElementsByTagName("script")[0];
                (M = R == null ? void 0 : R.parentNode) == null || M.insertBefore(C, R), setTimeout(T, 2e3)
            });
            const _ = Date.now();
            for (; Date.now() - _ < 8e3;) {
                if (v = x(), v) return v;
                await new Promise(T => setTimeout(T, 250))
            }
            return ""
        }, [ze, Ur]),
        xn = g.useCallback(async () => {
            _n.current && await _n.current;
            const x = await ft(),
                v = ht.current();
            return {
                first_name: o.first_name,
                last_name: o.last_name,
                email: o.email,
                phone: o.phone,
                zip: ba(c, Mt),
                city: md(ba(c, Mt)),
                state: c,
                incident_date: o.incident_date,
                at_fault: o.at_fault,
                injury: o.injury,
                injury_severity: d,
                injury_type: o.injury_type,
                serious_injury: o.serious_injury,
                represented: o.represented,
                medical_treatment: h === "within_30" ? "Yes" : h === "after_30" ? "Late" : "No",
                landing_page: window.location.href,
                user_agent: navigator.userAgent,
                ip_address: ut || new URLSearchParams(window.location.search).get("ip_address") || "",
                trusted_form_cert_url: x,
                xxTrustedFormCertUrl: x,
                Vendor: t === "Demo" ? "GetMVA" : t,
                accident_type: localStorage.getItem("demo_visitor") === "true" ? "Demo" : o.accident_type,
                accident_date: o.accident_date || null,
                otp_verified: Y.current,
                submitted_at: new Date().toISOString(),
                fraud_analytics: Mr(),
                police_at_scene: o.police_at_scene || null,
                anyone_insured: o.anyone_insured === "Not sure" ? "Yes" : o.anyone_insured || null,
                received_payment: o.received_payment === "Not sure" ? "No" : o.received_payment || null,
                case_description: o.case_description || null,
                ...v,
                ...ai()
            }
        }, [o, c, d, ut, ft, Mt, h, t]),
        is = g.useCallback(async () => {
            if (z.current) return z.current;
            xe(!0), j(_ => ({ ..._,
                form: ""
            }));
            const x = await xn();
            pe.current = x.event_id, x.trusted_form_cert_url || console.warn("TrustedForm cert URL missing during save — continuing anyway"), console.log("Saving lead (DB only):", JSON.stringify(x));
            let v = null;
            try {
                const {
                    data: _,
                    error: T
                } = await ke.functions.invoke("submit-lead", {
                    body: { ...x,
                        save_only: !0
                    }
                });
                !T && (_ != null && _.lead_id) && (v = _.lead_id)
            } catch (_) {
                console.error("Save lead failed via invoke:", _)
            }
            if (!v) try {
                const _ = "lifqsdeybntniigvpwvq",
                    T = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa3hzY2NtaWZ0enFnaHVrZHZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwMzk4OCwiZXhwIjoyMDkxMzc5OTg4fQ.qJJTGuQaR5fALXtPhCMw76l8x-TRW5csrUZwzwHbBC4",
                    C = `https://${_}.supabase.co/functions/v1/submit-lead`,
                    R = await fetch(C, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            apikey: T,
                            Authorization: `Bearer ${T}`
                        },
                        body: JSON.stringify({ ...x,
                            save_only: !0
                        })
                    }),
                    M = await R.json();
                R.ok && (M != null && M.lead_id) && (v = M.lead_id)
            } catch (_) {
                console.error("Save lead fallback also failed:", _)
            }
            return v ? (z.current = v, console.log("Lead saved with ID:", v)) : console.error("Failed to save lead to database"), xe(!1), v
        }, [xn]),
        ir = g.useCallback(async (x, v, _, T) => {
            const C = z.current;
            if (C) try {
                const R = {
                    phone: x,
                    phone_line_type: v
                };
                _ && (R.phone_carrier = _), T != null && (R.ipqs_riskscore = T), await ke.functions.invoke("submit-lead", {
                    body: {
                        lead_id: C,
                        update_fields: R
                    }
                }), console.log("Lead updated with phone, line type:", v, "carrier:", _, "risk:", T)
            } catch (R) {
                console.error("Failed to update lead with phone:", R)
            }
        }, []),
        Br = ["landline", "fixedVoip", "nonFixedVoip", "unknown"],
        [qr, pt] = g.useState(!1),
        Ne = g.useCallback(() => {
            var v;
            const x = (v = Te.current) == null ? void 0 : v.ipqs_name_match;
            return x === "full_match" || x === "first_name_match" || x === "last_name_match"
        }, []),
        kn = g.useCallback(x => x === "fixedVoip" || x === "nonFixedVoip" ? "Only real, non-disposable cellular numbers are allowed." : "Only cellular numbers are allowed.", []);
    g.useEffect(() => {
        var v;
        const x = o.phone.replace(/\D/g, "");
        if (x.length !== 10) {
            Te.current = null, pt(!1), ce(!1);
            return
        }((v = Te.current) == null ? void 0 : v.digits) !== x && (_t.current || (_t.current = !0, ce(!0), pt(!1), (async () => {
            try {
                const {
                    data: _,
                    error: T
                } = await ke.functions.invoke("validate-phone", {
                    body: {
                        phone: x,
                        first_name: o.first_name,
                        last_name: o.last_name
                    }
                });
                if (T) Te.current = {
                    digits: x,
                    valid: !1,
                    type: "",
                    error: "Unable to verify phone number."
                };
                else if (!_.valid) Te.current = {
                    digits: x,
                    valid: !1,
                    type: "",
                    error: _.error || "Invalid phone number."
                };
                else {
                    const C = _.type || "unknown";
                    if (Te.current = {
                            digits: x,
                            valid: !0,
                            type: C,
                            ipqs_name_match: _.ipqs_name_match || void 0,
                            ipqs_carrier: _.ipqs_carrier || void 0,
                            ipqs_fraud_score: _.ipqs_fraud_score ? ? null,
                            ipqs_line_type: _.ipqs_line_type || void 0,
                            ipqs_risky: _.ipqs_risky ? ? void 0,
                            ipqs_recent_abuse: _.ipqs_recent_abuse ? ? void 0,
                            ipqs_active: _.ipqs_active ? ? void 0
                        }, await ir(x, C, _.ipqs_carrier || void 0, _.ipqs_fraud_score ? ? null), Br.includes(C)) {
                        const R = _.ipqs_name_match;
                        pt(!(C === "landline" && (R === "full_match" || R === "first_name_match" || R === "last_name_match")))
                    }
                }
            } catch {
                Te.current = {
                    digits: x,
                    valid: !1,
                    type: "",
                    error: "Phone validation failed."
                }
            } finally {
                _t.current = !1, ce(!1)
            }
        })()))
    }, [o.phone, o.first_name, o.last_name, ir]);
    const $ = g.useCallback(async x => {
            if (He.current) return;
            He.current = !0, G.current && (clearTimeout(G.current), G.current = null);
            const v = z.current;
            if (!v) {
                console.error("Cannot post lead — no lead_id saved");
                return
            }
            console.log("Posting lead to webhooks, lead_id:", v, "otp_verified:", x);
            try {
                const {
                    data: B,
                    error: te
                } = await ke.functions.invoke("post-lead", {
                    body: {
                        lead_id: v,
                        otp_verified: x
                    }
                });
                console.log("Post-lead response:", B, "error:", te)
            } catch (B) {
                console.error("Post-lead failed:", B);
                try {
                    const te = "lifqsdeybntniigvpwvq",
                        qe = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa3hzY2NtaWZ0enFnaHVrZHZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwMzk4OCwiZXhwIjoyMDkxMzc5OTg4fQ.qJJTGuQaR5fALXtPhCMw76l8x-TRW5csrUZwzwHbBC4",
                        Fe = `https://${te}.supabase.co/functions/v1/post-lead`;
                    await fetch(Fe, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            apikey: qe,
                            Authorization: `Bearer ${qe}`
                        },
                        body: JSON.stringify({
                            lead_id: v,
                            otp_verified: x
                        })
                    })
                } catch (te) {
                    console.error("Post-lead fallback also failed:", te)
                }
            }
            const _ = k > 0 && k <= 365,
                T = o.at_fault !== "Yes",
                C = d !== "none",
                R = x === "Yes" || x === "Verified Only";
            _ && T && C && R ? (zt("lead_submitted", {
                injury_severity: d,
                state: c,
                total_time_sec: Math.round((Date.now() - $r.current) / 1e3)
            }), typeof window.fbq == "function" && (window.fbq("track", "Lead", {
                content_name: "MVA Lead"
            }, {
                eventID: pe.current
            }), console.log("Meta Lead event fired with eventID:", pe.current)), typeof window.gtag == "function" && (window.gtag("event", "conversion", {
                send_to: "AW-17807925744/IeKUCOrUmoYcEPDDvatC"
            }), console.log("Google Ads backup conversion fired (AW-17807925744)"))) : console.log("Ad-attribution events suppressed — lead failed quality gate:", {
                selectedDaysAgo: k,
                at_fault: o.at_fault,
                injurySeverity: d,
                otpStatus: x,
                accidentUnder12Months: _,
                notAtFault: T,
                hasInjury: C,
                phoneVerified: R
            })
        }, [d, c]),
        J = g.useCallback(() => {
            G.current = setTimeout(() => {
                const v = Ne() ? "Verified Only" : "No";
                console.log(`120s timeout — posting lead with otp_verified=${v}`), $(v), i("submitted")
            }, 12e4);
            const x = () => {
                if (!He.current && z.current) {
                    const _ = "https://lifqsdeybntniigvpwvq.supabase.co/functions/v1/post-lead",
                        T = Ne() ? "Verified Only" : "No",
                        C = JSON.stringify({
                            lead_id: z.current,
                            otp_verified: T
                        }),
                        R = new Blob([C], {
                            type: "application/json"
                        });
                    navigator.sendBeacon(_, R), He.current = !0
                }
            };
            return window.addEventListener("beforeunload", x), () => {
                window.removeEventListener("beforeunload", x), G.current && (clearTimeout(G.current), G.current = null)
            }
        }, [$]),
        ee = () => {
            var x;
            switch (a) {
                case "welcome":
                    return p.jsxs("div", {
                        className: "w-full max-w-xl mx-auto text-center",
                        children: [p.jsx("div", {
                            className: "flex flex-col items-center mb-6",
                            children: p.jsx("img", {
                                src: t === "MiracleLaw" ? yd : gd,
                                alt: "File My Claim",
                                className: "w-28 h-28 object-contain"
                            })
                        }), p.jsx("h1", {
                            className: "text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3",
                            children: "What's Your Accident Worth?"
                        }), p.jsx("p", {
                            className: "text-muted-foreground mb-4 text-base",
                            children: "We help you find out if your vehicle accident qualifies for major compensation, 100% free."
                        }), p.jsxs("div", {
                            className: "flex items-center justify-center gap-6 mb-6 text-xs text-muted-foreground",
                            children: [p.jsxs("span", {
                                className: "flex items-center gap-1.5",
                                children: [p.jsx(lu, {
                                    size: 14,
                                    className: "text-primary"
                                }), " 100% Free"]
                            }), p.jsxs("span", {
                                className: "flex items-center gap-1.5",
                                children: [p.jsx(ou, {
                                    size: 14,
                                    className: "text-primary"
                                }), " Confidential"]
                            }), p.jsxs("span", {
                                className: "flex items-center gap-1.5",
                                children: [p.jsx(iu, {
                                    size: 14,
                                    className: "text-primary"
                                }), " No Obligation"]
                            })]
                        }), p.jsx(ue, {
                            stepKey: "welcome",
                            title: "What type of accident were you in?",
                            children: [{
                                label: "Car Accident",
                                icon: au
                            }, {
                                label: "18 Wheeler or other Commercial Vehicle Accident",
                                icon: uu
                            }, {
                                label: "Uber or Lyft Accident",
                                icon: cu
                            }, {
                                label: "Motorcycle Accident",
                                icon: su
                            }].map(({
                                label: v,
                                icon: _
                            }) => p.jsx(se, {
                                label: v,
                                icon: p.jsx(_, {
                                    size: 22,
                                    className: "flex-shrink-0"
                                }),
                                active: o.accident_type === v,
                                onClick: () => {
                                    Z("accident_type", v), setTimeout(() => ss(), 300)
                                }
                            }, v))
                        })]
                    });
                case "state":
                    {
                        const v = async _ => {
                            if (_) {
                                if (Jt.includes(t) && _ !== "California") {
                                    setTimeout(() => {
                                        r(`/${n.search}`, {
                                            state: {
                                                quizRedirect: {
                                                    step: "injury_severity",
                                                    data: o,
                                                    selectedState: _,
                                                    injurySeverity: d,
                                                    medicalInterest: h,
                                                    selectedDate: m == null ? void 0 : m.toISOString(),
                                                    selectedDaysAgo: k
                                                }
                                            }
                                        })
                                    }, 300);
                                    return
                                }
                                if ((t === "GetMVA" || t === "LongForm") && _ === "California") try {
                                    const {
                                        data: T
                                    } = await ke.from("ca_redirect_settings").select("*").eq("enabled", !0).order("priority");
                                    if (T && T.length > 0) {
                                        let C = T[0];
                                        if (T.length > 1) {
                                            const M = ut || new URLSearchParams(window.location.search).get("ip_address") || "unknown",
                                                B = new TextEncoder,
                                                te = await crypto.subtle.digest("SHA-256", B.encode(M)),
                                                Fe = Array.from(new Uint8Array(te)).map(xt => xt.toString(16).padStart(2, "0")).join(""),
                                                {
                                                    data: Ve
                                                } = await ke.from("ca_redirect_log").select("firm_key").eq("ip_hash", Fe).limit(1);
                                            if (Ve && Ve.length > 0) {
                                                const xt = T.find(Fr => Fr.firm_key === Ve[0].firm_key);
                                                xt && (C = xt)
                                            } else {
                                                const xt = parseInt(Fe.slice(0, 8), 16);
                                                C = T[xt % T.length], await ke.from("ca_redirect_log").insert({
                                                    ip_hash: Fe,
                                                    firm_key: C.firm_key
                                                })
                                            }
                                        }
                                        const R = {
                                            "me-lawyers": "MELawyers",
                                            "miracle-law": "MiracleLaw",
                                            "dk-law": "DKLaw"
                                        };
                                        setTimeout(() => {
                                            r(`${C.route_path}${n.search}`, {
                                                state: {
                                                    quizRedirect: {
                                                        step: "injury_severity",
                                                        data: o,
                                                        selectedState: _,
                                                        injurySeverity: d,
                                                        medicalInterest: h,
                                                        selectedDate: m == null ? void 0 : m.toISOString(),
                                                        selectedDaysAgo: k,
                                                        fromRoot: !0,
                                                        targetVendor: R[C.firm_key] || "GetMVA"
                                                    }
                                                }
                                            })
                                        }, 300);
                                        return
                                    }
                                } catch (T) {
                                    console.error("CA redirect check failed:", T)
                                }
                                setTimeout(() => i("injury_severity"), 300)
                            }
                        };
                        return p.jsxs(ue, {
                            stepKey: "state",
                            title: "Where was the accident?",
                            description: "Select the state where the accident physically occurred",
                            children: [p.jsxs("select", {
                                value: c,
                                onChange: _ => {
                                    const T = _.target.value;
                                    u(T), j({}), T && v(T)
                                },
                                className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors",
                                children: [p.jsx("option", {
                                    value: "",
                                    children: "Select state..."
                                }), ii.map(_ => p.jsx("option", {
                                    value: _,
                                    children: _
                                }, _))]
                            }), X.state && p.jsx("p", {
                                className: "text-destructive text-sm",
                                children: X.state
                            }), p.jsx(de, {
                                onBack: () => i("welcome"),
                                onNext: () => {
                                    if (!c) {
                                        j({
                                            state: "Please select a state"
                                        });
                                        return
                                    }
                                    v(c)
                                }
                            })]
                        })
                    }
                case "injury_severity":
                    {
                        const v = {
                            none: {
                                border: "border-foreground/40",
                                text: "text-foreground",
                                bg: "bg-transparent"
                            },
                            minor: {
                                border: "border-blue-500",
                                text: "text-blue-600",
                                bg: "bg-blue-50 dark:bg-blue-950/20"
                            },
                            significant: {
                                border: "border-orange-500",
                                text: "text-orange-600",
                                bg: "bg-orange-50 dark:bg-orange-950/20"
                            },
                            severe: {
                                border: "border-red-500",
                                text: "text-red-600",
                                bg: "bg-red-50 dark:bg-red-950/20"
                            }
                        };
                        return p.jsxs(ue, {
                            stepKey: "injury_severity",
                            title: "How badly were you hurt?",
                            description: "Pick the highest option that fits your situation",
                            children: [km.map(_ => {
                                const T = v[_.value],
                                    C = d === _.value;
                                return p.jsxs("button", {
                                    onClick: () => {
                                        f(_.value);
                                        const R = as(_.value);
                                        l(M => ({ ...M,
                                            ...R
                                        })), _.value === "none" ? (Ln("no_injury_dq", Gr("injury_severity", e, t), t), zt("quiz_disqualified", {
                                            quiz_dq_step: "no_injury_dq",
                                            quiz_dq_reason: "no_injury"
                                        }), setTimeout(() => i("name"), 300)) : setTimeout(() => i("injury_encouragement"), 300)
                                    },
                                    className: `w-full text-center p-4 rounded-lg border-2 transition-all duration-300 active:scale-[0.98] ${T.border} ${C?T.bg:"bg-card hover:opacity-80"}`,
                                    children: [p.jsx("span", {
                                        className: `font-bold text-lg ${_.value==="none"?"text-foreground":T.text}`,
                                        children: _.label
                                    }), _.sublabel && p.jsx("p", {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: _.sublabel
                                    })]
                                }, _.value)
                            }), p.jsx(de, {
                                onBack: () => i("state")
                            })]
                        })
                    }
                case "injury_encouragement":
                    {
                        const v = Sm[d];
                        if (!v) return i("name"), null;
                        const T = {
                            minor: {
                                img: wa,
                                titleColor: "text-blue-500"
                            },
                            significant: {
                                img: _a,
                                titleColor: "text-orange-500"
                            },
                            severe: {
                                img: xa,
                                titleColor: "text-red-500"
                            }
                        }[d];
                        return p.jsxs("div", {
                            className: "w-full max-w-xl mx-auto text-center",
                            children: [T && p.jsx("div", {
                                className: "flex justify-center mb-6",
                                children: p.jsx("img", {
                                    src: T.img,
                                    alt: "Injury bear",
                                    className: "w-32 h-32 rounded-xl object-cover",
                                    loading: "eager",
                                    fetchPriority: "high"
                                })
                            }), p.jsx("h2", {
                                className: `text-2xl md:text-3xl font-bold mb-4 ${(T==null?void 0:T.titleColor)||"text-foreground"}`,
                                children: v.title
                            }), p.jsx("p", {
                                className: "text-muted-foreground mb-8 px-4",
                                children: v.message
                            }), p.jsx(de, {
                                onBack: () => i("injury_severity"),
                                onNext: () => i("name"),
                                nextLabel: "Keep Going"
                            })]
                        })
                    }
                case "name":
                    return p.jsxs(ue, {
                        stepKey: "name",
                        title: "What's your name?",
                        description: "To personalize your compensation plan",
                        children: [p.jsxs("div", {
                            className: "space-y-3",
                            children: [p.jsx("input", {
                                type: "text",
                                name: "given-name",
                                autoComplete: "given-name",
                                value: o.first_name,
                                onChange: v => {
                                    je("first_name", v), Z("first_name", v.target.value)
                                },
                                onPaste: Bt,
                                className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors",
                                placeholder: "First name",
                                maxLength: 100
                            }), X.first_name && p.jsx("p", {
                                className: "text-destructive text-sm",
                                children: X.first_name
                            }), p.jsx("input", {
                                type: "text",
                                name: "family-name",
                                autoComplete: "family-name",
                                value: o.last_name,
                                onChange: v => {
                                    je("last_name", v), Z("last_name", v.target.value)
                                },
                                onPaste: Bt,
                                className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors",
                                placeholder: "Last name",
                                maxLength: 100
                            }), X.last_name && p.jsx("p", {
                                className: "text-destructive text-sm",
                                children: X.last_name
                            })]
                        }), p.jsx(de, {
                            onBack: () => i(d === "none" ? "injury_severity" : "injury_encouragement"),
                            onNext: () => {
                                const v = Ft("first_name", o.first_name),
                                    _ = Ft("last_name", o.last_name);
                                if (v || _) {
                                    j({
                                        first_name: v,
                                        last_name: _
                                    });
                                    return
                                }
                                const T = o.first_name.trim().toLowerCase(),
                                    C = o.last_name.trim().toLowerCase();
                                if (T && T === C) {
                                    j({
                                        first_name: "First and last name cannot be the same",
                                        last_name: ""
                                    });
                                    return
                                }
                                i("at_fault")
                            }
                        })]
                    });
                case "at_fault":
                    {
                        const v = e ? "police_at_scene" : "incident_date",
                            _ = () => {
                                Z("at_fault", "No"), setTimeout(() => i(v), 300)
                            },
                            T = () => {
                                Z("at_fault", "Yes"), Ln("at_fault_dq", Gr("at_fault", e, t), t), zt("quiz_disqualified", {
                                    quiz_dq_step: "at_fault_dq",
                                    quiz_dq_reason: "at_fault"
                                }), setTimeout(() => i(v), 300)
                            },
                            C = o.accident_type === "Uber or Lyft Accident" || o.accident_type === "18 Wheeler or other Commercial Vehicle Accident";
                        return p.jsxs(ue, {
                            stepKey: "at_fault",
                            title: "From what you remember, who was determined at-fault for the accident?",
                            children: [p.jsxs("div", {
                                className: "space-y-3",
                                children: [p.jsx(se, {
                                    label: "The other driver was at-fault.",
                                    active: o.at_fault === "No",
                                    onClick: _
                                }), p.jsx(se, {
                                    label: "I'm not sure who was at-fault.",
                                    active: o.at_fault === "Not sure",
                                    onClick: () => {
                                        Z("at_fault", "Not sure"), setTimeout(() => i(v), 300)
                                    }
                                }), C && p.jsx(se, {
                                    label: "My driver was at-fault, I was passenger.",
                                    active: o.at_fault === "Yes_Passenger",
                                    onClick: () => {
                                        Z("at_fault", "Yes_Passenger"), setTimeout(() => i(v), 300)
                                    }
                                }), p.jsx(se, {
                                    label: "I was at-fault.",
                                    active: o.at_fault === "Yes",
                                    onClick: T
                                })]
                            }), p.jsx(de, {
                                onBack: () => i("name")
                            })]
                        })
                    }
                case "police_at_scene":
                    return p.jsxs(ue, {
                        stepKey: "police_at_scene",
                        title: "Did police come to the scene?",
                        children: [p.jsxs("div", {
                            className: "flex gap-3",
                            children: [p.jsx(se, {
                                label: "Yes",
                                active: o.police_at_scene === "Yes",
                                onClick: () => {
                                    Z("police_at_scene", "Yes"), setTimeout(() => i("anyone_insured"), 300)
                                }
                            }), p.jsx(se, {
                                label: "No",
                                active: o.police_at_scene === "No",
                                onClick: () => {
                                    Z("police_at_scene", "No"), setTimeout(() => i("anyone_insured"), 300)
                                }
                            })]
                        }), p.jsx(de, {
                            onBack: () => i("at_fault")
                        })]
                    });
                case "anyone_insured":
                    return p.jsxs(ue, {
                        stepKey: "anyone_insured",
                        title: "As far as you know, was anyone insured?",
                        children: [p.jsxs("div", {
                            className: "space-y-3",
                            children: [p.jsx(se, {
                                label: "Yes",
                                active: o.anyone_insured === "Yes",
                                onClick: () => {
                                    Z("anyone_insured", "Yes"), setTimeout(() => i("incident_date"), 300)
                                }
                            }), p.jsx(se, {
                                label: "Not sure",
                                active: o.anyone_insured === "Not sure",
                                onClick: () => {
                                    Z("anyone_insured", "Not sure"), setTimeout(() => i("incident_date"), 300)
                                }
                            }), p.jsx(se, {
                                label: "No",
                                active: o.anyone_insured === "No",
                                onClick: () => {
                                    Z("anyone_insured", "No"), setTimeout(() => i("incident_date"), 300)
                                }
                            })]
                        }), p.jsx(de, {
                            onBack: () => i("police_at_scene")
                        })]
                    });
                case "received_payment":
                    return p.jsxs(ue, {
                        stepKey: "received_payment",
                        title: "Have you received any payment from this accident yet?",
                        children: [p.jsxs("div", {
                            className: "space-y-3",
                            children: [p.jsx(se, {
                                label: "Yes",
                                active: o.received_payment === "Yes",
                                onClick: () => {
                                    Z("received_payment", "Yes"), setTimeout(() => i("case_description"), 300)
                                }
                            }), p.jsx(se, {
                                label: "Not sure",
                                active: o.received_payment === "Not sure",
                                onClick: () => {
                                    Z("received_payment", "Not sure"), setTimeout(() => i("case_description"), 300)
                                }
                            }), p.jsx(se, {
                                label: "No",
                                active: o.received_payment === "No",
                                onClick: () => {
                                    Z("received_payment", "No"), setTimeout(() => i("case_description"), 300)
                                }
                            })]
                        }), p.jsx(de, {
                            onBack: () => i("represented")
                        })]
                    });
                case "case_description":
                    return p.jsxs(ue, {
                        stepKey: "case_description",
                        title: "Briefly describe the accident",
                        description: "A specialist will review your response before calling you so you won't need to repeat yourself",
                        children: [p.jsx("textarea", {
                            value: o.case_description,
                            onChange: v => Z("case_description", v.target.value.slice(0, 2e3)),
                            className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors min-h-[140px] resize-y",
                            placeholder: "Yesterday I was stopped at a red light when another driver rear ended me. I have some neck pain since. I saw a doctor the next day",
                            maxLength: 2e3
                        }), p.jsxs("p", {
                            className: "text-xs text-muted-foreground mt-1 text-right",
                            children: [o.case_description.length, " / 2000"]
                        }), p.jsx(de, {
                            onBack: () => i(e ? "received_payment" : "represented"),
                            onNext: () => i("prequalify"),
                            nextLabel: "Continue",
                            nextDisabled: o.case_description.trim().length < 36
                        })]
                    });
                case "medical_received":
                    return p.jsxs(ue, {
                        stepKey: "medical_received",
                        title: "How soon after the accident did you receive medical treatment?",
                        description: "Doctor, hospital, chiropractor, or any medical provider",
                        children: [p.jsxs("div", {
                            className: "space-y-3",
                            children: [p.jsx(se, {
                                label: "Within 30 days",
                                active: h === "within_30",
                                onClick: () => {
                                    b("within_30"), setTimeout(() => i("represented"), 300)
                                }
                            }), p.jsx(se, {
                                label: "After 30 days",
                                active: h === "after_30",
                                onClick: () => {
                                    b("after_30"), setTimeout(() => i("represented"), 300)
                                }
                            }), p.jsx(se, {
                                label: "I haven't yet, but I plan to",
                                active: h === "not_yet",
                                onClick: () => {
                                    b("not_yet"), setTimeout(() => i("represented"), 300)
                                }
                            })]
                        }), p.jsx(de, {
                            onBack: () => i("incident_date")
                        })]
                    });
                case "represented":
                    return p.jsxs(ue, {
                        stepKey: "represented",
                        title: "Do you currently have a lawyer for this accident?",
                        description: "Only select Yes if you've officially signed paperwork",
                        children: [p.jsxs("div", {
                            className: "flex gap-3",
                            children: [p.jsx(se, {
                                label: "Yes",
                                active: o.represented === "Yes",
                                onClick: () => {
                                    Z("represented", "Yes"), e ? setTimeout(() => i("received_payment"), 300) : Jt.includes(t) ? setTimeout(() => i("case_description"), 300) : qt()
                                }
                            }), p.jsx(se, {
                                label: "No",
                                active: o.represented === "No",
                                onClick: () => {
                                    Z("represented", "No"), e ? setTimeout(() => i("received_payment"), 300) : Jt.includes(t) ? setTimeout(() => i("case_description"), 300) : qt()
                                }
                            })]
                        }), p.jsx(de, {
                            onBack: () => k <= 30 ? i("incident_date") : i("medical_received")
                        })]
                    });
                case "incident_date":
                    {
                        const v = [{
                                label: "0 – 14 days ago",
                                daysAgo: 14
                            }, {
                                label: "14 – 30 days ago",
                                daysAgo: 30
                            }, {
                                label: "1 – 3 months ago",
                                daysAgo: 90
                            }, {
                                label: "3 – 6 months ago",
                                daysAgo: 180
                            }, {
                                label: "6 – 12 months ago",
                                daysAgo: 270
                            }],
                            _ = C => {
                                C > 365 ? (Ln("incident_date_dq", Gr("incident_date", e, t), t), zt("quiz_disqualified", {
                                    quiz_dq_step: "incident_date_dq",
                                    quiz_dq_reason: "incident_date"
                                }), setTimeout(() => i("medical_received"), 300)) : C <= 30 ? (b("within_30"), setTimeout(() => i("represented"), 300)) : setTimeout(() => i("medical_received"), 300)
                            },
                            T = C => {
                                const R = new Date;
                                R.setDate(R.getDate() - C.daysAgo);
                                const M = Tt(R, "MM/dd/yyyy");
                                Z("incident_date", M), Z("accident_date", C.label), y(R), E(C.daysAgo), _(C.daysAgo)
                            };
                        if (w === "options") return p.jsxs(ue, {
                            stepKey: "incident_date",
                            title: "When did the accident happen?",
                            description: "Select the approximate timeframe",
                            children: [p.jsxs("div", {
                                className: "space-y-3",
                                children: [p.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [p.jsx(se, {
                                        label: v[0].label,
                                        active: o.incident_date === Tt(new Date(Date.now() - v[0].daysAgo * 864e5), "MM/dd/yyyy"),
                                        onClick: () => T(v[0])
                                    }), p.jsx(se, {
                                        label: v[1].label,
                                        active: o.incident_date === Tt(new Date(Date.now() - v[1].daysAgo * 864e5), "MM/dd/yyyy"),
                                        onClick: () => T(v[1])
                                    })]
                                }), p.jsx(se, {
                                    label: v[2].label,
                                    active: o.incident_date === Tt(new Date(Date.now() - v[2].daysAgo * 864e5), "MM/dd/yyyy"),
                                    onClick: () => T(v[2])
                                }), p.jsx(se, {
                                    label: v[3].label,
                                    active: o.incident_date === Tt(new Date(Date.now() - v[3].daysAgo * 864e5), "MM/dd/yyyy"),
                                    onClick: () => T(v[3])
                                }), p.jsx(se, {
                                    label: v[4].label,
                                    active: o.incident_date === Tt(new Date(Date.now() - v[4].daysAgo * 864e5), "MM/dd/yyyy"),
                                    onClick: () => T(v[4])
                                }), p.jsx(se, {
                                    label: "Other",
                                    active: !1,
                                    onClick: () => {
                                        L(null), me(null), fe(""), P("year")
                                    }
                                })]
                            }), p.jsx(de, {
                                onBack: () => i(e ? "anyone_insured" : "at_fault")
                            })]
                        });
                        if (w === "year") {
                            const C = new Date().getFullYear(),
                                R = Array.from({
                                    length: 5
                                }, (M, B) => C - B);
                            return p.jsxs(ue, {
                                stepKey: "incident_date",
                                title: "What year did the accident happen?",
                                children: [p.jsx("div", {
                                    className: "space-y-3",
                                    children: R.map(M => p.jsx(se, {
                                        label: String(M),
                                        active: U === M,
                                        onClick: () => {
                                            L(M), P("month")
                                        }
                                    }, M))
                                }), p.jsx(de, {
                                    onBack: () => P("options")
                                })]
                            })
                        }
                        if (w === "month") {
                            const C = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            return p.jsxs(ue, {
                                stepKey: "incident_date",
                                title: "What month did it happen?",
                                children: [p.jsxs("select", {
                                    value: H ? ? "",
                                    onChange: R => {
                                        const M = R.target.value ? Number(R.target.value) : null;
                                        me(M), M && setTimeout(() => P("day"), 300)
                                    },
                                    className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors",
                                    children: [p.jsx("option", {
                                        value: "",
                                        children: "Select a month…"
                                    }), C.map((R, M) => p.jsx("option", {
                                        value: M + 1,
                                        children: R
                                    }, R))]
                                }), p.jsx(de, {
                                    onBack: () => P("year")
                                })]
                            })
                        }
                        if (w === "day") {
                            const C = U && H ? new Date(U, H, 0).getDate() : 31,
                                R = F ? parseInt(F, 10) : NaN,
                                M = !isNaN(R) && R >= 1 && R <= C;
                            return p.jsxs(ue, {
                                stepKey: "incident_date",
                                title: "What day did it happen?",
                                description: "If you don't remember, an estimate will do.",
                                children: [p.jsx("input", {
                                    type: "number",
                                    inputMode: "numeric",
                                    value: F,
                                    onChange: B => fe(B.target.value.replace(/\D/g, "").slice(0, 2)),
                                    className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors tabular-nums text-center text-xl",
                                    placeholder: `1 – ${C}`,
                                    min: 1,
                                    max: C
                                }), p.jsx(de, {
                                    onBack: () => P("month"),
                                    onNext: () => {
                                        if (!U || !H || !M) return;
                                        const B = Math.min(Math.max(R, 1), C),
                                            te = new Date(U, H - 1, B),
                                            qe = Tt(te, "MM/dd/yyyy"),
                                            Fe = `Other - ${Tt(te,"MMM d, yyyy")}`,
                                            Ve = Math.max(0, Math.round((Date.now() - te.getTime()) / 864e5));
                                        Z("incident_date", qe), Z("accident_date", Fe), y(te), E(Ve), _(Ve)
                                    },
                                    nextDisabled: !M
                                })]
                            })
                        }
                        return null
                    }
                case "prequalify":
                    return p.jsx(gi, {
                        mode: "wait",
                        children: p.jsx(yi.div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: -20
                            },
                            transition: {
                                duration: .3
                            },
                            children: p.jsx(bd, {
                                firstName: o.first_name,
                                onUnlock: () => i("email"),
                                onBack: () => i(e || Jt.includes(t) ? "case_description" : "represented")
                            })
                        }, "prequalify")
                    });
                case "email":
                    return p.jsxs(ue, {
                        stepKey: "email",
                        title: "Where should we send your plan?",
                        description: "No spam! We'll only send your plan & sometimes a quick feedback survey.",
                        children: [p.jsx("input", {
                            type: "email",
                            name: "email",
                            autoComplete: "email",
                            value: o.email,
                            onChange: v => {
                                je("email", v), Z("email", v.target.value)
                            },
                            onPaste: Bt,
                            className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors",
                            placeholder: "your@email.com",
                            maxLength: 255
                        }), X.email && p.jsx("p", {
                            className: "text-destructive text-sm",
                            children: X.email
                        }), p.jsx(de, {
                            onBack: () => i("prequalify"),
                            onNext: async () => {
                                var R;
                                const v = Ft("email", o.email);
                                if (v) {
                                    j({
                                        email: v
                                    });
                                    return
                                }
                                const _ = ((R = o.email.split("@")[0]) == null ? void 0 : R.trim().toLowerCase()) || "",
                                    T = o.first_name.trim().toLowerCase(),
                                    C = o.last_name.trim().toLowerCase();
                                if (_ && _.length >= 4 && (_ === T || _ === C)) {
                                    j({
                                        email: "Please use the name on your driver's license, not your email username"
                                    });
                                    return
                                }
                                await is(), i("phone")
                            }
                        })]
                    });
                case "phone":
                    return p.jsxs(ue, {
                        stepKey: "phone",
                        title: "Best phone number to confirm?",
                        description: "We'll send a verification code to confirm you're a real person",
                        children: [p.jsx("input", {
                            type: "tel",
                            inputMode: "numeric",
                            name: "tel",
                            autoComplete: "tel",
                            value: o.phone,
                            onChange: v => {
                                je("phone", v), Z("phone", v.target.value.replace(/\D/g, "").slice(0, 10))
                            },
                            onPaste: Bt,
                            className: `w-full p-4 rounded-lg border-2 bg-card text-foreground focus:outline-none transition-colors tabular-nums ${qr?"border-destructive focus:border-destructive":"border-border focus:border-primary"}`,
                            placeholder: "(415) 123-4567",
                            maxLength: 10
                        }), Me && o.phone.replace(/\D/g, "").length === 10 && p.jsxs("p", {
                            className: "text-green-600 text-sm mt-1 flex items-center gap-2",
                            children: [p.jsxs("svg", {
                                className: "animate-spin h-4 w-4",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: [p.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), p.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                })]
                            }), "Validating..."]
                        }), !Me && qr && p.jsx("p", {
                            className: "text-destructive text-sm mt-1",
                            children: kn((x = Te.current) == null ? void 0 : x.type)
                        }), X.phone && p.jsx("p", {
                            className: "text-destructive text-sm",
                            children: X.phone
                        }), p.jsx("p", {
                            className: "text-xs text-muted-foreground mt-4",
                            children: "By continuing, you agree to our terms and consent to be contacted about your claim."
                        }), X.form && p.jsx("p", {
                            className: "text-sm text-destructive mt-3",
                            children: X.form
                        }), p.jsx(de, {
                            onBack: () => i("email"),
                            onNext: async () => {
                                const v = Ft("phone", o.phone);
                                if (v) {
                                    j({
                                        phone: v
                                    });
                                    return
                                }
                                const _ = o.phone.replace(/\D/g, "");
                                j({});
                                let T = Te.current;
                                if (!T || T.digits !== _) {
                                    ce(!0);
                                    for (let B = 0; B < 20 && _t.current; B++) await new Promise(te => setTimeout(te, 100));
                                    if (T = Te.current, !T || T.digits !== _) try {
                                        const {
                                            data: B,
                                            error: te
                                        } = await ke.functions.invoke("validate-phone", {
                                            body: {
                                                phone: _
                                            }
                                        });
                                        if (te) {
                                            j({
                                                phone: "Unable to verify phone number. Please try again."
                                            }), ce(!1);
                                            return
                                        }
                                        T = {
                                            digits: _,
                                            valid: B.valid,
                                            type: B.type || "unknown",
                                            error: B.error
                                        }, Te.current = T, T.valid && await ir(_, T.type)
                                    } catch {
                                        j({
                                            phone: "Unable to verify phone number. Please try again."
                                        }), ce(!1);
                                        return
                                    }
                                    ce(!1)
                                }
                                if (!T.valid) {
                                    j({
                                        phone: T.error || "Please enter a valid phone number."
                                    });
                                    return
                                }
                                const C = T.type || "unknown",
                                    R = Br.includes(C),
                                    M = Ne();
                                if (R && C === "landline" && M) {
                                    Y.current = "Verified Only", z.current && await ke.functions.invoke("submit-lead", {
                                        body: {
                                            lead_id: z.current,
                                            update_fields: {
                                                fraud_analytics: Mr()
                                            }
                                        }
                                    }), await $("Verified Only"), i("submitted");
                                    return
                                }
                                if (!R && M) {
                                    Y.current = "Verified Only", z.current && await ke.functions.invoke("submit-lead", {
                                        body: {
                                            lead_id: z.current,
                                            update_fields: {
                                                fraud_analytics: Mr()
                                            }
                                        }
                                    }), await $("Verified Only"), i("submitted");
                                    return
                                }
                                if (R) {
                                    j({
                                        phone: kn(C)
                                    }), pt(!0);
                                    return
                                }
                                ae(!0);
                                try {
                                    const {
                                        data: B,
                                        error: te
                                    } = await ke.functions.invoke("send-otp", {
                                        body: {
                                            phone: _,
                                            ip_address: ut || new URLSearchParams(window.location.search).get("ip_address") || ""
                                        }
                                    });
                                    if (te || !(B != null && B.success)) {
                                        j({
                                            phone: (B == null ? void 0 : B.error) || "Failed to send verification code. Please try again."
                                        });
                                        return
                                    }
                                    ae(!1), i("phone_otp"), J()
                                } catch {
                                    j({
                                        phone: "Failed to send verification code. Please try again."
                                    })
                                } finally {
                                    ae(!1)
                                }
                            },
                            nextLabel: Me || D ? "Verifying..." : "Verify & Get My Free Plan",
                            variant: "accent",
                            nextDisabled: Me || D || qr
                        })]
                    });
                case "phone_otp":
                    return p.jsxs(ue, {
                        stepKey: "phone_otp",
                        title: "Enter your verification code",
                        description: `We sent a 6-digit code to ${o.phone.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")}`,
                        children: [p.jsx("input", {
                            type: "text",
                            inputMode: "numeric",
                            autoComplete: "one-time-code",
                            value: ve,
                            onChange: v => {
                                je("otp", v), Ue(v.target.value.replace(/\D/g, "").slice(0, 6)), j({})
                            },
                            className: "w-full p-4 rounded-lg border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors tabular-nums text-center text-2xl tracking-[0.5em]",
                            placeholder: "000000",
                            maxLength: 6
                        }), X.otp && p.jsx("p", {
                            className: "text-destructive text-sm",
                            children: X.otp
                        }), p.jsx("button", {
                            type: "button",
                            onClick: async () => {
                                ae(!0), j({});
                                try {
                                    const {
                                        data: v,
                                        error: _
                                    } = await ke.functions.invoke("send-otp", {
                                        body: {
                                            phone: o.phone,
                                            ip_address: ut || new URLSearchParams(window.location.search).get("ip_address") || ""
                                        }
                                    });
                                    _ || !(v != null && v.success) ? j({
                                        otp: (v == null ? void 0 : v.error) || "Failed to resend code."
                                    }) : (j({
                                        otp: ""
                                    }), Ue(""))
                                } catch {
                                    j({
                                        otp: "Failed to resend code."
                                    })
                                } finally {
                                    ae(!1)
                                }
                            },
                            disabled: D,
                            className: "text-sm text-primary hover:underline disabled:opacity-50",
                            children: D ? "Resending..." : "Didn't receive it? Resend code"
                        }), X.form && p.jsx("p", {
                            className: "text-sm text-destructive mt-3",
                            children: X.form
                        }), p.jsx(de, {
                            onBack: () => {
                                Ue(""), i("phone")
                            },
                            onNext: async () => {
                                if (ve.length !== 6) {
                                    j({
                                        otp: "Please enter the 6-digit code"
                                    });
                                    return
                                }
                                K(!0), j({});
                                let v = Ne() ? "Verified Only" : "No";
                                try {
                                    const {
                                        data: _,
                                        error: T
                                    } = await ke.functions.invoke("verify-otp", {
                                        body: {
                                            phone: o.phone,
                                            code: ve
                                        }
                                    });
                                    !T && (_ != null && _.valid) && (v = "Yes")
                                } catch {
                                    v = "No"
                                }
                                K(!1), await $(v), i("submitted")
                            },
                            nextLabel: be ? "Verifying..." : et ? "Submitting..." : "Get My Free Evaluation",
                            variant: "accent",
                            nextDisabled: be || et
                        })]
                    });
                case "submitted":
                    return p.jsxs("div", {
                        className: "w-full max-w-xl mx-auto text-center bg-card p-8 rounded-xl border border-border",
                        style: {
                            boxShadow: "var(--shadow-card)"
                        },
                        children: [p.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
                            children: p.jsx(Vi, {
                                className: "w-8 h-8 text-primary"
                            })
                        }), p.jsxs("h2", {
                            className: "text-2xl font-bold text-foreground mb-2 tracking-tight",
                            children: ["Thank you, ", o.first_name, "!"]
                        }), p.jsx("p", {
                            className: "text-muted-foreground",
                            children: t === "MELawyers" ? `Your plan is being prepared. A ME Lawyers team member will reach out to you shortly at ${o.phone}.` : t === "MiracleLaw" ? `Your plan is being prepared. A Miracle Law team member will reach out to you shortly at ${o.phone}.` : t === "DKLaw" ? `Your plan is being prepared. A DK Law team member will reach out to you shortly at ${o.phone}.` : `Your compensation plan is being prepared. A local expert will reach out to you shortly at ${o.phone}.`
                        })]
                    })
            }
        },
        Ie = Gr(a, e, t),
        Le = oi(e, t),
        tt = !["welcome", "submitted"].includes(a),
        Be = g.useRef(null);
    return g.useEffect(() => {
        if (Be.current) {
            const x = Be.current.getBoundingClientRect();
            (x.top < 0 || x.top > window.innerHeight * .5) && Be.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }, [a]), p.jsxs("div", {
        ref: Be,
        className: "flex flex-col items-center justify-start px-4 py-8 md:py-16",
        children: [p.jsx("form", {
            id: "trustedform-form",
            style: {
                display: "none"
            },
            children: p.jsx("input", {
                type: "hidden",
                name: "xxTrustedFormCertUrl",
                id: "xxTrustedFormCertUrl"
            })
        }), p.jsxs("div", {
            className: "w-full max-w-xl",
            children: [tt && p.jsx(vd, {
                current: Ie,
                total: Le
            }), ee()]
        })]
    })
}
const Im = g.lazy(() => Oe(() =>
        import ("./RecentCompensation-DGBqX4Xn.js"), __vite__mapDeps([0, 1, 2, 3, 4]))),
    Lm = g.lazy(() => Oe(() =>
        import ("./Testimonials-D0AgmRg2.js"), __vite__mapDeps([5, 1, 6, 3, 4]))),
    $m = g.lazy(() => Oe(() =>
        import ("./InsuranceLogos-Df9IicsM.js"), __vite__mapDeps([7, 1]))),
    Dm = g.lazy(() => Oe(() =>
        import ("./CompensationGrid-B37-zUJ6.js"), __vite__mapDeps([8, 1, 3, 4]))),
    Mm = g.lazy(() => Oe(() =>
        import ("./FAQ-LN7jBCTu.js"), __vite__mapDeps([9, 1]))),
    Um = g.lazy(() => Oe(() =>
        import ("./Footer-C3Dgs5sm.js"), __vite__mapDeps([10, 1, 11, 12, 4, 3]))),
    Bm = () => p.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [p.jsx(Nm, {}), p.jsxs(g.Suspense, {
            fallback: null,
            children: [p.jsx(Im, {}), p.jsx(Lm, {}), p.jsx($m, {}), p.jsx(Dm, {}), p.jsx(Mm, {}), p.jsx(Um, {})]
        })]
    }),
    qm = g.lazy(() => Oe(() =>
        import ("./MELawyers-Bi47Lm3p.js"), __vite__mapDeps([13, 1, 3, 4]))),
    Fm = g.lazy(() => Oe(() =>
        import ("./Dashboard-D-Jq36My.js"), __vite__mapDeps([14, 1, 4, 3, 12, 15, 2]))),
    Wm = g.lazy(() => Oe(() =>
        import ("./ALBTexas-CNtzeAId.js"), __vite__mapDeps([16, 1, 15, 3, 4]))),
    Hm = g.lazy(() => Oe(() =>
        import ("./MiracleLaw-DcOcbDn1.js").then(t => t.M), __vite__mapDeps([17, 1]))),
    zm = g.lazy(() => Oe(() =>
        import ("./DKLaw-BUocJeqi.js").then(t => t.D), __vite__mapDeps([18, 1]))),
    Vm = g.lazy(() => Oe(() =>
        import ("./Demo-DSRGQ1g6.js"), __vite__mapDeps([19, 1, 3, 4]))),
    Km = g.lazy(() => Oe(() =>
        import ("./Longform-D7QFsRwN.js"), __vite__mapDeps([20, 1, 3, 4]))),
    Gm = g.lazy(() => Oe(() =>
        import ("./NotFound-CQUfuq6L.js"), __vite__mapDeps([21, 1, 3, 4]))),
    Jm = new vl,
    Ym = () => p.jsx(wl, {
        client: Jm,
        children: p.jsxs(dd, {
            children: [p.jsx(Ku, {}), p.jsx(Vc, {}), p.jsx(pc, {
                children: p.jsx(g.Suspense, {
                    fallback: null,
                    children: p.jsxs(dc, {
                        children: [p.jsx(nt, {
                            path: "/",
                            element: p.jsx(Bm, {})
                        }), p.jsx(nt, {
                            path: "/me-lawyers",
                            element: p.jsx(qm, {})
                        }), p.jsx(nt, {
                            path: "/alb-tx",
                            element: p.jsx(Wm, {})
                        }), p.jsx(nt, {
                            path: "/miracle-law",
                            element: p.jsx(Hm, {})
                        }), p.jsx(nt, {
                            path: "/dk-law",
                            element: p.jsx(zm, {})
                        }), p.jsx(nt, {
                            path: "/demo",
                            element: p.jsx(Vm, {})
                        }), p.jsx(nt, {
                            path: "/longform",
                            element: p.jsx(Km, {})
                        }), p.jsx(nt, {
                            path: "/dashboard",
                            element: p.jsx(Fm, {})
                        }), p.jsx(nt, {
                            path: "*",
                            element: p.jsx(Gm, {})
                        })]
                    })
                })
            })]
        })
    });
Ci(document.getElementById("root")).render(p.jsx(Ym, {}));
export {
    Td as A, Sd as B, Nm as C, ke as D, tg as E, Jl as F, Ln as G, ba as H, md as I, ai as J, Fs as K, ou as L, au as M, gd as N, du as X, Oe as _, sr as a, an as b, ct as c, Zn as d, ig as e, ag as f, Sa as g, og as h, po as i, qn as j, ch as k, oh as l, ho as m, ah as n, dh as o, gh as p, mh as q, ar as r, ka as s, Ze as t, Zc as u, Vi as v, yh as w, Tt as x, Ed as y, xd as z
};