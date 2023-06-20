"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[3924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"Terms/glossary/escrow-state",id:"Terms/glossary/escrow-state",title:"escrow-state",description:"Definition",source:"@site/docs/Terms/glossary/escrow-state.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/escrow-state",permalink:"/WOT-terms/docs/Terms/glossary/escrow-state",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ephemeral",permalink:"/WOT-terms/docs/Terms/glossary/ephemeral"},next:{title:"escrow",permalink:"/WOT-terms/docs/Terms/glossary/escrow"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Inner-working and motivation",id:"inner-working-and-motivation",level:2},{value:"Beware",id:"beware",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"The current state of all the temporary storage locations (what events are waiting for what other information) that KERI protocol needs to  keep track of, due to its fully asynchronous nature."),(0,o.kt)("h2",{id:"inner-working-and-motivation"},"Inner-working and motivation"),(0,o.kt)("p",null,'Since the KERI protocol is fully asynchronous, there is no way to guarantee that events will arrive in order to be processed successfully.  This includes things like anchoring events for transaction event logs for credentials (the TEL even could arrive before the anchoring event) and signatures arriving on a multisig event.\\\nTo account for this asynchronous nature, implementations need to "escrow" events (store them temporarily) while waiting for other events or additional signatures to show up.   The current state of all the temporary storage locations (what events are waiting for what other information) is called the "escrow state".\\\nSource: Philip Feairheller'),(0,o.kt)("h2",{id:"beware"},"Beware"),(0,o.kt)("p",null,"An physical ",(0,o.kt)("a",{parentName:"p",href:"https://www.answers.com/Q/What_is_an_escrow_state"},"Escrow State")," that you might know from Real Estate transaction is not at all related to the one we define."))}f.isMDXComponent=!0}}]);