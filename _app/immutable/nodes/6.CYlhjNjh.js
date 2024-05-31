import{s as ae,e as p,b as L,t as D,d as g,p as K,j as I,f as k,i as d,h as M,q as v,k as $,l as m,r as ie,v as X,n as oe}from"../chunks/scheduler.Fb5EwYWl.js";import{S as ce,i as fe,t as V,c as Y,a as E,b as ee,d as te,m as le,e as re,g as ne}from"../chunks/index.DCfY6FCb.js";import{e as S}from"../chunks/Icon.B4ZIYOXw.js";import{b as ue}from"../chunks/paths.CM1SMCKq.js";import{m as q}from"../chunks/menuList.nlwBfN02.js";/* empty css                                                  */import{C as he}from"../chunks/Cell.D1vNxBJo.js";import{C as de}from"../chunks/CellGroup.T_9AuxyJ.js";function O(i,l,o){const a=i.slice();return a[3]=l[o],a}function Q(i,l,o){const a=i.slice();return a[6]=l[o],a[8]=o,a}function R(i){let l,o,a;return o=new he({props:{title:i[1]?i[6].title:i[6].title_en,mx:"0",my:"0",shadow:"none",radius:"none",line:i[8]!==i[3].childs.length-1}}),{c(){l=p("a"),ee(o.$$.fragment),this.h()},l(e){l=g(e,"A",{href:!0});var h=k(l);te(o.$$.fragment,h),h.forEach(d),this.h()},h(){v(l,"href",`${ue}/en_US/${i[6].nav}`)},m(e,h){$(e,l,h),le(o,l,null),a=!0},p:oe,i(e){a||(V(o.$$.fragment,e),a=!0)},o(e){E(o.$$.fragment,e),a=!1},d(e){e&&d(l),re(o)}}}function me(i){let l,o,a=S(i[3].childs),e=[];for(let n=0;n<a.length;n+=1)e[n]=R(Q(i,a,n));const h=n=>E(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();l=L()},l(n){for(let t=0;t<e.length;t+=1)e[t].l(n);l=I(n)},m(n,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(n,t);$(n,l,t),o=!0},p(n,t){if(t&2){a=S(n[3].childs);let r;for(r=0;r<a.length;r+=1){const _=Q(n,a,r);e[r]?(e[r].p(_,t),V(e[r],1)):(e[r]=R(_),e[r].c(),V(e[r],1),e[r].m(l.parentNode,l))}for(ne(),r=a.length;r<e.length;r+=1)h(r);Y()}},i(n){if(!o){for(let t=0;t<a.length;t+=1)V(e[t]);o=!0}},o(n){e=e.filter(Boolean);for(let t=0;t<e.length;t+=1)E(e[t]);o=!1},d(n){n&&d(l),X(e,n)}}}function W(i){let l,o=(i[1]?i[3].class:i[3].class_en)+"",a,e,h,n;return h=new de({props:{$$slots:{default:[me]},$$scope:{ctx:i}}}),{c(){l=p("div"),a=D(o),e=L(),ee(h.$$.fragment),this.h()},l(t){l=g(t,"DIV",{class:!0});var r=k(l);a=M(r,o),r.forEach(d),e=I(t),te(h.$$.fragment,t),this.h()},h(){v(l,"class","text-sm px-4 mt-8 mb-2 text-gray-500")},m(t,r){$(t,l,r),m(l,a),$(t,e,r),le(h,t,r),n=!0},p(t,r){const _={};r&512&&(_.$$scope={dirty:r,ctx:t}),h.$set(_)},i(t){n||(V(h.$$.fragment,t),n=!0)},o(t){E(h.$$.fragment,t),n=!1},d(t){t&&(d(l),d(e)),re(h,t)}}}function _e(i){let l,o='<svg viewBox="0 0 90 80"><path class="fill-primary dark:fill-dark" d="M0 0H20H40H50C64.8056 0 77.7325 8.04398 84.6487 20H50H40V22.6757V30H50C55.5229 30 60 34.4771 60 40C60 45.5229 55.5229 50 50 50H40V57.3243V78.7398V80H20V66.4583V20H15.3513H0V0ZM50 80C72.0914 80 90 62.0914 90 40C90 36.547 89.5625 33.1962 88.7398 30H67.3244C69.0261 32.9417 70 36.3571 70 40C70 51.0457 61.0457 60 50 60V80Z"></path><path class="fill-dark dark:fill-primary" d="M20 30V0L0 50H20V80L40 30H20Z"></path></svg>',a,e,h='<div class="text-center text-lg underline">stdf.design</div>',n,t,r,_,C,z=i[1]?"当前组件总数：":"Current number of components: ",T,F=i[0].length+"",Z,j,x,b,U=i[1]?"English":"简体中文",A,w,B,G,H=S(q),c=[];for(let s=0;s<H.length;s+=1)c[s]=W(O(i,H,s));const se=s=>E(c[s],1,1,()=>{c[s]=null});return{c(){l=p("div"),l.innerHTML=o,a=L(),e=p("a"),e.innerHTML=h,n=L(),t=p("div"),r=p("div");for(let s=0;s<c.length;s+=1)c[s].c();_=L(),C=p("div"),T=D(z),Z=D(F),j=L(),x=p("div"),b=p("div"),A=D(U),this.h()},l(s){l=g(s,"DIV",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1dsi6kc"&&(l.innerHTML=o),a=I(s),e=g(s,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),K(e)!=="svelte-1nbgw4h"&&(e.innerHTML=h),n=I(s),t=g(s,"DIV",{class:!0});var f=k(t);r=g(f,"DIV",{});var u=k(r);for(let N=0;N<c.length;N+=1)c[N].l(u);u.forEach(d),_=I(f),C=g(f,"DIV",{class:!0});var y=k(C);T=M(y,z),Z=M(y,F),y.forEach(d),j=I(f),x=g(f,"DIV",{class:!0});var P=k(x);b=g(P,"DIV",{});var J=k(b);A=M(J,U),J.forEach(d),P.forEach(d),f.forEach(d),this.h()},h(){v(l,"class","h-14 mt-8 mb-2 flex flex-col justify-center items-center"),v(e,"href","https://stdf.design"),v(e,"target","_blank"),v(e,"rel","noreferrer"),v(C,"class","p-4"),v(x,"class","flex text-xs justify-around p-4 text-primary dark:text-dark underline"),v(t,"class","flex flex-col py-4")},m(s,f){$(s,l,f),$(s,a,f),$(s,e,f),$(s,n,f),$(s,t,f),m(t,r);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(r,null);m(t,_),m(t,C),m(C,T),m(C,Z),m(t,j),m(t,x),m(x,b),m(b,A),w=!0,B||(G=ie(b,"click",i[2]),B=!0)},p(s,[f]){if(f&2){H=S(q);let u;for(u=0;u<H.length;u+=1){const y=O(s,H,u);c[u]?(c[u].p(y,f),V(c[u],1)):(c[u]=W(y),c[u].c(),V(c[u],1),c[u].m(r,null))}for(ne(),u=H.length;u<c.length;u+=1)se(u);Y()}},i(s){if(!w){for(let f=0;f<H.length;f+=1)V(c[f]);w=!0}},o(s){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)E(c[f]);w=!1},d(s){s&&(d(l),d(a),d(e),d(n),d(t)),X(c,s),B=!1,G()}}}function pe(i){const l=q.reduce((e,h)=>(h.childs&&e.push(...h.childs),e),[]),o=sessionStorage.getItem("lang")==="zh_CN";return[l,o,()=>{sessionStorage.setItem("lang",o?"en_US":"zh_CN"),window.location.reload()}]}class be extends ce{constructor(l){super(),fe(this,l,pe,_e,ae,{})}}export{be as component};
