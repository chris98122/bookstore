(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b876eaa8"],{"1c01":function(t,e,a){var n=a("a7d3"),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},ba51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("template",{slot:"append"},[a("v-icon",[t._v("mdi-magnify")])],1)],2)],1),a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"headerCell",fn:function(e){var n=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(n.text)}})]}},{key:"items",fn:function(e){var n=e.item;return[a("td",{staticClass:"text-md-left"},[t._v("\n              "+t._s(n.name)+"\n            ")]),a("td",{staticClass:"text-md-left"},[t._v(t._s(n.id))]),a("td",{staticClass:"right"},[a("toggle-button",{attrs:{labels:{checked:"启用",unchecked:"禁用"}},on:{change:function(e){return t.update(e,n)}},model:{value:n.active,callback:function(e){t.$set(n,"active",e)},expression:"item.active"}})],1),a("td")]}}])})],1)],1)],1)},s=[],i=a("f499"),c=a.n(i),l={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!0,text:"UserName",value:"name"},{sortable:!0,text:"UserID",value:"id"},{sortable:!1,text:"Action",value:"active",align:"right"}],items:[]}},mounted:function(){var t=this,e="http://localhost:8080/manageuser";this.axios.get(e).then(function(e){t.items=e.data,console.log(e.data)}).catch(function(t){c()(t),console.log(t)})},methods:{update:function(t,e){console.log(t),e.active=t.value,this.axios({headers:{"Access-Control-Allow-Origin":!0,"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:"http://localhost:8080/ban_user",data:this.$qs.stringify({userid:e.id,active:e.active}),withCredentials:!0}).then(function(t){console.log(t.data)}).catch(function(t){c()(t),console.log(t)})}}},o=l,r=a("2877"),u=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=u.exports},f499:function(t,e,a){t.exports=a("1c01")}}]);
//# sourceMappingURL=chunk-b876eaa8.a2e08d06.js.map