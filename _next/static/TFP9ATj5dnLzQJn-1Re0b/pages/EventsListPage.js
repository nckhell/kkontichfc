(window.webpackJsonp=window.webpackJsonp||[]).push([["ab15"],{"/PtW":function(e,t,n){"use strict";t.a=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},"1z8A":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("SqIO"),o=n("L8iz"),a=n("nr3+");function c(e){return function t(n,c,i){switch(arguments.length){case 0:return t;case 1:return Object(a.a)(n)?t:Object(o.a)(function(t,r){return e(n,t,r)});case 2:return Object(a.a)(n)&&Object(a.a)(c)?t:Object(a.a)(n)?Object(o.a)(function(t,n){return e(t,c,n)}):Object(a.a)(c)?Object(o.a)(function(t,r){return e(n,t,r)}):Object(r.a)(function(t){return e(n,c,t)});default:return Object(a.a)(n)&&Object(a.a)(c)&&Object(a.a)(i)?t:Object(a.a)(n)&&Object(a.a)(c)?Object(o.a)(function(t,n){return e(t,n,i)}):Object(a.a)(n)&&Object(a.a)(i)?Object(o.a)(function(t,n){return e(t,c,n)}):Object(a.a)(c)&&Object(a.a)(i)?Object(o.a)(function(t,r){return e(n,t,r)}):Object(a.a)(n)?Object(r.a)(function(t){return e(t,c,i)}):Object(a.a)(c)?Object(r.a)(function(t){return e(n,t,i)}):Object(a.a)(i)?Object(r.a)(function(t){return e(n,c,t)}):e(n,c,i)}}}},GPXY:function(e,t,n){"use strict";var r=n("JVDt");function o(e,t){return function(){return t.call(this,e.apply(this,arguments))}}var a=n("1z8A"),c=n("OEMQ"),i=Object(a.a)(c.a),s=n("fMaj"),u=n("SqIO"),l=n("aTUd"),d=Object(u.a)(Object(s.a)("tail",Object(l.a)(1,1/0)));var f=n("JI66"),m=Object(u.a)(function(e){return Object(f.a)(e)?e.split("").reverse().join(""):Array.prototype.slice.call(e,0).reverse()});function p(){if(0===arguments.length)throw new Error("compose requires at least one argument");return function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(r.a)(arguments[0].length,i(o,arguments[0],d(arguments)))}.apply(this,m(arguments))}n.d(t,"a",function(){return p})},I2HU:function(e,t,n){"use strict";var r=n("L8iz"),o=Object(r.a)(function(e,t){for(var n=t,r=0;r<e.length;){if(null==n)return;n=n[e[r]],r+=1}return n});t.a=o},JI66:function(e,t,n){"use strict";function r(e){return"[object String]"===Object.prototype.toString.call(e)}n.d(t,"a",function(){return r})},JVDt:function(e,t,n){"use strict";function r(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,o){return t.apply(this,arguments)};case 5:return function(e,n,r,o,a){return t.apply(this,arguments)};case 6:return function(e,n,r,o,a,c){return t.apply(this,arguments)};case 7:return function(e,n,r,o,a,c,i){return t.apply(this,arguments)};case 8:return function(e,n,r,o,a,c,i,s){return t.apply(this,arguments)};case 9:return function(e,n,r,o,a,c,i,s,u){return t.apply(this,arguments)};case 10:return function(e,n,r,o,a,c,i,s,u,l){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(t,"a",function(){return r})},KMkw:function(e,t,n){"use strict";var r=n("L8iz"),o=n("gSdd");var a=n("OEMQ"),c=n("ZMgP"),i=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=c.a.init,e.prototype["@@transducer/result"]=c.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),s=Object(r.a)(function(e,t){return new i(e,t)}),u=n("ZuG0"),l=Object(r.a)(Object(o.a)(["filter"],s,function(e,t){return n=t,"[object Object]"===Object.prototype.toString.call(n)?Object(a.a)(function(n,r){return e(t[r])&&(n[r]=t[r]),n},{},Object(u.a)(t)):function(e,t){for(var n=0,r=t.length,o=[];n<r;)e(t[n])&&(o[o.length]=t[n]),n+=1;return o}(e,t);var n}));t.a=l},L8iz:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("SqIO"),o=n("nr3+");function a(e){return function t(n,a){switch(arguments.length){case 0:return t;case 1:return Object(o.a)(n)?t:Object(r.a)(function(t){return e(n,t)});default:return Object(o.a)(n)&&Object(o.a)(a)?t:Object(o.a)(n)?Object(r.a)(function(t){return e(t,a)}):Object(o.a)(a)?Object(r.a)(function(t){return e(n,t)}):e(n,a)}}}},NXBE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/EventsListPage",function(){var e=n("PDUr");return{page:e.default||e}}])},OEMQ:function(e,t,n){"use strict";var r=n("qOTs"),o=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();var a=n("JVDt"),c=n("L8iz"),i=Object(c.a)(function(e,t){return Object(a.a)(e.length,function(){return e.apply(t,arguments)})});function s(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function u(e,t,n,r){return e["@@transducer/result"](n[r](i(e["@@transducer/step"],e),t))}n.d(t,"a",function(){return d});var l="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function d(e,t,n){if("function"==typeof e&&(e=function(e){return new o(e)}(e)),Object(r.a)(n))return function(e,t,n){for(var r=0,o=n.length;r<o;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return u(e,t,n,"fantasy-land/reduce");if(null!=n[l])return s(e,t,n[l]());if("function"==typeof n.next)return s(e,t,n);if("function"==typeof n.reduce)return u(e,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}},PDUr:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),c=n("a7VT"),i=n("AT/M"),s=n("Tit0"),u=n("vYYK"),l=n("q1tI"),d=n.n(l),f=n("T3y9"),m=n("GPXY"),p=n("KMkw"),b=n("erEE"),v=n.n(b),j=n("Sv8q"),h=n("bKtg"),g=n("nl4B"),k=n("gkbN"),O=n("tNhX"),w=function(e){var t,n=e.data,r=Object(O.e)(n),o=Object(O.b)(n.date),a=Object(O.c)(n.date);return t=n.cloudinaryID?"https://res.cloudinary.com/kkontichfc/image/upload/v1/evenementen/".concat(n.cloudinaryID):Object(k.prefixURL)("/static/img/no-news-image.png"),d.a.createElement("article",{className:"mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2"},d.a.createElement("a",{href:Object(k.prefixURL)(r),title:n.title,className:"border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"},d.a.createElement("div",{className:"w-full h-48 lg:h-56 bg-cover",style:{backgroundImage:"url('".concat(t,"')"),backgroundPosition:"".concat(n.backgroundPosition?n.backgroundPosition:"center")}}),d.a.createElement("div",{className:"flex"},d.a.createElement("div",{className:"w-1/4 bg-yellow-200 text-yellow-700 font-semibold text-2xl py-5 flex justify-center items-center flex-col leading-none border-r-2 border-yellow-400"},d.a.createElement("span",{className:"block"},o),d.a.createElement("span",{className:"block"},a)),d.a.createElement("div",{className:"w-3/4 flex px-4 lg:px-6 items-center uppercase font-semibold text-gray-900"},n.title))))},y=function(e){var t=e.data;return d.a.createElement("div",{className:"mt-6 md:flex md:-mx-2 flex-wrap"},t&&t.map(function(e){return d.a.createElement(w,{data:e,key:e.base})}),!t&&d.a.createElement("p",null,"Er zijn momenteel nog geen evenementen gepland."))},E=n("YdOs"),x=n.n(E),K=n("xUNc"),D=function(e){function t(){var e;return Object(r.default)(this,t),e=Object(a.default)(this,Object(c.default)(t).call(this)),Object(u.a)(Object(i.default)(e),"state",{eventsList:Object(O.g)(h,"asc"),seasonInFilter:x.a.currentSeason,showPastEventsFilter:!0}),Object(u.a)(Object(i.default)(e),"filterSeason",function(t){t.preventDefault();var n=t.target.id;e.setState({seasonInFilter:n})}),Object(u.a)(Object(i.default)(e),"filterShowPastEvents",function(){var t=e.state.showPastEventsFilter;t=!t,e.setState({showPastEventsFilter:t})}),e.filterShowPastEvents=e.filterShowPastEvents.bind(Object(i.default)(e)),e.filterSeason=e.filterSeason.bind(Object(i.default)(e)),e}return Object(s.default)(t,e),Object(o.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this,n=this.state,r=n.showPastEventsFilter,o=n.seasonInFilter,a=n.eventsList,c=Object(O.a)(h),i=m.a((e=r,function(t){return e?t:Object(O.f)(t,!0)}),p.a(function(e){return Object(O.d)(f.a(K.d,e))===o}))(a);return d.a.createElement(j.a,{showGrassHeader:!0},d.a.createElement(v.a,{config:{title:"Evenementen",description:"K. Kontich F.C. organiseert doorheen het jaar tal van evenementen. Ontdek welke evenementen er zitten aan te komen.",canonical:"https://www.kkontichfc.be/evenementen/",openGraph:{type:"website",locale:"nl_BE",url:"https://www.kkontichfc.be/evenementen/",title:"Evenementen | K. Kontich F.C.",description:"K. Kontich F.C. organiseert doorheen het jaar tal van evenementen. Ontdek welke evenementen er zitten aan te komen."}}}),d.a.createElement("main",null,d.a.createElement("div",{className:"px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left"},d.a.createElement(g.a,{data:[{title:"commercieel",url:"#"},{title:"evenementen",url:"evenementen"}]})),d.a.createElement("section",{className:"container mt-8 md:mt-10 mx-auto px-4"},d.a.createElement("div",{className:"body-content"},d.a.createElement("h1",{className:"pb-6 inline-block lg:w-4/6"},"Evenementen")),d.a.createElement("div",{className:"my-6"},d.a.createElement("ul",{className:"tab-wrapper"},c&&c.map(function(e){return d.a.createElement("li",{className:"inline-block",key:e},d.a.createElement("a",{className:o===e?"active":"",href:"#".concat(e),title:e,onClick:t.filterSeason,id:e},e))}))),d.a.createElement("div",{className:"bg-gray-111 border border-gray-100 pt-6 pb-4 px-6 my-8"},d.a.createElement("div",{className:"-mx-2"},d.a.createElement("div",{className:"checkbox-wrapper inline-block"},d.a.createElement("label",{className:"checklabel",htmlFor:"show_past"},d.a.createElement("input",{className:"checkbox mr-2",type:"checkbox",name:"show_past",id:"show_past",checked:r,readOnly:!0,onChange:this.filterShowPastEvents}),d.a.createElement("span",null,"Toon evenementen uit verleden"))))),d.a.createElement(y,{data:i}))),d.a.createElement("div",{className:"spacer mb-16 md:mb-24"}))}}]),t}(l.Component);t.default=D},Reno:function(e,t,n){"use strict";function r(e,t){for(var n=0,r=t.length,o=Array(r);n<r;)o[n]=e(t[n]),n+=1;return o}n.d(t,"a",function(){return r})},SqIO:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("nr3+");function o(e){return function t(n){return 0===arguments.length||Object(r.a)(n)?t:e.apply(this,arguments)}}},T3y9:function(e,t,n){"use strict";var r=n("L8iz"),o=function(e){return{value:e,"fantasy-land/map":function(){return this}}},a=Object(r.a)(function(e,t){return e(o)(t).value});t.a=a},Upr7:function(e,t,n){"use strict";var r=n("SqIO"),o=Object(r.a)(function(e){return null==e});t.a=o},YR7Z:function(e,t,n){"use strict";var r=n("JVDt"),o=n("SqIO"),a=n("L8iz"),c=n("nr3+");var i=Object(a.a)(function(e,t){return 1===e?Object(o.a)(t):Object(r.a)(e,function e(t,n,o){return function(){for(var a=[],i=0,s=t,u=0;u<n.length||i<arguments.length;){var l;u<n.length&&(!Object(c.a)(n[u])||i>=arguments.length)?l=n[u]:(l=arguments[i],i+=1),a[u]=l,Object(c.a)(l)||(s-=1),u+=1}return s<=0?o.apply(this,a):Object(r.a)(s,e(t,a,o))}}(e,[],t))});t.a=i},YdOs:function(e,t,n){"use strict";e.exports={currentSeason:"2021-2022"}},ZMgP:function(e,t,n){"use strict";t.a={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},ZuG0:function(e,t,n){"use strict";var r=n("SqIO"),o=n("wyUd"),a=Object.prototype.toString,c=function(){return"[object Arguments]"===a.call(arguments)?function(e){return"[object Arguments]"===a.call(e)}:function(e){return Object(o.a)("callee",e)}}(),i=!{toString:null}.propertyIsEnumerable("toString"),s=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],u=function(){return arguments.propertyIsEnumerable("length")}(),l=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},d="function"!=typeof Object.keys||u?Object(r.a)(function(e){if(Object(e)!==e)return[];var t,n,r=[],a=u&&c(e);for(t in e)!Object(o.a)(t,e)||a&&"length"===t||(r[r.length]=t);if(i)for(n=s.length-1;n>=0;)t=s[n],Object(o.a)(t,e)&&!l(r,t)&&(r[r.length]=t),n-=1;return r}):Object(r.a)(function(e){return Object(e)!==e?[]:Object.keys(e)});t.a=d},aTUd:function(e,t,n){"use strict";var r=n("fMaj"),o=n("1z8A"),a=Object(o.a)(Object(r.a)("slice",function(e,t,n){return Array.prototype.slice.call(n,e,t)}));t.a=a},bKtg:function(e){e.exports={fileMap:{"content/build/evenementen/2018-2019/diner-kkfc-herentals.json":{title:"Diner KKFC - VC Herentals",date:"2018-10-27T00:00:00.000Z",preview:"ZATERDAG 27 OKTOBER 2018 - 17U30\n    Cava *\n    Bloemkoolsoepje met garnalen *",dir:"content/build/evenementen/2018-2019",base:"diner-kkfc-herentals.json",ext:".json",sourceBase:"diner-kkfc-herentals.md",sourceExt:".md"},"content/build/evenementen/2018-2019/diner-kkfc-rochus-deurne.json":{title:"Diner KKFC - Rochus Deurne",date:"2019-01-19T00:00:00.000Z",preview:"ZATERDAG 19 JANUARI 2019 - 17u30\n    Cava *\n    Reuze vleesbrochette met warme groentjes,",dir:"content/build/evenementen/2018-2019",base:"diner-kkfc-rochus-deurne.json",ext:".json",sourceBase:"diner-kkfc-rochus-deurne.md",sourceExt:".md"},"content/build/evenementen/2018-2019/diner-kkfc-vv-duffel.json":{title:"Diner KKFC - VV Duffel",date:"2019-04-07T00:00:00.000Z",preview:"ZATERDAG 27 OKTOBER 2018 - 17U30\n    Cava *\n    Bloemkoolsoepje met garnalen *",dir:"content/build/evenementen/2018-2019",base:"diner-kkfc-vv-duffel.json",ext:".json",sourceBase:"diner-kkfc-vv-duffel.md",sourceExt:".md"},"content/build/evenementen/2018-2019/herfststage.json":{title:"Herfststage",date:"2018-10-10T00:00:00.000Z",preview:"De voorbije voetbalkampen van KKFC (Herfststage, Paasstage en Zomerstage ) wezen uit dat onze jeugd",dir:"content/build/evenementen/2018-2019",base:"herfststage.json",ext:".json",sourceBase:"herfststage.md",sourceExt:".md"},"content/build/evenementen/2018-2019/mosselsouper-de-zwaluw.json":{title:"Mosselsouper KKFC - De Zwaluw",date:"2018-09-15T00:00:00.000Z",cloudinaryID:"8_wxcscm",preview:"Op zaterdag 15 en zondag 16 september 2018 slaan K. Kontich F.C., de damesafdeling &eacute;n Lokaal",dir:"content/build/evenementen/2018-2019",base:"mosselsouper-de-zwaluw.json",ext:".json",sourceBase:"mosselsouper-de-zwaluw.md",sourceExt:".md"},"content/build/evenementen/2018-2019/diner-kkfc-de-kempen.json":{title:"Diner KKFC - FC De Kempen TL",date:"2019-03-02T00:00:00.000Z",preview:"ZATERDAG 2 MAART 2019 - 17u30\n    Cava *\n    Witloofroomsoep *\n    Rundsstoverij met vergeten",dir:"content/build/evenementen/2018-2019",base:"diner-kkfc-de-kempen.json",ext:".json",sourceBase:"diner-kkfc-de-kempen.md",sourceExt:".md"},"content/build/evenementen/2018-2019/sponsorreceptie-kkfc-berg-en-dal.json":{title:"Sponsorreceptie KKFC - Berg & Dal",date:"2019-02-16T00:00:00.000Z",preview:"Inschrijven via commercieel@kkontichfc.be of GSM 0479/69.48.49.",dir:"content/build/evenementen/2018-2019",base:"sponsorreceptie-kkfc-berg-en-dal.json",ext:".json",sourceBase:"sponsorreceptie-kkfc-berg-en-dal.md",sourceExt:".md"},"content/build/evenementen/2019-2020/bingoavond-supportsclub.json":{title:"16de Grote Bingo-avond",date:"2019-09-27T00:00:00.000Z",cloudinaryID:"Bingo_u859fo",preview:'Op vrijdag 27 september vanaf 20u kan je in supportersclub "De Zwalub" terecht voor de 16de grote',dir:"content/build/evenementen/2019-2020",base:"bingoavond-supportsclub.json",ext:".json",sourceBase:"bingoavond-supportsclub.md",sourceExt:".md"},"content/build/evenementen/2019-2020/diner-kkfc-rvc-hoboken.json":{title:"Diner KKFC - RVC Hoboken",date:"2019-11-30T00:00:00.000Z",cloudinaryID:"IMG-20191107-WA0002_wukosd",preview:"DINER @ K. KONTICH F.C.\n\nCava\n**\nWitloofsoep met appel\n**\nStoofpotje van kip\n**\nProfiteroles met",dir:"content/build/evenementen/2019-2020",base:"diner-kkfc-rvc-hoboken.json",ext:".json",sourceBase:"diner-kkfc-rvc-hoboken.md",sourceExt:".md"},"content/build/evenementen/2019-2020/fotomoment-jeugd.json":{title:"Fotomoment ploegfoto's jeugd",date:"2019-09-21T00:00:00.000Z",cloudinaryID:"42201321_2420249461326358_3819049121050787840_o_plubzk_o0bavu",preview:"Zaterdag a.s. nemen we de ploegfoto’s voor het seizoen 2019/2020 en het belooft alvast prachtig weer",dir:"content/build/evenementen/2019-2020",base:"fotomoment-jeugd.json",ext:".json",sourceBase:"fotomoment-jeugd.md",sourceExt:".md"},"content/build/evenementen/2019-2020/diner-kkfc-ternesse-wommelgem.json":{title:"Diner KKFC - Ternesse Wommelgem",date:"2019-09-07T00:00:00.000Z",cloudinaryID:"67402114_3109515445733086_7220535521515143168_n_r0dolc",preview:"Eerste thuiswedstrijd betekent ook het eerste etentje van het seizoen.\n\nDe buren van Ternesse",dir:"content/build/evenementen/2019-2020",base:"diner-kkfc-ternesse-wommelgem.json",ext:".json",sourceBase:"diner-kkfc-ternesse-wommelgem.md",sourceExt:".md"},"content/build/evenementen/2018-2019/sponsorreceptie-kkfc-schriek.json":{title:"Sponsorreceptie KKFC - Schriek",date:"2018-12-08T00:00:00.000Z",preview:"Inschrijven via commercieel@kkontichfc.be of GSM 0479/69.48.49.",dir:"content/build/evenementen/2018-2019",base:"sponsorreceptie-kkfc-schriek.json",ext:".json",sourceBase:"sponsorreceptie-kkfc-schriek.md",sourceExt:".md"},"content/build/evenementen/2019-2020/vermant-cup.json":{title:"Vermant-Cup 2020",date:"2020-08-24T00:00:00.000Z",cloudinaryID:"5b903ee3469a1",preview:"Beste sportvrienden,\n\nHet clubbestuur van K. Kontich F.C. ziet zich jammer genoeg genoodzaakt om de",dir:"content/build/evenementen/2019-2020",base:"vermant-cup.json",ext:".json",sourceBase:"vermant-cup.md",sourceExt:".md"},"content/build/evenementen/2021-2022/diner-kkfc-ternesse-wommelgem.json":{title:"Diner @ KKFC – Ternesse Wommelgem",date:"2022-01-22T00:00:00.000Z",preview:"DINER @ K. KONTICH F.C.\n\nCava\n**\nWitloofroomsoep\n**\nRundsstoverij met vergeten groentjes en",dir:"content/build/evenementen/2021-2022",base:"diner-kkfc-ternesse-wommelgem.json",ext:".json",sourceBase:"diner-kkfc-ternesse-wommelgem.md",sourceExt:".md"},"content/build/evenementen/2021-2022/diner-kkfc-vosselaar.json":{title:"Diner @ KKFC – Vosselaar",date:"2022-05-01T00:00:00.000Z",preview:"DINER @ K. KONTICH F.C.\n\nCava\n**\nAspergeroomsoep met gerookte zalm\n**\nOpgevulde kipfilet met",dir:"content/build/evenementen/2021-2022",base:"diner-kkfc-vosselaar.json",ext:".json",sourceBase:"diner-kkfc-vosselaar.md",sourceExt:".md"},"content/build/evenementen/2021-2022/diner-kkfc-bornem.json":{title:"Diner @ KKFC – KSV Bornem",date:"2021-10-09T00:00:00.000Z",preview:"DINER @ K. KONTICH F.C.\n\nCava\n**\nBloemkoolsoepje met garnalen\n**\nVarkenshaasje met gewokte",dir:"content/build/evenementen/2021-2022",base:"diner-kkfc-bornem.json",ext:".json",sourceBase:"diner-kkfc-bornem.md",sourceExt:".md"},"content/build/evenementen/2019-2020/7e-voetbalquiz.json":{title:"7e Voetbalquiz t.v.v jeugdafdeling KKFC",date:"2020-03-06T00:00:00.000Z",cloudinaryID:"0557b9c92034b39_q7oaxu",preview:"Van 20:00 - 23:45\nK. Kontich FC\nDuffelsesteenweg 73, 2550 Kontich",dir:"content/build/evenementen/2019-2020",base:"7e-voetbalquiz.json",ext:".json",sourceBase:"7e-voetbalquiz.md",sourceExt:".md"},"content/build/evenementen/2021-2022/diner-kkfc-ranst.json":{title:"Diner @ KKFC – Ranst",date:"2021-11-20T00:00:00.000Z",preview:"DINER @ K. KONTICH F.C.\n\nCava\n**\nCourgetteroomsoep met prei en broodcroutons\n**\nReuze",dir:"content/build/evenementen/2021-2022",base:"diner-kkfc-ranst.json",ext:".json",sourceBase:"diner-kkfc-ranst.md",sourceExt:".md"},"content/build/evenementen/2019-2020/kerstfeestje.json":{title:"Jaarlijks KKFC kerstfeestje!",date:"2019-12-21T00:00:00.000Z",cloudinaryID:"75224791_3455778684440092_6354079002587561984_o_ydxyyi",showImageInArticle:"NO",preview:"Noteer alvast ons jaarlijks kerstfeestje op zaterdag 21 december 2019 in jullie agenda!\n\nEen",dir:"content/build/evenementen/2019-2020",base:"kerstfeestje.json",ext:".json",sourceBase:"kerstfeestje.md",sourceExt:".md"},"content/build/evenementen/2020-2021/paastornooi-dag-2.json":{title:"Paastornooi / Vermant-Cup",date:"2021-04-05T00:00:00.000Z",preview:"De inschrijvingen voor ons 52ste Paastornooi / Vermant-Cup zijn geopend! Het tornooi gaat door op",dir:"content/build/evenementen/2020-2021",base:"paastornooi-dag-2.json",ext:".json",sourceBase:"paastornooi-dag-2.md",sourceExt:".md"},"content/build/evenementen/2020-2021/paastornooi-dag-1.json":{title:"Paastornooi / Vermant-Cup",date:"2021-04-03T00:00:00.000Z",preview:"De inschrijvingen voor ons 52ste Paastornooi / Vermant-Cup zijn geopend! Het tornooi gaat door op",dir:"content/build/evenementen/2020-2021",base:"paastornooi-dag-1.json",ext:".json",sourceBase:"paastornooi-dag-1.md",sourceExt:".md"},"content/build/evenementen/2020-2021/7e-voetbalquiz.json":{title:"Wedstrijddiner KKFC - Wezel Sport",date:"2020-10-24T00:00:00.000Z",cloudinaryID:"121054735_4819050578112889_40142844969045143_n_kxsshq",preview:"DINER @ K. KONTICH F.C.\n\nCava\n**\nPompoensoep met gandaham\n**\nStoofpotje van kip met",dir:"content/build/evenementen/2020-2021",base:"7e-voetbalquiz.json",ext:".json",sourceBase:"7e-voetbalquiz.md",sourceExt:".md"}},sourceFileArray:["content/evenementen/2018-2019/diner-kkfc-de-kempen.md","content/evenementen/2018-2019/diner-kkfc-herentals.md","content/evenementen/2018-2019/diner-kkfc-rochus-deurne.md","content/evenementen/2018-2019/diner-kkfc-vv-duffel.md","content/evenementen/2018-2019/herfststage.md","content/evenementen/2018-2019/mosselsouper-de-zwaluw.md","content/evenementen/2018-2019/sponsorreceptie-kkfc-berg-en-dal.md","content/evenementen/2018-2019/sponsorreceptie-kkfc-schriek.md","content/evenementen/2019-2020/7e-voetbalquiz.md","content/evenementen/2019-2020/bingoavond-supportsclub.md","content/evenementen/2019-2020/diner-kkfc-rvc-hoboken.md","content/evenementen/2019-2020/diner-kkfc-ternesse-wommelgem.md","content/evenementen/2019-2020/fotomoment-jeugd.md","content/evenementen/2019-2020/kerstfeestje.md","content/evenementen/2019-2020/vermant-cup.md","content/evenementen/2020-2021/7e-voetbalquiz.md","content/evenementen/2020-2021/paastornooi-dag-1.md","content/evenementen/2020-2021/paastornooi-dag-2.md","content/evenementen/2021-2022/diner-kkfc-bornem.md","content/evenementen/2021-2022/diner-kkfc-ranst.md","content/evenementen/2021-2022/diner-kkfc-ternesse-wommelgem.md","content/evenementen/2021-2022/diner-kkfc-vosselaar.md"]}},dwRh:function(e,t,n){"use strict";var r=n("1z8A"),o=Object(r.a)(function(e,t,n){var r={};for(var o in n)r[o]=n[o];return r[e]=t,r});t.a=o},fMaj:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("/PtW");function o(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return Object(r.a)(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}}},gSdd:function(e,t,n){"use strict";var r=n("/PtW");function o(e,t,n){return function(){if(0===arguments.length)return n();var o=Array.prototype.slice.call(arguments,0),a=o.pop();if(!Object(r.a)(a)){for(var c=0;c<e.length;){if("function"==typeof a[e[c]])return a[e[c]].apply(a,o);c+=1}if(function(e){return null!=e&&"function"==typeof e["@@transducer/step"]}(a))return t.apply(null,o)(a)}return n.apply(this,arguments)}}n.d(t,"a",function(){return o})},hQPV:function(e,t,n){"use strict";var r=n("L8iz"),o=n("gSdd"),a=n("Reno"),c=n("OEMQ"),i=n("ZMgP"),s=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=i.a.init,e.prototype["@@transducer/result"]=i.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),u=Object(r.a)(function(e,t){return new s(e,t)}),l=n("YR7Z"),d=n("ZuG0"),f=Object(r.a)(Object(o.a)(["fantasy-land/map","map"],u,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return Object(l.a)(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return Object(c.a)(function(n,r){return n[r]=e(t[r]),n},{},Object(d.a)(t));default:return Object(a.a)(e,t)}})),m=Object(r.a)(function(e,t){return function(n){return function(r){return f(function(e){return t(e,r)},n(e(r)))}}});t.a=m},lPeS:function(e,t,n){"use strict";var r=n("SqIO"),o=n("1z8A"),a=n("wyUd"),c=n("/PtW"),i=Number.isInteger||function(e){return e<<0===e},s=n("dwRh"),u=n("Upr7"),l=Object(o.a)(function e(t,n,r){if(0===t.length)return n;var o=t[0];if(t.length>1){var l=!Object(u.a)(r)&&Object(a.a)(o,r)?r[o]:i(t[1])?[]:{};n=e(Array.prototype.slice.call(t,1),n,l)}if(i(o)&&Object(c.a)(r)){var d=[].concat(r);return d[o]=n,d}return Object(s.a)(o,n,r)}),d=n("hQPV"),f=n("I2HU"),m=Object(r.a)(function(e){return Object(d.a)(Object(f.a)(e),l(e))});t.a=m},"nr3+":function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}n.d(t,"a",function(){return r})},qOTs:function(e,t,n){"use strict";var r=n("SqIO"),o=n("/PtW"),a=n("JI66"),c=Object(r.a)(function(e){return!!Object(o.a)(e)||!!e&&("object"==typeof e&&(!Object(a.a)(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))});t.a=c},tNhX:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"f",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return d});var r=n("pLtp"),o=n.n(r),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc";return e&&e.fileMap&&o()(e.fileMap).map(function(t){return e.fileMap[t]}).sort(function(e,n){var r=Date.parse(e.date),o=Date.parse(n.date);return"asc"===t?o<r?1:o>r?-1:0:o>r?1:o<r?-1:0})},c=function(e){var t=[];return e.fileMap&&o()(e.fileMap).forEach(function(e){var n=e.split("/").slice(-2)[0];-1===t.indexOf(n)&&t.push(n)}),t.sort().reverse()},i=function(e){return e.split("/").slice(-1)[0]},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(new Date).setHours(0,0,0,0);return e.filter(function(e){var r=Date.parse(e.date);return t?r>=n:r>n})},u=function(e){return new Date(e).toLocaleDateString("nl-NL",{day:"numeric"})},l=function(e){return new Date(e).toLocaleDateString("nl-NL",{month:"short"})},d=function(e){return"".concat(e.dir.split("content/build").join(""),"/").concat(e.base.split(".json").join("/"))}},wyUd:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(t,e)}n.d(t,"a",function(){return r})},xUNc:function(e,t,n){"use strict";var r=n("lPeS"),o=r.a(["preview"]),a=r.a(["bodyHtml"]),c=r.a(["cloudinaryID"]),i=r.a(["base"]),s=r.a(["dir"]),u=r.a(["backgroundPosition"]);n.d(t,"f",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return u})}},[["NXBE","5d41","9da1","ad9d"]]]);