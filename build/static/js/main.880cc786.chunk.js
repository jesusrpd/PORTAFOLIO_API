(this.webpackJsonpjesus=this.webpackJsonpjesus||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c,r,l=a(1),s=a.n(l),n=a(26),i=a.n(n),o=a(9),d=a(2),j=a.p+"static/media/perfil.2da234fe.png",b=a.p+"static/media/cv.0b5054c8.pdf",m=a(0),p=function(){return Object(m.jsxs)("div",{className:"presentacion",children:[Object(m.jsxs)("div",{className:"presentacion-nombre",children:[Object(m.jsxs)("h1",{children:["Jes\xfas Rodrigo",Object(m.jsx)("br",{}),"P\xe9rez Delgado"]}),Object(m.jsx)("a",{href:b,download:"cv.pdf",className:"btn-red",children:"Descargar CV"})]}),Object(m.jsxs)("div",{className:"presentacion-img",children:[Object(m.jsx)("img",{src:j,alt:"im\xe1gen de perfil",width:"300px"}),Object(m.jsxs)("p",{children:["Desarrollador y dise\xf1ador web fullStack ,18 a\xf1os.",Object(m.jsx)("br",{}),"M\xe9xico, CDMX."]})]})]})},f=function(){return Object(m.jsx)("div",{className:"sobremi",children:Object(m.jsx)(p,{})})},h=a.p+"static/media/Secuencia.6264586d.mp4",O=a(14),u=a.n(O),x=a(27),v=a(11),g=a(28),y=a.n(g),w=function(e){var t=Object(l.useState)([]),a=Object(v.a)(t,2),c=a[0],r=a[1],s=Object(l.useState)(!0),n=Object(v.a)(s,2),i=n[0],o=n[1];return Object(l.useEffect)((function(){(function(){var t=Object(x.a)(u.a.mark((function t(){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new Date,t.next=3,y.a.get("/api/trabajos/".concat(e),{headers:{"If-Modified-Since":a}});case 3:c=t.sent,r(c.data),o(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:c,load:i}},N=function(e){var t=e.urlImg,a=e.nombre,c=e.link;return Object(m.jsxs)("div",{className:"trabajo",children:[Object(m.jsx)("img",{className:"trabajo-img",src:t,alt:a,width:"500px"}),Object(m.jsx)("a",{rel:"noreferrer",target:"_blank",href:c,className:"trabajo-btn btn-red",children:"Visitar"})]})},E=function(){return Object(m.jsxs)("div",{className:"lds-ring",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})},A=function(){var e=w("dise\xf1o"),t=e.data;return e.load?Object(m.jsx)(E,{}):Object(m.jsxs)("div",{className:"portafolio-section",children:[Object(m.jsx)("h3",{children:"Dise\xf1o"}),Object(m.jsxs)("div",{className:"portafolio-trabajos-content",children:[t.map((function(e){return Object(m.jsx)(N,{urlImg:e.urlImg,nombre:e.nombre,link:e.link},e._id)})),";"]})]})},k=function(){var e=w("web"),t=e.data;return e.load?Object(m.jsx)(E,{}):Object(m.jsxs)("div",{className:"portafolio-section",children:[Object(m.jsx)("h3",{children:"Desarrollo web"}),Object(m.jsx)("div",{className:"portafolio-trabajos-content",children:t.map((function(e){return Object(m.jsx)(N,{urlImg:e.urlImg,nombre:e.nombre,link:e.link},e._id)}))})]})},C=function(){return Object(m.jsxs)("div",{className:"portafolio",children:[Object(m.jsx)("video",{className:"portafolio-video",src:h,autoPlay:!0,loop:!0}),Object(m.jsxs)("div",{className:"portafolio-content",children:[Object(m.jsx)("h2",{children:"Portafolio"}),Object(m.jsx)(k,{}),Object(m.jsx)(A,{})]})]})},I=a.p+"static/media/react.0b5d122e.svg",P=a.p+"static/media/after.9d327174.svg",S=a.p+"static/media/bootstrap.f62dce5b.svg",M=a.p+"static/media/css.4111ba8e.svg",Z=a.p+"static/media/express.01fb5675.svg",_=a.p+"static/media/github.aeda3c15.svg",H=a.p+"static/media/html.29fa3ff2.svg",V=a.p+"static/media/ilustraitor.db7848bb.svg",L=a.p+"static/media/js.43d97750.svg",B=a.p+"static/media/mongo.c3e9d72d.svg",D=a.p+"static/media/node.e0e66720.svg",R=a.p+"static/media/photoshop.a5c7b9d0.svg",J=a.p+"static/media/premiere.1779ece3.svg",X=a.p+"static/media/python.57cceca6.svg",q=a.p+"static/media/sass.ae22c409.svg",z=a.p+"static/media/xd.d28130f3.svg",T=function(){return Object(m.jsxs)("div",{className:"habilidades",children:[Object(m.jsx)("h2",{children:"Habilidades"}),Object(m.jsxs)("div",{className:"habilidades-content",children:[Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:H,alt:"react"}),Object(m.jsx)("p",{children:"HTML5"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:M,alt:"react"}),Object(m.jsx)("p",{children:"CSS3"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:L,alt:"react"}),Object(m.jsx)("p",{children:"Java Script"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:I,alt:"react"}),Object(m.jsx)("p",{children:"React"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:q,alt:"react"}),Object(m.jsx)("p",{children:"Sass"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:S,alt:"react"}),Object(m.jsx)("p",{children:"Bootstrap"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:D,alt:"react"}),Object(m.jsx)("p",{children:"Node Js"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:Z,alt:"react"}),Object(m.jsx)("p",{children:"Express"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:B,alt:"react"}),Object(m.jsx)("p",{children:"Mongo DB"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:X,alt:"react"}),Object(m.jsx)("p",{children:"Python"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:_,alt:"react"}),Object(m.jsx)("p",{children:"Git Hub"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:V,alt:"react"}),Object(m.jsx)("p",{children:"Adobe Ilustraitro"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:R,alt:"react"}),Object(m.jsx)("p",{children:"Adobe Photoshop"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:P,alt:"react"}),Object(m.jsx)("p",{children:"Affter Effects"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:J,alt:"react"}),Object(m.jsx)("p",{children:"Adobe Premiere"})]}),Object(m.jsxs)("div",{className:"habilidad",children:[Object(m.jsx)("img",{src:z,alt:"react"}),Object(m.jsx)("p",{children:"Adobe Xd"})]})]})]})},G=a.p+"static/media/iniciales.18b1112e.svg",Q=function(){var e=Object(l.useState)(0),t=Object(v.a)(e,2),a=t[0],c=t[1],r=function(e){c(e)};return Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)("img",{src:G,width:"50px",alt:"Iniciales de mi nombre"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/sobremi",onClick:function(){return r(0)},className:0===a?"nav-link tab":"nav-link",children:"Sobre m\xed"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/portafolio",onClick:function(){return r(1)},className:1===a?"nav-link tab":"nav-link",href:"#",children:"Portafolio"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/habilidades",onClick:function(){return r(2)},className:2===a?"nav-link tab":"nav-link",href:"#",children:"Habilidades"})})]})]})};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function U(e,t){var a=e.title,s=e.titleId,n=K(e,["title","titleId"]);return l.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 180",ref:t,"aria-labelledby":s},n),a?l.createElement("title",{id:s},a):null,c||(c=l.createElement("defs",null,l.createElement("style",null))),r||(r=l.createElement("g",{id:"Capa_2","data-name":"Capa 2"},l.createElement("g",{id:"Capa_1-2","data-name":"Capa 1"},l.createElement("path",{className:"cls-1",d:"M90,0a90,90,0,1,0,90,90A90,90,0,0,0,90,0Z"}),l.createElement("path",{className:"cls-2",d:"M83.4,153a83,83,0,0,1-14.78-1.32l-1.51-.27L66.67,150a5.21,5.21,0,0,1-.22-1.49v-36.8a.19.19,0,0,0-.18-.21H54.69a3.83,3.83,0,0,1-3.82-4L52,88.13a3.83,3.83,0,0,1,3.82-3.6H66.27a.19.19,0,0,0,.18-.21V76.08c0-14.67,4.4-27,13.08-36.67C89.35,28.47,101.81,27,112.71,27h2.62a3.83,3.83,0,0,1,3.8,4l-1.68,28.51a3.83,3.83,0,0,1-3.81,3.6h-2.53c-3.93,0-9.75,2.86-9.75,9V84.58l10.56.06a3.83,3.83,0,0,1,3.82,4l-1.12,19.15a3.83,3.83,0,0,1-3.82,3.6h-9.5l.06,37a5.32,5.32,0,0,1-.11,1.07l-.34,1.63-1.62.31A82.38,82.38,0,0,1,83.4,153Zm-12-5.91a79.42,79.42,0,0,0,24.91-.16V111.51a5,5,0,0,1,4.94-5.07h8.39l1-16.8H101.3a5,5,0,0,1-4.94-5.06V72.19c0-8.65,7.66-14,14.75-14h1.41L114.06,32h-1.35c-14.07,0-22.6,3.11-29.46,10.75-7.83,8.72-11.8,19.93-11.8,33.33v8.24a5.2,5.2,0,0,1-5.18,5.21H56.93l-1,16.92H66.27a5.2,5.2,0,0,1,5.18,5.21Z"})))))}var W,Y,$=l.forwardRef(U);a.p;function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ae(e,t){var a=e.title,c=e.titleId,r=te(e,["title","titleId"]);return l.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 180",ref:t,"aria-labelledby":c},r),a?l.createElement("title",{id:c},a):null,W||(W=l.createElement("defs",null,l.createElement("style",null,".cls-1{fill:#1c1b35;}.cls-2{fill:#fff;}"))),Y||(Y=l.createElement("g",{id:"Capa_2","data-name":"Capa 2"},l.createElement("g",{id:"Capa_1-2","data-name":"Capa 1"},l.createElement("path",{className:"cls-1",d:"M90,0a90,90,0,1,0,90,90A90,90,0,0,0,90,0Z"}),l.createElement("path",{className:"cls-2",d:"M124.32,39H55.68A16.7,16.7,0,0,0,39,55.68v68.64A16.7,16.7,0,0,0,55.68,141h68.64A16.7,16.7,0,0,0,141,124.32V55.68A16.7,16.7,0,0,0,124.32,39ZM136,124.32A11.69,11.69,0,0,1,124.32,136H55.68A11.69,11.69,0,0,1,44,124.32V55.68A11.69,11.69,0,0,1,55.68,44h68.64A11.69,11.69,0,0,1,136,55.68Z"}),l.createElement("path",{className:"cls-2",d:"M90,57a33,33,0,1,0,33,33A33,33,0,0,0,90,57Zm0,61a28,28,0,1,1,28-28A28,28,0,0,1,90,118Z"}),l.createElement("circle",{className:"cls-2",cx:122.5,cy:55.5,r:5.5})))))}var ce,re,le=l.forwardRef(ae);a.p;function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ie(e,t){var a=e.title,c=e.titleId,r=ne(e,["title","titleId"]);return l.createElement("svg",se({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 180",ref:t,"aria-labelledby":c},r),a?l.createElement("title",{id:c},a):null,ce||(ce=l.createElement("defs",null,l.createElement("style",null,".cls-1{fill:#1c1b35;}.cls-2{fill:#fff;}"))),re||(re=l.createElement("g",{id:"Capa_2","data-name":"Capa 2"},l.createElement("g",{id:"Capa_1-2","data-name":"Capa 1"},l.createElement("path",{className:"cls-1",d:"M90,0a90,90,0,1,0,90,90A90,90,0,0,0,90,0Z"}),l.createElement("path",{className:"cls-2",d:"M94.47,152.41a89.36,89.36,0,0,1-14.64-1.21c-2.63-.44-5.33-1-8-1.75A3,3,0,0,1,69.62,147,3,3,0,0,1,71,144a1.18,1.18,0,0,0,.49-1c0-.8,0-2.19,0-4,0-1.64,0-3.63,0-5.9a40.73,40.73,0,0,1-5.61.41c-16.13,0-20.93-11.06-21.53-12.61-3.19-7.57-7.55-9.68-7.73-9.77l-.32-.17c-1.5-1-5-3.23-4.13-6.24.79-2.64,4.13-3,6.08-3h.13c9.36.61,14.21,8.71,14.41,9,5.52,8.86,14.14,7.57,19.23,5.75a20.24,20.24,0,0,1,2.48-6.42c-15.82-2.43-34.54-9.9-34.54-39.39A30.49,30.49,0,0,1,47.82,49.8c-1.08-3.14-2.58-10.12.78-19.17a4.62,4.62,0,0,1,4.22-3c3-.08,9.78.75,20.71,7.39a1.89,1.89,0,0,0,1.37.19,83.84,83.84,0,0,1,38.16,0,1.84,1.84,0,0,0,1.37-.2c10.86-6.63,17.58-7.47,20.62-7.38a4.62,4.62,0,0,1,4.21,3c3.23,8.68,2,15.5.86,19.14a30.65,30.65,0,0,1,7.93,20.94c0,29.48-18.74,36.92-34.58,39.33a22.73,22.73,0,0,1,3.07,12.14c0,6.81-.05,12.72-.08,16.62,0,1.92,0,3.34,0,4.15A1.09,1.09,0,0,0,117,144a3,3,0,0,1-.48,5.59c-2.14.55-4.27,1-6.34,1.4A88.15,88.15,0,0,1,94.47,152.41Zm-18.41-7q2.32.52,4.59.9a84.32,84.32,0,0,0,28.66-.17c.88-.16,1.77-.34,2.67-.53a6.48,6.48,0,0,1-.54-2.61c0-.81,0-2.25,0-4.18,0-3.9.08-9.8.08-16.59,0-7.08-2.83-10.52-4.05-11.67a2.88,2.88,0,0,1,1.66-5c16.76-1.87,33.9-7.47,33.9-34.85a25.81,25.81,0,0,0-7.07-18,3.85,3.85,0,0,1-.8-3.92c.81-2.22,2.36-8.22-.53-16.15h0c-2.22,0-7.89.74-17.61,6.66a6.79,6.79,0,0,1-5.11.8,78.77,78.77,0,0,0-35.88,0,6.82,6.82,0,0,1-5.1-.79c-9.81-5.95-15.52-6.64-17.73-6.67-3,8.3-1.13,14.41-.48,16.09a3.79,3.79,0,0,1-.78,4,25.72,25.72,0,0,0-7.06,18c0,27.53,18.08,33.12,33.84,34.91a2.88,2.88,0,0,1,1.67,4.94,13.39,13.39,0,0,0-3.67,7.6,3.65,3.65,0,0,1-2.24,2.75c-5.16,2-18,5.32-26-7.55-.06-.11-3.33-5.47-9.23-6.5,1.68,1,6.37,4.2,9.69,12.09l.08.21c.17.49,4.5,12.54,24.42,8.49l3-.6,0,3c0,3.5,0,6.52.07,8.83,0,1.87,0,3.28,0,4.09A6.37,6.37,0,0,1,76.06,145.36Zm63.82-94.91Z"})))))}var oe,de,je=l.forwardRef(ie);a.p;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function pe(e,t){var a=e.title,c=e.titleId,r=me(e,["title","titleId"]);return l.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 180",ref:t,"aria-labelledby":c},r),a?l.createElement("title",{id:c},a):null,oe||(oe=l.createElement("defs",null,l.createElement("style",null,".cls-1{fill:#1c1b35;}.cls-2{fill:#fff;}"))),de||(de=l.createElement("g",{id:"Capa_2","data-name":"Capa 2"},l.createElement("g",{id:"Capa_1-2","data-name":"Capa 1"},l.createElement("path",{className:"cls-1",d:"M90,0a90,90,0,1,0,90,90A90,90,0,0,0,90,0Z"}),l.createElement("path",{className:"cls-2",d:"M142,48.5H38c-4.4,0-8,3.31-8,7.38v68.24c0,4.07,3.58,7.38,8,7.38H142c4.4,0,8-3.31,8-7.38V55.88C150,51.81,146.42,48.5,142,48.5Zm-1.9,4.37L95,82a12.35,12.35,0,0,1-13.62-.2L39.48,52.87Zm5.16,71.25a3.15,3.15,0,0,1-3.26,3H38a3.15,3.15,0,0,1-3.26-3V55.88a2.74,2.74,0,0,1,.12-.76L78.59,85.29a17.41,17.41,0,0,0,19.16.27L145.11,55a2.66,2.66,0,0,1,.17.9Z"})))))}var fe,he,Oe=l.forwardRef(pe);a.p;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function xe(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ve(e,t){var a=e.title,c=e.titleId,r=xe(e,["title","titleId"]);return l.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 180",ref:t,"aria-labelledby":c},r),a?l.createElement("title",{id:c},a):null,fe||(fe=l.createElement("defs",null,l.createElement("style",null,".cls-1{fill:#1c1b35;}.cls-2{fill:#fff;}"))),he||(he=l.createElement("g",{id:"Capa_2","data-name":"Capa 2"},l.createElement("g",{id:"Capa_1-2","data-name":"Capa 1"},l.createElement("circle",{className:"cls-1",cx:90,cy:90,r:90}),l.createElement("path",{className:"cls-2",d:"M93,25.5h0A63.57,63.57,0,0,0,29.5,89a62.86,62.86,0,0,0,11.34,36.17L32.07,151.3l27-8.64A63.49,63.49,0,1,0,93,25.5Zm0,122a58.09,58.09,0,0,1-32.18-9.66l-1-.67L40,143.53l6.44-19.2-.76-1A57.88,57.88,0,0,1,34.5,89,58.56,58.56,0,0,1,93,30.5h0a58.5,58.5,0,0,1,0,117Z"}),l.createElement("path",{className:"cls-2",d:"M126.21,101.11c-.29-.13-.6-.28-.95-.46-1-.5-9.88-4.91-11.65-5.52a5.53,5.53,0,0,0-6.86,2.08l-.65.92a54.69,54.69,0,0,1-3.63,4.78,1.39,1.39,0,0,1-1.42.07l-.55-.22A39.29,39.29,0,0,1,88.25,95.1a49,49,0,0,1-8.84-11c0-.09-.08-.16-.1-.2a5.72,5.72,0,0,1,.49-.62l.08-.1c.44-.54.87-1,1.33-1.49s.74-.78,1.11-1.21l.15-.17a11.22,11.22,0,0,0,2-2.93,5.67,5.67,0,0,0-.21-5.19c-.25-.53-2.1-5-3.45-8.3l-1.66-4c-1.45-3.47-3.06-4.16-5.69-4.28h-.17c-.56,0-1.19-.06-1.87-.06a10.52,10.52,0,0,0-7.55,2.76l-.15.15a20.55,20.55,0,0,0-6.39,15.46c0,7.64,4.51,14.93,7.2,18.59l.1.14.29.42c8.39,12.14,18.77,21.22,29.24,25.56,9.28,3.84,14.25,4.87,17.69,4.87a17.63,17.63,0,0,0,3.81-.43c5-1.08,11.28-4.82,13-9.61h0c1.19-3.38,1.88-8,.8-9.92A6.81,6.81,0,0,0,126.21,101.11Z"})))))}var ge,ye,we=l.forwardRef(ve);a.p;function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Ae(e,t){var a=e.title,c=e.titleId,r=Ee(e,["title","titleId"]);return l.createElement("svg",Ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 180",ref:t,"aria-labelledby":c},r),a?l.createElement("title",{id:c},a):null,ge||(ge=l.createElement("defs",null,l.createElement("style",null,".cls-1{fill:#1c1b35;}.cls-2{fill:#fff;}"))),ye||(ye=l.createElement("g",{id:"Capa_2","data-name":"Capa 2"},l.createElement("g",{id:"Capa_1-2","data-name":"Capa 1"},l.createElement("circle",{className:"cls-1",cx:90,cy:90,r:90}),l.createElement("path",{className:"cls-2",d:"M67.64,36.7V57a2.26,2.26,0,0,1-2.26,2.26H46.89A2.26,2.26,0,0,1,44.64,57V36.7a2.25,2.25,0,0,1,2.25-2.25H65.38A2.26,2.26,0,0,1,67.64,36.7Zm0,30.7v75.34A2.26,2.26,0,0,1,65.38,145H46.89a2.26,2.26,0,0,1-2.25-2.26V67.4a2.25,2.25,0,0,1,2.25-2.25H65.38A2.26,2.26,0,0,1,67.64,67.4Z"}),l.createElement("path",{className:"cls-2",d:"M135.48,145h-20a1.52,1.52,0,0,1-1.52-1.52V94.75c0-4.14-.48-6.78-1.42-7.93A4.39,4.39,0,0,0,109,85.09q-6.29,0-6.29,11.94v46.45a1.52,1.52,0,0,1-1.52,1.52h-20a1.52,1.52,0,0,1-1.52-1.52V66.67a1.52,1.52,0,0,1,1.52-1.52H99.56a1.52,1.52,0,0,1,1.52,1.52V70a1.52,1.52,0,0,0,2.8.82A16,16,0,0,1,118,63.5a17.36,17.36,0,0,1,10.81,3.34,18.38,18.38,0,0,1,6.32,8.63Q137,80.78,137,93.88v49.6A1.52,1.52,0,0,1,135.48,145Z"})))))}var ke=l.forwardRef(Ae),Ce=(a.p,function(){return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsxs)("div",{className:"footer-info",children:[Object(m.jsx)("p",{children:"Todos los derechos reservados por el autor."}),Object(m.jsx)("p",{children:"jesusrodrigo881@gmail.com"}),Object(m.jsx)("p",{children:"M\xe9xico, CDMX."})]}),Object(m.jsxs)("div",{className:"footer-contacto",children:[Object(m.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100008217585249",rel:"noreferrer",target:"_blank",children:Object(m.jsx)($,{className:"icon-footer"})}),Object(m.jsx)("a",{href:"https://www.instagram.com/redox_design",rel:"noreferrer",target:"_blank",children:Object(m.jsx)(le,{className:"icon-footer"})}),Object(m.jsx)("a",{href:"https://github.com/jesusrpd",rel:"noreferrer",target:"_blank",children:Object(m.jsx)(je,{className:"icon-footer"})}),Object(m.jsx)("a",{href:"mailto:jesusrodrigo881@gmail.com",rel:"noreferrer",target:"_blank",children:Object(m.jsx)(Oe,{className:"icon-footer"})}),Object(m.jsx)("a",{href:"https://api.whatsapp.com/send?phone=5537046181",rel:"noreferrer",target:"_blank",children:Object(m.jsx)(we,{className:"icon-footer"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/jesus-rodrigo-perez-delgado-44855b177/",rel:"noreferrer",target:"_blank",children:Object(m.jsx)(ke,{className:"icon-footer"})})]})]})}),Ie=function(){return Object(m.jsxs)(o.a,{children:[Object(m.jsx)(Q,{}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/sobremi",component:f}),Object(m.jsx)(d.a,{path:"/portafolio",component:C}),Object(m.jsx)(d.a,{path:"/habilidades",component:T}),Object(m.jsx)(d.a,{component:f})]}),Object(m.jsx)(Ce,{})]})};a(59);i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Ie,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.880cc786.chunk.js.map