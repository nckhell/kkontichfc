(window.webpackJsonp=window.webpackJsonp||[]).push([["290c"],{DNq7:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});var o=function(e){return new Date(e).toLocaleDateString("nl-NL",{weekday:"short",month:"short",day:"numeric"})},s=function(e){return new Date(e).toLocaleTimeString().split(":").slice(0,-1).join(":")}},"T+h1":function(e){e.exports={fileMap:{"content/nieuws/build/2018-2019/algemeen/volvo-vermant-18-19.json":{title:"Volvo Vermant",date:"2018-06-01T00:00:00.000Z",preview:"Second post post!\n\nCheckout github to see my other projects\n\nanother page",dir:"content/nieuws/build/2018-2019/algemeen",base:"volvo-vermant-18-19.json",ext:".json",sourceBase:"volvo-vermant-18-19.md",sourceExt:".md"},"content/nieuws/build/2018-2019/algemeen/eerste-post-18-19.json":{title:"First post",date:"2017-06-01T00:00:00.000Z",preview:"First post!\n\nCheckout github to see my other projects\n\nanother page",dir:"content/nieuws/build/2018-2019/algemeen",base:"eerste-post-18-19.json",ext:".json",sourceBase:"eerste-post-18-19.md",sourceExt:".md"},"content/nieuws/build/2019-2020/evenementen/kkfc-paastornooi-19-20.json":{title:"Paastornooi",date:"2017-06-01T00:00:00.000Z",preview:"Paastornooi nieuws",dir:"content/nieuws/build/2019-2020/evenementen",base:"kkfc-paastornooi-19-20.json",ext:".json",sourceBase:"kkfc-paastornooi-19-20.md",sourceExt:".md"},"content/nieuws/build/2019-2020/algemeen/volvo-vermant-19-20.json":{title:"Volvo Vermant",date:"2018-06-01T00:00:00.000Z",preview:"Second post post!\n\nCheckout github to see my other projects\n\nanother page",dir:"content/nieuws/build/2019-2020/algemeen",base:"volvo-vermant-19-20.json",ext:".json",sourceBase:"volvo-vermant-19-20.md",sourceExt:".md"},"content/nieuws/build/2018-2019/dames/tweede-post-18-19.json":{title:"Second post",date:"2019-06-01T00:00:00.000Z",preview:"Second post post!\n\nCheckout github to see my other projects\n\nanother page",dir:"content/nieuws/build/2018-2019/dames",base:"tweede-post-18-19.json",ext:".json",sourceBase:"tweede-post-18-19.md",sourceExt:".md"},"content/nieuws/build/2018-2019/jeugd/jeugdtrainers-gezocht-18-19.json":{title:"Jeugdtrainers gezocht",date:"2019-05-01T00:00:00.000Z",preview:"jeugdtrainers gezocht",dir:"content/nieuws/build/2018-2019/jeugd",base:"jeugdtrainers-gezocht-18-19.json",ext:".json",sourceBase:"jeugdtrainers-gezocht-18-19.md",sourceExt:".md"},"content/nieuws/build/2019-2020/dames/tweede-post-19-20.json":{title:"Second post",date:"2019-06-01T00:00:00.000Z",preview:"Second post post!\n\nCheckout github to see my other projects\n\nanother page",dir:"content/nieuws/build/2019-2020/dames",base:"tweede-post-19-20.json",ext:".json",sourceBase:"tweede-post-19-20.md",sourceExt:".md"},"content/nieuws/build/2018-2019/evenementen/kkfc-paastornooi-18-19.json":{title:"Paastornooi",date:"2017-06-01T00:00:00.000Z",preview:"Paastornooi nieuws",dir:"content/nieuws/build/2018-2019/evenementen",base:"kkfc-paastornooi-18-19.json",ext:".json",sourceBase:"kkfc-paastornooi-18-19.md",sourceExt:".md"}},sourceFileArray:["content/nieuws/2018-2019/algemeen/eerste-post-18-19.md","content/nieuws/2018-2019/algemeen/volvo-vermant-18-19.md","content/nieuws/2018-2019/dames/tweede-post-18-19.md","content/nieuws/2018-2019/evenementen/kkfc-paastornooi-18-19.md","content/nieuws/2018-2019/jeugd/jeugdtrainers-gezocht-18-19.md","content/nieuws/2019-2020/algemeen/volvo-vermant-19-20.md","content/nieuws/2019-2020/dames/tweede-post-19-20.md","content/nieuws/2019-2020/evenementen/kkfc-paastornooi-19-20.md"]}},ql9Q:function(e,t,n){"use strict";n.r(t);var o=n("0iUn"),s=n("sLSF"),a=n("MI3g"),r=n("a7VT"),i=n("AT/M"),u=n("Tit0"),c=n("vYYK"),d=n("q1tI"),l=n.n(d),p=n("Sv8q"),m=n("T+h1"),w=n("gkbN"),v=n("pLtp"),f=n.n(v),j=function(){var e=[];return m.fileMap&&f()(m.fileMap).forEach(function(t){var n=t.split("/").slice(-2)[0];-1===e.indexOf(n)&&e.push(n)}),e},b=function(){var e=[];return m.fileMap&&f()(m.fileMap).forEach(function(t){var n=t.split("/").slice(-3)[0];-1===e.indexOf(n)&&e.push(n)}),e},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc";return e&&e.fileMap&&f()(e.fileMap).filter(function(e){return 0===e.indexOf("content/nieuws")}).map(function(t){return e.fileMap[t]}).sort(function(e,n){var o=Date.parse(e.date),s=Date.parse(n.date);return"asc"===t?s<o?1:s>o?-1:0:s>o?1:s<o?-1:0})},g=n("DNq7"),k=function(e){function t(){var e,n;Object(o.default)(this,t);for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return n=Object(a.default)(this,(e=Object(r.default)(t)).call.apply(e,[this].concat(u))),Object(c.a)(Object(i.default)(n),"state",{newsCategories:j(),seasons:b(),newsList:h(m)}),n}return Object(u.default)(t,e),Object(s.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=(e.newsCategories,e.seasons,e.newsList);return l.a.createElement(p.a,null,l.a.createElement("div",{className:"center mw6 pa3 pa4-ns"},t.map(function(e,t){var n,o="".concat((n=e).dir.split("content/nieuws/build/").join("nieuws/"),"/").concat(n.base.split(".json").join("/")),s=Object(g.a)(e.date);return l.a.createElement("div",{key:t},l.a.createElement("p",null,e.title),l.a.createElement("p",null,e.preview),l.a.createElement("p",null,s),l.a.createElement(w.Link,{href:o},l.a.createElement("a",null,"Meer lezen..")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))})))}}]),t}(d.Component);t.default=k},vYYK:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("hfKm"),s=n.n(o);function a(e,t,n){return t in e?s()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},xd7j:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsOverview",function(){var e=n("ql9Q");return{page:e.default||e}}])}},[["xd7j","5d41","9da1"]]]);