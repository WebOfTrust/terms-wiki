"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[64393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={},a=void 0,p={unversionedId:"glossary/coroutines",id:"glossary/coroutines",title:"coroutines",description:"Definition",source:"@site/docs/04_glossary/coroutines.md",sourceDirName:"04_glossary",slug:"/glossary/coroutines",permalink:"/WOT-terms/docs/glossary/coroutines",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cooperative-delegation",permalink:"/WOT-terms/docs/glossary/cooperative-delegation"},next:{title:"correlation",permalink:"/WOT-terms/docs/glossary/correlation"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"What is a coroutine exactly?",id:"what-is-a-coroutine-exactly",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Computer programs that can be suspended and resumed at will."),(0,i.kt)("h2",{id:"what-is-a-coroutine-exactly"},"What is a coroutine exactly?"),(0,i.kt)("p",null,"Coroutines are ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Computer_program"},"computer program")," components that generalize ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Subroutine"},"subroutines")," for ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Non-preemptive_multitasking"},"non-preemptive multitasking"),", by allowing execution to be suspended and resumed. Coroutines are well-suited for implementing familiar program components such as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cooperative_multitasking"},"cooperative tasks"),", ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Exception_handling"},"exceptions"),", ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Event_loop"},"event loops"),", ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Iterator"},"iterators"),", ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lazy_evaluation"},"infinite lists")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pipeline_(software)"},"pipes"),".",(0,i.kt)("br",{parentName:"p"}),"\n","More on source ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Coroutine"},"Wikipedia")))}m.isMDXComponent=!0}}]);