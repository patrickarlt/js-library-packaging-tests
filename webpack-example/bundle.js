/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var lib = __webpack_require__(1);
	var dependencyInLib = __webpack_require__(4);

	console.log('Lib In Project:', lib);
	console.log('Nested Dependency of Lib In Project:', dependencyInLib);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _dependency = __webpack_require__(2);

	console.log(_dependency.value, 'in ./index');
	console.log(_dependency.nested, 'in ./index');

	exports.value = _dependency.value;
	exports.nested = _dependency.nested;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _nestedDependency = __webpack_require__(3);

	var _nestedDependency2 = _interopRequireDefault(_nestedDependency);

	var value = 'Dependency';

	console.log(value, 'in ./dependency');
	console.log(_nestedDependency2['default'], 'in ./dependency');

	exports.value = value;
	exports.nested = _nestedDependency2['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var value = 'Nested Dependency';

	console.log(value, 'in ./nested-dependency');

	exports['default'] = value;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var value = 'Nested Dependency';

	console.log(value, 'in ./nested-dependency');

	exports['default'] = value;
	module.exports = exports['default'];

/***/ }
/******/ ]);