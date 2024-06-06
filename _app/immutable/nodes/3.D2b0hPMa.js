import {
	s as z,
	e as p,
	c,
	a as C,
	d,
	b as a,
	i as O,
	f as b,
	h as x,
	m as V,
	j as r,
	Q as T,
	o as L,
	n as W,
	r as ie
} from '../chunks/scheduler.CcAwvEnr.js';
import {
	S as G,
	i as H,
	c as ee,
	a as te,
	m as ne,
	t as oe,
	b as ae,
	d as se
} from '../chunks/index.u1Eg8cTy.js';
import { J as re, T as ue } from '../chunks/ButtonBox.DBC39x77.js';
import { c as pe, I as ce } from '../chunks/editorStore.Ddyefbd8.js';
import '../chunks/Icon.D9-48yDF.js';
import { w as de } from '../chunks/index.CT6Yb9O0.js';
import '../chunks/ProgressBar.svelte_svelte_type_style_lang.DXi_RU-c.js';
const le = de();
function me(l) {
	let e, n, s;
	return (
		(n = new re({ props: { layoutConfig: l[0], components: pe } })),
		{
			c() {
				(e = p('div')), ee(n.$$.fragment), this.h();
			},
			l(t) {
				e = c(t, 'DIV', { class: !0 });
				var o = C(e);
				te(n.$$.fragment, o), o.forEach(d), this.h();
			},
			h() {
				a(e, 'class', 'px-4 container mx-auto h-[48rem] w-full');
			},
			m(t, o) {
				O(t, e, o), ne(n, e, null), (s = !0);
			},
			p(t, [o]) {
				const _ = {};
				o & 1 && (_.layoutConfig = t[0]), n.$set(_);
			},
			i(t) {
				s || (oe(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				ae(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && d(e), se(n);
			}
		}
	);
}
function he(l, e, n) {
	let s = {
		rows: [
			{
				cols: [
					{
						component: 'TextBox',
						props: { text: 'Waiting for response' },
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'h-96'
					}
				]
			}
		]
	};
	return (
		le.subscribe((t) => {
			try {
				const o = JSON.parse(t);
				n(0, (s = JSON.parse(o.choices[0].message.content))), console.log('ai', s);
			} catch {}
		}),
		[s]
	);
}
class fe extends G {
	constructor(e) {
		super(), H(this, e, he, me, z, {});
	}
}
function ge(l) {
	let e,
		n,
		s,
		t,
		o,
		_ = 'Endpoint',
		E,
		m,
		N,
		v,
		$,
		X = 'Model',
		S,
		f,
		P,
		I,
		k,
		K = 'API key (stored in browser)',
		D,
		y,
		Y,
		g,
		B,
		Q = '+',
		q,
		h,
		M,
		w,
		F = 'Send',
		R,
		Z;
	return {
		c() {
			(e = p('div')),
				(n = p('div')),
				(s = b()),
				(t = p('label')),
				(o = p('span')),
				(o.textContent = _),
				(E = b()),
				(m = p('input')),
				(N = b()),
				(v = p('label')),
				($ = p('span')),
				($.textContent = X),
				(S = b()),
				(f = p('input')),
				(P = b()),
				(I = p('label')),
				(k = p('span')),
				(k.textContent = K),
				(D = b()),
				(y = p('input')),
				(Y = b()),
				(g = p('div')),
				(B = p('button')),
				(B.textContent = Q),
				(q = b()),
				(h = p('textarea')),
				(M = b()),
				(w = p('button')),
				(w.textContent = F),
				this.h();
		},
		l(i) {
			e = c(i, 'DIV', { class: !0 });
			var u = C(e);
			(n = c(u, 'DIV', { class: !0 })),
				C(n).forEach(d),
				(s = x(u)),
				(t = c(u, 'LABEL', { class: !0 }));
			var j = C(t);
			(o = c(j, 'SPAN', { 'data-svelte-h': !0 })),
				V(o) !== 'svelte-5ayklz' && (o.textContent = _),
				(E = x(j)),
				(m = c(j, 'INPUT', { class: !0, type: !0, placeholder: !0 })),
				j.forEach(d),
				(N = x(u)),
				(v = c(u, 'LABEL', { class: !0 }));
			var J = C(v);
			($ = c(J, 'SPAN', { 'data-svelte-h': !0 })),
				V($) !== 'svelte-1m5u4hd' && ($.textContent = X),
				(S = x(J)),
				(f = c(J, 'INPUT', { class: !0, type: !0, placeholder: !0 })),
				J.forEach(d),
				(P = x(u)),
				(I = c(u, 'LABEL', { class: !0 }));
			var U = C(I);
			(k = c(U, 'SPAN', { 'data-svelte-h': !0 })),
				V(k) !== 'svelte-1rirsag' && (k.textContent = K),
				(D = x(U)),
				(y = c(U, 'INPUT', { class: !0, type: !0, placeholder: !0 })),
				U.forEach(d),
				u.forEach(d),
				(Y = x(i)),
				(g = c(i, 'DIV', { class: !0 }));
			var A = C(g);
			(B = c(A, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				V(B) !== 'svelte-pe7l84' && (B.textContent = Q),
				(q = x(A)),
				(h = c(A, 'TEXTAREA', { class: !0, name: !0, id: !0, placeholder: !0, rows: !0 })),
				C(h).forEach(d),
				(M = x(A)),
				(w = c(A, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				V(w) !== 'svelte-1i8gbo3' && (w.textContent = F),
				A.forEach(d),
				this.h();
		},
		h() {
			a(n, 'class', 'm-4'),
				a(m, 'class', 'input rounded-container-token'),
				a(m, 'type', 'text'),
				a(m, 'placeholder', 'Input'),
				a(t, 'class', 'label'),
				a(f, 'class', 'input rounded-container-token'),
				a(f, 'type', 'text'),
				a(f, 'placeholder', 'Input'),
				a(v, 'class', 'label'),
				a(y, 'class', 'input rounded-container-token'),
				a(y, 'type', 'password'),
				a(y, 'placeholder', 'Input'),
				a(I, 'class', 'label'),
				a(e, 'class', 'input-group-divider rounded-container-token'),
				a(B, 'class', 'input-group-shim'),
				a(h, 'class', 'bg-transparent border-0 ring-0'),
				a(h, 'name', 'prompt'),
				a(h, 'id', 'prompt'),
				a(h, 'placeholder', 'Write a message...'),
				a(h, 'rows', '7'),
				a(w, 'class', 'variant-filled-primary'),
				a(
					g,
					'class',
					'input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token mt-6'
				);
		},
		m(i, u) {
			O(i, e, u),
				r(e, n),
				r(e, s),
				r(e, t),
				r(t, o),
				r(t, E),
				r(t, m),
				T(m, l[3]),
				r(e, N),
				r(e, v),
				r(v, $),
				r(v, S),
				r(v, f),
				T(f, l[1]),
				r(e, P),
				r(e, I),
				r(I, k),
				r(I, D),
				r(I, y),
				T(y, l[2]),
				O(i, Y, u),
				O(i, g, u),
				r(g, B),
				r(g, q),
				r(g, h),
				T(h, l[0]),
				r(g, M),
				r(g, w),
				R ||
					((Z = [
						L(m, 'input', l[5]),
						L(f, 'input', l[6]),
						L(y, 'input', l[7]),
						L(h, 'input', l[8]),
						L(w, 'click', l[9])
					]),
					(R = !0));
		},
		p(i, [u]) {
			u & 8 && m.value !== i[3] && T(m, i[3]),
				u & 2 && f.value !== i[1] && T(f, i[1]),
				u & 4 && y.value !== i[2] && T(y, i[2]),
				u & 1 && T(h, i[0]);
		},
		i: W,
		o: W,
		d(i) {
			i && (d(e), d(Y), d(g)), (R = !1), ie(Z);
		}
	};
}
function _e(l, e, n) {
	let s =
			'You are a AI chatbot that only response JSON. You are required to generate a json based on this example:`{"rows":[{"component":"TextBox","props":{"text":"My Website!","type":"h1"},"centerX":"middle"},{"layoutClass":"md:my-12","cols":[{"component":"TextBox","props":{"text":"Hi! This is AI generated!","type":"h1"},"centerX":"middle","centerY":"middle"},{"component":"CodeBlock","props":{"language":"ts","code":"console.log(123)"},"centerX":"middle","centerY":"middle"},{"component":"ImageBox","props":{"url":"https://placedog.net/200/200"},"centerX":"middle","centerY":"middle"}]}]}` You have 3 components you can use: TextBox,CodeBlock,ImageBox. User: Please generate me a personal website',
		t = 'gpt-4o',
		o = 'sk-',
		_ = 'https://api.openai.com/v1/chat/completions';
	async function E() {
		const S = {
				messages: [{ role: 'user', content: s }],
				model: 'gpt-3.5-turbo',
				temperature: 1,
				presence_penalty: 0,
				top_p: 1,
				frequency_penalty: 0
			},
			P = await (
				await fetch(_, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${o}` },
					body: JSON.stringify(S)
				})
			).text();
		le.set(P);
	}
	function m() {
		(_ = this.value), n(3, _);
	}
	function N() {
		(t = this.value), n(1, t);
	}
	function v() {
		(o = this.value), n(2, o);
	}
	function $() {
		(s = this.value), n(0, s);
	}
	return [s, t, o, _, E, m, N, v, $, () => E()];
}
class ve extends G {
	constructor(e) {
		super(), H(this, e, _e, ge, z, {});
	}
}
function ye(l) {
	let e, n, s;
	return (
		(n = new re({ props: { layoutConfig: l[1], components: l[0] } })),
		{
			c() {
				(e = p('div')), ee(n.$$.fragment), this.h();
			},
			l(t) {
				e = c(t, 'DIV', { class: !0 });
				var o = C(e);
				te(n.$$.fragment, o), o.forEach(d), this.h();
			},
			h() {
				a(e, 'class', 'px-4 container mx-auto');
			},
			m(t, o) {
				O(t, e, o), ne(n, e, null), (s = !0);
			},
			p: W,
			i(t) {
				s || (oe(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				ae(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && d(e), se(n);
			}
		}
	);
}
function be(l) {
	return [
		{ TextBox: ue, ImageBox: ce, ChatView: fe, InputView: ve },
		{ rows: [{ component: 'ChatView' }, { component: 'InputView' }] }
	];
}
class Ee extends G {
	constructor(e) {
		super(), H(this, e, be, ye, z, {});
	}
}
export { Ee as component };
