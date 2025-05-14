"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[3586],{

/***/ 37636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CardContent_CardContent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/CardContent/cardContentClasses.js


function getCardContentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiCardContent', slot);
}
const cardContentClasses = (0,generateUtilityClasses/* default */.A)('MuiCardContent', ['root']);
/* harmony default export */ const CardContent_cardContentClasses = ((/* unused pure expression or super */ null && (cardContentClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/CardContent/CardContent.js
'use client';









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: 16,
  '&:last-child': {
    paddingBottom: 24
  }
});
const CardContent = /*#__PURE__*/react.forwardRef(function CardContent(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiCardContent'
  });
  const {
    className,
    component = 'div',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardContentRoot, {
    as: component,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other
  });
});
 false ? 0 : void 0;
/* harmony default export */ const CardContent_CardContent = (CardContent);

/***/ }),

/***/ 51365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"
}), 'History'));

/***/ }),

/***/ 75003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createSvgIcon)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(29077);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/SvgIcon/svgIconClasses.js


function getSvgIconUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiSvgIcon', slot);
}
const svgIconClasses = (0,generateUtilityClasses/* default */.A)('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);
/* harmony default export */ const SvgIcon_svgIconClasses = ((/* unused pure expression or super */ null && (svgIconClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/SvgIcon/SvgIcon.js
'use client';











const useUtilityClasses = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${(0,capitalize/* default */.A)(color)}`, `fontSize${(0,capitalize/* default */.A)(fontSize)}`]
  };
  return (0,composeClasses/* default */.A)(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = (0,styled/* default */.Ay)('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`], styles[`fontSize${(0,capitalize/* default */.A)(ownerState.fontSize)}`]];
  }
})((0,memoTheme/* default */.A)(({
  theme
}) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  transition: theme.transitions?.create?.('fill', {
    duration: (theme.vars ?? theme).transitions?.duration?.shorter
  }),
  variants: [{
    props: props => !props.hasSvgAsChild,
    style: {
      // the <svg> will define the property that has `currentColor`
      // for example heroicons uses fill="none" and stroke="currentColor"
      fill: 'currentColor'
    }
  }, {
    props: {
      fontSize: 'inherit'
    },
    style: {
      fontSize: 'inherit'
    }
  }, {
    props: {
      fontSize: 'small'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(20) || '1.25rem'
    }
  }, {
    props: {
      fontSize: 'medium'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(24) || '1.5rem'
    }
  }, {
    props: {
      fontSize: 'large'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(35) || '2.1875rem'
    }
  },
  // TODO v5 deprecate color prop, v6 remove for sx
  ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars ?? theme).palette?.[color]?.main
    }
  })), {
    props: {
      color: 'action'
    },
    style: {
      color: (theme.vars ?? theme).palette?.action?.active
    }
  }, {
    props: {
      color: 'disabled'
    },
    style: {
      color: (theme.vars ?? theme).palette?.action?.disabled
    }
  }, {
    props: {
      color: 'inherit'
    },
    style: {
      color: undefined
    }
  }]
})));
const SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  const {
    children,
    className,
    color = 'inherit',
    component = 'svg',
    fontSize = 'medium',
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = '0 0 24 24',
    ...other
  } = props;
  const hasSvgAsChild = /*#__PURE__*/react.isValidElement(children) && children.type === 'svg';
  const ownerState = {
    ...props,
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  };
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SvgIconRoot, {
    as: component,
    className: (0,clsx/* default */.A)(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref,
    ...more,
    ...other,
    ...(hasSvgAsChild && children.props),
    ownerState: ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  });
});
 false ? 0 : void 0;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ const SvgIcon_SvgIcon = (SvgIcon);
;// ./node_modules/@mui/material/utils/createSvgIcon.js
'use client';




/**
 * Private module reserved for @mui packages.
 */

function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SvgIcon_SvgIcon, {
      "data-testid": `${displayName}Icon`,
      ref: ref,
      ...props,
      children: path
    });
  }
  if (false) {}
  Component.muiName = SvgIcon_SvgIcon.muiName;
  return /*#__PURE__*/react.memo(/*#__PURE__*/react.forwardRef(Component));
}

/***/ }),

/***/ 80669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"
}), 'CloudUpload'));

/***/ }),

/***/ 83476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19.97 6.43 12 2 4.03 6.43 9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87zm2 0v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14V17z"
}), 'Token'));

/***/ }),

/***/ 83586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tools)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80590);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88658);
/* harmony import */ var _mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46952);
/* harmony import */ var _mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80669);
/* harmony import */ var _mui_icons_material_History__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51365);
/* harmony import */ var _mui_icons_material_Token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83476);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14073);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87164);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86990);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11848);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43168);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // UTXO图标
 // Deploy图标
 // Activity图标
 // Mint图标






// 自定义卡片样式

const StyledCard = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_ref => {
  let {
    theme
  } = _ref;
  return {
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[6]
    },
    borderRadius: theme.spacing(2),
    background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)'
  };
});

// 自定义按钮样式
const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(1),
    textTransform: 'none',
    fontWeight: 600
  };
});
const MintCard = _ref3 => {
  let {
    navigate
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledCard, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        display: "flex",
        alignItems: "center",
        mb: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Token__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
          color: "secondary",
          sx: {
            mr: 1
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          variant: "h6",
          color: "text.primary",
          children: "Mint KRC20"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        variant: "body2",
        color: "text.secondary",
        paragraph: true,
        children: "Create and mint your own KRC20 tokens on the Kaspa blockchain with custom properties and supply."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton, {
        onClick: () => navigate('MintScreen'),
        color: "secondary",
        fullWidth: true,
        variant: "contained",
        size: "medium",
        children: "Launch Mint"
      })]
    })
  });
};

// Deploy 卡片组件
const DeployCard = _ref4 => {
  let {
    navigate
  } = _ref4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledCard, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        display: "flex",
        alignItems: "center",
        mb: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          color: "secondary",
          sx: {
            mr: 1
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          variant: "h6",
          color: "text.primary",
          children: "Deploy KRC20"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        variant: "body2",
        color: "text.secondary",
        paragraph: true,
        children: "Deploy your KRC20 smart contracts to the Kaspa network securely and efficiently."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton, {
        onClick: () => navigate('DeployScreen'),
        color: "secondary",
        fullWidth: true,
        variant: "contained",
        size: "medium",
        children: "Start Deployment"
      })]
    })
  });
};

// UTXO 卡片组件
const UTXOCard = _ref5 => {
  let {
    navigate
  } = _ref5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledCard, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        display: "flex",
        alignItems: "center",
        mb: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
          color: "secondary",
          sx: {
            mr: 1
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          variant: "h6",
          color: "text.primary",
          children: "UTXO Viewer"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        variant: "body2",
        color: "text.secondary",
        paragraph: true,
        children: "Check and manage your unspent transaction outputs (UTXOs) on the Kaspa wallet."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton, {
        onClick: () => navigate('UTXOScreen'),
        color: "secondary",
        fullWidth: true,
        variant: "contained",
        size: "medium",
        children: "View UTXOs"
      })]
    })
  });
};

// Activity 卡片组件
const ActivityCard = _ref6 => {
  let {
    navigate
  } = _ref6;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledCard, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        display: "flex",
        alignItems: "center",
        mb: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_History__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
          color: "secondary",
          sx: {
            mr: 1
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          variant: "h6",
          color: "text.primary",
          children: "Activity Log"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        variant: "body2",
        color: "text.secondary",
        paragraph: true,
        children: "Track your transaction history and wallet activities in real-time."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton, {
        onClick: () => navigate('ActivitiesScrren'),
        color: "secondary",
        fullWidth: true,
        variant: "contained",
        size: "medium",
        children: "See Activity"
      })]
    })
  });
};
function Tools() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .Z)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .pI)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
      onBack: () => navigate('MainScreen')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      style: {
        paddingTop: '10px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        className: "space-y-6",
        children: [currentLayer !== 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MintCard, {
            navigate: navigate
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DeployCard, {
            navigate: navigate
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(UTXOCard, {
            navigate: navigate
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActivityCard, {
          navigate: navigate
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Footer */ .wi, {
      px: "zero",
      py: "zero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_1__/* .NavTabBar */ .w, {
        tab: "mint"
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);