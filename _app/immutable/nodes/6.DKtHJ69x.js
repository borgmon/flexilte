import{s as r,e as d,c as m,a as p,d as l,b as c,i,n as u}from"../chunks/scheduler.CcAwvEnr.js";import{S as x,i as g,c as h,a as y,m as C,t as w,b,d as f}from"../chunks/index.u1Eg8cTy.js";import{J as T,T as X}from"../chunks/Text.76ANferR.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.DXi_RU-c.js";import{P as Y,a as _}from"../chunks/ProgressRadial.CZyQqi7r.js";function v(s){let e,o,n;return o=new T({props:{layoutConfig:s[1],components:s[0]}}),{c(){e=d("div"),h(o.$$.fragment),this.h()},l(t){e=m(t,"DIV",{class:!0});var a=p(e);y(o.$$.fragment,a),a.forEach(l),this.h()},h(){c(e,"class","px-4 container mx-auto")},m(t,a){i(t,e,a),C(o,e,null),n=!0},p:u,i(t){n||(w(o.$$.fragment,t),n=!0)},o(t){b(o.$$.fragment,t),n=!1},d(t){t&&l(e),f(o)}}}function $(s){return[{Text:X,ProgressRadial:Y,ProgressBar:_},{layoutClass:"my-2",rows:[{component:"Text",props:{text:"Alignments"},layoutClass:"h-8"},{component:"Text",props:{text:"left"},centerX:"left",layoutClass:"debug h-16"},{component:"Text",props:{text:"right"},centerX:"right",layoutClass:"debug h-16"},{component:"Text",props:{text:"middle"},centerX:"middle",layoutClass:"debug h-16"},{component:"Text",props:{text:"top"},centerY:"top",layoutClass:"debug h-16"},{component:"Text",props:{text:"bottom"},centerY:"bottom",layoutClass:"debug h-16"},{component:"Text",props:{text:"middle"},centerY:"middle",layoutClass:"debug h-16"},{component:"Text",props:{text:"very middle"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16"},{component:"Text",props:{text:"Columns"},layoutClass:"h-8"},{layoutClass:"md:mx-2",cols:[{width:"md:w-1/3",component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16"},{width:"md:w-1/3",component:"ProgressRadial",props:{value:33},centerX:"middle",centerY:"middle",layoutClass:"debug "},{width:"md:w-1/3",component:"ProgressBar",centerX:"middle",centerY:"middle",layoutClass:"debug h-16"}]},{layoutClass:"md:mx-2",alignHeight:!0,cols:[{width:"md:w-1/3",component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16"},{width:"md:w-1/3",component:"ProgressRadial",props:{value:33},centerX:"middle",centerY:"middle",layoutClass:"debug p-4"},{width:"md:w-1/3",alignHeight:!0,rows:[{layoutClass:"md:mx-2",alignHeight:!0,cols:[{width:"md:w-1/3",component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16"},{width:"md:w-1/3",component:"ProgressRadial",props:{value:33},centerX:"middle",centerY:"middle",layoutClass:"debug p-4"},{width:"md:w-1/3",component:"ProgressBar",centerX:"middle",centerY:"middle",layoutClass:"debug h-16"}]}]}]},{component:"Text",props:{text:"Overflows/Wrap"},layoutClass:"h-8"},{layoutClass:"md:mx-2",wrap:"wrap",cols:[{component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16 w-72"},{component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16 w-72"},{component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16 w-72"}]},{layoutClass:"md:mx-2",wrap:"nowrap",cols:[{component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16 w-96"},{component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16 w-96"},{component:"Text",props:{text:"test"},centerX:"middle",centerY:"middle",layoutClass:"debug h-16 w-96"}]}]}]}class S extends x{constructor(e){super(),g(this,e,$,v,r,{})}}export{S as component};
