"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[53070],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(n),f=a,d=y["".concat(c,".").concat(f)]||y[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={},o="key event",s={unversionedId:"glossary/key-event",id:"glossary/key-event",title:"key event",description:"Definition",source:"@site/docs/04_glossary/key-event.md",sourceDirName:"04_glossary",slug:"/glossary/key-event",permalink:"/WOT-terms/docs/glossary/key-event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"key event receipt",permalink:"/WOT-terms/docs/glossary/key-event-receipt"},next:{title:"key management",permalink:"/WOT-terms/docs/glossary/key-management"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"Loose definition in KERI",id:"loose-definition-in-keri",level:2},{value:"Data structure angle",id:"data-structure-angle",level:2}],u={toc:l},y="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"key-event"},"key event"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"Concretely, the serialized data structure of an entry in the key event log for an AID. Abstractly, the data structure itself. Key events come in different types and are used primarily to establish or change the authoritative set of keypairs and/or anchor other data to the authoritative set of keypairs at the point in the key event log actualized by a particular entry.",(0,a.yg)("br",{parentName:"p"}),"\n","Source ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,a.yg)("h2",{id:"loose-definition-in-keri"},"Loose definition in KERI"),(0,a.yg)("p",null,"Events happening to controlling keys of an identifier recorded in a Key Event Log (KEL)."),(0,a.yg)("h2",{id:"data-structure-angle"},"Data structure angle"),(0,a.yg)("p",null,"A ",(0,a.yg)("em",{parentName:"p"},"key event")," is data structure that consist of a header (Key Event header), a configuration section (Key Event Data spans Header and configuration) and signatures (Key event Message spans Data and signatures)",(0,a.yg)("br",{parentName:"p"}),"\n","(",(0,a.yg)("em",{parentName:"p"},"@henkvancann"),")"),(0,a.yg)("img",{src:"https://github.com/WebOfTrust/keri/blob/main/images/Key-Event.png",width:"500"}))}p.isMDXComponent=!0}}]);