/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function () {
  'use strict';

  /**
   * @description Determines the type of an object, considering various cases including
   * Symbol objects and its Iterator property.
   * 
   * @param { object } obj - object being tested for its type.
   * 
   * @returns { string } a string indicating the type of the input object.
   */
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  /**
   * @description Verifies whether an instance is an instance of a constructor. If it's
   * not, it throws a `TypeError`.
   * 
   * @param { `Instance`. } instance - instance of the class being called, and is used
   * to check if it is an instance of the class that the function was defined for.
   * 
   * 		- `instance`: The object that is being checked for instanceof the constructor
   * function. It may or may not have various attributes or properties.
   * 		- `Constructor`: The constructor function against which `instance` is being
   * checked for instanceof. This function has a specific structure and contains
   * information about how to check if an object is an instance of it.
   * 
   * @param { `Error`. } Constructor - class to which the `instance` argument must be
   * an instance of, and the function checks if that is the case before throwing an error.
   * 
   * 		- `instance`: The object being checked for correct calling as a class. (type: any)
   * 		- `Constructor`: The class to which `instance` should be instanced. (type:
   * Function or Object)
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
   * @description Defines a set of object properties for a target object using property
   * descriptors. It sets enumerable, configurable, and writable flags for each descriptor,
   * and then defines a property on the target object for each descriptor.
   * 
   * @param { object } target - object on which the `Object.defineProperty()` method
   * is called and serves as the object that the properties are defined on.
   * 
   * @param { array } props - array of object descriptors defining properties to be
   * added to an object.
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
   * @description Defines properties for a class constructor and its prototype, and
   * returns the constructed class.
   * 
   * @param { Function reference. } Constructor - base class for which properties are
   * defined using the `protoProps` and `staticProps` arguments in the `_createClass()`
   * function.
   * 
   * 		- `Constructor`: This is the primary class to which properties will be assigned
   * during initialization. It can have various properties and attributes based on user
   * input.
   * 		- `protoProps`: An object containing property definitions for the prototype chain
   * of `Constructor`. If present, it helps create properties in `Constructor.prototype`.
   * 		- `staticProps`: An object containing static property definitions for the
   * `Constructor` class itself. If present, it defines properties that will be defined
   * on the `Constructor` class without being associated with any particular instance.
   * 
   * @param { object } protoProps - prototype properties that should be defined on the
   * instance of the constructed class when the `Constructor` is called.
   * 
   * @param { object } staticProps - non-instance properties of the class to be created
   * and defines them on the class object directly, rather than on its prototype.
   * 
   * @returns { Function } a constructor function that creates an object with defined
   * properties.
   * 
   * 		- `Constructor`: The constructed class object.
   * 		- `protoProps`: An object containing properties that will be defined as properties
   * on the prototype of the constructed class.
   * 		- `staticProps`: An object containing properties that will be defined as static
   * members of the constructed class.
   */
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * @description Modifies an object by adding or setting a property, taking into account
   * if the key already exists in the object and providing options for the property's
   * value, enumerability, configurability, and writability.
   * 
   * @param { object } obj - object on which the defineProperty method will be called.
   * 
   * @param { string } key - property name or key for which the property is being defined
   * or modified in the target object, `obj`.
   * 
   * @param { object } value - new value to be associated with the property.
   * 
   * @returns { object } an object with a property added or existing properties modified
   * according to the input arguments.
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
   * @description Spreads the properties of an object to a new target object by iterating
   * over the keys of the source object and applying them to the target, including
   * enumerable symbols if available.
   * 
   * @param { object } target - object that the function will modify by spreading the
   * properties of the iterated objects onto it.
   * 
   * @returns { object } an object that contains all the properties of the `target`
   * object, plus any new properties specified in the `arguments`.
   */
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  /**
   * @description Takes an array `arr` and an integer `i` as input, and returns an array
   * of the elements of `arr` up to but excluding the `i`-th element.
   * 
   * @param { array } arr - 2D or 1D array that gets sliced into a new array with a
   * specified number of elements.
   * 
   * @param { number } i -
   * 
   * @returns { array } an array containing a subset of the elements from the original
   * array.
   */
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  /**
   * @description Transforms an array-like value into a valid JavaScript array, handling
   * potential holes and non-iterable values.
   * 
   * @param { array } arr - 3D array that is converted into a consumable array through
   * a series of operations.
   * 
   * @returns { array } an array of the input value, regardless of its type.
   */
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  /**
   * @description Transforms an array with holes into a new array without holes by
   * replacing each element with a copy of its index in a new array.
   * 
   * @param { array } arr - 0-dimensional array that will be emptied of any "holes" (
   * undefined or null values) and returned as a new array without those holes.
   * 
   * @returns { array } a new array with the same elements as the input array, without
   * any holes.
   */
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  /**
   * @description Determines if the provided array is a genuine one and returns it
   * unmodified when it's an array, otherwise returns a new instance of that type
   * containing all the values found in the argument, ignoring any holes (undefined or
   * null).
   * 
   * @param { array } arr - 0-dimensional array that the function operates on.
   * 
   * @returns { array } an array with any hole-likes objects filled with undefined values.
   */
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  /**
   * @description Converts an iterable object into an array, handling cases where the
   * object is iterable or a prototype chain leads to an iterable result.
   * 
   * @param { any } iter - iterable object or argument that will be converted into an
   * array.
   * 
   * @returns { array } an array containing all elements of the input iterable object.
   */
  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  /**
   * @description Takes an iterable and a limit as input, returns an array with the
   * elements from the iterable up to the specified limit.
   * 
   * @param { object } arr - iterable object to be converted into an array.
   * 
   * @param { number } i - maximum number of elements to include in the resulting array,
   * beyond which the function will stop iterating and return the current array.
   * 
   * @returns { array } an array of up to `i` elements, obtained by iterating over an
   * input iterable.
   */
  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
   * @description Throws a `TypeError` when an invalid attempt is made to spread a
   * non-iterable instance.
   */
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * @description Throws a `TypeError` when an object that is not iterable is provided
   * as rest parameter.
   */
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_FAMILY_PREFIX = 'fa';
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
  var PREFIX_TO_STYLE = {
    'fas': 'solid',
    'far': 'regular',
    'fal': 'light',
    'fad': 'duotone',
    'fab': 'brands',
    'fak': 'kit',
    'fa': 'solid'
  };
  var STYLE_TO_PREFIX = {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  };
  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

  var FONT_WEIGHT_TO_PREFIX = {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal'
  };
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  /**
   * @description Retrieves the value of an attribute within an HTML element. It does
   * so by querying the element using its `querySelector` method and then accessing the
   * attribute's value via the `getAttribute` method.
   * 
   * @param { string } attr - attribute for which the function will retrieve the
   * configuration or value from an HTML element.
   * 
   * @returns { string } a string value of an attribute of an HTML script element.
   */
  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  /**
   * @description Converts an input value to a boolean value. If the input is empty
   * string, it returns `true`.
   * 
   * @param { string } val - value of the attribute being processed, which can be an
   * empty string, a falsey value (string or number), or a truey value (string) that
   * will determine whether the attribute should be toggled to true.
   * 
   * @returns { boolean } the value of the input `val`, without any default values or
   * assumptions.
   */
  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
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
    familyPrefix: DEFAULT_FAMILY_PREFIX,
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
  };

  var _config = _objectSpread({}, _default, initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;

  var config = _objectSpread({}, _config);

  WINDOW.FontAwesomeConfig = config;

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
   * @description Determines whether the DOM is available and if so schedules a call
   * to the passed function after a short delay or pushes it into a queue for later execution.
   * 
   * @param { Function reference/value. } fn - code function to be executed when the
   * DOM is ready, and it is added to an array of functions to be executed later if the
   * function is called when the DOM is not ready.
   * 
   * 		- `fn`: The function passed as an argument to the `domready` function.
   * 
   * @returns { array } a timer that schedules the provided function to run after the
   * Document Object Model (DOM) has finished loading, or it pushes the function onto
   * a list to be executed later.
   */
  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  var PENDING = 'pending';
  var SETTLED = 'settled';
  var FULFILLED = 'fulfilled';
  var REJECTED = 'rejected';

  var NOOP = function NOOP() {};

  var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
  var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var asyncQueue = [];
  var asyncTimer;

  /**
   * @description Runs promise callbacks in an array `asyncQueue`, then resets the array
   * and sets the `asyncTimer` to `false`.
   */
  function asyncFlush() {
    // run promise callbacks
    for (var i = 0; i < asyncQueue.length; i++) {
      asyncQueue[i][0](asyncQueue[i][1]);
    } // reset async asyncQueue


    asyncQueue = [];
    asyncTimer = false;
  }

  /**
   * @description Adds a callback and an argument to the asynchronous call queue, then
   * checks if an timer is set for flushing the queue and sets one if not.
   * 
   * @param { `function`. } callback - asynchronous task to be executed by the `asyncCall`
   * function.
   * 
   * 		- `callback`: This is the callback function provided as an argument to the function.
   * 		- `arg`: This is the optional argument provided along with the callback function.
   * 
   * @param { argument. } arg - 2nd argument passed to the callback function when it
   * is executed.
   * 
   * 		- `callback`: A function that is called asynchronously after the execution of
   * the code in the `asyncCall` function.
   * 		- `arg`: An argument passed to the callback function.
   */
  function asyncCall(callback, arg) {
    asyncQueue.push([callback, arg]);

    if (!asyncTimer) {
      asyncTimer = true;
      asyncSetTimer(asyncFlush, 0);
    }
  }

  /**
   * @description Invokes a resolver function with two methods, `resolvePromise` and
   * `rejectPromise`, to handle the resolution or rejection of an promise passed as argument.
   * 
   * @param { function. } resolver - resolver function that is called with the
   * `resolvePromise` and `rejectPromise` functions as arguments, allowing the invocation
   * of the resolved or rejected promise.
   * 
   * 		- `resolver`: The resolver function that is invoked to resolve the promise or
   * reject it with an error.
   * 		- `promise`: The promise that is being resolved or rejected by the `resolver` function.
   * 
   * @param { Promise } promise - Promise that will be resolved or rejected with the
   * value provided by the `resolvePromise` function or rejected with an error message
   * provided by the `rejectPromise` function.
   */
  function invokeResolver(resolver, promise) {
    /**
     * @description Resolves a promise with a given `value`.
     * 
     * @param { any } value - value to be resolved and passed as the argument to the
     * `resolve()` function in the `resolvePromise()` function.
     */
    function resolvePromise(value) {
      resolve(promise, value);
    }

    /**
     * @description Takes a reason argument and rejects the given promise with that reason.
     * 
     * @param { string } reason -
     */
    function rejectPromise(reason) {
      reject(promise, reason);
    }

    try {
      resolver(resolvePromise, rejectPromise);
    } catch (e) {
      rejectPromise(e);
    }
  }

  /**
   * @description Handles the execution of a callback function associated with an
   * observable subscriber. It first checks if the callback is a function, then calls
   * it with the current value, and either resolves or rejects the promise based on the
   * callback's response.
   * 
   * @param { object } subscriber - observer object that will be called with the data
   * value when it is available.
   */
  function invokeCallback(subscriber) {
    var owner = subscriber.owner;
    var settled = owner._state;
    var value = owner._data;
    var callback = subscriber[settled];
    var promise = subscriber.then;

    if (typeof callback === 'function') {
      settled = FULFILLED;

      try {
        value = callback(value);
      } catch (e) {
        reject(promise, e);
      }
    }

    if (!handleThenable(promise, value)) {
      if (settled === FULFILLED) {
        resolve(promise, value);
      }

      if (settled === REJECTED) {
        reject(promise, value);
      }
    }
  }

  /**
   * @description Verifies if a given promise or value is eligible to be processed via
   * a then method, and handles it accordingly by either fulfilling or rejecting the
   * promise based on the input value.
   * 
   * @param { Promise } promise - promise to handle.
   * 
   * @param { object } value - promise being handle and determine if it can be fulfilled
   * or rejected based on its `then` method.
   * 
   * @returns { boolean } a boolean value indicating whether the promise has been
   * fulfilled or rejected.
   */
  function handleThenable(promise, value) {
    var resolved;

    try {
      if (promise === value) {
        throw new TypeError('A promises callback cannot return that same promise.');
      }

      if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
        // then should be retrieved only once
        var then = value.then;

        if (typeof then === 'function') {
          then.call(value, function (val) {
            if (!resolved) {
              resolved = true;

              if (value === val) {
                fulfill(promise, val);
              } else {
                resolve(promise, val);
              }
            }
          }, function (reason) {
            if (!resolved) {
              resolved = true;
              reject(promise, reason);
            }
          });
          return true;
        }
      }
    } catch (e) {
      if (!resolved) {
        reject(promise, e);
      }

      return true;
    }

    return false;
  }

  /**
   * @description Takes a `promise` and an `value`. If the promise is equal to the value
   * or not handleable as a thenable, it fulfills the promise with the value.
   * 
   * @param { Promise } promise - promise to resolve or reject when passed to the
   * `fulfill()` method within the `resolve()` function.
   * 
   * @param { any } value - 3rd argument passed to the `fulfill()` method in case it
   * is necessary to resolve the provided promise with a different value than the one
   * given in the `promise` parameter.
   */
  function resolve(promise, value) {
    if (promise === value || !handleThenable(promise, value)) {
      fulfill(promise, value);
    }
  }

  /**
   * @description Updates a promise's state to settled and provides its resolution value
   * to an async callback `publishFulfillment`.
   * 
   * @param { _State_. } promise - pending promise to be settled by fulfilling its value.
   * 
   * 		- `_state`: A property that holds the current state of the promise, which can
   * be either `PENDING`, `FULFILLED`, or `REJECTED`.
   * 		- `_data`: A property that stores the value returned by the fulfillment.
   * 		- `asyncCall`: An async function that calls the `publishFulfillment` function
   * with the deserialized `promise` as an argument.
   * 
   * @param { any } value - data to be settled upon fulfillment of the promised action.
   */
  function fulfill(promise, value) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = value;
      asyncCall(publishFulfillment, promise);
    }
  }

  /**
   * @description Updates the state of a promise to SETTLED and stores a reason in its
   * `_data` property if it was PENDING. It also calls `publishRejection` async to
   * notify subscribers of the rejection.
   * 
   * @param { Promise } promise - promised value that will be rejected with a specified
   * reason when the `reject()` function is called.
   * 
   * @param { object } reason -
   */
  function reject(promise, reason) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = reason;
      asyncCall(publishRejection, promise);
    }
  }

  /**
   * @description Loops through an array of callbacks (`_then`) attached to a `promise`,
   * and invokes each callback in sequence.
   * 
   * @param { object } promise - Promises that needs to be resolved and its then methods
   * are resolved and passed to invokeCallback.
   */
  function publish(promise) {
    promise._then = promise._then.forEach(invokeCallback);
  }

  /**
   * @description Updates a provided promise's `_state` to `FULFILLED`, then publishes
   * the fulfilled promise to its listeners.
   * 
   * @param { object } promise - Fulfilled state of a Promises A+ implementation, and
   * updating its internal state to fulfilled upon calling the `publishFulfillment` function.
   */
  function publishFulfillment(promise) {
    promise._state = FULFILLED;
    publish(promise);
  }

  /**
   * @description Modifies the `_state` property of a given `promise` object to indicate
   * that it has been rejected, and then publishes the promise to its observers. If the
   * `promise` is not handled, the function emits an `unhandledRejection` event to the
   * process's global `process` object.
   * 
   * @param { object } promise - promising object that is being published with a rejected
   * state.
   */
  function publishRejection(promise) {
    promise._state = REJECTED;
    publish(promise);

    if (!promise._handled && isNode) {
      global.process.emit('unhandledRejection', promise._data, promise);
    }
  }

  /**
   * @description Emits a `'rejectionHandled'` event to the global `process` with the
   * provided `promise` as an argument, allowing other code to handle the rejection gracefully.
   * 
   * @param { object } promise - handled rejection of an asynchronous operation that
   * was previously rejected.
   */
  function notifyRejectionHandled(promise) {
    global.process.emit('rejectionHandled', promise);
  }
  /**
   * @class
  /**
   * @description Is a constructor that creates a new Promise object and calls a resolver
   * function with the provided context when the Promise is resolved.
   * 
   * @param { 'function'. } resolver - function that will be called to resolve the
   * promise when it is instanciated.
   * 
   * 		- `typeof resolver !== 'function'`: This check ensures that the input `resolver`
   * is not an object or something other than a function.
   * 		- `this instanceof P === false`: This check verifies if the constructor is being
   * called as a function, rather than being instantiated using `new`. If true, it
   * raises an error.
   */
  function P(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('Promise resolver ' + resolver + ' is not a function');
    }

    if (this instanceof P === false) {
      throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
    }

    this._then = [];
    invokeResolver(resolver, this);
  }

  P.prototype = {
    constructor: P,
    _state: PENDING,
    _then: null,
    _data: undefined,
    _handled: false,
    then: function then(onFulfillment, onRejection) {
      var subscriber = {
        owner: this,
        then: new this.constructor(NOOP),
        fulfilled: onFulfillment,
        rejected: onRejection
      };

      if ((onRejection || onFulfillment) && !this._handled) {
        this._handled = true;

        if (this._state === REJECTED && isNode) {
          asyncCall(notifyRejectionHandled, this);
        }
      }

      if (this._state === FULFILLED || this._state === REJECTED) {
        // already resolved, call callback async
        asyncCall(invokeCallback, subscriber);
      } else {
        // subscribe
        this._then.push(subscriber);
      }

      return subscriber.then;
    },
    catch: function _catch(onRejection) {
      return this.then(null, onRejection);
    }
  };

  P.all = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.all().');
    }

    return new P(function (resolve, reject) {
      var results = [];
      var remaining = 0;

      /**
       * @description Takes a positive integer index, and applies the following operations:
       * 1) increments a running count called 'remaining'; 2) creates a new function that
       * returns the value provided as an argument and sets a new property `results[index]`;
       * 3) if the count reaches 0, resolves the `results` array.
       * 
       * @param { integer } index - 0-based index of the result to be returned by the
       * function, and it is used to access the appropriate value in the `results` array
       * during the return statement.
       * 
       * @returns { Promise } a function that resolves the result of a promise when a
       * specified number of resolvers has been reached.
       */
      function resolver(index) {
        remaining++;
        return function (value) {
          results[index] = value;

          if (! --remaining) {
            resolve(results);
          }
        };
      }

      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolver(i), reject);
        } else {
          results[i] = promise;
        }
      }

      if (!remaining) {
        resolve(results);
      }
    });
  };

  P.race = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.race().');
    }

    return new P(function (resolve, reject) {
      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      }
    });
  };

  P.resolve = function (value) {
    if (value && _typeof(value) === 'object' && value.constructor === P) {
      return value;
    }

    return new P(function (resolve) {
      resolve(value);
    });
  };

  P.reject = function (reason) {
    return new P(function (resolve, reject) {
      reject(reason);
    });
  };

  var picked = typeof Promise === 'function' ? Promise : P;

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
   * @description Checks if a given string is a reserved class name by searching for
   * its index in an array of reserved class names.
   * 
   * @param { string } name - name of the variable or class to be checked for reservation,
   * and its value is used in the algorithm to determine if the name is reserved or not.
   * 
   * @returns { number } a boolean value indicating whether the given name is reserved
   * or not, based on the contents of the `RESERVED_CLASSES` array.
   */
  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  /**
   * @description Executes a given function (`fn`) while suppressing errors during
   * production mode. If an error occurs, it is caught and either propagated or ignored
   * based on the value of `PRODUCTION`.
   * 
   * @param { Function } fn - code that will be executed when the function is called.
   * 
   * 		- `fn` is an anonymous function passed as an argument to the function.
   * 		- It has one catch block that catches any errors (represented by the variable
   * `e`) that occur during its execution.
   * 		- The block checks whether it is in PRODUCTION mode or not using the logical
   * expression `!PRODUCTION`. If it's not in PRODUCTION mode, the error is thrown again.
   */
  function bunker(fn) {
    try {
      fn();
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  /**
   * @description Takes a string of CSS code and inserts it into the document's `<head>`
   * section.
   * 
   * @param { string } css - styling information to be added or updated in the HTML
   * document through the insertion of an inline style element.
   * 
   * @returns { string } a stylesheet element added to the document's head node.
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
   * @description Generates a unique 12-character alphanumeric string. It uses a pool
   * of characters as input to create the random combination.
   * 
   * @returns { string } a unique alphanumeric string of fixed length.
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
   * @description Converts an object or any other iterable to an array. It uses for...of
   * loop to iterate through each property and create an array containing those values.
   * 
   * @param { object } obj - Object or array to be converted into an array.
   * 
   * @returns { array } an array of the elements of the given object, in the order they
   * appear in the object.
   */
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  /**
   * @description Generates an array of class names from a HTML element's class attribute
   * or returns the class attribute value as an array if the element has a classList property.
   * 
   * @param { HTMLNode. } node - DOM element whose class names are to be collected.
   * 
   * 		- `node`: The object or element for which to generate an array of classes. May
   * be any type of object, including HTMLElement, SVGAnimatedString, SVGAnimatedTransform,
   * or others.
   * 
   * @returns { array } an array of strings containing the classes associated with the
   * given HTML node.
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
   * @description Takes a family prefix and a class string as inputs, checks if the
   * prefix matches the given family prefix and if the icon name is not an empty string
   * or a reserved icon name, it returns the icon name, otherwise it returns null.
   * 
   * @param { string } familyPrefix - initial component of an icon name, which is then
   * used to construct the final icon name based on the classname of the component.
   * 
   * @param { string } cls - 100% subclass of an element, and it is split into parts
   * to extract the prefix and the icon name.
   * 
   * @returns { string } a non-null string representing the icon name based on the
   * provided prefix and class name.
   */
  function getIconName(familyPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  /**
   * @description Converts a given string into an HTML-escaped representation by replacing
   * specific characters with corresponding entities.
   * 
   * @param { string } str -
   * 
   * @returns { string } a modified version of the input string with special characters
   * replaced to avoid syntax errors in HTML.
   */
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  /**
   * @description Concatenates key-value pairs of an object, using the `Object.keys()`
   * method and the `reduce()` method to create a string.
   * 
   * @param { object } attributes - objects that contain attributes to be joined, and
   * it is used to populate the `acc` variable with the keys of the object.
   * 
   * @returns { string } a concatenation of attribute names and values, separated by
   * spaces, using the `reduce` method.
   */
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  /**
   * @description Takes an object `styles` as input and returns a concatenated string
   * of all style names with their corresponding values separated by a semicolon.
   * 
   * @param { object } styles - object that contains key-value pairs of CSS styles,
   * which are then reduced and concatenated into a string to form the joined styles.
   * 
   * @returns { string } a concatenation of key-value pairs, separated by semicolons.
   */
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
    }, '');
  }
  /**
   * @description Evaluates if a transformation is meaningful based on its size, x and
   * y coordinates, rotate value, and flip values.
   * 
   * @param { object } transform - 2D transformation matrix, which is compared to a
   * meaningless transformation matrix to determine if it is meaningful or not.
   * 
   * @returns { boolean } a boolean indicating whether the given transformation is
   * meaningful or not.
   */
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  /**
   * @description Generates an SVG transformation string for a given icon based on its
   * container width and transform parameters. The string is composed of translation,
   * scale, rotate and other transform attributes.
   * 
   * @param { object } _ref - transform object containing the information about the
   * transformation of an icon for use in SVG rendering.
   * 
   * @returns { object } an object containing three properties: `outer`, `inner`, and
   * `path`, each representing a transform matrix for different parts of the icon.
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
   * @description Takes a transformation object and various properties like width,
   * height, startCentered, and flipX/flipY, then translates and scales the elements
   * to the desired values.
   * 
   * @param { object } _ref2 - transformation object passed to the function, providing
   * values for `transform`, `width`, `height`, and `startCentered`.
   * 
   * @returns { string } a CSS transform string that translates and scales an element
   * based on its width and height, and rotates it according to its rotate value.
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

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  /**
   * @description Modifies an `abstract` object's `fill` attribute to `'black'` if it
   * exists or is truthy in the argument list.
   * 
   * @param { object } abstract - 2D drawing shape to have its fill color set to black
   * either by passing an explicit value or by defaulting to true if not provided.
   * 
   * @returns { Abstract } an updated abstract element with the fill color set to "black".
   * 
   * 		- `force`: This is a boolean value that determines whether the fill color should
   * be set to black or not. If it is set to true, then the fill color will be set to
   * black. Otherwise, it will be left unchanged.
   * 		- `attributes`: This is an object that contains information about the abstract
   * element, including its fill color, which is set to 'black' if force is set to true.
   */
  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }

    return abstract;
  }

  /**
   * @description Removes children from a node with the tag "g" and returns them, while
   * returning the original node otherwise.
   * 
   * @param { object } abstract - parent node in the group.
   * 
   * @returns { array } a nested array of nodes based on the tag attribute of each node.
   */
  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }

  /**
   * @description Creates a SVG icon mask using a given path and mask image. It generates
   * a `mask` element with a clipped child `rect` element, and adds a `clipPath` element
   * to the `defs` grouping for the mask.
   * 
   * @param { object } _ref - passed-in object containing the children, attributes,
   * main element, mask element, explicit mask ID, and transform for generating
   * high-quality documentation.
   * 
   * @returns { object } an SVG element containing a mask and a clip path.
   */
  function makeIconMasking (_ref) {
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
      attributes: _objectSpread({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroupChildrenMixin = mainPath.children ? {
      children: mainPath.children.map(fillBlack)
    } : {};
    var maskInnerGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.inner),
      children: [fillBlack(_objectSpread({
        tag: mainPath.tag,
        attributes: _objectSpread({}, mainPath.attributes, trans.path)
      }, maskInnerGroupChildrenMixin))]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
    var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
    var maskTag = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
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
      attributes: _objectSpread({
        fill: 'currentColor',
        'clip-path': "url(#".concat(clipId, ")"),
        mask: "url(#".concat(maskId, ")")
      }, ALL_SPACE)
    });
    return {
      children: children,
      attributes: attributes
    };
  }

  /**
   * @description Takes a _ref object as input and generates icon markup by concatenating
   * styles, applying transform, and adding icon tag and its children to the resulting
   * markup.
   * 
   * @param { object } _ref - raphic element that contains the icon and other attributes,
   * which are then transformed and added to the document.
   * 
   * @returns { object } an object containing the standardized icon and its associated
   * attributes.
   */
  function makeIconStandard (_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;
    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({
        transform: transform,
        containerWidth: main.width,
        iconWidth: main.width
      });
      children.push({
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      children.push(main.icon);
    }

    return {
      children: children,
      attributes: attributes
    };
  }

  /**
   * @description Generates SVG markup for an icon based on input parameters such as
   * children, main, mask, and transform. It applies styles and transformations to the
   * SVG element based on the input attributes.
   * 
   * @param { object } _ref - information regarding the main element, including its
   * attributes and styles, as well as its children and masks.
   * 
   * @returns { object } an SVG element with styling and masking applied based on the
   * input parameters.
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
      attributes['style'] = joinStyles(_objectSpread({}, styles, {
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
   * @description Creates an SVG element with a symbol instance, given a reference
   * object with prefix, iconName, children, and symbol properties. The symbol ID is
   * generated based on the provided prefix and iconName, and the ` attributes` object
   * is created with the `id` property set to the generated ID.
   * 
   * @param { object } _ref - object containing prefix, iconName, children, attributes,
   * and symbol parameters that define the symbol to be generated.
   * 
   * @returns { SVG` element with a `symbol` child element having an `id` attribute set
   * to the concatenation of the prefix, family prefix, and icon name, and optionally
   * children elements nested inside it } an SVG element containing a symbol with a
   * unique ID.
   * 
   * 		- `tag`: The tag name of the SVG element that is returned. In this case, it is
   * set to `'svg'`.
   * 		- `attributes`: An object containing the attributes of the SVG element. In this
   * case, the only attribute is `style`, which is set to `'display: none;'`.
   * 		- `children`: An array containing the child elements of the SVG element. In this
   * case, it is empty since no children are defined.
   * 		- `id`: The ID attribute of the symbol element. It is generated based on the
   * input parameters and contains a unique value.
   * 
   * 	Overall, the `asSymbol` function returns an SVG element that contains a symbol
   * element with a unique ID.
   */
  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread({}, attributes, {
          id: id
        }),
        children: children
      }]
    }];
  }

  /**
   * @description Generates high-quality documentation for code given to it. It takes
   * parameters `params`, extracts the necessary information, and returns an abstract
   * SVG representation of a symbol or icon with watchable functionality if required.
   * 
   * @param { object } params - object containing various configuration options and
   * data necessary to generate high-quality SVG documentation for code, including
   * icons, prefixes, icon names, transformation, symbols, titles, mask IDs, and extra
   * attributes.
   * 
   * @returns { SVG abstract element } an SVG abstract element with various attributes
   * and children.
   * 
   * 		- `content`: An object containing the SVG content of the icon, including its
   * children and attributes. The `children` property is an array of SVG elements, while
   * the `attributes` property is an object containing various attribute values, such
   * as `role`, `xmlns`, `viewBox`, and `data-prefix`/`data-icon`.
   * 		- `args`: An object containing additional properties used to customize the icon's
   * styling and layout. These properties include `prefix`, `iconName`, `main`, `mask`,
   * `transform`, `symbol`, `styles`, and `watchable`.
   * 		- `children`: An array of SVG elements within the `content` object, which can
   * include an icon (represented by the `children` property), a title element (`title`),
   * and other attributes such as `aria-labelledby` and `id`.
   * 		- `attributes`: An object containing various attribute values for the icon,
   * including `class`, `role`, `xmlns`, `viewBox`, and `data-prefix`/`data-icon`.
   * 
   * 	The function returns an object representing the abstract SVG element, which can
   * be further processed using other functions in the `fa-i2svg` library.
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
    var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread({}, extra.attributes, {
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

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
    });

    var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
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
   * @description Takes a parameter object with content, width, height, transform,
   * title, extra attributes, and watchable flag, and generates HTML tags for displaying
   * text on a web page, including styles, class names, and a possible title.
   * 
   * @param { object } params - configuration object that provides the content, dimensions,
   * transform, title, and extra attributes for generating layers of text abstract.
   * 
   * @returns { array } an array of HTML elements, including a `span` element with the
   * content and attributes defined by the input parameters.
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

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread({}, extra.styles);

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
   * @description Takes content, title, and extra attributes as parameters, then generates
   * HTML content by concatenating an opening tag for a `span` element, setting its
   * attributes based on the input `extra` object, and adding any additional content,
   * including another `span` element with a class of "sr-only" if a title is provided.
   * The function returns an array of HTML content in the form of a list of objects,
   * each representing a single HTML element.
   * 
   * @param { object } params - content, title, and extra attributes that will be used
   * to generate the HTML document.
   * 
   * @returns { array } a list of HTML elements, consisting of a `span` element with
   * attributes and children, and an additional `span` element with a class of `sr-only`.
   */
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
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

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"5.15.4\"";

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
   * @description Converts a given Unicode string to its ASCII hexadecimal representation
   * by iterating through each character's Unicode code point and converting it to a
   * hexadecimal string using `charCodeAt()`. The resulting hexadecimal string is then
   * converted into a shorter form by appending leading zeros to fill the desired length.
   * 
   * @param { string } unicode - 16-bit code units of a Unicode character, which are
   * iterated through and converted to hexadecimal notation to produce the output string.
   * 
   * @returns { string } a string representation of the given Unicode code point as a
   * hexadecimal value.
   */
  function toHex(unicode) {
    var result = '';

    for (var i = 0; i < unicode.length; i++) {
      var hex = unicode.charCodeAt(i).toString(16);
      result += ('000' + hex).slice(-4);
    }

    return result;
  }

  /**
   * @description Defines custom font awesomme icon styles based on passed icon objects.
   * It processes and merges icons and skips hooks based on config parameters, then
   * maps the icons to a new namespace. Additionally, it defines the `fa` alias for `fas`.
   * 
   * @param { string } prefix - name of the icon style prefix to which the icons will
   * be assigned, with different values separating various icon sets, such as `fas`,
   * `fa`, or others.
   * 
   * @param { object } icons - 2D and 3D icons of Font Awesome, which are passed to the
   * `defineIcons` function along with any custom parameters, such as skipHooks, for
   * manipulation and integration into the provided styles namespace.
   * 
   * @returns { object } an object containing icon definitions for a given prefix and
   * set of icons.
   */
  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
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

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];
      acc[iconName] = iconName;
      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });
      return acc;
    });
    var hasRegular = 'far' in styles;
    _byOldName = reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
  };
  build();
  /**
   * @description Maps a prefix to an associated value from a predefined object
   * `_byUnicode`. It returns the associated value for the given `unicode` parameter
   * using the mapping stored in the `prefix`.
   * 
   * @param { string } prefix - 16-bit prefix code used to map the given Unicode code
   * point to a specific value in the `_byUnicode` cache.
   * 
   * @param { object } unicode - 16-bit Unicode code point value to be looked up in the
   * `_byUnicode` cache.
   * 
   * @returns { string } a value associated with a given prefix and Unicode character.
   */
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  /**
   * @description Returns the value associated with a given ligature based on a provided
   * prefix in an object or array, if it exists.
   * 
   * @param { string } prefix - prefix of the ligature to be looked up in the _byLigature
   * cache.
   * 
   * @param { object } ligature - character or string that is being looked up in the
   * _byLigature dictionary.
   * 
   * @returns { object } a value from an object, determined by the prefix and ligature
   * arguments.
   */
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  /**
   * @description Retrieves a value from an object `_byOldName`. The function returns
   * the value if it exists, otherwise, it returns an empty object with prefix and icon
   * name set to null.
   * 
   * @param { string } name - name of an object, and it is used to retrieve the associated
   * object data from the `_byOldName` cache.
   * 
   * @returns { object } an object containing either a `prefix` or `iconName` value,
   * depending on the input `name`.
   */
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }

  var styles$1 = namespace.styles;
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  /**
   * @description Takes an array of class names as input and reduces it to a canonical
   * icon name and prefix based on the config object's autoFetchSvg and PREFIX_TO_STYLE
   * property.
   * 
   * @param { array } values - collection of classes to be processed for canonical icon
   * resolution, and is used to accumulate the results of the reduction operation.
   * 
   * @returns { object } an object containing the prefix and iconName of a font awesome
   * icon, or a list of classes for manual styling.
   */
  function getCanonicalIcon(values) {
    return values.reduce(function (acc, cls) {
      var iconName = getIconName(config.familyPrefix, cls);

      if (styles$1[cls]) {
        acc.prefix = cls;
      } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
        acc.prefix = cls;
      } else if (iconName) {
        var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
        acc.iconName = shim.iconName || iconName;
        acc.prefix = shim.prefix || acc.prefix;
      } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
        acc.rest.push(cls);
      }

      return acc;
    }, emptyCanonicalIcon());
  }
  /**
   * @description Retrieves an icon given a prefix and icon name from a provided mapping,
   * returning an object with the icon information.
   * 
   * @param { object } mapping - icoin Icon mappings, which contain prefix-specific
   * icon names and their corresponding icons.
   * 
   * @param { string } prefix - part of the icon name that comes before the dot separating
   * the prefix from the specific icon within the mapping.
   * 
   * @param { string } iconName - name of the icon to be retrieved from the `mapping`
   * object.
   * 
   * @returns { object } an object containing the prefix, icon name, and the associated
   * icon value.
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
   * @description Takes an object of abstract nodes as input and converts it into an
   * HTML string by creating a tag, attributes, and child nodes, then returns the
   * concatenated HTML code.
   * 
   * @param { array } abstractNodes - HTML node structure that is to be transformed
   * into an HTML string using the `html` function.
   * 
   * @returns { string } a HTML string containing an element with the specified tag
   * name, attributes, and child elements.
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

  var noop$2 = function noop() {};

  /**
   * @description Checks if a node has the attribute `DATA_FA_I2SVG` set to a string value.
   * 
   * @param { object } node - 3D node for which to check if it is watched.
   * 
   * @returns { string } a boolean indicating whether the given node has an `i2svg`
   * attribute set to a string value.
   */
  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  /**
   * @description Determines a mutator to use based on a configuration parameter
   * `autoReplaceSvg`. If `autoReplaceSvg` is true, the mutator returned is `replace`.
   * Otherwise, it returns the mutator at the position of `mutators` specified by
   * `config.autoReplaceSvg`, or `replace` if none is found.
   * 
   * @returns { function } a reference to either the `replace` mutator or another mutator
   * selected by the `config.autoReplaceSvg` property.
   * 
   * 		- `mutators`: An object containing different mutator functions, where each key
   * is the name of a mutator and the value is the corresponding mutator function.
   * 		- `config.autoReplaceSvg`: A boolean configuration parameter that determines
   * which mutator function is returned if it is set to `true`.
   * 		- `mutator`: The specific mutator function that is returned based on the value
   * of `config.autoReplaceSvg`. If `mutator` is not defined, then the default
   * `mutators.replace` function is returned.
   */
  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      var abstract = mutation[1];
      var newOuterHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');

      if (node.parentNode && node.outerHTML) {
        node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
      } else if (node.parentNode) {
        var newNode = document.createElement('span');
        node.parentNode.replaceChild(newNode, node);
        newNode.outerHTML = newOuterHTML;
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
      delete abstract[0].attributes.style;
      delete abstract[0].attributes.id;
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
      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.setAttribute('class', splitClasses.toNode.join(' '));
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  /**
   * @description Executes a provided operation synchronously.
   * 
   * @param { object } op - operation to be performed, and it is executed when the
   * `performOperationSync` function is called.
   */
  function performOperationSync(op) {
    op();
  }

  /**
   * @description Performs a sequence of mutations on a given DOM element, optionally
   * calling a provided callback function after the mutations are complete.
   * 
   * @param { array } mutations - array of operations that should be applied to the
   * component tree, which is then passed to the `getMutator()` function to execute
   * them asynchronously.
   * 
   * @param { `function`. } callback - callback function that is called after the
   * mutations have been applied to the DOM, regardless of whether the operation was
   * synchronous or asynchronous.
   * 
   * 		- `typeof callback === 'function'`: This checks whether `callback` is a function
   * or not.
   * 		- `noop$2`: This is a anonymous function that does nothing (a "no-op"). It is
   * assigned to `callbackFunction` if `callback` is not a function.
   * 		- `mutations.length === 0`: This checks the length of the array `mutations`. If
   * it is equal to 0, the callback function is immediately called.
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
   * @description Sets the `disabled` variable to `true`.
   */
  function disableObservation() {
    disabled = true;
  }
  /**
   * @description Sets the `disabled` variable to `false`.
   */
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  /**
   * @description Creates a new instance of `MUTATION_OBSERVER` and observes the specified
   * mutation root element for childList, attributes, characterData, and subtree
   * mutations. It then calls treeCallback or nodeCallback functions when any mutation
   * is detected.
   * 
   * @param { object } options - observation configuration for the mutation observer,
   * which includes callback functions for different types of mutations, such as
   * `treeCallback`, `nodeCallback`, and `pseudoElementsCallback`, as well as options
   * for observing specific parts of the document tree.
   * 
   * @returns { object } a MutationObserver instance that observes mutations on a
   * specified root node or subset of nodes.
   */
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var treeCallback = options.treeCallback,
        nodeCallback = options.nodeCallback,
        pseudoElementsCallback = options.pseudoElementsCallback,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
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
          if (mutationRecord.attributeName === 'class') {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
            if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
          } else {
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
   * @description Disconnects a web socket connection.
   * 
   * @returns { undefined` value } void.
   * 
   * 		- `mo`: This is an instance of the `Mo` class, which represents the current
   * Moodle instance. The `disconnect` method disconnects the current Moodle instance
   * from the network.
   */
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  /**
   * @description Parses a styles attribute and returns an object containing property-value
   * pairs extracted from the attributed string.
   * 
   * @param { HTMLNode. } node - HTML element to which the styles should be applied.
   * 
   * 		- `node`: The input node for which the styles are being parsed. It has an attribute
   * named `style` that contains the CSS style string.
   * 
   * @returns { object } an object containing the parsed style values.
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
   * @description Takes a DOM node and returns an object containing prefix and icon
   * name for its class attributes, or a default value if no explicit attributes are provided.
   * 
   * @param { HTMLNode. } node - element that contains the icon and its attributes,
   * which are used to determine the canonical icon representation.
   * 
   * 		- `getAttribute`: A method that retrieves an attribute from the current HTML element.
   * 		- `innerText`: The text content of the element, including any whitespace.
   * 		- `data-prefix`: An attribute that specifies a string value used to define a
   * prefix for the icon.
   * 		- `data-icon`: An attribute that specifies a string value used to define the
   * name of an icon.
   * 		- `getCanonicalIcon`: A function that returns a canonicalized version of an icon
   * name based on its prefix and the provided element's innerText.
   * 		- `classArray`: A method that extracts the class names from the current HTML
   * element's classList property.
   * 		- `byLigature`: An internal function that generates a new icon name by combining
   * the prefix and innerText of the element using a ligature.
   * 		- `byUnicode`: An internal function that generates a new icon name by mapping
   * the prefix to a hexadecimal code point value based on the provided innerText.
   * 
   * @returns { object } an object containing the canonical icon name and prefix for
   * the given HTML node.
   */
  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.prefix && innerText.length > 1) {
      val.iconName = byLigature(val.prefix, node.innerText);
    } else if (val.prefix && innerText.length === 1) {
      val.iconName = byUnicode(val.prefix, toHex(node.innerText));
    }

    return val;
  }

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };

    if (!transformString) {
      return transform;
    } else {
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
    }
  };
  /**
   * @description Retrieves a transformation string associated with a node and returns
   * its transformed value using the `parseTransformString` function.
   * 
   * @param { object } node - DOM element whose fa transformation is to be applied.
   * 
   * @returns { XMLNS_ATTRIBUTE` value, which can be assigned directly to various
   * programming constructs without requiring further processing or conversion } a
   * transformed string value based on the `data-fa-transform` attribute of the input
   * node.
   * 
   * 	The return value is a transformed node. The data-fa-transform attribute associated
   * with the given node was used for the transformation process.
   */
  function transformParser (node) {
    return parseTransformString(node.getAttribute('data-fa-transform'));
  }

  /**
   * @description Evaluates a JSON object's 'data-fa-symbol' attribute and returns a
   * boolean value depending on its content.
   * 
   * @param { `HTMLElement`. } node - DOM node that contains an HTML attribute containing
   * the symbol value, which is then returned by the function as a boolean value
   * indicating whether the symbol exists or not.
   * 
   * 		- `getAttribute('data-fa-symbol')`: This is an attribute on the node that holds
   * a symbol value, which can be null or an empty string.
   * 
   * @returns { boolean } a boolean value indicating whether the `data-fa-symbol`
   * attribute is present and has a non-empty value.
   */
  function symbolParser (node) {
    var symbol = node.getAttribute('data-fa-symbol');
    return symbol === null ? false : symbol === '' ? true : symbol;
  }

  /**
   * @description Parses the attributes of a DOM element and extracts the necessary
   * information to generate accessible HTML content, including `aria-labelledby`,
   * `aria-hidden`, and `focusable`. It also generates a unique ID for the `title`
   * attribute when `config.autoA11y` is enabled.
   * 
   * @param { XMLNode/HTMLNode. } node - element for which attribute information is to
   * be extracted and transformed.
   * 
   * 		- `toArray(node.attributes)`: Deserializes the `attributes` property of the input
   * `node` to an array of attributes objects.
   * 		- `reduce()`: Calls this function recursively on each attribute in the array,
   * with a reduced object `acc`. The function checks if the attribute name is either
   * 'class' or 'style', and if it is not, it sets the value of the current object's
   * `name` property to the attribute name, and the value of the attribute itself to
   * its value.
   * 		- `var title = node.getAttribute('title');`: Deserializes the `title` property
   * of the input `node`.
   * 		- `var titleId = node.getAttribute('data-fa-title-id');`: Deserializes the
   * `data-fa-title-id` property of the input `node`.
   * 		- `if (config.autoA11y)`: If the configuration variable `autoA11y` is set to
   * `true`, then the following code is executed.
   * 		- `extraAttributes['aria-labelledby'] = ...`: Sets an attribute named 'aria-labelledby'
   * with a value concatenated from two strings: the string ''.concat(config.replacementClass,
   * '-title-').concat(titleId || nextUniqueId());.
   * 		- `extraAttributes['aria-hidden'] = 'true';`: Sets an attribute named 'aria-hidden'
   * with the value 'true'.
   * 		- `extraAttributes['focusable'] = 'false';`: Sets an attribute named 'focusable'
   * with the value 'false'.
   * 
   * 	Note that this explanation is based solely on the input function provided and
   * does not provide any additional context or assumptions about the code being explained.
   * 
   * @returns { object } an object with modified attributes based on the input node's
   * attributes and configuration options.
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
   * @description Parse the "data-fa-mask" attribute on an HTML node to construct a
   * canonical icon URL using Font Awesome icons and returns it if present, otherwise
   * it returns the empty string.
   * 
   * @param { HTMLNode. } node - element for which the icon mask is being retrieved.
   * 
   * 		- `node.getAttribute('data-fa-mask')`: The `data-fa-mask` attribute is an String
   * property that stores a value representing the mask to be used for the icon rendering.
   * 
   * 	Therefore, the function first checks if this attribute exists on the input node
   * by calling `node.getAttribute('data-fa-mask')`, and if it doesn't exist, returns
   * an empty canonical icon using `emptyCanonicalIcon()`. If the attribute does exist,
   * it splits its value into a list of space-separated words using the `split()` method,
   * maps each word to its trimmed version using the provided function, and then calls
   * `getCanonicalIcon()` on these mapped values.
   * 
   * @returns { emptyCanonicalIcon } a canonical icon derived from a mask attribute value.
   * 
   * 		- `emptyCanonicalIcon()` is a function that returns an empty icon. It is not
   * described in detail here as it is not part of the input provided.
   * 		- `getCanonicalIcon()` is a function that takes a string array and returns a
   * single icon. The array passed to this function contains the trimmed values of each
   * item in the original mask string, separated by space.
   * 
   * 	The output of `maskParser` will be either an empty icon or a single icon created
   * by concatenating the trimmed values in the array using spaces between them.
   */
  function maskParser (node) {
    var mask = node.getAttribute('data-fa-mask');

    if (!mask) {
      return emptyCanonicalIcon();
    } else {
      return getCanonicalIcon(mask.split(' ').map(function (i) {
        return i.trim();
      }));
    }
  }

  /**
   * @description Returns an object with various properties to be populated with
   * customizable metadata for a React component, including icon name, title, and mask.
   * 
   * @returns { object } an object with various properties, including iconName, title,
   * and extra properties.
   */
  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: null,
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  /**
   * @description Takes a Node object as input and returns an object with various
   * metadata properties, including `iconName`, `title`, `prefix`, `transform`, `symbol`,
   * `mask`, and `extra`. These properties are derived from the Node's attributes and
   * innerHTML using various parsing functions.
   * 
   * @param { HTMLNode. } node - HTML element for which metadata is being parsed,
   * providing access to its various attributes and other metadata through method calls.
   * 
   * 		- `_classParser`: A class parser that provides information about the icon name,
   * prefix, and any additional classes.
   * 		- `iconName`: The name of the icon.
   * 		- `prefix`: The CSS class prefix for the icon.
   * 		- `extraClasses`: An object containing additional CSS classes applied to the icon.
   * 		- `extraStyles`: An object containing additional CSS styles applied to the icon.
   * 		- `transform`: An object containing information about any transforms applied to
   * the icon, such as rotation or scale.
   * 		- `symbol`: The symbol for the icon, which may be a string or an object.
   * 		- `mask`: An object containing information about any masks applied to the icon,
   * including the ID.
   * 		- `extraAttributes`: An object containing additional attributes applied to the
   * icon, such as `data-fa-title-id`.
   * 		- `maskId`: The ID of the mask associated with the icon.
   * 
   * @returns { object } a JSON object containing various metadata properties of an
   * HTML element, including icon name, prefix, and transform.
   */
  function parseMeta(node) {
    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraStyles = styleParser(node);
    var transform = transformParser(node);
    var symbol = symbolParser(node);
    var extraAttributes = attributesParser(node);
    var mask = maskParser(node);
    return {
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: transform,
      symbol: symbol,
      mask: mask,
      maskId: node.getAttribute('data-fa-mask-id'),
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    };
  }

  /**
   * @description Constructs an error object with information on the icon's absence,
   * including its name and a message describing the issue.
   * 
   * @param { string } error - underlying error that caused the icon to be unavailable,
   * and it is assigned as the `message` property of the `MissingIcon` object.
   */
  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }
  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;

  var FILL = {
    fill: 'currentColor'
  };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  var RING = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  };

  var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });

  var DOT = {
    tag: 'circle',
    attributes: _objectSpread({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'r',
        values: '28;14;28;28;14;28;'
      })
    }, {
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;1;1;0;1;'
      })
    }]
  };
  var QUESTION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;0;0;0;1;'
      })
    }]
  };
  var EXCLAMATION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '0;0;1;1;0;0;'
      })
    }]
  };
  var missing = {
    tag: 'g',
    children: [RING, DOT, QUESTION, EXCLAMATION]
  };

  var styles$2 = namespace.styles;
  /**
   * @description Generates an SVG icon element from a vector data representation,
   * returning an object with properties `found`, `width`, and `height` of the icon,
   * as well as the actual icon element.
   * 
   * @param { object } icon - 2D vector data for the icon, which is used to create the
   * icon element returned by the function.
   * 
   * @returns { object } an object with properties `found`, `width`, `height`, and
   * `icon`, which contains a path element representing the found icon.
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
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
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
  /**
   * @description Takes in `iconName` and `prefix`, returns an promise that resolves
   * to an found icon or rejects with a message if the icon is missing for the given
   * prefix and name.
   * 
   * @param { string } iconName - name of the icon to search for within the styles dictionary.
   * 
   * @param { string } prefix - identifying name for the prefix used to find
   * the desired icon's style.
   * 
   * @returns { AsFoundIcon } an `asFoundIcon` object representing the requested icon,
   * or a rejection with a custom error message if the icon is missing.
   * 
   * 		- `found`: A boolean value indicating whether an icon was found for the given
   * prefix and icon name. If the value is `false`, it means that no icon could be found.
   * 		- `width` and `height`: The size of the icon in pixels, set to 512 by default.
   * These values can be overridden if a different size is specified in the CSS styles.
   * 		- `icon`: A reference to an instance of the `PickedIcon` class, which represents
   * the found icon. If no icon was found, this property is set to an instance of the
   * `MissingIcon` class.
   * 
   * 	The `findIcon` function first checks if the given `iconName` and `prefix` are
   * valid inputs. If both inputs are present and the `config.showMissingIcons` option
   * is not enabled, then an error message is returned in case no icon was found for
   * the prefix-icon combination. Otherwise, the function resolves or rejects a promise
   * with the found or missing icon result accordingly.
   */
  function findIcon(iconName, prefix) {
    return new picked(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: missing
      };

      if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
        var icon = styles$2[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      if (iconName && prefix && !config.showMissingIcons) {
        reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
      } else {
        resolve(val);
      }
    });
  }

  var styles$3 = namespace.styles;

  /**
   * @description Returns a promise that resolves with an array of two objects: a main
   * icon object and a mask icon object, created from provided information.
   * 
   * @param { HTMLNode. } node - raphetype node that the function will generate an SVG
   * replacement mutation for.
   * 
   * 		- `nodeMeta`: An object containing various properties related to the SVG icon
   * and its mutations. The properties include `iconName`, `title`, `titleId`, `prefix`,
   * `transform`, `symbol`, `mask`, `maskId`, and `extra`.
   * 		- `iconName`: A string representing the name of the main SVG icon.
   * 		- `title`: A string representing the title of the SVG icon.
   * 		- `titleId`: An integer representing the ID of the title element for the SVG icon.
   * 		- `prefix`: A string representing the CSS prefix for the SVG icon.
   * 		- `transform`: An object containing properties related to transforming the SVG
   * icon, such as rotation, scale, and skew.
   * 		- `symbol`: A string representing the symbol of the SVG icon.
   * 		- `mask`: An object containing properties related to the mask of the SVG icon,
   * such as its name and ID.
   * 		- `maskId`: An integer representing the ID of the mask element for the SVG icon.
   * 		- `extra`: An object containing additional properties or attributes for the SVG
   * icon, such as its height and width.
   * 
   * 	Note that these properties are used in the function to create an SVG replacement
   * element for the given `node`.
   * 
   * @param { object } nodeMeta - metadata associated with the SVG element, containing
   * information such as icon names, titles, prefixes, transforms, symbols, masks, and
   * extra data that are used to generate the replaced SVG.
   * 
   * @returns { object } an array of two objects, each representing an inline SVG element
   * and a replacement element.
   */
  function generateSvgReplacementMutation(node, nodeMeta) {
    var iconName = nodeMeta.iconName,
        title = nodeMeta.title,
        titleId = nodeMeta.titleId,
        prefix = nodeMeta.prefix,
        transform = nodeMeta.transform,
        symbol = nodeMeta.symbol,
        mask = nodeMeta.mask,
        maskId = nodeMeta.maskId,
        extra = nodeMeta.extra;
    return new picked(function (resolve, reject) {
      picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
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
          mask: mask,
          maskId: maskId,
          title: title,
          titleId: titleId,
          extra: extra,
          watchable: true
        })]);
      });
    });
  }

  /**
   * @description Generates high-quality text for given code, based on its node and
   * metadata. It resolves an abstract layers text object containing content, width,
   * height, transform, title, and extra attributes.
   * 
   * @param { HTMLNode/Element } node - 3D object for which to generate layer text.
   * 
   * 		- `nodeMeta`: The metadata object containing various properties related to the
   * HTML node, such as its title, transform, and extra attributes.
   * 		- `title`: The title attribute of the HTML node, which provides a short text
   * description of the element for accessibility purposes.
   * 		- `transform`: The CSS transformation attribute of the HTML node, which specifies
   * the X and Y coordinates of the element relative to its normal position.
   * 		- `extra`: An object containing any additional attributes or properties defined
   * in the HTML node's extra attribute. These can include various accessibility-related
   * values, such as `aria-hidden`.
   * 		- `IS_IE`: A boolean value indicating whether the browser is Internet Explorer.
   * If `IS_IE` is true, the function performs a different computation to determine the
   * font size of the HTML node.
   * 
   * @param { object } nodeMeta - metadata associated with the node being processed,
   * which contains information such as title, transform, and extra attributes that are
   * used to generate high-quality documentation for the code.
   * 
   * @returns { object } a resolved promise of an object containing the text content
   * and layout information for an HTML element.
   */
  function generateLayersText(node, nodeMeta) {
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

    return picked.resolve([node, makeLayersTextAbstract({
      content: node.innerHTML,
      width: width,
      height: height,
      transform: transform,
      title: title,
      extra: extra,
      watchable: true
    })]);
  }

  /**
   * @description Takes a `node` parameter and
   * evaluates whether it belongs to layers with text class or not.
   * If so, it calls `generateLayersText`. Otherwise, it calls `generateSvgReplacementMutation`.
   * 
   * @param { `HTMLNode`. } node - DOM tree element for which mutations should be generated.
   * 
   * 		- `nodeMeta`: A parse of the node's meta information using the `parseMeta()`
   * function. This includes extracting various attributes such as class names, id, and
   * namespace.
   * 
   * @returns { object } a replacement mutation for the input SVG element.
   */
  function generateMutation(node) {
    var nodeMeta = parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return generateLayersText(node, nodeMeta);
    } else {
      return generateSvgReplacementMutation(node, nodeMeta);
    }
  }

  /**
   * @description Performs a tree mutation operation by retrieving and applying CSS
   * class changes to HTML elements based on their tag prefixes, marks the start and
   * end of the mutation operation, and calls a callback function with the results.
   * 
   * @param { object } root - HTML element that is the root of the tree structure to
   * be processed for SVG injection, and it is used as the basis for generating the
   * mutations that will apply the appropriate CSS classes to the elements.
   * 
   * @returns { Promise } a promise that resolves when the tree is updated with the
   * desired class names.
   */
  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return;
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return;
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
      return;
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
          if (e instanceof MissingIcon) {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new picked(function (resolve, reject) {
      picked.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function () {
        mark();
        reject();
      });
    });
  }
  /**
   * @description Triggers a mutation by executing a `generateMutation()` promise, which
   * takes the `node` input as an argument. If the mutation is successful, it calls the
   * `perform` function with the resulting mutation object and an optional callback
   * function as arguments.
   * 
   * @param { object } node - Node to be mutated, which is passed to the `generateMutation()`
   * method and then used as an argument for the `perform()` method when a mutation is
   * generated.
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
   * @description 1) Checks if a pseudo-element is already being processed by checking
   * its attribute. If so, it resolves. otherwise, 2) retrieves the current computed
   * style for the node and its pseudo-element position, 3) determines whether the icon
   * should be created or deleted based on the previous processed icon, and 4) creates
   * a new SVG element with an abstract representation of the icon if necessary.
   * 
   * @param { object } node - element whose icon needs to be replaced.
   * 
   * @param { string } position - position of the pseudo-element to be replaced, which
   * is used to determine whether the replacement operation has already been performed
   * and what icon to use for the new replacement.
   * 
   * @returns { Promise } a promise that resolves when an icon has been generated and
   * added to the node.
   */
  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new picked(function (resolve, reject) {
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

        var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
        var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
        // already done so with the same prefix and iconName

        if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
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

            if (position === ':before') {
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
   * @description Takes a node argument and returns an array of two new nodes created
   * by replacing the original node with content inserted before and after it using the
   * `picked.all()` method.
   * 
   * @param { element node. } node - element for which to apply the replacement operations.
   * 
   * 		- `node`: The original DOM element that needs to be replaced with new content.
   * 
   * @returns { array } a combination of two selected nodes: `:before` and`:after`.
   */
  function replace(node) {
    return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
  }

  /**
   * @description Checks if a given DOM node is eligible to be processed by pseudo-element
   * selectors. It returns `true` if the node is not part of the document head and
   * doesn't have a specific skipped pseudo-element attribute, and its parent node isn't
   * an SVG element.
   * 
   * @param { element. } node - element for which the processability is being evaluated.
   * 
   * 	1/ `parentNode`: The parent node of `node`.
   * 	2/ `tagName`: The tag name of `node`.
   * 	3/ `getAttribute(DATA_FA_PSEUDO_ELEMENT)`: Whether `node` has a specified attribute
   * `DATA_FA_PSEUDO_ELEMENT`.
   * 	4/ `parentNode || node.tagName`: If `node` is not the root element, this is the
   * tag name of its parent element or `node.tagName` itself.
   * 	5/ `document.head`: Whether `node` is a direct child of the HTML document's `head`
   * element.
   * 
   * @returns { boolean } a boolean indicating whether a given DOM node is eligible to
   * be processed as an element.
   */
  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  /**
   * @description Performs a search for pseudo-elements within a provided root element
   * using the `querySelectorAll` method, filters out non-processable elements, and
   * replaces them with a picked object for efficient handling of promises.
   * 
   * @param { `HTMLRootNode` } root - HTML element or elements that the function will
   * search for pseudo-elements.
   * 
   * 		- `querySelectorAll`: This is an HTML method that retrieves all elements in a
   * document or in a specified element that match a given selector.
   * 		- `toArray`: This is a method that converts a NodeList (a collection of nodes)
   * into an array.
   * 		- `filter`: This is a method that filters out elements from the NodeList based
   * on a provided function. In this case, it filters out elements that are not "processable".
   * 		- `map`: This is a method that applies a transformation to each element in the
   * NodeList and returns a new NodeList. In this case, it replaces each element with
   * another element.
   * 		- `perf`: This is an object that provides methods for measuring performance. In
   * this case, it records the start time of the operation using the `begin` method.
   * 		- `disableObservation`: This is a method that disables observation of the execution
   * of the `picked.all` operation.
   * 		- `enableObservation`: This is a method that enables observation of the execution
   * of the `picked.all` operation.
   * 		- `resolves`: This is a method that signals that the operation has completed
   * successfully and all promises have been resolved.
   * 		- `rejects`: This is a method that signals that the operation has failed or been
   * interrupted and all promises have been rejected.
   * 
   * @returns { Promise } a promise that resolves when the pseudo-elements are searched.
   */
  function searchPseudoElements (root) {
    if (!IS_DOM) return;
    return new picked(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      picked.all(operations).then(function () {
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

  var baseStyles = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

  /**
   * @description Modifies the input CSS string based on configuration settings, replacing
   * default family and replacement class names with custom alternatives.
   * 
   * @returns { string } a modified CSS string with updated variable replacements based
   * on the provided configuration.
   */
  function css () {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var Library =
  /*#__PURE__*/
  function () {
    /**
     * @description Defines an object called `definitions`.
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
          _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
          defineIcons(key, additions[key]);
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
          if (!additions[prefix]) additions[prefix] = {};
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  /**
   * @description Verifies if CSS should be added to a given configuration and, if so,
   * adds it.
   */
  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  }

  /**
   * @description Creates an object that has three properties: 'abstract', 'html', and
   * 'node'. The 'abstract' property is a getter function that returns an array of
   * objects, while the 'html' and 'node' properties are also getters that return HTML
   * content or a DOM node respectively.
   * 
   * @param { object } val - object that will have properties added and modified through
   * the `apiObject` function.
   * 
   * @param { function. } abstractCreator - getter method that returns an abstract
   * representation of the value contained within `val`.
   * 
   * 		- `get`: The getter method for the `abstract` property. It returns the value of
   * the `abstractCreator` object's `map()` method, which is used to transform an array
   * of objects into a new array with modified values.
   * 		- `html`: The getter method for the `html` property. It returns an array of
   * strings, where each string is the result of calling the `toHtml()` function on an
   * element of the `val.abstract` array.
   * 		- `node`: The getter method for the `node` property. If the `IS_DOM` variable
   * is `true`, it returns a node of type `div`, which contains the HTML content generated
   * by the `html` getter method. Otherwise, it returns `null`.
   * 
   * @returns { HTMLDivElement } an object with three properties: `abstract`, `html`,
   * and `node`.
   * 
   * 		- `abstract`: Getter method for accessing the `AbstractCreator` object, which
   * is an abstract class that provides a way to create objects with customizable
   * abstract methods.
   * 		- `html`: Getter method for accessing an array of HTML strings, generated by
   * calling the `toHtml()` method on each element of the `val.abstract` array.
   * 		- `node`: Getter method for accessing the nodes created by concatenating the
   * HTML strings in the `html` array, if the `DOCUMENT` object is available (i.e., the
   * output is displayed in a web page). If not, the getter returns an empty node list.
   */
  function apiObject(val, abstractCreator) {
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
   * @description Searches for an icon definition in a given library or namespace based
   * on the icon name provided.
   * 
   * @param { object } iconLookup - mapping of icon prefix to icon name, providing the
   * information necessary for the function to locate the appropriate icon definition.
   * 
   * @returns { object } an icon definition object.
   */
  function findIconDefinition(iconLookup) {
    var _iconLookup$prefix = iconLookup.prefix,
        prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
        iconName = iconLookup.iconName;
    if (!iconName) return;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }

  /**
   * @description Takes a single argument `next`, and recursively calls it with an icon
   * definition and parameters. It applies the provided mask to the icon definition and
   * returns the resulting object.
   * 
   * @param { anonymous function reference or proxy to be passed as an argument to
   * another function, in which it will receive the result from the called function
   * invocation. } next - function that will be called with the icon definition and
   * additional parameters after resolving the icons using the provided mask.
   * 
   * 		- `next`: The callback function that takes two arguments, `iconDefinition` and
   * `params`.
   * 
   * @returns { object } a parameterized version of the next function, taking an icon
   * definition and mask as input.
   */
  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread({}, params, {
        mask: mask
      }));
    };
  }

  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    disconnect();
  };
  var _cssInserted = false;
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        ensureCss();
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }

        return onTree(node, callback);
      } else {
        return picked.reject('Operation requires a DOM of some kind.');
      }
    },
    css: css,
    insertCss: function insertCss$$1() {
      if (!_cssInserted) {
        insertCss(css());

        _cssInserted = true;
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
          observeMutationsRoot = params.observeMutationsRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements,
          observeMutationsRoot: observeMutationsRoot
        });
      });
    }
  };
  var parse = {
    transform: function transform(transformString) {
      return parseTransformString(transformString);
    }
  };
  var icon = resolveIcons(function (iconDefinition) {
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
    return apiObject(_objectSpread({
      type: 'icon'
    }, iconDefinition), function () {
      ensureCss();

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
        transform: _objectSpread({}, meaninglessTransform, transform),
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
  });
  var text = function text(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform2 = params.transform,
        transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
        _params$title2 = params.title,
        title = _params$title2 === void 0 ? null : _params$title2,
        _params$classes2 = params.classes,
        classes = _params$classes2 === void 0 ? [] : _params$classes2,
        _params$attributes2 = params.attributes,
        attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
        _params$styles2 = params.styles,
        styles = _params$styles2 === void 0 ? {} : _params$styles2;
    return apiObject({
      type: 'text',
      content: content
    }, function () {
      ensureCss();
      return makeLayersTextAbstract({
        content: content,
        transform: _objectSpread({}, meaninglessTransform, transform),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
        }
      });
    });
  };
  var counter = function counter(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$title3 = params.title,
        title = _params$title3 === void 0 ? null : _params$title3,
        _params$classes3 = params.classes,
        classes = _params$classes3 === void 0 ? [] : _params$classes3,
        _params$attributes3 = params.attributes,
        attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
        _params$styles3 = params.styles,
        styles = _params$styles3 === void 0 ? {} : _params$styles3;
    return apiObject({
      type: 'counter',
      content: content
    }, function () {
      ensureCss();
      return makeLayersCounterAbstract({
        content: content.toString(),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
        }
      });
    });
  };
  var layer = function layer(assembler) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$classes4 = params.classes,
        classes = _params$classes4 === void 0 ? [] : _params$classes4;
    return apiObject({
      type: 'layer'
    }, function () {
      ensureCss();
      var children = [];
      assembler(function (args) {
        Array.isArray(args) ? args.map(function (a) {
          children = children.concat(a.abstract);
        }) : children = children.concat(args.abstract);
      });
      return [{
        tag: 'span',
        attributes: {
          class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
        },
        children: children
      }];
    });
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    library: library,
    parse: parse,
    findIconDefinition: findIconDefinition,
    icon: icon,
    text: text,
    counter: counter,
    layer: layer,
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
   * @description Loads and sets up Font Awesome icon library, hooks, shims, and other
   * components for use in an application.
   */
  function bootstrap() {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      });
    }

    namespace.hooks = _objectSpread({}, namespace.hooks, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, icons);
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

  bunker(bootstrap);

}());
