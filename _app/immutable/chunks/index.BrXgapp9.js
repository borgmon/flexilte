import { n as b, s as l } from './scheduler.DFLkqwTt.js';
const n = [];
function h(e, o) {
	return { subscribe: p(e, o).subscribe };
}
function p(e, o = b) {
	let r;
	const i = new Set();
	function u(t) {
		if (l(e, t) && ((e = t), r)) {
			const c = !n.length;
			for (const s of i) s[1](), n.push(s, e);
			if (c) {
				for (let s = 0; s < n.length; s += 2) n[s][0](n[s + 1]);
				n.length = 0;
			}
		}
	}
	function f(t) {
		u(t(e));
	}
	function a(t, c = b) {
		const s = [t, c];
		return (
			i.add(s),
			i.size === 1 && (r = o(u, f) || b),
			t(e),
			() => {
				i.delete(s), i.size === 0 && r && (r(), (r = null));
			}
		);
	}
	return { set: u, update: f, subscribe: a };
}
export { h as r, p as w };
