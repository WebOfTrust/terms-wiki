"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[2837],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||y[f]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(58168),r=(n(96540),n(15680));const a={},i="revocation",s={unversionedId:"glossary/revocation",id:"glossary/revocation",title:"revocation",description:"Definition",source:"@site/docs/04_glossary/revocation.md",sourceDirName:"04_glossary",slug:"/glossary/revocation",permalink:"/WOT-terms/docs/glossary/revocation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"revocation event",permalink:"/WOT-terms/docs/glossary/revocation-event"},next:{title:"ricardian contract",permalink:"/WOT-terms/docs/glossary/ricardian-contract"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"In identity",id:"in-identity",level:2},{value:"How KERI avoids confusion",id:"how-keri-avoids-confusion",level:2},{value:"Also see",id:"also-see",level:2}],p={toc:l},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"revocation"},"revocation"),(0,r.yg)("h2",{id:"definition"},"Definition"),(0,r.yg)("p",null,"Revocation is the act of ",(0,r.yg)("a",{parentName:"p",href:"https://en.wiktionary.org/wiki/recall"},"recall")," or ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Annulment"},"annulment"),". It is the cancelling of an act, the recalling of a grant or privilege, or the making ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Void_(law)"},"void")," of some ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deed"},"deed")," previously existing.",(0,r.yg)("br",{parentName:"p"}),"\n","More on source ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Revocation"},"Wikipedia")),(0,r.yg)("h2",{id:"in-identity"},"In identity"),(0,r.yg)("p",null,"The term revocation has two completely different meanings in the identity space. In key management one may speak of revoking keys. With statement issuance, authorization issuance, or credential issuance, one may speak of revoking an authorization statement, a token, or a credential.",(0,r.yg)("br",{parentName:"p"}),"\n","This becomes confusing when the act of revoking keys also implicitly revokes the ",(0,r.yg)("a",{parentName:"p",href:"authorization"},"authorization")," of statements signed with those keys. Any statement may be effectively authorized by virtue of the attached signature(s) made with a set of ",(0,r.yg)("a",{parentName:"p",href:"authoritative"},"authoritative")," keys. The statement itself may be authorizing some other function in the system. So, the verification of the signature on an authorizing statement is essential to determining the authoritativeness of the associated authorized function. To clarify when an authorization is conveyed via a signed statement, the signature acts to authorize the statement."),(0,r.yg)("h2",{id:"how-keri-avoids-confusion"},"How KERI avoids confusion"),(0,r.yg)("p",null,"KERI terminology usually avoids confusion between ",(0,r.yg)("a",{parentName:"p",href:"rotation"},"rotation")," and revocation because a key rotation operation is the equivalent of a key revocation operation ",(0,r.yg)("strong",{parentName:"p"},"followed by a key replacement operation"),". So one operation, rotate, is implemented instead of two operations (revoke and replace).",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"A bare key revocation is indicated by replacement with a null key.")," So only one operation is needed, that is, rotate where a special case of rotation is to rotate to a null key."),(0,r.yg)("h2",{id:"also-see"},"Also see"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"revocation-event"},"Revocation event")))}y.isMDXComponent=!0}}]);