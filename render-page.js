(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/opt/buildhome/repo/node_modules/@reach/router/index.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/es6.array.sort.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/es7.promise.finally.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/es7.symbol.async-iterator.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/web.dom.iterable.js"), require("crypto"), require("fs"), require("/opt/buildhome/repo/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/opt/buildhome/repo/node_modules/@reach/router/index.js", "/opt/buildhome/repo/node_modules/core-js/modules/es6.array.sort.js", "/opt/buildhome/repo/node_modules/core-js/modules/es7.promise.finally.js", "/opt/buildhome/repo/node_modules/core-js/modules/es7.symbol.async-iterator.js", "/opt/buildhome/repo/node_modules/core-js/modules/web.dom.iterable.js", "crypto", "fs", "/opt/buildhome/repo/node_modules/lodash/lodash.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/opt/buildhome/repo/node_modules/@reach/router/index.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/es6.array.sort.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/es7.promise.finally.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/es7.symbol.async-iterator.js"), require("/opt/buildhome/repo/node_modules/core-js/modules/web.dom.iterable.js"), require("crypto"), require("fs"), require("/opt/buildhome/repo/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/opt/buildhome/repo/node_modules/@reach/router/index.js"], root["/opt/buildhome/repo/node_modules/core-js/modules/es6.array.sort.js"], root["/opt/buildhome/repo/node_modules/core-js/modules/es7.promise.finally.js"], root["/opt/buildhome/repo/node_modules/core-js/modules/es7.symbol.async-iterator.js"], root["/opt/buildhome/repo/node_modules/core-js/modules/web.dom.iterable.js"], root["crypto"], root["fs"], root["/opt/buildhome/repo/node_modules/lodash/lodash.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_promise_finally__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_symbol_async_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-remark-images/gatsby-ssr */ "./node_modules/gatsby-remark-images/gatsby-ssr.js"),options:{"plugins":[],"maxWidth":2048}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript",{key:"noscript",id:"gatsby-noscript"},"This app works best with JavaScript enabled."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
let matchPaths=[];const trimPathname=rawPathname=>{let pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
let trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);for(const{matchPath,path}of matchPaths){if(Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["match"])(matchPath,trimmedPathname)){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);}}return null;};/**
 * Clean a url and converts /index.html => /
 * E.g `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;const StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "core-js/modules/es7.symbol.async-iterator");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "core-js/modules/es7.promise.finally");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};const doFetch=(url,method=`GET`)=>new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.withCredentials=true;req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});const loadPageDataJson=loadObj=>{const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return doFetch(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:`success`,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:`failure`});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return loadPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:`error`});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is a failure.
return Object.assign(loadObj,{status:`error`});});};const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: `success` || `error`,
//   payload: PageResources, // undefined if `error`
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["setMatchPaths"])(matchPaths);}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["cleanPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return loadPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["cleanPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlight=this.loadPageDataJson(pagePath).then(result=>{if(result.notFound){// if request was a 404, we should fallback to findMatchPath.
let foundMatchPatch=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["findMatchPath"])(pagePath);if(foundMatchPatch&&foundMatchPatch!==pagePath){return this.loadPage(foundMatchPatch).then(pageResources=>{this.pageDb.set(pagePath,this.pageDb.get(foundMatchPatch));return pageResources;});}}if(result.status===`error`){return{status:`error`};}if(result.status===`failure`){// throw an error so error trackers can pick this up
throw new Error(`404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/`);}const pageData=result.payload;const{componentChunkName}=pageData;return this.loadComponent(componentChunkName).then(component=>{const finalResult={createdAt:new Date()};let pageResources;if(!component){finalResult.status=`error`;}else{finalResult.status=`success`;if(result.notFound===true){finalResult.notFound=true;}pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].emit(`onPostLoadPageResources`,{page:pageResources,pageResources});}this.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});}).finally(()=>{this.inFlightDb.delete(pagePath);});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["cleanPath"])(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["cleanPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(pageData=>{if(!pageData){const matchPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["findMatchPath"])(realPath);if(matchPath&&matchPath!==realPath){return this.prefetch(matchPath);}}if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){throw new Error(`doPrefetch not implemented`);}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["cleanPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_5__["cleanPath"])(rawPath);const page=this.pageDb.get(pagePath);return page&&page.notFound===true;}}const createComponentUrls=componentChunkName=>window.___chunkMapping[componentChunkName].map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]().then(preferDefault);super(loadComponent,matchPaths);}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_3__["default"])(pageDataUrl).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath)).then(result=>{if(result.status!==`success`){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_3__["default"])).then(()=>pageData);});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath)};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.withCredentials=true;req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "core-js/modules/es7.symbol.async-iterator");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy}=__webpack_require__(/*! lodash */ "lodash");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getPageDataFile=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return join(process.cwd(),`public`,pageDataPath);};const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{if(Array.isArray(components)){// remove falsy items
return components.filter(val=>Array.isArray(val)?val.length>0:val);}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageDataRaw=fs.readFileSync(getPageDataFile(pagePath));const pageData=JSON.parse(pageDataRaw);const pageDataUrl=getPageDataUrl(pagePath);const{componentChunkName}=pageData;class RouteHandler extends React.Component{render(){const props={...this.props,...pageData.result,// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=createElement(ServerLocation,{url:`${""}${pagePath}`},createElement(Router,{id:`gatsby-focus-wrapper`,baseuri:`${""}`},createElement(RouteHandler,{path:`/*`})));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);let namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=merge(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"use-credentials"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});const webpackCompilationHash=pageData.webpackCompilationHash;// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";window.webpackCompilationHash="${webpackCompilationHash}";/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
const bodyScripts=scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return React.createElement("script",{key:scriptPath,src:scriptPath,async:true});});(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,_toConsumableArray(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["default"] = ((str,prefix=``)=>{if(str.substr(0,prefix.length)===prefix)return str.slice(prefix.length);return str;});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-templates-index-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/index-page.js */ "./src/templates/index-page.js"))),"component---src-templates-blog-post-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/blog-post.js */ "./src/templates/blog-post.js"))),"component---src-templates-product-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/product-page.js */ "./src/templates/product-page.js"))),"component---src-templates-about-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/about-page.js */ "./src/templates/about-page.js"))),"component---src-templates-tags-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/tags.js */ "./src/templates/tags.js"))),"component---src-pages-404-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),"component---src-pages-blog-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/blog/index.js */ "./src/pages/blog/index.js"))),"component---src-pages-contact-examples-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/examples.js */ "./src/pages/contact/examples.js"))),"component---src-pages-contact-file-upload-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/file-upload.js */ "./src/pages/contact/file-upload.js"))),"component---src-pages-contact-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/index.js */ "./src/pages/contact/index.js"))),"component---src-pages-contact-thanks-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/thanks.js */ "./src/pages/contact/thanks.js"))),"component---src-pages-tags-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/tags/index.js */ "./src/pages/tags/index.js")))};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.default=void 0;var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string}[], fixed: {src: string}[]}} args
 * @return {string}
 */var getImageSrcKey=function getImageSrcKey(_ref){var fluid=_ref.fluid,fixed=_ref.fixed;var data=fluid&&fluid[0]||fixed&&fixed[0];return data.src;};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);return imageCache[src]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);imageCache[src]=true;};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref2){var src=_ref2.src,srcSet=_ref2.srcSet,srcSetWebp=_ref2.srcSetWebp,media=_ref2.media,sizes=_ref2.sizes;return _react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return withMedia.concat(without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,media=_ref3.media,tracedSVG=_ref3.tracedSVG;return _react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,base64=_ref4.base64;return _react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref5,isWebp){var srcSet=_ref5.srcSet,srcSetWebp=_ref5.srcSetWebp,media=_ref5.media,sizes=_ref5.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=function Placeholder(_ref6){var src=_ref6.src,imageVariants=_ref6.imageVariants,generateSources=_ref6.generateSources,spreadProps=_ref6.spreadProps;var baseImage=_react.default.createElement(Img,(0,_extends2.default)({src:src},spreadProps));return imageVariants.length>1?_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;};var Img=_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return _react.default.createElement("img",(0,_extends2.default)({sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.addNoScript=!(props.critical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!props.critical&&!_this.seenBefore;var isVisible=props.critical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn};_this.imageRef=_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(_this)));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(_this)));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.props.critical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}};// Specific to IntersectionObserver based lazy-load support
_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){return _this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
imgCached:!!_this2.imageRef.current.currentSrc});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName};if(fluid){var imageVariants=fluid;var image=imageVariants[0];return _react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden"},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},_react.default.createElement(Tag,{style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&_react.default.createElement(Tag,{title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&_react.default.createElement(Placeholder,{src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&_react.default.createElement(Placeholder,{src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react.default.createElement("picture",null,generateImageSources(imageVariants),_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var _imageVariants=fixed;var _image=_imageVariants[0];var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_image.width,height:_image.height},style);if(style.display==="inherit"){delete divStyle.display;}return _react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(_image.srcSet)},bgColor&&_react.default.createElement(Tag,{title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:_image.width,opacity:!this.state.imgLoaded?1:0,height:_image.height},shouldFadeIn&&delayHideStyle)}),_image.base64&&_react.default.createElement(Placeholder,{src:_image.base64,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateBase64Sources}),_image.tracedSVG&&_react.default.createElement(Placeholder,{src:_image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react.default.createElement("picture",null,generateImageSources(_imageVariants),_react.default.createElement(Img,{alt:alt,title:title,width:_image.width,height:_image.height,sizes:_image.sizes,src:_image.src,crossOrigin:this.props.crossOrigin,srcSet:_image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},_image,{imageVariants:_imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)]),fluid:_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)]),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-remark-images/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-remark-images/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.DEFAULT_OPTIONS={maxWidth:650,wrapperStyle:"",backgroundColor:"white",linkImagesToOriginal:true,showCaptions:false,withWebp:false,tracedSVG:false};exports.imageClass="gatsby-resp-image-image";exports.imageWrapperClass="gatsby-resp-image-wrapper";exports.imageBackgroundClass="gatsby-resp-image-background-image";

/***/ }),

/***/ "./node_modules/gatsby-remark-images/gatsby-ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-remark-images/gatsby-ssr.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _require=__webpack_require__(/*! ./constants */ "./node_modules/gatsby-remark-images/constants.js"),imageClass=_require.imageClass;exports.onRenderBody=function(_ref){var setHeadComponents=_ref.setHeadComponents;var style=("\n  ."+imageClass+" {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    vertical-align: middle;\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: transparent;\n  }").replace(/\s*\n\s*/g,"").replace(/: /g,":").replace(/ \{/g,"{");setHeadComponents([_react.default.createElement("style",{type:"text/css",key:"gatsby-remark-images-styles"},style)]);};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = {"name":"gatsby","description":"Blazing fast modern site generator for React","version":"2.13.52","author":"Kyle Mathews <mathews.kyle@gmail.com>","bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@hapi/joi":"^15.0.0","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","address":"1.0.3","autoprefixer":"^9.6.0","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.7.2","babel-preset-gatsby":"^0.2.8","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","cors":"^2.8.5","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^3.0.3","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.7.1","fast-levenshtein":"^2.0.6","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.7.28","gatsby-core-utils":"^1.0.4","gatsby-graphiql-explorer":"^0.2.3","gatsby-link":"^2.2.4","gatsby-plugin-page-creator":"^2.1.5","gatsby-react-router-scroll":"^2.1.3","gatsby-telemetry":"^1.1.11","glob":"^7.1.1","got":"8.0.0","graphql":"^14.1.1","graphql-compose":"^6.3.2","graphql-playground-middleware-express":"^1.7.10","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","lodash":"^4.17.14","lokijs":"^1.5.7","md5":"^2.2.1","md5-file":"^3.1.1","micromatch":"^3.1.10","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.3","react-error-overlay":"^3.0.0","react-hot-loader":"^4.12.5","redux":"^4.0.0","redux-thunk":"^2.3.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"1.2.4","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.2.2","cross-env":"^5.1.4","documentation":"^10.1.0","react":"^16.4.2","react-dom":"^16.4.2","rimraf":"^2.6.1","xhr-mock":"^2.4.1"},"engines":{"node":">=8.0.0"},"files":["apis.json","cache-dir","dist","graphql.js","index.d.ts","utils.js"],"homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","postbuild":"node scripts/output-api-file.js","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:src":"babel src --out-dir dist --source-maps --verbose --ignore **/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","yargs":{"boolean-negation":false},"gitHead":"c1960a260d3fbd5b6f57fb29317693d45a0686d3"};

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/lib/rng.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = __webpack_require__(/*! crypto */ "crypto");

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./public/static/d/1877296825.json":
/*!*****************************************!*\
  !*** ./public/static/d/1877296825.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Gatsby + Netlify CMS Starter","description":"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution."}}}};

/***/ }),

/***/ "./public/static/d/3722544792.json":
/*!*****************************************!*\
  !*** ./public/static/d/3722544792.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"hj,hjv","id":"fc309c8f-a2b3-5f28-ad0d-aa5a48d4cf73","fields":{"slug":"/blog/2019-08-08-samsdgjk/"},"frontmatter":{"title":"samsdgjk","templateKey":"blog-post","date":"August 08, 2019","featuredpost":true,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAC4jAAAuIwF4pT92AAABiklEQVQoz62QTUsCYRDHHza1Tc11Zdf2tfASbCq+rFIeBAMlJInM6OILGCke9Av4JTz4CcztVhAPHevQZ+pQMofp6Sk8dHbgBzPM8J+ZPyEbDFVVCcm57rWhyE+aL7iw9rSlZemepumeZVleIpHwbNvmsGFP13WOaZocli81TVuy/kO1WnW4qilJTySVxa1uGVnJ2dkRsVKpYCaT4aTTaazX6+j3+9cz/3Fd95YLGqKwIGdtJB/4WX69gYtjAsQXhEbjHGKxGLAREEURFEWBaDTK62QyCWwRzxlfP4L5fL7DBW2/cE+u2njyvvp6uzuFeomAtX8I3W4HxuMxjEYj6Pf7MBgMYD6fQ6/Xg+FwCLPZDKbT6U+9kiQJHcf5FdyLRh6DRy5eJo8x9Hf+diDA3ywUClgqlbBYLOJkMsFWq4XsOoxEIsh847Y0m00UBAFzudzvy1m30LYU5XVXlp5V26QHtkGZ0ZS9R8Ph8BrDMCgT4sTjccrsoKFQiMqyTJn4S61WS5FNB1tMvgGQy5VRug/iSQAAAABJRU5ErkJggg==","aspectRatio":2.584,"src":"/static/db9b21a1c41f3dcd9731e1e7acfdbb57/c0382/badge.png","srcSet":"/static/db9b21a1c41f3dcd9731e1e7acfdbb57/5dcac/badge.png 30w,\n/static/db9b21a1c41f3dcd9731e1e7acfdbb57/6919b/badge.png 60w,\n/static/db9b21a1c41f3dcd9731e1e7acfdbb57/c0382/badge.png 120w,\n/static/db9b21a1c41f3dcd9731e1e7acfdbb57/8fd0d/badge.png 180w,\n/static/db9b21a1c41f3dcd9731e1e7acfdbb57/cca1d/badge.png 240w,\n/static/db9b21a1c41f3dcd9731e1e7acfdbb57/13664/badge.png 646w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}},{"node":{"excerpt":"This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the Illinois Institute of Technology said that the Chemex…","id":"36f07aaf-26d3-5276-baf8-33319ff94875","fields":{"slug":"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},"frontmatter":{"title":"A beginners’ guide to brewing with Chemex","templateKey":"blog-post","date":"January 04, 2017","featuredpost":false,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABpy06iknQJ//EABsQAQACAgMAAAAAAAAAAAAAAAEAAhMUAxIi/9oACAEBAAEFAhB81mYm3yVdvs5C0//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAwEBPwGtP//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwGU4//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEDEBIhIpH/2gAIAQEABj8CirJN6Vx4dsaZew//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUGBkf/aAAgBAQABPyGnnUVLVKmCPWzyddqLgpGmOUH2f//aAAwDAQACAAMAAAAQ+x//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EE+FH//EABYRAQEBAAAAAAAAAAAAAAAAAAEQQf/aAAgBAgEBPxBGw//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQVFxofD/2gAIAQEAAT8Qvh6ud7uFSxhZebuBUFDgtqCGHyQPqp2EUtnjceyT84n/2Q==","aspectRatio":1.497659906396256,"src":"/static/ad53658d229612b8d23d0307be253419/bb41f/chemex.jpg","srcSet":"/static/ad53658d229612b8d23d0307be253419/d3f3e/chemex.jpg 30w,\n/static/ad53658d229612b8d23d0307be253419/9cab2/chemex.jpg 60w,\n/static/ad53658d229612b8d23d0307be253419/bb41f/chemex.jpg 120w,\n/static/ad53658d229612b8d23d0307be253419/eb15c/chemex.jpg 180w,\n/static/ad53658d229612b8d23d0307be253419/53d18/chemex.jpg 240w,\n/static/ad53658d229612b8d23d0307be253419/0979f/chemex.jpg 1920w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}},{"node":{"excerpt":"We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick. Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas…","id":"6955d52f-b4c8-50f0-8d61-7341bd161b8f","fields":{"slug":"/blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},"frontmatter":{"title":"Just in: small batch of Jamaican Blue Mountain in store next week","templateKey":"blog-post","date":"January 04, 2017","featuredpost":true,"featuredimage":null}}},{"node":{"excerpt":"The SCAA updated the wheel to reflect the finer nuances needed to describe flavors more precisely. The new descriptions are more detailed and hence allow cuppers to distinguish between more flavors. While this is going to be a big change for professional coffee tasters, it means a lot to you as a consumer as well. We’ll explain how the wheel came to be, how pros use it and what the flavors…","id":"78843388-b3e4-5b36-ab91-64d18336be6a","fields":{"slug":"/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},"frontmatter":{"title":"Making sense of the SCAA’s new Flavor Wheel","templateKey":"blog-post","date":"December 17, 2016","featuredpost":false,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBP/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAcAgztrnmf/EABoQAQEAAgMAAAAAAAAAAAAAAAIBAxIAEST/2gAIAQEAAQUCOboqHTIdUh5lmtNdXP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwFOFP/EABYRAQEBAAAAAAAAAAAAAAAAAAARMf/aAAgBAgEBPwHUf//EABsQAAICAwEAAAAAAAAAAAAAAAABESECIjES/9oACAEBAAY/AtYpk5dbtkUhZy9nw80Wf//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQWFx/9oACAEBAAE/IV1BgTaSgFuId8nhG6lGXUPEL0B8jo7hU//aAAwDAQACAAMAAAAQHB//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxAI/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAWH/2gAIAQIBAT8Qwp//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/EGGKPrWWwixsQJLKfOx7wyKn0u8yafIoHvQruRvEFKaayGEIBWYcn//Z","aspectRatio":1.5036710719530102,"src":"/static/19a6d5ab24bbc3b3531f11ecab349683/bb41f/flavor_wheel.jpg","srcSet":"/static/19a6d5ab24bbc3b3531f11ecab349683/d3f3e/flavor_wheel.jpg 30w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/9cab2/flavor_wheel.jpg 60w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/bb41f/flavor_wheel.jpg 120w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/eb15c/flavor_wheel.jpg 180w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/53d18/flavor_wheel.jpg 240w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/6a8a9/flavor_wheel.jpg 1024w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}}]}}};

/***/ }),

/***/ "./src/components/BlogRoll.js":
/*!************************************!*\
  !*** ./src/components/BlogRoll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3722544792_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/3722544792.json */ "./public/static/d/3722544792.json");
var _public_static_d_3722544792_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/3722544792.json */ "./public/static/d/3722544792.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
class BlogRoll extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{render(){const{data}=this.props;const{edges:posts}=data.allMarkdownRemark;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"columns is-multiline"},posts&&posts.map(({node:post})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"is-parent column is-6",key:post.id},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article",{className:`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost?'is-featured':''}`},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header",null,post.frontmatter.featuredimage?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"featured-thumbnail"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_4__["default"],{imageInfo:{image:post.frontmatter.featuredimage,alt:`featured image thumbnail for post ${post.title}`}})):null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"post-meta"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{className:"title has-text-primary is-size-4",to:post.fields.slug},post.frontmatter.title),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null," \u2022 "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"subtitle is-size-5 is-block"},post.frontmatter.date))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,post.excerpt,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{className:"button",to:post.fields.slug},"Keep Reading \u2192"))))));}}BlogRoll.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({allMarkdownRemark:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({edges:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array})})};/* harmony default export */ __webpack_exports__["default"] = (()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"],{query:"3722544792",render:(data,count)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlogRoll,{data:data,count:count}),data:_public_static_d_3722544792_json__WEBPACK_IMPORTED_MODULE_0__}));

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: HTMLContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLContent", function() { return HTMLContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
const HTMLContent=({content,className})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:className,dangerouslySetInnerHTML:{__html:content}});const Content=({content,className})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:className},content);Content.propTypes={content:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string};HTMLContent.propTypes=Content.propTypes;/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Features.js":
/*!************************************!*\
  !*** ./src/components/Features.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
const FeatureGrid=({gridItems})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns is-multiline"},gridItems.map(item=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:item.text,className:"column is-6"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"has-text-centered"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:'240px',display:'inline-block'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_2__["default"],{imageInfo:item}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,item.text)))));FeatureGrid.propTypes={gridItems:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({image:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),text:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string}))};/* harmony default export */ __webpack_exports__["default"] = (FeatureGrid);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/social/facebook.svg */ "./src/img/social/facebook.svg");
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/social/instagram.svg */ "./src/img/social/instagram.svg");
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/social/twitter.svg */ "./src/img/social/twitter.svg");
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_social_vimeo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/social/vimeo.svg */ "./src/img/social/vimeo.svg");
/* harmony import */ var _img_social_vimeo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_social_vimeo_svg__WEBPACK_IMPORTED_MODULE_6__);
const Footer=class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer",{className:"footer has-background-black has-text-white-ter"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content has-text-centered"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_img_logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,alt:"Kaldi",style:{width:'14em',height:'10em'}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content has-text-centered has-background-black has-text-white-ter"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container has-background-black has-text-white-ter"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-4"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"menu"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"menu-list"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/",className:"navbar-item"},"Home")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/about"},"About")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/products"},"Products")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/contact/examples"},"Form Examples")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"navbar-item",href:"/admin/",target:"_blank",rel:"noopener noreferrer"},"Admin"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-4"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"menu-list"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/blog"},"Latest Stories")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/contact"},"Contact"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-4 social"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{title:"facebook",href:"https://facebook.com"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"Facebook",style:{width:'1em',height:'1em'}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{title:"twitter",href:"https://twitter.com"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"fas fa-lg",src:_img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"Twitter",style:{width:'1em',height:'1em'}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{title:"instagram",href:"https://instagram.com"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4___default.a,alt:"Instagram",style:{width:'1em',height:'1em'}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{title:"vimeo",href:"https://vimeo.com"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_img_social_vimeo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,alt:"Vimeo",style:{width:'1em',height:'1em'}})))))));}};/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all.sass */ "./src/components/all.sass");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_all_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SiteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteMetadata */ "./src/components/SiteMetadata.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
const TemplateWrapper=({children})=>{const{title,description}=Object(_SiteMetadata__WEBPACK_IMPORTED_MODULE_5__["default"])();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",{lang:"en"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:description}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:`${Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])("/")}img/apple-touch-icon.png`}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"icon",type:"image/png",href:`${Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])("/")}img/favicon-32x32.png`,sizes:"32x32"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"icon",type:"image/png",href:`${Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])("/")}img/favicon-16x16.png`,sizes:"16x16"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"mask-icon",href:`${Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])("/")}img/safari-pinned-tab.svg`,color:"#ff4400"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"theme-color",content:"#fff"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:type",content:"business.business"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:title}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:url",content:"/"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:image",content:`${Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])("/")}img/og-image.jpg`})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"],null));};/* harmony default export */ __webpack_exports__["default"] = (TemplateWrapper);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/github-icon.svg */ "./src/img/github-icon.svg");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
var _temp;const Navbar=(_temp=class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(props){super(props);this.toggleHamburger=()=>{// toggle the active boolean in the state
this.setState({active:!this.state.active},// after state has been updated,
()=>{// set the class in state for the navbar accordingly
this.state.active?this.setState({navBarActiveClass:'is-active'}):this.setState({navBarActiveClass:''});});};this.state={active:false,navBarActiveClass:''};}render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"navbar-brand"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/",className:"navbar-item",title:"Logo"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_img_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"Kaldi",style:{width:'88px'}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:`navbar-burger burger ${this.state.navBarActiveClass}`,"data-target":"navMenu",onClick:()=>this.toggleHamburger()},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"navMenu",className:`navbar-menu ${this.state.navBarActiveClass}`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"navbar-start has-text-centered"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/about"},"About"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/products"},"Products"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/blog"},"Blog"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/contact"},"Contact"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:"navbar-item",to:"/contact/examples"},"Form Examples")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"navbar-end has-text-centered"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"navbar-item",href:"https://github.com/netlify-templates/gatsby-starter-netlify-cms",target:"_blank",rel:"noopener noreferrer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,alt:"Github"})))))));}},_temp);/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/PreviewCompatibleImage.js":
/*!**************************************************!*\
  !*** ./src/components/PreviewCompatibleImage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);
const PreviewCompatibleImage=({imageInfo})=>{const imageStyle={borderRadius:'5px'};const{alt='',childImageSharp,image}=imageInfo;if(!!image&&!!image.childImageSharp){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a,{style:imageStyle,fluid:image.childImageSharp.fluid,alt:alt});}if(!!childImageSharp){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a,{style:imageStyle,fluid:childImageSharp.fluid,alt:alt});}if(!!image&&typeof image==='string')return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:imageStyle,src:image,alt:alt});return null;};PreviewCompatibleImage.propTypes={imageInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({alt:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,childImageSharp:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,image:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object}).isRequired};/* harmony default export */ __webpack_exports__["default"] = (PreviewCompatibleImage);

/***/ }),

/***/ "./src/components/Pricing.js":
/*!***********************************!*\
  !*** ./src/components/Pricing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
const Pricing=({data})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},data.map(price=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:price.plan,className:"column"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"has-text-centered has-text-weight-semibold"},price.plan),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"is-size-1 has-text-weight-bold has-text-primary has-text-centered"},"$",price.price),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"has-text-weight-semibold"},price.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,price.items.map(item=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:item,className:"is-size-5"},item)))))));Pricing.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({plan:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,price:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),description:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,items:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array}))};/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./src/components/SiteMetadata.js":
/*!****************************************!*\
  !*** ./src/components/SiteMetadata.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1877296825_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1877296825.json */ "./public/static/d/1877296825.json");
var _public_static_d_1877296825_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1877296825.json */ "./public/static/d/1877296825.json", 1);
const useSiteMetadata=()=>{const{site}=_public_static_d_1877296825_json__WEBPACK_IMPORTED_MODULE_0__.data;return site.siteMetadata;};/* harmony default export */ __webpack_exports__["default"] = (useSiteMetadata);

/***/ }),

/***/ "./src/components/Testimonials.js":
/*!****************************************!*\
  !*** ./src/components/Testimonials.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
const Testimonials=({testimonials})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,testimonials.map(testimonial=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article",{key:Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),className:"message"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"message-body"},testimonial.quote,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite",null," \u2013 ",testimonial.author)))));Testimonials.propTypes={testimonials:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({quote:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,author:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string}))};/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ "./src/components/all.sass":
/*!*********************************!*\
  !*** ./src/components/all.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/img/github-icon.svg":
/*!*********************************!*\
  !*** ./src/img/github-icon.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTA5IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpmaWdtYT0iaHR0cDovL3d3dy5maWdtYS5jb20vZmlnbWEvbnMiPjx0aXRsZT5Mb2dvPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3MCkiIGZpZ21hOnR5cGU9ImNhbnZhcyI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIgZmlnbWE6dHlwZT0idmVjdG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcwKSIgZmlsbD0iI2Y0MCI+PHVzZSB4bGluazpocmVmPSIjYiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsIi8+PHVzZSB4bGluazpocmVmPSIjZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2YiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMjIuNzM1IDIzLjE3MWMuMjgzLjMyMy4wNTMuODI5LS4zNzYuODI5aC01LjkwN2MtLjI4NSAwLS41NTYtLjEyMS0uNzQ1LS4zMzNsLTkuNDE0LTEwLjUyNnYxMC4zNmMwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjNjMC0uMjc2LjIyNC0uNS41LS41aDUuMjkzYy4yNzYgMCAuNS4yMjQuNS41djkuODE1bDkuMTQxLTkuOTljLjE5LS4yMDcuNDU3LS4zMjUuNzM4LS4zMjVoNS43NjJjLjQzNyAwIC42NjQuNTIxLjM2Ni44NDFsLTkuODUxIDEwLjU2MyAxMC4yODcgMTEuNzY3eiIvPjxwYXRoIGlkPSJjIiBkPSJNNDUuOTkxIDI0Yy0uMTk5IDAtLjM4LS4xMTgtLjQ1OS0uMzAxbC0yLjAyNC00LjY2OWgtMTAuNjdsLTIuMDI0IDQuNjY5Yy0uMDc5LjE4My0uMjU5LjMwMS0uNDU5LjMwMWgtNS4yMTJjLS4zNjYgMC0uNjA4LS4zODEtLjQ1My0uNzEybDEwLjc4Mi0yM2MuMDgyLS4xNzYuMjU5LS4yODguNDUzLS4yODhoNC4zNThjLjE5NCAwIC4zNy4xMTIuNDUzLjI4N2wxMC44MTUgMjNjLjE1Ni4zMzItLjA4Ni43MTMtLjQ1Mi43MTNoLTUuMTA4em0tMTEuMTM1LTkuNjY4aDYuNjM1bC0zLjMxNy03LjY5NC0zLjMxNyA3LjY5NHoiLz48cGF0aCBpZD0iZCIgZD0iTTU1LjUyNSAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYxOC40MjhoOS43NTljLjI3NiAwIC41LjIyNC41LjV2NC4wNzJjMCAuMjc2LS4yMjQuNS0uNS41aC0xNS41NTJ6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik03NS4yNzkuNWMwLS4yNzYuMjI0LS41LjUtLjVoOS4zMTVjMi42NjcgMCA0Ljk1OS40NzcgNi44NzQgMS40MyAxLjkzOC45NTMgMy40MiAyLjMzOCA0LjQ0NiA0LjE1MyAxLjAyNiAxLjc5MyAxLjUzOSAzLjkyNiAxLjUzOSA2LjQgMCAyLjQ5Ni0uNTEzIDQuNjUyLTEuNTM5IDYuNDY4LTEuMDAzIDEuNzkzLTIuNDc0IDMuMTY2LTQuNDEyIDQuMTE5LTEuOTE1Ljk1My00LjIxOCAxLjQzLTYuOTA4IDEuNDNoLTkuMzE1Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjN6bTkuMzcgMTguNDYyYzIuMzcxIDAgNC4xMzgtLjU3OSA1LjMwMS0xLjczNiAxLjE2My0xLjE1NyAxLjc0NC0yLjkwNSAxLjc0NC01LjI0MiAwLTIuMzM4LS41ODEtNC4wNzQtMS43NDQtNS4yMDktMS4xNjMtMS4xNTctMi45My0xLjczNi01LjMwMS0xLjczNmgtMy4wNzh2MTMuOTIzaDMuMDc4eiIvPjxwYXRoIGlkPSJmIiBkPSJNMTAyLjkxMyAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYyM2MwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzeiIvPjwvZGVmcz48L3N2Zz4K"

/***/ }),

/***/ "./src/img/social/facebook.svg":
/*!*************************************!*\
  !*** ./src/img/social/facebook.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="

/***/ }),

/***/ "./src/img/social/instagram.svg":
/*!**************************************!*\
  !*** ./src/img/social/instagram.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/img/social/twitter.svg":
/*!************************************!*\
  !*** ./src/img/social/twitter.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/img/social/vimeo.svg":
/*!**********************************!*\
  !*** ./src/img/social/vimeo.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VmltZW8gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk3NyA2LjQxNmMtLjEwNSAyLjMzOC0xLjczOSA1LjU0My00Ljg5NCA5LjYwOS0zLjI2OCA0LjI0Ny02LjAyNiA2LjM3LTguMjkgNi4zNy0xLjQwOSAwLTIuNTc4LTEuMjk0LTMuNTUzLTMuODgxTDUuMzIyIDExLjRDNC42MDMgOC44MTYgMy44MzQgNy41MjIgMy4wMSA3LjUyMmMtLjE3OSAwLS44MDYuMzc4LTEuODgxIDEuMTMyTDAgNy4xOTdjMS4xODUtMS4wNDQgMi4zNTEtMi4wODQgMy41MDEtMy4xMjhDNS4wOCAyLjcwMSA2LjI2NiAxLjk4NCA3LjA1NSAxLjkxYzEuODY3LS4xOCAzLjAxNiAxLjEgMy40NDcgMy44MzguNDY1IDIuOTUzLjc4OSA0Ljc4OS45NzEgNS41MDcuNTM5IDIuNDUgMS4xMzEgMy42NzQgMS43NzYgMy42NzQuNTAyIDAgMS4yNTYtLjc5NiAyLjI2NS0yLjM4NSAxLjAwNC0xLjU4OSAxLjU0LTIuNzk3IDEuNjEyLTMuNjI4LjE0NC0xLjM3MS0uMzk1LTIuMDYxLTEuNjE0LTIuMDYxLS41NzQgMC0xLjE2Ny4xMjEtMS43NzcuMzkxIDEuMTg2LTMuODY4IDMuNDM0LTUuNzU3IDYuNzYyLTUuNjM3IDIuNDczLjA2IDMuNjI4IDEuNjY0IDMuNDkzIDQuNzk3bC0uMDEzLjAxeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
const NotFoundPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"NOT FOUND"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")));/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/blog/index.js":
/*!*********************************!*\
  !*** ./src/pages/blog/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogIndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogRoll */ "./src/components/BlogRoll.js");
class BlogIndexPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:`url('/img/blog-index.jpg')`}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:'0.5rem 0 0 #f40, -0.5rem 0 0 #f40',backgroundColor:'#f40',color:'white',padding:'1rem'}},"Latest Stories")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogRoll__WEBPACK_IMPORTED_MODULE_2__["default"],null)))));}}

/***/ }),

/***/ "./src/pages/contact/examples.js":
/*!***************************************!*\
  !*** ./src/pages/contact/examples.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Hi people"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This is an example site integrating Netlify\u2019s form handling with Gatsby"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a,{to:"/contact"},"Basic contact form")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a,{to:"/contact/file-upload/"},"Form with file upload"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Troubleshooting"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Forms stop working after upgrading to Gatsby v2"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This can be caused by the offline-plugin.",' ',react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232"},"Workaround"),' ',"is to use ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"?no-cache=1")," in the POST url to prevent the service worker from handling form submissions"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Adding reCAPTCHA"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"If you are planning to add reCAPTCHA please go to",' ',react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/imorente/gatsby-netlify-form-example"},"imorente/gatsby-netlify-form-example"),' ',"for a working example.")))));}}

/***/ }),

/***/ "./src/pages/contact/file-upload.js":
/*!******************************************!*\
  !*** ./src/pages/contact/file-upload.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
function encode(data){const formData=new FormData();for(const key of Object.keys(data)){formData.append(key,data[key]);}return formData;}class Contact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(props){super(props);this.handleChange=e=>{this.setState({[e.target.name]:e.target.value});};this.handleAttachment=e=>{this.setState({[e.target.name]:e.target.files[0]});};this.handleSubmit=e=>{e.preventDefault();const form=e.target;fetch('/',{method:'POST',body:encode({'form-name':form.getAttribute('name'),...this.state})}).then(()=>Object(gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigate"])(form.getAttribute('action'))).catch(error=>alert(error));};this.state={};}render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"File Upload"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{name:"file-upload",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"hidden",name:"form-name",value:"file-upload"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{hidden:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Don\u2019t fill this out:",' ',react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"field"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"label",htmlFor:'name'},"Your name"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"control"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"input",type:'text',name:'name',onChange:this.handleChange,id:'name',required:true}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"field"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"file"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"file-label"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"file-input",type:"file",name:"attachment",onChange:this.handleAttachment}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"file-cta"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"file-label"},"Choose a file\u2026"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"field"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))));}}

/***/ }),

/***/ "./src/pages/contact/index.js":
/*!************************************!*\
  !*** ./src/pages/contact/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
function encode(data){return Object.keys(data).map(key=>encodeURIComponent(key)+'='+encodeURIComponent(data[key])).join('&');}class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(props){super(props);this.handleChange=e=>{this.setState({[e.target.name]:e.target.value});};this.handleSubmit=e=>{e.preventDefault();const form=e.target;fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:encode({'form-name':form.getAttribute('name'),...this.state})}).then(()=>Object(gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigate"])(form.getAttribute('action'))).catch(error=>alert(error));};this.state={isValidated:false};}render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Contact"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{hidden:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Don\u2019t fill this out:",' ',react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"field"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"label",htmlFor:'name'},"Your name"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"control"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"input",type:'text',name:'name',onChange:this.handleChange,id:'name',required:true}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"field"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"label",htmlFor:'email'},"Email"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"control"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"input",type:'email',name:'email',onChange:this.handleChange,id:'email',required:true}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"field"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"label",htmlFor:'message'},"Message"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"control"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea",{className:"textarea",name:'message',onChange:this.handleChange,id:'message',required:true}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"field"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))));}}

/***/ }),

/***/ "./src/pages/contact/thanks.js":
/*!*************************************!*\
  !*** ./src/pages/contact/thanks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
/* harmony default export */ __webpack_exports__["default"] = (()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Thank you!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This is a custom thank you page for form submissions"))))));

/***/ }),

/***/ "./src/pages/tags/index.js":
/*!*********************************!*\
  !*** ./src/pages/tags/index.js ***!
  \*********************************/
/*! exports provided: default, tagPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagPageQuery", function() { return tagPageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
const TagsPage=({data:{allMarkdownRemark:{group},site:{siteMetadata:{title}}}})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a,{title:`Tags | ${title}`}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-10 is-offset-1",style:{marginBottom:'6rem'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title is-size-2 is-bold-light"},"Tags"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"taglist"},group.map(tag=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:tag.fieldValue},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{to:`/tags/${Object(lodash__WEBPACK_IMPORTED_MODULE_1__["kebabCase"])(tag.fieldValue)}/`},tag.fieldValue," (",tag.totalCount,")")))))))));/* harmony default export */ __webpack_exports__["default"] = (TagsPage);const tagPageQuery="3682505313";

/***/ }),

/***/ "./src/templates/about-page.js":
/*!*************************************!*\
  !*** ./src/templates/about-page.js ***!
  \*************************************/
/*! exports provided: AboutPageTemplate, default, aboutPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageTemplate", function() { return AboutPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutPageQuery", function() { return aboutPageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
const AboutPageTemplate=({title,content,contentComponent})=>{const PageContent=contentComponent||_components_Content__WEBPACK_IMPORTED_MODULE_3__["default"];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section section--gradient"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-10 is-offset-1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"title is-size-3 has-text-weight-bold is-bold-light"},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent,{className:"content",content:content}))))));};AboutPageTemplate.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,contentComponent:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};const AboutPage=({data})=>{const{markdownRemark:post}=data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutPageTemplate,{contentComponent:_components_Content__WEBPACK_IMPORTED_MODULE_3__["HTMLContent"],title:post.frontmatter.title,content:post.html}));};AboutPage.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired};/* harmony default export */ __webpack_exports__["default"] = (AboutPage);const aboutPageQuery="3047988929";

/***/ }),

/***/ "./src/templates/blog-post.js":
/*!************************************!*\
  !*** ./src/templates/blog-post.js ***!
  \************************************/
/*! exports provided: BlogPostTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostTemplate", function() { return BlogPostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
const BlogPostTemplate=({content,contentComponent,description,tags,title,helmet})=>{const PostContent=contentComponent||_components_Content__WEBPACK_IMPORTED_MODULE_6__["default"];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},helmet||'',react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-10 is-offset-1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light"},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostContent,{content:content}),tags&&tags.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:`4rem`}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"Tags"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"taglist"},tags.map(tag=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:tag+`tag`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"],{to:`/tags/${Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(tag)}/`},tag))))):null))));};BlogPostTemplate.propTypes={content:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,contentComponent:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,description:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,helmet:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object};const BlogPost=({data})=>{const{markdownRemark:post}=data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogPostTemplate,{content:post.html,contentComponent:_components_Content__WEBPACK_IMPORTED_MODULE_6__["HTMLContent"],description:post.frontmatter.description,helmet:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a,{titleTemplate:"%s | Blog"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,`${post.frontmatter.title}`),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:`${post.frontmatter.description}`})),tags:post.frontmatter.tags,title:post.frontmatter.title}));};BlogPost.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({markdownRemark:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object})};/* harmony default export */ __webpack_exports__["default"] = (BlogPost);const pageQuery="1562462377";

/***/ }),

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Features */ "./src/components/Features.js");
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogRoll */ "./src/components/BlogRoll.js");
const IndexPageTemplate=({image,title,heading,subheading,mainpitch,description,intro})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"full-width-image margin-top-0",style:{backgroundImage:`url(${!!image.childImageSharp?image.childImageSharp.fluid.src:image})`,backgroundPosition:`top left`,backgroundAttachment:`fixed`}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:'flex',height:'150px',lineHeight:'1',justifyContent:'space-around',alignItems:'left',flexDirection:'column'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",style:{boxShadow:'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',backgroundColor:'rgb(255, 68, 0)',color:'white',lineHeight:'1',padding:'0.25em'}},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',backgroundColor:'rgb(255, 68, 0)',color:'white',lineHeight:'1',padding:'0.25em'}},subheading))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section section--gradient"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-10 is-offset-1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title"},mainpitch.title)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"subtitle"},mainpitch.description))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-12"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},heading),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,description))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_4__["default"],{gridItems:intro.blurbs}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-12 has-text-centered"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"btn",to:"/products"},"See all products"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-12"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},"Latest stories"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__["default"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-12 has-text-centered"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"btn",to:"/blog"},"Read more"))))))))));IndexPageTemplate.propTypes={image:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,heading:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,subheading:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,mainpitch:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,description:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,intro:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({blurbs:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array})};const IndexPage=({data})=>{const{frontmatter}=data.markdownRemark;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate,{image:frontmatter.image,title:frontmatter.title,heading:frontmatter.heading,subheading:frontmatter.subheading,mainpitch:frontmatter.mainpitch,description:frontmatter.description,intro:frontmatter.intro}));};IndexPage.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({markdownRemark:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({frontmatter:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object})})};/* harmony default export */ __webpack_exports__["default"] = (IndexPage);const pageQuery="4066978147";

/***/ }),

/***/ "./src/templates/product-page.js":
/*!***************************************!*\
  !*** ./src/templates/product-page.js ***!
  \***************************************/
/*! exports provided: ProductPageTemplate, default, productPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageTemplate", function() { return ProductPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productPageQuery", function() { return productPageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ "./src/components/Features.js");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Testimonials */ "./src/components/Testimonials.js");
/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pricing */ "./src/components/Pricing.js");
/* harmony import */ var _components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
const ProductPageTemplate=({image,title,heading,description,intro,main,testimonials,fullImage,pricing})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:`url(${!!image.childImageSharp?image.childImageSharp.fluid.src:image})`}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"has-text-weight-bold is-size-1",style:{boxShadow:'0.5rem 0 0 #f40, -0.5rem 0 0 #f40',backgroundColor:'#f40',color:'white',padding:'1rem'}},title)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section section--gradient"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-7 is-offset-1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},heading),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,description))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-10 is-offset-1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_3__["default"],{gridItems:intro.blurbs}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-7"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"has-text-weight-semibold is-size-3"},main.heading),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,main.description))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile is-ancestor"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile is-vertical"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile is-parent is-vertical"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article",{className:"tile is-child"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__["default"],{imageInfo:main.image1}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile is-parent"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article",{className:"tile is-child"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__["default"],{imageInfo:main.image2})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"tile is-parent"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article",{className:"tile is-child"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__["default"],{imageInfo:main.image3}))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_4__["default"],{testimonials:testimonials}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"full-width-image-container",style:{backgroundImage:`url(${fullImage.childImageSharp?fullImage.childImageSharp.fluid.src:fullImage})`}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"has-text-weight-semibold is-size-2"},pricing.heading),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"is-size-5"},pricing.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pricing__WEBPACK_IMPORTED_MODULE_5__["default"],{data:pricing.plans})))))));ProductPageTemplate.propTypes={image:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,heading:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,description:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,intro:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({blurbs:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array}),main:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({heading:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,description:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,image1:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),image2:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),image3:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])}),testimonials:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,fullImage:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),pricing:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({heading:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,description:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,plans:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array})};const ProductPage=({data})=>{const{frontmatter}=data.markdownRemark;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductPageTemplate,{image:frontmatter.image,title:frontmatter.title,heading:frontmatter.heading,description:frontmatter.description,intro:frontmatter.intro,main:frontmatter.main,testimonials:frontmatter.testimonials,fullImage:frontmatter.full_image,pricing:frontmatter.pricing}));};ProductPage.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({markdownRemark:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({frontmatter:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object})})};/* harmony default export */ __webpack_exports__["default"] = (ProductPage);const productPageQuery="2855502059";

/***/ }),

/***/ "./src/templates/tags.js":
/*!*******************************!*\
  !*** ./src/templates/tags.js ***!
  \*******************************/
/*! exports provided: default, tagPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagPageQuery", function() { return tagPageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
class TagRoute extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{render(){const posts=this.props.data.allMarkdownRemark.edges;const postLinks=posts.map(post=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:post.node.fields.slug},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:post.node.fields.slug},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"is-size-2"},post.node.frontmatter.title))));const tag=this.props.pageContext.tag;const title=this.props.data.site.siteMetadata.title;const totalCount=this.props.data.allMarkdownRemark.totalCount;const tagHeader=`${totalCount} post${totalCount===1?'':'s'} tagged with “${tag}”`;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:`${tag} | ${title}`}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"columns"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"column is-10 is-offset-1",style:{marginBottom:'6rem'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"title is-size-4 is-bold-light"},tagHeader),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"taglist"},postLinks),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/tags/"},"Browse all tags")))))));}}/* harmony default export */ __webpack_exports__["default"] = (TagRoute);const tagPageQuery="4202630850";

/***/ }),

/***/ "@reach/router":
/*!**************************************************************************!*\
  !*** external "/opt/buildhome/repo/node_modules/@reach/router/index.js" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************************************************!*\
  !*** external "/opt/buildhome/repo/node_modules/core-js/modules/es6.array.sort.js" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es7.promise.finally":
/*!******************************************************************************************!*\
  !*** external "/opt/buildhome/repo/node_modules/core-js/modules/es7.promise.finally.js" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_promise_finally__;

/***/ }),

/***/ "core-js/modules/es7.symbol.async-iterator":
/*!************************************************************************************************!*\
  !*** external "/opt/buildhome/repo/node_modules/core-js/modules/es7.symbol.async-iterator.js" ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_symbol_async_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************************************************!*\
  !*** external "/opt/buildhome/repo/node_modules/core-js/modules/web.dom.iterable.js" ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!********************************************************************!*\
  !*** external "/opt/buildhome/repo/node_modules/lodash/lodash.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map