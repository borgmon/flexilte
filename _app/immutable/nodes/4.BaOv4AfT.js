import{s as v,e as _,i as f,d as l,c as b,a as d,b as k,f as h,g as x,h as C,j as S,k as $}from"../chunks/scheduler.oRmF3nvV.js";import{S as y,i as j,t as m,a as u,c as q,b as D,d as F,m as H,e as I,g as L}from"../chunks/index.Dh10oea0.js";import{c as M,d as N}from"../chunks/common.D_pWozhy.js";import{F as T}from"../chunks/TextBox.DhgrSzDX.js";function g(r){let s,a,e,t,o='<a href="doc.json">Click here to see the JSON of this page</a>',c;return a=new T({props:{layoutConfig:r[0],components:M}}),{c(){s=d("div"),D(a.$$.fragment),e=k(),t=d("div"),t.innerHTML=o,this.h()},l(n){s=h(n,"DIV",{class:!0});var i=x(s);F(a.$$.fragment,i),i.forEach(l),e=C(n),t=h(n,"DIV",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-18q23nf"&&(t.innerHTML=o),this.h()},h(){$(s,"class","px-4 container mx-auto"),$(t,"class","text-center m-4 underline")},m(n,i){f(n,s,i),H(a,s,null),f(n,e,i),f(n,t,i),c=!0},p(n,i){const p={};i&1&&(p.layoutConfig=n[0]),a.$set(p)},i(n){c||(m(a.$$.fragment,n),c=!0)},o(n){u(a.$$.fragment,n),c=!1},d(n){n&&(l(s),l(e),l(t)),I(a)}}}function V(r){let s,a,e=r[0]&&g(r);return{c(){e&&e.c(),s=_()},l(t){e&&e.l(t),s=_()},m(t,o){e&&e.m(t,o),f(t,s,o),a=!0},p(t,[o]){t[0]?e?(e.p(t,o),o&1&&m(e,1)):(e=g(t),e.c(),m(e,1),e.m(s.parentNode,s)):e&&(L(),u(e,1,1,()=>{e=null}),q())},i(t){a||(m(e),a=!0)},o(t){u(e),a=!1},d(t){t&&l(s),e&&e.d(t)}}}function w(r,s,a){let e;return b(r,N,t=>a(0,e=t)),[e]}class z extends y{constructor(s){super(),j(this,s,w,V,v,{})}}export{z as component};