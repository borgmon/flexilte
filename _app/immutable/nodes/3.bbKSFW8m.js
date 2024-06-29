import{s as Z,a as p,f as u,g as h,d,k as a,i as D,b as v,h as b,j as X,m as s,K as E,C as S,n as Q,D as he}from"../chunks/scheduler.oRmF3nvV.js";import{S as ee,i as te,b as le,d as re,m as ie,t as pe,a as ue,e as ce}from"../chunks/index.Dh10oea0.js";import{F as de,T as fe}from"../chunks/TextBox.DhgrSzDX.js";import{I as ge}from"../chunks/ImageBox.BVkXBsFq.js";import{w as _e}from"../chunks/index.CT1rnwb_.js";import{c as ve}from"../chunks/common.D_pWozhy.js";const me=_e();function be(l){let e,n,r;return n=new de({props:{layoutConfig:l[0],components:ve}}),{c(){e=p("div"),le(n.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var o=h(e);re(n.$$.fragment,o),o.forEach(d),this.h()},h(){a(e,"class","px-4 container mx-auto h-[30rem] w-full")},m(t,o){D(t,e,o),ie(n,e,null),r=!0},p(t,[o]){const x={};o&1&&(x.layoutConfig=t[0]),n.$set(x)},i(t){r||(pe(n.$$.fragment,t),r=!0)},o(t){ue(n.$$.fragment,t),r=!1},d(t){t&&d(e),ce(n)}}}function xe(l,e,n){let r={rows:[{cols:[{component:"TextBox",props:{text:"Waiting for input"},posX:"middle",posY:"middle",nodeClass:"h-96"}]}]};return me.subscribe(t=>{try{const o=JSON.parse(t);n(0,r=JSON.parse(o.choices[0].message.content)),console.log("ai",r)}catch{}}),[r]}class ye extends ee{constructor(e){super(),te(this,e,xe,be,Z,{})}}function Ce(l){let e,n,r,t,o,x="Endpoint",w,m,V,y,I,U="Model",L,f,Y,T,A,ne="API key (stored in browser)",W,C,z,B,N,ae="API key (stored in browser)",F,$,J,g,O,K,_,G,k,se="Send",H,oe;return{c(){e=p("div"),n=p("div"),r=v(),t=p("label"),o=p("span"),o.textContent=x,w=v(),m=p("input"),V=v(),y=p("label"),I=p("span"),I.textContent=U,L=v(),f=p("input"),Y=v(),T=p("label"),A=p("span"),A.textContent=ne,W=v(),C=p("input"),z=v(),B=p("label"),N=p("span"),N.textContent=ae,F=v(),$=p("textarea"),J=v(),g=p("div"),O=p("button"),K=v(),_=p("textarea"),G=v(),k=p("button"),k.textContent=se,this.h()},l(c){e=u(c,"DIV",{class:!0});var i=h(e);n=u(i,"DIV",{class:!0}),h(n).forEach(d),r=b(i),t=u(i,"LABEL",{class:!0});var R=h(t);o=u(R,"SPAN",{"data-svelte-h":!0}),X(o)!=="svelte-5ayklz"&&(o.textContent=x),w=b(R),m=u(R,"INPUT",{class:!0,type:!0,placeholder:!0}),R.forEach(d),V=b(i),y=u(i,"LABEL",{class:!0});var j=h(y);I=u(j,"SPAN",{"data-svelte-h":!0}),X(I)!=="svelte-1m5u4hd"&&(I.textContent=U),L=b(j),f=u(j,"INPUT",{class:!0,type:!0,placeholder:!0}),j.forEach(d),Y=b(i),T=u(i,"LABEL",{class:!0});var q=h(T);A=u(q,"SPAN",{"data-svelte-h":!0}),X(A)!=="svelte-1rirsag"&&(A.textContent=ne),W=b(q),C=u(q,"INPUT",{class:!0,type:!0,placeholder:!0}),q.forEach(d),z=b(i),B=u(i,"LABEL",{class:!0});var M=h(B);N=u(M,"SPAN",{"data-svelte-h":!0}),X(N)!=="svelte-1rirsag"&&(N.textContent=ae),F=b(M),$=u(M,"TEXTAREA",{class:!0,rows:!0,placeholder:!0}),h($).forEach(d),M.forEach(d),i.forEach(d),J=b(c),g=u(c,"DIV",{class:!0});var P=h(g);O=u(P,"BUTTON",{class:!0}),h(O).forEach(d),K=b(P),_=u(P,"TEXTAREA",{class:!0,name:!0,id:!0,placeholder:!0}),h(_).forEach(d),G=b(P),k=u(P,"BUTTON",{class:!0,"data-svelte-h":!0}),X(k)!=="svelte-1i8gbo3"&&(k.textContent=se),P.forEach(d),this.h()},h(){a(n,"class","m-4"),a(m,"class","input rounded-container-token"),a(m,"type","text"),a(m,"placeholder","https://api.openai.com/v1/chat/completions"),a(t,"class","label"),a(f,"class","input rounded-container-token"),a(f,"type","text"),a(f,"placeholder","gpt-4o"),a(y,"class","label"),a(C,"class","input rounded-container-token"),a(C,"type","password"),a(C,"placeholder","sk-"),a(T,"class","label"),a($,"class","textarea"),a($,"rows","4"),a($,"placeholder","You are an AI assistant."),a(B,"class","label"),a(e,"class","input-group-divider rounded-container-token"),a(O,"class","input-group-shim"),a(_,"class","bg-transparent border-0 ring-0"),a(_,"name","prompt"),a(_,"id","prompt"),a(_,"placeholder","Write a message..."),a(k,"class","variant-filled-primary"),a(g,"class","input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token mt-6")},m(c,i){D(c,e,i),s(e,n),s(e,r),s(e,t),s(t,o),s(t,w),s(t,m),E(m,l[3]),s(e,V),s(e,y),s(y,I),s(y,L),s(y,f),E(f,l[1]),s(e,Y),s(e,T),s(T,A),s(T,W),s(T,C),E(C,l[2]),s(e,z),s(e,B),s(B,N),s(B,F),s(B,$),E($,l[4]),D(c,J,i),D(c,g,i),s(g,O),s(g,K),s(g,_),E(_,l[0]),s(g,G),s(g,k),H||(oe=[S(m,"input",l[6]),S(f,"input",l[7]),S(C,"input",l[8]),S($,"input",l[9]),S(_,"input",l[10]),S(k,"click",l[11])],H=!0)},p(c,[i]){i&8&&m.value!==c[3]&&E(m,c[3]),i&2&&f.value!==c[1]&&E(f,c[1]),i&4&&C.value!==c[2]&&E(C,c[2]),i&16&&E($,c[4]),i&1&&E(_,c[0])},i:Q,o:Q,d(c){c&&(d(e),d(J),d(g)),H=!1,he(oe)}}}function $e(l,e,n){let r="Please generate me a personal website",t="gpt-4o",o="",x="https://api.openai.com/v1/chat/completions",w='You are a AI chatbot that only response JSON. You are required to generate a json based on this example:`{"rows":[{"component":"TextBox","props":{"text":"My Website!","type":"h1"},"posX":"middle"},{"layoutClass":"md:my-12","cols":[{"component":"TextBox","props":{"text":"Hi! This is AI generated!","type":"h1"},"posX":"middle","posY":"middle"},{"component":"CodeBlock","props":{"language":"ts","code":"console.log(123)"},"posX":"middle","posY":"middle"},{"component":"ImageBox","props":{"url":"https://placedog.net/200/200"},"posX":"middle","posY":"middle"}]}]}` You have 3 components you can use: TextBox,CodeBlock,ImageBox.';async function m(){const Y={messages:[{role:"system",content:w},{role:"user",content:r}],model:"gpt-3.5-turbo",temperature:1,presence_penalty:0,top_p:1,frequency_penalty:0},A=await(await fetch(x,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify(Y)})).text();me.set(A)}function V(){x=this.value,n(3,x)}function y(){t=this.value,n(1,t)}function I(){o=this.value,n(2,o)}function U(){w=this.value,n(4,w)}function L(){r=this.value,n(0,r)}return[r,t,o,x,w,m,V,y,I,U,L,()=>m()]}class Ee extends ee{constructor(e){super(),te(this,e,$e,Ce,Z,{})}}function Te(l){let e,n,r;return n=new de({props:{layoutConfig:l[1],components:l[0]}}),{c(){e=p("div"),le(n.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var o=h(e);re(n.$$.fragment,o),o.forEach(d),this.h()},h(){a(e,"class","px-4 container mx-auto")},m(t,o){D(t,e,o),ie(n,e,null),r=!0},p:Q,i(t){r||(pe(n.$$.fragment,t),r=!0)},o(t){ue(n.$$.fragment,t),r=!1},d(t){t&&d(e),ce(n)}}}function we(l){return[{TextBox:fe,ImageBox:ge,ChatView:ye,InputView:Ee},{rows:[{component:"ChatView"},{component:"InputView"}]}]}class Se extends ee{constructor(e){super(),te(this,e,we,Te,Z,{})}}export{Se as component};
