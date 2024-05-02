"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[11655],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>d});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=o,d=u["".concat(c,".").concat(y)]||u[y]||f[y]||i;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},23516:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(58168),o=(t(96540),t(15680));const i={},a="keria",l={unversionedId:"glossary/keria",id:"glossary/keria",title:"keria",description:"Definition",source:"@site/docs/04_glossary/keria.md",sourceDirName:"04_glossary",slug:"/glossary/keria",permalink:"/WOT-terms/docs/glossary/keria",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"keri suite",permalink:"/WOT-terms/docs/glossary/keri-suite"},next:{title:"keride",permalink:"/WOT-terms/docs/glossary/keride"}},c={},s=[{value:"Definition",id:"definition",level:2}],p={toc:s},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"keria"},"keria"),(0,o.yg)("h2",{id:"definition"},"Definition"),(0,o.yg)("p",null,"KERI Agent in the cloud. The KERIA service will expose 3 separate HTTP endpoints on 3 separate network interfaces."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Boot Interface - Exposes one endpoint for Agent Worker initialization."),(0,o.yg)("li",{parentName:"ol"},"Admin Interface - The REST API for command and control operations from the Signify Client."),(0,o.yg)("li",{parentName:"ol"},"KERI Protocol Interface - CESR over HTTP endpoint for KERI protocol interactions with the rest of the world.")),(0,o.yg)("p",null,"More at ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keria/blob/main/docs/protocol.md"},"Source Github repo")))}f.isMDXComponent=!0}}]);