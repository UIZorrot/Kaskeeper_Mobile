"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8466],{

/***/ 1268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), 'VisibilityOff'));

/***/ }),

/***/ 25239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InputAdornment_InputAdornment)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(33800);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(79716);
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
;// ./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js


function getInputAdornmentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiInputAdornment', slot);
}
const inputAdornmentClasses = (0,generateUtilityClasses/* default */.A)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
/* harmony default export */ const InputAdornment_inputAdornmentClasses = (inputAdornmentClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/InputAdornment/InputAdornment.js
'use client';

var _span;













const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[`position${(0,capitalize/* default */.A)(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};
const useUtilityClasses = ownerState => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ['root', disablePointerEvents && 'disablePointerEvents', position && `position${(0,capitalize/* default */.A)(position)}`, variant, hiddenLabel && 'hiddenLabel', size && `size${(0,capitalize/* default */.A)(size)}`]
  };
  return (0,composeClasses/* default */.A)(slots, getInputAdornmentUtilityClass, classes);
};
const InputAdornmentRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiInputAdornment',
  slot: 'Root',
  overridesResolver
})((0,memoTheme/* default */.A)(({
  theme
}) => ({
  display: 'flex',
  maxHeight: '2em',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  color: (theme.vars || theme).palette.action.active,
  variants: [{
    props: {
      variant: 'filled'
    },
    style: {
      [`&.${InputAdornment_inputAdornmentClasses.positionStart}&:not(.${InputAdornment_inputAdornmentClasses.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: 'start'
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: 'end'
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: true
    },
    style: {
      pointerEvents: 'none'
    }
  }]
})));
const InputAdornment = /*#__PURE__*/react.forwardRef(function InputAdornment(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiInputAdornment'
  });
  const {
    children,
    className,
    component = 'div',
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp,
    ...other
  } = props;
  const muiFormControl = (0,useFormControl/* default */.A)() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = {
    ...props,
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default */.A.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornmentRoot, {
      as: component,
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(classes.root, className),
      ref: ref,
      ...other,
      children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
        color: "textSecondary",
        children: children
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [position === 'start' ? (/* notranslate needed while Google Translate will not fix zero-width space issue */_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))) : null, children]
      })
    })
  });
});
 false ? 0 : void 0;
/* harmony default export */ const InputAdornment_InputAdornment = (InputAdornment);

/***/ }),

/***/ 50378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_WarningOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/WarningOutlined.js
// This icon file is generated automatically.
var WarningOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" } }] }, "name": "warning", "theme": "outlined" };
/* harmony default export */ const asn_WarningOutlined = (WarningOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/WarningOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var WarningOutlined_WarningOutlined = function WarningOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_WarningOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(WarningOutlined_WarningOutlined);
if (false) {}
/* harmony default export */ const icons_WarningOutlined = (RefIcon);

/***/ }),

/***/ 52653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), 'Visibility'));

/***/ }),

/***/ 98466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExportPrivateKeyScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17508);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5005);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50378);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52653);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1268);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87164);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14073);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25239);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13907);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47767);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__]);
_ui_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














// 自定义卡片样式
const StyledCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_ref => {
  let {
    theme
  } = _ref;
  return {
    borderRadius: '16px',
    background: '#ffffff',
    border: '1px solid rgb(236, 236, 236)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    padding: theme.spacing(2)
  };
});

// 自定义按钮样式
const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .$n)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: 600,
    padding: theme.spacing(1.5, 3),
    backgroundColor: '#2ecc71',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#27ae60'
    },
    '&:disabled': {
      background: '#eaeaea'
    }
  };
});
function ExportPrivateKeyScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .B)();
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useLocation */ .zy)();
  const {
    account
  } = state;
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const [privateKey, setPrivateKey] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    hex: '',
    wif: ''
  });
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__/* .useTools */ .D)();
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 新增：控制密码显示状态

  const btnClick = async () => {
    try {
      const _res = await wallet.getPrivateKey(password, account);
      setPrivateKey(_res);
    } catch (e) {
      setStatus('error');
      setError(e.message);
    }
  };
  const handleOnKeyUp = e => {
    if ('Enter' === e.key) {
      btnClick();
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setDisabled(true);
    if (password) {
      setDisabled(false);
      setStatus('');
      setError('');
    }
  }, [password]);
  function copy(str) {
    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .copyToClipboard */ .lW)(str);
    tools.toastSuccess(t('Copied'));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('Export Private Key')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      children: privateKey.wif === '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        sx: {
          padding: 1
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledCard, {
          sx: {
            mb: 3,
            textAlign: 'center',
            backgroundColor: '#fff3f3'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
            style: {
              fontSize: '40px',
              color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.red
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body1",
            color: "error",
            sx: {
              mt: 1
            },
            children: "Important Security Warnings"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "error",
            sx: {
              mt: 1
            },
            children: "1. Private key alone gives you full access to your account and funds."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "error",
            sx: {
              mt: 1
            },
            children: "2. Never share it with anyone."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "error",
            sx: {
              mt: 1
            },
            children: "3. Private key is only stored in your browser."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "error",
            sx: {
              mt: 1
            },
            children: "4. KasKeeper will never ask for your private key."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          variant: "body1",
          color: "text.primary",
          sx: {
            textAlign: 'center',
            mb: 3
          },
          children: "Please read the tips above carefully"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
          type: showPassword ? 'text' : 'password',
          value: password,
          onChange: e => setPassword(e.target.value),
          onKeyUp: e => handleOnKeyUp(e),
          autoFocus: true,
          placeholder: t('Enter your password'),
          fullWidth: true,
          InputProps: {
            endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
              position: "end",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
                onClick: () => setShowPassword(!showPassword),
                style: {
                  cursor: 'pointer',
                  color: '#666'
                },
                children: showPassword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {})
              })
            })
          },
          sx: {
            mb: 2
          }
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          variant: "body2",
          color: "error",
          sx: {
            mb: 2
          },
          children: error
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledButton, {
          disabled: disabled,
          onClick: btnClick,
          fullWidth: true,
          size: "large",
          sx: {
            mb: 2
          },
          children: t('Show Private Key')
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        sx: {
          padding: 3
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledCard, {
          sx: {
            mb: 3,
            textAlign: 'center',
            backgroundColor: '#fff3f3'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body1",
            color: "error",
            sx: {
              mt: 2,
              mb: 2
            },
            children: [t('If you ever change browsers or move computers'), ", ", t('you will need this Private Key to access this account'), ".", ' ', t('Save it somewhere safe and secret'), "."]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          variant: "subtitle2",
          color: "text.primary",
          sx: {
            textAlign: 'center',
            mb: 2
          },
          children: [t('HEX Private Key'), ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledCard, {
          onClick: () => copy(privateKey.hex),
          sx: {
            padding: 2,
            cursor: 'pointer',
            mb: 2
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
              icon: "copy",
              color: "textDim"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
              variant: "body1",
              color: "textDim",
              sx: {
                overflowWrap: 'anywhere',
                ml: 1
              },
              children: privateKey.hex
            })]
          })
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);