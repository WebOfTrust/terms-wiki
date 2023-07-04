"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[1064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"Terms/glossary/pre-pad",id:"Terms/glossary/pre-pad",title:"pre-pad",description:"Definition",source:"@site/docs/Terms/glossary/pre-pad.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/pre-pad",permalink:"/WOT-terms/docs/Terms/glossary/pre-pad",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"post-pad",permalink:"/WOT-terms/docs/Terms/glossary/post-pad"},next:{title:"pre-rotation",permalink:"/WOT-terms/docs/Terms/glossary/pre-rotation"}},p={},l=[{value:"Definition",id:"definition",level:2},{value:"CESR related",id:"cesr-related",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"the action and / or result of prepending a string with ",(0,a.kt)("em",{parentName:"p"},"leading")," pad characters to align to a certain length in bits or bytes."),(0,a.kt)("h2",{id:"cesr-related"},"CESR related"),(0,a.kt)("p",null,"There are two ways to provide the required alignment on 24-bit boundaries to satisfy the ",(0,a.kt)("a",{parentName:"p",href:"composability"},"composability")," property. One is ",(0,a.kt)("a",{parentName:"p",href:"post-pad"},"post-pad"),", with trailing pad characters ",(0,a.kt)("inlineCode",{parentName:"p"},"="),", the text domain encoding to ensure that the text domain primitive has a total size (length) that is an integer multiple of 4. This is what ",(0,a.kt)("a",{parentName:"p",href:"naive-conversion"},"naive Base64 encoding")," does.\\\nThe other way is to ",(0,a.kt)("em",{parentName:"p"},"pre-pad")," leading bytes of zeros to the raw binary value before conversion to Base64 to ensure the total size of the raw binary value with pre-pad bytes is an integer multiple of 3 bytes. This ensures that the size in characters of the Base64 conversion of the pre-padded raw binary is an integer multiple of 4 characters.\\\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#code-characters-and-lead-bytes"},"Source IEFT CESR draft")))}u.isMDXComponent=!0}}]);