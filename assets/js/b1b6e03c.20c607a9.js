"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[4181],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||y[d]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81297:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const o={},i="bran",s={unversionedId:"glossary/bran",id:"glossary/bran",title:"bran",description:"Definition",source:"@site/docs/04_glossary/bran.md",sourceDirName:"04_glossary",slug:"/glossary/bran",permalink:"/WOT-terms/docs/glossary/bran",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"blinded revocation registry",permalink:"/WOT-terms/docs/glossary/blinded-revocation-registry"},next:{title:"branch",permalink:"/WOT-terms/docs/glossary/branch"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Usages",id:"usages",level:2},{value:"Sources",id:"sources",level:2}],u={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bran"},"bran"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"A cryptographic string used as a primary input, a seed, for creating key material for and ",(0,a.yg)("a",{parentName:"p",href:"autonomic-identifier"},"autonomic-identifier"),". "),(0,a.yg)("h2",{id:"usages"},"Usages"),(0,a.yg)("p",null,"This is used in Signify TS:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Controller")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/signify-ts/blob/516539f8bb68c8504e10221bf144a54b8c507dc3/src/keri/app/controller.ts#L104C77-L104C89"},"constructor argument")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"constructor(bran: string, tier: Tier, ridx: number = 0, state: any | null = null) {\n     this.bran = MtrDex.Salt_128 + 'A' + bran.substring(0, 21)  // qb64 salt for seed\n     this.stem = \"signify:controller\"\n     this.tier = tier\n     this.ridx = ridx\n\n     this.salter = new Salter({ qb64: this.bran, tier: this.tier })\n...\n")))),(0,a.yg)("h2",{id:"sources"},"Sources"),(0,a.yg)("p",null,"Quote, a Zoom chat message, from Dr. Sam Smith on 8/22/23 in the Tuesday morning KERI & ACDC ToIP specification discussion call:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"We already use seed and salt for something else so bran is related to seed so we used a term that was evocative of its use but not conflict with already used seed")))}y.isMDXComponent=!0}}]);