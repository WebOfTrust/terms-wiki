"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[91861],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(r),h=o,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6465:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="How to's",s={unversionedId:"test/howtos",id:"test/howtos",title:"How to's",description:"* How to retrieve the KEL from an agent//weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20221009211442000",source:"@site/docs/test/howtos.md",sourceDirName:"test",slug:"/test/howtos",permalink:"/WOT-terms/docs/test/howtos",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KERI Specifications",permalink:"/WOT-terms/docs/test/gleif-legal/2022-12-06_verifiable-LEI-(vLEI)-Ecosystem-Governance-Framework-Technical-Requirements-Part1-KERI-Infrastructure-Prep-1.0-Publication_v0.6_work"},next:{title:"Kerific Bookmarklet and Chrome Extension",permalink:"/WOT-terms/docs/test/kerific"}},l={},p=[],c={toc:p},m="wrapper";function u(t){let{components:e,...r}=t;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-tos"},"How to's"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to retrieve the KEL from an agent: ",(0,o.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20221009211442000"},"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20221009211442000"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to get an agent running with a single witness: ",(0,o.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20221012192001000"},"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20221012192001000"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to use KLI from the built Docker container: ",(0,o.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20221017015702000"},"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20221017015702000"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to encrypt and decrypt a DIDComm message using a non transferable AID: ",(0,o.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20230116140509000"},"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20230116140509000"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to ",(0,o.kt)("inlineCode",{parentName:"p"},"kli vc verify")," for issuing and verifying credentials: ",(0,o.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20230202194649000"},"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20230202194649000"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to use kli command to do multisig delegation where there are two delegators and two delegates: ",(0,o.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20230604021325000"},"https://weboftrust.github.io/WOT-terms/slack/html/keripy.html#anchor-20230604021325000")))))}u.isMDXComponent=!0}}]);