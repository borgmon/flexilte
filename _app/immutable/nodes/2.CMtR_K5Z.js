import {
	s as E,
	e as h,
	f as b,
	c as g,
	a as C,
	m as D,
	h as J,
	d as v,
	b as $,
	i as N,
	j as u,
	o as P,
	r as z,
	p as O
} from '../chunks/scheduler.CcAwvEnr.js';
import {
	S as I,
	i as V,
	c as A,
	a as L,
	m as q,
	t as R,
	b as U,
	d as X
} from '../chunks/index.u1Eg8cTy.js';
import { J as Y, C as H, A as F, T as M, a as G, B as K } from '../chunks/ButtonBox.DBC39x77.js';
import '../chunks/ProgressBar.svelte_svelte_type_style_lang.DXi_RU-c.js';
import { P as Q, a as W } from '../chunks/ProgressRadial.CZyQqi7r.js';
import '../chunks/Icon.D9-48yDF.js';
function Z(c) {
	let e,
		o,
		a,
		t,
		n = 'radial',
		m,
		s,
		B = 'avatar',
		d,
		f,
		w = 'loading bar',
		x,
		r,
		l,
		k,
		j,
		T;
	return (
		(l = new Y({ props: { layoutConfig: c[0], components: c[1] } })),
		{
			c() {
				(e = h('div')),
					(o = h('div')),
					(a = h('div')),
					(t = h('button')),
					(t.textContent = n),
					(m = b()),
					(s = h('button')),
					(s.textContent = B),
					(d = b()),
					(f = h('button')),
					(f.textContent = w),
					(x = b()),
					(r = h('div')),
					A(l.$$.fragment),
					this.h();
			},
			l(i) {
				e = g(i, 'DIV', { class: !0 });
				var p = C(e);
				o = g(p, 'DIV', { class: !0 });
				var y = C(o);
				a = g(y, 'DIV', { class: !0 });
				var _ = C(a);
				(t = g(_, 'BUTTON', { 'data-svelte-h': !0 })),
					D(t) !== 'svelte-j761s9' && (t.textContent = n),
					(m = J(_)),
					(s = g(_, 'BUTTON', { 'data-svelte-h': !0 })),
					D(s) !== 'svelte-nmqjl1' && (s.textContent = B),
					(d = J(_)),
					(f = g(_, 'BUTTON', { 'data-svelte-h': !0 })),
					D(f) !== 'svelte-kqfo63' && (f.textContent = w),
					_.forEach(v),
					y.forEach(v),
					(x = J(p)),
					(r = g(p, 'DIV', { class: !0 }));
				var S = C(r);
				L(l.$$.fragment, S), S.forEach(v), p.forEach(v), this.h();
			},
			h() {
				$(a, 'class', 'btn-group variant-filled mx-auto'),
					$(o, 'class', 'flex justify-center mt-6'),
					$(r, 'class', 'md:h-[56rem] h-[74rem] mt-6'),
					$(e, 'class', 'w-full');
			},
			m(i, p) {
				N(i, e, p),
					u(e, o),
					u(o, a),
					u(a, t),
					u(a, m),
					u(a, s),
					u(a, d),
					u(a, f),
					u(e, x),
					u(e, r),
					q(l, r, null),
					(k = !0),
					j || ((T = [P(t, 'click', c[3]), P(s, 'click', c[4]), P(f, 'click', c[5])]), (j = !0));
			},
			p(i, [p]) {
				const y = {};
				p & 1 && (y.layoutConfig = i[0]), l.$set(y);
			},
			i(i) {
				k || (R(l.$$.fragment, i), (k = !0));
			},
			o(i) {
				U(l.$$.fragment, i), (k = !1);
			},
			d(i) {
				i && v(e), X(l), (j = !1), z(T);
			}
		}
	);
}
function tt(c, e, o) {
	const a = { CodeBlock: H, Avatar: F, ProgressRadial: Q, ProgressBar: W, TextBox: M },
		t = {
			component: 'ProgressRadial',
			props: { value: '33' },
			centerX: 'middle',
			centerY: 'middle',
			layoutClass: 'h-full my-12'
		},
		n = {
			component: 'Avatar',
			props: { src: 'https://placedog.net/512/512', width: 'w-32', rounded: 'rounded-full' },
			centerX: 'middle',
			centerY: 'middle',
			layoutClass: 'h-full my-12'
		},
		m = {
			component: 'ProgressBar',
			centerX: 'middle',
			centerY: 'middle',
			wrapperClass: 'w-48',
			layoutClass: 'md:h-full my-12'
		};
	let s = {
		rows: [
			{
				alignHeight: !0,
				cols: [
					{ component: 'CodeBlock', props: { language: 'ts', code: '// Select a json to render' } },
					{ component: 'CodeBlock', props: { language: 'ts', code: '// Select a json to render' } }
				]
			}
		]
	};
	const B = () => {
			const r = JSON.parse(JSON.stringify(s));
			return (
				(r.rows[0].cols = r.rows[0].cols.slice(0)),
				`const components = { ProgressRadial, Avatar, ProgressBar };
const layoutConfig: LayoutConfig<typeof components> = ${JSON.stringify(r, null, 2)}
<JsonLayout {layoutConfig} {components}></JsonLayout>`
			);
		},
		d = (r) => {
			let l = {};
			r === 'radial' ? (l = t) : r === 'avatar' ? (l = n) : r === 'loadingBar' && (l = m),
				l &&
					(o(0, (s.rows[0].cols[0] = l), s),
					o(0, (s.rows[0].cols[1].props.code = ''), s),
					o(0, (s.rows[0].cols[1].props.code = B()), s));
		};
	return (
		O(() => {
			d('avatar');
		}),
		[s, a, d, () => d('radial'), () => d('avatar'), () => d('loadingBar')]
	);
}
class et extends I {
	constructor(e) {
		super(), V(this, e, tt, Z, E, {});
	}
}
function ot(c) {
	let e, o, a;
	return (
		(o = new Y({ props: { layoutConfig: c[0], components: c[1] } })),
		{
			c() {
				(e = h('div')), A(o.$$.fragment), this.h();
			},
			l(t) {
				e = g(t, 'DIV', { class: !0 });
				var n = C(e);
				L(o.$$.fragment, n), n.forEach(v), this.h();
			},
			h() {
				$(e, 'class', 'px-4 container mx-auto');
			},
			m(t, n) {
				N(t, e, n), q(o, e, null), (a = !0);
			},
			p(t, [n]) {
				const m = {};
				n & 1 && (m.layoutConfig = t[0]), o.$set(m);
			},
			i(t) {
				a || (R(o.$$.fragment, t), (a = !0));
			},
			o(t) {
				U(o.$$.fragment, t), (a = !1);
			},
			d(t) {
				t && v(e), X(o);
			}
		}
	);
}
function at(c, e, o) {
	const a = { TextBox: M, CardBox: G, CodeBlock: H, DemoBox: et, ButtonBox: K };
	let t = {};
	return (
		O(() => {
			fetch('frontpage.json')
				.then((n) => n.json())
				.then((n) => {
					o(0, (t = n));
				})
				.catch((n) => {
					console.error(n);
				});
		}),
		[t, a]
	);
}
class dt extends I {
	constructor(e) {
		super(), V(this, e, at, ot, E, {});
	}
}
export { dt as component };
