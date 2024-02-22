"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[62514],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(i),f=a,u=p["".concat(d,".").concat(f)]||p[f]||h[f]||o;return i?n.createElement(u,r(r({ref:t},c),{},{components:i})):n.createElement(u,r({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},19565:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const o={},r=void 0,s={unversionedId:"resources/mdfiles/draft-pfeairheller-did-keri",id:"resources/mdfiles/draft-pfeairheller-did-keri",title:"draft-pfeairheller-did-keri",description:'titlekeri DID Method"',source:"@site/docs/05_resources/mdfiles/draft-pfeairheller-did-keri.md",sourceDirName:"05_resources/mdfiles",slug:"/resources/mdfiles/draft-pfeairheller-did-keri",permalink:"/WOT-terms/docs/resources/mdfiles/draft-pfeairheller-did-keri",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"draft-pfeairheller-cesr-proof",permalink:"/WOT-terms/docs/resources/mdfiles/draft-pfeairheller-cesr-proof"},next:{title:"draft-pfeairheller-ptel",permalink:"/WOT-terms/docs/resources/mdfiles/draft-pfeairheller-ptel"}},d={},l=[{value:"author:",id:"author",level:2},{value:"Events",id:"events",level:2},{value:"Key Event Log",id:"key-event-log",level:2},{value:"Key Event Receipt Log",id:"key-event-receipt-log",level:2},{value:"Key State",id:"key-state",level:2},{value:"Resolver Metadata",id:"resolver-metadata",level:2},{value:"The DID Document",id:"the-did-document",level:2},{value:"Method Name",id:"method-name",level:2},{value:"Method Specific Identifier",id:"method-specific-identifier",level:2},{value:"Create",id:"create",level:2},{value:"Read",id:"read",level:2},{value:"Update",id:"update",level:2},{value:"Deactivate",id:"deactivate",level:2},{value:"Surveillance",id:"surveillance",level:2},{value:"Stored Data Compromise",id:"stored-data-compromise",level:2},{value:"Unsolicited Traffic",id:"unsolicited-traffic",level:2},{value:"Misattribution",id:"misattribution",level:2},{value:"Correlation",id:"correlation",level:2},{value:"Identification",id:"identification",level:2},{value:"Secondary Use",id:"secondary-use",level:2},{value:"Disclosure",id:"disclosure",level:2},{value:"Exclusion",id:"exclusion",level:2},{value:"Key State Verification",id:"key-state-verification",level:2},{value:"Confidentiality Violations, Password Sniffing",id:"confidentiality-violations-password-sniffing",level:2},{value:"Replay Attacks",id:"replay-attacks",level:2},{value:"Message Insertion, Deletion, Modification",id:"message-insertion-deletion-modification",level:2},{value:"Man-In-The-Middle Attacks",id:"man-in-the-middle-attacks",level:2}],c={toc:l},p="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'title: "The did:keri DID Method"\nabbrev: "DID-KERI"\ndocname: draft-pfeairheller-did-keri-latest\ncategory: info'),(0,a.kt)("p",null,"ipr: trust200902\narea: TODO\nworkgroup: TODO Working Group\nkeyword: Internet-Draft"),(0,a.kt)("p",null,"stand_alone: yes\nsmart_quotes: no\npi: ","[toc, sortrefs, symrefs]"),(0,a.kt)("h2",{id:"author"},"author:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"name: Phil Feairheller\norganization: GLEIF\nemail: Philip.Feairheller@gleif.org\n")),(0,a.kt)("p",null,"normative:\nCESR:\ntarget: ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ssmith-cesr/"},"https://datatracker.ietf.org/doc/draft-ssmith-cesr/"),"\ntitle: Composable Event Streaming Representation (CESR)\nauthor:\nins: S. Smith\nname: Samuel M. Smith\norg: ProSapien LLC\ndate: 2021"),(0,a.kt)("p",null,"informative:\nKERI:\ntarget: ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1907.02143"},"https://arxiv.org/abs/1907.02143"),"\ntitle: Key Event Receipt Infrastructure (KERI)\nauthor:\nins: S. Smith\nname: Samuel M. Smith\norg: ProSapien LLC\ndate: 2021"),(0,a.kt)("p",null,"tags: IETF, KERI, CESR"),(0,a.kt)("p",null,"--- abstract"),(0,a.kt)("p",null,"KERI provides a means for secure and decentralised key management. This specification defines a DID method based on KERI."),(0,a.kt)("p",null,"--- middle"),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Key Event Receipt Infrastructure is a system for secure self-certifying Identifiers which aims at minimum sufficiency and maximum security. It defines mechanisms for proving the Root of Trust for self-certifying Identifiers and their associated Key State. This spec defines a transform from Key State to DID Document, such that any valid Key Event Log can be processed into a DID Document."),(0,a.kt)("p",null,"A close analogy is did:peer, except that where the data model of did:peer is a DID Document and JSON patches on said Document, the basic data model of did:keri is an append-only log of Key Events. KERI-based Identifiers are suitable for both any-wise and n-wise purposes."),(0,a.kt)("h1",{id:"concepts"},"Concepts"),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"A Key Event is an atomic transaction over the Key State of an Identifier. While all events have some semantic meaning within KERI, only a subset will change the keys in a Key State (rotation and delegated rotation)."),(0,a.kt)("h2",{id:"key-event-log"},"Key Event Log"),(0,a.kt)("p",null,'The Key Event Log is a type of hash-chained data structure from which the Key State of an Identifier can be derived. It can always be used to recreate the state at any point ("event-sourcing").'),(0,a.kt)("h2",{id:"key-event-receipt-log"},"Key Event Receipt Log"),(0,a.kt)("p",null,"The Key Event Receipt Logs are built from receipts of events signed by the witnesses of those events (these are called ",(0,a.kt)("inlineCode",{parentName:"p"},"commitments"),"); these are also append-only but not hash-chained."),(0,a.kt)("h2",{id:"key-state"},"Key State"),(0,a.kt)("p",null,"Key State represents the current values for the keys, witnesses and thresholds for a given identifier, signed by a provider. The signature from the provider signifies that the provider has verified the KEL for the identifier and the result of that verification is the key state. The key state is represented in a Key State Notification Message detailed fully in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/keri/blob/master/kids/kid0003.md#key-state-messages"},"Event Serialization Key State Messages"),". The following fields are defined for a Key State Notification Message:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v"),": Version String"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i"),": Identifier Prefix"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s"),": Sequence Number"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"t"),": Message Type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"d"),": Event Digest (Seal or Receipt)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"p"),": Prior Event Digest"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kt"),": Keys Signing Threshold"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k"),": List of Signing Keys (ordered key set)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n"),": Next Key Set Commitment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wt"),": Witnessing Threshold"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"w"),": List of Witnesses (ordered witness set)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wr"),": List of Witnesses to Remove (ordered witness set)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wa"),": List of Witnesses to Add (ordered witness set)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"c"),": List of Configuration Traits/Modes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a"),": List of Anchors (seals)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"da"),": Delegator Anchor Seal in Delegated Event (Location Seal)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"di"),": Delegator Identifier Prefix in Key State"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rd"),": Merkle Tree Root Digest"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"e"),": Last received Event Map in Key State"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ee"),": Last Establishment Event Map in Key State"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vn"),': Version Number ("major.minor")')),(0,a.kt)("p",null,"Key state notification messages differ depending on whether the signer is using a delegated identifier. The follow examples detail the fields needed for each permutation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'        {\n          "v": "KERI10JSON00011c\\_",\n          "i": "EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM",\n          "s": "2",\n          "t": "ksn",\n          "d": "EAoTNZH3ULvaU6JR2nmwyYAfSVPzhzZ-i0d8JZS6b5CM",\n          "te": "rot",\n          "kt": "1",\n          "k": \\["DaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM"\\],\n          "n": "EZ-i0d8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",\n          "wt": "1",\n          "w": \\["DnmwyYAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULvaU6JR2"\\],\n          "c": \\["eo"\\],\n          "ee":\n            {\n              "s":  "1",\n              "d":  "EAoTNZH3ULvaU6JR2nmwyYAfSVPzhzZ-i0d8JZS6b5CM",\n              "wr": \\["Dd8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CMZ-i0"\\],\n              "wa": \\["DnmwyYAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULvaU6JR2"\\]\n            },\n          "di": "EJZAoTNZH3ULvYAfSVPzhzS6b5CMaU6JR2nmwyZ-i0d8"\n        }\n\n\n        {\n          "v": "KERI10JSON00011c\\_",\n          "i": "EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM",\n          "s": "2",\n          "t": "ksn",\n          "d": "EAoTNZH3ULvaU6JR2nmwyYAfSVPzhzZ-i0d8JZS6b5CM",\n          "te": "rot",\n          "kt": "1",\n          "k": \\["DaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM"\\],\n          "n": "EZ-i0d8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",\n          "wt": "1",\n          "w": \\["DnmwyYAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULvaU6JR2"\\],\n          "c": \\["eo"\\],\n          "ee":\n            {\n              "s":  "1",\n              "d":  "EAoTNZH3ULvaU6JR2nmwyYAfSVPzhzZ-i0d8JZS6b5CM",\n              "wr": \\["Dd8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CMZ-i0"\\],\n              "wa": \\["DnmwyYAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULvaU6JR2"\\]\n            },\n          "di": "EJZAoTNZH3ULvYAfSVPzhzS6b5CMaU6JR2nmwyZ-i0d8"\n        }\n')),(0,a.kt)("h2",{id:"resolver-metadata"},"Resolver Metadata"),(0,a.kt)("p",null,"did:keri defines ",(0,a.kt)("inlineCode",{parentName:"p"},"keyState")," DID Document Metadata (see ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-resolution/#output-documentmetadata"},"DID Document Metadata")," in ","[","[","?DID-RESOLUTION","]","]",")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"keyState")," is the verified state of the KEL for the identifier represented by this DID Doc (See Key State)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n    "didDocument": DID\\_DOCUMENT\\_OBJECT,\n    "didDocumentMetadata": {\n        "keyState":  {\n          "v": "KERI10JSON00011c\\_",\n          "i": "EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM",\n          "t": "ksn",\n          "kt": "1",\n          "k": \\["DaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM"\\],\n          "n": "EZ-i0d8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM",\n          "wt": "1",\n          "w": \\["DnmwyYAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULvaU6JR2"\\],\n          "c": \\["eo"\\],\n          "e":\n            {\n              "s": "2",\n              "t": "rot",\n              "d": "EAoTNZH3ULvaU6JR2nmwyYAfSVPzhzZ-i0d8JZS6b5CM",\n            },\n          "ee":\n            {\n              "s": "1",\n              "d": "EAoTNZH3ULvaU6JR2nmwyYAfSVPzhzZ-i0d8JZS6b5CM",\n              "wr": \\["Dd8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CMZ-i0"\\],\n              "wa": \\["DnmwyYAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULvaU6JR2"\\]\n            },\n          "di": "",\n          "a": {}\n        }\n    }\n}\n')))),(0,a.kt)("h2",{id:"the-did-document"},"The DID Document"),(0,a.kt)("p",null,"The following field MAY appear in a did:keri DID document: ",(0,a.kt)("inlineCode",{parentName:"p"},"verificationMethod")),(0,a.kt)("p",null,"Non-normative note: multiple namespaces using the same DID method could prove control or replay history for one controlling keypair that has been used across multiple ledgers. KERL logs could be stored in a secondary root of trust (i.e., a ledger), and similar or identical resolver metadata could be returned by querying the same identifier there."),(0,a.kt)("p",null,"The following field is not a core field in a did:keri DID document: ",(0,a.kt)("inlineCode",{parentName:"p"},"Services"),". The did:keri method is provided for interoperability for the purpose of using KERI to establish control authority of the current public keys associated with KERI identifier behind the keri:did DID. It is anticipated that KERI tunnel methods (eg. did:indy:sov:keri) will provide these features to enable addition interop."),(0,a.kt)("h1",{id:"the-didkeri-format"},"The did:keri Format"),(0,a.kt)("p",null,"The format for the did:keri method conforms to the ","[","[","DID-CORE","]","]"," specification and is simple. It consists of the ",(0,a.kt)("inlineCode",{parentName:"p"},"did:keri:")," prefix, followed by the identifier prefix."),(0,a.kt)("h2",{id:"method-name"},"Method Name"),(0,a.kt)("p",null,"The method name that identifies this DID method SHALL be: ",(0,a.kt)("inlineCode",{parentName:"p"},"keri")),(0,a.kt)("p",null,"A DID that uses this method MUST begin with the following prefix: ",(0,a.kt)("inlineCode",{parentName:"p"},"did:keri:"),". Per the DID specification, this string MUST be in lowercase. The remainder of the DID, after the prefix, is the method specific identifier (MSI) described below."),(0,a.kt)("h2",{id:"method-specific-identifier"},"Method Specific Identifier"),(0,a.kt)("p",null,"The method specific identifier for the did:keri method is the prefix for a content self-addressing self-certifying identifier."),(0,a.kt)("p",null,"A self-addressing, self-certifying identifier is cryptographically bound to the inception keys used to create it. The rationale and process for the derivation of an identifier is described in detail in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/keri/blob/master/kids/kid0001.md#derivation-codes"},"Derivation Codes")," section of ","[","[","KID0001","]","]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"     did:keri:EXq5YqaL6L48pf0fu7IUhL0JRaU2\\_RxFP0AL43wYn148\n")),(0,a.kt)("h1",{id:"operations"},"Operations"),(0,a.kt)("p",null,"The following section outlines the DID operations for the did:keri method."),(0,a.kt)("h2",{id:"create"},"Create"),(0,a.kt)("p",null,"Creation of a did:keri DID is accomplished by creating, signing and publishing an Inception event. If witnesses are listed in the inception event, the receipts are also required for DID creation to be complete."),(0,a.kt)("p",null,"Detailed steps for prefix derivation are in ","[","[","KID0001","]","]"," and witness configuration in ","[","[","KID0009","]","]",". Inception events are covered in ","[","[","KID0003","]","]","."),(0,a.kt)("h2",{id:"read"},"Read"),(0,a.kt)("p",null,"Steps to resolve a ","`","did:keri:$PREFIX","`"," DID:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find the Key Event Log for the prefix ","`","$PREFIX","`",". The method for discovering the Key Event Log is outside the scope of this specification. Possible implementations include the use of a Distributed Hash Table (DHT), anchoring a KEL in a ledger or the use of a gossip protocol involving a witness network."),(0,a.kt)("li",{parentName:"ol"},"Process the KEL into a Key State, according to the state validation rules/semantics of KERI as defined in ","[","[","KID0008","]","]"),(0,a.kt)("li",{parentName:"ol"},"Create a DID Document with the DID ","`","did:keri:$PREF","`"),(0,a.kt)("li",{parentName:"ol"},"For each key K in the Key State, add a Verification Method to the DID Doc containing K and the appropriate type, with the ID of K being K's prefix form (alternatively, the ID could be an integer of K's index in the current signer list)"),(0,a.kt)("li",{parentName:"ol"},"Add the Key State as DID Document Metadata as defined in Resolver Metadata")),(0,a.kt)("p",null,"Establishment of control authority can be done independently of DID document contents, as long as the Key State is provided in the DID Document Metadata. See Resolver Metadata."),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"Updating a did:keri DID is accomplished by publishing establishment events to the KEL for performing operations such as key rotation and updating signature thresholds, witnesses and delegates."),(0,a.kt)("p",null,"A detailed description of event types, their semantics and uses can be found in ","[","[","KID0003","]","]","."),(0,a.kt)("h2",{id:"deactivate"},"Deactivate"),(0,a.kt)("p",null,"Deactivation of a did:keri DID consists of rotation to 0 controlling keys, which terminates the ability to recover the identifier and indicates that the identifier has been abandoned. Identifiers which are delegated to by an abandoned Identifier are also considered abandoned (delegating Ixn events can no longer be created)."),(0,a.kt)("p",null,"Detailed steps are specified in ","[","[","KID0003","]","]","."),(0,a.kt)("h1",{id:"privacy-considerations"},"Privacy Considerations"),(0,a.kt)("p",null,"A breakdown of the privacy considerations from ","[","[","RFC6973","]","]"," section 5 is provided below."),(0,a.kt)("h2",{id:"surveillance"},"Surveillance"),(0,a.kt)("p",null,"A robust witness network along with consistent witness rotation provides protection from monitoring and association of an individual's activity inside a KERI network."),(0,a.kt)("h2",{id:"stored-data-compromise"},"Stored Data Compromise"),(0,a.kt)("p",null,"For resolvers that simply discover the Key State endorsed by another party in a discovery network, caching policies of that network would guide stored data security considerations. In the event that a resolver is also the endorsing party, meaning they have their own KERI identifier and are verifying the KEL and signing the Key State themselves, leveraging the facilities provided by the KERI protocol (key rotation, witness maintenance, multi-sig) should be used to protect the identities used to sign the Key State."),(0,a.kt)("p",null,"See ","[","[","KID0005","]","]"," for information on KERI key rotation, ","[","[","KID0009","]","]"," for a discussion on witnesses and ","[","[","KID0004","]","]"," for KERI's support of multi-sig."),(0,a.kt)("h2",{id:"unsolicited-traffic"},"Unsolicited Traffic"),(0,a.kt)("p",null,"DID Documents are not required to provide endpoints and thus not subject to unsolicited traffic."),(0,a.kt)("h2",{id:"misattribution"},"Misattribution"),(0,a.kt)("p",null,"This DID Method relies on KERI's duplicity detection to determine when the non-repudiable controller of a DID has been inconsistent and can no longer be trusted. This establishment of non-repudiation enables consistent attribution."),(0,a.kt)("p",null,"See ","[","[","KID0010","]","]"," for a detailed description of KERI\u2019S Agreement Algorithm for Control Establishment (KAACE)."),(0,a.kt)("h2",{id:"correlation"},"Correlation"),(0,a.kt)("p",null,"The root of trust for KERI identifiers is entropy and therefore offers no direct means of correlation. In addition, KERI provides two modes of communication, direct mode and indirect mode. Direct mode allows for pairwise (n-wise as well) relationships that can be used to establish private relationships."),(0,a.kt)("p",null,"See ","[","[","KID0001","]","]"," for a description of KID prefix generation and ","[","[","KID0009","]","]"," for a comparison between Direct and Indirect modes."),(0,a.kt)("h2",{id:"identification"},"Identification"),(0,a.kt)("p",null,"The root of trust for KERI identifiers is entropy and therefore offers no direct means of identification. In addition, KERI provides two modes of communication, direct mode and indirect mode. Direct mode allows for pairwise (n-wise as well) relationships that can be used to establish private relationships."),(0,a.kt)("p",null,"See ","[","[","KID0001","]","]"," for a description of KID prefix generation and ","[","[","KID0009","]","]"," for a comparison between Direct and Indirect modes."),(0,a.kt)("h2",{id:"secondary-use"},"Secondary Use"),(0,a.kt)("p",null,"The Key State made available in the metadata of this DID method is generally available and can be used by any party to retrieve and verify the state of the KERL for the given identifier."),(0,a.kt)("h2",{id:"disclosure"},"Disclosure"),(0,a.kt)("p",null,"No data beyond the Key State for the identifier is provided by this DID method."),(0,a.kt)("h2",{id:"exclusion"},"Exclusion"),(0,a.kt)("p",null,"This DID method provides no opportunity for correlation (See ",(0,a.kt)("a",{parentName:"p",href:"#correlation"}),"), identification (See ",(0,a.kt)("a",{parentName:"p",href:"#identification"}),") or disclosure (See ",(0,a.kt)("a",{parentName:"p",href:"#disclosure"}),") and therefore there is no opportunity to exclude the controller from knowing about data that others have about them."),(0,a.kt)("h1",{id:"security-considerations"},"Security Considerations"),(0,a.kt)("h2",{id:"key-state-verification"},"Key State Verification"),(0,a.kt)("p",null,"Users of a did:keri did method resolver MUST verify the key state returned in the document metadata of the resolution result. The signature of the resolver can be used to determine if the resolver is dysfunctional and should no longer be trusted. However it should not be used to verify the key state."),(0,a.kt)("p",null,"The only definitive method for verifying the key state is to pass the key state to a KERI library and perform the verification of that key state."),(0,a.kt)("p",null,"A breakdown of the security considerations from ","[","[","RFC3552","]","]"," is provided below."),(0,a.kt)("h2",{id:"confidentiality-violations-password-sniffing"},"Confidentiality Violations, Password Sniffing"),(0,a.kt)("p",null,"All private keys used to establish control over the KERI identifier of a KERI DID method DID should be held secret. KERI's use of delegation ensures that private keys for each identifier never need to be transferred. DID controllers can delegate levels of authority of other identities to enable remote agents."),(0,a.kt)("p",null,"See ","[","[","KID0007","]","]"," for a discussion of delegation."),(0,a.kt)("p",null,"In addition, pre-rotation mechanism provides key rotation capabilities while eliminating exposure of the next public key until it is rotated into the current signing key. Enforcing key rotation for every event of a given identifier provides further protection against key exposure."),(0,a.kt)("p",null,"See ","[","[","KID0005","]","]"," for a description of pre-rotation and the protections it provides"),(0,a.kt)("h2",{id:"replay-attacks"},"Replay Attacks"),(0,a.kt)("p",null,"did:keri relies on the KERI protocol which is not susceptible to replay attacks. The hash linking, signatures and sequence numbers of events ensures that replayed messages do not effect the protocol."),(0,a.kt)("p",null,"See ","[","[","KID0003","]","]"," for a description of KERI events."),(0,a.kt)("h2",{id:"message-insertion-deletion-modification"},"Message Insertion, Deletion, Modification"),(0,a.kt)("p",null,"did:keri relies on the KERI protocol which is not susceptible to message deletion or modification attacks. The hash linking, signatures and sequence numbers of events ensures that messages can not be modified or deleted without immediate detection. In addition, KERI's duplicity detection mechanisms allow easy detection of inserted messages allowing validators to determine the consistency of a DID controller."),(0,a.kt)("p",null,"See ","[","[","KID0003","]","]"," for a description of KERI events and ","[","[","KID0010","]","]"," for the KAACE algorithm."),(0,a.kt)("h2",{id:"man-in-the-middle-attacks"},"Man-In-The-Middle Attacks"),(0,a.kt)("p",null,"The protections mentioned in Replay Attacks and Message Attacks render Man-In-The-Middle attacks ineffective against the KERI protocol and this DID Method."),(0,a.kt)("h1",{id:"conventions-and-definitions"},"Conventions and Definitions"),(0,a.kt)("p",null,"{::boilerplate bcp14-tagged}"),(0,a.kt)("h1",{id:"security-considerations-1"},"Security Considerations"),(0,a.kt)("p",null,"TODO Security"),(0,a.kt)("h1",{id:"iana-considerations"},"IANA Considerations"),(0,a.kt)("p",null,"This document has no IANA actions."),(0,a.kt)("p",null,"--- back"),(0,a.kt)("h1",{id:"acknowledgments"},"Acknowledgments"),(0,a.kt)("p",null,'{:numbered="false"}'),(0,a.kt)("p",null,"TODO acknowledge."))}h.isMDXComponent=!0}}]);