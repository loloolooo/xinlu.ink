"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[2688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},i="\u8def\u5f84/\u65f6\u95f4/\u5b57\u7b26\u5207\u5206\u7b49\u64cd\u4f5c",c={unversionedId:"delims",id:"delims",title:"\u8def\u5f84/\u65f6\u95f4/\u5b57\u7b26\u5207\u5206\u7b49\u64cd\u4f5c",description:"\u672c\u7bc7\u719f\u6089\u64cd\u4f5c\u6587\u4ef6\u8def\u5f84\u3001\u65f6\u95f4\uff0c\u6e29\u4e60\u5b57\u7b26\u5207\u5206 (Delims)\u3002",source:"@site/topics/batch-in-action/delims.md",sourceDirName:".",slug:"/delims",permalink:"/topics/batch-in-action/delims",draft:!1,tags:[],version:"current",lastUpdatedBy:"xianghongai",lastUpdatedAt:1663690219,formattedLastUpdatedAt:"2022\u5e749\u670820\u65e5",frontMatter:{},sidebar:"batch-in-action",previous:{title:"\u4ece\u89c6\u9891\u5bfc\u51fa\u9ad8\u8d28\u91cf GIF \u56fe\u7247",permalink:"/topics/batch-in-action/export-high-quality-gif-pictures-from-video"},next:{title:"\u53f3\u952e\u83dc\u5355\u6267\u884c\u6279\u5904\u7406\u6587\u4ef6",permalink:"/topics/batch-in-action/run-batch-at-folder-context-menu"}},l={},s=[],m={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8def\u5f84\u65f6\u95f4\u5b57\u7b26\u5207\u5206\u7b49\u64cd\u4f5c"},"\u8def\u5f84/\u65f6\u95f4/\u5b57\u7b26\u5207\u5206\u7b49\u64cd\u4f5c"),(0,o.kt)("p",null,"\u672c\u7bc7\u719f\u6089\u64cd\u4f5c\u6587\u4ef6\u8def\u5f84\u3001\u65f6\u95f4\uff0c\u6e29\u4e60\u5b57\u7b26\u5207\u5206 (Delims)\u3002"),(0,o.kt)("p",null,"\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-batch"},'@echo off\n@REM @Author: xianghongai@gmail.com\n\n:GTCONTINUE\n@echo \u6b63\u5728\u8fd0\u884c\u7684\u8fd9\u4e2a\u6279\u5904\u7406\uff1a\n@echo \u5b8c\u5168\u8def\u5f84[%%0]\uff1a%0\n@echo \u53bb\u6389\u5f15\u53f7[%%~0]\uff1a%~0\n@echo \u6240\u5728\u5206\u533a[%%~d0]\uff1a%~d0\n@echo \u6240\u5904\u8def\u5f84[%%~p0]\uff1a%~p0\n@echo \u6587\u4ef6\u540d[%%~n0]\uff1a%~n0\n@echo \u6269\u5c55\u540d[%%~x0]\uff1a%~x0\n@echo.\n@echo \u6587\u4ef6\u5c5e\u6027\uff1a%~a0\n@echo \u4fee\u6539\u65f6\u95f4\uff1a%~t0\n@echo \u6587\u4ef6\u5927\u5c0f\uff1a%~z0\n@echo.\n@echo \u76d8\u7b26\u548c\u8def\u5f84[%%~dp0]\uff1a%~dp0\n@echo \u6587\u4ef6\u540d\u548c\u6269\u5c55\u540d[%%~nx0]\uff1a%~nx0\n@echo \u5f53\u524dCMD\u9ed8\u8ba4\u76ee\u5f55[%%cd%%]\uff1a%cd%\n@echo.\n\nset "CurrentDirName=%~dp0"\n\nfor /f "delims=" %%i in ("%CurrentDirName:~0,-1%") do (echo \u76ee\u5f55\u540d\uff1a %%~ni)\n\npause >nul\n\ngoto GTCONTINUE\n\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u65f6\u95f4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-batch"},"@echo off\n@REM @Author: xianghongai@gmail.com\n\nset varTimeTemp1=%time: =0%\nset varTimeTemp2=%varTimeTemp1::=%\nset varTime=%varTimeTemp2:~0,6%\nset varDate=%date:~0,4%%date:~5,2%%date:~8,2%%varTime%\n@echo \u5f53\u524d\u65e5\u671f\u65f6\u95f4\uff1a%varDate%\nrem %a:~[m[,n]]%\n@echo %varDate:~0,4%\u5e74 %varDate:~4,2%\u6708 %varDate:~6,2%\u65e5 %varDate:~8,2%\u65f6 %varDate:~10,2%\u5206 %varDate:~12%\u79d2\npause\n\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u5b57\u7b26\u5207\u5206"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-batch"},'@echo off\n@REM @Author: xianghongai@gmail.com\n\nrem tokens=\u6709\u65f6\u8868\u793a\u63d0\u53d6\u5168\u90e8\u3002\nrem tokens=m\u8868\u793a\u63d0\u53d6\u7b2cm\u5217\u3002\nrem tokens=m,n\u8868\u793a\u63d0\u53d6\u7b2cm\u5217\u548c\u7b2cn\u5217\u3002\nrem tokens=m-n\u8868\u793a\u63d0\u53d6\u7b2cm\u5217\u81f3\u7b2cn\u5217\u3002\nrem tokens=*\u8868\u793a\u5220\u9664\u6bcf\u884c\u524d\u9762\u7684\u7a7a\u683c\u3002\u5ffd\u7565\u884c\u9996\u7684\u6240\u6709\u7a7a\u683c\u3002\nrem tokens=m*\u63d0\u53d6\u7b2cm\u5217\u4ee5\u540e\u7684\u6240\u6709\u5b57\u7b26\uff0c\u661f\u53f7\u8868\u793a\u5269\u4f59\u7684\u5b57\u7b26\u3002\nrem tokens=m,*\u63d0\u53d6\u7b2cm\u5217\u4ee5\u540e\u7684\u6240\u6709\u5b57\u7b26\uff0c\u661f\u53f7\u8868\u793a\u5269\u4f59\u7684\u5b57\u7b26\u3002\nrem delims\u6307\u660e\u70b9\u53f7\u3001\u51cf\u53f7\u3001\u7a7a\u683c\u4e3a\u5206\u5272\u7b26\uff0c\u9ed8\u8ba4\u662f\u7a7a\u683c\u548ctab\u4e3a\u5206\u5272\u7b26\uff0cdelims==\u53cadelims=\u8868\u793a\u4e0d\u8981\u5206\u5272\u7b26\n\n:GTBegin\ncls\n\nset str="123,456,789,0,abc-def,ghi,jkl-mno,pqr,stu,vwx,yz"\n\nfor /f "delims=" %%i in (%str%) do echo \u5b57\u7b26:%%i\n@echo.\n\n@echo tokens=1 delims=-\nfor /f "tokens=1 delims=-" %%i in (%str%) do echo %%i\n@echo.\n\n@echo tokens=1,6 delims=,-\nfor /f "tokens=1,6 delims=,-" %%i in (%str%) do echo %%i %%j\n@echo.\n\n@echo tokens=2-6 delims=,-\nfor /f "tokens=3-6 delims=,-" %%i in (%str%) do echo %%i %%j %%k\n@echo.\n\n@echo tokens=6* delims=,-\nfor /f "tokens=6* delims=,-" %%i in (%str%) do echo %%i %%j\n@echo.\n\n@echo tokens=6,* delims=,-\nfor /f "tokens=6,* delims=,-" %%i in (%str%) do echo %%i %%j\n@echo.\n\npause>nul\ngoto GTBegin\n\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u66f4\u65b0\u65e5\u5fd7\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2017-05-28")))}p.isMDXComponent=!0}}]);