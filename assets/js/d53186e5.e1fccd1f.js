"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,g=d["".concat(p,".").concat(u)]||d[u]||h[u]||n;return r?i.createElement(g,o(o({ref:t},l),{},{components:r})):i.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var i=r(87462),a=(r(67294),r(3905));const n={},o=void 0,c={unversionedId:"Terms/glossary/directed-acyclic-graph",id:"Terms/glossary/directed-acyclic-graph",title:"directed-acyclic-graph",description:"Definition",source:"@site/docs/Terms/glossary/directed-acyclic-graph.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/directed-acyclic-graph",permalink:"/WOT-terms/docs/Terms/glossary/directed-acyclic-graph",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"digital-signature",permalink:"/WOT-terms/docs/Terms/glossary/digital-signature"},next:{title:"disclosee",permalink:"/WOT-terms/docs/Terms/glossary/disclosee"}},p={},s=[{value:"Definition",id:"definition",level:2},{value:"Why a directed acyclic graph (DAG)",id:"why-a-directed-acyclic-graph-dag",level:2},{value:"Unique properties",id:"unique-properties",level:2},{value:"Applications",id:"applications",level:2}],l={toc:s},d="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"From Wikipedia (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"source"),"):"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mathematics"},"mathematics"),", particularly ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_theory"},"graph theory"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Computer_science"},"computer science"),", a directed acyclic graph (DAG ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Help:IPA/English"},"/\u02c8d\xe6\u0261/")," (",(0,a.kt)("a",{parentName:"p",href:"https://upload.wikimedia.org/wikipedia/commons/5/5a/En-us-DAG.ogg"},"listen"),")) is a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_graph"},"directed graph")," with no ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cycle_graph#Directed_cycle_graph"},"directed cycles"),". That is, it consists of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vertex_(graph_theory)"},"vertices")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Edge_(graph_theory)"},"edges")," (also called arcs), with each edge directed from one vertex to another."),(0,a.kt)("img",{src:"https://hackmd.io/_uploads/rywIzRLo5.png",width:"219",height:"300",alt:"A directed acyclic graph (DAG)"}),(0,a.kt)("h2",{id:"why-a-directed-acyclic-graph-dag"},"Why a directed acyclic graph (DAG)"),(0,a.kt)("p",null,"Following directions in a DAG will never form a closed loop. Steps through a DAG are finite. That's the main reason to choose for a DAG."),(0,a.kt)("h2",{id:"unique-properties"},"Unique properties"),(0,a.kt)("p",null,"From Wikipedia (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"source"),"):"),(0,a.kt)("p",null,"A directed graph is a DAG if and only if it can be ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Topological_ordering"},"topologically ordered"),", by arranging the vertices as a linear ordering that is consistent with all edge directions. "),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("p",null,"From Wikipedia (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"source"),"):"),(0,a.kt)("p",null,"DAGs have numerous scientific and computational applications, ranging from biology (evolution, family trees, epidemiology) to information science (citation networks) to computation (scheduling)."))}h.isMDXComponent=!0}}]);