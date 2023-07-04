"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[3708],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87261:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"HowTo"},i="Pull in markdown documents",l={type:"mdx",permalink:"/WOT-terms/howtos/hwt_pull-in-markdown-documents",source:"@site/src/pages/howtos/hwt_pull-in-markdown-documents.md",title:"HowTo",description:"Ietf draft are standardized write-ups for experts. Although these drafts contains loads of valuable information and learning resources, the layout and accessibility is cumbersome for training and education purposes.",frontMatter:{title:"HowTo"}},s=[{value:"How to find a document",id:"how-to-find-a-document",level:2},{value:"Save the doc as a &#39;raw&#39; .md file",id:"save-the-doc-as-a-raw-md-file",level:2},{value:"Where?",id:"where",level:3},{value:"Next?",id:"next",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pull-in-markdown-documents"},"Pull in markdown documents"),(0,o.kt)("p",null,"Ietf draft are standardized write-ups for experts. Although these drafts contains loads of valuable information and learning resources, the layout and accessibility is cumbersome for training and education purposes.\nTherefore we pull in the original documents in markdown format in our Jekyll site and semi-automatically reorganize the data using our Terms and Glossaries."),(0,o.kt)("h2",{id:"how-to-find-a-document"},"How to find a document"),(0,o.kt)("p",null,"Search the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main"},"WebofTrust Github repos")," for an interesting resource."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/ByvtKgBls.png",alt:null})),(0,o.kt)("h2",{id:"save-the-doc-as-a-raw-md-file"},"Save the doc as a 'raw' .md file"),(0,o.kt)("h3",{id:"where"},"Where?"),(0,o.kt)("p",null,"In your local copy of the repository WebofTrust ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms"},"WOT-terms")," It MUST be in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the root directory of the Jekyll site."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"gh-pages")," branch")),(0,o.kt)("h2",{id:"next"},"Next?"),(0,o.kt)("p",null,"We are going to process this document with shell scripts and Jekyll to produce a copy of the documents in a static Jekyll website that has sidebars, filter options, automatic links in text to the glossary etc."))}p.isMDXComponent=!0}}]);