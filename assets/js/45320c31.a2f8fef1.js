"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[9720],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},X=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),X=l(n),h=o,d=X["".concat(c,".").concat(h)]||X[h]||p[h]||s;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=X;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}X.displayName="MDXCreateElement"},7252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const s={description:"\u5bf9\u53ef\u80fd\u51fa\u73b0\u7684\u610f\u5916\u95ee\u9898\u8fdb\u884c\u6392\u67e5\u3002"},a="SSH \u5e38\u89c1\u95ee\u9898",i={unversionedId:"troubleshooting-ssh",id:"troubleshooting-ssh",title:"SSH \u5e38\u89c1\u95ee\u9898",description:"\u5bf9\u53ef\u80fd\u51fa\u73b0\u7684\u610f\u5916\u95ee\u9898\u8fdb\u884c\u6392\u67e5\u3002",source:"@site/topics/ssh/troubleshooting-ssh.md",sourceDirName:".",slug:"/troubleshooting-ssh",permalink:"/topics/ssh/troubleshooting-ssh",draft:!1,tags:[],version:"current",lastUpdatedBy:"xianghongai",lastUpdatedAt:1665848646,formattedLastUpdatedAt:"2022\u5e7410\u670815\u65e5",frontMatter:{description:"\u5bf9\u53ef\u80fd\u51fa\u73b0\u7684\u610f\u5916\u95ee\u9898\u8fdb\u884c\u6392\u67e5\u3002"},sidebar:"ssh",previous:{title:"SFTP \u4f20\u8f93\u6570\u636e",permalink:"/topics/ssh/sftp"}},c={},l=[{value:"WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!",id:"warning-remote-host-identification-has-changed",level:2},{value:"Resources",id:"resources",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssh-\u5e38\u89c1\u95ee\u9898"},"SSH \u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h2",{id:"warning-remote-host-identification-has-changed"},"WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!"),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh -i <\u79c1\u94a5\u6587\u4ef6\u8def\u5f84> <username>@<IP address or domain name>")," \u65f6\u51fa\u73b0\u5f02\u5e38\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the ED25519 key sent by the remote host is\nSHA256:XXXXXXXXXXXXXXXXXXXXX/XXX/+XXXXXXXXXXXXXX/X.\nPlease contact your system administrator.\nAdd correct host key in /c/Users/XXXXX/.ssh/known_hosts to get rid of this message.\nOffending ECDSA key in /c/Users/XXXXX/.ssh/known_hosts:24\nHost key for XXX.XXX.XX.XX has changed and you have requested strict checking.\nHost key verification failed.\n")),(0,o.kt)("p",null,"\u89e3\u51b3\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},'ssh-keygen -R "XXX.XXX.XX.XX"')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/troubleshooting-ssh"},"Troubleshooting SSH - GitHub Docs"))))}p.isMDXComponent=!0}}]);