var E = Object.defineProperty;
var O = (t, e, n) =>
	e in t ? E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var _ = (t, e, n) => (O(t, typeof e != 'symbol' ? e + '' : e, n), n);
import {
	r as $,
	n as c,
	M as p,
	a as b,
	d as C,
	N as I,
	O as v,
	P as M,
	Q as x,
	R as N,
	S as P,
	T as w,
	U as R,
	V as U,
	W as V,
	X as j,
	Y as B
} from './scheduler.DFLkqwTt.js';
const u = new Set();
let d;
function A() {
	d = { r: 0, c: [], p: d };
}
function D() {
	d.r || $(d.c), (d = d.p);
}
function L(t, e) {
	t && t.i && (u.delete(t), t.i(e));
}
function F(t, e, n, a) {
	if (t && t.o) {
		if (u.has(t)) return;
		u.add(t),
			d.c.push(() => {
				u.delete(t), a && (n && t.d(1), a());
			}),
			t.o(e);
	} else a && a();
}
function G(t) {
	t && t.c();
}
function H(t, e) {
	t && t.l(e);
}
function Q(t, e, n) {
	const { fragment: a, after_update: i } = t.$$;
	a && a.m(e, n),
		x(() => {
			const f = t.$$.on_mount.map(R).filter(v);
			t.$$.on_destroy ? t.$$.on_destroy.push(...f) : $(f), (t.$$.on_mount = []);
		}),
		i.forEach(x);
}
function T(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(N(n.after_update),
		$(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function W(t, e) {
	t.$$.dirty[0] === -1 && (U.push(t), V(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function J(t, e, n, a, i, f, l = null, S = [-1]) {
	const o = P;
	w(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: [],
		props: f,
		update: c,
		not_equal: i,
		bound: p(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (o ? o.$$.context : [])),
		callbacks: p(),
		dirty: S,
		skip_bound: !1,
		root: e.target || o.$$.root
	});
	l && l(s.root);
	let h = !1;
	if (
		((s.ctx = n
			? n(t, e.props || {}, (r, g, ...m) => {
					const y = m.length ? m[0] : g;
					return (
						s.ctx &&
							i(s.ctx[r], (s.ctx[r] = y)) &&
							(!s.skip_bound && s.bound[r] && s.bound[r](y), h && W(t, r)),
						g
					);
				})
			: []),
		s.update(),
		(h = !0),
		$(s.before_update),
		(s.fragment = a ? a(s.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			j();
			const r = b(e.target);
			s.fragment && s.fragment.l(r), r.forEach(C);
		} else s.fragment && s.fragment.c();
		e.intro && L(t.$$.fragment), Q(t, e.target, e.anchor), B(), I();
	}
	w(o);
}
class K {
	constructor() {
		_(this, '$$');
		_(this, '$$set');
	}
	$destroy() {
		T(this, 1), (this.$destroy = c);
	}
	$on(e, n) {
		if (!v(n)) return c;
		const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			a.push(n),
			() => {
				const i = a.indexOf(n);
				i !== -1 && a.splice(i, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !M(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
const X = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(X);
export { K as S, H as a, F as b, G as c, T as d, D as e, A as g, J as i, Q as m, L as t };
