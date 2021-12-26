(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),r=n.n(s),i=(n(11),n(4)),o=n.n(i),l=n(6),d=n(2),j=(n(13),n(14),n(0)),u=function(e){var t=e.handleSearch;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar navbar-light mx-3 mb-3",children:Object(j.jsx)("div",{className:"container-fluid justify-content-center",children:Object(j.jsxs)("form",{className:"d-flex",onSubmit:t,children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",name:"country",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})})})},h=function(e){var t,n=e.daily,c=e.icon,a=e.id,s=n.temp,r=n.weather,i=new Date;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card m-2 forecast",width:"15rem;",children:[Object(j.jsx)("p",{children:(t=a+1,new Date(i.getFullYear(),i.getMonth(),i.getDate()+t).toDateString().slice(0,11))}),Object(j.jsx)("img",{src:c(r[0].icon),className:"card-img-top icon",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("strong",{className:"m-2 ",children:[Math.round(s.min),"\xb0C"]}),Object(j.jsxs)("strong",{className:"m-2 ",children:[Math.round(s.max),"\xb0C"]})]})]})})},b=function(e){var t=e.title,n=e.detail,c=e.detailUnit;return Object(j.jsxs)("div",{className:"card detail mb-4",children:[Object(j.jsx)("span",{children:t}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("span",{className:"weather-detail",children:n}),Object(j.jsx)("p",{children:c})]})]})},m=function(e){var t=e.currentWeather,n=e.forecast,c=t.main,a=t.weather,s=t.name,r=t.wind,i=n.daily,o=function(e){return"http://openweathermap.org/img/wn/".concat(e,"@2x.png")};return Object(j.jsxs)("div",{className:"container-weather",children:[Object(j.jsxs)("div",{className:"weather",children:[Object(j.jsx)("strong",{children:s}),Object(j.jsx)("img",{src:o(a[0].icon),className:"icon"}),Object(j.jsxs)("strong",{className:"temp",children:[Math.round(c.temp),"\xb0 C"]}),Object(j.jsx)("strong",{className:"text-muted",children:a[0].description})]}),Object(j.jsx)("div",{className:"container-forecast justify-content-xxl-center",children:Object(j.jsx)("div",{className:"forecasts",children:i.map((function(e,t){return 7!==t&&Object(j.jsx)(h,{id:t,daily:e,icon:o},t)}))})}),Object(j.jsxs)("div",{className:"container-fluid d-md-flex justify-content-md-around ",children:[Object(j.jsx)(b,{title:"Wind status",detail:r.speed,detailUnit:"m/s"}),Object(j.jsx)(b,{title:"Air pressure",detail:c.pressure,detailUnit:"hPa"}),Object(j.jsx)(b,{title:"Humidity",detail:c.humidity,detailUnit:"%"})]})]})};var p=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),r=Object(d.a)(s,2),i=r[0],h=r[1],b=Object(c.useState)(),p=Object(d.a)(b,2),f=p[0],x=p[1],O=Object(c.useState)(),g=Object(d.a)(O,2),v=g[0],N=g[1],w="cfc0bb2a30e6c158d818575f9fd77655";function y(e){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(o.a.mark((function e(t){var c,a,s,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==t){e.next=11;break}return e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&lang=en&units=metric&appid=").concat(w));case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,h(a),N(a.coord),e.next=29;break;case 11:if(2!==t){e.next=21;break}return e.next=14,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(v.lat,"&lon=").concat(v.lon,"&units=metric&exclude=hourly,minutely&appid=").concat(w));case 14:return s=e.sent,e.next=17,s.json();case 17:r=e.sent,x(r),e.next=29;break;case 21:if(3!==t){e.next=29;break}return e.next=24,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(v.lat,"&lon=").concat(v.lon,"&lang=sp&units=metric&appid=").concat(w));case 24:return i=e.sent,e.next=27,i.json();case 27:l=e.sent,h(l);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){N({lon:e.coords.longitude,lat:e.coords.latitude})};return Object(c.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(k):console.log("ubicacion no disponible")}),[]),Object(c.useEffect)((function(){v?y(2):console.log("coords not found")}),[v]),Object(c.useEffect)((function(){!n&&v&&y(3)}),[n,v]),Object(c.useEffect)((function(){n?y(1):console.log("city not found")}),[n]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{handleSearch:function(e){e.preventDefault();var t=e.target.firstChild;a(t.value)}}),f&&i&&Object(j.jsx)(m,{currentWeather:i,forecast:f}),!i&&Object(j.jsx)("div",{className:"spinner-border text-info loading",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.e6b35ef5.chunk.js.map