"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[19974],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(58168),n=(r(96540),r(15680));const i={},a="moobi",s={unversionedId:"glossary/moobi",id:"glossary/moobi",title:"moobi",description:"Definition",source:"@site/docs/04_glossary/moobi.md",sourceDirName:"04_glossary",slug:"/glossary/moobi",permalink:"/WOT-terms/docs/glossary/moobi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"messagepack",permalink:"/WOT-terms/docs/glossary/messagepack"},next:{title:"most compact",permalink:"/WOT-terms/docs/glossary/most-compact"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Limitation",id:"limitation",level:2},{value:"Also see",id:"also-see",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"moobi"},"moobi"),(0,n.yg)("h2",{id:"definition"},"Definition"),(0,n.yg)("p",null,"Multi ",(0,n.yg)("a",{parentName:"p",href:"OOBI"},"OOBI")," would allow to share a bunch of different end-points (oobis) all at once. A way for a single store to share multiple endpoints for that store. "),(0,n.yg)("h2",{id:"limitation"},"Limitation"),(0,n.yg)("p",null,"Those oobis would still need a way to authorize the endpoint provider, the endpoint role, for each of the different things. A multi-sig becomes a messy collaboration effort, especially when you take into account signing at the edge. You would need an authorization record for each end-point. And then pass this to all the members and ask them to collaborate."),(0,n.yg)("h2",{id:"also-see"},"Also see"),(0,n.yg)("p",null,"Source: Philip Feairheller ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keri/discussions/39"},"KERI-dev meeting")," July 27 2023"))}m.isMDXComponent=!0}}]);