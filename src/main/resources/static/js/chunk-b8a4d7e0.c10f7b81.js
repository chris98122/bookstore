(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a4d7e0"],{1253:function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs4:""}}),a("v-flex",{attrs:{xs6:""}},[a("h3",{staticClass:"display-3"},[t._v(t._s(this.$route.params.name))]),a("p",{staticClass:"body-1"},[t._v(t._s(this.$route.params.author))]),a("p",{staticClass:"body-1"},[t._v("stock:"+t._s(this.$route.params.stock))]),a("p",{staticClass:"body-1"},[t._v("ISBN:"+t._s(this.$route.params.isbn))]),a("p",{staticClass:"body-1"},[t._v("$"+t._s(this.$route.params.price))]),a("v-btn",{staticClass:"v-btn",attrs:{color:"error"},on:{click:function(s){return t.move(this.$route.params.id)}}},[t._v("\n          Move in cart\n          "),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-cart")])],1)],1),a("v-flex",{attrs:{xs4:""}},[a("v-text",[t._v(t._s(this.$route.params.detail))])],1)],1)],1)},r=[],n=a("f499"),e=a.n(n),i={data:function(){return{publicPath:"/"}},mounted:function(){console.log(this.$route.params)},method:{move:function(t){var s="http://localhost:8080/cart_movein";console.log(t),this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:s,data:this.$qs.stringify({bid:t})}).then(function(t){alert(t.data)}).catch(function(t){e()(t),console.log(t)})}}},c=i,l=a("2877"),u=Object(l["a"])(c,o,r,!1,null,null,null);s["default"]=u.exports},"1c01":function(t,s,a){var o=a("a7d3"),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},f499:function(t,s,a){t.exports=a("1c01")}}]);
//# sourceMappingURL=chunk-b8a4d7e0.c10f7b81.js.map