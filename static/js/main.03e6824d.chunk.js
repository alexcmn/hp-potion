(this.webpackJsonppotion=this.webpackJsonppotion||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/logo.5c43bc59.png"},18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),c=n.n(r),o=(n(23),n(1)),l=n(2),s=n(5),p=n(3),u=n(6),d=n(4),m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).handleSubmit=function(e){e.preventDefault();var t=n.getTitle.value,a=n.getDescription.value,i={id:new Date,title:t,description:a,editing:!1};n.props.dispatch({type:"ADD_POTION",data:i}),n.getTitle.value="",n.getDescription.value=""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"potion-container"},i.a.createElement("h5",{className:"all-potion-heading"},"Unesite Va\u0161 napitak u listu napitaka"),i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},i.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getTitle=t},placeholder:"Unesite ime napitka"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("textarea",{required:!0,rows:"5",cols:"28",ref:function(t){return e.getDescription=t},placeholder:"Unesite opis, dejstvo napitka"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",null,"Dodaj")))}}]),t}(a.Component),b=Object(d.b)()(m),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"potion"},i.a.createElement("h2",{className:"potion-title"},this.props.potion.title),i.a.createElement("p",{className:"potion-description"},this.props.potion.description),i.a.createElement("div",{className:"control-buttons"},i.a.createElement("button",{className:"edit",onClick:function(){return e.props.dispatch({type:"EDIT_POTION",id:e.props.potion.id})}},"Uredi"),i.a.createElement("button",{className:"delete",onClick:function(){return e.props.dispatch({type:"DELETE_POTION",id:e.props.potion.id})}},"Izbri\u0161i")))}}]),t}(a.Component),f=Object(d.b)()(h),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).handleEdit=function(e){e.preventDefault();var t={newTitle:n.getTitle.value,newDescription:n.getDescription.value};n.props.dispatch({type:"UPDATE",id:n.props.potion.id,data:t})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{key:this.props.potion.id,className:"potion"},i.a.createElement("form",{className:"form form2",onSubmit:this.handleEdit},i.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getTitle=t},defaultValue:this.props.potion.title,placeholder:"Unesite naslov napitka"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("textarea",{required:!0,rows:"5",ref:function(t){return e.getDescription=t},defaultValue:this.props.potion.description,cols:"28",placeholder:"Unesite detalje, opis napitka"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",null,"Uredi")))}}]),t}(a.Component),O=Object(d.b)()(E),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"potion-container"},i.a.createElement("h5",{className:"all-potion-heading"},"Svi napitci"),this.props.potions.map((function(e){return i.a.createElement("div",{key:e.id},e.editing?i.a.createElement(O,{potion:e,key:e.id}):i.a.createElement(f,{key:e.id,potion:e}))})))}}]),t}(a.Component),j=Object(d.b)((function(e){return{potions:e}}))(v),g=n(17),y=n.n(g),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"navbar"},i.a.createElement("img",{src:y.a,className:"center"})),i.a.createElement(b,null),i.a.createElement(j,null))}}]),t}(a.Component),D=n(10),k=n(14),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POTION":return e.concat([t.data]);case"DELETE_POTION":return e.filter((function(e){return e.id!==t.id}));case"EDIT_POTION":return e.map((function(e){return e.id===t.id?Object(k.a)({},e,{editing:!e.editing}):e}));case"UPDATE":return e.map((function(e){return e.id===t.id?Object(k.a)({},e,{title:t.data.newTitle,description:t.data.newDescription,editing:!e.editing}):e}));default:return e}},w=Object(D.b)(T);c.a.render(i.a.createElement(d.a,{store:w},i.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.03e6824d.chunk.js.map