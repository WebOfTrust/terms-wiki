"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[10680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="naive conversion",s={unversionedId:"glossary/naive-conversion",id:"glossary/naive-conversion",title:"naive conversion",description:"Definition",source:"@site/docs/04_glossary/naive-conversion.md",sourceDirName:"04_glossary",slug:"/glossary/naive-conversion",permalink:"/WOT-terms/docs/glossary/naive-conversion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"multisig",permalink:"/WOT-terms/docs/glossary/multisig"},next:{title:"namespace",permalink:"/WOT-terms/docs/glossary/namespace"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"CESR related",id:"cesr-related",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"naive-conversion"},"naive conversion"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Non-CESR Base64 conversion. How people are used to using the Base64 encode and decode.  Without ",(0,a.kt)("a",{parentName:"p",href:"pre-pad"},"pre-pad"),"ding etc all the stuff CESR does to ensure aligns on 24 bit boundaries so ",(0,a.kt)("a",{parentName:"p",href:"CESR"},"CESR")," never uses the '=' pad character. But naive ",(0,a.kt)("a",{parentName:"p",href:"base64"},"Base64")," will pad if the length is not 24 bit aligned.",(0,a.kt)("br",{parentName:"p"}),"\n","Source: Samuel Smith in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-cesr/issues/34"},"issue 34")),(0,a.kt)("p",null,"Naive conversion is a text to binary conversion or vice versa that doesn't anticipate on either ",(0,a.kt)("a",{parentName:"p",href:"composability"},"composability")," and / or on the ",(0,a.kt)("a",{parentName:"p",href:"concatenation"},"concatenation")," capability of the result of such an operation."),(0,a.kt)("h2",{id:"cesr-related"},"CESR related"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#conversions"},"IETF draft CESR")," there's much attention for naive ",(0,a.kt)("a",{parentName:"p",href:"base64"},"Base64")," conversions, because it helps explaining the necessity of stable code characters and padding in CESR to achieve:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"self-framing"},"self-framing")),(0,a.kt)("li",{parentName:"ul"},"round-robin ",(0,a.kt)("a",{parentName:"li",href:"composability"},"composability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"concatenation"},"concatenation")," options"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pipelining"},"pipelined")," streaming")))}f.isMDXComponent=!0}}]);