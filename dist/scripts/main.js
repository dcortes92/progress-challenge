"use strict";$(function(){var n,r,s,t=$("#myProgressModal"),i=56,a=125,o=a-i,d=100*i/a;t.find(".progress-bar .current").html("$"+i),t.find(".progress-bar").css({width:d+"%"}),t.find(".remaining").html("$"+o),t.find(".target").html("Target $"+a),t.on("show.bs.modal",function(){n=$(".progress .progress-bar"),r=n.width(),s=n.find("span"),n.width(0),s.fadeOut(0)}),t.on("shown.bs.modal",function(){n.animate({width:r+"%"},200),s.fadeIn(1e3)})});