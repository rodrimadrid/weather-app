(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),r=(n(11),n(4)),o=n.n(r),l=n(6),d=n(2),j=(n(13),n(14),n(0)),h=function(e){var t=e.handleSearch;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar navbar-light mb-3",children:Object(j.jsx)("div",{className:"container-fluid justify-content-center",children:Object(j.jsxs)("form",{className:"d-flex",onSubmit:t,children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",name:"country",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})})})},u=function(e){var t,n=e.daily,c=e.icon,a=e.id,s=n.temp,i=n.weather,r=new Date;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card m-2 forecast",width:"15rem;",children:[Object(j.jsx)("p",{children:(t=a+1,new Date(r.getFullYear(),r.getMonth(),r.getDate()+t).toDateString().slice(0,11))}),Object(j.jsx)("img",{src:c(i[0].icon),className:"card-img-top icon",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("strong",{className:"m-2 ",children:[Math.round(s.min),"\xb0C"]}),Object(j.jsxs)("strong",{className:"m-2 ",children:[Math.round(s.max),"\xb0C"]})]})]})})},b=function(e){var t=e.title,n=e.detail,c=e.detailUnit;return Object(j.jsxs)("div",{className:"card detail mb-4",children:[Object(j.jsx)("span",{children:t}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("span",{className:"weather-detail",children:n}),Object(j.jsx)("p",{children:c})]})]})},m=function(e){var t=e.currentWeather,n=e.forecast,c=t.main,a=t.weather,s=t.name,i=t.wind,r=n.daily,o=function(e){return"http://openweathermap.org/img/wn/".concat(e,"@2x.png")};return Object(j.jsxs)("div",{className:"container-weather",children:[Object(j.jsxs)("div",{className:"weather",children:[Object(j.jsx)("strong",{children:s}),Object(j.jsx)("img",{src:o(a[0].icon),className:"icon"}),Object(j.jsxs)("strong",{className:"temp",children:[Math.round(c.temp),"\xb0 C"]}),Object(j.jsx)("strong",{className:"text-muted",children:a[0].description})]}),Object(j.jsx)("div",{className:"container-forecast justify-content-xxl-center",children:Object(j.jsx)("div",{className:"forecasts",children:r.map((function(e,t){return 7!==t&&Object(j.jsx)(u,{id:t,daily:e,icon:o},t)}))})}),Object(j.jsxs)("div",{className:"container-fluid d-md-flex justify-content-md-around ",children:[Object(j.jsx)(b,{title:"Wind status",detail:i.speed,detailUnit:"m/s"}),Object(j.jsx)(b,{title:"Air pressure",detail:c.pressure,detailUnit:"hPa"}),Object(j.jsx)(b,{title:"Humidity",detail:c.humidity,detailUnit:"%"})]})]})},x=function(e){var t=e.handlerLocation,n=e.geoLocation;return Object(j.jsxs)(j.Fragment,{children:[!n&&Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20 ",fill:"white",class:"bi bi-geo-alt",viewBox:"0 0 16 16",onClick:t,children:[Object(j.jsx)("path",{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}),Object(j.jsx)("path",{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})]}),n&&Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#ff391e",class:"bi bi-geo-alt-fill",viewBox:"0 0 16 16",onClick:t,children:Object(j.jsx)("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})})]})};var f=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),i=Object(d.a)(s,2),r=i[0],u=i[1],b=Object(c.useState)(),f=Object(d.a)(b,2),p=f[0],O=f[1],g=Object(c.useState)(),v=Object(d.a)(g,2),w=v[0],N=v[1],y=Object(c.useState)(!1),S=Object(d.a)(y,2),C=S[0],k=S[1],L="cfc0bb2a30e6c158d818575f9fd77655";function M(e){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(o.a.mark((function e(t){var c,a,s,i,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==t){e.next=11;break}return e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&lang=en&units=metric&appid=").concat(L)).catch((function(e){return console.log(e)}));case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,u(a),N(a.coord),e.next=29;break;case 11:if(2!==t){e.next=21;break}return e.next=14,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(w.lat,"&lon=").concat(w.lon,"&units=metric&exclude=hourly,minutely&appid=").concat(L)).catch((function(e){return console.log(e)}));case 14:return s=e.sent,e.next=17,s.json();case 17:i=e.sent,O(i),e.next=29;break;case 21:if(3!==t){e.next=29;break}return e.next=24,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(w.lat,"&lon=").concat(w.lon,"&lang=sp&units=metric&appid=").concat(L)).catch((function(e){return console.log(e)}));case 24:return r=e.sent,e.next=27,r.json();case 27:l=e.sent,u(l);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(e){k(!C),C?a():console.log("la"),navigator.geolocation?navigator.geolocation.getCurrentPosition(D):alert("geolocation not find")},D=function(e){N({lon:e.coords.longitude,lat:e.coords.latitude})};return Object(c.useEffect)((function(){w?M(2):console.log("coords not found")}),[w]),Object(c.useEffect)((function(){!n&&w?M(3):n&&w?M(C?3:1):n&&M(1)}),[n,w]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)(h,{handleSearch:function(e){e.preventDefault();var t=e.target.firstChild;a(t.value),k(!1),t.value="",setTimeout((function(){a()}),2e3)}}),Object(j.jsx)(x,{handlerLocation:z,geoLocation:C})]}),p&&r&&Object(j.jsx)(m,{currentWeather:r,forecast:p}),!r&&!C&&!n&&Object(j.jsx)("div",{className:"index",children:Object(j.jsx)("div",{className:"weather",id:"index",onClick:function(e){var t=document.getElementById("index");t.classList.add("animation"),setTimeout((function(){t.classList.remove("animation"),z()}),200)},children:Object(j.jsx)("h2",{children:"Search your weather"})})}),(n&&!r||C&&!r)&&Object(j.jsx)("div",{className:"spinner-border text-info loading",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.cb2f808b.chunk.js.map