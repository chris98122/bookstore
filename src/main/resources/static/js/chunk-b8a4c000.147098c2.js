(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a4c000"],{"159d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"start time",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1)]),r("v-flex",{attrs:{xs4:""}},[r("div",[r("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date2,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date2=e},"update:return-value":function(e){t.date2=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"end time",readonly:""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},a))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[r("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu2.save(t.date2)}}},[t._v("OK")])],1)],1)],1)]),r("v-flex",{attrs:{xs2:""}},[r("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.searchdate(t.date,t.date2)}}},[t._v("search by time")])],1),r("v-flex",{attrs:{xs2:""}},[t.searched?r("p",[t._v("您在"+t._s(t.date)+"至"+t._s(t.date2)+"这段时间一共消费了￥"+t._s(t.spending))]):t._e()]),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{label:"Search By ID","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{label:"Search By Bookname","single-line":"","hide-details":""},model:{value:t.searchbook,callback:function(e){t.searchbook=e},expression:"searchbook"}})],1),r("v-flex",{attrs:{xs4:""}},[r("v-btn",{attrs:{color:"blue",small:""},on:{click:function(e){return t.showall()}}},[t._v("显示全部订单")])],1),r("template",{slot:"append"},[r("v-icon",[t._v("mdi-magnify")])],1),r("v-flex",{attrs:{md12:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,pagination:t.pagination,"item-key":"id","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right","sort-icon":"mdi-menu-down"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[r("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){var a=e.item;return[r("td",[t._v("\n            "+t._s(a.id)+"\n          ")]),r("td",{staticClass:"text-xs"},[t._v("\n            "+t._s(a.buydate.replace("T"," ").split(".")[0])+"\n          ")]),r("td",[t._v("\n            "+t._s(a.totPrice)+"\n          ")]),r("td",t._l(a.orderContent,function(e){return r("tr",{key:e.id},[t._v("\n              "+t._s(e["book"]["name"])+"\n            ")])}),0),r("td"),r("td",t._l(a.orderContent,function(e){return r("tr",{key:e.id},[t._v("\n              "+t._s(e["bNum"])+"\n            ")])}),0),r("td",t._l(a.orderContent,function(e){return r("tr",{key:e.id},[t._v("\n              "+t._s(e["price"])+"\n            ")])}),0)]}}])})],1)],2)],1)},n=[],s=(r("ea65"),r("f499")),o=r.n(s),i=(r("3a23"),r("e814")),l=r.n(i),c={data:function(){return{searched:!1,pagination:{sortBy:"id"},date:(new Date).toISOString().substr(0,10),menu:!1,date2:(new Date).toISOString().substr(0,10),menu2:!1,publicPath:"/",headers:[{sortable:!0,text:"OrderID",value:"id"},{sortable:!0,text:"OrderTime",value:"buydate"},{sortable:!0,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"Price",value:"price"}],orders:[],ordersbackup:[],spending:0,search:"",searchbook:""}},watch:{search:function(t){if(""!==t)for(var e=0;e<this.ordersbackup.length;e++)this.ordersbackup[e].id===l()(t)&&(this.orders=[],this.orders.push(this.ordersbackup[e]));else this.orders=this.ordersbackup},searchbook:function(t){if(""!==t){this.orders=[];for(var e=0;e<this.ordersbackup.length;e++)for(var r=0;r<this.ordersbackup[e].orderContent.length;r++)this.ordersbackup[e].orderContent[r].book.name===t&&this.orders.push(this.ordersbackup[e])}else this.orders=this.ordersbackup}},mounted:function(){var t=this,e="http://localhost:8080/orders_show";this.axios.get(e).then(function(e){"用户未登录"===e.data?t.orders=["你还没有登录哦"]:(t.orders=e.data,t.ordersbackup=e.data),console.log(t.orders)}).catch(function(t){o()(t),console.log(t)})},methods:{format:function(t){var e=t.split("-"),r=new Date(e[0],e[1],e[2]),a=r.getTime();return a},searchdate:function(t,e){var r=this.format(t),a=this.format(e);if(r>a)return this.showall(),void alert("开始时间不能大于结束时间");this.searched=!0,this.orders=[],this.spending=0;for(var n=0;n<this.ordersbackup.length;n++){var s=this.format(this.ordersbackup[n].buydate.split("T")[0]);s>=r&&s<=a&&(console.log(this.ordersbackup[n].buydate+">="+t),console.log(this.ordersbackup[n].buydate+"<="+e),this.orders.push(this.ordersbackup[n]),this.spending+=this.ordersbackup[n].totPrice)}},searchID:function(t){var e=[];this.orders=this.ordersbackup,t=l()(t);for(var r=0;r<this.orders.length;r++)if(this.orders[r].id===t)return e.push(this.orders[r]),void(this.orders=e)},calsum:function(){for(var t=0,e=0;e<this.orders.length;e++)t+=this.orders[e].totPrice;return t},showall:function(){this.searched=!1,this.orders=this.ordersbackup},getDate:function(){var t=function(t){return t<10?"0"+t:t},e=new Date,r=e.getFullYear(),a=t(e.getMonth()+1),n=t(e.getDate());return"".concat(n,"/").concat(a,"/").concat(r)}}},d=c,u=r("2877"),h=Object(u["a"])(d,a,n,!1,null,null,null);e["default"]=h.exports},"1c01":function(t,e,r){var a=r("a7d3"),n=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},f499:function(t,e,r){t.exports=r("1c01")}}]);
//# sourceMappingURL=chunk-b8a4c000.147098c2.js.map