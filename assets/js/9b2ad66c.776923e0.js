"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[354],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const i={title:"SCP \u590d\u5236\u6587\u4ef6/\u6587\u4ef6\u5939"},a="SCP",s={unversionedId:"scp",id:"scp",title:"SCP \u590d\u5236\u6587\u4ef6/\u6587\u4ef6\u5939",description:"Secure Copy Protocol \u534f\u8bae\u7528\u4e8e\u5728\u7cfb\u7edf\u4e4b\u95f4\u5b89\u5168\u7684\u590d\u5236\u6587\u4ef6/\u6587\u4ef6\u5939\u3002",source:"@site/topics/ssh/scp.md",sourceDirName:".",slug:"/scp",permalink:"/topics/ssh/scp",draft:!1,tags:[],version:"current",lastUpdatedBy:"xianghongai",lastUpdatedAt:1686473256,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{title:"SCP \u590d\u5236\u6587\u4ef6/\u6587\u4ef6\u5939"},sidebar:"ssh",previous:{title:"\u5bc6\u94a5\u6307\u7eb9\u9274\u6743",permalink:"/topics/ssh/fingerprint"},next:{title:"SFTP \u4f20\u8f93\u6570\u636e",permalink:"/topics/ssh/sftp"}},l={},p=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u6587\u4ef6\u6743\u9650",id:"\u6587\u4ef6\u6743\u9650",level:2},{value:"\u90e8\u5206\u9009\u9879",id:"\u90e8\u5206\u9009\u9879",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scp"},"SCP"),(0,o.kt)("p",null,"Secure Copy Protocol \u534f\u8bae\u7528\u4e8e\u5728\u7cfb\u7edf\u4e4b\u95f4\u5b89\u5168\u7684\u590d\u5236\u6587\u4ef6/\u6587\u4ef6\u5939\u3002"),(0,o.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scp <source_file_name> <username>@<remote hostname or IP address>:<path>")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scp [option] <username>@<source_host>:<path/to/source/file> <username>@<target_host>:<target/path>")),(0,o.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u4ece\u672c\u5730\u4e3b\u673a\u590d\u5236\u5230\u8fdc\u7a0b\u4e3b\u673a (Local \u2192 Server)\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"scp local_dir/example1.txt Desktop/example2.txt root@126.168.88.8:/home/remote_dir")),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u5f55\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"scp -r sample_folder root@126.168.88.8:/home/remote_dir")))),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u4ece\u8fdc\u7a0b\u4e3b\u673a\u590d\u5236\u5230\u672c\u5730\u4e3b\u673a (Server \u2192 Local)\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scp root@126.168.88.8:/home/remote_dir/example.txt local_dir")))),(0,o.kt)("li",{parentName:"ul"},"\u5728\u4e24\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\u4e4b\u95f4\u590d\u5236\u6587\u4ef6 (Server \u2192 Server)\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scp root@126.168.88.8:/home/remote_dir/example.txt root@126.168.88.9:/home/another_remote_dir"))))),(0,o.kt)("h2",{id:"\u6587\u4ef6\u6743\u9650"},"\u6587\u4ef6\u6743\u9650"),(0,o.kt)("p",null,"\u590d\u5236\u6587\u4ef6\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u9047\u5230\u5f02\u5e38\uff0c\u5148\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," \u767b\u5f55\u8bd5\u8bd5\uff0c\u5982\u679c\u80fd\u767b\u5f55\uff0c\u5c1d\u8bd5\u4fee\u6539\u6587\u4ef6\u5939\u6743\u9650 (\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo chmod 600 <path>"),")\u3002"),(0,o.kt)("h2",{id:"\u90e8\u5206\u9009\u9879"},"\u90e8\u5206\u9009\u9879"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-4, Forces scp to use IPv4 addresses only.\n-6, Forces scp to use IPv6 addresses only.\n-C, Compression enable.\n-c cipher, Selects the cipher to use for encrypting the data transfers. This option is directly passed to ssh.\n-i identity_file, Selects the file from which the identity (private key) for public key authentication is read.\n-l limit, Limits the used bandwidth, specified in Kbit/s (\u9650\u5236\u5e26\u5bbd)\n-p, Preserves modification times, access times, and file mode bits from the source file. (\u4fdd\u7559\u6e90\u6587\u4ef6\u4e2d\u7684\u4fee\u6539\u65f6\u95f4\u3001\u8bbf\u95ee\u65f6\u95f4\u548c\u6587\u4ef6\u6a21\u5f0f\u4f4d)\n-P, port (\u6307\u5b9a\u7aef\u53e3)\n-q, Quiet mode.\n-r, Recursively copy entire directories.\n-v, Verbose mode. Causes scp and ssh to print debugging messages about their progress. This is helpful in debugging connection, authentication, and configuration problems.\n")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man.openbsd.org/scp.1"},"scp(1) - OpenBSD manual pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/Fedora/26/html-single/System_Administrators_Guide/index.html#s2-ssh-clients-scp"},"8.4.2.\xa0Using the scp Utility - Fedora"))))}u.isMDXComponent=!0}}]);