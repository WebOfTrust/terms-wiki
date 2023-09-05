"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[26732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?i.createElement(d,a(a({ref:t},u),{},{components:r})):i.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={},a=void 0,s={unversionedId:"glossary/autonomic-identifier",id:"glossary/autonomic-identifier",title:"autonomic-identifier",description:"Definition",source:"@site/docs/04_glossary/autonomic-identifier.md",sourceDirName:"04_glossary",slug:"/glossary/autonomic-identifier",permalink:"/WOT-terms/docs/glossary/autonomic-identifier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"autonomic-computing-systems",permalink:"/WOT-terms/docs/glossary/autonomic-computing-systems"},next:{title:"autonomic-identity-system",permalink:"/WOT-terms/docs/glossary/autonomic-identity-system"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"KERI related requirements",id:"keri-related-requirements",level:2},{value:"Autonomic Identifier more general",id:"autonomic-identifier-more-general",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"An identifier that is ",(0,n.kt)("a",{parentName:"p",href:"self-certifying-identifier"},"self-certifying")," and ",(0,n.kt)("a",{parentName:"p",href:"self-sovereign-identity"},"self-sovereign"),"."),(0,n.kt)("h2",{id:"keri-related-requirements"},"KERI related requirements"),(0,n.kt)("p",null,"A self-managing ",(0,n.kt)("a",{parentName:"p",href:"cryptonym"},"cryptonym"),"ous identifier that MUST be self-certifying (self-authenticating) and MUST be encoded in CESR as a ",(0,n.kt)("a",{parentName:"p",href:"qualified"},"qualified")," cryptographic primitive. An AID MAY exhibit other self-managing properties such as transferable control using key ",(0,n.kt)("a",{parentName:"p",href:"pre-rotation"},"pre-rotation")," which enables control over such an AID to persist in spite of key weakness or compromise due to exposure. ",(0,n.kt)("a",{parentName:"p",href:"authoritative"},"Authoritative")," control over the identifier persists in spite of the evolution of the key-state.\\\nSource Samuel M. Smith, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md"},"ietf-keri draft")),(0,n.kt)("h2",{id:"autonomic-identifier-more-general"},"Autonomic Identifier more general"),(0,n.kt)("p",null,"Autonomic Identifiers have been pretty well described in this piece as opposed to centralised (administrative) and blockchain-based (algorithmic) identifier systems: ",(0,n.kt)("strong",{parentName:"p"},"Architectural types of Identity Systems"),"; originally by Phil Windley in this ",(0,n.kt)("a",{parentName:"p",href:"https://www.windley.com/archives/2020/09/the_architecture_of_identity_systems.shtml"},"article"),". "),(0,n.kt)("p",null,"A summarizing comparison table might say more than a hundred words:"),(0,n.kt)("img",{src:"https://hackmd.io/_uploads/HyOi3r81j.png",width:"500",alt:"summarising the trust bases of administrative, algorithmic and autonomic identifier systems"}))}p.isMDXComponent=!0}}]);