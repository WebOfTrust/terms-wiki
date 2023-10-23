"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[91728],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},92618:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={},a=void 0,l={unversionedId:"glossary/loci-of-control",id:"glossary/loci-of-control",title:"loci-of-control",description:"Definition",source:"@site/docs/04_glossary/loci-of-control.md",sourceDirName:"04_glossary",slug:"/glossary/loci-of-control",permalink:"/WOT-terms/docs/glossary/loci-of-control",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/loci-of-control.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"liveness",permalink:"/WOT-terms/docs/glossary/liveness"},next:{title:"locked-state",permalink:"/WOT-terms/docs/glossary/locked-state"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"In SSI domain",id:"in-ssi-domain",level:2},{value:"KERI development",id:"keri-development",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"Locus of control is the degree to which people believe that they, as opposed to external forces (beyond their influence), have control over the outcome of events in their lives. Also 'LoC'.",(0,n.kt)("br",{parentName:"p"}),"\n","More on ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Locus_of_control"},"wikipedia")),(0,n.kt)("h2",{id:"in-ssi-domain"},"In SSI domain"),(0,n.kt)("p",null,"In SSI loci-of-control was decribed by Tim Bouma in 2019:\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/WebOfTrust/keri/blob/main/images/loci-of-control.png",alt:null})),(0,n.kt)("h2",{id:"keri-development"},"KERI development"),(0,n.kt)("p",null,"In KERI this is further developed:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Event Promulgation Service = from the ",(0,n.kt)("inlineCode",{parentName:"li"},"controller"),"'s point."),(0,n.kt)("li",{parentName:"ul"},"key event confirmation service = from the ",(0,n.kt)("inlineCode",{parentName:"li"},"validator"),"'s point.")),(0,n.kt)("p",null,"The separation of promulgation and confirmation into two separate ",(0,n.kt)("em",{parentName:"p"},"loci-of-control"),", one the controller\u2019s, and the other the validator\u2019s simplifies the interaction space between these two parties.",(0,n.kt)("br",{parentName:"p"}),"\n","The design principle of separating the loci-of-control between controllers and validators removes one of the major drawbacks of total ordered distributed consensus algorithms, that is, shared governance over the pool of nodes that provide the consensus algorithm.",(0,n.kt)("br",{parentName:"p"}),"\n","The primary purpose of the ",(0,n.kt)("a",{parentName:"p",href:"#keri-agreement-algorithm-for-control-establishment"},"KA2CE")," algorithm is to protect the controller\u2019s ability to promulgate the authoritative copy of its key event history despite external attack. This includes maintaining a sufficient degree of availability such that any validator may obtain an authoritative copy on demand."))}m.isMDXComponent=!0}}]);