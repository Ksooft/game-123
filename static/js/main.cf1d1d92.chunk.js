(this["webpackJsonpgame-123"]=this["webpackJsonpgame-123"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(4),s=c.n(n),l=(c(9),c(2)),o=c(0),i=function(e){var t=e.score,c=e.isStarted,a=localStorage.getItem("maxScore")&&localStorage.getItem("maxScore");return Object(o.jsx)("nav",{className:"navbar navbar-light bg-dark",style:{height:"50px"},children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand text-white",href:"https://github.com/Ksooft",rel:"noopener noreferrer",children:"Github"}),Object(o.jsx)("span",{className:"navbar-brand mb-0 h1 text-white",children:c?t:"1+2=3"}),Object(o.jsxs)("span",{className:"navbar-brand mb-0 fs-5 text-white record",children:["\u0420\u0435\u043a\u043e\u0440\u0434: ",a]})]})})},u=c.p+"static/media/calculate.e55fc469.png",d=function(e){var t=e.num,c=e.handleAnswer;return Object(o.jsxs)("div",{className:"answer",onClick:function(){return c(t)},children:[Object(o.jsx)("div",{className:"answer-bar",children:t}),Object(o.jsx)("div",{className:"answer-text text-white",children:t})]})},m=function(e){var t=e.btnStart;return Object(o.jsx)("button",{type:"button",className:"btn btn-success btn-lg",onClick:t,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443!"})},h=function(e){var t=e.isStarted,c=e.btnStart;return Object(o.jsx)("div",{className:"start-game ".concat(!t&&"open"),children:Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)("div",{className:"h1 text-white pb-5",children:"\u0414\u0443\u043c\u0430\u0435\u0448\u044c \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e?"}),Object(o.jsx)(m,{btnStart:c})]})})};var b=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!1),s=Object(l.a)(n,2),m=s[0],b=s[1],j=Object(a.useState)("3-1=?"),g=Object(l.a)(j,2),x=g[0],f=g[1],S=Object(a.useState)(null),v=Object(l.a)(S,2),O=v[0],w=v[1],p=Object(a.useState)(0),y=Object(l.a)(p,2),I=y[0],N=y[1],q=Object(a.useRef)(),L=Object(a.useRef)(),A=Object(a.useRef)(),k=function(e){e!==O||m?e===O||m||C():(b(!0),E(),R(),f(x.replace("?",O)),document.querySelector(".header-game img").classList.add("es"),document.querySelector(".header-game span").classList.add("right"),setTimeout((function(){A.current=Date.now(),document.querySelector(".header-game img").classList.remove("es"),document.querySelector(".header-game span").classList.remove("right");var e=F(),t=e.slice(0,e.length-2),c=x.slice(0,x.length-2);if(t===c||t.split("").reverse().join("")===c){for(;e===x;)e=F();f(e)}else f(e);document.querySelectorAll(".answer-bar").forEach((function(e){e.classList.add("animate")}));var a=setInterval((function(){Date.now()-A.current>=4200&&(console.log("\u043d\u0435 \u0443\u0441\u043f\u0435\u043b"),C())}),1);q.current=a;var r=setInterval((function(){var e=window.getComputedStyle(document.querySelector(".answer-block")).width,t=parseInt(e.match(/\d+/)).toFixed(),c=window.getComputedStyle(document.querySelector(".answer-bar")).width;(100*parseInt(c.match(/\d+/))/t).toFixed()<=50&&document.querySelectorAll(".answer-text").forEach((function(e){e.classList.add("half")}))}),10);L.current=r,b(!1)}),1600))},E=function(){if(I<35){var e=M(4,6);localStorage.getItem("maxScore")?localStorage.getItem("maxScore")&&I+e>localStorage.getItem("maxScore")&&localStorage.setItem("maxScore",I+e):localStorage.setItem("maxScore",I+e),N(I+e)}else if(I>35){var t=M(6,10);localStorage.getItem("maxScore")?localStorage.getItem("maxScore")&&I+t>localStorage.getItem("maxScore")&&localStorage.setItem("maxScore",I+t):localStorage.setItem("maxScore",I+t),N(I+t)}},C=function(){b(!0),document.querySelector(".header-game img").classList.add("wrong"),clearInterval(q.current),clearInterval(L.current),setTimeout((function(){document.querySelector(".header-game img").classList.remove("wrong"),document.querySelectorAll(".answer-text").forEach((function(e){e.classList.remove("half")})),document.querySelectorAll(".answer-bar").forEach((function(e){e.classList.remove("animate")})),r(!1),N(0),console.log("\u0438\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u0430")}),1500)},F=function(){var e=null,t=null,c=null,a=null,r=null,n="",s="";if(I<31){for(;-1===[1,2,3].indexOf(e);)t=M(1,3),c=M(1,3),"+"===(n=1===M(1,2)?"+":"-")?e=t+c:"-"===n&&(e=t-c);return w(e),"".concat(t).concat(n).concat(c,"=?")}if(I>31){for(;-1===[1,2,3].indexOf(e);)t=M(1,3),c=M(1,3),a=M(1,3),r=M(1,3),n=1===M(1,2)?"+":"-",s=1===M(1,2)?"+":"-","+"===n?"+"===s?e=t-c+a-r:"-"===s&&(e=t-c-a+r):"-"===n&&("+"===s?e=-t+c-a+r:"-"===s&&(e=-t+c+a-r));return w(e),"".concat("-"===n?"-":"").concat(t).concat("+"===n?"-":"+").concat(c).concat("+"===n&&"+"===s?"+":"+"===n&&"-"===s||"-"===n&&"+"===s?"-":"-"===n&&"-"===s&&"+").concat(a).concat("+"===n&&"+"===s?"-":"+"===n&&"-"===s||"-"===n&&"+"===s?"+":"-"===n&&"-"===s&&"-").concat(r,"=?")}},M=function(e,t){var c=e-.5+Math.random()*(t-e+1);return Math.round(c)},R=function(){q.current&&(clearInterval(q.current),document.querySelectorAll(".answer-bar").forEach((function(e){e.classList.remove("animate")}))),L.current&&(clearInterval(L.current),document.querySelectorAll(".answer-text").forEach((function(e){e.classList.remove("half")})))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{score:I,isStarted:c}),Object(o.jsx)("div",{className:"w-100 bg-info d-flex justify-content-center align-items-center",style:{height:"calc(100vh - 50px)",userSelect:"none"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"header-game text-center",children:[Object(o.jsx)("img",{src:u,alt:"calculate",style:{width:"20vw"},draggable:"false"}),Object(o.jsxs)("div",{className:"text-white",style:{fontSize:"5.5vw ",fontWeight:500},children:[x.slice(0,x.length-1),Object(o.jsx)("span",{children:x[x.length-1]})]})]}),Object(o.jsxs)("div",{className:"answer-block",style:{maxWidth:"450px",margin:"0 auto"},children:[Object(o.jsx)(d,{num:1,handleAnswer:k}),Object(o.jsx)(d,{num:2,handleAnswer:k}),Object(o.jsx)(d,{num:3,handleAnswer:k})]})]})}),Object(o.jsx)(h,{isStarted:c,btnStart:function(){r(!0),b(!1),console.log("\u0438\u0433\u0440\u0430 \u043d\u0430\u0447\u0430\u043b\u0430\u0441\u044c"),N(0),f(F())}})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.cf1d1d92.chunk.js.map