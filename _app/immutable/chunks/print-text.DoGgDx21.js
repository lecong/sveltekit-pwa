import{ac as v,M as Fe,ad as Ve,ae as Xe,s as He,D as K,k as ue,i as U,af as Me,F as B,ag as Ye,w as pe,X as Ie,V as se,c as Ce,e as Ge,d as Je,f as Qe,ah as ke,r as Ze,u as Ee,g as Re,a as Le}from"./scheduler.Cqx9mpaU.js";import{S as Ne,i as je,g as xe,a as y,c as Ae,t as M,b as ve,d as Oe,m as Be,e as Te}from"./index.D97uDbtJ.js";import{g as de,a as _e}from"./spread.CgU5AtxT.js";import{w as we}from"./index.C5SO1b7Z.js";function f(){const i=[];for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];t.forEach(r=>{typeof r=="object"&&r.constructor===Object?Object.keys(r).forEach(d=>{r[d]&&i.push(d)}):Array.isArray(r)?i.push(...r):typeof r=="function"?i.push(r()):r&&r.value?i.push(r.value):r&&i.push(r)});const a=[];return i.forEach(r=>{a.indexOf(r)<0&&a.push(r)}),a.filter(r=>!!r).join(" ")}const $e=function(i,e){return e===void 0&&(e=""),!e||typeof e!="string"?i:["static","relative","absolute","fixed","sticky"].filter(a=>e.indexOf(a)>=0).length>0?"":i},b=we({theme:"material",dark:!0,touchRipple:!0}),oe=(i,e,t)=>{if(typeof i=="string")return i;const l=[i.common,i[e]];return t&&i[t]&&(typeof i[t]=="string"?l.push(i[t]):l.push(i[t].common,i[t][e])),l},et=(i,e,t)=>{const l={},a=["common","ios","material"];return Object.keys(i).forEach(r=>{const d=r==="base"?t:"";if(!(typeof i[r]!="string"&&Object.keys(i[r]).filter(s=>!a.includes(s)).length>0)){l[r]=f(oe(i[r],e),d);return}l[r]={};const o=oe(i[r],e);l[r].default=f(o,d),Object.keys(i[r]).filter(s=>!a.includes(s)).forEach(s=>{l[r][s]=f(o,oe(i[r],e,s),d)})}),l},tt=(i,e,t="",l)=>{let a=v(b).theme;const r=()=>et(typeof e=="function"?e():e,a,t);return i.ios?a="ios":i.material?a="material":b.subscribe(d=>{a=d.theme||"ios",l&&l(r())}),r()},it=(i,e)=>{let t,l;typeof i=="function"?(e=i,i={}):(t=i.ios,l=i.material);const a=r=>{let d=r.theme||"ios";return t&&(d="ios"),l&&(d="material"),d};return e&&b.subscribe(r=>{e(a(r))}),a(v(b))},nt=()=>i=>v(b).dark?i:"";class lt{constructor(e,t,l){const a=this;if(!e)return;a.el=e;const{left:r,top:d,width:u,height:o}=e.getBoundingClientRect(),s={x:t-r,y:l-d};let c=Math.max((o**2+u**2)**.5,48);const m=e.classList.contains("k-touch-ripple-inset");m&&(c=Math.max(Math.min(u,o),48));const k=typeof window<"u"&&window.getComputedStyle(e,null).getPropertyValue("overflow")==="hidden";if(!m&&k){const g=((s.x-u/2)**2+(s.y-o/2)**2)**.5,T=(c/2+g)/(c/2);a.rippleTransform=`translate3d(0px, 0px, 0) scale(${T})`}else a.rippleTransform=`translate3d(${-s.x+u/2}px, ${-s.y+o/2}px, 0) scale(1)`;a.rippleWaveEl=document.createElement("span"),a.rippleWaveEl.classList.add("k-touch-ripple-wave"),a.rippleWaveEl.setAttribute("hidden",""),a.rippleWaveEl.style=`
      width: ${c}px;
      height: ${c}px;
      margin-top:-${c/2}px;
      margin-left:-${c/2}px;
      left:${s.x}px;
      top:${s.y}px; --k-ripple-transform: ${a.rippleTransform}`,e.insertAdjacentElement("afterbegin",a.rippleWaveEl);const p=()=>{a.rippleWaveEl.removeEventListener("animationend",p),a.rippleWaveEl&&(a.rippleWaveEl.classList.contains("k-touch-ripple-wave-out")||(a.rippleWaveEl.classList.add("k-touch-ripple-wave-in"),a.shouldBeRemoved&&a.out()))};return a.rippleWaveEl.addEventListener("animationend",p),a}destroy(){let e=this;e.rippleWaveEl&&e.el.removeChild(e.rippleWaveEl),Object.keys(e).forEach(t=>{e[t]=null,delete e[t]}),e=null}out(){const e=this,{rippleWaveEl:t}=this;clearTimeout(e.removeTimeout),t.classList.add("k-touch-ripple-wave-out"),e.removeTimeout=setTimeout(()=>{e.destroy()},300);const l=()=>{e.rippleWaveEl.removeEventListener("animationend",l),clearTimeout(e.removeTimeout),e.destroy()};e.rippleWaveEl.addEventListener("animationend",l)}remove(){const e=this;e.shouldBeRemoved||(e.removeTimeout=setTimeout(()=>{e.destroy()},400),e.shouldBeRemoved=!0,e.rippleWaveEl.classList.contains("k-touch-ripple-wave-in")&&e.out())}}const at=(i,e,t)=>{t||(t=i);const l=()=>e&&v(b).theme==="material"&&v(b).touchRipple;let a=null;const r=()=>{a&&a.remove(),a=null},d=m=>{a=new lt(i.current,m.pageX,m.pageY)},u=()=>{r()},o=()=>{r()},s=()=>{!t||!t.current||!t.current.addEventListener||!l()||t.__touchRippleAttached__||(t.__touchRippleAttached__=!0,t.current.addEventListener("pointerdown",d),t.current.addEventListener("pointermove",u),t.current.addEventListener("pointerup",o),t.current.addEventListener("pointercancel",o),t.current.addEventListener("contextmenu",o))},c=m=>{!t||!t.current||!t.current.addEventListener||(m&&delete t.__touchRippleAttached__,t.current.removeEventListener("pointerdown",d),t.current.removeEventListener("pointermove",u),t.current.removeEventListener("pointerup",o),t.current.removeEventListener("pointercancel",o),t.current.removeEventListener("contextmenu",o))};Fe(()=>{s()}),Ve(()=>{l()||c(!0)}),Xe(()=>{c(!0)}),b.subscribe(()=>{l()?(c(),s()):c()})},rt=(i,e,t,l)=>{const{inline:a,segmented:r,segmentedStrong:d,segmentedActive:u,disabled:o}=i;return{base:{common:f("flex text-center justify-center items-center appearance-none py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10",a?"inline-flex":"w-full flex",$e("relative",t),o&&"pointer-events-none",d&&u&&"k-segmented-strong-button-active"),ios:"uppercase duration-100 font-semibold px-2",material:"duration-300 font-medium px-4",square:{ios:r&&!d?"first:rounded-s last:rounded-e":"rounded",material:r&&!d?"first:rounded-lg-s last:rounded-lg-e":"rounded-lg"},rounded:r&&!d?"":"rounded-full"},style:{fill:{common:f(o&&f(e.disabledBg,e.disabledText)),ios:f(o?f(e.disabledBg,e.disabledText):`${e.fillTextIos} ${e.fillBgIos} ${e.fillActiveBgIos}`),material:f(o?f(e.disabledBg,e.disabledText):f(e.fillTextMaterial,e.fillBgMaterial,e.fillActiveBgMaterial,e.fillTouchRipple))},outline:{common:f(o?f(e.disabledText,e.disabledBorder):f("active:bg-opacity-15",e.touchRipple)),ios:f(!r&&"border-2",!o&&!r&&e.outlineBorderIos,!o&&f(e.textIos,e.activeBgIos)),material:f(!r&&"border",!o&&!r&&e.outlineBorderMaterial,!o&&f(e.textMaterial,e.activeBgMaterial))},clear:{common:f(o?e.disabledText:`active:bg-opacity-15 ${e.touchRipple}`),ios:!o&&f(e.textIos,e.activeBgIos),material:!o&&f(e.textMaterial,e.activeBgMaterial)},tonal:{common:o?f(e.disabledBg,e.disabledText):f(e.touchRipple),ios:!o&&f(e.tonalTextIos,e.tonalBgIos,e.activeBgIos,"bg-opacity-15 active:bg-opacity-25"),material:!o&&f(e.tonalTextMaterial,e.tonalBgMaterial,e.activeBgMaterial)},segmentedStrong:f("active:bg-black active:bg-opacity-10",l("dark:active:bg-white dark:active:bg-opacity-5 dark:touch-ripple-white")),segmentedStrongActive:"duration-0"},size:{small:{ios:"text-xs h-7",material:"text-sm h-8"},medium:{common:"text-sm",ios:"h-7",material:"h-10"},large:{ios:"h-11",material:"h-12"}},raised:"shadow active:shadow-lg"}},ot=function(i,e){return i===void 0&&(i={}),{activeBgIos:"active:bg-primary",activeBgMaterial:"",textIos:"text-primary",textMaterial:f("text-md-light-primary","dark:text-md-dark-primary"),fillTextIos:f("text-white"),fillTextMaterial:f("text-md-light-on-primary",e("dark:text-md-dark-on-primary")),fillActiveBgIos:"active:bg-ios-primary-shade",fillActiveBgMaterial:"",fillBgIos:"bg-primary",fillBgMaterial:f("bg-md-light-primary",e("dark:bg-md-dark-primary")),fillTouchRipple:f("touch-ripple-white","dark:touch-ripple-primary"),outlineBorderIos:"border-primary",outlineBorderMaterial:f("border-md-light-outline",e("dark:border-md-dark-outline")),tonalBgIos:"bg-primary",tonalBgMaterial:f("bg-md-light-secondary-container",e("dark:bg-md-dark-secondary-container")),tonalTextIos:"text-primary",tonalTextMaterial:f("text-md-light-on-secondary-container",e("dark:text-md-dark-on-secondary-container")),touchRipple:"touch-ripple-primary",disabledText:f("text-black text-opacity-30",e("dark:text-white dark:text-opacity-30")),disabledBg:f("bg-black bg-opacity-10",e("dark:bg-white dark:bg-opacity-10")),disabledBorder:f("border-black border-opacity-10",e("dark:border-white dark:border-opacity-10")),...i}};function st(i){let e,t,l;const a=[{class:i[4]},{disabled:i[1]},i[5]];var r=i[0];function d(u,o){let s={$$slots:{default:[ut]},$$scope:{ctx:u}};for(let c=0;c<a.length;c+=1)s=B(s,a[c]);return o!==void 0&&o[0]&50&&(s=B(s,de(a,[o[0]&16&&{class:u[4]},o[0]&2&&{disabled:u[1]},o[0]&32&&_e(u[5])]))),{props:s}}return r&&(e=Ie(r,d(i)),i[52](e),e.$on("click",function(){se(i[2])&&i[2].apply(this,arguments)})),{c(){e&&ve(e.$$.fragment),t=K()},l(u){e&&Oe(e.$$.fragment,u),t=K()},m(u,o){e&&Be(e,u,o),ue(u,t,o),l=!0},p(u,o){if(i=u,o[0]&1&&r!==(r=i[0])){if(e){xe();const s=e;y(s.$$.fragment,1,0,()=>{Te(s,1)}),Ae()}r?(e=Ie(r,d(i,o)),i[52](e),e.$on("click",function(){se(i[2])&&i[2].apply(this,arguments)}),ve(e.$$.fragment),M(e.$$.fragment,1),Be(e,t.parentNode,t)):e=null}else if(r){const s=o[0]&50?de(a,[o[0]&16&&{class:i[4]},o[0]&2&&{disabled:i[1]},o[0]&32&&_e(i[5])]):{};o[1]&4194304&&(s.$$scope={dirty:o,ctx:i}),e.$set(s)}},i(u){l||(e&&M(e.$$.fragment,u),l=!0)},o(u){e&&y(e.$$.fragment,u),l=!1},d(u){u&&U(t),i[52](null),e&&Te(e,u)}}}function dt(i){let e,t=i[6]&&ft(i);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){l[6]&&t.p(l,a)},i(l){e||(M(t,l),e=!0)},o(l){y(t,l),e=!1},d(l){t&&t.d(l)}}}function ut(i){let e;const t=i[50].default,l=Ce(t,i,i[53],null);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,r){l&&l.m(a,r),e=!0},p(a,r){l&&l.p&&(!e||r[1]&4194304)&&Ee(l,t,a,a[53],e?Le(t,a[53],r,null):Re(a[53]),null)},i(a){e||(M(l,a),e=!0)},o(a){y(l,a),e=!1},d(a){l&&l.d(a)}}}function ft(i){let e,t,l,a;const r=i[50].default,d=Ce(r,i,i[53],null);let u=[{class:i[4]},{disabled:i[1]},i[5],{role:"button"},{tabindex:"0"}],o={};for(let s=0;s<u.length;s+=1)o=B(o,u[s]);return{c(){e=Ge(i[6]),d&&d.c(),this.h()},l(s){e=Je(s,(i[6]||"null").toUpperCase(),{class:!0,disabled:!0,role:!0,tabindex:!0});var c=Qe(e);d&&d.l(c),c.forEach(U),this.h()},h(){ke(i[6])(e,o)},m(s,c){ue(s,e,c),d&&d.m(e,null),i[51](e),t=!0,l||(a=Ze(e,"click",function(){se(i[2])&&i[2].apply(this,arguments)}),l=!0)},p(s,c){i=s,d&&d.p&&(!t||c[1]&4194304)&&Ee(d,r,i,i[53],t?Le(r,i[53],c,null):Re(i[53]),null),ke(i[6])(e,o=de(u,[(!t||c[0]&16)&&{class:i[4]},(!t||c[0]&2)&&{disabled:i[1]},c[0]&32&&i[5],{role:"button"},{tabindex:"0"}]))},i(s){t||(M(d,s),t=!0)},o(s){y(d,s),t=!1},d(s){s&&U(e),d&&d.d(s),i[51](null),l=!1,a()}}}function ct(i){let e,t,l,a;const r=[dt,st],d=[];function u(o,s){return typeof o[0]=="string"?0:1}return e=u(i),t=d[e]=r[e](i),{c(){t.c(),l=K()},l(o){t.l(o),l=K()},m(o,s){d[e].m(o,s),ue(o,l,s),a=!0},p(o,s){let c=e;e=u(o),e===c?d[e].p(o,s):(xe(),y(d[c],1,1,()=>{d[c]=null}),Ae(),t=d[e],t?t.p(o,s):(t=d[e]=r[e](o),t.c()),M(t,1),t.m(l.parentNode,l))},i(o){a||(M(t),a=!0)},o(o){y(t),a=!1},d(o){o&&U(l),d[e].d(o)}}}function mt(i,e,t){let l,a,r,d,u,o,s,c,m,k,p,g,T;const fe=["class","colors","ios","material","component","href","disabled","outline","outlineIos","outlineMaterial","clear","clearIos","clearMaterial","tonal","tonalIos","tonalMaterial","rounded","roundedIos","roundedMaterial","small","smallIos","smallMaterial","large","largeIos","largeMaterial","raised","raisedIos","raisedMaterial","inline","segmented","segmentedStrong","segmentedActive","touchRipple","onClick"];let ce=Me(e,fe),{$$slots:Se={},$$scope:me}=e,{class:_=void 0}=e,{colors:F=void 0}=e,{ios:V=void 0}=e,{material:X=void 0}=e,{component:C="button"}=e,{href:E=void 0}=e,{disabled:H=!1}=e,{outline:R=void 0}=e,{outlineIos:Y=void 0}=e,{outlineMaterial:G=void 0}=e,{clear:L=void 0}=e,{clearIos:J=void 0}=e,{clearMaterial:Q=void 0}=e,{tonal:x=void 0}=e,{tonalIos:Z=void 0}=e,{tonalMaterial:N=void 0}=e,{rounded:A=void 0}=e,{roundedIos:j=void 0}=e,{roundedMaterial:O=void 0}=e,{small:S=void 0}=e,{smallIos:w=void 0}=e,{smallMaterial:$=void 0}=e,{large:W=void 0}=e,{largeIos:ee=void 0}=e,{largeMaterial:te=void 0}=e,{raised:P=void 0}=e,{raisedIos:ie=void 0}=e,{raisedMaterial:ne=void 0}=e,{inline:le=!1}=e,{segmented:q=!1}=e,{segmentedStrong:z=!1}=e,{segmentedActive:D=!1}=e,{touchRipple:ae=!0}=e,{onClick:he=void 0}=e,h;h=it({},n=>t(38,h=n));const I={current:null},ge=nt(),We=(n,De,Ke,Ue,be,ye)=>{let re=n?"outline":De||Ue&&!be?"clear":Ke?"tonal":"fill";return ye&&(re="segmentedStrong"),ye&&be&&(re="segmentedStrongActive"),re},Pe=C==="button"&&E?"a":C;function qe(n){pe[n?"unshift":"push"](()=>{I.current=n,t(3,I)})}function ze(n){pe[n?"unshift":"push"](()=>{I.current=n,t(3,I)})}return i.$$set=n=>{e=B(B({},e),Ye(n)),t(56,ce=Me(e,fe)),"class"in n&&t(7,_=n.class),"colors"in n&&t(8,F=n.colors),"ios"in n&&t(9,V=n.ios),"material"in n&&t(10,X=n.material),"component"in n&&t(0,C=n.component),"href"in n&&t(11,E=n.href),"disabled"in n&&t(1,H=n.disabled),"outline"in n&&t(12,R=n.outline),"outlineIos"in n&&t(13,Y=n.outlineIos),"outlineMaterial"in n&&t(14,G=n.outlineMaterial),"clear"in n&&t(15,L=n.clear),"clearIos"in n&&t(16,J=n.clearIos),"clearMaterial"in n&&t(17,Q=n.clearMaterial),"tonal"in n&&t(18,x=n.tonal),"tonalIos"in n&&t(19,Z=n.tonalIos),"tonalMaterial"in n&&t(20,N=n.tonalMaterial),"rounded"in n&&t(21,A=n.rounded),"roundedIos"in n&&t(22,j=n.roundedIos),"roundedMaterial"in n&&t(23,O=n.roundedMaterial),"small"in n&&t(24,S=n.small),"smallIos"in n&&t(25,w=n.smallIos),"smallMaterial"in n&&t(26,$=n.smallMaterial),"large"in n&&t(27,W=n.large),"largeIos"in n&&t(28,ee=n.largeIos),"largeMaterial"in n&&t(29,te=n.largeMaterial),"raised"in n&&t(30,P=n.raised),"raisedIos"in n&&t(31,ie=n.raisedIos),"raisedMaterial"in n&&t(32,ne=n.raisedMaterial),"inline"in n&&t(33,le=n.inline),"segmented"in n&&t(34,q=n.segmented),"segmentedStrong"in n&&t(35,z=n.segmentedStrong),"segmentedActive"in n&&t(36,D=n.segmentedActive),"touchRipple"in n&&t(37,ae=n.touchRipple),"onClick"in n&&t(2,he=n.onClick),"$$scope"in n&&t(53,me=n.$$scope)},i.$$.update=()=>{t(5,l={href:E,...ce}),i.$$.dirty[0]&8|i.$$.dirty[1]&64&&at(I,ae),i.$$.dirty[0]&28672|i.$$.dirty[1]&128&&t(49,a=typeof R>"u"?h==="ios"?Y:G:R),i.$$.dirty[0]&229376|i.$$.dirty[1]&128&&t(48,r=typeof L>"u"?h==="ios"?J:Q:L),i.$$.dirty[0]&1835008|i.$$.dirty[1]&128&&t(47,d=typeof x>"u"?h==="ios"?Z:N:x),i.$$.dirty[0]&14680064|i.$$.dirty[1]&128&&t(43,u=typeof A>"u"?h==="ios"?j:O:A),i.$$.dirty[0]&117440512|i.$$.dirty[1]&128&&t(46,o=typeof S>"u"?h==="ios"?w:$:S),i.$$.dirty[0]&939524096|i.$$.dirty[1]&128&&t(45,s=typeof W>"u"?h==="ios"?ee:te:W),i.$$.dirty[0]&1073741824|i.$$.dirty[1]&131&&t(40,c=typeof P>"u"?h==="ios"?ie:ne:P),i.$$.dirty[1]&49152&&t(41,m=s?"large":o?"small":"medium"),i.$$.dirty[1]&458808&&t(42,k=We(a,r,d,q,D,z)),i.$$.dirty[0]&256&&t(44,p=ot(F,ge)),i.$$.dirty[0]&1666|i.$$.dirty[1]&520764&&t(39,g=tt({ios:V,material:X},rt({inline:le,segmented:q,segmentedStrong:z,segmentedActive:D,disabled:H,outline:a,clear:r,tonal:d,rounded:u,small:o,large:s,raised:c},p,_,ge),"",n=>t(39,g=n))),i.$$.dirty[0]&128|i.$$.dirty[1]&7936&&t(4,T=f(g.base[u?"rounded":"square"],g.style[k],g.size[m],c&&g.raised,_))},[C,H,he,I,T,l,Pe,_,F,V,X,E,R,Y,G,L,J,Q,x,Z,N,A,j,O,S,w,$,W,ee,te,P,ie,ne,le,q,z,D,ae,h,g,c,m,k,u,p,s,o,d,r,a,Se,qe,ze,me]}class Mt extends Ne{constructor(e){super(),je(this,e,mt,ct,He,{class:7,colors:8,ios:9,material:10,component:0,href:11,disabled:1,outline:12,outlineIos:13,outlineMaterial:14,clear:15,clearIos:16,clearMaterial:17,tonal:18,tonalIos:19,tonalMaterial:20,rounded:21,roundedIos:22,roundedMaterial:23,small:24,smallIos:25,smallMaterial:26,large:27,largeIos:28,largeMaterial:29,raised:30,raisedIos:31,raisedMaterial:32,inline:33,segmented:34,segmentedStrong:35,segmentedActive:36,touchRipple:37,onClick:2},null,[-1,-1])}}const pt=i=>typeof i>"u"||i===null||i===!1?"":i;export{Mt as B,b as K,it as a,pt as b,f as c,nt as d,at as e,$e as p,tt as u};