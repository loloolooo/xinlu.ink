"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"SFTP \u4f20\u8f93\u6570\u636e"},l="SFTP",o={unversionedId:"ssh/sftp",id:"ssh/sftp",title:"SFTP \u4f20\u8f93\u6570\u636e",description:"Secure File Transfer Protocol \u534f\u8bae\u7528\u4e8e\u5728\u7cfb\u7edf\u4e4b\u95f4\u5b89\u5168\u7684\u4f20\u8f93\u6570\u636e\u3002",source:"@site/topics/computer-applications-technology/ssh/sftp.md",sourceDirName:"ssh",slug:"/ssh/sftp",permalink:"/topics/computer-applications-technology/ssh/sftp",draft:!1,tags:[],version:"current",lastUpdatedBy:"xianghongai",lastUpdatedAt:1664199353,formattedLastUpdatedAt:"2022\u5e749\u670826\u65e5",frontMatter:{title:"SFTP \u4f20\u8f93\u6570\u636e"},sidebar:"computer-applications-technology",previous:{title:"SCP \u590d\u5236\u6587\u4ef6/\u6587\u4ef6\u5939",permalink:"/topics/computer-applications-technology/ssh/scp"}},p={},s=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:2},{value:"\u6307\u4ee4 (remote)",id:"\u6307\u4ee4-remote",level:3},{value:"\u6307\u4ee4 (local)",id:"\u6307\u4ee4-local",level:3},{value:"\u90e8\u5206\u9009\u9879",id:"\u90e8\u5206\u9009\u9879",level:2},{value:"Resources",id:"resources",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sftp"},"SFTP"),(0,i.kt)("p",null,"Secure File Transfer Protocol \u534f\u8bae\u7528\u4e8e\u5728\u7cfb\u7edf\u4e4b\u95f4\u5b89\u5168\u7684\u4f20\u8f93\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sftp <username>@<remote hostname or IP address>")),(0,i.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sftp root@126.168.88.8"),", Connect to SFTP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get example.txt"),", Download file. Syntax: ",(0,i.kt)("inlineCode",{parentName:"li"},"get [-afpR] remote [local]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"put example.txt"),", Upload file. Syntax: ",(0,i.kt)("inlineCode",{parentName:"li"},"put [-afpR] local [remote]"))),(0,i.kt)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"help")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quit"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"exit"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bye"),", Quit sftp")),(0,i.kt)("h3",{id:"\u6307\u4ee4-remote"},"\u6307\u4ee4 (remote)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cd <path>"),", Change remote directory to 'path'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pwd"),", Remote working directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ls"),", Display remote directory listing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mkdir <path>"),", Create remote directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rm <path>"),", Delete remote file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rmdir <path>"),", Remove remote directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rename oldpath newpath"),", Rename remote file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mget *.txt"),", Download multiple files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reget [-fpR] remote [local]"),", Resume download file")),(0,i.kt)("h3",{id:"\u6307\u4ee4-local"},"\u6307\u4ee4 (local)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lcd <path>"),", Change local directory to 'path'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lpwd"),", Local working directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lls"),", Display local directory listing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lmkdir <path>"),", Create local directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mput *.txt"),", Upload multiple files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reput [-fpR] local [remote]"),", Resume upload file")),(0,i.kt)("h2",{id:"\u90e8\u5206\u9009\u9879"},"\u90e8\u5206\u9009\u9879"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-4, Forces sftp to use IPv4 addresses only.\n-6, Forces sftp to use IPv6 addresses only.\n-C, Compression enable.\n-c cipher, Selects the cipher to use for encrypting the data transfers. This option is directly passed to ssh.\n-f, Requests that files be flushed to disk immediately after transfer.\n-i identity_file, Selects the file from which the identity (private key) for public key authentication is read.\n-l limit, Limits the used bandwidth, specified in Kbit/s (\u9650\u5236\u5e26\u5bbd)\n-p, Preserves modification times, access times, and file mode bits from the source file. (\u4fdd\u7559\u6e90\u6587\u4ef6\u4e2d\u7684\u4fee\u6539\u65f6\u95f4\u3001\u8bbf\u95ee\u65f6\u95f4\u548c\u6587\u4ef6\u6a21\u5f0f\u4f4d)\n-q, Quiet mode.\n-R num_requests, Specify how many requests may be outstanding at any one time. Increasing this may slightly improve file transfer speed but will increase memory usage. The default is 64 outstanding requests.\n-r, Recursively copy entire directories.\n-v, Verbose mode. Causes sftp and ssh to print debugging messages about their progress. This is helpful in debugging connection, authentication, and configuration problems.\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://man.openbsd.org/sftp.1"},"sftp(1) - OpenBSD manual pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/Fedora/26/html-single/System_Administrators_Guide/index.html#s2-ssh-clients-sftp"},"8.4.3.\xa0Using the sftp Utility - Fedora"))))}c.isMDXComponent=!0}}]);