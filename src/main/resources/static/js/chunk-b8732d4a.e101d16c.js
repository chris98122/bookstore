(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8732d4a"],{"1c01":function(e,t,r){var a=r("a7d3"),s=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},f499:function(e,t,r){e.exports=r("1c01")},fcd1:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-text-field",e._g({attrs:{label:"start time",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1)],1)]),r("v-flex",{attrs:{xs4:""}},[r("div",[r("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.date2,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date2=t},"update:return-value":function(t){e.date2=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-text-field",e._g({attrs:{label:"end time",readonly:""},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}},a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[r("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu2=!1}}},[e._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.menu2.save(e.date2)}}},[e._v("OK")])],1)],1)],1)]),r("v-flex",{attrs:{xs2:""}},[r("v-btn",{attrs:{color:"blue",small:""},on:{click:function(t){return e.searchdate(e.date,e.date2)}}},[e._v("search by time")])],1),r("v-flex",{attrs:{xs2:""}},[e.searched?r("p",[e._v(e._s(e.date)+"至"+e._s(e.date2)+"这段时间的销售额为￥"+e._s(e.spending))]):e._e()]),r("v-flex",{attrs:{xs3:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Search order id","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[r("template",{slot:"append"},[r("v-icon",[e._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{xs3:""}},[r("v-text-field",{attrs:{label:"Search By Bookname","append-icon":"search","single-line":"","hide-details":""},model:{value:e.searchbook,callback:function(t){e.searchbook=t},expression:"searchbook"}},[r("template",{slot:"append"},[r("v-icon",[e._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{xs3:""}},[r("v-text-field",{attrs:{label:"Search By UserID","append-icon":"search","single-line":"","hide-details":""},model:{value:e.searchuser,callback:function(t){e.searchuser=t},expression:"searchuser"}},[r("template",{slot:"append"},[r("v-icon",[e._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{xs3:""}},[r("v-btn",{attrs:{color:"blue",small:""},on:{click:function(t){return e.showall()}}},[e._v("显示全部订单")])],1),r("v-flex",{attrs:{md12:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orders,"item-key":"id","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right","sort-icon":"mdi-menu-down"},scopedSlots:e._u([{key:"headerCell",fn:function(t){var a=t.header;return[r("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:e._s(a.text)}})]}},{key:"items",fn:function(t){var a=t.item;return[r("td",[e._v("\n              "+e._s(a.id)+"\n            ")]),r("td",{staticClass:"text-xs"},[e._v("\n              "+e._s(a.buydate.replace("T"," ").split(".")[0])+"\n            ")]),r("td",[e._v("\n              "+e._s(a.user.id)+"\n            ")]),r("td",[e._v("\n              "+e._s(a.totPrice)+"\n            ")]),r("td",e._l(a.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n                "+e._s(t["book"]["name"])+"\n              ")])}),0),r("td",e._l(a.items,function(e){return r("tr",{key:e.id},[r("img",{attrs:{src:e.id,width:"40px"}})])}),0),r("td",e._l(a.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n                "+e._s(t["bNum"])+"\n              ")])}),0),r("td",e._l(a.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n                "+e._s(t["price"])+"\n              ")])}),0)]}}])})],1)],1)],1)},s=[],n=(r("ea65"),r("f499")),o=r.n(n),i=(r("3a23"),r("e814")),l=r.n(i),c={data:function(){return{publicPath:"/",headers:[{sortable:!0,text:"OrderID",value:"id"},{sortable:!0,text:"OrderTime",value:"buydate"},{sortable:!0,text:"userID",value:"userid"},{sortable:!0,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"orderContent"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"orderContent.bNum"},{sortable:!1,text:"Price",value:"orderContent"}],orders:[],ordersbackup:[],searchbook:"",searchuser:"",search:"",searched:!1,date:(new Date).toISOString().substr(0,10),menu:!1,date2:(new Date).toISOString().substr(0,10),menu2:!1}},watch:{search:function(e){""===e&&(this.orders=this.ordersbackup);for(var t=0;t<this.ordersbackup.length;t++)this.ordersbackup[t].id===l()(e)&&(this.orders=[],this.orders.push(this.ordersbackup[t]))},searchbook:function(e){if(""!==e){this.orders=[];for(var t=0;t<this.ordersbackup.length;t++)for(var r=0;r<this.ordersbackup[t].orderContent.length;r++)this.ordersbackup[t].orderContent[r].book.name===e&&this.orders.push(this.ordersbackup[t])}else this.orders=this.ordersbackup},searchuser:function(e){if(""!==e){this.orders=[];for(var t=0;t<this.ordersbackup.length;t++)this.ordersbackup[t].user.id===l()(e)&&this.orders.push(this.ordersbackup[t])}else this.orders=this.ordersbackup}},mounted:function(){var e=this,t="http://localhost:8080/statistics_show";this.axios.get(t).then(function(t){e.orders=t.data,e.ordersbackup=t.data,console.log(e.orders)}).catch(function(e){o()(e),console.log(e)})},methods:{showall:function(){this.searched=!1,this.orders=this.ordersbackup},format:function(e){var t=e.split("-"),r=new Date(t[0],t[1],t[2]),a=r.getTime();return a},searchdate:function(e,t){var r=this.format(e),a=this.format(t);if(r>a)return this.showall(),void alert("开始时间不能大于结束时间");this.searched=!0,this.orders=[],this.spending=0;for(var s=0;s<this.ordersbackup.length;s++){var n=this.format(this.ordersbackup[s].buydate.split("T")[0]);n>=r&&n<=a&&(console.log(this.ordersbackup[s].buydate+">="+e),console.log(this.ordersbackup[s].buydate+"<="+t),this.orders.push(this.ordersbackup[s]),this.spending+=this.ordersbackup[s].totPrice)}}}},d=c,u=r("2877"),h=Object(u["a"])(d,a,s,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-b8732d4a.e101d16c.js.map