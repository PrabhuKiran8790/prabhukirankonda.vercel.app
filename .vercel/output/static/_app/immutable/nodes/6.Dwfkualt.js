import{s as j,e as p,c as h,b as I,f as i,h as $,i as m,m as y,o as d,p as w,a as M,u as D,g as H}from"../chunks/scheduler.m8nR5Aoa.js";import{S as P,i as k,b as _,d as g,m as v,a as f,t as u,e as x}from"../chunks/index.DmaBKroe.js";import"../chunks/marked.esm.RWbm33ss.js";import"../chunks/entry.BJbXkuHH.js";import{e as V}from"../chunks/index.CF6Y6_XD.js";import{p as b,P as C}from"../chunks/projects.BpW4cVTx.js";import{M as E}from"../chunks/masonry.DAeE1XoD.js";function L(l,t,s){const a=l.slice();return a[1]=t[s],a}function S(l){let t,s;return t=new C({props:{project:l[1]}}),{c(){_(t.$$.fragment)},l(a){g(t.$$.fragment,a)},m(a,e){v(t,a,e),s=!0},p:d,i(a){s||(f(t.$$.fragment,a),s=!0)},o(a){u(t.$$.fragment,a),s=!1},d(a){x(t,a)}}}function T(l){let t,s,a=V(b),e=[];for(let r=0;r<a.length;r+=1)e[r]=S(L(l,a,r));return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=y()},l(r){for(let n=0;n<e.length;n+=1)e[n].l(r);t=y()},m(r,n){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(r,n);m(r,t,n),s=!0},p:d,i(r){if(!s){for(let n=0;n<a.length;n+=1)f(e[n]);s=!0}},o(r){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)u(e[n]);s=!1},d(r){r&&i(t),w(e,r)}}}function q(l){let t,s,a;return s=new E({props:{items:b,gridGap:"0.75rem",stretchFirst:!1,reset:!0,$$slots:{default:[T]},$$scope:{ctx:l}}}),{c(){t=p("div"),_(s.$$.fragment),this.h()},l(e){t=h(e,"DIV",{class:!0});var r=I(t);g(s.$$.fragment,r),r.forEach(i),this.h()},h(){$(t,"class","max-w-7xl md:mx-auto")},m(e,r){m(e,t,r),v(s,t,null),a=!0},p(e,[r]){const n={};r&16&&(n.$$scope={dirty:r,ctx:e}),s.$set(n)},i(e){a||(f(s.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),a=!1},d(e){e&&i(t),x(s)}}}function B(l){return b.length,[]}class F extends P{constructor(t){super(),k(this,t,B,q,j,{})}}function G(l){let t,s='<div class="flex flex-col items-center justify-center gap-2"><h1 class="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">Projects</h1> <h1>I like to build things. Here are some of the things that I&#39;ve built.</h1></div>',a,e,r,n;return r=new F({}),{c(){t=p("div"),t.innerHTML=s,a=M(),e=p("div"),_(r.$$.fragment),this.h()},l(o){t=h(o,"DIV",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-o4ibbr"&&(t.innerHTML=s),a=H(o),e=h(o,"DIV",{class:!0});var c=I(e);g(r.$$.fragment,c),c.forEach(i),this.h()},h(){$(t,"class","p-4 mt-4 md:mt-8"),$(e,"class","mt-5")},m(o,c){m(o,t,c),m(o,a,c),m(o,e,c),v(r,e,null),n=!0},p:d,i(o){n||(f(r.$$.fragment,o),n=!0)},o(o){u(r.$$.fragment,o),n=!1},d(o){o&&(i(t),i(a),i(e)),x(r)}}}class R extends P{constructor(t){super(),k(this,t,null,G,j,{})}}export{R as component};
