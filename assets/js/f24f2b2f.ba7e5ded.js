"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[73593],{86681:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(67294),r=a(91262);const n=e=>{let{counter:t,setCounter:a,fetchIssues:r,issuesLength:n}=e;return s.createElement("div",{className:"d-flex justify-content-center mb-5"},s.createElement("div",{className:"btn-group"},s.createElement("a",{className:"btn btn-outline-secondary "+(0===n?"disabled":""),onClick:()=>{a((e=>e+1)),r(t+1)}},"Older"),s.createElement("a",{className:"btn btn-outline-secondary "+(1===t?"disabled":""),onClick:()=>{t>1&&(a((e=>e-1)),r(t-1))}},"Newer")))};var i=a(87441),l=a(27856),c=a.n(l);const o=e=>{let{repo:t}=e;const[a,r]=(0,s.useState)([]),[l,o]=(0,s.useState)(1),[d,u]=(0,s.useState)(0);(0,s.useEffect)((()=>{u(a.length)}),[a]);const m=e=>{const t=new Date-e;return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60)}},p=e=>{fetch(`https://api.github.com/repos/${t}/issues?state=all&per_page=15&page=${e||1}`).then((e=>{if(403===e.status&&"0"===e.headers.get("X-RateLimit-Remaining"))throw alert("Rate limit exceeded"),new Error("Rate limit exceeded");return e.json()})).then((e=>{r(e.map((e=>{return{...e,stateIndicator:(t=e.state,"open"===t?"text-warning-emphasis bg-warning-subtle":"text-light-emphasis bg-light-subtle"),timeSinceLastUpdate:m(new Date(e.updated_at))};var t})))})).catch((e=>{console.log("error: ",e),console.error("Error fetching issues:",e),alert("Error fetching issues.")}))};return(0,s.useEffect)(p,[t]),(0,s.useEffect)((()=>{if(a.length>0&&"undefined"!=typeof window){(()=>{a.forEach((e=>{e.body=e.body?c().sanitize((0,i.TU)(e.body)):"",e.created_at=new Date(e.created_at).toLocaleString(),e.updated_at=new Date(e.updated_at).toLocaleString()}))})()}}),[a]),s.createElement("div",{className:"mx-auto issue-container"},s.createElement("div",null,s.createElement("h2",{className:"w-100"},t),s.createElement("div",{className:"w-100 d-flex flex-wrap justify-content-center"},a.length>0?a.map(((e,t)=>s.createElement("div",{className:"generated-index-links m-0 p-2",key:t},s.createElement("a",{title:`Days since last update: ${e.timeSinceLastUpdate.days}`,className:`text-start position-relative w-100 btn btn-outline-secondary-subtle text-primary-subtle btn-sm p-0 mb-1 p-1 ${e.stateIndicator}`,href:`#issue${e.number}`},"#",e.number,": ",e.title?e.title.substring(0,25):"No Title","\u2026",e.timeSinceLastUpdate.days>100&&"open"===e.state?s.createElement("span",{className:"position-absolute top-0 start-100 translate-middle badge bg-danger border-primary-subtle p-1"},s.createElement("span",{className:"visually-hidden"},"New alerts")):s.createElement("span",{className:"position-absolute top-0 start-100 translate-middle badge bg-info-subtle border-primary-subtle p-1"},s.createElement("span",{className:"visually-hidden"},"New alerts")))))):s.createElement("div",{className:"alert alert-info",role:"alert"},"No more issues to show")),s.createElement("p",{className:"text-center"},"Page ",l),s.createElement(n,{counter:l,setCounter:o,fetchIssues:p,issuesLength:d}),a.map(((e,t)=>s.createElement("div",{key:t},s.createElement("div",{className:`card m-2 mb-5 ${e.stateIndicator}`},s.createElement("div",{className:"card-header"},s.createElement("h3",{id:`issue${e.number}`,className:"card-title"},s.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"#",e.number),": ",e.title),s.createElement("span",null,"State: ",e.state)," \u2013 ",s.createElement("span",null,"Created: ",e.created_at)," \u2013",e.timeSinceLastUpdate.days>100&&"open"===e.state?s.createElement("span",{className:"alert alert-danger p-1"},"Updated: ",e.updated_at):s.createElement("span",null,"Updated: ",e.updated_at)),s.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:e.body?e.body.substring(0,300)+"\u2026":"No content."}})))))),s.createElement("p",{className:"text-center"},"Page ",l),s.createElement(n,{counter:l,setCounter:o,fetchIssues:p,issuesLength:d}))},d=e=>s.createElement(r.Z,{fallback:s.createElement("div",{className:"alert alert-info",role:"alert"},"Loading\u2026")},(()=>s.createElement(o,e)))},61342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=a(87462),r=(a(67294),a(3905)),n=a(86681);const i={},l="KERIA issues",c={unversionedId:"github-latest-activity/keria",id:"github-latest-activity/keria",title:"KERIA issues",description:"Real-time info.",source:"@site/docs/github-latest-activity/keria.mdx",sourceDirName:"github-latest-activity",slug:"/github-latest-activity/keria",permalink:"/WOT-terms/docs/github-latest-activity/keria",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KERI issues",permalink:"/WOT-terms/docs/github-latest-activity/keri"},next:{title:"KERIPY issues",permalink:"/WOT-terms/docs/github-latest-activity/keripy"}},o={},d=[],u={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keria-issues"},"KERIA issues"),(0,r.kt)("p",null,"Real-time info."),(0,r.kt)(n.Z,{repo:"WebOfTrust/keria",mdxType:"Issues"}))}p.isMDXComponent=!0}}]);