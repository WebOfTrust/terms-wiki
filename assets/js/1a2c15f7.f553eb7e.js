"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[63063],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21830:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(58168),o=(t(96540),t(15680));const a={},i="cesr proof signatures",s={unversionedId:"glossary/cesr-proof-signatures",id:"glossary/cesr-proof-signatures",title:"cesr proof signatures",description:"Definition",source:"@site/docs/04_glossary/cesr-proof-signatures.md",sourceDirName:"04_glossary",slug:"/glossary/cesr-proof-signatures",permalink:"/WOT-terms/docs/glossary/cesr-proof-signatures",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"certificate transparency",permalink:"/WOT-terms/docs/glossary/certificate-transparency"},next:{title:"cesride",permalink:"/WOT-terms/docs/glossary/cesride"}},c={},p=[{value:"Definition",id:"definition",level:2}],l={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cesr-proof-signatures"},"cesr proof signatures"),(0,o.yg)("h2",{id:"definition"},"Definition"),(0,o.yg)("p",null,"CESR Proof Signatures are an extension to the Composable Event Streaming Representation ","[CESR]"," that provide transposable cryptographic signature attachments on self-addressing data (SAD) ","[SAID]",". Any SAD, such as an Authentic Chained Data Container (ACDC) Verifiable Credential ","[ACDC]"," for example, may be signed with a CESR Proof Signature and streamed along with any other CESR content. In addition, a signed SAD can be embedded inside another SAD and the CESR proof signature attachment can be transposed across envelope boundaries and streamed without losing any cryptographic integrity.",(0,o.yg)("br",{parentName:"p"}),"\n","(Philip Feairheller, IETF-cesr-proof)"),(0,o.yg)("img",{src:"https://hackmd.io/_uploads/ByxcPBQT5.png",width:"600",height:"350"}))}f.isMDXComponent=!0}}]);