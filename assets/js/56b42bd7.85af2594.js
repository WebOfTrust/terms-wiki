"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[2112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o=void 0,s={unversionedId:"Terms/glossary/blake3",id:"Terms/glossary/blake3",title:"blake3",description:"Definition",source:"@site/docs/Terms/glossary/blake3.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/blake3",permalink:"/WOT-terms/docs/Terms/glossary/blake3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"binding",permalink:"/WOT-terms/docs/Terms/glossary/binding"},next:{title:"blind-oobi",permalink:"/WOT-terms/docs/Terms/glossary/blind-oobi"}},l={},p=[{value:"Definition",id:"definition",level:2},{value:"Features and programming languages",id:"features-and-programming-languages",level:2},{value:"Fast, parallel and streaming",id:"fast-parallel-and-streaming",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"BLAKE3 is a relatively young (2020) cryptographic hash function based on Bao and BLAKE2."),(0,a.kt)("h2",{id:"features-and-programming-languages"},"Features and programming languages"),(0,a.kt)("p",null,"BLAKE3 is a single algorithm with many desirable features (parallelism, XOF, KDF, PRF and MAC), in contrast to BLAKE and BLAKE2, which are algorithm families with multiple variants. BLAKE3 has a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Binary_tree"},"binary tree")," structure, so it supports a practically unlimited degree of parallelism (both SIMD and multithreading) given long enough input. "),(0,a.kt)("p",null,"The official ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rust_(programming_language)"},"Rust")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/C_(programming_language)"},"C")," implementations",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)?wprov=srpw1_0#cite_note-BLAKE3-repo-24"},"[24]")," are ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multi-licensing"},"dual-licensed")," as public domain (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CC0"},"CC0"),") and the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Apache_License"},"Apache License"),"."),(0,a.kt)("h2",{id:"fast-parallel-and-streaming"},"Fast, parallel and streaming"),(0,a.kt)("p",null,"BLAKE3 is designed to be as fast as possible. It is consistently a few times faster than BLAKE2. The BLAKE3 compression function is closely based on that of BLAKE2s, with the biggest difference being that the number of rounds is reduced from 10 to 7, a change based on the assumption that current cryptography is too conservative. In addition to providing parallelism, the Merkle tree format also allows for verified streaming (on-the-fly verifying) and incremental updates."))}m.isMDXComponent=!0}}]);