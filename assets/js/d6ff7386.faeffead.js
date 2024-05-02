"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[65789],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>h});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=p(r),u=i,h=g["".concat(c,".").concat(u)]||g[u]||d[u]||n;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(58168),i=(r(96540),r(15680));const n={},o="digest",s={unversionedId:"glossary/digest",id:"glossary/digest",title:"digest",description:"Definition",source:"@site/docs/04_glossary/digest.md",sourceDirName:"04_glossary",slug:"/glossary/digest",permalink:"/WOT-terms/docs/glossary/digest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"diger",permalink:"/WOT-terms/docs/glossary/diger"},next:{title:"digital signature",permalink:"/WOT-terms/docs/glossary/digital-signature"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Digest and ACDCs",id:"digest-and-acdcs",level:2}],l={toc:p},g="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,a.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"digest"},"digest"),(0,i.yg)("h2",{id:"definition"},"Definition"),(0,i.yg)("p",null,"verifiable cryptographic commitment. It's a collision resistant hash of content."),(0,i.yg)("p",null,"From Wikipedia (",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function"},"Source"),"):"),(0,i.yg)("p",null,"A ",(0,i.yg)("strong",{parentName:"p"},"digest")," is a cryptographic hash function (CHF) is a mathematical ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Algorithm"},"algorithm")," that ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Map_(mathematics)"},"maps"),' data of an arbitrary size (often called the "message") to a ',(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bit_array"},"bit array"),' of a fixed size (the "',(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hash_value"},"hash value"),'", "hash", or "message digest"). It is a ',(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/One-way_function"},"one-way function"),", that is, a function for which it is practically infeasible to invert or reverse the computation.",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Message_digest#cite_note-MrThfd-1"},"[1]")),(0,i.yg)("h2",{id:"digest-and-acdcs"},"Digest and ACDCs"),(0,i.yg)("p",null,"An important property of high-strength cryptographic digests is that a verifiable cryptographic commitment (such as a digital signature) to the digest of some data is equivalent to a commitment to the data itself. ",(0,i.yg)("a",{parentName:"p",href:"authentic-chained-data-container"},"Authentic Chained Data Containers (ACDCs)")," leverage this property to enable compact chains of ACDCs that anchor data via digests. The data contained in an ACDC may therefore be merely its equivalent anchoring digest. The anchored data is thereby equivalently authenticated or authorized by the chain of ACDCs."))}d.isMDXComponent=!0}}]);