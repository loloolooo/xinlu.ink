"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[9344],{4137:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return t?r.createElement(d,i(i({ref:n},f),{},{components:t})):r.createElement(d,i({ref:n},f))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(4137));const a={},i="\u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6",l={unversionedId:"create-folder-using-part-of-filename-and-move-file-into",id:"create-folder-using-part-of-filename-and-move-file-into",title:"\u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6",description:"\u4ee5\u524d\u7ed9\u753b\u5bb6\u505a\u52a9\u7406\uff0c\u8981\u7ef4\u62a4\u8001\u5e08\u51e0\u5341\u5e74\u7684\u7535\u5b50\u4f5c\u54c1\u6570\u636e\u3002",source:"@site/topics/batch-in-action/create-folder-using-part-of-filename-and-move-file-into.md",sourceDirName:".",slug:"/create-folder-using-part-of-filename-and-move-file-into",permalink:"/topics/batch-in-action/create-folder-using-part-of-filename-and-move-file-into",draft:!1,tags:[],version:"current",lastUpdatedBy:"xianghongai",lastUpdatedAt:1665848646,formattedLastUpdatedAt:"2022\u5e7410\u670815\u65e5",frontMatter:{},sidebar:"batch-in-action",previous:{title:"\u901a\u8fc7\u6587\u672c\u5185\u5bb9\u91cd\u547d\u540d\u6587\u4ef6",permalink:"/topics/batch-in-action/rename-files-from-text"},next:{title:"\u591a\u8f6e\u4fee\u6539\u6587\u4ef6\u540d",permalink:"/topics/batch-in-action/multiple-times-rename-files"}},c={},p=[],f={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6"},"\u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6"),(0,o.kt)("p",null,"\u4ee5\u524d\u7ed9\u753b\u5bb6\u505a\u52a9\u7406\uff0c\u8981\u7ef4\u62a4\u8001\u5e08\u51e0\u5341\u5e74\u7684\u7535\u5b50\u4f5c\u54c1\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u82e5\u5e72\u6587\u4ef6\uff0c\u4f46\u662f\uff0c\u6709\u4e00\u5b9a\u89c4\u5219\uff0c\u5982\u6709\u6309\u5e74\u4efd\u547d\u540d\uff0c\u8fd9\u6837\uff0c\u6839\u636e ",(0,o.kt)("inlineCode",{parentName:"p"},'"tokens=1,* delims=-"')," \u6309\u957f\u5ea6\u6309\u6307\u5b9a\u5b57\u7b26\u5207\u5206\u6587\u4ef6\u540d\uff0c\u81ea\u52a8\u521b\u5efa\u5e74\u4efd\u7684\u76ee\u5f55\uff0c\u4fdd\u5b58\u5bf9\u5e94\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  1998-001.jpg ~ 1998-xxx.jpg\n  1999-001.jpg ~ 1999-xxx.jpg\n  ...\n")),(0,o.kt)("p",null,"\u4ee3\u7801\u5b9e\u73b0\uff0c\u6309\u9700\u8bbe\u5b9a\u5207\u5206\u89c4\u5219\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-batch"},'@echo off\n@REM @Author: xianghongai@gmail.com\ntitle   \u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6\n@echo \u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6\n@echo -------------------------------------\n\n:GTBegin\n@echo \u9ed8\u8ba4\u5904\u7406\u76ee\u5f55\u4e0b\u6240\u6709\u683c\u5f0f\u6587\u4ef6\uff0c\u786e\u5b9a\u7ee7\u7eed\uff1f(y/n)\nset /p GTConfirm=\nif "%GTConfirm%"=="y" goto GTYES\nif "%GTConfirm%"=="Y" goto GTYES\nif "%GTConfirm%"=="n" goto GTNO\nif "%GTConfirm%"=="N" goto GTNO\necho \u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6307\u4ee4\npause >nul\ngoto GTBegin\n\n:GTYES\n@echo -------------------------------------\nset /p FilePath=\u9700\u8981\u5904\u7406\u7684\u76ee\u5f55:\ncd /d %FilePath%\nfor /f "tokens=1,* delims=-" %%J in (\'dir /b *.*\') do (\n    if not exist "%%J\\" md "%%J"\n    move /-y "%%J-%%K" "%%J"\n    )\necho. :) \u641e\u5b9a\npause >nul\nexit\n\n:GTNO\nexit\n\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u66f4\u65b0\u65e5\u5fd7\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2017-05-19")))}u.isMDXComponent=!0}}]);