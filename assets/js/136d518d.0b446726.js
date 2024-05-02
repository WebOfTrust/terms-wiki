"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[84147],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(r),f=o,y=g["".concat(l,".").concat(f)]||g[f]||p[f]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const i={},a="weight of weights",s={unversionedId:"glossary/weight-of-weights",id:"glossary/weight-of-weights",title:"weight of weights",description:"Definition",source:"@site/docs/04_glossary/weight-of-weights.md",sourceDirName:"04_glossary",slug:"/glossary/weight-of-weights",permalink:"/WOT-terms/docs/glossary/weight-of-weights",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"web of trust",permalink:"/WOT-terms/docs/glossary/web-of-trust"},next:{title:"well known witnesses",permalink:"/WOT-terms/docs/glossary/well-known-witnesses"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"CESR related",id:"cesr-related",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"weight-of-weights"},"weight of weights"),(0,o.yg)("h2",{id:"definition"},"Definition"),(0,o.yg)("p",null,"There are 2 levels in the multi-sign weighted thresholds of ",(0,o.yg)("a",{parentName:"p",href:"multisig"},"multi-signatures")," in ",(0,o.yg)("a",{parentName:"p",href:"KERI"},"KERI")," because the solution only needs to focus on ",(0,o.yg)("em",{parentName:"p"},"tightly cooperating teams"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"An individual using split keys over devices"),(0,o.yg)("li",{parentName:"ul"},"A team of teams")),(0,o.yg)("p",null,"All other use cases can be solved by other means in KERI (e.g. ",(0,o.yg)("a",{parentName:"p",href:"delegation"},"delegation"),")."),(0,o.yg)("h2",{id:"cesr-related"},"CESR related"),(0,o.yg)("p",null,"It also gives the advantage that the resulting ",(0,o.yg)("a",{parentName:"p",href:"CESR"},"CESR")," is more straightforward. It's hard to implement a recursive weight - of weights in CESR. And because of the alleged lack of use cases, KERI don't need to go beyond two levels."))}p.isMDXComponent=!0}}]);