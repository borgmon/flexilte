var Z = Object.defineProperty;
var q = (t, e, n) =>
	e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var j = (t, e, n) => (q(t, typeof e != 'symbol' ? e + '' : e, n), n);
import {
	n as w,
	W as G,
	d as V,
	X as H,
	r as v,
	V as P,
	Y as k,
	Z as J,
	_ as B,
	$ as M,
	a as K,
	a0 as Q,
	a1 as T,
	a2 as tt,
	a3 as et,
	a4 as N,
	a5 as nt,
	a6 as it,
	a7 as st,
	a8 as rt,
	a9 as at
} from './scheduler.CcAwvEnr.js';
const D = typeof window < 'u';
let F = D ? () => window.performance.now() : () => Date.now(),
	A = D ? (t) => requestAnimationFrame(t) : w;
const p = new Set();
function L(t) {
	p.forEach((e) => {
		e.c(t) || (p.delete(e), e.f());
	}),
		p.size !== 0 && A(L);
}
function U(t) {
	let e;
	return (
		p.size === 0 && A(L),
		{
			promise: new Promise((n) => {
				p.add((e = { c: t, f: n }));
			}),
			abort() {
				p.delete(e);
			}
		}
	);
}
const O = new Map();
let b = 0;
function ot(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function ft(t, e) {
	const n = { stylesheet: H(e), rules: {} };
	return O.set(t, n), n;
}
function W(t, e, n, i, r, a, u, l = 0) {
	const d = 16.666 / i;
	let s = `{
`;
	for (let g = 0; g <= 1; g += d) {
		const m = e + (n - e) * a(g);
		s +=
			g * 100 +
			`%{${u(m, 1 - m)}}
`;
	}
	const f =
			s +
			`100% {${u(n, 1 - n)}}
}`,
		o = `__svelte_${ot(f)}_${l}`,
		_ = G(t),
		{ stylesheet: c, rules: $ } = O.get(_) || ft(_, t);
	$[o] || (($[o] = !0), c.insertRule(`@keyframes ${o} ${f}`, c.cssRules.length));
	const h = t.style.animation || '';
	return (t.style.animation = `${h ? `${h}, ` : ''}${o} ${i}ms linear ${r}ms 1 both`), (b += 1), o;
}
function z(t, e) {
	const n = (t.style.animation || '').split(', '),
		i = n.filter(e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf('__svelte') === -1),
		r = n.length - i.length;
	r && ((t.style.animation = i.join(', ')), (b -= r), b || ut());
}
function ut() {
	A(() => {
		b ||
			(O.forEach((t) => {
				const { ownerNode: e } = t.stylesheet;
				e && V(e);
			}),
			O.clear());
	});
}
let x;
function X() {
	return (
		x ||
			((x = Promise.resolve()),
			x.then(() => {
				x = null;
			})),
		x
	);
}
function C(t, e, n) {
	t.dispatchEvent(J(`${e ? 'intro' : 'outro'}${n}`));
}
const S = new Set();
let y;
function gt() {
	y = { r: 0, c: [], p: y };
}
function yt() {
	y.r || v(y.c), (y = y.p);
}
function ct(t, e) {
	t && t.i && (S.delete(t), t.i(e));
}
function pt(t, e, n, i) {
	if (t && t.o) {
		if (S.has(t)) return;
		S.add(t),
			y.c.push(() => {
				S.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
const Y = { duration: 0 };
function wt(t, e, n) {
	const i = { direction: 'in' };
	let r = e(t, n, i),
		a = !1,
		u,
		l,
		d = 0;
	function s() {
		u && z(t, u);
	}
	function f() {
		const { delay: _ = 0, duration: c = 300, easing: $ = B, tick: h = w, css: g } = r || Y;
		g && (u = W(t, 0, 1, c, _, $, g, d++)), h(0, 1);
		const m = F() + _,
			E = m + c;
		l && l.abort(),
			(a = !0),
			k(() => C(t, !0, 'start')),
			(l = U((R) => {
				if (a) {
					if (R >= E) return h(1, 0), C(t, !0, 'end'), s(), (a = !1);
					if (R >= m) {
						const I = $((R - m) / c);
						h(I, 1 - I);
					}
				}
				return a;
			}));
	}
	let o = !1;
	return {
		start() {
			o || ((o = !0), z(t), P(r) ? ((r = r(i)), X().then(f)) : f());
		},
		invalidate() {
			o = !1;
		},
		end() {
			a && (s(), (a = !1));
		}
	};
}
function xt(t, e, n) {
	const i = { direction: 'out' };
	let r = e(t, n, i),
		a = !0,
		u;
	const l = y;
	l.r += 1;
	let d;
	function s() {
		const { delay: f = 0, duration: o = 300, easing: _ = B, tick: c = w, css: $ } = r || Y;
		$ && (u = W(t, 1, 0, o, f, _, $));
		const h = F() + f,
			g = h + o;
		k(() => C(t, !1, 'start')),
			'inert' in t && ((d = t.inert), (t.inert = !0)),
			U((m) => {
				if (a) {
					if (m >= g) return c(0, 1), C(t, !1, 'end'), --l.r || v(l.c), !1;
					if (m >= h) {
						const E = _((m - h) / o);
						c(1 - E, E);
					}
				}
				return a;
			});
	}
	return (
		P(r)
			? X().then(() => {
					(r = r(i)), s();
				})
			: s(),
		{
			end(f) {
				f && 'inert' in t && (t.inert = d),
					f && r.tick && r.tick(1, 0),
					a && (u && z(t, u), (a = !1));
			}
		}
	);
}
function vt(t) {
	t && t.c();
}
function Et(t, e) {
	t && t.l(e);
}
function lt(t, e, n) {
	const { fragment: i, after_update: r } = t.$$;
	i && i.m(e, n),
		k(() => {
			const a = t.$$.on_mount.map(nt).filter(P);
			t.$$.on_destroy ? t.$$.on_destroy.push(...a) : v(a), (t.$$.on_mount = []);
		}),
		r.forEach(k);
}
function dt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(tt(n.after_update),
		v(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function _t(t, e) {
	t.$$.dirty[0] === -1 && (it.push(t), st(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function St(t, e, n, i, r, a, u = null, l = [-1]) {
	const d = et;
	N(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: [],
		props: a,
		update: w,
		not_equal: r,
		bound: M(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (d ? d.$$.context : [])),
		callbacks: M(),
		dirty: l,
		skip_bound: !1,
		root: e.target || d.$$.root
	});
	u && u(s.root);
	let f = !1;
	if (
		((s.ctx = n
			? n(t, e.props || {}, (o, _, ...c) => {
					const $ = c.length ? c[0] : _;
					return (
						s.ctx &&
							r(s.ctx[o], (s.ctx[o] = $)) &&
							(!s.skip_bound && s.bound[o] && s.bound[o]($), f && _t(t, o)),
						_
					);
				})
			: []),
		s.update(),
		(f = !0),
		v(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			rt();
			const o = K(e.target);
			s.fragment && s.fragment.l(o), o.forEach(V);
		} else s.fragment && s.fragment.c();
		e.intro && ct(t.$$.fragment), lt(t, e.target, e.anchor), at(), Q();
	}
	N(d);
}
class kt {
	constructor() {
		j(this, '$$');
		j(this, '$$set');
	}
	$destroy() {
		dt(this, 1), (this.$destroy = w);
	}
	$on(e, n) {
		if (!P(n)) return w;
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const r = i.indexOf(n);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !T(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
const $t = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add($t);
export {
	kt as S,
	Et as a,
	pt as b,
	vt as c,
	dt as d,
	yt as e,
	wt as f,
	gt as g,
	xt as h,
	St as i,
	lt as m,
	ct as t
};
