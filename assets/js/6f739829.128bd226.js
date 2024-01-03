"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[999],{7307:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(5893),o=n(1151);const r={id:"pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",sidebar_position:3,slug:"/add-flow-connections"},s=void 0,c={id:"azure-prompt-flow/portal/lab3-add-flow-connections/pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",description:"To use Prompt Flow, you need to enable the feature in Azure ML studio.  To enable the feature, complete the following steps:",source:"@site/docs/azure-prompt-flow/portal/lab3-add-flow-connections/lab3-add-flow-connection.md",sourceDirName:"azure-prompt-flow/portal/lab3-add-flow-connections",slug:"/add-flow-connections",permalink:"/responsible-ai-hub/docs/add-flow-connections",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",sidebar_position:3,slug:"/add-flow-connections"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 2: Bring your own data",permalink:"/responsible-ai-hub/docs/bring-your-data"},next:{title:"Lab# 4: Create chatbot template",permalink:"/responsible-ai-hub/docs/create-chatbot-template"}},i={},a=[{value:"Flow connections",id:"flow-connections",level:2},{value:"Create a Runtime",id:"create-a-runtime",level:2}];function l(A){const e={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"To use Prompt Flow, you need to enable the feature in Azure ML studio.  To enable the feature, complete the following steps:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Open ",(0,t.jsx)(e.a,{href:"https://ml.azure.com/",children:"Azure ML studio"}),", verify that you have the ",(0,t.jsx)(e.strong,{children:"Prompt Flow"})," tab on the left-hand side of the navigation bar."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:n(262).Z+"",width:"1864",height:"386"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["If you don\u2019t see the ",(0,t.jsx)(e.strong,{children:"Prompt Flow"})," tab, click on the bullhorn icon on the upper right corner of the page.\tLocate ",(0,t.jsx)(e.strong,{children:"Easily run prompt flow without worrying about compute and runtime life cycle"}),", switch it to ",(0,t.jsx)(e.strong,{children:"Enabled"})," the feature."]}),"\n",(0,t.jsx)(e.li,{children:"Close the features blade."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"flow-connections",children:"Flow connections"}),"\n",(0,t.jsx)(e.p,{children:"As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Azure Content Safety or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets.  Once a resource is connected, your Flow nodes have access to the resources metadata (e.g. name, api key, api_endpoint, or type).  In this workshop, we\u2019ll be using the Azure OpenAI API."}),"\n",(0,t.jsx)(e.p,{children:"First, let's confirm the Azure OpenAI API connection your created in the preview lab."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Select the ",(0,t.jsx)(e.strong,{children:"Prompt Flow"})," tab, on the left-hand side of the navigation bar."]}),"\n",(0,t.jsxs)(e.li,{children:["Click on the ",(0,t.jsx)(e.strong,{children:"Connections"})," tab on the Prompt Flow page"]}),"\n",(0,t.jsxs)(e.li,{children:["Confirm that the ",(0,t.jsx)(e.strong,{children:"azure-openai-conn"})," connection is listed."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:n(9151).Z+"",width:"778",height:"395"})}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["Click on the ",(0,t.jsx)(e.strong,{children:"azure-openai-conn"})," connection.  Then select the ",(0,t.jsx)(e.strong,{children:"Edit"})," button."]}),"\n",(0,t.jsxs)(e.li,{children:["Select your ",(0,t.jsx)(e.strong,{children:"Subscription Id"})," and ",(0,t.jsx)(e.strong,{children:"Azure OpenAI Account Name"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Click on the ",(0,t.jsx)(e.strong,{children:"Save"})," button."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"create-a-runtime",children:"Create a Runtime"}),"\n",(0,t.jsx)(e.p,{children:"To run the Prompt Flow nodes, you need to create a Runtime.  Runtime serve as the compute with a docker environment for executing the flows.  The Compute instance are the VMs and the environment are create from a docker image that contains the Python packages and dependencies need to run the Flow.  When creating a runtime, you have the option of choosing a default curated environment; or you can create your own custom environment."}),"\n",(0,t.jsx)(e.p,{children:"To create runtime environment, complete the following steps:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Click on the ",(0,t.jsx)(e.strong,{children:"Runtime"})," tab; than click ",(0,t.jsx)(e.strong,{children:"Create"})," button"]}),"\n",(0,t.jsxs)(e.li,{children:["Enter a ",(0,t.jsx)(e.strong,{children:"Runtime name"})]}),"\n",(0,t.jsxs)(e.li,{children:["Select the ",(0,t.jsx)(e.strong,{children:"prompt-compute"})," compute under the ",(0,t.jsx)(e.strong,{children:"Select Azure ML compute instance"})," drop-down menu."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:n(3132).Z+"",width:"912",height:"128"})}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["For ",(0,t.jsx)(e.strong,{children:"Custom Application"}),", select the ",(0,t.jsx)(e.strong,{children:"New"})," option"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Under ",(0,t.jsx)(e.strong,{children:"Environment"}),", select ",(0,t.jsx)(e.strong,{children:"Use default environment"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Create"}),".  Then click ",(0,t.jsx)(e.strong,{children:"Confirm"}),", for auto compute restart."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Wait ~3 minutes for the runtime status to be ",(0,t.jsx)(e.strong,{children:"Running"}),".  You can keep refreshing the page to check the status."]}),"\n"]}),"\n"]})]})}function d(A={}){const{wrapper:e}={...(0,o.a)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(l,{...A})}):l(A)}},9151:(A,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/00-confirm-flow-connection-d315f6045863bb07de2f2b85e5b82fbf.png"},262:(A,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/00-enable-promptflow-3533be6ae5ebb9365f691d41d3d749e8.png"},3132:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"},1151:(A,e,n)=>{n.d(e,{Z:()=>c,a:()=>s});var t=n(7294);const o={},r=t.createContext(o);function s(A){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function c(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(o):A.components||o:s(A.components),t.createElement(r.Provider,{value:e},A.children)}}}]);