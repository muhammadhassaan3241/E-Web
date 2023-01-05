;
(self.AMP=self.AMP||[]).push({m:1,v:"2211302304002",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){(()=>{function i(t){return t?Array.prototype.slice.call(t):[]}var s,{isArray:e}=Array,{hasOwnProperty:n,toString:h}=Object.prototype;function r(t){return 1==(null==t?void 0:t.nodeType)}function o(t,i,s,e,n,h,r,o,a,l,c){return t}function a(t){return(t.ownerDocument||t).defaultView}function l(t,i){return t.closest(i)}function c(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;return"string"==typeof t?i=t:r(t)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(e=i)||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&s.push(i);var e;return s}(t)}function u(t){const i=t.isConnected;if(void 0!==i)return i;let s=t;for(;s=d(s),s.host;)s=s.host;return s.nodeType===Node.DOCUMENT_NODE}function d(t){if(Node.prototype.getRootNode)return t.getRootNode();let i;for(i=t;i.parentNode&&(!(s=i)||"I-AMPHTML-SHADOW-ROOT"!=s.tagName&&(11!=s.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(s)));i=i.parentNode);var s;return i}function f(t){try{t.focus()}catch(t){}}function m(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:s,stack:e}=t,n=new Error(s);for(const i in t)n[i]=t[i];return n.stack=e,n}function p(t){let i=null,s="";for(const t of arguments)t instanceof Error&&!i?i=m(t):(s&&(s+=" "),s+=t);return i?s&&(i.message=s+": "+i.message):i=new Error(s),i}function _(t){var i,s;null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t)}function b(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=p.apply(null,arguments);setTimeout((()=>{throw _(i),i}))}(t)}}var A=["Webkit","webkit","Moz","moz","ms","O","o"],P={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function v(t,i,e,n,h){const r=function(t,i,e){if(i.startsWith("--"))return i;s||(s=Object.create(null));let n=s[i];if(!n||e){if(n=i,void 0===t[i]){const s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(let s=0;s<A.length;s++){const e=A[s]+i;if(void 0!==t[e])return e}return""}(t,s);void 0!==t[e]&&(n=e)}e||(s[i]=n)}return n}(t.style,i,h);if(!r)return;const o=n?e+n:e;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return A.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(r),o)}function g(t,i){for(const s in i)v(t,s,i[s])}function E(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function M(t,i){return t.getComputedStyle(i)||P}var w=/vertical/,T=new WeakMap,I=new WeakMap,R=new WeakMap;function y(t){let i=T.get(t);return i||(i=new t.ResizeObserver(V),T.set(t,i)),i}function V(t){const i=new Set;for(let s=t.length-1;s>=0;s--){const e=t[s],{target:n}=e;if(i.has(n))continue;i.add(n);const h=I.get(n);if(h){R.set(n,e);for(let t=0;t<h.length;t++){const{callback:i,type:s}=h[t];k(s,i,e)}}}}function k(t,i,s){if(0==t){const{contentRect:t}=s,{height:e,width:n}=t;b(i,{width:n,height:e})}else if(1==t){const{borderBoxSize:t}=s;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=s,i=a(t),n=w.test(M(i,t).writingMode),{offsetHeight:h,offsetWidth:r}=t;let o,l;n?(l=r,o=h):(o=r,l=h),e={inlineSize:o,blockSize:l}}b(i,e)}}var x=[],S="__AMP_MODAL_SAVED_TAB_INDEX";function D(t){const i=[];for(let s=t;s;s=s.parentNode||s.host)i.push(s);return i}function X(t,i,s){null===s||null==s?t.removeAttribute(i):t.setAttribute(i,s)}var C="i-amphtml-element",$=t=>t.unmount();function O(t,i,s,e){if(i&&t.classList.contains(C)){const i=t;if(b(e,i),!s){const t=i.getPlaceholder();return void(t&&O(t,!0,!1,e))}}const n=t.getElementsByClassName(C);let h=null;for(let t=0;t<n.length;t++){const i=n[t];if(s)b(e,i);else{h=h||[];let t=!1;for(let s=0;s<h.length;s++)if(h[s].contains(i)){t=!0;break}t||(h.push(i),b(e,i))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z,F=self.__AMP_LOG;function j(t){return F.user||(F.user=B()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(F.user.win,t)?F.userForEmbed||(F.userForEmbed=B()):F.user}function B(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function L(t,i,s,e,n,h,r,o,a,l,c){return t}function W(t,i){return q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Y(t,i){return q(G(N(t)),i)}function H(t,i){const s=G(N(t));return U(s,i)?q(s,i):null}function N(t){return t.nodeType?(i=a(t),W(i,"ampdoc")).getAmpDoc(t):t;var i}function G(t){const i=N(t);return i.isSingleDoc()?i.win:i}function q(t,i){L(U(t,i));const s=function(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return s.obj||(L(s.ctor),L(s.context),s.obj=new s.ctor(s.context),L(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function U(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var Z,J=t=>Y(t,"owners"),K=t=>q(t,"timer");function Q(t,i){const s=(":not([toolbar]) [autoscroll]",i.querySelector(function(t,i){return t.replace(/^|,/g,"$&:scope ")}(":not([toolbar]) [autoscroll]")));if(!s)return;const e=M(t.win,i)["overflow-y"];var n;"scroll"==e||"auto"==e?(n=t,Y(n,"viewport")).animateScrollWithinParent(s,i,"center",0):j().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}function tt(t,i){const s=K(t);return s.promise(1).then((()=>s.promise(i)))}var it=class{constructor(){this.Re=null}add(t){return this.Re||(this.Re=[]),this.Re.push(t),()=>{this.remove(t)}}remove(t){this.Re&&function(t,i){const s=t.indexOf(i);-1!=s&&t.splice(s,1)}(this.Re,t)}removeAll(){this.Re&&(this.Re.length=0)}fire(t){if(this.Re)for(const i of this.Re.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.Re)||void 0===i?void 0:i.length)&&void 0!==t?t:0}},st="__AMP_Gestures",et=class{static get(t,i=!1,s=!1){let e=t[st];return e||(e=new et(t,i,s),t[st]=e),e}constructor(t,i=!1,s=!1){this.Uf=t,this.vV=[],this.u_=[],this.Pi=[],this.TV=[],this.EV=null;const e=function(t){if(void 0!==Z)return Z;Z=!1;try{const i={get passive(){return Z=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return Z}(t.ownerDocument.defaultView);this.xV=i||e,this.MV=s,this.wV=!1,this.Gn=new class{constructor(t,i,s){this.On=K(t),this.Nn=i,this.Dn=s||0,this.Ln=-1,this.Fn=0,this.Bn=!1,this.Hn=()=>{this.Gn()}}isPending(){return-1!=this.Ln}schedule(t){let i=t||this.Dn;this.Bn&&i<10&&(i=10);const s=Date.now()+i;return(!this.isPending()||s-this.Fn<-10)&&(this.cancel(),this.Fn=s,this.Ln=this.On.delay(this.Hn,i),!0)}Gn(){this.Ln=-1,this.Fn=0,this.Bn=!0,this.Nn(),this.Bn=!1}cancel(){this.isPending()&&(this.On.cancel(this.Ln),this.Ln=-1)}}(a(t),this.yp.bind(this)),this.IV=new it,this.RV=Object.create(null),this.VV=this._y.bind(this),this.kV=this.vy.bind(this),this.SV=this.gy.bind(this),this.OV=this.m_.bind(this),this.Uf.addEventListener("touchstart",this.VV,!!e&&{passive:!0}),this.Uf.addEventListener("touchend",this.kV),this.Uf.addEventListener("touchmove",this.SV,!!e&&{passive:!0}),this.Uf.addEventListener("touchcancel",this.OV),this.CV=!1}cleanup(){this.Uf.removeEventListener("touchstart",this.VV),this.Uf.removeEventListener("touchend",this.kV),this.Uf.removeEventListener("touchmove",this.SV),this.Uf.removeEventListener("touchcancel",this.OV),delete this.Uf[st],this.Gn.cancel()}onGesture(t,i){const s=new t(this),e=s.getType();let n=this.RV[e];return n||(this.vV.push(s),n=new it,this.RV[e]=n),n.add(i)}removeGesture(t){const i=new t(this).getType(),s=this.RV[i];if(s){s.removeAll();const t=function(t,s){for(let s=0;s<t.length;s++)if(t[s].getType()==i)return s;return-1}(this.vV);return!(t<0||(this.vV.splice(t,1),this.Pi.splice(t,1),this.TV.splice(t,1),this.u_.splice(t,1),delete this.RV[i],0))}return!1}onPointerDown(t){return this.IV.add(t)}_y(t){const i=Date.now();this.wV=!1,this.IV.fire(t);for(let s=0;s<this.vV.length;s++)this.Pi[s]||(this.TV[s]&&this.TV[s]<i&&this.__(s),this.vV[s].onTouchStart(t)&&this.A_(s));this.zV(t)}gy(t){const i=Date.now();for(let s=0;s<this.vV.length;s++)this.u_[s]&&(this.TV[s]&&this.TV[s]<i?this.__(s):this.vV[s].onTouchMove(t)||this.__(s));this.zV(t)}vy(t){const i=Date.now();for(let s=0;s<this.vV.length;s++){if(!this.u_[s])continue;if(this.TV[s]&&this.TV[s]<i){this.__(s);continue}this.vV[s].onTouchEnd(t);const e=!this.TV[s],n=this.TV[s]<i;this.EV==this.vV[s]||!e&&!n||this.__(s)}this.zV(t)}m_(t){for(let t=0;t<this.vV.length;t++)this.NV(t);this.zV(t)}ly(t,i){if(this.EV)return void t.acceptCancel();const s=Date.now();for(let e=0;e<this.vV.length;e++)this.vV[e]==t&&(this.Pi[e]=s+i,this.TV[e]=0);this.CV=!0}LV(t,i){if(this.EV)return void t.acceptCancel();const s=Date.now();for(let e=0;e<this.vV.length;e++)this.vV[e]==t&&(this.TV[e]=s+i)}DV(t){this.EV==t&&(this.EV=null,this.wV=!0)}UV(t,i,s){o(this.EV==t);const e=this.RV[t.getType()];e&&e.fire(new class{constructor(t,i,s,e){this.type=t,this.data=i,this.time=s,this.event=e}}(t.getType(),i,Date.now(),s))}zV(t){let i=!!this.EV||this.wV;if(this.wV=!1,!i){const t=Date.now();for(let s=0;s<this.vV.length;s++)if(this.Pi[s]||this.TV[s]&&this.TV[s]>=t){i=!0;break}}i?(t.stopPropagation(),this.xV||t.preventDefault()):this.MV&&t.stopPropagation(),this.CV&&(this.CV=!1,this.yp())}yp(){const t=Date.now();let i=-1;for(let s=0;s<this.vV.length;s++)this.Pi[s]?(-1==i||this.Pi[s]>this.Pi[i])&&(i=s):this.TV[s]&&this.TV[s]<t&&this.__(s);if(-1==i)return;let s=0;for(let i=0;i<this.vV.length;i++)!this.Pi[i]&&this.u_[i]&&(s=Math.max(s,this.TV[i]-t));s<2?this.$V(i):this.Gn.schedule(s)}$V(t){const i=this.vV[t];for(let i=0;i<this.vV.length;i++)i!=t&&this.NV(i);this.Pi[t]=0,this.TV[t]=0,this.EV=i,i.acceptStart()}A_(t){this.u_[t]=!0,this.TV[t]=0}__(t){this.u_[t]=!1,this.TV[t]=0,this.Pi[t]||this.vV[t].acceptCancel()}NV(t){this.Pi[t]=0,this.__(t)}};function nt(t,i,s){i<1&&(i=1);const e=t/i,n=.5+Math.min(i/33.34,.5);return e*n+s*(1-n)}Math.round(-16.67/Math.log(.95));var ht="backward",rt="horizontal";function ot(t){const i=t.indexOf("#");return-1==i?t:t.substring(0,i)}new Set(["c","v","a","ad"]);var at="amp-sidebar toolbar",lt="left",ct="right",ut=class extends t.BaseElement{constructor(t){super(t),this.Xl=null,this.fa=null,this.tB=null,this.gH=null,this.mu=this.win.document,this._H=this.mu.documentElement,this.sL=null,this.iB=[];const i=W(this.win,"platform");this.MD=i.isIos(),this.av=i.isSafari(),this.DD=-1,this.sB=!1,this.bD=null,this.mD=null,this.eB=0,this.nB=!1,this.hB=null,this.rB=new class{constructor(t,i,s){this.i=t,this.xE=i,this.oB=s,this.aB=ht,this.lB=rt,this.cB=null,this.uB=null}dB(){return this.lB==rt?this.cB.offsetWidth:this.cB.offsetHeight}fB(t,i){const s=this.lB==rt?t:i;return this.aB==ht?-Math.min(s,0):Math.max(s,0)}mB(t,i=""){const s=this.aB==ht?-t:t;return`translate(${this.lB==rt?`${s}${i}`:0}, ${this.lB==rt?0:`${s}${i}`})`}startSwipe(t){const{direction:i,mask:s,orientation:e,swipeElement:n}=t;this.cB=n,this.uB=s,this.aB=i,this.lB=e}swipeMove(t){this.pB(t,!1)}endSwipe(t){this.pB(t,!0)}_B(t,i){const s=.75*i;return g(this.cB,{transform:this.mB(t,"px"),transition:`${s}ms transform cubic-bezier(0.15, .55, .3, 0.95)`}),tt(this.i,s)}bB(t){const i=.8*t;return this.xE((()=>{g(this.cB,{transform:this.mB(0),transition:`${i}ms transform ease-in`}),g(this.uB,{opacity:"",transition:`${i}ms opacity ease-in`})})).then((()=>tt(this.i,i)))}AB(t){const i=.75*(this.dB()-t);return this.xE((()=>{g(this.cB,{transform:this.mB(100,"%"),transition:`${i}ms transform ease-out`}),g(this.uB,{opacity:0,transition:`${i}ms opacity ease-out`})})).then((()=>tt(this.i,i))).then((()=>this.oB()))}PB(t="",i=""){g(this.cB,{transform:t,transition:""}),g(this.uB,{opacity:i,transition:""})}vB(t,i,s,e){const n=22.5*t+s,h=22.5*i+e,r=this.fB(n,h),o=this.fB(t,i),a=.5*this.dB();return r<a&&o<.65?this._B(r,o).then((()=>this.bB(r))):this.AB(r)}pB(t,i){const{deltaX:s,deltaY:e,velocityX:n,velocityY:h}=t;this.xE((()=>{if(i)return void this.vB(n,h,s,e).then((()=>{this.PB()}));const t=this.fB(s,e),r=t/this.dB(),o=Math.max(0,1-r);this.PB(this.mB(t,"px"),o)}))}}(this.win,(t=>this.mutateElement(t)),(()=>this.gB(!0,3))),this.EB=!1,this.MB=!1,this.sb=this.sb.bind(this),this.wB=null}buildCallback(){const{element:t}=this;var s;t.classList.add("i-amphtml-overlay"),t.classList.add("i-amphtml-scrollable"),this.sL=t.getAttribute("side"),this.MB=t.hasAttribute("data-disable-swipe-close"),this.Xl=this.getViewport(),this.fa=(t=>H(t,"action"))(t),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(at,`${at} is recommended to be a direct child of the <body> element to preserve a logical DOM order.`),this.sL!=lt&&this.sL!=ct&&(this.sL=this.TB("rtl"==((s=this.mu).body.getAttribute("dir")||s.documentElement.getAttribute("dir")||"ltr")?ct:lt),t.setAttribute("side",this.sL)),this.IB(),t.addEventListener("amp:dom-update",(()=>{this.IB()})),this.getAmpDoc().whenReady().then((()=>{i(t.querySelectorAll("nav[toolbar]")).forEach((t=>{try{this.iB.push(new class{constructor(t,i){this.kf=i,this.RB=t,this.zi=i.getAmpDoc(),this.yB=this.RB.getAttribute("toolbar"),this.VB=null,this.kB=void 0,this.xB=!1,this.RB.classList.add("amp-sidebar-toolbar-target-hidden"),this.SB()}onLayoutChange(){this.zi.win.matchMedia(this.yB).matches?this.DB():this.XB()}SB(){this.VB=this.RB.cloneNode(!0);const t=(s=this.RB.getAttribute("toolbar-target"),'"toolbar-target" is required',e=this.RB,j().assert(s,'"toolbar-target" is required',e,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),i=this.zi.getElementById(t);var s,e;if(!i)throw j().createError(`Could not find the toolbar-target element with an id: ${t}`);this.kB=i,this.VB.classList.add("i-amphtml-toolbar"),E(this.kB,!1)}CB(){return this.xB}DB(){return this.CB()?z||(z=Promise.resolve(void 0)):this.kf.mutateElement((()=>{this.kB&&(E(this.kB,!0),this.kB.contains(this.VB)||this.kB.appendChild(this.VB),this.RB.classList.add("amp-sidebar-toolbar-target-shown"),this.RB.classList.remove("amp-sidebar-toolbar-target-hidden"),this.xB=!0,Q(this.zi,this.VB))}))}XB(){this.CB()&&this.kf.mutateElement((()=>{this.kB&&(E(this.kB,!1),this.RB.classList.add("amp-sidebar-toolbar-target-hidden"),this.RB.classList.remove("amp-sidebar-toolbar-target-shown"),this.xB=!1)}))}}(t,this))}catch(t){this.user().error(at,"Failed to instantiate toolbar",t)}})),this.sb()})),this.MD&&this.$B(),t.hasAttribute("role")||t.setAttribute("role","menu"),t.tabIndex=-1,this._H.addEventListener("keydown",(t=>{"Escape"==t.key&&this.kk(3)&&t.preventDefault()})),this.bD=this.UD(),this.bD||(this.bD=this.createScreenReaderCloseButton(),t.insertBefore(this.bD,this.element.firstChild)),t.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((t=>{const{caller:i,trust:s}=t;this.lL(s,i)}),"open"),this.registerAction("close",(t=>{this.kk(t.trust)})),this.registerAction("toggle",(t=>{const{caller:i,trust:s}=t;this.nB?this.kk(s):this.lL(s,i)})),this.fa.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),t.addEventListener("click",(i=>{const s=l(i.target,"A");if(s&&s.href){const i=(t=>H(t,"url"))(t).parse(s.href),e=this.getAmpDoc().getUrl();if(ot(s.href)!=ot(e))return;i.hash&&this.kk(3)}}),!0),this.IY(this.element)}attachedCallback(){this.wB=this.Xl.onResize(function(t,i,s){let e=0,n=0,h=null;function r(){e=0;const s=100-(t.Date.now()-n);var o;s>0?e=t.setTimeout(r,s):(o=h,h=null,i.apply(null,o))}return function(...i){n=t.Date.now(),h=i,e||(e=t.setTimeout(r,100))}}(this.win,this.sb)),this.sb()}detachedCallback(){this.wB&&(this.wB(),this.wB=null)}IB(){if(this.hB)return;const t=this.element.querySelector("amp-nested-menu");var i;t&&((i=this.win,W(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this.hB=t)}UD(){const t=this.element.querySelectorAll("[on]");for(let i=0;i<t.length;i++){const s=t[i],e=this.fa.hasResolvableActionForTarget(s,"tap",this.element,L(s.parentElement)),n=l(s,"[toolbar]");if(e&&!n)return s}return null}createScreenReaderCloseButton(){const t=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",i=this.mu.createElement("button");return i.textContent=t,i.classList.add("i-amphtml-screen-reader"),i.tabIndex=-1,i.addEventListener("click",(()=>{this.kk(3)})),i}sb(){this.getAmpDoc().whenReady().then((()=>{this.iB.forEach((t=>{t.onLayoutChange()}))}))}OB(t,i){this.tB=t;const s=()=>{this.tB===t&&this.mutateElement(t)};i?K(this.win).delay(s,i):s()}zB(t){E(this.element,!0),E(this.FB(),!0),this.Xl.addToFixedLayer(this.element,!0),this.mutateElement((()=>{!function(t){o(x.every((i=>i.element!==t))),o(u(t));const s=function(t){const s=[],e=D(t);for(let t=0;t<e.length;t++){const n=e[t];n.parentNode&&i(n.parentNode.children).filter((t=>t!=n)).forEach((t=>s.push(t)))}return s}(t),e=D(t).filter(r),n=function(t){const i=[];let s=t;for(;s;){const t=d(s),e=t.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,e),s=t.host}return i}(t),h=n.filter((i=>t.contains(i)&&void 0!==i[S])),a=n.filter((i=>!t.contains(i)&&void 0===i[S])),l=s.concat(e).map((t=>({element:t,prevValue:t.getAttribute("aria-hidden")})));e.forEach((t=>t.removeAttribute("aria-hidden"))),s.forEach((t=>t.setAttribute("aria-hidden","true"))),a.forEach((t=>{t[S]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),h.forEach((t=>{o(void 0!==t[S]),X(t,"tabindex",t[S])})),x.push({element:t,hiddenElementInfos:l,focusableExternalElements:a,focusableInternalElements:h})}(this.element)})),this.MD&&this.av&&this.jB(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.FB().setAttribute("open",""),this.OB((()=>this.BB(t)),350),Q(this.getAmpDoc(),this.element)}BB(t){const i=c(this.element),s=J(this.element);s.scheduleLayout(this.element,i),s.scheduleResume(this.element,i),this.LB()||f(L(this.bD)),this.aj("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.FB().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()}WB(t,i){this.FB().removeAttribute("open"),this.FB().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((()=>{!function(t){const i=x.pop();o(i);const{element:s,focusableExternalElements:e,focusableInternalElements:n,hiddenElementInfos:h}=i;o(u(t)),o(s===t),h.forEach((({element:t,prevValue:i})=>X(t,"aria-hidden",i))),n.forEach((t=>t.setAttribute("tabindex","-1"))),e.forEach((t=>{o(void 0!==t[S]),X(t,"tabindex",t[S]),t[S]=void 0}))}(this.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.OB((()=>this.YB(i)),t?0:350)}YB(t){E(this.element,!1),E(this.FB(),!1),J(this.element).schedulePause(this.element,c(this.element)),this.aj("sidebarClose",t),this.removeAsContainer(),function(t,i=!0){!function(t,i,s,n){const h=e(r=t)?r:[r];var r;for(let t=0;t<h.length;t++)O(h[t],i,!0,n)}(t,i,0,$)}(this.element,!1)}lL(t,i){this.nB||(this.nB=!0,this.Xl.enterOverlayMode(),this.OB((()=>this.zB(t))),this.$Y().push((()=>{this.MD?this.gB(!0,t):this.kk(t)})).then((t=>{this.DD=t})),i&&(this.mD=i,this.eB=this.Xl.getScrollTop()),function(t,i,s){const e=t.ownerDocument.defaultView;if(!e)return;let n=I.get(t);if(n||(n=[],I.set(t,n),y(e).observe(t)),!n.some((t=>t.callback===s&&0===t.type))){n.push({type:0,callback:s});const i=R.get(t);i&&setTimeout((()=>k(0,s,i)))}}(this.element,0,this.sb))}kk(t){return this.gB(!1,t)}gB(t,i){if(!this.nB)return!1;this.nB=!1,this.Xl.leaveOverlayMode();const s=this.eB==this.Xl.getScrollTop(),e=this.element.contains(this.mu.activeElement);return this.OB((()=>this.WB(t,i))),t&&(E(this.element,!1),E(this.FB(),!1)),-1!=this.DD&&(this.$Y().pop(this.DD),this.DD=-1),this.mD&&e&&s&&(this.LB()||f(this.mD)),function(t,i,s){const e=I.get(t);if(e&&(function(t,i){const e=[];let n=0;for(let i=0;i<t.length;i++){const r=t[i];(h=r).callback===s&&0===h.type?e.push(r):(n<i&&(t[n]=r),n++)}var h;n<t.length&&(t.length=n)}(e),0==e.length)){I.delete(t),R.delete(t);const i=t.ownerDocument.defaultView;i&&y(i).unobserve(t)}}(this.element,0,this.sb),!0}IY(t){this.MB||et.get(t,!0,!0).onGesture(class extends class extends class{constructor(t,i){this.oO=t,this.T_=i}getType(){return this.oO}signalReady(t){this.T_.ly(this,t)}signalPending(t){this.T_.LV(this,t)}signalEnd(){this.T_.DV(this)}signalEmit(t,i){this.T_.UV(this,t,i)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}}{constructor(t,i,s,e){super(t,i),this.rO=s,this.aO=e,this.EV=!1,this.hO=0,this.lO=0,this.pO=0,this.mO=0,this.cO=0,this.uO=0,this.oh=0,this.dO=0,this.fO=0,this._O=0,this.gO=0}onTouchStart(t){const{touches:i}=t;return!!(this.EV&&i&&i.length>1)||!(!i||1!=i.length)&&(this.oh=Date.now(),this.hO=i[0].clientX,this.lO=i[0].clientY,!0)}onTouchMove(t){const{touches:i}=t;if(i&&i.length>=1){const{clientX:s,clientY:e}=i[0];if(this.pO=s,this.mO=e,this.EV)this.yO(!1,!1,t);else{const t=Math.abs(s-this.hO),i=Math.abs(e-this.lO);if(this.rO&&this.aO)(t>=8||i>=8)&&this.signalReady(-10);else if(this.rO){if(t>=8&&t>i)this.signalReady(-10);else if(i>=8)return!1}else{if(!this.aO)return!1;if(i>=8&&i>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:i}=t;i&&0==i.length&&this.AO(t)}acceptStart(){this.EV=!0,this.cO=this.hO,this.uO=this.lO,this.fO=this.oh,this.hO=this.pO,this.lO=this.mO,this.yO(!0,!1,null)}acceptCancel(){this.EV=!1}yO(t,i,s){this.dO=Date.now();const e=this.dO-this.fO;if(!i&&e>4||i&&e>16){const t=nt(this.pO-this.cO,e,this._O),s=nt(this.mO-this.uO,e,this.gO);(!i||e>32||0!=t||0!=s)&&(this._O=Math.abs(t)>1e-4?t:0,this.gO=Math.abs(s)>1e-4?s:0),this.cO=this.pO,this.uO=this.mO,this.fO=this.dO}this.signalEmit({first:t,last:i,time:this.dO,deltaX:this.pO-this.hO,deltaY:this.mO-this.lO,startX:this.hO,startY:this.lO,lastX:this.pO,lastY:this.mO,velocityX:this._O,velocityY:this.gO},s)}AO(t){this.EV&&(this.EV=!1,this.yO(!1,!0,t),this.signalEnd())}}{constructor(t){super("swipe-x",t,!0,!1)}},(t=>{const{data:i,event:s}=t;this.HB(i,s)}))}HB(t,i){var s;if(!t.first)return t.last?(this.EB&&this.rB.endSwipe(t),void(this.EB=!1)):void(i&&i.target&&(s=i.target,"input"!==s.nodeName.toLowerCase()||"range"!==s.getAttribute("type"))&&(this.EB=!0,this.rB.swipeMove(t)));this.rB.startSwipe({swipeElement:this.element,mask:this.gH,direction:this.sL==lt?ht:"forward",orientation:rt})}TB(t){return l(this.element,"amp-story")?t==lt?ct:lt:t}FB(){if(!this.gH){const t=this.mu.createElement("div");t.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),t.addEventListener("click",(()=>{this.kk(3)})),this.getAmpDoc().getBody().appendChild(t),t.addEventListener("touchmove",(t=>{t.preventDefault()})),this.IY(t),this.gH=t}return this.gH}$B(){this.element.addEventListener("scroll",(t=>{this.nB&&(this.element.scrollTop<1?(this.element.scrollTop=1,t.preventDefault()):this.element.scrollHeight==this.element.scrollTop+this.element.offsetHeight&&(this.element.scrollTop=this.element.scrollTop-1,t.preventDefault()))}))}jB(){if(!this.sB){const t=this.mu.createElement("div");g(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.sB=!0}}$Y(){return Y(this.getAmpDoc(),"history")}aj(t,i){const s=function(t,i,s,e){const n={detail:{}};return Object.assign(n,void 0),new t.CustomEvent(i,n)}(this.win,`${at}.${t}`);this.fa.trigger(this.element,t,s,i)}LB(){return this.MD&&(t=this.element,Y(t,"viewer")).isEmbedded();var t}};t.registerElement("amp-sidebar",ut,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.mjs.map