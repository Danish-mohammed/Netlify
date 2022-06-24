(function(){"use strict";var t={6869:function(t,e,n){var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1)]),n("v-main",[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/card"}},[t._v("Cart")])],1),n("router-view")],1)],1)},a=[],o={name:"App",data:()=>({})},s=o,c=n(1001),l=n(3453),u=n.n(l),d=n(7524),v=n(3583),f=n(7047),m=n(7877),p=(0,c.Z)(s,i,a,!1,null,null,null),h=p.exports;u()(p,{VApp:d.Z,VAppBar:v.Z,VImg:f.Z,VMain:m.Z});var g=n(8345),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},y=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",i,!1),r),[t._v(" Dropdown ")])]}}])},[n("v-list",t._l(t.items,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),n("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),n("v-img",{attrs:{height:"150",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),n("v-card-title",[t._v("Cafe Badilico")]),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),n("div",{staticClass:"grey--text ms-4"},[t._v("4.5 (413)")])],1),n("div",{staticClass:"my-4 text-subtitle-1"},[t._v("$ • Italian, Cafe")]),n("div",[t._v("Welcome to bridgelabz")])],1),n("v-divider",{staticClass:"mx-4"}),n("v-card-title",[t._v("Tonight's availability")]),t._v(" // Used to select the time for reservation. "),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("v-chip",[t._v("5:30PM")]),n("v-chip",[t._v("7:30PM")]),n("v-chip",[t._v("8:00PM")]),n("v-chip",[t._v("9:00PM")])],1)],1),t._v(" // A button which is used to reserve the table. "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.reserve}},[t._v(" Reserve ")])],1)],2)],1)},_=[],Z={name:"HelloWorld",data:()=>({loading:!1,selection:1,items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}),methods:{reserve(){this.loading=!0,setTimeout((()=>this.loading=!1),2e3)}}},x=Z,k=n(680),w=n(3237),V=n(7118),j=n(5424),E=n(1951),A=n(1418),B=n(6816),T=n(7620),F=n(1058),O=n(8994),P=n(7003),M=n(8656),S=n(2877),L=(0,c.Z)(x,C,_,!1,null,null,null),I=L.exports;u()(L,{VBtn:k.Z,VCard:w.Z,VCardActions:V.h7,VCardText:V.ZB,VCardTitle:V.EB,VChip:j.Z,VChipGroup:E.Z,VDivider:A.Z,VImg:f.Z,VList:B.Z,VListItem:T.Z,VListItemTitle:F.V9,VMenu:O.Z,VProgressLinear:P.Z,VRating:M.Z,VRow:S.Z});var N={name:"Home",components:{HelloWorld:I}},$=N,H=(0,c.Z)($,b,y,!1,null,null,null),D=H.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card")],1)},W=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return n("v-col",{key:e.title,attrs:{cols:e.flex}},[n("v-card",[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[n("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-bookmark")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)},z=[],U={name:"Card",data:()=>({cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}]})},G=U,K=n(2102),J=n(9846),Q=n(6428),X=n(9762),Y=(0,c.Z)(G,q,z,!1,null,"4282da72",null),tt=Y.exports;u()(Y,{VBtn:k.Z,VCard:w.Z,VCardActions:V.h7,VCardTitle:V.EB,VCol:K.Z,VContainer:J.Z,VIcon:Q.Z,VImg:f.Z,VRow:S.Z,VSpacer:X.Z});var et={name:"CardView",components:{Card:tt}},nt=et,rt=(0,c.Z)(nt,R,W,!1,null,"77035966",null),it=rt.exports;r.Z.use(g.Z);const at=[{path:"/",name:"home",component:D},{path:"/card",name:"card",component:it},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,9085))}],ot=new g.Z({mode:"history",base:"/",routes:at});var st=ot,ct=n(9132);r.Z.use(ct.Z);var lt=new ct.Z({icons:{iconfont:"md"},theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});r.Z.config.productionTip=!1,new r.Z({router:st,vuetify:lt,render:t=>t(h)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],a=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,a<o&&(o=a));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.663b8ef7.js"}}(),function(){n.miniCssF=function(t){return"css/about.ca74e1c2.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="demo:";n.l=function(r,i,a,o){if(t[r])t[r].push(i);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[i];var v=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===e))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],a=i.getAttribute("data-href");if(a===t||a===e)return i}},r=function(r){return new Promise((function(i,a){var o=n.miniCssF(r),s=n.p+o;if(e(o,s))return i();t(r,s,i,a)}))},i={143:0};n.f.miniCss=function(t,e){var n={443:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};n.l(o,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],s=r[1],c=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(r);l<o.length;l++)a=o[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6869)}));r=n.O(r)})();
//# sourceMappingURL=app.78da6c84.js.map