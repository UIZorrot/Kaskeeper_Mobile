"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2076],{

/***/ 24808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ Card_Card)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(55160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(92792);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(5756);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(27828);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(47080);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Card/cardClasses.js


function getCardUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('MuiCard', slot);
}
const cardClasses = (0,generateUtilityClasses/* default */.c)('MuiCard', ['root']);
/* harmony default export */ const Card_cardClasses = ((/* unused pure expression or super */ null && (cardClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Card/Card.js
'use client';











const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.c)(slots, getCardUtilityClass, classes);
};
const CardRoot = (0,styled/* default */.cp)(Paper/* default */.c, {
  name: 'MuiCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  overflow: 'hidden'
});
const Card = /*#__PURE__*/react.forwardRef(function Card(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.C)({
    props: inProps,
    name: 'MuiCard'
  });
  const {
    className,
    raised = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    raised
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardRoot, {
    className: (0,clsx/* default */.c)(classes.root, className),
    elevation: raised ? 8 : undefined,
    ref: ref,
    ownerState: ownerState,
    ...other
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Card_Card = (Card);

/***/ }),

/***/ 27828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ Paper_Paper)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(55160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+st_ca8398801f232f1bcfe635abcfad4ec2/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(76440);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(92792);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(50535);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(88344);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(5756);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(70900);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(47080);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.c)('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Paper/Paper.js
'use client';














const useUtilityClasses = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return (0,composeClasses/* default */.c)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.cp)('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: 'elevation'
    },
    style: {
      boxShadow: 'var(--Paper-shadow)',
      backgroundImage: 'var(--Paper-overlay)'
    }
  }]
})));
const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.C)({
    props: inProps,
    name: 'MuiPaper'
  });
  const theme = (0,useTheme/* default */.c)();
  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaperRoot, {
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.c)(classes.root, className),
    ref: ref,
    ...other,
    style: {
      ...(variant === 'elevation' && {
        '--Paper-shadow': (theme.vars || theme).shadows[elevation],
        ...(theme.vars && {
          '--Paper-overlay': theme.vars.overlays?.[elevation]
        }),
        ...(!theme.vars && theme.palette.mode === 'dark' && {
          '--Paper-overlay': `linear-gradient(${(0,colorManipulator/* alpha */.W4)('#fff', (0,getOverlayAlpha/* default */.c)(elevation))}, ${(0,colorManipulator/* alpha */.W4)('#fff', (0,getOverlayAlpha/* default */.c)(elevation))})`
        })
      }),
      ...other.style
    }
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);

/***/ }),

/***/ 50535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82904);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86184);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92608);
'use client';





function useTheme() {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)(_defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c);
  if (false) {}
  return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c] || theme;
}

/***/ }),

/***/ 19408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ createSvgIcon)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(55160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(92792);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(88344);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(5756);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(47080);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/SvgIcon/svgIconClasses.js


function getSvgIconUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('MuiSvgIcon', slot);
}
const svgIconClasses = (0,generateUtilityClasses/* default */.c)('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);
/* harmony default export */ const SvgIcon_svgIconClasses = ((/* unused pure expression or super */ null && (svgIconClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/SvgIcon/SvgIcon.js
'use client';











const useUtilityClasses = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${(0,capitalize/* default */.c)(color)}`, `fontSize${(0,capitalize/* default */.c)(fontSize)}`]
  };
  return (0,composeClasses/* default */.c)(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = (0,styled/* default */.cp)('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${(0,capitalize/* default */.c)(ownerState.color)}`], styles[`fontSize${(0,capitalize/* default */.c)(ownerState.fontSize)}`]];
  }
})((0,memoTheme/* default */.c)(({
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
  const props = (0,DefaultPropsProvider/* useDefaultProps */.C)({
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
    className: (0,clsx/* default */.c)(classes.root, className),
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
if (SvgIcon) {
  SvgIcon.muiName = 'SvgIcon';
}
/* harmony default export */ const SvgIcon_SvgIcon = (SvgIcon);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/createSvgIcon.js
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

/***/ 39500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useSlot)
/* harmony export */ });
/* harmony import */ var _mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40800);
/* harmony import */ var _mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42984);
/* harmony import */ var _mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61624);
/* harmony import */ var _mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21732);
'use client';





/**
 * An internal function to create a Material UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */
function useSlot(
/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */
name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    internalForwardedProps,
    ...useSlotPropsParams
  } = parameters;
  const {
    component: rootComponent,
    slots = {
      [name]: undefined
    },
    slotProps = {
      [name]: undefined
    },
    ...other
  } = externalForwardedProps;
  const elementType = slots[name] || initialElementType;

  // `slotProps[name]` can be a callback that receives the component's ownerState.
  // `resolvedComponentsProps` is always a plain object.
  const resolvedComponentsProps = (0,_mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c)(slotProps[name], ownerState);
  const {
    props: {
      component: slotComponent,
      ...mergedProps
    },
    internalRef
  } = (0,_mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)({
    className,
    ...useSlotPropsParams,
    externalForwardedProps: name === 'root' ? other : undefined,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = (0,_mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c)(internalRef, resolvedComponentsProps?.ref, parameters.ref);
  const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
  const props = (0,_mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c)(elementType, {
    ...(name === 'root' && !rootComponent && !slots[name] && internalForwardedProps),
    ...(name !== 'root' && !slots[name] && internalForwardedProps),
    ...mergedProps,
    ...(LeafComponent && {
      as: LeafComponent
    }),
    ref
  }, ownerState);
  return [elementType, props];
}

/***/ }),

/***/ 42984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ appendOwnerState_appendOwnerState)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const isHostComponent_isHostComponent = (isHostComponent);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js


/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent_isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
/* harmony default export */ const appendOwnerState_appendOwnerState = (appendOwnerState);

/***/ }),

/***/ 37432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractEventHandlers);

/***/ }),

/***/ 21732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ mergeSlotProps_mergeSlotProps)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(37432);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const omitEventHandlers_omitEventHandlers = (omitEventHandlers);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js



/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0,clsx/* default */.c)(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = (0,extractEventHandlers/* default */.c)({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0,clsx/* default */.c)(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
/* harmony default export */ const mergeSlotProps_mergeSlotProps = (mergeSlotProps);

/***/ }),

/***/ 61624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveComponentProps);

/***/ })

}]);