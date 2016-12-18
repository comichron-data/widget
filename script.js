!function(e){function t(a){if(r[a])return r[a].exports;var o=r[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){function a(e,t,r){e.appendChild(o(t,r))}function o(e,t){var r=document.createElement("div");return r.classList.add("cw-c-widget"),r.setAttribute("data-comic-title",e.title),r.setAttribute("data-comic-publisher",e.publisher),"dark"==t.theme?r.classList.add("cw-t-dark"):"light"==t.theme&&r.classList.add("cw-t-light"),r.appendChild(n(e)),r.appendChild(c(e)),r.appendChild(s()),r}function n(e,t){var r=document.createElement("div");r.classList.add("cw-c-widget__y-axis-label");var a=u(e.records).count,o=2,n=Math.floor(a/(o+1));r.appendChild(i(0));for(var c=0;c<o;c++)r.appendChild(i(n*(c+1)));return r.appendChild(i(a)),r}function i(e){var t=document.createElement("div");return t.classList.add("cw-c-widget__y-axis-tick"),t.textContent=f(e),t}function c(e){var t=document.createElement("div");return t.classList.add("cw-c-widget__graph-area"),t.appendChild(d(e)),t}function s(){var e=document.createElement("div");return e.classList.add("cw-c-widget__attribution-area"),e.innerHTML='graph by <a href="https://github.com/comichron-data">Comichron Data Project</a>, data from <a href="http://www.comichron.com/">Comichron</a>',e}function d(e){var t=document.createElement("div");t.classList.add("cw-c-graph");var r=u(e.records);return e.records.forEach(function(e){var a=Math.floor(e.count/r.count*100);t.appendChild(l(e,a))}),t}function l(e,t){var r=document.createElement("div");return r.classList.add("cw-c-graph__bar"),r.style.height=t+"%",r.setAttribute("data-x-axis-tick-value",e.issue),r.setAttribute("data-x-axis-bar-value",e.count),r}function u(e){return e.reduce(function(e,t){return t.count>e.count?t:e})}var b=r(1),f=r(5),g=r(4),w=document.createElement("style");w.textContent=r(3),document.head.appendChild(w);var p="[data-comichron-comic-id]",m=document.querySelectorAll(p);Array.prototype.slice.call(m).forEach(function(e){var t=g(e);t.comicId?b.byIssue(t.comicId,function(r,o){return r?console.error(r):void a(e,o,t)}):console.error("No comic id specified on",e)})},function(e,t,r){function a(e){c(d.titles(),e)}function o(e,t){c(d.byMonth(e),t)}function n(e,t){c(d.byIssue(e),t)}function i(e,t,r){c(d.sourceData(e,t),r)}function c(e,t){function r(e){if(o.status>=400)return a(e);var r=JSON.parse(this.responseText);return t(null,r)}function a(r){t(s(o,e,r))}var o=new XMLHttpRequest;o.addEventListener("load",r),o.addEventListener("error",a),o.addEventListener("abort",a),o.open("GET",e),o.send()}function s(e,t,r){var a=new Error("Unable to GET "+t);return a.statusCode=e.status,a.url=t,a.event=r,a}var d=r(2);e.exports={titles:a,byMonth:o,byIssue:n,sourceData:i}},function(e,t){function r(){return c+"/api/titles.json"}function a(e){return c+"/api/titles/"+e+"/by-month.json"}function o(e){return c+"/api/titles/"+e+"/by-issue.json"}function n(e,t){return c+"/api/source-data/"+e+"-"+i(t)+".json"}function i(e){return 1==String(e).length?"0"+e:e}var c="https://comichron-data.github.io";e.exports={titles:r,byMonth:a,byIssue:o,sourceData:n}},function(e,t){e.exports=".cw-c-widget{background-color:#fff;color:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;padding:1rem;padding-right:.29rem;padding-top:2rem;position:relative}.cw-c-widget a{color:blue;font-weight:700}.cw-c-widget:after,.cw-c-widget:before{display:block;opacity:.8;pointer-events:none;position:absolute;right:1.25rem;text-align:right;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:calc(100% - 4rem)}.cw-c-widget:before{content:attr(data-comic-title);font-size:1.5rem;font-weight:700;top:.75rem}.cw-c-widget:after{content:attr(data-comic-publisher);top:2.5rem}.cw-c-widget *{box-sizing:border-box}.cw-c-widget__y-axis-label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2rem}.cw-c-widget__y-axis-tick{font-size:80%;padding-left:.5rem;padding-right:.5rem;text-align:right}.cw-c-widget__graph-area{-webkit-box-flex:1;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;height:7rem;overflow-x:scroll;overflow-y:hidden}.cw-c-widget__attribution-area{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;font-size:.45rem;padding-right:1rem;text-align:right}.cw-c-graph{height:5rem;position:relative;white-space:nowrap;width:100%}.cw-c-graph__bar{background-color:#000;bottom:0;display:inline-block;height:100%;position:relative;width:1rem}.cw-c-graph__bar:before{content:attr(data-x-axis-tick-value);display:block;font-size:80%;left:50%;position:absolute;top:calc(100% + .25rem);-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:top left;transform-origin:top left}.cw-c-graph__bar:after{background-color:#fff;content:attr(data-x-axis-bar-value);display:block;left:50%;opacity:0;padding:.5rem 1rem;pointer-events:none;position:absolute;top:calc(0% + 2px);-webkit-transform:translateX(1rem);transform:translateX(1rem);-webkit-transform-origin:center left;transform-origin:center left;-webkit-transition:-webkit-transform .1s ease-out;transition:-webkit-transform .1s ease-out;transition:transform .1s ease-out;transition:transform .1s ease-out,-webkit-transform .1s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.cw-c-graph__bar:hover:after{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.cw-c-graph__bar+.cw-c-graph__bar{margin-left:.25rem}.cw-t-dark.cw-c-widget{background-color:#3c3c3c;border-radius:1rem;box-shadow:inset 0 0 0 .25rem #3c3c3c,inset 0 0 0 .29rem hsla(0,0%,100%,.25);color:#bdbdbd}.cw-t-dark a{color:#bdbdbd}.cw-t-dark a:hover{color:#fff}.cw-t-dark .cw-c-widget__y-axis-tick{text-shadow:2px 0 0 rgba(0,0,0,.2)}.cw-t-dark .cw-c-graph__bar{background:-webkit-linear-gradient(bottom,rgba(0,0,0,.2),transparent);background:linear-gradient(0deg,rgba(0,0,0,.2) 0,transparent);background-color:hsla(0,0%,62%,.9);border-radius:.15rem .15rem 0 0;box-shadow:.15rem 0 0 0 rgba(0,0,0,.2)}.cw-t-dark .cw-c-graph__bar:before{font-weight:700;text-shadow:2px 0 0 rgba(0,0,0,.2)}.cw-t-dark .cw-c-graph__bar:after{background:-webkit-linear-gradient(top,hsla(0,0%,100%,.2),transparent);background:linear-gradient(180deg,hsla(0,0%,100%,.2) 0,transparent);background-color:rgba(0,0,0,.9);border-radius:0 1rem 1rem;box-shadow:0 .25rem 0 0 rgba(0,0,0,.2);color:#fff}.cw-t-dark .cw-c-graph__bar:hover{background-color:#fff}.cw-t-light.cw-c-widget{background-color:#f3f3f3;border-radius:1rem;box-shadow:inset 0 0 0 .25rem #f3f3f3,inset 0 0 0 .29rem rgba(0,0,0,.2);color:#4c4c4c}.cw-t-light a{color:#4c4c4c}.cw-t-light a:hover{color:#000}.cw-t-light .cw-c-graph__bar{background:-webkit-linear-gradient(bottom,rgba(0,0,0,.2),transparent);background:linear-gradient(0deg,rgba(0,0,0,.2) 0,transparent);background-color:#4c4c4c;border-radius:.15rem .15rem 0 0;box-shadow:.15rem 0 0 0 rgba(0,0,0,.2)}.cw-t-light .cw-c-graph__bar:before{font-weight:700}.cw-t-light .cw-c-graph__bar:after{background:-webkit-linear-gradient(bottom,rgba(0,0,0,.2),transparent);background:linear-gradient(0deg,rgba(0,0,0,.2) 0,transparent);background-color:hsla(0,0%,100%,.95);border-radius:0 1rem 1rem;box-shadow:0 .25rem 0 0 rgba(0,0,0,.2);color:#000}.cw-t-light .cw-c-graph__bar:hover{background-color:#000}"},function(e,t){function r(e){var t={};return t.comicId=e.getAttribute("data-comichron-comic-id"),t.theme=e.getAttribute("data-comichron-theme")||"dark",t}e.exports=r},function(e,t){function r(e){return e>=1e3&&e<1e6?a(e/1e3)+"K":e>=1e6?a(e/1e6)+"M":String(e)}function a(e){var t=e.toFixed(1);return"0"==t[-1]?t.slice(0,-2):t}e.exports=r}]);