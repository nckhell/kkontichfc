(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),a=n("9rSQ"),s=n("UnBK"),i=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=c},DNq7:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a});var r=function(e){return new Date(e).toLocaleDateString("nl-NL",{weekday:"long",month:"long",day:"numeric",year:"numeric"})},o=function(e){return new Date(e).toLocaleDateString("nl-NL",{weekday:"short",month:"short",day:"numeric",year:"numeric"})},a=function(e){var t=e.indexOf("T");return e.substring(t+1,t+6)}},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i={adapter:function(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=n("tQ2B"):"undefined"!==typeof XMLHttpRequest&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){i.headers[e]={}}),r.forEach(["post","put","patch"],function(e){i.headers[e]=r.merge(a)}),e.exports=i}).call(this,n("8oxB"))},LCHC:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};t.__esModule=!0;var a=n("q1tI"),s=n("17x9"),i=n("v7m1"),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getRowStyle=function(e){var n=t.props,r=n.rows,o=n.widths;return{maxHeight:100/(2*r-1)+"%",width:o[(e+o.length)%o.length]+"%"}},t.getRows=function(){var e=t.props,n=e.rows,r=e.lineSpacing,o=e.color;return Array.apply(null,Array(n)).map(function(e,n){return a.createElement(i.default,{color:o,style:t.getRowStyle(n),lineSpacing:0!==n?r:0,key:n})})},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.style,n=["text-block",e.className].filter(function(e){return e}).join(" ");return a.createElement("div",{className:n,style:o({},{width:"100%"},t)},this.getRows())},t.propTypes={rows:s.number.isRequired,color:s.string.isRequired,lineSpacing:s.oneOfType([s.string,s.number]),widths:s.arrayOf(s.number),style:s.object,className:s.string},t.defaultProps={widths:[97,100,94,90,98,95,98,40]},t}(a.Component);t.default=c},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var s=new Error(e);return r(s,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),a=s.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},P5vw:function(e,t,n){"use strict";t.__esModule=!0;var r=n("v7m1");t.TextRow=r.default;var o=n("kjZC");t.RoundShape=o.default;var a=n("xH2l");t.RectShape=a.default;var s=n("LCHC");t.TextBlock=s.default;var i=n("siIT");t.MediaBlock=i.default,t.textRow=r.default,t.round=o.default,t.rect=a.default,t.text=s.default,t.media=i.default},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),s=n("JEQr"),i=n("2SVd"),c=n("5oMp");function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.baseURL&&!i(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return l(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(l(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},eFbb:function(e,t,n){"use strict";var r=n("vDqi"),o=n.n(r);t.a=function(e){return o.a.get(e).then(function(e){return e.data}).catch(function(e){throw e})}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},ioEn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/CalendarPage",function(){return n("zRwM")}])},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},kjZC:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};t.__esModule=!0;var a=n("q1tI"),s=n("17x9"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"},s=["round-shape",t].filter(function(e){return e}).join(" ");return a.createElement("div",{className:s,style:o({},r,n)})},t.propTypes={color:s.string.isRequired,className:s.string,style:s.object},t}(a.Component);t.default=i},mkb8:function(e,t,n){"use strict";t.__esModule=!0;var r=n("nqwR");t.default=r.default},nqwR:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.__esModule=!0;var s=n("q1tI"),i=n("17x9"),c=n("P5vw"),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={ready:t.props.ready},t.getFiller=function(){var e=t.props,n=(e.firstLaunchOnly,e.children,e.ready,e.className),r=e.type,i=e.customPlaceholder,l=e.showLoadingAnimation,u=a(e,["firstLaunchOnly","children","ready","className","type","customPlaceholder","showLoadingAnimation"]),d=l?["show-loading-animation",n].filter(function(e){return e}).join(" "):n;if(i&&s.isValidElement(i)){var f=[i.props.className,d].filter(function(e){return e}).join(" ");return s.cloneElement(i,{className:f})}if(i)return i;var p=c[r];return s.createElement(p,o({},u,{className:d}))},t.setNotReady=function(){var e=t.props.delay;e&&e>0?t.timeout=window.setTimeout(function(){t.setState({ready:!1})},e):t.setState({ready:!1})},t.setReady=function(){t.timeout&&window.clearTimeout(t.timeout),t.state.ready||t.setState({ready:!0})},t}return r(t,e),t.prototype.render=function(){return this.state.ready?this.props.children:this.getFiller()},t.prototype.componentWillReceiveProps=function(e){this.props.firstLaunchOnly||!this.state.ready||e.ready?e.ready&&this.setReady():this.setNotReady()},t.propTypes={children:i.oneOfType([i.node,i.element]).isRequired,delay:i.number,ready:i.bool.isRequired,firstLaunchOnly:i.bool,type:i.oneOf(["text","media","textRow","rect","round"]),rows:i.number,color:i.string,showLoadingAnimation:i.bool,customPlaceholder:i.oneOfType([i.node,i.element]),className:i.string,style:i.object},t.defaultProps={delay:0,type:"text",color:"#CDCDCD"},t}(s.Component);t.default=l},"qUN/":function(e,t,n){"use strict";var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),s=n("a7VT"),i=n("AT/M"),c=n("Tit0"),l=n("vYYK"),u=n("q1tI"),d=n.n(u),f=n("mkb8"),p=n.n(f),h=n("eFbb"),m=n("P5vw"),b=(n("Rb8l"),d.a.createElement),y=b("div",{className:"overflow-x-auto"},b("table",{className:"ranking-table w-full text-left"},b("thead",null,b("tr",{className:"text-gray-600"},b("th",null,"Datum"),b("th",{className:"text-center"},"Tijd"),b("th",null,"Thuisploeg"),b("th",null,"Uitploeg"),b("th",{className:"text-center"},"Score"))),b("tbody",null,b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"}))),b("tr",null,b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})),b("td",null,b(m.TextRow,{color:"#E4E7EB"})))))),g=n("wWXb"),v=n.n(g),E=n("DNq7"),x=d.a.createElement,w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return n=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c))),Object(l.a)(Object(i.a)(n),"state",{isLoading:!0,calendar:[],error:null}),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchCalendar()}},{key:"fetchCalendar",value:function(){var e=this,t=this.props.teamID;Object(h.a)(v.a[t].calendar.url).then(function(t){return e.setState({calendar:t.data.teamCalendar,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.calendar,n=e.isLoading,r=e.error;return x(p.a,{ready:!n,showLoadingAnimation:!0,customPlaceholder:y},r?x("p",null,r.message):null,x("div",{className:"overflow-x-auto"},x("table",{className:"ranking-table w-full text-left"},x("thead",null,x("tr",{className:"text-gray-600"},x("th",null,"Datum"),x("th",{className:"text-center"},"Tijd"),x("th",null,"Type"),x("th",{colSpan:"2"},"Thuisploeg"),x("th",{colSpan:"2"},"Uitploeg"),x("th",{className:"text-center"},"Score"))),x("tbody",null,t&&t.map(function(e){return x("tr",{key:e.id},x("td",null,Object(E.b)(e.startDate)),x("td",{className:"text-center"},Object(E.c)(e.startDate)),x("td",null,e.series.name),x("td",{className:"text-center"},x("span",{className:"block w-10 h-10 bg-contain bg-no-repeat bg-no-repeat bg-center",style:{backgroundImage:"url('".concat(e.homeTeam.logo,"')")}})),x("td",null,"128030"===e.homeTeam.id?"KKFC":e.homeTeam.name),x("td",{className:"text-center"},x("span",{className:"block w-10 h-10 bg-contain bg-no-repeat bg-no-repeat bg-center",style:{backgroundImage:"url('".concat(e.awayTeam.logo,"')")}})),x("td",null,"128030"===e.awayTeam.id?"KKFC":e.awayTeam.name),x("td",{className:"text-center font-semibold"},e.outcome.homeTeamGoals,"-",e.outcome.awayTeamGoals))}),!t&&x("tr",null,x("td",{colSpan:"7",className:"text-center"},"Momenteel nog geen kalender beschikbaar"))))))}}]),t}(u.Component);t.a=w},siIT:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};t.__esModule=!0;var a=n("q1tI"),s=n("17x9"),i=n("LCHC"),c=n("kjZC"),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.color,s=e.rows,l=["media-block",t].filter(function(e){return e}).join(" ");return a.createElement("div",{className:l,style:o({},{display:"flex"},n)},a.createElement(c.default,{color:r,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),a.createElement(i.default,{color:r,rows:s}))},t.propTypes={rows:s.number.isRequired,color:s.string.isRequired,style:s.object,className:s.string},t}(a.Component);t.default=l},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),a=n("MLWZ"),s=n("w0Vi"),i=n("OTTw"),c=n("LYNF");e.exports=function(e){return new Promise(function(t,l){var u=e.data,d=e.headers;r.isFormData(u)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(p+":"+h)}if(f.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};o(t,l,r),f=null}},f.onabort=function(){f&&(l(c("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){l(c("Network Error",e,null,f)),f=null},f.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var m=n("eqyj"),b=(e.withCredentials||i(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in f&&r.forEach(d,function(e,t){"undefined"===typeof u&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),l(e),f=null)}),void 0===u&&(u=null),f.send(u)})}},v7m1:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};t.__esModule=!0;var a=n("q1tI"),s=n("17x9"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.maxHeight,r=e.color,s=e.lineSpacing,i=e.style,c={maxHeight:n,width:"100%",height:"1em",backgroundColor:r,marginTop:s},l=["text-row",t].filter(function(e){return e}).join(" ");return a.createElement("div",{className:l,style:o({},c,i)})},t.propTypes={maxHeight:s.oneOfType([s.string,s.number]),className:s.string,color:s.string.isRequired,lineSpacing:s.oneOfType([s.string,s.number]),style:s.object},t.defaultProps={lineSpacing:"0.7em"},t}(a.Component);t.default=i},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,s={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},wWXb:function(e,t){e.exports={heren1eProv:{staticRoutingInfo:{url:"/heren/1e-provinciale/",readableTitle:"Heren 1e Provinciale",shortHandTitle:"Heren 1e Prov."},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_86043%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22159258%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D"},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22159258%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22159258%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}},heren3eProv:{staticRoutingInfo:{url:"/heren/3e-provinciale/",readableTitle:"Heren 3e Provinciale",shortHandTitle:"Heren 3e Prov."},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_86621%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22160581%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D"},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22160581%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22160581%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}},damesNat:{staticRoutingInfo:{url:"/dames/1e-nationale/",readableTitle:"Dames nationale",shortHandTitle:"Dames Nat."},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_85010%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22159259%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D"},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22159259%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22159259%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}},dames1eProv:{staticRoutingInfo:{url:"/dames/1e-provinciale/",readableTitle:"Dames 1e Provinciale",shortHandTitle:"Dames 1e Prov."},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_86627%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22162100%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D"},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22162100%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22162100%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}},dames3eProv:{staticRoutingInfo:{url:"/dames/3e-provinciale/",readableTitle:"Dames 3e Provinciale",shortHandTitle:"Dames 3e Prov."},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_87777%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22162497%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D"},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22162497%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22162497%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}}}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},xH2l:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};t.__esModule=!0;var a=n("q1tI"),s=n("17x9"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10},s=["rect-shape",t].filter(function(e){return e}).join(" ");return a.createElement("div",{className:s,style:o({},r,n)})},t.propTypes={color:s.string,className:s.string,style:s.object},t}(a.Component);t.default=i},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=n("x86X"),a=Object.prototype.toString;function s(e){return"[object Array]"===a.call(e)}function i(e){return null!==e&&"object"===typeof e}function c(e){return"[object Function]"===a.call(e)}function l(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:i,isUndefined:function(e){return"undefined"===typeof e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!==typeof window&&"undefined"!==typeof document},forEach:l,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]="object"===typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},zRwM:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),s=n("a7VT"),i=n("AT/M"),c=n("Tit0"),l=n("vYYK"),u=n("q1tI"),d=n.n(u),f=n("eFbb"),p=n("wWXb"),h=n.n(p),m=n("qUN/"),b=n("Sv8q"),y=d.a.createElement,g=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return n=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c))),Object(l.a)(Object(i.a)(n),"state",{isLoading:!0,calendar:{},error:null}),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchCalendar()}},{key:"fetchCalendar",value:function(){var e=this,t=this.props.teamID;Object(f.a)(h.a[t].calendar.url).then(function(t){return e.setState({calendar:t.data.teamCalendar,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.calendar,r=e.error,o=this.props.teamID,a=h.a[o].staticRoutingInfo.readableTitle;return y(b.a,null,y("div",{className:"px-4 container mx-auto md:px-0"},y("h1",null,"Kalender ",a&&a),r?y("p",null,r.message):null,t?y("h3",null,"Loading..."):y(m.a,{data:n})))}}]),t}(u.Component);g.getInitialProps=function(e){return{teamID:e.query.teamID}},t.default=g},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),s=n("SntB");function i(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var c=i(n("JEQr"));c.Axios=a,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}},[["ioEn",1,0,2]]]);