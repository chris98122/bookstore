(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae612"],{"0a8c":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{attrs:{xs6:"",sm:"",md:""}},[this.$root.logged?a("div",[a("v-card",{staticClass:"px-3 pb-4"},[a("form",[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Bookname",required:""},model:{value:e.Bookname,callback:function(t){e.Bookname=t},expression:"Bookname"}}),a("v-text-field",{staticClass:"purple-input",attrs:{label:"author name",required:""},model:{value:e.authorname,callback:function(t){e.authorname=t},expression:"authorname"}}),a("v-text-field",{staticClass:"purple-input",attrs:{label:"stock",required:""},model:{value:e.stock,callback:function(t){e.stock=t},expression:"stock"}}),a("v-text-field",{staticClass:"purple-input",attrs:{label:"price",required:""},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),a("v-text-field",{staticClass:"purple-input",attrs:{label:"ISBN",required:""},model:{value:e.ISBN,callback:function(t){e.ISBN=t},expression:"ISBN"}}),a("v-btn",{attrs:{color:"blue"},on:{click:e.submit}},[e._v("submit")]),a("v-btn",{attrs:{color:"blue"},on:{click:e.clear}},[e._v("clear")]),a("vue-core-image-upload",{attrs:{crop:!1,data:e.data,"max-file-size":5242880,url:""},on:{imageuploaded:e.imageuploaded}})],1)])],1):e._e(),a("v-footer",{staticClass:"pa-3"},[a("v-spacer")],1)],1)],1)],1)},o=[],r=a("f603"),s={components:{"vue-core-image-upload":r["a"]},data:function(){return{src:"http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png",data:"",headers:[{sortable:!0,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!0,text:"Author",value:"author"},{sortable:!1,text:"Stock",value:"stock"},{sortable:!0,text:"ISBN",value:"ISBN"},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"Action",value:"action",align:"right"}]}},methods:{imageuploaded:function(e){0===e.errcode&&(this.src="http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png")}}},c=s,i=a("2877"),n=Object(i["a"])(c,l,o,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0ae612.ddefe8cb.js.map