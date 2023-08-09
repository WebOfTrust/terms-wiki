"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[92934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={sidebar:"HowWeDidSidebar"},a="Pull changes from toip to terms",s={unversionedId:"How-we-did/pull-changes-from-toip-to-terms",id:"How-we-did/pull-changes-from-toip-to-terms",title:"Pull changes from toip to terms",description:"Preposition",source:"@site/docs/How-we-did/pull-changes-from-toip-to-terms.md",sourceDirName:"How-we-did",slug:"/How-we-did/pull-changes-from-toip-to-terms",permalink:"/WOT-terms/docs/How-we-did/pull-changes-from-toip-to-terms",draft:!1,tags:[],version:"current",frontMatter:{sidebar:"HowWeDidSidebar"},sidebar:"tutorialSidebar",previous:{title:"Get Markdown files from WebofTrust wiki glossary terms",permalink:"/WOT-terms/docs/How-we-did/markdown-from-WOT-wiki"},next:{title:"Pull in markdown documents",permalink:"/WOT-terms/docs/How-we-did/pull-in-markdown-documents"}},l={},p=[{value:"Preposition",id:"preposition",level:2},{value:"Problem",id:"problem",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pull-changes-from-toip-to-terms"},"Pull changes from toip to terms"),(0,o.kt)("h2",{id:"preposition"},"Preposition"),(0,o.kt)("p",null,"Docusaurus build (",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build"),") needs to pass thruogh valid markdown."),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"We don't control the source of the glossary ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/acdc/wiki"},"here"),"."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," doesn't pass without errors, we change the source and then run this on the commandline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"cd ~/apps/acdc.wiki\ngit pull\ncd ../WOT-terms/docs/terms/glossary\ncp ~/apps/acdc.wiki/* .\ngit status\nGit add .\nGit commit --amend\n")))}d.isMDXComponent=!0}}]);