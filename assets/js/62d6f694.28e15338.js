"use strict";(self.webpackChunkxiang_hong_ai=self.webpackChunkxiang_hong_ai||[]).push([[432],{6915:e=>{e.exports=JSON.parse('{"pluginId":"batch-in-action","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"batch-in-action":[{"type":"category","label":"\u300a\u6279\u5904\u7406\u7b14\u8bb0\u300b","items":[{"type":"link","label":"\u6279\u5904\u7406\u57fa\u7840","href":"/topics/batch-in-action/","docId":"README"},{"type":"link","label":"\u83b7\u53d6\u76ee\u5f55\u540d\u3001\u6587\u4ef6\u540d\u6216\u8def\u5f84","href":"/topics/batch-in-action/get-path","docId":"get-path"},{"type":"link","label":"\u901a\u8fc7\u6587\u672c\u5185\u5bb9\u884c\u521b\u5efa\u6587\u4ef6\u5939","href":"/topics/batch-in-action/create-folders-from-each-line-of-a-textfile","docId":"create-folders-from-each-line-of-a-textfile"},{"type":"link","label":"\u901a\u8fc7\u6587\u672c\u5185\u5bb9\u91cd\u547d\u540d\u6587\u4ef6","href":"/topics/batch-in-action/rename-files-from-text","docId":"rename-files-from-text"},{"type":"link","label":"\u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6","href":"/topics/batch-in-action/create-folder-using-part-of-filename-and-move-file-into","docId":"create-folder-using-part-of-filename-and-move-file-into"},{"type":"link","label":"\u591a\u8f6e\u4fee\u6539\u6587\u4ef6\u540d","href":"/topics/batch-in-action/multiple-times-rename-files","docId":"multiple-times-rename-files"},{"type":"link","label":"\u6587\u4ef6\u540d\u64cd\u4f5c","href":"/topics/batch-in-action/file-rename","docId":"file-rename"},{"type":"link","label":"\u76ee\u5f55\u540d\u64cd\u4f5c","href":"/topics/batch-in-action/directory-rename","docId":"directory-rename"},{"type":"link","label":"\u63d0\u53d6\u6240\u6709\u5b50\u76ee\u5f55\u6587\u4ef6(\u62f7\u8d1d/\u526a\u5207)","href":"/topics/batch-in-action/extract-files-from-subfolders-into-the-main-folder","docId":"extract-files-from-subfolders-into-the-main-folder"},{"type":"link","label":"\u6279\u91cf\u526a\u8f91\u97f3\u9891","href":"/topics/batch-in-action/multiple-audioclips","docId":"multiple-audioclips"},{"type":"link","label":"\u53bb\u9664\u6307\u5b9a\u5b57\u7b26\u4e4b\u524d\u6216\u4e4b\u540e\u7684\u6587\u4ef6\u540d","href":"/topics/batch-in-action/removing-a-text-after-and-before-specific-characters-in-files-names","docId":"removing-a-text-after-and-before-specific-characters-in-files-names"},{"type":"link","label":"\u5408\u5e76\u6587\u672c","href":"/topics/batch-in-action/merge-text-files","docId":"merge-text-files"},{"type":"link","label":"\u4ece\u89c6\u9891\u5bfc\u51fa\u9ad8\u8d28\u91cf GIF \u56fe\u7247","href":"/topics/batch-in-action/export-high-quality-gif-pictures-from-video","docId":"export-high-quality-gif-pictures-from-video"},{"type":"link","label":"\u8def\u5f84/\u65f6\u95f4/\u5b57\u7b26\u5207\u5206\u7b49\u64cd\u4f5c","href":"/topics/batch-in-action/delims","docId":"delims"},{"type":"link","label":"\u53f3\u952e\u83dc\u5355\u6267\u884c\u6279\u5904\u7406\u6587\u4ef6","href":"/topics/batch-in-action/run-batch-at-folder-context-menu","docId":"run-batch-at-folder-context-menu"}],"collapsed":true,"collapsible":true,"href":"/topics/batch-in-action/category"}]},"docs":{"create-folder-using-part-of-filename-and-move-file-into":{"id":"create-folder-using-part-of-filename-and-move-file-into","title":"\u6839\u636e\u6587\u4ef6\u540d\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u5b58\u653e\u6587\u4ef6","description":"\u4ee5\u524d\u7ed9\u753b\u5bb6\u505a\u52a9\u7406\uff0c\u8981\u7ef4\u62a4\u8001\u5e08\u51e0\u5341\u5e74\u7684\u7535\u5b50\u4f5c\u54c1\u6570\u636e\u3002","sidebar":"batch-in-action"},"create-folders-from-each-line-of-a-textfile":{"id":"create-folders-from-each-line-of-a-textfile","title":"\u901a\u8fc7\u6587\u672c\u5185\u5bb9\u884c\u521b\u5efa\u6587\u4ef6\u5939","description":"\u8fd8\u662f\u5728\u7535\u5546\u56e2\u961f\uff0c\u6bcf\u6b21\u5904\u7406\u65b0\u5546\u54c1\u548c\u4e0a\u67b6\u65b0\u5546\u54c1\uff0c\u5546\u54c1\u592a\u591a\uff0c\u5c0f\u4f19\u4f34\u4ee5\u524d\u662f\u4e00\u4e2a\u4e00\u4e2a\u590d\u5236\u7c98\u8d34\u6539\u540d\u5efa\u7acb\u76ee\u5f55\u5f52\u6863\u6587\u4ef6\uff0c\u6bd4\u8f83\u9ebb\u70e6\uff0c\u5404\u5546\u54c1\u6709\u4e00\u5b9a\u5c5e\u6027\uff0c\u4e0d\u80fd\u76f4\u63a5\u6279\u5904\u7406\u5efa\u7acb\uff0c\u4e8e\u662f\u8ba9\u5c0f\u4f19\u4f34\u5148 Excel \u6309\u4ed6\u4eec\u547d\u540d\u89c4\u5219\u62d6\u4e00\u884c\u884c\u6570\u636e\uff0c\u7136\u540e\u4fdd\u5b58\u5728\u6587\u672c\u6587\u4ef6\u4e2d\uff0c\u7136\u540e\u7528\u6279\u5904\u7406\u4e00\u6b21\u6027\u5efa\u7acb\u5404\u76ee\u5f55\u3002","sidebar":"batch-in-action"},"delims":{"id":"delims","title":"\u8def\u5f84/\u65f6\u95f4/\u5b57\u7b26\u5207\u5206\u7b49\u64cd\u4f5c","description":"\u672c\u7bc7\u719f\u6089\u64cd\u4f5c\u6587\u4ef6\u8def\u5f84\u3001\u65f6\u95f4\uff0c\u6e29\u4e60\u5b57\u7b26\u5207\u5206 (Delims)\u3002","sidebar":"batch-in-action"},"directory-rename":{"id":"directory-rename","title":"\u76ee\u5f55\u540d\u64cd\u4f5c","description":"\u6279\u91cf\u5bf9\u76ee\u5f55\u5b50\u76ee\u5f55\u8fdb\u884c\u52a0\u524d\u7f00\u3001\u52a0\u540e\u7f00\u3001\u66ff\u6362\u5b57\u7b26\u3001\u5220\u9664\u5b57\u7b26\u7b49\u64cd\u4f5c\uff0c\u8fd8\u6709\u5220\u9664\u7a7a\u76ee\u5f55\u3002","sidebar":"batch-in-action"},"export-high-quality-gif-pictures-from-video":{"id":"export-high-quality-gif-pictures-from-video","title":"\u4ece\u89c6\u9891\u5bfc\u51fa\u9ad8\u8d28\u91cf GIF \u56fe\u7247","description":"\u4f9d\u8d56 ffmpeg\uff0c\u914d\u7f6e ffmpeg \u5230\u73af\u5883\u53d8\u91cf\u3002","sidebar":"batch-in-action"},"extract-files-from-subfolders-into-the-main-folder":{"id":"extract-files-from-subfolders-into-the-main-folder","title":"\u63d0\u53d6\u6240\u6709\u5b50\u76ee\u5f55\u6587\u4ef6(\u62f7\u8d1d/\u526a\u5207)","description":"\u63d0\u53d6\u5f53\u524d\u76ee\u5f55\u53ca\u5b50\u76ee\u5f55\u4e0b\u6240\u6709\u5b50\u6587\u4ef6\u5230\u5f53\u524d\u6839\u76ee\u5f55\uff0c","sidebar":"batch-in-action"},"file-rename":{"id":"file-rename","title":"\u6587\u4ef6\u540d\u64cd\u4f5c","description":"\u6bcf\u6b21\u770b\u5230\u5c0f\u4f19\u4f34 Bulk Rename Utility \u73a9\u4e0d\u8f6c\uff0c\u624b\u52a8\u5bf9\u5927\u91cf\u76ee\u5f55\u5b50\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u8fdb\u884c\u52a0\u524d\u7f00\u3001\u52a0\u540e\u7f00\u3001\u66ff\u6362\u3001\u5220\u9664\u7b49\u6539\u540d\u64cd\u4f5c\uff0c\u5c31\u975e\u5e38\u5fc3\u75bc\u3002","sidebar":"batch-in-action"},"get-path":{"id":"get-path","title":"\u83b7\u53d6\u76ee\u5f55\u540d\u3001\u6587\u4ef6\u540d\u6216\u8def\u5f84","description":"\u4ee5\u524d\u5728\u7535\u5546\u56e2\u961f\uff0c\u5c0f\u4f19\u4f34\u6bcf\u5929\u8981\u5904\u7406\u5f88\u591a\u5546\u54c1\u6587\u4ef6\uff0c\u4e0a\u5343\u4e2a\u5546\u54c1\u627e\u5bf9\u5e94\u6587\u4ef6\u4e0d\u65b9\u4fbf\u3002\u65e9\u5148\u4e0d\u77e5\u9053\u6709 Everything \u8fd9\u4e2a\u5de5\u5177\uff0c\u81ea\u5df1\u7528 C# \u5199\u4e86\u5feb\u901f\u641c\u5bfb\u548c\u5b9a\u4f4d\u6587\u4ef6\u3001\u76ee\u5f55\u7684\u5c0f\u5de5\u5177\uff0c\u5176\u4e2d\u8def\u5f84\u6570\u636e\u83b7\u53d6\uff0c\u7528 C# \u751f\u6210\u6279\u5904\u7406\u6587\u4ef6\u6267\u884c\u8c03\u7528\u5b9e\u73b0\uff0c\u7136\u540e\u5173\u952e\u5b57\u5339\u914d\u627e\u76ee\u5f55\u548c\u6587\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u4f5c\u7528\u4e8e\u5c40\u57df\u7f51\u3002","sidebar":"batch-in-action"},"merge-text-files":{"id":"merge-text-files","title":"\u5408\u5e76\u6587\u672c","description":"\u672c\u7bc7\u8bb2\u5408\u5e76\u6587\u672c\u5185\u5bb9\uff0c\u5982\u4ea4\u53c9\u5408\u5e76\u3001\u53bb\u9664\u91cd\u590d\u5185\u5bb9\u884c\u548c\u7a7a\u884c\u3001\u884c\u9996\u884c\u5c3e\u52a0\u7279\u5b9a\u5b57\u7b26\u3001\u52a0\u6307\u5b9a\u5206\u5272\u7ebf\u7b49\u64cd\u4f5c\u3002","sidebar":"batch-in-action"},"multiple-audioclips":{"id":"multiple-audioclips","title":"\u6279\u91cf\u526a\u8f91\u97f3\u9891","description":"\u4f9d\u8d56 ffmpeg\uff0c\u914d\u7f6e ffmpeg \u5230\u73af\u5883\u53d8\u91cf\u3002","sidebar":"batch-in-action"},"multiple-times-rename-files":{"id":"multiple-times-rename-files","title":"\u591a\u8f6e\u4fee\u6539\u6587\u4ef6\u540d","description":"\u591a\u8f6e\u6279\u91cf\u4fee\u6539\u76ee\u5f55\u4e0b\u6587\u4ef6\u540d\uff0c\u66f4\u6539\u6587\u4ef6\u540d\u5927\u5199\u4e3a\u5c0f\u5199\u3002","sidebar":"batch-in-action"},"README":{"id":"README","title":"\u6279\u5904\u7406\u57fa\u7840","description":"\u672c\u7cfb\u5217\u7b14\u8bb0\u662f\u6211\u5728 Windows \u5e73\u53f0\u4e0a\uff0c\u591a\u5e74\u5de5\u4f5c\u548c\u751f\u6d3b\u4e2d\u79ef\u7d2f\u4e0b\u6765\u7684\u6279\u5904\u7406\u76f8\u5173\u6280\u672f\u70b9\u3002","sidebar":"batch-in-action"},"removing-a-text-after-and-before-specific-characters-in-files-names":{"id":"removing-a-text-after-and-before-specific-characters-in-files-names","title":"\u53bb\u9664\u6307\u5b9a\u5b57\u7b26\u4e4b\u524d\u6216\u4e4b\u540e\u7684\u6587\u4ef6\u540d","description":"\u672c\u7bc7\u719f\u6089 \\"tokens=1-3 delims=.-\\" \u7ed3\u5408\u64cd\u4f5c","sidebar":"batch-in-action"},"rename-files-from-text":{"id":"rename-files-from-text","title":"\u901a\u8fc7\u6587\u672c\u5185\u5bb9\u91cd\u547d\u540d\u6587\u4ef6","description":"\u5bf9\u4e00\u4e2a\u76ee\u5f55\u4e0b\uff0c\u4e0d\u80fd\u5168\u90e8\u89c4\u5219\u7684\u547d\u540d\u6587\u4ef6\uff0c\u5148\u6309\u4e0a\u6587\u4ecb\u7ecd\u7684\u5728 Excel \u62d6\u884c\u6570\u636e\u4fdd\u5b58\u5728\u6587\u672c\uff0c\u7136\u540e\u7528\u6279\u5904\u7406\u4e00\u6b21\u6027\u5904\u7406\u5404\u6587\u4ef6\uff0c\u5728\u5904\u7406\u524d\u7ed9\u4e00\u4e2a\u5bf9\u5e94\u547d\u540d\u7684\u63d0\u793a\uff0c\u5148\u5ba1\u68c0\u662f\u5426\u8fbe\u5230\u65e2\u5b9a\u76ee\u7684\u3002","sidebar":"batch-in-action"},"run-batch-at-folder-context-menu":{"id":"run-batch-at-folder-context-menu","title":"\u53f3\u952e\u83dc\u5355\u6267\u884c\u6279\u5904\u7406\u6587\u4ef6","description":"\u672c\u7bc7\u65e0\u77e5\u8bc6\u70b9\uff0c\u53ea\u662f\u5c06\u524d\u9762\u5199\u7684\uff0c\u5f04\u5230\u53f3\u952e\u83dc\u5355\uff0c\u65b9\u4fbf\u968f\u65f6\u8c03\u7528\u3002","sidebar":"batch-in-action"}}}')}}]);