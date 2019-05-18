(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a3e35e"],{"1c01":function(t,e,a){var s=a("a7d3"),o=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},"22dd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs3:""}},[a("router-link",{attrs:{to:"/on_shelf"}},[t._v("On shelf\n\n      ")])],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("template",{slot:"append"},[a("v-icon",[t._v("mdi-magnify")])],1)],2)],1),a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"headerCell",fn:function(e){var s=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(e){var s=e.item;return[a("td",{staticClass:"text-lg-left",attrs:{width:"200px"}},[a("router-link",{attrs:{to:"/book_detail"}},[t._v("\n                "+t._s(s.name)+"\n            ")])],1),a("td",[a("router-link",{attrs:{to:"/book_detail"}},[a("img",{attrs:{src:s.url,width:"80px"}})])],1),a("td",{staticClass:"text-xs"},[t._v(t._s(s.author))]),a("td",[a("v-text-field",{attrs:{required:"",solo:""},model:{value:s.stock,callback:function(e){t.$set(s,"stock",e)},expression:"item.stock"}})],1),a("td",[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",icon:""},on:{click:function(e){return t.UpdateStock(s.id,s.stock)}},slot:"activator"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])],1),a("span",[t._v("submit")])],1)],1),a("td",{staticClass:"text-xs"},[t._v(t._s(s.isbn))]),a("td",[a("v-text-field",{attrs:{required:"",solo:""},model:{value:s.price,callback:function(e){t.$set(s,"price",e)},expression:"item.price"}})],1),a("td",[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",icon:""},on:{click:function(e){return t.UpdatePrice(s.id,s.price)}},slot:"activator"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])],1),a("span",[t._v("submit")])],1)],1),a("td",{staticClass:"right"},[a("toggle-button",{attrs:{labels:{checked:"上架",unchecked:"下架"}},on:{change:function(e){return t.update_shelf(e,s)}},model:{value:s.upshelf,callback:function(e){t.$set(s,"upshelf",e)},expression:"item.upshelf"}})],1)]}}])})],1)],1)],1)},o=[],l=a("f499"),n=a.n(l),i={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Author",value:"author"},{sortable:!1,text:"Stock",value:"stock"},{sortable:!1,text:" ",value:"stock"},{sortable:!1,text:"ISBN",value:"isbn"},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"    ",value:"price"},{sortable:!1,text:"Action",value:"upshelf",align:"right"}],items:[]}},mounted:function(){var t=this,e="http://localhost:8080/book";this.axios({headers:{"Access-Control-Allow-Origin":!0,"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"get",url:e}).then(function(e){t.items=e.data,console.log(e.data)}).catch(function(t){n()(t),console.log(t)})},methods:{UpdateStock:function(t,e){isNaN(e)?alert("库存必须是数字！"):e<0?alert("库存必须是大于等于零的数字！"):this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:"http://localhost:8080/update_stock",data:this.$qs.stringify({bid:t,stock:e})}).then(function(t){alert(t.data),console.log(t.data)}).catch(function(t){n()(t),console.log(t)})},UpdatePrice:function(t,e){isNaN(e)?alert("价格必须是数字！"):e<0?alert("价格必须是大于等于零的数字！"):/^\d+(\.\d{1,2})?$/.test(e)?this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:"http://localhost:8080/update_price",data:this.$qs.stringify({bid:t,price:e})}).then(function(t){alert(t.data),console.log(t.data)}).catch(function(t){n()(t),console.log(t)}):alert("价格必须是精度为两位小数以内的正数！")},update_shelf:function(t,e){e.upshelf=t.value,this.axios({headers:{"Access-Control-Allow-Origin":!0,"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:"http://localhost:8080/update_shelf",data:this.$qs.stringify({bid:e.id,upshelf:e.upshelf}),withCredentials:!0}).then(function(t){console.log(t.data)}).catch(function(t){n()(t),console.log(t)})}}},c=i,r=a("2877"),u=Object(r["a"])(c,s,o,!1,null,null,null);e["default"]=u.exports},f499:function(t,e,a){t.exports=a("1c01")}}]);
//# sourceMappingURL=chunk-b8a3e35e.3c1eb195.js.map