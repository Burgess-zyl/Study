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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Animal() {}
function Dog() {}

// Dog instance of Animal => true
// 要实现 dog.__proto__.__proto__... === Animal.prototype
// 需 dog.__proto__ === Dog.prototype
//    Dog.prototype.__proto === Animal.prototype

Object.defineProperties(Animal.prototype, {
    name: {
        value: function value() {
            return 'Animal';
        }
    },
    say: {
        value: function value() {
            return 'I\'m ' + this.name();
        }
    }
});

Dog.prototype = Object.create(Animal.prototype);
// 多态实现 constructor 指向 构造函数本身
Dog.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Dog,
        enumerable: false
    },
    name: {
        value: function value() {
            return 'Dog';
        }
    }
});

document.write(new Dog().say());
document.write('<br/>');
document.write(Dog.prototype.constructor);

// class实现继承

var Animal1 = function () {
    function Animal1() {
        _classCallCheck(this, Animal1);
    }

    _createClass(Animal1, [{
        key: 'name',
        value: function name() {
            return 'Animal';
        }
    }, {
        key: 'say',
        value: function say() {
            return 'I\'m ' + this.name();
        }
    }]);

    return Animal1;
}();

var Dog1 = function (_Animal) {
    _inherits(Dog1, _Animal);

    function Dog1() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dog1);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dog1.__proto__ || Object.getPrototypeOf(Dog1)).call.apply(_ref, [this].concat(args))), _this), _this.foot = 'bone', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dog1, [{
        key: 'name',
        value: function name() {
            return 'Dog';
        }
    }]);

    return Dog1;
}(Animal1);

console.log(new Dog1() instanceof Animal1);

/***/ }),

/***/ "./src/decorator.js":
/*!**************************!*\
  !*** ./src/decorator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Decorator 在声明阶段实现类与类成员注解的一种语法

function log(target) {
    var desc = Object.getOwnPropertyDescriptors(target.prototype);

    var _loop = function _loop(key) {
        if (key === 'constructor') {
            return 'continue';
        }

        var func = desc[key].value;

        if ('function' === typeof func) {
            Object.defineProperty(target.prototype, key, {
                value: function value() {
                    console.log('before' + key);

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    var ret = func.apply(this, args);
                    console.log('after' + key);

                    return ret;
                }
            });
        }
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(desc)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var _ret = _loop(key);

            if (_ret === 'continue') continue;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

var Numberic = log(_class = function () {
    function Numberic() {
        _classCallCheck(this, Numberic);

        this.PI = 9.1415926;
    }

    _createClass(Numberic, [{
        key: 'add',
        value: function add() {
            for (var _len2 = arguments.length, nums = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                nums[_key2] = arguments[_key2];
            }

            return nums.reduce(function (p, c) {
                return p + c;
            }, 0);
        }
    }]);

    return Numberic;
}()) || _class;

new Numberic().add(1, 2);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./class */ "./src/class.js");

__webpack_require__(/*! ./decorator */ "./src/decorator.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFuaW1hbCIsIkRvZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJwcm90b3R5cGUiLCJuYW1lIiwidmFsdWUiLCJzYXkiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImVudW1lcmFibGUiLCJkb2N1bWVudCIsIndyaXRlIiwiQW5pbWFsMSIsIkRvZzEiLCJmb290IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwia2V5IiwiZnVuYyIsImRlZmluZVByb3BlcnR5IiwiYXJncyIsInJldCIsImFwcGx5Iiwia2V5cyIsIk51bWJlcmljIiwiUEkiLCJudW1zIiwicmVkdWNlIiwicCIsImMiLCJhZGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FB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QUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLHVCQUFXRCxJQUFJQyxDQUFmO0FBQUEsYUFBWixFQUErQixDQUEvQixDQUFQO0FBQ0g7Ozs7OztBQUdMLElBQUlMLFFBQUosR0FBZU0sR0FBZixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFOzs7Ozs7Ozs7Ozs7OztBQ25DQTs7QUFDQSw2RCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBBbmltYWwgKCkge31cclxuZnVuY3Rpb24gRG9nICgpIHt9XHJcblxyXG4vLyBEb2cgaW5zdGFuY2Ugb2YgQW5pbWFsID0+IHRydWVcclxuLy8g6KaB5a6e546wIGRvZy5fX3Byb3RvX18uX19wcm90b19fLi4uID09PSBBbmltYWwucHJvdG90eXBlXHJcbi8vIOmcgCBkb2cuX19wcm90b19fID09PSBEb2cucHJvdG90eXBlXHJcbi8vICAgIERvZy5wcm90b3R5cGUuX19wcm90byA9PT0gQW5pbWFsLnByb3RvdHlwZVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQW5pbWFsLnByb3RvdHlwZSwge1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBbmltYWwnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNheToge1xyXG4gICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBJJ20gJHt0aGlzLm5hbWUoKX1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuRG9nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQW5pbWFsLnByb3RvdHlwZSlcclxuLy8g5aSa5oCB5a6e546wIGNvbnN0cnVjdG9yIOaMh+WQkSDmnoTpgKDlh73mlbDmnKzouqtcclxuRG9nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQW5pbWFsLnByb3RvdHlwZSwge1xyXG4gICAgY29uc3RydWN0b3I6IHtcclxuICAgICAgICB2YWx1ZTogRG9nLFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdEb2cnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQud3JpdGUobmV3IERvZygpLnNheSgpKVxyXG5kb2N1bWVudC53cml0ZSgnPGJyLz4nKVxyXG5kb2N1bWVudC53cml0ZShEb2cucHJvdG90eXBlLmNvbnN0cnVjdG9yKVxyXG5cclxuLy8gY2xhc3Plrp7njrDnu6fmib9cclxuY2xhc3MgQW5pbWFsMSB7XHJcbiAgICBuYW1lICgpIHtcclxuICAgICAgICByZXR1cm4gJ0FuaW1hbCdcclxuICAgIH1cclxuICAgIHNheSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBJJ20gJHt0aGlzLm5hbWUoKX1gXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERvZzEgZXh0ZW5kcyBBbmltYWwxIHtcclxuICAgIGZvb3QgPSAnYm9uZSdcclxuICAgIG5hbWUgKCkge1xyXG4gICAgICAgIHJldHVybiAnRG9nJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhuZXcgRG9nMSgpIGluc3RhbmNlb2YgQW5pbWFsMSkiLCIvLyBEZWNvcmF0b3Ig5Zyo5aOw5piO6Zi25q615a6e546w57G75LiO57G75oiQ5ZGY5rOo6Kej55qE5LiA56eN6K+t5rOVXHJcblxyXG5mdW5jdGlvbiBsb2cgKHRhcmdldCkge1xyXG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldC5wcm90b3R5cGUpXHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGVzYykpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmdW5jID0gZGVzY1trZXldLnZhbHVlXHJcblxyXG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZnVuYykge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LnByb3RvdHlwZSwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSAoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUnICsga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXInICsga2V5KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbG9nXHJcbmNsYXNzIE51bWJlcmljIHtcclxuICAgIFBJID0gOS4xNDE1OTI2XHJcblxyXG4gICAgYWRkICguLi5udW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bXMucmVkdWNlKChwLCBjKSA9PiAocCArIGMpLCAwKVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgTnVtYmVyaWMoKS5hZGQoMSwgMikiLCJpbXBvcnQgJy4vY2xhc3MnXHJcbmltcG9ydCAnLi9kZWNvcmF0b3InIl0sInNvdXJjZVJvb3QiOiIifQ==