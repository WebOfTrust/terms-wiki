"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[2296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"glossary/Home",id:"glossary/Home",title:"Home",description:"Welcome to the WebofTrust terms wiki!",source:"@site/docs/04_glossary/Home.md",sourceDirName:"04_glossary",slug:"/glossary/Home",permalink:"/WOT-terms/docs/glossary/Home",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/Home.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HSM",permalink:"/WOT-terms/docs/glossary/HSM"},next:{title:"I-O",permalink:"/WOT-terms/docs/glossary/I-O"}},l={},c=[{value:"Welcome to the WebofTrust terms wiki!",id:"welcome-to-the-weboftrust-terms-wiki",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"welcome-to-the-weboftrust-terms-wiki"},"Welcome to the WebofTrust terms wiki!"),(0,a.kt)("p",null,"The wiki also serves the glossary terms for the underlying and related techniques to ACDC, like KERI, CESR and OOBI."),(0,a.kt)("p",null,"There are a few ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.trustoverip.org/display/HOME/Terms+Wikis"},"practical rules")," from the originator ToIP to get these wiki terms through their equivalent ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms/actions/workflows/content-fetch-and-deploy-update-glossary.yml"},"github actions script"),", please:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"beware all new wiki items lead to new .md files"),(0,a.kt)("li",{parentName:"ul"},"introduce lowercase names with spaces (they will convert into lower case names with dashes between the words)"),(0,a.kt)("li",{parentName:"ul"},"start with ## Definition header; ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/WebOfTrust/WOT-terms/wiki/composable-event-streaming-representation"},"example")),(0,a.kt)("li",{parentName:"ul"},'start with uppercase abbreviations with only the "## See" header; ',(0,a.kt)("a",{parentName:"li",href:"https://github.com/WebOfTrust/WOT-terms/wiki/CESR"},"example")),(0,a.kt)("li",{parentName:"ul"},"don't delete items (i.e. .md files) but make clear they are depreciated and / or link to the new concept / term"),(0,a.kt)("li",{parentName:"ul"},"don't change the name of an item single handed, for it might change the concept / meaning for other people and create dead links for those who link to the term. Please open an issue or a PR to discuss first. "),(0,a.kt)("li",{parentName:"ul"},"any other immediate changes welcome, the revisions are available for us to be able to (partially) revert if something unwanted or unexpected happens.")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"weboftrust")," wiki glossary is currently our input tool for our KERI Suite glossary. However, we regularly scrape the wiki into ",(0,a.kt)("a",{parentName:"p",href:"kerisse.org"},"KERISSE"),", we add features and metadata, we connect relevant matching terms from related glossaries and finally we index it for the KERI Suite Search Engine (KERISSE)."),(0,a.kt)("p",null,"Have fun CRU-ing!\nCreate Read Update"))}m.isMDXComponent=!0}}]);