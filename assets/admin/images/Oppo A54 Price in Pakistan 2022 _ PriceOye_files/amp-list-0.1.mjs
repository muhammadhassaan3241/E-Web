;
(self.AMP=self.AMP||[]).push({m:1,v:"2211302304002",n:"amp-list",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;function e(){return i||(i=Promise.resolve(void 0))}var s=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};function n(t){return t?Array.prototype.slice.call(t):[]}var{isArray:r}=Array,{hasOwnProperty:o,toString:l}=Object.prototype;function a(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function h(t,i){return o.call(t,i)}function u(t,i){if("."==i)return t;const e=i.split(".");let s=t;for(const t of e){if(!(t&&s&&void 0!==s[t]&&"object"==typeof s&&h(s,t))){s=void 0;break}s=s[t]}return s}function c(t,i,e,s,n,r,o,l,a,h,u){return t}function m(t,i){return t.replace(/^|,/g,`$&${i} `)}function d(t,i){return t.querySelector(m(i,":scope"))}function f(t,i){return c(/^[\w-]+$/.test(i)),d(t,`> [${i}]`)}function p(t){for(;t.firstChild;)t.removeChild(t.firstChild)}var _,b={NODISPLAY:"nodisplay",FIXED:"fixed",FIXED_HEIGHT:"fixed-height",RESPONSIVE:"responsive",CONTAINER:"container",FILL:"fill",FLEX_ITEM:"flex-item",FLUID:"fluid",INTRINSIC:"intrinsic"},v=["Webkit","webkit","Moz","moz","ms","O","o"];function g(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return v.some((t=>i.startsWith(t+"-")))?`-${i}`:i}function P(t,i,e){if(i.startsWith("--"))return i;_||(_=a());let s=_[i];if(!s||e){if(s=i,void 0===t[i]){const e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),n=function(t,i){for(let e=0;e<v.length;e++){const s=v[e]+i;if(void 0!==t[s])return s}return""}(t,e);void 0!==t[n]&&(s=n)}e||(_[i]=s)}return s}function A(t,i){const{style:e}=t;for(const t in i)e.setProperty(g(P(e,t)),String(i[t]),"important")}function M(t,i,e,s,n){const r=P(t.style,i,n);if(!r)return;const o=s?e+s:e;t.style.setProperty(g(r),o)}function E(t,i){for(const e in i)M(t,e,i[e])}function R(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function y(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function I(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,s)}return e}function T(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?I(Object(e),!0).forEach((function(i){y(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var x=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t,i=""){try{return decodeURIComponent(t)}catch(t){return i}}function L(t){const i=a();if(!t)return i;let e;for(;e=x.exec(t);){const t=w(e[1],e[1]),s=e[2]?w(e[2].replace(/\+/g," "),e[2]):"";i[t]=s}return i}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var V=self.__AMP_LOG;function S(t,i){throw new Error("failed to call initLogConstructor")}function O(t){return V.user||(V.user=k()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(V.user.win,t)?V.userForEmbed||(V.userForEmbed=k()):V.user}function k(t){return S()}function j(t,i,e,s,n,r,o,l,a,h,u){return t}function F(t,i,e,s,n,r,o,l,a,h,u){return O().assert(t,i,e,s,n,r,o,l,a,h,u)}function $(t,i){return J(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function C(t,i){return J(H(z(t)),i)}function N(t,i){const e=H(z(t));return G(e,i)?J(e,i):null}function U(t,i){return B(H(t),i)}function z(t){return t.nodeType?(e=t,i=(e.ownerDocument||e).defaultView,$(i,"ampdoc")).getAmpDoc(t):t;var i,e}function H(t){const i=z(t);return i.isSingleDoc()?i.win:i}function J(t,i){j(G(t,i));const e=D(t)[i];return e.obj||(j(e.ctor),j(e.context),e.obj=new e.ctor(e.context),j(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function B(t,i){const e=D(t)[i];return e?e.promise?e.promise:(J(t,i),e.promise=Promise.resolve(e.obj)):null}function D(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function G(t,i){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!e||!e.ctor)}var X="__AMP__EXPERIMENT_TOGGLES";function q(t,i,e){const n=N(t,i);return n?Promise.resolve(n):function(t,i,e,n){const r=U(t,i);if(r)return r;const o=z(t);return o.whenExtensionsKnown().then((()=>{const t=o.getExtensionVersion(e);return t?$(o.win,"extensions").waitForExtension(e,t):null})).then((e=>e?function(t,i){return function(t,i){const e=B(t,i);if(e)return e;const n=D(t);return n[i]=function(){const t=new s,{promise:i,reject:e,resolve:n}=t;return i.catch((()=>{})),{obj:null,promise:i,resolve:n,reject:e,context:null,ctor:null}}(),n[i].promise}(H(t),i)}(t,i):null))}(t,i,e)}var W,Y=t=>q(t,"bind","amp-bind"),Z=(()=>self.AMP.config.urls)(),K=new Set(["c","v","a","ad"]),Q=t=>"string"==typeof t?tt(t):t;function tt(t,i){return W||(W=self.document.createElement("a")),function(t,i,e){return t.href="",new URL(i,t.href)}(W,t)}function it(t,i){return`${encodeURIComponent(t)}=${encodeURIComponent(i)}`}function et(t){return tt(function(t){if(!function(t){return Z.cdnProxyRegex.test(Q(t).origin)}(t=Q(t)))return t.href;const i=t.pathname.split("/"),e=i[1];F(K.has(e),"Unknown path prefix in url %s",t.href);const s=i[2],n="s"==s?"https://"+decodeURIComponent(i[3]):"http://"+decodeURIComponent(s);return F(n.indexOf(".")>0,"Expected a . in origin %s",n),i.splice(1,"s"==s?3:2),n+i.join("/")+function(t,i){if(!t||"?"==t)return"";const e=new RegExp("[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\\b[^&]*","g"),s=t.replace(e,"").replace(/^[?&]/,"");return s?"?"+s:""}(t.search)+(t.hash||"")}(t)).origin}var st="i-amphtml-key",nt="i-amphtml-ignore",rt={"AMP-IMG":["src","srcset","layout","width","height"]};Object.freeze({"input":{"type":/(?:image|button)/i}}),Object.freeze({"input":{"type":/(?:button|file|image|password)/i}});var ot,lt=Object.freeze(["form","formaction","formmethod","formtarget","formnovalidate","formenctype"]);function at(t,i,e,s){const n={detail:e};return Object.assign(n,s),new t.CustomEvent(i,n)}function ht(t,i,e,s){return function(t,i,e,s){let n=t,r=e,o=t=>{try{return r(t)}catch(t){var i,e;throw null===(i=(e=self).__AMP_REPORT_ERROR)||void 0===i||i.call(e,t),t}};const l=function(){if(void 0!==ot)return ot;ot=!1;try{const t={get capture(){return ot=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return ot}(),a=!(null==s||!s.capture);return n.addEventListener(i,o,l?s:a),()=>{null==n||n.removeEventListener(i,o,l?s:a),r=null,n=null,o=null}}(t,i,e,s)}function ut(t){return!!t&&"function"==typeof t.getFormData}Object.freeze({"input":lt,"textarea":lt,"select":lt}),Object.freeze({"amp-anim":["controls"],"form":["name"]});var ct=["GET","POST"],mt=[r,function(t){return"[object Object]"===l.call(t)}];function dt(t,i){const e=T({},i);if(ut(i.body)){const t=i.body;e.headers["Content-Type"]="multipart/form-data;charset=utf-8",e.body=function(t){const i=[];for(let e=t.next();!e.done;e=t.next())i.push(e.value);return i}(t.entries())}return{input:t,init:e}}bt.KEY="data-key",bt.IGNORE="data-ignore",bt.CHECKSUM="data-checksum";var ft,pt="_set-dom-mounted",_t=null;function bt(t,i){_t=[],function(t,i){if(!t)throw new Error("set-dom: You must provide a valid node to update.")}(t&&t.nodeType),9===t.nodeType&&(t=t.documentElement),11===i.nodeType?gt(t,i):vt(t,i),t[pt]||(t[pt]=!0,Et(t));var e=_t;return _t=null,e}function vt(t,i){if(t.nodeType===i.nodeType)if(1===t.nodeType){if(function(t,i){const e=Mt(t)&&Mt(i);return e&&_t.push(t,i),e||At(t)===At(i)||t.isEqualNode(i)}(t,i))return;if(gt(t,i),t.nodeName===i.nodeName)!function(t,i){var e,s,n,r,o;for(e=t.length;e--;)r=(s=t[e]).namespaceURI,o=s.localName,(n=i.getNamedItemNS(r,o))||t.removeNamedItemNS(r,o);for(e=i.length;e--;)r=(s=i[e]).namespaceURI,o=s.localName,(n=t.getNamedItemNS(r,o))?n.value!==s.value&&(n.value=s.value):(i.removeNamedItemNS(r,o),t.setNamedItemNS(s))}(t.attributes,i.attributes);else{for(var e=i.cloneNode();t.firstChild;)e.appendChild(t.firstChild);t.parentNode.replaceChild(e,t)}}else t.nodeValue!==i.nodeValue&&(t.nodeValue=i.nodeValue);else t.parentNode.replaceChild(i,Rt(t)),Et(i)}function gt(t,i){for(var e,s,n,r,o,l,a=t.firstChild,h=i.firstChild,u=0;a;)u++,s=Pt(e=a),a=a.nextSibling,s&&(l||(l={}),l[s]=e);for(a=t.firstChild;h;)u--,n=h,h=h.nextSibling,l&&(r=Pt(n))&&(o=l[r])?(delete l[r],o!==a?t.insertBefore(o,a):a=a.nextSibling,vt(o,n)):a?(e=a,a=a.nextSibling,Pt(e)?(t.insertBefore(n,e),Et(n)):vt(e,n)):(t.appendChild(n),Et(n));for(s in l)u--,t.removeChild(Rt(l[s]));for(;--u>=0;)t.removeChild(Rt(t.lastChild))}function Pt(t){if(1===t.nodeType){var i=t.getAttribute(bt.KEY)||t.id;return i?"_set-dom-"+i:void 0}}function At(t){return t.getAttribute(bt.CHECKSUM)||NaN}function Mt(t){return null!=t.getAttribute(bt.IGNORE)}function Et(t){return yt(t,"mount")}function Rt(t){return yt(t,"dismount")}function yt(t,i){if(Pt(t)){var e=document.createEvent("Event"),s={value:t};e.initEvent(i,!1,!1),Object.defineProperty(e,"target",s),Object.defineProperty(e,"srcElement",s),t.dispatchEvent(e)}for(var n=t.firstChild;n;)n=yt(n,i).nextSibling;return t}function It(t){const i=t.ownerDocument||t;return ft&&ft.ownerDocument===i||(ft=i.createElement("div")),Tt}function Tt(t){return function(t,i){if(c(1===i.length),c(Array.isArray(i)||h(i,"raw")),self.trustedTypes&&self.trustedTypes.createPolicy){const e=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return i[0]}});t.innerHTML=e.createHTML("ignored")}else t.innerHTML=i[0];const e=t.firstElementChild;return c(e),c(!e.nextElementSibling),t.removeChild(e),e}(ft,t)}var xt=['<amp-list-load-more load-more-button class="amp-visible i-amphtml-default-ui"><button load-more-clickable class=i-amphtml-list-load-more-button><label>See More</label></button></amp-list-load-more>'],wt=["<amp-list-load-more load-more-loading class=i-amphtml-default-ui><div class=i-amphtml-list-load-more-spinner></div></amp-list-load-more>"],Lt=['<amp-list-load-more load-more-failed class=i-amphtml-default-ui><div class=i-amphtml-list-load-more-message>Unable to Load More</div><button load-more-clickable class="i-amphtml-list-load-more-button i-amphtml-list-load-more-button-has-icon i-amphtml-list-load-more-button-small"><div class=i-amphtml-list-load-more-icon></div><label>Retry</label></button></amp-list-load-more>'],Vt={NONE:0,OPT_IN:1,ALL:2};function St(t,i,e,s){const n=(t=>N(t,"url-replace"))(t);return(e>=Vt.OPT_IN?n.expandUrlAsync(i):Promise.resolve(i)).then((i=>{if(e===Vt.OPT_IN){const i=n.collectDisallowedVarsSync(t);if(i.length>0)throw O().createError(`URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. Please add data-amp-replace="${i.join(" ")}" to the <${t.tagName}> element. See https://bit.ly/amp-var-subs.`)}const r={};return t.hasAttribute("credentials")&&(r.credentials=t.getAttribute("credentials")),s&&(r.cache="reload"),{"xhrUrl":i,"fetchOpt":r}}))}var Ot="amp-list",kt="amp-state:",jt=class extends t.BaseElement{constructor(t){super(t),this.jf=null,this.Xl=null,this.fL=!1,this._L=new class{constructor(t,i,e){this.On=J(t,"timer"),this.Nn=i,this.Dn=e||0,this.Ln=-1,this.Fn=0,this.Bn=!1,this.Hn=()=>{this.Gn()}}isPending(){return-1!=this.Ln}schedule(t){let i=t||this.Dn;this.Bn&&i<10&&(i=10);const e=Date.now()+i;return(!this.isPending()||e-this.Fn<-10)&&(this.cancel(),this.Fn=e,this.Ln=this.On.delay(this.Hn,i),!0)}Gn(){this.Ln=-1,this.Fn=0,this.Bn=!0,this.Nn(),this.Bn=!1}cancel(){this.isPending()&&(this.On.cancel(this.Ln),this.Ln=-1)}}(this.win,(()=>this.vL())),this.gL=null,this.PL=null,this.tM=null,this.AL=!1,this.ML=!1,this.EL=null,this.RL=null,this.yL=null,this.IL=!1,this.TL=null,this.xL=null,this.wL=!1,this.LL=null,this.registerAction("refresh",(()=>{if(this.AL)return this.VL(),this.SL({refresh:!0})})),this.registerAction("changeToLayoutContainer",(()=>this.OL())),this.wN=null,this.fa=null,this.kL=null}isLayoutSupported(t){if(t===b.CONTAINER){const t=this.element.ownerDocument,i=t&&function(t){return function(t,i){const e=i.documentElement;return["⚡4email","amp4email"].some((t=>e.hasAttribute(t)))}(0,t)}(t),e=this.getPlaceholder()||this.element.hasAttribute("diffable");return i||(F(function(t,i){const e=function(t){var i,e,s,n,o;if(t[X])return t[X];t[X]=a();const l=t[X];c(l);const h=T(T({},null!==(i=t.AMP_CONFIG)&&void 0!==i?i:{}),null!==(e=t.AMP_EXP)&&void 0!==e?e:(u=(null===(s=t.__AMP_EXP)||void 0===s?void 0:s.textContent)||"{}",JSON.parse(u)));var u;for(const t in h){const i=h[t];"number"==typeof i&&i>=0&&i<=1&&(l[t]=Math.random()<i)}const m=null===(n=t.AMP_CONFIG)||void 0===n?void 0:n["allow-doc-opt-in"];if(r(m)&&m.length){const i=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(i){var d;const t=(null===(d=i.getAttribute("content"))||void 0===d?void 0:d.split(","))||[];for(const i of t)m.includes(i)&&(l[i]=!0)}}Object.assign(l,function(t){var i;let e="";try{var s;"localStorage"in t&&(e=null!==(s=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==s?s:"")}catch(t){}const n=(null===(i=e)||void 0===i?void 0:i.split(/\s*,\s*/g))||[],r=a();for(const t of n)t&&("-"==t[0]?r[t.substr(1)]=!1:r[t]=!0);return r}(t));const f=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(r(f)&&f.length){const i=L(t.location.originalHash||t.location.hash);for(const t of f){const e=i[`e-${t}`];"1"==e&&(l[t]=!0),"0"==e&&(l[t]=!1)}}return l}(t);return!!e["amp-list-layout-container"]}(this.win),'Experiment "amp-list-layout-container" is not turned on.'),F(e,"amp-list[layout=container] should have a placeholder to establish an initial size. See https://go.amp.dev/c/amp-list/#placeholder-and-fallback. %s",this.element)),this.ML=!0}return function(t){return t==b.FIXED||t==b.FIXED_HEIGHT||t==b.RESPONSIVE||t==b.FILL||t==b.FLEX_ITEM||t==b.FLUID||t==b.INTRINSIC}(t)}buildCallback(){this.tM=C(this.element,"templates"),this.fa=N(this.element,"action"),this.kL=(t=>C(this.element,"owners"))(),this.fa.addToAllowlist("AMP-LIST",["changeToLayoutContainer","refresh"],["email"]),this.Xl=this.getViewport();const t=(t=>C(this.getAmpDoc(),"viewer"))();this.wN=new class{constructor(t,i,e){this.ir=i,this.tM=e,this.MN=t}isEnabled(){const t=this.ir.getAmpDoc();return!(!t.isSingleDoc()||!t.getRootNode().documentElement.hasAttribute("allow-viewer-render-template"))&&this.ir.hasCapability("viewerRenderTemplate")}assertTrustedViewer(t){return this.ir.isTrustedViewer().then((i=>{F(i,"Refused to attempt SSR in untrusted viewer: ",t)}))}ssr(t,i,e=null,s={}){let n;return e||(n=this.tM.maybeFindTemplate(t)),this.assertTrustedViewer(t).then((()=>this.ir.sendMessageAwaitResponse("viewerRenderTemplate",this.xN(i,n,e,s))))}applySsrOrCsrTemplate(t,i){let e;return this.isEnabled()?(F("string"==typeof i.html,"Skipping template rendering due to failed fetch"),e=this.assertTrustedViewer(t).then((()=>this.tM.findAndSetHtmlForTemplate(t,i.html)))):e=r(i)?this.tM.findAndRenderTemplateArray(t,i):this.tM.findAndRenderTemplate(t,i),e}xN(t,i,e,s={}){const n={"type":this.MN},r=e&&e.successTemplate?e.successTemplate:i;r&&(n.successTemplate={"type":"amp-mustache","payload":r.innerHTML});const o=e&&e.errorTemplate?e.errorTemplate:null;return o&&(n.errorTemplate={"type":"amp-mustache","payload":o.innerHTML}),s&&Object.assign(n,s),{"originalRequest":dt(t.xhrUrl,t.fetchOpt),"ampComponent":n}}}(Ot,t,this.tM),this.IL=this.element.hasAttribute("load-more"),F(!(this.IL&&this.ML),"%s initialized with layout=container does not support infinite scrolling with [load-more]. %s",Ot,this.element),this.EL=this.element.getAttribute("src"),this.element.hasAttribute("diffable")&&(this.RL=this.jL(),this.RL&&(this.jf=this.RL)),this.jf||(this.jf=this.FL(),this.element.appendChild(this.jf)),this.element.hasAttribute("auto-resize"),bt.KEY=st,bt.IGNORE=nt,Y(this.element).then((t=>{this.yL=t}))}reconstructWhenReparented(){return!1}layoutCallback(){this.AL=!0;const t=this.getPlaceholder();return t?this.$L(t):this.RL&&this.$L(this.jf),this.Xl.onResize((()=>{this.CL()})),this.IL&&this.NL(),this.SL()}jL(){let t=this.element.hasAttribute("single-item")?"> div":"> div[role=list]";return t+=":not([placeholder]):not([fallback]):not([fetch-error])",d(this.element,t)}NL(){return this.mutateElement((()=>{this.UL().initializeLoadMore();const t=this.getOverflowElement();t&&R(t,!1),this.element.warnOnMissingOverflow=!1})).then((()=>{this.zL(),ht(this.UL().getLoadMoreFailedClickable(),"click",(()=>this.HL(!0,!0))),ht(this.UL().getLoadMoreButtonClickable(),"click",(()=>this.HL(!1,!0)))}))}CL(){if(!this.IL)return this.$L(this.jf);this.JL(this.jf)}UL(){return this.TL||(this.TL=new class{constructor(t){this.BL=t,this.DL=null,this.GL=null,this.XL=null,this.qL=null,this.WL=null,this.YL=null}initializeLoadMore(){this.ZL(),this.KL(),this.QL(),this.LH()}ZL(){this.DL=f(this.BL,"load-more-button"),this.DL?this.DL.classList.add("amp-visible"):this.DL=It(this.BL)(xt),this.BL.appendChild(this.DL),E(this.DL,{visibility:"hidden"})}KL(){this.XL=f(this.BL,"load-more-loading"),this.XL||(this.XL=It(this.BL)(wt)),this.BL.appendChild(this.XL)}getLoadMoreButton(){return this.DL||this.ZL(),this.DL}getLoadMoreLoadingElement(){return this.XL||this.KL(),this.XL}getLoadMoreButtonClickable(){if(!this.GL){const t=this.getLoadMoreButton();this.GL=f(t,"load-more-clickable")||t}return this.GL}QL(){this.qL=f(this.BL,"load-more-failed"),this.qL||(this.qL=It(this.BL)(Lt)),this.BL.appendChild(this.qL)}getLoadMoreFailedElement(){return this.qL||this.QL(),this.qL}getLoadMoreFailedClickable(){if(!this.WL){const t=this.getLoadMoreFailedElement();this.WL=f(t,"load-more-clickable")||t}return this.WL}LH(){this.YL||(this.YL=f(this.BL,"load-more-end"),this.YL&&this.BL.appendChild(this.YL))}getLoadMoreEndElement(){return this.YL}setLoadMoreEnded(){this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1),this.getLoadMoreButton().classList.toggle("amp-visible",!1),this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1);const t=this.getLoadMoreEndElement();t&&t.classList.toggle("amp-visible",!0)}toggleLoadMoreLoading(t){t&&this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1);const i=this.getLoadMoreEndElement();i&&i.classList.toggle("amp-visible",!1),this.getLoadMoreButton().classList.toggle("amp-visible",!t),this.getLoadMoreLoadingElement().classList.toggle("amp-visible",t)}setLoadMoreFailed(){const t=this.getLoadMoreFailedElement(),i=this.getLoadMoreButton();(t||i)&&(t.classList.toggle("amp-visible",!0),i.classList.toggle("amp-visible",!1),this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1))}hideAllLoadMoreElements(){this.getLoadMoreButton().classList.toggle("amp-visible",!1),this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1),this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1),this.getLoadMoreEndElement()&&this.getLoadMoreEndElement().classList.toggle("amp-visible",!1)}}(this.element)),this.TL}zL(){let t,i;return this.measureMutateElement((()=>{t=this.UL().getLoadMoreButton().offsetHeight,i=this.element.offsetHeight}),(()=>{var e;E(this.jf,{"max-height":`calc(100% - ${e=t,`${e}px`})`}),this.element.applySize(i+t)}))}SH(t){return t.startsWith(kt)}OH(t){return Y(this.element).then((i=>{F(i,'"amp-state:" URLs require amp-bind to be installed.'),F(!this.wN.isEnabled(),'[amp-list]: "amp-state" URIs cannot be used in SSR mode.');const e=t.slice(kt.length);return i.getStateAsync(e).catch((t=>{const i=e.split(".")[0];throw O().error(Ot,`'amp-state' element with id '${i}' was not found.`),t}))})).then((i=>(F(void 0!==i,`[amp-list] No data was found at provided uri: ${t}`),i)))}jH(t){return e().then((()=>{return F(!this.wN.isEnabled(),'[amp-list]: "amp-script" URIs cannot be used in SSR mode.'),(i=this.element,q(i,"amp-script","amp-script")).then((i=>i.fetch(t)));var i})).then((i=>(F("object"==typeof i,`[amp-list] ${t} must return json, but instead returned: ${typeof i}`),i)))}mutatedAttributesCallback(t){let i;const e=t.src;void 0!==e&&("string"==typeof e?this.AL&&(this.VL(),i=this.SL()):"object"==typeof e?i=(t=>{this.element.setAttribute("src",""),F(!this.wN.isEnabled(),'[amp-list] "[src]" may not be bound in SSR mode.');const i=r(t)?t:[t];return this.VL(!1),this.Hf(i,!1)})(e):this.user().error(Ot,'Unexpected "src" type: '+e)),t["is-layout-container"]&&this.OL()}FL(){const t=this.win.document.createElement("div");var i;return this.FH(t,"list"),this.IL||this.ML||((i=t).classList.add("i-amphtml-fill-content"),i.classList.add("i-amphtml-replaced-content")),t}$H(t,i){t.forEach((t=>{t.hasAttribute("role")||this.FH(t,"listitem"),i.appendChild(t)}))}FH(t,i){this.element.hasAttribute("single-item")||t.setAttribute("role",i)}NH(t){(t||this.fL)&&(this.toggleFallback(t),this.fL=t)}VL(t=!0){if(t&&this.element.hasAttribute("reset-on-refresh")||"always"===this.element.getAttribute("reset-on-refresh")){const t=()=>{this.togglePlaceholder(!0);const t=this.element.hasAttribute("reset-on-refresh");if(this.toggleLoading(!0,t),this.NH(!1),this.yL){const t=n(this.jf.children);this.yL.rescan([],t,{"fast":!0,"update":!1})}this.kL.scheduleUnlayout(this.element,this.jf),p(this.jf)};if(!this.IL&&this.ML)return void this.UH(t);this.mutateElement((()=>{t(),this.IL&&this.UL().hideAllLoadMoreElements()}))}}zH(t){const i=this.element.getAttribute("items")||"items";let e=t;return"."!=i&&(e=u(t,i)),F(void 0!==e,'Response must contain an array or object at "%s". %s',i,this.element),this.element.hasAttribute("single-item")&&(r(e)||(e=[e])),e=O().assertArray(e),this.element.hasAttribute("max-items")&&(e=this.HH(e)),e}JH(t){const i=t?at(this.win,`${Ot}.error`,{"response":t.response}):null;this.fa.trigger(this.element,"fetch-error",i,1)}SL(t={}){const{append:i=!1,refresh:s=!1}=t,n=this.element.getAttribute("src");if(!n)return e();let r;return this.wN.isEnabled()?r=this.BH(s):(r=this.SH(n)?this.OH(n):n.startsWith("amp-script:")?this.jH(n):this.GH(s),r=r.then((t=>{if(n!==this.element.getAttribute("src"))return;const e=this.zH(t);return this.IL&&this.XH(t),this.Hf(e,i,t).then((()=>this.qH()))}))),r.catch((t=>{if(i)throw t;throw this.JH(t),this.WH(),t}))}HH(t){const i=parseInt(this.element.getAttribute("max-items"),10);return i<t.length&&(t=t.slice(0,i)),t}XH(t){const i=this.element.getAttribute("load-more-bookmark")||"load-more-src";this.xL=u(t,i)}BH(t){const i=this.element.getAttribute("src");let e;return St(this.element,i,this.YH(),t).then((t=>{var i,s,n;e=t,e.xhrUrl=(i=this.win,s=e.xhrUrl,n=e.fetchOpt,c("string"==typeof s),!1!==n.ampCors&&(s=function(t,i){return function(t){F(!("__amp_source_origin"in L(tt(t).search)),"Source origin is not allowed in %s",t)}(i),function(t,i,e,s){return function(t,i,e){if(!i)return t;const s=t.split("#",2),n=s[0].split("?",2);let r=n[0]+(n[1]?`?${n[1]}&${i}`:`?${i}`);return r+=s[1]?`#${s[1]}`:"",r}(t,it("__amp_source_origin",e))}(i,0,et(t.location.href))}(i,s)),s),e.fetchOpt=function(t,i,e){e=e||{};const s=function(t){return t.origin||tt(t.location.href).origin}(t);return s==tt(i).origin&&(e.headers=e.headers||{},e.headers["AMP-Same-Origin"]="true"),e}(this.win,e.xhrUrl,e.fetchOpt),function(t){const i=function(t,i){const e=t||{},s=e.credentials;return c(void 0===s||"include"==s||"omit"==s),e.method=void 0===(n=e.method)?"GET":(n=n.toUpperCase(),c(ct.includes(n)),n),e.headers=e.headers||{},e.headers.Accept=i,c(null!==e.body),e;var n}(t,"application/json");if("POST"==i.method&&!ut(i.body)){c(mt.some((t=>t(i.body)))),i.headers["Content-Type"]=i.headers["Content-Type"]||"text/plain;charset=utf-8";const t=i.headers["Content-Type"];i.body="application/x-www-form-urlencoded"===t?function(t){const i=[];for(const s in t){let n=t[s];if(null!=n){n=r(e=n)?e:[e];for(let t=0;t<n.length;t++)i.push(it(s,n[t]))}}var e;return i.join("&")}(i.body):JSON.stringify(i.body)}}(t.fetchOpt);const o={"ampListAttributes":{"items":this.element.getAttribute("items")||"items","singleItem":this.element.hasAttribute("single-item"),"maxItems":this.element.getAttribute("max-items")}};return this.wN.ssr(this.element,e,null,o)})).then((t=>{F(t,`Failed fetching JSON data: XHR Failed fetching (${this.ZH(e)}): received no response.`);const i=t.init;if(i){const t=i.status;if(t>=300)throw O().createError(`Failed fetching JSON data (${this.ZH(e)}): HTTP error`,t)}return F("string"==typeof t.html,`Failed fetching JSON data: XHR Failed fetching (${this.ZH(e)}): Expected response with format {html: <string>}. Received: `,t),e.fetchOpt.responseType="application/json",t}),(t=>{throw O().createError(`Failed fetching JSON data: XHR Failed fetching (${this.ZH(e)})`,t)})).then((t=>{if(i===this.element.getAttribute("src"))return this.Hf(t,!1)}))}ZH(t){return`${(i=this.element,N(i,"url")).parse(t.xhrUrl).origin}/...`;var i}Hf(t,i,e){const n=new s,{promise:r,reject:o,resolve:l}=n;return this.gL||this._L.schedule(),this.gL={data:t,resolver:l,rejecter:o,append:i,payload:e},this.PL&&i&&(this.gL.payload=e||{}),r}vL(){const t=this.gL;j(t&&t.data);const i=()=>{this.gL!==t?this._L.schedule(1):(this.PL=this.gL.data,this.gL=null)},e=this.wN.isEnabled();let s=this.wN.applySsrOrCsrTemplate(this.element,t.data).then((i=>this.KH(i,t.append))).then((i=>this.Su(i,t.append)));if(!e){const i=t.payload;s=s.then((()=>this.QH(i)))}s.then((()=>{i(),t.resolver()}),(()=>{i(),t.rejecter()}))}QH(t){if(this.IL){const i=[];return i.push(this.tJ(this.UL().getLoadMoreButton(),t)),i.push(this.tJ(this.UL().getLoadMoreEndElement(),t)),Promise.all(i)}return e()}tJ(t,i){return t&&this.tM.hasTemplate(t)?this.tM.findAndRenderTemplate(t,i).then((i=>this.mutateElement((()=>{p(t),t.appendChild(i)})))):e()}KH(t,i){const e=r(t)?t:[t],s=this.element.getAttribute("binding");if("no"===s)return Promise.resolve(e);if(!e.some((t=>t.hasAttribute("i-amphtml-binding")||!!t.querySelector("[i-amphtml-binding]"))))return Promise.resolve(e);const n=t=>{const s=i?[]:[this.jf];return t.rescan(e,s,{"fast":!0,"update":!0}).then((()=>e),(()=>e))};return s&&s.startsWith("refresh")?this.yL&&this.yL.signals().get("FIRST_MUTATE")?n(this.yL):(this.element.hasAttribute("diffable")||this.iJ(e,[]),Promise.resolve(e)):Y(this.element).then((t=>t?n(t):Promise.resolve(e)))}iJ(t,i){const e=this.element.getAttribute("binding");e&&e.startsWith("refresh")&&Y(this.element).then((s=>{if(s){const n="refresh-evaluate"==e&&"evaluate";s.rescan(t,i,{"fast":!0,"update":n})}}))}Su(t,i=!1){const e=this.jf,s=()=>{this.eJ(),this.element.hasAttribute("diffable")?(this.sJ(e,t),this.iJ([e],[e])):(i||(this.kL.scheduleUnlayout(this.element,e),p(e)),this.$H(t,e));const s=at(this.win,"amp:dom-update",null,{bubbles:!0});return this.jf.dispatchEvent(s),this.element.getResources().getResourceForElement(this.element).resetPendingChangeSize(),this.CL()};return!this.IL&&this.ML?this.UH((()=>{(s()||Promise.resolve(!0)).then((t=>t?this.nJ():null))})):this.mutateElement(s)}sJ(t,i){const e=this.FL();this.$H(i,e),this.RL&&this.rJ(t);const s=bt(t,e);for(let t=0;t<s.length;t+=2){const i=s[t],e=s[t+1];this.oJ(i,e)}}rJ(t){let i=-1;n(t.querySelectorAll(".i-amphtml-element")).forEach((t=>{!function(t,e){const s=t.tagName.startsWith("AMP-"),n=t.hasAttribute("i-amphtml-binding");!n&&rt[t.tagName]?t.setAttribute(nt,""):(n||s)&&(t.hasAttribute(st)||t.setAttribute(st,String(i--)))}(t)}))}oJ(t,i){j(t.nodeName==i.nodeName);const e=rt[t.nodeName];if(e)if(e.some((e=>t.getAttribute(e)!==i.getAttribute(e))))t.parentElement.replaceChild(i,t);else{for(let e=0;e<i.classList.length;e++)t.classList.add(i.classList[e]);for(let e=0;e<t.classList.length;e++){const s=t.classList[e];s.startsWith("i-amphtml-")||i.classList.contains(s)||t.classList.remove(s)}if(i.hasAttribute("style")){const e=i.getAttribute("style");t.setAttribute("style",`${t.getAttribute("style")||""};${e}`)}}}UH(t){if(!this.ML||this.IL)return(V.dev||(V.dev=S())).error(Ot,"%s initialized with layout=container does not support infinite scrolling with [load-more]. %s",this.element),e();let i;return this.measureMutateElement((()=>{i=this.element.offsetHeight}),(()=>(A(this.element,{"height":`${i}px`,"overflow":"hidden"}),t())))}nJ(){j(this.ML&&!this.IL),A(this.element,{"height":"","overflow":""})}$L(t){return this.element.getAttribute("layout")!=b.CONTAINER||this.ML?this.measureElement((()=>{const i=t.scrollHeight;return!(i>this.element.offsetHeight)||this.attemptChangeHeight(i).then((()=>!0),(()=>!1))})):Promise.resolve(!0)}JL(t){const i=this.xL?this.UL().getLoadMoreButton():this.UL().getLoadMoreEndElement();this.lJ(i,t)}lJ(t,i){this.element.getAttribute("layout")!=b.CONTAINER&&this.measureElement((()=>{const e=i.scrollHeight,s=this.element.offsetHeight,n=t?t.offsetHeight:0;e+n>s&&this.attemptChangeHeight(e+n).then((()=>{this.wL=!1,"auto"===this.element.getAttribute("load-more")&&this.aJ(),E(this.jf,{"max-height":""})})).catch((()=>{this.wL=!0,this.zL()}))}))}hJ(t){const i=function(t){if("nodisplay"===(i=t)||"fixed"===i||"fixed-height"===i||"responsive"===i||"container"===i||"fill"===i||"flex-item"===i||"fluid"===i||"intrinsic"===i)return t;var i}(t),e=function(t){return"i-amphtml-layout-"+t}(j(i));this.element.classList.remove(e,"i-amphtml-layout-size-defined"),[b.FIXED,b.FLEX_ITEM,b.FLUID,b.INTRINSIC,b.RESPONSIVE].includes(i)?E(this.element,{width:"",height:""}):i==b.FIXED_HEIGHT&&E(this.element,{height:""}),this.element.applySize()}OL(){if(this.ML)return e();const t=this.element.getAttribute("i-amphtml-layout");return t==b.CONTAINER?e():this.mutateElement((()=>{this.hJ(t),this.jf.classList.remove("i-amphtml-fill-content","i-amphtml-replaced-content");const i=this.getOverflowElement();i&&R(i,!1),this.element.setAttribute("layout","container"),this.element.setAttribute("i-amphtml-layout","container"),this.element.classList.add("i-amphtml-layout-container")}))}qH(){return this.IL?this.uJ():e()}uJ(){return this.xL?("auto"===this.element.getAttribute("load-more")&&this.cJ(),this.mutateElement((()=>{this.UL().toggleLoadMoreLoading(!1),E(this.UL().getLoadMoreButton(),{visibility:""})}))):this.mutateElement((()=>this.UL().setLoadMoreEnded()))}HL(t=!1,i=!1){if(this.xL)this.element.setAttribute("src",this.xL),this.xL=null;else if(!t)return e();const s=this.jf,n=this.mJ(s);return this.mutateElement((()=>{this.UL().toggleLoadMoreLoading(!0)})),this.SL({append:!0}).then((()=>this.mutateElement((()=>{this.xL?(this.UL().toggleLoadMoreLoading(!1),n&&i&&function(t){try{t.focus()}catch(t){}}(n)):this.UL().setLoadMoreEnded()})))).then((()=>{this.JL(this.jf)})).catch((t=>{this.JH(t),this.dJ()}))}dJ(){this.mutateElement((()=>this.UL().setLoadMoreFailed())).then((()=>{this.lJ(this.UL().getLoadMoreFailedElement(),this.jf)}))}Jn(t=!1){return function(t,i,e={}){const{expr:s=".",urlReplacement:n=Vt.NONE,refresh:r=!1,xssiPrefix:o,url:l=i.getAttribute("src")}=e;!function(t,i,e="source"){var s;F(null!=t,"%s %s must be available",i,e),F("https:"==(s=Q(s=t)).protocol||"localhost"==s.hostname||"127.0.0.1"==s.hostname||function(t,i){const e=t.length-i.length;return e>=0&&t.indexOf(i,e)==e}(s.hostname,".localhost")||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',i,e,t)}(l,i);const a=$(t.win,"batched-xhr");return St(i,l,n,r).then((t=>a.fetchJson(t.xhrUrl,t.fetchOpt))).then((i=>{return(e=t.win,$(e,"xhr")).xssiJson(i,o);var e})).then((t=>{if(null==t)throw new Error("Response is undefined.");return u(t,s||".")})).catch((t=>{throw O().createError("failed fetching JSON data",t)}))}(this.getAmpDoc(),this.element,{expr:".",urlReplacement:this.YH(),refresh:t,xssiPrefix:this.element.getAttribute("xssi-prefix")||void 0})}cJ(){this.LL||(this.LL=this.Xl.onChanged((()=>this.aJ())))}aJ(){if(this.wL)return;const t=this.jf.lastChild||this.jf;this.Xl.getClientRectAsync(t).then((t=>{const i=this.Xl.getHeight();if(t.bottom>0&&3*i>t.bottom)return this.HL()}))}GH(t=!1){return this.Jn(t)}YH(){const t=this.element.getAttribute("src");let i=Vt.OPT_IN;return t!=this.EL&&et(t)!=et(this.getAmpDoc().win.location)||(i=Vt.ALL),i}eJ(){this.element.classList.remove("i-amphtml-list-fetch-error"),this.toggleLoading(!1),this.getFallback()&&this.NH(!1),this.togglePlaceholder(!1)}WH(){this.element.classList.add("i-amphtml-list-fetch-error"),f(this.element,"fetch-error")&&this.$L(this.element),this.toggleLoading(!1),this.getFallback()&&(this.NH(!0),this.togglePlaceholder(!1))}mJ(t){const i=t.querySelectorAll(m('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])',":scope"));return i?i[i.length-1]:null}};t.registerElement(Ot,jt,'amp-list.i-amphtml-list-fetch-error [fetch-error],amp-list[load-more] [load-more-button].amp-visible,amp-list[load-more] [load-more-end].amp-visible,amp-list[load-more] [load-more-failed].amp-visible,amp-list[load-more] [load-more-loading].amp-visible{display:block}amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{height:80px;padding:12px 0px;box-sizing:border-box}.i-amphtml-list-load-more-button,amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.1em;color:#333;text-align:center}amp-list[load-more] [load-more-loading].i-amphtml-default-ui .i-amphtml-list-load-more-spinner{display:inline-block;width:40px;height:40px;margin:8px 0px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a"><stop stop-color="%23333" stop-opacity=".75"/><stop offset="100%" stop-color="%23333" stop-opacity="0"/></linearGradient></defs><path d="M11 4.4A18 18 0 1 0 38 20" fill="none" stroke="url(%23a)" stroke-width="1.725"/></svg>\');animation:amp-list-load-more-spinner 1000ms linear infinite}@keyframes amp-list-load-more-spinner{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}.i-amphtml-list-load-more-button{border:none;display:inline-block;background-color:rgba(51,51,51,.75);color:#fff;margin:4px 0px;padding:0px 32px;box-sizing:border-box;height:48px;border-radius:24px}[load-more] div[role=list]{overflow-y:hidden}.i-amphtml-list-load-more-button,.i-amphtml-list-load-more-button label,.i-amphtml-list-load-more-icon{cursor:pointer}.i-amphtml-list-load-more-button:hover{background-color:#333}.i-amphtml-list-load-more-button.i-amphtml-list-load-more-button-small{margin:0px;padding:4px 16px;height:32px}.i-amphtml-list-load-more-button label{display:inline-block;vertical-align:middle;line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-message{line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-icon{height:24px;width:24px;display:inline-block;vertical-align:middle;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="%23fff" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>\')}\n/*# sourceURL=/extensions/amp-list/0.1/amp-list.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-list-0.1.mjs.map