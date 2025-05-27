"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4673],{

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

/***/ 24673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExportMnemonicsScreen)
/* harmony export */ });
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77093);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5005);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50378);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52653);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1268);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87164);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93232);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25239);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3507);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96540);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13907);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__]);
_ui_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














// 自定义卡片样式
const StyledCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(_ref => {
  let {
    theme
  } = _ref;
  return {
    borderRadius: '8px',
    background: 'rgba(10,36,99,0.03)',
    // border: '1px solid rgb(236, 236, 236)',
    boxShadow: 'none',
    // '0 2px 4px rgba(0, 0, 0, 0.05)',
    padding: theme.spacing(2)
  };
});

// 自定义按钮样式
const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    borderRadius: '12px',
    textTransform: 'none',
    // fontWeight: 600,
    padding: theme.spacing(1.5, 3),
    backgroundColor: '#2ecc71',
    color: '#0A2463!important',
    '&:hover': {
      backgroundColor: '#27ae60'
    },
    '&:disabled': {
      background: '#eaeaea'
    }
  };
});
function ExportMnemonicsScreen() {
  var _ADDRESS_TYPES$find;
  const {
    keyring
  } = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .useLocationState */ .ac)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__/* .useTranslation */ .B)();
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [mnemonic, setMnemonic] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const [passphrase, setPassphrase] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const btnClick = async () => {
    try {
      const {
        mnemonic: mn,
        hdPath,
        passphrase: pp
      } = await wallet.getMnemonics(password, keyring);
      setMnemonic(mn);
      setPassphrase(pp);
      setStatus('');
      setError('');
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
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setDisabled(true);
    if (password) {
      setDisabled(false);
      setStatus('');
      setError('');
    }
  }, [password]);
  function copy(str) {
    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .copyToClipboard */ .lW)(str);
    tools.toastSuccess(t('Copied'));
  }
  const words = mnemonic.split(' ');
  const pathName = ((_ADDRESS_TYPES$find = _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .ADDRESS_TYPES */ .Ld.find(v => v.hdPath === keyring.hdPath)) === null || _ADDRESS_TYPES$find === void 0 ? void 0 : _ADDRESS_TYPES$find.name) || 'custom';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('Seed Phrase')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      children: mnemonic === '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        sx: {
          padding: 0,
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          style: {
            fontSize: '40px',
            color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors */ .T.red
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          variant: "body1",
          color: "error",
          sx: {
            mt: 1
          },
          children: "Important Security Warnings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledCard, {
          sx: {
            my: 3,
            textAlign: 'left'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "rgba(10,36,99,0.65)",
            sx: {
              mt: 1
            },
            children: "1. Seed phrase alone gives you full access to your wallets and funds."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "rgba(10,36,99,0.65)",
            sx: {
              mt: 1
            },
            children: "2. Never share it with anyone."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "rgba(10,36,99,0.65)",
            sx: {
              mt: 1
            },
            children: "3. Seed phrase is only stored in your browser."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body2",
            color: "rgba(10,36,99,0.65)",
            sx: {
              mt: 1
            },
            children: "4. KasKeeper will never ask for your seed phrase."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
          type: showPassword ? 'text' : 'password',
          value: password,
          onChange: e => setPassword(e.target.value),
          onKeyUp: e => handleOnKeyUp(e),
          autoFocus: true,
          placeholder: t('Enter your password'),
          fullWidth: true,
          InputProps: {
            endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
              position: "end",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
                onClick: () => setShowPassword(!showPassword),
                style: {
                  cursor: 'pointer',
                  color: '#666'
                },
                children: showPassword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {})
              })
            })
          },
          sx: {
            mb: 2
          }
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          variant: "body2",
          color: "error",
          sx: {
            mb: 2
          },
          children: error
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledButton, {
          disabled: disabled,
          onClick: btnClick,
          fullWidth: true,
          size: "large",
          className: "!rounded-lg !h-[50px]",
          sx: {
            mb: 2
          },
          children: t('Show Seed Phrase')
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        sx: {
          padding: 1
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledCard, {
          sx: {
            mb: 3,
            textAlign: 'center',
            backgroundColor: '#fff3f3'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            variant: "body1",
            color: "error",
            sx: {
              mt: 2,
              mb: 2
            },
            children: "This phrase is the ONLY way to recover your wallet. Do NOT share it with anyone! (click to copy)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
            justifyCenter: true,
            onClick: () => copy(mnemonic),
            sx: {
              cursor: 'pointer',
              mb: 2
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
              icon: "copy",
              color: "textDim"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
              variant: "body2",
              color: "textDim",
              sx: {
                ml: 1
              },
              children: "Copy to clipboard"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          container: true,
          spacing: 1,
          justifyContent: "center",
          children: words.map((v, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            item: true,
            style: {
              width: '48%'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledCard, {
              sx: {
                padding: 1,
                textAlign: 'center',
                borderColor: 'rgba(10,36,99,0.15)',
                boxShadow: 'none'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                variant: "body2",
                className: "text-[rgba(0,0,0,0.4)]",
                children: `${index + 1}.`
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                variant: "body1",
                sx: {
                  fontWeight: 500,
                  color: '#222'
                },
                selectText: true,
                className: "!text-[#0A2463]",
                children: v
              })]
            })
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledCard, {
          sx: {
            mt: 3,
            mb: 2
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
              variant: "subtitle2",
              sx: {
                fontWeight: 600,
                mb: 1
              },
              className: "!text-[#0A2463]",
              children: "Advanced Options"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
              variant: "body2",
              onClick: () => copy(keyring.hdPath),
              sx: {
                cursor: 'pointer',
                mb: 1,
                color: 'rgba(10,36,99,0.65)'
              },
              children: ["Derivation Path: ", keyring.hdPath, " (", pathName, ")"]
            }), passphrase && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
              variant: "body2",
              sx: {
                color: 'rgba(10,36,99,0.65)'
              },
              children: ["Passphrase: ", passphrase]
            })]
          })
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 93232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Grid2_Grid2)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
var isMuiElement = __webpack_require__(28473);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/createStyled/createStyled.js
var createStyled = __webpack_require__(28351);
;// ./node_modules/@mui/system/esm/styled/styled.js

const styled = (0,createStyled/* default */.Ay)();
/* harmony default export */ const styled_styled = (styled);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(47379);
;// ./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return (0,resolveProps/* default */.A)(theme.components[name].defaultProps, props);
}
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/useTheme/useTheme.js
var useTheme_useTheme = __webpack_require__(40973);
;// ./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
'use client';



function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = (0,useTheme_useTheme/* default */.A)(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(39599);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(46641);
;// ./node_modules/@mui/system/esm/Grid/traverseBreakpoints.js
const filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter(key => responsiveKeys.includes(key));
const traverseBreakpoints = (breakpoints, responsive, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0]; // the keys is sorted from smallest to largest by `createBreakpoints`.

  if (Array.isArray(responsive)) {
    responsive.forEach((breakpointValue, index) => {
      iterator((responsiveStyles, style) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsiveStyles, style);
          } else {
            responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style;
          }
        }
      }, breakpointValue);
    });
  } else if (responsive && typeof responsive === 'object') {
    // prevent null
    // responsive could be a very big object, pick the smallest responsive values

    const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
    keys.forEach(key => {
      if (breakpoints.keys.includes(key)) {
        // @ts-ignore already checked that responsive is an object
        const breakpointValue = responsive[key];
        if (breakpointValue !== undefined) {
          iterator((responsiveStyles, style) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsiveStyles, style);
            } else {
              responsiveStyles[breakpoints.up(key)] = style;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsive === 'number' || typeof responsive === 'string') {
    iterator((responsiveStyles, style) => {
      Object.assign(responsiveStyles, style);
    }, responsive);
  }
};
;// ./node_modules/@mui/system/esm/Grid/gridGenerator.js

function getSelfSpacingVar(axis) {
  return `--Grid-${axis}Spacing`;
}
function getParentSpacingVar(axis) {
  return `--Grid-parent-${axis}Spacing`;
}
const selfColumnsVar = '--Grid-columns';
const parentColumnsVar = '--Grid-parent-columns';
const generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.size, (appendStyle, value) => {
    let style = {};
    if (value === 'grow') {
      style = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    }
    if (value === 'auto') {
      style = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        flexGrow: 0,
        flexBasis: 'auto',
        width: `calc(100% * ${value} / var(${parentColumnsVar}) - (var(${parentColumnsVar}) - ${value}) * (var(${getParentSpacingVar('column')}) / var(${parentColumnsVar})))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.offset, (appendStyle, value) => {
    let style = {};
    if (value === 'auto') {
      style = {
        marginLeft: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        marginLeft: value === 0 ? '0px' : `calc(100% * ${value} / var(${parentColumnsVar}) + var(${getParentSpacingVar('column')}) * ${value} / var(${parentColumnsVar}))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {
    [selfColumnsVar]: 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    const columns = value ?? 12;
    appendStyle(styles, {
      [selfColumnsVar]: columns,
      '> *': {
        [parentColumnsVar]: columns
      }
    });
  });
  return styles;
};
const generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('row')]: spacing,
      '> *': {
        [getParentSpacingVar('row')]: spacing
      }
    });
  });
  return styles;
};
const generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('column')]: spacing,
      '> *': {
        [getParentSpacingVar('column')]: spacing
      }
    });
  });
  return styles;
};
const generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles, {
      flexDirection: value
    });
  });
  return styles;
};
const generateGridStyles = ({
  ownerState
}) => {
  return {
    minWidth: 0,
    boxSizing: 'border-box',
    ...(ownerState.container && {
      display: 'flex',
      flexWrap: 'wrap',
      ...(ownerState.wrap && ownerState.wrap !== 'wrap' && {
        flexWrap: ownerState.wrap
      }),
      gap: `var(${getSelfSpacingVar('row')}) var(${getSelfSpacingVar('column')})`
    })
  };
};
const generateSizeClassNames = size => {
  const classNames = [];
  Object.entries(size).forEach(([key, value]) => {
    if (value !== false && value !== undefined) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
const generateSpacingClassNames = (spacing, smallestBreakpoint = 'xs') => {
  function isValidSpacing(val) {
    if (val === undefined) {
      return false;
    }
    return typeof val === 'string' && !Number.isNaN(Number(val)) || typeof val === 'number' && val > 0;
  }
  if (isValidSpacing(spacing)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing)}`];
  }
  if (typeof spacing === 'object' && !Array.isArray(spacing)) {
    const classNames = [];
    Object.entries(spacing).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};
const generateDirectionClasses = direction => {
  if (direction === undefined) {
    return [];
  }
  if (typeof direction === 'object') {
    return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
  }
  return [`direction-xs-${String(direction)}`];
};
;// ./node_modules/@mui/system/esm/Grid/deleteLegacyGridProps.js
const getLegacyGridWarning = propName => {
  if (['item', 'zeroMinWidth'].includes(propName)) {
    return `The \`${propName}\` prop has been removed and is no longer necessary. You can safely remove it.`;
  }

  // #host-reference
  return `The \`${propName}\` prop has been removed. See https://v6.mui.com/material-ui/migration/upgrade-to-grid-v2/ for migration instructions.`;
};
const warnedAboutProps = (/* unused pure expression or super */ null && ([]));

/**
 * Deletes the legacy Grid component props from the `props` object and warns once about them if found.
 *
 * @param {object} props The props object to remove the legacy Grid props from.
 * @param {Breakpoints} breakpoints The breakpoints object.
 */
function deleteLegacyGridProps(props, breakpoints) {
  const propsToWarn = [];
  if (props.item !== undefined) {
    delete props.item;
    propsToWarn.push('item');
  }
  if (props.zeroMinWidth !== undefined) {
    delete props.zeroMinWidth;
    propsToWarn.push('zeroMinWidth');
  }
  breakpoints.keys.forEach(breakpoint => {
    if (props[breakpoint] !== undefined) {
      propsToWarn.push(breakpoint);
      delete props[breakpoint];
    }
  });
  if (false) {}
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/system/esm/Grid/createGrid.js














const defaultTheme = (0,createTheme/* default */.A)();

// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = styled_styled('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: 'MuiGrid',
    defaultTheme
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    useTheme = useTheme_useTheme/* default */.A,
    componentName = 'MuiGrid'
  } = options;
  const useUtilityClasses = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing,
      wrap,
      size
    } = ownerState;
    const slots = {
      root: ['root', container && 'container', wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(size), ...(container ? generateSpacingClassNames(spacing, theme.breakpoints.keys[0]) : [])]
    };
    return (0,composeClasses/* default */.A)(slots, slot => (0,generateUtilityClass/* default */.Ay)(componentName, slot), {});
  };
  function parseResponsiveProp(propValue, breakpoints, shouldUseValue = () => true) {
    const parsedProp = {};
    if (propValue === null) {
      return parsedProp;
    }
    if (Array.isArray(propValue)) {
      propValue.forEach((value, index) => {
        if (value !== null && shouldUseValue(value) && breakpoints.keys[index]) {
          parsedProp[breakpoints.keys[index]] = value;
        }
      });
    } else if (typeof propValue === 'object') {
      Object.keys(propValue).forEach(key => {
        const value = propValue[key];
        if (value !== null && value !== undefined && shouldUseValue(value)) {
          parsedProp[key] = value;
        }
      });
    } else {
      parsedProp[breakpoints.keys[0]] = propValue;
    }
    return parsedProp;
  }
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
    const theme = useTheme();
    const themeProps = useThemeProps(inProps);
    const props = (0,extendSxProp/* default */.A)(themeProps); // `color` type conflicts with html color attribute.

    // TODO v8: Remove when removing the legacy Grid component
    deleteLegacyGridProps(props, theme.breakpoints);
    const {
      className,
      children,
      columns: columnsProp = 12,
      container = false,
      component = 'div',
      direction = 'row',
      wrap = 'wrap',
      size: sizeProp = {},
      offset: offsetProp = {},
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      unstable_level: level = 0,
      ...other
    } = props;
    const size = parseResponsiveProp(sizeProp, theme.breakpoints, val => val !== false);
    const offset = parseResponsiveProp(offsetProp, theme.breakpoints);
    const columns = inProps.columns ?? (level ? undefined : columnsProp);
    const spacing = inProps.spacing ?? (level ? undefined : spacingProp);
    const rowSpacing = inProps.rowSpacing ?? inProps.spacing ?? (level ? undefined : rowSpacingProp);
    const columnSpacing = inProps.columnSpacing ?? inProps.spacing ?? (level ? undefined : columnSpacingProp);
    const ownerState = {
      ...props,
      level,
      columns,
      container,
      direction,
      wrap,
      spacing,
      rowSpacing,
      columnSpacing,
      size,
      offset
    };
    const classes = useUtilityClasses(ownerState, theme);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(GridRoot, {
      ref: ref,
      as: component,
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(classes.root, className),
      ...other,
      children: react.Children.map(children, child => {
        if (/*#__PURE__*/react.isValidElement(child) && (0,isMuiElement/* default */.A)(child, ['Grid']) && container && child.props.container) {
          return /*#__PURE__*/react.cloneElement(child, {
            unstable_level: child.props?.unstable_level ?? level + 1
          });
        }
        return child;
      })
    });
  });
   false ? 0 : void 0;

  // @ts-ignore internal logic for nested grid
  Grid.muiName = 'Grid';
  return Grid;
}
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(44675);
;// ./node_modules/@mui/material/Grid2/Grid2.js
'use client';







/**
 *
 * Demos:
 *
 * - [Grid version 2](https://v6.mui.com/material-ui/react-grid2/)
 *
 * API:
 *
 * - [Grid2 API](https://v6.mui.com/material-ui/api/grid-2/)
 */
const Grid2 = createGrid({
  createStyledComponent: (0,styles_styled/* default */.Ay)('div', {
    name: 'MuiGrid2',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.container && styles.container];
    }
  }),
  componentName: 'MuiGrid2',
  useThemeProps: inProps => (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiGrid2'
  }),
  useTheme: useTheme/* default */.A
});
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Grid2_Grid2 = (Grid2);

/***/ })

}]);