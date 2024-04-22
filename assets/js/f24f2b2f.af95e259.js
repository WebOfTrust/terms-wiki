"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[73593],{20530:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(67294),r=a(91262),n=a(87441),i=a(27856),l=a.n(i);const c=e=>{let{repo:t}=e;const[a,r]=(0,s.useState)([]);return(0,s.useEffect)((()=>{fetch(`https://api.github.com/repos/${t}/issues?state=all&per_page=30&page=1`).then((e=>e.json())).then((e=>{r(e.map((e=>{return{...e,stateIndicator:(t=e.state,"open"===t?"text-warning-emphasis bg-warning-subtle":"text-light-emphasis bg-light-subtle")};var t})))})).catch((e=>console.error("Error fetching issues:",e)))}),[t]),(0,s.useEffect)((()=>{if(a.length>0&&"undefined"!=typeof window){(()=>{a.forEach((e=>{e.body=e.body?l().sanitize((0,n.TU)(e.body)):"",e.created_at=new Date(e.created_at).toLocaleString(),e.updated_at=new Date(e.updated_at).toLocaleString()}))})()}}),[a]),s.createElement("div",{className:"mx-auto issue-container"},s.createElement("div",null,s.createElement("h2",{className:"w-100"},t),s.createElement("div",{className:"w-100 d-flex flex-wrap justify-content-center"},a.map(((e,t)=>s.createElement("div",{className:"generated-index-links m-0 p-1"},s.createElement("a",{className:`w-100 btn btn-outline-secondary btn-sm mb-1 ${e.stateIndicator}`,key:t,href:`#issue${e.number}`},"#",e.number,": ",e.title?e.title.substring(0,25):"No Title","\u2026"))))),a.map(((e,t)=>s.createElement("div",{key:t},s.createElement("div",{className:`card m-2 mb-5 ${e.stateIndicator}`},s.createElement("div",{className:"card-header"},s.createElement("h3",{id:`issue${e.number}`,className:"card-title"},s.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"#",e.number),": ",e.title),s.createElement("span",null,"State: ",e.state)," \u2013 ",s.createElement("span",null,"Created: ",e.created_at)," \u2013 ",s.createElement("span",null,"Updated: ",e.updated_at)),s.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:e.body?e.body.substring(0,300)+"\u2026":"No content."}})))))))},o=e=>s.createElement(r.Z,{fallback:s.createElement("div",null,"Loading...")},(()=>s.createElement(c,e)))},61342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=a(87462),r=(a(67294),a(3905)),n=a(20530);const i={},l="KERIA issues",c={unversionedId:"github-latest-activity/keria",id:"github-latest-activity/keria",title:"KERIA issues",description:"Information fetched on page load.",source:"@site/docs/github-latest-activity/keria.mdx",sourceDirName:"github-latest-activity",slug:"/github-latest-activity/keria",permalink:"/WOT-terms/docs/github-latest-activity/keria",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KERI issues",permalink:"/WOT-terms/docs/github-latest-activity/keri"},next:{title:"KERIPY issues",permalink:"/WOT-terms/docs/github-latest-activity/keripy"}},o={},u=[],d={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keria-issues"},"KERIA issues"),(0,r.kt)("p",null,"Information fetched on page load."),(0,r.kt)(n.Z,{repo:"WebOfTrust/keria",mdxType:"Issues"}))}p.isMDXComponent=!0}}]);