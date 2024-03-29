/*
	jQuery Navigation Plugin
	Copyright (c) 2011 Daniel Thomson

	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php
*/

(function(c)
{c.fn.navPlugin=function(a)
{var b=c.extend(true,
{}
,
{itemWidth:150,itemHeight:50,navEffect:"fade",speed:200}
,a);this.each(function()
{var d=c(this);d.toprow=d.children("li");d.submenu=d.children("li.toprow").children("ul");d.stack=d.find("li:has(ul)");c.fn.navPlugin.addClasses(d);c.fn.navPlugin.addCss(d,b);c.fn.navPlugin.addTopRowEffect(d,b);c.fn.navPlugin.addSubMenuEffect(d,b)}
);return this}
;c.fn.navPlugin.addClasses=function(a)
{a.toprow.addClass("toprow");a.submenu.addClass("submenu"); a.stack.addClass("stack")}
;c.fn.navPlugin.addCss=function(a,b)
{a.css(
{display:"inline"}
);a.find("li").css(
{display:"block",width:b.itemWidth+"px",height:b.itemHeight+"px","float":"left",position:"relative"}
);a.find("li").find("a").css(
{height:b.itemHeight-2+"px",width:b.itemWidth-2+"px",display:"block","line-height":b.itemHeight-2+"px"}
);a.find("li").find("ul").css(
{"margin-left":"0px",position:"absolute",top:"-1px",left:"0px",display:"block",height:"0px",width:"0px"}
);a.stack.css(
{position:"relative"}
); a.stack.find("ul").css(
{position:"absolute",top:"-1px",left:"0px"}
);a.toprow.css(
{"float":"left"}
);a.toprow.find("ul").css(
{"margin-top":b.itemHeight+1+"px"}
);a.toprow.find("ul").find("li").css(
{position:"relative",display:"none"}
);a.toprow.find("ul").find("li").find("ul").css(
{left:b.itemWidth+"px",top:"0px",position:"absolute","margin-top":"0px"}
);a.toprow.find("ul").find("li").find("ul").find("li").css(
{"margin-top":"0px"}
);a.submenu.find("li").css(
{display:"none"}
)}
;c.fn.navPlugin.addTopRowEffect= function(a,b)
{a.children("li.toprow").mouseover(function()
{clearTimeout(a.timer);c(this).addClass("hover");var d=c(this).children("ul").children("li"),e=c(this).siblings("li").children("ul").children("li");if(b.navEffect=="slide")
{d.slideDown(b.speed);e.slideUp(b.speed)}
else
{d.css("display","block");e.fadeOut(b.speed)}
d.children("ul").css("display","none");return false}
);a.children("li.toprow").mouseout(function()
{c(this).removeClass("hover");c.fn.navPlugin.setTimer(a,b);return false}
)}
;c.fn.navPlugin.addSubMenuEffect= function(a,b)
{a.children("li.toprow").find("li").mouseover(function()
{clearTimeout(a.timer);c(this).addClass("hover");c(this).children("ul").css("display","block");var d=c(this).children("ul").children("li"),e=c(this).siblings("li").children("ul").children("li");if(b.navEffect=="slide")
{d.slideDown(b.speed);e.slideUp(b.speed)}
else
{d.css("display","block");e.fadeOut(b.speed)}
d.children("ul").css("display","none");return false}
);a.find("li.toprow").find("li").mouseout(function()
{c(this).removeClass("hover"); c.fn.navPlugin.setTimer(a,b);return false}
)}
;c.fn.navPlugin.setTimer=function(a,b)
{clearTimeout(a.timer);a.timer=setTimeout(function()
{c.fn.navPlugin.hideNav(a,b)}
,500)}
;c.fn.navPlugin.hideNav=function(a,b)
{var d=a.find("li.toprow ul");if(b.navEffect=="slide")
{d.children("li").slideUp(b.speed);d.children("ul").slideUp(b.speed)}
else
{d.children("li").fadeOut(b.speed);d.children("ul").fadeOut(b.speed)}
}
}
)(jQuery);
