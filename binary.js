!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var a in n)("object"==typeof exports?exports:t)[a]=n[a]}}(this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function a(t){t.animate({opacity:0},100,function(){t.css("visibility","hidden").css("display","none")})}function i(t){t.css("visibility","visible").css("display","block").animate({opacity:1},100)}function s(){$(".nav-menu").on("click",function(t){t.stopPropagation(),a($(".top-nav-menu li ul")),a($("#language_select, #select_language"));var e=$("#all-accounts, #all-accounts-top");1==+e.css("opacity")?a(e):i(e)})}function l(){$(".top-nav-menu > li").on("click",function(t){t.stopPropagation(),a($("#all-accounts, #all-accounts-top")),a($("#language_select, #select_language"));var e=$(this).find(" > ul"),n=$(".top-nav-menu li ul");1==+e.css("opacity")&&$(t.target).find("span").hasClass("nav-caret")?a(n):0==+e.css("opacity")&&$(t.target).find("span").hasClass("nav-caret")&&n.animate({opacity:0},100,function(){n.css("visibility","hidden"),i(e)})})}function o(){$(document).on("click",function(){a($("#all-accounts, #all-accounts-top")),a($(".top-nav-menu li ul")),a($("#language_select, #select_language"))})}function c(){$(".languages").on("click",function(t){t.stopPropagation(),a($(".top-nav-menu li ul")),a($("#all-accounts, #all-accounts-top"));var e=$("#language_select, #select_language");1==+e.css("opacity")?a(e):i(e)})}function r(t){function e(t){for(var e=0;e<n.length;e++)n[e](t)}var n=[];t.filter(":not(.follow-default)").delegate(".tm-a,.tm-a-2","click",function(t){t.preventDefault();var n=$(t.target);if(n.parents("li:first").attr("id")){var a=n.parents(".tm-ul"),i=a.find(".tm-a,.tm-a-2").removeClass("a-active").end().find(".menu-wrap-a .tm-a").unwrap().unwrap().end().end().addClass("a-active").parents(".tm-li").addClass("active").removeClass("hover").find(".tm-li-2").addClass("active").end().find(".tm-a").wrap('<span class="menu-wrap-a"><span class="menu-wrap-b"></span></span>').end().siblings().removeClass("active").find(".tm-li-2").removeClass("active").end().end().end(),s=a.find("span.tm-a");s.replaceWith('<a href="#" class="'+s.attr("class")+'">'+s.html()+"</a>");var l=i.parents("li"),o=l.find(".tm-ul-2 .a-active"),c=l.attr("id");o.length||(o=l.find(".tm-a-2:first").addClass("a-active"),o.length?(i=o,c=o.parents("li").attr("id")):c=l.attr("id")),e({id:c,target:i,content:$("#"+c+"-content").removeClass("invisible").siblings(":not(.sticky)").addClass("invisible").end(),menu:l.parents("ul.tm-ul"),event:t})}return!1})}function u(){$(".tm-ul > li").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")}),r($(".content-tab-container").find(".tm-ul"))}function f(){function t(t){var e=0;return t.children().each(function(){e+=$(this).outerHeight(!0)}),e}function e(e){var n=e.parent(),a=e.siblings("ul");if(n.is(".active")){var i=t(a);a.animate({height:i+"px"},300)}else a.animate({height:"0px"},300);n.siblings().find("ul").animate({height:"0px"},300)}$(".sidebar-collapsible a").on("click",function(t){t.preventDefault();var n=$(this),a=$(this).parent();n.toggleClass("selected").parent().siblings().find("a").removeClass("selected"),a.toggleClass("active").siblings().removeClass("active"),e(n)})}Object.defineProperty(e,"__esModule",{value:!0}),e.hide_menu=a,e.show_menu=i,e.navMenuListener=s,e.topNavMenuListener=l,e.documentListener=o,e.langListener=c,e.initMenuContent=r,e.tabListener=u,e.sidebarCollapsible=f,$(document).ready(function(){s(),l(),o(),c(),u(),f()})}])});
//# sourceMappingURL=binary.js.map