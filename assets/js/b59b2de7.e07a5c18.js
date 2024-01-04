"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[29884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(l,".").concat(y)]||u[y]||f[y]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},76902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="sally",s={unversionedId:"glossary/sally",id:"glossary/sally",title:"sally",description:"Definition",source:"@site/docs/04_glossary/sally.md",sourceDirName:"04_glossary",slug:"/glossary/sally",permalink:"/WOT-terms/docs/glossary/sally",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"run off the crud",permalink:"/WOT-terms/docs/glossary/run-off-the-crud"},next:{title:"salt",permalink:"/WOT-terms/docs/glossary/salt"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Inner working",id:"inner-working",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sally"},"sally"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"is an implementation of a verification service and acting as a reporting server. It is purpose-built software for the vLEI ecosystem to allow participants in the vLEI ecosystem present credentials, so the ",(0,a.kt)("a",{parentName:"p",href:"GLEIF"},"GLEIF")," Reporting API can show what ",(0,a.kt)("a",{parentName:"p",href:"vLEI"},"vLEIs")," are; issued to ",(0,a.kt)("a",{parentName:"p",href:"legal-entity"},"Legal Entities"),"."),(0,a.kt)("h2",{id:"inner-working"},"Inner working"),(0,a.kt)("p",null,"The Sally ",(0,a.kt)("a",{parentName:"p",href:"vLEI"},"vLEI")," Audit Reporting Agent ",(0,a.kt)("em",{parentName:"p"},"receives presentations of credentials")," and notices of ",(0,a.kt)("a",{parentName:"p",href:"revocation-event"},"revocation"),", verifies the structure and cryptographic integrity of the credential or revocation event and performs a POST to the configured webhook ",(0,a.kt)("a",{parentName:"p",href:"URL"},"URL"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GLEIF-IT/sally"},"Source")))}f.isMDXComponent=!0}}]);