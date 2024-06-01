var I = Object.defineProperty;
var z = (t, e, n) =>
	e in t ? I(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var f = (t, e, n) => (z(t, typeof e != 'symbol' ? e + '' : e, n), n);
function M() {}
function F(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function R(t) {
	return t();
}
function ct() {
	return Object.create(null);
}
function U(t) {
	t.forEach(R);
}
function W(t) {
	return typeof t == 'function';
}
function rt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let m;
function ot(t, e) {
	return t === e ? !0 : (m || (m = document.createElement('a')), (m.href = e), t === m.href);
}
function ut(t) {
	return Object.keys(t).length === 0;
}
function j(t, ...e) {
	if (t == null) {
		for (const i of e) i(void 0);
		return M;
	}
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function at(t) {
	let e;
	return j(t, (n) => (e = n))(), e;
}
function ft(t, e, n) {
	t.$$.on_destroy.push(j(e, n));
}
function _t(t, e, n, i) {
	if (t) {
		const s = H(t, e, n, i);
		return t[0](s);
	}
}
function H(t, e, n, i) {
	return t[1] && i ? F(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function ht(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const r = [],
				l = Math.max(e.dirty.length, s.length);
			for (let o = 0; o < l; o += 1) r[o] = e.dirty[o] | s[o];
			return r;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function dt(t, e, n, i, s, r) {
	if (s) {
		const l = H(e, n, i, r);
		t.p(l, s);
	}
}
function mt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function pt(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function yt(t, e) {
	const n = {};
	e = new Set(e);
	for (const i in t) !e.has(i) && i[0] !== '$' && (n[i] = t[i]);
	return n;
}
function gt(t) {
	const e = {};
	for (const n in t) e[n] = !0;
	return e;
}
function bt(t) {
	return t && W(t.destroy) ? t.destroy : M;
}
let y = !1;
function xt() {
	y = !0;
}
function vt() {
	y = !1;
}
function J(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function K(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let u = 0; u < e.length; u++) {
			const a = e[u];
			a.claim_order !== void 0 && c.push(a);
		}
		e = c;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let c = 0; c < e.length; c++) {
		const u = e[c].claim_order,
			a = (s > 0 && e[n[s]].claim_order <= u ? s + 1 : J(1, s, (G) => e[n[G]].claim_order, u)) - 1;
		i[c] = n[a] + 1;
		const N = a + 1;
		(n[N] = c), (s = Math.max(N, s));
	}
	const r = [],
		l = [];
	let o = e.length - 1;
	for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
		for (r.push(e[c - 1]); o >= c; o--) l.push(e[o]);
		o--;
	}
	for (; o >= 0; o--) l.push(e[o]);
	r.reverse(), l.sort((c, u) => c.claim_order - u.claim_order);
	for (let c = 0, u = 0; c < l.length; c++) {
		for (; u < r.length && l[c].claim_order >= r[u].claim_order; ) u++;
		const a = u < r.length ? r[u] : null;
		t.insertBefore(l[c], a);
	}
}
function Q(t, e) {
	if (y) {
		for (
			K(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function V(t, e, n) {
	t.insertBefore(e, n || null);
}
function X(t, e, n) {
	y && !n ? Q(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function E(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function Et(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function P(t) {
	return document.createElement(t);
}
function S(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function T(t) {
	return document.createTextNode(t);
}
function wt() {
	return T(' ');
}
function Tt() {
	return T('');
}
function Nt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function O(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Y = ['width', 'height'];
function kt(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
				? (t.style.cssText = e[i])
				: i === '__value'
					? (t.value = t[i] = e[i])
					: n[i] && n[i].set && Y.indexOf(i) === -1
						? (t[i] = e[i])
						: O(t, i, e[i]);
}
function At(t, e) {
	for (const n in e) O(t, n, e[n]);
}
function Lt(t) {
	return t.dataset.svelteH;
}
function Mt(t) {
	return Array.from(t.childNodes);
}
function C(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function D(t, e, n, i, s = !1) {
	C(t);
	const r = (() => {
		for (let l = t.claim_info.last_index; l < t.length; l++) {
			const o = t[l];
			if (e(o)) {
				const c = n(o);
				return c === void 0 ? t.splice(l, 1) : (t[l] = c), s || (t.claim_info.last_index = l), o;
			}
		}
		for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
			const o = t[l];
			if (e(o)) {
				const c = n(o);
				return (
					c === void 0 ? t.splice(l, 1) : (t[l] = c),
					s ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = l),
					o
				);
			}
		}
		return i();
	})();
	return (r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), r;
}
function q(t, e, n, i) {
	return D(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const r = [];
			for (let l = 0; l < s.attributes.length; l++) {
				const o = s.attributes[l];
				n[o.name] || r.push(o.name);
			}
			r.forEach((l) => s.removeAttribute(l));
		},
		() => i(e)
	);
}
function jt(t, e, n) {
	return q(t, e, n, P);
}
function Ht(t, e, n) {
	return q(t, e, n, S);
}
function Z(t, e) {
	return D(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => T(e),
		!0
	);
}
function Pt(t) {
	return Z(t, ' ');
}
function k(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i];
		if (s.nodeType === 8 && s.textContent.trim() === e) return i;
	}
	return -1;
}
function St(t, e) {
	const n = k(t, 'HTML_TAG_START', 0),
		i = k(t, 'HTML_TAG_END', n + 1);
	if (n === -1 || i === -1) return new b(e);
	C(t);
	const s = t.splice(n, i - n + 1);
	E(s[0]), E(s[s.length - 1]);
	const r = s.slice(1, s.length - 1);
	if (r.length === 0) return new b(e);
	for (const l of r)
		(l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new b(e, r);
}
function Ot(t, e) {
	(e = '' + e), t.data !== e && (t.data = e);
}
function Ct(t, e) {
	t.value = e ?? '';
}
function Dt(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, '');
}
function qt(t, e, n) {
	t.classList.toggle(e, !!n);
}
function $(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
class tt {
	constructor(e = !1) {
		f(this, 'is_svg', !1);
		f(this, 'e');
		f(this, 'n');
		f(this, 't');
		f(this, 'a');
		(this.is_svg = e), (this.e = this.n = null);
	}
	c(e) {
		this.h(e);
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = S(n.nodeName))
				: (this.e = P(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i);
	}
	h(e) {
		(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) V(this.t, this.n[n], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(E);
	}
}
class b extends tt {
	constructor(n = !1, i) {
		super(n);
		f(this, 'l');
		(this.e = this.n = null), (this.l = i);
	}
	c(n) {
		this.l ? (this.n = this.l) : super.c(n);
	}
	i(n) {
		for (let i = 0; i < this.n.length; i += 1) X(this.t, this.n[i], n);
	}
}
function Bt(t, e) {
	return new t(e);
}
let p;
function x(t) {
	p = t;
}
function g() {
	if (!p) throw new Error('Function called outside component initialization');
	return p;
}
function Gt(t) {
	g().$$.on_mount.push(t);
}
function It(t) {
	g().$$.after_update.push(t);
}
function zt(t) {
	g().$$.on_destroy.push(t);
}
function Ft() {
	const t = g();
	return (e, n, { cancelable: i = !1 } = {}) => {
		const s = t.$$.callbacks[e];
		if (s) {
			const r = $(e, n, { cancelable: i });
			return (
				s.slice().forEach((l) => {
					l.call(t, r);
				}),
				!r.defaultPrevented
			);
		}
		return !0;
	};
}
function Rt(t, e) {
	const n = t.$$.callbacks[e.type];
	n && n.slice().forEach((i) => i.call(this, e));
}
const d = [],
	A = [];
let h = [];
const L = [],
	B = Promise.resolve();
let w = !1;
function et() {
	w || ((w = !0), B.then(it));
}
function Ut() {
	return et(), B;
}
function nt(t) {
	h.push(t);
}
const v = new Set();
let _ = 0;
function it() {
	if (_ !== 0) return;
	const t = p;
	do {
		try {
			for (; _ < d.length; ) {
				const e = d[_];
				_++, x(e), st(e.$$);
			}
		} catch (e) {
			throw ((d.length = 0), (_ = 0), e);
		}
		for (x(null), d.length = 0, _ = 0; A.length; ) A.pop()();
		for (let e = 0; e < h.length; e += 1) {
			const n = h[e];
			v.has(n) || (v.add(n), n());
		}
		h.length = 0;
	} while (d.length);
	for (; L.length; ) L.pop()();
	(w = !1), v.clear(), x(t);
}
function st(t) {
	if (t.fragment !== null) {
		t.update(), U(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(nt);
	}
}
function Wt(t) {
	const e = [],
		n = [];
	h.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (h = e);
}
export {
	kt as $,
	Ut as A,
	Ct as B,
	pt as C,
	S as D,
	Ht as E,
	qt as F,
	gt as G,
	_t as H,
	dt as I,
	mt as J,
	ht as K,
	at as L,
	ct as M,
	it as N,
	W as O,
	ut as P,
	nt as Q,
	Wt as R,
	p as S,
	x as T,
	R as U,
	d as V,
	et as W,
	xt as X,
	vt as Y,
	ot as Z,
	zt as _,
	Mt as a,
	yt as a0,
	bt as a1,
	Ft as a2,
	b as a3,
	St as a4,
	At as a5,
	Rt as a6,
	O as b,
	jt as c,
	E as d,
	P as e,
	wt as f,
	Z as g,
	Pt as h,
	X as i,
	Q as j,
	Ot as k,
	ft as l,
	Lt as m,
	M as n,
	Nt as o,
	Gt as p,
	Tt as q,
	U as r,
	rt as s,
	T as t,
	Et as u,
	Bt as v,
	F as w,
	It as x,
	Dt as y,
	A as z
};
