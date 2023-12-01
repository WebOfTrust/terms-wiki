"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[90459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"glossary/CSPRNG",id:"glossary/CSPRNG",title:"CSPRNG",description:"Definition",source:"@site/docs/04_glossary/CSPRNG.md",sourceDirName:"04_glossary",slug:"/glossary/CSPRNG",permalink:"/WOT-terms/docs/glossary/CSPRNG",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CRUD",permalink:"/WOT-terms/docs/glossary/CRUD"},next:{title:"CT",permalink:"/WOT-terms/docs/glossary/CT"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"See also",id:"see-also",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,'means "Cryptographically Secure Pseudorandom Number Generator" which means that a sequence of numbers (bits, bytes...) that is produced from an algorithm which is deterministic (the sequence is generated from some unknown internal state), hence pseudorandom, is also cryptographically secure, or not. '),(0,o.kt)("p",null,"It is cryptographically secure if nobody can ",(0,o.kt)("em",{parentName:"p"},"reliably distinguish")," the output from true randomness, even if the PRNG algorithm is perfectly known (but not its internal state). A non-cryptographically secure PRNG would fool basic statistical tests but can be distinguished from true randomness by an intelligent attacker.",(0,o.kt)("br",{parentName:"p"}),"\n","(Source: ",(0,o.kt)("a",{parentName:"p",href:"https://crypto.stackexchange.com/questions/12436/what-is-the-difference-between-csprng-and-prng"},"https://crypto.stackexchange.com/questions/12436/what-is-the-difference-between-csprng-and-prng"),")"),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"PRNG"},"PRNG")))}f.isMDXComponent=!0}}]);