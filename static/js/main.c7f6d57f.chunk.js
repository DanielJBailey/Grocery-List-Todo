(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(25)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),r=a.n(i),u=(a(16),a(5)),c=a(9),m=a(1),o=a(2),s=a(4),d=a(3),h=a(6),E=(a(18),{item:{cursor:"pointer"},bought:{textDecoration:"line-through"}}),b=function(e){var t=e.id,a=e.name,n=e.quantity,i=e.bought,r=e.buy;return l.a.createElement("li",{onClick:function(){return r(t)},style:i?Object(u.a)({},E.item,E.bought):E.item},l.a.createElement("p",null,a," (",n,")"))},g=function(e){var t=e.items,a=e.bought;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Grocery List"),l.a.createElement("div",{className:"writing-container"},l.a.createElement("ul",{className:"writing-lines"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)),l.a.createElement("ul",null,t.map(function(e){return l.a.createElement(b,Object.assign({buy:a,key:e.id},e))}))))},p=(a(20),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",quantity:0},a.updateItem=function(e){a.setState({name:e.target.value})},a.updateQuantity=function(e){a.setState({quantity:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.add(a.state.name,a.state.quantity),a.setState({name:"",quantity:0})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.quantity;return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"new-item"},l.a.createElement("input",{value:t,placeholder:"Add Item:",required:!0,onChange:this.updateItem,name:"name"}),l.a.createElement("input",{type:"number",max:"100",min:"1",value:a,placeholder:"Quantity:",required:!0,pattern:"[0-9]+",onChange:this.updateQuantity,name:"quantity"}),l.a.createElement("input",{value:"Add Item",type:"submit"}))}}]),t}(l.a.Component)),y=(a(22),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={maxItems:21,items:[{id:1,name:"Oranges",quantity:"5",bought:!1},{id:2,name:"Bread",quantity:"1",bought:!1},{id:3,name:"Advocado",quantity:"2",bought:!1},{id:4,name:"Salmon Filets",quantity:"2",bought:!1},{id:5,name:"Eggs",quantity:"20",bought:!1},{id:6,name:"Cilantro",quantity:"1",bought:!1}]},a.getUniqId=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},a.addItem=function(e,t){var n={name:e,id:a.getUniqId(),quantity:t,bought:!1};a.state.items.length<a.state.maxItems&&a.setState({items:[n].concat(Object(c.a)(a.state.items))},function(){console.log(this.state)})},a.boughtItem=function(e){var t=a.state.items;a.setState({items:t.map(function(t){return t.id===e?Object(u.a)({},t,{bought:!t.bought}):t})})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"App"},l.a.createElement(p,{add:this.addItem}),l.a.createElement("div",{className:"notepad"},l.a.createElement("div",{className:"hole"}),l.a.createElement("div",{className:"hole"}),l.a.createElement("div",{className:"hole"}),l.a.createElement("div",{className:"lines"}),l.a.createElement(g,{items:e,bought:this.boughtItem})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c7f6d57f.chunk.js.map