"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[16696],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71507:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const o={},s="cold start stream parsing",i={unversionedId:"glossary/cold-start-stream-parsing",id:"glossary/cold-start-stream-parsing",title:"cold start stream parsing",description:"Definition",source:"@site/docs/04_glossary/cold-start-stream-parsing.md",sourceDirName:"04_glossary",slug:"/glossary/cold-start-stream-parsing",permalink:"/WOT-terms/docs/glossary/cold-start-stream-parsing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"code table",permalink:"/WOT-terms/docs/glossary/code-table"},next:{title:"collective signature",permalink:"/WOT-terms/docs/glossary/collective-signature"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"re-synchronization",id:"re-synchronization",level:2},{value:"CESR related",id:"cesr-related",level:2}],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cold-start-stream-parsing"},"cold start stream parsing"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"After a reboot (or cold start), a stream processor looks for framing information to know how to parse groups of elements in the stream. "),(0,a.yg)("p",null,"If that framing information is ambiguous then the parser may become confused and require yet another cold start. While processing a given stream a parser may become confused especially if a portion of the stream is malformed in some way. This usually requires flushing the stream and forcing a cold start to resynchronize the parser to subsequent stream elements. "),(0,a.yg)("h2",{id:"re-synchronization"},"re-synchronization"),(0,a.yg)("p",null,"Better than flushing the stream and forcing a cold start is a re-synchronization mechanism that does not require flushing the in-transit buffers but merely skipping to the next well-defined stream element boundary in order to execute a cold start.",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("em",{parentName:"p"},"See an example")," in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#cold-start-stream-parsing-problem"},"source")),(0,a.yg)("h2",{id:"cesr-related"},"CESR related"),(0,a.yg)("p",null,"Special CESR count codes support re-synchronization at each boundary between interleaved CESR and other serializations like JSON, CBOR, or MGPK."))}m.isMDXComponent=!0}}]);