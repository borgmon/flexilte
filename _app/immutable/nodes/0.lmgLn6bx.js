import {
	s as Ue,
	H as te,
	e as Z,
	f as $,
	c as K,
	a as Y,
	h as ee,
	d as C,
	b as _,
	i as G,
	j as J,
	I as ne,
	J as ie,
	K as se,
	G as yt,
	w as ke,
	C as we,
	y as Je,
	o as ln,
	a6 as cn,
	t as Tt,
	g as vt,
	m as Ee,
	n as Mt
} from '../chunks/scheduler.DFLkqwTt.js';
import {
	S as He,
	i as ze,
	t as w,
	g as le,
	b as P,
	e as ce,
	c as Ot,
	a as kt,
	m as wt,
	d as It
} from '../chunks/index.DThMT7MT.js';
import { s as un } from '../chunks/stores.BLu1vE7B.js';
import '../chunks/ProgressBar.svelte_svelte_type_style_lang.dhjFsQWZ.js';
const fn = !0,
	ss = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: fn }, Symbol.toStringTag, {
			value: 'Module'
		})
	),
	dn = (e) => ({}),
	qe = (e) => ({}),
	gn = (e) => ({}),
	Qe = (e) => ({}),
	bn = (e) => ({}),
	$e = (e) => ({});
function et(e) {
	let t, n, i;
	const o = e[22].lead,
		a = te(o, e, e[21], $e);
	return {
		c() {
			(t = Z('div')), a && a.c(), this.h();
		},
		l(s) {
			t = K(s, 'DIV', { class: !0 });
			var r = Y(t);
			a && a.l(r), r.forEach(C), this.h();
		},
		h() {
			_(t, 'class', (n = 'app-bar-slot-lead ' + e[4]));
		},
		m(s, r) {
			G(s, t, r), a && a.m(t, null), (i = !0);
		},
		p(s, r) {
			a &&
				a.p &&
				(!i || r & 2097152) &&
				ne(a, o, s, s[21], i ? se(o, s[21], r, bn) : ie(s[21]), $e),
				(!i || (r & 16 && n !== (n = 'app-bar-slot-lead ' + s[4]))) && _(t, 'class', n);
		},
		i(s) {
			i || (w(a, s), (i = !0));
		},
		o(s) {
			P(a, s), (i = !1);
		},
		d(s) {
			s && C(t), a && a.d(s);
		}
	};
}
function tt(e) {
	let t, n, i;
	const o = e[22].trail,
		a = te(o, e, e[21], Qe);
	return {
		c() {
			(t = Z('div')), a && a.c(), this.h();
		},
		l(s) {
			t = K(s, 'DIV', { class: !0 });
			var r = Y(t);
			a && a.l(r), r.forEach(C), this.h();
		},
		h() {
			_(t, 'class', (n = 'app-bar-slot-trail ' + e[2]));
		},
		m(s, r) {
			G(s, t, r), a && a.m(t, null), (i = !0);
		},
		p(s, r) {
			a &&
				a.p &&
				(!i || r & 2097152) &&
				ne(a, o, s, s[21], i ? se(o, s[21], r, gn) : ie(s[21]), Qe),
				(!i || (r & 4 && n !== (n = 'app-bar-slot-trail ' + s[2]))) && _(t, 'class', n);
		},
		i(s) {
			i || (w(a, s), (i = !0));
		},
		o(s) {
			P(a, s), (i = !1);
		},
		d(s) {
			s && C(t), a && a.d(s);
		}
	};
}
function nt(e) {
	let t, n, i;
	const o = e[22].headline,
		a = te(o, e, e[21], qe);
	return {
		c() {
			(t = Z('div')), a && a.c(), this.h();
		},
		l(s) {
			t = K(s, 'DIV', { class: !0 });
			var r = Y(t);
			a && a.l(r), r.forEach(C), this.h();
		},
		h() {
			_(t, 'class', (n = 'app-bar-row-headline ' + e[5]));
		},
		m(s, r) {
			G(s, t, r), a && a.m(t, null), (i = !0);
		},
		p(s, r) {
			a &&
				a.p &&
				(!i || r & 2097152) &&
				ne(a, o, s, s[21], i ? se(o, s[21], r, dn) : ie(s[21]), qe),
				(!i || (r & 32 && n !== (n = 'app-bar-row-headline ' + s[5]))) && _(t, 'class', n);
		},
		i(s) {
			i || (w(a, s), (i = !0));
		},
		o(s) {
			P(a, s), (i = !1);
		},
		d(s) {
			s && C(t), a && a.d(s);
		}
	};
}
function hn(e) {
	let t,
		n,
		i,
		o,
		a,
		s,
		r,
		l,
		E,
		h,
		A = e[8].lead && et(e);
	const O = e[22].default,
		S = te(O, e, e[21], null);
	let T = e[8].trail && tt(e),
		b = e[8].headline && nt(e);
	return {
		c() {
			(t = Z('div')),
				(n = Z('div')),
				A && A.c(),
				(i = $()),
				(o = Z('div')),
				S && S.c(),
				(s = $()),
				T && T.c(),
				(l = $()),
				b && b.c(),
				this.h();
		},
		l(u) {
			t = K(u, 'DIV', {
				class: !0,
				'data-testid': !0,
				role: !0,
				'aria-label': !0,
				'aria-labelledby': !0
			});
			var m = Y(t);
			n = K(m, 'DIV', { class: !0 });
			var R = Y(n);
			A && A.l(R), (i = ee(R)), (o = K(R, 'DIV', { class: !0 }));
			var F = Y(o);
			S && S.l(F),
				F.forEach(C),
				(s = ee(R)),
				T && T.l(R),
				R.forEach(C),
				(l = ee(m)),
				b && b.l(m),
				m.forEach(C),
				this.h();
		},
		h() {
			_(o, 'class', (a = 'app-bar-slot-default ' + e[3])),
				_(n, 'class', (r = 'app-bar-row-main ' + e[6])),
				_(t, 'class', (E = 'app-bar ' + e[7])),
				_(t, 'data-testid', 'app-bar'),
				_(t, 'role', 'toolbar'),
				_(t, 'aria-label', e[0]),
				_(t, 'aria-labelledby', e[1]);
		},
		m(u, m) {
			G(u, t, m),
				J(t, n),
				A && A.m(n, null),
				J(n, i),
				J(n, o),
				S && S.m(o, null),
				J(n, s),
				T && T.m(n, null),
				J(t, l),
				b && b.m(t, null),
				(h = !0);
		},
		p(u, [m]) {
			u[8].lead
				? A
					? (A.p(u, m), m & 256 && w(A, 1))
					: ((A = et(u)), A.c(), w(A, 1), A.m(n, i))
				: A &&
					(le(),
					P(A, 1, 1, () => {
						A = null;
					}),
					ce()),
				S &&
					S.p &&
					(!h || m & 2097152) &&
					ne(S, O, u, u[21], h ? se(O, u[21], m, null) : ie(u[21]), null),
				(!h || (m & 8 && a !== (a = 'app-bar-slot-default ' + u[3]))) && _(o, 'class', a),
				u[8].trail
					? T
						? (T.p(u, m), m & 256 && w(T, 1))
						: ((T = tt(u)), T.c(), w(T, 1), T.m(n, null))
					: T &&
						(le(),
						P(T, 1, 1, () => {
							T = null;
						}),
						ce()),
				(!h || (m & 64 && r !== (r = 'app-bar-row-main ' + u[6]))) && _(n, 'class', r),
				u[8].headline
					? b
						? (b.p(u, m), m & 256 && w(b, 1))
						: ((b = nt(u)), b.c(), w(b, 1), b.m(t, null))
					: b &&
						(le(),
						P(b, 1, 1, () => {
							b = null;
						}),
						ce()),
				(!h || (m & 128 && E !== (E = 'app-bar ' + u[7]))) && _(t, 'class', E),
				(!h || m & 1) && _(t, 'aria-label', u[0]),
				(!h || m & 2) && _(t, 'aria-labelledby', u[1]);
		},
		i(u) {
			h || (w(A), w(S, u), w(T), w(b), (h = !0));
		},
		o(u) {
			P(A), P(S, u), P(T), P(b), (h = !1);
		},
		d(u) {
			u && C(t), A && A.d(), S && S.d(u), T && T.d(), b && b.d();
		}
	};
}
const _n = 'flex flex-col',
	pn = 'grid items-center',
	En = '',
	mn = 'flex-none flex justify-between items-center',
	Sn = 'flex-auto',
	Nn = 'flex-none flex items-center space-x-4';
function An(e, t, n) {
	let i,
		o,
		a,
		s,
		r,
		l,
		{ $$slots: E = {}, $$scope: h } = t;
	const A = yt(E);
	let { background: O = 'bg-surface-100-800-token' } = t,
		{ border: S = '' } = t,
		{ padding: T = 'p-4' } = t,
		{ shadow: b = '' } = t,
		{ spacing: u = 'space-y-4' } = t,
		{ gridColumns: m = 'grid-cols-[auto_1fr_auto]' } = t,
		{ gap: R = 'gap-4' } = t,
		{ regionRowMain: F = '' } = t,
		{ regionRowHeadline: D = '' } = t,
		{ slotLead: L = '' } = t,
		{ slotDefault: k = '' } = t,
		{ slotTrail: B = '' } = t,
		{ label: g = '' } = t,
		{ labelledby: v = '' } = t;
	return (
		(e.$$set = (y) => {
			n(23, (t = ke(ke({}, t), we(y)))),
				'background' in y && n(9, (O = y.background)),
				'border' in y && n(10, (S = y.border)),
				'padding' in y && n(11, (T = y.padding)),
				'shadow' in y && n(12, (b = y.shadow)),
				'spacing' in y && n(13, (u = y.spacing)),
				'gridColumns' in y && n(14, (m = y.gridColumns)),
				'gap' in y && n(15, (R = y.gap)),
				'regionRowMain' in y && n(16, (F = y.regionRowMain)),
				'regionRowHeadline' in y && n(17, (D = y.regionRowHeadline)),
				'slotLead' in y && n(18, (L = y.slotLead)),
				'slotDefault' in y && n(19, (k = y.slotDefault)),
				'slotTrail' in y && n(20, (B = y.slotTrail)),
				'label' in y && n(0, (g = y.label)),
				'labelledby' in y && n(1, (v = y.labelledby)),
				'$$scope' in y && n(21, (h = y.$$scope));
		}),
		(e.$$.update = () => {
			n(7, (i = `${_n} ${O} ${S} ${u} ${T} ${b} ${t.class ?? ''}`)),
				e.$$.dirty & 114688 && n(6, (o = `${pn} ${m} ${R} ${F}`)),
				e.$$.dirty & 131072 && n(5, (a = `${En} ${D}`)),
				e.$$.dirty & 262144 && n(4, (s = `${mn} ${L}`)),
				e.$$.dirty & 524288 && n(3, (r = `${Sn} ${k}`)),
				e.$$.dirty & 1048576 && n(2, (l = `${Nn} ${B}`));
		}),
		(t = we(t)),
		[g, v, l, r, s, a, o, i, A, O, S, T, b, u, m, R, F, D, L, k, B, h, E]
	);
}
class Rn extends He {
	constructor(t) {
		super(),
			ze(this, t, An, hn, Ue, {
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
const yn = (e) => ({}),
	it = (e) => ({}),
	Tn = (e) => ({}),
	st = (e) => ({}),
	vn = (e) => ({}),
	rt = (e) => ({}),
	Mn = (e) => ({}),
	at = (e) => ({}),
	On = (e) => ({}),
	ot = (e) => ({}),
	kn = (e) => ({}),
	lt = (e) => ({});
function ct(e) {
	let t, n, i;
	const o = e[19].header,
		a = te(o, e, e[18], lt);
	return {
		c() {
			(t = Z('header')), a && a.c(), this.h();
		},
		l(s) {
			t = K(s, 'HEADER', { id: !0, class: !0 });
			var r = Y(t);
			a && a.l(r), r.forEach(C), this.h();
		},
		h() {
			_(t, 'id', 'shell-header'), _(t, 'class', (n = 'flex-none ' + e[8]));
		},
		m(s, r) {
			G(s, t, r), a && a.m(t, null), (i = !0);
		},
		p(s, r) {
			a && a.p && (!i || r & 262144) && ne(a, o, s, s[18], i ? se(o, s[18], r, kn) : ie(s[18]), lt),
				(!i || (r & 256 && n !== (n = 'flex-none ' + s[8]))) && _(t, 'class', n);
		},
		i(s) {
			i || (w(a, s), (i = !0));
		},
		o(s) {
			P(a, s), (i = !1);
		},
		d(s) {
			s && C(t), a && a.d(s);
		}
	};
}
function ut(e) {
	let t, n;
	const i = e[19].sidebarLeft,
		o = te(i, e, e[18], ot);
	return {
		c() {
			(t = Z('aside')), o && o.c(), this.h();
		},
		l(a) {
			t = K(a, 'ASIDE', { id: !0, class: !0 });
			var s = Y(t);
			o && o.l(s), s.forEach(C), this.h();
		},
		h() {
			_(t, 'id', 'sidebar-left'), _(t, 'class', e[7]);
		},
		m(a, s) {
			G(a, t, s), o && o.m(t, null), (n = !0);
		},
		p(a, s) {
			o && o.p && (!n || s & 262144) && ne(o, i, a, a[18], n ? se(i, a[18], s, On) : ie(a[18]), ot),
				(!n || s & 128) && _(t, 'class', a[7]);
		},
		i(a) {
			n || (w(o, a), (n = !0));
		},
		o(a) {
			P(o, a), (n = !1);
		},
		d(a) {
			a && C(t), o && o.d(a);
		}
	};
}
function ft(e) {
	let t, n, i;
	const o = e[19].pageHeader,
		a = te(o, e, e[18], at),
		s = a || wn();
	return {
		c() {
			(t = Z('header')), s && s.c(), this.h();
		},
		l(r) {
			t = K(r, 'HEADER', { id: !0, class: !0 });
			var l = Y(t);
			s && s.l(l), l.forEach(C), this.h();
		},
		h() {
			_(t, 'id', 'page-header'), _(t, 'class', (n = 'flex-none ' + e[5]));
		},
		m(r, l) {
			G(r, t, l), s && s.m(t, null), (i = !0);
		},
		p(r, l) {
			a && a.p && (!i || l & 262144) && ne(a, o, r, r[18], i ? se(o, r[18], l, Mn) : ie(r[18]), at),
				(!i || (l & 32 && n !== (n = 'flex-none ' + r[5]))) && _(t, 'class', n);
		},
		i(r) {
			i || (w(s, r), (i = !0));
		},
		o(r) {
			P(s, r), (i = !1);
		},
		d(r) {
			r && C(t), s && s.d(r);
		}
	};
}
function wn(e) {
	let t;
	return {
		c() {
			t = Tt('(slot:header)');
		},
		l(n) {
			t = vt(n, '(slot:header)');
		},
		m(n, i) {
			G(n, t, i);
		},
		d(n) {
			n && C(t);
		}
	};
}
function dt(e) {
	let t, n, i;
	const o = e[19].pageFooter,
		a = te(o, e, e[18], rt),
		s = a || In();
	return {
		c() {
			(t = Z('footer')), s && s.c(), this.h();
		},
		l(r) {
			t = K(r, 'FOOTER', { id: !0, class: !0 });
			var l = Y(t);
			s && s.l(l), l.forEach(C), this.h();
		},
		h() {
			_(t, 'id', 'page-footer'), _(t, 'class', (n = 'flex-none ' + e[3]));
		},
		m(r, l) {
			G(r, t, l), s && s.m(t, null), (i = !0);
		},
		p(r, l) {
			a && a.p && (!i || l & 262144) && ne(a, o, r, r[18], i ? se(o, r[18], l, vn) : ie(r[18]), rt),
				(!i || (l & 8 && n !== (n = 'flex-none ' + r[3]))) && _(t, 'class', n);
		},
		i(r) {
			i || (w(s, r), (i = !0));
		},
		o(r) {
			P(s, r), (i = !1);
		},
		d(r) {
			r && C(t), s && s.d(r);
		}
	};
}
function In(e) {
	let t;
	return {
		c() {
			t = Tt('(slot:footer)');
		},
		l(n) {
			t = vt(n, '(slot:footer)');
		},
		m(n, i) {
			G(n, t, i);
		},
		d(n) {
			n && C(t);
		}
	};
}
function gt(e) {
	let t, n;
	const i = e[19].sidebarRight,
		o = te(i, e, e[18], st);
	return {
		c() {
			(t = Z('aside')), o && o.c(), this.h();
		},
		l(a) {
			t = K(a, 'ASIDE', { id: !0, class: !0 });
			var s = Y(t);
			o && o.l(s), s.forEach(C), this.h();
		},
		h() {
			_(t, 'id', 'sidebar-right'), _(t, 'class', e[6]);
		},
		m(a, s) {
			G(a, t, s), o && o.m(t, null), (n = !0);
		},
		p(a, s) {
			o && o.p && (!n || s & 262144) && ne(o, i, a, a[18], n ? se(i, a[18], s, Tn) : ie(a[18]), st),
				(!n || s & 64) && _(t, 'class', a[6]);
		},
		i(a) {
			n || (w(o, a), (n = !0));
		},
		o(a) {
			P(o, a), (n = !1);
		},
		d(a) {
			a && C(t), o && o.d(a);
		}
	};
}
function bt(e) {
	let t, n, i;
	const o = e[19].footer,
		a = te(o, e, e[18], it);
	return {
		c() {
			(t = Z('footer')), a && a.c(), this.h();
		},
		l(s) {
			t = K(s, 'FOOTER', { id: !0, class: !0 });
			var r = Y(t);
			a && a.l(r), r.forEach(C), this.h();
		},
		h() {
			_(t, 'id', 'shell-footer'), _(t, 'class', (n = 'flex-none ' + e[2]));
		},
		m(s, r) {
			G(s, t, r), a && a.m(t, null), (i = !0);
		},
		p(s, r) {
			a && a.p && (!i || r & 262144) && ne(a, o, s, s[18], i ? se(o, s[18], r, yn) : ie(s[18]), it),
				(!i || (r & 4 && n !== (n = 'flex-none ' + s[2]))) && _(t, 'class', n);
		},
		i(s) {
			i || (w(a, s), (i = !0));
		},
		o(s) {
			P(a, s), (i = !1);
		},
		d(s) {
			s && C(t), a && a.d(s);
		}
	};
}
function Cn(e) {
	let t,
		n,
		i,
		o,
		a,
		s,
		r,
		l,
		E,
		h,
		A,
		O,
		S,
		T,
		b,
		u = e[10].header && ct(e),
		m = e[10].sidebarLeft && ut(e),
		R = e[10].pageHeader && ft(e);
	const F = e[19].default,
		D = te(F, e, e[18], null);
	let L = e[10].pageFooter && dt(e),
		k = e[10].sidebarRight && gt(e),
		B = e[10].footer && bt(e);
	return {
		c() {
			(t = Z('div')),
				u && u.c(),
				(n = $()),
				(i = Z('div')),
				m && m.c(),
				(o = $()),
				(a = Z('div')),
				R && R.c(),
				(s = $()),
				(r = Z('main')),
				D && D.c(),
				(E = $()),
				L && L.c(),
				(A = $()),
				k && k.c(),
				(O = $()),
				B && B.c(),
				this.h();
		},
		l(g) {
			t = K(g, 'DIV', { id: !0, class: !0, 'data-testid': !0 });
			var v = Y(t);
			u && u.l(v), (n = ee(v)), (i = K(v, 'DIV', { class: !0 }));
			var y = Y(i);
			m && m.l(y), (o = ee(y)), (a = K(y, 'DIV', { id: !0, class: !0 }));
			var q = Y(a);
			R && R.l(q), (s = ee(q)), (r = K(q, 'MAIN', { id: !0, class: !0 }));
			var ue = Y(r);
			D && D.l(ue),
				ue.forEach(C),
				(E = ee(q)),
				L && L.l(q),
				q.forEach(C),
				(A = ee(y)),
				k && k.l(y),
				y.forEach(C),
				(O = ee(v)),
				B && B.l(v),
				v.forEach(C),
				this.h();
		},
		h() {
			_(r, 'id', 'page-content'),
				_(r, 'class', (l = 'flex-auto ' + e[4])),
				_(a, 'id', 'page'),
				_(a, 'class', (h = e[1] + ' ' + ht)),
				Je(a, 'scrollbar-gutter', e[0]),
				_(i, 'class', 'flex-auto ' + xn),
				_(t, 'id', 'appShell'),
				_(t, 'class', e[9]),
				_(t, 'data-testid', 'app-shell');
		},
		m(g, v) {
			G(g, t, v),
				u && u.m(t, null),
				J(t, n),
				J(t, i),
				m && m.m(i, null),
				J(i, o),
				J(i, a),
				R && R.m(a, null),
				J(a, s),
				J(a, r),
				D && D.m(r, null),
				J(a, E),
				L && L.m(a, null),
				J(i, A),
				k && k.m(i, null),
				J(t, O),
				B && B.m(t, null),
				(S = !0),
				T || ((b = ln(a, 'scroll', e[20])), (T = !0));
		},
		p(g, [v]) {
			g[10].header
				? u
					? (u.p(g, v), v & 1024 && w(u, 1))
					: ((u = ct(g)), u.c(), w(u, 1), u.m(t, n))
				: u &&
					(le(),
					P(u, 1, 1, () => {
						u = null;
					}),
					ce()),
				g[10].sidebarLeft
					? m
						? (m.p(g, v), v & 1024 && w(m, 1))
						: ((m = ut(g)), m.c(), w(m, 1), m.m(i, o))
					: m &&
						(le(),
						P(m, 1, 1, () => {
							m = null;
						}),
						ce()),
				g[10].pageHeader
					? R
						? (R.p(g, v), v & 1024 && w(R, 1))
						: ((R = ft(g)), R.c(), w(R, 1), R.m(a, s))
					: R &&
						(le(),
						P(R, 1, 1, () => {
							R = null;
						}),
						ce()),
				D &&
					D.p &&
					(!S || v & 262144) &&
					ne(D, F, g, g[18], S ? se(F, g[18], v, null) : ie(g[18]), null),
				(!S || (v & 16 && l !== (l = 'flex-auto ' + g[4]))) && _(r, 'class', l),
				g[10].pageFooter
					? L
						? (L.p(g, v), v & 1024 && w(L, 1))
						: ((L = dt(g)), L.c(), w(L, 1), L.m(a, null))
					: L &&
						(le(),
						P(L, 1, 1, () => {
							L = null;
						}),
						ce()),
				(!S || (v & 2 && h !== (h = g[1] + ' ' + ht))) && _(a, 'class', h),
				v & 1 && Je(a, 'scrollbar-gutter', g[0]),
				g[10].sidebarRight
					? k
						? (k.p(g, v), v & 1024 && w(k, 1))
						: ((k = gt(g)), k.c(), w(k, 1), k.m(i, null))
					: k &&
						(le(),
						P(k, 1, 1, () => {
							k = null;
						}),
						ce()),
				g[10].footer
					? B
						? (B.p(g, v), v & 1024 && w(B, 1))
						: ((B = bt(g)), B.c(), w(B, 1), B.m(t, null))
					: B &&
						(le(),
						P(B, 1, 1, () => {
							B = null;
						}),
						ce()),
				(!S || v & 512) && _(t, 'class', g[9]);
		},
		i(g) {
			S || (w(u), w(m), w(R), w(D, g), w(L), w(k), w(B), (S = !0));
		},
		o(g) {
			P(u), P(m), P(R), P(D, g), P(L), P(k), P(B), (S = !1);
		},
		d(g) {
			g && C(t),
				u && u.d(),
				m && m.d(),
				R && R.d(),
				D && D.d(g),
				L && L.d(),
				k && k.d(),
				B && B.d(),
				(T = !1),
				b();
		}
	};
}
const Ln = 'w-full h-full flex flex-col overflow-hidden',
	xn = 'w-full h-full flex overflow-hidden',
	ht = 'flex-1 overflow-x-hidden flex flex-col',
	Dn = 'flex-none overflow-x-hidden overflow-y-auto',
	Bn = 'flex-none overflow-x-hidden overflow-y-auto';
function Pn(e, t, n) {
	let i,
		o,
		a,
		s,
		r,
		l,
		E,
		h,
		{ $$slots: A = {}, $$scope: O } = t;
	const S = yt(A);
	let { scrollbarGutter: T = 'auto' } = t,
		{ regionPage: b = '' } = t,
		{ slotHeader: u = 'z-10' } = t,
		{ slotSidebarLeft: m = 'w-auto' } = t,
		{ slotSidebarRight: R = 'w-auto' } = t,
		{ slotPageHeader: F = '' } = t,
		{ slotPageContent: D = '' } = t,
		{ slotPageFooter: L = '' } = t,
		{ slotFooter: k = '' } = t;
	function B(g) {
		cn.call(this, e, g);
	}
	return (
		(e.$$set = (g) => {
			n(21, (t = ke(ke({}, t), we(g)))),
				'scrollbarGutter' in g && n(0, (T = g.scrollbarGutter)),
				'regionPage' in g && n(1, (b = g.regionPage)),
				'slotHeader' in g && n(11, (u = g.slotHeader)),
				'slotSidebarLeft' in g && n(12, (m = g.slotSidebarLeft)),
				'slotSidebarRight' in g && n(13, (R = g.slotSidebarRight)),
				'slotPageHeader' in g && n(14, (F = g.slotPageHeader)),
				'slotPageContent' in g && n(15, (D = g.slotPageContent)),
				'slotPageFooter' in g && n(16, (L = g.slotPageFooter)),
				'slotFooter' in g && n(17, (k = g.slotFooter)),
				'$$scope' in g && n(18, (O = g.$$scope));
		}),
		(e.$$.update = () => {
			n(9, (i = `${Ln} ${t.class ?? ''}`)),
				e.$$.dirty & 2048 && n(8, (o = `${u}`)),
				e.$$.dirty & 4096 && n(7, (a = `${Dn} ${m}`)),
				e.$$.dirty & 8192 && n(6, (s = `${Bn} ${R}`)),
				e.$$.dirty & 16384 && n(5, (r = `${F}`)),
				e.$$.dirty & 32768 && n(4, (l = `${D}`)),
				e.$$.dirty & 65536 && n(3, (E = `${L}`)),
				e.$$.dirty & 131072 && n(2, (h = `${k}`));
		}),
		(t = we(t)),
		[T, b, h, E, l, r, s, a, o, i, S, u, m, R, F, D, L, k, O, A, B]
	);
}
class Un extends He {
	constructor(t) {
		super(),
			ze(this, t, Pn, Cn, Ue, {
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
function Hn(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function Ct(e) {
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
				i = typeof n;
			(i === 'object' || i === 'function') && !Object.isFrozen(n) && Ct(n);
		}),
		e
	);
}
class _t {
	constructor(t) {
		t.data === void 0 && (t.data = {}), (this.data = t.data), (this.isMatchIgnored = !1);
	}
	ignoreMatch() {
		this.isMatchIgnored = !0;
	}
}
function Lt(e) {
	return e
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;');
}
function de(e, ...t) {
	const n = Object.create(null);
	for (const i in e) n[i] = e[i];
	return (
		t.forEach(function (i) {
			for (const o in i) n[o] = i[o];
		}),
		n
	);
}
const zn = '</span>',
	pt = (e) => !!e.scope,
	Fn = (e, { prefix: t }) => {
		if (e.startsWith('language:')) return e.replace('language:', 'language-');
		if (e.includes('.')) {
			const n = e.split('.');
			return [`${t}${n.shift()}`, ...n.map((i, o) => `${i}${'_'.repeat(o + 1)}`)].join(' ');
		}
		return `${t}${e}`;
	};
class Gn {
	constructor(t, n) {
		(this.buffer = ''), (this.classPrefix = n.classPrefix), t.walk(this);
	}
	addText(t) {
		this.buffer += Lt(t);
	}
	openNode(t) {
		if (!pt(t)) return;
		const n = Fn(t.scope, { prefix: this.classPrefix });
		this.span(n);
	}
	closeNode(t) {
		pt(t) && (this.buffer += zn);
	}
	value() {
		return this.buffer;
	}
	span(t) {
		this.buffer += `<span class="${t}">`;
	}
}
const Et = (e = {}) => {
	const t = { children: [] };
	return Object.assign(t, e), t;
};
class Fe {
	constructor() {
		(this.rootNode = Et()), (this.stack = [this.rootNode]);
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
		const n = Et({ scope: t });
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
					(t.openNode(n), n.children.forEach((i) => this._walk(t, i)), t.closeNode(n)),
			t
		);
	}
	static _collapse(t) {
		typeof t != 'string' &&
			t.children &&
			(t.children.every((n) => typeof n == 'string')
				? (t.children = [t.children.join('')])
				: t.children.forEach((n) => {
						Fe._collapse(n);
					}));
	}
}
class Zn extends Fe {
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
		const i = t.root;
		n && (i.scope = `language:${n}`), this.add(i);
	}
	toHTML() {
		return new Gn(this, this.options).value();
	}
	finalize() {
		return this.closeAllNodes(), !0;
	}
}
function Re(e) {
	return e ? (typeof e == 'string' ? e : e.source) : null;
}
function xt(e) {
	return _e('(?=', e, ')');
}
function Kn(e) {
	return _e('(?:', e, ')*');
}
function Wn(e) {
	return _e('(?:', e, ')?');
}
function _e(...e) {
	return e.map((n) => Re(n)).join('');
}
function Xn(e) {
	const t = e[e.length - 1];
	return typeof t == 'object' && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function Ge(...e) {
	return '(' + (Xn(e).capture ? '' : '?:') + e.map((i) => Re(i)).join('|') + ')';
}
function Dt(e) {
	return new RegExp(e.toString() + '|').exec('').length - 1;
}
function jn(e, t) {
	const n = e && e.exec(t);
	return n && n.index === 0;
}
const Yn = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Ze(e, { joinWith: t }) {
	let n = 0;
	return e
		.map((i) => {
			n += 1;
			const o = n;
			let a = Re(i),
				s = '';
			for (; a.length > 0; ) {
				const r = Yn.exec(a);
				if (!r) {
					s += a;
					break;
				}
				(s += a.substring(0, r.index)),
					(a = a.substring(r.index + r[0].length)),
					r[0][0] === '\\' && r[1]
						? (s += '\\' + String(Number(r[1]) + o))
						: ((s += r[0]), r[0] === '(' && n++);
			}
			return s;
		})
		.map((i) => `(${i})`)
		.join(t);
}
const Vn = /\b\B/,
	Bt = '[a-zA-Z]\\w*',
	Ke = '[a-zA-Z_]\\w*',
	Pt = '\\b\\d+(\\.\\d+)?',
	Ut = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
	Ht = '\\b(0b[01]+)',
	Jn =
		'!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
	qn = (e = {}) => {
		const t = /^#![ ]*\//;
		return (
			e.binary && (e.begin = _e(t, /.*\b/, e.binary, /\b.*/)),
			de(
				{
					scope: 'meta',
					begin: t,
					end: /$/,
					relevance: 0,
					'on:begin': (n, i) => {
						n.index !== 0 && i.ignoreMatch();
					}
				},
				e
			)
		);
	},
	ye = { begin: '\\\\[\\s\\S]', relevance: 0 },
	Qn = { scope: 'string', begin: "'", end: "'", illegal: '\\n', contains: [ye] },
	$n = { scope: 'string', begin: '"', end: '"', illegal: '\\n', contains: [ye] },
	ei = {
		begin:
			/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
	},
	Le = function (e, t, n = {}) {
		const i = de({ scope: 'comment', begin: e, end: t, contains: [] }, n);
		i.contains.push({
			scope: 'doctag',
			begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0
		});
		const o = Ge(
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
		return i.contains.push({ begin: _e(/[ ]+/, '(', o, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), i;
	},
	ti = Le('//', '$'),
	ni = Le('/\\*', '\\*/'),
	ii = Le('#', '$'),
	si = { scope: 'number', begin: Pt, relevance: 0 },
	ri = { scope: 'number', begin: Ut, relevance: 0 },
	ai = { scope: 'number', begin: Ht, relevance: 0 },
	oi = {
		scope: 'regexp',
		begin: /\/(?=[^/\n]*\/)/,
		end: /\/[gimuy]*/,
		contains: [ye, { begin: /\[/, end: /\]/, relevance: 0, contains: [ye] }]
	},
	li = { scope: 'title', begin: Bt, relevance: 0 },
	ci = { scope: 'title', begin: Ke, relevance: 0 },
	ui = { begin: '\\.\\s*' + Ke, relevance: 0 },
	fi = function (e) {
		return Object.assign(e, {
			'on:begin': (t, n) => {
				n.data._beginMatch = t[1];
			},
			'on:end': (t, n) => {
				n.data._beginMatch !== t[1] && n.ignoreMatch();
			}
		});
	};
var Oe = Object.freeze({
	__proto__: null,
	APOS_STRING_MODE: Qn,
	BACKSLASH_ESCAPE: ye,
	BINARY_NUMBER_MODE: ai,
	BINARY_NUMBER_RE: Ht,
	COMMENT: Le,
	C_BLOCK_COMMENT_MODE: ni,
	C_LINE_COMMENT_MODE: ti,
	C_NUMBER_MODE: ri,
	C_NUMBER_RE: Ut,
	END_SAME_AS_BEGIN: fi,
	HASH_COMMENT_MODE: ii,
	IDENT_RE: Bt,
	MATCH_NOTHING_RE: Vn,
	METHOD_GUARD: ui,
	NUMBER_MODE: si,
	NUMBER_RE: Pt,
	PHRASAL_WORDS_MODE: ei,
	QUOTE_STRING_MODE: $n,
	REGEXP_MODE: oi,
	RE_STARTERS_RE: Jn,
	SHEBANG: qn,
	TITLE_MODE: li,
	UNDERSCORE_IDENT_RE: Ke,
	UNDERSCORE_TITLE_MODE: ci
});
function di(e, t) {
	e.input[e.index - 1] === '.' && t.ignoreMatch();
}
function gi(e, t) {
	e.className !== void 0 && ((e.scope = e.className), delete e.className);
}
function bi(e, t) {
	t &&
		e.beginKeywords &&
		((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
		(e.__beforeBegin = di),
		(e.keywords = e.keywords || e.beginKeywords),
		delete e.beginKeywords,
		e.relevance === void 0 && (e.relevance = 0));
}
function hi(e, t) {
	Array.isArray(e.illegal) && (e.illegal = Ge(...e.illegal));
}
function _i(e, t) {
	if (e.match) {
		if (e.begin || e.end) throw new Error('begin & end are not supported with match');
		(e.begin = e.match), delete e.match;
	}
}
function pi(e, t) {
	e.relevance === void 0 && (e.relevance = 1);
}
const Ei = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw new Error('beforeMatch cannot be used with starts');
		const n = Object.assign({}, e);
		Object.keys(e).forEach((i) => {
			delete e[i];
		}),
			(e.keywords = n.keywords),
			(e.begin = _e(n.beforeMatch, xt(n.begin))),
			(e.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }),
			(e.relevance = 0),
			delete n.beforeMatch;
	},
	mi = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
	Si = 'keyword';
function zt(e, t, n = Si) {
	const i = Object.create(null);
	return (
		typeof e == 'string'
			? o(n, e.split(' '))
			: Array.isArray(e)
				? o(n, e)
				: Object.keys(e).forEach(function (a) {
						Object.assign(i, zt(e[a], t, a));
					}),
		i
	);
	function o(a, s) {
		t && (s = s.map((r) => r.toLowerCase())),
			s.forEach(function (r) {
				const l = r.split('|');
				i[l[0]] = [a, Ni(l[0], l[1])];
			});
	}
}
function Ni(e, t) {
	return t ? Number(t) : Ai(e) ? 0 : 1;
}
function Ai(e) {
	return mi.includes(e.toLowerCase());
}
const mt = {},
	he = (e) => {
		console.error(e);
	},
	St = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	},
	pe = (e, t) => {
		mt[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), (mt[`${e}/${t}`] = !0));
	},
	Ie = new Error();
function Ft(e, t, { key: n }) {
	let i = 0;
	const o = e[n],
		a = {},
		s = {};
	for (let r = 1; r <= t.length; r++) (s[r + i] = o[r]), (a[r + i] = !0), (i += Dt(t[r - 1]));
	(e[n] = s), (e[n]._emit = a), (e[n]._multi = !0);
}
function Ri(e) {
	if (Array.isArray(e.begin)) {
		if (e.skip || e.excludeBegin || e.returnBegin)
			throw (he('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), Ie);
		if (typeof e.beginScope != 'object' || e.beginScope === null)
			throw (he('beginScope must be object'), Ie);
		Ft(e, e.begin, { key: 'beginScope' }), (e.begin = Ze(e.begin, { joinWith: '' }));
	}
}
function yi(e) {
	if (Array.isArray(e.end)) {
		if (e.skip || e.excludeEnd || e.returnEnd)
			throw (he('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Ie);
		if (typeof e.endScope != 'object' || e.endScope === null)
			throw (he('endScope must be object'), Ie);
		Ft(e, e.end, { key: 'endScope' }), (e.end = Ze(e.end, { joinWith: '' }));
	}
}
function Ti(e) {
	e.scope &&
		typeof e.scope == 'object' &&
		e.scope !== null &&
		((e.beginScope = e.scope), delete e.scope);
}
function vi(e) {
	Ti(e),
		typeof e.beginScope == 'string' && (e.beginScope = { _wrap: e.beginScope }),
		typeof e.endScope == 'string' && (e.endScope = { _wrap: e.endScope }),
		Ri(e),
		yi(e);
}
function Mi(e) {
	function t(s, r) {
		return new RegExp(
			Re(s),
			'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (r ? 'g' : '')
		);
	}
	class n {
		constructor() {
			(this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
		}
		addRule(r, l) {
			(l.position = this.position++),
				(this.matchIndexes[this.matchAt] = l),
				this.regexes.push([l, r]),
				(this.matchAt += Dt(r) + 1);
		}
		compile() {
			this.regexes.length === 0 && (this.exec = () => null);
			const r = this.regexes.map((l) => l[1]);
			(this.matcherRe = t(Ze(r, { joinWith: '|' }), !0)), (this.lastIndex = 0);
		}
		exec(r) {
			this.matcherRe.lastIndex = this.lastIndex;
			const l = this.matcherRe.exec(r);
			if (!l) return null;
			const E = l.findIndex((A, O) => O > 0 && A !== void 0),
				h = this.matchIndexes[E];
			return l.splice(0, E), Object.assign(l, h);
		}
	}
	class i {
		constructor() {
			(this.rules = []),
				(this.multiRegexes = []),
				(this.count = 0),
				(this.lastIndex = 0),
				(this.regexIndex = 0);
		}
		getMatcher(r) {
			if (this.multiRegexes[r]) return this.multiRegexes[r];
			const l = new n();
			return (
				this.rules.slice(r).forEach(([E, h]) => l.addRule(E, h)),
				l.compile(),
				(this.multiRegexes[r] = l),
				l
			);
		}
		resumingScanAtSamePosition() {
			return this.regexIndex !== 0;
		}
		considerAll() {
			this.regexIndex = 0;
		}
		addRule(r, l) {
			this.rules.push([r, l]), l.type === 'begin' && this.count++;
		}
		exec(r) {
			const l = this.getMatcher(this.regexIndex);
			l.lastIndex = this.lastIndex;
			let E = l.exec(r);
			if (this.resumingScanAtSamePosition() && !(E && E.index === this.lastIndex)) {
				const h = this.getMatcher(0);
				(h.lastIndex = this.lastIndex + 1), (E = h.exec(r));
			}
			return (
				E &&
					((this.regexIndex += E.position + 1),
					this.regexIndex === this.count && this.considerAll()),
				E
			);
		}
	}
	function o(s) {
		const r = new i();
		return (
			s.contains.forEach((l) => r.addRule(l.begin, { rule: l, type: 'begin' })),
			s.terminatorEnd && r.addRule(s.terminatorEnd, { type: 'end' }),
			s.illegal && r.addRule(s.illegal, { type: 'illegal' }),
			r
		);
	}
	function a(s, r) {
		const l = s;
		if (s.isCompiled) return l;
		[gi, _i, vi, Ei].forEach((h) => h(s, r)),
			e.compilerExtensions.forEach((h) => h(s, r)),
			(s.__beforeBegin = null),
			[bi, hi, pi].forEach((h) => h(s, r)),
			(s.isCompiled = !0);
		let E = null;
		return (
			typeof s.keywords == 'object' &&
				s.keywords.$pattern &&
				((s.keywords = Object.assign({}, s.keywords)),
				(E = s.keywords.$pattern),
				delete s.keywords.$pattern),
			(E = E || /\w+/),
			s.keywords && (s.keywords = zt(s.keywords, e.case_insensitive)),
			(l.keywordPatternRe = t(E, !0)),
			r &&
				(s.begin || (s.begin = /\B|\b/),
				(l.beginRe = t(l.begin)),
				!s.end && !s.endsWithParent && (s.end = /\B|\b/),
				s.end && (l.endRe = t(l.end)),
				(l.terminatorEnd = Re(l.end) || ''),
				s.endsWithParent &&
					r.terminatorEnd &&
					(l.terminatorEnd += (s.end ? '|' : '') + r.terminatorEnd)),
			s.illegal && (l.illegalRe = t(s.illegal)),
			s.contains || (s.contains = []),
			(s.contains = [].concat(
				...s.contains.map(function (h) {
					return Oi(h === 'self' ? s : h);
				})
			)),
			s.contains.forEach(function (h) {
				a(h, l);
			}),
			s.starts && a(s.starts, r),
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
	return (e.classNameAliases = de(e.classNameAliases || {})), a(e);
}
function Gt(e) {
	return e ? e.endsWithParent || Gt(e.starts) : !1;
}
function Oi(e) {
	return (
		e.variants &&
			!e.cachedVariants &&
			(e.cachedVariants = e.variants.map(function (t) {
				return de(e, { variants: null }, t);
			})),
		e.cachedVariants
			? e.cachedVariants
			: Gt(e)
				? de(e, { starts: e.starts ? de(e.starts) : null })
				: Object.isFrozen(e)
					? de(e)
					: e
	);
}
var ki = '11.9.0';
class wi extends Error {
	constructor(t, n) {
		super(t), (this.name = 'HTMLInjectionError'), (this.html = n);
	}
}
const Pe = Lt,
	Nt = de,
	At = Symbol('nomatch'),
	Ii = 7,
	Zt = function (e) {
		const t = Object.create(null),
			n = Object.create(null),
			i = [];
		let o = !0;
		const a = "Could not find the language '{}', did you forget to load/include a language module?",
			s = { disableAutodetect: !0, name: 'Plain text', contains: [] };
		let r = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: 'hljs-',
			cssSelector: 'pre code',
			languages: null,
			__emitter: Zn
		};
		function l(c) {
			return r.noHighlightRe.test(c);
		}
		function E(c) {
			let f = c.className + ' ';
			f += c.parentNode ? c.parentNode.className : '';
			const N = r.languageDetectRe.exec(f);
			if (N) {
				const x = v(N[1]);
				return (
					x ||
						(St(a.replace('{}', N[1])), St('Falling back to no-highlight mode for this block.', c)),
					x ? N[1] : 'no-highlight'
				);
			}
			return f.split(/\s+/).find((x) => l(x) || v(x));
		}
		function h(c, f, N) {
			let x = '',
				U = '';
			typeof f == 'object'
				? ((x = c), (N = f.ignoreIllegals), (U = f.language))
				: (pe('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
					pe(
						'10.7.0',
						`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
					),
					(U = c),
					(x = f)),
				N === void 0 && (N = !0);
			const W = { code: x, language: U };
			fe('before:highlight', W);
			const V = W.result ? W.result : A(W.language, W.code, N);
			return (V.code = W.code), fe('after:highlight', V), V;
		}
		function A(c, f, N, x) {
			const U = Object.create(null);
			function W(d, p) {
				return d.keywords[p];
			}
			function V() {
				if (!M.keywords) {
					X.addText(z);
					return;
				}
				let d = 0;
				M.keywordPatternRe.lastIndex = 0;
				let p = M.keywordPatternRe.exec(z),
					I = '';
				for (; p; ) {
					I += z.substring(d, p.index);
					const H = ae.case_insensitive ? p[0].toLowerCase() : p[0],
						j = W(M, H);
					if (j) {
						const [oe, an] = j;
						if (
							(X.addText(I),
							(I = ''),
							(U[H] = (U[H] || 0) + 1),
							U[H] <= Ii && (Me += an),
							oe.startsWith('_'))
						)
							I += p[0];
						else {
							const on = ae.classNameAliases[oe] || oe;
							re(p[0], on);
						}
					} else I += p[0];
					(d = M.keywordPatternRe.lastIndex), (p = M.keywordPatternRe.exec(z));
				}
				(I += z.substring(d)), X.addText(I);
			}
			function Te() {
				if (z === '') return;
				let d = null;
				if (typeof M.subLanguage == 'string') {
					if (!t[M.subLanguage]) {
						X.addText(z);
						return;
					}
					(d = A(M.subLanguage, z, !0, Ve[M.subLanguage])), (Ve[M.subLanguage] = d._top);
				} else d = S(z, M.subLanguage.length ? M.subLanguage : null);
				M.relevance > 0 && (Me += d.relevance), X.__addSublanguage(d._emitter, d.language);
			}
			function Q() {
				M.subLanguage != null ? Te() : V(), (z = '');
			}
			function re(d, p) {
				d !== '' && (X.startScope(p), X.addText(d), X.endScope());
			}
			function We(d, p) {
				let I = 1;
				const H = p.length - 1;
				for (; I <= H; ) {
					if (!d._emit[I]) {
						I++;
						continue;
					}
					const j = ae.classNameAliases[d[I]] || d[I],
						oe = p[I];
					j ? re(oe, j) : ((z = oe), V(), (z = '')), I++;
				}
			}
			function Xe(d, p) {
				return (
					d.scope &&
						typeof d.scope == 'string' &&
						X.openNode(ae.classNameAliases[d.scope] || d.scope),
					d.beginScope &&
						(d.beginScope._wrap
							? (re(z, ae.classNameAliases[d.beginScope._wrap] || d.beginScope._wrap), (z = ''))
							: d.beginScope._multi && (We(d.beginScope, p), (z = ''))),
					(M = Object.create(d, { parent: { value: M } })),
					M
				);
			}
			function je(d, p, I) {
				let H = jn(d.endRe, I);
				if (H) {
					if (d['on:end']) {
						const j = new _t(d);
						d['on:end'](p, j), j.isMatchIgnored && (H = !1);
					}
					if (H) {
						for (; d.endsParent && d.parent; ) d = d.parent;
						return d;
					}
				}
				if (d.endsWithParent) return je(d.parent, p, I);
			}
			function en(d) {
				return M.matcher.regexIndex === 0 ? ((z += d[0]), 1) : ((Be = !0), 0);
			}
			function tn(d) {
				const p = d[0],
					I = d.rule,
					H = new _t(I),
					j = [I.__beforeBegin, I['on:begin']];
				for (const oe of j) if (oe && (oe(d, H), H.isMatchIgnored)) return en(p);
				return (
					I.skip
						? (z += p)
						: (I.excludeBegin && (z += p), Q(), !I.returnBegin && !I.excludeBegin && (z = p)),
					Xe(I, d),
					I.returnBegin ? 0 : p.length
				);
			}
			function nn(d) {
				const p = d[0],
					I = f.substring(d.index),
					H = je(M, d, I);
				if (!H) return At;
				const j = M;
				M.endScope && M.endScope._wrap
					? (Q(), re(p, M.endScope._wrap))
					: M.endScope && M.endScope._multi
						? (Q(), We(M.endScope, d))
						: j.skip
							? (z += p)
							: (j.returnEnd || j.excludeEnd || (z += p), Q(), j.excludeEnd && (z = p));
				do
					M.scope && X.closeNode(),
						!M.skip && !M.subLanguage && (Me += M.relevance),
						(M = M.parent);
				while (M !== H.parent);
				return H.starts && Xe(H.starts, d), j.returnEnd ? 0 : p.length;
			}
			function sn() {
				const d = [];
				for (let p = M; p !== ae; p = p.parent) p.scope && d.unshift(p.scope);
				d.forEach((p) => X.openNode(p));
			}
			let ve = {};
			function Ye(d, p) {
				const I = p && p[0];
				if (((z += d), I == null)) return Q(), 0;
				if (ve.type === 'begin' && p.type === 'end' && ve.index === p.index && I === '') {
					if (((z += f.slice(p.index, p.index + 1)), !o)) {
						const H = new Error(`0 width match regex (${c})`);
						throw ((H.languageName = c), (H.badRule = ve.rule), H);
					}
					return 1;
				}
				if (((ve = p), p.type === 'begin')) return tn(p);
				if (p.type === 'illegal' && !N) {
					const H = new Error(
						'Illegal lexeme "' + I + '" for mode "' + (M.scope || '<unnamed>') + '"'
					);
					throw ((H.mode = M), H);
				} else if (p.type === 'end') {
					const H = nn(p);
					if (H !== At) return H;
				}
				if (p.type === 'illegal' && I === '') return 1;
				if (De > 1e5 && De > p.index * 3)
					throw new Error('potential infinite loop, way more iterations than matches');
				return (z += I), I.length;
			}
			const ae = v(c);
			if (!ae) throw (he(a.replace('{}', c)), new Error('Unknown language: "' + c + '"'));
			const rn = Mi(ae);
			let xe = '',
				M = x || rn;
			const Ve = {},
				X = new r.__emitter(r);
			sn();
			let z = '',
				Me = 0,
				be = 0,
				De = 0,
				Be = !1;
			try {
				if (ae.__emitTokens) ae.__emitTokens(f, X);
				else {
					for (M.matcher.considerAll(); ; ) {
						De++, Be ? (Be = !1) : M.matcher.considerAll(), (M.matcher.lastIndex = be);
						const d = M.matcher.exec(f);
						if (!d) break;
						const p = f.substring(be, d.index),
							I = Ye(p, d);
						be = d.index + I;
					}
					Ye(f.substring(be));
				}
				return (
					X.finalize(),
					(xe = X.toHTML()),
					{ language: c, value: xe, relevance: Me, illegal: !1, _emitter: X, _top: M }
				);
			} catch (d) {
				if (d.message && d.message.includes('Illegal'))
					return {
						language: c,
						value: Pe(f),
						illegal: !0,
						relevance: 0,
						_illegalBy: {
							message: d.message,
							index: be,
							context: f.slice(be - 100, be + 100),
							mode: d.mode,
							resultSoFar: xe
						},
						_emitter: X
					};
				if (o)
					return {
						language: c,
						value: Pe(f),
						illegal: !1,
						relevance: 0,
						errorRaised: d,
						_emitter: X,
						_top: M
					};
				throw d;
			}
		}
		function O(c) {
			const f = { value: Pe(c), illegal: !1, relevance: 0, _top: s, _emitter: new r.__emitter(r) };
			return f._emitter.addText(c), f;
		}
		function S(c, f) {
			f = f || r.languages || Object.keys(t);
			const N = O(c),
				x = f
					.filter(v)
					.filter(q)
					.map((Q) => A(Q, c, !1));
			x.unshift(N);
			const U = x.sort((Q, re) => {
					if (Q.relevance !== re.relevance) return re.relevance - Q.relevance;
					if (Q.language && re.language) {
						if (v(Q.language).supersetOf === re.language) return 1;
						if (v(re.language).supersetOf === Q.language) return -1;
					}
					return 0;
				}),
				[W, V] = U,
				Te = W;
			return (Te.secondBest = V), Te;
		}
		function T(c, f, N) {
			const x = (f && n[f]) || N;
			c.classList.add('hljs'), c.classList.add(`language-${x}`);
		}
		function b(c) {
			let f = null;
			const N = E(c);
			if (l(N)) return;
			if ((fe('before:highlightElement', { el: c, language: N }), c.dataset.highlighted)) {
				console.log(
					'Element previously highlighted. To highlight again, first unset `dataset.highlighted`.',
					c
				);
				return;
			}
			if (
				c.children.length > 0 &&
				(r.ignoreUnescapedHTML ||
					(console.warn(
						'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'
					),
					console.warn('https://github.com/highlightjs/highlight.js/wiki/security'),
					console.warn('The element with unescaped HTML:'),
					console.warn(c)),
				r.throwUnescapedHTML)
			)
				throw new wi('One of your code blocks includes unescaped HTML.', c.innerHTML);
			f = c;
			const x = f.textContent,
				U = N ? h(x, { language: N, ignoreIllegals: !0 }) : S(x);
			(c.innerHTML = U.value),
				(c.dataset.highlighted = 'yes'),
				T(c, N, U.language),
				(c.result = { language: U.language, re: U.relevance, relevance: U.relevance }),
				U.secondBest &&
					(c.secondBest = { language: U.secondBest.language, relevance: U.secondBest.relevance }),
				fe('after:highlightElement', { el: c, result: U, text: x });
		}
		function u(c) {
			r = Nt(r, c);
		}
		const m = () => {
			D(), pe('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
		};
		function R() {
			D(), pe('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
		}
		let F = !1;
		function D() {
			if (document.readyState === 'loading') {
				F = !0;
				return;
			}
			document.querySelectorAll(r.cssSelector).forEach(b);
		}
		function L() {
			F && D();
		}
		typeof window < 'u' &&
			window.addEventListener &&
			window.addEventListener('DOMContentLoaded', L, !1);
		function k(c, f) {
			let N = null;
			try {
				N = f(e);
			} catch (x) {
				if ((he("Language definition for '{}' could not be registered.".replace('{}', c)), o))
					he(x);
				else throw x;
				N = s;
			}
			N.name || (N.name = c),
				(t[c] = N),
				(N.rawDefinition = f.bind(null, e)),
				N.aliases && y(N.aliases, { languageName: c });
		}
		function B(c) {
			delete t[c];
			for (const f of Object.keys(n)) n[f] === c && delete n[f];
		}
		function g() {
			return Object.keys(t);
		}
		function v(c) {
			return (c = (c || '').toLowerCase()), t[c] || t[n[c]];
		}
		function y(c, { languageName: f }) {
			typeof c == 'string' && (c = [c]),
				c.forEach((N) => {
					n[N.toLowerCase()] = f;
				});
		}
		function q(c) {
			const f = v(c);
			return f && !f.disableAutodetect;
		}
		function ue(c) {
			c['before:highlightBlock'] &&
				!c['before:highlightElement'] &&
				(c['before:highlightElement'] = (f) => {
					c['before:highlightBlock'](Object.assign({ block: f.el }, f));
				}),
				c['after:highlightBlock'] &&
					!c['after:highlightElement'] &&
					(c['after:highlightElement'] = (f) => {
						c['after:highlightBlock'](Object.assign({ block: f.el }, f));
					});
		}
		function Se(c) {
			ue(c), i.push(c);
		}
		function Ne(c) {
			const f = i.indexOf(c);
			f !== -1 && i.splice(f, 1);
		}
		function fe(c, f) {
			const N = c;
			i.forEach(function (x) {
				x[N] && x[N](f);
			});
		}
		function ge(c) {
			return (
				pe('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
				pe('10.7.0', 'Please use highlightElement now.'),
				b(c)
			);
		}
		Object.assign(e, {
			highlight: h,
			highlightAuto: S,
			highlightAll: D,
			highlightElement: b,
			highlightBlock: ge,
			configure: u,
			initHighlighting: m,
			initHighlightingOnLoad: R,
			registerLanguage: k,
			unregisterLanguage: B,
			listLanguages: g,
			getLanguage: v,
			registerAliases: y,
			autoDetection: q,
			inherit: Nt,
			addPlugin: Se,
			removePlugin: Ne
		}),
			(e.debugMode = function () {
				o = !1;
			}),
			(e.safeMode = function () {
				o = !0;
			}),
			(e.versionString = ki),
			(e.regex = { concat: _e, lookahead: xt, either: Ge, optional: Wn, anyNumberOfTimes: Kn });
		for (const c in Oe) typeof Oe[c] == 'object' && Ct(Oe[c]);
		return Object.assign(e, Oe), e;
	},
	me = Zt({});
me.newInstance = () => Zt({});
var Ci = me;
me.HighlightJS = me;
me.default = me;
const Ae = Hn(Ci);
function Li(e) {
	const t = e.regex,
		n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
		i = /[\p{L}0-9._:-]+/u,
		o = { className: 'symbol', begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
		a = {
			begin: /\s/,
			contains: [{ className: 'keyword', begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }]
		},
		s = e.inherit(a, { begin: /\(/, end: /\)/ }),
		r = e.inherit(e.APOS_STRING_MODE, { className: 'string' }),
		l = e.inherit(e.QUOTE_STRING_MODE, { className: 'string' }),
		E = {
			endsWithParent: !0,
			illegal: /</,
			relevance: 0,
			contains: [
				{ className: 'attr', begin: i, relevance: 0 },
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
					a,
					l,
					r,
					s,
					{
						begin: /\[/,
						end: /\]/,
						contains: [{ className: 'meta', begin: /<![a-z]/, end: />/, contains: [a, s, l, r] }]
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
				contains: [E],
				starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ['css', 'xml'] }
			},
			{
				className: 'tag',
				begin: /<script(?=\s|>)/,
				end: />/,
				keywords: { name: 'script' },
				contains: [E],
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
				contains: [{ className: 'name', begin: n, relevance: 0, starts: E }]
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
const xi = (e) => ({
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
	Di = [
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
	Bi = [
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
	Pi = [
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
	Ui = [
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
	Hi = [
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
function zi(e) {
	const t = e.regex,
		n = xi(e),
		i = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
		o = 'and or not only',
		a = /@-?\w[\w]*(-\w+)*/,
		s = '[a-zA-Z-][a-zA-Z0-9_-]*',
		r = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
	return {
		name: 'CSS',
		case_insensitive: !0,
		illegal: /[=|'\$]/,
		keywords: { keyframePosition: 'from to' },
		classNameAliases: { keyframePosition: 'selector-tag' },
		contains: [
			n.BLOCK_COMMENT,
			i,
			n.CSS_NUMBER_MODE,
			{ className: 'selector-id', begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
			{ className: 'selector-class', begin: '\\.' + s, relevance: 0 },
			n.ATTRIBUTE_SELECTOR_MODE,
			{
				className: 'selector-pseudo',
				variants: [{ begin: ':(' + Pi.join('|') + ')' }, { begin: ':(:)?(' + Ui.join('|') + ')' }]
			},
			n.CSS_VARIABLE,
			{ className: 'attribute', begin: '\\b(' + Hi.join('|') + ')\\b' },
			{
				begin: /:/,
				end: /[;}{]/,
				contains: [
					n.BLOCK_COMMENT,
					n.HEXCOLOR,
					n.IMPORTANT,
					n.CSS_NUMBER_MODE,
					...r,
					{
						begin: /(url|data-uri)\(/,
						end: /\)/,
						relevance: 0,
						keywords: { built_in: 'url data-uri' },
						contains: [
							...r,
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
					{ className: 'keyword', begin: a },
					{
						begin: /\s/,
						endsWithParent: !0,
						excludeEnd: !0,
						relevance: 0,
						keywords: { $pattern: /[a-z-]+/, keyword: o, attribute: Bi.join(' ') },
						contains: [{ begin: /[a-z-]+(?=:)/, className: 'attribute' }, ...r, n.CSS_NUMBER_MODE]
					}
				]
			},
			{ className: 'selector-tag', begin: '\\b(' + Di.join('|') + ')\\b' }
		]
	};
}
const Rt = '[A-Za-z$_][0-9A-Za-z$_]*',
	Fi = [
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
	Gi = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
	Kt = [
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
	Wt = [
		'Error',
		'EvalError',
		'InternalError',
		'RangeError',
		'ReferenceError',
		'SyntaxError',
		'TypeError',
		'URIError'
	],
	Xt = [
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
	Zi = [
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
	Ki = [].concat(Xt, Kt, Wt);
function Wi(e) {
	const t = e.regex,
		n = (f, { after: N }) => {
			const x = '</' + f[0].slice(1);
			return f.input.indexOf(x, N) !== -1;
		},
		i = Rt,
		o = { begin: '<>', end: '</>' },
		a = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		s = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (f, N) => {
				const x = f[0].length + f.index,
					U = f.input[x];
				if (U === '<' || U === ',') {
					N.ignoreMatch();
					return;
				}
				U === '>' && (n(f, { after: x }) || N.ignoreMatch());
				let W;
				const V = f.input.substring(x);
				if ((W = V.match(/^\s*=/))) {
					N.ignoreMatch();
					return;
				}
				if ((W = V.match(/^\s+extends\s+/)) && W.index === 0) {
					N.ignoreMatch();
					return;
				}
			}
		},
		r = { $pattern: Rt, keyword: Fi, literal: Gi, built_in: Ki, 'variable.language': Zi },
		l = '[0-9](_?[0-9])*',
		E = `\\.(${l})`,
		h = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
		A = {
			className: 'number',
			variants: [
				{ begin: `(\\b(${h})((${E})|\\.)?|(${E}))[eE][+-]?(${l})\\b` },
				{ begin: `\\b(${h})\\b((${E})\\b|\\.)?|(${E})\\b` },
				{ begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
				{ begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
				{ begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
				{ begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
				{ begin: '\\b0[0-7]+n?\\b' }
			],
			relevance: 0
		},
		O = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: r, contains: [] },
		S = {
			begin: 'html`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, O], subLanguage: 'xml' }
		},
		T = {
			begin: 'css`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, O], subLanguage: 'css' }
		},
		b = {
			begin: 'gql`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, O], subLanguage: 'graphql' }
		},
		u = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, O] },
		R = {
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
								{ className: 'variable', begin: i + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
								{ begin: /(?=[^\n])\s/, relevance: 0 }
							]
						}
					]
				}),
				e.C_BLOCK_COMMENT_MODE,
				e.C_LINE_COMMENT_MODE
			]
		},
		F = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, S, T, b, u, { match: /\$\d+/ }, A];
	O.contains = F.concat({ begin: /\{/, end: /\}/, keywords: r, contains: ['self'].concat(F) });
	const D = [].concat(R, O.contains),
		L = D.concat([{ begin: /\(/, end: /\)/, keywords: r, contains: ['self'].concat(D) }]),
		k = {
			className: 'params',
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: r,
			contains: L
		},
		B = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						i,
						/\s+/,
						/extends/,
						/\s+/,
						t.concat(i, '(', t.concat(/\./, i), ')*')
					],
					scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' }
				},
				{ match: [/class/, /\s+/, i], scope: { 1: 'keyword', 3: 'title.class' } }
			]
		},
		g = {
			relevance: 0,
			match: t.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: 'title.class',
			keywords: { _: [...Kt, ...Wt] }
		},
		v = {
			label: 'use_strict',
			className: 'meta',
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/
		},
		y = {
			variants: [
				{ match: [/function/, /\s+/, i, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] }
			],
			className: { 1: 'keyword', 3: 'title.function' },
			label: 'func.def',
			contains: [k],
			illegal: /%/
		},
		q = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
	function ue(f) {
		return t.concat('(?!', f.join('|'), ')');
	}
	const Se = {
			match: t.concat(/\b/, ue([...Xt, 'super', 'import']), i, t.lookahead(/\(/)),
			className: 'title.function',
			relevance: 0
		},
		Ne = {
			begin: t.concat(/\./, t.lookahead(t.concat(i, /(?![0-9A-Za-z$_(])/))),
			end: i,
			excludeBegin: !0,
			keywords: 'prototype',
			className: 'property',
			relevance: 0
		},
		fe = {
			match: [/get|set/, /\s+/, i, /(?=\()/],
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [{ begin: /\(\)/ }, k]
		},
		ge =
			'(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
			e.UNDERSCORE_IDENT_RE +
			')\\s*=>',
		c = {
			match: [/const|var|let/, /\s+/, i, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(ge)],
			keywords: 'async',
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [k]
		};
	return {
		name: 'JavaScript',
		aliases: ['js', 'jsx', 'mjs', 'cjs'],
		keywords: r,
		exports: { PARAMS_CONTAINS: L, CLASS_REFERENCE: g },
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
			v,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			S,
			T,
			b,
			u,
			R,
			{ match: /\$\d+/ },
			A,
			g,
			{ className: 'attr', begin: i + t.lookahead(':'), relevance: 0 },
			c,
			{
				begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
				keywords: 'return throw case',
				relevance: 0,
				contains: [
					R,
					e.REGEXP_MODE,
					{
						className: 'function',
						begin: ge,
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
										keywords: r,
										contains: L
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
							{ match: a },
							{ begin: s.begin, 'on:begin': s.isTrulyOpeningTag, end: s.end }
						],
						subLanguage: 'xml',
						contains: [{ begin: s.begin, end: s.end, skip: !0, contains: ['self'] }]
					}
				]
			},
			y,
			{ beginKeywords: 'while if switch catch for' },
			{
				begin:
					'\\b(?!function)' +
					e.UNDERSCORE_IDENT_RE +
					'\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
				returnBegin: !0,
				label: 'func.def',
				contains: [k, e.inherit(e.TITLE_MODE, { begin: i, className: 'title.function' })]
			},
			{ match: /\.\.\./, relevance: 0 },
			Ne,
			{ match: '\\$' + i, relevance: 0 },
			{ match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [k] },
			Se,
			q,
			B,
			fe,
			{ match: /\$[(.]/ }
		]
	};
}
const Ce = '[A-Za-z$_][0-9A-Za-z$_]*',
	jt = [
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
	Yt = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
	Vt = [
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
	Jt = [
		'Error',
		'EvalError',
		'InternalError',
		'RangeError',
		'ReferenceError',
		'SyntaxError',
		'TypeError',
		'URIError'
	],
	qt = [
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
	Qt = [
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
	$t = [].concat(qt, Vt, Jt);
function Xi(e) {
	const t = e.regex,
		n = (f, { after: N }) => {
			const x = '</' + f[0].slice(1);
			return f.input.indexOf(x, N) !== -1;
		},
		i = Ce,
		o = { begin: '<>', end: '</>' },
		a = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		s = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (f, N) => {
				const x = f[0].length + f.index,
					U = f.input[x];
				if (U === '<' || U === ',') {
					N.ignoreMatch();
					return;
				}
				U === '>' && (n(f, { after: x }) || N.ignoreMatch());
				let W;
				const V = f.input.substring(x);
				if ((W = V.match(/^\s*=/))) {
					N.ignoreMatch();
					return;
				}
				if ((W = V.match(/^\s+extends\s+/)) && W.index === 0) {
					N.ignoreMatch();
					return;
				}
			}
		},
		r = { $pattern: Ce, keyword: jt, literal: Yt, built_in: $t, 'variable.language': Qt },
		l = '[0-9](_?[0-9])*',
		E = `\\.(${l})`,
		h = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
		A = {
			className: 'number',
			variants: [
				{ begin: `(\\b(${h})((${E})|\\.)?|(${E}))[eE][+-]?(${l})\\b` },
				{ begin: `\\b(${h})\\b((${E})\\b|\\.)?|(${E})\\b` },
				{ begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
				{ begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
				{ begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
				{ begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
				{ begin: '\\b0[0-7]+n?\\b' }
			],
			relevance: 0
		},
		O = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: r, contains: [] },
		S = {
			begin: 'html`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, O], subLanguage: 'xml' }
		},
		T = {
			begin: 'css`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, O], subLanguage: 'css' }
		},
		b = {
			begin: 'gql`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, O], subLanguage: 'graphql' }
		},
		u = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, O] },
		R = {
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
								{ className: 'variable', begin: i + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
								{ begin: /(?=[^\n])\s/, relevance: 0 }
							]
						}
					]
				}),
				e.C_BLOCK_COMMENT_MODE,
				e.C_LINE_COMMENT_MODE
			]
		},
		F = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, S, T, b, u, { match: /\$\d+/ }, A];
	O.contains = F.concat({ begin: /\{/, end: /\}/, keywords: r, contains: ['self'].concat(F) });
	const D = [].concat(R, O.contains),
		L = D.concat([{ begin: /\(/, end: /\)/, keywords: r, contains: ['self'].concat(D) }]),
		k = {
			className: 'params',
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: r,
			contains: L
		},
		B = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						i,
						/\s+/,
						/extends/,
						/\s+/,
						t.concat(i, '(', t.concat(/\./, i), ')*')
					],
					scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' }
				},
				{ match: [/class/, /\s+/, i], scope: { 1: 'keyword', 3: 'title.class' } }
			]
		},
		g = {
			relevance: 0,
			match: t.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: 'title.class',
			keywords: { _: [...Vt, ...Jt] }
		},
		v = {
			label: 'use_strict',
			className: 'meta',
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/
		},
		y = {
			variants: [
				{ match: [/function/, /\s+/, i, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] }
			],
			className: { 1: 'keyword', 3: 'title.function' },
			label: 'func.def',
			contains: [k],
			illegal: /%/
		},
		q = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
	function ue(f) {
		return t.concat('(?!', f.join('|'), ')');
	}
	const Se = {
			match: t.concat(/\b/, ue([...qt, 'super', 'import']), i, t.lookahead(/\(/)),
			className: 'title.function',
			relevance: 0
		},
		Ne = {
			begin: t.concat(/\./, t.lookahead(t.concat(i, /(?![0-9A-Za-z$_(])/))),
			end: i,
			excludeBegin: !0,
			keywords: 'prototype',
			className: 'property',
			relevance: 0
		},
		fe = {
			match: [/get|set/, /\s+/, i, /(?=\()/],
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [{ begin: /\(\)/ }, k]
		},
		ge =
			'(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
			e.UNDERSCORE_IDENT_RE +
			')\\s*=>',
		c = {
			match: [/const|var|let/, /\s+/, i, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(ge)],
			keywords: 'async',
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [k]
		};
	return {
		name: 'JavaScript',
		aliases: ['js', 'jsx', 'mjs', 'cjs'],
		keywords: r,
		exports: { PARAMS_CONTAINS: L, CLASS_REFERENCE: g },
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
			v,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			S,
			T,
			b,
			u,
			R,
			{ match: /\$\d+/ },
			A,
			g,
			{ className: 'attr', begin: i + t.lookahead(':'), relevance: 0 },
			c,
			{
				begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
				keywords: 'return throw case',
				relevance: 0,
				contains: [
					R,
					e.REGEXP_MODE,
					{
						className: 'function',
						begin: ge,
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
										keywords: r,
										contains: L
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
							{ match: a },
							{ begin: s.begin, 'on:begin': s.isTrulyOpeningTag, end: s.end }
						],
						subLanguage: 'xml',
						contains: [{ begin: s.begin, end: s.end, skip: !0, contains: ['self'] }]
					}
				]
			},
			y,
			{ beginKeywords: 'while if switch catch for' },
			{
				begin:
					'\\b(?!function)' +
					e.UNDERSCORE_IDENT_RE +
					'\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
				returnBegin: !0,
				label: 'func.def',
				contains: [k, e.inherit(e.TITLE_MODE, { begin: i, className: 'title.function' })]
			},
			{ match: /\.\.\./, relevance: 0 },
			Ne,
			{ match: '\\$' + i, relevance: 0 },
			{ match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [k] },
			Se,
			q,
			B,
			fe,
			{ match: /\$[(.]/ }
		]
	};
}
function ji(e) {
	const t = Xi(e),
		n = Ce,
		i = [
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
		a = {
			beginKeywords: 'interface',
			end: /\{/,
			excludeEnd: !0,
			keywords: { keyword: 'interface extends', built_in: i },
			contains: [t.exports.CLASS_REFERENCE]
		},
		s = { className: 'meta', relevance: 10, begin: /^\s*['"]use strict['"]/ },
		r = [
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
			$pattern: Ce,
			keyword: jt.concat(r),
			literal: Yt,
			built_in: $t.concat(i),
			'variable.language': Qt
		},
		E = { className: 'meta', begin: '@' + n },
		h = (O, S, T) => {
			const b = O.contains.findIndex((u) => u.label === S);
			if (b === -1) throw new Error('can not find mode to replace');
			O.contains.splice(b, 1, T);
		};
	Object.assign(t.keywords, l),
		t.exports.PARAMS_CONTAINS.push(E),
		(t.contains = t.contains.concat([E, o, a])),
		h(t, 'shebang', e.SHEBANG()),
		h(t, 'use_strict', s);
	const A = t.contains.find((O) => O.label === 'func.def');
	return (
		(A.relevance = 0),
		Object.assign(t, { name: 'TypeScript', aliases: ['ts', 'tsx', 'mts', 'cts'] }),
		t
	);
}
function Yi(e) {
	let t;
	const n = e[0].default,
		i = te(n, e, e[1], null);
	return {
		c() {
			i && i.c();
		},
		l(o) {
			i && i.l(o);
		},
		m(o, a) {
			i && i.m(o, a), (t = !0);
		},
		p(o, a) {
			i && i.p && (!t || a & 2) && ne(i, n, o, o[1], t ? se(n, o[1], a, null) : ie(o[1]), null);
		},
		i(o) {
			t || (w(i, o), (t = !0));
		},
		o(o) {
			P(i, o), (t = !1);
		},
		d(o) {
			i && i.d(o);
		}
	};
}
function Vi(e) {
	let t,
		n = '<a href="./" rel="noreferrer">Flexilte</a>';
	return {
		c() {
			(t = Z('strong')), (t.innerHTML = n), this.h();
		},
		l(i) {
			(t = K(i, 'STRONG', { class: !0, 'data-svelte-h': !0 })),
				Ee(t) !== 'svelte-1703tna' && (t.innerHTML = n),
				this.h();
		},
		h() {
			_(t, 'class', 'text-xl uppercase');
		},
		m(i, o) {
			G(i, t, o);
		},
		p: Mt,
		d(i) {
			i && C(t);
		}
	};
}
function Ji(e) {
	let t,
		n = 'Documentation',
		i,
		o,
		a = 'Example',
		s,
		r,
		l = 'Editor',
		E,
		h,
		A = 'AI',
		O,
		S,
		T = 'GitHub';
	return {
		c() {
			(t = Z('a')),
				(t.textContent = n),
				(i = $()),
				(o = Z('a')),
				(o.textContent = a),
				(s = $()),
				(r = Z('a')),
				(r.textContent = l),
				(E = $()),
				(h = Z('a')),
				(h.textContent = A),
				(O = $()),
				(S = Z('a')),
				(S.textContent = T),
				this.h();
		},
		l(b) {
			(t = K(b, 'A', { class: !0, href: !0, rel: !0, 'data-svelte-h': !0 })),
				Ee(t) !== 'svelte-1284yz6' && (t.textContent = n),
				(i = ee(b)),
				(o = K(b, 'A', { class: !0, href: !0, rel: !0, 'data-svelte-h': !0 })),
				Ee(o) !== 'svelte-1vyj2s6' && (o.textContent = a),
				(s = ee(b)),
				(r = K(b, 'A', { class: !0, href: !0, rel: !0, 'data-svelte-h': !0 })),
				Ee(r) !== 'svelte-1l71z8m' && (r.textContent = l),
				(E = ee(b)),
				(h = K(b, 'A', { class: !0, href: !0, rel: !0, 'data-svelte-h': !0 })),
				Ee(h) !== 'svelte-1mp3i7y' && (h.textContent = A),
				(O = ee(b)),
				(S = K(b, 'A', { class: !0, href: !0, rel: !0, 'data-svelte-h': !0 })),
				Ee(S) !== 'svelte-1a2ahop' && (S.textContent = T),
				this.h();
		},
		h() {
			_(t, 'class', 'btn btn-sm variant-ghost-surface'),
				_(t, 'href', './docs'),
				_(t, 'rel', 'noreferrer'),
				_(o, 'class', 'btn btn-sm variant-ghost-surface'),
				_(o, 'href', './example'),
				_(o, 'rel', 'noreferrer'),
				_(r, 'class', 'btn btn-sm variant-ghost-surface'),
				_(r, 'href', './editor'),
				_(r, 'rel', 'noreferrer'),
				_(h, 'class', 'btn btn-sm variant-ghost-surface'),
				_(h, 'href', './ai'),
				_(h, 'rel', 'noreferrer'),
				_(S, 'class', 'btn btn-sm variant-ghost-surface'),
				_(S, 'href', 'https://github.com/'),
				_(S, 'rel', 'noreferrer');
		},
		m(b, u) {
			G(b, t, u),
				G(b, i, u),
				G(b, o, u),
				G(b, s, u),
				G(b, r, u),
				G(b, E, u),
				G(b, h, u),
				G(b, O, u),
				G(b, S, u);
		},
		p: Mt,
		d(b) {
			b && (C(t), C(i), C(o), C(s), C(r), C(E), C(h), C(O), C(S));
		}
	};
}
function qi(e) {
	let t, n;
	return (
		(t = new Rn({ props: { $$slots: { trail: [Ji], lead: [Vi] }, $$scope: { ctx: e } } })),
		{
			c() {
				Ot(t.$$.fragment);
			},
			l(i) {
				kt(t.$$.fragment, i);
			},
			m(i, o) {
				wt(t, i, o), (n = !0);
			},
			p(i, o) {
				const a = {};
				o & 2 && (a.$$scope = { dirty: o, ctx: i }), t.$set(a);
			},
			i(i) {
				n || (w(t.$$.fragment, i), (n = !0));
			},
			o(i) {
				P(t.$$.fragment, i), (n = !1);
			},
			d(i) {
				It(t, i);
			}
		}
	);
}
function Qi(e) {
	let t, n;
	return (
		(t = new Un({ props: { $$slots: { header: [qi], default: [Yi] }, $$scope: { ctx: e } } })),
		{
			c() {
				Ot(t.$$.fragment);
			},
			l(i) {
				kt(t.$$.fragment, i);
			},
			m(i, o) {
				wt(t, i, o), (n = !0);
			},
			p(i, [o]) {
				const a = {};
				o & 2 && (a.$$scope = { dirty: o, ctx: i }), t.$set(a);
			},
			i(i) {
				n || (w(t.$$.fragment, i), (n = !0));
			},
			o(i) {
				P(t.$$.fragment, i), (n = !1);
			},
			d(i) {
				It(t, i);
			}
		}
	);
}
function $i(e, t, n) {
	let { $$slots: i = {}, $$scope: o } = t;
	return (
		Ae.registerLanguage('xml', Li),
		Ae.registerLanguage('css', zi),
		Ae.registerLanguage('javascript', Wi),
		Ae.registerLanguage('typescript', ji),
		un.set(Ae),
		(e.$$set = (a) => {
			'$$scope' in a && n(1, (o = a.$$scope));
		}),
		[i, o]
	);
}
class rs extends He {
	constructor(t) {
		super(), ze(this, t, $i, Qi, Ue, {});
	}
}
export { rs as component, ss as universal };
