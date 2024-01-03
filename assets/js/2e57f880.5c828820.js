"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{8612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=t(5893),r=t(1151);const o={id:"pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot with your data",sidebar_position:5,slug:"/chatbot-with-your-data"},i=void 0,l={id:"azure-prompt-flow/portal/lab5-chatbot-with-your-data/pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot with your data",description:"In the precise exercise you create a vector index and train to search for your vector embeddings.  In this exercise, you\u2019ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we\u2019ll use the numeric embedding to search the numeric vector.  Next, we\u2019ll use the prompt to set rules with restrictions and how to display the data to the user.",source:"@site/docs/azure-prompt-flow/portal/lab5-chatbot-with-your-data/lab5-chatbot-with-your-data.md",sourceDirName:"azure-prompt-flow/portal/lab5-chatbot-with-your-data",slug:"/chatbot-with-your-data",permalink:"/responsible-ai-hub/docs/chatbot-with-your-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot with your data",sidebar_position:5,slug:"/chatbot-with-your-data"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 4: Create chatbot template",permalink:"/responsible-ai-hub/docs/create-chatbot-template"},next:{title:"Lab# 6: Evaluate chatbot",permalink:"/responsible-ai-hub/docs/evaluate-chatbot"}},a={},h=[{value:"Test Chat with your own data",id:"test-chat-with-your-own-data",level:2},{value:"Handle Groundedness &amp; Hallucinations",id:"handle-groundedness--hallucinations",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In the precise exercise you create a vector index and train to search for your vector embeddings.  In this exercise, you\u2019ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we\u2019ll use the numeric embedding to search the numeric vector.  Next, we\u2019ll use the prompt to set rules with restrictions and how to display the data to the user."}),"\n",(0,s.jsx)(n.p,{children:"We'll be using the following tools:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding"}),": converts text to number tokens.  Store to token in vector arrays based on then relation to each other."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vector index lookup"}),": Takes user input question and queries the vector index with the closest answers to the question."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prompt"}),": enters user to add rules on the response show be sent to user"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LLM"}),": provides the LLM prompt or LLM model response to user"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the Flow page, by clicking ",(0,s.jsx)(n.strong,{children:"Prompt Flow"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Close the ",(0,s.jsx)(n.strong,{children:"Chat"})," dialog pane."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(1346).Z+"",width:"666",height:"275"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Add Embedding tool"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(n.strong,{children:"More tools"}),".  Then select the ",(0,s.jsx)(n.strong,{children:"Embedding tool"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6398).Z+"",width:"358",height:"427"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Enter ",(0,s.jsx)(n.strong,{children:"Name"})," for the node (e.g. embed_question)."]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Add"})," button."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.strong,{children:"AzureOpenAIconnection"})," name you created earlier."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Text-embedding-ada-002"})," deployment name you created earlier"]}),"\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.strong,{children:"Input"}),", select ",(0,s.jsx)(n.code,{children:"${inputs.question}"}),".  This should create a node under the input node."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(474).Z+"",width:"1280",height:"327"})}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Save"})," button"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Add Vector Index Lookup tool"})}),"\n",(0,s.jsxs)(n.ol,{start:"10",children:["\n",(0,s.jsxs)(n.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(n.strong,{children:"More tools"}),".  Then select the Vector Index Lookup tool.  This will generate a new ",(0,s.jsx)(n.strong,{children:"Vector Index Lookup"})," section at the bottom of the flow."]}),"\n",(0,s.jsxs)(n.li,{children:["Enter ",(0,s.jsx)(n.strong,{children:"Name"})," for the node (e.g. search_vector_index)."]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Add"})," button"]}),"\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.strong,{children:"Path"}),", copy and paste the Datastore URI you retrieve earlier for the vector index (e.g. ",(0,s.jsx)(n.code,{children:"azureml://subscriptions/..."})," )."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the embedding output as the ",(0,s.jsx)(n.strong,{children:"query"})," field (e.g. ",(0,s.jsx)(n.code,{children:"${embed_question.output}"})," )."]}),"\n",(0,s.jsxs)(n.li,{children:["Leave default value for ",(0,s.jsx)(n.strong,{children:"top_k"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(474).Z+"",width:"1280",height:"327"})}),"\n",(0,s.jsxs)(n.ol,{start:"16",children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Save"})," button"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Add Prompt tool"})}),"\n",(0,s.jsxs)(n.ol,{start:"17",children:["\n",(0,s.jsxs)(n.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(n.strong,{children:"Prompt"})," tool. This will generate a new Prompt section at the bottom of the flow."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3838).Z+"",width:"967",height:"44"})}),"\n",(0,s.jsxs)(n.ol,{start:"18",children:["\n",(0,s.jsxs)(n.li,{children:["Enter a ",(0,s.jsx)(n.strong,{children:"Name"})," for the node (e.g. generate_prompt).  Then click the ",(0,s.jsx)(n.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(n.li,{children:"Copy the following text in the Prompt textbox:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"system:\nYou are an AI system designed to answer questions. When presented with a scenario, you must reply with accuracy to inquirers' inquiries.  If there is ever a situation where you are unsure of the answer, simply respond with \"I don't know\".    \n\ncontext: {{contexts}}\n\n{% for item in chat_history %}\nuser:\n{{item.inputs.question}}\nassistant:\n{{item.outputs.answer}}\n{% endfor %}\n\nuser:\n{{question}}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"20",children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Validate and parse input"})," button to generate the input fields for the prompt."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.code,{children:"${inputs.chat_history}"})," for ",(0,s.jsx)(n.strong,{children:"chat_history"})]}),"\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.strong,{children:"contexts"}),", select ",(0,s.jsx)(n.code,{children:"${Search_Vector_Index.output}"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"${inputs.question}"})," for the ",(0,s.jsx)(n.strong,{children:"question"})," field."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(8984).Z+"",width:"975",height:"549"})}),"\n",(0,s.jsxs)(n.ol,{start:"24",children:["\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Save"})," button"]}),"\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"chat"})," node and drag it below the ",(0,s.jsx)(n.strong,{children:"generate_prompt"})," node"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(242).Z+"",width:"350",height:"424"})}),"\n",(0,s.jsxs)(n.ol,{start:"26",children:["\n",(0,s.jsxs)(n.li,{children:["Under the ",(0,s.jsx)(n.strong,{children:"Flow"})," pane, scroll up to the ",(0,s.jsx)(n.strong,{children:"chat"})," section.  Delete the existing text in the ",(0,s.jsx)(n.strong,{children:"Prompt"})," textbox."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3836).Z+"",width:"975",height:"363"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Update Chat node"})}),"\n",(0,s.jsxs)(n.ol,{start:"27",children:["\n",(0,s.jsx)(n.li,{children:"Copy and paste the following text in the Prompt textbox.  This specifies the output to display to the user:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"{{prompt_response}}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"28",children:["\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Validate and parse input"})," button to regenerate a new input field. Prompt Flow will generate the text metadata you specified in the Prompt textbox."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Prompt_response"})," value, select ",(0,s.jsx)(n.code,{children:"${generate_prompt.output}"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Save"})," button"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"test-chat-with-your-own-data",children:"Test Chat with your own data"}),"\n",(0,s.jsx)(n.p,{children:"Now that you have updated the prompt flow logic to you use your own data and process the output, let\u2019s see if the Chat will generate more relevant information pertaining to our Contoso dental data.  First let clear the chat history, so the question is not base not the prior responses from our OpenAI model."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Chat"})," icon on the top right corner of the page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To clear the prior chat history, click on the dialog icon next to the input textbox."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(9822).Z+"",width:"706",height:"182"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"what is the dental hospital address?\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(9428).Z+"",width:"620",height:"347"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Next, enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"What is the clinic's phone number?\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(4322).Z+"",width:"949",height:"314"})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"Finally, enter the following what questions:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Which supplements are good for teeth?\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsx)(n.li,{children:"Now, enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Which supplements are good for teeth?\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"10",children:["\n",(0,s.jsx)(n.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(2171).Z+"",width:"634",height:"644"})}),"\n",(0,s.jsx)(n.p,{children:"As you can see, our chat produces a response that is factual but not in our Contoso dental data. This is an example of a groundedness issue. This is a safety risk, because if the recommendation provided makes a user sick or have a bad reaction. It can have negative consequences for Contoso dental clinic."}),"\n",(0,s.jsx)(n.h2,{id:"handle-groundedness--hallucinations",children:"Handle Groundedness & Hallucinations"}),"\n",(0,s.jsx)(n.p,{children:"Always an LLM model may be eager to provide the user with a response.  It\u2019s important to make sure that the model is not providing response to questions that are out of scope with subject domain of your data.  Another issue is the response may provide information that is not factual and, in some cases, even provide reference to the answer that appears legitimate.  This is a risk, because the information provided to the user can have negative or harmful consequences."}),"\n",(0,s.jsx)(n.p,{children:"Grounding test"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"generate_prompt"})," section of the Flow pane, click on ",(0,s.jsx)(n.strong,{children:"Generate variants"})," button."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Connection"})," for your Azure OpenAI"]}),"\n",(0,s.jsxs)(n.li,{children:["Next, select the ",(0,s.jsx)(n.strong,{children:"Deployment"})," name (e.g. gpt-35-turbo)."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Submit"})," button."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6453).Z+"",width:"624",height:"877"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.strong,{children:"generate_prompt"})," section, click on the ",(0,s.jsx)(n.strong,{children:"Show variants"})," button.\nThis will expand the section with ",(0,s.jsx)(n.strong,{children:"Variant_0"})," generated and ",(0,s.jsx)(n.strong,{children:"Variant_1"})," generated.  The ",(0,s.jsx)(n.strong,{children:"Variant_0"})," is the original prompt you created.  The ",(0,s.jsx)(n.strong,{children:"Variant_1"})," is the new prompt generated by the LLM model."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the prompt textbox for ",(0,s.jsx)(n.strong,{children:"Variant_1"}),", copy and paste the following text."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"system:\nYou are an AI dental assistant designed to answer questions. I need you to generate a response to the user's question based only on context and information from the dental documents.  You *must only* provide responses from the vector dental documents. I want a well-informed and polite response. Please provide a unique, honest and relevant answer. If you are not sure about the answer, kindly respond with \"I don't know.\"\n\ncontext: {{contexts}}\n\n{% for item in chat_history %}\nuser:\n{{item.inputs.question}}\nassistant:\n{{item.outputs.answer}}\n{% endfor %}\n\nuser:\n{{question}}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Set as default"})," button to set the new prompt as the default prompt for the ",(0,s.jsx)(n.strong,{children:"generate_prompt"})," node."]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Save"})," button"]}),"\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Chat"})," icon on the top right corner of the page."]}),"\n",(0,s.jsx)(n.li,{children:"Clear the prior chat history by click on the dialog icon next to the input textbox."}),"\n",(0,s.jsx)(n.li,{children:"Now, enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Which supplements are good for teeth?\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(1898).Z+"",width:"633",height:"211"})}),"\n",(0,s.jsxs)(n.p,{children:["Fantastic!....as you can see, since our contoso dental data does not contain supplements for teeth, our chat response with *",(0,s.jsx)(n.em,{children:"I don't know"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9822:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/00-clear-chat-history-08c204582c774fc704cdcaa9b6f4c4ad.png"},1346:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/00-close-chat-window-cd4a9536184d98a441da0d12816dc008.png"},6453:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/00-generate-variant-54fcd72253a2ead3d51c19063f898add.png"},1898:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},3838:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},2171:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/00-teeth-vitamins-ea0b6760699646b1ccf07991f2c0299f.png"},3836:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/chat-node-input-c3a7a45f477e3c2827043d487d1c8376.png"},242:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/chat-node-a559006b1f5cfc83dbb2123788e5a588.png"},9428:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dental-clinic-address-3d0d1fb633b14cfb7e7cc5f28664cafa.png"},4322:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dental-clinic-phone-fef1f5954a93fda0318f3322a430fa26.png"},6398:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/flow-tools-480fe56a56c497cfde43713c215a0380.png"},8984:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/output_prompt-dc4d757017594755a8a91c48523b4613.png"},474:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/search-vector-88b150e9f60372e4d3085f7752d00b11.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);