"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[1474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,d=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19823:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"HowTo"},i="The Terms WOT manage structure explained",l={type:"mdx",permalink:"/WOT-terms/howtos/hwt_why-terms-wot-manage-structure",source:"@site/src/pages/howtos/hwt_why-terms-wot-manage-structure.md",title:"HowTo",description:"What we have, to generate our static content site on the Github project page of this WOT-terms page repo, is:",frontMatter:{title:"HowTo"}},s=[{value:"Why not straigth export from Excel to a semi-colon separated text file.",id:"why-not-straigth-export-from-excel-to-a-semi-colon-separated-text-file",level:4},{value:"Why a sheet and why is it called Terms WOT manage?",id:"why-a-sheet-and-why-is-it-called-terms-wot-manage",level:2},{value:"Term life cycle",id:"term-life-cycle",level:2},{value:"Lifecycle phases",id:"lifecycle-phases",level:3},{value:"Three simple rules (for now, feel free to comment!)",id:"three-simple-rules-for-now-feel-free-to-comment",level:3},{value:"Conventions and comparison to database",id:"conventions-and-comparison-to-database",level:2},{value:"Why not a database?",id:"why-not-a-database",level:3},{value:"Counting tool",id:"counting-tool",level:2},{value:"Why would we need a terms counting tool?",id:"why-would-we-need-a-terms-counting-tool",level:3},{value:"Redesign",id:"redesign",level:3},{value:"Regular expression to hit",id:"regular-expression-to-hit",level:4},{value:"Results",id:"results",level:3},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"Why not a term-content file per level of understanding?",id:"why-not-a-term-content-file-per-level-of-understanding",level:2},{value:"What&#39;s the whole point of managing WOT terms in a sheet?",id:"whats-the-whole-point-of-managing-wot-terms-in-a-sheet",level:2}],m={toc:s},h="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-terms-wot-manage-structure-explained"},"The Terms WOT manage structure explained"),(0,r.kt)("p",null,"What we have, to generate our static content site on the Github project page of this ",(0,r.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/"},"WOT-terms page")," repo, is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"wiki resources, terms in separate ",(0,r.kt)("inlineCode",{parentName:"li"},".md")," files in a Jekyll directory structure"),(0,r.kt)("li",{parentName:"ol"},"a sheet called ",(0,r.kt)("em",{parentName:"li"},"Terms WOT manage")," (",(0,r.kt)("inlineCode",{parentName:"li"},".xls"),") a central location with strict editing rights."),(0,r.kt)("li",{parentName:"ol"},'a "comma separated" file ',(0,r.kt)("em",{parentName:"li"},"Terms WOT manage")," (",(0,r.kt)("inlineCode",{parentName:"li"},".csv"),") exported from Excel in any directory locally. In fact it's a semi-colon-separated text file that you might get; so check the result.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77964).Z,width:"2766",height:"1320"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(88523).Z,width:"2310",height:"1250"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"A comma separated text file ",(0,r.kt)("em",{parentName:"li"},"Terms WOT manage")," (",(0,r.kt)("inlineCode",{parentName:"li"},".txt"),") in the root directory of the ",(0,r.kt)("inlineCode",{parentName:"li"},"gh-pages")," branch of ",(0,r.kt)("inlineCode",{parentName:"li"},"WOT-terms")," repo. Use a plain text editor.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(45509).Z,width:"1660",height:"1074"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(48945).Z,width:"1088",height:"268"})),(0,r.kt)("h4",{id:"why-not-straigth-export-from-excel-to-a-semi-colon-separated-text-file"},"Why not straigth export from Excel to a semi-colon separated text file."),(0,r.kt)("p",null,"In Excel the ",(0,r.kt)("em",{parentName:"p"},'"save as"')," option does not provide a text export with semi-colons.\\\nThe third and fourth step have proven necessary to generate a semi-colon-separated text file."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note by Henk van Cann\nBeware of non-ascii characters still present on the first line of the file coming from Excel.\nI trimmed them out with the ",(0,r.kt)("inlineCode",{parentName:"p"},"tr")," command in my bash-tools to handle the sheet.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat ${SOURCE} | tr -cd '\\11\\12\\40-\\176' > \"${INPUT}\" # want to get rid of non-printable character Excel leaves in the text export\n")),(0,r.kt)("h2",{id:"why-a-sheet-and-why-is-it-called-terms-wot-manage"},"Why a sheet and why is it called Terms WOT manage?"),(0,r.kt)("p",null,"We need a place where terms are defined and declared. A sheet of terms is very practical:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lots of software available to amend and manage sheets"),(0,r.kt)("li",{parentName:"ul"},"many people have the skills to manage sheets with this type of software (Excel, Google sheets, Numbers, etc.)"),(0,r.kt)("li",{parentName:"ul"},"a sheet can enforce a notion of a unique value ('Key') in a column, a meaningless long-living identifier"),(0,r.kt)("li",{parentName:"ul"},"sheets can be flexibly expanded so that the content gets richer: tags, categories, dictionaries, etc"),(0,r.kt)("li",{parentName:"ul"},"sheets can be exported to comma separated files (CSVs)"),(0,r.kt)("li",{parentName:"ul"},"resulting CSVs can be imported into markdown, front matter, yaml files, etc.")),(0,r.kt)("p",null,"The reason it's called '",(0,r.kt)("em",{parentName:"p"},"Terms WOT manage"),"':"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"it's the management tool of our unique terms identifier"),(0,r.kt)("li",{parentName:"ol"},"it covers all the concepts, terms, categories, dictionaries, tags in the WebofTrust (WOT) field."),(0,r.kt)("li",{parentName:"ol"},"The smallest unit of declaration is a 'Term'.")),(0,r.kt)("h2",{id:"term-life-cycle"},"Term life cycle"),(0,r.kt)("p",null,"A term is a bitch. A term might have one or more abbreviations that are assimilated already (e.g. 'PTEL' and 'Public TEL' for public-transaction-event-log). It can be lower case, upper case, mixed case (e.g. 'vLEI'). it can be singular and plural (e.g. 'OOBIs' is more used than 'OOBI'). So, to have a term as identifying ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," to itself (self-referential) is a pain as long as the process hasn't completed; the term hasn't ",(0,r.kt)("em",{parentName:"p"},"hardened")," yet. This process is very different for every single term. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"icp: tag")," doesn't even have a proper term name yet (mid 2022)."),(0,r.kt)("h3",{id:"lifecycle-phases"},"Lifecycle phases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start: We need a 'Key' field to identify a most probably changing term and prevent the database from getting polluted with double terms."),(0,r.kt)("li",{parentName:"ul"},"Midlife: We need a 'Key' field to uniquely identify a term that might have various names used in the same (!) context."),(0,r.kt)("li",{parentName:"ul"},"End: A term is well-known, agreed upon by the community, therefore assimilated and unique, and we don't need 'Key' anymore.")),(0,r.kt)("h3",{id:"three-simple-rules-for-now-feel-free-to-comment"},"Three simple rules (for now, feel free to comment!)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We prefer ",(0,r.kt)("strong",{parentName:"li"},"a singular expression")," over plural expression. So for example the term is OOBI not OOBIs, unless it's grammatically incorrect (can't think of anything now)."),(0,r.kt)("li",{parentName:"ol"},"We use ",(0,r.kt)("strong",{parentName:"li"},"lower case")," as much as we can in the long (identifying) terms. The abbreviated term are linkers: they will get a ",(0,r.kt)("inlineCode",{parentName:"li"},"## See")," header and a link to the long more meaningful term in itself."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Longer compound terms take precedence")," over the parts. ",(0,r.kt)("inlineCode",{parentName:"li"},"public TEL")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"public-transaction-event-log")," is apparently worth explaining as a special form of ",(0,r.kt)("inlineCode",{parentName:"li"},"TEL")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction-event-log"),". So we first look for a hit on the longer term while parsing texts.")),(0,r.kt)("h2",{id:"conventions-and-comparison-to-database"},"Conventions and comparison to database"),(0,r.kt)("p",null,"Columns are comparable to ",(0,r.kt)("em",{parentName:"p"},"fields")," in a database. The rows are the ",(0,r.kt)("em",{parentName:"p"},"records")," in a database."),(0,r.kt)("p",null,"Field ",(0,r.kt)("em",{parentName:"p"},"names")," are in the first row. A few columns maintain our database-like structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Key: a unique incremental meaningless numeric identifier. The uniqueness is not enforced by code, but by userinterface: conditional formatting colours the cells with the same value red. The Key field becomes redundant as soon as the term itself is a well-known meaningful Key and Term at the same time, like a ",(0,r.kt)("a",{parentName:"li",href:"https://www.countrycode.org"},"country code"),"."),(0,r.kt)("li",{parentName:"ul"},'TTTTT_FKey: this columns contains foreigns key into another table or sheet. TTTTT can be a file that has terms mentioned in a video ("PhilVid") or another Glossary ("eSSIF-lab") that are related to the matching term on a specific row in our sheet.'),(0,r.kt)("li",{parentName:"ul"},"Cat_CCCCC: this columns contains Categories. We consider a term from a certain category went it's mentioned regularly in the content of certain repository (e.g. 'KERI' or 'OOBI') of the WebofTrust Github site.")),(0,r.kt)("p",null,"One term per row. We give ",(0,r.kt)("strong",{parentName:"p"},"an extra row to the abbreviation")," of a term. The reason fot this is a ToIP convention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the term is lowercase and has '-' between the words of the term, e.g. 'key-event-log'"),(0,r.kt)("li",{parentName:"ul"},"the abbreviation is uppercase and can have a hyphen, e.g. 'VC-TEL'"),(0,r.kt)("li",{parentName:"ul"},"the term always has a corresponding .md file in the ToIP Glossary, its .md file has a '## Definition' header"),(0,r.kt)("li",{parentName:"ul"},"the abbreviation (if relevant, which is a subjective guess by the team) also has a corresponding .md file in the ToIP Glossary, its .md file ONLY has a ",(0,r.kt)("strong",{parentName:"li"},"'## See' header"),". The 'See' contains a link to the matching term.")),(0,r.kt)("p",null,"KEL.md:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## See\n[Key event log](key-event-log)\n")),(0,r.kt)("p",null,"key-event-log.md:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## Definition\nA verifiable data structure that is a backward and forward chained ...\n")),(0,r.kt)("h3",{id:"why-not-a-database"},"Why not a database?"),(0,r.kt)("p",null,"We're generating static websites, for good reasons. ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/en-gb/learning/performance/static-site-generator#Pros"},"More info"),". But feel free to Google comparison and evaluations which direction you consider best. E.g. ",(0,r.kt)("a",{parentName:"p",href:"https://wpamelia.com/static-vs-dynamic-website/?gclid=Cj0KCQjwxveXBhDDARIsAI0Q0x234PSArlYOfbriIL6u0g3RUlRST8zfdAnYtkrRSs-GJ3RdgwaCSaEaArioEALw_wcB"},"wpamelia.com"),"."),(0,r.kt)("p",null,"Because we've chosen a static site generator, ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com"},"Jekyll")," for the time being, but there are other open-source options, ",(0,r.kt)("strong",{parentName:"p"},"a database would be balast"),"."),(0,r.kt)("h2",{id:"counting-tool"},"Counting tool"),(0,r.kt)("p",null,"The counting tool is offered by Blockchainbird.org and has been develop in 2019 as a means to assess the level of real expertise in blockchain publications. It crawled through a pdf, based on a dictionaries of terms and very simple business rules."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"E.g. If a pdf mentions 'bitcoin' in conjunction with words like 'scam', 'tax evasion', etc. we considered the writers as not being informed too well about the true nature of the bitcoin / blockchain innovation.")),(0,r.kt)("h3",{id:"why-would-we-need-a-terms-counting-tool"},"Why would we need a terms counting tool?"),(0,r.kt)("p",null,"The actual presence of a certain glossary term in documents and webpages is a strong indication whether the term at hand is relevant in a certain section. Based on this relevance expressed in an objective count we can automatically added certain tags and categories to the term."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The term 'out-of-band' has lots of 'hits' in the OOBI repo, but much less so in the KERI repo.")),(0,r.kt)("p",null,"Based on this relevance expressed in an objective count we can automatically added certain tags and categories to the term."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The term 'out-of-band' wil have an impressive count in the column ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat_OOBI"),". We might offer a high level menu item for the term in the sidebar of the WebofTrust Glossary 'OOBI'.")),(0,r.kt)("p",null,"The other reason is that a manual check for terms in documents is a very strenuous and time-consuming effort. And the result is always outdated per definition: once your change the source, the glossary needs to be updated too."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In brief:\\\nWe count, so we're lazily up to date.")),(0,r.kt)("h3",{id:"redesign"},"Redesign"),(0,r.kt)("p",null,"Recently the tool has been engineered towards the WOT-terms challenge:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it crawls any Github page and also pdfs (if necessary)"),(0,r.kt)("li",{parentName:"ul"},"the tool uses the 'Terms WOT manage' sheet to match terms"),(0,r.kt)("li",{parentName:"ul"},"the scores are based on a combination of parameters:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"level of (understanding need for) the term"),(0,r.kt)("li",{parentName:"ol"},"number of appearances, the actual count")))),(0,r.kt)("h4",{id:"regular-expression-to-hit"},"Regular expression to hit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Some abbreviations are too short. The acronyms match non-relevant things in the text. E.g. "AN", "AID" and "SAID". We need to look for "(AN)", " AN " or at the beginning of a paragraph: "\\nAN " instead.'),(0,r.kt)("li",{parentName:"ul"},'multiple-word expressions like "virtual-credential-transaction-event-log" should be looked for using "virtual credential transaction event log".'),(0,r.kt)("li",{parentName:"ul"},'The longer combination that matches exactly, takes precedence in the count:\n"virtual-credential-transaction-event-log", then "credential transaction event log" and lastly "transaction event log". No double counts here. Same with acronyms: an exact match for "VC-TEL" implies that there\'s no count for "TEL". Lastly also in syllables: a hit for "keridemlia" doesn\'t count "keri" in this word.')),(0,r.kt)("h3",{id:"results"},"Results"),(0,r.kt)("p",null,"The count of terms are in the Cat_CCCCC columns after a (re)run of the counting tool."),(0,r.kt)("p",null,"{TBW prio 1: the tool is currently being re-developed, August 18 2022 }"),(0,r.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Key: We might need a Key field ",(0,r.kt)("strong",{parentName:"li"},"to be able to")," have a unique long-living identifier for a term in the WebofTrust domain. However, any term goes through a life cycle, with the end state of a term being well-known, unchanged for a while and unique. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Key")," field has become superfluous by then."),(0,r.kt)("li",{parentName:"ul"},"TTTTT_Fkey / TTTTT_start: We use this Foreign Key to link to other educational resources of the this term, like Youtube footage","*",", webpages and other glossaries."),(0,r.kt)("li",{parentName:"ul"},"level: We assess a ",(0,r.kt)("a",{parentName:"li",href:"/README.md#levels-of-understanding"},"level of understanding")," to meaningful study a term. Regardless this subjective and personal judgement, the filtering options are numerous:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"offer everything (a glossary)"),(0,r.kt)("li",{parentName:"ol"},"offer a learning trajectory"),(0,r.kt)("li",{parentName:"ol"},"filter in the opposite direction: exclude terms for experts; don't bother them with Noob answers."),(0,r.kt)("li",{parentName:"ol"},"etc.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cat_CCCCC: we are now able to store the ",(0,r.kt)("a",{parentName:"li",href:"#counting-tool"},"counts")," and then offer the term in various relevant contexts at the front end of the site.")),(0,r.kt)("p",null,"'","*"," Youtube footage: plus the start time of where the term is mentioned first or most extensively."),(0,r.kt)("h2",{id:"why-not-a-term-content-file-per-level-of-understanding"},"Why not a term-content file per level of understanding?"),(0,r.kt)("p",null,"Per term various levels of explanation (plus related further readings) are offered within one source file ",(0,r.kt)("inlineCode",{parentName:"p"},".md"),'. The reason for this is that every individual learner is different. Within the source file of a term we can label "stars" to both questions and answers, compliant to what\'s explained in this section of the README.md file : ',(0,r.kt)("a",{parentName:"p",href:"/README.md#levels-of-understanding"},"Levels of Understanding")),(0,r.kt)("p",null,'By offering "everything we have" about a certain term in one file, a reader is able to identify herself / himself with a certain level in a specific context and "filter the stars" in an eye blink.'),(0,r.kt)("h2",{id:"whats-the-whole-point-of-managing-wot-terms-in-a-sheet"},"What's the whole point of managing WOT terms in a sheet?"),(0,r.kt)("p",null,"Three major applications:"),(0,r.kt)("p",null,"Being the home of our terms maintenance, we ",(0,r.kt)("a",{parentName:"p",href:"./load-toip-glossary-in-weboftrust-github-page.md"},"load ToIP glossary")," and generate our Jekyll ",(0,r.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/"},"static content site")," on Github. This whole process is steered with the content in the ",(0,r.kt)("em",{parentName:"p"},"Terms WOT manage sheet"),"."),(0,r.kt)("p",null,"Any resource that mentions WebofTrust terms can be much easier enriched with the use of ",(0,r.kt)("em",{parentName:"p"},"Terms WOT manage sheet"),".\nFor example, we can create a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/how%5C%20we%5Cdid/create-terms-link-table.md"},"terms link table for any footage")," from the sheet Terms WOT manage sheet."),(0,r.kt)("p",null,"Integration and synchronisation with other glossaries and destination information sources is possible by maintenance of Key and Foreign Keys in ",(0,r.kt)("em",{parentName:"p"},"Terms WOT manage sheet"),"."),(0,r.kt)("p",null,"This is a non-exhaustive list of application options."))}c.isMDXComponent=!0},77964:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Terms-wot-manage-screen-example-24bbfca4f566f29a41a9024396966af2.png"},88523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/csv-utf-8-save-as-46a64cc6223bb7c50d83800294177006.png"},45509:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rename-csv-to-txt1-1a6272c4d15eb6d2f678a220ff3c497c.png"},48945:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rename-csv-to-txt2-3b0293ba337dc53df2414f03f70b0117.png"}}]);