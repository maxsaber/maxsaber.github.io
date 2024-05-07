/*!
 * Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
(function () {
  'use strict';

  /**
   * @description Returns an array of strings representing the own keys (i.e., not
   * inherited) of an object, optionally filtered to include only enumerable symbols.
   * 
   * @param { object } object - object whose keys are to be returned.
   * 
   * @param { boolean } enumerableOnly - boolean value whether to filter the property
   * descriptors for only those that have an `enumerable` flag of `true`.
   * 
   * @returns { array } an array of unique property keys found in the provided object,
   * with any symbol properties filtered and only enumerable properties included.
   */
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  /**
   * @description Takes an object `target` and iterates over multiple arguments providing
   * property values, merging them into `target`.
   * 
   * @param { object } target - object that the spread operator will be applied to.
   * 
   * @returns { object } a modified version of the `target` object, where property
   * assignments are made based on the input arguments.
   */
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  /**
   * @description Evaluates the type of an object, using a nested ternary operation to
   * determine whether it is a function, symbol, or primitive value. It returns the
   * determined type of the object.
   * 
   * @param { object } obj - object being checked for symbolness, which is determined
   * using two conditions: if it's a Symbol object or if it has the `Symbol.iterator`
   * property, returning the type of the object; otherwise, returning the type of the
   * object itself.
   * 
   * @returns { object } a boolean value indicating the type of the input `obj`.
   */
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  /**
   * @description Creates a new `BabelRegExp` constructor that wraps an existing `RegExp`
   * object and provides additional functionality through the use of a WeakMap to store
   * group data and a `BabelRegExp.prototype` object for implementing Babel-specific methods.
   * 
   * @returns { function } a new RegExp constructor that wraps the original one with
   * additional functionality to manipulate groups in the regular expression.
   * 
   * 		- `BabelRegExp`: This is the class that extends the `RegExp` prototype, providing
   * additional functionality for working with groups in a more flexible way.
   * 		- `exec`: This method implements the `exec` method of the `RegExp` prototype,
   * but with an additional argument `groups` that returns the group information built
   * by `buildGroups`.
   * 		- `[Symbol.replace]`: This method implements the `replace` method of the `RegExp`
   * prototype, but with an additional argument `substitution` that is a function or a
   * string, and it also calls the original `replace` method of the `RegExp` prototype.
   * 
   * 	The `_groups` property is a WeakMap that keeps track of the groups associated
   * with each regular expression object. It allows for flexible manipulation of the
   * group information by providing an array of objects with the names of the groups
   * as keys, and an empty object as the value. The `buildGroups` method creates a new
   * array of objects based on the result of the `Object.keys()` method applied to the
   * `_groups` property, and it sets the `groups` property of the returned regular
   * expression object to this new array.
   */
  function _wrapRegExp() {
    _wrapRegExp = function (re, groups) {
      return new BabelRegExp(re, void 0, groups);
    };

    var _super = RegExp.prototype,
        _groups = new WeakMap();

    /**
     * @description Creates a new RegExp object from a given pattern and flags, sets the
     * prototype of the newly created RegExp to that of the `BabelRegExp` prototype, and
     * returns the new RegExp instance with updated prototype chain.
     * 
     * @param { string } re - regular expression pattern to be created and applied as an
     * instance of the `RegExp` constructor.
     * 
     * @param { object } flags - 2nd argument of the `RegExp()` constructor and specifies
     * additional options for the generated RegExp object, such as the global or ignore
     * case flag.
     * 
     * @param { object } groups - 0-based array of capture groups for the new regular
     * expression object created by the `BabelRegExp` function.
     * 
     * @returns { object } a new RegExp object with the given regular expression and
     * optional groups.
     */
    function BabelRegExp(re, flags, groups) {
      var _this = new RegExp(re, flags);

      return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
    }

    /**
     * @description Takes an array `result` and a mapping `re`, returns a new object with
     * key-value pairs where each key is a property name from the original object and
     * each value is a subarray of values for that property.
     * 
     * @param { object } result - _groups object, which contains objects with key-value
     * pairs representing group names and their corresponding values.
     * 
     * @param { object } re - an existing set of group keys for which the function generates
     * documentation.
     * 
     * @returns { object } an object with keys being names of groups and values being
     * objects containing result data for each group.
     */
    function buildGroups(result, re) {
      var g = _groups.get(re);

      return Object.keys(g).reduce(function (groups, name) {
        return groups[name] = result[g[name]], groups;
      }, Object.create(null));
    }

    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
      var result = _super.exec.call(this, str);

      return result && (result.groups = buildGroups(result, this)), result;
    }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
      if ("string" == typeof substitution) {
        var groups = _groups.get(this);

        return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
          return "$" + groups[name];
        }));
      }

      if ("function" == typeof substitution) {
        var _this = this;

        return _super[Symbol.replace].call(this, str, function () {
          var args = arguments;
          return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
        });
      }

      return _super[Symbol.replace].call(this, str, substitution);
    }, _wrapRegExp.apply(this, arguments);
  }

  /**
   * @description Checks whether an object is a subclass of a given constructor, and
   * throws an error if it is not.
   * 
   * @param { object } instance - object being called as a function, and the function
   * checks if it is an instance of the constructor passed as argument.
   * 
   * @param { "function". } Constructor - base class or class type that instance belongs
   * to, and is used to check if the instance can be called as a function.
   * 
   * 		- `Constructor`: A function that is passed as an argument to the function.
   * 		- `instance`: An object instance that is created by calling the `Constructor`
   * function and passing it appropriate arguments.
   * 		- `typeError`: A possible error thrown when calling a class as a function,
   * indicating that the input `instance` does not inherit from or implement the `Constructor`.
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
   * @description Defines properties on an object `target`, copying properties from an
   * array `props`.
   * 
   * @param { object } target - object on which properties are to be defined.
   * 
   * @param { object } props - list of properties to define on the target object with
   * the `defineProperty` method.
   */
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  /**
   * @description Creates a new class by defining properties on its prototype and constructor.
   * 
   * @param { object } Constructor - constructor for the class to be defined and is
   * used in combination with the `protoProps` and `staticProps` parameters to define
   * the properties of the class.
   * 
   * @param { object } protoProps - properties to be defined on the prototype of the
   * created constructor's object, when using the `Object.defineProperties()` method
   * in the function.
   * 
   * @param { _______________ (insert relevant data type). } staticProps - static
   * properties to define on the constructor's class object when calling _createClass
   * 
   * 		- _defineProperties(): This method is used to define properties for the prototype
   * and static property of the Constructor object.
   * 		- writable: This attribute specifies whether the property can be rewritten (true)
   * or not (false). By default, it is set to false for the prototype property.
   * 
   * 	In summary, the `staticProps` parameter of the `_createClass` function is used
   * to define properties for the Constructor object's prototype and static properties.
   * The properties are defined using the `_defineProperties` method, with the writable
   * attribute setting whether the property can be rewritten or not.
   * 
   * @returns { object } a constructor function with defined prototype and static properties.
   */
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  /**
   * @description Defines a property on an object, either by setting the property
   * directly or using Object.defineProperty() method if it doesn't already exist.
   * 
   * @param { object } obj - object whose properties are being defined or modified.
   * 
   * @param { object } key - property key to be defined or updated in the object.
   * 
   * @param { object } value - value that will be associated with the property when
   * defining it in the object, and it determines the type of property that will be created.
   * 
   * @returns { obj } an object with updated properties.
   * 
   * 		- `value`: The value assigned to the property.
   * 		- `enumerable`: A boolean indicating whether the property is enumerable or not.
   * If `true`, the property can be accessed using for...of loops and other iterative
   * methods. If `false`, it cannot be accessed in such ways.
   * 		- `configurable`: A boolean indicating whether the property can be modified or
   * not. If `true`, the property can be changed; if `false`, it cannot be changed.
   * 		- `writable`: A boolean indicating whether the property can be written to or
   * not. If `true`, the property can be modified; if `false`, it cannot be modified.
   */
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

  /**
   * @description Creates an instance of a sub-class by extending a super class prototype.
   * 
   * @param { object } subClass - subclasses that the function creates.
   * 
   * @param { "function". } superClass - parent class of the subClass being defined.
   * 
   * 		- `value`: The value of the `subClass` property, which is the function being
   * inherited from.
   * 		- `writable`: A flag indicating whether the `subClass` prototype can be modified.
   * 		- `configurable`: A flag indicating whether the `subClass` prototype can be redefined.
   * 		- `constructor`: An object with a single property `value`, which holds the value
   * of the `subClass` function. This property is marked as non-enumerable and cannot
   * be deleted.
   * 
   * 	Note: The `superClass` input is expected to be either null or a function, and any
   * other input will result in an error being thrown.
   */
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  /**
   * @description Sets the prototype object for a given object `o`, replacing its
   * existing prototype or setting a new one altogether.
   * 
   * @param { object } o - object that the prototype is being set on.
   * 
   * @param { object } p - prototype object that is being assigned to the `o` object
   * as its prototype.
   * 
   * @returns { object } an object with the desired prototype chain set.
   */
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  /**
   * @description Slices an array into a new array based on a specified index `i`. The
   * function returns a new array if the original array can be sliced, or falls back
   * to alternative methods when necessary.
   * 
   * @param { iterable. } arr - 1D or 2D array to be sliced.
   * 
   * 	1/ `_arrayWithHoles`: A boolean value indicating whether `arr` is an array with
   * holes (i.e., some index values do not correspond to any element in the array).
   * 	2/ `_iterableToArrayLimit`: A boolean value indicating whether `arr` is iterable
   * and its elements can be accessed through a limit function.
   * 	3/ `_unsupportedIterableToArray`: A boolean value indicating whether `arr` is an
   * unsupported iterable type that cannot be converted to an array using the provided
   * methods.
   * 	4/ `_nonIterableRest`: A value indicating whether `arr` is a non-iterable rest
   * object, which cannot be converted to an array directly.
   * 
   * @param { number } i - limit of the sliced array in the `_slicedToArray()` function.
   * 
   * @returns { array } an array of values from the input `arr`, with the first `i`
   * values included and any remaining values excluded.
   */
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  /**
   * @description Transforms an input array-like value into a consumable array, either
   * by returning an iterable array or fallback values for non-iterable inputs.
   * 
   * @param { array } arr -
   * 
   * @returns { array } an array of the input elements.
   */
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  /**
   * @description Takes an array and returns a new array without any holes or missing
   * values.
   * 
   * @param { array } arr - ndexed array that needs to be transformed into an array
   * without any holes.
   * 
   * @returns { array } an array containing all elements of the input array without any
   * holes.
   */
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  /**
   * @description Checks whether the input argument is an array and returns it unmodified
   * if it is, otherwise it returns the input argument as an array with any undefined
   * or null values replaced by holes (`undefined! = null`).
   * 
   * @param { array } arr - 0-dimensional array to be checked for being an array of
   * holes, and returns it if it is.
   * 
   * @returns { array } an array with all holes removed.
   */
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  /**
   * @description Converts an iterable object into an array, returning the elements of
   * the iterable as an array if the object has a `Symbol.iterator` property or a
   * `@@iterator` property, or any other Iterator Objects.
   * 
   * @param { object } iter - iterable object whose elements are to be converted into
   * an array.
   * 
   * @returns { array } an array of values from the input iterable, using `Symbol.iterator`
   * or the `@@iterator` property for iteration.
   */
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  /**
   * @description Takes an iterable and a limit as input, converts the iterable to an
   * array and limits the number of elements returned based on the provided limit.
   * 
   * @param { `Iterable`. } arr - iterable object whose elements are to be transformed
   * into an array.
   * 
   * 		- `arr`: The input array-like object that may be an array or an iterable.
   * 		- `i`: An optional integer parameter specifying the maximum number of elements
   * to include in the returned array. If not provided, all elements will be included.
   * 		- `_i`: A null or undefined value representing the Iterator function or symbol
   * for the input array. This is used to determine whether the input is an array or
   * an iterable.
   * 		- `Symbol.iterator`: A property of the input object that indicates it is an
   * iterable. This property is used in combination with the `_i` check to determine
   * if the input is an iterable.
   * 		- `_n`, `_d`, and `_e`: Temporary variables used to manage the iteration process,
   * including tracking the done flag and any potential exceptions thrown during the iteration.
   * 
   * 	Note that `arr` is deserialized based on its type, so it may be an array or an
   * iterable. The function handles both cases by calling the Iterator function or
   * symbol and checking for the presence of the `_i` property. If an iterable is
   * detected, the function loops through the elements using the `next()` method,
   * limiting the number of elements included in the returned array based on the provided
   * `i` parameter.
   * 
   * @param { integer } i - limit of the array to be returned, and when it is specified,
   * the function stops iterating and returns the 100 at most elements it has processed
   * so far.
   * 
   * @returns { array } an array of up to `i` elements from the input iterable, based
   * on the Iterator pattern.
   */
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  /**
   * @description Transforms an unsupported iterable object into an array if necessary
   * based on its type.
   * 
   * @param { object } o - iterable object that the function aims to convert into an array.
   * 
   * @param { integer } minLen - minimum length that the output array must have.
   * 
   * @returns { array } an array containing the elements of the given iterable object.
   */
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  /**
   * @description Converts an array-like object `arr` into a new array with the same
   * elements, but without mutating the original array.
   * 
   * @param { array } arr - ndarray or other array-like object that will be transformed
   * into a new ndarray with the desired length.
   * 
   * @param { integer } len - maximum length of the new array that will be created by
   * assigning values from the original array to a new array with a defined size, as
   * determined by `len`.
   * 
   * @returns { array } a new array with the same elements as the original array, but
   * with a defined length.
   */
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  /**
   * @description Throws an error message when a non-iterable object is tried to be
   * spread as array elements.
   */
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * @description Throws a `TypeError` when an invalid attempt is made to destructure
   * a non-iterable instance.
   */
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_CSS_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  /**
   * @description Creates a proxy that sets the value of an object's properties to
   * either the original object or a classic family object if the property is not present
   * in the original object.
   * 
   * @param { object } obj - object whose properties are being proxy-ed through a
   * 
   * @returns { object } a Proxy object that retrieves properties from the provided obj
   * or falls back to the classic family.
   */
  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass'
  }), _familyProxy4));
  var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/; // eslint-disable-line no-useless-escape

  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i; // TODO: this needs to support fass
  // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  /**
   * @description Retrieves a configuration value for an HTML attribute based on its name.
   * 
   * @param { attribute name. } attr - attribute whose value is to be retrieved from
   * the element.
   * 
   * 		- `querySelector`: This is a method that selects an element from a document using
   * a CSS selector. It returns a reference to the selected element if found, or `null`
   * otherwise.
   * 		- `setAttribute`: This is a method that sets an attribute of an element. The
   * method takes two arguments: the attribute name and its value. If the argument is
   * a string, it sets the attribute's value to that string; if the argument is an
   * object, it sets multiple attributes simultaneously.
   * 
   * 	Therefore, when `element` is found using `querySelector`, the `setAttribute`
   * method is called with the attribute name (`attr`) as its only argument, and the
   * result is returned as the function's output. If `element` is not found, the function
   * returns `null`.
   * 
   * @returns { string } a value associated with an HTML attribute.
   */
  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  /**
   * @description Determines the value of an attribute on an HTML tag, coercing it to
   * a boolean value if necessary.
   * 
   * @param { string } val - boolean value that should be coerced to either "true" or
   * "false".
   * 
   * @returns { boolean } the input value, unmodified.
   */
  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    styleDefault: 'solid',
    familyDefault: 'classic',
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  }; // familyPrefix is deprecated but we must still support it if present

  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }

  var _config = _objectSpread2(_objectSpread2({}, _default), initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_default).forEach(function (key) {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function set(val) {
        _config[key] = val;

        _onChangeCb.forEach(function (cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config[key];
      }
    });
  }); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

  Object.defineProperty(config, 'familyPrefix', {
    enumerable: true,
    set: function set(val) {
      _config.cssPrefix = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  /**
   * @description Takes a callback function `cb` as input, pushes it onto an internal
   * array `_onChangeCb`, and returns a function that removes `cb` from the array when
   * called.
   * 
   * @param { `Function`. } cb - callback function that will be added to the list of
   * callbacks when the `onChange()` function is called, and is removed from the list
   * when the `onChange()` function is executed again.
   * 
   * 		- `_onChangeCb`: A list of callback functions that are called when the component's
   * value changes. The list is accessed using the `indexOf()` method to retrieve the
   * index of the callback function in question.
   * 
   * @returns { anonymous function } a function that removes the provided callback from
   * the `_onChangeCb` array.
   * 
   * 		- The returned output is a function that removes the specified `cb` from the
   * `_onChangeCb` array when it is called.
   * 		- The function takes no arguments.
   */
  function onChange(cb) {
    _onChangeCb.push(cb);

    return function () {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }

  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  /**
   * @description Applies a function to arguments passed as an array, wrapping any
   * exceptions in a Production mode.
   * 
   * @param { Function reference/callable. } fn - function to be executed, which is
   * applied to a series of arguments provided as an array and then called using the
   * `apply()` method.
   * 
   * 		- `fn`: It is an input argument of type Function that represents a JavaScript
   * function to be executed.
   * 		- `arguments`: An array-like object that contains the arguments passed to the function.
   * 		- `PRODUCTION`: A boolean variable that determines whether to catch and log
   * exceptions or not.
   */
  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  /**
   * @description Creates a new `style` element, sets its `type` attribute to `'text/css'`,
   * and inserts it into the Document Object Model (DOM) head element.
   * 
   * @param { string } css - CSS content to be inserted into the document's head tag,
   * which is then created and inserted into the document's head element using the
   * `insertBefore()` method.
   * 
   * @returns { string } a string representing the inserted CSS content.
   */
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  /**
   * @description Generates a unique identifier of 12 characters by combining letters
   * and numbers in a random manner, based on a pool of 62 elements.
   * 
   * @returns { string } a unique identifier string of 12 characters.
   */
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  /**
   * @description Takes an object and returns its value as an array. It creates a new
   * empty array, loops through the key-value pairs of the given object, and assigns
   * each key-value pair to the corresponding index in the returned array.
   * 
   * @param { object } obj -
   * 
   * @returns { array } an array containing the values of the object's properties.
   */
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  /**
   * @description Converts a Node object into an array of class names. If the Node
   * object has a `classList` property, it returns the list of classes. Otherwise, it
   * retrieves the `class` attribute value (or an empty string) and splits it into an
   * array of spaces-separated class names using the `filter()` method, filtering out
   * any empty strings.
   * 
   * @param { HTML Node. } node - DOM node for which the class array is to be generated.
   * 
   * 	1/ `node`: The input node that contains class attributes or an attribute 'class'
   * with a string value.
   * 	2/ `classList`: If present, it is an array of space-separated class names, and
   * the function returns an array of those class names.
   * 	3/ `getAttribute()`: If absent, this function retrieves the 'class' attribute
   * value as a string or null.
   * 	4/ `split()`: Divides the array into separate space-separated elements when
   * filtering out empty values using the provided callback function.
   * 
   * @returns { array } an array of class names.
   */
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  /**
   * @description Converts a string into HTML-escaped text by replacing certain characters
   * with their corresponding HTML entities.
   * 
   * @param { string } str -
   * 
   * @returns { string } a string with all special characters escaped for HTML usage.
   */
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  /**
   * @description Combines key-value pairs of an object into a string by reducing the
   * keys to individual elements separated by spaces, enclosing each element in double
   * quotes and separating them with an comma space.
   * 
   * @param { object } attributes - an object that contains key-value pairs, which are
   * then converted into a string using Object.keys and the reduce method.
   * 
   * @returns { string } a concatenation of key-value pairs in a space-separated string.
   */
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  /**
   * @description Combines an object's property names and their corresponding values
   * into a single string using the spread operator.
   * 
   * @param { object } styles - an object containing the styles to be joined, and its
   * value is passed to the `reduce()` method to concatenate the style names with their
   * values.
   * 
   * @returns { string } a concatenated list of style names and their values, separated
   * by semicolons.
   */
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
  }
  /**
   * @description Checks if a given transform object has any non-trivial changes in
   * size, position, rotation, or flipping, and returns `true` if any of these changes
   * are present, or `false` otherwise.
   * 
   * @param { object } transform - 2D transformation to be checked for meaningfulness.
   * 
   * @returns { boolean } a boolean value indicating whether the transform is meaningful
   * based on its size, x and y coordinates, rotate property, and flipX and flipY properties.
   */
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  /**
   * @description Generates a vector graphics transform for an icon based on provided
   * values from the `_ref` object. It creates an outer transformation matrix, inner
   * transformation matrices for translate, scale and rotate, and a path transformation
   * matrix to move the icon within its container.
   * 
   * @param { object } _ref - configuration object containing properties such as
   * `transform`, `containerWidth`, and `iconWidth`, which are used to determine the
   * transform for an SVG element.
   * 
   * @returns { object } an object containing three properties: `outer`, `inner`, and
   * `path`, each representing a transformation for a SVG element.
   */
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  /**
   * @description Generates CSS transform string for an element based on its transformation
   * properties, width and height, and whether it should be started centered or not.
   * 
   * @param { object } _ref2 - 3D transformation data passed from outside the function,
   * providing information on transform, width, height, startCentered state, and other
   * parameters needed for generating CSS styles.
   * 
   * @returns { string } a CSS string that transforms an element based on its `transform`,
   * `width`, `height`, and `startCentered` properties.
   */
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var baseStyles = ":host,:root{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Solid\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Regular\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Light\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Thin\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}";

  /**
   * @description Modifies the given CSS string based on configuration settings. It
   * replaces occurrences of `DEFAULT_CSS_PREFIX` and `DEFAULT_REPLACEMENT_CLASS` with
   * their corresponding values from the configuration, and then applies the same
   * replacement patterns to any custom properties. The modified CSS string is returned.
   * 
   * @returns { string } a modified CSS string with updated prefixes and replacements
   * based on configuration values.
   */
  function css() {
    var dcp = DEFAULT_CSS_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.cssPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dcp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var _cssInserted = false;

  /**
   * @description Determines whether to insert CSS code into the page based on configuration
   * and marks a flag as true after insertion, ensuring that it is only executed once.
   */
  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  var InjectCSS = {
    mixout: function mixout() {
      return {
        dom: {
          css: css,
          insertCss: ensureCss
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg: function beforeI2svg() {
          ensureCss();
        }
      };
    }
  };

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  /**
   * @description Determines whether the DOM is available and, if so, schedules a
   * function to be executed after a delay of zero seconds or pushes it into an array
   * of functions to be executed later.
   * 
   * @param { function. } fn - function that will be called once the document is ready.
   * 
   * 		- `IS_DOM`: a boolean flag indicating whether the browser's document object model
   * (DOM) is ready or not. It is set to `true` when the DOM is ready and `false` otherwise.
   * 		- `loaded`: an integer flag that indicates whether the function has been loaded
   * or not. If it is `0`, the function has not been loaded, while any other value
   * indicates that it has been loaded.
   * 		- `fn`: the function to be executed when the DOM is ready. It is passed as the
   * second argument to the `setTimeout` function.
   * 
   * @returns { any } a callback function pushed onto an array of functions to be
   * executed when the DOM is ready.
   */
  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  /**
   * @description Converts an abstract nodes object to HTML code. It retrieves the tag
   * name, attributes, and children from the input object and constructs the HTML output
   * using string concatenation.
   * 
   * @param { string } abstractNodes - HTML element or fragment that the function will
   * generate, and it can be an string of HTML code, an object containing attributes,
   * or an array of child elements to include in the generated HTML.
   * 
   * @returns { string } a HTML string consisting of an opening tag, attributes, and
   * children elements.
   */
  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  /**
   * @description Returns an object containing `prefix`, `iconName`, and `icon` properties
   * if `mapping`, `prefix`, and `iconName` are not null or empty, otherwise it returns
   * a null value.
   * 
   * @param { object } mapping - mapping of icons to their corresponding prefixes and
   * names, which is used to retrieve the icon for a given prefix and name.
   * 
   * @param { string } prefix - part of the icon path that precedes the `iconName`.
   * 
   * @param { string } iconName - name of the icon to be returned by the function, which
   * is looked up in the provided `mapping` object.
   * 
   * @returns { object } an object containing the `prefix`, `iconName`, and `icon` properties.
   */
  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  /**
   * @description Decodes Unicode code points from a string, handling surrogate pairs
   * and returning the resulting UCS-2 values as an array.
   * 
   * @param { string } string - 16-bit Unicode characters that are to be decoded into
   * UCS-2 form.
   * 
   * @returns { array } a list of Unicode code points.
   */
  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // eslint-disable-line eqeqeq
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }

  /**
   * @description Decodes a Unicode string and returns its hexadecimal representation,
   * or `null` if the string is empty.
   * 
   * @param { string } unicode - 16-bit Unicode code unit that is converted to a
   * hexadecimal string using the `ucs2decode` function.
   * 
   * @returns { string } a string representing the Unicode code point of the givenunicode
   * in hexadecimal format.
   */
  function toHex(unicode) {
    var decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }
  /**
   * @description Calculates a code point value for a given character index in a string,
   * taking into account surrogate pair characters.
   * 
   * @param { string } string - 16-bit Unicode code point of the character at the
   * specified `index` position in the string.
   * 
   * @param { number } index - 16-bit Unicode code point of the character in the `string`
   * that the function is called on, which the function then uses to determine if it
   * is a surrogate pair and calculate the value of the code point.
   * 
   * @returns { integer } an integer representing a Unicode code point value.
   */
  function codePointAt(string, index) {
    var size = string.length;
    var first = string.charCodeAt(index);
    var second;

    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);

      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }

    return first;
  }

  /**
   * @description Flattens an object containing icons and their expanded states into a
   * new object with icon names as keys and either the icon object or the expanded icon
   * value assigned to each key.
   * 
   * @param { object } icons - Object containing icon objects, each having an `iconName`
   * property and an optional `icon` property that indicates whether the icon should
   * be expanded or not.
   * 
   * @returns { object } an object containing key-value pairs of icons and their
   * corresponding expanded versions.
   */
  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  /**
   * @description Takes a prefix and an array of icon definitions, it normalizes them,
   * adds them to the namespace.hooks or styles object, and aliases 'fas' prefix to
   * 'fa' for ease of upgrading existing Font Awesome 4 users.
   * 
   * @param { string } prefix - prefix that will be used for defining new icons, and
   * it can be set to `fas` to automatically define icons with the `fa` prefix as well.
   * 
   * @param { array } icons - 2D icons that will be defined in the function, which can
   * be an array of icon objects or a single icon object containing the necessary
   * properties for defining the icon.
   */
  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
    d1: 1,
    d2: 2
  }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
    cls1: 1,
    d1: 2,
    cls2: 3,
    d2: 4
  }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
    cls1: 1,
    d1: 2
  })];

  var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
  var styles = namespace.styles,
      shims = namespace.shims;
  var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

  /**
   * @description Returns a boolean indicating whether a given name is reserved or not
   * based on its presence in the RESERVED_CLASSES array.
   * 
   * @param { string } name - name of a class to check if it is reserved or not, and
   * it is used in the function's logic to determine whether the class is reserved or
   * not.
   * 
   * @returns { boolean } a boolean value indicating whether the given name is reserved
   * or not.
   */
  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  /**
   * @description Takes a CSS prefix and a class string as input, returns the icon name
   * corresponding to the class string if it matches the provided prefix and is not a
   * reserved icon name, or `null` otherwise.
   * 
   * @param { string } cssPrefix - 1st part of the class name provided as an argument
   * to the function, which is used to determine if the resulting icon name is valid
   * for that prefix.
   * 
   * @param { string } cls - CSS class name of an element, which is split into its
   * prefix and icon name components, and the resulting icon name is returned if it
   * matches the specified `cssPrefix` and is not a reserved keyword.
   * 
   * @returns { string } the name of the icon for a given CSS prefix and class name,
   * or `null` if the name is reserved.
   */
  function getIconName(cssPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'number';
        });
        aliases.forEach(function (alias) {
          acc[alias.toString(16)] = iconName;
        });
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      acc[iconName] = iconName;

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'string';
        });
        aliases.forEach(function (alias) {
          acc[alias] = iconName;
        });
      }

      return acc;
    });
    _byAlias = lookup(function (acc, icon, iconName) {
      var aliases = icon[2];
      acc[iconName] = iconName;
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
      return acc;
    }); // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.

    var hasRegular = 'far' in styles || config.autoFetchSvg;
    var shimLookups = reduce(shims, function (acc, shim) {
      var maybeNameMaybeUnicode = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      if (typeof maybeNameMaybeUnicode === 'string') {
        acc.names[maybeNameMaybeUnicode] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      if (typeof maybeNameMaybeUnicode === 'number') {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange(function (c) {
    _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  /**
   * @description Maps a given prefix to its corresponding value in an object, returning
   * the value for a provided Unicode character.
   * 
   * @param { string } prefix - 8-bit prefix code used to search for a corresponding
   * Unicode value in the `_byUnicode` cache.
   * 
   * @param { string } unicode - 16-bit Unicode code point value that is looked up in
   * the `_byUnicode` object.
   * 
   * @returns { object } a value from the `_byUnicode` object, keyed by the input prefix.
   */
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  /**
   * @description Retrieves the value associated with a given `ligature` based on a
   * `prefix`, using an object mapped by prefix-ligature pairs.
   * 
   * @param { object } prefix - prefix for which to look up the ligature in _byLigature
   * dictionary.
   * 
   * @param { string } ligature - 3-character ligature that is being looked up in the
   * `_byLigature` dictionary.
   * 
   * @returns { object } a value associated with the given prefix and ligature.
   */
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  /**
   * @description Maps a prefix to an object that contains the associated value for an
   * alias provided as argument, returning the value associated with the given alias.
   * 
   * @param { string } prefix - prefix for which the `alias` is being looked up.
   * 
   * @param { string } alias - alias of an object in the `_byAlias` object, which is
   * used to look up the corresponding value in the function.
   * 
   * @returns { object } an object containing the value associated with the given alias.
   */
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  /**
   * @description Maps a name to an object containing either a predefined `prefix` or
   * `iconName`, or returns an empty object if no match is found in `_byOldName`.
   * 
   * @param { string } name - name of an object to look up in the `_byOldName` cache.
   * 
   * @returns { object } an object containing the person's name and associated details.
   */
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  /**
   * @description Takes a single argument `unicode` and returns an object containing
   * information about the corresponding emoji icon. It first checks if there is a
   * stored value for the provided `unicode` in the `_byOldUnicode` cache, and if not,
   * it looks up the new emoji name using the `byUnicode` function and returns the result.
   * 
   * @param { string } unicode - 16-bit Unicode character code to convert from old
   * Unicode to new Unicode.
   * 
   * @returns { object } an object with either an existing icon name or a new one created
   * by replacing the specified Unicode character with 'fas'.
   */
  function byOldUnicode(unicode) {
    var oldUnicode = _byOldUnicode[unicode];
    var newUnicode = byUnicode('fas', unicode);
    return oldUnicode || (newUnicode ? {
      prefix: 'fas',
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  /**
   * @description Returns the predefined default usable prefix for a given context.
   * 
   * @returns { _defaultUsablePrefix } a default usable prefix value.
   * 
   * 		- The `_defaultUsablePrefix` variable returned is a string that represents the
   * default usable prefix for the current user's account.
   * 		- The exact value of this string depends on the platform and environment in which
   * the function is called, as it is generated based on various factors such as the
   * current user's account information, platform settings, and system configuration.
   * 		- The returned value may include a combination of characters, digits, symbols,
   * and special symbols, forming a unique identifier for each user's account.
   */
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  /**
   * @description Maps a style or prefix to its corresponding canonical value, returning
   * `null` if no match is found. It takes into account the passed parameters
   * `styleOrPrefix`, `params`, and `family`.
   * 
   * @param { string } styleOrPrefix - style or prefix to be searched for in the
   * `FAMILY_CLASSIC` or `namespace.styles` array, depending on its value.
   * 
   * @returns { string } a prefix or defined styles for a given style or prefix, depending
   * on the input parameters.
   */
  function getCanonicalPrefix(styleOrPrefix) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$family = params.family,
        family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
    var style = PREFIX_TO_STYLE[family][styleOrPrefix];
    var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    return prefix || defined || null;
  }
  var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
  /**
   * @description Generates high-quality documentation for code given to it. It takes
   * an array of class names as input and reduces them to a single canonical icon name
   * and prefix, accounting for styles and skipped lookups.
   * 
   * @param { array } values - input list of values to check for canonial icons, and
   * it is used to determine the final icon prefix and name based on the list of values.
   * 
   * @returns { object } an object containing the canonical prefix and icon name for a
   * given set of values.
   */
  function getCanonicalIcon(values) {
    var _famProps;

    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups,
        skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
    var givenPrefix = null;
    var family = FAMILY_CLASSIC;

    if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
      return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
    })) {
      family = FAMILY_CLASSIC;
    }

    if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
      return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
    })) {
      family = FAMILY_SHARP;
    }

    var canonical = values.reduce(function (acc, cls) {
      var iconName = getIconName(config.cssPrefix, cls);

      if (styles[cls]) {
        cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
        givenPrefix = cls;
        acc.prefix = cls;
      } else if (PREFIXES[family].indexOf(cls) > -1) {
        givenPrefix = cls;
        acc.prefix = getCanonicalPrefix(cls, {
          family: family
        });
      } else if (iconName) {
        acc.iconName = iconName;
      } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
        acc.rest.push(cls);
      }

      if (!skipLookups && acc.prefix && acc.iconName) {
        var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
        var aliasIconName = byAlias(acc.prefix, acc.iconName);

        if (shim.prefix) {
          givenPrefix = null;
        }

        acc.iconName = shim.iconName || aliasIconName || acc.iconName;
        acc.prefix = shim.prefix || acc.prefix;

        if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
          // Allow a fallback from the regular style to solid if regular is not available
          // but only if we aren't auto-fetching SVGs
          acc.prefix = 'fas';
        }
      }

      return acc;
    }, emptyCanonicalIcon());

    if (values.includes('fa-brands') || values.includes('fab')) {
      canonical.prefix = 'fab';
    }

    if (values.includes('fa-duotone') || values.includes('fad')) {
      canonical.prefix = 'fad';
    }

    if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
      canonical.prefix = 'fass';
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }

    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
      // The fa prefix is not canonical. So if it has made it through until this point
      // we will shift it to the correct prefix.
      canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }

    return canonical;
  }

  var Library = /*#__PURE__*/function () {
    /**
     * @description Defines an object for storing definitions.
     */
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
          defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

          var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
          if (longPrefix) defineIcons(longPrefix, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          var aliases = icon[2];
          if (!additions[prefix]) additions[prefix] = {};

          if (aliases.length > 0) {
            aliases.forEach(function (alias) {
              if (typeof alias === 'string') {
                additions[prefix][alias] = icon;
              }
            });
          }

          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  /**
   * @description Updates a configuration object `obj` by applying the mixins and hooks
   * defined in an array of plugins. It removes default providers that are not included
   * in the plugins, and provides each plugin with the `providers` object. Finally, it
   * returns the updated `obj` configuration.
   * 
   * @param { array } nextPlugins - plugins that should be appended to the existing
   * plugins array, effectively updating the plugins collection.
   * 
   * @param { object } _ref - mixoutsTo object, which contains the references to the
   * mixins that the plugin should apply to.
   * 
   * @returns { object } an object containing the mixouts and hooks of registered plugins.
   */
  function registerPlugins(nextPlugins, _ref) {
    var obj = _ref.mixoutsTo;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(function (k) {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });

    _plugins.forEach(function (plugin) {
      var mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach(function (tk) {
        if (typeof mixout[tk] === 'function') {
          obj[tk] = mixout[tk];
        }

        if (_typeof(mixout[tk]) === 'object') {
          Object.keys(mixout[tk]).forEach(function (sk) {
            if (!obj[tk]) {
              obj[tk] = {};
            }

            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });

      if (plugin.hooks) {
        var hooks = plugin.hooks();
        Object.keys(hooks).forEach(function (hook) {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }

          _hooks[hook].push(hooks[hook]);
        });
      }

      if (plugin.provides) {
        plugin.provides(providers);
      }
    });

    return obj;
  }
  /**
   * @description Aggregates multiple hook functions and applies them to an initial
   * value, returning the accumulated result.
   * 
   * @param { object } hook - 1st argument passed to the `hookFns` array, which contains
   * the functions that are applied to the `accumulator` through nested application,
   * ultimately returning the final accumulated value.
   * 
   * @param { object } accumulator - result of the previous executions of the hook
   * functions, and it is returned at the end of the function after applying the new
   * hook functions to it.
   * 
   * @returns { any } an updated accumulator value after applying hook functions to it.
   */
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
    });
    return accumulator;
  }
  /**
   * @description Takes a hook function as input and applies it to an array of arguments
   * passed to it.
   * 
   * @param { string } hook - identifier of a hook function to be called in the sequence
   * of hook functions specified in the `_hooks` object.
   * 
   * @returns { undefined` value } `undefined`.
   * 
   * 		- The returned value is undefined.
   * 		- The hookFns array contains the array of functions associated with the specified
   * hook.
   */
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      hookFn.apply(null, args);
    });
    return undefined;
  }
  /**
   * @description Takes a hook and an array of arguments as input and applies them to
   * a corresponding provider method if it exists, otherwise it returns `undefined`.
   * 
   * @returns { undefined` value } a value or undefined, based on the `hook` parameter
   * and its associated provider.
   * 
   * 		- `hook`: The hook function that was passed as the first argument to the function.
   * It represents the context in which the providers were called.
   * 		- `args`: An array of arguments passed to the providers after the hook function.
   * These arguments are used to invoke each provider's method.
   * 		- `providers`: A mapping of hook functions to their corresponding provider
   * functions. This property contains the functions that were called to produce the output.
   */
  function callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
  }

  /**
   * @description Searches for an icon definition based on a given prefix and icon name,
   * using a combination of prefix and alias lookups and mappings in the `library.definitions`
   * and `namespace.styles` objects.
   * 
   * @param { object } iconLookup - icon definition information to be searched for in
   * the library or namespace, including its prefix and icon name.
   * 
   * @returns { icon } an icon definition object containing the resolved prefix and
   * icon name.
   * 
   * 		- `iconLookup`: an object containing information about the icon to be searched
   * for, including its prefix and icon name.
   * 		- `iconName`: the original icon name passed as a parameter to the function.
   * 		- `prefix`: the default or found prefix to use when looking up the icon.
   * 		- `library.definitions`: an object containing icon definitions from the specified
   * library.
   * 		- `namespace.styles`: an object containing styles for icons in the specified namespace.
   * 		- `byAlias`: a function that returns the alias of an icon name if it exists,
   * otherwise the original name.
   * 		- `iconFromMapping`: a function that returns an icon object based on its prefix
   * and name.
   */
  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
      iconLookup.prefix = 'fas';
    }

    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
  };
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        callHooks('beforeI2svg', params);
        callProvided('pseudoElements2svg', params);
        return callProvided('i2svg', params);
      } else {
        return Promise.reject('Operation requires a DOM of some kind.');
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        callHooks('watch', params);
      });
    }
  };
  var parse = {
    icon: function icon(_icon) {
      if (_icon === null) {
        return null;
      }

      if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
        return {
          prefix: _icon.prefix,
          iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
      }

      if (Array.isArray(_icon) && _icon.length === 2) {
        var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
        var prefix = getCanonicalPrefix(_icon[0]);
        return {
          prefix: prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }

      if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }

      if (typeof _icon === 'string') {
        var _prefix = getDefaultUsablePrefix();

        return {
          prefix: _prefix,
          iconName: byAlias(_prefix, _icon) || _icon
        };
      }
    }
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    parse: parse,
    library: library,
    findIconDefinition: findIconDefinition,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  /**
   * @description Configures and adds icons to the Font Awesome CDN library, builds the
   * library, and replaces existing instances with the updated versions. It also defines
   * hooks for adding packs, shims, and automatically replaces them upon addition.
   * 
   * @param { array } plugins - plugins object, which defines additional configuration
   * options for the `bootstrap` function.
   */
  function bootstrap(plugins) {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        callHooks('bootstrap');
      });
    }

    namespace.hooks = _objectSpread2(_objectSpread2({}, namespace.hooks), {}, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        build();
        autoReplace();
      },
      addPacks: function addPacks(packs) {
        packs.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prefix = _ref2[0],
              icons = _ref2[1];

          namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        });
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  /**
   * @description Modifies an object `val` to have properties `html`, `node`, and
   * `abstract`. It sets getters for these properties that call internal functions to
   * create the desired output.
   * 
   * @param { object } val - original object that will be modified through the application
   * of the provided getters for the `abstract`, `html`, and `node` properties.
   * 
   * @param { function. } abstractCreator - method that defines the `abstract` property
   * of the object, which maps to the `html` property and returns the transformed HTML
   * string when accessed.
   * 
   * 		- `get`: This property is defined as a getter function that returns an object
   * containing the creator function for the abstract variants of the input value. The
   * creator function is not specified directly in the code snippet provided.
   * 		- `html`: This property is also defined as a getter function, returning an array
   * of strings representing the HTML representation of each variant of the input value.
   * The `toHtml` function is used to convert the abstract variants into HTML strings.
   * 
   * @returns { object } a value with three properties: `abstract`, `html`, and `node`,
   * each providing a different representation of the input value.
   */
  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  /**
   * @description Modifies an SVG element based on input parameters. It calculates the
   * position of the main element using the transform property and adds CSS styles to
   * apply a translate animation to the element. The function then returns the modified
   * SVG element with its updated attributes and children.
   * 
   * @param { object } _ref - object passed to the `asIcon` function, containing
   * properties such as `children`, `main`, `mask`, `attributes`, and `transform`.
   * 
   * @returns { object } an SVG element with a transform origin set to the center of
   * the image, based on the `transform` property and styles.
   */
  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  /**
   * @description Takes an object `_ref` containing properties `prefix`, `iconName`,
   * `children`, and `symbol`, which are used to create an SVG symbol element with a
   * unique ID.
   * 
   * @param { object } _ref - configuration object that contains various properties
   * used to generate the SVG symbol, including `prefix`, `iconName`, `children`, and
   * `symbol`.
   * 
   * @returns { array } an SVG element containing a symbol element with a unique ID.
   */
  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id: id
        }),
        children: children
      }]
    }];
  }

  /**
   * @description Takes an object `params` and generates a SVG abstract element with
   * icons, masks, titles, and extra classes. It also provides a watchable attribute
   * for the icon. The function returns an object containing the children and attributes
   * of the generated SVG element.
   * 
   * @param { object } params - configuration object for generating an SVG abstract
   * element, which can include properties such as icons, prefix, icon name, transform,
   * symbol, title, mask Id, and extra attributes.
   * 
   * @returns { SVG abstract element } an SVG abstract element with optional title,
   * mask, and styles.
   * 
   * 		- `content`: An object containing an SVG element with various attributes and
   * child elements.
   * 		+ `children`: A list of child elements inside the SVG element.
   * 		+ `attributes`: An object containing attributes for the SVG element.
   * 			- `data-prefix`: The prefix for the icon.
   * 			- `data-icon`: The name of the icon.
   * 			- `class`: An array of class names to apply to the SVG element.
   * 			- `role`: The role of the SVG element (e.g., "img").
   * 			- `xmlns`: The namespace for the SVG element.
   * 			- `viewBox`: The view box coordinates of the SVG element.
   * 		+ Any additional attributes specified in the `extra` object.
   * 		- `args`: An object containing various properties that are used to generate the
   * SVG element.
   * 		+ `prefix`: The prefix for the icon.
   * 		+ `iconName`: The name of the icon.
   * 		+ `main`: A boolean indicating whether the main icon should be used.
   * 		+ `mask`: A boolean indicating whether a mask should be used.
   * 		+ `maskId`: The ID of the mask element.
   * 		+ `transform`: A string representing the transformation to apply to the icon.
   * 		+ `symbol`: A boolean indicating whether a symbol should be used instead of an
   * icon.
   * 		+ `title`: A boolean indicating whether a title should be generated for the SVG
   * element.
   * 		+ `titleId`: The ID of the title element.
   * 		+ Any additional properties specified in the `extra` object.
   * 		- `children`: An array of child elements returned by the `callProvided` function.
   * 		- `attributes`: An object containing attributes generated by the `callProvided`
   * function.
   */
  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) {
      content.children.push({
        tag: 'title',
        attributes: {
          id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });
      delete content.attributes.title;
    }

    var args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });

    var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
      children: [],
      attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
      children: [],
      attributes: {}
    },
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  /**
   * @description Takes in parameters `content`, `width`, `height`, `transform`, `title`,
   * `extra`, and `watchable`, and returns an array of HTML elements representing a
   * layer of text, with styling and centering applied as necessary.
   * 
   * @param { object } params - 7 objects that are needed to create the desired text-based
   * representation of an SVG diagram: `content`, `width`, `height`, `transform`,
   * `title`, `extra`, and `_params$watchable`.
   * 
   * @returns { array } an array of HTML elements, including a span element containing
   * the provided content and optionally a sr-only span element containing a title.
   */
  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread2({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }
  /**
   * @description Creates a list of HTML tags and attributes, based on provided parameters,
   * for the purpose of representing content and titles in an abstract way.
   * 
   * @param { object } params - object containing content, title, and extra attributes
   * to be used when creating the layers of the HTML output.
   * 
   * @returns { object } an array of HTML elements, including a span element with a
   * title attribute and a class attribute.
   */
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  var styles$1 = namespace.styles;
  /**
   * @description Takes an icon vector data and returns an object with `found: true`,
   * `width`, `height`, and an `icon` element with the icon path. If the input is an
   * array, it creates a group element with two child paths for primary and secondary
   * icons, otherwise it creates a single path element with the icon path.
   * 
   * @param { array } icon - 2D vector data of an icon, which is then converted into
   * an HTML element tagged with the appropriate CSS classes to display the icon.
   * 
   * @returns { object } an object containing information about a found icon, including
   * its width and height, as well as the icon itself as a Path element.
   */
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };

  /**
   * @description Checks if an icon with a given name and prefix is present in the
   * system. If it's not, it logs an error to the console.
   * 
   * @param { string } iconName - name of an icon that may be missing, as indicated by
   * the `config.showMissingIcons` setting.
   * 
   * @param { string } prefix - before the icon name in the error message when an icon
   * is missing.
   */
  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
  }

  /**
   * @description Retrieves an icon given its name and a prefix, promising an icon
   * object upon success or throwing an error when no match is found.
   * 
   * @param { string } iconName - name of the icon being searched for, which is used
   * to determine the appropriate prefix to use when searching for the icon in the
   * styles dictionary.
   * 
   * @param { string } prefix - prefix of an icon name, which is used to resolve the
   * icon based on the specified prefix and configuration.
   * 
   * @returns { object } an object containing information about the icon, including its
   * found status, width, height, and whether it's a missing icon.
   */
  function findIcon(iconName, prefix) {
    var givenPrefix = prefix;

    if (prefix === 'fa' && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }

    return new Promise(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: callProvided('missingIconAbstract') || {}
      };

      if (givenPrefix === 'fa') {
        var shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }

      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        var icon = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
      }));
    });
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"6.2.1\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };

  var noop$2 = function noop() {};

  /**
   * @description Checks if a given SVG element has an attribute called `DATA_FA_I2SVG`.
   * If the attribute exists, it returns `true`. Otherwise, it returns `false`.
   * 
   * @param { object } node - 3D node for which the function determines if it is being
   * watched.
   * 
   * @returns { string } a boolean value indicating whether a given node has the `i2svg`
   * attribute set.
   */
  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  /**
   * @description Returns whether a node has a specified prefix and icon attribute. It
   * first retrieves the prefix and icon attributes from the node using `getAttribute()`,
   * and then returns a boolean value indicating whether both are present and non-null.
   * 
   * @param { HTMLNode. } node - element for which to retrieve the `prefix` and `icon`
   * attributes.
   * 
   * 		- `getAttribute`: This is an attribute that can be accessed on the element to
   * retrieve information stored in the `DATA_PREFIX` or `DATA_ICON` attributes.
   * 		- `DATA_PREFIX`: This is a string attribute that stores a prefix value.
   * 		- `DATA_ICON`: This is a string attribute that stores an icon value.
   * 
   * @returns { boolean } a boolean value indicating whether both a prefix and icon
   * attribute are present on the given node.
   */
  function hasPrefixAndIcon(node) {
    var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon;
  }

  /**
   * @description Determines whether a DOM element has been replaced with a new class
   * name included in the `config.replacementClass` property. It does so by checking
   * if the element is not null or undefined and the element's `classList` property
   * exists, and if it contains the specified replacement class name.
   * 
   * @param { `HTMLElement`. } node - DOM element to be checked for the presence of the
   * `config.replacementClass` class.
   * 
   * 		- `node`: The deserialized input parameter representing an HTML node.
   * 		- `classList`: A property that returns a list of space-separated class names for
   * the element.
   * 		- `contains`: A method that checks if a given class name is present in the
   * `classList` property of the element.
   * 
   * @returns { boolean } a boolean value indicating whether the given node has been
   * replaced with the specified replacement class.
   */
  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }

  /**
   * @description Retrieves a mutator based on configuration settings, specifically the
   * `autoReplaceSvg` option, and returns it as a value.
   * 
   * @returns { Function } a mutator function that replaces SVG elements.
   * 
   * 		- If `config.autoReplaceSvg` is true, the mutator `replace` will be returned.
   * 		- If no suitable mutator can be found based on the value of `config.autoReplaceSvg`,
   * the `mutator` variable will contain a reference to the `replace` mutator or another
   * mutator that satisfies the condition.
   * 
   * 	In summary, the `getMutator` function returns either the `replace` mutator or an
   * alternative mutator based on the value of `config.autoReplaceSvg`.
   */
  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  /**
   * @description Creates a new SVG element with a given tag name and namespace, based
   * on the specified URL.
   * 
   * @param { string } tag - name of the SVG element to be created.
   * 
   * @returns { HTMLSVGElement } a SVG element with the specified tag and namespace.
   * 
   * 		- tag: This is the name of the SVG element being created, as a string. (e.g.,
   * 'rect', 'circle', 'text')
   * 
   * 	The return value of the function is an object that represents the SVG element.
   * The attributes of this object can be accessed using the dot notation, e.g., `tag.x`,
   * `tag.y`, `tag.width`, `tag.height`. Additionally, methods such as `additive()` and
   * `remove()` can be called on the element object to manipulate its properties further.
   */
  function createElementNS(tag) {
    return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
  }

  /**
   * @description Creates an HTML element with the given tag.
   * 
   * @param { string } tag -
   * 
   * @returns { object } a DOM element of the specified tag.
   */
  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }

  /**
   * @description Takes an abstract object representing SVG elements or strings and
   * returns the equivalent HTML element or a concatenation of such elements. It also
   * allows for attribute manipulation and child elements creation through its parameters.
   * 
   * @param { object } abstractObj - SVG element or its string representation that needs
   * to be converted into a HTML Element.
   * 
   * @returns { HTML element of the specified tag type, created by concatenating attribute
   * values and child elements produced by calling the `convertSVG` function recursively
   * on each child element } an SVG element created from the given abstract object,
   * with attributes and child elements converted as needed.
   * 
   * 		- `tag`: The tag name of the SVG element that is created, either `svg`, `rect`,
   * `circle`, etc. based on the input `abstractObj`.
   * 		- `attributes`: An object containing the attributes of the SVG element, such as
   * `x`, `y`, `width`, `height`, `fill`, `stroke`, etc.
   * 		- `children`: An array of child SVG elements that are appended to the parent SVG
   * element.
   * 
   * 	For example, if the input `abstractObj` is a string representing an SVG text
   * element, the output will be a `Node` object containing a `text` child node with
   * the contents of the input string. If the input `abstractObj` is an object representing
   * an SVG rectangle element, the output will be an `SVGRect` object containing
   * properties such as `x`, `y`, `width`, and `height`.
   */
  function convertSVG(abstractObj) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$ceFn = params.ceFn,
        ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

    if (typeof abstractObj === 'string') {
      return DOCUMENT.createTextNode(abstractObj);
    }

    var tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function (key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function (child) {
      tag.appendChild(convertSVG(child, {
        ceFn: ceFn
      }));
    });
    return tag;
  }

  /**
   * @description Takes a DOM node and returns its outer HTML as a comment in the form
   * "Font Awesome <https://fontawesome.com>"
   * 
   * @param { HTMLNode } node - HTML node that the function processes, which is converted
   * into a string with added text and an attribute for Font Awesome font.
   * 
   * 		- `outerHTML`: A string that represents the HTML content of the element node.
   * 		- Other properties: N/A (the function only modifies the `comment` variable).
   * 
   * @returns { string } a comment with an inserted link to Font Awesome.
   */
  function nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    /* BEGIN.ATTRIBUTION */

    comment = "".concat(comment, "Font Awesome fontawesome.com ");
    /* END.ATTRIBUTION */

    return comment;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];

      if (node.parentNode) {
        mutation[1].forEach(function (abstract) {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });

        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          var comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete abstract[0].attributes.id;

      if (abstract[0].attributes.class) {
        var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }

          return acc;
        }, {
          toNode: [],
          toSvg: []
        });
        abstract[0].attributes.class = splitClasses.toSvg.join(' ');

        if (splitClasses.toNode.length === 0) {
          node.removeAttribute('class');
        } else {
          node.setAttribute('class', splitClasses.toNode.join(' '));
        }
      }

      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  /**
   * @description Calls the given operation `op()` synchronously.
   * 
   * @param { operation to be performed. } op - operation to be performed, and it is
   * called by the `op()` method when the `performOperationSync()` function is executed.
   * 
   * 		- `op`: An arbitrary function that takes no arguments.
   */
  function performOperationSync(op) {
    op();
  }

  /**
   * @description Performs an operation on a dom node, it takes two arguments, mutations
   * and callback which is executed after the operation is complete
   * 
   * @param { array } mutations - collection of DOM mutations to be performed by the
   * function, which can include modifications such as element addition, removal, or
   * properties changes.
   * 
   * @param { `function`. } callback - callback function to be executed after the
   * mutations have been applied.
   * 
   * 		- `typeof callback === 'function'` - This property returns a boolean indicating
   * whether the value of `callback` is a function or not. If `callback` is not a
   * function, the value of `noop$2` (a special function that does nothing) is assigned
   * to `callbackFunction`.
   * 		- `config.mutateApproach === MUTATION_APPROACH_ASYNC` - This property indicates
   * the approach used for mutation in the perform operation. If `MUTATION_APROACH_ASYNC`
   * is specified, `WINDOW.requestAnimationFrame` or `performOperationSync` are used
   * as the frame function for the mutation.
   */
  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  /**
   * @description Sets `disabled` to `true`.
   */
  function disableObservation() {
    disabled = true;
  }
  /**
   * @description Sets the `disabled` variable to `false`, indicating that observation
   * is enabled.
   */
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  /**
   * @description Observes mutations on a DOM tree using a MutationObserver instance.
   * It handles different types of mutations, including childList, attributes, and
   * characterData changes, as well as replaces and inserts in the tree.
   * 
   * @param { object } options - configuration for the mutation observer, including the
   * callback functions for tree and pseudo-elements, the root element to observe, and
   * settings for attribute changes to be monitored.
   * 
   * @returns { MUTATION_OBSERVER instance } a MutationObserver instance that observes
   * mutations in the DOM for the given options.
   * 
   * 		- `mo`: This is the `MUTATION_OBSERVER` instance that gets created when the
   * `observe` function is called. It is used to observe mutations in the DOM.
   * 		- `objects`: This is an array of mutation records, each representing a single
   * mutation event that has occurred in the DOM. The records contain information about
   * the type of mutation, the target node, and other relevant details.
   * 		- `mutationRecord`: This is a specific instance of a mutation record in the
   * `objects` array. It contains information about the mutation event, including the
   * type of mutation, the target node, and the attribute name (if applicable).
   * 		- `treeCallback`: This is a function that gets called when a mutation occurs
   * that affects the structure of a tree node. It can be used to perform any necessary
   * actions in response to the mutation.
   * 		- `nodeCallback`: This is a function that gets called when a mutation occurs
   * that affects a particular node. It can be used to perform any necessary actions
   * in response to the mutation.
   * 		- `pseudoElementsCallback`: This is a function that gets called when a mutation
   * occurs that affects an element's pseudo-element. It can be used to perform any
   * necessary actions in response to the mutation.
   * 		- `observeMutationsRoot`: This is the root element of the tree that the observer
   * should watch for mutations. By default, this is set to `DOCUMENT`.
   * 		- `disabled`: This is a boolean value that indicates whether or not the observer
   * should be disabled (i.e., stop observing mutations).
   * 
   * 	The function takes several options as input, which can be used to customize the
   * behavior of the observer. These options include:
   * 
   * 		- `treeCallback`: A function that gets called when a mutation occurs that affects
   * the structure of a tree node.
   * 		- `nodeCallback`: A function that gets called when a mutation occurs that affects
   * a particular node.
   * 		- `pseudoElementsCallback`: A function that gets called when a mutation occurs
   * that affects an element's pseudo-element.
   * 		- `observeMutationsRoot`: The root element of the tree that the observer should
   * watch for mutations. By default, this is set to `DOCUMENT`.
   * 		- `config`: An object that contains configuration options for the observer.
   * 
   * 	The function returns the `MUTATION_OBSERVER` instance that gets created when the
   * `observe` function is called.
   */
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var _options$treeCallback = options.treeCallback,
        treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
        _options$nodeCallback = options.nodeCallback,
        nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
        _options$pseudoElemen = options.pseudoElementsCallback,
        pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      var defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  /**
   * @description Disconnects a client's Mo from the provided server.
   * 
   * @returns { undefined` value } void.
   * 
   * 		- `mo`: This is a reference to an instance of the `Mozilla.OptionalDoubleBuffering`
   * class. If `mo` is not present in the output, it means that the function was
   * successful and no error occurred.
   */
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  /**
   * @description Parses the style attribute of an HTML element and returns an object
   * containing key-value pairs of property names and values.
   * 
   * @param { object } node - HTML element for which the styles should be extracted.
   * 
   * @returns { object } an object containing style values for various properties.
   */
  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  /**
   * @description Takes a node object and extracts icon information, such as prefix and
   * icon name, based on various attributes and inner text. It also fetches an SVG icon
   * if necessary. The extracted information is returned as an object with the parsed
   * class values.
   * 
   * @param { object } node - DOM element whose attributes and inner text are used to
   * generate a semantic class name for an icon.
   * 
   * @returns { object } an object containing prefix and icon name information for a
   * class, based on attributes and inner text of the input node.
   */
  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.iconName && val.prefix) {
      return val;
    }

    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }

    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }

    return val;
  }

  /**
   * @description Takes a DOM node and returns an object with additional attributes,
   * including an `aria-labelledby` attribute for accessibility purposes if the function
   * is ran with automatic A11y enabled.
   * 
   * @param { HTMLNode (HTML Element). } node - HTML element that attributesParser is
   * called for, and it is used to access and manipulate its attributes.
   * 
   * 		- `node`: The given DOM node object, which may contain attributes such as `title`,
   * `data-fa-title-id`, etc.
   * 		- `toArray(node.attributes)`: Converts the Node.js `attributes` property of the
   * `node` object to an array of attribute objects.
   * 		- `reduce()`: Applies a reducer function to each element in the array, modifying
   * the accumulator object `acc` with each iteration. The function takes two arguments:
   * the current element (`attr`) and the previous accumulated object (`acc`). If the
   * `name` property of the current attribute is neither `'class'` nor `'style'`, it
   * sets a property of the accumulator object `acc` with the same name as the attribute.
   * 		- `var title = node.getAttribute('title');`: Returns the value of the `title`
   * attribute of the `node` object.
   * 		- `var titleId = node.getAttribute('data-fa-title-id');`: Returns the value of
   * the `data-fa-title-id` attribute of the `node` object.
   * 		- `if (config.autoA11y)`: If the `config.autoA11y` variable is truthy, proceed
   * to modify the extra attributes of the resulting object.
   * 		- `extraAttributes['aria-labelledby'] = ...`: Sets a property of the resulting
   * object called `aria-labelledby`, which contains the concatenation of the string
   * literals `"${config.replacementClass}"` and the generated unique identifier
   * `${nextUniqueId()}` .
   * 		- `extraAttributes['aria-hidden'] = 'true';`: Sets the `aria-hidden` property
   * of the resulting object to the string literal `'true'`.
   * 		- `extraAttributes['focusable'] = 'false';`: Sets the `focusable` property of
   * the resulting object to the string literal `'false'`.
   * 
   * 	In summary, this function extracts attributes from a given DOM node, and modifies
   * them according to a configuration parameter. The modified attributes are returned
   * in an extraAttributes object for further processing.
   * 
   * @returns { object } an object containing additional HTML attributes based on the
   * node's attributes and configuration settings.
   */
  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');
    var titleId = node.getAttribute('data-fa-title-id');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  /**
   * @description Creates an object with various properties related to meta information,
   * including icon name, title, title ID, prefix, transform, symbol, mask, and extra
   * properties for classes, styles, and attributes.
   * 
   * @returns { object } an object containing various properties representing different
   * aspects of a metadata object.
   */
  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  /**
   * @description Takes a DOM node as input and returns an object containing metadata
   * for the node, including its icon name, title, prefix, and extra classes, styles,
   * and attributes. The function uses various hooks and utilities to parse the node's
   * properties and generate the metadata.
   * 
   * @param { object } node - DOM node that the `parseMeta` function is called upon,
   * and provides the information for parsing its metadata.
   * 
   * @returns { object } an object with various properties related to the HTML element
   * being parsed.
   */
  function parseMeta(node) {
    var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      styleParser: true
    };

    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraAttributes = attributesParser(node);
    var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    var extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }

  var styles$2 = namespace.styles;

  /**
   * @description Evaluates an SVG node and generates a mutation based on the evaluation
   * outcome.
   * 
   * @param { object } node - Node object that needs to be processed and mutated with
   * regards to its metadata.
   * 
   * @returns { string } a generated mutation based on the given node and metadata.
   */
  function generateMutation(node) {
    var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided('generateLayersText', node, nodeMeta);
    } else {
      return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
  }

  var knownPrefixes = new Set();
  FAMILIES.map(function (family) {
    knownPrefixes.add("fa-".concat(family));
  });
  Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
  Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
  knownPrefixes = _toConsumableArray(knownPrefixes);

  /**
   * @description Retrieves and marks nodes based on prefixes, performs mutations, and
   * calls a callback when complete.
   * 
   * @param { Element node(s). } root - DOM element to which the `onTree` function is
   * called, and it is used to perform the necessary CSS mutations to display the tree
   * structure.
   * 
   * 		- `callback`: a parameter passed to the function indicating whether an SVG should
   * be generated or not. If it is provided, it must be a non-null, non-undefined value.
   * (verbatim)
   * 		- `DOCMENT`: a reference to the document object model, used for accessing classList
   * properties. (verbatim)
   * 		- `htmlClassList`: a reference to the HTML class list object, used for adding
   * or removing classes from elements. (verbatim)
   * 		- `hclAdd`: a function that adds a class to an element. (definition)
   * 		- `hclRemove`: a function that removes a class from an element. (definition)
   * 		- `knownPrefixes`: an array of prefixes for SVG icons. (definition)
   * 		- `FAMILIES`: an array of font families for SVG icons. (definition)
   * 		- `styles$2`: an object of styles for SVG icons. (definition)
   * 		- `config`: a configuration object for the auto-fetching of SVG icons. (definition)
   * 		- `perf`: a performance measure function for tracking the time taken in the
   * function. (verbatim)
   * 		- `mark`: a function that marks the beginning and end of a mutation process. (definition)
   * 		- `perform`: a function that performs mutations on the elements in the `root`
   * collection. (definition)
   * 
   * @returns { Promise } a promise that resolves when the necessary CSS class changes
   * have been made to the HTML document.
   */
  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
      return "fa-".concat(f);
    }).concat(Object.keys(styles$2));

    if (!prefixes.includes('fa')) {
      prefixes.push('fa');
    }

    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }

    var candidates = [];

    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {// noop
    }

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return Promise.resolve();
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e.name === 'MissingIcon') {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new Promise(function (resolve, reject) {
      Promise.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function (e) {
        mark();
        reject(e);
      });
    });
  }

  /**
   * @description Performs a mutation operation on a node and calls a callback function
   * with the mutated state if any.
   * 
   * @param { object } node - DOM node to mutate or operate on.
   */
  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  /**
   * @description Takes a callback `next`, an optional `maybeIconDefinition`, and an
   * optional `params` object. It returns a function that calls the `next` callback
   * with an icon definition and any additional `mask` parameters, if provided.
   * 
   * @param { Promise } next - result of calling the provided function, and it is passed
   * as an argument to the inner function to be processed further.
   * 
   * @returns { object } a new icon definition object, masked with the specified mask
   * object.
   */
  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask: mask
      }));
    };
  }

  var render = function render(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return domVariants(_objectSpread2({
      type: 'icon'
    }, iconDefinition), function () {
      callHooks('beforeDOMElementCreation', {
        iconDefinition: iconDefinition,
        params: params
      });

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout: function mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.i2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;
        return onTree(node, callback);
      };

      providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
        var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            titleId = nodeMeta.titleId,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            maskId = nodeMeta.maskId,
            extra = nodeMeta.extra;
        return new Promise(function (resolve, reject) {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                main = _ref2[0],
                mask = _ref2[1];

            resolve([node, makeInlineSvgAbstract({
              icons: {
                main: main,
                mask: mask
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              maskId: maskId,
              title: title,
              titleId: titleId,
              extra: extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };

      providers$$1.generateAbstractIcon = function (_ref3) {
        var children = _ref3.children,
            attributes = _ref3.attributes,
            main = _ref3.main,
            transform = _ref3.transform,
            styles = _ref3.styles;
        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        var nextChild;

        if (transformIsMeaningful(transform)) {
          nextChild = callProvided('generateAbstractTransformGrouping', {
            main: main,
            transform: transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }

        children.push(nextChild || main.icon);
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var Layers = {
    mixout: function mixout() {
      return {
        layer: function layer(assembler) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes;
          return domVariants({
            type: 'layer'
          }, function () {
            callHooks('beforeDOMElementCreation', {
              assembler: assembler,
              params: params
            });
            var children = [];
            assembler(function (args) {
              Array.isArray(args) ? args.map(function (a) {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: 'span',
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
              },
              children: children
            }];
          });
        }
      };
    }
  };

  var LayersCounter = {
    mixout: function mixout() {
      return {
        counter: function counter(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'counter',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    }
  };

  var LayersText = {
    mixout: function mixout() {
      return {
        text: function text(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$transform = params.transform,
              transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
              _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'text',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersTextAbstract({
              content: content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.generateLayersText = function (node, nodeMeta) {
        var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;
        var width = null;
        var height = null;

        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }

        if (config.autoA11y && !title) {
          extra.attributes['aria-hidden'] = 'true';
        }

        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width: width,
          height: height,
          transform: transform,
          title: title,
          extra: extra,
          watchable: true
        })]);
      };
    }
  };

  var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  /**
   * @description Takes a string input `content`, and outputs an object containing two
   * properties: `value` representing the hexadecimal value of the input, and `isSecondary`
   * indicating whether the input is a prepended or doubled code point.
   * 
   * @param { string } content - input text for which the function will generate a hex
   * value
   * 
   * @returns { object } a dictionary containing the hexadecimal value of the input
   * content and a boolean indicating whether it is a secondary character.
   */
  function hexValueFromContent(content) {
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    var codePoint = codePointAt(cleaned, 0);
    var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
      value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
      isSecondary: isPrependTen || isDoubled
    };
  }

  /**
   * @description Replaces an existing pseudo-element with a new one based on a provided
   * icon name, prefix, and position within the element tree. It first checks if the
   * node has already been processed and if the current computed style contains a valid
   * font family and content. If so, it deletes the previous pseudo-element and creates
   * a new one with the provided icon name, prefix, and position. Otherwise, it rejects
   * the promise.
   * 
   * @param { HTMLNode } node - element that contains the Font Awesome icon, which is
   * being processed for replacement with a new icon.
   * 
   * 		- `position`: A string representing the position of the icon in the DOM, either
   * `'::before'` or `'::after'`.
   * 
   * 	The function performs the following actions on the `node`:
   * 
   * 	1/ Checks if the node already has a `FA-PSEUDO-ELEMENT` attribute set. If it does,
   * that means it is already being processed, and the function ends immediately.
   * 	2/ If the `fontFamily` property of the current computed style is null or does not
   * match the expected pattern `'Sharp'`, `Solid', 'Regular', 'Light', 'Thin', 'Duotone',
   * 'Brands', or 'Kit'`, then the node has already been processed, and no action is taken.
   * 	3/ If the `fontFamily` property matches the expected pattern, the function extracts
   * the `content` property of the current computed style and checks if it is not null
   * or empty.
   * 	4/ Based on the content, the function constructs a new icon name and prefix, using
   * the `byUnicode()` and `byOldUnicode()` functions to convert the hex value into an
   * icon name and prefix, respectively. If the resulting icon name and prefix are
   * different from the previous one, the function creates a new `::before` or `::after`
   * pseudo-element with the icon name and prefix set as attributes.
   * 	5/ If the `node` already has a `FA-PSEUDO-ELEMENT` attribute set, the function
   * deletes the existing pseudo-element.
   * 	6/ The function then finds the corresponding main icon and mask icon using the
   * `findIcon()` function, constructs an abstract element with the icon names, prefix,
   * and extra attributes, and inserts or appends the abstract element to the `node`
   * as a child. Finally, the function removes the `pendingAttribute` attribute from
   * the `node`.
   * 
   * @param { string } position - 2-char pseudo-class that the function should replace
   * with an icon.
   * 
   * @returns { Promise } an abstract SVG element that represents a Font Awesome icon.
   */
  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new Promise(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');

        var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
        var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

        var _hexValueFromContent = hexValueFromContent(_content),
            hexValue = _hexValueFromContent.value,
            isSecondary = _hexValueFromContent.isSecondary;

        var isV4 = fontFamily[0].startsWith('FontAwesome');
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName;

        if (isV4) {
          var iconName4 = byOldUnicode(hexValue);

          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
        // already done so with the same prefix and iconName


        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));
            var element = DOCUMENT.createElement('svg');

            if (position === '::before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = abstract.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  /**
   * @description Performs a two-part operation of replacing the content of a specified
   * node by combining the results of two Promise.all() calls: one for adding an element
   * before the specified node and another for adding an element after it.
   * 
   * @param { HTMLNode } node - DOM element that requires the replacement of its content
   * with the results of the `replaceForPosition()` function calls applied to it.
   * 
   * 		- `node`: A NodeList or DOM element to be processed.
   * 
   * 	The function then returns a Promise containing two resolved values:
   * `replaceForPosition('::before')` and `replaceForPosition('::after')`.
   * 
   * @returns { array } a promise of two returns: `::before` and `::after`.
   */
  function replace(node) {
    return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
  }

  /**
   * @description Determines whether an HTML node is a valid element for further
   * processing, based on parent node, tag name, and attribute presence.
   * 
   * @param { object } node - DOM element to be evaluated for processability.
   * 
   * @returns { boolean } a boolean value indicating whether a given HTML node is
   * processable or not.
   */
  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  /**
   * @description Performs a search on the DOM tree by traversing and transforming all
   * pseudo-elements of a given element using a series of operations.
   * 
   * @param { object } root - element or other document structure to which pseudo-elements
   * should be searched for and processed.
   * 
   * @returns { Promise } a resolved Promise object containing the processed pseudo-elements.
   */
  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      Promise.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var PseudoElements = {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.pseudoElements2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };

  var _unwatched = false;
  var MutationObserver$1 = {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          observe(chainHooks('mutationObserverCallbacks', {}));
        },
        noAuto: function noAuto() {
          disconnect();
        },
        watch: function watch(params) {
          var observeMutationsRoot = params.observeMutationsRoot;

          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks('mutationObserverCallbacks', {
              observeMutationsRoot: observeMutationsRoot
            }));
          }
        }
      };
    }
  };

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var transformString = node.getAttribute('data-fa-transform');

          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }

          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractTransformGrouping = function (_ref) {
        var main = _ref.main,
            transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        var operations = {
          outer: outer,
          inner: inner,
          path: path
        };
        return {
          tag: 'g',
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  /**
   * @description Modifies an Abstract element's attributes to set its fill color to
   * black, or forces the value if present in the function arguments.
   * 
   * @param { object } abstract - 2D drawing context, which determines whether to fill
   * the shape with black or use the specified value if provided.
   * 
   * @returns { HTMLMetaElement } an object with a filled attribute set to "black".
   * 
   * 		- `force`: A boolean parameter that determines whether the fill color is set to
   * 'black' explicitly or inherited from the parent element. It can be either `true`
   * or `false`.
   * 		- `abstract`: The input parameter passed to the function, which represents an
   * abstract DOM element.
   */
  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }

    return abstract;
  }

  /**
   * @description Removes the "g" tag from an abstract object and returns its child
   * elements or the original abstract object if it doesn't have the "g" tag.
   * 
   * @param { object } abstract - level of abstraction for which the code needs to be
   * documented, and it determines whether the children or only the original abstract
   * element are returned.
   * 
   * @returns { array } a list of nodes.
   */
  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }

  var Masks = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var maskData = node.getAttribute('data-fa-mask');
          var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
            return i.trim();
          }));

          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }

          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute('data-fa-mask-id');
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractMask = function (_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            explicitMaskId = _ref.maskId,
            transform = _ref.transform;
        var mainWidth = main.width,
            mainPath = main.icon;
        var maskWidth = mask.width,
            maskPath = mask.icon;
        var trans = transformForSvg({
          transform: transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: 'rect',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: 'white'
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: 'mask',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread2({
            fill: 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var MissingIconIndicator = {
    provides: function provides(providers) {
      var reduceMotion = false;

      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      providers.missingIconAbstract = function () {
        var gChildren = [];
        var FILL = {
          fill: 'currentColor'
        };
        var ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s'
        }; // Ring

        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          })
        });

        var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: 'opacity'
        });

        var dot = {
          tag: 'circle',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: '256',
            cy: '364',
            r: '28'
          }),
          children: []
        };

        if (!reduceMotion) {
          dot.children.push({
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: 'r',
              values: '28;14;28;28;14;28;'
            })
          }, {
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;1;1;0;1;'
            })
          });
        }

        gChildren.push(dot);
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
          }),
          children: reduceMotion ? [] : [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;0;0;0;1;'
            })
          }]
        });

        if (!reduceMotion) {
          // Exclamation
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: '0',
              d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
            }),
            children: [{
              tag: 'animate',
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: '0;0;1;1;0;0;'
              })
            }]
          });
        }

        return {
          tag: 'g',
          attributes: {
            'class': 'missing'
          },
          children: gChildren
        };
      };
    }
  };

  var SvgSymbols = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var symbolData = node.getAttribute('data-fa-symbol');
          var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
          accumulator['symbol'] = symbol;
          return accumulator;
        }
      };
    }
  };

  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

  registerPlugins(plugins, {
    mixoutsTo: api
  });
  bunker(bootstrap);

}());
