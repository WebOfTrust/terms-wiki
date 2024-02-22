"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[40657],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return o?i.createElement(m,a(a({ref:t},c),{},{components:o})):i.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},19736:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=o(87462),n=(o(67294),o(3905));const r={},a="Contributors' Guide",s={unversionedId:"concepts/how-to/contribute-to-weboftrust-github",id:"concepts/how-to/contribute-to-weboftrust-github",title:"Contributors' Guide",description:"Introduction",source:"@site/docs/06_concepts/how-to/contribute-to-weboftrust-github.md",sourceDirName:"06_concepts/how-to",slug:"/concepts/how-to/contribute-to-weboftrust-github",permalink:"/WOT-terms/docs/concepts/how-to/contribute-to-weboftrust-github",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/WOT-terms/docs/concepts/concepts"},next:{title:"Create a basic ACDC graph",permalink:"/WOT-terms/docs/concepts/how-to/create-a-basic-acdc-graph"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Legal &amp; Licensing",id:"legal--licensing",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to Start Contributing",id:"how-to-start-contributing",level:2},{value:"Contribution Guidelines",id:"contribution-guidelines",level:2},{value:"Commit Message Guidelines",id:"commit-message-guidelines",level:3},{value:"Branching Strategy",id:"branching-strategy",level:3},{value:"Process to Submit Changes",id:"process-to-submit-changes",level:2},{value:"Reporting Bugs or Requesting Features",id:"reporting-bugs-or-requesting-features",level:2},{value:"Code of Conduct and Respect",id:"code-of-conduct-and-respect",level:2},{value:"Getting Help",id:"getting-help",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contributors-guide"},"Contributors' Guide"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Welcome to kerisse's contribution guide! This project aims to develop documentation and educational resources surrounding the KERI standards, protocols, and tools developed in WebOfTrust on github. We deeply appreciate the time and effort of contributors like you!"),(0,n.kt)("h2",{id:"legal--licensing"},"Legal & Licensing"),(0,n.kt)("p",null,"This project has a split license whose details are contained ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/LICENSE.md"},"here")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before you start, make sure you:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are somewhat familiar with the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/WebOfTrust/keri"},"KERI, ACDC, CESR standards and the KERI whitepapers"),".  Jargon isn't always the best, but it does speed communication with maintainers whose time is often in short supply and appreciate clarity in all things.  The purpose of kerisse is really to make these digestable in small pieces to an audience that doesn't have time to pore over all those papers so any contributer should make sure that they've at least developed a passing references with the things contained in these papers.")),(0,n.kt)("h2",{id:"how-to-start-contributing"},"How to Start Contributing"),(0,n.kt)("p",null,"The KERISSE (like the KERI) community welcomes ",(0,n.kt)("a",{parentName:"p",href:"https://opensource.guide/how-to-contribute/"},"all kinds of contributions"),"."),(0,n.kt)("p",null,"For simple contributions like fixing typos sometimes you can just submit a naked PR with a title like \"I'm fixing a spelling issue in x,y,z\".  If these PRs are small often times they'll just get merged without further review.  Typos or grammatical errors are human nature and probably don't require a great deal of process to fix."),(0,n.kt)("p",null,"A really simple way to contribute is just to use KERISSE and spread the word.  When people need educational resources, have questions about particular terms, or KERISSE has the information related to their query, linking the resource can often times be a great way to advertise that the project exists and is useful so they can help themselves in the future.  Let people know about KERISSE and create a welcoming community by actively participating and helping with what you know, and educating and contributing resources to KERISSE and talking about them is helpful to grow."),(0,n.kt)("p",null,"Issues and discussions are meant to be discussed and commented upon.  Even a +1 to an issue that you're also experiencing can help the core maintainers decide where to focus their energies.  Discussions can help provide clarity if things aren't exactly clear.  Feel free to contribute (but also note the homework in ",(0,n.kt)("a",{parentName:"p",href:"#prerequisites"},"PREREQUISITES"),", its frustrating for people to explain things that are already explained elsewhere)."),(0,n.kt)("p",null,"However, this particular file is more about contributing resources to KERISSE.  The general principal in this (and all open source really) is if you can think of a way that things might be better, instead of just suggesting it or discussing it, often times its a good idea to do some work to show what/how/when an idea might look like or contributing resources.  Educational Material >> discussion 9 times out of ten.  Balanced of course with the caveat not to go off into the ivory tower for months and do lots of work before presenting your work and finding out that the community doesn't like it.  Small examples, howtos, tutuorials, or snippets are often best.  From there we can build up to more extensive efforts.  The rest of the details of contributing resources are below."),(0,n.kt)("h2",{id:"contribution-guidelines"},"Contribution Guidelines"),(0,n.kt)("h3",{id:"commit-message-guidelines"},"Commit Message Guidelines"),(0,n.kt)("p",null,"There are no hard and fast guidelines but it is helpful to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Descriptive, to the point messages are ideal"),(0,n.kt)("li",{parentName:"ul"},"Link to the issue you're trying to solve with a message of how the commit does or doesn't solve that issue."),(0,n.kt)("li",{parentName:"ul"},'Be sure to note important issues for checkpoint commits like "does not build"'),(0,n.kt)("li",{parentName:"ul"},"Most importantly, the commit message should explain the WHY of all the code changes.  When reviewing, reviewers will be confused if code changes for things you didn't list in the commit aren't there.")),(0,n.kt)("h3",{id:"branching-strategy"},"Branching Strategy"),(0,n.kt)("p",null,"Branch from development, name your branches descriptively, something like ",(0,n.kt)("inlineCode",{parentName:"p"},"howto-keri-witness-instantiation")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"tutorial-keri-ssh"),".  If you're fixing an issue with previously created material or changing something about kerisse that already exists, be sure to file an issue on github to discuss with maintainers your particular issue or issue you're trying to fix.  Name the branch and indicate in your PR what issue you're trying to solve.  When you have created or fixed and the work is ready for review, submit a PR to WebOfTrust/kerisse.  If you need feedback it can also be appropriate to submit a ",(0,n.kt)("strong",{parentName:"p"},"draft")," PR to this repository and ask for comments."),(0,n.kt)("h2",{id:"process-to-submit-changes"},"Process to Submit Changes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Find and issue and let the maintainers on discord (in the #kerisse channnel) know you're working on it (and maybe comment on the issue to let people know you're picking it up) or what you'd like to create."),(0,n.kt)("li",{parentName:"ol"},"Create/fix"),(0,n.kt)("li",{parentName:"ol"},"Submit a PR to ","[WebOfTrust/kerisse]"),(0,n.kt)("li",{parentName:"ol"},"Let maintainers know on discord in the appropriate channel"),(0,n.kt)("li",{parentName:"ol"},"Come to Thursday KERI development meeting to discuss if at all possible (sometimes its easier for maintainers to provide feedback directly rather than through async text, particularly if its a large or complex change)."),(0,n.kt)("li",{parentName:"ol"},"Iterate 2-6 if your change needs some fixes/updates")),(0,n.kt)("h2",{id:"reporting-bugs-or-requesting-features"},"Reporting Bugs or Requesting Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SEARCH FOR THE BUG OR FEATURE IN THE CURRENT ISSUES IN REPO"),".  If it already exists, add a comment/script/test/+1/whatever there.  Duplicates BAD."),(0,n.kt)("li",{parentName:"ul"},"If the bug/feature doesn't exist create an issue wherein you describe the bug, feature, or issue with as much detail as possible (but maybe not enough that you overload the reader with details)."),(0,n.kt)("li",{parentName:"ul"},"Code snippets, scripts, or test cases should be added to the issue if possible."),(0,n.kt)("li",{parentName:"ul"},"Message in the appropriate discord channel to let people know about your bug/feature/issue, but remember that maintainers maintain at their own pace and discretion on issues of their choosing.  Its best not to ping them more than once a week.  As with all open source, if its an ultra critical bug/feature for you, cash bounties certainly incentivize people to pay attention and offer to help you directly.")),(0,n.kt)("h2",{id:"code-of-conduct-and-respect"},"Code of Conduct and Respect"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/1148629222647148624/1148686277269532703/1148686279945498624"},"From the discord channel")),(0,n.kt)("p",null,"We are committed to providing a friendly, safe and welcoming environment for all, regardless of level of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other similar characteristic."),(0,n.kt)("p",null,"Please avoid using overtly sexual aliases or other nicknames that might detract from a friendly, safe and welcoming environment for all."),(0,n.kt)("p",null,"Please be kind and courteous. There\u2019s no need to be mean or rude."),(0,n.kt)("p",null,"Respect that people have differences of opinion and that every design or implementation choice carries a trade-off and numerous costs. There is seldom a right answer."),(0,n.kt)("p",null,"Please keep unstructured critique to a minimum. If you have solid ideas you want to experiment with, make a fork and see how it works."),(0,n.kt)("p",null,"We will exclude you from interaction if you insult, demean or harass anyone. That is not welcome behavior. We interpret the term \u201charassment\u201d as including the definition in the Citizen Code of Conduct; if you have any lack of clarity about what might be included in that concept, please read their definition. In particular, we don\u2019t tolerate behavior that excludes people in socially marginalized groups."),(0,n.kt)("p",null,"Private harassment is also unacceptable. No matter who you are, if you feel you have been or are being harassed or made uncomfortable by a community member, please contact one of the channel admins immediately. Whether you\u2019re a regular contributor or a newcomer, we care about making this community a safe place for you and we\u2019ve got your back."),(0,n.kt)("p",null,"Likewise any spamming, trolling, flaming, baiting or other attention-stealing behavior is not welcome.\nAttribution\nAdapted from the Rust Code of Conduct: ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/policies/code-of-conduct"},"https://www.rust-lang.org/policies/code-of-conduct")),(0,n.kt)("h2",{id:"getting-help"},"Getting Help"),(0,n.kt)("p",null,"For questions or clarifications, reach out via:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Discord: ",(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/edGDD632tP"},"https://discord.gg/edGDD632tP")),(0,n.kt)("li",{parentName:"ul"},"KERI Development Meetings: ","[https://github.com/WebOfTrust/keri#implementors-call]"),(0,n.kt)("li",{parentName:"ul"},"ACDC Standards Meeting@TOIP (technically must be a member of ToIP to contribute): ","[https://github.com/WebOfTrust/keri#specification-call]")),(0,n.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,n.kt)("p",null,"Thanks to all our wonderful contributors. "),(0,n.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WebOfTrust"},"Related Projects"))))}p.isMDXComponent=!0}}]);