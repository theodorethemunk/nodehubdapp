"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5386], {
        48317: function(e, t, o) {
            var r = o(64836);
            t.Z = void 0;
            var n = r(o(64938)),
                i = o(85893),
                a = (0, n.default)((0, i.jsx)("path", {
                    d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                }), "KeyboardArrowRight");
            t.Z = a
        },
        50294: function(e, t, o) {
            var r = o(87462),
                n = o(63366),
                i = o(67294),
                a = o(8662),
                s = o(2734),
                p = o(30577),
                l = o(51705),
                c = o(85893);
            let u = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

            function f(e) {
                return `scale(${e}, ${e**2})`
            }
            let d = {
                    entering: {
                        opacity: 1,
                        transform: f(1)
                    },
                    entered: {
                        opacity: 1,
                        transform: "none"
                    }
                },
                m = "undefined" != typeof navigator && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
                h = i.forwardRef(function(e, t) {
                    let {
                        addEndListener: o,
                        appear: h = !0,
                        children: v,
                        easing: g,
                        in: y,
                        onEnter: b,
                        onEntered: w,
                        onEntering: x,
                        onExit: O,
                        onExited: Z,
                        onExiting: T,
                        style: E,
                        timeout: R = "auto",
                        TransitionComponent: P = a.ZP
                    } = e, j = (0, n.Z)(e, u), M = i.useRef(), A = i.useRef(), k = (0, s.Z)(), L = i.useRef(null), D = (0, l.Z)(L, v.ref, t), S = e => t => {
                        if (e) {
                            let o = L.current;
                            void 0 === t ? e(o) : e(o, t)
                        }
                    }, W = S(x), C = S((e, t) => {
                        let o;
                        (0, p.n)(e);
                        let {
                            duration: r,
                            delay: n,
                            easing: i
                        } = (0, p.C)({
                            style: E,
                            timeout: R,
                            easing: g
                        }, {
                            mode: "enter"
                        });
                        "auto" === R ? (o = k.transitions.getAutoHeightDuration(e.clientHeight), A.current = o) : o = r, e.style.transition = [k.transitions.create("opacity", {
                            duration: o,
                            delay: n
                        }), k.transitions.create("transform", {
                            duration: m ? o : .666 * o,
                            delay: n,
                            easing: i
                        })].join(","), b && b(e, t)
                    }), B = S(w), H = S(T), N = S(e => {
                        let t;
                        let {
                            duration: o,
                            delay: r,
                            easing: n
                        } = (0, p.C)({
                            style: E,
                            timeout: R,
                            easing: g
                        }, {
                            mode: "exit"
                        });
                        "auto" === R ? (t = k.transitions.getAutoHeightDuration(e.clientHeight), A.current = t) : t = o, e.style.transition = [k.transitions.create("opacity", {
                            duration: t,
                            delay: r
                        }), k.transitions.create("transform", {
                            duration: m ? t : .666 * t,
                            delay: m ? r : r || .333 * t,
                            easing: n
                        })].join(","), e.style.opacity = 0, e.style.transform = f(.75), O && O(e)
                    }), F = S(Z);
                    return i.useEffect(() => () => {
                        clearTimeout(M.current)
                    }, []), (0, c.jsx)(P, (0, r.Z)({
                        appear: h,
                        in: y,
                        nodeRef: L,
                        onEnter: C,
                        onEntered: B,
                        onEntering: W,
                        onExit: N,
                        onExited: F,
                        onExiting: H,
                        addEndListener: e => {
                            "auto" === R && (M.current = setTimeout(e, A.current || 0)), o && o(L.current, e)
                        },
                        timeout: "auto" === R ? null : R
                    }, j, {
                        children: (e, t) => i.cloneElement(v, (0, r.Z)({
                            style: (0, r.Z)({
                                opacity: 0,
                                transform: f(.75),
                                visibility: "exited" !== e || y ? void 0 : "hidden"
                            }, d[e], E, v.props.style),
                            ref: D
                        }, t))
                    }))
                });
            h.muiSupportAuto = !0, t.Z = h
        },
        99332: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return e4
                }
            });
            var r, n, i, a, s, p = o(63366),
                l = o(87462),
                c = o(67294),
                u = o(86010),
                f = o(94780),
                d = o(10238),
                m = o(41796),
                h = o(90948),
                v = o(2734),
                g = o(71657),
                y = o(98216),
                b = o(50294),
                w = o(30067),
                x = o(16600),
                O = o(57094);

            function Z(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function T(e) {
                var t = Z(e).Element;
                return e instanceof t || e instanceof Element
            }

            function E(e) {
                var t = Z(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement
            }

            function R(e) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var t = Z(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot
            }
            var P = Math.max,
                j = Math.min,
                M = Math.round;

            function A() {
                var e = navigator.userAgentData;
                return null != e && e.brands ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function k() {
                return !/^((?!chrome|android).)*safari/i.test(A())
            }

            function L(e, t, o) {
                void 0 === t && (t = !1), void 0 === o && (o = !1);
                var r = e.getBoundingClientRect(),
                    n = 1,
                    i = 1;
                t && E(e) && (n = e.offsetWidth > 0 && M(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && M(r.height) / e.offsetHeight || 1);
                var a = (T(e) ? Z(e) : window).visualViewport,
                    s = !k() && o,
                    p = (r.left + (s && a ? a.offsetLeft : 0)) / n,
                    l = (r.top + (s && a ? a.offsetTop : 0)) / i,
                    c = r.width / n,
                    u = r.height / i;
                return {
                    width: c,
                    height: u,
                    top: l,
                    right: p + c,
                    bottom: l + u,
                    left: p,
                    x: p,
                    y: l
                }
            }

            function D(e) {
                var t = Z(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function S(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function W(e) {
                return ((T(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function C(e) {
                return L(W(e)).left + D(e).scrollLeft
            }

            function B(e) {
                return Z(e).getComputedStyle(e)
            }

            function H(e) {
                var t = B(e),
                    o = t.overflow,
                    r = t.overflowX,
                    n = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(o + n + r)
            }

            function N(e) {
                var t = L(e),
                    o = e.offsetWidth,
                    r = e.offsetHeight;
                return 1 >= Math.abs(t.width - o) && (o = t.width), 1 >= Math.abs(t.height - r) && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: o,
                    height: r
                }
            }

            function F(e) {
                return "html" === S(e) ? e : e.assignedSlot || e.parentNode || (R(e) ? e.host : null) || W(e)
            }

            function I(e, t) {
                void 0 === t && (t = []);
                var o, r = function e(t) {
                        return ["html", "body", "#document"].indexOf(S(t)) >= 0 ? t.ownerDocument.body : E(t) && H(t) ? t : e(F(t))
                    }(e),
                    n = r === (null == (o = e.ownerDocument) ? void 0 : o.body),
                    i = Z(r),
                    a = n ? [i].concat(i.visualViewport || [], H(r) ? r : []) : r,
                    s = t.concat(a);
                return n ? s : s.concat(I(F(a)))
            }

            function $(e) {
                return E(e) && "fixed" !== B(e).position ? e.offsetParent : null
            }

            function q(e) {
                for (var t = Z(e), o = $(e); o && ["table", "td", "th"].indexOf(S(o)) >= 0 && "static" === B(o).position;) o = $(o);
                return o && ("html" === S(o) || "body" === S(o) && "static" === B(o).position) ? t : o || function(e) {
                    var t = /firefox/i.test(A());
                    if (/Trident/i.test(A()) && E(e) && "fixed" === B(e).position) return null;
                    var o = F(e);
                    for (R(o) && (o = o.host); E(o) && 0 > ["html", "body"].indexOf(S(o));) {
                        var r = B(o);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return o;
                        o = o.parentNode
                    }
                    return null
                }(e) || t
            }
            var V = "bottom",
                U = "right",
                z = "left",
                _ = "auto",
                X = ["top", V, U, z],
                Y = "start",
                K = "viewport",
                G = "popper",
                J = X.reduce(function(e, t) {
                    return e.concat([t + "-" + Y, t + "-end"])
                }, []),
                Q = [].concat(X, [_]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + Y, t + "-end"])
                }, []),
                ee = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                et = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function eo() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var er = {
                passive: !0
            };

            function en(e) {
                return e.split("-")[0]
            }

            function ei(e) {
                return e.split("-")[1]
            }

            function ea(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function es(e) {
                var t, o = e.reference,
                    r = e.element,
                    n = e.placement,
                    i = n ? en(n) : null,
                    a = n ? ei(n) : null,
                    s = o.x + o.width / 2 - r.width / 2,
                    p = o.y + o.height / 2 - r.height / 2;
                switch (i) {
                    case "top":
                        t = {
                            x: s,
                            y: o.y - r.height
                        };
                        break;
                    case V:
                        t = {
                            x: s,
                            y: o.y + o.height
                        };
                        break;
                    case U:
                        t = {
                            x: o.x + o.width,
                            y: p
                        };
                        break;
                    case z:
                        t = {
                            x: o.x - r.width,
                            y: p
                        };
                        break;
                    default:
                        t = {
                            x: o.x,
                            y: o.y
                        }
                }
                var l = i ? ea(i) : null;
                if (null != l) {
                    var c = "y" === l ? "height" : "width";
                    switch (a) {
                        case Y:
                            t[l] = t[l] - (o[c] / 2 - r[c] / 2);
                            break;
                        case "end":
                            t[l] = t[l] + (o[c] / 2 - r[c] / 2)
                    }
                }
                return t
            }
            var ep = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function el(e) {
                var t, o, r, n, i, a, s = e.popper,
                    p = e.popperRect,
                    l = e.placement,
                    c = e.variation,
                    u = e.offsets,
                    f = e.position,
                    d = e.gpuAcceleration,
                    m = e.adaptive,
                    h = e.roundOffsets,
                    v = e.isFixed,
                    g = u.x,
                    y = void 0 === g ? 0 : g,
                    b = u.y,
                    w = void 0 === b ? 0 : b,
                    x = "function" == typeof h ? h({
                        x: y,
                        y: w
                    }) : {
                        x: y,
                        y: w
                    };
                y = x.x, w = x.y;
                var O = u.hasOwnProperty("x"),
                    T = u.hasOwnProperty("y"),
                    E = z,
                    R = "top",
                    P = window;
                if (m) {
                    var j = q(s),
                        A = "clientHeight",
                        k = "clientWidth";
                    j === Z(s) && "static" !== B(j = W(s)).position && "absolute" === f && (A = "scrollHeight", k = "scrollWidth"), ("top" === l || (l === z || l === U) && "end" === c) && (R = V, w -= (v && j === P && P.visualViewport ? P.visualViewport.height : j[A]) - p.height, w *= d ? 1 : -1), (l === z || ("top" === l || l === V) && "end" === c) && (E = U, y -= (v && j === P && P.visualViewport ? P.visualViewport.width : j[k]) - p.width, y *= d ? 1 : -1)
                }
                var L = Object.assign({
                        position: f
                    }, m && ep),
                    D = !0 === h ? (o = (t = {
                        x: y,
                        y: w
                    }).x, r = t.y, {
                        x: M(o * (n = window.devicePixelRatio || 1)) / n || 0,
                        y: M(r * n) / n || 0
                    }) : {
                        x: y,
                        y: w
                    };
                return (y = D.x, w = D.y, d) ? Object.assign({}, L, ((a = {})[R] = T ? "0" : "", a[E] = O ? "0" : "", a.transform = 1 >= (P.devicePixelRatio || 1) ? "translate(" + y + "px, " + w + "px)" : "translate3d(" + y + "px, " + w + "px, 0)", a)) : Object.assign({}, L, ((i = {})[R] = T ? w + "px" : "", i[E] = O ? y + "px" : "", i.transform = "", i))
            }
            var ec = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function eu(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return ec[e]
                })
            }
            var ef = {
                start: "end",
                end: "start"
            };

            function ed(e) {
                return e.replace(/start|end/g, function(e) {
                    return ef[e]
                })
            }

            function em(e, t) {
                var o = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (o && R(o)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function eh(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function ev(e, t, o) {
                var r, n, i, a, s, p, l, c, u, f;
                return t === K ? eh(function(e, t) {
                    var o = Z(e),
                        r = W(e),
                        n = o.visualViewport,
                        i = r.clientWidth,
                        a = r.clientHeight,
                        s = 0,
                        p = 0;
                    if (n) {
                        i = n.width, a = n.height;
                        var l = k();
                        (l || !l && "fixed" === t) && (s = n.offsetLeft, p = n.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: s + C(e),
                        y: p
                    }
                }(e, o)) : T(t) ? ((r = L(t, !1, "fixed" === o)).top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r) : eh((n = W(e), a = W(n), s = D(n), p = null == (i = n.ownerDocument) ? void 0 : i.body, l = P(a.scrollWidth, a.clientWidth, p ? p.scrollWidth : 0, p ? p.clientWidth : 0), c = P(a.scrollHeight, a.clientHeight, p ? p.scrollHeight : 0, p ? p.clientHeight : 0), u = -s.scrollLeft + C(n), f = -s.scrollTop, "rtl" === B(p || a).direction && (u += P(a.clientWidth, p ? p.clientWidth : 0) - l), {
                    width: l,
                    height: c,
                    x: u,
                    y: f
                }))
            }

            function eg() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function ey(e) {
                return Object.assign({}, eg(), e)
            }

            function eb(e, t) {
                return t.reduce(function(t, o) {
                    return t[o] = e, t
                }, {})
            }

            function ew(e, t) {
                void 0 === t && (t = {});
                var o, r, n, i, a, s, p, l = t,
                    c = l.placement,
                    u = void 0 === c ? e.placement : c,
                    f = l.strategy,
                    d = void 0 === f ? e.strategy : f,
                    m = l.boundary,
                    h = l.rootBoundary,
                    v = l.elementContext,
                    g = void 0 === v ? G : v,
                    y = l.altBoundary,
                    b = l.padding,
                    w = void 0 === b ? 0 : b,
                    x = ey("number" != typeof w ? w : eb(w, X)),
                    O = e.rects.popper,
                    Z = e.elements[void 0 !== y && y ? g === G ? "reference" : G : g],
                    R = (o = T(Z) ? Z : Z.contextElement || W(e.elements.popper), s = (a = [].concat("clippingParents" === (r = void 0 === m ? "clippingParents" : m) ? (n = I(F(o)), T(i = ["absolute", "fixed"].indexOf(B(o).position) >= 0 && E(o) ? q(o) : o) ? n.filter(function(e) {
                        return T(e) && em(e, i) && "body" !== S(e)
                    }) : []) : [].concat(r), [void 0 === h ? K : h]))[0], (p = a.reduce(function(e, t) {
                        var r = ev(o, t, d);
                        return e.top = P(r.top, e.top), e.right = j(r.right, e.right), e.bottom = j(r.bottom, e.bottom), e.left = P(r.left, e.left), e
                    }, ev(o, s, d))).width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p),
                    M = L(e.elements.reference),
                    A = es({
                        reference: M,
                        element: O,
                        strategy: "absolute",
                        placement: u
                    }),
                    k = eh(Object.assign({}, O, A)),
                    D = g === G ? k : M,
                    C = {
                        top: R.top - D.top + x.top,
                        bottom: D.bottom - R.bottom + x.bottom,
                        left: R.left - D.left + x.left,
                        right: D.right - R.right + x.right
                    },
                    H = e.modifiersData.offset;
                if (g === G && H) {
                    var N = H[u];
                    Object.keys(C).forEach(function(e) {
                        var t = [U, V].indexOf(e) >= 0 ? 1 : -1,
                            o = ["top", V].indexOf(e) >= 0 ? "y" : "x";
                        C[e] += N[o] * t
                    })
                }
                return C
            }

            function ex(e, t, o) {
                return P(e, j(t, o))
            }

            function eO(e, t, o) {
                return void 0 === o && (o = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - o.y,
                    right: e.right - t.width + o.x,
                    bottom: e.bottom - t.height + o.y,
                    left: e.left - t.width - o.x
                }
            }

            function eZ(e) {
                return ["top", U, V, z].some(function(t) {
                    return e[t] >= 0
                })
            }
            var eT = (i = void 0 === (n = (r = {
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                o = e.instance,
                                r = e.options,
                                n = r.scroll,
                                i = void 0 === n || n,
                                a = r.resize,
                                s = void 0 === a || a,
                                p = Z(t.elements.popper),
                                l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return i && l.forEach(function(e) {
                                    e.addEventListener("scroll", o.update, er)
                                }), s && p.addEventListener("resize", o.update, er),
                                function() {
                                    i && l.forEach(function(e) {
                                        e.removeEventListener("scroll", o.update, er)
                                    }), s && p.removeEventListener("resize", o.update, er)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                o = e.name;
                            t.modifiersData[o] = es({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                o = e.options,
                                r = o.gpuAcceleration,
                                n = o.adaptive,
                                i = o.roundOffsets,
                                a = void 0 === i || i,
                                s = {
                                    placement: en(t.placement),
                                    variation: ei(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === r || r,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, el(Object.assign({}, s, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: void 0 === n || n,
                                roundOffsets: a
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, el(Object.assign({}, s, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: a
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach(function(e) {
                                var o = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    n = t.elements[e];
                                E(n) && S(n) && (Object.assign(n.style, o), Object.keys(r).forEach(function(e) {
                                    var t = r[e];
                                    !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? "" : t)
                                }))
                            })
                        },
                        effect: function(e) {
                            var t = e.state,
                                o = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow),
                                function() {
                                    Object.keys(t.elements).forEach(function(e) {
                                        var r = t.elements[e],
                                            n = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : o[e]).reduce(function(e, t) {
                                                return e[t] = "", e
                                            }, {});
                                        E(r) && S(r) && (Object.assign(r.style, i), Object.keys(n).forEach(function(e) {
                                            r.removeAttribute(e)
                                        }))
                                    })
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                o = e.options,
                                r = e.name,
                                n = o.offset,
                                i = void 0 === n ? [0, 0] : n,
                                a = Q.reduce(function(e, o) {
                                    var r, n, a, s, p, l;
                                    return e[o] = (r = t.rects, a = [z, "top"].indexOf(n = en(o)) >= 0 ? -1 : 1, p = (s = "function" == typeof i ? i(Object.assign({}, r, {
                                        placement: o
                                    })) : i)[0], l = s[1], p = p || 0, l = (l || 0) * a, [z, U].indexOf(n) >= 0 ? {
                                        x: l,
                                        y: p
                                    } : {
                                        x: p,
                                        y: l
                                    }), e
                                }, {}),
                                s = a[t.placement],
                                p = s.x,
                                l = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += p, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                o = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var n = o.mainAxis, i = void 0 === n || n, a = o.altAxis, s = void 0 === a || a, p = o.fallbackPlacements, l = o.padding, c = o.boundary, u = o.rootBoundary, f = o.altBoundary, d = o.flipVariations, m = void 0 === d || d, h = o.allowedAutoPlacements, v = t.options.placement, g = en(v) === v, y = p || (g || !m ? [eu(v)] : function(e) {
                                        if (en(e) === _) return [];
                                        var t = eu(e);
                                        return [ed(e), t, ed(t)]
                                    }(v)), b = [v].concat(y).reduce(function(e, o) {
                                        var r, n, i, a, s, p, f, d, v, g, y, b;
                                        return e.concat(en(o) === _ ? (n = (r = {
                                            placement: o,
                                            boundary: c,
                                            rootBoundary: u,
                                            padding: l,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }).placement, i = r.boundary, a = r.rootBoundary, s = r.padding, p = r.flipVariations, d = void 0 === (f = r.allowedAutoPlacements) ? Q : f, 0 === (y = (g = (v = ei(n)) ? p ? J : J.filter(function(e) {
                                            return ei(e) === v
                                        }) : X).filter(function(e) {
                                            return d.indexOf(e) >= 0
                                        })).length && (y = g), Object.keys(b = y.reduce(function(e, o) {
                                            return e[o] = ew(t, {
                                                placement: o,
                                                boundary: i,
                                                rootBoundary: a,
                                                padding: s
                                            })[en(o)], e
                                        }, {})).sort(function(e, t) {
                                            return b[e] - b[t]
                                        })) : o)
                                    }, []), w = t.rects.reference, x = t.rects.popper, O = new Map, Z = !0, T = b[0], E = 0; E < b.length; E++) {
                                    var R = b[E],
                                        P = en(R),
                                        j = ei(R) === Y,
                                        M = ["top", V].indexOf(P) >= 0,
                                        A = M ? "width" : "height",
                                        k = ew(t, {
                                            placement: R,
                                            boundary: c,
                                            rootBoundary: u,
                                            altBoundary: f,
                                            padding: l
                                        }),
                                        L = M ? j ? U : z : j ? V : "top";
                                    w[A] > x[A] && (L = eu(L));
                                    var D = eu(L),
                                        S = [];
                                    if (i && S.push(k[P] <= 0), s && S.push(k[L] <= 0, k[D] <= 0), S.every(function(e) {
                                            return e
                                        })) {
                                        T = R, Z = !1;
                                        break
                                    }
                                    O.set(R, S)
                                }
                                if (Z)
                                    for (var W = m ? 3 : 1, C = function(e) {
                                            var t = b.find(function(t) {
                                                var o = O.get(t);
                                                if (o) return o.slice(0, e).every(function(e) {
                                                    return e
                                                })
                                            });
                                            if (t) return T = t, "break"
                                        }, B = W; B > 0 && "break" !== C(B); B--);
                                t.placement !== T && (t.modifiersData[r]._skip = !0, t.placement = T, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                o = e.options,
                                r = e.name,
                                n = o.mainAxis,
                                i = o.altAxis,
                                a = o.boundary,
                                s = o.rootBoundary,
                                p = o.altBoundary,
                                l = o.padding,
                                c = o.tether,
                                u = void 0 === c || c,
                                f = o.tetherOffset,
                                d = void 0 === f ? 0 : f,
                                m = ew(t, {
                                    boundary: a,
                                    rootBoundary: s,
                                    padding: l,
                                    altBoundary: p
                                }),
                                h = en(t.placement),
                                v = ei(t.placement),
                                g = !v,
                                y = ea(h),
                                b = "x" === y ? "y" : "x",
                                w = t.modifiersData.popperOffsets,
                                x = t.rects.reference,
                                O = t.rects.popper,
                                Z = "function" == typeof d ? d(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : d,
                                T = "number" == typeof Z ? {
                                    mainAxis: Z,
                                    altAxis: Z
                                } : Object.assign({
                                    mainAxis: 0,
                                    altAxis: 0
                                }, Z),
                                E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                                R = {
                                    x: 0,
                                    y: 0
                                };
                            if (w) {
                                if (void 0 === n || n) {
                                    var M, A = "y" === y ? "top" : z,
                                        k = "y" === y ? V : U,
                                        L = "y" === y ? "height" : "width",
                                        D = w[y],
                                        S = D + m[A],
                                        W = D - m[k],
                                        C = u ? -O[L] / 2 : 0,
                                        B = v === Y ? x[L] : O[L],
                                        H = v === Y ? -O[L] : -x[L],
                                        F = t.elements.arrow,
                                        I = u && F ? N(F) : {
                                            width: 0,
                                            height: 0
                                        },
                                        $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : eg(),
                                        _ = $[A],
                                        X = $[k],
                                        K = ex(0, x[L], I[L]),
                                        G = g ? x[L] / 2 - C - K - _ - T.mainAxis : B - K - _ - T.mainAxis,
                                        J = g ? -x[L] / 2 + C + K + X + T.mainAxis : H + K + X + T.mainAxis,
                                        Q = t.elements.arrow && q(t.elements.arrow),
                                        ee = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                                        et = null != (M = null == E ? void 0 : E[y]) ? M : 0,
                                        eo = ex(u ? j(S, D + G - et - ee) : S, D, u ? P(W, D + J - et) : W);
                                    w[y] = eo, R[y] = eo - D
                                }
                                if (void 0 !== i && i) {
                                    var er, es, ep = "x" === y ? "top" : z,
                                        el = "x" === y ? V : U,
                                        ec = w[b],
                                        eu = "y" === b ? "height" : "width",
                                        ef = ec + m[ep],
                                        ed = ec - m[el],
                                        em = -1 !== ["top", z].indexOf(h),
                                        eh = null != (es = null == E ? void 0 : E[b]) ? es : 0,
                                        ev = em ? ef : ec - x[eu] - O[eu] - eh + T.altAxis,
                                        ey = em ? ec + x[eu] + O[eu] - eh - T.altAxis : ed,
                                        eb = u && em ? (er = ex(ev, ec, ey)) > ey ? ey : er : ex(u ? ev : ef, ec, u ? ey : ed);
                                    w[b] = eb, R[b] = eb - ec
                                }
                                t.modifiersData[r] = R
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, o, r = e.state,
                                n = e.name,
                                i = e.options,
                                a = r.elements.arrow,
                                s = r.modifiersData.popperOffsets,
                                p = en(r.placement),
                                l = ea(p),
                                c = [z, U].indexOf(p) >= 0 ? "height" : "width";
                            if (a && s) {
                                var u = ey("number" != typeof(t = "function" == typeof(t = i.padding) ? t(Object.assign({}, r.rects, {
                                        placement: r.placement
                                    })) : t) ? t : eb(t, X)),
                                    f = N(a),
                                    d = "y" === l ? "top" : z,
                                    m = "y" === l ? V : U,
                                    h = r.rects.reference[c] + r.rects.reference[l] - s[l] - r.rects.popper[c],
                                    v = s[l] - r.rects.reference[l],
                                    g = q(a),
                                    y = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                                    b = u[d],
                                    w = y - f[c] - u[m],
                                    x = y / 2 - f[c] / 2 + (h / 2 - v / 2),
                                    O = ex(b, x, w);
                                r.modifiersData[n] = ((o = {})[l] = O, o.centerOffset = O - x, o)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                o = e.options.element,
                                r = void 0 === o ? "[data-popper-arrow]" : o;
                            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && em(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                o = e.name,
                                r = t.rects.reference,
                                n = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = ew(t, {
                                    elementContext: "reference"
                                }),
                                s = ew(t, {
                                    altBoundary: !0
                                }),
                                p = eO(a, r),
                                l = eO(s, n, i),
                                c = eZ(p),
                                u = eZ(l);
                            t.modifiersData[o] = {
                                referenceClippingOffsets: p,
                                popperEscapeOffsets: l,
                                isReferenceHidden: c,
                                hasPopperEscaped: u
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": c,
                                "data-popper-escaped": u
                            })
                        }
                    }]
                }).defaultModifiers) ? [] : n, s = void 0 === (a = r.defaultOptions) ? et : a, function(e, t, o) {
                    void 0 === o && (o = s);
                    var r, n = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, et, s),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        a = [],
                        p = !1,
                        l = {
                            state: n,
                            setOptions: function(o) {
                                var r, p, u, f, d, m = "function" == typeof o ? o(n.options) : o;
                                c(), n.options = Object.assign({}, s, n.options, m), n.scrollParents = {
                                    reference: T(e) ? I(e) : e.contextElement ? I(e.contextElement) : [],
                                    popper: I(t)
                                };
                                var h = (p = Object.keys(r = [].concat(i, n.options.modifiers).reduce(function(e, t) {
                                    var o = e[t.name];
                                    return e[t.name] = o ? Object.assign({}, o, t, {
                                        options: Object.assign({}, o.options, t.options),
                                        data: Object.assign({}, o.data, t.data)
                                    }) : t, e
                                }, {})).map(function(e) {
                                    return r[e]
                                }), u = new Map, f = new Set, d = [], p.forEach(function(e) {
                                    u.set(e.name, e)
                                }), p.forEach(function(e) {
                                    f.has(e.name) || function e(t) {
                                        f.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                            if (!f.has(t)) {
                                                var o = u.get(t);
                                                o && e(o)
                                            }
                                        }), d.push(t)
                                    }(e)
                                }), ee.reduce(function(e, t) {
                                    return e.concat(d.filter(function(e) {
                                        return e.phase === t
                                    }))
                                }, []));
                                return n.orderedModifiers = h.filter(function(e) {
                                    return e.enabled
                                }), n.orderedModifiers.forEach(function(e) {
                                    var t = e.name,
                                        o = e.options,
                                        r = e.effect;
                                    if ("function" == typeof r) {
                                        var i = r({
                                            state: n,
                                            name: t,
                                            instance: l,
                                            options: void 0 === o ? {} : o
                                        });
                                        a.push(i || function() {})
                                    }
                                }), l.update()
                            },
                            forceUpdate: function() {
                                if (!p) {
                                    var e, t, o, r, i, a, s, c, u, f, d, m, h = n.elements,
                                        v = h.reference,
                                        g = h.popper;
                                    if (eo(v, g)) {
                                        n.rects = {
                                            reference: (t = q(g), o = "fixed" === n.options.strategy, r = E(t), c = E(t) && (a = M((i = t.getBoundingClientRect()).width) / t.offsetWidth || 1, s = M(i.height) / t.offsetHeight || 1, 1 !== a || 1 !== s), u = W(t), f = L(v, c, o), d = {
                                                scrollLeft: 0,
                                                scrollTop: 0
                                            }, m = {
                                                x: 0,
                                                y: 0
                                            }, (r || !r && !o) && (("body" !== S(t) || H(u)) && (d = (e = t) !== Z(e) && E(e) ? {
                                                scrollLeft: e.scrollLeft,
                                                scrollTop: e.scrollTop
                                            } : D(e)), E(t) ? (m = L(t, !0), m.x += t.clientLeft, m.y += t.clientTop) : u && (m.x = C(u))), {
                                                x: f.left + d.scrollLeft - m.x,
                                                y: f.top + d.scrollTop - m.y,
                                                width: f.width,
                                                height: f.height
                                            }),
                                            popper: N(g)
                                        }, n.reset = !1, n.placement = n.options.placement, n.orderedModifiers.forEach(function(e) {
                                            return n.modifiersData[e.name] = Object.assign({}, e.data)
                                        });
                                        for (var y = 0; y < n.orderedModifiers.length; y++) {
                                            if (!0 === n.reset) {
                                                n.reset = !1, y = -1;
                                                continue
                                            }
                                            var b = n.orderedModifiers[y],
                                                w = b.fn,
                                                x = b.options,
                                                O = void 0 === x ? {} : x,
                                                T = b.name;
                                            "function" == typeof w && (n = w({
                                                state: n,
                                                options: O,
                                                name: T,
                                                instance: l
                                            }) || n)
                                        }
                                    }
                                }
                            },
                            update: function() {
                                return r || (r = new Promise(function(e) {
                                    Promise.resolve().then(function() {
                                        r = void 0, e(new Promise(function(e) {
                                            l.forceUpdate(), e(n)
                                        }))
                                    })
                                })), r
                            },
                            destroy: function() {
                                c(), p = !0
                            }
                        };
                    if (!eo(e, t)) return l;

                    function c() {
                        a.forEach(function(e) {
                            return e()
                        }), a = []
                    }
                    return l.setOptions(o).then(function(e) {
                        !p && o.onFirstUpdate && o.onFirstUpdate(e)
                    }), l
                }),
                eE = o(78385),
                eR = o(34867),
                eP = o(1588);

            function ej(e) {
                return (0, eR.Z)("MuiPopper", e)
            }(0, eP.Z)("MuiPopper", ["root"]);
            var eM = o(18793),
                eA = o(85893);
            let ek = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps"],
                eL = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];

            function eD(e) {
                return "function" == typeof e ? e() : e
            }
            let eS = () => (0, f.Z)({
                    root: ["root"]
                }, ej, {}),
                eW = {},
                eC = c.forwardRef(function(e, t) {
                    var o;
                    let {
                        anchorEl: r,
                        children: n,
                        component: i,
                        direction: a,
                        disablePortal: s,
                        modifiers: u,
                        open: f,
                        ownerState: d,
                        placement: m,
                        popperOptions: h,
                        popperRef: v,
                        slotProps: g = {},
                        slots: y = {},
                        TransitionProps: b
                    } = e, O = (0, p.Z)(e, ek), Z = c.useRef(null), T = (0, w.Z)(Z, t), E = c.useRef(null), R = (0, w.Z)(E, v), P = c.useRef(R);
                    (0, x.Z)(() => {
                        P.current = R
                    }, [R]), c.useImperativeHandle(v, () => E.current, []);
                    let j = function(e, t) {
                            if ("ltr" === t) return e;
                            switch (e) {
                                case "bottom-end":
                                    return "bottom-start";
                                case "bottom-start":
                                    return "bottom-end";
                                case "top-end":
                                    return "top-start";
                                case "top-start":
                                    return "top-end";
                                default:
                                    return e
                            }
                        }(m, a),
                        [M, A] = c.useState(j),
                        [k, L] = c.useState(eD(r));
                    c.useEffect(() => {
                        E.current && E.current.forceUpdate()
                    }), c.useEffect(() => {
                        r && L(eD(r))
                    }, [r]), (0, x.Z)(() => {
                        if (!k || !f) return;
                        let e = e => {
                                A(e.placement)
                            },
                            t = [{
                                name: "preventOverflow",
                                options: {
                                    altBoundary: s
                                }
                            }, {
                                name: "flip",
                                options: {
                                    altBoundary: s
                                }
                            }, {
                                name: "onUpdate",
                                enabled: !0,
                                phase: "afterWrite",
                                fn: ({
                                    state: t
                                }) => {
                                    e(t)
                                }
                            }];
                        null != u && (t = t.concat(u)), h && null != h.modifiers && (t = t.concat(h.modifiers));
                        let o = eT(k, Z.current, (0, l.Z)({
                            placement: j
                        }, h, {
                            modifiers: t
                        }));
                        return P.current(o), () => {
                            o.destroy(), P.current(null)
                        }
                    }, [k, s, u, f, h, j]);
                    let D = {
                        placement: M
                    };
                    null !== b && (D.TransitionProps = b);
                    let S = eS(),
                        W = null != (o = null != i ? i : y.root) ? o : "div",
                        C = (0, eM.Z)({
                            elementType: W,
                            externalSlotProps: g.root,
                            externalForwardedProps: O,
                            additionalProps: {
                                role: "tooltip",
                                ref: T
                            },
                            ownerState: (0, l.Z)({}, e, d),
                            className: S.root
                        });
                    return (0, eA.jsx)(W, (0, l.Z)({}, C, {
                        children: "function" == typeof n ? n(D) : n
                    }))
                }),
                eB = c.forwardRef(function(e, t) {
                    let o;
                    let {
                        anchorEl: r,
                        children: n,
                        container: i,
                        direction: a = "ltr",
                        disablePortal: s = !1,
                        keepMounted: u = !1,
                        modifiers: f,
                        open: d,
                        placement: m = "bottom",
                        popperOptions: h = eW,
                        popperRef: v,
                        style: g,
                        transition: y = !1,
                        slotProps: b = {},
                        slots: w = {}
                    } = e, x = (0, p.Z)(e, eL), [Z, T] = c.useState(!0);
                    if (!u && !d && (!y || Z)) return null;
                    if (i) o = i;
                    else if (r) {
                        let e = eD(r);
                        o = e && void 0 !== e.nodeType ? (0, O.Z)(e).body : (0, O.Z)(null).body
                    }
                    let E = !d && u && (!y || Z) ? "none" : void 0,
                        R = y ? { in: d,
                            onEnter: () => {
                                T(!1)
                            },
                            onExited: () => {
                                T(!0)
                            }
                        } : void 0;
                    return (0, eA.jsx)(eE.Z, {
                        disablePortal: s,
                        container: o,
                        children: (0, eA.jsx)(eC, (0, l.Z)({
                            anchorEl: r,
                            direction: a,
                            disablePortal: s,
                            modifiers: f,
                            ref: t,
                            open: y ? !Z : d,
                            placement: m,
                            popperOptions: h,
                            popperRef: v,
                            slotProps: b,
                            slots: w
                        }, x, {
                            style: (0, l.Z)({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                display: E
                            }, g),
                            TransitionProps: R,
                            children: n
                        }))
                    })
                });
            var eH = o(34168);
            let eN = ["components", "componentsProps", "slots", "slotProps"],
                eF = (0, h.ZP)(eB, {
                    name: "MuiPopper",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({}),
                eI = c.forwardRef(function(e, t) {
                    var o;
                    let r = (0, eH.Z)(),
                        n = (0, g.Z)({
                            props: e,
                            name: "MuiPopper"
                        }),
                        {
                            components: i,
                            componentsProps: a,
                            slots: s,
                            slotProps: c
                        } = n,
                        u = (0, p.Z)(n, eN),
                        f = null != (o = null == s ? void 0 : s.root) ? o : null == i ? void 0 : i.Root;
                    return (0, eA.jsx)(eF, (0, l.Z)({
                        direction: null == r ? void 0 : r.direction,
                        slots: {
                            root: f
                        },
                        slotProps: null != c ? c : a
                    }, u, {
                        ref: t
                    }))
                });
            var e$ = o(2068),
                eq = o(51705),
                eV = o(27909),
                eU = o(79674),
                ez = o(49299);

            function e_(e) {
                return (0, eR.Z)("MuiTooltip", e)
            }
            let eX = (0, eP.Z)("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]),
                eY = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"],
                eK = e => {
                    let {
                        classes: t,
                        disableInteractive: o,
                        arrow: r,
                        touch: n,
                        placement: i
                    } = e, a = {
                        popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
                        tooltip: ["tooltip", r && "tooltipArrow", n && "touch", `tooltipPlacement${(0,y.Z)(i.split("-")[0])}`],
                        arrow: ["arrow"]
                    };
                    return (0, f.Z)(a, e_, t)
                },
                eG = (0, h.ZP)(eI, {
                    name: "MuiTooltip",
                    slot: "Popper",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: o
                        } = e;
                        return [t.popper, !o.disableInteractive && t.popperInteractive, o.arrow && t.popperArrow, !o.open && t.popperClose]
                    }
                })(({
                    theme: e,
                    ownerState: t,
                    open: o
                }) => (0, l.Z)({
                    zIndex: (e.vars || e).zIndex.tooltip,
                    pointerEvents: "none"
                }, !t.disableInteractive && {
                    pointerEvents: "auto"
                }, !o && {
                    pointerEvents: "none"
                }, t.arrow && {
                    [`&[data-popper-placement*="bottom"] .${eX.arrow}`]: {
                        top: 0,
                        marginTop: "-0.71em",
                        "&::before": {
                            transformOrigin: "0 100%"
                        }
                    },
                    [`&[data-popper-placement*="top"] .${eX.arrow}`]: {
                        bottom: 0,
                        marginBottom: "-0.71em",
                        "&::before": {
                            transformOrigin: "100% 0"
                        }
                    },
                    [`&[data-popper-placement*="right"] .${eX.arrow}`]: (0, l.Z)({}, t.isRtl ? {
                        right: 0,
                        marginRight: "-0.71em"
                    } : {
                        left: 0,
                        marginLeft: "-0.71em"
                    }, {
                        height: "1em",
                        width: "0.71em",
                        "&::before": {
                            transformOrigin: "100% 100%"
                        }
                    }),
                    [`&[data-popper-placement*="left"] .${eX.arrow}`]: (0, l.Z)({}, t.isRtl ? {
                        left: 0,
                        marginLeft: "-0.71em"
                    } : {
                        right: 0,
                        marginRight: "-0.71em"
                    }, {
                        height: "1em",
                        width: "0.71em",
                        "&::before": {
                            transformOrigin: "0 0"
                        }
                    })
                })),
                eJ = (0, h.ZP)("div", {
                    name: "MuiTooltip",
                    slot: "Tooltip",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: o
                        } = e;
                        return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${(0,y.Z)(o.placement.split("-")[0])}`]]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => (0, l.Z)({
                    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : (0, m.Fq)(e.palette.grey[700], .92),
                    borderRadius: (e.vars || e).shape.borderRadius,
                    color: (e.vars || e).palette.common.white,
                    fontFamily: e.typography.fontFamily,
                    padding: "4px 8px",
                    fontSize: e.typography.pxToRem(11),
                    maxWidth: 300,
                    margin: 2,
                    wordWrap: "break-word",
                    fontWeight: e.typography.fontWeightMedium
                }, t.arrow && {
                    position: "relative",
                    margin: 0
                }, t.touch && {
                    padding: "8px 16px",
                    fontSize: e.typography.pxToRem(14),
                    lineHeight: `${Math.round(16/14*1e5)/1e5}em`,
                    fontWeight: e.typography.fontWeightRegular
                }, {
                    [`.${eX.popper}[data-popper-placement*="left"] &`]: (0, l.Z)({
                        transformOrigin: "right center"
                    }, t.isRtl ? (0, l.Z)({
                        marginLeft: "14px"
                    }, t.touch && {
                        marginLeft: "24px"
                    }) : (0, l.Z)({
                        marginRight: "14px"
                    }, t.touch && {
                        marginRight: "24px"
                    })),
                    [`.${eX.popper}[data-popper-placement*="right"] &`]: (0, l.Z)({
                        transformOrigin: "left center"
                    }, t.isRtl ? (0, l.Z)({
                        marginRight: "14px"
                    }, t.touch && {
                        marginRight: "24px"
                    }) : (0, l.Z)({
                        marginLeft: "14px"
                    }, t.touch && {
                        marginLeft: "24px"
                    })),
                    [`.${eX.popper}[data-popper-placement*="top"] &`]: (0, l.Z)({
                        transformOrigin: "center bottom",
                        marginBottom: "14px"
                    }, t.touch && {
                        marginBottom: "24px"
                    }),
                    [`.${eX.popper}[data-popper-placement*="bottom"] &`]: (0, l.Z)({
                        transformOrigin: "center top",
                        marginTop: "14px"
                    }, t.touch && {
                        marginTop: "24px"
                    })
                })),
                eQ = (0, h.ZP)("span", {
                    name: "MuiTooltip",
                    slot: "Arrow",
                    overridesResolver: (e, t) => t.arrow
                })(({
                    theme: e
                }) => ({
                    overflow: "hidden",
                    position: "absolute",
                    width: "1em",
                    height: "0.71em",
                    boxSizing: "border-box",
                    color: e.vars ? e.vars.palette.Tooltip.bg : (0, m.Fq)(e.palette.grey[700], .9),
                    "&::before": {
                        content: '""',
                        margin: "auto",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "currentColor",
                        transform: "rotate(45deg)"
                    }
                })),
                e0 = !1,
                e1 = null,
                e6 = {
                    x: 0,
                    y: 0
                };

            function e2(e, t) {
                return o => {
                    t && t(o), e(o)
                }
            }
            var e4 = c.forwardRef(function(e, t) {
                var o, r, n, i, a, s, f, m, h, y, w, x, O, Z, T, E, R, P, j;
                let M = (0, g.Z)({
                        props: e,
                        name: "MuiTooltip"
                    }),
                    {
                        arrow: A = !1,
                        children: k,
                        components: L = {},
                        componentsProps: D = {},
                        describeChild: S = !1,
                        disableFocusListener: W = !1,
                        disableHoverListener: C = !1,
                        disableInteractive: B = !1,
                        disableTouchListener: H = !1,
                        enterDelay: N = 100,
                        enterNextDelay: F = 0,
                        enterTouchDelay: I = 700,
                        followCursor: $ = !1,
                        id: q,
                        leaveDelay: V = 0,
                        leaveTouchDelay: U = 1500,
                        onClose: z,
                        onOpen: _,
                        open: X,
                        placement: Y = "bottom",
                        PopperComponent: K,
                        PopperProps: G = {},
                        slotProps: J = {},
                        slots: Q = {},
                        title: ee,
                        TransitionComponent: et = b.Z,
                        TransitionProps: eo
                    } = M,
                    er = (0, p.Z)(M, eY),
                    en = (0, v.Z)(),
                    ei = "rtl" === en.direction,
                    [ea, es] = c.useState(),
                    [ep, el] = c.useState(null),
                    ec = c.useRef(!1),
                    eu = B || $,
                    ef = c.useRef(),
                    ed = c.useRef(),
                    em = c.useRef(),
                    eh = c.useRef(),
                    [ev, eg] = (0, ez.Z)({
                        controlled: X,
                        default: !1,
                        name: "Tooltip",
                        state: "open"
                    }),
                    ey = ev,
                    eb = (0, eV.Z)(q),
                    ew = c.useRef(),
                    ex = c.useCallback(() => {
                        void 0 !== ew.current && (document.body.style.WebkitUserSelect = ew.current, ew.current = void 0), clearTimeout(eh.current)
                    }, []);
                c.useEffect(() => () => {
                    clearTimeout(ef.current), clearTimeout(ed.current), clearTimeout(em.current), ex()
                }, [ex]);
                let eO = e => {
                        clearTimeout(e1), e0 = !0, eg(!0), _ && !ey && _(e)
                    },
                    eZ = (0, e$.Z)(e => {
                        clearTimeout(e1), e1 = setTimeout(() => {
                            e0 = !1
                        }, 800 + V), eg(!1), z && ey && z(e), clearTimeout(ef.current), ef.current = setTimeout(() => {
                            ec.current = !1
                        }, en.transitions.duration.shortest)
                    }),
                    eT = e => {
                        ec.current && "touchstart" !== e.type || (ea && ea.removeAttribute("title"), clearTimeout(ed.current), clearTimeout(em.current), N || e0 && F ? ed.current = setTimeout(() => {
                            eO(e)
                        }, e0 ? F : N) : eO(e))
                    },
                    eE = e => {
                        clearTimeout(ed.current), clearTimeout(em.current), em.current = setTimeout(() => {
                            eZ(e)
                        }, V)
                    },
                    {
                        isFocusVisibleRef: eR,
                        onBlur: eP,
                        onFocus: ej,
                        ref: eM
                    } = (0, eU.Z)(),
                    [, ek] = c.useState(!1),
                    eL = e => {
                        eP(e), !1 === eR.current && (ek(!1), eE(e))
                    },
                    eD = e => {
                        ea || es(e.currentTarget), ej(e), !0 === eR.current && (ek(!0), eT(e))
                    },
                    eS = e => {
                        ec.current = !0;
                        let t = k.props;
                        t.onTouchStart && t.onTouchStart(e)
                    };
                c.useEffect(() => {
                    if (ey) return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    };

                    function e(e) {
                        ("Escape" === e.key || "Esc" === e.key) && eZ(e)
                    }
                }, [eZ, ey]);
                let eW = (0, eq.Z)(k.ref, eM, es, t);
                ee || 0 === ee || (ey = !1);
                let eC = c.useRef(),
                    eB = {},
                    eH = "string" == typeof ee;
                S ? (eB.title = ey || !eH || C ? null : ee, eB["aria-describedby"] = ey ? eb : null) : (eB["aria-label"] = eH ? ee : null, eB["aria-labelledby"] = ey && !eH ? eb : null);
                let eN = (0, l.Z)({}, eB, er, k.props, {
                        className: (0, u.Z)(er.className, k.props.className),
                        onTouchStart: eS,
                        ref: eW
                    }, $ ? {
                        onMouseMove: e => {
                            let t = k.props;
                            t.onMouseMove && t.onMouseMove(e), e6 = {
                                x: e.clientX,
                                y: e.clientY
                            }, eC.current && eC.current.update()
                        }
                    } : {}),
                    eF = {};
                H || (eN.onTouchStart = e => {
                    eS(e), clearTimeout(em.current), clearTimeout(ef.current), ex(), ew.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", eh.current = setTimeout(() => {
                        document.body.style.WebkitUserSelect = ew.current, eT(e)
                    }, I)
                }, eN.onTouchEnd = e => {
                    k.props.onTouchEnd && k.props.onTouchEnd(e), ex(), clearTimeout(em.current), em.current = setTimeout(() => {
                        eZ(e)
                    }, U)
                }), C || (eN.onMouseOver = e2(eT, eN.onMouseOver), eN.onMouseLeave = e2(eE, eN.onMouseLeave), eu || (eF.onMouseOver = eT, eF.onMouseLeave = eE)), W || (eN.onFocus = e2(eD, eN.onFocus), eN.onBlur = e2(eL, eN.onBlur), eu || (eF.onFocus = eD, eF.onBlur = eL));
                let e_ = c.useMemo(() => {
                        var e;
                        let t = [{
                            name: "arrow",
                            enabled: !!ep,
                            options: {
                                element: ep,
                                padding: 4
                            }
                        }];
                        return null != (e = G.popperOptions) && e.modifiers && (t = t.concat(G.popperOptions.modifiers)), (0, l.Z)({}, G.popperOptions, {
                            modifiers: t
                        })
                    }, [ep, G]),
                    eX = (0, l.Z)({}, M, {
                        isRtl: ei,
                        arrow: A,
                        disableInteractive: eu,
                        placement: Y,
                        PopperComponentProp: K,
                        touch: ec.current
                    }),
                    e4 = eK(eX),
                    e7 = null != (o = null != (r = Q.popper) ? r : L.Popper) ? o : eG,
                    e8 = null != (n = null != (i = null != (a = Q.transition) ? a : L.Transition) ? i : et) ? n : b.Z,
                    e3 = null != (s = null != (f = Q.tooltip) ? f : L.Tooltip) ? s : eJ,
                    e9 = null != (m = null != (h = Q.arrow) ? h : L.Arrow) ? m : eQ,
                    e5 = (0, d.Z)(e7, (0, l.Z)({}, G, null != (y = J.popper) ? y : D.popper, {
                        className: (0, u.Z)(e4.popper, null == G ? void 0 : G.className, null == (w = null != (x = J.popper) ? x : D.popper) ? void 0 : w.className)
                    }), eX),
                    te = (0, d.Z)(e8, (0, l.Z)({}, eo, null != (O = J.transition) ? O : D.transition), eX),
                    tt = (0, d.Z)(e3, (0, l.Z)({}, null != (Z = J.tooltip) ? Z : D.tooltip, {
                        className: (0, u.Z)(e4.tooltip, null == (T = null != (E = J.tooltip) ? E : D.tooltip) ? void 0 : T.className)
                    }), eX),
                    to = (0, d.Z)(e9, (0, l.Z)({}, null != (R = J.arrow) ? R : D.arrow, {
                        className: (0, u.Z)(e4.arrow, null == (P = null != (j = J.arrow) ? j : D.arrow) ? void 0 : P.className)
                    }), eX);
                return (0, eA.jsxs)(c.Fragment, {
                    children: [c.cloneElement(k, eN), (0, eA.jsx)(e7, (0, l.Z)({
                        as: null != K ? K : eI,
                        placement: Y,
                        anchorEl: $ ? {
                            getBoundingClientRect: () => ({
                                top: e6.y,
                                left: e6.x,
                                right: e6.x,
                                bottom: e6.y,
                                width: 0,
                                height: 0
                            })
                        } : ea,
                        popperRef: eC,
                        open: !!ea && ey,
                        id: eb,
                        transition: !0
                    }, eF, e5, {
                        popperOptions: e_,
                        children: ({
                            TransitionProps: e
                        }) => (0, eA.jsx)(e8, (0, l.Z)({
                            timeout: en.transitions.duration.shorter
                        }, e, te, {
                            children: (0, eA.jsxs)(e3, (0, l.Z)({}, tt, {
                                children: [ee, A ? (0, eA.jsx)(e9, (0, l.Z)({}, to, {
                                    ref: el
                                })) : null]
                            }))
                        }))
                    }))]
                })
            })
        }
    }
]);