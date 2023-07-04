"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[7316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>w});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,w=p["".concat(s,".").concat(u)]||p[u]||f[u]||a;return r?n.createElement(w,o(o({ref:t},l),{},{components:r})):n.createElement(w,o({ref:t},l))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o=void 0,d={unversionedId:"Terms/glossary/decentralized-identifier",id:"Terms/glossary/decentralized-identifier",title:"decentralized-identifier",description:"Definition",source:"@site/docs/Terms/glossary/decentralized-identifier.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/decentralized-identifier",permalink:"/WOT-terms/docs/Terms/glossary/decentralized-identifier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"data-anchor",permalink:"/WOT-terms/docs/Terms/glossary/data-anchor"},next:{title:"decentralized-identity",permalink:"/WOT-terms/docs/Terms/glossary/decentralized-identity"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Relation to federated identifiers",id:"relation-to-federated-identifiers",level:2},{value:"Technical presence",id:"technical-presence",level:2}],l={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"Decentralized identifiers")," (",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID"),"s) are a new type of identifier that enables verifiable, decentralized digital identity. A ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID")," refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID.\\\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"Source")," W3C.org."),(0,i.kt)("h2",{id:"relation-to-federated-identifiers"},"Relation to federated identifiers"),(0,i.kt)("p",null,"In contrast to typical, federated identifiers, ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DIDs")," have been designed so that they may be ",(0,i.kt)("strong",{parentName:"p"},"decoupled from centralized registries"),", identity providers, and certificate authorities. Specifically, while other parties might be used to help enable the discovery of information related to a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID"),", the design enables the controller of a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID")," to prove control over it without requiring permission from any other party.\\\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"Source")," W3C.org."),(0,i.kt)("h2",{id:"technical-presence"},"Technical presence"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DIDs")," are ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-uri"},"URIs")," that associate a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-subjects"},"DID subject")," with a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-documents"},"DID document")," allowing trustable interactions associated with that subject.\\\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"Source")," W3C.org."))}f.isMDXComponent=!0}}]);