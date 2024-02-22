"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[38180],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73145:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={},o="issuer",s={unversionedId:"glossary/issuer",id:"glossary/issuer",title:"issuer",description:"Definition",source:"@site/docs/04_glossary/issuer.md",sourceDirName:"04_glossary",slug:"/glossary/issuer",permalink:"/WOT-terms/docs/glossary/issuer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"issuee",permalink:"/WOT-terms/docs/glossary/issuee"},next:{title:"ixn",permalink:"/WOT-terms/docs/glossary/ixn"}},c={},u=[{value:"Definition",id:"definition",level:2},{value:"Rule",id:"rule",level:2}],l={toc:u},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"issuer"},"issuer"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"authentic-chained-data-container"},"ACDC")," is issued by the Issuer. The Issuer identifier (",(0,a.kt)("a",{parentName:"p",href:"autonomic-identifier"},"AID"),") appears in the top level of the ACDC."),(0,a.kt)("h2",{id:"rule"},"Rule"),(0,a.kt)("p",null,"Each ACDC MUST have an ",(0,a.kt)("a",{parentName:"p",href:"issuer"},"Issuer")," and MAY have an ",(0,a.kt)("a",{parentName:"p",href:"issuee"},"Issuee"),". The set of ",(0,a.kt)("a",{parentName:"p",href:"ACDC"},"ACDC"),"s so disclosed in a presentation exchange MUST be chained. This set of chained ACDCs define a ",(0,a.kt)("a",{parentName:"p",href:"directed-acyclic-graph"},"directed acyclic graph")," that MUST have at least one vertex and MAY have zero or more edges pointing to other vertices."))}f.isMDXComponent=!0}}]);