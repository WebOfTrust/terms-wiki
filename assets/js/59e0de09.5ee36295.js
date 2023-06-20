"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o=void 0,s={unversionedId:"Terms/glossary/public-verifiable-credential-registry",id:"Terms/glossary/public-verifiable-credential-registry",title:"public-verifiable-credential-registry",description:"Definition",source:"@site/docs/Terms/glossary/public-verifiable-credential-registry.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/public-verifiable-credential-registry",permalink:"/WOT-terms/docs/Terms/glossary/public-verifiable-credential-registry",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"public-transaction-event-log",permalink:"/WOT-terms/docs/Terms/glossary/public-transaction-event-log"},next:{title:"qualified-vlei-issuer-vlei-credential-governance-framework",permalink:"/WOT-terms/docs/Terms/glossary/qualified-vlei-issuer-vlei-credential-governance-framework"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"ToIP definition",id:"toip-definition",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"is a form of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/toip/wiki/credential-registry"},"Verifiable Data Registry")," that tracks the issuance/revocation state of credentials issued by the controller of the ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/Terms/glossary/key-event-log"},"KEL"),"."),(0,i.kt)("p",null,"Two types of TELs will be used for this purpose. The first type of ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/Terms/glossary/transaction-event-log"},"TEL")," is the ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/Terms/glossary/management-transaction-event-log"},"management TEL")," and will signal the creation of the Registry and track the list of Registrars that will act as ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/Terms/glossary/backer"},"Backers")," for the individual TELs for each ",(0,i.kt)("a",{parentName:"p",href:"virtual-credential.md"},"VC"),". The second type of TEL is the ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/Terms/glossary/virtual-credential-transaction-event-log"},"VC TEL")," which will track the issued or revoked state of each VC and will contain a reference to it's corresponding management TEL."),(0,i.kt)("h2",{id:"toip-definition"},"ToIP definition"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/toip/wiki/credential-registry"},"Credential registry")),(0,i.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,i.kt)("p",null,"{TBW prio2}"))}f.isMDXComponent=!0}}]);