"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[11110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"glossary/indexed-signature",id:"glossary/indexed-signature",title:"indexed-signature",description:"Definition",source:"@site/docs/04_glossary/indexed-signature.md",sourceDirName:"04_glossary",slug:"/glossary/indexed-signature",permalink:"/WOT-terms/docs/glossary/indexed-signature",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inconsistency",permalink:"/WOT-terms/docs/glossary/inconsistency"},next:{title:"indirect-mode",permalink:"/WOT-terms/docs/glossary/indirect-mode"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Example working",id:"example-working",level:2},{value:"Witness signatures indexed",id:"witness-signatures-indexed",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Also called ",(0,i.kt)("em",{parentName:"p"},"siger"),". An indexed signature attachment is used when signing anything with a multi-key autonomic identifier. The index is included as part of the attachment, so a verifier knows which of the multiple public keys was used to generate a specific signature.",(0,i.kt)("br",{parentName:"p"}),"\n","Source:Philip Feairheller"),(0,i.kt)("h2",{id:"example-working"},"Example working"),(0,i.kt)("p",null,"An indexed signature attachment would look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"03.<binary signature>\n")),(0,i.kt)("p",null,"All encoded as ",(0,i.kt)("a",{parentName:"p",href:"qualified"},"qualified")," ",(0,i.kt)("a",{parentName:"p",href:"base64"},"base64"),".  A verifier would then know to use the AID\u2019s public key located at index 3 in the list of public keys to verify the signature.",(0,i.kt)("br",{parentName:"p"}),"\n","Source:Philip Feairheller"),(0,i.kt)("h2",{id:"witness-signatures-indexed"},"Witness signatures indexed"),(0,i.kt)("p",null,"In addition, ",(0,i.kt)("a",{parentName:"p",href:"witness"},"witness")," signatures can also be attached as indexed signatures. So a verifier can determine which witness signed a particular ",(0,i.kt)("a",{parentName:"p",href:"receipt"},"receipt"),". This is useful when witnesses are receipting an event and only attaching their own signature. The ",(0,i.kt)("a",{parentName:"p",href:"controller"},"controller")," knows which witness signed the receipt by looking up the index in their list of witnesses for that event.",(0,i.kt)("br",{parentName:"p"}),"\n","Source:Philip Feairheller"))}d.isMDXComponent=!0}}]);