import { w as S, r as h } from './index.BrXgapp9.js';
import { L } from './scheduler.DFLkqwTt.js';
const d = {};
function w(e) {
	return e === 'local' ? localStorage : sessionStorage;
}
function u(e, n, a) {
	const r = JSON,
		l = 'local';
	function f(s, i) {
		w(l).setItem(s, r.stringify(i));
	}
	if (!d[e]) {
		const s = S(n, (t) => {
				const o = w(l).getItem(e);
				o && t(r.parse(o));
				{
					const g = (c) => {
						c.key === e && t(c.newValue ? r.parse(c.newValue) : null);
					};
					return (
						window.addEventListener('storage', g), () => window.removeEventListener('storage', g)
					);
				}
			}),
			{ subscribe: i, set: m } = s;
		d[e] = {
			set(t) {
				f(e, t), m(t);
			},
			update(t) {
				const o = t(L(s));
				f(e, o), m(o);
			},
			subscribe: i
		};
	}
	return d[e];
}
u('modeOsPrefers', !1);
u('modeUserPrefers', void 0);
u('modeCurrent', !1);
const p = '(prefers-reduced-motion: reduce)';
function v() {
	return window.matchMedia(p).matches;
}
h(v(), (e) => {
	{
		const n = (r) => {
				e(r.matches);
			},
			a = window.matchMedia(p);
		return (
			a.addEventListener('change', n),
			() => {
				a.removeEventListener('change', n);
			}
		);
	}
});
