import {
    r as F,
    g as fe,
    c as vu,
    R as A
} from "./framer-C_Gpxhjm.js";
var Wb = {
        exports: {}
    },
    Pt = {},
    Hb = {
        exports: {}
    },
    Vb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, M) {
        var B = C.length;
        C.push(M);
        e: for (; 0 < B;) {
            var H = B - 1 >>> 1,
                U = C[H];
            if (0 < i(U, M)) C[H] = M, C[B] = U, B = H;
            else break e
        }
    }

    function r(C) {
        return C.length === 0 ? null : C[0]
    }

    function n(C) {
        if (C.length === 0) return null;
        var M = C[0],
            B = C.pop();
        if (B !== M) {
            C[0] = B;
            e: for (var H = 0, U = C.length, q = U >>> 1; H < q;) {
                var te = 2 * (H + 1) - 1,
                    ge = C[te],
                    Ee = te + 1,
                    Et = C[Ee];
                if (0 > i(ge, B)) Ee < U && 0 > i(Et, ge) ? (C[H] = Et, C[Ee] = B, H = Ee) : (C[H] = ge, C[te] = B, H = te);
                else if (Ee < U && 0 > i(Et, B)) C[H] = Et, C[Ee] = B, H = Ee;
                else break e
            }
        }
        return M
    }

    function i(C, M) {
        var B = C.sortIndex - M.sortIndex;
        return B !== 0 ? B : C.id - M.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var l = [],
        s = [],
        f = 1,
        c = null,
        d = 3,
        p = !1,
        h = !1,
        y = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(C) {
        for (var M = r(s); M !== null;) {
            if (M.callback === null) n(s);
            else if (M.startTime <= C) n(s), M.sortIndex = M.expirationTime, t(l, M);
            else break;
            M = r(s)
        }
    }

    function S(C) {
        if (y = !1, g(C), !h)
            if (r(l) !== null) h = !0, D(b);
            else {
                var M = r(s);
                M !== null && L(S, M.startTime - C)
            }
    }

    function b(C, M) {
        h = !1, y && (y = !1, m(_), _ = -1), p = !0;
        var B = d;
        try {
            for (g(M), c = r(l); c !== null && (!(c.expirationTime > M) || C && !E());) {
                var H = c.callback;
                if (typeof H == "function") {
                    c.callback = null, d = c.priorityLevel;
                    var U = H(c.expirationTime <= M);
                    M = e.unstable_now(), typeof U == "function" ? c.callback = U : c === r(l) && n(l), g(M)
                } else n(l);
                c = r(l)
            }
            if (c !== null) var q = !0;
            else {
                var te = r(s);
                te !== null && L(S, te.startTime - M), q = !1
            }
            return q
        } finally {
            c = null, d = B, p = !1
        }
    }
    var x = !1,
        O = null,
        _ = -1,
        P = 5,
        $ = -1;

    function E() {
        return !(e.unstable_now() - $ < P)
    }

    function T() {
        if (O !== null) {
            var C = e.unstable_now();
            $ = C;
            var M = !0;
            try {
                M = O(!0, C)
            } finally {
                M ? I() : (x = !1, O = null)
            }
        } else x = !1
    }
    var I;
    if (typeof v == "function") I = function() {
        v(T)
    };
    else if (typeof MessageChannel < "u") {
        var N = new MessageChannel,
            k = N.port2;
        N.port1.onmessage = T, I = function() {
            k.postMessage(null)
        }
    } else I = function() {
        w(T, 0)
    };

    function D(C) {
        O = C, x || (x = !0, I())
    }

    function L(C, M) {
        _ = w(function() {
            C(e.unstable_now())
        }, M)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
        C.callback = null
    }, e.unstable_continueExecution = function() {
        h || p || (h = !0, D(b))
    }, e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < C ? Math.floor(1e3 / C) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return d
    }, e.unstable_getFirstCallbackNode = function() {
        return r(l)
    }, e.unstable_next = function(C) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var M = 3;
                break;
            default:
                M = d
        }
        var B = d;
        d = M;
        try {
            return C()
        } finally {
            d = B
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(C, M) {
        switch (C) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                C = 3
        }
        var B = d;
        d = C;
        try {
            return M()
        } finally {
            d = B
        }
    }, e.unstable_scheduleCallback = function(C, M, B) {
        var H = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? H + B : H) : B = H, C) {
            case 1:
                var U = -1;
                break;
            case 2:
                U = 250;
                break;
            case 5:
                U = 1073741823;
                break;
            case 4:
                U = 1e4;
                break;
            default:
                U = 5e3
        }
        return U = B + U, C = {
            id: f++,
            callback: M,
            priorityLevel: C,
            startTime: B,
            expirationTime: U,
            sortIndex: -1
        }, B > H ? (C.sortIndex = B, t(s, C), r(l) === null && C === r(s) && (y ? (m(_), _ = -1) : y = !0, L(S, B - H))) : (C.sortIndex = U, t(l, C), h || p || (h = !0, D(b))), C
    }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(C) {
        var M = d;
        return function() {
            var B = d;
            d = M;
            try {
                return C.apply(this, arguments)
            } finally {
                d = B
            }
        }
    }
})(Vb);
Hb.exports = Vb;
var b_ = Hb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w_ = F,
    Ot = b_;

function z(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Kb = new Set,
    ro = {};

function Kn(e, t) {
    Ti(e, t), Ti(e + "Capture", t)
}

function Ti(e, t) {
    for (ro[e] = t, e = 0; e < t.length; e++) Kb.add(t[e])
}
var Er = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    jf = Object.prototype.hasOwnProperty,
    x_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Gv = {},
    qv = {};

function S_(e) {
    return jf.call(qv, e) ? !0 : jf.call(Gv, e) ? !1 : x_.test(e) ? qv[e] = !0 : (Gv[e] = !0, !1)
}

function O_(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function __(e, t, r, n) {
    if (t === null || typeof t > "u" || O_(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ot(e, t, r, n, i, a, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Xe[e] = new ot(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Xe[t] = new ot(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Xe[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Xe[e] = new ot(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Xe[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Xe[e] = new ot(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Xe[e] = new ot(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Xe[e] = new ot(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Xe[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var qp = /[\-:]([a-z])/g;

function Xp(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(qp, Xp);
    Xe[t] = new ot(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(qp, Xp);
    Xe[t] = new ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(qp, Xp);
    Xe[t] = new ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Xe[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Xe.xlinkHref = new ot("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Xe[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Yp(e, t, r, n) {
    var i = Xe.hasOwnProperty(t) ? Xe[t] : null;
    (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (__(t, r, i, n) && (r = null), n || i === null ? S_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Nr = w_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    yu = Symbol.for("react.element"),
    ii = Symbol.for("react.portal"),
    ai = Symbol.for("react.fragment"),
    Qp = Symbol.for("react.strict_mode"),
    kf = Symbol.for("react.profiler"),
    Gb = Symbol.for("react.provider"),
    qb = Symbol.for("react.context"),
    Zp = Symbol.for("react.forward_ref"),
    Mf = Symbol.for("react.suspense"),
    If = Symbol.for("react.suspense_list"),
    Jp = Symbol.for("react.memo"),
    Fr = Symbol.for("react.lazy"),
    Xb = Symbol.for("react.offscreen"),
    Xv = Symbol.iterator;

function ba(e) {
    return e === null || typeof e != "object" ? null : (e = Xv && e[Xv] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Oe = Object.assign,
    jc;

function La(e) {
    if (jc === void 0) try {
        throw Error()
    } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        jc = t && t[1] || ""
    }
    return `
` + jc + e
}
var kc = !1;

function Mc(e, t) {
    if (!e || kc) return "";
    kc = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var n = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    n = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                n = s
            }
            e()
        }
    } catch (s) {
        if (s && n && typeof s.stack == "string") {
            for (var i = s.stack.split(`
`), a = n.stack.split(`
`), o = i.length - 1, u = a.length - 1; 1 <= o && 0 <= u && i[o] !== a[u];) u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (i[o] !== a[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--, u--, 0 > u || i[o] !== a[u]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        kc = !1, Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? La(e) : ""
}

function P_(e) {
    switch (e.tag) {
        case 5:
            return La(e.type);
        case 16:
            return La("Lazy");
        case 13:
            return La("Suspense");
        case 19:
            return La("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Mc(e.type, !1), e;
        case 11:
            return e = Mc(e.type.render, !1), e;
        case 1:
            return e = Mc(e.type, !0), e;
        default:
            return ""
    }
}

function Nf(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case ai:
            return "Fragment";
        case ii:
            return "Portal";
        case kf:
            return "Profiler";
        case Qp:
            return "StrictMode";
        case Mf:
            return "Suspense";
        case If:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case qb:
            return (e.displayName || "Context") + ".Consumer";
        case Gb:
            return (e._context.displayName || "Context") + ".Provider";
        case Zp:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Jp:
            return t = e.displayName || null, t !== null ? t : Nf(e.type) || "Memo";
        case Fr:
            t = e._payload, e = e._init;
            try {
                return Nf(e(t))
            } catch {}
    }
    return null
}

function A_(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Nf(t);
        case 8:
            return t === Qp ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function un(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Yb(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function E_(e) {
    var t = Yb(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var i = r.get,
            a = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                n = "" + o, a.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }), {
            getValue: function() {
                return n
            },
            setValue: function(o) {
                n = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function mu(e) {
    e._valueTracker || (e._valueTracker = E_(e))
}

function Qb(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
        n = "";
    return e && (n = Yb(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
}

function rl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Df(e, t) {
    var r = t.checked;
    return Oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ? ? e._wrapperState.initialChecked
    })
}

function Yv(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
    r = un(t.value != null ? t.value : r), e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Zb(e, t) {
    t = t.checked, t != null && Yp(e, "checked", t, !1)
}

function Lf(e, t) {
    Zb(e, t);
    var r = un(t.value),
        n = t.type;
    if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Rf(e, t.type, r) : t.hasOwnProperty("defaultValue") && Rf(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Qv(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function Rf(e, t, r) {
    (t !== "number" || rl(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Ra = Array.isArray;

function bi(e, t, r, n) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
        for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + un(r), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === r) {
                e[i].selected = !0, n && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Bf(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
    return Oe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Zv(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children, t = t.defaultValue, r != null) {
            if (t != null) throw Error(z(92));
            if (Ra(r)) {
                if (1 < r.length) throw Error(z(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""), r = t
    }
    e._wrapperState = {
        initialValue: un(r)
    }
}

function Jb(e, t) {
    var r = un(t.value),
        n = un(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
}

function Jv(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function e1(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function zf(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? e1(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var gu, t1 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (gu = gu || document.createElement("div"), gu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gu.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function no(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ua = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    $_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ua).forEach(function(e) {
    $_.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Ua[t] = Ua[e]
    })
});

function r1(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Ua.hasOwnProperty(e) && Ua[e] ? ("" + t).trim() : t + "px"
}

function n1(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0,
                i = r1(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i
        }
}
var T_ = Oe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Ff(e, t) {
    if (t) {
        if (T_[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(z(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(z(62))
    }
}

function Uf(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Wf = null;

function eh(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Hf = null,
    wi = null,
    xi = null;

function ey(e) {
    if (e = nu(e)) {
        if (typeof Hf != "function") throw Error(z(280));
        var t = e.stateNode;
        t && (t = Ts(t), Hf(e.stateNode, e.type, t))
    }
}

function i1(e) {
    wi ? xi ? xi.push(e) : xi = [e] : wi = e
}

function a1() {
    if (wi) {
        var e = wi,
            t = xi;
        if (xi = wi = null, ey(e), t)
            for (e = 0; e < t.length; e++) ey(t[e])
    }
}

function o1(e, t) {
    return e(t)
}

function u1() {}
var Ic = !1;

function l1(e, t, r) {
    if (Ic) return e(t, r);
    Ic = !0;
    try {
        return o1(e, t, r)
    } finally {
        Ic = !1, (wi !== null || xi !== null) && (u1(), a1())
    }
}

function io(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = Ts(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(z(231, t, typeof r));
    return r
}
var Vf = !1;
if (Er) try {
    var wa = {};
    Object.defineProperty(wa, "passive", {
        get: function() {
            Vf = !0
        }
    }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa)
} catch {
    Vf = !1
}

function C_(e, t, r, n, i, a, o, u, l) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, s)
    } catch (f) {
        this.onError(f)
    }
}
var Wa = !1,
    nl = null,
    il = !1,
    Kf = null,
    j_ = {
        onError: function(e) {
            Wa = !0, nl = e
        }
    };

function k_(e, t, r, n, i, a, o, u, l) {
    Wa = !1, nl = null, C_.apply(j_, arguments)
}

function M_(e, t, r, n, i, a, o, u, l) {
    if (k_.apply(this, arguments), Wa) {
        if (Wa) {
            var s = nl;
            Wa = !1, nl = null
        } else throw Error(z(198));
        il || (il = !0, Kf = s)
    }
}

function Gn(e) {
    var t = e,
        r = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (r = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? r : null
}

function s1(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function ty(e) {
    if (Gn(e) !== e) throw Error(z(188))
}

function I_(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Gn(e), t === null) throw Error(z(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t;;) {
        var i = r.return;
        if (i === null) break;
        var a = i.alternate;
        if (a === null) {
            if (n = i.return, n !== null) {
                r = n;
                continue
            }
            break
        }
        if (i.child === a.child) {
            for (a = i.child; a;) {
                if (a === r) return ty(i), e;
                if (a === n) return ty(i), t;
                a = a.sibling
            }
            throw Error(z(188))
        }
        if (r.return !== n.return) r = i, n = a;
        else {
            for (var o = !1, u = i.child; u;) {
                if (u === r) {
                    o = !0, r = i, n = a;
                    break
                }
                if (u === n) {
                    o = !0, n = i, r = a;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = a.child; u;) {
                    if (u === r) {
                        o = !0, r = a, n = i;
                        break
                    }
                    if (u === n) {
                        o = !0, n = a, r = i;
                        break
                    }
                    u = u.sibling
                }
                if (!o) throw Error(z(189))
            }
        }
        if (r.alternate !== n) throw Error(z(190))
    }
    if (r.tag !== 3) throw Error(z(188));
    return r.stateNode.current === r ? e : t
}

function c1(e) {
    return e = I_(e), e !== null ? f1(e) : null
}

function f1(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = f1(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var d1 = Ot.unstable_scheduleCallback,
    ry = Ot.unstable_cancelCallback,
    N_ = Ot.unstable_shouldYield,
    D_ = Ot.unstable_requestPaint,
    $e = Ot.unstable_now,
    L_ = Ot.unstable_getCurrentPriorityLevel,
    th = Ot.unstable_ImmediatePriority,
    p1 = Ot.unstable_UserBlockingPriority,
    al = Ot.unstable_NormalPriority,
    R_ = Ot.unstable_LowPriority,
    h1 = Ot.unstable_IdlePriority,
    Ps = null,
    ur = null;

function B_(e) {
    if (ur && typeof ur.onCommitFiberRoot == "function") try {
        ur.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Jt = Math.clz32 ? Math.clz32 : U_,
    z_ = Math.log,
    F_ = Math.LN2;

function U_(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (z_(e) / F_ | 0) | 0
}
var bu = 64,
    wu = 4194304;

function Ba(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ol(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = r & 268435455;
    if (o !== 0) {
        var u = o & ~i;
        u !== 0 ? n = Ba(u) : (a &= o, a !== 0 && (n = Ba(a)))
    } else o = r & ~i, o !== 0 ? n = Ba(o) : a !== 0 && (n = Ba(a));
    if (n === 0) return 0;
    if (t !== 0 && t !== n && !(t & i) && (i = n & -n, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
    if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= n; 0 < t;) r = 31 - Jt(t), i = 1 << r, n |= e[r], t &= ~i;
    return n
}

function W_(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function H_(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
        var o = 31 - Jt(a),
            u = 1 << o,
            l = i[o];
        l === -1 ? (!(u & r) || u & n) && (i[o] = W_(u, t)) : l <= t && (e.expiredLanes |= u), a &= ~u
    }
}

function Gf(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function v1() {
    var e = bu;
    return bu <<= 1, !(bu & 4194240) && (bu = 64), e
}

function Nc(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t
}

function tu(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Jt(t), e[t] = r
}

function V_(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
        var i = 31 - Jt(r),
            a = 1 << i;
        t[i] = 0, n[i] = -1, e[i] = -1, r &= ~a
    }
}

function rh(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r;) {
        var n = 31 - Jt(r),
            i = 1 << n;
        i & t | e[n] & t && (e[n] |= t), r &= ~i
    }
}
var ue = 0;

function y1(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var m1, nh, g1, b1, w1, qf = !1,
    xu = [],
    Yr = null,
    Qr = null,
    Zr = null,
    ao = new Map,
    oo = new Map,
    Hr = [],
    K_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ny(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Yr = null;
            break;
        case "dragenter":
        case "dragleave":
            Qr = null;
            break;
        case "mouseover":
        case "mouseout":
            Zr = null;
            break;
        case "pointerover":
        case "pointerout":
            ao.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            oo.delete(t.pointerId)
    }
}

function xa(e, t, r, n, i, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [i]
    }, t !== null && (t = nu(t), t !== null && nh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function G_(e, t, r, n, i) {
    switch (t) {
        case "focusin":
            return Yr = xa(Yr, e, t, r, n, i), !0;
        case "dragenter":
            return Qr = xa(Qr, e, t, r, n, i), !0;
        case "mouseover":
            return Zr = xa(Zr, e, t, r, n, i), !0;
        case "pointerover":
            var a = i.pointerId;
            return ao.set(a, xa(ao.get(a) || null, e, t, r, n, i)), !0;
        case "gotpointercapture":
            return a = i.pointerId, oo.set(a, xa(oo.get(a) || null, e, t, r, n, i)), !0
    }
    return !1
}

function x1(e) {
    var t = Pn(e.target);
    if (t !== null) {
        var r = Gn(t);
        if (r !== null) {
            if (t = r.tag, t === 13) {
                if (t = s1(r), t !== null) {
                    e.blockedOn = t, w1(e.priority, function() {
                        g1(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ku(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var r = Xf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type, r);
            Wf = n, r.target.dispatchEvent(n), Wf = null
        } else return t = nu(r), t !== null && nh(t), e.blockedOn = r, !1;
        t.shift()
    }
    return !0
}

function iy(e, t, r) {
    Ku(e) && r.delete(t)
}

function q_() {
    qf = !1, Yr !== null && Ku(Yr) && (Yr = null), Qr !== null && Ku(Qr) && (Qr = null), Zr !== null && Ku(Zr) && (Zr = null), ao.forEach(iy), oo.forEach(iy)
}

function Sa(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qf || (qf = !0, Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, q_)))
}

function uo(e) {
    function t(i) {
        return Sa(i, e)
    }
    if (0 < xu.length) {
        Sa(xu[0], e);
        for (var r = 1; r < xu.length; r++) {
            var n = xu[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Yr !== null && Sa(Yr, e), Qr !== null && Sa(Qr, e), Zr !== null && Sa(Zr, e), ao.forEach(t), oo.forEach(t), r = 0; r < Hr.length; r++) n = Hr[r], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Hr.length && (r = Hr[0], r.blockedOn === null);) x1(r), r.blockedOn === null && Hr.shift()
}
var Si = Nr.ReactCurrentBatchConfig,
    ul = !0;

function X_(e, t, r, n) {
    var i = ue,
        a = Si.transition;
    Si.transition = null;
    try {
        ue = 1, ih(e, t, r, n)
    } finally {
        ue = i, Si.transition = a
    }
}

function Y_(e, t, r, n) {
    var i = ue,
        a = Si.transition;
    Si.transition = null;
    try {
        ue = 4, ih(e, t, r, n)
    } finally {
        ue = i, Si.transition = a
    }
}

function ih(e, t, r, n) {
    if (ul) {
        var i = Xf(e, t, r, n);
        if (i === null) Vc(e, t, n, ll, r), ny(e, n);
        else if (G_(i, e, t, r, n)) n.stopPropagation();
        else if (ny(e, n), t & 4 && -1 < K_.indexOf(e)) {
            for (; i !== null;) {
                var a = nu(i);
                if (a !== null && m1(a), a = Xf(e, t, r, n), a === null && Vc(e, t, n, ll, r), a === i) break;
                i = a
            }
            i !== null && n.stopPropagation()
        } else Vc(e, t, n, null, r)
    }
}
var ll = null;

function Xf(e, t, r, n) {
    if (ll = null, e = eh(n), e = Pn(e), e !== null)
        if (t = Gn(e), t === null) e = null;
        else if (r = t.tag, r === 13) {
        if (e = s1(t), e !== null) return e;
        e = null
    } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ll = e, null
}

function S1(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (L_()) {
                case th:
                    return 1;
                case p1:
                    return 4;
                case al:
                case R_:
                    return 16;
                case h1:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Gr = null,
    ah = null,
    Gu = null;

function O1() {
    if (Gu) return Gu;
    var e, t = ah,
        r = t.length,
        n, i = "value" in Gr ? Gr.value : Gr.textContent,
        a = i.length;
    for (e = 0; e < r && t[e] === i[e]; e++);
    var o = r - e;
    for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
    return Gu = i.slice(e, 1 < n ? 1 - n : void 0)
}

function qu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Su() {
    return !0
}

function ay() {
    return !1
}

function At(e) {
    function t(r, n, i, a, o) {
        this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (r = e[u], this[u] = r ? r(a) : a[u]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Su : ay, this.isPropagationStopped = ay, this
    }
    return Oe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Su)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Su)
        },
        persist: function() {},
        isPersistent: Su
    }), t
}
var ia = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    oh = At(ia),
    ru = Oe({}, ia, {
        view: 0,
        detail: 0
    }),
    Q_ = At(ru),
    Dc, Lc, Oa, As = Oe({}, ru, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: uh,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Oa && (Oa && e.type === "mousemove" ? (Dc = e.screenX - Oa.screenX, Lc = e.screenY - Oa.screenY) : Lc = Dc = 0, Oa = e), Dc)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Lc
        }
    }),
    oy = At(As),
    Z_ = Oe({}, As, {
        dataTransfer: 0
    }),
    J_ = At(Z_),
    eP = Oe({}, ru, {
        relatedTarget: 0
    }),
    Rc = At(eP),
    tP = Oe({}, ia, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    rP = At(tP),
    nP = Oe({}, ia, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    iP = At(nP),
    aP = Oe({}, ia, {
        data: 0
    }),
    uy = At(aP),
    oP = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    uP = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    lP = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function sP(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lP[e]) ? !!t[e] : !1
}

function uh() {
    return sP
}
var cP = Oe({}, ru, {
        key: function(e) {
            if (e.key) {
                var t = oP[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = qu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uP[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: uh,
        charCode: function(e) {
            return e.type === "keypress" ? qu(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? qu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    fP = At(cP),
    dP = Oe({}, As, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    ly = At(dP),
    pP = Oe({}, ru, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: uh
    }),
    hP = At(pP),
    vP = Oe({}, ia, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    yP = At(vP),
    mP = Oe({}, As, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    gP = At(mP),
    bP = [9, 13, 27, 32],
    lh = Er && "CompositionEvent" in window,
    Ha = null;
Er && "documentMode" in document && (Ha = document.documentMode);
var wP = Er && "TextEvent" in window && !Ha,
    _1 = Er && (!lh || Ha && 8 < Ha && 11 >= Ha),
    sy = " ",
    cy = !1;

function P1(e, t) {
    switch (e) {
        case "keyup":
            return bP.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function A1(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var oi = !1;

function xP(e, t) {
    switch (e) {
        case "compositionend":
            return A1(t);
        case "keypress":
            return t.which !== 32 ? null : (cy = !0, sy);
        case "textInput":
            return e = t.data, e === sy && cy ? null : e;
        default:
            return null
    }
}

function SP(e, t) {
    if (oi) return e === "compositionend" || !lh && P1(e, t) ? (e = O1(), Gu = ah = Gr = null, oi = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return _1 && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var OP = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function fy(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!OP[e.type] : t === "textarea"
}

function E1(e, t, r, n) {
    i1(n), t = sl(t, "onChange"), 0 < t.length && (r = new oh("onChange", "change", null, r, n), e.push({
        event: r,
        listeners: t
    }))
}
var Va = null,
    lo = null;

function _P(e) {
    R1(e, 0)
}

function Es(e) {
    var t = si(e);
    if (Qb(t)) return e
}

function PP(e, t) {
    if (e === "change") return t
}
var $1 = !1;
if (Er) {
    var Bc;
    if (Er) {
        var zc = "oninput" in document;
        if (!zc) {
            var dy = document.createElement("div");
            dy.setAttribute("oninput", "return;"), zc = typeof dy.oninput == "function"
        }
        Bc = zc
    } else Bc = !1;
    $1 = Bc && (!document.documentMode || 9 < document.documentMode)
}

function py() {
    Va && (Va.detachEvent("onpropertychange", T1), lo = Va = null)
}

function T1(e) {
    if (e.propertyName === "value" && Es(lo)) {
        var t = [];
        E1(t, lo, e, eh(e)), l1(_P, t)
    }
}

function AP(e, t, r) {
    e === "focusin" ? (py(), Va = t, lo = r, Va.attachEvent("onpropertychange", T1)) : e === "focusout" && py()
}

function EP(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Es(lo)
}

function $P(e, t) {
    if (e === "click") return Es(t)
}

function TP(e, t) {
    if (e === "input" || e === "change") return Es(t)
}

function CP(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var tr = typeof Object.is == "function" ? Object.is : CP;

function so(e, t) {
    if (tr(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
        n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
        var i = r[n];
        if (!jf.call(t, i) || !tr(e[i], t[i])) return !1
    }
    return !0
}

function hy(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function vy(e, t) {
    var r = hy(e);
    e = 0;
    for (var n; r;) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
                node: r,
                offset: t - e
            };
            e = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = hy(r)
    }
}

function C1(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? C1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function j1() {
    for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r) e = t.contentWindow;
        else break;
        t = rl(e.document)
    }
    return t
}

function sh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function jP(e) {
    var t = j1(),
        r = e.focusedElem,
        n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && C1(r.ownerDocument.documentElement, r)) {
        if (n !== null && sh(r)) {
            if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = r.textContent.length,
                    a = Math.min(n.start, i);
                n = n.end === void 0 ? a : Math.min(n.end, i), !e.extend && a > n && (i = n, n = a, a = i), i = vy(r, a);
                var o = vy(r, n);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > n ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = r; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var kP = Er && "documentMode" in document && 11 >= document.documentMode,
    ui = null,
    Yf = null,
    Ka = null,
    Qf = !1;

function yy(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Qf || ui == null || ui !== rl(n) || (n = ui, "selectionStart" in n && sh(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }), Ka && so(Ka, n) || (Ka = n, n = sl(Yf, "onSelect"), 0 < n.length && (t = new oh("onSelect", "select", null, t, r), e.push({
        event: t,
        listeners: n
    }), t.target = ui)))
}

function Ou(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
}
var li = {
        animationend: Ou("Animation", "AnimationEnd"),
        animationiteration: Ou("Animation", "AnimationIteration"),
        animationstart: Ou("Animation", "AnimationStart"),
        transitionend: Ou("Transition", "TransitionEnd")
    },
    Fc = {},
    k1 = {};
Er && (k1 = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);

function $s(e) {
    if (Fc[e]) return Fc[e];
    if (!li[e]) return e;
    var t = li[e],
        r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in k1) return Fc[e] = t[r];
    return e
}
var M1 = $s("animationend"),
    I1 = $s("animationiteration"),
    N1 = $s("animationstart"),
    D1 = $s("transitionend"),
    L1 = new Map,
    my = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function sn(e, t) {
    L1.set(e, t), Kn(t, [e])
}
for (var Uc = 0; Uc < my.length; Uc++) {
    var Wc = my[Uc],
        MP = Wc.toLowerCase(),
        IP = Wc[0].toUpperCase() + Wc.slice(1);
    sn(MP, "on" + IP)
}
sn(M1, "onAnimationEnd");
sn(I1, "onAnimationIteration");
sn(N1, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(D1, "onTransitionEnd");
Ti("onMouseEnter", ["mouseout", "mouseover"]);
Ti("onMouseLeave", ["mouseout", "mouseover"]);
Ti("onPointerEnter", ["pointerout", "pointerover"]);
Ti("onPointerLeave", ["pointerout", "pointerover"]);
Kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    NP = new Set("cancel close invalid load scroll toggle".split(" ").concat(za));

function gy(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r, M_(n, t, void 0, e), e.currentTarget = null
}

function R1(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r],
            i = n.event;
        n = n.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = n.length - 1; 0 <= o; o--) {
                    var u = n[o],
                        l = u.instance,
                        s = u.currentTarget;
                    if (u = u.listener, l !== a && i.isPropagationStopped()) break e;
                    gy(i, u, s), a = l
                } else
                    for (o = 0; o < n.length; o++) {
                        if (u = n[o], l = u.instance, s = u.currentTarget, u = u.listener, l !== a && i.isPropagationStopped()) break e;
                        gy(i, u, s), a = l
                    }
        }
    }
    if (il) throw e = Kf, il = !1, Kf = null, e
}

function he(e, t) {
    var r = t[rd];
    r === void 0 && (r = t[rd] = new Set);
    var n = e + "__bubble";
    r.has(n) || (B1(t, e, 2, !1), r.add(n))
}

function Hc(e, t, r) {
    var n = 0;
    t && (n |= 4), B1(r, e, n, t)
}
var _u = "_reactListening" + Math.random().toString(36).slice(2);

function co(e) {
    if (!e[_u]) {
        e[_u] = !0, Kb.forEach(function(r) {
            r !== "selectionchange" && (NP.has(r) || Hc(r, !1, e), Hc(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_u] || (t[_u] = !0, Hc("selectionchange", !1, t))
    }
}

function B1(e, t, r, n) {
    switch (S1(t)) {
        case 1:
            var i = X_;
            break;
        case 4:
            i = Y_;
            break;
        default:
            i = ih
    }
    r = i.bind(null, t, r, e), i = void 0, !Vf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, {
        passive: i
    }) : e.addEventListener(t, r, !1)
}

function Vc(e, t, r, n, i) {
    var a = n;
    if (!(t & 1) && !(t & 2) && n !== null) e: for (;;) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
            var u = n.stateNode.containerInfo;
            if (u === i || u.nodeType === 8 && u.parentNode === i) break;
            if (o === 4)
                for (o = n.return; o !== null;) {
                    var l = o.tag;
                    if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    o = o.return
                }
            for (; u !== null;) {
                if (o = Pn(u), o === null) return;
                if (l = o.tag, l === 5 || l === 6) {
                    n = a = o;
                    continue e
                }
                u = u.parentNode
            }
        }
        n = n.return
    }
    l1(function() {
        var s = a,
            f = eh(r),
            c = [];
        e: {
            var d = L1.get(e);
            if (d !== void 0) {
                var p = oh,
                    h = e;
                switch (e) {
                    case "keypress":
                        if (qu(r) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = fP;
                        break;
                    case "focusin":
                        h = "focus", p = Rc;
                        break;
                    case "focusout":
                        h = "blur", p = Rc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = Rc;
                        break;
                    case "click":
                        if (r.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = oy;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = J_;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = hP;
                        break;
                    case M1:
                    case I1:
                    case N1:
                        p = rP;
                        break;
                    case D1:
                        p = yP;
                        break;
                    case "scroll":
                        p = Q_;
                        break;
                    case "wheel":
                        p = gP;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = iP;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = ly
                }
                var y = (t & 4) !== 0,
                    w = !y && e === "scroll",
                    m = y ? d !== null ? d + "Capture" : null : d;
                y = [];
                for (var v = s, g; v !== null;) {
                    g = v;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S, m !== null && (S = io(v, m), S != null && y.push(fo(v, S, g)))), w) break;
                    v = v.return
                }
                0 < y.length && (d = new p(d, h, null, r, f), c.push({
                    event: d,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", d && r !== Wf && (h = r.relatedTarget || r.fromElement) && (Pn(h) || h[$r])) break e;
                if ((p || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (h = r.relatedTarget || r.toElement, p = s, h = h ? Pn(h) : null, h !== null && (w = Gn(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (p = null, h = s), p !== h)) {
                    if (y = oy, S = "onMouseLeave", m = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (y = ly, S = "onPointerLeave", m = "onPointerEnter", v = "pointer"), w = p == null ? d : si(p), g = h == null ? d : si(h), d = new y(S, v + "leave", p, r, f), d.target = w, d.relatedTarget = g, S = null, Pn(f) === s && (y = new y(m, v + "enter", h, r, f), y.target = g, y.relatedTarget = w, S = y), w = S, p && h) t: {
                        for (y = p, m = h, v = 0, g = y; g; g = Jn(g)) v++;
                        for (g = 0, S = m; S; S = Jn(S)) g++;
                        for (; 0 < v - g;) y = Jn(y),
                        v--;
                        for (; 0 < g - v;) m = Jn(m),
                        g--;
                        for (; v--;) {
                            if (y === m || m !== null && y === m.alternate) break t;
                            y = Jn(y), m = Jn(m)
                        }
                        y = null
                    }
                    else y = null;
                    p !== null && by(c, d, p, y, !1), h !== null && w !== null && by(c, w, h, y, !0)
                }
            }
            e: {
                if (d = s ? si(s) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file") var b = PP;
                else if (fy(d))
                    if ($1) b = TP;
                    else {
                        b = EP;
                        var x = AP
                    }
                else(p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (b = $P);
                if (b && (b = b(e, s))) {
                    E1(c, b, r, f);
                    break e
                }
                x && x(e, d, s),
                e === "focusout" && (x = d._wrapperState) && x.controlled && d.type === "number" && Rf(d, "number", d.value)
            }
            switch (x = s ? si(s) : window, e) {
                case "focusin":
                    (fy(x) || x.contentEditable === "true") && (ui = x, Yf = s, Ka = null);
                    break;
                case "focusout":
                    Ka = Yf = ui = null;
                    break;
                case "mousedown":
                    Qf = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Qf = !1, yy(c, r, f);
                    break;
                case "selectionchange":
                    if (kP) break;
                case "keydown":
                case "keyup":
                    yy(c, r, f)
            }
            var O;
            if (lh) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else oi ? P1(e, r) && (_ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (_ = "onCompositionStart");_ && (_1 && r.locale !== "ko" && (oi || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && oi && (O = O1()) : (Gr = f, ah = "value" in Gr ? Gr.value : Gr.textContent, oi = !0)), x = sl(s, _), 0 < x.length && (_ = new uy(_, e, null, r, f), c.push({
                event: _,
                listeners: x
            }), O ? _.data = O : (O = A1(r), O !== null && (_.data = O)))),
            (O = wP ? xP(e, r) : SP(e, r)) && (s = sl(s, "onBeforeInput"), 0 < s.length && (f = new uy("onBeforeInput", "beforeinput", null, r, f), c.push({
                event: f,
                listeners: s
            }), f.data = O))
        }
        R1(c, t)
    })
}

function fo(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}

function sl(e, t) {
    for (var r = t + "Capture", n = []; e !== null;) {
        var i = e,
            a = i.stateNode;
        i.tag === 5 && a !== null && (i = a, a = io(e, r), a != null && n.unshift(fo(e, a, i)), a = io(e, t), a != null && n.push(fo(e, a, i))), e = e.return
    }
    return n
}

function Jn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function by(e, t, r, n, i) {
    for (var a = t._reactName, o = []; r !== null && r !== n;) {
        var u = r,
            l = u.alternate,
            s = u.stateNode;
        if (l !== null && l === n) break;
        u.tag === 5 && s !== null && (u = s, i ? (l = io(r, a), l != null && o.unshift(fo(r, l, u))) : i || (l = io(r, a), l != null && o.push(fo(r, l, u)))), r = r.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var DP = /\r\n?/g,
    LP = /\u0000|\uFFFD/g;

function wy(e) {
    return (typeof e == "string" ? e : "" + e).replace(DP, `
`).replace(LP, "")
}

function Pu(e, t, r) {
    if (t = wy(t), wy(e) !== t && r) throw Error(z(425))
}

function cl() {}
var Zf = null,
    Jf = null;

function ed(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var td = typeof setTimeout == "function" ? setTimeout : void 0,
    RP = typeof clearTimeout == "function" ? clearTimeout : void 0,
    xy = typeof Promise == "function" ? Promise : void 0,
    BP = typeof queueMicrotask == "function" ? queueMicrotask : typeof xy < "u" ? function(e) {
        return xy.resolve(null).then(e).catch(zP)
    } : td;

function zP(e) {
    setTimeout(function() {
        throw e
    })
}

function Kc(e, t) {
    var r = t,
        n = 0;
    do {
        var i = r.nextSibling;
        if (e.removeChild(r), i && i.nodeType === 8)
            if (r = i.data, r === "/$") {
                if (n === 0) {
                    e.removeChild(i), uo(t);
                    return
                }
                n--
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = i
    } while (r);
    uo(t)
}

function Jr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Sy(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e;
                t--
            } else r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var aa = Math.random().toString(36).slice(2),
    ar = "__reactFiber$" + aa,
    po = "__reactProps$" + aa,
    $r = "__reactContainer$" + aa,
    rd = "__reactEvents$" + aa,
    FP = "__reactListeners$" + aa,
    UP = "__reactHandles$" + aa;

function Pn(e) {
    var t = e[ar];
    if (t) return t;
    for (var r = e.parentNode; r;) {
        if (t = r[$r] || r[ar]) {
            if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                for (e = Sy(e); e !== null;) {
                    if (r = e[ar]) return r;
                    e = Sy(e)
                }
            return t
        }
        e = r, r = e.parentNode
    }
    return null
}

function nu(e) {
    return e = e[ar] || e[$r], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function si(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(z(33))
}

function Ts(e) {
    return e[po] || null
}
var nd = [],
    ci = -1;

function cn(e) {
    return {
        current: e
    }
}

function me(e) {
    0 > ci || (e.current = nd[ci], nd[ci] = null, ci--)
}

function pe(e, t) {
    ci++, nd[ci] = e.current, e.current = t
}
var ln = {},
    rt = cn(ln),
    dt = cn(!1),
    Dn = ln;

function Ci(e, t) {
    var r = e.type.contextTypes;
    if (!r) return ln;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        a;
    for (a in r) i[a] = t[a];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function pt(e) {
    return e = e.childContextTypes, e != null
}

function fl() {
    me(dt), me(rt)
}

function Oy(e, t, r) {
    if (rt.current !== ln) throw Error(z(168));
    pe(rt, t), pe(dt, r)
}

function z1(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var i in n)
        if (!(i in t)) throw Error(z(108, A_(e) || "Unknown", i));
    return Oe({}, r, n)
}

function dl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, Dn = rt.current, pe(rt, e), pe(dt, dt.current), !0
}

function _y(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(z(169));
    r ? (e = z1(e, t, Dn), n.__reactInternalMemoizedMergedChildContext = e, me(dt), me(rt), pe(rt, e)) : me(dt), pe(dt, r)
}
var yr = null,
    Cs = !1,
    Gc = !1;

function F1(e) {
    yr === null ? yr = [e] : yr.push(e)
}

function WP(e) {
    Cs = !0, F1(e)
}

function fn() {
    if (!Gc && yr !== null) {
        Gc = !0;
        var e = 0,
            t = ue;
        try {
            var r = yr;
            for (ue = 1; e < r.length; e++) {
                var n = r[e];
                do n = n(!0); while (n !== null)
            }
            yr = null, Cs = !1
        } catch (i) {
            throw yr !== null && (yr = yr.slice(e + 1)), d1(th, fn), i
        } finally {
            ue = t, Gc = !1
        }
    }
    return null
}
var fi = [],
    di = 0,
    pl = null,
    hl = 0,
    jt = [],
    kt = 0,
    Ln = null,
    mr = 1,
    gr = "";

function wn(e, t) {
    fi[di++] = hl, fi[di++] = pl, pl = e, hl = t
}

function U1(e, t, r) {
    jt[kt++] = mr, jt[kt++] = gr, jt[kt++] = Ln, Ln = e;
    var n = mr;
    e = gr;
    var i = 32 - Jt(n) - 1;
    n &= ~(1 << i), r += 1;
    var a = 32 - Jt(t) + i;
    if (30 < a) {
        var o = i - i % 5;
        a = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, mr = 1 << 32 - Jt(t) + i | r << i | n, gr = a + e
    } else mr = 1 << a | r << i | n, gr = e
}

function ch(e) {
    e.return !== null && (wn(e, 1), U1(e, 1, 0))
}

function fh(e) {
    for (; e === pl;) pl = fi[--di], fi[di] = null, hl = fi[--di], fi[di] = null;
    for (; e === Ln;) Ln = jt[--kt], jt[kt] = null, gr = jt[--kt], jt[kt] = null, mr = jt[--kt], jt[kt] = null
}
var St = null,
    xt = null,
    be = !1,
    Xt = null;

function W1(e, t) {
    var r = Mt(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
}

function Py(e, t) {
    switch (e.tag) {
        case 5:
            var r = e.type;
            return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, St = e, xt = Jr(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, St = e, xt = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Ln !== null ? {
                id: mr,
                overflow: gr
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824
            }, r = Mt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, St = e, xt = null, !0) : !1;
        default:
            return !1
    }
}

function id(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ad(e) {
    if (be) {
        var t = xt;
        if (t) {
            var r = t;
            if (!Py(e, t)) {
                if (id(e)) throw Error(z(418));
                t = Jr(r.nextSibling);
                var n = St;
                t && Py(e, t) ? W1(n, r) : (e.flags = e.flags & -4097 | 2, be = !1, St = e)
            }
        } else {
            if (id(e)) throw Error(z(418));
            e.flags = e.flags & -4097 | 2, be = !1, St = e
        }
    }
}

function Ay(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    St = e
}

function Au(e) {
    if (e !== St) return !1;
    if (!be) return Ay(e), be = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ed(e.type, e.memoizedProps)), t && (t = xt)) {
        if (id(e)) throw H1(), Error(z(418));
        for (; t;) W1(e, t), t = Jr(t.nextSibling)
    }
    if (Ay(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            xt = Jr(e.nextSibling);
                            break e
                        }
                        t--
                    } else r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            xt = null
        }
    } else xt = St ? Jr(e.stateNode.nextSibling) : null;
    return !0
}

function H1() {
    for (var e = xt; e;) e = Jr(e.nextSibling)
}

function ji() {
    xt = St = null, be = !1
}

function dh(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}
var HP = Nr.ReactCurrentBatchConfig;

function _a(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(z(309));
                var n = r.stateNode
            }
            if (!n) throw Error(z(147, e));
            var i = n,
                a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
                var u = i.refs;
                o === null ? delete u[a] : u[a] = o
            }, t._stringRef = a, t)
        }
        if (typeof e != "string") throw Error(z(284));
        if (!r._owner) throw Error(z(290, e))
    }
    return e
}

function Eu(e, t) {
    throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ey(e) {
    var t = e._init;
    return t(e._payload)
}

function V1(e) {
    function t(m, v) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [v], m.flags |= 16) : g.push(v)
        }
    }

    function r(m, v) {
        if (!e) return null;
        for (; v !== null;) t(m, v), v = v.sibling;
        return null
    }

    function n(m, v) {
        for (m = new Map; v !== null;) v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
        return m
    }

    function i(m, v) {
        return m = nn(m, v), m.index = 0, m.sibling = null, m
    }

    function a(m, v, g) {
        return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < v ? (m.flags |= 2, v) : g) : (m.flags |= 2, v)) : (m.flags |= 1048576, v)
    }

    function o(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function u(m, v, g, S) {
        return v === null || v.tag !== 6 ? (v = ef(g, m.mode, S), v.return = m, v) : (v = i(v, g), v.return = m, v)
    }

    function l(m, v, g, S) {
        var b = g.type;
        return b === ai ? f(m, v, g.props.children, S, g.key) : v !== null && (v.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Fr && Ey(b) === v.type) ? (S = i(v, g.props), S.ref = _a(m, v, g), S.return = m, S) : (S = tl(g.type, g.key, g.props, null, m.mode, S), S.ref = _a(m, v, g), S.return = m, S)
    }

    function s(m, v, g, S) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== g.containerInfo || v.stateNode.implementation !== g.implementation ? (v = tf(g, m.mode, S), v.return = m, v) : (v = i(v, g.children || []), v.return = m, v)
    }

    function f(m, v, g, S, b) {
        return v === null || v.tag !== 7 ? (v = Mn(g, m.mode, S, b), v.return = m, v) : (v = i(v, g), v.return = m, v)
    }

    function c(m, v, g) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return v = ef("" + v, m.mode, g), v.return = m, v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case yu:
                    return g = tl(v.type, v.key, v.props, null, m.mode, g), g.ref = _a(m, null, v), g.return = m, g;
                case ii:
                    return v = tf(v, m.mode, g), v.return = m, v;
                case Fr:
                    var S = v._init;
                    return c(m, S(v._payload), g)
            }
            if (Ra(v) || ba(v)) return v = Mn(v, m.mode, g, null), v.return = m, v;
            Eu(m, v)
        }
        return null
    }

    function d(m, v, g, S) {
        var b = v !== null ? v.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return b !== null ? null : u(m, v, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case yu:
                    return g.key === b ? l(m, v, g, S) : null;
                case ii:
                    return g.key === b ? s(m, v, g, S) : null;
                case Fr:
                    return b = g._init, d(m, v, b(g._payload), S)
            }
            if (Ra(g) || ba(g)) return b !== null ? null : f(m, v, g, S, null);
            Eu(m, g)
        }
        return null
    }

    function p(m, v, g, S, b) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(g) || null, u(v, m, "" + S, b);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case yu:
                    return m = m.get(S.key === null ? g : S.key) || null, l(v, m, S, b);
                case ii:
                    return m = m.get(S.key === null ? g : S.key) || null, s(v, m, S, b);
                case Fr:
                    var x = S._init;
                    return p(m, v, g, x(S._payload), b)
            }
            if (Ra(S) || ba(S)) return m = m.get(g) || null, f(v, m, S, b, null);
            Eu(v, S)
        }
        return null
    }

    function h(m, v, g, S) {
        for (var b = null, x = null, O = v, _ = v = 0, P = null; O !== null && _ < g.length; _++) {
            O.index > _ ? (P = O, O = null) : P = O.sibling;
            var $ = d(m, O, g[_], S);
            if ($ === null) {
                O === null && (O = P);
                break
            }
            e && O && $.alternate === null && t(m, O), v = a($, v, _), x === null ? b = $ : x.sibling = $, x = $, O = P
        }
        if (_ === g.length) return r(m, O), be && wn(m, _), b;
        if (O === null) {
            for (; _ < g.length; _++) O = c(m, g[_], S), O !== null && (v = a(O, v, _), x === null ? b = O : x.sibling = O, x = O);
            return be && wn(m, _), b
        }
        for (O = n(m, O); _ < g.length; _++) P = p(O, m, _, g[_], S), P !== null && (e && P.alternate !== null && O.delete(P.key === null ? _ : P.key), v = a(P, v, _), x === null ? b = P : x.sibling = P, x = P);
        return e && O.forEach(function(E) {
            return t(m, E)
        }), be && wn(m, _), b
    }

    function y(m, v, g, S) {
        var b = ba(g);
        if (typeof b != "function") throw Error(z(150));
        if (g = b.call(g), g == null) throw Error(z(151));
        for (var x = b = null, O = v, _ = v = 0, P = null, $ = g.next(); O !== null && !$.done; _++, $ = g.next()) {
            O.index > _ ? (P = O, O = null) : P = O.sibling;
            var E = d(m, O, $.value, S);
            if (E === null) {
                O === null && (O = P);
                break
            }
            e && O && E.alternate === null && t(m, O), v = a(E, v, _), x === null ? b = E : x.sibling = E, x = E, O = P
        }
        if ($.done) return r(m, O), be && wn(m, _), b;
        if (O === null) {
            for (; !$.done; _++, $ = g.next()) $ = c(m, $.value, S), $ !== null && (v = a($, v, _), x === null ? b = $ : x.sibling = $, x = $);
            return be && wn(m, _), b
        }
        for (O = n(m, O); !$.done; _++, $ = g.next()) $ = p(O, m, _, $.value, S), $ !== null && (e && $.alternate !== null && O.delete($.key === null ? _ : $.key), v = a($, v, _), x === null ? b = $ : x.sibling = $, x = $);
        return e && O.forEach(function(T) {
            return t(m, T)
        }), be && wn(m, _), b
    }

    function w(m, v, g, S) {
        if (typeof g == "object" && g !== null && g.type === ai && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case yu:
                    e: {
                        for (var b = g.key, x = v; x !== null;) {
                            if (x.key === b) {
                                if (b = g.type, b === ai) {
                                    if (x.tag === 7) {
                                        r(m, x.sibling), v = i(x, g.props.children), v.return = m, m = v;
                                        break e
                                    }
                                } else if (x.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Fr && Ey(b) === x.type) {
                                    r(m, x.sibling), v = i(x, g.props), v.ref = _a(m, x, g), v.return = m, m = v;
                                    break e
                                }
                                r(m, x);
                                break
                            } else t(m, x);
                            x = x.sibling
                        }
                        g.type === ai ? (v = Mn(g.props.children, m.mode, S, g.key), v.return = m, m = v) : (S = tl(g.type, g.key, g.props, null, m.mode, S), S.ref = _a(m, v, g), S.return = m, m = S)
                    }
                    return o(m);
                case ii:
                    e: {
                        for (x = g.key; v !== null;) {
                            if (v.key === x)
                                if (v.tag === 4 && v.stateNode.containerInfo === g.containerInfo && v.stateNode.implementation === g.implementation) {
                                    r(m, v.sibling), v = i(v, g.children || []), v.return = m, m = v;
                                    break e
                                } else {
                                    r(m, v);
                                    break
                                }
                            else t(m, v);
                            v = v.sibling
                        }
                        v = tf(g, m.mode, S),
                        v.return = m,
                        m = v
                    }
                    return o(m);
                case Fr:
                    return x = g._init, w(m, v, x(g._payload), S)
            }
            if (Ra(g)) return h(m, v, g, S);
            if (ba(g)) return y(m, v, g, S);
            Eu(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, v !== null && v.tag === 6 ? (r(m, v.sibling), v = i(v, g), v.return = m, m = v) : (r(m, v), v = ef(g, m.mode, S), v.return = m, m = v), o(m)) : r(m, v)
    }
    return w
}
var ki = V1(!0),
    K1 = V1(!1),
    vl = cn(null),
    yl = null,
    pi = null,
    ph = null;

function hh() {
    ph = pi = yl = null
}

function vh(e) {
    var t = vl.current;
    me(vl), e._currentValue = t
}

function od(e, t, r) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
        e = e.return
    }
}

function Oi(e, t) {
    yl = e, ph = pi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ct = !0), e.firstContext = null)
}

function Rt(e) {
    var t = e._currentValue;
    if (ph !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, pi === null) {
            if (yl === null) throw Error(z(308));
            pi = e, yl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else pi = pi.next = e;
    return t
}
var An = null;

function yh(e) {
    An === null ? An = [e] : An.push(e)
}

function G1(e, t, r, n) {
    var i = t.interleaved;
    return i === null ? (r.next = r, yh(t)) : (r.next = i.next, i.next = r), t.interleaved = r, Tr(e, n)
}

function Tr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var Ur = !1;

function mh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function q1(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Sr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function en(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, ne & 2) {
        var i = n.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, Tr(e, r)
    }
    return i = n.interleaved, i === null ? (t.next = t, yh(n)) : (t.next = i.next, i.next = t), n.interleaved = t, Tr(e, r)
}

function Xu(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, rh(e, r)
    }
}

function $y(e, t) {
    var r = e.updateQueue,
        n = e.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
        var i = null,
            a = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var o = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                a === null ? i = a = o : a = a.next = o, r = r.next
            } while (r !== null);
            a === null ? i = a = t : a = a.next = t
        } else i = a = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: n.shared,
            effects: n.effects
        }, e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
}

function ml(e, t, r, n) {
    var i = e.updateQueue;
    Ur = !1;
    var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        u = i.shared.pending;
    if (u !== null) {
        i.shared.pending = null;
        var l = u,
            s = l.next;
        l.next = null, o === null ? a = s : o.next = s, o = l;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, u = f.lastBaseUpdate, u !== o && (u === null ? f.firstBaseUpdate = s : u.next = s, f.lastBaseUpdate = l))
    }
    if (a !== null) {
        var c = i.baseState;
        o = 0, f = s = l = null, u = a;
        do {
            var d = u.lane,
                p = u.eventTime;
            if ((n & d) === d) {
                f !== null && (f = f.next = {
                    eventTime: p,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var h = e,
                        y = u;
                    switch (d = t, p = r, y.tag) {
                        case 1:
                            if (h = y.payload, typeof h == "function") {
                                c = h.call(p, c, d);
                                break e
                            }
                            c = h;
                            break e;
                        case 3:
                            h.flags = h.flags & -65537 | 128;
                        case 0:
                            if (h = y.payload, d = typeof h == "function" ? h.call(p, c, d) : h, d == null) break e;
                            c = Oe({}, c, d);
                            break e;
                        case 2:
                            Ur = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [u] : d.push(u))
            } else p = {
                eventTime: p,
                lane: d,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, f === null ? (s = f = p, l = c) : f = f.next = p, o |= d;
            if (u = u.next, u === null) {
                if (u = i.shared.pending, u === null) break;
                d = u, u = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
            }
        } while (!0);
        if (f === null && (l = c), i.baseState = l, i.firstBaseUpdate = s, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else a === null && (i.shared.lanes = 0);
        Bn |= o, e.lanes = o, e.memoizedState = c
    }
}

function Ty(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t],
                i = n.callback;
            if (i !== null) {
                if (n.callback = null, n = r, typeof i != "function") throw Error(z(191, i));
                i.call(n)
            }
        }
}
var iu = {},
    lr = cn(iu),
    ho = cn(iu),
    vo = cn(iu);

function En(e) {
    if (e === iu) throw Error(z(174));
    return e
}

function gh(e, t) {
    switch (pe(vo, t), pe(ho, e), pe(lr, iu), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : zf(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zf(t, e)
    }
    me(lr), pe(lr, t)
}

function Mi() {
    me(lr), me(ho), me(vo)
}

function X1(e) {
    En(vo.current);
    var t = En(lr.current),
        r = zf(t, e.type);
    t !== r && (pe(ho, e), pe(lr, r))
}

function bh(e) {
    ho.current === e && (me(lr), me(ho))
}
var xe = cn(0);

function gl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var qc = [];

function wh() {
    for (var e = 0; e < qc.length; e++) qc[e]._workInProgressVersionPrimary = null;
    qc.length = 0
}
var Yu = Nr.ReactCurrentDispatcher,
    Xc = Nr.ReactCurrentBatchConfig,
    Rn = 0,
    Se = null,
    Le = null,
    Ue = null,
    bl = !1,
    Ga = !1,
    yo = 0,
    VP = 0;

function Ye() {
    throw Error(z(321))
}

function xh(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!tr(e[r], t[r])) return !1;
    return !0
}

function Sh(e, t, r, n, i, a) {
    if (Rn = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yu.current = e === null || e.memoizedState === null ? XP : YP, e = r(n, i), Ga) {
        a = 0;
        do {
            if (Ga = !1, yo = 0, 25 <= a) throw Error(z(301));
            a += 1, Ue = Le = null, t.updateQueue = null, Yu.current = QP, e = r(n, i)
        } while (Ga)
    }
    if (Yu.current = wl, t = Le !== null && Le.next !== null, Rn = 0, Ue = Le = Se = null, bl = !1, t) throw Error(z(300));
    return e
}

function Oh() {
    var e = yo !== 0;
    return yo = 0, e
}

function ir() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ue === null ? Se.memoizedState = Ue = e : Ue = Ue.next = e, Ue
}

function Bt() {
    if (Le === null) {
        var e = Se.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Le.next;
    var t = Ue === null ? Se.memoizedState : Ue.next;
    if (t !== null) Ue = t, Le = e;
    else {
        if (e === null) throw Error(z(310));
        Le = e, e = {
            memoizedState: Le.memoizedState,
            baseState: Le.baseState,
            baseQueue: Le.baseQueue,
            queue: Le.queue,
            next: null
        }, Ue === null ? Se.memoizedState = Ue = e : Ue = Ue.next = e
    }
    return Ue
}

function mo(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Yc(e) {
    var t = Bt(),
        r = t.queue;
    if (r === null) throw Error(z(311));
    r.lastRenderedReducer = e;
    var n = Le,
        i = n.baseQueue,
        a = r.pending;
    if (a !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = a.next, a.next = o
        }
        n.baseQueue = i = a, r.pending = null
    }
    if (i !== null) {
        a = i.next, n = n.baseState;
        var u = o = null,
            l = null,
            s = a;
        do {
            var f = s.lane;
            if ((Rn & f) === f) l !== null && (l = l.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), n = s.hasEagerState ? s.eagerState : e(n, s.action);
            else {
                var c = {
                    lane: f,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                l === null ? (u = l = c, o = n) : l = l.next = c, Se.lanes |= f, Bn |= f
            }
            s = s.next
        } while (s !== null && s !== a);
        l === null ? o = n : l.next = u, tr(n, t.memoizedState) || (ct = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = l, r.lastRenderedState = n
    }
    if (e = r.interleaved, e !== null) {
        i = e;
        do a = i.lane, Se.lanes |= a, Bn |= a, i = i.next; while (i !== e)
    } else i === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}

function Qc(e) {
    var t = Bt(),
        r = t.queue;
    if (r === null) throw Error(z(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
        i = r.pending,
        a = t.memoizedState;
    if (i !== null) {
        r.pending = null;
        var o = i = i.next;
        do a = e(a, o.action), o = o.next; while (o !== i);
        tr(a, t.memoizedState) || (ct = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a
    }
    return [a, n]
}

function Y1() {}

function Q1(e, t) {
    var r = Se,
        n = Bt(),
        i = t(),
        a = !tr(n.memoizedState, i);
    if (a && (n.memoizedState = i, ct = !0), n = n.queue, _h(ew.bind(null, r, n, e), [e]), n.getSnapshot !== t || a || Ue !== null && Ue.memoizedState.tag & 1) {
        if (r.flags |= 2048, go(9, J1.bind(null, r, n, i, t), void 0, null), We === null) throw Error(z(349));
        Rn & 30 || Z1(r, t, i)
    }
    return i
}

function Z1(e, t, r) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: r
    }, t = Se.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Se.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e))
}

function J1(e, t, r, n) {
    t.value = r, t.getSnapshot = n, tw(t) && rw(e)
}

function ew(e, t, r) {
    return r(function() {
        tw(t) && rw(e)
    })
}

function tw(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !tr(e, r)
    } catch {
        return !0
    }
}

function rw(e) {
    var t = Tr(e, 1);
    t !== null && er(t, e, 1, -1)
}

function Cy(e) {
    var t = ir();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mo,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = qP.bind(null, Se, e), [t.memoizedState, e]
}

function go(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    }, t = Se.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Se.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
}

function nw() {
    return Bt().memoizedState
}

function Qu(e, t, r, n) {
    var i = ir();
    Se.flags |= e, i.memoizedState = go(1 | t, r, void 0, n === void 0 ? null : n)
}

function js(e, t, r, n) {
    var i = Bt();
    n = n === void 0 ? null : n;
    var a = void 0;
    if (Le !== null) {
        var o = Le.memoizedState;
        if (a = o.destroy, n !== null && xh(n, o.deps)) {
            i.memoizedState = go(t, r, a, n);
            return
        }
    }
    Se.flags |= e, i.memoizedState = go(1 | t, r, a, n)
}

function jy(e, t) {
    return Qu(8390656, 8, e, t)
}

function _h(e, t) {
    return js(2048, 8, e, t)
}

function iw(e, t) {
    return js(4, 2, e, t)
}

function aw(e, t) {
    return js(4, 4, e, t)
}

function ow(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function uw(e, t, r) {
    return r = r != null ? r.concat([e]) : null, js(4, 4, ow.bind(null, t, e), r)
}

function Ph() {}

function lw(e, t) {
    var r = Bt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && xh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
}

function sw(e, t) {
    var r = Bt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && xh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
}

function cw(e, t, r) {
    return Rn & 21 ? (tr(r, t) || (r = v1(), Se.lanes |= r, Bn |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ct = !0), e.memoizedState = r)
}

function KP(e, t) {
    var r = ue;
    ue = r !== 0 && 4 > r ? r : 4, e(!0);
    var n = Xc.transition;
    Xc.transition = {};
    try {
        e(!1), t()
    } finally {
        ue = r, Xc.transition = n
    }
}

function fw() {
    return Bt().memoizedState
}

function GP(e, t, r) {
    var n = rn(e);
    if (r = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, dw(e)) pw(t, r);
    else if (r = G1(e, t, r, n), r !== null) {
        var i = at();
        er(r, e, n, i), hw(r, t, n)
    }
}

function qP(e, t, r) {
    var n = rn(e),
        i = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (dw(e)) pw(t, i);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
            var o = t.lastRenderedState,
                u = a(o, r);
            if (i.hasEagerState = !0, i.eagerState = u, tr(u, o)) {
                var l = t.interleaved;
                l === null ? (i.next = i, yh(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        r = G1(e, t, i, n), r !== null && (i = at(), er(r, e, n, i), hw(r, t, n))
    }
}

function dw(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se
}

function pw(e, t) {
    Ga = bl = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
}

function hw(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, rh(e, r)
    }
}
var wl = {
        readContext: Rt,
        useCallback: Ye,
        useContext: Ye,
        useEffect: Ye,
        useImperativeHandle: Ye,
        useInsertionEffect: Ye,
        useLayoutEffect: Ye,
        useMemo: Ye,
        useReducer: Ye,
        useRef: Ye,
        useState: Ye,
        useDebugValue: Ye,
        useDeferredValue: Ye,
        useTransition: Ye,
        useMutableSource: Ye,
        useSyncExternalStore: Ye,
        useId: Ye,
        unstable_isNewReconciler: !1
    },
    XP = {
        readContext: Rt,
        useCallback: function(e, t) {
            return ir().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Rt,
        useEffect: jy,
        useImperativeHandle: function(e, t, r) {
            return r = r != null ? r.concat([e]) : null, Qu(4194308, 4, ow.bind(null, t, e), r)
        },
        useLayoutEffect: function(e, t) {
            return Qu(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Qu(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var r = ir();
            return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
        },
        useReducer: function(e, t, r) {
            var n = ir();
            return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, n.queue = e, e = e.dispatch = GP.bind(null, Se, e), [n.memoizedState, e]
        },
        useRef: function(e) {
            var t = ir();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Cy,
        useDebugValue: Ph,
        useDeferredValue: function(e) {
            return ir().memoizedState = e
        },
        useTransition: function() {
            var e = Cy(!1),
                t = e[0];
            return e = KP.bind(null, e[1]), ir().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, r) {
            var n = Se,
                i = ir();
            if (be) {
                if (r === void 0) throw Error(z(407));
                r = r()
            } else {
                if (r = t(), We === null) throw Error(z(349));
                Rn & 30 || Z1(n, t, r)
            }
            i.memoizedState = r;
            var a = {
                value: r,
                getSnapshot: t
            };
            return i.queue = a, jy(ew.bind(null, n, a, e), [e]), n.flags |= 2048, go(9, J1.bind(null, n, a, r, t), void 0, null), r
        },
        useId: function() {
            var e = ir(),
                t = We.identifierPrefix;
            if (be) {
                var r = gr,
                    n = mr;
                r = (n & ~(1 << 32 - Jt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = yo++, 0 < r && (t += "H" + r.toString(32)), t += ":"
            } else r = VP++, t = ":" + t + "r" + r.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    YP = {
        readContext: Rt,
        useCallback: lw,
        useContext: Rt,
        useEffect: _h,
        useImperativeHandle: uw,
        useInsertionEffect: iw,
        useLayoutEffect: aw,
        useMemo: sw,
        useReducer: Yc,
        useRef: nw,
        useState: function() {
            return Yc(mo)
        },
        useDebugValue: Ph,
        useDeferredValue: function(e) {
            var t = Bt();
            return cw(t, Le.memoizedState, e)
        },
        useTransition: function() {
            var e = Yc(mo)[0],
                t = Bt().memoizedState;
            return [e, t]
        },
        useMutableSource: Y1,
        useSyncExternalStore: Q1,
        useId: fw,
        unstable_isNewReconciler: !1
    },
    QP = {
        readContext: Rt,
        useCallback: lw,
        useContext: Rt,
        useEffect: _h,
        useImperativeHandle: uw,
        useInsertionEffect: iw,
        useLayoutEffect: aw,
        useMemo: sw,
        useReducer: Qc,
        useRef: nw,
        useState: function() {
            return Qc(mo)
        },
        useDebugValue: Ph,
        useDeferredValue: function(e) {
            var t = Bt();
            return Le === null ? t.memoizedState = e : cw(t, Le.memoizedState, e)
        },
        useTransition: function() {
            var e = Qc(mo)[0],
                t = Bt().memoizedState;
            return [e, t]
        },
        useMutableSource: Y1,
        useSyncExternalStore: Q1,
        useId: fw,
        unstable_isNewReconciler: !1
    };

function Vt(e, t) {
    if (e && e.defaultProps) {
        t = Oe({}, t), e = e.defaultProps;
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}

function ud(e, t, r, n) {
    t = e.memoizedState, r = r(n, t), r = r == null ? t : Oe({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
}
var ks = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Gn(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = at(),
            i = rn(e),
            a = Sr(n, i);
        a.payload = t, r != null && (a.callback = r), t = en(e, a, i), t !== null && (er(t, e, i, n), Xu(t, e, i))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = at(),
            i = rn(e),
            a = Sr(n, i);
        a.tag = 1, a.payload = t, r != null && (a.callback = r), t = en(e, a, i), t !== null && (er(t, e, i, n), Xu(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = at(),
            n = rn(e),
            i = Sr(r, n);
        i.tag = 2, t != null && (i.callback = t), t = en(e, i, n), t !== null && (er(t, e, n, r), Xu(t, e, n))
    }
};

function ky(e, t, r, n, i, a, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, a, o) : t.prototype && t.prototype.isPureReactComponent ? !so(r, n) || !so(i, a) : !0
}

function vw(e, t, r) {
    var n = !1,
        i = ln,
        a = t.contextType;
    return typeof a == "object" && a !== null ? a = Rt(a) : (i = pt(t) ? Dn : rt.current, n = t.contextTypes, a = (n = n != null) ? Ci(e, i) : ln), t = new t(r, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ks, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function My(e, t, r, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && ks.enqueueReplaceState(t, t.state, null)
}

function ld(e, t, r, n) {
    var i = e.stateNode;
    i.props = r, i.state = e.memoizedState, i.refs = {}, mh(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? i.context = Rt(a) : (a = pt(t) ? Dn : rt.current, i.context = Ci(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ud(e, t, a, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ks.enqueueReplaceState(i, i.state, null), ml(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ii(e, t) {
    try {
        var r = "",
            n = t;
        do r += P_(n), n = n.return; while (n);
        var i = r
    } catch (a) {
        i = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Zc(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ? ? null,
        digest: t ? ? null
    }
}

function sd(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var ZP = typeof WeakMap == "function" ? WeakMap : Map;

function yw(e, t, r) {
    r = Sr(-1, r), r.tag = 3, r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        Sl || (Sl = !0, bd = n), sd(e, t)
    }, r
}

function mw(e, t, r) {
    r = Sr(-1, r), r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var i = t.value;
        r.payload = function() {
            return n(i)
        }, r.callback = function() {
            sd(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
        sd(e, t), typeof n != "function" && (tn === null ? tn = new Set([this]) : tn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), r
}

function Iy(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new ZP;
        var i = new Set;
        n.set(t, i)
    } else i = n.get(t), i === void 0 && (i = new Set, n.set(t, i));
    i.has(r) || (i.add(r), e = dA.bind(null, e, t, r), t.then(e, e))
}

function Ny(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Dy(e, t, r, n, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Sr(-1, 1), t.tag = 2, en(r, t, 1))), r.lanes |= 1), e)
}
var JP = Nr.ReactCurrentOwner,
    ct = !1;

function nt(e, t, r, n) {
    t.child = e === null ? K1(t, null, r, n) : ki(t, e.child, r, n)
}

function Ly(e, t, r, n, i) {
    r = r.render;
    var a = t.ref;
    return Oi(t, i), n = Sh(e, t, r, n, a, i), r = Oh(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Cr(e, t, i)) : (be && r && ch(t), t.flags |= 1, nt(e, t, n, i), t.child)
}

function Ry(e, t, r, n, i) {
    if (e === null) {
        var a = r.type;
        return typeof a == "function" && !Mh(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, gw(e, t, a, n, i)) : (e = tl(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (a = e.child, !(e.lanes & i)) {
        var o = a.memoizedProps;
        if (r = r.compare, r = r !== null ? r : so, r(o, n) && e.ref === t.ref) return Cr(e, t, i)
    }
    return t.flags |= 1, e = nn(a, n), e.ref = t.ref, e.return = t, t.child = e
}

function gw(e, t, r, n, i) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (so(a, n) && e.ref === t.ref)
            if (ct = !1, t.pendingProps = n = a, (e.lanes & i) !== 0) e.flags & 131072 && (ct = !0);
            else return t.lanes = e.lanes, Cr(e, t, i)
    }
    return cd(e, t, r, n, i)
}

function bw(e, t, r) {
    var n = t.pendingProps,
        i = n.children,
        a = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, pe(vi, gt), gt |= r;
        else {
            if (!(r & 1073741824)) return e = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, pe(vi, gt), gt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, n = a !== null ? a.baseLanes : r, pe(vi, gt), gt |= n
        }
    else a !== null ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, pe(vi, gt), gt |= n;
    return nt(e, t, i, r), t.child
}

function ww(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
}

function cd(e, t, r, n, i) {
    var a = pt(r) ? Dn : rt.current;
    return a = Ci(t, a), Oi(t, i), r = Sh(e, t, r, n, a, i), n = Oh(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Cr(e, t, i)) : (be && n && ch(t), t.flags |= 1, nt(e, t, r, i), t.child)
}

function By(e, t, r, n, i) {
    if (pt(r)) {
        var a = !0;
        dl(t)
    } else a = !1;
    if (Oi(t, i), t.stateNode === null) Zu(e, t), vw(t, r, n), ld(t, r, n, i), n = !0;
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var l = o.context,
            s = r.contextType;
        typeof s == "object" && s !== null ? s = Rt(s) : (s = pt(r) ? Dn : rt.current, s = Ci(t, s));
        var f = r.getDerivedStateFromProps,
            c = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== n || l !== s) && My(t, o, n, s), Ur = !1;
        var d = t.memoizedState;
        o.state = d, ml(t, n, o, i), l = t.memoizedState, u !== n || d !== l || dt.current || Ur ? (typeof f == "function" && (ud(t, r, f, n), l = t.memoizedState), (u = Ur || ky(t, r, u, n, d, l, s)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), o.props = n, o.state = l, o.context = s, n = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
    } else {
        o = t.stateNode, q1(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : Vt(t.type, u), o.props = s, c = t.pendingProps, d = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = Rt(l) : (l = pt(r) ? Dn : rt.current, l = Ci(t, l));
        var p = r.getDerivedStateFromProps;
        (f = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== c || d !== l) && My(t, o, n, l), Ur = !1, d = t.memoizedState, o.state = d, ml(t, n, o, i);
        var h = t.memoizedState;
        u !== c || d !== h || dt.current || Ur ? (typeof p == "function" && (ud(t, r, p, n), h = t.memoizedState), (s = Ur || ky(t, r, s, n, d, h, l) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, h, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, h, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = h), o.props = n, o.state = h, o.context = l, n = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), n = !1)
    }
    return fd(e, t, r, n, a, i)
}

function fd(e, t, r, n, i, a) {
    ww(e, t);
    var o = (t.flags & 128) !== 0;
    if (!n && !o) return i && _y(t, r, !1), Cr(e, t, a);
    n = t.stateNode, JP.current = t;
    var u = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && o ? (t.child = ki(t, e.child, null, a), t.child = ki(t, null, u, a)) : nt(e, t, u, a), t.memoizedState = n.state, i && _y(t, r, !0), t.child
}

function xw(e) {
    var t = e.stateNode;
    t.pendingContext ? Oy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Oy(e, t.context, !1), gh(e, t.containerInfo)
}

function zy(e, t, r, n, i) {
    return ji(), dh(i), t.flags |= 256, nt(e, t, r, n), t.child
}
var dd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function pd(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Sw(e, t, r) {
    var n = t.pendingProps,
        i = xe.current,
        a = !1,
        o = (t.flags & 128) !== 0,
        u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), pe(xe, i & 1), e === null) return ad(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = n.children, e = n.fallback, a ? (n = t.mode, a = t.child, o = {
        mode: "hidden",
        children: o
    }, !(n & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ns(o, n, 0, null), e = Mn(e, n, r, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = pd(r), t.memoizedState = dd, e) : Ah(t, o));
    if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return eA(e, t, o, n, u, i, r);
    if (a) {
        a = n.fallback, o = t.mode, i = e.child, u = i.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(o & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = nn(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? a = nn(u, a) : (a = Mn(a, o, r, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, o = e.child.memoizedState, o = o === null ? pd(r) : {
            baseLanes: o.baseLanes | r,
            cachePool: null,
            transitions: o.transitions
        }, a.memoizedState = o, a.childLanes = e.childLanes & ~r, t.memoizedState = dd, n
    }
    return a = e.child, e = a.sibling, n = nn(a, {
        mode: "visible",
        children: n.children
    }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n
}

function Ah(e, t) {
    return t = Ns({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function $u(e, t, r, n) {
    return n !== null && dh(n), ki(t, e.child, null, r), e = Ah(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function eA(e, t, r, n, i, a, o) {
    if (r) return t.flags & 256 ? (t.flags &= -257, n = Zc(Error(z(422))), $u(e, t, o, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = n.fallback, i = t.mode, n = Ns({
        mode: "visible",
        children: n.children
    }, i, 0, null), a = Mn(a, i, o, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, t.mode & 1 && ki(t, e.child, null, o), t.child.memoizedState = pd(o), t.memoizedState = dd, a);
    if (!(t.mode & 1)) return $u(e, t, o, null);
    if (i.data === "$!") {
        if (n = i.nextSibling && i.nextSibling.dataset, n) var u = n.dgst;
        return n = u, a = Error(z(419)), n = Zc(a, n, void 0), $u(e, t, o, n)
    }
    if (u = (o & e.childLanes) !== 0, ct || u) {
        if (n = We, n !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, Tr(e, i), er(n, e, i, -1))
        }
        return kh(), n = Zc(Error(z(421))), $u(e, t, o, n)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pA.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, xt = Jr(i.nextSibling), St = t, be = !0, Xt = null, e !== null && (jt[kt++] = mr, jt[kt++] = gr, jt[kt++] = Ln, mr = e.id, gr = e.overflow, Ln = t), t = Ah(t, n.children), t.flags |= 4096, t)
}

function Fy(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), od(e.return, t, r)
}

function Jc(e, t, r, n, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = i)
}

function Ow(e, t, r) {
    var n = t.pendingProps,
        i = n.revealOrder,
        a = n.tail;
    if (nt(e, t, n.children, r), n = xe.current, n & 2) n = n & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Fy(e, r, t);
            else if (e.tag === 19) Fy(e, r, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        n &= 1
    }
    if (pe(xe, n), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (r = t.child, i = null; r !== null;) e = r.alternate, e !== null && gl(e) === null && (i = r), r = r.sibling;
            r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), Jc(t, !1, i, r, a);
            break;
        case "backwards":
            for (r = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && gl(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = r, r = i, i = e
            }
            Jc(t, !0, r, null, a);
            break;
        case "together":
            Jc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Zu(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Cr(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Bn |= t.lanes, !(r & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(z(153));
    if (t.child !== null) {
        for (e = t.child, r = nn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = nn(e, e.pendingProps), r.return = t;
        r.sibling = null
    }
    return t.child
}

function tA(e, t, r) {
    switch (t.tag) {
        case 3:
            xw(t), ji();
            break;
        case 5:
            X1(t);
            break;
        case 1:
            pt(t.type) && dl(t);
            break;
        case 4:
            gh(t, t.stateNode.containerInfo);
            break;
        case 10:
            var n = t.type._context,
                i = t.memoizedProps.value;
            pe(vl, n._currentValue), n._currentValue = i;
            break;
        case 13:
            if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (pe(xe, xe.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Sw(e, t, r) : (pe(xe, xe.current & 1), e = Cr(e, t, r), e !== null ? e.sibling : null);
            pe(xe, xe.current & 1);
            break;
        case 19:
            if (n = (r & t.childLanes) !== 0, e.flags & 128) {
                if (n) return Ow(e, t, r);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), pe(xe, xe.current), n) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, bw(e, t, r)
    }
    return Cr(e, t, r)
}
var _w, hd, Pw, Aw;
_w = function(e, t) {
    for (var r = t.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === t) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
hd = function() {};
Pw = function(e, t, r, n) {
    var i = e.memoizedProps;
    if (i !== n) {
        e = t.stateNode, En(lr.current);
        var a = null;
        switch (r) {
            case "input":
                i = Df(e, i), n = Df(e, n), a = [];
                break;
            case "select":
                i = Oe({}, i, {
                    value: void 0
                }), n = Oe({}, n, {
                    value: void 0
                }), a = [];
                break;
            case "textarea":
                i = Bf(e, i), n = Bf(e, n), a = [];
                break;
            default:
                typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = cl)
        }
        Ff(r, n);
        var o;
        r = null;
        for (s in i)
            if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
                if (s === "style") {
                    var u = i[s];
                    for (o in u) u.hasOwnProperty(o) && (r || (r = {}), r[o] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ro.hasOwnProperty(s) ? a || (a = []) : (a = a || []).push(s, null));
        for (s in n) {
            var l = n[s];
            if (u = i != null ? i[s] : void 0, n.hasOwnProperty(s) && l !== u && (l != null || u != null))
                if (s === "style")
                    if (u) {
                        for (o in u) !u.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
                        for (o in l) l.hasOwnProperty(o) && u[o] !== l[o] && (r || (r = {}), r[o] = l[o])
                    } else r || (a || (a = []), a.push(s, r)), r = l;
            else s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (a = a || []).push(s, l)) : s === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(s, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (ro.hasOwnProperty(s) ? (l != null && s === "onScroll" && he("scroll", e), a || u === l || (a = [])) : (a = a || []).push(s, l))
        }
        r && (a = a || []).push("style", r);
        var s = a;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
Aw = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
};

function Pa(e, t) {
    if (!be) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
    }
}

function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
    if (t)
        for (var i = e.child; i !== null;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= n, e.childLanes = r, t
}

function rA(e, t, r) {
    var n = t.pendingProps;
    switch (fh(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Qe(t), null;
        case 1:
            return pt(t.type) && fl(), Qe(t), null;
        case 3:
            return n = t.stateNode, Mi(), me(dt), me(rt), wh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Au(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xt !== null && (Sd(Xt), Xt = null))), hd(e, t), Qe(t), null;
        case 5:
            bh(t);
            var i = En(vo.current);
            if (r = t.type, e !== null && t.stateNode != null) Pw(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!n) {
                    if (t.stateNode === null) throw Error(z(166));
                    return Qe(t), null
                }
                if (e = En(lr.current), Au(t)) {
                    n = t.stateNode, r = t.type;
                    var a = t.memoizedProps;
                    switch (n[ar] = t, n[po] = a, e = (t.mode & 1) !== 0, r) {
                        case "dialog":
                            he("cancel", n), he("close", n);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            he("load", n);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < za.length; i++) he(za[i], n);
                            break;
                        case "source":
                            he("error", n);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            he("error", n), he("load", n);
                            break;
                        case "details":
                            he("toggle", n);
                            break;
                        case "input":
                            Yv(n, a), he("invalid", n);
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!a.multiple
                            }, he("invalid", n);
                            break;
                        case "textarea":
                            Zv(n, a), he("invalid", n)
                    }
                    Ff(r, a), i = null;
                    for (var o in a)
                        if (a.hasOwnProperty(o)) {
                            var u = a[o];
                            o === "children" ? typeof u == "string" ? n.textContent !== u && (a.suppressHydrationWarning !== !0 && Pu(n.textContent, u, e), i = ["children", u]) : typeof u == "number" && n.textContent !== "" + u && (a.suppressHydrationWarning !== !0 && Pu(n.textContent, u, e), i = ["children", "" + u]) : ro.hasOwnProperty(o) && u != null && o === "onScroll" && he("scroll", n)
                        }
                    switch (r) {
                        case "input":
                            mu(n), Qv(n, a, !0);
                            break;
                        case "textarea":
                            mu(n), Jv(n);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof a.onClick == "function" && (n.onclick = cl)
                    }
                    n = i, t.updateQueue = n, n !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = e1(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, {
                        is: n.is
                    }) : (e = o.createElement(r), r === "select" && (o = e, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r), e[ar] = t, e[po] = n, _w(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Uf(r, n), r) {
                            case "dialog":
                                he("cancel", e), he("close", e), i = n;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                he("load", e), i = n;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < za.length; i++) he(za[i], e);
                                i = n;
                                break;
                            case "source":
                                he("error", e), i = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                he("error", e), he("load", e), i = n;
                                break;
                            case "details":
                                he("toggle", e), i = n;
                                break;
                            case "input":
                                Yv(e, n), i = Df(e, n), he("invalid", e);
                                break;
                            case "option":
                                i = n;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!n.multiple
                                }, i = Oe({}, n, {
                                    value: void 0
                                }), he("invalid", e);
                                break;
                            case "textarea":
                                Zv(e, n), i = Bf(e, n), he("invalid", e);
                                break;
                            default:
                                i = n
                        }
                        Ff(r, i),
                        u = i;
                        for (a in u)
                            if (u.hasOwnProperty(a)) {
                                var l = u[a];
                                a === "style" ? n1(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && t1(e, l)) : a === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && no(e, l) : typeof l == "number" && no(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ro.hasOwnProperty(a) ? l != null && a === "onScroll" && he("scroll", e) : l != null && Yp(e, a, l, o))
                            }
                        switch (r) {
                            case "input":
                                mu(e), Qv(e, n, !1);
                                break;
                            case "textarea":
                                mu(e), Jv(e);
                                break;
                            case "option":
                                n.value != null && e.setAttribute("value", "" + un(n.value));
                                break;
                            case "select":
                                e.multiple = !!n.multiple, a = n.value, a != null ? bi(e, !!n.multiple, a, !1) : n.defaultValue != null && bi(e, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = cl)
                        }
                        switch (r) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n = !!n.autoFocus;
                                break e;
                            case "img":
                                n = !0;
                                break e;
                            default:
                                n = !1
                        }
                    }
                    n && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Qe(t), null;
        case 6:
            if (e && t.stateNode != null) Aw(e, t, e.memoizedProps, n);
            else {
                if (typeof n != "string" && t.stateNode === null) throw Error(z(166));
                if (r = En(vo.current), En(lr.current), Au(t)) {
                    if (n = t.stateNode, r = t.memoizedProps, n[ar] = t, (a = n.nodeValue !== r) && (e = St, e !== null)) switch (e.tag) {
                        case 3:
                            Pu(n.nodeValue, r, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Pu(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                    a && (t.flags |= 4)
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[ar] = t, t.stateNode = n
            }
            return Qe(t), null;
        case 13:
            if (me(xe), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (be && xt !== null && t.mode & 1 && !(t.flags & 128)) H1(), ji(), t.flags |= 98560, a = !1;
                else if (a = Au(t), n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!a) throw Error(z(318));
                        if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(z(317));
                        a[ar] = t
                    } else ji(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Qe(t), a = !1
                } else Xt !== null && (Sd(Xt), Xt = null), a = !0;
                if (!a) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || xe.current & 1 ? Re === 0 && (Re = 3) : kh())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
        case 4:
            return Mi(), hd(e, t), e === null && co(t.stateNode.containerInfo), Qe(t), null;
        case 10:
            return vh(t.type._context), Qe(t), null;
        case 17:
            return pt(t.type) && fl(), Qe(t), null;
        case 19:
            if (me(xe), a = t.memoizedState, a === null) return Qe(t), null;
            if (n = (t.flags & 128) !== 0, o = a.rendering, o === null)
                if (n) Pa(a, !1);
                else {
                    if (Re !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = gl(e), o !== null) {
                                for (t.flags |= 128, Pa(a, !1), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) a = r, e = n, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), r = r.sibling;
                                return pe(xe, xe.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && $e() > Ni && (t.flags |= 128, n = !0, Pa(a, !1), t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = gl(o), e !== null) {
                        if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Pa(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !be) return Qe(t), null
                    } else 2 * $e() - a.renderingStartTime > Ni && r !== 1073741824 && (t.flags |= 128, n = !0, Pa(a, !1), t.lanes = 4194304);
                a.isBackwards ? (o.sibling = t.child, t.child = o) : (r = a.last, r !== null ? r.sibling = o : t.child = o, a.last = o)
            }
            return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = $e(), t.sibling = null, r = xe.current, pe(xe, n ? r & 1 | 2 : r & 1), t) : (Qe(t), null);
        case 22:
        case 23:
            return jh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? gt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(z(156, t.tag))
}

function nA(e, t) {
    switch (fh(t), t.tag) {
        case 1:
            return pt(t.type) && fl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Mi(), me(dt), me(rt), wh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return bh(t), null;
        case 13:
            if (me(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(z(340));
                ji()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return me(xe), null;
        case 4:
            return Mi(), null;
        case 10:
            return vh(t.type._context), null;
        case 22:
        case 23:
            return jh(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Tu = !1,
    Je = !1,
    iA = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;

function hi(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function") try {
            r(null)
        } catch (n) {
            Pe(e, t, n)
        } else r.current = null
}

function vd(e, t, r) {
    try {
        r()
    } catch (n) {
        Pe(e, t, n)
    }
}
var Uy = !1;

function aA(e, t) {
    if (Zf = ul, e = j1(), sh(e)) {
        if ("selectionStart" in e) var r = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            r = (r = e.ownerDocument) && r.defaultView || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var i = n.anchorOffset,
                    a = n.focusNode;
                n = n.focusOffset;
                try {
                    r.nodeType, a.nodeType
                } catch {
                    r = null;
                    break e
                }
                var o = 0,
                    u = -1,
                    l = -1,
                    s = 0,
                    f = 0,
                    c = e,
                    d = null;
                t: for (;;) {
                    for (var p; c !== r || i !== 0 && c.nodeType !== 3 || (u = o + i), c !== a || n !== 0 && c.nodeType !== 3 || (l = o + n), c.nodeType === 3 && (o += c.nodeValue.length), (p = c.firstChild) !== null;) d = c, c = p;
                    for (;;) {
                        if (c === e) break t;
                        if (d === r && ++s === i && (u = o), d === a && ++f === n && (l = o), (p = c.nextSibling) !== null) break;
                        c = d, d = c.parentNode
                    }
                    c = p
                }
                r = u === -1 || l === -1 ? null : {
                    start: u,
                    end: l
                }
            } else r = null
        }
        r = r || {
            start: 0,
            end: 0
        }
    } else r = null;
    for (Jf = {
            focusedElem: e,
            selectionRange: r
        }, ul = !1, K = t; K !== null;)
        if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
        else
            for (; K !== null;) {
                t = K;
                try {
                    var h = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (h !== null) {
                                var y = h.memoizedProps,
                                    w = h.memoizedState,
                                    m = t.stateNode,
                                    v = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Vt(t.type, y), w);
                                m.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(z(163))
                    }
                } catch (S) {
                    Pe(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, K = e;
                    break
                }
                K = t.return
            }
    return h = Uy, Uy = !1, h
}

function qa(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
        var i = n = n.next;
        do {
            if ((i.tag & e) === e) {
                var a = i.destroy;
                i.destroy = void 0, a !== void 0 && vd(t, r, a)
            }
            i = i.next
        } while (i !== n)
    }
}

function Ms(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}

function yd(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
            case 5:
                e = r;
                break;
            default:
                e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Ew(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ew(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ar], delete t[po], delete t[rd], delete t[FP], delete t[UP])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function $w(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Wy(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || $w(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function md(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = cl));
    else if (n !== 4 && (e = e.child, e !== null))
        for (md(e, t, r), e = e.sibling; e !== null;) md(e, t, r), e = e.sibling
}

function gd(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child, e !== null))
        for (gd(e, t, r), e = e.sibling; e !== null;) gd(e, t, r), e = e.sibling
}
var Ke = null,
    Kt = !1;

function zr(e, t, r) {
    for (r = r.child; r !== null;) Tw(e, t, r), r = r.sibling
}

function Tw(e, t, r) {
    if (ur && typeof ur.onCommitFiberUnmount == "function") try {
        ur.onCommitFiberUnmount(Ps, r)
    } catch {}
    switch (r.tag) {
        case 5:
            Je || hi(r, t);
        case 6:
            var n = Ke,
                i = Kt;
            Ke = null, zr(e, t, r), Ke = n, Kt = i, Ke !== null && (Kt ? (e = Ke, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ke.removeChild(r.stateNode));
            break;
        case 18:
            Ke !== null && (Kt ? (e = Ke, r = r.stateNode, e.nodeType === 8 ? Kc(e.parentNode, r) : e.nodeType === 1 && Kc(e, r), uo(e)) : Kc(Ke, r.stateNode));
            break;
        case 4:
            n = Ke, i = Kt, Ke = r.stateNode.containerInfo, Kt = !0, zr(e, t, r), Ke = n, Kt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Je && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                i = n = n.next;
                do {
                    var a = i,
                        o = a.destroy;
                    a = a.tag, o !== void 0 && (a & 2 || a & 4) && vd(r, t, o), i = i.next
                } while (i !== n)
            }
            zr(e, t, r);
            break;
        case 1:
            if (!Je && (hi(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
            } catch (u) {
                Pe(r, t, u)
            }
            zr(e, t, r);
            break;
        case 21:
            zr(e, t, r);
            break;
        case 22:
            r.mode & 1 ? (Je = (n = Je) || r.memoizedState !== null, zr(e, t, r), Je = n) : zr(e, t, r);
            break;
        default:
            zr(e, t, r)
    }
}

function Hy(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new iA), t.forEach(function(n) {
            var i = hA.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(i, i))
        })
    }
}

function Wt(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var i = r[n];
            try {
                var a = e,
                    o = t,
                    u = o;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            Ke = u.stateNode, Kt = !1;
                            break e;
                        case 3:
                            Ke = u.stateNode.containerInfo, Kt = !0;
                            break e;
                        case 4:
                            Ke = u.stateNode.containerInfo, Kt = !0;
                            break e
                    }
                    u = u.return
                }
                if (Ke === null) throw Error(z(160));
                Tw(a, o, i), Ke = null, Kt = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (s) {
                Pe(i, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Cw(t, e), t = t.sibling
}

function Cw(e, t) {
    var r = e.alternate,
        n = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Wt(t, e), nr(e), n & 4) {
                try {
                    qa(3, e, e.return), Ms(3, e)
                } catch (y) {
                    Pe(e, e.return, y)
                }
                try {
                    qa(5, e, e.return)
                } catch (y) {
                    Pe(e, e.return, y)
                }
            }
            break;
        case 1:
            Wt(t, e), nr(e), n & 512 && r !== null && hi(r, r.return);
            break;
        case 5:
            if (Wt(t, e), nr(e), n & 512 && r !== null && hi(r, r.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    no(i, "")
                } catch (y) {
                    Pe(e, e.return, y)
                }
            }
            if (n & 4 && (i = e.stateNode, i != null)) {
                var a = e.memoizedProps,
                    o = r !== null ? r.memoizedProps : a,
                    u = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    u === "input" && a.type === "radio" && a.name != null && Zb(i, a), Uf(u, o);
                    var s = Uf(u, a);
                    for (o = 0; o < l.length; o += 2) {
                        var f = l[o],
                            c = l[o + 1];
                        f === "style" ? n1(i, c) : f === "dangerouslySetInnerHTML" ? t1(i, c) : f === "children" ? no(i, c) : Yp(i, f, c, s)
                    }
                    switch (u) {
                        case "input":
                            Lf(i, a);
                            break;
                        case "textarea":
                            Jb(i, a);
                            break;
                        case "select":
                            var d = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!a.multiple;
                            var p = a.value;
                            p != null ? bi(i, !!a.multiple, p, !1) : d !== !!a.multiple && (a.defaultValue != null ? bi(i, !!a.multiple, a.defaultValue, !0) : bi(i, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    i[po] = a
                } catch (y) {
                    Pe(e, e.return, y)
                }
            }
            break;
        case 6:
            if (Wt(t, e), nr(e), n & 4) {
                if (e.stateNode === null) throw Error(z(162));
                i = e.stateNode, a = e.memoizedProps;
                try {
                    i.nodeValue = a
                } catch (y) {
                    Pe(e, e.return, y)
                }
            }
            break;
        case 3:
            if (Wt(t, e), nr(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                uo(t.containerInfo)
            } catch (y) {
                Pe(e, e.return, y)
            }
            break;
        case 4:
            Wt(t, e), nr(e);
            break;
        case 13:
            Wt(t, e), nr(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Th = $e())), n & 4 && Hy(e);
            break;
        case 22:
            if (f = r !== null && r.memoizedState !== null, e.mode & 1 ? (Je = (s = Je) || f, Wt(t, e), Je = s) : Wt(t, e), nr(e), n & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !f && e.mode & 1)
                    for (K = e, f = e.child; f !== null;) {
                        for (c = K = f; K !== null;) {
                            switch (d = K, p = d.child, d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qa(4, d, d.return);
                                    break;
                                case 1:
                                    hi(d, d.return);
                                    var h = d.stateNode;
                                    if (typeof h.componentWillUnmount == "function") {
                                        n = d, r = d.return;
                                        try {
                                            t = n, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                        } catch (y) {
                                            Pe(n, r, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    hi(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Ky(c);
                                        continue
                                    }
                            }
                            p !== null ? (p.return = d, K = p) : Ky(c)
                        }
                        f = f.sibling
                    }
                e: for (f = null, c = e;;) {
                    if (c.tag === 5) {
                        if (f === null) {
                            f = c;
                            try {
                                i = c.stateNode, s ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (u = c.stateNode, l = c.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = r1("display", o))
                            } catch (y) {
                                Pe(e, e.return, y)
                            }
                        }
                    } else if (c.tag === 6) {
                        if (f === null) try {
                            c.stateNode.nodeValue = s ? "" : c.memoizedProps
                        } catch (y) {
                            Pe(e, e.return, y)
                        }
                    } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                        c.child.return = c, c = c.child;
                        continue
                    }
                    if (c === e) break e;
                    for (; c.sibling === null;) {
                        if (c.return === null || c.return === e) break e;
                        f === c && (f = null), c = c.return
                    }
                    f === c && (f = null), c.sibling.return = c.return, c = c.sibling
                }
            }
            break;
        case 19:
            Wt(t, e), nr(e), n & 4 && Hy(e);
            break;
        case 21:
            break;
        default:
            Wt(t, e), nr(e)
    }
}

function nr(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null;) {
                    if ($w(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(z(160))
            }
            switch (n.tag) {
                case 5:
                    var i = n.stateNode;
                    n.flags & 32 && (no(i, ""), n.flags &= -33);
                    var a = Wy(e);
                    gd(e, a, i);
                    break;
                case 3:
                case 4:
                    var o = n.stateNode.containerInfo,
                        u = Wy(e);
                    md(e, u, o);
                    break;
                default:
                    throw Error(z(161))
            }
        }
        catch (l) {
            Pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function oA(e, t, r) {
    K = e, jw(e)
}

function jw(e, t, r) {
    for (var n = (e.mode & 1) !== 0; K !== null;) {
        var i = K,
            a = i.child;
        if (i.tag === 22 && n) {
            var o = i.memoizedState !== null || Tu;
            if (!o) {
                var u = i.alternate,
                    l = u !== null && u.memoizedState !== null || Je;
                u = Tu;
                var s = Je;
                if (Tu = o, (Je = l) && !s)
                    for (K = i; K !== null;) o = K, l = o.child, o.tag === 22 && o.memoizedState !== null ? Gy(i) : l !== null ? (l.return = o, K = l) : Gy(i);
                for (; a !== null;) K = a, jw(a), a = a.sibling;
                K = i, Tu = u, Je = s
            }
            Vy(e)
        } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, K = a) : Vy(e)
    }
}

function Vy(e) {
    for (; K !== null;) {
        var t = K;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Je || Ms(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !Je)
                            if (r === null) n.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? r.memoizedProps : Vt(t.type, r.memoizedProps);
                                n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && Ty(t, a, n);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (r = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                            }
                            Ty(t, o, r)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = u;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && r.focus();
                                    break;
                                case "img":
                                    l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var f = s.memoizedState;
                                if (f !== null) {
                                    var c = f.dehydrated;
                                    c !== null && uo(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(z(163))
                }
                Je || t.flags & 512 && yd(t)
            } catch (d) {
                Pe(t, t.return, d)
            }
        }
        if (t === e) {
            K = null;
            break
        }
        if (r = t.sibling, r !== null) {
            r.return = t.return, K = r;
            break
        }
        K = t.return
    }
}

function Ky(e) {
    for (; K !== null;) {
        var t = K;
        if (t === e) {
            K = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return, K = r;
            break
        }
        K = t.return
    }
}

function Gy(e) {
    for (; K !== null;) {
        var t = K;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var r = t.return;
                    try {
                        Ms(4, t)
                    } catch (l) {
                        Pe(t, r, l)
                    }
                    break;
                case 1:
                    var n = t.stateNode;
                    if (typeof n.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            n.componentDidMount()
                        } catch (l) {
                            Pe(t, i, l)
                        }
                    }
                    var a = t.return;
                    try {
                        yd(t)
                    } catch (l) {
                        Pe(t, a, l)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        yd(t)
                    } catch (l) {
                        Pe(t, o, l)
                    }
            }
        } catch (l) {
            Pe(t, t.return, l)
        }
        if (t === e) {
            K = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, K = u;
            break
        }
        K = t.return
    }
}
var uA = Math.ceil,
    xl = Nr.ReactCurrentDispatcher,
    Eh = Nr.ReactCurrentOwner,
    Nt = Nr.ReactCurrentBatchConfig,
    ne = 0,
    We = null,
    je = null,
    qe = 0,
    gt = 0,
    vi = cn(0),
    Re = 0,
    bo = null,
    Bn = 0,
    Is = 0,
    $h = 0,
    Xa = null,
    st = null,
    Th = 0,
    Ni = 1 / 0,
    hr = null,
    Sl = !1,
    bd = null,
    tn = null,
    Cu = !1,
    qr = null,
    Ol = 0,
    Ya = 0,
    wd = null,
    Ju = -1,
    el = 0;

function at() {
    return ne & 6 ? $e() : Ju !== -1 ? Ju : Ju = $e()
}

function rn(e) {
    return e.mode & 1 ? ne & 2 && qe !== 0 ? qe & -qe : HP.transition !== null ? (el === 0 && (el = v1()), el) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : S1(e.type)), e) : 1
}

function er(e, t, r, n) {
    if (50 < Ya) throw Ya = 0, wd = null, Error(z(185));
    tu(e, r, n), (!(ne & 2) || e !== We) && (e === We && (!(ne & 2) && (Is |= r), Re === 4 && Vr(e, qe)), ht(e, n), r === 1 && ne === 0 && !(t.mode & 1) && (Ni = $e() + 500, Cs && fn()))
}

function ht(e, t) {
    var r = e.callbackNode;
    H_(e, t);
    var n = ol(e, e === We ? qe : 0);
    if (n === 0) r !== null && ry(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = n & -n, e.callbackPriority !== t) {
        if (r != null && ry(r), t === 1) e.tag === 0 ? WP(qy.bind(null, e)) : F1(qy.bind(null, e)), BP(function() {
            !(ne & 6) && fn()
        }), r = null;
        else {
            switch (y1(n)) {
                case 1:
                    r = th;
                    break;
                case 4:
                    r = p1;
                    break;
                case 16:
                    r = al;
                    break;
                case 536870912:
                    r = h1;
                    break;
                default:
                    r = al
            }
            r = Bw(r, kw.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = r
    }
}

function kw(e, t) {
    if (Ju = -1, el = 0, ne & 6) throw Error(z(327));
    var r = e.callbackNode;
    if (_i() && e.callbackNode !== r) return null;
    var n = ol(e, e === We ? qe : 0);
    if (n === 0) return null;
    if (n & 30 || n & e.expiredLanes || t) t = _l(e, n);
    else {
        t = n;
        var i = ne;
        ne |= 2;
        var a = Iw();
        (We !== e || qe !== t) && (hr = null, Ni = $e() + 500, kn(e, t));
        do try {
            cA();
            break
        } catch (u) {
            Mw(e, u)
        }
        while (!0);
        hh(), xl.current = a, ne = i, je !== null ? t = 0 : (We = null, qe = 0, t = Re)
    }
    if (t !== 0) {
        if (t === 2 && (i = Gf(e), i !== 0 && (n = i, t = xd(e, i))), t === 1) throw r = bo, kn(e, 0), Vr(e, n), ht(e, $e()), r;
        if (t === 6) Vr(e, n);
        else {
            if (i = e.current.alternate, !(n & 30) && !lA(i) && (t = _l(e, n), t === 2 && (a = Gf(e), a !== 0 && (n = a, t = xd(e, a))), t === 1)) throw r = bo, kn(e, 0), Vr(e, n), ht(e, $e()), r;
            switch (e.finishedWork = i, e.finishedLanes = n, t) {
                case 0:
                case 1:
                    throw Error(z(345));
                case 2:
                    xn(e, st, hr);
                    break;
                case 3:
                    if (Vr(e, n), (n & 130023424) === n && (t = Th + 500 - $e(), 10 < t)) {
                        if (ol(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & n) !== n) {
                            at(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = td(xn.bind(null, e, st, hr), t);
                        break
                    }
                    xn(e, st, hr);
                    break;
                case 4:
                    if (Vr(e, n), (n & 4194240) === n) break;
                    for (t = e.eventTimes, i = -1; 0 < n;) {
                        var o = 31 - Jt(n);
                        a = 1 << o, o = t[o], o > i && (i = o), n &= ~a
                    }
                    if (n = i, n = $e() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * uA(n / 1960)) - n, 10 < n) {
                        e.timeoutHandle = td(xn.bind(null, e, st, hr), n);
                        break
                    }
                    xn(e, st, hr);
                    break;
                case 5:
                    xn(e, st, hr);
                    break;
                default:
                    throw Error(z(329))
            }
        }
    }
    return ht(e, $e()), e.callbackNode === r ? kw.bind(null, e) : null
}

function xd(e, t) {
    var r = Xa;
    return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = _l(e, t), e !== 2 && (t = st, st = r, t !== null && Sd(t)), e
}

function Sd(e) {
    st === null ? st = e : st.push.apply(st, e)
}

function lA(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores, r !== null))
                for (var n = 0; n < r.length; n++) {
                    var i = r[n],
                        a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!tr(a(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Vr(e, t) {
    for (t &= ~$h, t &= ~Is, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var r = 31 - Jt(t),
            n = 1 << r;
        e[r] = -1, t &= ~n
    }
}

function qy(e) {
    if (ne & 6) throw Error(z(327));
    _i();
    var t = ol(e, 0);
    if (!(t & 1)) return ht(e, $e()), null;
    var r = _l(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = Gf(e);
        n !== 0 && (t = n, r = xd(e, n))
    }
    if (r === 1) throw r = bo, kn(e, 0), Vr(e, t), ht(e, $e()), r;
    if (r === 6) throw Error(z(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, st, hr), ht(e, $e()), null
}

function Ch(e, t) {
    var r = ne;
    ne |= 1;
    try {
        return e(t)
    } finally {
        ne = r, ne === 0 && (Ni = $e() + 500, Cs && fn())
    }
}

function zn(e) {
    qr !== null && qr.tag === 0 && !(ne & 6) && _i();
    var t = ne;
    ne |= 1;
    var r = Nt.transition,
        n = ue;
    try {
        if (Nt.transition = null, ue = 1, e) return e()
    } finally {
        ue = n, Nt.transition = r, ne = t, !(ne & 6) && fn()
    }
}

function jh() {
    gt = vi.current, me(vi)
}

function kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, RP(r)), je !== null)
        for (r = je.return; r !== null;) {
            var n = r;
            switch (fh(n), n.tag) {
                case 1:
                    n = n.type.childContextTypes, n != null && fl();
                    break;
                case 3:
                    Mi(), me(dt), me(rt), wh();
                    break;
                case 5:
                    bh(n);
                    break;
                case 4:
                    Mi();
                    break;
                case 13:
                    me(xe);
                    break;
                case 19:
                    me(xe);
                    break;
                case 10:
                    vh(n.type._context);
                    break;
                case 22:
                case 23:
                    jh()
            }
            r = r.return
        }
    if (We = e, je = e = nn(e.current, null), qe = gt = t, Re = 0, bo = null, $h = Is = Bn = 0, st = Xa = null, An !== null) {
        for (t = 0; t < An.length; t++)
            if (r = An[t], n = r.interleaved, n !== null) {
                r.interleaved = null;
                var i = n.next,
                    a = r.pending;
                if (a !== null) {
                    var o = a.next;
                    a.next = i, n.next = o
                }
                r.pending = n
            }
        An = null
    }
    return e
}

function Mw(e, t) {
    do {
        var r = je;
        try {
            if (hh(), Yu.current = wl, bl) {
                for (var n = Se.memoizedState; n !== null;) {
                    var i = n.queue;
                    i !== null && (i.pending = null), n = n.next
                }
                bl = !1
            }
            if (Rn = 0, Ue = Le = Se = null, Ga = !1, yo = 0, Eh.current = null, r === null || r.return === null) {
                Re = 1, bo = t, je = null;
                break
            }
            e: {
                var a = e,
                    o = r.return,
                    u = r,
                    l = t;
                if (t = qe, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var s = l,
                        f = u,
                        c = f.tag;
                    if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var d = f.alternate;
                        d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var p = Ny(o);
                    if (p !== null) {
                        p.flags &= -257, Dy(p, o, u, a, t), p.mode & 1 && Iy(a, s, t), t = p, l = s;
                        var h = t.updateQueue;
                        if (h === null) {
                            var y = new Set;
                            y.add(l), t.updateQueue = y
                        } else h.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Iy(a, s, t), kh();
                            break e
                        }
                        l = Error(z(426))
                    }
                } else if (be && u.mode & 1) {
                    var w = Ny(o);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), Dy(w, o, u, a, t), dh(Ii(l, u));
                        break e
                    }
                }
                a = l = Ii(l, u),
                Re !== 4 && (Re = 2),
                Xa === null ? Xa = [a] : Xa.push(a),
                a = o;do {
                    switch (a.tag) {
                        case 3:
                            a.flags |= 65536, t &= -t, a.lanes |= t;
                            var m = yw(a, l, t);
                            $y(a, m);
                            break e;
                        case 1:
                            u = l;
                            var v = a.type,
                                g = a.stateNode;
                            if (!(a.flags & 128) && (typeof v.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (tn === null || !tn.has(g)))) {
                                a.flags |= 65536, t &= -t, a.lanes |= t;
                                var S = mw(a, u, t);
                                $y(a, S);
                                break e
                            }
                    }
                    a = a.return
                } while (a !== null)
            }
            Dw(r)
        } catch (b) {
            t = b, je === r && r !== null && (je = r = r.return);
            continue
        }
        break
    } while (!0)
}

function Iw() {
    var e = xl.current;
    return xl.current = wl, e === null ? wl : e
}

function kh() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4), We === null || !(Bn & 268435455) && !(Is & 268435455) || Vr(We, qe)
}

function _l(e, t) {
    var r = ne;
    ne |= 2;
    var n = Iw();
    (We !== e || qe !== t) && (hr = null, kn(e, t));
    do try {
        sA();
        break
    } catch (i) {
        Mw(e, i)
    }
    while (!0);
    if (hh(), ne = r, xl.current = n, je !== null) throw Error(z(261));
    return We = null, qe = 0, Re
}

function sA() {
    for (; je !== null;) Nw(je)
}

function cA() {
    for (; je !== null && !N_();) Nw(je)
}

function Nw(e) {
    var t = Rw(e.alternate, e, gt);
    e.memoizedProps = e.pendingProps, t === null ? Dw(e) : je = t, Eh.current = null
}

function Dw(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (r = nA(r, t), r !== null) {
                r.flags &= 32767, je = r;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Re = 6, je = null;
                return
            }
        } else if (r = rA(r, t, gt), r !== null) {
            je = r;
            return
        }
        if (t = t.sibling, t !== null) {
            je = t;
            return
        }
        je = t = e
    } while (t !== null);
    Re === 0 && (Re = 5)
}

function xn(e, t, r) {
    var n = ue,
        i = Nt.transition;
    try {
        Nt.transition = null, ue = 1, fA(e, t, r, n)
    } finally {
        Nt.transition = i, ue = n
    }
    return null
}

function fA(e, t, r, n) {
    do _i(); while (qr !== null);
    if (ne & 6) throw Error(z(327));
    r = e.finishedWork;
    var i = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(z(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = r.lanes | r.childLanes;
    if (V_(e, a), e === We && (je = We = null, qe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Cu || (Cu = !0, Bw(al, function() {
            return _i(), null
        })), a = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || a) {
        a = Nt.transition, Nt.transition = null;
        var o = ue;
        ue = 1;
        var u = ne;
        ne |= 4, Eh.current = null, aA(e, r), Cw(r, e), jP(Jf), ul = !!Zf, Jf = Zf = null, e.current = r, oA(r), D_(), ne = u, ue = o, Nt.transition = a
    } else e.current = r;
    if (Cu && (Cu = !1, qr = e, Ol = i), a = e.pendingLanes, a === 0 && (tn = null), B_(r.stateNode), ht(e, $e()), t !== null)
        for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Sl) throw Sl = !1, e = bd, bd = null, e;
    return Ol & 1 && e.tag !== 0 && _i(), a = e.pendingLanes, a & 1 ? e === wd ? Ya++ : (Ya = 0, wd = e) : Ya = 0, fn(), null
}

function _i() {
    if (qr !== null) {
        var e = y1(Ol),
            t = Nt.transition,
            r = ue;
        try {
            if (Nt.transition = null, ue = 16 > e ? 16 : e, qr === null) var n = !1;
            else {
                if (e = qr, qr = null, Ol = 0, ne & 6) throw Error(z(331));
                var i = ne;
                for (ne |= 4, K = e.current; K !== null;) {
                    var a = K,
                        o = a.child;
                    if (K.flags & 16) {
                        var u = a.deletions;
                        if (u !== null) {
                            for (var l = 0; l < u.length; l++) {
                                var s = u[l];
                                for (K = s; K !== null;) {
                                    var f = K;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qa(8, f, a)
                                    }
                                    var c = f.child;
                                    if (c !== null) c.return = f, K = c;
                                    else
                                        for (; K !== null;) {
                                            f = K;
                                            var d = f.sibling,
                                                p = f.return;
                                            if (Ew(f), f === s) {
                                                K = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = p, K = d;
                                                break
                                            }
                                            K = p
                                        }
                                }
                            }
                            var h = a.alternate;
                            if (h !== null) {
                                var y = h.child;
                                if (y !== null) {
                                    h.child = null;
                                    do {
                                        var w = y.sibling;
                                        y.sibling = null, y = w
                                    } while (y !== null)
                                }
                            }
                            K = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && o !== null) o.return = a, K = o;
                    else e: for (; K !== null;) {
                        if (a = K, a.flags & 2048) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                qa(9, a, a.return)
                        }
                        var m = a.sibling;
                        if (m !== null) {
                            m.return = a.return, K = m;
                            break e
                        }
                        K = a.return
                    }
                }
                var v = e.current;
                for (K = v; K !== null;) {
                    o = K;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null) g.return = o, K = g;
                    else e: for (o = v; K !== null;) {
                        if (u = K, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ms(9, u)
                            }
                        } catch (b) {
                            Pe(u, u.return, b)
                        }
                        if (u === o) {
                            K = null;
                            break e
                        }
                        var S = u.sibling;
                        if (S !== null) {
                            S.return = u.return, K = S;
                            break e
                        }
                        K = u.return
                    }
                }
                if (ne = i, fn(), ur && typeof ur.onPostCommitFiberRoot == "function") try {
                    ur.onPostCommitFiberRoot(Ps, e)
                } catch {}
                n = !0
            }
            return n
        } finally {
            ue = r, Nt.transition = t
        }
    }
    return !1
}

function Xy(e, t, r) {
    t = Ii(r, t), t = yw(e, t, 1), e = en(e, t, 1), t = at(), e !== null && (tu(e, 1, t), ht(e, t))
}

function Pe(e, t, r) {
    if (e.tag === 3) Xy(e, e, r);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Xy(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (tn === null || !tn.has(n))) {
                    e = Ii(r, e), e = mw(t, e, 1), t = en(t, e, 1), e = at(), t !== null && (tu(t, 1, e), ht(t, e));
                    break
                }
            }
            t = t.return
        }
}

function dA(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = at(), e.pingedLanes |= e.suspendedLanes & r, We === e && (qe & r) === r && (Re === 4 || Re === 3 && (qe & 130023424) === qe && 500 > $e() - Th ? kn(e, 0) : $h |= r), ht(e, t)
}

function Lw(e, t) {
    t === 0 && (e.mode & 1 ? (t = wu, wu <<= 1, !(wu & 130023424) && (wu = 4194304)) : t = 1);
    var r = at();
    e = Tr(e, t), e !== null && (tu(e, t, r), ht(e, r))
}

function pA(e) {
    var t = e.memoizedState,
        r = 0;
    t !== null && (r = t.retryLane), Lw(e, r)
}

function hA(e, t) {
    var r = 0;
    switch (e.tag) {
        case 13:
            var n = e.stateNode,
                i = e.memoizedState;
            i !== null && (r = i.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        default:
            throw Error(z(314))
    }
    n !== null && n.delete(t), Lw(e, r)
}
var Rw;
Rw = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || dt.current) ct = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128)) return ct = !1, tA(e, t, r);
            ct = !!(e.flags & 131072)
        }
    else ct = !1, be && t.flags & 1048576 && U1(t, hl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var n = t.type;
            Zu(e, t), e = t.pendingProps;
            var i = Ci(t, rt.current);
            Oi(t, r), i = Sh(null, t, n, e, i, r);
            var a = Oh();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pt(n) ? (a = !0, dl(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, mh(t), i.updater = ks, t.stateNode = i, i._reactInternals = t, ld(t, n, e, r), t = fd(null, t, n, !0, a, r)) : (t.tag = 0, be && a && ch(t), nt(null, t, i, r), t = t.child), t;
        case 16:
            n = t.elementType;
            e: {
                switch (Zu(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = yA(n), e = Vt(n, e), i) {
                    case 0:
                        t = cd(null, t, n, e, r);
                        break e;
                    case 1:
                        t = By(null, t, n, e, r);
                        break e;
                    case 11:
                        t = Ly(null, t, n, e, r);
                        break e;
                    case 14:
                        t = Ry(null, t, n, Vt(n.type, e), r);
                        break e
                }
                throw Error(z(306, n, ""))
            }
            return t;
        case 0:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vt(n, i), cd(e, t, n, i, r);
        case 1:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vt(n, i), By(e, t, n, i, r);
        case 3:
            e: {
                if (xw(t), e === null) throw Error(z(387));n = t.pendingProps,
                a = t.memoizedState,
                i = a.element,
                q1(e, t),
                ml(t, n, null, r);
                var o = t.memoizedState;
                if (n = o.element, a.isDehydrated)
                    if (a = {
                            element: n,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
                        i = Ii(Error(z(423)), t), t = zy(e, t, n, r, i);
                        break e
                    } else if (n !== i) {
                    i = Ii(Error(z(424)), t), t = zy(e, t, n, r, i);
                    break e
                } else
                    for (xt = Jr(t.stateNode.containerInfo.firstChild), St = t, be = !0, Xt = null, r = K1(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                    if (ji(), n === i) {
                        t = Cr(e, t, r);
                        break e
                    }
                    nt(e, t, n, r)
                }
                t = t.child
            }
            return t;
        case 5:
            return X1(t), e === null && ad(t), n = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, ed(n, i) ? o = null : a !== null && ed(n, a) && (t.flags |= 32), ww(e, t), nt(e, t, o, r), t.child;
        case 6:
            return e === null && ad(t), null;
        case 13:
            return Sw(e, t, r);
        case 4:
            return gh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = ki(t, null, n, r) : nt(e, t, n, r), t.child;
        case 11:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vt(n, i), Ly(e, t, n, i, r);
        case 7:
            return nt(e, t, t.pendingProps, r), t.child;
        case 8:
            return nt(e, t, t.pendingProps.children, r), t.child;
        case 12:
            return nt(e, t, t.pendingProps.children, r), t.child;
        case 10:
            e: {
                if (n = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, pe(vl, n._currentValue), n._currentValue = o, a !== null)
                    if (tr(a.value, o)) {
                        if (a.children === i.children && !dt.current) {
                            t = Cr(e, t, r);
                            break e
                        }
                    } else
                        for (a = t.child, a !== null && (a.return = t); a !== null;) {
                            var u = a.dependencies;
                            if (u !== null) {
                                o = a.child;
                                for (var l = u.firstContext; l !== null;) {
                                    if (l.context === n) {
                                        if (a.tag === 1) {
                                            l = Sr(-1, r & -r), l.tag = 2;
                                            var s = a.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var f = s.pending;
                                                f === null ? l.next = l : (l.next = f.next, f.next = l), s.pending = l
                                            }
                                        }
                                        a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), od(a.return, r, t), u.lanes |= r;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
                            else if (a.tag === 18) {
                                if (o = a.return, o === null) throw Error(z(341));
                                o.lanes |= r, u = o.alternate, u !== null && (u.lanes |= r), od(o, r, t), o = a.sibling
                            } else o = a.child;
                            if (o !== null) o.return = a;
                            else
                                for (o = a; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (a = o.sibling, a !== null) {
                                        a.return = o.return, o = a;
                                        break
                                    }
                                    o = o.return
                                }
                            a = o
                        }
                nt(e, t, i.children, r),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, n = t.pendingProps.children, Oi(t, r), i = Rt(i), n = n(i), t.flags |= 1, nt(e, t, n, r), t.child;
        case 14:
            return n = t.type, i = Vt(n, t.pendingProps), i = Vt(n.type, i), Ry(e, t, n, i, r);
        case 15:
            return gw(e, t, t.type, t.pendingProps, r);
        case 17:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vt(n, i), Zu(e, t), t.tag = 1, pt(n) ? (e = !0, dl(t)) : e = !1, Oi(t, r), vw(t, n, i), ld(t, n, i, r), fd(null, t, n, !0, e, r);
        case 19:
            return Ow(e, t, r);
        case 22:
            return bw(e, t, r)
    }
    throw Error(z(156, t.tag))
};

function Bw(e, t) {
    return d1(e, t)
}

function vA(e, t, r, n) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Mt(e, t, r, n) {
    return new vA(e, t, r, n)
}

function Mh(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function yA(e) {
    if (typeof e == "function") return Mh(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Zp) return 11;
        if (e === Jp) return 14
    }
    return 2
}

function nn(e, t) {
    var r = e.alternate;
    return r === null ? (r = Mt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
}

function tl(e, t, r, n, i, a) {
    var o = 2;
    if (n = e, typeof e == "function") Mh(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case ai:
            return Mn(r.children, i, a, t);
        case Qp:
            o = 8, i |= 8;
            break;
        case kf:
            return e = Mt(12, r, t, i | 2), e.elementType = kf, e.lanes = a, e;
        case Mf:
            return e = Mt(13, r, t, i), e.elementType = Mf, e.lanes = a, e;
        case If:
            return e = Mt(19, r, t, i), e.elementType = If, e.lanes = a, e;
        case Xb:
            return Ns(r, i, a, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Gb:
                    o = 10;
                    break e;
                case qb:
                    o = 9;
                    break e;
                case Zp:
                    o = 11;
                    break e;
                case Jp:
                    o = 14;
                    break e;
                case Fr:
                    o = 16, n = null;
                    break e
            }
            throw Error(z(130, e == null ? e : typeof e, ""))
    }
    return t = Mt(o, r, t, i), t.elementType = e, t.type = n, t.lanes = a, t
}

function Mn(e, t, r, n) {
    return e = Mt(7, e, n, t), e.lanes = r, e
}

function Ns(e, t, r, n) {
    return e = Mt(22, e, n, t), e.elementType = Xb, e.lanes = r, e.stateNode = {
        isHidden: !1
    }, e
}

function ef(e, t, r) {
    return e = Mt(6, e, null, t), e.lanes = r, e
}

function tf(e, t, r) {
    return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function mA(e, t, r, n, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Nc(0), this.expirationTimes = Nc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nc(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Ih(e, t, r, n, i, a, o, u, l) {
    return e = new mA(e, t, r, u, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Mt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, mh(a), e
}

function gA(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ii,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}

function zw(e) {
    if (!e) return ln;
    e = e._reactInternals;
    e: {
        if (Gn(e) !== e || e.tag !== 1) throw Error(z(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(z(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (pt(r)) return z1(e, r, t)
    }
    return t
}

function Fw(e, t, r, n, i, a, o, u, l) {
    return e = Ih(r, n, !0, e, i, a, o, u, l), e.context = zw(null), r = e.current, n = at(), i = rn(r), a = Sr(n, i), a.callback = t ? ? null, en(r, a, i), e.current.lanes = i, tu(e, i, n), ht(e, n), e
}

function Ds(e, t, r, n) {
    var i = t.current,
        a = at(),
        o = rn(i);
    return r = zw(r), t.context === null ? t.context = r : t.pendingContext = r, t = Sr(a, o), t.payload = {
        element: e
    }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = en(i, t, o), e !== null && (er(e, i, o, a), Xu(e, i, o)), o
}

function Pl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Yy(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}

function Nh(e, t) {
    Yy(e, t), (e = e.alternate) && Yy(e, t)
}

function bA() {
    return null
}
var Uw = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Dh(e) {
    this._internalRoot = e
}
Ls.prototype.render = Dh.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(z(409));
    Ds(e, t, null, null)
};
Ls.prototype.unmount = Dh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zn(function() {
            Ds(null, e, null, null)
        }), t[$r] = null
    }
};

function Ls(e) {
    this._internalRoot = e
}
Ls.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = b1();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < Hr.length && t !== 0 && t < Hr[r].priority; r++);
        Hr.splice(r, 0, e), r === 0 && x1(e)
    }
};

function Lh(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Rs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Qy() {}

function wA(e, t, r, n, i) {
    if (i) {
        if (typeof n == "function") {
            var a = n;
            n = function() {
                var s = Pl(o);
                a.call(s)
            }
        }
        var o = Fw(t, n, e, 0, null, !1, !1, "", Qy);
        return e._reactRootContainer = o, e[$r] = o.current, co(e.nodeType === 8 ? e.parentNode : e), zn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof n == "function") {
        var u = n;
        n = function() {
            var s = Pl(l);
            u.call(s)
        }
    }
    var l = Ih(e, 0, !1, null, null, !1, !1, "", Qy);
    return e._reactRootContainer = l, e[$r] = l.current, co(e.nodeType === 8 ? e.parentNode : e), zn(function() {
        Ds(t, l, r, n)
    }), l
}

function Bs(e, t, r, n, i) {
    var a = r._reactRootContainer;
    if (a) {
        var o = a;
        if (typeof i == "function") {
            var u = i;
            i = function() {
                var l = Pl(o);
                u.call(l)
            }
        }
        Ds(t, o, e, i)
    } else o = wA(r, t, e, i, n);
    return Pl(o)
}
m1 = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var r = Ba(t.pendingLanes);
                r !== 0 && (rh(t, r | 1), ht(t, $e()), !(ne & 6) && (Ni = $e() + 500, fn()))
            }
            break;
        case 13:
            zn(function() {
                var n = Tr(e, 1);
                if (n !== null) {
                    var i = at();
                    er(n, e, 1, i)
                }
            }), Nh(e, 1)
    }
};
nh = function(e) {
    if (e.tag === 13) {
        var t = Tr(e, 134217728);
        if (t !== null) {
            var r = at();
            er(t, e, 134217728, r)
        }
        Nh(e, 134217728)
    }
};
g1 = function(e) {
    if (e.tag === 13) {
        var t = rn(e),
            r = Tr(e, t);
        if (r !== null) {
            var n = at();
            er(r, e, t, n)
        }
        Nh(e, t)
    }
};
b1 = function() {
    return ue
};
w1 = function(e, t) {
    var r = ue;
    try {
        return ue = e, t()
    } finally {
        ue = r
    }
};
Hf = function(e, t, r) {
    switch (t) {
        case "input":
            if (Lf(e, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e; r.parentNode;) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                        var i = Ts(n);
                        if (!i) throw Error(z(90));
                        Qb(n), Lf(n, i)
                    }
                }
            }
            break;
        case "textarea":
            Jb(e, r);
            break;
        case "select":
            t = r.value, t != null && bi(e, !!r.multiple, t, !1)
    }
};
o1 = Ch;
u1 = zn;
var xA = {
        usingClientEntryPoint: !1,
        Events: [nu, si, Ts, i1, a1, Ch]
    },
    Aa = {
        findFiberByHostInstance: Pn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    SA = {
        bundleType: Aa.bundleType,
        version: Aa.version,
        rendererPackageName: Aa.rendererPackageName,
        rendererConfig: Aa.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Nr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = c1(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Aa.findFiberByHostInstance || bA,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ju.isDisabled && ju.supportsFiber) try {
        Ps = ju.inject(SA), ur = ju
    } catch {}
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xA;
Pt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lh(t)) throw Error(z(200));
    return gA(e, t, null, r)
};
Pt.createRoot = function(e, t) {
    if (!Lh(e)) throw Error(z(299));
    var r = !1,
        n = "",
        i = Uw;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ih(e, 1, !1, null, null, r, !1, n, i), e[$r] = t.current, co(e.nodeType === 8 ? e.parentNode : e), new Dh(t)
};
Pt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
    return e = c1(t), e = e === null ? null : e.stateNode, e
};
Pt.flushSync = function(e) {
    return zn(e)
};
Pt.hydrate = function(e, t, r) {
    if (!Rs(t)) throw Error(z(200));
    return Bs(null, e, t, !0, r)
};
Pt.hydrateRoot = function(e, t, r) {
    if (!Lh(e)) throw Error(z(405));
    var n = r != null && r.hydratedSources || null,
        i = !1,
        a = "",
        o = Uw;
    if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = Fw(t, null, e, 1, r ? ? null, i, !1, a, o), e[$r] = t.current, co(e), n)
        for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(r, i);
    return new Ls(t)
};
Pt.render = function(e, t, r) {
    if (!Rs(t)) throw Error(z(200));
    return Bs(null, e, t, !1, r)
};
Pt.unmountComponentAtNode = function(e) {
    if (!Rs(e)) throw Error(z(40));
    return e._reactRootContainer ? (zn(function() {
        Bs(null, null, e, !1, function() {
            e._reactRootContainer = null, e[$r] = null
        })
    }), !0) : !1
};
Pt.unstable_batchedUpdates = Ch;
Pt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!Rs(r)) throw Error(z(200));
    if (e == null || e._reactInternals === void 0) throw Error(z(38));
    return Bs(e, t, r, !1, n)
};
Pt.version = "18.3.1-next-f1338f8080-20240426";

function Ww() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ww)
    } catch (e) {
        console.error(e)
    }
}
Ww(), Wb.exports = Pt;
var OA = Wb.exports;
const dK = fe(OA);

function Hw(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (r = Hw(e[t])) && (n && (n += " "), n += r)
        } else
            for (r in e) e[r] && (n && (n += " "), n += r);
    return n
}

function ie() {
    for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = Hw(e)) && (n && (n += " "), n += t);
    return n
}
var _A = Array.isArray,
    vt = _A,
    PA = typeof vu == "object" && vu && vu.Object === Object && vu,
    Vw = PA,
    AA = Vw,
    EA = typeof self == "object" && self && self.Object === Object && self,
    $A = AA || EA || Function("return this")(),
    dr = $A,
    TA = dr,
    CA = TA.Symbol,
    au = CA,
    Zy = au,
    Kw = Object.prototype,
    jA = Kw.hasOwnProperty,
    kA = Kw.toString,
    Ea = Zy ? Zy.toStringTag : void 0;

function MA(e) {
    var t = jA.call(e, Ea),
        r = e[Ea];
    try {
        e[Ea] = void 0;
        var n = !0
    } catch {}
    var i = kA.call(e);
    return n && (t ? e[Ea] = r : delete e[Ea]), i
}
var IA = MA,
    NA = Object.prototype,
    DA = NA.toString;

function LA(e) {
    return DA.call(e)
}
var RA = LA,
    Jy = au,
    BA = IA,
    zA = RA,
    FA = "[object Null]",
    UA = "[object Undefined]",
    em = Jy ? Jy.toStringTag : void 0;

function WA(e) {
    return e == null ? e === void 0 ? UA : FA : em && em in Object(e) ? BA(e) : zA(e)
}
var Dr = WA;

function HA(e) {
    return e != null && typeof e == "object"
}
var Lr = HA,
    VA = Dr,
    KA = Lr,
    GA = "[object Symbol]";

function qA(e) {
    return typeof e == "symbol" || KA(e) && VA(e) == GA
}
var oa = qA,
    XA = vt,
    YA = oa,
    QA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    ZA = /^\w*$/;

function JA(e, t) {
    if (XA(e)) return !1;
    var r = typeof e;
    return r == "number" || r == "symbol" || r == "boolean" || e == null || YA(e) ? !0 : ZA.test(e) || !QA.test(e) || t != null && e in Object(t)
}
var Rh = JA;

function eE(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var dn = eE;
const ua = fe(dn);
var tE = Dr,
    rE = dn,
    nE = "[object AsyncFunction]",
    iE = "[object Function]",
    aE = "[object GeneratorFunction]",
    oE = "[object Proxy]";

function uE(e) {
    if (!rE(e)) return !1;
    var t = tE(e);
    return t == iE || t == aE || t == nE || t == oE
}
var Bh = uE;
const Z = fe(Bh);
var lE = dr,
    sE = lE["__core-js_shared__"],
    cE = sE,
    rf = cE,
    tm = function() {
        var e = /[^.]+$/.exec(rf && rf.keys && rf.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

function fE(e) {
    return !!tm && tm in e
}
var dE = fE,
    pE = Function.prototype,
    hE = pE.toString;

function vE(e) {
    if (e != null) {
        try {
            return hE.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var Gw = vE,
    yE = Bh,
    mE = dE,
    gE = dn,
    bE = Gw,
    wE = /[\\^$.*+?()[\]{}|]/g,
    xE = /^\[object .+?Constructor\]$/,
    SE = Function.prototype,
    OE = Object.prototype,
    _E = SE.toString,
    PE = OE.hasOwnProperty,
    AE = RegExp("^" + _E.call(PE).replace(wE, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function EE(e) {
    if (!gE(e) || mE(e)) return !1;
    var t = yE(e) ? AE : xE;
    return t.test(bE(e))
}
var $E = EE;

function TE(e, t) {
    return e == null ? void 0 : e[t]
}
var CE = TE,
    jE = $E,
    kE = CE;

function ME(e, t) {
    var r = kE(e, t);
    return jE(r) ? r : void 0
}
var qn = ME,
    IE = qn,
    NE = IE(Object, "create"),
    zs = NE,
    rm = zs;

function DE() {
    this.__data__ = rm ? rm(null) : {}, this.size = 0
}
var LE = DE;

function RE(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}
var BE = RE,
    zE = zs,
    FE = "__lodash_hash_undefined__",
    UE = Object.prototype,
    WE = UE.hasOwnProperty;

function HE(e) {
    var t = this.__data__;
    if (zE) {
        var r = t[e];
        return r === FE ? void 0 : r
    }
    return WE.call(t, e) ? t[e] : void 0
}
var VE = HE,
    KE = zs,
    GE = Object.prototype,
    qE = GE.hasOwnProperty;

function XE(e) {
    var t = this.__data__;
    return KE ? t[e] !== void 0 : qE.call(t, e)
}
var YE = XE,
    QE = zs,
    ZE = "__lodash_hash_undefined__";

function JE(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = QE && t === void 0 ? ZE : t, this
}
var e$ = JE,
    t$ = LE,
    r$ = BE,
    n$ = VE,
    i$ = YE,
    a$ = e$;

function la(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
la.prototype.clear = t$;
la.prototype.delete = r$;
la.prototype.get = n$;
la.prototype.has = i$;
la.prototype.set = a$;
var o$ = la;

function u$() {
    this.__data__ = [], this.size = 0
}
var l$ = u$;

function s$(e, t) {
    return e === t || e !== e && t !== t
}
var zh = s$,
    c$ = zh;

function f$(e, t) {
    for (var r = e.length; r--;)
        if (c$(e[r][0], t)) return r;
    return -1
}
var Fs = f$,
    d$ = Fs,
    p$ = Array.prototype,
    h$ = p$.splice;

function v$(e) {
    var t = this.__data__,
        r = d$(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : h$.call(t, r, 1), --this.size, !0
}
var y$ = v$,
    m$ = Fs;

function g$(e) {
    var t = this.__data__,
        r = m$(t, e);
    return r < 0 ? void 0 : t[r][1]
}
var b$ = g$,
    w$ = Fs;

function x$(e) {
    return w$(this.__data__, e) > -1
}
var S$ = x$,
    O$ = Fs;

function _$(e, t) {
    var r = this.__data__,
        n = O$(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
}
var P$ = _$,
    A$ = l$,
    E$ = y$,
    $$ = b$,
    T$ = S$,
    C$ = P$;

function sa(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
sa.prototype.clear = A$;
sa.prototype.delete = E$;
sa.prototype.get = $$;
sa.prototype.has = T$;
sa.prototype.set = C$;
var Us = sa,
    j$ = qn,
    k$ = dr,
    M$ = j$(k$, "Map"),
    Fh = M$,
    nm = o$,
    I$ = Us,
    N$ = Fh;

function D$() {
    this.size = 0, this.__data__ = {
        hash: new nm,
        map: new(N$ || I$),
        string: new nm
    }
}
var L$ = D$;

function R$(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var B$ = R$,
    z$ = B$;

function F$(e, t) {
    var r = e.__data__;
    return z$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
}
var Ws = F$,
    U$ = Ws;

function W$(e) {
    var t = U$(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}
var H$ = W$,
    V$ = Ws;

function K$(e) {
    return V$(this, e).get(e)
}
var G$ = K$,
    q$ = Ws;

function X$(e) {
    return q$(this, e).has(e)
}
var Y$ = X$,
    Q$ = Ws;

function Z$(e, t) {
    var r = Q$(this, e),
        n = r.size;
    return r.set(e, t), this.size += r.size == n ? 0 : 1, this
}
var J$ = Z$,
    eT = L$,
    tT = H$,
    rT = G$,
    nT = Y$,
    iT = J$;

function ca(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
ca.prototype.clear = eT;
ca.prototype.delete = tT;
ca.prototype.get = rT;
ca.prototype.has = nT;
ca.prototype.set = iT;
var Uh = ca,
    qw = Uh,
    aT = "Expected a function";

function Wh(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(aT);
    var r = function() {
        var n = arguments,
            i = t ? t.apply(this, n) : n[0],
            a = r.cache;
        if (a.has(i)) return a.get(i);
        var o = e.apply(this, n);
        return r.cache = a.set(i, o) || a, o
    };
    return r.cache = new(Wh.Cache || qw), r
}
Wh.Cache = qw;
var Xw = Wh;
const oT = fe(Xw);
var uT = Xw,
    lT = 500;

function sT(e) {
    var t = uT(e, function(n) {
            return r.size === lT && r.clear(), n
        }),
        r = t.cache;
    return t
}
var cT = sT,
    fT = cT,
    dT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    pT = /\\(\\)?/g,
    hT = fT(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(dT, function(r, n, i, a) {
            t.push(i ? a.replace(pT, "$1") : n || r)
        }), t
    }),
    vT = hT;

function yT(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
    return i
}
var Hh = yT,
    im = au,
    mT = Hh,
    gT = vt,
    bT = oa,
    wT = 1 / 0,
    am = im ? im.prototype : void 0,
    om = am ? am.toString : void 0;

function Yw(e) {
    if (typeof e == "string") return e;
    if (gT(e)) return mT(e, Yw) + "";
    if (bT(e)) return om ? om.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -wT ? "-0" : t
}
var xT = Yw,
    ST = xT;

function OT(e) {
    return e == null ? "" : ST(e)
}
var Qw = OT,
    _T = vt,
    PT = Rh,
    AT = vT,
    ET = Qw;

function $T(e, t) {
    return _T(e) ? e : PT(e, t) ? [e] : AT(ET(e))
}
var Zw = $T,
    TT = oa,
    CT = 1 / 0;

function jT(e) {
    if (typeof e == "string" || TT(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -CT ? "-0" : t
}
var Hs = jT,
    kT = Zw,
    MT = Hs;

function IT(e, t) {
    t = kT(t, e);
    for (var r = 0, n = t.length; e != null && r < n;) e = e[MT(t[r++])];
    return r && r == n ? e : void 0
}
var Vh = IT,
    NT = Vh;

function DT(e, t, r) {
    var n = e == null ? void 0 : NT(e, t);
    return n === void 0 ? r : n
}
var Jw = DT;
const Dt = fe(Jw);

function LT(e) {
    return e == null
}
var RT = LT;
const J = fe(RT);
var BT = Dr,
    zT = vt,
    FT = Lr,
    UT = "[object String]";

function WT(e) {
    return typeof e == "string" || !zT(e) && FT(e) && BT(e) == UT
}
var HT = WT;
const Fn = fe(HT);
var ex = {
        exports: {}
    },
    le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh = Symbol.for("react.element"),
    Gh = Symbol.for("react.portal"),
    Vs = Symbol.for("react.fragment"),
    Ks = Symbol.for("react.strict_mode"),
    Gs = Symbol.for("react.profiler"),
    qs = Symbol.for("react.provider"),
    Xs = Symbol.for("react.context"),
    VT = Symbol.for("react.server_context"),
    Ys = Symbol.for("react.forward_ref"),
    Qs = Symbol.for("react.suspense"),
    Zs = Symbol.for("react.suspense_list"),
    Js = Symbol.for("react.memo"),
    ec = Symbol.for("react.lazy"),
    KT = Symbol.for("react.offscreen"),
    tx;
tx = Symbol.for("react.module.reference");

function Ft(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Kh:
                switch (e = e.type, e) {
                    case Vs:
                    case Gs:
                    case Ks:
                    case Qs:
                    case Zs:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case VT:
                            case Xs:
                            case Ys:
                            case ec:
                            case Js:
                            case qs:
                                return e;
                            default:
                                return t
                        }
                }
            case Gh:
                return t
        }
    }
}
le.ContextConsumer = Xs;
le.ContextProvider = qs;
le.Element = Kh;
le.ForwardRef = Ys;
le.Fragment = Vs;
le.Lazy = ec;
le.Memo = Js;
le.Portal = Gh;
le.Profiler = Gs;
le.StrictMode = Ks;
le.Suspense = Qs;
le.SuspenseList = Zs;
le.isAsyncMode = function() {
    return !1
};
le.isConcurrentMode = function() {
    return !1
};
le.isContextConsumer = function(e) {
    return Ft(e) === Xs
};
le.isContextProvider = function(e) {
    return Ft(e) === qs
};
le.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kh
};
le.isForwardRef = function(e) {
    return Ft(e) === Ys
};
le.isFragment = function(e) {
    return Ft(e) === Vs
};
le.isLazy = function(e) {
    return Ft(e) === ec
};
le.isMemo = function(e) {
    return Ft(e) === Js
};
le.isPortal = function(e) {
    return Ft(e) === Gh
};
le.isProfiler = function(e) {
    return Ft(e) === Gs
};
le.isStrictMode = function(e) {
    return Ft(e) === Ks
};
le.isSuspense = function(e) {
    return Ft(e) === Qs
};
le.isSuspenseList = function(e) {
    return Ft(e) === Zs
};
le.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Vs || e === Gs || e === Ks || e === Qs || e === Zs || e === KT || typeof e == "object" && e !== null && (e.$$typeof === ec || e.$$typeof === Js || e.$$typeof === qs || e.$$typeof === Xs || e.$$typeof === Ys || e.$$typeof === tx || e.getModuleId !== void 0)
};
le.typeOf = Ft;
ex.exports = le;
var GT = ex.exports,
    qT = Dr,
    XT = Lr,
    YT = "[object Number]";

function QT(e) {
    return typeof e == "number" || XT(e) && qT(e) == YT
}
var rx = QT;
const ZT = fe(rx);
var JT = rx;

function eC(e) {
    return JT(e) && e != +e
}
var tC = eC;
const ou = fe(tC);
var Zt = function(t) {
        return t === 0 ? 0 : t > 0 ? 1 : -1
    },
    $n = function(t) {
        return Fn(t) && t.indexOf("%") === t.length - 1
    },
    W = function(t) {
        return ZT(t) && !ou(t)
    },
    rC = function(t) {
        return J(t)
    },
    Be = function(t) {
        return W(t) || Fn(t)
    },
    nC = 0,
    uu = function(t) {
        var r = ++nC;
        return "".concat(t || "").concat(r)
    },
    Un = function(t, r) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        if (!W(t) && !Fn(t)) return n;
        var a;
        if ($n(t)) {
            var o = t.indexOf("%");
            a = r * parseFloat(t.slice(0, o)) / 100
        } else a = +t;
        return ou(a) && (a = n), i && a > r && (a = r), a
    },
    Kr = function(t) {
        if (!t) return null;
        var r = Object.keys(t);
        return r && r.length ? t[r[0]] : null
    },
    iC = function(t) {
        if (!Array.isArray(t)) return !1;
        for (var r = t.length, n = {}, i = 0; i < r; i++)
            if (!n[t[i]]) n[t[i]] = !0;
            else return !0;
        return !1
    },
    Yt = function(t, r) {
        return W(t) && W(r) ? function(n) {
            return t + n * (r - t)
        } : function() {
            return r
        }
    };

function Al(e, t, r) {
    return !e || !e.length ? null : e.find(function(n) {
        return n && (typeof t == "function" ? t(n) : Dt(n, t)) === r
    })
}
var aC = function(t, r) {
    return W(t) && W(r) ? t - r : Fn(t) && Fn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r))
};

function Pi(e, t) {
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1;
    for (var n in t)
        if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1;
    return !0
}

function Od(e) {
    "@babel/helpers - typeof";
    return Od = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Od(e)
}
var oC = ["viewBox", "children"],
    uC = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
    um = ["points", "pathLength"],
    nf = {
        svg: oC,
        polygon: um,
        polyline: um
    },
    qh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
    El = function(t, r) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var n = t;
        if (F.isValidElement(t) && (n = t.props), !ua(n)) return null;
        var i = {};
        return Object.keys(n).forEach(function(a) {
            qh.includes(a) && (i[a] = r || function(o) {
                return n[a](n, o)
            })
        }), i
    },
    lC = function(t, r, n) {
        return function(i) {
            return t(r, n, i), null
        }
    },
    $l = function(t, r, n) {
        if (!ua(t) || Od(t) !== "object") return null;
        var i = null;
        return Object.keys(t).forEach(function(a) {
            var o = t[a];
            qh.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = lC(o, r, n))
        }), i
    },
    sC = ["children"],
    cC = ["children"];

function lm(e, t) {
    if (e == null) return {};
    var r = fC(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function fC(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function _d(e) {
    "@babel/helpers - typeof";
    return _d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _d(e)
}
var sm = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
        contextmenu: "onContextMenu",
        dblclick: "onDoubleClick"
    },
    Or = function(t) {
        return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : ""
    },
    cm = null,
    af = null,
    Xh = function e(t) {
        if (t === cm && Array.isArray(af)) return af;
        var r = [];
        return F.Children.forEach(t, function(n) {
            J(n) || (GT.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n))
        }), af = r, cm = t, r
    };

function Lt(e, t) {
    var r = [],
        n = [];
    return Array.isArray(t) ? n = t.map(function(i) {
        return Or(i)
    }) : n = [Or(t)], Xh(e).forEach(function(i) {
        var a = Dt(i, "type.displayName") || Dt(i, "type.name");
        n.indexOf(a) !== -1 && r.push(i)
    }), r
}

function bt(e, t) {
    var r = Lt(e, t);
    return r && r[0]
}
var fm = function(t) {
        if (!t || !t.props) return !1;
        var r = t.props,
            n = r.width,
            i = r.height;
        return !(!W(n) || n <= 0 || !W(i) || i <= 0)
    },
    dC = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
    pC = function(t) {
        return t && t.type && Fn(t.type) && dC.indexOf(t.type) >= 0
    },
    hC = function(t) {
        return t && _d(t) === "object" && "clipDot" in t
    },
    vC = function(t, r, n, i) {
        var a, o = (a = nf == null ? void 0 : nf[i]) !== null && a !== void 0 ? a : [];
        return r.startsWith("data-") || !Z(t) && (i && o.includes(r) || uC.includes(r)) || n && qh.includes(r)
    },
    ee = function(t, r, n) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var i = t;
        if (F.isValidElement(t) && (i = t.props), !ua(i)) return null;
        var a = {};
        return Object.keys(i).forEach(function(o) {
            var u;
            vC((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o])
        }), a
    },
    Pd = function e(t, r) {
        if (t === r) return !0;
        var n = F.Children.count(t);
        if (n !== F.Children.count(r)) return !1;
        if (n === 0) return !0;
        if (n === 1) return dm(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
        for (var i = 0; i < n; i++) {
            var a = t[i],
                o = r[i];
            if (Array.isArray(a) || Array.isArray(o)) {
                if (!e(a, o)) return !1
            } else if (!dm(a, o)) return !1
        }
        return !0
    },
    dm = function(t, r) {
        if (J(t) && J(r)) return !0;
        if (!J(t) && !J(r)) {
            var n = t.props || {},
                i = n.children,
                a = lm(n, sC),
                o = r.props || {},
                u = o.children,
                l = lm(o, cC);
            return i && u ? Pi(a, l) && Pd(i, u) : !i && !u ? Pi(a, l) : !1
        }
        return !1
    },
    pm = function(t, r) {
        var n = [],
            i = {};
        return Xh(t).forEach(function(a, o) {
            if (pC(a)) n.push(a);
            else if (a) {
                var u = Or(a.type),
                    l = r[u] || {},
                    s = l.handler,
                    f = l.once;
                if (s && (!f || !i[u])) {
                    var c = s(a, u, o);
                    n.push(c), i[u] = !0
                }
            }
        }), n
    },
    yC = function(t) {
        var r = t && t.type;
        return r && sm[r] ? sm[r] : null
    },
    mC = function(t, r) {
        return Xh(r).indexOf(t)
    },
    gC = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

function Ad() {
    return Ad = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ad.apply(this, arguments)
}

function bC(e, t) {
    if (e == null) return {};
    var r = wC(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function wC(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function Ed(e) {
    var t = e.children,
        r = e.width,
        n = e.height,
        i = e.viewBox,
        a = e.className,
        o = e.style,
        u = e.title,
        l = e.desc,
        s = bC(e, gC),
        f = i || {
            width: r,
            height: n,
            x: 0,
            y: 0
        },
        c = ie("recharts-surface", a);
    return A.createElement("svg", Ad({}, ee(s, !0, "svg"), {
        className: c,
        width: r,
        height: n,
        style: o,
        viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
    }), A.createElement("title", null, u), A.createElement("desc", null, l), t)
}
var xC = ["children", "className"];

function $d() {
    return $d = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, $d.apply(this, arguments)
}

function SC(e, t) {
    if (e == null) return {};
    var r = OC(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function OC(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}
var Te = A.forwardRef(function(e, t) {
        var r = e.children,
            n = e.className,
            i = SC(e, xC),
            a = ie("recharts-layer", n);
        return A.createElement("g", $d({
            className: a
        }, ee(i, !0), {
            ref: t
        }), r)
    }),
    _r = function(t, r) {
        for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a]
    };

function _C(e, t, r) {
    var n = -1,
        i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
    for (var a = Array(i); ++n < i;) a[n] = e[n + t];
    return a
}
var PC = _C,
    AC = PC;

function EC(e, t, r) {
    var n = e.length;
    return r = r === void 0 ? n : r, !t && r >= n ? e : AC(e, t, r)
}
var $C = EC,
    TC = "\\ud800-\\udfff",
    CC = "\\u0300-\\u036f",
    jC = "\\ufe20-\\ufe2f",
    kC = "\\u20d0-\\u20ff",
    MC = CC + jC + kC,
    IC = "\\ufe0e\\ufe0f",
    NC = "\\u200d",
    DC = RegExp("[" + NC + TC + MC + IC + "]");

function LC(e) {
    return DC.test(e)
}
var nx = LC;

function RC(e) {
    return e.split("")
}
var BC = RC,
    ix = "\\ud800-\\udfff",
    zC = "\\u0300-\\u036f",
    FC = "\\ufe20-\\ufe2f",
    UC = "\\u20d0-\\u20ff",
    WC = zC + FC + UC,
    HC = "\\ufe0e\\ufe0f",
    VC = "[" + ix + "]",
    Td = "[" + WC + "]",
    Cd = "\\ud83c[\\udffb-\\udfff]",
    KC = "(?:" + Td + "|" + Cd + ")",
    ax = "[^" + ix + "]",
    ox = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    ux = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    GC = "\\u200d",
    lx = KC + "?",
    sx = "[" + HC + "]?",
    qC = "(?:" + GC + "(?:" + [ax, ox, ux].join("|") + ")" + sx + lx + ")*",
    XC = sx + lx + qC,
    YC = "(?:" + [ax + Td + "?", Td, ox, ux, VC].join("|") + ")",
    QC = RegExp(Cd + "(?=" + Cd + ")|" + YC + XC, "g");

function ZC(e) {
    return e.match(QC) || []
}
var JC = ZC,
    e2 = BC,
    t2 = nx,
    r2 = JC;

function n2(e) {
    return t2(e) ? r2(e) : e2(e)
}
var i2 = n2,
    a2 = $C,
    o2 = nx,
    u2 = i2,
    l2 = Qw;

function s2(e) {
    return function(t) {
        t = l2(t);
        var r = o2(t) ? u2(t) : void 0,
            n = r ? r[0] : t.charAt(0),
            i = r ? a2(r, 1).join("") : t.slice(1);
        return n[e]() + i
    }
}
var c2 = s2,
    f2 = c2,
    d2 = f2("toUpperCase"),
    p2 = d2;
const tc = fe(p2);

function de(e) {
    return function() {
        return e
    }
}
const cx = Math.cos,
    Tl = Math.sin,
    rr = Math.sqrt,
    Cl = Math.PI,
    rc = 2 * Cl,
    jd = Math.PI,
    kd = 2 * jd,
    Sn = 1e-6,
    h2 = kd - Sn;

function fx(e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t]
}

function v2(e) {
    let t = Math.floor(e);
    if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
    if (t > 15) return fx;
    const r = 10 ** t;
    return function(n) {
        this._ += n[0];
        for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i]
    }
}
class y2 {
    constructor(t) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? fx : v2(t)
    }
    moveTo(t, r) {
        this._append `M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`
    }
    closePath() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append `Z`)
    }
    lineTo(t, r) {
        this._append `L${this._x1=+t},${this._y1=+r}`
    }
    quadraticCurveTo(t, r, n, i) {
        this._append `Q${+t},${+r},${this._x1=+n},${this._y1=+i}`
    }
    bezierCurveTo(t, r, n, i, a, o) {
        this._append `C${+t},${+r},${+n},${+i},${this._x1=+a},${this._y1=+o}`
    }
    arcTo(t, r, n, i, a) {
        if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
        let o = this._x1,
            u = this._y1,
            l = n - t,
            s = i - r,
            f = o - t,
            c = u - r,
            d = f * f + c * c;
        if (this._x1 === null) this._append `M${this._x1=t},${this._y1=r}`;
        else if (d > Sn)
            if (!(Math.abs(c * l - s * f) > Sn) || !a) this._append `L${this._x1=t},${this._y1=r}`;
            else {
                let p = n - o,
                    h = i - u,
                    y = l * l + s * s,
                    w = p * p + h * h,
                    m = Math.sqrt(y),
                    v = Math.sqrt(d),
                    g = a * Math.tan((jd - Math.acos((y + d - w) / (2 * m * v))) / 2),
                    S = g / v,
                    b = g / m;
                Math.abs(S - 1) > Sn && this._append `L${t+S*f},${r+S*c}`, this._append `A${a},${a},0,0,${+(c*p>f*h)},${this._x1=t+b*l},${this._y1=r+b*s}`
            }
    }
    arc(t, r, n, i, a, o) {
        if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
        let u = n * Math.cos(i),
            l = n * Math.sin(i),
            s = t + u,
            f = r + l,
            c = 1 ^ o,
            d = o ? i - a : a - i;
        this._x1 === null ? this._append `M${s},${f}` : (Math.abs(this._x1 - s) > Sn || Math.abs(this._y1 - f) > Sn) && this._append `L${s},${f}`, n && (d < 0 && (d = d % kd + kd), d > h2 ? this._append `A${n},${n},0,1,${c},${t-u},${r-l}A${n},${n},0,1,${c},${this._x1=s},${this._y1=f}` : d > Sn && this._append `A${n},${n},0,${+(d>=jd)},${c},${this._x1=t+n*Math.cos(a)},${this._y1=r+n*Math.sin(a)}`)
    }
    rect(t, r, n, i) {
        this._append `M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+i}h${-n}Z`
    }
    toString() {
        return this._
    }
}

function Yh(e) {
    let t = 3;
    return e.digits = function(r) {
        if (!arguments.length) return t;
        if (r == null) t = null;
        else {
            const n = Math.floor(r);
            if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
            t = n
        }
        return e
    }, () => new y2(t)
}

function Qh(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e)
}

function dx(e) {
    this._context = e
}
dx.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(e, t);
                break
        }
    }
};

function nc(e) {
    return new dx(e)
}

function px(e) {
    return e[0]
}

function hx(e) {
    return e[1]
}

function vx(e, t) {
    var r = de(!0),
        n = null,
        i = nc,
        a = null,
        o = Yh(u);
    e = typeof e == "function" ? e : e === void 0 ? px : de(e), t = typeof t == "function" ? t : t === void 0 ? hx : de(t);

    function u(l) {
        var s, f = (l = Qh(l)).length,
            c, d = !1,
            p;
        for (n == null && (a = i(p = o())), s = 0; s <= f; ++s) !(s < f && r(c = l[s], s, l)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(c, s, l), +t(c, s, l));
        if (p) return a = null, p + "" || null
    }
    return u.x = function(l) {
        return arguments.length ? (e = typeof l == "function" ? l : de(+l), u) : e
    }, u.y = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : de(+l), u) : t
    }, u.defined = function(l) {
        return arguments.length ? (r = typeof l == "function" ? l : de(!!l), u) : r
    }, u.curve = function(l) {
        return arguments.length ? (i = l, n != null && (a = i(n)), u) : i
    }, u.context = function(l) {
        return arguments.length ? (l == null ? n = a = null : a = i(n = l), u) : n
    }, u
}

function ku(e, t, r) {
    var n = null,
        i = de(!0),
        a = null,
        o = nc,
        u = null,
        l = Yh(s);
    e = typeof e == "function" ? e : e === void 0 ? px : de(+e), t = typeof t == "function" ? t : de(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? hx : de(+r);

    function s(c) {
        var d, p, h, y = (c = Qh(c)).length,
            w, m = !1,
            v, g = new Array(y),
            S = new Array(y);
        for (a == null && (u = o(v = l())), d = 0; d <= y; ++d) {
            if (!(d < y && i(w = c[d], d, c)) === m)
                if (m = !m) p = d, u.areaStart(), u.lineStart();
                else {
                    for (u.lineEnd(), u.lineStart(), h = d - 1; h >= p; --h) u.point(g[h], S[h]);
                    u.lineEnd(), u.areaEnd()
                }
            m && (g[d] = +e(w, d, c), S[d] = +t(w, d, c), u.point(n ? +n(w, d, c) : g[d], r ? +r(w, d, c) : S[d]))
        }
        if (v) return u = null, v + "" || null
    }

    function f() {
        return vx().defined(i).curve(o).context(a)
    }
    return s.x = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : de(+c), n = null, s) : e
    }, s.x0 = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : de(+c), s) : e
    }, s.x1 = function(c) {
        return arguments.length ? (n = c == null ? null : typeof c == "function" ? c : de(+c), s) : n
    }, s.y = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : de(+c), r = null, s) : t
    }, s.y0 = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : de(+c), s) : t
    }, s.y1 = function(c) {
        return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : de(+c), s) : r
    }, s.lineX0 = s.lineY0 = function() {
        return f().x(e).y(t)
    }, s.lineY1 = function() {
        return f().x(e).y(r)
    }, s.lineX1 = function() {
        return f().x(n).y(t)
    }, s.defined = function(c) {
        return arguments.length ? (i = typeof c == "function" ? c : de(!!c), s) : i
    }, s.curve = function(c) {
        return arguments.length ? (o = c, a != null && (u = o(a)), s) : o
    }, s.context = function(c) {
        return arguments.length ? (c == null ? a = u = null : u = o(a = c), s) : a
    }, s
}
class yx {
    constructor(t, r) {
        this._context = t, this._x = r
    }
    areaStart() {
        this._line = 0
    }
    areaEnd() {
        this._line = NaN
    }
    lineStart() {
        this._point = 0
    }
    lineEnd() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    }
    point(t, r) {
        switch (t = +t, r = +r, this._point) {
            case 0:
                {
                    this._point = 1,
                    this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
                    break
                }
            case 1:
                this._point = 2;
            default:
                {
                    this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
                    break
                }
        }
        this._x0 = t, this._y0 = r
    }
}

function m2(e) {
    return new yx(e, !0)
}

function g2(e) {
    return new yx(e, !1)
}
const Zh = {
        draw(e, t) {
            const r = rr(t / Cl);
            e.moveTo(r, 0), e.arc(0, 0, r, 0, rc)
        }
    },
    b2 = {
        draw(e, t) {
            const r = rr(t / 5) / 2;
            e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath()
        }
    },
    mx = rr(1 / 3),
    w2 = mx * 2,
    x2 = {
        draw(e, t) {
            const r = rr(t / w2),
                n = r * mx;
            e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath()
        }
    },
    S2 = {
        draw(e, t) {
            const r = rr(t),
                n = -r / 2;
            e.rect(n, n, r, r)
        }
    },
    O2 = .8908130915292852,
    gx = Tl(Cl / 10) / Tl(7 * Cl / 10),
    _2 = Tl(rc / 10) * gx,
    P2 = -cx(rc / 10) * gx,
    A2 = {
        draw(e, t) {
            const r = rr(t * O2),
                n = _2 * r,
                i = P2 * r;
            e.moveTo(0, -r), e.lineTo(n, i);
            for (let a = 1; a < 5; ++a) {
                const o = rc * a / 5,
                    u = cx(o),
                    l = Tl(o);
                e.lineTo(l * r, -u * r), e.lineTo(u * n - l * i, l * n + u * i)
            }
            e.closePath()
        }
    },
    of = rr(3),
    E2 = {
        draw(e, t) {
            const r = -rr(t / ( of * 3));
            e.moveTo(0, r * 2), e.lineTo(- of * r, -r), e.lineTo( of * r, -r), e.closePath()
        }
    },
    $t = -.5,
    Tt = rr(3) / 2,
    Md = 1 / rr(12),
    $2 = (Md / 2 + 1) * 3,
    T2 = {
        draw(e, t) {
            const r = rr(t / $2),
                n = r / 2,
                i = r * Md,
                a = n,
                o = r * Md + r,
                u = -a,
                l = o;
            e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, l), e.lineTo($t * n - Tt * i, Tt * n + $t * i), e.lineTo($t * a - Tt * o, Tt * a + $t * o), e.lineTo($t * u - Tt * l, Tt * u + $t * l), e.lineTo($t * n + Tt * i, $t * i - Tt * n), e.lineTo($t * a + Tt * o, $t * o - Tt * a), e.lineTo($t * u + Tt * l, $t * l - Tt * u), e.closePath()
        }
    };

function C2(e, t) {
    let r = null,
        n = Yh(i);
    e = typeof e == "function" ? e : de(e || Zh), t = typeof t == "function" ? t : de(t === void 0 ? 64 : +t);

    function i() {
        let a;
        if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null
    }
    return i.type = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : de(a), i) : e
    }, i.size = function(a) {
        return arguments.length ? (t = typeof a == "function" ? a : de(+a), i) : t
    }, i.context = function(a) {
        return arguments.length ? (r = a ? ? null, i) : r
    }, i
}

function jl() {}

function kl(e, t, r) {
    e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + r) / 6)
}

function bx(e) {
    this._context = e
}
bx.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 3:
                kl(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                kl(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function j2(e) {
    return new bx(e)
}

function wx(e) {
    this._context = e
}
wx.prototype = {
    areaStart: jl,
    areaEnd: jl,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 1:
                {
                    this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                    break
                }
            case 2:
                {
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                    this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                    this._context.closePath();
                    break
                }
            case 3:
                {
                    this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4);
                    break
                }
        }
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._x2 = e, this._y2 = t;
                break;
            case 1:
                this._point = 2, this._x3 = e, this._y3 = t;
                break;
            case 2:
                this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
                break;
            default:
                kl(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function k2(e) {
    return new wx(e)
}

function xx(e) {
    this._context = e
}
xx.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + e) / 6,
                    n = (this._y0 + 4 * this._y1 + t) / 6;
                this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                break;
            case 3:
                this._point = 4;
            default:
                kl(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function M2(e) {
    return new xx(e)
}

function Sx(e) {
    this._context = e
}
Sx.prototype = {
    areaStart: jl,
    areaEnd: jl,
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        this._point && this._context.closePath()
    },
    point: function(e, t) {
        e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t))
    }
};

function I2(e) {
    return new Sx(e)
}

function hm(e) {
    return e < 0 ? -1 : 1
}

function vm(e, t, r) {
    var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || i < 0 && -0),
        o = (r - e._y1) / (i || n < 0 && -0),
        u = (a * i + o * n) / (n + i);
    return (hm(a) + hm(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0
}

function ym(e, t) {
    var r = e._x1 - e._x0;
    return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t
}

function uf(e, t, r) {
    var n = e._x0,
        i = e._y0,
        a = e._x1,
        o = e._y1,
        u = (a - n) / 3;
    e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o)
}

function Ml(e) {
    this._context = e
}
Ml.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                uf(this, this._t0, ym(this, this._t0));
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        var r = NaN;
        if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, uf(this, ym(this, r = vm(this, e, t)), r);
                    break;
                default:
                    uf(this, this._t0, r = vm(this, e, t));
                    break
            }
            this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r
        }
    }
};

function Ox(e) {
    this._context = new _x(e)
}(Ox.prototype = Object.create(Ml.prototype)).point = function(e, t) {
    Ml.prototype.point.call(this, t, e)
};

function _x(e) {
    this._context = e
}
_x.prototype = {
    moveTo: function(e, t) {
        this._context.moveTo(t, e)
    },
    closePath: function() {
        this._context.closePath()
    },
    lineTo: function(e, t) {
        this._context.lineTo(t, e)
    },
    bezierCurveTo: function(e, t, r, n, i, a) {
        this._context.bezierCurveTo(t, e, n, r, a, i)
    }
};

function N2(e) {
    return new Ml(e)
}

function D2(e) {
    return new Ox(e)
}

function Px(e) {
    this._context = e
}
Px.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = [], this._y = []
    },
    lineEnd: function() {
        var e = this._x,
            t = this._y,
            r = e.length;
        if (r)
            if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2) this._context.lineTo(e[1], t[1]);
            else
                for (var n = mm(e), i = mm(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
        (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
    },
    point: function(e, t) {
        this._x.push(+e), this._y.push(+t)
    }
};

function mm(e) {
    var t, r = e.length - 1,
        n, i = new Array(r),
        a = new Array(r),
        o = new Array(r);
    for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
    for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
    for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
    for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
    return [i, a]
}

function L2(e) {
    return new Px(e)
}

function ic(e, t) {
    this._context = e, this._t = t
}
ic.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = this._y = NaN, this._point = 0
    },
    lineEnd: function() {
        0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default:
                {
                    if (this._t <= 0) this._context.lineTo(this._x, t),
                    this._context.lineTo(e, t);
                    else {
                        var r = this._x * (1 - this._t) + e * this._t;
                        this._context.lineTo(r, this._y), this._context.lineTo(r, t)
                    }
                    break
                }
        }
        this._x = e, this._y = t
    }
};

function R2(e) {
    return new ic(e, .5)
}

function B2(e) {
    return new ic(e, 0)
}

function z2(e) {
    return new ic(e, 1)
}

function Di(e, t) {
    if ((o = e.length) > 1)
        for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
            for (i = a, a = e[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1]
}

function Id(e) {
    for (var t = e.length, r = new Array(t); --t >= 0;) r[t] = t;
    return r
}

function F2(e, t) {
    return e[t]
}

function U2(e) {
    const t = [];
    return t.key = e, t
}

function W2() {
    var e = de([]),
        t = Id,
        r = Di,
        n = F2;

    function i(a) {
        var o = Array.from(e.apply(this, arguments), U2),
            u, l = o.length,
            s = -1,
            f;
        for (const c of a)
            for (u = 0, ++s; u < l; ++u)(o[u][s] = [0, +n(c, o[u].key, s, a)]).data = c;
        for (u = 0, f = Qh(t(o)); u < l; ++u) o[f[u]].index = u;
        return r(o, f), o
    }
    return i.keys = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : de(Array.from(a)), i) : e
    }, i.value = function(a) {
        return arguments.length ? (n = typeof a == "function" ? a : de(+a), i) : n
    }, i.order = function(a) {
        return arguments.length ? (t = a == null ? Id : typeof a == "function" ? a : de(Array.from(a)), i) : t
    }, i.offset = function(a) {
        return arguments.length ? (r = a ? ? Di, i) : r
    }, i
}

function H2(e, t) {
    if ((n = e.length) > 0) {
        for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
            for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
            if (o)
                for (r = 0; r < n; ++r) e[r][i][1] /= o
        }
        Di(e, t)
    }
}

function V2(e, t) {
    if ((i = e.length) > 0) {
        for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
            for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
            n[r][1] += n[r][0] = -u / 2
        }
        Di(e, t)
    }
}

function K2(e, t) {
    if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
        for (var r = 0, n = 1, i, a, o; n < a; ++n) {
            for (var u = 0, l = 0, s = 0; u < o; ++u) {
                for (var f = e[t[u]], c = f[n][1] || 0, d = f[n - 1][1] || 0, p = (c - d) / 2, h = 0; h < u; ++h) {
                    var y = e[t[h]],
                        w = y[n][1] || 0,
                        m = y[n - 1][1] || 0;
                    p += w - m
                }
                l += c, s += p * c
            }
            i[n - 1][1] += i[n - 1][0] = r, l && (r -= s / l)
        }
        i[n - 1][1] += i[n - 1][0] = r, Di(e, t)
    }
}

function wo(e) {
    "@babel/helpers - typeof";
    return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, wo(e)
}
var G2 = ["type", "size", "sizeType"];

function Nd() {
    return Nd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Nd.apply(this, arguments)
}

function gm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function bm(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? gm(Object(r), !0).forEach(function(n) {
            q2(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function q2(e, t, r) {
    return t = X2(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function X2(e) {
    var t = Y2(e, "string");
    return wo(t) == "symbol" ? t : t + ""
}

function Y2(e, t) {
    if (wo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (wo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Q2(e, t) {
    if (e == null) return {};
    var r = Z2(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function Z2(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}
var Ax = {
        symbolCircle: Zh,
        symbolCross: b2,
        symbolDiamond: x2,
        symbolSquare: S2,
        symbolStar: A2,
        symbolTriangle: E2,
        symbolWye: T2
    },
    J2 = Math.PI / 180,
    ej = function(t) {
        var r = "symbol".concat(tc(t));
        return Ax[r] || Zh
    },
    tj = function(t, r, n) {
        if (r === "area") return t;
        switch (n) {
            case "cross":
                return 5 * t * t / 9;
            case "diamond":
                return .5 * t * t / Math.sqrt(3);
            case "square":
                return t * t;
            case "star":
                {
                    var i = 18 * J2;
                    return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
                }
            case "triangle":
                return Math.sqrt(3) * t * t / 4;
            case "wye":
                return (21 - 10 * Math.sqrt(3)) * t * t / 8;
            default:
                return Math.PI * t * t / 4
        }
    },
    rj = function(t, r) {
        Ax["symbol".concat(tc(t))] = r
    },
    Jh = function(t) {
        var r = t.type,
            n = r === void 0 ? "circle" : r,
            i = t.size,
            a = i === void 0 ? 64 : i,
            o = t.sizeType,
            u = o === void 0 ? "area" : o,
            l = Q2(t, G2),
            s = bm(bm({}, l), {}, {
                type: n,
                size: a,
                sizeType: u
            }),
            f = function() {
                var w = ej(n),
                    m = C2().type(w).size(tj(a, u, n));
                return m()
            },
            c = s.className,
            d = s.cx,
            p = s.cy,
            h = ee(s, !0);
        return d === +d && p === +p && a === +a ? A.createElement("path", Nd({}, h, {
            className: ie("recharts-symbols", c),
            transform: "translate(".concat(d, ", ").concat(p, ")"),
            d: f()
        })) : null
    };
Jh.registerSymbol = rj;

function Li(e) {
    "@babel/helpers - typeof";
    return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Li(e)
}

function Dd() {
    return Dd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Dd.apply(this, arguments)
}

function wm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function nj(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wm(Object(r), !0).forEach(function(n) {
            xo(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ij(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function aj(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $x(n.key), n)
    }
}

function oj(e, t, r) {
    return t && aj(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function uj(e, t, r) {
    return t = Il(t), lj(e, Ex() ? Reflect.construct(t, r || [], Il(e).constructor) : t.apply(e, r))
}

function lj(e, t) {
    if (t && (Li(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return sj(e)
}

function sj(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Ex() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Ex = function() {
        return !!e
    })()
}

function Il(e) {
    return Il = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Il(e)
}

function cj(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Ld(e, t)
}

function Ld(e, t) {
    return Ld = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Ld(e, t)
}

function xo(e, t, r) {
    return t = $x(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function $x(e) {
    var t = fj(e, "string");
    return Li(t) == "symbol" ? t : t + ""
}

function fj(e, t) {
    if (Li(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Li(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Ct = 32,
    ev = function(e) {
        function t() {
            return ij(this, t), uj(this, t, arguments)
        }
        return cj(t, e), oj(t, [{
            key: "renderIcon",
            value: function(n) {
                var i = this.props.inactiveColor,
                    a = Ct / 2,
                    o = Ct / 6,
                    u = Ct / 3,
                    l = n.inactive ? i : n.color;
                if (n.type === "plainline") return A.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: l,
                    strokeDasharray: n.payload.strokeDasharray,
                    x1: 0,
                    y1: a,
                    x2: Ct,
                    y2: a,
                    className: "recharts-legend-icon"
                });
                if (n.type === "line") return A.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: l,
                    d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(Ct, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
                    className: "recharts-legend-icon"
                });
                if (n.type === "rect") return A.createElement("path", {
                    stroke: "none",
                    fill: l,
                    d: "M0,".concat(Ct / 8, "h").concat(Ct, "v").concat(Ct * 3 / 4, "h").concat(-Ct, "z"),
                    className: "recharts-legend-icon"
                });
                if (A.isValidElement(n.legendIcon)) {
                    var s = nj({}, n);
                    return delete s.legendIcon, A.cloneElement(n.legendIcon, s)
                }
                return A.createElement(Jh, {
                    fill: l,
                    cx: a,
                    cy: a,
                    size: Ct,
                    sizeType: "diameter",
                    type: n.type
                })
            }
        }, {
            key: "renderItems",
            value: function() {
                var n = this,
                    i = this.props,
                    a = i.payload,
                    o = i.iconSize,
                    u = i.layout,
                    l = i.formatter,
                    s = i.inactiveColor,
                    f = {
                        x: 0,
                        y: 0,
                        width: Ct,
                        height: Ct
                    },
                    c = {
                        display: u === "horizontal" ? "inline-block" : "block",
                        marginRight: 10
                    },
                    d = {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: 4
                    };
                return a.map(function(p, h) {
                    var y = p.formatter || l,
                        w = ie(xo(xo({
                            "recharts-legend-item": !0
                        }, "legend-item-".concat(h), !0), "inactive", p.inactive));
                    if (p.type === "none") return null;
                    var m = Z(p.value) ? null : p.value;
                    _r(!Z(p.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
                    var v = p.inactive ? s : p.color;
                    return A.createElement("li", Dd({
                        className: w,
                        style: c,
                        key: "legend-item-".concat(h)
                    }, $l(n.props, p, h)), A.createElement(Ed, {
                        width: o,
                        height: o,
                        viewBox: f,
                        style: d
                    }, n.renderIcon(p)), A.createElement("span", {
                        className: "recharts-legend-item-text",
                        style: {
                            color: v
                        }
                    }, y ? y(m, p, h) : m))
                })
            }
        }, {
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.payload,
                    a = n.layout,
                    o = n.align;
                if (!i || !i.length) return null;
                var u = {
                    padding: 0,
                    margin: 0,
                    textAlign: a === "horizontal" ? o : "left"
                };
                return A.createElement("ul", {
                    className: "recharts-default-legend",
                    style: u
                }, this.renderItems())
            }
        }])
    }(F.PureComponent);
xo(ev, "displayName", "Legend");
xo(ev, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc"
});
var dj = Us;

function pj() {
    this.__data__ = new dj, this.size = 0
}
var hj = pj;

function vj(e) {
    var t = this.__data__,
        r = t.delete(e);
    return this.size = t.size, r
}
var yj = vj;

function mj(e) {
    return this.__data__.get(e)
}
var gj = mj;

function bj(e) {
    return this.__data__.has(e)
}
var wj = bj,
    xj = Us,
    Sj = Fh,
    Oj = Uh,
    _j = 200;

function Pj(e, t) {
    var r = this.__data__;
    if (r instanceof xj) {
        var n = r.__data__;
        if (!Sj || n.length < _j - 1) return n.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new Oj(n)
    }
    return r.set(e, t), this.size = r.size, this
}
var Aj = Pj,
    Ej = Us,
    $j = hj,
    Tj = yj,
    Cj = gj,
    jj = wj,
    kj = Aj;

function fa(e) {
    var t = this.__data__ = new Ej(e);
    this.size = t.size
}
fa.prototype.clear = $j;
fa.prototype.delete = Tj;
fa.prototype.get = Cj;
fa.prototype.has = jj;
fa.prototype.set = kj;
var Tx = fa,
    Mj = "__lodash_hash_undefined__";

function Ij(e) {
    return this.__data__.set(e, Mj), this
}
var Nj = Ij;

function Dj(e) {
    return this.__data__.has(e)
}
var Lj = Dj,
    Rj = Uh,
    Bj = Nj,
    zj = Lj;

function Nl(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.__data__ = new Rj; ++t < r;) this.add(e[t])
}
Nl.prototype.add = Nl.prototype.push = Bj;
Nl.prototype.has = zj;
var Cx = Nl;

function Fj(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
    return !1
}
var jx = Fj;

function Uj(e, t) {
    return e.has(t)
}
var kx = Uj,
    Wj = Cx,
    Hj = jx,
    Vj = kx,
    Kj = 1,
    Gj = 2;

function qj(e, t, r, n, i, a) {
    var o = r & Kj,
        u = e.length,
        l = t.length;
    if (u != l && !(o && l > u)) return !1;
    var s = a.get(e),
        f = a.get(t);
    if (s && f) return s == t && f == e;
    var c = -1,
        d = !0,
        p = r & Gj ? new Wj : void 0;
    for (a.set(e, t), a.set(t, e); ++c < u;) {
        var h = e[c],
            y = t[c];
        if (n) var w = o ? n(y, h, c, t, e, a) : n(h, y, c, e, t, a);
        if (w !== void 0) {
            if (w) continue;
            d = !1;
            break
        }
        if (p) {
            if (!Hj(t, function(m, v) {
                    if (!Vj(p, v) && (h === m || i(h, m, r, n, a))) return p.push(v)
                })) {
                d = !1;
                break
            }
        } else if (!(h === y || i(h, y, r, n, a))) {
            d = !1;
            break
        }
    }
    return a.delete(e), a.delete(t), d
}
var Mx = qj,
    Xj = dr,
    Yj = Xj.Uint8Array,
    Qj = Yj;

function Zj(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach(function(n, i) {
        r[++t] = [i, n]
    }), r
}
var Jj = Zj;

function ek(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach(function(n) {
        r[++t] = n
    }), r
}
var tv = ek,
    xm = au,
    Sm = Qj,
    tk = zh,
    rk = Mx,
    nk = Jj,
    ik = tv,
    ak = 1,
    ok = 2,
    uk = "[object Boolean]",
    lk = "[object Date]",
    sk = "[object Error]",
    ck = "[object Map]",
    fk = "[object Number]",
    dk = "[object RegExp]",
    pk = "[object Set]",
    hk = "[object String]",
    vk = "[object Symbol]",
    yk = "[object ArrayBuffer]",
    mk = "[object DataView]",
    Om = xm ? xm.prototype : void 0,
    lf = Om ? Om.valueOf : void 0;

function gk(e, t, r, n, i, a, o) {
    switch (r) {
        case mk:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case yk:
            return !(e.byteLength != t.byteLength || !a(new Sm(e), new Sm(t)));
        case uk:
        case lk:
        case fk:
            return tk(+e, +t);
        case sk:
            return e.name == t.name && e.message == t.message;
        case dk:
        case hk:
            return e == t + "";
        case ck:
            var u = nk;
        case pk:
            var l = n & ak;
            if (u || (u = ik), e.size != t.size && !l) return !1;
            var s = o.get(e);
            if (s) return s == t;
            n |= ok, o.set(e, t);
            var f = rk(u(e), u(t), n, i, a, o);
            return o.delete(e), f;
        case vk:
            if (lf) return lf.call(e) == lf.call(t)
    }
    return !1
}
var bk = gk;

function wk(e, t) {
    for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
    return e
}
var Ix = wk,
    xk = Ix,
    Sk = vt;

function Ok(e, t, r) {
    var n = t(e);
    return Sk(e) ? n : xk(n, r(e))
}
var _k = Ok;

function Pk(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n;) {
        var o = e[r];
        t(o, r, e) && (a[i++] = o)
    }
    return a
}
var Ak = Pk;

function Ek() {
    return []
}
var $k = Ek,
    Tk = Ak,
    Ck = $k,
    jk = Object.prototype,
    kk = jk.propertyIsEnumerable,
    _m = Object.getOwnPropertySymbols,
    Mk = _m ? function(e) {
        return e == null ? [] : (e = Object(e), Tk(_m(e), function(t) {
            return kk.call(e, t)
        }))
    } : Ck,
    Ik = Mk;

function Nk(e, t) {
    for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
    return n
}
var Dk = Nk,
    Lk = Dr,
    Rk = Lr,
    Bk = "[object Arguments]";

function zk(e) {
    return Rk(e) && Lk(e) == Bk
}
var Fk = zk,
    Pm = Fk,
    Uk = Lr,
    Nx = Object.prototype,
    Wk = Nx.hasOwnProperty,
    Hk = Nx.propertyIsEnumerable,
    Vk = Pm(function() {
        return arguments
    }()) ? Pm : function(e) {
        return Uk(e) && Wk.call(e, "callee") && !Hk.call(e, "callee")
    },
    rv = Vk,
    Dl = {
        exports: {}
    };

function Kk() {
    return !1
}
var Gk = Kk;
Dl.exports;
(function(e, t) {
    var r = dr,
        n = Gk,
        i = t && !t.nodeType && t,
        a = i && !0 && e && !e.nodeType && e,
        o = a && a.exports === i,
        u = o ? r.Buffer : void 0,
        l = u ? u.isBuffer : void 0,
        s = l || n;
    e.exports = s
})(Dl, Dl.exports);
var Dx = Dl.exports,
    qk = 9007199254740991,
    Xk = /^(?:0|[1-9]\d*)$/;

function Yk(e, t) {
    var r = typeof e;
    return t = t ? ? qk, !!t && (r == "number" || r != "symbol" && Xk.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var nv = Yk,
    Qk = 9007199254740991;

function Zk(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qk
}
var iv = Zk,
    Jk = Dr,
    eM = iv,
    tM = Lr,
    rM = "[object Arguments]",
    nM = "[object Array]",
    iM = "[object Boolean]",
    aM = "[object Date]",
    oM = "[object Error]",
    uM = "[object Function]",
    lM = "[object Map]",
    sM = "[object Number]",
    cM = "[object Object]",
    fM = "[object RegExp]",
    dM = "[object Set]",
    pM = "[object String]",
    hM = "[object WeakMap]",
    vM = "[object ArrayBuffer]",
    yM = "[object DataView]",
    mM = "[object Float32Array]",
    gM = "[object Float64Array]",
    bM = "[object Int8Array]",
    wM = "[object Int16Array]",
    xM = "[object Int32Array]",
    SM = "[object Uint8Array]",
    OM = "[object Uint8ClampedArray]",
    _M = "[object Uint16Array]",
    PM = "[object Uint32Array]",
    ve = {};
ve[mM] = ve[gM] = ve[bM] = ve[wM] = ve[xM] = ve[SM] = ve[OM] = ve[_M] = ve[PM] = !0;
ve[rM] = ve[nM] = ve[vM] = ve[iM] = ve[yM] = ve[aM] = ve[oM] = ve[uM] = ve[lM] = ve[sM] = ve[cM] = ve[fM] = ve[dM] = ve[pM] = ve[hM] = !1;

function AM(e) {
    return tM(e) && eM(e.length) && !!ve[Jk(e)]
}
var EM = AM;

function $M(e) {
    return function(t) {
        return e(t)
    }
}
var Lx = $M,
    Ll = {
        exports: {}
    };
Ll.exports;
(function(e, t) {
    var r = Vw,
        n = t && !t.nodeType && t,
        i = n && !0 && e && !e.nodeType && e,
        a = i && i.exports === n,
        o = a && r.process,
        u = function() {
            try {
                var l = i && i.require && i.require("util").types;
                return l || o && o.binding && o.binding("util")
            } catch {}
        }();
    e.exports = u
})(Ll, Ll.exports);
var TM = Ll.exports,
    CM = EM,
    jM = Lx,
    Am = TM,
    Em = Am && Am.isTypedArray,
    kM = Em ? jM(Em) : CM,
    Rx = kM,
    MM = Dk,
    IM = rv,
    NM = vt,
    DM = Dx,
    LM = nv,
    RM = Rx,
    BM = Object.prototype,
    zM = BM.hasOwnProperty;

function FM(e, t) {
    var r = NM(e),
        n = !r && IM(e),
        i = !r && !n && DM(e),
        a = !r && !n && !i && RM(e),
        o = r || n || i || a,
        u = o ? MM(e.length, String) : [],
        l = u.length;
    for (var s in e)(t || zM.call(e, s)) && !(o && (s == "length" || i && (s == "offset" || s == "parent") || a && (s == "buffer" || s == "byteLength" || s == "byteOffset") || LM(s, l))) && u.push(s);
    return u
}
var UM = FM,
    WM = Object.prototype;

function HM(e) {
    var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || WM;
    return e === r
}
var VM = HM;

function KM(e, t) {
    return function(r) {
        return e(t(r))
    }
}
var Bx = KM,
    GM = Bx,
    qM = GM(Object.keys, Object),
    XM = qM,
    YM = VM,
    QM = XM,
    ZM = Object.prototype,
    JM = ZM.hasOwnProperty;

function eI(e) {
    if (!YM(e)) return QM(e);
    var t = [];
    for (var r in Object(e)) JM.call(e, r) && r != "constructor" && t.push(r);
    return t
}
var tI = eI,
    rI = Bh,
    nI = iv;

function iI(e) {
    return e != null && nI(e.length) && !rI(e)
}
var lu = iI,
    aI = UM,
    oI = tI,
    uI = lu;

function lI(e) {
    return uI(e) ? aI(e) : oI(e)
}
var ac = lI,
    sI = _k,
    cI = Ik,
    fI = ac;

function dI(e) {
    return sI(e, fI, cI)
}
var pI = dI,
    $m = pI,
    hI = 1,
    vI = Object.prototype,
    yI = vI.hasOwnProperty;

function mI(e, t, r, n, i, a) {
    var o = r & hI,
        u = $m(e),
        l = u.length,
        s = $m(t),
        f = s.length;
    if (l != f && !o) return !1;
    for (var c = l; c--;) {
        var d = u[c];
        if (!(o ? d in t : yI.call(t, d))) return !1
    }
    var p = a.get(e),
        h = a.get(t);
    if (p && h) return p == t && h == e;
    var y = !0;
    a.set(e, t), a.set(t, e);
    for (var w = o; ++c < l;) {
        d = u[c];
        var m = e[d],
            v = t[d];
        if (n) var g = o ? n(v, m, d, t, e, a) : n(m, v, d, e, t, a);
        if (!(g === void 0 ? m === v || i(m, v, r, n, a) : g)) {
            y = !1;
            break
        }
        w || (w = d == "constructor")
    }
    if (y && !w) {
        var S = e.constructor,
            b = t.constructor;
        S != b && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof b == "function" && b instanceof b) && (y = !1)
    }
    return a.delete(e), a.delete(t), y
}
var gI = mI,
    bI = qn,
    wI = dr,
    xI = bI(wI, "DataView"),
    SI = xI,
    OI = qn,
    _I = dr,
    PI = OI(_I, "Promise"),
    AI = PI,
    EI = qn,
    $I = dr,
    TI = EI($I, "Set"),
    zx = TI,
    CI = qn,
    jI = dr,
    kI = CI(jI, "WeakMap"),
    MI = kI,
    Rd = SI,
    Bd = Fh,
    zd = AI,
    Fd = zx,
    Ud = MI,
    Fx = Dr,
    da = Gw,
    Tm = "[object Map]",
    II = "[object Object]",
    Cm = "[object Promise]",
    jm = "[object Set]",
    km = "[object WeakMap]",
    Mm = "[object DataView]",
    NI = da(Rd),
    DI = da(Bd),
    LI = da(zd),
    RI = da(Fd),
    BI = da(Ud),
    On = Fx;
(Rd && On(new Rd(new ArrayBuffer(1))) != Mm || Bd && On(new Bd) != Tm || zd && On(zd.resolve()) != Cm || Fd && On(new Fd) != jm || Ud && On(new Ud) != km) && (On = function(e) {
    var t = Fx(e),
        r = t == II ? e.constructor : void 0,
        n = r ? da(r) : "";
    if (n) switch (n) {
        case NI:
            return Mm;
        case DI:
            return Tm;
        case LI:
            return Cm;
        case RI:
            return jm;
        case BI:
            return km
    }
    return t
});
var zI = On,
    sf = Tx,
    FI = Mx,
    UI = bk,
    WI = gI,
    Im = zI,
    Nm = vt,
    Dm = Dx,
    HI = Rx,
    VI = 1,
    Lm = "[object Arguments]",
    Rm = "[object Array]",
    Mu = "[object Object]",
    KI = Object.prototype,
    Bm = KI.hasOwnProperty;

function GI(e, t, r, n, i, a) {
    var o = Nm(e),
        u = Nm(t),
        l = o ? Rm : Im(e),
        s = u ? Rm : Im(t);
    l = l == Lm ? Mu : l, s = s == Lm ? Mu : s;
    var f = l == Mu,
        c = s == Mu,
        d = l == s;
    if (d && Dm(e)) {
        if (!Dm(t)) return !1;
        o = !0, f = !1
    }
    if (d && !f) return a || (a = new sf), o || HI(e) ? FI(e, t, r, n, i, a) : UI(e, t, l, r, n, i, a);
    if (!(r & VI)) {
        var p = f && Bm.call(e, "__wrapped__"),
            h = c && Bm.call(t, "__wrapped__");
        if (p || h) {
            var y = p ? e.value() : e,
                w = h ? t.value() : t;
            return a || (a = new sf), i(y, w, r, n, a)
        }
    }
    return d ? (a || (a = new sf), WI(e, t, r, n, i, a)) : !1
}
var qI = GI,
    XI = qI,
    zm = Lr;

function Ux(e, t, r, n, i) {
    return e === t ? !0 : e == null || t == null || !zm(e) && !zm(t) ? e !== e && t !== t : XI(e, t, r, n, Ux, i)
}
var av = Ux,
    YI = Tx,
    QI = av,
    ZI = 1,
    JI = 2;

function eN(e, t, r, n) {
    var i = r.length,
        a = i,
        o = !n;
    if (e == null) return !a;
    for (e = Object(e); i--;) {
        var u = r[i];
        if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
    }
    for (; ++i < a;) {
        u = r[i];
        var l = u[0],
            s = e[l],
            f = u[1];
        if (o && u[2]) {
            if (s === void 0 && !(l in e)) return !1
        } else {
            var c = new YI;
            if (n) var d = n(s, f, l, e, t, c);
            if (!(d === void 0 ? QI(f, s, ZI | JI, n, c) : d)) return !1
        }
    }
    return !0
}
var tN = eN,
    rN = dn;

function nN(e) {
    return e === e && !rN(e)
}
var Wx = nN,
    iN = Wx,
    aN = ac;

function oN(e) {
    for (var t = aN(e), r = t.length; r--;) {
        var n = t[r],
            i = e[n];
        t[r] = [n, i, iN(i)]
    }
    return t
}
var uN = oN;

function lN(e, t) {
    return function(r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
    }
}
var Hx = lN,
    sN = tN,
    cN = uN,
    fN = Hx;

function dN(e) {
    var t = cN(e);
    return t.length == 1 && t[0][2] ? fN(t[0][0], t[0][1]) : function(r) {
        return r === e || sN(r, e, t)
    }
}
var pN = dN;

function hN(e, t) {
    return e != null && t in Object(e)
}
var vN = hN,
    yN = Zw,
    mN = rv,
    gN = vt,
    bN = nv,
    wN = iv,
    xN = Hs;

function SN(e, t, r) {
    t = yN(t, e);
    for (var n = -1, i = t.length, a = !1; ++n < i;) {
        var o = xN(t[n]);
        if (!(a = e != null && r(e, o))) break;
        e = e[o]
    }
    return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && wN(i) && bN(o, i) && (gN(e) || mN(e)))
}
var ON = SN,
    _N = vN,
    PN = ON;

function AN(e, t) {
    return e != null && PN(e, t, _N)
}
var EN = AN,
    $N = av,
    TN = Jw,
    CN = EN,
    jN = Rh,
    kN = Wx,
    MN = Hx,
    IN = Hs,
    NN = 1,
    DN = 2;

function LN(e, t) {
    return jN(e) && kN(t) ? MN(IN(e), t) : function(r) {
        var n = TN(r, e);
        return n === void 0 && n === t ? CN(r, e) : $N(t, n, NN | DN)
    }
}
var RN = LN;

function BN(e) {
    return e
}
var pa = BN;

function zN(e) {
    return function(t) {
        return t == null ? void 0 : t[e]
    }
}
var FN = zN,
    UN = Vh;

function WN(e) {
    return function(t) {
        return UN(t, e)
    }
}
var HN = WN,
    VN = FN,
    KN = HN,
    GN = Rh,
    qN = Hs;

function XN(e) {
    return GN(e) ? VN(qN(e)) : KN(e)
}
var YN = XN,
    QN = pN,
    ZN = RN,
    JN = pa,
    eD = vt,
    tD = YN;

function rD(e) {
    return typeof e == "function" ? e : e == null ? JN : typeof e == "object" ? eD(e) ? ZN(e[0], e[1]) : QN(e) : tD(e)
}
var pn = rD;

function nD(e, t, r, n) {
    for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
        if (t(e[a], a, e)) return a;
    return -1
}
var Vx = nD;

function iD(e) {
    return e !== e
}
var aD = iD;

function oD(e, t, r) {
    for (var n = r - 1, i = e.length; ++n < i;)
        if (e[n] === t) return n;
    return -1
}
var uD = oD,
    lD = Vx,
    sD = aD,
    cD = uD;

function fD(e, t, r) {
    return t === t ? cD(e, t, r) : lD(e, sD, r)
}
var dD = fD,
    pD = dD;

function hD(e, t) {
    var r = e == null ? 0 : e.length;
    return !!r && pD(e, t, 0) > -1
}
var vD = hD;

function yD(e, t, r) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i;)
        if (r(t, e[n])) return !0;
    return !1
}
var mD = yD;

function gD() {}
var bD = gD,
    cf = zx,
    wD = bD,
    xD = tv,
    SD = 1 / 0,
    OD = cf && 1 / xD(new cf([, -0]))[1] == SD ? function(e) {
        return new cf(e)
    } : wD,
    _D = OD,
    PD = Cx,
    AD = vD,
    ED = mD,
    $D = kx,
    TD = _D,
    CD = tv,
    jD = 200;

function kD(e, t, r) {
    var n = -1,
        i = AD,
        a = e.length,
        o = !0,
        u = [],
        l = u;
    if (r) o = !1, i = ED;
    else if (a >= jD) {
        var s = t ? null : TD(e);
        if (s) return CD(s);
        o = !1, i = $D, l = new PD
    } else l = t ? [] : u;
    e: for (; ++n < a;) {
        var f = e[n],
            c = t ? t(f) : f;
        if (f = r || f !== 0 ? f : 0, o && c === c) {
            for (var d = l.length; d--;)
                if (l[d] === c) continue e;
            t && l.push(c), u.push(f)
        } else i(l, c, r) || (l !== u && l.push(c), u.push(f))
    }
    return u
}
var MD = kD,
    ID = pn,
    ND = MD;

function DD(e, t) {
    return e && e.length ? ND(e, ID(t)) : []
}
var LD = DD;
const Fm = fe(LD);

function Kx(e, t, r) {
    return t === !0 ? Fm(e, r) : Z(t) ? Fm(e, t) : e
}

function Ri(e) {
    "@babel/helpers - typeof";
    return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ri(e)
}
var RD = ["ref"];

function Um(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function pr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Um(Object(r), !0).forEach(function(n) {
            oc(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function BD(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Wm(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qx(n.key), n)
    }
}

function zD(e, t, r) {
    return t && Wm(e.prototype, t), r && Wm(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function FD(e, t, r) {
    return t = Rl(t), UD(e, Gx() ? Reflect.construct(t, r || [], Rl(e).constructor) : t.apply(e, r))
}

function UD(e, t) {
    if (t && (Ri(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return WD(e)
}

function WD(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Gx() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Gx = function() {
        return !!e
    })()
}

function Rl(e) {
    return Rl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Rl(e)
}

function HD(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Wd(e, t)
}

function Wd(e, t) {
    return Wd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Wd(e, t)
}

function oc(e, t, r) {
    return t = qx(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function qx(e) {
    var t = VD(e, "string");
    return Ri(t) == "symbol" ? t : t + ""
}

function VD(e, t) {
    if (Ri(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Ri(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function KD(e, t) {
    if (e == null) return {};
    var r = GD(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function GD(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function qD(e) {
    return e.value
}

function XD(e, t) {
    if (A.isValidElement(e)) return A.cloneElement(e, t);
    if (typeof e == "function") return A.createElement(e, t);
    t.ref;
    var r = KD(t, RD);
    return A.createElement(ev, r)
}
var Hm = 1,
    Ai = function(e) {
        function t() {
            var r;
            BD(this, t);
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            return r = FD(this, t, [].concat(i)), oc(r, "lastBoundingBox", {
                width: -1,
                height: -1
            }), r
        }
        return HD(t, e), zD(t, [{
            key: "componentDidMount",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "getBBox",
            value: function() {
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var n = this.wrapperNode.getBoundingClientRect();
                    return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n
                }
                return null
            }
        }, {
            key: "updateBBox",
            value: function() {
                var n = this.props.onBBoxUpdate,
                    i = this.getBBox();
                i ? (Math.abs(i.width - this.lastBoundingBox.width) > Hm || Math.abs(i.height - this.lastBoundingBox.height) > Hm) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null))
            }
        }, {
            key: "getBBoxSnapshot",
            value: function() {
                return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? pr({}, this.lastBoundingBox) : {
                    width: 0,
                    height: 0
                }
            }
        }, {
            key: "getDefaultPosition",
            value: function(n) {
                var i = this.props,
                    a = i.layout,
                    o = i.align,
                    u = i.verticalAlign,
                    l = i.margin,
                    s = i.chartWidth,
                    f = i.chartHeight,
                    c, d;
                if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
                    if (o === "center" && a === "vertical") {
                        var p = this.getBBoxSnapshot();
                        c = {
                            left: ((s || 0) - p.width) / 2
                        }
                    } else c = o === "right" ? {
                        right: l && l.right || 0
                    } : {
                        left: l && l.left || 0
                    };
                if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
                    if (u === "middle") {
                        var h = this.getBBoxSnapshot();
                        d = {
                            top: ((f || 0) - h.height) / 2
                        }
                    } else d = u === "bottom" ? {
                        bottom: l && l.bottom || 0
                    } : {
                        top: l && l.top || 0
                    };
                return pr(pr({}, c), d)
            }
        }, {
            key: "render",
            value: function() {
                var n = this,
                    i = this.props,
                    a = i.content,
                    o = i.width,
                    u = i.height,
                    l = i.wrapperStyle,
                    s = i.payloadUniqBy,
                    f = i.payload,
                    c = pr(pr({
                        position: "absolute",
                        width: o || "auto",
                        height: u || "auto"
                    }, this.getDefaultPosition(l)), l);
                return A.createElement("div", {
                    className: "recharts-legend-wrapper",
                    style: c,
                    ref: function(p) {
                        n.wrapperNode = p
                    }
                }, XD(a, pr(pr({}, this.props), {}, {
                    payload: Kx(f, s, qD)
                })))
            }
        }], [{
            key: "getWithHeight",
            value: function(n, i) {
                var a = pr(pr({}, this.defaultProps), n.props),
                    o = a.layout;
                return o === "vertical" && W(n.props.height) ? {
                    height: n.props.height
                } : o === "horizontal" ? {
                    width: n.props.width || i
                } : null
            }
        }])
    }(F.PureComponent);
oc(Ai, "displayName", "Legend");
oc(Ai, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
});
var Vm = au,
    YD = rv,
    QD = vt,
    Km = Vm ? Vm.isConcatSpreadable : void 0;

function ZD(e) {
    return QD(e) || YD(e) || !!(Km && e && e[Km])
}
var JD = ZD,
    eL = Ix,
    tL = JD;

function Xx(e, t, r, n, i) {
    var a = -1,
        o = e.length;
    for (r || (r = tL), i || (i = []); ++a < o;) {
        var u = e[a];
        t > 0 && r(u) ? t > 1 ? Xx(u, t - 1, r, n, i) : eL(i, u) : n || (i[i.length] = u)
    }
    return i
}
var Yx = Xx;

function rL(e) {
    return function(t, r, n) {
        for (var i = -1, a = Object(t), o = n(t), u = o.length; u--;) {
            var l = o[e ? u : ++i];
            if (r(a[l], l, a) === !1) break
        }
        return t
    }
}
var nL = rL,
    iL = nL,
    aL = iL(),
    oL = aL,
    uL = oL,
    lL = ac;

function sL(e, t) {
    return e && uL(e, t, lL)
}
var Qx = sL,
    cL = lu;

function fL(e, t) {
    return function(r, n) {
        if (r == null) return r;
        if (!cL(r)) return e(r, n);
        for (var i = r.length, a = t ? i : -1, o = Object(r);
            (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;);
        return r
    }
}
var dL = fL,
    pL = Qx,
    hL = dL,
    vL = hL(pL),
    ov = vL,
    yL = ov,
    mL = lu;

function gL(e, t) {
    var r = -1,
        n = mL(e) ? Array(e.length) : [];
    return yL(e, function(i, a, o) {
        n[++r] = t(i, a, o)
    }), n
}
var Zx = gL;

function bL(e, t) {
    var r = e.length;
    for (e.sort(t); r--;) e[r] = e[r].value;
    return e
}
var wL = bL,
    Gm = oa;

function xL(e, t) {
    if (e !== t) {
        var r = e !== void 0,
            n = e === null,
            i = e === e,
            a = Gm(e),
            o = t !== void 0,
            u = t === null,
            l = t === t,
            s = Gm(t);
        if (!u && !s && !a && e > t || a && o && l && !u && !s || n && o && l || !r && l || !i) return 1;
        if (!n && !a && !s && e < t || s && r && i && !n && !a || u && r && i || !o && i || !l) return -1
    }
    return 0
}
var SL = xL,
    OL = SL;

function _L(e, t, r) {
    for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length; ++n < o;) {
        var l = OL(i[n], a[n]);
        if (l) {
            if (n >= u) return l;
            var s = r[n];
            return l * (s == "desc" ? -1 : 1)
        }
    }
    return e.index - t.index
}
var PL = _L,
    ff = Hh,
    AL = Vh,
    EL = pn,
    $L = Zx,
    TL = wL,
    CL = Lx,
    jL = PL,
    kL = pa,
    ML = vt;

function IL(e, t, r) {
    t.length ? t = ff(t, function(a) {
        return ML(a) ? function(o) {
            return AL(o, a.length === 1 ? a[0] : a)
        } : a
    }) : t = [kL];
    var n = -1;
    t = ff(t, CL(EL));
    var i = $L(e, function(a, o, u) {
        var l = ff(t, function(s) {
            return s(a)
        });
        return {
            criteria: l,
            index: ++n,
            value: a
        }
    });
    return TL(i, function(a, o) {
        return jL(a, o, r)
    })
}
var NL = IL;

function DL(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2])
    }
    return e.apply(t, r)
}
var LL = DL,
    RL = LL,
    qm = Math.max;

function BL(e, t, r) {
    return t = qm(t === void 0 ? e.length - 1 : t, 0),
        function() {
            for (var n = arguments, i = -1, a = qm(n.length - t, 0), o = Array(a); ++i < a;) o[i] = n[t + i];
            i = -1;
            for (var u = Array(t + 1); ++i < t;) u[i] = n[i];
            return u[t] = r(o), RL(e, this, u)
        }
}
var zL = BL;

function FL(e) {
    return function() {
        return e
    }
}
var UL = FL,
    WL = qn,
    HL = function() {
        try {
            var e = WL(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {}
    }(),
    Jx = HL,
    VL = UL,
    Xm = Jx,
    KL = pa,
    GL = Xm ? function(e, t) {
        return Xm(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: VL(t),
            writable: !0
        })
    } : KL,
    qL = GL,
    XL = 800,
    YL = 16,
    QL = Date.now;

function ZL(e) {
    var t = 0,
        r = 0;
    return function() {
        var n = QL(),
            i = YL - (n - r);
        if (r = n, i > 0) {
            if (++t >= XL) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
    }
}
var JL = ZL,
    e3 = qL,
    t3 = JL,
    r3 = t3(e3),
    n3 = r3,
    i3 = pa,
    a3 = zL,
    o3 = n3;

function u3(e, t) {
    return o3(a3(e, t, i3), e + "")
}
var l3 = u3,
    s3 = zh,
    c3 = lu,
    f3 = nv,
    d3 = dn;

function p3(e, t, r) {
    if (!d3(r)) return !1;
    var n = typeof t;
    return (n == "number" ? c3(r) && f3(t, r.length) : n == "string" && t in r) ? s3(r[t], e) : !1
}
var uc = p3,
    h3 = Yx,
    v3 = NL,
    y3 = l3,
    Ym = uc,
    m3 = y3(function(e, t) {
        if (e == null) return [];
        var r = t.length;
        return r > 1 && Ym(e, t[0], t[1]) ? t = [] : r > 2 && Ym(t[0], t[1], t[2]) && (t = [t[0]]), v3(e, h3(t, 1), [])
    }),
    g3 = m3;
const uv = fe(g3);

function So(e) {
    "@babel/helpers - typeof";
    return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, So(e)
}

function Hd() {
    return Hd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Hd.apply(this, arguments)
}

function b3(e, t) {
    return O3(e) || S3(e, t) || x3(e, t) || w3()
}

function w3() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function x3(e, t) {
    if (e) {
        if (typeof e == "string") return Qm(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qm(e, t)
    }
}

function Qm(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function S3(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function O3(e) {
    if (Array.isArray(e)) return e
}

function Zm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function df(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Zm(Object(r), !0).forEach(function(n) {
            _3(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zm(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function _3(e, t, r) {
    return t = P3(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function P3(e) {
    var t = A3(e, "string");
    return So(t) == "symbol" ? t : t + ""
}

function A3(e, t) {
    if (So(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (So(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function E3(e) {
    return Array.isArray(e) && Be(e[0]) && Be(e[1]) ? e.join(" ~ ") : e
}
var $3 = function(t) {
    var r = t.separator,
        n = r === void 0 ? " : " : r,
        i = t.contentStyle,
        a = i === void 0 ? {} : i,
        o = t.itemStyle,
        u = o === void 0 ? {} : o,
        l = t.labelStyle,
        s = l === void 0 ? {} : l,
        f = t.payload,
        c = t.formatter,
        d = t.itemSorter,
        p = t.wrapperClassName,
        h = t.labelClassName,
        y = t.label,
        w = t.labelFormatter,
        m = t.accessibilityLayer,
        v = m === void 0 ? !1 : m,
        g = function() {
            if (f && f.length) {
                var T = {
                        padding: 0,
                        margin: 0
                    },
                    I = (d ? uv(f, d) : f).map(function(N, k) {
                        if (N.type === "none") return null;
                        var D = df({
                                display: "block",
                                paddingTop: 4,
                                paddingBottom: 4,
                                color: N.color || "#000"
                            }, u),
                            L = N.formatter || c || E3,
                            C = N.value,
                            M = N.name,
                            B = C,
                            H = M;
                        if (L && B != null && H != null) {
                            var U = L(C, M, N, k, f);
                            if (Array.isArray(U)) {
                                var q = b3(U, 2);
                                B = q[0], H = q[1]
                            } else B = U
                        }
                        return A.createElement("li", {
                            className: "recharts-tooltip-item",
                            key: "tooltip-item-".concat(k),
                            style: D
                        }, Be(H) ? A.createElement("span", {
                            className: "recharts-tooltip-item-name"
                        }, H) : null, Be(H) ? A.createElement("span", {
                            className: "recharts-tooltip-item-separator"
                        }, n) : null, A.createElement("span", {
                            className: "recharts-tooltip-item-value"
                        }, B), A.createElement("span", {
                            className: "recharts-tooltip-item-unit"
                        }, N.unit || ""))
                    });
                return A.createElement("ul", {
                    className: "recharts-tooltip-item-list",
                    style: T
                }, I)
            }
            return null
        },
        S = df({
            margin: 0,
            padding: 10,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            whiteSpace: "nowrap"
        }, a),
        b = df({
            margin: 0
        }, s),
        x = !J(y),
        O = x ? y : "",
        _ = ie("recharts-default-tooltip", p),
        P = ie("recharts-tooltip-label", h);
    x && w && f !== void 0 && f !== null && (O = w(y, f));
    var $ = v ? {
        role: "status",
        "aria-live": "assertive"
    } : {};
    return A.createElement("div", Hd({
        className: _,
        style: S
    }, $), A.createElement("p", {
        className: P,
        style: b
    }, A.isValidElement(O) ? O : "".concat(O)), g())
};

function Oo(e) {
    "@babel/helpers - typeof";
    return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Oo(e)
}

function Iu(e, t, r) {
    return t = T3(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function T3(e) {
    var t = C3(e, "string");
    return Oo(t) == "symbol" ? t : t + ""
}

function C3(e, t) {
    if (Oo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Oo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var $a = "recharts-tooltip-wrapper",
    j3 = {
        visibility: "hidden"
    };

function k3(e) {
    var t = e.coordinate,
        r = e.translateX,
        n = e.translateY;
    return ie($a, Iu(Iu(Iu(Iu({}, "".concat($a, "-right"), W(r) && t && W(t.x) && r >= t.x), "".concat($a, "-left"), W(r) && t && W(t.x) && r < t.x), "".concat($a, "-bottom"), W(n) && t && W(t.y) && n >= t.y), "".concat($a, "-top"), W(n) && t && W(t.y) && n < t.y))
}

function Jm(e) {
    var t = e.allowEscapeViewBox,
        r = e.coordinate,
        n = e.key,
        i = e.offsetTopLeft,
        a = e.position,
        o = e.reverseDirection,
        u = e.tooltipDimension,
        l = e.viewBox,
        s = e.viewBoxDimension;
    if (a && W(a[n])) return a[n];
    var f = r[n] - u - i,
        c = r[n] + i;
    if (t[n]) return o[n] ? f : c;
    if (o[n]) {
        var d = f,
            p = l[n];
        return d < p ? Math.max(c, l[n]) : Math.max(f, l[n])
    }
    var h = c + u,
        y = l[n] + s;
    return h > y ? Math.max(f, l[n]) : Math.max(c, l[n])
}

function M3(e) {
    var t = e.translateX,
        r = e.translateY,
        n = e.useTranslate3d;
    return {
        transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
    }
}

function I3(e) {
    var t = e.allowEscapeViewBox,
        r = e.coordinate,
        n = e.offsetTopLeft,
        i = e.position,
        a = e.reverseDirection,
        o = e.tooltipBox,
        u = e.useTranslate3d,
        l = e.viewBox,
        s, f, c;
    return o.height > 0 && o.width > 0 && r ? (f = Jm({
        allowEscapeViewBox: t,
        coordinate: r,
        key: "x",
        offsetTopLeft: n,
        position: i,
        reverseDirection: a,
        tooltipDimension: o.width,
        viewBox: l,
        viewBoxDimension: l.width
    }), c = Jm({
        allowEscapeViewBox: t,
        coordinate: r,
        key: "y",
        offsetTopLeft: n,
        position: i,
        reverseDirection: a,
        tooltipDimension: o.height,
        viewBox: l,
        viewBoxDimension: l.height
    }), s = M3({
        translateX: f,
        translateY: c,
        useTranslate3d: u
    })) : s = j3, {
        cssProperties: s,
        cssClasses: k3({
            translateX: f,
            translateY: c,
            coordinate: r
        })
    }
}

function Bi(e) {
    "@babel/helpers - typeof";
    return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Bi(e)
}

function eg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function tg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? eg(Object(r), !0).forEach(function(n) {
            Kd(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eg(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function N3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function D3(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tS(n.key), n)
    }
}

function L3(e, t, r) {
    return t && D3(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function R3(e, t, r) {
    return t = Bl(t), B3(e, eS() ? Reflect.construct(t, r || [], Bl(e).constructor) : t.apply(e, r))
}

function B3(e, t) {
    if (t && (Bi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return z3(e)
}

function z3(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function eS() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (eS = function() {
        return !!e
    })()
}

function Bl(e) {
    return Bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Bl(e)
}

function F3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Vd(e, t)
}

function Vd(e, t) {
    return Vd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Vd(e, t)
}

function Kd(e, t, r) {
    return t = tS(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function tS(e) {
    var t = U3(e, "string");
    return Bi(t) == "symbol" ? t : t + ""
}

function U3(e, t) {
    if (Bi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Bi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var rg = 1,
    W3 = function(e) {
        function t() {
            var r;
            N3(this, t);
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            return r = R3(this, t, [].concat(i)), Kd(r, "state", {
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                },
                lastBoundingBox: {
                    width: -1,
                    height: -1
                }
            }), Kd(r, "handleKeyDown", function(o) {
                if (o.key === "Escape") {
                    var u, l, s, f;
                    r.setState({
                        dismissed: !0,
                        dismissedAtCoordinate: {
                            x: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && u !== void 0 ? u : 0,
                            y: (s = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && s !== void 0 ? s : 0
                        }
                    })
                }
            }), r
        }
        return F3(t, e), L3(t, [{
            key: "updateBBox",
            value: function() {
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var n = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(n.width - this.state.lastBoundingBox.width) > rg || Math.abs(n.height - this.state.lastBoundingBox.height) > rg) && this.setState({
                        lastBoundingBox: {
                            width: n.width,
                            height: n.height
                        }
                    })
                } else(this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
                    lastBoundingBox: {
                        width: -1,
                        height: -1
                    }
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("keydown", this.handleKeyDown), this.updateBBox()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyDown)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                var n, i;
                this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1)
            }
        }, {
            key: "render",
            value: function() {
                var n = this,
                    i = this.props,
                    a = i.active,
                    o = i.allowEscapeViewBox,
                    u = i.animationDuration,
                    l = i.animationEasing,
                    s = i.children,
                    f = i.coordinate,
                    c = i.hasPayload,
                    d = i.isAnimationActive,
                    p = i.offset,
                    h = i.position,
                    y = i.reverseDirection,
                    w = i.useTranslate3d,
                    m = i.viewBox,
                    v = i.wrapperStyle,
                    g = I3({
                        allowEscapeViewBox: o,
                        coordinate: f,
                        offsetTopLeft: p,
                        position: h,
                        reverseDirection: y,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: w,
                        viewBox: m
                    }),
                    S = g.cssClasses,
                    b = g.cssProperties,
                    x = tg(tg({
                        transition: d && a ? "transform ".concat(u, "ms ").concat(l) : void 0
                    }, b), {}, {
                        pointerEvents: "none",
                        visibility: !this.state.dismissed && a && c ? "visible" : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }, v);
                return A.createElement("div", {
                    tabIndex: -1,
                    className: S,
                    style: x,
                    ref: function(_) {
                        n.wrapperNode = _
                    }
                }, s)
            }
        }])
    }(F.PureComponent),
    H3 = function() {
        return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout)
    },
    Pr = {
        isSsr: H3(),
        get: function(t) {
            return Pr[t]
        },
        set: function(t, r) {
            if (typeof t == "string") Pr[t] = r;
            else {
                var n = Object.keys(t);
                n && n.length && n.forEach(function(i) {
                    Pr[i] = t[i]
                })
            }
        }
    };

function zi(e) {
    "@babel/helpers - typeof";
    return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, zi(e)
}

function ng(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function ig(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ng(Object(r), !0).forEach(function(n) {
            lv(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function V3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function K3(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nS(n.key), n)
    }
}

function G3(e, t, r) {
    return t && K3(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function q3(e, t, r) {
    return t = zl(t), X3(e, rS() ? Reflect.construct(t, r || [], zl(e).constructor) : t.apply(e, r))
}

function X3(e, t) {
    if (t && (zi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Y3(e)
}

function Y3(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function rS() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (rS = function() {
        return !!e
    })()
}

function zl(e) {
    return zl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, zl(e)
}

function Q3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Gd(e, t)
}

function Gd(e, t) {
    return Gd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Gd(e, t)
}

function lv(e, t, r) {
    return t = nS(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function nS(e) {
    var t = Z3(e, "string");
    return zi(t) == "symbol" ? t : t + ""
}

function Z3(e, t) {
    if (zi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (zi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function J3(e) {
    return e.dataKey
}

function eR(e, t) {
    return A.isValidElement(e) ? A.cloneElement(e, t) : typeof e == "function" ? A.createElement(e, t) : A.createElement($3, t)
}
var vr = function(e) {
    function t() {
        return V3(this, t), q3(this, t, arguments)
    }
    return Q3(t, e), G3(t, [{
        key: "render",
        value: function() {
            var n = this,
                i = this.props,
                a = i.active,
                o = i.allowEscapeViewBox,
                u = i.animationDuration,
                l = i.animationEasing,
                s = i.content,
                f = i.coordinate,
                c = i.filterNull,
                d = i.isAnimationActive,
                p = i.offset,
                h = i.payload,
                y = i.payloadUniqBy,
                w = i.position,
                m = i.reverseDirection,
                v = i.useTranslate3d,
                g = i.viewBox,
                S = i.wrapperStyle,
                b = h ? ? [];
            c && b.length && (b = Kx(h.filter(function(O) {
                return O.value != null && (O.hide !== !0 || n.props.includeHidden)
            }), y, J3));
            var x = b.length > 0;
            return A.createElement(W3, {
                allowEscapeViewBox: o,
                animationDuration: u,
                animationEasing: l,
                isAnimationActive: d,
                active: a,
                coordinate: f,
                hasPayload: x,
                offset: p,
                position: w,
                reverseDirection: m,
                useTranslate3d: v,
                viewBox: g,
                wrapperStyle: S
            }, eR(s, ig(ig({}, this.props), {}, {
                payload: b
            })))
        }
    }])
}(F.PureComponent);
lv(vr, "displayName", "Tooltip");
lv(vr, "defaultProps", {
    accessibilityLayer: !1,
    allowEscapeViewBox: {
        x: !1,
        y: !1
    },
    animationDuration: 400,
    animationEasing: "ease",
    contentStyle: {},
    coordinate: {
        x: 0,
        y: 0
    },
    cursor: !0,
    cursorStyle: {},
    filterNull: !0,
    isAnimationActive: !Pr.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
        x: !1,
        y: !1
    },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: !1,
    viewBox: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
    },
    wrapperStyle: {}
});
var tR = dr,
    rR = function() {
        return tR.Date.now()
    },
    nR = rR,
    iR = /\s/;

function aR(e) {
    for (var t = e.length; t-- && iR.test(e.charAt(t)););
    return t
}
var oR = aR,
    uR = oR,
    lR = /^\s+/;

function sR(e) {
    return e && e.slice(0, uR(e) + 1).replace(lR, "")
}
var cR = sR,
    fR = cR,
    ag = dn,
    dR = oa,
    og = NaN,
    pR = /^[-+]0x[0-9a-f]+$/i,
    hR = /^0b[01]+$/i,
    vR = /^0o[0-7]+$/i,
    yR = parseInt;

function mR(e) {
    if (typeof e == "number") return e;
    if (dR(e)) return og;
    if (ag(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = ag(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = fR(e);
    var r = hR.test(e);
    return r || vR.test(e) ? yR(e.slice(2), r ? 2 : 8) : pR.test(e) ? og : +e
}
var iS = mR,
    gR = dn,
    pf = nR,
    ug = iS,
    bR = "Expected a function",
    wR = Math.max,
    xR = Math.min;

function SR(e, t, r) {
    var n, i, a, o, u, l, s = 0,
        f = !1,
        c = !1,
        d = !0;
    if (typeof e != "function") throw new TypeError(bR);
    t = ug(t) || 0, gR(r) && (f = !!r.leading, c = "maxWait" in r, a = c ? wR(ug(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);

    function p(x) {
        var O = n,
            _ = i;
        return n = i = void 0, s = x, o = e.apply(_, O), o
    }

    function h(x) {
        return s = x, u = setTimeout(m, t), f ? p(x) : o
    }

    function y(x) {
        var O = x - l,
            _ = x - s,
            P = t - O;
        return c ? xR(P, a - _) : P
    }

    function w(x) {
        var O = x - l,
            _ = x - s;
        return l === void 0 || O >= t || O < 0 || c && _ >= a
    }

    function m() {
        var x = pf();
        if (w(x)) return v(x);
        u = setTimeout(m, y(x))
    }

    function v(x) {
        return u = void 0, d && n ? p(x) : (n = i = void 0, o)
    }

    function g() {
        u !== void 0 && clearTimeout(u), s = 0, n = l = i = u = void 0
    }

    function S() {
        return u === void 0 ? o : v(pf())
    }

    function b() {
        var x = pf(),
            O = w(x);
        if (n = arguments, i = this, l = x, O) {
            if (u === void 0) return h(l);
            if (c) return clearTimeout(u), u = setTimeout(m, t), p(l)
        }
        return u === void 0 && (u = setTimeout(m, t)), o
    }
    return b.cancel = g, b.flush = S, b
}
var OR = SR,
    _R = OR,
    PR = dn,
    AR = "Expected a function";

function ER(e, t, r) {
    var n = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(AR);
    return PR(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), _R(e, t, {
        leading: n,
        maxWait: t,
        trailing: i
    })
}
var $R = ER;
const aS = fe($R);

function _o(e) {
    "@babel/helpers - typeof";
    return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _o(e)
}

function lg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Nu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? lg(Object(r), !0).forEach(function(n) {
            TR(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function TR(e, t, r) {
    return t = CR(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function CR(e) {
    var t = jR(e, "string");
    return _o(t) == "symbol" ? t : t + ""
}

function jR(e, t) {
    if (_o(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (_o(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function kR(e, t) {
    return DR(e) || NR(e, t) || IR(e, t) || MR()
}

function MR() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function IR(e, t) {
    if (e) {
        if (typeof e == "string") return sg(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sg(e, t)
    }
}

function sg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function NR(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function DR(e) {
    if (Array.isArray(e)) return e
}
var pK = F.forwardRef(function(e, t) {
        var r = e.aspect,
            n = e.initialDimension,
            i = n === void 0 ? {
                width: -1,
                height: -1
            } : n,
            a = e.width,
            o = a === void 0 ? "100%" : a,
            u = e.height,
            l = u === void 0 ? "100%" : u,
            s = e.minWidth,
            f = s === void 0 ? 0 : s,
            c = e.minHeight,
            d = e.maxHeight,
            p = e.children,
            h = e.debounce,
            y = h === void 0 ? 0 : h,
            w = e.id,
            m = e.className,
            v = e.onResize,
            g = e.style,
            S = g === void 0 ? {} : g,
            b = F.useRef(null),
            x = F.useRef();
        x.current = v, F.useImperativeHandle(t, function() {
            return Object.defineProperty(b.current, "current", {
                get: function() {
                    return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), b.current
                },
                configurable: !0
            })
        });
        var O = F.useState({
                containerWidth: i.width,
                containerHeight: i.height
            }),
            _ = kR(O, 2),
            P = _[0],
            $ = _[1],
            E = F.useCallback(function(I, N) {
                $(function(k) {
                    var D = Math.round(I),
                        L = Math.round(N);
                    return k.containerWidth === D && k.containerHeight === L ? k : {
                        containerWidth: D,
                        containerHeight: L
                    }
                })
            }, []);
        F.useEffect(function() {
            var I = function(M) {
                var B, H = M[0].contentRect,
                    U = H.width,
                    q = H.height;
                E(U, q), (B = x.current) === null || B === void 0 || B.call(x, U, q)
            };
            y > 0 && (I = aS(I, y, {
                trailing: !0,
                leading: !1
            }));
            var N = new ResizeObserver(I),
                k = b.current.getBoundingClientRect(),
                D = k.width,
                L = k.height;
            return E(D, L), N.observe(b.current),
                function() {
                    N.disconnect()
                }
        }, [E, y]);
        var T = F.useMemo(function() {
            var I = P.containerWidth,
                N = P.containerHeight;
            if (I < 0 || N < 0) return null;
            _r($n(o) || $n(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, l), _r(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
            var k = $n(o) ? I : o,
                D = $n(l) ? N : l;
            r && r > 0 && (k ? D = k / r : D && (k = D * r), d && D > d && (D = d)), _r(k > 0 || D > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, k, D, o, l, f, c, r);
            var L = !Array.isArray(p) && Or(p.type).endsWith("Chart");
            return A.Children.map(p, function(C) {
                return A.isValidElement(C) ? F.cloneElement(C, Nu({
                    width: k,
                    height: D
                }, L ? {
                    style: Nu({
                        height: "100%",
                        width: "100%",
                        maxHeight: D,
                        maxWidth: k
                    }, C.props.style)
                } : {})) : C
            })
        }, [r, p, l, d, c, f, P, o]);
        return A.createElement("div", {
            id: w ? "".concat(w) : void 0,
            className: ie("recharts-responsive-container", m),
            style: Nu(Nu({}, S), {}, {
                width: o,
                height: l,
                minWidth: f,
                minHeight: c,
                maxHeight: d
            }),
            ref: b
        }, T)
    }),
    oS = function(t) {
        return null
    };
oS.displayName = "Cell";

function Po(e) {
    "@babel/helpers - typeof";
    return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Po(e)
}

function cg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function qd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? cg(Object(r), !0).forEach(function(n) {
            LR(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function LR(e, t, r) {
    return t = RR(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function RR(e) {
    var t = BR(e, "string");
    return Po(t) == "symbol" ? t : t + ""
}

function BR(e, t) {
    if (Po(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Po(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var ei = {
        widthCache: {},
        cacheCount: 0
    },
    zR = 2e3,
    FR = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
    },
    fg = "recharts_measurement_span";

function UR(e) {
    var t = qd({}, e);
    return Object.keys(t).forEach(function(r) {
        t[r] || delete t[r]
    }), t
}
var Qa = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t == null || Pr.isSsr) return {
            width: 0,
            height: 0
        };
        var n = UR(r),
            i = JSON.stringify({
                text: t,
                copyStyle: n
            });
        if (ei.widthCache[i]) return ei.widthCache[i];
        try {
            var a = document.getElementById(fg);
            a || (a = document.createElement("span"), a.setAttribute("id", fg), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
            var o = qd(qd({}, FR), n);
            Object.assign(a.style, o), a.textContent = "".concat(t);
            var u = a.getBoundingClientRect(),
                l = {
                    width: u.width,
                    height: u.height
                };
            return ei.widthCache[i] = l, ++ei.cacheCount > zR && (ei.cacheCount = 0, ei.widthCache = {}), l
        } catch {
            return {
                width: 0,
                height: 0
            }
        }
    },
    WR = function(t) {
        return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft
        }
    };

function Ao(e) {
    "@babel/helpers - typeof";
    return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ao(e)
}

function Fl(e, t) {
    return GR(e) || KR(e, t) || VR(e, t) || HR()
}

function HR() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function VR(e, t) {
    if (e) {
        if (typeof e == "string") return dg(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dg(e, t)
    }
}

function dg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function KR(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t === 0) {
                if (Object(r) !== r) return;
                l = !1
            } else
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function GR(e) {
    if (Array.isArray(e)) return e
}

function qR(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function pg(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, YR(n.key), n)
    }
}

function XR(e, t, r) {
    return t && pg(e.prototype, t), r && pg(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function YR(e) {
    var t = QR(e, "string");
    return Ao(t) == "symbol" ? t : t + ""
}

function QR(e, t) {
    if (Ao(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Ao(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var hg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    vg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    ZR = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
    JR = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
    uS = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 96 / 6,
        in: 96,
        Q: 96 / (2.54 * 40),
        px: 1
    },
    eB = Object.keys(uS),
    yi = "NaN";

function tB(e, t) {
    return e * uS[t]
}
var Du = function() {
    function e(t, r) {
        qR(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !ZR.test(r) && (this.num = NaN, this.unit = ""), eB.includes(r) && (this.num = tB(t, r), this.unit = "px")
    }
    return XR(e, [{
        key: "add",
        value: function(r) {
            return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit)
        }
    }, {
        key: "subtract",
        value: function(r) {
            return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit)
        }
    }, {
        key: "multiply",
        value: function(r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit)
        }
    }, {
        key: "divide",
        value: function(r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit)
        }
    }, {
        key: "toString",
        value: function() {
            return "".concat(this.num).concat(this.unit)
        }
    }, {
        key: "isNaN",
        value: function() {
            return Number.isNaN(this.num)
        }
    }], [{
        key: "parse",
        value: function(r) {
            var n, i = (n = JR.exec(r)) !== null && n !== void 0 ? n : [],
                a = Fl(i, 3),
                o = a[1],
                u = a[2];
            return new e(parseFloat(o), u ? ? "")
        }
    }])
}();

function lS(e) {
    if (e.includes(yi)) return yi;
    for (var t = e; t.includes("*") || t.includes("/");) {
        var r, n = (r = hg.exec(t)) !== null && r !== void 0 ? r : [],
            i = Fl(n, 4),
            a = i[1],
            o = i[2],
            u = i[3],
            l = Du.parse(a ? ? ""),
            s = Du.parse(u ? ? ""),
            f = o === "*" ? l.multiply(s) : l.divide(s);
        if (f.isNaN()) return yi;
        t = t.replace(hg, f.toString())
    }
    for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t);) {
        var c, d = (c = vg.exec(t)) !== null && c !== void 0 ? c : [],
            p = Fl(d, 4),
            h = p[1],
            y = p[2],
            w = p[3],
            m = Du.parse(h ? ? ""),
            v = Du.parse(w ? ? ""),
            g = y === "+" ? m.add(v) : m.subtract(v);
        if (g.isNaN()) return yi;
        t = t.replace(vg, g.toString())
    }
    return t
}
var yg = /\(([^()]*)\)/;

function rB(e) {
    for (var t = e; t.includes("(");) {
        var r = yg.exec(t),
            n = Fl(r, 2),
            i = n[1];
        t = t.replace(yg, lS(i))
    }
    return t
}

function nB(e) {
    var t = e.replace(/\s+/g, "");
    return t = rB(t), t = lS(t), t
}

function iB(e) {
    try {
        return nB(e)
    } catch {
        return yi
    }
}

function hf(e) {
    var t = iB(e.slice(5, -1));
    return t === yi ? "" : t
}
var aB = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
    oB = ["dx", "dy", "angle", "className", "breakAll"];

function Xd() {
    return Xd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Xd.apply(this, arguments)
}

function mg(e, t) {
    if (e == null) return {};
    var r = uB(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function uB(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function gg(e, t) {
    return fB(e) || cB(e, t) || sB(e, t) || lB()
}

function lB() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function sB(e, t) {
    if (e) {
        if (typeof e == "string") return bg(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bg(e, t)
    }
}

function bg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function cB(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t === 0) {
                if (Object(r) !== r) return;
                l = !1
            } else
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function fB(e) {
    if (Array.isArray(e)) return e
}
var sS = /[ \f\n\r\t\v\u2028\u2029]+/,
    cS = function(t) {
        var r = t.children,
            n = t.breakAll,
            i = t.style;
        try {
            var a = [];
            J(r) || (n ? a = r.toString().split("") : a = r.toString().split(sS));
            var o = a.map(function(l) {
                    return {
                        word: l,
                        width: Qa(l, i).width
                    }
                }),
                u = n ? 0 : Qa(" ", i).width;
            return {
                wordsWithComputedWidth: o,
                spaceWidth: u
            }
        } catch {
            return null
        }
    },
    dB = function(t, r, n, i, a) {
        var o = t.maxLines,
            u = t.children,
            l = t.style,
            s = t.breakAll,
            f = W(o),
            c = u,
            d = function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                return k.reduce(function(D, L) {
                    var C = L.word,
                        M = L.width,
                        B = D[D.length - 1];
                    if (B && (i == null || a || B.width + M + n < Number(i))) B.words.push(C), B.width += M + n;
                    else {
                        var H = {
                            words: [C],
                            width: M
                        };
                        D.push(H)
                    }
                    return D
                }, [])
            },
            p = d(r),
            h = function(k) {
                return k.reduce(function(D, L) {
                    return D.width > L.width ? D : L
                })
            };
        if (!f) return p;
        for (var y = "…", w = function(k) {
                var D = c.slice(0, k),
                    L = cS({
                        breakAll: s,
                        style: l,
                        children: D + y
                    }).wordsWithComputedWidth,
                    C = d(L),
                    M = C.length > o || h(C).width > Number(i);
                return [M, C]
            }, m = 0, v = c.length - 1, g = 0, S; m <= v && g <= c.length - 1;) {
            var b = Math.floor((m + v) / 2),
                x = b - 1,
                O = w(x),
                _ = gg(O, 2),
                P = _[0],
                $ = _[1],
                E = w(b),
                T = gg(E, 1),
                I = T[0];
            if (!P && !I && (m = b + 1), P && I && (v = b - 1), !P && I) {
                S = $;
                break
            }
            g++
        }
        return S || p
    },
    wg = function(t) {
        var r = J(t) ? [] : t.toString().split(sS);
        return [{
            words: r
        }]
    },
    pB = function(t) {
        var r = t.width,
            n = t.scaleToFit,
            i = t.children,
            a = t.style,
            o = t.breakAll,
            u = t.maxLines;
        if ((r || n) && !Pr.isSsr) {
            var l, s, f = cS({
                breakAll: o,
                children: i,
                style: a
            });
            if (f) {
                var c = f.wordsWithComputedWidth,
                    d = f.spaceWidth;
                l = c, s = d
            } else return wg(i);
            return dB({
                breakAll: o,
                children: i,
                maxLines: u,
                style: a
            }, l, s, r, n)
        }
        return wg(i)
    },
    xg = "#808080",
    Ul = function(t) {
        var r = t.x,
            n = r === void 0 ? 0 : r,
            i = t.y,
            a = i === void 0 ? 0 : i,
            o = t.lineHeight,
            u = o === void 0 ? "1em" : o,
            l = t.capHeight,
            s = l === void 0 ? "0.71em" : l,
            f = t.scaleToFit,
            c = f === void 0 ? !1 : f,
            d = t.textAnchor,
            p = d === void 0 ? "start" : d,
            h = t.verticalAnchor,
            y = h === void 0 ? "end" : h,
            w = t.fill,
            m = w === void 0 ? xg : w,
            v = mg(t, aB),
            g = F.useMemo(function() {
                return pB({
                    breakAll: v.breakAll,
                    children: v.children,
                    maxLines: v.maxLines,
                    scaleToFit: c,
                    style: v.style,
                    width: v.width
                })
            }, [v.breakAll, v.children, v.maxLines, c, v.style, v.width]),
            S = v.dx,
            b = v.dy,
            x = v.angle,
            O = v.className,
            _ = v.breakAll,
            P = mg(v, oB);
        if (!Be(n) || !Be(a)) return null;
        var $ = n + (W(S) ? S : 0),
            E = a + (W(b) ? b : 0),
            T;
        switch (y) {
            case "start":
                T = hf("calc(".concat(s, ")"));
                break;
            case "middle":
                T = hf("calc(".concat((g.length - 1) / 2, " * -").concat(u, " + (").concat(s, " / 2))"));
                break;
            default:
                T = hf("calc(".concat(g.length - 1, " * -").concat(u, ")"));
                break
        }
        var I = [];
        if (c) {
            var N = g[0].width,
                k = v.width;
            I.push("scale(".concat((W(k) ? k / N : 1) / N, ")"))
        }
        return x && I.push("rotate(".concat(x, ", ").concat($, ", ").concat(E, ")")), I.length && (P.transform = I.join(" ")), A.createElement("text", Xd({}, ee(P, !0), {
            x: $,
            y: E,
            className: ie("recharts-text", O),
            textAnchor: p,
            fill: m.includes("url") ? xg : m
        }), g.map(function(D, L) {
            var C = D.words.join(_ ? "" : " ");
            return A.createElement("tspan", {
                x: $,
                dy: L === 0 ? T : u,
                key: "".concat(C, "-").concat(L)
            }, C)
        }))
    };

function an(e, t) {
    return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}

function hB(e, t) {
    return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}

function sv(e) {
    let t, r, n;
    e.length !== 2 ? (t = an, r = (u, l) => an(e(u), l), n = (u, l) => e(u) - l) : (t = e === an || e === hB ? e : vB, r = e, n = e);

    function i(u, l, s = 0, f = u.length) {
        if (s < f) {
            if (t(l, l) !== 0) return f;
            do {
                const c = s + f >>> 1;
                r(u[c], l) < 0 ? s = c + 1 : f = c
            } while (s < f)
        }
        return s
    }

    function a(u, l, s = 0, f = u.length) {
        if (s < f) {
            if (t(l, l) !== 0) return f;
            do {
                const c = s + f >>> 1;
                r(u[c], l) <= 0 ? s = c + 1 : f = c
            } while (s < f)
        }
        return s
    }

    function o(u, l, s = 0, f = u.length) {
        const c = i(u, l, s, f - 1);
        return c > s && n(u[c - 1], l) > -n(u[c], l) ? c - 1 : c
    }
    return {
        left: i,
        center: o,
        right: a
    }
}

function vB() {
    return 0
}

function fS(e) {
    return e === null ? NaN : +e
}

function* yB(e, t) {
    for (let r of e) r != null && (r = +r) >= r && (yield r)
}
const mB = sv(an),
    su = mB.right;
sv(fS).center;
class Sg extends Map {
    constructor(t, r = wB) {
        if (super(), Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: r
                }
            }), t != null)
            for (const [n, i] of t) this.set(n, i)
    }
    get(t) {
        return super.get(Og(this, t))
    }
    has(t) {
        return super.has(Og(this, t))
    }
    set(t, r) {
        return super.set(gB(this, t), r)
    }
    delete(t) {
        return super.delete(bB(this, t))
    }
}

function Og({
    _intern: e,
    _key: t
}, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : r
}

function gB({
    _intern: e,
    _key: t
}, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : (e.set(n, r), r)
}

function bB({
    _intern: e,
    _key: t
}, r) {
    const n = t(r);
    return e.has(n) && (r = e.get(n), e.delete(n)), r
}

function wB(e) {
    return e !== null && typeof e == "object" ? e.valueOf() : e
}

function xB(e = an) {
    if (e === an) return dS;
    if (typeof e != "function") throw new TypeError("compare is not a function");
    return (t, r) => {
        const n = e(t, r);
        return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0)
    }
}

function dS(e, t) {
    return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0)
}
const SB = Math.sqrt(50),
    OB = Math.sqrt(10),
    _B = Math.sqrt(2);

function Wl(e, t, r) {
    const n = (t - e) / Math.max(0, r),
        i = Math.floor(Math.log10(n)),
        a = n / Math.pow(10, i),
        o = a >= SB ? 10 : a >= OB ? 5 : a >= _B ? 2 : 1;
    let u, l, s;
    return i < 0 ? (s = Math.pow(10, -i) / o, u = Math.round(e * s), l = Math.round(t * s), u / s < e && ++u, l / s > t && --l, s = -s) : (s = Math.pow(10, i) * o, u = Math.round(e / s), l = Math.round(t / s), u * s < e && ++u, l * s > t && --l), l < u && .5 <= r && r < 2 ? Wl(e, t, r * 2) : [u, l, s]
}

function Yd(e, t, r) {
    if (t = +t, e = +e, r = +r, !(r > 0)) return [];
    if (e === t) return [e];
    const n = t < e,
        [i, a, o] = n ? Wl(t, e, r) : Wl(e, t, r);
    if (!(a >= i)) return [];
    const u = a - i + 1,
        l = new Array(u);
    if (n)
        if (o < 0)
            for (let s = 0; s < u; ++s) l[s] = (a - s) / -o;
        else
            for (let s = 0; s < u; ++s) l[s] = (a - s) * o;
    else if (o < 0)
        for (let s = 0; s < u; ++s) l[s] = (i + s) / -o;
    else
        for (let s = 0; s < u; ++s) l[s] = (i + s) * o;
    return l
}

function Qd(e, t, r) {
    return t = +t, e = +e, r = +r, Wl(e, t, r)[2]
}

function Zd(e, t, r) {
    t = +t, e = +e, r = +r;
    const n = t < e,
        i = n ? Qd(t, e, r) : Qd(e, t, r);
    return (n ? -1 : 1) * (i < 0 ? 1 / -i : i)
}

function _g(e, t) {
    let r;
    for (const n of e) n != null && (r < n || r === void 0 && n >= n) && (r = n);
    return r
}

function Pg(e, t) {
    let r;
    for (const n of e) n != null && (r > n || r === void 0 && n >= n) && (r = n);
    return r
}

function pS(e, t, r = 0, n = 1 / 0, i) {
    if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
    for (i = i === void 0 ? dS : xB(i); n > r;) {
        if (n - r > 600) {
            const l = n - r + 1,
                s = t - r + 1,
                f = Math.log(l),
                c = .5 * Math.exp(2 * f / 3),
                d = .5 * Math.sqrt(f * c * (l - c) / l) * (s - l / 2 < 0 ? -1 : 1),
                p = Math.max(r, Math.floor(t - s * c / l + d)),
                h = Math.min(n, Math.floor(t + (l - s) * c / l + d));
            pS(e, t, p, h, i)
        }
        const a = e[t];
        let o = r,
            u = n;
        for (Ta(e, r, t), i(e[n], a) > 0 && Ta(e, r, n); o < u;) {
            for (Ta(e, o, u), ++o, --u; i(e[o], a) < 0;) ++o;
            for (; i(e[u], a) > 0;) --u
        }
        i(e[r], a) === 0 ? Ta(e, r, u) : (++u, Ta(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1)
    }
    return e
}

function Ta(e, t, r) {
    const n = e[t];
    e[t] = e[r], e[r] = n
}

function PB(e, t, r) {
    if (e = Float64Array.from(yB(e)), !(!(n = e.length) || isNaN(t = +t))) {
        if (t <= 0 || n < 2) return Pg(e);
        if (t >= 1) return _g(e);
        var n, i = (n - 1) * t,
            a = Math.floor(i),
            o = _g(pS(e, a).subarray(0, a + 1)),
            u = Pg(e.subarray(a + 1));
        return o + (u - o) * (i - a)
    }
}

function AB(e, t, r = fS) {
    if (!(!(n = e.length) || isNaN(t = +t))) {
        if (t <= 0 || n < 2) return +r(e[0], 0, e);
        if (t >= 1) return +r(e[n - 1], n - 1, e);
        var n, i = (n - 1) * t,
            a = Math.floor(i),
            o = +r(e[a], a, e),
            u = +r(e[a + 1], a + 1, e);
        return o + (u - o) * (i - a)
    }
}

function EB(e, t, r) {
    e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
    for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i;) a[n] = e + n * r;
    return a
}

function Ut(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(t).domain(e);
            break
    }
    return this
}

function Rr(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            {
                typeof e == "function" ? this.interpolator(e) : this.range(e);
                break
            }
        default:
            {
                this.domain(e),
                typeof t == "function" ? this.interpolator(t) : this.range(t);
                break
            }
    }
    return this
}
const Jd = Symbol("implicit");

function cv() {
    var e = new Sg,
        t = [],
        r = [],
        n = Jd;

    function i(a) {
        let o = e.get(a);
        if (o === void 0) {
            if (n !== Jd) return n;
            e.set(a, o = t.push(a) - 1)
        }
        return r[o % r.length]
    }
    return i.domain = function(a) {
        if (!arguments.length) return t.slice();
        t = [], e = new Sg;
        for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
        return i
    }, i.range = function(a) {
        return arguments.length ? (r = Array.from(a), i) : r.slice()
    }, i.unknown = function(a) {
        return arguments.length ? (n = a, i) : n
    }, i.copy = function() {
        return cv(t, r).unknown(n)
    }, Ut.apply(i, arguments), i
}

function Eo() {
    var e = cv().unknown(void 0),
        t = e.domain,
        r = e.range,
        n = 0,
        i = 1,
        a, o, u = !1,
        l = 0,
        s = 0,
        f = .5;
    delete e.unknown;

    function c() {
        var d = t().length,
            p = i < n,
            h = p ? i : n,
            y = p ? n : i;
        a = (y - h) / Math.max(1, d - l + s * 2), u && (a = Math.floor(a)), h += (y - h - a * (d - l)) * f, o = a * (1 - l), u && (h = Math.round(h), o = Math.round(o));
        var w = EB(d).map(function(m) {
            return h + a * m
        });
        return r(p ? w.reverse() : w)
    }
    return e.domain = function(d) {
        return arguments.length ? (t(d), c()) : t()
    }, e.range = function(d) {
        return arguments.length ? ([n, i] = d, n = +n, i = +i, c()) : [n, i]
    }, e.rangeRound = function(d) {
        return [n, i] = d, n = +n, i = +i, u = !0, c()
    }, e.bandwidth = function() {
        return o
    }, e.step = function() {
        return a
    }, e.round = function(d) {
        return arguments.length ? (u = !!d, c()) : u
    }, e.padding = function(d) {
        return arguments.length ? (l = Math.min(1, s = +d), c()) : l
    }, e.paddingInner = function(d) {
        return arguments.length ? (l = Math.min(1, d), c()) : l
    }, e.paddingOuter = function(d) {
        return arguments.length ? (s = +d, c()) : s
    }, e.align = function(d) {
        return arguments.length ? (f = Math.max(0, Math.min(1, d)), c()) : f
    }, e.copy = function() {
        return Eo(t(), [n, i]).round(u).paddingInner(l).paddingOuter(s).align(f)
    }, Ut.apply(c(), arguments)
}

function hS(e) {
    var t = e.copy;
    return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
        return hS(t())
    }, e
}

function Za() {
    return hS(Eo.apply(null, arguments).paddingInner(1))
}

function fv(e, t, r) {
    e.prototype = t.prototype = r, r.constructor = e
}

function vS(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t) r[n] = t[n];
    return r
}

function cu() {}
var $o = .7,
    Hl = 1 / $o,
    Ei = "\\s*([+-]?\\d+)\\s*",
    To = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    $B = /^#([0-9a-f]{3,8})$/,
    TB = new RegExp(`^rgb\\(${Ei},${Ei},${Ei}\\)$`),
    CB = new RegExp(`^rgb\\(${sr},${sr},${sr}\\)$`),
    jB = new RegExp(`^rgba\\(${Ei},${Ei},${Ei},${To}\\)$`),
    kB = new RegExp(`^rgba\\(${sr},${sr},${sr},${To}\\)$`),
    MB = new RegExp(`^hsl\\(${To},${sr},${sr}\\)$`),
    IB = new RegExp(`^hsla\\(${To},${sr},${sr},${To}\\)$`),
    Ag = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
fv(cu, Co, {
    copy(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: Eg,
    formatHex: Eg,
    formatHex8: NB,
    formatHsl: DB,
    formatRgb: $g,
    toString: $g
});

function Eg() {
    return this.rgb().formatHex()
}

function NB() {
    return this.rgb().formatHex8()
}

function DB() {
    return yS(this).formatHsl()
}

function $g() {
    return this.rgb().formatRgb()
}

function Co(e) {
    var t, r;
    return e = (e + "").trim().toLowerCase(), (t = $B.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Tg(t) : r === 3 ? new ft(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Lu(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Lu(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = TB.exec(e)) ? new ft(t[1], t[2], t[3], 1) : (t = CB.exec(e)) ? new ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = jB.exec(e)) ? Lu(t[1], t[2], t[3], t[4]) : (t = kB.exec(e)) ? Lu(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = MB.exec(e)) ? kg(t[1], t[2] / 100, t[3] / 100, 1) : (t = IB.exec(e)) ? kg(t[1], t[2] / 100, t[3] / 100, t[4]) : Ag.hasOwnProperty(e) ? Tg(Ag[e]) : e === "transparent" ? new ft(NaN, NaN, NaN, 0) : null
}

function Tg(e) {
    return new ft(e >> 16 & 255, e >> 8 & 255, e & 255, 1)
}

function Lu(e, t, r, n) {
    return n <= 0 && (e = t = r = NaN), new ft(e, t, r, n)
}

function LB(e) {
    return e instanceof cu || (e = Co(e)), e ? (e = e.rgb(), new ft(e.r, e.g, e.b, e.opacity)) : new ft
}

function ep(e, t, r, n) {
    return arguments.length === 1 ? LB(e) : new ft(e, t, r, n ? ? 1)
}

function ft(e, t, r, n) {
    this.r = +e, this.g = +t, this.b = +r, this.opacity = +n
}
fv(ft, ep, vS(cu, {
    brighter(e) {
        return e = e == null ? Hl : Math.pow(Hl, e), new ft(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    darker(e) {
        return e = e == null ? $o : Math.pow($o, e), new ft(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new ft(In(this.r), In(this.g), In(this.b), Vl(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: Cg,
    formatHex: Cg,
    formatHex8: RB,
    formatRgb: jg,
    toString: jg
}));

function Cg() {
    return `#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}`
}

function RB() {
    return `#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}${Tn((isNaN(this.opacity)?1:this.opacity)*255)}`
}

function jg() {
    const e = Vl(this.opacity);
    return `${e===1?"rgb(":"rgba("}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${e===1?")":`, ${e})`}`
}

function Vl(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}

function In(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
}

function Tn(e) {
    return e = In(e), (e < 16 ? "0" : "") + e.toString(16)
}

function kg(e, t, r, n) {
    return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Qt(e, t, r, n)
}

function yS(e) {
    if (e instanceof Qt) return new Qt(e.h, e.s, e.l, e.opacity);
    if (e instanceof cu || (e = Co(e)), !e) return new Qt;
    if (e instanceof Qt) return e;
    e = e.rgb();
    var t = e.r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        a = Math.max(t, r, n),
        o = NaN,
        u = a - i,
        l = (a + i) / 2;
    return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= l < .5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new Qt(o, u, l, e.opacity)
}

function BB(e, t, r, n) {
    return arguments.length === 1 ? yS(e) : new Qt(e, t, r, n ? ? 1)
}

function Qt(e, t, r, n) {
    this.h = +e, this.s = +t, this.l = +r, this.opacity = +n
}
fv(Qt, BB, vS(cu, {
    brighter(e) {
        return e = e == null ? Hl : Math.pow(Hl, e), new Qt(this.h, this.s, this.l * e, this.opacity)
    },
    darker(e) {
        return e = e == null ? $o : Math.pow($o, e), new Qt(this.h, this.s, this.l * e, this.opacity)
    },
    rgb() {
        var e = this.h % 360 + (this.h < 0) * 360,
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            n = r + (r < .5 ? r : 1 - r) * t,
            i = 2 * r - n;
        return new ft(vf(e >= 240 ? e - 240 : e + 120, i, n), vf(e, i, n), vf(e < 120 ? e + 240 : e - 120, i, n), this.opacity)
    },
    clamp() {
        return new Qt(Mg(this.h), Ru(this.s), Ru(this.l), Vl(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const e = Vl(this.opacity);
        return `${e===1?"hsl(":"hsla("}${Mg(this.h)}, ${Ru(this.s)*100}%, ${Ru(this.l)*100}%${e===1?")":`, ${e})`}`
    }
}));

function Mg(e) {
    return e = (e || 0) % 360, e < 0 ? e + 360 : e
}

function Ru(e) {
    return Math.max(0, Math.min(1, e || 0))
}

function vf(e, t, r) {
    return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255
}
const dv = e => () => e;

function zB(e, t) {
    return function(r) {
        return e + r * t
    }
}

function FB(e, t, r) {
    return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r,
        function(n) {
            return Math.pow(e + n * t, r)
        }
}

function UB(e) {
    return (e = +e) == 1 ? mS : function(t, r) {
        return r - t ? FB(t, r, e) : dv(isNaN(t) ? r : t)
    }
}

function mS(e, t) {
    var r = t - e;
    return r ? zB(e, r) : dv(isNaN(e) ? t : e)
}
const Ig = function e(t) {
    var r = UB(t);

    function n(i, a) {
        var o = r((i = ep(i)).r, (a = ep(a)).r),
            u = r(i.g, a.g),
            l = r(i.b, a.b),
            s = mS(i.opacity, a.opacity);
        return function(f) {
            return i.r = o(f), i.g = u(f), i.b = l(f), i.opacity = s(f), i + ""
        }
    }
    return n.gamma = e, n
}(1);

function WB(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0,
        n = t.slice(),
        i;
    return function(a) {
        for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
        return n
    }
}

function HB(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView)
}

function VB(e, t) {
    var r = t ? t.length : 0,
        n = e ? Math.min(r, e.length) : 0,
        i = new Array(n),
        a = new Array(r),
        o;
    for (o = 0; o < n; ++o) i[o] = ha(e[o], t[o]);
    for (; o < r; ++o) a[o] = t[o];
    return function(u) {
        for (o = 0; o < n; ++o) a[o] = i[o](u);
        return a
    }
}

function KB(e, t) {
    var r = new Date;
    return e = +e, t = +t,
        function(n) {
            return r.setTime(e * (1 - n) + t * n), r
        }
}

function Kl(e, t) {
    return e = +e, t = +t,
        function(r) {
            return e * (1 - r) + t * r
        }
}

function GB(e, t) {
    var r = {},
        n = {},
        i;
    (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
    for (i in t) i in e ? r[i] = ha(e[i], t[i]) : n[i] = t[i];
    return function(a) {
        for (i in r) n[i] = r[i](a);
        return n
    }
}
var tp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    yf = new RegExp(tp.source, "g");

function qB(e) {
    return function() {
        return e
    }
}

function XB(e) {
    return function(t) {
        return e(t) + ""
    }
}

function YB(e, t) {
    var r = tp.lastIndex = yf.lastIndex = 0,
        n, i, a, o = -1,
        u = [],
        l = [];
    for (e = e + "", t = t + "";
        (n = tp.exec(e)) && (i = yf.exec(t));)(a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({
        i: o,
        x: Kl(n, i)
    })), r = yf.lastIndex;
    return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? XB(l[0].x) : qB(t) : (t = l.length, function(s) {
        for (var f = 0, c; f < t; ++f) u[(c = l[f]).i] = c.x(s);
        return u.join("")
    })
}

function ha(e, t) {
    var r = typeof t,
        n;
    return t == null || r === "boolean" ? dv(t) : (r === "number" ? Kl : r === "string" ? (n = Co(t)) ? (t = n, Ig) : YB : t instanceof Co ? Ig : t instanceof Date ? KB : HB(t) ? WB : Array.isArray(t) ? VB : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? GB : Kl)(e, t)
}

function pv(e, t) {
    return e = +e, t = +t,
        function(r) {
            return Math.round(e * (1 - r) + t * r)
        }
}

function QB(e, t) {
    t === void 0 && (t = e, e = ha);
    for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n;) a[r] = e(i, i = t[++r]);
    return function(o) {
        var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
        return a[u](o - u)
    }
}

function ZB(e) {
    return function() {
        return e
    }
}

function Gl(e) {
    return +e
}
var Ng = [0, 1];

function it(e) {
    return e
}

function rp(e, t) {
    return (t -= e = +e) ? function(r) {
        return (r - e) / t
    } : ZB(isNaN(t) ? NaN : .5)
}

function JB(e, t) {
    var r;
    return e > t && (r = e, e = t, t = r),
        function(n) {
            return Math.max(e, Math.min(t, n))
        }
}

function ez(e, t, r) {
    var n = e[0],
        i = e[1],
        a = t[0],
        o = t[1];
    return i < n ? (n = rp(i, n), a = r(o, a)) : (n = rp(n, i), a = r(a, o)),
        function(u) {
            return a(n(u))
        }
}

function tz(e, t, r) {
    var n = Math.min(e.length, t.length) - 1,
        i = new Array(n),
        a = new Array(n),
        o = -1;
    for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n;) i[o] = rp(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
    return function(u) {
        var l = su(e, u, 1, n) - 1;
        return a[l](i[l](u))
    }
}

function fu(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
}

function lc() {
    var e = Ng,
        t = Ng,
        r = ha,
        n, i, a, o = it,
        u, l, s;

    function f() {
        var d = Math.min(e.length, t.length);
        return o !== it && (o = JB(e[0], e[d - 1])), u = d > 2 ? tz : ez, l = s = null, c
    }

    function c(d) {
        return d == null || isNaN(d = +d) ? a : (l || (l = u(e.map(n), t, r)))(n(o(d)))
    }
    return c.invert = function(d) {
            return o(i((s || (s = u(t, e.map(n), Kl)))(d)))
        }, c.domain = function(d) {
            return arguments.length ? (e = Array.from(d, Gl), f()) : e.slice()
        }, c.range = function(d) {
            return arguments.length ? (t = Array.from(d), f()) : t.slice()
        }, c.rangeRound = function(d) {
            return t = Array.from(d), r = pv, f()
        }, c.clamp = function(d) {
            return arguments.length ? (o = d ? !0 : it, f()) : o !== it
        }, c.interpolate = function(d) {
            return arguments.length ? (r = d, f()) : r
        }, c.unknown = function(d) {
            return arguments.length ? (a = d, c) : a
        },
        function(d, p) {
            return n = d, i = p, f()
        }
}

function hv() {
    return lc()(it, it)
}

function rz(e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}

function ql(e, t) {
    if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
    var r, n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)]
}

function Fi(e) {
    return e = ql(Math.abs(e)), e ? e[1] : NaN
}

function nz(e, t) {
    return function(r, n) {
        for (var i = r.length, a = [], o = 0, u = e[0], l = 0; i > 0 && u > 0 && (l + u + 1 > n && (u = Math.max(1, n - l)), a.push(r.substring(i -= u, i + u)), !((l += u + 1) > n));) u = e[o = (o + 1) % e.length];
        return a.reverse().join(t)
    }
}

function iz(e) {
    return function(t) {
        return t.replace(/[0-9]/g, function(r) {
            return e[+r]
        })
    }
}
var az = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function jo(e) {
    if (!(t = az.exec(e))) throw new Error("invalid format: " + e);
    var t;
    return new vv({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    })
}
jo.prototype = vv.prototype;

function vv(e) {
    this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + ""
}
vv.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
};

function oz(e) {
    e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r) switch (e[r]) {
        case ".":
            n = i = r;
            break;
        case "0":
            n === 0 && (n = r), i = r;
            break;
        default:
            if (!+e[r]) break e;
            n > 0 && (n = 0);
            break
    }
    return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e
}
var gS;

function uz(e, t) {
    var r = ql(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1],
        a = i - (gS = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
        o = n.length;
    return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + ql(e, Math.max(0, t + a - 1))[0]
}

function Dg(e, t) {
    var r = ql(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1];
    return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0")
}
const Lg = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: rz,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => Dg(e * 100, t),
    r: Dg,
    s: uz,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
};

function Rg(e) {
    return e
}
var Bg = Array.prototype.map,
    zg = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function lz(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? Rg : nz(Bg.call(e.grouping, Number), e.thousands + ""),
        r = e.currency === void 0 ? "" : e.currency[0] + "",
        n = e.currency === void 0 ? "" : e.currency[1] + "",
        i = e.decimal === void 0 ? "." : e.decimal + "",
        a = e.numerals === void 0 ? Rg : iz(Bg.call(e.numerals, String)),
        o = e.percent === void 0 ? "%" : e.percent + "",
        u = e.minus === void 0 ? "−" : e.minus + "",
        l = e.nan === void 0 ? "NaN" : e.nan + "";

    function s(c) {
        c = jo(c);
        var d = c.fill,
            p = c.align,
            h = c.sign,
            y = c.symbol,
            w = c.zero,
            m = c.width,
            v = c.comma,
            g = c.precision,
            S = c.trim,
            b = c.type;
        b === "n" ? (v = !0, b = "g") : Lg[b] || (g === void 0 && (g = 12), S = !0, b = "g"), (w || d === "0" && p === "=") && (w = !0, d = "0", p = "=");
        var x = y === "$" ? r : y === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
            O = y === "$" ? n : /[%p]/.test(b) ? o : "",
            _ = Lg[b],
            P = /[defgprs%]/.test(b);
        g = g === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));

        function $(E) {
            var T = x,
                I = O,
                N, k, D;
            if (b === "c") I = _(E) + I, E = "";
            else {
                E = +E;
                var L = E < 0 || 1 / E < 0;
                if (E = isNaN(E) ? l : _(Math.abs(E), g), S && (E = oz(E)), L && +E == 0 && h !== "+" && (L = !1), T = (L ? h === "(" ? h : u : h === "-" || h === "(" ? "" : h) + T, I = (b === "s" ? zg[8 + gS / 3] : "") + I + (L && h === "(" ? ")" : ""), P) {
                    for (N = -1, k = E.length; ++N < k;)
                        if (D = E.charCodeAt(N), 48 > D || D > 57) {
                            I = (D === 46 ? i + E.slice(N + 1) : E.slice(N)) + I, E = E.slice(0, N);
                            break
                        }
                }
            }
            v && !w && (E = t(E, 1 / 0));
            var C = T.length + E.length + I.length,
                M = C < m ? new Array(m - C + 1).join(d) : "";
            switch (v && w && (E = t(M + E, M.length ? m - I.length : 1 / 0), M = ""), p) {
                case "<":
                    E = T + E + I + M;
                    break;
                case "=":
                    E = T + M + E + I;
                    break;
                case "^":
                    E = M.slice(0, C = M.length >> 1) + T + E + I + M.slice(C);
                    break;
                default:
                    E = M + T + E + I;
                    break
            }
            return a(E)
        }
        return $.toString = function() {
            return c + ""
        }, $
    }

    function f(c, d) {
        var p = s((c = jo(c), c.type = "f", c)),
            h = Math.max(-8, Math.min(8, Math.floor(Fi(d) / 3))) * 3,
            y = Math.pow(10, -h),
            w = zg[8 + h / 3];
        return function(m) {
            return p(y * m) + w
        }
    }
    return {
        format: s,
        formatPrefix: f
    }
}
var Bu, yv, bS;
sz({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});

function sz(e) {
    return Bu = lz(e), yv = Bu.format, bS = Bu.formatPrefix, Bu
}

function cz(e) {
    return Math.max(0, -Fi(Math.abs(e)))
}

function fz(e, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Fi(t) / 3))) * 3 - Fi(Math.abs(e)))
}

function dz(e, t) {
    return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Fi(t) - Fi(e)) + 1
}

function wS(e, t, r, n) {
    var i = Zd(e, t, r),
        a;
    switch (n = jo(n ? ? ",f"), n.type) {
        case "s":
            {
                var o = Math.max(Math.abs(e), Math.abs(t));
                return n.precision == null && !isNaN(a = fz(i, o)) && (n.precision = a),
                bS(n, o)
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                n.precision == null && !isNaN(a = dz(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
                break
            }
        case "f":
        case "%":
            {
                n.precision == null && !isNaN(a = cz(i)) && (n.precision = a - (n.type === "%") * 2);
                break
            }
    }
    return yv(n)
}

function hn(e) {
    var t = e.domain;
    return e.ticks = function(r) {
        var n = t();
        return Yd(n[0], n[n.length - 1], r ? ? 10)
    }, e.tickFormat = function(r, n) {
        var i = t();
        return wS(i[0], i[i.length - 1], r ? ? 10, n)
    }, e.nice = function(r) {
        r == null && (r = 10);
        var n = t(),
            i = 0,
            a = n.length - 1,
            o = n[i],
            u = n[a],
            l, s, f = 10;
        for (u < o && (s = o, o = u, u = s, s = i, i = a, a = s); f-- > 0;) {
            if (s = Qd(o, u, r), s === l) return n[i] = o, n[a] = u, t(n);
            if (s > 0) o = Math.floor(o / s) * s, u = Math.ceil(u / s) * s;
            else if (s < 0) o = Math.ceil(o * s) / s, u = Math.floor(u * s) / s;
            else break;
            l = s
        }
        return e
    }, e
}

function Xl() {
    var e = hv();
    return e.copy = function() {
        return fu(e, Xl())
    }, Ut.apply(e, arguments), hn(e)
}

function xS(e) {
    var t;

    function r(n) {
        return n == null || isNaN(n = +n) ? t : n
    }
    return r.invert = r, r.domain = r.range = function(n) {
        return arguments.length ? (e = Array.from(n, Gl), r) : e.slice()
    }, r.unknown = function(n) {
        return arguments.length ? (t = n, r) : t
    }, r.copy = function() {
        return xS(e).unknown(t)
    }, e = arguments.length ? Array.from(e, Gl) : [0, 1], hn(r)
}

function SS(e, t) {
    e = e.slice();
    var r = 0,
        n = e.length - 1,
        i = e[r],
        a = e[n],
        o;
    return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e
}

function Fg(e) {
    return Math.log(e)
}

function Ug(e) {
    return Math.exp(e)
}

function pz(e) {
    return -Math.log(-e)
}

function hz(e) {
    return -Math.exp(-e)
}

function vz(e) {
    return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e
}

function yz(e) {
    return e === 10 ? vz : e === Math.E ? Math.exp : t => Math.pow(e, t)
}

function mz(e) {
    return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), t => Math.log(t) / e)
}

function Wg(e) {
    return (t, r) => -e(-t, r)
}

function mv(e) {
    const t = e(Fg, Ug),
        r = t.domain;
    let n = 10,
        i, a;

    function o() {
        return i = mz(n), a = yz(n), r()[0] < 0 ? (i = Wg(i), a = Wg(a), e(pz, hz)) : e(Fg, Ug), t
    }
    return t.base = function(u) {
        return arguments.length ? (n = +u, o()) : n
    }, t.domain = function(u) {
        return arguments.length ? (r(u), o()) : r()
    }, t.ticks = u => {
        const l = r();
        let s = l[0],
            f = l[l.length - 1];
        const c = f < s;
        c && ([s, f] = [f, s]);
        let d = i(s),
            p = i(f),
            h, y;
        const w = u == null ? 10 : +u;
        let m = [];
        if (!(n % 1) && p - d < w) {
            if (d = Math.floor(d), p = Math.ceil(p), s > 0) {
                for (; d <= p; ++d)
                    for (h = 1; h < n; ++h)
                        if (y = d < 0 ? h / a(-d) : h * a(d), !(y < s)) {
                            if (y > f) break;
                            m.push(y)
                        }
            } else
                for (; d <= p; ++d)
                    for (h = n - 1; h >= 1; --h)
                        if (y = d > 0 ? h / a(-d) : h * a(d), !(y < s)) {
                            if (y > f) break;
                            m.push(y)
                        }
            m.length * 2 < w && (m = Yd(s, f, w))
        } else m = Yd(d, p, Math.min(p - d, w)).map(a);
        return c ? m.reverse() : m
    }, t.tickFormat = (u, l) => {
        if (u == null && (u = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = jo(l)).precision == null && (l.trim = !0), l = yv(l)), u === 1 / 0) return l;
        const s = Math.max(1, n * u / t.ticks().length);
        return f => {
            let c = f / a(Math.round(i(f)));
            return c * n < n - .5 && (c *= n), c <= s ? l(f) : ""
        }
    }, t.nice = () => r(SS(r(), {
        floor: u => a(Math.floor(i(u))),
        ceil: u => a(Math.ceil(i(u)))
    })), t
}

function OS() {
    const e = mv(lc()).domain([1, 10]);
    return e.copy = () => fu(e, OS()).base(e.base()), Ut.apply(e, arguments), e
}

function Hg(e) {
    return function(t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e))
    }
}

function Vg(e) {
    return function(t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e
    }
}

function gv(e) {
    var t = 1,
        r = e(Hg(t), Vg(t));
    return r.constant = function(n) {
        return arguments.length ? e(Hg(t = +n), Vg(t)) : t
    }, hn(r)
}

function _S() {
    var e = gv(lc());
    return e.copy = function() {
        return fu(e, _S()).constant(e.constant())
    }, Ut.apply(e, arguments)
}

function Kg(e) {
    return function(t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
    }
}

function gz(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e)
}

function bz(e) {
    return e < 0 ? -e * e : e * e
}

function bv(e) {
    var t = e(it, it),
        r = 1;

    function n() {
        return r === 1 ? e(it, it) : r === .5 ? e(gz, bz) : e(Kg(r), Kg(1 / r))
    }
    return t.exponent = function(i) {
        return arguments.length ? (r = +i, n()) : r
    }, hn(t)
}

function wv() {
    var e = bv(lc());
    return e.copy = function() {
        return fu(e, wv()).exponent(e.exponent())
    }, Ut.apply(e, arguments), e
}

function wz() {
    return wv.apply(null, arguments).exponent(.5)
}

function Gg(e) {
    return Math.sign(e) * e * e
}

function xz(e) {
    return Math.sign(e) * Math.sqrt(Math.abs(e))
}

function PS() {
    var e = hv(),
        t = [0, 1],
        r = !1,
        n;

    function i(a) {
        var o = xz(e(a));
        return isNaN(o) ? n : r ? Math.round(o) : o
    }
    return i.invert = function(a) {
        return e.invert(Gg(a))
    }, i.domain = function(a) {
        return arguments.length ? (e.domain(a), i) : e.domain()
    }, i.range = function(a) {
        return arguments.length ? (e.range((t = Array.from(a, Gl)).map(Gg)), i) : t.slice()
    }, i.rangeRound = function(a) {
        return i.range(a).round(!0)
    }, i.round = function(a) {
        return arguments.length ? (r = !!a, i) : r
    }, i.clamp = function(a) {
        return arguments.length ? (e.clamp(a), i) : e.clamp()
    }, i.unknown = function(a) {
        return arguments.length ? (n = a, i) : n
    }, i.copy = function() {
        return PS(e.domain(), t).round(r).clamp(e.clamp()).unknown(n)
    }, Ut.apply(i, arguments), hn(i)
}

function AS() {
    var e = [],
        t = [],
        r = [],
        n;

    function i() {
        var o = 0,
            u = Math.max(1, t.length);
        for (r = new Array(u - 1); ++o < u;) r[o - 1] = AB(e, o / u);
        return a
    }

    function a(o) {
        return o == null || isNaN(o = +o) ? n : t[su(r, o)]
    }
    return a.invertExtent = function(o) {
        var u = t.indexOf(o);
        return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]]
    }, a.domain = function(o) {
        if (!arguments.length) return e.slice();
        e = [];
        for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
        return e.sort(an), i()
    }, a.range = function(o) {
        return arguments.length ? (t = Array.from(o), i()) : t.slice()
    }, a.unknown = function(o) {
        return arguments.length ? (n = o, a) : n
    }, a.quantiles = function() {
        return r.slice()
    }, a.copy = function() {
        return AS().domain(e).range(t).unknown(n)
    }, Ut.apply(a, arguments)
}

function ES() {
    var e = 0,
        t = 1,
        r = 1,
        n = [.5],
        i = [0, 1],
        a;

    function o(l) {
        return l != null && l <= l ? i[su(n, l, 0, r)] : a
    }

    function u() {
        var l = -1;
        for (n = new Array(r); ++l < r;) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
        return o
    }
    return o.domain = function(l) {
        return arguments.length ? ([e, t] = l, e = +e, t = +t, u()) : [e, t]
    }, o.range = function(l) {
        return arguments.length ? (r = (i = Array.from(l)).length - 1, u()) : i.slice()
    }, o.invertExtent = function(l) {
        var s = i.indexOf(l);
        return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]]
    }, o.unknown = function(l) {
        return arguments.length && (a = l), o
    }, o.thresholds = function() {
        return n.slice()
    }, o.copy = function() {
        return ES().domain([e, t]).range(i).unknown(a)
    }, Ut.apply(hn(o), arguments)
}

function $S() {
    var e = [.5],
        t = [0, 1],
        r, n = 1;

    function i(a) {
        return a != null && a <= a ? t[su(e, a, 0, n)] : r
    }
    return i.domain = function(a) {
        return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice()
    }, i.range = function(a) {
        return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice()
    }, i.invertExtent = function(a) {
        var o = t.indexOf(a);
        return [e[o - 1], e[o]]
    }, i.unknown = function(a) {
        return arguments.length ? (r = a, i) : r
    }, i.copy = function() {
        return $S().domain(e).range(t).unknown(r)
    }, Ut.apply(i, arguments)
}
const mf = new Date,
    gf = new Date;

function ze(e, t, r, n) {
    function i(a) {
        return e(a = arguments.length === 0 ? new Date : new Date(+a)), a
    }
    return i.floor = a => (e(a = new Date(+a)), a), i.ceil = a => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = a => {
        const o = i(a),
            u = i.ceil(a);
        return a - o < u - a ? o : u
    }, i.offset = (a, o) => (t(a = new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
        const l = [];
        if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return l;
        let s;
        do l.push(s = new Date(+a)), t(a, u), e(a); while (s < a && a < o);
        return l
    }, i.filter = a => ze(o => {
        if (o >= o)
            for (; e(o), !a(o);) o.setTime(o - 1)
    }, (o, u) => {
        if (o >= o)
            if (u < 0)
                for (; ++u <= 0;)
                    for (; t(o, -1), !a(o););
            else
                for (; --u >= 0;)
                    for (; t(o, 1), !a(o););
    }), r && (i.count = (a, o) => (mf.setTime(+a), gf.setTime(+o), e(mf), e(gf), Math.floor(r(mf, gf))), i.every = a => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? o => n(o) % a === 0 : o => i.count(0, o) % a === 0) : i)), i
}
const Yl = ze(() => {}, (e, t) => {
    e.setTime(+e + t)
}, (e, t) => t - e);
Yl.every = e => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ze(t => {
    t.setTime(Math.floor(t / e) * e)
}, (t, r) => {
    t.setTime(+t + r * e)
}, (t, r) => (r - t) / e) : Yl);
Yl.range;
const br = 1e3,
    It = br * 60,
    wr = It * 60,
    jr = wr * 24,
    xv = jr * 7,
    qg = jr * 30,
    bf = jr * 365,
    Cn = ze(e => {
        e.setTime(e - e.getMilliseconds())
    }, (e, t) => {
        e.setTime(+e + t * br)
    }, (e, t) => (t - e) / br, e => e.getUTCSeconds());
Cn.range;
const Sv = ze(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * br)
}, (e, t) => {
    e.setTime(+e + t * It)
}, (e, t) => (t - e) / It, e => e.getMinutes());
Sv.range;
const Ov = ze(e => {
    e.setUTCSeconds(0, 0)
}, (e, t) => {
    e.setTime(+e + t * It)
}, (e, t) => (t - e) / It, e => e.getUTCMinutes());
Ov.range;
const _v = ze(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * br - e.getMinutes() * It)
}, (e, t) => {
    e.setTime(+e + t * wr)
}, (e, t) => (t - e) / wr, e => e.getHours());
_v.range;
const Pv = ze(e => {
    e.setUTCMinutes(0, 0, 0)
}, (e, t) => {
    e.setTime(+e + t * wr)
}, (e, t) => (t - e) / wr, e => e.getUTCHours());
Pv.range;
const du = ze(e => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * It) / jr, e => e.getDate() - 1);
du.range;
const sc = ze(e => {
    e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}, (e, t) => (t - e) / jr, e => e.getUTCDate() - 1);
sc.range;
const TS = ze(e => {
    e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}, (e, t) => (t - e) / jr, e => Math.floor(e / jr));
TS.range;

function Xn(e) {
    return ze(t => {
        t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
    }, (t, r) => {
        t.setDate(t.getDate() + r * 7)
    }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * It) / xv)
}
const cc = Xn(0),
    Ql = Xn(1),
    Sz = Xn(2),
    Oz = Xn(3),
    Ui = Xn(4),
    _z = Xn(5),
    Pz = Xn(6);
cc.range;
Ql.range;
Sz.range;
Oz.range;
Ui.range;
_z.range;
Pz.range;

function Yn(e) {
    return ze(t => {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
    }, (t, r) => {
        t.setUTCDate(t.getUTCDate() + r * 7)
    }, (t, r) => (r - t) / xv)
}
const fc = Yn(0),
    Zl = Yn(1),
    Az = Yn(2),
    Ez = Yn(3),
    Wi = Yn(4),
    $z = Yn(5),
    Tz = Yn(6);
fc.range;
Zl.range;
Az.range;
Ez.range;
Wi.range;
$z.range;
Tz.range;
const Av = ze(e => {
    e.setDate(1), e.setHours(0, 0, 0, 0)
}, (e, t) => {
    e.setMonth(e.getMonth() + t)
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, e => e.getMonth());
Av.range;
const Ev = ze(e => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t)
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, e => e.getUTCMonth());
Ev.range;
const kr = ze(e => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
}, (e, t) => {
    e.setFullYear(e.getFullYear() + t)
}, (e, t) => t.getFullYear() - e.getFullYear(), e => e.getFullYear());
kr.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze(t => {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
}, (t, r) => {
    t.setFullYear(t.getFullYear() + r * e)
});
kr.range;
const Mr = ze(e => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t)
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), e => e.getUTCFullYear());
Mr.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze(t => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
}, (t, r) => {
    t.setUTCFullYear(t.getUTCFullYear() + r * e)
});
Mr.range;

function CS(e, t, r, n, i, a) {
    const o = [
        [Cn, 1, br],
        [Cn, 5, 5 * br],
        [Cn, 15, 15 * br],
        [Cn, 30, 30 * br],
        [a, 1, It],
        [a, 5, 5 * It],
        [a, 15, 15 * It],
        [a, 30, 30 * It],
        [i, 1, wr],
        [i, 3, 3 * wr],
        [i, 6, 6 * wr],
        [i, 12, 12 * wr],
        [n, 1, jr],
        [n, 2, 2 * jr],
        [r, 1, xv],
        [t, 1, qg],
        [t, 3, 3 * qg],
        [e, 1, bf]
    ];

    function u(s, f, c) {
        const d = f < s;
        d && ([s, f] = [f, s]);
        const p = c && typeof c.range == "function" ? c : l(s, f, c),
            h = p ? p.range(s, +f + 1) : [];
        return d ? h.reverse() : h
    }

    function l(s, f, c) {
        const d = Math.abs(f - s) / c,
            p = sv(([, , w]) => w).right(o, d);
        if (p === o.length) return e.every(Zd(s / bf, f / bf, c));
        if (p === 0) return Yl.every(Math.max(Zd(s, f, c), 1));
        const [h, y] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
        return h.every(y)
    }
    return [u, l]
}
const [Cz, jz] = CS(Mr, Ev, fc, TS, Pv, Ov), [kz, Mz] = CS(kr, Av, cc, du, _v, Sv);

function wf(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y), t
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
}

function xf(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y), t
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
}

function Ca(e, t, r) {
    return {
        y: e,
        m: t,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}

function Iz(e) {
    var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        a = e.days,
        o = e.shortDays,
        u = e.months,
        l = e.shortMonths,
        s = ja(i),
        f = ka(i),
        c = ja(a),
        d = ka(a),
        p = ja(o),
        h = ka(o),
        y = ja(u),
        w = ka(u),
        m = ja(l),
        v = ka(l),
        g = {
            a: L,
            A: C,
            b: M,
            B,
            c: null,
            d: e0,
            e: e0,
            f: n4,
            g: p4,
            G: v4,
            H: e4,
            I: t4,
            j: r4,
            L: jS,
            m: i4,
            M: a4,
            p: H,
            q: U,
            Q: n0,
            s: i0,
            S: o4,
            u: u4,
            U: l4,
            V: s4,
            w: c4,
            W: f4,
            x: null,
            X: null,
            y: d4,
            Y: h4,
            Z: y4,
            "%": r0
        },
        S = {
            a: q,
            A: te,
            b: ge,
            B: Ee,
            c: null,
            d: t0,
            e: t0,
            f: w4,
            g: C4,
            G: k4,
            H: m4,
            I: g4,
            j: b4,
            L: MS,
            m: x4,
            M: S4,
            p: Et,
            q: ut,
            Q: n0,
            s: i0,
            S: O4,
            u: _4,
            U: P4,
            V: A4,
            w: E4,
            W: $4,
            x: null,
            X: null,
            y: T4,
            Y: j4,
            Z: M4,
            "%": r0
        },
        b = {
            a: $,
            A: E,
            b: T,
            B: I,
            c: N,
            d: Zg,
            e: Zg,
            f: Yz,
            g: Qg,
            G: Yg,
            H: Jg,
            I: Jg,
            j: Kz,
            L: Xz,
            m: Vz,
            M: Gz,
            p: P,
            q: Hz,
            Q: Zz,
            s: Jz,
            S: qz,
            u: Bz,
            U: zz,
            V: Fz,
            w: Rz,
            W: Uz,
            x: k,
            X: D,
            y: Qg,
            Y: Yg,
            Z: Wz,
            "%": Qz
        };
    g.x = x(r, g), g.X = x(n, g), g.c = x(t, g), S.x = x(r, S), S.X = x(n, S), S.c = x(t, S);

    function x(V, Y) {
        return function(Q) {
            var R = [],
                _e = -1,
                re = 0,
                Me = V.length,
                Ie, lt, Br;
            for (Q instanceof Date || (Q = new Date(+Q)); ++_e < Me;) V.charCodeAt(_e) === 37 && (R.push(V.slice(re, _e)), (lt = Xg[Ie = V.charAt(++_e)]) != null ? Ie = V.charAt(++_e) : lt = Ie === "e" ? " " : "0", (Br = Y[Ie]) && (Ie = Br(Q, lt)), R.push(Ie), re = _e + 1);
            return R.push(V.slice(re, _e)), R.join("")
        }
    }

    function O(V, Y) {
        return function(Q) {
            var R = Ca(1900, void 0, 1),
                _e = _(R, V, Q += "", 0),
                re, Me;
            if (_e != Q.length) return null;
            if ("Q" in R) return new Date(R.Q);
            if ("s" in R) return new Date(R.s * 1e3 + ("L" in R ? R.L : 0));
            if (Y && !("Z" in R) && (R.Z = 0), "p" in R && (R.H = R.H % 12 + R.p * 12), R.m === void 0 && (R.m = "q" in R ? R.q : 0), "V" in R) {
                if (R.V < 1 || R.V > 53) return null;
                "w" in R || (R.w = 1), "Z" in R ? (re = xf(Ca(R.y, 0, 1)), Me = re.getUTCDay(), re = Me > 4 || Me === 0 ? Zl.ceil(re) : Zl(re), re = sc.offset(re, (R.V - 1) * 7), R.y = re.getUTCFullYear(), R.m = re.getUTCMonth(), R.d = re.getUTCDate() + (R.w + 6) % 7) : (re = wf(Ca(R.y, 0, 1)), Me = re.getDay(), re = Me > 4 || Me === 0 ? Ql.ceil(re) : Ql(re), re = du.offset(re, (R.V - 1) * 7), R.y = re.getFullYear(), R.m = re.getMonth(), R.d = re.getDate() + (R.w + 6) % 7)
            } else("W" in R || "U" in R) && ("w" in R || (R.w = "u" in R ? R.u % 7 : "W" in R ? 1 : 0), Me = "Z" in R ? xf(Ca(R.y, 0, 1)).getUTCDay() : wf(Ca(R.y, 0, 1)).getDay(), R.m = 0, R.d = "W" in R ? (R.w + 6) % 7 + R.W * 7 - (Me + 5) % 7 : R.w + R.U * 7 - (Me + 6) % 7);
            return "Z" in R ? (R.H += R.Z / 100 | 0, R.M += R.Z % 100, xf(R)) : wf(R)
        }
    }

    function _(V, Y, Q, R) {
        for (var _e = 0, re = Y.length, Me = Q.length, Ie, lt; _e < re;) {
            if (R >= Me) return -1;
            if (Ie = Y.charCodeAt(_e++), Ie === 37) {
                if (Ie = Y.charAt(_e++), lt = b[Ie in Xg ? Y.charAt(_e++) : Ie], !lt || (R = lt(V, Q, R)) < 0) return -1
            } else if (Ie != Q.charCodeAt(R++)) return -1
        }
        return R
    }

    function P(V, Y, Q) {
        var R = s.exec(Y.slice(Q));
        return R ? (V.p = f.get(R[0].toLowerCase()), Q + R[0].length) : -1
    }

    function $(V, Y, Q) {
        var R = p.exec(Y.slice(Q));
        return R ? (V.w = h.get(R[0].toLowerCase()), Q + R[0].length) : -1
    }

    function E(V, Y, Q) {
        var R = c.exec(Y.slice(Q));
        return R ? (V.w = d.get(R[0].toLowerCase()), Q + R[0].length) : -1
    }

    function T(V, Y, Q) {
        var R = m.exec(Y.slice(Q));
        return R ? (V.m = v.get(R[0].toLowerCase()), Q + R[0].length) : -1
    }

    function I(V, Y, Q) {
        var R = y.exec(Y.slice(Q));
        return R ? (V.m = w.get(R[0].toLowerCase()), Q + R[0].length) : -1
    }

    function N(V, Y, Q) {
        return _(V, t, Y, Q)
    }

    function k(V, Y, Q) {
        return _(V, r, Y, Q)
    }

    function D(V, Y, Q) {
        return _(V, n, Y, Q)
    }

    function L(V) {
        return o[V.getDay()]
    }

    function C(V) {
        return a[V.getDay()]
    }

    function M(V) {
        return l[V.getMonth()]
    }

    function B(V) {
        return u[V.getMonth()]
    }

    function H(V) {
        return i[+(V.getHours() >= 12)]
    }

    function U(V) {
        return 1 + ~~(V.getMonth() / 3)
    }

    function q(V) {
        return o[V.getUTCDay()]
    }

    function te(V) {
        return a[V.getUTCDay()]
    }

    function ge(V) {
        return l[V.getUTCMonth()]
    }

    function Ee(V) {
        return u[V.getUTCMonth()]
    }

    function Et(V) {
        return i[+(V.getUTCHours() >= 12)]
    }

    function ut(V) {
        return 1 + ~~(V.getUTCMonth() / 3)
    }
    return {
        format: function(V) {
            var Y = x(V += "", g);
            return Y.toString = function() {
                return V
            }, Y
        },
        parse: function(V) {
            var Y = O(V += "", !1);
            return Y.toString = function() {
                return V
            }, Y
        },
        utcFormat: function(V) {
            var Y = x(V += "", S);
            return Y.toString = function() {
                return V
            }, Y
        },
        utcParse: function(V) {
            var Y = O(V += "", !0);
            return Y.toString = function() {
                return V
            }, Y
        }
    }
}
var Xg = {
        "-": "",
        _: " ",
        0: "0"
    },
    He = /^\s*\d+/,
    Nz = /^%/,
    Dz = /[\\^$*+?|[\]().{}]/g;

function ae(e, t, r) {
    var n = e < 0 ? "-" : "",
        i = (n ? -e : e) + "",
        a = i.length;
    return n + (a < r ? new Array(r - a + 1).join(t) + i : i)
}

function Lz(e) {
    return e.replace(Dz, "\\$&")
}

function ja(e) {
    return new RegExp("^(?:" + e.map(Lz).join("|") + ")", "i")
}

function ka(e) {
    return new Map(e.map((t, r) => [t.toLowerCase(), r]))
}

function Rz(e, t, r) {
    var n = He.exec(t.slice(r, r + 1));
    return n ? (e.w = +n[0], r + n[0].length) : -1
}

function Bz(e, t, r) {
    var n = He.exec(t.slice(r, r + 1));
    return n ? (e.u = +n[0], r + n[0].length) : -1
}

function zz(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.U = +n[0], r + n[0].length) : -1
}

function Fz(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.V = +n[0], r + n[0].length) : -1
}

function Uz(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.W = +n[0], r + n[0].length) : -1
}

function Yg(e, t, r) {
    var n = He.exec(t.slice(r, r + 4));
    return n ? (e.y = +n[0], r + n[0].length) : -1
}

function Qg(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1
}

function Wz(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1
}

function Hz(e, t, r) {
    var n = He.exec(t.slice(r, r + 1));
    return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1
}

function Vz(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.m = n[0] - 1, r + n[0].length) : -1
}

function Zg(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.d = +n[0], r + n[0].length) : -1
}

function Kz(e, t, r) {
    var n = He.exec(t.slice(r, r + 3));
    return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1
}

function Jg(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.H = +n[0], r + n[0].length) : -1
}

function Gz(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.M = +n[0], r + n[0].length) : -1
}

function qz(e, t, r) {
    var n = He.exec(t.slice(r, r + 2));
    return n ? (e.S = +n[0], r + n[0].length) : -1
}

function Xz(e, t, r) {
    var n = He.exec(t.slice(r, r + 3));
    return n ? (e.L = +n[0], r + n[0].length) : -1
}

function Yz(e, t, r) {
    var n = He.exec(t.slice(r, r + 6));
    return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1
}

function Qz(e, t, r) {
    var n = Nz.exec(t.slice(r, r + 1));
    return n ? r + n[0].length : -1
}

function Zz(e, t, r) {
    var n = He.exec(t.slice(r));
    return n ? (e.Q = +n[0], r + n[0].length) : -1
}

function Jz(e, t, r) {
    var n = He.exec(t.slice(r));
    return n ? (e.s = +n[0], r + n[0].length) : -1
}

function e0(e, t) {
    return ae(e.getDate(), t, 2)
}

function e4(e, t) {
    return ae(e.getHours(), t, 2)
}

function t4(e, t) {
    return ae(e.getHours() % 12 || 12, t, 2)
}

function r4(e, t) {
    return ae(1 + du.count(kr(e), e), t, 3)
}

function jS(e, t) {
    return ae(e.getMilliseconds(), t, 3)
}

function n4(e, t) {
    return jS(e, t) + "000"
}

function i4(e, t) {
    return ae(e.getMonth() + 1, t, 2)
}

function a4(e, t) {
    return ae(e.getMinutes(), t, 2)
}

function o4(e, t) {
    return ae(e.getSeconds(), t, 2)
}

function u4(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t
}

function l4(e, t) {
    return ae(cc.count(kr(e) - 1, e), t, 2)
}

function kS(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? Ui(e) : Ui.ceil(e)
}

function s4(e, t) {
    return e = kS(e), ae(Ui.count(kr(e), e) + (kr(e).getDay() === 4), t, 2)
}

function c4(e) {
    return e.getDay()
}

function f4(e, t) {
    return ae(Ql.count(kr(e) - 1, e), t, 2)
}

function d4(e, t) {
    return ae(e.getFullYear() % 100, t, 2)
}

function p4(e, t) {
    return e = kS(e), ae(e.getFullYear() % 100, t, 2)
}

function h4(e, t) {
    return ae(e.getFullYear() % 1e4, t, 4)
}

function v4(e, t) {
    var r = e.getDay();
    return e = r >= 4 || r === 0 ? Ui(e) : Ui.ceil(e), ae(e.getFullYear() % 1e4, t, 4)
}

function y4(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : (t *= -1, "+")) + ae(t / 60 | 0, "0", 2) + ae(t % 60, "0", 2)
}

function t0(e, t) {
    return ae(e.getUTCDate(), t, 2)
}

function m4(e, t) {
    return ae(e.getUTCHours(), t, 2)
}

function g4(e, t) {
    return ae(e.getUTCHours() % 12 || 12, t, 2)
}

function b4(e, t) {
    return ae(1 + sc.count(Mr(e), e), t, 3)
}

function MS(e, t) {
    return ae(e.getUTCMilliseconds(), t, 3)
}

function w4(e, t) {
    return MS(e, t) + "000"
}

function x4(e, t) {
    return ae(e.getUTCMonth() + 1, t, 2)
}

function S4(e, t) {
    return ae(e.getUTCMinutes(), t, 2)
}

function O4(e, t) {
    return ae(e.getUTCSeconds(), t, 2)
}

function _4(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t
}

function P4(e, t) {
    return ae(fc.count(Mr(e) - 1, e), t, 2)
}

function IS(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? Wi(e) : Wi.ceil(e)
}

function A4(e, t) {
    return e = IS(e), ae(Wi.count(Mr(e), e) + (Mr(e).getUTCDay() === 4), t, 2)
}

function E4(e) {
    return e.getUTCDay()
}

function $4(e, t) {
    return ae(Zl.count(Mr(e) - 1, e), t, 2)
}

function T4(e, t) {
    return ae(e.getUTCFullYear() % 100, t, 2)
}

function C4(e, t) {
    return e = IS(e), ae(e.getUTCFullYear() % 100, t, 2)
}

function j4(e, t) {
    return ae(e.getUTCFullYear() % 1e4, t, 4)
}

function k4(e, t) {
    var r = e.getUTCDay();
    return e = r >= 4 || r === 0 ? Wi(e) : Wi.ceil(e), ae(e.getUTCFullYear() % 1e4, t, 4)
}

function M4() {
    return "+0000"
}

function r0() {
    return "%"
}

function n0(e) {
    return +e
}

function i0(e) {
    return Math.floor(+e / 1e3)
}
var ti, NS, DS;
I4({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function I4(e) {
    return ti = Iz(e), NS = ti.format, ti.parse, DS = ti.utcFormat, ti.utcParse, ti
}

function N4(e) {
    return new Date(e)
}

function D4(e) {
    return e instanceof Date ? +e : +new Date(+e)
}

function $v(e, t, r, n, i, a, o, u, l, s) {
    var f = hv(),
        c = f.invert,
        d = f.domain,
        p = s(".%L"),
        h = s(":%S"),
        y = s("%I:%M"),
        w = s("%I %p"),
        m = s("%a %d"),
        v = s("%b %d"),
        g = s("%B"),
        S = s("%Y");

    function b(x) {
        return (l(x) < x ? p : u(x) < x ? h : o(x) < x ? y : a(x) < x ? w : n(x) < x ? i(x) < x ? m : v : r(x) < x ? g : S)(x)
    }
    return f.invert = function(x) {
        return new Date(c(x))
    }, f.domain = function(x) {
        return arguments.length ? d(Array.from(x, D4)) : d().map(N4)
    }, f.ticks = function(x) {
        var O = d();
        return e(O[0], O[O.length - 1], x ? ? 10)
    }, f.tickFormat = function(x, O) {
        return O == null ? b : s(O)
    }, f.nice = function(x) {
        var O = d();
        return (!x || typeof x.range != "function") && (x = t(O[0], O[O.length - 1], x ? ? 10)), x ? d(SS(O, x)) : f
    }, f.copy = function() {
        return fu(f, $v(e, t, r, n, i, a, o, u, l, s))
    }, f
}

function L4() {
    return Ut.apply($v(kz, Mz, kr, Av, cc, du, _v, Sv, Cn, NS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
}

function R4() {
    return Ut.apply($v(Cz, jz, Mr, Ev, fc, sc, Pv, Ov, Cn, DS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
}

function dc() {
    var e = 0,
        t = 1,
        r, n, i, a, o = it,
        u = !1,
        l;

    function s(c) {
        return c == null || isNaN(c = +c) ? l : o(i === 0 ? .5 : (c = (a(c) - r) * i, u ? Math.max(0, Math.min(1, c)) : c))
    }
    s.domain = function(c) {
        return arguments.length ? ([e, t] = c, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e, t]
    }, s.clamp = function(c) {
        return arguments.length ? (u = !!c, s) : u
    }, s.interpolator = function(c) {
        return arguments.length ? (o = c, s) : o
    };

    function f(c) {
        return function(d) {
            var p, h;
            return arguments.length ? ([p, h] = d, o = c(p, h), s) : [o(0), o(1)]
        }
    }
    return s.range = f(ha), s.rangeRound = f(pv), s.unknown = function(c) {
            return arguments.length ? (l = c, s) : l
        },
        function(c) {
            return a = c, r = c(e), n = c(t), i = r === n ? 0 : 1 / (n - r), s
        }
}

function vn(e, t) {
    return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())
}

function LS() {
    var e = hn(dc()(it));
    return e.copy = function() {
        return vn(e, LS())
    }, Rr.apply(e, arguments)
}

function RS() {
    var e = mv(dc()).domain([1, 10]);
    return e.copy = function() {
        return vn(e, RS()).base(e.base())
    }, Rr.apply(e, arguments)
}

function BS() {
    var e = gv(dc());
    return e.copy = function() {
        return vn(e, BS()).constant(e.constant())
    }, Rr.apply(e, arguments)
}

function Tv() {
    var e = bv(dc());
    return e.copy = function() {
        return vn(e, Tv()).exponent(e.exponent())
    }, Rr.apply(e, arguments)
}

function B4() {
    return Tv.apply(null, arguments).exponent(.5)
}

function zS() {
    var e = [],
        t = it;

    function r(n) {
        if (n != null && !isNaN(n = +n)) return t((su(e, n, 1) - 1) / (e.length - 1))
    }
    return r.domain = function(n) {
        if (!arguments.length) return e.slice();
        e = [];
        for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
        return e.sort(an), r
    }, r.interpolator = function(n) {
        return arguments.length ? (t = n, r) : t
    }, r.range = function() {
        return e.map((n, i) => t(i / (e.length - 1)))
    }, r.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (i, a) => PB(e, a / n))
    }, r.copy = function() {
        return zS(t).domain(e)
    }, Rr.apply(r, arguments)
}

function pc() {
    var e = 0,
        t = .5,
        r = 1,
        n = 1,
        i, a, o, u, l, s = it,
        f, c = !1,
        d;

    function p(y) {
        return isNaN(y = +y) ? d : (y = .5 + ((y = +f(y)) - a) * (n * y < n * a ? u : l), s(c ? Math.max(0, Math.min(1, y)) : y))
    }
    p.domain = function(y) {
        return arguments.length ? ([e, t, r] = y, i = f(e = +e), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : .5 / (a - i), l = a === o ? 0 : .5 / (o - a), n = a < i ? -1 : 1, p) : [e, t, r]
    }, p.clamp = function(y) {
        return arguments.length ? (c = !!y, p) : c
    }, p.interpolator = function(y) {
        return arguments.length ? (s = y, p) : s
    };

    function h(y) {
        return function(w) {
            var m, v, g;
            return arguments.length ? ([m, v, g] = w, s = QB(y, [m, v, g]), p) : [s(0), s(.5), s(1)]
        }
    }
    return p.range = h(ha), p.rangeRound = h(pv), p.unknown = function(y) {
            return arguments.length ? (d = y, p) : d
        },
        function(y) {
            return f = y, i = y(e), a = y(t), o = y(r), u = i === a ? 0 : .5 / (a - i), l = a === o ? 0 : .5 / (o - a), n = a < i ? -1 : 1, p
        }
}

function FS() {
    var e = hn(pc()(it));
    return e.copy = function() {
        return vn(e, FS())
    }, Rr.apply(e, arguments)
}

function US() {
    var e = mv(pc()).domain([.1, 1, 10]);
    return e.copy = function() {
        return vn(e, US()).base(e.base())
    }, Rr.apply(e, arguments)
}

function WS() {
    var e = gv(pc());
    return e.copy = function() {
        return vn(e, WS()).constant(e.constant())
    }, Rr.apply(e, arguments)
}

function Cv() {
    var e = bv(pc());
    return e.copy = function() {
        return vn(e, Cv()).exponent(e.exponent())
    }, Rr.apply(e, arguments)
}

function z4() {
    return Cv.apply(null, arguments).exponent(.5)
}
const a0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    scaleBand: Eo,
    scaleDiverging: FS,
    scaleDivergingLog: US,
    scaleDivergingPow: Cv,
    scaleDivergingSqrt: z4,
    scaleDivergingSymlog: WS,
    scaleIdentity: xS,
    scaleImplicit: Jd,
    scaleLinear: Xl,
    scaleLog: OS,
    scaleOrdinal: cv,
    scalePoint: Za,
    scalePow: wv,
    scaleQuantile: AS,
    scaleQuantize: ES,
    scaleRadial: PS,
    scaleSequential: LS,
    scaleSequentialLog: RS,
    scaleSequentialPow: Tv,
    scaleSequentialQuantile: zS,
    scaleSequentialSqrt: B4,
    scaleSequentialSymlog: BS,
    scaleSqrt: wz,
    scaleSymlog: _S,
    scaleThreshold: $S,
    scaleTime: L4,
    scaleUtc: R4,
    tickFormat: wS
}, Symbol.toStringTag, {
    value: "Module"
}));
var F4 = oa;

function U4(e, t, r) {
    for (var n = -1, i = e.length; ++n < i;) {
        var a = e[n],
            o = t(a);
        if (o != null && (u === void 0 ? o === o && !F4(o) : r(o, u))) var u = o,
            l = a
    }
    return l
}
var HS = U4;

function W4(e, t) {
    return e > t
}
var H4 = W4,
    V4 = HS,
    K4 = H4,
    G4 = pa;

function q4(e) {
    return e && e.length ? V4(e, G4, K4) : void 0
}
var X4 = q4;
const hc = fe(X4);

function Y4(e, t) {
    return e < t
}
var Q4 = Y4,
    Z4 = HS,
    J4 = Q4,
    e8 = pa;

function t8(e) {
    return e && e.length ? Z4(e, e8, J4) : void 0
}
var r8 = t8;
const vc = fe(r8);
var n8 = Hh,
    i8 = pn,
    a8 = Zx,
    o8 = vt;

function u8(e, t) {
    var r = o8(e) ? n8 : a8;
    return r(e, i8(t))
}
var l8 = u8,
    s8 = Yx,
    c8 = l8;

function f8(e, t) {
    return s8(c8(e, t), 1)
}
var d8 = f8;
const p8 = fe(d8);
var h8 = av;

function v8(e, t) {
    return h8(e, t)
}
var y8 = v8;
const yc = fe(y8);
var va = 1e9,
    m8 = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    kv, we = !0,
    zt = "[DecimalError] ",
    Nn = zt + "Invalid argument: ",
    jv = zt + "Exponent out of range: ",
    ya = Math.floor,
    _n = Math.pow,
    g8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    wt, Fe = 1e7,
    ye = 7,
    VS = 9007199254740991,
    Jl = ya(VS / ye),
    G = {};
G.absoluteValue = G.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e
};
G.comparedTo = G.cmp = function(e) {
    var t, r, n, i, a = this;
    if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
    if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
    for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1
};
G.decimalPlaces = G.dp = function() {
    var e = this,
        t = e.d.length - 1,
        r = (t - e.e) * ye;
    if (t = e.d[t], t)
        for (; t % 10 == 0; t /= 10) r--;
    return r < 0 ? 0 : r
};
G.dividedBy = G.div = function(e) {
    return Ar(this, new this.constructor(e))
};
G.dividedToIntegerBy = G.idiv = function(e) {
    var t = this,
        r = t.constructor;
    return ce(Ar(t, new r(e), 0, 1), r.precision)
};
G.equals = G.eq = function(e) {
    return !this.cmp(e)
};
G.exponent = function() {
    return ke(this)
};
G.greaterThan = G.gt = function(e) {
    return this.cmp(e) > 0
};
G.greaterThanOrEqualTo = G.gte = function(e) {
    return this.cmp(e) >= 0
};
G.isInteger = G.isint = function() {
    return this.e > this.d.length - 2
};
G.isNegative = G.isneg = function() {
    return this.s < 0
};
G.isPositive = G.ispos = function() {
    return this.s > 0
};
G.isZero = function() {
    return this.s === 0
};
G.lessThan = G.lt = function(e) {
    return this.cmp(e) < 0
};
G.lessThanOrEqualTo = G.lte = function(e) {
    return this.cmp(e) < 1
};
G.logarithm = G.log = function(e) {
    var t, r = this,
        n = r.constructor,
        i = n.precision,
        a = i + 5;
    if (e === void 0) e = new n(10);
    else if (e = new n(e), e.s < 1 || e.eq(wt)) throw Error(zt + "NaN");
    if (r.s < 1) throw Error(zt + (r.s ? "NaN" : "-Infinity"));
    return r.eq(wt) ? new n(0) : (we = !1, t = Ar(ko(r, a), ko(e, a), a), we = !0, ce(t, i))
};
G.minus = G.sub = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? qS(t, e) : KS(t, (e.s = -e.s, e))
};
G.modulo = G.mod = function(e) {
    var t, r = this,
        n = r.constructor,
        i = n.precision;
    if (e = new n(e), !e.s) throw Error(zt + "NaN");
    return r.s ? (we = !1, t = Ar(r, e, 0, 1).times(e), we = !0, r.minus(t)) : ce(new n(r), i)
};
G.naturalExponential = G.exp = function() {
    return GS(this)
};
G.naturalLogarithm = G.ln = function() {
    return ko(this)
};
G.negated = G.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0, e
};
G.plus = G.add = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? KS(t, e) : qS(t, (e.s = -e.s, e))
};
G.precision = G.sd = function(e) {
    var t, r, n, i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Nn + e);
    if (t = ke(i) + 1, n = i.d.length - 1, r = n * ye + 1, n = i.d[n], n) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = i.d[0]; n >= 10; n /= 10) r++
    }
    return e && t > r ? t : r
};
G.squareRoot = G.sqrt = function() {
    var e, t, r, n, i, a, o, u = this,
        l = u.constructor;
    if (u.s < 1) {
        if (!u.s) return new l(0);
        throw Error(zt + "NaN")
    }
    for (e = ke(u), we = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = or(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = ya((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3;;)
        if (a = n, n = a.plus(Ar(u, a, o + 2)).times(.5), or(a.d).slice(0, o) === (t = or(n.d)).slice(0, o)) {
            if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
                if (ce(a, r + 1, 0), a.times(a).eq(u)) {
                    n = a;
                    break
                }
            } else if (t != "9999") break;
            o += 4
        }
    return we = !0, ce(n, r)
};
G.times = G.mul = function(e) {
    var t, r, n, i, a, o, u, l, s, f = this,
        c = f.constructor,
        d = f.d,
        p = (e = new c(e)).d;
    if (!f.s || !e.s) return new c(0);
    for (e.s *= f.s, r = f.e + e.e, l = d.length, s = p.length, l < s && (a = d, d = p, p = a, o = l, l = s, s = o), a = [], o = l + s, n = o; n--;) a.push(0);
    for (n = s; --n >= 0;) {
        for (t = 0, i = l + n; i > n;) u = a[i] + p[n] * d[i - n - 1] + t, a[i--] = u % Fe | 0, t = u / Fe | 0;
        a[i] = (a[i] + t) % Fe | 0
    }
    for (; !a[--o];) a.pop();
    return t ? ++r : a.shift(), e.d = a, e.e = r, we ? ce(e, c.precision) : e
};
G.toDecimalPlaces = G.todp = function(e, t) {
    var r = this,
        n = r.constructor;
    return r = new n(r), e === void 0 ? r : (fr(e, 0, va), t === void 0 ? t = n.rounding : fr(t, 0, 8), ce(r, e + ke(r) + 1, t))
};
G.toExponential = function(e, t) {
    var r, n = this,
        i = n.constructor;
    return e === void 0 ? r = Wn(n, !0) : (fr(e, 0, va), t === void 0 ? t = i.rounding : fr(t, 0, 8), n = ce(new i(n), e + 1, t), r = Wn(n, !0, e + 1)), r
};
G.toFixed = function(e, t) {
    var r, n, i = this,
        a = i.constructor;
    return e === void 0 ? Wn(i) : (fr(e, 0, va), t === void 0 ? t = a.rounding : fr(t, 0, 8), n = ce(new a(i), e + ke(i) + 1, t), r = Wn(n.abs(), !1, e + ke(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r)
};
G.toInteger = G.toint = function() {
    var e = this,
        t = e.constructor;
    return ce(new t(e), ke(e) + 1, t.rounding)
};
G.toNumber = function() {
    return +this
};
G.toPower = G.pow = function(e) {
    var t, r, n, i, a, o, u = this,
        l = u.constructor,
        s = 12,
        f = +(e = new l(e));
    if (!e.s) return new l(wt);
    if (u = new l(u), !u.s) {
        if (e.s < 1) throw Error(zt + "Infinity");
        return u
    }
    if (u.eq(wt)) return u;
    if (n = l.precision, e.eq(wt)) return ce(u, n);
    if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
        if ((r = f < 0 ? -f : f) <= VS) {
            for (i = new l(wt), t = Math.ceil(n / ye + 4), we = !1; r % 2 && (i = i.times(u), u0(i.d, t)), r = ya(r / 2), r !== 0;) u = u.times(u), u0(u.d, t);
            return we = !0, e.s < 0 ? new l(wt).div(i) : ce(i, n)
        }
    } else if (a < 0) throw Error(zt + "NaN");
    return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, we = !1, i = e.times(ko(u, n + s)), we = !0, i = GS(i), i.s = a, i
};
G.toPrecision = function(e, t) {
    var r, n, i = this,
        a = i.constructor;
    return e === void 0 ? (r = ke(i), n = Wn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (fr(e, 1, va), t === void 0 ? t = a.rounding : fr(t, 0, 8), i = ce(new a(i), e, t), r = ke(i), n = Wn(i, e <= r || r <= a.toExpNeg, e)), n
};
G.toSignificantDigits = G.tosd = function(e, t) {
    var r = this,
        n = r.constructor;
    return e === void 0 ? (e = n.precision, t = n.rounding) : (fr(e, 1, va), t === void 0 ? t = n.rounding : fr(t, 0, 8)), ce(new n(r), e, t)
};
G.toString = G.valueOf = G.val = G.toJSON = G[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var e = this,
        t = ke(e),
        r = e.constructor;
    return Wn(e, t <= r.toExpNeg || t >= r.toExpPos)
};

function KS(e, t) {
    var r, n, i, a, o, u, l, s, f = e.constructor,
        c = f.precision;
    if (!e.s || !t.s) return t.s || (t = new f(e)), we ? ce(t, c) : t;
    if (l = e.d, s = t.d, o = e.e, i = t.e, l = l.slice(), a = o - i, a) {
        for (a < 0 ? (n = l, a = -a, u = s.length) : (n = s, i = o, u = l.length), o = Math.ceil(c / ye), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--;) n.push(0);
        n.reverse()
    }
    for (u = l.length, a = s.length, u - a < 0 && (a = u, n = s, s = l, l = n), r = 0; a;) r = (l[--a] = l[a] + s[a] + r) / Fe | 0, l[a] %= Fe;
    for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0;) l.pop();
    return t.d = l, t.e = i, we ? ce(t, c) : t
}

function fr(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(Nn + e)
}

function or(e) {
    var t, r, n, i = e.length - 1,
        a = "",
        o = e[0];
    if (i > 0) {
        for (a += o, t = 1; t < i; t++) n = e[t] + "", r = ye - n.length, r && (a += Wr(r)), a += n;
        o = e[t], n = o + "", r = ye - n.length, r && (a += Wr(r))
    } else if (o === 0) return "0";
    for (; o % 10 === 0;) o /= 10;
    return a + o
}
var Ar = function() {
    function e(n, i) {
        var a, o = 0,
            u = n.length;
        for (n = n.slice(); u--;) a = n[u] * i + o, n[u] = a % Fe | 0, o = a / Fe | 0;
        return o && n.unshift(o), n
    }

    function t(n, i, a, o) {
        var u, l;
        if (a != o) l = a > o ? 1 : -1;
        else
            for (u = l = 0; u < a; u++)
                if (n[u] != i[u]) {
                    l = n[u] > i[u] ? 1 : -1;
                    break
                } return l
    }

    function r(n, i, a) {
        for (var o = 0; a--;) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Fe + n[a] - i[a];
        for (; !n[0] && n.length > 1;) n.shift()
    }
    return function(n, i, a, o) {
        var u, l, s, f, c, d, p, h, y, w, m, v, g, S, b, x, O, _, P = n.constructor,
            $ = n.s == i.s ? 1 : -1,
            E = n.d,
            T = i.d;
        if (!n.s) return new P(n);
        if (!i.s) throw Error(zt + "Division by zero");
        for (l = n.e - i.e, O = T.length, b = E.length, p = new P($), h = p.d = [], s = 0; T[s] == (E[s] || 0);) ++s;
        if (T[s] > (E[s] || 0) && --l, a == null ? v = a = P.precision : o ? v = a + (ke(n) - ke(i)) + 1 : v = a, v < 0) return new P(0);
        if (v = v / ye + 2 | 0, s = 0, O == 1)
            for (f = 0, T = T[0], v++;
                (s < b || f) && v--; s++) g = f * Fe + (E[s] || 0), h[s] = g / T | 0, f = g % T | 0;
        else {
            for (f = Fe / (T[0] + 1) | 0, f > 1 && (T = e(T, f), E = e(E, f), O = T.length, b = E.length), S = O, y = E.slice(0, O), w = y.length; w < O;) y[w++] = 0;
            _ = T.slice(), _.unshift(0), x = T[0], T[1] >= Fe / 2 && ++x;
            do f = 0, u = t(T, y, O, w), u < 0 ? (m = y[0], O != w && (m = m * Fe + (y[1] || 0)), f = m / x | 0, f > 1 ? (f >= Fe && (f = Fe - 1), c = e(T, f), d = c.length, w = y.length, u = t(c, y, d, w), u == 1 && (f--, r(c, O < d ? _ : T, d))) : (f == 0 && (u = f = 1), c = T.slice()), d = c.length, d < w && c.unshift(0), r(y, c, w), u == -1 && (w = y.length, u = t(T, y, O, w), u < 1 && (f++, r(y, O < w ? _ : T, w))), w = y.length) : u === 0 && (f++, y = [0]), h[s++] = f, u && y[0] ? y[w++] = E[S] || 0 : (y = [E[S]], w = 1); while ((S++ < b || y[0] !== void 0) && v--)
        }
        return h[0] || h.shift(), p.e = l, ce(p, o ? a + ke(p) + 1 : a)
    }
}();

function GS(e, t) {
    var r, n, i, a, o, u, l = 0,
        s = 0,
        f = e.constructor,
        c = f.precision;
    if (ke(e) > 16) throw Error(jv + ke(e));
    if (!e.s) return new f(wt);
    for (t == null ? (we = !1, u = c) : u = t, o = new f(.03125); e.abs().gte(.1);) e = e.times(o), s += 5;
    for (n = Math.log(_n(2, s)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(wt), f.precision = u;;) {
        if (i = ce(i.times(e), u), r = r.times(++l), o = a.plus(Ar(i, r, u)), or(o.d).slice(0, u) === or(a.d).slice(0, u)) {
            for (; s--;) a = ce(a.times(a), u);
            return f.precision = c, t == null ? (we = !0, ce(a, c)) : a
        }
        a = o
    }
}

function ke(e) {
    for (var t = e.e * ye, r = e.d[0]; r >= 10; r /= 10) t++;
    return t
}

function Sf(e, t, r) {
    if (t > e.LN10.sd()) throw we = !0, r && (e.precision = r), Error(zt + "LN10 precision limit exceeded");
    return ce(new e(e.LN10), t)
}

function Wr(e) {
    for (var t = ""; e--;) t += "0";
    return t
}

function ko(e, t) {
    var r, n, i, a, o, u, l, s, f, c = 1,
        d = 10,
        p = e,
        h = p.d,
        y = p.constructor,
        w = y.precision;
    if (p.s < 1) throw Error(zt + (p.s ? "NaN" : "-Infinity"));
    if (p.eq(wt)) return new y(0);
    if (t == null ? (we = !1, s = w) : s = t, p.eq(10)) return t == null && (we = !0), Sf(y, s);
    if (s += d, y.precision = s, r = or(h), n = r.charAt(0), a = ke(p), Math.abs(a) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) p = p.times(e), r = or(p.d), n = r.charAt(0), c++;
        a = ke(p), n > 1 ? (p = new y("0." + r), a++) : p = new y(n + "." + r.slice(1))
    } else return l = Sf(y, s + 2, w).times(a + ""), p = ko(new y(n + "." + r.slice(1)), s - d).plus(l), y.precision = w, t == null ? (we = !0, ce(p, w)) : p;
    for (u = o = p = Ar(p.minus(wt), p.plus(wt), s), f = ce(p.times(p), s), i = 3;;) {
        if (o = ce(o.times(f), s), l = u.plus(Ar(o, new y(i), s)), or(l.d).slice(0, s) === or(u.d).slice(0, s)) return u = u.times(2), a !== 0 && (u = u.plus(Sf(y, s + 2, w).times(a + ""))), u = Ar(u, new y(c), s), y.precision = w, t == null ? (we = !0, ce(u, w)) : u;
        u = l, i += 2
    }
}

function o0(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48;) ++n;
    for (i = t.length; t.charCodeAt(i - 1) === 48;) --i;
    if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = ya(r / ye), e.d = [], n = (r + 1) % ye, r < 0 && (n += ye), n < i) {
            for (n && e.d.push(+t.slice(0, n)), i -= ye; n < i;) e.d.push(+t.slice(n, n += ye));
            t = t.slice(n), n = ye - t.length
        } else n -= i;
        for (; n--;) t += "0";
        if (e.d.push(+t), we && (e.e > Jl || e.e < -Jl)) throw Error(jv + r)
    } else e.s = 0, e.e = 0, e.d = [0];
    return e
}

function ce(e, t, r) {
    var n, i, a, o, u, l, s, f, c = e.d;
    for (o = 1, a = c[0]; a >= 10; a /= 10) o++;
    if (n = t - o, n < 0) n += ye, i = t, s = c[f = 0];
    else {
        if (f = Math.ceil((n + 1) / ye), a = c.length, f >= a) return e;
        for (s = a = c[f], o = 1; a >= 10; a /= 10) o++;
        n %= ye, i = n - ye + o
    }
    if (r !== void 0 && (a = _n(10, o - i - 1), u = s / a % 10 | 0, l = t < 0 || c[f + 1] !== void 0 || s % a, l = r < 4 ? (u || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? s / _n(10, o - i) : 0 : c[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !c[0]) return l ? (a = ke(e), c.length = 1, t = t - a - 1, c[0] = _n(10, (ye - t % ye) % ye), e.e = ya(-t / ye) || 0) : (c.length = 1, c[0] = e.e = e.s = 0), e;
    if (n == 0 ? (c.length = f, a = 1, f--) : (c.length = f + 1, a = _n(10, ye - n), c[f] = i > 0 ? (s / _n(10, o - i) % _n(10, i) | 0) * a : 0), l)
        for (;;)
            if (f == 0) {
                (c[0] += a) == Fe && (c[0] = 1, ++e.e);
                break
            } else {
                if (c[f] += a, c[f] != Fe) break;
                c[f--] = 0, a = 1
            }
    for (n = c.length; c[--n] === 0;) c.pop();
    if (we && (e.e > Jl || e.e < -Jl)) throw Error(jv + ke(e));
    return e
}

function qS(e, t) {
    var r, n, i, a, o, u, l, s, f, c, d = e.constructor,
        p = d.precision;
    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new d(e), we ? ce(t, p) : t;
    if (l = e.d, c = t.d, n = t.e, s = e.e, l = l.slice(), o = s - n, o) {
        for (f = o < 0, f ? (r = l, o = -o, u = c.length) : (r = c, n = s, u = l.length), i = Math.max(Math.ceil(p / ye), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--;) r.push(0);
        r.reverse()
    } else {
        for (i = l.length, u = c.length, f = i < u, f && (u = i), i = 0; i < u; i++)
            if (l[i] != c[i]) {
                f = l[i] < c[i];
                break
            }
        o = 0
    }
    for (f && (r = l, l = c, c = r, t.s = -t.s), u = l.length, i = c.length - u; i > 0; --i) l[u++] = 0;
    for (i = c.length; i > o;) {
        if (l[--i] < c[i]) {
            for (a = i; a && l[--a] === 0;) l[a] = Fe - 1;
            --l[a], l[i] += Fe
        }
        l[i] -= c[i]
    }
    for (; l[--u] === 0;) l.pop();
    for (; l[0] === 0; l.shift()) --n;
    return l[0] ? (t.d = l, t.e = n, we ? ce(t, p) : t) : new d(0)
}

function Wn(e, t, r) {
    var n, i = ke(e),
        a = or(e.d),
        o = a.length;
    return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Wr(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Wr(-i - 1) + a, r && (n = r - o) > 0 && (a += Wr(n))) : i >= o ? (a += Wr(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Wr(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Wr(n))), e.s < 0 ? "-" + a : a
}

function u0(e, t) {
    if (e.length > t) return e.length = t, !0
}

function XS(e) {
    var t, r, n;

    function i(a) {
        var o = this;
        if (!(o instanceof i)) return new i(a);
        if (o.constructor = i, a instanceof i) {
            o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
            return
        }
        if (typeof a == "number") {
            if (a * 0 !== 0) throw Error(Nn + a);
            if (a > 0) o.s = 1;
            else if (a < 0) a = -a, o.s = -1;
            else {
                o.s = 0, o.e = 0, o.d = [0];
                return
            }
            if (a === ~~a && a < 1e7) {
                o.e = 0, o.d = [a];
                return
            }
            return o0(o, a.toString())
        } else if (typeof a != "string") throw Error(Nn + a);
        if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, g8.test(a)) o0(o, a);
        else throw Error(Nn + a)
    }
    if (i.prototype = G, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = XS, i.config = i.set = b8, e === void 0 && (e = {}), e)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length;) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i
}

function b8(e) {
    if (!e || typeof e != "object") throw Error(zt + "Object expected");
    var t, r, n, i = ["precision", 1, va, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < i.length; t += 3)
        if ((n = e[r = i[t]]) !== void 0)
            if (ya(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(Nn + r + ": " + n);
    if ((n = e[r = "LN10"]) !== void 0)
        if (n == Math.LN10) this[r] = new this(n);
        else throw Error(Nn + r + ": " + n);
    return this
}
var kv = XS(m8);
wt = new kv(1);
const se = kv;

function w8(e) {
    return _8(e) || O8(e) || S8(e) || x8()
}

function x8() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function S8(e, t) {
    if (e) {
        if (typeof e == "string") return np(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return np(e, t)
    }
}

function O8(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function _8(e) {
    if (Array.isArray(e)) return np(e)
}

function np(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var P8 = function(t) {
        return t
    },
    YS = {
        "@@functional/placeholder": !0
    },
    QS = function(t) {
        return t === YS
    },
    l0 = function(t) {
        return function r() {
            return arguments.length === 0 || arguments.length === 1 && QS(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments)
        }
    },
    A8 = function e(t, r) {
        return t === 1 ? r : l0(function() {
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            var o = i.filter(function(u) {
                return u !== YS
            }).length;
            return o >= t ? r.apply(void 0, i) : e(t - o, l0(function() {
                for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++) l[s] = arguments[s];
                var f = i.map(function(c) {
                    return QS(c) ? l.shift() : c
                });
                return r.apply(void 0, w8(f).concat(l))
            }))
        })
    },
    mc = function(t) {
        return A8(t.length, t)
    },
    ip = function(t, r) {
        for (var n = [], i = t; i < r; ++i) n[i - t] = i;
        return n
    },
    E8 = mc(function(e, t) {
        return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
            return t[r]
        }).map(e)
    }),
    $8 = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        if (!r.length) return P8;
        var i = r.reverse(),
            a = i[0],
            o = i.slice(1);
        return function() {
            return o.reduce(function(u, l) {
                return l(u)
            }, a.apply(void 0, arguments))
        }
    },
    ap = function(t) {
        return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
    },
    ZS = function(t) {
        var r = null,
            n = null;
        return function() {
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return r && a.every(function(u, l) {
                return u === r[l]
            }) || (r = a, n = t.apply(void 0, a)), n
        }
    };

function T8(e) {
    var t;
    return e === 0 ? t = 1 : t = Math.floor(new se(e).abs().log(10).toNumber()) + 1, t
}

function C8(e, t, r) {
    for (var n = new se(e), i = 0, a = []; n.lt(t) && i < 1e5;) a.push(n.toNumber()), n = n.add(r), i++;
    return a
}
var j8 = mc(function(e, t, r) {
        var n = +e,
            i = +t;
        return n + r * (i - n)
    }),
    k8 = mc(function(e, t, r) {
        var n = t - +e;
        return n = n || 1 / 0, (r - e) / n
    }),
    M8 = mc(function(e, t, r) {
        var n = t - +e;
        return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n))
    });
const gc = {
    rangeStep: C8,
    getDigitCount: T8,
    interpolateNumber: j8,
    uninterpolateNumber: k8,
    uninterpolateTruncation: M8
};

function op(e) {
    return D8(e) || N8(e) || JS(e) || I8()
}

function I8() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function N8(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function D8(e) {
    if (Array.isArray(e)) return up(e)
}

function Mo(e, t) {
    return B8(e) || R8(e, t) || JS(e, t) || L8()
}

function L8() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function JS(e, t) {
    if (e) {
        if (typeof e == "string") return up(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return up(e, t)
    }
}

function up(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function R8(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0);
        } catch (l) {
            i = !0, a = l
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function B8(e) {
    if (Array.isArray(e)) return e
}

function eO(e) {
    var t = Mo(e, 2),
        r = t[0],
        n = t[1],
        i = r,
        a = n;
    return r > n && (i = n, a = r), [i, a]
}

function tO(e, t, r) {
    if (e.lte(0)) return new se(0);
    var n = gc.getDigitCount(e.toNumber()),
        i = new se(10).pow(n),
        a = e.div(i),
        o = n !== 1 ? .05 : .1,
        u = new se(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
        l = u.mul(i);
    return t ? l : new se(Math.ceil(l))
}

function z8(e, t, r) {
    var n = 1,
        i = new se(e);
    if (!i.isint() && r) {
        var a = Math.abs(e);
        a < 1 ? (n = new se(10).pow(gc.getDigitCount(e) - 1), i = new se(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new se(Math.floor(e)))
    } else e === 0 ? i = new se(Math.floor((t - 1) / 2)) : r || (i = new se(Math.floor(e)));
    var o = Math.floor((t - 1) / 2),
        u = $8(E8(function(l) {
            return i.add(new se(l - o).mul(n)).toNumber()
        }), ip);
    return u(0, t)
}

function rO(e, t, r, n) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (r - 1))) return {
        step: new se(0),
        tickMin: new se(0),
        tickMax: new se(0)
    };
    var a = tO(new se(t).sub(e).div(r - 1), n, i),
        o;
    e <= 0 && t >= 0 ? o = new se(0) : (o = new se(e).add(t).div(2), o = o.sub(new se(o).mod(a)));
    var u = Math.ceil(o.sub(e).div(a).toNumber()),
        l = Math.ceil(new se(t).sub(o).div(a).toNumber()),
        s = u + l + 1;
    return s > r ? rO(e, t, r, n, i + 1) : (s < r && (l = t > 0 ? l + (r - s) : l, u = t > 0 ? u : u + (r - s)), {
        step: a,
        tickMin: o.sub(new se(u).mul(a)),
        tickMax: o.add(new se(l).mul(a))
    })
}

function F8(e) {
    var t = Mo(e, 2),
        r = t[0],
        n = t[1],
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = Math.max(i, 2),
        u = eO([r, n]),
        l = Mo(u, 2),
        s = l[0],
        f = l[1];
    if (s === -1 / 0 || f === 1 / 0) {
        var c = f === 1 / 0 ? [s].concat(op(ip(0, i - 1).map(function() {
            return 1 / 0
        }))) : [].concat(op(ip(0, i - 1).map(function() {
            return -1 / 0
        })), [f]);
        return r > n ? ap(c) : c
    }
    if (s === f) return z8(s, i, a);
    var d = rO(s, f, o, a),
        p = d.step,
        h = d.tickMin,
        y = d.tickMax,
        w = gc.rangeStep(h, y.add(new se(.1).mul(p)), p);
    return r > n ? ap(w) : w
}

function U8(e, t) {
    var r = Mo(e, 2),
        n = r[0],
        i = r[1],
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = eO([n, i]),
        u = Mo(o, 2),
        l = u[0],
        s = u[1];
    if (l === -1 / 0 || s === 1 / 0) return [n, i];
    if (l === s) return [l];
    var f = Math.max(t, 2),
        c = tO(new se(s).sub(l).div(f - 1), a, 0),
        d = [].concat(op(gc.rangeStep(new se(l), new se(s).sub(new se(.99).mul(c)), c)), [s]);
    return n > i ? ap(d) : d
}
var W8 = ZS(F8),
    H8 = ZS(U8),
    V8 = "Invariant failed";

function Hn(e, t) {
    throw new Error(V8)
}
var K8 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

function Hi(e) {
    "@babel/helpers - typeof";
    return Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Hi(e)
}

function es() {
    return es = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, es.apply(this, arguments)
}

function G8(e, t) {
    return Q8(e) || Y8(e, t) || X8(e, t) || q8()
}

function q8() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function X8(e, t) {
    if (e) {
        if (typeof e == "string") return s0(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s0(e, t)
    }
}

function s0(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function Y8(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function Q8(e) {
    if (Array.isArray(e)) return e
}

function Z8(e, t) {
    if (e == null) return {};
    var r = J8(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function J8(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function eF(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function tF(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, aO(n.key), n)
    }
}

function rF(e, t, r) {
    return t && tF(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function nF(e, t, r) {
    return t = ts(t), iF(e, nO() ? Reflect.construct(t, r || [], ts(e).constructor) : t.apply(e, r))
}

function iF(e, t) {
    if (t && (Hi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return aF(e)
}

function aF(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function nO() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (nO = function() {
        return !!e
    })()
}

function ts(e) {
    return ts = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ts(e)
}

function oF(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && lp(e, t)
}

function lp(e, t) {
    return lp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, lp(e, t)
}

function iO(e, t, r) {
    return t = aO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function aO(e) {
    var t = uF(e, "string");
    return Hi(t) == "symbol" ? t : t + ""
}

function uF(e, t) {
    if (Hi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Hi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var pu = function(e) {
    function t() {
        return eF(this, t), nF(this, t, arguments)
    }
    return oF(t, e), rF(t, [{
        key: "render",
        value: function() {
            var n = this.props,
                i = n.offset,
                a = n.layout,
                o = n.width,
                u = n.dataKey,
                l = n.data,
                s = n.dataPointFormatter,
                f = n.xAxis,
                c = n.yAxis,
                d = Z8(n, K8),
                p = ee(d, !1);
            this.props.direction === "x" && f.type !== "number" && Hn();
            var h = l.map(function(y) {
                var w = s(y, u),
                    m = w.x,
                    v = w.y,
                    g = w.value,
                    S = w.errorVal;
                if (!S) return null;
                var b = [],
                    x, O;
                if (Array.isArray(S)) {
                    var _ = G8(S, 2);
                    x = _[0], O = _[1]
                } else x = O = S;
                if (a === "vertical") {
                    var P = f.scale,
                        $ = v + i,
                        E = $ + o,
                        T = $ - o,
                        I = P(g - x),
                        N = P(g + O);
                    b.push({
                        x1: N,
                        y1: E,
                        x2: N,
                        y2: T
                    }), b.push({
                        x1: I,
                        y1: $,
                        x2: N,
                        y2: $
                    }), b.push({
                        x1: I,
                        y1: E,
                        x2: I,
                        y2: T
                    })
                } else if (a === "horizontal") {
                    var k = c.scale,
                        D = m + i,
                        L = D - o,
                        C = D + o,
                        M = k(g - x),
                        B = k(g + O);
                    b.push({
                        x1: L,
                        y1: B,
                        x2: C,
                        y2: B
                    }), b.push({
                        x1: D,
                        y1: M,
                        x2: D,
                        y2: B
                    }), b.push({
                        x1: L,
                        y1: M,
                        x2: C,
                        y2: M
                    })
                }
                return A.createElement(Te, es({
                    className: "recharts-errorBar",
                    key: "bar-".concat(b.map(function(H) {
                        return "".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2)
                    }))
                }, p), b.map(function(H) {
                    return A.createElement("line", es({}, H, {
                        key: "line-".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2)
                    }))
                }))
            });
            return A.createElement(Te, {
                className: "recharts-errorBars"
            }, h)
        }
    }])
}(A.Component);
iO(pu, "defaultProps", {
    stroke: "black",
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: "horizontal"
});
iO(pu, "displayName", "ErrorBar");

function Io(e) {
    "@babel/helpers - typeof";
    return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Io(e)
}

function c0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function bn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? c0(Object(r), !0).forEach(function(n) {
            lF(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function lF(e, t, r) {
    return t = sF(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function sF(e) {
    var t = cF(e, "string");
    return Io(t) == "symbol" ? t : t + ""
}

function cF(e, t) {
    if (Io(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Io(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var oO = function(t) {
    var r = t.children,
        n = t.formattedGraphicalItems,
        i = t.legendWidth,
        a = t.legendContent,
        o = bt(r, Ai);
    if (!o) return null;
    var u = Ai.defaultProps,
        l = u !== void 0 ? bn(bn({}, u), o.props) : {},
        s;
    return o.props && o.props.payload ? s = o.props && o.props.payload : a === "children" ? s = (n || []).reduce(function(f, c) {
        var d = c.item,
            p = c.props,
            h = p.sectors || p.data || [];
        return f.concat(h.map(function(y) {
            return {
                type: o.props.iconType || d.props.legendType,
                value: y.name,
                color: y.fill,
                payload: y
            }
        }))
    }, []) : s = (n || []).map(function(f) {
        var c = f.item,
            d = c.type.defaultProps,
            p = d !== void 0 ? bn(bn({}, d), c.props) : {},
            h = p.dataKey,
            y = p.name,
            w = p.legendType,
            m = p.hide;
        return {
            inactive: m,
            dataKey: h,
            type: l.iconType || w || "square",
            color: Mv(c),
            value: y || h,
            payload: p
        }
    }), bn(bn(bn({}, l), Ai.getWithHeight(o, i)), {}, {
        payload: s,
        item: o
    })
};

function No(e) {
    "@babel/helpers - typeof";
    return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, No(e)
}

function f0(e) {
    return hF(e) || pF(e) || dF(e) || fF()
}

function fF() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function dF(e, t) {
    if (e) {
        if (typeof e == "string") return sp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sp(e, t)
    }
}

function pF(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function hF(e) {
    if (Array.isArray(e)) return sp(e)
}

function sp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function d0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ae(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? d0(Object(r), !0).forEach(function(n) {
            $i(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function $i(e, t, r) {
    return t = vF(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function vF(e) {
    var t = yF(e, "string");
    return No(t) == "symbol" ? t : t + ""
}

function yF(e, t) {
    if (No(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (No(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function _t(e, t, r) {
    return J(e) || J(t) ? r : Be(t) ? Dt(e, t, r) : Z(t) ? t(e) : r
}

function Ja(e, t, r, n) {
    var i = p8(e, function(u) {
        return _t(u, t)
    });
    if (r === "number") {
        var a = i.filter(function(u) {
            return W(u) || parseFloat(u)
        });
        return a.length ? [vc(a), hc(a)] : [1 / 0, -1 / 0]
    }
    var o = n ? i.filter(function(u) {
        return !J(u)
    }) : i;
    return o.map(function(u) {
        return Be(u) || u instanceof Date ? u : ""
    })
}
var mF = function(t) {
        var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
        if (u <= 1) return 0;
        if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
            for (var l = a.range, s = 0; s < u; s++) {
                var f = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate,
                    c = i[s].coordinate,
                    d = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate,
                    p = void 0;
                if (Zt(c - f) !== Zt(d - c)) {
                    var h = [];
                    if (Zt(d - c) === Zt(l[1] - l[0])) {
                        p = d;
                        var y = c + l[1] - l[0];
                        h[0] = Math.min(y, (y + f) / 2), h[1] = Math.max(y, (y + f) / 2)
                    } else {
                        p = f;
                        var w = d + l[1] - l[0];
                        h[0] = Math.min(c, (w + c) / 2), h[1] = Math.max(c, (w + c) / 2)
                    }
                    var m = [Math.min(c, (p + c) / 2), Math.max(c, (p + c) / 2)];
                    if (t > m[0] && t <= m[1] || t >= h[0] && t <= h[1]) {
                        o = i[s].index;
                        break
                    }
                } else {
                    var v = Math.min(f, d),
                        g = Math.max(f, d);
                    if (t > (v + c) / 2 && t <= (g + c) / 2) {
                        o = i[s].index;
                        break
                    }
                }
            } else
                for (var S = 0; S < u; S++)
                    if (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S > 0 && S < u - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S === u - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2) {
                        o = n[S].index;
                        break
                    }
        return o
    },
    Mv = function(t) {
        var r, n = t,
            i = n.type.displayName,
            a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Ae(Ae({}, t.type.defaultProps), t.props) : t.props,
            o = a.stroke,
            u = a.fill,
            l;
        switch (i) {
            case "Line":
                l = o;
                break;
            case "Area":
            case "Radar":
                l = o && o !== "none" ? o : u;
                break;
            default:
                l = u;
                break
        }
        return l
    },
    gF = function(t) {
        var r = t.barSize,
            n = t.totalSize,
            i = t.stackGroups,
            a = i === void 0 ? {} : i;
        if (!a) return {};
        for (var o = {}, u = Object.keys(a), l = 0, s = u.length; l < s; l++)
            for (var f = a[u[l]].stackGroups, c = Object.keys(f), d = 0, p = c.length; d < p; d++) {
                var h = f[c[d]],
                    y = h.items,
                    w = h.cateAxisId,
                    m = y.filter(function(O) {
                        return Or(O.type).indexOf("Bar") >= 0
                    });
                if (m && m.length) {
                    var v = m[0].type.defaultProps,
                        g = v !== void 0 ? Ae(Ae({}, v), m[0].props) : m[0].props,
                        S = g.barSize,
                        b = g[w];
                    o[b] || (o[b] = []);
                    var x = J(S) ? r : S;
                    o[b].push({
                        item: m[0],
                        stackList: m.slice(1),
                        barSize: J(x) ? void 0 : Un(x, n, 0)
                    })
                }
            }
        return o
    },
    bF = function(t) {
        var r = t.barGap,
            n = t.barCategoryGap,
            i = t.bandSize,
            a = t.sizeList,
            o = a === void 0 ? [] : a,
            u = t.maxBarSize,
            l = o.length;
        if (l < 1) return null;
        var s = Un(r, i, 0, !0),
            f, c = [];
        if (o[0].barSize === +o[0].barSize) {
            var d = !1,
                p = i / l,
                h = o.reduce(function(S, b) {
                    return S + b.barSize || 0
                }, 0);
            h += (l - 1) * s, h >= i && (h -= (l - 1) * s, s = 0), h >= i && p > 0 && (d = !0, p *= .9, h = l * p);
            var y = (i - h) / 2 >> 0,
                w = {
                    offset: y - s,
                    size: 0
                };
            f = o.reduce(function(S, b) {
                var x = {
                        item: b.item,
                        position: {
                            offset: w.offset + w.size + s,
                            size: d ? p : b.barSize
                        }
                    },
                    O = [].concat(f0(S), [x]);
                return w = O[O.length - 1].position, b.stackList && b.stackList.length && b.stackList.forEach(function(_) {
                    O.push({
                        item: _,
                        position: w
                    })
                }), O
            }, c)
        } else {
            var m = Un(n, i, 0, !0);
            i - 2 * m - (l - 1) * s <= 0 && (s = 0);
            var v = (i - 2 * m - (l - 1) * s) / l;
            v > 1 && (v >>= 0);
            var g = u === +u ? Math.min(v, u) : v;
            f = o.reduce(function(S, b, x) {
                var O = [].concat(f0(S), [{
                    item: b.item,
                    position: {
                        offset: m + (v + s) * x + (v - g) / 2,
                        size: g
                    }
                }]);
                return b.stackList && b.stackList.length && b.stackList.forEach(function(_) {
                    O.push({
                        item: _,
                        position: O[O.length - 1].position
                    })
                }), O
            }, c)
        }
        return f
    },
    wF = function(t, r, n, i) {
        var a = n.children,
            o = n.width,
            u = n.margin,
            l = o - (u.left || 0) - (u.right || 0),
            s = oO({
                children: a,
                legendWidth: l
            });
        if (s) {
            var f = i || {},
                c = f.width,
                d = f.height,
                p = s.align,
                h = s.verticalAlign,
                y = s.layout;
            if ((y === "vertical" || y === "horizontal" && h === "middle") && p !== "center" && W(t[p])) return Ae(Ae({}, t), {}, $i({}, p, t[p] + (c || 0)));
            if ((y === "horizontal" || y === "vertical" && p === "center") && h !== "middle" && W(t[h])) return Ae(Ae({}, t), {}, $i({}, h, t[h] + (d || 0)))
        }
        return t
    },
    xF = function(t, r, n) {
        return J(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0
    },
    uO = function(t, r, n, i, a) {
        var o = r.props.children,
            u = Lt(o, pu).filter(function(s) {
                return xF(i, a, s.props.direction)
            });
        if (u && u.length) {
            var l = u.map(function(s) {
                return s.props.dataKey
            });
            return t.reduce(function(s, f) {
                var c = _t(f, n);
                if (J(c)) return s;
                var d = Array.isArray(c) ? [vc(c), hc(c)] : [c, c],
                    p = l.reduce(function(h, y) {
                        var w = _t(f, y, 0),
                            m = d[0] - Math.abs(Array.isArray(w) ? w[0] : w),
                            v = d[1] + Math.abs(Array.isArray(w) ? w[1] : w);
                        return [Math.min(m, h[0]), Math.max(v, h[1])]
                    }, [1 / 0, -1 / 0]);
                return [Math.min(p[0], s[0]), Math.max(p[1], s[1])]
            }, [1 / 0, -1 / 0])
        }
        return null
    },
    SF = function(t, r, n, i, a) {
        var o = r.map(function(u) {
            return uO(t, u, n, a, i)
        }).filter(function(u) {
            return !J(u)
        });
        return o && o.length ? o.reduce(function(u, l) {
            return [Math.min(u[0], l[0]), Math.max(u[1], l[1])]
        }, [1 / 0, -1 / 0]) : null
    },
    lO = function(t, r, n, i, a) {
        var o = r.map(function(l) {
            var s = l.props.dataKey;
            return n === "number" && s && uO(t, l, s, i) || Ja(t, s, n, a)
        });
        if (n === "number") return o.reduce(function(l, s) {
            return [Math.min(l[0], s[0]), Math.max(l[1], s[1])]
        }, [1 / 0, -1 / 0]);
        var u = {};
        return o.reduce(function(l, s) {
            for (var f = 0, c = s.length; f < c; f++) u[s[f]] || (u[s[f]] = !0, l.push(s[f]));
            return l
        }, [])
    },
    sO = function(t, r) {
        return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis"
    },
    cO = function(t, r, n, i) {
        if (i) return t.map(function(l) {
            return l.coordinate
        });
        var a, o, u = t.map(function(l) {
            return l.coordinate === r && (a = !0), l.coordinate === n && (o = !0), l.coordinate
        });
        return a || u.push(r), o || u.push(n), u
    },
    xr = function(t, r, n) {
        if (!t) return null;
        var i = t.scale,
            a = t.duplicateDomain,
            o = t.type,
            u = t.range,
            l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
            s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / l : 0;
        if (s = t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2 ? Zt(u[0] - u[1]) * 2 * s : s, r && (t.ticks || t.niceTicks)) {
            var f = (t.ticks || t.niceTicks).map(function(c) {
                var d = a ? a.indexOf(c) : c;
                return {
                    coordinate: i(d) + s,
                    value: c,
                    offset: s
                }
            });
            return f.filter(function(c) {
                return !ou(c.coordinate)
            })
        }
        return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(c, d) {
            return {
                coordinate: i(c) + s,
                value: c,
                index: d,
                offset: s
            }
        }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(c) {
            return {
                coordinate: i(c) + s,
                value: c,
                offset: s
            }
        }) : i.domain().map(function(c, d) {
            return {
                coordinate: i(c) + s,
                value: a ? a[c] : c,
                index: d,
                offset: s
            }
        })
    },
    Of = new WeakMap,
    zu = function(t, r) {
        if (typeof r != "function") return t;
        Of.has(t) || Of.set(t, new WeakMap);
        var n = Of.get(t);
        if (n.has(r)) return n.get(r);
        var i = function() {
            t.apply(void 0, arguments), r.apply(void 0, arguments)
        };
        return n.set(r, i), i
    },
    OF = function(t, r, n) {
        var i = t.scale,
            a = t.type,
            o = t.layout,
            u = t.axisType;
        if (i === "auto") return o === "radial" && u === "radiusAxis" ? {
            scale: Eo(),
            realScaleType: "band"
        } : o === "radial" && u === "angleAxis" ? {
            scale: Xl(),
            realScaleType: "linear"
        } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
            scale: Za(),
            realScaleType: "point"
        } : a === "category" ? {
            scale: Eo(),
            realScaleType: "band"
        } : {
            scale: Xl(),
            realScaleType: "linear"
        };
        if (Fn(i)) {
            var l = "scale".concat(tc(i));
            return {
                scale: (a0[l] || Za)(),
                realScaleType: a0[l] ? l : "point"
            }
        }
        return Z(i) ? {
            scale: i
        } : {
            scale: Za(),
            realScaleType: "point"
        }
    },
    p0 = 1e-4,
    _F = function(t) {
        var r = t.domain();
        if (!(!r || r.length <= 2)) {
            var n = r.length,
                i = t.range(),
                a = Math.min(i[0], i[1]) - p0,
                o = Math.max(i[0], i[1]) + p0,
                u = t(r[0]),
                l = t(r[n - 1]);
            (u < a || u > o || l < a || l > o) && t.domain([r[0], r[n - 1]])
        }
    },
    PF = function(t, r) {
        if (!t) return null;
        for (var n = 0, i = t.length; n < i; n++)
            if (t[n].item === r) return t[n].position;
        return null
    },
    AF = function(t, r) {
        if (!r || r.length !== 2 || !W(r[0]) || !W(r[1])) return t;
        var n = Math.min(r[0], r[1]),
            i = Math.max(r[0], r[1]),
            a = [t[0], t[1]];
        return (!W(t[0]) || t[0] < n) && (a[0] = n), (!W(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a
    },
    EF = function(t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0, u = 0; u < r; ++u) {
                    var l = ou(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
                    l >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + l, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + l, o = t[u][n][1])
                }
    },
    $F = function(t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0; o < r; ++o) {
                    var u = ou(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                    u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0)
                }
    },
    TF = {
        sign: EF,
        expand: H2,
        none: Di,
        silhouette: V2,
        wiggle: K2,
        positive: $F
    },
    CF = function(t, r, n) {
        var i = r.map(function(u) {
                return u.props.dataKey
            }),
            a = TF[n],
            o = W2().keys(i).value(function(u, l) {
                return +_t(u, l, 0)
            }).order(Id).offset(a);
        return o(t)
    },
    jF = function(t, r, n, i, a, o) {
        if (!t) return null;
        var u = o ? r.reverse() : r,
            l = {},
            s = u.reduce(function(c, d) {
                var p, h = (p = d.type) !== null && p !== void 0 && p.defaultProps ? Ae(Ae({}, d.type.defaultProps), d.props) : d.props,
                    y = h.stackId,
                    w = h.hide;
                if (w) return c;
                var m = h[n],
                    v = c[m] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if (Be(y)) {
                    var g = v.stackGroups[y] || {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: []
                    };
                    g.items.push(d), v.hasStack = !0, v.stackGroups[y] = g
                } else v.stackGroups[uu("_stackId_")] = {
                    numericAxisId: n,
                    cateAxisId: i,
                    items: [d]
                };
                return Ae(Ae({}, c), {}, $i({}, m, v))
            }, l),
            f = {};
        return Object.keys(s).reduce(function(c, d) {
            var p = s[d];
            if (p.hasStack) {
                var h = {};
                p.stackGroups = Object.keys(p.stackGroups).reduce(function(y, w) {
                    var m = p.stackGroups[w];
                    return Ae(Ae({}, y), {}, $i({}, w, {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: m.items,
                        stackedData: CF(t, m.items, a)
                    }))
                }, h)
            }
            return Ae(Ae({}, c), {}, $i({}, d, p))
        }, f)
    },
    kF = function(t, r) {
        var n = r.realScaleType,
            i = r.type,
            a = r.tickCount,
            o = r.originalDomain,
            u = r.allowDecimals,
            l = n || r.scale;
        if (l !== "auto" && l !== "linear") return null;
        if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
            var s = t.domain();
            if (!s.length) return null;
            var f = W8(s, a, u);
            return t.domain([vc(f), hc(f)]), {
                niceTicks: f
            }
        }
        if (a && i === "number") {
            var c = t.domain(),
                d = H8(c, a, u);
            return {
                niceTicks: d
            }
        }
        return null
    };

function h0(e) {
    var t = e.axis,
        r = e.ticks,
        n = e.bandSize,
        i = e.entry,
        a = e.index,
        o = e.dataKey;
    if (t.type === "category") {
        if (!t.allowDuplicatedCategory && t.dataKey && !J(i[t.dataKey])) {
            var u = Al(r, "value", i[t.dataKey]);
            if (u) return u.coordinate + n / 2
        }
        return r[a] ? r[a].coordinate + n / 2 : null
    }
    var l = _t(i, J(o) ? t.dataKey : o);
    return J(l) ? null : t.scale(l)
}
var v0 = function(t) {
        var r = t.axis,
            n = t.ticks,
            i = t.offset,
            a = t.bandSize,
            o = t.entry,
            u = t.index;
        if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
        var l = _t(o, r.dataKey, r.domain[u]);
        return J(l) ? null : r.scale(l) - a / 2 + i
    },
    MF = function(t) {
        var r = t.numericAxis,
            n = r.scale.domain();
        if (r.type === "number") {
            var i = Math.min(n[0], n[1]),
                a = Math.max(n[0], n[1]);
            return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i
        }
        return n[0]
    },
    IF = function(t, r) {
        var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ae(Ae({}, t.type.defaultProps), t.props) : t.props,
            a = i.stackId;
        if (Be(a)) {
            var o = r[a];
            if (o) {
                var u = o.items.indexOf(t);
                return u >= 0 ? o.stackedData[u] : null
            }
        }
        return null
    },
    NF = function(t) {
        return t.reduce(function(r, n) {
            return [vc(n.concat([r[0]]).filter(W)), hc(n.concat([r[1]]).filter(W))]
        }, [1 / 0, -1 / 0])
    },
    fO = function(t, r, n) {
        return Object.keys(t).reduce(function(i, a) {
            var o = t[a],
                u = o.stackedData,
                l = u.reduce(function(s, f) {
                    var c = NF(f.slice(r, n + 1));
                    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])]
                }, [1 / 0, -1 / 0]);
            return [Math.min(l[0], i[0]), Math.max(l[1], i[1])]
        }, [1 / 0, -1 / 0]).map(function(i) {
            return i === 1 / 0 || i === -1 / 0 ? 0 : i
        })
    },
    y0 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    m0 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    cp = function(t, r, n) {
        if (Z(t)) return t(r, n);
        if (!Array.isArray(t)) return r;
        var i = [];
        if (W(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
        else if (y0.test(t[0])) {
            var a = +y0.exec(t[0])[1];
            i[0] = r[0] - a
        } else Z(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
        if (W(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
        else if (m0.test(t[1])) {
            var o = +m0.exec(t[1])[1];
            i[1] = r[1] + o
        } else Z(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
        return i
    },
    rs = function(t, r, n) {
        if (t && t.scale && t.scale.bandwidth) {
            var i = t.scale.bandwidth();
            if (!n || i > 0) return i
        }
        if (t && r && r.length >= 2) {
            for (var a = uv(r, function(c) {
                    return c.coordinate
                }), o = 1 / 0, u = 1, l = a.length; u < l; u++) {
                var s = a[u],
                    f = a[u - 1];
                o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o)
            }
            return o === 1 / 0 ? 0 : o
        }
        return n ? void 0 : 0
    },
    g0 = function(t, r, n) {
        return !t || !t.length || yc(t, Dt(n, "type.defaultProps.domain")) ? r : t
    },
    dO = function(t, r) {
        var n = t.type.defaultProps ? Ae(Ae({}, t.type.defaultProps), t.props) : t.props,
            i = n.dataKey,
            a = n.name,
            o = n.unit,
            u = n.formatter,
            l = n.tooltipType,
            s = n.chartType,
            f = n.hide;
        return Ae(Ae({}, ee(t, !1)), {}, {
            dataKey: i,
            unit: o,
            formatter: u,
            name: a || i,
            color: Mv(t),
            value: _t(r, i),
            type: l,
            payload: r,
            chartType: s,
            hide: f
        })
    };

function Do(e) {
    "@babel/helpers - typeof";
    return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Do(e)
}

function b0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function w0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? b0(Object(r), !0).forEach(function(n) {
            DF(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function DF(e, t, r) {
    return t = LF(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function LF(e) {
    var t = RF(e, "string");
    return Do(t) == "symbol" ? t : t + ""
}

function RF(e, t) {
    if (Do(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Do(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var ns = Math.PI / 180,
    BF = function(t) {
        return t * 180 / Math.PI
    },
    Ge = function(t, r, n, i) {
        return {
            x: t + Math.cos(-ns * i) * n,
            y: r + Math.sin(-ns * i) * n
        }
    },
    zF = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2))
    },
    FF = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.cx,
            o = r.cy,
            u = zF({
                x: n,
                y: i
            }, {
                x: a,
                y: o
            });
        if (u <= 0) return {
            radius: u
        };
        var l = (n - a) / u,
            s = Math.acos(l);
        return i > o && (s = 2 * Math.PI - s), {
            radius: u,
            angle: BF(s),
            angleInRadian: s
        }
    },
    UF = function(t) {
        var r = t.startAngle,
            n = t.endAngle,
            i = Math.floor(r / 360),
            a = Math.floor(n / 360),
            o = Math.min(i, a);
        return {
            startAngle: r - o * 360,
            endAngle: n - o * 360
        }
    },
    WF = function(t, r) {
        var n = r.startAngle,
            i = r.endAngle,
            a = Math.floor(n / 360),
            o = Math.floor(i / 360),
            u = Math.min(a, o);
        return t + u * 360
    },
    x0 = function(t, r) {
        var n = t.x,
            i = t.y,
            a = FF({
                x: n,
                y: i
            }, r),
            o = a.radius,
            u = a.angle,
            l = r.innerRadius,
            s = r.outerRadius;
        if (o < l || o > s) return !1;
        if (o === 0) return !0;
        var f = UF(r),
            c = f.startAngle,
            d = f.endAngle,
            p = u,
            h;
        if (c <= d) {
            for (; p > d;) p -= 360;
            for (; p < c;) p += 360;
            h = p >= c && p <= d
        } else {
            for (; p > c;) p -= 360;
            for (; p < d;) p += 360;
            h = p >= d && p <= c
        }
        return h ? w0(w0({}, r), {}, {
            radius: o,
            angle: WF(p, r)
        }) : null
    };

function Lo(e) {
    "@babel/helpers - typeof";
    return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Lo(e)
}
var HF = ["offset"];

function VF(e) {
    return XF(e) || qF(e) || GF(e) || KF()
}

function KF() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function GF(e, t) {
    if (e) {
        if (typeof e == "string") return fp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fp(e, t)
    }
}

function qF(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function XF(e) {
    if (Array.isArray(e)) return fp(e)
}

function fp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function YF(e, t) {
    if (e == null) return {};
    var r = QF(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function QF(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function S0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function De(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? S0(Object(r), !0).forEach(function(n) {
            ZF(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ZF(e, t, r) {
    return t = JF(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function JF(e) {
    var t = e5(e, "string");
    return Lo(t) == "symbol" ? t : t + ""
}

function e5(e, t) {
    if (Lo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Lo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Ro() {
    return Ro = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ro.apply(this, arguments)
}
var t5 = function(t) {
        var r = t.value,
            n = t.formatter,
            i = J(t.children) ? r : t.children;
        return Z(n) ? n(i) : i
    },
    r5 = function(t, r) {
        var n = Zt(r - t),
            i = Math.min(Math.abs(r - t), 360);
        return n * i
    },
    n5 = function(t, r, n) {
        var i = t.position,
            a = t.viewBox,
            o = t.offset,
            u = t.className,
            l = a,
            s = l.cx,
            f = l.cy,
            c = l.innerRadius,
            d = l.outerRadius,
            p = l.startAngle,
            h = l.endAngle,
            y = l.clockWise,
            w = (c + d) / 2,
            m = r5(p, h),
            v = m >= 0 ? 1 : -1,
            g, S;
        i === "insideStart" ? (g = p + v * o, S = y) : i === "insideEnd" ? (g = h - v * o, S = !y) : i === "end" && (g = h + v * o, S = y), S = m <= 0 ? S : !S;
        var b = Ge(s, f, w, g),
            x = Ge(s, f, w, g + (S ? 1 : -1) * 359),
            O = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(w, ",").concat(w, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y),
            _ = J(t.id) ? uu("recharts-radial-line-") : t.id;
        return A.createElement("text", Ro({}, n, {
            dominantBaseline: "central",
            className: ie("recharts-radial-bar-label", u)
        }), A.createElement("defs", null, A.createElement("path", {
            id: _,
            d: O
        })), A.createElement("textPath", {
            xlinkHref: "#".concat(_)
        }, r))
    },
    i5 = function(t) {
        var r = t.viewBox,
            n = t.offset,
            i = t.position,
            a = r,
            o = a.cx,
            u = a.cy,
            l = a.innerRadius,
            s = a.outerRadius,
            f = a.startAngle,
            c = a.endAngle,
            d = (f + c) / 2;
        if (i === "outside") {
            var p = Ge(o, u, s + n, d),
                h = p.x,
                y = p.y;
            return {
                x: h,
                y,
                textAnchor: h >= o ? "start" : "end",
                verticalAnchor: "middle"
            }
        }
        if (i === "center") return {
            x: o,
            y: u,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
        if (i === "centerTop") return {
            x: o,
            y: u,
            textAnchor: "middle",
            verticalAnchor: "start"
        };
        if (i === "centerBottom") return {
            x: o,
            y: u,
            textAnchor: "middle",
            verticalAnchor: "end"
        };
        var w = (l + s) / 2,
            m = Ge(o, u, w, d),
            v = m.x,
            g = m.y;
        return {
            x: v,
            y: g,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }
    },
    a5 = function(t) {
        var r = t.viewBox,
            n = t.parentViewBox,
            i = t.offset,
            a = t.position,
            o = r,
            u = o.x,
            l = o.y,
            s = o.width,
            f = o.height,
            c = f >= 0 ? 1 : -1,
            d = c * i,
            p = c > 0 ? "end" : "start",
            h = c > 0 ? "start" : "end",
            y = s >= 0 ? 1 : -1,
            w = y * i,
            m = y > 0 ? "end" : "start",
            v = y > 0 ? "start" : "end";
        if (a === "top") {
            var g = {
                x: u + s / 2,
                y: l - c * i,
                textAnchor: "middle",
                verticalAnchor: p
            };
            return De(De({}, g), n ? {
                height: Math.max(l - n.y, 0),
                width: s
            } : {})
        }
        if (a === "bottom") {
            var S = {
                x: u + s / 2,
                y: l + f + d,
                textAnchor: "middle",
                verticalAnchor: h
            };
            return De(De({}, S), n ? {
                height: Math.max(n.y + n.height - (l + f), 0),
                width: s
            } : {})
        }
        if (a === "left") {
            var b = {
                x: u - w,
                y: l + f / 2,
                textAnchor: m,
                verticalAnchor: "middle"
            };
            return De(De({}, b), n ? {
                width: Math.max(b.x - n.x, 0),
                height: f
            } : {})
        }
        if (a === "right") {
            var x = {
                x: u + s + w,
                y: l + f / 2,
                textAnchor: v,
                verticalAnchor: "middle"
            };
            return De(De({}, x), n ? {
                width: Math.max(n.x + n.width - x.x, 0),
                height: f
            } : {})
        }
        var O = n ? {
            width: s,
            height: f
        } : {};
        return a === "insideLeft" ? De({
            x: u + w,
            y: l + f / 2,
            textAnchor: v,
            verticalAnchor: "middle"
        }, O) : a === "insideRight" ? De({
            x: u + s - w,
            y: l + f / 2,
            textAnchor: m,
            verticalAnchor: "middle"
        }, O) : a === "insideTop" ? De({
            x: u + s / 2,
            y: l + d,
            textAnchor: "middle",
            verticalAnchor: h
        }, O) : a === "insideBottom" ? De({
            x: u + s / 2,
            y: l + f - d,
            textAnchor: "middle",
            verticalAnchor: p
        }, O) : a === "insideTopLeft" ? De({
            x: u + w,
            y: l + d,
            textAnchor: v,
            verticalAnchor: h
        }, O) : a === "insideTopRight" ? De({
            x: u + s - w,
            y: l + d,
            textAnchor: m,
            verticalAnchor: h
        }, O) : a === "insideBottomLeft" ? De({
            x: u + w,
            y: l + f - d,
            textAnchor: v,
            verticalAnchor: p
        }, O) : a === "insideBottomRight" ? De({
            x: u + s - w,
            y: l + f - d,
            textAnchor: m,
            verticalAnchor: p
        }, O) : ua(a) && (W(a.x) || $n(a.x)) && (W(a.y) || $n(a.y)) ? De({
            x: u + Un(a.x, s),
            y: l + Un(a.y, f),
            textAnchor: "end",
            verticalAnchor: "end"
        }, O) : De({
            x: u + s / 2,
            y: l + f / 2,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }, O)
    },
    o5 = function(t) {
        return "cx" in t && W(t.cx)
    };

function et(e) {
    var t = e.offset,
        r = t === void 0 ? 5 : t,
        n = YF(e, HF),
        i = De({
            offset: r
        }, n),
        a = i.viewBox,
        o = i.position,
        u = i.value,
        l = i.children,
        s = i.content,
        f = i.className,
        c = f === void 0 ? "" : f,
        d = i.textBreakAll;
    if (!a || J(u) && J(l) && !F.isValidElement(s) && !Z(s)) return null;
    if (F.isValidElement(s)) return F.cloneElement(s, i);
    var p;
    if (Z(s)) {
        if (p = F.createElement(s, i), F.isValidElement(p)) return p
    } else p = t5(i);
    var h = o5(a),
        y = ee(i, !0);
    if (h && (o === "insideStart" || o === "insideEnd" || o === "end")) return n5(i, p, y);
    var w = h ? i5(i) : a5(i);
    return A.createElement(Ul, Ro({
        className: ie("recharts-label", c)
    }, y, w, {
        breakAll: d
    }), p)
}
et.displayName = "Label";
var pO = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.angle,
            a = t.startAngle,
            o = t.endAngle,
            u = t.r,
            l = t.radius,
            s = t.innerRadius,
            f = t.outerRadius,
            c = t.x,
            d = t.y,
            p = t.top,
            h = t.left,
            y = t.width,
            w = t.height,
            m = t.clockWise,
            v = t.labelViewBox;
        if (v) return v;
        if (W(y) && W(w)) {
            if (W(c) && W(d)) return {
                x: c,
                y: d,
                width: y,
                height: w
            };
            if (W(p) && W(h)) return {
                x: p,
                y: h,
                width: y,
                height: w
            }
        }
        return W(c) && W(d) ? {
            x: c,
            y: d,
            width: 0,
            height: 0
        } : W(r) && W(n) ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: s || 0,
            outerRadius: f || l || u || 0,
            clockWise: m
        } : t.viewBox ? t.viewBox : {}
    },
    u5 = function(t, r) {
        return t ? t === !0 ? A.createElement(et, {
            key: "label-implicit",
            viewBox: r
        }) : Be(t) ? A.createElement(et, {
            key: "label-implicit",
            viewBox: r,
            value: t
        }) : F.isValidElement(t) ? t.type === et ? F.cloneElement(t, {
            key: "label-implicit",
            viewBox: r
        }) : A.createElement(et, {
            key: "label-implicit",
            content: t,
            viewBox: r
        }) : Z(t) ? A.createElement(et, {
            key: "label-implicit",
            content: t,
            viewBox: r
        }) : ua(t) ? A.createElement(et, Ro({
            viewBox: r
        }, t, {
            key: "label-implicit"
        })) : null : null
    },
    l5 = function(t, r) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (!t || !t.children && n && !t.label) return null;
        var i = t.children,
            a = pO(t),
            o = Lt(i, et).map(function(l, s) {
                return F.cloneElement(l, {
                    viewBox: r || a,
                    key: "label-".concat(s)
                })
            });
        if (!n) return o;
        var u = u5(t.label, r || a);
        return [u].concat(VF(o))
    };
et.parseViewBox = pO;
et.renderCallByParent = l5;

function s5(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
var c5 = s5;
const f5 = fe(c5);

function Bo(e) {
    "@babel/helpers - typeof";
    return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Bo(e)
}
var d5 = ["valueAccessor"],
    p5 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

function h5(e) {
    return g5(e) || m5(e) || y5(e) || v5()
}

function v5() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function y5(e, t) {
    if (e) {
        if (typeof e == "string") return dp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dp(e, t)
    }
}

function m5(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function g5(e) {
    if (Array.isArray(e)) return dp(e)
}

function dp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function is() {
    return is = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, is.apply(this, arguments)
}

function O0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function _0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? O0(Object(r), !0).forEach(function(n) {
            b5(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function b5(e, t, r) {
    return t = w5(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function w5(e) {
    var t = x5(e, "string");
    return Bo(t) == "symbol" ? t : t + ""
}

function x5(e, t) {
    if (Bo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Bo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function P0(e, t) {
    if (e == null) return {};
    var r = S5(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function S5(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}
var O5 = function(t) {
    return Array.isArray(t.value) ? f5(t.value) : t.value
};

function on(e) {
    var t = e.valueAccessor,
        r = t === void 0 ? O5 : t,
        n = P0(e, d5),
        i = n.data,
        a = n.dataKey,
        o = n.clockWise,
        u = n.id,
        l = n.textBreakAll,
        s = P0(n, p5);
    return !i || !i.length ? null : A.createElement(Te, {
        className: "recharts-label-list"
    }, i.map(function(f, c) {
        var d = J(a) ? r(f, c) : _t(f && f.payload, a),
            p = J(u) ? {} : {
                id: "".concat(u, "-").concat(c)
            };
        return A.createElement(et, is({}, ee(f, !0), s, p, {
            parentViewBox: f.parentViewBox,
            value: d,
            textBreakAll: l,
            viewBox: et.parseViewBox(J(o) ? f : _0(_0({}, f), {}, {
                clockWise: o
            })),
            key: "label-".concat(c),
            index: c
        }))
    }))
}
on.displayName = "LabelList";

function _5(e, t) {
    return e ? e === !0 ? A.createElement(on, {
        key: "labelList-implicit",
        data: t
    }) : A.isValidElement(e) || Z(e) ? A.createElement(on, {
        key: "labelList-implicit",
        data: t,
        content: e
    }) : ua(e) ? A.createElement(on, is({
        data: t
    }, e, {
        key: "labelList-implicit"
    })) : null : null
}

function P5(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || !e.children && r && !e.label) return null;
    var n = e.children,
        i = Lt(n, on).map(function(o, u) {
            return F.cloneElement(o, {
                data: t,
                key: "labelList-".concat(u)
            })
        });
    if (!r) return i;
    var a = _5(e.label, t);
    return [a].concat(h5(i))
}
on.renderCallByParent = P5;

function zo(e) {
    "@babel/helpers - typeof";
    return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, zo(e)
}

function pp() {
    return pp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, pp.apply(this, arguments)
}

function A0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function E0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? A0(Object(r), !0).forEach(function(n) {
            A5(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function A5(e, t, r) {
    return t = E5(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function E5(e) {
    var t = $5(e, "string");
    return zo(t) == "symbol" ? t : t + ""
}

function $5(e, t) {
    if (zo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (zo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var T5 = function(t, r) {
        var n = Zt(r - t),
            i = Math.min(Math.abs(r - t), 359.999);
        return n * i
    },
    Fu = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.radius,
            a = t.angle,
            o = t.sign,
            u = t.isExternal,
            l = t.cornerRadius,
            s = t.cornerIsExternal,
            f = l * (u ? 1 : -1) + i,
            c = Math.asin(l / f) / ns,
            d = s ? a : a + o * c,
            p = Ge(r, n, f, d),
            h = Ge(r, n, i, d),
            y = s ? a - o * c : a,
            w = Ge(r, n, f * Math.cos(c * ns), y);
        return {
            center: p,
            circleTangency: h,
            lineTangency: w,
            theta: c
        }
    },
    hO = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.startAngle,
            u = t.endAngle,
            l = T5(o, u),
            s = o + l,
            f = Ge(r, n, a, o),
            c = Ge(r, n, a, s),
            d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(o > s), `,
    `).concat(c.x, ",").concat(c.y, `
  `);
        if (i > 0) {
            var p = Ge(r, n, i, o),
                h = Ge(r, n, i, s);
            d += "L ".concat(h.x, ",").concat(h.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(o <= s), `,
            `).concat(p.x, ",").concat(p.y, " Z")
        } else d += "L ".concat(r, ",").concat(n, " Z");
        return d
    },
    C5 = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.cornerRadius,
            u = t.forceCornerRadius,
            l = t.cornerIsExternal,
            s = t.startAngle,
            f = t.endAngle,
            c = Zt(f - s),
            d = Fu({
                cx: r,
                cy: n,
                radius: a,
                angle: s,
                sign: c,
                cornerRadius: o,
                cornerIsExternal: l
            }),
            p = d.circleTangency,
            h = d.lineTangency,
            y = d.theta,
            w = Fu({
                cx: r,
                cy: n,
                radius: a,
                angle: f,
                sign: -c,
                cornerRadius: o,
                cornerIsExternal: l
            }),
            m = w.circleTangency,
            v = w.lineTangency,
            g = w.theta,
            S = l ? Math.abs(s - f) : Math.abs(s - f) - y - g;
        if (S < 0) return u ? "M ".concat(h.x, ",").concat(h.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : hO({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: s,
            endAngle: f
        });
        var b = "M ".concat(h.x, ",").concat(h.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(c < 0), ",").concat(m.x, ",").concat(m.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(v.x, ",").concat(v.y, `
  `);
        if (i > 0) {
            var x = Fu({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: s,
                    sign: c,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: l
                }),
                O = x.circleTangency,
                _ = x.lineTangency,
                P = x.theta,
                $ = Fu({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: f,
                    sign: -c,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: l
                }),
                E = $.circleTangency,
                T = $.lineTangency,
                I = $.theta,
                N = l ? Math.abs(s - f) : Math.abs(s - f) - P - I;
            if (N < 0 && o === 0) return "".concat(b, "L").concat(r, ",").concat(n, "Z");
            b += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(N > 180), ",").concat(+(c > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(_.x, ",").concat(_.y, "Z")
        } else b += "L".concat(r, ",").concat(n, "Z");
        return b
    },
    j5 = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
    },
    vO = function(t) {
        var r = E0(E0({}, j5), t),
            n = r.cx,
            i = r.cy,
            a = r.innerRadius,
            o = r.outerRadius,
            u = r.cornerRadius,
            l = r.forceCornerRadius,
            s = r.cornerIsExternal,
            f = r.startAngle,
            c = r.endAngle,
            d = r.className;
        if (o < a || f === c) return null;
        var p = ie("recharts-sector", d),
            h = o - a,
            y = Un(u, h, 0, !0),
            w;
        return y > 0 && Math.abs(f - c) < 360 ? w = C5({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(y, h / 2),
            forceCornerRadius: l,
            cornerIsExternal: s,
            startAngle: f,
            endAngle: c
        }) : w = hO({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: c
        }), A.createElement("path", pp({}, ee(r, !0), {
            className: p,
            d: w,
            role: "img"
        }))
    };

function Fo(e) {
    "@babel/helpers - typeof";
    return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Fo(e)
}

function hp() {
    return hp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, hp.apply(this, arguments)
}

function $0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function T0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? $0(Object(r), !0).forEach(function(n) {
            k5(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function k5(e, t, r) {
    return t = M5(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function M5(e) {
    var t = I5(e, "string");
    return Fo(t) == "symbol" ? t : t + ""
}

function I5(e, t) {
    if (Fo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Fo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var C0 = {
        curveBasisClosed: k2,
        curveBasisOpen: M2,
        curveBasis: j2,
        curveBumpX: m2,
        curveBumpY: g2,
        curveLinearClosed: I2,
        curveLinear: nc,
        curveMonotoneX: N2,
        curveMonotoneY: D2,
        curveNatural: L2,
        curveStep: R2,
        curveStepAfter: z2,
        curveStepBefore: B2
    },
    Uu = function(t) {
        return t.x === +t.x && t.y === +t.y
    },
    Ma = function(t) {
        return t.x
    },
    Ia = function(t) {
        return t.y
    },
    N5 = function(t, r) {
        if (Z(t)) return t;
        var n = "curve".concat(tc(t));
        return (n === "curveMonotone" || n === "curveBump") && r ? C0["".concat(n).concat(r === "vertical" ? "Y" : "X")] : C0[n] || nc
    },
    D5 = function(t) {
        var r = t.type,
            n = r === void 0 ? "linear" : r,
            i = t.points,
            a = i === void 0 ? [] : i,
            o = t.baseLine,
            u = t.layout,
            l = t.connectNulls,
            s = l === void 0 ? !1 : l,
            f = N5(n, u),
            c = s ? a.filter(function(y) {
                return Uu(y)
            }) : a,
            d;
        if (Array.isArray(o)) {
            var p = s ? o.filter(function(y) {
                    return Uu(y)
                }) : o,
                h = c.map(function(y, w) {
                    return T0(T0({}, y), {}, {
                        base: p[w]
                    })
                });
            return u === "vertical" ? d = ku().y(Ia).x1(Ma).x0(function(y) {
                return y.base.x
            }) : d = ku().x(Ma).y1(Ia).y0(function(y) {
                return y.base.y
            }), d.defined(Uu).curve(f), d(h)
        }
        return u === "vertical" && W(o) ? d = ku().y(Ia).x1(Ma).x0(o) : W(o) ? d = ku().x(Ma).y1(Ia).y0(o) : d = vx().x(Ma).y(Ia), d.defined(Uu).curve(f), d(c)
    },
    vp = function(t) {
        var r = t.className,
            n = t.points,
            i = t.path,
            a = t.pathRef;
        if ((!n || !n.length) && !i) return null;
        var o = n && n.length ? D5(t) : i;
        return F.createElement("path", hp({}, ee(t, !1), El(t), {
            className: ie("recharts-curve", r),
            d: o,
            ref: a
        }))
    },
    yO = {
        exports: {}
    },
    L5 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    R5 = L5,
    B5 = R5;

function mO() {}

function gO() {}
gO.resetWarningCache = mO;
var z5 = function() {
    function e(n, i, a, o, u, l) {
        if (l !== B5) {
            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw s.name = "Invariant Violation", s
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var r = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: gO,
        resetWarningCache: mO
    };
    return r.PropTypes = r, r
};
yO.exports = z5();
var F5 = yO.exports;
const oe = fe(F5);
var U5 = Object.getOwnPropertyNames,
    W5 = Object.getOwnPropertySymbols,
    H5 = Object.prototype.hasOwnProperty;

function j0(e, t) {
    return function(n, i, a) {
        return e(n, i, a) && t(n, i, a)
    }
}

function Wu(e) {
    return function(r, n, i) {
        if (!r || !n || typeof r != "object" || typeof n != "object") return e(r, n, i);
        var a = i.cache,
            o = a.get(r),
            u = a.get(n);
        if (o && u) return o === n && u === r;
        a.set(r, n), a.set(n, r);
        var l = e(r, n, i);
        return a.delete(r), a.delete(n), l
    }
}

function k0(e) {
    return U5(e).concat(W5(e))
}
var V5 = Object.hasOwn || function(e, t) {
    return H5.call(e, t)
};

function Qn(e, t) {
    return e === t || !e && !t && e !== e && t !== t
}
var K5 = "__v",
    G5 = "__o",
    q5 = "_owner",
    M0 = Object.getOwnPropertyDescriptor,
    I0 = Object.keys;

function X5(e, t, r) {
    var n = e.length;
    if (t.length !== n) return !1;
    for (; n-- > 0;)
        if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
    return !0
}

function Y5(e, t) {
    return Qn(e.getTime(), t.getTime())
}

function Q5(e, t) {
    return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack
}

function Z5(e, t) {
    return e === t
}

function N0(e, t, r) {
    var n = e.size;
    if (n !== t.size) return !1;
    if (!n) return !0;
    for (var i = new Array(n), a = e.entries(), o, u, l = 0;
        (o = a.next()) && !o.done;) {
        for (var s = t.entries(), f = !1, c = 0;
            (u = s.next()) && !u.done;) {
            if (i[c]) {
                c++;
                continue
            }
            var d = o.value,
                p = u.value;
            if (r.equals(d[0], p[0], l, c, e, t, r) && r.equals(d[1], p[1], d[0], p[0], e, t, r)) {
                f = i[c] = !0;
                break
            }
            c++
        }
        if (!f) return !1;
        l++
    }
    return !0
}
var J5 = Qn;

function e6(e, t, r) {
    var n = I0(e),
        i = n.length;
    if (I0(t).length !== i) return !1;
    for (; i-- > 0;)
        if (!bO(e, t, r, n[i])) return !1;
    return !0
}

function Na(e, t, r) {
    var n = k0(e),
        i = n.length;
    if (k0(t).length !== i) return !1;
    for (var a, o, u; i-- > 0;)
        if (a = n[i], !bO(e, t, r, a) || (o = M0(e, a), u = M0(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable))) return !1;
    return !0
}

function t6(e, t) {
    return Qn(e.valueOf(), t.valueOf())
}

function r6(e, t) {
    return e.source === t.source && e.flags === t.flags
}

function D0(e, t, r) {
    var n = e.size;
    if (n !== t.size) return !1;
    if (!n) return !0;
    for (var i = new Array(n), a = e.values(), o, u;
        (o = a.next()) && !o.done;) {
        for (var l = t.values(), s = !1, f = 0;
            (u = l.next()) && !u.done;) {
            if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
                s = i[f] = !0;
                break
            }
            f++
        }
        if (!s) return !1
    }
    return !0
}

function n6(e, t) {
    var r = e.length;
    if (t.length !== r) return !1;
    for (; r-- > 0;)
        if (e[r] !== t[r]) return !1;
    return !0
}

function i6(e, t) {
    return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password
}

function bO(e, t, r, n) {
    return (n === q5 || n === G5 || n === K5) && (e.$$typeof || t.$$typeof) ? !0 : V5(t, n) && r.equals(e[n], t[n], n, n, e, t, r)
}
var a6 = "[object Arguments]",
    o6 = "[object Boolean]",
    u6 = "[object Date]",
    l6 = "[object Error]",
    s6 = "[object Map]",
    c6 = "[object Number]",
    f6 = "[object Object]",
    d6 = "[object RegExp]",
    p6 = "[object Set]",
    h6 = "[object String]",
    v6 = "[object URL]",
    y6 = Array.isArray,
    L0 = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null,
    R0 = Object.assign,
    m6 = Object.prototype.toString.call.bind(Object.prototype.toString);

function g6(e) {
    var t = e.areArraysEqual,
        r = e.areDatesEqual,
        n = e.areErrorsEqual,
        i = e.areFunctionsEqual,
        a = e.areMapsEqual,
        o = e.areNumbersEqual,
        u = e.areObjectsEqual,
        l = e.arePrimitiveWrappersEqual,
        s = e.areRegExpsEqual,
        f = e.areSetsEqual,
        c = e.areTypedArraysEqual,
        d = e.areUrlsEqual;
    return function(h, y, w) {
        if (h === y) return !0;
        if (h == null || y == null) return !1;
        var m = typeof h;
        if (m !== typeof y) return !1;
        if (m !== "object") return m === "number" ? o(h, y, w) : m === "function" ? i(h, y, w) : !1;
        var v = h.constructor;
        if (v !== y.constructor) return !1;
        if (v === Object) return u(h, y, w);
        if (y6(h)) return t(h, y, w);
        if (L0 != null && L0(h)) return c(h, y, w);
        if (v === Date) return r(h, y, w);
        if (v === RegExp) return s(h, y, w);
        if (v === Map) return a(h, y, w);
        if (v === Set) return f(h, y, w);
        var g = m6(h);
        return g === u6 ? r(h, y, w) : g === d6 ? s(h, y, w) : g === s6 ? a(h, y, w) : g === p6 ? f(h, y, w) : g === f6 ? typeof h.then != "function" && typeof y.then != "function" && u(h, y, w) : g === v6 ? d(h, y, w) : g === l6 ? n(h, y, w) : g === a6 ? u(h, y, w) : g === o6 || g === c6 || g === h6 ? l(h, y, w) : !1
    }
}

function b6(e) {
    var t = e.circular,
        r = e.createCustomConfig,
        n = e.strict,
        i = {
            areArraysEqual: n ? Na : X5,
            areDatesEqual: Y5,
            areErrorsEqual: Q5,
            areFunctionsEqual: Z5,
            areMapsEqual: n ? j0(N0, Na) : N0,
            areNumbersEqual: J5,
            areObjectsEqual: n ? Na : e6,
            arePrimitiveWrappersEqual: t6,
            areRegExpsEqual: r6,
            areSetsEqual: n ? j0(D0, Na) : D0,
            areTypedArraysEqual: n ? Na : n6,
            areUrlsEqual: i6
        };
    if (r && (i = R0({}, i, r(i))), t) {
        var a = Wu(i.areArraysEqual),
            o = Wu(i.areMapsEqual),
            u = Wu(i.areObjectsEqual),
            l = Wu(i.areSetsEqual);
        i = R0({}, i, {
            areArraysEqual: a,
            areMapsEqual: o,
            areObjectsEqual: u,
            areSetsEqual: l
        })
    }
    return i
}

function w6(e) {
    return function(t, r, n, i, a, o, u) {
        return e(t, r, u)
    }
}

function x6(e) {
    var t = e.circular,
        r = e.comparator,
        n = e.createState,
        i = e.equals,
        a = e.strict;
    if (n) return function(l, s) {
        var f = n(),
            c = f.cache,
            d = c === void 0 ? t ? new WeakMap : void 0 : c,
            p = f.meta;
        return r(l, s, {
            cache: d,
            equals: i,
            meta: p,
            strict: a
        })
    };
    if (t) return function(l, s) {
        return r(l, s, {
            cache: new WeakMap,
            equals: i,
            meta: void 0,
            strict: a
        })
    };
    var o = {
        cache: void 0,
        equals: i,
        meta: void 0,
        strict: a
    };
    return function(l, s) {
        return r(l, s, o)
    }
}
var S6 = yn();
yn({
    strict: !0
});
yn({
    circular: !0
});
yn({
    circular: !0,
    strict: !0
});
yn({
    createInternalComparator: function() {
        return Qn
    }
});
yn({
    strict: !0,
    createInternalComparator: function() {
        return Qn
    }
});
yn({
    circular: !0,
    createInternalComparator: function() {
        return Qn
    }
});
yn({
    circular: !0,
    createInternalComparator: function() {
        return Qn
    },
    strict: !0
});

function yn(e) {
    e === void 0 && (e = {});
    var t = e.circular,
        r = t === void 0 ? !1 : t,
        n = e.createInternalComparator,
        i = e.createState,
        a = e.strict,
        o = a === void 0 ? !1 : a,
        u = b6(e),
        l = g6(u),
        s = n ? n(l) : w6(l);
    return x6({
        circular: r,
        comparator: l,
        createState: i,
        equals: s,
        strict: o
    })
}

function O6(e) {
    typeof requestAnimationFrame < "u" && requestAnimationFrame(e)
}

function B0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = -1,
        n = function i(a) {
            r < 0 && (r = a), a - r > t ? (e(a), r = -1) : O6(i)
        };
    requestAnimationFrame(n)
}

function yp(e) {
    "@babel/helpers - typeof";
    return yp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, yp(e)
}

function _6(e) {
    return $6(e) || E6(e) || A6(e) || P6()
}

function P6() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function A6(e, t) {
    if (e) {
        if (typeof e == "string") return z0(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return z0(e, t)
    }
}

function z0(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function E6(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function $6(e) {
    if (Array.isArray(e)) return e
}

function T6() {
    var e = {},
        t = function() {
            return null
        },
        r = !1,
        n = function i(a) {
            if (!r) {
                if (Array.isArray(a)) {
                    if (!a.length) return;
                    var o = a,
                        u = _6(o),
                        l = u[0],
                        s = u.slice(1);
                    if (typeof l == "number") {
                        B0(i.bind(null, s), l);
                        return
                    }
                    i(l), B0(i.bind(null, s));
                    return
                }
                yp(a) === "object" && (e = a, t(e)), typeof a == "function" && a()
            }
        };
    return {
        stop: function() {
            r = !0
        },
        start: function(a) {
            r = !1, n(a)
        },
        subscribe: function(a) {
            return t = a,
                function() {
                    t = function() {
                        return null
                    }
                }
        }
    }
}

function Uo(e) {
    "@babel/helpers - typeof";
    return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Uo(e)
}

function F0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function U0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? F0(Object(r), !0).forEach(function(n) {
            wO(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function wO(e, t, r) {
    return t = C6(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function C6(e) {
    var t = j6(e, "string");
    return Uo(t) === "symbol" ? t : String(t)
}

function j6(e, t) {
    if (Uo(e) !== "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Uo(n) !== "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var k6 = function(t, r) {
        return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
            return n.filter(function(a) {
                return i.includes(a)
            })
        })
    },
    M6 = function(t) {
        return t
    },
    I6 = function(t) {
        return t.replace(/([A-Z])/g, function(r) {
            return "-".concat(r.toLowerCase())
        })
    },
    eo = function(t, r) {
        return Object.keys(r).reduce(function(n, i) {
            return U0(U0({}, n), {}, wO({}, i, t(i, r[i])))
        }, {})
    },
    W0 = function(t, r, n) {
        return t.map(function(i) {
            return "".concat(I6(i), " ").concat(r, "ms ").concat(n)
        }).join(",")
    };

function N6(e, t) {
    return R6(e) || L6(e, t) || xO(e, t) || D6()
}

function D6() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function L6(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function R6(e) {
    if (Array.isArray(e)) return e
}

function B6(e) {
    return U6(e) || F6(e) || xO(e) || z6()
}

function z6() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function xO(e, t) {
    if (e) {
        if (typeof e == "string") return mp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mp(e, t)
    }
}

function F6(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function U6(e) {
    if (Array.isArray(e)) return mp(e)
}

function mp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var as = 1e-4,
    SO = function(t, r) {
        return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1]
    },
    OO = function(t, r) {
        return t.map(function(n, i) {
            return n * Math.pow(r, i)
        }).reduce(function(n, i) {
            return n + i
        })
    },
    H0 = function(t, r) {
        return function(n) {
            var i = SO(t, r);
            return OO(i, n)
        }
    },
    W6 = function(t, r) {
        return function(n) {
            var i = SO(t, r),
                a = [].concat(B6(i.map(function(o, u) {
                    return o * u
                }).slice(1)), [0]);
            return OO(a, n)
        }
    },
    V0 = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var i = r[0],
            a = r[1],
            o = r[2],
            u = r[3];
        if (r.length === 1) switch (r[0]) {
            case "linear":
                i = 0, a = 0, o = 1, u = 1;
                break;
            case "ease":
                i = .25, a = .1, o = .25, u = 1;
                break;
            case "ease-in":
                i = .42, a = 0, o = 1, u = 1;
                break;
            case "ease-out":
                i = .42, a = 0, o = .58, u = 1;
                break;
            case "ease-in-out":
                i = 0, a = 0, o = .58, u = 1;
                break;
            default:
                {
                    var l = r[0].split("(");
                    if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
                        var s = l[1].split(")")[0].split(",").map(function(w) {
                                return parseFloat(w)
                            }),
                            f = N6(s, 4);
                        i = f[0], a = f[1], o = f[2], u = f[3]
                    }
                }
        }
        var c = H0(i, o),
            d = H0(a, u),
            p = W6(i, o),
            h = function(m) {
                return m > 1 ? 1 : m < 0 ? 0 : m
            },
            y = function(m) {
                for (var v = m > 1 ? 1 : m, g = v, S = 0; S < 8; ++S) {
                    var b = c(g) - v,
                        x = p(g);
                    if (Math.abs(b - v) < as || x < as) return d(g);
                    g = h(g - b / x)
                }
                return d(g)
            };
        return y.isStepper = !1, y
    },
    H6 = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = t.stiff,
            n = r === void 0 ? 100 : r,
            i = t.damping,
            a = i === void 0 ? 8 : i,
            o = t.dt,
            u = o === void 0 ? 17 : o,
            l = function(f, c, d) {
                var p = -(f - c) * n,
                    h = d * a,
                    y = d + (p - h) * u / 1e3,
                    w = d * u / 1e3 + f;
                return Math.abs(w - c) < as && Math.abs(y) < as ? [c, 0] : [w, y]
            };
        return l.isStepper = !0, l.dt = u, l
    },
    V6 = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var i = r[0];
        if (typeof i == "string") switch (i) {
            case "ease":
            case "ease-in-out":
            case "ease-out":
            case "ease-in":
            case "linear":
                return V0(i);
            case "spring":
                return H6();
            default:
                if (i.split("(")[0] === "cubic-bezier") return V0(i)
        }
        return typeof i == "function" ? i : null
    };

function Wo(e) {
    "@babel/helpers - typeof";
    return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Wo(e)
}

function K0(e) {
    return q6(e) || G6(e) || _O(e) || K6()
}

function K6() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function G6(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function q6(e) {
    if (Array.isArray(e)) return bp(e)
}

function G0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ve(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? G0(Object(r), !0).forEach(function(n) {
            gp(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function gp(e, t, r) {
    return t = X6(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function X6(e) {
    var t = Y6(e, "string");
    return Wo(t) === "symbol" ? t : String(t)
}

function Y6(e, t) {
    if (Wo(e) !== "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Wo(n) !== "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Q6(e, t) {
    return eU(e) || J6(e, t) || _O(e, t) || Z6()
}

function Z6() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function _O(e, t) {
    if (e) {
        if (typeof e == "string") return bp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t)
    }
}

function bp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function J6(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function eU(e) {
    if (Array.isArray(e)) return e
}
var os = function(t, r, n) {
        return t + (r - t) * n
    },
    wp = function(t) {
        var r = t.from,
            n = t.to;
        return r !== n
    },
    tU = function e(t, r, n) {
        var i = eo(function(a, o) {
            if (wp(o)) {
                var u = t(o.from, o.to, o.velocity),
                    l = Q6(u, 2),
                    s = l[0],
                    f = l[1];
                return Ve(Ve({}, o), {}, {
                    from: s,
                    velocity: f
                })
            }
            return o
        }, r);
        return n < 1 ? eo(function(a, o) {
            return wp(o) ? Ve(Ve({}, o), {}, {
                velocity: os(o.velocity, i[a].velocity, n),
                from: os(o.from, i[a].from, n)
            }) : o
        }, r) : e(t, i, n - 1)
    };
const rU = function(e, t, r, n, i) {
    var a = k6(e, t),
        o = a.reduce(function(w, m) {
            return Ve(Ve({}, w), {}, gp({}, m, [e[m], t[m]]))
        }, {}),
        u = a.reduce(function(w, m) {
            return Ve(Ve({}, w), {}, gp({}, m, {
                from: e[m],
                velocity: 0,
                to: t[m]
            }))
        }, {}),
        l = -1,
        s, f, c = function() {
            return null
        },
        d = function() {
            return eo(function(m, v) {
                return v.from
            }, u)
        },
        p = function() {
            return !Object.values(u).filter(wp).length
        },
        h = function(m) {
            s || (s = m);
            var v = m - s,
                g = v / r.dt;
            u = tU(r, u, g), i(Ve(Ve(Ve({}, e), t), d())), s = m, p() || (l = requestAnimationFrame(c))
        },
        y = function(m) {
            f || (f = m);
            var v = (m - f) / n,
                g = eo(function(b, x) {
                    return os.apply(void 0, K0(x).concat([r(v)]))
                }, o);
            if (i(Ve(Ve(Ve({}, e), t), g)), v < 1) l = requestAnimationFrame(c);
            else {
                var S = eo(function(b, x) {
                    return os.apply(void 0, K0(x).concat([r(1)]))
                }, o);
                i(Ve(Ve(Ve({}, e), t), S))
            }
        };
    return c = r.isStepper ? h : y,
        function() {
            return requestAnimationFrame(c),
                function() {
                    cancelAnimationFrame(l)
                }
        }
};

function Vi(e) {
    "@babel/helpers - typeof";
    return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Vi(e)
}
var nU = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

function iU(e, t) {
    if (e == null) return {};
    var r = aU(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function aU(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function _f(e) {
    return sU(e) || lU(e) || uU(e) || oU()
}

function oU() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function uU(e, t) {
    if (e) {
        if (typeof e == "string") return xp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xp(e, t)
    }
}

function lU(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function sU(e) {
    if (Array.isArray(e)) return xp(e)
}

function xp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function q0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ht(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? q0(Object(r), !0).forEach(function(n) {
            Fa(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Fa(e, t, r) {
    return t = PO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function cU(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function fU(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, PO(n.key), n)
    }
}

function dU(e, t, r) {
    return t && fU(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function PO(e) {
    var t = pU(e, "string");
    return Vi(t) === "symbol" ? t : String(t)
}

function pU(e, t) {
    if (Vi(e) !== "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Vi(n) !== "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function hU(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Sp(e, t)
}

function Sp(e, t) {
    return Sp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Sp(e, t)
}

function vU(e) {
    var t = yU();
    return function() {
        var n = us(e),
            i;
        if (t) {
            var a = us(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return Op(this, i)
    }
}

function Op(e, t) {
    if (t && (Vi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _p(e)
}

function _p(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function yU() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function us(e) {
    return us = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, us(e)
}
var Ir = function(e) {
    hU(r, e);
    var t = vU(r);

    function r(n, i) {
        var a;
        cU(this, r), a = t.call(this, n, i);
        var o = a.props,
            u = o.isActive,
            l = o.attributeName,
            s = o.from,
            f = o.to,
            c = o.steps,
            d = o.children,
            p = o.duration;
        if (a.handleStyleChange = a.handleStyleChange.bind(_p(a)), a.changeStyle = a.changeStyle.bind(_p(a)), !u || p <= 0) return a.state = {
            style: {}
        }, typeof d == "function" && (a.state = {
            style: f
        }), Op(a);
        if (c && c.length) a.state = {
            style: c[0].style
        };
        else if (s) {
            if (typeof d == "function") return a.state = {
                style: s
            }, Op(a);
            a.state = {
                style: l ? Fa({}, l, s) : s
            }
        } else a.state = {
            style: {}
        };
        return a
    }
    return dU(r, [{
        key: "componentDidMount",
        value: function() {
            var i = this.props,
                a = i.isActive,
                o = i.canBegin;
            this.mounted = !0, !(!a || !o) && this.runAnimation(this.props)
        }
    }, {
        key: "componentDidUpdate",
        value: function(i) {
            var a = this.props,
                o = a.isActive,
                u = a.canBegin,
                l = a.attributeName,
                s = a.shouldReAnimate,
                f = a.to,
                c = a.from,
                d = this.state.style;
            if (u) {
                if (!o) {
                    var p = {
                        style: l ? Fa({}, l, f) : f
                    };
                    this.state && d && (l && d[l] !== f || !l && d !== f) && this.setState(p);
                    return
                }
                if (!(S6(i.to, f) && i.canBegin && i.isActive)) {
                    var h = !i.canBegin || !i.isActive;
                    this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                    var y = h || s ? c : i.to;
                    if (this.state && d) {
                        var w = {
                            style: l ? Fa({}, l, y) : y
                        };
                        (l && d[l] !== y || !l && d !== y) && this.setState(w)
                    }
                    this.runAnimation(Ht(Ht({}, this.props), {}, {
                        from: y,
                        begin: 0
                    }))
                }
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.mounted = !1;
            var i = this.props.onAnimationEnd;
            this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i()
        }
    }, {
        key: "handleStyleChange",
        value: function(i) {
            this.changeStyle(i)
        }
    }, {
        key: "changeStyle",
        value: function(i) {
            this.mounted && this.setState({
                style: i
            })
        }
    }, {
        key: "runJSAnimation",
        value: function(i) {
            var a = this,
                o = i.from,
                u = i.to,
                l = i.duration,
                s = i.easing,
                f = i.begin,
                c = i.onAnimationEnd,
                d = i.onAnimationStart,
                p = rU(o, u, V6(s), l, this.changeStyle),
                h = function() {
                    a.stopJSAnimation = p()
                };
            this.manager.start([d, f, h, l, c])
        }
    }, {
        key: "runStepAnimation",
        value: function(i) {
            var a = this,
                o = i.steps,
                u = i.begin,
                l = i.onAnimationStart,
                s = o[0],
                f = s.style,
                c = s.duration,
                d = c === void 0 ? 0 : c,
                p = function(y, w, m) {
                    if (m === 0) return y;
                    var v = w.duration,
                        g = w.easing,
                        S = g === void 0 ? "ease" : g,
                        b = w.style,
                        x = w.properties,
                        O = w.onAnimationEnd,
                        _ = m > 0 ? o[m - 1] : w,
                        P = x || Object.keys(b);
                    if (typeof S == "function" || S === "spring") return [].concat(_f(y), [a.runJSAnimation.bind(a, {
                        from: _.style,
                        to: b,
                        duration: v,
                        easing: S
                    }), v]);
                    var $ = W0(P, v, S),
                        E = Ht(Ht(Ht({}, _.style), b), {}, {
                            transition: $
                        });
                    return [].concat(_f(y), [E, v, O]).filter(M6)
                };
            return this.manager.start([l].concat(_f(o.reduce(p, [f, Math.max(d, u)])), [i.onAnimationEnd]))
        }
    }, {
        key: "runAnimation",
        value: function(i) {
            this.manager || (this.manager = T6());
            var a = i.begin,
                o = i.duration,
                u = i.attributeName,
                l = i.to,
                s = i.easing,
                f = i.onAnimationStart,
                c = i.onAnimationEnd,
                d = i.steps,
                p = i.children,
                h = this.manager;
            if (this.unSubscribe = h.subscribe(this.handleStyleChange), typeof s == "function" || typeof p == "function" || s === "spring") {
                this.runJSAnimation(i);
                return
            }
            if (d.length > 1) {
                this.runStepAnimation(i);
                return
            }
            var y = u ? Fa({}, u, l) : l,
                w = W0(Object.keys(y), o, s);
            h.start([f, a, Ht(Ht({}, y), {}, {
                transition: w
            }), o, c])
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props,
                a = i.children;
            i.begin;
            var o = i.duration;
            i.attributeName, i.easing;
            var u = i.isActive;
            i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
            var l = iU(i, nU),
                s = F.Children.count(a),
                f = this.state.style;
            if (typeof a == "function") return a(f);
            if (!u || s === 0 || o <= 0) return a;
            var c = function(p) {
                var h = p.props,
                    y = h.style,
                    w = y === void 0 ? {} : y,
                    m = h.className,
                    v = F.cloneElement(p, Ht(Ht({}, l), {}, {
                        style: Ht(Ht({}, w), f),
                        className: m
                    }));
                return v
            };
            return s === 1 ? c(F.Children.only(a)) : A.createElement("div", null, F.Children.map(a, function(d) {
                return c(d)
            }))
        }
    }]), r
}(F.PureComponent);
Ir.displayName = "Animate";
Ir.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function() {},
    onAnimationStart: function() {}
};
Ir.propTypes = {
    from: oe.oneOfType([oe.object, oe.string]),
    to: oe.oneOfType([oe.object, oe.string]),
    attributeName: oe.string,
    duration: oe.number,
    begin: oe.number,
    easing: oe.oneOfType([oe.string, oe.func]),
    steps: oe.arrayOf(oe.shape({
        duration: oe.number.isRequired,
        style: oe.object.isRequired,
        easing: oe.oneOfType([oe.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), oe.func]),
        properties: oe.arrayOf("string"),
        onAnimationEnd: oe.func
    })),
    children: oe.oneOfType([oe.node, oe.func]),
    isActive: oe.bool,
    canBegin: oe.bool,
    onAnimationEnd: oe.func,
    shouldReAnimate: oe.bool,
    onAnimationStart: oe.func,
    onAnimationReStart: oe.func
};

function Ho(e) {
    "@babel/helpers - typeof";
    return Ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ho(e)
}

function ls() {
    return ls = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ls.apply(this, arguments)
}

function mU(e, t) {
    return xU(e) || wU(e, t) || bU(e, t) || gU()
}

function gU() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function bU(e, t) {
    if (e) {
        if (typeof e == "string") return X0(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return X0(e, t)
    }
}

function X0(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function wU(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function xU(e) {
    if (Array.isArray(e)) return e
}

function Y0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Q0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Y0(Object(r), !0).forEach(function(n) {
            SU(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function SU(e, t, r) {
    return t = OU(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function OU(e) {
    var t = _U(e, "string");
    return Ho(t) == "symbol" ? t : t + ""
}

function _U(e, t) {
    if (Ho(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Ho(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Z0 = function(t, r, n, i, a) {
        var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
            u = i >= 0 ? 1 : -1,
            l = n >= 0 ? 1 : -1,
            s = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0,
            f;
        if (o > 0 && a instanceof Array) {
            for (var c = [0, 0, 0, 0], d = 0, p = 4; d < p; d++) c[d] = a[d] > o ? o : a[d];
            f = "M".concat(t, ",").concat(r + u * c[0]), c[0] > 0 && (f += "A ".concat(c[0], ",").concat(c[0], ",0,0,").concat(s, ",").concat(t + l * c[0], ",").concat(r)), f += "L ".concat(t + n - l * c[1], ",").concat(r), c[1] > 0 && (f += "A ".concat(c[1], ",").concat(c[1], ",0,0,").concat(s, `,
        `).concat(t + n, ",").concat(r + u * c[1])), f += "L ".concat(t + n, ",").concat(r + i - u * c[2]), c[2] > 0 && (f += "A ".concat(c[2], ",").concat(c[2], ",0,0,").concat(s, `,
        `).concat(t + n - l * c[2], ",").concat(r + i)), f += "L ".concat(t + l * c[3], ",").concat(r + i), c[3] > 0 && (f += "A ".concat(c[3], ",").concat(c[3], ",0,0,").concat(s, `,
        `).concat(t, ",").concat(r + i - u * c[3])), f += "Z"
        } else if (o > 0 && a === +a && a > 0) {
            var h = Math.min(o, a);
            f = "M ".concat(t, ",").concat(r + u * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(t + l * h, ",").concat(r, `
            L `).concat(t + n - l * h, ",").concat(r, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(t + n, ",").concat(r + u * h, `
            L `).concat(t + n, ",").concat(r + i - u * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(t + n - l * h, ",").concat(r + i, `
            L `).concat(t + l * h, ",").concat(r + i, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(t, ",").concat(r + i - u * h, " Z")
        } else f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
        return f
    },
    PU = function(t, r) {
        if (!t || !r) return !1;
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y,
            u = r.width,
            l = r.height;
        if (Math.abs(u) > 0 && Math.abs(l) > 0) {
            var s = Math.min(a, a + u),
                f = Math.max(a, a + u),
                c = Math.min(o, o + l),
                d = Math.max(o, o + l);
            return n >= s && n <= f && i >= c && i <= d
        }
        return !1
    },
    AU = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    },
    Iv = function(t) {
        var r = Q0(Q0({}, AU), t),
            n = F.useRef(),
            i = F.useState(-1),
            a = mU(i, 2),
            o = a[0],
            u = a[1];
        F.useEffect(function() {
            if (n.current && n.current.getTotalLength) try {
                var S = n.current.getTotalLength();
                S && u(S)
            } catch {}
        }, []);
        var l = r.x,
            s = r.y,
            f = r.width,
            c = r.height,
            d = r.radius,
            p = r.className,
            h = r.animationEasing,
            y = r.animationDuration,
            w = r.animationBegin,
            m = r.isAnimationActive,
            v = r.isUpdateAnimationActive;
        if (l !== +l || s !== +s || f !== +f || c !== +c || f === 0 || c === 0) return null;
        var g = ie("recharts-rectangle", p);
        return v ? A.createElement(Ir, {
            canBegin: o > 0,
            from: {
                width: f,
                height: c,
                x: l,
                y: s
            },
            to: {
                width: f,
                height: c,
                x: l,
                y: s
            },
            duration: y,
            animationEasing: h,
            isActive: v
        }, function(S) {
            var b = S.width,
                x = S.height,
                O = S.x,
                _ = S.y;
            return A.createElement(Ir, {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: w,
                duration: y,
                isActive: m,
                easing: h
            }, A.createElement("path", ls({}, ee(r, !0), {
                className: g,
                d: Z0(O, _, b, x, d),
                ref: n
            })))
        }) : A.createElement("path", ls({}, ee(r, !0), {
            className: g,
            d: Z0(l, s, f, c, d)
        }))
    };

function Pp() {
    return Pp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Pp.apply(this, arguments)
}
var Nv = function(t) {
    var r = t.cx,
        n = t.cy,
        i = t.r,
        a = t.className,
        o = ie("recharts-dot", a);
    return r === +r && n === +n && i === +i ? F.createElement("circle", Pp({}, ee(t, !1), El(t), {
        className: o,
        cx: r,
        cy: n,
        r: i
    })) : null
};

function Vo(e) {
    "@babel/helpers - typeof";
    return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Vo(e)
}
var EU = ["x", "y", "top", "left", "width", "height", "className"];

function Ap() {
    return Ap = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ap.apply(this, arguments)
}

function J0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function $U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? J0(Object(r), !0).forEach(function(n) {
            TU(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J0(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function TU(e, t, r) {
    return t = CU(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function CU(e) {
    var t = jU(e, "string");
    return Vo(t) == "symbol" ? t : t + ""
}

function jU(e, t) {
    if (Vo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Vo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function kU(e, t) {
    if (e == null) return {};
    var r = MU(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function MU(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}
var IU = function(t, r, n, i, a, o) {
        return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n)
    },
    NU = function(t) {
        var r = t.x,
            n = r === void 0 ? 0 : r,
            i = t.y,
            a = i === void 0 ? 0 : i,
            o = t.top,
            u = o === void 0 ? 0 : o,
            l = t.left,
            s = l === void 0 ? 0 : l,
            f = t.width,
            c = f === void 0 ? 0 : f,
            d = t.height,
            p = d === void 0 ? 0 : d,
            h = t.className,
            y = kU(t, EU),
            w = $U({
                x: n,
                y: a,
                top: u,
                left: s,
                width: c,
                height: p
            }, y);
        return !W(n) || !W(a) || !W(c) || !W(p) || !W(u) || !W(s) ? null : A.createElement("path", Ap({}, ee(w, !0), {
            className: ie("recharts-cross", h),
            d: IU(n, a, c, p, u, s)
        }))
    },
    DU = Bx,
    LU = DU(Object.getPrototypeOf, Object),
    RU = LU,
    BU = Dr,
    zU = RU,
    FU = Lr,
    UU = "[object Object]",
    WU = Function.prototype,
    HU = Object.prototype,
    AO = WU.toString,
    VU = HU.hasOwnProperty,
    KU = AO.call(Object);

function GU(e) {
    if (!FU(e) || BU(e) != UU) return !1;
    var t = zU(e);
    if (t === null) return !0;
    var r = VU.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && AO.call(r) == KU
}
var qU = GU;
const XU = fe(qU);
var YU = Dr,
    QU = Lr,
    ZU = "[object Boolean]";

function JU(e) {
    return e === !0 || e === !1 || QU(e) && YU(e) == ZU
}
var eW = JU;
const tW = fe(eW);

function Ko(e) {
    "@babel/helpers - typeof";
    return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ko(e)
}

function ss() {
    return ss = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ss.apply(this, arguments)
}

function rW(e, t) {
    return oW(e) || aW(e, t) || iW(e, t) || nW()
}

function nW() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function iW(e, t) {
    if (e) {
        if (typeof e == "string") return eb(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eb(e, t)
    }
}

function eb(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function aW(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function oW(e) {
    if (Array.isArray(e)) return e
}

function tb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function rb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? tb(Object(r), !0).forEach(function(n) {
            uW(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function uW(e, t, r) {
    return t = lW(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function lW(e) {
    var t = sW(e, "string");
    return Ko(t) == "symbol" ? t : t + ""
}

function sW(e, t) {
    if (Ko(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Ko(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var nb = function(t, r, n, i, a) {
        var o = n - i,
            u;
        return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u
    },
    cW = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    },
    fW = function(t) {
        var r = rb(rb({}, cW), t),
            n = F.useRef(),
            i = F.useState(-1),
            a = rW(i, 2),
            o = a[0],
            u = a[1];
        F.useEffect(function() {
            if (n.current && n.current.getTotalLength) try {
                var g = n.current.getTotalLength();
                g && u(g)
            } catch {}
        }, []);
        var l = r.x,
            s = r.y,
            f = r.upperWidth,
            c = r.lowerWidth,
            d = r.height,
            p = r.className,
            h = r.animationEasing,
            y = r.animationDuration,
            w = r.animationBegin,
            m = r.isUpdateAnimationActive;
        if (l !== +l || s !== +s || f !== +f || c !== +c || d !== +d || f === 0 && c === 0 || d === 0) return null;
        var v = ie("recharts-trapezoid", p);
        return m ? A.createElement(Ir, {
            canBegin: o > 0,
            from: {
                upperWidth: 0,
                lowerWidth: 0,
                height: d,
                x: l,
                y: s
            },
            to: {
                upperWidth: f,
                lowerWidth: c,
                height: d,
                x: l,
                y: s
            },
            duration: y,
            animationEasing: h,
            isActive: m
        }, function(g) {
            var S = g.upperWidth,
                b = g.lowerWidth,
                x = g.height,
                O = g.x,
                _ = g.y;
            return A.createElement(Ir, {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: w,
                duration: y,
                easing: h
            }, A.createElement("path", ss({}, ee(r, !0), {
                className: v,
                d: nb(O, _, S, b, x),
                ref: n
            })))
        }) : A.createElement("g", null, A.createElement("path", ss({}, ee(r, !0), {
            className: v,
            d: nb(l, s, f, c, d)
        })))
    },
    dW = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

function Go(e) {
    "@babel/helpers - typeof";
    return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Go(e)
}

function pW(e, t) {
    if (e == null) return {};
    var r = hW(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function hW(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function ib(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function cs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ib(Object(r), !0).forEach(function(n) {
            vW(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ib(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function vW(e, t, r) {
    return t = yW(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function yW(e) {
    var t = mW(e, "string");
    return Go(t) == "symbol" ? t : t + ""
}

function mW(e, t) {
    if (Go(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Go(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function gW(e, t) {
    return cs(cs({}, t), e)
}

function bW(e, t) {
    return e === "symbols"
}

function ab(e) {
    var t = e.shapeType,
        r = e.elementProps;
    switch (t) {
        case "rectangle":
            return A.createElement(Iv, r);
        case "trapezoid":
            return A.createElement(fW, r);
        case "sector":
            return A.createElement(vO, r);
        case "symbols":
            if (bW(t)) return A.createElement(Jh, r);
            break;
        default:
            return null
    }
}

function wW(e) {
    return F.isValidElement(e) ? e.props : e
}

function xW(e) {
    var t = e.option,
        r = e.shapeType,
        n = e.propTransformer,
        i = n === void 0 ? gW : n,
        a = e.activeClassName,
        o = a === void 0 ? "recharts-active-shape" : a,
        u = e.isActive,
        l = pW(e, dW),
        s;
    if (F.isValidElement(t)) s = F.cloneElement(t, cs(cs({}, l), wW(t)));
    else if (Z(t)) s = t(l);
    else if (XU(t) && !tW(t)) {
        var f = i(t, l);
        s = A.createElement(ab, {
            shapeType: r,
            elementProps: f
        })
    } else {
        var c = l;
        s = A.createElement(ab, {
            shapeType: r,
            elementProps: c
        })
    }
    return u ? A.createElement(Te, {
        className: o
    }, s) : s
}

function bc(e, t) {
    return t != null && "trapezoids" in e.props
}

function wc(e, t) {
    return t != null && "sectors" in e.props
}

function qo(e, t) {
    return t != null && "points" in e.props
}

function SW(e, t) {
    var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x,
        a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
    return i && a
}

function OW(e, t) {
    var r = e.endAngle === t.endAngle,
        n = e.startAngle === t.startAngle;
    return r && n
}

function _W(e, t) {
    var r = e.x === t.x,
        n = e.y === t.y,
        i = e.z === t.z;
    return r && n && i
}

function PW(e, t) {
    var r;
    return bc(e, t) ? r = SW : wc(e, t) ? r = OW : qo(e, t) && (r = _W), r
}

function AW(e, t) {
    var r;
    return bc(e, t) ? r = "trapezoids" : wc(e, t) ? r = "sectors" : qo(e, t) && (r = "points"), r
}

function EW(e, t) {
    if (bc(e, t)) {
        var r;
        return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload
    }
    if (wc(e, t)) {
        var n;
        return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload
    }
    return qo(e, t) ? t.payload : {}
}

function $W(e) {
    var t = e.activeTooltipItem,
        r = e.graphicalItem,
        n = e.itemData,
        i = AW(r, t),
        a = EW(r, t),
        o = n.filter(function(l, s) {
            var f = yc(a, l),
                c = r.props[i].filter(function(h) {
                    var y = PW(r, t);
                    return y(h, t)
                }),
                d = r.props[i].indexOf(c[c.length - 1]),
                p = s === d;
            return f && p
        }),
        u = n.indexOf(o[o.length - 1]);
    return u
}
var TW = Math.ceil,
    CW = Math.max;

function jW(e, t, r, n) {
    for (var i = -1, a = CW(TW((t - e) / (r || 1)), 0), o = Array(a); a--;) o[n ? a : ++i] = e, e += r;
    return o
}
var kW = jW,
    MW = iS,
    ob = 1 / 0,
    IW = 17976931348623157e292;

function NW(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = MW(e), e === ob || e === -ob) {
        var t = e < 0 ? -1 : 1;
        return t * IW
    }
    return e === e ? e : 0
}
var EO = NW,
    DW = kW,
    LW = uc,
    Pf = EO;

function RW(e) {
    return function(t, r, n) {
        return n && typeof n != "number" && LW(t, r, n) && (r = n = void 0), t = Pf(t), r === void 0 ? (r = t, t = 0) : r = Pf(r), n = n === void 0 ? t < r ? 1 : -1 : Pf(n), DW(t, r, n, e)
    }
}
var BW = RW,
    zW = BW,
    FW = zW(),
    UW = FW;
const fs = fe(UW);

function Xo(e) {
    "@babel/helpers - typeof";
    return Xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Xo(e)
}

function ub(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function lb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ub(Object(r), !0).forEach(function(n) {
            $O(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ub(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function $O(e, t, r) {
    return t = WW(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function WW(e) {
    var t = HW(e, "string");
    return Xo(t) == "symbol" ? t : t + ""
}

function HW(e, t) {
    if (Xo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Xo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var VW = ["Webkit", "Moz", "O", "ms"],
    KW = function(t, r) {
        var n = t.replace(/(\w)/, function(a) {
                return a.toUpperCase()
            }),
            i = VW.reduce(function(a, o) {
                return lb(lb({}, a), {}, $O({}, o + n, r))
            }, {});
        return i[t] = r, i
    };

function Ki(e) {
    "@babel/helpers - typeof";
    return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ki(e)
}

function ds() {
    return ds = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ds.apply(this, arguments)
}

function sb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Af(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? sb(Object(r), !0).forEach(function(n) {
            mt(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function GW(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function cb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, CO(n.key), n)
    }
}

function qW(e, t, r) {
    return t && cb(e.prototype, t), r && cb(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function XW(e, t, r) {
    return t = ps(t), YW(e, TO() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r))
}

function YW(e, t) {
    if (t && (Ki(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return QW(e)
}

function QW(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function TO() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (TO = function() {
        return !!e
    })()
}

function ps(e) {
    return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ps(e)
}

function ZW(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Ep(e, t)
}

function Ep(e, t) {
    return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Ep(e, t)
}

function mt(e, t, r) {
    return t = CO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function CO(e) {
    var t = JW(e, "string");
    return Ki(t) == "symbol" ? t : t + ""
}

function JW(e, t) {
    if (Ki(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Ki(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var e9 = function(t) {
        var r = t.data,
            n = t.startIndex,
            i = t.endIndex,
            a = t.x,
            o = t.width,
            u = t.travellerWidth;
        if (!r || !r.length) return {};
        var l = r.length,
            s = Za().domain(fs(0, l)).range([a, a + o - u]),
            f = s.domain().map(function(c) {
                return s(c)
            });
        return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            isTravellerFocused: !1,
            startX: s(n),
            endX: s(i),
            scale: s,
            scaleValues: f
        }
    },
    fb = function(t) {
        return t.changedTouches && !!t.changedTouches.length
    },
    Gi = function(e) {
        function t(r) {
            var n;
            return GW(this, t), n = XW(this, t, [r]), mt(n, "handleDrag", function(i) {
                n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i)
            }), mt(n, "handleTouchMove", function(i) {
                i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0])
            }), mt(n, "handleDragEnd", function() {
                n.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !1
                }, function() {
                    var i = n.props,
                        a = i.endIndex,
                        o = i.onDragEnd,
                        u = i.startIndex;
                    o == null || o({
                        endIndex: a,
                        startIndex: u
                    })
                }), n.detachDragEndListener()
            }), mt(n, "handleLeaveWrapper", function() {
                (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut))
            }), mt(n, "handleEnterSlideOrTraveller", function() {
                n.setState({
                    isTextActive: !0
                })
            }), mt(n, "handleLeaveSlideOrTraveller", function() {
                n.setState({
                    isTextActive: !1
                })
            }), mt(n, "handleSlideDragStart", function(i) {
                var a = fb(i) ? i.changedTouches[0] : i;
                n.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !0,
                    slideMoveStartX: a.pageX
                }), n.attachDragEndListener()
            }), n.travellerDragStartHandlers = {
                startX: n.handleTravellerDragStart.bind(n, "startX"),
                endX: n.handleTravellerDragStart.bind(n, "endX")
            }, n.state = {}, n
        }
        return ZW(t, e), qW(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
            }
        }, {
            key: "getIndex",
            value: function(n) {
                var i = n.startX,
                    a = n.endX,
                    o = this.state.scaleValues,
                    u = this.props,
                    l = u.gap,
                    s = u.data,
                    f = s.length - 1,
                    c = Math.min(i, a),
                    d = Math.max(i, a),
                    p = t.getIndexInRange(o, c),
                    h = t.getIndexInRange(o, d);
                return {
                    startIndex: p - p % l,
                    endIndex: h === f ? f : h - h % l
                }
            }
        }, {
            key: "getTextOfTick",
            value: function(n) {
                var i = this.props,
                    a = i.data,
                    o = i.tickFormatter,
                    u = i.dataKey,
                    l = _t(a[n], u, n);
                return Z(o) ? o(l, n) : l
            }
        }, {
            key: "attachDragEndListener",
            value: function() {
                window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0)
            }
        }, {
            key: "detachDragEndListener",
            value: function() {
                window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0)
            }
        }, {
            key: "handleSlideDrag",
            value: function(n) {
                var i = this.state,
                    a = i.slideMoveStartX,
                    o = i.startX,
                    u = i.endX,
                    l = this.props,
                    s = l.x,
                    f = l.width,
                    c = l.travellerWidth,
                    d = l.startIndex,
                    p = l.endIndex,
                    h = l.onChange,
                    y = n.pageX - a;
                y > 0 ? y = Math.min(y, s + f - c - u, s + f - c - o) : y < 0 && (y = Math.max(y, s - o, s - u));
                var w = this.getIndex({
                    startX: o + y,
                    endX: u + y
                });
                (w.startIndex !== d || w.endIndex !== p) && h && h(w), this.setState({
                    startX: o + y,
                    endX: u + y,
                    slideMoveStartX: n.pageX
                })
            }
        }, {
            key: "handleTravellerDragStart",
            value: function(n, i) {
                var a = fb(i) ? i.changedTouches[0] : i;
                this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: n,
                    brushMoveStartX: a.pageX
                }), this.attachDragEndListener()
            }
        }, {
            key: "handleTravellerMove",
            value: function(n) {
                var i = this.state,
                    a = i.brushMoveStartX,
                    o = i.movingTravellerId,
                    u = i.endX,
                    l = i.startX,
                    s = this.state[o],
                    f = this.props,
                    c = f.x,
                    d = f.width,
                    p = f.travellerWidth,
                    h = f.onChange,
                    y = f.gap,
                    w = f.data,
                    m = {
                        startX: this.state.startX,
                        endX: this.state.endX
                    },
                    v = n.pageX - a;
                v > 0 ? v = Math.min(v, c + d - p - s) : v < 0 && (v = Math.max(v, c - s)), m[o] = s + v;
                var g = this.getIndex(m),
                    S = g.startIndex,
                    b = g.endIndex,
                    x = function() {
                        var _ = w.length - 1;
                        return o === "startX" && (u > l ? S % y === 0 : b % y === 0) || u < l && b === _ || o === "endX" && (u > l ? b % y === 0 : S % y === 0) || u > l && b === _
                    };
                this.setState(mt(mt({}, o, s + v), "brushMoveStartX", n.pageX), function() {
                    h && x() && h(g)
                })
            }
        }, {
            key: "handleTravellerMoveKeyboard",
            value: function(n, i) {
                var a = this,
                    o = this.state,
                    u = o.scaleValues,
                    l = o.startX,
                    s = o.endX,
                    f = this.state[i],
                    c = u.indexOf(f);
                if (c !== -1) {
                    var d = c + n;
                    if (!(d === -1 || d >= u.length)) {
                        var p = u[d];
                        i === "startX" && p >= s || i === "endX" && p <= l || this.setState(mt({}, i, p), function() {
                            a.props.onChange(a.getIndex({
                                startX: a.state.startX,
                                endX: a.state.endX
                            }))
                        })
                    }
                }
            }
        }, {
            key: "renderBackground",
            value: function() {
                var n = this.props,
                    i = n.x,
                    a = n.y,
                    o = n.width,
                    u = n.height,
                    l = n.fill,
                    s = n.stroke;
                return A.createElement("rect", {
                    stroke: s,
                    fill: l,
                    x: i,
                    y: a,
                    width: o,
                    height: u
                })
            }
        }, {
            key: "renderPanorama",
            value: function() {
                var n = this.props,
                    i = n.x,
                    a = n.y,
                    o = n.width,
                    u = n.height,
                    l = n.data,
                    s = n.children,
                    f = n.padding,
                    c = F.Children.only(s);
                return c ? A.cloneElement(c, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: l
                }) : null
            }
        }, {
            key: "renderTravellerLayer",
            value: function(n, i) {
                var a, o, u = this,
                    l = this.props,
                    s = l.y,
                    f = l.travellerWidth,
                    c = l.height,
                    d = l.traveller,
                    p = l.ariaLabel,
                    h = l.data,
                    y = l.startIndex,
                    w = l.endIndex,
                    m = Math.max(n, this.props.x),
                    v = Af(Af({}, ee(this.props, !1)), {}, {
                        x: m,
                        y: s,
                        width: f,
                        height: c
                    }),
                    g = p || "Min value: ".concat((a = h[y]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = h[w]) === null || o === void 0 ? void 0 : o.name);
                return A.createElement(Te, {
                    tabIndex: 0,
                    role: "slider",
                    "aria-label": g,
                    "aria-valuenow": n,
                    className: "recharts-brush-traveller",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[i],
                    onTouchStart: this.travellerDragStartHandlers[i],
                    onKeyDown: function(b) {
                        ["ArrowLeft", "ArrowRight"].includes(b.key) && (b.preventDefault(), b.stopPropagation(), u.handleTravellerMoveKeyboard(b.key === "ArrowRight" ? 1 : -1, i))
                    },
                    onFocus: function() {
                        u.setState({
                            isTravellerFocused: !0
                        })
                    },
                    onBlur: function() {
                        u.setState({
                            isTravellerFocused: !1
                        })
                    },
                    style: {
                        cursor: "col-resize"
                    }
                }, t.renderTraveller(d, v))
            }
        }, {
            key: "renderSlide",
            value: function(n, i) {
                var a = this.props,
                    o = a.y,
                    u = a.height,
                    l = a.stroke,
                    s = a.travellerWidth,
                    f = Math.min(n, i) + s,
                    c = Math.max(Math.abs(i - n) - s, 0);
                return A.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: {
                        cursor: "move"
                    },
                    stroke: "none",
                    fill: l,
                    fillOpacity: .2,
                    x: f,
                    y: o,
                    width: c,
                    height: u
                })
            }
        }, {
            key: "renderText",
            value: function() {
                var n = this.props,
                    i = n.startIndex,
                    a = n.endIndex,
                    o = n.y,
                    u = n.height,
                    l = n.travellerWidth,
                    s = n.stroke,
                    f = this.state,
                    c = f.startX,
                    d = f.endX,
                    p = 5,
                    h = {
                        pointerEvents: "none",
                        fill: s
                    };
                return A.createElement(Te, {
                    className: "recharts-brush-texts"
                }, A.createElement(Ul, ds({
                    textAnchor: "end",
                    verticalAnchor: "middle",
                    x: Math.min(c, d) - p,
                    y: o + u / 2
                }, h), this.getTextOfTick(i)), A.createElement(Ul, ds({
                    textAnchor: "start",
                    verticalAnchor: "middle",
                    x: Math.max(c, d) + l + p,
                    y: o + u / 2
                }, h), this.getTextOfTick(a)))
            }
        }, {
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.data,
                    a = n.className,
                    o = n.children,
                    u = n.x,
                    l = n.y,
                    s = n.width,
                    f = n.height,
                    c = n.alwaysShowText,
                    d = this.state,
                    p = d.startX,
                    h = d.endX,
                    y = d.isTextActive,
                    w = d.isSlideMoving,
                    m = d.isTravellerMoving,
                    v = d.isTravellerFocused;
                if (!i || !i.length || !W(u) || !W(l) || !W(s) || !W(f) || s <= 0 || f <= 0) return null;
                var g = ie("recharts-brush", a),
                    S = A.Children.count(o) === 1,
                    b = KW("userSelect", "none");
                return A.createElement(Te, {
                    className: g,
                    onMouseLeave: this.handleLeaveWrapper,
                    onTouchMove: this.handleTouchMove,
                    style: b
                }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(p, h), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(h, "endX"), (y || w || m || v || c) && this.renderText())
            }
        }], [{
            key: "renderDefaultTraveller",
            value: function(n) {
                var i = n.x,
                    a = n.y,
                    o = n.width,
                    u = n.height,
                    l = n.stroke,
                    s = Math.floor(a + u / 2) - 1;
                return A.createElement(A.Fragment, null, A.createElement("rect", {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    fill: l,
                    stroke: "none"
                }), A.createElement("line", {
                    x1: i + 1,
                    y1: s,
                    x2: i + o - 1,
                    y2: s,
                    fill: "none",
                    stroke: "#fff"
                }), A.createElement("line", {
                    x1: i + 1,
                    y1: s + 2,
                    x2: i + o - 1,
                    y2: s + 2,
                    fill: "none",
                    stroke: "#fff"
                }))
            }
        }, {
            key: "renderTraveller",
            value: function(n, i) {
                var a;
                return A.isValidElement(n) ? a = A.cloneElement(n, i) : Z(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a
            }
        }, {
            key: "getDerivedStateFromProps",
            value: function(n, i) {
                var a = n.data,
                    o = n.width,
                    u = n.x,
                    l = n.travellerWidth,
                    s = n.updateId,
                    f = n.startIndex,
                    c = n.endIndex;
                if (a !== i.prevData || s !== i.prevUpdateId) return Af({
                    prevData: a,
                    prevTravellerWidth: l,
                    prevUpdateId: s,
                    prevX: u,
                    prevWidth: o
                }, a && a.length ? e9({
                    data: a,
                    width: o,
                    x: u,
                    travellerWidth: l,
                    startIndex: f,
                    endIndex: c
                }) : {
                    scale: null,
                    scaleValues: null
                });
                if (i.scale && (o !== i.prevWidth || u !== i.prevX || l !== i.prevTravellerWidth)) {
                    i.scale.range([u, u + o - l]);
                    var d = i.scale.domain().map(function(p) {
                        return i.scale(p)
                    });
                    return {
                        prevData: a,
                        prevTravellerWidth: l,
                        prevUpdateId: s,
                        prevX: u,
                        prevWidth: o,
                        startX: i.scale(n.startIndex),
                        endX: i.scale(n.endIndex),
                        scaleValues: d
                    }
                }
                return null
            }
        }, {
            key: "getIndexInRange",
            value: function(n, i) {
                for (var a = n.length, o = 0, u = a - 1; u - o > 1;) {
                    var l = Math.floor((o + u) / 2);
                    n[l] > i ? u = l : o = l
                }
                return i >= n[u] ? u : o
            }
        }])
    }(F.PureComponent);
mt(Gi, "displayName", "Brush");
mt(Gi, "defaultProps", {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    leaveTimeOut: 1e3,
    alwaysShowText: !1
});
var t9 = ov;

function r9(e, t) {
    var r;
    return t9(e, function(n, i, a) {
        return r = t(n, i, a), !r
    }), !!r
}
var n9 = r9,
    i9 = jx,
    a9 = pn,
    o9 = n9,
    u9 = vt,
    l9 = uc;

function s9(e, t, r) {
    var n = u9(e) ? i9 : o9;
    return r && l9(e, t, r) && (t = void 0), n(e, a9(t))
}
var c9 = s9;
const f9 = fe(c9);
var cr = function(t, r) {
        var n = t.alwaysShow,
            i = t.ifOverflow;
        return n && (i = "extendDomain"), i === r
    },
    db = Jx;

function d9(e, t, r) {
    t == "__proto__" && db ? db(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : e[t] = r
}
var p9 = d9,
    h9 = p9,
    v9 = Qx,
    y9 = pn;

function m9(e, t) {
    var r = {};
    return t = y9(t), v9(e, function(n, i, a) {
        h9(r, i, t(n, i, a))
    }), r
}
var g9 = m9;
const b9 = fe(g9);

function w9(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (!t(e[r], r, e)) return !1;
    return !0
}
var x9 = w9,
    S9 = ov;

function O9(e, t) {
    var r = !0;
    return S9(e, function(n, i, a) {
        return r = !!t(n, i, a), r
    }), r
}
var _9 = O9,
    P9 = x9,
    A9 = _9,
    E9 = pn,
    $9 = vt,
    T9 = uc;

function C9(e, t, r) {
    var n = $9(e) ? P9 : A9;
    return r && T9(e, t, r) && (t = void 0), n(e, E9(t))
}
var j9 = C9;
const jO = fe(j9);
var k9 = ["x", "y"];

function Yo(e) {
    "@babel/helpers - typeof";
    return Yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Yo(e)
}

function $p() {
    return $p = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, $p.apply(this, arguments)
}

function pb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Da(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? pb(Object(r), !0).forEach(function(n) {
            M9(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function M9(e, t, r) {
    return t = I9(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function I9(e) {
    var t = N9(e, "string");
    return Yo(t) == "symbol" ? t : t + ""
}

function N9(e, t) {
    if (Yo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Yo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function D9(e, t) {
    if (e == null) return {};
    var r = L9(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function L9(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function R9(e, t) {
    var r = e.x,
        n = e.y,
        i = D9(e, k9),
        a = "".concat(r),
        o = parseInt(a, 10),
        u = "".concat(n),
        l = parseInt(u, 10),
        s = "".concat(t.height || i.height),
        f = parseInt(s, 10),
        c = "".concat(t.width || i.width),
        d = parseInt(c, 10);
    return Da(Da(Da(Da(Da({}, t), i), o ? {
        x: o
    } : {}), l ? {
        y: l
    } : {}), {}, {
        height: f,
        width: d,
        name: t.name,
        radius: t.radius
    })
}

function hb(e) {
    return A.createElement(xW, $p({
        shapeType: "rectangle",
        propTransformer: R9,
        activeClassName: "recharts-active-bar"
    }, e))
}
var B9 = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return function(n, i) {
            if (typeof t == "number") return t;
            var a = W(n) || rC(n);
            return a ? t(n, i) : (a || Hn(), r)
        }
    },
    z9 = ["value", "background"],
    kO;

function qi(e) {
    "@babel/helpers - typeof";
    return qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, qi(e)
}

function F9(e, t) {
    if (e == null) return {};
    var r = U9(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function U9(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function hs() {
    return hs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, hs.apply(this, arguments)
}

function vb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ce(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? vb(Object(r), !0).forEach(function(n) {
            Xr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function W9(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function yb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, IO(n.key), n)
    }
}

function H9(e, t, r) {
    return t && yb(e.prototype, t), r && yb(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function V9(e, t, r) {
    return t = vs(t), K9(e, MO() ? Reflect.construct(t, r || [], vs(e).constructor) : t.apply(e, r))
}

function K9(e, t) {
    if (t && (qi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return G9(e)
}

function G9(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function MO() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (MO = function() {
        return !!e
    })()
}

function vs(e) {
    return vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, vs(e)
}

function q9(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Tp(e, t)
}

function Tp(e, t) {
    return Tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Tp(e, t)
}

function Xr(e, t, r) {
    return t = IO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function IO(e) {
    var t = X9(e, "string");
    return qi(t) == "symbol" ? t : t + ""
}

function X9(e, t) {
    if (qi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (qi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var ma = function(e) {
    function t() {
        var r;
        W9(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
        return r = V9(this, t, [].concat(i)), Xr(r, "state", {
            isAnimationFinished: !1
        }), Xr(r, "id", uu("recharts-bar-")), Xr(r, "handleAnimationEnd", function() {
            var o = r.props.onAnimationEnd;
            r.setState({
                isAnimationFinished: !0
            }), o && o()
        }), Xr(r, "handleAnimationStart", function() {
            var o = r.props.onAnimationStart;
            r.setState({
                isAnimationFinished: !1
            }), o && o()
        }), r
    }
    return q9(t, e), H9(t, [{
        key: "renderRectanglesStatically",
        value: function(n) {
            var i = this,
                a = this.props,
                o = a.shape,
                u = a.dataKey,
                l = a.activeIndex,
                s = a.activeBar,
                f = ee(this.props, !1);
            return n && n.map(function(c, d) {
                var p = d === l,
                    h = p ? s : o,
                    y = Ce(Ce(Ce({}, f), c), {}, {
                        isActive: p,
                        option: h,
                        index: d,
                        dataKey: u,
                        onAnimationStart: i.handleAnimationStart,
                        onAnimationEnd: i.handleAnimationEnd
                    });
                return A.createElement(Te, hs({
                    className: "recharts-bar-rectangle"
                }, $l(i.props, c, d), {
                    key: "rectangle-".concat(c == null ? void 0 : c.x, "-").concat(c == null ? void 0 : c.y, "-").concat(c == null ? void 0 : c.value, "-").concat(d)
                }), A.createElement(hb, y))
            })
        }
    }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
            var n = this,
                i = this.props,
                a = i.data,
                o = i.layout,
                u = i.isAnimationActive,
                l = i.animationBegin,
                s = i.animationDuration,
                f = i.animationEasing,
                c = i.animationId,
                d = this.state.prevData;
            return A.createElement(Ir, {
                begin: l,
                duration: s,
                isActive: u,
                easing: f,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "bar-".concat(c),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, function(p) {
                var h = p.t,
                    y = a.map(function(w, m) {
                        var v = d && d[m];
                        if (v) {
                            var g = Yt(v.x, w.x),
                                S = Yt(v.y, w.y),
                                b = Yt(v.width, w.width),
                                x = Yt(v.height, w.height);
                            return Ce(Ce({}, w), {}, {
                                x: g(h),
                                y: S(h),
                                width: b(h),
                                height: x(h)
                            })
                        }
                        if (o === "horizontal") {
                            var O = Yt(0, w.height),
                                _ = O(h);
                            return Ce(Ce({}, w), {}, {
                                y: w.y + w.height - _,
                                height: _
                            })
                        }
                        var P = Yt(0, w.width),
                            $ = P(h);
                        return Ce(Ce({}, w), {}, {
                            width: $
                        })
                    });
                return A.createElement(Te, null, n.renderRectanglesStatically(y))
            })
        }
    }, {
        key: "renderRectangles",
        value: function() {
            var n = this.props,
                i = n.data,
                a = n.isAnimationActive,
                o = this.state.prevData;
            return a && i && i.length && (!o || !yc(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i)
        }
    }, {
        key: "renderBackground",
        value: function() {
            var n = this,
                i = this.props,
                a = i.data,
                o = i.dataKey,
                u = i.activeIndex,
                l = ee(this.props.background, !1);
            return a.map(function(s, f) {
                s.value;
                var c = s.background,
                    d = F9(s, z9);
                if (!c) return null;
                var p = Ce(Ce(Ce(Ce(Ce({}, d), {}, {
                    fill: "#eee"
                }, c), l), $l(n.props, s, f)), {}, {
                    onAnimationStart: n.handleAnimationStart,
                    onAnimationEnd: n.handleAnimationEnd,
                    dataKey: o,
                    index: f,
                    className: "recharts-bar-background-rectangle"
                });
                return A.createElement(hb, hs({
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u
                }, p))
            })
        }
    }, {
        key: "renderErrorBar",
        value: function(n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var a = this.props,
                o = a.data,
                u = a.xAxis,
                l = a.yAxis,
                s = a.layout,
                f = a.children,
                c = Lt(f, pu);
            if (!c) return null;
            var d = s === "vertical" ? o[0].height / 2 : o[0].width / 2,
                p = function(w, m) {
                    var v = Array.isArray(w.value) ? w.value[1] : w.value;
                    return {
                        x: w.x,
                        y: w.y,
                        value: v,
                        errorVal: _t(w, m)
                    }
                },
                h = {
                    clipPath: n ? "url(#clipPath-".concat(i, ")") : null
                };
            return A.createElement(Te, h, c.map(function(y) {
                return A.cloneElement(y, {
                    key: "error-bar-".concat(i, "-").concat(y.props.dataKey),
                    data: o,
                    xAxis: u,
                    yAxis: l,
                    layout: s,
                    offset: d,
                    dataPointFormatter: p
                })
            }))
        }
    }, {
        key: "render",
        value: function() {
            var n = this.props,
                i = n.hide,
                a = n.data,
                o = n.className,
                u = n.xAxis,
                l = n.yAxis,
                s = n.left,
                f = n.top,
                c = n.width,
                d = n.height,
                p = n.isAnimationActive,
                h = n.background,
                y = n.id;
            if (i || !a || !a.length) return null;
            var w = this.state.isAnimationFinished,
                m = ie("recharts-bar", o),
                v = u && u.allowDataOverflow,
                g = l && l.allowDataOverflow,
                S = v || g,
                b = J(y) ? this.id : y;
            return A.createElement(Te, {
                className: m
            }, v || g ? A.createElement("defs", null, A.createElement("clipPath", {
                id: "clipPath-".concat(b)
            }, A.createElement("rect", {
                x: v ? s : s - c / 2,
                y: g ? f : f - d / 2,
                width: v ? c : c * 2,
                height: g ? d : d * 2
            }))) : null, A.createElement(Te, {
                className: "recharts-bar-rectangles",
                clipPath: S ? "url(#clipPath-".concat(b, ")") : null
            }, h ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, b), (!p || w) && on.renderCallByParent(this.props, a))
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function(n, i) {
            return n.animationId !== i.prevAnimationId ? {
                prevAnimationId: n.animationId,
                curData: n.data,
                prevData: i.curData
            } : n.data !== i.curData ? {
                curData: n.data
            } : null
        }
    }])
}(F.PureComponent);
kO = ma;
Xr(ma, "displayName", "Bar");
Xr(ma, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: !1,
    data: [],
    layout: "vertical",
    activeBar: !1,
    isAnimationActive: !Pr.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease"
});
Xr(ma, "getComposedData", function(e) {
    var t = e.props,
        r = e.item,
        n = e.barPosition,
        i = e.bandSize,
        a = e.xAxis,
        o = e.yAxis,
        u = e.xAxisTicks,
        l = e.yAxisTicks,
        s = e.stackedData,
        f = e.dataStartIndex,
        c = e.displayedData,
        d = e.offset,
        p = PF(n, r);
    if (!p) return null;
    var h = t.layout,
        y = r.type.defaultProps,
        w = y !== void 0 ? Ce(Ce({}, y), r.props) : r.props,
        m = w.dataKey,
        v = w.children,
        g = w.minPointSize,
        S = h === "horizontal" ? o : a,
        b = s ? S.scale.domain() : null,
        x = MF({
            numericAxis: S
        }),
        O = Lt(v, oS),
        _ = c.map(function(P, $) {
            var E, T, I, N, k, D;
            s ? E = AF(s[f + $], b) : (E = _t(P, m), Array.isArray(E) || (E = [x, E]));
            var L = B9(g, kO.defaultProps.minPointSize)(E[1], $);
            if (h === "horizontal") {
                var C, M = [o.scale(E[0]), o.scale(E[1])],
                    B = M[0],
                    H = M[1];
                T = v0({
                    axis: a,
                    ticks: u,
                    bandSize: i,
                    offset: p.offset,
                    entry: P,
                    index: $
                }), I = (C = H ? ? B) !== null && C !== void 0 ? C : void 0, N = p.size;
                var U = B - H;
                if (k = Number.isNaN(U) ? 0 : U, D = {
                        x: T,
                        y: o.y,
                        width: N,
                        height: o.height
                    }, Math.abs(L) > 0 && Math.abs(k) < Math.abs(L)) {
                    var q = Zt(k || L) * (Math.abs(L) - Math.abs(k));
                    I -= q, k += q
                }
            } else {
                var te = [a.scale(E[0]), a.scale(E[1])],
                    ge = te[0],
                    Ee = te[1];
                if (T = ge, I = v0({
                        axis: o,
                        ticks: l,
                        bandSize: i,
                        offset: p.offset,
                        entry: P,
                        index: $
                    }), N = Ee - ge, k = p.size, D = {
                        x: a.x,
                        y: I,
                        width: a.width,
                        height: k
                    }, Math.abs(L) > 0 && Math.abs(N) < Math.abs(L)) {
                    var Et = Zt(N || L) * (Math.abs(L) - Math.abs(N));
                    N += Et
                }
            }
            return Ce(Ce(Ce({}, P), {}, {
                x: T,
                y: I,
                width: N,
                height: k,
                value: s ? E : E[1],
                payload: P,
                background: D
            }, O && O[$] && O[$].props), {}, {
                tooltipPayload: [dO(r, P)],
                tooltipPosition: {
                    x: T + N / 2,
                    y: I + k / 2
                }
            })
        });
    return Ce({
        data: _,
        layout: h
    }, d)
});

function Qo(e) {
    "@babel/helpers - typeof";
    return Qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Qo(e)
}

function Y9(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function mb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, NO(n.key), n)
    }
}

function Q9(e, t, r) {
    return t && mb(e.prototype, t), r && mb(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function gb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Gt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? gb(Object(r), !0).forEach(function(n) {
            xc(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function xc(e, t, r) {
    return t = NO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function NO(e) {
    var t = Z9(e, "string");
    return Qo(t) == "symbol" ? t : t + ""
}

function Z9(e, t) {
    if (Qo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Qo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var DO = function(t, r, n, i, a) {
        var o = t.width,
            u = t.height,
            l = t.layout,
            s = t.children,
            f = Object.keys(r),
            c = {
                left: n.left,
                leftMirror: n.left,
                right: o - n.right,
                rightMirror: o - n.right,
                top: n.top,
                topMirror: n.top,
                bottom: u - n.bottom,
                bottomMirror: u - n.bottom
            },
            d = !!bt(s, ma);
        return f.reduce(function(p, h) {
            var y = r[h],
                w = y.orientation,
                m = y.domain,
                v = y.padding,
                g = v === void 0 ? {} : v,
                S = y.mirror,
                b = y.reversed,
                x = "".concat(w).concat(S ? "Mirror" : ""),
                O, _, P, $, E;
            if (y.type === "number" && (y.padding === "gap" || y.padding === "no-gap")) {
                var T = m[1] - m[0],
                    I = 1 / 0,
                    N = y.categoricalDomain.sort(aC);
                if (N.forEach(function(te, ge) {
                        ge > 0 && (I = Math.min((te || 0) - (N[ge - 1] || 0), I))
                    }), Number.isFinite(I)) {
                    var k = I / T,
                        D = y.layout === "vertical" ? n.height : n.width;
                    if (y.padding === "gap" && (O = k * D / 2), y.padding === "no-gap") {
                        var L = Un(t.barCategoryGap, k * D),
                            C = k * D / 2;
                        O = C - L - (C - L) / D * L
                    }
                }
            }
            i === "xAxis" ? _ = [n.left + (g.left || 0) + (O || 0), n.left + n.width - (g.right || 0) - (O || 0)] : i === "yAxis" ? _ = l === "horizontal" ? [n.top + n.height - (g.bottom || 0), n.top + (g.top || 0)] : [n.top + (g.top || 0) + (O || 0), n.top + n.height - (g.bottom || 0) - (O || 0)] : _ = y.range, b && (_ = [_[1], _[0]]);
            var M = OF(y, a, d),
                B = M.scale,
                H = M.realScaleType;
            B.domain(m).range(_), _F(B);
            var U = kF(B, Gt(Gt({}, y), {}, {
                realScaleType: H
            }));
            i === "xAxis" ? (E = w === "top" && !S || w === "bottom" && S, P = n.left, $ = c[x] - E * y.height) : i === "yAxis" && (E = w === "left" && !S || w === "right" && S, P = c[x] - E * y.width, $ = n.top);
            var q = Gt(Gt(Gt({}, y), U), {}, {
                realScaleType: H,
                x: P,
                y: $,
                scale: B,
                width: i === "xAxis" ? n.width : y.width,
                height: i === "yAxis" ? n.height : y.height
            });
            return q.bandSize = rs(q, U), !y.hide && i === "xAxis" ? c[x] += (E ? -1 : 1) * q.height : y.hide || (c[x] += (E ? -1 : 1) * q.width), Gt(Gt({}, p), {}, xc({}, h, q))
        }, {})
    },
    LO = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return {
            x: Math.min(n, a),
            y: Math.min(i, o),
            width: Math.abs(a - n),
            height: Math.abs(o - i)
        }
    },
    J9 = function(t) {
        var r = t.x1,
            n = t.y1,
            i = t.x2,
            a = t.y2;
        return LO({
            x: r,
            y: n
        }, {
            x: i,
            y: a
        })
    },
    RO = function() {
        function e(t) {
            Y9(this, e), this.scale = t
        }
        return Q9(e, [{
            key: "domain",
            get: function() {
                return this.scale.domain
            }
        }, {
            key: "range",
            get: function() {
                return this.scale.range
            }
        }, {
            key: "rangeMin",
            get: function() {
                return this.range()[0]
            }
        }, {
            key: "rangeMax",
            get: function() {
                return this.range()[1]
            }
        }, {
            key: "bandwidth",
            get: function() {
                return this.scale.bandwidth
            }
        }, {
            key: "apply",
            value: function(r) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    i = n.bandAware,
                    a = n.position;
                if (r !== void 0) {
                    if (a) switch (a) {
                        case "start":
                            return this.scale(r);
                        case "middle":
                            {
                                var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(r) + o
                            }
                        case "end":
                            {
                                var u = this.bandwidth ? this.bandwidth() : 0;
                                return this.scale(r) + u
                            }
                        default:
                            return this.scale(r)
                    }
                    if (i) {
                        var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(r) + l
                    }
                    return this.scale(r)
                }
            }
        }, {
            key: "isInRange",
            value: function(r) {
                var n = this.range(),
                    i = n[0],
                    a = n[n.length - 1];
                return i <= a ? r >= i && r <= a : r >= a && r <= i
            }
        }], [{
            key: "create",
            value: function(r) {
                return new e(r)
            }
        }])
    }();
xc(RO, "EPS", 1e-4);
var Dv = function(t) {
    var r = Object.keys(t).reduce(function(n, i) {
        return Gt(Gt({}, n), {}, xc({}, i, RO.create(t[i])))
    }, {});
    return Gt(Gt({}, r), {}, {
        apply: function(i) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                o = a.bandAware,
                u = a.position;
            return b9(i, function(l, s) {
                return r[s].apply(l, {
                    bandAware: o,
                    position: u
                })
            })
        },
        isInRange: function(i) {
            return jO(i, function(a, o) {
                return r[o].isInRange(a)
            })
        }
    })
};

function eH(e) {
    return (e % 180 + 180) % 180
}
var tH = function(t) {
        var r = t.width,
            n = t.height,
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
            a = eH(i),
            o = a * Math.PI / 180,
            u = Math.atan(n / r),
            l = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
        return Math.abs(l)
    },
    rH = pn,
    nH = lu,
    iH = ac;

function aH(e) {
    return function(t, r, n) {
        var i = Object(t);
        if (!nH(t)) {
            var a = rH(r);
            t = iH(t), r = function(u) {
                return a(i[u], u, i)
            }
        }
        var o = e(t, r, n);
        return o > -1 ? i[a ? t[o] : o] : void 0
    }
}
var oH = aH,
    uH = EO;

function lH(e) {
    var t = uH(e),
        r = t % 1;
    return t === t ? r ? t - r : t : 0
}
var sH = lH,
    cH = Vx,
    fH = pn,
    dH = sH,
    pH = Math.max;

function hH(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (!n) return -1;
    var i = r == null ? 0 : dH(r);
    return i < 0 && (i = pH(n + i, 0)), cH(e, fH(t), i)
}
var vH = hH,
    yH = oH,
    mH = vH,
    gH = yH(mH),
    bH = gH;
const wH = fe(bH);
var xH = oT(function(e) {
        return {
            x: e.left,
            y: e.top,
            width: e.width,
            height: e.height
        }
    }, function(e) {
        return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("")
    }),
    Lv = F.createContext(void 0),
    Rv = F.createContext(void 0),
    BO = F.createContext(void 0),
    zO = F.createContext({}),
    FO = F.createContext(void 0),
    UO = F.createContext(0),
    WO = F.createContext(0),
    bb = function(t) {
        var r = t.state,
            n = r.xAxisMap,
            i = r.yAxisMap,
            a = r.offset,
            o = t.clipPathId,
            u = t.children,
            l = t.width,
            s = t.height,
            f = xH(a);
        return A.createElement(Lv.Provider, {
            value: n
        }, A.createElement(Rv.Provider, {
            value: i
        }, A.createElement(zO.Provider, {
            value: a
        }, A.createElement(BO.Provider, {
            value: f
        }, A.createElement(FO.Provider, {
            value: o
        }, A.createElement(UO.Provider, {
            value: s
        }, A.createElement(WO.Provider, {
            value: l
        }, u)))))))
    },
    SH = function() {
        return F.useContext(FO)
    },
    HO = function(t) {
        var r = F.useContext(Lv);
        r == null && Hn();
        var n = r[t];
        return n == null && Hn(), n
    },
    OH = function() {
        var t = F.useContext(Lv);
        return Kr(t)
    },
    _H = function() {
        var t = F.useContext(Rv),
            r = wH(t, function(n) {
                return jO(n.domain, Number.isFinite)
            });
        return r || Kr(t)
    },
    VO = function(t) {
        var r = F.useContext(Rv);
        r == null && Hn();
        var n = r[t];
        return n == null && Hn(), n
    },
    PH = function() {
        var t = F.useContext(BO);
        return t
    },
    AH = function() {
        return F.useContext(zO)
    },
    Bv = function() {
        return F.useContext(WO)
    },
    zv = function() {
        return F.useContext(UO)
    };

function Xi(e) {
    "@babel/helpers - typeof";
    return Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Xi(e)
}

function EH(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function $H(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, GO(n.key), n)
    }
}

function TH(e, t, r) {
    return t && $H(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function CH(e, t, r) {
    return t = ys(t), jH(e, KO() ? Reflect.construct(t, r || [], ys(e).constructor) : t.apply(e, r))
}

function jH(e, t) {
    if (t && (Xi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return kH(e)
}

function kH(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function KO() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (KO = function() {
        return !!e
    })()
}

function ys(e) {
    return ys = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ys(e)
}

function MH(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Cp(e, t)
}

function Cp(e, t) {
    return Cp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Cp(e, t)
}

function wb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function xb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wb(Object(r), !0).forEach(function(n) {
            Fv(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Fv(e, t, r) {
    return t = GO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function GO(e) {
    var t = IH(e, "string");
    return Xi(t) == "symbol" ? t : t + ""
}

function IH(e, t) {
    if (Xi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Xi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function NH(e, t) {
    return BH(e) || RH(e, t) || LH(e, t) || DH()
}

function DH() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function LH(e, t) {
    if (e) {
        if (typeof e == "string") return Sb(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sb(e, t)
    }
}

function Sb(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function RH(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function BH(e) {
    if (Array.isArray(e)) return e
}

function jp() {
    return jp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, jp.apply(this, arguments)
}
var zH = function(t, r) {
        var n;
        return A.isValidElement(t) ? n = A.cloneElement(t, r) : Z(t) ? n = t(r) : n = A.createElement("line", jp({}, r, {
            className: "recharts-reference-line-line"
        })), n
    },
    FH = function(t, r, n, i, a, o, u, l, s) {
        var f = a.x,
            c = a.y,
            d = a.width,
            p = a.height;
        if (n) {
            var h = s.y,
                y = t.y.apply(h, {
                    position: o
                });
            if (cr(s, "discard") && !t.y.isInRange(y)) return null;
            var w = [{
                x: f + d,
                y
            }, {
                x: f,
                y
            }];
            return l === "left" ? w.reverse() : w
        }
        if (r) {
            var m = s.x,
                v = t.x.apply(m, {
                    position: o
                });
            if (cr(s, "discard") && !t.x.isInRange(v)) return null;
            var g = [{
                x: v,
                y: c + p
            }, {
                x: v,
                y: c
            }];
            return u === "top" ? g.reverse() : g
        }
        if (i) {
            var S = s.segment,
                b = S.map(function(x) {
                    return t.apply(x, {
                        position: o
                    })
                });
            return cr(s, "discard") && f9(b, function(x) {
                return !t.isInRange(x)
            }) ? null : b
        }
        return null
    };

function UH(e) {
    var t = e.x,
        r = e.y,
        n = e.segment,
        i = e.xAxisId,
        a = e.yAxisId,
        o = e.shape,
        u = e.className,
        l = e.alwaysShow,
        s = SH(),
        f = HO(i),
        c = VO(a),
        d = PH();
    if (!s || !d) return null;
    _r(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var p = Dv({
            x: f.scale,
            y: c.scale
        }),
        h = Be(t),
        y = Be(r),
        w = n && n.length === 2,
        m = FH(p, h, y, w, d, e.position, f.orientation, c.orientation, e);
    if (!m) return null;
    var v = NH(m, 2),
        g = v[0],
        S = g.x,
        b = g.y,
        x = v[1],
        O = x.x,
        _ = x.y,
        P = cr(e, "hidden") ? "url(#".concat(s, ")") : void 0,
        $ = xb(xb({
            clipPath: P
        }, ee(e, !0)), {}, {
            x1: S,
            y1: b,
            x2: O,
            y2: _
        });
    return A.createElement(Te, {
        className: ie("recharts-reference-line", u)
    }, zH(o, $), et.renderCallByParent(e, J9({
        x1: S,
        y1: b,
        x2: O,
        y2: _
    })))
}
var Uv = function(e) {
    function t() {
        return EH(this, t), CH(this, t, arguments)
    }
    return MH(t, e), TH(t, [{
        key: "render",
        value: function() {
            return A.createElement(UH, this.props)
        }
    }])
}(A.Component);
Fv(Uv, "displayName", "ReferenceLine");
Fv(Uv, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle"
});

function kp() {
    return kp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, kp.apply(this, arguments)
}

function Yi(e) {
    "@babel/helpers - typeof";
    return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Yi(e)
}

function Ob(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function _b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ob(Object(r), !0).forEach(function(n) {
            Sc(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ob(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function WH(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function HH(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, XO(n.key), n)
    }
}

function VH(e, t, r) {
    return t && HH(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function KH(e, t, r) {
    return t = ms(t), GH(e, qO() ? Reflect.construct(t, r || [], ms(e).constructor) : t.apply(e, r))
}

function GH(e, t) {
    if (t && (Yi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return qH(e)
}

function qH(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function qO() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (qO = function() {
        return !!e
    })()
}

function ms(e) {
    return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ms(e)
}

function XH(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Mp(e, t)
}

function Mp(e, t) {
    return Mp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Mp(e, t)
}

function Sc(e, t, r) {
    return t = XO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function XO(e) {
    var t = YH(e, "string");
    return Yi(t) == "symbol" ? t : t + ""
}

function YH(e, t) {
    if (Yi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Yi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var QH = function(t) {
        var r = t.x,
            n = t.y,
            i = t.xAxis,
            a = t.yAxis,
            o = Dv({
                x: i.scale,
                y: a.scale
            }),
            u = o.apply({
                x: r,
                y: n
            }, {
                bandAware: !0
            });
        return cr(t, "discard") && !o.isInRange(u) ? null : u
    },
    Oc = function(e) {
        function t() {
            return WH(this, t), KH(this, t, arguments)
        }
        return XH(t, e), VH(t, [{
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.x,
                    a = n.y,
                    o = n.r,
                    u = n.alwaysShow,
                    l = n.clipPathId,
                    s = Be(i),
                    f = Be(a);
                if (_r(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !f) return null;
                var c = QH(this.props);
                if (!c) return null;
                var d = c.x,
                    p = c.y,
                    h = this.props,
                    y = h.shape,
                    w = h.className,
                    m = cr(this.props, "hidden") ? "url(#".concat(l, ")") : void 0,
                    v = _b(_b({
                        clipPath: m
                    }, ee(this.props, !0)), {}, {
                        cx: d,
                        cy: p
                    });
                return A.createElement(Te, {
                    className: ie("recharts-reference-dot", w)
                }, t.renderDot(y, v), et.renderCallByParent(this.props, {
                    x: d - o,
                    y: p - o,
                    width: 2 * o,
                    height: 2 * o
                }))
            }
        }])
    }(A.Component);
Sc(Oc, "displayName", "ReferenceDot");
Sc(Oc, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1
});
Sc(Oc, "renderDot", function(e, t) {
    var r;
    return A.isValidElement(e) ? r = A.cloneElement(e, t) : Z(e) ? r = e(t) : r = A.createElement(Nv, kp({}, t, {
        cx: t.cx,
        cy: t.cy,
        className: "recharts-reference-dot-dot"
    })), r
});

function Ip() {
    return Ip = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ip.apply(this, arguments)
}

function Qi(e) {
    "@babel/helpers - typeof";
    return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Qi(e)
}

function Pb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ab(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Pb(Object(r), !0).forEach(function(n) {
            _c(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ZH(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function JH(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, QO(n.key), n)
    }
}

function e7(e, t, r) {
    return t && JH(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function t7(e, t, r) {
    return t = gs(t), r7(e, YO() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r))
}

function r7(e, t) {
    if (t && (Qi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return n7(e)
}

function n7(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function YO() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (YO = function() {
        return !!e
    })()
}

function gs(e) {
    return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, gs(e)
}

function i7(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Np(e, t)
}

function Np(e, t) {
    return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Np(e, t)
}

function _c(e, t, r) {
    return t = QO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function QO(e) {
    var t = a7(e, "string");
    return Qi(t) == "symbol" ? t : t + ""
}

function a7(e, t) {
    if (Qi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Qi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var o7 = function(t, r, n, i, a) {
        var o = a.x1,
            u = a.x2,
            l = a.y1,
            s = a.y2,
            f = a.xAxis,
            c = a.yAxis;
        if (!f || !c) return null;
        var d = Dv({
                x: f.scale,
                y: c.scale
            }),
            p = {
                x: t ? d.x.apply(o, {
                    position: "start"
                }) : d.x.rangeMin,
                y: n ? d.y.apply(l, {
                    position: "start"
                }) : d.y.rangeMin
            },
            h = {
                x: r ? d.x.apply(u, {
                    position: "end"
                }) : d.x.rangeMax,
                y: i ? d.y.apply(s, {
                    position: "end"
                }) : d.y.rangeMax
            };
        return cr(a, "discard") && (!d.isInRange(p) || !d.isInRange(h)) ? null : LO(p, h)
    },
    Pc = function(e) {
        function t() {
            return ZH(this, t), t7(this, t, arguments)
        }
        return i7(t, e), e7(t, [{
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.x1,
                    a = n.x2,
                    o = n.y1,
                    u = n.y2,
                    l = n.className,
                    s = n.alwaysShow,
                    f = n.clipPathId;
                _r(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
                var c = Be(i),
                    d = Be(a),
                    p = Be(o),
                    h = Be(u),
                    y = this.props.shape;
                if (!c && !d && !p && !h && !y) return null;
                var w = o7(c, d, p, h, this.props);
                if (!w && !y) return null;
                var m = cr(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
                return A.createElement(Te, {
                    className: ie("recharts-reference-area", l)
                }, t.renderRect(y, Ab(Ab({
                    clipPath: m
                }, ee(this.props, !0)), w)), et.renderCallByParent(this.props, w))
            }
        }])
    }(A.Component);
_c(Pc, "displayName", "ReferenceArea");
_c(Pc, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: .5,
    stroke: "none",
    strokeWidth: 1
});
_c(Pc, "renderRect", function(e, t) {
    var r;
    return A.isValidElement(e) ? r = A.cloneElement(e, t) : Z(e) ? r = e(t) : r = A.createElement(Iv, Ip({}, t, {
        className: "recharts-reference-area-rect"
    })), r
});

function ZO(e, t, r) {
    if (t < 1) return [];
    if (t === 1 && r === void 0) return e;
    for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
    return n
}

function u7(e, t, r) {
    var n = {
        width: e.width + t.width,
        height: e.height + t.height
    };
    return tH(n, r)
}

function l7(e, t, r) {
    var n = r === "width",
        i = e.x,
        a = e.y,
        o = e.width,
        u = e.height;
    return t === 1 ? {
        start: n ? i : a,
        end: n ? i + o : a + u
    } : {
        start: n ? i + o : a + u,
        end: n ? i : a
    }
}

function bs(e, t, r, n, i) {
    if (e * t < e * n || e * t > e * i) return !1;
    var a = r();
    return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0
}

function s7(e, t) {
    return ZO(e, t + 1)
}

function c7(e, t, r, n, i) {
    for (var a = (n || []).slice(), o = t.start, u = t.end, l = 0, s = 1, f = o, c = function() {
            var h = n == null ? void 0 : n[l];
            if (h === void 0) return {
                v: ZO(n, s)
            };
            var y = l,
                w, m = function() {
                    return w === void 0 && (w = r(h, y)), w
                },
                v = h.coordinate,
                g = l === 0 || bs(e, v, m, f, u);
            g || (l = 0, f = o, s += 1), g && (f = v + e * (m() / 2 + i), l += s)
        }, d; s <= a.length;)
        if (d = c(), d) return d.v;
    return []
}

function Zo(e) {
    "@babel/helpers - typeof";
    return Zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Zo(e)
}

function Eb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ze(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Eb(Object(r), !0).forEach(function(n) {
            f7(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function f7(e, t, r) {
    return t = d7(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function d7(e) {
    var t = p7(e, "string");
    return Zo(t) == "symbol" ? t : t + ""
}

function p7(e, t) {
    if (Zo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Zo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function h7(e, t, r, n, i) {
    for (var a = (n || []).slice(), o = a.length, u = t.start, l = t.end, s = function(d) {
            var p = a[d],
                h, y = function() {
                    return h === void 0 && (h = r(p, d)), h
                };
            if (d === o - 1) {
                var w = e * (p.coordinate + e * y() / 2 - l);
                a[d] = p = Ze(Ze({}, p), {}, {
                    tickCoord: w > 0 ? p.coordinate - w * e : p.coordinate
                })
            } else a[d] = p = Ze(Ze({}, p), {}, {
                tickCoord: p.coordinate
            });
            var m = bs(e, p.tickCoord, y, u, l);
            m && (l = p.tickCoord - e * (y() / 2 + i), a[d] = Ze(Ze({}, p), {}, {
                isShow: !0
            }))
        }, f = o - 1; f >= 0; f--) s(f);
    return a
}

function v7(e, t, r, n, i, a) {
    var o = (n || []).slice(),
        u = o.length,
        l = t.start,
        s = t.end;
    if (a) {
        var f = n[u - 1],
            c = r(f, u - 1),
            d = e * (f.coordinate + e * c / 2 - s);
        o[u - 1] = f = Ze(Ze({}, f), {}, {
            tickCoord: d > 0 ? f.coordinate - d * e : f.coordinate
        });
        var p = bs(e, f.tickCoord, function() {
            return c
        }, l, s);
        p && (s = f.tickCoord - e * (c / 2 + i), o[u - 1] = Ze(Ze({}, f), {}, {
            isShow: !0
        }))
    }
    for (var h = a ? u - 1 : u, y = function(v) {
            var g = o[v],
                S, b = function() {
                    return S === void 0 && (S = r(g, v)), S
                };
            if (v === 0) {
                var x = e * (g.coordinate - e * b() / 2 - l);
                o[v] = g = Ze(Ze({}, g), {}, {
                    tickCoord: x < 0 ? g.coordinate - x * e : g.coordinate
                })
            } else o[v] = g = Ze(Ze({}, g), {}, {
                tickCoord: g.coordinate
            });
            var O = bs(e, g.tickCoord, b, l, s);
            O && (l = g.tickCoord + e * (b() / 2 + i), o[v] = Ze(Ze({}, g), {}, {
                isShow: !0
            }))
        }, w = 0; w < h; w++) y(w);
    return o
}

function Wv(e, t, r) {
    var n = e.tick,
        i = e.ticks,
        a = e.viewBox,
        o = e.minTickGap,
        u = e.orientation,
        l = e.interval,
        s = e.tickFormatter,
        f = e.unit,
        c = e.angle;
    if (!i || !i.length || !n) return [];
    if (W(l) || Pr.isSsr) return s7(i, typeof l == "number" && W(l) ? l : 0);
    var d = [],
        p = u === "top" || u === "bottom" ? "width" : "height",
        h = f && p === "width" ? Qa(f, {
            fontSize: t,
            letterSpacing: r
        }) : {
            width: 0,
            height: 0
        },
        y = function(g, S) {
            var b = Z(s) ? s(g.value, S) : g.value;
            return p === "width" ? u7(Qa(b, {
                fontSize: t,
                letterSpacing: r
            }), h, c) : Qa(b, {
                fontSize: t,
                letterSpacing: r
            })[p]
        },
        w = i.length >= 2 ? Zt(i[1].coordinate - i[0].coordinate) : 1,
        m = l7(a, w, p);
    return l === "equidistantPreserveStart" ? c7(w, m, y, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? d = v7(w, m, y, i, o, l === "preserveStartEnd") : d = h7(w, m, y, i, o), d.filter(function(v) {
        return v.isShow
    }))
}
var y7 = ["viewBox"],
    m7 = ["viewBox"],
    g7 = ["ticks"];

function Zi(e) {
    "@babel/helpers - typeof";
    return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Zi(e)
}

function mi() {
    return mi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, mi.apply(this, arguments)
}

function $b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ne(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? $b(Object(r), !0).forEach(function(n) {
            Hv(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $b(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Ef(e, t) {
    if (e == null) return {};
    var r = b7(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function b7(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function w7(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Tb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, e_(n.key), n)
    }
}

function x7(e, t, r) {
    return t && Tb(e.prototype, t), r && Tb(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function S7(e, t, r) {
    return t = ws(t), O7(e, JO() ? Reflect.construct(t, r || [], ws(e).constructor) : t.apply(e, r))
}

function O7(e, t) {
    if (t && (Zi(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _7(e)
}

function _7(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function JO() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (JO = function() {
        return !!e
    })()
}

function ws(e) {
    return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ws(e)
}

function P7(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Dp(e, t)
}

function Dp(e, t) {
    return Dp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Dp(e, t)
}

function Hv(e, t, r) {
    return t = e_(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function e_(e) {
    var t = A7(e, "string");
    return Zi(t) == "symbol" ? t : t + ""
}

function A7(e, t) {
    if (Zi(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Zi(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var ga = function(e) {
    function t(r) {
        var n;
        return w7(this, t), n = S7(this, t, [r]), n.state = {
            fontSize: "",
            letterSpacing: ""
        }, n
    }
    return P7(t, e), x7(t, [{
        key: "shouldComponentUpdate",
        value: function(n, i) {
            var a = n.viewBox,
                o = Ef(n, y7),
                u = this.props,
                l = u.viewBox,
                s = Ef(u, m7);
            return !Pi(a, l) || !Pi(o, s) || !Pi(i, this.state)
        }
    }, {
        key: "componentDidMount",
        value: function() {
            var n = this.layerReference;
            if (n) {
                var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                i && this.setState({
                    fontSize: window.getComputedStyle(i).fontSize,
                    letterSpacing: window.getComputedStyle(i).letterSpacing
                })
            }
        }
    }, {
        key: "getTickLineCoord",
        value: function(n) {
            var i = this.props,
                a = i.x,
                o = i.y,
                u = i.width,
                l = i.height,
                s = i.orientation,
                f = i.tickSize,
                c = i.mirror,
                d = i.tickMargin,
                p, h, y, w, m, v, g = c ? -1 : 1,
                S = n.tickSize || f,
                b = W(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (s) {
                case "top":
                    p = h = n.coordinate, w = o + +!c * l, y = w - g * S, v = y - g * d, m = b;
                    break;
                case "left":
                    y = w = n.coordinate, h = a + +!c * u, p = h - g * S, m = p - g * d, v = b;
                    break;
                case "right":
                    y = w = n.coordinate, h = a + +c * u, p = h + g * S, m = p + g * d, v = b;
                    break;
                default:
                    p = h = n.coordinate, w = o + +c * l, y = w + g * S, v = y + g * d, m = b;
                    break
            }
            return {
                line: {
                    x1: p,
                    y1: y,
                    x2: h,
                    y2: w
                },
                tick: {
                    x: m,
                    y: v
                }
            }
        }
    }, {
        key: "getTickTextAnchor",
        value: function() {
            var n = this.props,
                i = n.orientation,
                a = n.mirror,
                o;
            switch (i) {
                case "left":
                    o = a ? "start" : "end";
                    break;
                case "right":
                    o = a ? "end" : "start";
                    break;
                default:
                    o = "middle";
                    break
            }
            return o
        }
    }, {
        key: "getTickVerticalAnchor",
        value: function() {
            var n = this.props,
                i = n.orientation,
                a = n.mirror,
                o = "end";
            switch (i) {
                case "left":
                case "right":
                    o = "middle";
                    break;
                case "top":
                    o = a ? "start" : "end";
                    break;
                default:
                    o = a ? "end" : "start";
                    break
            }
            return o
        }
    }, {
        key: "renderAxisLine",
        value: function() {
            var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                l = n.orientation,
                s = n.mirror,
                f = n.axisLine,
                c = Ne(Ne(Ne({}, ee(this.props, !1)), ee(f, !1)), {}, {
                    fill: "none"
                });
            if (l === "top" || l === "bottom") {
                var d = +(l === "top" && !s || l === "bottom" && s);
                c = Ne(Ne({}, c), {}, {
                    x1: i,
                    y1: a + d * u,
                    x2: i + o,
                    y2: a + d * u
                })
            } else {
                var p = +(l === "left" && !s || l === "right" && s);
                c = Ne(Ne({}, c), {}, {
                    x1: i + p * o,
                    y1: a,
                    x2: i + p * o,
                    y2: a + u
                })
            }
            return A.createElement("line", mi({}, c, {
                className: ie("recharts-cartesian-axis-line", Dt(f, "className"))
            }))
        }
    }, {
        key: "renderTicks",
        value: function(n, i, a) {
            var o = this,
                u = this.props,
                l = u.tickLine,
                s = u.stroke,
                f = u.tick,
                c = u.tickFormatter,
                d = u.unit,
                p = Wv(Ne(Ne({}, this.props), {}, {
                    ticks: n
                }), i, a),
                h = this.getTickTextAnchor(),
                y = this.getTickVerticalAnchor(),
                w = ee(this.props, !1),
                m = ee(f, !1),
                v = Ne(Ne({}, w), {}, {
                    fill: "none"
                }, ee(l, !1)),
                g = p.map(function(S, b) {
                    var x = o.getTickLineCoord(S),
                        O = x.line,
                        _ = x.tick,
                        P = Ne(Ne(Ne(Ne({
                            textAnchor: h,
                            verticalAnchor: y
                        }, w), {}, {
                            stroke: "none",
                            fill: s
                        }, m), _), {}, {
                            index: b,
                            payload: S,
                            visibleTicksCount: p.length,
                            tickFormatter: c
                        });
                    return A.createElement(Te, mi({
                        className: "recharts-cartesian-axis-tick",
                        key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord)
                    }, $l(o.props, S, b)), l && A.createElement("line", mi({}, v, O, {
                        className: ie("recharts-cartesian-axis-tick-line", Dt(l, "className"))
                    })), f && t.renderTickItem(f, P, "".concat(Z(c) ? c(S.value, b) : S.value).concat(d || "")))
                });
            return A.createElement("g", {
                className: "recharts-cartesian-axis-ticks"
            }, g)
        }
    }, {
        key: "render",
        value: function() {
            var n = this,
                i = this.props,
                a = i.axisLine,
                o = i.width,
                u = i.height,
                l = i.ticksGenerator,
                s = i.className,
                f = i.hide;
            if (f) return null;
            var c = this.props,
                d = c.ticks,
                p = Ef(c, g7),
                h = d;
            return Z(l) && (h = d && d.length > 0 ? l(this.props) : l(p)), o <= 0 || u <= 0 || !h || !h.length ? null : A.createElement(Te, {
                className: ie("recharts-cartesian-axis", s),
                ref: function(w) {
                    n.layerReference = w
                }
            }, a && this.renderAxisLine(), this.renderTicks(h, this.state.fontSize, this.state.letterSpacing), et.renderCallByParent(this.props))
        }
    }], [{
        key: "renderTickItem",
        value: function(n, i, a) {
            var o, u = ie(i.className, "recharts-cartesian-axis-tick-value");
            return A.isValidElement(n) ? o = A.cloneElement(n, Ne(Ne({}, i), {}, {
                className: u
            })) : Z(n) ? o = n(Ne(Ne({}, i), {}, {
                className: u
            })) : o = A.createElement(Ul, mi({}, i, {
                className: "recharts-cartesian-axis-tick-value"
            }), a), o
        }
    }])
}(F.Component);
Hv(ga, "displayName", "CartesianAxis");
Hv(ga, "defaultProps", {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd"
});
var E7 = ["x1", "y1", "x2", "y2", "key"],
    $7 = ["offset"];

function Vn(e) {
    "@babel/helpers - typeof";
    return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Vn(e)
}

function Cb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function tt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Cb(Object(r), !0).forEach(function(n) {
            T7(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function T7(e, t, r) {
    return t = C7(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function C7(e) {
    var t = j7(e, "string");
    return Vn(t) == "symbol" ? t : t + ""
}

function j7(e, t) {
    if (Vn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Vn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function jn() {
    return jn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, jn.apply(this, arguments)
}

function jb(e, t) {
    if (e == null) return {};
    var r = k7(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function k7(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}
var M7 = function(t) {
    var r = t.fill;
    if (!r || r === "none") return null;
    var n = t.fillOpacity,
        i = t.x,
        a = t.y,
        o = t.width,
        u = t.height,
        l = t.ry;
    return A.createElement("rect", {
        x: i,
        y: a,
        ry: l,
        width: o,
        height: u,
        stroke: "none",
        fill: r,
        fillOpacity: n,
        className: "recharts-cartesian-grid-bg"
    })
};

function t_(e, t) {
    var r;
    if (A.isValidElement(e)) r = A.cloneElement(e, t);
    else if (Z(e)) r = e(t);
    else {
        var n = t.x1,
            i = t.y1,
            a = t.x2,
            o = t.y2,
            u = t.key,
            l = jb(t, E7),
            s = ee(l, !1);
        s.offset;
        var f = jb(s, $7);
        r = A.createElement("line", jn({}, f, {
            x1: n,
            y1: i,
            x2: a,
            y2: o,
            fill: "none",
            key: u
        }))
    }
    return r
}

function I7(e) {
    var t = e.x,
        r = e.width,
        n = e.horizontal,
        i = n === void 0 ? !0 : n,
        a = e.horizontalPoints;
    if (!i || !a || !a.length) return null;
    var o = a.map(function(u, l) {
        var s = tt(tt({}, e), {}, {
            x1: t,
            y1: u,
            x2: t + r,
            y2: u,
            key: "line-".concat(l),
            index: l
        });
        return t_(i, s)
    });
    return A.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
    }, o)
}

function N7(e) {
    var t = e.y,
        r = e.height,
        n = e.vertical,
        i = n === void 0 ? !0 : n,
        a = e.verticalPoints;
    if (!i || !a || !a.length) return null;
    var o = a.map(function(u, l) {
        var s = tt(tt({}, e), {}, {
            x1: u,
            y1: t,
            x2: u,
            y2: t + r,
            key: "line-".concat(l),
            index: l
        });
        return t_(i, s)
    });
    return A.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
    }, o)
}

function D7(e) {
    var t = e.horizontalFill,
        r = e.fillOpacity,
        n = e.x,
        i = e.y,
        a = e.width,
        o = e.height,
        u = e.horizontalPoints,
        l = e.horizontal,
        s = l === void 0 ? !0 : l;
    if (!s || !t || !t.length) return null;
    var f = u.map(function(d) {
        return Math.round(d + i - i)
    }).sort(function(d, p) {
        return d - p
    });
    i !== f[0] && f.unshift(0);
    var c = f.map(function(d, p) {
        var h = !f[p + 1],
            y = h ? i + o - d : f[p + 1] - d;
        if (y <= 0) return null;
        var w = p % t.length;
        return A.createElement("rect", {
            key: "react-".concat(p),
            y: d,
            x: n,
            height: y,
            width: a,
            stroke: "none",
            fill: t[w],
            fillOpacity: r,
            className: "recharts-cartesian-grid-bg"
        })
    });
    return A.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
    }, c)
}

function L7(e) {
    var t = e.vertical,
        r = t === void 0 ? !0 : t,
        n = e.verticalFill,
        i = e.fillOpacity,
        a = e.x,
        o = e.y,
        u = e.width,
        l = e.height,
        s = e.verticalPoints;
    if (!r || !n || !n.length) return null;
    var f = s.map(function(d) {
        return Math.round(d + a - a)
    }).sort(function(d, p) {
        return d - p
    });
    a !== f[0] && f.unshift(0);
    var c = f.map(function(d, p) {
        var h = !f[p + 1],
            y = h ? a + u - d : f[p + 1] - d;
        if (y <= 0) return null;
        var w = p % n.length;
        return A.createElement("rect", {
            key: "react-".concat(p),
            x: d,
            y: o,
            width: y,
            height: l,
            stroke: "none",
            fill: n[w],
            fillOpacity: i,
            className: "recharts-cartesian-grid-bg"
        })
    });
    return A.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
    }, c)
}
var R7 = function(t, r) {
        var n = t.xAxis,
            i = t.width,
            a = t.height,
            o = t.offset;
        return cO(Wv(tt(tt(tt({}, ga.defaultProps), n), {}, {
            ticks: xr(n, !0),
            viewBox: {
                x: 0,
                y: 0,
                width: i,
                height: a
            }
        })), o.left, o.left + o.width, r)
    },
    B7 = function(t, r) {
        var n = t.yAxis,
            i = t.width,
            a = t.height,
            o = t.offset;
        return cO(Wv(tt(tt(tt({}, ga.defaultProps), n), {}, {
            ticks: xr(n, !0),
            viewBox: {
                x: 0,
                y: 0,
                width: i,
                height: a
            }
        })), o.top, o.top + o.height, r)
    },
    ri = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
    };

function z7(e) {
    var t, r, n, i, a, o, u = Bv(),
        l = zv(),
        s = AH(),
        f = tt(tt({}, e), {}, {
            stroke: (t = e.stroke) !== null && t !== void 0 ? t : ri.stroke,
            fill: (r = e.fill) !== null && r !== void 0 ? r : ri.fill,
            horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : ri.horizontal,
            horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : ri.horizontalFill,
            vertical: (a = e.vertical) !== null && a !== void 0 ? a : ri.vertical,
            verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : ri.verticalFill,
            x: W(e.x) ? e.x : s.left,
            y: W(e.y) ? e.y : s.top,
            width: W(e.width) ? e.width : s.width,
            height: W(e.height) ? e.height : s.height
        }),
        c = f.x,
        d = f.y,
        p = f.width,
        h = f.height,
        y = f.syncWithTicks,
        w = f.horizontalValues,
        m = f.verticalValues,
        v = OH(),
        g = _H();
    if (!W(p) || p <= 0 || !W(h) || h <= 0 || !W(c) || c !== +c || !W(d) || d !== +d) return null;
    var S = f.verticalCoordinatesGenerator || R7,
        b = f.horizontalCoordinatesGenerator || B7,
        x = f.horizontalPoints,
        O = f.verticalPoints;
    if ((!x || !x.length) && Z(b)) {
        var _ = w && w.length,
            P = b({
                yAxis: g ? tt(tt({}, g), {}, {
                    ticks: _ ? w : g.ticks
                }) : void 0,
                width: u,
                height: l,
                offset: s
            }, _ ? !0 : y);
        _r(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Vn(P), "]")), Array.isArray(P) && (x = P)
    }
    if ((!O || !O.length) && Z(S)) {
        var $ = m && m.length,
            E = S({
                xAxis: v ? tt(tt({}, v), {}, {
                    ticks: $ ? m : v.ticks
                }) : void 0,
                width: u,
                height: l,
                offset: s
            }, $ ? !0 : y);
        _r(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Vn(E), "]")), Array.isArray(E) && (O = E)
    }
    return A.createElement("g", {
        className: "recharts-cartesian-grid"
    }, A.createElement(M7, {
        fill: f.fill,
        fillOpacity: f.fillOpacity,
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height,
        ry: f.ry
    }), A.createElement(I7, jn({}, f, {
        offset: s,
        horizontalPoints: x,
        xAxis: v,
        yAxis: g
    })), A.createElement(N7, jn({}, f, {
        offset: s,
        verticalPoints: O,
        xAxis: v,
        yAxis: g
    })), A.createElement(D7, jn({}, f, {
        horizontalPoints: x
    })), A.createElement(L7, jn({}, f, {
        verticalPoints: O
    })))
}
z7.displayName = "CartesianGrid";
var F7 = ["type", "layout", "connectNulls", "ref"],
    U7 = ["key"];

function Ji(e) {
    "@babel/helpers - typeof";
    return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ji(e)
}

function kb(e, t) {
    if (e == null) return {};
    var r = W7(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function W7(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function to() {
    return to = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, to.apply(this, arguments)
}

function Mb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function yt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Mb(Object(r), !0).forEach(function(n) {
            qt(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ni(e) {
    return G7(e) || K7(e) || V7(e) || H7()
}

function H7() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function V7(e, t) {
    if (e) {
        if (typeof e == "string") return Lp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lp(e, t)
    }
}

function K7(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function G7(e) {
    if (Array.isArray(e)) return Lp(e)
}

function Lp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function q7(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ib(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n_(n.key), n)
    }
}

function X7(e, t, r) {
    return t && Ib(e.prototype, t), r && Ib(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Y7(e, t, r) {
    return t = xs(t), Q7(e, r_() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r))
}

function Q7(e, t) {
    if (t && (Ji(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Z7(e)
}

function Z7(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function r_() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (r_ = function() {
        return !!e
    })()
}

function xs(e) {
    return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, xs(e)
}

function J7(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Rp(e, t)
}

function Rp(e, t) {
    return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Rp(e, t)
}

function qt(e, t, r) {
    return t = n_(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function n_(e) {
    var t = eV(e, "string");
    return Ji(t) == "symbol" ? t : t + ""
}

function eV(e, t) {
    if (Ji(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Ji(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Ac = function(e) {
    function t() {
        var r;
        q7(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
        return r = Y7(this, t, [].concat(i)), qt(r, "state", {
            isAnimationFinished: !0,
            totalLength: 0
        }), qt(r, "generateSimpleStrokeDasharray", function(o, u) {
            return "".concat(u, "px ").concat(o - u, "px")
        }), qt(r, "getStrokeDasharray", function(o, u, l) {
            var s = l.reduce(function(m, v) {
                return m + v
            });
            if (!s) return r.generateSimpleStrokeDasharray(u, o);
            for (var f = Math.floor(o / s), c = o % s, d = u - o, p = [], h = 0, y = 0; h < l.length; y += l[h], ++h)
                if (y + l[h] > c) {
                    p = [].concat(ni(l.slice(0, h)), [c - y]);
                    break
                }
            var w = p.length % 2 === 0 ? [0, d] : [d];
            return [].concat(ni(t.repeat(l, f)), ni(p), w).map(function(m) {
                return "".concat(m, "px")
            }).join(", ")
        }), qt(r, "id", uu("recharts-line-")), qt(r, "pathRef", function(o) {
            r.mainCurve = o
        }), qt(r, "handleAnimationEnd", function() {
            r.setState({
                isAnimationFinished: !0
            }), r.props.onAnimationEnd && r.props.onAnimationEnd()
        }), qt(r, "handleAnimationStart", function() {
            r.setState({
                isAnimationFinished: !1
            }), r.props.onAnimationStart && r.props.onAnimationStart()
        }), r
    }
    return J7(t, e), X7(t, [{
        key: "componentDidMount",
        value: function() {
            if (this.props.isAnimationActive) {
                var n = this.getTotalLength();
                this.setState({
                    totalLength: n
                })
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            if (this.props.isAnimationActive) {
                var n = this.getTotalLength();
                n !== this.state.totalLength && this.setState({
                    totalLength: n
                })
            }
        }
    }, {
        key: "getTotalLength",
        value: function() {
            var n = this.mainCurve;
            try {
                return n && n.getTotalLength && n.getTotalLength() || 0
            } catch {
                return 0
            }
        }
    }, {
        key: "renderErrorBar",
        value: function(n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var a = this.props,
                o = a.points,
                u = a.xAxis,
                l = a.yAxis,
                s = a.layout,
                f = a.children,
                c = Lt(f, pu);
            if (!c) return null;
            var d = function(y, w) {
                    return {
                        x: y.x,
                        y: y.y,
                        value: y.value,
                        errorVal: _t(y.payload, w)
                    }
                },
                p = {
                    clipPath: n ? "url(#clipPath-".concat(i, ")") : null
                };
            return A.createElement(Te, p, c.map(function(h) {
                return A.cloneElement(h, {
                    key: "bar-".concat(h.props.dataKey),
                    data: o,
                    xAxis: u,
                    yAxis: l,
                    layout: s,
                    dataPointFormatter: d
                })
            }))
        }
    }, {
        key: "renderDots",
        value: function(n, i, a) {
            var o = this.props.isAnimationActive;
            if (o && !this.state.isAnimationFinished) return null;
            var u = this.props,
                l = u.dot,
                s = u.points,
                f = u.dataKey,
                c = ee(this.props, !1),
                d = ee(l, !0),
                p = s.map(function(y, w) {
                    var m = yt(yt(yt({
                        key: "dot-".concat(w),
                        r: 3
                    }, c), d), {}, {
                        index: w,
                        cx: y.x,
                        cy: y.y,
                        value: y.value,
                        dataKey: f,
                        payload: y.payload,
                        points: s
                    });
                    return t.renderDotItem(l, m)
                }),
                h = {
                    clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
                };
            return A.createElement(Te, to({
                className: "recharts-line-dots",
                key: "dots"
            }, h), p)
        }
    }, {
        key: "renderCurveStatically",
        value: function(n, i, a, o) {
            var u = this.props,
                l = u.type,
                s = u.layout,
                f = u.connectNulls;
            u.ref;
            var c = kb(u, F7),
                d = yt(yt(yt({}, ee(c, !0)), {}, {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
                    points: n
                }, o), {}, {
                    type: l,
                    layout: s,
                    connectNulls: f
                });
            return A.createElement(vp, to({}, d, {
                pathRef: this.pathRef
            }))
        }
    }, {
        key: "renderCurveWithAnimation",
        value: function(n, i) {
            var a = this,
                o = this.props,
                u = o.points,
                l = o.strokeDasharray,
                s = o.isAnimationActive,
                f = o.animationBegin,
                c = o.animationDuration,
                d = o.animationEasing,
                p = o.animationId,
                h = o.animateNewValues,
                y = o.width,
                w = o.height,
                m = this.state,
                v = m.prevPoints,
                g = m.totalLength;
            return A.createElement(Ir, {
                begin: f,
                duration: c,
                isActive: s,
                easing: d,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "line-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, function(S) {
                var b = S.t;
                if (v) {
                    var x = v.length / u.length,
                        O = u.map(function(T, I) {
                            var N = Math.floor(I * x);
                            if (v[N]) {
                                var k = v[N],
                                    D = Yt(k.x, T.x),
                                    L = Yt(k.y, T.y);
                                return yt(yt({}, T), {}, {
                                    x: D(b),
                                    y: L(b)
                                })
                            }
                            if (h) {
                                var C = Yt(y * 2, T.x),
                                    M = Yt(w / 2, T.y);
                                return yt(yt({}, T), {}, {
                                    x: C(b),
                                    y: M(b)
                                })
                            }
                            return yt(yt({}, T), {}, {
                                x: T.x,
                                y: T.y
                            })
                        });
                    return a.renderCurveStatically(O, n, i)
                }
                var _ = Yt(0, g),
                    P = _(b),
                    $;
                if (l) {
                    var E = "".concat(l).split(/[,\s]+/gim).map(function(T) {
                        return parseFloat(T)
                    });
                    $ = a.getStrokeDasharray(P, g, E)
                } else $ = a.generateSimpleStrokeDasharray(g, P);
                return a.renderCurveStatically(u, n, i, {
                    strokeDasharray: $
                })
            })
        }
    }, {
        key: "renderCurve",
        value: function(n, i) {
            var a = this.props,
                o = a.points,
                u = a.isAnimationActive,
                l = this.state,
                s = l.prevPoints,
                f = l.totalLength;
            return u && o && o.length && (!s && f > 0 || !yc(s, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i)
        }
    }, {
        key: "render",
        value: function() {
            var n, i = this.props,
                a = i.hide,
                o = i.dot,
                u = i.points,
                l = i.className,
                s = i.xAxis,
                f = i.yAxis,
                c = i.top,
                d = i.left,
                p = i.width,
                h = i.height,
                y = i.isAnimationActive,
                w = i.id;
            if (a || !u || !u.length) return null;
            var m = this.state.isAnimationFinished,
                v = u.length === 1,
                g = ie("recharts-line", l),
                S = s && s.allowDataOverflow,
                b = f && f.allowDataOverflow,
                x = S || b,
                O = J(w) ? this.id : w,
                _ = (n = ee(o, !1)) !== null && n !== void 0 ? n : {
                    r: 3,
                    strokeWidth: 2
                },
                P = _.r,
                $ = P === void 0 ? 3 : P,
                E = _.strokeWidth,
                T = E === void 0 ? 2 : E,
                I = hC(o) ? o : {},
                N = I.clipDot,
                k = N === void 0 ? !0 : N,
                D = $ * 2 + T;
            return A.createElement(Te, {
                className: g
            }, S || b ? A.createElement("defs", null, A.createElement("clipPath", {
                id: "clipPath-".concat(O)
            }, A.createElement("rect", {
                x: S ? d : d - p / 2,
                y: b ? c : c - h / 2,
                width: S ? p : p * 2,
                height: b ? h : h * 2
            })), !k && A.createElement("clipPath", {
                id: "clipPath-dots-".concat(O)
            }, A.createElement("rect", {
                x: d - D / 2,
                y: c - D / 2,
                width: p + D,
                height: h + D
            }))) : null, !v && this.renderCurve(x, O), this.renderErrorBar(x, O), (v || o) && this.renderDots(x, k, O), (!y || m) && on.renderCallByParent(this.props, u))
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function(n, i) {
            return n.animationId !== i.prevAnimationId ? {
                prevAnimationId: n.animationId,
                curPoints: n.points,
                prevPoints: i.curPoints
            } : n.points !== i.curPoints ? {
                curPoints: n.points
            } : null
        }
    }, {
        key: "repeat",
        value: function(n, i) {
            for (var a = n.length % 2 !== 0 ? [].concat(ni(n), [0]) : n, o = [], u = 0; u < i; ++u) o = [].concat(ni(o), ni(a));
            return o
        }
    }, {
        key: "renderDotItem",
        value: function(n, i) {
            var a;
            if (A.isValidElement(n)) a = A.cloneElement(n, i);
            else if (Z(n)) a = n(i);
            else {
                var o = i.key,
                    u = kb(i, U7),
                    l = ie("recharts-line-dot", typeof n != "boolean" ? n.className : "");
                a = A.createElement(Nv, to({
                    key: o
                }, u, {
                    className: l
                }))
            }
            return a
        }
    }])
}(F.PureComponent);
qt(Ac, "displayName", "Line");
qt(Ac, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: !1,
    activeDot: !0,
    dot: !0,
    legendType: "line",
    stroke: "#3182bd",
    strokeWidth: 1,
    fill: "#fff",
    points: [],
    isAnimationActive: !Pr.isSsr,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    hide: !1,
    label: !1
});
qt(Ac, "getComposedData", function(e) {
    var t = e.props,
        r = e.xAxis,
        n = e.yAxis,
        i = e.xAxisTicks,
        a = e.yAxisTicks,
        o = e.dataKey,
        u = e.bandSize,
        l = e.displayedData,
        s = e.offset,
        f = t.layout,
        c = l.map(function(d, p) {
            var h = _t(d, o);
            return f === "horizontal" ? {
                x: h0({
                    axis: r,
                    ticks: i,
                    bandSize: u,
                    entry: d,
                    index: p
                }),
                y: J(h) ? null : n.scale(h),
                value: h,
                payload: d
            } : {
                x: J(h) ? null : r.scale(h),
                y: h0({
                    axis: n,
                    ticks: a,
                    bandSize: u,
                    entry: d,
                    index: p
                }),
                value: h,
                payload: d
            }
        });
    return yt({
        points: c,
        layout: f
    }, s)
});

function ea(e) {
    "@babel/helpers - typeof";
    return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ea(e)
}

function tV(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function rV(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o_(n.key), n)
    }
}

function nV(e, t, r) {
    return t && rV(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function iV(e, t, r) {
    return t = Ss(t), aV(e, i_() ? Reflect.construct(t, r || [], Ss(e).constructor) : t.apply(e, r))
}

function aV(e, t) {
    if (t && (ea(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return oV(e)
}

function oV(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function i_() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (i_ = function() {
        return !!e
    })()
}

function Ss(e) {
    return Ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ss(e)
}

function uV(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Bp(e, t)
}

function Bp(e, t) {
    return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Bp(e, t)
}

function a_(e, t, r) {
    return t = o_(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function o_(e) {
    var t = lV(e, "string");
    return ea(t) == "symbol" ? t : t + ""
}

function lV(e, t) {
    if (ea(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ea(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function zp() {
    return zp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, zp.apply(this, arguments)
}

function sV(e) {
    var t = e.xAxisId,
        r = Bv(),
        n = zv(),
        i = HO(t);
    return i == null ? null : F.createElement(ga, zp({}, i, {
        className: ie("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
        viewBox: {
            x: 0,
            y: 0,
            width: r,
            height: n
        },
        ticksGenerator: function(o) {
            return xr(o, !0)
        }
    }))
}
var Ec = function(e) {
    function t() {
        return tV(this, t), iV(this, t, arguments)
    }
    return uV(t, e), nV(t, [{
        key: "render",
        value: function() {
            return F.createElement(sV, this.props)
        }
    }])
}(F.Component);
a_(Ec, "displayName", "XAxis");
a_(Ec, "defaultProps", {
    allowDecimals: !0,
    hide: !1,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    padding: {
        left: 0,
        right: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
    allowDuplicatedCategory: !0
});

function ta(e) {
    "@babel/helpers - typeof";
    return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ta(e)
}

function cV(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function fV(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s_(n.key), n)
    }
}

function dV(e, t, r) {
    return t && fV(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function pV(e, t, r) {
    return t = Os(t), hV(e, u_() ? Reflect.construct(t, r || [], Os(e).constructor) : t.apply(e, r))
}

function hV(e, t) {
    if (t && (ta(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return vV(e)
}

function vV(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function u_() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (u_ = function() {
        return !!e
    })()
}

function Os(e) {
    return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Os(e)
}

function yV(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Fp(e, t)
}

function Fp(e, t) {
    return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Fp(e, t)
}

function l_(e, t, r) {
    return t = s_(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function s_(e) {
    var t = mV(e, "string");
    return ta(t) == "symbol" ? t : t + ""
}

function mV(e, t) {
    if (ta(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ta(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Up() {
    return Up = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Up.apply(this, arguments)
}
var gV = function(t) {
        var r = t.yAxisId,
            n = Bv(),
            i = zv(),
            a = VO(r);
        return a == null ? null : F.createElement(ga, Up({}, a, {
            className: ie("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
            viewBox: {
                x: 0,
                y: 0,
                width: n,
                height: i
            },
            ticksGenerator: function(u) {
                return xr(u, !0)
            }
        }))
    },
    $c = function(e) {
        function t() {
            return cV(this, t), pV(this, t, arguments)
        }
        return yV(t, e), dV(t, [{
            key: "render",
            value: function() {
                return F.createElement(gV, this.props)
            }
        }])
    }(F.Component);
l_($c, "displayName", "YAxis");
l_($c, "defaultProps", {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    padding: {
        top: 0,
        bottom: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1
});

function Nb(e) {
    return SV(e) || xV(e) || wV(e) || bV()
}

function bV() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function wV(e, t) {
    if (e) {
        if (typeof e == "string") return Wp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wp(e, t)
    }
}

function xV(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function SV(e) {
    if (Array.isArray(e)) return Wp(e)
}

function Wp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var Hp = function(t, r, n, i, a) {
        var o = Lt(t, Uv),
            u = Lt(t, Oc),
            l = [].concat(Nb(o), Nb(u)),
            s = Lt(t, Pc),
            f = "".concat(i, "Id"),
            c = i[0],
            d = r;
        if (l.length && (d = l.reduce(function(y, w) {
                if (w.props[f] === n && cr(w.props, "extendDomain") && W(w.props[c])) {
                    var m = w.props[c];
                    return [Math.min(y[0], m), Math.max(y[1], m)]
                }
                return y
            }, d)), s.length) {
            var p = "".concat(c, "1"),
                h = "".concat(c, "2");
            d = s.reduce(function(y, w) {
                if (w.props[f] === n && cr(w.props, "extendDomain") && W(w.props[p]) && W(w.props[h])) {
                    var m = w.props[p],
                        v = w.props[h];
                    return [Math.min(y[0], m, v), Math.max(y[1], m, v)]
                }
                return y
            }, d)
        }
        return a && a.length && (d = a.reduce(function(y, w) {
            return W(w) ? [Math.min(y[0], w), Math.max(y[1], w)] : y
        }, d)), d
    },
    c_ = {
        exports: {}
    };
(function(e) {
    var t = Object.prototype.hasOwnProperty,
        r = "~";

    function n() {}
    Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1));

    function i(l, s, f) {
        this.fn = l, this.context = s, this.once = f || !1
    }

    function a(l, s, f, c, d) {
        if (typeof f != "function") throw new TypeError("The listener must be a function");
        var p = new i(f, c || l, d),
            h = r ? r + s : s;
        return l._events[h] ? l._events[h].fn ? l._events[h] = [l._events[h], p] : l._events[h].push(p) : (l._events[h] = p, l._eventsCount++), l
    }

    function o(l, s) {
        --l._eventsCount === 0 ? l._events = new n : delete l._events[s]
    }

    function u() {
        this._events = new n, this._eventsCount = 0
    }
    u.prototype.eventNames = function() {
        var s = [],
            f, c;
        if (this._eventsCount === 0) return s;
        for (c in f = this._events) t.call(f, c) && s.push(r ? c.slice(1) : c);
        return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(f)) : s
    }, u.prototype.listeners = function(s) {
        var f = r ? r + s : s,
            c = this._events[f];
        if (!c) return [];
        if (c.fn) return [c.fn];
        for (var d = 0, p = c.length, h = new Array(p); d < p; d++) h[d] = c[d].fn;
        return h
    }, u.prototype.listenerCount = function(s) {
        var f = r ? r + s : s,
            c = this._events[f];
        return c ? c.fn ? 1 : c.length : 0
    }, u.prototype.emit = function(s, f, c, d, p, h) {
        var y = r ? r + s : s;
        if (!this._events[y]) return !1;
        var w = this._events[y],
            m = arguments.length,
            v, g;
        if (w.fn) {
            switch (w.once && this.removeListener(s, w.fn, void 0, !0), m) {
                case 1:
                    return w.fn.call(w.context), !0;
                case 2:
                    return w.fn.call(w.context, f), !0;
                case 3:
                    return w.fn.call(w.context, f, c), !0;
                case 4:
                    return w.fn.call(w.context, f, c, d), !0;
                case 5:
                    return w.fn.call(w.context, f, c, d, p), !0;
                case 6:
                    return w.fn.call(w.context, f, c, d, p, h), !0
            }
            for (g = 1, v = new Array(m - 1); g < m; g++) v[g - 1] = arguments[g];
            w.fn.apply(w.context, v)
        } else {
            var S = w.length,
                b;
            for (g = 0; g < S; g++) switch (w[g].once && this.removeListener(s, w[g].fn, void 0, !0), m) {
                case 1:
                    w[g].fn.call(w[g].context);
                    break;
                case 2:
                    w[g].fn.call(w[g].context, f);
                    break;
                case 3:
                    w[g].fn.call(w[g].context, f, c);
                    break;
                case 4:
                    w[g].fn.call(w[g].context, f, c, d);
                    break;
                default:
                    if (!v)
                        for (b = 1, v = new Array(m - 1); b < m; b++) v[b - 1] = arguments[b];
                    w[g].fn.apply(w[g].context, v)
            }
        }
        return !0
    }, u.prototype.on = function(s, f, c) {
        return a(this, s, f, c, !1)
    }, u.prototype.once = function(s, f, c) {
        return a(this, s, f, c, !0)
    }, u.prototype.removeListener = function(s, f, c, d) {
        var p = r ? r + s : s;
        if (!this._events[p]) return this;
        if (!f) return o(this, p), this;
        var h = this._events[p];
        if (h.fn) h.fn === f && (!d || h.once) && (!c || h.context === c) && o(this, p);
        else {
            for (var y = 0, w = [], m = h.length; y < m; y++)(h[y].fn !== f || d && !h[y].once || c && h[y].context !== c) && w.push(h[y]);
            w.length ? this._events[p] = w.length === 1 ? w[0] : w : o(this, p)
        }
        return this
    }, u.prototype.removeAllListeners = function(s) {
        var f;
        return s ? (f = r ? r + s : s, this._events[f] && o(this, f)) : (this._events = new n, this._eventsCount = 0), this
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u
})(c_);
var OV = c_.exports;
const _V = fe(OV);
var $f = new _V,
    Tf = "recharts.syncMouseEvents";

function Jo(e) {
    "@babel/helpers - typeof";
    return Jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Jo(e)
}

function PV(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function AV(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, f_(n.key), n)
    }
}

function EV(e, t, r) {
    return t && AV(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Cf(e, t, r) {
    return t = f_(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function f_(e) {
    var t = $V(e, "string");
    return Jo(t) == "symbol" ? t : t + ""
}

function $V(e, t) {
    if (Jo(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Jo(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var TV = function() {
    function e() {
        PV(this, e), Cf(this, "activeIndex", 0), Cf(this, "coordinateList", []), Cf(this, "layout", "horizontal")
    }
    return EV(e, [{
        key: "setDetails",
        value: function(r) {
            var n, i = r.coordinateList,
                a = i === void 0 ? null : i,
                o = r.container,
                u = o === void 0 ? null : o,
                l = r.layout,
                s = l === void 0 ? null : l,
                f = r.offset,
                c = f === void 0 ? null : f,
                d = r.mouseHandlerCallback,
                p = d === void 0 ? null : d;
            this.coordinateList = (n = a ? ? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ? ? this.container, this.layout = s ? ? this.layout, this.offset = c ? ? this.offset, this.mouseHandlerCallback = p ? ? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
    }, {
        key: "focus",
        value: function() {
            this.spoofMouse()
        }
    }, {
        key: "keyboardEvent",
        value: function(r) {
            if (this.coordinateList.length !== 0) switch (r.key) {
                case "ArrowRight":
                    {
                        if (this.layout !== "horizontal") return;this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1),
                        this.spoofMouse();
                        break
                    }
                case "ArrowLeft":
                    {
                        if (this.layout !== "horizontal") return;this.activeIndex = Math.max(this.activeIndex - 1, 0),
                        this.spoofMouse();
                        break
                    }
            }
        }
    }, {
        key: "setIndex",
        value: function(r) {
            this.activeIndex = r
        }
    }, {
        key: "spoofMouse",
        value: function() {
            var r, n;
            if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
                var i = this.container.getBoundingClientRect(),
                    a = i.x,
                    o = i.y,
                    u = i.height,
                    l = this.coordinateList[this.activeIndex].coordinate,
                    s = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
                    f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
                    c = a + l + s,
                    d = o + this.offset.top + u / 2 + f;
                this.mouseHandlerCallback({
                    pageX: c,
                    pageY: d
                })
            }
        }
    }])
}();

function CV(e, t, r) {
    if (r === "number" && t === !0 && Array.isArray(e)) {
        var n = e == null ? void 0 : e[0],
            i = e == null ? void 0 : e[1];
        if (n && i && W(n) && W(i)) return !0
    }
    return !1
}

function jV(e, t, r, n) {
    var i = n / 2;
    return {
        stroke: "none",
        fill: "#ccc",
        x: e === "horizontal" ? t.x - i : r.left + .5,
        y: e === "horizontal" ? r.top + .5 : t.y - i,
        width: e === "horizontal" ? n : r.width - 1,
        height: e === "horizontal" ? r.height - 1 : n
    }
}

function d_(e) {
    var t = e.cx,
        r = e.cy,
        n = e.radius,
        i = e.startAngle,
        a = e.endAngle,
        o = Ge(t, r, n, i),
        u = Ge(t, r, n, a);
    return {
        points: [o, u],
        cx: t,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: a
    }
}

function kV(e, t, r) {
    var n, i, a, o;
    if (e === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
    else if (e === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
    else if (t.cx != null && t.cy != null)
        if (e === "centric") {
            var u = t.cx,
                l = t.cy,
                s = t.innerRadius,
                f = t.outerRadius,
                c = t.angle,
                d = Ge(u, l, s, c),
                p = Ge(u, l, f, c);
            n = d.x, i = d.y, a = p.x, o = p.y
        } else return d_(t);
    return [{
        x: n,
        y: i
    }, {
        x: a,
        y: o
    }]
}

function eu(e) {
    "@babel/helpers - typeof";
    return eu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, eu(e)
}

function Db(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Hu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Db(Object(r), !0).forEach(function(n) {
            MV(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Db(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function MV(e, t, r) {
    return t = IV(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function IV(e) {
    var t = NV(e, "string");
    return eu(t) == "symbol" ? t : t + ""
}

function NV(e, t) {
    if (eu(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (eu(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function DV(e) {
    var t, r, n = e.element,
        i = e.tooltipEventType,
        a = e.isActive,
        o = e.activeCoordinate,
        u = e.activePayload,
        l = e.offset,
        s = e.activeTooltipIndex,
        f = e.tooltipAxisBandSize,
        c = e.layout,
        d = e.chartName,
        p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
    if (!n || !p || !a || !o || d !== "ScatterChart" && i !== "axis") return null;
    var h, y = vp;
    if (d === "ScatterChart") h = o, y = NU;
    else if (d === "BarChart") h = jV(c, o, l, f), y = Iv;
    else if (c === "radial") {
        var w = d_(o),
            m = w.cx,
            v = w.cy,
            g = w.radius,
            S = w.startAngle,
            b = w.endAngle;
        h = {
            cx: m,
            cy: v,
            startAngle: S,
            endAngle: b,
            innerRadius: g,
            outerRadius: g
        }, y = vO
    } else h = {
        points: kV(c, o, l)
    }, y = vp;
    var x = Hu(Hu(Hu(Hu({
        stroke: "#ccc",
        pointerEvents: "none"
    }, l), h), ee(p, !1)), {}, {
        payload: u,
        payloadIndex: s,
        className: ie("recharts-tooltip-cursor", p.className)
    });
    return F.isValidElement(p) ? F.cloneElement(p, x) : F.createElement(y, x)
}
var LV = ["item"],
    RV = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

function ra(e) {
    "@babel/helpers - typeof";
    return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ra(e)
}

function gi() {
    return gi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, gi.apply(this, arguments)
}

function Lb(e, t) {
    return FV(e) || zV(e, t) || h_(e, t) || BV()
}

function BV() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function zV(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            l = !0,
            s = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
        } catch (f) {
            s = !0, i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (s) throw i
            }
        }
        return u
    }
}

function FV(e) {
    if (Array.isArray(e)) return e
}

function Rb(e, t) {
    if (e == null) return {};
    var r = UV(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function UV(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        }
    return r
}

function WV(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function HV(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, v_(n.key), n)
    }
}

function VV(e, t, r) {
    return t && HV(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function KV(e, t, r) {
    return t = _s(t), GV(e, p_() ? Reflect.construct(t, r || [], _s(e).constructor) : t.apply(e, r))
}

function GV(e, t) {
    if (t && (ra(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return qV(e)
}

function qV(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function p_() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (p_ = function() {
        return !!e
    })()
}

function _s(e) {
    return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, _s(e)
}

function XV(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Vp(e, t)
}

function Vp(e, t) {
    return Vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Vp(e, t)
}

function na(e) {
    return ZV(e) || QV(e) || h_(e) || YV()
}

function YV() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function h_(e, t) {
    if (e) {
        if (typeof e == "string") return Kp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kp(e, t)
    }
}

function QV(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function ZV(e) {
    if (Array.isArray(e)) return Kp(e)
}

function Kp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function Bb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Bb(Object(r), !0).forEach(function(n) {
            X(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bb(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function X(e, t, r) {
    return t = v_(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function v_(e) {
    var t = JV(e, "string");
    return ra(t) == "symbol" ? t : t + ""
}

function JV(e, t) {
    if (ra(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ra(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var eK = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
    },
    tK = {
        width: "100%",
        height: "100%"
    },
    y_ = {
        x: 0,
        y: 0
    };

function Vu(e) {
    return e
}
var rK = function(t, r) {
        return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius
    },
    nK = function(t, r, n, i) {
        var a = r.find(function(f) {
            return f && f.index === n
        });
        if (a) {
            if (t === "horizontal") return {
                x: a.coordinate,
                y: i.y
            };
            if (t === "vertical") return {
                x: i.x,
                y: a.coordinate
            };
            if (t === "centric") {
                var o = a.coordinate,
                    u = i.radius;
                return j(j(j({}, i), Ge(i.cx, i.cy, u, o)), {}, {
                    angle: o,
                    radius: u
                })
            }
            var l = a.coordinate,
                s = i.angle;
            return j(j(j({}, i), Ge(i.cx, i.cy, l, s)), {}, {
                angle: s,
                radius: l
            })
        }
        return y_
    },
    Tc = function(t, r) {
        var n = r.graphicalItems,
            i = r.dataStartIndex,
            a = r.dataEndIndex,
            o = (n ? ? []).reduce(function(u, l) {
                var s = l.props.data;
                return s && s.length ? [].concat(na(u), na(s)) : u
            }, []);
        return o.length > 0 ? o : t && t.length && W(i) && W(a) ? t.slice(i, a + 1) : []
    };

function m_(e) {
    return e === "number" ? [0, "auto"] : void 0
}
var Gp = function(t, r, n, i) {
        var a = t.graphicalItems,
            o = t.tooltipAxis,
            u = Tc(r, t);
        return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(l, s) {
            var f, c = (f = s.props.data) !== null && f !== void 0 ? f : r;
            c && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1));
            var d;
            if (o.dataKey && !o.allowDuplicatedCategory) {
                var p = c === void 0 ? u : c;
                d = Al(p, o.dataKey, i)
            } else d = c && c[n] || u[n];
            return d ? [].concat(na(l), [dO(s, d)]) : l
        }, [])
    },
    zb = function(t, r, n, i) {
        var a = i || {
                x: t.chartX,
                y: t.chartY
            },
            o = rK(a, n),
            u = t.orderedTooltipTicks,
            l = t.tooltipAxis,
            s = t.tooltipTicks,
            f = mF(o, u, s, l);
        if (f >= 0 && s) {
            var c = s[f] && s[f].value,
                d = Gp(t, r, f, c),
                p = nK(n, u, f, a);
            return {
                activeTooltipIndex: f,
                activeLabel: c,
                activePayload: d,
                activeCoordinate: p
            }
        }
        return null
    },
    iK = function(t, r) {
        var n = r.axes,
            i = r.graphicalItems,
            a = r.axisType,
            o = r.axisIdKey,
            u = r.stackGroups,
            l = r.dataStartIndex,
            s = r.dataEndIndex,
            f = t.layout,
            c = t.children,
            d = t.stackOffset,
            p = sO(f, a);
        return n.reduce(function(h, y) {
            var w, m = y.type.defaultProps !== void 0 ? j(j({}, y.type.defaultProps), y.props) : y.props,
                v = m.type,
                g = m.dataKey,
                S = m.allowDataOverflow,
                b = m.allowDuplicatedCategory,
                x = m.scale,
                O = m.ticks,
                _ = m.includeHidden,
                P = m[o];
            if (h[P]) return h;
            var $ = Tc(t.data, {
                    graphicalItems: i.filter(function(U) {
                        var q, te = o in U.props ? U.props[o] : (q = U.type.defaultProps) === null || q === void 0 ? void 0 : q[o];
                        return te === P
                    }),
                    dataStartIndex: l,
                    dataEndIndex: s
                }),
                E = $.length,
                T, I, N;
            CV(m.domain, S, v) && (T = cp(m.domain, null, S), p && (v === "number" || x !== "auto") && (N = Ja($, g, "category")));
            var k = m_(v);
            if (!T || T.length === 0) {
                var D, L = (D = m.domain) !== null && D !== void 0 ? D : k;
                if (g) {
                    if (T = Ja($, g, v), v === "category" && p) {
                        var C = iC(T);
                        b && C ? (I = T, T = fs(0, E)) : b || (T = g0(L, T, y).reduce(function(U, q) {
                            return U.indexOf(q) >= 0 ? U : [].concat(na(U), [q])
                        }, []))
                    } else if (v === "category") b ? T = T.filter(function(U) {
                        return U !== "" && !J(U)
                    }) : T = g0(L, T, y).reduce(function(U, q) {
                        return U.indexOf(q) >= 0 || q === "" || J(q) ? U : [].concat(na(U), [q])
                    }, []);
                    else if (v === "number") {
                        var M = SF($, i.filter(function(U) {
                            var q, te, ge = o in U.props ? U.props[o] : (q = U.type.defaultProps) === null || q === void 0 ? void 0 : q[o],
                                Ee = "hide" in U.props ? U.props.hide : (te = U.type.defaultProps) === null || te === void 0 ? void 0 : te.hide;
                            return ge === P && (_ || !Ee)
                        }), g, a, f);
                        M && (T = M)
                    }
                    p && (v === "number" || x !== "auto") && (N = Ja($, g, "category"))
                } else p ? T = fs(0, E) : u && u[P] && u[P].hasStack && v === "number" ? T = d === "expand" ? [0, 1] : fO(u[P].stackGroups, l, s) : T = lO($, i.filter(function(U) {
                    var q = o in U.props ? U.props[o] : U.type.defaultProps[o],
                        te = "hide" in U.props ? U.props.hide : U.type.defaultProps.hide;
                    return q === P && (_ || !te)
                }), v, f, !0);
                if (v === "number") T = Hp(c, T, P, a, O), L && (T = cp(L, T, S));
                else if (v === "category" && L) {
                    var B = L,
                        H = T.every(function(U) {
                            return B.indexOf(U) >= 0
                        });
                    H && (T = B)
                }
            }
            return j(j({}, h), {}, X({}, P, j(j({}, m), {}, {
                axisType: a,
                domain: T,
                categoricalDomain: N,
                duplicateDomain: I,
                originalDomain: (w = m.domain) !== null && w !== void 0 ? w : k,
                isCategorical: p,
                layout: f
            })))
        }, {})
    },
    aK = function(t, r) {
        var n = r.graphicalItems,
            i = r.Axis,
            a = r.axisType,
            o = r.axisIdKey,
            u = r.stackGroups,
            l = r.dataStartIndex,
            s = r.dataEndIndex,
            f = t.layout,
            c = t.children,
            d = Tc(t.data, {
                graphicalItems: n,
                dataStartIndex: l,
                dataEndIndex: s
            }),
            p = d.length,
            h = sO(f, a),
            y = -1;
        return n.reduce(function(w, m) {
            var v = m.type.defaultProps !== void 0 ? j(j({}, m.type.defaultProps), m.props) : m.props,
                g = v[o],
                S = m_("number");
            if (!w[g]) {
                y++;
                var b;
                return h ? b = fs(0, p) : u && u[g] && u[g].hasStack ? (b = fO(u[g].stackGroups, l, s), b = Hp(c, b, g, a)) : (b = cp(S, lO(d, n.filter(function(x) {
                    var O, _, P = o in x.props ? x.props[o] : (O = x.type.defaultProps) === null || O === void 0 ? void 0 : O[o],
                        $ = "hide" in x.props ? x.props.hide : (_ = x.type.defaultProps) === null || _ === void 0 ? void 0 : _.hide;
                    return P === g && !$
                }), "number", f), i.defaultProps.allowDataOverflow), b = Hp(c, b, g, a)), j(j({}, w), {}, X({}, g, j(j({
                    axisType: a
                }, i.defaultProps), {}, {
                    hide: !0,
                    orientation: Dt(eK, "".concat(a, ".").concat(y % 2), null),
                    domain: b,
                    originalDomain: S,
                    isCategorical: h,
                    layout: f
                })))
            }
            return w
        }, {})
    },
    oK = function(t, r) {
        var n = r.axisType,
            i = n === void 0 ? "xAxis" : n,
            a = r.AxisComp,
            o = r.graphicalItems,
            u = r.stackGroups,
            l = r.dataStartIndex,
            s = r.dataEndIndex,
            f = t.children,
            c = "".concat(i, "Id"),
            d = Lt(f, a),
            p = {};
        return d && d.length ? p = iK(t, {
            axes: d,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: s
        }) : o && o.length && (p = aK(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: s
        })), p
    },
    uK = function(t) {
        var r = Kr(t),
            n = xr(r, !1, !0);
        return {
            tooltipTicks: n,
            orderedTooltipTicks: uv(n, function(i) {
                return i.coordinate
            }),
            tooltipAxis: r,
            tooltipAxisBandSize: rs(r, n)
        }
    },
    Fb = function(t) {
        var r = t.children,
            n = t.defaultShowTooltip,
            i = bt(r, Gi),
            a = 0,
            o = 0;
        return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
            chartX: 0,
            chartY: 0,
            dataStartIndex: a,
            dataEndIndex: o,
            activeTooltipIndex: -1,
            isTooltipActive: !!n
        }
    },
    lK = function(t) {
        return !t || !t.length ? !1 : t.some(function(r) {
            var n = Or(r && r.type);
            return n && n.indexOf("Bar") >= 0
        })
    },
    Ub = function(t) {
        return t === "horizontal" ? {
            numericAxisName: "yAxis",
            cateAxisName: "xAxis"
        } : t === "vertical" ? {
            numericAxisName: "xAxis",
            cateAxisName: "yAxis"
        } : t === "centric" ? {
            numericAxisName: "radiusAxis",
            cateAxisName: "angleAxis"
        } : {
            numericAxisName: "angleAxis",
            cateAxisName: "radiusAxis"
        }
    },
    sK = function(t, r) {
        var n = t.props,
            i = t.graphicalItems,
            a = t.xAxisMap,
            o = a === void 0 ? {} : a,
            u = t.yAxisMap,
            l = u === void 0 ? {} : u,
            s = n.width,
            f = n.height,
            c = n.children,
            d = n.margin || {},
            p = bt(c, Gi),
            h = bt(c, Ai),
            y = Object.keys(l).reduce(function(b, x) {
                var O = l[x],
                    _ = O.orientation;
                return !O.mirror && !O.hide ? j(j({}, b), {}, X({}, _, b[_] + O.width)) : b
            }, {
                left: d.left || 0,
                right: d.right || 0
            }),
            w = Object.keys(o).reduce(function(b, x) {
                var O = o[x],
                    _ = O.orientation;
                return !O.mirror && !O.hide ? j(j({}, b), {}, X({}, _, Dt(b, "".concat(_)) + O.height)) : b
            }, {
                top: d.top || 0,
                bottom: d.bottom || 0
            }),
            m = j(j({}, w), y),
            v = m.bottom;
        p && (m.bottom += p.props.height || Gi.defaultProps.height), h && r && (m = wF(m, i, n, r));
        var g = s - m.left - m.right,
            S = f - m.top - m.bottom;
        return j(j({
            brushBottom: v
        }, m), {}, {
            width: Math.max(g, 0),
            height: Math.max(S, 0)
        })
    },
    cK = function(t, r) {
        if (r === "xAxis") return t[r].width;
        if (r === "yAxis") return t[r].height
    },
    g_ = function(t) {
        var r = t.chartName,
            n = t.GraphicalChild,
            i = t.defaultTooltipEventType,
            a = i === void 0 ? "axis" : i,
            o = t.validateTooltipEventTypes,
            u = o === void 0 ? ["axis"] : o,
            l = t.axisComponents,
            s = t.legendContent,
            f = t.formatAxisMap,
            c = t.defaultProps,
            d = function(m, v) {
                var g = v.graphicalItems,
                    S = v.stackGroups,
                    b = v.offset,
                    x = v.updateId,
                    O = v.dataStartIndex,
                    _ = v.dataEndIndex,
                    P = m.barSize,
                    $ = m.layout,
                    E = m.barGap,
                    T = m.barCategoryGap,
                    I = m.maxBarSize,
                    N = Ub($),
                    k = N.numericAxisName,
                    D = N.cateAxisName,
                    L = lK(g),
                    C = [];
                return g.forEach(function(M, B) {
                    var H = Tc(m.data, {
                            graphicalItems: [M],
                            dataStartIndex: O,
                            dataEndIndex: _
                        }),
                        U = M.type.defaultProps !== void 0 ? j(j({}, M.type.defaultProps), M.props) : M.props,
                        q = U.dataKey,
                        te = U.maxBarSize,
                        ge = U["".concat(k, "Id")],
                        Ee = U["".concat(D, "Id")],
                        Et = {},
                        ut = l.reduce(function(mn, gn) {
                            var Cc = v["".concat(gn.axisType, "Map")],
                                Vv = U["".concat(gn.axisType, "Id")];
                            Cc && Cc[Vv] || gn.axisType === "zAxis" || Hn();
                            var Kv = Cc[Vv];
                            return j(j({}, mn), {}, X(X({}, gn.axisType, Kv), "".concat(gn.axisType, "Ticks"), xr(Kv)))
                        }, Et),
                        V = ut[D],
                        Y = ut["".concat(D, "Ticks")],
                        Q = S && S[ge] && S[ge].hasStack && IF(M, S[ge].stackGroups),
                        R = Or(M.type).indexOf("Bar") >= 0,
                        _e = rs(V, Y),
                        re = [],
                        Me = L && gF({
                            barSize: P,
                            stackGroups: S,
                            totalSize: cK(ut, D)
                        });
                    if (R) {
                        var Ie, lt, Br = J(te) ? I : te,
                            Zn = (Ie = (lt = rs(V, Y, !0)) !== null && lt !== void 0 ? lt : Br) !== null && Ie !== void 0 ? Ie : 0;
                        re = bF({
                            barGap: E,
                            barCategoryGap: T,
                            bandSize: Zn !== _e ? Zn : _e,
                            sizeList: Me[Ee],
                            maxBarSize: Br
                        }), Zn !== _e && (re = re.map(function(mn) {
                            return j(j({}, mn), {}, {
                                position: j(j({}, mn.position), {}, {
                                    offset: mn.position.offset - Zn / 2
                                })
                            })
                        }))
                    }
                    var hu = M && M.type && M.type.getComposedData;
                    hu && C.push({
                        props: j(j({}, hu(j(j({}, ut), {}, {
                            displayedData: H,
                            props: m,
                            dataKey: q,
                            item: M,
                            bandSize: _e,
                            barPosition: re,
                            offset: b,
                            stackedData: Q,
                            layout: $,
                            dataStartIndex: O,
                            dataEndIndex: _
                        }))), {}, X(X(X({
                            key: M.key || "item-".concat(B)
                        }, k, ut[k]), D, ut[D]), "animationId", x)),
                        childIndex: mC(M, m.children),
                        item: M
                    })
                }), C
            },
            p = function(m, v) {
                var g = m.props,
                    S = m.dataStartIndex,
                    b = m.dataEndIndex,
                    x = m.updateId;
                if (!fm({
                        props: g
                    })) return null;
                var O = g.children,
                    _ = g.layout,
                    P = g.stackOffset,
                    $ = g.data,
                    E = g.reverseStackOrder,
                    T = Ub(_),
                    I = T.numericAxisName,
                    N = T.cateAxisName,
                    k = Lt(O, n),
                    D = jF($, k, "".concat(I, "Id"), "".concat(N, "Id"), P, E),
                    L = l.reduce(function(U, q) {
                        var te = "".concat(q.axisType, "Map");
                        return j(j({}, U), {}, X({}, te, oK(g, j(j({}, q), {}, {
                            graphicalItems: k,
                            stackGroups: q.axisType === I && D,
                            dataStartIndex: S,
                            dataEndIndex: b
                        }))))
                    }, {}),
                    C = sK(j(j({}, L), {}, {
                        props: g,
                        graphicalItems: k
                    }), v == null ? void 0 : v.legendBBox);
                Object.keys(L).forEach(function(U) {
                    L[U] = f(g, L[U], C, U.replace("Map", ""), r)
                });
                var M = L["".concat(N, "Map")],
                    B = uK(M),
                    H = d(g, j(j({}, L), {}, {
                        dataStartIndex: S,
                        dataEndIndex: b,
                        updateId: x,
                        graphicalItems: k,
                        stackGroups: D,
                        offset: C
                    }));
                return j(j({
                    formattedGraphicalItems: H,
                    graphicalItems: k,
                    offset: C,
                    stackGroups: D
                }, B), L)
            },
            h = function(w) {
                function m(v) {
                    var g, S, b;
                    return WV(this, m), b = KV(this, m, [v]), X(b, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), X(b, "accessibilityManager", new TV), X(b, "handleLegendBBoxUpdate", function(x) {
                        if (x) {
                            var O = b.state,
                                _ = O.dataStartIndex,
                                P = O.dataEndIndex,
                                $ = O.updateId;
                            b.setState(j({
                                legendBBox: x
                            }, p({
                                props: b.props,
                                dataStartIndex: _,
                                dataEndIndex: P,
                                updateId: $
                            }, j(j({}, b.state), {}, {
                                legendBBox: x
                            }))))
                        }
                    }), X(b, "handleReceiveSyncEvent", function(x, O, _) {
                        if (b.props.syncId === x) {
                            if (_ === b.eventEmitterSymbol && typeof b.props.syncMethod != "function") return;
                            b.applySyncEvent(O)
                        }
                    }), X(b, "handleBrushChange", function(x) {
                        var O = x.startIndex,
                            _ = x.endIndex;
                        if (O !== b.state.dataStartIndex || _ !== b.state.dataEndIndex) {
                            var P = b.state.updateId;
                            b.setState(function() {
                                return j({
                                    dataStartIndex: O,
                                    dataEndIndex: _
                                }, p({
                                    props: b.props,
                                    dataStartIndex: O,
                                    dataEndIndex: _,
                                    updateId: P
                                }, b.state))
                            }), b.triggerSyncEvent({
                                dataStartIndex: O,
                                dataEndIndex: _
                            })
                        }
                    }), X(b, "handleMouseEnter", function(x) {
                        var O = b.getMouseInfo(x);
                        if (O) {
                            var _ = j(j({}, O), {}, {
                                isTooltipActive: !0
                            });
                            b.setState(_), b.triggerSyncEvent(_);
                            var P = b.props.onMouseEnter;
                            Z(P) && P(_, x)
                        }
                    }), X(b, "triggeredAfterMouseMove", function(x) {
                        var O = b.getMouseInfo(x),
                            _ = O ? j(j({}, O), {}, {
                                isTooltipActive: !0
                            }) : {
                                isTooltipActive: !1
                            };
                        b.setState(_), b.triggerSyncEvent(_);
                        var P = b.props.onMouseMove;
                        Z(P) && P(_, x)
                    }), X(b, "handleItemMouseEnter", function(x) {
                        b.setState(function() {
                            return {
                                isTooltipActive: !0,
                                activeItem: x,
                                activePayload: x.tooltipPayload,
                                activeCoordinate: x.tooltipPosition || {
                                    x: x.cx,
                                    y: x.cy
                                }
                            }
                        })
                    }), X(b, "handleItemMouseLeave", function() {
                        b.setState(function() {
                            return {
                                isTooltipActive: !1
                            }
                        })
                    }), X(b, "handleMouseMove", function(x) {
                        x.persist(), b.throttleTriggeredAfterMouseMove(x)
                    }), X(b, "handleMouseLeave", function(x) {
                        b.throttleTriggeredAfterMouseMove.cancel();
                        var O = {
                            isTooltipActive: !1
                        };
                        b.setState(O), b.triggerSyncEvent(O);
                        var _ = b.props.onMouseLeave;
                        Z(_) && _(O, x)
                    }), X(b, "handleOuterEvent", function(x) {
                        var O = yC(x),
                            _ = Dt(b.props, "".concat(O));
                        if (O && Z(_)) {
                            var P, $;
                            /.*touch.*/i.test(O) ? $ = b.getMouseInfo(x.changedTouches[0]) : $ = b.getMouseInfo(x), _((P = $) !== null && P !== void 0 ? P : {}, x)
                        }
                    }), X(b, "handleClick", function(x) {
                        var O = b.getMouseInfo(x);
                        if (O) {
                            var _ = j(j({}, O), {}, {
                                isTooltipActive: !0
                            });
                            b.setState(_), b.triggerSyncEvent(_);
                            var P = b.props.onClick;
                            Z(P) && P(_, x)
                        }
                    }), X(b, "handleMouseDown", function(x) {
                        var O = b.props.onMouseDown;
                        if (Z(O)) {
                            var _ = b.getMouseInfo(x);
                            O(_, x)
                        }
                    }), X(b, "handleMouseUp", function(x) {
                        var O = b.props.onMouseUp;
                        if (Z(O)) {
                            var _ = b.getMouseInfo(x);
                            O(_, x)
                        }
                    }), X(b, "handleTouchMove", function(x) {
                        x.changedTouches != null && x.changedTouches.length > 0 && b.throttleTriggeredAfterMouseMove(x.changedTouches[0])
                    }), X(b, "handleTouchStart", function(x) {
                        x.changedTouches != null && x.changedTouches.length > 0 && b.handleMouseDown(x.changedTouches[0])
                    }), X(b, "handleTouchEnd", function(x) {
                        x.changedTouches != null && x.changedTouches.length > 0 && b.handleMouseUp(x.changedTouches[0])
                    }), X(b, "handleDoubleClick", function(x) {
                        var O = b.props.onDoubleClick;
                        if (Z(O)) {
                            var _ = b.getMouseInfo(x);
                            O(_, x)
                        }
                    }), X(b, "handleContextMenu", function(x) {
                        var O = b.props.onContextMenu;
                        if (Z(O)) {
                            var _ = b.getMouseInfo(x);
                            O(_, x)
                        }
                    }), X(b, "triggerSyncEvent", function(x) {
                        b.props.syncId !== void 0 && $f.emit(Tf, b.props.syncId, x, b.eventEmitterSymbol)
                    }), X(b, "applySyncEvent", function(x) {
                        var O = b.props,
                            _ = O.layout,
                            P = O.syncMethod,
                            $ = b.state.updateId,
                            E = x.dataStartIndex,
                            T = x.dataEndIndex;
                        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0) b.setState(j({
                            dataStartIndex: E,
                            dataEndIndex: T
                        }, p({
                            props: b.props,
                            dataStartIndex: E,
                            dataEndIndex: T,
                            updateId: $
                        }, b.state)));
                        else if (x.activeTooltipIndex !== void 0) {
                            var I = x.chartX,
                                N = x.chartY,
                                k = x.activeTooltipIndex,
                                D = b.state,
                                L = D.offset,
                                C = D.tooltipTicks;
                            if (!L) return;
                            if (typeof P == "function") k = P(C, x);
                            else if (P === "value") {
                                k = -1;
                                for (var M = 0; M < C.length; M++)
                                    if (C[M].value === x.activeLabel) {
                                        k = M;
                                        break
                                    }
                            }
                            var B = j(j({}, L), {}, {
                                    x: L.left,
                                    y: L.top
                                }),
                                H = Math.min(I, B.x + B.width),
                                U = Math.min(N, B.y + B.height),
                                q = C[k] && C[k].value,
                                te = Gp(b.state, b.props.data, k),
                                ge = C[k] ? {
                                    x: _ === "horizontal" ? C[k].coordinate : H,
                                    y: _ === "horizontal" ? U : C[k].coordinate
                                } : y_;
                            b.setState(j(j({}, x), {}, {
                                activeLabel: q,
                                activeCoordinate: ge,
                                activePayload: te,
                                activeTooltipIndex: k
                            }))
                        } else b.setState(x)
                    }), X(b, "renderCursor", function(x) {
                        var O, _ = b.state,
                            P = _.isTooltipActive,
                            $ = _.activeCoordinate,
                            E = _.activePayload,
                            T = _.offset,
                            I = _.activeTooltipIndex,
                            N = _.tooltipAxisBandSize,
                            k = b.getTooltipEventType(),
                            D = (O = x.props.active) !== null && O !== void 0 ? O : P,
                            L = b.props.layout,
                            C = x.key || "_recharts-cursor";
                        return A.createElement(DV, {
                            key: C,
                            activeCoordinate: $,
                            activePayload: E,
                            activeTooltipIndex: I,
                            chartName: r,
                            element: x,
                            isActive: D,
                            layout: L,
                            offset: T,
                            tooltipAxisBandSize: N,
                            tooltipEventType: k
                        })
                    }), X(b, "renderPolarAxis", function(x, O, _) {
                        var P = Dt(x, "type.axisType"),
                            $ = Dt(b.state, "".concat(P, "Map")),
                            E = x.type.defaultProps,
                            T = E !== void 0 ? j(j({}, E), x.props) : x.props,
                            I = $ && $[T["".concat(P, "Id")]];
                        return F.cloneElement(x, j(j({}, I), {}, {
                            className: ie(P, I.className),
                            key: x.key || "".concat(O, "-").concat(_),
                            ticks: xr(I, !0)
                        }))
                    }), X(b, "renderPolarGrid", function(x) {
                        var O = x.props,
                            _ = O.radialLines,
                            P = O.polarAngles,
                            $ = O.polarRadius,
                            E = b.state,
                            T = E.radiusAxisMap,
                            I = E.angleAxisMap,
                            N = Kr(T),
                            k = Kr(I),
                            D = k.cx,
                            L = k.cy,
                            C = k.innerRadius,
                            M = k.outerRadius;
                        return F.cloneElement(x, {
                            polarAngles: Array.isArray(P) ? P : xr(k, !0).map(function(B) {
                                return B.coordinate
                            }),
                            polarRadius: Array.isArray($) ? $ : xr(N, !0).map(function(B) {
                                return B.coordinate
                            }),
                            cx: D,
                            cy: L,
                            innerRadius: C,
                            outerRadius: M,
                            key: x.key || "polar-grid",
                            radialLines: _
                        })
                    }), X(b, "renderLegend", function() {
                        var x = b.state.formattedGraphicalItems,
                            O = b.props,
                            _ = O.children,
                            P = O.width,
                            $ = O.height,
                            E = b.props.margin || {},
                            T = P - (E.left || 0) - (E.right || 0),
                            I = oO({
                                children: _,
                                formattedGraphicalItems: x,
                                legendWidth: T,
                                legendContent: s
                            });
                        if (!I) return null;
                        var N = I.item,
                            k = Rb(I, LV);
                        return F.cloneElement(N, j(j({}, k), {}, {
                            chartWidth: P,
                            chartHeight: $,
                            margin: E,
                            onBBoxUpdate: b.handleLegendBBoxUpdate
                        }))
                    }), X(b, "renderTooltip", function() {
                        var x, O = b.props,
                            _ = O.children,
                            P = O.accessibilityLayer,
                            $ = bt(_, vr);
                        if (!$) return null;
                        var E = b.state,
                            T = E.isTooltipActive,
                            I = E.activeCoordinate,
                            N = E.activePayload,
                            k = E.activeLabel,
                            D = E.offset,
                            L = (x = $.props.active) !== null && x !== void 0 ? x : T;
                        return F.cloneElement($, {
                            viewBox: j(j({}, D), {}, {
                                x: D.left,
                                y: D.top
                            }),
                            active: L,
                            label: k,
                            payload: L ? N : [],
                            coordinate: I,
                            accessibilityLayer: P
                        })
                    }), X(b, "renderBrush", function(x) {
                        var O = b.props,
                            _ = O.margin,
                            P = O.data,
                            $ = b.state,
                            E = $.offset,
                            T = $.dataStartIndex,
                            I = $.dataEndIndex,
                            N = $.updateId;
                        return F.cloneElement(x, {
                            key: x.key || "_recharts-brush",
                            onChange: zu(b.handleBrushChange, x.props.onChange),
                            data: P,
                            x: W(x.props.x) ? x.props.x : E.left,
                            y: W(x.props.y) ? x.props.y : E.top + E.height + E.brushBottom - (_.bottom || 0),
                            width: W(x.props.width) ? x.props.width : E.width,
                            startIndex: T,
                            endIndex: I,
                            updateId: "brush-".concat(N)
                        })
                    }), X(b, "renderReferenceElement", function(x, O, _) {
                        if (!x) return null;
                        var P = b,
                            $ = P.clipPathId,
                            E = b.state,
                            T = E.xAxisMap,
                            I = E.yAxisMap,
                            N = E.offset,
                            k = x.type.defaultProps || {},
                            D = x.props,
                            L = D.xAxisId,
                            C = L === void 0 ? k.xAxisId : L,
                            M = D.yAxisId,
                            B = M === void 0 ? k.yAxisId : M;
                        return F.cloneElement(x, {
                            key: x.key || "".concat(O, "-").concat(_),
                            xAxis: T[C],
                            yAxis: I[B],
                            viewBox: {
                                x: N.left,
                                y: N.top,
                                width: N.width,
                                height: N.height
                            },
                            clipPathId: $
                        })
                    }), X(b, "renderActivePoints", function(x) {
                        var O = x.item,
                            _ = x.activePoint,
                            P = x.basePoint,
                            $ = x.childIndex,
                            E = x.isRange,
                            T = [],
                            I = O.props.key,
                            N = O.item.type.defaultProps !== void 0 ? j(j({}, O.item.type.defaultProps), O.item.props) : O.item.props,
                            k = N.activeDot,
                            D = N.dataKey,
                            L = j(j({
                                index: $,
                                dataKey: D,
                                cx: _.x,
                                cy: _.y,
                                r: 4,
                                fill: Mv(O.item),
                                strokeWidth: 2,
                                stroke: "#fff",
                                payload: _.payload,
                                value: _.value
                            }, ee(k, !1)), El(k));
                        return T.push(m.renderActiveDot(k, L, "".concat(I, "-activePoint-").concat($))), P ? T.push(m.renderActiveDot(k, j(j({}, L), {}, {
                            cx: P.x,
                            cy: P.y
                        }), "".concat(I, "-basePoint-").concat($))) : E && T.push(null), T
                    }), X(b, "renderGraphicChild", function(x, O, _) {
                        var P = b.filterFormatItem(x, O, _);
                        if (!P) return null;
                        var $ = b.getTooltipEventType(),
                            E = b.state,
                            T = E.isTooltipActive,
                            I = E.tooltipAxis,
                            N = E.activeTooltipIndex,
                            k = E.activeLabel,
                            D = b.props.children,
                            L = bt(D, vr),
                            C = P.props,
                            M = C.points,
                            B = C.isRange,
                            H = C.baseLine,
                            U = P.item.type.defaultProps !== void 0 ? j(j({}, P.item.type.defaultProps), P.item.props) : P.item.props,
                            q = U.activeDot,
                            te = U.hide,
                            ge = U.activeBar,
                            Ee = U.activeShape,
                            Et = !!(!te && T && L && (q || ge || Ee)),
                            ut = {};
                        $ !== "axis" && L && L.props.trigger === "click" ? ut = {
                            onClick: zu(b.handleItemMouseEnter, x.props.onClick)
                        } : $ !== "axis" && (ut = {
                            onMouseLeave: zu(b.handleItemMouseLeave, x.props.onMouseLeave),
                            onMouseEnter: zu(b.handleItemMouseEnter, x.props.onMouseEnter)
                        });
                        var V = F.cloneElement(x, j(j({}, P.props), ut));

                        function Y(gn) {
                            return typeof I.dataKey == "function" ? I.dataKey(gn.payload) : null
                        }
                        if (Et)
                            if (N >= 0) {
                                var Q, R;
                                if (I.dataKey && !I.allowDuplicatedCategory) {
                                    var _e = typeof I.dataKey == "function" ? Y : "payload.".concat(I.dataKey.toString());
                                    Q = Al(M, _e, k), R = B && H && Al(H, _e, k)
                                } else Q = M == null ? void 0 : M[N], R = B && H && H[N];
                                if (Ee || ge) {
                                    var re = x.props.activeIndex !== void 0 ? x.props.activeIndex : N;
                                    return [F.cloneElement(x, j(j(j({}, P.props), ut), {}, {
                                        activeIndex: re
                                    })), null, null]
                                }
                                if (!J(Q)) return [V].concat(na(b.renderActivePoints({
                                    item: P,
                                    activePoint: Q,
                                    basePoint: R,
                                    childIndex: N,
                                    isRange: B
                                })))
                            } else {
                                var Me, Ie = (Me = b.getItemByXY(b.state.activeCoordinate)) !== null && Me !== void 0 ? Me : {
                                        graphicalItem: V
                                    },
                                    lt = Ie.graphicalItem,
                                    Br = lt.item,
                                    Zn = Br === void 0 ? x : Br,
                                    hu = lt.childIndex,
                                    mn = j(j(j({}, P.props), ut), {}, {
                                        activeIndex: hu
                                    });
                                return [F.cloneElement(Zn, mn), null, null]
                            }
                        return B ? [V, null, null] : [V, null]
                    }), X(b, "renderCustomized", function(x, O, _) {
                        return F.cloneElement(x, j(j({
                            key: "recharts-customized-".concat(_)
                        }, b.props), b.state))
                    }), X(b, "renderMap", {
                        CartesianGrid: {
                            handler: Vu,
                            once: !0
                        },
                        ReferenceArea: {
                            handler: b.renderReferenceElement
                        },
                        ReferenceLine: {
                            handler: Vu
                        },
                        ReferenceDot: {
                            handler: b.renderReferenceElement
                        },
                        XAxis: {
                            handler: Vu
                        },
                        YAxis: {
                            handler: Vu
                        },
                        Brush: {
                            handler: b.renderBrush,
                            once: !0
                        },
                        Bar: {
                            handler: b.renderGraphicChild
                        },
                        Line: {
                            handler: b.renderGraphicChild
                        },
                        Area: {
                            handler: b.renderGraphicChild
                        },
                        Radar: {
                            handler: b.renderGraphicChild
                        },
                        RadialBar: {
                            handler: b.renderGraphicChild
                        },
                        Scatter: {
                            handler: b.renderGraphicChild
                        },
                        Pie: {
                            handler: b.renderGraphicChild
                        },
                        Funnel: {
                            handler: b.renderGraphicChild
                        },
                        Tooltip: {
                            handler: b.renderCursor,
                            once: !0
                        },
                        PolarGrid: {
                            handler: b.renderPolarGrid,
                            once: !0
                        },
                        PolarAngleAxis: {
                            handler: b.renderPolarAxis
                        },
                        PolarRadiusAxis: {
                            handler: b.renderPolarAxis
                        },
                        Customized: {
                            handler: b.renderCustomized
                        }
                    }), b.clipPathId = "".concat((g = v.id) !== null && g !== void 0 ? g : uu("recharts"), "-clip"), b.throttleTriggeredAfterMouseMove = aS(b.triggeredAfterMouseMove, (S = v.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), b.state = {}, b
                }
                return XV(m, w), VV(m, [{
                    key: "componentDidMount",
                    value: function() {
                        var g, S;
                        this.addListener(), this.accessibilityManager.setDetails({
                            container: this.container,
                            offset: {
                                left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0,
                                top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
                            },
                            coordinateList: this.state.tooltipTicks,
                            mouseHandlerCallback: this.triggeredAfterMouseMove,
                            layout: this.props.layout
                        }), this.displayDefaultTooltip()
                    }
                }, {
                    key: "displayDefaultTooltip",
                    value: function() {
                        var g = this.props,
                            S = g.children,
                            b = g.data,
                            x = g.height,
                            O = g.layout,
                            _ = bt(S, vr);
                        if (_) {
                            var P = _.props.defaultIndex;
                            if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
                                var $ = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value,
                                    E = Gp(this.state, b, P, $),
                                    T = this.state.tooltipTicks[P].coordinate,
                                    I = (this.state.offset.top + x) / 2,
                                    N = O === "horizontal",
                                    k = N ? {
                                        x: T,
                                        y: I
                                    } : {
                                        y: T,
                                        x: I
                                    },
                                    D = this.state.formattedGraphicalItems.find(function(C) {
                                        var M = C.item;
                                        return M.type.name === "Scatter"
                                    });
                                D && (k = j(j({}, k), D.props.points[P].tooltipPosition), E = D.props.points[P].tooltipPayload);
                                var L = {
                                    activeTooltipIndex: P,
                                    isTooltipActive: !0,
                                    activeLabel: $,
                                    activePayload: E,
                                    activeCoordinate: k
                                };
                                this.setState(L), this.renderCursor(_), this.accessibilityManager.setIndex(P)
                            }
                        }
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function(g, S) {
                        if (!this.props.accessibilityLayer) return null;
                        if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({
                                coordinateList: this.state.tooltipTicks
                            }), this.props.layout !== g.layout && this.accessibilityManager.setDetails({
                                layout: this.props.layout
                            }), this.props.margin !== g.margin) {
                            var b, x;
                            this.accessibilityManager.setDetails({
                                offset: {
                                    left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0,
                                    top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0
                                }
                            })
                        }
                        return null
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(g) {
                        Pd([bt(g.children, vr)], [bt(this.props.children, vr)]) || this.displayDefaultTooltip()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
                    }
                }, {
                    key: "getTooltipEventType",
                    value: function() {
                        var g = bt(this.props.children, vr);
                        if (g && typeof g.props.shared == "boolean") {
                            var S = g.props.shared ? "axis" : "item";
                            return u.indexOf(S) >= 0 ? S : a
                        }
                        return a
                    }
                }, {
                    key: "getMouseInfo",
                    value: function(g) {
                        if (!this.container) return null;
                        var S = this.container,
                            b = S.getBoundingClientRect(),
                            x = WR(b),
                            O = {
                                chartX: Math.round(g.pageX - x.left),
                                chartY: Math.round(g.pageY - x.top)
                            },
                            _ = b.width / S.offsetWidth || 1,
                            P = this.inRange(O.chartX, O.chartY, _);
                        if (!P) return null;
                        var $ = this.state,
                            E = $.xAxisMap,
                            T = $.yAxisMap,
                            I = this.getTooltipEventType(),
                            N = zb(this.state, this.props.data, this.props.layout, P);
                        if (I !== "axis" && E && T) {
                            var k = Kr(E).scale,
                                D = Kr(T).scale,
                                L = k && k.invert ? k.invert(O.chartX) : null,
                                C = D && D.invert ? D.invert(O.chartY) : null;
                            return j(j({}, O), {}, {
                                xValue: L,
                                yValue: C
                            }, N)
                        }
                        return N ? j(j({}, O), N) : null
                    }
                }, {
                    key: "inRange",
                    value: function(g, S) {
                        var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                            x = this.props.layout,
                            O = g / b,
                            _ = S / b;
                        if (x === "horizontal" || x === "vertical") {
                            var P = this.state.offset,
                                $ = O >= P.left && O <= P.left + P.width && _ >= P.top && _ <= P.top + P.height;
                            return $ ? {
                                x: O,
                                y: _
                            } : null
                        }
                        var E = this.state,
                            T = E.angleAxisMap,
                            I = E.radiusAxisMap;
                        if (T && I) {
                            var N = Kr(T);
                            return x0({
                                x: O,
                                y: _
                            }, N)
                        }
                        return null
                    }
                }, {
                    key: "parseEventsOfWrapper",
                    value: function() {
                        var g = this.props.children,
                            S = this.getTooltipEventType(),
                            b = bt(g, vr),
                            x = {};
                        b && S === "axis" && (b.props.trigger === "click" ? x = {
                            onClick: this.handleClick
                        } : x = {
                            onMouseEnter: this.handleMouseEnter,
                            onDoubleClick: this.handleDoubleClick,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd,
                            onContextMenu: this.handleContextMenu
                        });
                        var O = El(this.props, this.handleOuterEvent);
                        return j(j({}, O), x)
                    }
                }, {
                    key: "addListener",
                    value: function() {
                        $f.on(Tf, this.handleReceiveSyncEvent)
                    }
                }, {
                    key: "removeListener",
                    value: function() {
                        $f.removeListener(Tf, this.handleReceiveSyncEvent)
                    }
                }, {
                    key: "filterFormatItem",
                    value: function(g, S, b) {
                        for (var x = this.state.formattedGraphicalItems, O = 0, _ = x.length; O < _; O++) {
                            var P = x[O];
                            if (P.item === g || P.props.key === g.key || S === Or(P.item.type) && b === P.childIndex) return P
                        }
                        return null
                    }
                }, {
                    key: "renderClipPath",
                    value: function() {
                        var g = this.clipPathId,
                            S = this.state.offset,
                            b = S.left,
                            x = S.top,
                            O = S.height,
                            _ = S.width;
                        return A.createElement("defs", null, A.createElement("clipPath", {
                            id: g
                        }, A.createElement("rect", {
                            x: b,
                            y: x,
                            height: O,
                            width: _
                        })))
                    }
                }, {
                    key: "getXScales",
                    value: function() {
                        var g = this.state.xAxisMap;
                        return g ? Object.entries(g).reduce(function(S, b) {
                            var x = Lb(b, 2),
                                O = x[0],
                                _ = x[1];
                            return j(j({}, S), {}, X({}, O, _.scale))
                        }, {}) : null
                    }
                }, {
                    key: "getYScales",
                    value: function() {
                        var g = this.state.yAxisMap;
                        return g ? Object.entries(g).reduce(function(S, b) {
                            var x = Lb(b, 2),
                                O = x[0],
                                _ = x[1];
                            return j(j({}, S), {}, X({}, O, _.scale))
                        }, {}) : null
                    }
                }, {
                    key: "getXScaleByAxisId",
                    value: function(g) {
                        var S;
                        return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[g]) === null || S === void 0 ? void 0 : S.scale
                    }
                }, {
                    key: "getYScaleByAxisId",
                    value: function(g) {
                        var S;
                        return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[g]) === null || S === void 0 ? void 0 : S.scale
                    }
                }, {
                    key: "getItemByXY",
                    value: function(g) {
                        var S = this.state,
                            b = S.formattedGraphicalItems,
                            x = S.activeItem;
                        if (b && b.length)
                            for (var O = 0, _ = b.length; O < _; O++) {
                                var P = b[O],
                                    $ = P.props,
                                    E = P.item,
                                    T = E.type.defaultProps !== void 0 ? j(j({}, E.type.defaultProps), E.props) : E.props,
                                    I = Or(E.type);
                                if (I === "Bar") {
                                    var N = ($.data || []).find(function(C) {
                                        return PU(g, C)
                                    });
                                    if (N) return {
                                        graphicalItem: P,
                                        payload: N
                                    }
                                } else if (I === "RadialBar") {
                                    var k = ($.data || []).find(function(C) {
                                        return x0(g, C)
                                    });
                                    if (k) return {
                                        graphicalItem: P,
                                        payload: k
                                    }
                                } else if (bc(P, x) || wc(P, x) || qo(P, x)) {
                                    var D = $W({
                                            graphicalItem: P,
                                            activeTooltipItem: x,
                                            itemData: T.data
                                        }),
                                        L = T.activeIndex === void 0 ? D : T.activeIndex;
                                    return {
                                        graphicalItem: j(j({}, P), {}, {
                                            childIndex: L
                                        }),
                                        payload: qo(P, x) ? T.data[D] : P.props.data[D]
                                    }
                                }
                            }
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var g = this;
                        if (!fm(this)) return null;
                        var S = this.props,
                            b = S.children,
                            x = S.className,
                            O = S.width,
                            _ = S.height,
                            P = S.style,
                            $ = S.compact,
                            E = S.title,
                            T = S.desc,
                            I = Rb(S, RV),
                            N = ee(I, !1);
                        if ($) return A.createElement(bb, {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, A.createElement(Ed, gi({}, N, {
                            width: O,
                            height: _,
                            title: E,
                            desc: T
                        }), this.renderClipPath(), pm(b, this.renderMap)));
                        if (this.props.accessibilityLayer) {
                            var k, D;
                            N.tabIndex = (k = this.props.tabIndex) !== null && k !== void 0 ? k : 0, N.role = (D = this.props.role) !== null && D !== void 0 ? D : "application", N.onKeyDown = function(C) {
                                g.accessibilityManager.keyboardEvent(C)
                            }, N.onFocus = function() {
                                g.accessibilityManager.focus()
                            }
                        }
                        var L = this.parseEventsOfWrapper();
                        return A.createElement(bb, {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, A.createElement("div", gi({
                            className: ie("recharts-wrapper", x),
                            style: j({
                                position: "relative",
                                cursor: "default",
                                width: O,
                                height: _
                            }, P)
                        }, L, {
                            ref: function(M) {
                                g.container = M
                            }
                        }), A.createElement(Ed, gi({}, N, {
                            width: O,
                            height: _,
                            title: E,
                            desc: T,
                            style: tK
                        }), this.renderClipPath(), pm(b, this.renderMap)), this.renderLegend(), this.renderTooltip()))
                    }
                }])
            }(F.Component);
        X(h, "displayName", r), X(h, "defaultProps", j({
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
            reverseStackOrder: !1,
            syncMethod: "index"
        }, c)), X(h, "getDerivedStateFromProps", function(w, m) {
            var v = w.dataKey,
                g = w.data,
                S = w.children,
                b = w.width,
                x = w.height,
                O = w.layout,
                _ = w.stackOffset,
                P = w.margin,
                $ = m.dataStartIndex,
                E = m.dataEndIndex;
            if (m.updateId === void 0) {
                var T = Fb(w);
                return j(j(j({}, T), {}, {
                    updateId: 0
                }, p(j(j({
                    props: w
                }, T), {}, {
                    updateId: 0
                }), m)), {}, {
                    prevDataKey: v,
                    prevData: g,
                    prevWidth: b,
                    prevHeight: x,
                    prevLayout: O,
                    prevStackOffset: _,
                    prevMargin: P,
                    prevChildren: S
                })
            }
            if (v !== m.prevDataKey || g !== m.prevData || b !== m.prevWidth || x !== m.prevHeight || O !== m.prevLayout || _ !== m.prevStackOffset || !Pi(P, m.prevMargin)) {
                var I = Fb(w),
                    N = {
                        chartX: m.chartX,
                        chartY: m.chartY,
                        isTooltipActive: m.isTooltipActive
                    },
                    k = j(j({}, zb(m, g, O)), {}, {
                        updateId: m.updateId + 1
                    }),
                    D = j(j(j({}, I), N), k);
                return j(j(j({}, D), p(j({
                    props: w
                }, D), m)), {}, {
                    prevDataKey: v,
                    prevData: g,
                    prevWidth: b,
                    prevHeight: x,
                    prevLayout: O,
                    prevStackOffset: _,
                    prevMargin: P,
                    prevChildren: S
                })
            }
            if (!Pd(S, m.prevChildren)) {
                var L, C, M, B, H = bt(S, Gi),
                    U = H && (L = (C = H.props) === null || C === void 0 ? void 0 : C.startIndex) !== null && L !== void 0 ? L : $,
                    q = H && (M = (B = H.props) === null || B === void 0 ? void 0 : B.endIndex) !== null && M !== void 0 ? M : E,
                    te = U !== $ || q !== E,
                    ge = !J(g),
                    Ee = ge && !te ? m.updateId : m.updateId + 1;
                return j(j({
                    updateId: Ee
                }, p(j(j({
                    props: w
                }, m), {}, {
                    updateId: Ee,
                    dataStartIndex: U,
                    dataEndIndex: q
                }), m)), {}, {
                    prevChildren: S,
                    dataStartIndex: U,
                    dataEndIndex: q
                })
            }
            return null
        }), X(h, "renderActiveDot", function(w, m, v) {
            var g;
            return F.isValidElement(w) ? g = F.cloneElement(w, m) : Z(w) ? g = w(m) : g = A.createElement(Nv, m), A.createElement(Te, {
                className: "recharts-active-dot",
                key: v
            }, g)
        });
        var y = F.forwardRef(function(m, v) {
            return A.createElement(h, gi({}, m, {
                ref: v
            }))
        });
        return y.displayName = h.displayName, y
    },
    hK = g_({
        chartName: "LineChart",
        GraphicalChild: Ac,
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: Ec
        }, {
            axisType: "yAxis",
            AxisComp: $c
        }],
        formatAxisMap: DO
    }),
    vK = g_({
        chartName: "BarChart",
        GraphicalChild: ma,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: Ec
        }, {
            axisType: "yAxis",
            AxisComp: $c
        }],
        formatAxisMap: DO
    });
export {
    vK as B, z7 as C, hK as L, dK as R, vr as T, Ec as X, $c as Y, pK as a, ma as b, ie as c, oS as d, Ac as e, Uv as f, OA as r
};