"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[84003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29235:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=e=>{let{termsData:t}=e;const r={};t.forEach((e=>{const t=e.term.charAt(0).toUpperCase();r[t]||(r[t]=e.anchor)}));const a=Array.from({length:26},((e,t)=>String.fromCharCode(65+t)));return n.createElement("div",{id:"glossary_content-container"},n.createElement("div",{id:"alphabet-index",className:"fs-4"},"[ ",a.map(((e,t)=>n.createElement(n.Fragment,{key:e},n.createElement("a",{href:`#${r[e]}`},e),t<a.length-1&&n.createElement("span",null," | "))))," ]"),n.createElement("dl",{id:"glossary_content"},t.map((e=>n.createElement(n.Fragment,{key:e.term},n.createElement("dt",null,n.createElement("a",{id:e.anchor},e.term)),n.createElement("dd",{dangerouslySetInnerHTML:{__html:e.definition}}))))))}},22116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(29235);const s={},l="External ToIP did:webs Glossary",i={unversionedId:"glossaries-external/glossary-toipdidweb",id:"glossaries-external/glossary-toipdidweb",title:"External ToIP did:webs Glossary",description:"w",source:"@site/docs/glossaries-external/glossary-toipdidweb.mdx",sourceDirName:"glossaries-external",slug:"/glossaries-external/glossary-toipdidweb",permalink:"/WOT-terms/docs/glossaries-external/glossary-toipdidweb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External ToIP Glossary",permalink:"/WOT-terms/docs/glossaries-external/glossary-toip"},next:{title:"External W3C DID Glossary",permalink:"/WOT-terms/docs/glossaries-external/glossary-w3cdid"}},c={},p=r(54212),d=[],u={toc:d},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external-toip-didwebs-glossary"},"External ToIP did:webs Glossary"),(0,a.kt)(o.Z,{termsData:p,mdxType:"CreateExternalGlossary"}),"w")}y.isMDXComponent=!0}}]);