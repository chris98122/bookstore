(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b877bfe2"],{"1c01":function(t,e,s){var a=s("a7d3"),n=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},abeb:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{"justify-center":"",wrap:""}},[s("v-flex",{attrs:{md12:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[s("template",{slot:"append"},[s("v-icon",[t._v("mdi-magnify")])],1)],2)],1),s("v-flex",{attrs:{md12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[s("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){var a=e.item;return[s("td",{staticClass:"text-md-left"},[t._v("\n              "+t._s(a.name)+"\n            ")]),s("td",{staticClass:"text-md-left"},[t._v(t._s(a.id))]),s("td",{staticClass:"text-md-left"},[t._v("\n              "+t._s(a.spending)+"\n            ")]),s("td")]}}])})],1)],1)],1)},n=[],i=s("f499"),l=s.n(i),r={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"UserName",value:"name"},{sortable:!0,text:"UserID",value:"id"},{sortable:!0,text:"Total spending",value:"spending"}],items:[]}},mounted:function(){var t=this,e="http://localhost:8080/statistics_by_user";this.axios.get(e).then(function(e){t.items=e.data,console.log(e.data)}).catch(function(t){l()(t),console.log(t)})},methods:{}},c=r,o=s("2877"),d=Object(o["a"])(c,a,n,!1,null,null,null);e["default"]=d.exports},f499:function(t,e,s){t.exports=s("1c01")}}]);
//# sourceMappingURL=chunk-b877bfe2.6f0abae5.js.map