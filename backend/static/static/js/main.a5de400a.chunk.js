(this.webpackJsonptsfrontend=this.webpackJsonptsfrontend||[]).push([[0],{25:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),a=t(15),s=t.n(a),r=(t(25),t(17)),i=t(49),d=t(53),l=t(55),j=t(52),h=t(56),p=t(3),b=Object(i.a)({root:{minWidth:275,backgroundColor:"gainsboro"},alive:{display:"inline-block",margin:"0 2px",transform:"scale(4)",color:"green"},dead:{display:"inline-block",margin:"0 2px",transform:"scale(4)",color:"red"},title:{fontSize:14},pos:{marginBottom:12},nested:{paddingLeft:40}});function m(e){var n=e.key,t=e.m,o=b();return console.log(t),Object(p.jsx)(l.a,{className:o.root,children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(h.a,{className:o.title,color:"textSecondary",gutterBottom:!0,children:t.Uptime}),Object(p.jsxs)(h.a,{variant:"h5",component:"h2",children:[Object(p.jsx)("span",{className:"1"===t.On?o.alive:o.dead,children:"\u2022"})," ",t.Hostname]}),Object(p.jsxs)(h.a,{className:o.pos,color:"textSecondary",children:[t.IP," -- ",t.OS]})]})},n)}var u=Object(i.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}}));function O(e){var n=e.inv,t=e.key,o=u();return console.log(n),Object(p.jsx)(d.a,{container:!0,className:o.root,spacing:2,children:Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{container:!0,justify:"center",spacing:3,children:n.map((function(e){return Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(m,{m:e},e.Ident)},e.Ident)}))})})},t)}t(31);var g=new WebSocket("ws://172.26.47.79:8080/ws");function f(){var e=c.a.useState([{Uptime:"Uptime",Hostname:"Hostname",IP:"IP",OS:"OS",On:"1",Ident:"id"}]),n=Object(r.a)(e,2),t=n[0],o=n[1];return g.addEventListener("open",(function(e){console.log("WS connected!")})),g.addEventListener("message",(function(e){console.log("Received: ".concat(e.data));var n,t=JSON.parse(e.data);switch(t.OP){case"PING":g.send(JSON.stringify({type:"PONG"}));break;case"CURR_MACHINES":o((function(){return Object.values(t.Data)}));break;case"UPDATE_MACHINE":n=t.Data,o((function(e){void 0===e&&(e=[]);for(var t=0;t<e.length;t++)if(e[t].Ident===n.Ident)return e[t]=n,e;return e.push(n),console.log(e),e}))}})),console.log("HI"),console.log(t),console.log("IH"),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"LAN-1"}),void 0===t||0===t.length?Object(p.jsx)("h2",{children:"No machines added yet!"}):Object(p.jsx)(O,{inv:t},"MGrid")]})})}g.addEventListener("open",(function(e){console.log("WS connected!")})),g.addEventListener("close",(function(){console.log("Websocket connection closed, refreshing page.")})),s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a5de400a.chunk.js.map