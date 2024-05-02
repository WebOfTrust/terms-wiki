"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[10352],{15680:(e,i,n)=>{n.d(i,{xA:()=>p,yg:()=>m});var t=n(96540);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),d=function(e){var i=t.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},p=function(e){var i=d(e.components);return t.createElement(l.Provider,{value:i},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},g=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(l,".").concat(g)]||c[g]||h[g]||r;return n?t.createElement(m,o(o({ref:i},p),{},{components:n})):t.createElement(m,o({ref:i},p))}));function m(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89321:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(58168),a=(n(96540),n(15680));const r={},o=void 0,s={unversionedId:"resources/mdfiles/draft-ssmith-said",id:"resources/mdfiles/draft-ssmith-said",title:"draft-ssmith-said",description:'title: "Self-Addressing IDentifier (SAID)"',source:"@site/docs/05_resources/mdfiles/draft-ssmith-said.md",sourceDirName:"05_resources/mdfiles",slug:"/resources/mdfiles/draft-ssmith-said",permalink:"/WOT-terms/docs/resources/mdfiles/draft-ssmith-said",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"draft-ssmith-oobi",permalink:"/WOT-terms/docs/resources/mdfiles/draft-ssmith-oobi"},next:{title:"kli-demo-2022",permalink:"/WOT-terms/docs/resources/mdfiles/kli-demo-2022"}},l={},d=[{value:"Example Computation",id:"example-computation",level:2},{value:"Serialization Generation",id:"serialization-generation",level:2},{value:"Order-Preserving Data Structures",id:"order-preserving-data-structures",level:3},{value:"Example Python dict to JSON Serialization with SAID",id:"example-python-dict-to-json-serialization-with-said",level:2},{value:"Example Schema Immutability using JSON Schema with SAIDs",id:"example-schema-immutability-using-json-schema-with-saids",level:2},{value:"Discussion",id:"discussion",level:2}],p={toc:d},c="wrapper";function h(e){let{components:i,...n}=e;return(0,a.yg)(c,(0,t.A)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("p",null,'title: "Self-Addressing IDentifier (SAID)"\nabbrev: "SAID"\ndocname: draft-ssmith-said-latest\ncategory: info'),(0,a.yg)("p",null,"ipr: trust200902\narea: TODO\nworkgroup: TODO Working Group\nkeyword: Internet-Draft"),(0,a.yg)("p",null,"stand_alone: yes\nsmart_quotes: no\npi: ","[toc, sortrefs, symrefs]"),(0,a.yg)("p",null,"author:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"  name: S. Smith\norganization: ProSapien LLC\nemail: ",(0,a.yg)("a",{parentName:"li",href:"mailto:sam@prosapien.com"},"sam@prosapien.com"))),(0,a.yg)("p",null,"normative:\nCESR:\ntarget: ",(0,a.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ssmith-cesr/"},"https://datatracker.ietf.org/doc/draft-ssmith-cesr/"),"\ntitle: Composable Event Streaming Representation (CESR)\nauthor:\nins: S. Smith\nname: Samuel M. Smith\norg: ProSapien LLC\ndate: 2021"),(0,a.yg)("p",null,"informative:\nKERI:\ntarget: ",(0,a.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/1907.02143"},"https://arxiv.org/abs/1907.02143"),"\ntitle: Key Event Receipt Infrastructure (KERI)\nauthor:\nins: S. Smith\nname: Samuel M. Smith\norg: ProSapien LLC\ndate: 2021"),(0,a.yg)("p",null,"tags: IETF, SAID, CESR, SAD, ACDC, KERI"),(0,a.yg)("p",null,"--- abstract"),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," (Self-Addressing IDentifier) is a special type of content-addressable identifier based on encoded cryptographic digest that is self-referential. The ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," derivation protocol defined herein enables verification that a given ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," is uniquely cryptographically bound to a serialization that includes the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," as a field in that serialization. Embedding a ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," as a field in the associated serialization indicates a preferred content-addressable identifier for that serialization that facilitates greater interoperability, reduced ambiguity, and enhanced security when reasoning about the serialization. Moreover, given sufficient cryptographic strength, a cryptographic commitment such as a signature, digest, or another ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID"),", to a given ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," is essentially equivalent to a commitment to its associated serialization. Any change to the serialization invalidates its ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," thereby ensuring secure immutability evident reasoning with ",(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," about serializations or equivalently their ",(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs"),". Thus ",(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," better facilitate immutably referenced data serializations for applications such as Verifiable Credentials or Ricardian Contracts."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," are encoded with ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," (Composable Event Streaming Representation) ","[CESR]"," which includes a pre-pended derivation code that encodes the cryptographic suite or algorithm used to generate the digest. A ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," primitive's primary expression (alone or in combination ) is textual using Base64 URL-safe characters. ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," primitives may be round-tripped (alone or in combination) to a compact binary representation without loss. The ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," derivation code enables cryptographic digest algorithm agility in systems that use ",(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," as content addresses. Each serialization may use a different cryptographic digest algorithm as indicated by its derivation code. This provides interoperable future proofing. ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," was developed for the ","[KERI]"," protocol."),(0,a.yg)("p",null,"--- middle"),(0,a.yg)("h1",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The primary advantage of a content-addressable identifier is that it is cryptographically bound to the content (expressed as a serialization), thus providing a secure root-of-trust for reasoning about that content. Any sufficiently strong cryptographic commitment to a content-addressable identifier is functionally equivalent to a cryptographic commitment to the content itself."),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"self-addressing identifier (SAID)")," is a special class of content-addressable identifier that is also self-referential. This requires a special derivation protocol that generates the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," and embeds it in the serialized content.  The reason for a special derivation protocol is that a naive cryptographic content-addressable identifier must not be self-referential, i.e. the identifier must not appear within the content that it is identifying. This is because the naive cryptographic derivation process of a content-addressable identifier is a cryptographic digest of the serialized content. Changing one bit of the serialization content will result in a different digest. Therefore, self-referential content-addressable identifiers require a special derivation protocol."),(0,a.yg)("p",null,"To elaborate, this approach of deriving self-referential identifiers from the contents they identify, is called ",(0,a.yg)("inlineCode",{parentName:"p"},"self-addressing"),". It allows any validator to verify or re-derive the ",(0,a.yg)("inlineCode",{parentName:"p"},"self-referential, self-addressing identifier")," given the contents it identifies. To clarify, a ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," is different from a standard content address or content-addressable identifier in that a standard content-addressable identifier may not be included inside the contents it addresses. Moreover, a standard content-addressable identifier is computed on the finished immutable contents, and therefore is not self-referential. In addition, a ",(0,a.yg)("inlineCode",{parentName:"p"},"self-addressing identifier (SAID)")," includes a pre-pended derivation code that specifies the cryptographic algorithm used to generate the digest."),(0,a.yg)("p",null,"An authenticatable data serialization is defined to be a serialization that is digitally signed with a non-repudiable asymmetric key-pair based signing scheme. A verifier, given the public key, may verify the signature on the serialization and thereby securely attribute the serialization to the signer. Many use cases of authenticatable data serializations or statements include a self-referential identifier embedded in the authenticatable serialization. These serializations may also embed references to other self-referential identifiers to other serializations. The purpose of a self-referential identifier is to enable reasoning in software or otherwise about that serialization.  Typically, these self-referential identifiers are not cryptographically bound to their encompassing serializations such as would be the case for a content-addressable identifier of that serialization. This poses a security problem because there now may be more than one identifier for the same content. The first is self-referential, included in the serialization, but not cryptographically bound to its encompassing serialization and the second is cryptographically bound but not self-referential, not included in the serialization."),(0,a.yg)("p",null,"When reasoning about a given content serialization, the existence of a non-cryptographically bound but self-referential identifier is a security vulnerability. Certainly, this identifier cannot be used by itself to securely reason about the content because it is not bound to the content. Anyone can place such an identifier inside some other serialization and claim that the other serialization is the correct serialization for that self-referential identifier.  Unfortunately, a standard content-addressable identifier for a serialization which is bound to the serialization can not be included in the serialization itself, i.e. can be neither self-referential nor self-contained; it must be tracked independently. In contrast, a ",(0,a.yg)("inlineCode",{parentName:"p"},"self-addressing identifier")," is included in the serialization to which it is cryptographically bound making it self-referential and self-contained. Reasoning about ",(0,a.yg)("inlineCode",{parentName:"p"},"self-addressing identifiers (SAIDs)")," is secure because a ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," will verify if and only if its encompassing serialization has not been mutated, which makes the content immutable. ",(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," used as references to serializations in other serializations enable tamper-evident reasoning about the referenced serializations. This enables a more compact representation of an authenticatable data serialization that includes other serializations by reference to their ",(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," instead of by embedded containment."),(0,a.yg)("h1",{id:"generation-and-verification-protocols"},"Generation and Verification Protocols"),(0,a.yg)("p",null,"The ",(0,a.yg)("em",{parentName:"p"},"self-addressing identifier")," (",(0,a.yg)("inlineCode",{parentName:"p"},"SAID"),") verification protocol is as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Make a copy of the embedded ",(0,a.yg)("inlineCode",{parentName:"li"},"CESR")," ","[CESR]"," encoded ",(0,a.yg)("inlineCode",{parentName:"li"},"SAID")," string included in the serialization."),(0,a.yg)("li",{parentName:"ul"},"replace the ",(0,a.yg)("inlineCode",{parentName:"li"},"SAID")," field value in the serialization with a dummy string of the same length. The dummy character is ",(0,a.yg)("inlineCode",{parentName:"li"},"#"),", that is, ASCII 35 decimal (23 hex)."),(0,a.yg)("li",{parentName:"ul"},"Compute the digest of the serialization that includes the dummy value for the ",(0,a.yg)("inlineCode",{parentName:"li"},"SAID")," field. Use the digest algorithm specified by the ",(0,a.yg)("inlineCode",{parentName:"li"},"CESR")," ","[CESR]"," derivation code of the copied ",(0,a.yg)("inlineCode",{parentName:"li"},"SAID"),"."),(0,a.yg)("li",{parentName:"ul"},"Encode the computed digest with CESR ","[CESR]"," to create the final derived and encoded SAID of the same total length as the dummy string and the copied embedded ",(0,a.yg)("inlineCode",{parentName:"li"},"SAID"),"."),(0,a.yg)("li",{parentName:"ul"},"Compare the copied ",(0,a.yg)("inlineCode",{parentName:"li"},"SAID")," with the recomputed ",(0,a.yg)("inlineCode",{parentName:"li"},"SAID"),". If they are identical then the verification is successful; otherwise unsuccessful.")),(0,a.yg)("h2",{id:"example-computation"},"Example Computation"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," ","[CESR]"," encoding of a Blake3-256 (32 byte) binary digest has 44 Base-64 URL-safe characters. The first character is ",(0,a.yg)("inlineCode",{parentName:"p"},"E")," which represents Blake3-256. Therefore, a serialization of a fixed field data structure with a SAID generated by a Blake3-256 digest must reserve a field of length 44 characters. Suppose the initial value of the fixed field serialization is the following string:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"field0______field1______________________________________field2______\n")),(0,a.yg)("p",null,"In the string, ",(0,a.yg)("inlineCode",{parentName:"p"},"field1")," is of length 44 characters. The first step to generating the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," for this serialization is to replace the contents of ",(0,a.yg)("inlineCode",{parentName:"p"},"field1")," with a dummy string of ",(0,a.yg)("inlineCode",{parentName:"p"},"#")," characters of length 44 as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"field0______############################################field2______\n")),(0,a.yg)("p",null,"The Blake3-256 digest is then computed on the above string and encoded in ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," format. This gives the following ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"E8wYuBjhslETYaLZcxMkWrhVbMcA8RS1pKYl7nJ77ntA\n")),(0,a.yg)("p",null,"The dummy string is then replaced with the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," above to produce the final serialization with embedded ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"field0______E8wYuBjhslETYaLZcxMkWrhVbMcA8RS1pKYl7nJ77ntA______\n")),(0,a.yg)("p",null,"To verify the embedded ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," with respect to its encompassing serialization above, just reverse the generation steps."),(0,a.yg)("h2",{id:"serialization-generation"},"Serialization Generation"),(0,a.yg)("h3",{id:"order-preserving-data-structures"},"Order-Preserving Data Structures"),(0,a.yg)("p",null,"The crucial consideration in ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," generation is reproducibility. This requires the ordering and sizing of fields in the serialization to be fixed. Data structures in most computer languages have fixed fields. The example above is such an example."),(0,a.yg)("p",null,"A very useful type of serialization especially in some languages like Python or JavaScript is of self-describing data structures that are mappings of (key, value) or (label, value) pairs. These are often also called dictionaries or hash tables. The essential feature needed for reproducible serialization of such mappings is that mapping preserve the ordering of its fields on any round trip to/from a serialization. In other words the mapping is ordered with respect to serialization. Another way to describe a predefined order preserving serialization is canonicalization or canonical ordering. This is often referred to as the mapping canonicalization problem."),(0,a.yg)("p",null,"The ",(0,a.yg)("em",{parentName:"p"},"natural")," canonical ordering for such mappings is ",(0,a.yg)("em",{parentName:"p"},"insertion order")," or sometimes called ",(0,a.yg)("em",{parentName:"p"},"field creation order"),". Natural order allows the fields to appear in a preset order independent of the lexicographic ordering of the labels. This enables functional or logical ordering of the fields. Logical ordering also allows the absence or presence of a field to have meaning. Fields may have a priority given by their relative order of appearance. Fields may be grouped in logical sequence for better usability and labels may use words that best reflect their function independent of their relative lexicographic ordering. The most popular serialization format for mappings is ",(0,a.yg)("em",{parentName:"p"},"JSON"),". Other popular serializations for mappings are CBOR and MsgPack."),(0,a.yg)("p",null,"In contrast, from a functional perspective, lexicographic ordering appears un-natural. In lexicographic ordering the fields are sorted by label prior to serialization.  The problem with lexicographic ordering is that the relative order of appearance of the fields is determined by the labels themselves not some logical or functional purpose of the fields themselves. This often results in oddly-labeled fields that are so named merely to ensure that the lexicographic ordering matches a given logical ordering."),(0,a.yg)("p",null,"Originally mappings in most if not all computer languages were not insertion order preserving. The reason is that most mappings used hash tables under the hood. Early hash tables were highly efficient but by nature did not include any mechanism for preserving field creation or field insertion order for serialization. Fortunately, this is no longer true in general. Most if not all computer languages that support dictionaries or mappings as first-class data structures now support variations that are insertion order preserving."),(0,a.yg)("p",null,"For example, since version 3.6 the default ",(0,a.yg)("inlineCode",{parentName:"p"},"dict")," object in Python is insertion order preserving. Before that, Python 3.1 introduced the ",(0,a.yg)("inlineCode",{parentName:"p"},"OrderedDict")," class which is insertion order preserving, and before that, custom classes existed in the wild for order preserving variants of a Python ",(0,a.yg)("inlineCode",{parentName:"p"},"dict"),". Since version 1.9 the Ruby version of a ",(0,a.yg)("inlineCode",{parentName:"p"},"dict"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"Hash")," class, is insertion order preserving. Javascript is a relative latecomer but since ECMAScript ",(0,a.yg)("inlineCode",{parentName:"p"},"ES6")," the insertion ordering of JavaScript objects was preserved in ",(0,a.yg)("inlineCode",{parentName:"p"},"Reflect.ownPropertyKeys()"),". Using custom ",(0,a.yg)("inlineCode",{parentName:"p"},"replacer")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"reviver")," functions in ",(0,a.yg)("inlineCode",{parentName:"p"},".stringify")," and ",(0,a.yg)("inlineCode",{parentName:"p"},".parse")," allows one to serialize and de-serialize JavaScript objects in insertion order. Moreover, since ES11 the native ",(0,a.yg)("inlineCode",{parentName:"p"},".stringify")," uses insertion order all text string labeled fields in Javascript objects. It is an uncommon use case to have non-text string labels in a mapping serialization. A list is usually a better structure in those cases. Nonetheless, since ES6 the new Javascript ",(0,a.yg)("inlineCode",{parentName:"p"},"Map")," object preserves insertion order for all fields for all label types. Custom ",(0,a.yg)("inlineCode",{parentName:"p"},"replacer")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"reviver")," functions for ",(0,a.yg)("inlineCode",{parentName:"p"},".stringify")," and ",(0,a.yg)("inlineCode",{parentName:"p"},".parse")," allows one to serialize and de-serialize Map objects to/from JSON in natural order preserving fashion. Consequently, there is no need for any canonical serialization but natural insertion order preserving because one can always use lexicographic ordering to create the insertion order."),(0,a.yg)("h2",{id:"example-python-dict-to-json-serialization-with-said"},"Example Python dict to JSON Serialization with SAID"),(0,a.yg)("p",null,"Suppose the initial value of a Python ",(0,a.yg)("inlineCode",{parentName:"p"},"dict")," is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'{\n    "said": "",\n    "first": "Sue",\n    "last": "Smith",\n    "role": "Founder"\n}\n')),(0,a.yg)("p",null,"As before the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," will be a 44 character CESR encoded Blake3-256 digest. The serialization will be ",(0,a.yg)("em",{parentName:"p"},"JSON"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"said")," field value in the ",(0,a.yg)("inlineCode",{parentName:"p"},"dict")," is to be populated with the resulting ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID"),". First the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"said")," field is replaced with a 44 character dummy string as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'{\n    "said": "############################################",\n    "first": "Sue",\n    "last": "Smith",\n    "role": "Founder"\n}\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"dict")," is then serialized into JSON with no extra whitespace. The serialization is the following string:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{"said":"############################################","first":"Sue","last":"Smith","role":"Founder"}\n')),(0,a.yg)("p",null,"The Blake3-256 digest is then computed on that serialization above and encoded in ",(0,a.yg)("inlineCode",{parentName:"p"},"CESR")," to provide the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"EnKa0ALimLL8eQdZGzglJG_SxvncxkmvwFDhIyLFchUk\n")),(0,a.yg)("p",null,"The value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"said")," field is now replaced with the computed and encoded ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," to produce the final serialization with embedded ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{"said":"EnKa0ALimLL8eQdZGzglJG_SxvncxkmvwFDhIyLFchUk","first":"Sue","last":"Smith","role":"Founder"}\n')),(0,a.yg)("p",null,"The final serialization may be converted to a python ",(0,a.yg)("inlineCode",{parentName:"p"},"dict")," by deserializing the JSON to produce:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'{\n    "said": "EnKa0ALimLL8eQdZGzglJG_SxvncxkmvwFDhIyLFchUk",\n    "first": "Sue",\n    "last": "Smith",\n    "role": "Founder"\n}\n')),(0,a.yg)("p",null,"The generation steps may be reversed to verify the embedded ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," generation and verification protocol for mappings assumes that the fields in a mapping serialization such as JSON are ordered in stable, round-trippable, reproducible order, i.e., canonical. The natural canonical ordering is called ",(0,a.yg)("inlineCode",{parentName:"p"},"field insertion order"),"."),(0,a.yg)("h2",{id:"example-schema-immutability-using-json-schema-with-saids"},"Example Schema Immutability using JSON Schema with SAIDs"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," make ",(0,a.yg)("a",{parentName:"p",href:"https://json-schema.org/draft/2020-12/json-schema-core.html"},"JSON Schema")," fully self-contained with self-referential, unambiguously cryptographically bound, and verifiable content-addressable identifiers. We apply the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," derivation protocol defined above to generate the ",(0,a.yg)("inlineCode",{parentName:"p"},"$id")," field."),(0,a.yg)("p",null,"First, replace the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"$id")," field with a string filled with dummy characters of the same length as the eventual derived value for ",(0,a.yg)("inlineCode",{parentName:"p"},"$id"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        "$id": "############################################",\n        "$schema": "http://json-schema.org/draft-07/schema#",\n        "type": "object",\n        "properties": {\n            "full_name": {\n            "type": "string"\n        }\n    }\n')),(0,a.yg)("p",null,"Second, make a digest of the serialized schema contents that include the dummy value for the ",(0,a.yg)("inlineCode",{parentName:"p"},"$id"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"EZT9Idj7zLA0Ek6o8oevixdX20607CljNg4zrf_NQINY\n")),(0,a.yg)("p",null,"Third, replace the dummy identifier value with the derived identifier value in the schema contents."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        "$id": "EZT9Idj7zLA0Ek6o8oevixdX20607CljNg4zrf_NQINY",\n        "$schema": "http://json-schema.org/draft-07/schema#",\n        "type": "object",\n        "properties": {\n            "full_name": {\n            "type": "string"\n        }\n    }\n')),(0,a.yg)("p",null,"Usages of ",(0,a.yg)("inlineCode",{parentName:"p"},"SAIDs")," within authentic data containers as demonstrated here are referred to as ",(0,a.yg)("inlineCode",{parentName:"p"},"self-addressing data (SAD)"),"."),(0,a.yg)("h2",{id:"discussion"},"Discussion"),(0,a.yg)("p",null,"As long as any verifier recognizes the derivation code of a ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," is a cryptographically secure commitment to the contents in which it is embedded; it is a cryptographically verifiable, self-referential, content-addressable identifier. Because a ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," is both self-referential and cryptographically bound to the contents it identifies, anyone can validate this binding if they follow the ",(0,a.yg)("em",{parentName:"p"},"derivation protocol")," outlined above."),(0,a.yg)("p",null,"To elaborate, this approach of deriving self-referential identifiers from the contents they identify, is called ",(0,a.yg)("inlineCode",{parentName:"p"},"self-addressing"),". It allows any validator to verify or re-derive the self-referential, self-addressing identifier given the contents it identifies. To clarify, a ",(0,a.yg)("inlineCode",{parentName:"p"},"SAID")," is different from a standard content address or content-addressable identifier in that a standard content-addressable identifier may not be included inside the contents it addresses. Moreover, a standard content-addressable identifier is computed on the finished immutable contents, and therefore is not self-referential."),(0,a.yg)("h1",{id:"appendix-embedding-saids-in-urls"},"Appendix: Embedding SAIDs in URLs"),(0,a.yg)("p",null,"ToDo. Provide normative protocol for embedding a SAID in a URL to replace a\nbare SAID in a data structure (field map). The purpose is to ease the transition\nfrom web 2.0 URL centric infrastructure to zero-trust infrastructure. This is\na caveated adoption vector because it mixes discovery (URL) with integrity (SAID)\nlayers. The OOBI protocol is an example of using embedded SAIDs inside URLs merely for\nverifiable discovery while using the bare SAID in the discovered data item."),(0,a.yg)("h1",{id:"appendix-json-schema-with-saids"},"Appendix: JSON Schema with SAIDs"),(0,a.yg)("p",null,"ToDo. Provide normative rules for using SAIDs to lock-down JSON Schema (immutable) to prevent schema malleability attacks."),(0,a.yg)("h1",{id:"conventions-and-definitions"},"Conventions and Definitions"),(0,a.yg)("p",null,"{::boilerplate bcp14-tagged}"),(0,a.yg)("h1",{id:"security-considerations"},"Security Considerations"),(0,a.yg)("p",null,"TODO Security"),(0,a.yg)("h1",{id:"iana-considerations"},"IANA Considerations"),(0,a.yg)("p",null,"This document has no IANA actions."),(0,a.yg)("p",null,"--- back"),(0,a.yg)("h1",{id:"acknowledgments"},"Acknowledgments"),(0,a.yg)("p",null,'{:numbered="false"}'),(0,a.yg)("p",null,"Members of the keripy development team and the ToIP ACDC WG."))}h.isMDXComponent=!0}}]);