"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[40063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,g=u["".concat(s,".").concat(y)]||u[y]||f[y]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},39320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="transaction event log",l={unversionedId:"glossary/transaction-event-log",id:"glossary/transaction-event-log",title:"transaction event log",description:"Definition",source:"@site/docs/04_glossary/transaction-event-log.md",sourceDirName:"04_glossary",slug:"/glossary/transaction-event-log",permalink:"/WOT-terms/docs/glossary/transaction-event-log",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trans contextual value",permalink:"/WOT-terms/docs/glossary/trans-contextual-value"},next:{title:"transfer off ledger",permalink:"/WOT-terms/docs/glossary/transfer-off-ledger"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Put differently",id:"put-differently",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transaction-event-log"},"transaction event log"),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"The set of transactions that determine registry state form a log called a Transaction Event Log (TEL). The TEL provides a cryptographic proof of registry state by reference to the corresponding controlling ",(0,o.kt)("a",{parentName:"p",href:"key-event-log"},"KEL"),". Any validator may therefore cryptographically verify the ",(0,o.kt)("a",{parentName:"p",href:"authoritative"},"authoritative state")," of the ",(0,o.kt)("a",{parentName:"p",href:"registry"},"registry"),"."),(0,o.kt)("h3",{id:"put-differently"},"Put differently"),(0,o.kt)("p",null,"An externally anchored transactions log via cryptographic commitments in a KEL."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/WebOfTrust/keri/blob/main/images/TEL-and-KEL.png",alt:null})))}f.isMDXComponent=!0}}]);