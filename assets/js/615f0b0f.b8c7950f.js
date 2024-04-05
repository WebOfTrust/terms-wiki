"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[99314],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),u=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(r),h=n,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return r?o.createElement(d,i(i({ref:e},p),{},{components:r})):o.createElement(d,i({ref:e},p))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},59288:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={status:"final"},i="Github Actions",s={unversionedId:"how-we-did/organization-of-Github-Action-scripts",id:"how-we-did/organization-of-Github-Action-scripts",title:"Github Actions",description:"For who",source:"@site/docs/how-we-did/organization-of-Github-Action-scripts.md",sourceDirName:"how-we-did",slug:"/how-we-did/organization-of-Github-Action-scripts",permalink:"/WOT-terms/docs/how-we-did/organization-of-Github-Action-scripts",draft:!1,tags:[],version:"current",frontMatter:{status:"final"},sidebar:"tutorialSidebar",previous:{title:"Load weboftrust glossary in weboftrust github page",permalink:"/WOT-terms/docs/how-we-did/load-glossary-weboftrust-in-docusaurus"},next:{title:"Overrides",permalink:"/WOT-terms/docs/how-we-did/overrides"}},l={},u=[{value:"For who",id:"for-who",level:2},{value:"Description",id:"description",level:2}],p={toc:u},c="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"github-actions"},"Github Actions"),(0,n.kt)("h2",{id:"for-who"},"For who"),(0,n.kt)("p",null,"This article is for maintainers, but also users who'd like to know what actions get triggered by what type of events."),(0,n.kt)("p",null,"Results: insight in the choice around our Coninuous Development Continuous Integration (CDCI) process."),(0,n.kt)("p",null,"Github Actions are readible for most people who are able to read pseudo-code. The structure and organization of our Action scripts and those brought in by third party tools like Docusaurus, can be distilled fom the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms/tree/main/.github/workflows"},"source code"),". However, we 'd like to offer a convenient insight in the structure and working."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"script are set off by hand or automatic? Or both? In which situation would you apply these options."),(0,n.kt)("li",{parentName:"ul"},"are certain Action scripts calling eachtother? If so it needs to be clear under what circumstances.")),(0,n.kt)("p",null,"There are currently five Github Actions. All actions should be started manually. One script is started via Cron: the \u201cFind broken links\u201d action. No actions are triggered by Push commits."),(0,n.kt)("p",null,"This means that after updating the Wiki, you should run the \u201cImport wiki\u201d action manually to get the new content into this repo. If you wish to publish the new content to the website, you should run \u201cDeploy to Github Pages\u201d."),(0,n.kt)("p",null,"The same goes for importing external glossaries and importing metadata."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/WebOfTrust/WOT-terms/actions/workflows/deploy-to-gh-pages.yml"},"Deploy to Github Pages")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"runs on workflow_dispatch (manual start)"),(0,n.kt)("li",{parentName:"ul"},"receives changes that are pushed (content updates, e.g. HowTo's, or design updates)"),(0,n.kt)("li",{parentName:"ul"},"builds and copies ",(0,n.kt)("em",{parentName:"li"},"/build")," to gh-pages"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/WebOfTrust/WOT-terms/actions/workflows/find-broken-links.yml"},"Find broken links")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"runs on ",(0,n.kt)("em",{parentName:"li"},"cron")," and ",(0,n.kt)("em",{parentName:"li"},"workflow_dispatch")," (manual start)"),(0,n.kt)("li",{parentName:"ul"},"checks links"),(0,n.kt)("li",{parentName:"ul"},"creates issue"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/WebOfTrust/WOT-terms/actions/workflows/import-external-glossaries.yml"},"Import external glossaries")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"runs on ",(0,n.kt)("em",{parentName:"li"},"workflow_dispatch")," (manual start)"),(0,n.kt)("li",{parentName:"ul"},"updates external glossaries"),(0,n.kt)("li",{parentName:"ul"},"pushes updates into repo"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/WebOfTrust/WOT-terms/actions/workflows/import-metadata-google-sheet.yml"},"Import meta data from google sheets")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"runs on ",(0,n.kt)("em",{parentName:"li"},"workflow_dispatch")," (manual start)"),(0,n.kt)("li",{parentName:"ul"},"updates meta data from google sheet"),(0,n.kt)("li",{parentName:"ul"},"pushes updates into repo"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/WebOfTrust/WOT-terms/actions/workflows/import-wiki.yml"},"Import wiki")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"runs on workflow_dispatch (manual start)"),(0,n.kt)("li",{parentName:"ul"},"copies wiki to /docs/glossary"),(0,n.kt)("li",{parentName:"ul"},"pushes changes into repo"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Scraper"),": To Be Created",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"runs on ",(0,n.kt)("em",{parentName:"li"},"workflow_dispatch"),":"),(0,n.kt)("li",{parentName:"ul"},"scrapes various sources"),(0,n.kt)("li",{parentName:"ul"},"imports result into Typesense, makes backup, etc"),(0,n.kt)("li",{parentName:"ul"},"pushes updates into repo")))))}m.isMDXComponent=!0}}]);