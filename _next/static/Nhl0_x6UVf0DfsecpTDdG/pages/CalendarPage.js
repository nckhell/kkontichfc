(window.webpackJsonp=window.webpackJsonp||[]).push([["e9b9"],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=a},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("MLWZ"),o=n("9rSQ"),c=n("UnBK"),l=n("SntB");function s(e){this.defaults=e,this.interceptors={request:new o,response:new o}}s.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=l(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[c,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=l(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}}),e.exports=s},DNq7:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});var r=function(e){return new Date(e).toLocaleDateString("nl-NL",{weekday:"long",month:"long",day:"numeric",year:"numeric"})},a=function(e){return new Date(e).toLocaleDateString("nl-NL",{weekday:"short",month:"short",day:"numeric",year:"numeric"})},o=function(e){return new Date(e).toLocaleTimeString().split(":").slice(0,-1).join(":")}},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),a=n("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,s={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?l=n("tQ2B"):"undefined"!=typeof XMLHttpRequest&&(l=n("tQ2B")),l),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(c(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(o)}),e.exports=s}).call(this,n("8oxB"))},LCHC:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};t.__esModule=!0;var c=n("q1tI"),l=n("17x9"),s=n("v7m1"),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getRowStyle=function(e){var n=t.props,r=n.rows,a=n.widths;return{maxHeight:100/(2*r-1)+"%",width:a[(e+a.length)%a.length]+"%"}},t.getRows=function(){var e=t.props,n=e.rows,r=e.lineSpacing,a=e.color;return Array.apply(null,Array(n)).map(function(e,n){return c.createElement(s.default,{color:a,style:t.getRowStyle(n),lineSpacing:0!==n?r:0,key:n})})},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.style,n=["text-block",e.className].filter(function(e){return e}).join(" ");return c.createElement("div",{className:n,style:o({},{width:"100%"},t)},this.getRows())},t.propTypes={rows:l.number.isRequired,color:l.string.isRequired,lineSpacing:l.oneOfType([l.string,l.number]),widths:l.arrayOf(l.number),style:l.object,className:l.string},t.defaultProps={widths:[97,100,94,90,98,95,98,40]},t}(c.Component);t.default=i},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,a,o){var c=new Error(e);return r(c,t,n,a,o)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var c=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),c.push(a(t)+"="+a(e))}))}),o=c.join("&")}if(o){var l=e.indexOf("#");-1!==l&&(e=e.slice(0,l)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},P5vw:function(e,t,n){"use strict";t.__esModule=!0;var r=n("v7m1");t.TextRow=r.default;var a=n("kjZC");t.RoundShape=a.default;var o=n("xH2l");t.RectShape=o.default;var c=n("LCHC");t.TextBlock=c.default;var l=n("siIT");t.MediaBlock=l.default,t.textRow=r.default,t.round=a.default,t.rect=o.default,t.text=c.default,t.media=l.default},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var a=n.config.validateStatus;!a||a(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(a){r.isObject(t[a])?n[a]=r.deepMerge(e[a],t[a]):void 0!==t[a]?n[a]=t[a]:r.isObject(e[a])?n[a]=r.deepMerge(e[a]):void 0!==e[a]&&(n[a]=e[a])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("xAGQ"),o=n("Lmem"),c=n("JEQr"),l=n("2SVd"),s=n("5oMp");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.baseURL&&!l(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||c.adapter)(e).then(function(t){return i(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},eFbb:function(e,t,n){"use strict";var r=n("vDqi"),a=n.n(r);t.a=function(e){return a.a.get(e).then(function(e){return e.data}).catch(function(e){throw e})}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,c){var l=[];l.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),r.isString(a)&&l.push("path="+a),r.isString(o)&&l.push("domain="+o),!0===c&&l.push("secure"),document.cookie=l.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},ioEn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/CalendarPage",function(){var e=n("zRwM");return{page:e.default||e}}])},"jfS+":function(e,t,n){"use strict";var r=n("endd");function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a(function(t){e=t}),cancel:e}},e.exports=a},kjZC:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};t.__esModule=!0;var c=n("q1tI"),l=n("17x9"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"},a=["round-shape",t].filter(function(e){return e}).join(" ");return c.createElement("div",{className:a,style:o({},r,n)})},t.propTypes={color:l.string.isRequired,className:l.string,style:l.object},t}(c.Component);t.default=s},mkb8:function(e,t,n){"use strict";t.__esModule=!0;var r=n("nqwR");t.default=r.default},nqwR:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};t.__esModule=!0;var l=n("q1tI"),s=n("17x9"),i=n("P5vw"),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={ready:t.props.ready},t.getFiller=function(){var e=t.props,n=(e.firstLaunchOnly,e.children,e.ready,e.className),r=e.type,a=e.customPlaceholder,s=e.showLoadingAnimation,u=c(e,["firstLaunchOnly","children","ready","className","type","customPlaceholder","showLoadingAnimation"]),d=s?["show-loading-animation",n].filter(function(e){return e}).join(" "):n;if(a&&l.isValidElement(a)){var f=[a.props.className,d].filter(function(e){return e}).join(" ");return l.cloneElement(a,{className:f})}if(a)return a;var p=i[r];return l.createElement(p,o({},u,{className:d}))},t.setNotReady=function(){var e=t.props.delay;e&&e>0?t.timeout=window.setTimeout(function(){t.setState({ready:!1})},e):t.setState({ready:!1})},t.setReady=function(){t.timeout&&window.clearTimeout(t.timeout),t.state.ready||t.setState({ready:!0})},t}return a(t,e),t.prototype.render=function(){return this.state.ready?this.props.children:this.getFiller()},t.prototype.componentWillReceiveProps=function(e){this.props.firstLaunchOnly||!this.state.ready||e.ready?e.ready&&this.setReady():this.setNotReady()},t.propTypes={children:s.oneOfType([s.node,s.element]).isRequired,delay:s.number,ready:s.bool.isRequired,firstLaunchOnly:s.bool,type:s.oneOf(["text","media","textRow","rect","round"]),rows:s.number,color:s.string,showLoadingAnimation:s.bool,customPlaceholder:s.oneOfType([s.node,s.element]),className:s.string,style:s.object},t.defaultProps={delay:0,type:"text",color:"#CDCDCD"},t}(l.Component);t.default=u},"qUN/":function(e,t,n){"use strict";var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),c=n("a7VT"),l=n("AT/M"),s=n("Tit0"),i=n("vYYK"),u=n("q1tI"),d=n.n(u),f=n("mkb8"),p=n.n(f),m=n("eFbb"),h=n("P5vw"),E=(n("Rb8l"),d.a.createElement("div",{className:"overflow-x-auto"},d.a.createElement("table",{className:"ranking-table w-full text-left"},d.a.createElement("thead",null,d.a.createElement("tr",{className:"text-gray-600"},d.a.createElement("th",null,"Datum"),d.a.createElement("th",{className:"text-center"},"Tijd"),d.a.createElement("th",null,"Thuisploeg"),d.a.createElement("th",null,"Uitploeg"),d.a.createElement("th",{className:"text-center"},"Score"))),d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"})),d.a.createElement("td",null,d.a.createElement(h.TextRow,{color:"#E4E7EB"}))))))),y=n("wWXb"),b=n.n(y),g=n("DNq7"),w=function(e){function t(){var e,n;Object(r.default)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=Object(o.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(s))),Object(i.a)(Object(l.default)(n),"state",{isLoading:!0,calendar:[],error:null}),n}return Object(s.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){this.fetchCalendar()}},{key:"fetchCalendar",value:function(){var e=this,t=this.props.teamID;Object(m.a)(b.a[t].calendar.url).then(function(t){return e.setState({calendar:t.data.teamCalendar,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.calendar,n=e.isLoading,r=e.error;return d.a.createElement(p.a,{ready:!n,showLoadingAnimation:!0,customPlaceholder:E},r?d.a.createElement("p",null,r.message):null,d.a.createElement("table",{className:"ranking-table w-full text-left"},d.a.createElement("thead",null,d.a.createElement("tr",{className:"text-gray-600"},d.a.createElement("th",null,"Datum"),d.a.createElement("th",{className:"text-center"},"Tijd"),d.a.createElement("th",{colSpan:"2"},"Thuisploeg"),d.a.createElement("th",{colSpan:"2"},"Uitploeg"),d.a.createElement("th",{className:"text-center"},"Score"))),d.a.createElement("tbody",null,t&&t.map(function(e){return d.a.createElement("tr",{key:e.id},d.a.createElement("td",null,Object(g.b)(e.startDate)),d.a.createElement("td",{className:"text-center"},Object(g.c)(e.startDate)),d.a.createElement("td",{className:"text-center"},d.a.createElement("img",{src:e.homeTeam.logo,alt:"Clublogo ".concat(e.homeTeam.name),className:"h-8 inline-block"})),d.a.createElement("td",null,"128030"===e.homeTeam.id?"KKFC":e.homeTeam.name),d.a.createElement("td",{className:"text-center"},d.a.createElement("img",{src:e.awayTeam.logo,alt:"Clublogo ".concat(e.awayTeam.name),className:"h-8 inline-block"})),d.a.createElement("td",null,"128030"===e.awayTeam.id?"KKFC":e.awayTeam.name),d.a.createElement("td",{className:"text-center font-semibold"},e.outcome.homeTeamGoals,"-",e.outcome.awayTeamGoals))}))))}}]),t}(u.Component);t.a=w},siIT:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};t.__esModule=!0;var c=n("q1tI"),l=n("17x9"),s=n("LCHC"),i=n("kjZC"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.color,a=e.rows,l=["media-block",t].filter(function(e){return e}).join(" ");return c.createElement("div",{className:l,style:o({},{display:"flex"},n)},c.createElement(i.default,{color:r,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),c.createElement(s.default,{color:r,rows:a}))},t.propTypes={rows:l.number.isRequired,color:l.string.isRequired,style:l.object,className:l.string},t}(c.Component);t.default=u},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("Rn+g"),o=n("MLWZ"),c=n("w0Vi"),l=n("OTTw"),s=n("LYNF");e.exports=function(e){return new Promise(function(t,i){var u=e.data,d=e.headers;r.isFormData(u)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(p+":"+m)}if(f.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};a(t,i,r),f=null}},f.onabort=function(){f&&(i(s("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){i(s("Network Error",e,null,f)),f=null},f.ontimeout=function(){i(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var h=n("eqyj"),E=(e.withCredentials||l(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;E&&(d[e.xsrfHeaderName]=E)}if("setRequestHeader"in f&&r.forEach(d,function(e,t){void 0===u&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),i(e),f=null)}),void 0===u&&(u=null),f.send(u)})}},v7m1:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};t.__esModule=!0;var c=n("q1tI"),l=n("17x9"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.maxHeight,r=e.color,a=e.lineSpacing,l=e.style,s={maxHeight:n,width:"100%",height:"1em",backgroundColor:r,marginTop:a},i=["text-row",t].filter(function(e){return e}).join(" ");return c.createElement("div",{className:i,style:o({},s,l)})},t.propTypes={maxHeight:l.oneOfType([l.string,l.number]),className:l.string,color:l.string.isRequired,lineSpacing:l.oneOfType([l.string,l.number]),style:l.object},t.defaultProps={lineSpacing:"0.7em"},t}(c.Component);t.default=s},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,c={};return e?(r.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(c[t]&&a.indexOf(t)>=0)return;c[t]="set-cookie"===t?(c[t]?c[t]:[]).concat([n]):c[t]?c[t]+", "+n:n}}),c):c}},wWXb:function(e,t,n){"use strict";e.exports={heren1eProv:{staticRoutingInfo:{url:"/heren/1e-provinciale/",readableTitle:"Heren 1e provinciale"},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_80449%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22128030%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D"},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22128030%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22128030%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}},heren3eProv:{staticRoutingInfo:{url:"/heren/3e-provinciale/",readableTitle:"Heren 3e provinciale"},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_80605%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22128031%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D"},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22128030%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22128030%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}},damesNat:{staticRoutingInfo:{url:"/dames/1e-nationale/",readableTitle:"Dames nationale"},ranking:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetSeriesRankings&variables=%7B%22seriesId%22%3A%22CHP_76310%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22c4d908193e39b4f896426a22afb5d4de51b7c2da555c82b77bc53d24e5b282c5%22%7D%7D"},calendar:{url:""},latestGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22128030%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D"},nextGame:{url:"https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22128030%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D"}}}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},xH2l:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};t.__esModule=!0;var c=n("q1tI"),l=n("17x9"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10},a=["rect-shape",t].filter(function(e){return e}).join(" ");return c.createElement("div",{className:a,style:o({},r,n)})},t.propTypes={color:l.string,className:l.string,style:l.object},t}(c.Component);t.default=s},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),a=n("x86X"),o=Object.prototype.toString;function c(e){return"[object Array]"===o.call(e)}function l(e){return null!==e&&"object"==typeof e}function s(e){return"[object Function]"===o.call(e)}function i(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:c,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:s,isStream:function(e){return l(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:i,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)i(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,a=arguments.length;r<a;r++)i(arguments[r],n);return t},extend:function(e,t,n){return i(t,function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},zRwM:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),c=n("a7VT"),l=n("AT/M"),s=n("Tit0"),i=n("vYYK"),u=n("q1tI"),d=n.n(u),f=n("eFbb"),p=n("wWXb"),m=n.n(p),h=n("qUN/"),E=n("Sv8q"),y=function(e){function t(){var e,n;Object(r.default)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=Object(o.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(s))),Object(i.a)(Object(l.default)(n),"state",{isLoading:!0,calendar:{},error:null}),n}return Object(s.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){this.fetchCalendar()}},{key:"fetchCalendar",value:function(){var e=this,t=this.props.teamID;Object(f.a)(m.a[t].calendar.url).then(function(t){return e.setState({calendar:t.data.teamCalendar,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.calendar,r=e.error,a=this.props.teamID,o=m.a[a].staticRoutingInfo.readableTitle;return d.a.createElement(E.a,null,d.a.createElement("div",{className:"px-4 container mx-auto md:px-0"},d.a.createElement("h1",null,"Kalender ",o&&o),r?d.a.createElement("p",null,r.message):null,t?d.a.createElement("h3",null,"Loading..."):d.a.createElement(h.a,{data:n})))}}]),t}(u.Component);y.getInitialProps=function(e){return{teamID:e.query.teamID}},t.default=y},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("HSsa"),o=n("CgaS"),c=n("SntB");function l(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var s=l(n("JEQr"));s.Axios=o,s.create=function(e){return l(c(s.defaults,e))},s.Cancel=n("endd"),s.CancelToken=n("jfS+"),s.isCancel=n("Lmem"),s.all=function(e){return Promise.all(e)},s.spread=n("DfZB"),e.exports=s,e.exports.default=s}},[["ioEn","5d41","9da1","ad9d"]]]);