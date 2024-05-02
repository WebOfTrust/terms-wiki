"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[72017],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},46627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={},i="judge",s={unversionedId:"glossary/judge",id:"glossary/judge",title:"judge",description:"Definition",source:"@site/docs/04_glossary/judge.md",sourceDirName:"04_glossary",slug:"/glossary/judge",permalink:"/WOT-terms/docs/glossary/judge",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"javascript object signing and encryption",permalink:"/WOT-terms/docs/glossary/javascript-object-signing-and-encryption"},next:{title:"juror",permalink:"/WOT-terms/docs/glossary/juror"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"Task and result",id:"task-and-result",level:2},{value:"Where judges run",id:"where-judges-run",level:2},{value:"Competitor and common interest",id:"competitor-and-common-interest",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"judge"},"judge"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"A judge is an entity or component that examines the entries of one or more ",(0,a.yg)("a",{parentName:"p",href:"key-event-receipt-log"},"KERLs")," and DELs of a given identifier to validate that the event history is from a non-",(0,a.yg)("a",{parentName:"p",href:"duplicity"},"duplicitous")," controller and has been witnessed by a sufficient number of non-duplicitous ",(0,a.yg)("a",{parentName:"p",href:"witness"},"witnesses")," such that it may be trusted or conversely not-trusted by a ",(0,a.yg)("a",{parentName:"p",href:"validator"},"validator"),"."),(0,a.yg)("h2",{id:"task-and-result"},"Task and result"),(0,a.yg)("p",null,"A judge determines current ","[authoritative]"," key set for identifier from the ",(0,a.yg)("a",{parentName:"p",href:"key-event-receipt-log"},"key event receipt logs")," from a set of witnesses. Judges transmit the 'judgement' of watchers concerning duplicity."),(0,a.yg)("h2",{id:"where-judges-run"},"Where judges run"),(0,a.yg)("p",null,'Example AT&T vs T-Mobile. The only "fault" that is apparent, is an attack on the KEL. And that can only occur via key compromise. So a successful multi-threshold attack causing ',(0,a.yg)("a",{parentName:"p",href:"duplicity"},"duplicity")," is the only thing ",(0,a.yg)("a",{parentName:"p",href:"watcher"},"watchers")," are looking for. "),(0,a.yg)("h2",{id:"competitor-and-common-interest"},"Competitor and common interest"),(0,a.yg)("p",null,"So even competitors will want to share across the entire ecosystem. Similar to certificate transparency, all competitors in the internet hosting space share the information with each other because it is in their best interest to eliminate fraud / duplicity.",(0,a.yg)("br",{parentName:"p"}),"\n","Paraphrased by @henkvancann based on ",(0,a.yg)("a",{parentName:"p",href:"https://hackmd.io/-soUScAqQEaSw5MJ71899w?view#2022-09-06"},"source Samuel Smith / Phil Feairheller")))}d.isMDXComponent=!0}}]);