(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a3e35e"],{"1c01":function(t,e,s){var a=s("a7d3"),o=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},"22dd":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{"justify-center":"",wrap:""}},[s("v-flex",{attrs:{xs3:""}},[s("router-link",{attrs:{to:"/on_shelf"}},[t._v("On shelf\n\n      ")])],1),s("v-flex",{attrs:{xs3:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[s("template",{slot:"append"},[s("v-icon",[t._v("mdi-magnify")])],1)],2)],1),s("v-flex",{attrs:{md12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[s("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){var a=e.item;return[s("td",{staticClass:"text-lg-left",attrs:{width:"200px"}},[s("router-link",{attrs:{to:"/book_detail"}},[t._v("\n                "+t._s(a.name)+"\n            ")])],1),s("td",[s("router-link",{attrs:{to:"/book_detail"}},[s("img",{attrs:{src:a.url,width:"80px"}})])],1),s("td",{staticClass:"text-xs"},[t._v(t._s(a.author))]),s("td",[s("v-text-field",{attrs:{required:"",solo:""},model:{value:a.stock,callback:function(e){t.$set(a,"stock",e)},expression:"item.stock"}})],1),s("td",[s("v-tooltip",{attrs:{top:"","content-class":"top"}},[s("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",icon:""},slot:"activator"},[s("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])],1),s("span",[t._v("submit")])],1)],1),s("td",{staticClass:"text-xs"},[t._v(t._s(a.isbn))]),s("td",[s("v-text-field",{attrs:{required:"",solo:""},model:{value:a.price,callback:function(e){t.$set(a,"price",e)},expression:"item.price"}})],1),s("td",[s("v-tooltip",{attrs:{top:"","content-class":"top"}},[s("v-btn",{staticClass:"v-btn--simple right",attrs:{slot:"activator",icon:""},slot:"activator"},[s("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])],1),s("span",[t._v("submit")])],1)],1),s("td",[s("v-tooltip",{attrs:{top:"","content-class":"top"}},[s("v-btn",{staticClass:"v-btn--simple right",attrs:{slot:"activator",icon:""},slot:"activator"},[s("v-icon",{attrs:{color:"blue"}},[t._v("mdi-download")])],1),s("span",[t._v("Off Shelf")])],1)],1)]}}])})],1)],1)],1)},o=[],l=s("f499"),i=s.n(l),r={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Author",value:"author"},{sortable:!1,text:"Stock",value:"stock"},{sortable:!1,text:" ",value:"stock"},{sortable:!1,text:"ISBN",value:"ISBN"},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"    ",value:"price"},{sortable:!1,text:"Action",value:"action",align:"right"}],items:[]}},mounted:function(){var t=this,e="http://localhost:8080/book";this.axios({headers:{"Access-Control-Allow-Origin":!0,"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"get",url:e}).then(function(e){t.items=e.data,console.log(e.data)}).catch(function(t){i()(t),console.log(t)})}},n=r,c=s("2877"),u=Object(c["a"])(n,a,o,!1,null,null,null);e["default"]=u.exports},f499:function(t,e,s){t.exports=s("1c01")}}]);
//# sourceMappingURL=chunk-b8a3e35e.a0a2181d.js.map