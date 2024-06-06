import { w as S, r as h } from './index.CT6Yb9O0.js';
import { S as _ } from './scheduler.CcAwvEnr.js';
function y(e, a) {
	const r = {},
		s = {},
		u = { $$scope: 1 };
	let i = e.length;
	for (; i--; ) {
		const o = e[i],
			n = a[i];
		if (n) {
			for (const t in o) t in n || (s[t] = 1);
			for (const t in n) u[t] || ((r[t] = n[t]), (u[t] = 1));
			e[i] = n;
		} else for (const t in o) u[t] = 1;
	}
	for (const o in s) o in r || (r[o] = void 0);
	return r;
}
function E(e) {
	return typeof e == 'object' && e !== null ? e : {};
}
const l = {};
function p(e) {
	return e === 'local' ? localStorage : sessionStorage;
}
function g(e, a, r) {
	const s = JSON,
		u = 'local';
	function i(o, n) {
		p(u).setItem(o, s.stringify(n));
	}
	if (!l[e]) {
		const o = S(a, (c) => {
				const d = p(u).getItem(e);
				d && c(s.parse(d));
				{
					const m = (f) => {
						f.key === e && c(f.newValue ? s.parse(f.newValue) : null);
					};
					return (
						window.addEventListener('storage', m), () => window.removeEventListener('storage', m)
					);
				}
			}),
			{ subscribe: n, set: t } = o;
		l[e] = {
			set(c) {
				i(e, c), t(c);
			},
			update(c) {
				const d = c(_(o));
				i(e, d), t(d);
			},
			subscribe: n
		};
	}
	return l[e];
}
g('modeOsPrefers', !1);
g('modeUserPrefers', void 0);
g('modeCurrent', !1);
const w = '(prefers-reduced-motion: reduce)';
function b() {
	return window.matchMedia(w).matches;
}
const j = h(b(), (e) => {
	{
		const a = (s) => {
				e(s.matches);
			},
			r = window.matchMedia(w);
		return (
			r.addEventListener('change', a),
			() => {
				r.removeEventListener('change', a);
			}
		);
	}
});
export { E as a, y as g, j as p };
