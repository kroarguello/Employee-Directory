(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Mattew","lastname":"Oballe","department":"Kitchen","ocupation":"cook","location":"Austin"},{"id":2,"name":"Mark","lastname":"Aguilar","department":"Kitchen","ocupation":"cook","location":"Austin"},{"id":3,"name":"Caroline","lastname":"Miller","department":"Kitchen","ocupation":"chef","location":"Austin"},{"id":4,"name":"Ej","lastname":"Kenelly","department":"Human Resource","ocupation":"Manager","location":"Houston"},{"id":5,"name":"Sean","lastname":"Fleming","department":"Human Resource","ocupation":"Assistant Manager","location":"Austin"},{"id":6,"name":"Christian","lastname":"Scott","department":"Kitchen","ocupation":"chef","location":"Houston"},{"id":7,"name":"Mario","lastname":"Gutierrez","department":"Sales","ocupation":"Sales Manager","location":"Houston"},{"id":8,"name":"Austin","lastname":"Parmer","department":"Kitchen","ocupation":"cook","location":"Houston"},{"id":9,"name":"Eric","lastname":"Aguilar","department":"Sales","ocupation":"Sales Manager","location":"Austin"},{"id":10,"name":"Aidan","lastname":"Manning","department":"Kitchen","ocupation":"cook","location":"Houston"},{"id":11,"name":"Vicent","lastname":"Diaz","department":"Kitchen","ocupation":"cook","location":"Houston"},{"id":12,"name":"Ted","lastname":"Martinez","department":"Kitchen","ocupation":"chef","location":"Austin"}]')},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),o=n(4),r=n.n(o),s=(n(15),n(5)),l=n(6),d=n(9),m=n(8);n(16);var j=function(e){return Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.lastname}),Object(a.jsx)("td",{children:e.department}),Object(a.jsx)("td",{children:e.ocupation}),Object(a.jsx)("td",{children:e.location})]})})};n(17);var u=function(e){return Object(a.jsx)("div",{className:"wrapper",children:e.children})};n(18);var p=function(e){return Object(a.jsx)("h1",{className:"title",children:e.children})},h=n(7),b=n(3);var O=function(e){var t=Object(c.useState)("id"),n=Object(b.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)("employees"),s=Object(b.a)(r,2),l=s[0],d=s[1],m=function(e){o(e.target.id),d(e.target.id),console.log(i),console.log(l),console.log(d)};return Object(a.jsxs)("thead",{children:[Object(a.jsxs)("h2",{children:["Ordenado por ",i]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("span",{onClick:m,id:"name",children:"First Name"})}),Object(a.jsx)("th",{children:Object(a.jsx)("span",{onClick:m,id:"lastname",children:"Last Name"})}),Object(a.jsx)("th",{children:Object(a.jsx)("span",{onClick:m,id:"department",children:"Department"})}),Object(a.jsx)("th",{children:Object(a.jsx)("span",{onClick:m,id:"ocupation",children:"Ocupation"})}),Object(a.jsx)("th",{children:Object(a.jsx)("span",{onClick:m,id:"location",children:"Location"})})]})]})},x=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={employees:h},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(u,{children:[Object(a.jsx)(p,{children:" Employee Tracker"}),Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)(O,{}),this.state.employees.map((function(t){return Object(a.jsx)(j,{removeEmployee:e.removeEmployee,id:t.id,name:t.name,lastname:t.lastname,department:t.department,ocupation:t.ocupation,location:t.location},t.id)}))]})]})}}]),n}(c.Component);n(19);r.a.render(Object(a.jsxs)(i.a.StrictMode,{children:[Object(a.jsx)(x,{}),","]}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.2ad8e07e.chunk.js.map