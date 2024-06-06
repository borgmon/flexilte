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
	f as k,
	h as L,
	j as T,
	n as _,
	m as z,
	O as X,
	o as W,
	l as Y,
	p as G
} from '../chunks/scheduler.CcAwvEnr.js';
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
} from '../chunks/index.u1Eg8cTy.js';
import { a as Q, J as j, T as Z } from '../chunks/ButtonBox.DBC39x77.js';
import {
	S as J,
	s as tt,
	c as et,
	a as N,
	b as ot,
	I as nt,
	A as st
} from '../chunks/editorStore.Ddyefbd8.js';
import { I as rt } from '../chunks/Icon.D9-48yDF.js';
import { e as R } from '../chunks/ProgressRadial.CZyQqi7r.js';
import '../chunks/ProgressBar.svelte_svelte_type_style_lang.DXi_RU-c.js';
function q(n, t, o) {
	const s = n.slice();
	return (s[3] = t[o]), s;
}
function M(n) {
	let t, o, s, e;
	return (
		(o = new Q({
			props: { icon: n[3].icon, body: n[3].name, style: 'variant-filled-surface text-center' }
		})),
		{
			c() {
				(t = $('div')), b(o.$$.fragment), (s = k()), this.h();
			},
			l(l) {
				t = x(l, 'DIV', { class: !0 });
				var r = w(t);
				y(o.$$.fragment, r), (s = L(r)), r.forEach(p), this.h();
			},
			h() {
				h(t, 'class', 'max-h-24 w-32');
			},
			m(l, r) {
				d(l, t, r), B(o, t, null), T(t, s), (e = !0);
			},
			p: _,
			i(l) {
				e || (m(o.$$.fragment, l), (e = !0));
			},
			o(l) {
				v(o.$$.fragment, l), (e = !1);
			},
			d(l) {
				l && p(t), C(o);
			}
		}
	);
}
function lt(n) {
	let t,
		o,
		s = R(n[0]),
		e = [];
	for (let r = 0; r < s.length; r += 1) e[r] = M(q(n, s, r));
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
			d(r, t, a), (o = !0);
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
			if (!o) {
				for (let a = 0; a < s.length; a += 1) m(e[a]);
				o = !0;
			}
		},
		o(r) {
			e = e.filter(Boolean);
			for (let a = 0; a < e.length; a += 1) v(e[a]);
			o = !1;
		},
		d(r) {
			r && p(t), F(e, r);
		}
	};
}
function at(n) {
	let t, o, s;
	return (
		(o = new J({
			props: {
				class: 'flex flex-1 flex-wrap gap-4 gap-y-6',
				group: { name: 'toolbox', pull: 'clone', put: !1 },
				animation: 150,
				sort: !1,
				onClone: n[1],
				$$slots: { default: [lt] },
				$$scope: { ctx: n }
			}
		})),
		{
			c() {
				(t = $('div')), b(o.$$.fragment), this.h();
			},
			l(e) {
				t = x(e, 'DIV', { id: !0 });
				var l = w(t);
				y(o.$$.fragment, l), l.forEach(p), this.h();
			},
			h() {
				h(t, 'id', 'toolbox');
			},
			m(e, l) {
				d(e, t, l), B(o, t, null), (s = !0);
			},
			p(e, [l]) {
				const r = {};
				l & 64 && (r.$$scope = { dirty: l, ctx: e }), o.$set(r);
			},
			i(e) {
				s || (m(o.$$.fragment, e), (s = !0));
			},
			o(e) {
				v(o.$$.fragment, e), (s = !1);
			},
			d(e) {
				e && p(t), C(o);
			}
		}
	);
}
function it(n) {
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
function ft(n) {
	let t, o, s;
	return (
		(o = new J({
			props: {
				class: 'flex flex-1 flex-nowrap gap-4 overflow-auto',
				group: { name: 'toolbox' },
				animation: 150
			}
		})),
		{
			c() {
				(t = $('div')), b(o.$$.fragment), this.h();
			},
			l(e) {
				t = x(e, 'DIV', { id: !0, class: !0 });
				var l = w(t);
				y(o.$$.fragment, l), l.forEach(p), this.h();
			},
			h() {
				h(t, 'id', 'preview'), h(t, 'class', 'w-full h-full');
			},
			m(e, l) {
				d(e, t, l), B(o, t, null), (s = !0);
			},
			p: _,
			i(e) {
				s || (m(o.$$.fragment, e), (s = !0));
			},
			o(e) {
				v(o.$$.fragment, e), (s = !1);
			},
			d(e) {
				e && p(t), C(o);
			}
		}
	);
}
class ut extends I {
	constructor(t) {
		super(), S(this, t, null, ft, D, {});
	}
}
function pt(n) {
	return tt.subscribe((t) => {}), [];
}
class dt extends I {
	constructor(t) {
		super(), S(this, t, pt, null, D, {});
	}
}
function mt(n) {
	let t,
		o = 'Export';
	return {
		c() {
			(t = $('button')), (t.textContent = o), this.h();
		},
		l(s) {
			(t = x(s, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				z(t) !== 'svelte-gp0qqz' && (t.textContent = o),
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
function gt(n) {
	let t, o, s, e, l, r;
	return (
		(o = new J({
			props: {
				class: 'flex flex-1 flex-wrap gap-4 gap-y-6 absolute inset-0',
				group: { name: 'toolbox', pull: !1 },
				animation: 150,
				onAdd: n[1]
			}
		})),
		(l = new rt({ props: { class: 'h-12 w-12 text-slate-300', icon: 'mdi:trash-outline' } })),
		{
			c() {
				(t = $('div')), b(o.$$.fragment), (s = k()), (e = $('div')), b(l.$$.fragment), this.h();
			},
			l(a) {
				t = x(a, 'DIV', { class: !0 });
				var i = w(t);
				y(o.$$.fragment, i), (s = L(i)), (e = x(i, 'DIV', { class: !0 }));
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
				d(a, t, i), B(o, t, null), T(t, s), T(t, e), B(l, e, null), n[2](t), (r = !0);
			},
			p: _,
			i(a) {
				r || (m(o.$$.fragment, a), m(l.$$.fragment, a), (r = !0));
			},
			o(a) {
				v(o.$$.fragment, a), v(l.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && p(t), C(o), C(l), n[2](null);
			}
		}
	);
}
function $t(n, t, o) {
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
			(s = r), o(0, s);
		});
	}
	return [s, e, l];
}
class xt extends I {
	constructor(t) {
		super(), S(this, t, $t, gt, D, {});
	}
}
const U = {
	TextBox: { text: 'Change me' },
	CodeBlock: { language: 'ts', code: '// Change me' },
	ImageBox: { url: 'https://placedog.net/200/200' },
	CardBox: { title: 'Change me' }
};
function vt(n) {
	let t,
		o,
		s,
		e,
		l = 'init',
		r,
		a,
		i;
	return (
		(o = new j({ props: { layoutConfig: n[1], components: et } })),
		{
			c() {
				(t = $('div')),
					b(o.$$.fragment),
					(s = k()),
					(e = $('button')),
					(e.textContent = l),
					this.h();
			},
			l(f) {
				t = x(f, 'DIV', { id: !0, class: !0 });
				var g = w(t);
				y(o.$$.fragment, g),
					g.forEach(p),
					(s = L(f)),
					(e = x(f, 'BUTTON', { 'data-svelte-h': !0 })),
					z(e) !== 'svelte-16ut5ff' && (e.textContent = l),
					this.h();
			},
			h() {
				h(t, 'id', 'preview'), h(t, 'class', 'flexilte-row');
			},
			m(f, g) {
				d(f, t, g),
					B(o, t, null),
					n[3](t),
					d(f, s, g),
					d(f, e, g),
					(r = !0),
					a || ((i = W(e, 'click', n[4])), (a = !0));
			},
			p(f, [g]) {
				const c = {};
				g & 2 && (c.layoutConfig = f[1]), o.$set(c);
			},
			i(f) {
				r || (m(o.$$.fragment, f), (r = !0));
			},
			o(f) {
				v(o.$$.fragment, f), (r = !1);
			},
			d(f) {
				f && (p(t), p(s), p(e)), C(o), n[3](null), (a = !1), i();
			}
		}
	);
}
function E(n) {
	var o, s;
	let t = {};
	if (n) {
		if ((o = n.classList) != null && o.contains('flexilte-row')) {
			console.log(1, n);
			const e = Array.from(n.children)
				.map(E)
				.filter((l) => l !== void 0);
			e.length > 0 && (t.rows = e);
		} else if ((s = n.classList) != null && s.contains('flexilte-col')) {
			console.log(2, n);
			const e = Array.from(n.children)
				.map(E)
				.filter((l) => l !== void 0);
			e.length > 0 && (t.cols = e);
		} else if (n.id.startsWith('clone-'))
			console.log(3, n, n.id), (t.component = n == null ? void 0 : n.innerText), (t.props = {});
		else {
			console.log(4, n);
			return;
		}
		if ((console.log(5, t), !(!t.rows && !t.cols && !t.component))) return t;
	}
}
function O(n, t) {
	if (Array.isArray(n) && Array.isArray(t))
		return n.map((o, s) => (s < t.length ? O(o, t[s]) : o)).concat(t.slice(n.length));
	if (n instanceof Object && t instanceof Object) {
		for (const o in t) t[o] instanceof Object && o in n ? (n[o] = O(n[o], t[o])) : (n[o] = t[o]);
		return n;
	} else return t;
}
function _t(n, t, o) {
	let s;
	Y(n, N, (c) => o(1, (s = c)));
	let e;
	function l(c) {
		if (c && typeof c == 'object')
			for (const u in c)
				c[u] &&
					typeof c[u] == 'object' &&
					(c[u].component && U[c[u].component] && (c[u].props = U[c[u].component]), l(c[u]));
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
								: (u = O(u, A)),
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
			(e = c), o(0, e);
		});
	}
	return [e, s, i, f, () => i(e)];
}
class wt extends I {
	constructor(t) {
		super(), S(this, t, _t, vt, D, {});
	}
}
function bt(n) {
	let t, o, s;
	return (
		(o = new j({ props: { layoutConfig: n[1], components: n[0] } })),
		{
			c() {
				(t = $('div')), b(o.$$.fragment), this.h();
			},
			l(e) {
				t = x(e, 'DIV', { class: !0 });
				var l = w(t);
				y(o.$$.fragment, l), l.forEach(p), this.h();
			},
			h() {
				h(t, 'class', 'container mx-auto mt-6');
			},
			m(e, l) {
				d(e, t, l), B(o, t, null), (s = !0);
			},
			p: _,
			i(e) {
				s || (m(o.$$.fragment, e), (s = !0));
			},
			o(e) {
				v(o.$$.fragment, e), (s = !1);
			},
			d(e) {
				e && p(t), C(o);
			}
		}
	);
}
function yt(n) {
	return [
		{
			ExportButton: ht,
			TextBox: Z,
			DNDList: ct,
			DNDBuilder: ut,
			Inspector: dt,
			ImageBox: nt,
			RemoveBox: xt,
			DNDPreview: wt,
			AddBox: st
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
class Tt extends I {
	constructor(t) {
		super(), S(this, t, yt, bt, D, {});
	}
}
export { Tt as component };
