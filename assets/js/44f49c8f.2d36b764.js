"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[419],{9526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(5893),a=n(1151);const i={id:"cs-analyze-text-lab4'",title:"Lab# 4: Analyze Text",sidebar_position:4,slug:"/content-safety-analyze-text"},o=void 0,r={id:"azure-content-safety/lab3-analyze-text/cs-analyze-text-lab4'",title:"Lab# 4: Analyze Text",description:"When dealing with text, it is either user or application generated. With Generative AI, we need to be mindful that the text to be examined is either user input prompts or AI generated responses. For example, one of the challenges of using social media or Chat applications to a demographic of high school students is that it introduces system vulnerabilities for users to enter text that have profanity, bullying, harassment, derogatory implications etc.",source:"@site/docs/azure-content-safety/lab3-analyze-text/lab3-analyze-text.md",sourceDirName:"azure-content-safety/lab3-analyze-text",slug:"/content-safety-analyze-text",permalink:"/responsible-ai-hub/docs/content-safety-analyze-text",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"cs-analyze-text-lab4'",title:"Lab# 4: Analyze Text",sidebar_position:4,slug:"/content-safety-analyze-text"},sidebar:"contentSafetySidebar",previous:{title:"Lab# 2: Create Azure Content Safety",permalink:"/responsible-ai-hub/docs/content-safety-resource"},next:{title:"Lab# 4: Analyze Image",permalink:"/responsible-ai-hub/docs/content-safety-analyze-image"}},l={},c=[];function h(e){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9961).Z+"",width:"2111",height:"891"})}),"\n",(0,s.jsx)(t.p,{children:"When dealing with text, it is either user or application generated. With Generative AI, we need to be mindful that the text to be examined is either user input prompts or AI generated responses. For example, one of the challenges of using social media or Chat applications to a demographic of high school students is that it introduces system vulnerabilities for users to enter text that have profanity, bullying, harassment, derogatory implications etc."}),"\n",(0,s.jsx)(t.p,{children:"Let\u2019s explore how the Content Safety API handles text."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open the ",(0,s.jsx)(t.em,{children:"no-openai/text_content_safety.ipynb"})," notebook."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Select Kernel"})," on the upper right of the notebook."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Python Environments"})," in the kernel drop-down menu."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3172).Z+"",width:"1908",height:"401"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Choose the conda ",(0,s.jsx)(t.strong,{children:"(py38_env) Python 3.8"})," kernel."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Run All"})," to execute the ",(0,s.jsx)(t.em,{children:"text_content_safety.ipynb"})," notebook."]}),"\n",(0,s.jsx)(t.li,{children:"Verify that all cells ran successfully."}),"\n",(0,s.jsx)(t.li,{children:"In cell #3, the input_text set to:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"You're studid\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsx)(t.li,{children:"In the last cell, you\u2019ll see that the Content Safety API found the input text to be \u201cHate\u201d content with a severity of 2."}),"\n",(0,s.jsx)(t.li,{children:"Now try changing the input_text to your own text and see what the output will be."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Try using the following languages: ",(0,s.jsx)(t.em,{children:"English, German, Japanese, Spanish, French, Italian, Portuguese, and Chinese."})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": you can add code on how you want the application to behavior or what warning message to display, based on the severity level."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3172:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cs-select-kernel-python-env-bc827fd661f3b3df9a404b9e2f015f5e.png"},9961:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cs-text-filter-70ac8b039aefd48a47221ae6a01eeb01.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);