!function(c){c(document).ready(function(){var t=new Date,e=(t.getFullYear(),t.getMonth()+1+"月"+t.getDate()+"日");[{key:"12月13日",value:"南京大屠杀死难者国家公祭日，和平呀和平，需要良知践行，需要力量捍卫！"},{key:"5月12日",value:"汶川大地震，人类很脆弱，敬畏自然！"},{key:"4月4日",value:"COVID-19，众生平等！人类还有太多的未知和挑战！"}].some(function(t){if(t.key===e)return document.querySelector("html").classList.add("don-t-forget"),console.log("%s，%s",t.key,t.value),!0});var n=c("#search-form-wrap"),o=!1,a=function(){o=!0},i=function(t){setTimeout(function(){o=!1,t&&t()},200)};c("#nav-search-btn").on("click",function(){o||(a(),n.addClass("on"),i(function(){c(".search-form-input").focus()}))}),c(".search-form-input").on("blur",function(){a(),n.removeClass("on"),i()}),c("body").on("click",function(){c(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(t){t.stopPropagation();var e=c(this),n=e.attr("data-url"),o=encodeURIComponent(n),a="article-share-box-"+e.attr("data-id"),i=e.offset();if(c("#"+a).length){if((r=c("#"+a)).hasClass("on"))return void r.removeClass("on")}else{var s=['<div id="'+a+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+o+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+o+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+o+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+o+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join(""),r=c(s);c("body").append(r)}c(".article-share-box.on").hide(),r.css({top:i.top+25,left:i.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){c(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault(),t.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),c(".article-entry").each(function(t){c(this).find("img").each(function(){if(!c(this).parent().hasClass("fancybox")){var t=this.alt;t&&c(this).after('<span class="caption">'+t+"</span>"),c(this).wrap('<a href="'+this.src+'" title="'+t+'" class="fancybox"></a>')}}),c(this).find(".fancybox").each(function(){c(this).attr("rel","article"+t)})}),c.fancybox&&c(".fancybox").fancybox();var s=c("body"),r=!1;c("#main-nav-toggle").on("click",function(){r||(r=!0,s.toggleClass("mobile-nav-on"),setTimeout(function(){r=!1},200))}),c("#page").on("click",function(){!r&&s.hasClass("mobile-nav-on")&&s.removeClass("mobile-nav-on")}),c(window).scroll(function(){100<c(window).scrollTop()?c(".js_top").removeClass("hidden").fadeIn(1500):c(".js_top").fadeOut(500).addClass("hidden")}),c(".js_top").on("click",function(){return console.log("fuck"),c("body,html").animate({scrollTop:0},300),!1})})}(jQuery),function(e){"use strict";var t={backToTop:function(){var t=$(".js-top");$(e).scroll(function(){100<$(e).scrollTop()?t.fadeIn(1e3):t.fadeOut(1e3)}),t.click(function(){$("body,html").animate({scrollTop:0})})},visits:function(){var o,n,t,a,i,s=$(".post-visits");function r(t,e){var n=t.text()+" "+e;t.text(n).css("visibility","visible")}if("object"==typeof AV){var e=AV.Object.extend("Counter");console.log(e),1===s.length?(n=e,t=new AV.Query(n),a=s.data("url").trim(),i=s.data("title").trim(),t.equalTo("url",a),t.find().then(function(t){if(0<t.length)t[0].save(null,{fetchWhenSave:!0}).then(function(t){return t.increment("time",1),t.save()}).then(function(t){r(s,t.get("time"))});else{var e=new n;e.set("title",i),e.set("url",a),e.set("time",1),e.save().then(function(t){r(s,e.get("time"))})}},function(t){console.log("Error:"+t.code+" "+t.message)})):(o=e,s.each(function(){var n=$(this),t=new AV.Query(o),e=n.data("url").trim();t.equalTo("url",e),t.find().then(function(t){if(0===t.length)r(n,0);else{var e=t[0];r(n,e.get("time"))}},function(t){console.log("Error:"+t.code+" "+t.message)})}))}}};e.Even=t}(window);