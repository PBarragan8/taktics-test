/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: error:0308010C:digital envelope routines::unsupported\n    at new Hash (node:internal/crypto/hash:103:19)\n    at Object.createHash (node:crypto:145:10)\n    at filename (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:94:23)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:120:39\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:3:103)\n    at _next (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:5:194)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:5:364\n    at new Promise (<anonymous>)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:5:97\n    at handleCache (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:159:18)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:204:18\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:3:103)\n    at _next (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:5:194)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:5:364\n    at new Promise (<anonymous>)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:5:97\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/cache.js:208:18\n    at Object.<anonymous> (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/index.js:191:24)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/babel-loader/lib/index.js:5:194)");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X Unsupported architecture (arm64) with Unsupported runtime (137)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v7.0.3\n    at module.exports (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/node-sass/lib/index.js:13:35)\n    at Module._compile (node:internal/modules/cjs/loader:1761:14)\n    at Object..js (node:internal/modules/cjs/loader:1893:10)\n    at Module.load (node:internal/modules/cjs/loader:1481:32)\n    at Module._load (node:internal/modules/cjs/loader:1300:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:328:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)\n    at Module.require (node:internal/modules/cjs/loader:1504:12)\n    at require (node:internal/modules/helpers:152:16)\n    at Object.<anonymous> (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (node:internal/modules/cjs/loader:1761:14)\n    at Object..js (node:internal/modules/cjs/loader:1893:10)\n    at Module.load (node:internal/modules/cjs/loader:1481:32)\n    at Module._load (node:internal/modules/cjs/loader:1300:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:328:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)\n    at Module.require (node:internal/modules/cjs/loader:1504:12)\n    at require (node:internal/modules/helpers:152:16)\n    at loadLoader (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:172:11\n    at loadLoader (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/loadLoader.js:32:11)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/Compilation.js:157:10)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/Compilation.js:460:10\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/NormalModuleFactory.js:243:5\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/tapable/lib/Tapable.js:272:13)\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/NormalModuleFactory.js:69:10\n    at /Users/patriciobarragan/taktics-advanced-test-monorepo/admin/node_modules/webpack/lib/NormalModuleFactory.js:196:7\n    at process.processTicksAndRejections (node:internal/process/task_queues:84:11)");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGExNjg5NWUyNjI1NTgxZTkyOTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBIiwiZmlsZSI6ImJ1bmRsZS44YTE2ODk1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhhMTY4OTVlMjYyNTU4MWU5MjkxIl0sInNvdXJjZVJvb3QiOiIifQ==