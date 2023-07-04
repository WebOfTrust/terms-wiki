"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[3011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(f,a(a({ref:t},l),{},{components:n})):i.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={},a=void 0,s={unversionedId:"Terms/glossary/inception-event",id:"Terms/glossary/inception-event",title:"inception-event",description:"Definition",source:"@site/docs/Terms/glossary/inception-event.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/inception-event",permalink:"/WOT-terms/docs/Terms/glossary/inception-event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"identity",permalink:"/WOT-terms/docs/Terms/glossary/identity"},next:{title:"inception",permalink:"/WOT-terms/docs/Terms/glossary/inception"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Inception Statement",id:"inception-statement",level:3},{value:"Components and self-contained",id:"components-and-self-contained",level:3}],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"An inception event is an establishment key event that represents the creation operation of an\nidentifier including its derivation and its initial set of controlling keys as well as other inception\nor configuration data for supporting infrastructure.\\\nThis is the information needed to derive an ",(0,r.kt)("a",{parentName:"p",href:"AID"},"AID")," and establish its initial key-state.\\\nThere may be one and only one inception event operation performed on an identifier.\\\nSource ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf"},"KERI Whitepaper"),"\\\nSource ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,r.kt)("h3",{id:"inception-statement"},"Inception Statement"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/WebOfTrust/keri/7fc96da6c277d3921fb1248ce9235400a4ff6af7/images/inception-statement.png",alt:"inception statement",border:"0",width:"400"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In brief: It's the signed version of a statement containing the inception event with some extra data."),"\\\n(",(0,r.kt)("em",{parentName:"p"},"@henkvancann"),")"),(0,r.kt)("h3",{id:"components-and-self-contained"},"Components and self-contained"),(0,r.kt)("p",null,"The inception data must include the public key, the identifier derivation from that public key, and may include other configuration data. The identifier derivation may be simply represented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"derivation code"),". A statement that includes the inception data with attached signature made with the private key comprises a cryptographic commitment to the derivation and configuration of the identifier that may be cryptographically verified by any entity that receives it. \\\nA KERI inception statement is completely self-contained. No additional infrastructure is needed or more importantly must be trusted in order to verify the derivation and initial configuration (inception) of the identifier. The initial trust basis for the identifier is simply the signed inception statement.\\\n(",(0,r.kt)("em",{parentName:"p"},"SamMSmith"),")"))}d.isMDXComponent=!0}}]);