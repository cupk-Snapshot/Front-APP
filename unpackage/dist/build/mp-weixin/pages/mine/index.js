(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/index"],{"0edd":function(n,t,e){"use strict";e.r(t);var a=e("cdef"),i=e("6152");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("8666");var u=e("f0c5"),f=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=f.exports},"2d0a":function(n,t,e){"use strict";(function(n){var a=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(e("a22a"));var i={data:function(){return{name:this.$store.state.user.name,version:getApp().globalData.config.appInfo.version}},computed:{avatar:function(){return this.$store.state.user.avatar},windowHeight:function(){return n.getSystemInfoSync().windowHeight-50}},methods:{handleToInfo:function(){this.$tab.navigateTo("/pages/mine/info/index")},handleToEditInfo:function(){this.$tab.navigateTo("/pages/mine/info/edit")},handleToSetting:function(){this.$tab.navigateTo("/pages/mine/setting/index")},handleToLogin:function(){this.$tab.reLaunch("/pages/login")},handleToAvatar:function(){this.$tab.navigateTo("/pages/mine/avatar/index")},handleLogout:function(){var n=this;this.$modal.confirm("确定注销并退出系统吗？").then((function(){n.$store.dispatch("LogOut").then((function(){n.$tab.reLaunch("/pages/index")}))}))},handleHelp:function(){this.$tab.navigateTo("/pages/mine/help/index")},handleAbout:function(){this.$tab.navigateTo("/pages/mine/about/index")},handleJiaoLiuQun:function(){this.$modal.showToast("QQ群：133713780")},handleBuilding:function(){this.$modal.showToast("模块建设中~")}}};t.default=i}).call(this,e("543d")["default"])},"4ee9":function(n,t,e){},6152:function(n,t,e){"use strict";e.r(t);var a=e("2d0a"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},8666:function(n,t,e){"use strict";var a=e("4ee9"),i=e.n(a);i.a},cdef:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var a=function(){var n=this.$createElement;this._self._c},i=[]},f36f:function(n,t,e){"use strict";(function(n,t){var a=e("4ea4");e("7f78");a(e("66fd"));var i=a(e("0edd"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])}},[["f36f","common/runtime","common/vendor"]]]);