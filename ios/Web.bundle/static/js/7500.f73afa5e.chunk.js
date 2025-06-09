"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[7500],{

/***/ 7347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ AddressText)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(48818);
// EXTERNAL MODULE: ./src/ui/state/settings/hooks.ts + 1 modules
var hooks = __webpack_require__(17534);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@11.18.6_i18next@21.10.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(80864);
// EXTERNAL MODULE: ./src/ui/components/ActionComponent/index.tsx + 6 modules
var ActionComponent = __webpack_require__(23848);
// EXTERNAL MODULE: ./src/ui/components/Card/index.tsx
var Card = __webpack_require__(36224);
// EXTERNAL MODULE: ./src/ui/components/Column/index.tsx
var Column = __webpack_require__(67196);
// EXTERNAL MODULE: ./src/ui/components/Icon/index.tsx
var Icon = __webpack_require__(67172);
// EXTERNAL MODULE: ./src/ui/components/Popover/index.tsx
var Popover = __webpack_require__(43336);
// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(13976);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(46476);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/AddressDetailPopover/index.tsx
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */












const AddressDetailPopover = _ref => {
  let {
    address,
    onClose
  } = _ref;
  const {
    t
  } = (0,useTranslation/* useTranslation */.G)();
  const tools = (0,ActionComponent/* useTools */.w)();
  const blockstreamUrl = (0,hooks/* useBlockstreamUrl */.Aq)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */._, {
    onClose: onClose,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.o, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
        text: (0,utils/* shortAddress */.SO)(address),
        textCenter: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.M, {
        preset: "style2",
        onClick: e => {
          (0,utils/* copyToClipboard */.ye)(address).then(() => {
            tools.toastSuccess(t('Copied'));
          });
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
          itemsCenter: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: address,
            style: {
              overflowWrap: 'anywhere'
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.G, {
            icon: "copy"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
        justifyCenter: true,
        onClick: () => {
          (0,utils/* openUrlLink */.lc)("".concat(blockstreamUrl, "/address/").concat(address));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.G, {
          icon: "eye",
          color: "textDim"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
          preset: "regular-bold",
          text: t('View on Block Explorer'),
          color: "textDim"
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/ui/components/AddressText/index.tsx







const AddressText = props => {
  const [popoverVisible, setPopoverVisible] = (0,react.useState)(false);
  const address = (0,react.useMemo)(() => {
    if (props.address) {
      return props.address;
    }
    if (props.addressInfo) {
      return props.addressInfo.address;
    }
    return '';
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.o, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
      onClick: () => {
        setPopoverVisible(true);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
        text: (0,utils/* shortAddress */.SO)(address),
        color: props.color || 'white'
      })
    }), popoverVisible && /*#__PURE__*/(0,jsx_runtime.jsx)(AddressDetailPopover, {
      address: address,
      onClose: () => {
        setPopoverVisible(false);
      }
    })]
  });
};

/***/ }),

/***/ 64540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Empty)
/* harmony export */ });
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51920);
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62520);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80864);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13976);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2488);





function Empty(props) {
  const {
    text,
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .G)();
  const content = text || t('No Data Found');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: className,
    style: {
      alignSelf: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .W, {
      justifyCenter: true,
      style: {
        flex: 1,
        alignItems: 'center',
        height: '30vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c, {
        description: content,
        image: antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c.PRESENTED_IMAGE_SIMPLE
      })
    })
  });
}

/***/ }),

/***/ 32292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ TabBar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(98104);
// EXTERNAL MODULE: ./src/ui/components/Column/index.tsx
var Column = __webpack_require__(67196);
// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(13976);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(46476);
;// CONCATENATED MODULE: ./src/ui/components/TabBar/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/TabBar/index.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */







function TabBar(props) {
  const {
    items,
    defaultActiveKey,
    activeKey,
    onTabClick,
    progressEnabled,
    preset
  } = props;
  const [tabKey, setTabKey] = (0,react.useState)(defaultActiveKey);
  const [progress, setProgress] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    const curIndex = items.findIndex(v => v.key === tabKey);
    setProgress(curIndex);
    onTabClick(tabKey);
  }, [tabKey]);
  (0,react.useEffect)(() => {
    if (activeKey !== tabKey) {
      setTabKey(activeKey);
      const curIndex = items.findIndex(v => v.key === activeKey);
      setProgress(curIndex);
    }
  }, [activeKey]);
  if (preset == 'number-page') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.W, {
      children: items.map((v, index) => {
        const isSelected = v.key === tabKey;
        const reach = isSelected; //index <= (tabKey as number);
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
          style: Object.assign({
            width: 20,
            height: 20
          }, reach ? {
            backgroundColor: colors/* colors */.I.gold
          } : {
            backgroundColor: colors/* colors */.I.bg2
          }),
          justifyCenter: true,
          itemsCenter: true,
          onClick: () => {
            setTabKey(v.key);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: v.label,
            color: 'white'
          })
        }, v.key);
      })
    });
  }
  if (preset == 'style1') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.W, {
      gap: 'lg',
      children: items.map((v, index) => {
        const isSelected = v.key === tabKey;
        if (progressEnabled && index > progress) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
              text: v.label,
              color: 'textDim'
            })
          }, v.key);
        } else {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
            style: {
              padding: '8px'
            },
            classname: isSelected ? 'selected-tab' : '',
            onClick: () => {
              setTabKey(v.key);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
              text: v.label,
              size: 'md',
              preset: isSelected ? 'bold' : 'regular',
              color: isSelected ? 'gold' : 'white'
            })
          }, v.key);
        }
      })
    });
  }

  // tabbar
  if (preset == 'style2') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.W, {
      children: items.map((v, index) => {
        if (v.hidden) return null;
        const isSelected = v.key === tabKey;
        if (progressEnabled && index > progress) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
              text: v.label,
              color: 'textDim'
            })
          }, v.key);
        } else {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
            style: {
              borderWidth: 1,
              borderRadius: 20,
              backgroundColor: '#322D1F'
            },
            color: isSelected ? 'gold' : 'white_muted',
            onClick: () => {
              setTabKey(v.key);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
              text: v.label,
              size: "xs",
              color: isSelected ? 'gold' : 'white_muted',
              mx: "md",
              my: "sm"
            })
          }, v.key);
        }
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.W, {
    children: items.map((v, index) => {
      const isSelected = v.key === tabKey;
      if (progressEnabled && index > progress) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: v.label,
            color: 'textDim'
          })
        }, v.key);
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
          classname: isSelected ? 'selected-tab' : '',
          onClick: () => {
            setTabKey(v.key);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: v.label,
            color: isSelected ? 'gold' : 'white'
          })
        }, v.key);
      }
    })
  });
}

/***/ }),

/***/ 43736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ WarningPopover)
/* harmony export */ });
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98104);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65044);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36224);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67196);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43336);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2488);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









const riskColor = {
  high: 'danger',
  low: 'orange'
};
const WarningPopover = _ref => {
  let {
    risks,
    onClose
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_4__/* .Popover */ ._, {
    onClose: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .o, {
      justifyCenter: true,
      itemsCenter: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .a, {
        text: 'WARNING',
        textCenter: true,
        preset: "title-bold",
        color: "orange"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .o, {
        mt: "lg",
        children: risks.map((risk, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .o, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .W, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .M, {
              preset: "style2",
              bg: risk.color || riskColor[risk.level],
              style: {
                width: 60,
                height: 60
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .a, {
                text: risk.level,
                size: "lg"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .a, {
              text: risk.desc
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .W, {
            style: {
              borderTopWidth: 1,
              borderColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .I.border
            },
            my: "md"
          })]
        }, 'risk_' + index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .W, {
        full: true,
        mt: "lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q, {
          text: "OK",
          full: true,
          preset: "primary",
          onClick: e => {
            if (onClose) {
              onClose();
            }
          }
        })
      })]
    })
  });
};

/***/ }),

/***/ 78256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69508);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36224);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49476);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);







const WebsiteBar = _ref => {
  let {
    session
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .M, {
    preset: "style2",
    selfItemsCenter: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .W, {
      itemsCenter: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .W, {
        src: session.icon,
        size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_0__/* .fontSizes */ .Q.logo
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .a, {
        text: session.origin
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteBar);

/***/ }),

/***/ 80528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Connect)
/* harmony export */ });
/* unused harmony export MyItem */
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6248);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36640);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27923);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(49448);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46524);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(81420);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47012);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81080);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1536);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(91136);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40256);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78256);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4600);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60440);
/* harmony import */ var _ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91588);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(94240);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96651);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__]);
_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










// 引入 Ant Design 组件


// 自定义样式


const paperStyle = {
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  maxWidth: 400,
  margin: 'auto',
  padding: '15px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '36px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
function MyItem(_ref, ref) {
  let {
    account,
    selected,
    onClick
  } = _ref;
  if (!account) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
    onClick: onClick,
    style: {
      margin: '10px auto',
      maxWidth: '100%',
      borderRadius: '8px',
      cursor: 'pointer',
      border: "1px solid ".concat(selected ? '#48e3c5' : '#d9d9d9'),
      backgroundColor: selected ? '#e6f7ff' : '#fff',
      // 修复语法错误
      boxShadow: selected ? '0 2px 8px rgba(72, 227, 197, 0.2)' : 'none',
      padding: '1px'
    }
    // 移除 hoverable，避免干扰
    ,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .c, {
      align: "middle",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
        span: 2,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          checked: selected,
          onClick: e => e.stopPropagation() // 阻止 Checkbox 事件冒泡
          ,
          style: {
            '--ant-check-color': '#48e3c5',
            '--ant-checkbox-size': '16px',
            '--ant-checkbox-border-radius': '50%'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
        span: 20,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Text, {
          strong: true,
          style: {
            fontSize: '14px'
          },
          children: account.alianName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Text, {
          type: "secondary",
          style: {
            display: 'block',
            fontSize: '12px'
          },
          children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_14__/* .shortAddress */ .SO)(account.address)
        })]
      })]
    })
  });
}
function Connect(_ref2) {
  let {
    params: {
      session
    }
  } = _ref2;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_14__/* .useApproval */ .kf)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .useTools */ .w)();
  const handleCancel = () => {
    rejectApproval('User rejected the request.');
  };
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useKeyrings */ .C)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_14__/* .useWallet */ .e6)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useCurrentKeyring */ .Ib)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useCurrentAccount */ ._A)();
  const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const [selectedKeyring, setSelectedKeyring] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .A)();
  const [checkState, setCheckState] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(_shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .Yh.CHECKING);
  const [warning, setWarning] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const handleConnect = async () => {
    if (!selectedAccount || !selectedKeyring) return;
    setLoading(true);
    try {
      // const accountIndex = selectedAccount.index || 0;
      // await wallet.changeKeyring(selectedKeyring, accountIndex);
      // dispatch(keyringsActions.setCurrent(selectedKeyring));
      // const _currentAccount = await wallet.getCurrentAccount();
      // dispatch(accountActions.setCurrent(_currentAccount));
      resolveApproval();
    } catch (error) {
      console.log('error', error);
      tools.toastError(error.message);
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    wallet.checkWebsite(session.origin).then(v => {
      if (v.isScammer) {
        setCheckState(_shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .Yh.SCAMMER);
      } else {
        setCheckState(_shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .Yh.SAFE);
      }
      if (v.warning) {
        setWarning(v.warning);
      }
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    setSelectedAccount(currentAccount);
    setSelectedKeyring(currentKeyring);
  }, [currentAccount, currentKeyring]);
  if (checkState === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .Yh.CHECKING) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
        style: {
          fontSize: '48px',
          color: '#48e3c5'
        }
      })
    });
  }
  if (checkState === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .Yh.SCAMMER) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      style: paperStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '10px',
          fontSize: '18px'
        },
        children: "Phishing Detection"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Paragraph, {
        style: {
          textAlign: 'center',
          fontSize: '14px'
        },
        children: "Malicious behavior and suspicious activity have been detected."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Paragraph, {
        style: {
          textAlign: 'center',
          fontSize: '14px'
        },
        children: "Your access to this page has been restricted by KasKeeper as it might be unsafe."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .c, {
        gutter: 8,
        style: {
          marginTop: '10px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: handleCancel,
            children: "Reject (blocked by KasKeeper)"
          })
        })
      })]
    });
  }
  if (warning) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      style: paperStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '10px',
          fontSize: '18px'
        },
        children: "Warning"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Paragraph, {
        style: {
          textAlign: 'center',
          fontSize: '14px'
        },
        children: warning
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .c, {
        gutter: 8,
        style: {
          marginTop: '10px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: () => setWarning(''),
            children: "I am aware of the risks"
          })
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
      session: session
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Title, {
      level: 4,
      style: {
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '18px'
      },
      children: "Connect with KasKeeper"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Paragraph, {
      style: {
        textAlign: 'center',
        color: '#666',
        fontSize: '14px',
        marginBottom: '5px'
      },
      children: "Select the account to use on this site"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Paragraph, {
      style: {
        textAlign: 'center',
        color: '#666',
        fontSize: '12px',
        marginBottom: '10px'
      },
      children: "Only connect with sites you trust."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      style: {
        height: 'calc(100% - 200px)',
        overflowY: 'auto'
      },
      children: keyrings.map(keyring => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        style: {
          marginTop: '10px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c.Text, {
          strong: true,
          style: {
            fontSize: '14px'
          },
          children: keyring.alianName
        }), keyring.accounts.map(account => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(MyItem, {
          account: account,
          selected: (selectedKeyring === null || selectedKeyring === void 0 ? void 0 : selectedKeyring.key) === keyring.key && (selectedAccount === null || selectedAccount === void 0 ? void 0 : selectedAccount.address) === account.address,
          onClick: async () => {
            console.log('click', currentKeyring.key, keyring.key);
            setSelectedAccount(account);
            setSelectedKeyring(keyring);
            const accountIndex = account.index || 0;
            await wallet.changeKeyring(keyring, accountIndex);
            console.log('changeKeyring');
            dispatch(_ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_13__/* .keyringsActions */ .IH.setCurrent(keyring));
            const _currentAccount = await wallet.getCurrentAccount();
            console.log('_currentAccount');
            dispatch(_ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_10__/* .accountActions */ .M7.setCurrent(_currentAccount));
          }
        }, account.key))]
      }, keyring.key))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .c, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Cancel"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
          loading: loading,
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConnect,
          children: "Connect"
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ MultiSignPsbt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_AddressText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7347);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64540);
/* harmony import */ var _ui_components_TabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32292);
/* harmony import */ var _ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43736);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78256);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24468);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98104);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94240);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80864);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
















var TabState = /*#__PURE__*/function (TabState) {
  TabState[TabState["DETAILS"] = 0] = "DETAILS";
  TabState[TabState["DATA"] = 1] = "DATA";
  TabState[TabState["HEX"] = 2] = "HEX";
  return TabState;
}(TabState || {});
function SignTxDetails(_ref) {
  let {
    decodedPsbt
  } = _ref;
  console.log('decodedPsbt', decodedPsbt);
  alert(JSON.stringify(decodedPsbt));
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountAddress */ .mA)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__/* .useTranslation */ .G)();
  const spendSompi = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const inValue = decodedPsbt.inputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    const outValue = decodedPsbt.outputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    const spend = inValue - outValue;
    return spend;
  }, [decodedPsbt]);
  const spendAmount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ .ei)(spendSompi), [spendSompi]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
    gap: "lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
      text: t('Sign Transaction'),
      preset: "title-bold",
      textCenter: true,
      mt: "lg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
      justifyCenter: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .M1, {
        style: {
          backgroundColor: '#272626',
          maxWidth: 320,
          width: 320
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
          gap: "lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                text: t('Spend Amount'),
                textCenter: true,
                color: "textDim"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
                justifyCenter: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                  text: spendAmount,
                  color: "white",
                  preset: "bold",
                  textCenter: true,
                  size: "xxl"
                })
              })]
            })
          })
        })
      })
    })]
  });
}
function Section(_ref2) {
  let {
    title,
    children
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
      text: title,
      preset: "bold"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .M1, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
        full: true,
        justifyBetween: true,
        itemsCenter: true,
        children: children
      })
    })]
  });
}
const initTxInfo = {
  psbtHexs: [],
  txError: '',
  decodedPsbts: [],
  toSignInputsArray: [],
  currentIndex: 0,
  isScammer: false
};
function MultiSignPsbt(_ref3) {
  let {
    params: {
      data: {
        psbtHexs,
        options
      },
      session
    },
    header,
    handleCancel,
    handleConfirm
  } = _ref3;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .useApproval */ .kf)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__/* .useTranslation */ .G)();
  const [txInfo, setTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initTxInfo);
  const [tabState, setTabState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TabState.DATA);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .useWallet */ .e6)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .w)();
  const [isWarningVisible, setIsWarningVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const init = async () => {
    let txError = '';
    const {
      isScammer
    } = await wallet.checkWebsite((session === null || session === void 0 ? void 0 : session.origin) || '');
    const decodedPsbts = [];
    for (let i = 0; i < psbtHexs.length; i++) {
      const psbtHex = psbtHexs[i];
      const decodedPsbt = await wallet.decodePsbt(psbtHex);
      decodedPsbts.push(decodedPsbt);
      if (decodedPsbt.risks.length > 0) {
        setIsWarningVisible(true);
      }
    }
    const toSignInputsArray = [];
    try {
      for (let i = 0; i < psbtHexs.length; i++) {
        const toSignInputs = await wallet.formatOptionsToSignInputs(psbtHexs[i], options[i]);
        toSignInputsArray.push(toSignInputs);
      }
    } catch (e) {
      txError = e.message;
      tools.toastError(txError);
    }
    setTxInfo({
      decodedPsbts,
      psbtHexs,
      toSignInputsArray,
      txError,
      currentIndex: 0,
      isScammer
    });
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    init();
  }, []);
  const updateTxInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(params => {
    setTxInfo(Object.assign({}, txInfo, params));
  }, [txInfo, setTxInfo]);
  if (!handleCancel) {
    handleCancel = () => {
      if (txInfo.currentIndex > 0) {
        updateTxInfo({
          currentIndex: txInfo.currentIndex - 1
        });
        return;
      }
      rejectApproval();
    };
  }
  if (!handleConfirm) {
    handleConfirm = () => {
      if (txInfo.currentIndex < txInfo.psbtHexs.length - 1) {
        updateTxInfo({
          currentIndex: txInfo.currentIndex + 1
        });
        return;
      }
      resolveApproval({
        psbtHexs: txInfo.psbtHexs
      });
    };
  }
  const decodedPsbt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => txInfo.decodedPsbts[txInfo.currentIndex], [txInfo]);
  const psbtHex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => txInfo.psbtHexs[txInfo.currentIndex], [txInfo]);
  const toSignInputs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => txInfo.toSignInputsArray[txInfo.currentIndex], [txInfo]);
  const networkFee = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => decodedPsbt ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ .ei)(decodedPsbt.fee) : 0, [decodedPsbt]);
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentAccount */ ._A)();
  const detailsComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (decodedPsbt) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SignTxDetails, {
        decodedPsbt: decodedPsbt
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_4__/* .Empty */ .c, {});
    }
  }, [decodedPsbt]);
  const isValidData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (psbtHex === '') {
      return false;
    }
    return true;
  }, [psbtHex]);
  const isValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (decodedPsbt && decodedPsbt.inputInfos.length == 0) {
      return false;
    }
    if (!toSignInputs || toSignInputs.length == 0) {
      return false;
    }
    return true;
  }, [decodedPsbt, toSignInputs]);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
        itemsCenter: true,
        justifyCenter: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .GW, {
          size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_10__/* .fontSizes */ .Q.xxxl,
          color: "gold",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {})
        })
      })
    });
  }
  if (!decodedPsbt) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_4__/* .Empty */ .c, {});
  }
  if (!header && session) {
    header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        session: session
      })
    });
  }
  if (txInfo.isScammer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
            text: "Phishing Detection",
            preset: "title-bold",
            textCenter: true,
            mt: "xxl"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
            text: "Malicious behavior and suspicious activity have been detected.",
            mt: "md"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
            text: "Your access to this page has been restricted by KasKeeper as it might be unsafe.",
            mt: "md"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .Go, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
          full: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q, {
            text: "Reject (blocked by KasKeeper)",
            preset: "danger",
            onClick: handleCancel,
            full: true
          })
        })
      })]
    });
  }
  const count = txInfo.psbtHexs.length;
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      label: "".concat(i + 1),
      key: i
    });
  }
  const tabItems = arr;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
    children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
        children: [detailsComponent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
          mt: "lg",
          mb: "lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_TabBar__WEBPACK_IMPORTED_MODULE_5__/* .TabBar */ .y, {
            defaultActiveKey: TabState.DATA,
            activeKey: TabState.DATA,
            items: [
            // { label: 'DETAILS', key: TabState.DETAILS },
            {
              label: 'DATA',
              key: TabState.DATA
            }, {
              label: 'HEX',
              key: TabState.HEX
            }],
            onTabClick: key => {
              setTabState(key);
            }
          })
        }), tabState === TabState.DATA && isValidData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
          gap: "xl",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: "INPUTS:",
              preset: "bold"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .M1, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
                full: true,
                justifyCenter: true,
                children: decodedPsbt.inputInfos.map((v, index) => {
                  const isToSign = toSignInputs && toSignInputs.find(v => v.index === index) ? true : false;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                    style: index === 0 ? {} : {
                      borderColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .I.border,
                      borderTopWidth: 1,
                      paddingTop: 10
                    },
                    justifyBetween: true,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_AddressText__WEBPACK_IMPORTED_MODULE_3__/* .AddressText */ ._, {
                          address: v.address,
                          color: isToSign ? 'white' : 'textDim'
                        }), isToSign && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                          style: {
                            borderWidth: 1,
                            borderColor: 'gold',
                            borderRadius: 5,
                            padding: 2
                          },
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                            text: "to sign",
                            color: "gold",
                            size: "xs"
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                        text: "".concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ .ei)(v.value)),
                        color: isToSign ? 'white' : 'textDim'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                        text: "KAS",
                        color: "textDim"
                      })]
                    })]
                  }, 'output_' + index);
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: "OUTPUTS:",
              preset: "bold"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .M1, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
                full: true,
                justifyCenter: true,
                gap: "lg",
                children: decodedPsbt.outputInfos.map((v, index) => {
                  const isMyAddress = v.address == currentAccount.address;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
                    style: index === 0 ? {} : {
                      borderColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .I.border,
                      borderTopWidth: 1,
                      paddingTop: 10
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                        justifyBetween: true,
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_AddressText__WEBPACK_IMPORTED_MODULE_3__/* .AddressText */ ._, {
                          address: v.address,
                          color: isMyAddress ? 'white' : 'textDim'
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                            text: "".concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ .ei)(v.value)),
                            color: isMyAddress ? 'white' : 'textDim'
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
                            text: "KAS",
                            color: "textDim"
                          })]
                        })]
                      })
                    })
                  }, 'output_' + index);
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Section, {
            title: "NETWORK FEE:",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: networkFee
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: "KAS",
              color: "textDim"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Section, {
            title: "NETWORK FEE RATE:",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: decodedPsbt.feeRate.toString()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: "sat/vB",
              color: "textDim"
            })]
          })]
        }), tabState === TabState.HEX && isValidData && psbtHex && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
            text: "PSBT HEX DATA: ".concat(psbtHex.length / 2, " BYTES"),
            preset: "bold"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .TextArea */ .IF, {
            text: psbtHex
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
            justifyCenter: true,
            onClick: e => {
              (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .copyToClipboard */ .ye)(psbtHex).then(() => {
                tools.toastSuccess(t('Copied'));
              });
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .GW, {
              icon: "copy",
              color: "textDim"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
              text: "Copy psbt transaction data",
              color: "textDim"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .Go, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
        mt: "lg",
        mb: "lg",
        justifyCenter: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_TabBar__WEBPACK_IMPORTED_MODULE_5__/* .TabBar */ .y, {
          defaultActiveKey: txInfo.currentIndex,
          activeKey: txInfo.currentIndex,
          items: tabItems,
          preset: "number-page",
          onTabClick: key => {
            updateTxInfo({
              currentIndex: key
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .WA, {
        full: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q, {
          preset: "default",
          text: txInfo.currentIndex === 0 ? t('Reject All') : t('Back'),
          onClick: handleCancel,
          full: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q, {
          preset: "primary",
          text: txInfo.currentIndex === txInfo.psbtHexs.length - 1 ? "Sign All (".concat(txInfo.psbtHexs.length, " transactions)") : 'Next',
          onClick: handleConfirm,
          disabled: isValid == false,
          full: true
        })]
      }), isWarningVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_6__/* .WarningPopover */ .E, {
        risks: decodedPsbt.risks,
        onClose: () => {
          setIsWarningVisible(false);
        }
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27923);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49448);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47012);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(81080);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6248);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34344);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67472);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(816);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(36640);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46524);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81420);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57360);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60172);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40256);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78256);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17534);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89600);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96651);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























var TransactionTypeEnum = /*#__PURE__*/function (TransactionTypeEnum) {
  TransactionTypeEnum["Deploy"] = "deploy";
  TransactionTypeEnum["Mint"] = "mint";
  TransactionTypeEnum["Issue"] = "issue";
  TransactionTypeEnum["Chown"] = "chown";
  TransactionTypeEnum["Burn"] = "burn";
  TransactionTypeEnum["BlackList"] = "blacklist";
  return TransactionTypeEnum;
}(TransactionTypeEnum || {}); // 自定义样式
const paperStyle = {
  maxWidth: 400,
  margin: 'auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // 内容分布均匀
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '4px',
  width: '100%',
  backgroundColor: '#fafafa' // 轻微背景色，增加层次感
};
const textAreaStyle = {
  userSelect: 'text',
  maxHeight: '200px',
  // 减少最大高度，优化空间
  overflowY: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: '14px',
  color: '#333'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const SignKRC20Transaction = _ref => {
  let {
    params: {
      data: {
        type,
        playload
      },
      session
    }
  } = _ref;
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useNetworkType */ .qS)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useAccountAddress */ .mA)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useUserPrivateKey */ .yK)();
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_13__/* .useApproval */ .kf)();
  const [paramsError, setParamsError] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)('');
  const [resultError, setResultError] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)('');
  const [initLoading, setInitLoading] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_9__/* .useTools */ .w)();
  const [tickerInfo, setTickerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null);

  // mint
  const [progressText, setProgressText] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)('');
  const [isMinting, setIsMinting] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [completedMints, setCompletedMints] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(0);
  const handleCancel = () => {
    rejectApproval();
  };
  const handleDeploy = async networkName => {
    var _result, _result2;
    const {
      ticker,
      priorityFeeValue,
      max,
      lim,
      dec,
      mode
    } = playload;
    let result;
    if (mode === 'issue') {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_deploy_issue */ ._g)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, priorityFeeValue, max, lim, dec, 0);
    } else {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_deploy */ .ov)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, priorityFeeValue, max, lim, dec, 0);
    }
    if (!((_result = result) !== null && _result !== void 0 && _result.status)) return setResultError('deploy error');
    console.log('handleDeploy', result);
    resolveApproval({
      transactionHash: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.hash
    });
  };
  const handleMintBack = async (networkName, ticker, fee) => {
    setProgressText("Refund Token ..");
    try {
      const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_mint_back */ .Wy)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, fee);
      if (!result.status) {
        setResultError('An error occurred during refund process.');
        // tools.toastError('An error occurred during refund process.');
      } else {
        setResultError('');
      }
      setProgressText("");
      // tools.toastSuccess('Successfully Receive Fund.');
    } catch (error) {
      setProgressText("An error occurred during minting.");
      setResultError('An error occurred during minting.');
      // tools.toastError('An error occurred during minting.');
    }
  };
  const handleMint = async networkName => {
    const {
      ticker,
      mintCount,
      priorityFeeValue
    } = playload;
    setProgressText('Minting in progress ..');
    setIsMinting(true);
    let mintsNum = 0;
    setCompletedMints(0); // 重置完成次数
    for (let i = 0; i < mintCount; i++) {
      let retryCount = 0;
      const maxRetries = 5;
      let result;

      // 重试循环
      while (retryCount < maxRetries) {
        result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_mint_once */ .yo)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, priorityFeeValue, mintCount - mintsNum);
        if (result.status) {
          // 成功时的处理逻辑
          // dispatch(transactionsActions.updateNativeTxs({
          //   from: address,
          //   info: {
          //     ...fetchedTicker,
          //     type: TXTypes.Mint,
          //     amount: fetchedTicker.lim,
          //     from: address,
          //     to: '',
          //     hash: result?.hash,
          //     time: dayjs().valueOf(),
          //     status: 'success',
          //   }
          // }));
          setCompletedMints(prev => prev + 1);
          mintsNum = mintsNum + 1;
          break; // 成功后跳出重试循环
        } else {
          retryCount++;
          if (retryCount === maxRetries) {
            // 达到最大重试次数后的失败处理
            tools.toastError("".concat(result.msg, " (Failed after ").concat(maxRetries, " retries)"));
            break; // 达到最大重试次数后跳出
          }
          // 可选：添加重试之间的延迟
          await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒延迟
        }
      }
    }
    setProgressText("");
    setIsMinting(false);
    // 如果没有错误并且所有 mint 完成，跳转到成功页面
    if (mintsNum === mintCount) {
      await handleMintBack(networkName, ticker, priorityFeeValue);
      resolveApproval({
        transactionHash: 'mint success'
      });
    } else {
      setResultError('mint fail');
    }
  };
  const handleIssue = async networkName => {
    console.log('handleIssue', privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, playload.priorityFeeValue,
    // 0.02,
    playload.recipient, (playload.issueAmount || 0) * 10 ** ((tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.dec) || 8));
    const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_issue */ ._K)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, playload.priorityFeeValue,
    // 0.02,
    playload.recipient, (playload.issueAmount || 0) * 10 ** ((tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.dec) || 8));
    console.log('handleIssue result', result);
    if (!(result !== null && result !== void 0 && result.status)) return setResultError('issue error');
    resolveApproval({
      transactionHash: result === null || result === void 0 ? void 0 : result.hash
    });
  };
  const handleBurn = async networkName => {
    var _result3, _result4;
    let result;
    if (tickerInfo.mod === 'issue') {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_burn_issue */ .mE)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, playload.priorityFeeValue,
      // 0.02,
      (playload.burnAmount || 0) * 10 ** tickerInfo.dec);
    } else {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_burn */ .aS)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick, playload.priorityFeeValue,
      // 0.02,
      (playload.burnAmount || 0) * 10 ** tickerInfo.dec);
    }
    if (!((_result3 = result) !== null && _result3 !== void 0 && _result3.status)) return setResultError('burn error');
    resolveApproval({
      transactionHash: (_result4 = result) === null || _result4 === void 0 ? void 0 : _result4.hash
    });
  };
  const handleChown = async networkName => {
    var _result5, _result6;
    let result;
    if (tickerInfo.mod === 'issue') {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_chown_issue */ .k1)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, playload.recipient, playload.priorityFeeValue // 0.01,
      );
    } else {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_chown */ .EN)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick, playload.recipient, playload.priorityFeeValue // 0.01,
      );
    }
    console.log('handleIssue result', result);
    if (!((_result5 = result) !== null && _result5 !== void 0 && _result5.status)) return setResultError('chown error');
    resolveApproval({
      transactionHash: (_result6 = result) === null || _result6 === void 0 ? void 0 : _result6.hash
    });
  };
  const handleBlackList = async networkName => {
    const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_7__/* .krc20_blacklist_issue */ .Qj)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, playload.mod, playload.recipient, playload.priorityFeeValue // 0.02
    );
    console.log('handleIssue result', result);
    if (!(result !== null && result !== void 0 && result.status)) return setResultError('blacklist error');
    resolveApproval({
      transactionHash: result === null || result === void 0 ? void 0 : result.hash
    });
  };
  const handleConfirm = async () => {
    const networkName = network === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : network === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : 'devnet';
    setLoading(true);
    setResultError('');
    try {
      switch (type) {
        case TransactionTypeEnum.Deploy:
          await handleDeploy(networkName);
          break;
        case TransactionTypeEnum.Mint:
          await handleMint(networkName);
          break;
        case TransactionTypeEnum.Issue:
          await handleIssue(networkName);
          break;
        case TransactionTypeEnum.Burn:
          await handleBurn(networkName);
          break;
        case TransactionTypeEnum.Chown:
          await handleChown(networkName);
          break;
        case TransactionTypeEnum.BlackList:
          await handleBlackList(networkName);
      }
    } catch (error) {
      setResultError(type + ' error');
      console.log('handleConfirm error', error);
    } finally {
      setLoading(false);
    }
  };

  // const checkTickerValid = async () => {
  //   try {
  //     const result = await get_krc20_issue_info(network, playload.ticker)
  //     console.log('checkTickerValid result', result)
  //     if (type === TransactionTypeEnum.Deploy && result?.state !== "unused") {
  //       setParamsError('Ticker already exists')
  //     }
  //     if (type === TransactionTypeEnum.Mint && result?.state !== "deployed") {
  //       setParamsError('Ticker not deployed')
  //     }
  //   } catch (error) {
  //     console.error('Error fetching ticker:', error);
  //   } finally {
  //     setInitLoading(false);
  //   }
  // }

  const checkParams = async () => {
    setInitLoading(true);
    try {
      const {
        ticker,
        priorityFeeValue,
        max,
        lim,
        dec,
        mintCount,
        issueAmount,
        recipient,
        burnAmount,
        mod
      } = playload;
      if (!ticker) return setParamsError("ticker is required");
      if (!priorityFeeValue) return setParamsError("priorityFeeValue is invalid");
      const balanceRes = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_6__/* .getBalanceByAddress */ .W8)(network, address);
      const accountBalance = ((balanceRes === null || balanceRes === void 0 ? void 0 : balanceRes.data.balance) || 0) / 10 ** 8;
      console.log({
        fee: priorityFeeValue,
        accountBalance
      });
      const tickeResult = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_6__/* .get_krc20_issue_info */ .Oy)(network, ticker);
      setTickerInfo(tickeResult);
      console.log('ticker info', tickeResult);
      const reg = /^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i;
      switch (type) {
        case TransactionTypeEnum.Deploy:
          if (!max || max < 0) return setParamsError("Max supply is invalid");
          if (!lim || lim < 0) return setParamsError("Amount per mint is invalid");
          if (!dec || dec < 0) return setParamsError("Decimals is invalid");
          if ((tickeResult === null || tickeResult === void 0 ? void 0 : tickeResult.state) !== "unused") return setParamsError('Ticker is unused');
          if (priorityFeeValue > Number(accountBalance)) return setParamsError("Insufficient balance for fee.");
          break;
        case TransactionTypeEnum.Mint:
          {
            const totalFee = (mintCount || 0) * ((priorityFeeValue || 0) + 1) + 1;
            if (totalFee > Number(accountBalance)) return setParamsError("Insufficient balance for fee.");
            if (!mintCount || mintCount < 0) return setParamsError("mintCount is invalid");
            if ((tickeResult === null || tickeResult === void 0 ? void 0 : tickeResult.state) !== "deployed") return setParamsError('Ticker not deployed');
            break;
          }
        case TransactionTypeEnum.Issue:
          {
            // 判断地址是否正确
            if (!reg.test(recipient)) return setParamsError("recipient is invalid");
            if (!issueAmount || issueAmount < 0) return setParamsError("issueAmount is invalid");
            if (tickeResult.mod !== 'issue' || tickeResult.to !== address) return setParamsError('Invalid Ticker');
            const maxIssue = (tickeResult.max - tickeResult.minted) / 10 ** tickeResult.dec;
            if (maxIssue < issueAmount) return setParamsError('Issue amount must be less than maxIssue');
            break;
          }
        case TransactionTypeEnum.Burn:
          {
            var _tickeResult$holder, _tickeResult$holder$f;
            if (!burnAmount || burnAmount < 0) return setParamsError("burnAmount is invalid");
            if (tickeResult.to !== address) return setParamsError('Invalid Ticker');
            const hold = (tickeResult === null || tickeResult === void 0 ? void 0 : (_tickeResult$holder = tickeResult.holder) === null || _tickeResult$holder === void 0 ? void 0 : (_tickeResult$holder$f = _tickeResult$holder.find(item => item.address === address)) === null || _tickeResult$holder$f === void 0 ? void 0 : _tickeResult$holder$f.amount) || 0;
            const selfBalance = hold / 10 ** tickeResult.dec;
            if (selfBalance < burnAmount) return setParamsError("Burn amount must be less than balance");
            break;
          }
        case TransactionTypeEnum.Chown:
          if (!reg.test(recipient)) return setParamsError("recipient is invalid");
          if (tickeResult.to !== address) return setParamsError('Invalid Ticker');
          break;
        case TransactionTypeEnum.BlackList:
          if (!reg.test(recipient)) return setParamsError("recipient is invalid");
          if (!['add', 'remove'].includes(mod)) return setParamsError('Invalid Mod');
          if (tickeResult.mod !== 'issue' || tickeResult.to !== address) return setParamsError('Invalid Ticker');
          break;
        default:
          console.log('default');
      }
    } catch (error) {
      setParamsError((error === null || error === void 0 ? void 0 : error.message) || 'transaction error');
      console.error('Error checkParams:', error);
    } finally {
      setInitLoading(false);
    }
  };
  const maxIssue = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(() => {
    if (!tickerInfo) return 0;
    const amount = tickerInfo.max - tickerInfo.minted;
    return amount / 10 ** (tickerInfo.dec || 1);
  }, [tickerInfo]);
  const selfBalance = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(() => {
    var _tickerInfo$holder, _tickerInfo$holder$fi;
    const balance = (tickerInfo === null || tickerInfo === void 0 ? void 0 : (_tickerInfo$holder = tickerInfo.holder) === null || _tickerInfo$holder === void 0 ? void 0 : (_tickerInfo$holder$fi = _tickerInfo$holder.find(item => {
      return item.address === address;
    })) === null || _tickerInfo$holder$fi === void 0 ? void 0 : _tickerInfo$holder$fi.amount) || 0;
    return balance / 10 ** ((tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.dec) || 1);
  }, [tickerInfo]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {
    checkParams();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .c, {
        spinning: initLoading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c.Title, {
          level: 4,
          style: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '20px'
          },
          children: [type, " Krc20", type === TransactionTypeEnum.Deploy && playload.mode === 'issue' ? "(issue)" : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .c, {
          style: cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            style: textAreaStyle,
            children: [type === TransactionTypeEnum.Deploy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
              style: {
                textAlign: 'center',
                margin: '10px 0'
              },
              children: ["Deploy ", playload.max / 10 ** playload.dec, " ", playload.ticker]
            }), type === TransactionTypeEnum.Mint && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center',
                  margin: '10px 0'
                },
                children: ["Mint ", playload.mintCount, " ", playload.ticker]
              }), isMinting && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                  children: [completedMints, " / ", playload.mintCount, " Minted"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
                  variant: "determinate",
                  value: completedMints / playload.mintCount * 100,
                  sx: {
                    marginTop: 2
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                children: progressText
              })]
            }), type === TransactionTypeEnum.Issue && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center',
                  margin: '10px 0'
                },
                children: ["Issue ", playload.issueAmount, " ", tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name, " to ", playload === null || playload === void 0 ? void 0 : playload.recipient]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                  className: "text-sm text-gray-400",
                  children: ["Max Issue: ", maxIssue, " ", (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name) || (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick)]
                })
              })]
            }), type === TransactionTypeEnum.Burn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center',
                  margin: '10px 0'
                },
                children: ["Burn ", playload.burnAmount, " ", (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name) || (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick)]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                  className: "text-sm text-gray-400",
                  children: ["Balance: ", selfBalance, " ", (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name) || (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick)]
                })
              })]
            }), type === TransactionTypeEnum.Chown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center',
                  margin: '10px 0'
                },
                children: ["Chown ", (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name) || (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick), " to ", playload === null || playload === void 0 ? void 0 : playload.recipient]
              })
            }), type === TransactionTypeEnum.BlackList && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center'
                },
                children: [tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name, " BalckList ", playload === null || playload === void 0 ? void 0 : playload.mod]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
                style: {
                  textAlign: 'center',
                  margin: '10px 0'
                },
                children: playload === null || playload === void 0 ? void 0 : playload.recipient
              })]
            }), (paramsError || resultError) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
              style: {
                textAlign: 'center',
                margin: '10px 0',
                color: '#ff4d4f'
              },
              children: paramsError || resultError
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
        span: paramsError ? 24 : 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Reject"
        })
      }), !paramsError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
          loading: loading,
          disabled: initLoading || loading,
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConfirm,
          children: "Sign"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignKRC20Transaction);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SignPsbt)
/* harmony export */ });
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47012);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(81080);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(6248);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27923);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(49448);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(816);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36640);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46524);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(81420);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60172);
/* harmony import */ var _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34780);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40256);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_AddressText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7347);
/* harmony import */ var _ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43736);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78256);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17534);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37660);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(96900);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95215);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(94240);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5320);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11960);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(96651);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_15__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */















// 引入 Ant Design 组件




// 自定义样式


const paperStyle = {
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  maxWidth: 400,
  margin: 'auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '4px',
  width: '100%',
  backgroundColor: '#fafafa'
};
const initTxInfo = {
  changedBalance: 0,
  rawtx: '',
  psbtHex: '',
  toSignInputs: [],
  txError: '',
  isScammer: false,
  decodedPsbt: {
    inputInfos: [],
    outputInfos: [],
    fee: 0,
    feeRate: 0,
    risks: [],
    features: {
      rbf: false
    }
  }
};
function SignTxDetails(_ref) {
  let {
    txInfo,
    type,
    rawTxInfo,
    sompi,
    isOk,
    payload
  } = _ref;
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAccountAddress */ .mA)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_8__/* .useTools */ .w)();
  const isCurrentToPayFee = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SIGN_TX) {
      return false;
    } else {
      return true;
    }
  }, [type]);
  const spendSompi = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    if (payload) {
      return sompi || 0;
    }
    if (txInfo.decodedPsbt.outputInfos.length > 0) {
      const amountSompi = txInfo.decodedPsbt.outputInfos[0].value;
      return amountSompi;
    } else {
      return 0;
    }
  }, [txInfo.decodedPsbt]);
  const sendingSompi = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    const inValue = txInfo.decodedPsbt.inputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    return inValue;
  }, [txInfo.decodedPsbt]);
  const receivingSompi = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    const outValue = txInfo.decodedPsbt.outputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    return outValue;
  }, [txInfo.decodedPsbt]);
  const spendAmount = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .sompiToAmount */ .ei)(spendSompi), [spendSompi]);
  const balanceChangedAmount = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .sompiToAmount */ .ei)(receivingSompi - sendingSompi), [sendingSompi, receivingSompi]);
  const feeAmount = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .sompiToAmount */ .ei)(txInfo.decodedPsbt.fee), [txInfo.decodedPsbt]);
  const priorityFeeAmount = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    const priorityFee = Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .sompiToAmount */ .ei)(txInfo.decodedPsbt.feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .amountToSompi */ .s1)(feeAmount))));
    return priorityFee;
  }, [txInfo.decodedPsbt]);
  if (type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SIGN_TX) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          fontSize: '20px'
        },
        children: (0,i18next__WEBPACK_IMPORTED_MODULE_20__.t)('Sign Transaction')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
        style: {
          ...cardStyle,
          maxWidth: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
          style: {
            textAlign: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              fontSize: '24px',
              fontWeight: 'bold',
              color: receivingSompi > sendingSompi ? '#48e3c5' : '#333'
            },
            children: (receivingSompi > sendingSompi ? '+' : '') + balanceChangedAmount
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              marginLeft: '8px',
              color: '#666',
              fontSize: '14px'
            },
            children: "KAS"
          })]
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
    style: {
      marginTop: '20px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Title, {
      level: 4,
      style: {
        textAlign: 'center',
        fontSize: '20px'
      },
      children: (0,i18next__WEBPACK_IMPORTED_MODULE_20__.t)('Sign Transaction')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
      style: {
        ...cardStyle,
        maxWidth: '100%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        style: {
          textAlign: 'center'
        },
        children: [rawTxInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
          style: {
            marginBottom: '10px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              color: '#666',
              fontSize: '14px'
            },
            children: (0,i18next__WEBPACK_IMPORTED_MODULE_20__.t)('Send to')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
            style: {
              marginTop: '5px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_components_AddressText__WEBPACK_IMPORTED_MODULE_9__/* .AddressText */ ._, {
              addressInfo: rawTxInfo.toAddressInfo
            })
          })]
        }), rawTxInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          style: {
            borderTop: '1px solid #d9d9d9',
            margin: '10px 0'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              color: '#666',
              fontSize: '14px'
            },
            children: (0,i18next__WEBPACK_IMPORTED_MODULE_20__.t)('Spend Amount')
          }), type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA && spendAmount !== '0' && isOk || type !== _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA && isOk ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
            style: {
              marginTop: '5px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
              style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333'
              },
              children: type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KRC20 ? sompi : spendAmount
            }), type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA && isCurrentToPayFee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
              style: {
                display: 'block',
                color: '#666',
                fontSize: '12px',
                marginTop: '5px'
              },
              children: "".concat(payload ? 0.01 : feeAmount, " (").concat((0,i18next__WEBPACK_IMPORTED_MODULE_20__.t)('network fee'), ")")
            }), type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA && isCurrentToPayFee && priorityFeeAmount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
              style: {
                display: 'block',
                color: '#666',
                fontSize: '12px',
                marginTop: '5px'
              },
              children: "".concat(priorityFeeAmount, " (").concat((0,i18next__WEBPACK_IMPORTED_MODULE_20__.t)('priority fee'), ")")
            }), type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KRC20 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
              style: {
                display: 'block',
                color: '#666',
                fontSize: '12px',
                marginTop: '5px'
              },
              children: "0.01 (".concat((0,i18next__WEBPACK_IMPORTED_MODULE_20__.t)('network fee'), ")")
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
            style: {
              marginTop: '5px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
              style: {
                color: '#ff4d4f',
                fontSize: '14px'
              },
              children: "Invalid Input"
            })
          })]
        })]
      })
    })]
  });
}
function Section(_ref2) {
  let {
    title,
    children
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
    style: {
      marginTop: '10px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
      strong: true,
      style: {
        fontSize: '14px'
      },
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
      style: cardStyle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .c, {
        justify: "space-between",
        align: "middle",
        children: children
      })
    })]
  });
}
function SignPsbt(_ref3) {
  let {
    params: {
      data: {
        psbtHex,
        options,
        type,
        toAddress,
        sompi,
        feeRate,
        rawTxInfo,
        krc20Details,
        payload
      },
      session
    },
    header,
    handleCancel,
    handleConfirm
  } = _ref3;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .useApproval */ .kf)();
  const [txInfo, setTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(initTxInfo);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(true);
  const [isWarningVisible, setIsWarningVisible] = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false);
  const [confirmLoading, setConfirmLoading] = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false);
  const prepareSendKAS = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_15__/* .usePrepareSendKASCallback */ .Y5)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .useWallet */ .e6)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_8__/* .useTools */ .w)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAccountAddress */ .mA)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useCurrentAccount */ ._A)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useUserPrivateKey */ .yK)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_14__/* .useNetworkType */ .qS)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAppDispatch */ .A)();
  const pushKaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_15__/* .usePushKaspaTxCallback */ .cl)();
  const [isOk, setIsOk] = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(true);
  const init = async () => {
    console.log('payload', payload);
    let txError = '';
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA && !payload) {
      if (!psbtHex && toAddress && sompi) {
        try {
          console.log('prepareSendKAS', payload, feeRate);
          const rawTxInfo = await prepareSendKAS({
            toAddressInfo: {
              address: toAddress,
              domain: ''
            },
            toAmount: sompi,
            feeRate,
            enableRBF: false
          });
          psbtHex = rawTxInfo.psbtHex;
          console.log('prepareSendKAS', rawTxInfo);
        } catch (error) {
          console.log('prepareSendKAS error', error);
          txError = error.message;
          tools.toastError(txError);
        }
      }
    }
    if (!psbtHex) {
      setLoading(false);
      setTxInfo(Object.assign({}, initTxInfo, {
        txError
      }));
      return;
    }
    const {
      isScammer
    } = await wallet.checkWebsite((session === null || session === void 0 ? void 0 : session.origin) || '');
    const decodedPsbt = await wallet.decodePsbt(psbtHex);
    if (decodedPsbt.risks.length > 0) {
      setIsWarningVisible(true);
    }
    let toSignInputs = [];
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA) {
      toSignInputs = decodedPsbt.inputInfos.map((v, index) => ({
        index,
        publicKey: currentAccount.pubkey
      }));
    } else {
      try {
        toSignInputs = await wallet.formatOptionsToSignInputs(psbtHex, options);
      } catch (error) {
        console.log('error', error);
        txError = error.message;
        tools.toastError(txError);
      }
    }
    setTxInfo({
      decodedPsbt,
      changedBalance: 0,
      psbtHex,
      rawtx: '',
      toSignInputs,
      txError,
      isScammer
    });
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(() => {
    console.log('data', {
      psbtHex,
      options,
      type,
      toAddress,
      sompi,
      feeRate,
      rawTxInfo,
      krc20Details
    }, type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KRC20 && !krc20Details.tick);
    let bool = true;
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KRC20) {
      const isOkKrcBalance = (sompi || 0) * 10 ** krc20Details.dec <= krc20Details.balance;
      if (krc20Details.tick && !isOkKrcBalance) {
        tools.toastError("Insufficient balance. Balance(".concat(krc20Details.balance / 10 ** krc20Details.dec, " ").concat(krc20Details.tick, ") is lower than ").concat(sompi, " ").concat(krc20Details.tick));
      }
      if (!sompi || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .isValidWalletAddress */ .ey)(toAddress || '') || !krc20Details.tick || !isOkKrcBalance) {
        bool = false;
        console.log('error');
      }
    }
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA) {
      if (!sompi || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .isValidWalletAddress */ .ey)(toAddress || '')) {
        bool = false;
        console.log('error');
      }
    }
    setIsOk(bool);
    setLoading(false);
    init();
  }, []);
  if (!handleCancel) {
    handleCancel = () => {
      rejectApproval();
    };
  }
  if (!handleConfirm) {
    handleConfirm = async () => {
      setConfirmLoading(true);
      const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : 'devnet';
      if (krc20Details) {
        try {
          var _result, _result2;
          console.log('krc20_trans', (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .parseUnits */ ._s)((sompi || 0) + '', krc20Details === null || krc20Details === void 0 ? void 0 : krc20Details.dec), feeRate || 0.01);
          let result;
          if (krc20Details.mod === 'issue') {
            result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__/* .krc20_trans_issue */ .QT)(privateKey.hex, networkName, krc20Details.ca, feeRate || 0.01, toAddress, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .parseUnits */ ._s)((sompi || 0) + '', krc20Details === null || krc20Details === void 0 ? void 0 : krc20Details.dec));
          } else {
            result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__/* .krc20_trans */ .G0)(privateKey.hex, networkName, krc20Details.tick, feeRate || 0.01, toAddress, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .parseUnits */ ._s)((sompi || 0) + '', krc20Details === null || krc20Details === void 0 ? void 0 : krc20Details.dec));
          }
          console.log('result.hash', result.hash);
          dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_16__/* .transactionsActions */ .C4.updateNativeTxs({
            from: address,
            info: {
              ...krc20Details,
              type: _ui_types__WEBPACK_IMPORTED_MODULE_17__/* .TXTypes */ .S.TransferKrc20,
              amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .parseUnits */ ._s)(sompi || 0, krc20Details.dec),
              from: address,
              to: toAddress,
              hash: (_result = result) === null || _result === void 0 ? void 0 : _result.hash,
              time: dayjs__WEBPACK_IMPORTED_MODULE_19___default()().valueOf(),
              status: (_result2 = result) !== null && _result2 !== void 0 && _result2.status ? 'success' : 'Failed'
            }
          }));
          return resolveApproval({
            psbtHex: result.hash,
            isKrc20: true
          });
        } catch (error) {
          console.log('error', error);
        } finally {
          setConfirmLoading(false);
        }
      } else {
        try {
          if (payload) {
            // return console.log('send_kaspa_with_dapp_payload', feeRate, (feeRate || 0) / 10 ** 8, payload)
            const res = await (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__/* .send_kaspa_with_dapp_payload */ .gB)(networkName, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .parseTokenBalance */ .hH)(sompi || 0, 8), privateKey.hex, toAddress, (feeRate || 10000) / 10 ** 8, payload);
            resolveApproval({
              txid: res.hash
            });
            setConfirmLoading(false);
          } else {
            console.log('txInfo.psbtHex', txInfo.psbtHex);
            pushKaspaTx(txInfo.psbtHex).then(_ref4 => {
              let {
                success,
                txid,
                error
              } = _ref4;
              console.log('pushKaspaTx', success, txid, error);
              dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_16__/* .transactionsActions */ .C4.updateNativeTxs({
                from: address,
                info: {
                  tick: 'KAS',
                  dec: 8,
                  type: _ui_types__WEBPACK_IMPORTED_MODULE_17__/* .TXTypes */ .S.TransferNative,
                  amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .parseUnits */ ._s)(sompi || 0, 8),
                  from: address,
                  to: toAddress,
                  hash: txid,
                  time: dayjs__WEBPACK_IMPORTED_MODULE_19___default()().valueOf(),
                  status: success ? 'success' : 'Failed'
                }
              }));
              resolveApproval({
                txid: txid
              });
              setConfirmLoading(false);
            });
          }
        } catch (error) {
          console.log('error', error);
        }
      }
    };
  }
  const networkFee = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_18__/* .sompiToAmount */ .ei)(txInfo.decodedPsbt.fee), [txInfo.decodedPsbt]);
  const detailsComponent = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(SignTxDetails, {
      txInfo: txInfo,
      rawTxInfo: rawTxInfo,
      type: type,
      sompi: sompi,
      isOk: isOk,
      payload: payload
    });
  }, [txInfo]);
  const isValid = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    return true;
  }, [txInfo.decodedPsbt, txInfo.toSignInputs]);
  const canChanged = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    let val = true;
    txInfo.decodedPsbt.inputInfos.forEach(v => {
      if (v.address == address && (!v.sighashType || v.sighashType === 1)) {
        val = false;
      }
    });
    return val;
  }, [txInfo.decodedPsbt]);
  const hasHighRisk = (0,react__WEBPACK_IMPORTED_MODULE_21__.useMemo)(() => {
    if (txInfo && txInfo.decodedPsbt) {
      return txInfo.decodedPsbt.risks.find(v => v.level === 'high') ? true : false;
    } else {
      return false;
    }
  }, [txInfo]);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .c, {
        style: {
          fontSize: '48px',
          color: '#48e3c5'
        }
      })
    });
  }
  if (!header && session) {
    header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
      session: session
    });
  }
  if (txInfo.isScammer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
      style: paperStyle,
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Title, {
          level: 4,
          style: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '20px'
          },
          children: "Phishing Detection"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px',
            marginTop: '10px'
          },
          children: "Malicious behavior and suspicious activity have been detected."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          },
          children: "Your access to this page has been restricted by KasKeeper as it might be unsafe."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .c, {
        gutter: 8,
        style: {
          marginTop: '20px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .c, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_28__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: handleCancel,
            children: "Reject (blocked by KasKeeper)"
          })
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        style: {
          marginTop: '20px'
        },
        children: [detailsComponent, canChanged == false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(Section, {
          title: "Network Fee:",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              fontSize: '14px'
            },
            children: networkFee
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              fontSize: '14px',
              color: '#666'
            },
            children: "KAS"
          })]
        }), canChanged == false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(Section, {
          title: "Network Fee Rate:",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              fontSize: '14px'
            },
            children: txInfo.decodedPsbt.feeRate.toString()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c.Text, {
            style: {
              fontSize: '14px',
              color: '#666'
            },
            children: "sat/vB"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .c, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .c, {
        span: txInfo.decodedPsbt && !!txInfo.decodedPsbt.outputInfos.length && hasHighRisk == false || isOk ? 12 : 24,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_28__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Reject"
        })
      }), (type == _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SEND_KASPA && txInfo.decodedPsbt && !!txInfo.decodedPsbt.outputInfos.length && hasHighRisk == false || isOk) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_28__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          loading: confirmLoading,
          onClick: () => {
            // setLoading(true);
            handleConfirm();
          },
          disabled: isValid == false,
          children: type == _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .TxType */ .qA.SIGN_TX ? 'Sign' : 'Sign & Pay'
        })
      })]
    }), isWarningVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_10__/* .WarningPopover */ .E, {
      risks: txInfo.decodedPsbt.risks,
      onClose: () => {
        setIsWarningVisible(false);
      }
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SignPsbtL2)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27923);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49448);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47012);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(81080);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6248);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46524);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81420);
/* harmony import */ var _background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34780);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40256);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78256);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17534);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94240);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11960);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96651);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46956);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15164);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57360);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59564);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */








// 引入 Ant Design 组件









// 自定义样式


const paperStyle = {
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  maxWidth: 400,
  margin: 'auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '4px',
  width: '100%',
  backgroundColor: '#fafafa'
};
const initTxInfo = {
  balance: 0,
  txError: ''
};
function SignPsbtL2(_ref) {
  let {
    params: {
      data: {
        toAddress,
        sompi,
        feeRate,
        type,
        unsignedTx,
        tokenContractAddress
      },
      session
    },
    header,
    handleCancel,
    handleConfirm
  } = _ref;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .useApproval */ .kf)();
  const [txInfo, setTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(initTxInfo);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true);
  const [confirmLoading, setConfirmLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .useWallet */ .e6)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_6__/* .useTools */ .w)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountAddress */ .mA)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentAccount */ ._A)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useUserPrivateKey */ .yK)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useNetworkType */ .qS)();
  const [isOk, setIsOk] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const [fee, setFee] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(feeRate);
  const accuracy = 10 ** 18;
  const isScammerFlag = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(false);
  const getFee = async () => {
    const {
      balance
    } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountEthBalance */ .YB)(currentAccount.addressL2, networkType);
    const gasPrice = await getGasPrice(Number(balance));
    setFee(gasPrice + '');
  };
  const getGasPrice = async amount => {
    const _inputAmount = Number(amount || sompi);
    if (_inputAmount > 0) {
      try {
        const rpc = {
          [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .U5.Mainnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_RPC_MAINNET_L2 */ .Qj,
          [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .U5.Testnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_RPC_TESTNET_L2 */ .i8,
          [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .U5.Devnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_RPC_DEVNET_L2 */ .yb
        }[networkType] || '';
        const web3 = new web3__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .cp3(rpc);
        // const provider = new ethers.JsonRpcProvider(rpc);
        const valueInWei = ethers__WEBPACK_IMPORTED_MODULE_17__/* .parseEther */ .qy(_inputAmount.toString());
        const gasLimit = await web3.eth.estimateGas({
          to: currentAccount.addressL2,
          value: valueInWei
        });
        const garFee = (await web3.eth.getFeeData()).gasPrice;
        const calculatedGasPrice = Number(gasLimit) * Number(garFee) / 10 ** 18;
        return calculatedGasPrice;
      } catch (error) {
        console.error('err', error);
        return 0;
      }
    }
    return 0;
  };
  const init = async () => {
    const {
      isScammer
    } = await wallet.checkWebsite((session === null || session === void 0 ? void 0 : session.origin) || '');
    if (!sompi) {
      await getFee();
    }
    isScammerFlag.current = isScammer;
    let bool = true;
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2KASPA) {
      const dustAmountL2 = 0.02;
      const {
        balance
      } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountEthBalance */ .YB)(currentAccount.addressL2, networkType);
      const isOkKrcBalance = sompi / accuracy <= Number(balance);
      const isOkErcMinAmount = sompi / accuracy >= dustAmountL2;
      const isOkKrcAmount = !Number.isFinite(sompi) || sompi <= 0;
      if (isOkKrcAmount) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: "Please enter the correct amount"
        }));
      } else if (!isOkKrcBalance) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: "Insufficient balance. Balance(".concat(balance, ") is lower than ").concat(sompi / accuracy)
        }));
      } else if (!isOkErcMinAmount) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: "Amount must be at least ".concat(dustAmountL2, " eKAS")
        }));
      } else if (!(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidEthereumAddress */ .I3)(toAddress || '')) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: "Invalid address"
        }));
      } else {
        setTxInfo(Object.assign({}, txInfo, {
          balance
        }));
      }
      if (!sompi || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidEthereumAddress */ .I3)(toAddress || '') || !isOkKrcBalance || !isOkErcMinAmount || isOkKrcAmount) {
        bool = false;
      }
      setIsOk(bool);
    } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2ERC20) {
      const isEmptyObject = !unsignedTx || typeof unsignedTx !== 'object' || Object.keys(unsignedTx).length === 0;
      if (isEmptyObject) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: "Invalid unsignedTx"
        }));
        bool = false;
      }
      setIsOk(bool);
    } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2SPECAILTX) {
      if (!sompi || !Number.isFinite(sompi) || sompi <= 0 || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidEthereumAddress */ .I3)(toAddress || '') || !tokenContractAddress) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: "Incorrect format"
        }));
        bool = false;
      } else {
        const res = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_14__/* .get_erc20_list_by_address */ .IL)(networkType, currentAccount.addressL2);
        for (let i = 0; i < res.data.items.length; i++) {
          const {
            value,
            token
          } = res.data.items[i];
          if (token.address === tokenContractAddress && sompi / accuracy >= Number(value / accuracy)) {
            setTxInfo(Object.assign({}, txInfo, {
              txError: "Insufficient balance. Balance(".concat(Number(value / accuracy), ") is lower than ").concat(sompi / accuracy)
            }));
            bool = false;
            break;
          }
        }
      }
      setIsOk(bool);
    }
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(() => {
    init();
  }, []);
  if (!handleCancel) {
    handleCancel = () => {
      rejectApproval();
    };
  }
  if (!handleConfirm) {
    let networkId = '';
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .U5.Mainnet) {
      networkId = 'mainnet';
    } else if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .U5.Testnet) {
      networkId = 'testnet-10';
    } else {
      networkId = 'devnet';
    }
    handleConfirm = async () => {
      setConfirmLoading(true);
      setTxInfo(Object.assign({}, txInfo, {
        txError: ''
      }));
      if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2KASPA) {
        (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__/* .send_eth_transaction */ .EI)(toAddress, sompi / accuracy + '', "0x".concat(privateKey.hex)).then(res => {
          return resolveApproval({
            txid: res.transactionHash
          });
        }).catch(error => {
          const message = (error === null || error === void 0 ? void 0 : error.message) || 'Transaction failed';
          setTxInfo(Object.assign({}, txInfo, {
            txError: message
          }));
        }).finally(() => {
          setConfirmLoading(false);
        });
      } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2ERC20) {
        (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__/* .send_kaspa_with_dapp_evm_payload */ .kz)(unsignedTx, networkId, "0x".concat(privateKey.hex), address, fee).then(res => {
          const {
            hash
          } = res;
          resolveApproval({
            txid: hash
          });
        }).catch(error => {
          const message = (error === null || error === void 0 ? void 0 : error.message) || 'Transaction failed';
          setTxInfo(Object.assign({}, txInfo, {
            txError: message
          }));
        }).finally(() => {
          setConfirmLoading(false);
        });
      } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2SPECAILTX) {
        (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__/* .send_erc20_with_evm_payload */ .YZ)(networkId, "0x".concat(privateKey.hex), address, fee, toAddress, sompi / accuracy + '', tokenContractAddress).then(res => {
          const {
            hash
          } = res;
          resolveApproval({
            txid: hash
          });
        }).catch(error => {
          const message = (error === null || error === void 0 ? void 0 : error.message) || 'Transaction failed';
          setTxInfo(Object.assign({}, txInfo, {
            txError: message
          }));
        }).finally(() => {
          setConfirmLoading(false);
        });
      }
    };
  }
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .c, {
        style: {
          fontSize: '48px',
          color: '#48e3c5'
        }
      })
    });
  }
  if (!header && session) {
    header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      session: session
    });
  }
  if (isScammerFlag.current) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      style: paperStyle,
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c.Title, {
          level: 4,
          style: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '20px'
          },
          children: "Phishing Detection"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px',
            marginTop: '10px'
          },
          children: "Malicious behavior and suspicious activity have been detected."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          },
          children: "Your access to this page has been restricted by KasKeeper as it might be unsafe."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
        gutter: 8,
        style: {
          marginTop: '20px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: handleCancel,
            children: "Reject (blocked by KasKeeper)"
          })
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        style: {
          marginTop: '20px'
        },
        children: [sompi && sompi > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "Spend Amount:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            style: {
              color: '#666'
            },
            children: sompi / accuracy
          })]
        }), feeRate && Number(feeRate) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "feeRate:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
            style: {
              color: '#666'
            },
            children: [" ", "".concat(fee, " (").concat((0,i18next__WEBPACK_IMPORTED_MODULE_11__.t)('priority fee'), ")")]
          })]
        }), currentAccount && currentAccount.addressL2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "address:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            style: {
              color: '#666'
            },
            children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .shortAddress */ .SO)(currentAccount.addressL2, 10)
          })]
        }), toAddress && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "toAddress:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            style: {
              color: '#666'
            },
            children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .shortAddress */ .SO)(toAddress, 10)
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        style: {
          backgroundColor: [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2ERC20, _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2SPECAILTX].includes(type) || txInfo !== null && txInfo !== void 0 && txInfo.txError ? '#f5f5f5' : 'transparent',
          padding: '10px',
          overflow: 'auto',
          fontSize: '12px',
          fontFamily: 'monospace',
          marginTop: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("pre", {
          style: {
            margin: '0'
          },
          children: [type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2ERC20 && !(txInfo !== null && txInfo !== void 0 && txInfo.txError) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("code", {
            children: JSON.stringify(unsignedTx, null, 1)
          }), type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .qA.SEND_L2SPECAILTX && !(txInfo !== null && txInfo !== void 0 && txInfo.txError) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("code", {
            children: JSON.stringify(tokenContractAddress, null, 1)
          })]
        }), (txInfo === null || txInfo === void 0 ? void 0 : txInfo.txError) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          style: {
            backgroundColor: '#f5f5f5',
            overflow: 'auto',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: 'red'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("pre", {
            style: {
              margin: '0',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("code", {
              children: txInfo === null || txInfo === void 0 ? void 0 : txInfo.txError
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
        span: isOk ? 12 : 24,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Reject"
        })
      }), isOk && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          loading: confirmLoading,
          onClick: () => {
            handleConfirm();
          },
          children: 'Sign & Pay'
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SignText)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27923);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49448);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47012);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81080);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6248);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(816);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36640);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46524);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81420);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78256);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2488);










/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */


// 引入 Ant Design 组件
// 自定义样式


const paperStyle = {
  maxWidth: 400,
  margin: 'auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // 内容分布均匀
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '4px',
  width: '100%',
  backgroundColor: '#fafafa' // 轻微背景色，增加层次感
};
const textAreaStyle = {
  userSelect: 'text',
  maxHeight: '100px',
  // 减少最大高度，优化空间
  overflowY: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: '14px',
  color: '#333'
};
function SignText(_ref) {
  let {
    params: {
      data,
      session,
      method
    }
  } = _ref;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .useApproval */ .kf)();
  const handleCancel = () => {
    rejectApproval();
  };
  const handleConfirm = () => {
    resolveApproval();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .c, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '20px'
        },
        children: "Signature Request"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c.Paragraph, {
        style: {
          textAlign: 'center',
          color: '#666',
          fontSize: '14px',
          marginTop: '10px',
          marginBottom: '10px'
        },
        children: "Only sign this message if you fully understand the content and trust the requesting site."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c.Text, {
        style: {
          textAlign: 'center',
          display: 'block',
          fontSize: '14px',
          margin: '20px'
        },
        children: "You are signing:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        style: cardStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          style: textAreaStyle,
          children: method === 'verifyMessage' ? data.signature && data.text ? data.text : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            style: {
              color: '#ff4d4f'
            },
            children: "No Sign Text"
          }) : data.text ? data.text : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            style: {
              color: '#ff4d4f'
            },
            children: "No Sign Text"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
        span: (method === 'verifyMessage' ? !!data.signature : true) && !!data.text ? 12 : 24,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Reject"
        })
      }), (method === 'verifyMessage' ? !!data.signature : true) && !!data.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConfirm,
          children: "Sign"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 12868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SwitchLayer)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27923);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49448);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47012);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81080);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6248);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34344);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67472);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(816);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36640);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46524);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81420);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40256);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78256);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45412);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96651);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2488);












/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */


// 引入 Ant Design 组件


 // 引入向下箭头图标


// 自定义样式


const paperStyle = {
  maxWidth: 400,
  margin: 'auto',
  // 增加外边距
  padding: '20px',
  // 增加内边距
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // 确保内容分布均匀
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  // 增加按钮高度
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '12px 16px',
  // 增加内边距
  textAlign: 'center',
  backgroundColor: '#fff',
  width: '100%' // 确保卡片占满宽度
};
function SwitchLayer(_ref) {
  let {
    params: {
      data,
      session
    }
  } = _ref;
  // const currentLayer = useLayerType();
  // const changeLayerType = useChangeLayerTypeCallback();
  // const wallet = useWallet()
  // const currentLayer = wallet.getLayer()

  const to = data.layerType;
  const from = to === 'L1' ? _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .LayerType */ .Y1.L2 : _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .LayerType */ .Y1.L1;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_8__/* .useApproval */ .kf)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const handleCancel = () => {
    rejectApproval('User rejected the request.');
  };
  const handleConnect = async () => {
    // setLoading(true)
    // try  {
    //   await changeLayerType(from === LayerType.L1 ? LayerType.L2 : LayerType.L1);;
    // } catch (e) {
    //   console.log('error', e);
    // }
    // setTimeout(() => {
    //   setLoading(false)
    //   resolveApproval();
    // }, 1000);
    resolveApproval();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
      spinning: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
          session: session
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c.Title, {
          level: 4,
          style: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '20px'
          },
          children: "Allow this site to switch the layer?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
            style: cardStyle,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c.Text, {
              strong: true,
              style: {
                fontSize: '16px'
              },
              children: ["layer ", from]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            style: {
              margin: '15px 0'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
              style: {
                fontSize: '24px',
                color: '#666'
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
            style: {
              ...cardStyle,
              borderColor: '#48e3c5',
              backgroundColor: '#e6f7ff'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c.Text, {
              strong: true,
              style: {
                fontSize: '16px',
                color: '#48e3c5'
              },
              children: ["layer ", to]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_17__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Cancel"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_17__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConnect,
          loading: loading,
          children: "Switch Layer"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 60052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SwitchNetwork)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27923);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49448);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47012);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81080);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6248);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(816);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36640);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46524);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81420);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46956);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78256);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17534);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45412);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);










/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// 引入 Ant Design 组件



 // 引入向下箭头图标

// 自定义样式


const paperStyle = {
  maxWidth: 400,
  margin: 'auto',
  // 增加外边距
  padding: '20px',
  // 增加内边距
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // 确保内容分布均匀
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  // 增加按钮高度
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '12px 16px',
  // 增加内边距
  textAlign: 'center',
  backgroundColor: '#fff',
  width: '100%' // 确保卡片占满宽度
};
function SwitchNetwork(_ref) {
  let {
    params: {
      data,
      session
    }
  } = _ref;
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useNetworkType */ .qS)();
  const from = _shared_constant__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_TYPES */ .CY[networkType];
  const to = _shared_constant__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_TYPES */ .CY[data.networkType];
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_8__/* .useApproval */ .kf)();
  const handleCancel = () => {
    rejectApproval('User rejected the request.');
  };
  const handleConnect = async () => {
    resolveApproval();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '20px'
        },
        children: "Allow this site to switch the network?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
          style: cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c.Text, {
            strong: true,
            style: {
              fontSize: '16px'
            },
            children: from.label
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          style: {
            margin: '15px 0'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c, {
            style: {
              fontSize: '24px',
              color: '#666'
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
          style: {
            ...cardStyle,
            borderColor: '#48e3c5',
            backgroundColor: '#e6f7ff'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c.Text, {
            strong: true,
            style: {
              fontSize: '16px',
              color: '#48e3c5'
            },
            children: to.label
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Cancel"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConnect,
          children: "Switch Network"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 47500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connect: () => (/* reexport safe */ _Connect__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   MultiSignPsbt: () => (/* reexport safe */ _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   SignKRC20Transaction: () => (/* reexport safe */ _SignKRC20Transaction__WEBPACK_IMPORTED_MODULE_7__.c),
/* harmony export */   SignPsbt: () => (/* reexport safe */ _SignPsbt__WEBPACK_IMPORTED_MODULE_2__.c),
/* harmony export */   SignPsbtL2: () => (/* reexport safe */ _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   SignText: () => (/* reexport safe */ _SignText__WEBPACK_IMPORTED_MODULE_4__.c),
/* harmony export */   SwitchLayer: () => (/* reexport safe */ _SwitchLayer__WEBPACK_IMPORTED_MODULE_6__.c),
/* harmony export */   SwitchNetwork: () => (/* reexport safe */ _SwitchNetwork__WEBPACK_IMPORTED_MODULE_5__.c)
/* harmony export */ });
/* harmony import */ var _Connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80528);
/* harmony import */ var _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45656);
/* harmony import */ var _SignPsbt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46688);
/* harmony import */ var _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89960);
/* harmony import */ var _SignText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87540);
/* harmony import */ var _SwitchNetwork__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60052);
/* harmony import */ var _SwitchLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12868);
/* harmony import */ var _SignKRC20Transaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Connect__WEBPACK_IMPORTED_MODULE_0__, _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__, _SignPsbt__WEBPACK_IMPORTED_MODULE_2__, _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__, _SignKRC20Transaction__WEBPACK_IMPORTED_MODULE_7__]);
([_Connect__WEBPACK_IMPORTED_MODULE_0__, _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__, _SignPsbt__WEBPACK_IMPORTED_MODULE_2__, _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__, _SignKRC20Transaction__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ TXTypes)
/* harmony export */ });
let TXTypes = /*#__PURE__*/function (TXTypes) {
  TXTypes["Mint"] = "Mint";
  TXTypes["Deploy"] = "Deploy";
  TXTypes["TransferKrc20"] = "TransferKrc20";
  TXTypes["TransferNative"] = "TransferNative";
  return TXTypes;
}({});

/***/ })

}]);