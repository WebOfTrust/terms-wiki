"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[66420],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,f=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i="bivalent",l={unversionedId:"glossary/bivalent",id:"glossary/bivalent",title:"bivalent",description:"Definition",source:"@site/docs/04_glossary/bivalent.md",sourceDirName:"04_glossary",slug:"/glossary/bivalent",permalink:"/WOT-terms/docs/glossary/bivalent",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bis",permalink:"/WOT-terms/docs/glossary/bis"},next:{title:"blake3",permalink:"/WOT-terms/docs/glossary/blake3"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Also see",id:"also-see",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bivalent"},"bivalent"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"A nested set of layered delegations in a ",(0,a.yg)("a",{parentName:"p",href:"delegation"},"delegation")," tree, wraps each layer with compromise recovery protection of the next higher layer. This maintains the security of the root layer for compromise recovery all the way out to the leaves in spite of the leaves using less secure key management methods.  "),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/weboftrust/WOT-terms/static/img/bivalent-key-management-infrastructure.png",alt:"bivalent-key-management-infrastructure"})),(0,a.yg)("p",null,"To elaborate, in a ",(0,a.yg)("a",{parentName:"p",href:"cooperative-delegation"},"cooperative delegation"),", the key generation and storage functions of the delegator and delegate, in terms of the controlling private keys, may be completely isolated from each other. This means that each may use its own independent key management infrastructure with no movement of private keys between the two infrastructures. We call this a ",(0,a.yg)("strong",{parentName:"p"},"bivalent")," key management infrastructure."),(0,a.yg)("p",null,"Source ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/IdentifierTheory_web.pdf"},"Universal Identifier Theory")," by Samuel Smith"),(0,a.yg)("h2",{id:"also-see"},"Also see"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"multi-valent"},"Multivalent"),"\n",(0,a.yg)("a",{parentName:"p",href:"univalent"},"Univalent")))}m.isMDXComponent=!0}}]);