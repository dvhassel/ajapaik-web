!function(e){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],e);else if("object"==typeof exports)module.exports=e(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";e(jQuery,moment)}}(function($,_){"use strict";if(!_)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var i=function(i,p){var c,u,a,d,n,r,o,s,l,f={},m=!0,h=!1,y=!1,w=0,t=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],b=["days","months","years","decades"],g=["top","bottom","auto"],v=["left","right","auto"],k=["default","top","bottom"],D={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t",delete:46,46:"delete"},C={},x=function(){return void 0!==_.tz&&void 0!==p.timeZone&&null!==p.timeZone&&""!==p.timeZone},T=function(e){var t;return t=null==e?_():_.isDate(e)||_.isMoment(e)?_(e):x()?_.tz(e,r,p.useStrict,p.timeZone):_(e,r,p.useStrict),x()&&t.tz(p.timeZone),t},M=function(e){if("string"!=typeof e||1<e.length)throw new TypeError("isEnabled expects a single character string parameter");switch(e){case"y":return-1!==n.indexOf("Y");case"M":return-1!==n.indexOf("M");case"d":return-1!==n.toLowerCase().indexOf("d");case"h":case"H":return-1!==n.toLowerCase().indexOf("h");case"m":return-1!==n.indexOf("m");case"s":return-1!==n.indexOf("s");default:return!1}},S=function(){return M("h")||M("m")||M("s")},O=function(){return M("y")||M("M")||M("d")},P=function(){var e,t,a,n=$("<div>").addClass("timepicker-hours").append($("<table>").addClass("table-condensed")),r=$("<div>").addClass("timepicker-minutes").append($("<table>").addClass("table-condensed")),i=$("<div>").addClass("timepicker-seconds").append($("<table>").addClass("table-condensed")),o=[(e=$("<tr>"),t=$("<tr>"),a=$("<tr>"),M("h")&&(e.append($("<td>").append($("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append($("<i>").addClass(p.icons.up)))),t.append($("<td>").append($("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:p.tooltips.pickHour}).attr("data-action","showHours"))),a.append($("<td>").append($("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append($("<i>").addClass(p.icons.down))))),M("m")&&(M("h")&&(e.append($("<td>").addClass("separator")),t.append($("<td>").addClass("separator").html(":")),a.append($("<td>").addClass("separator"))),e.append($("<td>").append($("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append($("<i>").addClass(p.icons.up)))),t.append($("<td>").append($("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:p.tooltips.pickMinute}).attr("data-action","showMinutes"))),a.append($("<td>").append($("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append($("<i>").addClass(p.icons.down))))),M("s")&&(M("m")&&(e.append($("<td>").addClass("separator")),t.append($("<td>").addClass("separator").html(":")),a.append($("<td>").addClass("separator"))),e.append($("<td>").append($("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append($("<i>").addClass(p.icons.up)))),t.append($("<td>").append($("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:p.tooltips.pickSecond}).attr("data-action","showSeconds"))),a.append($("<td>").append($("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append($("<i>").addClass(p.icons.down))))),d||(e.append($("<td>").addClass("separator")),t.append($("<td>").append($("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:p.tooltips.togglePeriod}))),a.append($("<td>").addClass("separator"))),$("<div>").addClass("timepicker-picker").append($("<table>").addClass("table-condensed").append([e,t,a])))];return M("h")&&o.push(n),M("m")&&o.push(r),M("s")&&o.push(i),o},E=function(){var e,t,a,n=$("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),r=$("<div>").addClass("datepicker").append((t=$("<thead>").append($("<tr>").append($("<th>").addClass("prev").attr("data-action","previous").append($("<i>").addClass(p.icons.previous))).append($("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",p.calendarWeeks?"6":"5")).append($("<th>").addClass("next").attr("data-action","next").append($("<i>").addClass(p.icons.next)))),a=$("<tbody>").append($("<tr>").append($("<td>").attr("colspan",p.calendarWeeks?"8":"7"))),[$("<div>").addClass("datepicker-days").append($("<table>").addClass("table-condensed").append(t).append($("<tbody>"))),$("<div>").addClass("datepicker-months").append($("<table>").addClass("table-condensed").append(t.clone()).append(a.clone())),$("<div>").addClass("datepicker-years").append($("<table>").addClass("table-condensed").append(t.clone()).append(a.clone())),$("<div>").addClass("datepicker-decades").append($("<table>").addClass("table-condensed").append(t.clone()).append(a.clone()))])),i=$("<div>").addClass("timepicker").append(P()),o=$("<ul>").addClass("list-unstyled"),s=$("<li>").addClass("picker-switch"+(p.collapse?" accordion-toggle":"")).append((e=[],p.showTodayButton&&e.push($("<td>").append($("<a>").attr({"data-action":"today",title:p.tooltips.today}).append($("<i>").addClass(p.icons.today)))),!p.sideBySide&&O()&&S()&&e.push($("<td>").append($("<a>").attr({"data-action":"togglePicker",title:p.tooltips.selectTime}).append($("<i>").addClass(p.icons.time)))),p.showClear&&e.push($("<td>").append($("<a>").attr({"data-action":"clear",title:p.tooltips.clear}).append($("<i>").addClass(p.icons.clear)))),p.showClose&&e.push($("<td>").append($("<a>").attr({"data-action":"close",title:p.tooltips.close}).append($("<i>").addClass(p.icons.close)))),$("<table>").addClass("table-condensed").append($("<tbody>").append($("<tr>").append(e)))));return p.inline&&n.removeClass("dropdown-menu"),d&&n.addClass("usetwentyfour"),M("s")&&!d&&n.addClass("wider"),p.sideBySide&&O()&&S()?(n.addClass("timepicker-sbs"),"top"===p.toolbarPlacement&&n.append(s),n.append($("<div>").addClass("row").append(r.addClass("col-md-6")).append(i.addClass("col-md-6"))),"bottom"===p.toolbarPlacement&&n.append(s),n):("top"===p.toolbarPlacement&&o.append(s),O()&&o.append($("<li>").addClass(p.collapse&&S()?"collapse show":"").append(r)),"default"===p.toolbarPlacement&&o.append(s),S()&&o.append($("<li>").addClass(p.collapse&&O()?"collapse":"").append(i)),"bottom"===p.toolbarPlacement&&o.append(s),n.append(o))},H=function(){var e,t=(h||i).position(),a=(h||i).offset(),n=p.widgetPositioning.vertical,r=p.widgetPositioning.horizontal;if(p.widgetParent)e=p.widgetParent.append(y);else if(i.is("input"))e=i.after(y).parent();else{if(p.inline)return void(e=i.append(y));(e=i).children().first().after(y)}if("auto"===n&&(n=a.top+1.5*y.height()>=$(window).height()+$(window).scrollTop()&&y.height()+i.outerHeight()<a.top?"top":"bottom"),"auto"===r&&(r=e.width()<a.left+y.outerWidth()/2&&a.left+y.outerWidth()>$(window).width()?"right":"left"),"top"===n?y.addClass("top").removeClass("bottom"):y.addClass("bottom").removeClass("top"),"right"===r?y.addClass("pull-right"):y.removeClass("pull-right"),"static"===e.css("position")&&(e=e.parents().filter(function(){return"static"!==$(this).css("position")}).first()),0===e.length)throw new Error("datetimepicker component should be placed within a non-static positioned container");y.css({top:"top"===n?"auto":t.top+i.outerHeight(),bottom:"top"===n?e.outerHeight()-(e===i?0:t.top):"auto",left:"left"===r?e===i?0:t.left:"auto",right:"left"===r?"auto":e.outerWidth()-i.outerWidth()-(e===i?0:t.left)})},I=function(e){"dp.change"===e.type&&(e.date&&e.date.isSame(e.oldDate)||!e.date&&!e.oldDate)||i.trigger(e)},Y=function(e){"y"===e&&(e="YYYY"),I({type:"dp.update",change:e,viewDate:u.clone()})},q=function(e){y&&(e&&(o=Math.max(w,Math.min(3,o+e))),y.find(".datepicker > div").hide().filter(".datepicker-"+t[o].clsName).show())},B=function(e,t){if(!e.isValid())return!1;if(p.disabledDates&&"d"===t&&(a=e,!0===p.disabledDates[a.format("YYYY-MM-DD")]))return!1;var a,n,r,i;if(p.enabledDates&&"d"===t&&(n=e,!0!==p.enabledDates[n.format("YYYY-MM-DD")]))return!1;if(p.minDate&&e.isBefore(p.minDate,t))return!1;if(p.maxDate&&e.isAfter(p.maxDate,t))return!1;if(p.daysOfWeekDisabled&&"d"===t&&-1!==p.daysOfWeekDisabled.indexOf(e.day()))return!1;if(p.disabledHours&&("h"===t||"m"===t||"s"===t)&&(r=e,!0===p.disabledHours[r.format("H")]))return!1;if(p.enabledHours&&("h"===t||"m"===t||"s"===t)&&(i=e,!0!==p.enabledHours[i.format("H")]))return!1;if(p.disabledTimeIntervals&&("h"===t||"m"===t||"s"===t)){var o=!1;if($.each(p.disabledTimeIntervals,function(){if(e.isBetween(this[0],this[1]))return!(o=!0)}),o)return!1}return!0},j=function(){var e,t,a,n=y.find(".datepicker-days"),r=n.find("th"),i=[],o=[];if(O()){for(r.eq(0).find("span").attr("title",p.tooltips.prevMonth),r.eq(1).attr("title",p.tooltips.selectMonth),r.eq(2).find("span").attr("title",p.tooltips.nextMonth),n.find(".disabled").removeClass("disabled"),r.eq(1).text(u.format(p.dayViewHeaderFormat)),B(u.clone().subtract(1,"M"),"M")||r.eq(0).addClass("disabled"),B(u.clone().add(1,"M"),"M")||r.eq(2).addClass("disabled"),e=u.clone().startOf("M").startOf("w").startOf("d"),a=0;a<42;a++)0===e.weekday()&&(t=$("<tr>"),p.calendarWeeks&&t.append('<td class="cw">'+e.week()+"</td>"),i.push(t)),o=["day"],e.isBefore(u,"M")&&o.push("old"),e.isAfter(u,"M")&&o.push("new"),e.isSame(c,"d")&&!m&&o.push("active"),B(e,"d")||o.push("disabled"),e.isSame(T(),"d")&&o.push("today"),0!==e.day()&&6!==e.day()||o.push("weekend"),I({type:"dp.classify",date:e,classNames:o}),t.append('<td data-action="selectDay" data-day="'+e.format("L")+'" class="'+o.join(" ")+'">'+e.date()+"</td>"),e.add(1,"d");var s,d,l;n.find("tbody").empty().append(i),s=y.find(".datepicker-months"),d=s.find("th"),l=s.find("tbody").find("span"),d.eq(0).find("span").attr("title",p.tooltips.prevYear),d.eq(1).attr("title",p.tooltips.selectYear),d.eq(2).find("span").attr("title",p.tooltips.nextYear),s.find(".disabled").removeClass("disabled"),B(u.clone().subtract(1,"y"),"y")||d.eq(0).addClass("disabled"),d.eq(1).text(u.year()),B(u.clone().add(1,"y"),"y")||d.eq(2).addClass("disabled"),l.removeClass("active"),c.isSame(u,"y")&&!m&&l.eq(c.month()).addClass("active"),l.each(function(e){B(u.clone().month(e),"M")||$(this).addClass("disabled")}),function(){var e=y.find(".datepicker-years"),t=e.find("th"),a=u.clone().subtract(5,"y"),n=u.clone().add(6,"y"),r="";for(t.eq(0).find("span").attr("title",p.tooltips.prevDecade),t.eq(1).attr("title",p.tooltips.selectDecade),t.eq(2).find("span").attr("title",p.tooltips.nextDecade),e.find(".disabled").removeClass("disabled"),p.minDate&&p.minDate.isAfter(a,"y")&&t.eq(0).addClass("disabled"),t.eq(1).text(a.year()+"-"+n.year()),p.maxDate&&p.maxDate.isBefore(n,"y")&&t.eq(2).addClass("disabled");!a.isAfter(n,"y");)r+='<span data-action="selectYear" class="year'+(a.isSame(c,"y")&&!m?" active":"")+(B(a,"y")?"":" disabled")+'">'+a.year()+"</span>",a.add(1,"y");e.find("td").html(r)}(),function(){var e,t=y.find(".datepicker-decades"),a=t.find("th"),n=_({y:u.year()-u.year()%100-1}),r=n.clone().add(100,"y"),i=n.clone(),o=!1,s=!1,d="";for(a.eq(0).find("span").attr("title",p.tooltips.prevCentury),a.eq(2).find("span").attr("title",p.tooltips.nextCentury),t.find(".disabled").removeClass("disabled"),(n.isSame(_({y:1900}))||p.minDate&&p.minDate.isAfter(n,"y"))&&a.eq(0).addClass("disabled"),a.eq(1).text(n.year()+"-"+r.year()),(n.isSame(_({y:2e3}))||p.maxDate&&p.maxDate.isBefore(r,"y"))&&a.eq(2).addClass("disabled");!n.isAfter(r,"y");)e=n.year()+12,o=p.minDate&&p.minDate.isAfter(n,"y")&&p.minDate.year()<=e,s=p.maxDate&&p.maxDate.isAfter(n,"y")&&p.maxDate.year()<=e,d+='<span data-action="selectDecade" class="decade'+(c.isAfter(n)&&c.year()<=e?" active":"")+(B(n,"y")||o||s?"":" disabled")+'" data-selection="'+(n.year()+6)+'">'+(n.year()+1)+" - "+(n.year()+12)+"</span>",n.add(12,"y");d+="<span></span><span></span><span></span>",t.find("td").html(d),a.eq(1).text(i.year()+1+"-"+n.year())}()}},e=function(){var e,t,a=y.find(".timepicker span[data-time-component]");d||(e=y.find(".timepicker [data-action=togglePeriod]"),t=c.clone().add(12<=c.hours()?-12:12,"h"),e.text(c.format("A")),B(t,"h")?e.removeClass("disabled"):e.addClass("disabled")),a.filter("[data-time-component=hours]").text(c.format(d?"HH":"hh")),a.filter("[data-time-component=minutes]").text(c.format("mm")),a.filter("[data-time-component=seconds]").text(c.format("ss")),function(){var e=y.find(".timepicker-hours table"),t=u.clone().startOf("d"),a=[],n=$("<tr>");for(11<u.hour()&&!d&&t.hour(12);t.isSame(u,"d")&&(d||u.hour()<12&&t.hour()<12||11<u.hour());)t.hour()%4==0&&(n=$("<tr>"),a.push(n)),n.append('<td data-action="selectHour" class="hour'+(B(t,"h")?"":" disabled")+'">'+t.format(d?"HH":"hh")+"</td>"),t.add(1,"h");e.empty().append(a)}(),function(){for(var e=y.find(".timepicker-minutes table"),t=u.clone().startOf("h"),a=[],n=$("<tr>"),r=1===p.stepping?5:p.stepping;u.isSame(t,"h");)t.minute()%(4*r)==0&&(n=$("<tr>"),a.push(n)),n.append('<td data-action="selectMinute" class="minute'+(B(t,"m")?"":" disabled")+'">'+t.format("mm")+"</td>"),t.add(r,"m");e.empty().append(a)}(),function(){for(var e=y.find(".timepicker-seconds table"),t=u.clone().startOf("m"),a=[],n=$("<tr>");u.isSame(t,"m");)t.second()%20==0&&(n=$("<tr>"),a.push(n)),n.append('<td data-action="selectSecond" class="second'+(B(t,"s")?"":" disabled")+'">'+t.format("ss")+"</td>"),t.add(5,"s");e.empty().append(a)}()},A=function(){y&&(j(),e())},F=function(e){var t=m?null:c;if(!e)return m=!0,a.val(""),i.data("date",""),I({type:"dp.change",date:!1,oldDate:t}),void A();if(e=e.clone().locale(p.locale),x()&&e.tz(p.timeZone),1!==p.stepping)for(e.minutes(Math.round(e.minutes()/p.stepping)*p.stepping).seconds(0);p.minDate&&e.isBefore(p.minDate);)e.add(p.stepping,"minutes");B(e)?(u=(c=e).clone(),a.val(c.format(n)),i.data("date",c.format(n)),m=!1,A(),I({type:"dp.change",date:c.clone(),oldDate:t})):(p.keepInvalid?I({type:"dp.change",date:e,oldDate:t}):a.val(m?"":c.format(n)),I({type:"dp.error",date:e,oldDate:t}))},L=function(){var t=!1;return y?(y.find(".collapse").each(function(){var e=$(this).data("collapse");return!e||!e.transitioning||!(t=!0)}),t||(h&&h.hasClass("btn")&&h.toggleClass("active"),y.hide(),$(window).off("resize",H),y.off("click","[data-action]"),y.off("mousedown",!1),y.remove(),y=!1,I({type:"dp.hide",date:c.clone()}),a.blur(),u=c.clone()),f):f},W=function(){F(null)},z=function(e){return void 0===p.parseInputDate?(!_.isMoment(e)||e instanceof Date)&&(e=T(e)):e=p.parseInputDate(e),e},N={next:function(){var e=t[o].navFnc;u.add(t[o].navStep,e),j(),Y(e)},previous:function(){var e=t[o].navFnc;u.subtract(t[o].navStep,e),j(),Y(e)},pickerSwitch:function(){q(1)},selectMonth:function(e){var t=$(e.target).closest("tbody").find("span").index($(e.target));u.month(t),o===w?(F(c.clone().year(u.year()).month(u.month())),p.inline||L()):(q(-1),j()),Y("M")},selectYear:function(e){var t=parseInt($(e.target).text(),10)||0;u.year(t),o===w?(F(c.clone().year(u.year())),p.inline||L()):(q(-1),j()),Y("YYYY")},selectDecade:function(e){var t=parseInt($(e.target).data("selection"),10)||0;u.year(t),o===w?(F(c.clone().year(u.year())),p.inline||L()):(q(-1),j()),Y("YYYY")},selectDay:function(e){var t=u.clone();$(e.target).is(".old")&&t.subtract(1,"M"),$(e.target).is(".new")&&t.add(1,"M"),F(t.date(parseInt($(e.target).text(),10))),S()||p.keepOpen||p.inline||L()},incrementHours:function(){var e=c.clone().add(1,"h");B(e,"h")&&F(e)},incrementMinutes:function(){var e=c.clone().add(p.stepping,"m");B(e,"m")&&F(e)},incrementSeconds:function(){var e=c.clone().add(1,"s");B(e,"s")&&F(e)},decrementHours:function(){var e=c.clone().subtract(1,"h");B(e,"h")&&F(e)},decrementMinutes:function(){var e=c.clone().subtract(p.stepping,"m");B(e,"m")&&F(e)},decrementSeconds:function(){var e=c.clone().subtract(1,"s");B(e,"s")&&F(e)},togglePeriod:function(){F(c.clone().add(12<=c.hours()?-12:12,"h"))},togglePicker:function(e){var t,a=$(e.target),n=a.closest("ul"),r=n.find(".show"),i=n.find(".collapse:not(.show)");if(r&&r.length){if((t=r.data("collapse"))&&t.transitioning)return;r.collapse?(r.collapse("hide"),i.collapse("show")):(r.removeClass("show"),i.addClass("show")),a.is("i")?a.toggleClass(p.icons.time+" "+p.icons.date):a.find("i").toggleClass(p.icons.time+" "+p.icons.date)}},showPicker:function(){y.find(".timepicker > div:not(.timepicker-picker)").hide(),y.find(".timepicker .timepicker-picker").show()},showHours:function(){y.find(".timepicker .timepicker-picker").hide(),y.find(".timepicker .timepicker-hours").show()},showMinutes:function(){y.find(".timepicker .timepicker-picker").hide(),y.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){y.find(".timepicker .timepicker-picker").hide(),y.find(".timepicker .timepicker-seconds").show()},selectHour:function(e){var t=parseInt($(e.target).text(),10);d||(12<=c.hours()?12!==t&&(t+=12):12===t&&(t=0)),F(c.clone().hours(t)),N.showPicker.call(f)},selectMinute:function(e){F(c.clone().minutes(parseInt($(e.target).text(),10))),N.showPicker.call(f)},selectSecond:function(e){F(c.clone().seconds(parseInt($(e.target).text(),10))),N.showPicker.call(f)},clear:W,today:function(){var e=T();B(e,"d")&&F(e)},close:L},V=function(e){return $(e.currentTarget).is(".disabled")||N[$(e.currentTarget).data("action")].apply(f,arguments),!1},Z=function(){var e;return a.prop("disabled")||!p.ignoreReadonly&&a.prop("readonly")||y||(void 0!==a.val()&&0!==a.val().trim().length?F(z(a.val().trim())):m&&p.useCurrent&&(p.inline||a.is("input")&&0===a.val().trim().length)&&(e=T(),"string"==typeof p.useCurrent&&(e={year:function(e){return e.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(e){return e.date(1).hours(0).seconds(0).minutes(0)},day:function(e){return e.hours(0).seconds(0).minutes(0)},hour:function(e){return e.seconds(0).minutes(0)},minute:function(e){return e.seconds(0)}}[p.useCurrent](e)),F(e)),y=E(),function(){var e=$("<tr>"),t=u.clone().startOf("w").startOf("d");for(!0===p.calendarWeeks&&e.append($("<th>").addClass("cw").text("#"));t.isBefore(u.clone().endOf("w"));)e.append($("<th>").addClass("dow").text(t.format("dd"))),t.add(1,"d");y.find(".datepicker-days thead").append(e)}(),function(){for(var e=[],t=u.clone().startOf("y").startOf("d");t.isSame(u,"y");)e.push($("<span>").attr("data-action","selectMonth").addClass("month").text(t.format("MMM"))),t.add(1,"M");y.find(".datepicker-months td").empty().append(e)}(),y.find(".timepicker-hours").hide(),y.find(".timepicker-minutes").hide(),y.find(".timepicker-seconds").hide(),A(),q(),$(window).on("resize",H),y.on("click","[data-action]",V),y.on("mousedown",!1),h&&h.hasClass("btn")&&h.toggleClass("active"),H(),y.show(),p.focusOnShow&&!a.is(":focus")&&a.focus(),I({type:"dp.show"})),f},R=function(){return y?L():Z()},Q=function(e){var t,a,n,r,i=null,o=[],s={},d=e.which;for(t in C[d]="p",C)C.hasOwnProperty(t)&&"p"===C[t]&&(o.push(t),parseInt(t,10)!==d&&(s[t]=!0));for(t in p.keyBinds)if(p.keyBinds.hasOwnProperty(t)&&"function"==typeof p.keyBinds[t]&&(n=t.split(" ")).length===o.length&&D[d]===n[n.length-1]){for(r=!0,a=n.length-2;0<=a;a--)if(!(D[n[a]]in s)){r=!1;break}if(r){i=p.keyBinds[t];break}}i&&(i.call(f,y),e.stopPropagation(),e.preventDefault())},U=function(e){C[e.which]="r",e.stopPropagation(),e.preventDefault()},G=function(e){var t=$(e.target).val().trim(),a=t?z(t):null;return F(a),e.stopImmediatePropagation(),!1},J=function(e){var t={};return $.each(e,function(){var e=z(this);e.isValid()&&(t[e.format("YYYY-MM-DD")]=!0)}),!!Object.keys(t).length&&t},K=function(e){var t={};return $.each(e,function(){t[this]=!0}),!!Object.keys(t).length&&t},X=function(){var e=p.format||"L LT";n=e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return(c.localeData().longDateFormat(e)||e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return c.localeData().longDateFormat(e)||e})}),(r=p.extraFormats?p.extraFormats.slice():[]).indexOf(e)<0&&r.indexOf(n)<0&&r.push(n),d=n.toLowerCase().indexOf("a")<1&&n.replace(/\[.*?\]/g,"").indexOf("h")<1,M("y")&&(w=2),M("M")&&(w=1),M("d")&&(w=0),o=Math.max(w,o),m||F(c)};if(f.destroy=function(){L(),a.off({change:G,blur:blur,keydown:Q,keyup:U,focus:p.allowInputToggle?L:""}),i.is("input")?a.off({focus:Z}):h&&(h.off("click",R),h.off("mousedown",!1)),i.removeData("DateTimePicker"),i.removeData("date")},f.toggle=R,f.show=Z,f.hide=L,f.disable=function(){return L(),h&&h.hasClass("btn")&&h.addClass("disabled"),a.prop("disabled",!0),f},f.enable=function(){return h&&h.hasClass("btn")&&h.removeClass("disabled"),a.prop("disabled",!1),f},f.ignoreReadonly=function(e){if(0===arguments.length)return p.ignoreReadonly;if("boolean"!=typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter");return p.ignoreReadonly=e,f},f.options=function(e){if(0===arguments.length)return $.extend(!0,{},p);if(!(e instanceof Object))throw new TypeError("options() options parameter should be an object");return $.extend(!0,p,e),$.each(p,function(e,t){if(void 0===f[e])throw new TypeError("option "+e+" is not recognized!");f[e](t)}),f},f.date=function(e){if(0===arguments.length)return m?null:c.clone();if(!(null===e||"string"==typeof e||_.isMoment(e)||e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return F(null===e?null:z(e)),f},f.format=function(e){if(0===arguments.length)return p.format;if("string"!=typeof e&&("boolean"!=typeof e||!1!==e))throw new TypeError("format() expects a string or boolean:false parameter "+e);return p.format=e,n&&X(),f},f.timeZone=function(e){if(0===arguments.length)return p.timeZone;if("string"!=typeof e)throw new TypeError("newZone() expects a string parameter");return p.timeZone=e,f},f.dayViewHeaderFormat=function(e){if(0===arguments.length)return p.dayViewHeaderFormat;if("string"!=typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return p.dayViewHeaderFormat=e,f},f.extraFormats=function(e){if(0===arguments.length)return p.extraFormats;if(!1!==e&&!(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return p.extraFormats=e,r&&X(),f},f.disabledDates=function(e){if(0===arguments.length)return p.disabledDates?$.extend({},p.disabledDates):p.disabledDates;if(!e)return p.disabledDates=!1,A(),f;if(!(e instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return p.disabledDates=J(e),p.enabledDates=!1,A(),f},f.enabledDates=function(e){if(0===arguments.length)return p.enabledDates?$.extend({},p.enabledDates):p.enabledDates;if(!e)return p.enabledDates=!1,A(),f;if(!(e instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return p.enabledDates=J(e),p.disabledDates=!1,A(),f},f.daysOfWeekDisabled=function(e){if(0===arguments.length)return p.daysOfWeekDisabled.splice(0);if("boolean"==typeof e&&!e)return p.daysOfWeekDisabled=!1,A(),f;if(!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(p.daysOfWeekDisabled=e.reduce(function(e,t){return 6<(t=parseInt(t,10))||t<0||isNaN(t)||-1===e.indexOf(t)&&e.push(t),e},[]).sort(),p.useCurrent&&!p.keepInvalid){for(var t=0;!B(c,"d");){if(c.add(1,"d"),31===t)throw"Tried 31 times to find a valid date";t++}F(c)}return A(),f},f.maxDate=function(e){if(0===arguments.length)return p.maxDate?p.maxDate.clone():p.maxDate;if("boolean"==typeof e&&!1===e)return p.maxDate=!1,A(),f;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=T()));var t=z(e);if(!t.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+e);if(p.minDate&&t.isBefore(p.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+t.format(n));return p.maxDate=t,p.useCurrent&&!p.keepInvalid&&c.isAfter(e)&&F(p.maxDate),u.isAfter(t)&&(u=t.clone().subtract(p.stepping,"m")),A(),f},f.minDate=function(e){if(0===arguments.length)return p.minDate?p.minDate.clone():p.minDate;if("boolean"==typeof e&&!1===e)return p.minDate=!1,A(),f;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=T()));var t=z(e);if(!t.isValid())throw new TypeError("minDate() Could not parse date parameter: "+e);if(p.maxDate&&t.isAfter(p.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+t.format(n));return p.minDate=t,p.useCurrent&&!p.keepInvalid&&c.isBefore(e)&&F(p.minDate),u.isBefore(t)&&(u=t.clone().add(p.stepping,"m")),A(),f},f.defaultDate=function(e){if(0===arguments.length)return p.defaultDate?p.defaultDate.clone():p.defaultDate;if(!e)return p.defaultDate=!1,f;"string"==typeof e&&(e="now"===e||"moment"===e?T():T(e));var t=z(e);if(!t.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+e);if(!B(t))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return p.defaultDate=t,(p.defaultDate&&p.inline||""===a.val().trim())&&F(p.defaultDate),f},f.locale=function(e){if(0===arguments.length)return p.locale;if(!_.localeData(e))throw new TypeError("locale() locale "+e+" is not loaded from moment locales!");return p.locale=e,c.locale(p.locale),u.locale(p.locale),n&&X(),y&&(L(),Z()),f},f.stepping=function(e){return 0===arguments.length?p.stepping:(e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),p.stepping=e,f)},f.useCurrent=function(e){var t=["year","month","day","hour","minute"];if(0===arguments.length)return p.useCurrent;if("boolean"!=typeof e&&"string"!=typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof e&&-1===t.indexOf(e.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+t.join(", "));return p.useCurrent=e,f},f.collapse=function(e){if(0===arguments.length)return p.collapse;if("boolean"!=typeof e)throw new TypeError("collapse() expects a boolean parameter");return p.collapse===e||(p.collapse=e,y&&(L(),Z())),f},f.icons=function(e){if(0===arguments.length)return $.extend({},p.icons);if(!(e instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return $.extend(p.icons,e),y&&(L(),Z()),f},f.tooltips=function(e){if(0===arguments.length)return $.extend({},p.tooltips);if(!(e instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return $.extend(p.tooltips,e),y&&(L(),Z()),f},f.useStrict=function(e){if(0===arguments.length)return p.useStrict;if("boolean"!=typeof e)throw new TypeError("useStrict() expects a boolean parameter");return p.useStrict=e,f},f.sideBySide=function(e){if(0===arguments.length)return p.sideBySide;if("boolean"!=typeof e)throw new TypeError("sideBySide() expects a boolean parameter");return p.sideBySide=e,y&&(L(),Z()),f},f.viewMode=function(e){if(0===arguments.length)return p.viewMode;if("string"!=typeof e)throw new TypeError("viewMode() expects a string parameter");if(-1===b.indexOf(e))throw new TypeError("viewMode() parameter must be one of ("+b.join(", ")+") value");return p.viewMode=e,o=Math.max(b.indexOf(e),w),q(),f},f.toolbarPlacement=function(e){if(0===arguments.length)return p.toolbarPlacement;if("string"!=typeof e)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===k.indexOf(e))throw new TypeError("toolbarPlacement() parameter must be one of ("+k.join(", ")+") value");return p.toolbarPlacement=e,y&&(L(),Z()),f},f.widgetPositioning=function(e){if(0===arguments.length)return $.extend({},p.widgetPositioning);if("[object Object]"!=={}.toString.call(e))throw new TypeError("widgetPositioning() expects an object variable");if(e.horizontal){if("string"!=typeof e.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(e.horizontal=e.horizontal.toLowerCase(),-1===v.indexOf(e.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+v.join(", ")+")");p.widgetPositioning.horizontal=e.horizontal}if(e.vertical){if("string"!=typeof e.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(e.vertical=e.vertical.toLowerCase(),-1===g.indexOf(e.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+g.join(", ")+")");p.widgetPositioning.vertical=e.vertical}return A(),f},f.calendarWeeks=function(e){if(0===arguments.length)return p.calendarWeeks;if("boolean"!=typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return p.calendarWeeks=e,A(),f},f.showTodayButton=function(e){if(0===arguments.length)return p.showTodayButton;if("boolean"!=typeof e)throw new TypeError("showTodayButton() expects a boolean parameter");return p.showTodayButton=e,y&&(L(),Z()),f},f.showClear=function(e){if(0===arguments.length)return p.showClear;if("boolean"!=typeof e)throw new TypeError("showClear() expects a boolean parameter");return p.showClear=e,y&&(L(),Z()),f},f.widgetParent=function(e){if(0===arguments.length)return p.widgetParent;if("string"==typeof e&&(e=$(e)),null!==e&&"string"!=typeof e&&!(e instanceof $))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return p.widgetParent=e,y&&(L(),Z()),f},f.keepOpen=function(e){if(0===arguments.length)return p.keepOpen;if("boolean"!=typeof e)throw new TypeError("keepOpen() expects a boolean parameter");return p.keepOpen=e,f},f.focusOnShow=function(e){if(0===arguments.length)return p.focusOnShow;if("boolean"!=typeof e)throw new TypeError("focusOnShow() expects a boolean parameter");return p.focusOnShow=e,f},f.inline=function(e){if(0===arguments.length)return p.inline;if("boolean"!=typeof e)throw new TypeError("inline() expects a boolean parameter");return p.inline=e,f},f.clear=function(){return W(),f},f.keyBinds=function(e){return 0===arguments.length?p.keyBinds:(p.keyBinds=e,f)},f.getMoment=function(e){return T(e)},f.debug=function(e){if("boolean"!=typeof e)throw new TypeError("debug() expects a boolean parameter");return p.debug=e,f},f.allowInputToggle=function(e){if(0===arguments.length)return p.allowInputToggle;if("boolean"!=typeof e)throw new TypeError("allowInputToggle() expects a boolean parameter");return p.allowInputToggle=e,f},f.showClose=function(e){if(0===arguments.length)return p.showClose;if("boolean"!=typeof e)throw new TypeError("showClose() expects a boolean parameter");return p.showClose=e,f},f.keepInvalid=function(e){if(0===arguments.length)return p.keepInvalid;if("boolean"!=typeof e)throw new TypeError("keepInvalid() expects a boolean parameter");return p.keepInvalid=e,f},f.datepickerInput=function(e){if(0===arguments.length)return p.datepickerInput;if("string"!=typeof e)throw new TypeError("datepickerInput() expects a string parameter");return p.datepickerInput=e,f},f.parseInputDate=function(e){if(0===arguments.length)return p.parseInputDate;if("function"!=typeof e)throw new TypeError("parseInputDate() sholud be as function");return p.parseInputDate=e,f},f.disabledTimeIntervals=function(e){if(0===arguments.length)return p.disabledTimeIntervals?$.extend({},p.disabledTimeIntervals):p.disabledTimeIntervals;if(!e)return p.disabledTimeIntervals=!1,A(),f;if(!(e instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return p.disabledTimeIntervals=e,A(),f},f.disabledHours=function(e){if(0===arguments.length)return p.disabledHours?$.extend({},p.disabledHours):p.disabledHours;if(!e)return p.disabledHours=!1,A(),f;if(!(e instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(p.disabledHours=K(e),p.enabledHours=!1,p.useCurrent&&!p.keepInvalid){for(var t=0;!B(c,"h");){if(c.add(1,"h"),24===t)throw"Tried 24 times to find a valid date";t++}F(c)}return A(),f},f.enabledHours=function(e){if(0===arguments.length)return p.enabledHours?$.extend({},p.enabledHours):p.enabledHours;if(!e)return p.enabledHours=!1,A(),f;if(!(e instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(p.enabledHours=K(e),p.disabledHours=!1,p.useCurrent&&!p.keepInvalid){for(var t=0;!B(c,"h");){if(c.add(1,"h"),24===t)throw"Tried 24 times to find a valid date";t++}F(c)}return A(),f},f.viewDate=function(e){if(0===arguments.length)return u.clone();if(!e)return u=c.clone(),f;if(!("string"==typeof e||_.isMoment(e)||e instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return u=z(e),Y(),f},i.is("input"))a=i;else if(0===(a=i.find(p.datepickerInput)).length)a=i.find("input");else if(!a.is("input"))throw new Error('CSS class "'+p.datepickerInput+'" cannot be applied to non input element');if(i.hasClass("input-group")&&(h=0===i.find(".datepickerbutton").length?i.find(".input-group-addon"):i.find(".datepickerbutton")),!p.inline&&!a.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return c=T(),u=c.clone(),$.extend(!0,p,(l={},(s=i.is("input")||p.inline?i.data():i.find("input").data()).dateOptions&&s.dateOptions instanceof Object&&(l=$.extend(!0,l,s.dateOptions)),$.each(p,function(e){var t="date"+e.charAt(0).toUpperCase()+e.slice(1);void 0!==s[t]&&(l[e]=s[t])}),l)),f.options(p),X(),a.on({change:G,blur:p.debug?"":L,keydown:Q,keyup:U,focus:p.allowInputToggle?Z:""}),i.is("input")?a.on({focus:Z}):h&&(h.on("click",R),h.on("mousedown",!1)),a.prop("disabled")&&f.disable(),a.is("input")&&0!==a.val().trim().length?F(z(a.val().trim())):p.defaultDate&&void 0===a.attr("placeholder")&&F(p.defaultDate),p.inline&&Z(),f};return $.fn.datetimepicker=function(a){a=a||{};var t,n=Array.prototype.slice.call(arguments,1),r=!0;if("object"==typeof a)return this.each(function(){var e,t=$(this);t.data("DateTimePicker")||(e=$.extend(!0,{},$.fn.datetimepicker.defaults,a),t.data("DateTimePicker",i(t,e)))});if("string"==typeof a)return this.each(function(){var e=$(this).data("DateTimePicker");if(!e)throw new Error('bootstrap-datetimepicker("'+a+'") method was called on an element that is not using DateTimePicker');t=e[a].apply(e,n),r=t===e}),r||-1<$.inArray(a,["destroy","hide","show","toggle"])?this:t;throw new TypeError("Invalid arguments for DateTimePicker: "+a)},$.fn.datetimepicker.defaults={timeZone:"",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:_.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-crosshairs",clear:"fa fa-trash-o",close:"fa fa-times"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(7,"d")):this.date(t.clone().add(this.stepping(),"m"))}},down:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(7,"d")):this.date(t.clone().subtract(this.stepping(),"m"))}else this.show()},"control up":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(1,"y")):this.date(t.clone().add(1,"h"))}},"control down":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(1,"y")):this.date(t.clone().subtract(1,"h"))}},left:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"d"))}},right:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"d"))}},pageUp:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"M"))}},pageDown:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(e){e&&e.find(".timepicker").is(":visible")&&e.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},delete:function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1},$.fn.datetimepicker});