(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8732d4a"],{"1c01":function(t,e,r){var a=r("a7d3"),s=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},f499:function(t,e,r){t.exports=r("1c01")},fcd1:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"start time",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1)]),r("v-flex",{attrs:{xs4:""}},[r("div",[r("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date2,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date2=e},"update:return-value":function(e){t.date2=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"end time",readonly:""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},a))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[r("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu2.save(t.date2)}}},[t._v("OK")])],1)],1)],1)]),r("v-flex",{attrs:{xs2:""}},[r("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.searchdate(t.date,t.date2)}}},[t._v("search by time")])],1),r("v-flex",{attrs:{xs2:""}},[t.searched?r("p",[t._v(t._s(t.date)+"至"+t._s(t.date2)+"这段时间的销售额为￥"+t._s(t.spending))]):t._e()]),r("v-flex",{attrs:{xs3:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Search order id","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[r("template",{slot:"append"},[r("v-icon",[t._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{xs3:""}},[r("v-text-field",{attrs:{label:"Search By Bookname","append-icon":"search","single-line":"","hide-details":""},model:{value:t.searchbook,callback:function(e){t.searchbook=e},expression:"searchbook"}},[r("template",{slot:"append"},[r("v-icon",[t._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{xs3:""}},[r("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.showall()}}},[t._v("显示全部订单")])],1),r("v-flex",{attrs:{md12:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,"item-key":"id","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right","sort-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[r("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){var a=e.item;return[r("td",[t._v("\n              "+t._s(a.id)+"\n            ")]),r("td",{staticClass:"text-xs"},[t._v("\n              "+t._s(a.buydate.replace("T"," ").split(".")[0])+"\n            ")]),r("td",[t._v("\n              "+t._s(a.user.id)+"\n            ")]),r("td",[t._v("\n              "+t._s(a.totPrice)+"\n            ")]),r("td",t._l(a.orderContent,function(e){return r("tr",{key:e.id},[t._v("\n                "+t._s(e["book"]["name"])+"\n              ")])}),0),r("td",t._l(a.items,function(t){return r("tr",{key:t.id},[r("img",{attrs:{src:t.id,width:"40px"}})])}),0),r("td",t._l(a.orderContent,function(e){return r("tr",{key:e.id},[t._v("\n                "+t._s(e["bNum"])+"\n              ")])}),0),r("td",t._l(a.orderContent,function(e){return r("tr",{key:e.id},[t._v("\n                "+t._s(e["price"])+"\n              ")])}),0)]}}])})],1)],1)],1)},s=[],n=(r("ea65"),r("f499")),o=r.n(n),i=(r("3a23"),r("e814")),l=r.n(i),c={data:function(){return{publicPath:"/",headers:[{sortable:!0,text:"OrderID",value:"id"},{sortable:!0,text:"OrderTime",value:"buydate"},{sortable:!0,text:"userID",value:"userid"},{sortable:!0,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"orderContent"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"orderContent.bNum"},{sortable:!1,text:"Price",value:"orderContent"}],orders:[],ordersbackup:[],searchbook:"",searchuser:"",search:"",searched:!1,date:(new Date).toISOString().substr(0,10),menu:!1,date2:(new Date).toISOString().substr(0,10),menu2:!1}},watch:{search:function(t){""===t&&(this.orders=this.ordersbackup);for(var e=0;e<this.ordersbackup.length;e++)this.ordersbackup[e].id===l()(t)&&(this.orders=[],this.orders.push(this.ordersbackup[e]))},searchbook:function(t){if(""!==t){this.orders=[];for(var e=0;e<this.ordersbackup.length;e++)for(var r=0;r<this.ordersbackup[e].orderContent.length;r++)this.ordersbackup[e].orderContent[r].book.name===t&&this.orders.push(this.ordersbackup[e])}else this.orders=this.ordersbackup},searchuser:function(t){if(""!==t){this.orders=[];for(var e=0;e<this.ordersbackup.length;e++)this.ordersbackup[e].user.id===l()(t)&&this.orders.push(this.ordersbackup[e])}else this.orders=this.ordersbackup}},mounted:function(){var t=this,e="http://localhost:8080/statistics_show";this.axios.get(e).then(function(e){t.orders=e.data,t.ordersbackup=e.data,console.log(t.orders)}).catch(function(t){o()(t),console.log(t)})},methods:{showall:function(){this.searched=!1,this.orders=this.ordersbackup},format:function(t){var e=t.split("-"),r=new Date(e[0],e[1],e[2]),a=r.getTime();return a},searchdate:function(t,e){var r=this.format(t),a=this.format(e);if(r>a)return this.showall(),void alert("开始时间不能大于结束时间");this.searched=!0,this.orders=[],this.spending=0;for(var s=0;s<this.ordersbackup.length;s++){var n=this.format(this.ordersbackup[s].buydate.split("T")[0]);n>=r&&n<=a&&(console.log(this.ordersbackup[s].buydate+">="+t),console.log(this.ordersbackup[s].buydate+"<="+e),this.orders.push(this.ordersbackup[s]),this.spending+=this.ordersbackup[s].totPrice)}}}},d=c,u=r("2877"),h=Object(u["a"])(d,a,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-b8732d4a.f3ee66db.js.map