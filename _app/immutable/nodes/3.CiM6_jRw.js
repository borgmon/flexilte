import {
	s as z,
	e as p,
	c,
	a as C,
	d,
	b as o,
	i as O,
	f as b,
	h as x,
	m as V,
	j as r,
	B as T,
	o as L,
	n as W,
	r as ie
} from '../chunks/scheduler.DFLkqwTt.js';
import {
	S as G,
	i as H,
	c as ee,
	a as te,
	m as ne,
	t as ae,
	b as oe,
	d as se
} from '../chunks/index.DThMT7MT.js';
import { J as re, T as ue } from '../chunks/ButtonBox.Csslo3Cz.js';
import { c as pe, I as ce } from '../chunks/editorStore.q6LA20UU.js';
import { w as de } from '../chunks/index.BrXgapp9.js';
import '../chunks/ProgressBar.svelte_svelte_type_style_lang.dhjFsQWZ.js';
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
				var a = C(e);
				te(n.$$.fragment, a), a.forEach(d), this.h();
			},
			h() {
				o(e, 'class', 'px-4 container mx-auto h-[48rem] w-full');
			},
			m(t, a) {
				O(t, e, a), ne(n, e, null), (s = !0);
			},
			p(t, [a]) {
				const _ = {};
				a & 1 && (_.layoutConfig = t[0]), n.$set(_);
			},
			i(t) {
				s || (ae(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				oe(n.$$.fragment, t), (s = !1);
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
				const a = JSON.parse(t);
				n(0, (s = JSON.parse(a.choices[0].message.content))), console.log('ai', s);
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
		a,
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
		F = '+',
		q,
		h,
		M,
		w,
		Q = 'Send',
		R,
		Z;
	return {
		c() {
			(e = p('div')),
				(n = p('div')),
				(s = b()),
				(t = p('label')),
				(a = p('span')),
				(a.textContent = _),
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
				(B.textContent = F),
				(q = b()),
				(h = p('textarea')),
				(M = b()),
				(w = p('button')),
				(w.textContent = Q),
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
			(a = c(j, 'SPAN', { 'data-svelte-h': !0 })),
				V(a) !== 'svelte-5ayklz' && (a.textContent = _),
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
				V(B) !== 'svelte-pe7l84' && (B.textContent = F),
				(q = x(A)),
				(h = c(A, 'TEXTAREA', { class: !0, name: !0, id: !0, placeholder: !0, rows: !0 })),
				C(h).forEach(d),
				(M = x(A)),
				(w = c(A, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				V(w) !== 'svelte-1i8gbo3' && (w.textContent = Q),
				A.forEach(d),
				this.h();
		},
		h() {
			o(n, 'class', 'm-4'),
				o(m, 'class', 'input rounded-container-token'),
				o(m, 'type', 'text'),
				o(m, 'placeholder', 'Input'),
				o(t, 'class', 'label'),
				o(f, 'class', 'input rounded-container-token'),
				o(f, 'type', 'text'),
				o(f, 'placeholder', 'Input'),
				o(v, 'class', 'label'),
				o(y, 'class', 'input rounded-container-token'),
				o(y, 'type', 'password'),
				o(y, 'placeholder', 'Input'),
				o(I, 'class', 'label'),
				o(e, 'class', 'input-group-divider rounded-container-token'),
				o(B, 'class', 'input-group-shim'),
				o(h, 'class', 'bg-transparent border-0 ring-0'),
				o(h, 'name', 'prompt'),
				o(h, 'id', 'prompt'),
				o(h, 'placeholder', 'Write a message...'),
				o(h, 'rows', '7'),
				o(w, 'class', 'variant-filled-primary'),
				o(
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
				r(t, a),
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
		a = 'sk-',
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
					headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${a}` },
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
		(a = this.value), n(2, a);
	}
	function $() {
		(s = this.value), n(0, s);
	}
	return [s, t, a, _, E, m, N, v, $, () => E()];
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
				var a = C(e);
				te(n.$$.fragment, a), a.forEach(d), this.h();
			},
			h() {
				o(e, 'class', 'px-4 container mx-auto');
			},
			m(t, a) {
				O(t, e, a), ne(n, e, null), (s = !0);
			},
			p: W,
			i(t) {
				s || (ae(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				oe(n.$$.fragment, t), (s = !1);
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
class Be extends G {
	constructor(e) {
		super(), H(this, e, be, ye, z, {});
	}
}
export { Be as component };
