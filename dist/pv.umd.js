(function(h,p){typeof exports=="object"&&typeof module!="undefined"?p(exports):typeof define=="function"&&define.amd?define(["exports"],p):(h=typeof globalThis!="undefined"?globalThis:h||self,p(h.PV={}))})(this,function(h){"use strict";var _n=Object.defineProperty,$n=Object.defineProperties;var kn=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Sn=Object.prototype.hasOwnProperty,On=Object.prototype.propertyIsEnumerable;var yt=(h,p,x)=>p in h?_n(h,p,{enumerable:!0,configurable:!0,writable:!0,value:x}):h[p]=x,bt=(h,p)=>{for(var x in p||(p={}))Sn.call(p,x)&&yt(h,x,p[x]);if(fe)for(var x of fe(p))On.call(p,x)&&yt(h,x,p[x]);return h},xt=(h,p)=>$n(h,kn(p));var X=(h,p,x)=>(yt(h,typeof p!="symbol"?p+"":p,x),x);var p=Object.defineProperty,x=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,T=(t,e,n)=>(x(t,typeof e!="symbol"?e+"":e,n),n);function ue(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function wt(t){if(v(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=I(s)?he(s):wt(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(I(t)||E(t))return t}const ae=/;(?![^(]*\))/g,pe=/:(.+)/;function he(t){const e={};return t.split(ae).forEach(n=>{if(n){const s=n.split(pe);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _t(t){let e="";if(I(t))e=t;else if(v(t))for(let n=0;n<t.length;n++){const s=_t(t[n]);s&&(e+=s+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function de(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=W(t[s],e[s]);return n}function W(t,e){if(t===e)return!0;let n=$t(t),s=$t(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=v(t),s=v(e),n||s)return n&&s?de(t,e):!1;if(n=E(t),s=E(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),f=e.hasOwnProperty(o);if(c&&!f||!c&&f||!W(t[o],e[o]))return!1}}return String(t)===String(e)}function Y(t,e){return t.findIndex(n=>W(n,e))}const ge=Object.assign,me=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ve=Object.prototype.hasOwnProperty,tt=(t,e)=>ve.call(t,e),v=Array.isArray,et=t=>kt(t)==="[object Map]",$t=t=>t instanceof Date,I=t=>typeof t=="string",nt=t=>typeof t=="symbol",E=t=>t!==null&&typeof t=="object",ye=Object.prototype.toString,kt=t=>ye.call(t),be=t=>kt(t).slice(8,-1),st=t=>I(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,St=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xe=/-(\w)/g,we=St(t=>t.replace(xe,(e,n)=>n?n.toUpperCase():"")),_e=/\B([A-Z])/g,Ot=St(t=>t.replace(_e,"-$1").toLowerCase()),$e=(t,e)=>!Object.is(t,e),Et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ke;function jt(t,e){e=e||ke,e&&e.active&&e.effects.push(t)}const At=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rt=t=>(t.w&j)>0,Ct=t=>(t.n&j)>0,Se=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=j},Oe=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Rt(r)&&!Ct(r)?r.delete(t):e[n++]=r,r.w&=~j,r.n&=~j}e.length=n}},rt=new WeakMap;let H=0,j=1;const it=30,J=[];let N;const Z=Symbol(""),Pt=Symbol("");class Ee{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],jt(this,s)}run(){if(!this.active)return this.fn();if(!J.includes(this))try{return J.push(N=this),Ce(),j=1<<++H,H<=it?Se(this):Tt(this),this.fn()}finally{H<=it&&Oe(this),j=1<<--H,Nt(),J.pop();const e=J.length;N=e>0?J[e-1]:void 0}}stop(){this.active&&(Tt(this),this.onStop&&this.onStop(),this.active=!1)}}function Tt(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function je(t,e){t.effect&&(t=t.effect.fn);const n=new Ee(t);e&&(ge(n,e),e.scope&&jt(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Ae(t){t.effect.stop()}let K=!0;const ot=[];function Re(){ot.push(K),K=!1}function Ce(){ot.push(K),K=!0}function Nt(){const t=ot.pop();K=t===void 0?!0:t}function q(t,e,n){if(!Pe())return;let s=rt.get(t);s||rt.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=At()),Te(r)}function Pe(){return K&&N!==void 0}function Te(t,e){let n=!1;H<=it?Ct(t)||(t.n|=j,n=!Rt(t)):n=!t.has(N),n&&(t.add(N),N.deps.push(t))}function ct(t,e,n,s,r,i){const o=rt.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&v(t))o.forEach((f,l)=>{(l==="length"||l>=s)&&c.push(f)});else switch(n!==void 0&&c.push(o.get(n)),e){case"add":v(t)?st(n)&&c.push(o.get("length")):(c.push(o.get(Z)),et(t)&&c.push(o.get(Pt)));break;case"delete":v(t)||(c.push(o.get(Z)),et(t)&&c.push(o.get(Pt)));break;case"set":et(t)&&c.push(o.get(Z));break}if(c.length===1)c[0]&&Mt(c[0]);else{const f=[];for(const l of c)l&&f.push(...l);Mt(At(f))}}function Mt(t,e){for(const n of v(t)?t:[...t])(n!==N||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ne=ue("__proto__,__v_isRef,__isVue"),Bt=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(nt)),Me=Wt(),Be=Wt(!0),Lt=Le();function Le(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=M(this);for(let i=0,o=this.length;i<o;i++)q(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(M)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Re();const s=M(this)[e].apply(this,n);return Nt(),s}}),t}function Wt(t=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&r===(t?e?Ve:Kt:e?Je:It).get(n))return n;const i=v(n);if(!t&&i&&tt(Lt,s))return Reflect.get(Lt,s,r);const o=Reflect.get(n,s,r);return(nt(s)?Bt.has(s):Ne(s))||(t||q(n,"get",s),e)?o:lt(o)?!i||!st(s)?o.value:o:E(o)?t?Ge(o):z(o):o}}const We=Ie();function Ie(t=!1){return function(e,n,s,r){let i=e[n];if(!t&&!Ue(s)&&(s=M(s),i=M(i),!v(e)&&lt(i)&&!lt(s)))return i.value=s,!0;const o=v(e)&&st(n)?Number(n)<e.length:tt(e,n),c=Reflect.set(e,n,s,r);return e===M(r)&&(o?$e(s,i)&&ct(e,"set",n,s):ct(e,"add",n,s)),c}}function Ke(t,e){const n=tt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ct(t,"delete",e,void 0),s}function ze(t,e){const n=Reflect.has(t,e);return(!nt(e)||!Bt.has(e))&&q(t,"has",e),n}function Fe(t){return q(t,"iterate",v(t)?"length":Z),Reflect.ownKeys(t)}const De={get:Me,set:We,deleteProperty:Ke,has:ze,ownKeys:Fe},He={get:Be,set(t,e){return!0},deleteProperty(t,e){return!0}},It=new WeakMap,Je=new WeakMap,Kt=new WeakMap,Ve=new WeakMap;function Ze(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qe(t){return t.__v_skip||!Object.isExtensible(t)?0:Ze(be(t))}function z(t){return t&&t.__v_isReadonly?t:zt(t,!1,De,null,It)}function Ge(t){return zt(t,!0,He,null,Kt)}function zt(t,e,n,s,r){if(!E(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=qe(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return r.set(t,c),c}function Ue(t){return!!(t&&t.__v_isReadonly)}function M(t){const e=t&&t.__v_raw;return e?M(e):t}function lt(t){return Boolean(t&&t.__v_isRef===!0)}Promise.resolve();let ft=!1;const G=[],Qe=Promise.resolve(),U=t=>Qe.then(t),Ft=t=>{G.includes(t)||G.push(t),ft||(ft=!0,U(Xe))},Xe=()=>{for(const t of G)t();G.length=0,ft=!1},Ye=/^(spellcheck|draggable|form|list|type)$/,ut=({el:t,get:e,effect:n,arg:s,modifiers:r})=>{let i;s==="class"&&(t._class=t.className),n(()=>{let o=e();if(s)r!=null&&r.camel&&(s=we(s)),at(t,s,o,i);else{for(const c in o)at(t,c,o[c],i&&i[c]);for(const c in i)(!o||!(c in o))&&at(t,c,null)}i=o})},at=(t,e,n,s)=>{if(e==="class")t.setAttribute("class",_t(t._class?[t._class,n]:n)||"");else if(e==="style"){n=wt(n);const{style:r}=t;if(!n)t.removeAttribute("style");else if(I(n))n!==s&&(r.cssText=n);else{for(const i in n)pt(r,i,n[i]);if(s&&!I(s))for(const i in s)n[i]==null&&pt(r,i,"")}}else!(t instanceof SVGElement)&&e in t&&!Ye.test(e)?(t[e]=n,e==="value"&&(t._value=n)):e==="true-value"?t._trueValue=n:e==="false-value"?t._falseValue=n:n!=null?t.setAttribute(e,n):t.removeAttribute(e)},Dt=/\s*!important$/,pt=(t,e,n)=>{v(n)?n.forEach(s=>pt(t,e,s)):e.startsWith("--")?t.setProperty(e,n):Dt.test(n)?t.setProperty(Ot(e),n.replace(Dt,""),"important"):t[e]=n},A=(t,e)=>{const n=t.getAttribute(e);return n!=null&&t.removeAttribute(e),n},R=(t,e,n,s)=>{t.addEventListener(e,n,s)},tn=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,en=["ctrl","shift","alt","meta"],nn={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>en.some(n=>t[`${n}Key`]&&!e[n])},Ht=({el:t,get:e,exp:n,arg:s,modifiers:r})=>{if(!s)return;let i=tn.test(n)?e(`(e => ${n}(e))`):e(`($event => { ${n} })`);if(s==="vue:mounted"){U(i);return}else if(s==="vue:unmounted")return()=>i();if(r){s==="click"&&(r.right&&(s="contextmenu"),r.middle&&(s="mouseup"));const o=i;i=c=>{if(!("key"in c&&!(Ot(c.key)in r))){for(const f in r){const l=nn[f];if(l&&l(c,r))return}return o(c)}}}R(t,s,i,r)},sn=({el:t,get:e,effect:n})=>{const s=t.style.display;n(()=>{t.style.display=e()?s:"none"})},Jt=({el:t,get:e,effect:n})=>{n(()=>{t.textContent=Vt(e())})},Vt=t=>t==null?"":E(t)?JSON.stringify(t,null,2):String(t),rn=({el:t,get:e,effect:n})=>{n(()=>{t.innerHTML=e()})},on=({el:t,exp:e,get:n,effect:s,modifiers:r})=>{const i=t.type,o=n(`(val) => { ${e} = val }`),{trim:c,number:f=i==="number"}=r||{};if(t.tagName==="SELECT"){const l=t;R(t,"change",()=>{const u=Array.prototype.filter.call(l.options,a=>a.selected).map(a=>f?Et(C(a)):C(a));o(l.multiple?u:u[0])}),s(()=>{const u=n(),a=l.multiple;for(let d=0,_=l.options.length;d<_;d++){const w=l.options[d],$=C(w);if(a)v(u)?w.selected=Y(u,$)>-1:w.selected=u.has($);else if(W(C(w),u)){l.selectedIndex!==d&&(l.selectedIndex=d);return}}!a&&l.selectedIndex!==-1&&(l.selectedIndex=-1)})}else if(i==="checkbox"){R(t,"change",()=>{const u=n(),a=t.checked;if(v(u)){const d=C(t),_=Y(u,d),w=_!==-1;if(a&&!w)o(u.concat(d));else if(!a&&w){const $=[...u];$.splice(_,1),o($)}}else o(Zt(t,a))});let l;s(()=>{const u=n();v(u)?t.checked=Y(u,C(t))>-1:u!==l&&(t.checked=W(u,Zt(t,!0))),l=u})}else if(i==="radio"){R(t,"change",()=>{o(C(t))});let l;s(()=>{const u=n();u!==l&&(t.checked=W(u,C(t)))})}else{const l=u=>c?u.trim():f?Et(u):u;R(t,"compositionstart",cn),R(t,"compositionend",ln),R(t,r!=null&&r.lazy?"change":"input",()=>{t.composing||o(l(t.value))}),c&&R(t,"change",()=>{t.value=t.value.trim()}),s(()=>{if(t.composing)return;const u=t.value,a=n();document.activeElement===t&&l(u)===a||u!==a&&(t.value=a)})}},C=t=>"_value"in t?t._value:t.value,Zt=(t,e)=>{const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e},cn=t=>{t.target.composing=!0},ln=t=>{const e=t.target;e.composing&&(e.composing=!1,fn(e,"input"))},fn=(t,e)=>{const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)},qt=Object.create(null),V=(t,e,n)=>Gt(t,`return(${e})`,n),Gt=(t,e,n)=>{const s=qt[e]||(qt[e]=un(e));try{return s(t,n)}catch(r){console.error(r)}},un=t=>{try{return new Function("$data","$el",`with($data){${t}}`)}catch(e){return console.error(`${e.message} in expression: ${t}`),()=>{}}},an=({el:t,ctx:e,exp:n,effect:s})=>{U(()=>s(()=>Gt(e.scope,n,t)))},pn={bind:ut,on:Ht,show:sn,text:Jt,html:rn,model:on,effect:an},hn=(t,e,n)=>{const s=t.parentElement,r=new Comment("v-if");s.insertBefore(r,t);const i=[{exp:e,el:t}];let o,c;for(;(o=t.nextElementSibling)&&(c=null,A(o,"v-else")===""||(c=A(o,"v-else-if")));)s.removeChild(o),i.push({exp:c,el:o});const f=t.nextSibling;s.removeChild(t);let l,u=-1;const a=()=>{l&&(s.insertBefore(r,l.el),l.remove(),l=void 0)};return n.effect(()=>{for(let d=0;d<i.length;d++){const{exp:_,el:w}=i[d];if(!_||V(n.scope,_)){d!==u&&(a(),l=new gt(w,n),l.insert(s,r),s.removeChild(r),u=d);return}}u=-1,a()}),f},dn=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ut=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,gn=/^\(|\)$/g,mn=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,vn=(t,e,n)=>{const s=e.match(dn);if(!s)return;const r=t.nextSibling,i=t.parentElement,o=new Text("");i.insertBefore(o,t),i.removeChild(t);const c=s[2].trim();let f=s[1].trim().replace(gn,"").trim(),l,u=!1,a,d,_="key",w=t.getAttribute(_)||t.getAttribute(_=":key")||t.getAttribute(_="v-bind:key");w&&(t.removeAttribute(_),_==="key"&&(w=JSON.stringify(w)));let $;($=f.match(Ut))&&(f=f.replace(Ut,"").trim(),a=$[1].trim(),$[2]&&(d=$[2].trim())),($=f.match(mn))&&(l=$[1].split(",").map(y=>y.trim()),u=f[0]==="[");let ce=!1,B,Q,mt;const wn=y=>{const k=new Map,g=[];if(v(y))for(let m=0;m<y.length;m++)g.push(vt(k,y[m],m));else if(typeof y=="number")for(let m=0;m<y;m++)g.push(vt(k,m+1,m));else if(E(y)){let m=0;for(const b in y)g.push(vt(k,y[b],m++,b))}return[g,k]},vt=(y,k,g,m)=>{const b={};l?l.forEach((L,P)=>b[L]=k[u?P:L]):b[f]=k,m?(a&&(b[a]=m),d&&(b[d]=g)):a&&(b[a]=g);const D=ne(n,b),S=w?V(D.scope,w):g;return y.set(S,g),D.key=S,D},le=(y,k)=>{const g=new gt(t,y);return g.key=y.key,g.insert(i,k),g};return n.effect(()=>{const y=V(n.scope,c),k=mt;if([Q,mt]=wn(y),!ce)B=Q.map(g=>le(g,o)),ce=!0;else{for(let S=0;S<B.length;S++)mt.has(B[S].key)||B[S].remove();const g=[];let m=Q.length,b,D;for(;m--;){const S=Q[m],L=k.get(S.key);let P;L==null?P=le(S,b?b.el:o):(P=B[L],Object.assign(P.ctx.scope,S.scope),L!==m&&(B[L+1]!==b||D===b)&&(D=P,P.insert(i,b?b.el:o))),g.unshift(b=P)}B=g}}),r},Qt=({el:t,ctx:{scope:{$refs:e}},get:n,effect:s})=>{let r;return s(()=>{const i=n();e[i]=t,r&&i!==r&&delete e[r],r=i}),()=>{r&&delete e[r]}},yn=/^(?:v-|:|@)/,bn=/\.([\w-]+)/g;let ht=!1;const Xt=(t,e)=>{const n=t.nodeType;if(n===1){const s=t;if(s.hasAttribute("v-pre"))return;A(s,"v-cloak");let r;if(r=A(s,"v-if"))return hn(s,r,e);if(r=A(s,"v-for"))return vn(s,r,e);if((r=A(s,"v-scope"))||r===""){const c=r?V(e.scope,r):{};e=ne(e,c),c.$template&&xn(s,c.$template)}const i=A(s,"v-once")!=null;i&&(ht=!0),(r=A(s,"ref"))&&dt(s,Qt,`"${r}"`,e),Yt(s,e);const o=[];for(const{name:c,value:f}of[...s.attributes])yn.test(c)&&c!=="v-cloak"&&(c==="v-model"?o.unshift([c,f]):c[0]==="@"||/^v-on\b/.test(c)?o.push([c,f]):te(s,c,f,e));for(const[c,f]of o)te(s,c,f,e);i&&(ht=!1)}else if(n===3){const s=t.data;if(s.includes(e.delimiters[0])){let r=[],i=0,o;for(;o=e.delimitersRE.exec(s);){const c=s.slice(i,o.index);c&&r.push(JSON.stringify(c)),r.push(`$s(${o[1]})`),i=o.index+o[0].length}i<s.length&&r.push(JSON.stringify(s.slice(i))),dt(t,Jt,r.join("+"),e)}}else n===11&&Yt(t,e)},Yt=(t,e)=>{let n=t.firstChild;for(;n;)n=Xt(n,e)||n.nextSibling},te=(t,e,n,s)=>{let r,i,o;if(e=e.replace(bn,(c,f)=>((o||(o={}))[f]=!0,"")),e[0]===":")r=ut,i=e.slice(1);else if(e[0]==="@")r=Ht,i=e.slice(1);else{const c=e.indexOf(":"),f=c>0?e.slice(2,c):e.slice(2);r=pn[f]||s.dirs[f],i=c>0?e.slice(c+1):void 0}r&&(r===ut&&i==="ref"&&(r=Qt),dt(t,r,n,s,i,o),t.removeAttribute(e))},dt=(t,e,n,s,r,i)=>{const o=e({el:t,get:(c=n)=>V(s.scope,c,t),effect:s.effect,ctx:s,exp:n,arg:r,modifiers:i});o&&s.cleanups.push(o)},xn=(t,e)=>{if(e[0]==="#"){const n=document.querySelector(e);t.appendChild(n.content.cloneNode(!0));return}t.innerHTML=e},ee=t=>{const e=xt(bt({delimiters:["{{","}}"],delimitersRE:/\{\{([^]+?)\}\}/g},t),{scope:t?t.scope:z({}),dirs:t?t.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(ht)return Ft(n),n;const s=je(n,{scheduler:()=>Ft(s)});return e.effects.push(s),s}});return e},ne=(t,e={})=>{const n=t.scope,s=Object.create(n);Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)),s.$refs=Object.create(n.$refs);const r=z(new Proxy(s,{set(i,o,c,f){return f===r&&!i.hasOwnProperty(o)?Reflect.set(n,o,c):Reflect.set(i,o,c,f)}}));return se(r),xt(bt({},t),{scope:r})},se=t=>{for(const e of Object.keys(t))typeof t[e]=="function"&&(t[e]=t[e].bind(t))};class gt{constructor(e,n,s=!1){T(this,"template"),T(this,"ctx"),T(this,"key"),T(this,"parentCtx"),T(this,"isFragment"),T(this,"start"),T(this,"end"),this.isFragment=e instanceof HTMLTemplateElement,s?this.template=e:this.isFragment?this.template=e.content.cloneNode(!0):this.template=e.cloneNode(!0),s?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=ee(n)),Xt(this.template,this.ctx)}get el(){return this.start||this.template}insert(e,n=null){if(this.isFragment)if(this.start){let s=this.start,r;for(;s&&(r=s.nextSibling,e.insertBefore(s,n),s!==this.end);)s=r}else this.start=new Text(""),this.end=new Text(""),e.insertBefore(this.end,n),e.insertBefore(this.start,this.end),e.insertBefore(this.template,this.end);else e.insertBefore(this.template,n)}remove(){if(this.parentCtx&&me(this.parentCtx.blocks,this),this.start){const e=this.start.parentNode;let n=this.start,s;for(;n&&(s=n.nextSibling,e.removeChild(n),n!==this.end);)n=s}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(e=>{e.teardown()}),this.ctx.effects.forEach(Ae),this.ctx.cleanups.forEach(e=>e())}}const re=t=>t.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),ie=t=>{const e=ee();if(t&&(e.scope=z(t),se(e.scope),t.$delimiters)){const[s,r]=e.delimiters=t.$delimiters;e.delimitersRE=new RegExp(re(s)+"([^]+?)"+re(r),"g")}e.scope.$s=Vt,e.scope.$nextTick=U,e.scope.$refs=Object.create(null);let n;return{directive(s,r){return r?(e.dirs[s]=r,this):e.dirs[s]},mount(s){if(typeof s=="string"&&(s=document.querySelector(s),!s))return;s=s||document.documentElement;let r;return s.hasAttribute("v-scope")?r=[s]:r=[...s.querySelectorAll("[v-scope]")].filter(i=>!i.matches("[v-scope] [v-scope]")),r.length||(r=[s]),n=r.map(i=>new gt(i,e,!0)),this},unmount(){n.forEach(s=>s.teardown())}}},oe=document.currentScript;oe&&oe.hasAttribute("init")&&ie().mount();const O=class{static initializeStore(e){O.store=z(e),O.registerScope("globalStore",O.store)}static registerScope(e,n){O.scopes[e]=n}static registerDirective(e,n){O.directives.push([e,n])}static mount(e){const n=ie(O.scopes);return O.directives.forEach(s=>n.directive(...s)),n.mount(e),n}};let F=O;X(F,"store",z({})),X(F,"scopes",{globalStore:O.store}),X(F,"directives",[]),h.PV=F,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
