(this.webpackJsonptsfrontend=this.webpackJsonptsfrontend||[]).push([[0],{48:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(8),s=t.n(r),o=(t(48),t(25)),i=t(79),d=t(85),l=t(58),j=t(81),b=t(82),p=t(28),O=t(83),m=t(86),h=t(84),x=t(87),u=t(37),v=t.n(u),f=t(38),g=t.n(f),y=t(3),N=Object(i.a)({root:{minWidth:275,backgroundColor:"gainsboro"},alive:{display:"inline-block",margin:"0 2px",transform:"scale(4)",color:"green"},dead:{display:"inline-block",margin:"0 2px",transform:"scale(4)",color:"red"},title:{fontSize:14},pos:{marginBottom:12},nested:{paddingLeft:40}});function S(e){var n=e.m,t=N(),c=n.IP.slice(0,n.IP.length-5)+"XXXXX",r=a.a.useState(!1),s=Object(o.a)(r,2),i=s[0],d=s[1];return Object(y.jsx)(j.a,{className:t.root,children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(p.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:n.Uptime}),Object(y.jsxs)(p.a,{variant:"h5",component:"h2",children:[Object(y.jsx)("span",{className:"1"===n.On?t.alive:t.dead,children:"\u2022"})," ",n.Hostname]}),Object(y.jsxs)(p.a,{className:t.pos,color:"textSecondary",children:[c," -- ",n.OS]}),Object(y.jsx)(p.a,{variant:"body2",component:"p",children:Object(y.jsxs)(O.a,{component:"nav","aria-labelledby":"nested-list-subheader",children:[Object(y.jsxs)(m.a,{button:!0,onClick:function(){d(!i)},children:[Object(y.jsx)(h.a,{primary:"Active Connections"}),i?Object(y.jsx)(v.a,{}):Object(y.jsx)(g.a,{})]}),Object(y.jsx)(x.a,{in:i,timeout:"auto",unmountOnExit:!0,children:void 0===n.Services||null===n.Services?Object(y.jsx)("b",{children:"No connections reported yet"}):[n.Services.map((function(e,n){return Object(y.jsxs)(O.a,{component:"div",disablePadding:!0,children:[Object(y.jsx)(h.a,{primary:n+1,secondary:"Connection#"}),Object(y.jsx)(m.a,{className:t.nested,children:Object(y.jsx)(h.a,{primary:e.LocalAddr,secondary:"LocalAddr"})}),Object(y.jsx)(m.a,{className:t.nested,children:Object(y.jsx)(h.a,{primary:e.ForAddr,secondary:"ForAddr"})}),Object(y.jsx)(m.a,{className:t.nested,children:Object(y.jsx)(h.a,{primary:e.ProgName,secondary:"ProgName"})}),Object(y.jsx)(m.a,{className:t.nested,children:Object(y.jsx)(h.a,{primary:e.ConnType,secondary:"ConnType"})})]})}))]})]})})]})})}var A=Object(i.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}}));function w(e){var n=e.invP,t=(e.invS,A());return Object(y.jsx)(l.a,{elevation:3,variant:"outlined",children:Object(y.jsx)(d.a,{container:!0,className:t.root,spacing:2,children:Object(y.jsx)(d.a,{item:!0,xs:12,children:Object(y.jsx)(d.a,{container:!0,justify:"center",spacing:3,children:Array.from(n).map((function(e){return Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(S,{m:e[1]},"Machine_"+e[0])},"Grid_"+e[0])}))})})})})}t(55);function P(){var e=a.a.useState(new Map),n=Object(o.a)(e,2),t=n[0],c=n[1];return a.a.useEffect((function(){var e=new WebSocket("ws://localhost:8080/ws");e.addEventListener("open",(function(e){console.log("WS connected!")})),e.addEventListener("close",(function(){console.log("Websocket connection closed, refreshing page.")})),e.addEventListener("open",(function(e){console.log("WS connected!")})),e.addEventListener("message",(function(n){console.log("Received: ".concat(n.data));var t=JSON.parse(n.data);switch(t.OP){case"PING":e.send(JSON.stringify({type:"PONG"}));break;case"CURR_MACHINES":c((function(){return new Map(Object.entries(t.Data))}));break;case"UPDATE_MACHINE":c((function(e){var n=t.Data;return e.set(n.Ident,n),new Map(e)}))}}))}),[]),Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)("h1",{children:"LAN-1"}),Object(y.jsx)(w,{invP:t,invS:t},"MGrid")]})})}s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.fe4d8052.chunk.js.map