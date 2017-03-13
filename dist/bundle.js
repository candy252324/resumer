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

	"use strict";

	__webpack_require__(1);
	__webpack_require__(5);

	var $ = __webpack_require__(11);
	var Echarts = __webpack_require__(14);

	var s = '我是一个性格幽默、做事认真，热爱运动的人。 我喜欢研究所碰到的各种技术，热衷解决碰到的任何程序问题，不给自己设边界，有 Geek 精神。我有时间概念，能在约定时间内保证完成任务。 我正在寻找一家公司希望加入一个以技术为驱动，从事前端开发工作，并且可以提升大型项目的驾驭能力，希望新工作有成长空间，技术上有挑战性，技术氛围够Geek，使人有成就感的互联网公司。';
	var con = $('.typer');
	var index = 0;
	var length = s.length;
	var tId = null;

	function start() {
		con.text('');

		tId = setInterval(function () {
			con.append(s.charAt(index));
			if (index++ === length) {
				clearInterval(tId);
			}
		}, 50);
	}

	start();

	// var Carousel=require("./js/com/carousel.js"),
	// 	GoTop=require("./js/com/gotop.js"),
	// 	Exposure=require("./js/com/exposure.js"),
	// 	WaterFall=require("./js/com/waterfall.js"),
	// 	Ajax=require("./js/com/ajax.js");


	// 	$(".carousel").each(function(){
	// 		 new Carousel($(this));
	// 	 })

	// 	GoTop.init();

	// 	Exposure.one($('.about-ul>li'), function(){
	// 		var $this = $(this);
	// 		$this.css({"opacity":"1"});
	// 	 });

	// 	WaterFall.init($('.portfolio ul'));

	// 	Ajax.init($(".load"));


	var navArr = ['.information-nav', '.works-nav', '.skills-nav', '.contact-nav'],
	    contentArr = ['.information', '.works', '.skills', '.contact'];

	$(window).on('scroll', function () {
		for (var i = 0; i < navArr.length; i++) {
			$(navArr[i]).removeClass('nav-active');
			if (halfVisible($(contentArr[i]))) {
				$(navArr[i]).addClass('nav-active');
			}
		}
	});

	function halfVisible($target) {
		var winH = $(window).height(),
		    scrollTop = $(window).scrollTop(),
		    offsetTop = $target.offset().top,
		    $targetH = $target.outerHeight(true);
		return scrollTop + winH / 2 >= offsetTop && offsetTop + $targetH > scrollTop + winH / 2;
	}

	for (var i = 0; i < navArr.length; i++) {
		(function (i) {
			$(navArr[i]).on('click', function () {
				$('html,body').animate({ scrollTop: $(contentArr[i]).offset().top - 80 }, 800);
			});
		})(i);
	}

	var option = {
		title: {
			text: ''
		},
		tooltip: {},
		legend: {
			data: ['能力', '兴趣']
		},
		radar: {
			// shape: 'circle',
			indicator: [{ name: 'HTML&HTML5', max: 100 }, { name: 'CSS&CSS3', max: 100 }, { name: 'JS', max: 100 }, { name: 'jQuery', max: 100 }, { name: 'LESS&SASS', max: 100 }, { name: 'Bootstrap', max: 100 }, { name: 'Gulp', max: 100 }, { name: 'React JS', max: 100 }]
		},
		series: [{
			name: '能力 vs 兴趣（skill vs interesting）',
			type: 'radar',
			data: [{
				value: [90, 80, 70, 75, 60, 70, 70, 60],
				name: '能力'
			}, {
				value: [80, 100, 80, 85, 60, 75, 80, 100],
				name: '兴趣'
			}]
		}]
	};

	var myChart = Echarts.init(document.getElementsByClassName('echarts')[0]);
	myChart.setOption(option);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.26.4@css-loader/index.js!./style.css", function() {
				var newContent = require("!!../node_modules/.0.26.4@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html,body{\r\n\tmargin:0;\r\n\tpadding:0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tcolor:#333;\r\n\tfont-family: \"Microsoft Yahei\",tahoma,arial,\"Hiragino Sans GB\";\r\n}\r\nul,li,p,h1{\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\n\r\na{\r\n\ttext-decoration: none;\r\n}\r\n.clearfix:after{\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tclear: both;\r\n}\r\n.main{\r\n\tpadding-left: 280px;\r\n}\r\n.wrap{\r\n\twidth: 90%;\r\n\tmargin:40px auto;\r\n}\r\naside{\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 210px;\r\n\tpadding:50px 35px 0;\r\n\tbackground: #123555;\r\n}\r\naside .header-img{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tborder-radius: 50%;\r\n}\r\naside h1{\r\n\ttext-align: center;\r\n\tmargin: 20px auto;\r\n\tfont: 30px 宋体;\r\n\tcolor:#fff;\r\n\r\n}\r\naside h1:hover{\r\n\tcolor:#f60;\r\n\tcursor:pointer;\r\n}\r\naside .menu{\r\n\tcolor:#fff;\r\n\toverflow: hidden;\r\n}\r\naside .menu li{\r\n\tmargin-top:20px;\r\n\tlist-style: none;\r\n}\r\naside .menu li.nav-active a{\r\n\tcolor:#f60;\r\n}\r\naside .menu .num{\r\n\tfont-size: 14px;\r\n\tmargin-right: 5px;\r\n\tcolor:#7f7f7f;\r\n}\r\naside .menu .text{\r\n\tcolor:#fff;\r\n}\r\naside .menu .text:hover{\r\n\tcolor:#f60;\r\n}\r\naside .bottom{\r\n\tposition: absolute;\r\n\tbottom: 30px;\r\n}\r\naside .bottom .link-list{\r\n\tmargin-bottom: 20px;\r\n}\r\naside  .icon{\r\n\tposition: relative;\r\n\tfloat: left;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\tmargin:3px;\r\n\ttext-align: center;\r\n\tborder-radius: 50%;\r\n\tbackground: #fff;\r\n}\r\naside  .icon .cover{\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop:0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 50%;\r\n\tbackground: rgba(0,0,0,.3);\r\n}\r\naside  .icon:hover .cover{\r\n\tbackground: rgba(0,0,0,0);\r\n}\r\naside  .icon.jianshu{\r\n\tbackground: #ea6f5a;\r\n\tcolor:#fff;\r\n}\r\naside  .icon.github{\r\n\tbackground: #fff;\r\n\tcolor:#000;\r\n}\r\naside  .icon.qq{\r\n\tbackground:#d1484f;\r\n\tcolor: #fff;\r\n}\r\naside  .icon.email{\r\n\tbackground: #00ab6c;\r\n\tcolor:#fff;\r\n\tline-height: 45px;\r\n}\r\naside .note{\r\n\tcolor:#ccc;\r\n\tfont-size: 14px;\r\n}\r\naside .note a{\r\n\tcolor:#ccc;\r\n}\r\naside .project-address{\r\n\ttext-decoration:underline;\r\n}\r\n.information{\r\n\theight: 100%;\r\n\tmargin-left: 280px;\r\n}\r\n.information p{\r\n\tmargin-left: 20px;\r\n\twidth: 50%;\r\n}\r\n.works a{\r\n\tposition: relative;\r\n\tfloat: left;\r\n\twidth: 50%;\r\n\toutline: 2px solid #fff;\r\n}\r\n.works a .cover{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0,0,0 ,.3);\r\n}\r\n.works  img{\r\n\twidth: 100%;\r\n}\r\n.works .title{\r\n\tposition: absolute;\r\n\ttop:50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%,-50%);\r\n\tfont-size: 30px;\r\n\tcolor:#fff;\r\n\ttransition: all .3s;\r\n}\r\n.works .desc{\r\n\tposition: absolute;\r\n\ttop:40%;\r\n\tleft: 50%;\r\n\twidth: 80%;\r\n\ttransform: translate(-50%,-50%);\r\n\tfont-size: 16px;\r\n\tcolor:#fff;\r\n\topacity: 0;\r\n\ttransition: all .6s ease-out;\r\n}\r\n.works a:nth-child(1):hover .cover{\r\n\tbackground: rgba(3,54,73,.6);\r\n}\r\n.works a:nth-child(2):hover .cover{\r\n\tbackground: rgba(205,179,128,.6);\r\n}\r\n.works a:nth-child(3):hover .cover{\r\n\tbackground: rgba(230,155,3,.6);\r\n}\r\n.works a:nth-child(4):hover .cover{\r\n\tbackground: rgba(209,73,78,.6);\r\n}\r\n.works a:hover .title{\r\n\ttop: 40%;\r\n}\r\n.works a:hover .desc{\r\n\ttop: 60%;\r\n\topacity: 1;\r\n}\r\n.skills .echarts{\r\n\twidth:600px;\r\n\theight:600px;\r\n\tmargin: 100px auto;\r\n}\r\n.skills .content{\r\n\tbackground: #eee;\r\n\tpadding:20px 0;\r\n}\r\n.skills .content ul{\r\n\tbox-sizing: border-box;\r\n\tfloat: left;\r\n\twidth: 50%;\r\n\tpadding:0 50px;\r\n}\r\n.skills .content ul li{\r\n\tline-height: 28px;\r\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.26.4@css-loader/index.js!./iconfont.css", function() {
				var newContent = require("!!../node_modules/.0.26.4@css-loader/index.js!./iconfont.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n@font-face {font-family: \"iconfont\";\n  src: url(" + __webpack_require__(7) + "); /* IE9*/\n  src: url(" + __webpack_require__(7) + "#iefix) format('embedded-opentype'), \n  url(" + __webpack_require__(8) + ") format('woff'), \n  url(" + __webpack_require__(9) + ") format('truetype'), \n  url(" + __webpack_require__(10) + "#iconfont) format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family:\"iconfont\" !important;\n  font-size:30px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-book:before { \n  content: \"\\E605\"; \n\n\n}\n\n.icon-github:before { \n  content: \"\\E69F\"; \n}\n\n.icon-qq:before { \n  content: \"\\E627\"; \n}\n\n.icon-email:before { \n  content: \"\\E724\";\n  \n}\n\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./dist/fonts/iconfont.eot";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./dist/fonts/iconfont.woff";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./dist/fonts/iconfont.ttf";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./dist/fonts/iconfont.svg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */!function (a, b) {
		"object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
			if (!a.document) throw new Error("jQuery requires a window with a document");
			return b(a);
		} : b(a);
	}("undefined" != typeof window ? window : undefined, function (a, b) {
		var c = [],
		    d = c.slice,
		    e = c.concat,
		    f = c.push,
		    g = c.indexOf,
		    h = {},
		    i = h.toString,
		    j = h.hasOwnProperty,
		    k = {},
		    l = a.document,
		    m = "2.1.4",
		    n = function n(a, b) {
			return new n.fn.init(a, b);
		},
		    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		    p = /^-ms-/,
		    q = /-([\da-z])/gi,
		    r = function r(a, b) {
			return b.toUpperCase();
		};
		n.fn = n.prototype = {
			jquery: m,
			constructor: n,
			selector: "",
			length: 0,
			toArray: function toArray() {
				return d.call(this);
			},
			get: function get(a) {
				return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
			},
			pushStack: function pushStack(a) {
				var b = n.merge(this.constructor(), a);
				return b.prevObject = this, b.context = this.context, b;
			},
			each: function each(a, b) {
				return n.each(this, a, b);
			},
			map: function map(a) {
				return this.pushStack(n.map(this, function (b, c) {
					return a.call(b, c, b);
				}));
			},
			slice: function slice() {
				return this.pushStack(d.apply(this, arguments));
			},
			first: function first() {
				return this.eq(0);
			},
			last: function last() {
				return this.eq(-1);
			},
			eq: function eq(a) {
				var b = this.length,
				    c = +a + (0 > a ? b : 0);
				return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
			},
			end: function end() {
				return this.prevObject || this.constructor(null);
			},
			push: f,
			sort: c.sort,
			splice: c.splice
		}, n.extend = n.fn.extend = function () {
			var a,
			    b,
			    c,
			    d,
			    e,
			    f,
			    g = arguments[0] || {},
			    h = 1,
			    i = arguments.length,
			    j = !1;
			for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
				if (null != (a = arguments[h])) for (b in a) {
					c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
				}
			}return g;
		}, n.extend({
			expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function error(a) {
				throw new Error(a);
			},
			noop: function noop() {},
			isFunction: function isFunction(a) {
				return "function" === n.type(a);
			},
			isArray: Array.isArray,
			isWindow: function isWindow(a) {
				return null != a && a === a.window;
			},
			isNumeric: function isNumeric(a) {
				return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
			},
			isPlainObject: function isPlainObject(a) {
				return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
			},
			isEmptyObject: function isEmptyObject(a) {
				var b;
				for (b in a) {
					return !1;
				}return !0;
			},
			type: function type(a) {
				return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
			},
			globalEval: function globalEval(a) {
				var b,
				    c = eval;
				a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
			},
			camelCase: function camelCase(a) {
				return a.replace(p, "ms-").replace(q, r);
			},
			nodeName: function nodeName(a, b) {
				return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
			},
			each: function each(a, b, c) {
				var d,
				    e = 0,
				    f = a.length,
				    g = s(a);
				if (c) {
					if (g) {
						for (; f > e; e++) {
							if (d = b.apply(a[e], c), d === !1) break;
						}
					} else for (e in a) {
						if (d = b.apply(a[e], c), d === !1) break;
					}
				} else if (g) {
					for (; f > e; e++) {
						if (d = b.call(a[e], e, a[e]), d === !1) break;
					}
				} else for (e in a) {
					if (d = b.call(a[e], e, a[e]), d === !1) break;
				}return a;
			},
			trim: function trim(a) {
				return null == a ? "" : (a + "").replace(o, "");
			},
			makeArray: function makeArray(a, b) {
				var c = b || [];
				return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
			},
			inArray: function inArray(a, b, c) {
				return null == b ? -1 : g.call(b, a, c);
			},
			merge: function merge(a, b) {
				for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
					a[e++] = b[d];
				}return a.length = e, a;
			},
			grep: function grep(a, b, c) {
				for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
					d = !b(a[f], f), d !== h && e.push(a[f]);
				}return e;
			},
			map: function map(a, b, c) {
				var d,
				    f = 0,
				    g = a.length,
				    h = s(a),
				    i = [];
				if (h) for (; g > f; f++) {
					d = b(a[f], f, c), null != d && i.push(d);
				} else for (f in a) {
					d = b(a[f], f, c), null != d && i.push(d);
				}return e.apply([], i);
			},
			guid: 1,
			proxy: function proxy(a, b) {
				var c, e, f;
				return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
					return a.apply(b || this, e.concat(d.call(arguments)));
				}, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
			},
			now: Date.now,
			support: k
		}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
			h["[object " + b + "]"] = b.toLowerCase();
		});

		function s(a) {
			var b = "length" in a && a.length,
			    c = n.type(a);
			return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
		}
		var t = function (a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    n,
			    o,
			    p,
			    q,
			    r,
			    s,
			    t,
			    u = "sizzle" + 1 * new Date(),
			    v = a.document,
			    w = 0,
			    x = 0,
			    y = ha(),
			    z = ha(),
			    A = ha(),
			    B = function B(a, b) {
				return a === b && (l = !0), 0;
			},
			    C = 1 << 31,
			    D = {}.hasOwnProperty,
			    E = [],
			    F = E.pop,
			    G = E.push,
			    H = E.push,
			    I = E.slice,
			    J = function J(a, b) {
				for (var c = 0, d = a.length; d > c; c++) {
					if (a[c] === b) return c;
				}return -1;
			},
			    K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			    L = "[\\x20\\t\\r\\n\\f]",
			    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			    N = M.replace("w", "w#"),
			    O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
			    P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
			    Q = new RegExp(L + "+", "g"),
			    R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			    S = new RegExp("^" + L + "*," + L + "*"),
			    T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			    U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			    V = new RegExp(P),
			    W = new RegExp("^" + N + "$"),
			    X = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + O),
				PSEUDO: new RegExp("^" + P),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			    Y = /^(?:input|select|textarea|button)$/i,
			    Z = /^h\d$/i,
			    $ = /^[^{]+\{\s*\[native \w/,
			    _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    aa = /[+~]/,
			    ba = /'|\\/g,
			    ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			    da = function da(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
			},
			    ea = function ea() {
				m();
			};
			try {
				H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
			} catch (fa) {
				H = {
					apply: E.length ? function (a, b) {
						G.apply(a, I.call(b));
					} : function (a, b) {
						var c = a.length,
						    d = 0;
						while (a[c++] = b[d++]) {}
						a.length = c - 1;
					}
				};
			}

			function ga(a, b, d, e) {
				var f, h, j, k, l, o, r, s, w, x;
				if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
				if (!e && p) {
					if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
						if (9 === k) {
							if (h = b.getElementById(j), !h || !h.parentNode) return d;
							if (h.id === j) return d.push(h), d;
						} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
					} else {
						if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
					}
					if (c.qsa && (!q || !q.test(a))) {
						if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
							o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
							while (l--) {
								o[l] = s + ra(o[l]);
							}w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
						}
						if (x) try {
							return H.apply(d, w.querySelectorAll(x)), d;
						} catch (y) {} finally {
							r || b.removeAttribute("id");
						}
					}
				}
				return i(a.replace(R, "$1"), b, d, e);
			}

			function ha() {
				var a = [];

				function b(c, e) {
					return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
				}
				return b;
			}

			function ia(a) {
				return a[u] = !0, a;
			}

			function ja(a) {
				var b = n.createElement("div");
				try {
					return !!a(b);
				} catch (c) {
					return !1;
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null;
				}
			}

			function ka(a, b) {
				var c = a.split("|"),
				    e = a.length;
				while (e--) {
					d.attrHandle[c[e]] = b;
				}
			}

			function la(a, b) {
				var c = b && a,
				    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
				if (d) return d;
				if (c) while (c = c.nextSibling) {
					if (c === b) return -1;
				}return a ? 1 : -1;
			}

			function ma(a) {
				return function (b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a;
				};
			}

			function na(a) {
				return function (b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a;
				};
			}

			function oa(a) {
				return ia(function (b) {
					return b = +b, ia(function (c, d) {
						var e,
						    f = a([], c.length, b),
						    g = f.length;
						while (g--) {
							c[e = f[g]] && (c[e] = !(d[e] = c[e]));
						}
					});
				});
			}

			function pa(a) {
				return a && "undefined" != typeof a.getElementsByTagName && a;
			}
			c = ga.support = {}, f = ga.isXML = function (a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? "HTML" !== b.nodeName : !1;
			}, m = ga.setDocument = function (a) {
				var b,
				    e,
				    g = a ? a.ownerDocument || a : v;
				return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
					return a.className = "i", !a.getAttribute("className");
				}), c.getElementsByTagName = ja(function (a) {
					return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
				}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
					return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
				}), c.getById ? (d.find.ID = function (a, b) {
					if ("undefined" != typeof b.getElementById && p) {
						var c = b.getElementById(a);
						return c && c.parentNode ? [c] : [];
					}
				}, d.filter.ID = function (a) {
					var b = a.replace(ca, da);
					return function (a) {
						return a.getAttribute("id") === b;
					};
				}) : (delete d.find.ID, d.filter.ID = function (a) {
					var b = a.replace(ca, da);
					return function (a) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
						return c && c.value === b;
					};
				}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
					return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
				} : function (a, b) {
					var c,
					    d = [],
					    e = 0,
					    f = b.getElementsByTagName(a);
					if ("*" === a) {
						while (c = f[e++]) {
							1 === c.nodeType && d.push(c);
						}return d;
					}
					return f;
				}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
					return p ? b.getElementsByClassName(a) : void 0;
				}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
					o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
				}), ja(function (a) {
					var b = g.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
				})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
					c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
				}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
					    d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
				} : function (a, b) {
					if (b) while (b = b.parentNode) {
						if (b === a) return !0;
					}return !1;
				}, B = b ? function (a, b) {
					if (a === b) return l = !0, 0;
					var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
					return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
				} : function (a, b) {
					if (a === b) return l = !0, 0;
					var c,
					    d = 0,
					    e = a.parentNode,
					    f = b.parentNode,
					    h = [a],
					    i = [b];
					if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
					if (e === f) return la(a, b);
					c = a;
					while (c = c.parentNode) {
						h.unshift(c);
					}c = b;
					while (c = c.parentNode) {
						i.unshift(c);
					}while (h[d] === i[d]) {
						d++;
					}return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
				}, g) : n;
			}, ga.matches = function (a, b) {
				return ga(a, null, null, b);
			}, ga.matchesSelector = function (a, b) {
				if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
					var d = s.call(a, b);
					if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
				} catch (e) {}
				return ga(b, n, null, [a]).length > 0;
			}, ga.contains = function (a, b) {
				return (a.ownerDocument || a) !== n && m(a), t(a, b);
			}, ga.attr = function (a, b) {
				(a.ownerDocument || a) !== n && m(a);
				var e = d.attrHandle[b.toLowerCase()],
				    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
				return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
			}, ga.error = function (a) {
				throw new Error("Syntax error, unrecognized expression: " + a);
			}, ga.uniqueSort = function (a) {
				var b,
				    d = [],
				    e = 0,
				    f = 0;
				if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
					while (b = a[f++]) {
						b === a[f] && (e = d.push(f));
					}while (e--) {
						a.splice(d[e], 1);
					}
				}
				return k = null, a;
			}, e = ga.getText = function (a) {
				var b,
				    c = "",
				    d = 0,
				    f = a.nodeType;
				if (f) {
					if (1 === f || 9 === f || 11 === f) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) {
							c += e(a);
						}
					} else if (3 === f || 4 === f) return a.nodeValue;
				} else while (b = a[d++]) {
					c += e(b);
				}return c;
			}, d = ga.selectors = {
				cacheLength: 50,
				createPseudo: ia,
				match: X,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function ATTR(a) {
						return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
					},
					CHILD: function CHILD(a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
					},
					PSEUDO: function PSEUDO(a) {
						var b,
						    c = !a[6] && a[2];
						return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
					}
				},
				filter: {
					TAG: function TAG(a) {
						var b = a.replace(ca, da).toLowerCase();
						return "*" === a ? function () {
							return !0;
						} : function (a) {
							return a.nodeName && a.nodeName.toLowerCase() === b;
						};
					},
					CLASS: function CLASS(a) {
						var b = y[a + " "];
						return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
							return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
						});
					},
					ATTR: function ATTR(a, b, c) {
						return function (d) {
							var e = ga.attr(d, a);
							return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
						};
					},
					CHILD: function CHILD(a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
						    g = "last" !== a.slice(-4),
						    h = "of-type" === b;
						return 1 === d && 0 === e ? function (a) {
							return !!a.parentNode;
						} : function (b, c, i) {
							var j,
							    k,
							    l,
							    m,
							    n,
							    o,
							    p = f !== g ? "nextSibling" : "previousSibling",
							    q = b.parentNode,
							    r = h && b.nodeName.toLowerCase(),
							    s = !i && !h;
							if (q) {
								if (f) {
									while (p) {
										l = b;
										while (l = l[p]) {
											if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
										}o = p = "only" === a && !o && "nextSibling";
									}
									return !0;
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
									while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
										if (1 === l.nodeType && ++m && l === b) {
											k[a] = [w, n, m];
											break;
										}
									}
								} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
									if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
								}return m -= e, m === d || m % d === 0 && m / d >= 0;
							}
						};
					},
					PSEUDO: function PSEUDO(a, b) {
						var c,
						    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
						return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
							var d,
							    f = e(a, b),
							    g = f.length;
							while (g--) {
								d = J(a, f[g]), a[d] = !(c[d] = f[g]);
							}
						}) : function (a) {
							return e(a, 0, c);
						}) : e;
					}
				},
				pseudos: {
					not: ia(function (a) {
						var b = [],
						    c = [],
						    d = h(a.replace(R, "$1"));
						return d[u] ? ia(function (a, b, c, e) {
							var f,
							    g = d(a, null, e, []),
							    h = a.length;
							while (h--) {
								(f = g[h]) && (a[h] = !(b[h] = f));
							}
						}) : function (a, e, f) {
							return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
						};
					}),
					has: ia(function (a) {
						return function (b) {
							return ga(a, b).length > 0;
						};
					}),
					contains: ia(function (a) {
						return a = a.replace(ca, da), function (b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
						};
					}),
					lang: ia(function (a) {
						return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
							var c;
							do {
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							} while ((b = b.parentNode) && 1 === b.nodeType);
							return !1;
						};
					}),
					target: function target(b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id;
					},
					root: function root(a) {
						return a === o;
					},
					focus: function focus(a) {
						return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
					},
					enabled: function enabled(a) {
						return a.disabled === !1;
					},
					disabled: function disabled(a) {
						return a.disabled === !0;
					},
					checked: function checked(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !!a.checked || "option" === b && !!a.selected;
					},
					selected: function selected(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
					},
					empty: function empty(a) {
						for (a = a.firstChild; a; a = a.nextSibling) {
							if (a.nodeType < 6) return !1;
						}return !0;
					},
					parent: function parent(a) {
						return !d.pseudos.empty(a);
					},
					header: function header(a) {
						return Z.test(a.nodeName);
					},
					input: function input(a) {
						return Y.test(a.nodeName);
					},
					button: function button(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b;
					},
					text: function text(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
					},
					first: oa(function () {
						return [0];
					}),
					last: oa(function (a, b) {
						return [b - 1];
					}),
					eq: oa(function (a, b, c) {
						return [0 > c ? c + b : c];
					}),
					even: oa(function (a, b) {
						for (var c = 0; b > c; c += 2) {
							a.push(c);
						}return a;
					}),
					odd: oa(function (a, b) {
						for (var c = 1; b > c; c += 2) {
							a.push(c);
						}return a;
					}),
					lt: oa(function (a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) {
							a.push(d);
						}return a;
					}),
					gt: oa(function (a, b, c) {
						for (var d = 0 > c ? c + b : c; ++d < b;) {
							a.push(d);
						}return a;
					})
				}
			}, d.pseudos.nth = d.pseudos.eq;
			for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) {
				d.pseudos[b] = ma(b);
			}for (b in {
				submit: !0,
				reset: !0
			}) {
				d.pseudos[b] = na(b);
			}function qa() {}
			qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
				var c,
				    e,
				    f,
				    g,
				    h,
				    i,
				    j,
				    k = z[a + " "];
				if (k) return b ? 0 : k.slice(0);
				h = a, i = [], j = d.preFilter;
				while (h) {
					(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
						value: c,
						type: e[0].replace(R, " ")
					}), h = h.slice(c.length));
					for (g in d.filter) {
						!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
							value: c,
							type: g,
							matches: e
						}), h = h.slice(c.length));
					}if (!c) break;
				}
				return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
			};

			function ra(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) {
					d += a[b].value;
				}return d;
			}

			function sa(a, b, c) {
				var d = b.dir,
				    e = c && "parentNode" === d,
				    f = x++;
				return b.first ? function (b, c, f) {
					while (b = b[d]) {
						if (1 === b.nodeType || e) return a(b, c, f);
					}
				} : function (b, c, g) {
					var h,
					    i,
					    j = [w, f];
					if (g) {
						while (b = b[d]) {
							if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
						}
					} else while (b = b[d]) {
						if (1 === b.nodeType || e) {
							if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0;
						}
					}
				};
			}

			function ta(a) {
				return a.length > 1 ? function (b, c, d) {
					var e = a.length;
					while (e--) {
						if (!a[e](b, c, d)) return !1;
					}return !0;
				} : a[0];
			}

			function ua(a, b, c) {
				for (var d = 0, e = b.length; e > d; d++) {
					ga(a, b[d], c);
				}return c;
			}

			function va(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
					(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
				}return g;
			}

			function wa(a, b, c, d, e, f) {
				return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
					var j,
					    k,
					    l,
					    m = [],
					    n = [],
					    o = g.length,
					    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
					    q = !a || !f && b ? p : va(p, m, a, h, i),
					    r = c ? e || (f ? a : o || d) ? [] : g : q;
					if (c && c(q, r, h, i), d) {
						j = va(r, n), d(j, [], h, i), k = j.length;
						while (k--) {
							(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
						}
					}
					if (f) {
						if (e || a) {
							if (e) {
								j = [], k = r.length;
								while (k--) {
									(l = r[k]) && j.push(q[k] = l);
								}e(null, r = [], j, i);
							}
							k = r.length;
							while (k--) {
								(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
							}
						}
					} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
				});
			}

			function xa(a) {
				for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
					return a === b;
				}, h, !0), l = sa(function (a) {
					return J(b, a) > -1;
				}, h, !0), m = [function (a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e;
				}]; f > i; i++) {
					if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
						if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
							for (e = ++i; f > e; e++) {
								if (d.relative[a[e].type]) break;
							}return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
								value: " " === a[i - 2].type ? "*" : ""
							})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
						}
						m.push(c);
					}
				}return ta(m);
			}

			function ya(a, b) {
				var c = b.length > 0,
				    e = a.length > 0,
				    f = function f(_f, g, h, i, k) {
					var l,
					    m,
					    o,
					    p = 0,
					    q = "0",
					    r = _f && [],
					    s = [],
					    t = j,
					    u = _f || e && d.find.TAG("*", k),
					    v = w += null == t ? 1 : Math.random() || .1,
					    x = u.length;
					for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
						if (e && l) {
							m = 0;
							while (o = a[m++]) {
								if (o(l, g, h)) {
									i.push(l);
									break;
								}
							}k && (w = v);
						}
						c && ((l = !o && l) && p--, _f && r.push(l));
					}
					if (p += q, c && q !== p) {
						m = 0;
						while (o = b[m++]) {
							o(r, s, g, h);
						}if (_f) {
							if (p > 0) while (q--) {
								r[q] || s[q] || (s[q] = F.call(i));
							}s = va(s);
						}
						H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
					}
					return k && (w = v, j = t), r;
				};
				return c ? ia(f) : f;
			}
			return h = ga.compile = function (a, b) {
				var c,
				    d = [],
				    e = [],
				    f = A[a + " "];
				if (!f) {
					b || (b = g(a)), c = b.length;
					while (c--) {
						f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
					}f = A(a, ya(e, d)), f.selector = a;
				}
				return f;
			}, i = ga.select = function (a, b, e, f) {
				var i,
				    j,
				    k,
				    l,
				    m,
				    n = "function" == typeof a && a,
				    o = !f && g(a = n.selector || a);
				if (e = e || [], 1 === o.length) {
					if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
						if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
						n && (b = b.parentNode), a = a.slice(j.shift().value.length);
					}
					i = X.needsContext.test(a) ? 0 : j.length;
					while (i--) {
						if (k = j[i], d.relative[l = k.type]) break;
						if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
							if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
							break;
						}
					}
				}
				return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
			}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
				return 1 & a.compareDocumentPosition(n.createElement("div"));
			}), ja(function (a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
			}) || ka("type|href|height|width", function (a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
			}), c.attributes && ja(function (a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
			}) || ka("value", function (a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
			}), ja(function (a) {
				return null == a.getAttribute("disabled");
			}) || ka(K, function (a, b, c) {
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
			}), ga;
		}(a);
		n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
		var u = n.expr.match.needsContext,
		    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		    w = /^.[^:#\[\.,]*$/;

		function x(a, b, c) {
			if (n.isFunction(b)) return n.grep(a, function (a, d) {
				return !!b.call(a, d, a) !== c;
			});
			if (b.nodeType) return n.grep(a, function (a) {
				return a === b !== c;
			});
			if ("string" == typeof b) {
				if (w.test(b)) return n.filter(b, a, c);
				b = n.filter(b, a);
			}
			return n.grep(a, function (a) {
				return g.call(b, a) >= 0 !== c;
			});
		}
		n.filter = function (a, b, c) {
			var d = b[0];
			return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
				return 1 === a.nodeType;
			}));
		}, n.fn.extend({
			find: function find(a) {
				var b,
				    c = this.length,
				    d = [],
				    e = this;
				if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
					for (b = 0; c > b; b++) {
						if (n.contains(e[b], this)) return !0;
					}
				}));
				for (b = 0; c > b; b++) {
					n.find(a, e[b], d);
				}return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
			},
			filter: function filter(a) {
				return this.pushStack(x(this, a || [], !1));
			},
			not: function not(a) {
				return this.pushStack(x(this, a || [], !0));
			},
			is: function is(a) {
				return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
			}
		});
		var y,
		    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    A = n.fn.init = function (a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
						n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					}return this;
				}
				return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
		};
		A.prototype = n.fn, y = n(l);
		var B = /^(?:parents|prev(?:Until|All))/,
		    C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
		n.extend({
			dir: function dir(a, b, c) {
				var d = [],
				    e = void 0 !== c;
				while ((a = a[b]) && 9 !== a.nodeType) {
					if (1 === a.nodeType) {
						if (e && n(a).is(c)) break;
						d.push(a);
					}
				}return d;
			},
			sibling: function sibling(a, b) {
				for (var c = []; a; a = a.nextSibling) {
					1 === a.nodeType && a !== b && c.push(a);
				}return c;
			}
		}), n.fn.extend({
			has: function has(a) {
				var b = n(a, this),
				    c = b.length;
				return this.filter(function () {
					for (var a = 0; c > a; a++) {
						if (n.contains(this, b[a])) return !0;
					}
				});
			},
			closest: function closest(a, b) {
				for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
					for (c = this[d]; c && c !== b; c = c.parentNode) {
						if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
							f.push(c);
							break;
						}
					}
				}return this.pushStack(f.length > 1 ? n.unique(f) : f);
			},
			index: function index(a) {
				return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			},
			add: function add(a, b) {
				return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
			},
			addBack: function addBack(a) {
				return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
			}
		});

		function D(a, b) {
			while ((a = a[b]) && 1 !== a.nodeType) {}
			return a;
		}
		n.each({
			parent: function parent(a) {
				var b = a.parentNode;
				return b && 11 !== b.nodeType ? b : null;
			},
			parents: function parents(a) {
				return n.dir(a, "parentNode");
			},
			parentsUntil: function parentsUntil(a, b, c) {
				return n.dir(a, "parentNode", c);
			},
			next: function next(a) {
				return D(a, "nextSibling");
			},
			prev: function prev(a) {
				return D(a, "previousSibling");
			},
			nextAll: function nextAll(a) {
				return n.dir(a, "nextSibling");
			},
			prevAll: function prevAll(a) {
				return n.dir(a, "previousSibling");
			},
			nextUntil: function nextUntil(a, b, c) {
				return n.dir(a, "nextSibling", c);
			},
			prevUntil: function prevUntil(a, b, c) {
				return n.dir(a, "previousSibling", c);
			},
			siblings: function siblings(a) {
				return n.sibling((a.parentNode || {}).firstChild, a);
			},
			children: function children(a) {
				return n.sibling(a.firstChild);
			},
			contents: function contents(a) {
				return a.contentDocument || n.merge([], a.childNodes);
			}
		}, function (a, b) {
			n.fn[a] = function (c, d) {
				var e = n.map(this, b, c);
				return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
			};
		});
		var E = /\S+/g,
		    F = {};

		function G(a) {
			var b = F[a] = {};
			return n.each(a.match(E) || [], function (a, c) {
				b[c] = !0;
			}), b;
		}
		n.Callbacks = function (a) {
			a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = [],
			    i = !a.once && [],
			    j = function j(l) {
				for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
					if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
						b = !1;
						break;
					}
				}d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
			},
			    k = {
				add: function add() {
					if (h) {
						var c = h.length;
						!function g(b) {
							n.each(b, function (b, c) {
								var d = n.type(c);
								"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
							});
						}(arguments), d ? f = h.length : b && (e = c, j(b));
					}
					return this;
				},
				remove: function remove() {
					return h && n.each(arguments, function (a, b) {
						var c;
						while ((c = n.inArray(b, h, c)) > -1) {
							h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
						}
					}), this;
				},
				has: function has(a) {
					return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
				},
				empty: function empty() {
					return h = [], f = 0, this;
				},
				disable: function disable() {
					return h = i = b = void 0, this;
				},
				disabled: function disabled() {
					return !h;
				},
				lock: function lock() {
					return i = void 0, b || k.disable(), this;
				},
				locked: function locked() {
					return !i;
				},
				fireWith: function fireWith(a, b) {
					return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
				},
				fire: function fire() {
					return k.fireWith(this, arguments), this;
				},
				fired: function fired() {
					return !!c;
				}
			};
			return k;
		}, n.extend({
			Deferred: function Deferred(a) {
				var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
				    c = "pending",
				    d = {
					state: function state() {
						return c;
					},
					always: function always() {
						return e.done(arguments).fail(arguments), this;
					},
					then: function then() {
						var a = arguments;
						return n.Deferred(function (c) {
							n.each(b, function (b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
								});
							}), a = null;
						}).promise();
					},
					promise: function promise(a) {
						return null != a ? n.extend(a, d) : d;
					}
				},
				    e = {};
				return d.pipe = d.then, n.each(b, function (a, f) {
					var g = f[2],
					    h = f[3];
					d[f[1]] = g.add, h && g.add(function () {
						c = h;
					}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
						return e[f[0] + "With"](this === e ? d : this, arguments), this;
					}, e[f[0] + "With"] = g.fireWith;
				}), d.promise(e), a && a.call(e, e), e;
			},
			when: function when(a) {
				var b = 0,
				    c = d.call(arguments),
				    e = c.length,
				    f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
				    g = 1 === f ? a : n.Deferred(),
				    h = function h(a, b, c) {
					return function (e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
					};
				},
				    i,
				    j,
				    k;
				if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
					c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
				}return f || g.resolveWith(k, c), g.promise();
			}
		});
		var H;
		n.fn.ready = function (a) {
			return n.ready.promise().done(a), this;
		}, n.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function holdReady(a) {
				a ? n.readyWait++ : n.ready(!0);
			},
			ready: function ready(a) {
				(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
			}
		});

		function I() {
			l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
		}
		n.ready.promise = function (b) {
			return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
		}, n.ready.promise();
		var J = n.access = function (a, b, c, d, e, f, g) {
			var h = 0,
			    i = a.length,
			    j = null == c;
			if ("object" === n.type(c)) {
				e = !0;
				for (h in c) {
					n.access(a, b, h, c[h], !0, f, g);
				}
			} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
				return j.call(n(a), c);
			})), b)) for (; i > h; h++) {
				b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			}return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
		};
		n.acceptData = function (a) {
			return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
		};

		function K() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function get() {
					return {};
				}
			}), this.expando = n.expando + K.uid++;
		}
		K.uid = 1, K.accepts = n.acceptData, K.prototype = {
			key: function key(a) {
				if (!K.accepts(a)) return 0;
				var b = {},
				    c = a[this.expando];
				if (!c) {
					c = K.uid++;
					try {
						b[this.expando] = {
							value: c
						}, Object.defineProperties(a, b);
					} catch (d) {
						b[this.expando] = c, n.extend(a, b);
					}
				}
				return this.cache[c] || (this.cache[c] = {}), c;
			},
			set: function set(a, b, c) {
				var d,
				    e = this.key(a),
				    f = this.cache[e];
				if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
					f[d] = b[d];
				}return f;
			},
			get: function get(a, b) {
				var c = this.cache[this.key(a)];
				return void 0 === b ? c : c[b];
			},
			access: function access(a, b, c) {
				var d;
				return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
			},
			remove: function remove(a, b) {
				var c,
				    d,
				    e,
				    f = this.key(a),
				    g = this.cache[f];
				if (void 0 === b) this.cache[f] = {};else {
					n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
					while (c--) {
						delete g[d[c]];
					}
				}
			},
			hasData: function hasData(a) {
				return !n.isEmptyObject(this.cache[a[this.expando]] || {});
			},
			discard: function discard(a) {
				a[this.expando] && delete this.cache[a[this.expando]];
			}
		};
		var L = new K(),
		    M = new K(),
		    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    O = /([A-Z])/g;

		function P(a, b, c) {
			var d;
			if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
				} catch (e) {}
				M.set(a, b, c);
			} else c = void 0;
			return c;
		}
		n.extend({
			hasData: function hasData(a) {
				return M.hasData(a) || L.hasData(a);
			},
			data: function data(a, b, c) {
				return M.access(a, b, c);
			},
			removeData: function removeData(a, b) {
				M.remove(a, b);
			},
			_data: function _data(a, b, c) {
				return L.access(a, b, c);
			},
			_removeData: function _removeData(a, b) {
				L.remove(a, b);
			}
		}), n.fn.extend({
			data: function data(a, b) {
				var c,
				    d,
				    e,
				    f = this[0],
				    g = f && f.attributes;
				if (void 0 === a) {
					if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
						c = g.length;
						while (c--) {
							g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
						}L.set(f, "hasDataAttrs", !0);
					}
					return e;
				}
				return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
					M.set(this, a);
				}) : J(this, function (b) {
					var c,
					    d = n.camelCase(a);
					if (f && void 0 === b) {
						if (c = M.get(f, a), void 0 !== c) return c;
						if (c = M.get(f, d), void 0 !== c) return c;
						if (c = P(f, d, void 0), void 0 !== c) return c;
					} else this.each(function () {
						var c = M.get(this, d);
						M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
					});
				}, null, b, arguments.length > 1, null, !0);
			},
			removeData: function removeData(a) {
				return this.each(function () {
					M.remove(this, a);
				});
			}
		}), n.extend({
			queue: function queue(a, b, c) {
				var d;
				return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
			},
			dequeue: function dequeue(a, b) {
				b = b || "fx";
				var c = n.queue(a, b),
				    d = c.length,
				    e = c.shift(),
				    f = n._queueHooks(a, b),
				    g = function g() {
					n.dequeue(a, b);
				};
				"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
			},
			_queueHooks: function _queueHooks(a, b) {
				var c = b + "queueHooks";
				return L.get(a, c) || L.access(a, c, {
					empty: n.Callbacks("once memory").add(function () {
						L.remove(a, [b + "queue", c]);
					})
				});
			}
		}), n.fn.extend({
			queue: function queue(a, b) {
				var c = 2;
				return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
					var c = n.queue(this, a, b);
					n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
				});
			},
			dequeue: function dequeue(a) {
				return this.each(function () {
					n.dequeue(this, a);
				});
			},
			clearQueue: function clearQueue(a) {
				return this.queue(a || "fx", []);
			},
			promise: function promise(a, b) {
				var c,
				    d = 1,
				    e = n.Deferred(),
				    f = this,
				    g = this.length,
				    h = function h() {
					--d || e.resolveWith(f, [f]);
				};
				"string" != typeof a && (b = a, a = void 0), a = a || "fx";
				while (g--) {
					c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
				}return h(), e.promise(b);
			}
		});
		var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		    R = ["Top", "Right", "Bottom", "Left"],
		    S = function S(a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
		},
		    T = /^(?:checkbox|radio)$/i;
		!function () {
			var a = l.createDocumentFragment(),
			    b = a.appendChild(l.createElement("div")),
			    c = l.createElement("input");
			c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
		}();
		var U = "undefined";
		k.focusinBubbles = "onfocusin" in a;
		var V = /^key/,
		    W = /^(?:mouse|pointer|contextmenu)|click/,
		    X = /^(?:focusinfocus|focusoutblur)$/,
		    Y = /^([^.]*)(?:\.(.+)|)$/;

		function Z() {
			return !0;
		}

		function $() {
			return !1;
		}

		function _() {
			try {
				return l.activeElement;
			} catch (a) {}
		}
		n.event = {
			global: {},
			add: function add(a, b, c, d, e) {
				var f,
				    g,
				    h,
				    i,
				    j,
				    k,
				    l,
				    m,
				    o,
				    p,
				    q,
				    r = L.get(a);
				if (r) {
					c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
						return (typeof n === "undefined" ? "undefined" : _typeof(n)) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
					}), b = (b || "").match(E) || [""], j = b.length;
					while (j--) {
						h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
							type: o,
							origType: q,
							data: d,
							handler: c,
							guid: c.guid,
							selector: e,
							needsContext: e && n.expr.match.needsContext.test(e),
							namespace: p.join(".")
						}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
					}
				}
			},
			remove: function remove(a, b, c, d, e) {
				var f,
				    g,
				    h,
				    i,
				    j,
				    k,
				    l,
				    m,
				    o,
				    p,
				    q,
				    r = L.hasData(a) && L.get(a);
				if (r && (i = r.events)) {
					b = (b || "").match(E) || [""], j = b.length;
					while (j--) {
						if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
							l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
							while (f--) {
								k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
							}g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
						} else for (o in i) {
							n.event.remove(a, o + b[j], c, d, !0);
						}
					}n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
				}
			},
			trigger: function trigger(b, c, d, e) {
				var f,
				    g,
				    h,
				    i,
				    k,
				    m,
				    o,
				    p = [d || l],
				    q = j.call(b, "type") ? b.type : b,
				    r = j.call(b, "namespace") ? b.namespace.split(".") : [];
				if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
					if (!e && !o.noBubble && !n.isWindow(d)) {
						for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
							p.push(g), h = g;
						}h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
					}
					f = 0;
					while ((g = p[f++]) && !b.isPropagationStopped()) {
						b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
					}return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
				}
			},
			dispatch: function dispatch(a) {
				a = n.event.fix(a);
				var b,
				    c,
				    e,
				    f,
				    g,
				    h = [],
				    i = d.call(arguments),
				    j = (L.get(this, "events") || {})[a.type] || [],
				    k = n.event.special[a.type] || {};
				if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
					h = n.event.handlers.call(this, a, j), b = 0;
					while ((f = h[b++]) && !a.isPropagationStopped()) {
						a.currentTarget = f.elem, c = 0;
						while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
							(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
						}
					}
					return k.postDispatch && k.postDispatch.call(this, a), a.result;
				}
			},
			handlers: function handlers(a, b) {
				var c,
				    d,
				    e,
				    f,
				    g = [],
				    h = b.delegateCount,
				    i = a.target;
				if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
					if (i.disabled !== !0 || "click" !== a.type) {
						for (d = [], c = 0; h > c; c++) {
							f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
						}d.length && g.push({
							elem: i,
							handlers: d
						});
					}
				}return h < b.length && g.push({
					elem: this,
					handlers: b.slice(h)
				}), g;
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(a, b) {
					return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function filter(a, b) {
					var c,
					    d,
					    e,
					    f = b.button;
					return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
				}
			},
			fix: function fix(a) {
				if (a[n.expando]) return a;
				var b,
				    c,
				    d,
				    e = a.type,
				    f = a,
				    g = this.fixHooks[e];
				g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
				while (b--) {
					c = d[b], a[c] = f[c];
				}return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function trigger() {
						return this !== _() && this.focus ? (this.focus(), !1) : void 0;
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						return this === _() && this.blur ? (this.blur(), !1) : void 0;
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function trigger() {
						return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
					},
					_default: function _default(a) {
						return n.nodeName(a.target, "a");
					}
				},
				beforeunload: {
					postDispatch: function postDispatch(a) {
						void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
					}
				}
			},
			simulate: function simulate(a, b, c, d) {
				var e = n.extend(new n.Event(), c, {
					type: a,
					isSimulated: !0,
					originalEvent: {}
				});
				d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
			}
		}, n.removeEvent = function (a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, !1);
		}, n.Event = function (a, b) {
			return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
		}, n.Event.prototype = {
			isDefaultPrevented: $,
			isPropagationStopped: $,
			isImmediatePropagationStopped: $,
			preventDefault: function preventDefault() {
				var a = this.originalEvent;
				this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
			},
			stopPropagation: function stopPropagation() {
				var a = this.originalEvent;
				this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var a = this.originalEvent;
				this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
			}
		}, n.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (a, b) {
			n.event.special[a] = {
				delegateType: b,
				bindType: b,
				handle: function handle(a) {
					var c,
					    d = this,
					    e = a.relatedTarget,
					    f = a.handleObj;
					return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
				}
			};
		}), k.focusinBubbles || n.each({
			focus: "focusin",
			blur: "focusout"
		}, function (a, b) {
			var c = function c(a) {
				n.event.simulate(b, a.target, n.event.fix(a), !0);
			};
			n.event.special[b] = {
				setup: function setup() {
					var d = this.ownerDocument || this,
					    e = L.access(d, b);
					e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
				},
				teardown: function teardown() {
					var d = this.ownerDocument || this,
					    e = L.access(d, b) - 1;
					e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
				}
			};
		}), n.fn.extend({
			on: function on(a, b, c, d, e) {
				var f, g;
				if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
					"string" != typeof b && (c = c || b, b = void 0);
					for (g in a) {
						this.on(g, b, c, a[g], e);
					}return this;
				}
				if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;
				return 1 === e && (f = d, d = function d(a) {
					return n().off(a), f.apply(this, arguments);
				}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
					n.event.add(this, a, d, c, b);
				});
			},
			one: function one(a, b, c, d) {
				return this.on(a, b, c, d, 1);
			},
			off: function off(a, b, c) {
				var d, e;
				if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
				if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
					for (e in a) {
						this.off(e, b, a[e]);
					}return this;
				}
				return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
					n.event.remove(this, a, c, b);
				});
			},
			trigger: function trigger(a, b) {
				return this.each(function () {
					n.event.trigger(a, b, this);
				});
			},
			triggerHandler: function triggerHandler(a, b) {
				var c = this[0];
				return c ? n.event.trigger(a, b, c, !0) : void 0;
			}
		});
		var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    ba = /<([\w:]+)/,
		    ca = /<|&#?\w+;/,
		    da = /<(?:script|style|link)/i,
		    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    fa = /^$|\/(?:java|ecma)script/i,
		    ga = /^true\/(.*)/,
		    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		    ia = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
		ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

		function ja(a, b) {
			return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
		}

		function ka(a) {
			return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
		}

		function la(a) {
			var b = ga.exec(a.type);
			return b ? a.type = b[1] : a.removeAttribute("type"), a;
		}

		function ma(a, b) {
			for (var c = 0, d = a.length; d > c; c++) {
				L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
			}
		}

		function na(a, b) {
			var c, d, e, f, g, h, i, j;
			if (1 === b.nodeType) {
				if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
					delete g.handle, g.events = {};
					for (e in j) {
						for (c = 0, d = j[e].length; d > c; c++) {
							n.event.add(b, e, j[e][c]);
						}
					}
				}
				M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
			}
		}

		function oa(a, b) {
			var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
			return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
		}

		function pa(a, b) {
			var c = b.nodeName.toLowerCase();
			"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
		}
		n.extend({
			clone: function clone(a, b, c) {
				var d,
				    e,
				    f,
				    g,
				    h = a.cloneNode(!0),
				    i = n.contains(a.ownerDocument, a);
				if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
					pa(f[d], g[d]);
				}if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
					na(f[d], g[d]);
				} else na(a, h);
				return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
			},
			buildFragment: function buildFragment(a, b, c, d) {
				for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
					if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
						f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
						while (j--) {
							f = f.lastChild;
						}n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
					} else l.push(b.createTextNode(e));
				}k.textContent = "", m = 0;
				while (e = l[m++]) {
					if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
						j = 0;
						while (e = f[j++]) {
							fa.test(e.type || "") && c.push(e);
						}
					}
				}return k;
			},
			cleanData: function cleanData(a) {
				for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
					if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
						if (b.events) for (d in b.events) {
							f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
						}L.cache[e] && delete L.cache[e];
					}
					delete M.cache[c[M.expando]];
				}
			}
		}), n.fn.extend({
			text: function text(a) {
				return J(this, function (a) {
					return void 0 === a ? n.text(this) : this.empty().each(function () {
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
					});
				}, null, a, arguments.length);
			},
			append: function append() {
				return this.domManip(arguments, function (a) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var b = ja(this, a);
						b.appendChild(a);
					}
				});
			},
			prepend: function prepend() {
				return this.domManip(arguments, function (a) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var b = ja(this, a);
						b.insertBefore(a, b.firstChild);
					}
				});
			},
			before: function before() {
				return this.domManip(arguments, function (a) {
					this.parentNode && this.parentNode.insertBefore(a, this);
				});
			},
			after: function after() {
				return this.domManip(arguments, function (a) {
					this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
				});
			},
			remove: function remove(a, b) {
				for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
					b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
				}return this;
			},
			empty: function empty() {
				for (var a, b = 0; null != (a = this[b]); b++) {
					1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
				}return this;
			},
			clone: function clone(a, b) {
				return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
					return n.clone(this, a, b);
				});
			},
			html: function html(a) {
				return J(this, function (a) {
					var b = this[0] || {},
					    c = 0,
					    d = this.length;
					if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
					if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
						a = a.replace(aa, "<$1></$2>");
						try {
							for (; d > c; c++) {
								b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
							}b = 0;
						} catch (e) {}
					}
					b && this.empty().append(a);
				}, null, a, arguments.length);
			},
			replaceWith: function replaceWith() {
				var a = arguments[0];
				return this.domManip(arguments, function (b) {
					a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
				}), a && (a.length || a.nodeType) ? this : this.remove();
			},
			detach: function detach(a) {
				return this.remove(a, !0);
			},
			domManip: function domManip(a, b) {
				a = e.apply([], a);
				var c,
				    d,
				    f,
				    g,
				    h,
				    i,
				    j = 0,
				    l = this.length,
				    m = this,
				    o = l - 1,
				    p = a[0],
				    q = n.isFunction(p);
				if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
					var d = m.eq(c);
					q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
				});
				if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
					for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
						h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
					}if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
						h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
					}
				}
				return this;
			}
		}), n.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (a, b) {
			n.fn[a] = function (a) {
				for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
					c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
				}return this.pushStack(d);
			};
		});
		var qa,
		    ra = {};

		function sa(b, c) {
			var d,
			    e = n(c.createElement(b)).appendTo(c.body),
			    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
			return e.detach(), f;
		}

		function ta(a) {
			var b = l,
			    c = ra[a];
			return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
		}
		var ua = /^margin/,
		    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
		    wa = function wa(b) {
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
		};

		function xa(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.style;
			return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
		}

		function ya(a, b) {
			return {
				get: function get() {
					return a() ? void delete this.get : (this.get = b).apply(this, arguments);
				}
			};
		}!function () {
			var b,
			    c,
			    d = l.documentElement,
			    e = l.createElement("div"),
			    f = l.createElement("div");
			if (f.style) {
				var _g = function _g() {
					f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
					var g = a.getComputedStyle(f, null);
					b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
				};

				f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

				a.getComputedStyle && n.extend(k, {
					pixelPosition: function pixelPosition() {
						return _g(), b;
					},
					boxSizingReliable: function boxSizingReliable() {
						return null == c && _g(), c;
					},
					reliableMarginRight: function reliableMarginRight() {
						var b,
						    c = f.appendChild(l.createElement("div"));
						return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
					}
				});
			}
		}(), n.swap = function (a, b, c, d) {
			var e,
			    f,
			    g = {};
			for (f in b) {
				g[f] = a.style[f], a.style[f] = b[f];
			}e = c.apply(a, d || []);
			for (f in b) {
				a.style[f] = g[f];
			}return e;
		};
		var za = /^(none|table(?!-c[ea]).+)/,
		    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
		    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
		    Ca = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		    Da = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    Ea = ["Webkit", "O", "Moz", "ms"];

		function Fa(a, b) {
			if (b in a) return b;
			var c = b[0].toUpperCase() + b.slice(1),
			    d = b,
			    e = Ea.length;
			while (e--) {
				if (b = Ea[e] + c, b in a) return b;
			}return d;
		}

		function Ga(a, b, c) {
			var d = Aa.exec(b);
			return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
		}

		function Ha(a, b, c, d, e) {
			for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
				"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
			}return g;
		}

		function Ia(a, b, c) {
			var d = !0,
			    e = "width" === b ? a.offsetWidth : a.offsetHeight,
			    f = wa(a),
			    g = "border-box" === n.css(a, "boxSizing", !1, f);
			if (0 >= e || null == e) {
				if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
				d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
			}
			return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
		}

		function Ja(a, b) {
			for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
				d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
			}for (g = 0; h > g; g++) {
				d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
			}return a;
		}
		n.extend({
			cssHooks: {
				opacity: {
					get: function get(a, b) {
						if (b) {
							var c = xa(a, "opacity");
							return "" === c ? "1" : c;
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": "cssFloat"
			},
			style: function style(a, b, c, d) {
				if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
					var e,
					    f,
					    g,
					    h = n.camelCase(b),
					    i = a.style;
					return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
				}
			},
			css: function css(a, b, c, d) {
				var e,
				    f,
				    g,
				    h = n.camelCase(b);
				return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
			}
		}), n.each(["height", "width"], function (a, b) {
			n.cssHooks[b] = {
				get: function get(a, c, d) {
					return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
						return Ia(a, b, d);
					}) : Ia(a, b, d) : void 0;
				},
				set: function set(a, c, d) {
					var e = d && wa(a);
					return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
				}
			};
		}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
			return b ? n.swap(a, {
				display: "inline-block"
			}, xa, [a, "marginRight"]) : void 0;
		}), n.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (a, b) {
			n.cssHooks[a + b] = {
				expand: function expand(c) {
					for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
						e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
					}return e;
				}
			}, ua.test(a) || (n.cssHooks[a + b].set = Ga);
		}), n.fn.extend({
			css: function css(a, b) {
				return J(this, function (a, b, c) {
					var d,
					    e,
					    f = {},
					    g = 0;
					if (n.isArray(b)) {
						for (d = wa(a), e = b.length; e > g; g++) {
							f[b[g]] = n.css(a, b[g], !1, d);
						}return f;
					}
					return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
				}, a, b, arguments.length > 1);
			},
			show: function show() {
				return Ja(this, !0);
			},
			hide: function hide() {
				return Ja(this);
			},
			toggle: function toggle(a) {
				return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
					S(this) ? n(this).show() : n(this).hide();
				});
			}
		});

		function Ka(a, b, c, d, e) {
			return new Ka.prototype.init(a, b, c, d, e);
		}
		n.Tween = Ka, Ka.prototype = {
			constructor: Ka,
			init: function init(a, b, c, d, e, f) {
				this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
			},
			cur: function cur() {
				var a = Ka.propHooks[this.prop];
				return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
			},
			run: function run(a) {
				var b,
				    c = Ka.propHooks[this.prop];
				return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
			}
		}, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
			_default: {
				get: function get(a) {
					var b;
					return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
				},
				set: function set(a) {
					n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
				}
			}
		}, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
			set: function set(a) {
				a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
			}
		}, n.easing = {
			linear: function linear(a) {
				return a;
			},
			swing: function swing(a) {
				return .5 - Math.cos(a * Math.PI) / 2;
			}
		}, n.fx = Ka.prototype.init, n.fx.step = {};
		var La,
		    Ma,
		    Na = /^(?:toggle|show|hide)$/,
		    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
		    Pa = /queueHooks$/,
		    Qa = [Va],
		    Ra = {
			"*": [function (a, b) {
				var c = this.createTween(a, b),
				    d = c.cur(),
				    e = Oa.exec(b),
				    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
				    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
				    h = 1,
				    i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do {
						h = h || ".5", g /= h, n.style(c.elem, a, g + f);
					} while (h !== (h = c.cur() / d) && 1 !== h && --i);
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
			}]
		};

		function Sa() {
			return setTimeout(function () {
				La = void 0;
			}), La = n.now();
		}

		function Ta(a, b) {
			var c,
			    d = 0,
			    e = {
				height: a
			};
			for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
				c = R[d], e["margin" + c] = e["padding" + c] = a;
			}return b && (e.opacity = e.width = a), e;
		}

		function Ua(a, b, c) {
			for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
				if (d = e[f].call(c, b, a)) return d;
			}
		}

		function Va(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l = this,
			    m = {},
			    o = a.style,
			    p = a.nodeType && S(a),
			    q = L.get(a, "fxshow");
			c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
				h.unqueued || i();
			}), h.unqueued++, l.always(function () {
				l.always(function () {
					h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
				});
			})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
				o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
			}));
			for (d in b) {
				if (e = b[d], Na.exec(e)) {
					if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
						if ("show" !== e || !q || void 0 === q[d]) continue;
						p = !0;
					}
					m[d] = q && q[d] || n.style(a, d);
				} else j = void 0;
			}if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
				q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
					n(a).hide();
				}), l.done(function () {
					var b;
					L.remove(a, "fxshow");
					for (b in m) {
						n.style(a, b, m[b]);
					}
				});
				for (d in m) {
					g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
				}
			}
		}

		function Wa(a, b) {
			var c, d, e, f, g;
			for (c in a) {
				if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
					f = g.expand(f), delete a[d];
					for (c in f) {
						c in a || (a[c] = f[c], b[c] = e);
					}
				} else b[d] = e;
			}
		}

		function Xa(a, b, c) {
			var d,
			    e,
			    f = 0,
			    g = Qa.length,
			    h = n.Deferred().always(function () {
				delete i.elem;
			}),
			    i = function i() {
				if (e) return !1;
				for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
					j.tweens[g].run(f);
				}return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
			},
			    j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: La || Sa(),
				duration: c.duration,
				tweens: [],
				createTween: function createTween(b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d;
				},
				stop: function stop(b) {
					var c = 0,
					    d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) {
						j.tweens[c].run(1);
					}return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
				}
			}),
			    k = j.props;
			for (Wa(k, j.opts.specialEasing); g > f; f++) {
				if (d = Qa[f].call(j, a, k, j.opts)) return d;
			}return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
				elem: a,
				anim: j,
				queue: j.opts.queue
			})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
		}
		n.Animation = n.extend(Xa, {
			tweener: function tweener(a, b) {
				n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) {
					c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
				}
			},
			prefilter: function prefilter(a, b) {
				b ? Qa.unshift(a) : Qa.push(a);
			}
		}), n.speed = function (a, b, c) {
			var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : {
				complete: c || !c && b || n.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
				n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
			}, d;
		}, n.fn.extend({
			fadeTo: function fadeTo(a, b, c, d) {
				return this.filter(S).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d);
			},
			animate: function animate(a, b, c, d) {
				var e = n.isEmptyObject(a),
				    f = n.speed(b, c, d),
				    g = function g() {
					var b = Xa(this, n.extend({}, a), f);
					(e || L.get(this, "finish")) && b.stop(!0);
				};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
			},
			stop: function stop(a, b, c) {
				var d = function d(a) {
					var b = a.stop;
					delete a.stop, b(c);
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
					var b = !0,
					    e = null != a && a + "queueHooks",
					    f = n.timers,
					    g = L.get(this);
					if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
						g[e] && g[e].stop && Pa.test(e) && d(g[e]);
					}for (e = f.length; e--;) {
						f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					}(b || !c) && n.dequeue(this, a);
				});
			},
			finish: function finish(a) {
				return a !== !1 && (a = a || "fx"), this.each(function () {
					var b,
					    c = L.get(this),
					    d = c[a + "queue"],
					    e = c[a + "queueHooks"],
					    f = n.timers,
					    g = d ? d.length : 0;
					for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
						f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					}for (b = 0; g > b; b++) {
						d[b] && d[b].finish && d[b].finish.call(this);
					}delete c.finish;
				});
			}
		}), n.each(["toggle", "show", "hide"], function (a, b) {
			var c = n.fn[b];
			n.fn[b] = function (a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
			};
		}), n.each({
			slideDown: Ta("show"),
			slideUp: Ta("hide"),
			slideToggle: Ta("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (a, b) {
			n.fn[a] = function (a, c, d) {
				return this.animate(b, a, c, d);
			};
		}), n.timers = [], n.fx.tick = function () {
			var a,
			    b = 0,
			    c = n.timers;
			for (La = n.now(); b < c.length; b++) {
				a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			}c.length || n.fx.stop(), La = void 0;
		}, n.fx.timer = function (a) {
			n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
		}, n.fx.interval = 13, n.fx.start = function () {
			Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
		}, n.fx.stop = function () {
			clearInterval(Ma), Ma = null;
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function (a, b) {
			return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
				var d = setTimeout(b, a);
				c.stop = function () {
					clearTimeout(d);
				};
			});
		}, function () {
			var a = l.createElement("input"),
			    b = l.createElement("select"),
			    c = b.appendChild(l.createElement("option"));
			a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
		}();
		var Ya,
		    Za,
		    $a = n.expr.attrHandle;
		n.fn.extend({
			attr: function attr(a, b) {
				return J(this, n.attr, a, b, arguments.length > 1);
			},
			removeAttr: function removeAttr(a) {
				return this.each(function () {
					n.removeAttr(this, a);
				});
			}
		}), n.extend({
			attr: function attr(a, b, c) {
				var d,
				    e,
				    f = a.nodeType;
				if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
			},
			removeAttr: function removeAttr(a, b) {
				var c,
				    d,
				    e = 0,
				    f = b && b.match(E);
				if (f && 1 === a.nodeType) while (c = f[e++]) {
					d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
				}
			},
			attrHooks: {
				type: {
					set: function set(a, b) {
						if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
							var c = a.value;
							return a.setAttribute("type", b), c && (a.value = c), b;
						}
					}
				}
			}
		}), Za = {
			set: function set(a, b, c) {
				return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
			}
		}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
			var c = $a[b] || n.find.attr;
			$a[b] = function (a, b, d) {
				var e, f;
				return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
			};
		});
		var _a = /^(?:input|select|textarea|button)$/i;
		n.fn.extend({
			prop: function prop(a, b) {
				return J(this, n.prop, a, b, arguments.length > 1);
			},
			removeProp: function removeProp(a) {
				return this.each(function () {
					delete this[n.propFix[a] || a];
				});
			}
		}), n.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function prop(a, b, c) {
				var d,
				    e,
				    f,
				    g = a.nodeType;
				if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
			},
			propHooks: {
				tabIndex: {
					get: function get(a) {
						return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
					}
				}
			}
		}), k.optSelected || (n.propHooks.selected = {
			get: function get(a) {
				var b = a.parentNode;
				return b && b.parentNode && b.parentNode.selectedIndex, null;
			}
		}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			n.propFix[this.toLowerCase()] = this;
		});
		var ab = /[\t\r\n\f]/g;
		n.fn.extend({
			addClass: function addClass(a) {
				var b,
				    c,
				    d,
				    e,
				    f,
				    g,
				    h = "string" == typeof a && a,
				    i = 0,
				    j = this.length;
				if (n.isFunction(a)) return this.each(function (b) {
					n(this).addClass(a.call(this, b, this.className));
				});
				if (h) for (b = (a || "").match(E) || []; j > i; i++) {
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
						f = 0;
						while (e = b[f++]) {
							d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						}g = n.trim(d), c.className !== g && (c.className = g);
					}
				}return this;
			},
			removeClass: function removeClass(a) {
				var b,
				    c,
				    d,
				    e,
				    f,
				    g,
				    h = 0 === arguments.length || "string" == typeof a && a,
				    i = 0,
				    j = this.length;
				if (n.isFunction(a)) return this.each(function (b) {
					n(this).removeClass(a.call(this, b, this.className));
				});
				if (h) for (b = (a || "").match(E) || []; j > i; i++) {
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
						f = 0;
						while (e = b[f++]) {
							while (d.indexOf(" " + e + " ") >= 0) {
								d = d.replace(" " + e + " ", " ");
							}
						}g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
					}
				}return this;
			},
			toggleClass: function toggleClass(a, b) {
				var c = typeof a === "undefined" ? "undefined" : _typeof(a);
				return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
					n(this).toggleClass(a.call(this, c, this.className, b), b);
				} : function () {
					if ("string" === c) {
						var b,
						    d = 0,
						    e = n(this),
						    f = a.match(E) || [];
						while (b = f[d++]) {
							e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
						}
					} else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
				});
			},
			hasClass: function hasClass(a) {
				for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
					if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
				}return !1;
			}
		});
		var bb = /\r/g;
		n.fn.extend({
			val: function val(a) {
				var b,
				    c,
				    d,
				    e = this[0];{
					if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
						var e;
						1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
							return null == a ? "" : a + "";
						})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
					});
					if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
				}
			}
		}), n.extend({
			valHooks: {
				option: {
					get: function get(a) {
						var b = n.find.attr(a, "value");
						return null != b ? b : n.trim(n.text(a));
					}
				},
				select: {
					get: function get(a) {
						for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
							if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
								if (b = n(c).val(), f) return b;
								g.push(b);
							}
						}return g;
					},
					set: function set(a, b) {
						var c,
						    d,
						    e = a.options,
						    f = n.makeArray(b),
						    g = e.length;
						while (g--) {
							d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
						}return c || (a.selectedIndex = -1), f;
					}
				}
			}
		}), n.each(["radio", "checkbox"], function () {
			n.valHooks[this] = {
				set: function set(a, b) {
					return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
				}
			}, k.checkOn || (n.valHooks[this].get = function (a) {
				return null === a.getAttribute("value") ? "on" : a.value;
			});
		}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
			n.fn[b] = function (a, c) {
				return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
			};
		}), n.fn.extend({
			hover: function hover(a, b) {
				return this.mouseenter(a).mouseleave(b || a);
			},
			bind: function bind(a, b, c) {
				return this.on(a, null, b, c);
			},
			unbind: function unbind(a, b) {
				return this.off(a, null, b);
			},
			delegate: function delegate(a, b, c, d) {
				return this.on(b, a, c, d);
			},
			undelegate: function undelegate(a, b, c) {
				return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
			}
		});
		var cb = n.now(),
		    db = /\?/;
		n.parseJSON = function (a) {
			return JSON.parse(a + "");
		}, n.parseXML = function (a) {
			var b, c;
			if (!a || "string" != typeof a) return null;
			try {
				c = new DOMParser(), b = c.parseFromString(a, "text/xml");
			} catch (d) {
				b = void 0;
			}
			return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
		};
		var eb = /#.*$/,
		    fb = /([?&])_=[^&]*/,
		    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    ib = /^(?:GET|HEAD)$/,
		    jb = /^\/\//,
		    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		    lb = {},
		    mb = {},
		    nb = "*/".concat("*"),
		    ob = a.location.href,
		    pb = kb.exec(ob.toLowerCase()) || [];

		function qb(a) {
			return function (b, c) {
				"string" != typeof b && (c = b, b = "*");
				var d,
				    e = 0,
				    f = b.toLowerCase().match(E) || [];
				if (n.isFunction(c)) while (d = f[e++]) {
					"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
				}
			};
		}

		function rb(a, b, c, d) {
			var e = {},
			    f = a === mb;

			function g(h) {
				var i;
				return e[h] = !0, n.each(a[h] || [], function (a, h) {
					var j = h(b, c, d);
					return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
				}), i;
			}
			return g(b.dataTypes[0]) || !e["*"] && g("*");
		}

		function sb(a, b) {
			var c,
			    d,
			    e = n.ajaxSettings.flatOptions || {};
			for (c in b) {
				void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
			}return d && n.extend(!0, a, d), a;
		}

		function tb(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.contents,
			    i = a.dataTypes;
			while ("*" === i[0]) {
				i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
			}if (d) for (e in h) {
				if (h[e] && h[e].test(d)) {
					i.unshift(e);
					break;
				}
			}if (i[0] in c) f = i[0];else {
				for (e in c) {
					if (!i[0] || a.converters[e + " " + i[0]]) {
						f = e;
						break;
					}
					g || (g = e);
				}
				f = f || g;
			}
			return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
		}

		function ub(a, b, c, d) {
			var e,
			    f,
			    g,
			    h,
			    i,
			    j = {},
			    k = a.dataTypes.slice();
			if (k[1]) for (g in a.converters) {
				j[g.toLowerCase()] = a.converters[g];
			}f = k.shift();
			while (f) {
				if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
					if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
						if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
							g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
							break;
						}
					}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
						b = g(b);
					} catch (l) {
						return {
							state: "parsererror",
							error: g ? l : "No conversion from " + i + " to " + f
						};
					}
				}
			}return {
				state: "success",
				data: b
			};
		}
		n.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: ob,
				type: "GET",
				isLocal: hb.test(pb[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": nb,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": n.parseJSON,
					"text xml": n.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function ajaxSetup(a, b) {
				return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
			},
			ajaxPrefilter: qb(lb),
			ajaxTransport: qb(mb),
			ajax: function ajax(a, b) {
				"object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};
				var c,
				    d,
				    e,
				    f,
				    g,
				    h,
				    i,
				    j,
				    k = n.ajaxSetup({}, b),
				    l = k.context || k,
				    m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
				    o = n.Deferred(),
				    p = n.Callbacks("once memory"),
				    q = k.statusCode || {},
				    r = {},
				    s = {},
				    t = 0,
				    u = "canceled",
				    v = {
					readyState: 0,
					getResponseHeader: function getResponseHeader(a) {
						var b;
						if (2 === t) {
							if (!f) {
								f = {};
								while (b = gb.exec(e)) {
									f[b[1].toLowerCase()] = b[2];
								}
							}
							b = f[a.toLowerCase()];
						}
						return null == b ? null : b;
					},
					getAllResponseHeaders: function getAllResponseHeaders() {
						return 2 === t ? e : null;
					},
					setRequestHeader: function setRequestHeader(a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this;
					},
					overrideMimeType: function overrideMimeType(a) {
						return t || (k.mimeType = a), this;
					},
					statusCode: function statusCode(a) {
						var b;
						if (a) if (2 > t) for (b in a) {
							q[b] = [q[b], a[b]];
						} else v.always(a[v.status]);
						return this;
					},
					abort: function abort(a) {
						var b = a || u;
						return c && c.abort(b), x(0, b), this;
					}
				};
				if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
				i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
				for (j in k.headers) {
					v.setRequestHeader(j, k.headers[j]);
				}if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
				u = "abort";
				for (j in {
					success: 1,
					error: 1,
					complete: 1
				}) {
					v[j](k[j]);
				}if (c = rb(mb, k, b, v)) {
					v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
						v.abort("timeout");
					}, k.timeout));
					try {
						t = 1, c.send(r, x);
					} catch (w) {
						if (!(2 > t)) throw w;
						x(-1, w);
					}
				} else x(-1, "No Transport");

				function x(a, b, f, h) {
					var j,
					    r,
					    s,
					    u,
					    w,
					    x = b;
					2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
				}
				return v;
			},
			getJSON: function getJSON(a, b, c) {
				return n.get(a, b, c, "json");
			},
			getScript: function getScript(a, b) {
				return n.get(a, void 0, b, "script");
			}
		}), n.each(["get", "post"], function (a, b) {
			n[b] = function (a, c, d, e) {
				return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
					url: a,
					type: b,
					dataType: e,
					data: c,
					success: d
				});
			};
		}), n._evalUrl = function (a) {
			return n.ajax({
				url: a,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			});
		}, n.fn.extend({
			wrapAll: function wrapAll(a) {
				var b;
				return n.isFunction(a) ? this.each(function (b) {
					n(this).wrapAll(a.call(this, b));
				}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
					var a = this;
					while (a.firstElementChild) {
						a = a.firstElementChild;
					}return a;
				}).append(this)), this);
			},
			wrapInner: function wrapInner(a) {
				return this.each(n.isFunction(a) ? function (b) {
					n(this).wrapInner(a.call(this, b));
				} : function () {
					var b = n(this),
					    c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a);
				});
			},
			wrap: function wrap(a) {
				var b = n.isFunction(a);
				return this.each(function (c) {
					n(this).wrapAll(b ? a.call(this, c) : a);
				});
			},
			unwrap: function unwrap() {
				return this.parent().each(function () {
					n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
				}).end();
			}
		}), n.expr.filters.hidden = function (a) {
			return a.offsetWidth <= 0 && a.offsetHeight <= 0;
		}, n.expr.filters.visible = function (a) {
			return !n.expr.filters.hidden(a);
		};
		var vb = /%20/g,
		    wb = /\[\]$/,
		    xb = /\r?\n/g,
		    yb = /^(?:submit|button|image|reset|file)$/i,
		    zb = /^(?:input|select|textarea|keygen)/i;

		function Ab(a, b, c, d) {
			var e;
			if (n.isArray(b)) n.each(b, function (b, e) {
				c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
			});else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
				Ab(a + "[" + e + "]", b[e], c, d);
			}
		}
		n.param = function (a, b) {
			var c,
			    d = [],
			    e = function e(a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
			};
			if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
				e(this.name, this.value);
			});else for (c in a) {
				Ab(c, a[c], b, e);
			}return d.join("&").replace(vb, "+");
		}, n.fn.extend({
			serialize: function serialize() {
				return n.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
					var a = n.prop(this, "elements");
					return a ? n.makeArray(a) : this;
				}).filter(function () {
					var a = this.type;
					return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
				}).map(function (a, b) {
					var c = n(this).val();
					return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
						return {
							name: b.name,
							value: a.replace(xb, "\r\n")
						};
					}) : {
						name: b.name,
						value: c.replace(xb, "\r\n")
					};
				}).get();
			}
		}), n.ajaxSettings.xhr = function () {
			try {
				return new XMLHttpRequest();
			} catch (a) {}
		};
		var Bb = 0,
		    Cb = {},
		    Db = {
			0: 200,
			1223: 204
		},
		    Eb = n.ajaxSettings.xhr();
		a.attachEvent && a.attachEvent("onunload", function () {
			for (var a in Cb) {
				Cb[a]();
			}
		}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
			var _b2;
			return k.cors || Eb && !a.crossDomain ? {
				send: function send(c, d) {
					var e,
					    f = a.xhr(),
					    g = ++Bb;
					if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
						f[e] = a.xhrFields[e];
					}a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
					for (e in c) {
						f.setRequestHeader(e, c[e]);
					}_b2 = function b(a) {
						return function () {
							_b2 && (delete Cb[g], _b2 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
								text: f.responseText
							} : void 0, f.getAllResponseHeaders()));
						};
					}, f.onload = _b2(), f.onerror = _b2("error"), _b2 = Cb[g] = _b2("abort");
					try {
						f.send(a.hasContent && a.data || null);
					} catch (h) {
						if (_b2) throw h;
					}
				},
				abort: function abort() {
					_b2 && _b2();
				}
			} : void 0;
		}), n.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function textScript(a) {
					return n.globalEval(a), a;
				}
			}
		}), n.ajaxPrefilter("script", function (a) {
			void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
		}), n.ajaxTransport("script", function (a) {
			if (a.crossDomain) {
				var b, _c;
				return {
					send: function send(d, e) {
						b = n("<script>").prop({
							async: !0,
							charset: a.scriptCharset,
							src: a.url
						}).on("load error", _c = function c(a) {
							b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
						}), l.head.appendChild(b[0]);
					},
					abort: function abort() {
						_c && _c();
					}
				};
			}
		});
		var Fb = [],
		    Gb = /(=)\?(?=&|$)|\?\?/;
		n.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var a = Fb.pop() || n.expando + "_" + cb++;
				return this[a] = !0, a;
			}
		}), n.ajaxPrefilter("json jsonp", function (b, c, d) {
			var e,
			    f,
			    g,
			    h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
			return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
				return g || n.error(e + " was not called"), g[0];
			}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
				g = arguments;
			}, d.always(function () {
				a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
			}), "script") : void 0;
		}), n.parseHTML = function (a, b, c) {
			if (!a || "string" != typeof a) return null;
			"boolean" == typeof b && (c = b, b = !1), b = b || l;
			var d = v.exec(a),
			    e = !c && [];
			return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
		};
		var Hb = n.fn.load;
		n.fn.load = function (a, b, c) {
			if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
			var d,
			    e,
			    f,
			    g = this,
			    h = a.indexOf(" ");
			return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({
				url: a,
				type: e,
				dataType: "html",
				data: b
			}).done(function (a) {
				f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
			}).complete(c && function (a, b) {
				g.each(c, f || [a.responseText, b, a]);
			}), this;
		}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
			n.fn[b] = function (a) {
				return this.on(b, a);
			};
		}), n.expr.filters.animated = function (a) {
			return n.grep(n.timers, function (b) {
				return a === b.elem;
			}).length;
		};
		var Ib = a.document.documentElement;

		function Jb(a) {
			return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
		}
		n.offset = {
			setOffset: function setOffset(a, b, c) {
				var d,
				    e,
				    f,
				    g,
				    h,
				    i,
				    j,
				    k = n.css(a, "position"),
				    l = n(a),
				    m = {};
				"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
			}
		}, n.fn.extend({
			offset: function offset(a) {
				if (arguments.length) return void 0 === a ? this : this.each(function (b) {
					n.offset.setOffset(this, a, b);
				});
				var b,
				    c,
				    d = this[0],
				    e = {
					top: 0,
					left: 0
				},
				    f = d && d.ownerDocument;
				if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
					top: e.top + c.pageYOffset - b.clientTop,
					left: e.left + c.pageXOffset - b.clientLeft
				}) : e;
			},
			position: function position() {
				if (this[0]) {
					var a,
					    b,
					    c = this[0],
					    d = {
						top: 0,
						left: 0
					};
					return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
						top: b.top - d.top - n.css(c, "marginTop", !0),
						left: b.left - d.left - n.css(c, "marginLeft", !0)
					};
				}
			},
			offsetParent: function offsetParent() {
				return this.map(function () {
					var a = this.offsetParent || Ib;
					while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
						a = a.offsetParent;
					}return a || Ib;
				});
			}
		}), n.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (b, c) {
			var d = "pageYOffset" === c;
			n.fn[b] = function (e) {
				return J(this, function (b, e, f) {
					var g = Jb(b);
					return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
				}, b, e, arguments.length, null);
			};
		}), n.each(["top", "left"], function (a, b) {
			n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
				return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
			});
		}), n.each({
			Height: "height",
			Width: "width"
		}, function (a, b) {
			n.each({
				padding: "inner" + a,
				content: b,
				"": "outer" + a
			}, function (c, d) {
				n.fn[d] = function (d, e) {
					var f = arguments.length && (c || "boolean" != typeof d),
					    g = c || (d === !0 || e === !0 ? "margin" : "border");
					return J(this, function (b, c, d) {
						var e;
						return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
					}, b, f ? d : void 0, f, null);
				};
			});
		}), n.fn.size = function () {
			return this.length;
		}, n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(13) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return n;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		var Kb = a.jQuery,
		    Lb = a.$;
		return n.noConflict = function (b) {
			return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
		}, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = n), n;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function (t, e) {
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.echarts = e();
	}(undefined, function () {
	  var t, e;!function () {
	    function i(t, e) {
	      if (!e) return t;if (0 === t.indexOf(".")) {
	        var i = e.split("/"),
	            n = t.split("/"),
	            r = i.length - 1,
	            a = n.length,
	            o = 0,
	            s = 0;t: for (var l = 0; a > l; l++) {
	          switch (n[l]) {case "..":
	              if (!(r > o)) break t;o++, s++;break;case ".":
	              s++;break;default:
	              break t;}
	        }return i.length = r - o, n = n.slice(s), i.concat(n).join("/");
	      }return t;
	    }function n(t) {
	      function e(e, o) {
	        if ("string" == typeof e) {
	          var s = n[e];return s || (s = a(i(e, t)), n[e] = s), s;
	        }e instanceof Array && (o = o || function () {}, o.apply(this, r(e, o, t)));
	      }var n = {};return e;
	    }function r(e, n, r) {
	      for (var s = [], l = o[r], c = 0, u = Math.min(e.length, n.length); u > c; c++) {
	        var h,
	            d = i(e[c], r);switch (d) {case "require":
	            h = l && l.require || t;break;case "exports":
	            h = l.exports;break;case "module":
	            h = l;break;default:
	            h = a(d);}s.push(h);
	      }return s;
	    }function a(t) {
	      var e = o[t];if (!e) throw new Error("No " + t);if (!e.defined) {
	        var i = e.factory,
	            n = i.apply(this, r(e.deps || [], i, t));"undefined" != typeof n && (e.exports = n), e.defined = 1;
	      }return e.exports;
	    }var o = {};e = function e(t, _e2, i) {
	      o[t] = { id: t, deps: _e2, factory: i, defined: 0, exports: {}, require: n(t) };
	    }, t = n("");
	  }();var i = "__dirty",
	      n = "undefined",
	      r = "moveTo",
	      a = "transform",
	      o = "ecModel",
	      s = "category",
	      l = "radius",
	      c = "createElement",
	      u = "getShallow",
	      h = "normal",
	      d = "stroke",
	      f = "applyTransform",
	      p = "getExtent",
	      v = "getTicks",
	      m = "contain",
	      g = "inherits",
	      y = "indexOf",
	      _ = "function",
	      x = "isArray",
	      b = "replace",
	      w = "zlevel",
	      T = "dataIndex",
	      M = "splice",
	      S = "length",
	      A = "defaults",
	      C = "extend",
	      P = "isObject",
	      L = "getData",
	      z = "create",
	      k = "ignore",
	      I = "storage",
	      D = "canvasSupported",
	      R = "resize",
	      E = "string",
	      O = "prototype",
	      B = "toLowerCase",
	      F = "zrender/core/util",
	      N = "opacity",
	      V = "position",
	      H = "bottom",
	      G = "center",
	      q = "middle",
	      W = "getHeight",
	      j = "getWidth",
	      U = "target",
	      X = "height",
	      Y = "getBoundingRect",
	      Z = "getFont",
	      $ = "textStyle",
	      Q = "getModel",
	      K = "require";e("echarts/component/title", [K, "../echarts", "../util/graphic", "../util/layout"], function (t) {
	    var e = t("../echarts"),
	        i = t("../util/graphic"),
	        n = t("../util/layout");e.extendComponentModel({ type: "title", layoutMode: { type: "box", ignoreSize: !0 }, defaultOption: { zlevel: 0, z: 6, show: !0, text: "", target: "blank", subtext: "", subtarget: "blank", left: 0, top: 0, backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, textStyle: { fontSize: 18, fontWeight: "bolder", color: "#333" }, subtextStyle: { color: "#aaa" } } }), e.extendComponentView({ type: "title", render: function render(t, e, r) {
	        if (this.group.removeAll(), t.get("show")) {
	          var a = this.group,
	              o = t[Q]($),
	              s = t[Q]("subtextStyle"),
	              l = t.get("textAlign"),
	              c = t.get("textBaseline"),
	              u = new i.Text({ style: { text: t.get("text"), textFont: o[Z](), fill: o.getTextColor() }, z2: 10 }),
	              h = u[Y](),
	              d = t.get("subtext"),
	              f = new i.Text({ style: { text: d, textFont: s[Z](), fill: s.getTextColor(), y: h[X] + t.get("itemGap"), textBaseline: "top" }, z2: 10 }),
	              p = t.get("link"),
	              v = t.get("sublink");u.silent = !p, f.silent = !v, p && u.on("click", function () {
	            window.open(p, "_" + t.get(U));
	          }), v && f.on("click", function () {
	            window.open(v, "_" + t.get("subtarget"));
	          }), a.add(u), d && a.add(f);var m = a[Y](),
	              g = t.getBoxLayoutParams();g.width = m.width, g[X] = m[X];var y = n.getLayoutRect(g, { width: r[j](), height: r[W]() }, t.get("padding"));l || (l = t.get("left") || t.get("right"), l === q && (l = G), "right" === l ? y.x += y.width : l === G && (y.x += y.width / 2)), c || (c = t.get("top") || t.get(H), c === G && (c = q), c === H ? y.y += y[X] : c === q && (y.y += y[X] / 2), c = c || "top"), a.attr(V, [y.x, y.y]);var _ = { textAlign: l, textVerticalAlign: c };u.setStyle(_), f.setStyle(_), m = a[Y]();var x = y.margin,
	              b = t.getItemStyle(["color", N]);b.fill = t.get("backgroundColor");var w = new i.Rect({ shape: { x: m.x - x[3], y: m.y - x[0], width: m.width + x[1] + x[3], height: m[X] + x[0] + x[2] }, style: b, silent: !0 });i.subPixelOptimizeRect(w), a.add(w);
	        }
	      } });
	  }), e("echarts/chart/radar", [K, F, "../echarts", "../component/radar", "./radar/RadarSeries", "./radar/RadarView", "../visual/dataColor", "../visual/symbol", "./radar/radarLayout", "../processor/dataFilter", "./radar/backwardCompat"], function (t) {
	    var e = t(F),
	        i = t("../echarts");t("../component/radar"), t("./radar/RadarSeries"), t("./radar/RadarView"), i.registerVisual(e.curry(t("../visual/dataColor"), "radar")), i.registerVisual(e.curry(t("../visual/symbol"), "radar", "circle", null)), i.registerLayout(t("./radar/radarLayout")), i.registerProcessor(e.curry(t("../processor/dataFilter"), "radar")), i.registerPreprocessor(t("./radar/backwardCompat"));
	  }), e("echarts/component/polar", [K, "../coord/polar/polarCreator", "./angleAxis", "./radiusAxis", "../echarts"], function (t) {
	    t("../coord/polar/polarCreator"), t("./angleAxis"), t("./radiusAxis"), t("../echarts").extendComponentView({ type: "polar" });
	  }), e("echarts/component/legend", [K, "./legend/LegendModel", "./legend/legendAction", "./legend/LegendView", "../echarts", "./legend/legendFilter"], function (t) {
	    t("./legend/LegendModel"), t("./legend/legendAction"), t("./legend/LegendView");var e = t("../echarts");e.registerProcessor(t("./legend/legendFilter"));
	  }), e("echarts/component/tooltip", [K, "./tooltip/TooltipModel", "./tooltip/TooltipView", "../echarts"], function (t) {
	    t("./tooltip/TooltipModel"), t("./tooltip/TooltipView"), t("../echarts").registerAction({ type: "showTip", event: "showTip", update: "none" }, function () {}), t("../echarts").registerAction({ type: "hideTip", event: "hideTip", update: "none" }, function () {});
	  }), e("echarts/echarts", [K, "zrender/core/env", "./model/Global", "./ExtensionAPI", "./CoordinateSystem", "./model/OptionManager", "./model/Component", "./model/Series", "./view/Component", "./view/Chart", "./util/graphic", "zrender", F, "zrender/tool/color", "zrender/mixin/Eventful", "zrender/core/timsort", "./loading/default", "./visual/seriesColor", "./preprocessor/backwardCompat", "./data/List", "./model/Model", "./util/number", "./util/format", "zrender/core/matrix", "zrender/core/vector"], function (t) {
	    function e(t) {
	      return function (e, i, n) {
	        e = e && e[B](), ne[O][t].call(this, e, i, n);
	      };
	    }function i() {
	      ne.call(this);
	    }function n(t, e, n) {
	      function r(t, e) {
	        return t.prio - e.prio;
	      }n = n || {}, (typeof e === "undefined" ? "undefined" : _typeof(e)) === E && (e = Me[e]), this.id, this.group, this._dom = t, this._zr = te.init(t, { renderer: n.renderer || "canvas", devicePixelRatio: n.devicePixelRatio }), this._theme = ee.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new V(this), this._coordSysMgr = new G(), ne.call(this), this._messageCenter = new i(), this._initEvents(), this[R] = ee.bind(this[R], this), this._pendingActions = [], re(Te, r), re(be, r);
	    }function r(t, e) {
	      var i = this._model;i && i.eachComponent({ mainType: "series", query: e }, function (n) {
	        var r = this._chartsMap[n.__viewId];r && r.__alive && r[t](n, i, this._api, e);
	      }, this);
	    }function a(t, e, i) {
	      var n = this._api;ae(this._componentsViews, function (r) {
	        var a = r.__model;r[t](a, e, n, i), p(a, r);
	      }, this), e.eachSeries(function (r) {
	        var a = this._chartsMap[r.__viewId];a[t](r, e, n, i), p(r, a), f(r, a);
	      }, this), d(this._zr, e);
	    }function o(t, e) {
	      for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, a = this._zr, o = 0; o < n[S]; o++) {
	        n[o].__alive = !1;
	      }e[i ? "eachComponent" : "eachSeries"](function (t, o) {
	        if (i) {
	          if ("series" === t) return;
	        } else o = t;var s = o.id + "_" + o.type,
	            l = r[s];if (!l) {
	          var c = Y.parseClassType(o.type),
	              u = i ? $.getClass(c.main, c.sub) : K.getClass(c.sub);if (!u) return;l = new u(), l.init(e, this._api), r[s] = l, n.push(l), a.add(l.group);
	        }o.__viewId = s, l.__alive = !0, l.__id = s, l.__model = o;
	      }, this);for (var o = 0; o < n[S];) {
	        var s = n[o];s.__alive ? o++ : (a.remove(s.group), s.dispose(e, this._api), n[M](o, 1), delete r[s.__id]);
	      }
	    }function s(t, e) {
	      ae(be, function (i) {
	        i.func(t, e);
	      });
	    }function l(t) {
	      var e = {};t.eachSeries(function (t) {
	        var i = t.get("stack"),
	            n = t[L]();if (i && "list" === n.type) {
	          var r = e[i];r && (n.stackedOn = r), e[i] = n;
	        }
	      });
	    }function c(t, e) {
	      var i = this._api;ae(Te, function (n) {
	        n.isLayout && n.func(t, i, e);
	      });
	    }function u(t, e) {
	      var i = this._api;t.clearColorPalette(), t.eachSeries(function (t) {
	        t.clearColorPalette();
	      }), ae(Te, function (n) {
	        n.func(t, i, e);
	      });
	    }function h(t, e) {
	      var i = this._api;ae(this._componentsViews, function (n) {
	        var r = n.__model;n.render(r, t, i, e), p(r, n);
	      }, this), ae(this._chartsViews, function (t) {
	        t.__alive = !1;
	      }, this), t.eachSeries(function (n) {
	        var r = this._chartsMap[n.__viewId];r.__alive = !0, r.render(n, t, i, e), r.group.silent = !!n.get("silent"), p(n, r), f(n, r);
	      }, this), d(this._zr, t), ae(this._chartsViews, function (e) {
	        e.__alive || e.remove(t, i);
	      }, this);
	    }function d(t, e) {
	      var i = t[I],
	          n = 0;i.traverse(function (t) {
	        t.isGroup || n++;
	      }), n > e.get("hoverLayerThreshold") && !m.node && i.traverse(function (t) {
	        t.isGroup || (t.useHoverLayer = !0);
	      });
	    }function f(t, e) {
	      var i = 0;e.group.traverse(function (t) {
	        "group" === t.type || t[k] || i++;
	      });var n = +t.get("progressive"),
	          r = i > t.get("progressiveThreshold") && n && !m.node;r && e.group.traverse(function (t) {
	        t.isGroup || (t.progressive = r ? Math.floor(i++ / n) : -1, r && t.stopAnimation(!0));
	      });var a = t.get("blendMode") || null;e.group.traverse(function (t) {
	        t.isGroup || t.setStyle("blend", a);
	      });
	    }function p(t, e) {
	      var i = t.get("z"),
	          n = t.get(w);e.group.traverse(function (t) {
	        "group" !== t.type && (null != i && (t.z = i), null != n && (t[w] = n));
	      });
	    }function v(t) {
	      function e(t, e) {
	        for (var i = 0; i < t[S]; i++) {
	          var n = t[i];n[a] = e;
	        }
	      }var i = 0,
	          n = 1,
	          r = 2,
	          a = "__connectUpdateStatus";ee.each(xe, function (o, s) {
	        t._messageCenter.on(s, function (o) {
	          if (Ae[t.group] && t[a] !== i) {
	            var s = t.makeActionFromEvent(o),
	                l = [];for (var c in Se) {
	              var u = Se[c];u !== t && u.group === t.group && l.push(u);
	            }e(l, i), ae(l, function (t) {
	              t[a] !== n && t.dispatchAction(s);
	            }), e(l, r);
	          }
	        });
	      });
	    }var m = t("zrender/core/env"),
	        N = t("./model/Global"),
	        V = t("./ExtensionAPI"),
	        G = t("./CoordinateSystem"),
	        q = t("./model/OptionManager"),
	        Y = t("./model/Component"),
	        Z = t("./model/Series"),
	        $ = t("./view/Component"),
	        K = t("./view/Chart"),
	        J = t("./util/graphic"),
	        te = t("zrender"),
	        ee = t(F),
	        ie = t("zrender/tool/color"),
	        ne = t("zrender/mixin/Eventful"),
	        re = t("zrender/core/timsort"),
	        ae = ee.each,
	        oe = 1e3,
	        se = 5e3,
	        le = 1e3,
	        ce = 2e3,
	        ue = 3e3,
	        he = 4e3,
	        de = 5e3,
	        fe = "__flag_in_main_process",
	        pe = "_hasGradientOrPatternBg";i[O].on = e("on"), i[O].off = e("off"), i[O].one = e("one"), ee.mixin(i, ne);var ve = n[O];ve.getDom = function () {
	      return this._dom;
	    }, ve.getZr = function () {
	      return this._zr;
	    }, ve.setOption = function (t, e, i) {
	      if (this[fe] = !0, !this._model || e) {
	        var n = new q(this._api),
	            r = this._theme,
	            a = this._model = new N(null, null, r, n);a.init(null, null, r, n);
	      }this._model.setOption(t, we), me.prepareAndUpdate.call(this), this[fe] = !1, this._flushPendingActions(), !i && this._zr.refreshImmediately();
	    }, ve.setTheme = function () {
	      console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
	    }, ve[Q] = function () {
	      return this._model;
	    }, ve.getOption = function () {
	      return this._model.getOption();
	    }, ve[j] = function () {
	      return this._zr[j]();
	    }, ve[W] = function () {
	      return this._zr[W]();
	    }, ve.getRenderedCanvas = function (t) {
	      if (m[D]) {
	        t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");var e = this._zr,
	            i = e[I].getDisplayList();return ee.each(i, function (t) {
	          t.stopAnimation(!0);
	        }), e.painter.getRenderedCanvas(t);
	      }
	    }, ve.getDataURL = function (t) {
	      t = t || {};var e = t.excludeComponents,
	          i = this._model,
	          n = [],
	          r = this;ae(e, function (t) {
	        i.eachComponent({ mainType: t }, function (t) {
	          var e = r._componentsMap[t.__viewId];e.group[k] || (n.push(e), e.group[k] = !0);
	        });
	      });var a = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return ae(n, function (t) {
	        t.group[k] = !1;
	      }), a;
	    }, ve.getConnectedDataURL = function (t) {
	      if (m[D]) {
	        var e = this.group,
	            i = Math.min,
	            n = Math.max,
	            r = 1 / 0;if (Ae[e]) {
	          var a = r,
	              o = r,
	              s = -r,
	              l = -r,
	              c = [],
	              u = t && t.pixelRatio || 1;for (var h in Se) {
	            var d = Se[h];if (d.group === e) {
	              var f = d.getRenderedCanvas(ee.clone(t)),
	                  p = d.getDom().getBoundingClientRect();a = i(p.left, a), o = i(p.top, o), s = n(p.right, s), l = n(p[H], l), c.push({ dom: f, left: p.left, top: p.top });
	            }
	          }a *= u, o *= u, s *= u, l *= u;var v = s - a,
	              g = l - o,
	              y = ee.createCanvas();y.width = v, y[X] = g;var _ = te.init(y);return ae(c, function (t) {
	            var e = new J.Image({ style: { x: t.left * u - a, y: t.top * u - o, image: t.dom } });_.add(e);
	          }), _.refreshImmediately(), y.toDataURL("image/" + (t && t.type || "png"));
	        }return this.getDataURL(t);
	      }
	    };var me = { update: function update(t) {
	        var e = this._model,
	            i = this._api,
	            n = this._coordSysMgr,
	            r = this._zr;if (e) {
	          e.restoreData(), n[z](this._model, this._api), s.call(this, e, i), l.call(this, e), n.update(e, i), u.call(this, e, t), h.call(this, e, t);var a = e.get("backgroundColor") || "transparent",
	              o = r.painter;if (o.isSingleCanvas && o.isSingleCanvas()) r.configLayer(0, { clearColor: a });else {
	            if (!m[D]) {
	              var c = ie.parse(a);a = ie.stringify(c, "rgb"), 0 === c[3] && (a = "transparent");
	            }a.colorStops || a.image ? (r.configLayer(0, { clearColor: a }), this[pe] = !0, this._dom.style.background = "transparent") : (this[pe] && r.configLayer(0, { clearColor: null }), this[pe] = !1, this._dom.style.background = a);
	          }
	        }
	      }, updateView: function updateView(t) {
	        var e = this._model;e && (e.eachSeries(function (t) {
	          t[L]().clearAllVisual();
	        }), u.call(this, e, t), a.call(this, "updateView", e, t));
	      }, updateVisual: function updateVisual(t) {
	        var e = this._model;e && (e.eachSeries(function (t) {
	          t[L]().clearAllVisual();
	        }), u.call(this, e, t), a.call(this, "updateVisual", e, t));
	      }, updateLayout: function updateLayout(t) {
	        var e = this._model;e && (c.call(this, e, t), a.call(this, "updateLayout", e, t));
	      }, highlight: function highlight(t) {
	        r.call(this, "highlight", t);
	      }, downplay: function downplay(t) {
	        r.call(this, "downplay", t);
	      }, prepareAndUpdate: function prepareAndUpdate(t) {
	        var e = this._model;o.call(this, "component", e), o.call(this, "chart", e), me.update.call(this, t);
	      } };ve[R] = function () {
	      this[fe] = !0, this._zr[R]();var t = this._model && this._model.resetOption("media");me[t ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX[R](), this[fe] = !1, this._flushPendingActions();
	    };var ge = t("./loading/default");ve.showLoading = function (t, e) {
	      ee[P](t) && (e = t, t = "default"), this.hideLoading();var i = ge(this._api, e),
	          n = this._zr;this._loadingFX = i, n.add(i);
	    }, ve.hideLoading = function () {
	      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
	    }, ve.makeActionFromEvent = function (t) {
	      var e = ee[C]({}, t);return e.type = xe[t.type], e;
	    }, ve.dispatchAction = function (t, e) {
	      var i = _e[t.type];if (i) {
	        var n = i.actionInfo,
	            r = n.update || "update";if (this[fe]) return void this._pendingActions.push(t);this[fe] = !0;var a = [t],
	            o = !1;t.batch && (o = !0, a = ee.map(t.batch, function (e) {
	          return e = ee[A](ee[C]({}, e), t), e.batch = null, e;
	        }));for (var s, l = [], c = "highlight" === t.type || "downplay" === t.type, u = 0; u < a[S]; u++) {
	          var h = a[u];s = i.action(h, this._model), s = s || ee[C]({}, h), s.type = n.event || s.type, l.push(s), c && me[r].call(this, h);
	        }"none" !== r && !c && me[r].call(this, t), s = o ? { type: n.event || t.type, batch: l } : l[0], this[fe] = !1, !e && this._messageCenter.trigger(s.type, s), this._flushPendingActions();
	      }
	    }, ve._flushPendingActions = function () {
	      for (var t = this._pendingActions; t[S];) {
	        var e = t.shift();this.dispatchAction(e);
	      }
	    }, ve.on = e("on"), ve.off = e("off"), ve.one = e("one");var ye = ["click", "dblclick", "mouseover", "mouseout", "mousedown", "mouseup", "globalout"];ve._initEvents = function () {
	      ae(ye, function (t) {
	        this._zr.on(t, function (e) {
	          var i = this[Q](),
	              n = e[U];if (n && null != n[T]) {
	            var r = n.dataModel || i.getSeriesByIndex(n.seriesIndex),
	                a = r && r.getDataParams(n[T], n.dataType) || {};a.event = e, a.type = t, this.trigger(t, a);
	          } else n && n.eventData && this.trigger(t, n.eventData);
	        }, this);
	      }, this), ae(xe, function (t, e) {
	        this._messageCenter.on(e, function (t) {
	          this.trigger(e, t);
	        }, this);
	      }, this);
	    }, ve.isDisposed = function () {
	      return this._disposed;
	    }, ve.clear = function () {
	      this.setOption({}, !0);
	    }, ve.dispose = function () {
	      if (!this._disposed) {
	        this._disposed = !0;var t = this._api,
	            e = this._model;ae(this._componentsViews, function (i) {
	          i.dispose(e, t);
	        }), ae(this._chartsViews, function (i) {
	          i.dispose(e, t);
	        }), this._zr.dispose(), delete Se[this.id];
	      }
	    }, ee.mixin(n, ne);var _e = [],
	        xe = {},
	        be = [],
	        we = [],
	        Te = [],
	        Me = {},
	        Se = {},
	        Ae = {},
	        Ce = new Date() - 0,
	        Pe = new Date() - 0,
	        Le = "_echarts_instance_",
	        ze = { version: "3.2.2", dependencies: { zrender: "3.1.2" } };ze.init = function (t, e, i) {
	      var r = new n(t, e, i);return r.id = "ec_" + Ce++, Se[r.id] = r, t.setAttribute && t.setAttribute(Le, r.id), v(r), r;
	    }, ze.connect = function (t) {
	      if (ee[x](t)) {
	        var e = t;t = null, ee.each(e, function (e) {
	          null != e.group && (t = e.group);
	        }), t = t || "g_" + Pe++, ee.each(e, function (e) {
	          e.group = t;
	        });
	      }return Ae[t] = !0, t;
	    }, ze.disConnect = function (t) {
	      Ae[t] = !1;
	    }, ze.dispose = function (t) {
	      ee.isDom(t) ? t = ze.getInstanceByDom(t) : (typeof t === "undefined" ? "undefined" : _typeof(t)) === E && (t = Se[t]), t instanceof n && !t.isDisposed() && t.dispose();
	    }, ze.getInstanceByDom = function (t) {
	      var e = t.getAttribute(Le);return Se[e];
	    }, ze.getInstanceById = function (t) {
	      return Se[t];
	    }, ze.registerTheme = function (t, e) {
	      Me[t] = e;
	    }, ze.registerPreprocessor = function (t) {
	      we.push(t);
	    }, ze.registerProcessor = function (t, e) {
	      (typeof t === "undefined" ? "undefined" : _typeof(t)) === _ && (e = t, t = oe), be.push({ prio: t, func: e });
	    }, ze.registerAction = function (t, e, i) {
	      (typeof e === "undefined" ? "undefined" : _typeof(e)) === _ && (i = e, e = "");var n = ee[P](t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || n)[B](), e = t.event, _e[n] || (_e[n] = { action: i, actionInfo: t }), xe[e] = n;
	    }, ze.registerCoordinateSystem = function (t, e) {
	      G.register(t, e);
	    }, ze.registerLayout = function (t, e) {
	      (typeof t === "undefined" ? "undefined" : _typeof(t)) === _ && (e = t, t = le), Te.push({ prio: t, func: e, isLayout: !0 });
	    }, ze.registerVisual = function (t, e) {
	      (typeof t === "undefined" ? "undefined" : _typeof(t)) === _ && (e = t, t = ue), Te.push({ prio: t, func: e });
	    };var ke = Y.parseClassType;return ze.extendComponentModel = function (t, e) {
	      var i = Y;if (e) {
	        var n = ke(e);i = Y.getClass(n.main, n.sub, !0);
	      }return i[C](t);
	    }, ze.extendComponentView = function (t, e) {
	      var i = $;if (e) {
	        var n = ke(e);i = $.getClass(n.main, n.sub, !0);
	      }return i[C](t);
	    }, ze.extendSeriesModel = function (t, e) {
	      var i = Z;if (e) {
	        e = "series." + e[b]("series.", "");var n = ke(e);i = Z.getClass(n.main, n.sub, !0);
	      }return i[C](t);
	    }, ze.extendChartView = function (t, e) {
	      var i = K;if (e) {
	        e[b]("series.", "");var n = ke(e);i = K.getClass(n.main, !0);
	      }return K[C](t);
	    }, ze.setCanvasCreator = function (t) {
	      ee.createCanvas = t;
	    }, ze.registerVisual(ce, t("./visual/seriesColor")), ze.registerPreprocessor(t("./preprocessor/backwardCompat")), ze.registerAction({ type: "highlight", event: "highlight", update: "highlight" }, ee.noop), ze.registerAction({ type: "downplay", event: "downplay", update: "downplay" }, ee.noop), ze.List = t("./data/List"), ze.Model = t("./model/Model"), ze.graphic = t("./util/graphic"), ze.number = t("./util/number"), ze.format = t("./util/format"), ze.matrix = t("zrender/core/matrix"), ze.vector = t("zrender/core/vector"), ze.color = t("zrender/tool/color"), ze.util = {}, ae(["map", "each", "filter", y, g, "reduce", "filter", "bind", "curry", x, "isString", P, "isFunction", C, A], function (t) {
	      ze.util[t] = ee[t];
	    }), ze.PRIORITY = { PROCESSOR: { FILTER: oe, STATISTIC: se }, VISUAL: { LAYOUT: le, GLOBAL: ce, CHART: ue, COMPONENT: he, BRUSH: de } }, ze;
	  }), e("zrender/vml/vml", [K, "./graphic", "../zrender", "./Painter"], function (t) {
	    t("./graphic"), t("../zrender").registerPainter("vml", t("./Painter"));
	  }), e("echarts/scale/Time", [K, F, "../util/number", "../util/format", "./Interval"], function (t) {
	    var e = t(F),
	        i = t("../util/number"),
	        n = t("../util/format"),
	        r = t("./Interval"),
	        a = r[O],
	        o = Math.ceil,
	        s = Math.floor,
	        l = 1e3,
	        c = 60 * l,
	        u = 60 * c,
	        h = 24 * u,
	        d = function d(t, e, i, n) {
	      for (; n > i;) {
	        var r = i + n >>> 1;t[r][2] < e ? i = r + 1 : n = r;
	      }return i;
	    },
	        f = r[C]({ type: "time", getLabel: function getLabel(t) {
	        var e = this._stepLvl,
	            i = new Date(t);return n.formatTime(e[0], i);
	      }, niceExtent: function niceExtent(t, e, n) {
	        var r = this._extent;if (r[0] === r[1] && (r[0] -= h, r[1] += h), r[1] === -1 / 0 && 1 / 0 === r[0]) {
	          var a = new Date();r[1] = new Date(a.getFullYear(), a.getMonth(), a.getDate()), r[0] = r[1] - h;
	        }this.niceTicks(t);var l = this._interval;e || (r[0] = i.round(s(r[0] / l) * l)), n || (r[1] = i.round(o(r[1] / l) * l));
	      }, niceTicks: function niceTicks(t) {
	        t = t || 10;var e = this._extent,
	            n = e[1] - e[0],
	            r = n / t,
	            a = p[S],
	            l = d(p, r, 0, a),
	            c = p[Math.min(l, a - 1)],
	            u = c[2];if ("year" === c[0]) {
	          var h = n / u,
	              f = i.nice(h / t, !0);u *= f;
	        }var v = [o(e[0] / u) * u, s(e[1] / u) * u];this._stepLvl = c, this._interval = u, this._niceExtent = v;
	      }, parse: function parse(t) {
	        return +i.parseDate(t);
	      } });e.each([m, "normalize"], function (t) {
	      f[O][t] = function (e) {
	        return a[t].call(this, this.parse(e));
	      };
	    });var p = [["hh:mm:ss", 1, l], ["hh:mm:ss", 5, 5 * l], ["hh:mm:ss", 10, 10 * l], ["hh:mm:ss", 15, 15 * l], ["hh:mm:ss", 30, 30 * l], ["hh:mm\nMM-dd", 1, c], ["hh:mm\nMM-dd", 5, 5 * c], ["hh:mm\nMM-dd", 10, 10 * c], ["hh:mm\nMM-dd", 15, 15 * c], ["hh:mm\nMM-dd", 30, 30 * c], ["hh:mm\nMM-dd", 1, u], ["hh:mm\nMM-dd", 2, 2 * u], ["hh:mm\nMM-dd", 6, 6 * u], ["hh:mm\nMM-dd", 12, 12 * u], ["MM-dd\nyyyy", 1, h], ["week", 7, 7 * h], ["month", 1, 31 * h], ["quarter", 3, 380 * h / 4], ["half-year", 6, 380 * h / 2], ["year", 1, 380 * h]];return f[z] = function () {
	      return new f();
	    }, f;
	  }), e("echarts/scale/Log", [K, F, "./Scale", "../util/number", "./Interval"], function (t) {
	    var e = t(F),
	        i = t("./Scale"),
	        n = t("../util/number"),
	        r = t("./Interval"),
	        a = i[O],
	        o = r[O],
	        s = Math.floor,
	        l = Math.ceil,
	        c = Math.pow,
	        u = 10,
	        h = Math.log,
	        d = i[C]({ type: "log", getTicks: function getTicks() {
	        return e.map(o[v].call(this), function (t) {
	          return n.round(c(u, t));
	        });
	      }, getLabel: o.getLabel, scale: function scale(t) {
	        return t = a.scale.call(this, t), c(u, t);
	      }, setExtent: function setExtent(t, e) {
	        t = h(t) / h(u), e = h(e) / h(u), o.setExtent.call(this, t, e);
	      }, getExtent: function getExtent() {
	        var t = a[p].call(this);return t[0] = c(u, t[0]), t[1] = c(u, t[1]), t;
	      }, unionExtent: function unionExtent(t) {
	        t[0] = h(t[0]) / h(u), t[1] = h(t[1]) / h(u), a.unionExtent.call(this, t);
	      }, niceTicks: function niceTicks(t) {
	        t = t || 10;var e = this._extent,
	            i = e[1] - e[0];if (!(1 / 0 === i || 0 >= i)) {
	          var r = c(10, s(h(i / t) / Math.LN10)),
	              a = t / i * r;.5 >= a && (r *= 10);var o = [n.round(l(e[0] / r) * r), n.round(s(e[1] / r) * r)];this._interval = r, this._niceExtent = o;
	        }
	      }, niceExtent: o.niceExtent });return e.each([m, "normalize"], function (t) {
	      d[O][t] = function (e) {
	        return e = h(e) / h(u), a[t].call(this, e);
	      };
	    }), d[z] = function () {
	      return new d();
	    }, d;
	  }), e("echarts/util/graphic", [K, F, "zrender/tool/path", "zrender/graphic/Path", "zrender/tool/color", "zrender/core/matrix", "zrender/core/vector", "zrender/graphic/Gradient", "zrender/container/Group", "zrender/graphic/Image", "zrender/graphic/Text", "zrender/graphic/shape/Circle", "zrender/graphic/shape/Sector", "zrender/graphic/shape/Ring", "zrender/graphic/shape/Polygon", "zrender/graphic/shape/Polyline", "zrender/graphic/shape/Rect", "zrender/graphic/shape/Line", "zrender/graphic/shape/BezierCurve", "zrender/graphic/shape/Arc", "zrender/graphic/CompoundPath", "zrender/graphic/LinearGradient", "zrender/graphic/RadialGradient", "zrender/core/BoundingRect"], function (t) {
	    function e(t) {
	      return null != t && "none" != t;
	    }function i(t) {
	      return (typeof t === "undefined" ? "undefined" : _typeof(t)) === E ? S.lift(t, -.1) : t;
	    }function n(t) {
	      if (t.__hoverStlDirty) {
	        var n = t.style[d],
	            r = t.style.fill,
	            a = t.__hoverStl;a.fill = a.fill || (e(r) ? i(r) : null), a[d] = a[d] || (e(n) ? i(n) : null);var o = {};for (var s in a) {
	          a.hasOwnProperty(s) && (o[s] = t.style[s]);
	        }t.__normalStl = o, t.__hoverStlDirty = !1;
	      }
	    }function r(t) {
	      t.__isHover || (n(t), t.useHoverLayer ? t.__zr && t.__zr.addHover(t, t.__hoverStl) : (t.setStyle(t.__hoverStl), t.z2 += 1), t.__isHover = !0);
	    }function a(t) {
	      if (t.__isHover) {
	        var e = t.__normalStl;t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1;
	      }
	    }function o(t) {
	      "group" === t.type ? t.traverse(function (t) {
	        "group" !== t.type && r(t);
	      }) : r(t);
	    }function s(t) {
	      "group" === t.type ? t.traverse(function (t) {
	        "group" !== t.type && a(t);
	      }) : a(t);
	    }function l(t, e) {
	      t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && n(t);
	    }function c() {
	      !this.__isEmphasis && o(this);
	    }function p() {
	      !this.__isEmphasis && s(this);
	    }function v() {
	      this.__isEmphasis = !0, o(this);
	    }function m() {
	      this.__isEmphasis = !1, s(this);
	    }function g(t, e, i, n, r, a) {
	      (typeof r === "undefined" ? "undefined" : _typeof(r)) === _ && (a = r, r = null);var o = n && (n.ifEnableAnimation ? n.ifEnableAnimation() : n[u]("animation"));if (o) {
	        var s = t ? "Update" : "",
	            l = n && n[u]("animationDuration" + s),
	            c = n && n[u]("animationEasing" + s),
	            h = n && n[u]("animationDelay" + s);(typeof h === "undefined" ? "undefined" : _typeof(h)) === _ && (h = h(r)), l > 0 ? e.animateTo(i, l, h || 0, c, a) : (e.attr(i), a && a());
	      } else e.attr(i), a && a();
	    }var x = t(F),
	        b = t("zrender/tool/path"),
	        w = Math.round,
	        M = t("zrender/graphic/Path"),
	        S = t("zrender/tool/color"),
	        A = t("zrender/core/matrix"),
	        P = t("zrender/core/vector"),
	        L = (t("zrender/graphic/Gradient"), {});return L.Group = t("zrender/container/Group"), L.Image = t("zrender/graphic/Image"), L.Text = t("zrender/graphic/Text"), L.Circle = t("zrender/graphic/shape/Circle"), L.Sector = t("zrender/graphic/shape/Sector"), L.Ring = t("zrender/graphic/shape/Ring"), L.Polygon = t("zrender/graphic/shape/Polygon"), L.Polyline = t("zrender/graphic/shape/Polyline"), L.Rect = t("zrender/graphic/shape/Rect"), L.Line = t("zrender/graphic/shape/Line"), L.BezierCurve = t("zrender/graphic/shape/BezierCurve"), L.Arc = t("zrender/graphic/shape/Arc"), L.CompoundPath = t("zrender/graphic/CompoundPath"), L.LinearGradient = t("zrender/graphic/LinearGradient"), L.RadialGradient = t("zrender/graphic/RadialGradient"), L.BoundingRect = t("zrender/core/BoundingRect"), L.extendShape = function (t) {
	      return M[C](t);
	    }, L.extendPath = function (t, e) {
	      return b.extendFromString(t, e);
	    }, L.makePath = function (t, e, i, n) {
	      var r = b.createFromString(t, e),
	          a = r[Y]();if (i) {
	        var o = a.width / a[X];if (n === G) {
	          var s,
	              l = i[X] * o;l <= i.width ? s = i[X] : (l = i.width, s = l / o);var c = i.x + i.width / 2,
	              u = i.y + i[X] / 2;i.x = c - l / 2, i.y = u - s / 2, i.width = l, i[X] = s;
	        }this.resizePath(r, i);
	      }return r;
	    }, L.mergePath = b.mergePath, L.resizePath = function (t, e) {
	      if (t[f]) {
	        var i = t[Y](),
	            n = i.calculateTransform(e);t[f](n);
	      }
	    }, L.subPixelOptimizeLine = function (t) {
	      var e = L.subPixelOptimize,
	          i = t.shape,
	          n = t.style.lineWidth;return w(2 * i.x1) === w(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), w(2 * i.y1) === w(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t;
	    }, L.subPixelOptimizeRect = function (t) {
	      var e = L.subPixelOptimize,
	          i = t.shape,
	          n = t.style.lineWidth,
	          r = i.x,
	          a = i.y,
	          o = i.width,
	          s = i[X];return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(r + o, n, !1) - i.x, 0 === o ? 0 : 1), i[X] = Math.max(e(a + s, n, !1) - i.y, 0 === s ? 0 : 1), t;
	    }, L.subPixelOptimize = function (t, e, i) {
	      var n = w(2 * t);return (n + w(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2;
	    }, L.setHoverStyle = function (t, e) {
	      "group" === t.type ? t.traverse(function (t) {
	        "group" !== t.type && l(t, e);
	      }) : l(t, e), t.on("mouseover", c).on("mouseout", p), t.on("emphasis", v).on(h, m);
	    }, L.setText = function (t, e, i) {
	      var n = e[u](V) || "inside",
	          r = n[y]("inside") >= 0 ? "white" : i,
	          a = e[Q]($);x[C](t, { textDistance: e[u]("distance") || 5, textFont: a[Z](), textPosition: n, textFill: a.getTextColor() || r });
	    }, L.updateProps = function (t, e, i, n, r) {
	      g(!0, t, e, i, n, r);
	    }, L.initProps = function (t, e, i, n, r) {
	      g(!1, t, e, i, n, r);
	    }, L.getTransform = function (t, e) {
	      for (var i = A.identity([]); t && t !== e;) {
	        A.mul(i, t.getLocalTransform(), i), t = t.parent;
	      }return i;
	    }, L[f] = function (t, e, i) {
	      return i && (e = A.invert([], e)), P[f]([], t, e);
	    }, L.transformDirection = function (t, e, i) {
	      var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
	          r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
	          a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : t === H ? r : 0];return a = L[f](a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? H : "top";
	    }, L.groupTransition = function (t, e, i) {
	      function n(t) {
	        var e = {};return t.traverse(function (t) {
	          !t.isGroup && t.anid && (e[t.anid] = t);
	        }), e;
	      }function r(t) {
	        var e = { position: P.clone(t[V]), rotation: t.rotation };return t.shape && (e.shape = x[C]({}, t.shape)), e;
	      }if (t && e) {
	        var a = n(t);e.traverse(function (t) {
	          if (!t.isGroup && t.anid) {
	            var e = a[t.anid];if (e) {
	              var n = r(t);t.attr(r(e)), L.updateProps(t, n, i, t[T]);
	            }
	          }
	        });
	      }
	    }, L;
	  }), e("echarts/util/layout", [K, F, "zrender/core/BoundingRect", "./number", "./format"], function (t) {
	    function e(t, e, i, n, r) {
	      var a = 0,
	          o = 0;null == n && (n = 1 / 0), null == r && (r = 1 / 0);var s = 0;e.eachChild(function (l, c) {
	        var u,
	            h,
	            d = l[V],
	            f = l[Y](),
	            p = e.childAt(c + 1),
	            v = p && p[Y]();if ("horizontal" === t) {
	          var m = f.width + (v ? -v.x + f.x : 0);u = a + m, u > n || l.newline ? (a = 0, u = m, o += s + i, s = f[X]) : s = Math.max(s, f[X]);
	        } else {
	          var g = f[X] + (v ? -v.y + f.y : 0);h = o + g, h > r || l.newline ? (a += s + i, o = 0, h = g, s = f.width) : s = Math.max(s, f.width);
	        }l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + i : o = h + i);
	      });
	    }var i = t(F),
	        n = t("zrender/core/BoundingRect"),
	        r = t("./number"),
	        a = t("./format"),
	        o = r.parsePercent,
	        s = i.each,
	        l = {},
	        c = ["left", "right", "top", H, "width", X];return l.box = e, l.vbox = i.curry(e, "vertical"), l.hbox = i.curry(e, "horizontal"), l.getAvailableSize = function (t, e, i) {
	      var n = e.width,
	          r = e[X],
	          s = o(t.x, n),
	          l = o(t.y, r),
	          c = o(t.x2, n),
	          u = o(t.y2, r);return (isNaN(s) || isNaN(parseFloat(t.x))) && (s = 0), (isNaN(c) || isNaN(parseFloat(t.x2))) && (c = n), (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0), (isNaN(u) || isNaN(parseFloat(t.y2))) && (u = r), i = a.normalizeCssArray(i || 0), { width: Math.max(c - s - i[1] - i[3], 0), height: Math.max(u - l - i[0] - i[2], 0) };
	    }, l.getLayoutRect = function (t, e, i) {
	      i = a.normalizeCssArray(i || 0);var r = e.width,
	          s = e[X],
	          l = o(t.left, r),
	          c = o(t.top, s),
	          u = o(t.right, r),
	          h = o(t[H], s),
	          d = o(t.width, r),
	          f = o(t[X], s),
	          p = i[2] + i[0],
	          v = i[1] + i[3],
	          m = t.aspect;switch (isNaN(d) && (d = r - u - v - l), isNaN(f) && (f = s - h - p - c), isNaN(d) && isNaN(f) && (m > r / s ? d = .8 * r : f = .8 * s), null != m && (isNaN(d) && (d = m * f), isNaN(f) && (f = d / m)), isNaN(l) && (l = r - u - d - v), isNaN(c) && (c = s - h - f - p), t.left || t.right) {case G:
	          l = r / 2 - d / 2 - i[3];break;case "right":
	          l = r - d - v;}switch (t.top || t[H]) {case q:case G:
	          c = s / 2 - f / 2 - i[0];break;case H:
	          c = s - f - p;}l = l || 0, c = c || 0, isNaN(d) && (d = r - l - (u || 0)), isNaN(f) && (f = s - c - (h || 0));var g = new n(l + i[3], c + i[0], d, f);return g.margin = i, g;
	    }, l.positionGroup = function (t, e, n, r) {
	      var a = t[Y]();e = i[C](i.clone(e), { width: a.width, height: a[X] }), e = l.getLayoutRect(e, n, r), t.attr(V, [e.x - a.x, e.y - a.y]);
	    }, l.mergeLayoutParam = function (t, e, n) {
	      function r(i) {
	        var r = {},
	            l = 0,
	            c = {},
	            u = 0,
	            h = n.ignoreSize ? 1 : 2;if (s(i, function (e) {
	          c[e] = t[e];
	        }), s(i, function (t) {
	          a(e, t) && (r[t] = c[t] = e[t]), o(r, t) && l++, o(c, t) && u++;
	        }), u !== h && l) {
	          if (l >= h) return r;for (var d = 0; d < i[S]; d++) {
	            var f = i[d];if (!a(r, f) && a(t, f)) {
	              r[f] = t[f];break;
	            }
	          }return r;
	        }return c;
	      }function a(t, e) {
	        return t.hasOwnProperty(e);
	      }function o(t, e) {
	        return null != t[e] && "auto" !== t[e];
	      }function l(t, e, i) {
	        s(t, function (t) {
	          e[t] = i[t];
	        });
	      }!i[P](n) && (n = {});var c = ["width", "left", "right"],
	          u = [X, "top", H],
	          h = r(c),
	          d = r(u);l(c, t, h), l(u, t, d);
	    }, l.getLayoutParams = function (t) {
	      return l.copyLayoutParams({}, t);
	    }, l.copyLayoutParams = function (t, e) {
	      return e && t && s(c, function (i) {
	        e.hasOwnProperty(i) && (t[i] = e[i]);
	      }), t;
	    }, l;
	  }), e(F, [K], function () {
	    function t(e) {
	      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e) {
	        var i = e;if (e instanceof Array) {
	          i = [];for (var n = 0, r = e[S]; r > n; n++) {
	            i[n] = t(e[n]);
	          }
	        } else if (!A(e) && !C(e)) {
	          i = {};for (var a in e) {
	            e.hasOwnProperty(a) && (i[a] = t(e[a]));
	          }
	        }return i;
	      }return e;
	    }function e(i, n, r) {
	      if (!M(n) || !M(i)) return r ? t(n) : i;for (var a in n) {
	        if (n.hasOwnProperty(a)) {
	          var o = i[a],
	              s = n[a];!M(s) || !M(o) || b(s) || b(o) || C(s) || C(o) || A(s) || A(o) ? !r && a in i || (i[a] = t(n[a], !0)) : e(o, s, r);
	        }
	      }return i;
	    }function i(t, i) {
	      for (var n = t[0], r = 1, a = t[S]; a > r; r++) {
	        n = e(n, t[r], i);
	      }return n;
	    }function n(t, e) {
	      for (var i in e) {
	        e.hasOwnProperty(i) && (t[i] = e[i]);
	      }return t;
	    }function r(t, e, i) {
	      for (var n in e) {
	        e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
	      }return t;
	    }function a() {
	      return document[c]("canvas");
	    }function o() {
	      return k || (k = G.createCanvas().getContext("2d")), k;
	    }function s(t, e) {
	      if (t) {
	        if (t[y]) return t[y](e);for (var i = 0, n = t[S]; n > i; i++) {
	          if (t[i] === e) return i;
	        }
	      }return -1;
	    }function l(t, e) {
	      function i() {}var n = t[O];i[O] = e[O], t[O] = new i();for (var r in n) {
	        t[O][r] = n[r];
	      }t[O].constructor = t, t.superClass = e;
	    }function u(t, e, i) {
	      t = O in t ? t[O] : t, e = O in e ? e[O] : e, r(t, e, i);
	    }function h(t) {
	      return t ? (typeof t === "undefined" ? "undefined" : _typeof(t)) == E ? !1 : "number" == typeof t[S] : void 0;
	    }function d(t, e, i) {
	      if (t && e) if (t.forEach && t.forEach === B) t.forEach(e, i);else if (t[S] === +t[S]) for (var n = 0, r = t[S]; r > n; n++) {
	        e.call(i, t[n], n, t);
	      } else for (var a in t) {
	        t.hasOwnProperty(a) && e.call(i, t[a], a, t);
	      }
	    }function f(t, e, i) {
	      if (t && e) {
	        if (t.map && t.map === V) return t.map(e, i);for (var n = [], r = 0, a = t[S]; a > r; r++) {
	          n.push(e.call(i, t[r], r, t));
	        }return n;
	      }
	    }function p(t, e, i, n) {
	      if (t && e) {
	        if (t.reduce && t.reduce === H) return t.reduce(e, i, n);for (var r = 0, a = t[S]; a > r; r++) {
	          i = e.call(n, i, t[r], r, t);
	        }return i;
	      }
	    }function v(t, e, i) {
	      if (t && e) {
	        if (t.filter && t.filter === F) return t.filter(e, i);for (var n = [], r = 0, a = t[S]; a > r; r++) {
	          e.call(i, t[r], r, t) && n.push(t[r]);
	        }return n;
	      }
	    }function m(t, e, i) {
	      if (t && e) for (var n = 0, r = t[S]; r > n; n++) {
	        if (e.call(i, t[n], n, t)) return t[n];
	      }
	    }function g(t, e) {
	      var i = N.call(arguments, 2);return function () {
	        return t.apply(e, i.concat(N.call(arguments)));
	      };
	    }function x(t) {
	      var e = N.call(arguments, 1);return function () {
	        return t.apply(this, e.concat(N.call(arguments)));
	      };
	    }function b(t) {
	      return "[object Array]" === D.call(t);
	    }function w(t) {
	      return (typeof t === "undefined" ? "undefined" : _typeof(t)) === _;
	    }function T(t) {
	      return "[object String]" === D.call(t);
	    }function M(t) {
	      var e = typeof t === "undefined" ? "undefined" : _typeof(t);return e === _ || !!t && "object" == e;
	    }function A(t) {
	      return !!I[D.call(t)];
	    }function C(t) {
	      return t && 1 === t.nodeType && _typeof(t.nodeName) == E;
	    }function P() {
	      for (var t = 0, e = arguments[S]; e > t; t++) {
	        if (null != arguments[t]) return arguments[t];
	      }
	    }function L() {
	      return Function.call.apply(N, arguments);
	    }function z(t, e) {
	      if (!t) throw new Error(e);
	    }var k,
	        I = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1 },
	        D = Object[O].toString,
	        R = Array[O],
	        B = R.forEach,
	        F = R.filter,
	        N = R.slice,
	        V = R.map,
	        H = R.reduce,
	        G = { inherits: l, mixin: u, clone: t, merge: e, mergeAll: i, extend: n, defaults: r, getContext: o, createCanvas: a, indexOf: s, slice: L, find: m, isArrayLike: h, each: d, map: f, reduce: p, filter: v, bind: g, curry: x, isArray: b, isString: T, isObject: M, isFunction: w, isBuildInObject: A, isDom: C, retrieve: P, assert: z, noop: function noop() {} };return G;
	  }), e("echarts/component/radar", [K, "../coord/radar/Radar", "../coord/radar/RadarModel", "./radar/RadarView"], function (t) {
	    t("../coord/radar/Radar"), t("../coord/radar/RadarModel"), t("./radar/RadarView");
	  }), e("echarts/chart/radar/RadarSeries", [K, "../../model/Series", "../../data/List", "../../data/helper/completeDimensions", F], function (t) {
	    var e = t("../../model/Series"),
	        i = t("../../data/List"),
	        n = t("../../data/helper/completeDimensions"),
	        r = t(F),
	        a = e[C]({ type: "series.radar", dependencies: ["radar"], init: function init() {
	        a.superApply(this, "init", arguments), this.legendDataProvider = function () {
	          return this._dataBeforeProcessed;
	        };
	      }, getInitialData: function getInitialData(t) {
	        var e = t.data || [],
	            r = n([], e, [], "indicator_"),
	            a = new i(r, this);return a.initData(e), a;
	      }, formatTooltip: function formatTooltip(t) {
	        var e = this.getRawValue(t),
	            i = this.coordinateSystem,
	            n = i.getIndicatorAxes();
	        return ("" == this._data.getName(t) ? this.name : this._data.getName(t)) + "<br/>" + r.map(n, function (t, i) {
	          return t.name + " : " + e[i];
	        }).join("<br />");
	      }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "radar", legendHoverLink: !0, radarIndex: 0, lineStyle: { normal: { width: 2, type: "solid" } }, label: { normal: { position: "top" } }, symbol: "emptyCircle", symbolSize: 4 } });return a;
	  }), e("echarts/chart/radar/RadarView", [K, "../../util/graphic", F, "../../util/symbol", "../../echarts"], function (t) {
	    function e(t) {
	      return n[x](t) || (t = [+t, +t]), t;
	    }var i = t("../../util/graphic"),
	        n = t(F),
	        r = t("../../util/symbol");return t("../../echarts").extendChartView({ type: "radar", render: function render(t) {
	        function a(t, i) {
	          var n = t.getItemVisual(i, "symbol") || "circle",
	              a = t.getItemVisual(i, "color");if ("none" !== n) {
	            var o = r.createSymbol(n, -.5, -.5, 1, 1, a);return o.attr({ style: { strokeNoScale: !0 }, z2: 100, scale: e(t.getItemVisual(i, "symbolSize")) }), o;
	          }
	        }function o(e, n, r, o, s, l) {
	          r.removeAll();for (var c = 0; c < n[S] - 1; c++) {
	            var u = a(o, s);u && (u.__dimIdx = c, e[c] ? (u.attr(V, e[c]), i[l ? "initProps" : "updateProps"](u, { position: n[c] }, t, s)) : u.attr(V, n[c]), r.add(u));
	          }
	        }function s(t) {
	          return n.map(t, function () {
	            return [l.cx, l.cy];
	          });
	        }var l = t.coordinateSystem,
	            c = this.group,
	            u = t[L](),
	            d = this._data;u.diff(d).add(function (e) {
	          var n = u.getItemLayout(e);if (n) {
	            var r = new i.Polygon(),
	                a = new i.Polyline(),
	                l = { shape: { points: n } };r.shape.points = s(n), a.shape.points = s(n), i.initProps(r, l, t, e), i.initProps(a, l, t, e);var c = new i.Group(),
	                h = new i.Group();c.add(a), c.add(r), c.add(h), o(a.shape.points, n, h, u, e, !0), u.setItemGraphicEl(e, c);
	          }
	        }).update(function (e, n) {
	          var r = d.getItemGraphicEl(n),
	              a = r.childAt(0),
	              s = r.childAt(1),
	              l = r.childAt(2),
	              c = { shape: { points: u.getItemLayout(e) } };c.shape.points && (o(a.shape.points, c.shape.points, l, u, e, !1), i.updateProps(a, c, t), i.updateProps(s, c, t), u.setItemGraphicEl(e, r));
	        }).remove(function (t) {
	          c.remove(d.getItemGraphicEl(t));
	        }).execute(), u.eachItemGraphicEl(function (e, r) {
	          function a() {
	            d.attr(k, y);
	          }function o() {
	            d.attr(k, g);
	          }var s = u.getItemModel(r),
	              l = e.childAt(0),
	              d = e.childAt(1),
	              f = e.childAt(2),
	              p = u.getItemVisual(r, "color");c.add(e), l.useStyle(n[A](s[Q]("lineStyle.normal").getLineStyle(), { fill: "none", stroke: p })), l.hoverStyle = s[Q]("lineStyle.emphasis").getLineStyle();var v = s[Q]("areaStyle.normal"),
	              m = s[Q]("areaStyle.emphasis"),
	              g = v.isEmpty() && v.parentModel.isEmpty(),
	              y = m.isEmpty() && m.parentModel.isEmpty();y = y && g, d[k] = g, d.useStyle(n[A](v.getAreaStyle(), { fill: p, opacity: .7 })), d.hoverStyle = m.getAreaStyle();var _ = s[Q]("itemStyle.normal").getItemStyle(["color"]),
	              x = s[Q]("itemStyle.emphasis").getItemStyle(),
	              b = s[Q]("label.normal"),
	              w = s[Q]("label.emphasis");f.eachChild(function (e) {
	            e.setStyle(_), e.hoverStyle = n.clone(x);var a = u.get(u.dimensions[e.__dimIdx], r);i.setText(e.style, b, p), e.setStyle({ text: b.get("show") ? n.retrieve(t.getFormattedLabel(r, h, null, e.__dimIdx), a) : "" }), i.setText(e.hoverStyle, w, p), e.hoverStyle.text = w.get("show") ? n.retrieve(t.getFormattedLabel(r, "emphasis", null, e.__dimIdx), a) : "";
	          }), e.off("mouseover").off("mouseout").off(h).off("emphasis"), e.on("emphasis", a).on("mouseover", a).on(h, o).on("mouseout", o), i.setHoverStyle(e);
	        }), this._data = u;
	      }, remove: function remove() {
	        this.group.removeAll(), this._data = null;
	      } });
	  }), e("echarts/visual/dataColor", [K], function () {
	    return function (t, e) {
	      var i = {};e.eachRawSeriesByType(t, function (t) {
	        var n = t.getRawData(),
	            r = {};if (!e.isSeriesFiltered(t)) {
	          var a = t[L]();a.each(function (t) {
	            var e = a.getRawIndex(t);r[e] = t;
	          }), n.each(function (e) {
	            var o = n.getItemModel(e),
	                s = r[e],
	                l = a.getItemVisual(s, "color", !0);if (l) n.setItemVisual(e, "color", l);else {
	              var c = o.get("itemStyle.normal.color") || t.getColorFromPalette(n.getName(e), i);n.setItemVisual(e, "color", c), a.setItemVisual(s, "color", c);
	            }
	          });
	        }
	      });
	    };
	  }), e("echarts/chart/radar/radarLayout", [K], function () {
	    return function (t) {
	      t.eachSeriesByType("radar", function (t) {
	        function e(t, e) {
	          n[e] = n[e] || [], n[e][a] = r.dataToPoint(t, a);
	        }var i = t[L](),
	            n = [],
	            r = t.coordinateSystem;if (r) {
	          for (var a = 0; a < r.getIndicatorAxes()[S]; a++) {
	            var o = i.dimensions[a];i.each(o, e);
	          }i.each(function (t) {
	            n[t][0] && n[t].push(n[t][0].slice()), i.setItemLayout(t, n[t]);
	          });
	        }
	      });
	    };
	  }), e("echarts/visual/symbol", [K], function () {
	    return function (t, e, i, n) {
	      n.eachRawSeriesByType(t, function (t) {
	        var r = t[L](),
	            a = t.get("symbol") || e,
	            o = t.get("symbolSize");r.setVisual({ legendSymbol: i || a, symbol: a, symbolSize: o }), n.isSeriesFiltered(t) || ((typeof o === "undefined" ? "undefined" : _typeof(o)) === _ && r.each(function (e) {
	          var i = t.getRawValue(e),
	              n = t.getDataParams(e);r.setItemVisual(e, "symbolSize", o(i, n));
	        }), r.each(function (t) {
	          var e = r.getItemModel(t),
	              i = e[u]("symbol", !0),
	              n = e[u]("symbolSize", !0);null != i && r.setItemVisual(t, "symbol", i), null != n && r.setItemVisual(t, "symbolSize", n);
	        }));
	      });
	    };
	  }), e("echarts/processor/dataFilter", [], function () {
	    return function (t, e) {
	      var i = e.findComponents({ mainType: "legend" });i && i[S] && e.eachSeriesByType(t, function (t) {
	        var e = t[L]();e.filterSelf(function (t) {
	          for (var n = e.getName(t), r = 0; r < i[S]; r++) {
	            if (!i[r].isSelected(n)) return !1;
	          }return !0;
	        }, this);
	      }, this);
	    };
	  }), e("echarts/chart/radar/backwardCompat", [K, F], function (t) {
	    var e = t(F);return function (t) {
	      var i = t.polar;if (i) {
	        e[x](i) || (i = [i]);var n = [];e.each(i, function (i) {
	          i.indicator ? (i.type && !i.shape && (i.shape = i.type), t.radar = t.radar || [], e[x](t.radar) || (t.radar = [t.radar]), t.radar.push(i)) : n.push(i);
	        }), t.polar = n;
	      }e.each(t.series, function (t) {
	        "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex);
	      });
	    };
	  }), e("echarts/coord/polar/polarCreator", [K, "./Polar", "../../util/number", "../../coord/axisHelper", "./PolarModel", "../../CoordinateSystem"], function (t) {
	    function e(t, e) {
	      var i = t.get(G),
	          n = t.get(l),
	          r = e[j](),
	          o = e[W](),
	          s = a.parsePercent;this.cx = s(i[0], r), this.cy = s(i[1], o);var c = this.getRadiusAxis(),
	          u = Math.min(r, o) / 2;c.setExtent(0, s(n, u));
	    }function i(t) {
	      var e = this,
	          i = e.getAngleAxis(),
	          n = e.getRadiusAxis();if (i.scale.setExtent(1 / 0, -1 / 0), n.scale.setExtent(1 / 0, -1 / 0), t.eachSeries(function (t) {
	        if (t.coordinateSystem === e) {
	          var r = t[L]();n.scale.unionExtent(r.getDataExtent(l, n.type !== s)), i.scale.unionExtent(r.getDataExtent("angle", i.type !== s));
	        }
	      }), c(i, i.model), c(n, n.model), i.type === s && !i.onBand) {
	        var r = i[p](),
	            a = 360 / i.scale.count();i.inverse ? r[1] += a : r[1] -= a, i.setExtent(r[0], r[1]);
	      }
	    }function n(t, e) {
	      if (t.type = e.get("type"), t.scale = o.createScaleByModel(e), t.onBand = e.get("boundaryGap") && t.type === s, "angleAxis" === e.mainType) {
	        var i = e.get("startAngle");t.inverse = e.get("inverse") ^ e.get("clockwise"), t.setExtent(i, i + (t.inverse ? -360 : 360));
	      }e.axis = t, t.model = e;
	    }var r = t("./Polar"),
	        a = t("../../util/number"),
	        o = t("../../coord/axisHelper"),
	        c = o.niceScaleExtent;t("./PolarModel");var u = { dimensions: r[O].dimensions, create: function create(t, a) {
	        var o = [];return t.eachComponent("polar", function (t, s) {
	          var l = new r(s);l[R] = e, l.update = i;var c = l.getRadiusAxis(),
	              u = l.getAngleAxis(),
	              h = t.findAxisModel("radiusAxis"),
	              d = t.findAxisModel("angleAxis");n(c, h), n(u, d), l[R](t, a), o.push(l), t.coordinateSystem = l;
	        }), t.eachSeries(function (t) {
	          "polar" === t.get("coordinateSystem") && (t.coordinateSystem = o[t.get("polarIndex")]);
	        }), o;
	      } };t("../../CoordinateSystem").register("polar", u);
	  }), e("echarts/component/angleAxis", [K, "../coord/polar/polarCreator", "./axis/AngleAxisView"], function (t) {
	    t("../coord/polar/polarCreator"), t("./axis/AngleAxisView");
	  }), e("echarts/component/radiusAxis", [K, "../coord/polar/polarCreator", "./axis/RadiusAxisView"], function (t) {
	    t("../coord/polar/polarCreator"), t("./axis/RadiusAxisView");
	  }), e("echarts/component/legend/LegendModel", [K, F, "../../model/Model", "../../echarts"], function (t) {
	    var e = t(F),
	        i = t("../../model/Model"),
	        n = t("../../echarts").extendComponentModel({ type: "legend", dependencies: ["series"], layoutMode: { type: "box", ignoreSize: !0 }, init: function init(t, e, i) {
	        this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {};
	      }, mergeOption: function mergeOption(t) {
	        n.superCall(this, "mergeOption", t);
	      }, optionUpdated: function optionUpdated() {
	        this._updateData(this[o]);var t = this._data;if (t[0] && "single" === this.get("selectedMode")) {
	          for (var e = !1, i = 0; i < t[S]; i++) {
	            var n = t[i].get("name");if (this.isSelected(n)) {
	              this.select(n), e = !0;break;
	            }
	          }!e && this.select(t[0].get("name"));
	        }
	      }, _updateData: function _updateData(t) {
	        var n = e.map(this.get("data") || [], function (t) {
	          return ((typeof t === "undefined" ? "undefined" : _typeof(t)) === E || "number" == typeof t) && (t = { name: t }), new i(t, this, this[o]);
	        }, this);this._data = n;var r = e.map(t.getSeries(), function (t) {
	          return t.name;
	        });t.eachSeries(function (t) {
	          if (t.legendDataProvider) {
	            var e = t.legendDataProvider();r = r.concat(e.mapArray(e.getName));
	          }
	        }), this._availableNames = r;
	      }, getData: function getData() {
	        return this._data;
	      }, select: function select(t) {
	        var i = this.option.selected,
	            n = this.get("selectedMode");if ("single" === n) {
	          var r = this._data;e.each(r, function (t) {
	            i[t.get("name")] = !1;
	          });
	        }i[t] = !0;
	      }, unSelect: function unSelect(t) {
	        "single" !== this.get("selectedMode") && (this.option.selected[t] = !1);
	      }, toggleSelected: function toggleSelected(t) {
	        var e = this.option.selected;t in e || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t);
	      }, isSelected: function isSelected(t) {
	        var i = this.option.selected;return !(t in i && !i[t]) && e[y](this._availableNames, t) >= 0;
	      }, defaultOption: { zlevel: 0, z: 4, show: !0, orient: "horizontal", left: "center", top: "top", align: "auto", backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, itemWidth: 25, itemHeight: 14, inactiveColor: "#ccc", textStyle: { color: "#333" }, selectedMode: !0, tooltip: { show: !1 } } });return n;
	  }), e("echarts/component/legend/legendAction", [K, "../../echarts", F], function (t) {
	    function e(t, e, i) {
	      var r,
	          a = {},
	          o = "toggleSelected" === t;return i.eachComponent("legend", function (i) {
	        o && null != r ? i[r ? "select" : "unSelect"](e.name) : (i[t](e.name), r = i.isSelected(e.name));var s = i[L]();n.each(s, function (t) {
	          var e = t.get("name");if ("\n" !== e && "" !== e) {
	            var n = i.isSelected(e);a[e] = e in a ? a[e] && n : n;
	          }
	        });
	      }), { name: e.name, selected: a };
	    }var i = t("../../echarts"),
	        n = t(F);i.registerAction("legendToggleSelect", "legendselectchanged", n.curry(e, "toggleSelected")), i.registerAction("legendSelect", "legendselected", n.curry(e, "select")), i.registerAction("legendUnSelect", "legendunselected", n.curry(e, "unSelect"));
	  }), e("echarts/component/legend/LegendView", [K, F, "../../util/symbol", "../../util/graphic", "../helper/listComponent", "../../echarts"], function (t) {
	    function e(t, e) {
	      e.dispatchAction({ type: "legendToggleSelect", name: t });
	    }function i(t, e, i) {
	      var n = i.getZr()[I].getDisplayList()[0];n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({ type: "highlight", seriesName: t.name, name: e });
	    }function n(t, e, i) {
	      var n = i.getZr()[I].getDisplayList()[0];n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({ type: "downplay", seriesName: t.name, name: e });
	    }var r = t(F),
	        a = t("../../util/symbol"),
	        o = t("../../util/graphic"),
	        s = t("../helper/listComponent"),
	        l = r.curry;return t("../../echarts").extendComponentView({ type: "legend", init: function init() {
	        this._symbolTypeStore = {};
	      }, render: function render(t, a, c) {
	        var u = this.group;if (u.removeAll(), t.get("show")) {
	          var h = t.get("selectedMode"),
	              d = t.get("align");"auto" === d && (d = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");var f = {};r.each(t[L](), function (r) {
	            var s = r.get("name");if ("" === s || "\n" === s) return void u.add(new o.Group({ newline: !0 }));var p = a.getSeriesByName(s)[0];if (!f[s]) if (p) {
	              var v = p[L](),
	                  m = v.getVisual("color");(typeof m === "undefined" ? "undefined" : _typeof(m)) === _ && (m = m(p.getDataParams(0)));var g = v.getVisual("legendSymbol") || "roundRect",
	                  y = v.getVisual("symbol"),
	                  x = this._createItem(s, r, t, g, y, d, m, h);x.on("click", l(e, s, c)).on("mouseover", l(i, p, "", c)).on("mouseout", l(n, p, "", c)), f[s] = !0;
	            } else a.eachRawSeries(function (a) {
	              if (!f[s] && a.legendDataProvider) {
	                var o = a.legendDataProvider(),
	                    u = o.indexOfName(s);if (0 > u) return;var p = o.getItemVisual(u, "color"),
	                    v = "roundRect",
	                    m = this._createItem(s, r, t, v, null, d, p, h);m.on("click", l(e, s, c)).on("mouseover", l(i, a, s, c)).on("mouseout", l(n, a, s, c)), f[s] = !0;
	              }
	            }, this);
	          }, this), s.layout(u, t, c), s.addBackground(u, t);
	        }
	      }, _createItem: function _createItem(t, e, i, n, s, l, c, u) {
	        var h = i.get("itemWidth"),
	            d = i.get("itemHeight"),
	            f = i.get("inactiveColor"),
	            p = i.isSelected(t),
	            v = new o.Group(),
	            m = e[Q]($),
	            g = e.get("icon"),
	            y = e[Q]("tooltip");if (n = g || n, v.add(a.createSymbol(n, 0, 0, h, d, p ? c : f)), !g && s && (s !== n || "none" == s)) {
	          var x = .8 * d;"none" === s && (s = "circle"), v.add(a.createSymbol(s, (h - x) / 2, (d - x) / 2, x, x, p ? c : f));
	        }var w = "left" === l ? h + 5 : -5,
	            T = l,
	            M = i.get("formatter"),
	            S = t;(typeof M === "undefined" ? "undefined" : _typeof(M)) === E && M ? S = M[b]("{name}", t) : (typeof M === "undefined" ? "undefined" : _typeof(M)) === _ && (S = M(t));var A = new o.Text({ style: { text: S, x: w, y: d / 2, fill: p ? m.getTextColor() : f, textFont: m[Z](), textAlign: T, textVerticalAlign: "middle" } });v.add(A);var P = new o.Rect({ shape: v[Y](), invisible: !0, tooltip: y.get("show") ? r[C]({ content: t, formatter: function formatter() {
	              return t;
	            }, formatterParams: { componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"] } }, y.option) : null });return v.add(P), v.eachChild(function (t) {
	          t.silent = !0;
	        }), P.silent = !u, this.group.add(v), o.setHoverStyle(v), v;
	      } });
	  }), e("echarts/component/tooltip/TooltipModel", [K, "../../echarts"], function (t) {
	    t("../../echarts").extendComponentModel({ type: "tooltip", defaultOption: { zlevel: 0, z: 8, show: !0, showContent: !0, trigger: "item", triggerOn: "mousemove", alwaysShowContent: !1, showDelay: 0, hideDelay: 100, transitionDuration: .4, enterable: !1, backgroundColor: "rgba(50,50,50,0.7)", borderColor: "#333", borderRadius: 4, borderWidth: 0, padding: 5, extraCssText: "", axisPointer: { type: "line", axis: "auto", animation: !0, animationDurationUpdate: 200, animationEasingUpdate: "exponentialOut", lineStyle: { color: "#555", width: 1, type: "solid" }, crossStyle: { color: "#555", width: 1, type: "dashed", textStyle: {} }, shadowStyle: { color: "rgba(150,150,150,0.3)" } }, textStyle: { color: "#fff", fontSize: 14 } } });
	  }), e("echarts/component/legend/legendFilter", [], function () {
	    return function (t) {
	      var e = t.findComponents({ mainType: "legend" });e && e[S] && t.filterSeries(function (t) {
	        for (var i = 0; i < e[S]; i++) {
	          if (!e[i].isSelected(t.name)) return !1;
	        }return !0;
	      });
	    };
	  }), e("echarts/component/tooltip/TooltipView", [K, "./TooltipContent", "../../util/graphic", F, "../../util/format", "../../util/number", "zrender/core/env", "../../model/Model", "../../echarts"], function (t) {
	    function e(t, e) {
	      if (!t || !e) return !1;var i = C.round;return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1]);
	    }function i(t, e, i, n) {
	      return { x1: t, y1: e, x2: i, y2: n };
	    }function n(t, e, i, n) {
	      return { x: t, y: e, width: i, height: n };
	    }function c(t, e, i, n, r, a) {
	      return { cx: t, cy: e, r0: i, r: n, startAngle: r, endAngle: a, clockwise: !0 };
	    }function u(t, e, i, n, r) {
	      var a = i.clientWidth,
	          o = i.clientHeight,
	          s = 20;return t + a + s > n ? t -= a + s : t += s, e + o + s > r ? e -= o + s : e += s, [t, e];
	    }function h(t, e, i) {
	      var n = i.clientWidth,
	          r = i.clientHeight,
	          a = 5,
	          o = 0,
	          s = 0,
	          l = e.width,
	          c = e[X];switch (t) {case "inside":
	          o = e.x + l / 2 - n / 2, s = e.y + c / 2 - r / 2;break;case "top":
	          o = e.x + l / 2 - n / 2, s = e.y - r - a;break;case H:
	          o = e.x + l / 2 - n / 2, s = e.y + c + a;break;case "left":
	          o = e.x - n - a, s = e.y + c / 2 - r / 2;break;case "right":
	          o = e.x + l + a, s = e.y + c / 2 - r / 2;}return [o, s];
	    }function v(t, e, i, n, o, s, l) {
	      var c = l[j](),
	          d = l[W](),
	          p = s && s[Y]().clone();if (s && p[f](s[a]), (typeof t === "undefined" ? "undefined" : _typeof(t)) === _ && (t = t([e, i], o, n.el, p)), M[x](t)) e = P(t[0], c), i = P(t[1], d);else if ((typeof t === "undefined" ? "undefined" : _typeof(t)) === E && s) {
	        var v = h(t, p, n.el);e = v[0], i = v[1];
	      } else {
	        var v = u(e, i, n.el, c, d);e = v[0], i = v[1];
	      }n[r](e, i);
	    }function m(t) {
	      var e = t.coordinateSystem,
	          i = t.get("tooltip.trigger", !0);return !(!e || "cartesian2d" !== e.type && "polar" !== e.type && "singleAxis" !== e.type || "item" === i);
	    }var g = t("./TooltipContent"),
	        b = t("../../util/graphic"),
	        M = t(F),
	        A = t("../../util/format"),
	        C = t("../../util/number"),
	        P = C.parsePercent,
	        z = t("zrender/core/env"),
	        k = t("../../model/Model");t("../../echarts").extendComponentView({ type: "tooltip", _axisPointers: {}, init: function init(t, e) {
	        if (!z.node) {
	          var i = new g(e.getDom(), e);this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this);
	        }
	      }, render: function render(t, e, i) {
	        if (!z.node) {
	          this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};var n = this._tooltipContent;n.update(), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);var r = this._crossText;if (r && this.group.add(r), null != this._lastX && null != this._lastY) {
	            var a = this;clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
	              a._manuallyShowTip({ x: a._lastX, y: a._lastY });
	            });
	          }var o = this._api.getZr();o.off("click", this._tryShow), o.off("mousemove", this._mousemove), o.off("mouseout", this._hide), o.off("globalout", this._hide), "click" === t.get("triggerOn") ? o.on("click", this._tryShow, this) : (o.on("mousemove", this._mousemove, this), o.on("mouseout", this._hide, this), o.on("globalout", this._hide, this));
	        }
	      }, _mousemove: function _mousemove(t) {
	        var e = this._tooltipModel.get("showDelay"),
	            i = this;clearTimeout(this._showTimeout), e > 0 ? this._showTimeout = setTimeout(function () {
	          i._tryShow(t);
	        }, e) : this._tryShow(t);
	      }, _manuallyShowTip: function _manuallyShowTip(t) {
	        if (t.from !== this.uid) {
	          var e = this._ecModel,
	              i = t.seriesIndex,
	              n = t[T],
	              r = e.getSeriesByIndex(i),
	              o = this._api;if (null == t.x || null == t.y) {
	            if (r || e.eachSeries(function (t) {
	              m(t) && !r && (r = t);
	            }), r) {
	              var s = r[L]();null == n && (n = s.indexOfName(t.name));var l,
	                  c,
	                  u = s.getItemGraphicEl(n),
	                  h = r.coordinateSystem;if (h && h.dataToPoint) {
	                var d = h.dataToPoint(s.getValues(M.map(h.dimensions, function (t) {
	                  return r.coordDimToDataDim(t)[0];
	                }), n, !0));l = d && d[0], c = d && d[1];
	              } else if (u) {
	                var p = u[Y]().clone();p[f](u[a]), l = p.x + p.width / 2, c = p.y + p[X] / 2;
	              }null != l && null != c && this._tryShow({ offsetX: l, offsetY: c, target: u, event: {} });
	            }
	          } else {
	            var u = o.getZr().handler.findHover(t.x, t.y);this._tryShow({ offsetX: t.x, offsetY: t.y, target: u, event: {} });
	          }
	        }
	      }, _manuallyHideTip: function _manuallyHideTip(t) {
	        t.from !== this.uid && this._hide();
	      }, _prepareAxisTriggerData: function _prepareAxisTriggerData(t, e) {
	        var i = {};return e.eachSeries(function (t) {
	          if (m(t)) {
	            var e,
	                n,
	                r = t.coordinateSystem;"cartesian2d" === r.type ? (e = r.getBaseAxis(), n = e.dim + e.index) : "singleAxis" === r.type ? (e = r.getAxis(), n = e.dim + e.type) : (e = r.getBaseAxis(), n = e.dim + r.name), i[n] = i[n] || { coordSys: [], series: [] }, i[n].coordSys.push(r), i[n].series.push(t);
	          }
	        }, this), i;
	      }, _tryShow: function _tryShow(t) {
	        var e = t[U],
	            i = this._tooltipModel,
	            n = i.get("trigger"),
	            r = this._ecModel,
	            a = this._api;if (i) if (this._lastX = t.offsetX, this._lastY = t.offsetY, e && null != e[T]) {
	          var o = e.dataModel || r.getSeriesByIndex(e.seriesIndex),
	              s = e[T],
	              l = o[L]().getItemModel(s);"axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, r, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(o, s, e.dataType, t)), a.dispatchAction({ type: "showTip", from: this.uid, dataIndex: e[T], seriesIndex: e.seriesIndex });
	        } else if (e && e.tooltip) {
	          var c = e.tooltip;if ((typeof c === "undefined" ? "undefined" : _typeof(c)) === E) {
	            var u = c;c = { content: u, formatter: u };
	          }var h = new k(c, i),
	              d = h.get("content"),
	              f = Math.random();this._showTooltipContent(h, d, h.get("formatterParams") || {}, f, t.offsetX, t.offsetY, e, a);
	        } else "item" === n ? this._hide() : this._showAxisTooltip(i, r, t), "cross" === i.get("axisPointer.type") && a.dispatchAction({ type: "showTip", from: this.uid, x: t.offsetX, y: t.offsetY });
	      }, _showAxisTooltip: function _showAxisTooltip(t, i, n) {
	        var r = t[Q]("axisPointer"),
	            a = r.get("type");if ("cross" === a) {
	          var o = n[U];if (o && null != o[T]) {
	            var s = i.getSeriesByIndex(o.seriesIndex),
	                l = o[T];this._showItemTooltipContent(s, l, o.dataType, n);
	          }
	        }this._showAxisPointer();var c = !0;M.each(this._seriesGroupByAxis, function (t) {
	          var i = t.coordSys,
	              o = i[0],
	              s = [n.offsetX, n.offsetY];if (!o.containPoint(s)) return void this._hideAxisPointer(o.name);c = !1;var l = o.dimensions,
	              u = o.pointToData(s, !0);s = o.dataToPoint(u);var h = o.getBaseAxis(),
	              d = r.get("axis");"auto" === d && (d = h.dim);var f = !1,
	              p = this._lastHover;if ("cross" === a) e(p.data, u) && (f = !0), p.data = u;else {
	            var v = M[y](l, d);p.data === u[v] && (f = !0), p.data = u[v];
	          }"cartesian2d" !== o.type || f ? "polar" !== o.type || f ? "singleAxis" !== o.type || f || this._showSinglePointer(r, o, d, s) : this._showPolarPointer(r, o, d, s) : this._showCartesianPointer(r, o, d, s), "cross" !== a && this._dispatchAndShowSeriesTooltipContent(o, t.series, s, u, f);
	        }, this), this._tooltipModel.get("show") || this._hideAxisPointer(), c && this._hide();
	      }, _showCartesianPointer: function _showCartesianPointer(t, e, r, a) {
	        function o(n, r, a) {
	          var o = "x" === n ? i(r[0], a[0], r[0], a[1]) : i(a[0], r[1], a[1], r[1]),
	              s = c._getPointerElement(e, t, n, o);b.subPixelOptimizeLine({ shape: o, style: s.style }), d ? b.updateProps(s, { shape: o }, t) : s.attr({ shape: o });
	        }function l(i, r, a) {
	          var o = e.getAxis(i),
	              s = o.getBandWidth(),
	              l = a[1] - a[0],
	              u = "x" === i ? n(r[0] - s / 2, a[0], s, l) : n(a[0], r[1] - s / 2, l, s),
	              h = c._getPointerElement(e, t, i, u);d ? b.updateProps(h, { shape: u }, t) : h.attr({ shape: u });
	        }var c = this,
	            u = t.get("type"),
	            h = e.getBaseAxis(),
	            d = "cross" !== u && h.type === s && h.getBandWidth() > 20;if ("cross" === u) o("x", a, e.getAxis("y").getGlobalExtent()), o("y", a, e.getAxis("x").getGlobalExtent()), this._updateCrossText(e, a, t);else {
	          var f = e.getAxis("x" === r ? "y" : "x"),
	              p = f.getGlobalExtent();"cartesian2d" === e.type && ("line" === u ? o : l)(r, a, p);
	        }
	      }, _showSinglePointer: function _showSinglePointer(t, e, n, r) {
	        function a(n, r, a) {
	          var s = e.getAxis(),
	              l = s.orient,
	              u = "horizontal" === l ? i(r[0], a[0], r[0], a[1]) : i(a[0], r[1], a[1], r[1]),
	              h = o._getPointerElement(e, t, n, u);c ? b.updateProps(h, { shape: u }, t) : h.attr({ shape: u });
	        }var o = this,
	            l = t.get("type"),
	            c = "cross" !== l && e.getBaseAxis().type === s,
	            u = e.getRect(),
	            h = [u.y, u.y + u[X]];a(n, r, h);
	      }, _showPolarPointer: function _showPolarPointer(t, e, n, r) {
	        function a(n, r, a) {
	          var o,
	              s = e.pointToCoord(r);if ("angle" === n) {
	            var l = e.coordToPoint([a[0], s[1]]),
	                c = e.coordToPoint([a[1], s[1]]);o = i(l[0], l[1], c[0], c[1]);
	          } else o = { cx: e.cx, cy: e.cy, r: s[0] };var h = u._getPointerElement(e, t, n, o);v ? b.updateProps(h, { shape: o }, t) : h.attr({ shape: o });
	        }function o(i, n, r) {
	          var a,
	              o = e.getAxis(i),
	              s = o.getBandWidth(),
	              l = e.pointToCoord(n),
	              h = Math.PI / 180;a = "angle" === i ? c(e.cx, e.cy, r[0], r[1], (-l[1] - s / 2) * h, (-l[1] + s / 2) * h) : c(e.cx, e.cy, l[0] - s / 2, l[0] + s / 2, 0, 2 * Math.PI);var d = u._getPointerElement(e, t, i, a);v ? b.updateProps(d, { shape: a }, t) : d.attr({ shape: a });
	        }var u = this,
	            h = t.get("type"),
	            d = e.getAngleAxis(),
	            f = e.getRadiusAxis(),
	            v = "cross" !== h && e.getBaseAxis().type === s;if ("cross" === h) a("angle", r, f[p]()), a(l, r, d[p]()), this._updateCrossText(e, r, t);else {
	          var m = e.getAxis(n === l ? "angle" : l),
	              g = m[p]();("line" === h ? a : o)(n, r, g);
	        }
	      }, _updateCrossText: function _updateCrossText(t, e, i) {
	        var n = i[Q]("crossStyle"),
	            r = n[Q]($),
	            a = this._tooltipModel,
	            o = this._crossText;o || (o = this._crossText = new b.Text({ style: { textAlign: "left", textVerticalAlign: "bottom" } }), this.group.add(o));var l = t.pointToData(e),
	            c = t.dimensions;l = M.map(l, function (e, i) {
	          var n = t.getAxis(c[i]);return e = n.type === s || "time" === n.type ? n.scale.getLabel(e) : A.addCommas(e.toFixed(n.getPixelPrecision()));
	        }), o.setStyle({ fill: r.getTextColor() || n.get("color"), textFont: r[Z](), text: l.join(", "), x: e[0] + 5, y: e[1] - 5 }), o.z = a.get("z"), o[w] = a.get(w);
	      }, _getPointerElement: function _getPointerElement(t, e, i, n) {
	        var r = this._tooltipModel,
	            a = r.get("z"),
	            o = r.get(w),
	            s = this._axisPointers,
	            c = t.name;if (s[c] = s[c] || {}, s[c][i]) return s[c][i];var u = e.get("type"),
	            h = e[Q](u + "Style"),
	            f = "shadow" === u,
	            p = h[f ? "getAreaStyle" : "getLineStyle"](),
	            v = "polar" === t.type ? f ? "Sector" : i === l ? "Circle" : "Line" : f ? "Rect" : "Line";f ? p[d] = null : p.fill = null;var m = s[c][i] = new b[v]({ style: p, z: a, zlevel: o, silent: !0, shape: n });return this.group.add(m), m;
	      }, _dispatchAndShowSeriesTooltipContent: function _dispatchAndShowSeriesTooltipContent(t, e, i, n, r) {
	        var a = this._tooltipModel,
	            o = t.getBaseAxis(),
	            c = "x" === o.dim || o.dim === l ? 0 : 1,
	            u = M.map(e, function (t) {
	          return { seriesIndex: t.seriesIndex, dataIndex: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.coordDimToDataDim(o.dim), n, o) : t[L]().indexOfNearest(t.coordDimToDataDim(o.dim)[0], n[c], !1, o.type === s ? .5 : null) };
	        }),
	            h = this._lastHover,
	            d = this._api;if (h.payloadBatch && !r && d.dispatchAction({ type: "downplay", batch: h.payloadBatch }), r || (d.dispatchAction({ type: "highlight", batch: u }), h.payloadBatch = u), d.dispatchAction({ type: "showTip", dataIndex: u[0][T], seriesIndex: u[0].seriesIndex, from: this.uid }), o && a.get("showContent") && a.get("show")) {
	          var f = M.map(e, function (t, e) {
	            return t.getDataParams(u[e][T]);
	          });if (r) v(a.get(V), i[0], i[1], this._tooltipContent, f, null, d);else {
	            var p = u[0][T],
	                m = "time" === o.type ? o.scale.getLabel(n[c]) : e[0][L]().getName(p),
	                g = (m ? m + "<br />" : "") + M.map(e, function (t, e) {
	              return t.formatTooltip(u[e][T], !0);
	            }).join("<br />"),
	                y = "axis_" + t.name + "_" + p;this._showTooltipContent(a, g, f, y, i[0], i[1], null, d);
	          }
	        }
	      }, _showItemTooltipContent: function _showItemTooltipContent(t, e, i, n) {
	        var r = this._api,
	            a = t[L](i),
	            s = a.getItemModel(e),
	            l = s.get("tooltip", !0);if ((typeof l === "undefined" ? "undefined" : _typeof(l)) === E) {
	          var c = l;l = { formatter: c };
	        }var u = this._tooltipModel,
	            h = t[Q]("tooltip", u),
	            d = new k(l, h, h[o]),
	            f = t.getDataParams(e, i),
	            p = t.formatTooltip(e, !1, i),
	            v = "item_" + t.name + "_" + e;this._showTooltipContent(d, p, f, v, n.offsetX, n.offsetY, n[U], r);
	      }, _showTooltipContent: function _showTooltipContent(t, e, i, n, r, a, o, s) {
	        if (this._ticket = "", t.get("showContent") && t.get("show")) {
	          var l = this._tooltipContent,
	              c = t.get("formatter"),
	              u = t.get(V),
	              h = e;if (c) if ((typeof c === "undefined" ? "undefined" : _typeof(c)) === E) h = A.formatTpl(c, i);else if ((typeof c === "undefined" ? "undefined" : _typeof(c)) === _) {
	            var d = this,
	                f = n,
	                p = function p(t, e) {
	              t === d._ticket && (l.setContent(e), v(u, r, a, l, i, o, s));
	            };d._ticket = f, h = c(i, f, p);
	          }l.show(t), l.setContent(h), v(u, r, a, l, i, o, s);
	        }
	      }, _showAxisPointer: function _showAxisPointer(t) {
	        if (t) {
	          var e = this._axisPointers[t];e && M.each(e, function (t) {
	            t.show();
	          });
	        } else this.group.eachChild(function (t) {
	          t.show();
	        }), this.group.show();
	      }, _resetLastHover: function _resetLastHover() {
	        var t = this._lastHover;t.payloadBatch && this._api.dispatchAction({ type: "downplay", batch: t.payloadBatch }), this._lastHover = {};
	      }, _hideAxisPointer: function _hideAxisPointer(t) {
	        if (t) {
	          var e = this._axisPointers[t];e && M.each(e, function (t) {
	            t.hide();
	          });
	        } else this.group.children()[S] && this.group.hide();
	      }, _hide: function _hide() {
	        clearTimeout(this._showTimeout), this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api.dispatchAction({ type: "hideTip", from: this.uid }), this._lastX = this._lastY = null;
	      }, dispose: function dispose(t, e) {
	        if (!z.node) {
	          var i = e.getZr();this._tooltipContent.hide(), i.off("click", this._tryShow), i.off("mousemove", this._mousemove), i.off("mouseout", this._hide), i.off("globalout", this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip);
	        }
	      } });
	  }), e("zrender/core/env", [], function () {
	    function t(t) {
	      var e = {},
	          i = {},
	          n = t.match(/Firefox\/([\d.]+)/),
	          r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
	          a = t.match(/Edge\/([\d.]+)/);return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), { browser: i, os: e, node: !1, canvasSupported: document[c]("canvas").getContext ? !0 : !1, touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge, pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 10) };
	    }var e = {};return e = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === n ? { browser: {}, os: {}, node: !0, canvasSupported: !0 } : t(navigator.userAgent);
	  }), e("echarts/model/Global", [K, F, "../util/model", "./Model", "./Component", "./globalDefault", "./mixin/colorPalette"], function (t) {
	    function e(t, e) {
	      for (var i in e) {
	        b.hasClass(i) || ("object" == _typeof(e[i]) ? t[i] = t[i] ? c.merge(t[i], e[i], !1) : c.clone(e[i]) : null == t[i] && (t[i] = e[i]));
	      }
	    }function i(t) {
	      t = t, this.option = {}, this.option[T] = 1, this._componentsMap = {}, this._seriesIndices = null, e(t, this._theme.option), c.merge(t, w, !1), this.mergeOption(t);
	    }function n(t, e) {
	      c[x](e) || (e = e ? [e] : []);var i = {};return d(e, function (e) {
	        i[e] = (t[e] || []).slice();
	      }), i;
	    }function r(t, e) {
	      var i = {};d(e, function (t) {
	        var e = t.exist;e && (i[e.id] = t);
	      }), d(e, function (e) {
	        var n = e.option;if (c.assert(!n || null == n.id || !i[n.id] || i[n.id] === e, "id duplicates: " + (n && n.id)), n && null != n.id && (i[n.id] = e), g(n)) {
	          var r = a(t, n, e.exist);e.keyInfo = { mainType: t, subType: r };
	        }
	      }), d(e, function (t) {
	        var e = t.exist,
	            n = t.option,
	            r = t.keyInfo;if (g(n)) {
	          if (r.name = null != n.name ? n.name + "" : e ? e.name : "\x00-", e) r.id = e.id;else if (null != n.id) r.id = n.id + "";else {
	            var a = 0;do {
	              r.id = "\x00" + r.name + "\x00" + a++;
	            } while (i[r.id]);
	          }i[r.id] = t;
	        }
	      });
	    }function a(t, e, i) {
	      var n = e.type ? e.type : i ? i.subType : b.determineSubType(t, e);return n;
	    }function o(t) {
	      return p(t, function (t) {
	        return t.componentIndex;
	      }) || [];
	    }function s(t, e) {
	      return e.hasOwnProperty("subType") ? f(t, function (t) {
	        return t.subType === e.subType;
	      }) : t;
	    }function l(t) {}var c = t(F),
	        u = t("../util/model"),
	        h = t("./Model"),
	        d = c.each,
	        f = c.filter,
	        p = c.map,
	        v = c[x],
	        m = c[y],
	        g = c[P],
	        b = t("./Component"),
	        w = t("./globalDefault"),
	        T = "\x00_ec_inner",
	        A = h[C]({ constructor: A, init: function init(t, e, i, n) {
	        i = i || {}, this.option = null, this._theme = new h(i), this._optionManager = n;
	      }, setOption: function setOption(t, e) {
	        c.assert(!(T in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption();
	      }, resetOption: function resetOption(t) {
	        var e = !1,
	            n = this._optionManager;if (!t || "recreate" === t) {
	          var r = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(r)) : i.call(this, r), e = !0;
	        }if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
	          var a = n.getTimelineOption(this);a && (this.mergeOption(a), e = !0);
	        }if (!t || "recreate" === t || "media" === t) {
	          var o = n.getMediaOption(this, this._api);o[S] && d(o, function (t) {
	            this.mergeOption(t, e = !0);
	          }, this);
	        }return e;
	      }, mergeOption: function mergeOption(t) {
	        function e(e, s) {
	          var l = u.normalizeToArray(t[e]),
	              h = u.mappingToExists(a[e], l);r(e, h);var f = n(a, s);i[e] = [], a[e] = [], d(h, function (t, n) {
	            var r = t.exist,
	                o = t.option;if (c.assert(g(o) || r, "Empty component definition"), o) {
	              var s = b.getClass(e, t.keyInfo.subType, !0);if (r && r instanceof s) r.mergeOption(o, this), r.optionUpdated(o, !1);else {
	                var l = c[C]({ dependentModels: f, componentIndex: n }, t.keyInfo);r = new s(o, this, this, l), r.init(o, this, this, l), r.optionUpdated(null, !0);
	              }
	            } else r.mergeOption({}, this), r.optionUpdated({}, !1);a[e][n] = r, i[e][n] = r.option;
	          }, this), "series" === e && (this._seriesIndices = o(a.series));
	        }var i = this.option,
	            a = this._componentsMap,
	            s = [];d(t, function (t, e) {
	          null != t && (b.hasClass(e) ? s.push(e) : i[e] = null == i[e] ? c.clone(t) : c.merge(i[e], t, !0));
	        }), b.topologicalTravel(s, b.getAllClassMainTypes(), e, this);
	      }, getOption: function getOption() {
	        var t = c.clone(this.option);return d(t, function (e, i) {
	          if (b.hasClass(i)) {
	            for (var e = u.normalizeToArray(e), n = e[S] - 1; n >= 0; n--) {
	              u.isIdInner(e[n]) && e[M](n, 1);
	            }t[i] = e;
	          }
	        }), delete t[T], t;
	      }, getTheme: function getTheme() {
	        return this._theme;
	      }, getComponent: function getComponent(t, e) {
	        var i = this._componentsMap[t];return i ? i[e || 0] : void 0;
	      }, queryComponents: function queryComponents(t) {
	        var e = t.mainType;if (!e) return [];var i = t.index,
	            n = t.id,
	            r = t.name,
	            a = this._componentsMap[e];if (!a || !a[S]) return [];var o;if (null != i) v(i) || (i = [i]), o = f(p(i, function (t) {
	          return a[t];
	        }), function (t) {
	          return !!t;
	        });else if (null != n) {
	          var l = v(n);o = f(a, function (t) {
	            return l && m(n, t.id) >= 0 || !l && t.id === n;
	          });
	        } else if (null != r) {
	          var c = v(r);o = f(a, function (t) {
	            return c && m(r, t.name) >= 0 || !c && t.name === r;
	          });
	        }return s(o, t);
	      }, findComponents: function findComponents(t) {
	        function e(t) {
	          var e = r + "Index",
	              i = r + "Id",
	              n = r + "Name";return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? { mainType: r, index: t[e], id: t[i], name: t[n] } : null;
	        }function i(e) {
	          return t.filter ? f(e, t.filter) : e;
	        }var n = t.query,
	            r = t.mainType,
	            a = e(n),
	            o = a ? this.queryComponents(a) : this._componentsMap[r];return i(s(o, t));
	      }, eachComponent: function eachComponent(t, e, i) {
	        var n = this._componentsMap;if ((typeof t === "undefined" ? "undefined" : _typeof(t)) === _) i = e, e = t, d(n, function (t, n) {
	          d(t, function (t, r) {
	            e.call(i, n, t, r);
	          });
	        });else if (c.isString(t)) d(n[t], e, i);else if (g(t)) {
	          var r = this.findComponents(t);d(r, e, i);
	        }
	      }, getSeriesByName: function getSeriesByName(t) {
	        var e = this._componentsMap.series;return f(e, function (e) {
	          return e.name === t;
	        });
	      }, getSeriesByIndex: function getSeriesByIndex(t) {
	        return this._componentsMap.series[t];
	      }, getSeriesByType: function getSeriesByType(t) {
	        var e = this._componentsMap.series;return f(e, function (e) {
	          return e.subType === t;
	        });
	      }, getSeries: function getSeries() {
	        return this._componentsMap.series.slice();
	      }, eachSeries: function eachSeries(t, e) {
	        l(this), d(this._seriesIndices, function (i) {
	          var n = this._componentsMap.series[i];t.call(e, n, i);
	        }, this);
	      }, eachRawSeries: function eachRawSeries(t, e) {
	        d(this._componentsMap.series, t, e);
	      }, eachSeriesByType: function eachSeriesByType(t, e, i) {
	        l(this), d(this._seriesIndices, function (n) {
	          var r = this._componentsMap.series[n];r.subType === t && e.call(i, r, n);
	        }, this);
	      }, eachRawSeriesByType: function eachRawSeriesByType(t, e, i) {
	        return d(this.getSeriesByType(t), e, i);
	      }, isSeriesFiltered: function isSeriesFiltered(t) {
	        return l(this), c[y](this._seriesIndices, t.componentIndex) < 0;
	      }, filterSeries: function filterSeries(t, e) {
	        l(this);var i = f(this._componentsMap.series, t, e);this._seriesIndices = o(i);
	      }, restoreData: function restoreData() {
	        var t = this._componentsMap;this._seriesIndices = o(t.series);var e = [];d(t, function (t, i) {
	          e.push(i);
	        }), b.topologicalTravel(e, b.getAllClassMainTypes(), function (e) {
	          d(t[e], function (t) {
	            t.restoreData();
	          });
	        });
	      } });return c.mixin(A, t("./mixin/colorPalette")), A;
	  }), e("echarts/ExtensionAPI", [K, F], function (t) {
	    function e(t) {
	      i.each(n, function (e) {
	        this[e] = i.bind(t[e], t);
	      }, this);
	    }var i = t(F),
	        n = ["getDom", "getZr", j, W, "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", Q, "getOption"];return e;
	  }), e("echarts/CoordinateSystem", [K], function () {
	    function t() {
	      this._coordinateSystems = [];
	    }var e = {};return t[O] = { constructor: t, create: function create(t, i) {
	        var n = [];for (var r in e) {
	          var a = e[r][z](t, i);a && (n = n.concat(a));
	        }this._coordinateSystems = n;
	      }, update: function update(t, e) {
	        for (var i = this._coordinateSystems, n = 0; n < i[S]; n++) {
	          i[n].update && i[n].update(t, e);
	        }
	      } }, t.register = function (t, i) {
	      e[t] = i;
	    }, t.get = function (t) {
	      return e[t];
	    }, t;
	  }), e("echarts/model/OptionManager", [K, F, "../util/model", "./Component"], function (t) {
	    function e(t) {
	      this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
	    }function i(t, e, i) {
	      var n,
	          r,
	          a = [],
	          o = [],
	          l = t.timeline;if (t.baseOption && (r = t.baseOption), (l || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
	        r = r || {};var c = t.media;u(c, function (t) {
	          t && t.option && (t.query ? o.push(t) : n || (n = t));
	        });
	      }return r || (r = t), r.timeline || (r.timeline = l), u([r].concat(a).concat(s.map(o, function (t) {
	        return t.option;
	      })), function (t) {
	        u(e, function (e) {
	          e(t, i);
	        });
	      }), { baseOption: r, timelineOptions: a, mediaDefault: n, mediaList: o };
	    }function n(t, e, i) {
	      var n = { width: e, height: i, aspectratio: e / i },
	          a = !0;return s.each(t, function (t, e) {
	        var i = e.match(p);if (i && i[1] && i[2]) {
	          var o = i[1],
	              s = i[2][B]();r(n[s], t, o) || (a = !1);
	        }
	      }), a;
	    }function r(t, e, i) {
	      return "min" === i ? t >= e : "max" === i ? e >= t : t === e;
	    }function a(t, e) {
	      return t.join(",") === e.join(",");
	    }function o(t, e) {
	      e = e || {}, u(e, function (e, i) {
	        if (null != e) {
	          var n = t[i];if (c.hasClass(i)) {
	            e = l.normalizeToArray(e), n = l.normalizeToArray(n);var r = l.mappingToExists(n, e);t[i] = d(r, function (t) {
	              return t.option && t.exist ? f(t.exist, t.option, !0) : t.exist || t.option;
	            });
	          } else t[i] = f(n, e, !0);
	        }
	      });
	    }var s = t(F),
	        l = t("../util/model"),
	        c = t("./Component"),
	        u = s.each,
	        h = s.clone,
	        d = s.map,
	        f = s.merge,
	        p = /^(min|max)?(.+)$/;return e[O] = { constructor: e, setOption: function setOption(t, e) {
	        t = h(t, !0);var n = this._optionBackup,
	            r = i.call(this, t, e, !n);this._newBaseOption = r.baseOption, n ? (o(n.baseOption, r.baseOption), r.timelineOptions[S] && (n.timelineOptions = r.timelineOptions), r.mediaList[S] && (n.mediaList = r.mediaList), r.mediaDefault && (n.mediaDefault = r.mediaDefault)) : this._optionBackup = r;
	      }, mountOption: function mountOption(t) {
	        var e = this._optionBackup;return this._timelineOptions = d(e.timelineOptions, h), this._mediaList = d(e.mediaList, h), this._mediaDefault = h(e.mediaDefault), this._currentMediaIndices = [], h(t ? e.baseOption : this._newBaseOption);
	      }, getTimelineOption: function getTimelineOption(t) {
	        var e,
	            i = this._timelineOptions;if (i[S]) {
	          var n = t.getComponent("timeline");n && (e = h(i[n.getCurrentIndex()], !0));
	        }return e;
	      }, getMediaOption: function getMediaOption() {
	        var t = this._api[j](),
	            e = this._api[W](),
	            i = this._mediaList,
	            r = this._mediaDefault,
	            o = [],
	            s = [];if (!i[S] && !r) return s;for (var l = 0, c = i[S]; c > l; l++) {
	          n(i[l].query, t, e) && o.push(l);
	        }return !o[S] && r && (o = [-1]), o[S] && !a(o, this._currentMediaIndices) && (s = d(o, function (t) {
	          return h(-1 === t ? r.option : i[t].option);
	        })), this._currentMediaIndices = o, s;
	      } }, e;
	  }), e("echarts/model/Series", [K, F, "../util/format", "../util/model", "./Component", "./mixin/colorPalette", "zrender/core/env"], function (t) {
	    var e = t(F),
	        i = t("../util/format"),
	        n = t("../util/model"),
	        r = t("./Component"),
	        a = t("./mixin/colorPalette"),
	        s = t("zrender/core/env"),
	        l = i.encodeHTML,
	        c = i.addCommas,
	        h = r[C]({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendDataProvider: null, visualColorAccessPath: "itemStyle.normal.color", init: function init(t, e, i) {
	        this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow();
	      }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, i) {
	        e.merge(t, i.getTheme().get(this.subType)), e.merge(t, this.getDefaultOption()), n.defaultEmphasis(t.label, n.LABEL_OPTIONS), this.fillDataTextStyle(t.data);
	      }, mergeOption: function mergeOption(t, i) {
	        t = e.merge(this.option, t, !0), this.fillDataTextStyle(t.data);var n = this.getInitialData(t, i);n && (this._data = n, this._dataBeforeProcessed = n.cloneShallow());
	      }, fillDataTextStyle: function fillDataTextStyle(t) {
	        if (t) for (var e = 0; e < t[S]; e++) {
	          t[e] && t[e].label && n.defaultEmphasis(t[e].label, n.LABEL_OPTIONS);
	        }
	      }, getInitialData: function getInitialData() {}, getData: function getData(t) {
	        return null == t ? this._data : this._data.getLinkedData(t);
	      }, setData: function setData(t) {
	        this._data = t;
	      }, getRawData: function getRawData() {
	        return this._dataBeforeProcessed;
	      }, coordDimToDataDim: function coordDimToDataDim(t) {
	        return [t];
	      }, dataDimToCoordDim: function dataDimToCoordDim(t) {
	        return t;
	      }, getBaseAxis: function getBaseAxis() {
	        var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();
	      }, formatTooltip: function formatTooltip(t, n) {
	        function r(t) {
	          return e.map(t, function (t, e) {
	            var r = a.getDimensionInfo(e),
	                o = r && r.type;return "ordinal" === o ? t : "time" === o ? n ? "" : i.formatTime("yyyy/mm/dd hh:mm:ss", t) : c(t);
	          }).filter(function (t) {
	            return !!t;
	          }).join(", ");
	        }var a = this._data,
	            o = this.getRawValue(t),
	            s = e[x](o) ? r(o) : c(o),
	            u = a.getName(t),
	            h = a.getItemVisual(t, "color"),
	            d = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + h + '"></span>',
	            f = this.name;return "\x00-" === f && (f = ""), n ? d + l(this.name) + " : " + s : (f && l(f) + "<br />") + d + (u ? l(u) + " : " + s : s);
	      }, ifEnableAnimation: function ifEnableAnimation() {
	        if (s.node) return !1;var t = this[u]("animation");return t && this[L]().count() > this[u]("animationThreshold") && (t = !1), t;
	      }, restoreData: function restoreData() {
	        this._data = this._dataBeforeProcessed.cloneShallow();
	      }, getColorFromPalette: function getColorFromPalette(t, e) {
	        var i = this[o],
	            n = a.getColorFromPalette.call(this, t, e);return n || (n = i.getColorFromPalette(t, e)), n;
	      }, getAxisTooltipDataIndex: null });return e.mixin(h, n.dataFormatMixin), e.mixin(h, a), h;
	  }), e("echarts/model/Component", [K, "./Model", F, "../util/component", "../util/clazz", "../util/layout", "./mixin/boxLayout"], function (t) {
	    function e(t) {
	      var e = [];return n.each(l.getClassesByMainType(t), function (t) {
	        r.apply(e, t[O].dependencies || []);
	      }), n.map(e, function (t) {
	        return o.parseClassType(t).main;
	      });
	    }var i = t("./Model"),
	        n = t(F),
	        r = Array[O].push,
	        a = t("../util/component"),
	        o = t("../util/clazz"),
	        s = t("../util/layout"),
	        l = i[C]({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function $constructor(t, e, r, o) {
	        i.call(this, t, e, r, o), n[C](this, o), this.uid = a.getUID("componentModel");
	      }, init: function init(t, e, i) {
	        this.mergeDefaultAndTheme(t, i);
	      }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
	        var i = this.layoutMode,
	            r = i ? s.getLayoutParams(t) : {},
	            a = e.getTheme();n.merge(t, a.get(this.mainType)), n.merge(t, this.getDefaultOption()), i && s.mergeLayoutParam(t, r, i);
	      }, mergeOption: function mergeOption(t) {
	        n.merge(this.option, t, !0);var e = this.layoutMode;e && s.mergeLayoutParam(this.option, t, e);
	      }, optionUpdated: function optionUpdated() {}, getDefaultOption: function getDefaultOption() {
	        if (!this.hasOwnProperty("__defaultOption")) {
	          for (var t = [], e = this.constructor; e;) {
	            var i = e[O].defaultOption;i && t.push(i), e = e.superClass;
	          }for (var r = {}, a = t[S] - 1; a >= 0; a--) {
	            r = n.merge(r, t[a], !0);
	          }this.__defaultOption = r;
	        }return this.__defaultOption;
	      } });return o.enableClassManagement(l, { registerWhenExtend: !0 }), a.enableSubTypeDefaulter(l), a.enableTopologicalTravel(l, e), n.mixin(l, t("./mixin/boxLayout")), l;
	  }), e("echarts/view/Component", [K, "zrender/container/Group", "../util/component", "../util/clazz"], function (t) {
	    var e = t("zrender/container/Group"),
	        i = t("../util/component"),
	        n = t("../util/clazz"),
	        r = function r() {
	      this.group = new e(), this.uid = i.getUID("viewComponent");
	    };r[O] = { constructor: r, init: function init() {}, render: function render() {}, dispose: function dispose() {} };var a = r[O];return a.updateView = a.updateLayout = a.updateVisual = function () {}, n.enableClassExtend(r), n.enableClassManagement(r, { registerWhenExtend: !0 }), r;
	  }), e("echarts/view/Chart", [K, "zrender/container/Group", "../util/component", "../util/clazz"], function (t) {
	    function e() {
	      this.group = new r(), this.uid = a.getUID("viewChart");
	    }function i(t, e) {
	      if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) {
	        i(t.childAt(n), e);
	      }
	    }function n(t, e, n) {
	      var r = e && e[T],
	          a = e && e.name;if (null != r) for (var o = r instanceof Array ? r : [r], s = 0, l = o[S]; l > s; s++) {
	        i(t.getItemGraphicEl(o[s]), n);
	      } else if (a) for (var c = a instanceof Array ? a : [a], s = 0, l = c[S]; l > s; s++) {
	        var r = t.indexOfName(c[s]);i(t.getItemGraphicEl(r), n);
	      } else t.eachItemGraphicEl(function (t) {
	        i(t, n);
	      });
	    }var r = t("zrender/container/Group"),
	        a = t("../util/component"),
	        o = t("../util/clazz");e[O] = { type: "chart", init: function init() {}, render: function render() {}, highlight: function highlight(t, e, i, r) {
	        n(t[L](), r, "emphasis");
	      }, downplay: function downplay(t, e, i, r) {
	        n(t[L](), r, h);
	      }, remove: function remove() {
	        this.group.removeAll();
	      }, dispose: function dispose() {} };var s = e[O];return s.updateView = s.updateLayout = s.updateVisual = function (t, e, i, n) {
	      this.render(t, e, i, n);
	    }, o.enableClassExtend(e), o.enableClassManagement(e, { registerWhenExtend: !0 }), e;
	  }), e("zrender/zrender", [K, "./core/guid", "./core/env", "./Handler", "./Storage", "./animation/Animation", "./dom/HandlerProxy", "./Painter"], function (t) {
	    function e(t) {
	      delete u[t];
	    }var i = t("./core/guid"),
	        n = t("./core/env"),
	        r = t("./Handler"),
	        a = t("./Storage"),
	        o = t("./animation/Animation"),
	        s = t("./dom/HandlerProxy"),
	        l = !n[D],
	        c = { canvas: t("./Painter") },
	        u = {},
	        h = {};h.version = "3.1.2", h.init = function (t, e) {
	      var n = new d(i(), t, e);return u[n.id] = n, n;
	    }, h.dispose = function (t) {
	      if (t) t.dispose();else {
	        for (var e in u) {
	          u[e].dispose();
	        }u = {};
	      }return h;
	    }, h.getInstance = function (t) {
	      return u[t];
	    }, h.registerPainter = function (t, e) {
	      c[t] = e;
	    };var d = function d(t, e, i) {
	      i = i || {}, this.dom = e, this.id = t;var u = this,
	          h = new a(),
	          d = i.renderer;if (l) {
	        if (!c.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");d = "vml";
	      } else d && c[d] || (d = "canvas");var f = new c[d](e, h, i);this[I] = h, this.painter = f;var p = n.node ? null : new s(f.getViewportRoot());this.handler = new r(h, f, p), this.animation = new o({ stage: { update: function update() {
	            u._needsRefresh && u.refreshImmediately(), u._needsRefreshHover && u.refreshHoverImmediately();
	          } } }), this.animation.start(), this._needsRefresh;var v = h.delFromMap,
	          m = h.addToMap;h.delFromMap = function (t) {
	        var e = h.get(t);v.call(h, t), e && e.removeSelfFromZr(u);
	      }, h.addToMap = function (t) {
	        m.call(h, t), t.addSelfToZr(u);
	      };
	    };return d[O] = { constructor: d, getId: function getId() {
	        return this.id;
	      }, add: function add(t) {
	        this[I].addRoot(t), this._needsRefresh = !0;
	      }, remove: function remove(t) {
	        this[I].delRoot(t), this._needsRefresh = !0;
	      }, configLayer: function configLayer(t, e) {
	        this.painter.configLayer(t, e), this._needsRefresh = !0;
	      }, refreshImmediately: function refreshImmediately() {
	        this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
	      }, refresh: function refresh() {
	        this._needsRefresh = !0;
	      }, addHover: function addHover(t, e) {
	        this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover());
	      }, removeHover: function removeHover(t) {
	        this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
	      }, clearHover: function clearHover() {
	        this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
	      }, refreshHover: function refreshHover() {
	        this._needsRefreshHover = !0;
	      }, refreshHoverImmediately: function refreshHoverImmediately() {
	        this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
	      }, resize: function resize() {
	        this.painter[R](), this.handler[R]();
	      }, clearAnimation: function clearAnimation() {
	        this.animation.clear();
	      }, getWidth: function getWidth() {
	        return this.painter[j]();
	      }, getHeight: function getHeight() {
	        return this.painter[W]();
	      }, pathToImage: function pathToImage(t, e, n) {
	        var r = i();return this.painter.pathToImage(r, t, e, n);
	      }, setCursorStyle: function setCursorStyle(t) {
	        this.handler.setCursorStyle(t);
	      }, on: function on(t, e, i) {
	        this.handler.on(t, e, i);
	      }, off: function off(t, e) {
	        this.handler.off(t, e);
	      }, trigger: function trigger(t, e) {
	        this.handler.trigger(t, e);
	      }, clear: function clear() {
	        this[I].delRoot(), this.painter.clear();
	      }, dispose: function dispose() {
	        this.animation.stop(), this.clear(), this[I].dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this[I] = this.painter = this.handler = null, e(this.id);
	      } }, h;
	  }), e("zrender/tool/color", [K], function () {
	    function t(t) {
	      return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;
	    }function e(t) {
	      return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t;
	    }function i(t) {
	      return 0 > t ? 0 : t > 1 ? 1 : t;
	    }function n(e) {
	      return t(e[S] && "%" === e.charAt(e[S] - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10));
	    }function r(t) {
	      return i(t[S] && "%" === t.charAt(t[S] - 1) ? parseFloat(t) / 100 : parseFloat(t));
	    }function a(t, e, i) {
	      return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t;
	    }function o(t, e, i) {
	      return t + (e - t) * i;
	    }function s(t) {
	      if (t) {
	        t += "";var e = t[b](/ /g, "")[B]();if (e in g) return g[e].slice();if ("#" !== e.charAt(0)) {
	          var i = e[y]("("),
	              a = e[y](")");if (-1 !== i && a + 1 === e[S]) {
	            var o = e.substr(0, i),
	                s = e.substr(i + 1, a - (i + 1)).split(","),
	                c = 1;switch (o) {case "rgba":
	                if (4 !== s[S]) return;c = r(s.pop());case "rgb":
	                if (3 !== s[S]) return;return [n(s[0]), n(s[1]), n(s[2]), c];case "hsla":
	                if (4 !== s[S]) return;return s[3] = r(s[3]), l(s);case "hsl":
	                if (3 !== s[S]) return;return l(s);default:
	                return;}
	          }
	        } else {
	          if (4 === e[S]) {
	            var u = parseInt(e.substr(1), 16);if (!(u >= 0 && 4095 >= u)) return;return [(3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1];
	          }if (7 === e[S]) {
	            var u = parseInt(e.substr(1), 16);if (!(u >= 0 && 16777215 >= u)) return;return [(16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1];
	          }
	        }
	      }
	    }function l(e) {
	      var i = (parseFloat(e[0]) % 360 + 360) % 360 / 360,
	          n = r(e[1]),
	          o = r(e[2]),
	          s = .5 >= o ? o * (n + 1) : o + n - o * n,
	          l = 2 * o - s,
	          c = [t(255 * a(l, s, i + 1 / 3)), t(255 * a(l, s, i)), t(255 * a(l, s, i - 1 / 3))];return 4 === e[S] && (c[3] = e[3]), c;
	    }function c(t) {
	      if (t) {
	        var e,
	            i,
	            n = t[0] / 255,
	            r = t[1] / 255,
	            a = t[2] / 255,
	            o = Math.min(n, r, a),
	            s = Math.max(n, r, a),
	            l = s - o,
	            c = (s + o) / 2;if (0 === l) e = 0, i = 0;else {
	          i = .5 > c ? l / (s + o) : l / (2 - s - o);var u = ((s - n) / 6 + l / 2) / l,
	              h = ((s - r) / 6 + l / 2) / l,
	              d = ((s - a) / 6 + l / 2) / l;n === s ? e = d - h : r === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + h - u), 0 > e && (e += 1), e > 1 && (e -= 1);
	        }var f = [360 * e, i, c];return null != t[3] && f.push(t[3]), f;
	      }
	    }function u(t, e) {
	      var i = s(t);if (i) {
	        for (var n = 0; 3 > n; n++) {
	          i[n] = 0 > e ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0;
	        }return m(i, 4 === i[S] ? "rgba" : "rgb");
	      }
	    }function h(t) {
	      var e = s(t);return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
	    }function d(e, i, n) {
	      if (i && i[S] && e >= 0 && 1 >= e) {
	        n = n || [0, 0, 0, 0];var r = e * (i[S] - 1),
	            a = Math.floor(r),
	            s = Math.ceil(r),
	            l = i[a],
	            c = i[s],
	            u = r - a;return n[0] = t(o(l[0], c[0], u)), n[1] = t(o(l[1], c[1], u)), n[2] = t(o(l[2], c[2], u)), n[3] = t(o(l[3], c[3], u)), n;
	      }
	    }function f(e, n, r) {
	      if (n && n[S] && e >= 0 && 1 >= e) {
	        var a = e * (n[S] - 1),
	            l = Math.floor(a),
	            c = Math.ceil(a),
	            u = s(n[l]),
	            h = s(n[c]),
	            d = a - l,
	            f = m([t(o(u[0], h[0], d)), t(o(u[1], h[1], d)), t(o(u[2], h[2], d)), i(o(u[3], h[3], d))], "rgba");return r ? { color: f, leftIndex: l, rightIndex: c, value: a } : f;
	      }
	    }function p(t, i, n, a) {
	      return t = s(t), t ? (t = c(t), null != i && (t[0] = e(i)), null != n && (t[1] = r(n)), null != a && (t[2] = r(a)), m(l(t), "rgba")) : void 0;
	    }function v(t, e) {
	      return t = s(t), t && null != e ? (t[3] = i(e), m(t, "rgba")) : void 0;
	    }function m(t, e) {
	      var i = t[0] + "," + t[1] + "," + t[2];return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")";
	    }var g = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] };return { parse: s, lift: u, toHex: h, fastMapToColor: d, mapToColor: f, modifyHSL: p, modifyAlpha: v, stringify: m };
	  }), e("zrender/mixin/Eventful", [K], function () {
	    var t = Array[O].slice,
	        e = function e() {
	      this._$handlers = {};
	    };return e[O] = { constructor: e, one: function one(t, e, i) {
	        var n = this._$handlers;if (!e || !t) return this;n[t] || (n[t] = []);for (var r = 0; r < n[t][S]; r++) {
	          if (n[t][r].h === e) return this;
	        }return n[t].push({ h: e, one: !0, ctx: i || this }), this;
	      }, on: function on(t, e, i) {
	        var n = this._$handlers;if (!e || !t) return this;n[t] || (n[t] = []);for (var r = 0; r < n[t][S]; r++) {
	          if (n[t][r].h === e) return this;
	        }return n[t].push({ h: e, one: !1, ctx: i || this }), this;
	      }, isSilent: function isSilent(t) {
	        var e = this._$handlers;return e[t] && e[t][S];
	      }, off: function off(t, e) {
	        var i = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {
	          if (i[t]) {
	            for (var n = [], r = 0, a = i[t][S]; a > r; r++) {
	              i[t][r].h != e && n.push(i[t][r]);
	            }i[t] = n;
	          }i[t] && 0 === i[t][S] && delete i[t];
	        } else delete i[t];return this;
	      }, trigger: function trigger(e) {
	        if (this._$handlers[e]) {
	          var i = arguments,
	              n = i[S];n > 3 && (i = t.call(i, 1));for (var r = this._$handlers[e], a = r[S], o = 0; a > o;) {
	            switch (n) {case 1:
	                r[o].h.call(r[o].ctx);break;case 2:
	                r[o].h.call(r[o].ctx, i[1]);break;case 3:
	                r[o].h.call(r[o].ctx, i[1], i[2]);break;default:
	                r[o].h.apply(r[o].ctx, i);}r[o].one ? (r[M](o, 1), a--) : o++;
	          }
	        }return this;
	      }, triggerWithContext: function triggerWithContext(e) {
	        if (this._$handlers[e]) {
	          var i = arguments,
	              n = i[S];n > 4 && (i = t.call(i, 1, i[S] - 1));for (var r = i[i[S] - 1], a = this._$handlers[e], o = a[S], s = 0; o > s;) {
	            switch (n) {case 1:
	                a[s].h.call(r);break;case 2:
	                a[s].h.call(r, i[1]);break;case 3:
	                a[s].h.call(r, i[1], i[2]);break;default:
	                a[s].h.apply(r, i);}a[s].one ? (a[M](s, 1), o--) : s++;
	          }
	        }return this;
	      } }, e;
	  }), e("echarts/loading/default", [K, "../util/graphic", F], function (t) {
	    var e = t("../util/graphic"),
	        i = t(F),
	        n = Math.PI;return function (t, r) {
	      r = r || {}, i[A](r, { text: "loading", color: "#c23531", textColor: "#000", maskColor: "rgba(255, 255, 255, 0.8)", zlevel: 0 });var a = new e.Rect({ style: { fill: r.maskColor }, zlevel: r[w], z: 1e4 }),
	          o = new e.Arc({ shape: { startAngle: -n / 2, endAngle: -n / 2 + .1, r: 10 }, style: { stroke: r.color, lineCap: "round", lineWidth: 5 }, zlevel: r[w], z: 10001 }),
	          s = new e.Rect({ style: { fill: "none", text: r.text, textPosition: "right", textDistance: 10, textFill: r.textColor }, zlevel: r[w], z: 10001 });o.animateShape(!0).when(1e3, { endAngle: 3 * n / 2 }).start("circularInOut"), o.animateShape(!0).when(1e3, { startAngle: 3 * n / 2 }).delay(300).start("circularInOut");var l = new e.Group();return l.add(o), l.add(s), l.add(a), l[R] = function () {
	        var e = t[j]() / 2,
	            i = t[W]() / 2;o.setShape({ cx: e, cy: i });var n = o.shape.r;s.setShape({ x: e - n, y: i - n, width: 2 * n, height: 2 * n }), a.setShape({ x: 0, y: 0, width: t[j](), height: t[W]() });
	      }, l[R](), l;
	    };
	  }), e("zrender/core/timsort", [], function () {
	    function t(t) {
	      for (var e = 0; t >= l;) {
	        e |= 1 & t, t >>= 1;
	      }return t + e;
	    }function e(t, e, n, r) {
	      var a = e + 1;if (a === n) return 1;if (r(t[a++], t[e]) < 0) {
	        for (; n > a && r(t[a], t[a - 1]) < 0;) {
	          a++;
	        }i(t, e, a);
	      } else for (; n > a && r(t[a], t[a - 1]) >= 0;) {
	        a++;
	      }return a - e;
	    }function i(t, e, i) {
	      for (i--; i > e;) {
	        var n = t[e];t[e++] = t[i], t[i--] = n;
	      }
	    }function n(t, e, i, n, r) {
	      for (n === e && n++; i > n; n++) {
	        for (var a, o = t[n], s = e, l = n; l > s;) {
	          a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
	        }var c = n - s;switch (c) {case 3:
	            t[s + 3] = t[s + 2];case 2:
	            t[s + 2] = t[s + 1];case 1:
	            t[s + 1] = t[s];break;default:
	            for (; c > 0;) {
	              t[s + c] = t[s + c - 1], c--;
	            }}t[s] = o;
	      }
	    }function r(t, e, i, n, r, a) {
	      var o = 0,
	          s = 0,
	          l = 1;if (a(t, e[i + r]) > 0) {
	        for (s = n - r; s > l && a(t, e[i + r + l]) > 0;) {
	          o = l, l = (l << 1) + 1, 0 >= l && (l = s);
	        }l > s && (l = s), o += r, l += r;
	      } else {
	        for (s = r + 1; s > l && a(t, e[i + r - l]) <= 0;) {
	          o = l, l = (l << 1) + 1, 0 >= l && (l = s);
	        }l > s && (l = s);var c = o;o = r - l, l = r - c;
	      }for (o++; l > o;) {
	        var u = o + (l - o >>> 1);a(t, e[i + u]) > 0 ? o = u + 1 : l = u;
	      }return l;
	    }function a(t, e, i, n, r, a) {
	      var o = 0,
	          s = 0,
	          l = 1;if (a(t, e[i + r]) < 0) {
	        for (s = r + 1; s > l && a(t, e[i + r - l]) < 0;) {
	          o = l, l = (l << 1) + 1, 0 >= l && (l = s);
	        }l > s && (l = s);var c = o;o = r - l, l = r - c;
	      } else {
	        for (s = n - r; s > l && a(t, e[i + r + l]) >= 0;) {
	          o = l, l = (l << 1) + 1, 0 >= l && (l = s);
	        }l > s && (l = s), o += r, l += r;
	      }for (o++; l > o;) {
	        var u = o + (l - o >>> 1);a(t, e[i + u]) < 0 ? l = u : o = u + 1;
	      }return l;
	    }function o(t, e) {
	      function i(t, e) {
	        d[y] = t, f[y] = e, y += 1;
	      }function n() {
	        for (; y > 1;) {
	          var t = y - 2;if (t >= 1 && f[t - 1] <= f[t] + f[t + 1] || t >= 2 && f[t - 2] <= f[t] + f[t - 1]) f[t - 1] < f[t + 1] && t--;else if (f[t] > f[t + 1]) break;s(t);
	        }
	      }function o() {
	        for (; y > 1;) {
	          var t = y - 2;t > 0 && f[t - 1] < f[t + 1] && t--, s(t);
	        }
	      }function s(i) {
	        var n = d[i],
	            o = f[i],
	            s = d[i + 1],
	            c = f[i + 1];f[i] = o + c, i === y - 3 && (d[i + 1] = d[i + 2], f[i + 1] = f[i + 2]), y--;var u = a(t[s], t, n, o, 0, e);n += u, o -= u, 0 !== o && (c = r(t[n + o - 1], t, s, c, c - 1, e), 0 !== c && (c >= o ? l(n, o, s, c) : h(n, o, s, c)));
	      }function l(i, n, o, s) {
	        var l = 0;for (l = 0; n > l; l++) {
	          _[l] = t[i + l];
	        }var u = 0,
	            h = o,
	            d = i;if (t[d++] = t[h++], 0 !== --s) {
	          if (1 === n) {
	            for (l = 0; s > l; l++) {
	              t[d + l] = t[h + l];
	            }return void (t[d + s] = _[u]);
	          }for (var f, v, m, g = p;;) {
	            f = 0, v = 0, m = !1;do {
	              if (e(t[h], _[u]) < 0) {
	                if (t[d++] = t[h++], v++, f = 0, 0 === --s) {
	                  m = !0;break;
	                }
	              } else if (t[d++] = _[u++], f++, v = 0, 1 === --n) {
	                m = !0;break;
	              }
	            } while (g > (f | v));if (m) break;do {
	              if (f = a(t[h], _, u, n, 0, e), 0 !== f) {
	                for (l = 0; f > l; l++) {
	                  t[d + l] = _[u + l];
	                }if (d += f, u += f, n -= f, 1 >= n) {
	                  m = !0;break;
	                }
	              }if (t[d++] = t[h++], 0 === --s) {
	                m = !0;break;
	              }if (v = r(_[u], t, h, s, 0, e), 0 !== v) {
	                for (l = 0; v > l; l++) {
	                  t[d + l] = t[h + l];
	                }if (d += v, h += v, s -= v, 0 === s) {
	                  m = !0;break;
	                }
	              }if (t[d++] = _[u++], 1 === --n) {
	                m = !0;break;
	              }g--;
	            } while (f >= c || v >= c);if (m) break;0 > g && (g = 0), g += 2;
	          }if (p = g, 1 > p && (p = 1), 1 === n) {
	            for (l = 0; s > l; l++) {
	              t[d + l] = t[h + l];
	            }t[d + s] = _[u];
	          } else {
	            if (0 === n) throw new Error();for (l = 0; n > l; l++) {
	              t[d + l] = _[u + l];
	            }
	          }
	        } else for (l = 0; n > l; l++) {
	          t[d + l] = _[u + l];
	        }
	      }function h(i, n, o, s) {
	        var l = 0;for (l = 0; s > l; l++) {
	          _[l] = t[o + l];
	        }var u = i + n - 1,
	            h = s - 1,
	            d = o + s - 1,
	            f = 0,
	            v = 0;if (t[d--] = t[u--], 0 !== --n) {
	          if (1 === s) {
	            for (d -= n, u -= n, v = d + 1, f = u + 1, l = n - 1; l >= 0; l--) {
	              t[v + l] = t[f + l];
	            }return void (t[d] = _[h]);
	          }for (var m = p;;) {
	            var g = 0,
	                y = 0,
	                x = !1;do {
	              if (e(_[h], t[u]) < 0) {
	                if (t[d--] = t[u--], g++, y = 0, 0 === --n) {
	                  x = !0;break;
	                }
	              } else if (t[d--] = _[h--], y++, g = 0, 1 === --s) {
	                x = !0;break;
	              }
	            } while (m > (g | y));if (x) break;do {
	              if (g = n - a(_[h], t, i, n, n - 1, e), 0 !== g) {
	                for (d -= g, u -= g, n -= g, v = d + 1, f = u + 1, l = g - 1; l >= 0; l--) {
	                  t[v + l] = t[f + l];
	                }if (0 === n) {
	                  x = !0;break;
	                }
	              }if (t[d--] = _[h--], 1 === --s) {
	                x = !0;break;
	              }if (y = s - r(t[u], _, 0, s, s - 1, e), 0 !== y) {
	                for (d -= y, h -= y, s -= y, v = d + 1, f = h + 1, l = 0; y > l; l++) {
	                  t[v + l] = _[f + l];
	                }if (1 >= s) {
	                  x = !0;break;
	                }
	              }if (t[d--] = t[u--], 0 === --n) {
	                x = !0;break;
	              }m--;
	            } while (g >= c || y >= c);if (x) break;0 > m && (m = 0), m += 2;
	          }if (p = m, 1 > p && (p = 1), 1 === s) {
	            for (d -= n, u -= n, v = d + 1, f = u + 1, l = n - 1; l >= 0; l--) {
	              t[v + l] = t[f + l];
	            }t[d] = _[h];
	          } else {
	            if (0 === s) throw new Error();for (f = d - (s - 1), l = 0; s > l; l++) {
	              t[f + l] = _[l];
	            }
	          }
	        } else for (f = d - (s - 1), l = 0; s > l; l++) {
	          t[f + l] = _[l];
	        }
	      }var d,
	          f,
	          p = c,
	          v = 0,
	          m = u,
	          g = 0,
	          y = 0;v = t[S], 2 * u > v && (m = v >>> 1);var _ = [];g = 120 > v ? 5 : 1542 > v ? 10 : 119151 > v ? 19 : 40, d = [], f = [], this.mergeRuns = n, this.forceMergeRuns = o, this.pushRun = i;
	    }function s(i, r, a, s) {
	      a || (a = 0), s || (s = i[S]);var c = s - a;if (!(2 > c)) {
	        var u = 0;if (l > c) return u = e(i, a, s, r), void n(i, a, s, a + u, r);var h = new o(i, r),
	            d = t(c);do {
	          if (u = e(i, a, s, r), d > u) {
	            var f = c;f > d && (f = d), n(i, a, a + f, a + u, r), u = f;
	          }h.pushRun(a, u), h.mergeRuns(), c -= u, a += u;
	        } while (0 !== c);h.forceMergeRuns();
	      }
	    }var l = 32,
	        c = 7,
	        u = 256;return s;
	  }), e("echarts/model/Model", [K, F, "../util/clazz", "./mixin/lineStyle", "./mixin/areaStyle", "./mixin/textStyle", "./mixin/itemStyle"], function (t) {
	    function e(t, e, i) {
	      this.parentModel = e, this[o] = i, this.option = t;
	    }var i = t(F),
	        n = t("../util/clazz");e[O] = { constructor: e, init: null, mergeOption: function mergeOption(t) {
	        i.merge(this.option, t, !0);
	      }, get: function get(t, e) {
	        if (!t) return this.option;(typeof t === "undefined" ? "undefined" : _typeof(t)) === E && (t = t.split("."));for (var i = this.option, n = this.parentModel, r = 0; r < t[S] && (!t[r] || (i = i && "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? i[t[r]] : null, null != i)); r++) {}return null == i && n && !e && (i = n.get(t)), i;
	      }, getShallow: function getShallow(t, e) {
	        var i = this.option,
	            n = i && i[t],
	            r = this.parentModel;return null == n && r && !e && (n = r[u](t)), n;
	      }, getModel: function getModel(t, i) {
	        var n = this.get(t, !0),
	            r = this.parentModel,
	            a = new e(n, i || r && r[Q](t), this[o]);return a;
	      }, isEmpty: function isEmpty() {
	        return null == this.option;
	      }, restoreData: function restoreData() {}, clone: function clone() {
	        var t = this.constructor;return new t(i.clone(this.option));
	      }, setReadOnly: function setReadOnly(t) {
	        n.setReadOnly(this, t);
	      } }, n.enableClassExtend(e);var r = i.mixin;return r(e, t("./mixin/lineStyle")), r(e, t("./mixin/areaStyle")), r(e, t("./mixin/textStyle")), r(e, t("./mixin/itemStyle")), e;
	  }), e("echarts/preprocessor/backwardCompat", [K, F, "./helper/compatStyle"], function (t) {
	    function e(t, e) {
	      e = e.split(",");for (var i = t, n = 0; n < e[S] && (i = i && i[e[n]], null != i); n++) {}return i;
	    }function i(t, e, i, n) {
	      e = e.split(",");for (var r, a = t, o = 0; o < e[S] - 1; o++) {
	        r = e[o], null == a[r] && (a[r] = {}), a = a[r];
	      }(n || null == a[e[o]]) && (a[e[o]] = i);
	    }function n(t) {
	      c(o, function (e) {
	        e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
	      });
	    }var r = t(F),
	        a = t("./helper/compatStyle"),
	        o = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", H]],
	        s = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
	        l = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"],
	        c = r.each;return function (t) {
	      c(t.series, function (t) {
	        if (r[P](t)) {
	          var o = t.type;if (a(t), ("pie" === o || "gauge" === o) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === o) {
	            var s = e(t, "pointer.color");null != s && i(t, "itemStyle.normal.color", s);
	          }for (var c = 0; c < l[S]; c++) {
	            if (l[c] === t.type) {
	              n(t);break;
	            }
	          }
	        }
	      }), t.dataRange && (t.visualMap = t.dataRange), c(s, function (e) {
	        var i = t[e];i && (r[x](i) || (i = [i]), c(i, function (t) {
	          n(t);
	        }));
	      });
	    };
	  }), e("echarts/visual/seriesColor", [K, "zrender/graphic/Gradient"], function (t) {
	    var e = t("zrender/graphic/Gradient");return function (t) {
	      function i(i) {
	        var n = (i.visualColorAccessPath || "itemStyle.normal.color").split("."),
	            r = i[L](),
	            a = i.get(n) || i.getColorFromPalette(i.get("name"));r.setVisual("color", a), t.isSeriesFiltered(i) || ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== _ || a instanceof e || r.each(function (t) {
	          r.setItemVisual(t, "color", a(i.getDataParams(t)));
	        }), r.each(function (t) {
	          var e = r.getItemModel(t),
	              i = e.get(n, !0);null != i && r.setItemVisual(t, "color", i);
	        }));
	      }t.eachRawSeries(i);
	    };
	  }), e("echarts/data/List", [K, "../model/Model", "./DataDiffer", F, "../util/model"], function (t) {
	    function e(t) {
	      return d[x](t) || (t = [t]), t;
	    }function i(t, e) {
	      var i = t.dimensions,
	          n = new g(d.map(i, t.getDimensionInfo, t), t.hostModel);m(n, t);for (var r = n._storage = {}, a = t._storage, o = 0; o < i[S]; o++) {
	        var s = i[o],
	            l = a[s];r[s] = d[y](e, s) >= 0 ? new l.constructor(a[s][S]) : a[s];
	      }return n;
	    }var r = n,
	        a = (typeof window === "undefined" ? "undefined" : _typeof(window)) === n ? global : window,
	        s = _typeof(a.Float64Array) === r ? Array : a.Float64Array,
	        l = _typeof(a.Int32Array) === r ? Array : a.Int32Array,
	        c = { "float": s, "int": l, ordinal: Array, number: Array, time: Array },
	        u = t("../model/Model"),
	        h = t("./DataDiffer"),
	        d = t(F),
	        f = t("../util/model"),
	        p = d[P],
	        v = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"],
	        m = function m(t, e) {
	      d.each(v.concat(e.__wrappedMethods || []), function (i) {
	        e.hasOwnProperty(i) && (t[i] = e[i]);
	      }), t.__wrappedMethods = e.__wrappedMethods;
	    },
	        g = function g(t, e) {
	      t = t || ["x", "y"];for (var i = {}, n = [], r = 0; r < t[S]; r++) {
	        var a,
	            o = {};_typeof(t[r]) === E ? (a = t[r], o = { name: a, stackable: !1, type: "number" }) : (o = t[r], a = o.name, o.type = o.type || "number"), n.push(a), i[a] = o;
	      }this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent;
	    },
	        b = g[O];b.type = "list", b.hasItemOption = !0, b.getDimension = function (t) {
	      return isNaN(t) || (t = this.dimensions[t] || t), t;
	    }, b.getDimensionInfo = function (t) {
	      return d.clone(this._dimensionInfos[this.getDimension(t)]);
	    }, b.initData = function (t, e, i) {
	      t = t || [], this._rawData = t;var n = this._storage = {},
	          r = this.indices = [],
	          a = this.dimensions,
	          o = t[S],
	          s = this._dimensionInfos,
	          l = [],
	          u = {};e = e || [];for (var h = 0; h < a[S]; h++) {
	        var d = s[a[h]],
	            p = c[d.type];n[a[h]] = new p(o);
	      }var v = this;i || (v.hasItemOption = !1), i = i || function (t, e, i, n) {
	        var r = f.getDataItemValue(t);return f.isDataItemOption(t) && (v.hasItemOption = !0), f.converDataValue(r instanceof Array ? r[n] : r, s[e]);
	      };for (var m = 0; m < t[S]; m++) {
	        for (var g = t[m], y = 0; y < a[S]; y++) {
	          var _ = a[y],
	              x = n[_];x[m] = i(g, _, m, y);
	        }r.push(m);
	      }for (var h = 0; h < t[S]; h++) {
	        e[h] || t[h] && null != t[h].name && (e[h] = t[h].name);var b = e[h] || "",
	            w = t[h] && t[h].id;!w && b && (u[b] = u[b] || 0, w = b, u[b] > 0 && (w += "__ec__" + u[b]), u[b]++), w && (l[h] = w);
	      }this._nameList = e, this._idList = l;
	    }, b.count = function () {
	      return this.indices[S];
	    }, b.get = function (t, e, i) {
	      var n = this._storage,
	          r = this.indices[e];if (null == r) return 0 / 0;var a = n[t] && n[t][r];if (i) {
	        var o = this._dimensionInfos[t];if (o && o.stackable) for (var s = this.stackedOn; s;) {
	          var l = s.get(t, e);(a >= 0 && l > 0 || 0 >= a && 0 > l) && (a += l), s = s.stackedOn;
	        }
	      }return a;
	    }, b.getValues = function (t, e, i) {
	      var n = [];d[x](t) || (i = e, e = t, t = this.dimensions);for (var r = 0, a = t[S]; a > r; r++) {
	        n.push(this.get(t[r], e, i));
	      }return n;
	    }, b.hasValue = function (t) {
	      for (var e = this.dimensions, i = this._dimensionInfos, n = 0, r = e[S]; r > n; n++) {
	        if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return !1;
	      }return !0;
	    }, b.getDataExtent = function (t, e) {
	      t = this.getDimension(t);var i = this._storage[t],
	          n = this.getDimensionInfo(t);e = n && n.stackable && e;var r,
	          a = (this._extent || (this._extent = {}))[t + !!e];if (a) return a;if (i) {
	        for (var o = 1 / 0, s = -1 / 0, l = 0, c = this.count(); c > l; l++) {
	          r = this.get(t, l, e), o > r && (o = r), r > s && (s = r);
	        }return this._extent[t + !!e] = [o, s];
	      }return [1 / 0, -1 / 0];
	    }, b.getSum = function (t, e) {
	      var i = this._storage[t],
	          n = 0;if (i) for (var r = 0, a = this.count(); a > r; r++) {
	        var o = this.get(t, r, e);isNaN(o) || (n += o);
	      }return n;
	    }, b[y] = function (t, e) {
	      var i = this._storage,
	          n = i[t],
	          r = this.indices;if (n) for (var a = 0, o = r[S]; o > a; a++) {
	        var s = r[a];if (n[s] === e) return a;
	      }return -1;
	    }, b.indexOfName = function (t) {
	      for (var e = this.indices, i = this._nameList, n = 0, r = e[S]; r > n; n++) {
	        var a = e[n];if (i[a] === t) return n;
	      }return -1;
	    }, b.indexOfRawIndex = function (t) {
	      for (var e = this.indices, i = 0, n = e[S] - 1; n >= i;) {
	        var r = (i + n) / 2 | 0;if (e[r] < t) i = r + 1;else {
	          if (!(e[r] > t)) return r;n = r - 1;
	        }
	      }return -1;
	    }, b.indexOfNearest = function (t, e, i, n) {
	      var r = this._storage,
	          a = r[t];null == n && (n = 1 / 0);var o = -1;if (a) for (var s = Number.MAX_VALUE, l = 0, c = this.count(); c > l; l++) {
	        var u = e - this.get(t, l, i),
	            h = Math.abs(u);n >= u && (s > h || h === s && u > 0) && (s = h, o = l);
	      }return o;
	    }, b.getRawIndex = function (t) {
	      var e = this.indices[t];return null == e ? -1 : e;
	    }, b.getRawDataItem = function (t) {
	      return this._rawData[this.getRawIndex(t)];
	    }, b.getName = function (t) {
	      return this._nameList[this.indices[t]] || "";
	    }, b.getId = function (t) {
	      return this._idList[this.indices[t]] || this.getRawIndex(t) + "";
	    }, b.each = function (t, i, n, r) {
	      (typeof t === "undefined" ? "undefined" : _typeof(t)) === _ && (r = n, n = i, i = t, t = []), t = d.map(e(t), this.getDimension, this);var a = [],
	          o = t[S],
	          s = this.indices;r = r || this;for (var l = 0; l < s[S]; l++) {
	        switch (o) {case 0:
	            i.call(r, l);break;case 1:
	            i.call(r, this.get(t[0], l, n), l);break;case 2:
	            i.call(r, this.get(t[0], l, n), this.get(t[1], l, n), l);break;default:
	            for (var c = 0; o > c; c++) {
	              a[c] = this.get(t[c], l, n);
	            }a[c] = l, i.apply(r, a);}
	      }
	    }, b.filterSelf = function (t, i, n, r) {
	      (typeof t === "undefined" ? "undefined" : _typeof(t)) === _ && (r = n, n = i, i = t, t = []), t = d.map(e(t), this.getDimension, this);var a = [],
	          o = [],
	          s = t[S],
	          l = this.indices;r = r || this;for (var c = 0; c < l[S]; c++) {
	        var u;if (1 === s) u = i.call(r, this.get(t[0], c, n), c);else {
	          for (var h = 0; s > h; h++) {
	            o[h] = this.get(t[h], c, n);
	          }o[h] = c, u = i.apply(r, o);
	        }u && a.push(l[c]);
	      }return this.indices = a, this._extent = {}, this;
	    }, b.mapArray = function (t, e, i, n) {
	      (typeof t === "undefined" ? "undefined" : _typeof(t)) === _ && (n = i, i = e, e = t, t = []);var r = [];return this.each(t, function () {
	        r.push(e && e.apply(this, arguments));
	      }, i, n), r;
	    }, b.map = function (t, n, r, a) {
	      t = d.map(e(t), this.getDimension, this);var o = i(this, t),
	          s = o.indices = this.indices,
	          l = o._storage,
	          c = [];return this.each(t, function () {
	        var e = arguments[arguments[S] - 1],
	            i = n && n.apply(this, arguments);if (null != i) {
	          "number" == typeof i && (c[0] = i, i = c);for (var r = 0; r < i[S]; r++) {
	            var a = t[r],
	                o = l[a],
	                u = s[e];o && (o[u] = i[r]);
	          }
	        }
	      }, r, a), o;
	    }, b.downSample = function (t, e, n, r) {
	      for (var a = i(this, [t]), o = this._storage, s = a._storage, l = this.indices, c = a.indices = [], u = [], h = [], d = Math.floor(1 / e), f = s[t], p = this.count(), v = 0; v < o[t][S]; v++) {
	        s[t][v] = o[t][v];
	      }for (var v = 0; p > v; v += d) {
	        d > p - v && (d = p - v, u[S] = d);for (var m = 0; d > m; m++) {
	          var g = l[v + m];u[m] = f[g], h[m] = g;
	        }var y = n(u),
	            g = h[r(u, y) || 0];f[g] = y, c.push(g);
	      }return a;
	    }, b.getItemModel = function (t) {
	      var e = this.hostModel;return t = this.indices[t], new u(this._rawData[t], e, e && e[o]);
	    }, b.diff = function (t) {
	      var e = this._idList,
	          i = t && t._idList;return new h(t ? t.indices : [], this.indices, function (t) {
	        return i[t] || t + "";
	      }, function (t) {
	        return e[t] || t + "";
	      });
	    }, b.getVisual = function (t) {
	      var e = this._visual;return e && e[t];
	    }, b.setVisual = function (t, e) {
	      if (p(t)) for (var i in t) {
	        t.hasOwnProperty(i) && this.setVisual(i, t[i]);
	      } else this._visual = this._visual || {}, this._visual[t] = e;
	    }, b.setLayout = function (t, e) {
	      if (p(t)) for (var i in t) {
	        t.hasOwnProperty(i) && this.setLayout(i, t[i]);
	      } else this._layout[t] = e;
	    }, b.getLayout = function (t) {
	      return this._layout[t];
	    }, b.getItemLayout = function (t) {
	      return this._itemLayouts[t];
	    }, b.setItemLayout = function (t, e, i) {
	      this._itemLayouts[t] = i ? d[C](this._itemLayouts[t] || {}, e) : e;
	    }, b.clearItemLayouts = function () {
	      this._itemLayouts[S] = 0;
	    }, b.getItemVisual = function (t, e, i) {
	      var n = this._itemVisuals[t],
	          r = n && n[e];return null != r || i ? r : this.getVisual(e);
	    }, b.setItemVisual = function (t, e, i) {
	      var n = this._itemVisuals[t] || {};if (this._itemVisuals[t] = n, p(e)) for (var r in e) {
	        e.hasOwnProperty(r) && (n[r] = e[r]);
	      } else n[e] = i;
	    }, b.clearAllVisual = function () {
	      this._visual = {}, this._itemVisuals = [];
	    };var w = function w(t) {
	      t.seriesIndex = this.seriesIndex, t[T] = this[T], t.dataType = this.dataType;
	    };return b.setItemGraphicEl = function (t, e) {
	      var i = this.hostModel;e && (e[T] = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(w, e)), this._graphicEls[t] = e;
	    }, b.getItemGraphicEl = function (t) {
	      return this._graphicEls[t];
	    }, b.eachItemGraphicEl = function (t, e) {
	      d.each(this._graphicEls, function (i, n) {
	        i && t && t.call(e, i, n);
	      });
	    }, b.cloneShallow = function () {
	      var t = d.map(this.dimensions, this.getDimensionInfo, this),
	          e = new g(t, this.hostModel);return e._storage = this._storage, m(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = d[C]({}, this._extent)), e;
	    }, b.wrapMethod = function (t, e) {
	      var i = this[t];(typeof i === "undefined" ? "undefined" : _typeof(i)) === _ && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
	        var t = i.apply(this, arguments);return e.apply(this, [t].concat(d.slice(arguments)));
	      });
	    }, b.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], b.CHANGABLE_METHODS = ["filterSelf"], g;
	  }), e("echarts/util/number", [K], function () {
	    function t(t) {
	      return t[b](/^\s+/, "")[b](/\s+$/, "");
	    }var e = {},
	        i = 1e-4;return e.linearMap = function (t, e, i, n) {
	      var r = e[1] - e[0],
	          a = i[1] - i[0];if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;if (n) {
	        if (r > 0) {
	          if (t <= e[0]) return i[0];if (t >= e[1]) return i[1];
	        } else {
	          if (t >= e[0]) return i[0];if (t <= e[1]) return i[1];
	        }
	      } else {
	        if (t === e[0]) return i[0];if (t === e[1]) return i[1];
	      }return (t - e[0]) / r * a + i[0];
	    }, e.parsePercent = function (e, i) {
	      switch (e) {case G:case q:
	          e = "50%";break;case "left":case "top":
	          e = "0%";break;case "right":case H:
	          e = "100%";}return (typeof e === "undefined" ? "undefined" : _typeof(e)) === E ? t(e).match(/%$/) ? parseFloat(e) / 100 * i : parseFloat(e) : null == e ? 0 / 0 : +e;
	    }, e.round = function (t) {
	      return +(+t).toFixed(10);
	    }, e.asc = function (t) {
	      return t.sort(function (t, e) {
	        return t - e;
	      }), t;
	    }, e.getPrecision = function (t) {
	      if (t = +t, isNaN(t)) return 0;for (var e = 1, i = 0; Math.round(t * e) / e !== t;) {
	        e *= 10, i++;
	      }return i;
	    }, e.getPixelPrecision = function (t, e) {
	      var i = Math.log,
	          n = Math.LN10,
	          r = Math.floor(i(t[1] - t[0]) / n),
	          a = Math.round(i(Math.abs(e[1] - e[0])) / n);return Math.max(-r + a, 0);
	    }, e.MAX_SAFE_INTEGER = 9007199254740991, e.remRadian = function (t) {
	      var e = 2 * Math.PI;return (t % e + e) % e;
	    }, e.isRadianAroundZero = function (t) {
	      return t > -i && i > t;
	    }, e.parseDate = function (t) {
	      return t instanceof Date ? t : new Date((typeof t === "undefined" ? "undefined" : _typeof(t)) === E ? new Date(t[b](/-/g, "/")) - new Date("1970/01/01") : Math.round(t));
	    }, e.quantity = function (t) {
	      return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
	    }, e.nice = function (t, i) {
	      var n,
	          r = e.quantity(t),
	          a = t / r;return n = i ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, n * r;
	    }, e;
	  }), e("echarts/util/format", [K, F, "./number", "zrender/contain/text"], function (t) {
	    function e(t) {
	      return isNaN(t) ? "-" : (t = (t + "").split("."), t[0][b](/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t[S] > 1 ? "." + t[1] : ""));
	    }function i(t) {
	      return t[B]()[b](/-(.)/g, function (t, e) {
	        return e.toUpperCase();
	      });
	    }function n(t) {
	      var e = t[S];return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
	    }function r(t) {
	      return String(t)[b](/&/g, "&amp;")[b](/</g, "&lt;")[b](/>/g, "&gt;")[b](/"/g, "&quot;")[b](/'/g, "&#39;");
	    }function a(t, e) {
	      return "{" + t + (null == e ? "" : e) + "}";
	    }function o(t, e) {
	      c[x](e) || (e = [e]);var i = e[S];if (!i) return "";for (var n = e[0].$vars || [], r = 0; r < n[S]; r++) {
	        var o = d[r];t = t[b](a(o), a(o, 0));
	      }for (var s = 0; i > s; s++) {
	        for (var l = 0; l < n[S]; l++) {
	          t = t[b](a(d[l], s), e[s][n[l]]);
	        }
	      }return t;
	    }function s(t, e) {
	      ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");var i = u.parseDate(e),
	          n = i.getFullYear(),
	          r = i.getMonth() + 1,
	          a = i.getDate(),
	          o = i.getHours(),
	          s = i.getMinutes(),
	          c = i.getSeconds();return t = t[b]("MM", l(r))[B]()[b]("yyyy", n)[b]("yy", n % 100)[b]("dd", l(a))[b]("d", a)[b]("hh", l(o))[b]("h", o)[b]("mm", l(s))[b]("m", s)[b]("ss", l(c))[b]("s", c);
	    }function l(t) {
	      return 10 > t ? "0" + t : t;
	    }var c = t(F),
	        u = t("./number"),
	        h = t("zrender/contain/text"),
	        d = ["a", "b", "c", "d", "e", "f", "g"];return { normalizeCssArray: n, addCommas: e, toCamelCase: i, encodeHTML: r, formatTpl: o, formatTime: s, truncateText: h.truncateText };
	  }), e("zrender/core/matrix", [], function () {
	    var t = (typeof Float32Array === "undefined" ? "undefined" : _typeof(Float32Array)) === n ? Array : Float32Array,
	        e = { create: function create() {
	        var i = new t(6);return e.identity(i), i;
	      }, identity: function identity(t) {
	        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
	      }, copy: function copy(t, e) {
	        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
	      }, mul: function mul(t, e, i) {
	        var n = e[0] * i[0] + e[2] * i[1],
	            r = e[1] * i[0] + e[3] * i[1],
	            a = e[0] * i[2] + e[2] * i[3],
	            o = e[1] * i[2] + e[3] * i[3],
	            s = e[0] * i[4] + e[2] * i[5] + e[4],
	            l = e[1] * i[4] + e[3] * i[5] + e[5];return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
	      }, translate: function translate(t, e, i) {
	        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t;
	      }, rotate: function rotate(t, e, i) {
	        var n = e[0],
	            r = e[2],
	            a = e[4],
	            o = e[1],
	            s = e[3],
	            l = e[5],
	            c = Math.sin(i),
	            u = Math.cos(i);return t[0] = n * u + o * c, t[1] = -n * c + o * u, t[2] = r * u + s * c, t[3] = -r * c + u * s, t[4] = u * a + c * l, t[5] = u * l - c * a, t;
	      }, scale: function scale(t, e, i) {
	        var n = i[0],
	            r = i[1];return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t;
	      }, invert: function invert(t, e) {
	        var i = e[0],
	            n = e[2],
	            r = e[4],
	            a = e[1],
	            o = e[3],
	            s = e[5],
	            l = i * o - a * n;return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null;
	      } };return e;
	  }), e("echarts/scale/Scale", [K, "../util/clazz"], function (t) {
	    function e() {
	      this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);
	    }var i = t("../util/clazz"),
	        n = e[O];return n.parse = function (t) {
	      return t;
	    }, n[m] = function (t) {
	      var e = this._extent;return t >= e[0] && t <= e[1];
	    }, n.normalize = function (t) {
	      var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
	    }, n.scale = function (t) {
	      var e = this._extent;return t * (e[1] - e[0]) + e[0];
	    }, n.unionExtent = function (t) {
	      var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
	    }, n[p] = function () {
	      return this._extent.slice();
	    }, n.setExtent = function (t, e) {
	      var i = this._extent;isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
	    }, n.getTicksLabels = function () {
	      for (var t = [], e = this[v](), i = 0; i < e[S]; i++) {
	        t.push(this.getLabel(e[i]));
	      }return t;
	    }, i.enableClassExtend(e), i.enableClassManagement(e, { registerWhenExtend: !0 }), e;
	  }), e("zrender/vml/graphic", [K, "../core/env", "../core/vector", "../core/BoundingRect", "../core/PathProxy", "../tool/color", "../contain/text", "../graphic/mixin/RectText", "../graphic/Displayable", "../graphic/Image", "../graphic/Text", "../graphic/Path", "../graphic/Gradient", "./core"], function (t) {
	    if (!t("../core/env")[D]) {
	      var e = t("../core/vector"),
	          i = t("../core/BoundingRect"),
	          n = t("../core/PathProxy").CMD,
	          r = t("../tool/color"),
	          o = t("../contain/text"),
	          s = t("../graphic/mixin/RectText"),
	          l = t("../graphic/Displayable"),
	          u = t("../graphic/Image"),
	          p = t("../graphic/Text"),
	          v = t("../graphic/Path"),
	          m = t("../graphic/Gradient"),
	          g = t("./core"),
	          y = Math.round,
	          _ = Math.sqrt,
	          x = Math.abs,
	          T = Math.cos,
	          M = Math.sin,
	          A = Math.max,
	          C = e[f],
	          P = ",",
	          L = "progid:DXImageTransform.Microsoft",
	          z = 21600,
	          k = z / 2,
	          I = 1e5,
	          R = 1e3,
	          B = function B(t) {
	        t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = z + "," + z, t.coordorigin = "0,0";
	      },
	          F = function F(t) {
	        return String(t)[b](/&/g, "&amp;")[b](/"/g, "&quot;");
	      },
	          V = function V(t, e, i) {
	        return "rgb(" + [t, e, i].join(",") + ")";
	      },
	          W = function W(t, e) {
	        e && t && e.parentNode !== t && t.appendChild(e);
	      },
	          j = function j(t, e) {
	        e && t && e.parentNode === t && t.removeChild(e);
	      },
	          U = function U(t, e, i) {
	        return (parseFloat(t) || 0) * I + (parseFloat(e) || 0) * R + i;
	      },
	          Z = function Z(t, e) {
	        return (typeof t === "undefined" ? "undefined" : _typeof(t)) === E ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
	      },
	          $ = function $(t, e, i) {
	        var n = r.parse(e);i = +i, isNaN(i) && (i = 1), n && (t.color = V(n[0], n[1], n[2]), t[N] = i * n[3]);
	      },
	          Q = function Q(t) {
	        var e = r.parse(t);return [V(e[0], e[1], e[2]), e[3]];
	      },
	          K = function K(t, e, i) {
	        var n = e.fill;if (null != n) if (n instanceof m) {
	          var r,
	              o = 0,
	              s = [0, 0],
	              l = 0,
	              c = 1,
	              u = i[Y](),
	              h = u.width,
	              d = u[X];if ("linear" === n.type) {
	            r = "gradient";var f = i[a],
	                p = [n.x * h, n.y * d],
	                v = [n.x2 * h, n.y2 * d];f && (C(p, p, f), C(v, v, f));var g = v[0] - p[0],
	                y = v[1] - p[1];o = 180 * Math.atan2(g, y) / Math.PI, 0 > o && (o += 360), 1e-6 > o && (o = 0);
	          } else {
	            r = "gradientradial";var p = [n.x * h, n.y * d],
	                f = i[a],
	                _ = i.scale,
	                x = h,
	                b = d;s = [(p[0] - u.x) / x, (p[1] - u.y) / b], f && C(p, p, f), x /= _[0] * z, b /= _[1] * z;var w = A(x, b);l = 0 / w, c = 2 * n.r / w - l;
	          }var T = n.colorStops.slice();T.sort(function (t, e) {
	            return t.offset - e.offset;
	          });for (var M = T[S], P = [], L = [], k = 0; M > k; k++) {
	            var I = T[k],
	                D = Q(I.color);L.push(I.offset * c + l + " " + D[0]), (0 === k || k === M - 1) && P.push(D);
	          }if (M >= 2) {
	            var R = P[0][0],
	                E = P[1][0],
	                O = P[0][1] * e[N],
	                B = P[1][1] * e[N];t.type = r, t.method = "none", t.focus = "100%", t.angle = o, t.color = R, t.color2 = E, t.colors = L.join(","), t[N] = B, t.opacity2 = O;
	          }"radial" === r && (t.focusposition = s.join(","));
	        } else $(t, n, e[N]);
	      },
	          J = function J(t, e) {
	        null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e[d] || e[d] instanceof m || $(t, e[d], e[N]);
	      },
	          te = function te(t, e, i, n) {
	        var r = "fill" == e,
	            a = t.getElementsByTagName(e)[0];null != i[e] && "none" !== i[e] && (r || !r && i.lineWidth) ? (t[r ? "filled" : "stroked"] = "true", i[e] instanceof m && j(t, a), a || (a = g.createNode(e)), r ? K(a, i, n) : J(a, i), W(t, a)) : (t[r ? "filled" : "stroked"] = "false", j(t, a));
	      },
	          ee = [[], [], []],
	          ie = function ie(t, e) {
	        var i,
	            r,
	            a,
	            o,
	            s,
	            l,
	            c = n.M,
	            u = n.C,
	            h = n.L,
	            d = n.A,
	            f = n.Q,
	            p = [];for (o = 0; o < t[S];) {
	          switch (a = t[o++], r = "", i = 0, a) {case c:
	              r = " m ", i = 1, s = t[o++], l = t[o++], ee[0][0] = s, ee[0][1] = l;break;case h:
	              r = " l ", i = 1, s = t[o++], l = t[o++], ee[0][0] = s, ee[0][1] = l;break;case f:case u:
	              r = " c ", i = 3;var v,
	                  m,
	                  g = t[o++],
	                  x = t[o++],
	                  b = t[o++],
	                  w = t[o++];a === f ? (v = b, m = w, b = (b + 2 * g) / 3, w = (w + 2 * x) / 3, g = (s + 2 * g) / 3, x = (l + 2 * x) / 3) : (v = t[o++], m = t[o++]), ee[0][0] = g, ee[0][1] = x, ee[1][0] = b, ee[1][1] = w, ee[2][0] = v, ee[2][1] = m, s = v, l = m;break;case d:
	              var A = 0,
	                  L = 0,
	                  I = 1,
	                  D = 1,
	                  R = 0;e && (A = e[4], L = e[5], I = _(e[0] * e[0] + e[1] * e[1]), D = _(e[2] * e[2] + e[3] * e[3]), R = Math.atan2(-e[1] / D, e[0] / I));var E = t[o++],
	                  O = t[o++],
	                  B = t[o++],
	                  F = t[o++],
	                  N = t[o++] + R,
	                  V = t[o++] + N + R;o++;var H = t[o++],
	                  G = E + T(N) * B,
	                  q = O + M(N) * F,
	                  g = E + T(V) * B,
	                  x = O + M(V) * F,
	                  W = H ? " wa " : " at ";Math.abs(G - g) < 1e-10 && (Math.abs(V - N) > .01 ? H && (G += 270 / z) : Math.abs(q - O) < 1e-10 ? H && E > G || !H && G > E ? x -= 270 / z : x += 270 / z : H && O > q || !H && q > O ? g += 270 / z : g -= 270 / z), p.push(W, y(((E - B) * I + A) * z - k), P, y(((O - F) * D + L) * z - k), P, y(((E + B) * I + A) * z - k), P, y(((O + F) * D + L) * z - k), P, y((G * I + A) * z - k), P, y((q * D + L) * z - k), P, y((g * I + A) * z - k), P, y((x * D + L) * z - k)), s = g, l = x;break;case n.R:
	              var j = ee[0],
	                  U = ee[1];j[0] = t[o++], j[1] = t[o++], U[0] = j[0] + t[o++], U[1] = j[1] + t[o++], e && (C(j, j, e), C(U, U, e)), j[0] = y(j[0] * z - k), U[0] = y(U[0] * z - k), j[1] = y(j[1] * z - k), U[1] = y(U[1] * z - k), p.push(" m ", j[0], P, j[1], " l ", U[0], P, j[1], " l ", U[0], P, U[1], " l ", j[0], P, U[1]);break;case n.Z:
	              p.push(" x ");}if (i > 0) {
	            p.push(r);for (var X = 0; i > X; X++) {
	              var Y = ee[X];e && C(Y, Y, e), p.push(y(Y[0] * z - k), P, y(Y[1] * z - k), i - 1 > X ? P : "");
	            }
	          }
	        }return p.join("");
	      };v[O].brushVML = function (t) {
	        var e = this.style,
	            i = this._vmlEl;i || (i = g.createNode("shape"), B(i), this._vmlEl = i), te(i, "fill", e, this), te(i, d, e, this);var n = this[a],
	            r = null != n,
	            o = i.getElementsByTagName(d)[0];if (o) {
	          var s = e.lineWidth;if (r && !e.strokeNoScale) {
	            var l = n[0] * n[3] - n[1] * n[2];s *= _(x(l));
	          }o.weight = s + "px";
	        }var c = this.path;this.__dirtyPath && (c.beginPath(), this.buildPath(c, this.shape), c.toStatic(), this.__dirtyPath = !1), i.path = ie(c.data, this[a]), i.style.zIndex = U(this[w], this.z, this.z2), W(t, i), e.text ? this.drawRectText(t, this[Y]()) : this.removeRectText(t);
	      }, v[O].onRemove = function (t) {
	        j(t, this._vmlEl), this.removeRectText(t);
	      }, v[O].onAdd = function (t) {
	        W(t, this._vmlEl), this.appendRectText(t);
	      };var ne = function ne(t) {
	        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.tagName && "IMG" === t.tagName.toUpperCase();
	      };u[O].brushVML = function (t) {
	        var e,
	            i,
	            n = this.style,
	            r = n.image;if (ne(r)) {
	          var o = r.src;if (o === this._imageSrc) e = this._imageWidth, i = this._imageHeight;else {
	            var s = r.runtimeStyle,
	                l = s.width,
	                u = s[X];s.width = "auto", s[X] = "auto", e = r.width, i = r[X], s.width = l, s[X] = u, this._imageSrc = o, this._imageWidth = e, this._imageHeight = i;
	          }r = o;
	        } else r === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);if (r) {
	          var h = n.x || 0,
	              d = n.y || 0,
	              f = n.width,
	              p = n[X],
	              v = n.sWidth,
	              m = n.sHeight,
	              x = n.sx || 0,
	              b = n.sy || 0,
	              T = v && m,
	              M = this._vmlEl;M || (M = g.doc[c]("div"), B(M), this._vmlEl = M);var S,
	              z = M.style,
	              k = !1,
	              I = 1,
	              D = 1;if (this[a] && (S = this[a], I = _(S[0] * S[0] + S[1] * S[1]), D = _(S[2] * S[2] + S[3] * S[3]), k = S[1] || S[2]), k) {
	            var R = [h, d],
	                E = [h + f, d],
	                O = [h, d + p],
	                F = [h + f, d + p];C(R, R, S), C(E, E, S), C(O, O, S), C(F, F, S);var V = A(R[0], E[0], O[0], F[0]),
	                H = A(R[1], E[1], O[1], F[1]),
	                G = [];G.push("M11=", S[0] / I, P, "M12=", S[2] / D, P, "M21=", S[1] / I, P, "M22=", S[3] / D, P, "Dx=", y(h * I + S[4]), P, "Dy=", y(d * D + S[5])), z.padding = "0 " + y(V) + "px " + y(H) + "px 0", z.filter = L + ".Matrix(" + G.join("") + ", SizingMethod=clip)";
	          } else S && (h = h * I + S[4], d = d * D + S[5]), z.filter = "", z.left = y(h) + "px", z.top = y(d) + "px";var q = this._imageEl,
	              j = this._cropEl;q || (q = g.doc[c]("div"), this._imageEl = q);var Z = q.style;if (T) {
	            if (e && i) Z.width = y(I * e * f / v) + "px", Z[X] = y(D * i * p / m) + "px";else {
	              var $ = new Image(),
	                  Q = this;$.onload = function () {
	                $.onload = null, e = $.width, i = $[X], Z.width = y(I * e * f / v) + "px", Z[X] = y(D * i * p / m) + "px", Q._imageWidth = e, Q._imageHeight = i, Q._imageSrc = r;
	              }, $.src = r;
	            }j || (j = g.doc[c]("div"), j.style.overflow = "hidden", this._cropEl = j);var K = j.style;K.width = y((f + x * f / v) * I), K[X] = y((p + b * p / m) * D), K.filter = L + ".Matrix(Dx=" + -x * f / v * I + ",Dy=" + -b * p / m * D + ")", j.parentNode || M.appendChild(j), q.parentNode != j && j.appendChild(q);
	          } else Z.width = y(I * f) + "px", Z[X] = y(D * p) + "px", M.appendChild(q), j && j.parentNode && (M.removeChild(j), this._cropEl = null);var J = "",
	              te = n[N];1 > te && (J += ".Alpha(opacity=" + y(100 * te) + ") "), J += L + ".AlphaImageLoader(src=" + r + ", SizingMethod=scale)", Z.filter = J, M.style.zIndex = U(this[w], this.z, this.z2), W(t, M), n.text && this.drawRectText(t, this[Y]());
	        }
	      }, u[O].onRemove = function (t) {
	        j(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t);
	      }, u[O].onAdd = function (t) {
	        W(t, this._vmlEl), this.appendRectText(t);
	      };var re,
	          ae = h,
	          oe = {},
	          se = 0,
	          le = 100,
	          ce = document[c]("div"),
	          ue = function ue(t) {
	        var e = oe[t];if (!e) {
	          se > le && (se = 0, oe = {});var i,
	              n = ce.style;try {
	            n.font = t, i = n.fontFamily.split(",")[0];
	          } catch (r) {}e = { style: n.fontStyle || ae, variant: n.fontVariant || ae, weight: n.fontWeight || ae, size: 0 | parseFloat(n.fontSize || 12), family: i || "Microsoft YaHei" }, oe[t] = e, se++;
	        }return e;
	      };o.measureText = function (t, e) {
	        var i = g.doc;re || (re = i[c]("div"), re.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", g.doc.body.appendChild(re));try {
	          re.style.font = e;
	        } catch (n) {}return re.innerHTML = "", re.appendChild(i.createTextNode(t)), { width: re.offsetWidth };
	      };for (var he = new i(), de = function de(t, e, i, n) {
	        var r = this.style,
	            s = r.text;if (s) {
	          var l,
	              c,
	              u = r.textAlign,
	              h = ue(r.textFont),
	              p = h.style + " " + h.variant + " " + h.weight + " " + h.size + 'px "' + h.family + '"',
	              v = r.textBaseline,
	              m = r.textVerticalAlign;i = i || o[Y](s, p, u, v);var _ = this[a];if (_ && !n && (he.copy(e), he[f](_), e = he), n) l = e.x, c = e.y;else {
	            var x = r.textPosition,
	                b = r.textDistance;if (x instanceof Array) l = e.x + Z(x[0], e.width), c = e.y + Z(x[1], e[X]), u = u || "left", v = v || "top";else {
	              var T = o.adjustTextPositionOnRect(x, e, i, b);l = T.x, c = T.y, u = u || T.textAlign, v = v || T.textBaseline;
	            }
	          }if (m) {
	            switch (m) {case q:
	                c -= i[X] / 2;break;case H:
	                c -= i[X];}v = "top";
	          }var M = h.size;switch (v) {case "hanging":case "top":
	              c += M / 1.75;break;case q:
	              break;default:
	              c -= M / 2.25;}switch (u) {case "left":
	              break;case G:
	              l -= i.width / 2;break;case "right":
	              l -= i.width;}var S,
	              A,
	              L,
	              z = g.createNode,
	              k = this._textVmlEl;k ? (L = k.firstChild, S = L.nextSibling, A = S.nextSibling) : (k = z("line"), S = z("path"), A = z("textpath"), L = z("skew"), A.style["v-text-align"] = "left", B(k), S.textpathok = !0, A.on = !0, k.from = "0 0", k.to = "1000 0.05", W(k, L), W(k, S), W(k, A), this._textVmlEl = k);var I = [l, c],
	              D = k.style;_ && n ? (C(I, I, _), L.on = !0, L.matrix = _[0].toFixed(3) + P + _[2].toFixed(3) + P + _[1].toFixed(3) + P + _[3].toFixed(3) + ",0,0", L.offset = (y(I[0]) || 0) + "," + (y(I[1]) || 0), L.origin = "0 0", D.left = "0px", D.top = "0px") : (L.on = !1, D.left = y(l) + "px", D.top = y(c) + "px"), A[E] = F(s);try {
	            A.style.font = p;
	          } catch (R) {}te(k, "fill", { fill: n ? r.fill : r.textFill, opacity: r[N] }, this), te(k, d, { stroke: n ? r[d] : r.textStroke, opacity: r[N], lineDash: r.lineDash }, this), k.style.zIndex = U(this[w], this.z, this.z2), W(t, k);
	        }
	      }, fe = function fe(t) {
	        j(t, this._textVmlEl), this._textVmlEl = null;
	      }, pe = function pe(t) {
	        W(t, this._textVmlEl);
	      }, ve = [s, l, u, v, p], me = 0; me < ve[S]; me++) {
	        var ge = ve[me][O];ge.drawRectText = de, ge.removeRectText = fe, ge.appendRectText = pe;
	      }p[O].brushVML = function (t) {
	        var e = this.style;e.text ? this.drawRectText(t, { x: e.x || 0, y: e.y || 0, width: 0, height: 0 }, this[Y](), !0) : this.removeRectText(t);
	      }, p[O].onRemove = function (t) {
	        this.removeRectText(t);
	      }, p[O].onAdd = function (t) {
	        this.appendRectText(t);
	      };
	    }
	  }), e("zrender/vml/Painter", [K, "../core/log", "./core"], function (t) {
	    function e(t) {
	      return parseInt(t, 10);
	    }function n(t, e) {
	      o.initVML(), this.root = t, this[I] = e;var i = document[c]("div"),
	          n = document[c]("div");i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this[R]();var r = e.delFromMap,
	          a = e.addToMap;e.delFromMap = function (t) {
	        var i = e.get(t);r.call(e, t), i && i.onRemove && i.onRemove(n);
	      }, e.addToMap = function (t) {
	        t.onAdd && t.onAdd(n), a.call(e, t);
	      }, this._firstPaint = !0;
	    }function r(t) {
	      return function () {
	        a('In IE8.0 VML mode painter not support method "' + t + '"');
	      };
	    }var a = t("../core/log"),
	        o = t("./core");n[O] = { constructor: n, getViewportRoot: function getViewportRoot() {
	        return this._vmlViewport;
	      }, refresh: function refresh() {
	        var t = this[I].getDisplayList(!0, !0);this._paintList(t);
	      }, _paintList: function _paintList(t) {
	        for (var e = this._vmlRoot, n = 0; n < t[S]; n++) {
	          var r = t[n];r.invisible || r[k] ? (r.__alreadyNotVisible || r.onRemove(e), r.__alreadyNotVisible = !0) : (r.__alreadyNotVisible && r.onAdd(e), r.__alreadyNotVisible = !1, r[i] && (r.beforeBrush && r.beforeBrush(), (r.brushVML || r.brush).call(r, e), r.afterBrush && r.afterBrush())), r[i] = !1;
	        }this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1);
	      }, resize: function resize() {
	        var t = this._getWidth(),
	            e = this._getHeight();if (this._width != t && this._height != e) {
	          this._width = t, this._height = e;var i = this._vmlViewport.style;i.width = t + "px", i[X] = e + "px";
	        }
	      }, dispose: function dispose() {
	        this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this[I] = null;
	      }, getWidth: function getWidth() {
	        return this._width;
	      }, getHeight: function getHeight() {
	        return this._height;
	      }, clear: function clear() {
	        this.root.removeChild(this.vmlViewport);
	      }, _getWidth: function _getWidth() {
	        var t = this.root,
	            i = t.currentStyle;return (t.clientWidth || e(i.width)) - e(i.paddingLeft) - e(i.paddingRight) | 0;
	      }, _getHeight: function _getHeight() {
	        var t = this.root,
	            i = t.currentStyle;return (t.clientHeight || e(i[X])) - e(i.paddingTop) - e(i.paddingBottom) | 0;
	      } };for (var s = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], l = 0; l < s[S]; l++) {
	      var u = s[l];n[O][u] = r(u);
	    }return n;
	  }), e("echarts/scale/Interval", [K, "../util/number", "../util/format", "./Scale"], function (t) {
	    var e = t("../util/number"),
	        i = t("../util/format"),
	        n = t("./Scale"),
	        r = Math.floor,
	        a = Math.ceil,
	        o = n[C]({ type: "interval", _interval: 0, setExtent: function setExtent(t, e) {
	        var i = this._extent;isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e));
	      }, unionExtent: function unionExtent(t) {
	        var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), o[O].setExtent.call(this, e[0], e[1]);
	      }, getInterval: function getInterval() {
	        return this._interval || this.niceTicks(), this._interval;
	      }, setInterval: function setInterval(t) {
	        this._interval = t, this._niceExtent = this._extent.slice();
	      }, getTicks: function getTicks() {
	        this._interval || this.niceTicks();var t = this._interval,
	            i = this._extent,
	            n = [],
	            r = 1e4;if (t) {
	          var a = this._niceExtent;i[0] < a[0] && n.push(i[0]);for (var o = a[0]; o <= a[1];) {
	            if (n.push(o), o = e.round(o + t), n[S] > r) return [];
	          }i[1] > a[1] && n.push(i[1]);
	        }return n;
	      }, getTicksLabels: function getTicksLabels() {
	        for (var t = [], e = this[v](), i = 0; i < e[S]; i++) {
	          t.push(this.getLabel(e[i]));
	        }return t;
	      }, getLabel: function getLabel(t) {
	        return i.addCommas(t);
	      }, niceTicks: function niceTicks(t) {
	        t = t || 5;var i = this._extent,
	            n = i[1] - i[0];if (isFinite(n)) {
	          0 > n && (n = -n, i.reverse());var o = e.nice(n / t, !0),
	              s = [e.round(a(i[0] / o) * o), e.round(r(i[1] / o) * o)];this._interval = o, this._niceExtent = s;
	        }
	      }, niceExtent: function niceExtent(t, i, n) {
	        var o = this._extent;if (o[0] === o[1]) if (0 !== o[0]) {
	          var s = o[0];n ? o[0] -= s / 2 : (o[1] += s / 2, o[0] -= s / 2);
	        } else o[1] = 1;var l = o[1] - o[0];isFinite(l) || (o[0] = 0, o[1] = 1), this.niceTicks(t);var c = this._interval;i || (o[0] = e.round(r(o[0] / c) * c)), n || (o[1] = e.round(a(o[1] / c) * c));
	      } });return o[z] = function () {
	      return new o();
	    }, o;
	  }), e("zrender/core/vector", [], function () {
	    var t = (typeof Float32Array === "undefined" ? "undefined" : _typeof(Float32Array)) === n ? Array : Float32Array,
	        e = { create: function create(e, i) {
	        var n = new t(2);return null == e && (e = 0), null == i && (i = 0), n[0] = e, n[1] = i, n;
	      }, copy: function copy(t, e) {
	        return t[0] = e[0], t[1] = e[1], t;
	      }, clone: function clone(e) {
	        var i = new t(2);return i[0] = e[0], i[1] = e[1], i;
	      }, set: function set(t, e, i) {
	        return t[0] = e, t[1] = i, t;
	      }, add: function add(t, e, i) {
	        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
	      }, scaleAndAdd: function scaleAndAdd(t, e, i, n) {
	        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t;
	      }, sub: function sub(t, e, i) {
	        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
	      }, len: function len(t) {
	        return Math.sqrt(this.lenSquare(t));
	      }, lenSquare: function lenSquare(t) {
	        return t[0] * t[0] + t[1] * t[1];
	      }, mul: function mul(t, e, i) {
	        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t;
	      }, div: function div(t, e, i) {
	        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t;
	      }, dot: function dot(t, e) {
	        return t[0] * e[0] + t[1] * e[1];
	      }, scale: function scale(t, e, i) {
	        return t[0] = e[0] * i, t[1] = e[1] * i, t;
	      }, normalize: function normalize(t, i) {
	        var n = e.len(i);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = i[0] / n, t[1] = i[1] / n), t;
	      }, distance: function distance(t, e) {
	        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
	      }, distanceSquare: function distanceSquare(t, e) {
	        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
	      }, negate: function negate(t, e) {
	        return t[0] = -e[0], t[1] = -e[1], t;
	      }, lerp: function lerp(t, e, i, n) {
	        return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t;
	      }, applyTransform: function applyTransform(t, e, i) {
	        var n = e[0],
	            r = e[1];return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;
	      }, min: function min(t, e, i) {
	        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
	      }, max: function max(t, e, i) {
	        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
	      } };return e[S] = e.len, e.lengthSquare = e.lenSquare, e.dist = e.distance, e.distSquare = e.distanceSquare, e;
	  }), e("echarts/coord/polar/Polar", [K, "./RadiusAxis", "./AngleAxis"], function (t) {
	    var e = t("./RadiusAxis"),
	        i = t("./AngleAxis"),
	        n = function n(t) {
	      this.name = t || "", this.cx = 0, this.cy = 0, this._radiusAxis = new e(), this._angleAxis = new i();
	    };return n[O] = { constructor: n, type: "polar", dimensions: [l, "angle"], containPoint: function containPoint(t) {
	        var e = this.pointToCoord(t);return this._radiusAxis[m](e[0]) && this._angleAxis[m](e[1]);
	      }, containData: function containData(t) {
	        return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1]);
	      }, getAxis: function getAxis(t) {
	        return this["_" + t + "Axis"];
	      }, getAxesByScale: function getAxesByScale(t) {
	        var e = [],
	            i = this._angleAxis,
	            n = this._radiusAxis;return i.scale.type === t && e.push(i), n.scale.type === t && e.push(n), e;
	      }, getAngleAxis: function getAngleAxis() {
	        return this._angleAxis;
	      }, getRadiusAxis: function getRadiusAxis() {
	        return this._radiusAxis;
	      }, getOtherAxis: function getOtherAxis(t) {
	        var e = this._angleAxis;return t === e ? this._radiusAxis : e;
	      }, getBaseAxis: function getBaseAxis() {
	        return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis();
	      }, dataToPoints: function dataToPoints(t) {
	        return t.mapArray(this.dimensions, function (t, e) {
	          return this.dataToPoint([t, e]);
	        }, this);
	      }, dataToPoint: function dataToPoint(t, e) {
	        return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)]);
	      }, pointToData: function pointToData(t, e) {
	        var i = this.pointToCoord(t);return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)];
	      }, pointToCoord: function pointToCoord(t) {
	        var e = t[0] - this.cx,
	            i = t[1] - this.cy,
	            n = this.getAngleAxis(),
	            r = n[p](),
	            a = Math.min(r[0], r[1]),
	            o = Math.max(r[0], r[1]);n.inverse ? a = o - 360 : o = a + 360;var s = Math.sqrt(e * e + i * i);e /= s, i /= s;for (var l = Math.atan2(-i, e) / Math.PI * 180, c = a > l ? 1 : -1; a > l || l > o;) {
	          l += 360 * c;
	        }return [s, l];
	      }, coordToPoint: function coordToPoint(t) {
	        var e = t[0],
	            i = t[1] / 180 * Math.PI,
	            n = Math.cos(i) * e + this.cx,
	            r = -Math.sin(i) * e + this.cy;return [n, r];
	      } }, n;
	  }), e("echarts/coord/axisHelper", [K, "../scale/Ordinal", "../scale/Interval", "../scale/Time", "../scale/Log", "../scale/Scale", "../util/number", F, "zrender/contain/text"], function (t) {
	    var e = t("../scale/Ordinal"),
	        i = t("../scale/Interval");t("../scale/Time"), t("../scale/Log");var n = t("../scale/Scale"),
	        r = t("../util/number"),
	        a = t(F),
	        o = t("zrender/contain/text"),
	        l = {};return l.getScaleExtent = function (t, e) {
	      var i = t.scale,
	          n = i[p](),
	          o = n[1] - n[0];if ("ordinal" === i.type) return isFinite(o) ? n : [0, 0];var s = e.getMin ? e.getMin() : e.get("min"),
	          l = e.getMax ? e.getMax() : e.get("max"),
	          c = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"),
	          u = e.get("boundaryGap");a[x](u) || (u = [u || 0, u || 0]), u[0] = r.parsePercent(u[0], 1), u[1] = r.parsePercent(u[1], 1);var h = !0,
	          d = !0;return null == s && (s = n[0] - u[0] * o, h = !1), null == l && (l = n[1] + u[1] * o, d = !1), "dataMin" === s && (s = n[0]), "dataMax" === l && (l = n[1]), c && (s > 0 && l > 0 && !h && (s = 0), 0 > s && 0 > l && !d && (l = 0)), [s, l];
	    }, l.niceScaleExtent = function (t, e) {
	      var i = t.scale,
	          n = l.getScaleExtent(t, e),
	          r = null != (e.getMin ? e.getMin() : e.get("min")),
	          a = null != (e.getMax ? e.getMax() : e.get("max")),
	          o = e.get("splitNumber");i.setExtent(n[0], n[1]), i.niceExtent(o, r, a);var s = e.get("minInterval");if (isFinite(s) && !r && !a && "interval" === i.type) {
	        var c = i.getInterval(),
	            u = Math.max(Math.abs(c), s) / c;n = i[p](), i.setExtent(u * n[0], n[1] * u), i.niceExtent(o);
	      }var c = e.get("interval");null != c && i.setInterval && i.setInterval(c);
	    }, l.createScaleByModel = function (t, r) {
	      if (r = r || t.get("type")) switch (r) {case s:
	          return new e(t.getCategories(), [1 / 0, -1 / 0]);case "value":
	          return new i();default:
	          return (n.getClass(r) || i)[z](t);}
	    }, l.ifAxisCrossZero = function (t) {
	      var e = t.scale[p](),
	          i = e[0],
	          n = e[1];return !(i > 0 && n > 0 || 0 > i && 0 > n);
	    }, l.getAxisLabelInterval = function (t, e, i, n) {
	      var r,
	          a = 0,
	          s = 0,
	          l = 1;e[S] > 40 && (l = Math.floor(e[S] / 40));for (var c = 0; c < t[S]; c += l) {
	        var u = t[c],
	            h = o[Y](e[c], i, G, "top");h[n ? "x" : "y"] += u, h[n ? "width" : X] *= 1.3, r ? r.intersect(h) ? (s++, a = Math.max(a, s)) : (r.union(h), s = 0) : r = h.clone();
	      }return 0 === a && l > 1 ? l : (a + 1) * l - 1;
	    }, l.getFormattedLabels = function (t, e) {
	      var i = t.scale,
	          n = i.getTicksLabels(),
	          r = i[v]();return (typeof e === "undefined" ? "undefined" : _typeof(e)) === E ? (e = function (t) {
	        return function (e) {
	          return t[b]("{value}", e);
	        };
	      }(e), a.map(n, e)) : (typeof e === "undefined" ? "undefined" : _typeof(e)) === _ ? a.map(r, function (n, r) {
	        return e(t.type === s ? i.getLabel(n) : n, r);
	      }, this) : n;
	    }, l;
	  }), e("echarts/coord/polar/PolarModel", [K, "./AxisModel", "../../echarts"], function (t) {
	    t("./AxisModel"), t("../../echarts").extendComponentModel({ type: "polar", dependencies: ["polarAxis", "angleAxis"], coordinateSystem: null, findAxisModel: function findAxisModel(t) {
	        var e,
	            i = this[o];return i.eachComponent(t, function (t) {
	          i.getComponent("polar", t[u]("polarIndex")) === this && (e = t);
	        }, this), e;
	      }, defaultOption: { zlevel: 0, z: 0, center: ["50%", "50%"], radius: "80%" } });
	  }), e("echarts/model/globalDefault", [], function () {
	    var t = "";return (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== n && (t = navigator.platform || ""), { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], grid: {}, textStyle: { fontFamily: t.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: !0, animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3 };
	  }), e("echarts/model/mixin/colorPalette", [], function () {
	    return { clearColorPalette: function clearColorPalette() {
	        this._colorIdx = 0, this._colorNameMap = {};
	      }, getColorFromPalette: function getColorFromPalette(t, e) {
	        e = e || this;var i = e._colorIdx || 0,
	            n = e._colorNameMap || (e._colorNameMap = {});if (n[t]) return n[t];var r = this.get("color", !0) || [];if (r[S]) {
	          var a = r[i];return t && (n[t] = a), e._colorIdx = (i + 1) % r[S], a;
	        }
	      } };
	  }), e("echarts/util/model", [K, "./format", "./number", "../model/Model", F], function (t) {
	    var e = t("./format"),
	        i = t("./number"),
	        n = t("../model/Model"),
	        r = t(F),
	        a = ["x", "y", "z", l, "angle"],
	        o = {};return o.createNameEach = function (t, e) {
	      t = t.slice();var i = r.map(t, o.capitalFirst);e = (e || []).slice();var n = r.map(e, o.capitalFirst);return function (a, o) {
	        r.each(t, function (t, r) {
	          for (var s = { name: t, capital: i[r] }, l = 0; l < e[S]; l++) {
	            s[e[l]] = t + n[l];
	          }a.call(o, s);
	        });
	      };
	    }, o.capitalFirst = function (t) {
	      return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
	    }, o.eachAxisDim = o.createNameEach(a, ["axisIndex", "axis", "index"]), o.normalizeToArray = function (t) {
	      return t instanceof Array ? t : null == t ? [] : [t];
	    }, o.createLinkedNodesFinder = function (t, e, i) {
	      function n(t, e) {
	        return r[y](e.nodes, t) >= 0;
	      }function a(t, n) {
	        var a = !1;return e(function (e) {
	          r.each(i(t, e) || [], function (t) {
	            n.records[e.name][t] && (a = !0);
	          });
	        }), a;
	      }function o(t, n) {
	        n.nodes.push(t), e(function (e) {
	          r.each(i(t, e) || [], function (t) {
	            n.records[e.name][t] = !0;
	          });
	        });
	      }return function (i) {
	        function r(t) {
	          !n(t, s) && a(t, s) && (o(t, s), l = !0);
	        }var s = { nodes: [], records: {} };if (e(function (t) {
	          s.records[t.name] = {};
	        }), !i) return s;o(i, s);var l;do {
	          l = !1, t(r);
	        } while (l);return s;
	      };
	    }, o.defaultEmphasis = function (t, e) {
	      if (t) {
	        var i = t.emphasis = t.emphasis || {},
	            n = t[h] = t[h] || {};r.each(e, function (t) {
	          var e = r.retrieve(i[t], n[t]);null != e && (i[t] = e);
	        });
	      }
	    }, o.LABEL_OPTIONS = [V, "show", $, "distance", "formatter"], o.getDataItemValue = function (t) {
	      return t && (null == t.value ? t : t.value);
	    }, o.isDataItemOption = function (t) {
	      return r[P](t) && !(t instanceof Array);
	    }, o.converDataValue = function (t, e) {
	      var n = e && e.type;return "ordinal" === n ? t : ("time" !== n || isFinite(t) || null == t || "-" === t || (t = +i.parseDate(t)), null == t || "" === t ? 0 / 0 : +t);
	    }, o.createDataFormatModel = function (t, e) {
	      var i = new n();return r.mixin(i, o.dataFormatMixin), i.seriesIndex = e.seriesIndex, i.name = e.name || "", i.mainType = e.mainType, i.subType = e.subType, i[L] = function () {
	        return t;
	      }, i;
	    }, o.dataFormatMixin = { getDataParams: function getDataParams(t, e) {
	        var i = this[L](e),
	            n = this.seriesIndex,
	            r = this.name,
	            a = this.getRawValue(t, e),
	            o = i.getRawIndex(t),
	            s = i.getName(t, !0),
	            l = i.getRawDataItem(t);return { componentType: this.mainType, componentSubType: this.subType, seriesType: "series" === this.mainType ? this.subType : null, seriesIndex: n, seriesName: r, name: s, dataIndex: o, data: l, dataType: e, value: a, color: i.getItemVisual(t, "color"), $vars: ["seriesName", "name", "value"] };
	      }, getFormattedLabel: function getFormattedLabel(t, i, n, r) {
	        i = i || h;var a = this[L](n),
	            o = a.getItemModel(t),
	            s = this.getDataParams(t, n);null != r && s.value instanceof Array && (s.value = s.value[r]);var l = o.get(["label", i, "formatter"]);return (typeof l === "undefined" ? "undefined" : _typeof(l)) === _ ? (s.status = i, l(s)) : (typeof l === "undefined" ? "undefined" : _typeof(l)) === E ? e.formatTpl(l, s) : void 0;
	      }, getRawValue: function getRawValue(t, e) {
	        var i = this[L](e),
	            n = i.getRawDataItem(t);return null != n ? !r[P](n) || n instanceof Array ? n : n.value : void 0;
	      }, formatTooltip: r.noop }, o.mappingToExists = function (t, e) {
	      e = (e || []).slice();var i = r.map(t || [], function (t) {
	        return { exist: t };
	      });return r.each(e, function (t, n) {
	        if (r[P](t)) for (var a = 0; a < i[S]; a++) {
	          var s = i[a].exist;if (!i[a].option && (null != t.id && s.id === t.id + "" || null != t.name && !o.isIdInner(t) && !o.isIdInner(s) && s.name === t.name + "")) {
	            i[a].option = t, e[n] = null;break;
	          }
	        }
	      }), r.each(e, function (t) {
	        if (r[P](t)) {
	          for (var e = 0; e < i[S]; e++) {
	            var n = i[e].exist;if (!i[e].option && !o.isIdInner(n) && null == t.id) {
	              i[e].option = t;break;
	            }
	          }e >= i[S] && i.push({ option: t });
	        }
	      }), i;
	    }, o.isIdInner = function (t) {
	      return r[P](t) && t.id && 0 === (t.id + "")[y]("\x00_ec_\x00");
	    }, o.compressBatches = function (t, e) {
	      function i(t, e, i) {
	        for (var n = 0, r = t[S]; r > n; n++) {
	          for (var a = t[n].seriesId, s = o.normalizeToArray(t[n][T]), l = i && i[a], c = 0, u = s[S]; u > c; c++) {
	            var h = s[c];l && l[h] ? l[h] = null : (e[a] || (e[a] = {}))[h] = 1;
	          }
	        }
	      }function n(t, e) {
	        var i = [];for (var r in t) {
	          if (t.hasOwnProperty(r) && null != t[r]) if (e) i.push(+r);else {
	            var a = n(t[r], !0);a[S] && i.push({ seriesId: r, dataIndex: a });
	          }
	        }return i;
	      }var r = {},
	          a = {};return i(t || [], r), i(e || [], a, r), [n(r), n(a)];
	    }, o;
	  }), e("echarts/util/clazz", [K, F], function (t) {
	    function e(t, e) {
	      var i = n.slice(arguments, 2);return this.superClass[O][e].apply(t, i);
	    }function i(t, e, i) {
	      return this.superClass[O][e].apply(t, i);
	    }var n = t(F),
	        r = {},
	        a = ".",
	        o = "___EC__COMPONENT__CONTAINER___",
	        s = r.parseClassType = function (t) {
	      var e = { main: "", sub: "" };return t && (t = t.split(a), e.main = t[0] || "", e.sub = t[1] || ""), e;
	    };return r.enableClassExtend = function (t) {
	      t.$constructor = t, t[C] = function (t) {
	        var r = this,
	            a = function a() {
	          t.$constructor ? t.$constructor.apply(this, arguments) : r.apply(this, arguments);
	        };return n[C](a[O], t), a[C] = this[C], a.superCall = e, a.superApply = i, n[g](a, this), a.superClass = r, a;
	      };
	    }, r.enableClassManagement = function (t, e) {
	      function i(t) {
	        var e = r[t.main];return e && e[o] || (e = r[t.main] = {}, e[o] = !0), e;
	      }e = e || {};var r = {};if (t.registerClass = function (t, e) {
	        if (e) if (e = s(e), e.sub) {
	          if (e.sub !== o) {
	            var n = i(e);n[e.sub] = t;
	          }
	        } else r[e.main] = t;return t;
	      }, t.getClass = function (t, e, i) {
	        var n = r[t];if (n && n[o] && (n = e ? n[e] : null), i && !n) throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");return n;
	      }, t.getClassesByMainType = function (t) {
	        t = s(t);var e = [],
	            i = r[t.main];return i && i[o] ? n.each(i, function (t, i) {
	          i !== o && e.push(t);
	        }) : e.push(i), e;
	      }, t.hasClass = function (t) {
	        return t = s(t), !!r[t.main];
	      }, t.getAllClassMainTypes = function () {
	        var t = [];return n.each(r, function (e, i) {
	          t.push(i);
	        }), t;
	      }, t.hasSubTypes = function (t) {
	        t = s(t);var e = r[t.main];return e && e[o];
	      }, t.parseClassType = s, e.registerWhenExtend) {
	        var a = t[C];
	        a && (t[C] = function (e) {
	          var i = a.call(this, e);return t.registerClass(i, e.type);
	        });
	      }return t;
	    }, r.setReadOnly = function () {}, r;
	  }), e("echarts/model/mixin/lineStyle", [K, "./makeStyleMapper"], function (t) {
	    var e = t("./makeStyleMapper")([["lineWidth", "width"], [d, "color"], [N], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);return { getLineStyle: function getLineStyle(t) {
	        var i = e.call(this, t),
	            n = this.getLineDash();return n && (i.lineDash = n), i;
	      }, getLineDash: function getLineDash() {
	        var t = this.get("type");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
	      } };
	  }), e("echarts/model/mixin/areaStyle", [K, "./makeStyleMapper"], function (t) {
	    return { getAreaStyle: t("./makeStyleMapper")([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], [N], ["shadowColor"]]) };
	  }), e("echarts/model/mixin/textStyle", [K, "zrender/contain/text"], function (t) {
	    function e(t, e) {
	      return t && t[u](e);
	    }var i = t("zrender/contain/text");return { getTextColor: function getTextColor() {
	        var t = this[o];return this[u]("color") || t && t.get("textStyle.color");
	      }, getFont: function getFont() {
	        var t = this[o],
	            i = t && t[Q]($);return [this[u]("fontStyle") || e(i, "fontStyle"), this[u]("fontWeight") || e(i, "fontWeight"), (this[u]("fontSize") || e(i, "fontSize") || 12) + "px", this[u]("fontFamily") || e(i, "fontFamily") || "sans-serif"].join(" ");
	      }, getTextRect: function getTextRect(t) {
	        var e = this.get($) || {};return i[Y](t, this[Z](), e.align, e.baseline);
	      }, truncateText: function truncateText(t, e, n, r) {
	        return i.truncateText(t, e, this[Z](), n, r);
	      } };
	  }), e("echarts/model/mixin/itemStyle", [K, "./makeStyleMapper"], function (t) {
	    var e = t("./makeStyleMapper")([["fill", "color"], [d, "borderColor"], ["lineWidth", "borderWidth"], [N], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);return { getItemStyle: function getItemStyle(t) {
	        var i = e.call(this, t),
	            n = this.getBorderLineDash();return n && (i.lineDash = n), i;
	      }, getBorderLineDash: function getBorderLineDash() {
	        var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
	      } };
	  }), e("zrender/contain/text", [K, "../core/util", "../core/BoundingRect"], function (t) {
	    function e(t, e) {
	      var i = t + ":" + e;if (o[i]) return o[i];for (var n = (t + "").split("\n"), r = 0, a = 0, c = n[S]; c > a; a++) {
	        r = Math.max(d.measureText(n[a], e).width, r);
	      }return s > l && (s = 0, o = {}), s++, o[i] = r, r;
	    }function i(t, i, n, r) {
	      var a = ((t || "") + "").split("\n")[S],
	          o = e(t, i),
	          s = e("å›½", i),
	          l = a * s,
	          c = new u(0, 0, o, l);switch (c.lineHeight = s, r) {case H:case "alphabetic":
	          c.y -= s;break;case q:
	          c.y -= s / 2;}switch (n) {case "end":case "right":
	          c.x -= c.width;break;case G:
	          c.x -= c.width / 2;}return c;
	    }function n(t, e, i, n) {
	      var r = e.x,
	          a = e.y,
	          o = e[X],
	          s = e.width,
	          l = i[X],
	          c = o / 2 - l / 2,
	          u = "left";switch (t) {case "left":
	          r -= n, a += c, u = "right";break;case "right":
	          r += n + s, a += c, u = "left";break;case "top":
	          r += s / 2, a -= n + l, u = G;break;case H:
	          r += s / 2, a += o + n, u = G;break;case "inside":
	          r += s / 2, a += c, u = G;break;case "insideLeft":
	          r += n, a += c, u = "left";break;case "insideRight":
	          r += s - n, a += c, u = "right";break;case "insideTop":
	          r += s / 2, a += n, u = G;break;case "insideBottom":
	          r += s / 2, a += o - l - n, u = G;break;case "insideTopLeft":
	          r += n, a += n, u = "left";break;case "insideTopRight":
	          r += s - n, a += n, u = "right";break;case "insideBottomLeft":
	          r += n, a += o - l - n;break;case "insideBottomRight":
	          r += s - n, a += o - l - n, u = "right";}return { x: r, y: a, textAlign: u, textBaseline: "top" };
	    }function r(t, i, n, r, o) {
	      if (!i) return "";o = o || {}, r = h(r, "...");for (var s = h(o.maxIterations, 2), l = h(o.minChar, 0), c = e("å›½", n), u = e("a", n), d = h(o.placeholder, ""), f = i = Math.max(0, i - 1), p = 0; l > p && f >= u; p++) {
	        f -= u;
	      }var v = e(r);v > f && (r = "", v = 0), f = i - v;for (var m = (t + "").split("\n"), p = 0, g = m[S]; g > p; p++) {
	        var y = m[p],
	            _ = e(y, n);if (!(i >= _)) {
	          for (var x = 0;; x++) {
	            if (f >= _ || x >= s) {
	              y += r;break;
	            }var b = 0 === x ? a(y, f, u, c) : _ > 0 ? Math.floor(y[S] * f / _) : 0;y = y.substr(0, b), _ = e(y, n);
	          }"" === y && (y = d), m[p] = y;
	        }
	      }return m.join("\n");
	    }function a(t, e, i, n) {
	      for (var r = 0, a = 0, o = t[S]; o > a && e > r; a++) {
	        var s = t.charCodeAt(a);r += s >= 0 && 127 >= s ? i : n;
	      }return a;
	    }var o = {},
	        s = 0,
	        l = 5e3,
	        c = t("../core/util"),
	        u = t("../core/BoundingRect"),
	        h = c.retrieve,
	        d = { getWidth: e, getBoundingRect: i, adjustTextPositionOnRect: n, truncateText: r, measureText: function measureText(t, e) {
	        var i = c.getContext();return i.font = e || "12px sans-serif", i.measureText(t);
	      } };return d;
	  }), e("zrender/core/BoundingRect", [K, "./vector", "./matrix"], function (t) {
	    function e(t, e, i, n) {
	      this.x = t, this.y = e, this.width = i, this[X] = n;
	    }var i = t("./vector"),
	        n = t("./matrix"),
	        r = i[f],
	        a = Math.min,
	        o = Math.abs,
	        s = Math.max;return e[O] = { constructor: e, union: function union(t) {
	        var e = a(t.x, this.x),
	            i = a(t.y, this.y);this.width = s(t.x + t.width, this.x + this.width) - e, this[X] = s(t.y + t[X], this.y + this[X]) - i, this.x = e, this.y = i;
	      }, applyTransform: function () {
	        var t = [],
	            e = [];return function (i) {
	          i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this[X], r(t, t, i), r(e, e, i), this.x = a(t[0], e[0]), this.y = a(t[1], e[1]), this.width = o(e[0] - t[0]), this[X] = o(e[1] - t[1]));
	        };
	      }(), calculateTransform: function calculateTransform(t) {
	        var e = this,
	            i = t.width / e.width,
	            r = t[X] / e[X],
	            a = n[z]();return n.translate(a, a, [-e.x, -e.y]), n.scale(a, a, [i, r]), n.translate(a, a, [t.x, t.y]), a;
	      }, intersect: function intersect(t) {
	        var e = this,
	            i = e.x,
	            n = e.x + e.width,
	            r = e.y,
	            a = e.y + e[X],
	            o = t.x,
	            s = t.x + t.width,
	            l = t.y,
	            c = t.y + t[X];return !(o > n || i > s || l > a || r > c);
	      }, contain: function contain(t, e) {
	        var i = this;return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i[X];
	      }, clone: function clone() {
	        return new e(this.x, this.y, this.width, this[X]);
	      }, copy: function copy(t) {
	        this.x = t.x, this.y = t.y, this.width = t.width, this[X] = t[X];
	      } }, e;
	  }), e("zrender/core/PathProxy", [K, "./curve", "./vector", "./bbox", "./BoundingRect", "../config"], function (t) {
	    var e = t("./curve"),
	        i = t("./vector"),
	        a = t("./bbox"),
	        o = t("./BoundingRect"),
	        s = t("../config").devicePixelRatio,
	        l = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
	        c = [],
	        u = [],
	        h = [],
	        f = [],
	        p = Math.min,
	        v = Math.max,
	        m = Math.cos,
	        g = Math.sin,
	        y = Math.sqrt,
	        _ = Math.abs,
	        x = (typeof Float32Array === "undefined" ? "undefined" : _typeof(Float32Array)) != n,
	        b = function b() {
	      this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._ux = 0, this._uy = 0;
	    };return b[O] = { constructor: b, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function setScale(t, e) {
	        this._ux = _(1 / s / t) || 0, this._uy = _(1 / s / e) || 0;
	      }, getContext: function getContext() {
	        return this._ctx;
	      }, beginPath: function beginPath(t) {
	        return this._ctx = t, t && t.beginPath(), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
	      }, moveTo: function moveTo(t, e) {
	        return this.addData(l.M, t, e), this._ctx && this._ctx[r](t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
	      }, lineTo: function lineTo(t, e) {
	        var i = _(t - this._xi) > this._ux || _(e - this._yi) > this._uy || this._len < 5;return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this;
	      }, bezierCurveTo: function bezierCurveTo(t, e, i, n, r, a) {
	        return this.addData(l.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this;
	      }, quadraticCurveTo: function quadraticCurveTo(t, e, i, n) {
	        return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this;
	      }, arc: function arc(t, e, i, n, r, a) {
	        return this.addData(l.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = m(r) * i + t, this._xi = g(r) * i + t, this;
	      }, arcTo: function arcTo(t, e, i, n, r) {
	        return this._ctx && this._ctx.arcTo(t, e, i, n, r), this;
	      }, rect: function rect(t, e, i, n) {
	        return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this;
	      }, closePath: function closePath() {
	        this.addData(l.Z);var t = this._ctx,
	            e = this._x0,
	            i = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this;
	      }, fill: function fill(t) {
	        t && t.fill(), this.toStatic();
	      }, stroke: function stroke(t) {
	        t && t[d](), this.toStatic();
	      }, setLineDash: function setLineDash(t) {
	        if (t instanceof Array) {
	          this._lineDash = t, this._dashIdx = 0;for (var e = 0, i = 0; i < t[S]; i++) {
	            e += t[i];
	          }this._dashSum = e;
	        }return this;
	      }, setLineDashOffset: function setLineDashOffset(t) {
	        return this._dashOffset = t, this;
	      }, len: function len() {
	        return this._len;
	      }, setData: function setData(t) {
	        var e = t[S];this.data && this.data[S] == e || !x || (this.data = new Float32Array(e));for (var i = 0; e > i; i++) {
	          this.data[i] = t[i];
	        }this._len = e;
	      }, appendPath: function appendPath(t) {
	        t instanceof Array || (t = [t]);for (var e = t[S], i = 0, n = this._len, r = 0; e > r; r++) {
	          i += t[r].len();
	        }x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));for (var r = 0; e > r; r++) {
	          for (var a = t[r].data, o = 0; o < a[S]; o++) {
	            this.data[n++] = a[o];
	          }
	        }this._len = n;
	      }, addData: function addData(t) {
	        var e = this.data;this._len + arguments[S] > e[S] && (this._expandData(), e = this.data);for (var i = 0; i < arguments[S]; i++) {
	          e[this._len++] = arguments[i];
	        }this._prevCmd = t;
	      }, _expandData: function _expandData() {
	        if (!(this.data instanceof Array)) {
	          for (var t = [], e = 0; e < this._len; e++) {
	            t[e] = this.data[e];
	          }this.data = t;
	        }
	      }, _needsDash: function _needsDash() {
	        return this._lineDash;
	      }, _dashedLineTo: function _dashedLineTo(t, e) {
	        var i,
	            n,
	            a = this._dashSum,
	            o = this._dashOffset,
	            s = this._lineDash,
	            l = this._ctx,
	            c = this._xi,
	            u = this._yi,
	            h = t - c,
	            d = e - u,
	            f = y(h * h + d * d),
	            m = c,
	            g = u,
	            _ = s[S];for (h /= f, d /= f, 0 > o && (o = a + o), o %= a, m -= o * h, g -= o * d; h > 0 && t >= m || 0 > h && m >= t || 0 == h && (d > 0 && e >= g || 0 > d && g >= e);) {
	          n = this._dashIdx, i = s[n], m += h * i, g += d * i, this._dashIdx = (n + 1) % _, h > 0 && c > m || 0 > h && m > c || d > 0 && u > g || 0 > d && g > u || l[n % 2 ? r : "lineTo"](h >= 0 ? p(m, t) : v(m, t), d >= 0 ? p(g, e) : v(g, e));
	        }h = m - t, d = g - e, this._dashOffset = -y(h * h + d * d);
	      }, _dashedBezierTo: function _dashedBezierTo(t, i, n, a, o, s) {
	        var l,
	            c,
	            u,
	            h,
	            d,
	            f = this._dashSum,
	            p = this._dashOffset,
	            v = this._lineDash,
	            m = this._ctx,
	            g = this._xi,
	            _ = this._yi,
	            x = e.cubicAt,
	            b = 0,
	            w = this._dashIdx,
	            T = v[S],
	            M = 0;for (0 > p && (p = f + p), p %= f, l = 0; 1 > l; l += .1) {
	          c = x(g, t, n, o, l + .1) - x(g, t, n, o, l), u = x(_, i, a, s, l + .1) - x(_, i, a, s, l), b += y(c * c + u * u);
	        }for (; T > w && (M += v[w], !(M > p)); w++) {}for (l = (M - p) / b; 1 >= l;) {
	          h = x(g, t, n, o, l), d = x(_, i, a, s, l), w % 2 ? m[r](h, d) : m.lineTo(h, d), l += v[w] / b, w = (w + 1) % T;
	        }w % 2 !== 0 && m.lineTo(o, s), c = o - h, u = s - d, this._dashOffset = -y(c * c + u * u);
	      }, _dashedQuadraticTo: function _dashedQuadraticTo(t, e, i, n) {
	        var r = i,
	            a = n;i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a);
	      }, toStatic: function toStatic() {
	        var t = this.data;t instanceof Array && (t[S] = this._len, x && (this.data = new Float32Array(t)));
	      }, getBoundingRect: function getBoundingRect() {
	        c[0] = c[1] = h[0] = h[1] = Number.MAX_VALUE, u[0] = u[1] = f[0] = f[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, r = 0, s = 0, d = 0; d < t[S];) {
	          var p = t[d++];switch (1 == d && (e = t[d], n = t[d + 1], r = e, s = n), p) {case l.M:
	              r = t[d++], s = t[d++], e = r, n = s, h[0] = r, h[1] = s, f[0] = r, f[1] = s;break;case l.L:
	              a.fromLine(e, n, t[d], t[d + 1], h, f), e = t[d++], n = t[d++];break;case l.C:
	              a.fromCubic(e, n, t[d++], t[d++], t[d++], t[d++], t[d], t[d + 1], h, f), e = t[d++], n = t[d++];break;case l.Q:
	              a.fromQuadratic(e, n, t[d++], t[d++], t[d], t[d + 1], h, f), e = t[d++], n = t[d++];break;case l.A:
	              var v = t[d++],
	                  y = t[d++],
	                  _ = t[d++],
	                  x = t[d++],
	                  b = t[d++],
	                  w = t[d++] + b,
	                  T = (t[d++], 1 - t[d++]);1 == d && (r = m(b) * _ + v, s = g(b) * x + y), a.fromArc(v, y, _, x, b, w, T, h, f), e = m(w) * _ + v, n = g(w) * x + y;break;case l.R:
	              r = e = t[d++], s = n = t[d++];var M = t[d++],
	                  A = t[d++];a.fromLine(r, s, r + M, s + A, h, f);break;case l.Z:
	              e = r, n = s;}i.min(c, c, h), i.max(u, u, f);
	        }return 0 === d && (c[0] = c[1] = u[0] = u[1] = 0), new o(c[0], c[1], u[0] - c[0], u[1] - c[1]);
	      }, rebuildPath: function rebuildPath(t) {
	        for (var e, i, n, a, o, s, c = this.data, u = this._ux, h = this._uy, d = this._len, f = 0; d > f;) {
	          var p = c[f++];switch (1 == f && (n = c[f], a = c[f + 1], e = n, i = a), p) {case l.M:
	              e = n = c[f++], i = a = c[f++], t[r](n, a);break;case l.L:
	              o = c[f++], s = c[f++], (_(o - n) > u || _(s - a) > h || f === d - 1) && (t.lineTo(o, s), n = o, a = s);break;case l.C:
	              t.bezierCurveTo(c[f++], c[f++], c[f++], c[f++], c[f++], c[f++]), n = c[f - 2], a = c[f - 1];break;case l.Q:
	              t.quadraticCurveTo(c[f++], c[f++], c[f++], c[f++]), n = c[f - 2], a = c[f - 1];break;case l.A:
	              var v = c[f++],
	                  y = c[f++],
	                  x = c[f++],
	                  b = c[f++],
	                  w = c[f++],
	                  T = c[f++],
	                  M = c[f++],
	                  S = c[f++],
	                  A = x > b ? x : b,
	                  C = x > b ? 1 : x / b,
	                  P = x > b ? b / x : 1,
	                  L = Math.abs(x - b) > .001,
	                  z = w + T;L ? (t.translate(v, y), t.rotate(M), t.scale(C, P), t.arc(0, 0, A, w, z, 1 - S), t.scale(1 / C, 1 / P), t.rotate(-M), t.translate(-v, -y)) : t.arc(v, y, A, w, z, 1 - S), 1 == f && (e = m(w) * x + v, i = g(w) * b + y), n = m(z) * x + v, a = g(z) * b + y;break;case l.R:
	              e = n = c[f], i = a = c[f + 1], t.rect(c[f++], c[f++], c[f++], c[f++]);break;case l.Z:
	              t.closePath(), n = e, a = i;}
	        }
	      } }, b.CMD = l, b;
	  }), e("zrender/graphic/mixin/RectText", [K, "../../contain/text", "../../core/BoundingRect"], function (t) {
	    function e(t, e) {
	      return (typeof t === "undefined" ? "undefined" : _typeof(t)) === E ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
	    }var i = t("../../contain/text"),
	        n = t("../../core/BoundingRect"),
	        r = new n(),
	        o = function o() {};return o[O] = { constructor: o, drawRectText: function drawRectText(t, n, o) {
	        var s = this.style,
	            l = s.text;if (null != l && (l += ""), l) {
	          t.save();var c,
	              u,
	              h = s.textPosition,
	              d = s.textDistance,
	              p = s.textAlign,
	              v = s.textFont || s.font,
	              m = s.textBaseline,
	              g = s.textVerticalAlign;o = o || i[Y](l, v, p, m);var y = this[a];if (y && (r.copy(n), r[f](y), n = r), h instanceof Array) {
	            if (c = n.x + e(h[0], n.width), u = n.y + e(h[1], n[X]), p = p || "left", m = m || "top", g) {
	              switch (g) {case q:
	                  u -= o[X] / 2 - o.lineHeight / 2;break;case H:
	                  u -= o[X] - o.lineHeight / 2;break;default:
	                  u += o.lineHeight / 2;}m = q;
	            }
	          } else {
	            var _ = i.adjustTextPositionOnRect(h, n, o, d);c = _.x, u = _.y, p = p || _.textAlign, m = m || _.textBaseline;
	          }t.textAlign = p || "left", t.textBaseline = m || "alphabetic";var x = s.textFill,
	              b = s.textStroke;x && (t.fillStyle = x), b && (t.strokeStyle = b), t.font = v, t.shadowBlur = s.textShadowBlur, t.shadowColor = s.textShadowColor || "transparent", t.shadowOffsetX = s.textShadowOffsetX, t.shadowOffsetY = s.textShadowOffsetY;for (var w = l.split("\n"), T = 0; T < w[S]; T++) {
	            x && t.fillText(w[T], c, u), b && t.strokeText(w[T], c, u), u += o.lineHeight;
	          }t.restore();
	        }
	      } }, o;
	  }), e("zrender/graphic/Displayable", [K, "../core/util", "./Style", "../Element", "./mixin/RectText"], function (t) {
	    function e(t) {
	      t = t || {}, a.call(this, t);for (var e in t) {
	        t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
	      }this.style = new r(t.style), this._rect = null, this.__clipPaths = [];
	    }var n = t("../core/util"),
	        r = t("./Style"),
	        a = t("../Element"),
	        o = t("./mixin/RectText");return e[O] = { constructor: e, type: "displayable", __dirty: !0, invisible: !1, z: 0, z2: 0, zlevel: 0, draggable: !1, dragging: !1, silent: !1, culling: !1, cursor: "pointer", rectHover: !1, progressive: -1, beforeBrush: function beforeBrush() {}, afterBrush: function afterBrush() {}, brush: function brush() {}, getBoundingRect: function getBoundingRect() {}, contain: function contain(t, e) {
	        return this.rectContain(t, e);
	      }, traverse: function traverse(t, e) {
	        t.call(e, this);
	      }, rectContain: function rectContain(t, e) {
	        var i = this.transformCoordToLocal(t, e),
	            n = this[Y]();return n[m](i[0], i[1]);
	      }, dirty: function dirty() {
	        this[i] = !0, this._rect = null, this.__zr && this.__zr.refresh();
	      }, animateStyle: function animateStyle(t) {
	        return this.animate("style", t);
	      }, attrKV: function attrKV(t, e) {
	        "style" !== t ? a[O].attrKV.call(this, t, e) : this.style.set(e);
	      }, setStyle: function setStyle(t, e) {
	        return this.style.set(t, e), this.dirty(!1), this;
	      }, useStyle: function useStyle(t) {
	        return this.style = new r(t), this.dirty(!1), this;
	      } }, n[g](e, a), n.mixin(e, o), e;
	  }), e("zrender/graphic/Image", [K, "./Displayable", "../core/BoundingRect", "../core/util", "../core/LRU"], function (t) {
	    function e(t) {
	      i.call(this, t);
	    }var i = t("./Displayable"),
	        n = t("../core/BoundingRect"),
	        r = t("../core/util"),
	        a = t("../core/LRU"),
	        o = new a(50);return e[O] = { constructor: e, type: "image", brush: function brush(t, e) {
	        var i,
	            n = this.style,
	            r = n.image;if (n.bind(t, this, e), i = (typeof r === "undefined" ? "undefined" : _typeof(r)) === E ? this._image : r, !i && r) {
	          var a = o.get(r);if (!a) return i = new Image(), i.onload = function () {
	            i.onload = null;for (var t = 0; t < a.pending[S]; t++) {
	              a.pending[t].dirty();
	            }
	          }, a = { image: i, pending: [this] }, i.src = r, o.put(r, a), void (this._image = i);if (i = a.image, this._image = i, !i.width || !i[X]) return void a.pending.push(this);
	        }if (i) {
	          var s = n.width || i.width,
	              l = n[X] || i[X],
	              c = n.x || 0,
	              u = n.y || 0;if (!i.width || !i[X]) return;if (this.setTransform(t), n.sWidth && n.sHeight) {
	            var h = n.sx || 0,
	                d = n.sy || 0;t.drawImage(i, h, d, n.sWidth, n.sHeight, c, u, s, l);
	          } else if (n.sx && n.sy) {
	            var h = n.sx,
	                d = n.sy,
	                f = s - h,
	                p = l - d;t.drawImage(i, h, d, f, p, c, u, s, l);
	          } else t.drawImage(i, c, u, s, l);null == n.width && (n.width = s), null == n[X] && (n[X] = l), this.restoreTransform(t), null != n.text && this.drawRectText(t, this[Y]());
	        }
	      }, getBoundingRect: function getBoundingRect() {
	        var t = this.style;return this._rect || (this._rect = new n(t.x || 0, t.y || 0, t.width || 0, t[X] || 0)), this._rect;
	      } }, r[g](e, i), e;
	  }), e("zrender/graphic/Text", [K, "./Displayable", "../core/util", "../contain/text"], function (t) {
	    var e = t("./Displayable"),
	        i = t("../core/util"),
	        n = t("../contain/text"),
	        r = function r(t) {
	      e.call(this, t);
	    };return r[O] = { constructor: r, type: "text", brush: function brush(t, e) {
	        var i = this.style,
	            r = i.x || 0,
	            a = i.y || 0,
	            o = i.text;if (null != o && (o += ""), i.bind(t, this, e), o) {
	          this.setTransform(t);var s,
	              l = i.textAlign,
	              c = i.textFont || i.font;if (i.textVerticalAlign) {
	            var u = n[Y](o, c, i.textAlign, "top");switch (s = q, i.textVerticalAlign) {case q:
	                a -= u[X] / 2 - u.lineHeight / 2;break;case H:
	                a -= u[X] - u.lineHeight / 2;break;default:
	                a += u.lineHeight / 2;}
	          } else s = i.textBaseline;t.font = c, t.textAlign = l || "left", t.textAlign !== l && (t.textAlign = "left"), t.textBaseline = s || "alphabetic", t.textBaseline !== s && (t.textBaseline = "alphabetic");for (var h = n.measureText("å›½", t.font).width, d = o.split("\n"), f = 0; f < d[S]; f++) {
	            i.hasFill() && t.fillText(d[f], r, a), i.hasStroke() && t.strokeText(d[f], r, a), a += h;
	          }this.restoreTransform(t);
	        }
	      }, getBoundingRect: function getBoundingRect() {
	        if (!this._rect) {
	          var t = this.style,
	              e = t.textVerticalAlign,
	              i = n[Y](t.text + "", t.textFont || t.font, t.textAlign, e ? "top" : t.textBaseline);switch (e) {case q:
	              i.y -= i[X] / 2;break;case H:
	              i.y -= i[X];}i.x += t.x || 0, i.y += t.y || 0, this._rect = i;
	        }return this._rect;
	      } }, i[g](r, e), r;
	  }), e("zrender/graphic/Path", [K, "./Displayable", "../core/util", "../core/PathProxy", "../contain/path", "./Pattern"], function (t) {
	    function e(t) {
	      n.call(this, t), this.path = new o();
	    }var n = t("./Displayable"),
	        r = t("../core/util"),
	        o = t("../core/PathProxy"),
	        s = t("../contain/path"),
	        l = t("./Pattern"),
	        c = l[O].getCanvasPattern,
	        u = Math.abs;return e[O] = { constructor: e, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function brush(t, e) {
	        var n = this.style,
	            r = this.path,
	            a = n.hasStroke(),
	            o = n.hasFill(),
	            s = n.fill,
	            l = n[d],
	            u = o && !!s.colorStops,
	            h = a && !!l.colorStops,
	            f = o && !!s.image,
	            p = a && !!l.image;if (n.bind(t, this, e), this.setTransform(t), this[i]) {
	          var v = this[Y]();u && (this._fillGradient = n.getGradient(t, s, v)), h && (this._strokeGradient = n.getGradient(t, l, v));
	        }u ? t.fillStyle = this._fillGradient : f && (t.fillStyle = c.call(s, t)), h ? t.strokeStyle = this._strokeGradient : p && (t.strokeStyle = c.call(l, t));var m = n.lineDash,
	            g = n.lineDashOffset,
	            y = !!t.setLineDash,
	            _ = this.getGlobalScale();r.setScale(_[0], _[1]), this.__dirtyPath || m && !y && a ? (r = this.path.beginPath(t), m && !y && (r.setLineDash(m), r.setLineDashOffset(g)), this.buildPath(r, this.shape, !1), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), o && r.fill(t), m && y && (t.setLineDash(m), t.lineDashOffset = g), a && r[d](t), m && y && t.setLineDash([]), this.restoreTransform(t), (n.text || 0 === n.text) && this.drawRectText(t, this[Y]());
	      }, buildPath: function buildPath() {}, getBoundingRect: function getBoundingRect() {
	        var t = this._rect,
	            e = this.style,
	            n = !t;if (n) {
	          var r = this.path;this.__dirtyPath && (r.beginPath(), this.buildPath(r, this.shape, !1)), t = r[Y]();
	        }if (this._rect = t, e.hasStroke()) {
	          var a = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this[i] || n) {
	            a.copy(t);var o = e.lineWidth,
	                s = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), s > 1e-10 && (a.width += o / s, a[X] += o / s, a.x -= o / s / 2, a.y -= o / s / 2);
	          }return a;
	        }return t;
	      }, contain: function contain(t, e) {
	        var i = this.transformCoordToLocal(t, e),
	            n = this[Y](),
	            r = this.style;if (t = i[0], e = i[1], n[m](t, e)) {
	          var a = this.path.data;if (r.hasStroke()) {
	            var o = r.lineWidth,
	                l = r.strokeNoScale ? this.getLineScale() : 1;if (l > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), s.containStroke(a, o / l, t, e))) return !0;
	          }if (r.hasFill()) return s[m](a, t, e);
	        }return !1;
	      }, dirty: function dirty(t) {
	        null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this[i] = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
	      }, animateShape: function animateShape(t) {
	        return this.animate("shape", t);
	      }, attrKV: function attrKV(t, e) {
	        "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : n[O].attrKV.call(this, t, e);
	      }, setShape: function setShape(t, e) {
	        var i = this.shape;if (i) {
	          if (r[P](t)) for (var n in t) {
	            i[n] = t[n];
	          } else i[t] = e;this.dirty(!0);
	        }return this;
	      }, getLineScale: function getLineScale() {
	        var t = this[a];return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1;
	      } }, e[C] = function (t) {
	      var i = function i(_i) {
	        e.call(this, _i), t.style && this.style.extendFrom(t.style, !1);var n = t.shape;if (n) {
	          this.shape = this.shape || {};var r = this.shape;for (var a in n) {
	            !r.hasOwnProperty(a) && n.hasOwnProperty(a) && (r[a] = n[a]);
	          }
	        }t.init && t.init.call(this, _i);
	      };r[g](i, e);for (var n in t) {
	        "style" !== n && "shape" !== n && (i[O][n] = t[n]);
	      }return i;
	    }, r[g](e, n), e;
	  }), e("zrender/graphic/Gradient", [K], function () {
	    var t = function t(_t) {
	      this.colorStops = _t || [];
	    };return t[O] = { constructor: t, addColorStop: function addColorStop(t, e) {
	        this.colorStops.push({ offset: t, color: e });
	      } }, t;
	  }), e("zrender/vml/core", [K, "exports", "module", "../core/env"], function (t, e, i) {
	    if (!t("../core/env")[D]) {
	      var n,
	          r = "urn:schemas-microsoft-com:vml",
	          a = window,
	          o = a.document,
	          s = !1;try {
	        !o.namespaces.zrvml && o.namespaces.add("zrvml", r), n = function n(t) {
	          return o[c]("<zrvml:" + t + ' class="zrvml">');
	        };
	      } catch (l) {
	        n = function n(t) {
	          return o[c]("<" + t + ' xmlns="' + r + '" class="zrvml">');
	        };
	      }var u = function u() {
	        if (!s) {
	          s = !0;var t = o.styleSheets;t[S] < 31 ? o.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)");
	        }
	      };i.exports = { doc: o, initVML: u, createNode: n };
	    }
	  }), e("echarts/coord/polar/RadiusAxis", [K, F, "../Axis"], function (t) {
	    function e(t, e) {
	      n.call(this, l, t, e), this.type = s;
	    }var i = t(F),
	        n = t("../Axis");return e[O] = { constructor: e, dataToRadius: n[O].dataToCoord, radiusToData: n[O].coordToData }, i[g](e, n), e;
	  }), e("echarts/coord/polar/AngleAxis", [K, F, "../Axis"], function (t) {
	    function e(t, e) {
	      e = e || [0, 360], n.call(this, "angle", t, e), this.type = s;
	    }var i = t(F),
	        n = t("../Axis");return e[O] = { constructor: e, dataToAngle: n[O].dataToCoord, angleToData: n[O].coordToData }, i[g](e, n), e;
	  }), e("echarts/model/mixin/makeStyleMapper", [K, F], function (t) {
	    var e = t(F);return function (t) {
	      for (var i = 0; i < t[S]; i++) {
	        t[i][1] || (t[i][1] = t[i][0]);
	      }return function (i) {
	        for (var n = {}, r = 0; r < t[S]; r++) {
	          var a = t[r][1];if (!(i && e[y](i, a) >= 0)) {
	            var o = this[u](a);null != o && (n[t[r][0]] = o);
	          }
	        }return n;
	      };
	    };
	  }), e("zrender/core/bbox", [K, "./vector", "./curve"], function (t) {
	    var e = t("./vector"),
	        i = t("./curve"),
	        n = {},
	        r = Math.min,
	        a = Math.max,
	        o = Math.sin,
	        s = Math.cos,
	        l = e[z](),
	        c = e[z](),
	        u = e[z](),
	        h = 2 * Math.PI;n.fromPoints = function (t, e, i) {
	      if (0 !== t[S]) {
	        var n,
	            o = t[0],
	            s = o[0],
	            l = o[0],
	            c = o[1],
	            u = o[1];for (n = 1; n < t[S]; n++) {
	          o = t[n], s = r(s, o[0]), l = a(l, o[0]), c = r(c, o[1]), u = a(u, o[1]);
	        }e[0] = s, e[1] = c, i[0] = l, i[1] = u;
	      }
	    }, n.fromLine = function (t, e, i, n, o, s) {
	      o[0] = r(t, i), o[1] = r(e, n), s[0] = a(t, i), s[1] = a(e, n);
	    };var d = [],
	        f = [];return n.fromCubic = function (t, e, n, o, s, l, c, u, h, p) {
	      var v,
	          m = i.cubicExtrema,
	          g = i.cubicAt,
	          y = m(t, n, s, c, d);for (h[0] = 1 / 0, h[1] = 1 / 0, p[0] = -1 / 0, p[1] = -1 / 0, v = 0; y > v; v++) {
	        var _ = g(t, n, s, c, d[v]);h[0] = r(_, h[0]), p[0] = a(_, p[0]);
	      }for (y = m(e, o, l, u, f), v = 0; y > v; v++) {
	        var x = g(e, o, l, u, f[v]);h[1] = r(x, h[1]), p[1] = a(x, p[1]);
	      }h[0] = r(t, h[0]), p[0] = a(t, p[0]), h[0] = r(c, h[0]), p[0] = a(c, p[0]), h[1] = r(e, h[1]), p[1] = a(e, p[1]), h[1] = r(u, h[1]), p[1] = a(u, p[1]);
	    }, n.fromQuadratic = function (t, e, n, o, s, l, c, u) {
	      var h = i.quadraticExtremum,
	          d = i.quadraticAt,
	          f = a(r(h(t, n, s), 1), 0),
	          p = a(r(h(e, o, l), 1), 0),
	          v = d(t, n, s, f),
	          m = d(e, o, l, p);c[0] = r(t, s, v), c[1] = r(e, l, m), u[0] = a(t, s, v), u[1] = a(e, l, m);
	    }, n.fromArc = function (t, i, n, r, a, d, f, p, v) {
	      var m = e.min,
	          g = e.max,
	          y = Math.abs(a - d);if (1e-4 > y % h && y > 1e-4) return p[0] = t - n, p[1] = i - r, v[0] = t + n, void (v[1] = i + r);if (l[0] = s(a) * n + t, l[1] = o(a) * r + i, c[0] = s(d) * n + t, c[1] = o(d) * r + i, m(p, l, c), g(v, l, c), a %= h, 0 > a && (a += h), d %= h, 0 > d && (d += h), a > d && !f ? d += h : d > a && f && (a += h), f) {
	        var _ = d;d = a, a = _;
	      }for (var x = 0; d > x; x += Math.PI / 2) {
	        x > a && (u[0] = s(x) * n + t, u[1] = o(x) * r + i, m(p, u, p), g(v, u, v));
	      }
	    }, n;
	  }), e("zrender/core/curve", [K, "./vector"], function (t) {
	    function e(t) {
	      return t > -x && x > t;
	    }function i(t) {
	      return t > x || -x > t;
	    }function n(t, e, i, n, r) {
	      var a = 1 - r;return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i);
	    }function r(t, e, i, n, r) {
	      var a = 1 - r;return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r);
	    }function a(t, i, n, r, a, o) {
	      var s = r + 3 * (i - n) - t,
	          l = 3 * (n - 2 * i + t),
	          c = 3 * (i - t),
	          u = t - a,
	          h = l * l - 3 * s * c,
	          d = l * c - 9 * s * u,
	          f = c * c - 3 * l * u,
	          p = 0;if (e(h) && e(d)) {
	        if (e(l)) o[0] = 0;else {
	          var v = -c / l;v >= 0 && 1 >= v && (o[p++] = v);
	        }
	      } else {
	        var m = d * d - 4 * h * f;if (e(m)) {
	          var g = d / h,
	              v = -l / s + g,
	              x = -g / 2;v >= 0 && 1 >= v && (o[p++] = v), x >= 0 && 1 >= x && (o[p++] = x);
	        } else if (m > 0) {
	          var b = _(m),
	              M = h * l + 1.5 * s * (-d + b),
	              S = h * l + 1.5 * s * (-d - b);M = 0 > M ? -y(-M, T) : y(M, T), S = 0 > S ? -y(-S, T) : y(S, T);var v = (-l - (M + S)) / (3 * s);v >= 0 && 1 >= v && (o[p++] = v);
	        } else {
	          var A = (2 * h * l - 3 * s * d) / (2 * _(h * h * h)),
	              C = Math.acos(A) / 3,
	              P = _(h),
	              L = Math.cos(C),
	              v = (-l - 2 * P * L) / (3 * s),
	              x = (-l + P * (L + w * Math.sin(C))) / (3 * s),
	              z = (-l + P * (L - w * Math.sin(C))) / (3 * s);v >= 0 && 1 >= v && (o[p++] = v), x >= 0 && 1 >= x && (o[p++] = x), z >= 0 && 1 >= z && (o[p++] = z);
	        }
	      }return p;
	    }function o(t, n, r, a, o) {
	      var s = 6 * r - 12 * n + 6 * t,
	          l = 9 * n + 3 * a - 3 * t - 9 * r,
	          c = 3 * n - 3 * t,
	          u = 0;if (e(l)) {
	        if (i(s)) {
	          var h = -c / s;h >= 0 && 1 >= h && (o[u++] = h);
	        }
	      } else {
	        var d = s * s - 4 * l * c;if (e(d)) o[0] = -s / (2 * l);else if (d > 0) {
	          var f = _(d),
	              h = (-s + f) / (2 * l),
	              p = (-s - f) / (2 * l);h >= 0 && 1 >= h && (o[u++] = h), p >= 0 && 1 >= p && (o[u++] = p);
	        }
	      }return u;
	    }function s(t, e, i, n, r, a) {
	      var o = (e - t) * r + t,
	          s = (i - e) * r + e,
	          l = (n - i) * r + i,
	          c = (s - o) * r + o,
	          u = (l - s) * r + s,
	          h = (u - c) * r + c;a[0] = t, a[1] = o, a[2] = c, a[3] = h, a[4] = h, a[5] = u, a[6] = l, a[7] = n;
	    }function l(t, e, i, r, a, o, s, l, c, u, h) {
	      var d,
	          f,
	          p,
	          v,
	          m,
	          y = .005,
	          x = 1 / 0;M[0] = c, M[1] = u;for (var w = 0; 1 > w; w += .05) {
	        S[0] = n(t, i, a, s, w), S[1] = n(e, r, o, l, w), v = g(M, S), x > v && (d = w, x = v);
	      }x = 1 / 0;for (var T = 0; 32 > T && !(b > y); T++) {
	        f = d - y, p = d + y, S[0] = n(t, i, a, s, f), S[1] = n(e, r, o, l, f), v = g(S, M), f >= 0 && x > v ? (d = f, x = v) : (A[0] = n(t, i, a, s, p), A[1] = n(e, r, o, l, p), m = g(A, M), 1 >= p && x > m ? (d = p, x = m) : y *= .5);
	      }return h && (h[0] = n(t, i, a, s, d), h[1] = n(e, r, o, l, d)), _(x);
	    }function c(t, e, i, n) {
	      var r = 1 - n;return r * (r * t + 2 * n * e) + n * n * i;
	    }function u(t, e, i, n) {
	      return 2 * ((1 - n) * (e - t) + n * (i - e));
	    }function h(t, n, r, a, o) {
	      var s = t - 2 * n + r,
	          l = 2 * (n - t),
	          c = t - a,
	          u = 0;if (e(s)) {
	        if (i(l)) {
	          var h = -c / l;h >= 0 && 1 >= h && (o[u++] = h);
	        }
	      } else {
	        var d = l * l - 4 * s * c;if (e(d)) {
	          var h = -l / (2 * s);h >= 0 && 1 >= h && (o[u++] = h);
	        } else if (d > 0) {
	          var f = _(d),
	              h = (-l + f) / (2 * s),
	              p = (-l - f) / (2 * s);h >= 0 && 1 >= h && (o[u++] = h), p >= 0 && 1 >= p && (o[u++] = p);
	        }
	      }return u;
	    }function d(t, e, i) {
	      var n = t + i - 2 * e;return 0 === n ? .5 : (t - e) / n;
	    }function f(t, e, i, n, r) {
	      var a = (e - t) * n + t,
	          o = (i - e) * n + e,
	          s = (o - a) * n + a;r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i;
	    }function p(t, e, i, n, r, a, o, s, l) {
	      var u,
	          h = .005,
	          d = 1 / 0;M[0] = o, M[1] = s;for (var f = 0; 1 > f; f += .05) {
	        S[0] = c(t, i, r, f), S[1] = c(e, n, a, f);var p = g(M, S);d > p && (u = f, d = p);
	      }d = 1 / 0;for (var v = 0; 32 > v && !(b > h); v++) {
	        var m = u - h,
	            y = u + h;S[0] = c(t, i, r, m), S[1] = c(e, n, a, m);var p = g(S, M);if (m >= 0 && d > p) u = m, d = p;else {
	          A[0] = c(t, i, r, y), A[1] = c(e, n, a, y);var x = g(A, M);1 >= y && d > x ? (u = y, d = x) : h *= .5;
	        }
	      }return l && (l[0] = c(t, i, r, u), l[1] = c(e, n, a, u)), _(d);
	    }var v = t("./vector"),
	        m = v[z],
	        g = v.distSquare,
	        y = Math.pow,
	        _ = Math.sqrt,
	        x = 1e-8,
	        b = 1e-4,
	        w = _(3),
	        T = 1 / 3,
	        M = m(),
	        S = m(),
	        A = m();return { cubicAt: n, cubicDerivativeAt: r, cubicRootAt: a, cubicExtrema: o, cubicSubdivide: s, cubicProjectPoint: l, quadraticAt: c, quadraticDerivativeAt: u, quadraticRootAt: h, quadraticExtremum: d, quadraticSubdivide: f, quadraticProjectPoint: p };
	  }), e("zrender/config", [], function () {
	    var t = 1;(typeof window === "undefined" ? "undefined" : _typeof(window)) !== n && (t = Math.max(window.devicePixelRatio || 1, 1));var e = { debugMode: 0, devicePixelRatio: t };return e;
	  }), e("echarts/coord/Axis", [K, "../util/number", F], function (t) {
	    function e(t, e) {
	      var i = t[1] - t[0],
	          n = e,
	          r = i / n / 2;t[0] += r, t[1] -= r;
	    }var i = t("../util/number"),
	        n = i.linearMap,
	        r = t(F),
	        a = [0, 1],
	        o = function o(t, e, i) {
	      this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1;
	    };return o[O] = { constructor: o, contain: function contain(t) {
	        var e = this._extent,
	            i = Math.min(e[0], e[1]),
	            n = Math.max(e[0], e[1]);return t >= i && n >= t;
	      }, containData: function containData(t) {
	        return this[m](this.dataToCoord(t));
	      }, getExtent: function getExtent() {
	        var t = this._extent.slice();return t;
	      }, getPixelPrecision: function getPixelPrecision(t) {
	        return i.getPixelPrecision(t || this.scale[p](), this._extent);
	      }, setExtent: function setExtent(t, e) {
	        var i = this._extent;i[0] = t, i[1] = e;
	      }, dataToCoord: function dataToCoord(t, i) {
	        var r = this._extent,
	            o = this.scale;return t = o.normalize(t), this.onBand && "ordinal" === o.type && (r = r.slice(), e(r, o.count())), n(t, a, r, i);
	      }, coordToData: function coordToData(t, i) {
	        var r = this._extent,
	            o = this.scale;this.onBand && "ordinal" === o.type && (r = r.slice(), e(r, o.count()));var s = n(t, r, a, i);return this.scale.scale(s);
	      }, getTicksCoords: function getTicksCoords(t) {
	        if (this.onBand && !t) {
	          for (var e = this.getBands(), i = [], n = 0; n < e[S]; n++) {
	            i.push(e[n][0]);
	          }return e[n - 1] && i.push(e[n - 1][1]), i;
	        }return r.map(this.scale[v](), this.dataToCoord, this);
	      }, getLabelsCoords: function getLabelsCoords() {
	        return r.map(this.scale[v](), this.dataToCoord, this);
	      }, getBands: function getBands() {
	        for (var t = this[p](), e = [], i = this.scale.count(), n = t[0], r = t[1], a = r - n, o = 0; i > o; o++) {
	          e.push([a * o / i + n, a * (o + 1) / i + n]);
	        }return e;
	      }, getBandWidth: function getBandWidth() {
	        var t = this._extent,
	            e = this.scale[p](),
	            i = e[1] - e[0] + (this.onBand ? 1 : 0);0 === i && (i = 1);var n = Math.abs(t[1] - t[0]);return Math.abs(n) / i;
	      } }, o;
	  }), e("echarts/util/component", [K, F, "./clazz"], function (t) {
	    var e = t(F),
	        i = t("./clazz"),
	        n = i.parseClassType,
	        r = 0,
	        a = {},
	        o = "_";return a.getUID = function (t) {
	      return [t || "", r++, Math.random()].join(o);
	    }, a.enableSubTypeDefaulter = function (t) {
	      var e = {};return t.registerSubTypeDefaulter = function (t, i) {
	        t = n(t), e[t.main] = i;
	      }, t.determineSubType = function (i, r) {
	        var a = r.type;if (!a) {
	          var o = n(i).main;t.hasSubTypes(i) && e[o] && (a = e[o](r));
	        }return a;
	      }, t;
	    }, a.enableTopologicalTravel = function (t, i) {
	      function n(t) {
	        var n = {},
	            o = [];return e.each(t, function (s) {
	          var l = r(n, s),
	              c = l.originalDeps = i(s),
	              u = a(c, t);l.entryCount = u[S], 0 === l.entryCount && o.push(s), e.each(u, function (t) {
	            e[y](l.predecessor, t) < 0 && l.predecessor.push(t);var i = r(n, t);e[y](i.successor, t) < 0 && i.successor.push(s);
	          });
	        }), { graph: n, noEntryList: o };
	      }function r(t, e) {
	        return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
	      }function a(t, i) {
	        var n = [];return e.each(t, function (t) {
	          e[y](i, t) >= 0 && n.push(t);
	        }), n;
	      }t.topologicalTravel = function (t, i, r, a) {
	        function o(t) {
	          c[t].entryCount--, 0 === c[t].entryCount && u.push(t);
	        }function s(t) {
	          h[t] = !0, o(t);
	        }if (t[S]) {
	          var l = n(i),
	              c = l.graph,
	              u = l.noEntryList,
	              h = {};for (e.each(t, function (t) {
	            h[t] = !0;
	          }); u[S];) {
	            var d = u.pop(),
	                f = c[d],
	                p = !!h[d];p && (r.call(a, d, f.originalDeps.slice()), delete h[d]), e.each(f.successor, p ? s : o);
	          }e.each(h, function () {
	            throw new Error("Circle dependency may exists");
	          });
	        }
	      };
	    }, a;
	  }), e("echarts/model/mixin/boxLayout", [K], function () {
	    return { getBoxLayoutParams: function getBoxLayoutParams() {
	        return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get(H), width: this.get("width"), height: this.get(X) };
	      } };
	  }), e("zrender/graphic/Style", [K], function () {
	    function t(t, e, i) {
	      var n = e.x,
	          r = e.x2,
	          a = e.y,
	          o = e.y2;e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i[X] + i.y, o = o * i[X] + i.y);var s = t.createLinearGradient(n, a, r, o);return s;
	    }function e(t, e, i) {
	      var n = i.width,
	          r = i[X],
	          a = Math.min(n, r),
	          o = e.x,
	          s = e.y,
	          l = e.r;e.global || (o = o * n + i.x, s = s * r + i.y, l *= a);var c = t.createRadialGradient(o, s, 0, o, s, l);return c;
	    }var i = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
	        n = function n(t) {
	      this.extendFrom(t);
	    };n[O] = { constructor: n, fill: "#000000", stroke: null, opacity: 1, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: !1, text: null, textFill: "#000", textStroke: null, textPosition: "inside", textBaseline: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, blend: null, bind: function bind(t, e, n) {
	        for (var r = this, a = n && n.style, o = !a, s = 0; s < i[S]; s++) {
	          var l = i[s],
	              c = l[0];(o || r[c] !== a[c]) && (t[c] = r[c] || l[1]);
	        }if ((o || r.fill !== a.fill) && (t.fillStyle = r.fill), (o || r[d] !== a[d]) && (t.strokeStyle = r[d]), (o || r[N] !== a[N]) && (t.globalAlpha = null == r[N] ? 1 : r[N]), (o || r.blend !== a.blend) && (t.globalCompositeOperation = r.blend || "source-over"), this.hasStroke()) {
	          var u = r.lineWidth;t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
	        }
	      }, hasFill: function hasFill() {
	        var t = this.fill;return null != t && "none" !== t;
	      }, hasStroke: function hasStroke() {
	        var t = this[d];return null != t && "none" !== t && this.lineWidth > 0;
	      }, extendFrom: function extendFrom(t, e) {
	        if (t) {
	          var i = this;for (var n in t) {
	            !t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n]);
	          }
	        }
	      }, set: function set(t, e) {
	        (typeof t === "undefined" ? "undefined" : _typeof(t)) === E ? this[t] = e : this.extendFrom(t, !0);
	      }, clone: function clone() {
	        var t = new this.constructor();return t.extendFrom(this, !0), t;
	      }, getGradient: function getGradient(i, n, r) {
	        for (var a = "radial" === n.type ? e : t, o = a(i, n, r), s = n.colorStops, l = 0; l < s[S]; l++) {
	          o.addColorStop(s[l].offset, s[l].color);
	        }return o;
	      } };for (var r = n[O], a = 0; a < i[S]; a++) {
	      var o = i[a];o[0] in r || (r[o[0]] = o[1]);
	    }return n.getGradient = r.getGradient, n;
	  }), e("zrender/Element", [K, "./core/guid", "./mixin/Eventful", "./mixin/Transformable", "./mixin/Animatable", "./core/util"], function (t) {
	    var e = t("./core/guid"),
	        i = t("./mixin/Eventful"),
	        n = t("./mixin/Transformable"),
	        r = t("./mixin/Animatable"),
	        o = t("./core/util"),
	        s = function s(t) {
	      n.call(this, t), i.call(this, t), r.call(this, t), this.id = t.id || e();
	    };return s[O] = { type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function drift(t, e) {
	        switch (this.draggable) {case "horizontal":
	            e = 0;break;case "vertical":
	            t = 0;}var i = this[a];i || (i = this[a] = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1);
	      }, beforeUpdate: function beforeUpdate() {}, afterUpdate: function afterUpdate() {}, update: function update() {
	        this.updateTransform();
	      }, traverse: function traverse() {}, attrKV: function attrKV(t, e) {
	        if (t === V || "scale" === t || "origin" === t) {
	          if (e) {
	            var i = this[t];i || (i = this[t] = []), i[0] = e[0], i[1] = e[1];
	          }
	        } else this[t] = e;
	      }, hide: function hide() {
	        this[k] = !0, this.__zr && this.__zr.refresh();
	      }, show: function show() {
	        this[k] = !1, this.__zr && this.__zr.refresh();
	      }, attr: function attr(t, e) {
	        if ((typeof t === "undefined" ? "undefined" : _typeof(t)) === E) this.attrKV(t, e);else if (o[P](t)) for (var i in t) {
	          t.hasOwnProperty(i) && this.attrKV(i, t[i]);
	        }return this.dirty(!1), this;
	      }, setClipPath: function setClipPath(t) {
	        var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
	      }, removeClipPath: function removeClipPath() {
	        var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));
	      }, addSelfToZr: function addSelfToZr(t) {
	        this.__zr = t;var e = this.animators;
	        if (e) for (var i = 0; i < e[S]; i++) {
	          t.animation.addAnimator(e[i]);
	        }this.clipPath && this.clipPath.addSelfToZr(t);
	      }, removeSelfFromZr: function removeSelfFromZr(t) {
	        this.__zr = null;var e = this.animators;if (e) for (var i = 0; i < e[S]; i++) {
	          t.animation.removeAnimator(e[i]);
	        }this.clipPath && this.clipPath.removeSelfFromZr(t);
	      } }, o.mixin(s, r), o.mixin(s, n), o.mixin(s, i), s;
	  }), e("echarts/scale/Ordinal", [K, F, "./Scale"], function (t) {
	    var e = t(F),
	        i = t("./Scale"),
	        n = i[O],
	        r = i[C]({ type: "ordinal", init: function init(t, e) {
	        this._data = t, this._extent = e || [0, t[S] - 1];
	      }, parse: function parse(t) {
	        return (typeof t === "undefined" ? "undefined" : _typeof(t)) === E ? e[y](this._data, t) : Math.round(t);
	      }, contain: function contain(t) {
	        return t = this.parse(t), n[m].call(this, t) && null != this._data[t];
	      }, normalize: function normalize(t) {
	        return n.normalize.call(this, this.parse(t));
	      }, scale: function scale(t) {
	        return Math.round(n.scale.call(this, t));
	      }, getTicks: function getTicks() {
	        for (var t = [], e = this._extent, i = e[0]; i <= e[1];) {
	          t.push(i), i++;
	        }return t;
	      }, getLabel: function getLabel(t) {
	        return this._data[t];
	      }, count: function count() {
	        return this._extent[1] - this._extent[0] + 1;
	      }, niceTicks: e.noop, niceExtent: e.noop });return r[z] = function () {
	      return new r();
	    }, r;
	  }), e("zrender/container/Group", [K, "../core/util", "../Element", "../core/BoundingRect"], function (t) {
	    var e = t("../core/util"),
	        n = t("../Element"),
	        r = t("../core/BoundingRect"),
	        a = function a(t) {
	      t = t || {}, n.call(this, t);for (var e in t) {
	        this[e] = t[e];
	      }this._children = [], this.__storage = null, this[i] = !0;
	    };return a[O] = { constructor: a, isGroup: !0, type: "group", silent: !1, children: function children() {
	        return this._children.slice();
	      }, childAt: function childAt(t) {
	        return this._children[t];
	      }, childOfName: function childOfName(t) {
	        for (var e = this._children, i = 0; i < e[S]; i++) {
	          if (e[i].name === t) return e[i];
	        }
	      }, childCount: function childCount() {
	        return this._children[S];
	      }, add: function add(t) {
	        return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
	      }, addBefore: function addBefore(t, e) {
	        if (t && t !== this && t.parent !== this && e && e.parent === this) {
	          var i = this._children,
	              n = i[y](e);n >= 0 && (i[M](n, 0, t), this._doAdd(t));
	        }return this;
	      }, _doAdd: function _doAdd(t) {
	        t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,
	            i = this.__zr;e && e !== t.__storage && (e.addToMap(t), t instanceof a && t.addChildrenToStorage(e)), i && i.refresh();
	      }, remove: function remove(t) {
	        var i = this.__zr,
	            n = this.__storage,
	            r = this._children,
	            o = e[y](r, t);return 0 > o ? this : (r[M](o, 1), t.parent = null, n && (n.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(n)), i && i.refresh(), this);
	      }, removeAll: function removeAll() {
	        var t,
	            e,
	            i = this._children,
	            n = this.__storage;for (e = 0; e < i[S]; e++) {
	          t = i[e], n && (n.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(n)), t.parent = null;
	        }return i[S] = 0, this;
	      }, eachChild: function eachChild(t, e) {
	        for (var i = this._children, n = 0; n < i[S]; n++) {
	          var r = i[n];t.call(e, r, n);
	        }return this;
	      }, traverse: function traverse(t, e) {
	        for (var i = 0; i < this._children[S]; i++) {
	          var n = this._children[i];t.call(e, n), "group" === n.type && n.traverse(t, e);
	        }return this;
	      }, addChildrenToStorage: function addChildrenToStorage(t) {
	        for (var e = 0; e < this._children[S]; e++) {
	          var i = this._children[e];t.addToMap(i), i instanceof a && i.addChildrenToStorage(t);
	        }
	      }, delChildrenFromStorage: function delChildrenFromStorage(t) {
	        for (var e = 0; e < this._children[S]; e++) {
	          var i = this._children[e];t.delFromMap(i.id), i instanceof a && i.delChildrenFromStorage(t);
	        }
	      }, dirty: function dirty() {
	        return this[i] = !0, this.__zr && this.__zr.refresh(), this;
	      }, getBoundingRect: function getBoundingRect(t) {
	        for (var e = null, i = new r(0, 0, 0, 0), n = t || this._children, a = [], o = 0; o < n[S]; o++) {
	          var s = n[o];if (!s[k] && !s.invisible) {
	            var l = s[Y](),
	                c = s.getLocalTransform(a);c ? (i.copy(l), i[f](c), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l));
	          }
	        }return e || i;
	      } }, e[g](a, n), a;
	  }), e("zrender/core/guid", [], function () {
	    var t = 2311;return function () {
	      return t++;
	    };
	  }), e("zrender/mixin/Transformable", [K, "../core/matrix", "../core/vector"], function (t) {
	    function e(t) {
	      return t > o || -o > t;
	    }var i = t("../core/matrix"),
	        n = t("../core/vector"),
	        r = i.identity,
	        o = 5e-5,
	        s = function s(t) {
	      t = t || {}, t[V] || (this[V] = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
	    },
	        l = s[O];l[a] = null, l.needLocalTransform = function () {
	      return e(this.rotation) || e(this[V][0]) || e(this[V][1]) || e(this.scale[0] - 1) || e(this.scale[1] - 1);
	    }, l.updateTransform = function () {
	      var t = this.parent,
	          e = t && t[a],
	          n = this.needLocalTransform(),
	          o = this[a];return n || e ? (o = o || i[z](), n ? this.getLocalTransform(o) : r(o), e && (n ? i.mul(o, t[a], o) : i.copy(o, t[a])), this[a] = o, this.invTransform = this.invTransform || i[z](), void i.invert(this.invTransform, o)) : void (o && r(o));
	    }, l.getLocalTransform = function (t) {
	      t = t || [], r(t);var e = this.origin,
	          n = this.scale,
	          a = this.rotation,
	          o = this[V];return e && (t[4] -= e[0], t[5] -= e[1]), i.scale(t, t, n), a && i.rotate(t, t, a), e && (t[4] += e[0], t[5] += e[1]), t[4] += o[0], t[5] += o[1], t;
	    }, l.setTransform = function (t) {
	      var e = this[a];e && t[a](e[0], e[1], e[2], e[3], e[4], e[5]);
	    }, l.restoreTransform = function (t) {
	      var e = this.invTransform;e && t[a](e[0], e[1], e[2], e[3], e[4], e[5]);
	    };var c = [];return l.decomposeTransform = function () {
	      if (this[a]) {
	        var t = this.parent,
	            n = this[a];t && t[a] && (i.mul(c, t.invTransform, n), n = c);var r = n[0] * n[0] + n[1] * n[1],
	            o = n[2] * n[2] + n[3] * n[3],
	            s = this[V],
	            l = this.scale;e(r - 1) && (r = Math.sqrt(r)), e(o - 1) && (o = Math.sqrt(o)), n[0] < 0 && (r = -r), n[3] < 0 && (o = -o), s[0] = n[4], s[1] = n[5], l[0] = r, l[1] = o, this.rotation = Math.atan2(-n[1] / o, n[0] / r);
	      }
	    }, l.getGlobalScale = function () {
	      var t = this[a];if (!t) return [1, 1];var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
	          i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i];
	    }, l.transformCoordToLocal = function (t, e) {
	      var i = [t, e],
	          r = this.invTransform;return r && n[f](i, i, r), i;
	    }, l.transformCoordToGlobal = function (t, e) {
	      var i = [t, e],
	          r = this[a];return r && n[f](i, i, r), i;
	    }, s;
	  }), e("zrender/mixin/Animatable", [K, "../animation/Animator", "../core/util", "../core/log"], function (t) {
	    var e = t("../animation/Animator"),
	        i = t("../core/util"),
	        n = i.isString,
	        r = i.isFunction,
	        a = i[P],
	        o = t("../core/log"),
	        s = function s() {
	      this.animators = [];
	    };return s[O] = { constructor: s, animate: function animate(t, n) {
	        var r,
	            a = !1,
	            s = this,
	            l = this.__zr;if (t) {
	          var c = t.split("."),
	              u = s;a = "shape" === c[0];for (var h = 0, d = c[S]; d > h; h++) {
	            u && (u = u[c[h]]);
	          }u && (r = u);
	        } else r = s;if (!r) return void o('Property "' + t + '" is not existed in element ' + s.id);var f = s.animators,
	            p = new e(r, n);return p.during(function () {
	          s.dirty(a);
	        }).done(function () {
	          f[M](i[y](f, p), 1);
	        }), f.push(p), l && l.animation.addAnimator(p), p;
	      }, stopAnimation: function stopAnimation(t) {
	        for (var e = this.animators, i = e[S], n = 0; i > n; n++) {
	          e[n].stop(t);
	        }return e[S] = 0, this;
	      }, animateTo: function animateTo(t, e, i, a, o) {
	        function s() {
	          c--, c || o && o();
	        }n(i) ? (o = a, a = i, i = 0) : r(a) ? (o = a, a = "linear", i = 0) : r(i) ? (o = i, i = 0) : r(e) ? (o = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, a, o);var l = this.animators.slice(),
	            c = l[S];c || o && o();for (var u = 0; u < l[S]; u++) {
	          l[u].done(s).start(a);
	        }
	      }, _animateToShallow: function _animateToShallow(t, e, n, r, o) {
	        var s = {},
	            l = 0;for (var c in n) {
	          if (null != e[c]) a(n[c]) && !i.isArrayLike(n[c]) ? this._animateToShallow(t ? t + "." + c : c, e[c], n[c], r, o) : (s[c] = n[c], l++);else if (null != n[c]) if (t) {
	            var u = {};u[t] = {}, u[t][c] = n[c], this.attr(u);
	          } else this.attr(c, n[c]);
	        }return l > 0 && this.animate(t, !1).when(null == r ? 500 : r, s).delay(o || 0), this;
	      } }, s;
	  }), e("echarts/coord/polar/AxisModel", [K, F, "../../model/Component", "../axisModelCreator", "../axisModelCommonMixin"], function (t) {
	    function e(t, e) {
	      return e.type || (e.data ? s : "value");
	    }var i = t(F),
	        n = t("../../model/Component"),
	        r = t("../axisModelCreator"),
	        a = n[C]({ type: "polarAxis", axis: null });i.merge(a[O], t("../axisModelCommonMixin"));var o = { angle: { polarIndex: 0, startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: { rotate: !1 } }, radius: { polarIndex: 0, splitNumber: 5 } };r("angle", a, e, o.angle), r(l, a, e, o[l]);
	  }), e("zrender/core/log", [K, "../config"], function (t) {
	    var e = t("../config");return function () {
	      if (0 !== e.debugMode) if (1 == e.debugMode) for (var t in arguments) {
	        throw new Error(arguments[t]);
	      } else if (e.debugMode > 1) for (var t in arguments) {
	        console.log(arguments[t]);
	      }
	    };
	  }), e("zrender/animation/Animator", [K, "./Clip", "../tool/color", "../core/util"], function (t) {
	    function e(t, e) {
	      return t[e];
	    }function i(t, e, i) {
	      t[e] = i;
	    }function n(t, e, i) {
	      return (e - t) * i + t;
	    }function r(t, e, i) {
	      return i > .5 ? e : t;
	    }function a(t, e, i, r, a) {
	      var o = t[S];if (1 == a) for (var s = 0; o > s; s++) {
	        r[s] = n(t[s], e[s], i);
	      } else for (var l = t[0][S], s = 0; o > s; s++) {
	        for (var c = 0; l > c; c++) {
	          r[s][c] = n(t[s][c], e[s][c], i);
	        }
	      }
	    }function o(t, e, i) {
	      var n = t[S],
	          r = e[S];if (n !== r) {
	        var a = n > r;if (a) t[S] = r;else for (var o = n; r > o; o++) {
	          t.push(1 === i ? e[o] : g.call(e[o]));
	        }
	      }for (var s = t[0] && t[0][S], o = 0; o < t[S]; o++) {
	        if (1 === i) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) {
	          isNaN(t[o][l]) && (t[o][l] = e[o][l]);
	        }
	      }
	    }function s(t, e, i) {
	      if (t === e) return !0;var n = t[S];if (n !== e[S]) return !1;if (1 === i) {
	        for (var r = 0; n > r; r++) {
	          if (t[r] !== e[r]) return !1;
	        }
	      } else for (var a = t[0][S], r = 0; n > r; r++) {
	        for (var o = 0; a > o; o++) {
	          if (t[r][o] !== e[r][o]) return !1;
	        }
	      }return !0;
	    }function l(t, e, i, n, r, a, o, s, l) {
	      var u = t[S];if (1 == l) for (var h = 0; u > h; h++) {
	        s[h] = c(t[h], e[h], i[h], n[h], r, a, o);
	      } else for (var d = t[0][S], h = 0; u > h; h++) {
	        for (var f = 0; d > f; f++) {
	          s[h][f] = c(t[h][f], e[h][f], i[h][f], n[h][f], r, a, o);
	        }
	      }
	    }function c(t, e, i, n, r, a, o) {
	      var s = .5 * (i - t),
	          l = .5 * (n - e);return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
	    }function u(t) {
	      if (m(t)) {
	        var e = t[S];if (m(t[0])) {
	          for (var i = [], n = 0; e > n; n++) {
	            i.push(g.call(t[n]));
	          }return i;
	        }return g.call(t);
	      }return t;
	    }function h(t) {
	      return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
	    }function d(t, e, i, u, d) {
	      var v = t._getter,
	          g = t._setter,
	          y = "spline" === e,
	          _ = u[S];if (_) {
	        var x,
	            b = u[0].value,
	            w = m(b),
	            T = !1,
	            M = !1,
	            A = w && m(b[0]) ? 2 : 1;u.sort(function (t, e) {
	          return t.time - e.time;
	        }), x = u[_ - 1].time;for (var C = [], P = [], L = u[0].value, z = !0, k = 0; _ > k; k++) {
	          C.push(u[k].time / x);var I = u[k].value;if (w && s(I, L, A) || !w && I === L || (z = !1), L = I, (typeof I === "undefined" ? "undefined" : _typeof(I)) == E) {
	            var D = p.parse(I);D ? (I = D, T = !0) : M = !0;
	          }P.push(I);
	        }if (!z) {
	          for (var R = P[_ - 1], k = 0; _ - 1 > k; k++) {
	            w ? o(P[k], R, A) : !isNaN(P[k]) || isNaN(R) || M || T || (P[k] = R);
	          }w && o(v(t._target, d), R, A);var O,
	              B,
	              F,
	              N,
	              V,
	              H,
	              G = 0,
	              q = 0;if (T) var W = [0, 0, 0, 0];var j = function j(t, e) {
	            var i;if (q > e) {
	              for (O = Math.min(G + 1, _ - 1), i = O; i >= 0 && !(C[i] <= e); i--) {}i = Math.min(i, _ - 2);
	            } else {
	              for (i = G; _ > i && !(C[i] > e); i++) {}i = Math.min(i - 1, _ - 2);
	            }G = i, q = e;var o = C[i + 1] - C[i];if (0 !== o) if (B = (e - C[i]) / o, y) {
	              if (N = P[i], F = P[0 === i ? i : i - 1], V = P[i > _ - 2 ? _ - 1 : i + 1], H = P[i > _ - 3 ? _ - 1 : i + 2], w) l(F, N, V, H, B, B * B, B * B * B, v(t, d), A);else {
	                var s;if (T) s = l(F, N, V, H, B, B * B, B * B * B, W, 1), s = h(W);else {
	                  if (M) return r(N, V, B);s = c(F, N, V, H, B, B * B, B * B * B);
	                }g(t, d, s);
	              }
	            } else if (w) a(P[i], P[i + 1], B, v(t, d), A);else {
	              var s;if (T) a(P[i], P[i + 1], B, W, 1), s = h(W);else {
	                if (M) return r(P[i], P[i + 1], B);s = n(P[i], P[i + 1], B);
	              }g(t, d, s);
	            }
	          },
	              U = new f({ target: t._target, life: x, loop: t._loop, delay: t._delay, onframe: j, ondestroy: i });return e && "spline" !== e && (U.easing = e), U;
	        }
	      }
	    }var f = t("./Clip"),
	        p = t("../tool/color"),
	        v = t("../core/util"),
	        m = v.isArrayLike,
	        g = Array[O].slice,
	        y = function y(t, n, r, a) {
	      this._tracks = {}, this._target = t, this._loop = n || !1, this._getter = r || e, this._setter = a || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
	    };return y[O] = { when: function when(t, e) {
	        var i = this._tracks;for (var n in e) {
	          if (!i[n]) {
	            i[n] = [];var r = this._getter(this._target, n);if (null == r) continue;0 !== t && i[n].push({ time: 0, value: u(r) });
	          }i[n].push({ time: t, value: e[n] });
	        }return this;
	      }, during: function during(t) {
	        return this._onframeList.push(t), this;
	      }, _doneCallback: function _doneCallback() {
	        this._tracks = {}, this._clipList[S] = 0;for (var t = this._doneList, e = t[S], i = 0; e > i; i++) {
	          t[i].call(this);
	        }
	      }, start: function start(t) {
	        var e,
	            i = this,
	            n = 0,
	            r = function r() {
	          n--, n || i._doneCallback();
	        };for (var a in this._tracks) {
	          var o = d(this, t, r, this._tracks[a], a);o && (this._clipList.push(o), n++, this.animation && this.animation.addClip(o), e = o);
	        }if (e) {
	          var s = e.onframe;e.onframe = function (t, e) {
	            s(t, e);for (var n = 0; n < i._onframeList[S]; n++) {
	              i._onframeList[n](t, e);
	            }
	          };
	        }return n || this._doneCallback(), this;
	      }, stop: function stop(t) {
	        for (var e = this._clipList, i = this.animation, n = 0; n < e[S]; n++) {
	          var r = e[n];t && r.onframe(this._target, 1), i && i.removeClip(r);
	        }e[S] = 0;
	      }, delay: function delay(t) {
	        return this._delay = t, this;
	      }, done: function done(t) {
	        return t && this._doneList.push(t), this;
	      }, getClips: function getClips() {
	        return this._clipList;
	      } }, y;
	  }), e("echarts/coord/axisModelCreator", [K, "./axisDefault", F, "../model/Component", "../util/layout"], function (t) {
	    var e = t("./axisDefault"),
	        i = t(F),
	        n = t("../model/Component"),
	        r = t("../util/layout"),
	        a = ["value", s, "time", "log"];return function (t, o, s, l) {
	      i.each(a, function (n) {
	        o[C]({ type: t + "Axis." + n, mergeDefaultAndTheme: function mergeDefaultAndTheme(e, a) {
	            var o = this.layoutMode,
	                l = o ? r.getLayoutParams(e) : {},
	                c = a.getTheme();i.merge(e, c.get(n + "Axis")), i.merge(e, this.getDefaultOption()), e.type = s(t, e), o && r.mergeLayoutParam(e, l, o);
	          }, defaultOption: i.mergeAll([{}, e[n + "Axis"], l], !0) });
	      }), n.registerSubTypeDefaulter(t + "Axis", i.curry(s, t));
	    };
	  }), e("echarts/coord/axisModelCommonMixin", [K, F, "./axisHelper"], function (t) {
	    function e(t) {
	      return r[P](t) && null != t.value ? t.value : t;
	    }function i() {
	      return this.get("type") === s && r.map(this.get("data"), e);
	    }function n() {
	      return a.getFormattedLabels(this.axis, this.get("axisLabel.formatter"));
	    }var r = t(F),
	        a = t("./axisHelper");return { getFormattedLabels: n, getCategories: i };
	  }), e("zrender/animation/Clip", [K, "./easing"], function (t) {
	    function e(t) {
	      this._target = t[U], this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart;
	    }var i = t("./easing");return e[O] = { constructor: e, step: function step(t) {
	        this._initialized || (this._startTime = new Date().getTime() + this._delay, this._initialized = !0);var e = (t - this._startTime) / this._life;if (!(0 > e)) {
	          e = Math.min(e, 1);var n = this.easing,
	              r = (typeof n === "undefined" ? "undefined" : _typeof(n)) == E ? i[n] : n,
	              a = (typeof r === "undefined" ? "undefined" : _typeof(r)) === _ ? r(e) : e;return this.fire("frame", a), 1 == e ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null;
	        }
	      }, restart: function restart() {
	        var t = new Date().getTime(),
	            e = (t - this._startTime) % this._life;this._startTime = new Date().getTime() - e + this.gap, this._needsRemove = !1;
	      }, fire: function fire(t, e) {
	        t = "on" + t, this[t] && this[t](this._target, e);
	      } }, e;
	  }), e("echarts/coord/axisDefault", [K, F], function (t) {
	    var e = t(F),
	        i = { show: !0, zlevel: 0, z: 0, inverse: !1, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: !1, triggerEvent: !1, tooltip: { show: !1 }, axisLine: { show: !0, onZero: !0, lineStyle: { color: "#333", width: 1, type: "solid" } }, axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: !0, inside: !1, rotate: 0, margin: 8, textStyle: { fontSize: 12 } }, splitLine: { show: !0, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: !1, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },
	        n = e.merge({ boundaryGap: !0, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto" }, axisLabel: { interval: "auto" } }, i),
	        r = e.merge({ boundaryGap: [0, 0], splitNumber: 5 }, i),
	        a = e[A]({ scale: !0, min: "dataMin", max: "dataMax" }, r),
	        o = e[A]({}, r);return o.scale = !0, { categoryAxis: n, valueAxis: r, timeAxis: a, logAxis: o };
	  }), e("zrender/animation/easing", [], function () {
	    var t = { linear: function linear(t) {
	        return t;
	      }, quadraticIn: function quadraticIn(t) {
	        return t * t;
	      }, quadraticOut: function quadraticOut(t) {
	        return t * (2 - t);
	      }, quadraticInOut: function quadraticInOut(t) {
	        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
	      }, cubicIn: function cubicIn(t) {
	        return t * t * t;
	      }, cubicOut: function cubicOut(t) {
	        return --t * t * t + 1;
	      }, cubicInOut: function cubicInOut(t) {
	        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
	      }, quarticIn: function quarticIn(t) {
	        return t * t * t * t;
	      }, quarticOut: function quarticOut(t) {
	        return 1 - --t * t * t * t;
	      }, quarticInOut: function quarticInOut(t) {
	        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
	      }, quinticIn: function quinticIn(t) {
	        return t * t * t * t * t;
	      }, quinticOut: function quinticOut(t) {
	        return --t * t * t * t * t + 1;
	      }, quinticInOut: function quinticInOut(t) {
	        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
	      }, sinusoidalIn: function sinusoidalIn(t) {
	        return 1 - Math.cos(t * Math.PI / 2);
	      }, sinusoidalOut: function sinusoidalOut(t) {
	        return Math.sin(t * Math.PI / 2);
	      }, sinusoidalInOut: function sinusoidalInOut(t) {
	        return .5 * (1 - Math.cos(Math.PI * t));
	      }, exponentialIn: function exponentialIn(t) {
	        return 0 === t ? 0 : Math.pow(1024, t - 1);
	      }, exponentialOut: function exponentialOut(t) {
	        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
	      }, exponentialInOut: function exponentialInOut(t) {
	        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
	      }, circularIn: function circularIn(t) {
	        return 1 - Math.sqrt(1 - t * t);
	      }, circularOut: function circularOut(t) {
	        return Math.sqrt(1 - --t * t);
	      }, circularInOut: function circularInOut(t) {
	        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	      }, elasticIn: function elasticIn(t) {
	        var e,
	            i = .1,
	            n = .4;return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n)));
	      }, elasticOut: function elasticOut(t) {
	        var e,
	            i = .1,
	            n = .4;return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / n) + 1);
	      }, elasticInOut: function elasticInOut(t) {
	        var e,
	            i = .1,
	            n = .4;return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) * .5 + 1);
	      }, backIn: function backIn(t) {
	        var e = 1.70158;return t * t * ((e + 1) * t - e);
	      }, backOut: function backOut(t) {
	        var e = 1.70158;return --t * t * ((e + 1) * t + e) + 1;
	      }, backInOut: function backInOut(t) {
	        var e = 2.5949095;return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
	      }, bounceIn: function bounceIn(e) {
	        return 1 - t.bounceOut(1 - e);
	      }, bounceOut: function bounceOut(t) {
	        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	      }, bounceInOut: function bounceInOut(e) {
	        return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5;
	      } };return t;
	  }), e("zrender/tool/path", [K, "../graphic/Path", "../core/PathProxy", "./transformPath", "../core/matrix"], function (t) {
	    function e(t, e, i, n, r, a, o, s, l, c, f) {
	      var v = l * (p / 180),
	          y = d(v) * (t - i) / 2 + h(v) * (e - n) / 2,
	          _ = -1 * h(v) * (t - i) / 2 + d(v) * (e - n) / 2,
	          x = y * y / (o * o) + _ * _ / (s * s);x > 1 && (o *= u(x), s *= u(x));var b = (r === a ? -1 : 1) * u((o * o * s * s - o * o * _ * _ - s * s * y * y) / (o * o * _ * _ + s * s * y * y)) || 0,
	          w = b * o * _ / s,
	          T = b * -s * y / o,
	          M = (t + i) / 2 + d(v) * w - h(v) * T,
	          S = (e + n) / 2 + h(v) * w + d(v) * T,
	          A = g([1, 0], [(y - w) / o, (_ - T) / s]),
	          C = [(y - w) / o, (_ - T) / s],
	          P = [(-1 * y - w) / o, (-1 * _ - T) / s],
	          L = g(C, P);m(C, P) <= -1 && (L = p), m(C, P) >= 1 && (L = 0), 0 === a && L > 0 && (L -= 2 * p), 1 === a && 0 > L && (L += 2 * p), f.addData(c, M, S, o, s, A, L, v, a);
	    }function n(t) {
	      if (!t) return [];var i,
	          n = t[b](/-/g, " -")[b](/  /g, " ")[b](/ /g, ",")[b](/,,/g, ",");for (i = 0; i < c[S]; i++) {
	        n = n[b](new RegExp(c[i], "g"), "|" + c[i]);
	      }var r,
	          a = n.split("|"),
	          s = 0,
	          l = 0,
	          u = new o(),
	          h = o.CMD;for (i = 1; i < a[S]; i++) {
	        var d,
	            f = a[i],
	            p = f.charAt(0),
	            v = 0,
	            m = f.slice(1)[b](/e,-/g, "e-").split(",");m[S] > 0 && "" === m[0] && m.shift();for (var g = 0; g < m[S]; g++) {
	          m[g] = parseFloat(m[g]);
	        }for (; v < m[S] && !isNaN(m[v]) && !isNaN(m[0]);) {
	          var y,
	              _,
	              x,
	              w,
	              T,
	              M,
	              A,
	              C = s,
	              P = l;switch (p) {case "l":
	              s += m[v++], l += m[v++], d = h.L, u.addData(d, s, l);break;case "L":
	              s = m[v++], l = m[v++], d = h.L, u.addData(d, s, l);break;case "m":
	              s += m[v++], l += m[v++], d = h.M, u.addData(d, s, l), p = "l";break;case "M":
	              s = m[v++], l = m[v++], d = h.M, u.addData(d, s, l), p = "L";break;case "h":
	              s += m[v++], d = h.L, u.addData(d, s, l);break;case "H":
	              s = m[v++], d = h.L, u.addData(d, s, l);break;case "v":
	              l += m[v++], d = h.L, u.addData(d, s, l);break;case "V":
	              l = m[v++], d = h.L, u.addData(d, s, l);break;case "C":
	              d = h.C, u.addData(d, m[v++], m[v++], m[v++], m[v++], m[v++], m[v++]), s = m[v - 2], l = m[v - 1];break;case "c":
	              d = h.C, u.addData(d, m[v++] + s, m[v++] + l, m[v++] + s, m[v++] + l, m[v++] + s, m[v++] + l), s += m[v - 2], l += m[v - 1];break;case "S":
	              y = s, _ = l;var L = u.len(),
	                  z = u.data;r === h.C && (y += s - z[L - 4], _ += l - z[L - 3]), d = h.C, C = m[v++], P = m[v++], s = m[v++], l = m[v++], u.addData(d, y, _, C, P, s, l);break;case "s":
	              y = s, _ = l;var L = u.len(),
	                  z = u.data;r === h.C && (y += s - z[L - 4], _ += l - z[L - 3]), d = h.C, C = s + m[v++], P = l + m[v++], s += m[v++], l += m[v++], u.addData(d, y, _, C, P, s, l);break;case "Q":
	              C = m[v++], P = m[v++], s = m[v++], l = m[v++], d = h.Q, u.addData(d, C, P, s, l);break;case "q":
	              C = m[v++] + s, P = m[v++] + l, s += m[v++], l += m[v++], d = h.Q, u.addData(d, C, P, s, l);break;case "T":
	              y = s, _ = l;var L = u.len(),
	                  z = u.data;r === h.Q && (y += s - z[L - 4], _ += l - z[L - 3]), s = m[v++], l = m[v++], d = h.Q, u.addData(d, y, _, s, l);break;case "t":
	              y = s, _ = l;var L = u.len(),
	                  z = u.data;r === h.Q && (y += s - z[L - 4], _ += l - z[L - 3]), s += m[v++], l += m[v++], d = h.Q, u.addData(d, y, _, s, l);break;case "A":
	              x = m[v++], w = m[v++], T = m[v++], M = m[v++], A = m[v++], C = s, P = l, s = m[v++], l = m[v++], d = h.A, e(C, P, s, l, M, A, x, w, T, d, u);break;case "a":
	              x = m[v++], w = m[v++], T = m[v++], M = m[v++], A = m[v++], C = s, P = l, s += m[v++], l += m[v++], d = h.A, e(C, P, s, l, M, A, x, w, T, d, u);}
	        }("z" === p || "Z" === p) && (d = h.Z, u.addData(d)), r = d;
	      }return u.toStatic(), u;
	    }function r(t, e) {
	      var i,
	          r = n(t);return e = e || {}, e.buildPath = function (t) {
	        t.setData(r.data), i && s(t, i);var e = t.getContext();e && t.rebuildPath(e);
	      }, e[f] = function (t) {
	        i || (i = l[z]()), l.mul(i, t, i);
	      }, e;
	    }var a = t("../graphic/Path"),
	        o = t("../core/PathProxy"),
	        s = t("./transformPath"),
	        l = t("../core/matrix"),
	        c = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
	        u = Math.sqrt,
	        h = Math.sin,
	        d = Math.cos,
	        p = Math.PI,
	        v = function v(t) {
	      return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
	    },
	        m = function m(t, e) {
	      return (t[0] * e[0] + t[1] * e[1]) / (v(t) * v(e));
	    },
	        g = function g(t, e) {
	      return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e));
	    };return { createFromString: function createFromString(t, e) {
	        return new a(r(t, e));
	      }, extendFromString: function extendFromString(t, e) {
	        return a[C](r(t, e));
	      }, mergePath: function mergePath(t, e) {
	        for (var n = [], r = t[S], o = 0; r > o; o++) {
	          var s = t[o];s[i] && s.buildPath(s.path, s.shape, !0), n.push(s.path);
	        }var l = new a(e);return l.buildPath = function (t) {
	          t.appendPath(n);var e = t.getContext();e && t.rebuildPath(e);
	        }, l;
	      } };
	  }), e("zrender/graphic/shape/Circle", [K, "../Path"], function (t) {
	    return t("../Path")[C]({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function buildPath(t, e, i) {
	        i && t[r](e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
	      } });
	  }), e("zrender/graphic/shape/Sector", [K, "../Path"], function (t) {
	    return t("../Path")[C]({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, buildPath: function buildPath(t, e) {
	        var i = e.cx,
	            n = e.cy,
	            a = Math.max(e.r0 || 0, 0),
	            o = Math.max(e.r, 0),
	            s = e.startAngle,
	            l = e.endAngle,
	            c = e.clockwise,
	            u = Math.cos(s),
	            h = Math.sin(s);t[r](u * a + i, h * a + n), t.lineTo(u * o + i, h * o + n), t.arc(i, n, o, s, l, !c), t.lineTo(Math.cos(l) * a + i, Math.sin(l) * a + n), 0 !== a && t.arc(i, n, a, l, s, c), t.closePath();
	      } });
	  }), e("zrender/graphic/shape/Polygon", [K, "../helper/poly", "../Path"], function (t) {
	    var e = t("../helper/poly");return t("../Path")[C]({ type: "polygon", shape: { points: null, smooth: !1, smoothConstraint: null }, buildPath: function buildPath(t, i) {
	        e.buildPath(t, i, !0);
	      } });
	  }), e("zrender/graphic/shape/Ring", [K, "../Path"], function (t) {
	    return t("../Path")[C]({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function buildPath(t, e) {
	        var i = e.cx,
	            n = e.cy,
	            a = 2 * Math.PI;t[r](i + e.r, n), t.arc(i, n, e.r, 0, a, !1), t[r](i + e.r0, n), t.arc(i, n, e.r0, 0, a, !0);
	      } });
	  }), e("zrender/graphic/shape/Polyline", [K, "../helper/poly", "../Path"], function (t) {
	    var e = t("../helper/poly");return t("../Path")[C]({ type: "polyline", shape: { points: null, smooth: !1, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, i) {
	        e.buildPath(t, i, !1);
	      } });
	  }), e("zrender/graphic/shape/Line", [K, "../Path"], function (t) {
	    return t("../Path")[C]({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
	        var i = e.x1,
	            n = e.y1,
	            a = e.x2,
	            o = e.y2,
	            s = e.percent;0 !== s && (t[r](i, n), 1 > s && (a = i * (1 - s) + a * s, o = n * (1 - s) + o * s), t.lineTo(a, o));
	      }, pointAt: function pointAt(t) {
	        var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
	      } });
	  }), e("zrender/graphic/shape/BezierCurve", [K, "../../core/curve", "../../core/vector", "../Path"], function (t) {
	    function e(t, e, i) {
	      var n = t.cpx2,
	          r = t.cpy2;return null === n || null === r ? [(i ? u : l)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? u : l)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? c : s)(t.x1, t.cpx1, t.x2, e), (i ? c : s)(t.y1, t.cpy1, t.y2, e)];
	    }var i = t("../../core/curve"),
	        n = t("../../core/vector"),
	        a = i.quadraticSubdivide,
	        o = i.cubicSubdivide,
	        s = i.quadraticAt,
	        l = i.cubicAt,
	        c = i.quadraticDerivativeAt,
	        u = i.cubicDerivativeAt,
	        h = [];return t("../Path")[C]({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
	        var i = e.x1,
	            n = e.y1,
	            s = e.x2,
	            l = e.y2,
	            c = e.cpx1,
	            u = e.cpy1,
	            d = e.cpx2,
	            f = e.cpy2,
	            p = e.percent;0 !== p && (t[r](i, n), null == d || null == f ? (1 > p && (a(i, c, s, p, h), c = h[1], s = h[2], a(n, u, l, p, h), u = h[1], l = h[2]), t.quadraticCurveTo(c, u, s, l)) : (1 > p && (o(i, c, d, s, p, h), c = h[1], d = h[2], s = h[3], o(n, u, f, l, p, h), u = h[1], f = h[2], l = h[3]), t.bezierCurveTo(c, u, d, f, s, l)));
	      }, pointAt: function pointAt(t) {
	        return e(this.shape, t, !1);
	      }, tangentAt: function tangentAt(t) {
	        var i = e(this.shape, t, !0);return n.normalize(i, i);
	      } });
	  }), e("zrender/graphic/shape/Rect", [K, "../helper/roundRect", "../Path"], function (t) {
	    var e = t("../helper/roundRect");return t("../Path")[C]({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, i) {
	        var n = i.x,
	            r = i.y,
	            a = i.width,
	            o = i[X];i.r ? e.buildPath(t, i) : t.rect(n, r, a, o), t.closePath();
	      } });
	  }), e("zrender/graphic/shape/Arc", [K, "../Path"], function (t) {
	    return t("../Path")[C]({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
	        var i = e.cx,
	            n = e.cy,
	            a = Math.max(e.r, 0),
	            o = e.startAngle,
	            s = e.endAngle,
	            l = e.clockwise,
	            c = Math.cos(o),
	            u = Math.sin(o);t[r](c * a + i, u * a + n), t.arc(i, n, a, o, s, !l);
	      } });
	  }), e("zrender/graphic/CompoundPath", [K, "./Path"], function (t) {
	    var e = t("./Path");return e[C]({ type: "compound", shape: { paths: null }, _updatePathDirty: function _updatePathDirty() {
	        for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e[S]; n++) {
	          t = t || e[n].__dirtyPath;
	        }this.__dirtyPath = t, this[i] = this[i] || t;
	      }, beforeBrush: function beforeBrush() {
	        this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t[S]; i++) {
	          t[i].path.setScale(e[0], e[1]);
	        }
	      }, buildPath: function buildPath(t, e) {
	        for (var i = e.paths || [], n = 0; n < i[S]; n++) {
	          i[n].buildPath(t, i[n].shape, !0);
	        }
	      }, afterBrush: function afterBrush() {
	        for (var t = this.shape.paths, e = 0; e < t[S]; e++) {
	          t[e].__dirtyPath = !1;
	        }
	      }, getBoundingRect: function getBoundingRect() {
	        return this._updatePathDirty(), e[O][Y].call(this);
	      } });
	  }), e("zrender/graphic/LinearGradient", [K, "../core/util", "./Gradient"], function (t) {
	    var e = t("../core/util"),
	        i = t("./Gradient"),
	        n = function n(t, e, _n, r, a, o) {
	      this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == _n ? 1 : _n, this.y2 = null == r ? 0 : r, this.type = "linear", this.global = o || !1, i.call(this, a);
	    };return n[O] = { constructor: n }, e[g](n, i), n;
	  }), e("zrender/contain/path", [K, "../core/PathProxy", "./line", "./cubic", "./quadratic", "./arc", "./util", "../core/curve", "./windingLine"], function (t) {
	    function e(t, e) {
	      return Math.abs(t - e) < g;
	    }function i() {
	      var t = _[0];_[0] = _[1], _[1] = t;
	    }function n(t, e, n, r, a, o, s, l, c, u) {
	      if (u > e && u > r && u > o && u > l || e > u && r > u && o > u && l > u) return 0;var h = f.cubicRootAt(e, r, o, l, u, y);if (0 === h) return 0;for (var d, p, v = 0, m = -1, g = 0; h > g; g++) {
	        var x = y[g],
	            b = 0 === x || 1 === x ? .5 : 1,
	            w = f.cubicAt(t, n, a, s, x);c > w || (0 > m && (m = f.cubicExtrema(e, r, o, l, _), _[1] < _[0] && m > 1 && i(), d = f.cubicAt(e, r, o, l, _[0]), m > 1 && (p = f.cubicAt(e, r, o, l, _[1]))), v += 2 == m ? x < _[0] ? e > d ? b : -b : x < _[1] ? d > p ? b : -b : p > l ? b : -b : x < _[0] ? e > d ? b : -b : d > l ? b : -b);
	      }return v;
	    }function r(t, e, i, n, r, a, o, s) {
	      if (s > e && s > n && s > a || e > s && n > s && a > s) return 0;var l = f.quadraticRootAt(e, n, a, s, y);if (0 === l) return 0;var c = f.quadraticExtremum(e, n, a);if (c >= 0 && 1 >= c) {
	        for (var u = 0, h = f.quadraticAt(e, n, a, c), d = 0; l > d; d++) {
	          var p = 0 === y[d] || 1 === y[d] ? .5 : 1,
	              v = f.quadraticAt(t, i, r, y[d]);o > v || (u += y[d] < c ? e > h ? p : -p : h > a ? p : -p);
	        }return u;
	      }var p = 0 === y[0] || 1 === y[0] ? .5 : 1,
	          v = f.quadraticAt(t, i, r, y[0]);return o > v ? 0 : e > a ? p : -p;
	    }function a(t, e, i, n, r, a, o, s) {
	      if (s -= e, s > i || -i > s) return 0;var l = Math.sqrt(i * i - s * s);y[0] = -l, y[1] = l;var c = Math.abs(n - r);if (1e-4 > c) return 0;if (1e-4 > c % m) {
	        n = 0, r = m;var u = a ? 1 : -1;return o >= y[0] + t && o <= y[1] + t ? u : 0;
	      }if (a) {
	        var l = n;n = d(r), r = d(l);
	      } else n = d(n), r = d(r);n > r && (r += m);for (var h = 0, f = 0; 2 > f; f++) {
	        var p = y[f];if (p + t > o) {
	          var v = Math.atan2(s, p),
	              u = a ? 1 : -1;0 > v && (v = m + v), (v >= n && r >= v || v + m >= n && r >= v + m) && (v > Math.PI / 2 && v < 1.5 * Math.PI && (u = -u), h += u);
	        }
	      }return h;
	    }function o(t, i, o, l, d) {
	      for (var f = 0, m = 0, g = 0, y = 0, _ = 0, x = 0; x < t[S];) {
	        var b = t[x++];switch (b === s.M && x > 1 && (o || (f += p(m, g, y, _, l, d))), 1 == x && (m = t[x], g = t[x + 1], y = m, _ = g), b) {case s.M:
	            y = t[x++], _ = t[x++], m = y, g = _;break;case s.L:
	            if (o) {
	              if (v(m, g, t[x], t[x + 1], i, l, d)) return !0;
	            } else f += p(m, g, t[x], t[x + 1], l, d) || 0;m = t[x++], g = t[x++];break;case s.C:
	            if (o) {
	              if (c.containStroke(m, g, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], i, l, d)) return !0;
	            } else f += n(m, g, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], l, d) || 0;m = t[x++], g = t[x++];break;case s.Q:
	            if (o) {
	              if (u.containStroke(m, g, t[x++], t[x++], t[x], t[x + 1], i, l, d)) return !0;
	            } else f += r(m, g, t[x++], t[x++], t[x], t[x + 1], l, d) || 0;m = t[x++], g = t[x++];break;case s.A:
	            var w = t[x++],
	                T = t[x++],
	                M = t[x++],
	                A = t[x++],
	                C = t[x++],
	                P = t[x++],
	                L = (t[x++], 1 - t[x++]),
	                z = Math.cos(C) * M + w,
	                k = Math.sin(C) * A + T;x > 1 ? f += p(m, g, z, k, l, d) : (y = z, _ = k);var I = (l - w) * A / M + w;if (o) {
	              if (h.containStroke(w, T, A, C, C + P, L, i, I, d)) return !0;
	            } else f += a(w, T, A, C, C + P, L, I, d);m = Math.cos(C + P) * M + w, g = Math.sin(C + P) * A + T;break;case s.R:
	            y = m = t[x++], _ = g = t[x++];var D = t[x++],
	                R = t[x++],
	                z = y + D,
	                k = _ + R;if (o) {
	              if (v(y, _, z, _, i, l, d) || v(z, _, z, k, i, l, d) || v(z, k, y, k, i, l, d) || v(y, k, y, _, i, l, d)) return !0;
	            } else f += p(z, _, z, k, l, d), f += p(y, k, y, _, l, d);break;case s.Z:
	            if (o) {
	              if (v(m, g, y, _, i, l, d)) return !0;
	            } else f += p(m, g, y, _, l, d);m = y, g = _;}
	      }return o || e(g, _) || (f += p(m, g, y, _, l, d) || 0), 0 !== f;
	    }var s = t("../core/PathProxy").CMD,
	        l = t("./line"),
	        c = t("./cubic"),
	        u = t("./quadratic"),
	        h = t("./arc"),
	        d = t("./util").normalizeRadian,
	        f = t("../core/curve"),
	        p = t("./windingLine"),
	        v = l.containStroke,
	        m = 2 * Math.PI,
	        g = 1e-4,
	        y = [-1, -1, -1],
	        _ = [-1, -1];return { contain: function contain(t, e, i) {
	        return o(t, 0, !1, e, i);
	      }, containStroke: function containStroke(t, e, i, n) {
	        return o(t, e, !0, i, n);
	      } };
	  }), e("zrender/core/LRU", [K], function () {
	    var t = function t() {
	      this.head = null, this.tail = null, this._len = 0;
	    },
	        e = t[O];e.insert = function (t) {
	      var e = new i(t);return this.insertEntry(e), e;
	    }, e.insertEntry = function (t) {
	      this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++;
	    }, e.remove = function (t) {
	      var e = t.prev,
	          i = t.next;e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
	    }, e.len = function () {
	      return this._len;
	    };var i = function i(t) {
	      this.value = t, this.next, this.prev;
	    },
	        n = function n(e) {
	      this._list = new t(), this._map = {}, this._maxSize = e || 10;
	    },
	        r = n[O];return r.put = function (t, e) {
	      var i = this._list,
	          n = this._map;if (null == n[t]) {
	        var r = i.len();if (r >= this._maxSize && r > 0) {
	          var a = i.head;i.remove(a), delete n[a.key];
	        }var o = i.insert(e);o.key = t, n[t] = o;
	      }
	    }, r.get = function (t) {
	      var e = this._map[t],
	          i = this._list;return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0;
	    }, r.clear = function () {
	      this._list.clear(), this._map = {};
	    }, n;
	  }), e("zrender/tool/transformPath", [K, "../core/PathProxy", "../core/vector"], function (t) {
	    function e(t, e) {
	      var n,
	          l,
	          c,
	          u,
	          h,
	          d,
	          f = t.data,
	          p = i.M,
	          v = i.C,
	          m = i.L,
	          g = i.R,
	          y = i.A,
	          _ = i.Q;for (c = 0, u = 0; c < f[S];) {
	        switch (n = f[c++], u = c, l = 0, n) {case p:
	            l = 1;break;case m:
	            l = 1;break;case v:
	            l = 3;break;case _:
	            l = 2;break;case y:
	            var x = e[4],
	                b = e[5],
	                w = o(e[0] * e[0] + e[1] * e[1]),
	                T = o(e[2] * e[2] + e[3] * e[3]),
	                M = s(-e[1] / T, e[0] / w);f[c++] += x, f[c++] += b, f[c++] *= w, f[c++] *= T, f[c++] += M, f[c++] += M, c += 2, u = c;break;case g:
	            d[0] = f[c++], d[1] = f[c++], r(d, d, e), f[u++] = d[0], f[u++] = d[1], d[0] += f[c++], d[1] += f[c++], r(d, d, e), f[u++] = d[0], f[u++] = d[1];}for (h = 0; l > h; h++) {
	          var d = a[h];d[0] = f[c++], d[1] = f[c++], r(d, d, e), f[u++] = d[0], f[u++] = d[1];
	        }
	      }
	    }var i = t("../core/PathProxy").CMD,
	        n = t("../core/vector"),
	        r = n[f],
	        a = [[], [], []],
	        o = Math.sqrt,
	        s = Math.atan2;return e;
	  }), e("zrender/graphic/RadialGradient", [K, "../core/util", "./Gradient"], function (t) {
	    var e = t("../core/util"),
	        i = t("./Gradient"),
	        n = function n(t, e, _n2, r, a) {
	      this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == _n2 ? .5 : _n2, this.type = "radial", this.global = a || !1, i.call(this, r);
	    };return n[O] = { constructor: n }, e[g](n, i), n;
	  }), e("zrender/graphic/Pattern", [K], function () {
	    var t = function t(_t2, e) {
	      this.image = _t2, this.repeat = e, this.type = "pattern";
	    };return t[O].getCanvasPattern = function (t) {
	      return this._canvasPattern || (this._canvasPattern = t.createPattern(this.image, this.repeat));
	    }, t;
	  }), e("zrender/contain/line", [], function () {
	    return { containStroke: function containStroke(t, e, i, n, r, a, o) {
	        if (0 === r) return !1;var s = r,
	            l = 0,
	            c = t;if (o > e + s && o > n + s || e - s > o && n - s > o || a > t + s && a > i + s || t - s > a && i - s > a) return !1;if (t === i) return Math.abs(a - t) <= s / 2;l = (e - n) / (t - i), c = (t * n - i * e) / (t - i);var u = l * a - o + c,
	            h = u * u / (l * l + 1);return s / 2 * s / 2 >= h;
	      } };
	  }), e("zrender/contain/cubic", [K, "../core/curve"], function (t) {
	    var e = t("../core/curve");return { containStroke: function containStroke(t, i, n, r, a, o, s, l, c, u, h) {
	        if (0 === c) return !1;var d = c;if (h > i + d && h > r + d && h > o + d && h > l + d || i - d > h && r - d > h && o - d > h && l - d > h || u > t + d && u > n + d && u > a + d && u > s + d || t - d > u && n - d > u && a - d > u && s - d > u) return !1;var f = e.cubicProjectPoint(t, i, n, r, a, o, s, l, u, h, null);return d / 2 >= f;
	      } };
	  }), e("zrender/contain/quadratic", [K, "../core/curve"], function (t) {
	    var e = t("../core/curve");return { containStroke: function containStroke(t, i, n, r, a, o, s, l, c) {
	        if (0 === s) return !1;var u = s;if (c > i + u && c > r + u && c > o + u || i - u > c && r - u > c && o - u > c || l > t + u && l > n + u && l > a + u || t - u > l && n - u > l && a - u > l) return !1;var h = e.quadraticProjectPoint(t, i, n, r, a, o, l, c, null);return u / 2 >= h;
	      } };
	  }), e("zrender/contain/util", [K], function () {
	    var t = 2 * Math.PI;return { normalizeRadian: function normalizeRadian(e) {
	        return e %= t, 0 > e && (e += t), e;
	      } };
	  }), e("zrender/contain/arc", [K, "./util"], function (t) {
	    var e = t("./util").normalizeRadian,
	        i = 2 * Math.PI;return { containStroke: function containStroke(t, n, r, a, o, s, l, c, u) {
	        if (0 === l) return !1;var h = l;c -= t, u -= n;var d = Math.sqrt(c * c + u * u);if (d - h > r || r > d + h) return !1;if (Math.abs(a - o) % i < 1e-4) return !0;if (s) {
	          var f = a;a = e(o), o = e(f);
	        } else a = e(a), o = e(o);a > o && (o += i);var p = Math.atan2(u, c);return 0 > p && (p += i), p >= a && o >= p || p + i >= a && o >= p + i;
	      } };
	  }), e("zrender/contain/windingLine", [], function () {
	    return function (t, e, i, n, r, a) {
	      if (a > e && a > n || e > a && n > a) return 0;if (n === e) return 0;var o = e > n ? 1 : -1,
	          s = (a - e) / (n - e);(1 === s || 0 === s) && (o = e > n ? .5 : -.5);var l = s * (i - t) + t;return l > r ? o : 0;
	    };
	  }), e("zrender/graphic/helper/poly", [K, "./smoothSpline", "./smoothBezier"], function (t) {
	    var e = t("./smoothSpline"),
	        i = t("./smoothBezier");return { buildPath: function buildPath(t, n, a) {
	        var o = n.points,
	            s = n.smooth;if (o && o[S] >= 2) {
	          if (s && "spline" !== s) {
	            var l = i(o, s, a, n.smoothConstraint);
	            t[r](o[0][0], o[0][1]);for (var c = o[S], u = 0; (a ? c : c - 1) > u; u++) {
	              var h = l[2 * u],
	                  d = l[2 * u + 1],
	                  f = o[(u + 1) % c];t.bezierCurveTo(h[0], h[1], d[0], d[1], f[0], f[1]);
	            }
	          } else {
	            "spline" === s && (o = e(o, a)), t[r](o[0][0], o[0][1]);for (var u = 1, p = o[S]; p > u; u++) {
	              t.lineTo(o[u][0], o[u][1]);
	            }
	          }a && t.closePath();
	        }
	      } };
	  }), e("zrender/Storage", [K, "./core/util", "./core/env", "./container/Group", "./core/timsort"], function (t) {
	    function e(t, e) {
	      return t[w] === e[w] ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t[w] - e[w];
	    }var n = t("./core/util"),
	        r = t("./core/env"),
	        a = t("./container/Group"),
	        o = t("./core/timsort"),
	        s = function s() {
	      this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0;
	    };return s[O] = { constructor: s, traverse: function traverse(t, e) {
	        for (var i = 0; i < this._roots[S]; i++) {
	          this._roots[i].traverse(t, e);
	        }
	      }, getDisplayList: function getDisplayList(t, e) {
	        return e = e || !1, t && this.updateDisplayList(e), this._displayList;
	      }, updateDisplayList: function updateDisplayList(t) {
	        this._displayListLen = 0;for (var i = this._roots, n = this._displayList, a = 0, s = i[S]; s > a; a++) {
	          this._updateAndAddDisplayable(i[a], null, t);
	        }n[S] = this._displayListLen, r[D] && o(n, e);
	      }, _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, n) {
	        if (!t[k] || n) {
	          t.beforeUpdate(), t[i] && t.update(), t.afterUpdate();var r = t.clipPath;if (r && (r.parent = t, r.updateTransform(), e ? (e = e.slice(), e.push(r)) : e = [r]), t.isGroup) {
	            for (var a = t._children, o = 0; o < a[S]; o++) {
	              var s = a[o];t[i] && (s[i] = !0), this._updateAndAddDisplayable(s, e, n);
	            }t[i] = !1;
	          } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
	        }
	      }, addRoot: function addRoot(t) {
	        this._elements[t.id] || (t instanceof a && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t));
	      }, delRoot: function delRoot(t) {
	        if (null == t) {
	          for (var e = 0; e < this._roots[S]; e++) {
	            var i = this._roots[e];i instanceof a && i.delChildrenFromStorage(this);
	          }return this._elements = {}, this._roots = [], this._displayList = [], void (this._displayListLen = 0);
	        }if (t instanceof Array) for (var e = 0, r = t[S]; r > e; e++) {
	          this.delRoot(t[e]);
	        } else {
	          var o;o = (typeof t === "undefined" ? "undefined" : _typeof(t)) == E ? this._elements[t] : t;var s = n[y](this._roots, o);s >= 0 && (this.delFromMap(o.id), this._roots[M](s, 1), o instanceof a && o.delChildrenFromStorage(this));
	        }
	      }, addToMap: function addToMap(t) {
	        return t instanceof a && (t.__storage = this), t.dirty(), this._elements[t.id] = t, this;
	      }, get: function get(t) {
	        return this._elements[t];
	      }, delFromMap: function delFromMap(t) {
	        var e = this._elements,
	            i = e[t];return i && (delete e[t], i instanceof a && (i.__storage = null)), this;
	      }, dispose: function dispose() {
	        this._elements = this._renderList = this._roots = null;
	      }, displayableSortFunc: e }, s;
	  }), e("zrender/Handler", [K, "./core/util", "./mixin/Draggable", "./mixin/Eventful"], function (t) {
	    function e(t, e, i) {
	      return { type: t, event: i, target: e, cancelBubble: !1, offsetX: i.zrX, offsetY: i.zrY, gestureEvent: i.gestureEvent, pinchX: i.pinchX, pinchY: i.pinchY, pinchScale: i.pinchScale, wheelDelta: i.zrDelta };
	    }function i() {}function n(t, e, i) {
	      if (t[t.rectHover ? "rectContain" : m](e, i)) {
	        for (var n = t; n;) {
	          if (n.silent || n.clipPath && !n.clipPath[m](e, i)) return !1;n = n.parent;
	        }return !0;
	      }return !1;
	    }var r = t("./core/util"),
	        a = t("./mixin/Draggable"),
	        o = t("./mixin/Eventful");i[O].dispose = function () {};var s = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove"],
	        l = function l(t, e, n) {
	      o.call(this), this[I] = t, this.painter = e, n = n || new i(), this.proxy = n, n.handler = this, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, a.call(this), r.each(s, function (t) {
	        n.on && n.on(t, this[t], this);
	      }, this);
	    };return l[O] = { constructor: l, mousemove: function mousemove(t) {
	        var e = t.zrX,
	            i = t.zrY,
	            n = this.findHover(e, i, null),
	            r = this._hovered,
	            a = this.proxy;this._hovered = n, a.setCursor && a.setCursor(n ? n.cursor : "default"), r && n !== r && r.__zr && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(n, "mousemove", t), n && n !== r && this.dispatchToElement(n, "mouseover", t);
	      }, mouseout: function mouseout(t) {
	        this.dispatchToElement(this._hovered, "mouseout", t), this.trigger("globalout", { event: t });
	      }, resize: function resize() {
	        this._hovered = null;
	      }, dispatch: function dispatch(t, e) {
	        var i = this[t];i && i.call(this, e);
	      }, dispose: function dispose() {
	        this.proxy.dispose(), this[I] = this.proxy = this.painter = null;
	      }, setCursorStyle: function setCursorStyle(t) {
	        var e = this.proxy;e.setCursor && e.setCursor(t);
	      }, dispatchToElement: function dispatchToElement(t, i, n) {
	        for (var r = "on" + i, a = e(i, t, n), o = t; o && (o[r] && (a.cancelBubble = o[r].call(o, a)), o.trigger(i, a), o = o.parent, !a.cancelBubble);) {}a.cancelBubble || (this.trigger(i, a), this.painter && this.painter.eachOtherLayer(function (t) {
	          _typeof(t[r]) == _ && t[r].call(t, a), t.trigger && t.trigger(i, a);
	        }));
	      }, findHover: function findHover(t, e, i) {
	        for (var r = this[I].getDisplayList(), a = r[S] - 1; a >= 0; a--) {
	          if (!r[a].silent && r[a] !== i && !r[a][k] && n(r[a], t, e)) return r[a];
	        }
	      } }, r.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function (t) {
	      l[O][t] = function (e) {
	        var i = this.findHover(e.zrX, e.zrY, null);if ("mousedown" === t) this._downel = i, this._upel = i;else if ("mosueup" === t) this._upel = i;else if ("click" === t && this._downel !== this._upel) return;this.dispatchToElement(i, t, e);
	      };
	    }), r.mixin(l, o), r.mixin(l, a), l;
	  }), e("zrender/animation/Animation", [K, "../core/util", "../core/event", "./requestAnimationFrame", "./Animator"], function (t) {
	    var e = t("../core/util"),
	        i = t("../core/event").Dispatcher,
	        n = t("./requestAnimationFrame"),
	        r = t("./Animator"),
	        a = function a(t) {
	      t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time = 0, i.call(this);
	    };return a[O] = { constructor: a, addClip: function addClip(t) {
	        this._clips.push(t);
	      }, addAnimator: function addAnimator(t) {
	        t.animation = this;for (var e = t.getClips(), i = 0; i < e[S]; i++) {
	          this.addClip(e[i]);
	        }
	      }, removeClip: function removeClip(t) {
	        var i = e[y](this._clips, t);i >= 0 && this._clips[M](i, 1);
	      }, removeAnimator: function removeAnimator(t) {
	        for (var e = t.getClips(), i = 0; i < e[S]; i++) {
	          this.removeClip(e[i]);
	        }t.animation = null;
	      }, _update: function _update() {
	        for (var t = new Date().getTime(), e = t - this._time, i = this._clips, n = i[S], r = [], a = [], o = 0; n > o; o++) {
	          var s = i[o],
	              l = s.step(t);l && (r.push(l), a.push(s));
	        }for (var o = 0; n > o;) {
	          i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
	        }n = r[S];for (var o = 0; n > o; o++) {
	          a[o].fire(r[o]);
	        }this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
	      }, start: function start() {
	        function t() {
	          e._running && (n(t), e._update());
	        }var e = this;this._running = !0, this._time = new Date().getTime(), n(t);
	      }, stop: function stop() {
	        this._running = !1;
	      }, clear: function clear() {
	        this._clips = [];
	      }, animate: function animate(t, e) {
	        e = e || {};var i = new r(t, e.loop, e.getter, e.setter);return i;
	      } }, e.mixin(a, i), a;
	  }), e("zrender/dom/HandlerProxy", [K, "../core/event", "../core/util", "../mixin/Eventful", "../core/env", "../core/GestureMgr"], function (t) {
	    function e(t) {
	      return "mousewheel" === t && u.browser.firefox ? "DOMMouseScroll" : t;
	    }function i(t, e, i) {
	      var n = t._gestureMgr;"start" === i && n.clear();var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null), t.dom);if ("end" === i && n.clear(), r) {
	        var a = r.type;e.gestureEvent = a, t.handler.dispatchToElement(r[U], a, r.event);
	      }
	    }function n(t) {
	      t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
	        t._touching = !1;
	      }, 700);
	    }function r() {
	      return u.touchEventsSupported;
	    }function a(t) {
	      function e(t, e) {
	        return function () {
	          return e._touching ? void 0 : t.apply(e, arguments);
	        };
	      }for (var i = 0; i < g[S]; i++) {
	        var n = g[i];t._handlers[n] = l.bind(y[n], t);
	      }for (var i = 0; i < m[S]; i++) {
	        var n = m[i];t._handlers[n] = e(y[n], t);
	      }
	    }function o(t) {
	      function i(i, n) {
	        l.each(i, function (i) {
	          d(t, e(i), n._handlers[i]);
	        }, n);
	      }c.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new h(), this._handlers = {}, a(this), r() && i(g, this), i(m, this);
	    }var s = t("../core/event"),
	        l = t("../core/util"),
	        c = t("../mixin/Eventful"),
	        u = t("../core/env"),
	        h = t("../core/GestureMgr"),
	        d = s.addEventListener,
	        f = s.removeEventListener,
	        p = s.normalizeEvent,
	        v = 300,
	        m = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove"],
	        g = ["touchstart", "touchend", "touchmove"],
	        y = { mousemove: function mousemove(t) {
	        t = p(this.dom, t), this.trigger("mousemove", t);
	      }, mouseout: function mouseout(t) {
	        t = p(this.dom, t);var e = t.toElement || t.relatedTarget;if (e != this.dom) for (; e && 9 != e.nodeType;) {
	          if (e === this.dom) return;e = e.parentNode;
	        }this.trigger("mouseout", t);
	      }, touchstart: function touchstart(t) {
	        t = p(this.dom, t), this._lastTouchMoment = new Date(), i(this, t, "start"), y.mousemove.call(this, t), y.mousedown.call(this, t), n(this);
	      }, touchmove: function touchmove(t) {
	        t = p(this.dom, t), i(this, t, "change"), y.mousemove.call(this, t), n(this);
	      }, touchend: function touchend(t) {
	        t = p(this.dom, t), i(this, t, "end"), y.mouseup.call(this, t), +new Date() - this._lastTouchMoment < v && y.click.call(this, t), n(this);
	      } };l.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function (t) {
	      y[t] = function (e) {
	        e = p(this.dom, e), this.trigger(t, e);
	      };
	    });var _ = o[O];return _.dispose = function () {
	      for (var t = m.concat(g), i = 0; i < t[S]; i++) {
	        var n = t[i];f(this.dom, e(n), this._handlers[n]);
	      }
	    }, _.setCursor = function (t) {
	      this.dom.style.cursor = t || "default";
	    }, l.mixin(o, c), o;
	  }), e("zrender/Painter", [K, "./config", "./core/util", "./core/log", "./core/BoundingRect", "./core/timsort", "./Layer", "./animation/requestAnimationFrame", "./graphic/Image"], function (t) {
	    function e(t) {
	      return parseInt(t, 10);
	    }function n(t) {
	      return t ? t.isBuildin ? !0 : _typeof(t[R]) !== _ || _typeof(t.refresh) !== _ ? !1 : !0 : !1;
	    }function r(t) {
	      t.__unusedCount++;
	    }function o(t) {
	      1 == t.__unusedCount && t.clear();
	    }function s(t, e, i) {
	      return A.copy(t[Y]()), t[a] && A[f](t[a]), C.width = e, C[X] = i, !A.intersect(C);
	    }function l(t, e) {
	      if (t == e) return !1;if (!t || !e || t[S] !== e[S]) return !0;for (var i = 0; i < t[S]; i++) {
	        if (t[i] !== e[i]) return !0;
	      }
	    }function u(t, e) {
	      for (var i = 0; i < t[S]; i++) {
	        var n,
	            r = t[i];r[a] && (n = r[a], e[a](n[0], n[1], n[2], n[3], n[4], n[5]));var o = r.path;o.beginPath(e), r.buildPath(o, r.shape), e.clip(), r[a] && (n = r.invTransform, e[a](n[0], n[1], n[2], n[3], n[4], n[5]));
	      }
	    }function h(t, e) {
	      var i = document[c]("div"),
	          n = i.style;return n[V] = "relative", n.overflow = "hidden", n.width = t + "px", n[X] = e + "px", i;
	    }var d = t("./config"),
	        p = t("./core/util"),
	        v = t("./core/log"),
	        m = t("./core/BoundingRect"),
	        g = t("./core/timsort"),
	        x = t("./Layer"),
	        b = t("./animation/requestAnimationFrame"),
	        T = 5,
	        A = new m(0, 0, 0, 0),
	        C = new m(0, 0, 0, 0),
	        P = function P(t, e, i) {
	      var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();i = i || {}, this.dpr = i.devicePixelRatio || d.devicePixelRatio, this._singleCanvas = n, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this[I] = e;var a = this._zlevelList = [],
	          o = this._layers = {};if (this._layerConfig = {}, n) {
	        var s = t.width,
	            l = t[X];this._width = s, this._height = l;var c = new x(t, this, 1);c.initContext(), o[0] = c, a.push(0);
	      } else {
	        this._width = this._getWidth(), this._height = this._getHeight();var u = this._domRoot = h(this._width, this._height);t.appendChild(u);
	      }this.pathToImage = this._createPathToImage(), this._progressiveLayers = [], this._hoverlayer, this._hoverElements = [];
	    };return P[O] = { constructor: P, isSingleCanvas: function isSingleCanvas() {
	        return this._singleCanvas;
	      }, getViewportRoot: function getViewportRoot() {
	        return this._singleCanvas ? this._layers[0].dom : this._domRoot;
	      }, refresh: function refresh(t) {
	        var e = this[I].getDisplayList(!0),
	            i = this._zlevelList;this._paintList(e, t);for (var n = 0; n < i[S]; n++) {
	          var r = i[n],
	              a = this._layers[r];!a.isBuildin && a.refresh && a.refresh();
	        }return this.refreshHover(), this._progressiveLayers[S] && this._startProgessive(), this;
	      }, addHover: function addHover(t, e) {
	        if (!t.__hoverMir) {
	          var i = new t.constructor({ style: t.style, shape: t.shape });i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i);
	        }
	      }, removeHover: function removeHover(t) {
	        var e = t.__hoverMir,
	            i = this._hoverElements,
	            n = p[y](i, e);n >= 0 && i[M](n, 1), t.__hoverMir = null;
	      }, clearHover: function clearHover() {
	        for (var t = this._hoverElements, e = 0; e < t[S]; e++) {
	          var i = t[e].__from;i && (i.__hoverMir = null);
	        }t[S] = 0;
	      }, refreshHover: function refreshHover() {
	        var t = this._hoverElements,
	            e = t[S],
	            i = this._hoverlayer;if (i && i.clear(), e) {
	          g(t, this[I].displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));var n = {};i.ctx.save();for (var r = 0; e > r;) {
	            var o = t[r],
	                s = o.__from;s && s.__zr ? (r++, s.invisible || (o[a] = s[a], o.invTransform = s.invTransform, o.__clipPaths = s.__clipPaths, this._doPaintEl(o, i, !0, n))) : (t[M](r, 1), s.__hoverMir = null, e--);
	          }i.ctx.restore();
	        }
	      }, _startProgessive: function _startProgessive() {
	        function t() {
	          i === e._progressiveToken && e[I] && (e._doPaintList(e[I].getDisplayList()), e._furtherProgressive ? (e._progress++, b(t)) : e._progressiveToken = -1);
	        }var e = this;if (e._furtherProgressive) {
	          var i = e._progressiveToken = +new Date();e._progress++, b(t);
	        }
	      }, _clearProgressive: function _clearProgressive() {
	        this._progressiveToken = -1, this._progress = 0, p.each(this._progressiveLayers, function (t) {
	          t[i] && t.clear();
	        });
	      }, _paintList: function _paintList(t, e) {
	        null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuildinLayer(r), this._doPaintList(t, e), this.eachBuildinLayer(o);
	      }, _doPaintList: function _doPaintList(t, e) {
	        function n(t) {
	          o.save(), o.globalAlpha = 1, o.shadowBlur = 0, r[i] = !0, o.drawImage(t.dom, 0, 0, h, d), o.restore(), r.ctx.restore();
	        }for (var r, a, o, s, l, c, u = 0, h = this._width, d = this._height, f = this._progress, m = 0, g = t[S]; g > m; m++) {
	          var y = t[m],
	              _ = this._singleCanvas ? 0 : y[w],
	              x = y.__frame;if (0 > x && l && (n(l), l = null), a !== _ && (o && o.restore(), s = {}, a = _, r = this.getLayer(a), r.isBuildin || v("ZLevel " + a + " has been used by unkown layer " + r.id), o = r.ctx, o.save(), r.__unusedCount = 0, (r[i] || e) && r.clear()), r[i] || e) {
	            if (x >= 0) {
	              if (!l) {
	                if (l = this._progressiveLayers[Math.min(u++, T - 1)], l.ctx.save(), l.renderScope = {}, l && l.__progress > l.__maxProgress) {
	                  m = l.__nextIdxNotProg - 1;continue;
	                }c = l.__progress, l[i] || (f = c), l.__progress = f + 1;
	              }x === f && this._doPaintEl(y, l, !0, l.renderScope);
	            } else this._doPaintEl(y, r, e, s);y[i] = !1;
	          }
	        }l && n(l), o && o.restore(), this._furtherProgressive = !1, p.each(this._progressiveLayers, function (t) {
	          t.__maxProgress >= t.__progress && (this._furtherProgressive = !0);
	        }, this);
	      }, _doPaintEl: function _doPaintEl(t, e, n, r) {
	        var a = e.ctx;if ((e[i] || n) && !t.invisible && 0 !== t.style[N] && t.scale[0] && t.scale[1] && (!t.culling || !s(t, this._width, this._height))) {
	          var o = t.__clipPaths;(r.prevClipLayer !== e || l(o, r.prevElClipPaths)) && (r.prevElClipPaths && (r.prevClipLayer.ctx.restore(), r.prevClipLayer = r.prevElClipPaths = null, r.prevEl = null), o && (a.save(), u(o, a), r.prevClipLayer = e, r.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(a), t.brush(a, r.prevEl || null), r.prevEl = t, t.afterBrush && t.afterBrush(a);
	        }
	      }, getLayer: function getLayer(t) {
	        if (this._singleCanvas) return this._layers[0];var e = this._layers[t];return e || (e = new x("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && p.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e;
	      }, insertLayer: function insertLayer(t, e) {
	        var i = this._layers,
	            r = this._zlevelList,
	            a = r[S],
	            o = null,
	            s = -1,
	            l = this._domRoot;if (i[t]) return void v("ZLevel " + t + " has been used already");if (!n(e)) return void v("Layer of zlevel " + t + " is not valid");if (a > 0 && t > r[0]) {
	          for (s = 0; a - 1 > s && !(r[s] < t && r[s + 1] > t); s++) {}o = i[r[s]];
	        }if (r[M](s + 1, 0, t), o) {
	          var c = o.dom;c.nextSibling ? l.insertBefore(e.dom, c.nextSibling) : l.appendChild(e.dom);
	        } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);i[t] = e;
	      }, eachLayer: function eachLayer(t, e) {
	        var i,
	            n,
	            r = this._zlevelList;for (n = 0; n < r[S]; n++) {
	          i = r[n], t.call(e, this._layers[i], i);
	        }
	      }, eachBuildinLayer: function eachBuildinLayer(t, e) {
	        var i,
	            n,
	            r,
	            a = this._zlevelList;for (r = 0; r < a[S]; r++) {
	          n = a[r], i = this._layers[n], i.isBuildin && t.call(e, i, n);
	        }
	      }, eachOtherLayer: function eachOtherLayer(t, e) {
	        var i,
	            n,
	            r,
	            a = this._zlevelList;for (r = 0; r < a[S]; r++) {
	          n = a[r], i = this._layers[n], i.isBuildin || t.call(e, i, n);
	        }
	      }, getLayers: function getLayers() {
	        return this._layers;
	      }, _updateLayerStatus: function _updateLayerStatus(t) {
	        var e = this._layers,
	            n = this._progressiveLayers,
	            r = {},
	            a = {};this.eachBuildinLayer(function (t, e) {
	          r[e] = t.elCount, t.elCount = 0, t[i] = !1;
	        }), p.each(n, function (t, e) {
	          a[e] = t.elCount, t.elCount = 0, t[i] = !1;
	        });for (var o, s, l = 0, c = 0, u = 0, h = t[S]; h > u; u++) {
	          var d = t[u],
	              f = this._singleCanvas ? 0 : d[w],
	              v = e[f],
	              m = d.progressive;if (v && (v.elCount++, v[i] = v[i] || d[i]), m >= 0) {
	            s !== m && (s = m, c++);var g = d.__frame = c - 1;if (!o) {
	              var y = Math.min(l, T - 1);o = n[y], o || (o = n[y] = new x("progressive", this, this.dpr), o.initContext()), o.__maxProgress = 0;
	            }o[i] = o[i] || d[i], o.elCount++, o.__maxProgress = Math.max(o.__maxProgress, g), o.__maxProgress >= o.__progress && (v[i] = !0);
	          } else d.__frame = -1, o && (o.__nextIdxNotProg = u, l++, o = null);
	        }o && (l++, o.__nextIdxNotProg = u), this.eachBuildinLayer(function (t, e) {
	          r[e] !== t.elCount && (t[i] = !0);
	        }), n[S] = Math.min(l, T), p.each(n, function (t, e) {
	          a[e] !== t.elCount && (d[i] = !0), t[i] && (t.__progress = 0);
	        });
	      }, clear: function clear() {
	        return this.eachBuildinLayer(this._clearLayer), this;
	      }, _clearLayer: function _clearLayer(t) {
	        t.clear();
	      }, configLayer: function configLayer(t, e) {
	        if (e) {
	          var i = this._layerConfig;i[t] ? p.merge(i[t], e, !0) : i[t] = e;var n = this._layers[t];n && p.merge(n, i[t], !0);
	        }
	      }, delLayer: function delLayer(t) {
	        var e = this._layers,
	            i = this._zlevelList,
	            n = e[t];n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i[M](p[y](i, t), 1));
	      }, resize: function resize(t, e) {
	        var i = this._domRoot;if (i.style.display = "none", t = t || this._getWidth(), e = e || this._getHeight(), i.style.display = "", this._width != t || e != this._height) {
	          i.style.width = t + "px", i.style[X] = e + "px";for (var n in this._layers) {
	            this._layers[n][R](t, e);
	          }this.refresh(!0);
	        }return this._width = t, this._height = e, this;
	      }, clearLayer: function clearLayer(t) {
	        var e = this._layers[t];e && e.clear();
	      }, dispose: function dispose() {
	        this.root.innerHTML = "", this.root = this[I] = this._domRoot = this._layers = null;
	      }, getRenderedCanvas: function getRenderedCanvas(t) {
	        if (t = t || {}, this._singleCanvas) return this._layers[0].dom;var e = new x("image", this, t.pixelRatio || this.dpr);e.initContext(), e.clearColor = t.backgroundColor, e.clear();for (var i = this[I].getDisplayList(!0), n = {}, r = 0; r < i[S]; r++) {
	          var a = i[r];this._doPaintEl(a, e, !0, n);
	        }return e.dom;
	      }, getWidth: function getWidth() {
	        return this._width;
	      }, getHeight: function getHeight() {
	        return this._height;
	      }, _getWidth: function _getWidth() {
	        var t = this.root,
	            i = document.defaultView.getComputedStyle(t);return (t.clientWidth || e(i.width) || e(t.style.width)) - (e(i.paddingLeft) || 0) - (e(i.paddingRight) || 0) | 0;
	      }, _getHeight: function _getHeight() {
	        var t = this.root,
	            i = document.defaultView.getComputedStyle(t);return (t.clientHeight || e(i[X]) || e(t.style[X])) - (e(i.paddingTop) || 0) - (e(i.paddingBottom) || 0) | 0;
	      }, _pathToImage: function _pathToImage(e, i, n, r, a) {
	        var o = document[c]("canvas"),
	            s = o.getContext("2d");o.width = n * a, o[X] = r * a, s.clearRect(0, 0, n * a, r * a);var l = { position: i[V], rotation: i.rotation, scale: i.scale };i[V] = [0, 0, 0], i.rotation = 0, i.scale = [1, 1], i && i.brush(s);var u = t("./graphic/Image"),
	            h = new u({ id: e, style: { x: 0, y: 0, image: o } });return null != l[V] && (h[V] = i[V] = l[V]), null != l.rotation && (h.rotation = i.rotation = l.rotation), null != l.scale && (h.scale = i.scale = l.scale), h;
	      }, _createPathToImage: function _createPathToImage() {
	        var t = this;return function (e, i, n, r) {
	          return t._pathToImage(e, i, n, r, t.dpr);
	        };
	      } }, P;
	  }), e("zrender/graphic/helper/smoothSpline", [K, "../../core/vector"], function (t) {
	    function e(t, e, i, n, r, a, o) {
	      var s = .5 * (i - t),
	          l = .5 * (n - e);return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
	    }var i = t("../../core/vector");return function (t, n) {
	      for (var r = t[S], a = [], o = 0, s = 1; r > s; s++) {
	        o += i.distance(t[s - 1], t[s]);
	      }var l = o / 2;l = r > l ? r : l;for (var s = 0; l > s; s++) {
	        var c,
	            u,
	            h,
	            d = s / (l - 1) * (n ? r : r - 1),
	            f = Math.floor(d),
	            p = d - f,
	            v = t[f % r];n ? (c = t[(f - 1 + r) % r], u = t[(f + 1) % r], h = t[(f + 2) % r]) : (c = t[0 === f ? f : f - 1], u = t[f > r - 2 ? r - 1 : f + 1], h = t[f > r - 3 ? r - 1 : f + 2]);var m = p * p,
	            g = p * m;a.push([e(c[0], v[0], u[0], h[0], p, m, g), e(c[1], v[1], u[1], h[1], p, m, g)]);
	      }return a;
	    };
	  }), e("zrender/graphic/helper/smoothBezier", [K, "../../core/vector"], function (t) {
	    var e = t("../../core/vector"),
	        i = e.min,
	        n = e.max,
	        r = e.scale,
	        a = e.distance,
	        o = e.add;return function (t, s, l, c) {
	      var u,
	          h,
	          d,
	          f,
	          p = [],
	          v = [],
	          m = [],
	          g = [];if (c) {
	        d = [1 / 0, 1 / 0], f = [-1 / 0, -1 / 0];for (var y = 0, _ = t[S]; _ > y; y++) {
	          i(d, d, t[y]), n(f, f, t[y]);
	        }i(d, d, c[0]), n(f, f, c[1]);
	      }for (var y = 0, _ = t[S]; _ > y; y++) {
	        var x = t[y];if (l) u = t[y ? y - 1 : _ - 1], h = t[(y + 1) % _];else {
	          if (0 === y || y === _ - 1) {
	            p.push(e.clone(t[y]));continue;
	          }u = t[y - 1], h = t[y + 1];
	        }e.sub(v, h, u), r(v, v, s);var b = a(x, u),
	            w = a(x, h),
	            T = b + w;0 !== T && (b /= T, w /= T), r(m, v, -b), r(g, v, w);var M = o([], x, m),
	            A = o([], x, g);c && (n(M, M, d), i(M, M, f), n(A, A, d), i(A, A, f)), p.push(M), p.push(A);
	      }return l && p.push(p.shift()), p;
	    };
	  }), e("zrender/mixin/Draggable", [K], function () {
	    function t() {
	      this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
	    }return t[O] = { constructor: t, _dragStart: function _dragStart(t) {
	        var e = t[U];e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(e, "dragstart", t.event));
	      }, _drag: function _drag(t) {
	        var e = this._draggingTarget;if (e) {
	          var i = t.offsetX,
	              n = t.offsetY,
	              r = i - this._x,
	              a = n - this._y;this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(e, "drag", t.event);var o = this.findHover(i, n, e),
	              s = this._dropTarget;this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(s, "dragleave", t.event), o && o !== s && this.dispatchToElement(o, "dragenter", t.event));
	        }
	      }, _dragEnd: function _dragEnd(t) {
	        var e = this._draggingTarget;e && (e.dragging = !1), this.dispatchToElement(e, "dragend", t.event), this._dropTarget && this.dispatchToElement(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
	      } }, t;
	  }), e("zrender/graphic/helper/roundRect", [K], function () {
	    return { buildPath: function buildPath(t, e) {
	        var i,
	            n,
	            a,
	            o,
	            s = e.x,
	            l = e.y,
	            c = e.width,
	            u = e[X],
	            h = e.r;0 > c && (s += c, c = -c), 0 > u && (l += u, u = -u), "number" == typeof h ? i = n = a = o = h : h instanceof Array ? 1 === h[S] ? i = n = a = o = h[0] : 2 === h[S] ? (i = a = h[0], n = o = h[1]) : 3 === h[S] ? (i = h[0], n = o = h[1], a = h[2]) : (i = h[0], n = h[1], a = h[2], o = h[3]) : i = n = a = o = 0;var d;i + n > c && (d = i + n, i *= c / d, n *= c / d), a + o > c && (d = a + o, a *= c / d, o *= c / d), n + a > u && (d = n + a, n *= u / d, a *= u / d), i + o > u && (d = i + o, i *= u / d, o *= u / d), t[r](s + i, l), t.lineTo(s + c - n, l), 0 !== n && t.quadraticCurveTo(s + c, l, s + c, l + n), t.lineTo(s + c, l + u - a), 0 !== a && t.quadraticCurveTo(s + c, l + u, s + c - a, l + u), t.lineTo(s + o, l + u), 0 !== o && t.quadraticCurveTo(s, l + u, s, l + u - o), t.lineTo(s, l + i), 0 !== i && t.quadraticCurveTo(s, l, s + i, l);
	      } };
	  }), e("zrender/core/event", [K, "../mixin/Eventful"], function (t) {
	    function e(t) {
	      return t.getBoundingClientRect ? t.getBoundingClientRect() : { left: 0, top: 0 };
	    }function i(t, i, n) {
	      var r = e(t);return n = n || {}, n.zrX = i.clientX - r.left, n.zrY = i.clientY - r.top, n;
	    }function r(t, e) {
	      if (e = e || window.event, null != e.zrX) return e;var n = e.type,
	          r = n && n[y]("touch") >= 0;if (r) {
	        var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];a && i(t, a, e);
	      } else i(t, e, e), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;return e;
	    }function a(t, e, i) {
	      l ? t.addEventListener(e, i) : t.attachEvent("on" + e, i);
	    }function o(t, e, i) {
	      l ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i);
	    }var s = t("../mixin/Eventful"),
	        l = (typeof window === "undefined" ? "undefined" : _typeof(window)) !== n && !!window.addEventListener,
	        c = l ? function (t) {
	      t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
	    } : function (t) {
	      t.returnValue = !1, t.cancelBubble = !0;
	    };return { clientToLocal: i, normalizeEvent: r, addEventListener: a, removeEventListener: o, stop: c, Dispatcher: s };
	  }), e("zrender/animation/requestAnimationFrame", [K], function () {
	    return (typeof window === "undefined" ? "undefined" : _typeof(window)) !== n && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
	      setTimeout(t, 16);
	    };
	  }), e("zrender/core/GestureMgr", [K, "./event"], function (t) {
	    function e(t) {
	      var e = t[1][0] - t[0][0],
	          i = t[1][1] - t[0][1];return Math.sqrt(e * e + i * i);
	    }function i(t) {
	      return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
	    }var n = t("./event"),
	        r = function r() {
	      this._track = [];
	    };r[O] = { constructor: r, recognize: function recognize(t, e, i) {
	        return this._doTrack(t, e, i), this._recognize(t);
	      }, clear: function clear() {
	        return this._track[S] = 0, this;
	      }, _doTrack: function _doTrack(t, e, i) {
	        var r = t.touches;if (r) {
	          for (var a = { points: [], touches: [], target: e, event: t }, o = 0, s = r[S]; s > o; o++) {
	            var l = r[o],
	                c = n.clientToLocal(i, l);a.points.push([c.zrX, c.zrY]), a.touches.push(l);
	          }this._track.push(a);
	        }
	      }, _recognize: function _recognize(t) {
	        for (var e in a) {
	          if (a.hasOwnProperty(e)) {
	            var i = a[e](this._track, t);if (i) return i;
	          }
	        }
	      } };var a = { pinch: function pinch(t, n) {
	        var r = t[S];if (r) {
	          var a = (t[r - 1] || {}).points,
	              o = (t[r - 2] || {}).points || a;if (o && o[S] > 1 && a && a[S] > 1) {
	            var s = e(a) / e(o);!isFinite(s) && (s = 1), n.pinchScale = s;var l = i(a);return n.pinchX = l[0], n.pinchY = l[1], { type: "pinch", target: t[0][U], event: n };
	          }
	        }
	      } };return r;
	  }), e("zrender/Layer", [K, "./core/util", "./config", "./graphic/Style", "./graphic/Pattern"], function (t) {
	    function e() {
	      return !1;
	    }function i(t, e, i, n) {
	      var r = document[c](e),
	          a = i[j](),
	          o = i[W](),
	          s = r.style;return s[V] = "absolute", s.left = 0, s.top = 0, s.width = a + "px", s[X] = o + "px", r.width = a * n, r[X] = o * n, r.setAttribute("data-zr-dom-id", t), r;
	    }var n = t("./core/util"),
	        r = t("./config"),
	        a = t("./graphic/Style"),
	        o = t("./graphic/Pattern"),
	        s = function s(t, a, o) {
	      var s;o = o || r.devicePixelRatio, (typeof t === "undefined" ? "undefined" : _typeof(t)) === E ? s = i(t, "canvas", a, o) : n[P](t) && (s = t, t = s.id), this.id = t, this.dom = s;var l = s.style;l && (s.onselectstart = e, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"), this.domBack = null, this.ctxBack = null, this.painter = a, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = o;
	    };return s[O] = { constructor: s, elCount: 0, __dirty: !0, initContext: function initContext() {
	        this.ctx = this.dom.getContext("2d");var t = this.dpr;1 != t && this.ctx.scale(t, t);
	      }, createBackBuffer: function createBackBuffer() {
	        var t = this.dpr;this.domBack = i("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t);
	      }, resize: function resize(t, e) {
	        var i = this.dpr,
	            n = this.dom,
	            r = n.style,
	            a = this.domBack;r.width = t + "px", r[X] = e + "px", n.width = t * i, n[X] = e * i, 1 != i && this.ctx.scale(i, i), a && (a.width = t * i, a[X] = e * i, 1 != i && this.ctxBack.scale(i, i));
	      }, clear: function clear(t) {
	        var e = this.dom,
	            i = this.ctx,
	            n = e.width,
	            r = e[X],
	            s = this.clearColor,
	            l = this.motionBlur && !t,
	            c = this.lastFrameAlpha,
	            u = this.dpr;if (l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / u, r / u)), i.clearRect(0, 0, n / u, r / u), s) {
	          var h;s.colorStops ? (h = s.__canvasGradient || a.getGradient(i, s, { x: 0, y: 0, width: n / u, height: r / u }), s.__canvasGradient = h) : s.image && (h = o[O].getCanvasPattern.call(s, i)), i.save(), i.fillStyle = h || s, i.fillRect(0, 0, n / u, r / u), i.restore();
	        }if (l) {
	          var d = this.domBack;i.save(), i.globalAlpha = c, i.drawImage(d, 0, 0, n / u, r / u), i.restore();
	        }
	      } }, s;
	  }), e("echarts/preprocessor/helper/compatStyle", [K, F], function (t) {
	    function e(t) {
	      var e = t && t.itemStyle;e && i.each(n, function (n) {
	        var r = e[h],
	            a = e.emphasis;r && r[n] && (t[n] = t[n] || {}, t[n][h] ? i.merge(t[n][h], r[n]) : t[n][h] = r[n], r[n] = null), a && a[n] && (t[n] = t[n] || {}, t[n].emphasis ? i.merge(t[n].emphasis, a[n]) : t[n].emphasis = a[n], a[n] = null);
	      });
	    }var i = t(F),
	        n = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];return function (t) {
	      if (t) {
	        e(t), e(t.markPoint), e(t.markLine);var n = t.data;if (n) {
	          for (var r = 0; r < n[S]; r++) {
	            e(n[r]);
	          }var a = t.markPoint;if (a && a.data) for (var o = a.data, r = 0; r < o[S]; r++) {
	            e(o[r]);
	          }var s = t.markLine;if (s && s.data) for (var l = s.data, r = 0; r < l[S]; r++) {
	            i[x](l[r]) ? (e(l[r][0]), e(l[r][1])) : e(l[r]);
	          }
	        }
	      }
	    };
	  }), e("echarts/data/DataDiffer", [K], function () {
	    function t(t) {
	      return t;
	    }function e(e, i, n, r) {
	      this._old = e, this._new = i, this._oldKeyGetter = n || t, this._newKeyGetter = r || t;
	    }function i(t, e, i, n) {
	      for (var r = 0; r < t[S]; r++) {
	        var a = n(t[r], r),
	            o = e[a];null == o ? (i.push(a), e[a] = r) : (o[S] || (e[a] = o = [o]), o.push(r));
	      }
	    }return e[O] = { constructor: e, add: function add(t) {
	        return this._add = t, this;
	      }, update: function update(t) {
	        return this._update = t, this;
	      }, remove: function remove(t) {
	        return this._remove = t, this;
	      }, execute: function execute() {
	        var t,
	            e = this._old,
	            n = this._new,
	            r = this._oldKeyGetter,
	            a = this._newKeyGetter,
	            o = {},
	            s = {},
	            l = [],
	            c = [];for (i(e, o, l, r), i(n, s, c, a), t = 0; t < e[S]; t++) {
	          var u = l[t],
	              h = s[u];if (null != h) {
	            var d = h[S];d ? (1 === d && (s[u] = null), h = h.unshift()) : s[u] = null, this._update && this._update(h, t);
	          } else this._remove && this._remove(t);
	        }for (var t = 0; t < c[S]; t++) {
	          var u = c[t];if (s.hasOwnProperty(u)) {
	            var h = s[u];if (null == h) continue;if (h[S]) for (var f = 0, d = h[S]; d > f; f++) {
	              this._add && this._add(h[f]);
	            } else this._add && this._add(h);
	          }
	        }
	      } }, e;
	  }), e("echarts/coord/radar/Radar", [K, F, "./IndicatorAxis", "../../scale/Interval", "../../util/number", "../axisHelper", "../../CoordinateSystem"], function (t) {
	    function e(t, e, a) {
	      this._model = t, this.dimensions = [], this._indicatorAxes = i.map(t.getIndicatorModels(), function (t, e) {
	        var i = "indicator_" + e,
	            a = new n(i, new r());return a.name = t.get("name"), a.model = t, t.axis = a, this.dimensions.push(i), a;
	      }, this), this[R](t, a), this.cx, this.cy, this.r, this.startAngle;
	    }var i = t(F),
	        n = t("./IndicatorAxis"),
	        r = t("../../scale/Interval"),
	        a = t("../../util/number"),
	        o = t("../axisHelper");return e[O].getIndicatorAxes = function () {
	      return this._indicatorAxes;
	    }, e[O].dataToPoint = function (t, e) {
	      var i = this._indicatorAxes[e];return this.coordToPoint(i.dataToCoord(t), e);
	    }, e[O].coordToPoint = function (t, e) {
	      var i = this._indicatorAxes[e],
	          n = i.angle,
	          r = this.cx + t * Math.cos(n),
	          a = this.cy - t * Math.sin(n);return [r, a];
	    }, e[O].pointToData = function (t) {
	      var e = t[0] - this.cx,
	          i = t[1] - this.cy,
	          n = Math.sqrt(e * e + i * i);e /= n, i /= n;for (var r, a = Math.atan2(-i, e), o = 1 / 0, s = -1, l = 0; l < this._indicatorAxes[S]; l++) {
	        var c = this._indicatorAxes[l],
	            u = Math.abs(a - c.angle);o > u && (r = c, s = l, o = u);
	      }return [s, +(r && r.coodToData(n))];
	    }, e[O][R] = function (t, e) {
	      var n = t.get(G),
	          r = e[j](),
	          o = e[W](),
	          s = Math.min(r, o) / 2;this.cx = a.parsePercent(n[0], r), this.cy = a.parsePercent(n[1], o), this.startAngle = t.get("startAngle") * Math.PI / 180, this.r = a.parsePercent(t.get(l), s), i.each(this._indicatorAxes, function (t, e) {
	        t.setExtent(0, this.r);var i = this.startAngle + e * Math.PI * 2 / this._indicatorAxes[S];i = Math.atan2(Math.sin(i), Math.cos(i)), t.angle = i;
	      }, this);
	    }, e[O].update = function (t) {
	      function e(t) {
	        var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
	            i = t / e;return 2 === i ? i = 5 : i *= 2, i * e;
	      }var n = this._indicatorAxes,
	          r = this._model;i.each(n, function (t) {
	        t.scale.setExtent(1 / 0, -1 / 0);
	      }), t.eachSeriesByType("radar", function (e) {
	        if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === r) {
	          var a = e[L]();i.each(n, function (t) {
	            t.scale.unionExtent(a.getDataExtent(t.dim));
	          });
	        }
	      }, this);var s = r.get("splitNumber");i.each(n, function (t) {
	        var i = o.getScaleExtent(t, t.model);o.niceScaleExtent(t, t.model);var n = t.model,
	            r = t.scale,
	            l = n.get("min"),
	            c = n.get("max"),
	            u = r.getInterval();if (null != l && null != c) r.setInterval((c - l) / s);else if (null != l) {
	          var h;do {
	            h = l + u * s, r.setExtent(+l, h), r.setInterval(u), u = e(u);
	          } while (h < i[1] && isFinite(h) && isFinite(i[1]));
	        } else if (null != c) {
	          var d;do {
	            d = c - u * s, r.setExtent(d, +c), r.setInterval(u), u = e(u);
	          } while (d > i[0] && isFinite(d) && isFinite(i[0]));
	        } else {
	          var f = r[v]()[S] - 1;f > s && (u = e(u));var p = Math.round((i[0] + i[1]) / 2 / u) * u,
	              m = Math.round(s / 2);r.setExtent(a.round(p - m * u), a.round(p + (s - m) * u)), r.setInterval(u);
	        }
	      });
	    }, e.dimensions = [], e[z] = function (t, i) {
	      var n = [];return t.eachComponent("radar", function (r) {
	        var a = new e(r, t, i);n.push(a), r.coordinateSystem = a;
	      }), t.eachSeriesByType("radar", function (t) {
	        "radar" === t.get("coordinateSystem") && (t.coordinateSystem = n[t.get("radarIndex") || 0]);
	      }), n;
	    }, t("../../CoordinateSystem").register("radar", e), e;
	  }), e("echarts/component/radar/RadarView", [K, "../axis/AxisBuilder", F, "../../util/graphic", "../../echarts"], function (t) {
	    var e = t("../axis/AxisBuilder"),
	        i = t(F),
	        n = t("../../util/graphic"),
	        r = ["axisLine", "axisLabel", "axisTick", "axisName"];return t("../../echarts").extendComponentView({ type: "radar", render: function render(t) {
	        var e = this.group;e.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t);
	      }, _buildAxes: function _buildAxes(t) {
	        var n = t.coordinateSystem,
	            a = n.getIndicatorAxes(),
	            o = i.map(a, function (t) {
	          var i = new e(t.model, { position: [n.cx, n.cy], rotation: t.angle, labelDirection: -1, tickDirection: -1, nameDirection: 1 });return i;
	        });i.each(o, function (t) {
	          i.each(r, t.add, t), this.group.add(t.getGroup());
	        }, this);
	      }, _buildSplitLineAndArea: function _buildSplitLineAndArea(t) {
	        function e(t, e, i) {
	          var n = i % e[S];return t[n] = t[n] || [], n;
	        }var r = t.coordinateSystem,
	            a = t.get("splitNumber"),
	            o = r.getIndicatorAxes();if (o[S]) {
	          var s = t.get("shape"),
	              l = t[Q]("splitLine"),
	              c = t[Q]("splitArea"),
	              u = l[Q]("lineStyle"),
	              h = c[Q]("areaStyle"),
	              d = l.get("show"),
	              f = c.get("show"),
	              p = u.get("color"),
	              v = h.get("color");p = i[x](p) ? p : [p], v = i[x](v) ? v : [v];var m = [],
	              g = [];if ("circle" === s) for (var y = o[0].getTicksCoords(), _ = r.cx, b = r.cy, w = 0; w < y[S]; w++) {
	            if (d) {
	              var T = e(m, p, w);m[T].push(new n.Circle({ shape: { cx: _, cy: b, r: y[w] } }));
	            }if (f && w < y[S] - 1) {
	              var T = e(g, v, w);g[T].push(new n.Ring({ shape: { cx: _, cy: b, r0: y[w], r: y[w + 1] } }));
	            }
	          } else for (var M = i.map(o, function (t, e) {
	            var n = t.getTicksCoords();return i.map(n, function (t) {
	              return r.coordToPoint(t, e);
	            });
	          }), C = [], w = 0; a >= w; w++) {
	            for (var P = [], L = 0; L < o[S]; L++) {
	              P.push(M[L][w]);
	            }if (P.push(P[0].slice()), d) {
	              var T = e(m, p, w);m[T].push(new n.Polyline({ shape: { points: P } }));
	            }if (f && C) {
	              var T = e(g, v, w - 1);g[T].push(new n.Polygon({ shape: { points: P.concat(C) } }));
	            }C = P.slice().reverse();
	          }var z = u.getLineStyle(),
	              k = h.getAreaStyle();i.each(g, function (t, e) {
	            this.group.add(n.mergePath(t, { style: i[A]({ stroke: "none", fill: v[e % v[S]] }, k), silent: !0 }));
	          }, this), i.each(m, function (t, e) {
	            this.group.add(n.mergePath(t, { style: i[A]({ fill: "none", stroke: p[e % p[S]] }, z), silent: !0 }));
	          }, this);
	        }
	      } });
	  }), e("echarts/component/axis/AngleAxisView", [K, F, "../../util/graphic", "../../model/Model", "../../echarts"], function (t) {
	    function e(t, e, i, n) {
	      var r = t.coordToPoint([e, n]),
	          a = t.coordToPoint([i, n]);return { x1: r[0], y1: r[1], x2: a[0], y2: a[1] };
	    }var i = t(F),
	        n = t("../../util/graphic"),
	        r = t("../../model/Model"),
	        a = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];t("../../echarts").extendComponentView({ type: "angleAxis", render: function render(t, e) {
	        if (this.group.removeAll(), t.get("show")) {
	          var n = e.getComponent("polar", t.get("polarIndex")),
	              r = t.axis,
	              o = n.coordinateSystem,
	              l = o.getRadiusAxis()[p](),
	              c = r.getTicksCoords();r.type !== s && c.pop(), i.each(a, function (e) {
	            t.get(e + ".show") && this["_" + e](t, o, c, l);
	          }, this);
	        }
	      }, _axisLine: function _axisLine(t, e, i, r) {
	        var a = t[Q]("axisLine.lineStyle"),
	            o = new n.Circle({ shape: { cx: e.cx, cy: e.cy, r: r[1] }, style: a.getLineStyle(), z2: 1, silent: !0 });
	        o.style.fill = null, this.group.add(o);
	      }, _axisTick: function _axisTick(t, r, a, o) {
	        var s = t[Q]("axisTick"),
	            l = (s.get("inside") ? -1 : 1) * s.get(S),
	            c = i.map(a, function (t) {
	          return new n.Line({ shape: e(r, o[1], o[1] + l, t) });
	        });this.group.add(n.mergePath(c, { style: i[A](s[Q]("lineStyle").getLineStyle(), { stroke: t.get("axisLine.lineStyle.color") }) }));
	      }, _axisLabel: function _axisLabel(t, e, i, a) {
	        for (var o = t.axis, s = t.get("data"), l = t[Q]("axisLabel"), c = l[Q]($), u = t.getFormattedLabels(), h = l.get("margin"), d = o.getLabelsCoords(), f = 0; f < i[S]; f++) {
	          var p = a[1],
	              v = e.coordToPoint([p + h, d[f]]),
	              m = e.cx,
	              g = e.cy,
	              y = Math.abs(v[0] - m) / p < .3 ? G : v[0] > m ? "left" : "right",
	              _ = Math.abs(v[1] - g) / p < .3 ? q : v[1] > g ? "top" : H,
	              x = c;s && s[f] && s[f][$] && (x = new r(s[f][$], c)), this.group.add(new n.Text({ style: { x: v[0], y: v[1], fill: x.getTextColor() || t.get("axisLine.lineStyle.color"), text: u[f], textAlign: y, textVerticalAlign: _, textFont: x[Z]() }, silent: !0 }));
	        }
	      }, _splitLine: function _splitLine(t, r, a, o) {
	        var s = t[Q]("splitLine"),
	            l = s[Q]("lineStyle"),
	            c = l.get("color"),
	            u = 0;c = c instanceof Array ? c : [c];for (var h = [], d = 0; d < a[S]; d++) {
	          var f = u++ % c[S];h[f] = h[f] || [], h[f].push(new n.Line({ shape: e(r, o[0], o[1], a[d]) }));
	        }for (var d = 0; d < h[S]; d++) {
	          this.group.add(n.mergePath(h[d], { style: i[A]({ stroke: c[d % c[S]] }, l.getLineStyle()), silent: !0, z: t.get("z") }));
	        }
	      }, _splitArea: function _splitArea(t, e, r, a) {
	        var o = t[Q]("splitArea"),
	            s = o[Q]("areaStyle"),
	            l = s.get("color"),
	            c = 0;l = l instanceof Array ? l : [l];for (var u = [], h = Math.PI / 180, d = -r[0] * h, f = Math.min(a[0], a[1]), p = Math.max(a[0], a[1]), v = t.get("clockwise"), m = 1; m < r[S]; m++) {
	          var g = c++ % l[S];u[g] = u[g] || [], u[g].push(new n.Sector({ shape: { cx: e.cx, cy: e.cy, r0: f, r: p, startAngle: d, endAngle: -r[m] * h, clockwise: v }, silent: !0 })), d = -r[m] * h;
	        }for (var m = 0; m < u[S]; m++) {
	          this.group.add(n.mergePath(u[m], { style: i[A]({ fill: l[m % l[S]] }, s.getAreaStyle()), silent: !0 }));
	        }
	      } });
	  }), e("echarts/coord/radar/RadarModel", [K, "../axisDefault", "../../model/Model", F, "../axisModelCommonMixin", "../../echarts"], function (t) {
	    function e(t, e) {
	      return a[A]({ show: e }, t);
	    }var i = t("../axisDefault"),
	        n = i.valueAxis,
	        r = t("../../model/Model"),
	        a = t(F),
	        s = t("../axisModelCommonMixin"),
	        l = t("../../echarts").extendComponentModel({ type: "radar", optionUpdated: function optionUpdated() {
	        var t = this.get("boundaryGap"),
	            e = this.get("splitNumber"),
	            i = this.get("scale"),
	            n = this.get("axisLine"),
	            l = this.get("axisTick"),
	            c = this.get("axisLabel"),
	            u = this.get("name.textStyle"),
	            h = this.get("name.show"),
	            d = this.get("name.formatter"),
	            f = this.get("nameGap"),
	            p = a.map(this.get("indicator") || [], function (p) {
	          return null != p.max && p.max > 0 ? p.min = 0 : null != p.min && p.min < 0 && (p.max = 0), p = a.merge(a.clone(p), { boundaryGap: t, splitNumber: e, scale: i, axisLine: n, axisTick: l, axisLabel: c, name: p.text, nameLocation: "end", nameGap: f, nameTextStyle: u }, !1), h || (p.name = ""), (typeof d === "undefined" ? "undefined" : _typeof(d)) === E ? p.name = d[b]("{value}", p.name) : (typeof d === "undefined" ? "undefined" : _typeof(d)) === _ && (p.name = d(p.name, p)), a[C](new r(p, null, this[o]), s);
	        }, this);this.getIndicatorModels = function () {
	          return p;
	        };
	      }, defaultOption: { zlevel: 0, z: 0, center: ["50%", "50%"], radius: "75%", startAngle: 90, name: { show: !0 }, boundaryGap: [0, 0], splitNumber: 5, nameGap: 15, scale: !1, shape: "polygon", axisLine: a.merge({ lineStyle: { color: "#bbb" } }, n.axisLine), axisLabel: e(n.axisLabel, !1), axisTick: e(n.axisTick, !1), splitLine: e(n.splitLine, !0), splitArea: e(n.splitArea, !0), indicator: [] } });return l;
	  }), e("echarts/util/symbol", [K, "./graphic", "zrender/core/BoundingRect"], function (t) {
	    var e = t("./graphic"),
	        i = t("zrender/core/BoundingRect"),
	        n = e.extendShape({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
	        var i = e.cx,
	            n = e.cy,
	            a = e.width / 2,
	            o = e[X] / 2;t[r](i, n - o), t.lineTo(i + a, n + o), t.lineTo(i - a, n + o), t.closePath();
	      } }),
	        a = e.extendShape({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
	        var i = e.cx,
	            n = e.cy,
	            a = e.width / 2,
	            o = e[X] / 2;t[r](i, n - o), t.lineTo(i + a, n), t.lineTo(i, n + o), t.lineTo(i - a, n), t.closePath();
	      } }),
	        o = e.extendShape({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
	        var i = e.x,
	            n = e.y,
	            r = e.width / 5 * 3,
	            a = Math.max(r, e[X]),
	            o = r / 2,
	            s = o * o / (a - o),
	            l = n - a + o + s,
	            c = Math.asin(s / o),
	            u = Math.cos(c) * o,
	            h = Math.sin(c),
	            d = Math.cos(c);t.arc(i, l, o, Math.PI - c, 2 * Math.PI + c);var f = .6 * o,
	            p = .7 * o;t.bezierCurveTo(i + u - h * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + h * f, l + s + d * f, i - u, l + s), t.closePath();
	      } }),
	        s = e.extendShape({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
	        var i = e[X],
	            n = e.width,
	            a = e.x,
	            o = e.y,
	            s = n / 3 * 2;t[r](a, o), t.lineTo(a + s, o + i), t.lineTo(a, o + i / 4 * 3), t.lineTo(a - s, o + i), t.lineTo(a, o), t.closePath();
	      } }),
	        l = { line: e.Line, rect: e.Rect, roundRect: e.Rect, square: e.Rect, circle: e.Circle, diamond: a, pin: o, arrow: s, triangle: n },
	        c = { line: function line(t, e, i, n, r) {
	        r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2;
	      }, rect: function rect(t, e, i, n, r) {
	        r.x = t, r.y = e, r.width = i, r[X] = n;
	      }, roundRect: function roundRect(t, e, i, n, r) {
	        r.x = t, r.y = e, r.width = i, r[X] = n, r.r = Math.min(i, n) / 4;
	      }, square: function square(t, e, i, n, r) {
	        var a = Math.min(i, n);r.x = t, r.y = e, r.width = a, r[X] = a;
	      }, circle: function circle(t, e, i, n, r) {
	        r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2;
	      }, diamond: function diamond(t, e, i, n, r) {
	        r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r[X] = n;
	      }, pin: function pin(t, e, i, n, r) {
	        r.x = t + i / 2, r.y = e + n / 2, r.width = i, r[X] = n;
	      }, arrow: function arrow(t, e, i, n, r) {
	        r.x = t + i / 2, r.y = e + n / 2, r.width = i, r[X] = n;
	      }, triangle: function triangle(t, e, i, n, r) {
	        r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r[X] = n;
	      } },
	        u = {};for (var h in l) {
	      u[h] = new l[h]();
	    }var f = e.extendShape({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, beforeBrush: function beforeBrush() {
	        var t = this.style,
	            e = this.shape;"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = G, t.textVerticalAlign = q);
	      }, buildPath: function buildPath(t, e, i) {
	        var n = e.symbolType,
	            r = u[n];"none" !== e.symbolType && (r || (n = "rect", r = u[n]), c[n](e.x, e.y, e.width, e[X], r.shape), r.buildPath(t, r.shape, i));
	      } }),
	        p = function p(t) {
	      if ("image" !== this.type) {
	        var e = this.style,
	            i = this.shape;i && "line" === i.symbolType ? e[d] = t : this.__isEmptyBrush ? (e[d] = t, e.fill = "#fff") : (e.fill && (e.fill = t), e[d] && (e[d] = t)), this.dirty(!1);
	      }
	    },
	        v = { createSymbol: function createSymbol(t, n, r, a, o, s) {
	        var l = 0 === t[y]("empty");l && (t = t.substr(5, 1)[B]() + t.substr(6));var c;return c = 0 === t[y]("image://") ? new e.Image({ style: { image: t.slice(8), x: n, y: r, width: a, height: o } }) : 0 === t[y]("path://") ? e.makePath(t.slice(7), {}, new i(n, r, a, o)) : new f({ shape: { symbolType: t, x: n, y: r, width: a, height: o } }), c.__isEmptyBrush = l, c.setColor = p, c.setColor(s), c;
	      } };return v;
	  }), e("echarts/component/helper/listComponent", [K, "../../util/layout", "../../util/format", "../../util/graphic"], function (t) {
	    function e(t, e, n) {
	      i.positionGroup(t, e.getBoxLayoutParams(), { width: n[j](), height: n[W]() }, e.get("padding"));
	    }var i = t("../../util/layout"),
	        n = t("../../util/format"),
	        r = t("../../util/graphic");return { layout: function layout(t, n, r) {
	        var a = i.getLayoutRect(n.getBoxLayoutParams(), { width: r[j](), height: r[W]() }, n.get("padding"));i.box(n.get("orient"), t, n.get("itemGap"), a.width, a[X]), e(t, n, r);
	      }, addBackground: function addBackground(t, e) {
	        var i = n.normalizeCssArray(e.get("padding")),
	            a = t[Y](),
	            o = e.getItemStyle(["color", N]);o.fill = e.get("backgroundColor");var s = new r.Rect({ shape: { x: a.x - i[3], y: a.y - i[0], width: a.width + i[1] + i[3], height: a[X] + i[0] + i[2] }, style: o, silent: !0, z2: -1 });r.subPixelOptimizeRect(s), t.add(s);
	      } };
	  }), e("echarts/coord/radar/IndicatorAxis", [K, F, "../Axis"], function (t) {
	    function e(t, e, i) {
	      n.call(this, t, e, i), this.type = "value", this.angle = 0, this.name = "", this.model;
	    }var i = t(F),
	        n = t("../Axis");return i[g](e, n), e;
	  }), e("echarts/component/tooltip/TooltipContent", [K, F, "zrender/tool/color", "zrender/core/event", "../../util/format", "zrender/core/env"], function (t) {
	    function e(t) {
	      var e = "cubic-bezier(0.23, 1, 0.32, 1)",
	          i = "left " + t + "s " + e + ",top " + t + "s " + e;return o.map(v, function (t) {
	        return t + "transition:" + i;
	      }).join(";");
	    }function i(t) {
	      var e = [],
	          i = t.get("fontSize"),
	          n = t.getTextColor();return n && e.push("color:" + n), e.push("font:" + t[Z]()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), d(["decoration", "align"], function (i) {
	        var n = t.get(i);n && e.push("text-" + i + ":" + n);
	      }), e.join(";");
	    }function n(t) {
	      t = t;var n = [],
	          r = t.get("transitionDuration"),
	          a = t.get("backgroundColor"),
	          o = t[Q]($),
	          c = t.get("padding");return r && n.push(e(r)), a && (p[D] ? n.push("background-Color:" + a) : (n.push("background-Color:#" + s.toHex(a)), n.push("filter:alpha(opacity=70)"))), d(["width", "color", l], function (e) {
	        var i = "border-" + e,
	            r = f(i),
	            a = t.get(r);null != a && n.push(i + ":" + a + ("color" === e ? "" : "px"));
	      }), n.push(i(o)), null != c && n.push("padding:" + h.normalizeCssArray(c).join("px ") + "px"), n.join(";") + ";";
	    }function r(t, e) {
	      var i = document[c]("div"),
	          n = e.getZr();this.el = i, this._x = e[j]() / 2, this._y = e[W]() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;var r = this;i.onmouseenter = function () {
	        r.enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0;
	      }, i.onmousemove = function (e) {
	        if (!r.enterable) {
	          var i = n.handler;u.normalizeEvent(t, e), i.dispatch("mousemove", e);
	        }
	      }, i.onmouseleave = function () {
	        r.enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1;
	      }, a(i, t);
	    }function a(t, e) {
	      function i(t) {
	        n(t[U]) && t.preventDefault();
	      }function n(i) {
	        for (; i && i !== e;) {
	          if (i === t) return !0;i = i.parentNode;
	        }
	      }u.addEventListener(e, "touchstart", i), u.addEventListener(e, "touchmove", i), u.addEventListener(e, "touchend", i);
	    }var o = t(F),
	        s = t("zrender/tool/color"),
	        u = t("zrender/core/event"),
	        h = t("../../util/format"),
	        d = o.each,
	        f = h.toCamelCase,
	        p = t("zrender/core/env"),
	        v = ["", "-webkit-", "-moz-", "-o-"],
	        m = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";return r[O] = { constructor: r, enterable: !0, update: function update() {
	        var t = this._container,
	            e = t.currentStyle || document.defaultView.getComputedStyle(t),
	            i = t.style;"absolute" !== i[V] && "absolute" !== e[V] && (i[V] = "relative");
	      }, show: function show(t) {
	        clearTimeout(this._hideTimeout);var e = this.el;e.style.cssText = m + n(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0;
	      }, setContent: function setContent(t) {
	        var e = this.el;e.innerHTML = t, e.style.display = t ? "block" : "none";
	      }, moveTo: function moveTo(t, e) {
	        var i = this.el.style;i.left = t + "px", i.top = e + "px", this._x = t, this._y = e;
	      }, hide: function hide() {
	        this.el.style.display = "none", this._show = !1;
	      }, hideLater: function hideLater(t) {
	        !this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(o.bind(this.hide, this), t)) : this.hide());
	      }, isShow: function isShow() {
	        return this._show;
	      } }, r;
	  }), e("echarts/component/axis/RadiusAxisView", [K, F, "../../util/graphic", "./AxisBuilder", "../../echarts"], function (t) {
	    function e(t, e, i) {
	      return { position: [t.cx, t.cy], rotation: i / 180 * Math.PI, labelDirection: -1, tickDirection: -1, nameDirection: 1, labelRotation: e[Q]("axisLabel").get("rotate"), z2: 1 };
	    }var i = t(F),
	        n = t("../../util/graphic"),
	        r = t("./AxisBuilder"),
	        a = ["axisLine", "axisLabel", "axisTick", "axisName"],
	        o = ["splitLine", "splitArea"];t("../../echarts").extendComponentView({ type: "radiusAxis", render: function render(t, n) {
	        if (this.group.removeAll(), t.get("show")) {
	          var s = n.getComponent("polar", t.get("polarIndex")),
	              l = s.coordinateSystem.getAngleAxis(),
	              c = t.axis,
	              u = s.coordinateSystem,
	              h = c.getTicksCoords(),
	              d = l[p]()[0],
	              f = c[p](),
	              v = e(u, t, d),
	              m = new r(t, v);i.each(a, m.add, m), this.group.add(m.getGroup()), i.each(o, function (e) {
	            t.get(e + ".show") && this["_" + e](t, u, d, f, h);
	          }, this);
	        }
	      }, _splitLine: function _splitLine(t, e, r, a, o) {
	        var s = t[Q]("splitLine"),
	            l = s[Q]("lineStyle"),
	            c = l.get("color"),
	            u = 0;c = c instanceof Array ? c : [c];for (var h = [], d = 0; d < o[S]; d++) {
	          var f = u++ % c[S];h[f] = h[f] || [], h[f].push(new n.Circle({ shape: { cx: e.cx, cy: e.cy, r: o[d] }, silent: !0 }));
	        }for (var d = 0; d < h[S]; d++) {
	          this.group.add(n.mergePath(h[d], { style: i[A]({ stroke: c[d % c[S]], fill: null }, l.getLineStyle()), silent: !0 }));
	        }
	      }, _splitArea: function _splitArea(t, e, r, a, o) {
	        var s = t[Q]("splitArea"),
	            l = s[Q]("areaStyle"),
	            c = l.get("color"),
	            u = 0;c = c instanceof Array ? c : [c];for (var h = [], d = o[0], f = 1; f < o[S]; f++) {
	          var p = u++ % c[S];h[p] = h[p] || [], h[p].push(new n.Sector({ shape: { cx: e.cx, cy: e.cy, r0: d, r: o[f], startAngle: 0, endAngle: 2 * Math.PI }, silent: !0 })), d = o[f];
	        }for (var f = 0; f < h[S]; f++) {
	          this.group.add(n.mergePath(h[f], { style: i[A]({ fill: c[f % c[S]] }, l.getAreaStyle()), silent: !0 }));
	        }
	      } });
	  }), e("echarts/component/axis/AxisBuilder", [K, F, "../../util/format", "../../util/graphic", "../../model/Model", "../../util/number", "zrender/core/vector"], function (t) {
	    function e(t) {
	      var e = { componentType: t.mainType };return e[t.mainType + "Index"] = t.componentIndex, e;
	    }function i(t, e, i) {
	      var n,
	          r,
	          a = m(e - t.rotation);return g(a) ? (r = i > 0 ? "top" : H, n = G) : g(a - w) ? (r = i > 0 ? H : "top", n = G) : (r = q, n = a > 0 && w > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), { rotation: a, textAlign: n, verticalAlign: r };
	    }function n(t, e, i, n) {
	      var r,
	          a,
	          o = m(i - t.rotation),
	          s = n[0] > n[1],
	          l = "start" === e && !s || "start" !== e && s;return g(o - w / 2) ? (a = l ? H : "top", r = G) : g(o - 1.5 * w) ? (a = l ? "top" : H, r = G) : (a = q, r = 1.5 * w > o && o > w / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: o, textAlign: r, verticalAlign: a };
	    }function r(t) {
	      var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
	    }var l = t(F),
	        c = t("../../util/format"),
	        u = t("../../util/graphic"),
	        h = t("../../model/Model"),
	        d = t("../../util/number"),
	        m = d.remRadian,
	        g = d.isRadianAroundZero,
	        y = t("zrender/core/vector"),
	        x = y[f],
	        b = l.retrieve,
	        w = Math.PI,
	        T = function T(t, e) {
	      this.opt = e, this.axisModel = t, l[A](e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }), this.group = new u.Group();var i = new u.Group({ position: e[V].slice(), rotation: e.rotation });i.updateTransform(), this._transform = i[a], this._dumbGroup = i;
	    };T[O] = { constructor: T, hasBuilder: function hasBuilder(t) {
	        return !!M[t];
	      }, add: function add(t) {
	        M[t].call(this);
	      }, getGroup: function getGroup() {
	        return this.group;
	      } };var M = { axisLine: function axisLine() {
	        var t = this.opt,
	            e = this.axisModel;if (e.get("axisLine.show")) {
	          var i = this.axisModel.axis[p](),
	              n = this._transform,
	              r = [i[0], 0],
	              a = [i[1], 0];n && (x(r, r, n), x(a, a, n)), this.group.add(new u.Line(u.subPixelOptimizeLine({ anid: "line", shape: { x1: r[0], y1: r[1], x2: a[0], y2: a[1] }, style: l[C]({ lineCap: "round" }, e[Q]("axisLine.lineStyle").getLineStyle()), strokeContainThreshold: t.strokeContainThreshold || 5, silent: !0, z2: 1 })));
	        }
	      }, axisTick: function axisTick() {
	        var t = this.axisModel;if (t.get("axisTick.show")) for (var e = t.axis, i = t[Q]("axisTick"), n = this.opt, r = i[Q]("lineStyle"), a = i.get(S), o = L(i, n.labelInterval), s = e.getTicksCoords(i.get("alignWithLabel")), c = e.scale[v](), h = [], d = [], f = this._transform, p = 0; p < s[S]; p++) {
	          if (!P(e, p, o)) {
	            var m = s[p];h[0] = m, h[1] = 0, d[0] = m, d[1] = n.tickDirection * a, f && (x(h, h, f), x(d, d, f)), this.group.add(new u.Line(u.subPixelOptimizeLine({ anid: "tick_" + c[p], shape: { x1: h[0], y1: h[1], x2: d[0], y2: d[1] }, style: l[A](r.getLineStyle(), { stroke: t.get("axisLine.lineStyle.color") }), z2: 2, silent: !0 })));
	          }
	        }
	      }, axisLabel: function axisLabel() {
	        function t(t, e) {
	          var i = t && t[Y]().clone(),
	              n = e && e[Y]().clone();return i && n ? (i[f](t.getLocalTransform()), n[f](e.getLocalTransform()), i.intersect(n)) : void 0;
	        }var n = this.opt,
	            a = this.axisModel,
	            l = b(n.axisLabelShow, a.get("axisLabel.show"));if (l) {
	          var c = a.axis,
	              d = a[Q]("axisLabel"),
	              p = d[Q]($),
	              m = d.get("margin"),
	              g = c.scale[v](),
	              y = a.getFormattedLabels(),
	              x = b(n.labelRotation, d.get("rotate")) || 0;x = x * w / 180;for (var T = i(n, x, n.labelDirection), M = a.get("data"), A = [], C = r(a), L = a.get("triggerEvent"), z = 0; z < g[S]; z++) {
	            if (!P(c, z, n.labelInterval)) {
	              var I = p;M && M[z] && M[z][$] && (I = new h(M[z][$], p, a[o]));var D = I.getTextColor() || a.get("axisLine.lineStyle.color"),
	                  R = c.dataToCoord(g[z]),
	                  E = [R, n.labelOffset + n.labelDirection * m],
	                  O = c.scale.getLabel(g[z]),
	                  B = new u.Text({ anid: "label_" + g[z], style: { text: y[z], textAlign: I.get("align", !0) || T.textAlign, textVerticalAlign: I.get("baseline", !0) || T.verticalAlign, textFont: I[Z](), fill: (typeof D === "undefined" ? "undefined" : _typeof(D)) === _ ? D(O) : D }, position: E, rotation: T.rotation, silent: C, z2: 10 });L && (B.eventData = e(a), B.eventData.targetType = "axisLabel", B.eventData.value = O), this._dumbGroup.add(B), B.updateTransform(), A.push(B), this.group.add(B), B.decomposeTransform();
	            }
	          }if (c.type !== s) {
	            if (a.getMin ? a.getMin() : a.get("min")) {
	              var F = A[0],
	                  N = A[1];t(F, N) && (F[k] = !0);
	            }if (a.getMax ? a.getMax() : a.get("max")) {
	              var V = A[A[S] - 1],
	                  H = A[A[S] - 2];t(H, V) && (V[k] = !0);
	            }
	          }
	        }
	      }, axisName: function axisName() {
	        var t = this.opt,
	            a = this.axisModel,
	            o = b(t.axisName, a.get("name"));if (o) {
	          var s,
	              h = a.get("nameLocation"),
	              d = t.nameDirection,
	              f = a[Q]("nameTextStyle"),
	              v = a.get("nameGap") || 0,
	              m = this.axisModel.axis[p](),
	              g = m[0] > m[1] ? -1 : 1,
	              y = ["start" === h ? m[0] - g * v : "end" === h ? m[1] + g * v : (m[0] + m[1]) / 2, h === q ? t.labelOffset + d * v : 0],
	              _ = a.get("nameRotate");null != _ && (_ = _ * w / 180);var x;h === q ? s = i(t, null != _ ? _ : t.rotation, d) : (s = n(t, h, _ || 0, m), x = t.axisNameAvailableWidth, null != x && (x = Math.abs(x / Math.sin(s.rotation)), !isFinite(x) && (x = null)));var T = f[Z](),
	              M = a.get("nameTruncate", !0) || {},
	              S = M.ellipsis,
	              A = b(M.maxWidth, x),
	              P = null != S && null != A ? c.truncateText(o, A, T, S, { minChar: 2, placeholder: M.placeholder }) : o,
	              L = a.get("tooltip", !0),
	              z = a.mainType,
	              k = { componentType: z, name: o, $vars: ["name"] };k[z + "Index"] = a.componentIndex;var I = new u.Text({ anid: "name", __fullText: o, __truncatedText: P, style: { text: P, textFont: T, fill: f.getTextColor() || a.get("axisLine.lineStyle.color"), textAlign: s.textAlign, textVerticalAlign: s.verticalAlign }, position: y, rotation: s.rotation, silent: r(a), z2: 1, tooltip: L && L.show ? l[C]({ content: o, formatter: function formatter() {
	                return o;
	              }, formatterParams: k }, L) : null });a.get("triggerEvent") && (I.eventData = e(a), I.eventData.targetType = "axisName", I.eventData.name = o), this._dumbGroup.add(I), I.updateTransform(), this.group.add(I), I.decomposeTransform();
	        }
	      } },
	        P = T.ifIgnoreOnTick = function (t, e, i) {
	      var n,
	          r = t.scale;return "ordinal" === r.type && ((typeof i === "undefined" ? "undefined" : _typeof(i)) === _ ? (n = r[v]()[e], !i(n, r.getLabel(n))) : e % (i + 1));
	    },
	        L = T.getInterval = function (t, e) {
	      var i = t.get("interval");return (null == i || "auto" == i) && (i = e), i;
	    };return T;
	  }), e("echarts/data/helper/completeDimensions", [K, F], function (t) {
	    function e(t, e, a, o) {
	      if (!e) return t;var s = i(e[0]),
	          l = n[x](s) && s[S] || 1;a = a || [], o = o || "extra";for (var c = 0; l > c; c++) {
	        if (!t[c]) {
	          var u = a[c] || o + (c - a[S]);t[c] = r(e, c) ? { type: "ordinal", name: u } : u;
	        }
	      }return t;
	    }function i(t) {
	      return n[x](t) ? t : n[P](t) ? t.value : t;
	    }var n = t(F),
	        r = e.guessOrdinal = function (t, e) {
	      for (var r = 0, a = t[S]; a > r; r++) {
	        var o = i(t[r]);if (!n[x](o)) return !1;var o = o[e];if (null != o && isFinite(o)) return !1;if (n.isString(o) && "-" !== o) return !0;
	      }return !1;
	    };return e;
	  }), e("zrender", ["zrender/zrender"], function (t) {
	    return t;
	  }), e("echarts", ["echarts/echarts"], function (t) {
	    return t;
	  });var J = t("echarts");return J.graphic = t("echarts/util/graphic"), J.number = t("echarts/util/number"), J.format = t("echarts/util/format"), t("echarts/chart/radar"), t("echarts/component/polar"), t("echarts/component/title"), t("echarts/component/legend"), t("echarts/component/tooltip"), t("zrender/vml/vml"), J;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);