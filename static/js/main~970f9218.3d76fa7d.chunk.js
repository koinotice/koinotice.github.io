(this.webpackJsonpLoopringExchange = this.webpackJsonpLoopringExchange || []).push([[3], {
    103: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return l
        })), n.d(t, "b", (function () {
            return d
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26);

        function c(e) {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function e(t) {
                var n, r;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = {owner: t}, e.next = 3, Object(i.b)({
                                method: "GET",
                                url: "/api/v2/ethNonce",
                                params: n
                            });
                        case 3:
                            return r = e.sent, e.abrupt("return", r.data);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var l = "UPDATE_NONCE";

        function u(e) {
            return {type: l, payload: {nonce: e}}
        }

        function d(e) {
            return function (t) {
                Object(o.a)(a.a.mark((function n() {
                    var r;
                    return a.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0, n.next = 3, c(e);
                            case 3:
                                r = n.sent, t(u(r)), n.next = 10;
                                break;
                            case 7:
                                n.prev = 7, n.t0 = n.catch(0), console.log(n.t0);
                            case 10:
                            case"end":
                                return n.stop()
                        }
                    }), n, null, [[0, 7]])
                })))()
            }
        }
    }, 105: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "d", (function () {
            return i
        }));
        var r = "CONNECT_TO_WALLET_CONNECT", a = "CONNECT_TO_WALLET_CONNECT_COMPLETE";

        function o(e) {
            return {type: r, payload: {startConnecting: e}}
        }

        function i() {
            return {type: a, payload: {}}
        }
    }, 107: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return m
        })), n.d(t, "b", (function () {
            return c
        })), n.d(t, "a", (function () {
            return l
        })), n.d(t, "d", (function () {
            return h
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26);

        function c(e, t, n, r, a) {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function e(t, n, r, o, c) {
                var s, l, u;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return s = {
                                accountId: t,
                                orderHash: n,
                                clientOrderId: r
                            }, l = o.Rx + "," + o.Ry + "," + o.s, u = {
                                "X-API-KEY": c,
                                "X-API-SIG": l
                            }, e.next = 5, Object(i.b)({
                                method: "DELETE",
                                url: "/api/v2/orders",
                                headers: u,
                                params: s
                            });
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function l(e, t, n) {
            return u.apply(this, arguments)
        }

        function u() {
            return (u = Object(o.a)(a.a.mark((function e(t, n, r) {
                var o, c, s;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return o = {accountId: t}, c = n.Rx + "," + n.Ry + "," + n.s, s = {
                                "X-API-KEY": r,
                                "X-API-SIG": c
                            }, e.next = 5, Object(i.b)({
                                method: "DELETE",
                                url: "/api/v2/orders",
                                headers: s,
                                params: o
                            });
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var d = n(8), p = n(9);

        function m(e) {
            return f.apply(this, arguments)
        }

        function f() {
            return (f = Object(o.a)(a.a.mark((function e(t) {
                var n, r, o, c, s, l, u, d, p, m, f, b, g, y;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.accountId, r = t.limit, o = t.offset, c = t.market, s = t.statuses, l = t.apiKey, u = t.tokens, d = {"X-API-KEY": l}, p = {
                                accountId: n,
                                limit: r,
                                offset: o,
                                start: 0,
                                end: 1e3 * Date.now()
                            }, "undefined" !== typeof c && (p.market = c), "undefined" !== typeof s && (p.status = s.reduce((function (e, t) {
                                return e + "," + t
                            }))), e.next = 7, Object(i.b)({
                                method: "GET",
                                url: "/api/v2/orders",
                                headers: d,
                                params: p
                            });
                        case 7:
                            return m = e.sent, f = m.data, b = f.totalNum, g = f.orders, y = h(g, u), e.abrupt("return", {
                                accountId: n,
                                orders: y,
                                totalNum: b,
                                limit: r,
                                offset: o
                            });
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function h(e, t) {
            for (var n = [], r = 0; r < e.length; r += 1) {
                var a, o, i = e[r], c = Object(d.a)({}, i), s = c.market.split("-"), l = s[0], u = s[1];
                c.baseToken = l, c.quoteToken = u, c.sizeInString = p.a.fromWEI(l, i.size, t), c.filledSizeInString = p.a.fromWEI(l, i.filledSize, t);
                var m = "";
                if (0 === Number(i.filledSize)) m = "-"; else {
                    var f = "buy" === i.side.toLowerCase() ? l : u;
                    m = p.a.fromWEI(f, i.filledFee, t, {precision: 8})
                }
                if (c.feeInString = m, a = i.size, o = i.filledSize, "processed" === i.status) c.filled = "100%"; else {
                    var h = p.a.fromWEI(l, a, t), b = p.a.fromWEI(l, o, t), g = Math.floor(b / h * 100);
                    c.filled = "".concat(g, "%")
                }
                var y = p.a.getTokenBySymbol(u, t),
                    v = Number(parseFloat(c.sizeInString) * parseFloat(i.price)).toFixed(y.precision);
                c.totalInString = v, n.push(c)
            }
            return n
        }
    }, 108: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return r
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
            return o
        })), n.d(t, "d", (function () {
            return i
        })), n.d(t, "f", (function () {
            return c
        })), n.d(t, "e", (function () {
            return s
        }));
        var r = "CONNECT_TO_META_MASK", a = "DETECT_IF_META_MASK_INSTALLED", o = "CONNECT_TO_METAMASK_COMPLETE";

        function i(e) {
            return {type: r, payload: {startConnecting: e}}
        }

        function c(e) {
            return {type: a, payload: {installed: e}}
        }

        function s() {
            return {type: o, payload: {}}
        }
    }, 113: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return s
        })), n.d(t, "c", (function () {
            return l
        })), n.d(t, "d", (function () {
            return u
        })), n.d(t, "a", (function () {
            return d
        })), n.d(t, "h", (function () {
            return p
        })), n.d(t, "e", (function () {
            return m
        })), n.d(t, "f", (function () {
            return f
        })), n.d(t, "g", (function () {
            return b
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(8), c = n(311), s = "UPDATE_ORDER_BOOKS",
            l = "UPDATE_ORDER_BOOKS_LEVEL", u = "UPDATE_SOCKET_ORDER_BOOKS", d = "EMPTY_ORDER_BOOKS";

        function p(e, t, n, r, a, o) {
            var c = e.map((function (e) {
                return Object(i.a)({}, e, {side: "SELL"})
            })), s = t.map((function (e) {
                return Object(i.a)({}, e, {side: "BUY"})
            }));
            return {type: u, payload: {sells: c, buys: s, startVersion: n, endVersion: r, market: a, configTokens: o}}
        }

        function m(e) {
            return {type: d, payload: {level: e}}
        }

        function f(e, t, n) {
            return function (r) {
                Object(o.a)(a.a.mark((function o() {
                    var l, u, d;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(c.b)(e, t, 200, n);
                            case 3:
                                l = a.sent, u = l.asks.map((function (e) {
                                    return Object(i.a)({}, e, {side: "SELL"})
                                })), d = l.bids.map((function (e) {
                                    return Object(i.a)({}, e, {side: "BUY"})
                                })), r((o = u.reverse(), p = d, m = l.version, {
                                    type: s,
                                    payload: {sells: o, buys: p, version: m}
                                })), a.next = 12;
                                break;
                            case 9:
                                a.prev = 9, a.t0 = a.catch(0), console.log(a.t0);
                            case 12:
                            case"end":
                                return a.stop()
                        }
                        var o, p, m
                    }), o, null, [[0, 9]])
                })))()
            }
        }

        function h(e) {
            return {type: l, payload: {level: e}}
        }

        function b(e, t) {
            return function (e) {
                Object(o.a)(a.a.mark((function n() {
                    return a.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                try {
                                    e(h(t))
                                } catch (r) {
                                    console.log(r)
                                }
                            case 1:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))()
            }
        }
    }, 1193: function (e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
    }, 1194: function (e) {
        e.exports = JSON.parse('[{"constant":false,"inputs":[{"internalType":"uint256","name":"pubKeyX","type":"uint256"},{"internalType":"uint256","name":"pubKeyY","type":"uint256"},{"internalType":"bytes","name":"permission","type":"bytes"}],"name":"createOrUpdateAccount","outputs":[{"internalType":"uint24","name":"accountID","type":"uint24"},{"internalType":"bool","name":"isAccountNew","type":"bool"},{"internalType":"bool","name":"isAccountUpdated","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"}],"name":"depositTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getFees","outputs":[{"internalType":"uint256","name":"_accountCreationFeeETH","type":"uint256"},{"internalType":"uint256","name":"_accountUpdateFeeETH","type":"uint256"},{"internalType":"uint256","name":"_depositFeeETH","type":"uint256"},{"internalType":"uint256","name":"_withdrawalFeeETH","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"pubKeyX","type":"uint256"},{"internalType":"uint256","name":"pubKeyY","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint96","name":"amount","type":"uint96"},{"internalType":"bytes","name":"permission","type":"bytes"}],"name":"updateAccountAndDeposit","outputs":[{"internalType":"uint24","name":"accountID","type":"uint24"},{"internalType":"bool","name":"isAccountNew","type":"bool"},{"internalType":"bool","name":"isAccountUpdated","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"}]')
    }, 121: function (e, t, n) {
        "use strict";
        var r = n(18), a = n(3), o = n(2), i = n(0), c = n.n(i), s = n(80);
        t.a = function (e) {
            var t = e.title, n = e.tips, l = e.marginTop, u = e.imageUrl, d = e.textAlign,
                p = Object(i.useContext)(a.a), m = n || [], f = l || "80px", h = d || "left";
            return c.a.createElement("div", null, c.a.createElement(r.a, {
                icon: s.faCircleNotch,
                size: "2x",
                spin: !0,
                style: {margin: "20px", marginTop: f}
            }), c.a.createElement("div", {
                style: {
                    margin: "16px",
                    color: p.primary,
                    fontSize: "1rem"
                }
            }, c.a.createElement(o.a, {s: t})), c.a.createElement("div", {
                style: {
                    fontSize: "0.85rem",
                    color: p.textWhite
                }
            }, m.map((function (e, t) {
                return c.a.createElement("div", {style: {textAlign: h, margin: "16px"}, key: t}, e)
            }))), u ? c.a.createElement("div", null, c.a.createElement("img", {
                alt: "check metamask plugin icon",
                style: {
                    userSelect: "none",
                    height: "80px",
                    marginTop: "16px",
                    filter: "drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2)"
                },
                src: u
            })) : c.a.createElement("span", null))
        }
    }, 1331: function (e, t, n) {
    }, 1332: function (e, t, n) {
    }, 134: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return l
        })), n.d(t, "b", (function () {
            return u
        })), n.d(t, "c", (function () {
            return d
        })), n.d(t, "d", (function () {
            return p
        })), n.d(t, "e", (function () {
            return f
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(81), c = n(632), s = n.n(c), l = "FETCH_ACCOUNTS",
            u = "FETCH_ACCOUNTS_DATA_SUCCESS", d = "FETCH_ACCOUNTS_FULFILLED", p = "FETCH_ACCOUNTS_REJECTED";

        function m(e) {
            return {type: u, payload: {items: e}}
        }

        function f() {
            return function (e) {
                new Promise((function (t, n) {
                    var r = window.web3, a = function () {
                        return b.apply(this, arguments)
                    }();
                    s()(a) ? r && r.eth && r.eth.getAccounts((function (r, a) {
                        r ? n(r) : (e(m(a)), t(a))
                    })) : (e(m(a)), t(a))
                }))
            }
        }

        function h(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return new Promise((function (n, r) {
                e.apply(void 0, Object(i.a)(t).concat([function (e, t) {
                    null !== e ? r(e) : n(t)
                }]))
            }))
        }

        function b() {
            return (b = Object(o.a)(a.a.mark((function e() {
                var t, n, r, o;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t = window, n = t.web3, r = h(n.eth.getAccounts), e.next = 5, r;
                        case 5:
                            return o = e.sent, e.abrupt("return", o);
                        case 9:
                            return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", []);
                        case 12:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 9]])
            })))).apply(this, arguments)
        }
    }, 1435: function (e, t, n) {
    }, 163: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return l
        })), n.d(t, "b", (function () {
            return u
        })), n.d(t, "d", (function () {
            return d
        })), n.d(t, "c", (function () {
            return f
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26);

        function c(e) {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function e(t) {
                var n;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(i.b)({method: "GET", url: "/api/v2/price", params: {legal: t}});
                        case 2:
                            return n = e.sent, e.abrupt("return", n.data);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var l = "UPDATE_CMC_LEGAL", u = "UPDATE_CMC_PRICE";

        function d(e) {
            return function (t) {
                Object(o.a)(a.a.mark((function n() {
                    var r;
                    return a.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0, n.next = 3, c(e);
                            case 3:
                                r = n.sent, t(p(e)), t(m(r)), n.next = 11;
                                break;
                            case 8:
                                n.prev = 8, n.t0 = n.catch(0), console.log(n.t0);
                            case 11:
                            case"end":
                                return n.stop()
                        }
                    }), n, null, [[0, 8]])
                })))()
            }
        }

        function p(e) {
            return {type: l, payload: {legal: e}}
        }

        function m(e) {
            return {type: u, payload: {prices: e}}
        }

        function f(e) {
            return function (t) {
                Object(o.a)(a.a.mark((function n() {
                    var r;
                    return a.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0, n.next = 3, c(e);
                            case 3:
                                r = n.sent, t(m(r)), n.next = 10;
                                break;
                            case 7:
                                n.prev = 7, n.t0 = n.catch(0), console.log(n.t0);
                            case 10:
                            case"end":
                                return n.stop()
                        }
                    }), n, null, [[0, 7]])
                })))()
            }
        }
    }, 165: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return u
        })), n.d(t, "b", (function () {
            return d
        })), n.d(t, "c", (function () {
            return p
        })), n.d(t, "d", (function () {
            return m
        })), n.d(t, "e", (function () {
            return h
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(8), c = n(36), s = n(394), l = n(392), u = "INITIALIZE_INFO",
            d = "UPDATE_INFO", p = "UPDATE_MARKETS", m = "UPDATE_TOKENS";

        function f(e, t, n) {
            return {type: u, payload: Object(i.a)({}, e, {markets: t, tokens: n})}
        }

        function h() {
            return function (e) {
                Object(o.a)(a.a.mark((function t() {
                    var n, r, o;
                    return a.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, b();
                            case 2:
                                return n = t.sent, t.next = 5, y();
                            case 5:
                                return r = t.sent, t.next = 8, x();
                            case 8:
                                o = t.sent, e(f(n, r, o));
                            case 10:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))()
            }
        }

        function b() {
            return g.apply(this, arguments)
        }

        function g() {
            return (g = Object(o.a)(a.a.mark((function e() {
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Object(c.f)();
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), console.log(e.t0), -1 === e.t0.message.indexOf("timeout")) {
                                e.next = 15;
                                break
                            }
                            return e.next = 12, b();
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 15:
                            throw e.t0;
                        case 16:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 6]])
            })))).apply(this, arguments)
        }

        function y() {
            return v.apply(this, arguments)
        }

        function v() {
            return (v = Object(o.a)(a.a.mark((function e() {
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Object(s.a)();
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), console.log(e.t0), -1 === e.t0.message.indexOf("timeout")) {
                                e.next = 13;
                                break
                            }
                            return e.next = 12, y();
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 6]])
            })))).apply(this, arguments)
        }

        function x() {
            return E.apply(this, arguments)
        }

        function E() {
            return (E = Object(o.a)(a.a.mark((function e() {
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Object(l.a)();
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), console.log(e.t0), -1 === e.t0.message.indexOf("timeout")) {
                                e.next = 13;
                                break
                            }
                            return e.next = 12, x();
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 6]])
            })))).apply(this, arguments)
        }
    }, 17: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        })), n.d(t, "h", (function () {
            return l
        })), n.d(t, "c", (function () {
            return u
        })), n.d(t, "j", (function () {
            return d
        })), n.d(t, "i", (function () {
            return p
        })), n.d(t, "k", (function () {
            return m
        })), n.d(t, "d", (function () {
            return f
        })), n.d(t, "f", (function () {
            return h
        })), n.d(t, "e", (function () {
            return b
        })), n.d(t, "g", (function () {
            return g
        })), n.d(t, "b", (function () {
            return y
        })), n.d(t, "l", (function () {
            return v
        })), n.d(t, "p", (function () {
            return x
        })), n.d(t, "o", (function () {
            return E
        })), n.d(t, "m", (function () {
            return k
        })), n.d(t, "n", (function () {
            return O
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(39), c = n(37), s = "GET_DATA_FROM_LOCALSTORAGE",
            l = "RESET_PASSWORD", u = "LOGOUT", d = "UPDATE_ACCOUNT", p = "UNDEFINED", m = "WALLET_UNCONNECTED",
            f = "NOT_REGISTERED", h = "REGISTERING", b = "REGISTERED", g = "RESETTING_PASSWORD", y = "LOGGED_IN";

        function v() {
            return [p, m, f, h, b, g, y]
        }

        function x(e) {
            return {type: l, payload: {password: e}}
        }

        function E(e) {
            return {type: d, payload: {account: e}}
        }

        function k(e) {
            return {type: s, payload: {address: e}}
        }

        function O() {
            return function (e) {
                Object(o.a)(a.a.mark((function t() {
                    return a.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                try {
                                    e({
                                        type: u,
                                        payload: {}
                                    }), e(Object(i.l)()), e(Object(c.j)([])), e(Object(c.i)([])), e(Object(i.s)([]))
                                } catch (n) {
                                }
                            case 1:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))()
            }
        }
    }, 171: function (e, t, n) {
        "use strict";
        (function (e) {
            var r = n(20), a = n(34), o = n(232), i = n(683), c = n(84), s = n(470), l = n.n(s);
            t.a = {
                generateKeyPair: function (e) {
                    var t = Object(i.a)(e), n = r.zeroPad(t, 32), o = a.bigInt.leBuff2int(n).mod(c.a.subOrder),
                        s = c.a.mulPointEscalar(c.a.Base8, o);
                    return {publicKeyX: s[0].toString(10), publicKeyY: s[1].toString(10), secretKey: o.toString(10)}
                }, sign: function (t, n) {
                    var r = Object(a.bigInt)(t), i = a.bigInt.leInt2Buff(r, 32), s = l()("blake512").update(i).digest(),
                        u = a.bigInt.leInt2Buff(Object(a.bigInt)(n), 32),
                        d = l()("blake512").update(e.concat([s.slice(32, 64), u])).digest(), p = a.bigInt.leBuff2int(d);
                    p = p.mod(c.a.subOrder);
                    var m = c.a.mulPointEscalar(c.a.Base8, r), f = c.a.mulPointEscalar(c.a.Base8, p),
                        h = Object(o.a)(6, 6, 52)([f[0], f[1], m[0], m[1], n]), b = p.add(h.mul(r)).mod(c.a.subOrder);
                    return {Rx: f[0].toString(), Ry: f[1].toString(), s: b.toString()}
                }, verify: function (e, t, n) {
                    var r = [Object(a.bigInt)(n[0]), Object(a.bigInt)(n[1])],
                        i = [Object(a.bigInt)(t.Rx), Object(a.bigInt)(t.Ry)], s = Object(a.bigInt)(t.s);
                    if (!c.a.inCurve(i)) return !1;
                    if (!c.a.inCurve(r)) return !1;
                    if (s >= c.a.subOrder) return !1;
                    var l = Object(o.a)(6, 6, 52)([i[0], i[1], r[0], r[1], Object(a.bigInt)(e)]),
                        u = c.a.mulPointEscalar(c.a.Base8, s), d = c.a.mulPointEscalar(r, l);
                    return d = c.a.addPoint(i, d), !!u[0].equals(d[0]) && !!u[1].equals(d[1])
                }
            }
        }).call(this, n(24).Buffer)
    }, 185: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return i
        })), n.d(t, "a", (function () {
            return c
        })), n.d(t, "b", (function () {
            return s
        }));
        var r = n(625), a = function (e) {
            return Array.isArray(e) || "object" === typeof e
        }, o = function (e) {
            return e.length || e.size
        }, i = function (e) {
            var t = e.bids, n = e.asks;
            return a(t) && a(n) && (o(t) > 0 || o(n) > 0)
        }, c = function (e) {
            var t, n = 0, a = Object(r.a)(e.split("").reverse());
            try {
                for (a.s(); !(t = a.n()).done;) {
                    var o = t.value;
                    if ("0" !== o && 0 !== o) return n;
                    n += 1
                }
            } catch (i) {
                a.e(i)
            } finally {
                a.f()
            }
            return n
        }, s = function (e) {
            var t = String(e);
            if (t) {
                var n = c(t), r = t.substring(0, t.length - n);
                return r.endsWith(".") ? r.substring(0, r.length - 1) : r
            }
            return t
        }
    }, 186: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        })), n.d(t, "b", (function () {
            return l
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(392), c = "UPDATE_TOKENS";

        function s(e) {
            return {type: c, payload: {tokens: e}}
        }

        function l() {
            return function (e) {
                Object(o.a)(a.a.mark((function t() {
                    var n;
                    return a.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, Object(i.a)();
                            case 3:
                                n = t.sent, e(s(n)), t.next = 10;
                                break;
                            case 7:
                                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                            case 10:
                            case"end":
                                return t.stop()
                        }
                    }), t, null, [[0, 7]])
                })))()
            }
        }
    }, 188: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        })), n.d(t, "b", (function () {
            return l
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(394), c = "UPDATE_MARKET_LIST";

        function s(e) {
            return {type: c, payload: {markets: e}}
        }

        function l() {
            return function (e) {
                Object(o.a)(a.a.mark((function t() {
                    var n;
                    return a.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, Object(i.a)();
                            case 3:
                                n = t.sent, e(s(n)), t.next = 9;
                                break;
                            case 7:
                                t.prev = 7, t.t0 = t.catch(0);
                            case 9:
                            case"end":
                                return t.stop()
                        }
                    }), t, null, [[0, 7]])
                })))()
            }
        }
    }, 192: function (e, t, n) {
        "use strict";
        n(547);
        var r = n(267), a = (n(140), n(51)), o = (n(141), n(27)), i = (n(67), n(29)), c = (n(323), n(72)), s = n(6),
            l = n(18), u = n(663), d = n(0), p = n.n(d), m = n(3);

        function f() {
            var e = Object(s.a)(["\n  height: ", ";\n  border-radius: 4px;\n  width: 100%;\n  background: ", ";\n  font-size: ", ";\n  border: 1px solid ", "!important;\n\n  &:hover, &:focus  {\n    background: ", "!important;\n    border 1px solid  ", "!important;\n    color: ", ";\n  }\n"]);
            return f = function () {
                return e
            }, e
        }

        function h() {
            var e = Object(s.a)(["\n  background: ", "!important;\n  li {\n    padding-left: 16px;\n    border-bottom: 1px solid ", "!important;\n\n    :hover {\n      background: ", " !important;\n      color: ", " !important;\n    }\n  }\n"]);
            return h = function () {
                return e
            }, e
        }

        var b = Object(m.d)(c.a)(h(), (function (e) {
            return e.theme.sidePanelBackground
        }), (function (e) {
            return e.theme.seperator
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textBigButton
        })), g = Object(m.d)(i.a)(f(), (function (e) {
            return e.small ? "32px" : "40px"
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.small ? "0.85rem" : "0.9rem"
        }), (function (e) {
            return e.theme.inputBorderColor
        }), (function (e) {
            return e.theme.background
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        }), (function (e) {
            return e.theme.textBright
        }));
        t.a = function (e) {
            var t = e.options, n = e.selected, i = e.small, c = Object(d.useContext)(m.a);
            return p.a.createElement(r.a, {
                trigger: ["click"],
                overlay: p.a.createElement(b, null, t)
            }, p.a.createElement(g, {
                style: {paddingLeft: "8px", paddingRight: "8px"},
                small: i
            }, p.a.createElement(a.a, {gutter: 16, style: {paddingBottom: "1px"}}, p.a.createElement(o.a, {
                span: 16,
                style: {textAlign: "left", color: c.textWhite}
            }, n), p.a.createElement(o.a, {
                span: 8,
                style: {textAlign: "right", color: c.primary}
            }, p.a.createElement(l.a, {icon: u.faCaretDown})))))
        }
    }, 197: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "e", (function () {
            return i
        })), n.d(t, "d", (function () {
            return c
        }));
        var r = "UPDATE_TYPE_1", a = "UPDATE_TYPE_2", o = "UPDATE_TYPE_3";

        function i(e) {
            return {type: r, payload: {type: e}}
        }

        function c(e) {
            return {type: a, payload: {type: e}}
        }
    }, 198: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return c
        })), n.d(t, "a", (function () {
            return s
        })), n.d(t, "d", (function () {
            return l
        })), n.d(t, "e", (function () {
            return u
        })), n.d(t, "c", (function () {
            return d
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(36), c = "UPDATE_TICKER", s = "REST_TICKER";

        function l() {
            return {type: s, payload: {}}
        }

        function u(e) {
            return {type: c, payload: {ticker: e}}
        }

        function d(e, t) {
            return function (n) {
                Object(o.a)(a.a.mark((function r() {
                    var o, c;
                    return a.a.wrap((function (r) {
                        for (; ;) switch (r.prev = r.next) {
                            case 0:
                                return r.prev = 0, r.next = 3, Object(i.i)([e], t);
                            case 3:
                                o = r.sent, console.log(JSON.stringify(o)), c = o[0], n(u(c)), r.next = 11;
                                break;
                            case 9:
                                r.prev = 9, r.t0 = r.catch(0);
                            case 11:
                            case"end":
                                return r.stop()
                        }
                    }), r, null, [[0, 9]])
                })))()
            }
        }
    }, 20: function (e, t, n) {
        "use strict";
        n.r(t), function (e) {
            n.d(t, "toBuffer", (function () {
                return s
            })), n.d(t, "zeroPad", (function () {
                return l
            })), n.d(t, "toHex", (function () {
                return u
            })), n.d(t, "toNumber", (function () {
                return d
            })), n.d(t, "toBig", (function () {
                return p
            })), n.d(t, "toBN", (function () {
                return m
            })), n.d(t, "fromGWEI", (function () {
                return f
            })), n.d(t, "toGWEI", (function () {
                return h
            })), n.d(t, "formatKey", (function () {
                return b
            })), n.d(t, "formatAddress", (function () {
                return g
            })), n.d(t, "addHexPrefix", (function () {
                return y
            })), n.d(t, "clearHexPrefix", (function () {
                return v
            })), n.d(t, "padLeftEven", (function () {
                return x
            })), n.d(t, "getDisplaySymbol", (function () {
                return E
            })), n.d(t, "toFixed", (function () {
                return k
            }));
            var r = n(133), a = n(28), o = n.n(a), i = n(71), c = n.n(i);

            function s(t) {
                return t instanceof e ? t : r.toBuffer(t)
            }

            function l(e, t) {
                return s(String(e).padStart(t, "0"))
            }

            function u(t) {
                if ("number" === typeof t || t instanceof c.a || t instanceof o.a) return y(t.toString(16));
                if (t instanceof e) return y(t.toString("hex"));
                if ("string" === typeof t) return new RegExp(/^0x[0-9a-fA-F]*$/).test(t) ? t : y(s(t).toString("hex"));
                throw new Error("Unsupported type")
            }

            function d(e) {
                if ("number" === typeof e) return e;
                if (e instanceof c.a || e instanceof o.a) return e.toNumber();
                if ("string" === typeof e) return Number(e);
                throw new Error("Unsupported type")
            }

            function p(e) {
                if (e instanceof c.a) return e;
                if ("number" === typeof e) return new c.a(e.toString());
                if ("string" === typeof e) return new c.a(e);
                throw new Error("Unsupported type")
            }

            function m(e) {
                return e instanceof o.a ? e : new o.a(p(e).toString(10), 10)
            }

            function f(e) {
                return new c.a(p(e).times(1e9).toFixed(0))
            }

            function h(e) {
                return p(e).div(1e9)
            }

            function b(t) {
                if (t instanceof e) return t.toString("hex");
                if ("string" === typeof t) return t.startsWith("0x") ? t.slice(2) : t;
                throw new Error("Unsupported type")
            }

            function g(t) {
                if (t instanceof e) return r.toChecksumAddress("0x" + t.toString("hex"));
                if ("string" === typeof t) return r.toChecksumAddress(t.startsWith("0x") ? t : "0x" + t);
                throw new Error("Unsupported type")
            }

            function y(e) {
                if ("string" === typeof e) return e.startsWith("0x") ? e : "0x" + e;
                throw new Error("Unsupported type")
            }

            function v(e) {
                if ("string" === typeof e) return e.startsWith("0x") ? e.slice(2) : e;
                throw new Error("Unsupported type")
            }

            function x(e) {
                return e.length % 2 !== 0 ? "0".concat(e) : e
            }

            function E(e) {
                switch (e) {
                    case"CNY":
                        return "\uffe5";
                    case"USD":
                        return "$";
                    default:
                        return ""
                }
            }

            function k(e, t, n) {
                if (t = t || 0, e instanceof c.a) {
                    var r = n ? 0 : 1;
                    return e.toFixed(t, r)
                }
                if ("number" === typeof e) return n ? (Math.ceil(e * Number("1e" + t)) / Number("1e" + t)).toFixed(t) : (Math.floor(e * Number("1e" + t)) / Number("1e" + t)).toFixed(t);
                throw new Error("Unsupported type")
            }

            c.a.config({EXPONENTIAL_AT: 20, RANGE: [-1e5, 1e7], ROUNDING_MODE: 1})
        }.call(this, n(24).Buffer)
    }, 203: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "a", (function () {
            return o
        })), n.d(t, "e", (function () {
            return i
        })), n.d(t, "d", (function () {
            return c
        })), n.d(t, "f", (function () {
            return s
        }));
        var r = "SELECT_THEME", a = "SELECT_LANGUAGE", o = "SELECT_CURRENCY";

        function i(e) {
            return {type: a, payload: {language: e}}
        }

        function c(e) {
            return {type: o, payload: {currency: e}}
        }

        function s(e) {
            return {type: r, payload: {themeName: e}}
        }
    }, 205: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return c
        })), n.d(t, "b", (function () {
            return s
        })), n.d(t, "a", (function () {
            return l
        })), n.d(t, "d", (function () {
            return u
        })), n.d(t, "e", (function () {
            return p
        })), n.d(t, "f", (function () {
            return m
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(36), c = "UPDATE_TRADES", s = "EXTEND_TRADES", l = "EMPTY_TRADES";

        function u() {
            return {type: "EMPTY_TRADES", payload: {}}
        }

        function d(e) {
            return {type: c, payload: {trades: e}}
        }

        function p(e) {
            return {type: s, payload: {newTrades: e}}
        }

        function m(e) {
            return function (t) {
                Object(o.a)(a.a.mark((function n() {
                    var r, o, c, s;
                    return a.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return 40, n.next = 3, f(e, 40);
                            case 3:
                                r = n.sent, n.prev = 4, o = [], c = 0;
                            case 7:
                                if (!(c < r.length)) {
                                    n.next = 15;
                                    break
                                }
                                if (7 === (s = r[c]).length) {
                                    n.next = 11;
                                    break
                                }
                                return n.abrupt("continue", 12);
                            case 11:
                                o.push(Object(i.b)(s));
                            case 12:
                                c++, n.next = 7;
                                break;
                            case 15:
                                t(d(o)), n.next = 22;
                                break;
                            case 18:
                                n.prev = 18, n.t0 = n.catch(4), console.log(n.t0), m(e);
                            case 22:
                            case"end":
                                return n.stop()
                        }
                    }), n, null, [[4, 18]])
                })))()
            }
        }

        function f(e, t) {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = Object(o.a)(a.a.mark((function e(t, n) {
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Object(i.k)(t, n);
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), console.log(e.t0), -1 === e.t0.message.indexOf("timeout")) {
                                e.next = 13;
                                break
                            }
                            return e.next = 12, f(t, n);
                        case 12:
                            return e.abrupt("return", e.sent);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 6]])
            })))).apply(this, arguments)
        }
    }, 22: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        })), n.d(t, "n", (function () {
            return c
        })), n.d(t, "j", (function () {
            return s
        })), n.d(t, "s", (function () {
            return l
        })), n.d(t, "f", (function () {
            return u
        })), n.d(t, "l", (function () {
            return d
        })), n.d(t, "p", (function () {
            return p
        })), n.d(t, "d", (function () {
            return m
        })), n.d(t, "k", (function () {
            return f
        })), n.d(t, "v", (function () {
            return h
        })), n.d(t, "i", (function () {
            return b
        })), n.d(t, "r", (function () {
            return g
        })), n.d(t, "h", (function () {
            return v
        })), n.d(t, "u", (function () {
            return x
        })), n.d(t, "m", (function () {
            return E
        })), n.d(t, "q", (function () {
            return k
        })), n.d(t, "e", (function () {
            return O
        })), n.d(t, "o", (function () {
            return w
        })), n.d(t, "b", (function () {
            return j
        })), n.d(t, "t", (function () {
            return A
        })), n.d(t, "g", (function () {
            return C
        })), n.d(t, "c", (function () {
            return T
        }));
        var r = n(81), a = n(8);

        function o() {
            var e = localStorage.getItem("accounts");
            return e ? new Map(JSON.parse(e)) : new Map
        }

        function i(e) {
            var t = Date.now(), n = o().get(e.toLowerCase()),
                r = !(n && n.walletType && ("MetaMask" === n.walletType || "WalletConnect" === n.walletType));
            return !n || !n.time || t >= n.time + 108e5 || r ? (s(e), null) : (delete n.time, n)
        }

        function c(e) {
            try {
                var t = o();
                t.set(e.address.toLowerCase(), Object(a.a)({}, e, {time: Date.now()})), localStorage.setItem("accounts", JSON.stringify(Object(r.a)(t)))
            } catch (n) {
            }
        }

        function s(e) {
            if (e) {
                var t = o();
                t.delete(e.toLowerCase()), localStorage.setItem("accounts", JSON.stringify(Object(r.a)(t)))
            }
        }

        function l() {
            localStorage.setItem("showAllOpenOrders", "true")
        }

        function u() {
            return localStorage.getItem("showAllOpenOrders")
        }

        function d() {
            localStorage.removeItem("showAllOpenOrders")
        }

        function p() {
            localStorage.setItem("hideLowBalanceAssets", "true")
        }

        function m() {
            return localStorage.getItem("hideLowBalanceAssets")
        }

        function f() {
            localStorage.removeItem("hideLowBalanceAssets")
        }

        function h(e) {
            localStorage.setItem("walletType", e)
        }

        function b() {
            return localStorage.getItem("walletType")
        }

        function g() {
            localStorage.setItem("hasRecord", "true")
        }

        function y() {
            var e = localStorage.getItem("updateRecords");
            return e ? new Map(JSON.parse(e)) : new Map
        }

        function v(e) {
            return y().get(e.toLowerCase())
        }

        function x(e) {
            var t = y();
            t.set(e.address.toLowerCase(), e), localStorage.setItem("updateRecords", JSON.stringify(Object(r.a)(t)))
        }

        function E(e) {
            var t = y();
            t.delete(e.toLowerCase()), localStorage.setItem("updateRecords", JSON.stringify(Object(r.a)(t)))
        }

        function k(e) {
            "en" !== e && "zh" !== e || localStorage.setItem("language", e)
        }

        function O() {
            var e = localStorage.getItem("language") || function () {
                var e = window.navigator.languages && window.navigator.languages[0] || window.navigator.language || window.navigator.userLanguage;
                -1 !== e.indexOf("-") ? e = e.split("-")[0] : -1 !== e.indexOf("_") && (e = e.split("_")[0]);
                return e
            }();
            return "zh" === e ? (document.title = "\u8def\u5370\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240", e = "zh") : (e = "en", document.title = "Loopring Exchange (DEX)"), e
        }

        function w(e) {
            "USD" !== e && "CNY" !== e || localStorage.setItem("currency", e)
        }

        function j() {
            var e = localStorage.getItem("currency");
            return "USD" === e || "CNY" === e ? e : "zh" === O() ? "CNY" : "USD"
        }

        function A(e) {
            localStorage.setItem("theme", e)
        }

        function C() {
            var e = localStorage.getItem("theme");
            return "dark" !== e && "light" !== e ? "auto" : e
        }

        function T(e) {
            var t = O();
            switch (e) {
                case 1:
                    return "zh" === t ? "https://cn.etherscan.com" : "https://etherscan.io";
                case 5:
                    return "https://goerli.etherscan.io";
                default:
                    return ""
            }
        }
    }, 223: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "trim", (function () {
            return o
        })), n.d(t, "trimAll", (function () {
            return i
        })), n.d(t, "keccakHash", (function () {
            return c
        })), n.d(t, "calculateGas", (function () {
            return s
        }));
        var r = n(133), a = n(20);

        function o(e) {
            return e.replace(/(^\s+)|(\s+$)/g, "")
        }

        function i(e) {
            return o(e).replace(/\s/g, "")
        }

        function c(e) {
            return Object(a.toHex)(Object(r.keccak)(e))
        }

        function s(e, t) {
            return Object(a.toBig)(e).times(t).div(1e9)
        }

        t.default = {hashPersonalMessage: r.hashPersonalMessage, trim: o, trimAll: i, keccakHash: c, calculateGas: s}
    }, 23: function (e, t, n) {
        "use strict";
        n.d(t, "g", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "j", (function () {
            return o
        })), n.d(t, "f", (function () {
            return i
        })), n.d(t, "d", (function () {
            return c
        })), n.d(t, "c", (function () {
            return s
        })), n.d(t, "e", (function () {
            return l
        })), n.d(t, "h", (function () {
            return u
        })), n.d(t, "i", (function () {
            return d
        })), n.d(t, "a", (function () {
            return p
        })), n.d(t, "l", (function () {
            return m
        })), n.d(t, "k", (function () {
            return f
        })), n.d(t, "m", (function () {
            return h
        })), n.d(t, "o", (function () {
            return b
        })), n.d(t, "t", (function () {
            return g
        })), n.d(t, "r", (function () {
            return y
        })), n.d(t, "q", (function () {
            return v
        })), n.d(t, "p", (function () {
            return x
        })), n.d(t, "s", (function () {
            return E
        })), n.d(t, "n", (function () {
            return k
        }));
        var r = "SHOW_REGISTER_ACCOUNT", a = "SHOW_DEPOSIT", o = "SHOW_WITHDRAW", i = "SHOW_LOGOUT_MODAL",
            c = "SHOW_EXPORT_ACCOUNT", s = "SHOW_ENTER_PASSWORD", l = "SHOW_LOGIN_MODAL",
            u = "SHOW_RESET_PASSWORD_MODAL", d = "SHOW_SIDEBAR", p = "SHOW_CONNECT_TO_WALLET_MODAL";

        function m(e) {
            return {type: r, payload: {show: e}}
        }

        function f(e) {
            return {type: l, payload: {show: e}}
        }

        function h(e) {
            return {type: u, payload: {show: e}}
        }

        function b(e, t) {
            return {type: a, payload: {show: e, token: t}}
        }

        function g(e, t) {
            return {type: o, payload: {show: e, token: t}}
        }

        function y(e) {
            return {type: i, payload: {show: e}}
        }

        function v(e) {
            return {type: c, payload: {show: e}}
        }

        function x(e) {
            return {type: s, payload: {show: e}}
        }

        function E(e) {
            return {type: d, payload: {show: e}}
        }

        function k(e) {
            return {type: p, payload: {show: e}}
        }
    }, 232: function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return f
            }));
            var r = n(34), a = n(469), o = n.n(a), i = n(152), c = r.bn128.Fr, s = "poseidon";

            function l(t, n) {
                for (var a = [], i = e.from(t), s = o()(32).update(i).digest(); a.length < n;) {
                    var l = c.affine(r.bigInt.leBuff2int(s));
                    a.push(l), s = o()(32).update(s).digest()
                }
                return a
            }

            function u(e) {
                for (var t = 0; t < e.length; t++) {
                    if (e[t].isZero()) return !1;
                    for (var n = t + 1; n < e.length; n++) if (e[t].equals(e[n])) return !1
                }
                return !0
            }

            function d(e, t) {
                for (var n = 0; n < e.length; n++) e[n] = c.add(e[n], t)
            }

            function p(e) {
                return c.mul(e, c.square(c.square(e, e)))
            }

            function m(e, t) {
                for (var n = new Array(e.length), r = 0; r < e.length; r++) {
                    n[r] = c.zero;
                    for (var a = 0; a < e.length; a++) n[r] = c.add(n[r], c.mul(t[r][a], e[a]))
                }
                for (var o = 0; o < e.length; o++) e[o] = n[o]
            }

            function f(e, t, n, a) {
                "undefined" === typeof a && (a = s), "undefined" === typeof t && (t = 8), "undefined" === typeof n && (n = 57), "undefined" === typeof e && (e = 6), i(t % 2 === 0);
                var o = function (e, t, n) {
                    return "undefined" === typeof t && (t = s), "undefined" === typeof n && (n = 65), "undefined" === typeof e && (e = 6), l(t + "_constants", n)
                }(e, a, t + n), f = function (e, t, n) {
                    "undefined" === typeof t && (t = s), "undefined" === typeof n && (n = 65), "undefined" === typeof e && (e = 6);
                    for (var r = "0000", a = l(t + "_matrix_" + r, 2 * e); !u(a);) {
                        for (r = Number(r) + 1 + ""; r.length < 4;) r = "0" + r;
                        a = l(t + "_matrix_" + r, 2 * e)
                    }
                    for (var o = new Array(e), i = 0; i < e; i++) {
                        o[i] = new Array(e);
                        for (var d = 0; d < e; d++) o[i][d] = c.affine(c.inverse(c.sub(a[i], a[e + d])))
                    }
                    return o
                }(e, a, t + n);
                return function (a) {
                    var s = [];
                    i(a.length < e), i(a.length > 0);
                    for (var l = 0; l < a.length; l++) s[l] = Object(r.bigInt)(a[l]);
                    for (var u = a.length; u < e; u++) s[u] = c.zero;
                    for (var h = 0; h < t + n; h++) {
                        if (d(s, o[h]), h < t / 2 || h >= t / 2 + n) for (var b = 0; b < e; b++) s[b] = p(s[b]); else s[0] = p(s[0]);
                        m(s, f)
                    }
                    return c.affine(s[0])
                }
            }
        }).call(this, n(24).Buffer)
    }, 25: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return g
        })), n.d(t, "e", (function () {
            return p
        })), n.d(t, "f", (function () {
            return m
        })), n.d(t, "a", (function () {
            return f
        })), n.d(t, "b", (function () {
            return h
        })), n.d(t, "d", (function () {
            return b
        }));
        n(573);
        var r = n(383), a = n(6), o = n(3);

        function i() {
            var e = Object(a.a)(["\n  .ant-spin-blur {\n    opacity: 0 !important;\n  }\n"]);
            return i = function () {
                return e
            }, e
        }

        function c() {
            var e = Object(a.a)(["\n  width: 100%;\n  margin-bottom: 18px;\n  color: ", ";\n  font-weight: 400;\n  font-size: 0.9rem;\n\n  ul {\n    padding-inline-start: 16px;\n  }\n"]);
            return c = function () {
                return e
            }, e
        }

        function s() {
            var e = Object(a.a)(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 0.9rem;\n"]);
            return s = function () {
                return e
            }, e
        }

        function l() {
            var e = Object(a.a)(["\n  padding: 10.5px 16px;\n  height: 40px;\n  background: ", ";\n  color: ", ";\n  border-radius: 4px;\n  border: 1px solid ", ";\n  font-size: 0.9rem;\n"]);
            return l = function () {
                return e
            }, e
        }

        function u() {
            var e = Object(a.a)(["\n  color: ", ";\n  font-size: 1.2rem;\n  font-weight: 600;\n  user-select: none;\n"]);
            return u = function () {
                return e
            }, e
        }

        function d() {
            var e = Object(a.a)(["\n  color: ", ";\n  font-size: 0.9rem;\n"]);
            return d = function () {
                return e
            }, e
        }

        var p = o.d.span(d(), (function (e) {
            return e.theme.red
        })), m = o.d.span(u(), (function (e) {
            return e.theme.textBright
        })), f = o.d.div(l(), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.inputBorderColor
        })), h = o.d.p(s(), (function (e) {
            return e.theme.textWhite
        })), b = o.d.div(c(), (function (e) {
            return e.theme.textWhite
        })), g = Object(o.d)(r.a)(i())
    }, 259: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        }));
        var r = "UPDATE_BLOCK_NUM";

        function a(e) {
            return {type: r, payload: {blockNum: e}}
        }
    }, 26: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        })), n.d(t, "b", (function () {
            return o.a
        })), n.d(t, "d", (function () {
            return p
        })), n.d(t, "c", (function () {
            return a
        }));
        var r = n(20), a = n(223), o = n(92), i = n(4), c = n.n(i), s = n(10), l = n(357), u = {
            STRING: {type: "string", required: !0},
            URL: {type: "url", required: !0},
            ADDRESS: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{40}$/g},
            HEX: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]*$/g},
            ETH_DATA: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{1,64}$/g},
            TX_HASH: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{64}$/g},
            RPC_TAG: {type: "enum", required: !0, enum: ["latest", "earliest", "pending"]},
            TX: {
                type: "object",
                required: !0,
                fields: {
                    to: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{40}$/g},
                    value: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{1,64}$/g},
                    gas: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{1,64}$/g},
                    gasPrice: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{1,64}$/g},
                    chainId: {type: "number", required: !0},
                    nonce: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]{1,64}$/g},
                    data: {type: "string", required: !0, pattern: /^0x[0-9a-fA-F]*$/g},
                    signed: {type: "string"}
                }
            }
        }, d = function (e) {
            var t = e.map((function (e) {
                return e.message
            })).join();
            throw new Error("data type invalid: ".concat(t, " \n"))
        };

        function p(e) {
            return m.apply(this, arguments)
        }

        function m() {
            return (m = Object(s.a)(c.a.mark((function e(t) {
                var n, r, a, o, i, s, p;
                return c.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.type, r = t.value, a = t.onError, o = t.onSuccess, i = {}, s = {}, "undefined" !== typeof r) {
                                e.next = 5;
                                break
                            }
                            throw new Error("data type invalid: ".concat(n, " should not be undefined"));
                        case 5:
                            if (null !== r) {
                                e.next = 7;
                                break
                            }
                            throw new Error("data type invalid: ".concat(n, " should not be null"));
                        case 7:
                            return u[n] && (s[n] = u[n], i[n] = r), p = new l.a(s), e.next = 11, p.validate(i, (function (e, t) {
                                e ? a ? a(e, t) : d(e) : o && o()
                            }));
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 270: function (e, t, n) {
        "use strict";
        n(140);
        var r = n(51), a = (n(141), n(27)), o = n(3), i = n(0), c = n.n(i);
        t.a = function (e) {
            var t = e.label, n = e.value, s = e.unit, l = e.onClick, u = Object(i.useContext)(o.a);
            return c.a.createElement(r.a, {
                gutter: 16,
                style: {padding: "4px 0", fontSize: "0.85rem"}
            }, c.a.createElement(a.a, {span: 12, style: {color: u.textDim}}, t), c.a.createElement(a.a, {
                span: 12,
                style: {textAlign: "right", color: u.textWhite, cursor: l ? "pointer" : "inherit"},
                onClick: function () {
                    l && l()
                }
            }, n, s ? c.a.createElement("span", {
                style: {
                    minWidth: "40px",
                    textAlign: "right",
                    userSelect: "none",
                    paddingLeft: "4px"
                }
            }, s) : c.a.createElement("span", null)))
        }
    }, 308: function (e, t, n) {
        "use strict";
        var r = n(384);
        t.a = r.a
    }, 311: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return u
        })), n.d(t, "a", (function () {
            return p
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26), c = n(71), s = n.n(c), l = n(9);

        function u(e, t, n, r) {
            return d.apply(this, arguments)
        }

        function d() {
            return (d = Object(o.a)(a.a.mark((function e(t, n, r, o) {
                var c, u, d, m, f, h, b, g, y, v, x, E, k, O, w, j, A;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return c = {market: t, level: n, limit: r}, e.next = 3, Object(i.b)({
                                method: "GET",
                                url: "/api/v2/depth",
                                params: c
                            });
                        case 3:
                            for (u = e.sent, d = t.split("-"), m = d[0], f = u.data, h = f.bids.map((function (e) {
                                return p(e)
                            })), b = [], g = s()(0), y = 0; y < h.length; y += 1) v = h[y], g = g.plus(v.size), x = {
                                price: v.price,
                                size: v.size,
                                aggregatedSize: l.a.fromWEI(m, g, o),
                                volume: v.volume,
                                count: v.count,
                                sizeInNumber: l.a.fromWEI(m, v.size, o)
                            }, b.push(x);
                            for (E = f.asks.map((function (e) {
                                return p(e)
                            })), k = [], O = s()(0), w = 0; w < E.length; w += 1) j = E[w], O = O.plus(j.size), A = {
                                price: j.price,
                                size: j.size,
                                aggregatedSize: l.a.fromWEI(m, O, o),
                                volume: j.volume,
                                count: j.count,
                                sizeInNumber: l.a.fromWEI(m, j.size, o)
                            }, k.push(A);
                            return e.abrupt("return", {bids: b, asks: k, version: f.version});
                        case 16:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function p(e) {
            return {price: e[0], size: e[1], volume: e[2], count: Number(e[3])}
        }
    }, 358: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        }));
        var r = "UPDATE_COLUMNS";

        function a() {
            return {type: r, payload: {}}
        }
    }, 359: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        })), n.d(t, "b", (function () {
            return l
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(36), c = n(9), s = "UPDATE_CANDLE";

        function l(e, t) {
            return function (n) {
                Object(o.a)(a.a.mark((function r() {
                    var o, l, u, d, p, m, f, h;
                    return a.a.wrap((function (r) {
                        for (; ;) switch (r.prev = r.next) {
                            case 0:
                                return r.prev = 0, o = [], r.next = 4, Object(i.d)(e, "1min");
                            case 4:
                                for (l = r.sent, u = 0; u < l.length; u += 1) d = l[u], p = e.split("-"), m = p[0], f = p[1], h = {
                                    close: Number(d.close),
                                    high: Number(d.high),
                                    low: Number(d.low),
                                    open: Number(d.open),
                                    date: new Date(d.start),
                                    volume: c.a.fromWEI(f, d.volume, t),
                                    size: c.a.fromWEI(m, d.size, t)
                                }, o.push(h);
                                o && o.length > 1 && (o = o.sort((function (e, t) {
                                    return e.date > t.date ? 1 : -1
                                })), n({type: s, payload: {ohlc: o}})), r.next = 12;
                                break;
                            case 9:
                                r.prev = 9, r.t0 = r.catch(0), console.log(r.t0);
                            case 12:
                            case"end":
                                return r.stop()
                        }
                    }), r, null, [[0, 9]])
                })))()
            }
        }
    }, 36: function (e, t, n) {
        "use strict";
        n.d(t, "h", (function () {
            return u
        })), n.d(t, "c", (function () {
            return d
        })), n.d(t, "o", (function () {
            return m
        })), n.d(t, "g", (function () {
            return h
        })), n.d(t, "m", (function () {
            return g
        })), n.d(t, "j", (function () {
            return v
        })), n.d(t, "d", (function () {
            return E
        })), n.d(t, "k", (function () {
            return w
        })), n.d(t, "b", (function () {
            return A
        })), n.d(t, "e", (function () {
            return C
        })), n.d(t, "n", (function () {
            return S
        })), n.d(t, "l", (function () {
            return I
        })), n.d(t, "i", (function () {
            return M
        })), n.d(t, "a", (function () {
            return D
        })), n.d(t, "f", (function () {
            return N
        }));
        var r = n(4), a = n.n(r), o = n(8), i = n(10), c = n(185), s = n(9), l = n(92);

        function u() {
            return "localhost" === window.location.hostname || window.location.hostname, 3e4
        }

        function d(e, t) {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = Object(i.a)(a.a.mark((function e(t, n) {
                var r, o, i;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = n.Rx + "," + n.Ry + "," + n.s, o = {"X-API-SIG": r}, e.next = 4, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/apiKey",
                                headers: o,
                                params: t
                            });
                        case 4:
                            return i = e.sent, e.abrupt("return", i.data);
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function m(e, t) {
            return f.apply(this, arguments)
        }

        function f() {
            return (f = Object(i.a)(a.a.mark((function e(t, n) {
                var r;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = {"X-API-KEY": n}, e.next = 3, Object(l.a)({
                                method: "POST",
                                url: "/api/v2/order",
                                headers: r,
                                data: t
                            });
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function h(e, t, n) {
            return b.apply(this, arguments)
        }

        function b() {
            return (b = Object(i.a)(a.a.mark((function e(t, n, r) {
                var o, i, c;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return o = {
                                accountId: t,
                                tokenSId: n
                            }, i = {"X-API-KEY": r}, e.next = 4, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/orderId",
                                headers: i,
                                params: o
                            });
                        case 4:
                            return c = e.sent, e.abrupt("return", c.data);
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function g(e) {
            return y.apply(this, arguments)
        }

        function y() {
            return (y = Object(i.a)(a.a.mark((function e(t) {
                var n, r;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = {owner: t}, e.next = 3, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/account",
                                params: n
                            });
                        case 3:
                            return r = e.sent, e.abrupt("return", r.data);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function v() {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = Object(i.a)(a.a.mark((function e() {
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(l.a)({method: "POST", url: "/api/v2/timestamp"});
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function E(e, t) {
            return k.apply(this, arguments)
        }

        function k() {
            return (k = Object(i.a)(a.a.mark((function e(t, n) {
                var r, o, i;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = {market: t, interval: n}, e.next = 3, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/candlestick",
                                params: r
                            });
                        case 3:
                            return o = e.sent, i = o.data, e.abrupt("return", i.map((function (e) {
                                return O(e)
                            })));
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function O(e) {
            return {
                start: Number(e[0]),
                count: Number(e[1]),
                open: e[2],
                close: e[3],
                high: e[4],
                low: e[5],
                size: e[6],
                volume: e[7]
            }
        }

        function w(e, t) {
            return j.apply(this, arguments)
        }

        function j() {
            return (j = Object(i.a)(a.a.mark((function e(t, n) {
                var r, o;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = {market: t, limit: n}, e.next = 3, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/trade",
                                params: r
                            });
                        case 3:
                            return o = e.sent, e.abrupt("return", o.data.trades);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function A(e) {
            return {
                timestamp: Number(e[0]),
                tradeId: Number(e[1]),
                side: e[2],
                size: e[3],
                price: e[4],
                market: e[5],
                fee: e[6]
            }
        }

        function C(e, t, n, r, a, o) {
            return T.apply(this, arguments)
        }

        function T() {
            return (T = Object(i.a)(a.a.mark((function e(t, n, r, o, i, c) {
                var s, u, d, p, m, f, h;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return s = {
                                accountId: t,
                                limit: r,
                                offset: o,
                                allType: !0,
                                start: 0,
                                end: 1e3 * Date.now()
                            }, "undefined" !== typeof n && (s.tokenSymbol = n), u = {"X-API-KEY": i}, e.next = 5, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/user/deposits",
                                headers: u,
                                params: s
                            });
                        case 5:
                            return d = e.sent, p = d.data, m = p.totalNum, f = p.transactions, h = P(f, c), e.abrupt("return", {
                                totalNum: m,
                                transactions: h,
                                limit: r,
                                offset: o
                            });
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function S(e, t, n) {
            var r = s.a.fromWEI(e.symbol, t, n);
            if (0 === parseFloat(r)) {
                var a = s.a.fromWEI(e.symbol, t, n, {precision: e.decimals});
                if (a = Object(c.b)(a), 0 !== parseFloat(a)) return a
            }
            return r
        }

        function P(e, t) {
            console.log(e);
            for (var n = [], r = 0; r < e.length; r += 1) {
                var a = e[r], i = s.a.getTokenBySymbol(a.symbol, t), c = S(i, a.amount, t), l = S(i, a.realAmount, t),
                    u = s.a.fromWEI("ETH", a.feeAmount, t), d = a.txHash.substring(0, 7) + "..." + a.txHash.slice(-7),
                    p = a.distributeHash.substring(0, 7) + "..." + a.distributeHash.slice(-7), m = Object(o.a)({}, a, {
                        tokenName: i.name,
                        amountInUI: c,
                        realAmountInUI: l,
                        feeInUI: u,
                        txHashInUI: d,
                        distributeHashInUI: p
                    });
                n.push(m)
            }
            return n
        }

        function I(e, t, n, r, a, o) {
            return B.apply(this, arguments)
        }

        function B() {
            return (B = Object(i.a)(a.a.mark((function e(t, n, r, o, i, c) {
                var s, u, d, p, m, f, h;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return s = {
                                accountId: t,
                                limit: r,
                                offset: o,
                                start: 0,
                                end: 1e3 * Date.now()
                            }, "undefined" !== typeof n && (s.tokenSymbol = n), u = {"X-API-KEY": i}, e.next = 5, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/user/withdrawals",
                                headers: u,
                                params: s
                            });
                        case 5:
                            return d = e.sent, p = d.data, m = p.totalNum, f = p.transactions, h = P(f, c), e.abrupt("return", {
                                totalNum: m,
                                transactions: h,
                                limit: r,
                                offset: o
                            });
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function M(e, t) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = Object(i.a)(a.a.mark((function e(t, n) {
                var r, o;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = {
                                market: t.reduce((function (e, t) {
                                    return e + "," + t
                                }))
                            }, e.next = 3, Object(l.a)({method: "GET", url: "/api/v2/ticker", params: r});
                        case 3:
                            return o = e.sent, e.abrupt("return", _(o.data.map((function (e) {
                                return D(e)
                            })), n));
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function _(e, t) {
            for (var n = [], r = 0; r < e.length; r += 1) {
                var a = e[r], i = a.market.split("-"), c = i[0], l = i[1], u = parseFloat(a.open),
                    d = parseFloat(a.close), p = ((d - u) / u * 100).toFixed(2);
                p = "NaN" !== p ? p : "0.00", d - u > 0 && (p = "+ ".concat(p));
                var m = Object(o.a)({}, a, {
                    percentChange24h: p,
                    size: s.a.fromWEI(c, a.size, t),
                    volume: s.a.fromWEI(l, a.volume, t, {precision: 2})
                });
                n.push(m)
            }
            return n
        }

        function D(e) {
            return {
                market: e[0],
                timestamp: Number(e[1]),
                size: e[2],
                volume: e[3],
                open: e[4],
                high: e[5],
                low: e[6],
                close: e[7],
                count: Number(e[8]),
                bid: e[9],
                ask: e[10]
            }
        }

        function N() {
            return L.apply(this, arguments)
        }

        function L() {
            return (L = Object(i.a)(a.a.mark((function e() {
                var t, n;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return t = {}, e.next = 3, Object(l.a)({
                                method: "GET",
                                url: "/api/v2/exchange/info",
                                data: t
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 360: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        }));
        var r = "SET_MARKET";

        function a(e) {
            return {type: r, payload: {marketName: e}}
        }
    }, 37: function (e, t, n) {
        "use strict";
        n.d(t, "e", (function () {
            return c
        })), n.d(t, "g", (function () {
            return s
        })), n.d(t, "f", (function () {
            return l
        })), n.d(t, "b", (function () {
            return u
        })), n.d(t, "d", (function () {
            return d
        })), n.d(t, "c", (function () {
            return p
        })), n.d(t, "a", (function () {
            return m
        })), n.d(t, "h", (function () {
            return f
        })), n.d(t, "p", (function () {
            return h
        })), n.d(t, "o", (function () {
            return g
        })), n.d(t, "n", (function () {
            return y
        })), n.d(t, "l", (function () {
            return v
        })), n.d(t, "j", (function () {
            return x
        })), n.d(t, "m", (function () {
            return k
        })), n.d(t, "k", (function () {
            return O
        })), n.d(t, "i", (function () {
            return w
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(107), c = "UPDATE_MY_OPEN_ORDERS", s = "UPDATE_SHOW_ALL_OPEN_ORDERS",
            l = "UPDATE_OPEN_ORDERS_OFFSET", u = "EMPTY_MY_OPEN_ORDERS", d = "UPDATE_MY_HISTORY_ORDERS",
            p = "UPDATE_HISTORY_ORDERS_OFFSET", m = "EMPTY_MY_HISTORY_ORDERS", f = "UPDATE_SOCKET_ORDER";

        function h(e) {
            return {type: f, payload: {order: e}}
        }

        function b(e) {
            return {type: c, payload: {response: e}}
        }

        function g(e) {
            return {type: s, payload: {value: e}}
        }

        function y(e) {
            return {type: l, payload: {offset: e}}
        }

        function v(e, t, n, r, c, s) {
            return function (l) {
                Object(o.a)(a.a.mark((function o() {
                    var u;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(i.c)({
                                    accountId: e,
                                    limit: t,
                                    offset: n,
                                    market: r,
                                    statuses: ["waiting", "processing"],
                                    apiKey: c,
                                    tokens: s
                                });
                            case 3:
                                u = a.sent, l(b(u)), a.next = 9;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0);
                            case 9:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function x() {
            return {type: u, payload: {}}
        }

        function E(e) {
            return {type: d, payload: {response: e}}
        }

        function k(e) {
            return {type: p, payload: {offset: e}}
        }

        function O(e, t, n, r, c, s) {
            return function (l) {
                Object(o.a)(a.a.mark((function o() {
                    var u;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(i.c)({
                                    accountId: e,
                                    limit: t,
                                    offset: n,
                                    market: r,
                                    statuses: ["processed", "failed", "cancelled", "expired"],
                                    apiKey: c,
                                    tokens: s
                                });
                            case 3:
                                u = a.sent, l(E(u)), a.next = 9;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0);
                            case 9:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function w() {
            return {type: m, payload: {}}
        }
    }, 378: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(2), o = n(0), i = n.n(o), c = n(3), s = n(18), l = n(193);

        function u() {
            var e = Object(r.a)(["\n  font-size: 0.85rem;\n  color: ", ";\n  height: 24px;\n  font-weight: 600;\n  padding-top: 12px;\n"]);
            return u = function () {
                return e
            }, e
        }

        var d = c.d.div(u(), (function (e) {
            return e.theme.red
        })), p = function () {
            return i.a.createElement(s.a, {style: {marginRight: "8px"}, size: "1x", icon: l.faExclamationTriangle})
        }, m = function (e) {
            var t = e.selectedToken;
            return i.a.createElement(d, null, i.a.createElement(p, null), "ETH" === t.symbol ? i.a.createElement(a.a, {s: "Insufficient balance"}) : i.a.createElement(a.a, {s: "Not enough Ether to pay deposit fee and transaction gas."}))
        }, f = function () {
            return i.a.createElement(d, null, i.a.createElement(p, null), i.a.createElement(a.a, {s: "Not enough Ether to pay withdrawal fee and transaction gas."}))
        }, h = function () {
            return i.a.createElement(d, null, i.a.createElement(p, null), i.a.createElement(a.a, {s: "Insufficient balance"}))
        }, b = function () {
            return i.a.createElement(d, null, i.a.createElement(p, null), i.a.createElement(a.a, {s: "Your deposit amount must be greater than 0."}))
        }, g = function () {
            return i.a.createElement(d, null, i.a.createElement(p, null), i.a.createElement(a.a, {s: "Your withdrawal amount must be greater than 0."}))
        }, y = function (e) {
            var t = e.errorMessage1, n = e.errorToken, r = e.errorMessage2;
            return i.a.createElement(d, null, i.a.createElement(p, null), i.a.createElement(a.a, {s: t}), n, i.a.createElement(a.a, {s: r}))
        };
        t.a = function (e) {
            var t, n = e.isDeposit, r = e.selectedToken, a = e.amount, o = (e.availableAmount, e.ethEnough),
                c = e.validateAmount, s = e.errorMessage1, l = e.errorToken, u = e.errorMessage2;
            return o ? o && "" === s && !c ? t = parseFloat(a) > 0 ? i.a.createElement(h, null) : n ? i.a.createElement(b, null) : i.a.createElement(g, null) : "" === s || c || (t = i.a.createElement(y, {
                errorMessage1: s,
                errorToken: l,
                errorMessage2: u
            })) : t = n ? i.a.createElement(m, {selectedToken: r}) : i.a.createElement(f, null), i.a.createElement("div", null, t)
        }
    }, 384: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return $
        }));
        var r = {};
        n.r(r), n.d(r, "generateKeyPair", (function () {
            return C
        })), n.d(r, "verifyPassword", (function () {
            return T
        })), n.d(r, "signGetApiKey", (function () {
            return S
        })), n.d(r, "signApplyApiKey", (function () {
            return P
        })), n.d(r, "createAccountAndDeposit", (function () {
            return I
        })), n.d(r, "deposit", (function () {
            return B
        })), n.d(r, "onChainWithdraw", (function () {
            return M
        })), n.d(r, "signWithdrawal", (function () {
            return F
        })), n.d(r, "signOrder", (function () {
            return _
        })), n.d(r, "getRandomInt", (function () {
            return D
        })), n.d(r, "signCancel", (function () {
            return N
        })), n.d(r, "signFlexCancel", (function () {
            return L
        }));
        var a = n(8), o = n(4), i = n.n(o), c = n(10), s = n(11), l = n(12), u = n(232), d = n(20), p = n(167),
            m = n(28), f = n.n(m), h = function () {
                function e(t) {
                    var n = t.inputs, r = t.name, a = t.outputs, o = t.constant;
                    Object(s.a)(this, e), this.name = r, this.inputTypes = n.map((function (e) {
                        return e.type
                    })), this.inputs = n, this.outputTypes = a.map((function (e) {
                        return e.type
                    })), this.outputs = a, this.constant = o, this.methodAbiHash = Object(d.toHex)(Object(p.methodID)(r, this.inputTypes))
                }

                return Object(l.a)(e, [{
                    key: "encodeInputs", value: function (e) {
                        var t = this.parseInputs(e);
                        return this.methodAbiHash + Object(d.clearHexPrefix)(Object(d.toHex)(Object(p.rawEncode)(this.inputTypes, t)))
                    }
                }, {
                    key: "decodeOutputs", value: function (e) {
                        return this.parseOutputs(Object(p.rawDecode)(this.outputTypes, Object(d.toBuffer)(e)))
                    }
                }, {
                    key: "decodeEncodedInputs", value: function (e) {
                        return this.parseOutputs(Object(p.rawDecode)(this.inputTypes, Object(d.toBuffer)(Object(d.addHexPrefix)(e))))
                    }
                }, {
                    key: "parseInputs", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.inputs.map((function (t) {
                            var n = t.name, r = t.type;
                            if (void 0 === e[n]) throw new Error("Parameter ".concat(n, " of type ").concat(r, " is required!"));
                            return e[n]
                        }))
                    }
                }, {
                    key: "parseOutputs", value: function (e) {
                        return e.map((function (e) {
                            return e instanceof f.a ? Object(d.toHex)(e) : e
                        }))
                    }
                }]), e
            }(), b = n(73), g = function () {
                function e(t) {
                    Object(s.a)(this, e);
                    var n = t.filter((function (e) {
                        return "function" === e.type
                    }));
                    this.abiFunctions = n.reduce((function (e, t) {
                        var n, r = t.inputs.map((function (e) {
                            return e.type
                        })), o = "".concat(t.name, "(").concat(r.toString(), ")"), i = Object(p.methodID)(t.name, r);
                        return Object(a.a)({}, e, (n = {}, Object(b.a)(n, t.name, new h(t)), Object(b.a)(n, o, new h(t)), Object(b.a)(n, i, new h(t)), n))
                    }))
                }

                return Object(l.a)(e, [{
                    key: "encodeInputs", value: function (e, t) {
                        var n = this.abiFunctions[e];
                        if (n) return n.encodeInputs(t);
                        throw new Error("No  ".concat(e, " method according to abi "))
                    }
                }, {
                    key: "decodeOutputs", value: function (e, t) {
                        var n = this.abiFunctions[e];
                        if (n) return n.decodeOutputs(t);
                        throw new Error("No  ".concat(e, " method according to abi "))
                    }
                }, {
                    key: "decodeEncodeInputs", value: function (e) {
                        var t = (e = Object(d.toHex)(e)).slice(0, 10), n = this.abiFunctions[t];
                        if (n) return n.decodeEncodedInputs(e.slice(10));
                        throw new Error("No corresponding method according to abi ")
                    }
                }]), e
            }(), y = n(1193), v = n(1194), x = {ERC20Token: new g(y), ExchangeContract: new g(v)},
            E = {AbiFunction: h, Contract: g, Contracts: x}, k = n(171), O = n(9), w = n(260), j = n.n(w), A = n(152);

        function C(e) {
            return k.a.generateKeyPair(e)
        }

        function T(e, t, n) {
            var r = C(n);
            return r.publicKeyX === e && r.publicKeyY === t
        }

        function S(e, t) {
            if (void 0 === e.signature) {
                var n = encodeURIComponent("".concat(O.a.getServer(), "/api/v2/apiKey")),
                    r = encodeURIComponent("accountId=".concat(e.accountId, "&publicKeyX=").concat(t.publicKeyX, "&publicKeyY=").concat(t.publicKeyY)),
                    a = "".concat("GET", "&").concat(n, "&").concat(r), o = d.addHexPrefix(j()(a).toString());
                return e.signature = k.a.sign(t.secretKey, o), e
            }
        }

        function P(e, t) {
            if (void 0 === e.signature) {
                var n = encodeURIComponent("".concat(O.a.getServer(), "/api/v2/apiKey")),
                    r = encodeURIComponent(JSON.stringify({
                        accountId: e.accountId,
                        publicKeyX: t.publicKeyX,
                        publicKeyY: t.publicKeyY
                    })), a = "".concat("POST", "&").concat(n, "&").concat(r), o = d.addHexPrefix(j()(a).toString());
                e.signature = k.a.sign(t.secretKey, o);
                var i = k.a.verify(o, e.signature, [t.publicKeyX, t.publicKeyY]);
                return A(i, "Failed to verify signature"), e
            }
        }

        function I(e) {
            var t = e.from, n = e.exchangeAddress, r = e.fee, a = e.chainId, o = e.publicX, i = e.publicY, c = e.token,
                s = e.amount, l = e.permission, u = e.nonce, p = e.gasPrice;
            try {
                var m, f;
                "ETH" === c.symbol.toUpperCase() ? (m = "0x0", f = "0") : (m = c.address, f = d.toHex(d.toBig(s).times("1e" + c.decimals)));
                var h = E.Contracts.ExchangeContract.encodeInputs("updateAccountAndDeposit", {
                    pubKeyX: d.toHex(d.toBN(o)),
                    pubKeyY: d.toHex(d.toBN(i)),
                    tokenAddress: m,
                    amount: f,
                    permission: d.toBuffer(l)
                });
                return {
                    from: t,
                    to: n,
                    value: d.toHex(d.toBig(r)),
                    data: h,
                    chainId: a,
                    nonce: d.toHex(u),
                    gasPrice: d.toHex(d.fromGWEI(p)),
                    gas: d.toHex(O.a.getGasLimitByType("create").gas)
                }
            } catch (b) {
                throw console.error("Failed in method createOrUpdateAccount. Error: ", b), b
            }
        }

        function B(e) {
            var t, n, r = e.from, a = e.exchangeAddress, o = e.chainId, i = e.token, c = e.fee, s = e.amount,
                l = e.nonce, u = e.gasPrice;
            try {
                return t = d.toBig(s).times("1e" + i.decimals), "ETH" === i.symbol.toUpperCase() ? (n = E.Contracts.ExchangeContract.encodeInputs("deposit", {
                    tokenAddress: "0x0",
                    amount: d.toHex(t)
                }), t = t.plus(c)) : (n = E.Contracts.ExchangeContract.encodeInputs("deposit", {
                    tokenAddress: i.address,
                    amount: d.toHex(t)
                }), t = d.toBig(c)), {
                    from: r,
                    to: a,
                    value: d.toHex(t),
                    data: n,
                    chainId: o,
                    nonce: d.toHex(l),
                    gasPrice: d.toHex(d.fromGWEI(u)),
                    gas: d.toHex(O.a.getGasLimitByType("depositTo").gas)
                }
            } catch (p) {
                throw console.error("Failed in method deposit. Error: ", p), p
            }
        }

        function M(e) {
            var t, n, r, a = e.from, o = e.exchangeAddress, i = e.chainId, c = e.token, s = e.amount, l = e.nonce,
                u = e.gasPrice, p = e.fee;
            try {
                return n = d.toBig(s).times("1e" + c.decimals), t = "ETH" === c.symbol.toUpperCase() ? "0x0" : c.address, r = E.Contracts.ExchangeContract.encodeInputs("withdraw", {
                    tokenAddress: t,
                    amount: d.toHex(n)
                }), n = p, {
                    from: a,
                    to: o,
                    value: d.toHex(d.toBig(n)),
                    data: r,
                    chainId: i,
                    nonce: d.toHex(l),
                    gasPrice: d.toHex(d.fromGWEI(u)),
                    gas: d.toHex(O.a.getGasLimitByType("withdraw").gas)
                }
            } catch (m) {
                throw console.error("Failed in method withdraw. Error: ", m), m
            }
        }

        function F(e, t, n, r) {
            if (void 0 === e.signature) {
                var a = function (e, t) {
                        var n, r;
                        return n = e.token.startsWith("0x") ? O.a.getTokenByAddress(e.token, t) : O.a.getTokenBySymbol(e.token, t), r = e.tokenF.startsWith("0x") ? O.a.getTokenByAddress(e.tokenF, t) : O.a.getTokenBySymbol(e.tokenF, t), e.tokenId = n.id, e.token = n.address, e.amountInBN = O.a.toWEI(n.symbol, e.amount, t), e.amount = e.amountInBN.toString(10), e.tokenFId = r.id, e.tokenF = r.address, e.amountFInBN = O.a.toWEI(r.symbol, e.amountF, t), e.amountF = e.amountFInBN.toString(10), e.label = void 0 !== e.label ? e.label : O.a.getLabel(), e
                    }(e, r),
                    o = u.a(9, 6, 53)([n, a.accountId, a.tokenId, a.amountInBN, a.tokenFId, a.amountFInBN, a.label, a.nonce]).toString(10);
                return a.hash = o, a.signature = k.a.sign(t.secretKey, o), a
            }
        }

        function _(e, t, n) {
            if (void 0 === e.signature) {
                var r = function (e, t) {
                        var n, r;
                        r = e.tokenS.startsWith("0x") ? O.a.getTokenByAddress(e.tokenS, t) : O.a.getTokenBySymbol(e.tokenS, t);
                        n = e.tokenB.startsWith("0x") ? O.a.getTokenByAddress(e.tokenB, t) : O.a.getTokenBySymbol(e.tokenB, t);
                        return e.tokenS = r.address, e.tokenB = n.address, e.tokenSId = r.tokenId, e.tokenBId = n.tokenId, e.amountSInBN = O.a.toWEI(r.symbol, e.amountS, t), e.amountS = e.amountSInBN.toString(10), e.amountBInBN = O.a.toWEI(n.symbol, e.amountB, t), e.amountB = e.amountBInBN.toString(10), e.buy = void 0 !== e.buy && !!e.buy, e.maxFeeBips = void 0 !== e.maxFeeBips ? e.maxFeeBips : O.a.getMaxFeeBips(), e.allOrNone = void 0 !== e.allOrNone && !!e.allOrNone, e.feeBips = void 0 !== e.feeBips ? e.feeBips : e.maxFeeBips, e.rebateBips = void 0 !== e.rebateBips ? e.rebateBips : 0, e.label = void 0 !== e.label ? e.label : O.a.getLabel(), A(e.maxFeeBips < 64, "maxFeeBips >= 64"), A(e.feeBips < 64, "feeBips >= 64"), A(e.rebateBips < 64, "rebateBips >= 64"), A(e.label < Math.pow(2, 16), "order.label >= 2**16"), e
                    }(e, n), a = u.a(14, 6, 53),
                    o = [r.exchangeId, r.orderId, r.accountId, r.tokenSId, r.tokenBId, r.amountSInBN, r.amountBInBN, r.allOrNone ? 1 : 0, r.validSince, r.validUntil, r.maxFeeBips, r.buy ? 1 : 0, r.label];
                r.hash = a(o).toString(10);
                var i = k.a.sign(t.secretKey, r.hash);
                return r.signature = i, r.signatureRx = i.Rx, r.signatureRy = i.Ry, r.signatureS = i.s, r
            }
        }

        function D(e) {
            return Math.floor(Math.random() * e)
        }

        function N(e, t) {
            if (void 0 === e.signature) {
                var n = function (e, t) {
                        var n, r;
                        n = e.orderToken.startsWith("0x") ? O.a.getTokenByAddress(e.orderToken, t) : O.a.getTokenBySymbol(e.orderToken, t);
                        r = e.tokenF.startsWith("0x") ? O.a.getTokenByAddress(e.tokenF, t) : O.a.getTokenBySymbol(e.tokenF, t);
                        return e.tokenFId = r.tokenId, e.tokenF = r.symbol, e.orderTokenId = n.tokenId, e.orderToken = n.symbol, e.amountFInBN = O.a.toWEI(r.symbol, e.amountF, t), e.amountF = e.amountFInBN.toString(10), e.label = void 0 !== e.label ? e.label : O.a.getLabel(), e
                    }(e),
                    r = u.a(9, 6, 53)([n.exchangeId, n.accountId, n.orderTokenId, n.orderId, n.tokenFId, n.amountFInBN, n.label, n.nonce]).toString(10);
                return n.signature = k.a.sign(t.secretKey, r), n
            }
        }

        function L(e, t) {
            if (void 0 === e.signature) {
                var n = encodeURIComponent("".concat(O.a.getServer(), "/api/v2/orders")),
                    r = "accountId=".concat(e.accountId);
                e.clientOrderId && (r += "&clientOrderId=".concat(e.clientOrderId)), e.orderHash && (r += "&orderHash=".concat(e.orderHash));
                var a = encodeURIComponent(r), o = "".concat("DELETE", "&").concat(n, "&").concat(a),
                    i = d.addHexPrefix(j()(o).toString());
                return e.signature = k.a.sign(t.secretKey, i), e
            }
        }

        var W = n(223), z = (n(133), n(26)), H = n(684), R = n.n(H);

        function U(e, t, n) {
            return V.apply(this, arguments)
        }

        function V() {
            return (V = Object(c.a)(i.a.mark((function e(t, n, r) {
                return i.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(z.d)({value: n, type: "ETH_ADDRESS"});
                        case 2:
                            return e.abrupt("return", new Promise((function (e) {
                                t.eth.sign(n, r, (function (t, n) {
                                    if (t) {
                                        var r = t.message.substring(0, t.message.indexOf(" at "));
                                        e({error: {message: r}})
                                    } else {
                                        var a = n.slice(0, 66), o = Object(d.addHexPrefix)(n.slice(66, 130)),
                                            i = Object(d.toNumber)(Object(d.addHexPrefix)(n.slice(130, 132)));
                                        e({result: {r: a, s: o, v: i}})
                                    }
                                }))
                            })));
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function K(e, t, n) {
            return Y.apply(this, arguments)
        }

        function Y() {
            return (Y = Object(c.a)(i.a.mark((function e(t, n, r) {
                var a, o, c, s;
                return i.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(z.d)({value: r, type: "TX"});
                        case 2:
                            return a = new R.a(r), o = Object(d.toHex)(a.hash(!1)), e.next = 6, U(t, n, o);
                        case 6:
                            if ((c = e.sent).error) {
                                e.next = 14;
                                break
                            }
                            return (s = c.result).v += 2 * a.getChainId() + 8, Object.assign(a, s), e.abrupt("return", {result: Object(d.toHex)(a.serialize())});
                        case 14:
                            throw new Error(c.error.message);
                        case 15:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function q(e, t) {
            return G.apply(this, arguments)
        }

        function G() {
            return (G = Object(c.a)(i.a.mark((function e(t, n) {
                var r;
                return i.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(z.d)({type: "TX", value: n});
                        case 2:
                            return delete n.gasPrice, e.next = 5, new Promise((function (e) {
                                t.eth.sendTransaction(n, (function (t, n) {
                                    e(t ? {error: {message: t.message}} : {result: n})
                                }))
                            }));
                        case 5:
                            if (!(r = e.sent).result) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return", r);
                        case 10:
                            throw new Error(r.error.message);
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var X = n(152), $ = function () {
            function e(t, n, r) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                Object(s.a)(this, e), this.walletType = t, this.web3 = n, this.address = r, this.accountId = a, this.keyPair = o
            }

            return Object(l.a)(e, [{
                key: "approveZero", value: function () {
                    var e = Object(c.a)(i.a.mark((function e(t, n, r, a, o) {
                        var c, s, l, u = arguments;
                        return i.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = u.length > 5 && void 0 !== u[5] && u[5], s = {
                                        from: this.address,
                                        to: t,
                                        value: "0x0",
                                        data: x.ERC20Token.encodeInputs("approve", {_spender: n, _value: "0x0"}),
                                        chainId: r,
                                        nonce: d.toHex(a),
                                        gasPrice: d.toHex(d.fromGWEI(o)),
                                        gas: d.toHex(O.a.getGasLimitByType("approve").gas)
                                    }, !c) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5, q(this.web3, s);
                                case 5:
                                    e.t0 = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10, K(this.web3, this.address, s);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    return l = e.t0, e.abrupt("return", l.result);
                                case 13:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, n, r, a, o) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "approveMax", value: function () {
                    var e = Object(c.a)(i.a.mark((function e(t, n, r, a, o) {
                        var c, s, l, u = arguments;
                        return i.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = u.length > 5 && void 0 !== u[5] && u[5], s = {
                                        from: this.address,
                                        to: t,
                                        value: "0x0",
                                        data: x.ERC20Token.encodeInputs("approve", {
                                            _spender: n,
                                            _value: O.a.getMaxAmountInWEI()
                                        }),
                                        chainId: r,
                                        nonce: d.toHex(a),
                                        gasPrice: d.toHex(d.fromGWEI(o)),
                                        gas: d.toHex(O.a.getGasLimitByType("approve").gas)
                                    }, !c) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5, q(this.web3, s);
                                case 5:
                                    e.t0 = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10, K(this.web3, this.address, s);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    return l = e.t0, e.abrupt("return", l.result);
                                case 13:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, n, r, a, o) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "generateKeyPair", value: function (e) {
                    return X(null !== this.address), C(Object(W.keccakHash)("LOOPRING" + this.address.toLowerCase() + Object(W.keccakHash)(e)))
                }
            }, {
                key: "verifyPassword", value: function (e) {
                    return X(null !== this.address), T(this.keyPair.publicKeyX, this.keyPair.publicKeyY, Object(W.keccakHash)("LOOPRING" + this.address.toLowerCase() + Object(W.keccakHash)(e)))
                }
            }, {
                key: "createOrUpdateAccount", value: function () {
                    var e = Object(c.a)(i.a.mark((function e(t, n) {
                        var r, o, c, s, l = arguments;
                        return i.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = l.length > 2 && void 0 !== l[2] && l[2], n.from = this.address, o = this.generateKeyPair(t), c = I(Object(a.a)({}, n, {
                                        publicX: o.publicKeyX,
                                        publicY: o.publicKeyY
                                    })), !r) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, q(this.web3, c);
                                case 7:
                                    e.t0 = e.sent, e.next = 13;
                                    break;
                                case 10:
                                    return e.next = 12, K(this.web3, this.address, c);
                                case 12:
                                    e.t0 = e.sent;
                                case 13:
                                    return s = e.t0, e.abrupt("return", {data: s.result, keyPair: o});
                                case 15:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "depositTo", value: function () {
                    var e = Object(c.a)(i.a.mark((function e(t) {
                        var n, a, o, c = arguments;
                        return i.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = c.length > 1 && void 0 !== c[1] && c[1], console.log("depositTo", t), t.from = this.address, console.log("exchange", r), a = B(t), console.log("tx", a), console.log("this.web3", this.web3), !n) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 10, q(this.web3, a);
                                case 10:
                                    e.t0 = e.sent, e.next = 16;
                                    break;
                                case 13:
                                    return e.next = 15, K(this.web3, this.address, a);
                                case 15:
                                    e.t0 = e.sent;
                                case 16:
                                    return o = e.t0, console.log("response", o), e.abrupt("return", o.result);
                                case 19:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onchainWithdrawal", value: function () {
                    var e = Object(c.a)(i.a.mark((function e(t, n) {
                        var r, a;
                        return i.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.from = this.address, r = M(t), !n) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5, q(this.web3, r);
                                case 5:
                                    e.t0 = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10, K(this.web3, this.address, r);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    return a = e.t0, console.log("response", a), e.abrupt("return", a.result);
                                case 14:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "offchainWithdrawal", value: function (e, t, n, r, a, o, i) {
                    return F({
                        accountId: this.accountId,
                        nonce: t,
                        token: n,
                        amount: r,
                        tokenF: a,
                        amountF: o,
                        label: i
                    }, this.keyPair)
                }
            }, {
                key: "submitOrder", value: function (e, t, n, r, a, o, i, c, s, l, u, d) {
                    return _({
                        exchangeId: t,
                        owner: this.address,
                        accountId: this.accountId,
                        tokenS: n,
                        tokenB: r,
                        amountS: a,
                        amountB: o,
                        orderId: i,
                        validSince: Math.floor(c),
                        validUntil: Math.floor(s),
                        label: l,
                        buy: u,
                        channelId: d
                    }, this.keyPair, e)
                }
            }, {
                key: "submitCancel", value: function (e, t, n, r, a, o) {
                    return N({
                        accountId: this.accountId,
                        nonce: e,
                        orderToken: t,
                        orderId: n,
                        tokenF: r,
                        amountF: a,
                        label: o
                    }, this.keyPair)
                }
            }, {
                key: "getApiKey", value: function () {
                    return S({accountId: this.accountId}, this.keyPair)
                }
            }, {
                key: "applyApiKey", value: function () {
                    return P({accountId: this.accountId}, this.keyPair)
                }
            }, {
                key: "submitFlexCancel", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = {accountId: this.accountId, orderHash: e, clientOrderId: t};
                    return L(n, this.keyPair)
                }
            }]), e
        }()
    }, 387: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26), c = n(9);

        function s(e, t, n) {
            return l.apply(this, arguments)
        }

        function l() {
            return (l = Object(o.a)(a.a.mark((function e(t, n, r) {
                var o, s, l, u;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return o = c.a.getTokenBySymbol(n, r), s = o.address, l = {
                                owner: t,
                                token: s
                            }, e.next = 5, Object(i.b)({method: "GET", url: "/api/v2/tokenBalances", params: l});
                        case 5:
                            return u = e.sent, e.abrupt("return", u.data);
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 388: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26);

        function c(e) {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function e(t) {
                var n, r;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = {owner: t}, e.next = 3, Object(i.b)({
                                method: "GET",
                                url: "/api/v2/ethBalances",
                                params: n
                            });
                        case 3:
                            return r = e.sent, e.abrupt("return", r.data);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 389: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return d
        })), n.d(t, "b", (function () {
            return m
        }));
        var r = n(4), a = n.n(r), o = n(8), i = n(10), c = n(36), s = n(26), l = n(9), u = n(71);

        function d(e, t, n, r, a) {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = Object(i.a)(a.a.mark((function e(t, n, r, o, i) {
                var c, l, u, d;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return c = {
                                accountId: t,
                                skip: o,
                                limit: i
                            }, l = {"X-API-KEY": n}, e.next = 4, Object(s.b)({
                                method: "GET",
                                url: "/api/v2/user/balances",
                                headers: l,
                                params: c
                            });
                        case 4:
                            return u = e.sent, d = u.data, e.abrupt("return", m(d, r));
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function m(e, t) {
            for (var n = [], r = 0; r < e.length; r += 1) {
                var a = e[r], i = Object(o.a)({}, a), s = i.tokenId, d = l.a.getTokenByTokenId(s, t);
                i.token = d;
                var p = a.totalAmount, m = l.a.fromWEI(d.symbol, p, t);
                i.totalAmountInString = m;
                var f = a.frozenAmount, h = l.a.fromWEI(d.symbol, f, t);
                if (i.frozenAmountInString = h, "0" !== p) {
                    var b = 1 - u(f).dividedBy(u(p)).toNumber();
                    b = Math.floor(100 * b);
                    var g = u(p).minus(f), y = Object(c.n)(d, g, t), v = l.a.fromWEI(d.symbol, g, t);
                    i.percentage = b, i.available = y, i.availableInAssetPanel = v
                } else i.percentage = 0, i.available = Number(0).toFixed(d.precision), i.availableInAssetPanel = Number(0).toFixed(d.precision);
                n.push(i)
            }
            return n
        }
    }, 39: function (e, t, n) {
        "use strict";
        n.d(t, "h", (function () {
            return s
        })), n.d(t, "g", (function () {
            return l
        })), n.d(t, "i", (function () {
            return u
        })), n.d(t, "e", (function () {
            return d
        })), n.d(t, "a", (function () {
            return p
        })), n.d(t, "f", (function () {
            return m
        })), n.d(t, "b", (function () {
            return f
        })), n.d(t, "k", (function () {
            return h
        })), n.d(t, "c", (function () {
            return b
        })), n.d(t, "j", (function () {
            return g
        })), n.d(t, "d", (function () {
            return y
        })), n.d(t, "l", (function () {
            return v
        })), n.d(t, "s", (function () {
            return x
        })), n.d(t, "p", (function () {
            return E
        })), n.d(t, "o", (function () {
            return k
        })), n.d(t, "m", (function () {
            return O
        })), n.d(t, "q", (function () {
            return w
        })), n.d(t, "n", (function () {
            return j
        })), n.d(t, "t", (function () {
            return A
        })), n.d(t, "r", (function () {
            return C
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(389), c = (n(388), n(387), n(36)), s = "UPDATE_MY_BALANCES",
            l = "UPDATE_ETH_BALANCE", u = "UPDATE_TOKEN_BALANCE", d = "UPDATE_BALANCE", p = "EMPTY_BALANCES",
            m = "UPDATE_DEPOSITS", f = "EMPTY_DEPOSITS", h = "UPDATE_WITHDRAWALS", b = "EMPTY_WITHDRAWALS",
            g = "UPDATE_TOKEN_FILTER", y = "HIDE_LOW_BALANCE_ASSETS";

        function v() {
            return {type: p, payload: {}}
        }

        function x(e) {
            return {type: s, payload: {balances: e}}
        }

        function E(e, t, n, r, c) {
            return function (s) {
                Object(o.a)(a.a.mark((function o() {
                    var l;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(i.a)(e, t, n, r, c);
                            case 3:
                                l = a.sent, s(x(l)), a.next = 9;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0);
                            case 9:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function k(e, t, n, r, i, s) {
            return function (l) {
                Object(o.a)(a.a.mark((function o() {
                    var u;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(c.e)(n, r, e, t, i, s);
                            case 3:
                                u = a.sent, l({type: m, payload: u}), a.next = 9;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0);
                            case 9:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function O() {
            return {type: f, payload: {}}
        }

        function w(e, t, n, r, i, s) {
            return function (l) {
                Object(o.a)(a.a.mark((function o() {
                    var u;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(c.l)(n, r, e, t, i, s);
                            case 3:
                                u = a.sent, l({type: h, payload: u}), a.next = 9;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0);
                            case 9:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function j() {
            return {type: b, payload: {}}
        }

        function A(e) {
            return {type: g, payload: {tokenFilter: e}}
        }

        function C(e) {
            return {type: y, payload: {hideLowBalanceAssets: e}}
        }
    }, 391: function (e, t, n) {
        "use strict";
        n(142);
        var r = n(68), a = (n(288), n(131)), o = n(11), i = n(12), c = n(13), s = n(14), l = n(7), u = n(18), d = n(25),
            p = n(75), m = n(22), f = n(19), h = n(91), b = n(2), g = n(121), y = n(6), v = n(231), x = n(0),
            E = n.n(x), k = n(3);

        function O() {
            var e = Object(y.a)(["\n  display: inline-block;\n  width: 16px !important;\n"]);
            return O = function () {
                return e
            }, e
        }

        var w = Object(k.d)(u.a)(O()), j = function (e) {
            var t = e.ruleText, n = e.password, r = e.validator, a = e.aggregator, o = Object(x.useContext)(k.a),
                i = r(n);
            a(i);
            return E.a.createElement("p", {style: {fontSize: "0.9rem", margin: "4px 0"}}, function (e, t) {
                return "" === e ? E.a.createElement(w, {
                    icon: v.faCheck,
                    style: {color: "inherit"}
                }) : t ? E.a.createElement(w, {
                    icon: v.faCheck,
                    style: {color: o.green}
                }) : E.a.createElement(w, {icon: p.faTimes, style: {color: o.red}})
            }(n, i), E.a.createElement("span", null, " ", t, " "))
        }, A = n(90), C = function (e) {
            Object(s.a)(n, e);
            var t = Object(c.a)(n);

            function n() {
                var e;
                Object(o.a)(this, n);
                for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(a))).title = "OVERRIDE", e.buttonLabel = "OVERRIDE", e.instructions = "", e.onClose = function () {
                    e.props.closeModal()
                }, e.onProceed = function () {
                    alert("override me")
                }, e.state = {
                    loading: !1,
                    isPasswordValid: !0,
                    password: "",
                    repeatedPassword: "",
                    passwordMismatch: !1
                }, e.passwordValidationAggregator = function (t) {
                    e.state.isPasswordValid && !t && e.setState({isPasswordValid: !1})
                }, e.getIfPasswordsMismatch = function (e, t) {
                    return (e || "") !== (t || "")
                }, e.onPasswordChange = function (t) {
                    var n = t.target.value,
                        r = !!e.state.repeatedPassword && e.getIfPasswordsMismatch(n, e.state.repeatedPassword);
                    e.setState({isPasswordValid: !0, password: n, passwordMismatch: r})
                }, e.onRepeatedPasswordChange = function (t) {
                    var n = t.target.value, r = e.getIfPasswordsMismatch(e.state.password, n);
                    e.setState({repeatedPassword: n, passwordMismatch: r})
                }, e.onPasswordEnter = function (t) {
                    13 === t.keyCode && (t.preventDefault(), e.state.password.length > 0 && e.state.password === e.state.repeatedPassword && e.state.isPasswordValid && e.onProceed())
                }, e
            }

            return Object(i.a)(n, [{
                key: "reset", value: function () {
                    this.setState({
                        loading: !1,
                        isPasswordValid: !0,
                        password: "",
                        repeatedPassword: "",
                        passwordMismatch: !1
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props.theme;
                    return E.a.createElement(d.c, {
                        style: {top: 40},
                        width: f.a.modalWidth,
                        title: E.a.createElement(d.f, null, this.title),
                        footer: null,
                        maskClosable: !1,
                        closeIcon: E.a.createElement(u.a, {icon: p.faTimes}),
                        visible: this.props.isVisible,
                        onCancel: function () {
                            return e.onClose()
                        }
                    }, E.a.createElement(r.a, {
                        indicator: E.a.createElement(g.a, {
                            title: "MetaMask" === Object(m.i)() ? "metamaskConfirm" : "walletConnectConfirm",
                            tips: [E.a.createElement("div", {key: "1"}, E.a.createElement(b.a, {s: "MetaMask" === Object(m.i)() ? "metaMaskPendingTxTip" : "walletConnectPendingTxTip"}))],
                            imageUrl: "MetaMask" === Object(m.i)() ? "/assets/images/".concat(t.imgDir, "/metamask_pending.png") : "/assets/images/WalletConnect.svg",
                            marginTop: "80px"
                        }), spinning: this.state.loading
                    }, E.a.createElement(d.d, null, this.instructions), E.a.createElement(d.d, null, E.a.createElement(h.a, {label: E.a.createElement("div", null, E.a.createElement(b.a, {s: "Password"}), E.a.createElement(A.a, {text: "whyDexPassword"}))}, E.a.createElement(a.a.Password, {
                        autoFocus: !0,
                        autoCapitalize: "off",
                        autoComplete: "off",
                        value: this.state.password,
                        onChange: this.onPasswordChange,
                        onBlur: this.onBlur,
                        placeholder: "",
                        maxLength: 128,
                        style: {color: t.textWhite}
                    })), E.a.createElement(h.a, {label: E.a.createElement(b.a, {s: "Confirm Password"})}, E.a.createElement(a.a.Password, {
                        autoCapitalize: "off",
                        autoComplete: "off",
                        value: this.state.repeatedPassword,
                        onChange: this.onRepeatedPasswordChange,
                        onBlur: this.onBlur,
                        placeholder: "",
                        maxLength: 128,
                        style: {color: t.textWhite},
                        onKeyDown: this.onPasswordEnter.bind(this)
                    }), E.a.createElement("div", {
                        style: {
                            marginTop: "6px",
                            height: "20px"
                        }
                    }, E.a.createElement(d.e, null, this.state.passwordMismatch ? E.a.createElement(b.a, {s: "PasswordMismatch"}) : ""))), E.a.createElement(h.a, null, E.a.createElement("div", null, E.a.createElement("p", null, E.a.createElement(b.a, {s: "PasswordRequirements"}), E.a.createElement(A.a, {text: "PasswordRequirementsTip"})), E.a.createElement(j, {
                        ruleText: E.a.createElement(b.a, {s: "PasswordRequirements_1"}),
                        password: this.state.password,
                        validator: function (e) {
                            return !!e.match(/[a-z]/g)
                        },
                        aggregator: this.passwordValidationAggregator
                    }), E.a.createElement(j, {
                        ruleText: E.a.createElement(b.a, {s: "PasswordRequirements_2"}),
                        password: this.state.password,
                        validator: function (e) {
                            return !!e.match(/[A-Z]/g)
                        },
                        aggregator: this.passwordValidationAggregator
                    }), E.a.createElement(j, {
                        ruleText: E.a.createElement(b.a, {s: "PasswordRequirements_3"}),
                        password: this.state.password,
                        validator: function (e) {
                            return !!e.match(/[0-9]/g)
                        },
                        aggregator: this.passwordValidationAggregator
                    }), E.a.createElement(j, {
                        ruleText: E.a.createElement(b.a, {s: "PasswordRequirements_4"}),
                        password: this.state.password,
                        ruleOK: this.state.hasSpecialLetter,
                        validator: function (e) {
                            return !!e.match(/[\\/~`!@#$%^&*(){}[\]"':;?+=\-|_/>.<,"]/g)
                        },
                        aggregator: this.passwordValidationAggregator
                    }), E.a.createElement(j, {
                        ruleText: E.a.createElement(b.a, {s: "PasswordRequirements_5"}),
                        password: this.state.password,
                        validator: function (e) {
                            return e.length >= 12 && e.length <= 128
                        },
                        aggregator: this.passwordValidationAggregator
                    })))), this.props.showLoginModal && "LOGGED_IN" !== this.props.dexAccount.account.state ? E.a.createElement(d.d, null, E.a.createElement(h.a, null, E.a.createElement("div", {style: {height: "20px"}}, E.a.createElement("a", {
                        href: !0,
                        onClick: function () {
                            e.props.closeModal(), e.props.showLoginModal()
                        },
                        style: {float: "right"}
                    }, E.a.createElement(b.a, {s: "Try to login again?"}))))) : E.a.createElement("span", null), E.a.createElement(d.d, null, E.a.createElement(l.a, {
                        disabled: 0 === this.state.password.length || this.state.password !== this.state.repeatedPassword || !this.state.isPasswordValid,
                        onClick: function () {
                            return e.onProceed()
                        }
                    }, this.buttonLabel))))
                }
            }]), n
        }(E.a.Component);
        t.a = C
    }, 392: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26);

        function c() {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function e() {
                var t, n;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return t = {}, e.next = 3, Object(i.b)({
                                method: "GET",
                                url: "/api/v2/exchange/tokens",
                                data: t
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.map((function (e) {
                                return e.address = i.a.formatAddress(e.address), e
                            })));
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 394: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26);

        function c() {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function e() {
                var t;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(i.b)({method: "GET", url: "/api/v2/exchange/markets"});
                        case 2:
                            return t = e.sent, e.abrupt("return", t.data);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 43: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return nt
        })), n.d(t, "a", (function () {
            return rt
        }));
        var r = n(96), a = n(148), o = n(509), i = n(55), c = n(300), s = n(8), l = n(163), u = n(22),
            d = "CNY" === Object(u.b)() ? {legal: "CNY", legalPrefix: "\xa5", prices: []} : {
                legal: "USD",
                legalPrefix: "$",
                prices: []
            }, p = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case l.a:
                        var n = t.payload.legal, r = m(n);
                        return Object(s.a)({}, e, {legal: n, legalPrefix: r});
                    case l.b:
                        var a = t.payload.prices;
                        return Object(s.a)({}, e, {prices: a});
                    default:
                        return e
                }
            };

        function m(e) {
            return "CNY" === e ? "\xa5" : "$"
        }

        var f = n(17), h = {account: {state: f.i}}, b = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
            switch (t.type) {
                case f.h:
                    return Object(s.a)({}, e, {password: n.password});
                case f.j:
                    var r = Object(s.a)({}, e.account, {}, n.account);
                    return window.wallet && window.wallet.walletType && (r.walletType = window.wallet.walletType), Object(u.n)(r), Object(s.a)({}, e, {account: r});
                case f.a:
                    var a = Object(u.a)(n.address);
                    return a = a || {address: n.address}, !1 !== Object(f.l)().includes(a.state) && a.state !== f.k || (a.state = f.d), Object(u.r)(), Object(s.a)({}, e, {account: a});
                case f.c:
                    return Object(u.j)(e.account.address), {account: Object(s.a)({}, e.account, {state: f.e})};
                default:
                    return e
            }
        }, g = n(165), y = {
            isInitialized: !1,
            chainId: 0,
            exchangeId: 0,
            exchangeAddress: "",
            onchainFees: [],
            markets: [{
                market: "LRC-USDT",
                baseTokenId: 2,
                quoteTokenId: 3,
                precisionForPrice: 4,
                orderbookAggLevels: 5,
                enabled: !0
            }],
            tokens: [{
                type: "ETH",
                tokenId: 0,
                symbol: "ETH",
                name: "Ethereum",
                address: "0x0000000000000000000000000000000000000000",
                unit: "",
                decimals: 18,
                precision: 4,
                minOrderAmount: "50000000000000000",
                maxOrderAmount: "50000000000000000000",
                dustOrderAmount: "500000000000000"
            }, {
                type: "ERC20",
                tokenId: 2,
                symbol: "LRC",
                name: "Loopring",
                address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
                unit: "",
                decimals: 18,
                precision: 2,
                minOrderAmount: "100000000000000000000",
                maxOrderAmount: "500000000000000000000000",
                dustOrderAmount: "5000000000000000000"
            }, {
                type: "ERC20",
                tokenId: 3,
                symbol: "USDT",
                name: "Tether USD",
                address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                unit: "",
                decimals: 6,
                precision: 2,
                minOrderAmount: "5000000",
                maxOrderAmount: "5000000000",
                dustOrderAmount: "250000"
            }]
        }, v = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case g.a:
                    return Object(s.a)({}, t.payload, {isInitialized: !0});
                case g.b:
                case g.d:
                case g.c:
                    return Object(s.a)({}, e, {}, t.payload);
                default:
                    return e
            }
        }, x = n(88), E = {gasPrice: []}, k = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case x.a:
                    var n = t.payload.gasPrice;
                    return Object(s.a)({}, e, {gasPrice: n});
                default:
                    return e
            }
        }, O = n(358), w = {numColumns: 4}, j = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case O.a:
                    var n = A();
                    return Object(s.a)({}, e, {numColumns: n});
                default:
                    return e
            }
        };

        function A() {
            var e = window.innerWidth;
            return e >= 1600 ? 4 : e >= 992 && e < 1600 ? 3 : e >= 576 && e < 992 ? 2 : 1
        }

        var C = n(108), T = {startConnecting: !1, referenceCount: 0, isDesiredNetwork: !0, installed: !1},
            S = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case C.b:
                        console.log("CONNECT_TO_META_MASK", t.payload.startConnecting);
                        var n = t.payload.startConnecting, r = e.referenceCount;
                        return !0 === n && (r = e.referenceCount + 1), console.log(r), Object(s.a)({}, e, {
                            startConnecting: n,
                            referenceCount: r
                        });
                    case C.a:
                        return Object(s.a)({}, e, {startConnecting: !1});
                    case C.c:
                        var a = t.payload.installed;
                        return Object(s.a)({}, e, {installed: a});
                    default:
                        return e
                }
            }, P = n(23), I = {
                isRegisterAccountModalVisible: !1,
                isResetPasswordModalVisible: !1,
                isLoginModalVisible: !1,
                isDepositModalVisible: !1,
                depositToken: "ETH",
                isWithdrawModalVisible: !1,
                withdrawalToken: "ETH",
                isLogoutModalVisible: !1,
                isExportAccountModalVisible: !1,
                isEnterPasswordModalVisible: !1,
                isSideBarVisible: !1,
                isConnectToWalletModalVisiable: !1
            }, B = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case P.g:
                        return Object(s.a)({}, e, {isRegisterAccountModalVisible: t.payload.show});
                    case P.e:
                        return Object(s.a)({}, e, {isLoginModalVisible: t.payload.show});
                    case P.h:
                        return Object(s.a)({}, e, {isResetPasswordModalVisible: t.payload.show});
                    case P.b:
                        return t.payload.show ? Object(s.a)({}, e, {
                            isDepositModalVisible: t.payload.show,
                            depositToken: t.payload.token || "ETH"
                        }) : Object(s.a)({}, e, {isDepositModalVisible: t.payload.show, depositToken: "ETH"});
                    case P.j:
                        return t.payload.show ? Object(s.a)({}, e, {
                            isWithdrawModalVisible: t.payload.show,
                            withdrawalToken: t.payload.token || "ETH"
                        }) : Object(s.a)({}, e, {isWithdrawModalVisible: t.payload.show, withdrawalToken: "ETH"});
                    case P.f:
                        return Object(s.a)({}, e, {isLogoutModalVisible: t.payload.show});
                    case P.d:
                        return Object(s.a)({}, e, {isExportAccountModalVisible: t.payload.show});
                    case P.c:
                        return Object(s.a)({}, e, {isEnterPasswordModalVisible: t.payload.show});
                    case P.i:
                        return Object(s.a)({}, e, {isSideBarVisible: t.payload.show});
                    case P.a:
                        return Object(s.a)({}, e, {isConnectToWalletModalVisiable: t.payload.show});
                    default:
                        return e
                }
            }, M = n(81), F = n(39), _ = n(9), D = {
                balances: [],
                hideLowBalanceAssets: !!Object(u.d)(),
                tokenFilter: "All",
                depositOffset: 0,
                depositLimit: 20,
                depositTotalNum: 0,
                deposits: [],
                isDepositsLoading: !0,
                withdrawalOffset: 0,
                withdrawalLimit: 20,
                withdrawalTotalNum: 0,
                withdrawals: [],
                isWithdrawalsLoading: !0
            }, N = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case F.e:
                        var n = t.payload.balance, r = Object(M.a)(e.balances), a = r.findIndex((function (e) {
                            return e.tokenId === n.tokenId
                        }));
                        return -1 !== a && r.splice(a, 1), r.push(n), Object(s.a)({}, e, {balances: r});
                    case F.h:
                        for (var o = Object(M.a)(e.balances), i = t.payload.balances, c = 0; c < i.length; c++) {
                            for (var l = !1, d = 0; d < o.length; d++) if (o[d].tokenId === i[c].tokenId) {
                                l = !0, o[d].frozenAmount = i[c].frozenAmount, o[d].totalAmount = i[c].totalAmount, o[d].totalAmountInString = i[c].totalAmountInString, o[d].frozenAmountInString = i[c].frozenAmountInString, o[d].percentage = i[c].percentage, o[d].available = i[c].available, o[d].availableInAssetPanel = i[c].availableInAssetPanel;
                                break
                            }
                            l || o.push(i[c])
                        }
                        return Object(s.a)({}, e, {balances: o});
                    case F.g:
                        var p = _.a.fromWEI("ETH", t.payload.balance, t.payload.tokens);
                        return Object(s.a)({}, e, {ethWalletAmount: p});
                    case F.i:
                        var m = t.payload.symbol, f = _.a.fromWEI(m, t.payload.balance, t.payload.tokens);
                        return Object(s.a)({}, e, {lrcWalletAmount: f});
                    case F.a:
                        return Object(s.a)({}, e, {balances: []});
                    case F.f:
                        return Object(s.a)({}, e, {
                            depositOffset: t.payload.offset,
                            depositLimit: t.payload.limit,
                            depositTotalNum: t.payload.totalNum,
                            deposits: t.payload.transactions,
                            isDepositsLoading: !1
                        });
                    case F.b:
                        return Object(s.a)({}, e, {
                            depositOffset: 0,
                            depositLimit: 20,
                            depositTotalNum: 0,
                            deposits: [],
                            isDepositsLoading: !1
                        });
                    case F.k:
                        return Object(s.a)({}, e, {
                            withdrawalOffset: t.payload.offset,
                            withdrawalLimit: t.payload.limit,
                            withdrawalTotalNum: t.payload.totalNum,
                            withdrawals: t.payload.transactions,
                            isWithdrawalsLoading: !1
                        });
                    case F.c:
                        return Object(s.a)({}, e, {
                            withdrawalOffset: 0,
                            withdrawalLimit: 20,
                            withdrawalTotalNum: 0,
                            withdrawals: [],
                            isWithdrawalsLoading: !1
                        });
                    case F.j:
                        return Object(s.a)({}, e, {
                            tokenFilter: t.payload.tokenFilter,
                            depositOffset: 0,
                            withdrawalOffset: 0
                        });
                    case F.d:
                        return t.payload.hideLowBalanceAssets ? Object(u.p)() : Object(u.k)(), Object(s.a)({}, e, {hideLowBalanceAssets: t.payload.hideLowBalanceAssets});
                    default:
                        return e
                }
            }, L = n(50), W = {
                marketFilter: "All",
                isOpenOrdersLoading: !0,
                openOrders: [],
                openOrdersTotalNum: null,
                openOrdersLimit: 20,
                openOrdersOffset: 0,
                isHistoryOrdersLoading: !0,
                historyOrders: [],
                historyOrdersTotalNum: null,
                historyOrdersLimit: 20,
                historyOrdersOffset: 0,
                isTransactionsLoading: !0,
                transactions: [],
                transactionsTotalNum: null,
                transactionsLimit: 20,
                transactionsOffset: 0
            }, z = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case L.e:
                        var n = t.payload, r = n.orders;
                        return r.sort((function (e, t) {
                            return t.createdAt - e.createdAt
                        })), Object(s.a)({}, e, {
                            isOpenOrdersLoading: !1,
                            openOrders: r,
                            openOrdersTotalNum: n.totalNum,
                            openOrdersLimit: n.limit,
                            openOrdersOffset: n.offset
                        });
                    case L.b:
                        return Object(s.a)({}, e, {
                            isOpenOrdersLoading: !1,
                            openOrders: [],
                            openOrdersTotalNum: null,
                            openOrdersLimit: 20,
                            openOrdersOffset: 0
                        });
                    case L.d:
                        var a = t.payload;
                        return Object(s.a)({}, e, {
                            isHistoryOrdersLoading: !1,
                            historyOrders: a.orders,
                            historyOrdersTotalNum: a.totalNum,
                            historyOrdersLimit: a.limit,
                            historyOrdersOffset: a.offset
                        });
                    case L.a:
                        return Object(s.a)({}, e, {
                            isHistoryOrdersLoading: !1,
                            historyOrders: [],
                            historyOrdersTotalNum: null,
                            historyOrdersLimit: 20,
                            historyOrdersOffset: 0
                        });
                    case L.g:
                        var o = t.payload.order;
                        if ("waiting" === o.status || "processing" === o.status) {
                            var i = e.openOrders.filter((function (e) {
                                return e.hash !== o.hash
                            }));
                            return i.push(o), i.sort((function (e, t) {
                                return t.createdAt - e.createdAt
                            })), Object(s.a)({}, e, {openOrders: i})
                        }
                        var c = e.openOrders.filter((function (e) {
                            return e.hash !== o.hash
                        })), l = [];
                        return 0 === e.historyOrdersOffset ? (l = e.historyOrders.filter((function (e) {
                            return e.hash !== o.hash
                        }))).unshift(o) : l = e.historyOrders, Object(s.a)({}, e, {
                            isOpenOrdersLoading: !1,
                            openOrders: c,
                            isHistoryOrdersLoading: !1,
                            historyOrders: l
                        });
                    case L.h:
                        var u = t.payload;
                        return Object(s.a)({}, e, {
                            isTransactionsLoading: !1,
                            transactions: u.trades,
                            transactionsTotalNum: u.totalNum,
                            transactionsLimit: u.limit,
                            transactionsOffset: u.offset
                        });
                    case L.c:
                        return Object(s.a)({}, e, {
                            isTransactionsLoading: !1,
                            transactions: [],
                            transactionsTotalNum: null,
                            transactionsLimit: 20,
                            transactionsOffset: 0
                        });
                    case L.f:
                        return Object(s.a)({}, e, {
                            marketFilter: t.payload.marketFilter,
                            openOrdersOffset: 0,
                            historyOrdersOffset: 0,
                            transactionsOffset: 0
                        });
                    default:
                        return e
                }
            }, H = n(37), R = {
                isOpenOrdersLoading: !0,
                openOrders: [],
                openOrdersTotalNum: null,
                openOrdersLimit: 20,
                openOrdersOffset: 0,
                showAllOpenOrders: !!Object(u.f)(),
                isHistoryOrdersLoading: !0,
                historyOrders: [],
                historyOrdersTotalNum: null,
                historyOrdersLimit: 20,
                historyOrdersOffset: 0
            }, U = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case H.e:
                        var n = t.payload.response, r = n.orders;
                        return r.sort((function (e, t) {
                            return t.createdAt - e.createdAt
                        })), Object(s.a)({}, e, {isOpenOrdersLoading: !1, openOrders: r, openOrdersTotalNum: n.totalNum});
                    case H.g:
                        return t.payload.value ? Object(u.s)() : Object(u.l)(), Object(s.a)({}, e, {showAllOpenOrders: t.payload.value});
                    case H.f:
                        return Object(s.a)({}, e, {openOrdersOffset: t.payload.offset});
                    case H.b:
                        return Object(s.a)({}, e, {
                            isOpenOrdersLoading: !1,
                            openOrders: [],
                            openOrdersTotalNum: null,
                            openOrdersLimit: 20,
                            openOrdersOffset: 0
                        });
                    case H.d:
                        var a = t.payload.response;
                        return Object(s.a)({}, e, {
                            isHistoryOrdersLoading: !1,
                            historyOrders: a.orders,
                            historyOrdersTotalNum: a.totalNum
                        });
                    case H.c:
                        return Object(s.a)({}, e, {historyOrdersOffset: t.payload.offset});
                    case H.a:
                        return Object(s.a)({}, e, {
                            isHistoryOrdersLoading: !1,
                            historyOrders: [],
                            historyOrdersTotalNum: null,
                            historyOrdersLimit: 20,
                            historyOrdersOffset: 0
                        });
                    case H.h:
                        var o = t.payload.order;
                        if ("waiting" === o.status || "processing" === o.status) {
                            var i = e.openOrders.filter((function (e) {
                                return e.hash !== o.hash
                            }));
                            return i.push(o), i.sort((function (e, t) {
                                return t.createdAt - e.createdAt
                            })), Object(s.a)({}, e, {openOrders: i})
                        }
                        var c = e.openOrders.filter((function (e) {
                            return e.hash !== o.hash
                        })), l = [];
                        return 0 === e.historyOrdersOffset ? (l = e.historyOrders.filter((function (e) {
                            return e.hash !== o.hash
                        }))).unshift(o) : l = e.historyOrders, Object(s.a)({}, e, {
                            isOpenOrdersLoading: !1,
                            openOrders: c,
                            isHistoryOrdersLoading: !1,
                            historyOrders: l
                        });
                    default:
                        return e
                }
            }, V = n(103), K = {nonce: []}, Y = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case V.a:
                        var n = t.payload.nonce;
                        return Object(s.a)({}, e, {nonce: n});
                    default:
                        return e
                }
            }, q = n(197), G = {type1: "orderBook", type2: "open-orders", type3: "open-orders"}, X = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case q.a:
                        return "orderBook" === t.payload.type || "tradeHistory" === t.payload.type ? Object(s.a)({}, e, {type1: t.payload.type}) : e;
                    case q.b:
                        return "open-orders" === t.payload.type || "history-orders" === t.payload.type ? Object(s.a)({}, e, {type2: t.payload.type}) : e;
                    case q.c:
                        return "open-orders" === t.payload.type || "order-history" === t.payload.type || "trade-history" === t.payload.type ? Object(s.a)({}, e, {type3: t.payload.type}) : e;
                    default:
                        return e
                }
            }, $ = n(186), J = {tokens: []}, Z = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case $.a:
                        var n = t.payload.tokens;
                        return Object(s.a)({}, e, {tokens: n});
                    default:
                        return e
                }
            }, Q = n(64), ee = {tradeType: "buy", amount: "", price: ""}, te = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Q.d:
                        var n = t.payload.tradeType;
                        return "buy" === n || "sell" === n ? Object(s.a)({}, e, {tradeType: n}) : e;
                    case Q.b:
                        var r = String(t.payload.amount);
                        return Object(s.a)({}, e, {amount: r});
                    case Q.c:
                        var a = String(t.payload.price);
                        return Object(s.a)({}, e, {price: a});
                    case Q.a:
                        return Object(s.a)({}, e, {amount: "", price: ""});
                    default:
                        return e
                }
            },
            ne = {scanQrCode: "\u8bf7\u7528\u652f\u6301WalletConnect\u7684\u94b1\u5305\u626b\u63cf\u4e0b\u65b9\u4e8c\u7ef4\u7801\u3002"},
            re = {scanQrCode: "Scan the QR code with a WalletConnect-compatible wallet."}, ae = "#02BB81",
            oe = "#FF4846", ie = {
                imgDir: "dark",
                green: ae,
                red: oe,
                orange: "#FF8944",
                primary: "#2E7BFA",
                warning: "#FF8944",
                success: ae,
                error: oe,
                highlight: "#32c5ff",
                background: "#242539",
                foreground: "#292B42",
                lightForeground: "#2F304D",
                sidePanelBackground: "#303249",
                buttonBackground: "#3e3f61",
                textBright: "#eeeeee",
                textWhite: "#CDCDCDE0",
                textWhiteBulk: "#9FA0BF",
                textDim: "#696A9B",
                textSidebarMenu: "#9E9EAC",
                textLowContrast: "#424242",
                textBigButton: "rgba(255,255,255,.8)",
                textSelection: "#eeeeee",
                popupBackground: "#2F304D",
                popupHeaderBackground: "#3e3f61",
                notificationBackground: "#2F304D",
                secondaryNavbarBackground: "#292B42",
                marketSelectionHoverBackground: "#242539",
                spreadAggregationBackground: "#2F304D",
                inputPlaceHolderColor: "#696A9B80",
                inputBorderColor: "rgba(255,255,255,0.05)",
                inputBorderActiveColor: "rgba(255,255,255,0.2)",
                seperator: "rgba(0,0,0,0.15)",
                border: "#242539",
                tableHeaderBackground: "linear-gradient(180deg,rgba(46, 47, 74, 1) 0%, rgba(37, 38, 59, 1) 100% )",
                tableHoverBackground: "#2F304D",
                legalIframeBackground: "#242539",
                buyPrimary: ae,
                buySecondary: ae + "BB",
                buyBar: ae + "30",
                sellPrimary: oe,
                sellSecondary: oe + "BB",
                sellBar: oe + "30"
            }, ce = Object(s.a)({}, ie, {
                walletConnectI18n: ne,
                upColor: oe,
                downColor: ae,
                timeFormat: "M\u6708DD\u65e5 HH:mm:ss"
            }), se = Object(s.a)({}, ie, {walletConnectI18n: re, upColor: ae, downColor: oe, timeFormat: "MM/DD HH:mm:ss"}),
            le = {
                imgDir: "light",
                green: "#02AA76",
                red: "#FF4846",
                orange: "#FF8944",
                primary: "#2E7BFA",
                warning: "#FF8944",
                success: "#02AA76",
                error: "#FF4846",
                highlight: "#32c5ff",
                background: "#F0F0F1",
                foreground: "#EBEBED",
                lightForeground: "#D7D7DB",
                sidePanelBackground: "#E6E6ED",
                buttonBackground: "#C8C8DA",
                textBright: "#272739",
                textWhite: "#434463",
                textWhiteBulk: "#303147",
                textDim: "#696A9B",
                textSidebarMenu: "#434463",
                textLowContrast: "#424242",
                textBigButton: "rgba(255,255,255,.8)",
                textSelection: "rgba(255,255,255,.8)",
                popupBackground: "#E6E6ED",
                popupHeaderBackground: "#C8C8DA",
                notificationBackground: "#E6E6ED",
                secondaryNavbarBackground: "#E6E6ED",
                marketSelectionHoverBackground: "#FFFFFF",
                spreadAggregationBackground: "#C8C8DA",
                inputPlaceHolderColor: "rgba(0,0,0,.2)",
                inputBorderColor: "rgba(0,0,0,0.1)",
                inputBorderActiveColor: "rgba(0,0,0,0.3)",
                seperator: "rgba(0,0,0,0.1)",
                border: "#C8C8DA",
                tableHeaderBackground: "#C8C8DA",
                tableHoverBackground: "#DCDCE7",
                legalIframeBackground: "#F0F0F1",
                buyPrimary: "#02AA76",
                buySecondary: "#02AA76BB",
                buyBar: "#02AA7630",
                sellPrimary: "#FF4846",
                sellSecondary: "#FF4846BB",
                sellBar: "#FF484630"
            }, ue = Object(s.a)({}, le, {
                walletConnectI18n: ne,
                upColor: "#FF4846",
                downColor: "#02AA76",
                timeFormat: "M\u6708DD\u65e5 HH:mm:ss"
            }), de = Object(s.a)({}, le, {
                walletConnectI18n: re,
                upColor: "#02AA76",
                downColor: "#FF4846",
                timeFormat: "MM/DD HH:mm:ss"
            }), pe = n(203), me = n(382), fe = n(629), he = n(630), be = n(631), ge = n(461);
        ge.a.use(fe.a).use(me.b).init({
            lng: Object(u.e)(),
            backend: {
                backends: [he.a, be.a],
                backendOptions: [{
                    prefix: "i18n_",
                    expirationTime: 6048e5,
                    versions: {
                        zh: "c000b8caf48bed9420f5c0c9b0b4f73155e66668",
                        en: "c000b8caf48bed9420f5c0c9b0b4f73155e66668"
                    },
                    store: window.localStorage
                }, {loadPath: "/assets/i18n/{{ns}}/{{lng}}.json"}]
            },
            fallbackLng: "en",
            debug: !1,
            ns: ["translations"],
            defaultNS: "translations",
            keySeparator: !1,
            interpolation: {escapeValue: !1, formatSeparator: ","},
            react: {wait: !0}
        });
        var ye = ge.a, ve = Object(u.e)(), xe = Object(u.b)(), Ee = Object(u.g)(), ke = function (e, t) {
                var n = t;
                return "auto" === t && (n = function () {
                    var e = (new Date).getHours();
                    return e > 6 && e < 20 ? "light" : "dark"
                }()), "dark" === n ? "zh" === e ? ce : se : "zh" === e ? ue : de
            }, Oe = {language: ve, currency: xe, themeName: Ee, theme: ke(ve, Ee)}, we = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case pe.c:
                        var n = t.payload.themeName;
                        return Object(u.t)(n), Object(s.a)({}, e, {themeName: n, theme: ke(e.language, n)});
                    case pe.b:
                        var r = t.payload.language;
                        return ye.changeLanguage(r), Object(u.q)(r), Object(s.a)({}, e, {
                            language: r,
                            theme: ke(r, e.themeName)
                        });
                    case pe.a:
                        var a = t.payload.currency;
                        return Object(u.o)(a), Object(s.a)({}, e, {currency: a});
                    default:
                        return e
                }
            }, je = n(105), Ae = {startConnecting: !1, referenceCount: 0, isDesiredNetwork: !0, installed: !1},
            Ce = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case je.a:
                        var n = t.payload.startConnecting, r = e.referenceCount;
                        return !0 === n && (r = e.referenceCount + 1), Object(s.a)({}, e, {
                            startConnecting: n,
                            referenceCount: r
                        });
                    case je.b:
                        return Object(s.a)({}, e, {startConnecting: !1});
                    default:
                        return e
                }
            }, Te = n(134), Se = {accounts: [], accounts_fetched: !1, account_exists: !1, account_selected: null},
            Pe = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Te.c:
                        var n = t.payload.length > 0, r = null;
                        return n && (r = t.payload[0]), Object(s.a)({}, e, {
                            accounts: t.payload,
                            accounts_fetched: !0,
                            account_exists: n,
                            account_selected: r
                        });
                    case Te.d:
                        return Object(s.a)({}, e, {
                            accounts: [],
                            accounts_fetched: !1,
                            account_exists: !1,
                            account_selected: null
                        });
                    case Te.a:
                        var a = t.payload.length > 0, o = null;
                        return a && (o = t.payload[0]), Object(s.a)({}, e, {
                            accounts: t.payload,
                            accounts_fetched: !0,
                            account_exists: a,
                            account_selected: o
                        });
                    case Te.b:
                        return Object(s.a)({}, e, {accounts: t.payload.items});
                    default:
                        return e
                }
            }, Ie = n(359), Be = {ohlc: []}, Me = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Ie.a:
                        var n = t.payload.ohlc;
                        return Object(s.a)({}, e, {ohlc: n});
                    default:
                        return e
                }
            }, Fe = n(360);
        var _e = function () {
                var e = window.location.hash;
                if (e && e.includes("#/trade/")) {
                    var t = e.replace("#/trade/", "");
                    return {current: t, baseTokenSymbol: t.split("-")[0], quoteTokenSymbol: t.split("-")[1]}
                }
                return {current: "LRC-USDT", baseTokenSymbol: "LRC", quoteTokenSymbol: "USDT"}
            }(), De = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Fe.a:
                        var n = t.payload.marketName, r = n.split("-"), a = r[0], o = r[1];
                        return Object(s.a)({}, e, {current: n, baseTokenSymbol: a, quoteTokenSymbol: o});
                    default:
                        return e
                }
            }, Ne = n(188), Le = {markets: [], marketNames: []}, We = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Ne.a:
                        var n = t.payload.markets, r = n.map((function (e) {
                            return e.market
                        }));
                        return Object(s.a)({}, e, {markets: n, marketNames: r});
                    default:
                        return e
                }
            }, ze = n(259), He = {blockNum: 0}, Re = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case ze.a:
                        return Object(s.a)({}, e, {blockNum: t.payload.blockNum});
                    default:
                        return e
                }
            }, Ue = n(71), Ve = n.n(Ue), Ke = n(113), Ye = {level: 0, version: -1, sells: [], buys: []}, qe = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Ke.b:
                        if (e.version < t.payload.version) {
                            var n = t.payload.sells, r = t.payload.buys;
                            return Object(s.a)({}, e, {sells: n, buys: r, version: t.payload.version})
                        }
                        return e;
                    case Ke.c:
                        var a = t.payload.level;
                        return Object(s.a)({}, e, {level: a});
                    case Ke.a:
                        return {level: t.payload.level, version: -1, sells: [], buys: []};
                    case Ke.d:
                        var o = t.payload.startVersion, i = t.payload.endVersion, c = t.payload.market,
                            l = t.payload.configTokens, u = c.split("-"), d = u[0];
                        if (o <= e.version + 1) {
                            var p = t.payload.buys, m = t.payload.sells, f = p.filter((function (e) {
                                return e.count > 0
                            })), h = m.filter((function (e) {
                                return e.count > 0
                            }));
                            e.sells.forEach((function (e) {
                                m.find((function (t) {
                                    return t.price === e.price
                                })) || h.push(e)
                            })), e.buys.forEach((function (e) {
                                p.find((function (t) {
                                    return t.price === e.price
                                })) || f.push(e)
                            })), h.sort((function (e, t) {
                                return parseFloat(t.price) - parseFloat(e.price)
                            })), f.sort((function (e, t) {
                                return parseFloat(t.price) - parseFloat(e.price)
                            }));
                            for (var b = Ve()(0), g = h.length - 1; g >= 0; g -= 1) {
                                var y = h[g];
                                b = b.plus(y.size), y.aggregatedSize = _.a.fromWEI(d, b, l)
                            }
                            b = Ve()(0);
                            for (var v = 0; v < f.length; v += 1) {
                                var x = f[v];
                                b = b.plus(x.size), x.aggregatedSize = _.a.fromWEI(d, b, l)
                            }
                            return Object(s.a)({}, e, {version: i, sells: h, buys: f})
                        }
                        return e;
                    default:
                        return e
                }
            }, Ge = n(198),
            Xe = {high: "-", low: "-", percentChange24h: "-", size: "-", volume: "-", open: "-", close: "-"},
            $e = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Ge.b:
                        var n = t.payload.ticker, r = parseFloat(n.open), a = parseFloat(n.close),
                            o = ((a - r) / r * 100).toFixed(2);
                        return o = "NaN" !== o ? o : "0.00", a > r && (o = "+".concat(o)), Object(s.a)({}, e, {}, n, {percentChange24h: "".concat(o, "%")});
                    case Ge.a:
                        return {
                            high: "-",
                            low: "-",
                            percentChange24h: "-",
                            size: "-",
                            volume: "-",
                            open: "-",
                            close: "-"
                        };
                    default:
                        return e
                }
            }, Je = n(205), Ze = {trades: [], latestTrade: null}, Qe = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Je.c:
                        var n = t.payload.trades, r = n && n.length > 0 ? n[0] : null;
                        return Object(s.a)({}, e, {trades: n, latestTrade: r});
                    case Je.b:
                        var a = t.payload.newTrades, o = e.trades, i = a.concat(o);
                        i.length > 100 && (i = i.slice(0, 100));
                        var c = i && i.length > 0 ? i[0] : null;
                        return Object(s.a)({}, e, {trades: i, latestTrade: c});
                    case Je.a:
                        return {trades: [], latestTrade: null};
                    default:
                        return e
                }
            }, et = function (e) {
                return Object(r.c)({
                    router: Object(c.b)(e),
                    exchange: v,
                    Web3: Pe,
                    tabs: X,
                    tokens: Z,
                    tradePanel: te,
                    layoutManager: j,
                    market: Object(r.c)({
                        currentMarket: De,
                        candles: Me,
                        marketList: We,
                        orderBook: qe,
                        tradeHistory: Qe,
                        ticker: $e
                    }),
                    currentMarket: De,
                    candles: Me,
                    marketList: We,
                    orderBook: qe,
                    tradeHistory: Qe,
                    ticker: $e,
                    modalManager: B,
                    balances: N,
                    myOrders: U,
                    myOrderPage: z,
                    metaMask: S,
                    walletConnect: Ce,
                    dexAccount: b,
                    nonce: Y,
                    gasPrice: k,
                    cmcPrice: p,
                    userPreferences: we,
                    notifyCenter: Re
                })
            }, tt = n(636), nt = Object(a.a)();

        function rt(e) {
            var t, n = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || r.d;
            return Object(r.e)(et(nt), e, n(Object(r.a)(tt.a, Object(o.a)(nt), (t = i.a, function () {
                return function (e) {
                    return function (n) {
                        t.trackEvent(n), e(n)
                    }
                }
            }))))
        }
    }, 46: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return m
        })), n.d(t, "a", (function () {
            return f
        }));
        n(548);
        var r = n(273), a = n(18), o = n(264), i = n(668), c = (n(667), n(75)), s = n(55), l = n(0), u = n.n(l),
            d = function (e) {
                return u.a.createElement(a.a, {style: {color: e.textDim}, icon: c.faTimes})
            };

        function p(e) {
            try {
                s.a.trackEvent({type: "USER_NOTIFICATION", data: {message: e.props.s}})
            } catch (t) {
            }
        }

        function m(e, t, n) {
            p(e), r.a.success({
                message: e,
                closeIcon: d(t),
                icon: u.a.createElement(a.a, {icon: o.faCheckCircle}),
                duration: n || 3,
                top: 56,
                style: {color: t.green, background: t.notificationBackground}
            })
        }

        function f(e, t, n) {
            p(e), r.a.error({
                message: e,
                closeIcon: d(t),
                icon: u.a.createElement(a.a, {icon: i.faGhost}),
                duration: n || 5,
                top: 56,
                style: {color: t.red, background: t.notificationBackground}
            })
        }
    }, 50: function (e, t, n) {
        "use strict";
        n.d(t, "e", (function () {
            return f
        })), n.d(t, "d", (function () {
            return h
        })), n.d(t, "b", (function () {
            return b
        })), n.d(t, "a", (function () {
            return g
        })), n.d(t, "h", (function () {
            return y
        })), n.d(t, "c", (function () {
            return v
        })), n.d(t, "g", (function () {
            return x
        })), n.d(t, "f", (function () {
            return E
        })), n.d(t, "p", (function () {
            return k
        })), n.d(t, "m", (function () {
            return O
        })), n.d(t, "l", (function () {
            return w
        })), n.d(t, "j", (function () {
            return j
        })), n.d(t, "i", (function () {
            return A
        })), n.d(t, "n", (function () {
            return T
        })), n.d(t, "k", (function () {
            return S
        })), n.d(t, "o", (function () {
            return P
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(107), c = n(8), s = n(36), l = n(26), u = n(9);

        function d(e) {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = Object(o.a)(a.a.mark((function e(t) {
                var n, r, o, i, c, u, d, p, f, h, b, g, y;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.accountId, r = t.limit, o = t.offset, i = t.market, c = t.apiKey, u = t.tokens, d = {"X-API-KEY": c}, p = {
                                accountId: n,
                                limit: r,
                                offset: o,
                                start: 0,
                                end: 1e3 * Date.now()
                            }, "undefined" !== typeof i && (p.market = i), e.next = 6, Object(l.b)({
                                method: "GET",
                                url: "/api/v2/user/trades",
                                headers: d,
                                params: p
                            });
                        case 6:
                            return f = e.sent, h = f.data, b = h.totalNum, g = h.trades.map((function (e) {
                                return Object(s.b)(e)
                            })), y = m(g, u), e.abrupt("return", {
                                accountId: n,
                                trades: y,
                                totalNum: b,
                                limit: r,
                                offset: o
                            });
                        case 12:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function m(e, t) {
            for (var n = [], r = 0; r < e.length; r += 1) {
                var a = e[r], o = Object(c.a)({}, a), i = o.market.split("-"), s = i[0], l = i[1];
                o.baseToken = s, o.quoteToken = l;
                var d = u.a.fromWEI(s, a.size, t);
                o.sizeInString = d;
                var p = "";
                if (0 === Number(a.filledSize)) p = "-"; else {
                    var m = "buy" === a.side.toLowerCase() ? s : l;
                    p = u.a.fromWEI(m, a.fee, t, {precision: 8})
                }
                o.feeInString = p;
                var f = u.a.getTokenBySymbol(l, t),
                    h = Number(parseFloat(o.sizeInString) * parseFloat(a.price)).toFixed(f.precision);
                o.totalInString = h, n.push(o)
            }
            return n
        }

        var f = "UPDATE_ALL_OPEN_ORDERS", h = "UPDATE_ALL_HISTORY_ORDERS", b = "EMPTY_ALL_OPEN_ORDERS",
            g = "EMPTY_ALL_HISTORY_ORDERS", y = "UPDATE_USER_TRANSACTIONS", v = "EMPTY_USER_TRANSACTIONS",
            x = "UPDATE_SOCKET_ALL_ORDER", E = "UPDATE_MARKET_FILTER";

        function k(e) {
            return {type: x, payload: {order: e}}
        }

        function O(e, t, n, r, c, s) {
            return function (l) {
                Object(o.a)(a.a.mark((function o() {
                    var u;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(i.c)({
                                    accountId: e,
                                    market: t,
                                    limit: n,
                                    offset: r,
                                    statuses: ["waiting", "processing"],
                                    apiKey: c,
                                    tokens: s
                                });
                            case 3:
                                u = a.sent, l({type: f, payload: u}), a.next = 9;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0);
                            case 9:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function w(e, t, n, r, c, s) {
            return function (l) {
                Object(o.a)(a.a.mark((function o() {
                    var u;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, Object(i.c)({
                                    accountId: e,
                                    market: t,
                                    limit: n,
                                    offset: r,
                                    statuses: ["processed", "failed", "cancelled", "expired"],
                                    apiKey: c,
                                    tokens: s
                                });
                            case 3:
                                u = a.sent, l({type: h, payload: u}), a.next = 9;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0);
                            case 9:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function j() {
            return {type: b, payload: {}}
        }

        function A() {
            return {type: g, payload: {}}
        }

        function C(e) {
            return {type: y, payload: e}
        }

        function T(e, t, n, r, i, c) {
            return function (s) {
                Object(o.a)(a.a.mark((function o() {
                    var l;
                    return a.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, a.next = 3, d({
                                    accountId: e,
                                    market: t,
                                    limit: n,
                                    offset: r,
                                    apiKey: i,
                                    tokens: c
                                });
                            case 3:
                                l = a.sent, s(C(l)), a.next = 10;
                                break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(0), console.log(a.t0);
                            case 10:
                            case"end":
                                return a.stop()
                        }
                    }), o, null, [[0, 7]])
                })))()
            }
        }

        function S() {
            return {type: v, payload: {}}
        }

        function P(e) {
            return {type: E, payload: {marketFilter: e}}
        }
    }, 62: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return h
        })), n.d(t, "a", (function () {
            return b
        })), n.d(t, "d", (function () {
            return g
        })), n.d(t, "c", (function () {
            return v
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26), c = n(9);

        function s(e, t, n) {
            return l.apply(this, arguments)
        }

        function l() {
            return (l = Object(o.a)(a.a.mark((function e(t, n, r) {
                var o, s, l, u;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return o = c.a.getTokenBySymbol(n, r), s = o.address, l = {
                                owner: t,
                                token: s
                            }, e.next = 5, Object(i.b)({method: "GET", url: "/api/v2/allowances", params: l});
                        case 5:
                            return u = e.sent, e.abrupt("return", u.data);
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var u = n(388), d = n(387), p = n(36), m = n(395), f = n.n(m);

        function h(e, t) {
            return f.a.AES.encrypt(e, t).toString()
        }

        function b(e, t) {
            try {
                if (e && e.length) {
                    var n = f.a.AES.decrypt(e, t).toString(f.a.enc.Utf8);
                    return 0 === n.length ? null : n
                }
                return null
            } catch (r) {
                return null
            }
        }

        function g(e, t, n) {
            return y.apply(this, arguments)
        }

        function y() {
            return (y = Object(o.a)(a.a.mark((function e(t, n, r) {
                var o, i;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, "ETH" === n.toUpperCase() ? Object(u.a)(t) : Object(d.a)(t, n, r);
                        case 2:
                            return o = e.sent, i = c.a.getTokenBySymbol(n, r), e.abrupt("return", Object(p.n)(i, o, r));
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function v(e, t, n) {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = Object(o.a)(a.a.mark((function e(t, n, r) {
                var o;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if ("ETH" !== n.toUpperCase()) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", 0);
                        case 4:
                            return e.next = 6, s(t, n, r);
                        case 6:
                            return o = e.sent, e.abrupt("return", Number(c.a.fromWEI(n, o, r)));
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 638: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(3);

        function o() {
            var e = Object(r.a)(["\n\ninput.ant-input {\n  background-color: transparent;\n  color: ", " !important;\n  border: none;\n  height: 40px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-align: left;\n  padding-left: 6px;\n  caret-color: ", " !important;\n}\n\ninput.ant-input.ant-input-disabled {\n  background-color: transparent;\n  color: ", " !important;\n}\n\n.ant-input-suffix {\n  min-height: 100%;\n  color: ", "!important;\n}\n\n.ant-input-password-icon{\n  color: ", "!important;\n  &:hover {\n    color: ", "!important;\n  }\n}\n\n.ant-select-selection__placeholder {\n  color: ", ";\n}\n\n.ant-input-affix-wrapper {\n  background-color: ", "! important;\n  border-radius: 4px;\n  border: 1px solid  ", " !important;\n  border: none;\n  box-shadow: none;\n  width: 100%;\n  height: 40px;\n  padding: 0px 11px;\n\n  &:hover,\n  &:focus {\n    border: 1px solid  ", " !important;\n    box-shadow: none;\n  }\n\n  .ant-input-password-icon {\n    margin-top: 12px;\n  }\n}\n"]);
            return o = function () {
                return e
            }, e
        }

        var i = Object(a.c)(o(), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.textBright
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.inputPlaceHolderColor
        }), (function (e) {
            return e.theme.inputPlaceHolderColor
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.inputPlaceHolderColor
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.inputBorderColor
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        }));
        t.a = i
    }, 64: function (e, t, n) {
        "use strict";
        n.d(t, "d", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        })), n.d(t, "h", (function () {
            return c
        })), n.d(t, "f", (function () {
            return s
        })), n.d(t, "g", (function () {
            return l
        })), n.d(t, "e", (function () {
            return u
        }));
        var r = "UPDATE_TRADE_TYPE", a = "UPDATE_AMOUNT", o = "UPDATE_PRICE", i = "EMPTY_TRADE_FORM";

        function c(e) {
            return {type: r, payload: {tradeType: e}}
        }

        function s(e) {
            return {type: a, payload: {amount: e}}
        }

        function l(e) {
            return {type: o, payload: {price: e}}
        }

        function u() {
            return {type: i, payload: {}}
        }
    }, 641: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(3);

        function o() {
            var e = Object(r.a)(["\n\n.ant-spin-container,.ant-spin{\n  transition-delay: 0s!important;\n  transition:none!important;\n}\n.ant-spin-blur {\n  opacity: 0!important;\n  transition: none!important;\n}\n\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-text {\n  text-shadow: none!important;\n}\n.ant-tooltip-inner {\n  background: ", ";\n  padding: 12px 16px;\n  color: ", ";\n  font-size: 0.85rem;\n}\n\n.ant-tooltip-arrow::before {\n  background: ", ";\n}\n\n.ant-input-password input {\n  font-weight: normal!important;\n}\n\n.ant-checkbox-inner {\n  background: ", " !important;\n  border: ", ";\n}\n\n.ant-checkbox.ant-checkbox-checked .ant-checkbox-inner {\n  background: ", "!important;\n}\n\n.ant-checkbox-wrapper {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: ", "!important;\n}\n\n.ant-form-item-label {\n  line-height: 24px;\n}\n\n.ant-form-item {\n  margin-bottom: 0px;\n}\n\n.ant-list-bordered {\n  border: none;\n}\n\nli.ant-pagination-item {\n   border-style: none;\n   background: ", "!important;\n   a {\n     color: ", "!important;\n   }\n   &:hover {\n      background: ", "!important;\n      a {\n       color: ", "!important;\n      }\n   }\n}\n\nli.ant-pagination-item-active {\n  background: ", "!important;\n  color: ", "!important;\n\n  border-style: none;\n  a {\n    color: ", "!important;\n  }\n}\n\n.ant-pagination.mini .ant-pagination-item {\n  margin: 2px;\n}\n\n\n  li.ant-pagination-prev a.ant-pagination-item-link,\n  li.ant-pagination-next a.ant-pagination-item-link {\n    background-color: ", "!important;\n    border-style: none;\n    color: ", "!important;\n  }\n\n  li.ant-pagination-prev:hover a.ant-pagination-item-link,\n  li.ant-pagination-next:hover a.ant-pagination-item-link {\n    background-color: ", "!important;\n    border-style: none;\n    color: ", "!important;\n  }\n\n  li.ant-pagination-prev.ant-pagination-disable:hover,\n  li.ant-pagination-next.ant-pagination-disable:hover {\n        background-color: ", "!important;\n        color: ", "!important;\n  }\n\n  li.ant-pagination-prev.ant-pagination-disable a.ant-pagination-item-link,\n  li.ant-pagination-next.ant-pagination-disable a.ant-pagination-item-link {\n    color: ", "!important;\n  }\n\n\n\n  li.ant-pagination-prev  a.ant-pagination-item-link:hover,\n  li.ant-pagination-next  a.ant-pagination-item-link:hover {\n    color: ", "!important;\n  }\n\n  li.ant-pagination-prev:hover,li.ant-pagination-prev:focus,\n  li.ant-pagination-next:hover,li.ant-pagination-next:focus {\n    color: ", "!important;\n  }\n\n.ant-table-pagination.ant-pagination {\n  padding: 4px 0px !important;\n  margin: auto !important;\n  text-align: center !important;\n}\n\n\n.ant-input,\n.ant-form *,\n.ant-pagination-item {\n  font-family: Montserrat, sans-serif !important;\n  font-size: 0.85rem;\n}\n\n\n.ant-dropdown-menu {\n  padding: 0px;\n}\n\n.ant-dropdown-menu-item {\n  font-size: 0.9rem;\n  color: ", "!important;\n  background: ", "!important;\n}\n\n.ant-dropdown-menu-submenu-arrow {\n  display: none;\n}\n\n.ant-dropdown-menu-item-divider,\n.ant-dropdown-menu-submenu-title-divider {\n  margin: 0px;\n  background-color:  ", ";\n}\n\n\n.ant-popover > .ant-popover-content {\n  border-radius: 4px;\n  background:  ", "!important;\n  box-shadow: 0 0 0 5000px rgba(0, 0, 0, 0.45) !important;\n}\n\n.ant-popover > .ant-popover-content > .ant-popover-inner {\n    border: none;\n    color:", ";\n    background:  ", ";\n    font-size: 0.85rem;\n\n    min-height: 20px;\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n\n    .ant-popover-title {\n       border-top-left-radius: 2px!important;\n       border-top-right-radius: 2px!important;\n      background: ", ";\n      border: none;\n      padding-top: 6px;\n      padding-bottom: 6px;\n      font-size: 0.9rem;\n      font-weight: 600;\n      color:  ", ";\n    }\n  }\n\n .ant-popover > .ant-popover-content > .ant-popover-arrow {\n    border-top-color: ", ";\n    border-left-color:", ";\n  }\n\n.ant-popover > .ant-popover-content > .ant-popover-inner-content {\n  border-bottom-left-radius: 2px!important;\n  border-bottom-right-radius: 2px!important;\n  background: ", ";\n}\n\n.marketSelection.ant-popover-placement-bottom,\n.marketSelection.ant-popover-placement-bottomLeft,\n.marketSelection.ant-popover-placement-bottomRight {\n  padding-top: 0px;\n}\n\n.ant-btn-icon-only.ant-btn-sm > * {\n  font-size: 14px;\n  padding-bottom: 2px;\n  vertical-align: middle;\n}\n"]);
            return o = function () {
                return e
            }, e
        }

        var i = Object(a.c)(o(), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.buttonBackground
        }), (function (e) {
            return e.theme.inputBorderColor
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.background
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.background
        }), (function (e) {
            return e.theme.buttonBackground
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.buttonBackground
        }), (function (e) {
            return e.theme.buttonBackground
        }), (function (e) {
            return e.theme.foreground
        }));
        t.a = i
    }, 642: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(3);

        function o() {
            var e = Object(r.a)(["\n\n.ant-modal-content {\n  background-color: ", ";\n}\n\n.ant-modal-content > .ant-modal-header {\n  background-color: ", ";\n  border-bottom: none;\n  padding: 14px 24px;\n}\n\n.ant-modal-title {\n  text-align: center!important;\n}\n\n.ant-modal-body {\n  padding: 18px 60px;\n}\n\n.ant-modal-close-x {\n  color: ", ";\n  width: 54px;\n  height: 54px;\n  line-height: 54px;\n}\n\n.ant-notification,\n.ant-notification-notice-message {\n  color: ", ";\n  font-size: 0.9rem !important;\n}\n\n.ant-notification-notice-description {\n color: ", ";\n  font-size: 0.85rem !important;\n}\n\n.ant-notification-close-icon {\n  color: ", ";\n}\n\n\n//---------------------------\n\n.defaultPopover.ant-popover {\n  .ant-popover-inner-content , .ant-popover-message-title {\n    border-radius:2px;\n    font-size: 0.85rem!important;\n    color: ", "!important;\n    background-color: ", "!important;\n  }\n\n  .ant-popover-message-title {\n    padding: 8px 32px;\n  }\n\n  .ant-popover-arrow {\n    border-top-color: ", "!important;\n    border-left-color: ", "!important;\n    border-right-color:", "!important;\n    border-bottom-color: ", "!important;\n  }\n\n  .ant-popover-buttons {\n    text-align: center;\n  }\n  button.ant-btn.ant-btn-sm, button.ant-btn.ant-btn-sm.primary {\n    min-width: 80px;\n    font-size: 1rem;\n    font-weight: 600;\n    height: 32px;\n    border-radius: 16px;\n    border:none;\n  }\n\n  button.ant-btn.ant-btn-sm {\n    background-color:", "!important;\n     color: ", "!important;\n     &:hover {\n        color: ", "!important;\n     }\n  }\n\n  button.ant-btn.ant-btn-sm.ant-btn-primary {\n    background: ", "!important;\n    color: ", "!important;\n     &:hover {\n        color: ", "!important;\n     }\n  }\n}\n"]);
            return o = function () {
                return e
            }, e
        }

        var i = Object(a.c)(o(), (function (e) {
            return e.theme.popupBackground
        }), (function (e) {
            return e.theme.popupHeaderBackground
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.popupBackground
        }), (function (e) {
            return e.theme.popupBackground
        }), (function (e) {
            return e.theme.popupBackground
        }), (function (e) {
            return e.theme.popupBackground
        }), (function (e) {
            return e.theme.popupBackground
        }), (function (e) {
            return e.theme.buttonBackground
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.highlight
        }));
        t.a = i
    }, 643: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(3);

        function o() {
            var e = Object(r.a)(["\n.ant-table {\n  background: ", "!important;\n\n  tbody > tr > td {\n    color: ", ";\n  }\n\n  tbody > tr.ant-table-row:hover > td {\n    background:", "!important;\n    color: ", ";\n  }\n\n  tbody > tr.ant-table-placeholder:hover > td {\n    background: transparent;\n  }\n\n  tbody > tr > td {\n    border-bottom-style: none;\n    padding: 0px;\n    height: 34px;\n  }\n\n  thead > tr {\n    height: 32px! important;\n    background: ", ";\n  }\n\n  thead > tr > th {\n    margin: 0;\n    padding: 0px;\n    border: none;\n    color: ", ";\n    background: transparent;\n  }\n}\n\n.ant-table.ant-table-middle .ant-table-thead > tr > th {\n  padding: 0px;\n}\n\n.ant-table.ant-table-middle .ant-table-tbody > tr > td {\n  padding: 1px 0px;\n  height: 24px;\n}\n\n.ant-spin-container {\n  transation: 0;\n}\n\n.ant-spin-container::after {\n  background: transparent;\n}\n\n.ant-table-placeholder {\n  border-style: none;\n  user-select: none;\n  background: transparent!important;\n\n  .ant-empty-normal {\n    margin: 64px 0px;\n  }\n}\n\n.ant-empty-description {\n  color:", ";\n}\n"]);
            return o = function () {
                return e
            }, e
        }

        var i = Object(a.c)(o(), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.tableHoverBackground
        }), (function (e) {
            return e.theme.textBright
        }), (function (e) {
            return e.theme.tableHeaderBackground
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textDim
        }));
        t.a = i
    }, 644: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(3);

        function o() {
            var e = Object(r.a)(["\n.marketSelection.ant-popover.ant-popover-placement-bottomLeft > .ant-popover-content {\n  background: ", "!important;\n  .ant-popover-inner-content {\n    border-radius: 2px;\n  }\n  > .ant-popover-arrow {\n    display:none!important;\n  }\n}\n\n.asset-panel {\n  border: 1px solid ", ";\n  border-radius: 4px;\n\n  .header {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n\n    color: ", ";\n    font-size: 0.9rem;\n    font-weight: 400;\n    height: 32px;\n\n    .row {\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n      background: ", ";\n      padding: 0px;\n      margin: 0px;\n      line-height: 32px;\n    }\n\n    .columnLeft {\n      border-top-left-radius: 4px;\n      text-align: left;\n      padding-left: 16px;\n    }\n\n    .columnRight {\n      text-align: right;\n      padding-right: 16px;\n      border-top-right-radius: 4px;\n    }\n  }\n\n  .body {\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    background: ", ";\n    color: ", ";\n    padding: 0px 16px 16px 16px;\n\n    .row {\n      padding: 0px;\n      margin: 0px;\n    }\n\n    .columnLeft {\n      text-align: left;\n      padding-left: 16px;\n    }\n\n    .columnRight {\n      text-align: right;\n      padding-right: 16px;\n    }\n  }\n}\n"]);
            return o = function () {
                return e
            }, e
        }

        var i = Object(a.c)(o(), (function (e) {
            return e.theme.popupBackground
        }), (function (e) {
            return e.theme.inputBorderColor
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.tableHeaderBackground
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textWhite
        }));
        t.a = i
    }, 645: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(3);

        function o() {
            var e = Object(r.a)(["\n  @font-face {\n    font-family: 'Montserrat-Regular';\n    font-weight: normal;\n    font-style: normal;\n    src: local('Montserrat-Regular'),\n      url(/assets/fonts/Montserrat/Montserrat-Regular.ttf) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'Montserrat-Italic';\n    font-weight: normal;\n    font-style: normal;\n    src: local('Montserrat-Italic'),\n      url(/assets/fonts/Montserrat/Montserrat-Italic.ttf) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'Montserrat-Medium';\n    font-weight: normal;\n    font-style: normal;\n    src: local('Montserrat-Medium'),\n      url(/assets/fonts/Montserrat/Montserrat-Medium.ttf) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'Montserrat-Bold';\n    font-weight: bold;\n    font-style: normal;\n    src: local('Montserrat-Bold'),\n      url(/assets/fonts/Montserrat/Montserrat-Bold.ttf) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'Montserrat-Light';\n    font-weight: 300;\n    font-style: normal;\n    src: local('Montserrat-Light'),\n      url(/assets/fonts/Montserrat/Montserrat-Light.ttf) format('truetype');\n  }\n\n  html {\n    font-size: 14px;\n    color: ", ";\n  }\n\n  body {\n    margin:0;\n    background-color: ", ";\n    // Hide scrollbar in Firefox\n    * {\n      scrollbar-width: none !important;\n    }\n  }\n\n  // Hide scrollbar on others\n  ::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    background: transparent;  /* optional: just make scrollbar invisible */\n  }\n\n  input, textarea {\n    outline: none!important;\n  }\n\n  input:-internal-autofill-selected {\n    color: ", "!important;\n    transition: background-color 5000s ease-in-out 0s; // this is the magic\n  }\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active  {\n      -webkit-text-fill-color: ", "!important;\n  }\n\n  .desktop-layout {\n    @media only screen and (max-width: 770px) {\n      display: none;\n    }\n  }\n\n  .mobile-layout {\n    @media only screen and (min-width: 770px) {\n      display: none;\n    }\n  }\n\n  .cookieConsent {\n    @media only screen and (max-width: 769px) {\n      display: none !important;\n    }\n  }\n\n  *::selection {\n    background: ", ";\n    color: ", " ;\n  }\n\n  *::placeholder {\n    color: ", "!important;\n    opacity: 1;\n  }\n\n  a {\n    color:", ";\n  }\n\n  a:hover {\n    color:", ";\n  }\n\n"]);
            return o = function () {
                return e
            }, e
        }

        var i = Object(a.c)(o(), (function (e) {
            return e.theme.background
        }), (function (e) {
            return e.theme.background
        }), (function (e) {
            return e.theme.inputPlaceHolderColor
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.textSelection
        }), (function (e) {
            return e.theme.inputPlaceHolderColor
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.highlight
        }));
        t.a = i
    }, 646: function (e, t, n) {
        "use strict";
        var r = n(6), a = n(3);

        function o() {
            var e = Object(r.a)(["\n// Wallet connect\n.walletconnect-wrapper,\n.walletconnect-wrapper *,\n.walletconnect-qrcode__text {\n  font-family: Montserrat, sans-serif !important;\n}\n\n.walletconnect-modal__header {\n  text-align: center !important;\n  display: block !important;\n  background-color: ", " !important;\n  padding: 14px 24px !important;\n  margin-bottom: 40px !important;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 24px !important;\n  width: auto !important;\n  margin: 0 !important;\n}\n\n.walletconnect-modal__base {\n  background: ", " !important;\n  border-radius: 2px !important;\n  max-width: 600px!important;\n  width: 540px!important;\n}\n\n.walletconnect-modal__close__wrapper {\n  top: 18px !important;\n  right: 18px !important;\n}\n\n.walletconnect-modal__close__icon {\n  width: 16px !important;\n  height: 16px !important;\n}\n\n\n.walletconnect-modal__close__icon > div {\n  border: none !important;\n  transition: border-color 150ms ease-in-out 0s;\n  cursor: pointer;\n  background: ", " !important;\n}\n\n.walletconnect-modal__close__icon:hover > div {\n  border: none !important;\n  background: ", " !important;\n}\n\n.walletconnect-modal__close__line1 {\n  height: 3px;\n  width: 90%;\n}\n\n.walletconnect-modal__close__line2 {\n  height: 3px;\n  width: 90%;\n}\n\n.walletconnect-qrcode__text {\n  color: ", " !important;\n}\n.walletconnect-qrcode__image {\n  background: ", '!important;\n  padding: 24px!important;\n  margin: 40px 80px;\n  border-radius: 4px;\n  width: 320px !important;\n  user-select: none !important;\n}\n\n////////////////// I18N ////////////////////////////\n\np.walletconnect-qrcode__text {\n    font-size: 0!important;\n    ::before {\n        font-size: 0.9rem !important;\n        content: "', '";\n    }\n}\n\n']);
            return o = function () {
                return e
            }, e
        }

        var i = Object(a.c)(o(), (function (e) {
            return e.theme.popupHeaderBackground
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.walletConnectI18n.scanQrCode
        }));
        t.a = i
    }, 679: function (e, t, n) {
        "use strict";
        n(142);
        var r = n(68), a = n(4), o = n.n(a), i = n(10), c = n(11), s = n(12), l = n(13), u = n(14), d = (n(67), n(29)),
            p = n(6), m = n(25), f = n(15), h = n(17), b = n(23), g = n(19), y = n(2), v = n(121), x = n(0), E = n.n(x),
            k = n(3);

        function O() {
            var e = Object(p.a)(["\n  margin-left: 20px;\n  background: ", "!important;\n"]);
            return O = function () {
                return e
            }, e
        }

        function w() {
            var e = Object(p.a)(["\n  margin-right: 20px;\n  background: ", "!important;\n"]);
            return w = function () {
                return e
            }, e
        }

        function j() {
            var e = Object(p.a)(["\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  height: 40px !important;\n  width: 180px;\n  border-style: none !important;\n  border-radius: 20px !important;\n  color: ", "!important;\n  text-transform: uppercase !important;\n  transition: 1s !important;\n"]);
            return j = function () {
                return e
            }, e
        }

        var A = Object(k.d)(d.a)(j(), (function (e) {
            return e.theme.textBigButton
        })), C = Object(k.d)(A)(w(), (function (e) {
            return e.theme.red
        })), T = Object(k.d)(A)(O(), (function (e) {
            return e.theme.primary
        })), S = function (e) {
            Object(u.a)(n, e);
            var t = Object(l.a)(n);

            function n() {
                var e;
                Object(c.a)(this, n);
                for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                return (e = t.call.apply(t, [this].concat(a))).state = {loading: !1}, e.onClick = function () {
                    e.setState({loading: !0}), console.log("LogoutModal", window.wallet), window.wallet && "WalletConnect" === window.wallet.walletType ? Object(i.a)(o.a.mark((function t() {
                        return o.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, window.ethereum.close();
                                case 3:
                                    e.props.logoutAll(), t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t.catch(0), console.log(t.t0);
                                case 9:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[0, 6]])
                    })))() : window.wallet && "MetaMask" === window.wallet.walletType && e.props.logoutAll(), setTimeout((function () {
                        e.onClose(), e.setState({loading: !1})
                    }), 100)
                }, e.onClose = function () {
                    e.props.closeModal()
                }, e
            }

            return Object(s.a)(n, [{
                key: "render", value: function () {
                    var e = this;
                    return E.a.createElement(m.c, {
                        centered: !0,
                        width: g.a.modalWidth,
                        title: E.a.createElement(m.f, null, E.a.createElement(y.a, {s: "Logout"})),
                        footer: null,
                        closable: !1,
                        maskClosable: !1,
                        visible: this.props.isVislble,
                        onCancel: function () {
                            return e.onClose()
                        }
                    }, E.a.createElement(r.a, {
                        spinning: this.state.loading,
                        indicator: E.a.createElement(v.a, {title: "Logging out...", marginTop: "80px"})
                    }, E.a.createElement(m.d, null, E.a.createElement(m.b, null, E.a.createElement(y.a, {s: "LogoutInstruct_1"})), E.a.createElement(m.b, null, E.a.createElement(y.a, {s: "LogoutInstruct_2"}))), E.a.createElement(m.d, {style: {textAlign: "center"}}, E.a.createElement(C, {
                        onClick: function () {
                            return e.onClick()
                        }
                    }, E.a.createElement(y.a, {s: "Yes, log me out."})), E.a.createElement(T, {
                        onClick: function () {
                            return e.onClose()
                        }
                    }, E.a.createElement(y.a, {s: "Cancel"})))))
                }
            }]), n
        }(E.a.Component);
        t.a = Object(k.e)(Object(f.c)((function (e) {
            var t = e.modalManager, n = e.dexAccount;
            return {isVislble: t.isLogoutModalVisible, address: n.account.address}
        }), (function (e) {
            return {
                closeModal: function () {
                    return e(Object(b.r)(!1))
                }, logoutAll: function () {
                    return e(Object(h.n)())
                }
            }
        }))(S))
    }, 680: function (e, t, n) {
        "use strict";
        n(142);
        var r = n(68), a = (n(140), n(51)), o = (n(141), n(27)), i = n(4), c = n.n(i), s = n(10), l = n(11), u = n(12),
            d = n(13), p = n(14), m = n(6), f = n(25), h = n(15), b = n(23), g = n(19), y = n(2), v = n(121), x = n(0),
            E = n.n(x), k = n(3), O = n(7), w = n(108), j = n(105), A = n(18), C = n(75), T = n(55);

        function S() {
            var e = Object(m.a)(["\n  cursor: pointer;\n\n  > img {\n    width: auto;\n    height: 45px;\n    margin-top: 30px;\n    margin-bottom: 15px;\n  }\n\n  > div:first-of-type {\n    margin-bottom: 2px;\n\n    > span {\n      font-size: 1rem;\n    }\n  }\n\n  &:hover {\n    > div:first-of-type {\n      > span {\n        color: ", ";\n      }\n    }\n  }\n"]);
            return S = function () {
                return e
            }, e
        }

        var P = k.d.div(S(), (function (e) {
            return e.theme.textBright
        })), I = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                var e;
                Object(l.a)(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).state = {loading: !1}, e.onMetaMaskClick = function () {
                    console.log("onMetaMaskClick"), T.a.trackEvent({
                        type: "SELECT_WALLET",
                        data: {type: "MetaMask"}
                    }), Object(s.a)(c.a.mark((function t() {
                        return c.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, window.ethereum.close();
                                case 3:
                                    t.next = 7;
                                    break;
                                case 5:
                                    t.prev = 5, t.t0 = t.catch(0);
                                case 7:
                                    return t.prev = 7, e.props.connectToMetaMask(!0), e.props.closeModal(), t.finish(7);
                                case 11:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[0, 5, 7, 11]])
                    })))()
                }, e.onWalletConnectClick = function () {
                    console.log("onWalletConnectClick"), T.a.trackEvent({
                        type: "SELECT_WALLET",
                        data: {type: "WalletConnect"}
                    }), Object(s.a)(c.a.mark((function t() {
                        return c.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, window.ethereum.close();
                                case 3:
                                    t.next = 7;
                                    break;
                                case 5:
                                    t.prev = 5, t.t0 = t.catch(0);
                                case 7:
                                    return t.prev = 7, e.props.connectToWalletConnect(!0), e.props.closeModal(), t.finish(7);
                                case 11:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[0, 5, 7, 11]])
                    })))()
                }, e.onClose = function () {
                    e.props.closeModal()
                }, e
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = this;
                    return E.a.createElement(f.c, {
                        centered: !0,
                        width: g.a.modalWidth,
                        title: E.a.createElement(f.f, null, E.a.createElement(y.a, {s: "Connect Wallet"})),
                        footer: null,
                        maskClosable: !1,
                        closeIcon: E.a.createElement(A.a, {icon: C.faTimes}),
                        visible: this.props.isVislble,
                        onCancel: function () {
                            return e.onClose()
                        }
                    }, E.a.createElement(r.a, {
                        spinning: this.state.loading,
                        indicator: E.a.createElement(v.a, {title: "", marginTop: "80px"})
                    }, E.a.createElement(f.d, {style: {textAlign: "center"}}, E.a.createElement(a.a, {className: "row"}, E.a.createElement(o.a, {span: 12}, E.a.createElement(P, {
                        onClick: function () {
                            e.onMetaMaskClick()
                        }
                    }, E.a.createElement("img", {
                        src: "/assets/images/MetaMask.svg",
                        alt: "MetaMask",
                        draggable: "false"
                    }), E.a.createElement("div", null, E.a.createElement(O.e, null, "MetaMask")))), E.a.createElement(o.a, {span: 12}, E.a.createElement(P, {
                        onClick: function () {
                            e.onWalletConnectClick()
                        }
                    }, E.a.createElement("img", {
                        src: "/assets/images/WalletConnect.svg",
                        alt: "WalletConnect",
                        draggable: "false"
                    }), E.a.createElement("div", null, E.a.createElement(O.e, null, "WalletConnect"))))))))
                }
            }]), n
        }(E.a.Component);
        t.a = Object(k.e)(Object(h.c)((function (e) {
            return {isVislble: e.modalManager.isConnectToWalletModalVisiable}
        }), (function (e) {
            return {
                connectToMetaMask: function (t) {
                    return e(Object(w.d)(t))
                }, connectToWalletConnect: function (t) {
                    return e(Object(j.c)(t))
                }, closeModal: function () {
                    return e(Object(b.n)(!1))
                }
            }
        }))(I))
    }, 681: function (e, t, n) {
        "use strict";
        n(142);
        var r = n(68), a = n(4), o = n.n(a), i = n(10), c = n(11), s = n(12), l = n(13), u = n(14), d = n(7), p = n(18),
            m = n(25), f = n(15), h = n(231), b = n(201), g = n(397), y = n(307), v = n(75), x = n(62), E = n(88),
            k = n(103), O = n(26), w = n(22), j = n(46), A = n(23), C = n(3), T = n(19), S = n(192), P = n(378),
            I = n(91), B = n(2), M = n(270), F = n(121), _ = n(227), D = n(0), N = n.n(D), L = n(90), W = n(9),
            z = function (e) {
                Object(u.a)(n, e);
                var t = Object(l.a)(n);

                function n() {
                    var e;
                    Object(c.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(a))).state = {
                        errorMessage1: "",
                        errorToken: "",
                        errorMessage2: "",
                        loading: !1,
                        amount: null,
                        validateAmount: !0,
                        availableAmount: 0,
                        ethBalance: 0,
                        allowance: 0,
                        approveTxCount: 0,
                        ethEnough: !0,
                        processingNum: 1
                    }, e.handleCurrencyTypeSelect = function (t) {
                        e.props.showDepositModal(t), e.loadData(t), e.setState({
                            amount: null,
                            ethEnough: !0,
                            validateAmount: !0
                        })
                    }, e.getFeeCost = function (t) {
                        var n = O.a.fromGWEI(e.props.gasPrice.gasPrice), r = t * W.a.getGasLimitByType("approve").gas,
                            a = W.a.getGasLimitByType("depositTo").gas, o = n.times(r + a),
                            i = W.a.getFeeByType("deposit", e.props.exchange.onchainFees).fee;
                        return Number(W.a.fromWEI("ETH", o.plus(i), e.props.exchange.tokens, {ceil: !0}))
                    }, e.onAmountValueChange = function (t) {
                        var n = e.state.allowance, r = e.props.modalManager.depositToken, a = 0;
                        "ETH" !== r.toUpperCase() && Number(t) > n && (a = 0 === n ? 1 : 2);
                        var o, i = e.getFeeCost(a), c = !0;
                        c = "ETH" !== r.toUpperCase() ? i <= e.state.ethBalance : i + (t && Number(t) >= 0 ? Number(t) : 0) <= e.state.ethBalance, Number.isNaN(Number(t)) || Number(t) <= 0 ? o = !1 : (o = !t) || (o = "ETH" !== r.toUpperCase() ? Number(t) <= e.state.availableAmount : c);
                        var s = "", l = "", u = "", d = e.props.exchange.tokens, p = W.a.getTokenBySymbol(r, d);
                        if (p.symbol && o && 2 === t.split(".").length) {
                            var m = t.split(".")[1].length;
                            (m > p.decimals || 0 === parseFloat(t) && m === p.decimals) && (s = "Maximum_amount_input_decimal_part_1", l = "".concat(p.decimals), u = "Maximum_input_decimal_part_2", o = !1)
                        }
                        e.setState({
                            amount: t,
                            ethEnough: c,
                            validateAmount: o,
                            approveTxCount: a,
                            errorMessage1: s,
                            errorToken: l,
                            errorMessage2: u
                        })
                    }, e.validateAmount = function () {
                        var t = e.state, n = t.amount, r = t.availableAmount;
                        return !!(n && parseFloat(n) > 0 && parseFloat(n) <= r)
                    }, e.sleep = function (e) {
                        return new Promise((function (t) {
                            return setTimeout(t, e)
                        }))
                    }, e.submitDeposit = function () {
                        e.setState({loading: !0}), console.log("DepositModal submitDeposit approveTxCount", e.state.approveTxCount);
                        var t = e.state, n = t.approveTxCount, r = t.amount, a = e.props.modalManager.depositToken;
                        Object(i.a)(o.a.mark((function t() {
                            var i, c, s, l, u, d, p, m;
                            return o.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, i = e.props, c = i.gasPrice, s = i.exchange, l = s.chainId, u = s.tokens, d = s.exchangeAddress, p = s.onchainFees, m = e.props.nonce.nonce, 2 !== n) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.next = 7, window.wallet.approveZero(W.a.getTokenBySymbol(a, u).address, d, l, m, c.gasPrice, !0);
                                    case 7:
                                        if (e.setState({processingNum: e.state.processingNum + 1}), m += 1, console.log("after approveZero"), "WalletConnect" !== Object(w.i)()) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.next = 13, e.sleep(6e3);
                                    case 13:
                                        if (0 === n) {
                                            t.next = 22;
                                            break
                                        }
                                        return t.next = 16, window.wallet.approveMax(W.a.getTokenBySymbol(a, u).address, d, l, m, c.gasPrice, !0);
                                    case 16:
                                        if (m += 1, e.setState({processingNum: e.state.processingNum + 1}), console.log("after approveMax"), "WalletConnect" !== Object(w.i)()) {
                                            t.next = 22;
                                            break
                                        }
                                        return t.next = 22, e.sleep(6e3);
                                    case 22:
                                        return t.next = 24, window.wallet.depositTo({
                                            exchangeAddress: d,
                                            chainId: l,
                                            token: W.a.getTokenBySymbol(a, u),
                                            fee: W.a.getFeeByType("deposit", p).fee,
                                            amount: r,
                                            nonce: m,
                                            gasPrice: c.gasPrice
                                        }, !0);
                                    case 24:
                                        e.setState({processingNum: e.state.processingNum + 1}), Object(j.b)(N.a.createElement(B.a, {s: "DepositInstructionNotification"}), e.props.theme, 15), t.next = 32;
                                        break;
                                    case 28:
                                        t.prev = 28, t.t0 = t.catch(0), console.log(t.t0), Object(j.a)(N.a.createElement(B.a, {s: "DepositInstructionNotificationFailed"}), e.props.theme);
                                    case 32:
                                        return t.prev = 32, e.props.closeModal(), e.setState({
                                            loading: !1,
                                            amount: null,
                                            processingNum: 1
                                        }), t.finish(32);
                                    case 36:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[0, 28, 32, 36]])
                        })))()
                    }, e.onClose = function () {
                        e.props.closeModal()
                    }, e.onClick = function () {
                        !1 !== e.validateAmount() ? (e.setState({validateAmount: !0}), e.submitDeposit()) : e.setState({validateAmount: !1})
                    }, e.enterAmount = function (t) {
                        13 === t.keyCode && (t.preventDefault(), e.onClick())
                    }, e.depositAll = function () {
                        var t, n = e.props.modalManager.depositToken, r = 0;
                        if ("ETH" === n.toUpperCase()) {
                            var a = e.getFeeCost(0);
                            t = Number(e.state.availableAmount) - a
                        } else (t = Number(e.state.availableAmount)) > e.state.allowance && (r = 0 === e.state.allowance ? 1 : 2);
                        e.setState({
                            amount: Math.max(0, t),
                            validateAmount: t > 0,
                            ethEnough: "ETH" === n.toUpperCase() ? t > 0 : e.state.ethEnough,
                            approveTxCount: r
                        })
                    }, e
                }

                return Object(s.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                        var n = this;
                        if ((this.props.isVisible !== e.isVisible || this.props.dexAccount.account.address !== e.dexAccount.account.address) && this.props.isVisible && window.wallet) {
                            var r = this.props.modalManager.depositToken;
                            this.loadData(r, !0), Object(i.a)(o.a.mark((function e() {
                                return o.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            n.props.fetchNonce(n.props.dexAccount.account.address), n.props.fetchGasPrice();
                                        case 2:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                        !1 === this.props.isVisible && this.props.isVisible !== e.isVisible && this.setState({
                            loading: !1,
                            amount: null,
                            validateAmount: !0,
                            availableAmount: 0,
                            ethBalance: 0,
                            allowance: 0,
                            approveTxCount: 0,
                            ethEnough: !0,
                            processingNum: 1
                        })
                    }
                }, {
                    key: "loadData", value: function (e) {
                        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        Object(i.a)(o.a.mark((function r() {
                            var a, i, c, s, l, u, d;
                            return o.a.wrap((function (r) {
                                for (; ;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, Object(x.d)(t.props.dexAccount.account.address, e, t.props.exchange.tokens);
                                    case 3:
                                        if (a = r.sent, "ETH" !== e.toUpperCase()) {
                                            r.next = 8;
                                            break
                                        }
                                        r.t0 = a, r.next = 16;
                                        break;
                                    case 8:
                                        if (!n) {
                                            r.next = 14;
                                            break
                                        }
                                        return r.next = 11, Object(x.d)(t.props.dexAccount.account.address, "ETH", t.props.exchange.tokens);
                                    case 11:
                                        r.t1 = r.sent, r.next = 15;
                                        break;
                                    case 14:
                                        r.t1 = t.state.ethBalance;
                                    case 15:
                                        r.t0 = r.t1;
                                    case 16:
                                        return i = r.t0, r.next = 19, Object(x.c)(t.props.dexAccount.account.address, e, t.props.exchange.tokens);
                                    case 19:
                                        c = r.sent, s = 0, "ETH" !== e.toUpperCase() && t.state.amount && Number(t.state.amount) > c && (s = 0 === c ? 1 : 2), l = t.getFeeCost(s), u = !0, u = "ETH" !== e.toUpperCase() ? l <= i : l + (t.state.amount && Number(t.state.amount) >= 0 ? Number(t.state.amount) : 0) <= i, (d = !t.state.amount) || (d = "ETH" !== e.toUpperCase() ? t.state.amount <= a : u), t.setState({
                                            availableAmount: a,
                                            ethBalance: i,
                                            allowance: c,
                                            ethEnough: u,
                                            approveTxCount: s,
                                            validateAmount: d
                                        }), r.next = 32;
                                        break;
                                    case 30:
                                        r.prev = 30, r.t2 = r.catch(0);
                                    case 32:
                                    case"end":
                                        return r.stop()
                                }
                            }), r, null, [[0, 30]])
                        })))()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.theme, n = this.state, a = n.availableAmount, o = n.approveTxCount,
                            i = n.processingNum, c = this.props.exchange.tokens,
                            s = this.props.modalManager.depositToken, l = this.props.balances.balances,
                            u = W.a.getTokenBySymbol(s, c), f = l.find((function (e) {
                                return e.tokenId === u.tokenId
                            })),
                            x = f ? W.a.fromWEI(u.symbol, O.a.toBig(f.totalAmount).minus(f.frozenAmount), c) : W.a.fromWEI(u.symbol, 0, c),
                            E = c.filter((function (e) {
                                return e.enabled
                            })).map((function (t, n) {
                                var r = {};
                                return r.key = t.symbol, r.text = t.symbol + " - " + t.name, N.a.createElement(d.b, {
                                    key: n,
                                    onClick: function () {
                                        e.handleCurrencyTypeSelect(t.symbol)
                                    }
                                }, N.a.createElement("span", null, t.symbol, " - ", N.a.createElement(B.a, {s: t.name})))
                            })), k = [];
                        return k.push(N.a.createElement(B.a, {s: "MetaMask" === Object(w.i)() ? "metaMaskPendingTxTip" : "walletConnectPendingTxTip"})), 0 === o || (1 === o ? (k.unshift(N.a.createElement("div", null, N.a.createElement(p.a, {
                            icon: 2 === i ? y.faSpinner : b.faClock,
                            style: {marginRight: "8px", color: t.green}
                        }), N.a.createElement(B.a, {s: "depositTipDeposit2"}))), k.unshift(N.a.createElement("div", null, N.a.createElement(p.a, {
                            icon: i > 1 ? h.faCheck : y.faSpinner,
                            style: {marginRight: "8px", color: t.green}
                        }), N.a.createElement(B.a, {s: "depositTipApprove1"})))) : (k.unshift(N.a.createElement("div", null, N.a.createElement(p.a, {
                            icon: 3 === i ? g.faHandPointRight : b.faClock,
                            style: {marginRight: "8px", color: 3 === i ? t.orange : t.textWhite}
                        }), N.a.createElement(B.a, {s: "depositTipDeposit3"}))), k.unshift(N.a.createElement("div", null, N.a.createElement(p.a, {
                            icon: i > 2 ? h.faCheck : 2 === i ? g.faHandPointRight : b.faClock,
                            style: {marginRight: "8px", color: i > 2 ? t.green : 2 === i ? t.orange : t.textWhite}
                        }), N.a.createElement(B.a, {s: "depositTipApprove3_2"}))), k.unshift(N.a.createElement("div", null, N.a.createElement(p.a, {
                            icon: 1 === i ? g.faHandPointRight : h.faCheck,
                            style: {marginRight: "8px", color: 1 === i ? t.orange : t.green}
                        }), N.a.createElement(B.a, {s: "depositTipApproveZero"}))))), N.a.createElement(m.c, {
                            centered: !0,
                            width: T.a.modalWidth,
                            title: N.a.createElement(m.f, null, N.a.createElement(B.a, {s: "Make a Deposit"})),
                            footer: null,
                            maskClosable: !1,
                            closeIcon: N.a.createElement(p.a, {icon: v.faTimes}),
                            visible: this.props.isVisible,
                            onCancel: function () {
                                return e.onClose()
                            }
                        }, N.a.createElement(r.a, {
                            spinning: this.state.loading,
                            indicator: N.a.createElement(F.a, {
                                title: "MetaMask" === Object(w.i)() ? "metamaskConfirm" : "walletConnectConfirm",
                                tips: k,
                                imageUrl: "MetaMask" === Object(w.i)() ? "/assets/images/".concat(t.imgDir, "/metamask_pending.png") : "/assets/images/WalletConnect.svg",
                                marginTop: "80px",
                                textAlign: "MetaMask" === Object(w.i)() ? "left" : "center"
                            })
                        }, N.a.createElement(m.d, null, N.a.createElement(m.b, null, N.a.createElement(B.a, {s: "DepositInstruction_1"})), N.a.createElement("ul", null, N.a.createElement("li", null, N.a.createElement(B.a, {s: "DepositInstruction_Timing"}), N.a.createElement(L.a, {text: "TimingWhy"})), N.a.createElement("li", null, N.a.createElement(B.a, {s: "DepositInstruction_Fee"}), N.a.createElement(L.a, {text: "FeeWhy"})), N.a.createElement("li", null, N.a.createElement(B.a, {s: "DepositInstruction_KeepEther"}), N.a.createElement(L.a, {text: "DepositInstruction_KeepEtherWhy"})))), N.a.createElement(m.d, null, N.a.createElement(I.a, {label: N.a.createElement(B.a, {s: "Asset"})}, N.a.createElement(S.a, {
                            options: E,
                            selected: N.a.createElement("span", null, u.symbol, " - ", N.a.createElement(B.a, {s: u.name}))
                        })), N.a.createElement(I.a, {label: N.a.createElement(B.a, {s: "Amount"})}, N.a.createElement(_.a, {
                            decimals: u.precision,
                            color: this.state.validateAmount ? t.textWhite : t.sellPrimary,
                            value: this.state.amount,
                            onChange: this.onAmountValueChange,
                            onClick: this.onAmountValueClick,
                            suffix: s.toUpperCase(),
                            onKeyDown: this.enterAmount.bind(this)
                        }), N.a.createElement(P.a, {
                            isDeposit: !0,
                            selectedToken: u,
                            amount: this.state.amount,
                            availableAmount: a,
                            ethEnough: this.state.ethEnough,
                            validateAmount: this.state.validateAmount,
                            errorMessage1: this.state.errorMessage1,
                            errorToken: this.state.errorToken,
                            errorMessage2: this.state.errorMessage2
                        }))), N.a.createElement(m.d, null, N.a.createElement(M.a, {
                            label: N.a.createElement(B.a, {s: "Balance on Loopring"}),
                            value: x,
                            unit: s.toUpperCase()
                        }), N.a.createElement(M.a, {
                            label: N.a.createElement(B.a, {s: "Balance on Ethereum"}),
                            value: a,
                            unit: s.toUpperCase(),
                            onClick: function () {
                                return e.depositAll()
                            }
                        })), N.a.createElement(m.d, null, N.a.createElement(d.a, {
                            disabled: this.state.amount <= 0 || !this.state.validateAmount || this.state.loading || !this.state.ethEnough,
                            onClick: function () {
                                return e.onClick()
                            }
                        }, N.a.createElement(B.a, {s: "Deposit"})))))
                    }
                }]), n
            }(N.a.Component);
        t.a = Object(C.e)(Object(f.c)((function (e) {
            var t = e.modalManager, n = e.dexAccount, r = e.balances, a = e.nonce, o = e.gasPrice, i = e.exchange;
            return {
                isVisible: t.isDepositModalVisible,
                modalManager: t,
                dexAccount: n,
                balances: r,
                nonce: a,
                gasPrice: o,
                exchange: i
            }
        }), (function (e) {
            return {
                closeModal: function () {
                    return e(Object(A.o)(!1, ""))
                }, showDepositModal: function (t) {
                    return e(Object(A.o)(!0, t))
                }, fetchNonce: function (t) {
                    return e(Object(k.b)(t))
                }, fetchGasPrice: function () {
                    return e(Object(E.b)())
                }
            }
        }))(z))
    }, 683: function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return r
            }));
            n(11), n(12), n(71), n(28), n(167), n(152);

            function r(e) {
                for (var t = 0, n = 0; t < e.length; t++) n = Math.imul(31, n) + e.charCodeAt(t) | 0;
                return Math.abs(n)
            }
        }).call(this, n(24).Buffer)
    }, 685: function (e, t, n) {
        "use strict";
        n(288);
        var r = n(131), a = n(11), o = n(12), i = n(13), c = n(14), s = (n(579), n(7)), l = n(25), u = n(15), d = n(62),
            p = n(23), m = n(17), f = n(3), h = n(19), b = n(2), g = n(0), y = n.n(g), v = n(18), x = n(75), E = n(26),
            k = function (e) {
                Object(c.a)(n, e);
                var t = Object(i.a)(n);

                function n() {
                    var e;
                    Object(a.a)(this, n);
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(o))).passwordRef = y.a.createRef(), e.state = {
                        loading: !1,
                        password: "",
                        hidePasswordErrorMessage: !0,
                        isPasswordValid: !1,
                        passwordErrorMessage: y.a.createElement(b.a, {s: "Please enter your password!"})
                    }, e.onPasswordChange = function (t) {
                        var n = t.target.value, r = n.length >= 12 && n.length <= 128;
                        e.setState({password: n, hidePasswordErrorMessage: !0, isPasswordValid: r})
                    }, e.pressedButton = function () {
                        var t = !0;
                        if (0 === e.state.password.length) t = !1, e.setState({
                            hidePasswordErrorMessage: !1,
                            passwordErrorMessage: y.a.createElement(b.a, {s: "Please enter your password!"})
                        }); else {
                            var n = e.props.dexAccount.account.keyPairCipherText;
                            null === Object(d.a)(n, E.c.keccakHash(e.state.password)) ? (t = !1, e.setState({
                                hidePasswordErrorMessage: !1,
                                passwordErrorMessage: y.a.createElement(b.a, {s: "InvalidPassword"})
                            })) : e.props.showExportAccountModal(!0)
                        }
                        t && (e.props.updatePassword(e.state.password), e.setState({
                            password: "",
                            hidePasswordErrorMessage: !0
                        }), e.props.showEnterPasswordModal(!1))
                    }, e.passwordEnter = function (t) {
                        13 === t.keyCode && (t.preventDefault(), e.pressedButton())
                    }, e
                }

                return Object(o.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                        !1 === this.props.modalManager.isEnterPasswordModalVisible && this.props.modalManager.isEnterPasswordModalVisible !== e.modalManager.isEnterPasswordModalVisible && this.setState({
                            password: "",
                            loading: !1,
                            hidePasswordErrorMessage: !0,
                            passwordErrorMessage: y.a.createElement(b.a, {s: "Please enter your password!"})
                        }), this.passwordRef.current && this.passwordRef.current.focus()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.theme, n = this.props.dexAccount.account.address,
                            a = y.a.createElement("div", {style: {color: t.textWhite}}, y.a.createElement("div", null, y.a.createElement("span", {
                                style: {
                                    color: t.textWhite,
                                    fontSize: "0.9rem"
                                }
                            }, y.a.createElement(b.a, {s: "PromptForPassword"}))), y.a.createElement("div", {style: {marginBottom: "0px"}}, y.a.createElement("div", null, y.a.createElement("div", {
                                style: {
                                    paddingTop: "24px",
                                    paddingBottom: "9px",
                                    paddingLeft: "0px",
                                    fontSize: "0.9rem"
                                }
                            }, y.a.createElement(b.a, {s: "My Address"})), y.a.createElement("div", {
                                style: {
                                    padding: "10px 16px",
                                    backgroundColor: t.foreground,
                                    color: t.textDim,
                                    borderRadius: "4px",
                                    fontSize: "0.9rem",
                                    border: "1px solid " + t.inputBorderColor
                                }
                            }, n)), y.a.createElement("div", {
                                style: {
                                    paddingTop: "32px",
                                    paddingBottom: "9px",
                                    paddingLeft: "0px",
                                    fontSize: "0.9rem"
                                }
                            }, y.a.createElement(b.a, {s: "Password"})), y.a.createElement(r.a.Password, {
                                autoFocus: !0,
                                autoCapitalize: "off",
                                autoComplete: "off",
                                value: this.state.password,
                                onChange: this.onPasswordChange,
                                onBlur: this.onBlur,
                                placeholder: "",
                                maxLength: 128,
                                style: {color: t.textWhite, fontWeight: "600", fontSize: "0.9rem"},
                                onKeyDown: this.passwordEnter.bind(this),
                                ref: this.passwordRef
                            }), y.a.createElement("div", {
                                style: {
                                    height: "2px",
                                    marginTop: "6px",
                                    marginBottom: "6px"
                                }
                            }, y.a.createElement("span", {
                                style: {
                                    color: t.red,
                                    fontSize: "0.9rem"
                                }
                            }, this.state.hidePasswordErrorMessage ? "" : this.state.passwordErrorMessage))), y.a.createElement("div", {
                                style: {
                                    paddingTop: "40px",
                                    paddingBottom: "2px"
                                }
                            }, y.a.createElement(s.a, {
                                block: !0, onClick: function () {
                                    return e.pressedButton()
                                }, disabled: 0 === this.state.password.length || !this.state.isPasswordValid
                            }, y.a.createElement(b.a, {s: "Export"}))));
                        return y.a.createElement(l.c, {
                            centered: !0,
                            width: h.a.modalWidth,
                            title: y.a.createElement("span", {
                                style: {
                                    color: t.textWhite,
                                    fontWeight: "600",
                                    fontSize: "1.2rem",
                                    userSelect: "none"
                                }
                            }, y.a.createElement(b.a, {s: "Export Account"})),
                            footer: null,
                            maskClosable: !1,
                            closeIcon: y.a.createElement(v.a, {icon: x.faTimes}),
                            visible: this.props.modalManager.isEnterPasswordModalVisible,
                            onOk: function () {
                                return e.props.showEnterPasswordModal(!1)
                            },
                            onCancel: function () {
                                return e.props.showEnterPasswordModal(!1)
                            }
                        }, a)
                    }
                }]), n
            }(y.a.Component);
        t.a = Object(f.e)(Object(u.c)((function (e) {
            return {dexAccount: e.dexAccount, modalManager: e.modalManager}
        }), (function (e) {
            return {
                showEnterPasswordModal: function (t) {
                    return e(Object(p.p)(t))
                }, showExportAccountModal: function (t) {
                    return e(Object(p.q)(t))
                }, updatePassword: function (t) {
                    return e(Object(m.p)(t))
                }
            }
        }))(k))
    }, 686: function (e, t, n) {
        "use strict";
        n(573);
        var r = n(383), a = n(11), o = n(12), i = n(13), c = n(14), s = n(6), l = n(15), u = n(62), d = n(23),
            p = n(19), m = n(2), f = n(0), h = n.n(f), b = n(3), g = n(18), y = n(193), v = n(75);

        function x() {
            var e = Object(s.a)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  padding: 8px 8px;\n  background: ", ";\n  color: ", "\n  border-radius: 4px;\n  border: 1px solid ", ";\n  &:hover {\n    color: ", "\n  }\n  &::selection, &::-moz-selection{\n    background-color: ", "\n  }\n"]);
            return x = function () {
                return e
            }, e
        }

        var E = b.d.div(x(), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.inputBorderColor
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.primary
        })), k = function (e) {
            Object(c.a)(n, e);
            var t = Object(i.a)(n);

            function n() {
                var e;
                Object(a.a)(this, n);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(o))).pressedLogoutButton = function () {
                    e.props.showExportAccountModal(!1)
                }, e
            }

            return Object(o.a)(n, [{
                key: "render", value: function () {
                    var e, t = this, n = this.props.theme, a = null, o = this.props.dexAccount;
                    if (o.account && o.account.accountId) {
                        var i = {exchangeName: "LoopringDEX: Beta 1"};
                        i.exchangeAddress = this.props.exchangeAddress, i.exchangeId = this.props.exchangeId, i.accountAddress = window.wallet ? window.wallet.address : "", i.accountId = this.props.dexAccount.account.accountId, i.apiKey = this.props.dexAccount.account.apiKey, i.publicKeyX = this.props.dexAccount.account.publicKeyX, i.publicKeyY = this.props.dexAccount.account.publicKeyY, i.privateKey = Object(u.a)(o.account.keyPairCipherText, this.props.dexAccount.account.password), a = h.a.createElement("div", {style: {color: n.textWhite}}, h.a.createElement("div", {
                            style: {
                                textAlign: "center",
                                color: n.red,
                                marginTop: "20px"
                            }
                        }, h.a.createElement(g.a, {
                            icon: y.faExclamationTriangle,
                            size: "3x"
                        }), h.a.createElement("div", {
                            style: {
                                textAlign: "left",
                                marginTop: "20px",
                                fontSize: "0.9rem"
                            }
                        }, h.a.createElement(m.a, {s: "exportAccountWarning"}))), h.a.createElement(E, null, (e = i, h.a.createElement("pre", null, JSON.stringify(e, null, 2)))))
                    }
                    return h.a.createElement(r.a, {
                        width: p.a.modalWidth,
                        title: h.a.createElement("span", {
                            style: {
                                color: n.textWhite,
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                userSelect: "none"
                            }
                        }, h.a.createElement(m.a, {s: "Export Account"})),
                        footer: null,
                        maskClosable: !1,
                        closeIcon: h.a.createElement(g.a, {icon: v.faTimes}),
                        visible: this.props.modalManager.isExportAccountModalVisible,
                        onOk: function () {
                            return t.props.showExportAccountModal(!1)
                        },
                        onCancel: function () {
                            return t.props.showExportAccountModal(!1)
                        }
                    }, a)
                }
            }]), n
        }(h.a.Component);
        t.a = Object(b.e)(Object(l.c)((function (e) {
            var t = e.modalManager, n = e.dexAccount, r = e.exchange;
            return {modalManager: t, dexAccount: n, exchangeId: r.exchangeId, exchangeAddress: r.exchangeAddress}
        }), (function (e) {
            return {
                showExportAccountModal: function (t) {
                    return e(Object(d.q)(t))
                }
            }
        }))(k))
    }, 687: function (e, t, n) {
        "use strict";
        var r = n(11), a = n(12), o = n(13), i = n(14), c = n(25), s = n(3), l = n(19), u = n(2), d = n(0), p = n.n(d),
            m = function (e) {
                Object(i.a)(n, e);
                var t = Object(o.a)(n);

                function n() {
                    return Object(r.a)(this, n), t.apply(this, arguments)
                }

                return Object(a.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props.theme;
                        return p.a.createElement("div", null, p.a.createElement(c.c, {
                            centered: !0,
                            width: l.a.modalWidth,
                            title: p.a.createElement(c.f, null, p.a.createElement(u.a, {s: "MaintenanceModalTitle"})),
                            closable: !1,
                            footer: null,
                            visible: this.props.isVisible
                        }, p.a.createElement(c.d, {style: {textAlign: "center"}}, p.a.createElement("img", {
                            width: "120px",
                            height: "120px",
                            draggable: "false",
                            style: {
                                borderRadius: "50%",
                                border: "6px solid " + e.red,
                                padding: "16px",
                                margin: "30px",
                                userSelect: "none"
                            },
                            alt: "maintaince",
                            src: "/assets/images/".concat(e.imgDir, "/maintain.svg")
                        }), p.a.createElement(c.b, {
                            style: {
                                paddingTop: "20px",
                                textAlign: "center"
                            }
                        }, p.a.createElement("p", null, p.a.createElement(u.a, {s: "MaintenanceModalInstruction1"})), p.a.createElement("p", null, p.a.createElement(u.a, {s: "MaintenanceModalInstruction2"}))))))
                    }
                }]), n
            }(p.a.Component);
        t.a = Object(s.e)(m)
    }, 688: function (e, t, n) {
        "use strict";
        n(142);
        var r = n(68), a = (n(288), n(131)), o = n(4), i = n.n(o), c = n(8), s = n(10), l = n(11), u = n(12),
            d = n(106), p = n(13), m = n(14), f = n(7), h = n(25), b = n(17), g = n(15), y = n(36), v = n(23),
            x = n(19), E = n(91), k = n(2), O = n(121), w = n(0), j = n.n(w), A = n(18), C = n(62), T = n(26), S = n(3),
            P = n(75), I = function (e) {
                Object(m.a)(n, e);
                var t = Object(p.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).passwordRef = j.a.createRef(), e.state = {
                        password: "",
                        error: "",
                        loading: !1
                    }, e.onPasswordChange = function (t) {
                        var n = t.target.value;
                        e.setState({password: n, error: "", loading: !1})
                    }, e.onClose = function () {
                        e.props.closeModal()
                    }, e.onClick = function () {
                        e.setState({loading: !0});
                        var t = Object(d.a)(e), n = e.props.updateAccount, r = e.props.dexAccount.account;
                        Object(s.a)(i.a.mark((function e() {
                            var a, o, s, l, u;
                            return i.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, a = T.c.keccakHash(t.state.password), !(o = window.wallet.generateKeyPair(t.state.password)).secretKey || o.publicKeyX !== r.publicKeyX || o.publicKeyY !== r.publicKeyY) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 6, Object(y.m)(window.wallet.address);
                                    case 6:
                                        s = e.sent, l = Object(C.b)(o.secretKey, a), u = s.isFreeze ? b.g : b.b, n(Object(c.a)({}, r, {
                                            state: u,
                                            keyPairCipherText: l,
                                            password: a
                                        })), t.onClose(), t.setState({loading: !1}), e.next = 15;
                                        break;
                                    case 14:
                                        throw new Error("Invalid password");
                                    case 15:
                                        e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(0), t.setState({
                                            password: "",
                                            loading: !1,
                                            error: j.a.createElement(k.a, {s: "InvalidPassword"})
                                        });
                                    case 20:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 17]])
                        })))()
                    }, e.onPasswordEnter = function (t) {
                        13 === t.keyCode && (t.preventDefault(), e.onClick())
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                        !1 === this.props.isVisible && this.props.isVisible !== e.isVisible && this.setState({
                            password: "",
                            error: ""
                        }), this.passwordRef.current && this.passwordRef.current.focus()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.theme;
                        return j.a.createElement(h.c, {
                            centered: !0,
                            width: x.a.modalWidth,
                            title: j.a.createElement(h.f, null, j.a.createElement(k.a, {s: "Login"})),
                            footer: null,
                            maskClosable: !1,
                            closeIcon: j.a.createElement(A.a, {icon: P.faTimes}),
                            visible: this.props.isVisible,
                            onCancel: function () {
                                return e.onClose()
                            }
                        }, j.a.createElement(r.a, {
                            spinning: this.state.loading,
                            indicator: j.a.createElement(O.a, {title: "Logging in...", marginTop: "80px"})
                        }, j.a.createElement(h.d, null, j.a.createElement(E.a, {label: j.a.createElement(k.a, {s: "My Address"})}, j.a.createElement(h.a, null, this.props.dexAccount.account.address)), j.a.createElement(E.a, {label: j.a.createElement(k.a, {s: "Password"})}, j.a.createElement(a.a.Password, {
                            autoFocus: !0,
                            autoCapitalize: "off",
                            autoComplete: "off",
                            value: this.state.password,
                            onChange: this.onPasswordChange,
                            placeholder: "",
                            maxLength: 128,
                            style: {color: t.textWhite},
                            onKeyDown: this.onPasswordEnter.bind(this),
                            ref: this.passwordRef
                        }), j.a.createElement("div", {
                            style: {
                                marginTop: "6px",
                                height: "20px"
                            }
                        }, j.a.createElement(h.e, null, this.state.error)))), j.a.createElement(h.d, null, j.a.createElement(E.a, null, j.a.createElement("div", {style: {height: "20px"}}, j.a.createElement("a", {
                            href: !0,
                            onClick: function () {
                                e.props.closeModal(), e.props.resetPasswordModal(!0)
                            },
                            style: {float: "right"}
                        }, j.a.createElement(k.a, {s: "Forgot password?"}))))), j.a.createElement(h.d, null, j.a.createElement(E.a, null, j.a.createElement(f.a, {
                            disabled: !this.state.password,
                            onClick: function () {
                                return e.onClick()
                            }
                        }, j.a.createElement(k.a, {s: "Login"}))))))
                    }
                }]), n
            }(j.a.Component);
        t.a = Object(S.e)(Object(g.c)((function (e) {
            var t = e.modalManager, n = e.dexAccount;
            return {isVisible: t.isLoginModalVisible, modalManager: t, dexAccount: n}
        }), (function (e) {
            return {
                closeModal: function () {
                    return e(Object(v.k)(!1))
                }, resetPasswordModal: function (t) {
                    return e(Object(v.m)(t))
                }, updateAccount: function (t) {
                    return e(Object(b.o)(t))
                }, updatePassword: function (t) {
                    return e(Object(b.p)(t))
                }
            }
        }))(I))
    }, 691: function (e, t, n) {
        "use strict";
        var r = n(4), a = n.n(r), o = n(10), i = n(11), c = n(12), s = n(13), l = n(14), u = n(25), d = n(17),
            p = n(15), m = n(88), f = n(103), h = n(46), b = n(23), g = n(3), y = n(2), v = n(0), x = n.n(v), E = n(90),
            k = n(62), O = n(26), w = n(391), j = n(9), A = function (e) {
                Object(l.a)(n, e);
                var t = Object(s.a)(n);

                function n() {
                    var e;
                    Object(i.a)(this, n);
                    for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(c))).title = x.a.createElement(y.a, {s: "Register Account"}), e.buttonLabel = x.a.createElement(y.a, {s: "Register Account"}), e.instructions = x.a.createElement(u.d, null, x.a.createElement(u.b, null, x.a.createElement(y.a, {s: "RegisterAccountInstruction_1"})), x.a.createElement("ul", null, x.a.createElement("li", null, x.a.createElement(y.a, {s: "RegisterAccountInstruction_Timing"}), x.a.createElement(E.a, {text: "TimingWhy"})), x.a.createElement("li", null, x.a.createElement(y.a, {s: "RegisterAccountInstruction_Fee"}), x.a.createElement(E.a, {text: "RegisterAccountInstruction_FeeWhy"})))), e.onProceed = function () {
                        if (e.setState({loading: !0}), e.state.password.length > 0 && e.state.isPasswordValid) {
                            var t = e.props, n = t.exchange, r = t.nonce, i = t.gasPrice, c = e.state.password;
                            Object(o.a)(a.a.mark((function t() {
                                var o, s, l, u, p, m;
                                return a.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, o = O.c.keccakHash(c), s = O.a.toBig(j.a.getFeeByType("create", n.onchainFees).fee).plus(j.a.getFeeByType("deposit", n.onchainFees).fee), t.next = 5, window.wallet.createOrUpdateAccount(c, {
                                                exchangeAddress: n.exchangeAddress,
                                                fee: s.toString(),
                                                chainId: n.chainId,
                                                token: j.a.getTokenBySymbol("ETH", n.tokens),
                                                amount: "",
                                                permission: "",
                                                nonce: r.nonce,
                                                gasPrice: i.gasPrice
                                            }, !0);
                                        case 5:
                                            if (l = t.sent, void 0 !== (u = l.keyPair).secretKey) {
                                                t.next = 9;
                                                break
                                            }
                                            throw new Error("Failed to parse the response of account creation.");
                                        case 9:
                                            p = Object(k.b)(u.secretKey, o), m = {
                                                address: window.wallet.address,
                                                publicKeyX: u.publicKeyX,
                                                publicKeyY: u.publicKeyY,
                                                keyPairCipherText: p,
                                                state: d.f,
                                                password: o
                                            }, e.props.updateAccount(m), Object(h.b)(x.a.createElement(y.a, {s: "AccountBeingRegisteredNotification"}), e.props.theme), t.next = 19;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t.catch(0), console.log(t.t0), Object(h.a)(x.a.createElement(y.a, {s: "AccountRegistrationFailedNotofication"}), e.props.theme);
                                        case 19:
                                            return t.prev = 19, e.setState({
                                                password: "",
                                                repeatedPassword: ""
                                            }), e.onClose(), t.finish(19);
                                        case 23:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 15, 19, 23]])
                            })))()
                        }
                    }, e
                }

                return Object(c.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                        var n = this;
                        this.props.isVisible !== e.isVisible && (!1 === this.props.isVisible && this.reset(), !0 === this.props.isVisible && this.props.dexAccount.account.address && Object(o.a)(a.a.mark((function e() {
                            return a.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        n.props.fetchNonce(n.props.dexAccount.account.address), n.props.fetchGasPrice();
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))())
                    }
                }]), n
            }(w.a);
        t.a = Object(g.e)(Object(p.c)((function (e) {
            var t = e.dexAccount, n = e.modalManager, r = e.nonce, a = e.gasPrice, o = e.exchange;
            return {
                dexAccount: t,
                isVisible: n.isRegisterAccountModalVisible,
                modalManager: n,
                nonce: r,
                gasPrice: a,
                exchange: o
            }
        }), (function (e) {
            return {
                closeModal: function () {
                    return e(Object(b.l)(!1))
                }, updateAccount: function (t) {
                    return e(Object(d.o)(t))
                }, updatePassword: function (t) {
                    return e(Object(d.p)(t))
                }, fetchNonce: function (t) {
                    return e(Object(f.b)(t))
                }, fetchGasPrice: function () {
                    return e(Object(m.b)())
                }
            }
        }))(A))
    }, 692: function (e, t, n) {
        "use strict";
        var r = n(4), a = n.n(r), o = n(8), i = n(10), c = n(11), s = n(12), l = n(13), u = n(14), d = n(25), p = n(17),
            m = n(15), f = n(62), h = n(88), b = n(103), g = n(26), y = n(23), v = n(46), x = n(22), E = n(3),
            k = n(391), O = n(2), w = n(0), j = n.n(w), A = n(90), C = n(9), T = function (e) {
                Object(u.a)(n, e);
                var t = Object(l.a)(n);

                function n() {
                    var e;
                    Object(c.a)(this, n);
                    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++) s[l] = arguments[l];
                    return (e = t.call.apply(t, [this].concat(s))).title = j.a.createElement(O.a, {s: "Reset Password"}), e.buttonLabel = j.a.createElement(O.a, {s: "Reset Password"}), e.instructions = j.a.createElement(d.d, null, j.a.createElement(d.b, null, j.a.createElement(O.a, {s: "ResetPasswordInstruction_1"})), j.a.createElement("ul", null, j.a.createElement("li", null, j.a.createElement(O.a, {s: "ResetPasswordInstruction_Timing"}), j.a.createElement(A.a, {text: "TimingWhy"})), j.a.createElement("li", null, j.a.createElement(O.a, {s: "ResetPasswordInstruction_Fee"}), j.a.createElement(A.a, {text: "FeeWhy"})))), e.processChange = function (t, n, r) {
                        Object(x.u)({
                            address: window.wallet.address,
                            from: {publicKeyX: n.account.publicKeyX, publicKeyY: n.account.publicKeyY},
                            to: {publicKeyX: r.publicKeyX, publicKeyY: r.publicKeyY}
                        }), e.props.updateAccount(r)
                    }, e.onProceed = function () {
                        if (e.setState({loading: !0}), e.state.password.length > 0 && e.state.isPasswordValid) {
                            var t = e.props, n = t.dexAccount, r = t.exchange, c = t.nonce, s = t.gasPrice,
                                l = e.state.password;
                            Object(i.a)(a.a.mark((function t() {
                                var i, u, d, m, h, b;
                                return a.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, i = g.c.keccakHash(l), u = g.a.toBig(C.a.getFeeByType("update", r.onchainFees).fee).plus(C.a.getFeeByType("deposit", r.onchainFees).fee), t.next = 5, window.wallet.createOrUpdateAccount(l, {
                                                from: window.wallet.address,
                                                exchangeAddress: r.exchangeAddress,
                                                fee: u.toString(),
                                                chainId: r.chainId,
                                                token: C.a.getTokenBySymbol("ETH", r.tokens),
                                                amount: "",
                                                permission: "",
                                                nonce: c.nonce,
                                                gasPrice: s.gasPrice
                                            }, !0);
                                        case 5:
                                            if (d = t.sent, void 0 !== (m = d.keyPair).secretKey) {
                                                t.next = 9;
                                                break
                                            }
                                            throw new Error("Failed to parse the response of account creation.");
                                        case 9:
                                            h = Object(f.b)(m.secretKey, i), b = Object(o.a)({}, n.account, {
                                                publicKeyX: m.publicKeyX,
                                                publicKeyY: m.publicKeyY,
                                                keyPairCipherText: h,
                                                state: p.g,
                                                password: i
                                            }), e.processChange(window.wallet.address, n, b), Object(v.b)(j.a.createElement(O.a, {s: "PasswordResetNotification"}), e.props.theme), t.next = 19;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t.catch(0), console.log(t.t0), Object(v.a)(j.a.createElement(O.a, {s: "PasswordResetFailedNotofication"}), e.props.theme);
                                        case 19:
                                            return t.prev = 19, e.setState({
                                                isPasswordValid: !0,
                                                password: "",
                                                repeatedPassword: "",
                                                passwordMismatch: !1
                                            }), e.onClose(), t.finish(19);
                                        case 23:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 15, 19, 23]])
                            })))()
                        }
                    }, e
                }

                return Object(s.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                        var n = this;
                        this.props.isVisible !== e.isVisible && (!1 === this.props.isVisible && this.reset(), !0 === this.props.isVisible && this.props.dexAccount.account.address && Object(i.a)(a.a.mark((function e() {
                            return a.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        n.props.fetchNonce(n.props.dexAccount.account.address), n.props.fetchGasPrice();
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))())
                    }
                }]), n
            }(k.a);
        t.a = Object(E.e)(Object(m.c)((function (e) {
            var t = e.modalManager, n = e.dexAccount, r = e.nonce, a = e.gasPrice, o = e.exchange;
            return {
                isVisible: t.isResetPasswordModalVisible,
                modalManager: t,
                dexAccount: n,
                nonce: r,
                gasPrice: a,
                exchange: o
            }
        }), (function (e) {
            return {
                showLoginModal: function () {
                    return e(Object(y.k)(!0))
                }, closeModal: function () {
                    return e(Object(y.m)(!1))
                }, updateAccount: function (t) {
                    return e(Object(p.o)(t))
                }, updatePassword: function (t) {
                    return e(Object(p.p)(t))
                }, fetchNonce: function (t) {
                    return e(Object(b.b)(t))
                }, fetchGasPrice: function () {
                    return e(Object(h.b)())
                }
            }
        }))(T))
    }, 693: function (e, t, n) {
        "use strict";
        n(142);
        var r = n(68), a = n(4), o = n.n(a), i = n(10), c = n(11), s = n(12), l = n(13), u = n(14), d = n(7), p = n(18),
            m = n(25), f = n(15), h = n(88), b = n(103), g = n(62), y = n(23), v = n(3), x = n(19), E = n(192),
            k = n(378), O = n(91), w = n(2), j = n(270), A = n(121), C = n(227), T = n(0), S = n.n(T), P = n(90),
            I = n(75), B = n(26), M = n(22), F = n(46), _ = n(9), D = function (e) {
                Object(u.a)(n, e);
                var t = Object(l.a)(n);

                function n() {
                    var e;
                    Object(c.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(a))).state = {
                        errorMessage1: "",
                        errorToken: "",
                        errorMessage2: "",
                        loading: !1,
                        amount: null,
                        ethBalance: 0,
                        ethEnough: !0,
                        validateAmount: !0,
                        availableAmount: 0
                    }, e.handleCurrencyTypeSelect = function (t) {
                        var n = e.getAvailableAmount(t, e.props.balances.balances);
                        e.props.showModal(t), e.setState({
                            amount: null,
                            ethEnough: !0,
                            validateAmount: !0,
                            availableAmount: n
                        })
                    }, e.getAvailableAmount = function (t, n) {
                        var r = e.props.exchange.tokens, a = _.a.getTokenBySymbol(t, r), o = n.find((function (e) {
                            return e.tokenId === a.tokenId
                        }));
                        return o ? _.a.fromWEI(a.symbol, B.a.toBig(o.totalAmount).minus(o.frozenAmount), r, {ceil: !0}) : _.a.fromWEI(a.symbol, 0, r)
                    }, e.getFeeCost = function () {
                        var t = B.a.fromGWEI(e.props.gasPrice.gasPrice), n = _.a.getGasLimitByType("withdraw").gas,
                            r = t.times(n), a = _.a.getFeeByType("withdraw", e.props.exchange.onchainFees).fee;
                        return Number(_.a.fromWEI("ETH", r.plus(a), e.props.exchange.tokens, {ceil: !0}))
                    }, e.onAmountValueChange = function (t) {
                        var n, r = e.props.modalManager.withdrawalToken;
                        n = !(Number.isNaN(Number(t)) || Number(t) <= 0) && (!t || Number(t) <= e.state.availableAmount);
                        var a = "", o = "", i = "", c = e.props.exchange.tokens, s = _.a.getTokenBySymbol(r, c);
                        if (s.symbol && n && 2 === t.split(".").length) {
                            var l = t.split(".")[1].length;
                            (l > s.decimals || 0 === parseFloat(t) && l === s.decimals) && (a = "Maximum_amount_input_decimal_part_1", o = "".concat(s.decimals), i = "Maximum_input_decimal_part_2", n = !1)
                        }
                        e.setState({amount: t, validateAmount: n, errorMessage1: a, errorToken: o, errorMessage2: i})
                    }, e.validateAmount = function () {
                        var t = e.state, n = t.amount, r = t.availableAmount;
                        return !!(n && parseFloat(n) > 0 && r >= parseFloat(n))
                    }, e.submitWithdraw = function () {
                        e.setState({loading: !0}), console.log("submitWithdraw");
                        var t = e.props.modalManager.withdrawalToken;
                        Object(i.a)(o.a.mark((function n() {
                            var r, a, i, c, s;
                            return o.a.wrap((function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, r = e.props.exchange, a = r.tokens, i = r.onchainFees, c = r.exchangeAddress, s = r.chainId, console.log("Before window.wallet.onchainWithdrawal"), n.next = 5, window.wallet.onchainWithdrawal({
                                            exchangeAddress: c,
                                            chainId: s,
                                            token: _.a.getTokenBySymbol(t, a),
                                            amount: e.state.amount,
                                            nonce: e.props.nonce.nonce,
                                            gasPrice: e.props.gasPrice.gasPrice,
                                            fee: _.a.getFeeByType("withdraw", i).fee
                                        }, !0);
                                    case 5:
                                        Object(F.b)(S.a.createElement(w.a, {s: "WithdrawInstructionNotification"}), e.props.theme, 15), n.next = 12;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(0), Object(F.a)(S.a.createElement(w.a, {s: "WithdrawInstructionNotificationFailed"}), e.props.theme), console.log(n.t0);
                                    case 12:
                                        return n.prev = 12, e.props.closeModal(), e.setState({loading: !1}), n.finish(12);
                                    case 16:
                                    case"end":
                                        return n.stop()
                                }
                            }), n, null, [[0, 8, 12, 16]])
                        })))()
                    }, e.onClick = function () {
                        !1 !== e.validateAmount() ? (e.setState({validateAmount: !0}), e.submitWithdraw()) : e.setState({validateAmount: !1})
                    }, e.enterAmount = function (t) {
                        13 === t.keyCode && (t.preventDefault(), e.onClick())
                    }, e.withdrawAll = function () {
                        e.setState({amount: e.state.availableAmount, validateAmount: !0})
                    }, e
                }

                return Object(s.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                        var n = this;
                        if (this.props.isVisible && (this.props.dexAccount.account.address !== e.dexAccount.account.address || this.props.isVisible !== e.isVisible) && window.wallet) {
                            var r = this.props.balances.balances, a = this.props.modalManager.withdrawalToken;
                            Object(i.a)(o.a.mark((function e() {
                                var t, r;
                                return o.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(g.d)(n.props.dexAccount.account.address, "ETH", n.props.exchange.tokens);
                                        case 2:
                                            t = e.sent, r = n.getFeeCost(), n.setState({ethBalance: t, ethEnough: r <= t});
                                        case 5:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })))();
                            var c = this.getAvailableAmount(a, r);
                            Object(i.a)(o.a.mark((function e() {
                                return o.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            n.props.fetchNonce(n.props.dexAccount.account.address), n.props.fetchGasPrice();
                                        case 2:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })))(), this.setState({
                                availableAmount: c,
                                validateAmount: !this.state.amount || Number(this.state.amount) <= c
                            })
                        }
                        !1 === this.props.isVisible && this.props.isVisible !== e.isVisible && this.setState({
                            loading: !1,
                            amount: null,
                            validateAmount: !0,
                            availableAmount: 0
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.theme, n = this.props.exchange.tokens,
                            a = this.props.modalManager.withdrawalToken, o = _.a.getTokenBySymbol(a, n),
                            i = n.filter((function (e) {
                                return e.enabled
                            })).map((function (t, n) {
                                var r = {};
                                return r.key = t.symbol, r.text = t.symbol + " - " + t.name, S.a.createElement(d.b, {
                                    key: n,
                                    onClick: function () {
                                        e.handleCurrencyTypeSelect(t.symbol)
                                    }
                                }, S.a.createElement("span", null, t.symbol, " - ", S.a.createElement(w.a, {s: t.name})))
                            }));
                        return S.a.createElement(m.c, {
                            centered: !0,
                            width: x.a.modalWidth,
                            title: S.a.createElement(m.f, null, S.a.createElement(w.a, {s: "Make a Withdrawal"})),
                            footer: null,
                            maskClosable: !1,
                            closeIcon: S.a.createElement(p.a, {icon: I.faTimes}),
                            visible: this.props.isVisible,
                            onCancel: function () {
                                return e.props.closeModal()
                            }
                        }, S.a.createElement(r.a, {
                            spinning: this.state.loading,
                            indicator: S.a.createElement(A.a, {
                                title: "MetaMask" === Object(M.i)() ? "metamaskConfirm" : "walletConnectConfirm",
                                tips: [S.a.createElement("div", {key: "1"}, S.a.createElement(w.a, {s: "MetaMask" === Object(M.i)() ? "metaMaskPendingTxTip" : "walletConnectPendingTxTip"}))],
                                imageUrl: "MetaMask" === Object(M.i)() ? "/assets/images/".concat(t.imgDir, "/metamask_pending.png") : "/assets/images/WalletConnect.svg",
                                marginTop: "80px",
                                textAlign: "MetaMask" === Object(M.i)() ? "left" : "center"
                            })
                        }, S.a.createElement(m.d, null, S.a.createElement(m.b, null, S.a.createElement(w.a, {s: "WithdrawInstruction_1"})), S.a.createElement("ul", null, S.a.createElement("li", null, S.a.createElement(w.a, {s: "WithdrawInstruction_Timing"}), S.a.createElement(P.a, {text: "TimingWhy"})), S.a.createElement("li", null, S.a.createElement(w.a, {s: "WithdrawInstruction_Fee"}), " ", S.a.createElement(P.a, {text: "FeeWhy"})))), S.a.createElement(m.d, null, S.a.createElement(O.a, {label: S.a.createElement(w.a, {s: "Asset"})}, S.a.createElement(E.a, {
                            options: i,
                            selected: S.a.createElement("span", null, o.symbol, " - ", S.a.createElement(w.a, {s: o.name}))
                        })), S.a.createElement(O.a, {label: S.a.createElement(w.a, {s: "Amount"})}, S.a.createElement(C.a, {
                            decimals: o.precision,
                            color: this.state.validateAmount ? t.textWhite : t.sellPrimary,
                            value: this.state.amount,
                            onChange: this.onAmountValueChange,
                            onClick: this.onAmountValueClick,
                            suffix: a.toUpperCase(),
                            fontSize: "0.9rem",
                            onKeyDown: this.enterAmount.bind(this)
                        }), S.a.createElement(k.a, {
                            isDeposit: !1,
                            selectedToken: o,
                            amount: this.state.amount,
                            availableAmount: this.state.availableAmount,
                            ethEnough: this.state.ethEnough,
                            validateAmount: this.state.validateAmount,
                            errorMessage1: this.state.errorMessage1,
                            errorToken: this.state.errorToken,
                            errorMessage2: this.state.errorMessage2
                        }))), S.a.createElement(m.d, null, S.a.createElement(j.a, {
                            label: S.a.createElement(w.a, {s: "Balance on Loopring"}),
                            value: this.state.availableAmount,
                            unit: a.toUpperCase(),
                            onClick: function () {
                                return e.withdrawAll()
                            }
                        }), S.a.createElement(j.a, {
                            label: S.a.createElement(w.a, {s: "Available to withdraw"}),
                            value: this.state.availableAmount,
                            unit: a.toUpperCase()
                        })), S.a.createElement(m.d, null, S.a.createElement(d.a, {
                            disabled: this.state.amount <= 0 || !this.state.validateAmount || this.state.loading || !this.state.ethEnough,
                            onClick: function () {
                                return e.onClick()
                            }
                        }, S.a.createElement(w.a, {s: "Withdraw"})))))
                    }
                }]), n
            }(S.a.Component);
        t.a = Object(v.e)(Object(f.c)((function (e) {
            var t = e.modalManager, n = e.dexAccount, r = e.balances, a = e.nonce, o = e.gasPrice, i = e.exchange;
            return {
                isVisible: t.isWithdrawModalVisible,
                modalManager: t,
                dexAccount: n,
                balances: r,
                nonce: a,
                gasPrice: o,
                exchange: i
            }
        }), (function (e) {
            return {
                closeModal: function () {
                    return e(Object(y.t)(!1))
                }, showModal: function (t) {
                    return e(Object(y.t)(!0, t))
                }, fetchNonce: function (t) {
                    return e(Object(b.b)(t))
                }, fetchGasPrice: function () {
                    return e(Object(h.b)())
                }
            }
        }))(D))
    }, 7: function (e, t, n) {
        "use strict";
        n.d(t, "p", (function () {
            return C
        })), n.d(t, "r", (function () {
            return S
        })), n.d(t, "e", (function () {
            return P
        })), n.d(t, "o", (function () {
            return I
        })), n.d(t, "a", (function () {
            return M
        })), n.d(t, "n", (function () {
            return F
        })), n.d(t, "d", (function () {
            return _
        })), n.d(t, "s", (function () {
            return D
        })), n.d(t, "c", (function () {
            return N
        })), n.d(t, "m", (function () {
            return T
        })), n.d(t, "q", (function () {
            return L
        })), n.d(t, "f", (function () {
            return W
        })), n.d(t, "h", (function () {
            return z
        })), n.d(t, "l", (function () {
            return H
        })), n.d(t, "j", (function () {
            return R
        })), n.d(t, "k", (function () {
            return U
        })), n.d(t, "i", (function () {
            return V
        })), n.d(t, "g", (function () {
            return K
        })), n.d(t, "b", (function () {
            return Y
        }));
        n(67);
        var r = n(29), a = (n(323), n(72)), o = n(6), i = n(3);

        function c() {
            var e = Object(o.a)(["\n  border-bottom-style: solid;\n  border-bottom-color: ", ";\n  border-bottom-width: 1px;\n\n  height: ", ";\n\n  > span {\n    line-height: ", ";\n    font-size: ", ";\n  }\n"]);
            return c = function () {
                return e
            }, e
        }

        function s() {
            var e = Object(o.a)(["\n  max-width: 1200px;\n  width: 100%;\n  display: table;\n  margin: 0 auto;\n  margin-bottom: 20px;\n"]);
            return s = function () {
                return e
            }, e
        }

        function l() {
            var e = Object(o.a)(["\n  color: ", ";\n"]);
            return l = function () {
                return e
            }, e
        }

        function u() {
            var e = Object(o.a)(["\n  color: ", ";\n"]);
            return u = function () {
                return e
            }, e
        }

        function d() {
            var e = Object(o.a)(["\n  color: ", ";\n"]);
            return d = function () {
                return e
            }, e
        }

        function p() {
            var e = Object(o.a)(["\n  text-align: center;\n  color: ", ";\n\n  & > div {\n    display: inline-block;\n    min-width: 60px;\n    text-align: left;\n  }\n"]);
            return p = function () {
                return e
            }, e
        }

        function m() {
            var e = Object(o.a)(["\n  font-size: 0.85rem;\n  font-weight: 400;\n"]);
            return m = function () {
                return e
            }, e
        }

        function f() {
            var e = Object(o.a)(["\n  min-height: 540px;\n  max-width: 1200px;\n  width: 100%;\n  display: table;\n  margin: 0 auto;\n"]);
            return f = function () {
                return e
            }, e
        }

        function h() {
            var e = Object(o.a)(["\n  min-height: 540px;\n  max-width: 1200px;\n  width: 100%;\n  display: table;\n  margin: 0 auto;\n"]);
            return h = function () {
                return e
            }, e
        }

        function b() {
            var e = Object(o.a)(["\n  color: ", "!important;\n\n  &:focus {\n    color: ", "!important;\n    background-color: transparent !important;\n    border: 1px solid ", "!important;\n  }\n\n  &:hover {\n    color: ", "!!important;\n    background-color: transparent !important;\n    border: 1px solid ", "!important;\n  }\n"]);
            return b = function () {
                return e
            }, e
        }

        function g() {
            var e = Object(o.a)(["\n  color: ", "!important;\n\n  &:focus {\n    color: ", "!important;\n    background-color: transparent !important;\n    border: 1px solid ", "!important;\n  }\n\n  &:hover {\n    color: ", "!important;\n    background-color: transparent !important;\n    border: 1px solid ", "!important;\n  }\n"]);
            return g = function () {
                return e
            }, e
        }

        function y() {
            var e = Object(o.a)(["\n  border: 1px solid ", "!important;\n  height: 22px !important;\n  font-size: 0.85rem !important;\n  font-weight: 500;\n  padding-top: inherit !important;\n  padding-bottom: inherit !important;\n  background-color: transparent;\n"]);
            return y = function () {
                return e
            }, e
        }

        function v() {
            var e = Object(o.a)(["\n  &:not([disabled]) {\n    background: ", "!important;\n  }\n"]);
            return v = function () {
                return e
            }, e
        }

        function x() {
            var e = Object(o.a)(["\n  font-size: 1rem!important;\n  font-weight: 600!important;\n  height: 40px!important;\n  width: 100%;\n  border-style: none!important;\n  border-radius: 20px!important;\n  color: ", "!important;\n  text-transform: uppercase!important;\n  transition: 1s!important;\n\n  &:hover {\n  }\n\n  &[disabled],&[disabled]:hover {\n    background: ", "!important;\n    color: ", "!important;\n  }\n}\n"]);
            return x = function () {
                return e
            }, e
        }

        function E() {
            var e = Object(o.a)(["\n  padding-right: 0px;\n  font-weight: 400;\n  font-size: 0.85rem;\n  color: ", ";\n"]);
            return E = function () {
                return e
            }, e
        }

        function k() {
            var e = Object(o.a)(["\n  padding-right: 0px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: ", ";\n"]);
            return k = function () {
                return e
            }, e
        }

        function O() {
            var e = Object(o.a)(["\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: ", ";\n"]);
            return O = function () {
                return e
            }, e
        }

        function w() {
            var e = Object(o.a)(["\n  font-size: 0.9rem;\n  font-weight: 400;\n  user-select: none;\n  color: ", ";\n"]);
            return w = function () {
                return e
            }, e
        }

        function j() {
            var e = Object(o.a)(["\n  && {\n    background-color: ", "!important;\n    border: none !important;\n    padding: 0 20px!\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    list-style-type: none!important;\n  }\n\n  &.ant-menu-item-disabled {\n    display:none;\n  }\n"]);
            return j = function () {
                return e
            }, e
        }

        function A() {
            var e = Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  overflow: scroll\n  position: absolute\n  &::-webkit-scrollbar: {\n    display: none;\n  }\n"]);
            return A = function () {
                return e
            }, e
        }

        var C = i.d.div(A()), T = Object(i.d)(a.a.Item)(j(), (function (e) {
            return e.useSidePanelBackground ? e.theme.sidePanelBackground : e.theme.background
        })), S = i.d.span(w(), (function (e) {
            return e.theme.textDim
        })), P = (i.d.span(O(), (function (e) {
            return e.theme.textWhite
        })), i.d.span(k(), (function (e) {
            return e.theme.textWhite
        }))), I = i.d.span(E(), (function (e) {
            return e.theme.textDim
        })), B = Object(i.d)(r.a)(x(), (function (e) {
            return e.theme.textBigButton
        }), (function (e) {
            return e.theme.buttonBackground
        }), (function (e) {
            return e.theme.textDim
        })), M = Object(i.d)(B)(v(), (function (e) {
            return e.buttonbackground ? e.buttonbackground : e.theme.primary
        })), F = Object(i.d)(r.a)(y(), (function (e) {
            return e.theme.inputBorderColor
        })), _ = Object(i.d)(F)(g(), (function (e) {
            return e.theme.green
        }), (function (e) {
            return e.theme.green
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        }), (function (e) {
            return e.theme.green
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        })), D = Object(i.d)(F)(b(), (function (e) {
            return e.theme.red
        }), (function (e) {
            return e.theme.red
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        }), (function (e) {
            return e.theme.red
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        })), N = D, L = i.d.div(h()), W = i.d.div(f()), z = i.d.div(m()), H = Object(i.d)(z)(p(), (function (e) {
            return e.theme.textDim
        })), R = Object(i.d)(H)(d(), (function (e) {
            return e.theme.green
        })), U = Object(i.d)(H)(u(), (function (e) {
            return e.theme.highlight
        })), V = Object(i.d)(H)(l(), (function (e) {
            return e.theme.red
        })), K = i.d.div(s()), Y = Object(i.d)(a.a.Item)(c(), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.small ? "32px" : "40px"
        }), (function (e) {
            return e.small ? "21px" : "29px"
        }), (function (e) {
            return e.small ? "0.85rem" : "0.9rem"
        }))
    }, 722: function (e, t, n) {
        "use strict";
        var r = n(42), a = n(0), o = n.n(a), i = n(4), c = n.n(i), s = n(10), l = n(11), u = n(12), d = n(13),
            p = n(14), m = n(18), f = n(96), h = n(15), b = n(80), g = n(23), y = n(3), v = n(7), x = n(62),
            E = (n(140), n(51)), k = (n(141), n(27)), O = n(650), w = n(651), j = n(6), A = n(2);

        function C() {
            var e = Object(j.a)(["\n  padding: 0px 20px 20px;\n  color: ", ";\n"]);
            return C = function () {
                return e
            }, e
        }

        function T() {
            var e = Object(j.a)(["\n  padding: 20px 20px 0px 20px;\n  user-select: none;\n"]);
            return T = function () {
                return e
            }, e
        }

        function S() {
            var e = Object(j.a)(["\n  padding: 0px;\n  min-height: 128px;\n  background: ", ";\n  border: none;\n  text-align: center;\n"]);
            return S = function () {
                return e
            }, e
        }

        var P = y.d.div(S(), (function (e) {
            return e.theme.foreground
        })), I = y.d.div(T()), B = y.d.div(C(), (function (e) {
            return e.theme.textWhite
        })), M = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    return o.a.createElement(P, null, o.a.createElement("div", null, o.a.createElement(I, null, o.a.createElement(v.e, null, o.a.createElement(A.a, {s: this.props.title}))), o.a.createElement(B, null, this.props.isLoading ? o.a.createElement(m.a, {
                        style: {
                            display: "inline-block",
                            margin: "24px",
                            width: "14px",
                            height: "14px"
                        }, color: this.props.theme.textDim, icon: b.faCircleNotch, spin: !0
                    }) : o.a.createElement("div", null, o.a.createElement("div", null, o.a.createElement(v.e, {style: {fontSize: "2rem"}}, this.props.estimatedValue)), o.a.createElement("div", {style: {marginTop: "-10px"}}, o.a.createElement(v.o, null, "\u2248 ", this.props.sum, " "))))))
                }
            }]), n
        }(o.a.PureComponent), F = Object(y.e)(Object(h.c)(null, (function (e) {
            return Object(f.b)({}, e)
        }))(M)), _ = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "getEstimatedValues", value: function () {
                    var e = this, t = !0, n = null, r = null, a = null, o = null, i = this.props.cmcPrice.prices,
                        c = i.filter((function (e) {
                            return "ETH" === e.symbol
                        })), s = i.filter((function (e) {
                            return "USDT" === e.symbol
                        }));
                    if (1 === c.length && 1 === s.length) {
                        t = !1;
                        var l = parseFloat(c[0].price), u = parseFloat(s[0].price);
                        for (var d in n = 0, r = 0, a = 0, o = 0, this.props.balanceOnEthereumDict) {
                            var p = this.props.balanceOnEthereumDict[d], m = i.filter((function (e) {
                                return e.symbol === d
                            }));
                            if (1 !== m.length && "DAI" !== d) {
                                n = null, r = null;
                                break
                            }
                            var f = 0;
                            f = "DAI" === d ? u : parseFloat(m[0].price), r += parseFloat(p) * f
                        }
                        r && l > 0 && (n = r / l);
                        for (var h = function (t) {
                            var n = e.props.balances[t], r = i.filter((function (e) {
                                return e.symbol === n.token.symbol
                            }));
                            if (1 !== r.length && "DAI" !== n.token.symbol) return a = null, o = null, "break";
                            var c = 0;
                            c = "DAI" === n.token.symbol ? u : parseFloat(r[0].price), o += parseFloat(n.totalAmountInString) * c
                        }, b = 0; b < this.props.balances.length; b++) {
                            if ("break" === h(b)) break
                        }
                        o && l > 0 && (a = o / l)
                    }
                    return {
                        isPriceLoading: t,
                        balanceonEthereumSum: n,
                        balanceonEthereumEstimatedValue: r,
                        balanceOnExchangeSum: a,
                        balanceOnExchangeSumEstimatedValue: o
                    }
                }
            }, {
                key: "toSumDisplay", value: function (e, t, n, r, a) {
                    if (e || t || null === r || null === a) return o.a.createElement(F, {
                        title: n,
                        isLoading: !0,
                        sum: "",
                        estimatedValue: ""
                    });
                    var i = "".concat(r.toFixed(3), " ETH"), c = this.props.cmcPrice.legalPrefix,
                        s = "".concat(c).concat(a.toFixed(2));
                    return o.a.createElement(F, {title: n, isLoading: !1, sum: i, estimatedValue: s})
                }
            }, {
                key: "render", value: function () {
                    var e = this.getEstimatedValues();
                    return o.a.createElement(v.g, null, o.a.createElement(E.a, {gutter: 8}, o.a.createElement(k.a, {span: 5}, this.toSumDisplay(this.props.isBalancesLoading, e.isPriceLoading, "Estimated Total Value", e.balanceonEthereumSum + e.balanceOnExchangeSum, e.balanceonEthereumEstimatedValue + e.balanceOnExchangeSumEstimatedValue)), o.a.createElement(k.a, {style: {maxWidth: "20px"}}, o.a.createElement(m.a, {
                        style: {
                            color: this.props.theme.textDim,
                            minHeight: "100%"
                        }, icon: O.faEquals
                    })), o.a.createElement(k.a, {span: 5}, this.toSumDisplay(this.props.isBalancesLoading, e.isPriceLoading, "Estimated Value on Ethereum", e.balanceonEthereumSum, e.balanceonEthereumEstimatedValue)), o.a.createElement(k.a, {style: {maxWidth: "20px"}}, o.a.createElement(m.a, {
                        style: {
                            color: this.props.theme.textDim,
                            minHeight: "100%"
                        }, icon: w.faPlus
                    })), o.a.createElement(k.a, {span: 5}, this.toSumDisplay(!1, e.isPriceLoading, "Estimated Value on Loopring", e.balanceOnExchangeSum, e.balanceOnExchangeSumEstimatedValue))))
                }
            }]), n
        }(o.a.PureComponent), D = Object(y.e)(Object(h.c)((function (e) {
            return {cmcPrice: e.cmcPrice}
        }), (function (e) {
            return Object(f.b)({}, e)
        }))(_)), N = (n(433), n(162)), L = (n(288), n(131)), W = n(39), z = n(86);

        function H() {
            var e = Object(j.a)(["\n  height: 24px !important;\n  margin-left: 4px;\n  padding-left: 4px !important;\n  font-size: 0.85rem !important;\n  font-weight: normal !important;\n  box-shadow: none !important;\n  border-radius: 0px !important;\n  wave-animation-width: 0px !important;\n  border-top: none;\n  border-bottom: 2px solid ", " !important;\n  color: ", " !important;\n\n  ::placeholder {\n    color: ", "!important;\n  }\n\n  :hover {\n    order-bottom: 2px solid ", " !important;\n  }\n\n  :focus {\n    box-shadow: none;\n    border-radius: 0px;\n    border-top: none;\n    border-bottom: 2px solid ", " !important;\n  }\n"]);
            return H = function () {
                return e
            }, e
        }

        var R = Object(y.d)(L.a)(H(), (function (e) {
                return e.theme.inputBorderColor
            }), (function (e) {
                return e.theme.textWhite
            }), (function (e) {
                return e.theme.textDim
            }), (function (e) {
                return e.theme.primary
            }), (function (e) {
                return e.theme.primary
            })), U = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).clicked = function (t) {
                        e.props.updateHideLowBalanceAssets(t.target.checked)
                    }, e.onSearchInputChange = function (t) {
                        e.props.onSearchInputChange(t.target.value)
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e = "en" === this.props.userPreferences.language ? "Search asset symbol" : "\u641c\u7d22\u8d44\u4ea7\u4ee3\u7801";
                        return o.a.createElement(v.g, null, o.a.createElement(E.a, {gutter: 8}, o.a.createElement(k.a, {span: 5}, o.a.createElement(R, {
                            disabled: this.props.loading,
                            placeholder: e,
                            onChange: this.onSearchInputChange
                        })), o.a.createElement(k.a, {
                            style: {
                                maxWidth: "20px",
                                minWidth: "20px"
                            }
                        }), o.a.createElement(k.a, {span: 5}, o.a.createElement(N.a, {
                            style: {
                                marginLeft: "4px",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }, onChange: this.clicked, defaultChecked: this.props.balances.hideLowBalanceAssets
                        }, o.a.createElement(A.a, {s: "Hide zero-balance assets"})))))
                    }
                }]), n
            }(o.a.PureComponent), V = Object(z.b)(Object(y.e)(Object(h.c)((function (e) {
                return {balances: e.balances}
            }), (function (e) {
                return {
                    updateHideLowBalanceAssets: function (t) {
                        return e(Object(W.r)(t))
                    }
                }
            }))(U))), K = n(654), Y = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n(e) {
                    var r;
                    return Object(l.a)(this, n), (r = t.call(this, e)).columnBuilders = [{
                        label: "Asset",
                        align: "left",
                        width: 300,
                        getColValue: function (e) {
                            return o.a.createElement("span", null, e.token.symbol, " - ", o.a.createElement(A.a, {s: e.token.name}))
                        }
                    }, {
                        label: "Balance on Ethereum", align: "right", getColValue: function (e) {
                            return r.state.balanceOnEthereumDict[e.token.symbol] ? r.state.balanceOnEthereumDict[e.token.symbol] : o.a.createElement("div", null, o.a.createElement(m.a, {
                                style: {
                                    width: "14px",
                                    height: "14px"
                                }, color: r.props.theme.textDim, icon: b.faCircleNotch, spin: !0
                            }))
                        }
                    }, {
                        label: "Balance on Loopring", align: "right", getColValue: function (e) {
                            return e.totalAmountInString
                        }
                    }, {
                        label: "Available Balance", align: "right", getColValue: function (e) {
                            return o.a.createElement("div", null, e.availableInAssetPanel)
                        }
                    }, {
                        label: "Operations", align: "center", getColValue: function (e) {
                            return o.a.createElement("div", null, o.a.createElement(v.d, {
                                style: {marginRight: "8px"},
                                onClick: function () {
                                    r.props.showDepositModal(!0, e.token.symbol)
                                }
                            }, o.a.createElement(A.a, {s: "Deposit"})), o.a.createElement(v.s, {
                                onClick: function () {
                                    r.props.showWithdrawModal(!0, e.token.symbol)
                                }
                            }, o.a.createElement(A.a, {s: "Withdraw"})))
                        }
                    }], r.onSearchInputChange = function (e) {
                        r.setState({searchInput: e.toLowerCase()})
                    }, r.state = {balanceOnEthereumDict: {}, isBalancesLoading: !0, searchInput: ""}, r
                }

                return Object(u.a)(n, [{
                    key: "componentDidMount", value: function () {
                        this.mounted = !0, this.loadBalanceOnEthereum()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t) {
                        e.balances.balances.length === this.props.balances.balances.length && e.tokens.length === this.props.tokens.length || this.loadBalanceOnEthereum()
                    }
                }, {
                    key: "loadBalanceOnEthereum", value: function () {
                        var e = this;
                        this.props.dexAccount.account.address && Object(s.a)(c.a.mark((function t() {
                            var n, r, a, o;
                            return c.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        t.prev = 0, e.setState({isBalancesLoading: !0}), n = e.props.tokens, r = {}, a = 0;
                                    case 5:
                                        if (!(a < n.length)) {
                                            t.next = 13;
                                            break
                                        }
                                        return o = n[a], t.next = 9, Object(x.d)(e.props.dexAccount.account.address, o.symbol, n);
                                    case 9:
                                        r[o.symbol] = t.sent;
                                    case 10:
                                        a++, t.next = 5;
                                        break;
                                    case 13:
                                        e.mounted && e.setState({balanceOnEthereumDict: r}), t.next = 18;
                                        break;
                                    case 16:
                                        t.prev = 16, t.t0 = t.catch(0);
                                    case 18:
                                        return t.prev = 18, e.setState({isBalancesLoading: !1}), t.finish(18);
                                    case 21:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[0, 16, 18, 21]])
                        })))()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.balances.balances, n = this.props.tokens.filter((function (e) {
                            return e.enabled
                        }));
                        t = t || [], t = n.map((function (e) {
                            var n = t.find((function (t) {
                                return t.token.tokenId === e.tokenId
                            }));
                            return n || {
                                token: e,
                                totalAmountInString: Number(0).toFixed(e.precision),
                                available: Number(0).toFixed(e.precision),
                                availableInAssetPanel: Number(0).toFixed(e.precision)
                            }
                        }));
                        var r = [];
                        r = !this.state.isBalancesLoading && this.props.balances.hideLowBalanceAssets ? t.filter((function (t) {
                            if (parseFloat(t.totalAmountInString) > 0) return !0;
                            var n = e.state.balanceOnEthereumDict[t.token.symbol];
                            return !!(n && parseFloat(n) > 0)
                        })) : t;
                        var a = [];
                        return a = "" !== this.state.searchInput ? r.filter((function (t) {
                            return -1 !== t.token.symbol.toLowerCase().indexOf(e.state.searchInput)
                        })) : r, o.a.createElement("div", null, o.a.createElement(D, {
                            isBalancesLoading: this.state.isBalancesLoading,
                            balanceOnEthereumDict: this.state.balanceOnEthereumDict,
                            balances: t,
                            tokens: n
                        }), o.a.createElement(V, {
                            onSearchInputChange: this.onSearchInputChange,
                            loading: !this.props.exchange.isInitialized || this.state.isBalancesLoading
                        }), o.a.createElement(K.a, {
                            margin: 20,
                            emptyText: "NoBalance",
                            columnBuilders: this.columnBuilders,
                            rowData: a,
                            loading: !this.props.exchange.isInitialized || this.state.isBalancesLoading
                        }))
                    }
                }]), n
            }(o.a.PureComponent), q = Object(y.e)(Object(h.c)((function (e) {
                var t = e.dexAccount, n = e.balances, r = e.exchange;
                return {dexAccount: t, balances: n, exchange: r, tokens: r.tokens}
            }), (function (e) {
                return Object(f.b)({showDepositModal: g.o, showWithdrawModal: g.t}, e)
            }))(Y)), G = n(95), X = (n(216), n(32)), $ = (n(181), n(87)), J = (n(252), n(122)), Z = (n(175), n(56)),
            Q = n(102), ee = n(112), te = n.n(ee), ne = n(120), re = n(264), ae = n(201), oe = n(368), ie = n(22);

        function ce() {
            var e = Object(j.a)(["\n  margin-right: 4px;\n"]);
            return ce = function () {
                return e
            }, e
        }

        var se = Object(y.d)(m.a)(ce()), le = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    for (var e = this, t = this.props.theme, n = [{
                        title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "Timestamp"})),
                        dataIndex: "date",
                        width: "16%"
                    }, {
                        title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "Asset"})),
                        dataIndex: "asset",
                        width: "12%"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Amount"})),
                        dataIndex: "amount",
                        width: "12%"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fee"})),
                        dataIndex: "fee",
                        width: "12%"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Tx Hash"})),
                        dataIndex: "txHash",
                        width: "18%"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Type"})),
                        dataIndex: "depositType",
                        width: "10%"
                    }, {
                        title: o.a.createElement(v.r, {
                            style: {
                                width: "100%",
                                textAlign: "center"
                            }
                        }, o.a.createElement("div", {
                            style: {
                                textAlign: "left",
                                paddingRight: "14px"
                            }
                        }, o.a.createElement(A.a, {s: "Status"}))), dataIndex: "status", width: "14%"
                    }], r = [], a = 0; a < this.props.data.length; a++) {
                        var i = this.props.data[a], c = "-";
                        "processing" === i.status ? c = o.a.createElement(Z.a, {
                            placement: "bottom",
                            title: o.a.createElement("div", null, o.a.createElement("p", null, o.a.createElement(A.a, {s: "StatusProcessing"})), o.a.createElement("p", null, o.a.createElement(A.a, {s: "StatusProcessing2"})))
                        }, o.a.createElement(v.k, {
                            style: {
                                color: t.highlight,
                                textAlign: "left"
                            }
                        }, o.a.createElement(se, {
                            icon: b.faCircleNotch,
                            spin: !0
                        }), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Processing"})))) : "processed" === i.status ? c = o.a.createElement(v.j, {
                            style: {
                                color: t.green,
                                textAlign: "left"
                            }
                        }, o.a.createElement(se, {icon: re.faCheckCircle}), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Succeeded"}))) : "failed" === i.status ? c = o.a.createElement(v.i, {
                            style: {
                                color: t.red,
                                textAlign: "left"
                            }
                        }, o.a.createElement(se, {icon: oe.faExclamationCircle}), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Failed"}))) : "received" === i.status && (c = o.a.createElement(Z.a, {
                            placement: "bottom",
                            title: o.a.createElement(A.a, {s: "StatusConfirming"})
                        }, o.a.createElement(v.k, {
                            style: {
                                color: t.orange,
                                textAlign: "left"
                            }
                        }, o.a.createElement(se, {icon: ae.faClock}), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Confirming"})))));
                        var s = "-";
                        s = "deposit" === i.depositType ? o.a.createElement(A.a, {s: "Deposit"}) : "update_account" === i.depositType ? o.a.createElement(A.a, {s: "Password Reset"}) : o.a.createElement(A.a, {s: "Registration"}), r.push({
                            key: a,
                            asset: o.a.createElement(v.h, {style: {paddingLeft: "14px"}}, i.symbol, " - ", o.a.createElement(A.a, {s: i.tokenName})),
                            amount: o.a.createElement(v.h, null, i.amountInUI, " ", i.symbol),
                            fee: o.a.createElement(v.h, {style: {color: t.textDim}}, i.feeInUI, " ETH"),
                            date: o.a.createElement(v.h, {
                                style: {
                                    paddingLeft: "14px",
                                    color: t.textDim
                                }
                            }, te()(i.timestamp).format(t.timeFormat)),
                            txHash: o.a.createElement(v.h, null, o.a.createElement("a", {
                                href: "".concat(Object(ie.c)(this.props.chainId), "/tx/").concat(i.txHash),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, i.txHashInUI)),
                            status: o.a.createElement("div", {style: {textAlign: "center", paddingRight: "14px"}}, c),
                            depositType: o.a.createElement(v.h, null, s)
                        })
                    }
                    var l = this.props.total > this.props.limit;
                    return o.a.createElement(v.q, null, o.a.createElement(X.a, {
                        renderEmpty: 0 === r.length && function () {
                            return o.a.createElement(ne.a, {text: e.props.placeHolder, loading: e.props.loading})
                        }
                    }, o.a.createElement(Q.a, {loading: this.props.loading}, o.a.createElement(J.a, {
                        style: {height: "".concat(34 * r.length + 35, "px")},
                        columns: n,
                        dataSource: r,
                        pagination: !1,
                        scroll: {y: "".concat(34 * r.length, "px")}
                    })), l ? o.a.createElement($.a, {
                        style: {
                            padding: "30px 0px 30px 0px",
                            background: t.background,
                            textAlign: "center"
                        },
                        size: "",
                        total: this.props.total,
                        current: this.props.current,
                        onChange: this.props.onChange,
                        pageSize: this.props.limit
                    }) : o.a.createElement("div", null)))
                }
            }]), n
        }(o.a.Component), ue = Object(y.e)(Object(h.c)((function (e) {
            var t = e.exchange, n = e.notifyCenter;
            return {chainId: t.chainId, blockNum: n.blockNum}
        }), null)(le)), de = n(81), pe = n(9), me = n(192), fe = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = this, t = this.props.exchange.tokens, n = t.filter((function (e) {
                            return e.enabled
                        })).map((function (t, n) {
                            return o.a.createElement(v.b, {
                                key: n, onClick: function () {
                                    e.props.updateTokenFilter(t.symbol)
                                }, small: !0
                            }, t.symbol, " - ", o.a.createElement(A.a, {s: t.name}))
                        })), r = [o.a.createElement(v.b, {
                            key: "all", onClick: function () {
                                e.props.updateTokenFilter("All")
                            }, small: !0
                        }, o.a.createElement("span", null, o.a.createElement(A.a, {s: "All Tokens"})))].concat(Object(de.a)(n)),
                        a = "";
                    if ("All" === this.props.balances.tokenFilter) a = o.a.createElement(A.a, {s: "All Tokens"}); else {
                        var i = pe.a.getTokenBySymbol(this.props.balances.tokenFilter, t);
                        a = o.a.createElement("span", null, i.symbol, " - ", o.a.createElement(A.a, {s: i.name}))
                    }
                    return o.a.createElement(v.g, null, o.a.createElement("div", {style: {width: "200px"}}, o.a.createElement(me.a, {
                        options: r,
                        selected: a,
                        small: !0
                    })))
                }
            }]), n
        }(o.a.PureComponent), he = Object(y.e)(Object(h.c)((function (e) {
            return {balances: e.balances, exchange: e.exchange}
        }), (function (e) {
            return {
                updateTokenFilter: function (t) {
                    return e(Object(W.t)(t))
                }
            }
        }))(fe));

        function be() {
            var e = Object(j.a)(["\n  margin-right: 4px;\n"]);
            return be = function () {
                return e
            }, e
        }

        var ge = Object(y.d)(m.a)(be()), ye = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    return Object(l.a)(this, n), t.apply(this, arguments)
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        for (var e = this, t = this.props.theme, n = [{
                            title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "Timestamp"})),
                            dataIndex: "date",
                            width: "12%"
                        }, {
                            title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "Asset"})),
                            dataIndex: "asset",
                            width: "12%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Amount Requested"})),
                            dataIndex: "amount",
                            width: "12%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Amount Withdrawn"})),
                            dataIndex: "realAmount",
                            width: "12%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fee"})),
                            dataIndex: "fee",
                            width: "12%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Request Tx"})),
                            dataIndex: "txHash",
                            width: "16%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Withdraw Tx"})),
                            dataIndex: "withdrawHash",
                            width: "16%"
                        }, {
                            title: o.a.createElement(v.r, {
                                style: {
                                    width: "100%",
                                    textAlign: "center"
                                }
                            }, o.a.createElement("div", {
                                style: {
                                    textAlign: "left",
                                    paddingRight: "14px"
                                }
                            }, o.a.createElement(A.a, {s: "Status"}))), dataIndex: "status", width: "12%"
                        }], r = [], a = 0; a < this.props.data.length; a++) {
                            var i = this.props.data[a], c = "-";
                            "processing" === i.status ? c = o.a.createElement(Z.a, {
                                placement: "bottom",
                                title: o.a.createElement("div", null, o.a.createElement("p", null, o.a.createElement(A.a, {s: "StatusProcessing"})), o.a.createElement("p", null, o.a.createElement(A.a, {s: "StatusProcessing2"})))
                            }, o.a.createElement(v.k, {
                                style: {
                                    color: t.highlight,
                                    textAlign: "left"
                                }
                            }, o.a.createElement(ge, {
                                icon: b.faCircleNotch,
                                spin: !0
                            }), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Processing"})))) : "processed" === i.status ? c = o.a.createElement(v.j, {
                                style: {
                                    color: t.green,
                                    textAlign: "left"
                                }
                            }, o.a.createElement(ge, {icon: re.faCheckCircle}), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Succeeded"}))) : "failed" === i.status ? c = o.a.createElement(v.i, {
                                style: {
                                    color: t.red,
                                    textAlign: "left"
                                }
                            }, o.a.createElement(ge, {icon: oe.faExclamationCircle}), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Failed"}))) : "received" === i.status && (c = o.a.createElement(Z.a, {
                                placement: "bottom",
                                title: o.a.createElement(A.a, {s: "StatusConfirming"})
                            }, o.a.createElement(v.k, {
                                style: {
                                    color: t.orange,
                                    textAlign: "left"
                                }
                            }, o.a.createElement(ge, {icon: ae.faClock}), o.a.createElement("div", null, o.a.createElement(A.a, {s: "Confirming"}), " ")))), r.push({
                                key: a,
                                asset: o.a.createElement(v.h, {style: {paddingLeft: "14px"}}, i.symbol, " - ", o.a.createElement(A.a, {s: i.tokenName})),
                                amount: o.a.createElement(v.h, null, i.amountInUI, " ", i.symbol),
                                realAmount: o.a.createElement(v.h, null, i.realAmountInUI, " ", i.symbol),
                                fee: o.a.createElement(v.h, {style: {color: t.textDim}}, i.feeInUI, " ETH"),
                                date: o.a.createElement(v.h, {
                                    style: {
                                        paddingLeft: "14px",
                                        color: t.textDim
                                    }
                                }, te()(i.timestamp).format(t.timeFormat)),
                                txHash: o.a.createElement(v.h, null, o.a.createElement("a", {
                                    href: "".concat(Object(ie.c)(this.props.chainId), "/tx/").concat(i.txHash),
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, i.txHashInUI)),
                                withdrawHash: o.a.createElement(v.h, null, o.a.createElement("a", {
                                    href: "".concat(Object(ie.c)(this.props.chainId), "/tx/").concat(i.distributeHash),
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, i.distributeHashInUI)),
                                status: o.a.createElement("div", {style: {textAlign: "center", paddingRight: "14px"}}, c)
                            })
                        }
                        var s = this.props.total > this.props.limit;
                        return o.a.createElement(v.q, null, o.a.createElement(X.a, {
                            renderEmpty: 0 === r.length && function () {
                                return o.a.createElement(ne.a, {text: e.props.placeHolder, loading: e.props.loading})
                            }
                        }, o.a.createElement(Q.a, {loading: this.props.loading}, o.a.createElement(J.a, {
                            style: {height: "".concat(34 * r.length + 35, "px")},
                            columns: n,
                            dataSource: r,
                            pagination: !1,
                            scroll: {y: "".concat(34 * r.length, "px")}
                        })), s ? o.a.createElement($.a, {
                            style: {
                                padding: "30px 0px 30px 0px",
                                background: t.background,
                                textAlign: "center"
                            },
                            size: "",
                            total: this.props.total,
                            current: this.props.current,
                            onChange: this.props.onChange,
                            pageSize: this.props.limit
                        }) : o.a.createElement("div", null)))
                    }
                }]), n
            }(o.a.Component), ve = Object(y.e)(Object(h.c)((function (e) {
                var t = e.exchange, n = e.notifyCenter;
                return {chainId: t.chainId, blockNum: n.blockNum}
            }), null)(ye)), xe = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).onChange = function (t) {
                        var n = "deposit" === e.props.type ? e.props.balances.depositLimit * (t - 1) : e.props.balances.withdrawalLimit * (t - 1);
                        e.loadData(n), e.timeout && clearTimeout(e.timeout)
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidMount", value: function () {
                        this.loadData()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t) {
                        var n = this;
                        e.exchange.isInitialized !== this.props.exchange.isInitialized && this.loadData(), e.dexAccount && e.dexAccount.account && this.props.dexAccount && this.props.dexAccount.account && this.props.dexAccount.account.accountId && !1 === Object(G.b)(e.dexAccount, this.props.dexAccount) && this.props.dexAccount.account.apiKey && this.loadData(), e.tabs.type4 !== this.props.tabs.type4 && this.loadData(), e.balances.tokenFilter !== this.props.balances.tokenFilter && this.loadData(), "deposit" === this.props.type && this.props.balances.deposits.find((function (e) {
                            return "received" === e.status || "processing" === e.status
                        })) && (this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout((function () {
                            return n.loadData()
                        }), 3e4)), "withdrawals" === this.props.type && this.props.balances.withdrawals.find((function (e) {
                            return "received" === e.status || "processing" === e.status
                        })) && (this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout((function () {
                            return n.loadData()
                        }), 3e4))
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.timeout && clearTimeout(this.timeout)
                    }
                }, {
                    key: "loadData", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                        console.log("loadData");
                        try {
                            var t, n = this.props, r = n.dexAccount, a = n.exchange, o = n.balances, i = n.fetchDeposits,
                                c = n.fetchWithdrawals;
                            if (r.account.accountId && r.account.keyPairCipherText && r.account.apiKey) "All" !== o.tokenFilter && (t = o.tokenFilter), "deposit" === this.props.type ? (console.log("fetchDeposits"), i(o.depositLimit, -1 !== e ? e : o.depositOffset, r.account.accountId, t, r.account.apiKey, a.tokens)) : c(o.withdrawalLimit, -1 !== e ? e : o.withdrawalOffset, r.account.accountId, t, r.account.apiKey, a.tokens); else console.log("no key...")
                        } catch (s) {
                        }
                    }
                }, {
                    key: "render", value: function () {
                        var e, t, n, r, a, i = this.props, c = i.type, s = i.balances, l = i.exchange;
                        return "deposit" === c ? (e = s.deposits, t = s.depositTotalNum, n = s.depositLimit, r = Math.floor(s.depositOffset / n) + 1, a = s.isDepositsLoading, o.a.createElement("div", null, o.a.createElement(he, null), o.a.createElement(ue, {
                            placeHolder: "NoDeposits",
                            data: e,
                            total: t,
                            limit: n,
                            current: r,
                            onChange: this.onChange,
                            loading: !l.isInitialized || a
                        }))) : (e = s.withdrawals, t = s.withdrawalTotalNum, n = s.withdrawalLimit, r = Math.floor(s.withdrawalOffset / n) + 1, a = s.isWithdrawalsLoading, o.a.createElement("div", null, o.a.createElement(he, null), o.a.createElement(ve, {
                            placeHolder: "NoWithdrawals",
                            data: e,
                            total: t,
                            limit: n,
                            current: r,
                            onChange: this.onChange,
                            loading: !l.isInitialized || a
                        })))
                    }
                }]), n
            }(o.a.Component), Ee = Object(h.c)((function (e) {
                return {dexAccount: e.dexAccount, balances: e.balances, tabs: e.tabs, exchange: e.exchange}
            }), (function (e) {
                return {
                    fetchDeposits: function (t, n, r, a, o, i) {
                        return e(Object(W.o)(t, n, r, a, o, i))
                    }, fetchWithdrawals: function (t, n, r, a, o, i) {
                        return e(Object(W.q)(t, n, r, a, o, i))
                    }
                }
            }))(xe), ke = (n(217), n(57)), Oe = n(19), we = n(369), je = n(665), Ae = function (e) {
                var t = e.navbarConfig, n = e.children, r = e.pageId, i = e.loading, c = Object(a.useContext)(y.a);
                return o.a.createElement(ke.a, {
                    style: {
                        height: Oe.a.simpleSecondaryPageHeight,
                        backgroundColor: c.background
                    }
                }, o.a.createElement(ke.a.Content, {
                    width: "100%",
                    style: {padding: "0px", backgroundColor: c.background}
                }, o.a.createElement("div", {
                    className: "desktop-layout",
                    style: {padding: "0px", backgroundColor: c.background}
                }, o.a.createElement(je.a, {
                    selected: r,
                    subPages: t
                }), o.a.createElement("div", {
                    style: {
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        paddingTop: "24px"
                    }
                }, o.a.createElement(Q.a, {loading: i}, n))), o.a.createElement("div", {className: "mobile-layout"}, o.a.createElement(we.a, null))))
            }, Ce = [{id: "balances", label: "Balances", url: "/account/balances"}, {
                id: "deposits",
                label: "Deposits",
                url: "/account/deposits"
            }, {id: "withdrawals", label: "Withdrawals", url: "/account/withdrawals"}], Te = n(107), Se = n(46),
            Pe = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(a))).onClickCancel = function (t) {
                        Object(s.a)(c.a.mark((function n() {
                            var r, a;
                            return c.a.wrap((function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        if (n.prev = 0, r = e.props.dexAccount.account.apiKey, null !== e.props.dexAccount.password) {
                                            n.next = 4;
                                            break
                                        }
                                        throw new Error("Password is not correct! Please try again or reset Password.");
                                    case 4:
                                        return a = window.wallet.submitFlexCancel(t.hash, t.clientOrderId), n.next = 7, Object(Te.b)(e.props.dexAccount.account.accountId, a.orderHash, a.clientOrderId, a.signature, r);
                                    case 7:
                                        Object(Se.b)(o.a.createElement(A.a, {s: "Your order has been cancelled."}), e.props.theme), n.next = 13;
                                        break;
                                    case 10:
                                        n.prev = 10, n.t0 = n.catch(0), Object(Se.a)(o.a.createElement(A.a, {s: "Failed to cancel your order."}), e.props.theme);
                                    case 13:
                                    case"end":
                                        return n.stop()
                                }
                            }), n, null, [[0, 10]])
                        })))()
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        for (var e = this, t = this.props.theme, n = [{
                            title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "CreatedAt"})),
                            dataIndex: "createdAt",
                            width: 180
                        }, {
                            title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "Market"})),
                            dataIndex: "market"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Side"})),
                            dataIndex: "side"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fill Amount"})),
                            dataIndex: "fillAmount"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fill Pctg"})),
                            dataIndex: "filled"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Amount"})),
                            dataIndex: "size"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Order Price"})),
                            dataIndex: "price"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Order Total"})),
                            dataIndex: "total"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fee"})),
                            dataIndex: "fee"
                        }, {
                            title: o.a.createElement(v.r, {
                                style: {
                                    width: "100%",
                                    textAlign: "center",
                                    paddingRight: "14px"
                                }
                            }, o.a.createElement(A.a, {s: "Status / Operations"})), dataIndex: "status"
                        }], r = [], a = function (n) {
                            var a = e.props.data[n];
                            c = "-", "processing" === a.status || "waiting" === a.status ? c = o.a.createElement(v.l, {style: {textAlign: "left"}}, o.a.createElement(v.c, {
                                onClick: function (t) {
                                    t.preventDefault(), e.onClickCancel(a)
                                }
                            }, o.a.createElement(A.a, {s: "Cancel"}))) : "processed" === a.status ? c = o.a.createElement(v.j, {style: {textAlign: "left"}}, o.a.createElement("div", null, o.a.createElement(A.a, {s: "Filled"}))) : "failed" === a.status ? c = o.a.createElement(v.i, {style: {textAlign: "left"}}, o.a.createElement("div", null, o.a.createElement(A.a, {s: "Failed"}))) : "cancelling" === a.status || "cancelled" === a.status ? c = o.a.createElement(v.l, {style: {textAlign: "left"}}, o.a.createElement("div", null, o.a.createElement(A.a, {s: "Cancelled"}))) : "expired" === a.status && (c = o.a.createElement(v.l, null, o.a.createElement("div", null, o.a.createElement(A.a, {s: "Expired"})))), r.push({
                                key: n,
                                side: o.a.createElement(v.h, {style: {color: "BUY" === a.side ? t.buyPrimary : t.sellPrimary}}, "BUY" === a.side ? o.a.createElement(A.a, {s: "Buy"}) : o.a.createElement(A.a, {s: "Sell"})),
                                market: o.a.createElement(v.h, {style: {paddingLeft: "14px"}}, a.market),
                                size: o.a.createElement(v.h, null, a.sizeInString, " "),
                                filled: o.a.createElement(v.h, {style: {color: t.textWhite}}, a.filled),
                                fillAmount: o.a.createElement(v.h, null, a.filledSizeInString, " "),
                                price: o.a.createElement(v.h, {style: {color: "BUY" === a.side ? t.buyPrimary : t.sellPrimary}}, a.price),
                                total: o.a.createElement(v.h, null, a.totalInString, " ", a.quoteToken),
                                fee: o.a.createElement(v.h, {style: {color: t.textDim}}, a.feeInString, " ", "-" !== a.feeInString ? "BUY" === a.side ? a.market.split("-")[0] : a.market.split("-")[1] : ""),
                                createdAt: o.a.createElement(v.h, {
                                    style: {
                                        paddingLeft: "14px",
                                        color: t.textDim
                                    }
                                }, te()(a.createdAt).format(t.timeFormat)),
                                status: o.a.createElement("div", {
                                    style: {
                                        textAlign: "center",
                                        paddingRight: "14px"
                                    }
                                }, c)
                            })
                        }, i = 0; i < this.props.data.length; i++) {
                            var c;
                            a(i)
                        }
                        var s = this.props.total > this.props.limit;
                        return o.a.createElement(v.f, null, o.a.createElement(X.a, {
                            renderEmpty: 0 === r.length && function () {
                                return o.a.createElement(ne.a, {text: "NoHistoryOrders", loading: e.props.loading})
                            }
                        }, o.a.createElement(Q.a, {loading: this.props.loading}, o.a.createElement(J.a, {
                            style: {
                                borderStyle: "none",
                                borderWidth: "0px",
                                height: "".concat(34 * r.length + 35, "px"),
                                minHeight: "500px"
                            }, columns: n, dataSource: r, pagination: !1, scroll: {y: "".concat(34 * r.length, "px")}
                        })), s ? o.a.createElement($.a, {
                            style: {
                                padding: "30px 0px 30px 0px",
                                background: t.background,
                                textAlign: "center"
                            },
                            size: "",
                            total: this.props.total,
                            current: this.props.current,
                            onChange: this.props.onChange,
                            pageSize: this.props.limit
                        }) : o.a.createElement("div", null)))
                    }
                }]), n
            }(o.a.Component);
        Pe.defaultProps = {loading: !1};
        var Ie = Object(y.e)(Object(h.c)((function (e) {
                return {dexAccount: e.dexAccount}
            }), (function (e) {
                return {}
            }))(Pe)), Be = n(17), Me = n(50), Fe = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    return Object(l.a)(this, n), t.apply(this, arguments)
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e = this, t = this.props.exchange.markets.filter((function (e) {
                                return e.enabled
                            })).map((function (t, n) {
                                return o.a.createElement(v.b, {
                                    key: n, onClick: function () {
                                        e.props.updateMarketFilter(t.market)
                                    }, small: !0
                                }, o.a.createElement("span", null, " ", o.a.createElement(A.a, {s: t.market}), " "))
                            })), n = [o.a.createElement(v.b, {
                                key: "all", onClick: function () {
                                    e.props.updateMarketFilter("All")
                                }, small: !0
                            }, o.a.createElement("span", null, o.a.createElement(A.a, {s: "All Markets"})))].concat(Object(de.a)(t)),
                            r = "";
                        return r = "All" === this.props.myOrderPage.marketFilter ? o.a.createElement(A.a, {s: "All Markets"}) : o.a.createElement(A.a, {s: this.props.myOrderPage.marketFilter}), o.a.createElement(v.g, null, o.a.createElement("div", {style: {width: "200px"}}, o.a.createElement(me.a, {
                            options: n,
                            selected: r,
                            small: !0
                        })))
                    }
                }]), n
            }(o.a.PureComponent), _e = Object(y.e)(Object(h.c)((function (e) {
                return {myOrderPage: e.myOrderPage, exchange: e.exchange}
            }), (function (e) {
                return {
                    updateMarketFilter: function (t) {
                        return e(Object(Me.o)(t))
                    }
                }
            }))(Fe)), De = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).onChange = function (t) {
                        var n = e.props.myOrderPage.historyOrdersLimit * (t - 1);
                        e.loadData(n)
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidMount", value: function () {
                        this.loadData()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t) {
                        this.props.exchange.isInitialized === e.exchange.isInitialized && Object(G.b)(e.dexAccount, this.props.dexAccount) || !this.props.dexAccount.account.apiKey || this.loadData(), this.props.exchange.isInitialized && e.myOrderPage.marketFilter !== this.props.myOrderPage.marketFilter && this.props.dexAccount.account.apiKey && this.loadData()
                    }
                }, {
                    key: "loadData", value: function () {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, n = this.props,
                            r = n.dexAccount, a = n.exchange, o = n.myOrderPage, i = n.fetchMyHistoryOrders;
                        a.isInitialized && r.account.accountId && r.account.state === Be.b && r.account.apiKey && ("All" !== o.marketFilter && (e = o.marketFilter), i(r.account.accountId, e, o.historyOrdersLimit, -1 !== t ? t : o.historyOrdersOffset, r.account.apiKey, a.tokens))
                    }
                }, {
                    key: "render", value: function () {
                        var e = Math.floor(this.props.myOrderPage.historyOrdersOffset / this.props.myOrderPage.historyOrdersLimit) + 1;
                        return o.a.createElement("div", null, o.a.createElement(_e, null), o.a.createElement(Ie, {
                            placeHolder: "NoHistoryOrders",
                            data: this.props.myOrderPage.historyOrders,
                            total: this.props.myOrderPage.historyOrdersTotalNum,
                            limit: this.props.myOrderPage.historyOrdersLimit,
                            offset: this.props.myOrderPage.historyOrdersOffset,
                            current: e,
                            onChange: this.onChange,
                            loading: this.props.myOrderPage.isHistoryOrdersLoading
                        }))
                    }
                }]), n
            }(o.a.Component), Ne = Object(h.c)((function (e) {
                return {myOrderPage: e.myOrderPage, exchange: e.exchange, dexAccount: e.dexAccount}
            }), (function (e) {
                return {
                    fetchMyHistoryOrders: function (t, n, r, a, o, i) {
                        return e(Object(Me.l)(t, n, r, a, o, i))
                    }
                }
            }))(De), Le = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).onChange = function (t) {
                        var n = e.props.myOrderPage.transactionsLimit * (t - 1);
                        e.loadData(n)
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidMount", value: function () {
                        try {
                            this.loadData()
                        } catch (e) {
                        }
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t) {
                        this.props.exchange.isInitialized === e.exchange.isInitialized && Object(G.b)(e.dexAccount, this.props.dexAccount) || !this.props.dexAccount.account.apiKey || this.loadData(), this.props.exchange.isInitialized && e.myOrderPage.marketFilter !== this.props.myOrderPage.marketFilter && this.props.dexAccount.account.apiKey && this.loadData()
                    }
                }, {
                    key: "loadData", value: function () {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, n = this.props,
                            r = n.dexAccount, a = n.exchange, o = n.myOrderPage, i = n.fetchUserTransactions;
                        a.isInitialized && r.account.accountId && r.account.state === Be.b && r.account.apiKey && ("All" !== o.marketFilter && (e = o.marketFilter), i(r.account.accountId, e, o.transactionsLimit, -1 !== t ? t : o.transactionsOffset, r.account.apiKey, a.tokens))
                    }
                }, {
                    key: "render", value: function () {
                        for (var e = this, t = this.props.theme, n = Math.floor(this.props.myOrderPage.transactionsOffset / this.props.myOrderPage.transactionsLimit) + 1, r = [{
                            title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "Filled At"})),
                            dataIndex: "date",
                            width: "15%"
                        }, {
                            title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "Market"})),
                            dataIndex: "market",
                            width: "10%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Side"})),
                            dataIndex: "side",
                            width: "8%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fill Amount"})),
                            dataIndex: "size",
                            width: "15%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Price"})),
                            dataIndex: "price",
                            width: "15%"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Order Total"})),
                            dataIndex: "total"
                        }, {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fee"})),
                            dataIndex: "fee",
                            width: "15%"
                        }], a = [], i = 0; i < this.props.myOrderPage.transactions.length; i++) {
                            var c = this.props.myOrderPage.transactions[i];
                            a.push({
                                key: i,
                                side: o.a.createElement(v.h, {style: {color: "BUY" === c.side ? t.buyPrimary : t.sellPrimary}}, "BUY" === c.side ? o.a.createElement(A.a, {s: "Buy"}) : o.a.createElement(A.a, {s: "Sell"})),
                                market: o.a.createElement(v.h, {style: {paddingLeft: "14px"}}, c.market),
                                size: o.a.createElement(v.h, null, c.sizeInString, " ", c.market.split("-")[0]),
                                price: o.a.createElement(v.h, {style: {color: "BUY" === c.side ? t.buyPrimary : t.sellPrimary}}, Number(c.price), " ", c.market.split("-")[1]),
                                total: o.a.createElement(v.h, null, c.totalInString, " ", c.quoteToken),
                                fee: o.a.createElement(v.h, {style: {color: t.textDim}}, c.feeInString, " ", "BUY" === c.side ? c.market.split("-")[0] : c.market.split("-")[1]),
                                date: o.a.createElement(v.h, {
                                    style: {
                                        color: t.textDim,
                                        textAlign: "left",
                                        paddingLeft: "14px"
                                    }
                                }, te()(c.timestamp).format(t.timeFormat))
                            })
                        }
                        var s = this.props.myOrderPage.transactionsTotalNum > this.props.myOrderPage.transactionsLimit;
                        return o.a.createElement("div", null, o.a.createElement(_e, null), o.a.createElement(v.f, null, o.a.createElement(X.a, {
                            renderEmpty: 0 === a.length && function () {
                                return o.a.createElement(ne.a, {
                                    text: "NoHistoryOrders",
                                    loading: e.props.myOrderPage.isTransactionsLoading
                                })
                            }
                        }, o.a.createElement(Q.a, {loading: this.props.myOrderPage.isTransactionsLoading}, o.a.createElement(J.a, {
                            style: {
                                borderStyle: "none",
                                borderWidth: "0px",
                                height: "".concat(34 * this.props.myOrderPage.transactions.length + 35, "px"),
                                minHeight: "500px"
                            },
                            columns: r,
                            dataSource: a,
                            pagination: !1,
                            scroll: {y: "".concat(34 * this.props.myOrderPage.transactions.length, "px")}
                        })), s ? o.a.createElement($.a, {
                            style: {
                                padding: "30px 0px 30px 0px",
                                background: t.background,
                                textAlign: "center"
                            },
                            size: "",
                            total: this.props.myOrderPage.transactionsTotalNum,
                            current: n,
                            onChange: this.onChange,
                            pageSize: this.props.myOrderPage.transactionsLimit
                        }) : o.a.createElement("div", null))))
                    }
                }]), n
            }(o.a.Component), We = Object(y.e)(Object(h.c)((function (e) {
                return {dexAccount: e.dexAccount, myOrderPage: e.myOrderPage, exchange: e.exchange}
            }), (function (e) {
                return {
                    fetchUserTransactions: function (t, n, r, a, o, i) {
                        return e(Object(Me.n)(t, n, r, a, o, i))
                    }
                }
            }))(Le)), ze = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).onChange = function (t) {
                        var n = e.props.myOrderPage.openOrdersLimit * (t - 1);
                        e.loadData(n)
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidMount", value: function () {
                        this.loadData()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t) {
                        this.props.exchange.isInitialized === e.exchange.isInitialized && Object(G.b)(e.dexAccount, this.props.dexAccount) || !this.props.dexAccount.account.apiKey || this.loadData(), this.props.exchange.isInitialized && e.myOrderPage.marketFilter !== this.props.myOrderPage.marketFilter && this.props.dexAccount.account.apiKey && this.loadData()
                    }
                }, {
                    key: "loadData", value: function () {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, n = this.props,
                            r = n.dexAccount, a = n.exchange, o = n.myOrderPage, i = n.fetchMyOpenOrders;
                        a.isInitialized && r.account.accountId && r.account.state === Be.b && r.account.apiKey && ("All" !== o.marketFilter && (e = o.marketFilter), i(r.account.accountId, e, o.openOrdersLimit, -1 !== t ? t : o.openOrdersOffset, r.account.apiKey, a.tokens))
                    }
                }, {
                    key: "render", value: function () {
                        var e = Math.floor(this.props.myOrderPage.openOrdersOffset / this.props.myOrderPage.openOrdersLimit) + 1;
                        return o.a.createElement("div", null, o.a.createElement(_e, null), o.a.createElement(Ie, {
                            placeHolder: "NoOpenOrders",
                            data: this.props.myOrderPage.openOrders,
                            total: this.props.myOrderPage.openOrdersTotalNum,
                            limit: this.props.myOrderPage.openOrdersLimit,
                            offset: this.props.myOrderPage.openOrdersOffset,
                            current: e,
                            onChange: this.onChange,
                            loading: this.props.myOrderPage.isOpenOrdersLoading
                        }))
                    }
                }]), n
            }(o.a.Component), He = Object(h.c)((function (e) {
                return {myOrderPage: e.myOrderPage, exchange: e.exchange, dexAccount: e.dexAccount}
            }), (function (e) {
                return {
                    fetchMyOpenOrders: function (t, n, r, a, o, i) {
                        return e(Object(Me.m)(t, n, r, a, o, i))
                    }
                }
            }))(ze), Re = [{id: "open-orders", label: "Open Orders", url: "/orders/open-orders"}, {
                id: "order-history",
                label: "Order History",
                url: "/orders/order-history"
            }, {id: "trade-history", label: "Fill History", url: "/orders/trade-history"}], Ue = n(21), Ve = n(135),
            Ke = n(43), Ye = ke.a.Content, qe = ke.a.Sider, Ge = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    return Object(l.a)(this, n), t.apply(this, arguments)
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props.theme;
                        return o.a.createElement("div", null, o.a.createElement(ke.a, {
                            hasSider: !0,
                            style: {height: Oe.a.simpleSecondaryPageHeight}
                        }, o.a.createElement(qe, {
                            width: Oe.a.tradePanelWidth,
                            style: {background: e.sidePanelBackground, borderStyle: "none"},
                            trigger: null,
                            breakpoint: "sm",
                            collapsedWidth: "0"
                        }, o.a.createElement(v.p, {style: {borderTop: "1px solid " + e.seperator}}, this.props.navigation)), o.a.createElement(Ye, {
                            width: "100%",
                            style: {
                                backgroundColor: e.legalIframeBackground,
                                borderStyle: "none",
                                padding: "0",
                                margin: "0"
                            }
                        }, o.a.createElement("iframe", {
                            title: "termly",
                            src: this.props.src,
                            frameBorder: "0",
                            style: {
                                borderRadius: "2px",
                                background: e.legalIframeBackground,
                                overflow: "hidden",
                                height: "100%",
                                width: "100%"
                            }
                        }))))
                    }
                }]), n
            }(o.a.Component), Xe = Object(y.e)(Object(h.c)((function (e) {
                return {layoutManager: e.layoutManager}
            }), null)(Ge));

        function $e() {
            var e = Object(j.a)(["\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", "!important;\n    color: ", "!important;\n  }\n"]);
            return $e = function () {
                return e
            }, e
        }

        var Je = Object(y.d)(Ue.b)($e(), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textBright
        })), Ze = function (e) {
            var t = e.current, n = Object(a.useContext)(y.a);
            return o.a.createElement("div", {style: {padding: "24px 0"}}, o.a.createElement(Ue.d, null, o.a.createElement(A.a, {s: "Legal Documents"})), o.a.createElement(Je, {
                disabled: "terms" === t,
                onClick: function () {
                    return Ke.b.push("/legal/terms")
                }
            }, o.a.createElement(Ue.a, {icon: Ve.faFileAlt}), o.a.createElement(A.a, {s: "Terms of Use"})), o.a.createElement(Je, {
                disabled: "privacy" === t,
                onClick: function () {
                    return Ke.b.push("/legal/privacy-policy")
                }
            }, o.a.createElement(Ue.a, {icon: Ve.faFileAlt}), o.a.createElement(A.a, {s: "Privacy Policy"})), o.a.createElement(Je, {
                disabled: "cookie" === t,
                onClick: function () {
                    return Ke.b.push("/legal/cookie-policy")
                }
            }, o.a.createElement(Ue.a, {icon: Ve.faFileAlt}), o.a.createElement(A.a, {s: "Cookie Policy"})), o.a.createElement(Je, {
                disabled: "disclaimer" === t,
                onClick: function () {
                    return Ke.b.push("/legal/disclaimer")
                }
            }, o.a.createElement(Ue.a, {icon: Ve.faFileAlt}), o.a.createElement(A.a, {s: "Disclaimer"})), o.a.createElement("div", {
                style: {
                    fontSize: "0.8rem",
                    color: n.textDim,
                    padingTop: "24px",
                    margin: "24px"
                }
            }, o.a.createElement(A.a, {s: "NoChineseDocument"})))
        }, Qe = n(137), et = n(671);

        function tt() {
            var e = Object(j.a)(["\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", "!important;\n    color: ", "!important;\n  }\n"]);
            return tt = function () {
                return e
            }, e
        }

        var nt = Object(y.d)(Ue.b)(tt(), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textBright
        })), rt = function (e) {
            var t = e.current;
            Object(a.useContext)(y.a);
            return o.a.createElement("div", {style: {padding: "24px 0"}}, o.a.createElement(Ue.d, null, o.a.createElement(A.a, {s: "Support"})), o.a.createElement(nt, {
                disabled: "system-status" === t,
                onClick: function () {
                    return Ke.b.push("/support/system-status")
                }
            }, o.a.createElement(Ue.a, {icon: et.faServer}), o.a.createElement(A.a, {s: "System Status"})), o.a.createElement(Ue.d, null, o.a.createElement(A.a, {s: "Digital Asset List"})), o.a.createElement(nt, {
                disabled: "eth" === t,
                onClick: function () {
                    return Ke.b.push("/support/eth")
                }
            }, o.a.createElement(A.a, {s: "ETH - Ethereum"})), o.a.createElement(nt, {
                disabled: "lrc" === t,
                onClick: function () {
                    return Ke.b.push("/support/lrc")
                }
            }, o.a.createElement(A.a, {s: "LRC - Loopring"})), o.a.createElement(nt, {
                disabled: "usdt" === t,
                onClick: function () {
                    return Ke.b.push("/support/usdt")
                }
            }, o.a.createElement(A.a, {s: "USDT - Tether USD"})), o.a.createElement(nt, {
                disabled: "dai" === t,
                onClick: function () {
                    return Ke.b.push("/support/dai")
                }
            }, o.a.createElement(A.a, {s: "DAI - Dai Stablecoin"})), o.a.createElement(nt, {
                disabled: "link" === t,
                onClick: function () {
                    return Ke.b.push("/support/link")
                }
            }, o.a.createElement(A.a, {s: "LINK - ChainLink"})))
        }, at = n(376);

        function ot() {
            var e = Object(j.a)(["\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", "!important;\n    color: ", "!important;\n  }\n"]);
            return ot = function () {
                return e
            }, e
        }

        var it = Object(y.d)(Ue.b)(ot(), (function (e) {
                return e.theme.foreground
            }), (function (e) {
                return e.theme.textBright
            })), ct = function (e) {
                var t = e.current, n = Object(a.useContext)(y.a);
                return o.a.createElement("div", {style: {padding: "24px 0"}}, o.a.createElement(Ue.d, null, o.a.createElement(A.a, {s: "Documentation"})), o.a.createElement(it, {
                    disabled: "fees" === t,
                    onClick: function () {
                        return Ke.b.push("/document/fees")
                    }
                }, o.a.createElement(Ue.a, {icon: Ve.faFileAlt}), o.a.createElement(A.a, {s: "Fee Schedule"})), o.a.createElement(it, {
                    disabled: "listing" === t,
                    onClick: function () {
                        return Ke.b.push("/document/listing")
                    }
                }, o.a.createElement(Ue.a, {icon: Ve.faFileAlt}), o.a.createElement(A.a, {s: "Token Listing"})), o.a.createElement(Ue.d, null, o.a.createElement(A.a, {s: "Beta Reward Programs"})), o.a.createElement(it, {
                    hoverbg: n.orange,
                    colortxt: n.orange,
                    disabled: "beta1" === t,
                    onClick: function () {
                        return Ke.b.push("/document/beta1")
                    }
                }, o.a.createElement(Ue.a, {icon: at.faTrophy}), o.a.createElement(A.a, {s: "Beta Reward Programs"})))
            }, st = ke.a.Content, lt = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    return Object(l.a)(this, n), t.apply(this, arguments)
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props.theme, t = 45 * -Math.random(), n = -t;
                        return o.a.createElement("div", null, o.a.createElement("div", {
                            style: {
                                height: Oe.a.borderWidth,
                                backgroundColor: e.seperator
                            }
                        }), o.a.createElement(ke.a, {
                            hasSider: !1,
                            style: {height: Oe.a.simpleSecondaryPageHeight}
                        }, o.a.createElement(st, {
                            width: "100%",
                            style: {paddingTop: "0px", backgroundColor: e.foreground, borderLeftStyle: "none"}
                        }, o.a.createElement("div", {
                            style: {
                                width: "60%",
                                minHeight: "50vh",
                                margin: "auto",
                                marginTop: "20vh",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                                backgroundImage: 'url("./assets/images/'.concat(e.imgDir, '/404.png")'),
                                backgroundRepeat: "no-repeat",
                                backgroundBlendMode: "color-dodge",
                                transform: "rotate(" + t + "deg)"
                            }
                        }, o.a.createElement("div", {
                            style: {
                                fontWeight: "600",
                                fontSize: "6rem",
                                marginTop: "0%",
                                marginLeft: "20%",
                                color: e.primary,
                                userSelect: "none",
                                transform: "rotate(" + n + "deg)"
                            }
                        }, o.a.createElement(A.a, {s: "404"}), o.a.createElement("div", {
                            style: {
                                fontSize: "1rem",
                                fontWeight: "normal",
                                color: e.textWhite,
                                padding: "8px",
                                borderRadius: "4px"
                            }
                        }, o.a.createElement(A.a, {s: "404title"})), o.a.createElement("div", {
                            style: {
                                padding: "8px",
                                borderRadius: "4px",
                                fontSize: "0.9rem",
                                fontWeight: "normal",
                                background: e.foreground,
                                width: "240px",
                                color: e.textDim
                            }
                        }, o.a.createElement(A.a, {s: "If you believe this is indeed a bug, please "}), o.a.createElement("a", {href: "mailto:foundation@loopring.org"}, o.a.createElement(A.a, {s: "contact us"})), o.a.createElement(A.a, {s: ". We would appreciate your feedback."})))))))
                    }
                }]), n
            }(o.a.Component), ut = Object(y.e)(Object(h.c)((function (e) {
                return {layoutManager: e.layoutManager}
            }), (function (e) {
                return {}
            }))(lt)), dt = n(723), pt = n(26), mt = n(20), ft = n(64), ht = (n(67), n(29)), bt = (n(1331), n(707)),
            gt = n(706), yt = n(113);

        function vt() {
            var e = Object(j.a)(["\n  border-style: none;\n  background:none!important;\n  color: ", ";\n  width: 30px;\n  float: right;\n  line-height: 30px;\n  padding: 0px;\n\n  &:hover {\n    color: ", "!important;\n    border-style: none;\n  }\n\n  &:disabled {\n    color: ", "!important;\n  }\n\n  @media only screen and (max-width: 992px) {\n    display: none;\n  }\n\n  FontAwesomeIcon {\n    color:", ";\n  }\n}\n"]);
            return vt = function () {
                return e
            }, e
        }

        var xt = Object(y.d)(ht.a)(vt(), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.primary
        }), (function (e) {
            return e.theme.inputPlaceHolderColor
        }), (function (e) {
            return e.theme.textDim
        })), Et = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = this, t = this.props.theme,
                        n = pe.a.getMarketByPair(this.props.market.currentMarket.current, this.props.exchange.markets),
                        r = 8, a = 8;
                    n && (r = n.orderbookAggLevels, a = n.precisionForPrice - this.props.market.orderBook.level);
                    var i = "1";
                    return a > 0 ? i = "0." + "0".repeat(a - 1) + "1" : a < 0 && (i = "1" + "0".repeat(-a)), o.a.createElement("div", {
                        className: "order-book-level",
                        style: {
                            backgroundColor: t.spreadAggregationBackground,
                            position: "absolute",
                            bottom: "0px",
                            width: "100%",
                            fontSize: "0.85rem",
                            fontWeight: "700",
                            lineHeight: "30px"
                        }
                    }, o.a.createElement("div", {
                        style: {
                            color: t.textDim,
                            display: "inline-block",
                            width: "35%",
                            textAlign: "left",
                            padding: "1px",
                            userSelect: "none",
                            paddingLeft: "12px"
                        }
                    }, i), o.a.createElement("div", {
                        style: {
                            color: t.textDim,
                            display: "inline-block",
                            marginLeft: "2px",
                            width: "30%",
                            textAlign: "right",
                            padding: "1px 1px 1px 12px",
                            userSelect: "none"
                        }
                    }, o.a.createElement(A.a, {s: "Aggregation"})), o.a.createElement(xt, {
                        style: {marginRight: "2px"},
                        disabled: 0 === this.props.market.orderBook.level,
                        onClick: function () {
                            e.props.market.orderBook.level - 1 >= 0 && e.props.updateOrderBooksLevel(e.props.market.currentMarket.current, e.props.market.orderBook.level - 1)
                        }
                    }, o.a.createElement(m.a, {icon: gt.faPlusCircle})), o.a.createElement(xt, {
                        disabled: this.props.market.orderBook.level === r - 1,
                        onClick: function () {
                            e.props.market.orderBook.level + 1 < r && e.props.updateOrderBooksLevel(e.props.market.currentMarket.current, e.props.market.orderBook.level + 1)
                        }
                    }, o.a.createElement(m.a, {icon: bt.faMinusCircle})))
                }
            }]), n
        }(o.a.Component), kt = Object(y.e)(Object(h.c)((function (e) {
            return {market: e.market, exchange: e.exchange}
        }), (function (e) {
            return {
                updateOrderBooksLevel: function (t, n) {
                    return e(Object(yt.g)(t, n))
                }
            }
        }))(Et)), Ot = n(106), wt = n(1455), jt = n(33), At = n.n(jt), Ct = n(185), Tt = n(73), St = n(104);

        function Pt() {
            var e = Object(j.a)(["\n  text-align: right;\n  width: 35%;\n  padding: 1px 12px 1px 1px;\n"]);
            return Pt = function () {
                return e
            }, e
        }

        function It() {
            var e = Object(j.a)(["\n  text-align: right;\n  width: 35%;\n  padding: 1px 12px 1px 8px;\n"]);
            return It = function () {
                return e
            }, e
        }

        function Bt() {
            var e = Object(j.a)(["\n  text-align: left;\n  width: 30%;\n  padding: 1px 1px 1px 12px;\n"]);
            return Bt = function () {
                return e
            }, e
        }

        function Mt() {
            var e = Object(j.a)(["\n  font-size: 0.85rem;\n  color: ", ";\n  height: 24px;\n  font-weight: 600;\n  background: ", ";\n  &:hover {\n    cursor: pointer;\n    background: ", ";\n  }\n  // Hack: background-image doesn't work on safari\n  @media not all and (min-resolution:.001dpcm) { @media {\n    background-attachment: fixed;\n  }}\n  background-image: ", "\n  background-repeat: no-repeat;\n  background-position:\n        0 0, /* gradient 1 */\n        0 0;\n  background-size: ", "\n"]);
            return Mt = function () {
                return e
            }, e
        }

        var Ft = y.d.tr(Mt(), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.tableHoverBackground
        }), (function (e) {
            return "linear-gradient(to right, ".concat(e.sizeBarColor, ", ").concat(e.sizeBarColor, "), linear-gradient(to right, ").concat(e.theme.foreground, ", ").concat(e.theme.foreground, ");")
        }), (function (e) {
            return "".concat(e.sizeBarWidthStr, " 100%, 100% 100%;")
        })), _t = y.d.td(Bt()), Dt = y.d.td(It()), Nt = y.d.td(Pt()), Lt = function () {
            var e = Object(a.useContext)(y.a);
            return o.a.createElement(Ft, {style: {userSelect: "none"}}, o.a.createElement(_t, {style: {color: e.inputPlaceHolderColor}}, "-"), o.a.createElement(Dt, {style: {color: e.inputPlaceHolderColor}}, "-"), o.a.createElement(Nt, {style: {color: e.inputPlaceHolderColor}}, "-"))
        }, Wt = function (e) {
            var t = e.side, n = e.size, r = (e.filled, e.sizeBarMaxWidth, e.sizeBarMaxSize), a = e.sizeBarUnitSize,
                i = e.buyPrimary, c = e.buyBar, s = e.sellPrimary, l = e.sellBar, u = e.onClick, d = e.order,
                p = e.dataConfigs,
                m = (e.onClickCancel, Object(St.a)(e, ["side", "size", "filled", "sizeBarMaxWidth", "sizeBarMaxSize", "sizeBarUnitSize", "buyPrimary", "buyBar", "sellPrimary", "sellBar", "onClick", "order", "dataConfigs", "onClickCancel"])),
                f = r / a, h = Math.floor(n / a), b = "".concat(80 * (h >= f ? 1 : h / f), "%"),
                g = "buy" === t ? c : l;
            return o.a.createElement(Ft, Object.assign({}, m, {
                sizeBarWidthStr: b,
                sizeBarColor: g
            }), p.map((function (e, n) {
                var r, a = e.propName, c = void 0 === a ? "data" : a, l = e.format, p = e.getter, m = e.renderer;
                return "price" === c ? o.a.createElement(_t, {
                    key: n, onClick: function (e) {
                        e.preventDefault(), u && u(d, t, "price")
                    }
                }, m((r = {
                    side: t,
                    format: l
                }, Object(Tt.a)(r, c, p(d)), Object(Tt.a)(r, "buyPrimary", i), Object(Tt.a)(r, "sellPrimary", s), r))) : "size" === c ? o.a.createElement(Dt, {
                    key: n,
                    onClick: function (e) {
                        e.preventDefault(), u && u(d, t, "size")
                    }
                }, m(Object(Tt.a)({
                    side: t,
                    format: l
                }, c, p(d)))) : "position" === c ? o.a.createElement(Nt, {key: n}, m(Object(Tt.a)({
                    side: t,
                    format: l
                }, c, p(d)))) : o.a.createElement("span", null)
            })))
        };

        function zt() {
            var e = Object(j.a)(["\n  text-align: right;\n  width: 35%;\n  padding: 1px 12px 1px 1px;\n"]);
            return zt = function () {
                return e
            }, e
        }

        function Ht() {
            var e = Object(j.a)(["\n  text-align: right;\n  width: 30%;\n  padding: 1px 12px 1px 8px;\n"]);
            return Ht = function () {
                return e
            }, e
        }

        function Rt() {
            var e = Object(j.a)(["\n  text-align: left;\n  width: 35%;\n  padding: 1px 1px 1px 12px;\n"]);
            return Rt = function () {
                return e
            }, e
        }

        function Ut() {
            var e = Object(j.a)(["\n  font-weight: 400;\n  text-align: right;\n  height: 32px;\n"]);
            return Ut = function () {
                return e
            }, e
        }

        Wt.defaultProps = {side: "buy", dataConfigs: []};
        var Vt = y.d.th(Ut()), Kt = Object(y.d)(Vt)(Rt()), Yt = Object(y.d)(Vt)(Ht()), qt = Object(y.d)(Vt)(zt()),
            Gt = n(1), Xt = n.n(Gt);

        function $t() {
            var e = Object(j.a)(["\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  background: ", ";\n"]);
            return $t = function () {
                return e
            }, e
        }

        var Jt = y.d.div($t(), (function (e) {
            return e.theme.foreground
        }));
        Jt.propTypes = {children: Xt.a.node.isRequired};
        var Zt = Jt;

        function Qt() {
            var e = Object(j.a)(["\n  visibility: collapse;\n"]);
            return Qt = function () {
                return e
            }, e
        }

        function en() {
            var e = Object(j.a)(["\n  visibility: hidden;\n"]);
            return en = function () {
                return e
            }, e
        }

        function tn() {
            var e = Object(j.a)(["\n  width: 100%;\n  background: ", ";\n  font-weight: 600;\n  margin-top: -0.65em;\n  margin-bottom: 4em;\n"]);
            return tn = function () {
                return e
            }, e
        }

        var nn = y.d.table(tn(), (function (e) {
            return e.theme.foreground
        })), rn = y.d.thead(en()), an = y.d.thead(Qt()), on = function (e) {
            var t = e.children, n = e.headerLabels, r = e.tableHeaderVisibility,
                a = Object(St.a)(e, ["children", "headerLabels", "tableHeaderVisibility"]);
            return o.a.createElement(nn, a, "hidden" === r ? o.a.createElement(rn, null, o.a.createElement("tr", null, n.map((function (e, t) {
                return o.a.createElement("th", {key: t, style: {userSelect: "none"}}, e)
            })))) : o.a.createElement(an, null, o.a.createElement("tr", null, n.map((function (e, t) {
                return o.a.createElement("th", {key: t, style: {userSelect: "none"}}, e)
            })))), o.a.createElement("tbody", null, t))
        };
        on.defaultProps = {headerLabels: [], tableHeaderVisibility: "hidden"};
        var cn = on;

        function sn() {
            var e = Object(j.a)(["\n  width: 100%;\n  z-index: 1;\n  font-size: 0.9rem;\n  font-weight: normal;\n  color: ", ";\n  height: 40px;\n  user-select: none;\n  background: ", ";\n"]);
            return sn = function () {
                return e
            }, e
        }

        var ln = y.d.table(sn(), (function (e) {
            return e.theme.textDim
        }), (function (e) {
            return e.theme.tableHeaderBackground
        })), un = function (e) {
            var t = e.children, n = Object(St.a)(e, ["children"]);
            return o.a.createElement(ln, n, o.a.createElement("thead", null, o.a.createElement("tr", null, t)))
        };

        function dn() {
            var e = Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n"]);
            return dn = function () {
                return e
            }, e
        }

        var pn = y.d.div(dn());
        pn.propTypes = {children: Xt.a.node.isRequired};
        var mn = pn, fn = function (e) {
            var t = e.headerText, n = Object(a.useContext)(y.a);
            return o.a.createElement("div", {
                style: {
                    height: "44px",
                    lineHeight: "20px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    position: "relative",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    userSelect: "none",
                    color: n.textWhite
                }
            }, t)
        }, hn = n(386), bn = n(380), gn = n.n(bn);

        function yn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return yn = function () {
                return e
            }, e
        }

        function vn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return vn = function () {
                return e
            }, e
        }

        function xn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return xn = function () {
                return e
            }, e
        }

        function En() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return En = function () {
                return e
            }, e
        }

        var kn = y.d.span(En(), (function (e) {
            return e.theme.textDim
        })), On = y.d.span(xn(), (function (e) {
            return e.theme.textWhite
        })), wn = y.d.span(vn(), (function (e) {
            return e.theme.textWhite
        })), jn = y.d.span(yn(), (function (e) {
            return 0 === e.digitsAfterDecimal.length ? e.theme.textDim : e.theme.textWhite
        })), An = function (e) {
            var t = e.size, n = void 0 === t ? 0 : t, r = e.format, a = e.side, i = gn()(n).format(r);
            if (0 === n) return o.a.createElement(kn, null, i);
            var c = Object(Ct.a)(i), s = i.split(".").map((function (e) {
                return e.split("")
            })), l = Object(hn.a)(s, 2), u = l[0], d = l[1], p = void 0 === d ? [] : d, m = p.splice(p.length - c);
            return [o.a.createElement(On, {key: "dbd"}, u), o.a.createElement(jn, {
                key: "dot",
                side: a,
                digitsAfterDecimal: p
            }, "."), o.a.createElement(wn, {key: "dad"}, p), o.a.createElement(kn, {key: "tz"}, m)]
        };

        function Cn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return Cn = function () {
                return e
            }, e
        }

        var Tn = y.d.span(Cn(), (function (e) {
            return e.theme.textDim
        })), Sn = function (e) {
            var t = e.position, n = e.format, r = e.side;
            return t && Number(t) ? o.a.createElement(An, {
                size: t,
                format: n,
                side: r
            }) : o.a.createElement(Tn, null, "-")
        };

        function Pn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return Pn = function () {
                return e
            }, e
        }

        function In() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return In = function () {
                return e
            }, e
        }

        function Bn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return Bn = function () {
                return e
            }, e
        }

        function Mn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return Mn = function () {
                return e
            }, e
        }

        function Fn() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return Fn = function () {
                return e
            }, e
        }

        var _n = y.d.span(Fn(), (function (e) {
            return e.price > e.prePrice ? e.buyPrimary : e.price < e.prePrice ? e.sellPrimary : "buy" === e.side ? e.buyPrimary : e.sellPrimary
        })), Dn = y.d.span(Mn(), (function (e) {
            return e.price > e.prePrice ? e.buyPrimary : e.price < e.prePrice ? e.sellPrimary : "buy" === e.side ? e.buyPrimary : e.sellPrimary
        })), Nn = y.d.span(Bn(), (function (e) {
            return e.price > e.prePrice ? e.buyPrimary : e.price < e.prePrice ? e.sellPrimary : "buy" === e.side ? e.buyPrimary : e.sellPrimary
        })), Ln = y.d.span(In(), (function (e) {
            return e.theme.textWhite
        })), Wn = y.d.span(Pn(), (function (e) {
            return e.theme.textDim
        })), zn = y.d.span((function (e) {
            var t = e.side, n = e.digitsAfterDecimal, r = e.price, a = e.prePrice, o = e.buyPrimary, i = e.sellPrimary;
            return 0 === n.length ? {color: "buy" === t ? o : i} : r > a ? {color: o} : r < a ? {color: i} : {color: "buy" === t ? o : i}
        })), Hn = y.d.span((function (e) {
            var t = e.theme;
            e.side, e.digitsAfterDecimal;
            return {color: t.textWhite}
        })), Rn = function (e) {
            var t = e.price, n = void 0 === t ? 0 : t, r = e.format, a = e.side, i = e.prePrice, c = e.buyPrimary,
                s = e.sellPrimary, l = String(n), u = i, d = l;
            if (l.includes("e-") || l.includes("E-")) try {
                var p = r.split(".")[1].length;
                d = l = Number(l).toFixed(p)
            } catch (v) {
            } else if (l.includes("e") || l.includes("E")) try {
                l = Number(l).toLocaleString("fullwide", {useGrouping: !1})
            } catch (v) {
            } else d = gn()(l).format(r);
            var m = Object(Ct.a)(d), f = d.split(".").map((function (e) {
                return e.split("")
            })), h = Object(hn.a)(f, 2), b = h[0], g = h[1], y = g.splice(g.length - m);
            return a ? o.a.createElement("span", null, o.a.createElement(Dn, {
                key: "dbd",
                side: a,
                price: l,
                prePrice: u,
                buyPrimary: c,
                sellPrimary: s
            }, b), o.a.createElement(zn, {
                key: "dot",
                side: a,
                price: l,
                prePrice: u,
                digitsAfterDecimal: g,
                buyPrimary: c,
                sellPrimary: s
            }, "."), o.a.createElement(_n, {
                key: "dad",
                side: a,
                price: l,
                prePrice: u,
                buyPrimary: c,
                sellPrimary: s
            }, g), o.a.createElement(Nn, {
                key: "tz",
                side: a,
                price: l,
                prePrice: u,
                buyPrimary: c,
                sellPrimary: s
            }, y)) : o.a.createElement("span", null, o.a.createElement(Ln, {
                key: "_dbd",
                side: a
            }, b), o.a.createElement(Hn, {
                key: "dot",
                side: a,
                digitsAfterDecimal: g
            }, "."), o.a.createElement(Ln, {key: "_dad", side: a}, g), o.a.createElement(Wn, {key: "tz", side: a}, y))
        };
        Rn.defaultProps = {price: 0, format: "0.00"};
        var Un = Rn;

        function Vn() {
            var e = Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  position: absolute;\n"]);
            return Vn = function () {
                return e
            }, e
        }

        function Kn() {
            var e = Object(j.a)(["\n  width: 100%;\n  height: 100%;\n"]);
            return Kn = function () {
                return e
            }, e
        }

        function Yn() {
            var e = Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: ", ";\n"]);
            return Yn = function () {
                return e
            }, e
        }

        var qn = y.d.div(Yn(), (function (e) {
            return e.theme.foreground
        })), Gn = y.d.div(Kn()), Xn = y.d.div(Vn()), $n = function (e) {
            var t = e.scrollerRef, n = e.children, r = Object(St.a)(e, ["scrollerRef", "children"]);
            return o.a.createElement(qn, r, o.a.createElement(Gn, null, o.a.createElement(Xn, {
                ref: t,
                "hidden-scrollbars": !0
            }, n)))
        }, Jn = function (e) {
            var t = e.spread, n = e.label, r = e.format, i = e.buyPrimary, c = e.sellPrimary,
                s = Object(St.a)(e, ["spread", "label", "format", "buyPrimary", "sellPrimary"]),
                l = Object(a.useContext)(y.a);
            return o.a.createElement("div", Object.assign({}, s, {
                style: {
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    lineHeight: "30px",
                    color: l.textDim,
                    backgroundColor: l.spreadAggregationBackground
                }
            }), o.a.createElement("div", {
                style: {
                    display: "inline-block",
                    marginLeft: "0px",
                    width: "30%",
                    textAlign: "left",
                    padding: "1px 1px 1px 12px",
                    userSelect: "none"
                }
            }, o.a.createElement(Un, {
                price: t,
                format: r,
                buyPrimary: i,
                sellPrimary: c
            })), o.a.createElement("div", {
                style: {
                    display: "inline-block",
                    width: "35%",
                    textAlign: "right",
                    padding: "1px 12px 1px 8px",
                    userSelect: "none"
                }
            }, n))
        };
        Jn.defaultProps = {spread: 0, format: "0.00"};
        var Zn = Jn;

        function Qn() {
            var e = Object(j.a)(["\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  position: absolute;\n  background: ", ";\n"]);
            return Qn = function () {
                return e
            }, e
        }

        var er = y.d.div(Qn(), (function (e) {
            return e.theme.foreground
        }));
        er.propTypes = {children: Xt.a.node.isRequired};
        var tr = er,
            nr = ["asks", "bids", "depth", "spreadText", "onClickOrder", "sizeBarMaxWidth", "sizeBarMaxSize", "sizeBarUnitSize", "getSize", "getPrice", "getPosition", "sizeFormat", "priceFormat", "renderSize", "renderPrice", "renderPosition"],
            rr = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n(e, r) {
                    var a;
                    return Object(l.a)(this, n), (a = t.call(this, e, r)).state = {
                        hasOrders: !1,
                        hasCentered: !1
                    }, a.scroller = null, a.centerSpread = a.centerSpread.bind(Object(Ot.a)(a)), a.centerSpreadOnResize = a.centerSpreadOnResize.bind(Object(Ot.a)(a)), window.addEventListener("resize", a.centerSpreadOnResize), window.matchMedia("(max-width: 1240px)").addListener(a.centerSpread), a
                }

                return Object(u.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                        return !this.state.hasOrders && Ct.c(this.props) ? this.setState({hasOrders: !0}) : this.scroller && this.state.hasOrders && !this.state.hasCentered ? this.setState({hasCentered: !0}, this.centerSpread) : void (e.market.currentMarket.current !== this.props.market.currentMarket.current && this.centerSpread())
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        window.removeEventListener("resize", this.centerSpreadOnResize)
                    }
                }, {
                    key: "centerSpread", value: function () {
                        if (this.scroller) {
                            var e = (this.scroller.scrollHeight - this.scroller.clientHeight) / 2 + 4,
                                t = Math.round((e - 110) / 24);
                            this.scroller.scrollTop = 24 * t + 110
                        }
                    }
                }, {
                    key: "centerSpreadOnResize", value: function () {
                        if (!this.state.hasCentered) return this.centerSpread()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.theme, n = this.props, r = n.asks, a = n.bids, i = n.depth,
                            c = n.onClickOrder, s = n.sizeBarMaxWidth, l = n.sizeBarMaxSize, u = n.sizeBarUnitSize,
                            d = n.getSize, p = n.getPrice, m = n.getPosition, f = n.renderSize, h = n.renderPrice,
                            b = n.renderPosition, g = n.quoteTokenSymbol, y = n.exchange,
                            v = o.a.createElement("span", null, o.a.createElement(A.a, {s: "Price"}), " (", g, ")"),
                            x = o.a.createElement(A.a, {s: "Amount"}), E = o.a.createElement(A.a, {s: "Sum"}),
                            k = wt.a(nr, this.props), O = r.slice(Math.max(r.length - i, 0)), w = a.slice(0, i),
                            j = Math.max(O.length, w.length, 20), C = "-";
                        "zh" === Object(ie.e)() ? C = this.props.latestTrade ? this.props.latestTrade.price : "-" : O.length > 0 && w.length > 0 && (C = parseFloat(O[O.length - 1].price) - parseFloat(w[0].price));
                        var T, S, P = this.props.market.currentMarket.current,
                            I = this.props.market.currentMarket.baseTokenSymbol, B = pe.a.getTokenBySymbol(I, y.tokens),
                            M = pe.a.getMarketByPair(P, y.markets),
                            F = (M ? M.precisionForPrice : 8) - this.props.market.orderBook.level;
                        F > 0 ? T = "0." + "0".repeat(F) : F < 0 && (T = "1" + "0".repeat(-F));
                        var _, D = [{propName: "price", format: T, getter: p, renderer: h}, {
                                propName: "size",
                                format: S = B.precision > 0 ? "0." + "0".repeat(B.precision) : "1" + "0".repeat(-B.precision),
                                getter: d,
                                renderer: f
                            }, {propName: "position", format: S, getter: m, renderer: b}],
                            N = o.a.createElement(Zt, null, o.a.createElement(tr, null, o.a.createElement(un, null, o.a.createElement(Kt, null, v), o.a.createElement(Yt, null, x), o.a.createElement(qt, null, E))), o.a.createElement($n, {
                                style: {visibility: this.state.hasOrders ? "visible" : "hidden"},
                                scrollerRef: function (t) {
                                    e.scroller = At.a.findDOMNode(t)
                                }
                            }, o.a.createElement(cn, {headerLabels: [v, x, E]}, Array(Math.max(0, j - O.length)).fill().map((function (e, t) {
                                return t
                            })).map((function (e) {
                                return o.a.createElement(Lt, {key: e})
                            })), O.map((function (e, n) {
                                return o.a.createElement(Wt, {
                                    key: n,
                                    side: "sell",
                                    order: e,
                                    size: d(e),
                                    onClick: c,
                                    dataConfigs: D,
                                    sizeBarMaxSize: l,
                                    sizeBarUnitSize: u,
                                    sizeBarMaxWidth: s,
                                    buyPrimary: t.buyPrimary,
                                    buyBar: t.buyBar,
                                    sellPrimary: t.sellPrimary,
                                    sellBar: t.sellBar
                                })
                            })), o.a.createElement("tr", null, o.a.createElement("td", {colSpan: "4"}, o.a.createElement(Zn, {
                                spread: C,
                                label: "zh" === Object(ie.e)() ? o.a.createElement(A.a, {s: "Last Price"}) : o.a.createElement(A.a, {s: "Spread"}),
                                format: T,
                                buyPrimary: t.buyPrimary,
                                sellPrimary: t.sellPrimary
                            }))), w.map((function (e, n) {
                                return o.a.createElement(Wt, {
                                    key: n,
                                    side: "buy",
                                    order: e,
                                    size: d(e),
                                    onClick: c,
                                    dataConfigs: D,
                                    sizeBarMaxSize: l,
                                    sizeBarUnitSize: u,
                                    sizeBarMaxWidth: s,
                                    buyPrimary: t.buyPrimary,
                                    buyBar: t.buyBar,
                                    sellPrimary: t.sellPrimary,
                                    sellBar: t.sellBar
                                })
                            })), Array(Math.max(0, j - w.length)).fill().map((function (e, t) {
                                return t
                            })).map((function (e) {
                                return o.a.createElement(Lt, {key: e})
                            })))));
                        return _ = this.props.hideHeader ? o.a.createElement("div", null) : o.a.createElement("div", {
                            style: {
                                paddingTop: "0px",
                                paddingLeft: "0px",
                                backgroundColor: t.background
                            }
                        }, o.a.createElement(fn, {headerText: o.a.createElement(A.a, {s: "Order Book"})})), o.a.createElement(mn, k, _, N)
                    }
                }]), n
            }(o.a.Component);
        rr.defaultProps = {
            asks: [],
            bids: [],
            depth: 1 / 0,
            sizeBarMaxWidth: 20,
            sizeBarMaxSize: 1e3,
            sizeBarUnitSize: 50,
            getSize: function (e) {
                return e.base_fill_amount
            },
            getPrice: function (e) {
                return Number(e.price).toPrecision()
            },
            getPosition: function (e) {
                return e.position
            },
            sizeFormat: "0.0000",
            priceFormat: "0.000000",
            renderSize: An,
            renderPrice: Un,
            renderPosition: Sn
        };
        var ar = Object(y.e)(Object(h.c)((function (e) {
            return {layoutManager: e.layoutManager, market: e.market, exchange: e.exchange}
        }), (function (e) {
            return {}
        }))(rr)), or = n(8), ir = n(197);

        function cr() {
            var e = Object(j.a)(["\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-right: 20px;\n"]);
            return cr = function () {
                return e
            }, e
        }

        var sr = y.d.div(cr()), lr = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                var e;
                Object(l.a)(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).clickedBuyButton = function () {
                    e.props.updateOrderBookTradeHistoryPanelType("orderBook")
                }, e.clickedSellButton = function () {
                    e.props.updateOrderBookTradeHistoryPanelType("tradeHistory")
                }, e
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = this.props.theme, t = "orderBook" === this.props.tabs.type1,
                        n = "tradeHistory" === this.props.tabs.type1, r = {
                            color: e.textWhite,
                            backgroundColor: e.background,
                            borderStyle: "none",
                            height: "30px",
                            borderRadius: "0px",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            padding: "0px 2px",
                            margin: "0px 15px 0px 0px",
                            borderBottomWidth: "2px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "transparent"
                        }, a = Object(or.a)({}, r, {color: e.textWhite, borderBottomColor: e.primary}),
                        i = Object(or.a)({}, r, {color: e.textDim});
                    return o.a.createElement(sr, null, o.a.createElement(ht.a, {
                        style: t ? a : i,
                        onClick: this.clickedBuyButton
                    }, o.a.createElement(A.a, {s: "Order Book"})), o.a.createElement(ht.a, {
                        style: n ? a : i,
                        onClick: this.clickedSellButton
                    }, o.a.createElement(A.a, {s: "Recent Trades"})))
                }
            }]), n
        }(o.a.Component), ur = Object(y.e)(Object(h.c)((function (e) {
            return {tabs: e.tabs}
        }), (function (e) {
            return {
                updateOrderBookTradeHistoryPanelType: function (t) {
                    return e(Object(ir.e)(t))
                }
            }
        }))(lr));

        function dr() {
            var e = Object(j.a)(["\n  width: 33%;\n"]);
            return dr = function () {
                return e
            }, e
        }

        function pr() {
            var e = Object(j.a)(["\n  width: 23%;\n"]);
            return pr = function () {
                return e
            }, e
        }

        function mr() {
            var e = Object(j.a)(["\n  font-weight: 400;\n  text-align: right;\n  height: 32px;\n  padding: 1px;\n"]);
            return mr = function () {
                return e
            }, e
        }

        var fr = y.d.th(mr()), hr = Object(y.d)(fr)(pr()), br = Object(y.d)(fr)(dr());

        function gr() {
            var e = Object(j.a)(["\n  padding: 1px 13px 1px 1px;\n  width: 33%;\n"]);
            return gr = function () {
                return e
            }, e
        }

        function yr() {
            var e = Object(j.a)(["\n  padding: 1px 5px 1px 8px;\n  width: 30%;\n"]);
            return yr = function () {
                return e
            }, e
        }

        function vr() {
            var e = Object(j.a)(["\n  padding: 1px 10px 1px 1px;\n  width: 35%;\n"]);
            return vr = function () {
                return e
            }, e
        }

        function xr() {
            var e = Object(j.a)(["\n  text-align: right;\n  font-size: 0.85rem;\n  background: transparent;\n"]);
            return xr = function () {
                return e
            }, e
        }

        function Er() {
            var e = Object(j.a)(["\n  font-size: 0.85rem;\n  height: 24px;\n  font-weight: 600;\n  background: ", ";\n  &:hover {\n    cursor: pointer;\n    background: ", ";\n  }\n"]);
            return Er = function () {
                return e
            }, e
        }

        var kr = y.d.tr(Er(), (function (e) {
                return e.theme.foreground
            }), (function (e) {
                return e.theme.tableHoverBackground
            })), Or = y.d.td(xr()), wr = Object(y.d)(Or)(vr()), jr = Object(y.d)(Or)(yr()), Ar = Object(y.d)(Or)(gr()),
            Cr = function (e) {
                var t = e.side, n = (e.size, e.onClick), r = e.preOrder, a = e.order, i = e.dataConfigs,
                    c = e.buyPrimary, s = e.sellPrimary,
                    l = Object(St.a)(e, ["side", "size", "onClick", "preOrder", "order", "dataConfigs", "buyPrimary", "sellPrimary"]);
                return o.a.createElement(kr, Object.assign({}, l, {
                    onClick: function (e) {
                        e.preventDefault(), n && n(a, t)
                    }
                }), i.map((function (e, n) {
                    var i = e.propName, l = void 0 === i ? "data" : i, u = e.format, d = e.getter, p = e.renderer;
                    if ("size" === l) return o.a.createElement(wr, {key: n}, p(Object(Tt.a)({
                        side: t,
                        format: u
                    }, l, d(a))));
                    if ("price" === l) {
                        var m, f = r ? d(r) : 0;
                        return o.a.createElement(jr, {key: n}, p((m = {
                            side: t,
                            format: u
                        }, Object(Tt.a)(m, l, d(a)), Object(Tt.a)(m, "prePrice", f), Object(Tt.a)(m, "buyPrimary", c), Object(Tt.a)(m, "sellPrimary", s), m)))
                    }
                    return o.a.createElement(Ar, {key: n}, p(Object(Tt.a)({side: t, format: u}, l, d(a))))
                })))
            };
        Cr.defaultProps = {side: "buy", dataConfigs: []};
        var Tr = Cr;

        function Sr() {
            var e = Object(j.a)(["\n  color: ", ";\n"]);
            return Sr = function () {
                return e
            }, e
        }

        var Pr = y.d.span(Sr(), (function (e) {
                return e.theme.textDim
            })), Ir = function (e) {
                var t = e.timestamp, n = e.format;
                return o.a.createElement(Pr, null, n ? te()(t).format(n) : t)
            },
            Br = ["trades", "length", "headerText", "sizeLabel", "priceLabel", "timeStampLabel", "onClickTrade", "getSideFromLightconeData", "getTimeStampFromLightconeData", "sizeFormat", "priceFormat", "timeStampFormat", "renderSize", "renderPrice", "renderTimeStamp"],
            Mr = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).getSize = function (t) {
                        try {
                            return pe.a.fromWEI(e.props.baseTokenSymbol, t.size, e.props.exchange.tokens)
                        } catch (n) {
                            return 0
                        }
                    }, e.getPrice = function (e) {
                        return e ? Number(e.price) : 0
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e, t = this, n = this.props.theme, r = this.props, a = r.trades, i = r.length,
                            c = r.onClickTrade, s = r.getSideFromLightconeData, l = r.getTimeStampFromLightconeData,
                            u = r.sizeFormat, d = r.priceFormat, p = r.timeStampFormat, m = r.renderSize,
                            f = r.renderPrice, h = r.renderTimeStamp, b = r.quoteTokenSymbol,
                            g = o.a.createElement(A.a, {s: "Recent Trades"}), y = o.a.createElement(A.a, {s: "Amount"}),
                            v = o.a.createElement("span", null, o.a.createElement(A.a, {s: "FillPrice"}), " (", b, ")"),
                            x = o.a.createElement(A.a, {s: "Filled At"}), E = wt.a(Br, this.props), k = a.slice(0, i),
                            O = [{propName: "price", format: d, getter: this.getPrice, renderer: f}, {
                                propName: "size",
                                format: u,
                                getter: this.getSize,
                                renderer: m
                            }, {propName: "timestamp", format: p, getter: l, renderer: h}];
                        return e = this.props.hideHeader ? o.a.createElement("div", null) : o.a.createElement("div", {
                            style: {
                                paddingTop: "0px",
                                paddingLeft: "0px",
                                backgroundColor: n.background
                            }
                        }, o.a.createElement(fn, {headerText: g})), o.a.createElement(mn, E, e, o.a.createElement(Zt, null, o.a.createElement(tr, null, o.a.createElement(un, null, o.a.createElement(br, {
                            style: {
                                paddingLeft: "0px",
                                textAlign: "center"
                            }
                        }, v), o.a.createElement(hr, {
                            style: {
                                paddingRight: "13px",
                                textAlign: "center"
                            }
                        }, y), o.a.createElement(hr, {
                            style: {
                                paddingRight: "13px",
                                textAlign: "right"
                            }
                        }, x))), o.a.createElement($n, null, o.a.createElement(cn, {headerLabels: [y, v, x]}, k.map((function (e, r) {
                            return o.a.createElement(Tr, {
                                key: r,
                                order: e,
                                preOrder: r === a.length - 1 ? null : k[r + 1],
                                side: s(e),
                                size: t.getSize(e),
                                onClick: c,
                                dataConfigs: O,
                                buyPrimary: n.buyPrimary,
                                buyBar: n.buyBar,
                                sellPrimary: n.sellPrimary,
                                sellBar: n.sellBar
                            })
                        }))))))
                    }
                }]), n
            }(o.a.Component);
        Mr.defaultProps = {
            trades: [],
            length: 1 / 0,
            getSideFromLightconeData: function (e) {
                return "SELL" === e.side.toUpperCase() ? "sell" : "buy"
            },
            getTimeStampFromLightconeData: function (e) {
                return e.timestamp
            },
            sizeFormat: "0.0000",
            priceFormat: "0.000000",
            timeStampFormat: "HH:mm:ss",
            renderSize: An,
            renderPrice: Un,
            renderTimeStamp: Ir
        };
        var Fr = Object(y.e)(Object(h.c)((function (e) {
            var t = e.market, n = e.currentMarket, r = e.tradeHistory, a = e.exchange;
            return {
                market: t,
                trades: r.trades,
                baseTokenSymbol: n.baseTokenSymbol,
                quoteTokenSymbol: n.quoteTokenSymbol,
                exchange: a
            }
        }), (function (e) {
            return {}
        }))(Mr)), _r = (n(1332), function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e, t = this, n = this.props.theme, r = this.props, a = r.market, i = r.exchange,
                        c = this.props.market.currentMarket.baseTokenSymbol,
                        s = this.props.market.currentMarket.quoteTokenSymbol, l = pe.a.getTokenBySymbol(c, i.tokens),
                        u = pe.a.getMarketByPair(a.currentMarket.current, i.markets) || {precisionForPrice: 6},
                        d = l.precision ? "0." + "0".repeat(l.precision) : "1" + "0".repeat(-l.precision),
                        p = u.precisionForPrice > 0 ? " 0." + "0".repeat(u.precisionForPrice) : "1" + "0".repeat(-u.precisionForPrice),
                        m = Math.max.apply(Math, this.props.market.orderBook.sells.map((function (e) {
                            return e.sizeInNumber
                        }))), f = Math.max.apply(Math, this.props.market.orderBook.buys.map((function (e) {
                            return e.sizeInNumber
                        })));
                    e = Math.max(m, f), isFinite(e) || (e = 1e3);
                    var h = o.a.createElement("div", {className: "orderbook-side"}, o.a.createElement(ar, {
                            hideHeader: !1,
                            depth: 30,
                            baseTokenSymbol: c,
                            quoteTokenSymbol: s,
                            asks: this.props.market.orderBook.sells,
                            bids: this.props.market.orderBook.buys,
                            sizeBarMaxSize: e,
                            latestTrade: this.props.market.tradeHistory.latestTrade,
                            getPrice: function (e) {
                                return e ? e.price : 0
                            },
                            getSize: function (e) {
                                try {
                                    return e.sizeInNumber
                                } catch (t) {
                                    return 0
                                }
                            },
                            getPosition: function (e) {
                                return e.aggregatedSize
                            },
                            onClickOrder: function (e, n, r) {
                                if (t.props.updatePrice(Object(mt.toBig)(e.price).toFixed()), t.props.tradeType !== n || "size" === r) {
                                    var a = 0;
                                    if ("buy" === n.toLowerCase()) a = t.props.market.orderBook.buys.filter((function (t) {
                                        return parseFloat(t.price) >= parseFloat(e.price)
                                    })).map((function (e) {
                                        return pt.a.toBig(pe.a.fromWEI(t.props.market.currentMarket.baseTokenSymbol, e.size, i.tokens))
                                    })).reduce((function (e, t) {
                                        return e.plus(t)
                                    })); else a = t.props.market.orderBook.sells.filter((function (t) {
                                        return parseFloat(t.price) <= parseFloat(e.price)
                                    })).map((function (e) {
                                        return pt.a.toBig(pe.a.fromWEI(t.props.market.currentMarket.baseTokenSymbol, e.size, i.tokens))
                                    })).reduce((function (e, t) {
                                        return e.plus(t)
                                    }));
                                    t.props.updateAmount(pt.a.toNumber(a))
                                }
                            }
                        }), o.a.createElement(kt, null)),
                        b = o.a.createElement("div", {style: {display: "orderBook" === this.props.tabs.type1 ? "initial" : "none"}}, o.a.createElement(ar, {
                            style: {height: "calc(100vh - 64px - 45px - 45.59px + 8px)"},
                            hideHeader: !0,
                            baseTokenSymbol: c,
                            quoteTokenSymbol: s,
                            depth: 1e3,
                            asks: this.props.market.orderBook.sells,
                            bids: this.props.market.orderBook.buys,
                            sizeBarMaxSize: e,
                            latestTrade: this.props.market.tradeHistory.latestTrade,
                            getPrice: function (e) {
                                return e ? e.price : 0
                            },
                            getSize: function (e) {
                                try {
                                    return pe.a.fromWEI(c, e.size, i.tokens)
                                } catch (t) {
                                    return 0
                                }
                            },
                            getPosition: function (e) {
                                return e.aggregatedSize
                            },
                            onClickOrder: function (e, n, r) {
                                if (t.props.updatePrice(Object(mt.toBig)(e.price).toFixed()), t.props.tradeType !== n || "size" === r) {
                                    var a = 0;
                                    if ("buy" === n.toLowerCase()) a = t.props.market.orderBook.buys.filter((function (t) {
                                        return parseFloat(t.price) >= parseFloat(e.price)
                                    })).map((function (e) {
                                        return pt.a.toBig(pe.a.fromWEI(t.props.market.currentMarket.baseTokenSymbol, e.size, i.tokens))
                                    })).reduce((function (e, t) {
                                        return e.plus(t)
                                    })); else a = t.props.market.orderBook.sells.filter((function (t) {
                                        return parseFloat(t.price) <= parseFloat(e.price)
                                    })).map((function (e) {
                                        return pt.a.toBig(pe.a.fromWEI(t.props.market.currentMarket.baseTokenSymbol, e.size, i.tokens))
                                    })).reduce((function (e, t) {
                                        return e.plus(t)
                                    }));
                                    t.props.updateAmount(pt.a.toNumber(a))
                                }
                            }
                        }), o.a.createElement(kt, null)),
                        g = o.a.createElement("div", {className: "orderbook-side-and-trade-history"}, o.a.createElement("div", {
                            style: {
                                height: "44px",
                                backgroundColor: n.background
                            }
                        }, o.a.createElement(ur, null)), b, o.a.createElement(Fr, {
                            style: {
                                display: "orderBook" === this.props.tabs.type1 ? "none" : "initial",
                                height: "calc(100vh - 64px - 45px - 45.59px + 8px)"
                            }, hideHeader: !0, getTimeStamp: function (e) {
                                return e.timestamp
                            }, onClickTrade: function (e, n) {
                                t.props.updatePrice(Object(mt.toBig)(e.price).toFixed())
                            }, sizeFormat: d, priceFormat: p
                        }));
                    return o.a.createElement("div", null, h, g)
                }
            }]), n
        }(o.a.Component)), Dr = Object(y.e)(Object(h.c)((function (e) {
            return {
                layoutManager: e.layoutManager,
                market: e.market,
                tabs: e.tabs,
                myOrders: e.myOrders,
                exchange: e.exchange,
                tradeType: e.tradePanel.tradeType
            }
        }), (function (e) {
            return {
                updatePrice: function (t) {
                    return e(Object(ft.g)(t))
                }, updateAmount: function (t) {
                    return e(Object(ft.f)(t))
                }, updateTradeType: function (t) {
                    return e(Object(ft.h)(t))
                }
            }
        }))(_r));

        function Nr() {
            var e = Object(j.a)(["\n  .ant-table > tr > th {\n    padding: 6px 8px 5px 8px;\n  }\n\n  .ant-table-container table > thead > tr:first-child th:last-child {\n    text-align: center;\n  }\n\n  .ant-table-thead > tr:first-child > th:last-child {\n    text-align: center;\n  }\n\n  .ant-table-tbody > tr > td {\n    border-style: none;\n    padding: 3px 8px;\n    line-height: 22px;\n    font-size: 0.9rem;\n    background: transparent;\n  }\n"]);
            return Nr = function () {
                return e
            }, e
        }

        function Lr() {
            var e = Object(j.a)(["\n  padding: 2px 8px !important;\n  text-align: right;\n"]);
            return Lr = function () {
                return e
            }, e
        }

        var Wr = Object(y.d)($.a)(Lr()), zr = y.d.div(Nr()), Hr = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n(e, r) {
                var a;
                Object(l.a)(this, n), (a = t.call(this, e, r)).onClickCancel = function (e) {
                    Object(s.a)(c.a.mark((function t() {
                        var n, r;
                        return c.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0, n = a.props.dexAccount.account.apiKey, null !== a.props.dexAccount.password) {
                                        t.next = 4;
                                        break
                                    }
                                    throw new Error("Password is not correct! Please try again or reset Password.");
                                case 4:
                                    return r = window.wallet.submitFlexCancel(e.hash, e.clientOrderId), t.next = 7, Object(Te.b)(a.props.dexAccount.account.accountId, r.orderHash, r.clientOrderId, r.signature, n);
                                case 7:
                                    Object(Se.b)(o.a.createElement(A.a, {s: "Your order has been cancelled."}), a.props.theme), t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10, t.t0 = t.catch(0), Object(Se.a)(o.a.createElement(A.a, {s: "Failed to cancel your order."}), a.props.theme);
                                case 13:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[0, 10]])
                    })))()
                };
                var i = window.innerWidth > 992 && window.innerWidth < 1400;
                return a.state = {columns: a.getColumns(i)}, a.updateColumn = a.updateColumn.bind(Object(Ot.a)(a)), a.mql = window.matchMedia("(min-width: 992px) and (max-width: 1400px)"), a.mql.addListener(a.updateColumn), a.updateColumn(a.mql), a
            }

            return Object(u.a)(n, [{
                key: "componentWillUnmount", value: function () {
                    window.removeEventListener("resize", this.updateColumn)
                }
            }, {
                key: "updateColumn", value: function (e) {
                    this.setState({columns: this.getColumns(e.matches)})
                }
            }, {
                key: "getColumns", value: function (e) {
                    var t = [{
                        title: o.a.createElement(v.r, {style: {paddingLeft: "14px"}}, o.a.createElement(A.a, {s: "CreatedAt"})),
                        dataIndex: "date",
                        width: 110
                    }, {
                        title: "",
                        dataIndex: "padding",
                        width: 13
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Market"})),
                        dataIndex: "market"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Side"})),
                        dataIndex: "side",
                        width: window.innerWidth >= 1600 ? null : 50
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Amount"})),
                        dataIndex: "size"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Order Price"})),
                        dataIndex: "price"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Order Total"})),
                        dataIndex: "total"
                    }, {
                        title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Status / Operations"})),
                        dataIndex: "status"
                    }];
                    if (!e) {
                        var n = {
                            title: o.a.createElement(v.r, null, o.a.createElement(A.a, {s: "Fill Pctg"})),
                            dataIndex: "fill_pctg"
                        };
                        t.splice(6, 0, n)
                    }
                    return t
                }
            }, {
                key: "render", value: function () {
                    for (var e = this, t = this.props.theme, n = [], r = function (r) {
                        var a = e.props.data[r];
                        i = "-", "processing" === a.status || "waiting" === a.status ? i = o.a.createElement(v.c, {
                            onClick: function (t) {
                                t.preventDefault(), e.onClickCancel(a)
                            }
                        }, o.a.createElement(A.a, {s: "Cancel"})) : "processed" === a.status ? i = o.a.createElement(A.a, {s: "Filled"}) : "failed" === a.status ? i = o.a.createElement(A.a, {s: "Failed"}) : "cancelling" === a.status || "cancelled" === a.status ? i = o.a.createElement(A.a, {s: "Cancelled"}) : "expired" === a.status && (i = o.a.createElement(A.a, {s: "Expired"})), n.push({
                            key: r,
                            side: o.a.createElement(v.h, {style: {color: "BUY" === a.side ? t.buyPrimary : t.sellPrimary}}, "BUY" === a.side ? o.a.createElement(A.a, {s: "Buy"}) : o.a.createElement(A.a, {s: "Sell"})),
                            market: o.a.createElement(v.h, null, a.market),
                            size: o.a.createElement(v.h, null, a.sizeInString),
                            fill_pctg: o.a.createElement(v.h, {style: {color: t.textWhite}}, a.filled),
                            price: o.a.createElement(v.h, {style: {color: "BUY" === a.side ? t.buyPrimary : t.sellPrimary}}, a.price),
                            total: o.a.createElement(v.h, null, a.totalInString, " ", a.quoteToken),
                            date: o.a.createElement(v.h, {
                                style: {
                                    paddingLeft: "14px",
                                    color: t.textDim
                                }
                            }, te()(a.createdAt).format(t.timeFormat)),
                            status: o.a.createElement(v.h, {style: {color: t.textDim, textAlign: "center"}}, i)
                        })
                    }, a = 0; a < this.props.data.length; a++) {
                        var i;
                        r(a)
                    }
                    return o.a.createElement(zr, null, o.a.createElement(X.a, {
                        renderEmpty: 0 === n.length && function () {
                            return o.a.createElement(ne.a, {
                                text: "NoOpenOrders",
                                marginTop: "4%",
                                loading: e.props.loading
                            })
                        }
                    }, o.a.createElement(Q.a, {loading: this.props.loading}, o.a.createElement(J.a, {
                        style: {
                            borderStyle: "none",
                            borderWidth: "0px",
                            height: this.props.total > this.props.limit ? Oe.a.tradeOrderBaseTableHeight : Oe.a.tradeOrderBaseTableHeightNoPagination
                        },
                        size: "middle",
                        tableLayout: "fixed",
                        columns: this.state.columns,
                        dataSource: n,
                        pagination: !1,
                        scroll: {y: this.props.total > this.props.limit ? Oe.a.tradeOrderBaseTableScrollY : Oe.a.tradeOrderBaseTableScrollYNoPagination}
                    })), this.props.total > this.props.limit ? o.a.createElement(Wr, {
                        size: "small",
                        style: {background: t.spreadAggregationBackground},
                        total: this.props.total,
                        current: this.props.current,
                        onChange: this.props.onChange,
                        pageSize: this.props.limit
                    }) : o.a.createElement("div", null)))
                }
            }]), n
        }(o.a.Component);
        Hr.defaultProps = {loading: !1};
        var Rr = Object(y.e)(Object(h.c)((function (e) {
            return {dexAccount: e.dexAccount, myOrders: e.myOrders, market: e.market}
        }), (function (e) {
            return {}
        }))(Hr)), Ur = n(37), Vr = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                var e;
                Object(l.a)(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).onChange = function (t) {
                    var n = e.props.myOrders.historyOrdersLimit * (t - 1);
                    e.props.updateHistoryOrderOffset(n)
                }, e
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = Math.floor(this.props.myOrders.historyOrdersOffset / this.props.myOrders.historyOrdersLimit) + 1;
                    return o.a.createElement(Rr, {
                        placeHolder: "NoHistoryOrders",
                        data: this.props.myOrders.historyOrders,
                        total: this.props.myOrders.historyOrdersTotalNum,
                        limit: this.props.myOrders.historyOrdersLimit,
                        offset: this.props.myOrders.historyOrdersOffset,
                        current: e,
                        onChange: this.onChange
                    })
                }
            }]), n
        }(o.a.Component), Kr = Object(h.c)((function (e) {
            return {myOrders: e.myOrders}
        }), (function (e) {
            return {
                updateHistoryOrderOffset: function (t) {
                    return e(Object(Ur.m)(t))
                }
            }
        }))(Vr), Yr = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                var e;
                Object(l.a)(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).onChange = function (t) {
                    var n = e.props.myOrders.openOrdersLimit * (t - 1);
                    e.props.updateOpenOrderOffset(n)
                }, e
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = Math.floor(this.props.myOrders.openOrdersOffset / this.props.myOrders.openOrdersLimit) + 1;
                    return o.a.createElement(Rr, {
                        placeHolder: "NoOpenOrders",
                        data: this.props.myOrders.openOrders,
                        total: this.props.myOrders.openOrdersTotalNum,
                        limit: this.props.myOrders.openOrdersLimit,
                        offset: this.props.myOrders.openOrdersOffset,
                        current: e,
                        onChange: this.onChange
                    })
                }
            }]), n
        }(o.a.Component), qr = Object(h.c)((function (e) {
            return {myOrders: e.myOrders}
        }), (function (e) {
            return {
                updateOpenOrderOffset: function (t) {
                    return e(Object(Ur.n)(t))
                }
            }
        }))(Yr), Gr = (n(1333), n(708));

        function Xr() {
            var e = Object(j.a)(["\n  margin: 0px;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-left: 4px !important;\n  padding-right: 4px !important;\n  margin-right: 4px;\n  border-color: transparent !important;\n  color: ", "!important;\n"]);
            return Xr = function () {
                return e
            }, e
        }

        function $r() {
            var e = Object(j.a)(["\n  && {\n    font-size: 0.85rem;\n  }\n"]);
            return $r = function () {
                return e
            }, e
        }

        function Jr() {
            var e = Object(j.a)(["\n  margin: 0px;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-left: 4px !important;\n  padding-right: 4px !important;\n  margin-right: 4px;\n  color: ", "!important;\n"]);
            return Jr = function () {
                return e
            }, e
        }

        function Zr() {
            var e = Object(j.a)(["\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-right: 0px;\n"]);
            return Zr = function () {
                return e
            }, e
        }

        var Qr = y.d.div(Zr()), ea = Object(y.d)(v.c)(Jr(), (function (e) {
                return e.theme.red
            })), ta = Object(y.d)(Gr.a)($r()), na = Object(y.d)(v.n)(Xr(), (function (e) {
                return e.theme.textDim
            })), ra = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(a))).clickedOpenOrdersButton = function () {
                        e.props.updateMyOrdersAndMyTradesType("open-orders")
                    }, e.clickedOrderHistory = function () {
                        e.props.updateMyOrdersAndMyTradesType("history-orders")
                    }, e.clickedShowAll = function (t) {
                        e.props.updateShowAllOpenOrders(t.target.checked)
                    }, e.clickedCancelAllOrders = function () {
                        Object(s.a)(c.a.mark((function t() {
                            var n, r;
                            return c.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, n = e.props.dexAccount.account.apiKey, null !== e.props.dexAccount.password) {
                                            t.next = 4;
                                            break
                                        }
                                        throw new Error("Password is not correct! Please try again or reset Password.");
                                    case 4:
                                        return r = window.wallet.submitFlexCancel(), t.next = 7, Object(Te.a)(e.props.dexAccount.account.accountId, r.signature, n);
                                    case 7:
                                        Object(Se.b)(o.a.createElement(A.a, {s: "All of your orders have been cancelled successfully."}), e.props.theme), e.props.emptyMyOpenOrders(), e.props.fetchMyOpenOrders(e.props.dexAccount.account.accountId, 20, 0, e.props.market.currentMarket.current, e.props.dexAccount.account.apiKey, e.props.tokens), t.next = 15;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(0), Object(Se.a)(o.a.createElement(A.a, {s: "Failed to cancel your order."}), e.props.theme);
                                    case 15:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[0, 12]])
                        })))()
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props.theme, t = "open-orders" === this.props.tabs.type2,
                            n = "history-orders" === this.props.tabs.type2, r = this.props.dexAccount.account, a = {
                                color: e.textWhite,
                                backgroundColor: e.background,
                                borderStyle: "none",
                                height: "30px",
                                borderRadius: "0px",
                                fontWeight: "600",
                                fontSize: "0.9rem",
                                padding: "0px 2px",
                                margin: "0px 15px 0px 0px",
                                borderBottomWidth: "2px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "transparent"
                            }, i = Object(or.a)({}, a, {color: e.textWhite, borderBottomColor: e.primary}),
                            c = Object(or.a)({}, a, {color: e.textDim});
                        return o.a.createElement(Qr, null, o.a.createElement(ht.a, {
                            style: t ? i : c,
                            onClick: this.clickedOpenOrdersButton
                        }, o.a.createElement(A.a, {s: "Open Orders"})), o.a.createElement(ht.a, {
                            style: n ? i : c,
                            onClick: this.clickedOrderHistory
                        }, o.a.createElement(A.a, {s: "Order History"})), o.a.createElement("div", {
                            style: {
                                float: "right",
                                marginTop: "4px"
                            }
                        }, r.state === Be.b && o.a.createElement(N.a, {
                            onChange: this.clickedShowAll,
                            defaultChecked: this.props.myOrders.showAllOpenOrders
                        }, o.a.createElement(A.a, {s: "Show Other Pairs"})), this.props.myOrders.openOrders.length > 1 && t && r.state === Be.b && o.a.createElement(ta, {
                            mouseLeaveDelay: .2,
                            overlayClassName: "defaultPopover",
                            icon: o.a.createElement("span", null),
                            title: o.a.createElement(A.a, {s: "CancelAllConfirm"}),
                            placement: "bottom",
                            okText: o.a.createElement(A.a, {s: "Yes"}),
                            cancelText: o.a.createElement(A.a, {s: "No"}),
                            onConfirm: this.clickedCancelAllOrders
                        }, o.a.createElement(ea, null, o.a.createElement(A.a, {s: "Cancel All"}))), r.state === Be.b && o.a.createElement(na, {
                            type: "link",
                            href: t ? "/orders/open-orders" : n ? "/orders/order-history" : ""
                        }, o.a.createElement(A.a, {s: "View More"}))))
                    }
                }]), n
            }(o.a.Component), aa = Object(y.e)(Object(h.c)((function (e) {
                return {
                    dexAccount: e.dexAccount,
                    market: e.market,
                    myOrders: e.myOrders,
                    tabs: e.tabs,
                    tokens: e.exchange.tokens
                }
            }), (function (e) {
                return {
                    updateShowAllOpenOrders: function (t) {
                        return e(Object(Ur.o)(t))
                    }, emptyMyOpenOrders: function () {
                        return e(Object(Ur.j)())
                    }, fetchMyOpenOrders: function (t, n, r, a, o, i) {
                        return e(Object(Ur.l)(t, n, r, a, o, i))
                    }, updateMyOrdersAndMyTradesType: function (t) {
                        return e(Object(ir.d)(t))
                    }
                }
            }))(ra)), oa = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    return Object(l.a)(this, n), t.apply(this, arguments)
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props.theme;
                        return o.a.createElement("div", {
                            style: {
                                paddingLeft: "0px",
                                paddingTop: "0px",
                                marginTop: "0px",
                                borderWidth: "0px",
                                height: Oe.a.tradeOrderAndTradeHeight,
                                background: e.foreground,
                                overflow: "hidden"
                            }
                        }, o.a.createElement("div", {
                            style: {
                                height: "44px",
                                backgroundColor: e.background
                            }
                        }, o.a.createElement(aa, null)), o.a.createElement("div", {style: {display: "open-orders" === this.props.tabs.type2 ? "block" : "none"}}, o.a.createElement(qr, null)), o.a.createElement("div", {style: {display: "history-orders" === this.props.tabs.type2 ? "block" : "none"}}, o.a.createElement(Kr, null)))
                    }
                }]), n
            }(o.a.Component), ia = Object(y.e)(Object(h.c)((function (e) {
                return {tabs: e.tabs}
            }), (function (e) {
                return {}
            }))(oa)), ca = (n(1336), n(710)), sa = (n(450), n(377)), la = (n(323), n(72)), ua = (n(1338), n(476)),
            da = n(36);
        var pa = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = this.props.theme;
                    return o.a.createElement("div", null, o.a.createElement("div", {style: {textAlign: this.props.textAlign}}, o.a.createElement(v.e, {
                        style: {
                            textAlign: this.props.textAlign,
                            whiteSpace: "nowrap"
                        }
                    }, this.props.row1)), o.a.createElement("div", {
                        style: {
                            textAlign: this.props.textAlign,
                            whiteSpace: "nowrap"
                        }
                    }, o.a.createElement(v.o, {
                        style: {
                            whiteSpace: "nowrap",
                            color: this.props.row2Color ? this.props.row2Color : e.textDim
                        }
                    }, this.props.row2)))
                }
            }]), n
        }(o.a.Component), ma = Object(y.e)(pa);

        function fa() {
            var e = Object(j.a)(["\n  background: ", "!important;\n  border-top: none !important;\n  margin-bottom: 8px !important;\n  height: 56px !important;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background: ", "!important;\n  }\n"]);
            return fa = function () {
                return e
            }, e
        }

        function ha() {
            var e = Object(j.a)(["\n  display: inline-block;\n  width: 42px;\n  height: 28px;\n  border-radius: 50%;\n  margin-right: 16px;\n  margin-left: -8px;\n  margin-top: -8px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-origin: content-box;\n"]);
            return ha = function () {
                return e
            }, e
        }

        var ba = y.d.a(ha()), ga = Object(y.d)(ua.a.Item)(fa(), (function (e) {
            return e.theme.sidePanelBackground
        }), (function (e) {
            return e.theme.sidePanelBackground
        })), ya = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n(e) {
                var r;
                return Object(l.a)(this, n), (r = t.call(this, e)).state = {filter: "", tickers: []}, r
            }

            return Object(u.a)(n, [{
                key: "componentDidMount", value: function () {
                    this.loadData()
                }
            }, {
                key: "componentDidUpdate", value: function (e, t) {
                    !1 !== this.props.isVisible && this.props.isVisible !== e.isVisible && this.loadData()
                }
            }, {
                key: "loadData", value: function () {
                    var e = this;
                    Object(s.a)(c.a.mark((function t() {
                        var n;
                        return c.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, Object(da.i)(e.props.market.marketList.markets.filter((function (e) {
                                        return e.enabled
                                    })).map((function (e) {
                                        return e.market
                                    })), e.props.tokens);
                                case 3:
                                    n = t.sent, e.setState({tickers: n}), t.next = 9;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0);
                                case 9:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[0, 7]])
                    })))()
                }
            }, {
                key: "getAssetUrl", value: function (e, t) {
                    var n = window.wallet ? window.wallet.address : t;
                    return "ETH" === e.symbol ? "".concat(Object(ie.c)(this.props.chainId), "/address/").concat(n) : "".concat(Object(ie.c)(this.props.chainId), "/token/").concat(e.address, "?a=").concat(n)
                }
            }, {
                key: "getAssetIconUrl", value: function (e) {
                    var t;
                    if ("ETH" === e.symbol) t = "info"; else {
                        if ("LRC" === e.symbol) return "url(/assets/images/LRC.png)";
                        t = "assets/" + e.address
                    }
                    return "url(/assets/images/ethereum/" + t + "/logo.png)"
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props.theme, n = this.state.filter, r = this.props.tokens,
                        a = "" !== n ? this.props.market.marketList.markets.filter((function (e) {
                            return e.markets.includes(n.toUpperCase()) && e.enabled
                        })) : this.props.market.marketList.markets.filter((function (e) {
                            return e.enabled
                        }));
                    a = function (e) {
                        for (var t = [], n = 0; n < e.length; n += 1) {
                            var r = e[n];
                            switch (r.market) {
                                case"LRC-USDT":
                                    r.sortWeight = 2e3;
                                    break;
                                case"LRC-ETH":
                                    r.sortWeight = 1e3;
                                    break;
                                case"ETH-USDT":
                                    r.sortWeight = 900;
                                    break;
                                case"ETH-DAI":
                                    r.sortWeight = 800;
                                    break;
                                case"USDT-DAI":
                                    r.sortWeight = 700;
                                    break;
                                case"LINK-ETH":
                                    r.sortWeight = 600;
                                    break;
                                default:
                                    r.sortWeight = -1
                            }
                            t.push(r)
                        }
                        return t.sort((function (e, t) {
                            return t.sortWeight - e.sortWeight
                        })), t
                    }(a);
                    for (var i = [], c = function (t) {
                        var n = a[t], o = e.state.tickers.filter((function (e) {
                            return e.market === n.market
                        })), c = Object(or.a)({}, n, {
                            baseToken: pe.a.getTokenBySymbol(n.market.split("-")[0], r),
                            quoteToken: pe.a.getTokenBySymbol(n.market.split("-")[1], r)
                        });
                        1 === o.length ? c.ticker = o[0] : c.ticker = {
                            percentChange24h: "-",
                            volume: "-",
                            close: "-"
                        }, i.push(c)
                    }, s = 0; s < a.length; s += 1) c(s);
                    return o.a.createElement("div", {style: {width: "400px"}}, o.a.createElement("div", {style: {paddingTop: "8px"}}, o.a.createElement(ua.a, {
                        bordered: !0, dataSource: i, renderItem: function (n) {
                            return o.a.createElement("div", {
                                onClick: function () {
                                    e.props.market !== n && (Ke.b.push("/trade/" + n.market), e.props.closePopover())
                                }
                            }, o.a.createElement(ga, null, o.a.createElement(ba, {
                                href: e.getAssetUrl(n.baseToken, e.props.exchangeAddress),
                                target: "_blank",
                                style: {backgroundImage: e.getAssetIconUrl(n.baseToken)}
                            }), o.a.createElement("span", {
                                style: {
                                    width: "20%",
                                    minWidth: "120px"
                                }
                            }, o.a.createElement(ma, {
                                textAlign: "left",
                                row1: n.market,
                                row2: o.a.createElement(A.a, {s: n.baseToken.name})
                            })), o.a.createElement("span", {
                                style: {
                                    width: "46%",
                                    marginRight: "4%"
                                }
                            }, o.a.createElement(ma, {
                                textAlign: "right",
                                row1: "".concat(n.ticker.volume, " ").concat(n.quoteToken.symbol),
                                row2: o.a.createElement(A.a, {s: "24h Volume"})
                            })), o.a.createElement("span", {style: {width: "30%"}}, o.a.createElement(ma, {
                                textAlign: "right",
                                row1: n.ticker.close ? n.ticker.close : "-",
                                row2: "".concat(n.ticker.percentChange24h, "%"),
                                row2Color: n.ticker.percentChange24h && n.ticker.percentChange24h.startsWith("-") ? t.downColor : t.upColor
                            }))))
                        }
                    })))
                }
            }]), n
        }(o.a.Component), va = Object(y.e)(Object(h.c)((function (e) {
            var t = e.market, n = e.exchange;
            return {
                chainId: n.chainId,
                market: t,
                markets: n.markets,
                tokens: n.tokens,
                exchangeAddress: n.exchangeAddress
            }
        }), (function (e) {
            return {}
        }))(ya)), xa = n(712), Ea = n(713), ka = n(198), Oa = n(55), wa = function () {
            return o.a.createElement("svg", {
                width: "15px",
                height: "9px",
                viewBox: "0 0 10 6"
            }, o.a.createElement("defs", null, o.a.createElement("linearGradient", {
                x1: "0%",
                y1: "-21.957624%",
                x2: "100%",
                y2: "100%",
                id: "linearGradient-1"
            }, o.a.createElement("stop", {
                stopColor: "#00AEF3",
                offset: "0%"
            }), o.a.createElement("stop", {
                stopColor: "#3750FF",
                offset: "100%"
            }))), o.a.createElement("g", {
                id: "\u63a7\u4ef6",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd"
            }, o.a.createElement("g", {
                id: "\u9009\u62e9",
                transform: "translate(-230.000000, -23.000000)",
                fill: "url(#linearGradient-1)"
            }, o.a.createElement("g", {id: "\u7f16\u7ec4-2"}, o.a.createElement("g", {transform: "translate(8.000000, 13.000000)"}, o.a.createElement("g", {
                id: "Icon/right-Arrow",
                transform: "translate(227.000000, 11.000000) rotate(-270.000000) translate(-227.000000, -11.000000) translate(223.500000, 6.000000)"
            }, o.a.createElement("g", {
                transform: "translate(3.500000, 5.000000) rotate(-270.000000) translate(-3.500000, -5.000000) translate(-1.000000, 2.000000)",
                id: "Icon/Up-Arrow"
            }, o.a.createElement("path", {d: "M0.120616938,5.13596683 L4.1871372,0.18512069 C4.36855783,-0.0357525857 4.68889497,-0.0628236186 4.90263022,0.124655845 C4.92605459,0.145202709 4.9476254,0.167904898 4.96707703,0.192482859 L8.88530375,5.143329 C9.06278977,5.36759014 9.03074631,5.69807569 8.81373269,5.88148914 C8.72305225,5.95812954 8.60951179,6 8.49236581,6 L0.50761884,6 C0.227268696,6 0,5.76514131 0,5.47542843 C0,5.35107753 0.0427473669,5.23077031 0.120616938,5.13596683 Z"}))))))))
        };

        function ja() {
            var e = Object(j.a)(["\n  padding-left: 4px;\n"]);
            return ja = function () {
                return e
            }, e
        }

        function Aa() {
            var e = Object(j.a)(["\n  cursor: 'default';\n  padding-left: 0px;\n  padding-right: 20px;\n  line-height: ", ";\n"]);
            return Aa = function () {
                return e
            }, e
        }

        function Ca() {
            var e = Object(j.a)(["\n  background: ", ";\n  color: ", ";\n  height: 46px !important;\n  font-size: 0.9rem !important;\n  font-weight: 600 !important;\n  border-radius: 4px;\n  border: 1px solid ", "  !important;\n\n  &:hover, &:focus  {\n    background: ", " !important;\n    border 1px solid  ", "  !important;\n    color: ", ";\n  }\n\n  FontAwesomeIcon {\n    font-size: 16px;\n  }\n"]);
            return Ca = function () {
                return e
            }, e
        }

        var Ta = Object(y.d)(ht.a)(Ca(), (function (e) {
            return e.theme.foreground
        }), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.inputBorderColor
        }), (function (e) {
            return e.theme.background
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        }), (function (e) {
            return e.theme.textBright
        })), Sa = Object(y.d)(la.a.Item)(Aa(), Oe.a.tickerBarHeight), Pa = Object(y.d)(v.e)(ja()), Ia = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n(e, r) {
                var a;
                return Object(l.a)(this, n), (a = t.call(this, e, r)).state = {modalVisible: !1}, a.setModalVisible = a.setModalVisible.bind(Object(Ot.a)(a)), a.handleClickChange = a.handleClickChange.bind(Object(Ot.a)(a)), a
            }

            return Object(u.a)(n, [{
                key: "componentDidMount", value: function () {
                    this.props.fetchTicker(this.props.currentMarket.current, this.props.tokens)
                }
            }, {
                key: "componentDidUpdate", value: function (e, t) {
                    e && e.currentMarket && e.currentMarket.current && e.currentMarket.current !== this.props.currentMarket.current && (this.props.restTicker(), this.props.fetchTicker(this.props.currentMarket.current, this.props.tokens))
                }
            }, {
                key: "setModalVisible", value: function (e) {
                    this.setState({modalVisible: e})
                }
            }, {
                key: "handleClickChange", value: function (e) {
                    this.setState({modalVisible: e}), Oa.a.trackEvent({
                        type: "LOCATION_CHANGE",
                        data: {location: "market-selection", visible: e}
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props.theme, n = this.props, r = n.ticker, a = n.currentMarket,
                        i = "zh" === this.props.userPreferences.language ? "https://loopring.org/#/post/loopring-api" : "https://loopring.org/#/post/loopring-exchange-launches-api-2",
                        c = this.props.cmcPrice.prices, s = "-", l = this.props.cmcPrice.legal,
                        u = o.a.createElement(A.a, {s: "Last Price"});
                    try {
                        s = c.filter((function (e) {
                            return e.symbol === a.baseTokenSymbol
                        }))[0].price
                    } catch (d) {
                    }
                    return o.a.createElement("div", {style: {borderBottomStyle: "none"}}, o.a.createElement(la.a, {
                        selectedKeys: [],
                        mode: "horizontal",
                        theme: "dark",
                        style: {background: t.secondaryNavbarBackground, lineHeight: Oe.a.tickerBarHeight}
                    }, o.a.createElement(la.a.Item, {
                        key: "current-market",
                        style: {
                            width: Oe.a.tradePanelWidth,
                            height: "46px",
                            background: t.sidePanelBackground,
                            paddingLeft: Oe.a.sidePadding,
                            paddingRight: Oe.a.sidePadding
                        }
                    }, o.a.createElement(sa.a, {
                        overlayClassName: "marketSelection",
                        placement: "bottomLeft",
                        title: null,
                        content: o.a.createElement(va, {
                            isVisible: this.state.modalVisible, closePopover: function () {
                                e.setModalVisible(!1)
                            }
                        }),
                        trigger: "click",
                        visible: this.state.modalVisible,
                        onVisibleChange: this.handleClickChange
                    }, o.a.createElement(Ta, {
                        block: !0, onClick: function () {
                            return e.setModalVisible(!0)
                        }
                    }, o.a.createElement("span", {
                        style: {
                            width: "94%",
                            textAlign: "left"
                        }
                    }, a.current), o.a.createElement(wa, null)))), o.a.createElement(Sa, {
                        key: "current-market-trade-price",
                        selectable: !1,
                        style: {paddingLeft: "12px"}
                    }, o.a.createElement(v.o, null, u), o.a.createElement(Pa, null, r.close, " ", a.quoteTokenSymbol, " (", s, " ", l, ")")), o.a.createElement(Sa, {
                        key: "current-market-trade-change",
                        selectable: !1
                    }, o.a.createElement(v.o, null, o.a.createElement(A.a, {s: "24h Change"})), o.a.createElement(Pa, {style: {color: r.percentChange24h.startsWith("-") ? t.downColor : t.upColor}}, r.percentChange24h)), o.a.createElement(Sa, {
                        key: "current-market-trade-volume",
                        selectable: !1
                    }, o.a.createElement(v.o, null, o.a.createElement(A.a, {s: "24h Volume"})), o.a.createElement(Pa, null, r.volume, " ", a.quoteTokenSymbol)), o.a.createElement(Sa, {
                        key: "current-market-trade-high",
                        selectable: !1
                    }, o.a.createElement(v.o, null, o.a.createElement(A.a, {s: "High"})), o.a.createElement(Pa, null, r.high, " ", a.quoteTokenSymbol)), o.a.createElement(Sa, {key: "current-market-trade-low"}, o.a.createElement(v.o, null, o.a.createElement(A.a, {s: "Low"})), o.a.createElement(Pa, null, r.low, " ", a.quoteTokenSymbol)), o.a.createElement(la.a.Item, {
                        key: "market-available",
                        style: {float: "right", paddingLeft: "0px", paddingRight: "24px", cursor: "default"}
                    }, o.a.createElement(ca.a, {
                        autoplay: !0,
                        dots: !1,
                        speed: 5e3,
                        style: {
                            width: "225px",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            userSelect: "none",
                            height: Oe.a.tickerBarHeight
                        }
                    }, " ", o.a.createElement("div", null, o.a.createElement("div", {
                        style: {
                            float: "right",
                            height: Oe.a.tickerBarHeight,
                            lineHeight: Oe.a.tickerBarHeight,
                            color: t.theme
                        }
                    }, o.a.createElement("a", {
                        style: {color: t.theme},
                        href: i,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o.a.createElement(m.a, {icon: xa.faBell}), " ", o.a.createElement(A.a, {s: "Exchange API Released"})))), o.a.createElement("div", null, o.a.createElement("div", {
                        style: {
                            float: "right",
                            height: Oe.a.tickerBarHeight,
                            lineHeight: Oe.a.tickerBarHeight,
                            color: t.green
                        }
                    }, o.a.createElement("span", {style: {color: t.green}}, o.a.createElement(m.a, {icon: Ea.faDotCircle}), " ", o.a.createElement(A.a, {s: "Market Available"}))))))))
                }
            }]), n
        }(o.a.Component), Ba = Object(z.b)(Object(y.e)(Object(h.c)((function (e) {
            return {ticker: e.ticker, currentMarket: e.currentMarket, cmcPrice: e.cmcPrice, tokens: e.exchange.tokens}
        }), (function (e) {
            return {
                restTicker: function () {
                    return e(Object(ka.d)())
                }, fetchTicker: function (t, n) {
                    return e(Object(ka.c)(t, n))
                }
            }
        }))(Ia))), Ma = (n(142), n(68)), Fa = (n(579), n(271)), _a = n(379);

        function Da() {
            var e = Object(j.a)(["\n  color: ", "!important;\n  border: 1px solid ", "!important;\n  height: 36px;\n  border-radius: 2px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  background: transparent !important;\n  margin: auto;\n  padding: 0;\n\n  &:hover {\n    color: ", "!important;\n    border: 1px solid ", "!important;\n  }\n"]);
            return Da = function () {
                return e
            }, e
        }

        var Na = Object(y.d)(ht.a)(Da(), (function (e) {
            return e.theme.textWhite
        }), (function (e) {
            return e.theme.inputBorderColor
        }), (function (e) {
            return e.theme.textBright
        }), (function (e) {
            return e.theme.inputBorderActiveColor
        })), La = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                return Object(l.a)(this, n), t.apply(this, arguments)
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = this, t = this.props.theme, n = this.props, r = n.dexAccount, a = n.market, i = !0;
                    "undefined" !== typeof window.wallet && r && r.account && r.account.keyPairCipherText && r.account && r.account.accountId && (i = !1);
                    var c = o.a.createElement("div", null, o.a.createElement(E.a, {
                        className: "row1",
                        gutter: 4,
                        style: {color: t.textWhite, paddingTop: "0px"}
                    }, o.a.createElement(k.a, {
                        className: "columnLeft",
                        span: 12,
                        style: {}
                    }, o.a.createElement(Na, {
                        block: !0, onClick: function () {
                            e.props.showDepositModal(!0, a.currentMarket.baseTokenSymbol)
                        }, disabled: i || !this.props.metaMask.isDesiredNetwork
                    }, o.a.createElement(m.a, {
                        style: {marginRight: "4px"},
                        color: t.green,
                        icon: Fa.faArrowAltCircleDown
                    }), o.a.createElement(A.a, {s: "Deposit"}))), o.a.createElement(k.a, {
                        className: "columnRight",
                        span: 12
                    }, o.a.createElement(Na, {
                        block: !0,
                        onClick: function () {
                            e.props.showWithdrawModal(!0, a.currentMarket.baseTokenSymbol)
                        },
                        disabled: i || this.props.dexAccount.account.state !== Be.b || !this.props.metaMask.isDesiredNetwork
                    }, o.a.createElement(m.a, {
                        style: {marginRight: "4px"},
                        color: t.red,
                        icon: _a.faArrowAltCircleUp
                    }), o.a.createElement(A.a, {s: "Withdraw"})))));
                    return o.a.createElement("div", {style: {}}, c)
                }
            }]), n
        }(o.a.Component), Wa = Object(y.e)(Object(h.c)((function (e) {
            return {balances: e.balances, dexAccount: e.dexAccount, metaMask: e.metaMask, market: e.market}
        }), (function (e) {
            return {
                showDepositModal: function (t, n) {
                    return e(Object(g.o)(t, n))
                }, showWithdrawModal: function (t, n) {
                    return e(Object(g.t)(t, n))
                }
            }
        }))(La)), za = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                var e;
                Object(l.a)(this, n);
                for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(a))).getAvailableAmount = function (e, t) {
                    var n = t.find((function (t) {
                        return t.tokenId === e.tokenId
                    }));
                    return n ? n.availableInAssetPanel : Number(0).toFixed(e.precision)
                }, e.getAvailableTotalInFiat = function (t, n, r, a) {
                    if (r) try {
                        var i = r.filter((function (e) {
                            return e.symbol === t.symbol
                        }))[0].price, c = (parseFloat(i) * parseFloat(n)).toFixed(t.precision);
                        return o.a.createElement("div", null, "".concat(e.props.cmcPrice.legalPrefix).concat(c))
                    } catch (s) {
                    }
                    return o.a.createElement("div", null, Number(0).toFixed(t.precision))
                }, e
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e, t, n, r, a = this.props.theme, i = this.props, c = i.balances, s = i.market, l = i.exchange,
                        u = this.props.cmcPrice.prices;
                    if (c && c.length && u && u.length && l.tokens) {
                        var d = pe.a.getTokenBySymbol(s.currentMarket.baseTokenSymbol, l.tokens);
                        e = this.getAvailableAmount(d, c), t = this.getAvailableTotalInFiat(d, e, u, l.tokens);
                        var p = pe.a.getTokenBySymbol(s.currentMarket.quoteTokenSymbol, l.tokens);
                        n = this.getAvailableAmount(p, c), r = this.getAvailableTotalInFiat(p, n, u, l.tokens)
                    } else e = o.a.createElement("div", null, "-"), t = o.a.createElement("div", null, "\xa0"), n = o.a.createElement("div", null, "-"), r = o.a.createElement("div", null, "\xa0");
                    var m = o.a.createElement("div", {className: "header"}, o.a.createElement(E.a, {className: "row"}, o.a.createElement(k.a, {span: 8}, o.a.createElement("div", {
                        className: "columnLeft",
                        style: {userSelect: "none", color: a.textDim}
                    }, o.a.createElement(A.a, {s: "Asset"}))), o.a.createElement(k.a, {span: 16}, o.a.createElement("div", {
                        className: "columnRight",
                        style: {userSelect: "none", color: a.textDim}
                    }, o.a.createElement(A.a, {s: "Available Balance"})))));
                    return o.a.createElement("div", {className: "asset-panel"}, m, o.a.createElement("div", {className: "body"}, o.a.createElement(E.a, {
                        className: "row",
                        gutter: 16,
                        style: {color: a.textWhite, fontSize: "0.9rem", paddingTop: "16px", paddingBottom: "0px"}
                    }, o.a.createElement(k.a, {
                        className: "columnLeft",
                        span: 12,
                        style: {}
                    }, this.props.market.currentMarket.baseTokenSymbol), o.a.createElement(k.a, {
                        className: "columnRight",
                        span: 12,
                        style: {fontWeight: "600", fontSize: "0.9rem", color: a.textWhite}
                    }, e)), o.a.createElement(E.a, {
                        className: "row",
                        gutter: 16,
                        style: {color: a.textWhite, paddingTop: "0px", paddingBottom: "0px"}
                    }, o.a.createElement(k.a, {
                        className: "columnLeft",
                        span: 12
                    }), o.a.createElement(k.a, {
                        className: "columnRight",
                        span: 12,
                        style: {fontWeight: "600", fontSize: "0.9rem", color: a.textDim}
                    }, t)), o.a.createElement(E.a, {
                        className: "row",
                        gutter: 16,
                        style: {color: a.textWhite, fontSize: "0.9rem", paddingTop: "16px", paddingBottom: "0px"}
                    }, o.a.createElement(k.a, {
                        className: "columnLeft",
                        span: 12,
                        style: {}
                    }, this.props.market.currentMarket.quoteTokenSymbol), o.a.createElement(k.a, {
                        className: "columnRight",
                        span: 12,
                        style: {fontSize: "0.9rem", fontWeight: "600", color: a.textWhite}
                    }, n)), o.a.createElement(E.a, {
                        className: "row",
                        gutter: 16,
                        style: {color: a.textWhite, fontSize: "0.9rem", paddingTop: "0px", paddingBottom: "16px"}
                    }, o.a.createElement(k.a, {
                        className: "columnLeft",
                        span: 12
                    }), o.a.createElement(k.a, {
                        className: "columnRight",
                        span: 12,
                        style: {fontWeight: "600", fontSize: "0.9rem", color: a.textDim}
                    }, r)), o.a.createElement(Wa, null)))
                }
            }]), n
        }(o.a.Component), Ha = Object(y.e)(Object(h.c)((function (e) {
            var t = e.balances, n = e.market, r = e.cmcPrice, a = e.exchange;
            return {balances: t.balances, market: n, cmcPrice: r, exchange: a}
        }), (function (e) {
            return {}
        }))(za)), Ra = n(227), Ua = function (e) {
            Object(p.a)(n, e);
            var t = Object(d.a)(n);

            function n() {
                var e;
                Object(l.a)(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).clickedBuyButton = function () {
                    e.props.updateTradeType("buy")
                }, e.clickedSellButton = function () {
                    e.props.updateTradeType("sell")
                }, e
            }

            return Object(u.a)(n, [{
                key: "render", value: function () {
                    var e = this.props.theme, t = "buy" === this.props.tradeType, n = "sell" === this.props.tradeType,
                        r = {
                            color: e.textBigButton,
                            borderStyle: "none",
                            height: "32px",
                            borderRadius: "0px",
                            fontWeight: "600",
                            fontSize: "0.85rem",
                            textTransform: "uppercase",
                            borderBottomWidth: "2px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "transparent",
                            background: "transparent"
                        }, a = Object(or.a)({}, r, {borderBottomColor: e.buyPrimary, color: e.textWhite}),
                        i = Object(or.a)({}, r, {borderBottomColor: e.sellPrimary, color: e.textWhite}),
                        c = Object(or.a)({}, r, {color: e.textDim});
                    return o.a.createElement("div", null, o.a.createElement(E.a, {
                        gutter: 0,
                        style: {
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: e.textWhite,
                            backgroundColor: "transparent",
                            borderRadius: "4px"
                        }
                    }, o.a.createElement(k.a, {className: "columnLeft", span: 12}, o.a.createElement(ht.a, {
                        block: !0,
                        style: t ? a : c,
                        onClick: this.clickedBuyButton,
                        disabled: this.props.disabled
                    }, o.a.createElement(A.a, {s: "Buy"}))), o.a.createElement(k.a, {
                        className: "columnRight",
                        span: 12
                    }, o.a.createElement(ht.a, {
                        block: !0,
                        style: n ? i : c,
                        onClick: this.clickedSellButton,
                        disabled: this.props.disabled
                    }, o.a.createElement(A.a, {s: "Sell"})))))
                }
            }]), n
        }(o.a.Component), Va = Object(y.e)(Object(h.c)((function (e) {
            return {tradeType: e.tradePanel.tradeType}
        }), (function (e) {
            return {
                updateTradeType: function (t) {
                    return e(Object(ft.h)(t))
                }
            }
        }))(Ua)), Ka = n(714), Ya = n(193), qa = function (e) {
            var t = e.show, n = e.errorMessage1, r = e.errorToken, i = e.errorMessage2;
            return o.a.createElement("div", {
                style: {
                    display: t ? "initial" : "none",
                    fontSize: "0.85rem",
                    color: Object(a.useContext)(y.a).red,
                    height: "24px",
                    fontWeight: "600"
                }
            }, o.a.createElement(m.a, {
                style: {marginRight: "8px"},
                size: "1x",
                icon: Ya.faExclamationTriangle
            }), o.a.createElement(A.a, {s: n}), r, o.a.createElement(A.a, {s: i}))
        }, Ga = function (e) {
            var t = e.show, n = e.message;
            return o.a.createElement("div", {
                style: {
                    display: t ? "initial" : "none",
                    fontSize: "0.85rem",
                    color: Object(a.useContext)(y.a).orange,
                    height: "24px",
                    fontWeight: "600"
                }
            }, o.a.createElement(m.a, {
                style: {marginRight: "8px"},
                size: "1x",
                icon: Ya.faExclamationTriangle
            }), o.a.createElement(A.a, {s: n}))
        };

        function Xa() {
            var e = Object(j.a)(["\n  border: none !important;\n  width: 56px !important;\n  font-size: 0.8rem !important;\n  margin: 0 !important;\n  color: ", "!important;\n  background: ", "!important;\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n  height: 24px;\n\n  &[disabled],\n  &[disabled]:hover {\n    color: ", "!important;\n    background: ", "!important;\n  }\n\n  &:hover {\n    color: ", "!important;\n    background: ", "!important;\n  }\n"]);
            return Xa = function () {
                return e
            }, e
        }

        function $a() {
            var e = Object(j.a)(["\n  color: ", "\n  font-size: 0.85rem;\n  user-select: none;\n  text-align: center;\n  margin-top: 100px;\n\n  @media (max-height: 820px) {\n    display: none;\n  }\n"]);
            return $a = function () {
                return e
            }, e
        }

        var Ja = n(71), Za = y.d.div($a(), (function (e) {
                return e.theme.textDim
            })), Qa = Object(y.d)(ht.a)(Xa(), (function (e) {
                return e.theme.textWhite
            }), (function (e) {
                return e.theme.foreground
            }), (function (e) {
                return e.theme.textDim
            }), (function (e) {
                return e.theme.buttonBackground
            }), (function (e) {
                return e.theme.textBigButton
            }), (function (e) {
                return e.theme.primary
            })), eo = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(a))).state = {
                        waitingForPassword: !1,
                        validatePrice: !0,
                        baseAmountValidate: !0,
                        quoteAmountValidate: !0,
                        errorMessage1: "",
                        errorToken: "",
                        errorMessage2: "",
                        warnMessage: "",
                        loading: !1,
                        isBuy: !0,
                        sellToken: "-",
                        needPriceConfirm: !1
                    }, e.getAvailableAmount = function (t, n) {
                        var r = e.props.exchange.tokens, a = pe.a.getTokenBySymbol(t, r), o = n.find((function (e) {
                            return e.tokenId === a.tokenId
                        }));
                        try {
                            return o ? Number(o.available) : 0
                        } catch (i) {
                            return 0
                        }
                    }, e.onPriceValueChange = function (t) {
                        !1 !== (t && parseFloat(t) >= 0) && e.props.updatePrice(t)
                    }, e.onAmountValueChange = function (t) {
                        e.props.updateAmount(t)
                    }, e.validatePrice = function () {
                        return !!(e.props.tradePanel.price && parseFloat(e.props.tradePanel.price) > 0)
                    }, e.validateAmount = function () {
                        return !!(e.props.tradePanel.amount && parseFloat(e.props.tradePanel.amount) > 0)
                    }, e.submitOrder = function () {
                        e.setState({loading: !0}), Object(s.a)(c.a.mark((function t() {
                            var n, r, a, i, s, l, u, d, p, m, f, h, b, g, y, v, E, k, O, w, j, C, T, S;
                            return c.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, n = e.props, r = n.tradePanel, a = n.exchange, i = r.amount, s = r.price, l = e.props.currentMarket.baseTokenSymbol, u = e.props.currentMarket.quoteTokenSymbol, d = pe.a.getTokenBySymbol(l, a.tokens), p = pe.a.getTokenBySymbol(u, a.tokens), m = new Ja(i), f = "buy" === e.props.tradePanel.tradeType, y = 0, v = 0, f ? (h = u, b = p.tokenId, y = m.times(s).toFixed(), g = l, v = m.toFixed()) : (h = l, b = d.tokenId, y = m.toFixed(), g = u, v = m.times(s).toFixed()), null !== e.props.dexAccount.account.password) {
                                            t.next = 14;
                                            break
                                        }
                                        throw new Error("Invalid password! Please try again!");
                                    case 14:
                                        if (E = e.props.dexAccount.account.keyPairCipherText, null !== Object(x.a)(E, e.props.dexAccount.account.password)) {
                                            t.next = 18;
                                            break
                                        }
                                        throw new Error("Invalid password! Please try again!");
                                    case 18:
                                        return k = e.props.dexAccount.account.accountId, O = e.props.dexAccount.account.apiKey, t.next = 22, Object(da.g)(k, b, O);
                                    case 22:
                                        return w = t.sent, j = (new Date).getTime() / 1e3 - 3600, C = (new Date).getTime() / 1e3 + 2592e3, T = window.wallet.submitOrder(a.tokens, a.exchangeId, h, g, y, v, w, j, C, pe.a.getLabel(), f, pe.a.getChannelId()), t.next = 28, Object(da.o)(T, O);
                                    case 28:
                                        Object(ie.n)(e.props.dexAccount.account), e.props.fetchMyAccountPage(e.props.dexAccount.account.accountId, e.props.dexAccount.account.apiKey, e.props.exchange.tokens), S = e.props.myOrders.showAllOpenOrders ? void 0 : e.props.currentMarket.current, e.props.fetchMyOpenOrders(e.props.dexAccount.account.accountId, e.props.myOrders.openOrdersLimit, e.props.myOrders.openOrdersOffset, S, O, e.props.exchange.tokens), e.props.fetchMyHistoryOrders(e.props.dexAccount.account.accountId, e.props.myOrders.historyOrdersLimit, e.props.myOrders.historyOrdersOffset, S, O, e.props.exchange.tokens), e.props.updateAmount(""), Object(Se.b)(o.a.createElement(A.a, {s: "Your order has been submitted."}), e.props.theme), t.next = 41;
                                        break;
                                    case 37:
                                        t.prev = 37, t.t0 = t.catch(0), console.log(t.t0), Object(Se.a)(o.a.createElement(A.a, {s: "Failed to submit your order."}), e.props.theme);
                                    case 41:
                                        return t.prev = 41, e.setState({loading: !1}), t.finish(41);
                                    case 44:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[0, 37, 41, 44]])
                        })))()
                    }, e.pressedButton = function () {
                        var t = e.validatePrice();
                        e.setState({validatePrice: t}), !1 !== t && (!1 !== e.validateAmount() ? (e.setState({validateAmount: !0}), null === e.props.dexAccount.account.password ? (e.setState({waitingForPassword: !0}), e.props.showEnterPasswordModal(!0)) : e.submitOrder()) : e.setState({validateAmount: !1}))
                    }, e.hangleAmountPercentage = function (t) {
                        var n = e.state, r = n.sellToken, a = n.isBuy, o = e.props, i = o.balances, c = o.tradePanel,
                            s = o.exchange.tokens, l = c.price && Number(c.price) > 0 ? Number(c.price) : 0,
                            u = (a ? l ? e.getAvailableAmount(r, i) / l : 0 : e.getAvailableAmount(r, i)) * t,
                            d = pe.a.getTokenBySymbol(e.props.currentMarket.baseTokenSymbol, s),
                            p = Math.pow(10, d.precision);
                        e.props.updateAmount(Math.floor(u * p) / p)
                    }, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidMount", value: function () {
                        var e = "buy" === this.props.tradePanel.tradeType.toLowerCase(),
                            t = e ? this.props.currentMarket.quoteTokenSymbol : this.props.currentMarket.baseTokenSymbol;
                        this.setState({sellToken: t, isBuy: e})
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t) {
                        var n, r = this;
                        if (this.props.balances !== e.balances || e.tradePanel !== this.props.tradePanel || e.currentMarket.current !== this.props.currentMarket.current) {
                            var a = this.props, o = a.currentMarket, i = a.tradePanel, c = a.exchange,
                                s = o.current.split("-"), l = "buy" === i.tradeType.toLowerCase(), u = l ? s[1] : s[0],
                                d = pe.a.getTokenBySymbol(o.baseTokenSymbol, c.tokens),
                                p = pe.a.getTokenBySymbol(o.quoteTokenSymbol, c.tokens);
                            if (d.symbol && p.symbol) {
                                var m = "", f = "", h = "", b = !i.price || parseFloat(i.price) >= 0;
                                if (b && i.price && 2 === i.price.split(".").length) {
                                    n = i.price.split(".")[1].length;
                                    var g = pe.a.getMarketByPair(o.current, c.markets).precisionForPrice;
                                    (n > g || 0 === parseFloat(i.price) && n === g) && (m = "Maximum_price_input_decimal_part_1", f = "".concat(g), h = "Maximum_input_decimal_part_2", b = !1)
                                }
                                var y = parseFloat(i.amount),
                                    v = i.amount && y > 0 && i.price && parseFloat(i.price) > 0 ? pt.a.toBig(y).times(i.price).toNumber() : 0,
                                    x = Number(pe.a.fromWEI(d.symbol, d.minOrderAmount, c.tokens)),
                                    E = Number(pe.a.fromWEI(d.symbol, d.maxOrderAmount, c.tokens)),
                                    k = Number(pe.a.fromWEI(p.symbol, p.minOrderAmount, c.tokens)),
                                    O = Number(pe.a.fromWEI(p.symbol, p.maxOrderAmount, c.tokens)),
                                    w = !i.amount || 0 === y || y >= x && y <= E, j = 0 === v || v >= k && v <= O;
                                if (b && !w && (y < x ? (m = "Minimum_order_size", f = " ".concat(x, " ").concat(d.symbol)) : y > E && (m = "Maximum_order_size", f = " ".concat(E, " ").concat(d.symbol))), w && !j && (v < k ? (m = "Minimum_order_size", f = " ".concat(k, " ").concat(p.symbol)) : v > O && (m = "Maximum_order_size", f = " ".concat(O, " ").concat(p.symbol))), b && i.price && i.amount && w && j) {
                                    var A = "sell" === i.tradeType ? y : v;
                                    "sell" === i.tradeType ? (w = A <= this.getAvailableAmount(u, this.props.balances)) || (m = "Your balance is insufficient!") : (j = A <= this.getAvailableAmount(u, this.props.balances)) || (m = "Your balance is insufficient!")
                                }
                                if (w && w && i.amount && 2 === i.amount.split(".").length) {
                                    n = i.amount.split(".")[1].length;
                                    var C = d && d.precision || 6;
                                    (n > C || 0 === parseFloat(i.amount) && n === C) && (m = "Maximum_amount_input_decimal_part_1", f = "".concat(C), h = "Maximum_input_decimal_part_2", w = !1)
                                }
                                var T = "";
                                if ("" === m && b && i.price && i.price && this.props.ticker.close) {
                                    var S = parseFloat(this.props.ticker.close),
                                        P = parseFloat(this.props.tradePanel.price);
                                    P > 1.2 * S && l ? T = "BuyPriceHigher" : P < .8 * S && !l && (T = "SellPriceLower")
                                }
                                this.setState({
                                    sellToken: u,
                                    isBuy: l,
                                    validatePrice: b,
                                    baseAmountValidate: w,
                                    quoteAmountValidate: j,
                                    errorMessage1: m,
                                    errorToken: f,
                                    errorMessage2: h,
                                    warnMessage: T
                                })
                            }
                        }
                        e.modalManager.isEnterPasswordModalVisible !== this.props.modalManager.isEnterPasswordModalVisible && !1 === this.props.modalManager.isEnterPasswordModalVisible && !0 === this.state.waitingForPassword && this.setState({waitingForPassword: !1}, (function () {
                            r.pressedButton()
                        }))
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.theme, n = this.state.isBuy, r = this.props, a = r.currentMarket,
                            i = r.exchange, c = pe.a.getMarketByPair(a.current, i.markets), s = a.baseTokenSymbol,
                            l = a.quoteTokenSymbol, u = pe.a.getTokenBySymbol(s, i.tokens),
                            d = pe.a.getTokenBySymbol(l, i.tokens),
                            p = !c || !c.enabled || this.props.dexAccount.account.state !== Be.b || !this.props.metaMask.isDesiredNetwork || !this.state.baseAmountValidate || !this.state.quoteAmountValidate || !this.state.validatePrice || !this.props.tradePanel.price || 0 === parseFloat(this.props.tradePanel.price) || !this.props.tradePanel.amount || 0 === parseFloat(this.props.tradePanel.amount),
                            f = this.props.dexAccount.account.state !== Be.b || !this.props.metaMask.isDesiredNetwork,
                            h = !this.props.tradePanel.price || this.props.tradePanel.price <= 0,
                            g = n ? o.a.createElement(v.a, {
                                block: !0,
                                buttonbackground: t.buyPrimary,
                                disabled: p,
                                onClick: function () {
                                    return e.pressedButton()
                                }
                            }, o.a.createElement(A.a, {s: "Buy"}), "\xa0 ", s) : o.a.createElement(v.a, {
                                block: !0,
                                buttonbackground: t.sellPrimary,
                                disabled: p,
                                onClick: function () {
                                    return e.pressedButton()
                                }
                            }, o.a.createElement(A.a, {s: "Sell"}), "\xa0 ", s);
                        return o.a.createElement("div", {
                            style: {
                                height: Oe.a.mainScreenHeight,
                                backgroundColor: t.sidePanelBackground,
                                overflow: "scroll"
                            }
                        }, o.a.createElement("div", {style: {padding: "16px ".concat(Oe.a.sidePadding, " 0px")}}, o.a.createElement(Ha, null)), o.a.createElement("div", {style: {padding: "16px ".concat(Oe.a.sidePadding, " 0px")}}, o.a.createElement("div", {
                            style: {
                                paddingTop: "0px",
                                paddingBottom: "0px"
                            }
                        }, o.a.createElement(Va, {disabled: f}), o.a.createElement("div", {style: {marginBottom: "10px"}}, o.a.createElement("div", {
                            style: {
                                paddingTop: "16px",
                                paddingBottom: "4px",
                                paddingLeft: "0px",
                                fontSize: "0.9rem",
                                userSelect: "none",
                                fontWeight: "400",
                                color: t.textDim
                            }
                        }, o.a.createElement(A.a, {s: "Price"})), o.a.createElement(Ra.a, {
                            decimals: c && c.precisionForPrice || 6,
                            color: this.state.validatePrice ? t.textWhite : t.red,
                            borderColor: this.state.validatePrice ? t.border : t.red,
                            value: this.props.tradePanel.price,
                            onChange: this.onPriceValueChange,
                            suffix: l,
                            disabled: f
                        }), o.a.createElement("div", {
                            style: {
                                paddingTop: "16px",
                                paddingBottom: "4px",
                                paddingLeft: "0px",
                                userSelect: "none",
                                fontSize: "0.9rem",
                                color: t.textDim
                            }
                        }, o.a.createElement(A.a, {s: "Amount"})), o.a.createElement(Ra.a, {
                            style: {width: "236px"},
                            decimals: u && u.precision || 6,
                            color: this.state.baseAmountValidate ? t.textWhite : t.red,
                            borderColor: this.state.baseAmountValidate ? t.border : t.red,
                            value: this.props.tradePanel.amount,
                            onChange: this.onAmountValueChange,
                            suffix: s,
                            disabled: f
                        }), o.a.createElement("div", {
                            style: {
                                margin: "4px 1px",
                                display: "flex",
                                justifyContent: "space-between"
                            }
                        }, o.a.createElement(Qa, {
                            disabled: h || f, onClick: function () {
                                return e.hangleAmountPercentage(.25)
                            }
                        }, "25%"), o.a.createElement(Qa, {
                            disabled: h || f, onClick: function () {
                                return e.hangleAmountPercentage(.5)
                            }
                        }, "50%"), o.a.createElement(Qa, {
                            disabled: h || f, onClick: function () {
                                return e.hangleAmountPercentage(.75)
                            }
                        }, "75%"), o.a.createElement(Qa, {
                            disabled: h || f, onClick: function () {
                                return e.hangleAmountPercentage(1)
                            }
                        }, "100%")), o.a.createElement("div", {
                            style: {
                                paddingTop: "16px",
                                paddingBottom: "4px",
                                paddingLeft: "0px",
                                userSelect: "none",
                                fontSize: "0.9rem",
                                color: t.textDim
                            }
                        }, o.a.createElement(E.a, {className: "row"}, o.a.createElement(k.a, {span: 8}, o.a.createElement("div", {className: "columnLeft"}, o.a.createElement(A.a, {s: "Order Total"}))), o.a.createElement(k.a, {span: 16}, o.a.createElement("div", {
                            className: "columnRight",
                            style: {fontWeight: "600", textAlign: "right", fontSize: "0.9rem", color: t.textWhite}
                        }, this.props.tradePanel.price && this.props.tradePanel.amount ? Number(new Ja(this.props.tradePanel.price).times(this.props.tradePanel.amount).toFixed(d && d.precision || 6)) : Number(0).toFixed(d && d.precision || 6), " ", l)))), o.a.createElement(qa, {
                            show: this.props.dexAccount.account.state === Be.b && (!this.state.baseAmountValidate || !this.state.quoteAmountValidate || !this.state.validatePrice),
                            errorMessage1: this.state.errorMessage1,
                            errorToken: this.state.errorToken,
                            errorMessage2: this.state.errorMessage2
                        }), o.a.createElement(Ga, {
                            show: this.props.dexAccount.account.state === Be.b && "" === this.state.errorMessage1 && "" !== this.state.warnMessage,
                            message: this.state.warnMessage
                        }))), o.a.createElement(Ma.a, {
                            spinning: this.state.loading,
                            indicator: o.a.createElement(m.a, {icon: b.faCircleNotch, spin: !0})
                        }, g)), o.a.createElement(Za, null, o.a.createElement("a", {
                            style: {color: t.textDim},
                            href: function () {
                                var t = 1 === e.props.exchange.chainId ? "loopringio.eth" : e.props.exchange.exchangeAddress;
                                return "".concat(Object(ie.c)(e.props.exchange.chainId), "/address/").concat(t)
                            }(),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, o.a.createElement(m.a, {
                            size: "2x",
                            style: {opacity: .5, marginBottom: "8px"},
                            icon: Ka.faEthereum
                        }), o.a.createElement("div", {
                            style: {
                                fontSize: "0.75rem",
                                opacity: "0.75"
                            }
                        }, o.a.createElement(A.a, {s: "Powered by Ethereum & Loopring"})))))
                    }
                }]), n
            }(o.a.Component), to = Object(y.e)(Object(h.c)((function (e) {
                var t = e.ticker, n = e.currentMarket, r = e.tradePanel, a = e.Web3, o = e.dexAccount, i = e.balances,
                    c = e.modalManager, s = e.metaMask, l = e.myOrders, u = e.exchange;
                return {
                    ticker: t,
                    currentMarket: n,
                    tradePanel: r,
                    Web3: a,
                    dexAccount: o,
                    balances: i.balances,
                    modalManager: c,
                    metaMask: s,
                    myOrders: l,
                    exchange: u
                }
            }), (function (e) {
                return {
                    updateAmount: function (t) {
                        return e(Object(ft.f)(t))
                    }, updatePrice: function (t) {
                        return e(Object(ft.g)(t))
                    }, showEnterPasswordModal: function (t) {
                        return e(Object(g.p)(t))
                    }, fetchMyAccountPage: function (t, n, r) {
                        return e(Object(W.p)(t, n, r))
                    }, fetchMyOpenOrders: function (t, n, r, a, o, i) {
                        return e(Object(Ur.l)(t, n, r, a, o, i))
                    }, fetchMyHistoryOrders: function (t, n, r, a, o, i) {
                        return e(Object(Ur.k)(t, n, r, a, o, i))
                    }
                }
            }))(eo)), no = n(358), ro = n(715), ao = n(716), oo = ["1", "15", "240", "D", "6D"],
            io = {supported_resolutions: oo}, co = function () {
                function e(t) {
                    Object(l.a)(this, e), this.tokens = t
                }

                return Object(u.a)(e, [{
                    key: "onReady", value: function (e) {
                        setTimeout((function () {
                            return e(io)
                        }), 0)
                    }
                }, {
                    key: "searchSymbols", value: function (e, t, n, r) {
                    }
                }, {
                    key: "resolveSymbol", value: function (e, t, n) {
                        var r = {
                            name: e,
                            description: "",
                            type: "crypto",
                            session: "24x7",
                            timezone: "Etc/UTC",
                            exchange: "",
                            minmov: 1,
                            pricescale: 1e6,
                            has_intraday: !0,
                            intraday_multipliers: ["1"],
                            supported_resolution: oo,
                            volume_precision: 2,
                            data_status: "streaming"
                        };
                        setTimeout((function () {
                            t(r)
                        }), 0)
                    }
                }, {
                    key: "getBars", value: function (e, t, n, r, a, o, i) {
                        var l = this, u = e.name;
                        Object(s.a)(c.a.mark((function e() {
                            var t, n, r, o, s, d, p, m, f, h, b, g, y;
                            return c.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(da.d)(u, "1hr");
                                    case 3:
                                        for ((t = e.sent).reverse(), d = {}, s = 0; s < t.length; s += 1) p = t[s], m = u.split("-"), o = m[1], void 0 === n ? n = p.start : r = p.start, f = p.start, h = {
                                            time: f,
                                            low: Number(p.low),
                                            high: Number(p.high),
                                            open: Number(p.open),
                                            close: Number(p.close),
                                            volume: Number(pe.a.fromWEI(o, p.volume, l.tokens))
                                        }, d[f] = h;
                                        for (b = [], g = d[n], s = n; s <= r; s += 36e5) void 0 === d[s] ? (g.time = s, b.push(Object.assign({}, g))) : (y = d[s], b.push(y), g = {
                                            time: y.start,
                                            low: Number(y.close),
                                            high: Number(y.close),
                                            open: Number(y.close),
                                            close: Number(y.close),
                                            volume: 0
                                        });
                                        i && a(b, b ? {noData: !1} : {noData: !0}), e.next = 15;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(0);
                                    case 15:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 13]])
                        })))()
                    }
                }, {
                    key: "subscribeBars", value: function (e, t, n, r, a) {
                    }
                }, {
                    key: "unsubscribeBars", value: function (e) {
                    }
                }, {
                    key: "calculateHistoryDepth", value: function (e, t, n) {
                        return e < 60 ? {resolutionBack: "D", intervalBack: "14"} : void 0
                    }
                }, {
                    key: "getMarks", value: function (e, t, n, r, a) {
                    }
                }, {
                    key: "getTimeScaleMarks", value: function (e, t, n, r, a) {
                    }
                }, {
                    key: "getServerTime", value: function (e) {
                    }
                }]), e
            }(), so = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).tvWidget = null, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidMount", value: function () {
                        this.initTvWidget(this.props.theme, this.props.tokens)
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t) {
                        e.market === this.props.market && e.tokens === this.props.tokens && e.theme === this.props.theme || this.initTvWidget(this.props.theme, this.props.tokens)
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        null !== this.tvWidget && (this.tvWidget.remove(), this.tvWidget = null)
                    }
                }, {
                    key: "initTvWidget", value: function (e, t) {
                        var n = this, r = {
                            debug: !1,
                            symbol: this.props.market,
                            datafeed: new co(t),
                            interval: this.props.interval,
                            timezone: this.props.timezone,
                            container_id: this.props.containerId,
                            library_path: this.props.libraryPath,
                            locale: this.props.language,
                            disabled_features: ["display_market_status", "header_symbol_search", "header_screenshot", "header_fullscreen_button", "header_settings", "header_resolutions", "header_undo_redo", "header_compare", "header_chart_type", "header_undo_redo", "header_symbol_search", "main_series_scale_menu", "property_pages", "left_toolbar", "header_widget", "header_widget_dom_node", "border_around_the_chart", "pane_context_menu", "timeframes_toolbar", "timezone_menu", "symbol_search_hot_key", "caption_buttons_text_if_possible", "control_bar", "context_menus", "use_localstorage_for_settings", "scales_context_menu", "show_chart_property_page", "edit_buttons_in_legend", "move_logo_to_main_pane", "delete_button_in_legend", "show_hide_button_in_legend"],
                            enabled_features: ["hide_last_na_study_output"],
                            charts_storage_url: this.props.chartsStorageUrl,
                            charts_storage_api_version: this.props.chartsStorageApiVersion,
                            client_id: this.props.clientId,
                            user_id: this.props.userId,
                            fullscreen: this.props.fullscreen,
                            autosize: this.props.autosize,
                            studies_overrides: {
                                "moving average exponential.plot.color": e.textDim,
                                "moving average exponential.plot.linewidth": 2,
                                "moving average exponential.precision": 6,
                                "volume.volume ma.transparency": 100,
                                "volume.show ma": !1,
                                "volume.volume.color.0": e.downColor,
                                "volume.volume.color.1": e.upColor
                            },
                            theme: "Dark",
                            time_frames: [{text: "1hr", resolution: "60", description: "1 Hour", title: "1H"}],
                            overrides: {
                                editorFontsList: ["Montserrat", "sans-serif"],
                                volumePaneSize: "small",
                                "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)",
                                "paneProperties.topMargin": 30,
                                "paneProperties.bottomMargin": 20,
                                "paneProperties.background": e.foreground,
                                "paneProperties.vertGridProperties.color": "#00000000",
                                "paneProperties.horzGridProperties.color": "#00000000",
                                "paneProperties.legendProperties.showLegend": !0,
                                "symbolWatermarkProperties.transparency": 100,
                                "mainSeriesProperties.candleStyle.upColor": e.upColor,
                                "mainSeriesProperties.candleStyle.downColor": e.downColor,
                                "mainSeriesProperties.candleStyle.borderUpColor": e.upColor,
                                "mainSeriesProperties.candleStyle.borderDownColor": e.downColor,
                                "mainSeriesProperties.candleStyle.wickUpColor": e.upColor,
                                "mainSeriesProperties.candleStyle.wickDownColor": e.downColor,
                                "scalesProperties.lineColor": e.background,
                                "scalesProperties.textColor": e.textDim,
                                "mainSeriesProperties.priceLineWidth": 1,
                                "mainSeriesProperties.showPriceLine": !0,
                                "scalesProperties.showSymbolLabels": !1,
                                "scalesProperties.fontSize": 11.2,
                                "scalesProperties.showSeriesLastValue": !0,
                                "paneProperties.legendProperties.showStudyArguments": !0,
                                "paneProperties.legendProperties.showStudyTitles": !0,
                                "paneProperties.legendProperties.showStudyValues": !0,
                                "paneProperties.legendProperties.showSeriesTitle": !1,
                                "paneProperties.legendProperties.showSeriesOHLC": !0,
                                "paneProperties.crossHairProperties.color": e.textDim
                            }
                        };
                        this.tvWidget = new ao.widget(r), this.tvWidget.onChartReady((function () {
                            n.tvWidget.chart().createStudy("Moving Average Exponential", !1, !1, [9])
                        }))
                    }
                }, {
                    key: "render", value: function () {
                        return a.createElement("div", null, a.createElement("div", {
                            style: {height: "calc(50vh - 32px)"},
                            id: this.props.containerId
                        }))
                    }
                }]), n
            }(a.PureComponent);
        so.defaultProps = {
            interval: "1",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: "en",
            containerId: "tv_chart_container",
            datafeedUrl: "https://demo_feed.tradingview.com",
            libraryPath: "/charting_library/",
            chartsStorageUrl: "https://saveload.tradingview.com",
            chartsStorageApiVersion: "1.1",
            clientId: "tradingview.com",
            userId: "public_user_id",
            fullscreen: !1,
            autosize: !0
        };
        var lo = Object(y.e)(so), uo = n(717), po = n.n(uo), mo = n(343), fo = n(144), ho = n(208), bo = n(314),
            go = n(138), yo = n(313), vo = n(719), xo = n(475), Eo = n(236), ko = n(720), Oo = n(16),
            wo = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    return Object(l.a)(this, n), t.apply(this, arguments)
                }

                return Object(u.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props.theme;
                        console.log("this.props", e);
                        var t = Object(Eo.ema)().options({
                                windowSize: 20,
                                sourcePath: "close"
                            }).skipUndefined(!0).merge((function (e, t) {
                                e.ema20 = t
                            })).accessor((function (e) {
                                return e.ema20
                            })).stroke("blue"), n = Object(Eo.sma)().options({windowSize: 20}).merge((function (e, t) {
                                e.sma20 = t
                            })).accessor((function (e) {
                                return e.sma20
                            })), r = Object(Eo.wma)().options({windowSize: 20}).merge((function (e, t) {
                                e.wma20 = t
                            })).accessor((function (e) {
                                return e.wma20
                            })), a = Object(Eo.tma)().options({windowSize: 20}).merge((function (e, t) {
                                e.tma20 = t
                            })).accessor((function (e) {
                                return e.tma20
                            })), i = Object(Eo.ema)().options({windowSize: 50}).merge((function (e, t) {
                                e.ema50 = t
                            })).accessor((function (e) {
                                return e.ema50
                            })), c = Object(Eo.sma)().options({
                                windowSize: 20,
                                sourcePath: "volume"
                            }).merge((function (e, t) {
                                e.smaVolume50 = t
                            })).accessor((function (e) {
                                return e.smaVolume50
                            })).stroke("#4682B4").fill("#4682B4"), s = this.props, l = s.type, u = s.data, d = s.width,
                            p = s.ratio, m = t(n(r(a(i(c(u)))))),
                            f = vo.discontinuousTimeScaleProvider.inputDateAccessor((function (e) {
                                return e.date
                            }))(m), h = f.data, b = f.xScale, g = f.xAccessor, y = f.displayXAccessor,
                            v = [g(Object(Oo.last)(h)), g(h[Math.max(0, h.length - 40)])], x = {
                                wickStroke: function (t) {
                                    return t.close > t.open ? e.buyPrimary : e.sellPrimary
                                }, fill: function (t) {
                                    return Math.abs(t.close - t.open), t.close > t.open ? e.buyPrimary : e.sellPrimary
                                }, stroke: function (t) {
                                    return t.close > t.open ? e.buyPrimary : e.sellPrimary
                                }, candleStrokeWidth: 1, widthRatio: .76, opacity: 1
                            }, E = {
                                fill: function (t) {
                                    return t.close > t.open ? e.buyPrimary : e.sellPrimary
                                }, widthRatio: .76, opacity: 1
                            }, k = .5 * window.innerHeight - 32;
                        return o.a.createElement("div", {style: {height: "calc(50vh - 32px)"}}, o.a.createElement(bo.b, {
                            height: k,
                            ratio: p,
                            width: d,
                            margin: {left: 0, right: 80, top: 0, bottom: 30},
                            type: l,
                            seriesName: "MSFT",
                            data: h,
                            xScale: b,
                            xAccessor: g,
                            displayXAccessor: y,
                            xExtents: v
                        }, o.a.createElement(go.CrossHairCursor, {stroke: e.textDim}), o.a.createElement(bo.a, {
                            height: .7 * k,
                            id: 1,
                            origin: function (e, t) {
                                return [0, 0]
                            },
                            padding: {top: 100, bottom: 20},
                            yExtents: [function (e) {
                                return [e.high, e.low]
                            }, n.accessor(), r.accessor(), a.accessor(), t.accessor(), i.accessor()]
                        }, o.a.createElement(yo.YAxis, {
                            axisAt: "right",
                            orient: "right",
                            ticks: 5,
                            stroke: "rgba(0,0,0,.8)",
                            tickStrokeOpacity: 1,
                            tickStroke: e.textDim
                        }), o.a.createElement(ho.CandlestickSeries, x), o.a.createElement(ho.LineSeries, {
                            yAccessor: n.accessor(),
                            stroke: n.stroke()
                        }), o.a.createElement(ho.LineSeries, {
                            yAccessor: r.accessor(),
                            stroke: r.stroke()
                        }), o.a.createElement(ho.LineSeries, {
                            yAccessor: a.accessor(),
                            stroke: a.stroke()
                        }), o.a.createElement(ho.LineSeries, {
                            yAccessor: t.accessor(),
                            stroke: t.stroke()
                        }), o.a.createElement(ho.LineSeries, {
                            yAccessor: i.accessor(),
                            stroke: i.stroke()
                        }), o.a.createElement(go.CurrentCoordinate, {
                            yAccessor: n.accessor(),
                            fill: n.stroke()
                        }), o.a.createElement(go.CurrentCoordinate, {
                            yAccessor: r.accessor(),
                            fill: r.stroke()
                        }), o.a.createElement(go.CurrentCoordinate, {
                            yAccessor: a.accessor(),
                            fill: a.stroke()
                        }), o.a.createElement(go.CurrentCoordinate, {
                            yAccessor: t.accessor(),
                            fill: t.stroke()
                        }), o.a.createElement(go.CurrentCoordinate, {
                            yAccessor: i.accessor(),
                            fill: i.stroke()
                        }), o.a.createElement(xo.OHLCTooltip, {
                            origin: [16, 20],
                            displayFormat: Object(mo.b)(".8f")
                        }), o.a.createElement(xo.MovingAverageTooltip, {
                            onClick: function (e) {
                                return console.log(e)
                            },
                            origin: [18, 35],
                            options: [{
                                yAccessor: n.accessor(),
                                type: "SMA",
                                stroke: n.stroke(),
                                windowSize: n.options().windowSize,
                                echo: "some echo here",
                                labelFill: e.textDim
                            }, {
                                yAccessor: r.accessor(),
                                type: "WMA",
                                stroke: r.stroke(),
                                windowSize: r.options().windowSize,
                                echo: "some echo here",
                                labelFill: e.textDim
                            }, {
                                yAccessor: a.accessor(),
                                type: "TMA",
                                stroke: a.stroke(),
                                windowSize: a.options().windowSize,
                                echo: "some echo here",
                                labelFill: e.textDim
                            }, {
                                yAccessor: t.accessor(),
                                type: "EMA",
                                stroke: t.stroke(),
                                windowSize: t.options().windowSize,
                                echo: "some echo here",
                                labelFill: e.textDim
                            }, {
                                yAccessor: i.accessor(),
                                type: "EMA",
                                stroke: i.stroke(),
                                windowSize: i.options().windowSize,
                                echo: "some echo here",
                                labelFill: e.textDim
                            }]
                        }), o.a.createElement(go.MouseCoordinateX, {
                            at: "bottom",
                            orient: "bottom",
                            fontSize: 12,
                            textFill: e.textWhite,
                            fill: e.background,
                            displayFormat: Object(fo.b)("%m-%d %H:%M")
                        }), o.a.createElement(go.EdgeIndicator, {
                            itemType: "last",
                            orient: "right",
                            edgeAt: "right",
                            fontSize: 12,
                            rectWidth: 88,
                            displayFormat: Object(mo.b)(".8f"),
                            rectHeight: 16,
                            textFill: e.textBright,
                            yAccessor: function (e) {
                                return e.close
                            },
                            fill: function (t) {
                                return t.close > t.open ? e.buyPrimary : e.sellPrimary
                            },
                            lineStroke: function (t) {
                                return t.close > t.open ? e.buyPrimary : e.sellPrimary
                            }
                        }), o.a.createElement(go.MouseCoordinateY, {
                            itemType: "last",
                            at: "right",
                            orient: "right",
                            fontSize: 12,
                            rectWidth: 88,
                            displayFormat: Object(mo.b)(".8f"),
                            textFill: e.textWhite,
                            fill: e.background
                        })), o.a.createElement(bo.a, {
                            height: .15 * k, id: 2, origin: function (e, t) {
                                return [0, .7 * k]
                            }, yExtents: function (e) {
                                return [e.high, e.low]
                            }
                        }, o.a.createElement(yo.YAxis, {
                            axisAt: "right",
                            orient: "right",
                            ticks: 2,
                            tickFormat: Object(mo.b)(".2s"),
                            stroke: "rgba(0,0,0,.8)",
                            tickStrokeOpacity: 0,
                            tickStroke: "transparent"
                        })), o.a.createElement(bo.a, {
                            id: 3, origin: function (e, t) {
                                return [0, t - .15 * k]
                            }, height: .15 * k, yExtents: function (e) {
                                return e.volume
                            }
                        }, o.a.createElement(yo.YAxis, {
                            axisAt: "right",
                            orient: "right",
                            ticks: 2,
                            tickFormat: Object(mo.b)(".2s"),
                            stroke: "rgba(0,0,0,.8)",
                            tickStrokeOpacity: 1,
                            tickStroke: e.textDim
                        }), o.a.createElement(yo.XAxis, {
                            axisAt: "bottom",
                            orient: "bottom",
                            stroke: "rgba(0,0,0,.8)",
                            tickStrokeOpacity: 1,
                            tickStroke: e.textDim
                        }), o.a.createElement(go.MouseCoordinateY, {
                            itemType: "last",
                            at: "right",
                            orient: "right",
                            fontSize: 12,
                            rectWidth: 88,
                            displayFormat: Object(mo.b)(".8f"),
                            textFill: e.textWhite,
                            fill: e.background
                        }), o.a.createElement(ho.BarSeries, Object.assign({
                            yAccessor: function (e) {
                                return e.volume
                            }
                        }, E)))))
                    }
                }]), n
            }(o.a.Component);
        wo.defaultProps = {type: "svg"};
        var jo = Object(z.b)(Object(y.e)(Object(h.c)((function (e) {
                return {}
            }), (function (e) {
                return {}
            }))(Object(ko.fitWidth)(wo)))), Ao = (n(1435), ke.a.Sider), Co = ke.a.Content, To = function (e) {
                Object(p.a)(n, e);
                var t = Object(d.a)(n);

                function n() {
                    var e;
                    Object(l.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(a))).state = {}, e
                }

                return Object(u.a)(n, [{
                    key: "componentDidUpdate", value: function (e, t) {
                    }
                }, {
                    key: "render", value: function () {
                        var e, t = this, n = this.props.theme, r = this.props.userPreferences, a = this.props,
                            i = a.currentMarket, c = a.exchange, s = i.baseTokenSymbol,
                            l = pe.a.getTokenBySymbol(s, c.tokens),
                            u = pe.a.getMarketByPair(i.current, c.markets) || {precisionForPrice: 6},
                            d = l.precision ? "0." + "0".repeat(l.precision) : "1" + "0".repeat(-l.precision),
                            p = u.precisionForPrice > 0 ? " 0." + "0".repeat(u.precisionForPrice) : "1" + "0".repeat(-u.precisionForPrice),
                            m = o.a.createElement("div", {style: {background: n.foreground}}, o.a.createElement("div", {
                                style: {
                                    fontSize: "0.9rem",
                                    fontWeight: "400",
                                    color: n.textDim,
                                    paddingLeft: "16px",
                                    lineHeight: "32px",
                                    background: n.tableHeaderBackground
                                }
                            }, i.current), o.a.createElement(lo, {
                                market: i.current,
                                language: r.language,
                                tokens: c.tokens
                            }));
                        return this.state.data && (m = o.a.createElement("div", {style: {background: n.foreground}}, o.a.createElement("div", {
                            style: {
                                fontSize: "0.9rem",
                                fontWeight: "400",
                                color: n.textDim,
                                paddingLeft: "16px",
                                lineHeight: "32px",
                                background: n.tableHeaderBackground
                            }
                        }, i.current), o.a.createElement(jo, {data: this.state.data}))), e = 1 !== this.props.layoutManager.numColumns ? o.a.createElement("div", {style: {width: "100%"}}, o.a.createElement(fn, {headerText: o.a.createElement(A.a, {s: "Trading View"})}), m, o.a.createElement(ia, null)) : o.a.createElement("div", {
                            style: {
                                display: "block",
                                position: "relative",
                                height: Oe.a.mainScreenHeight
                            }
                        }, o.a.createElement("div", null, o.a.createElement(to, null))), o.a.createElement("div", null, o.a.createElement(ro.a, this.props), o.a.createElement("div", {className: "desktop-layout"}, o.a.createElement(Ba, null), o.a.createElement(ke.a, {
                            hasSider: !0,
                            style: {height: Oe.a.mainScreenHeight, backgroundColor: n.background}
                        }, o.a.createElement(Ao, {
                            width: Oe.a.tradePanelWidth,
                            style: {
                                paddingTop: "0px",
                                backgroundColor: n.sidePanelBackground,
                                borderStyle: "none",
                                height: Oe.a.mainScreenHeight
                            },
                            trigger: null,
                            breakpoint: "sm",
                            collapsedWidth: "0",
                            onBreakpoint: function (e) {
                            },
                            onCollapse: function (e, n) {
                                t.props.updateColumns()
                            }
                        }, o.a.createElement("div", {
                            style: {
                                display: "block",
                                position: "relative",
                                height: Oe.a.mainScreenHeight
                            }
                        }, o.a.createElement(to, null))), o.a.createElement(Ao, {
                            className: "orderbook-and-trade-history-sider",
                            width: Oe.a.orderBookWidth,
                            style: {marginLeft: Oe.a.sidePadding, marginRight: Oe.a.sidePadding},
                            trigger: null,
                            breakpoint: "lg",
                            collapsedWidth: "0",
                            onBreakpoint: function (e) {
                            },
                            onCollapse: function (e, n) {
                                t.props.updateColumns()
                            }
                        }, o.a.createElement(Dr, null)), o.a.createElement(Co, {
                            width: "100%",
                            style: {paddingTop: "0px"}
                        }, e), o.a.createElement(Ao, {
                            className: "trade-history-sider",
                            width: Oe.a.tradeHistoryWidth,
                            trigger: null,
                            onBreakpoint: function (e) {
                            },
                            onCollapse: function (e, n) {
                                t.props.updateColumns()
                            }
                        }, o.a.createElement(Fr, {
                            getTimeStamp: function (e) {
                                return e.timestamp
                            }, onClickTrade: function (e, n) {
                                t.props.updatePrice(e.price)
                            }, sizeFormat: d, priceFormat: p
                        })))), o.a.createElement("div", {className: "mobile-layout"}, o.a.createElement(we.a, null)), o.a.createElement(po.a, {
                            location: "bottom",
                            cookieName: "cookie-consent-1.0",
                            style: {
                                textAlign: "center",
                                fontSize: "0.9rem",
                                height: "64px",
                                boxShadow: "0 0 0 5000px rgba(0, 0, 0, 0.45)",
                                background: n.foreground,
                                color: n.textBright
                            },
                            buttonText: o.a.createElement(A.a, {s: "I Agree"}),
                            buttonStyle: {
                                color: n.textBigButton,
                                borderRadius: "4px",
                                minWidth: "100px",
                                fontWeight: "600",
                                background: n.primary,
                                fontSize: "0.9rem"
                            },
                            expires: 365
                        }, o.a.createElement(A.a, {s: "CookieConsentMessage"}), o.a.createElement("a", {
                            href: "/legal/terms",
                            target: "_blank"
                        }, o.a.createElement(A.a, {s: "Terms of Use"})), o.a.createElement(A.a, {s: ", "}), o.a.createElement("a", {
                            href: "/legal/privacy-policy",
                            target: "_blank"
                        }, o.a.createElement(A.a, {s: "Privacy Policy"})), o.a.createElement(A.a, {s: ", "}), o.a.createElement("a", {
                            href: "/legal/cookie-policy",
                            target: "_blank"
                        }, o.a.createElement(A.a, {s: "Cookie Policy"})), o.a.createElement(A.a, {s: ", and "}), o.a.createElement("a", {
                            href: "/legal/disclaimer",
                            target: "_blank"
                        }, o.a.createElement(A.a, {s: "Disclaimer"})), o.a.createElement(A.a, {s: "."})))
                    }
                }]), n
            }(o.a.Component), So = Object(z.b)(Object(y.e)(Object(h.c)((function (e) {
                return {layoutManager: e.layoutManager, currentMarket: e.currentMarket, exchange: e.exchange}
            }), (function (e) {
                return {
                    updateAmount: function (t) {
                        return e(Object(ft.f)(t))
                    }, updatePrice: function (t) {
                        return e(Object(ft.g)(t))
                    }, updateColumns: function () {
                        return e(Object(no.b)())
                    }
                }
            }))(To))),
            Po = o.a.createElement("div", null, o.a.createElement(dt.a, null), o.a.createElement(r.d, {id: "side-bar-container"}, o.a.createElement(r.b, {
                exact: !0,
                path: "/",
                render: function () {
                    return o.a.createElement(r.a, {to: "/trade/LRC-USDT"})
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/trade", render: function () {
                    return o.a.createElement(r.a, {to: "/trade/LRC-USDT"})
                }
            }), o.a.createElement(r.b, {
                exact: !0,
                path: "/trade/:pair",
                component: So
            }), o.a.createElement(r.b, {
                exact: !0, path: "/orders/open-orders", component: function () {
                    return o.a.createElement(Ae, {pageId: "open-orders", navbarConfig: Re}, o.a.createElement(He, null))
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/orders/order-history", component: function () {
                    return o.a.createElement(Ae, {
                        pageId: "order-history",
                        navbarConfig: Re
                    }, o.a.createElement(Ne, null))
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/orders/trade-history", component: function () {
                    return o.a.createElement(Ae, {
                        pageId: "trade-history",
                        navbarConfig: Re
                    }, o.a.createElement(We, null))
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/account/balances", component: function () {
                    return o.a.createElement(Ae, {pageId: "balances", navbarConfig: Ce}, o.a.createElement(q, null))
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/account/deposits", component: function () {
                    return o.a.createElement(Ae, {
                        pageId: "deposits",
                        navbarConfig: Ce
                    }, o.a.createElement(Ee, {type: "deposit"}))
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/account/withdrawals", component: function () {
                    return o.a.createElement(Ae, {
                        pageId: "withdrawals",
                        navbarConfig: Ce
                    }, o.a.createElement(Ee, {type: "withdrawals"}))
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/support/system-status", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(rt, {current: "system-status"}),
                        fileName: "SystemStatus.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/support/eth", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(rt, {current: "eth"}),
                        fileName: "asset_list/ETH.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/support/lrc", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(rt, {current: "lrc"}),
                        fileName: "asset_list/LRC.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/support/usdt", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(rt, {current: "usdt"}),
                        fileName: "asset_list/USDT.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/support/dai", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(rt, {current: "dai"}),
                        fileName: "asset_list/DAI.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/support/link", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(rt, {current: "link"}),
                        fileName: "asset_list/LINK.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/legal/terms", component: function () {
                    return o.a.createElement(Xe, {
                        navigation: o.a.createElement(Ze, {current: "terms"}),
                        src: "https://app.termly.io/document/terms-of-use-for-website/a3ba9520-8d44-4f27-aafa-e8541c4fbe41"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/legal/disclaimer", component: function () {
                    return o.a.createElement(Xe, {
                        navigation: o.a.createElement(Ze, {current: "disclaimer"}),
                        src: "https://app.termly.io/document/disclaimer/c2e3b92e-6bb5-4f42-9582-a887ceb92742"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/legal/privacy-policy", component: function () {
                    return o.a.createElement(Xe, {
                        navigation: o.a.createElement(Ze, {current: "privacy"}),
                        src: "https://app.termly.io/document/privacy-policy/740b0507-cd76-496c-8109-5eb68fc24aba"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/legal/cookie-policy", component: function () {
                    return o.a.createElement(Xe, {
                        navigation: o.a.createElement(Ze, {current: "cookie"}),
                        src: "https://app.termly.io/document/cookie-policy/b1750f23-1855-4923-9a4a-88904894b2c6"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/document/fees", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(ct, {current: "fees"}),
                        fileName: "Fees.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/document/listing", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(ct, {current: "listing"}),
                        fileName: "Listing.md"
                    })
                }
            }), o.a.createElement(r.b, {
                exact: !0, path: "/document/beta1", component: function () {
                    return o.a.createElement(Qe.a, {
                        navigation: o.a.createElement(ct, {current: "beta1"}),
                        fileName: "Beta1Rewards.md"
                    })
                }
            }), o.a.createElement(r.b, {exact: !0, path: "/404", component: ut}), o.a.createElement(r.b, {
                path: "/*",
                render: function () {
                    return o.a.createElement(r.a, {to: "/404"})
                }
            })));
        t.a = Po
    }, 749: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(721), a = n(15), o = n(0), i = n.n(o), c = n(33), s = n.n(c), l = n(43), u = n(637);
        s.a.render(i.a.createElement(r.AppContainer, null, i.a.createElement(a.a, {store: Object(l.a)()}, i.a.createElement(u.a, null))), document.getElementById("root"))
    }, 826: function (e) {
        e.exports = JSON.parse('{"defaultGasPrice":21,"defaultGasLimit":"0x7a120","label":211,"fee":"0.01","feeToken":"ETH","maxFeeBips":50,"maxAmount":"0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF","uatServerUrl":"uat.loopring.io","uatWsUrl":"ws.uat.loopring.io","prodServerUrl":"api.wedex.io","prodWsUrl":"ws.wedex.io","defaultChannelId":"hebao::subchannel::0001","txs":[{"type":"approve","gas":100000},{"type":"withdraw","gas":200000},{"type":"deposit","gas":500000},{"type":"create","gas":500000},{"type":"depositTo","gas":500000}]}')
    }, 84: function (e, t, n) {
        "use strict";
        (function (e) {
            var r = n(34),
                a = [Object(r.bigInt)("16540640123574156134436876038791482806971768689494387082833631921987005038935"), Object(r.bigInt)("20819045374670962167435360035096875258406992893633759881276124905556507972311")],
                o = Object(r.bigInt)("21888242871839275222246405745257275088614511777268538073601725287587578984328"),
                i = o.shr(3), c = r.bn128.r;

            function s(e, t) {
                var n = r.bn128.r, a = Object(r.bigInt)("168700"), o = Object(r.bigInt)("168696"), i = [];
                return i[0] = Object(r.bigInt)(Object(r.bigInt)(e[0]).mul(t[1]).add(Object(r.bigInt)(t[0]).mul(e[1])).mul(Object(r.bigInt)(Object(r.bigInt)("1").add(o.mul(e[0]).mul(t[0]).mul(e[1]).mul(t[1]))).inverse(n))).affine(n), i[1] = Object(r.bigInt)(Object(r.bigInt)(e[1]).mul(t[1]).sub(a.mul(e[0]).mul(t[0])).mul(Object(r.bigInt)(Object(r.bigInt)("1").sub(o.mul(e[0]).mul(t[0]).mul(e[1]).mul(t[1]))).inverse(n))).affine(n), i
            }

            function l(e, t) {
                for (var n = [Object(r.bigInt)("0"), Object(r.bigInt)("1")], a = Object(r.bigInt)(t), o = e; !a.isZero();) a.isOdd() && (n = s(n, o)), o = s(o, o), a = a.shr(1);
                return n
            }

            function u(e) {
                var t = r.bn128.Fr, n = Object(r.bigInt)("168700"), a = Object(r.bigInt)("168696"), o = t.square(e[0]),
                    i = t.square(e[1]);
                return !!t.equals(t.add(t.mul(n, o), i), t.add(t.one, t.mul(t.mul(o, i), a)))
            }

            t.a = {
                addPoint: s, mulPointEscalar: l, inCurve: u, inSubgroup: function (e) {
                    if (!u(e)) return !1;
                    var t = l(e, exports.subOrder);
                    return t[0].equals(Object(r.bigInt)(0)) && t[1].equals(Object(r.bigInt)(1))
                }, packPoint: function (e) {
                    var t = r.bigInt.leInt2Buff(e[1], 32);
                    return e[0].greater(exports.p.shr(1)) && (t[31] = 128 | t[31]), t
                }, unpackPoint: function (t) {
                    var n = r.bn128.Fr, a = e.from(t), o = !1, i = new Array(2);
                    if (128 & a[31] && (o = !0, a[31] = 127 & a[31]), i[1] = r.bigInt.leBuff2int(a), i[1].greaterOrEquals(exports.p)) return null;
                    var c = Object(r.bigInt)("168700"), s = Object(r.bigInt)("168696"), l = n.square(i[1]),
                        u = n.sqrt(n.div(n.sub(n.one, l), n.sub(c, n.mul(s, l))));
                    return null == u ? null : (o && (u = n.neg(u)), i[0] = n.affine(u), i)
                }, Base8: a, order: o, subOrder: i, p: c
            }
        }).call(this, n(24).Buffer)
    }, 88: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return l
        })), n.d(t, "b", (function () {
            return d
        }));
        var r = n(4), a = n.n(r), o = n(10), i = n(26);

        function c() {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function e() {
                var t;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(i.b)({method: "GET", url: "/api/v2/recommendedGasPrice"});
                        case 2:
                            return t = e.sent, e.abrupt("return", t.data);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var l = "UPDATE_GAS_PRICE";

        function u(e) {
            return {type: l, payload: {gasPrice: e}}
        }

        function d() {
            return function (e) {
                Object(o.a)(a.a.mark((function t() {
                    var n, r;
                    return a.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, c();
                            case 3:
                                n = t.sent, r = i.a.toGWEI(n), e(u(r)), t.next = 11;
                                break;
                            case 8:
                                t.prev = 8, t.t0 = t.catch(0), console.log(t.t0);
                            case 11:
                            case"end":
                                return t.stop()
                        }
                    }), t, null, [[0, 8]])
                })))()
            }
        }
    }, 9: function (e, t, n) {
        "use strict";
        var r = n(81), a = n(20), o = n(826);

        function i() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return   "www.wedex.io" === window.location.hostname ? e ? o.prodServerUrl : o.prodWsUrl : e ? o.prodServerUrl : o.prodWsUrl
        }

        function c(e, t) {
            return "undefined" === typeof e ? {} : t.find((function (t) {
                return t.symbol.toLowerCase() === e.toLowerCase()
            })) || {}
        }

        function s(e, t) {
            if (e) return t.find((function (t) {
                return t.market === e
            }))
        }

        function l(e, t) {
            return t.filter((function (t) {
                return t.split("-")[1] === e
            }))
        }

        t.a = {
            getRelayerHost: i, getServer: function () {
                return "https://" + i()
            }, getWsServer: function () {
                return "wss://" + i(!1) + "/v2/ws"
            }, getTokenBySymbol: c, getTokenByAddress: function (e, t) {
                return "undefined" === typeof e ? {} : t.find((function (t) {
                    return t.address.toLowerCase() === e.toLowerCase()
                }))
            }, getTokenByTokenId: function (e, t) {
                return "undefined" === typeof e ? {} : t.find((function (t) {
                    return t.tokenId === e
                }))
            }, getMarketByPair: s, getGasLimitByType: function (e) {
                if (e) return o.txs.find((function (t) {
                    return e === t.type
                }))
            }, getFeeByType: function (e, t) {
                if (e) return t.find((function (t) {
                    return e === t.type
                }))
            }, getChannelId: function () {
                return o.defaultChannelId
            }, getLabel: function () {
                return o.label
            }, isSupportedMarket: function (e, t) {
                return !!s(e, t)
            }, getMarketsByTokenR: l, getTokenSupportedMarkets: function (e) {
                var t = function (e, t) {
                    return t.filter((function (t) {
                        return t.split("-")[0] === e
                    }))
                }(e), n = l(e);
                return [].concat(Object(r.a)(t), Object(r.a)(n))
            }, getMaxFeeBips: function () {
                return o.maxFeeBips
            }, getMaxAmountInWEI: function () {
                return o.maxAmount
            }, fromWEI: function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = r.precision,
                    i = r.ceil, s = c(e, n), l = o || s.precision, u = Object(a.toBig)(t).div("1e" + s.decimals);
                return Object(a.toFixed)(u, l, i)
            }, toWEI: function (e, t, n) {
                var r = c(e, n);
                return "undefined" === typeof r ? 0 : Object(a.toBig)(t).times("1e" + r.decimals).toFixed(0).toString(10)
            }
        }
    }, 91: function (e, t, n) {
        "use strict";
        var r = n(0), a = n.n(r);
        t.a = function (e) {
            var t = e.label, n = e.children;
            return a.a.createElement("div", {
                style: {
                    fontWeight: "400",
                    fontSize: "0.9rem"
                }
            }, t ? a.a.createElement("div", {
                style: {
                    paddingBottom: "8px",
                    userSelect: "none"
                }
            }, t) : a.a.createElement("span", null), a.a.createElement("div", {
                style: {
                    display: "block",
                    marginBottom: "12px"
                }
            }, n))
        }
    }, 92: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var r = n(624), a = n.n(r), o = n(9).a.getServer();

        function i(e, t) {
            return e.timeout = e.timeout || 3e4, e.baseURL = e.baseURL || o, a()(e).then((function (e) {
                return t ? t(e) : function (e) {
                    var t = e.data, n = t.resultInfo, r = t.error;
                    if (n) {
                        if (0 !== n.code) {
                            var a = n.message;
                            throw Error(a)
                        }
                        return t
                    }
                    if (r) {
                        if (0 !== r.code) {
                            var o = "".concat(r.code, " ").concat(r.message);
                            throw Error(o)
                        }
                        return t
                    }
                    return t
                }(e)
            }))
        }
    }
}, [[1442, 5, 2, 1, 4, 0]]]);
//# sourceMappingURL=main~970f9218.3d76fa7d.chunk.js.map
