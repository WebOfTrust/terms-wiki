"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[53571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="Source and Destination for Search",s={unversionedId:"how-we-did/source-and-destination-for-search",id:"how-we-did/source-and-destination-for-search",title:"Source and Destination for Search",description:"Designing an Improved Search and Indexing System for Docusaurus KERISSE. The objective is to create a process that is as automatic as possible. The topic is External resources in any form. Example: KERI for Muggles in Pdf format. The challenge is that this type of format is not very suitable to extract text from. On the other hand it is very well suited for end-users to pop up as a search result.",source:"@site/docs/how-we-did/source-and-destination-for-search.md",sourceDirName:"how-we-did",slug:"/how-we-did/source-and-destination-for-search",permalink:"/WOT-terms/docs/how-we-did/source-and-destination-for-search",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pull in markdown documents",permalink:"/WOT-terms/docs/how-we-did/pull-in-markdown-documents"},next:{title:"Sync agenda to production via local",permalink:"/WOT-terms/docs/how-we-did/sync-agenda-to-production-via-local"}},l={},c=[{value:"Objective",id:"objective",level:2},{value:"Current Situation",id:"current-situation",level:2},{value:"Design Decision",id:"design-decision",level:2},{value:"Save to htm(l)",id:"save-to-html",level:2},{value:"Acknowledgement",id:"acknowledgement",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"source-and-destination-for-search"},"Source and Destination for Search"),(0,o.kt)("p",null,"Designing an Improved Search and Indexing System for Docusaurus KERISSE. The objective is to create a process that is as automatic as possible. The topic is ",(0,o.kt)("strong",{parentName:"p"},"External resources in any form"),". Example: KERI for Muggles in Pdf format. The challenge is that this type of format is not very suitable to extract text from. On the other hand it is very well suited for end-users to pop up as a search result."),(0,o.kt)("p",null,"Meeting Date: August 1 2023"),(0,o.kt)("p",null,"Attendees: Kor Dwarshuis, Henk van Cann"),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"The primary motivation for our design modifications is twofold: Firstly, our resources need to be effectively indexed to facilitate efficient searching. Secondly, these resources must be suitably referenced in the search results."),(0,o.kt)("p",null,"To streamline this process, we are considering two types of data inputs: direct and indirect. We aspire to integrate the ",(0,o.kt)("inlineCode",{parentName:"p"},"direct")," input with git, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"indirect")," input would comprise various formats that external parties deliver (PPT, KEY, TXT, WORD, WP, whatever)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user-friendly output could be indirect input or an extract / modification of this. For example the indriect input of our KERI for Muggles example is a Google Doc ",(0,o.kt)("inlineCode",{parentName:"p"},"Slides")," file on the web. The user-friendly output could be a ",(0,o.kt)("inlineCode",{parentName:"p"},"pdf")," generated with Google Docs from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Slides")," file.")),(0,o.kt)("h2",{id:"current-situation"},"Current Situation"),(0,o.kt)("img",{src:"https://hackmd.io/_uploads/HyUgpI8o2.png",alt:"Tab Handmade of WOT-term Google sheet"}),(0,o.kt)("p",null,"Our existing system includes a 'WOT-Terms' sheet that contains a 'Handmade' tab. This tab features resources specified in a 'Source' column and their corresponding 'Destination' column."),(0,o.kt)("p",null,"The objective is to automatically extract information from this sheet, inclusive of metadata, and perform subsequent actions or provide functionalities based on it. We envisage these inputs being accessible via a URL for practicality."),(0,o.kt)("p",null,"Moreover, it is intended that the source data becomes searchable through the so-called 'document' in Typesense."),(0,o.kt)("h2",{id:"design-decision"},"Design Decision"),(0,o.kt)("p",null,"After deliberating on the current situation, the following decisions were made:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Firstly, we recognized that the manually created entry that forms a link between a search term and a 'Destination' URL is performing as expected and requires no changes."),(0,o.kt)("li",{parentName:"ul"},"Second, the source data will need to be manually extracted from a designated collection directory outside the repository. We then manually convert (or export) this data into a readable format within the repository. This process allows us to generate a URL and include these sources within the purview of git version control."),(0,o.kt)("li",{parentName:"ul"},"Third, we decided that the content population process doesn't always have to be manual. We could leverage Puppeteer to scrape the information by incorporating the source URLs from the 'Handmade' tab into a sitemap. This solution has the added advantage of nicely segmenting the data. However, a prerequisite for this is that the data must be in HTML format for Puppeteer to recognize and process it. Consequently, we need to ",(0,o.kt)("strong",{parentName:"li"},"export the data as HTML")," rather than plain text."),(0,o.kt)("li",{parentName:"ul"},"Lastly, we will report the URL located in the 'Handmade' tab of the WOT sheet. This reporting will enable the URL to be processed automatically, thereby increasing the system's overall efficiency.")),(0,o.kt)("h2",{id:"save-to-html"},"Save to htm(l)"),(0,o.kt)("p",null,"Example export to html:"),(0,o.kt)("img",{src:"https://hackmd.io/_uploads/r10McuLo3.png",alt:""}),(0,o.kt)("p",null,"Only use the content file ",(0,o.kt)("inlineCode",{parentName:"p"},".html")),(0,o.kt)("h4",{id:"acknowledgement"},"Acknowledgement"),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://www.openai.com/research/chatgpt"},"ChatGPT")," for enhancing this text."))}p.isMDXComponent=!0}}]);