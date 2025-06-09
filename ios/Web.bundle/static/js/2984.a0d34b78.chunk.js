"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2984],{

/***/ 26304:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
var _default = exports["default"] = Empty;

/***/ }),

/***/ 62520:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
__webpack_unused_export__ = ({
  value: true
});
exports.c = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _LocaleReceiver = _interopRequireDefault(__webpack_require__(76824));
var _empty = _interopRequireDefault(__webpack_require__(26304));
var _simple = _interopRequireDefault(__webpack_require__(2312));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);
var Empty = function Empty(_a) {
  var className = _a.className,
    customizePrefixCls = _a.prefixCls,
    _a$image = _a.image,
    image = _a$image === void 0 ? defaultEmptyImg : _a$image,
    description = _a.description,
    children = _a.children,
    imageStyle = _a.imageStyle,
    restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Empty"
  }, function (contextLocale) {
    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : contextLocale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;
    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/React.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      className: (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = exports.c = Empty;

/***/ }),

/***/ 2312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};
var _default = exports["default"] = Simple;

/***/ }),

/***/ 51920:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(89148);
__webpack_require__(32348);

/***/ }),

/***/ 32348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 54184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _rs: () => (/* reexport */ _rs),
  "default": () => (/* binding */ es)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(72288);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(75808);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(96392);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(33432);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(88852);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(80512);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });

    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/resize-observer-polyfill@1.5.1/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(67071);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}

// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es/* default */.c(onResize);

// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs =  false ? 0 : null; // eslint-disable-line

// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(74768);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(8612);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(38860);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(5376);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.c)(DomWrapper, _React$Component);
  var _super = (0,createSuper/* default */.c)(DomWrapper);
  function DomWrapper() {
    (0,classCallCheck/* default */.c)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.c)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/SingleObserver/index.js








function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext);

  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Size =============================
  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });

  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && (0,es_ref/* supportRef */.QD)(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = (0,es_ref/* useComposeRef */.BG)(originRef, elementRef);
  var getDom = function getDom() {
    var _elementRef$current;
    return (0,findDOMNode/* default */.c)(elementRef.current) || (
    // Support `nativeElement` format
    elementRef.current && (0,esm_typeof/* default */.c)(elementRef.current) === 'object' ? (0,findDOMNode/* default */.c)((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0,findDOMNode/* default */.c)(wrapperRef.current);
  };
  react.useImperativeHandle(ref, function () {
    return getDom();
  });

  // =========================== Observe ============================
  var propsRef = react.useRef(props);
  propsRef.current = props;

  // Handler
  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;

      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });

      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe
  react.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);

  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/react.forwardRef(SingleObserver);
if (false) {}
/* harmony default export */ const es_SingleObserver = (RefSingleObserver);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';


function ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0,toArray/* default */.c)(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(es_SingleObserver, (0,esm_extends/* default */.c)({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/react.forwardRef(ResizeObserver);
if (false) {}
RefResizeObserver.Collection = Collection;
/* harmony default export */ const es = (RefResizeObserver);

/***/ }),

/***/ 23124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ rc_virtual_list_es)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(96392);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(33432);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(95484);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(31760);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(13608);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(66112);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(10124);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(54184);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/Filler.js






/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offsetY = _ref.offsetY,
    offsetX = _ref.offsetX,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps,
    rtl = _ref.rtl,
    extra = _ref.extra;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offsetY !== undefined) {
    // Not set `width` since this will break `sticky: right`
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, innerStyle), {}, (0,defineProperty/* default */.c)((0,defineProperty/* default */.c)((0,defineProperty/* default */.c)((0,defineProperty/* default */.c)((0,defineProperty/* default */.c)({
      transform: "translateY(".concat(offsetY, "px)")
    }, rtl ? 'marginRight' : 'marginLeft', -offsetX), "position", 'absolute'), "left", 0), "right", 0), "top", 0));
  }
  return /*#__PURE__*/react.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/react.createElement(es["default"], {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.c)({
    style: innerStyle,
    className: classnames_default()((0,defineProperty/* default */.c)({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children, extra)));
});
Filler.displayName = 'Filler';
/* harmony default export */ const es_Filler = (Filler);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(81472);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/ScrollBar.js






function getPageXY(e, horizontal) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return obj[horizontal ? 'pageX' : 'pageY'];
}
var ScrollBar = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    rtl = props.rtl,
    scrollOffset = props.scrollOffset,
    scrollRange = props.scrollRange,
    onStartMove = props.onStartMove,
    onStopMove = props.onStopMove,
    onScroll = props.onScroll,
    horizontal = props.horizontal,
    spinSize = props.spinSize,
    containerSize = props.containerSize,
    style = props.style,
    propsThumbStyle = props.thumbStyle;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.c)(_React$useState, 2),
    dragging = _React$useState2[0],
    setDragging = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.c)(_React$useState3, 2),
    pageXY = _React$useState4[0],
    setPageXY = _React$useState4[1];
  var _React$useState5 = react.useState(null),
    _React$useState6 = (0,slicedToArray/* default */.c)(_React$useState5, 2),
    startTop = _React$useState6[0],
    setStartTop = _React$useState6[1];
  var isLTR = !rtl;

  // ========================= Refs =========================
  var scrollbarRef = react.useRef();
  var thumbRef = react.useRef();

  // ======================= Visible ========================
  var _React$useState7 = react.useState(false),
    _React$useState8 = (0,slicedToArray/* default */.c)(_React$useState7, 2),
    visible = _React$useState8[0],
    setVisible = _React$useState8[1];
  var visibleTimeoutRef = react.useRef();
  var delayHidden = function delayHidden() {
    clearTimeout(visibleTimeoutRef.current);
    setVisible(true);
    visibleTimeoutRef.current = setTimeout(function () {
      setVisible(false);
    }, 3000);
  };

  // ======================== Range =========================
  var enableScrollRange = scrollRange - containerSize || 0;
  var enableOffsetRange = containerSize - spinSize || 0;

  // ========================= Top ==========================
  var top = react.useMemo(function () {
    if (scrollOffset === 0 || enableScrollRange === 0) {
      return 0;
    }
    var ptg = scrollOffset / enableScrollRange;
    return ptg * enableOffsetRange;
  }, [scrollOffset, enableScrollRange, enableOffsetRange]);

  // ====================== Container =======================
  var onContainerMouseDown = function onContainerMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  // ======================== Thumb =========================
  var stateRef = react.useRef({
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  });
  stateRef.current = {
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  };
  var onThumbMouseDown = function onThumbMouseDown(e) {
    setDragging(true);
    setPageXY(getPageXY(e, horizontal));
    setStartTop(stateRef.current.top);
    onStartMove();
    e.stopPropagation();
    e.preventDefault();
  };

  // ======================== Effect ========================

  // React make event as passive, but we need to preventDefault
  // Add event on dom directly instead.
  // ref: https://github.com/facebook/react/issues/9809
  react.useEffect(function () {
    var onScrollbarTouchStart = function onScrollbarTouchStart(e) {
      e.preventDefault();
    };
    var scrollbarEle = scrollbarRef.current;
    var thumbEle = thumbRef.current;
    scrollbarEle.addEventListener('touchstart', onScrollbarTouchStart);
    thumbEle.addEventListener('touchstart', onThumbMouseDown);
    return function () {
      scrollbarEle.removeEventListener('touchstart', onScrollbarTouchStart);
      thumbEle.removeEventListener('touchstart', onThumbMouseDown);
    };
  }, []);

  // Pass to effect
  var enableScrollRangeRef = react.useRef();
  enableScrollRangeRef.current = enableScrollRange;
  var enableOffsetRangeRef = react.useRef();
  enableOffsetRangeRef.current = enableOffsetRange;
  react.useEffect(function () {
    if (dragging) {
      var moveRafId;
      var onMouseMove = function onMouseMove(e) {
        var _stateRef$current = stateRef.current,
          stateDragging = _stateRef$current.dragging,
          statePageY = _stateRef$current.pageY,
          stateStartTop = _stateRef$current.startTop;
        raf/* default */.c.cancel(moveRafId);
        if (stateDragging) {
          var offset = getPageXY(e, horizontal) - statePageY;
          var newTop = stateStartTop;
          if (!isLTR && horizontal) {
            newTop -= offset;
          } else {
            newTop += offset;
          }
          var tmpEnableScrollRange = enableScrollRangeRef.current;
          var tmpEnableOffsetRange = enableOffsetRangeRef.current;
          var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
          var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
          newScrollTop = Math.max(newScrollTop, 0);
          newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
          moveRafId = (0,raf/* default */.c)(function () {
            onScroll(newScrollTop, horizontal);
          });
        }
      };
      var onMouseUp = function onMouseUp() {
        setDragging(false);
        onStopMove();
      };
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onMouseUp);
      return function () {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchend', onMouseUp);
        raf/* default */.c.cancel(moveRafId);
      };
    }
  }, [dragging]);
  react.useEffect(function () {
    delayHidden();
  }, [scrollOffset]);

  // ====================== Imperative ======================
  react.useImperativeHandle(ref, function () {
    return {
      delayHidden: delayHidden
    };
  });

  // ======================== Render ========================
  var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
  var containerStyle = {
    position: 'absolute',
    visibility: visible ? null : 'hidden'
  };
  var thumbStyle = {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 99,
    cursor: 'pointer',
    userSelect: 'none'
  };
  if (horizontal) {
    // Container
    containerStyle.height = 8;
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.bottom = 0;

    // Thumb
    thumbStyle.height = '100%';
    thumbStyle.width = spinSize;
    if (isLTR) {
      thumbStyle.left = top;
    } else {
      thumbStyle.right = top;
    }
  } else {
    // Container
    containerStyle.width = 8;
    containerStyle.top = 0;
    containerStyle.bottom = 0;
    if (isLTR) {
      containerStyle.right = 0;
    } else {
      containerStyle.left = 0;
    }

    // Thumb
    thumbStyle.width = '100%';
    thumbStyle.height = spinSize;
    thumbStyle.top = top;
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: scrollbarRef,
    className: classnames_default()(scrollbarPrefixCls, (0,defineProperty/* default */.c)((0,defineProperty/* default */.c)((0,defineProperty/* default */.c)({}, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), "".concat(scrollbarPrefixCls, "-visible"), visible)),
    style: (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, containerStyle), style),
    onMouseDown: onContainerMouseDown,
    onMouseMove: delayHidden
  }, /*#__PURE__*/react.createElement("div", {
    ref: thumbRef,
    className: classnames_default()("".concat(scrollbarPrefixCls, "-thumb"), (0,defineProperty/* default */.c)({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
    style: (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, thumbStyle), propsThumbStyle),
    onMouseDown: onThumbMouseDown
  }));
});
if (false) {}
/* harmony default export */ const es_ScrollBar = (ScrollBar);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/Item.js

function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = react.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, scrollWidth, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      }
    });
    var key = getKey(item);
    return /*#__PURE__*/react.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(88852);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(74768);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(8612);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/utils/CacheMap.js



// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    (0,classCallCheck/* default */.c)(this, CacheMap);
    (0,defineProperty/* default */.c)(this, "maps", void 0);
    // Used for cache key
    // `useMemo` no need to update if `id` not change
    (0,defineProperty/* default */.c)(this, "id", 0);
    this.maps = Object.create(null);
  }
  (0,createClass/* default */.c)(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
      this.id += 1;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();
/* harmony default export */ const utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useHeights.js






function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react.useState(0),
    _React$useState2 = (0,slicedToArray/* default */.c)(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0,react.useRef)(new Map());
  var heightsRef = (0,react.useRef)(new utils_CacheMap());
  var collectRafRef = (0,react.useRef)();
  function cancelRaf() {
    raf/* default */.c.cancel(collectRafRef.current);
  }
  function collectHeight() {
    var sync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    cancelRaf();
    var doCollect = function doCollect() {
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = (0,findDOMNode/* default */.c)(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });

      // Always trigger update mark to tell parent that should re-calculate heights when resized
      setUpdatedMark(function (c) {
        return c + 1;
      });
    };
    if (sync) {
      doCollect();
    } else {
      collectRafRef.current = (0,raf/* default */.c)(doCollect);
    }
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }

    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 || onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 || onItemRemove(item);
      }
    }
  }
  (0,react.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(28280);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(69464);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(64240);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/ref.js
var ref = __webpack_require__(80512);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/utils/set.js
var set = __webpack_require__(91099);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(75808);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/index.js






;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useScrollTo.js



/* eslint-disable no-param-reassign */




var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react.useRef();
  var _React$useState = react.useState(null),
    _React$useState2 = (0,slicedToArray/* default */.c)(_React$useState, 2),
    syncState = _React$useState2[0],
    setSyncState = _React$useState2[1];

  // ========================== Sync Scroll ==========================
  (0,useLayoutEffect/* default */.c)(function () {
    if (syncState && syncState.times < MAX_TIMES) {
      // Never reach
      if (!containerRef.current) {
        setSyncState(function (ori) {
          return (0,objectSpread2/* default */.c)({}, ori);
        });
        return;
      }
      collectHeight();
      var targetAlign = syncState.targetAlign,
        originAlign = syncState.originAlign,
        index = syncState.index,
        offset = syncState.offset;
      var height = containerRef.current.clientHeight;
      var needCollectHeight = false;
      var newTargetAlign = targetAlign;
      var targetTop = null;

      // Go to next frame if height not exist
      if (height) {
        var mergedAlign = targetAlign || originAlign;

        // Get top & bottom
        var stackTop = 0;
        var itemTop = 0;
        var itemBottom = 0;
        var maxLen = Math.min(data.length - 1, index);
        for (var i = 0; i <= maxLen; i += 1) {
          var key = getKey(data[i]);
          itemTop = stackTop;
          var cacheHeight = heights.get(key);
          itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
          stackTop = itemBottom;
        }

        // Check if need sync height (visible range has item not record height)
        var leftHeight = mergedAlign === 'top' ? offset : height - offset;
        for (var _i = maxLen; _i >= 0; _i -= 1) {
          var _key = getKey(data[_i]);
          var _cacheHeight = heights.get(_key);
          if (_cacheHeight === undefined) {
            needCollectHeight = true;
            break;
          }
          leftHeight -= _cacheHeight;
          if (leftHeight <= 0) {
            break;
          }
        }

        // Scroll to
        switch (mergedAlign) {
          case 'top':
            targetTop = itemTop - offset;
            break;
          case 'bottom':
            targetTop = itemBottom - height + offset;
            break;
          default:
            {
              var scrollTop = containerRef.current.scrollTop;
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = 'top';
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = 'bottom';
              }
            }
        }
        if (targetTop !== null) {
          syncScrollTop(targetTop);
        }

        // One more time for sync
        if (targetTop !== syncState.lastTop) {
          needCollectHeight = true;
        }
      }

      // Trigger next effect
      if (needCollectHeight) {
        setSyncState((0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, syncState), {}, {
          times: syncState.times + 1,
          targetAlign: newTargetAlign,
          lastTop: targetTop
        }));
      }
    } else if (false) {}
  }, [syncState, containerRef.current]);

  // =========================== Scroll To ===========================
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }

    // Normal scroll logic
    raf/* default */.c.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && (0,esm_typeof/* default */.c)(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      setSyncState({
        times: 0,
        index: index,
        offset: offset,
        originAlign: align
      });
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;

  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }

  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}

/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }

  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useDiffItem.js



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react.useState(data),
    _React$useState2 = (0,slicedToArray/* default */.c)(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.c)(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  react.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 || onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/utils/isFirefox.js

var isFF = (typeof navigator === "undefined" ? "undefined" : (0,esm_typeof/* default */.c)(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ const isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ const useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,react.useRef)(false);
  var lockTimeoutRef = (0,react.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }

  // Pass to ref since global add is in closure
  var scrollPingRef = (0,react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll =
    // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, horizontalScroll,
/***
 * Return `true` when you need to prevent default event
 */
onWheelDelta) {
  var offsetRef = (0,react.useRef)(0);
  var nextFrameRef = (0,react.useRef)(null);

  // Firefox patch
  var wheelValueRef = (0,react.useRef)(null);
  var isMouseScrollRef = (0,react.useRef)(false);

  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheelY(event, deltaY) {
    raf/* default */.c.cancel(nextFrameRef.current);
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;

    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;

    // Proxy of scroll events
    if (!isFirefox) {
      event.preventDefault();
    }
    nextFrameRef.current = (0,raf/* default */.c)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!isFirefox) {
      event.preventDefault();
    }
  }

  // Check for which direction does wheel do. `sx` means `shift + wheel`
  var wheelDirectionRef = (0,react.useRef)(null);
  var wheelDirectionCleanRef = (0,react.useRef)(null);
  function onWheel(event) {
    if (!inVirtual) return;

    // Wait for 2 frame to clean direction
    raf/* default */.c.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = (0,raf/* default */.c)(function () {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX,
      deltaY = event.deltaY,
      shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === 'sx' || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = 'sx';
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? 'x' : 'y';
    }
    if (wheelDirectionRef.current === 'y') {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }

  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,react.useRef)(false);
  var touchYRef = (0,react.useRef)(0);
  var elementRef = (0,react.useRef)(null);

  // Smooth scroll
  var intervalRef = (0,react.useRef)(null);

  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var _offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(_offsetY)) {
        e.preventDefault();
      }

      // Smooth interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        _offsetY *= SMOOTH_PTG;
        if (!callback(_offsetY, true) || Math.abs(_offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  (0,useLayoutEffect/* default */.c)(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/utils/scrollbarUtil.js
var MIN_SIZE = 20;
function getSpinSize() {
  var containerSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var scrollRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var baseSize = containerSize / scrollRange * containerSize;
  if (isNaN(baseSize)) {
    baseSize = 0;
  }
  baseSize = Math.max(baseSize, MIN_SIZE);
  return Math.floor(baseSize);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/hooks/useGetSize.js



/**
 * Size info need loop query for the `heights` which will has the perf issue.
 * Let cache result for each render phase.
 */
function useGetSize(mergedData, getKey, heights, itemHeight) {
  var _React$useMemo = react.useMemo(function () {
      return [new Map(), []];
    }, [mergedData, heights.id, itemHeight]),
    _React$useMemo2 = (0,slicedToArray/* default */.c)(_React$useMemo, 2),
    key2Index = _React$useMemo2[0],
    bottomList = _React$useMemo2[1];
  var getSize = function getSize(startKey) {
    var endKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : startKey;
    // Get from cache first
    var startIndex = key2Index.get(startKey);
    var endIndex = key2Index.get(endKey);

    // Loop to fill the cache
    if (startIndex === undefined || endIndex === undefined) {
      var dataLen = mergedData.length;
      for (var i = bottomList.length; i < dataLen; i += 1) {
        var _heights$get;
        var item = mergedData[i];
        var key = getKey(item);
        key2Index.set(key, i);
        var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
        bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
        if (key === startKey) {
          startIndex = i;
        }
        if (key === endKey) {
          endIndex = i;
        }
        if (startIndex !== undefined && endIndex !== undefined) {
          break;
        }
      }
    }
    return {
      top: bottomList[startIndex - 1] || 0,
      bottom: bottomList[endIndex]
    };
  };
  return getSize;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/List.js






var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"];


















var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    direction = props.direction,
    scrollWidth = props.scrollWidth,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVirtualScroll = props.onVirtualScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    extraRender = props.extraRender,
    styles = props.styles,
    restProps = (0,objectWithoutProperties/* default */.c)(props, _excluded);

  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && (itemHeight * data.length > height || !!scrollWidth);
  var isRTL = direction === 'rtl';
  var mergedClassName = classnames_default()(prefixCls, (0,defineProperty/* default */.c)({}, "".concat(prefixCls, "-rtl"), isRTL), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,react.useRef)();
  var fillerInnerRef = (0,react.useRef)();

  // =============================== Item Key ===============================

  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    offsetTop = _useState2[0],
    setOffsetTop = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = (0,slicedToArray/* default */.c)(_useState3, 2),
    offsetLeft = _useState4[0],
    setOffsetLeft = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.c)(_useState5, 2),
    scrollMoving = _useState6[0],
    setScrollMoving = _useState6[1];
  var onScrollbarStartMove = function onScrollbarStartMove() {
    setScrollMoving(true);
  };
  var onScrollbarStopMove = function onScrollbarStopMove() {
    setScrollMoving(false);
  };

  // =============================== Item Key ===============================
  var getKey = react.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  };

  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setOffsetTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }

  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0,react.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,react.useRef)();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = (0,slicedToArray/* default */.c)(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;

  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = (0,slicedToArray/* default */.c)(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];

  // ========================== Visible Calculation =========================
  var _React$useMemo = react.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }

      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var _item = mergedData[i];
        var key = getKey(_item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);

        // Check item top in the range
        if (currentItemBottom >= offsetTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }

        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > offsetTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }

      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }

      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length - 1);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, offsetTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    fillerOffset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;

  // ================================= Size =================================
  var _React$useState = react.useState({
      width: 0,
      height: height
    }),
    _React$useState2 = (0,slicedToArray/* default */.c)(_React$useState, 2),
    size = _React$useState2[0],
    setSize = _React$useState2[1];
  var onHolderResize = function onHolderResize(sizeInfo) {
    setSize({
      width: sizeInfo.width || sizeInfo.offsetWidth,
      height: sizeInfo.height || sizeInfo.offsetHeight
    });
  };

  // Hack on scrollbar to enable flash call
  var verticalScrollBarRef = (0,react.useRef)();
  var horizontalScrollBarRef = (0,react.useRef)();
  var horizontalScrollBarSpinSize = react.useMemo(function () {
    return getSpinSize(size.width, scrollWidth);
  }, [size.width, scrollWidth]);
  var verticalScrollBarSpinSize = react.useMemo(function () {
    return getSpinSize(size.height, scrollHeight);
  }, [size.height, scrollHeight]);

  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,react.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = offsetTop <= 0;
  var isScrollAtBottom = offsetTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);

  // ================================ Scroll ================================
  var getVirtualScrollInfo = function getVirtualScrollInfo() {
    return {
      x: isRTL ? -offsetLeft : offsetLeft,
      y: offsetTop
    };
  };
  var lastVirtualScrollInfoRef = (0,react.useRef)(getVirtualScrollInfo());
  var triggerScroll = (0,useEvent/* default */.c)(function () {
    if (onVirtualScroll) {
      var nextInfo = getVirtualScrollInfo();

      // Trigger when offset changed
      if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
        onVirtualScroll(nextInfo);
        lastVirtualScrollInfoRef.current = nextInfo;
      }
    }
  });
  function onScrollBar(newScrollOffset, horizontal) {
    var newOffset = newScrollOffset;
    if (horizontal) {
      (0,react_dom.flushSync)(function () {
        setOffsetLeft(newOffset);
      });
      triggerScroll();
    } else {
      syncScrollTop(newOffset);
    }
  }

  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }

    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 || onScroll(e);
    triggerScroll();
  }
  var keepInHorizontalRange = function keepInHorizontalRange(nextOffsetLeft) {
    var tmpOffsetLeft = nextOffsetLeft;
    var max = scrollWidth - size.width;
    tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
    tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
    return tmpOffsetLeft;
  };
  var onWheelDelta = (0,useEvent/* default */.c)(function (offsetXY, fromHorizontal) {
    if (fromHorizontal) {
      // Horizontal scroll no need sync virtual position

      (0,react_dom.flushSync)(function () {
        setOffsetLeft(function (left) {
          var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
          return keepInHorizontalRange(nextOffsetLeft);
        });
      });
      triggerScroll();
    } else {
      syncScrollTop(function (top) {
        var newTop = top + offsetXY;
        return newTop;
      });
    }
  });

  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, !!scrollWidth, onWheelDelta),
    _useFrameWheel2 = (0,slicedToArray/* default */.c)(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];

  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  (0,useLayoutEffect/* default */.c)(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    var componentEle = componentRef.current;
    componentEle.addEventListener('wheel', onRawWheel);
    componentEle.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentEle.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      componentEle.removeEventListener('wheel', onRawWheel);
      componentEle.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentEle.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual]);

  // Sync scroll left
  (0,useLayoutEffect/* default */.c)(function () {
    if (scrollWidth) {
      setOffsetLeft(function (left) {
        return keepInHorizontalRange(left);
      });
    }
  }, [size.width, scrollWidth]);

  // ================================= Ref ==================================
  var delayHideScrollBar = function delayHideScrollBar() {
    var _verticalScrollBarRef, _horizontalScrollBarR;
    (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 || _verticalScrollBarRef.delayHidden();
    (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 || _horizontalScrollBarR.delayHidden();
  };
  var _scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, function () {
    return collectHeight(true);
  }, syncScrollTop, delayHideScrollBar);
  react.useImperativeHandle(ref, function () {
    return {
      getScrollInfo: getVirtualScrollInfo,
      scrollTo: function scrollTo(config) {
        function isPosScroll(arg) {
          return arg && (0,esm_typeof/* default */.c)(arg) === 'object' && ('left' in arg || 'top' in arg);
        }
        if (isPosScroll(config)) {
          // Scroll X
          if (config.left !== undefined) {
            setOffsetLeft(keepInHorizontalRange(config.left));
          }

          // Scroll Y
          _scrollTo(config.top);
        } else {
          _scrollTo(config);
        }
      }
    };
  });

  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  (0,useLayoutEffect/* default */.c)(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);

  // ================================ Extra =================================
  var getSize = useGetSize(mergedData, getKey, heights, itemHeight);
  var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
    start: start,
    end: end,
    virtual: inVirtual,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    rtl: isRTL,
    getSize: getSize
  });

  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, scrollWidth, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = (0,objectSpread2/* default */.c)((0,defineProperty/* default */.c)({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollWidth) {
        componentStyle.overflowX = 'hidden';
      }
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  var containerProps = {};
  if (isRTL) {
    containerProps.dir = 'rtl';
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.c)({
    style: (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, containerProps, restProps), /*#__PURE__*/react.createElement(es["default"], {
    onResize: onHolderResize
  }, /*#__PURE__*/react.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll,
    onMouseEnter: delayHideScrollBar
  }, /*#__PURE__*/react.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    scrollWidth: scrollWidth,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps,
    rtl: isRTL,
    extra: extraContent
  }, listChildren))), inVirtual && scrollHeight > height && /*#__PURE__*/react.createElement(es_ScrollBar, {
    ref: verticalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetTop,
    scrollRange: scrollHeight,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: verticalScrollBarSpinSize,
    containerSize: size.height,
    style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb
  }), inVirtual && scrollWidth > size.width && /*#__PURE__*/react.createElement(es_ScrollBar, {
    ref: horizontalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetLeft,
    scrollRange: scrollWidth,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: horizontalScrollBarSpinSize,
    containerSize: size.width,
    horizontal: true,
    style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb
  }));
}
var List = /*#__PURE__*/react.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ const es_List = (List);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.11.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-virtual-list/es/index.js

/* harmony default export */ const rc_virtual_list_es = (es_List);

/***/ })

}]);