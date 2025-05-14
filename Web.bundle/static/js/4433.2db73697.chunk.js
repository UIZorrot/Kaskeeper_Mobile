"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4433],{

/***/ 6025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useSlot)
/* harmony export */ });
/* harmony import */ var _mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31523);
/* harmony import */ var _mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70999);
/* harmony import */ var _mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56677);
/* harmony import */ var _mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22505);
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
    shouldForwardComponentProp = false,
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
  const resolvedComponentsProps = (0,_mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(slotProps[name], ownerState);
  const {
    props: {
      component: slotComponent,
      ...mergedProps
    },
    internalRef
  } = (0,_mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    className,
    ...useSlotPropsParams,
    externalForwardedProps: name === 'root' ? other : undefined,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = (0,_mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(internalRef, resolvedComponentsProps?.ref, parameters.ref);
  const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
  const props = (0,_mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(elementType, {
    ...(name === 'root' && !rootComponent && !slots[name] && internalForwardedProps),
    ...(name !== 'root' && !slots[name] && internalForwardedProps),
    ...mergedProps,
    ...(LeafComponent && !shouldForwardComponentProp && {
      as: LeafComponent
    }),
    ...(LeafComponent && shouldForwardComponentProp && {
      component: LeafComponent
    }),
    ref
  }, ownerState);
  return [elementType, props];
}

/***/ }),

/***/ 22505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ mergeSlotProps_mergeSlotProps)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(74959);
;// ./node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
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
;// ./node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js



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
    const joinedClasses = (0,clsx/* default */.A)(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
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

  const eventHandlers = (0,extractEventHandlers/* default */.A)({
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
  const joinedClasses = (0,clsx/* default */.A)(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
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

/***/ 36379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Switch_Switch)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(33139);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(78660);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(39770);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js + 1 modules
var useControlled = __webpack_require__(41381);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(79716);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 9 modules
var ButtonBase = __webpack_require__(57445);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.A)('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
/* harmony default export */ const internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/internal/SwitchBase.js
'use client';














const useUtilityClasses = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${(0,capitalize/* default */.A)(edge)}`],
    input: ['input']
  };
  return (0,composeClasses/* default */.A)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A)({
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
const SwitchBaseInput = (0,styled/* default */.Ay)('input', {
  shouldForwardProp: rootShouldForwardProp/* default */.A
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
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [checked, setCheckedState] = (0,useControlled/* default */.A)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = (0,useFormControl/* default */.A)();
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
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: inputProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
    ref,
    elementType: SwitchBaseRoot,
    className: classes.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      component: 'span',
      ...other
    },
    getSlotProps: handlers => ({
      ...handlers,
      onFocus: event => {
        handlers.onFocus?.(event);
        handleFocus(event);
      },
      onBlur: event => {
        handlers.onBlur?.(event);
        handleBlur(event);
      }
    }),
    ownerState,
    additionalProps: {
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      role: undefined,
      tabIndex: null
    }
  });
  const [InputSlot, inputSlotProps] = (0,useSlot/* default */.A)('input', {
    ref: inputRef,
    elementType: SwitchBaseInput,
    className: classes.input,
    externalForwardedProps,
    getSlotProps: handlers => ({
      onChange: event => {
        handlers.onChange?.(event);
        handleInputChange(event);
      }
    }),
    ownerState,
    additionalProps: {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      disabled,
      id: hasLabelFor ? id : undefined,
      name,
      readOnly,
      required,
      tabIndex,
      type,
      ...(type === 'checkbox' && value === undefined ? {} : {
        value
      })
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputSlot, {
      ...inputSlotProps
    }), checked ? checkedIcon : icon]
  });
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ const internal_SwitchBase = (SwitchBase);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(29077);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
;// ./node_modules/@mui/material/Switch/switchClasses.js


function getSwitchUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiSwitch', slot);
}
const switchClasses = (0,generateUtilityClasses/* default */.A)('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
/* harmony default export */ const Switch_switchClasses = (switchClasses);
;// ./node_modules/@mui/material/Switch/Switch.js
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
    root: ['root', edge && `edge${(0,capitalize/* default */.A)(edge)}`, `size${(0,capitalize/* default */.A)(size)}`],
    switchBase: ['switchBase', `color${(0,capitalize/* default */.A)(color)}`, checked && 'checked', disabled && 'disabled'],
    thumb: ['thumb'],
    track: ['track'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getSwitchUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const SwitchRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiSwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${(0,capitalize/* default */.A)(ownerState.edge)}`], styles[`size${(0,capitalize/* default */.A)(ownerState.size)}`]];
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
const SwitchSwitchBase = (0,styled/* default */.Ay)(internal_SwitchBase, {
  name: 'MuiSwitch',
  slot: 'SwitchBase',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${Switch_switchClasses.input}`]: styles.input
    }, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`]];
  }
})((0,memoTheme/* default */.A)(({
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
})), (0,memoTheme/* default */.A)(({
  theme
}) => ({
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  variants: [...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)(['light'])) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${Switch_switchClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main,
        '&:hover': {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        [`&.${Switch_switchClasses.disabled}`]: {
          color: theme.vars ? theme.vars.palette.Switch[`${color}DisabledColor`] : `${theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.a)(theme.palette[color].main, 0.62) : (0,colorManipulator/* darken */.e$)(theme.palette[color].main, 0.55)}`
        }
      },
      [`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]: {
        backgroundColor: (theme.vars || theme).palette[color].main
      }
    }
  }))]
})));
const SwitchTrack = (0,styled/* default */.Ay)('span', {
  name: 'MuiSwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})((0,memoTheme/* default */.A)(({
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
const SwitchThumb = (0,styled/* default */.Ay)('span', {
  name: 'MuiSwitch',
  slot: 'Thumb',
  overridesResolver: (props, styles) => styles.thumb
})((0,memoTheme/* default */.A)(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%'
})));
const Switch = /*#__PURE__*/react.forwardRef(function Switch(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiSwitch'
  });
  const {
    className,
    color = 'primary',
    edge = false,
    size = 'medium',
    sx,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    edge,
    size
  };
  const classes = Switch_useUtilityClasses(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
    className: (0,clsx/* default */.A)(classes.root, className),
    elementType: SwitchRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      sx
    }
  });
  const [ThumbSlot, thumbSlotProps] = (0,useSlot/* default */.A)('thumb', {
    className: classes.thumb,
    elementType: SwitchThumb,
    externalForwardedProps,
    ownerState
  });
  const icon = /*#__PURE__*/(0,jsx_runtime.jsx)(ThumbSlot, {
    ...thumbSlotProps
  });
  const [TrackSlot, trackSlotProps] = (0,useSlot/* default */.A)('track', {
    className: classes.track,
    elementType: SwitchTrack,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RootSlot, {
    ...rootSlotProps,
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
      },
      slots: {
        ...(slots.switchBase && {
          root: slots.switchBase
        }),
        ...(slots.input && {
          input: slots.input
        })
      },
      slotProps: {
        ...(slotProps.switchBase && {
          root: typeof slotProps.switchBase === 'function' ? slotProps.switchBase(ownerState) : slotProps.switchBase
        }),
        ...(slotProps.input && {
          input: typeof slotProps.input === 'function' ? slotProps.input(ownerState) : slotProps.input
        })
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TrackSlot, {
      ...trackSlotProps
    })]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Switch_Switch = (Switch);

/***/ }),

/***/ 41381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_useControlled)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@mui/utils/esm/useControlled/useControlled.js
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
;// ./node_modules/@mui/material/utils/useControlled.js
'use client';


/* harmony default export */ const utils_useControlled = (useControlled);

/***/ }),

/***/ 56677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ }),

/***/ 70999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ appendOwnerState_appendOwnerState)
});

;// ./node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const isHostComponent_isHostComponent = (isHostComponent);
;// ./node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js


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

/***/ 74959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ })

}]);