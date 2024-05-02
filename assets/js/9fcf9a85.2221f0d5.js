"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[82242],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||y[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const i={},a="rotation event",s={unversionedId:"glossary/rotation-event",id:"glossary/rotation-event",title:"rotation event",description:"Definition",source:"@site/docs/04_glossary/rotation-event.md",sourceDirName:"04_glossary",slug:"/glossary/rotation-event",permalink:"/WOT-terms/docs/glossary/rotation-event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rotation authority",permalink:"/WOT-terms/docs/glossary/rotation-authority"},next:{title:"rotation",permalink:"/WOT-terms/docs/glossary/rotation"}},p={},c=[{value:"Definition",id:"definition",level:2},{value:"The inner working",id:"the-inner-working",level:2}],l={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"rotation-event"},"rotation event"),(0,o.yg)("h2",{id:"definition"},"Definition"),(0,o.yg)("p",null,"An ",(0,o.yg)("a",{parentName:"p",href:"establishment-event"},"establishment event")," representing a transfer of root control authority of an identifier from the current set of controlling keys to new set committed to in the prior establishment event (inception or rotation) as the pre-rotated key pair set.",(0,o.yg)("br",{parentName:"p"}),"\n","Source ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf"},"KERI Whitepaper Section 7.21 page 46")),(0,o.yg)("p",null,"This event provides the information needed to change the key-state including a change to the set of ",(0,o.yg)("a",{parentName:"p",href:"authoritative"},"authoritative")," keypairs for an ",(0,o.yg)("a",{parentName:"p",href:"autonomic-identifier"},"AID"),".",(0,o.yg)("br",{parentName:"p"}),"\n","Source ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,o.yg)("h2",{id:"the-inner-working"},"The inner working"),(0,o.yg)("p",null,"We start with a ",(0,o.yg)("a",{parentName:"p",href:"root-of-trust"},"root-of-trust")," in public/private key-pair that is bound to an identifier derived from the key-pair. From this key-pair and then we can rotate controlling authority to other key-pairs with signed rotation messages (events). These rotation messages are witnessed by witnesses designated in the inception event and any subsequent rotation events. Upon completion of successful witnessing a receipt message is sent back to the identity controller performing the rotation and the controller keeps track of these receipts in a ",(0,o.yg)("a",{parentName:"p",href:"key-event-receipt-log"},"key event receipt log"),".",(0,o.yg)("br",{parentName:"p"}),"\n",'The infrastructure needed to keep track of these key events including inception events, rotation events, and non-establishment events is key event receipt infrastructure, thus the acronym "KERI": ',(0,o.yg)("a",{parentName:"p",href:"key-event-receipt-infrastructure"},"Key Event Receipt Infrastructure"),".\\",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("em",{parentName:"p"},"(SamASmith)")))}y.isMDXComponent=!0}}]);