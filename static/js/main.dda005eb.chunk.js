(this["webpackJsonpgame-123"]=this["webpackJsonpgame-123"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),o=c(4),r=c.n(o),s=(c(9),c(2)),l=c(0),i=function(e){var t=e.score,c=e.isStarted,a=localStorage.getItem("maxScore")&&localStorage.getItem("maxScore");return Object(l.jsx)("nav",{className:"navbar navbar-light bg-dark",style:{height:"50px"},children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand text-white",href:"https://github.com/Ksooft",rel:"noopener noreferrer",children:"Github"}),Object(l.jsx)("span",{className:"navbar-brand mb-0 h1 text-white",children:c?t:"1+2=3"}),Object(l.jsxs)("span",{className:"navbar-brand mb-0 fs-5 text-white record",children:["Record: ",a]})]})})},u=c.p+"static/media/calculate.e55fc469.png",m=function(e){var t=e.num,c=e.handleAnswer;return Object(l.jsxs)("div",{className:"answer",onClick:function(){return c(t)},children:[Object(l.jsx)("div",{className:"answer-bar",children:t}),Object(l.jsx)("div",{className:"answer-text text-white",children:t})]})},d=function(e){var t=e.btnStart;return Object(l.jsx)("button",{type:"button",className:"btn btn-success btn-lg",onClick:t,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443!"})},h=function(e){var t=e.isStarted,c=e.btnStart;return Object(l.jsx)("div",{className:"start-game ".concat(!t&&"open"),children:Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsx)("div",{className:"h1 text-white pb-5",children:"\u0414\u0443\u043c\u0430\u0435\u0448\u044c \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e?"}),Object(l.jsx)(d,{btnStart:c})]})})};var b=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(!1),r=Object(s.a)(o,2),d=r[0],b=r[1],j=Object(a.useState)("3-1=?"),g=Object(s.a)(j,2),S=g[0],f=g[1],x=Object(a.useState)("3-1=?"),v=Object(s.a)(x,2),w=v[0],O=v[1],p=Object(a.useState)(null),y=Object(s.a)(p,2),I=y[0],q=y[1],N=Object(a.useState)(0),A=Object(s.a)(N,2),L=A[0],E=A[1],k=Object(a.useRef)(),C=Object(a.useRef)(),T=Object(a.useRef)(),R=function(e){e!==I||d?e===I||d||M():(b(!0),F(),P(),f(S.replace("?",I)),document.querySelector(".header-game img").classList.add("es"),document.querySelector(".header-game span").classList.add("right"),setTimeout((function(){f(S.replace(I,"?")),document.querySelector(".header-example").classList.add("swipe")}),500),setTimeout((function(){document.querySelectorAll(".answer-bar").forEach((function(e){e.style.removeProperty("width")})),C.current&&(clearInterval(C.current),document.querySelectorAll(".answer-text").forEach((function(e){e.classList.remove("half")}))),document.querySelector(".header-game img").classList.remove("es"),document.querySelector(".header-game span").classList.remove("right"),setTimeout((function(){var e=D(),t=e.slice(0,e.length-2),c=w.slice(0,S.length-2);if(console.log("1",t,c,t===c),console.log("2",t.split("").reverse().join(""),c,t.split("").reverse().join("")===c),t===c||t.split("").reverse().join("")===c){for(var a=t.split("").reverse().join("");-1===[t,a].indexOf(c);)e=D();f(e),O(e)}else f(e),O(e);setTimeout((function(){document.querySelector(".header-example").classList.remove("swipe"),T.current=Date.now(),document.querySelectorAll(".answer-bar").forEach((function(e){e.classList.add("animate")}));var e=setInterval((function(){Date.now()-T.current>=3600&&(console.log("\u043d\u0435 \u0443\u0441\u043f\u0435\u043b"),M())}),1);k.current=e;var t=setInterval((function(){var e=window.getComputedStyle(document.querySelector(".answer-block")).width,t=parseInt(e.match(/\d+/)).toFixed(),c=window.getComputedStyle(document.querySelector(".answer-bar")).width;(100*parseInt(c.match(/\d+/))/t).toFixed()<=50&&document.querySelectorAll(".answer-text").forEach((function(e){e.classList.add("half")}))}),1);C.current=t,b(!1)}),300)}),300)}),800))},F=function(){if(L<=22){var e=J(3,5);localStorage.getItem("maxScore")?localStorage.getItem("maxScore")&&L+e>localStorage.getItem("maxScore")&&localStorage.setItem("maxScore",L+e):localStorage.setItem("maxScore",L+e),E(L+e)}else if(L>22){var t=J(5,8);localStorage.getItem("maxScore")?localStorage.getItem("maxScore")&&L+t>localStorage.getItem("maxScore")&&localStorage.setItem("maxScore",L+t):localStorage.setItem("maxScore",L+t),E(L+t)}else if(L>=55){var c=J(8,11);localStorage.getItem("maxScore")?localStorage.getItem("maxScore")&&L+c>localStorage.getItem("maxScore")&&localStorage.setItem("maxScore",L+c):localStorage.setItem("maxScore",L+c)}},M=function(){var e=window.getComputedStyle(document.querySelector(".answer-bar")).width;b(!0),document.querySelector(".header-game img").classList.add("wrong"),clearInterval(k.current),document.querySelectorAll(".answer-bar").forEach((function(t){t.classList.remove("animate"),t.style.width=e})),setTimeout((function(){clearInterval(C.current),document.querySelectorAll(".answer-bar").forEach((function(e){e.style.removeProperty("width")})),document.querySelector(".header-game img").classList.remove("wrong"),document.querySelectorAll(".answer-text").forEach((function(e){e.classList.remove("half")})),setTimeout((function(){n(!1),E(0),console.log("\u0438\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u0430")}),200)}),1500)},D=function(){var e=null,t=null,c=null,a=null,n=null,o="",r="",s="",l="",i="";if(L<=22){for(;-1===[1,2,3].indexOf(e);)t=J(1,3),c=J(1,3),o=1===J(1,2)?"+":"-",r=1===J(1,2)?"+":"-","+"===o?"+"===r?(e=t+c,i="".concat(t,"+").concat(c,"=?")):"-"===r&&(e=t-c,i="".concat(t,"-").concat(c,"=?")):"-"===o&&("+"===r?(e=-t+c,i="-".concat(t,"+").concat(c,"=?")):"-"===r&&(e=-t-c,i="-".concat(t,"-").concat(c,"=?")));q(e)}else if(L>22){for(;-1===[1,2,3].indexOf(e);)t=J(1,3),c=J(1,3),a=J(1,3),o=1===J(1,2)?"+":"-",r=1===J(1,2)?"+":"-",s=1===J(1,2)?"+":"-","+"===o?"+"===r?"+"===s?(e=t+c+a,i="".concat(t,"+").concat(c,"+").concat(a,"=?")):"-"===s&&(e=t+c-a,i="".concat(t,"+").concat(c,"-").concat(a,"=?")):"-"===r&&("+"===s?(e=t-c+a,i="".concat(t,"-").concat(c,"+").concat(a,"=?")):"-"===s&&(e=t-c-a,i="".concat(t,"-").concat(c,"-").concat(a,"=?"))):"-"===o&&("+"===r?"+"===s?(e=-t+c+a,i="-".concat(t,"+").concat(c,"+").concat(a,"=?")):"-"===s&&(e=-t+c-a,i="-".concat(t,"+").concat(c,"-").concat(a,"=?")):"-"===r&&("+"===s?(e=-t-c+a,i="-".concat(t,"-").concat(c,"+").concat(a,"=?")):"-"===s&&(e=-t-c-a,i="-".concat(t,"-").concat(c,"-").concat(a,"=?"))));q(e)}else if(L>=55)for(;-1===[1,2,3].indexOf(e);)t=J(1,3),c=J(1,3),a=J(1,3),n=J(1,3),o=1===J(1,2)?"+":"-",r=1===J(1,2)?"+":"-",s=1===J(1,2)?"+":"-",l=1===J(1,2)?"+":"-","+"===o?"+"===r?"+"===s?"+"===l?(e=t+c+a+n,i="".concat(t,"+").concat(c,"+").concat(a,"+").concat(n,"=?")):"-"===l&&(e=t+c+a-n,i="".concat(t,"+").concat(c,"+").concat(a,"-").concat(n,"=?")):"-"===s&&("+"===l?(e=t+c-a+n,i="".concat(t,"+").concat(c,"-").concat(a,"+").concat(n,"=?")):"-"===l&&(e=t+c-a-n,i="".concat(t,"+").concat(c,"-").concat(a,"-").concat(n,"=?"))):"-"===r&&("+"===s?"+"===l?(e=t-c+a+n,i="".concat(t,"-").concat(c,"+").concat(a,"+").concat(n,"=?")):"-"===l&&(e=t-c+a-n,i="".concat(t,"-").concat(c,"+").concat(a,"-").concat(n,"=?")):"-"===s&&("+"===l?(e=t-c-a+n,i="".concat(t,"-").concat(c,"-").concat(a,"+").concat(n,"=?")):"-"===l&&(e=t-c-a-n,i="".concat(t,"-").concat(c,"-").concat(a,"-").concat(n,"=?")))):"-"===o&&("+"===r?"+"===s?"+"===l?(e=-t+c+a+n,i="-".concat(t,"+").concat(c,"+").concat(a,"+").concat(n,"=?")):"-"===l&&(e=-t+c+a-n,i="-".concat(t,"+").concat(c,"+").concat(a,"-").concat(n,"=?")):"-"===s&&("+"===l?(e=-t+c-a+n,i="-".concat(t,"+").concat(c,"-").concat(a,"+").concat(n,"=?")):"-"===l&&(e=-t+c-a-n,i="-".concat(t,"+").concat(c,"-").concat(a,"-").concat(n,"=?"))):"-"===r&&("+"===s?"+"===l?(e=-t-c+a+n,i="-".concat(t,"-").concat(c,"+").concat(a,"+").concat(n,"=?")):"-"===l&&(e=-t-c+a-n,i="-".concat(t,"-").concat(c,"+").concat(a,"-").concat(n,"=?")):"-"===s&&("+"===l?(e=-t-c-a+n,i="-".concat(t,"-").concat(c,"-").concat(a,"+").concat(n,"=?")):"-"===l&&(e=-t-c-a-n,i="-".concat(t,"-").concat(c,"-").concat(a,"-").concat(n,"=?")))));return i},J=function(e,t){var c=e-.5+Math.random()*(t-e+1);return Math.round(c)},P=function(){var e=window.getComputedStyle(document.querySelector(".answer-bar")).width;k.current&&(clearInterval(k.current),document.querySelectorAll(".answer-bar").forEach((function(t){t.style.width=e})),document.querySelectorAll(".answer-bar").forEach((function(e){e.classList.remove("animate")})))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{score:L,isStarted:c}),Object(l.jsx)("div",{className:"w-100 bg-info d-flex justify-content-center align-items-center",style:{height:"calc(100vh - 50px)",userSelect:"none"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"header-game text-center",children:[Object(l.jsx)("img",{src:u,alt:"calculate",style:{width:"20vw"},draggable:"false"}),Object(l.jsxs)("div",{className:"text-white header-example",children:[S.slice(0,S.length-1),Object(l.jsx)("span",{children:S[S.length-1]})]})]}),Object(l.jsxs)("div",{className:"answer-block",style:{maxWidth:"450px",margin:"0 auto"},children:[Object(l.jsx)(m,{num:1,handleAnswer:R}),Object(l.jsx)(m,{num:2,handleAnswer:R}),Object(l.jsx)(m,{num:3,handleAnswer:R})]})]})}),Object(l.jsx)(h,{isStarted:c,btnStart:function(){n(!0),b(!1),console.log("\u0438\u0433\u0440\u0430 \u043d\u0430\u0447\u0430\u043b\u0430\u0441\u044c");var e=D();f(e),O(e)}})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.dda005eb.chunk.js.map