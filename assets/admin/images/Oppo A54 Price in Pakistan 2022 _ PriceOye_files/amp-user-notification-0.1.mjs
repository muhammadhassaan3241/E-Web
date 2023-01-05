;
(self.AMP=self.AMP||[]).push({m:1,v:"2211302304002",n:"amp-user-notification",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;function s(){return i||(i=Promise.resolve(void 0))}var n=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}},{isArray:e}=Array,{hasOwnProperty:o,toString:r}=Object.prototype;function h(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:s,stack:n}=t,e=new Error(s);for(const i in t)e[i]=t[i];return e.stack=n,e}function u(t){let i=null,s="";for(const t of arguments)t instanceof Error&&!i?i=h(t):(s&&(s+=" "),s+=t);return i?s&&(i.message=s+": "+i.message):i=new Error(s),i}function c(t){var i,s;null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t)}function l(t){const i=u.apply(null,arguments);setTimeout((()=>{throw c(i),i}))}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var a=self.__AMP_LOG;function f(t,i){throw new Error("failed to call initLogConstructor")}function d(t){return f()}function m(){return a.dev||(a.dev=f())}function p(t,i,s,n,e,o,r,h,u,c,l){return t}function v(t,i,s,n,e,o,r,h,u,c,l){return(a.user||(a.user=d()),void a.user.win?a.userForEmbed||(a.userForEmbed=d()):a.user).assert(t,i,s,n,e,o,r,h,u,c,l)}function _(t,i){return g(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function P(t,i){return function(t,i){const s=I(t,i);if(s)return s;const e=E(t);return e[i]=function(){const t=new n,{promise:i,reject:s,resolve:e}=t;return i.catch((()=>{})),{obj:null,promise:i,resolve:e,reject:s,context:null,ctor:null}}(),e[i].promise}(b(t),i)}function w(t,i){return I(b(t),i)}function A(t){return t.nodeType?(s=t,i=(s.ownerDocument||s).defaultView,_(i,"ampdoc")).getAmpDoc(t):t;var i,s}function b(t){const i=A(t);return i.isSingleDoc()?i.win:i}function g(t,i){p(y(t,i));const s=E(t)[i];return s.obj||(p(s.ctor),p(s.context),s.obj=new s.ctor(s.context),p(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function I(t,i){const s=E(t)[i];return s?s.promise?s.promise:(g(t,i),s.promise=Promise.resolve(s.obj)):null}function E(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function y(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var R,T=t=>_(t,"xhr"),M="notificationUIManager",C=(new Set(["c","v","a","ad"]),t=>"string"==typeof t?function(t,i){return R||(R=self.document.createElement("a")),function(t,i,s){return t.href="",new URL(i,t.href)}(R,t)}(t):t);function V(t,i,s="source"){var n;return v(null!=t,"%s %s must be available",i,s),v("https:"==(n=C(n=t)).protocol||"localhost"==n.hostname||"127.0.0.1"==n.hostname||function(t,i){const s=t.length-i.length;return s>=0&&t.indexOf(i,s)==s}(n.hostname,".localhost")||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',i,s,t),t}var O="amp-user-notification",U="userNotificationManager",S=class extends t.BaseElement{constructor(t){super(t),this.vvt=null,this._vt=null;const i=new n;this.Pvt=i.promise,this.wvt=i.resolve,this.Avt=null,this.bvt=!1,this.gvt=null,this.Ivt=null,this.Evt=null,this.yvt=null,this.hst="",this.ist=null,this.iA=null}isAlwaysFixed(){return!0}buildCallback(){const t=this.getAmpDoc();this.iA=function(t,i){const s=b(A(t));return y(s,i)?g(s,i):null}(this.element,"url-replace"),this.ist=P(this.element,"storage"),this._vt=v(this.element.id,"amp-user-notification should have an id."),this.hst="amp-user-notification:"+this._vt,this.gvt=this.element.getAttribute("data-show-if-geo"),this.Ivt=this.element.getAttribute("data-show-if-not-geo"),this.yvt=this.element.getAttribute("data-show-if-href"),this.yvt&&V(this.yvt,this.element),v(!!this.yvt+!!this.gvt+!!this.Ivt<=1,'Only one "data-show-if-*" attribute allowed'),this.gvt&&(this.Evt=this.Rvt(this.gvt,!0)),this.Ivt&&(this.Evt=this.Rvt(this.Ivt,!1)),this.Avt=this.element.getAttribute("data-dismiss-href"),this.Avt&&V(this.Avt,this.element),this.element.getAttribute("role")||this.element.setAttribute("role","alert");const i=this.element.getAttribute("data-persist-dismissal");this.bvt="false"!=i&&"no"!=i,this.registerDefaultAction((()=>this.dismiss(!1)),"dismiss"),this.registerAction("optoutOfCid",(()=>this.Tvt())),P(t,U).then((t=>{t.registerUserNotification(this._vt,this)}))}Rvt(t,i){return(s=this.element,function(t,i,s,n){const e=w(t,i);if(e)return e;const o=A(t);return o.whenExtensionsKnown().then((()=>{const t=o.getExtensionVersion(s);return t?_(o.win,"extensions").waitForExtension(s,t):null})).then((s=>s?w(t,i):null))}(s,"geo","amp-geo")).then((s=>{v(s,"requires <amp-geo> to use promptIfUnknownForGeoGroup");const n=t.split(/,\s*/).filter((t=>2==s.isInCountryGroup(t)));return!!(i?n.length:!n.length)}));var s}Mvt(t){const i=this.yvt;return this.iA.expandUrlAsync(i).then((i=>function(t,i,s){if(!i)return t;const n=t.split("#",2),e=n[0].split("?",2);let o=e[0]+(e[1]?`?${e[1]}&${i}`:`?${i}`);return o+=n[1]?`#${n[1]}`:"",o}(i,function(t){const i=[];for(const r in t){let h=t[r];if(null!=h){h=e(o=h)?o:[o];for(let t=0;t<h.length;t++)i.push((s=r,n=h[t],`${encodeURIComponent(s)}=${encodeURIComponent(n)}`))}}var s,n,o;return i.join("&")}({"elementId":this._vt,"ampUserId":t}))))}Cvt(t){return this.vvt=t,this.Mvt(t).then((t=>T(this.win).fetchJson(t,{credentials:"include"}).then((t=>t.json()))))}Vvt(){const t=this.element.getAttribute("enctype")||"application/json;charset=utf-8";return T(this.win).fetchJson(this.Avt,this.Ovt(t,this._vt,this.vvt))}Ovt(t,i,s){return{method:"POST",credentials:"include",body:{"elementId":i,"ampUserId":s},headers:{"Content-Type":t}}}Uvt(t){return v("boolean"==typeof t.showNotification,'`showNotification` should be a boolean. Got "%s" which is of type %s.',t.showNotification,typeof t.showNotification),t.showNotification||this.wvt(),Promise.resolve(t.showNotification)}Tvt(){return this.Svt().then((t=>t.optOut())).then((()=>this.dismiss(!1)),(t=>{m().error(O,"Failed to opt out of Cid",t),this.dismiss(!0)}))}jvt(){return this.Svt().then((t=>t.get({scope:O,createCookieIfNotPresent:!0},s(),this.Pvt)))}Svt(){return P(this.element,"cid")}shouldShow(){return this.isDismissed().then((t=>!t&&(this.yvt?this.xvt():!this.Evt||this.Evt)))}xvt(){return this.jvt().then(this.Cvt.bind(this)).then(this.Uvt.bind(this))}show(){var t,i;return t=this.element,void 0===(i=!0)&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden",""),this.element.classList.add("amp-active"),this.getViewport().addToFixedLayer(this.element),this.Pvt}isDismissed(){return this.bvt?this.ist.then((t=>t.get(this.hst))).then((t=>!!t),(t=>(m().error(O,"Failed to read storage",t),!1))):Promise.resolve(!1)}dismiss(t){this.element.classList.remove("amp-active"),this.element.classList.add("amp-hidden"),this.wvt(),this.getViewport().removeFromFixedLayer(this.element),this.bvt&&!t&&this.ist.then((t=>{t.set(this.hst,!0)})),this.Avt&&this.Vvt()}};t.registerServiceForDoc(U,class{constructor(t){this.ampdoc=t,this.Nvt=Object.create(null),this.Gvt=Object.create(null),this.$vt=this.ampdoc.whenReady(),this.kvt=Promise.all([this.ampdoc.whenFirstVisible(),this.$vt]),this.Fvt=P(this.ampdoc,M)}get(t){return this.kvt.then((()=>{this.ampdoc.getElementById(t)})),this.Dvt(t).promise}getNotification(t){return this.$vt.then((()=>this.Nvt[t]))}registerUserNotification(t,i){this.Nvt[t]=i;const s=this.Dvt(t);return this.kvt.then((()=>i.shouldShow())).then((t=>{if(t)return this.Fvt.then((t=>t.registerUI(i.show.bind(i))))})).then(s.resolve.bind(this,i)).catch(l.bind(null,"Notification service failed amp-user-notification",t))}Dvt(t){if(this.Gvt[t])return this.Gvt[t];const i=new n,{promise:s,resolve:e}=i;return this.Gvt[t]={promise:s,resolve:e}}}),t.registerServiceForDoc(M,class{constructor(){this.Wet=0,this.Bet=s(),this.Jet=()=>{},this.Ket=()=>{}}onQueueEmpty(t){this.Jet=t,0==this.Wet&&t()}onQueueNotEmpty(t){this.Ket=t,this.Wet>0&&t()}registerUI(t){0==this.Wet&&this.Ket(),this.Wet++;const i=this.Bet.then((()=>t().then((()=>{this.Wet--,0==this.Wet&&this.Jet()}))));return this.Bet=i,i}}),t.registerElement(O,S,"amp-user-notification{position:fixed!important;bottom:0;left:0;overflow:hidden!important;visibility:hidden;background:hsla(0,0%,100%,0.7);z-index:1000;width:100%}amp-user-notification.amp-active{visibility:visible}amp-user-notification.amp-hidden{visibility:hidden}\n/*# sourceURL=/extensions/amp-user-notification/0.1/amp-user-notification.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-user-notification-0.1.mjs.map