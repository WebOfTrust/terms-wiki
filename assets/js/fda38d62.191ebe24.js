"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[75101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,b=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o="public transaction event log",l={unversionedId:"glossary/public-transaction-event-log",id:"glossary/public-transaction-event-log",title:"public transaction event log",description:"Definition",source:"@site/docs/04_glossary/public-transaction-event-log.md",sourceDirName:"04_glossary",slug:"/glossary/public-transaction-event-log",permalink:"/WOT-terms/docs/glossary/public-transaction-event-log",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"public key infrastructure",permalink:"/WOT-terms/docs/glossary/public-key-infrastructure"},next:{title:"public verifiable credential registry",permalink:"/WOT-terms/docs/glossary/public-verifiable-credential-registry"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Public Verifiable Credential Registry",id:"public-verifiable-credential-registry",level:3},{value:"Control authority vs. issuance and revocation of VCs",id:"control-authority-vs-issuance-and-revocation-of-vcs",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"public-transaction-event-log"},"public transaction event log"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"is a public hash-linked data structure of transactions that can be used to track state anchored to a KEL."),(0,i.kt)("h3",{id:"public-verifiable-credential-registry"},"Public Verifiable Credential Registry"),(0,i.kt)("p",null,"A Public Verifiable Credential Registry can be represented in several ",(0,i.kt)("a",{parentName:"p",href:"TEL"},"TEL"),"s to establish issuance or revocation state of a ",(0,i.kt)("a",{parentName:"p",href:"verifiable-credential"},"Verifiable Credential")," (VC). "),(0,i.kt)("h3",{id:"control-authority-vs-issuance-and-revocation-of-vcs"},"Control authority vs. issuance and revocation of VCs"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"KEL"},"KEL")," is used to establish control authority over the keys used to commit to the events of the TEL and sign the VC. The events of the TEL are used to establish the issuance or revocation state of the VCs issued by the controller of the identifier represented by the KEL. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-ptel/blob/main/draft-pfeairheller-ptel.md"},"Source: pfeairheller")))}f.isMDXComponent=!0}}]);