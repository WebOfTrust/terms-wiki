"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[31356],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83592:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={},i=void 0,p={unversionedId:"glossary/group-framing-code",id:"glossary/group-framing-code",title:"group-framing-code",description:"Definition",source:"@site/docs/04_glossary/group-framing-code.md",sourceDirName:"04_glossary",slug:"/glossary/group-framing-code",permalink:"/WOT-terms/docs/glossary/group-framing-code",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"group-code",permalink:"/WOT-terms/docs/glossary/group-code"},next:{title:"habery",permalink:"/WOT-terms/docs/glossary/habery"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Composability property",id:"composability-property",level:2}],l={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"special framing codes can be specified to support groups of ",(0,o.kt)("a",{parentName:"p",href:"primitives"},"primitives")," in ",(0,o.kt)("a",{parentName:"p",href:"composable-event-streaming-representation"},"CESR"),". Grouping enables ",(0,o.kt)("a",{parentName:"p",href:"pipelining"},"pipelining"),". Other suitable terms for these special framing codes are ",(0,o.kt)("em",{parentName:"p"},"group codes")," or ",(0,o.kt)("em",{parentName:"p"},"count codes")," for short. These are suitable terms because these framing codes can be used to count characters, primitives in a group, or groups of primitives in a larger group when parsing and off-loading a stream of CESR primitives.\\\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#count-group-or-framing-codes"},"Source")),(0,o.kt)("h2",{id:"composability-property"},"Composability property"),(0,o.kt)("p",null,"One of the primary advantages of composable encoding is that we can use special framing code to support the above mentioned grouping."))}m.isMDXComponent=!0}}]);