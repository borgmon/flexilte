import {
	s as D,
	e as $,
	c as x,
	a as w,
	d as p,
	b as h,
	i as d,
	q as P,
	u as F,
	f as O,
	h as L,
	j as T,
	n as _,
	m as U,
	z as X,
	o as W,
	l as Y,
	p as G
} from '../chunks/scheduler.DFLkqwTt.js';
import {
	S as I,
	i as S,
	c as b,
	a as y,
	m as B,
	t as m,
	b as v,
	d as C,
	g as H,
	e as K
} from '../chunks/index.DThMT7MT.js';
import { a as Q, I as Z, J as j, T as tt } from '../chunks/ButtonBox.Csslo3Cz.js';
import {
	S as J,
	s as et,
	c as nt,
	a as N,
	b as ot,
	I as st,
	A as rt
} from '../chunks/editorStore.q6LA20UU.js';
import { e as R } from '../chunks/ProgressRadial.DCQMZ2dH.js';
import '../chunks/ProgressBar.svelte_svelte_type_style_lang.dhjFsQWZ.js';
function q(o, t, n) {
	const s = o.slice();
	return (s[3] = t[n]), s;
}
function M(o) {
	let t, n, s, e;
	return (
		(n = new Q({
			props: { icon: o[3].icon, body: o[3].name, style: 'variant-filled-surface text-center' }
		})),
		{
			c() {
				(t = $('div')), b(n.$$.fragment), (s = O()), this.h();
			},
			l(l) {
				t = x(l, 'DIV', { class: !0 });
				var r = w(t);
				y(n.$$.fragment, r), (s = L(r)), r.forEach(p), this.h();
			},
			h() {
				h(t, 'class', 'max-h-24 w-32');
			},
			m(l, r) {
				d(l, t, r), B(n, t, null), T(t, s), (e = !0);
			},
			p: _,
			i(l) {
				e || (m(n.$$.fragment, l), (e = !0));
			},
			o(l) {
				v(n.$$.fragment, l), (e = !1);
			},
			d(l) {
				l && p(t), C(n);
			}
		}
	);
}
function lt(o) {
	let t,
		n,
		s = R(o[0]),
		e = [];
	for (let r = 0; r < s.length; r += 1) e[r] = M(q(o, s, r));
	const l = (r) =>
		v(e[r], 1, 1, () => {
			e[r] = null;
		});
	return {
		c() {
			for (let r = 0; r < e.length; r += 1) e[r].c();
			t = P();
		},
		l(r) {
			for (let a = 0; a < e.length; a += 1) e[a].l(r);
			t = P();
		},
		m(r, a) {
			for (let i = 0; i < e.length; i += 1) e[i] && e[i].m(r, a);
			d(r, t, a), (n = !0);
		},
		p(r, a) {
			if (a & 1) {
				s = R(r[0]);
				let i;
				for (i = 0; i < s.length; i += 1) {
					const f = q(r, s, i);
					e[i]
						? (e[i].p(f, a), m(e[i], 1))
						: ((e[i] = M(f)), e[i].c(), m(e[i], 1), e[i].m(t.parentNode, t));
				}
				for (H(), i = s.length; i < e.length; i += 1) l(i);
				K();
			}
		},
		i(r) {
			if (!n) {
				for (let a = 0; a < s.length; a += 1) m(e[a]);
				n = !0;
			}
		},
		o(r) {
			e = e.filter(Boolean);
			for (let a = 0; a < e.length; a += 1) v(e[a]);
			n = !1;
		},
		d(r) {
			r && p(t), F(e, r);
		}
	};
}
function at(o) {
	let t, n, s;
	return (
		(n = new J({
			props: {
				class: 'flex flex-1 flex-wrap gap-4 gap-y-6',
				group: { name: 'toolbox', pull: 'clone', put: !1 },
				animation: 150,
				sort: !1,
				onClone: o[1],
				$$slots: { default: [lt] },
				$$scope: { ctx: o }
			}
		})),
		{
			c() {
				(t = $('div')), b(n.$$.fragment), this.h();
			},
			l(e) {
				t = x(e, 'DIV', { id: !0 });
				var l = w(t);
				y(n.$$.fragment, l), l.forEach(p), this.h();
			},
			h() {
				h(t, 'id', 'toolbox');
			},
			m(e, l) {
				d(e, t, l), B(n, t, null), (s = !0);
			},
			p(e, [l]) {
				const r = {};
				l & 64 && (r.$$scope = { dirty: l, ctx: e }), n.$set(r);
			},
			i(e) {
				s || (m(n.$$.fragment, e), (s = !0));
			},
			o(e) {
				v(n.$$.fragment, e), (s = !1);
			},
			d(e) {
				e && p(t), C(n);
			}
		}
	);
}
function it(o) {
	return [
		[
			{ icon: 'mdi:format-text', name: 'TextBox' },
			{ icon: 'mdi:image', name: 'ImageBox' },
			{ icon: 'mdi:card-text', name: 'CardBox' },
			{ icon: 'mdi:code', name: 'CodeBlock' },
			{ icon: 'mdi:table-row-plus-after', name: 'Add Row' },
			{ icon: 'mdi:table-column-plus-after', name: 'Add Col' }
		],
		(s) => {
			s.item.id = 'clone-' + Date.now().toString();
		}
	];
}
class ct extends I {
	constructor(t) {
		super(), S(this, t, it, at, D, {});
	}
}
function ft(o) {
	let t, n, s;
	return (
		(n = new J({
			props: {
				class: 'flex flex-1 flex-nowrap gap-4 overflow-auto',
				group: { name: 'toolbox' },
				animation: 150
			}
		})),
		{
			c() {
				(t = $('div')), b(n.$$.fragment), this.h();
			},
			l(e) {
				t = x(e, 'DIV', { id: !0, class: !0 });
				var l = w(t);
				y(n.$$.fragment, l), l.forEach(p), this.h();
			},
			h() {
				h(t, 'id', 'preview'), h(t, 'class', 'w-full h-full');
			},
			m(e, l) {
				d(e, t, l), B(n, t, null), (s = !0);
			},
			p: _,
			i(e) {
				s || (m(n.$$.fragment, e), (s = !0));
			},
			o(e) {
				v(n.$$.fragment, e), (s = !1);
			},
			d(e) {
				e && p(t), C(n);
			}
		}
	);
}
class ut extends I {
	constructor(t) {
		super(), S(this, t, null, ft, D, {});
	}
}
function pt(o) {
	return et.subscribe((t) => {}), [];
}
class dt extends I {
	constructor(t) {
		super(), S(this, t, pt, null, D, {});
	}
}
function mt(o) {
	let t,
		n = 'Export';
	return {
		c() {
			(t = $('button')), (t.textContent = n), this.h();
		},
		l(s) {
			(t = x(s, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				U(t) !== 'svelte-gp0qqz' && (t.textContent = n),
				this.h();
		},
		h() {
			h(t, 'class', 'btn variant-filled');
		},
		m(s, e) {
			d(s, t, e);
		},
		p: _,
		i: _,
		o: _,
		d(s) {
			s && p(t);
		}
	};
}
class ht extends I {
	constructor(t) {
		super(), S(this, t, null, mt, D, {});
	}
}
function gt(o) {
	let t, n, s, e, l, r;
	return (
		(n = new J({
			props: {
				class: 'flex flex-1 flex-wrap gap-4 gap-y-6 absolute inset-0',
				group: { name: 'toolbox', pull: !1 },
				animation: 150,
				onAdd: o[1]
			}
		})),
		(l = new Z({ props: { class: 'h-12 w-12 text-slate-300', icon: 'mdi:trash-outline' } })),
		{
			c() {
				(t = $('div')), b(n.$$.fragment), (s = O()), (e = $('div')), b(l.$$.fragment), this.h();
			},
			l(a) {
				t = x(a, 'DIV', { class: !0 });
				var i = w(t);
				y(n.$$.fragment, i), (s = L(i)), (e = x(i, 'DIV', { class: !0 }));
				var f = w(e);
				y(l.$$.fragment, f), f.forEach(p), i.forEach(p), this.h();
			},
			h() {
				h(
					e,
					'class',
					'h-32 w-full bg-slate-400 border-2 border-slate-600 flex items-center justify-center absolute inset-0 z-10 opacity-75'
				),
					h(t, 'class', 'relative h-32 w-full');
			},
			m(a, i) {
				d(a, t, i), B(n, t, null), T(t, s), T(t, e), B(l, e, null), o[2](t), (r = !0);
			},
			p: _,
			i(a) {
				r || (m(n.$$.fragment, a), m(l.$$.fragment, a), (r = !0));
			},
			o(a) {
				v(n.$$.fragment, a), v(l.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && p(t), C(n), C(l), o[2](null);
			}
		}
	);
}
function $t(o, t, n) {
	let s;
	const e = (r) => {
		if (r.item.id === 'placeholder') {
			r.from.appendChild(r.item);
			return;
		}
		try {
			s.children[0].removeChild(r.item);
		} catch (a) {
			console.error(a);
		}
	};
	function l(r) {
		X[r ? 'unshift' : 'push'](() => {
			(s = r), n(0, s);
		});
	}
	return [s, e, l];
}
class xt extends I {
	constructor(t) {
		super(), S(this, t, $t, gt, D, {});
	}
}
const z = {
	TextBox: { text: 'Change me' },
	CodeBlock: { language: 'ts', code: '// Change me' },
	ImageBox: { url: 'https://placedog.net/200/200' },
	CardBox: { title: 'Change me' }
};
function vt(o) {
	let t,
		n,
		s,
		e,
		l = 'init',
		r,
		a,
		i;
	return (
		(n = new j({ props: { layoutConfig: o[1], components: nt } })),
		{
			c() {
				(t = $('div')),
					b(n.$$.fragment),
					(s = O()),
					(e = $('button')),
					(e.textContent = l),
					this.h();
			},
			l(f) {
				t = x(f, 'DIV', { id: !0, class: !0 });
				var g = w(t);
				y(n.$$.fragment, g),
					g.forEach(p),
					(s = L(f)),
					(e = x(f, 'BUTTON', { 'data-svelte-h': !0 })),
					U(e) !== 'svelte-16ut5ff' && (e.textContent = l),
					this.h();
			},
			h() {
				h(t, 'id', 'preview'), h(t, 'class', 'flexilte-row');
			},
			m(f, g) {
				d(f, t, g),
					B(n, t, null),
					o[3](t),
					d(f, s, g),
					d(f, e, g),
					(r = !0),
					a || ((i = W(e, 'click', o[4])), (a = !0));
			},
			p(f, [g]) {
				const c = {};
				g & 2 && (c.layoutConfig = f[1]), n.$set(c);
			},
			i(f) {
				r || (m(n.$$.fragment, f), (r = !0));
			},
			o(f) {
				v(n.$$.fragment, f), (r = !1);
			},
			d(f) {
				f && (p(t), p(s), p(e)), C(n), o[3](null), (a = !1), i();
			}
		}
	);
}
function E(o) {
	var n, s;
	let t = {};
	if (o) {
		if ((n = o.classList) != null && n.contains('flexilte-row')) {
			console.log(1, o);
			const e = Array.from(o.children)
				.map(E)
				.filter((l) => l !== void 0);
			e.length > 0 && (t.rows = e);
		} else if ((s = o.classList) != null && s.contains('flexilte-col')) {
			console.log(2, o);
			const e = Array.from(o.children)
				.map(E)
				.filter((l) => l !== void 0);
			e.length > 0 && (t.cols = e);
		} else if (o.id.startsWith('clone-'))
			console.log(3, o, o.id), (t.component = o == null ? void 0 : o.innerText), (t.props = {});
		else {
			console.log(4, o);
			return;
		}
		if ((console.log(5, t), !(!t.rows && !t.cols && !t.component))) return t;
	}
}
function k(o, t) {
	if (Array.isArray(o) && Array.isArray(t))
		return o.map((n, s) => (s < t.length ? k(n, t[s]) : n)).concat(t.slice(o.length));
	if (o instanceof Object && t instanceof Object) {
		for (const n in t) t[n] instanceof Object && n in o ? (o[n] = k(o[n], t[n])) : (o[n] = t[n]);
		return o;
	} else return t;
}
function _t(o, t, n) {
	let s;
	Y(o, N, (c) => n(1, (s = c)));
	let e;
	function l(c) {
		if (c && typeof c == 'object')
			for (const u in c)
				c[u] &&
					typeof c[u] == 'object' &&
					(c[u].component && z[c[u].component] && (c[u].props = z[c[u].component]), l(c[u]));
	}
	const r = (c) => {
			console.log('add', c.item),
				c.item.innerText,
				N.update((u) => {
					var V;
					const A = E(e.children[0]);
					return (
						A &&
							(console.log('parsed', JSON.parse(JSON.stringify(A))),
							console.log('b4', JSON.parse(JSON.stringify(u))),
							((V = u.rows) == null ? void 0 : V.length) === 1 && u.rows[0].component === 'AddBox'
								? (u = A)
								: (u = k(u, A)),
							console.log('after', JSON.parse(JSON.stringify(u)))),
						l(u),
						i(e),
						u
					);
				});
		},
		a = (c) => {
			console.log('onRemove', c.item);
		};
	N.subscribe((c) => console.log('config', c));
	const i = (c) => {
		console.log('ee', c),
			(c.classList.contains('flexilte-row') || c.classList.contains('flexilte-col')) &&
				(ot.create(c, { group: { name: 'toolbox' }, animation: 150, onAdd: r, onRemove: a }),
				Array.from(c.children).forEach((u) => {
					i(u);
				}));
	};
	G(() => {
		console.log('init...'), N.update((c) => (console.log('inited layout', c), { ...c }));
	});
	function f(c) {
		X[c ? 'unshift' : 'push'](() => {
			(e = c), n(0, e);
		});
	}
	return [e, s, i, f, () => i(e)];
}
class wt extends I {
	constructor(t) {
		super(), S(this, t, _t, vt, D, {});
	}
}
function bt(o) {
	let t, n, s;
	return (
		(n = new j({ props: { layoutConfig: o[1], components: o[0] } })),
		{
			c() {
				(t = $('div')), b(n.$$.fragment), this.h();
			},
			l(e) {
				t = x(e, 'DIV', { class: !0 });
				var l = w(t);
				y(n.$$.fragment, l), l.forEach(p), this.h();
			},
			h() {
				h(t, 'class', 'container mx-auto mt-6');
			},
			m(e, l) {
				d(e, t, l), B(n, t, null), (s = !0);
			},
			p: _,
			i(e) {
				s || (m(n.$$.fragment, e), (s = !0));
			},
			o(e) {
				v(n.$$.fragment, e), (s = !1);
			},
			d(e) {
				e && p(t), C(n);
			}
		}
	);
}
function yt(o) {
	return [
		{
			ExportButton: ht,
			TextBox: tt,
			DNDList: ct,
			DNDBuilder: ut,
			Inspector: dt,
			ImageBox: st,
			RemoveBox: xt,
			DNDPreview: wt,
			AddBox: rt
		},
		{
			rows: [
				{
					component: 'TextBox',
					props: { type: 'h2', text: 'Flexilte Drag And Drop Editor' },
					centerX: 'middle'
				},
				{
					cols: [
						{
							component: 'ExportButton',
							props: { text: 'Export' },
							centerX: 'right',
							centerY: 'middle'
						}
					]
				},
				{
					layoutClass: 'mt-4',
					cols: [
						{
							width: 'md:w-2/6',
							layoutClass: 'variant-ghost p-4',
							rows: [
								{ component: 'TextBox', props: { type: 'h4', text: 'UI Components' } },
								{ component: 'DNDList', nodeClass: 'flex-1' },
								{ component: 'RemoveBox' }
							]
						},
						{
							width: 'md:w-5/6',
							layoutClass: 'variant-ghost p-4',
							rows: [
								{ component: 'TextBox', props: { type: 'h4', text: 'Preview' } },
								{ component: 'DNDPreview', nodeClass: 'flex-1' }
							]
						},
						{
							width: 'md:w-1/6',
							layoutClass: 'variant-ghost p-4',
							rows: [
								{ component: 'TextBox', props: { type: 'h4', text: 'Inspector' } },
								{ component: 'Inspector', nodeClass: 'flex-1' }
							]
						}
					]
				}
			]
		}
	];
}
class Nt extends I {
	constructor(t) {
		super(), S(this, t, yt, bt, D, {});
	}
}
export { Nt as component };
