"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[56643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},I=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=h(n),I=i,u=d["".concat(s,".").concat(I)]||d[I]||c[I]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=I;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}I.displayName="MDXCreateElement"},67075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=n(87462),i=(n(67294),n(3905));const r={},o="{#section .unnumbered}",l={unversionedId:"test/gleif-legal/2022-11-01_GLEIF-Identifier-GF-Prep-1.0-Publication_v0.6_work",id:"test/gleif-legal/2022-11-01_GLEIF-Identifier-GF-Prep-1.0-Publication_v0.6_work",title:"{#section .unnumbered}",description:"section .unnumbered}",source:"@site/docs/test/gleif-legal/2022-11-01_GLEIF-Identifier-GF-Prep-1.0-Publication_v0.6_work.md",sourceDirName:"test/gleif-legal",slug:"/test/gleif-legal/2022-11-01_GLEIF-Identifier-GF-Prep-1.0-Publication_v0.6_work",permalink:"/WOT-terms/docs/test/gleif-legal/2022-11-01_GLEIF-Identifier-GF-Prep-1.0-Publication_v0.6_work",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/test/gleif-legal/2022-11-01_GLEIF-Identifier-GF-Prep-1.0-Publication_v0.6_work.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/WOT-terms/docs/test/gleif-legal/2022-10-28_Qualified-vLEI-Issuer-vLEI-Identifer-Credential-GF-Prep-1.0-Publication_v0.9_work"},next:{title:"Introduction",permalink:"/WOT-terms/docs/test/gleif-legal/2022-11-22_Legal-Entity-vLEI-Credential-GF-Prep-1.0-Publication_v0.12_work"}},s={},h=[{value:"Highest Duty of Care",id:"highest-duty-of-care",level:2},{value:"Self-Certifying (Autonomic) Identifiers",id:"self-certifying-autonomic-identifiers",level:2},{value:"Cryptographic Root of Trust",id:"cryptographic-root-of-trust",level:2}],p={toc:h},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"section .unnumbered"},""),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This is a Controlled Document of the GLEIF verifiable LEI (vLEI) Ecosystem Governance Framework. It is the authoritative Governance Framework for the purpose, principles, policies, and specifications that apply to the use of the GLEIF Root Autonomic Identifier (AID) and its GLEIF Delegated AIDs in the vLEI Ecosystem."),(0,i.kt)("h1",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"All terms in First Letter Capitals are defined in the vLEI Glossary."),(0,i.kt)("h1",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"The GLEIF Root AID provides the Root of Trust for the ecosystem tree of trust. Each branch in that tree is a Chain of Trust. The Delegated AID Chain of Trust branch provides trust for delegated GLEIF AIDs and Qualified vLEI Issuer Delegated AIDs. The vLEI Chain of Trust branch, that attaches to the Delegated AID Chain of Trust branch, provides trust for all vLEIs within the vLEI ecosystem."),(0,i.kt)("h1",{id:"scope .unnumbered"},"Scope"),(0,i.kt)("p",null,"The scope of this Identifier Governance Framework is limited to the GLEIF Root AID and its Delegated AIDs."),(0,i.kt)("h1",{id:"principles"},"Principles"),(0,i.kt)("p",null,"The following principles guide the development of policies in this Identifier Governance Framework. Note that they apply ",(0,i.kt)("strong",{parentName:"p"},"in addition to")," the Core Policies defined in the vLEI Ecosystem Governance Framework."),(0,i.kt)("h2",{id:"highest-duty-of-care"},"Highest Duty of Care"),(0,i.kt)("p",null,"GLEIF shall exercise the highest duty of care in generating and administering the GLEIF AID and all its Delegated AIDs as these are the security foundation of the entire vLEI Ecosystem."),(0,i.kt)("h2",{id:"self-certifying-autonomic-identifiers"},"Self-Certifying (Autonomic) Identifiers"),(0,i.kt)("p",null,"All identifiers in the vLEI Ecosystem shall be self-certifying identifiers (specifically KERI Autonomic Identifiers or AIDs), i.e., it must be possible to verify directly using cryptography alone as defined by the Key Event Receipt Infrastructure (KERI) protocol that the identifier was generated from a specific set of cryptographic key pair(s)."),(0,i.kt)("h2",{id:"cryptographic-root-of-trust"},"Cryptographic Root of Trust"),(0,i.kt)("p",null,"All AIDs in the vLEI Ecosystem shall be generated from a random number seed large enough to provide adequate cryptographic security for the branch of the tree of trust that provides the Chain of Trust for which a given AID is the head."),(0,i.kt)("h1",{id:"aid-generation"},"AID Generation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"An AID conformant with this Governance Framework MUST be created from two sets of asymmetric signing key pairs generated from a cryptographically-secure pseudo-random number generator (SPRNG) or a true random number generator with at least 128 bits of cryptographic Root (see section 3.1 of Technical Requirements Part 1 KERI Infrastructure).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The AID MUST then be derived from a cryptographic digest of a serialization of the public keys of the first set of key pairs and a cryptographic digest of second set of key pairs, as well as any other identifiers and configuration parameters associated with the supporting infrastructure for the Root Identifier as specified in the Technical Requirements Part 1 KERI Infrastructure.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The cryptographic digest MUST have at least 128 bits of cryptographic strength."))),(0,i.kt)("h1",{id:"aid-controllers"},"AID Controllers"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All Controllers MUST establish their own Private Key Store.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All Controllers MUST keep their private keys secret.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A given Controller MUST control one and only one key pair from each set of keys.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The KERI protocol MUST be used to transfer control authority from one set of keys to another.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Continuity and Survivorship"),(0,i.kt)("p",{parentName:"li"},"a.  GLEIF MUST have a Continuity Policy for the survival of control authority of all Controllers for the GLEIF Root AID and its Delegated AIDs, including Escrow Agents."),(0,i.kt)("p",{parentName:"li"},"b.  QVIs and Legal Entities SHOULD have a Continuity Policy for the survival of control authority of their Controllers."))),(0,i.kt)("h1",{id:"gleif-aid-genesis"},"GLEIF AID Genesis"),(0,i.kt)("p",null,"The policies in this section apply to the genesis event for the GLEIF Root AID, the GLEIF Internal Delegated AID (GIDA) and the GLEIF External Delegated AID (GEDA)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"GLEIF MUST establish a list of initial GLEIF Controllers that specifies:"),(0,i.kt)("p",{parentName:"li"},"a.  The legal identity of each Controller."),(0,i.kt)("p",{parentName:"li"},"b.  Which Controllers shall control the GLEIF Root AID, the GIDA and the GEDA."),(0,i.kt)("p",{parentName:"li"},"c.  A set of policies MUST be put in place that ensure fault-tolerance with respect to common mode failures of the multi-sig signing authority of the set of GLEIF Controllers, e.g., a Designated Survivor policy and/or restrictions on joint travel and in-person attendance of meetings).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"GLEIF MUST establish ",(0,i.kt)("del",{parentName:"p"},"a")," real-time Out-of-Band Interaction (OOBI) session(s) in which all initial GLEIF Controllers are present. An example is a continuous web meeting attended by all parties on both audio and video. The essential feature is that there is a mutual live presentation by all participants that verifies their live participation in the session."),(0,i.kt)("p",{parentName:"li"},"a.  ",(0,i.kt)("del",{parentName:"p"},"This")," Each session MUST be recorded, and the recording stored in high-security storage.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All GLEIF Controllers MUST mutually authenticate each other's legal identities before proceeding with any further steps. An example is each Controller visually presenting one or more legal identity credentials for all other Controllers to verify against the list of initial GLEIF Controllers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Root AID GLEIF Authorized Representative, the Internal Delegated AID GLEIF Authorized Representative and the External Delegated AID GLEIF Authorized Representative are GLEIF Controllers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Creation of GLEIF Root AID"),(0,i.kt)("p",{parentName:"li"},"The following steps MUST be performed in the order listed and completed during ",(0,i.kt)("del",{parentName:"p"},"this")," each OOBI session for the GLEIF Root AID."),(0,i.kt)("p",{parentName:"li"},"a.  Each Root AID GLEIF Authorized Representative (Root GAR) MUST generate its own single signature AID that is a participating member in the group of AIDs that will be used to create the GLEIF Root AID."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,i.kt)("p",{parentName:"li"},"a.  Each Root GAR MUST use an OOBI protocol (such as a QR code or live chat) to share its own AID and Service Endpoints with the other Root GAR. For each Root GAR this provides the participating AID and the service endpoint whereby the other Root GARs may obtain the Key Event Log (KEL) of its participating AID."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,i.kt)("p",{parentName:"li"},"b.  Each Root GAR MUST send a Challenge Message to every other Root GAR as defined in the Technical Requirements Part 1 for the purposes of cryptographic authentication of their Root GAR AID. The Challenge Message MUST be unique to ",(0,i.kt)("del",{parentName:"p"},"the")," each OOBI session."),(0,i.kt)("p",{parentName:"li"},"c.  Each Root GAR MUST verify in real time that a response to the Challenge Message was received from every other Root GAR."),(0,i.kt)("p",{parentName:"li"},"d.  Each Root GAR MUST verify the signature of every other Root GAR."),(0,i.kt)("p",{parentName:"li"},"e.  One of the Root GARs MUST be designated as the Root AID GLEIF Authorized Representative Lead (Root GAR Lead)."),(0,i.kt)("p",{parentName:"li"},"f.  The Root GAR Lead MUST select the AIDs from the set of Root GAR s for the ordered set of authorized participant members in the multi-sig group and configure and approve the weight threshold and ordered set of participants for both the current and next set and threshold of participants."),(0,i.kt)("p",{parentName:"li"},"g.  The Root GAR Lead MUST select the AIDs and Service Endpoints for the GLEIF Root AID Witness Pool."),(0,i.kt)("p",{parentName:"li"},"h.  Using the current public key and the next public key digest from each of the participating AID Inception Events and the Root Witness AIDs, the Root GAR Lead MUST generate the GLEIF Root AID Inception Event and publish this to the other Root GARs and to the Root AID Witnesses designated by that Inception Event. The published Inception Event includes as an attachment OOBIs for each of the Root AID Witnesses."),(0,i.kt)("p",{parentName:"li"},"i.  Each Root GAR MUST verify the set of public keys, the next public key digest, the threshold, the next threshold, and Root AID Witness identifiers in the Root AID Inception Event."),(0,i.kt)("p",{parentName:"li"},"j.  Each Root GAR MUST verify the set of service endpoints for the Root AID Witnesses."),(0,i.kt)("p",{parentName:"li"},"k.  Each Root GAR MUST sign and publish to the Root AID Witnesses their signature on the Root AID Inception Event."),(0,i.kt)("p",{parentName:"li"},"l.  Each Root GAR MUST verify that the Root AID Inception Event is fully witnessed by every Root AID Witness.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Creation of the GLEIF Internal Delegated AIDs"),(0,i.kt)("p",{parentName:"li"},"The following steps MUST be performed in the order listed and completed during ",(0,i.kt)("del",{parentName:"p"},"this")," each OOBI session for each of the two GLEIF Delegated AIDs, namely, the GLEIF Internal Delegated AID (GIDA) in this section, and the GLEIF External Delegated AID (GEDA) in section 7."),(0,i.kt)("p",{parentName:"li"},"a.  Each Internal Delegated AID GLEIF Authorized Representative (Internal GAR) that is a participating member in the group of AIDs MUST generate its own single signature AID that will be used to create the GIDA."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,i.kt)("p",{parentName:"li"},"a.  Each Internal GAR MUST use an OOBI protocol (such as a QR code or live chat) to share its own AID and Service Endpoints with the other Internal GARs. For each Internal GAR, this provides the participating AID and the service endpoint whereby the other Internal GARs may obtain the KEL of its participating AID."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,i.kt)("p",{parentName:"li"},"b.  Each Internal GAR MUST send a Challenge Message to every other Internal GAR as defined in the Technical Requirements Part 1 KERI Infrastructure for the purposes of cryptographic authentication of their GIDA. The Challenge Message MUST be unique to ",(0,i.kt)("del",{parentName:"p"},"the")," each OOBI session."),(0,i.kt)("p",{parentName:"li"},"c.  Each Internal GAR MUST verify in real time that a response to the Challenge Message was received from every other Internal GAR."),(0,i.kt)("p",{parentName:"li"},"d.  Each Internal GAR MUST verify the signature of every other Internal GAR."),(0,i.kt)("p",{parentName:"li"},"e.  One of the Internal GAR s MUST be designated as the Internal Delegated AID GLEIF Authorized Representative (Internal GAR Lead)"),(0,i.kt)("p",{parentName:"li"},"f.  The Internal GAR Lead MUST select the AIDs and Service Endpoints for the GLEIF Internal Delegated AID Witness Pool."),(0,i.kt)("p",{parentName:"li"},"g.  The Internal GAR Lead MUST select the AIDs from the set of Internal GAR for the ordered set of authorized participant members in the multi-sig group and configure and approve the weight threshold and ordered set of participants for both the current and next set and threshold of participants."),(0,i.kt)("p",{parentName:"li"},"h.  Using the current public key and the next public key digest from each of the participating AID Inception Events, the Internal Delegated Witness AIDs, and the GLEIF Root AID, the Internal GAR Lead MUST generate the GLEIF Internal Delegated AID Inception Event and publish this to the other Internal GARs and to the Delegated AID Witnesses designated by that Inception Event. The published Inception Event includes as an attachment OOBIs for each of the Internal Delegated AID Witnesses."),(0,i.kt)("p",{parentName:"li"},"i.  Each Internal GAR MUST verify the set of public keys, the next public key digest, the Witness identifiers, the threshold, the next threshold, and the Root AID in the Internal Delegated AID Inception Event."),(0,i.kt)("p",{parentName:"li"},"j.  Each Internal GAR MUST verify the set of Witness endpoints for the GIDA."),(0,i.kt)("p",{parentName:"li"},"k.  Each Internal GAR MUST sign and publish to the Internal Delegated AID Witnesses its signature on the Internal Delegated AID Inception Event."),(0,i.kt)("p",{parentName:"li"},"l.  Each Internal GAR MUST verify that the Internal Delegated AID Inception Event is fully witnessed by every Witness.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Creation of the GLEIF External Delegated AIDs"),(0,i.kt)("p",{parentName:"li"},"The following steps MUST be performed in the order listed and completed during ",(0,i.kt)("del",{parentName:"p"},"this")," each OOBI session for each of the two GLEIF Delegated AIDs, namely, the GLEIF Internal Delegated AID (GIDA) in section 6 and the GLEIF External Delegated AID (GEDA) in this section."),(0,i.kt)("p",{parentName:"li"},"a.  Each External Delegated AID GLEIF Authorized Representative (External GAR) that is a participating member in the group of AIDs MUST generate its own single signature AID that will be used to create the GEDA."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,i.kt)("p",{parentName:"li"},"a.  Each External GAR MUST use an OOBI protocol (such as a QR code or live chat) to share its own AID and Service Endpoints with the other External GARs. For each External GAR, this provides the participating AID and the service endpoint whereby the other External GARs may obtain the KEL of its participating AID."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,i.kt)("p",{parentName:"li"},"b.  Each External GAR MUST send a Challenge Message to every other External GAR as defined in the Technical Requirements Part 1 KERI Infrastructure for the purposes of cryptographic authentication of their GEDA. The Challenge Message MUST be unique to ",(0,i.kt)("del",{parentName:"p"},"the")," each OOBI session."),(0,i.kt)("p",{parentName:"li"},"c.  Each External GAR MUST verify in real time that a response to the Challenge Message was received from every other External GAR."),(0,i.kt)("p",{parentName:"li"},"d.  Each External GAR MUST verify the signature of every other External GAR."),(0,i.kt)("p",{parentName:"li"},"e.  One of the External GARs MUST be designated as the External Delegated AID GLEIF Authorized Representative Lead (External GAR Lead)."),(0,i.kt)("p",{parentName:"li"},"f.  The External GAR Lead MUST select the AIDs and Service Endpoints for the GLEIF External Delegated AID Witness Pool."),(0,i.kt)("p",{parentName:"li"},"g.  The External GAR Lead MUST select the AIDs from the set of External GARs for the ordered set of authorized participant members in the multi-sig group and configure and approve the weight threshold and ordered set of participants for both the current and next set and threshold of participants."),(0,i.kt)("p",{parentName:"li"},"h.  Using the current public key and the next public key digest from each of the participating AID Inception Events, the External Delegated Witness AIDs, and the GLEIF Root AID, or the External GAR Lead MUST generate the GLEIF External Delegated AID Inception Event and publish this to the other External GARs and to the External Delegated AID Witnesses designated by that Inception Event. The published Inception Event includes as an attachment OOBIs for each of the External Delegated AID Witnesses."),(0,i.kt)("p",{parentName:"li"},"i.  Each External GAR MUST verify the set of public keys, the next public key digest, the Witness identifiers, the threshold, the next threshold, and the Root AID in the External Delegated AID Inception Event."),(0,i.kt)("p",{parentName:"li"},"j.  Each External GAR MUST verify the set of Witness endpoints for the GEDA."),(0,i.kt)("p",{parentName:"li"},"k.  Each External GAR MUST sign and publish to the External Delegated AID Witnesses their signature on the External Delegated AID Inception Event."),(0,i.kt)("p",{parentName:"li"},"l.  Each External GAR MUST verify that the External Delegated AID Inception Event is fully witnessed by every Witness.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rotation Event to delegate the GLEIF Internal Delegated AIDs"),(0,i.kt)("p",{parentName:"li"},"The following steps MUST be performed in the order listed and completed during this OOBI session for each of the two GLEIF Delegated AIDs, namely, the GLEIF Internal Delegated AID (GIDA) in this section and the GLEIF External Delegated AID (GEDA) in section 9."),(0,i.kt)("p",{parentName:"li"},"The anchor in this Rotation Event is the mechanism by which the delegation is authorized by the Delegator. The Rotation Event with the anchoring digest of the Inception Event of the Delegated AID, when Fully Signed, is a verifiable cryptographic commitment to the delegation. The Delegated AIDs are not verifiable until they are anchored in the KEL of the Delegator e.g., the Root AID. A new event must be created to include these anchors."),(0,i.kt)("p",{parentName:"li"},"(Delegation in KERI is cooperative. It requires a cryptographic commitment from both the Delegator and the Delegate.)"),(0,i.kt)("p",{parentName:"li"},"a.  A threshold satisficing subset of Internal GARs MUST each rotate their participating AIDs."),(0,i.kt)("p",{parentName:"li"},"b.  Using the current public key, the next public key digest from each of the participating AID Rotation Events, and the digest of the GLEIF Internal Delegated AID Inception Event, the Internal GAR Lead MUST generate a GLEIF Internal Delegated AID Rotation Event and publish this to the other participating Internal GARs and to the Root AID Witnesses."),(0,i.kt)("p",{parentName:"li"},"c.  Each Internal GAR MUST verify the set of public keys, the next public key digest, and delegated Inception Event digests in that Rotation Event."),(0,i.kt)("p",{parentName:"li"},"d.  Each Internal GAR MUST sign and publish to the Root AID Witnesses their signature on the Root AID Rotation Event."),(0,i.kt)("p",{parentName:"li"},"e.  Each Internal GAR MUST verify that the Root AID Rotation Event is fully witnessed by every Root AID Witness.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rotation Event to delegate the GLEIF External Delegated AIDs"),(0,i.kt)("p",{parentName:"li"},"The following steps MUST be performed in the order listed and completed during this OOBI session for each of the two GLEIF Delegated AIDs, namely, the GLEIF Internal Delegated AID (GIDA) in section 8 and the GLEIF External Delegated AID (GEDA) on this section."),(0,i.kt)("p",{parentName:"li"},"The anchor in this Rotation Event is the mechanism by which the delegation is authorized by the Delegator. The Rotation Event with the anchoring digest of the Inception Event of the Delegated AID, when Fully Signed, is a verifiable cryptographic commitment to the delegation. The Delegated AIDs are not verifiable until they are anchored in the KEL of the Delegator e.g. the Root AID. A new event must be created to include these anchors."),(0,i.kt)("p",{parentName:"li"},"(Delegation in KERI is cooperative. It requires a cryptographic commitment from both the Delegator and the Delegate.)"),(0,i.kt)("p",{parentName:"li"},"a.  A threshold satisficing subset of External GARs MUST each rotate their participating AIDs."),(0,i.kt)("p",{parentName:"li"},"b.  Using the current public key, the next public key digest from each of the participating AID Rotation Events, and the digest of GLEIF External Delegated AID Inception Event, the External GAR Lead MUST generate a GLEIF External Delegated AID Rotation Event and publish this to the other participating External GARs and to the Root AID Witnesses."),(0,i.kt)("p",{parentName:"li"},"c.  Each External GAR MUST verify the set of public keys, the next public key digest, and delegated Inception Event digests in that Rotation Event."),(0,i.kt)("p",{parentName:"li"},"d.  Each External GAR MUST sign and publish to the Root AID Witnesses their signature on the Root AID Rotation Event."),(0,i.kt)("p",{parentName:"li"},"e.  Each External GAR MUST verify that the Root AID Rotation Event is fully witnessed by every Root AID Witness."),(0,i.kt)("p",{parentName:"li"},"f.  Each participating External GAR MUST verify the delegated Inception Event digest in that Interaction Event."),(0,i.kt)("p",{parentName:"li"},"g.  Each participating External GAR MUST sign and publish to the GLEIF External Delegated AID Witnesses their signature on the GLEIF External Delegated AID Interaction Event."),(0,i.kt)("p",{parentName:"li"},"h.  Each participating External GAR MUST verify that the GLEIF External Delegated AID Interaction Event is fully witnessed by every Witness."))),(0,i.kt)("h1",{id:"publication-of-gleif-root-aid-and-gleif-delegated-aids"},"Publication of GLEIF Root AID and GLEIF Delegated AIDs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The GLEIF Root AID and GLEIF Delegated Internal and External AIDs MUST be published in a sufficiently strongly correlated and fault-tolerant manner to establish them as unique AIDs for GLEIF.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The set of publication points MUST include at least 4 of the list of publication points initially (highlighted below) following the creation of the GLEIF Root AID and GLEIF Delegated Internal and External AIDs."),(0,i.kt)("p",{parentName:"li"},"a.  The GLEIF HTTPS website."),(0,i.kt)("p",{parentName:"li"},"b.  The HTTPS website of the GLEIF Regulatory Oversight Committee."),(0,i.kt)("p",{parentName:"li"},"c.  The HTTPS websites of all QVIs."),(0,i.kt)("p",{parentName:"li"},"d.  In the KERI Event Log for all GLEIF KERI Witnesses."),(0,i.kt)("p",{parentName:"li"},"e.  Published to at least 3 international newspapers in separate national jurisdictions (applies only to the GLEIF Root AID)."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"These publications are: Financial Times (London), The Wall Street Journal (American editon) and Regulation Asia.\n")),(0,i.kt)("p",{parentName:"li"},"f.  Published to github repositories"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"The Web of Trust github repository\n\nPublic GLEIF-controlled github repository\n")),(0,i.kt)("p",{parentName:"li"},"g.  Published to public registries"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"IANA (IETF RFCs) registries\n\nISO registries\n")))),(0,i.kt)("h1",{id:"abandonment"},"Abandonment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Voluntary abandonment")),(0,i.kt)("p",null,"GLEIF MUST abandon its GLEIF Root AID if GLEIF no longer holds the role of root of trust for the vLEI Ecosystem."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Private key compromise or natural disaster")),(0,i.kt)("p",null,"If in the extremely unlikely event of the failure of all key recovery provisions specified in Technical Requirements Part 1: KERI Infrastructure, GLEIF MUST abandon its Root AID and Delegated Internal and External AIDs and create and publish its new Root AID and Delegated Internal and External AIDs."))}c.isMDXComponent=!0}}]);