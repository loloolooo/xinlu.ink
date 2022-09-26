"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[7066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,k=h["".concat(p,".").concat(d)]||h[d]||u[d]||s;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={description:"\u5305\u542b\u6388\u6743\u516c\u94a5\u5217\u8868\u7684 known_hosts \u4e0e authorized_keys \u6587\u4ef6\u3002"},a="\u5df2\u6388\u6743\u516c\u94a5\u5217\u8868",i={unversionedId:"ssh/known_hosts-and-authorized_keys",id:"ssh/known_hosts-and-authorized_keys",title:"\u5df2\u6388\u6743\u516c\u94a5\u5217\u8868",description:"\u5305\u542b\u6388\u6743\u516c\u94a5\u5217\u8868\u7684 known_hosts \u4e0e authorized_keys \u6587\u4ef6\u3002",source:"@site/topics/computer-applications-technology/ssh/known_hosts-and-authorized_keys.md",sourceDirName:"ssh",slug:"/ssh/known_hosts-and-authorized_keys",permalink:"/topics/computer-applications-technology/ssh/known_hosts-and-authorized_keys",draft:!1,tags:[],version:"current",lastUpdatedBy:"xianghongai",lastUpdatedAt:1664206638,formattedLastUpdatedAt:"2022\u5e749\u670826\u65e5",frontMatter:{description:"\u5305\u542b\u6388\u6743\u516c\u94a5\u5217\u8868\u7684 known_hosts \u4e0e authorized_keys \u6587\u4ef6\u3002"},sidebar:"computer-applications-technology",previous:{title:"SSH \u516c\u94a5\u7528\u4e8e\u670d\u52a1\u5668\u8eab\u4efd\u9a8c\u8bc1",permalink:"/topics/computer-applications-technology/ssh/ssh-keys-for-server"},next:{title:"SSH \u914d\u7f6e",permalink:"/topics/computer-applications-technology/ssh/ssh-config"}},p={},l=[{value:"known_hosts",id:"known_hosts",level:2},{value:"authorized_keys",id:"authorized_keys",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5df2\u6388\u6743\u516c\u94a5\u5217\u8868"},"\u5df2\u6388\u6743\u516c\u94a5\u5217\u8868"),(0,o.kt)("p",null,"\u8bbe\u5907\u4e4b\u95f4\u7684\u53ef\u4fe1\u5173\u8054\uff0c\u53d7\u6258\u5efa\u7acb\u8fd9\u79cd\u5173\u8054\u7684\u5730\u65b9\u5305\u62ec\u201cknown_hosts\u201d\u3001\u201cauthorized_keys\u201d\u548c\u201cCertificate Authority\u201d\u5217\u8868\u3002"),(0,o.kt)("p",null,"\u4ece\u670d\u52a1\u5668\u89d2\u5ea6\u6765\u8bf4\uff0c\u9700\u8981\u5bf9\u8bbf\u95ee\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u662f\u5426\u6709\u6743\u8bbf\u95ee (\u53c2\u8003\u3008SSH \u516c\u94a5\u7528\u4e8e\u670d\u52a1\u5668\u8eab\u4efd\u9a8c\u8bc1\u3009\u7ae0\u8282)\u3002"),(0,o.kt)("p",null,"\u4ece\u5ba2\u6237\u7aef\u89d2\u5ea6\u6765\u8bf4\uff0c\u9700\u8981\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u4e3a\u5df2\u77e5\u670d\u52a1\u5668 (\u53c2\u8003\u3008SSH \u7b80\u4ecb - \u5de5\u4f5c\u65b9\u5f0f\u3009\u7ae0\u8282)\u3002"),(0,o.kt)("h2",{id:"known_hosts"},"known_hosts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"known_hosts")," \u5728\u5ba2\u6237\u7aef\u7ef4\u62a4\uff0c\u9ed8\u8ba4\u8def\u5f84\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/known_hosts"),"\u3002"),(0,o.kt)("p",null,"\u4fdd\u5b58\u5df2\u7ecf\u8fde\u63a5\u5230 SSH \u670d\u52a1\u5668\u7684\u5bc6\u94a5\u5217\u8868\uff0c\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u670d\u52a1\u5668\u7684\u5408\u6cd5\u6027\u3002"),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u6bcf\u6b21\u8fde\u63a5\u5230 SSH \u670d\u52a1\u5668\u65f6\uff0c\u90fd\u4f1a\u5411\u670d\u52a1\u5668\u5c55\u793a\u516c\u94a5\uff0c\u4ee5\u53ca\u62e5\u6709\u76f8\u5e94\u79c1\u94a5\u7684\u8bc1\u660e\uff0c\u56f0\u6b64 known_hosts \u6587\u4ef6\u4e0d\u80fd\u88ab\u5176\u4ed6\u7528\u6237\u8bfb\u5199\uff0c\u6587\u4ef6\u6743\u9650\u987b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"600"),"\uff0c\u907f\u514d\u6ee5\u7528\u3002"),(0,o.kt)("h2",{id:"authorized_keys"},"authorized_keys"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"authorized_key")," \u5728\u670d\u52a1\u5668\u7ef4\u62a4\uff0c\u9ed8\u8ba4\u8def\u5f84\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),"\u3002"),(0,o.kt)("p",null,"\u4fdd\u5b58\u670d\u52a1\u5668\u6388\u6743\u7684\u516c\u94a5\u5217\u8868\u3002\u5f53\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u5668\u65f6\uff0c\u670d\u52a1\u5668\u901a\u8fc7\u68c0\u67e5\u5b58\u50a8\u5728\u6b64\u6587\u4ef6\u4e2d\u7684\u7b7e\u540d\u516c\u94a5\u6765\u9a8c\u8bc1\u5ba2\u6237\u7aef\u3002"))}u.isMDXComponent=!0}}]);