(this.webpackJsonptsfrontend=this.webpackJsonptsfrontend||[]).push([[0],{25:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),a=t(15),s=t.n(a),r=(t(25),t(17)),i=t(49),d=t(53),l=t(55),j=t(52),h=t(56),u=t(3),b=Object(i.a)({root:{minWidth:275,backgroundColor:"gainsboro"},alive:{display:"inline-block",margin:"0 2px",transform:"scale(4)",color:"green"},dead:{display:"inline-block",margin:"0 2px",transform:"scale(4)",color:"red"},title:{fontSize:14},pos:{marginBottom:12},nested:{paddingLeft:40}});function p(e){var n=e.key,t=e.m,c=b();return Object(u.jsx)(l.a,{className:c.root,children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(h.a,{className:c.title,color:"textSecondary",gutterBottom:!0,children:t.Uptime}),Object(u.jsxs)(h.a,{variant:"h5",component:"h2",children:[Object(u.jsx)("span",{className:"1"===t.On?c.alive:c.dead,children:"\u2022"})," ",t.Hostname]}),Object(u.jsxs)(h.a,{className:c.pos,color:"textSecondary",children:[t.IP," -- ",t.OS]})]})},n)}var O=Object(i.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}}));function m(e){var n=e.inv,t=e.key,c=O();return 0===n.length?Object(u.jsx)("h2",{children:"No machines added yet!"}):Object(u.jsx)(d.a,{container:!0,className:c.root,spacing:2,children:Object(u.jsx)(d.a,{item:!0,xs:12,children:Object(u.jsx)(d.a,{container:!0,justify:"center",spacing:3,children:n.map((function(e){return Object(u.jsx)(d.a,{item:!0,children:Object(u.jsx)(p,{m:e},e.Ident)},e.Ident)}))})})},t)}t(31);var f=new WebSocket("ws://localhost:8080/ws");function g(){var e=o.a.useState([{Uptime:"Uptime",Hostname:"Hostname",IP:"IP",OS:"OS",On:"1",Ident:"id"}]),n=Object(r.a)(e,2),t=n[0],c=n[1];o.a.useEffect((function(){c((function(){return Object.values({})}))}),[]);return f.addEventListener("message",(function(e){console.log("Received: ".concat(e.data));var n,t=JSON.parse(e.data);switch(t.OP){case"PING":f.send(JSON.stringify({type:"PONG"}));break;case"CURR_MACHINES":c((function(){return Object.values(t.Data)}));break;case"UPDATE_MACHINE":n=t.Data,c((function(e){void 0===e&&(e=[]);for(var t=0;t<e.length;t++)if(e[t].Ident===n.Ident)return e[t]=n,e;return e.push(n),console.log("Adding to array"),console.log(e),e}))}})),console.log("HI"),console.log(t),console.log("IH"),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:"LAN-1"}),Object(u.jsx)(m,{inv:t},"MGrid")]})})}f.addEventListener("open",(function(e){console.log("WS connected!")})),f.addEventListener("close",(function(){console.log("Websocket connection closed, refreshing page.")})),s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.88731280.chunk.js.map