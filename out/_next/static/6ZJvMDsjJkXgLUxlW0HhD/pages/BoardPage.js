(window.webpackJsonp=window.webpackJsonp||[]).push([["3e23"],{"+qP9":function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}},"/PtW":function(t,e,n){"use strict";e.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},"1z8A":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("SqIO"),a=n("L8iz"),i=n("nr3+");function c(t){return function e(n,c,u){switch(arguments.length){case 0:return e;case 1:return Object(i.a)(n)?e:Object(a.a)(function(e,r){return t(n,e,r)});case 2:return Object(i.a)(n)&&Object(i.a)(c)?e:Object(i.a)(n)?Object(a.a)(function(e,n){return t(e,c,n)}):Object(i.a)(c)?Object(a.a)(function(e,r){return t(n,e,r)}):Object(r.a)(function(e){return t(n,c,e)});default:return Object(i.a)(n)&&Object(i.a)(c)&&Object(i.a)(u)?e:Object(i.a)(n)&&Object(i.a)(c)?Object(a.a)(function(e,n){return t(e,n,u)}):Object(i.a)(n)&&Object(i.a)(u)?Object(a.a)(function(e,n){return t(e,c,n)}):Object(i.a)(c)&&Object(i.a)(u)?Object(a.a)(function(e,r){return t(n,e,r)}):Object(i.a)(n)?Object(r.a)(function(e){return t(e,c,u)}):Object(i.a)(c)?Object(r.a)(function(e){return t(n,e,u)}):Object(i.a)(u)?Object(r.a)(function(e){return t(n,c,e)}):t(n,c,u)}}}},I2HU:function(t,e,n){"use strict";var r=n("L8iz"),a=Object(r.a)(function(t,e){for(var n=e,r=0;r<t.length;){if(null==n)return;n=n[t[r]],r+=1}return n});e.a=a},JI66:function(t,e,n){"use strict";function r(t){return"[object String]"===Object.prototype.toString.call(t)}n.d(e,"a",function(){return r})},JVDt:function(t,e,n){"use strict";function r(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,a){return e.apply(this,arguments)};case 5:return function(t,n,r,a,i){return e.apply(this,arguments)};case 6:return function(t,n,r,a,i,c){return e.apply(this,arguments)};case 7:return function(t,n,r,a,i,c,u){return e.apply(this,arguments)};case 8:return function(t,n,r,a,i,c,u,o){return e.apply(this,arguments)};case 9:return function(t,n,r,a,i,c,u,o,l){return e.apply(this,arguments)};case 10:return function(t,n,r,a,i,c,u,o,l,s){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(e,"a",function(){return r})},L8iz:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("SqIO"),a=n("nr3+");function i(t){return function e(n,i){switch(arguments.length){case 0:return e;case 1:return Object(a.a)(n)?e:Object(r.a)(function(e){return t(n,e)});default:return Object(a.a)(n)&&Object(a.a)(i)?e:Object(a.a)(n)?Object(r.a)(function(e){return t(e,i)}):Object(a.a)(i)?Object(r.a)(function(e){return t(n,e)}):t(n,i)}}}},OEMQ:function(t,e,n){"use strict";var r=n("qOTs"),a=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var i=n("JVDt"),c=n("L8iz"),u=Object(c.a)(function(t,e){return Object(i.a)(t.length,function(){return t.apply(e,arguments)})});function o(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function l(t,e,n,r){return t["@@transducer/result"](n[r](u(t["@@transducer/step"],t),e))}n.d(e,"a",function(){return f});var s="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function f(t,e,n){if("function"==typeof t&&(t=function(t){return new a(t)}(t)),Object(r.a)(n))return function(t,e,n){for(var r=0,a=n.length;r<a;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return l(t,e,n,"fantasy-land/reduce");if(null!=n[s])return o(t,e,n[s]());if("function"==typeof n.next)return o(t,e,n);if("function"==typeof n.reduce)return l(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}},OPrH:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}},Reno:function(t,e,n){"use strict";function r(t,e){for(var n=0,r=e.length,a=Array(r);n<r;)a[n]=t(e[n]),n+=1;return a}n.d(e,"a",function(){return r})},SqIO:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("nr3+");function a(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},T3y9:function(t,e,n){"use strict";var r=n("L8iz"),a=function(t){return{value:t,"fantasy-land/map":function(){return this}}},i=Object(r.a)(function(t,e){return t(a)(e).value});e.a=i},Txpn:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),i=n("MI3g"),c=n("a7VT"),u=n("Tit0"),o=n("q1tI"),l=n.n(o),s=n("T3y9"),f=n("gkbN"),p=n("erEE"),d=n.n(p),m=n("Sv8q"),b=n("nl4B"),h=n("y6dH"),v=n("lPeS"),g=v.a(["function"]),y=n("tAj3"),j=function(t){var e=t.members,n=t.name;return l.a.createElement("div",{className:"mb-2 md:mb-4"},l.a.createElement("h2",null,n),l.a.createElement("div",{className:"overflow-x-auto"},l.a.createElement("table",{className:"w-full",width:"100%",cellSpacing:"0",cellPadding:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Naam"),l.a.createElement("th",null,"Functie"),l.a.createElement("th",null,"Telefoon"),l.a.createElement("th",{className:"text-center"},"E-mail"))),l.a.createElement("tbody",null,e&&e.map(function(t){return l.a.createElement("tr",{key:s.a(y.a,t)},l.a.createElement("td",{className:"py-6 font-semibold"},s.a(y.b,t)," ",s.a(y.c,t)),l.a.createElement("td",{className:"py-6"},s.a(g,t)),l.a.createElement("td",{className:"py-6"},s.a(y.f,t)),l.a.createElement("td",{className:"py-6 text-center"},s.a(y.a,t)&&l.a.createElement("a",{className:"inline-block",href:"mailto:".concat(s.a(y.a,t)),title:s.a(y.a,t)},l.a.createElement(h.a,{className:"inline-block align-middle pr-2 w-8",beforeInjection:function(t){t.setAttribute("style","fill: #3E4C59")},src:Object(f.prefixURL)("/static/img/email.svg")}))))})))))},O=[{name:"Raad van Bestuur (blauwe kaart)",members:[{firstname:"Wim",lastname:"Claes",function:"Voorzitter",tel:"0479/69.48.49",email:"claes.wim@hotmail.com",cloudinaryID:""},{firstname:"Willy",lastname:"Patteet",function:"Penningmeester",tel:"0495/31.31.97",email:"willy.patteet@telenet.be",cloudinaryID:""},{firstname:"Theo",lastname:"Knegtel",function:"GC - Secretaris",tel:"0495/90.33.00",email:"gc@kkontichfc.be",cloudinaryID:""}]},{name:"Aanvullende bestuursleden",members:[{firstname:"Mo",lastname:"Sabhaoui",function:"A-kern",tel:"",email:"",cloudinaryID:""},{firstname:"Kevin",lastname:"Hannes",function:"Jeugd",tel:"",email:"",cloudinaryID:""},{firstname:"Cedric",lastname:"Cottignie",function:"Jeugd",tel:"",email:"",cloudinaryID:""},{firstname:"Luc",lastname:"De Corte",function:"Bestuur - Dames",tel:"0499/90.79.91",email:"ldecorte@hotmail.com",cloudinaryID:""}]},{name:"Bestuur Damesafdeling",members:[{firstname:"Luc",lastname:"De Corte",function:"Bestuur, administratie & verantwoordelijke jeugd",tel:"0499/90.79.91",email:"ldecorte@hotmail.com",cloudinaryID:""},{firstname:"Dave",lastname:"De Causemaeker",function:"",tel:"",email:"",cloudinaryID:""}]}],w=v.a(["members"]),E=v.a(["name"]),S=function(t){function e(){return Object(r.default)(this,e),Object(i.default)(this,Object(c.default)(e).apply(this,arguments))}return Object(u.default)(e,t),Object(a.default)(e,[{key:"render",value:function(){return l.a.createElement(m.a,{showGrassHeader:!0},l.a.createElement(d.a,{config:{title:"Bestuur | Info",description:"Een overzicht van het bestuur van K. Kontich F.C.",canonical:"https://www.kkontichfc.be/info/bestuur/",openGraph:{type:"website",locale:"nl_BE",url:"https://www.kkontichfc.be/info/bestuur/",title:"Bestuur | Info | K. Kontich F.C.",description:"Een overzicht van het bestuur van K. Kontich F.C."}}}),l.a.createElement("div",{id:"kkfc-background-logo"},l.a.createElement("div",{className:"px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left"},l.a.createElement("div",{className:"w-full mx-auto lg:w-5/6"},l.a.createElement(b.a,{data:[{title:"info",url:"#"},{title:"bestuur",url:"info/bestuur"}]}))),l.a.createElement("div",{className:"px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left"},l.a.createElement("div",{className:"body-content w-full mx-auto lg:w-5/6"},l.a.createElement("div",{className:"body-content"},l.a.createElement("h1",{className:"pb-6 inline-block lg:w-4/6"},"Bestuur")),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",title:"Download Cluborganigram",href:"https://res.cloudinary.com/kkontichfc/raw/upload/v1613315117/downloads/cluborganigram_iddrb0.xlsx"},"Klik hier om het volledige cluborganigram te bekijken.")),O&&O.map(function(t){return l.a.createElement(j,{name:s.a(E,t),members:s.a(w,t),key:s.a(E,t)})})),l.a.createElement("img",{className:"logo-kkfc-in-background",src:Object(f.prefixURL)("/static/img/kkontichfc.svg"),alt:"K. Kontich F.C."}))),l.a.createElement("div",{className:"spacer mb-16 md:mb-24"}))}}]),e}(o.Component);e.default=S},Upr7:function(t,e,n){"use strict";var r=n("SqIO"),a=Object(r.a)(function(t){return null==t});e.a=a},YR7Z:function(t,e,n){"use strict";var r=n("JVDt"),a=n("SqIO"),i=n("L8iz"),c=n("nr3+");var u=Object(i.a)(function(t,e){return 1===t?Object(a.a)(e):Object(r.a)(t,function t(e,n,a){return function(){for(var i=[],u=0,o=e,l=0;l<n.length||u<arguments.length;){var s;l<n.length&&(!Object(c.a)(n[l])||u>=arguments.length)?s=n[l]:(s=arguments[u],u+=1),i[l]=s,Object(c.a)(s)||(o-=1),l+=1}return o<=0?a.apply(this,i):Object(r.a)(o,t(e,i,a))}}(t,[],e))});e.a=u},ZMgP:function(t,e,n){"use strict";e.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},ZuG0:function(t,e,n){"use strict";var r=n("SqIO"),a=n("wyUd"),i=Object.prototype.toString,c=function(){return"[object Arguments]"===i.call(arguments)?function(t){return"[object Arguments]"===i.call(t)}:function(t){return Object(a.a)("callee",t)}}(),u=!{toString:null}.propertyIsEnumerable("toString"),o=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],l=function(){return arguments.propertyIsEnumerable("length")}(),s=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},f="function"!=typeof Object.keys||l?Object(r.a)(function(t){if(Object(t)!==t)return[];var e,n,r=[],i=l&&c(t);for(e in t)!Object(a.a)(e,t)||i&&"length"===e||(r[r.length]=e);if(u)for(n=o.length-1;n>=0;)e=o[n],Object(a.a)(e,t)&&!s(r,e)&&(r[r.length]=e),n-=1;return r}):Object(r.a)(function(t){return Object(t)!==t?[]:Object.keys(t)});e.a=f},dwRh:function(t,e,n){"use strict";var r=n("1z8A"),a=Object(r.a)(function(t,e,n){var r={};for(var a in n)r[a]=n[a];return r[t]=e,r});e.a=a},gSdd:function(t,e,n){"use strict";var r=n("/PtW");function a(t,e,n){return function(){if(0===arguments.length)return n();var a=Array.prototype.slice.call(arguments,0),i=a.pop();if(!Object(r.a)(i)){for(var c=0;c<t.length;){if("function"==typeof i[t[c]])return i[t[c]].apply(i,a);c+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(i))return e.apply(null,a)(i)}return n.apply(this,arguments)}}n.d(e,"a",function(){return a})},hQPV:function(t,e,n){"use strict";var r=n("L8iz"),a=n("gSdd"),i=n("Reno"),c=n("OEMQ"),u=n("ZMgP"),o=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=u.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),l=Object(r.a)(function(t,e){return new o(t,e)}),s=n("YR7Z"),f=n("ZuG0"),p=Object(r.a)(Object(a.a)(["fantasy-land/map","map"],l,function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return Object(s.a)(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return Object(c.a)(function(n,r){return n[r]=t(e[r]),n},{},Object(f.a)(e));default:return Object(i.a)(t,e)}})),d=Object(r.a)(function(t,e){return function(n){return function(r){return p(function(t){return e(t,r)},n(t(r)))}}});e.a=d},lPeS:function(t,e,n){"use strict";var r=n("SqIO"),a=n("1z8A"),i=n("wyUd"),c=n("/PtW"),u=Number.isInteger||function(t){return t<<0===t},o=n("dwRh"),l=n("Upr7"),s=Object(a.a)(function t(e,n,r){if(0===e.length)return n;var a=e[0];if(e.length>1){var s=!Object(l.a)(r)&&Object(i.a)(a,r)?r[a]:u(e[1])?[]:{};n=t(Array.prototype.slice.call(e,1),n,s)}if(u(a)&&Object(c.a)(r)){var f=[].concat(r);return f[a]=n,f}return Object(o.a)(a,n,r)}),f=n("hQPV"),p=n("I2HU"),d=Object(r.a)(function(t){return Object(f.a)(Object(p.a)(t),s(t))});e.a=d},"nr3+":function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",function(){return r})},qOTs:function(t,e,n){"use strict";var r=n("SqIO"),a=n("/PtW"),i=n("JI66"),c=Object(r.a)(function(t){return!!Object(a.a)(t)||!!t&&("object"==typeof t&&(!Object(i.a)(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))});e.a=c},rnKu:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/BoardPage",function(){var t=n("Txpn");return{page:t.default||t}}])},tAj3:function(t,e,n){"use strict";var r=n("lPeS"),a=r.a(["firstname"]),i=r.a(["lastname"]),c=(r.a(["birthdate"]),r.a(["position"])),u=r.a(["shirtNumber"]),o=r.a(["email"]),l=r.a(["tel"]);n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"a",function(){return o}),n.d(e,"f",function(){return l})},wyUd:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(e,t)}n.d(e,"a",function(){return r})},y6dH:function(t,e,n){"use strict";var r,a=n("+qP9"),i=n.n(a),c=n("OPrH"),u=n.n(c),o=function(t){return t.cloneNode(!0)},l=function(){return"file:"===window.location.protocol},s=new Map,f={},p=function(t,e){f[t]=f[t]||[],f[t].push(e)},d=function(t){for(var e=function(e,n){setTimeout(function(){if(Array.isArray(f[t])){var n=s.get(t),r=f[t][e];(n instanceof SVGSVGElement||n instanceof HTMLElement)&&r(null,o(n)),n instanceof Error&&r(n),e===f[t].length-1&&delete f[t]}},0)},n=0,r=f[t].length;n<r;n++)e(n)},m=0,b=[],h={},v="http://www.w3.org/1999/xlink",g=function(t,e,n,r,a){var i=t.getAttribute("data-src")||t.getAttribute("src");if(i&&/\.svg/i.test(i)){if(-1!==b.indexOf(t))return b.splice(b.indexOf(t),1),void(t=null);b.push(t),t.setAttribute("src",""),function(t,e){if(s.has(t)){var n=s.get(t);return n instanceof SVGSVGElement||n instanceof HTMLElement?void e(null,o(n)):n instanceof Error?void e(n):void p(t,e)}s.set(t,void 0),p(t,e);var r=new XMLHttpRequest;r.onreadystatechange=function(){try{if(4===r.readyState){if(404===r.status||null===r.responseXML)throw new Error(l()?"Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(!(200===r.status||l()&&0===r.status))throw new Error("There was a problem injecting the SVG: "+r.status+" "+r.statusText);r.responseXML instanceof Document&&r.responseXML.documentElement&&s.set(t,r.responseXML.documentElement),d(t)}}catch(e){s.set(t,e),d(t)}},r.open("GET",t),r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()}(i,function(c,u){if(!u)return b.splice(b.indexOf(t),1),t=null,void a(c);var o=t.getAttribute("id");o&&u.setAttribute("id",o);var l=t.getAttribute("title");l&&u.setAttribute("title",l);var s=t.getAttribute("width");s&&u.setAttribute("width",s);var f=t.getAttribute("height");f&&u.setAttribute("height",f);var p=Array.from(new Set((u.getAttribute("class")||"").split(" ").concat(["injected-svg"],(t.getAttribute("class")||"").split(" ")))).join(" ").trim();u.setAttribute("class",p);var d=t.getAttribute("style");d&&u.setAttribute("style",d),u.setAttribute("data-src",i);var g=[].filter.call(t.attributes,function(t){return/^data-\w[\w-]*$/.test(t.name)});if(Array.prototype.forEach.call(g,function(t){t.name&&t.value&&u.setAttribute(t.name,t.value)}),n){var y,j,O,w,E,S={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(S).forEach(function(t){y=t,O=S[t];for(var e=function(t,e){var n;w=j[t].id,E=w+"-"+ ++m,Array.prototype.forEach.call(O,function(t){for(var e=0,r=(n=u.querySelectorAll("["+t+'*="'+w+'"]')).length;e<r;e++){var a=n[e].getAttribute(t);a&&!a.match(new RegExp("url\\(#"+w+"\\)"))||n[e].setAttribute(t,"url(#"+E+")")}});for(var r=u.querySelectorAll("[*|href]"),a=[],i=0,c=r.length;i<c;i++){var o=r[i].getAttributeNS(v,"href");o&&o.toString()==="#"+j[t].id&&a.push(r[i])}for(var l=0,s=a.length;l<s;l++)a[l].setAttributeNS(v,"href","#"+E);j[t].id=E},n=0,r=(j=u.querySelectorAll(y+"[id]")).length;n<r;n++)e(n)})}u.removeAttribute("xmlns:a");for(var k,A,I=u.querySelectorAll("script"),x=[],N=0,P=I.length;N<P;N++)(A=I[N].getAttribute("type"))&&"application/ecmascript"!==A&&"application/javascript"!==A&&"text/javascript"!==A||((k=I[N].innerText||I[N].textContent)&&x.push(k),u.removeChild(I[N]));if(x.length>0&&("always"===e||"once"===e&&!h[i])){for(var T=0,C=x.length;T<C;T++)new Function(x[T])(window);h[i]=!0}var L=u.querySelectorAll("style");Array.prototype.forEach.call(L,function(t){t.textContent+=""}),u.setAttribute("xmlns","http://www.w3.org/2000/svg"),u.setAttribute("xmlns:xlink",v),r(u),t.parentNode&&t.parentNode.replaceChild(u,t),b.splice(b.indexOf(t),1),t=null,a(null,u)})}else a(new Error("Attempted to inject a file with a non-svg extension: "+i))};!function(t){t.Always="always",t.Once="once",t.Never="never"}(r||(r={}));var y=n("17x9"),j=n("q1tI"),O=n("KAy6"),w=n.n(O),E=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).initialState={hasError:!1,isLoading:!0},e.state=e.initialState,e._isMounted=!1,e.refCallback=function(t){e.container=t},e}u()(e,t);var n=e.prototype;return n.renderSVG=function(){var t=this;if(this.container instanceof Node){var e=this.props,n=e.beforeInjection,a=e.evalScripts,i=e.renumerateIRIElements,c=e.src,u=this.props.afterInjection,o=this.props.wrapper,l=document.createElement(o);l.innerHTML=w.a.renderToStaticMarkup(Object(j.createElement)(o,null,Object(j.createElement)(o,{"data-src":c}))),this.svgWrapper=this.container.appendChild(l.firstChild);!function(t,e){var n=void 0===e?{}:e,a=n.afterAll,i=void 0===a?function(){}:a,c=n.afterEach,u=void 0===c?function(){}:c,o=n.beforeEach,l=void 0===o?function(){}:o,s=n.evalScripts,f=void 0===s?r.Never:s,p=n.renumerateIRIElements,d=void 0===p||p;if(t&&"length"in t)for(var m=0,b=0,h=t.length;b<h;b++)g(t[b],f,d,l,function(e,n){u(e,n),t&&"length"in t&&t.length===++m&&i(m)});else t?g(t,f,d,l,function(e,n){u(e,n),i(1),t=null}):i(0)}(this.svgWrapper.firstChild,{afterEach:function(e,n){e&&t.removeSVG(),t._isMounted&&t.setState(function(){return{hasError:!!e,isLoading:!1}},function(){u(e,n)})},beforeEach:n,evalScripts:a,renumerateIRIElements:i})}},n.removeSVG=function(){this.container instanceof Node&&this.svgWrapper instanceof Node&&(this.container.removeChild(this.svgWrapper),this.svgWrapper=null)},n.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},n.componentDidUpdate=function(t){var e=this;(function(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1})(t,this.props)&&this.setState(function(){return e.initialState},function(){e.removeSVG(),e.renderSVG()})},n.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},n.render=function(){var t=this.props,e=(t.afterInjection,t.beforeInjection,t.evalScripts,t.fallback),n=t.loading,r=(t.renumerateIRIElements,t.src,t.wrapper),a=i()(t,["afterInjection","beforeInjection","evalScripts","fallback","loading","renumerateIRIElements","src","wrapper"]),c=r;return Object(j.createElement)(c,Object.assign({},a,{ref:this.refCallback}),this.state.isLoading&&n&&Object(j.createElement)(n,null),this.state.hasError&&e&&Object(j.createElement)(e,null))},e}(j.Component);E.defaultProps={afterInjection:function(){},beforeInjection:function(){},evalScripts:"never",fallback:null,loading:null,renumerateIRIElements:!0,wrapper:"div"},E.propTypes={afterInjection:y.func,beforeInjection:y.func,evalScripts:Object(y.oneOf)(["always","once","never"]),fallback:Object(y.oneOfType)([y.func,y.object,y.string]),loading:Object(y.oneOfType)([y.func,y.object,y.string]),renumerateIRIElements:y.bool,src:y.string.isRequired,wrapper:Object(y.oneOf)(["div","span"])};e.a=E}},[["rnKu","5d41","9da1","ad9d"]]]);