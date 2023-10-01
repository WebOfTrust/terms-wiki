"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[69172],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),h=a,d=u["".concat(p,".").concat(h)]||u[h]||f[h]||n;return o?r.createElement(d,i(i({ref:t},c),{},{components:o})):r.createElement(d,i({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},83253:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));const n={},i=void 0,s={unversionedId:"glossary/proof-of-authority",id:"glossary/proof-of-authority",title:"proof-of-authority",description:"Definition",source:"@site/docs/04_glossary/proof-of-authority.md",sourceDirName:"04_glossary",slug:"/glossary/proof-of-authority",permalink:"/WOT-terms/docs/glossary/proof-of-authority",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/proof-of-authority.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"promiscuous-mode",permalink:"/WOT-terms/docs/glossary/promiscuous-mode"},next:{title:"proof-of-authorship",permalink:"/WOT-terms/docs/glossary/proof-of-authorship"}},p={},l=[{value:"Definition",id:"definition",level:2},{value:"ACDC and proofs",id:"acdc-and-proofs",level:2},{value:"Example APC : book rights sold",id:"example-apc--book-rights-sold",level:3},{value:"Do not confuse blockchains or consensus algorithms",id:"do-not-confuse-blockchains-or-consensus-algorithms",level:2}],c={toc:l},u="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Proof that somebody or something has certain rights or permissions. It's about ",(0,a.kt)("em",{parentName:"p"},"data"),". Whereas ",(0,a.kt)("a",{parentName:"p",href:"proof-of-authorship"},"proof of authorship")," is about ",(0,a.kt)("em",{parentName:"p"},"data")," and its original creator.",(0,a.kt)("br",{parentName:"p"}),"\n","A proof-of-authority provides verifiable authorizations or permissions or rights or credentials."),(0,a.kt)("h2",{id:"acdc-and-proofs"},"ACDC and proofs"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Proof of authorship")," and ",(0,a.kt)("a",{parentName:"p",href:"proof-of-authority"},"proof of authority")," are integrated in ",(0,a.kt)("a",{parentName:"p",href:"authentic-chained-data-container"},"Authentic Chained Data Containers (ACDCs)"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ACDCs provide a verifiable chain of proof-of-",(0,a.kt)("inlineCode",{parentName:"li"},"authorship")," of the contained data"),(0,a.kt)("li",{parentName:"ul"},"A proof-of-",(0,a.kt)("inlineCode",{parentName:"li"},"authority")," may be used to provide verifiable authorizations or permissions or rights or credentials. A chained (treed) proof-of-authority enables delegation of authority and delegated authorizations.\nThese proofs of authorship and/or authority provide provenance of an ACDC itself and by association any data that is so conveyed.",(0,a.kt)("br",{parentName:"li"}),"(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/tswg-acdc-specification/blob/main/draft-ssmith-acdc.md#introduction"},"source"),")")),(0,a.kt)("h3",{id:"example-apc--book-rights-sold"},"Example APC : book rights sold"),(0,a.kt)("p",null,"The data contained in an ACDC is a book written by Terlalu Bonito; the ACDC also contains anchoring digest, signed by the author at publishing date. Terlalu has sold all rights to publish the book to Liz Smiley The ownership of the book matches the current ",(0,a.kt)("a",{parentName:"p",href:"controller"},"control")," over the book and its digital twin: the proof of authority by the chain of ACDCs."),(0,a.kt)("h2",{id:"do-not-confuse-blockchains-or-consensus-algorithms"},"Do not confuse blockchains or consensus algorithms"),(0,a.kt)("p",null,"Proof of authority (PoA) is also an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Algorithm"},"algorithm")," used with ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blockchain"},"blockchains")," that delivers comparatively fast transactions through a consensus mechanism based on identity as a stake.",(0,a.kt)("br",{parentName:"p"}),"\n","(",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_authority"},"Source"),")"),(0,a.kt)("p",null,"This is NOT what we mean in SSI, KERI and ACDC."))}f.isMDXComponent=!0}}]);