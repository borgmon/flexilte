import {
	aa as wn,
	ab as $e,
	_ as Rn,
	ac as lt,
	s as Ze,
	K as re,
	e as G,
	f as ee,
	c as K,
	a as j,
	h as te,
	d as x,
	b as m,
	i as V,
	j as W,
	L as ae,
	M as se,
	N as oe,
	I as Xt,
	w as Ne,
	y as Ae,
	F as ct,
	o as ue,
	ad as Pe,
	t as jt,
	g as Vt,
	q as ut,
	l as dt,
	E as Mn,
	U as vn,
	Y as ft,
	r as Yt,
	O as gt,
	m as Te,
	n as et
} from '../chunks/scheduler.CcAwvEnr.js';
import {
	S as We,
	i as Xe,
	t as O,
	g as ge,
	b as H,
	e as be,
	f as bt,
	h as ht,
	c as Ue,
	a as He,
	m as ze,
	d as Fe
} from '../chunks/index.u1Eg8cTy.js';
import { s as On, I as In } from '../chunks/Icon.D9-48yDF.js';
import { w as tt } from '../chunks/index.CT6Yb9O0.js';
import { p as Cn } from '../chunks/ProgressBar.svelte_svelte_type_style_lang.DXi_RU-c.js';
const Ln = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global,
	Dn = !0,
	Yr = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: Dn }, Symbol.toStringTag, {
			value: 'Module'
		})
	),
	qt = 'drawerStore';
function Jt() {
	const e = wn(qt);
	if (!e)
		throw new Error(
			'drawerStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!'
		);
	return e;
}
function xn() {
	const e = Bn();
	return $e(qt, e);
}
function Bn() {
	const { subscribe: e, set: t, update: n } = tt({});
	return {
		subscribe: e,
		set: t,
		update: n,
		open: (a) => n(() => ({ open: !0, ...a })),
		close: () => n((a) => ((a.open = !1), a))
	};
}
const Pn = 'modalStore';
function Un() {
	const e = Hn();
	return $e(Pn, e);
}
function Hn() {
	const { subscribe: e, set: t, update: n } = tt([]);
	return {
		subscribe: e,
		set: t,
		update: n,
		trigger: (a) => n((o) => (o.push(a), o)),
		close: () => n((a) => (a.length > 0 && a.shift(), a)),
		clear: () => t([])
	};
}
const zn = { message: 'Missing Toast Message', autohide: !0, timeout: 5e3 },
	Fn = 'toastStore';
function Gn() {
	const e = Zn();
	return $e(Fn, e);
}
function Kn() {
	const e = Math.random();
	return Number(e).toString(32);
}
function Zn() {
	const { subscribe: e, set: t, update: n } = tt([]),
		a = (i) =>
			n((r) => {
				if (r.length > 0) {
					const s = r.findIndex((b) => b.id === i),
						l = r[s];
					l &&
						(l.callback && l.callback({ id: i, status: 'closed' }),
						l.timeoutId && clearTimeout(l.timeoutId),
						r.splice(s, 1));
				}
				return r;
			});
	function o(i) {
		if (i.autohide === !0)
			return setTimeout(() => {
				a(i.id);
			}, i.timeout);
	}
	return {
		subscribe: e,
		close: a,
		trigger: (i) => {
			const r = Kn();
			return (
				n((s) => {
					i && i.callback && i.callback({ id: r, status: 'queued' }),
						i.hideDismiss && (i.autohide = !0);
					const l = { ...zn, ...i, id: r };
					return (l.timeoutId = o(l)), s.push(l), s;
				}),
				r
			);
		},
		freeze: (i) => n((r) => (r.length > 0 && clearTimeout(r[i].timeoutId), r)),
		unfreeze: (i) => n((r) => (r.length > 0 && (r[i].timeoutId = o(r[i])), r)),
		clear: () => t([])
	};
}
function Wn() {
	Un(), Gn(), xn();
}
function Xn(e, t) {
	const n =
		'a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';
	let a, o;
	function i(g) {
		g.shiftKey && g.code === 'Tab' && (g.preventDefault(), o.focus());
	}
	function r(g) {
		!g.shiftKey && g.code === 'Tab' && (g.preventDefault(), a.focus());
	}
	const s = (g) =>
			g
				.filter((u) => u.tabIndex >= 0)
				.sort((u, p) =>
					u.tabIndex === 0 && p.tabIndex > 0
						? 1
						: u.tabIndex > 0 && p.tabIndex === 0
							? -1
							: u.tabIndex - p.tabIndex
				),
		l = (g) => {
			const u = [...e.querySelectorAll('[data-focusindex]')];
			return !u || u.length === 0
				? g
				: u.sort((p, d) => +p.dataset.focusindex - +d.dataset.focusindex)[0] || g;
		},
		b = (g) => {
			if (t === !1) return;
			const u = s(Array.from(e.querySelectorAll(n)));
			u.length &&
				((a = u[0]),
				(o = u[u.length - 1]),
				g || l(a).focus(),
				a.addEventListener('keydown', i),
				o.addEventListener('keydown', r));
		};
	b(!1);
	function f() {
		a && a.removeEventListener('keydown', i), o && o.removeEventListener('keydown', r);
	}
	const y = (g, u) => (g.length && (f(), b(!0)), u),
		N = new MutationObserver(y);
	return (
		N.observe(e, { childList: !0, subtree: !0 }),
		{
			update(g) {
				(t = g), g ? b(!1) : f();
			},
			destroy() {
				f(), N.disconnect();
			}
		}
	);
}
function jn(e) {
	return e * e * e;
}
function Vn(e) {
	const t = e - 1;
	return t * t * t + 1;
}
function _t(e, { delay: t = 0, duration: n = 400, easing: a = Rn } = {}) {
	const o = +getComputedStyle(e).opacity;
	return { delay: t, duration: n, easing: a, css: (i) => `opacity: ${i * o}` };
}
function mt(
	e,
	{ delay: t = 0, duration: n = 400, easing: a = Vn, x: o = 0, y: i = 0, opacity: r = 0 } = {}
) {
	const s = getComputedStyle(e),
		l = +s.opacity,
		b = s.transform === 'none' ? '' : s.transform,
		f = l * (1 - r),
		[y, N] = lt(o),
		[g, u] = lt(i);
	return {
		delay: t,
		duration: n,
		easing: a,
		css: (p, d) => `
			transform: ${b} translate(${(1 - p) * y}${N}, ${(1 - p) * g}${u});
			opacity: ${l - f * d}`
	};
}
function xe(e, t) {
	const { transition: n, params: a, enabled: o } = t;
	return o ? n(e, a) : 'duration' in a ? n(e, { duration: 0 }) : { duration: 0 };
}
const Yn = (e) => ({}),
	pt = (e) => ({}),
	qn = (e) => ({}),
	Et = (e) => ({}),
	Jn = (e) => ({}),
	yt = (e) => ({});
function St(e) {
	let t, n, a;
	const o = e[22].lead,
		i = re(o, e, e[21], yt);
	return {
		c() {
			(t = G('div')), i && i.c(), this.h();
		},
		l(r) {
			t = K(r, 'DIV', { class: !0 });
			var s = j(t);
			i && i.l(s), s.forEach(x), this.h();
		},
		h() {
			m(t, 'class', (n = 'app-bar-slot-lead ' + e[4]));
		},
		m(r, s) {
			V(r, t, s), i && i.m(t, null), (a = !0);
		},
		p(r, s) {
			i &&
				i.p &&
				(!a || s & 2097152) &&
				ae(i, o, r, r[21], a ? oe(o, r[21], s, Jn) : se(r[21]), yt),
				(!a || (s & 16 && n !== (n = 'app-bar-slot-lead ' + r[4]))) && m(t, 'class', n);
		},
		i(r) {
			a || (O(i, r), (a = !0));
		},
		o(r) {
			H(i, r), (a = !1);
		},
		d(r) {
			r && x(t), i && i.d(r);
		}
	};
}
function kt(e) {
	let t, n, a;
	const o = e[22].trail,
		i = re(o, e, e[21], Et);
	return {
		c() {
			(t = G('div')), i && i.c(), this.h();
		},
		l(r) {
			t = K(r, 'DIV', { class: !0 });
			var s = j(t);
			i && i.l(s), s.forEach(x), this.h();
		},
		h() {
			m(t, 'class', (n = 'app-bar-slot-trail ' + e[2]));
		},
		m(r, s) {
			V(r, t, s), i && i.m(t, null), (a = !0);
		},
		p(r, s) {
			i &&
				i.p &&
				(!a || s & 2097152) &&
				ae(i, o, r, r[21], a ? oe(o, r[21], s, qn) : se(r[21]), Et),
				(!a || (s & 4 && n !== (n = 'app-bar-slot-trail ' + r[2]))) && m(t, 'class', n);
		},
		i(r) {
			a || (O(i, r), (a = !0));
		},
		o(r) {
			H(i, r), (a = !1);
		},
		d(r) {
			r && x(t), i && i.d(r);
		}
	};
}
function Tt(e) {
	let t, n, a;
	const o = e[22].headline,
		i = re(o, e, e[21], pt);
	return {
		c() {
			(t = G('div')), i && i.c(), this.h();
		},
		l(r) {
			t = K(r, 'DIV', { class: !0 });
			var s = j(t);
			i && i.l(s), s.forEach(x), this.h();
		},
		h() {
			m(t, 'class', (n = 'app-bar-row-headline ' + e[5]));
		},
		m(r, s) {
			V(r, t, s), i && i.m(t, null), (a = !0);
		},
		p(r, s) {
			i &&
				i.p &&
				(!a || s & 2097152) &&
				ae(i, o, r, r[21], a ? oe(o, r[21], s, Yn) : se(r[21]), pt),
				(!a || (s & 32 && n !== (n = 'app-bar-row-headline ' + r[5]))) && m(t, 'class', n);
		},
		i(r) {
			a || (O(i, r), (a = !0));
		},
		o(r) {
			H(i, r), (a = !1);
		},
		d(r) {
			r && x(t), i && i.d(r);
		}
	};
}
function Qn(e) {
	let t,
		n,
		a,
		o,
		i,
		r,
		s,
		l,
		b,
		f,
		y = e[8].lead && St(e);
	const N = e[22].default,
		g = re(N, e, e[21], null);
	let u = e[8].trail && kt(e),
		p = e[8].headline && Tt(e);
	return {
		c() {
			(t = G('div')),
				(n = G('div')),
				y && y.c(),
				(a = ee()),
				(o = G('div')),
				g && g.c(),
				(r = ee()),
				u && u.c(),
				(l = ee()),
				p && p.c(),
				this.h();
		},
		l(d) {
			t = K(d, 'DIV', {
				class: !0,
				'data-testid': !0,
				role: !0,
				'aria-label': !0,
				'aria-labelledby': !0
			});
			var k = j(t);
			n = K(k, 'DIV', { class: !0 });
			var w = j(n);
			y && y.l(w), (a = te(w)), (o = K(w, 'DIV', { class: !0 }));
			var z = j(o);
			g && g.l(z),
				z.forEach(x),
				(r = te(w)),
				u && u.l(w),
				w.forEach(x),
				(l = te(k)),
				p && p.l(k),
				k.forEach(x),
				this.h();
		},
		h() {
			m(o, 'class', (i = 'app-bar-slot-default ' + e[3])),
				m(n, 'class', (s = 'app-bar-row-main ' + e[6])),
				m(t, 'class', (b = 'app-bar ' + e[7])),
				m(t, 'data-testid', 'app-bar'),
				m(t, 'role', 'toolbar'),
				m(t, 'aria-label', e[0]),
				m(t, 'aria-labelledby', e[1]);
		},
		m(d, k) {
			V(d, t, k),
				W(t, n),
				y && y.m(n, null),
				W(n, a),
				W(n, o),
				g && g.m(o, null),
				W(n, r),
				u && u.m(n, null),
				W(t, l),
				p && p.m(t, null),
				(f = !0);
		},
		p(d, [k]) {
			d[8].lead
				? y
					? (y.p(d, k), k & 256 && O(y, 1))
					: ((y = St(d)), y.c(), O(y, 1), y.m(n, a))
				: y &&
					(ge(),
					H(y, 1, 1, () => {
						y = null;
					}),
					be()),
				g &&
					g.p &&
					(!f || k & 2097152) &&
					ae(g, N, d, d[21], f ? oe(N, d[21], k, null) : se(d[21]), null),
				(!f || (k & 8 && i !== (i = 'app-bar-slot-default ' + d[3]))) && m(o, 'class', i),
				d[8].trail
					? u
						? (u.p(d, k), k & 256 && O(u, 1))
						: ((u = kt(d)), u.c(), O(u, 1), u.m(n, null))
					: u &&
						(ge(),
						H(u, 1, 1, () => {
							u = null;
						}),
						be()),
				(!f || (k & 64 && s !== (s = 'app-bar-row-main ' + d[6]))) && m(n, 'class', s),
				d[8].headline
					? p
						? (p.p(d, k), k & 256 && O(p, 1))
						: ((p = Tt(d)), p.c(), O(p, 1), p.m(t, null))
					: p &&
						(ge(),
						H(p, 1, 1, () => {
							p = null;
						}),
						be()),
				(!f || (k & 128 && b !== (b = 'app-bar ' + d[7]))) && m(t, 'class', b),
				(!f || k & 1) && m(t, 'aria-label', d[0]),
				(!f || k & 2) && m(t, 'aria-labelledby', d[1]);
		},
		i(d) {
			f || (O(y), O(g, d), O(u), O(p), (f = !0));
		},
		o(d) {
			H(y), H(g, d), H(u), H(p), (f = !1);
		},
		d(d) {
			d && x(t), y && y.d(), g && g.d(d), u && u.d(), p && p.d();
		}
	};
}
const $n = 'flex flex-col',
	ei = 'grid items-center',
	ti = '',
	ni = 'flex-none flex justify-between items-center',
	ii = 'flex-auto',
	ri = 'flex-none flex items-center space-x-4';
function ai(e, t, n) {
	let a,
		o,
		i,
		r,
		s,
		l,
		{ $$slots: b = {}, $$scope: f } = t;
	const y = Xt(b);
	let { background: N = 'bg-surface-100-800-token' } = t,
		{ border: g = '' } = t,
		{ padding: u = 'p-4' } = t,
		{ shadow: p = '' } = t,
		{ spacing: d = 'space-y-4' } = t,
		{ gridColumns: k = 'grid-cols-[auto_1fr_auto]' } = t,
		{ gap: w = 'gap-4' } = t,
		{ regionRowMain: z = '' } = t,
		{ regionRowHeadline: B = '' } = t,
		{ slotLead: C = '' } = t,
		{ slotDefault: v = '' } = t,
		{ slotTrail: U = '' } = t,
		{ label: E = '' } = t,
		{ labelledby: M = '' } = t;
	return (
		(e.$$set = (R) => {
			n(23, (t = Ne(Ne({}, t), Ae(R)))),
				'background' in R && n(9, (N = R.background)),
				'border' in R && n(10, (g = R.border)),
				'padding' in R && n(11, (u = R.padding)),
				'shadow' in R && n(12, (p = R.shadow)),
				'spacing' in R && n(13, (d = R.spacing)),
				'gridColumns' in R && n(14, (k = R.gridColumns)),
				'gap' in R && n(15, (w = R.gap)),
				'regionRowMain' in R && n(16, (z = R.regionRowMain)),
				'regionRowHeadline' in R && n(17, (B = R.regionRowHeadline)),
				'slotLead' in R && n(18, (C = R.slotLead)),
				'slotDefault' in R && n(19, (v = R.slotDefault)),
				'slotTrail' in R && n(20, (U = R.slotTrail)),
				'label' in R && n(0, (E = R.label)),
				'labelledby' in R && n(1, (M = R.labelledby)),
				'$$scope' in R && n(21, (f = R.$$scope));
		}),
		(e.$$.update = () => {
			n(7, (a = `${$n} ${N} ${g} ${d} ${u} ${p} ${t.class ?? ''}`)),
				e.$$.dirty & 114688 && n(6, (o = `${ei} ${k} ${w} ${z}`)),
				e.$$.dirty & 131072 && n(5, (i = `${ti} ${B}`)),
				e.$$.dirty & 262144 && n(4, (r = `${ni} ${C}`)),
				e.$$.dirty & 524288 && n(3, (s = `${ii} ${v}`)),
				e.$$.dirty & 1048576 && n(2, (l = `${ri} ${U}`));
		}),
		(t = Ae(t)),
		[E, M, l, s, r, i, o, a, y, N, g, u, p, d, k, w, z, B, C, v, U, f, b]
	);
}
class si extends We {
	constructor(t) {
		super(),
			Xe(this, t, ai, Qn, Ze, {
				background: 9,
				border: 10,
				padding: 11,
				shadow: 12,
				spacing: 13,
				gridColumns: 14,
				gap: 15,
				regionRowMain: 16,
				regionRowHeadline: 17,
				slotLead: 18,
				slotDefault: 19,
				slotTrail: 20,
				label: 0,
				labelledby: 1
			});
	}
}
const oi = (e) => ({}),
	Nt = (e) => ({}),
	li = (e) => ({}),
	At = (e) => ({}),
	ci = (e) => ({}),
	wt = (e) => ({}),
	ui = (e) => ({}),
	Rt = (e) => ({}),
	di = (e) => ({}),
	Mt = (e) => ({}),
	fi = (e) => ({}),
	vt = (e) => ({});
function Ot(e) {
	let t, n, a;
	const o = e[19].header,
		i = re(o, e, e[18], vt);
	return {
		c() {
			(t = G('header')), i && i.c(), this.h();
		},
		l(r) {
			t = K(r, 'HEADER', { id: !0, class: !0 });
			var s = j(t);
			i && i.l(s), s.forEach(x), this.h();
		},
		h() {
			m(t, 'id', 'shell-header'), m(t, 'class', (n = 'flex-none ' + e[8]));
		},
		m(r, s) {
			V(r, t, s), i && i.m(t, null), (a = !0);
		},
		p(r, s) {
			i && i.p && (!a || s & 262144) && ae(i, o, r, r[18], a ? oe(o, r[18], s, fi) : se(r[18]), vt),
				(!a || (s & 256 && n !== (n = 'flex-none ' + r[8]))) && m(t, 'class', n);
		},
		i(r) {
			a || (O(i, r), (a = !0));
		},
		o(r) {
			H(i, r), (a = !1);
		},
		d(r) {
			r && x(t), i && i.d(r);
		}
	};
}
function It(e) {
	let t, n;
	const a = e[19].sidebarLeft,
		o = re(a, e, e[18], Mt);
	return {
		c() {
			(t = G('aside')), o && o.c(), this.h();
		},
		l(i) {
			t = K(i, 'ASIDE', { id: !0, class: !0 });
			var r = j(t);
			o && o.l(r), r.forEach(x), this.h();
		},
		h() {
			m(t, 'id', 'sidebar-left'), m(t, 'class', e[7]);
		},
		m(i, r) {
			V(i, t, r), o && o.m(t, null), (n = !0);
		},
		p(i, r) {
			o && o.p && (!n || r & 262144) && ae(o, a, i, i[18], n ? oe(a, i[18], r, di) : se(i[18]), Mt),
				(!n || r & 128) && m(t, 'class', i[7]);
		},
		i(i) {
			n || (O(o, i), (n = !0));
		},
		o(i) {
			H(o, i), (n = !1);
		},
		d(i) {
			i && x(t), o && o.d(i);
		}
	};
}
function Ct(e) {
	let t, n, a;
	const o = e[19].pageHeader,
		i = re(o, e, e[18], Rt),
		r = i || gi();
	return {
		c() {
			(t = G('header')), r && r.c(), this.h();
		},
		l(s) {
			t = K(s, 'HEADER', { id: !0, class: !0 });
			var l = j(t);
			r && r.l(l), l.forEach(x), this.h();
		},
		h() {
			m(t, 'id', 'page-header'), m(t, 'class', (n = 'flex-none ' + e[5]));
		},
		m(s, l) {
			V(s, t, l), r && r.m(t, null), (a = !0);
		},
		p(s, l) {
			i && i.p && (!a || l & 262144) && ae(i, o, s, s[18], a ? oe(o, s[18], l, ui) : se(s[18]), Rt),
				(!a || (l & 32 && n !== (n = 'flex-none ' + s[5]))) && m(t, 'class', n);
		},
		i(s) {
			a || (O(r, s), (a = !0));
		},
		o(s) {
			H(r, s), (a = !1);
		},
		d(s) {
			s && x(t), r && r.d(s);
		}
	};
}
function gi(e) {
	let t;
	return {
		c() {
			t = jt('(slot:header)');
		},
		l(n) {
			t = Vt(n, '(slot:header)');
		},
		m(n, a) {
			V(n, t, a);
		},
		d(n) {
			n && x(t);
		}
	};
}
function Lt(e) {
	let t, n, a;
	const o = e[19].pageFooter,
		i = re(o, e, e[18], wt),
		r = i || bi();
	return {
		c() {
			(t = G('footer')), r && r.c(), this.h();
		},
		l(s) {
			t = K(s, 'FOOTER', { id: !0, class: !0 });
			var l = j(t);
			r && r.l(l), l.forEach(x), this.h();
		},
		h() {
			m(t, 'id', 'page-footer'), m(t, 'class', (n = 'flex-none ' + e[3]));
		},
		m(s, l) {
			V(s, t, l), r && r.m(t, null), (a = !0);
		},
		p(s, l) {
			i && i.p && (!a || l & 262144) && ae(i, o, s, s[18], a ? oe(o, s[18], l, ci) : se(s[18]), wt),
				(!a || (l & 8 && n !== (n = 'flex-none ' + s[3]))) && m(t, 'class', n);
		},
		i(s) {
			a || (O(r, s), (a = !0));
		},
		o(s) {
			H(r, s), (a = !1);
		},
		d(s) {
			s && x(t), r && r.d(s);
		}
	};
}
function bi(e) {
	let t;
	return {
		c() {
			t = jt('(slot:footer)');
		},
		l(n) {
			t = Vt(n, '(slot:footer)');
		},
		m(n, a) {
			V(n, t, a);
		},
		d(n) {
			n && x(t);
		}
	};
}
function Dt(e) {
	let t, n;
	const a = e[19].sidebarRight,
		o = re(a, e, e[18], At);
	return {
		c() {
			(t = G('aside')), o && o.c(), this.h();
		},
		l(i) {
			t = K(i, 'ASIDE', { id: !0, class: !0 });
			var r = j(t);
			o && o.l(r), r.forEach(x), this.h();
		},
		h() {
			m(t, 'id', 'sidebar-right'), m(t, 'class', e[6]);
		},
		m(i, r) {
			V(i, t, r), o && o.m(t, null), (n = !0);
		},
		p(i, r) {
			o && o.p && (!n || r & 262144) && ae(o, a, i, i[18], n ? oe(a, i[18], r, li) : se(i[18]), At),
				(!n || r & 64) && m(t, 'class', i[6]);
		},
		i(i) {
			n || (O(o, i), (n = !0));
		},
		o(i) {
			H(o, i), (n = !1);
		},
		d(i) {
			i && x(t), o && o.d(i);
		}
	};
}
function xt(e) {
	let t, n, a;
	const o = e[19].footer,
		i = re(o, e, e[18], Nt);
	return {
		c() {
			(t = G('footer')), i && i.c(), this.h();
		},
		l(r) {
			t = K(r, 'FOOTER', { id: !0, class: !0 });
			var s = j(t);
			i && i.l(s), s.forEach(x), this.h();
		},
		h() {
			m(t, 'id', 'shell-footer'), m(t, 'class', (n = 'flex-none ' + e[2]));
		},
		m(r, s) {
			V(r, t, s), i && i.m(t, null), (a = !0);
		},
		p(r, s) {
			i && i.p && (!a || s & 262144) && ae(i, o, r, r[18], a ? oe(o, r[18], s, oi) : se(r[18]), Nt),
				(!a || (s & 4 && n !== (n = 'flex-none ' + r[2]))) && m(t, 'class', n);
		},
		i(r) {
			a || (O(i, r), (a = !0));
		},
		o(r) {
			H(i, r), (a = !1);
		},
		d(r) {
			r && x(t), i && i.d(r);
		}
	};
}
function hi(e) {
	let t,
		n,
		a,
		o,
		i,
		r,
		s,
		l,
		b,
		f,
		y,
		N,
		g,
		u,
		p,
		d = e[10].header && Ot(e),
		k = e[10].sidebarLeft && It(e),
		w = e[10].pageHeader && Ct(e);
	const z = e[19].default,
		B = re(z, e, e[18], null);
	let C = e[10].pageFooter && Lt(e),
		v = e[10].sidebarRight && Dt(e),
		U = e[10].footer && xt(e);
	return {
		c() {
			(t = G('div')),
				d && d.c(),
				(n = ee()),
				(a = G('div')),
				k && k.c(),
				(o = ee()),
				(i = G('div')),
				w && w.c(),
				(r = ee()),
				(s = G('main')),
				B && B.c(),
				(b = ee()),
				C && C.c(),
				(y = ee()),
				v && v.c(),
				(N = ee()),
				U && U.c(),
				this.h();
		},
		l(E) {
			t = K(E, 'DIV', { id: !0, class: !0, 'data-testid': !0 });
			var M = j(t);
			d && d.l(M), (n = te(M)), (a = K(M, 'DIV', { class: !0 }));
			var R = j(a);
			k && k.l(R), (o = te(R)), (i = K(R, 'DIV', { id: !0, class: !0 }));
			var Y = j(i);
			w && w.l(Y), (r = te(Y)), (s = K(Y, 'MAIN', { id: !0, class: !0 }));
			var ne = j(s);
			B && B.l(ne),
				ne.forEach(x),
				(b = te(Y)),
				C && C.l(Y),
				Y.forEach(x),
				(y = te(R)),
				v && v.l(R),
				R.forEach(x),
				(N = te(M)),
				U && U.l(M),
				M.forEach(x),
				this.h();
		},
		h() {
			m(s, 'id', 'page-content'),
				m(s, 'class', (l = 'flex-auto ' + e[4])),
				m(i, 'id', 'page'),
				m(i, 'class', (f = e[1] + ' ' + Bt)),
				ct(i, 'scrollbar-gutter', e[0]),
				m(a, 'class', 'flex-auto ' + mi),
				m(t, 'id', 'appShell'),
				m(t, 'class', e[9]),
				m(t, 'data-testid', 'app-shell');
		},
		m(E, M) {
			V(E, t, M),
				d && d.m(t, null),
				W(t, n),
				W(t, a),
				k && k.m(a, null),
				W(a, o),
				W(a, i),
				w && w.m(i, null),
				W(i, r),
				W(i, s),
				B && B.m(s, null),
				W(i, b),
				C && C.m(i, null),
				W(a, y),
				v && v.m(a, null),
				W(t, N),
				U && U.m(t, null),
				(g = !0),
				u || ((p = ue(i, 'scroll', e[20])), (u = !0));
		},
		p(E, [M]) {
			E[10].header
				? d
					? (d.p(E, M), M & 1024 && O(d, 1))
					: ((d = Ot(E)), d.c(), O(d, 1), d.m(t, n))
				: d &&
					(ge(),
					H(d, 1, 1, () => {
						d = null;
					}),
					be()),
				E[10].sidebarLeft
					? k
						? (k.p(E, M), M & 1024 && O(k, 1))
						: ((k = It(E)), k.c(), O(k, 1), k.m(a, o))
					: k &&
						(ge(),
						H(k, 1, 1, () => {
							k = null;
						}),
						be()),
				E[10].pageHeader
					? w
						? (w.p(E, M), M & 1024 && O(w, 1))
						: ((w = Ct(E)), w.c(), O(w, 1), w.m(i, r))
					: w &&
						(ge(),
						H(w, 1, 1, () => {
							w = null;
						}),
						be()),
				B &&
					B.p &&
					(!g || M & 262144) &&
					ae(B, z, E, E[18], g ? oe(z, E[18], M, null) : se(E[18]), null),
				(!g || (M & 16 && l !== (l = 'flex-auto ' + E[4]))) && m(s, 'class', l),
				E[10].pageFooter
					? C
						? (C.p(E, M), M & 1024 && O(C, 1))
						: ((C = Lt(E)), C.c(), O(C, 1), C.m(i, null))
					: C &&
						(ge(),
						H(C, 1, 1, () => {
							C = null;
						}),
						be()),
				(!g || (M & 2 && f !== (f = E[1] + ' ' + Bt))) && m(i, 'class', f),
				M & 1 && ct(i, 'scrollbar-gutter', E[0]),
				E[10].sidebarRight
					? v
						? (v.p(E, M), M & 1024 && O(v, 1))
						: ((v = Dt(E)), v.c(), O(v, 1), v.m(a, null))
					: v &&
						(ge(),
						H(v, 1, 1, () => {
							v = null;
						}),
						be()),
				E[10].footer
					? U
						? (U.p(E, M), M & 1024 && O(U, 1))
						: ((U = xt(E)), U.c(), O(U, 1), U.m(t, null))
					: U &&
						(ge(),
						H(U, 1, 1, () => {
							U = null;
						}),
						be()),
				(!g || M & 512) && m(t, 'class', E[9]);
		},
		i(E) {
			g || (O(d), O(k), O(w), O(B, E), O(C), O(v), O(U), (g = !0));
		},
		o(E) {
			H(d), H(k), H(w), H(B, E), H(C), H(v), H(U), (g = !1);
		},
		d(E) {
			E && x(t),
				d && d.d(),
				k && k.d(),
				w && w.d(),
				B && B.d(E),
				C && C.d(),
				v && v.d(),
				U && U.d(),
				(u = !1),
				p();
		}
	};
}
const _i = 'w-full h-full flex flex-col overflow-hidden',
	mi = 'w-full h-full flex overflow-hidden',
	Bt = 'flex-1 overflow-x-hidden flex flex-col',
	pi = 'flex-none overflow-x-hidden overflow-y-auto',
	Ei = 'flex-none overflow-x-hidden overflow-y-auto';
function yi(e, t, n) {
	let a,
		o,
		i,
		r,
		s,
		l,
		b,
		f,
		{ $$slots: y = {}, $$scope: N } = t;
	const g = Xt(y);
	let { scrollbarGutter: u = 'auto' } = t,
		{ regionPage: p = '' } = t,
		{ slotHeader: d = 'z-10' } = t,
		{ slotSidebarLeft: k = 'w-auto' } = t,
		{ slotSidebarRight: w = 'w-auto' } = t,
		{ slotPageHeader: z = '' } = t,
		{ slotPageContent: B = '' } = t,
		{ slotPageFooter: C = '' } = t,
		{ slotFooter: v = '' } = t;
	function U(E) {
		Pe.call(this, e, E);
	}
	return (
		(e.$$set = (E) => {
			n(21, (t = Ne(Ne({}, t), Ae(E)))),
				'scrollbarGutter' in E && n(0, (u = E.scrollbarGutter)),
				'regionPage' in E && n(1, (p = E.regionPage)),
				'slotHeader' in E && n(11, (d = E.slotHeader)),
				'slotSidebarLeft' in E && n(12, (k = E.slotSidebarLeft)),
				'slotSidebarRight' in E && n(13, (w = E.slotSidebarRight)),
				'slotPageHeader' in E && n(14, (z = E.slotPageHeader)),
				'slotPageContent' in E && n(15, (B = E.slotPageContent)),
				'slotPageFooter' in E && n(16, (C = E.slotPageFooter)),
				'slotFooter' in E && n(17, (v = E.slotFooter)),
				'$$scope' in E && n(18, (N = E.$$scope));
		}),
		(e.$$.update = () => {
			n(9, (a = `${_i} ${t.class ?? ''}`)),
				e.$$.dirty & 2048 && n(8, (o = `${d}`)),
				e.$$.dirty & 4096 && n(7, (i = `${pi} ${k}`)),
				e.$$.dirty & 8192 && n(6, (r = `${Ei} ${w}`)),
				e.$$.dirty & 16384 && n(5, (s = `${z}`)),
				e.$$.dirty & 32768 && n(4, (l = `${B}`)),
				e.$$.dirty & 65536 && n(3, (b = `${C}`)),
				e.$$.dirty & 131072 && n(2, (f = `${v}`));
		}),
		(t = Ae(t)),
		[u, p, f, b, l, s, r, i, o, a, g, d, k, w, z, B, C, v, N, y, U]
	);
}
class Si extends We {
	constructor(t) {
		super(),
			Xe(this, t, yi, hi, Ze, {
				scrollbarGutter: 0,
				regionPage: 1,
				slotHeader: 11,
				slotSidebarLeft: 12,
				slotSidebarRight: 13,
				slotPageHeader: 14,
				slotPageContent: 15,
				slotPageFooter: 16,
				slotFooter: 17
			});
	}
}
const { window: ki } = Ln;
function Pt(e) {
	let t, n, a, o, i, r, s, l, b, f, y;
	const N = e[32].default,
		g = re(N, e, e[31], null);
	return {
		c() {
			(t = G('div')), (n = G('div')), g && g.c(), this.h();
		},
		l(u) {
			t = K(u, 'DIV', { class: !0, 'data-testid': !0 });
			var p = j(t);
			n = K(p, 'DIV', {
				class: !0,
				'data-testid': !0,
				role: !0,
				'aria-modal': !0,
				'aria-labelledby': !0,
				'aria-describedby': !0
			});
			var d = j(n);
			g && g.l(d), d.forEach(x), p.forEach(x), this.h();
		},
		h() {
			m(n, 'class', (a = 'drawer ' + e[8])),
				m(n, 'data-testid', 'drawer'),
				m(n, 'role', 'dialog'),
				m(n, 'aria-modal', 'true'),
				m(n, 'aria-labelledby', e[0]),
				m(n, 'aria-describedby', e[1]),
				m(t, 'class', (r = 'drawer-backdrop ' + e[9])),
				m(t, 'data-testid', 'drawer-backdrop');
		},
		m(u, p) {
			V(u, t, p),
				W(t, n),
				g && g.m(n, null),
				e[36](n),
				e[37](t),
				(b = !0),
				f ||
					((y = [
						ue(t, 'mousedown', e[12]),
						ue(t, 'touchstart', e[33], { passive: !0 }),
						ue(t, 'touchend', e[34], { passive: !0 }),
						ue(t, 'keypress', e[35]),
						vn(Xn.call(null, t, !0))
					]),
					(f = !0));
		},
		p(u, p) {
			(e = u),
				g &&
					g.p &&
					(!b || p[1] & 1) &&
					ae(g, N, e, e[31], b ? oe(N, e[31], p, null) : se(e[31]), null),
				(!b || (p[0] & 256 && a !== (a = 'drawer ' + e[8]))) && m(n, 'class', a),
				(!b || p[0] & 1) && m(n, 'aria-labelledby', e[0]),
				(!b || p[0] & 2) && m(n, 'aria-describedby', e[1]),
				(!b || (p[0] & 512 && r !== (r = 'drawer-backdrop ' + e[9]))) && m(t, 'class', r);
		},
		i(u) {
			b ||
				(O(g, u),
				u &&
					ft(() => {
						b &&
							(i && i.end(1),
							(o = bt(n, xe, {
								transition: mt,
								params: { x: e[7].x, y: e[7].y, duration: e[2], opacity: e[3] ? void 0 : 1 },
								enabled: e[4]
							})),
							o.start());
					}),
				u &&
					ft(() => {
						b &&
							(l && l.end(1),
							(s = bt(t, xe, {
								transition: _t,
								params: { duration: e[2] },
								enabled: e[4] && e[3]
							})),
							s.start());
					}),
				(b = !0));
		},
		o(u) {
			H(g, u),
				o && o.invalidate(),
				u &&
					(i = ht(n, xe, {
						transition: mt,
						params: {
							x: e[7].x,
							y: e[7].y,
							duration: e[2],
							opacity: e[3] ? void 0 : 1,
							easing: jn
						},
						enabled: e[4]
					})),
				s && s.invalidate(),
				u && (l = ht(t, xe, { transition: _t, params: { duration: e[2] }, enabled: e[4] && e[3] })),
				(b = !1);
		},
		d(u) {
			u && x(t),
				g && g.d(u),
				e[36](null),
				u && i && i.end(),
				e[37](null),
				u && l && l.end(),
				(f = !1),
				Yt(y);
		}
	};
}
function Ti(e) {
	let t,
		n,
		a,
		o,
		i = e[10].open === !0 && Pt(e);
	return {
		c() {
			i && i.c(), (t = ut());
		},
		l(r) {
			i && i.l(r), (t = ut());
		},
		m(r, s) {
			i && i.m(r, s), V(r, t, s), (n = !0), a || ((o = ue(ki, 'keydown', e[13])), (a = !0));
		},
		p(r, s) {
			r[10].open === !0
				? i
					? (i.p(r, s), s[0] & 1024 && O(i, 1))
					: ((i = Pt(r)), i.c(), O(i, 1), i.m(t.parentNode, t))
				: i &&
					(ge(),
					H(i, 1, 1, () => {
						i = null;
					}),
					be());
		},
		i(r) {
			n || (O(i), (n = !0));
		},
		o(r) {
			H(i), (n = !1);
		},
		d(r) {
			r && x(t), i && i.d(r), (a = !1), o();
		}
	};
}
const Ni = 'fixed top-0 left-0 right-0 bottom-0 flex',
	Ai = 'overflow-y-auto transition-transform';
function wi(e, t, n) {
	let a, o, i, r, s, l, b, f;
	dt(e, Cn, (h) => n(38, (f = h)));
	let { $$slots: y = {}, $$scope: N } = t;
	const g = Mn();
	let { position: u = 'left' } = t,
		{ bgDrawer: p = 'bg-surface-100-800-token' } = t,
		{ border: d = '' } = t,
		{ rounded: k = '' } = t,
		{ shadow: w = 'shadow-xl' } = t,
		{ width: z = '' } = t,
		{ height: B = '' } = t,
		{ bgBackdrop: C = 'bg-surface-backdrop-token' } = t,
		{ blur: v = '' } = t,
		{ padding: U = '' } = t,
		{ zIndex: E = 'z-40' } = t,
		{ regionBackdrop: M = '' } = t,
		{ regionDrawer: R = '' } = t,
		{ labelledby: Y = '' } = t,
		{ describedby: ne = '' } = t,
		{ duration: de = 200 } = t,
		{ transitions: _e = !f } = t,
		{ opacityTransition: ie = !0 } = t;
	const le = {
		top: {
			alignment: 'items-start',
			width: 'w-full',
			height: 'h-[50%]',
			rounded: 'rounded-bl-container-token rounded-br-container-token'
		},
		bottom: {
			alignment: 'items-end',
			width: 'w-full',
			height: ' h-[50%]',
			rounded: 'rounded-tl-container-token rounded-tr-container-token'
		},
		left: {
			alignment: 'justify-start',
			width: 'w-[90%]',
			height: 'h-full',
			rounded: 'rounded-tr-container-token rounded-br-container-token'
		},
		right: {
			alignment: 'justify-end',
			width: 'w-[90%]',
			height: 'h-full',
			rounded: 'rounded-tl-container-token rounded-bl-container-token'
		}
	};
	let c,
		_,
		A = { x: 0, y: 0 };
	const L = Jt();
	dt(e, L, (h) => n(10, (b = h)));
	const I = {
		position: u,
		bgBackdrop: C,
		blur: v,
		padding: U,
		bgDrawer: p,
		border: d,
		rounded: k,
		shadow: w,
		width: z,
		height: B,
		opacityTransition: ie,
		regionBackdrop: M,
		regionDrawer: R,
		labelledby: Y,
		describedby: ne,
		duration: de
	};
	function X(h) {
		n(14, (u = h.position || I.position)),
			n(21, (C = h.bgBackdrop || I.bgBackdrop)),
			n(22, (v = h.blur || I.blur)),
			n(23, (U = h.padding || I.padding)),
			n(15, (p = h.bgDrawer || I.bgDrawer)),
			n(16, (d = h.border || I.border)),
			n(17, (k = h.rounded || I.rounded)),
			n(18, (w = h.shadow || I.shadow)),
			n(19, (z = h.width || I.width)),
			n(20, (B = h.height || I.height)),
			n(24, (M = h.regionBackdrop || I.regionBackdrop)),
			n(25, (R = h.regionDrawer || I.regionDrawer)),
			n(0, (Y = h.labelledby || I.labelledby)),
			n(1, (ne = h.describedby || I.describedby)),
			n(3, (ie = h.opacityTransition || I.opacityTransition)),
			n(2, (de = h.duration || I.duration));
	}
	function J() {
		switch (u) {
			case 'top':
				n(7, (A = { x: 0, y: -window.innerWidth }));
				break;
			case 'bottom':
				n(7, (A = { x: 0, y: window.innerWidth }));
				break;
			case 'left':
				n(7, (A = { x: -window.innerHeight, y: 0 }));
				break;
			case 'right':
				n(7, (A = { x: window.innerHeight, y: 0 }));
				break;
			default:
				console.error('Error: unknown position property value.');
				break;
		}
	}
	function Se(h) {
		h.target === c ? (L.close(), g('backdrop', h)) : g('drawer', h);
	}
	function $(h) {
		b && h.code === 'Escape' && L.close();
	}
	L.subscribe((h) => {
		h.open === !0 && (X(h), J());
	});
	function ce(h) {
		Pe.call(this, e, h);
	}
	function Oe(h) {
		Pe.call(this, e, h);
	}
	function Ie(h) {
		Pe.call(this, e, h);
	}
	function Ce(h) {
		gt[h ? 'unshift' : 'push'](() => {
			(_ = h), n(6, _);
		});
	}
	function Ve(h) {
		gt[h ? 'unshift' : 'push'](() => {
			(c = h), n(5, c);
		});
	}
	return (
		(e.$$set = (h) => {
			n(44, (t = Ne(Ne({}, t), Ae(h)))),
				'position' in h && n(14, (u = h.position)),
				'bgDrawer' in h && n(15, (p = h.bgDrawer)),
				'border' in h && n(16, (d = h.border)),
				'rounded' in h && n(17, (k = h.rounded)),
				'shadow' in h && n(18, (w = h.shadow)),
				'width' in h && n(19, (z = h.width)),
				'height' in h && n(20, (B = h.height)),
				'bgBackdrop' in h && n(21, (C = h.bgBackdrop)),
				'blur' in h && n(22, (v = h.blur)),
				'padding' in h && n(23, (U = h.padding)),
				'zIndex' in h && n(26, (E = h.zIndex)),
				'regionBackdrop' in h && n(24, (M = h.regionBackdrop)),
				'regionDrawer' in h && n(25, (R = h.regionDrawer)),
				'labelledby' in h && n(0, (Y = h.labelledby)),
				'describedby' in h && n(1, (ne = h.describedby)),
				'duration' in h && n(2, (de = h.duration)),
				'transitions' in h && n(4, (_e = h.transitions)),
				'opacityTransition' in h && n(3, (ie = h.opacityTransition)),
				'$$scope' in h && n(31, (N = h.$$scope));
		}),
		(e.$$.update = () => {
			e.$$.dirty[0] & 16384 && n(30, (a = le[u].alignment)),
				e.$$.dirty[0] & 540672 && n(29, (o = z || le[u].width)),
				e.$$.dirty[0] & 1064960 && n(28, (i = B || le[u].height)),
				e.$$.dirty[0] & 147456 && n(27, (r = k || le[u].rounded)),
				n(9, (s = `${Ni} ${C} ${U} ${v} ${a} ${M} ${E} ${t.class ?? ''}`)),
				e.$$.dirty[0] & 973570048 && n(8, (l = `${Ai} ${p} ${d} ${k} ${w} ${o} ${i} ${r} ${R}`));
		}),
		(t = Ae(t)),
		[
			Y,
			ne,
			de,
			ie,
			_e,
			c,
			_,
			A,
			l,
			s,
			b,
			L,
			Se,
			$,
			u,
			p,
			d,
			k,
			w,
			z,
			B,
			C,
			v,
			U,
			M,
			R,
			E,
			r,
			i,
			o,
			a,
			N,
			y,
			ce,
			Oe,
			Ie,
			Ce,
			Ve
		]
	);
}
class Ri extends We {
	constructor(t) {
		super(),
			Xe(
				this,
				t,
				wi,
				Ti,
				Ze,
				{
					position: 14,
					bgDrawer: 15,
					border: 16,
					rounded: 17,
					shadow: 18,
					width: 19,
					height: 20,
					bgBackdrop: 21,
					blur: 22,
					padding: 23,
					zIndex: 26,
					regionBackdrop: 24,
					regionDrawer: 25,
					labelledby: 0,
					describedby: 1,
					duration: 2,
					transitions: 4,
					opacityTransition: 3
				},
				null,
				[-1, -1]
			);
	}
}
function Mi(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function Qt(e) {
	return (
		e instanceof Map
			? (e.clear =
					e.delete =
					e.set =
						function () {
							throw new Error('map is read-only');
						})
			: e instanceof Set &&
				(e.add =
					e.clear =
					e.delete =
						function () {
							throw new Error('set is read-only');
						}),
		Object.freeze(e),
		Object.getOwnPropertyNames(e).forEach((t) => {
			const n = e[t],
				a = typeof n;
			(a === 'object' || a === 'function') && !Object.isFrozen(n) && Qt(n);
		}),
		e
	);
}
class Ut {
	constructor(t) {
		t.data === void 0 && (t.data = {}), (this.data = t.data), (this.isMatchIgnored = !1);
	}
	ignoreMatch() {
		this.isMatchIgnored = !0;
	}
}
function $t(e) {
	return e
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;');
}
function me(e, ...t) {
	const n = Object.create(null);
	for (const a in e) n[a] = e[a];
	return (
		t.forEach(function (a) {
			for (const o in a) n[o] = a[o];
		}),
		n
	);
}
const vi = '</span>',
	Ht = (e) => !!e.scope,
	Oi = (e, { prefix: t }) => {
		if (e.startsWith('language:')) return e.replace('language:', 'language-');
		if (e.includes('.')) {
			const n = e.split('.');
			return [`${t}${n.shift()}`, ...n.map((a, o) => `${a}${'_'.repeat(o + 1)}`)].join(' ');
		}
		return `${t}${e}`;
	};
class Ii {
	constructor(t, n) {
		(this.buffer = ''), (this.classPrefix = n.classPrefix), t.walk(this);
	}
	addText(t) {
		this.buffer += $t(t);
	}
	openNode(t) {
		if (!Ht(t)) return;
		const n = Oi(t.scope, { prefix: this.classPrefix });
		this.span(n);
	}
	closeNode(t) {
		Ht(t) && (this.buffer += vi);
	}
	value() {
		return this.buffer;
	}
	span(t) {
		this.buffer += `<span class="${t}">`;
	}
}
const zt = (e = {}) => {
	const t = { children: [] };
	return Object.assign(t, e), t;
};
class nt {
	constructor() {
		(this.rootNode = zt()), (this.stack = [this.rootNode]);
	}
	get top() {
		return this.stack[this.stack.length - 1];
	}
	get root() {
		return this.rootNode;
	}
	add(t) {
		this.top.children.push(t);
	}
	openNode(t) {
		const n = zt({ scope: t });
		this.add(n), this.stack.push(n);
	}
	closeNode() {
		if (this.stack.length > 1) return this.stack.pop();
	}
	closeAllNodes() {
		for (; this.closeNode(); );
	}
	toJSON() {
		return JSON.stringify(this.rootNode, null, 4);
	}
	walk(t) {
		return this.constructor._walk(t, this.rootNode);
	}
	static _walk(t, n) {
		return (
			typeof n == 'string'
				? t.addText(n)
				: n.children &&
					(t.openNode(n), n.children.forEach((a) => this._walk(t, a)), t.closeNode(n)),
			t
		);
	}
	static _collapse(t) {
		typeof t != 'string' &&
			t.children &&
			(t.children.every((n) => typeof n == 'string')
				? (t.children = [t.children.join('')])
				: t.children.forEach((n) => {
						nt._collapse(n);
					}));
	}
}
class Ci extends nt {
	constructor(t) {
		super(), (this.options = t);
	}
	addText(t) {
		t !== '' && this.add(t);
	}
	startScope(t) {
		this.openNode(t);
	}
	endScope() {
		this.closeNode();
	}
	__addSublanguage(t, n) {
		const a = t.root;
		n && (a.scope = `language:${n}`), this.add(a);
	}
	toHTML() {
		return new Ii(this, this.options).value();
	}
	finalize() {
		return this.closeAllNodes(), !0;
	}
}
function Me(e) {
	return e ? (typeof e == 'string' ? e : e.source) : null;
}
function en(e) {
	return ye('(?=', e, ')');
}
function Li(e) {
	return ye('(?:', e, ')*');
}
function Di(e) {
	return ye('(?:', e, ')?');
}
function ye(...e) {
	return e.map((n) => Me(n)).join('');
}
function xi(e) {
	const t = e[e.length - 1];
	return typeof t == 'object' && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function it(...e) {
	return '(' + (xi(e).capture ? '' : '?:') + e.map((a) => Me(a)).join('|') + ')';
}
function tn(e) {
	return new RegExp(e.toString() + '|').exec('').length - 1;
}
function Bi(e, t) {
	const n = e && e.exec(t);
	return n && n.index === 0;
}
const Pi = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function rt(e, { joinWith: t }) {
	let n = 0;
	return e
		.map((a) => {
			n += 1;
			const o = n;
			let i = Me(a),
				r = '';
			for (; i.length > 0; ) {
				const s = Pi.exec(i);
				if (!s) {
					r += i;
					break;
				}
				(r += i.substring(0, s.index)),
					(i = i.substring(s.index + s[0].length)),
					s[0][0] === '\\' && s[1]
						? (r += '\\' + String(Number(s[1]) + o))
						: ((r += s[0]), s[0] === '(' && n++);
			}
			return r;
		})
		.map((a) => `(${a})`)
		.join(t);
}
const Ui = /\b\B/,
	nn = '[a-zA-Z]\\w*',
	at = '[a-zA-Z_]\\w*',
	rn = '\\b\\d+(\\.\\d+)?',
	an = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
	sn = '\\b(0b[01]+)',
	Hi =
		'!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
	zi = (e = {}) => {
		const t = /^#![ ]*\//;
		return (
			e.binary && (e.begin = ye(t, /.*\b/, e.binary, /\b.*/)),
			me(
				{
					scope: 'meta',
					begin: t,
					end: /$/,
					relevance: 0,
					'on:begin': (n, a) => {
						n.index !== 0 && a.ignoreMatch();
					}
				},
				e
			)
		);
	},
	ve = { begin: '\\\\[\\s\\S]', relevance: 0 },
	Fi = { scope: 'string', begin: "'", end: "'", illegal: '\\n', contains: [ve] },
	Gi = { scope: 'string', begin: '"', end: '"', illegal: '\\n', contains: [ve] },
	Ki = {
		begin:
			/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
	},
	je = function (e, t, n = {}) {
		const a = me({ scope: 'comment', begin: e, end: t, contains: [] }, n);
		a.contains.push({
			scope: 'doctag',
			begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0
		});
		const o = it(
			'I',
			'a',
			'is',
			'so',
			'us',
			'to',
			'at',
			'if',
			'in',
			'it',
			'on',
			/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
			/[A-Za-z]+[-][a-z]+/,
			/[A-Za-z][a-z]{2,}/
		);
		return a.contains.push({ begin: ye(/[ ]+/, '(', o, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), a;
	},
	Zi = je('//', '$'),
	Wi = je('/\\*', '\\*/'),
	Xi = je('#', '$'),
	ji = { scope: 'number', begin: rn, relevance: 0 },
	Vi = { scope: 'number', begin: an, relevance: 0 },
	Yi = { scope: 'number', begin: sn, relevance: 0 },
	qi = {
		scope: 'regexp',
		begin: /\/(?=[^/\n]*\/)/,
		end: /\/[gimuy]*/,
		contains: [ve, { begin: /\[/, end: /\]/, relevance: 0, contains: [ve] }]
	},
	Ji = { scope: 'title', begin: nn, relevance: 0 },
	Qi = { scope: 'title', begin: at, relevance: 0 },
	$i = { begin: '\\.\\s*' + at, relevance: 0 },
	er = function (e) {
		return Object.assign(e, {
			'on:begin': (t, n) => {
				n.data._beginMatch = t[1];
			},
			'on:end': (t, n) => {
				n.data._beginMatch !== t[1] && n.ignoreMatch();
			}
		});
	};
var Be = Object.freeze({
	__proto__: null,
	APOS_STRING_MODE: Fi,
	BACKSLASH_ESCAPE: ve,
	BINARY_NUMBER_MODE: Yi,
	BINARY_NUMBER_RE: sn,
	COMMENT: je,
	C_BLOCK_COMMENT_MODE: Wi,
	C_LINE_COMMENT_MODE: Zi,
	C_NUMBER_MODE: Vi,
	C_NUMBER_RE: an,
	END_SAME_AS_BEGIN: er,
	HASH_COMMENT_MODE: Xi,
	IDENT_RE: nn,
	MATCH_NOTHING_RE: Ui,
	METHOD_GUARD: $i,
	NUMBER_MODE: ji,
	NUMBER_RE: rn,
	PHRASAL_WORDS_MODE: Ki,
	QUOTE_STRING_MODE: Gi,
	REGEXP_MODE: qi,
	RE_STARTERS_RE: Hi,
	SHEBANG: zi,
	TITLE_MODE: Ji,
	UNDERSCORE_IDENT_RE: at,
	UNDERSCORE_TITLE_MODE: Qi
});
function tr(e, t) {
	e.input[e.index - 1] === '.' && t.ignoreMatch();
}
function nr(e, t) {
	e.className !== void 0 && ((e.scope = e.className), delete e.className);
}
function ir(e, t) {
	t &&
		e.beginKeywords &&
		((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
		(e.__beforeBegin = tr),
		(e.keywords = e.keywords || e.beginKeywords),
		delete e.beginKeywords,
		e.relevance === void 0 && (e.relevance = 0));
}
function rr(e, t) {
	Array.isArray(e.illegal) && (e.illegal = it(...e.illegal));
}
function ar(e, t) {
	if (e.match) {
		if (e.begin || e.end) throw new Error('begin & end are not supported with match');
		(e.begin = e.match), delete e.match;
	}
}
function sr(e, t) {
	e.relevance === void 0 && (e.relevance = 1);
}
const or = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw new Error('beforeMatch cannot be used with starts');
		const n = Object.assign({}, e);
		Object.keys(e).forEach((a) => {
			delete e[a];
		}),
			(e.keywords = n.keywords),
			(e.begin = ye(n.beforeMatch, en(n.begin))),
			(e.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }),
			(e.relevance = 0),
			delete n.beforeMatch;
	},
	lr = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
	cr = 'keyword';
function on(e, t, n = cr) {
	const a = Object.create(null);
	return (
		typeof e == 'string'
			? o(n, e.split(' '))
			: Array.isArray(e)
				? o(n, e)
				: Object.keys(e).forEach(function (i) {
						Object.assign(a, on(e[i], t, i));
					}),
		a
	);
	function o(i, r) {
		t && (r = r.map((s) => s.toLowerCase())),
			r.forEach(function (s) {
				const l = s.split('|');
				a[l[0]] = [i, ur(l[0], l[1])];
			});
	}
}
function ur(e, t) {
	return t ? Number(t) : dr(e) ? 0 : 1;
}
function dr(e) {
	return lr.includes(e.toLowerCase());
}
const Ft = {},
	Ee = (e) => {
		console.error(e);
	},
	Gt = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	},
	ke = (e, t) => {
		Ft[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), (Ft[`${e}/${t}`] = !0));
	},
	Ge = new Error();
function ln(e, t, { key: n }) {
	let a = 0;
	const o = e[n],
		i = {},
		r = {};
	for (let s = 1; s <= t.length; s++) (r[s + a] = o[s]), (i[s + a] = !0), (a += tn(t[s - 1]));
	(e[n] = r), (e[n]._emit = i), (e[n]._multi = !0);
}
function fr(e) {
	if (Array.isArray(e.begin)) {
		if (e.skip || e.excludeBegin || e.returnBegin)
			throw (Ee('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), Ge);
		if (typeof e.beginScope != 'object' || e.beginScope === null)
			throw (Ee('beginScope must be object'), Ge);
		ln(e, e.begin, { key: 'beginScope' }), (e.begin = rt(e.begin, { joinWith: '' }));
	}
}
function gr(e) {
	if (Array.isArray(e.end)) {
		if (e.skip || e.excludeEnd || e.returnEnd)
			throw (Ee('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Ge);
		if (typeof e.endScope != 'object' || e.endScope === null)
			throw (Ee('endScope must be object'), Ge);
		ln(e, e.end, { key: 'endScope' }), (e.end = rt(e.end, { joinWith: '' }));
	}
}
function br(e) {
	e.scope &&
		typeof e.scope == 'object' &&
		e.scope !== null &&
		((e.beginScope = e.scope), delete e.scope);
}
function hr(e) {
	br(e),
		typeof e.beginScope == 'string' && (e.beginScope = { _wrap: e.beginScope }),
		typeof e.endScope == 'string' && (e.endScope = { _wrap: e.endScope }),
		fr(e),
		gr(e);
}
function _r(e) {
	function t(r, s) {
		return new RegExp(
			Me(r),
			'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (s ? 'g' : '')
		);
	}
	class n {
		constructor() {
			(this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
		}
		addRule(s, l) {
			(l.position = this.position++),
				(this.matchIndexes[this.matchAt] = l),
				this.regexes.push([l, s]),
				(this.matchAt += tn(s) + 1);
		}
		compile() {
			this.regexes.length === 0 && (this.exec = () => null);
			const s = this.regexes.map((l) => l[1]);
			(this.matcherRe = t(rt(s, { joinWith: '|' }), !0)), (this.lastIndex = 0);
		}
		exec(s) {
			this.matcherRe.lastIndex = this.lastIndex;
			const l = this.matcherRe.exec(s);
			if (!l) return null;
			const b = l.findIndex((y, N) => N > 0 && y !== void 0),
				f = this.matchIndexes[b];
			return l.splice(0, b), Object.assign(l, f);
		}
	}
	class a {
		constructor() {
			(this.rules = []),
				(this.multiRegexes = []),
				(this.count = 0),
				(this.lastIndex = 0),
				(this.regexIndex = 0);
		}
		getMatcher(s) {
			if (this.multiRegexes[s]) return this.multiRegexes[s];
			const l = new n();
			return (
				this.rules.slice(s).forEach(([b, f]) => l.addRule(b, f)),
				l.compile(),
				(this.multiRegexes[s] = l),
				l
			);
		}
		resumingScanAtSamePosition() {
			return this.regexIndex !== 0;
		}
		considerAll() {
			this.regexIndex = 0;
		}
		addRule(s, l) {
			this.rules.push([s, l]), l.type === 'begin' && this.count++;
		}
		exec(s) {
			const l = this.getMatcher(this.regexIndex);
			l.lastIndex = this.lastIndex;
			let b = l.exec(s);
			if (this.resumingScanAtSamePosition() && !(b && b.index === this.lastIndex)) {
				const f = this.getMatcher(0);
				(f.lastIndex = this.lastIndex + 1), (b = f.exec(s));
			}
			return (
				b &&
					((this.regexIndex += b.position + 1),
					this.regexIndex === this.count && this.considerAll()),
				b
			);
		}
	}
	function o(r) {
		const s = new a();
		return (
			r.contains.forEach((l) => s.addRule(l.begin, { rule: l, type: 'begin' })),
			r.terminatorEnd && s.addRule(r.terminatorEnd, { type: 'end' }),
			r.illegal && s.addRule(r.illegal, { type: 'illegal' }),
			s
		);
	}
	function i(r, s) {
		const l = r;
		if (r.isCompiled) return l;
		[nr, ar, hr, or].forEach((f) => f(r, s)),
			e.compilerExtensions.forEach((f) => f(r, s)),
			(r.__beforeBegin = null),
			[ir, rr, sr].forEach((f) => f(r, s)),
			(r.isCompiled = !0);
		let b = null;
		return (
			typeof r.keywords == 'object' &&
				r.keywords.$pattern &&
				((r.keywords = Object.assign({}, r.keywords)),
				(b = r.keywords.$pattern),
				delete r.keywords.$pattern),
			(b = b || /\w+/),
			r.keywords && (r.keywords = on(r.keywords, e.case_insensitive)),
			(l.keywordPatternRe = t(b, !0)),
			s &&
				(r.begin || (r.begin = /\B|\b/),
				(l.beginRe = t(l.begin)),
				!r.end && !r.endsWithParent && (r.end = /\B|\b/),
				r.end && (l.endRe = t(l.end)),
				(l.terminatorEnd = Me(l.end) || ''),
				r.endsWithParent &&
					s.terminatorEnd &&
					(l.terminatorEnd += (r.end ? '|' : '') + s.terminatorEnd)),
			r.illegal && (l.illegalRe = t(r.illegal)),
			r.contains || (r.contains = []),
			(r.contains = [].concat(
				...r.contains.map(function (f) {
					return mr(f === 'self' ? r : f);
				})
			)),
			r.contains.forEach(function (f) {
				i(f, l);
			}),
			r.starts && i(r.starts, s),
			(l.matcher = o(l)),
			l
		);
	}
	if (
		(e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self'))
	)
		throw new Error(
			'ERR: contains `self` is not supported at the top-level of a language.  See documentation.'
		);
	return (e.classNameAliases = me(e.classNameAliases || {})), i(e);
}
function cn(e) {
	return e ? e.endsWithParent || cn(e.starts) : !1;
}
function mr(e) {
	return (
		e.variants &&
			!e.cachedVariants &&
			(e.cachedVariants = e.variants.map(function (t) {
				return me(e, { variants: null }, t);
			})),
		e.cachedVariants
			? e.cachedVariants
			: cn(e)
				? me(e, { starts: e.starts ? me(e.starts) : null })
				: Object.isFrozen(e)
					? me(e)
					: e
	);
}
var pr = '11.9.0';
class Er extends Error {
	constructor(t, n) {
		super(t), (this.name = 'HTMLInjectionError'), (this.html = n);
	}
}
const Qe = $t,
	Kt = me,
	Zt = Symbol('nomatch'),
	yr = 7,
	un = function (e) {
		const t = Object.create(null),
			n = Object.create(null),
			a = [];
		let o = !0;
		const i = "Could not find the language '{}', did you forget to load/include a language module?",
			r = { disableAutodetect: !0, name: 'Plain text', contains: [] };
		let s = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: 'hljs-',
			cssSelector: 'pre code',
			languages: null,
			__emitter: Ci
		};
		function l(c) {
			return s.noHighlightRe.test(c);
		}
		function b(c) {
			let _ = c.className + ' ';
			_ += c.parentNode ? c.parentNode.className : '';
			const A = s.languageDetectRe.exec(_);
			if (A) {
				const L = M(A[1]);
				return (
					L ||
						(Gt(i.replace('{}', A[1])), Gt('Falling back to no-highlight mode for this block.', c)),
					L ? A[1] : 'no-highlight'
				);
			}
			return _.split(/\s+/).find((L) => l(L) || M(L));
		}
		function f(c, _, A) {
			let L = '',
				I = '';
			typeof _ == 'object'
				? ((L = c), (A = _.ignoreIllegals), (I = _.language))
				: (ke('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
					ke(
						'10.7.0',
						`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
					),
					(I = c),
					(L = _)),
				A === void 0 && (A = !0);
			const X = { code: L, language: I };
			ie('before:highlight', X);
			const J = X.result ? X.result : y(X.language, X.code, A);
			return (J.code = X.code), ie('after:highlight', J), J;
		}
		function y(c, _, A, L) {
			const I = Object.create(null);
			function X(S, T) {
				return S.keywords[T];
			}
			function J() {
				if (!D.keywords) {
					q.addText(Z);
					return;
				}
				let S = 0;
				D.keywordPatternRe.lastIndex = 0;
				let T = D.keywordPatternRe.exec(Z),
					P = '';
				for (; T; ) {
					P += Z.substring(S, T.index);
					const F = fe.case_insensitive ? T[0].toLowerCase() : T[0],
						Q = X(D, F);
					if (Q) {
						const [he, Nn] = Q;
						if (
							(q.addText(P),
							(P = ''),
							(I[F] = (I[F] || 0) + 1),
							I[F] <= yr && (De += Nn),
							he.startsWith('_'))
						)
							P += T[0];
						else {
							const An = fe.classNameAliases[he] || he;
							ce(T[0], An);
						}
					} else P += T[0];
					(S = D.keywordPatternRe.lastIndex), (T = D.keywordPatternRe.exec(Z));
				}
				(P += Z.substring(S)), q.addText(P);
			}
			function Se() {
				if (Z === '') return;
				let S = null;
				if (typeof D.subLanguage == 'string') {
					if (!t[D.subLanguage]) {
						q.addText(Z);
						return;
					}
					(S = y(D.subLanguage, Z, !0, ot[D.subLanguage])), (ot[D.subLanguage] = S._top);
				} else S = g(Z, D.subLanguage.length ? D.subLanguage : null);
				D.relevance > 0 && (De += S.relevance), q.__addSublanguage(S._emitter, S.language);
			}
			function $() {
				D.subLanguage != null ? Se() : J(), (Z = '');
			}
			function ce(S, T) {
				S !== '' && (q.startScope(T), q.addText(S), q.endScope());
			}
			function Oe(S, T) {
				let P = 1;
				const F = T.length - 1;
				for (; P <= F; ) {
					if (!S._emit[P]) {
						P++;
						continue;
					}
					const Q = fe.classNameAliases[S[P]] || S[P],
						he = T[P];
					Q ? ce(he, Q) : ((Z = he), J(), (Z = '')), P++;
				}
			}
			function Ie(S, T) {
				return (
					S.scope &&
						typeof S.scope == 'string' &&
						q.openNode(fe.classNameAliases[S.scope] || S.scope),
					S.beginScope &&
						(S.beginScope._wrap
							? (ce(Z, fe.classNameAliases[S.beginScope._wrap] || S.beginScope._wrap), (Z = ''))
							: S.beginScope._multi && (Oe(S.beginScope, T), (Z = ''))),
					(D = Object.create(S, { parent: { value: D } })),
					D
				);
			}
			function Ce(S, T, P) {
				let F = Bi(S.endRe, P);
				if (F) {
					if (S['on:end']) {
						const Q = new Ut(S);
						S['on:end'](T, Q), Q.isMatchIgnored && (F = !1);
					}
					if (F) {
						for (; S.endsParent && S.parent; ) S = S.parent;
						return S;
					}
				}
				if (S.endsWithParent) return Ce(S.parent, T, P);
			}
			function Ve(S) {
				return D.matcher.regexIndex === 0 ? ((Z += S[0]), 1) : ((Je = !0), 0);
			}
			function h(S) {
				const T = S[0],
					P = S.rule,
					F = new Ut(P),
					Q = [P.__beforeBegin, P['on:begin']];
				for (const he of Q) if (he && (he(S, F), F.isMatchIgnored)) return Ve(T);
				return (
					P.skip
						? (Z += T)
						: (P.excludeBegin && (Z += T), $(), !P.returnBegin && !P.excludeBegin && (Z = T)),
					Ie(P, S),
					P.returnBegin ? 0 : T.length
				);
			}
			function Sn(S) {
				const T = S[0],
					P = _.substring(S.index),
					F = Ce(D, S, P);
				if (!F) return Zt;
				const Q = D;
				D.endScope && D.endScope._wrap
					? ($(), ce(T, D.endScope._wrap))
					: D.endScope && D.endScope._multi
						? ($(), Oe(D.endScope, S))
						: Q.skip
							? (Z += T)
							: (Q.returnEnd || Q.excludeEnd || (Z += T), $(), Q.excludeEnd && (Z = T));
				do
					D.scope && q.closeNode(),
						!D.skip && !D.subLanguage && (De += D.relevance),
						(D = D.parent);
				while (D !== F.parent);
				return F.starts && Ie(F.starts, S), Q.returnEnd ? 0 : T.length;
			}
			function kn() {
				const S = [];
				for (let T = D; T !== fe; T = T.parent) T.scope && S.unshift(T.scope);
				S.forEach((T) => q.openNode(T));
			}
			let Le = {};
			function st(S, T) {
				const P = T && T[0];
				if (((Z += S), P == null)) return $(), 0;
				if (Le.type === 'begin' && T.type === 'end' && Le.index === T.index && P === '') {
					if (((Z += _.slice(T.index, T.index + 1)), !o)) {
						const F = new Error(`0 width match regex (${c})`);
						throw ((F.languageName = c), (F.badRule = Le.rule), F);
					}
					return 1;
				}
				if (((Le = T), T.type === 'begin')) return h(T);
				if (T.type === 'illegal' && !A) {
					const F = new Error(
						'Illegal lexeme "' + P + '" for mode "' + (D.scope || '<unnamed>') + '"'
					);
					throw ((F.mode = D), F);
				} else if (T.type === 'end') {
					const F = Sn(T);
					if (F !== Zt) return F;
				}
				if (T.type === 'illegal' && P === '') return 1;
				if (qe > 1e5 && qe > T.index * 3)
					throw new Error('potential infinite loop, way more iterations than matches');
				return (Z += P), P.length;
			}
			const fe = M(c);
			if (!fe) throw (Ee(i.replace('{}', c)), new Error('Unknown language: "' + c + '"'));
			const Tn = _r(fe);
			let Ye = '',
				D = L || Tn;
			const ot = {},
				q = new s.__emitter(s);
			kn();
			let Z = '',
				De = 0,
				pe = 0,
				qe = 0,
				Je = !1;
			try {
				if (fe.__emitTokens) fe.__emitTokens(_, q);
				else {
					for (D.matcher.considerAll(); ; ) {
						qe++, Je ? (Je = !1) : D.matcher.considerAll(), (D.matcher.lastIndex = pe);
						const S = D.matcher.exec(_);
						if (!S) break;
						const T = _.substring(pe, S.index),
							P = st(T, S);
						pe = S.index + P;
					}
					st(_.substring(pe));
				}
				return (
					q.finalize(),
					(Ye = q.toHTML()),
					{ language: c, value: Ye, relevance: De, illegal: !1, _emitter: q, _top: D }
				);
			} catch (S) {
				if (S.message && S.message.includes('Illegal'))
					return {
						language: c,
						value: Qe(_),
						illegal: !0,
						relevance: 0,
						_illegalBy: {
							message: S.message,
							index: pe,
							context: _.slice(pe - 100, pe + 100),
							mode: S.mode,
							resultSoFar: Ye
						},
						_emitter: q
					};
				if (o)
					return {
						language: c,
						value: Qe(_),
						illegal: !1,
						relevance: 0,
						errorRaised: S,
						_emitter: q,
						_top: D
					};
				throw S;
			}
		}
		function N(c) {
			const _ = { value: Qe(c), illegal: !1, relevance: 0, _top: r, _emitter: new s.__emitter(s) };
			return _._emitter.addText(c), _;
		}
		function g(c, _) {
			_ = _ || s.languages || Object.keys(t);
			const A = N(c),
				L = _.filter(M)
					.filter(Y)
					.map(($) => y($, c, !1));
			L.unshift(A);
			const I = L.sort(($, ce) => {
					if ($.relevance !== ce.relevance) return ce.relevance - $.relevance;
					if ($.language && ce.language) {
						if (M($.language).supersetOf === ce.language) return 1;
						if (M(ce.language).supersetOf === $.language) return -1;
					}
					return 0;
				}),
				[X, J] = I,
				Se = X;
			return (Se.secondBest = J), Se;
		}
		function u(c, _, A) {
			const L = (_ && n[_]) || A;
			c.classList.add('hljs'), c.classList.add(`language-${L}`);
		}
		function p(c) {
			let _ = null;
			const A = b(c);
			if (l(A)) return;
			if ((ie('before:highlightElement', { el: c, language: A }), c.dataset.highlighted)) {
				console.log(
					'Element previously highlighted. To highlight again, first unset `dataset.highlighted`.',
					c
				);
				return;
			}
			if (
				c.children.length > 0 &&
				(s.ignoreUnescapedHTML ||
					(console.warn(
						'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'
					),
					console.warn('https://github.com/highlightjs/highlight.js/wiki/security'),
					console.warn('The element with unescaped HTML:'),
					console.warn(c)),
				s.throwUnescapedHTML)
			)
				throw new Er('One of your code blocks includes unescaped HTML.', c.innerHTML);
			_ = c;
			const L = _.textContent,
				I = A ? f(L, { language: A, ignoreIllegals: !0 }) : g(L);
			(c.innerHTML = I.value),
				(c.dataset.highlighted = 'yes'),
				u(c, A, I.language),
				(c.result = { language: I.language, re: I.relevance, relevance: I.relevance }),
				I.secondBest &&
					(c.secondBest = { language: I.secondBest.language, relevance: I.secondBest.relevance }),
				ie('after:highlightElement', { el: c, result: I, text: L });
		}
		function d(c) {
			s = Kt(s, c);
		}
		const k = () => {
			B(), ke('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
		};
		function w() {
			B(), ke('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
		}
		let z = !1;
		function B() {
			if (document.readyState === 'loading') {
				z = !0;
				return;
			}
			document.querySelectorAll(s.cssSelector).forEach(p);
		}
		function C() {
			z && B();
		}
		typeof window < 'u' &&
			window.addEventListener &&
			window.addEventListener('DOMContentLoaded', C, !1);
		function v(c, _) {
			let A = null;
			try {
				A = _(e);
			} catch (L) {
				if ((Ee("Language definition for '{}' could not be registered.".replace('{}', c)), o))
					Ee(L);
				else throw L;
				A = r;
			}
			A.name || (A.name = c),
				(t[c] = A),
				(A.rawDefinition = _.bind(null, e)),
				A.aliases && R(A.aliases, { languageName: c });
		}
		function U(c) {
			delete t[c];
			for (const _ of Object.keys(n)) n[_] === c && delete n[_];
		}
		function E() {
			return Object.keys(t);
		}
		function M(c) {
			return (c = (c || '').toLowerCase()), t[c] || t[n[c]];
		}
		function R(c, { languageName: _ }) {
			typeof c == 'string' && (c = [c]),
				c.forEach((A) => {
					n[A.toLowerCase()] = _;
				});
		}
		function Y(c) {
			const _ = M(c);
			return _ && !_.disableAutodetect;
		}
		function ne(c) {
			c['before:highlightBlock'] &&
				!c['before:highlightElement'] &&
				(c['before:highlightElement'] = (_) => {
					c['before:highlightBlock'](Object.assign({ block: _.el }, _));
				}),
				c['after:highlightBlock'] &&
					!c['after:highlightElement'] &&
					(c['after:highlightElement'] = (_) => {
						c['after:highlightBlock'](Object.assign({ block: _.el }, _));
					});
		}
		function de(c) {
			ne(c), a.push(c);
		}
		function _e(c) {
			const _ = a.indexOf(c);
			_ !== -1 && a.splice(_, 1);
		}
		function ie(c, _) {
			const A = c;
			a.forEach(function (L) {
				L[A] && L[A](_);
			});
		}
		function le(c) {
			return (
				ke('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
				ke('10.7.0', 'Please use highlightElement now.'),
				p(c)
			);
		}
		Object.assign(e, {
			highlight: f,
			highlightAuto: g,
			highlightAll: B,
			highlightElement: p,
			highlightBlock: le,
			configure: d,
			initHighlighting: k,
			initHighlightingOnLoad: w,
			registerLanguage: v,
			unregisterLanguage: U,
			listLanguages: E,
			getLanguage: M,
			registerAliases: R,
			autoDetection: Y,
			inherit: Kt,
			addPlugin: de,
			removePlugin: _e
		}),
			(e.debugMode = function () {
				o = !1;
			}),
			(e.safeMode = function () {
				o = !0;
			}),
			(e.versionString = pr),
			(e.regex = { concat: ye, lookahead: en, either: it, optional: Di, anyNumberOfTimes: Li });
		for (const c in Be) typeof Be[c] == 'object' && Qt(Be[c]);
		return Object.assign(e, Be), e;
	},
	we = un({});
we.newInstance = () => un({});
var Sr = we;
we.HighlightJS = we;
we.default = we;
const Re = Mi(Sr);
function kr(e) {
	const t = e.regex,
		n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
		a = /[\p{L}0-9._:-]+/u,
		o = { className: 'symbol', begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
		i = {
			begin: /\s/,
			contains: [{ className: 'keyword', begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }]
		},
		r = e.inherit(i, { begin: /\(/, end: /\)/ }),
		s = e.inherit(e.APOS_STRING_MODE, { className: 'string' }),
		l = e.inherit(e.QUOTE_STRING_MODE, { className: 'string' }),
		b = {
			endsWithParent: !0,
			illegal: /</,
			relevance: 0,
			contains: [
				{ className: 'attr', begin: a, relevance: 0 },
				{
					begin: /=\s*/,
					relevance: 0,
					contains: [
						{
							className: 'string',
							endsParent: !0,
							variants: [
								{ begin: /"/, end: /"/, contains: [o] },
								{ begin: /'/, end: /'/, contains: [o] },
								{ begin: /[^\s"'=<>`]+/ }
							]
						}
					]
				}
			]
		};
	return {
		name: 'HTML, XML',
		aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
		case_insensitive: !0,
		unicodeRegex: !0,
		contains: [
			{
				className: 'meta',
				begin: /<![a-z]/,
				end: />/,
				relevance: 10,
				contains: [
					i,
					l,
					s,
					r,
					{
						begin: /\[/,
						end: /\]/,
						contains: [{ className: 'meta', begin: /<![a-z]/, end: />/, contains: [i, r, l, s] }]
					}
				]
			},
			e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
			{ begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
			o,
			{
				className: 'meta',
				end: /\?>/,
				variants: [
					{ begin: /<\?xml/, relevance: 10, contains: [l] },
					{ begin: /<\?[a-z][a-z0-9]+/ }
				]
			},
			{
				className: 'tag',
				begin: /<style(?=\s|>)/,
				end: />/,
				keywords: { name: 'style' },
				contains: [b],
				starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ['css', 'xml'] }
			},
			{
				className: 'tag',
				begin: /<script(?=\s|>)/,
				end: />/,
				keywords: { name: 'script' },
				contains: [b],
				starts: {
					end: /<\/script>/,
					returnEnd: !0,
					subLanguage: ['javascript', 'handlebars', 'xml']
				}
			},
			{ className: 'tag', begin: /<>|<\/>/ },
			{
				className: 'tag',
				begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
				end: /\/?>/,
				contains: [{ className: 'name', begin: n, relevance: 0, starts: b }]
			},
			{
				className: 'tag',
				begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
				contains: [
					{ className: 'name', begin: n, relevance: 0 },
					{ begin: />/, relevance: 0, endsParent: !0 }
				]
			}
		]
	};
}
const Tr = (e) => ({
		IMPORTANT: { scope: 'meta', begin: '!important' },
		BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
		HEXCOLOR: { scope: 'number', begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
		FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
		ATTRIBUTE_SELECTOR_MODE: {
			scope: 'selector-attr',
			begin: /\[/,
			end: /\]/,
			illegal: '$',
			contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
		},
		CSS_NUMBER_MODE: {
			scope: 'number',
			begin:
				e.NUMBER_RE +
				'(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
			relevance: 0
		},
		CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z_][A-Za-z0-9_-]*/ }
	}),
	Nr = [
		'a',
		'abbr',
		'address',
		'article',
		'aside',
		'audio',
		'b',
		'blockquote',
		'body',
		'button',
		'canvas',
		'caption',
		'cite',
		'code',
		'dd',
		'del',
		'details',
		'dfn',
		'div',
		'dl',
		'dt',
		'em',
		'fieldset',
		'figcaption',
		'figure',
		'footer',
		'form',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'header',
		'hgroup',
		'html',
		'i',
		'iframe',
		'img',
		'input',
		'ins',
		'kbd',
		'label',
		'legend',
		'li',
		'main',
		'mark',
		'menu',
		'nav',
		'object',
		'ol',
		'p',
		'q',
		'quote',
		'samp',
		'section',
		'span',
		'strong',
		'summary',
		'sup',
		'table',
		'tbody',
		'td',
		'textarea',
		'tfoot',
		'th',
		'thead',
		'time',
		'tr',
		'ul',
		'var',
		'video'
	],
	Ar = [
		'any-hover',
		'any-pointer',
		'aspect-ratio',
		'color',
		'color-gamut',
		'color-index',
		'device-aspect-ratio',
		'device-height',
		'device-width',
		'display-mode',
		'forced-colors',
		'grid',
		'height',
		'hover',
		'inverted-colors',
		'monochrome',
		'orientation',
		'overflow-block',
		'overflow-inline',
		'pointer',
		'prefers-color-scheme',
		'prefers-contrast',
		'prefers-reduced-motion',
		'prefers-reduced-transparency',
		'resolution',
		'scan',
		'scripting',
		'update',
		'width',
		'min-width',
		'max-width',
		'min-height',
		'max-height'
	],
	wr = [
		'active',
		'any-link',
		'blank',
		'checked',
		'current',
		'default',
		'defined',
		'dir',
		'disabled',
		'drop',
		'empty',
		'enabled',
		'first',
		'first-child',
		'first-of-type',
		'fullscreen',
		'future',
		'focus',
		'focus-visible',
		'focus-within',
		'has',
		'host',
		'host-context',
		'hover',
		'indeterminate',
		'in-range',
		'invalid',
		'is',
		'lang',
		'last-child',
		'last-of-type',
		'left',
		'link',
		'local-link',
		'not',
		'nth-child',
		'nth-col',
		'nth-last-child',
		'nth-last-col',
		'nth-last-of-type',
		'nth-of-type',
		'only-child',
		'only-of-type',
		'optional',
		'out-of-range',
		'past',
		'placeholder-shown',
		'read-only',
		'read-write',
		'required',
		'right',
		'root',
		'scope',
		'target',
		'target-within',
		'user-invalid',
		'valid',
		'visited',
		'where'
	],
	Rr = [
		'after',
		'backdrop',
		'before',
		'cue',
		'cue-region',
		'first-letter',
		'first-line',
		'grammar-error',
		'marker',
		'part',
		'placeholder',
		'selection',
		'slotted',
		'spelling-error'
	],
	Mr = [
		'align-content',
		'align-items',
		'align-self',
		'all',
		'animation',
		'animation-delay',
		'animation-direction',
		'animation-duration',
		'animation-fill-mode',
		'animation-iteration-count',
		'animation-name',
		'animation-play-state',
		'animation-timing-function',
		'backface-visibility',
		'background',
		'background-attachment',
		'background-blend-mode',
		'background-clip',
		'background-color',
		'background-image',
		'background-origin',
		'background-position',
		'background-repeat',
		'background-size',
		'block-size',
		'border',
		'border-block',
		'border-block-color',
		'border-block-end',
		'border-block-end-color',
		'border-block-end-style',
		'border-block-end-width',
		'border-block-start',
		'border-block-start-color',
		'border-block-start-style',
		'border-block-start-width',
		'border-block-style',
		'border-block-width',
		'border-bottom',
		'border-bottom-color',
		'border-bottom-left-radius',
		'border-bottom-right-radius',
		'border-bottom-style',
		'border-bottom-width',
		'border-collapse',
		'border-color',
		'border-image',
		'border-image-outset',
		'border-image-repeat',
		'border-image-slice',
		'border-image-source',
		'border-image-width',
		'border-inline',
		'border-inline-color',
		'border-inline-end',
		'border-inline-end-color',
		'border-inline-end-style',
		'border-inline-end-width',
		'border-inline-start',
		'border-inline-start-color',
		'border-inline-start-style',
		'border-inline-start-width',
		'border-inline-style',
		'border-inline-width',
		'border-left',
		'border-left-color',
		'border-left-style',
		'border-left-width',
		'border-radius',
		'border-right',
		'border-right-color',
		'border-right-style',
		'border-right-width',
		'border-spacing',
		'border-style',
		'border-top',
		'border-top-color',
		'border-top-left-radius',
		'border-top-right-radius',
		'border-top-style',
		'border-top-width',
		'border-width',
		'bottom',
		'box-decoration-break',
		'box-shadow',
		'box-sizing',
		'break-after',
		'break-before',
		'break-inside',
		'caption-side',
		'caret-color',
		'clear',
		'clip',
		'clip-path',
		'clip-rule',
		'color',
		'column-count',
		'column-fill',
		'column-gap',
		'column-rule',
		'column-rule-color',
		'column-rule-style',
		'column-rule-width',
		'column-span',
		'column-width',
		'columns',
		'contain',
		'content',
		'content-visibility',
		'counter-increment',
		'counter-reset',
		'cue',
		'cue-after',
		'cue-before',
		'cursor',
		'direction',
		'display',
		'empty-cells',
		'filter',
		'flex',
		'flex-basis',
		'flex-direction',
		'flex-flow',
		'flex-grow',
		'flex-shrink',
		'flex-wrap',
		'float',
		'flow',
		'font',
		'font-display',
		'font-family',
		'font-feature-settings',
		'font-kerning',
		'font-language-override',
		'font-size',
		'font-size-adjust',
		'font-smoothing',
		'font-stretch',
		'font-style',
		'font-synthesis',
		'font-variant',
		'font-variant-caps',
		'font-variant-east-asian',
		'font-variant-ligatures',
		'font-variant-numeric',
		'font-variant-position',
		'font-variation-settings',
		'font-weight',
		'gap',
		'glyph-orientation-vertical',
		'grid',
		'grid-area',
		'grid-auto-columns',
		'grid-auto-flow',
		'grid-auto-rows',
		'grid-column',
		'grid-column-end',
		'grid-column-start',
		'grid-gap',
		'grid-row',
		'grid-row-end',
		'grid-row-start',
		'grid-template',
		'grid-template-areas',
		'grid-template-columns',
		'grid-template-rows',
		'hanging-punctuation',
		'height',
		'hyphens',
		'icon',
		'image-orientation',
		'image-rendering',
		'image-resolution',
		'ime-mode',
		'inline-size',
		'isolation',
		'justify-content',
		'left',
		'letter-spacing',
		'line-break',
		'line-height',
		'list-style',
		'list-style-image',
		'list-style-position',
		'list-style-type',
		'margin',
		'margin-block',
		'margin-block-end',
		'margin-block-start',
		'margin-bottom',
		'margin-inline',
		'margin-inline-end',
		'margin-inline-start',
		'margin-left',
		'margin-right',
		'margin-top',
		'marks',
		'mask',
		'mask-border',
		'mask-border-mode',
		'mask-border-outset',
		'mask-border-repeat',
		'mask-border-slice',
		'mask-border-source',
		'mask-border-width',
		'mask-clip',
		'mask-composite',
		'mask-image',
		'mask-mode',
		'mask-origin',
		'mask-position',
		'mask-repeat',
		'mask-size',
		'mask-type',
		'max-block-size',
		'max-height',
		'max-inline-size',
		'max-width',
		'min-block-size',
		'min-height',
		'min-inline-size',
		'min-width',
		'mix-blend-mode',
		'nav-down',
		'nav-index',
		'nav-left',
		'nav-right',
		'nav-up',
		'none',
		'normal',
		'object-fit',
		'object-position',
		'opacity',
		'order',
		'orphans',
		'outline',
		'outline-color',
		'outline-offset',
		'outline-style',
		'outline-width',
		'overflow',
		'overflow-wrap',
		'overflow-x',
		'overflow-y',
		'padding',
		'padding-block',
		'padding-block-end',
		'padding-block-start',
		'padding-bottom',
		'padding-inline',
		'padding-inline-end',
		'padding-inline-start',
		'padding-left',
		'padding-right',
		'padding-top',
		'page-break-after',
		'page-break-before',
		'page-break-inside',
		'pause',
		'pause-after',
		'pause-before',
		'perspective',
		'perspective-origin',
		'pointer-events',
		'position',
		'quotes',
		'resize',
		'rest',
		'rest-after',
		'rest-before',
		'right',
		'row-gap',
		'scroll-margin',
		'scroll-margin-block',
		'scroll-margin-block-end',
		'scroll-margin-block-start',
		'scroll-margin-bottom',
		'scroll-margin-inline',
		'scroll-margin-inline-end',
		'scroll-margin-inline-start',
		'scroll-margin-left',
		'scroll-margin-right',
		'scroll-margin-top',
		'scroll-padding',
		'scroll-padding-block',
		'scroll-padding-block-end',
		'scroll-padding-block-start',
		'scroll-padding-bottom',
		'scroll-padding-inline',
		'scroll-padding-inline-end',
		'scroll-padding-inline-start',
		'scroll-padding-left',
		'scroll-padding-right',
		'scroll-padding-top',
		'scroll-snap-align',
		'scroll-snap-stop',
		'scroll-snap-type',
		'scrollbar-color',
		'scrollbar-gutter',
		'scrollbar-width',
		'shape-image-threshold',
		'shape-margin',
		'shape-outside',
		'speak',
		'speak-as',
		'src',
		'tab-size',
		'table-layout',
		'text-align',
		'text-align-all',
		'text-align-last',
		'text-combine-upright',
		'text-decoration',
		'text-decoration-color',
		'text-decoration-line',
		'text-decoration-style',
		'text-emphasis',
		'text-emphasis-color',
		'text-emphasis-position',
		'text-emphasis-style',
		'text-indent',
		'text-justify',
		'text-orientation',
		'text-overflow',
		'text-rendering',
		'text-shadow',
		'text-transform',
		'text-underline-position',
		'top',
		'transform',
		'transform-box',
		'transform-origin',
		'transform-style',
		'transition',
		'transition-delay',
		'transition-duration',
		'transition-property',
		'transition-timing-function',
		'unicode-bidi',
		'vertical-align',
		'visibility',
		'voice-balance',
		'voice-duration',
		'voice-family',
		'voice-pitch',
		'voice-range',
		'voice-rate',
		'voice-stress',
		'voice-volume',
		'white-space',
		'widows',
		'width',
		'will-change',
		'word-break',
		'word-spacing',
		'word-wrap',
		'writing-mode',
		'z-index'
	].reverse();
function vr(e) {
	const t = e.regex,
		n = Tr(e),
		a = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
		o = 'and or not only',
		i = /@-?\w[\w]*(-\w+)*/,
		r = '[a-zA-Z-][a-zA-Z0-9_-]*',
		s = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
	return {
		name: 'CSS',
		case_insensitive: !0,
		illegal: /[=|'\$]/,
		keywords: { keyframePosition: 'from to' },
		classNameAliases: { keyframePosition: 'selector-tag' },
		contains: [
			n.BLOCK_COMMENT,
			a,
			n.CSS_NUMBER_MODE,
			{ className: 'selector-id', begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
			{ className: 'selector-class', begin: '\\.' + r, relevance: 0 },
			n.ATTRIBUTE_SELECTOR_MODE,
			{
				className: 'selector-pseudo',
				variants: [{ begin: ':(' + wr.join('|') + ')' }, { begin: ':(:)?(' + Rr.join('|') + ')' }]
			},
			n.CSS_VARIABLE,
			{ className: 'attribute', begin: '\\b(' + Mr.join('|') + ')\\b' },
			{
				begin: /:/,
				end: /[;}{]/,
				contains: [
					n.BLOCK_COMMENT,
					n.HEXCOLOR,
					n.IMPORTANT,
					n.CSS_NUMBER_MODE,
					...s,
					{
						begin: /(url|data-uri)\(/,
						end: /\)/,
						relevance: 0,
						keywords: { built_in: 'url data-uri' },
						contains: [
							...s,
							{ className: 'string', begin: /[^)]/, endsWithParent: !0, excludeEnd: !0 }
						]
					},
					n.FUNCTION_DISPATCH
				]
			},
			{
				begin: t.lookahead(/@/),
				end: '[{;]',
				relevance: 0,
				illegal: /:/,
				contains: [
					{ className: 'keyword', begin: i },
					{
						begin: /\s/,
						endsWithParent: !0,
						excludeEnd: !0,
						relevance: 0,
						keywords: { $pattern: /[a-z-]+/, keyword: o, attribute: Ar.join(' ') },
						contains: [{ begin: /[a-z-]+(?=:)/, className: 'attribute' }, ...s, n.CSS_NUMBER_MODE]
					}
				]
			},
			{ className: 'selector-tag', begin: '\\b(' + Nr.join('|') + ')\\b' }
		]
	};
}
const Wt = '[A-Za-z$_][0-9A-Za-z$_]*',
	Or = [
		'as',
		'in',
		'of',
		'if',
		'for',
		'while',
		'finally',
		'var',
		'new',
		'function',
		'do',
		'return',
		'void',
		'else',
		'break',
		'catch',
		'instanceof',
		'with',
		'throw',
		'case',
		'default',
		'try',
		'switch',
		'continue',
		'typeof',
		'delete',
		'let',
		'yield',
		'const',
		'class',
		'debugger',
		'async',
		'await',
		'static',
		'import',
		'from',
		'export',
		'extends'
	],
	Ir = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
	dn = [
		'Object',
		'Function',
		'Boolean',
		'Symbol',
		'Math',
		'Date',
		'Number',
		'BigInt',
		'String',
		'RegExp',
		'Array',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Int16Array',
		'Int32Array',
		'Uint16Array',
		'Uint32Array',
		'BigInt64Array',
		'BigUint64Array',
		'Set',
		'Map',
		'WeakSet',
		'WeakMap',
		'ArrayBuffer',
		'SharedArrayBuffer',
		'Atomics',
		'DataView',
		'JSON',
		'Promise',
		'Generator',
		'GeneratorFunction',
		'AsyncFunction',
		'Reflect',
		'Proxy',
		'Intl',
		'WebAssembly'
	],
	fn = [
		'Error',
		'EvalError',
		'InternalError',
		'RangeError',
		'ReferenceError',
		'SyntaxError',
		'TypeError',
		'URIError'
	],
	gn = [
		'setInterval',
		'setTimeout',
		'clearInterval',
		'clearTimeout',
		'require',
		'exports',
		'eval',
		'isFinite',
		'isNaN',
		'parseFloat',
		'parseInt',
		'decodeURI',
		'decodeURIComponent',
		'encodeURI',
		'encodeURIComponent',
		'escape',
		'unescape'
	],
	Cr = [
		'arguments',
		'this',
		'super',
		'console',
		'window',
		'document',
		'localStorage',
		'sessionStorage',
		'module',
		'global'
	],
	Lr = [].concat(gn, dn, fn);
function Dr(e) {
	const t = e.regex,
		n = (_, { after: A }) => {
			const L = '</' + _[0].slice(1);
			return _.input.indexOf(L, A) !== -1;
		},
		a = Wt,
		o = { begin: '<>', end: '</>' },
		i = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		r = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (_, A) => {
				const L = _[0].length + _.index,
					I = _.input[L];
				if (I === '<' || I === ',') {
					A.ignoreMatch();
					return;
				}
				I === '>' && (n(_, { after: L }) || A.ignoreMatch());
				let X;
				const J = _.input.substring(L);
				if ((X = J.match(/^\s*=/))) {
					A.ignoreMatch();
					return;
				}
				if ((X = J.match(/^\s+extends\s+/)) && X.index === 0) {
					A.ignoreMatch();
					return;
				}
			}
		},
		s = { $pattern: Wt, keyword: Or, literal: Ir, built_in: Lr, 'variable.language': Cr },
		l = '[0-9](_?[0-9])*',
		b = `\\.(${l})`,
		f = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
		y = {
			className: 'number',
			variants: [
				{ begin: `(\\b(${f})((${b})|\\.)?|(${b}))[eE][+-]?(${l})\\b` },
				{ begin: `\\b(${f})\\b((${b})\\b|\\.)?|(${b})\\b` },
				{ begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
				{ begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
				{ begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
				{ begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
				{ begin: '\\b0[0-7]+n?\\b' }
			],
			relevance: 0
		},
		N = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: s, contains: [] },
		g = {
			begin: 'html`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, N], subLanguage: 'xml' }
		},
		u = {
			begin: 'css`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, N], subLanguage: 'css' }
		},
		p = {
			begin: 'gql`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, N], subLanguage: 'graphql' }
		},
		d = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, N] },
		w = {
			className: 'comment',
			variants: [
				e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
					relevance: 0,
					contains: [
						{
							begin: '(?=@[A-Za-z]+)',
							relevance: 0,
							contains: [
								{ className: 'doctag', begin: '@[A-Za-z]+' },
								{
									className: 'type',
									begin: '\\{',
									end: '\\}',
									excludeEnd: !0,
									excludeBegin: !0,
									relevance: 0
								},
								{ className: 'variable', begin: a + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
								{ begin: /(?=[^\n])\s/, relevance: 0 }
							]
						}
					]
				}),
				e.C_BLOCK_COMMENT_MODE,
				e.C_LINE_COMMENT_MODE
			]
		},
		z = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, g, u, p, d, { match: /\$\d+/ }, y];
	N.contains = z.concat({ begin: /\{/, end: /\}/, keywords: s, contains: ['self'].concat(z) });
	const B = [].concat(w, N.contains),
		C = B.concat([{ begin: /\(/, end: /\)/, keywords: s, contains: ['self'].concat(B) }]),
		v = {
			className: 'params',
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: s,
			contains: C
		},
		U = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						a,
						/\s+/,
						/extends/,
						/\s+/,
						t.concat(a, '(', t.concat(/\./, a), ')*')
					],
					scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' }
				},
				{ match: [/class/, /\s+/, a], scope: { 1: 'keyword', 3: 'title.class' } }
			]
		},
		E = {
			relevance: 0,
			match: t.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: 'title.class',
			keywords: { _: [...dn, ...fn] }
		},
		M = {
			label: 'use_strict',
			className: 'meta',
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/
		},
		R = {
			variants: [
				{ match: [/function/, /\s+/, a, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] }
			],
			className: { 1: 'keyword', 3: 'title.function' },
			label: 'func.def',
			contains: [v],
			illegal: /%/
		},
		Y = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
	function ne(_) {
		return t.concat('(?!', _.join('|'), ')');
	}
	const de = {
			match: t.concat(/\b/, ne([...gn, 'super', 'import']), a, t.lookahead(/\(/)),
			className: 'title.function',
			relevance: 0
		},
		_e = {
			begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
			end: a,
			excludeBegin: !0,
			keywords: 'prototype',
			className: 'property',
			relevance: 0
		},
		ie = {
			match: [/get|set/, /\s+/, a, /(?=\()/],
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [{ begin: /\(\)/ }, v]
		},
		le =
			'(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
			e.UNDERSCORE_IDENT_RE +
			')\\s*=>',
		c = {
			match: [/const|var|let/, /\s+/, a, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(le)],
			keywords: 'async',
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [v]
		};
	return {
		name: 'JavaScript',
		aliases: ['js', 'jsx', 'mjs', 'cjs'],
		keywords: s,
		exports: { PARAMS_CONTAINS: C, CLASS_REFERENCE: E },
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
			M,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			g,
			u,
			p,
			d,
			w,
			{ match: /\$\d+/ },
			y,
			E,
			{ className: 'attr', begin: a + t.lookahead(':'), relevance: 0 },
			c,
			{
				begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
				keywords: 'return throw case',
				relevance: 0,
				contains: [
					w,
					e.REGEXP_MODE,
					{
						className: 'function',
						begin: le,
						returnBegin: !0,
						end: '\\s*=>',
						contains: [
							{
								className: 'params',
								variants: [
									{ begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
									{ className: null, begin: /\(\s*\)/, skip: !0 },
									{
										begin: /\(/,
										end: /\)/,
										excludeBegin: !0,
										excludeEnd: !0,
										keywords: s,
										contains: C
									}
								]
							}
						]
					},
					{ begin: /,/, relevance: 0 },
					{ match: /\s+/, relevance: 0 },
					{
						variants: [
							{ begin: o.begin, end: o.end },
							{ match: i },
							{ begin: r.begin, 'on:begin': r.isTrulyOpeningTag, end: r.end }
						],
						subLanguage: 'xml',
						contains: [{ begin: r.begin, end: r.end, skip: !0, contains: ['self'] }]
					}
				]
			},
			R,
			{ beginKeywords: 'while if switch catch for' },
			{
				begin:
					'\\b(?!function)' +
					e.UNDERSCORE_IDENT_RE +
					'\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
				returnBegin: !0,
				label: 'func.def',
				contains: [v, e.inherit(e.TITLE_MODE, { begin: a, className: 'title.function' })]
			},
			{ match: /\.\.\./, relevance: 0 },
			_e,
			{ match: '\\$' + a, relevance: 0 },
			{ match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [v] },
			de,
			Y,
			U,
			ie,
			{ match: /\$[(.]/ }
		]
	};
}
const Ke = '[A-Za-z$_][0-9A-Za-z$_]*',
	bn = [
		'as',
		'in',
		'of',
		'if',
		'for',
		'while',
		'finally',
		'var',
		'new',
		'function',
		'do',
		'return',
		'void',
		'else',
		'break',
		'catch',
		'instanceof',
		'with',
		'throw',
		'case',
		'default',
		'try',
		'switch',
		'continue',
		'typeof',
		'delete',
		'let',
		'yield',
		'const',
		'class',
		'debugger',
		'async',
		'await',
		'static',
		'import',
		'from',
		'export',
		'extends'
	],
	hn = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
	_n = [
		'Object',
		'Function',
		'Boolean',
		'Symbol',
		'Math',
		'Date',
		'Number',
		'BigInt',
		'String',
		'RegExp',
		'Array',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Int16Array',
		'Int32Array',
		'Uint16Array',
		'Uint32Array',
		'BigInt64Array',
		'BigUint64Array',
		'Set',
		'Map',
		'WeakSet',
		'WeakMap',
		'ArrayBuffer',
		'SharedArrayBuffer',
		'Atomics',
		'DataView',
		'JSON',
		'Promise',
		'Generator',
		'GeneratorFunction',
		'AsyncFunction',
		'Reflect',
		'Proxy',
		'Intl',
		'WebAssembly'
	],
	mn = [
		'Error',
		'EvalError',
		'InternalError',
		'RangeError',
		'ReferenceError',
		'SyntaxError',
		'TypeError',
		'URIError'
	],
	pn = [
		'setInterval',
		'setTimeout',
		'clearInterval',
		'clearTimeout',
		'require',
		'exports',
		'eval',
		'isFinite',
		'isNaN',
		'parseFloat',
		'parseInt',
		'decodeURI',
		'decodeURIComponent',
		'encodeURI',
		'encodeURIComponent',
		'escape',
		'unescape'
	],
	En = [
		'arguments',
		'this',
		'super',
		'console',
		'window',
		'document',
		'localStorage',
		'sessionStorage',
		'module',
		'global'
	],
	yn = [].concat(pn, _n, mn);
function xr(e) {
	const t = e.regex,
		n = (_, { after: A }) => {
			const L = '</' + _[0].slice(1);
			return _.input.indexOf(L, A) !== -1;
		},
		a = Ke,
		o = { begin: '<>', end: '</>' },
		i = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		r = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (_, A) => {
				const L = _[0].length + _.index,
					I = _.input[L];
				if (I === '<' || I === ',') {
					A.ignoreMatch();
					return;
				}
				I === '>' && (n(_, { after: L }) || A.ignoreMatch());
				let X;
				const J = _.input.substring(L);
				if ((X = J.match(/^\s*=/))) {
					A.ignoreMatch();
					return;
				}
				if ((X = J.match(/^\s+extends\s+/)) && X.index === 0) {
					A.ignoreMatch();
					return;
				}
			}
		},
		s = { $pattern: Ke, keyword: bn, literal: hn, built_in: yn, 'variable.language': En },
		l = '[0-9](_?[0-9])*',
		b = `\\.(${l})`,
		f = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
		y = {
			className: 'number',
			variants: [
				{ begin: `(\\b(${f})((${b})|\\.)?|(${b}))[eE][+-]?(${l})\\b` },
				{ begin: `\\b(${f})\\b((${b})\\b|\\.)?|(${b})\\b` },
				{ begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
				{ begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
				{ begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
				{ begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
				{ begin: '\\b0[0-7]+n?\\b' }
			],
			relevance: 0
		},
		N = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: s, contains: [] },
		g = {
			begin: 'html`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, N], subLanguage: 'xml' }
		},
		u = {
			begin: 'css`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, N], subLanguage: 'css' }
		},
		p = {
			begin: 'gql`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, N], subLanguage: 'graphql' }
		},
		d = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, N] },
		w = {
			className: 'comment',
			variants: [
				e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
					relevance: 0,
					contains: [
						{
							begin: '(?=@[A-Za-z]+)',
							relevance: 0,
							contains: [
								{ className: 'doctag', begin: '@[A-Za-z]+' },
								{
									className: 'type',
									begin: '\\{',
									end: '\\}',
									excludeEnd: !0,
									excludeBegin: !0,
									relevance: 0
								},
								{ className: 'variable', begin: a + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
								{ begin: /(?=[^\n])\s/, relevance: 0 }
							]
						}
					]
				}),
				e.C_BLOCK_COMMENT_MODE,
				e.C_LINE_COMMENT_MODE
			]
		},
		z = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, g, u, p, d, { match: /\$\d+/ }, y];
	N.contains = z.concat({ begin: /\{/, end: /\}/, keywords: s, contains: ['self'].concat(z) });
	const B = [].concat(w, N.contains),
		C = B.concat([{ begin: /\(/, end: /\)/, keywords: s, contains: ['self'].concat(B) }]),
		v = {
			className: 'params',
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: s,
			contains: C
		},
		U = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						a,
						/\s+/,
						/extends/,
						/\s+/,
						t.concat(a, '(', t.concat(/\./, a), ')*')
					],
					scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' }
				},
				{ match: [/class/, /\s+/, a], scope: { 1: 'keyword', 3: 'title.class' } }
			]
		},
		E = {
			relevance: 0,
			match: t.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: 'title.class',
			keywords: { _: [..._n, ...mn] }
		},
		M = {
			label: 'use_strict',
			className: 'meta',
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/
		},
		R = {
			variants: [
				{ match: [/function/, /\s+/, a, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] }
			],
			className: { 1: 'keyword', 3: 'title.function' },
			label: 'func.def',
			contains: [v],
			illegal: /%/
		},
		Y = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
	function ne(_) {
		return t.concat('(?!', _.join('|'), ')');
	}
	const de = {
			match: t.concat(/\b/, ne([...pn, 'super', 'import']), a, t.lookahead(/\(/)),
			className: 'title.function',
			relevance: 0
		},
		_e = {
			begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
			end: a,
			excludeBegin: !0,
			keywords: 'prototype',
			className: 'property',
			relevance: 0
		},
		ie = {
			match: [/get|set/, /\s+/, a, /(?=\()/],
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [{ begin: /\(\)/ }, v]
		},
		le =
			'(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
			e.UNDERSCORE_IDENT_RE +
			')\\s*=>',
		c = {
			match: [/const|var|let/, /\s+/, a, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(le)],
			keywords: 'async',
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [v]
		};
	return {
		name: 'JavaScript',
		aliases: ['js', 'jsx', 'mjs', 'cjs'],
		keywords: s,
		exports: { PARAMS_CONTAINS: C, CLASS_REFERENCE: E },
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
			M,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			g,
			u,
			p,
			d,
			w,
			{ match: /\$\d+/ },
			y,
			E,
			{ className: 'attr', begin: a + t.lookahead(':'), relevance: 0 },
			c,
			{
				begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
				keywords: 'return throw case',
				relevance: 0,
				contains: [
					w,
					e.REGEXP_MODE,
					{
						className: 'function',
						begin: le,
						returnBegin: !0,
						end: '\\s*=>',
						contains: [
							{
								className: 'params',
								variants: [
									{ begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
									{ className: null, begin: /\(\s*\)/, skip: !0 },
									{
										begin: /\(/,
										end: /\)/,
										excludeBegin: !0,
										excludeEnd: !0,
										keywords: s,
										contains: C
									}
								]
							}
						]
					},
					{ begin: /,/, relevance: 0 },
					{ match: /\s+/, relevance: 0 },
					{
						variants: [
							{ begin: o.begin, end: o.end },
							{ match: i },
							{ begin: r.begin, 'on:begin': r.isTrulyOpeningTag, end: r.end }
						],
						subLanguage: 'xml',
						contains: [{ begin: r.begin, end: r.end, skip: !0, contains: ['self'] }]
					}
				]
			},
			R,
			{ beginKeywords: 'while if switch catch for' },
			{
				begin:
					'\\b(?!function)' +
					e.UNDERSCORE_IDENT_RE +
					'\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
				returnBegin: !0,
				label: 'func.def',
				contains: [v, e.inherit(e.TITLE_MODE, { begin: a, className: 'title.function' })]
			},
			{ match: /\.\.\./, relevance: 0 },
			_e,
			{ match: '\\$' + a, relevance: 0 },
			{ match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [v] },
			de,
			Y,
			U,
			ie,
			{ match: /\$[(.]/ }
		]
	};
}
function Br(e) {
	const t = xr(e),
		n = Ke,
		a = [
			'any',
			'void',
			'number',
			'boolean',
			'string',
			'object',
			'never',
			'symbol',
			'bigint',
			'unknown'
		],
		o = {
			beginKeywords: 'namespace',
			end: /\{/,
			excludeEnd: !0,
			contains: [t.exports.CLASS_REFERENCE]
		},
		i = {
			beginKeywords: 'interface',
			end: /\{/,
			excludeEnd: !0,
			keywords: { keyword: 'interface extends', built_in: a },
			contains: [t.exports.CLASS_REFERENCE]
		},
		r = { className: 'meta', relevance: 10, begin: /^\s*['"]use strict['"]/ },
		s = [
			'type',
			'namespace',
			'interface',
			'public',
			'private',
			'protected',
			'implements',
			'declare',
			'abstract',
			'readonly',
			'enum',
			'override'
		],
		l = {
			$pattern: Ke,
			keyword: bn.concat(s),
			literal: hn,
			built_in: yn.concat(a),
			'variable.language': En
		},
		b = { className: 'meta', begin: '@' + n },
		f = (N, g, u) => {
			const p = N.contains.findIndex((d) => d.label === g);
			if (p === -1) throw new Error('can not find mode to replace');
			N.contains.splice(p, 1, u);
		};
	Object.assign(t.keywords, l),
		t.exports.PARAMS_CONTAINS.push(b),
		(t.contains = t.contains.concat([b, o, i])),
		f(t, 'shebang', e.SHEBANG()),
		f(t, 'use_strict', r);
	const y = t.contains.find((N) => N.label === 'func.def');
	return (
		(y.relevance = 0),
		Object.assign(t, { name: 'TypeScript', aliases: ['ts', 'tsx', 'mts', 'cts'] }),
		t
	);
}
function Pr(e) {
	let t;
	const n = e[1].default,
		a = re(n, e, e[7], null);
	return {
		c() {
			a && a.c();
		},
		l(o) {
			a && a.l(o);
		},
		m(o, i) {
			a && a.m(o, i), (t = !0);
		},
		p(o, i) {
			a && a.p && (!t || i & 128) && ae(a, n, o, o[7], t ? oe(n, o[7], i, null) : se(o[7]), null);
		},
		i(o) {
			t || (O(a, o), (t = !0));
		},
		o(o) {
			H(a, o), (t = !1);
		},
		d(o) {
			a && a.d(o);
		}
	};
}
function Ur(e) {
	let t,
		n = '<a href="./" rel="noreferrer">Flexilte</a>';
	return {
		c() {
			(t = G('strong')), (t.innerHTML = n), this.h();
		},
		l(a) {
			(t = K(a, 'STRONG', { class: !0, 'data-svelte-h': !0 })),
				Te(t) !== 'svelte-1703tna' && (t.innerHTML = n),
				this.h();
		},
		h() {
			m(t, 'class', 'text-xl uppercase');
		},
		m(a, o) {
			V(a, t, o);
		},
		p: et,
		d(a) {
			a && x(t);
		}
	};
}
function Hr(e) {
	let t,
		n =
			'<a class="btn btn-sm variant-ghost-surface" href="./docs" rel="noreferrer">Documentation</a> <a class="btn btn-sm variant-ghost-surface" href="./example" rel="noreferrer">Example</a> <a class="btn btn-sm variant-ghost-surface" href="./editor" rel="noreferrer">Editor</a> <a class="btn btn-sm variant-ghost-surface" href="./ai" rel="noreferrer">AI</a> <a class="btn btn-sm variant-ghost-surface" href="https://github.com/" rel="noreferrer">GitHub</a>',
		a,
		o,
		i,
		r,
		s,
		l,
		b;
	return (
		(r = new In({ props: { icon: 'mdi:hamburger-menu' } })),
		{
			c() {
				(t = G('div')),
					(t.innerHTML = n),
					(a = ee()),
					(o = G('div')),
					(i = G('button')),
					Ue(r.$$.fragment),
					this.h();
			},
			l(f) {
				(t = K(f, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					Te(t) !== 'svelte-tbws5h' && (t.innerHTML = n),
					(a = te(f)),
					(o = K(f, 'DIV', { class: !0 }));
				var y = j(o);
				i = K(y, 'BUTTON', { type: !0, class: !0 });
				var N = j(i);
				He(r.$$.fragment, N), N.forEach(x), y.forEach(x), this.h();
			},
			h() {
				m(t, 'class', 'hidden md:block'),
					m(i, 'type', 'button'),
					m(i, 'class', 'btn-icon bg-initial'),
					m(o, 'class', 'block md:hidden');
			},
			m(f, y) {
				V(f, t, y),
					V(f, a, y),
					V(f, o, y),
					W(o, i),
					ze(r, i, null),
					(s = !0),
					l || ((b = ue(i, 'click', e[2])), (l = !0));
			},
			p: et,
			i(f) {
				s || (O(r.$$.fragment, f), (s = !0));
			},
			o(f) {
				H(r.$$.fragment, f), (s = !1);
			},
			d(f) {
				f && (x(t), x(a), x(o)), Fe(r), (l = !1), b();
			}
		}
	);
}
function zr(e) {
	let t, n;
	return (
		(t = new si({ props: { $$slots: { trail: [Hr], lead: [Ur] }, $$scope: { ctx: e } } })),
		{
			c() {
				Ue(t.$$.fragment);
			},
			l(a) {
				He(t.$$.fragment, a);
			},
			m(a, o) {
				ze(t, a, o), (n = !0);
			},
			p(a, o) {
				const i = {};
				o & 128 && (i.$$scope = { dirty: o, ctx: a }), t.$set(i);
			},
			i(a) {
				n || (O(t.$$.fragment, a), (n = !0));
			},
			o(a) {
				H(t.$$.fragment, a), (n = !1);
			},
			d(a) {
				Fe(t, a);
			}
		}
	);
}
function Fr(e) {
	let t,
		n,
		a = '<span></span><span>Documentation</span>',
		o,
		i,
		r = '<span></span><span>Example</span>',
		s,
		l,
		b = '<span></span><span>Editor</span>',
		f,
		y,
		N = '<span></span><span>AI</span>',
		g,
		u;
	return {
		c() {
			(t = G('div')),
				(n = G('a')),
				(n.innerHTML = a),
				(o = ee()),
				(i = G('a')),
				(i.innerHTML = r),
				(s = ee()),
				(l = G('a')),
				(l.innerHTML = b),
				(f = ee()),
				(y = G('a')),
				(y.innerHTML = N),
				this.h();
		},
		l(p) {
			t = K(p, 'DIV', { class: !0 });
			var d = j(t);
			(n = K(d, 'A', {
				href: !0,
				class: !0,
				'data-sveltekit-preload-data': !0,
				'data-svelte-h': !0
			})),
				Te(n) !== 'svelte-yxexoh' && (n.innerHTML = a),
				(o = te(d)),
				(i = K(d, 'A', {
					href: !0,
					class: !0,
					'data-sveltekit-preload-data': !0,
					'data-svelte-h': !0
				})),
				Te(i) !== 'svelte-1uh7fea' && (i.innerHTML = r),
				(s = te(d)),
				(l = K(d, 'A', {
					href: !0,
					class: !0,
					'data-sveltekit-preload-data': !0,
					'data-svelte-h': !0
				})),
				Te(l) !== 'svelte-1u78y9k' && (l.innerHTML = b),
				(f = te(d)),
				(y = K(d, 'A', {
					href: !0,
					class: !0,
					'data-sveltekit-preload-data': !0,
					'data-svelte-h': !0
				})),
				Te(y) !== 'svelte-1pfn3w8' && (y.innerHTML = N),
				d.forEach(x),
				this.h();
		},
		h() {
			m(n, 'href', './docs'),
				m(n, 'class', 'btn variant-filled flex my-2 mx-10'),
				m(n, 'data-sveltekit-preload-data', 'hover'),
				m(i, 'href', './example'),
				m(i, 'class', 'btn variant-filled flex my-2 mx-10'),
				m(i, 'data-sveltekit-preload-data', 'hover'),
				m(l, 'href', './editor'),
				m(l, 'class', 'btn variant-filled flex my-2 mx-10'),
				m(l, 'data-sveltekit-preload-data', 'hover'),
				m(y, 'href', './ai'),
				m(y, 'class', 'btn variant-filled flex my-2 mx-10'),
				m(y, 'data-sveltekit-preload-data', 'hover'),
				m(t, 'class', 'flex flex-col item-center justify-center mt-10');
		},
		m(p, d) {
			V(p, t, d),
				W(t, n),
				W(t, o),
				W(t, i),
				W(t, s),
				W(t, l),
				W(t, f),
				W(t, y),
				g ||
					((u = [
						ue(n, 'click', e[3]),
						ue(i, 'click', e[4]),
						ue(l, 'click', e[5]),
						ue(y, 'click', e[6])
					]),
					(g = !0));
		},
		p: et,
		d(p) {
			p && x(t), (g = !1), Yt(u);
		}
	};
}
function Gr(e) {
	let t, n, a, o;
	return (
		(t = new Si({ props: { $$slots: { header: [zr], default: [Pr] }, $$scope: { ctx: e } } })),
		(a = new Ri({ props: { position: 'right', $$slots: { default: [Fr] }, $$scope: { ctx: e } } })),
		{
			c() {
				Ue(t.$$.fragment), (n = ee()), Ue(a.$$.fragment);
			},
			l(i) {
				He(t.$$.fragment, i), (n = te(i)), He(a.$$.fragment, i);
			},
			m(i, r) {
				ze(t, i, r), V(i, n, r), ze(a, i, r), (o = !0);
			},
			p(i, [r]) {
				const s = {};
				r & 128 && (s.$$scope = { dirty: r, ctx: i }), t.$set(s);
				const l = {};
				r & 128 && (l.$$scope = { dirty: r, ctx: i }), a.$set(l);
			},
			i(i) {
				o || (O(t.$$.fragment, i), O(a.$$.fragment, i), (o = !0));
			},
			o(i) {
				H(t.$$.fragment, i), H(a.$$.fragment, i), (o = !1);
			},
			d(i) {
				i && x(n), Fe(t, i), Fe(a, i);
			}
		}
	);
}
function Kr(e, t, n) {
	let { $$slots: a = {}, $$scope: o } = t;
	Re.registerLanguage('xml', kr),
		Re.registerLanguage('css', vr),
		Re.registerLanguage('javascript', Dr),
		Re.registerLanguage('typescript', Br),
		On.set(Re),
		Wn();
	const i = Jt(),
		r = () => i.open(),
		s = () => i.close(),
		l = () => i.close(),
		b = () => i.close(),
		f = () => i.close();
	return (
		(e.$$set = (y) => {
			'$$scope' in y && n(7, (o = y.$$scope));
		}),
		[i, a, r, s, l, b, f, o]
	);
}
class qr extends We {
	constructor(t) {
		super(), Xe(this, t, Kr, Gr, Ze, {});
	}
}
export { qr as component, Yr as universal };
