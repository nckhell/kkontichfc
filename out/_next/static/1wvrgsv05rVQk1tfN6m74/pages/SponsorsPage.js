(window.webpackJsonp=window.webpackJsonp||[]).push([["319b"],{OhLy:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/SponsorsPage",function(){var e=t("rLO+");return{page:e.default||e}}])},"rLO+":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("LvDl"),o=t.n(c),l=t("gkbN"),s=t("erEE"),i=t.n(s),m=t("Sv8q"),p=t("L2eC"),d=t("nl4B"),u=t("+xep"),f=function(e){var a=e.sponsor;return r.a.createElement("div",{className:"mb-4 px-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 "},r.a.createElement(u.CloudinaryContext,{cloudName:"kkontichfc"},r.a.createElement("a",{href:Object(l.prefixURL)(a.url),target:"_blank",rel:"noopener noreferrer",title:a.name,className:"border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"},r.a.createElement("div",{className:"w-full h-32 flex bg-cover justify-center items-center text-center py-4"},a.cloudinaryID&&r.a.createElement(u.Image,{publicId:"sponsors/".concat(a.cloudinaryID),className:"inline-block max-h-full"},r.a.createElement(u.Transformation,{width:"180",height:"120",crop:"fit"})),!a.cloudinaryID&&r.a.createElement("img",{src:Object(l.prefixURL)("/static/img/no-sponsor-image.jpg"),width:"100",className:"inline-block max-h-full",alt:"Geen sponsor afbeelding beschikbaar"})),r.a.createElement("div",{className:"text-lg text-center h-24 leading-relaxed py-6 px-6"},a.name))))},h=function(e){var a=e.data;return r.a.createElement("div",{className:"mt-6 flex -mx-2 flex-wrap mb-6 lg:mb-10"},a&&a.map(function(e,a){return r.a.createElement(f,{sponsor:e,key:"".concat(e.name,"-").concat(a)})}))};a.default=function(){var e=o.a.orderBy(p.a,"name","asc"),a=o.a.filter(e,function(e){return"DAMESSPONSOR"===e.type}),t=o.a.filter(e,function(e){return"KANTINESPONSOR"===e.type}),n=o.a.filter(e,function(e){return"CLUBSPONSOR"===e.type});return r.a.createElement(m.a,null,r.a.createElement(i.a,{config:{title:"Sponsors | Commercieel",description:"K. Kontich F.C. wil graag al haar sponsors bedanken.",canonical:"https://kkontichfc.be/commercieel/sponsors",openGraph:{type:"website",locale:"nl_BE",url:"https://kkontichfc.be/commercieel/sponsors",title:"Sponsors | Commercieel | K. Kontich F.C.",description:"K. Kontich F.C. wil graag al haar sponsors bedanken."}}}),r.a.createElement("div",{id:"kkfc-background-logo"},r.a.createElement("div",{className:"px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left"},r.a.createElement(d.a,{data:[{title:"commercieel",url:"commercieel"},{title:"sponsors",url:"sponsors"}]})),r.a.createElement("section",{className:"container mt-8 md:mt-10 mx-auto px-4"},r.a.createElement("h2",null,"Clubsponsors"),r.a.createElement(h,{data:n}),r.a.createElement("h2",null,"Kantinesponsors"),r.a.createElement(h,{data:t}),r.a.createElement("h2",null,"Damessponsors"),r.a.createElement(h,{data:a})),r.a.createElement("img",{className:"logo-kkfc-in-background",src:Object(l.prefixURL)("/static/img/kkontichfc.svg"),alt:"K. Kontich F.C."})))}}},[["OhLy","5d41","9da1","ad9d"]]]);