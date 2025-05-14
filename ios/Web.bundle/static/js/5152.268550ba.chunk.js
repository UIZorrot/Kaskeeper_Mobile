"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5152],{

/***/ 9230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ FeeRateBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13108);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98505);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52377);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51942);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20577);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
/* eslint-disable no-unused-vars */







var FeeRateType = /*#__PURE__*/function (FeeRateType) {
  FeeRateType[FeeRateType["NONE"] = 0] = "NONE";
  // SLOW,
  FeeRateType[FeeRateType["AVG"] = 1] = "AVG";
  FeeRateType[FeeRateType["FAST"] = 2] = "FAST";
  FeeRateType[FeeRateType["CUSTOM"] = 3] = "CUSTOM";
  return FeeRateType;
}(FeeRateType || {});
function FeeRateBar(_ref) {
  let {
    feeRate,
    onChange
  } = _ref;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .vT)();
  const [feeOptions, setFeeOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    wallet.getFeeSummary().then(v => {
      setFeeOptions([...v.list, {
        title: 'Custom',
        feeRate: 0
      }]);
    });
  }, []);
  const [feeOptionIndex, setFeeOptionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(FeeRateType.NONE);
  const [feeRateInputVal, setFeeRateInputVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    switch (feeRate) {
      case null:
        if (feeOptionIndex !== FeeRateType.NONE) setFeeOptionIndex(FeeRateType.NONE);
        break;
      case 0:
        if (feeOptionIndex !== FeeRateType.NONE) setFeeOptionIndex(FeeRateType.NONE);
        break;
      case 10:
        if (feeOptionIndex !== FeeRateType.AVG) setFeeOptionIndex(FeeRateType.AVG);
        break;
      case 20:
        if (feeOptionIndex !== FeeRateType.FAST) setFeeOptionIndex(FeeRateType.FAST);
        break;
      default:
        if (feeOptionIndex !== FeeRateType.CUSTOM) setFeeOptionIndex(FeeRateType.CUSTOM);
        setFeeRateInputVal(feeRate.toString());
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const defaultOption = feeOptions[1];
    const defaultVal = defaultOption ? defaultOption.feeRate : 1;
    let val = defaultVal;
    if (feeOptionIndex === FeeRateType.CUSTOM) {
      val = parseInt(feeRateInputVal) || 0;
    } else if (feeOptions.length > 0) {
      val = feeOptions[feeOptionIndex].feeRate;
    }
    onChange(val);
  }, [feeOptions, feeOptionIndex, feeRateInputVal]);
  const adjustFeeRateInput = inputVal => {
    let val = parseInt(inputVal);
    if (!val) {
      setFeeRateInputVal('');
      return;
    }
    const defaultOption = feeOptions[0];
    const defaultVal = defaultOption ? defaultOption.feeRate : 1;
    if (val <= 0) {
      val = defaultVal;
    }
    setFeeRateInputVal(val.toString());
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .V, {
    mt: "lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_4__/* .Row */ .f, {
      justifyCenter: true,
      children: feeOptions.map((v, index) => {
        const selected = index === feeOptionIndex;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          onClick: () => {
            setFeeOptionIndex(index);
          },
          style: {
            borderWidth: 1,
            borderColor: 'rgba(10, 36, 99, 0.15)',
            // 更柔和的灰色
            height: 96,
            width: '25%',
            textAlign: 'center',
            padding: 4,
            borderRadius: 12,
            // 更大的圆角，更现代
            display: 'flex',
            flexDirection: 'column',
            justifyContent: v.title !== 'Custom' ? 'space-between' : 'space-around',
            alignItems: 'center',
            // 增加水平居中
            cursor: 'pointer',
            backgroundColor: selected ? '#E6FCF6' : 'white',
            // 默认白色背景
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            // 添加轻微阴影
            transition: 'all 0.2s ease-in-out',
            // 添加平滑过渡效果
            ...(selected && {
              borderColor: '#25F7C0',
              // 选中时边框跟随主色
              color: 'white' // 文字变白以匹配背景
            }),
            '&:hover': !selected && {
              backgroundColor: '#f5f5f5',
              // 未选中时悬停变浅灰
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' // 悬停时阴影加深
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .EY, {
            text: v.title,
            textCenter: true,
            style: {
              width: '100%',
              color: '#0A2463',
              borderRadius: 6,
              padding: '5px 0',
              fontSize: '12px',
              background: v.title !== 'Custom' ? 'linear-gradient( 315deg, #02DDA4 0%, #29FAC4 100%)' : 'transparent'
            }
          }), v.title !== 'Custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .EY, {
            text: `${v.feeRate}`,
            size: "xxs",
            textCenter: true,
            style: {
              fontSize: '15px',
              fontWeight: 500,
              color: '#0A2463'
            }
          }), v.title !== 'Custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .EY, {
            text: `${v.desc}`,
            size: "xxs",
            textCenter: true,
            style: {
              fontSize: '11px',
              color: '#0A2463',
              margin: '0 0 6px 0'
            }
          })]
        }, v.title);
      })
    }), feeOptionIndex === FeeRateType.CUSTOM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .V, {
      mt: "lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .pd, {
        preset: "amount",
        placeholder: 'multiple of network fee',
        value: feeRateInputVal,
        onChange: e => {
          adjustFeeRateInput(e.target.value);
        }
        // onBlur={() => {
        //   const val = parseInt(feeRateInputVal) + '';
        //   setFeeRateInputVal(val);
        // }}
        ,
        autoFocus: true
      })
    })]
  });
}

/***/ }),

/***/ 17778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Empty)
/* harmony export */ });
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95662);
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45396);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13907);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51942);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);





function Empty(props) {
  const {
    text,
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .B)();
  const content = text || t('No Data Found');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: className,
    style: {
      alignSelf: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .f, {
      justifyCenter: true,
      style: {
        flex: 1,
        alignItems: 'center',
        height: '30vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        description: content,
        image: antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.PRESENTED_IMAGE_SIMPLE
      })
    })
  });
}

/***/ }),

/***/ 24965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);


function Content(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: `h-full flex flex-col justify-between space-y-6 p-4 ${props.className ? props.className : ''}`,
    children: props.children
  });
}

/***/ }),

/***/ 32316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TokenItem)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_Styled_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59755);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13108);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87164);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14073);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43168);
/* harmony import */ var _ui_images_common_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64134);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__]);
_ui_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function TokenItem(props) {
  const {
    token,
    selectToken = false,
    styleType = 'default',
    onClick,
    ...restProps
  } = props;
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .pI)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    className: "flex justify-between py-3 px-3 !rounded-lg",
    style: {
      background: '#FFFFFF',
      boxShadow: '3px 3px 12px rgba(0, 0, 0, 0.1)',
      marginTop: 12
    },
    onClick: () => onClick(token),
    ...restProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      className: "space-x-2 flex items-center",
      children: [token !== null && token !== void 0 && token.isToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components_Styled_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        src: token === null || token === void 0 ? void 0 : token.avatar,
        name: token.tick,
        size: 40,
        borderRadius: "6px",
        fontSize: 14
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
        icon: "kas",
        size: 40
      }), styleType === 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          variant: "body1",
          fontWeight: 500,
          style: {
            fontSize: '15px',
            color: '#0A2463'
          },
          children: token !== null && token !== void 0 && token.isToken ? token === null || token === void 0 ? void 0 : token.tick : `${currentLayer === 'L2' ? 'e' : ''}KAS`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          color: "text.secondary",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: token !== null && token !== void 0 && token.isToken ? 'KRC20' : currentLayer === 'L2' ? 'L2 Native/Token' : 'kaspa'
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      className: "flex justify-end items-center space-x-3",
      children: [styleType === 'default' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          align: "right",
          style: {
            fontSize: '14px',
            color: '#0A2463'
          },
          children: token !== null && token !== void 0 && token.isToken ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .ZV)(token.balance, token === null || token === void 0 ? void 0 : token.dec) : (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .ZV)(token.balance, token === null || token === void 0 ? void 0 : token.dec)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          align: "right",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: token !== null && token !== void 0 && token.isToken ? '-' : `$${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .ZV)(token === null || token === void 0 ? void 0 : token.usdValue)}`
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          align: "right",
          style: {
            fontWeight: '500',
            fontSize: '14px',
            color: '#0A2463'
          },
          children: [token !== null && token !== void 0 && token.isToken ? token === null || token === void 0 ? void 0 : token.tick : 'KAS', "(", token !== null && token !== void 0 && token.isToken ? 'KRC20' : 'kaspa', ")"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          align: "right",
          style: {
            fontSize: '13px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: token !== null && token !== void 0 && token.isToken ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .ZV)(token.balance, token === null || token === void 0 ? void 0 : token.dec) : (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .ZV)(token.balance, token === null || token === void 0 ? void 0 : token.dec)
        })]
      }), selectToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: _ui_images_common_right_svg__WEBPACK_IMPORTED_MODULE_4__,
        width: 18,
        height: 18,
        alt: ""
      }) : null]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TxCreateScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55809);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(96383);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71652);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(85266);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15509);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(80899);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60346);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71288);
/* harmony import */ var _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3146);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77093);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59577);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17778);
/* harmony import */ var _ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9230);
/* harmony import */ var _ui_components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52377);
/* harmony import */ var _ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73217);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24965);
/* harmony import */ var _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32316);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21999);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(36904);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(43168);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(16039);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51195);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5005);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11846);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(13108);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(87164);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(14073);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(73357);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(6757);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(13907);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(47767);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(19706);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(99770);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(41442);
/* harmony import */ var _ui_utils_mathUtils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(34886);
/* harmony import */ var _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(95255);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__, _ui_components__WEBPACK_IMPORTED_MODULE_9__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_21__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__, _ui_components__WEBPACK_IMPORTED_MODULE_9__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_21__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */





































function TxCreateScreen() {
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_32__/* .useLocation */ .zy)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_33__/* .useTranslation */ .B)();
  const {
    activeToken,
    refetchList,
    setActiveToken
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__/* .useAccountContext */ .Um)();
  const accountBalance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountBalance */ .pc)();
  const safeBalanceOrigin = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSafeBalance */ .Dm)();
  const [safeBalance, setSafeBalance] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(safeBalanceOrigin);
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useUserPrivateKey */ .N2)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__/* .useNavigate */ .Z)();
  const kaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useKaspaTx */ .o2)();
  const [tokenAmount, setTokenAmount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [inputAmount, setInputAmount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(kaspaTx.toSompi > 0 ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ ._m)(kaspaTx.toSompi) : '');
  const [inputAmountUsd, setInputAmountUsd] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const [toInfo, setToInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    address: kaspaTx.toAddress || (state === null || state === void 0 ? void 0 : state.address),
    domain: kaspaTx.toDomain
  });
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useNetworkType */ .iP)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const kasPriceOriginal = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useKasPrice */ .Wv)();
  const [kasPrice, setKasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(kasPriceOriginal);
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountAddress */ .PJ)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountAddressL2 */ .N1)();
  const [autoAdjust, setAutoAdjust] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const fetchUtxos = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useFetchUtxosCallback */ .II)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_10__/* .useTools */ .D)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // tools.showLoading(true);
    // tools.showLoading(false);
    setLoading(true);
    fetchUtxos().finally(() => {
      currentLayer !== 'L2' && setLoading(false);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setSafeBalance(safeBalanceOrigin);
  }, [safeBalanceOrigin]);
  const prepareSendKAS = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .usePrepareSendKASCallback */ .NC)();
  const pushKaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .usePushKaspaTxCallback */ .NK)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .pI)();
  const [safeSompi, setsafeSompi] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('--');
  const [safeBalanceMax, setSafeBalanceMax] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('--');
  const [safeSompiL2, setsafeSompiL2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('0');
  const [safeBalanceL2, setSafeBalanceL2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('0');
  const [gasPrices, setGasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (addressL2) {
      const getL2Info = async () => {
        const {
          balance
        } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountEthBalance */ .kw)(addressL2, networkType);
        const gasPrice = await getGasPrice(Number(balance));
        setsafeSompiL2(balance);
        setSafeBalanceL2(balance);
        setGasPrice(gasPrice);
        setLoading(false);
      };
      getL2Info();
    }
  }, [currentLayer, addressL2]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const fetchBalance = async () => {
      setKasPrice(kasPriceOriginal);
      setSafeBalance(safeBalanceOrigin);
      if (safeBalance !== '0') {
        setsafeSompi((Number(safeBalance) * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10).toString());
      } else {
        try {
          const temp_url = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_MAINNET */ ._7 + '/addresses/' + address + '/balance' : _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_TESTNET */ .lu + '/addresses/' + address + '/balance';
          const response = await fetch(temp_url);
          const data = await response.json();
          const balance = Number(data.balance).toString();
          setsafeSompi(balance); // 更新状态
        } catch (error) {
          console.error('Error fetching balance:', error);
          setsafeSompi('--'); // 出错时显示 '--'
        }
      }
    };
    const fetchBalanceL2 = async () => {
      try {
        // const { balance } = await useAccountEthBalance(addressL2);
        // const gasPrice = await getGasPrice(Number(balance))
        setsafeSompi(safeSompiL2);
        setSafeBalance(safeBalanceL2);
        setTxFee(gasPrices);
        setSafeBalanceMax((0,_ui_utils_mathUtils__WEBPACK_IMPORTED_MODULE_29__/* .minus */ .Rd)(safeSompiL2, gasPrices));
      } catch (error) {
        setsafeSompi('--');
        setSafeBalance('0');
      }
    };
    if (currentLayer === 'L2' && addressL2) {
      fetchBalanceL2();
    } else if (currentLayer === 'L1') {
      fetchBalance();
    }
  }, [safeBalance, currentLayer, addressL2, safeSompiL2]);

  // const safeSompi = useMemo(async () => {
  //   // if (accountBalance.amount === '0' && transactionInfos.length === 0) {
  //   //   return '--';
  //   // } else {
  //   if(safeBalance !== '0'){
  //     return amountToSompi(safeBalance);}
  //   else{
  //     let temp_url = OPENAPI_URL_MAINNET + "addresses/"+ address +"/balance"
  //     if (networkType !== NetworkType.Mainnet) { temp_url = OPENAPI_URL_TESTNET + "addresses/"+ address +"/balance"}
  //     fetch(temp_url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //           return amountToSompi(data.balance)
  //       });
  //     }
  //     return amountToSompi(safeBalance);
  //   // }
  // }, [safeBalance]);

  const toSompi = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => inputAmount ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .amountToSompi */ .UC)(inputAmount) : 0, [inputAmount]);
  const [inputAmountType, setInputAmountType] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('kas');
  const dustAmount = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ ._m)(_shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .COIN_DUST */ .Fw), [_shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .COIN_DUST */ .Fw]);
  const [feeRate, setFeeRate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const [rawTxInfo, setRawTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const [txFee, setTxFee] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const [drawerVisible, setDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [feeDrawerVisible, setFeeDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useAppDispatch */ .j)();
  const [enableRBF, setEnableRBF] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [getGasLimit, setGetGasLimit] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const isAddressNetworkValid = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    if (!toInfo.address || typeof toInfo.address !== 'string') {
      return false;
    }
    const address = toInfo.address.trim();
    const isTestnetAddress = address.startsWith('kaspatest:');
    const isMainnetAddress = address.startsWith('kaspa:');

    // 如果没有任何有效前缀，直接返回 false
    if (!isTestnetAddress && !isMainnetAddress) {
      return false;
    }
    switch (networkType) {
      case _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Testnet:
        return isTestnetAddress && (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isValidAddress */ .$m)(address);
      case _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet:
        return isMainnetAddress && (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isValidAddress */ .$m)(address);
      default:
        return false;
    }
  }, [toInfo.address, networkType]);

  // 计算 Gas 价格
  const getGasPrice = async amount => {
    const _inputAmount = Number(amount || inputAmount);
    if (_inputAmount > 0) {
      try {
        const rpc = {
          [_shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_RPC_MAINNET_L2 */ .jy,
          [_shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Testnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_RPC_TESTNET_L2 */ .Gj,
          [_shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Devnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_RPC_DEVNET_L2 */ .nX
        }[networkType] || '';
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_34__/* .JsonRpcProvider */ .FR(rpc);
        const valueInWei = ethers__WEBPACK_IMPORTED_MODULE_35__/* .parseEther */ .g5(_inputAmount.toString());
        const gasLimit = await provider.estimateGas({
          to: toInfo.address || addressL2,
          value: valueInWei
        });
        const garFee = (await provider.getFeeData()).gasPrice;
        const calculatedGasPrice = Number(gasLimit) * Number(garFee) / 10 ** 18;
        setGetGasLimit(calculatedGasPrice);
        return calculatedGasPrice;
      } catch (error) {
        console.error('err', error);
        return 0;
      } finally {
        setDisabled(true);
      }
    }
    return 0;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setError('');
    setDisabled(true);

    // 地址验证
    if (!toInfo.address || typeof toInfo.address !== 'string') {
      setError(t('Please enter recipient address'));
      return;
    }
    const address = toInfo.address.trim();
    const kaspaAddressPattern = /^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i;
    const isTestnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_36__/* .isAddress */ .PW(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isMainnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_36__/* .isAddress */ .PW(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isDevAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_36__/* .isAddress */ .PW(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);

    // 检查地址格式是否完全无效
    if (!isTestnetAddress && !isMainnetAddress && !isDevAddress) {
      setError(t('Wrong address format'));
      return;
    }

    // 检查网络匹配
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Testnet && !isTestnetAddress) {
      setError(t('Wrong address format') + ' - ' + t('Testnet requires kaspatest: prefix'));
      return;
    }
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet && !isMainnetAddress) {
      setError(t('Wrong address format') + ' - ' + t('Mainnet requires kaspa: prefix'));
      return;
    }

    // 验证地址有效性
    if (!(0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isValidAddress */ .$m)(address)) {
      setError(t('Invalid address'));
      return;
    }

    // 对于 KAS 转账的验证 TODO
    if (!(activeToken !== null && activeToken !== void 0 && activeToken.isToken) && currentLayer === 'L2') {
      const getTxFee = async () => {
        const _safeSompi = Number(safeSompi);
        const _inputAmount = Number(inputAmount);
        const _safeBalanceMax = Number(safeBalanceMax);
        const dustAmountL2 = 0.02;
        if (!toSompi) {
          setError(t('Please enter an amount'));
          return;
        }
        if (_inputAmount < dustAmountL2) {
          setError(`Amount must be at least ${dustAmountL2} eKAS`);
          return;
        }
        if (_inputAmount > _safeSompi || _inputAmount > _safeBalanceMax) {
          setError(t('Amount exceeds your available balance'));
          return;
        }
        setTxFee(getGasLimit);
        setDisabled(false);
      };
      getTxFee();
    } else if (!(activeToken !== null && activeToken !== void 0 && activeToken.isToken)) {
      const _safeSompi = Number(safeSompi);
      if (!toSompi) {
        setError(t('Please enter an amount'));
        return;
      }
      if (toSompi < _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .COIN_DUST */ .Fw) {
        setError(`Amount must be at least ${dustAmount} KAS`);
        return;
      }
      if (toSompi > _safeSompi) {
        setError(t('Amount exceeds your available balance'));
        return;
      }
      if (toInfo.address === kaspaTx.toAddress && toSompi === kaspaTx.toSompi && feeRate === kaspaTx.feeRate) {
        setDisabled(false);
        return;
      }

      //TODO: RPC
      prepareSendKAS({
        toAddressInfo: toInfo,
        toAmount: toSompi,
        feeRate,
        enableRBF
      }).then(data => {
        setTxFee(data !== null && data !== void 0 && data.fee ? Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ ._m)(data.fee)) + 0.001 : 0.001);
        setRawTxInfo(data);
        setDisabled(false);
      }).catch(e => {
        setError(e.message === 'Storage mass exceeds maximum' ? t('Amount is too small') : e.message);
      });
    } else {
      // 对于 KRC20 代币的验证
      if (!tokenAmount) {
        setError(t('Please enter an amount'));
        return;
      }
      if ((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isGreaterThan */ .yJ)(tokenAmount, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseTokenBalance */ .Ff)(activeToken.balance))) {
        setError(t('Amount exceeds your token balance'));
        return;
      }
      setTxFee(Number(0.01));
      setDisabled(false);
    }
  }, [toInfo, inputAmount, tokenAmount, feeRate, enableRBF, activeToken, currentLayer]);
  const showSafeBalance = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => !new bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(accountBalance.amount).eq(new bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(safeBalance)), [accountBalance.amount, safeBalance]);
  const dataFromForward = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .useLocationState */ .ac)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (dataFromForward && dataFromForward.rawTxInfo) {
      const rawtxFromForward = dataFromForward.rawTxInfo.rawtx;
      const result = JSON.parse(rawtxFromForward);
      const toAddress = result.to;
      const inputAmount = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ ._m)(result.amountSompi);
      setInputAmount(inputAmount);
      setInputAmountUsd((Number(inputAmount) * Number(kasPrice)).toLocaleString());
      setFeeRate(result.feeRate);
      setToInfo({
        address: toAddress,
        domain: ''
      });
    }
  }, [dataFromForward]);
  const handleAddrInput = address => {
    setToInfo({
      address,
      domain: ''
    });
    setDrawerVisible(false);
    const input = document.getElementById('address-input');
    if (input) {
      var _Object$getOwnPropert;
      const nativeInputValueSetter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;
      nativeInputValueSetter === null || nativeInputValueSetter === void 0 ? void 0 : nativeInputValueSetter.call(input, address);
      const inputEvent = new Event('input', {
        bubbles: true
      });
      input.dispatchEvent(inputEvent);
    } else {
      console.log('address input undefine');
    }
  };
  const tabItems = [{
    key: 'recent',
    label: t('Recent'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(RecentTab, {
      handleAddrInput: handleAddrInput
    })
  }, {
    key: 'contacts',
    label: t('Contacts'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(ContactsTab, {
      handleAddrInput: handleAddrInput
    })
    // disabled: true,
  }, {
    key: 'my_account',
    label: t('My account'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(MyAccountTab, {
      handleAddrInput: handleAddrInput
    })
  }];
  const handleTokenClick = () => {
    navigate('SelectToken');
  };
  const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const handleTransferKrc20 = async () => {
    console.log('send krc20', '------');
    //privateKeyArg, network, ticker, priorityFeeValue, dest, amount
    setSending(true);
    const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Testnet ? 'testnet-10' : 'devnet';
    console.log(networkName);
    const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__/* .krc20_trans */ .ok)(privateKey.hex, networkName, activeToken.tick, txFee * (feeRate <= 0 ? 1 : feeRate), toInfo.address, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec));
    if (result !== null && result !== void 0 && result.status) {
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .$A.updateNativeTxs({
        from: address,
        info: {
          ...activeToken,
          type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .Y.TransferKrc20,
          amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec),
          from: address,
          to: toInfo.address,
          hash: result === null || result === void 0 ? void 0 : result.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
          status: 'success'
        }
      }));
      setSending(false);
      const rawtxinfo = {
        to: toInfo.address,
        amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec)),
        tick: activeToken.tick
      };
      navigate('TxSuccessScreen', {
        txid: result === null || result === void 0 ? void 0 : result.hash,
        rawtx: rawtxinfo,
        type: 'Send'
      });
      refetchList();
      // tools.toastSuccess(`Transfer ${tokenAmount} ${activeToken.tick} to ${toInfo.address}!`)
    } else {
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .$A.updateNativeTxs({
        from: address,
        info: {
          ...activeToken,
          type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .Y.TransferKrc20,
          amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec),
          from: address,
          to: toInfo.address,
          hash: result === null || result === void 0 ? void 0 : result.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
          status: 'Failed'
        }
      }));
      setSending(false);
      tools.toastError((result === null || result === void 0 ? void 0 : result.msg) || JSON.stringify(result));
    }
  };
  const krc20Disabled = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return !tokenAmount || !toInfo.address || (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isGreaterThan */ .yJ)(tokenAmount, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseTokenBalance */ .Ff)(activeToken.balance));
  }, [tokenAmount, toInfo, activeToken]);
  const handleLayerSwapOut = () => {
    handleAddrInput('');
    setInputAmount('');
    setInputAmountUsd('');
    setAutoAdjust(false);
    setTxFee(Number(0.00));
    setActiveToken(null);
  };
  const [relayerType, setRelayerType] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('L1');
  const handleRelayerSwitch = () => {
    setRelayerType(relayerType === 'L1' ? 'L2' : 'L1');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {
    spinning: loading,
    tip: "Loading...",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Layout */ .PE, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Header */ .Y9, {
        onBack: () => navigate('MainScreen'),
        title: `${t('Send')} ${activeToken ? activeToken.tick : `${currentLayer === 'L2' ? 'e' : ''}KAS`}`,
        RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .NodeStatus */ .zI, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
        className: "!h-auto",
        style: {
          padding: '0px 16px 24px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
          className: "flex justify-items-end items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_14__/* .LayerSwapOut */ .z, {
            callback: handleLayerSwapOut
          }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
            style: {
              border: `1px solid ${relayerType === 'L2' ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .T.aqua : 'rgba(10, 36, 99, 0.15)'}`,
              color: relayerType === 'L2' ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .T.aqua : 'rgba(10, 36, 99, 0.4)',
              padding: '4px 10px',
              borderRadius: '25px',
              boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
            },
            onClick: handleRelayerSwitch,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
              text: t(`use relayer`)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
          className: "space-y-2",
          style: {
            marginTop: 8
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
            token: activeToken ? activeToken : {
              balance: safeBalance,
              usdValue: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .times */ .Hn)(safeBalance, kasPrice),
              isToken: false
            },
            selectToken: true,
            onClick: () => navigate('SelectToken')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
            text: t('Recipient'),
            preset: "regular",
            color: "text",
            style: {
              fontSize: '15px',
              marginTop: 24
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
            justifyBetween: true,
            style: {
              marginTop: 12,
              position: 'relative'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
              full: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Input */ .pd, {
                id: "address-input",
                preset: "address",
                defaultValue: toInfo.address,
                addressInputData: toInfo,
                autoComplete: "off",
                onChange: val => {
                  setToInfo({
                    address: val.target.value,
                    domain: ''
                  });
                },
                autoFocus: true,
                style: {
                  paddingRight: '100px',
                  height: '48px !important',
                  background: 'red'
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .$n, {
              className: "!rounded-lg !h-[42px]",
              onClick: () => setDrawerVisible(true),
              style: {
                minWidth: '48px',
                padding: '0',
                background: 'transparent',
                boxShadow: 'none',
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("img", {
                src: _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_30__,
                width: 18,
                height: 18,
                alt: ""
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
            mt: "lg",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
              className: "mt-4 flex justify-between items-center",
              style: {
                minHeight: 30
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                text: t('Balance'),
                color: "text_minor"
              }), activeToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
                style: {
                  color: '#0A2463'
                },
                children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .formatNumber */ .ZV)(activeToken.balance, activeToken.dec)
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
                children: showSafeBalance || currentLayer === 'L2' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                  text: `${currentLayer === 'L2' ? safeBalance : accountBalance.amount} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
                  size: "sm",
                  color: "text"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
                  onClick: () => {
                    setAutoAdjust(true);
                    setInputAmount(accountBalance.amount);
                    setInputAmountUsd((Number(accountBalance.amount) * Number(kasPrice)).toLocaleString());
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                    text: "MAX",
                    style: {
                      color: autoAdjust ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .T.yellow_light : _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .T.white_muted
                    },
                    color: "text"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                    text: `${accountBalance.amount} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
                    size: "sm",
                    color: "text"
                  })]
                })
              })]
            }), !(activeToken !== null && activeToken !== void 0 && activeToken.isToken) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
                justifyBetween: true,
                itemsCenter: true,
                style: {
                  minHeight: 30
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                  text: `${t('Unconfirmed')}${currentLayer === 'L2' ? 'e' : ''}KAS`,
                  color: "text_minor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                  text: `${accountBalance.pending_kas_amount} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
                  size: "sm",
                  color: "text"
                })]
              }), showSafeBalance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
                justifyBetween: true,
                itemsCenter: true,
                style: {
                  minHeight: 30
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                  text: `${t('Available')}(${t('safe to send')})`,
                  color: "text_minor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
                  onClick: () => {
                    setAutoAdjust(true);
                    setInputAmountType('kas');
                    setInputAmount((currentLayer === 'L2' ? safeBalanceMax : safeBalance).toString());
                    setInputAmountUsd((Number(currentLayer === 'L2' ? safeBalanceMax : safeBalance) * Number(kasPrice)).toLocaleString());
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                    text: 'MAX',
                    color: autoAdjust ? 'yellow' : 'text',
                    size: "sm"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                    text: `${currentLayer === 'L2' ? safeBalanceMax : safeBalance} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
                    size: "sm",
                    color: "text"
                  })]
                })]
              })]
            }) : null, !(activeToken !== null && activeToken !== void 0 && activeToken.isToken) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
              className: "space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .KasAmountInput */ .uj, {
                preset: "amount",
                inputAmountType: inputAmountType,
                placeholder: t('Amount'),
                value: inputAmountType === 'kas' ? inputAmount : inputAmountUsd,
                onAmountInputChange: amount => {
                  if (autoAdjust) {
                    setAutoAdjust(false);
                  }
                  if (inputAmountType === 'usd' && kasPrice > 0) {
                    setInputAmountUsd(amount);
                    setInputAmount((Number(amount) / kasPrice).toLocaleString());
                  } else {
                    setInputAmount(amount);
                    setInputAmountUsd((Number(amount) * kasPrice).toLocaleString());
                  }
                },
                onChange: e => {
                  if (autoAdjust) {
                    setAutoAdjust(false);
                  }
                  if (inputAmountType === 'usd' && kasPrice > 0) {
                    setInputAmountUsd(e.target.value);
                    setInputAmount((Number(e.target.value) / kasPrice).toLocaleString());
                  } else {
                    setInputAmount(e.target.value);
                    setInputAmountUsd((Number(e.target.value) * kasPrice).toLocaleString());
                  }
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
                style: {
                  margin: '10px 0 0 0'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(SubInputAmount, {
                  inputAmountType: inputAmountType,
                  setInputAmountType: setInputAmountType,
                  inputAmountUsd: inputAmountUsd,
                  kasPrice: kasPrice,
                  inputAmount: inputAmount
                })
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {
                value: tokenAmount,
                onChange: e => {
                  if ((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isNumeric */ .kf)(e.target.value)) {
                    setTokenAmount(e.target.value);
                  }
                },
                placeholder: "Amount",
                type: "text",
                fullWidth: true
              })
            })]
          }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
            text: error,
            color: "error"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
            justifyCenter: true,
            mt: "xl",
            children: [txFee > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
              color: "textDim",
              text: `${t('TX Fee:')} ${txFee} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
              textCenter: true
            }), currentLayer !== 'L2' && txFee > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
              mt: "lg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                text: `${t('Priority Fee Rate')} ( ${t('Optional')} )`,
                color: "text",
                style: {
                  fontSize: '15px'
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_12__/* .FeeRateBar */ .q, {
                feeRate: feeRate,
                onChange: val => {
                  setFeeRate(val);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                mt: "lg",
                color: "textDim",
                text: `${t('Priority Fee:')} ${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ ._m)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .amountToSompi */ .UC)(txFee.toString())))} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
                textCenter: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
                mt: "xxl",
                full: true
              })]
            })]
          })]
        }), activeToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
          align: "center",
          variant: "body2",
          color: "textSecondary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .$n, {
            disabled: disabled || sending,
            preset: "primary",
            text: t('Transfer'),
            className: "!rounded-lg !h-[42px]",
            onClick: handleTransferKrc20,
            endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {
              size: 20,
              color: "inherit"
            }) : null,
            fullWidth: true,
            style: disabled ? {
              opacity: 0.5,
              cursor: 'not-allowed',
              backgroundColor: '#a0aec0'
            } : {}
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .$n, {
          disabled: disabled || sending,
          preset: "primary",
          text: t('Transfer'),
          className: "!rounded-lg !h-[42px]",
          endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {
            size: 20,
            color: "inherit"
          }) : null,
          style: disabled ? {
            opacity: 0.5,
            cursor: 'not-allowed',
            backgroundColor: '#a0aec0'
          } : {},
          onClick: e => {
            setSending(true);
            if (currentLayer === 'L2') {
              let networkId = '';
              if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet) {
                networkId = 'mainnet';
              } else if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Testnet) {
                networkId = 'testnet-10';
              } else {
                networkId = 'devnet';
              }
              if (relayerType === 'L1') {
                (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__/* .send_kaspa_with_evm_payload */ .tz)(networkId, `0x${privateKey.hex}`, address, txFee, toInfo.address, inputAmount).then(res => {
                  console.log('L1', privateKey, inputAmount, toInfo);
                  console.log('L1 res', res);
                  setSending(false);
                  const rawTxInfo = {
                    to: toInfo.address,
                    amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(inputAmount, 8)),
                    tick: 'eKAS',
                    relayer: 'L1'
                  };
                  navigate('TxSuccessScreen', {
                    txid: res.hash,
                    rawtx: JSON.stringify(rawTxInfo),
                    type: 'Send'
                  });
                });
              } else {
                (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__/* .send_eth_transaction */ .IF)(toInfo.address, inputAmount, `0x${privateKey.hex}`).then(res => {
                  console.log('L2', privateKey, inputAmount, toInfo);
                  console.log('L2 res', res);
                  setSending(false);
                  const rawTxInfo = {
                    to: toInfo.address,
                    amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(inputAmount, 8)),
                    tick: 'eKAS',
                    relayer: 'L2'
                  };
                  navigate('TxSuccessScreen', {
                    txid: res.transactionHash,
                    rawtx: JSON.stringify(rawTxInfo),
                    type: 'Send'
                  });
                });
              }
              return;
            }
            pushKaspaTx(rawTxInfo.rawtx).then(_ref => {
              let {
                success,
                txid,
                error
              } = _ref;
              if (success) {
                dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .$A.updateNativeTxs({
                  from: address,
                  info: {
                    tick: 'KAS',
                    dec: 8,
                    type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .Y.TransferNative,
                    amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(inputAmount, 8),
                    from: address,
                    to: toInfo.address,
                    hash: txid,
                    time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
                    status: 'success'
                  }
                }));
                setSending(false);
                navigate('TxSuccessScreen', {
                  txid,
                  rawtx: rawTxInfo.rawtx,
                  type: 'Send'
                });
              } else {
                dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .$A.updateNativeTxs({
                  from: address,
                  info: {
                    tick: 'KAS',
                    dec: 8,
                    type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .Y.TransferNative,
                    amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ .XS)(inputAmount, 8),
                    from: address,
                    to: toInfo.address,
                    hash: txid,
                    time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
                    status: 'Failed'
                  }
                }));
                setSending(false);
                tools.toastError(error.toString());
              }
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
        placement: 'bottom',
        closable: false,
        onClose: () => setDrawerVisible(false),
        open: drawerVisible,
        bodyStyle: {
          padding: '0px 10px 16px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_43__["default"], {
          size: 'small',
          defaultActiveKey: "0",
          items: tabItems,
          onTabClick: key => {
            // console.log(key);
          },
          tabBarStyle: {
            zIndex: 1,
            position: 'sticky',
            top: '1px',
            background: '#fff',
            height: '50px',
            padding: '0',
            fontSize: '14px'
          }
        })
      }, 'bottom'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
        placement: 'bottom',
        closable: false,
        onClose: () => setFeeDrawerVisible(false),
        open: feeDrawerVisible,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
          mt: "lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
            text: `${t('Priority Fee Rate')} ( ${t('Optional')} )`,
            color: "textDim"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_12__/* .FeeRateBar */ .q, {
            feeRate: feeRate,
            onChange: val => {
              setFeeRate(val);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
            mt: "xxl",
            color: "white",
            text: `${t('Priority Fee:')} ${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ ._m)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .amountToSompi */ .UC)(txFee.toString())))} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
            textCenter: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
            mt: "xxl",
            full: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .$n, {
            disabled: disabled,
            preset: "primary",
            text: t('Close'),
            onClick: () => setFeeDrawerVisible(false)
          })]
        })
      }, 'fee-drawer')]
    })
  });
}
function SubInputAmount(_ref2) {
  let {
    inputAmountType,
    setInputAmountType,
    inputAmountUsd,
    kasPrice,
    inputAmount
  } = _ref2;
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .pI)();
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  if (kasPrice > 0 && (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isNumeric */ .kf)(inputAmount)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
        itemsCenter: true,
        onClick: () => {
          inputAmountType == 'kas' ? setInputAmountType('usd') : setInputAmountType('kas');
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Icon */ .In, {
          icon: "send",
          color: hover ? 'text' : 'white_minor',
          size: 12,
          style: {
            marginRight: '4px'
          }
        }), inputAmountType == 'kas' && kasPrice > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
          text: `$${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(Number(inputAmount) * Number(kasPrice)).toFixed(6)}`,
          color: hover ? 'text' : 'white_minor'
        }), inputAmountType == 'usd' && kasPrice > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
          text: `${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(Number(inputAmount)).toFixed(6)} ${currentLayer === 'L2' ? 'e' : ''}KAS`,
          color: hover ? 'text' : 'white_minor'
        })]
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {});
  }
}
function RecentTab(_ref3) {
  let {
    handleAddrInput
  } = _ref3;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useCurrentAccount */ .YL)();
  const currentNetworkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useNetworkType */ .iP)();
  const address = currentAccount.address;
  const [transactionInfos, setTransactionInfos] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .pI)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountAddressL2 */ .N1)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        let list = [];
        if (currentLayer !== 'L2') {
          const baseUrl = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet ? 'https://api.kaspa.org' : 'https://api-tn10.kaspa.org';
          const response = await fetch(`${baseUrl}/addresses/${address}/full-transactions?limit=10&resolve_previous_outpoints=light`);
          const data = await response.json();
          const datas = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .handleTransactionsAddresses */ .q9)(data, address);
          if (datas && datas.length) {
            list = datas.filter(item => {
              return item === null || item === void 0 ? void 0 : item.relatedAddresses.length;
            });
          }
        } else {
          const baseUrl = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .z1.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_MAINNET_L2 */ .Zm : _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_TESTNET_L2 */ .YL;
          const response = await fetch(`${baseUrl}/api/v2/addresses/${addressL2}/transactions`);
          const data = await response.json();
          if (data && data.items.length) {
            data.items.forEach(item => {
              var _item$from;
              const isSelfAddress = (item === null || item === void 0 ? void 0 : (_item$from = item.from) === null || _item$from === void 0 ? void 0 : _item$from.hash) === addressL2;
              list.push({
                block_time: new Date(item.timestamp).getTime(),
                mode: isSelfAddress ? 'Sent' : 'Receive',
                relatedAddresses: [isSelfAddress ? item.to.hash : item.from.hash],
                transaction_id: item.hash
              });
            });
          } else {
            list = [];
          }
        }
        setTransactionInfos(list);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };
    if (!address || !addressL2) {
      return;
    }
    fetchTransactions();
  }, [currentNetworkType, address, addressL2, currentLayer]);
  if (transactionInfos && transactionInfos.length > 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
      children: transactionInfos.map(e => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Card */ .Zp, {
        mt: "md",
        style: {
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          border: '1px solid rgba(10,36,99,0.15)',
          padding: '24px',
          marginTop: 12,
          transition: 'all 0.3s'
        },
        classname: "hover",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .fI, {
          full: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
            full: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
              text: `${e.mode} on ${new Date(e.block_time).toLocaleString()}`,
              style: {
                fontSize: '14px',
                color: '#0A2463'
              }
            }), e.relatedAddresses.length > 0 && e.relatedAddresses.map((e, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
                classname: "recent-account-select",
                onClick: async () => {
                  handleAddrInput(e);
                  (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .copyToClipboard */ .lW)(e).then(() => {
                    // tools.toastSuccess('Copied');
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
                  text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .shortAddress */ .Dc)(e, 15),
                  preset: "sub",
                  style: {
                    fontSize: '12px',
                    color: 'rgba(10, 36, 99, 0.65)'
                  }
                })
              }, index);
            })]
          })
        })
      }, e.transaction_id))
    });
  } else {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
          className: "text-center py-7",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {
            size: 20,
            color: "inherit"
          })
        })
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__/* .Empty */ .S, {});
    }
  }
}
function ContactsTab(_ref4) {
  let {
    handleAddrInput
  } = _ref4;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .useWallet */ .vT)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .pI)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_33__/* .useTranslation */ .B)();
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const fetchContacts = async () => {
      const contacts = await wallet.listContact();
      const filteredContacts = currentLayer === 'L2' ? contacts.filter(contact => contact.address.startsWith('0x')) : contacts.filter(contact => contact.address.startsWith('kaspa'));
      setItems(filteredContacts);
    };
    fetchContacts();
  }, [wallet, currentLayer]);
  if (items.length == 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__/* .Empty */ .S, {
      text: t('No contacts')
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
      children: items.map(account => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(AddressTypeCard, {
          name: account.name,
          address: account.address,
          handleAddrInput: handleAddrInput
        }, account.address);
      })
    });
  }
}
function MyAccountTab(_ref5) {
  let {
    handleAddrInput
  } = _ref5;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useCurrentAccount */ .YL)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .pI)();
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useKeyrings */ .C3)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
    children: keyrings.map(keyring => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
        style: {
          marginBottom: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
          text: keyring.alianName,
          mt: "md",
          style: {
            fontSize: '16px',
            color: '#0A2463'
          }
        }), keyring.accounts.map(account => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(AddressTypeCard, {
            name: currentAccount.address == account.address ? account.alianName + ' (Self)' : account.alianName,
            address: currentLayer === 'L2' ? account.addressL2 : account.address,
            handleAddrInput: handleAddrInput
          }, account.pubkey);
        })]
      }, keyring.key);
    })
  });
}
function AddressTypeCard(_ref6) {
  let {
    address,
    name,
    handleAddrInput
  } = _ref6;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Card */ .Zp, {
    classname: "hover",
    justifyBetween: true,
    mt: "md",
    onClick: async () => {
      handleAddrInput(address);
      (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .copyToClipboard */ .lW)(address).then(() => {
        // tools.toastSuccess('Copied');
      });
    },
    style: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      border: '1px solid rgba(10,36,99,0.15)',
      padding: '24px',
      marginTop: 12,
      transition: 'all 0.3s'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .VP, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
        text: name,
        style: {
          fontSize: '14px',
          color: '#0A2463'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .EY, {
        text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .shortAddress */ .Dc)(address, 15),
        preset: "sub",
        style: {
          fontSize: '12px',
          color: 'rgba(10, 36, 99, 0.65)'
        }
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TokenAvatar)
/* harmony export */ });
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81385);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);


function TokenAvatar(_ref) {
  let {
    src = '',
    name = '',
    size = 32,
    borderRadius = '50%',
    fontSize = 12
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    src: src,
    sx: {
      width: size,
      height: size,
      fontSize: fontSize,
      background: 'linear-gradient(to right, #29FAC4, #02DDA4)',
      borderRadius: borderRadius
    },
    children: name.slice(0, 2)
  });
}

/***/ }),

/***/ 64134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/right.db8fa8d4.svg";

/***/ }),

/***/ 73217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LayerSwapOut)
});

// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(51942);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(20577);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(5005);
// EXTERNAL MODULE: ./src/ui/components/ActionComponent/index.tsx + 6 modules
var ActionComponent = __webpack_require__(17508);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(13907);
// EXTERNAL MODULE: ./src/ui/state/settings/hooks.ts + 1 modules
var hooks = __webpack_require__(43168);
// EXTERNAL MODULE: ./src/shared/types.ts
var types = __webpack_require__(59577);
;// ./src/ui/images/common/retweetOutlined.svg
const retweetOutlined_namespaceObject = __webpack_require__.p + "static/media/retweetOutlined.07c4a066.svg";
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/ui/components/LayerSwapOut/index.tsx










function LayerSwapOut(props) {
  const {
    isShowText = true,
    textStyle,
    iconStyle,
    callback
  } = props;
  const tools = (0,ActionComponent/* useTools */.D)();
  const {
    t
  } = (0,useTranslation/* useTranslation */.B)();
  const changeLayerType = (0,hooks/* useChangeLayerTypeCallback */.AU)();
  const currentLayer = (0,hooks/* useLayerType */.pI)();
  const [type, setType] = (0,react.useState)(currentLayer || 'L1');
  const [fontColor, setfontColor] = (0,react.useState)('');
  const handleSwapOut = async () => {
    const newType = type === types/* LayerType */.mb.L1 ? types/* LayerType */.mb.L2 : types/* LayerType */.mb.L1;
    changeLayerType(newType);
    setType(newType);
    tools.toastSuccess(t(`Network type ${newType}`));
    if (callback) {
      callback();
    }
  };
  const setColorValue = () => {
    setfontColor(type === types/* LayerType */.mb.L2 ? colors/* colors */.T.aqua : colors/* colors */.T.dark);
  };
  (0,react.useEffect)(() => {
    setColorValue();
  }, [type]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
    justifyCenter: true,
    itemsCenter: true,
    style: {
      border: `1px solid ${type === types/* LayerType */.mb.L2 ? colors/* colors */.T.aqua : 'rgba(10, 36, 99, 0.15)'}`,
      padding: '4px 10px',
      borderRadius: '25px',
      boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
    },
    onClick: handleSwapOut,
    children: [isShowText && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
      style: {
        color: fontColor,
        ...textStyle
      },
      text: type,
      size: "sm",
      disableTranslate: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: retweetOutlined_namespaceObject,
      width: 18,
      height: 18,
      alt: "",
      style: {
        ...iconStyle,
        color: fontColor
      }
    })]
  });
}

/***/ }),

/***/ 95255:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/contacts-book.20e6c10c.svg";

/***/ })

}]);