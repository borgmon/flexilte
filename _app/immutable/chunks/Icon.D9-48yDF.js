import { w as Re } from './index.CT6Yb9O0.js';
import {
	s as Be,
	q as A,
	i as R,
	n as re,
	d as C,
	p as ze,
	x as He,
	w as D,
	y as ie,
	e as qe,
	c as Qe,
	a as ve,
	z as se,
	A as Ve,
	H as Ue,
	B as Ge,
	C as Ke,
	D as ce,
	E as Je
} from './scheduler.CcAwvEnr.js';
import { g as Se } from './ProgressBar.svelte_svelte_type_style_lang.DXi_RU-c.js';
import { S as We, i as Xe } from './index.u1Eg8cTy.js';
const dn = Re(void 0),
	j = /^[a-z0-9]+(-[a-z0-9]+)*$/,
	B = (e, t, n, r = '') => {
		const o = e.split(':');
		if (e.slice(0, 1) === '@') {
			if (o.length < 2 || o.length > 3) return null;
			r = o.shift().slice(1);
		}
		if (o.length > 3 || !o.length) return null;
		if (o.length > 1) {
			const c = o.pop(),
				l = o.pop(),
				f = { provider: o.length > 0 ? o[0] : r, prefix: l, name: c };
			return t && !F(f) ? null : f;
		}
		const i = o[0],
			s = i.split('-');
		if (s.length > 1) {
			const c = { provider: r, prefix: s.shift(), name: s.join('-') };
			return t && !F(c) ? null : c;
		}
		if (n && r === '') {
			const c = { provider: r, prefix: '', name: i };
			return t && !F(c, n) ? null : c;
		}
		return null;
	},
	F = (e, t) =>
		e
			? !!(
					(e.provider === '' || e.provider.match(j)) &&
					((t && e.prefix === '') || e.prefix.match(j)) &&
					e.name.match(j)
				)
			: !1,
	Ie = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
	N = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
	z = Object.freeze({ ...Ie, ...N }),
	U = Object.freeze({ ...z, body: '', hidden: !1 });
function Ye(e, t) {
	const n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
function le(e, t) {
	const n = Ye(e, t);
	for (const r in U)
		r in N
			? r in e && !(r in n) && (n[r] = N[r])
			: r in t
				? (n[r] = t[r])
				: r in e && (n[r] = e[r]);
	return n;
}
function Ze(e, t) {
	const n = e.icons,
		r = e.aliases || Object.create(null),
		o = Object.create(null);
	function i(s) {
		if (n[s]) return (o[s] = []);
		if (!(s in o)) {
			o[s] = null;
			const c = r[s] && r[s].parent,
				l = c && i(c);
			l && (o[s] = [c].concat(l));
		}
		return o[s];
	}
	return Object.keys(n).concat(Object.keys(r)).forEach(i), o;
}
function $e(e, t, n) {
	const r = e.icons,
		o = e.aliases || Object.create(null);
	let i = {};
	function s(c) {
		i = le(r[c] || o[c], i);
	}
	return s(t), n.forEach(s), le(e, i);
}
function ke(e, t) {
	const n = [];
	if (typeof e != 'object' || typeof e.icons != 'object') return n;
	e.not_found instanceof Array &&
		e.not_found.forEach((o) => {
			t(o, null), n.push(o);
		});
	const r = Ze(e);
	for (const o in r) {
		const i = r[o];
		i && (t(o, $e(e, o, i)), n.push(o));
	}
	return n;
}
const et = { provider: '', aliases: {}, not_found: {}, ...Ie };
function Q(e, t) {
	for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
	return !0;
}
function Ce(e) {
	if (typeof e != 'object' || e === null) return null;
	const t = e;
	if (typeof t.prefix != 'string' || !e.icons || typeof e.icons != 'object' || !Q(e, et))
		return null;
	const n = t.icons;
	for (const o in n) {
		const i = n[o];
		if (!o.match(j) || typeof i.body != 'string' || !Q(i, U)) return null;
	}
	const r = t.aliases || Object.create(null);
	for (const o in r) {
		const i = r[o],
			s = i.parent;
		if (!o.match(j) || typeof s != 'string' || (!n[s] && !r[s]) || !Q(i, U)) return null;
	}
	return t;
}
const fe = Object.create(null);
function tt(e, t) {
	return { provider: e, prefix: t, icons: Object.create(null), missing: new Set() };
}
function k(e, t) {
	const n = fe[e] || (fe[e] = Object.create(null));
	return n[t] || (n[t] = tt(e, t));
}
function Z(e, t) {
	return Ce(t)
		? ke(t, (n, r) => {
				r ? (e.icons[n] = r) : e.missing.add(n);
			})
		: [];
}
function nt(e, t, n) {
	try {
		if (typeof n.body == 'string') return (e.icons[t] = { ...n }), !0;
	} catch {}
	return !1;
}
let E = !1;
function _e(e) {
	return typeof e == 'boolean' && (E = e), E;
}
function ot(e) {
	const t = typeof e == 'string' ? B(e, !0, E) : e;
	if (t) {
		const n = k(t.provider, t.prefix),
			r = t.name;
		return n.icons[r] || (n.missing.has(r) ? null : void 0);
	}
}
function rt(e, t) {
	const n = B(e, !0, E);
	if (!n) return !1;
	const r = k(n.provider, n.prefix);
	return nt(r, n.name, t);
}
function it(e, t) {
	if (typeof e != 'object') return !1;
	if ((typeof t != 'string' && (t = e.provider || ''), E && !t && !e.prefix)) {
		let o = !1;
		return (
			Ce(e) &&
				((e.prefix = ''),
				ke(e, (i, s) => {
					s && rt(i, s) && (o = !0);
				})),
			o
		);
	}
	const n = e.prefix;
	if (!F({ provider: t, prefix: n, name: 'a' })) return !1;
	const r = k(t, n);
	return !!Z(r, e);
}
const Te = Object.freeze({ width: null, height: null }),
	je = Object.freeze({ ...Te, ...N }),
	st = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
	ct = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ae(e, t, n) {
	if (t === 1) return e;
	if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n;
	if (typeof e != 'string') return e;
	const r = e.split(st);
	if (r === null || !r.length) return e;
	const o = [];
	let i = r.shift(),
		s = ct.test(i);
	for (;;) {
		if (s) {
			const c = parseFloat(i);
			isNaN(c) ? o.push(i) : o.push(Math.ceil(c * t * n) / n);
		} else o.push(i);
		if (((i = r.shift()), i === void 0)) return o.join('');
		s = !s;
	}
}
function lt(e, t = 'defs') {
	let n = '';
	const r = e.indexOf('<' + t);
	for (; r >= 0; ) {
		const o = e.indexOf('>', r),
			i = e.indexOf('</' + t);
		if (o === -1 || i === -1) break;
		const s = e.indexOf('>', i);
		if (s === -1) break;
		(n += e.slice(o + 1, i).trim()), (e = e.slice(0, r).trim() + e.slice(s + 1));
	}
	return { defs: n, content: e };
}
function ft(e, t) {
	return e ? '<defs>' + e + '</defs>' + t : t;
}
function at(e, t, n) {
	const r = lt(e);
	return ft(r.defs, t + r.content + n);
}
const ut = (e) => e === 'unset' || e === 'undefined' || e === 'none';
function dt(e, t) {
	const n = { ...z, ...e },
		r = { ...je, ...t },
		o = { left: n.left, top: n.top, width: n.width, height: n.height };
	let i = n.body;
	[n, r].forEach((S) => {
		const m = [],
			g = S.hFlip,
			u = S.vFlip;
		let v = S.rotate;
		g
			? u
				? (v += 2)
				: (m.push(
						'translate(' + (o.width + o.left).toString() + ' ' + (0 - o.top).toString() + ')'
					),
					m.push('scale(-1 1)'),
					(o.top = o.left = 0))
			: u &&
				(m.push('translate(' + (0 - o.left).toString() + ' ' + (o.height + o.top).toString() + ')'),
				m.push('scale(1 -1)'),
				(o.top = o.left = 0));
		let w;
		switch ((v < 0 && (v -= Math.floor(v / 4) * 4), (v = v % 4), v)) {
			case 1:
				(w = o.height / 2 + o.top),
					m.unshift('rotate(90 ' + w.toString() + ' ' + w.toString() + ')');
				break;
			case 2:
				m.unshift(
					'rotate(180 ' +
						(o.width / 2 + o.left).toString() +
						' ' +
						(o.height / 2 + o.top).toString() +
						')'
				);
				break;
			case 3:
				(w = o.width / 2 + o.left),
					m.unshift('rotate(-90 ' + w.toString() + ' ' + w.toString() + ')');
				break;
		}
		v % 2 === 1 &&
			(o.left !== o.top && ((w = o.left), (o.left = o.top), (o.top = w)),
			o.width !== o.height && ((w = o.width), (o.width = o.height), (o.height = w))),
			m.length && (i = at(i, '<g transform="' + m.join(' ') + '">', '</g>'));
	});
	const s = r.width,
		c = r.height,
		l = o.width,
		f = o.height;
	let a, d;
	s === null
		? ((d = c === null ? '1em' : c === 'auto' ? f : c), (a = ae(d, l / f)))
		: ((a = s === 'auto' ? l : s), (d = c === null ? ae(a, f / l) : c === 'auto' ? f : c));
	const h = {},
		y = (S, m) => {
			ut(m) || (h[S] = m.toString());
		};
	y('width', a), y('height', d);
	const b = [o.left, o.top, l, f];
	return (h.viewBox = b.join(' ')), { attributes: h, viewBox: b, body: i };
}
const pt = /\sid="(\S+)"/g,
	ht = 'IconifyId' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16);
let gt = 0;
function mt(e, t = ht) {
	const n = [];
	let r;
	for (; (r = pt.exec(e)); ) n.push(r[1]);
	if (!n.length) return e;
	const o = 'suffix' + ((Math.random() * 16777216) | Date.now()).toString(16);
	return (
		n.forEach((i) => {
			const s = typeof t == 'function' ? t(i) : t + (gt++).toString(),
				c = i.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			e = e.replace(new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', 'g'), '$1' + s + o + '$3');
		}),
		(e = e.replace(new RegExp(o, 'g'), '')),
		e
	);
}
const G = Object.create(null);
function yt(e, t) {
	G[e] = t;
}
function K(e) {
	return G[e] || G[''];
}
function $(e) {
	let t;
	if (typeof e.resources == 'string') t = [e.resources];
	else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
	return {
		resources: t,
		path: e.path || '/',
		maxURL: e.maxURL || 500,
		rotate: e.rotate || 750,
		timeout: e.timeout || 5e3,
		random: e.random === !0,
		index: e.index || 0,
		dataAfterTimeout: e.dataAfterTimeout !== !1
	};
}
const ee = Object.create(null),
	T = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
	L = [];
for (; T.length > 0; ) T.length === 1 || Math.random() > 0.5 ? L.push(T.shift()) : L.push(T.pop());
ee[''] = $({ resources: ['https://api.iconify.design'].concat(L) });
function bt(e, t) {
	const n = $(t);
	return n === null ? !1 : ((ee[e] = n), !0);
}
function te(e) {
	return ee[e];
}
const wt = () => {
	let e;
	try {
		if (((e = fetch), typeof e == 'function')) return e;
	} catch {}
};
let ue = wt();
function xt(e, t) {
	const n = te(e);
	if (!n) return 0;
	let r;
	if (!n.maxURL) r = 0;
	else {
		let o = 0;
		n.resources.forEach((s) => {
			o = Math.max(o, s.length);
		});
		const i = t + '.json?icons=';
		r = n.maxURL - o - n.path.length - i.length;
	}
	return r;
}
function vt(e) {
	return e === 404;
}
const St = (e, t, n) => {
	const r = [],
		o = xt(e, t),
		i = 'icons';
	let s = { type: i, provider: e, prefix: t, icons: [] },
		c = 0;
	return (
		n.forEach((l, f) => {
			(c += l.length + 1),
				c >= o &&
					f > 0 &&
					(r.push(s), (s = { type: i, provider: e, prefix: t, icons: [] }), (c = l.length)),
				s.icons.push(l);
		}),
		r.push(s),
		r
	);
};
function It(e) {
	if (typeof e == 'string') {
		const t = te(e);
		if (t) return t.path;
	}
	return '/';
}
const kt = (e, t, n) => {
		if (!ue) {
			n('abort', 424);
			return;
		}
		let r = It(t.provider);
		switch (t.type) {
			case 'icons': {
				const i = t.prefix,
					c = t.icons.join(','),
					l = new URLSearchParams({ icons: c });
				r += i + '.json?' + l.toString();
				break;
			}
			case 'custom': {
				const i = t.uri;
				r += i.slice(0, 1) === '/' ? i.slice(1) : i;
				break;
			}
			default:
				n('abort', 400);
				return;
		}
		let o = 503;
		ue(e + r)
			.then((i) => {
				const s = i.status;
				if (s !== 200) {
					setTimeout(() => {
						n(vt(s) ? 'abort' : 'next', s);
					});
					return;
				}
				return (o = 501), i.json();
			})
			.then((i) => {
				if (typeof i != 'object' || i === null) {
					setTimeout(() => {
						i === 404 ? n('abort', i) : n('next', o);
					});
					return;
				}
				setTimeout(() => {
					n('success', i);
				});
			})
			.catch(() => {
				n('next', o);
			});
	},
	Ct = { prepare: St, send: kt };
function _t(e) {
	const t = { loaded: [], missing: [], pending: [] },
		n = Object.create(null);
	e.sort((o, i) =>
		o.provider !== i.provider
			? o.provider.localeCompare(i.provider)
			: o.prefix !== i.prefix
				? o.prefix.localeCompare(i.prefix)
				: o.name.localeCompare(i.name)
	);
	let r = { provider: '', prefix: '', name: '' };
	return (
		e.forEach((o) => {
			if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
			r = o;
			const i = o.provider,
				s = o.prefix,
				c = o.name,
				l = n[i] || (n[i] = Object.create(null)),
				f = l[s] || (l[s] = k(i, s));
			let a;
			c in f.icons
				? (a = t.loaded)
				: s === '' || f.missing.has(c)
					? (a = t.missing)
					: (a = t.pending);
			const d = { provider: i, prefix: s, name: c };
			a.push(d);
		}),
		t
	);
}
function Ee(e, t) {
	e.forEach((n) => {
		const r = n.loaderCallbacks;
		r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
	});
}
function Tt(e) {
	e.pendingCallbacksFlag ||
		((e.pendingCallbacksFlag = !0),
		setTimeout(() => {
			e.pendingCallbacksFlag = !1;
			const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
			if (!t.length) return;
			let n = !1;
			const r = e.provider,
				o = e.prefix;
			t.forEach((i) => {
				const s = i.icons,
					c = s.pending.length;
				(s.pending = s.pending.filter((l) => {
					if (l.prefix !== o) return !0;
					const f = l.name;
					if (e.icons[f]) s.loaded.push({ provider: r, prefix: o, name: f });
					else if (e.missing.has(f)) s.missing.push({ provider: r, prefix: o, name: f });
					else return (n = !0), !0;
					return !1;
				})),
					s.pending.length !== c &&
						(n || Ee([e], i.id),
						i.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), i.abort));
			});
		}));
}
let jt = 0;
function Et(e, t, n) {
	const r = jt++,
		o = Ee.bind(null, n, r);
	if (!t.pending.length) return o;
	const i = { id: r, icons: t, callback: e, abort: o };
	return (
		n.forEach((s) => {
			(s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
		}),
		o
	);
}
function Ot(e, t = !0, n = !1) {
	const r = [];
	return (
		e.forEach((o) => {
			const i = typeof o == 'string' ? B(o, t, n) : o;
			i && r.push(i);
		}),
		r
	);
}
var Pt = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 };
function Mt(e, t, n, r) {
	const o = e.resources.length,
		i = e.random ? Math.floor(Math.random() * o) : e.index;
	let s;
	if (e.random) {
		let p = e.resources.slice(0);
		for (s = []; p.length > 1; ) {
			const x = Math.floor(Math.random() * p.length);
			s.push(p[x]), (p = p.slice(0, x).concat(p.slice(x + 1)));
		}
		s = s.concat(p);
	} else s = e.resources.slice(i).concat(e.resources.slice(0, i));
	const c = Date.now();
	let l = 'pending',
		f = 0,
		a,
		d = null,
		h = [],
		y = [];
	typeof r == 'function' && y.push(r);
	function b() {
		d && (clearTimeout(d), (d = null));
	}
	function S() {
		l === 'pending' && (l = 'aborted'),
			b(),
			h.forEach((p) => {
				p.status === 'pending' && (p.status = 'aborted');
			}),
			(h = []);
	}
	function m(p, x) {
		x && (y = []), typeof p == 'function' && y.push(p);
	}
	function g() {
		return {
			startTime: c,
			payload: t,
			status: l,
			queriesSent: f,
			queriesPending: h.length,
			subscribe: m,
			abort: S
		};
	}
	function u() {
		(l = 'failed'),
			y.forEach((p) => {
				p(void 0, a);
			});
	}
	function v() {
		h.forEach((p) => {
			p.status === 'pending' && (p.status = 'aborted');
		}),
			(h = []);
	}
	function w(p, x, _) {
		const P = x !== 'success';
		switch (((h = h.filter((I) => I !== p)), l)) {
			case 'pending':
				break;
			case 'failed':
				if (P || !e.dataAfterTimeout) return;
				break;
			default:
				return;
		}
		if (x === 'abort') {
			(a = _), u();
			return;
		}
		if (P) {
			(a = _), h.length || (s.length ? q() : u());
			return;
		}
		if ((b(), v(), !e.random)) {
			const I = e.resources.indexOf(p.resource);
			I !== -1 && I !== e.index && (e.index = I);
		}
		(l = 'completed'),
			y.forEach((I) => {
				I(_);
			});
	}
	function q() {
		if (l !== 'pending') return;
		b();
		const p = s.shift();
		if (p === void 0) {
			if (h.length) {
				d = setTimeout(() => {
					b(), l === 'pending' && (v(), u());
				}, e.timeout);
				return;
			}
			u();
			return;
		}
		const x = {
			status: 'pending',
			resource: p,
			callback: (_, P) => {
				w(x, _, P);
			}
		};
		h.push(x), f++, (d = setTimeout(q, e.rotate)), n(p, t, x.callback);
	}
	return setTimeout(q), g;
}
function Oe(e) {
	const t = { ...Pt, ...e };
	let n = [];
	function r() {
		n = n.filter((c) => c().status === 'pending');
	}
	function o(c, l, f) {
		const a = Mt(t, c, l, (d, h) => {
			r(), f && f(d, h);
		});
		return n.push(a), a;
	}
	function i(c) {
		return n.find((l) => c(l)) || null;
	}
	return {
		query: o,
		find: i,
		setIndex: (c) => {
			t.index = c;
		},
		getIndex: () => t.index,
		cleanup: r
	};
}
function de() {}
const V = Object.create(null);
function Ft(e) {
	if (!V[e]) {
		const t = te(e);
		if (!t) return;
		const n = Oe(t),
			r = { config: t, redundancy: n };
		V[e] = r;
	}
	return V[e];
}
function Lt(e, t, n) {
	let r, o;
	if (typeof e == 'string') {
		const i = K(e);
		if (!i) return n(void 0, 424), de;
		o = i.send;
		const s = Ft(e);
		s && (r = s.redundancy);
	} else {
		const i = $(e);
		if (i) {
			r = Oe(i);
			const s = e.resources ? e.resources[0] : '',
				c = K(s);
			c && (o = c.send);
		}
	}
	return !r || !o ? (n(void 0, 424), de) : r.query(t, o, n)().abort;
}
const pe = 'iconify2',
	O = 'iconify',
	Pe = O + '-count',
	he = O + '-version',
	Me = 36e5,
	At = 168,
	Dt = 50;
function J(e, t) {
	try {
		return e.getItem(t);
	} catch {}
}
function ne(e, t, n) {
	try {
		return e.setItem(t, n), !0;
	} catch {}
}
function ge(e, t) {
	try {
		e.removeItem(t);
	} catch {}
}
function W(e, t) {
	return ne(e, Pe, t.toString());
}
function X(e) {
	return parseInt(J(e, Pe)) || 0;
}
const H = { local: !0, session: !0 },
	Fe = { local: new Set(), session: new Set() };
let oe = !1;
function Nt(e) {
	oe = e;
}
let M = typeof window > 'u' ? {} : window;
function Le(e) {
	const t = e + 'Storage';
	try {
		if (M && M[t] && typeof M[t].length == 'number') return M[t];
	} catch {}
	H[e] = !1;
}
function Ae(e, t) {
	const n = Le(e);
	if (!n) return;
	const r = J(n, he);
	if (r !== pe) {
		if (r) {
			const c = X(n);
			for (let l = 0; l < c; l++) ge(n, O + l.toString());
		}
		ne(n, he, pe), W(n, 0);
		return;
	}
	const o = Math.floor(Date.now() / Me) - At,
		i = (c) => {
			const l = O + c.toString(),
				f = J(n, l);
			if (typeof f == 'string') {
				try {
					const a = JSON.parse(f);
					if (
						typeof a == 'object' &&
						typeof a.cached == 'number' &&
						a.cached > o &&
						typeof a.provider == 'string' &&
						typeof a.data == 'object' &&
						typeof a.data.prefix == 'string' &&
						t(a, c)
					)
						return !0;
				} catch {}
				ge(n, l);
			}
		};
	let s = X(n);
	for (let c = s - 1; c >= 0; c--) i(c) || (c === s - 1 ? (s--, W(n, s)) : Fe[e].add(c));
}
function De() {
	if (!oe) {
		Nt(!0);
		for (const e in H)
			Ae(e, (t) => {
				const n = t.data,
					r = t.provider,
					o = n.prefix,
					i = k(r, o);
				if (!Z(i, n).length) return !1;
				const s = n.lastModified || -1;
				return (
					(i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s), !0
				);
			});
	}
}
function Rt(e, t) {
	const n = e.lastModifiedCached;
	if (n && n >= t) return n === t;
	if (((e.lastModifiedCached = t), n))
		for (const r in H)
			Ae(r, (o) => {
				const i = o.data;
				return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
			});
	return !0;
}
function Bt(e, t) {
	oe || De();
	function n(r) {
		let o;
		if (!H[r] || !(o = Le(r))) return;
		const i = Fe[r];
		let s;
		if (i.size) i.delete((s = Array.from(i).shift()));
		else if (((s = X(o)), s >= Dt || !W(o, s + 1))) return;
		const c = { cached: Math.floor(Date.now() / Me), provider: e.provider, data: t };
		return ne(o, O + s.toString(), JSON.stringify(c));
	}
	(t.lastModified && !Rt(e, t.lastModified)) ||
		(Object.keys(t.icons).length &&
			(t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
			n('local') || n('session')));
}
function me() {}
function zt(e) {
	e.iconsLoaderFlag ||
		((e.iconsLoaderFlag = !0),
		setTimeout(() => {
			(e.iconsLoaderFlag = !1), Tt(e);
		}));
}
function Ht(e, t) {
	e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
		e.iconsQueueFlag ||
			((e.iconsQueueFlag = !0),
			setTimeout(() => {
				e.iconsQueueFlag = !1;
				const { provider: n, prefix: r } = e,
					o = e.iconsToLoad;
				delete e.iconsToLoad;
				let i;
				if (!o || !(i = K(n))) return;
				i.prepare(n, r, o).forEach((c) => {
					Lt(n, c, (l) => {
						if (typeof l != 'object')
							c.icons.forEach((f) => {
								e.missing.add(f);
							});
						else
							try {
								const f = Z(e, l);
								if (!f.length) return;
								const a = e.pendingIcons;
								a &&
									f.forEach((d) => {
										a.delete(d);
									}),
									Bt(e, l);
							} catch (f) {
								console.error(f);
							}
						zt(e);
					});
				});
			}));
}
const qt = (e, t) => {
	const n = Ot(e, !0, _e()),
		r = _t(n);
	if (!r.pending.length) {
		let l = !0;
		return (
			t &&
				setTimeout(() => {
					l && t(r.loaded, r.missing, r.pending, me);
				}),
			() => {
				l = !1;
			}
		);
	}
	const o = Object.create(null),
		i = [];
	let s, c;
	return (
		r.pending.forEach((l) => {
			const { provider: f, prefix: a } = l;
			if (a === c && f === s) return;
			(s = f), (c = a), i.push(k(f, a));
			const d = o[f] || (o[f] = Object.create(null));
			d[a] || (d[a] = []);
		}),
		r.pending.forEach((l) => {
			const { provider: f, prefix: a, name: d } = l,
				h = k(f, a),
				y = h.pendingIcons || (h.pendingIcons = new Set());
			y.has(d) || (y.add(d), o[f][a].push(d));
		}),
		i.forEach((l) => {
			const { provider: f, prefix: a } = l;
			o[f][a].length && Ht(l, o[f][a]);
		}),
		t ? Et(t, r, i) : me
	);
};
function Qt(e, t) {
	const n = { ...e };
	for (const r in t) {
		const o = t[r],
			i = typeof o;
		r in Te
			? (o === null || (o && (i === 'string' || i === 'number'))) && (n[r] = o)
			: i === typeof n[r] && (n[r] = r === 'rotate' ? o % 4 : o);
	}
	return n;
}
const Vt = /[\s,]+/;
function Ut(e, t) {
	t.split(Vt).forEach((n) => {
		switch (n.trim()) {
			case 'horizontal':
				e.hFlip = !0;
				break;
			case 'vertical':
				e.vFlip = !0;
				break;
		}
	});
}
function Gt(e, t = 0) {
	const n = e.replace(/^-?[0-9.]*/, '');
	function r(o) {
		for (; o < 0; ) o += 4;
		return o % 4;
	}
	if (n === '') {
		const o = parseInt(e);
		return isNaN(o) ? 0 : r(o);
	} else if (n !== e) {
		let o = 0;
		switch (n) {
			case '%':
				o = 25;
				break;
			case 'deg':
				o = 90;
		}
		if (o) {
			let i = parseFloat(e.slice(0, e.length - n.length));
			return isNaN(i) ? 0 : ((i = i / o), i % 1 === 0 ? r(i) : 0);
		}
	}
	return t;
}
function Kt(e, t) {
	let n = e.indexOf('xlink:') === -1 ? '' : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
	for (const r in t) n += ' ' + r + '="' + t[r] + '"';
	return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>';
}
function Jt(e) {
	return e
		.replace(/"/g, "'")
		.replace(/%/g, '%25')
		.replace(/#/g, '%23')
		.replace(/</g, '%3C')
		.replace(/>/g, '%3E')
		.replace(/\s+/g, ' ');
}
function Wt(e) {
	return 'data:image/svg+xml,' + Jt(e);
}
function Xt(e) {
	return 'url("' + Wt(e) + '")';
}
const ye = { ...je, inline: !1 },
	Yt = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		'aria-hidden': !0,
		role: 'img'
	},
	Zt = { display: 'inline-block' },
	Y = { 'background-color': 'currentColor' },
	Ne = { 'background-color': 'transparent' },
	be = { image: 'var(--svg)', repeat: 'no-repeat', size: '100% 100%' },
	we = { '-webkit-mask': Y, mask: Y, background: Ne };
for (const e in we) {
	const t = we[e];
	for (const n in be) t[e + '-' + n] = be[n];
}
function $t(e) {
	return e + (e.match(/^[-0-9.]+$/) ? 'px' : '');
}
function en(e, t) {
	const n = Qt(ye, t),
		r = t.mode || 'svg',
		o = r === 'svg' ? { ...Yt } : {};
	e.body.indexOf('xlink:') === -1 && delete o['xmlns:xlink'];
	let i = typeof t.style == 'string' ? t.style : '';
	for (let g in t) {
		const u = t[g];
		if (u !== void 0)
			switch (g) {
				case 'icon':
				case 'style':
				case 'onLoad':
				case 'mode':
					break;
				case 'inline':
				case 'hFlip':
				case 'vFlip':
					n[g] = u === !0 || u === 'true' || u === 1;
					break;
				case 'flip':
					typeof u == 'string' && Ut(n, u);
					break;
				case 'color':
					i = i + (i.length > 0 && i.trim().slice(-1) !== ';' ? ';' : '') + 'color: ' + u + '; ';
					break;
				case 'rotate':
					typeof u == 'string' ? (n[g] = Gt(u)) : typeof u == 'number' && (n[g] = u);
					break;
				case 'ariaHidden':
				case 'aria-hidden':
					u !== !0 && u !== 'true' && delete o['aria-hidden'];
					break;
				default:
					if (g.slice(0, 3) === 'on:') break;
					ye[g] === void 0 && (o[g] = u);
			}
	}
	const s = dt(e, n),
		c = s.attributes;
	if ((n.inline && (i = 'vertical-align: -0.125em; ' + i), r === 'svg')) {
		Object.assign(o, c), i !== '' && (o.style = i);
		let g = 0,
			u = t.id;
		return (
			typeof u == 'string' && (u = u.replace(/-/g, '_')),
			{ svg: !0, attributes: o, body: mt(s.body, u ? () => u + 'ID' + g++ : 'iconifySvelte') }
		);
	}
	const { body: l, width: f, height: a } = e,
		d = r === 'mask' || (r === 'bg' ? !1 : l.indexOf('currentColor') !== -1),
		h = Kt(l, { ...c, width: f + '', height: a + '' }),
		b = { '--svg': Xt(h) },
		S = (g) => {
			const u = c[g];
			u && (b[g] = $t(u));
		};
	S('width'), S('height'), Object.assign(b, Zt, d ? Y : Ne);
	let m = '';
	for (const g in b) m += g + ': ' + b[g] + ';';
	return (o.style = m + i), { svg: !1, attributes: o };
}
_e(!0);
yt('', Ct);
if (typeof document < 'u' && typeof window < 'u') {
	De();
	const e = window;
	if (e.IconifyPreload !== void 0) {
		const t = e.IconifyPreload,
			n = 'Invalid IconifyPreload syntax.';
		typeof t == 'object' &&
			t !== null &&
			(t instanceof Array ? t : [t]).forEach((r) => {
				try {
					(typeof r != 'object' ||
						r === null ||
						r instanceof Array ||
						typeof r.icons != 'object' ||
						typeof r.prefix != 'string' ||
						!it(r)) &&
						console.error(n);
				} catch {
					console.error(n);
				}
			});
	}
	if (e.IconifyProviders !== void 0) {
		const t = e.IconifyProviders;
		if (typeof t == 'object' && t !== null)
			for (let n in t) {
				const r = 'IconifyProviders[' + n + '] is invalid.';
				try {
					const o = t[n];
					if (typeof o != 'object' || !o || o.resources === void 0) continue;
					bt(n, o) || console.error(r);
				} catch {
					console.error(r);
				}
			}
	}
}
function tn(e, t, n, r, o) {
	function i() {
		t.loading && (t.loading.abort(), (t.loading = null));
	}
	if (typeof e == 'object' && e !== null && typeof e.body == 'string')
		return (t.name = ''), i(), { data: { ...z, ...e } };
	let s;
	if (typeof e != 'string' || (s = B(e, !1, !0)) === null) return i(), null;
	const c = ot(s);
	if (!c)
		return (
			n &&
				(!t.loading || t.loading.name !== e) &&
				(i(), (t.name = ''), (t.loading = { name: e, abort: qt([s], r) })),
			null
		);
	i(), t.name !== e && ((t.name = e), o && !t.destroyed && o(e));
	const l = ['iconify'];
	return (
		s.prefix !== '' && l.push('iconify--' + s.prefix),
		s.provider !== '' && l.push('iconify--' + s.provider),
		{ data: c, classes: l }
	);
}
function nn(e, t) {
	return e ? en({ ...z, ...e }, t) : null;
}
function xe(e) {
	let t;
	function n(i, s) {
		return i[0].svg ? rn : on;
	}
	let r = n(e),
		o = r(e);
	return {
		c() {
			o.c(), (t = A());
		},
		l(i) {
			o.l(i), (t = A());
		},
		m(i, s) {
			o.m(i, s), R(i, t, s);
		},
		p(i, s) {
			r === (r = n(i)) && o ? o.p(i, s) : (o.d(1), (o = r(i)), o && (o.c(), o.m(t.parentNode, t)));
		},
		d(i) {
			i && C(t), o.d(i);
		}
	};
}
function on(e) {
	let t,
		n = [e[0].attributes],
		r = {};
	for (let o = 0; o < n.length; o += 1) r = D(r, n[o]);
	return {
		c() {
			(t = qe('span')), this.h();
		},
		l(o) {
			(t = Qe(o, 'SPAN', {})), ve(t).forEach(C), this.h();
		},
		h() {
			se(t, r);
		},
		m(o, i) {
			R(o, t, i);
		},
		p(o, i) {
			se(t, (r = Se(n, [i & 1 && o[0].attributes])));
		},
		d(o) {
			o && C(t);
		}
	};
}
function rn(e) {
	let t,
		n,
		r = e[0].body + '',
		o = [e[0].attributes],
		i = {};
	for (let s = 0; s < o.length; s += 1) i = D(i, o[s]);
	return {
		c() {
			(t = Ve('svg')), (n = new Ue(!0)), this.h();
		},
		l(s) {
			t = Ge(s, 'svg', {});
			var c = ve(t);
			(n = Ke(c, !0)), c.forEach(C), this.h();
		},
		h() {
			(n.a = null), ce(t, i);
		},
		m(s, c) {
			R(s, t, c), n.m(r, t);
		},
		p(s, c) {
			c & 1 && r !== (r = s[0].body + '') && n.p(r), ce(t, (i = Se(o, [c & 1 && s[0].attributes])));
		},
		d(s) {
			s && C(t);
		}
	};
}
function sn(e) {
	let t,
		n = e[0] && xe(e);
	return {
		c() {
			n && n.c(), (t = A());
		},
		l(r) {
			n && n.l(r), (t = A());
		},
		m(r, o) {
			n && n.m(r, o), R(r, t, o);
		},
		p(r, [o]) {
			r[0]
				? n
					? n.p(r, o)
					: ((n = xe(r)), n.c(), n.m(t.parentNode, t))
				: n && (n.d(1), (n = null));
		},
		i: re,
		o: re,
		d(r) {
			r && C(t), n && n.d(r);
		}
	};
}
function cn(e, t, n) {
	const r = { name: '', loading: null, destroyed: !1 };
	let o = !1,
		i = 0,
		s;
	const c = (f) => {
		typeof t.onLoad == 'function' && t.onLoad(f), Je()('load', { icon: f });
	};
	function l() {
		n(3, i++, i);
	}
	return (
		ze(() => {
			n(2, (o = !0));
		}),
		He(() => {
			n(1, (r.destroyed = !0), r), r.loading && (r.loading.abort(), n(1, (r.loading = null), r));
		}),
		(e.$$set = (f) => {
			n(6, (t = D(D({}, t), ie(f))));
		}),
		(e.$$.update = () => {
			{
				const f = tn(t.icon, r, o, l, c);
				n(0, (s = f ? nn(f.data, t) : null)),
					s &&
						f.classes &&
						n(
							0,
							(s.attributes.class =
								(typeof t.class == 'string' ? t.class + ' ' : '') + f.classes.join(' ')),
							s
						);
			}
		}),
		(t = ie(t)),
		[s, r, o, i]
	);
}
class pn extends We {
	constructor(t) {
		super(), Xe(this, t, cn, sn, Be, {});
	}
}
export { pn as I, dn as s };
