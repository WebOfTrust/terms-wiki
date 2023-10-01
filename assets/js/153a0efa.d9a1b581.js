"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[11110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={},s=void 0,o={unversionedId:"glossary/indexed-signature",id:"glossary/indexed-signature",title:"indexed-signature",description:"Definition",source:"@site/docs/04_glossary/indexed-signature.md",sourceDirName:"04_glossary",slug:"/glossary/indexed-signature",permalink:"/WOT-terms/docs/glossary/indexed-signature",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/indexed-signature.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inconsistency",permalink:"/WOT-terms/docs/glossary/inconsistency"},next:{title:"input-output",permalink:"/WOT-terms/docs/glossary/input-output"}},l={},u=[{value:"Definition",id:"definition",level:2},{value:"Example working",id:"example-working",level:2},{value:"Witness signatures indexed",id:"witness-signatures-indexed",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Also called ",(0,i.kt)("em",{parentName:"p"},"siger"),". An indexed signature attachment is used when signing anything with a multi-key autonomic identifier. The index is included as part of the attachment, so a verifier knows which of the multiple public keys was used to generate a specific signature.",(0,i.kt)("br",{parentName:"p"}),"\n","Source:Philip Feairheller"),(0,i.kt)("h2",{id:"example-working"},"Example working"),(0,i.kt)("p",null,"An indexed signature attachment would look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"03.<binary signature>\n")),(0,i.kt)("p",null,"All encoded as ",(0,i.kt)("a",{parentName:"p",href:"qualified"},"qualified")," ",(0,i.kt)("a",{parentName:"p",href:"base64"},"base64"),".  A verifier would then know to use the AID\u2019s public key located at index 3 in the list of public keys to verify the signature.",(0,i.kt)("br",{parentName:"p"}),"\n","Source:Philip Feairheller"),(0,i.kt)("h2",{id:"witness-signatures-indexed"},"Witness signatures indexed"),(0,i.kt)("p",null,"In addition, ",(0,i.kt)("a",{parentName:"p",href:"witness"},"witness")," signatures can also be attached as indexed signatures. So a verifier can determine which witness signed a particular ",(0,i.kt)("a",{parentName:"p",href:"receipt"},"receipt"),". This is useful when witnesses are receipting an event and only attaching their own signature. The ",(0,i.kt)("a",{parentName:"p",href:"controller"},"controller")," knows which witness signed the receipt by looking up the index in their list of witnesses for that event.",(0,i.kt)("br",{parentName:"p"}),"\n","Source:Philip Feairheller"))}d.isMDXComponent=!0}}]);