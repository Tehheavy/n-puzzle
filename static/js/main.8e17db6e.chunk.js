(this["webpackJsonpn-puzzle"]=this["webpackJsonpn-puzzle"]||[]).push([[0],[,,,,,,,function(e,t,i){e.exports=i(15)},,,,,function(e,t,i){},function(e,t,i){e.exports=i.p+"static/media/logo.5d5d9eef.svg"},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var o=i(0),r=i.n(o),n=i(5),a=i.n(n),s=(i(12),i(6),i(1));var p=function(e){var t=Object(o.useState)(e.value),i=Object(s.a)(t,2);return i[0],i[1],r.a.createElement("div",{style:{height:"33%",width:"33%",overflow:"hidden",position:"absolute",transition:"all 0.3s",right:100/3*(2-e.j)+"%",top:100/3*e.i+"%",borderRadius:"10px"},onClick:function(t){console.log("clicked on ",e.value)},id:e.id},e.img)};var c=function(e){var t=Object(o.useState)([]),i=Object(s.a)(t,2),n=i[0],a=i[1],c=Object(o.useState)(8),l=Object(s.a)(c,2),g=l[0],m=(l[1],Object(o.useState)(!0)),u=Object(s.a)(m,2),d=u[0],h=u[1],v=Object(o.useState)([]),j=Object(s.a)(v,2),f=(j[0],j[1],function(e){e.path[1].id&&(console.log("CLICKEDD LISTENRE",e.path[1].id),E(e.path[1].id,g)),console.log("board1",n)}),E=function(e,t){if(e!=t){var i=n[e].props.i,o=n[e].props.j,s=n[t].props.i,c=n[t].props.j;if(console.log("index1:(",i,o,") pos:(",s,c,")"),o==c-1&&s==i){var l=n[e].props.img;console.log("img is",l);var g=r.a.createElement(p,{id:e,key:e,img:l,value:e,i:n[t].props.i,j:n[t].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),m=n[t].props.img,u=r.a.createElement(p,{id:t,key:t,img:m,value:t,i:n[e].props.i,j:n[e].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),v=n;v[e]=g,v[t]=u,a((function(e){return v})),h(!d)}if(o==c+1&&s==i){var j=n[e].props.img;console.log("img is",j);var f=r.a.createElement(p,{id:e,key:e,img:j,value:e,i:n[t].props.i,j:n[t].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),E=n[t].props.img,b=r.a.createElement(p,{id:t,key:t,img:E,value:t,i:n[e].props.i,j:n[e].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),w=n;w[e]=f,w[t]=b,a((function(e){return w})),h(!d)}if(o==c&&s==i+1){var Y=n[e].props.img;console.log("img is",Y);var y=r.a.createElement(p,{id:e,key:e,img:Y,value:e,i:n[t].props.i,j:n[t].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),k=n[t].props.img,x=r.a.createElement(p,{id:t,key:t,img:k,value:t,i:n[e].props.i,j:n[e].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),L=n;L[e]=y,L[t]=x,a((function(e){return L})),h(!d)}if(o==c&&s==i-1){var O=n[e].props.img;console.log("img is",O);var W=r.a.createElement(p,{id:e,key:e,img:O,value:e,i:n[t].props.i,j:n[t].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),G=n[t].props.img,S=r.a.createElement(p,{id:t,key:t,img:G,value:t,i:n[e].props.i,j:n[e].props.j,image:"https://i.imgur.com/YLWsY4G.jpg"}),B=n;B[e]=W,B[t]=S,a((function(e){return B})),h(!d)}}};return Object(o.useEffect)((function(){console.log("rereender");var t=[],i=[],o=0;if(0===n.length){for(var s=0;s<3;s++)for(var c=0;c<3;c++){if(2!=s||2!=c){console.log("count is",o),console.log("i,j",s," ",c);var l=r.a.createElement("img",{style:{height:"300%",width:"300%",margin:"-"+100*s+"% 0px 0px -"+100*c+"%"},src:"https://i.imgur.com/YLWsY4G.jpg"});t.push(r.a.createElement(p,{id:o,img:l,key:o,value:o,i:s,j:c,image:"https://i.imgur.com/YLWsY4G.jpg"})),i.push({height:"33%",width:"33%",overflow:"hidden",position:"absolute",transition:"right 1s",right:100/3*(2-e.j)+"%",top:100/3*e.i+"%",borderRadius:"10px"})}else console.log("else",s,c),t.push(r.a.createElement(p,{id:o,key:o,value:o,i:s,j:c,image:""})),i.push({height:"33%",width:"33%",overflow:"hidden",position:"absolute",transition:"right 1s",right:100/3*(2-e.j)+"%",top:100/3*e.i+"%",borderRadius:"10px"});o++}a((function(e){return t})),console.log("board is ",t)}for(var g=0;g<9;g++)document.getElementById(g)?(console.log("exist"),document.getElementById(g).addEventListener("click",f)):console.log("doesnt exist");return function(){for(var e=0;e<9;e++)console.log("deleting"),document.getElementById(e)&&document.getElementById(e).removeEventListener("click",f)}}),[n,g,d]),r.a.createElement("div",{style:{height:"0",width:"40%",paddingBottom:"40%",position:"relative"}},n)};i(13),i(14);var l=function(){var e=Object(o.useState)([r.a.createElement("div",{style:{height:800/3+"px",width:800/3+"px",overflow:"hidden"}},r.a.createElement("img",{style:{},src:"https://i.imgur.com/YLWsY4G.jpg"}))]),t=Object(s.a)(e,2),i=(t[0],t[1],Object(o.useState)([{height:800/3+"px",width:800/3+"px",overflow:"hidden",position:"absolute",right:"0px",transition:"right 1s"},{height:800/3+"px",width:800/3+"px",overflow:"hidden",position:"absolute",right:800/3+"px",transition:"right 1s"}])),n=Object(s.a)(i,2);return n[0],n[1],r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(c,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.8e17db6e.chunk.js.map