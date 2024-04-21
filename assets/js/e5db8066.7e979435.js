"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[82387],{20530:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(67294),n=s(91262),i=s(87441),r=s(27856),l=s.n(r);const c=e=>{let{repo:t}=e;const[s,n]=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch(`https://api.github.com/repos/${t}/issues?state=all&per_page=100&page=1`).then((e=>e.json())).then((e=>n(e))).catch((e=>console.error("Error fetching issues:",e)))}),[t]),(0,a.useEffect)((()=>{if(s.length>0&&"undefined"!=typeof window){const e=s.map((e=>{const t={...e};return t.body=t.body?l().sanitize((0,i.TU)(t.body)):"",t.created_at=new Date(t.created_at).toLocaleString(),t.updated_at=new Date(t.updated_at).toLocaleString(),t.stateIndicator="open"===t.state?"text-warning-emphasis bg-warning-subtle":"text-light-emphasis bg-light-subtle",t}));n(e)}}),[s]),a.createElement("div",{className:"mx-auto issue-container"},a.createElement("div",null,a.createElement("h2",{className:"w-100"},t),a.createElement("div",{className:"w-100 d-flex flex-wrap justify-content-center"},s.map(((e,t)=>a.createElement("a",{className:`btn btn-outline-secondary btn-sm mb-1 me-2 ${e.stateIndicator}`,key:t,href:`#issue${e.number}`},"#",e.number,": ",e.title?e.title.substring(0,30):"No Title","\u2026")))),s.map(((e,t)=>a.createElement("div",{key:t},a.createElement("div",{className:`card m-2 mb-5 ${e.stateIndicator}`},a.createElement("div",{className:"card-header"},a.createElement("h3",{id:`issue${e.number}`,className:"card-title"},a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"#",e.number),": ",e.title),a.createElement("span",null,"State: ",e.state)," \u2013",a.createElement("span",null,"Created: ",e.created_at)," \u2013",a.createElement("span",null,"Updated: ",e.updated_at)),a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:e.body?e.body.substring(0,300)+"\u2026":"No content."}})))))))},o=e=>a.createElement(n.Z,{fallback:a.createElement("div",null,"Loading...")},(()=>a.createElement(c,e)))},74293:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=s(87462),n=(s(67294),s(3905)),i=s(20530);const r={},l="Signify-ts issues",c={unversionedId:"github-latest-activity/signify-ts",id:"github-latest-activity/signify-ts",title:"Signify-ts issues",description:"Information fetched on page load.",source:"@site/docs/github-latest-activity/signify-ts.mdx",sourceDirName:"github-latest-activity",slug:"/github-latest-activity/signify-ts",permalink:"/WOT-terms/docs/github-latest-activity/signify-ts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KERIPY issues",permalink:"/WOT-terms/docs/github-latest-activity/keripy"},next:{title:"vLei issues",permalink:"/WOT-terms/docs/github-latest-activity/vLei"}},o={},u=[],d={toc:u},m="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"signify-ts-issues"},"Signify-ts issues"),(0,n.kt)("p",null,"Information fetched on page load."),(0,n.kt)(i.Z,{repo:"WebOfTrust/signify-ts",mdxType:"Issues"}))}p.isMDXComponent=!0}}]);