(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f470bb"],{a21f:function(t,e,a){var s=a("584a"),o=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},b210:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("template",{slot:"append"},[a("v-icon",[t._v("mdi-magnify")])],1)],2)],1),a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var s=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(e){var s=e.item;return[a("td",{staticClass:"text-lg-left",attrs:{width:"200px"},on:{click:function(e){return t.getdetail(s.id)}}},[t._v("\n              "+t._s(s.name))]),a("td",[a("img",{attrs:{src:s.url,width:"80px"}})]),a("td",{staticClass:"text-xs"},[t._v(t._s(s.author))]),a("td",{staticClass:"text-xs"},[t._v(t._s(s.stock))]),a("td",{staticClass:"text-xs"},[t._v(t._s(s.isbn))]),a("td",{staticClass:"text-xs"},[t._v("$"+t._s(s.price))]),a("td",[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-cart")])],1),a("span",[t._v("Move in cart")])],1)],1)]}}])})],1)],1)],1)},o=[],i=a("f499"),n=a.n(i),l={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Author",value:"author"},{sortable:!1,text:"Stock",value:"stock"},{sortable:!1,text:"ISBN",value:"isbn"},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"Action",value:"action",align:"right"}],items:[{name:"javascript tutorial",number:1,stock:7,price:35,url:"1.jpg"}]}},mounted:function(){var t=this,e="http://localhost:8080/book";this.axios.get(e).then(function(e){t.items=e.data,console.log(e.data)}).catch(function(t){n()(t),console.log(t)})},methods:{getdetail:function(t){var e=this;console.log("clicked");var a="http://localhost:8080/bookdetail";this.axios({method:"post",url:a,params:{id:t}}).then(function(t){e.$router.push({path:"/book_detail",data:t.data}),console.log(t.data)}).catch(function(t){n()(t),console.log(t)})}}},r=l,c=a("2877"),u=Object(c["a"])(r,s,o,!1,null,null,null);e["default"]=u.exports},f499:function(t,e,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-55f470bb.0b73001c.js.map