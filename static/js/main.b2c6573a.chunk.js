(this["webpackJsonpfunny-calc"]=this["webpackJsonpfunny-calc"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_obite_Documents_coding_funny_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_obite_Documents_coding_funny_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_calculator_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_calculator_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_calculator_scss__WEBPACK_IMPORTED_MODULE_3__),_keypad__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),_components_display__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),Calculator=function Calculator(props){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2__.useState([]),_React$useState2=Object(C_Users_obite_Documents_coding_funny_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState,2),currentInput=_React$useState2[0],setCurrentInput=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_2__.useState(),_React$useState4=Object(C_Users_obite_Documents_coding_funny_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState3,2),result=_React$useState4[0],setResult=_React$useState4[1],onButtonClicked=function(e){if(isNaN(e))switch(e){case"C":return setCurrentInput([]),void setResult(void 0);case".":return handleDecimal(e),void setResult(void 0);case"=":return void calculate();case"+":case"-":case"*":case"/":return appendOperator(e),void setResult(void 0);default:return}"0"===e&&!currentInput.length||"0"===e&&1===currentInput.length&&"0"===currentInput[0]||joinNumber(e)},calculate=function calculate(){setResult(eval(currentInput.join(""))),setCurrentInput([eval(currentInput.join("")).toString()])},handleDecimal=function(e){var t=Object(C_Users_obite_Documents_coding_funny_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(currentInput),n=t[t.length-1];if(!n||!n.includes("."))if(t.length&&!isNaN(n)){var _=n+e;t.pop(),setCurrentInput(t.concat(_))}else setCurrentInput(t.concat("0."))},joinNumber=function(e){var t=Object(C_Users_obite_Documents_coding_funny_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(currentInput),n=t[t.length-1];if(isNaN(n))setCurrentInput(t.concat(e));else{var _=n+e;t.pop(),setCurrentInput(t.concat(_))}},appendOperator=function(e){var t=Object(C_Users_obite_Documents_coding_funny_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(currentInput),n=t[t.length-1],_=t[t.length-2];if(n&&"."===n.charAt(n.length-1)){var a=n.slice(0,-1);t.pop(),t.push(a)}if(n!==e&&(t.length||"-"===e)){if(1!==t.length||!isNaN(n))return"-"===n&&isNaN(_)?(t.pop(),t.pop(),void setCurrentInput(t.concat(e))):isNaN(n)&&"-"!==e?(t.pop(),void setCurrentInput(t.concat(e))):void setCurrentInput(t.concat(e));if("-"===e&&"-"===n)return;if("+"===e){if("+"===n)return;if("-"===n)return t.pop(),void setCurrentInput(t)}}};return react__WEBPACK_IMPORTED_MODULE_2__.createElement("main",{className:"calculator__container"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_display__WEBPACK_IMPORTED_MODULE_5__.a,{input:result?result.toString():0===currentInput.length?void 0:currentInput[currentInput.length-1],formula:currentInput.join("")}),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_keypad__WEBPACK_IMPORTED_MODULE_4__.a,{onButtonClicked:onButtonClicked}))};__webpack_exports__.a=Calculator},function(e,t,n){"use strict";var _=n(0);n(18);t.a=function(e){var t=e.input,n=void 0===t?"0":t,a=e.formula,r=void 0===a?"":a;return _.createElement("section",{className:"calculator__display"},_.createElement("div",{className:"calculator__display--formula"},r),_.createElement("div",{id:"display",className:"calculator__display--result"},n))}},function(e,t,n){"use strict";var _=n(0),a=(n(16),n(17),function(e){return _.createElement("button",{id:e.id,className:"button",onClick:function(t){e.onButtonClicked(t.currentTarget.value)},value:e.value.toString()},e.value)});t.a=function(e){var t=function(t){e.onButtonClicked(t)};return _.createElement("section",{className:"buttons__container"},_.createElement(a,{id:"seven",value:7,onButtonClicked:t}),_.createElement(a,{id:"eight",value:8,onButtonClicked:t}),_.createElement(a,{id:"nine",value:9,onButtonClicked:t}),_.createElement("br",null),_.createElement(a,{id:"four",value:4,onButtonClicked:t}),_.createElement(a,{id:"five",value:5,onButtonClicked:t}),_.createElement(a,{id:"six",value:6,onButtonClicked:t}),_.createElement("br",null),_.createElement(a,{id:"one",value:1,onButtonClicked:t}),_.createElement(a,{id:"two",value:2,onButtonClicked:t}),_.createElement(a,{id:"three",value:3,onButtonClicked:t}),_.createElement("br",null),_.createElement(a,{id:"zero",value:0,onButtonClicked:t}),_.createElement(a,{id:"decimal",value:".",onButtonClicked:t}),_.createElement(a,{id:"equals",value:"=",onButtonClicked:t}),_.createElement("br",null),_.createElement(a,{id:"clear",value:"C",onButtonClicked:t}),_.createElement(a,{id:"divide",value:"/",onButtonClicked:t}),_.createElement(a,{id:"multiply",value:"*",onButtonClicked:t}),_.createElement(a,{id:"subtract",value:"-",onButtonClicked:t}),_.createElement(a,{id:"add",value:"+",onButtonClicked:t}))}},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var _=n(0),a=n.n(_),r=n(4),c=n.n(r),o=(n(13),n(14),n(5)),u=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(o.a,null)))},l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/funny-calc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/funny-calc","/service-worker.js");l?(!function(e,t){fetch(e).then((function(n){var _=n.headers.get("content-type");404===n.status||null!=_&&-1===_.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.b2c6573a.chunk.js.map