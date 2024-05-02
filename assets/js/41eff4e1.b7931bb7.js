"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[88759],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=p(r),g=a,d=y["".concat(c,".").concat(g)]||y[g]||u[g]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},44579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={},o="key stretching",s={unversionedId:"glossary/key-stretching",id:"glossary/key-stretching",title:"key stretching",description:"Definition",source:"@site/docs/04_glossary/key-stretching.md",sourceDirName:"04_glossary",slug:"/glossary/key-stretching",permalink:"/WOT-terms/docs/glossary/key-stretching",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"key state",permalink:"/WOT-terms/docs/glossary/key-state"},next:{title:"key transparency",permalink:"/WOT-terms/docs/glossary/key-transparency"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Humans are predictable",id:"humans-are-predictable",level:2}],l={toc:p},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"key-stretching"},"key stretching"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"In ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptography"},"cryptography"),", key stretching techniques are used to make a possibly weak ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_(cryptography)"},"key"),", typically a ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Password"},"password")," or ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Passphrase"},"passphrase"),", more secure against a ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Brute-force_attack"},"brute-force attack")," by increasing the resources (time and possibly space) it takes to test each possible key. "),(0,a.yg)("h2",{id:"humans-are-predictable"},"Humans are predictable"),(0,a.yg)("p",null,"Passwords or passphrases created by humans are often short or predictable enough to allow ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Password_cracking"},"password cracking"),", and key stretching is intended to make such attacks more difficult by complicating a basic step of trying a single password candidate. Key stretching also improves security in some real-world applications where the key length has been constrained, by mimicking a longer key length from the perspective of a brute-force attacker."),(0,a.yg)("p",null,"More on source ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_stretching"},"Wikipedia")))}u.isMDXComponent=!0}}]);