"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8344],{

/***/ 48344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ Switch_Switch)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(55160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+st_ca8398801f232f1bcfe635abcfad4ec2/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(76440);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(99528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(35760);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(92792);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/useControlled.js + 1 modules
var useControlled = __webpack_require__(58148);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(80868);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/ButtonBase/ButtonBase.js + 10 modules
var ButtonBase = __webpack_require__(11564);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(47080);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.c)('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
/* harmony default export */ const internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/internal/SwitchBase.js
'use client';














const useUtilityClasses = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${(0,capitalize/* default */.c)(edge)}`],
    input: ['input']
  };
  return (0,composeClasses/* default */.c)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.cp)(ButtonBase/* default */.c)({
  padding: 9,
  borderRadius: '50%',
  variants: [{
    props: {
      edge: 'start',
      size: 'small'
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'start' && ownerState.size !== 'small',
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: 'end',
      size: 'small'
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'end' && ownerState.size !== 'small',
    style: {
      marginRight: -12
    }
  }]
});
const SwitchBaseInput = (0,styled/* default */.cp)('input', {
  shouldForwardProp: rootShouldForwardProp/* default */.c
})({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    ...other
  } = props;
  const [checked, setCheckedState] = (0,useControlled/* default */.c)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = (0,useFormControl/* default */.c)();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchBaseRoot, {
    component: "span",
    className: (0,clsx/* default */.c)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState: ownerState,
    ref: ref,
    ...other,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchBaseInput, {
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor ? id : undefined,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      ownerState: ownerState,
      tabIndex: tabIndex,
      type: type,
      ...(type === 'checkbox' && value === undefined ? {} : {
        value
      }),
      ...inputProps
    }), checked ? checkedIcon : icon]
  });
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ const internal_SwitchBase = (SwitchBase);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(88344);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(5756);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Switch/switchClasses.js


function getSwitchUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('MuiSwitch', slot);
}
const switchClasses = (0,generateUtilityClasses/* default */.c)('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
/* harmony default export */ const Switch_switchClasses = (switchClasses);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Switch/Switch.js
'use client';

// @inheritedComponent IconButton














const Switch_useUtilityClasses = ownerState => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', edge && `edge${(0,capitalize/* default */.c)(edge)}`, `size${(0,capitalize/* default */.c)(size)}`],
    switchBase: ['switchBase', `color${(0,capitalize/* default */.c)(color)}`, checked && 'checked', disabled && 'disabled'],
    thumb: ['thumb'],
    track: ['track'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.c)(slots, getSwitchUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const SwitchRoot = (0,styled/* default */.cp)('span', {
  name: 'MuiSwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${(0,capitalize/* default */.c)(ownerState.edge)}`], styles[`size${(0,capitalize/* default */.c)(ownerState.size)}`]];
  }
})({
  display: 'inline-flex',
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: 'hidden',
  padding: 12,
  boxSizing: 'border-box',
  position: 'relative',
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: 'middle',
  // For correct alignment with the text.
  '@media print': {
    colorAdjust: 'exact'
  },
  variants: [{
    props: {
      edge: 'start'
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: 'end'
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${Switch_switchClasses.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Switch_switchClasses.switchBase}`]: {
        padding: 4,
        [`&.${Switch_switchClasses.checked}`]: {
          transform: 'translateX(16px)'
        }
      }
    }
  }]
});
const SwitchSwitchBase = (0,styled/* default */.cp)(internal_SwitchBase, {
  name: 'MuiSwitch',
  slot: 'SwitchBase',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${Switch_switchClasses.input}`]: styles.input
    }, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.c)(ownerState.color)}`]];
  }
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]}`,
  transition: theme.transitions.create(['left', 'transform'], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${Switch_switchClasses.checked}`]: {
    transform: 'translateX(20px)'
  },
  [`&.${Switch_switchClasses.disabled}`]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]}`
  },
  [`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]: {
    opacity: 0.5
  },
  [`&.${Switch_switchClasses.disabled} + .${Switch_switchClasses.track}`]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === 'light' ? 0.12 : 0.2}`
  },
  [`& .${Switch_switchClasses.input}`]: {
    left: '-100%',
    width: '300%'
  }
})), (0,memoTheme/* default */.c)(({
  theme
}) => ({
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.W4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  variants: [...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.c)(['light'])) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${Switch_switchClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main,
        '&:hover': {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.W4)(theme.palette[color].main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        [`&.${Switch_switchClasses.disabled}`]: {
          color: theme.vars ? theme.vars.palette.Switch[`${color}DisabledColor`] : `${theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.IV)(theme.palette[color].main, 0.62) : (0,colorManipulator/* darken */.sP)(theme.palette[color].main, 0.55)}`
        }
      },
      [`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]: {
        backgroundColor: (theme.vars || theme).palette[color].main
      }
    }
  }))]
})));
const SwitchTrack = (0,styled/* default */.cp)('span', {
  name: 'MuiSwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  height: '100%',
  width: '100%',
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(['opacity', 'background-color'], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white}`,
  opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === 'light' ? 0.38 : 0.3}`
})));
const SwitchThumb = (0,styled/* default */.cp)('span', {
  name: 'MuiSwitch',
  slot: 'Thumb',
  overridesResolver: (props, styles) => styles.thumb
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%'
})));
const Switch = /*#__PURE__*/react.forwardRef(function Switch(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.C)({
    props: inProps,
    name: 'MuiSwitch'
  });
  const {
    className,
    color = 'primary',
    edge = false,
    size = 'medium',
    sx,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    edge,
    size
  };
  const classes = Switch_useUtilityClasses(ownerState);
  const icon = /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchThumb, {
    className: classes.thumb,
    ownerState: ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchRoot, {
    className: (0,clsx/* default */.c)(classes.root, className),
    sx: sx,
    ownerState: ownerState,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchSwitchBase, {
      type: "checkbox",
      icon: icon,
      checkedIcon: icon,
      ref: ref,
      ownerState: ownerState,
      ...other,
      classes: {
        ...classes,
        root: classes.switchBase
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchTrack, {
      className: classes.track,
      ownerState: ownerState
    })]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Switch_Switch = (Switch);

/***/ }),

/***/ 58148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ utils_useControlled)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/useControlled/useControlled.js
'use client';

// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/useControlled.js
'use client';


/* harmony default export */ const utils_useControlled = (useControlled);

/***/ })

}]);