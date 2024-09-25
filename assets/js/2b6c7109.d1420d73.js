"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9675],{8457:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>t});var d=n(4848),c=n(8453);const a={sidebar_position:2,title:"\ud83d\udce6Task \u4efb\u52a1",tags:["GBA \u56fe\u5f62","GBA \u6559\u7a0b"]},r=void 0,l={id:"gba/ui/API/Task",title:"\ud83d\udce6Task \u4efb\u52a1",description:"\u7ffb\u8bd1\u548c\u8865\u5145: \u6ce1\u6ce1",source:"@site/docs/gba/ui/API/Task.md",sourceDirName:"gba/ui/API",slug:"/gba/ui/API/Task",permalink:"/docs/gba/ui/API/Task",draft:!1,unlisted:!1,tags:[{inline:!0,label:"GBA \u56fe\u5f62",permalink:"/docs/tags/gba-\u56fe\u5f62"},{inline:!0,label:"GBA \u6559\u7a0b",permalink:"/docs/tags/gba-\u6559\u7a0b"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83d\udce6Task \u4efb\u52a1",tags:["GBA \u56fe\u5f62","GBA \u6559\u7a0b"]},sidebar:"gbaTutor",previous:{title:"\ud83d\udce6Main \u6e38\u620f\u7684\u8fd0\u884c",permalink:"/docs/gba/ui/API/Main"},next:{title:"\ud83d\udce6Text \u6587\u672c\u663e\u793a",permalink:"/docs/gba/ui/API/Text"}},i={},t=[{value:"Task \u4efb\u52a1\u7cfb\u7edf",id:"task-\u4efb\u52a1\u7cfb\u7edf",level:2},{value:"\u76f8\u5173\u51fd\u6570",id:"\u76f8\u5173\u51fd\u6570",level:2},{value:"ResetTasks",id:"ResetTasks",level:3},{value:"CreateTask",id:"CreateTask",level:3},{value:"DestroyTask",id:"DestroyTask",level:3},{value:"RunTasks",id:"RunTasks",level:3},{value:"SetTaskFuncWithFollowupFunc",id:"SetTaskFuncWithFollowupFunc",level:3},{value:"SwitchTaskToFollowupFunc",id:"SwitchTaskToFollowupFunc",level:3},{value:"FuncIsActiveTask",id:"FuncIsActiveTask",level:3},{value:"FindTaskIdByFunc",id:"FindTaskIdByFunc",level:3},{value:"SetWordTaskArg",id:"SetWordTaskArg",level:3},{value:"GetWordTaskArg",id:"GetWordTaskArg",level:3}];function h(s){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...s.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsxs)(e.p,{children:["\u7ffb\u8bd1\u548c\u8865\u5145: ",(0,d.jsx)(e.a,{href:"https://github.com/Bubble791",children:"\u6ce1\u6ce1"})," ",(0,d.jsx)("br",{}),"\n\u539f\u4f5c\u8005: ",(0,d.jsx)(e.a,{href:"https://github.com/pret/pokeemerald/wiki/Overview%E2%88%B6-The-Task-System",children:"Pokeemerald Wiki by tustin2121"})," ",(0,d.jsx)("br",{})]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"task-\u4efb\u52a1\u7cfb\u7edf",children:"Task \u4efb\u52a1\u7cfb\u7edf"}),"\n",(0,d.jsxs)(e.p,{children:["\u6b63\u5982\u5728",(0,d.jsx)(e.a,{href:"../API/Main",children:"\u6e38\u620f\u5faa\u73af"}),"\u4e2d\u8ba8\u8bba\u7684\u90a3\u6837\uff0c\u4e3b\u56de\u8c03\u901a\u5e38\u4e0d\u5305\u542b\u4efb\u4f55\u6e38\u620f\u903b\u8f91\u3002\u8fd9\u662f\u56e0\u4e3a3\u4ee3\u5f15\u64ce\u4f7f\u7528Task\u7cfb\u7edf\u5728\u7ed9\u5b9a\u5c4f\u5e55\u671f\u95f4\u6267\u884c\u903b\u8f91\u64cd\u4f5c\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u8ba9\u6211\u4eec\u4ee5\u7f06\u8f66\u8fc7\u573a\u52a8\u753b\u4e3a\u4f8b\uff0c\u4e86\u89e3\u4e00\u4e0b\u8fd9\u4e9b\u4efb\u52a1\u7684\u5de5\u4f5c\u539f\u7406\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u8fc7\u573a\u52a8\u753b\u521d\u59cb\u5316\u671f\u95f4\uff0c\u60a8\u5c06\u770b\u5230\u4ee5\u4e0b\u51e0\u884c\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"SetMainCallback2(CB2_CableCar);\nCreateTask(Task_CableCar, 0);\nif (!GOING_DOWN)\n    sCableCar->bgTaskId = CreateTask(Task_AnimateBgGoingUp, 1);\nelse\n    sCableCar->bgTaskId = CreateTask(Task_AnimateBgGoingDown, 1);\n"})}),"\n",(0,d.jsx)(e.p,{children:"mainCallback2\u8bbe\u7f6e\u540e\uff0c\u6e38\u620f\u4f1a\u521b\u5efa\u4e24\u4e2aTask"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u7b2c\u4e00\u4e2aTask\u51fd\u6570\u4e3a",(0,d.jsx)(e.code,{children:"Task_CableCar"}),"\uff0c\u5e76\u4ee5\u4f18\u5148\u7ea70\u8fd0\u884c\uff08\u5c06\u9996\u5148\u8fd0\u884c\uff09"]}),"\n",(0,d.jsxs)(e.li,{children:["\u7b2c\u4e8c\u4e2aTask\u662f\u4f7f\u652f\u67b6\u4e0a\u6216\u4e0b\u8fd0\u52a8\u7684\u52a8\u753b\u51fd\u6570\uff0c\u4f18\u5148\u7ea7\u4e3a1\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u6bcf\u4e00\u5e27\u5728",(0,d.jsx)(e.code,{children:"Task_CableCar"}),"\u4e4b\u540e\u8fd0\u884c\u51fd\u6570"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u2757\u8bf7\u6ce8\u610f\uff0c\u8be5",(0,d.jsx)(e.code,{children:"CreateTask"}),"\u51fd\u6570\u8fd4\u56de\u4e00\u4e2aTask ID\uff0c\u5b83\u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684u8\u5b57\u8282\u3002\u8be5ID\u53ef\u7528\u4e8e\u7d22\u5f15\u5185\u5b58\u4e2d\u7684",(0,d.jsx)(e.code,{children:"gTasks"}),"\u4ee5\u83b7\u53d6\u6709\u5173\u6211\u4eec\u5f53\u524dTask\u7684\u4fe1\u606f\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u521b\u5efa\u7684\u7b2c\u4e8c\u4e2aTask\u4e2d\uff0c\u6211\u4eec\u4fdd\u5b58\u6b64ID\u4ee5\u4f9b\u4e4b\u540e\u4f7f\u7528\uff0c\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u6b64ID\u662fTask\u5728",(0,d.jsx)(e.code,{children:"gTasks"}),"\u4e2d\u521b\u5efa\u7684\u4f4d\u7f6e\uff0c\u4f46\u7531\u4e8eTask\u5217\u8868\u662f\u4e00\u4e2a\u94fe\u63a5\u5217\u8868\uff0c\u56e0\u6b64\u5b83\u5728\u9635\u5217\u4e2d\u7684\u4f4d\u7f6e\u4e0eTask\u7684\u8fd0\u884c\u987a\u5e8f\u65e0\u5173\uff08Task\u7684\u6267\u884c\u987a\u5e8f\u5df2\u7ecf\u7531\u4f20\u9012\u7ed9",(0,d.jsx)(e.code,{children:"CreateTask"}),"\u7684\u4f18\u5148\u7ea7\u51b3\u5b9a\uff09\u6b64ID\u4e0d\u80fd\u88ab\u4fee\u6539\uff0c\u800c\u53ea\u9002\u7528\u4e8e\u5b58\u50a8\u548c\u8bbf\u95ee\u4fe1\u606f\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u4f7f\u7528\u4efb\u52a1ID\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95eeTask\u4e2d\u7684\u6570\u636e\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"struct Task\n{\n    TaskFunc func; // \u8be5Task\u7684\u7a0b\u5e8f\n    bool8 isActive; // \u8be5Task\u662f\u5426\u8fd0\u884c\n    u8 prev;\n    u8 next;\n    u8 priority;\n    s16 data[NUM_TASK_DATA]; // \u8be5Task\u7684data\u6570\u7ec4\n};\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5173\u6ce8",(0,d.jsx)(e.code,{children:"func"}),"\u548c",(0,d.jsx)(e.code,{children:"data"}),"\u8fd9\u4e24\u9879\uff0c\u5176\u4ed6\u7684\u90fd\u7531Task\u7cfb\u7edf\u5206\u914d"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:["\u6307\u9488",(0,d.jsx)(e.code,{children:"func"}),"\u6307\u5411\u6211\u4eec\u4f20\u9012\u7ed9",(0,d.jsx)(e.code,{children:"CreateTask"}),"\u7684\u51fd\u6570\u56de\u8c03\u3002\u8be5\u51fd\u6570\u5fc5\u987b\u4e3a",(0,d.jsx)(e.code,{children:"void Task_FunctionName(u8 taskId)"}),"\u7684\u5f62\u5f0f\uff0c\u5728",(0,d.jsx)(e.code,{children:"pokeemerald"}),"\u53cd\u7f16\u8bd1\u9879\u76ee\u4e2d\uff0c\u6bcf\u4e2a\u7528\u4f5cTask\u56de\u8c03\u7684\u51fd\u6570\u90fd\u547d\u540d\u4e3a",(0,d.jsx)(e.code,{children:"Task_XXX"}),"\uff0c\u56e0\u6b64\u60a8\u5e94\u8be5\u5f88\u5bb9\u6613\u770b\u51fa\u54ea\u4e9b\u662fTask\u56de\u8c03\u3002\u8c03\u7528\u6b64\u51fd\u6570\u65f6\uff0c\u5b83\u4f1a\u4f20\u9012",(0,d.jsx)(e.code,{children:"taskId"}),"\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u5fc5\u5728\u8be5task\u4e2d\u5b58\u50a8\u8fd9\u4e2aTask\u7684",(0,d.jsx)(e.code,{children:"taskId"}),"\u3002\u4f46\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5b58\u50a8\u5176\u4ed6\u7684",(0,d.jsx)(e.code,{children:"taskId"}),"\uff0c\u7a0d\u540e\u5c06\u8ba8\u8bba\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"data"}),"\u6570\u7ec4\u662f\u4e00\u4e2a16\u4e2as16\u7c7b\u578b\u6570\u636e\u7684\u6570\u7ec4\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u5165\u4efb\u4f55\u60f3\u8981\u7684\u6570\u636e\u3002\u8fd9\u4e9b\u6570\u636e\u4f9b\u6211\u4eec\u81ea\u5df1\u4f7f\u7528\u3002\u5728",(0,d.jsx)(e.code,{children:"pokeemerald"}),"\u4ee3\u7801\u5e93\u4e2d\uff0c\u60a8\u7ecf\u5e38\u4f1a\u770b\u5230\u8fd9\u4e9b\u6570\u636e\u5b57\u6bb5\u7684\u5f15\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"#define tTimer   data[0]\n#define tState   data[1]\n\nstatic void Task_ExampleTask(u8 taskId)\n{\n    // \u76f4\u63a5\u8bbf\u95ee\n    gTasks[taskId]->tTimer++; // \u5b9e\u9645\u4e0a\u662fgTasks[taskId]->data[0]++;\n    \n    // \u6216\u8005\u53ef\u4ee5\u5c06data\u8bbe\u7f6e\u4e3a\u6307\u9488\n    s16 *data = gTasks[taskId].data;\n    tState = 0; // \u5b9e\u9645\u4e0a\u662f: data[1] = 0;\n}\n\n#undef tState\n#undef tTimer\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u60a8\u4f1a\u53d1\u73b0\u5728\u4ee3\u7801\u5e93\u4e2d\u8fd9\u4e24\u79cd\u7b56\u7565\u53ef\u4ee5\u4e92\u6362\u4f7f\u7528\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["\u51fd\u6570",(0,d.jsx)(e.code,{children:"func"}),"\u6bcf\u5e27\u8c03\u7528\u4e00\u6b21\uff0c\u8f93\u5165\u7684\u6570\u636e",(0,d.jsx)(e.code,{children:"data"}),"\u53ef\u7528\u4e8e\u4fdd\u6301\u5e27\u4e4b\u95f4\u7684\u72b6\u6001\u3002\u60a8\u53ef\u4ee5\u5c06\u5176\u4e2d\u4e00\u4e2a\u6570\u636e\u5b57\u6bb5\u8bbe\u4e3a\u72b6\u6001\uff0c\u5e76\u5c06\u51fd\u6570\u8bbe\u4e3a\u57fa\u4e8e\u72b6\u6001\u7684",(0,d.jsx)(e.code,{children:"switch"}),"\uff0c\u6216\u8005\u60a8\u53ef\u4ee5\u5c06\u5176\u4ed6\u51fd\u6570\u5206\u914d\u7ed9",(0,d.jsx)(e.code,{children:"func"}),"\uff0c\u5206\u914d\u7684\u51fd\u6570\u5c06\u5728\u4e0b\u4e00\u5e27\u8fd0\u884c\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"static void Task_WaitForFade(u8 taskId)\n{\n    if (!gPaletteFade.active)\n    {\n        // \u5728\u6de1\u51fa\u6de1\u5165\u6548\u679c\u7ed3\u675f\u7684\u4e0b\u4e00\u5e27\u5c06\u5f53\u524dTask\u7684\u51fd\u6570\u8bbe\u7f6e\u4e3aTask_HandlePlayerInput\n        gTasks[taskId].func = Task_HandlePlayerInput; // \u66f4\u6539Task\u7684\u51fd\u6570\uff0c\u4e4b\u540erunTask\u5c06\u4f1a\u8fd0\u884cTask_HandlePlayerInput\u51fd\u6570\u800c\u4e0d\u662fTask_WaitForFade\n    }\n}\n\nstatic void Task_HandlePlayerInput(u8 taskId)\n{\n  //\u6b64\u4efb\u52a1\u5c06\u4f7f\u7528\u4e0e\u4e0a\u9762\u76f8\u540c\u7684\u4efb\u52a1ID\u548c\u6570\u636e\u8fd0\u884c\n  //\u4efb\u4f55\u6570\u636e\u90fd\u6765\u81ea\u4e0a\u9762\u7684\u51fd\u6570\n}\n"})}),"\n",(0,d.jsx)(e.admonition,{type:"tip",children:(0,d.jsxs)(e.p,{children:["Task\u548c\u4e00\u5f00\u59cb",(0,d.jsx)(e.code,{children:"createTask"}),"\u91cc\u7684\u51fd\u6570\u5e76\u4e0d\u7ed1\u5b9a\uff0c\u5e76\u4e0d\u662f",(0,d.jsx)(e.code,{children:"func"}),"\u53d8\u4e86",(0,d.jsx)(e.code,{children:"taskId"}),"\u548c",(0,d.jsx)(e.code,{children:"data"}),"\u7684\u6570\u636e\u5c31\u4f1a\u53d8"]})}),"\n",(0,d.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u60f3\u8981\u4e00\u4e2a\u7ecf\u5e38\u4f7f\u7528\u7684\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b",(0,d.jsx)(e.a,{href:"https://github.com/pret/pokeemerald/blob/master/src/credits.c",children:"src/credits.c"}),"\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u60a8\u8fd8\u5c06\u5728\u8be5\u6587\u4ef6\u4e2d\u770b\u5230\u4f7f\u7528data\u5b57\u6bb5\u6765\u5b58\u50a8\u5b83\u521b\u5efa\u7684\u5176\u4ed6Task\u7684TaskID\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"gTasks[taskId].tTaskId_ShowMons = CreateTask(Task_ShowMons, 0); // \u521b\u5efa\u4e00\u4e2a\u65b0Task\uff0c\u5c06Id\u5b58\u50a8\u5230\u5f53\u524dtask\u4e2d\u7684data\u91cc\ngTasks[gTasks[taskId].tTaskId_ShowMons].tState = 1; // \u8bbe\u7f6e\u524d\u9762\u90a3\u4e2a\u521b\u5efa\u7684task\u4e2d\u7684data\ngTasks[gTasks[taskId].tTaskId_ShowMons].tMainTaskId = taskId; // \u5728\u524d\u9762\u90a3\u4e2a\u521b\u5efa\u7684task\u7684data\u91cc\u50a8\u5b58\u5f53\u524dtask\u7684Id\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u6700\u540e\uff0c\u4e00\u65e6\u4efb\u52a1\u5b8c\u6210\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,d.jsx)(e.code,{children:"DestroyTask"}),"\u5220\u9664\u5f53\u524d\u8fd9\u4e2atask\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"DestroyTask(taskId);\nDestroyTask(sCableCar->bgTaskId);\nSetMainCallback2(CB2_EndCableCar);\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u8fd9\u4f1a\u5c06Task\u8bbe\u7f6e\u4e3a\u975e\u6d3b\u52a8\u72b6\u6001\uff0c\u5e76\u4e14\u5b83\u5c06\u4e0d\u518d\u5728\u540e\u7eed\u5e27\u4e0a\u8fd0\u884c\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["\u8bf7\u786e\u4fdd\u5728\u6e05\u7406\u5c4f\u5e55\u6216\u4ea4\u4e92\u65f6\u6267\u884c\u6b64\u64cd\u4f5c\uff1b\u800c",(0,d.jsx)(e.code,{children:"ResetTasks"}),"\u4f1a\u9500\u6bc1\u6240\u6709Task\uff0c\u60a8\u4f1a\u53d1\u73b0\u5b83\u901a\u5e38\u5728\u6e05\u7406\u573a\u666f\u65f6\u8fd0\u884c\uff0c\u53ea\u662f\u4e3a\u4e86\u786e\u4fdd\u4e0d\u4f1a\u610f\u5916\u5730\u5c06Task\u7559\u5728\u6d3b\u52a8\u72b6\u6001\u3002"]}),"\n",(0,d.jsx)(e.admonition,{type:"tip",children:(0,d.jsx)(e.p,{children:"\u539f\u7248Task\u6700\u591a16\u4e2a\uff0c\u8bf7\u786e\u4fdd\u4e0d\u4f1a\u8d85\u6807"})}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"\u76f8\u5173\u51fd\u6570",children:"\u76f8\u5173\u51fd\u6570"}),"\n",(0,d.jsxs)(e.p,{children:["\u4ee3\u7801\u6587\u4ef6\uff1a",(0,d.jsx)(e.a,{href:"https://github.com/pret/pokeemerald/blob/master/src/task.c",children:"src/task.c"})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"ResetTasks",children:"ResetTasks"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void ResetTasks(void);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u521d\u59cb\u5316\u6240\u6709",(0,d.jsx)(e.code,{children:"gTask"}),"\u7684\u6570\u636e\uff0c\u5e76\u7ed9\u6240\u6709\u7684",(0,d.jsx)(e.code,{children:"data"}),"\u8d4b\u503c",(0,d.jsx)(e.code,{children:"0"}),"\uff0c\u8be5\u51fd\u6570\u7528\u4e8e\u521d\u59cb\u5316\u573a\u666f\u65f6\u6e05\u7406\u4e0a\u4e00\u4e2a\u573a\u666f\u7684Task\uff0c\u65e0\u987b\u518d\u4f7f\u7528",(0,d.jsx)(e.code,{children:"DestroyTask"}),"\u4e00\u4e2a\u4e2a\u53bb\u6e05\u7406"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"CreateTask",children:"CreateTask"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"u8 CreateTask(TaskFunc func, u8 priority);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u521b\u5efa\u4e00\u4e2aTask\uff0c\u5e76\u8fd4\u56de\u521b\u5efa\u7684",(0,d.jsx)(e.code,{children:"TaskId"}),"\uff0c\u5f53\u521b\u5efa\u5931\u8d25\u65f6\u4f1a\u8fd4\u56de",(0,d.jsx)(e.code,{children:"0"})]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"func"}),(0,d.jsx)(e.td,{children:"TaskFunc"}),(0,d.jsx)(e.td,{children:"task\u7684\u56de\u8c03\u51fd\u6570\u5730\u5740"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"priority"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"task\u7684\u6267\u884c\u4f18\u5148\u7ea7"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u2714\ufe0f\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"u8"}),": \u521b\u5efa\u7684",(0,d.jsx)(e.code,{children:"TaskId"}),"\uff0c\u5f53\u521b\u5efa\u5931\u8d25\u65f6\u4f1a\u8fd4\u56de",(0,d.jsx)(e.code,{children:"0"})]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"DestroyTask",children:"DestroyTask"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void DestroyTask(u8 taskId);\n"})}),"\n",(0,d.jsx)(e.p,{children:"\ud83d\udcac\u6e05\u9664\u6307\u5b9aId\u7684Task\uff0c\u4ec5\u5728\u8be5Task\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\u65f6"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"taskId"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"\u9700\u8981\u6e05\u9664\u7684taskId"})]})})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"RunTasks",children:"RunTasks"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void RunTasks(void);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u6839\u636e\u4f18\u5148\u7ea7\u987a\u5e8f\u8fd0\u884c\u6240\u6709task\u7684",(0,d.jsx)(e.code,{children:"func"}),"\u51fd\u6570\uff0c\u901a\u5e38\u653e\u5728mainCallback2\u4e2d\u5b9e\u65f6\u8fd0\u884c"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"SetTaskFuncWithFollowupFunc",children:"SetTaskFuncWithFollowupFunc"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void SetTaskFuncWithFollowupFunc(u8 taskId, TaskFunc func, TaskFunc followupFunc);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u4fee\u6539\u6307\u5b9aid\u7684Task\u7684",(0,d.jsx)(e.code,{children:"func"}),"\uff0c\u5e76\u5c06\u7ed9\u5b9a\u7684",(0,d.jsx)(e.code,{children:"\u5b50\u56de\u8c03\u51fd\u6570"}),"\u5b58\u50a8\u5230",(0,d.jsx)(e.code,{children:"data"}),"\u6570\u7ec4\u7684",(0,d.jsx)(e.code,{children:"\u6700\u540e\u4e24\u4e2a"}),"\u91cc\uff0c\u7531\u4e8edata\u6570\u7ec4\u662f",(0,d.jsx)(e.code,{children:"2"}),"\u5b57\u8282\uff0c\u800c\u51fd\u6570\u6307\u9488\u662f",(0,d.jsx)(e.code,{children:"4"}),"\u5b57\u8282\uff0c\u6240\u4ee5\u6b64\u6307\u9488\u4f1a\u5c06\u9ad8\u4f4e\u4f4d\u62c6\u5f00\u5b58\u653e"]}),"\n",(0,d.jsxs)(e.p,{children:["\u4e4b\u540e\u53ef\u4ee5\u914d\u5408",(0,d.jsx)(e.a,{href:"#SwitchTaskToFollowupFunc",children:(0,d.jsx)(e.code,{children:"SwitchTaskToFollowupFun"})}),"\u51fd\u6570\u5c06\u5f53\u524dTask\u7684",(0,d.jsx)(e.code,{children:"func"}),"\u8d4b\u503c\u4e3a\u5b58\u50a8\u7684\u5b50\u56de\u8c03\u51fd\u6570"]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"taskId"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"\u9700\u8981\u8bbe\u7f6e\u7684taskId"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"func"}),(0,d.jsx)(e.td,{children:"TaskFunc"}),(0,d.jsx)(e.td,{children:"\u8bbe\u7f6e\u7684\u56de\u8c03\u51fd\u6570\u5730\u5740"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"followupFunc"}),(0,d.jsx)(e.td,{children:"TaskFunc"}),(0,d.jsx)(e.td,{children:"\u8bbe\u7f6e\u7684\u5b50\u56de\u8c03\u51fd\u6570\u5730\u5740"})]})]})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"SwitchTaskToFollowupFunc",children:"SwitchTaskToFollowupFunc"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void SwitchTaskToFollowupFunc(u8 taskId);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u5c06\u6307\u5b9aid\u7684Task\u7684",(0,d.jsx)(e.code,{children:"func"}),"\u4fee\u6539\u4e3a\u5b58\u50a8\u7684\u5b50\u56de\u8c03\u51fd\u6570\uff0c\u914d\u5408",(0,d.jsx)(e.a,{href:"#SetTaskFuncWithFollowupFunc",children:(0,d.jsx)(e.code,{children:"SetTaskFuncWithFollowupFunc"})}),"\u4f7f\u7528"]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"taskId"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"\u9700\u8981\u5207\u6362\u7684taskId"})]})})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"FuncIsActiveTask",children:"FuncIsActiveTask"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"bool8 FuncIsActiveTask(TaskFunc func);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u6839\u636e\u4f20\u5165\u7684\u51fd\u6570\u5224\u65ad\u662f\u5426\u6709\u8fd0\u884c\u4e2d\u7684Task\u7684",(0,d.jsx)(e.code,{children:"func"}),"\u4e0e\u8be5\u51fd\u6570\u76f8\u540c"]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"func"}),(0,d.jsx)(e.td,{children:"TaskFunc"}),(0,d.jsx)(e.td,{children:"\u8981\u68c0\u67e5\u7684task\u7684\u56de\u8c03\u51fd\u6570"})]})})]}),"\n",(0,d.jsx)(e.p,{children:"\u2714\ufe0f\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"bool8"}),": \u5b58\u5728\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u8fd0\u884c\u4e2d\u7684task\u4f7f\u7528\u4e86\u8be5\u51fd\u6570\u4f5c\u4e3a",(0,d.jsx)(e.code,{children:"func"}),"\u65f6\u8fd4\u56de",(0,d.jsx)(e.code,{children:"TRUE"}),"\uff0c\u5426\u5219\u8fd4\u56de",(0,d.jsx)(e.code,{children:"FALSE"})]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"FindTaskIdByFunc",children:"FindTaskIdByFunc"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"u8 FindTaskIdByFunc(TaskFunc func);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u6839\u636e\u4f20\u5165\u7684\u51fd\u6570\u5224\u65ad\u662f\u5426\u6709\u8fd0\u884c\u4e2d\u7684Task\u7684",(0,d.jsx)(e.code,{children:"func"}),"\u4e0e\u8be5\u51fd\u6570\u76f8\u540c\uff0c\u5982\u679c\u6709\u5339\u914d\u7684Task\uff0c\u8fd4\u56de\u5176\u4e2d\u7b2c\u4e00\u4e2atask\u7684",(0,d.jsx)(e.code,{children:"Id"})]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"func"}),(0,d.jsx)(e.td,{children:"TaskFunc"}),(0,d.jsx)(e.td,{children:"\u8981\u68c0\u67e5\u7684task\u7684\u56de\u8c03\u51fd\u6570"})]})})]}),"\n",(0,d.jsx)(e.p,{children:"\u2714\ufe0f\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"bool8"}),": \u5b58\u5728\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u8fd0\u884c\u4e2d\u7684task\u4f7f\u7528\u4e86\u8be5\u51fd\u6570\u4f5c\u4e3a",(0,d.jsx)(e.code,{children:"func"}),"\u65f6\u8fd4\u56de\u8be5Task\u7684",(0,d.jsx)(e.code,{children:"Id"}),"\uff0c\u5426\u5219\u8fd4\u56de",(0,d.jsx)(e.code,{children:"TASK_NONE"})]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"SetWordTaskArg",children:"SetWordTaskArg"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void SetWordTaskArg(u8 taskId, u8 dataElem, u32 value);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u5728\u6307\u5b9aid\u7684task\u7684",(0,d.jsx)(e.code,{children:"data"}),"\u6570\u7ec4\u91cc\u5199\u5165\u4e00\u4e2a4\u5b57\u8282\u7684\u6570\u636e\uff0c",(0,d.jsx)(e.code,{children:"dataElem"}),"\u4e3a\u7a7a\u95f2\u7684",(0,d.jsx)(e.code,{children:"data"}),"\u6570\u7ec4\u4e0b\u6807\uff0c\u4f1a\u5360\u7528\u8be5",(0,d.jsx)(e.code,{children:"\u4e0b\u6807"}),"\u548c",(0,d.jsx)(e.code,{children:"\u4e0b\u6807+1"}),"\u7684\u4f4d\u7f6e"]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"taskId"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"\u9700\u8981\u5199\u5165\u6570\u636e\u7684taskId"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"dataElem"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"data\u6570\u7ec4\u4e0b\u6807\u8d77\u59cb"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"value"}),(0,d.jsx)(e.td,{children:"u32"}),(0,d.jsx)(e.td,{children:"4\u5b57\u8282\u957f\u5ea6\u7684\u6570\u636e"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["\u8bf7\u786e\u4fdd\u8be5\u4e0b\u6807\u4e0d\u4f1a\u8d85\u8fc7",(0,d.jsx)(e.code,{children:"NUM_TASK_DATA - 1"})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h3,{id:"GetWordTaskArg",children:"GetWordTaskArg"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"u32 GetWordTaskArg(u8 taskId, u8 dataElem);\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\ud83d\udcac\u83b7\u53d6\u6307\u5b9aid\u7684task\u7684",(0,d.jsx)(e.code,{children:"data"}),"\u6570\u7ec4",(0,d.jsx)(e.code,{children:"dataElem"}),"\u548c",(0,d.jsx)(e.code,{children:"dataElem+1"}),"\u4e0b\u6807\u91cc\u5b58\u50a8\u7684\u503c\uff0c\u7ec4\u5408\u6210\u4e00\u4e2a",(0,d.jsx)(e.code,{children:"4"}),"\u5b57\u8282\u6570\u636e\u8fd4\u56de"]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53c2\u6570"}),(0,d.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u4ecb\u7ecd"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"taskId"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"\u9700\u8981\u83b7\u53d6\u6570\u636e\u7684taskId"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"dataElem"}),(0,d.jsx)(e.td,{children:"u8"}),(0,d.jsx)(e.td,{children:"data\u6570\u7ec4\u4e0b\u6807\u8d77\u59cb"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u2714\ufe0f\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"u32"}),": \u7ec4\u5408\u7684",(0,d.jsx)(e.code,{children:"4"}),"\u5b57\u8282\u6570\u636e"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u8bf7\u786e\u4fdd\u8be5\u4e0b\u6807\u4e0d\u4f1a\u8d85\u8fc7",(0,d.jsx)(e.code,{children:"NUM_TASK_DATA - 1"})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.hr,{})]})}function x(s={}){const{wrapper:e}={...(0,c.R)(),...s.components};return e?(0,d.jsx)(e,{...s,children:(0,d.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>l});var d=n(6540);const c={},a=d.createContext(c);function r(s){const e=d.useContext(a);return d.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(c):s.components||c:r(s.components),d.createElement(a.Provider,{value:e},s.children)}}}]);