"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[56633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="byzantine fault tolerance",s={unversionedId:"glossary/byzantine-fault-tolerance",id:"glossary/byzantine-fault-tolerance",title:"byzantine fault tolerance",description:"Definition",source:"@site/docs/04_glossary/byzantine-fault-tolerance.md",sourceDirName:"04_glossary",slug:"/glossary/byzantine-fault-tolerance",permalink:"/WOT-terms/docs/glossary/byzantine-fault-tolerance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"byzantine agreement",permalink:"/WOT-terms/docs/glossary/byzantine-agreement"},next:{title:"certificate transparency",permalink:"/WOT-terms/docs/glossary/certificate-transparency"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Consensus two third",id:"consensus-two-third",level:2},{value:"More on Wikipedia",id:"more-on-wikipedia",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"byzantine-fault-tolerance"},"byzantine fault tolerance"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A Byzantine fault (also interactive consistency, source congruency, error avalanche, ",(0,a.kt)("a",{parentName:"p",href:"byzantine-agreement"},"Byzantine agreement"),' problem, Byzantine generals problem, and Byzantine failure) is a condition of a computer system, particularly distributed computing systems, where components may fail and there is imperfect information on whether a component has failed. The term takes its name from an allegory, the "Byzantine Generals Problem", developed to describe a situation in which, in order to avoid catastrophic failure of the system, the system\'s actors must agree on a concerted strategy, but some of these actors are unreliable.\nIn a Byzantine fault, a component such as a server can inconsistently appear both failed and functioning to failure-detection systems, presenting different symptoms to different observers. It is difficult for the other components to declare it failed and shut it out of the network, because they need to first reach a consensus regarding which component has failed in the first place.\nByzantine fault tolerance (BFT) is the dependability of a fault-tolerant computer system to such conditions.'),(0,a.kt)("h2",{id:"consensus-two-third"},"Consensus two third"),(0,a.kt)("p",null,"A system has Byzantine Fault Tolerance (BFT) when it can keep functioning correctly as long as two-thirds of the network agree or reaches consensus. BFT is a property or characteristic of a system that can resist up to one-third of the nodes failing or acting maliciously."),(0,a.kt)("p",null,"The pBFT model primarily focuses on providing a practical Byzantine state machine replication that tolerates Byzantine faults (malicious nodes) through an assumption that there are independent node failures and manipulated messages propagated by specific, independent nodes.\nThe algorithm is designed to work in asynchronous systems and is optimized to be high-performance with an impressive overhead runtime and only a slight increase in latency. More on wikipedia about"),(0,a.kt)("h2",{id:"more-on-wikipedia"},"More on Wikipedia"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Byzantine_fault"},"Byzantine Fault")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.bitcoinwiki.org/wiki/PBFT"},"pBFT")," : An article that explains practical BFT. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blockonomi.com/practical-byzantine-fault-tolerance/"},"Here"),"'s a complete beginners guide.")))}f.isMDXComponent=!0}}]);