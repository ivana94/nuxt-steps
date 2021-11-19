exports.ids = [2];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    formatLargeNum(num) {
      return num.toLocaleString();
    }

  }
});

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5761fcbf", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_style_index_0_id_cdf5a414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_style_index_0_id_cdf5a414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_style_index_0_id_cdf5a414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_style_index_0_id_cdf5a414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_style_index_0_id_cdf5a414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ul[data-v-cdf5a414]{flex-wrap:wrap}ul[data-v-cdf5a414],ul li[data-v-cdf5a414]{display:flex}ul li[data-v-cdf5a414]{justify-content:center;align-items:center;font-family:Monaco;width:15vw;height:10vh;list-style-type:none;box-shadow:0;transition:width 3s}ul li[data-v-cdf5a414]:hover{background-image:linear-gradient(90deg,red,orange,#ff0,green,#00f,indigo,violet);background-position:100% 50%;transition:all .3s;box-shadow:10px 10px 10px #000;-webkit-animation:rainbow-data-v-cdf5a414 3s ease-in-out infinite alternate;animation:rainbow-data-v-cdf5a414 3s ease-in-out infinite alternate}@-webkit-keyframes rainbow-data-v-cdf5a414{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}@keyframes rainbow-data-v-cdf5a414{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/weekly.vue?vue&type=template&id=cdf5a414&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul class=\"data-container\" data-v-cdf5a414>"+(_vm._ssrList((_vm.weeklyStepData),function(dailyStepData,i){return ("<li data-v-cdf5a414>"+_vm._ssrEscape("\n            #"+_vm._s(i + 1)+" || "+_vm._s(_vm.formatLargeNum(dailyStepData))+"\n        ")+"</li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/weekly.vue?vue&type=template&id=cdf5a414&scoped=true&

// EXTERNAL MODULE: ./mixins/output.js
var output = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/weekly.vue?vue&type=script&lang=js&
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

/* harmony default export */ var weeklyvue_type_script_lang_js_ = ({
  mixins: [output["a" /* default */]],

  data() {
    return {
      weeklyStepData: null
    };
  },

  async fetch() {
    const {
      weeklyStepData,
      weeklyDistanceData
    } = await this.$axios.$get("/weekly-step-data");
    this.weeklyStepData = weeklyStepData;
  }

});
// CONCATENATED MODULE: ./pages/weekly.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_weeklyvue_type_script_lang_js_ = (weeklyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/weekly.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_weeklyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cdf5a414",
  "285ae43a"
  
)

/* harmony default export */ var weekly = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=weekly.js.map