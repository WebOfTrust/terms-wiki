"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[41097],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=o.createContext({}),l=function(t){var e=o.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},f="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),f=l(r),m=n,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?o.createElement(d,i(i({ref:e},c),{},{components:r})):o.createElement(d,i({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[f]="string"==typeof t?t:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69646:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={},i="root of trust",s={unversionedId:"glossary/root-of-trust",id:"glossary/root-of-trust",title:"root of trust",description:"Definition",source:"@site/docs/04_glossary/root-of-trust.md",sourceDirName:"04_glossary",slug:"/glossary/root-of-trust",permalink:"/WOT-terms/docs/glossary/root-of-trust",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"root autonomic identifier",permalink:"/WOT-terms/docs/glossary/root-autonomic-identifier"},next:{title:"rot",permalink:"/WOT-terms/docs/glossary/rot"}},u={},l=[{value:"Definition",id:"definition",level:2},{value:"Root-of-trust",id:"root-of-trust-1",level:4},{value:"KERI related",id:"keri-related",level:2}],c={toc:l},f="wrapper";function p(t){let{components:e,...r}=t;return(0,n.kt)(f,(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"root-of-trust"},"root of trust"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"A root-of-trust is some component of a system that is ",(0,n.kt)("a",{parentName:"p",href:"security"},"secure")," by design and its security characteristics may be inherently trusted or relied upon by other components of the system."),(0,n.kt)("h4",{id:"root-of-trust-1"},"Root-of-trust"),(0,n.kt)("p",null,"Replace human basis-of-trust with cryptographic root-of-trust. With verifiable digital signatures from asymmetric key cryptography we may not trust in \u201cwhat\u201d was said, but we may trust in \u201cwho\u201d said it.",(0,n.kt)("br",{parentName:"p"}),"\n","The root-of-trust is consistent attribution via verifiable integral ",(0,n.kt)("a",{parentName:"p",href:"non-repudiable"},"non-repudiable")," statements."),(0,n.kt)("p",null,"A root of trust is a foundational component or process in the identity system that is relied on by other components of the system and whose failure would compromise the integrity of the bindings. A root of trust might be primary or secondary depending on whether or not it is replaceable. Primary roots of trust are irreplaceable. Together, the roots of trust form the trust basis for the system."),(0,n.kt)("h2",{id:"keri-related"},"KERI related"),(0,n.kt)("p",null,"We distinguish a ",(0,n.kt)("a",{parentName:"p",href:"primary-root-of-trust"},"primary root-of-trust")," in a KEL and a ",(0,n.kt)("a",{parentName:"p",href:"secondary-root-of-trust"},"secondary root-of-trust"),", for example in a TEL or data on a blockchain."))}p.isMDXComponent=!0}}]);