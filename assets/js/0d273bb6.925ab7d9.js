"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[7772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={description:"\u63d0\u5347\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\u5b89\u5168\u6027\u548c\u4fbf\u6377\u6027\u3002"},i="SSH \u516c\u94a5\u7528\u4e8e\u670d\u52a1\u5668\u8eab\u4efd\u9a8c\u8bc1",s={unversionedId:"ssh/ssh-keys-for-server",id:"ssh/ssh-keys-for-server",title:"SSH \u516c\u94a5\u7528\u4e8e\u670d\u52a1\u5668\u8eab\u4efd\u9a8c\u8bc1",description:"\u63d0\u5347\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\u5b89\u5168\u6027\u548c\u4fbf\u6377\u6027\u3002",source:"@site/topics/computer-applications-technology/ssh/ssh-keys-for-server.md",sourceDirName:"ssh",slug:"/ssh/ssh-keys-for-server",permalink:"/topics/computer-applications-technology/ssh/ssh-keys-for-server",draft:!1,tags:[],version:"current",lastUpdatedBy:"xianghongai",lastUpdatedAt:1664123575,formattedLastUpdatedAt:"2022\u5e749\u670825\u65e5",frontMatter:{description:"\u63d0\u5347\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\u5b89\u5168\u6027\u548c\u4fbf\u6377\u6027\u3002"},sidebar:"computer-applications-technology",previous:{title:"SSH \u516c\u94a5\u7528\u4e8e Git \u670d\u52a1\u8eab\u4efd\u9a8c\u8bc1",permalink:"/topics/computer-applications-technology/ssh/ssh-keys-for-git-server"},next:{title:"\u5bc6\u94a5\u6307\u7eb9\u9274\u6743",permalink:"/topics/computer-applications-technology/ssh/fingerprint"}},l={},p=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u4f7f\u7528\u5bc6\u7801\u767b\u5f55",id:"\u4f7f\u7528\u5bc6\u7801\u767b\u5f55",level:2},{value:"\u4f7f\u7528\u5bc6\u94a5\u767b\u5f55",id:"\u4f7f\u7528\u5bc6\u94a5\u767b\u5f55",level:2},{value:"\u8d4b\u4e88\u79c1\u94a5\u6587\u4ef6\u4ec5\u53ef\u8bfb\u6743\u9650",id:"\u8d4b\u4e88\u79c1\u94a5\u6587\u4ef6\u4ec5\u53ef\u8bfb\u6743\u9650",level:3},{value:"\u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55",id:"\u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-\u516c\u94a5\u7528\u4e8e\u670d\u52a1\u5668\u8eab\u4efd\u9a8c\u8bc1"},"SSH \u516c\u94a5\u7528\u4e8e\u670d\u52a1\u5668\u8eab\u4efd\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u4f7f\u7528 SSH \u5bc6\u94a5\u5bf9\u4f5c\u4e3a\u767b\u5f55\u51ed\u8bc1\uff0c\u76f8\u6bd4\u7528\u6237\u540d\u548c\u5bc6\u7801\u7684\u8ba4\u8bc1\u65b9\u5f0f\u5177\u5907\u4ee5\u4e0b\u4f18\u52bf\uff1a"),(0,a.kt)("p",null,"\u5b89\u5168\u6027\uff1a\u76f8\u6bd4\u666e\u901a\u7684\u5bc6\u7801\u767b\u5f55\uff0cSSH \u5bc6\u94a5\u5bf9\u7684\u5b89\u5168\u5f3a\u5ea6\u66f4\u9ad8\uff0c\u53ef\u907f\u514d\u66b4\u529b\u7834\u89e3\u3002SSH \u5bc6\u94a5\u5bf9\u91c7\u7528\u975e\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u751f\u6210\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u516c\u5f00\u5bc6\u94a5"),"\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\uff0c\u53ea\u6709\u7528\u5bf9\u5e94\u7684",(0,a.kt)("strong",{parentName:"p"},"\u79c1\u6709\u5bc6\u94a5"),"\u624d\u80fd\u89e3\u5bc6\u3002\u79c1\u94a5\u53ef\u7531\u7528\u6237\u81ea\u5df1\u4fdd\u7ba1\uff0c\u65e0\u9700\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u3002"),(0,a.kt)("p",null,"\u4fbf\u6377\u6027\uff1a\u4f7f\u7528 SSH \u5bc6\u94a5\u5bf9\u53ef\u4ee5\u5b9e\u73b0\u4e00\u952e\u8fdc\u7a0b\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u65e0\u9700\u6bcf\u6b21\u767b\u5f55\u90fd\u8f93\u5165\u5bc6\u7801\u3002\u53e6\u5916\uff0c\u5728\u540c\u65f6\u7ef4\u62a4\u591a\u53f0\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u573a\u666f\u4e0b\uff0c\u4f7f\u7528 SSH \u5bc6\u94a5\u5bf9\u767b\u5f55\u53ef\u4ee5\u5b9e\u73b0\u66f4\u52a0\u65b9\u4fbf\u3001\u7edf\u4e00\u7684\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u516c\u94a5\uff1a\u5728 Linux \u7cfb\u7edf\u4e2d\uff0c\u516c\u94a5\u5185\u5bb9\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys")," \u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u79c1\u94a5\uff1a\u62e5\u6709\u79c1\u94a5\u7684\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u89e3\u5bc6\u767b\u5f55\u4fe1\u606f\uff0c\u7528\u6237\u9700\u8981\u5c06\u79c1\u94a5\u4fdd\u5b58\u5728\u4e00\u4e2a\u5b89\u5168\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5df2\u83b7\u53d6\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801 (\u6216\u5bc6\u94a5)"),(0,a.kt)("li",{parentName:"ul"},"\u786e\u8ba4\u672c\u5730\u8ba1\u7b97\u673a\u4e0e\u8fdc\u7a0b\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u901a\u6b63\u5e38"),(0,a.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u670d\u52a1\u5668\u9632\u706b\u5899\u5df2\u653e\u5f00 ",(0,a.kt)("inlineCode",{parentName:"li"},"22")," \u7aef\u53e3\u8bbf\u95ee")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5bc6\u7801\u767b\u5f55"},"\u4f7f\u7528\u5bc6\u7801\u767b\u5f55"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssh <username>@<IP address or domain name>")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5bc6\u94a5\u767b\u5f55"},"\u4f7f\u7528\u5bc6\u94a5\u767b\u5f55"),(0,a.kt)("h3",{id:"\u8d4b\u4e88\u79c1\u94a5\u6587\u4ef6\u4ec5\u53ef\u8bfb\u6743\u9650"},"\u8d4b\u4e88\u79c1\u94a5\u6587\u4ef6\u4ec5\u53ef\u8bfb\u6743\u9650"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux\nchmod 400 <\u79c1\u94a5\u7edd\u5bf9\u8def\u5f84>\n\n# Windows 10 \u6216 Windows Server 2019 \u7cfb\u7edf\uff0cCDM\nicacls <\u79c1\u94a5\u8def\u5f84> /grant <Windows \u7cfb\u7edf\u7528\u6237\u5e10\u6237>:F\nicacls <\u79c1\u94a5\u8def\u5f84> /inheritancelevel:r\n")),(0,a.kt)("h3",{id:"\u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55"},"\u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssh -i <\u79c1\u94a5\u6587\u4ef6\u8def\u5f84> <username>@<IP address or domain name>")))}u.isMDXComponent=!0}}]);