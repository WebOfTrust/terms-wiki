"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[71245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=s,y=p["".concat(u,".").concat(m)]||p[m]||h[m]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const o={},a="threshold structure security",i={unversionedId:"glossary/threshold-structure-security",id:"glossary/threshold-structure-security",title:"threshold structure security",description:"Definition",source:"@site/docs/04_glossary/threshold-structure-security.md",sourceDirName:"04_glossary",slug:"/glossary/threshold-structure-security",permalink:"/WOT-terms/docs/glossary/threshold-structure-security",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"threshold signature scheme",permalink:"/WOT-terms/docs/glossary/threshold-signature-scheme"},next:{title:"top level section",permalink:"/WOT-terms/docs/glossary/top-level-section"}},u={},c=[{value:"Definition",id:"definition",level:2},{value:"Threshold Structure Security vs. TEE Security",id:"threshold-structure-security-vs-tee-security",level:3},{value:"KERI related",id:"keri-related",level:2},{value:"Considerations",id:"considerations",level:3}],l={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"threshold-structure-security"},"threshold structure security"),(0,s.kt)("h2",{id:"definition"},"Definition"),(0,s.kt)("p",null,"A threshold structure for security allows for weaker key management or execution environment infrastructure individually, but achieve greater overall security by multiplying the number of attack surfaces that an attacker must overcome to compromise a system.",(0,s.kt)("br",{parentName:"p"}),"\n","In other words, with threshold structures, overall security may be greater than the security of any of the individual parts. "),(0,s.kt)("p",null,"For example, in ",(0,s.kt)("a",{parentName:"p",href:"multi-factor-authentication"},"MFA")," the combination of two factors, something you have and something you know, may be much more secure than either of the factors by themselves."),(0,s.kt)("h3",{id:"threshold-structure-security-vs-tee-security"},"Threshold Structure Security vs. TEE Security"),(0,s.kt)("p",null,"Threshold structures may be employed in a complementary manner to trusted execution environments (",(0,s.kt)("a",{parentName:"p",href:"trusted-execution-environment"},"TEE"),") for security. The two types of security are complementary."),(0,s.kt)("h2",{id:"keri-related"},"KERI related"),(0,s.kt)("p",null,"This applies to KERI as well. The ",(0,s.kt)("a",{parentName:"p",href:"witness"},"witnesses")," and ",(0,s.kt)("a",{parentName:"p",href:"watcher"},"watchers")," independently multiply the attack surfaces of the promulgation and the confirmation networks such that each witness or watcher respectively may be relatively insecure but the system as a whole may be highly secure."),(0,s.kt)("h3",{id:"considerations"},"Considerations"),(0,s.kt)("p",null,"Numerous papers discuss how secure a distributed consensus pool may be. But when comparing ",(0,s.kt)("em",{parentName:"p"},"apples")," (key management and trusted execution environment (TEE) approach to security) to ",(0,s.kt)("em",{parentName:"p"},"oranges")," (distributed consensus approach to security) its hard to say that the security of a distributed consensus algorithm is necessarily less secure than the key management infra-structure root-of-trust of any of its nodes. Although as a general rule, in an apples to apples comparison, ",(0,s.kt)("em",{parentName:"p"},"more complex is less secure"),"."),(0,s.kt)("p",null,"Source: Universal Identifier Theory by Samuel Smith"))}h.isMDXComponent=!0}}]);