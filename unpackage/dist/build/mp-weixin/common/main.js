(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"43ed":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("0f97")),i=(r(n("de71")),n("cfc7")),a={onLaunch:function(){this.initApp()},methods:{initApp:function(){this.initConfig()},initConfig:function(){this.globalData.config=o.default},checkLogin:function(){(0,i.getToken)()||this.$tab.reLaunch("/pages/login")}}};t.default=a},"5a96":function(e,t,n){},a62f:function(e,t,n){"use strict";(function(e,t){var r=n("4ea4"),o=r(n("9523"));n("7f78");var i=r(n("66fd")),a=r(n("c7f4")),c=r(n("de71")),f=r(n("963d"));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n("a38d"),e.__webpack_require_UNI_MP_PLUGIN__=n,i.default.use(f.default),i.default.config.productionTip=!1,i.default.prototype.$store=c.default,a.default.mpType="app";var l=new i.default(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a.default));t(l).$mount()}).call(this,n("bc2e")["default"],n("543d")["createApp"])},aef5:function(e,t,n){"use strict";n.r(t);var r=n("43ed"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},c7f4:function(e,t,n){"use strict";n.r(t);var r=n("aef5");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("ebe3");var i=n("f0c5"),a=Object(i["a"])(r["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=a.exports},ebe3:function(e,t,n){"use strict";var r=n("5a96"),o=n.n(r);o.a}},[["a62f","common/runtime","common/vendor"]]]);