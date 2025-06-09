"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5780],{

/***/ 41896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ Divider_Divider)
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(88344);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(5756);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(47080);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Divider/dividerClasses.js


function getDividerUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('MuiDivider', slot);
}
const dividerClasses = (0,generateUtilityClasses/* default */.c)('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
/* harmony default export */ const Divider_dividerClasses = ((/* unused pure expression or super */ null && (dividerClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Divider/Divider.js
'use client';











const useUtilityClasses = ownerState => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  } = ownerState;
  const slots = {
    root: ['root', absolute && 'absolute', variant, light && 'light', orientation === 'vertical' && 'vertical', flexItem && 'flexItem', children && 'withChildren', children && orientation === 'vertical' && 'withChildrenVertical', textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight', textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'],
    wrapper: ['wrapper', orientation === 'vertical' && 'wrapperVertical']
  };
  return (0,composeClasses/* default */.c)(slots, getDividerUtilityClass, classes);
};
const DividerRoot = (0,styled/* default */.cp)('div', {
  name: 'MuiDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === 'vertical' && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft];
  }
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: 'thin',
  variants: [{
    props: {
      absolute: true
    },
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  }, {
    props: {
      light: true
    },
    style: {
      borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : (0,colorManipulator/* alpha */.W4)(theme.palette.divider, 0.08)
    }
  }, {
    props: {
      variant: 'inset'
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: 'middle',
      orientation: 'horizontal'
    },
    style: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  }, {
    props: {
      variant: 'middle',
      orientation: 'vertical'
    },
    style: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }, {
    props: {
      orientation: 'vertical'
    },
    style: {
      height: '100%',
      borderBottomWidth: 0,
      borderRightWidth: 'thin'
    }
  }, {
    props: {
      flexItem: true
    },
    style: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.children,
    style: {
      display: 'flex',
      textAlign: 'center',
      border: 0,
      borderTopStyle: 'solid',
      borderLeftStyle: 'solid',
      '&::before, &::after': {
        content: '""',
        alignSelf: 'center'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.children && ownerState.orientation !== 'vertical',
    style: {
      '&::before, &::after': {
        width: '100%',
        borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderTopStyle: 'inherit'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.orientation === 'vertical' && ownerState.children,
    style: {
      flexDirection: 'column',
      '&::before, &::after': {
        height: '100%',
        borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderLeftStyle: 'inherit'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical',
    style: {
      '&::before': {
        width: '90%'
      },
      '&::after': {
        width: '10%'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical',
    style: {
      '&::before': {
        width: '10%'
      },
      '&::after': {
        width: '90%'
      }
    }
  }]
})));
const DividerWrapper = (0,styled/* default */.cp)('span', {
  name: 'MuiDivider',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.wrapper, ownerState.orientation === 'vertical' && styles.wrapperVertical];
  }
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  display: 'inline-block',
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
  whiteSpace: 'nowrap',
  variants: [{
    props: {
      orientation: 'vertical'
    },
    style: {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    }
  }]
})));
const Divider = /*#__PURE__*/react.forwardRef(function Divider(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.C)({
    props: inProps,
    name: 'MuiDivider'
  });
  const {
    absolute = false,
    children,
    className,
    orientation = 'horizontal',
    component = children || orientation === 'vertical' ? 'div' : 'hr',
    flexItem = false,
    light = false,
    role = component !== 'hr' ? 'separator' : undefined,
    textAlign = 'center',
    variant = 'fullWidth',
    ...other
  } = props;
  const ownerState = {
    ...props,
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DividerRoot, {
    as: component,
    className: (0,clsx/* default */.c)(classes.root, className),
    role: role,
    ref: ref,
    ownerState: ownerState,
    "aria-orientation": role === 'separator' && (component !== 'hr' || orientation === 'vertical') ? orientation : undefined,
    ...other,
    children: children ? /*#__PURE__*/(0,jsx_runtime.jsx)(DividerWrapper, {
      className: classes.wrapper,
      ownerState: ownerState,
      children: children
    }) : null
  });
});

/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */
if (Divider) {
  Divider.muiSkipListHighlight = true;
}
 false ? 0 : void 0;
/* harmony default export */ const Divider_Divider = (Divider);

/***/ }),

/***/ 45780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TxDetailScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17534);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48818);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80864);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33220);
/* harmony import */ var _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47460);
/* harmony import */ var _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41896);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */














function TxDetailScreen() {
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useLocation */ .IT)();
  const {
    txDetail,
    txId
  } = state;
  console.log('txDetail', txDetail);
  const blockstreamUrl = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useBlockstreamUrl */ .Aq)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .wl)();

  // const Transaction = useMemo(() => {
  //   const data = {}
  //   Object.entries(txDetail).map(([key, value]) => {
  //     if(key =='is_accepted'){
  //       data.Sta
  //     }
  //   })
  //   // return data;
  // }, []);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__/* .useTranslation */ .G)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('History')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
      classname: "text-[16px] !px-4 text-[#0A2463] mt-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
        style: {
          gap: 24
        },
        children: Object.entries(txDetail).map(_ref => {
          let [key, value] = _ref;
          if (key == 'transaction_id') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
              justifyBetween: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "Transaction ID",
                classname: "!text-[#0a2563a1]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                justifyBetween: true,
                itemsCenter: true,
                onClick: () => {
                  (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .openUrlLink */ .lc)("".concat(blockstreamUrl, "/").concat(currentLayer === 'L1' ? 'txs' : 'tx', "/").concat(value));
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-select",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                    text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(value)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .GW, {
                  color: "blue",
                  icon: "link",
                  size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_4__/* .fontSizes */ .Q.md
                })]
              })]
            }, key);
          }
          if (key == 'hash') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
              justifyBetween: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "Hash",
                classname: "!text-[#0a2563a1]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(value)
              })]
            }, key);
          }
          if (key == 'is_accepted') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
              justifyBetween: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "Detail",
                classname: "!text-[#0a2563a1]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: value ? 'Accepted' : 'Not Accepted'
              })]
            }, key);
          }
          if (key == 'mass') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
              justifyBetween: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "Mass",
                classname: "!text-[#0a2563a1]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: value
              })]
            }, key);
          }
          if (key == 'block_time') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
              justifyBetween: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "flex items-center gap-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                  classname: "!text-[#0a2563a1]",
                  text: "Time"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: new Date(value).toLocaleString()
              })]
            }, key);
          }
          if (key == 'subnetwork_id') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                justifyBetween: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                  text: "Subnetwork ID",
                  classname: "!text-[#0a2563a1]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                  text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(value)
                })]
              }, key)]
            });
          }
          if (key == 'accepting_block_blue_score') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
              justifyBetween: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "Accepting Block Blue Score",
                classname: "!text-[#0a2563a1]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: value
              })]
            }, key);
          }
          if (key == 'accepting_block_hash') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
              justifyBetween: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "Accepting Block Hash",
                classname: "!text-[#0a2563a1]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(value)
              })]
            }, key);
          }
          // if (key == 'block_hash') {
          //   return <BlockHash key={key} blockhashs={value} />;
          // }

          if (key == 'inputs') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Inputs, {
                inputs: value
              }, key)]
            });
          }
          if (key == 'outputs') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Outputs, {
              outputs: value
            }, key);
          }
          if (key == 'burn') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Burn, {
              outputs: value
            }, key);
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: key,
              classname: "!text-[#0a2563a1]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: value
            })]
          }, key);
        })
      }), ' ']
    })]
  });
}
function BlockHash(_ref2) {
  let {
    blockhashs
  } = _ref2;
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("div", {
      children: "Block Hash"
    }), blockhashs.map((blockhash, index) => /*#__PURE__*/_jsx(Column, {
      children: /*#__PURE__*/_jsxs(Row, {
        justifyBetween: true,
        children: [/*#__PURE__*/_jsx(Text, {
          text: index
        }), /*#__PURE__*/_jsx(Text, {
          text: shortAddress(blockhash)
        })]
      })
    }, index))]
  });
}
function Inputs(_ref3) {
  let {
    inputs
  } = _ref3;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentAccount */ ._A)();
  const senders = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const data = [];
    inputs.forEach(i => {
      const address = i.previous_outpoint_address;
      const amount = i.previous_outpoint_amount ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .sompiToAmount */ .ei)(i.previous_outpoint_amount).replace(/\.0+$/, '') : 0;
      const alianName = currentAccount.address == address ? 'Self' : undefined;
      const previous_outpoint_hash = i.previous_outpoint_hash;
      data.push({
        address,
        amount,
        alianName,
        previous_outpoint_hash
      });
    });
    return data;
  }, []);
  const blockstreamUrl = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useBlockstreamUrl */ .Aq)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .wl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
    itemsCenter: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_7__,
      alt: "",
      width: 18
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "h-5 flex items-center gap-1 text-[16px]",
        children: "Sent"
      }), senders.map((sender, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
        classname: "mt-1 mr-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
          justifyBetween: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
            itemsCenter: true,
            onClick: () => {
              (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .openUrlLink */ .lc)("".concat(blockstreamUrl, "/").concat(currentLayer === 'L1' ? 'addresses' : 'address', "/").concat(sender.previous_outpoint_hash));
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "text-select",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(sender.previous_outpoint_hash),
                classname: "!text-[#0a2563a1]"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .GW, {
              color: "blue",
              icon: "link",
              size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_4__/* .fontSizes */ .Q.md
            })]
          })
        })
      }, index))]
    })]
  });
}
function Outputs(_ref4) {
  let {
    outputs
  } = _ref4;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentAccount */ ._A)();
  const recipients = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const data = [];
    outputs.forEach(i => {
      const address = i.script_public_key_address;
      const amount = i.amount ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .sompiToAmount */ .ei)(i.amount, i.dec).replace(/\.0+$/, '') : 0;
      const alianName = currentAccount.address == address ? 'Self' : undefined;
      data.push({
        address,
        amount,
        alianName,
        tick: i.tick,
        type: i.type,
        isFaild: i.isFaild
      });
    });
    return data;
  }, []);
  const blockstreamUrl = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useBlockstreamUrl */ .Aq)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .wl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
    itemsCenter: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_6__,
      alt: "",
      width: 18
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "h-5 flex items-center gap-1 text-[16px]",
        children: "Received"
      }), recipients.map((sender, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
        classname: "mt-1 mr-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
          justifyBetween: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
            itemsCenter: true,
            onClick: () => {
              (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .openUrlLink */ .lc)("".concat(blockstreamUrl, "/").concat(currentLayer === 'L1' ? 'addresses' : 'address', "/").concat(sender.address));
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "text-select",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(sender.address),
                classname: "!text-[#0a2563a1]"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .GW, {
              color: "blue",
              icon: "link",
              size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_4__/* .fontSizes */ .Q.md
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
            classname: "align-center",
            style: {
              alignItems: 'center'
            },
            children: !sender.isFaild ? sender.amount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: sender.type === 'Receive' ? '-' : '+',
                color: 'green'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "".concat(sender.amount, " ").concat(sender.tick)
              })]
            }) : '' : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: 'Failed',
              color: 'red'
            })
          })]
        })
      }, index))]
    })]
  });
}
function Burn(_ref5) {
  let {
    outputs
  } = _ref5;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentAccount */ ._A)();
  const recipients = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const data = [];
    outputs.forEach(i => {
      const address = i.script_public_key_address;
      const amount = i.amount ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .sompiToAmount */ .ei)(i.amount, i.dec).replace(/\.0+$/, '') : 0;
      const alianName = currentAccount.address == address ? 'Self' : undefined;
      data.push({
        address,
        amount,
        alianName,
        tick: i.tick,
        type: i.type
      });
    });
    return data;
  }, []);
  const blockstreamUrl = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useBlockstreamUrl */ .Aq)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .wl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
    itemsCenter: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_7__,
      alt: "",
      width: 18
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "h-5 flex items-center gap-1 text-[16px]",
        children: "Burned"
      }), recipients.map((sender, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
        classname: "mt-1 mr-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
          justifyBetween: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
            itemsCenter: true,
            onClick: () => {
              (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .openUrlLink */ .lc)("".concat(blockstreamUrl, "/").concat(currentLayer === 'L1' ? 'addresses' : 'address', "/").concat(sender.address));
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "text-select",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(sender.address),
                classname: "!text-[#0a2563a1]"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .GW, {
              color: "blue",
              icon: "link",
              size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_4__/* .fontSizes */ .Q.md
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
            classname: "align-center",
            style: {
              alignItems: 'center'
            },
            children: sender.amount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: '-',
                color: 'green'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: "".concat(sender.amount, " ").concat(sender.tick)
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: 'Failed',
              color: 'red'
            })
          })]
        })
      }, index))]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Receive.57bc0722.svg";

/***/ }),

/***/ 51932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Send.f8d9c1b2.svg";

/***/ })

}]);