(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/Homepage_icon.83a69d24.png"},19:function(e,t,a){e.exports=a.p+"static/media/smart-home-logo.7365bc17.png"},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),c=(a(25),a(4)),m=a(7),i=(a(26),a(6));function u(e){var t=Object(n.useState)("inline"),a=Object(i.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)("none"),m=Object(i.a)(c,2),u=m[0],s=m[1];return o.a.createElement("div",{className:"Room"},o.a.createElement("div",{className:"info",style:{display:l}},o.a.createElement("h3",null,"Room Type:"),o.a.createElement("h3",null,"Room Name:"),o.a.createElement("button",{onClick:function(){r("none"),s("inline")}},"Add Device")),o.a.createElement("div",{className:"devices",style:{display:u}},o.a.createElement("select",{name:"choose-product",id:"choose-product"},o.a.createElement("option",{hidden:!0,disabled:!0,value:!0},"Choose a Device"),o.a.createElement("option",{value:"Air-Conditioner"},"Air-Conditioner"),o.a.createElement("option",{value:"Boiler"},"Boiler"),o.a.createElement("option",{value:"Stereo"},"Stereo"),o.a.createElement("option",{value:"Lights"},"Lights")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){r("inline"),s("none")}},"add")))}function s(e){var t=Object(n.useState)("#4ec3f1"),a=Object(i.a)(t,2),l=a[0],r=a[1],m=Object(n.useState)("none"),u=Object(i.a)(m,2),s=u[0],d=u[1],E=Object(n.useState)(!1),p=Object(i.a)(E,2),b=(p[0],p[1]),h=Object(n.useState)(""),v=Object(i.a)(h,2),g=(v[0],v[1]),f=Object(n.useState)(""),j=Object(i.a)(f,2),y=(j[0],j[1]);return o.a.createElement("div",{className:"Addroom"},o.a.createElement("select",{name:"Choose a room",id:"rooms",onChange:function(e){y(e.target.value)}},o.a.createElement("option",{hidden:!0,disabled:!0,selected:!0,value:!0},"Choose a room "),o.a.createElement("option",{value:"bedroom"},"Bedroom"),o.a.createElement("option",{value:"bathroom"},"Bathroom"),o.a.createElement("option",{value:"kitchen"},"Kitchen")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{onChange:function(e){e.target.value.length<=5?(r("lightgreen"),b(!0)):(r("red"),d("inline"),b(!1))},id:"room-name",placeholder:"Room Name",style:{background:l}}),o.a.createElement("br",null),o.a.createElement("p",{id:"err",style:{display:s,color:"red"}},"Room Name Must contain 5 or less characters"),o.a.createElement("br",null),o.a.createElement("label",{forhtml:"room-color"},"Select Room Color: "),o.a.createElement("br",null),o.a.createElement("input",{id:"room-color",placeholder:"Room Color",type:"color",onChange:function(e){g(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(c.b,{id:"link",to:"/"},o.a.createElement("button",{id:"create"},"Create")))}var d=a(18),E=a.n(d);function p(e){return o.a.createElement("div",{className:"Homepage"},o.a.createElement("div",{className:"homepage-layout"},o.a.createElement(c.b,{to:"/room"},o.a.createElement("button",{style:{display:"none"}}))),o.a.createElement(c.b,{to:"/addroom"},o.a.createElement("button",{id:"plus-button"},o.a.createElement("img",{id:"plus-button-img",src:E.a,alt:"+"}))))}var b=a(19),h=a.n(b);function v(e){return o.a.createElement("div",{className:"Header"},o.a.createElement(c.b,{id:"link",to:"/"},o.a.createElement("img",{id:"logo",src:h.a,alt:"logo"})),o.a.createElement(c.b,{to:"/room"},"room"))}var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(v,null),o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:function(){return o.a.createElement(p,null)}}),o.a.createElement(m.a,{exact:!0,path:"/room",component:function(){return o.a.createElement(u,null)}}),o.a.createElement(m.a,{exact:!0,path:"/addroom",component:function(){return o.a.createElement(s,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.fca47093.chunk.js.map