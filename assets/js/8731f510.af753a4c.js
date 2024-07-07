"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[85476],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(r),g=n,u=y["".concat(s,".").concat(g)]||y[g]||d[g]||i;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},31443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const i={},o="wallet",l={unversionedId:"glossary/wallet",id:"glossary/wallet",title:"wallet",description:"Definition",source:"@site/docs/04_glossary/wallet.md",sourceDirName:"04_glossary",slug:"/glossary/wallet",permalink:"/WOT-terms/docs/glossary/wallet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vrt",permalink:"/WOT-terms/docs/glossary/vrt"},next:{title:"watcher",permalink:"/WOT-terms/docs/glossary/watcher"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"KERI and ACDC context",id:"keri-and-acdc-context",level:2},{value:"Functions",id:"functions",level:2},{value:"KERI and ACDC related",id:"keri-and-acdc-related",level:2}],p={toc:c},y="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"wallet"},"wallet"),(0,n.yg)("h2",{id:"definition"},"Definition"),(0,n.yg)("p",null,"A crypto wallet is a device, physical medium, program or a service which stores the ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"public and/or private keys")," for ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptocurrency"},"cryptocurrency")," transactions and digital identifiers.",(0,n.yg)("br",{parentName:"p"}),"\n","Paraphrased by @henkvancann from source ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptocurrency_wallet"},"Wikipedia")),(0,n.yg)("h2",{id:"keri-and-acdc-context"},"KERI and ACDC context"),(0,n.yg)("p",null,"A wallet is a collection of data stores; made up of a ",(0,n.yg)("a",{parentName:"p",href:"keystore"},"keystore"),", local and remote key event log database and credential database. So it is a superset of a keystore.",(0,n.yg)("br",{parentName:"p"}),"\n","Source: Philip Feairheller."),(0,n.yg)("p",null,"In a broader context a wallet can be seen as software and sometimes hardware that serves as a ",(0,n.yg)("a",{parentName:"p",href:"keystore"},"keystore")," and functionality. Keys can be private keys and public keys, and the wallet could contain hashes and pointers. Functionality can be signing, invoices (receive), send, virtual credentials, delegation, etc. This functionality is the ",(0,n.yg)("a",{parentName:"p",href:"agency"},(0,n.yg)("inlineCode",{parentName:"a"},"agency"))," part of a wallet.",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://www.thalesgroup.com/en/markets/digital-identity-and-security/government/identity/digital-identity-services/digital-id-wallet"},"More about digital ID Wallets"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://cryptocurrencyfacts.com/what-is-a-cryptocurrency-wallet/"},"More about cryto Wallets"),"."),(0,n.yg)("h2",{id:"functions"},"Functions"),(0,n.yg)("p",null,"In addition to this basic function of ",(0,n.yg)("strong",{parentName:"p"},"storing the keys"),", it's also used to storing ",(0,n.yg)("a",{parentName:"p",href:"verifiable-credential"},"verifiable credentials (VCs)"),". A cryptocurrency wallet more often also offers the functionality of ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Encrypting"},"encrypting"))," and/or ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Digital_signature"},"signing"))," information.\\",(0,n.yg)("br",{parentName:"p"}),"\n","Signing can for example result in executing a ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Smart_contract"},"smart contract"),", a cryptocurrency transaction, ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_signature#Authentication"},"identification")," or ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Electronic_signature"},"legally signing")," a 'document'.",(0,n.yg)("br",{parentName:"p"}),"\n","More on source ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptocurrency_wallet"},"Wikipedia")),(0,n.yg)("h2",{id:"keri-and-acdc-related"},"KERI and ACDC related"),(0,n.yg)("p",null,"A 'wallet' in KERI would typically refer to the basic function of ",(0,n.yg)("strong",{parentName:"p"},"storing the keys"),", a wallet in ACDC is more focussed on storing ",(0,n.yg)("a",{parentName:"p",href:"verifiable-credential"},"verifiable credentials (VCs)"),".\\",(0,n.yg)("br",{parentName:"p"}),"\n","KERI explicitly distinguishes ",(0,n.yg)("a",{parentName:"p",href:"keystore"},"keystore")," and ",(0,n.yg)("a",{parentName:"p",href:"wallet"},"wallet"),"; the latter being a superset of the former. ",(0,n.yg)("a",{parentName:"p",href:"keep"},"Keep")," is KERI's and ACDC's user interface with Keripy agent API as a back end."))}d.isMDXComponent=!0}}]);