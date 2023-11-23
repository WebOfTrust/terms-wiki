"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[71245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,y=p["".concat(u,".").concat(h)]||p[h]||m[h]||s;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},66971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={},a=void 0,i={unversionedId:"glossary/threshold-structure-security",id:"glossary/threshold-structure-security",title:"threshold-structure-security",description:"Definition",source:"@site/docs/04_glossary/threshold-structure-security.md",sourceDirName:"04_glossary",slug:"/glossary/threshold-structure-security",permalink:"/WOT-terms/docs/glossary/threshold-structure-security",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"threshold-signature-scheme",permalink:"/WOT-terms/docs/glossary/threshold-signature-scheme"},next:{title:"top-level-section",permalink:"/WOT-terms/docs/glossary/top-level-section"}},u={},c=[{value:"Definition",id:"definition",level:2},{value:"Threshold Structure Security vs. TEE Security",id:"threshold-structure-security-vs-tee-security",level:3},{value:"KERI related",id:"keri-related",level:2},{value:"Considerations",id:"considerations",level:3}],l={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A threshold structure for security allows for weaker key management or execution environment infrastructure individually, but achieve greater overall security by multiplying the number of attack surfaces that an attacker must overcome to compromise a system.",(0,o.kt)("br",{parentName:"p"}),"\n","In other words, with threshold structures, overall security may be greater than the security of any of the individual parts. "),(0,o.kt)("p",null,"For example, in ",(0,o.kt)("a",{parentName:"p",href:"mutli-factor-authentication"},"MFA")," the combination of two factors, something you have and something you know, may be much more secure than either of the factors by themselves."),(0,o.kt)("h3",{id:"threshold-structure-security-vs-tee-security"},"Threshold Structure Security vs. TEE Security"),(0,o.kt)("p",null,"Threshold structures may be employed in a complementary manner to trusted execution environments (",(0,o.kt)("a",{parentName:"p",href:"trusted-execution-environment"},"TEE"),") for security. The two types of security are complementary."),(0,o.kt)("h2",{id:"keri-related"},"KERI related"),(0,o.kt)("p",null,"This applies to KERI as well. The ",(0,o.kt)("a",{parentName:"p",href:"witness"},"witnesses")," and ",(0,o.kt)("a",{parentName:"p",href:"watcher"},"watchers")," independently multiply the attack surfaces of the promulgation and the confirmation networks such that each witness or watcher respectively may be relatively insecure but the system as a whole may be highly secure."),(0,o.kt)("h3",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"Numerous papers discuss how secure a distributed consensus pool may be. But when comparing ",(0,o.kt)("em",{parentName:"p"},"apples")," (key management and trusted execution environment (TEE) approach to security) to ",(0,o.kt)("em",{parentName:"p"},"oranges")," (distributed consensus approach to security) its hard to say that the security of a distributed consensus algorithm is necessarily less secure than the key management infra-structure root-of-trust of any of its nodes. Although as a general rule, in an apples to apples comparison, ",(0,o.kt)("em",{parentName:"p"},"more complex is less secure"),"."),(0,o.kt)("p",null,"Source: Universal Identifier Theory by Samuel Smith"))}m.isMDXComponent=!0}}]);