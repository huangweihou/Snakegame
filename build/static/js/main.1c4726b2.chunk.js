(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{4:function(t,e,n){t.exports=n(9)},9:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(3),u=n.n(a),o=n(1);var i=[800,800],f=[[8,7]],l=[8,3],s={38:[0,-1],40:[0,1],37:[-1,0],39:[1,0]},b=function(){var t=Object(r.useRef)(),e=Object(r.useState)(f),n=Object(o.a)(e,2),a=n[0],u=n[1],b=Object(r.useState)(l),v=Object(o.a)(b,2),O=v[0],d=v[1],j=Object(r.useState)([0,-1]),h=Object(o.a)(j,2),m=h[0],p=h[1],y=Object(r.useState)(null),E=Object(o.a)(y,2),S=E[0],w=E[1],g=Object(r.useState)(!1),k=Object(o.a)(g,2),x=k[0],R=k[1];!function(t,e){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=t}),[t]),Object(r.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])}((function(){return C()}),S);var I=function(){return O.map((function(t,e){return Math.floor(Math.random()*(i[e]/50))}))},J=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=!0,r=!1,c=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done);n=!0){var i=u.value;if(t[0]===i[0]&&t[1]===i[1])return!0}}catch(f){r=!0,c=f}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return!1},C=function(){var t=JSON.parse(JSON.stringify(a)),e=function(t){return 50*t[0]>=i[0]&&(t[0]=0),50*t[1]>=i[1]&&(t[1]=0),t[0]<0&&(t[0]=i[0]/50),t[1]<0&&(t[1]=i[1]/50),t}([t[0][0]+m[0],t[0][1]+m[1]]);t.unshift(e),J(e)&&(w(null),R(!0)),function(t){if(t[0][0]===O[0]&&t[0][1]===O[1]){for(var e=I();J(e,t);)e=I();return d(e),!0}return!1}(t)||t.pop(),u(t)};return Object(r.useEffect)((function(){var e=t.current.getContext("2d");e.setTransform(50,0,0,50,0,0),e.clearRect(0,0,window.innerWidth,window.innerHeight),e.fillStyle="green",a.forEach((function(t){var n=Object(o.a)(t,2),r=n[0],c=n[1];return e.fillRect(r,c,1,1)})),e.fillStyle="crimson",e.fillRect(O[0],O[1],1,1)}),[a,O,x]),c.a.createElement("div",{role:"button",tabIndex:"0",onKeyDown:function(t){return function(t){var e=t.keyCode;0===m[0]&&-1===m[1]&&40===e||0===m[0]&&1===m[1]&&38===e||1===m[0]&&0===m[1]&&37===e||-1===m[0]&&0===m[1]&&39===e||e>=37&&e<=40&&p(s[e])}(t)}},c.a.createElement("canvas",{style:{border:"1px solid black"},ref:t,width:"".concat(i[0],"px"),height:"".concat(i[1],"px")}),x&&c.a.createElement("div",null,"GAME OVER!"),c.a.createElement("button",{onClick:function(){u(f),d(l),p([0,-1]),w(100),R(!1)}},"Start Game"))};u.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.1c4726b2.chunk.js.map