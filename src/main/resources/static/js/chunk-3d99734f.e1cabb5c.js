(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d99734f"],{a21f:function(t,e,s){var a=s("584a"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},ba51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{"justify-center":"",wrap:""}},[s("v-flex",{attrs:{md12:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[s("template",{slot:"append"},[s("v-icon",[t._v("mdi-magnify")])],1)],2)],1),s("v-flex",{attrs:{md12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[s("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){var a=e.item;return[s("td",{staticClass:"text-md-left"},[t._v("\n              "+t._s(a.name)+"\n            ")]),s("td",{staticClass:"text-md-left"},[t._v(t._s(a.id))]),s("td",{staticClass:"right"},[s("toggle-button",{attrs:{labels:{checked:"启用",unchecked:"禁用"}},model:{value:a.isActive,callback:function(e){t.$set(a,"isActive",e)},expression:"item.isActive"}})],1),s("td")]}}])})],1)],1)],1)},i=[],n=s("f499"),l=s.n(n),o={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"UserName",value:"name"},{sortable:!1,text:"UserID",value:"id"},{sortable:!1,text:"Action",value:"isActive",align:"right"}],items:[]}},watch:{items:{handler:function(){this.update(this.items),console.log(this.items)},deep:!0}},mounted:function(){var t=this,e="http://localhost:8080/manageuser";this.axios.get(e).then(function(e){t.items=e.data,console.log(e.data)}).catch(function(t){l()(t),console.log(t)})},methods:{update:function(t){this.axios({headers:{"Access-Control-Allow-Origin":!0,"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:"http://localhost:8080/ban_user",data:this.$qs.stringify({users:t}),withCredentials:!0}).then(function(e){t.isActive=!t.isActive,console.log(e.data)}).catch(function(t){l()(t),console.log(t)})}}},c=o,r=s("2877"),d=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=d.exports},f499:function(t,e,s){t.exports=s("a21f")}}]);
//# sourceMappingURL=chunk-3d99734f.e1cabb5c.js.map