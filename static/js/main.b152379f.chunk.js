(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){},45:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c);a(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(81),u=a(80),m=a(7),s=a(1),i=(a(23),function(){return r.a.createElement("div",{className:"f-div"},r.a.createElement(m.b,{to:"/userlist"}," ",r.a.createElement("button",{id:"p-button"}," User List ")," "),r.a.createElement(m.b,{to:"/adduser"},r.a.createElement("button",{id:"p-button"}," Add New User ")))}),f=a(3),p=a.n(f),b=a(9),h=a(11),d=a(18),E=a(12),v=a(10),g=a.n(v),y=function(){var e=Object(s.f)(),t=Object(n.useState)({name:"",shift:"",date:[{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0}]}),a=Object(E.a)(t,2),c=a[0],o=a[1],l=c.name,u=function(e){o(Object(d.a)(Object(d.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))},m=function(){var t=Object(b.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,g.a.post("http://localhost:3003/users",c);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"d-uselist"},r.a.createElement("header",null,r.a.createElement("h1",{className:"Newuser"}," New User Info ")),r.a.createElement("form",{onSubmit:function(e){return m(e)}},r.a.createElement("div",{class:"row mb-3"},r.a.createElement("label",{for:"name",className:"A-Label"},"Name"),r.a.createElement("div",{className:"i-adduser"},r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:l,onChange:function(e){return u(e)}}))),r.a.createElement("fieldset",{class:"row mb-3",onChange:function(e){return u(e)}},r.a.createElement("legend",{className:"A-Label"}," Shifts "),r.a.createElement("div",{className:"A-Label"},r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"radio",name:"shift",value:"1"}),r.a.createElement("label",{class:"form-check-label",for:"gridRadios1"}," 1 Shift")),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"radio",name:"shift",value:"2"}),r.a.createElement("label",{class:"form-check-label",for:"gridRadios2"},"2 Shift")))),r.a.createElement("button",{type:"submit",className:"btn-s"},"Submit")))},j=a(40),O=a(41),w=a(44),x=a(43),N=function(e){Object(w.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).submitf=function(){alert(n.state.username+" do you want to submit ?")},n.changehandler=function(e){var t=e.target.name,a=e.target.value,c="";"age"===t&&(""==a||Number(a)||(c=r.a.createElement("strong",null," Age must be a number "))),n.setState({errmsg:c}),n.setState(Object(h.a)({},t,a))},n.state={username:"",age:null,errmsg:"",car:""},n}return Object(O.a)(a,[{key:"render",value:function(){var e="";return e=this.state.username?r.a.createElement("h1",null,"Hello ",this.state.username," ",this.state.age," ",this.state.car," "):"",r.a.createElement("form",{onSubmit:this.submitf},e,r.a.createElement("h1",null,"Enter Your name"),r.a.createElement("input",{type:"text",name:"username",onChange:this.changehandler}),r.a.createElement("input",{type:"text",name:"age",onChange:this.changehandler}),this.state.errmsg,r.a.createElement("select",{name:"car",onChange:this.changehandler},r.a.createElement("option",{value:"first"}," 1 "),r.a.createElement("option",{value:"Seocnd"}," 2 "),r.a.createElement("option",{value:"Third"}," 3 ")),r.a.createElement("button",{type:"submit"},"Submit"))}}]),a}(r.a.Component),k=(a(38),function(){Object(s.f)();var e=Object(n.useState)({date:[]}),t=Object(E.a)(e,2),a=t[0],c=t[1],o=0;Object(n.useEffect)((function(){m()}),[]);var l=Object(s.g)().id,u=a.date,m=(a.name,function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3003/users/".concat(l));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),i=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g.a.put("http://localhost:3003/users/".concat(l),a);case 3:m(),f();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){console.log("date = "+u),u.map((function(e,t){return o+=Number((e.amount*e.fat*6.5).toFixed(1)),console.log(t+1+"="+o)}))};return r.a.createElement("div",null,r.a.createElement("table",{class:"table"},r.a.createElement("thead",{className:"table-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Amount"),r.a.createElement("th",{scope:"col"},"F"),r.a.createElement("th",{scope:"col"},"Total"))),r.a.createElement("tbody",null,u.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,r.a.createElement("input",{type:"number",placeholder:e.amount,name:"amount",style:{color:"red",border:"none"},value:u.amount,onChange:function(e){return function(e,t){u[t].amount=e.target.value}(e,t)}})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",placeholder:e.fat,name:"fat",style:{color:"red",border:"none"},value:u.fat,onChange:function(e){return function(e,t){u[t].fat=e.target.value}(e,t)}})),r.a.createElement("td",null,(e.amount*e.fat*6.5).toFixed(1)))}))),r.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(e){return i(e)}},"Submit"),r.a.createElement("div",null," ",o)))}),S=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3003/users");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"d-uselist"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",{className:"table-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Serial"),r.a.createElement("th",{scope:"col"},"Name"))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t+1),r.a.createElement(m.b,{to:"/userdata/".concat(e.id)}," ",r.a.createElement("td",null,e.name)))})))))},C=function(){var e=Object(s.f)(),t=Object(s.g)().id,a=Object(n.useState)({amount:"",fat:""}),c=Object(E.a)(a,2),o=c[0],l=c[1],u=o.amount,m=o.fat,i=function(e){l(Object(d.a)(Object(d.a)({},o),{},Object(h.a)({},e.target.name,e.target.value)))},f=function(){var a=Object(b.a)(p.a.mark((function a(n){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,g.a.post("http://localhost:3003/users/".concat(t),o);case 3:l({amount:"",fat:""}),console.log(o.amount),e.push("/");case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",{classamount:"Newuser"}," New User Info ")),r.a.createElement("form",{onSubmit:function(e){return f(e)}},r.a.createElement("div",{class:"row mb-3"},r.a.createElement("label",{for:"amount",class:"col-sm-2 col-form-label"}," Amount "),r.a.createElement("div",{class:"col-sm-10"},r.a.createElement("input",{type:"number",class:"form-control",name:"amount",value:u,onChange:function(e){return i(e)}}))),r.a.createElement("div",{class:"row mb-3"},r.a.createElement("label",{for:"fat",class:"col-sm-2 col-form-label"},"Fat"),r.a.createElement("div",{class:"col-sm-10"},r.a.createElement("input",{type:"number",class:"form-control",name:"fat",value:m,onChange:function(e){return i(e)}}))),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit")))};var A=function(){return r.a.createElement(m.a,{basename:"/DairyApp"},r.a.createElement(l.a,{theme:u.a},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/DairyApp",component:i}),r.a.createElement(s.a,{exact:!0,path:"/adduser",component:y}),r.a.createElement(s.a,{exact:!0,path:"/removeuser",component:N}),r.a.createElement(s.a,{exact:!0,path:"/userdata/:id",component:k}),r.a.createElement(s.a,{exact:!0,path:"/userlist",component:S}),r.a.createElement(s.a,{exact:!0,path:"/adddata/:id",component:C}))))};o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.b152379f.chunk.js.map