"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[51624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="Delving into the WOT Knowledge Repository",s={unversionedId:"resources/intro",id:"resources/intro",title:"Delving into the WOT Knowledge Repository",description:"Welcome to our comprehensive knowledge base \u2013 a dynamic compendium of whitepapers, slide presentations, video content, HackMD files, and much more. This repository isn't just a store of information; it's a meticulously curated and enhanced platform designed to augment your understanding of WOT and serve as your springboard for deep exploration and learning.",source:"@site/docs/05_resources/intro.md",sourceDirName:"05_resources",slug:"/resources/intro",permalink:"/WOT-terms/docs/resources/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/WOT-terms/docs/category/resources"},next:{title:"keri.one-labeled",permalink:"/WOT-terms/docs/resources/keri.one-labeled"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delving-into-the-wot-knowledge-repository"},"Delving into the WOT Knowledge Repository"),(0,o.kt)("p",null,"Welcome to our comprehensive knowledge base \u2013 a dynamic compendium of ",(0,o.kt)("strong",{parentName:"p"},"whitepapers, slide presentations, video content, HackMD files"),", and much more. This repository isn't just a store of information; it's a meticulously curated and enhanced platform designed to augment your understanding of WOT and serve as your springboard for deep exploration and learning."),(0,o.kt)("p",null,"Our strategic decision to house copies of these resources, rather than merely linking or directing to them, is guided by several critical objectives:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Adaptability")," \u2013 Our user interface is powered by ",(0,o.kt)("inlineCode",{parentName:"p"},"React"),", often necessitating resources in plain markdown or PDF formats. By hosting these resources ourselves, we ensure their full compatibility with our system.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Searchability")," \u2013 Our integration with ",(0,o.kt)("inlineCode",{parentName:"p"},"Typesense")," provides a seamless and efficient search experience, enabling you to navigate effortlessly through our expansive repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Enhanced Comprehension")," \u2013 For contextual understanding, we dynamically add hyperlinks and hover texts to terms within the text, enabling immediate inline explanations and offering additional information at your fingertips.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Chatbot Integration")," \u2013 The information in these documents also enhances the capabilities of our sophisticated chatbot (Powered By ",(0,o.kt)("a",{parentName:"p",href:"http://chatbase.co"},"Chatbase.co"),"), improving its ability to assist and engage with users."))),(0,o.kt)("p",null,"Dive into the directory structure presented in the left menu to explore our vast collection of resources. Among these, you will discover select material from ",(0,o.kt)("a",{parentName:"p",href:"http://keri.one"},"keri.one"),", maintained by Samuel Smith \u2013 the founding father of KERI."),(0,o.kt)("p",null,"While ",(0,o.kt)("a",{parentName:"p",href:"http://keri.one"},"keri.one")," is an invaluable resource in its own right, we've taken the added step of carefully cataloging and integrating these resources into our platform for your convenience. To make these resources even more accessible, we've"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"meticulously labeled them with metadata, "),(0,o.kt)("li",{parentName:"ul"},"assigned user levels, and "),(0,o.kt)("li",{parentName:"ul"},"organized them into intuitive categories.\nThis comprehensive enhancement allows for a more personalized and seamless learning experience, enabling you to delve into the depths of KERI right here on our platform.")),(0,o.kt)("p",null,"Stay, explore, and continue your journey of discovery with us. We're committed to continually refining KERISSE to enhance your learning experience."))}d.isMDXComponent=!0}}]);