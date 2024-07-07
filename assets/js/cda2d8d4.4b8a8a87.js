"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[5439],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||y[f]||s;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(58168),i=(r(96540),r(15680));const s={},o="liveness",a={unversionedId:"glossary/liveness",id:"glossary/liveness",title:"liveness",description:"Definition",source:"@site/docs/04_glossary/liveness.md",sourceDirName:"04_glossary",slug:"/glossary/liveness",permalink:"/WOT-terms/docs/glossary/liveness",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"listed identifier",permalink:"/WOT-terms/docs/glossary/listed-identifier"},next:{title:"loci of control",permalink:"/WOT-terms/docs/glossary/loci-of-control"}},l={},p=[{value:"Definition",id:"definition",level:2},{value:"Meaning",id:"meaning",level:3},{value:"More information",id:"more-information",level:3}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"liveness"},"liveness"),(0,i.yg)("h2",{id:"definition"},"Definition"),(0,i.yg)("p",null,'Liveness refers to a set of properties of concurrent systems, that require a system to make progress despite the fact that its concurrently executing components ("processes") may have to "take turns" in critical sections, parts of the program that cannot be simultaneously run by multiple processes.'),(0,i.yg)("h3",{id:"meaning"},"Meaning"),(0,i.yg)("p",null,"A ",(0,i.yg)("em",{parentName:"p"},"liveness"),' property in concurrent systems states that "something good will eventually occur".'),(0,i.yg)("p",null,"Liveness guarantees are important properties in operating systems and distributed systems.",(0,i.yg)("br",{parentName:"p"}),"\n","Unlike liveness properties, ",(0,i.yg)("a",{parentName:"p",href:"#safety-properties"},"safety properties")," can be violated by a finite execution of a distributed system. All properties can be expressed as the intersection of safety and liveness properties.",(0,i.yg)("br",{parentName:"p"}),"\n","| TBW  | prio 2 how is liveness important in distributed systems? how does KERI guarantee liveness}"),(0,i.yg)("h3",{id:"more-information"},"More information"),(0,i.yg)("p",null,"On ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Liveness"},"wikipedia")))}y.isMDXComponent=!0}}]);