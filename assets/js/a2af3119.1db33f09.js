"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[327],{20530:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(67294),r=a(91262),n=a(87441),i=a(27856),c=a.n(i);const l=e=>{let{repo:t}=e;const[a,r]=(0,s.useState)([]);return(0,s.useEffect)((()=>{fetch(`https://api.github.com/repos/${t}/issues?state=all&per_page=100&page=1`).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error("Error fetching issues:",e)))}),[t]),(0,s.useEffect)((()=>{if(a.length>0&&"undefined"!=typeof window){(()=>{a.forEach((e=>{e.body=e.body?c().sanitize((0,n.TU)(e.body)):"",e.created_at=new Date(e.created_at).toLocaleString(),e.updated_at=new Date(e.updated_at).toLocaleString(),"open"===e.state?e.stateIndicator="text-warning-emphasis bg-warning-subtle":e.stateIndicator="text-light-emphasis bg-light-subtle"}))})()}}),[a]),s.createElement("div",{className:"mx-auto issue-container"},s.createElement("div",null,s.createElement("h2",{className:"w-100"},t),s.createElement("div",{className:"w-100 d-flex flex-wrap justify-content-center"},a.map(((e,t)=>s.createElement("a",{className:`btn btn-outline-secondary btn-sm mb-1 me-2 ${e.stateIndicator}`,key:t,href:`#issue${e.number}`},"#",e.number,": ",e.title?e.title.substring(0,30):"No Title","\u2026")))),a.map(((e,t)=>s.createElement("div",{key:t},s.createElement("div",{className:`card m-2 mb-5 ${e.stateIndicator}`},s.createElement("div",{className:"card-header"},s.createElement("h3",{id:`issue${e.number}`,className:"card-title"},s.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"#",e.number),": ",e.title),s.createElement("span",null,"State: ",e.state)," \u2013",s.createElement("span",null,"Created: ",e.created_at)," \u2013",s.createElement("span",null,"Updated: ",e.updated_at)),s.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:e.body?e.body.substring(0,300)+"\u2026":"No content."}})))))))},o=e=>s.createElement(r.Z,{fallback:s.createElement("div",null,"Loading...")},(()=>s.createElement(l,e)))},68226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=a(87462),r=(a(67294),a(3905)),n=a(20530);const i={},c="Cesride issues",l={unversionedId:"github-latest-activity/cesride",id:"github-latest-activity/cesride",title:"Cesride issues",description:"Information fetched on page load.",source:"@site/docs/github-latest-activity/cesride.mdx",sourceDirName:"github-latest-activity",slug:"/github-latest-activity/cesride",permalink:"/WOT-terms/docs/github-latest-activity/cesride",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dictionary SSI",permalink:"/WOT-terms/docs/dictionary"},next:{title:"KERI issues",permalink:"/WOT-terms/docs/github-latest-activity/keri"}},o={},d=[],u={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cesride-issues"},"Cesride issues"),(0,r.kt)("p",null,"Information fetched on page load."),(0,r.kt)(n.Z,{repo:"WebOfTrust/cesride",mdxType:"Issues"}))}p.isMDXComponent=!0}}]);