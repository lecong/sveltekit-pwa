import{s as wt,e as h,b as _,d as b,f as C,j as $,i as g,q as I,A as Ce,K as Bt,k as J,l as i,P as Mt,v as Ft,C as Ht,r as qt,F as gt,J as be,t as st,h as rt,m as jt,p as q}from"../chunks/scheduler.Fb5EwYWl.js";import{S as Et,i as yt,t as z,g as Tt,c as Wt,a as V,b as E,d as y,m as T,e as W}from"../chunks/index.DCfY6FCb.js";/* empty css                                                  */import{e as _t,I as $t}from"../chunks/Icon.B4ZIYOXw.js";import{g as pt,a as It}from"../chunks/spread.CgU5AtxT.js";function Ct(e,n,a){const l=e.slice();return l[16]=n[a],l[18]=a,l}function zt(e){let n,a;return{c(){n=h("div"),this.h()},l(l){n=b(l,"DIV",{class:!0,style:!0}),C(n).forEach(g),this.h()},h(){I(n,"class",a="mx-auto rounded-full h-[2px] absolute transition-all bottom-px bg-primary dark:bg-dark "+e[8]),Ce(n,"width",(e[3]<1?e[9]/e[1].length:e[10]<2?2:e[10])+"px"),Ce(n,"left",(e[3]<1?e[0]*(e[9]/e[1].length):e[11])+"px")},m(l,u){J(l,n,u)},p(l,u){u&256&&a!==(a="mx-auto rounded-full h-[2px] absolute transition-all bottom-px bg-primary dark:bg-dark "+l[8])&&I(n,"class",a),u&1546&&Ce(n,"width",(l[3]<1?l[9]/l[1].length:l[10]<2?2:l[10])+"px"),u&2571&&Ce(n,"left",(l[3]<1?l[0]*(l[9]/l[1].length):l[11])+"px")},d(l){l&&g(n)}}}function kt(e){let n,a,l,u,m,v,c;const f=[e[16].icon,{name:e[16].activeIcon?e[16].activeIcon.name:e[16].icon.name},{size:e[18]===e[0]&&e[16].activeIcon&&e[16].activeIcon.size*(e[4]?1.2:1)||e[16].icon.size*(e[4]?1.2:1)},{top:0}];let s={};for(let t=0;t<f.length;t+=1)s=gt(s,f[t]);l=new $t({props:s});const D=[e[16].icon,{name:e[16].icon.name},{size:e[18]===e[0]&&e[16].activeIcon&&e[16].activeIcon.size*(e[4]?1.2:1)||e[16].icon.size*(e[4]?1.2:1)},{top:0}];let o={};for(let t=0;t<D.length;t+=1)o=gt(o,D[t]);return v=new $t({props:o}),{c(){n=h("div"),a=h("i"),E(l.$$.fragment),u=_(),m=h("i"),E(v.$$.fragment),this.h()},l(t){n=b(t,"DIV",{});var r=C(n);a=b(r,"I",{});var j=C(a);y(l.$$.fragment,j),j.forEach(g),u=$(r),m=b(r,"I",{});var M=C(m);y(v.$$.fragment,M),M.forEach(g),r.forEach(g),this.h()},h(){be(a,"hidden",e[18]!==e[0]),be(m,"hidden",e[18]===e[0]),be(n,"py-2",!e[16].text)},m(t,r){J(t,n,r),i(n,a),T(l,a,null),i(n,u),i(n,m),T(v,m,null),c=!0},p(t,r){const j=r&19?pt(f,[r&2&&It(t[16].icon),r&2&&{name:t[16].activeIcon?t[16].activeIcon.name:t[16].icon.name},{size:t[18]===t[0]&&t[16].activeIcon&&t[16].activeIcon.size*(t[4]?1.2:1)||t[16].icon.size*(t[4]?1.2:1)},f[3]]):{};l.$set(j),(!c||r&1)&&be(a,"hidden",t[18]!==t[0]);const M=r&19?pt(D,[r&2&&It(t[16].icon),r&2&&{name:t[16].icon.name},{size:t[18]===t[0]&&t[16].activeIcon&&t[16].activeIcon.size*(t[4]?1.2:1)||t[16].icon.size*(t[4]?1.2:1)},D[3]]):{};v.$set(M),(!c||r&1)&&be(m,"hidden",t[18]===t[0]),(!c||r&2)&&be(n,"py-2",!t[16].text)},i(t){c||(z(l.$$.fragment,t),z(v.$$.fragment,t),c=!0)},o(t){V(l.$$.fragment,t),V(v.$$.fragment,t),c=!1},d(t){t&&g(n),W(l),W(v)}}}function Dt(e){let n,a=e[16].text+"",l,u;return{c(){n=h("div"),l=st(a),this.h()},l(m){n=b(m,"DIV",{class:!0});var v=C(n);l=rt(v,a),v.forEach(g),this.h()},h(){I(n,"class",u=`${e[16].icon?"mt-[2px]":"py-1 text-lg"} ${e[18]===e[0]&&!e[16].icon?" font-bold":""}`)},m(m,v){J(m,n,v),i(n,l)},p(m,v){v&2&&a!==(a=m[16].text+"")&&jt(l,a),v&3&&u!==(u=`${m[16].icon?"mt-[2px]":"py-1 text-lg"} ${m[18]===m[0]&&!m[16].icon?" font-bold":""}`)&&I(n,"class",u)},d(m){m&&g(n)}}}function Vt(e){let n,a,l,u,m,v,c,f=e[16].icon&&kt(e),s=e[16].text&&Dt(e);function D(){return e[13](e[18])}return{c(){n=h("div"),f&&f.c(),a=_(),s&&s.c(),l=_(),this.h()},l(o){n=b(o,"DIV",{class:!0});var t=C(n);f&&f.l(t),a=$(t),s&&s.l(t),l=$(t),t.forEach(g),this.h()},h(){I(n,"class",u=`flex-1 flex flex-col justify-center text-center py-1 active:opacity-80 cursor-pointer ${e[18]===e[0]?"text-primary dark:text-dark":"text-black/80 dark:text-white/90"} ${e[4]?"text-lg":"text-sm"} ${e[6]} ${e[18]===e[0]&&e[7]}`)},m(o,t){J(o,n,t),f&&f.m(n,null),i(n,a),s&&s.m(n,null),i(n,l),m=!0,v||(c=qt(n,"click",D),v=!0)},p(o,t){e=o,e[16].icon?f?(f.p(e,t),t&2&&z(f,1)):(f=kt(e),f.c(),z(f,1),f.m(n,a)):f&&(Tt(),V(f,1,1,()=>{f=null}),Wt()),e[16].text?s?s.p(e,t):(s=Dt(e),s.c(),s.m(n,l)):s&&(s.d(1),s=null),(!m||t&209&&u!==(u=`flex-1 flex flex-col justify-center text-center py-1 active:opacity-80 cursor-pointer ${e[18]===e[0]?"text-primary dark:text-dark":"text-black/80 dark:text-white/90"} ${e[4]?"text-lg":"text-sm"} ${e[6]} ${e[18]===e[0]&&e[7]}`))&&I(n,"class",u)},i(o){m||(z(f),m=!0)},o(o){V(f),m=!1},d(o){o&&g(n),f&&f.d(),s&&s.d(),v=!1,c()}}}function At(e){let n,a,l,u,m,v,c=e[2]&&zt(e),f=_t(e[1]),s=[];for(let o=0;o<f.length;o+=1)s[o]=Vt(Ct(e,f,o));const D=o=>V(s[o],1,1,()=>{s[o]=null});return{c(){n=h("div"),c&&c.c(),a=_(),l=h("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){n=b(o,"DIV",{class:!0,style:!0});var t=C(n);c&&c.l(t),a=$(t),l=b(t,"DIV",{class:!0});var r=C(l);for(let j=0;j<s.length;j+=1)s[j].l(r);r.forEach(g),t.forEach(g),this.h()},h(){I(l,"class","flex justify-between"),I(n,"class",u="bg-white dark:bg-gray-800 relative "+e[5]),Ce(n,"padding-bottom","env(safe-area-inset-bottom)"),Bt(()=>e[14].call(n))},m(o,t){J(o,n,t),c&&c.m(n,null),i(n,a),i(n,l);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(l,null);m=Mt(n,e[14].bind(n)),v=!0},p(o,[t]){if(o[2]?c?c.p(o,t):(c=zt(o),c.c(),c.m(n,a)):c&&(c.d(1),c=null),t&4307){f=_t(o[1]);let r;for(r=0;r<f.length;r+=1){const j=Ct(o,f,r);s[r]?(s[r].p(j,t),z(s[r],1)):(s[r]=Vt(j),s[r].c(),z(s[r],1),s[r].m(l,null))}for(Tt(),r=f.length;r<s.length;r+=1)D(r);Wt()}(!v||t&32&&u!==(u="bg-white dark:bg-gray-800 relative "+o[5]))&&I(n,"class",u)},i(o){if(!v){for(let t=0;t<f.length;t+=1)z(s[t]);v=!0}},o(o){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)V(s[t]);v=!1},d(o){o&&g(n),c&&c.d(),Ft(s,o),m()}}}function St(e,n,a){let l,u,{labels:m=[]}=n,{active:v=0}=n,{line:c=!1}=n,{lineW:f=4}=n,{love:s=!1}=n,{injClass:D=""}=n,{tabInjClass:o=""}=n,{activeTabInjClass:t=""}=n,{activeInjClass:r=""}=n;const j=Ht(),M=p=>{a(0,v=p),j("change",v)};let H=0;const ze=p=>M(p);function ge(){H=this.clientWidth,a(9,H)}return e.$$set=p=>{"labels"in p&&a(1,m=p.labels),"active"in p&&a(0,v=p.active),"line"in p&&a(2,c=p.line),"lineW"in p&&a(3,f=p.lineW),"love"in p&&a(4,s=p.love),"injClass"in p&&a(5,D=p.injClass),"tabInjClass"in p&&a(6,o=p.tabInjClass),"activeTabInjClass"in p&&a(7,t=p.activeTabInjClass),"activeInjClass"in p&&a(8,r=p.activeInjClass)},e.$$.update=()=>{e.$$.dirty&522&&a(10,l=H/m.length/f),e.$$.dirty&1539&&a(11,u=v*(H/m.length)+H/m.length/2-l/2)},[v,m,c,f,s,D,o,t,r,H,l,u,M,ze,ge]}class F extends Et{constructor(n){super(),yt(this,n,St,At,wt,{labels:1,active:0,line:2,lineW:3,love:4,injClass:5,tabInjClass:6,activeTabInjClass:7,activeInjClass:8})}}function Pt(e){let n,a,l,u,m="Basic usage",v,c,f,s,D,o="Text only",t,r,j,M,H,ze="Icon only",ge,p,Fe,w,K,ot="Belt line",He,L,qe,_e,Ae,N,Se,$e,Pe,O,Je,pe,Ke,G,Le,Q,R,ft="ICONS change colors only",Ne,U,Oe,X,Y,dt="Customize the outermost layer",Ge,Z,Qe,x,ee,ct="customize Tab",Re,te,Ue,ne,ae,mt="Custom selection Tab",Xe,ie,Ye,le,se,vt="Custom line",Ze,re,xe,oe,fe,ut="Care edition",et,de,tt,A,ce,ht="monitor change event",nt,me,at,ke,it,S,De,ve,ue,Ie;return c=new F({props:{labels:e[1]}}),r=new F({props:{labels:e[2]}}),p=new F({props:{labels:e[3]}}),L=new F({props:{labels:e[1],line:!0,lineW:8}}),N=new F({props:{labels:e[1],line:!0}}),O=new F({props:{labels:e[1],line:!0,lineW:2}}),G=new F({props:{labels:e[1],line:!0,lineW:1}}),U=new F({props:{labels:e[4]}}),Z=new F({props:{labels:e[1],injClass:"mx-2 rounded-full shadow-md dark:shadow-white/10"}}),te=new F({props:{labels:e[1],tabInjClass:"text-extend0 dark:text-extend2",activeTabInjClass:"!text-primary dark:!text-dark"}}),ie=new F({props:{labels:e[1],activeTabInjClass:"text-extend0 dark:text-extend1"}}),re=new F({props:{labels:e[1],line:!0,activeInjClass:"bg-extend0 dark:bg-extend1"}}),de=new F({props:{labels:e[1],love:!0}}),S=new F({props:{labels:e[1]}}),S.$on("change",e[6]),ue=new F({props:{labels:e[5],injClass:"bg-white/50 dark:bg-black/50 backdrop-blur"}}),{c(){n=h("div"),a=h("div"),l=h("div"),u=h("div"),u.textContent=m,v=_(),E(c.$$.fragment),f=_(),s=h("div"),D=h("div"),D.textContent=o,t=_(),E(r.$$.fragment),j=_(),M=h("div"),H=h("div"),H.textContent=ze,ge=_(),E(p.$$.fragment),Fe=_(),w=h("div"),K=h("div"),K.textContent=ot,He=_(),E(L.$$.fragment),qe=_(),_e=h("div"),Ae=_(),E(N.$$.fragment),Se=_(),$e=h("div"),Pe=_(),E(O.$$.fragment),Je=_(),pe=h("div"),Ke=_(),E(G.$$.fragment),Le=_(),Q=h("div"),R=h("div"),R.textContent=ft,Ne=_(),E(U.$$.fragment),Oe=_(),X=h("div"),Y=h("div"),Y.textContent=dt,Ge=_(),E(Z.$$.fragment),Qe=_(),x=h("div"),ee=h("div"),ee.textContent=ct,Re=_(),E(te.$$.fragment),Ue=_(),ne=h("div"),ae=h("div"),ae.textContent=mt,Xe=_(),E(ie.$$.fragment),Ye=_(),le=h("div"),se=h("div"),se.textContent=vt,Ze=_(),E(re.$$.fragment),xe=_(),oe=h("div"),fe=h("div"),fe.textContent=ut,et=_(),E(de.$$.fragment),tt=_(),A=h("div"),ce=h("div"),ce.textContent=ht,nt=_(),me=h("div"),at=st("At present TabBar activated active："),ke=st(e[0]),it=_(),E(S.$$.fragment),De=_(),ve=h("div"),E(ue.$$.fragment),this.h()},l(d){n=b(d,"DIV",{class:!0});var P=C(n);a=b(P,"DIV",{class:!0});var k=C(a);l=b(k,"DIV",{});var Ve=C(l);u=b(Ve,"DIV",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-1090wpy"&&(u.textContent=m),v=$(Ve),y(c.$$.fragment,Ve),Ve.forEach(g),f=$(k),s=b(k,"DIV",{});var we=C(s);D=b(we,"DIV",{class:!0,"data-svelte-h":!0}),q(D)!=="svelte-h6i1hk"&&(D.textContent=o),t=$(we),y(r.$$.fragment,we),we.forEach(g),j=$(k),M=b(k,"DIV",{});var je=C(M);H=b(je,"DIV",{class:!0,"data-svelte-h":!0}),q(H)!=="svelte-112yu92"&&(H.textContent=ze),ge=$(je),y(p.$$.fragment,je),je.forEach(g),Fe=$(k),w=b(k,"DIV",{});var B=C(w);K=b(B,"DIV",{class:!0,"data-svelte-h":!0}),q(K)!=="svelte-1lsifze"&&(K.textContent=ot),He=$(B),y(L.$$.fragment,B),qe=$(B),_e=b(B,"DIV",{class:!0}),C(_e).forEach(g),Ae=$(B),y(N.$$.fragment,B),Se=$(B),$e=b(B,"DIV",{class:!0}),C($e).forEach(g),Pe=$(B),y(O.$$.fragment,B),Je=$(B),pe=b(B,"DIV",{class:!0}),C(pe).forEach(g),Ke=$(B),y(G.$$.fragment,B),B.forEach(g),Le=$(k),Q=b(k,"DIV",{});var Ee=C(Q);R=b(Ee,"DIV",{class:!0,"data-svelte-h":!0}),q(R)!=="svelte-1g52bz5"&&(R.textContent=ft),Ne=$(Ee),y(U.$$.fragment,Ee),Ee.forEach(g),Oe=$(k),X=b(k,"DIV",{});var ye=C(X);Y=b(ye,"DIV",{class:!0,"data-svelte-h":!0}),q(Y)!=="svelte-1mpltwm"&&(Y.textContent=dt),Ge=$(ye),y(Z.$$.fragment,ye),ye.forEach(g),Qe=$(k),x=b(k,"DIV",{});var Te=C(x);ee=b(Te,"DIV",{class:!0,"data-svelte-h":!0}),q(ee)!=="svelte-nk1k23"&&(ee.textContent=ct),Re=$(Te),y(te.$$.fragment,Te),Te.forEach(g),Ue=$(k),ne=b(k,"DIV",{});var We=C(ne);ae=b(We,"DIV",{class:!0,"data-svelte-h":!0}),q(ae)!=="svelte-1inhsg3"&&(ae.textContent=mt),Xe=$(We),y(ie.$$.fragment,We),We.forEach(g),Ye=$(k),le=b(k,"DIV",{});var Be=C(le);se=b(Be,"DIV",{class:!0,"data-svelte-h":!0}),q(se)!=="svelte-ujriw4"&&(se.textContent=vt),Ze=$(Be),y(re.$$.fragment,Be),Be.forEach(g),xe=$(k),oe=b(k,"DIV",{});var Me=C(oe);fe=b(Me,"DIV",{class:!0,"data-svelte-h":!0}),q(fe)!=="svelte-1gn8w7o"&&(fe.textContent=ut),et=$(Me),y(de.$$.fragment,Me),Me.forEach(g),tt=$(k),A=b(k,"DIV",{});var he=C(A);ce=b(he,"DIV",{class:!0,"data-svelte-h":!0}),q(ce)!=="svelte-ihq737"&&(ce.textContent=ht),nt=$(he),me=b(he,"DIV",{class:!0});var lt=C(me);at=rt(lt,"At present TabBar activated active："),ke=rt(lt,e[0]),lt.forEach(g),it=$(he),y(S.$$.fragment,he),he.forEach(g),k.forEach(g),P.forEach(g),De=$(d),ve=b(d,"DIV",{class:!0});var bt=C(ve);y(ue.$$.fragment,bt),bt.forEach(g),this.h()},h(){I(u,"class","font-bold px-4 mb-2"),I(D,"class","font-bold px-4 mb-2"),I(H,"class","font-bold px-4 mb-2"),I(K,"class","font-bold px-4 mb-2"),I(_e,"class","mt-2"),I($e,"class","mt-2"),I(pe,"class","mt-2"),I(R,"class","font-bold px-4 mb-2"),I(Y,"class","font-bold px-4 mb-2"),I(ee,"class","font-bold px-4 mb-2"),I(ae,"class","font-bold px-4 mb-2"),I(se,"class","font-bold px-4 mb-2"),I(fe,"class","font-bold px-4 mb-2"),I(ce,"class","font-bold px-4 mb-2"),I(me,"class","m-4"),I(a,"class","space-y-8 my-4"),I(n,"class","py-8 mb-20"),I(ve,"class","fixed w-full bottom-0")},m(d,P){J(d,n,P),i(n,a),i(a,l),i(l,u),i(l,v),T(c,l,null),i(a,f),i(a,s),i(s,D),i(s,t),T(r,s,null),i(a,j),i(a,M),i(M,H),i(M,ge),T(p,M,null),i(a,Fe),i(a,w),i(w,K),i(w,He),T(L,w,null),i(w,qe),i(w,_e),i(w,Ae),T(N,w,null),i(w,Se),i(w,$e),i(w,Pe),T(O,w,null),i(w,Je),i(w,pe),i(w,Ke),T(G,w,null),i(a,Le),i(a,Q),i(Q,R),i(Q,Ne),T(U,Q,null),i(a,Oe),i(a,X),i(X,Y),i(X,Ge),T(Z,X,null),i(a,Qe),i(a,x),i(x,ee),i(x,Re),T(te,x,null),i(a,Ue),i(a,ne),i(ne,ae),i(ne,Xe),T(ie,ne,null),i(a,Ye),i(a,le),i(le,se),i(le,Ze),T(re,le,null),i(a,xe),i(a,oe),i(oe,fe),i(oe,et),T(de,oe,null),i(a,tt),i(a,A),i(A,ce),i(A,nt),i(A,me),i(me,at),i(me,ke),i(A,it),T(S,A,null),J(d,De,P),J(d,ve,P),T(ue,ve,null),Ie=!0},p(d,[P]){(!Ie||P&1)&&jt(ke,d[0])},i(d){Ie||(z(c.$$.fragment,d),z(r.$$.fragment,d),z(p.$$.fragment,d),z(L.$$.fragment,d),z(N.$$.fragment,d),z(O.$$.fragment,d),z(G.$$.fragment,d),z(U.$$.fragment,d),z(Z.$$.fragment,d),z(te.$$.fragment,d),z(ie.$$.fragment,d),z(re.$$.fragment,d),z(de.$$.fragment,d),z(S.$$.fragment,d),z(ue.$$.fragment,d),Ie=!0)},o(d){V(c.$$.fragment,d),V(r.$$.fragment,d),V(p.$$.fragment,d),V(L.$$.fragment,d),V(N.$$.fragment,d),V(O.$$.fragment,d),V(G.$$.fragment,d),V(U.$$.fragment,d),V(Z.$$.fragment,d),V(te.$$.fragment,d),V(ie.$$.fragment,d),V(re.$$.fragment,d),V(de.$$.fragment,d),V(S.$$.fragment,d),V(ue.$$.fragment,d),Ie=!1},d(d){d&&(g(n),g(De),g(ve)),W(c),W(r),W(p),W(L),W(N),W(O),W(G),W(U),W(Z),W(te),W(ie),W(re),W(de),W(S),W(ue)}}}function Jt(e,n,a){const l=[{text:"Home",icon:{name:"ri-home-3-line",size:20},activeIcon:{name:"ri-home-3-fill",size:20}},{text:"Discover",icon:{name:"ri-compass-3-line",size:20},activeIcon:{name:"ri-compass-3-fill",size:20}},{text:"Message",icon:{name:"ri-discuss-line",size:20},activeIcon:{name:"ri-discuss-fill",size:20}},{text:"Mine",icon:{name:"ri-account-circle-line",size:20},activeIcon:{name:"ri-account-circle-fill",size:20}}],u=[{text:"Home"},{text:"Discover"},{text:"Message"},{text:"Mine"}],m=[{icon:{name:"ri-home-3-line",size:26},activeIcon:{name:"ri-home-3-fill",size:26}},{icon:{name:"ri-compass-3-line",size:26},activeIcon:{name:"ri-compass-3-fill",size:26}},{icon:{name:"ri-discuss-line",size:26},activeIcon:{name:"ri-discuss-fill",size:26}},{icon:{name:"ri-account-circle-line",size:26},activeIcon:{name:"ri-account-circle-fill",size:26}}],v=[{text:"Home",icon:{name:"ri-home-3-line",size:20}},{text:"Discover",icon:{name:"ri-compass-3-line",size:20}},{text:"Message",icon:{name:"ri-discuss-line",size:20}},{text:"Mine",icon:{name:"ri-account-circle-line",size:20}}],c=[{text:"Home",icon:{name:"ri-home-3-line",size:20},activeIcon:{name:"ri-home-3-fill",size:20}},{text:"Message",icon:{name:"ri-discuss-line",size:20},activeIcon:{name:"ri-discuss-fill",size:20}},{text:"Mine",icon:{name:"ri-account-circle-line",size:20},activeIcon:{name:"ri-account-circle-fill",size:20}}];let f=0;return[f,l,u,m,v,c,D=>{a(0,f=D.detail)}]}class Qt extends Et{constructor(n){super(),yt(this,n,Jt,Pt,wt,{})}}export{Qt as component};
