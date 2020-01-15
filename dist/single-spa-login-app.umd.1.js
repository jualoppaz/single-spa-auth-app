((typeof self !== 'undefined' ? self : this)["webpackJsonpsingle_spa_login_app"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpsingle_spa_login_app"] || []).push([[1],{

/***/ "a55b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25a8bdf2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=template&id=d20f3678&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_c('div',{staticClass:"container page"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6 offset-md-3 col-xs-12"},[_c('h1',{staticClass:"text-xs-center"},[_vm._v("Sign in")]),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit(_vm.user, _vm.password)}}},[_c('fieldset',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user),expression:"user"}],staticClass:"form-control form-control-lg",attrs:{"type":"text","placeholder":"User"},domProps:{"value":(_vm.user)},on:{"input":function($event){if($event.target.composing){ return; }_vm.user=$event.target.value}}})]),_c('fieldset',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-control form-control-lg",attrs:{"type":"password","placeholder":"Password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_c('button',{staticClass:"btn btn-lg btn-primary pull-xs-right"},[_vm._v(" Sign in ")])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Login.vue?vue&type=template&id=d20f3678&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  name: "loginView",
  data: function data() {
    return {
      user: null,
      password: null
    };
  },
  methods: {
    onSubmit: function onSubmit(user, password) {
      if (user === "admin" && password === "12345") {
        sessionStorage.setItem("user", JSON.stringify({
          username: user
        }));
        sessionStorage.setItem("token", "your auth token here");
        window.history.pushState(null, null, "/");
      } else {
        this.$toastr.e("Invalid credentials");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=single-spa-login-app.umd.1.js.map