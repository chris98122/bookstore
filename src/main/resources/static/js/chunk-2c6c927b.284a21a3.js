(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6c927b"],{"159d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs4:""}},[n("div",[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{label:"start time",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1)]),n("v-flex",{attrs:{xs4:""}},[n("div",[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date2,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date2=e},"update:return-value":function(e){t.date2=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{label:"end time",readonly:""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},r))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[n("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu2.save(t.date2)}}},[t._v("OK")])],1)],1)],1)]),n("v-flex",{attrs:{xs4:""}},[t.searched?n("p",[t._v("您在"+t._s(t.date)+"至"+t._s(t.date2)+"这段时间一共消费了￥"+t._s(t.spending))]):t._e(),n("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.searchdate(t.date,t.date2)}}},[t._v("search by time")])],1),n("v-flex",{attrs:{xs4:""}},[n("v-text-field",{attrs:{label:"Search By ID","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.searchID(t.search)}}},[t._v("search by ID")])],1),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.showall()}}},[t._v("显示全部订单")])],1),n("v-flex",{attrs:{xs4:""}},[n("v-text-field",{attrs:{label:"Search By Bookname","single-line":"","hide-details":""},model:{value:t.searchbook,callback:function(e){t.searchbook=e},expression:"searchbook"}})],1),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.searchBook(t.searchbook)}}},[t._v("search by Bookname")])],1),n("template",{slot:"append"},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-flex",{attrs:{md12:""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,pagination:t.pagination,"item-key":"id","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right","sort-icon":"mdi-menu-down"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){var r=e.header;return[n("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(r.text)}})]}},{key:"items",fn:function(e){var r=e.item;return[n("td",[t._v("\n            "+t._s(r.id)+"\n          ")]),n("td",{staticClass:"text-xs"},[t._v("\n            "+t._s(r.date)+"\n          ")]),n("td",[t._v("\n            "+t._s(r.totPrice)+"\n          ")]),n("td",t._l(r.orderContent,function(e){return n("tr",{key:e.id},[t._v("\n              "+t._s(e["book"]["name"])+"\n            ")])}),0),n("td"),n("td",t._l(r.orderContent,function(e){return n("tr",{key:e.id},[t._v("\n              "+t._s(e["bNum"])+"\n            ")])}),0),n("td",t._l(r.orderContent,function(e){return n("tr",{key:e.id},[t._v("\n              "+t._s(e["book"]["price"])+"\n            ")])}),0)]}}])})],1)],2)],1)},a=[],o=(n("7f7f"),n("e814")),s=n.n(o),i=n("f499"),l=n.n(i),c={data:function(){return{searched:!1,pagination:{sortBy:"id"},date:(new Date).toISOString().substr(0,10),menu:!1,date2:(new Date).toISOString().substr(0,10),menu2:!1,search:"",searchbook:"",publicPath:"/",headers:[{sortable:!0,text:"OrderID",value:"id"},{sortable:!0,text:"OrderTime",value:"date"},{sortable:!0,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"Price",value:"price"}],orders:[],ordersbackup:[],spending:0}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{},mounted:function(){var t=this,e="http://localhost:8080/orders_show";this.axios.get(e).then(function(e){"用户未登录"===e.data?t.orders=["你还没有登录哦"]:(t.orders=e.data,t.ordersbackup=e.data),console.log(t.orders)}).catch(function(t){l()(t),console.log(t)})},methods:{searchdate:function(t,e){var n=this;this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:"http://localhost:8080/order_search",data:this.$qs.stringify({startdate:t,enddate:e})}).then(function(t){n.orders=t.data,n.searched=!0,n.spending=n.calsum(),console.log(t.data),console.log(n.spending)}).catch(function(t){l()(t),console.log(t)})},searchID:function(t){var e=[];this.orders=this.ordersbackup,t=s()(t);for(var n=0;n<this.orders.length;n++)if(this.orders[n].id===t)return e.push(this.orders[n]),void(this.orders=e)},searchBook:function(t){var e=[];this.orders=this.ordersbackup;for(var n=0;n<this.orders.length;n++)for(var r=0;r<this.orders[n]["orderContent"].length;r++)this.orders[n]["orderContent"][r].book.name===t&&e.push(this.orders[n]);this.orders=e},calsum:function(){for(var t=0,e=0;e<this.orders.length;e++)t+=this.orders[e].totPrice;return t},showall:function(){this.orders=this.ordersbackup},getDate:function(){var t=function(t){return t<10?"0"+t:t},e=new Date,n=e.getFullYear(),r=t(e.getMonth()+1),a=t(e.getDate());return"".concat(a,"/").concat(r,"/").concat(n)}}},d=c,u=n("2877"),f=Object(u["a"])(d,r,a,!1,null,null,null);e["default"]=f.exports},a21f:function(t,e,n){var r=n("584a"),a=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},f499:function(t,e,n){t.exports=n("a21f")}}]);
//# sourceMappingURL=chunk-2c6c927b.284a21a3.js.map