"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[872],{

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

/***/ 5252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ FeeRateBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48818);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67196);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86836);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2488);
/* eslint-disable no-unused-vars */








var FeeRateType = /*#__PURE__*/function (FeeRateType) {
  FeeRateType[FeeRateType["NONE"] = 0] = "NONE";
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
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .e6)();
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .o, {
    mt: "lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_4__/* .Row */ .W, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .a, {
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
          }), v.title !== 'Custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .a, {
            text: "".concat(v.feeRate),
            size: "xxs",
            textCenter: true,
            style: {
              fontSize: '15px',
              fontWeight: 500,
              color: '#0A2463'
            }
          }), v.title !== 'Custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .a, {
            text: "".concat(v.desc),
            size: "xxs",
            textCenter: true,
            style: {
              fontSize: '11px',
              color: '#0A2463',
              margin: '0 0 6px 0',
              minHeight: 26
            }
          })]
        }, v.title);
      })
    }), feeOptionIndex === FeeRateType.CUSTOM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .o, {
      mt: "lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .EF, {
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

/***/ 30160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13976);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57360);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2488);




// import { Tag } from "@mui/icons-material"

const KnsDomain = _ref => {
  let {
    networkType,
    address
  } = _ref;
  const [domianInfo, setDomianInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const kaspaAddressPattern = /^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i;
    if (!kaspaAddressPattern.test(address)) {
      return setDomianInfo(null);
    }
    (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_2__/* .get_kns_list */ .GW)(networkType, {
      owner: address,
      page: 1,
      pageSize: 1,
      type: 'domain'
    }).then(res => {
      var _res$data, _res$data$data, _res$data$data$assets, _res$data2, _res$data2$data, _res$data2$data$asset;
      console.log((_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : (_res$data$data$assets = _res$data$data.assets) === null || _res$data$data$assets === void 0 ? void 0 : _res$data$data$assets[0]);
      setDomianInfo((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : (_res$data2$data$asset = _res$data2$data.assets) === null || _res$data2$data$asset === void 0 ? void 0 : _res$data2$data$asset[0]);
    }).catch(err => {
      setDomianInfo(null);
      console.log('get_kns_list', err);
    });
  }, [address]);
  if (!domianInfo || !domianInfo.asset) return;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .W, {
    style: {
      color: "#0a2463",
      fontSize: 12,
      maxWidth: '100%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      marginTop: 2
    },
    children: ["Domain: ", domianInfo.asset]
  });

  // return <Row mt={'sm'} style={{
  //   color: "#0a2463",
  //   fontSize: 12,
  //   width: '100%',
  //   textOverflow: 'ellipsis',
  //   overflow: 'hidden',
  //   whiteSpace: 'nowrap',
  // }}>
  //   {domianInfo?.asset ? <Tag color="cyan">domain: { domianInfo?.asset }</Tag>}
  // </Row>
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnsDomain);

/***/ }),

/***/ 86256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ LayerSwapOut)
});

// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(13976);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(46476);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(98104);
// EXTERNAL MODULE: ./src/ui/components/ActionComponent/index.tsx + 6 modules
var ActionComponent = __webpack_require__(23848);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@11.18.6_i18next@21.10.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(80864);
// EXTERNAL MODULE: ./src/ui/state/settings/hooks.ts + 1 modules
var hooks = __webpack_require__(17534);
// EXTERNAL MODULE: ./src/shared/types.ts
var types = __webpack_require__(40256);
;// CONCATENATED MODULE: ./src/ui/images/common/retweetOutlined.svg
const retweetOutlined_namespaceObject = __webpack_require__.p + "static/media/retweetOutlined.07c4a066.svg";
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(48818);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/LayerSwapOut/index.tsx












function LayerSwapOut(props) {
  const {
    isShowText = true,
    textStyle,
    iconStyle,
    callback
  } = props;
  const tools = (0,ActionComponent/* useTools */.w)();
  const {
    t
  } = (0,useTranslation/* useTranslation */.G)();
  const changeLayerType = (0,hooks/* useChangeLayerTypeCallback */.kz)();
  const currentLayer = (0,hooks/* useLayerType */.wl)();
  const [type, setType] = (0,react.useState)(currentLayer || 'L1');
  const [fontColor, setfontColor] = (0,react.useState)('');
  const wallet = (0,utils/* useWallet */.e6)();
  const handleSwapOut = async () => {
    const newType = type === types/* LayerType */.Y1.L1 ? types/* LayerType */.Y1.L2 : types/* LayerType */.Y1.L1;
    await changeLayerType(newType);
    setType(newType);
    tools.toastSuccess(t("Network type ".concat(newType)));
    if (callback) {
      callback();
    }
    console.log('handleSwapOut');
    // preferenceService.setLayerType(newType);
    // wallet.setLayerType(newType);
  };
  const setColorValue = () => {
    setfontColor(type === types/* LayerType */.Y1.L2 ? colors/* colors */.I.aqua : colors/* colors */.I.dark);
  };
  (0,react.useEffect)(() => {
    setColorValue();
  }, [type]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
    justifyCenter: true,
    itemsCenter: true,
    style: {
      border: "1px solid ".concat(type === types/* LayerType */.Y1.L2 ? colors/* colors */.I.aqua : 'rgba(10, 36, 99, 0.15)'),
      padding: '4px 10px',
      borderRadius: '25px',
      boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
    },
    onClick: handleSwapOut,
    children: [isShowText && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
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

/***/ 23492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ TokenAvatar)
/* harmony export */ });
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7886);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2488);


function TokenAvatar(_ref) {
  let {
    src = '',
    name = '',
    size = 32,
    borderRadius = '50%',
    fontSize = 12
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
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

/***/ 87748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37656);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2488);


function Content(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    className: "h-full flex flex-col justify-between space-y-6 p-4 ".concat(props.className ? props.className : ''),
    children: props.children
  });
}

/***/ }),

/***/ 81944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ TokenItem)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_Styled_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23492);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24808);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37656);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70884);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17534);
/* harmony import */ var _ui_images_common_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15728);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
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
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .wl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
    className: "flex justify-between py-3 px-3 !rounded-lg",
    style: {
      background: '#FFFFFF',
      boxShadow: '3px 3px 12px rgba(0, 0, 0, 0.1)',
      marginTop: 12
    },
    onClick: () => onClick(token),
    ...restProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      className: "space-x-2 flex items-center",
      children: [token !== null && token !== void 0 && token.isToken ?
      /*#__PURE__*/
      // token.icon ? <img width={40} height={40} src={token.icon} alt="" style={{
      //   borderRadius: '50%'
      // }} /> :
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components_Styled_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
        src: (token === null || token === void 0 ? void 0 : token.avatar) || (token === null || token === void 0 ? void 0 : token.icon),
        name: token.tick || token.symbol,
        size: 40,
        fontSize: 14
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .GW, {
        icon: "kas",
        size: 40
      }), styleType === 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          variant: "body1",
          fontWeight: 500,
          style: {
            fontSize: '15px',
            color: '#0A2463'
          },
          children: token !== null && token !== void 0 && token.isToken ? token === null || token === void 0 ? void 0 : token.tick : "".concat(currentLayer === 'L2' ? 'e' : '', "KAS")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          color: "text.secondary",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: token !== null && token !== void 0 && token.isToken ? currentLayer === 'L2' ? 'ERC20' : "".concat(token.mod ? 'Issue ' : '', "KRC20") : currentLayer === 'L2' ? 'L2 Native/Token' : 'kaspa'
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      className: "flex justify-end items-center space-x-3",
      children: [styleType === 'default' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontSize: '14px',
            color: '#0A2463'
          },
          children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .iy)(token.balance, token === null || token === void 0 ? void 0 : token.dec)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: token !== null && token !== void 0 && token.isToken ? '-' : "$".concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .iy)(token === null || token === void 0 ? void 0 : token.usdValue))
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontWeight: '500',
            fontSize: '14px',
            color: '#0A2463'
          },
          children: [token !== null && token !== void 0 && token.isToken ? token === null || token === void 0 ? void 0 : token.tick : 'KAS', "(", token !== null && token !== void 0 && token.isToken ? currentLayer === 'L2' ? 'ERC20' : "".concat(token.mod ? 'Issue ' : '', "KRC20") : 'kaspa', ")"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontSize: '13px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .iy)(token.balance, token === null || token === void 0 ? void 0 : token.dec)
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

/***/ 40020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectAddressDrawer: () => (/* binding */ SelectAddressDrawer),
/* harmony export */   "default": () => (/* binding */ TxCreateScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40712);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(87812);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34344);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(67472);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1088);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(83080);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32496);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96651);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60172);
/* harmony import */ var _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34780);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46956);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40256);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64540);
/* harmony import */ var _ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5252);
/* harmony import */ var _ui_components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86836);
/* harmony import */ var _ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86256);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87748);
/* harmony import */ var _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81944);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23932);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77980);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(60440);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(17534);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37660);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(96900);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(98104);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(95215);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(37656);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(70884);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(75776);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(87136);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5320);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(80864);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(33220);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(15164);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(63116);
/* harmony import */ var _ui_utils_mathUtils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39280);
/* harmony import */ var _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(93468);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(57360);
/* harmony import */ var _ui_components_KnsDomain__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(30160);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(59564);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__, _ui_components__WEBPACK_IMPORTED_MODULE_9__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__, _ui_components__WEBPACK_IMPORTED_MODULE_9__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










































function TxCreateScreen() {
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__/* .useLocation */ .IT)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_36__/* .useTranslation */ .G)();
  const {
    activeToken,
    refetchList,
    setActiveToken,
    refreshErc20Tokens
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__/* .useAccountContext */ .wB)();
  const accountBalance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountBalance */ .Id)();
  const safeBalanceOrigin = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSafeBalance */ .Se)();
  const [safeBalance, setSafeBalance] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(safeBalanceOrigin);
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useUserPrivateKey */ .yK)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_18__/* .useNavigate */ .i)();
  const kaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useKaspaTx */ .MJ)();
  const [tokenAmount, setTokenAmount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [inputAmount, setInputAmount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(kaspaTx.toSompi > 0 ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ .ei)(kaspaTx.toSompi) : '');
  const [inputAmountUsd, setInputAmountUsd] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const [toInfo, setToInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    address: kaspaTx.toAddress || (state === null || state === void 0 ? void 0 : state.address),
    domain: kaspaTx.toDomain
  });
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useNetworkType */ .qS)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const kasPriceOriginal = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useKasPrice */ .Af)();
  const [kasPrice, setKasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(kasPriceOriginal);
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountAddress */ .mA)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountAddressL2 */ .gt)();
  const [autoAdjust, setAutoAdjust] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const fetchUtxos = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useFetchUtxosCallback */ .b3)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_10__/* .useTools */ .w)();
  const [rpcStatus, setRpcStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setLoading(true);
    fetchUtxos().finally(() => {
      currentLayer !== 'L2' && setLoading(false);
    });
    console.log('activeToken', activeToken);
    return () => {
      console.log('clean up');
      // setActiveToken(null)
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setSafeBalance(safeBalanceOrigin);
  }, [safeBalanceOrigin]);
  const prepareSendKAS = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .usePrepareSendKASCallback */ .Y5)();
  const pushKaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_23__/* .usePushKaspaTxCallback */ .cl)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .wl)();
  const [safeSompi, setsafeSompi] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('--');
  const [safeBalanceMax, setSafeBalanceMax] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('--');
  const [safeSompiL2, setsafeSompiL2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('0');
  const [safeBalanceL2, setSafeBalanceL2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('0');
  const [gasPrices, setGasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (addressL2) {
      try {
        const getL2Info = async () => {
          const {
            balance
          } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountEthBalance */ .YB)(addressL2, networkType);
          const gasPrice = await getGasPrice(Number(balance));
          setsafeSompiL2(balance);
          setSafeBalanceL2(balance);
          setGasPrice(gasPrice);
        };
        getL2Info();
      } catch (error) {
        console.log('getL2Info error', error);
      } finally {
        setLoading(false);
      }
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
          const temp_url = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_MAINNET */ .AR + '/addresses/' + address + '/balance' : _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_TESTNET */ .CS + '/addresses/' + address + '/balance';
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
        setSafeBalanceMax((0,_ui_utils_mathUtils__WEBPACK_IMPORTED_MODULE_29__/* .minus */ .W4)(safeSompiL2, gasPrices));
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

  const toSompi = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => inputAmount ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .amountToSompi */ .s1)(inputAmount) : 0, [inputAmount]);
  const [inputAmountType, setInputAmountType] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('kas');
  const dustAmount = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ .ei)(_shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .COIN_DUST */ .c9), [_shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .COIN_DUST */ .c9]);
  const [feeRate, setFeeRate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const [rawTxInfo, setRawTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const [txFee, setTxFee] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const [drawerVisible, setDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [feeDrawerVisible, setFeeDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useAppDispatch */ .A)();
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
      case _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet:
        return isTestnetAddress && (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isValidAddress */ .Up)(address);
      case _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet:
        return isMainnetAddress && (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isValidAddress */ .Up)(address);
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
          [_shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_RPC_MAINNET_L2 */ .Qj,
          [_shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_RPC_TESTNET_L2 */ .i8,
          [_shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Devnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_RPC_DEVNET_L2 */ .yb
        }[networkType] || '';
        const web3 = new web3__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .cp3(rpc);
        const valueInWei = ethers__WEBPACK_IMPORTED_MODULE_37__/* .parseEther */ .qy(_inputAmount.toString());
        console.log('valueInWei', toInfo.address, addressL2);
        const gasLimit = await web3.eth.estimateGas({
          to: toInfo.address || addressL2,
          value: valueInWei
        });
        const garFee = (await web3.eth.getFeeData()).gasPrice;
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

    // L1需要验证rpc是否连接
    if (currentLayer === 'L1' && !rpcStatus) return setError('RPC is not connected');
    // 地址验证
    if (!toInfo.address || typeof toInfo.address !== 'string') {
      setError(t('Please enter recipient address'));
      return;
    }
    const address = toInfo.address.trim();
    const kaspaAddressPattern = /^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i;
    const isTestnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_38__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isMainnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_38__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isDevAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_38__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);

    // 检查地址格式是否完全无效
    if (!isTestnetAddress && !isMainnetAddress && !isDevAddress) {
      setError(t('Wrong address format'));
      return;
    }

    // 检查网络匹配
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet && !isTestnetAddress) {
      setError(t('Wrong address format') + ' - ' + t('Testnet requires kaspatest: prefix'));
      return;
    }
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet && !isMainnetAddress) {
      setError(t('Wrong address format') + ' - ' + t('Mainnet requires kaspa: prefix'));
      return;
    }

    // 验证地址有效性
    if (!(0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isValidAddress */ .Up)(address)) {
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
          setError("Amount must be at least ".concat(dustAmountL2, " eKAS"));
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
      if (toSompi < _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .COIN_DUST */ .c9) {
        setError("Amount must be at least ".concat(dustAmount, " KAS"));
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
      console.log('prepareSendKAS', toInfo, toSompi, feeRate, enableRBF);
      prepareSendKAS({
        toAddressInfo: toInfo,
        toAmount: toSompi,
        feeRate,
        enableRBF
      }).then(data => {
        setTxFee(data !== null && data !== void 0 && data.fee ? Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ .ei)(data.fee)) + 0.001 : 0.001);
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
      console.log('tokenAmount', tokenAmount);
      if ((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isGreaterThan */ .AL)(tokenAmount, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseTokenBalance */ .hH)(activeToken.balance, activeToken.decimals || 8))) {
        setError(t('Amount exceeds your token balance'));
        return;
      }
      setTxFee(Number(0.01));
      setDisabled(false);
    }
  }, [toInfo, inputAmount, tokenAmount, feeRate, enableRBF, activeToken, currentLayer, rpcStatus]);
  const showSafeBalance = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => !new bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c(accountBalance.amount).eq(new bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c(safeBalance)), [accountBalance.amount, safeBalance]);
  const dataFromForward = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .useLocationState */ .l1)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (dataFromForward && dataFromForward.rawTxInfo) {
      const rawtxFromForward = dataFromForward.rawTxInfo.rawtx;
      const result = JSON.parse(rawtxFromForward);
      const toAddress = result.to;
      const inputAmount = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ .ei)(result.amountSompi);
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
  const handleTokenClick = () => {
    navigate('SelectToken');
  };
  const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const handleTransferKrc20 = async () => {
    var _result;
    console.log('send krc20', '------');
    //privateKeyArg, network, ticker, priorityFeeValue, dest, amount
    setSending(true);
    const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : 'devnet';
    let result;
    if (activeToken.mod === 'issue') {
      // issue mode
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__/* .krc20_trans_issue */ .QT)(privateKey.hex, networkName, activeToken.ca, txFee * (feeRate <= 0 ? 1 : feeRate), toInfo.address, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec));
      console.log('send krc20 result', result);
    } else {
      // 普通模式
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__/* .krc20_trans */ .G0)(privateKey.hex, networkName, activeToken.tick, txFee * (feeRate <= 0 ? 1 : feeRate), toInfo.address, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec));
    }
    if ((_result = result) !== null && _result !== void 0 && _result.status) {
      var _result2, _result3;
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .C4.updateNativeTxs({
        from: address,
        info: {
          ...activeToken,
          type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .S.TransferKrc20,
          amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec),
          from: address,
          to: toInfo.address,
          hash: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
          status: 'success'
        }
      }));
      setSending(false);
      const rawtxinfo = {
        to: toInfo.address,
        amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec)),
        tick: activeToken.tick
      };
      navigate('TxSuccessScreen', {
        txid: (_result3 = result) === null || _result3 === void 0 ? void 0 : _result3.hash,
        rawtx: rawtxinfo,
        type: 'Send'
      });
      refetchList();
      // tools.toastSuccess(`Transfer ${tokenAmount} ${activeToken.tick} to ${toInfo.address}!`)
    } else {
      var _result4, _result5;
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .C4.updateNativeTxs({
        from: address,
        info: {
          ...activeToken,
          type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .S.TransferKrc20,
          amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec),
          from: address,
          to: toInfo.address,
          hash: (_result4 = result) === null || _result4 === void 0 ? void 0 : _result4.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
          status: 'Failed'
        }
      }));
      setSending(false);
      tools.toastError(((_result5 = result) === null || _result5 === void 0 ? void 0 : _result5.msg) || JSON.stringify(result));
    }
  };
  const handleTransferErc20 = async () => {
    // 查询账户余额是否够扣除fee
    if (Number(safeBalanceL2) < 0.01) return tools.toastError('Insufficient balance');
    let networkId = '';
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet) {
      networkId = 'mainnet';
    } else if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet) {
      networkId = 'testnet-10';
    } else {
      networkId = 'devnet';
    }
    setSending(true);
    let hash = '';
    try {
      if (relayerType === 'L1') {
        const res = await (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__/* .send_erc20_with_evm_payload */ .YZ)(networkId, "0x".concat(privateKey.hex), address, txFee, toInfo.address, tokenAmount,
        // '' + Number(tokenAmount) * 10 ** activeToken.decimals,
        activeToken.contractAddress);
        console.log('send_erc20_with_evm_payload', res);
        hash = res.hash;
      } else {
        const res = await (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__/* .send_erc20_transaction */ .CT)(toInfo.address, tokenAmount, "0x".concat(privateKey.hex), activeToken.contractAddress);
        console.log('send_erc20_transaction', res);
        hash = res.transactionHash;
      }
      await refreshErc20Tokens();
      const rawTxInfo = {
        to: toInfo.address,
        amountSompi: Number(tokenAmount) * 10 ** 18,
        // ethers.parseUnits(tokenAmount, activeToken.dec),
        tick: activeToken.symbol,
        dec: activeToken.dec
      };
      navigate('TxSuccessScreen', {
        txid: hash,
        rawtx: rawTxInfo,
        type: 'Send'
      });
    } catch (error) {
      console.log('handleTransferErc20 error', error);
    } finally {
      setSending(false);
    }
  };
  const krc20Disabled = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return !tokenAmount || !toInfo.address || (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isGreaterThan */ .AL)(tokenAmount, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseTokenBalance */ .hH)(activeToken.balance));
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .c, {
    spinning: loading,
    tip: "Loading...",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Layout */ ._W, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Header */ .ek, {
        onBack: () => navigate('MainScreen'),
        title: "".concat(t('Send'), " ").concat(activeToken ? activeToken.tick : "".concat(currentLayer === 'L2' ? 'e' : '', "KAS")),
        RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .NodeStatus */ .s9, {
          onRPCStatusChange: status => {
            setRpcStatus(status);
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
        className: "!h-auto flex-1 !justify-start overflow-y-auto px-4 !pb-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
          className: "flex justify-items-end items-center space-x-3",
          children: [networkType !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_14__/* .LayerSwapOut */ .U, {
            callback: handleLayerSwapOut
          }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
            style: {
              border: "1px solid ".concat(relayerType === 'L2' ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .I.aqua : 'rgba(10, 36, 99, 0.15)'),
              color: relayerType === 'L2' ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .I.aqua : 'rgba(10, 36, 99, 0.4)',
              padding: '4px 10px',
              borderRadius: '25px',
              boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
            },
            onClick: handleRelayerSwitch,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
              text: t("Use Relayer")
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
          className: "space-y-2",
          style: {
            marginTop: 8
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .c, {
            token: activeToken ? activeToken : {
              balance: safeBalance,
              usdValue: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .times */ .g7)(safeBalance, kasPrice),
              isToken: false
            },
            selectToken: true,
            onClick: () => navigate('SelectToken')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
            text: t('Recipient'),
            preset: "regular",
            color: "text",
            style: {
              fontSize: '15px',
              marginTop: 24
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
            justifyBetween: true,
            style: {
              marginTop: 4,
              position: 'relative'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
              full: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Input */ .EF, {
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .q, {
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
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("img", {
                src: _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_30__,
                width: 18,
                height: 18,
                alt: ""
              })
            })]
          }), currentLayer === 'L1' && !!toInfo.address && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_KnsDomain__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .c, {
            networkType: networkType,
            address: toInfo.address
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
            mt: "lg",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
              className: "mt-0 flex justify-between items-center",
              style: {
                minHeight: 30
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                text: t('Balance'),
                color: "text_minor"
              }), activeToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .c, {
                style: {
                  color: '#0A2463'
                },
                children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .formatNumber */ .iy)(activeToken.balance, activeToken.dec)
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                children: showSafeBalance || currentLayer === 'L2' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                  text: "".concat(currentLayer === 'L2' ? safeBalance : accountBalance.amount, " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                  size: "sm",
                  color: "text"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
                  onClick: () => {
                    setAutoAdjust(true);
                    setInputAmount(accountBalance.amount);
                    setInputAmountUsd((Number(accountBalance.amount) * Number(kasPrice)).toLocaleString());
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                    text: "MAX",
                    style: {
                      color: autoAdjust ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .I.yellow_light : _ui_theme_colors__WEBPACK_IMPORTED_MODULE_25__/* .colors */ .I.white_muted
                    },
                    color: "text"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                    text: "".concat(accountBalance.amount, " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                    size: "sm",
                    color: "text"
                  })]
                })
              })]
            }), !(activeToken !== null && activeToken !== void 0 && activeToken.isToken) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
                justifyBetween: true,
                itemsCenter: true,
                style: {
                  minHeight: 30
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                  text: "".concat(t('Unconfirmed')).concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                  color: "text_minor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                  text: "".concat(accountBalance.pending_kas_amount, " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                  size: "sm",
                  color: "text"
                })]
              }), showSafeBalance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
                justifyBetween: true,
                itemsCenter: true,
                style: {
                  minHeight: 30
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                  text: "".concat(t('Available'), "(").concat(t('safe to send'), ")"),
                  color: "text_minor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
                  onClick: () => {
                    setAutoAdjust(true);
                    setInputAmountType('kas');
                    setInputAmount((currentLayer === 'L2' ? safeBalanceMax : safeBalance).toString());
                    setInputAmountUsd((Number(currentLayer === 'L2' ? safeBalanceMax : safeBalance) * Number(kasPrice)).toLocaleString());
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                    text: 'MAX',
                    color: autoAdjust ? 'yellow' : 'text',
                    size: "sm"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                    text: "".concat(currentLayer === 'L2' ? safeBalanceMax : safeBalance, " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                    size: "sm",
                    color: "text"
                  })]
                })]
              })]
            }) : null, !(activeToken !== null && activeToken !== void 0 && activeToken.isToken) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
              className: "space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .KasAmountInput */ .U$, {
                preset: "amount",
                inputAmountType: inputAmountType,
                placeholder: t('Amount'),
                value: inputAmountType === 'kas' ? inputAmount : inputAmountUsd,
                onAmountInputChange: amount => {
                  // 控制最小精度
                  // const reg = new RegExp(`^\\d*(\\.\\d{0,${currentLayer === 'L1' ? 8 : 18}})?$`)
                  const reg = new RegExp("^\\d*(\\.\\d{0,4})?$");
                  if (!reg.test(amount)) return;
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
                  // 控制最小精度
                  // const reg = new RegExp(`^\\d*(\\.\\d{0,${currentLayer === 'L1' ? 8 : 18}})?$`)
                  const reg = new RegExp("^\\d*(\\.\\d{0,4})?$");
                  if (!reg.test(e.target.value)) return;
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
                style: {
                  margin: '10px 0 0 0'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(SubInputAmount, {
                  inputAmountType: inputAmountType,
                  setInputAmountType: setInputAmountType,
                  inputAmountUsd: inputAmountUsd,
                  kasPrice: kasPrice,
                  inputAmount: inputAmount
                })
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .c, {
                value: tokenAmount,
                onChange: e => {
                  // const reg = new RegExp(`^\\d*(\\.\\d{0,${activeToken.decimals || 8}})?$`)
                  const reg = new RegExp("^\\d*(\\.\\d{0,4})?$");
                  if ((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isNumeric */ .g5)(e.target.value) && reg.test(e.target.value)) {
                    setTokenAmount(e.target.value);
                  }
                },
                placeholder: "Amount",
                type: "text",
                fullWidth: true
              })
            })]
          }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
            text: error,
            color: "error"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
            justifyCenter: true,
            mt: "xl",
            children: [txFee > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
              color: "textDim",
              text: "".concat(t('TX Fee:'), " ").concat(txFee, " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
              textCenter: true
            }), currentLayer !== 'L2' && txFee > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
              mt: "lg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                text: "".concat(t('Priority Fee Rate'), " ( ").concat(t('Optional'), " )"),
                color: "text",
                style: {
                  fontSize: '15px'
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_12__/* .FeeRateBar */ .G, {
                feeRate: feeRate,
                onChange: val => {
                  setFeeRate(val);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                mt: "lg",
                color: "textDim",
                text: "".concat(t('Priority Fee:'), " ").concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ .ei)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .amountToSompi */ .s1)(txFee.toString()))), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                textCenter: true
              })]
            })]
          })]
        })]
      }), activeToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .c, {
        px: '16px',
        my: '16px',
        align: "center",
        variant: "body2",
        color: "textSecondary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .q, {
          disabled: disabled || sending,
          preset: "primary",
          text: t('Transfer'),
          className: "!rounded-lg !h-[42px]",
          onClick: () => {
            if (currentLayer === 'L1') return handleTransferKrc20();
            if (currentLayer === 'L2') return handleTransferErc20();
          },
          endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .c, {
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
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .c, {
        px: '16px',
        my: '16px',
        align: "center",
        variant: "body2",
        color: "textSecondary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .q, {
          disabled: disabled || sending,
          preset: "primary",
          text: t('Transfer'),
          className: "!rounded-lg !h-[42px]",
          endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .c, {
            size: 20,
            color: "inherit"
          }) : null,
          fullWidth: true,
          style: disabled ? {
            opacity: 0.5,
            cursor: 'not-allowed',
            backgroundColor: '#a0aec0'
          } : {},
          onClick: e => {
            if (currentLayer === 'L2') {
              setSending(true);
              let networkId = '';
              if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet) {
                networkId = 'mainnet';
              } else if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet) {
                networkId = 'testnet-10';
              } else {
                networkId = 'devnet';
              }
              if (relayerType === 'L1') {
                (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__/* .send_kaspa_with_evm_payload */ .Ej)(networkId, "0x".concat(privateKey.hex), address, txFee, toInfo.address, inputAmount).then(res => {
                  console.log('L1', privateKey, inputAmount, toInfo);
                  console.log('L1 res', res);
                  const rawTxInfo = {
                    to: toInfo.address,
                    amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(inputAmount, 8)),
                    tick: 'eKAS',
                    relayer: 'L1'
                  };
                  navigate('TxSuccessScreen', {
                    txid: res.hash,
                    rawtx: rawTxInfo,
                    type: 'Send'
                  });
                }).finally(() => {
                  setSending(false);
                });
              } else {
                (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_6__/* .send_eth_transaction */ .EI)(toInfo.address, inputAmount, "0x".concat(privateKey.hex)).then(res => {
                  console.log('L2', privateKey, inputAmount, toInfo);
                  console.log('L2 res', res);
                  const rawTxInfo = {
                    to: toInfo.address,
                    amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(inputAmount, 8)),
                    tick: 'eKAS',
                    relayer: 'L2'
                  };
                  navigate('TxSuccessScreen', {
                    txid: res.transactionHash,
                    rawtx: rawTxInfo,
                    type: 'Send'
                  });
                }).catch(error => {
                  tools.toastError((error === null || error === void 0 ? void 0 : error.message) || "Failed to send transaction");
                }).finally(() => {
                  setSending(false);
                });
              }
            } else {
              if (Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ .ei)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .amountToSompi */ .s1)(txFee.toString())))) + Number(inputAmount) > Number(accountBalance.amount)) return tools.toastError('Insufficient balance');
              setSending(true);
              pushKaspaTx(rawTxInfo.rawtx).then(_ref => {
                let {
                  success,
                  txid,
                  error
                } = _ref;
                console.log('error', success, error, txid);
                if (success) {
                  dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .C4.updateNativeTxs({
                    from: address,
                    info: {
                      tick: 'KAS',
                      dec: 8,
                      type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .S.TransferNative,
                      amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(inputAmount, 8),
                      from: address,
                      to: toInfo.address,
                      hash: txid,
                      time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
                      status: 'success'
                    }
                  }));
                  navigate('TxSuccessScreen', {
                    txid,
                    rawtx: JSON.parse((rawTxInfo === null || rawTxInfo === void 0 ? void 0 : rawTxInfo.rawtx) || '{}'),
                    type: 'Send'
                  });
                } else {
                  dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_24__/* .transactionsActions */ .C4.updateNativeTxs({
                    from: address,
                    info: {
                      tick: 'KAS',
                      dec: 8,
                      type: _ui_types__WEBPACK_IMPORTED_MODULE_26__/* .TXTypes */ .S.TransferNative,
                      amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .parseUnits */ ._s)(inputAmount, 8),
                      from: address,
                      to: toInfo.address,
                      hash: txid,
                      time: dayjs__WEBPACK_IMPORTED_MODULE_28___default()().valueOf(),
                      status: 'Failed'
                    }
                  }));
                  tools.toastError(error.toString() || 'Send Failed');
                }
              }).finally(() => {
                setSending(false);
              });
            }
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(SelectAddressDrawer, {
        drawerVisible: drawerVisible,
        onClose: () => setDrawerVisible(false),
        handleAddrInput: handleAddrInput
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .c, {
        placement: 'bottom',
        closable: false,
        onClose: () => setFeeDrawerVisible(false),
        open: feeDrawerVisible,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
          mt: "lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
            text: "".concat(t('Priority Fee Rate'), " ( ").concat(t('Optional'), " )"),
            color: "textDim"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_12__/* .FeeRateBar */ .G, {
            feeRate: feeRate,
            onChange: val => {
              setFeeRate(val);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
            mt: "xxl",
            color: "white",
            text: "".concat(t('Priority Fee:'), " ").concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .sompiToAmount */ .ei)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .amountToSompi */ .s1)(txFee.toString()))), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
            textCenter: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
            mt: "xxl",
            full: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .q, {
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
const SelectAddressDrawer = _ref2 => {
  let {
    drawerVisible,
    onClose,
    handleAddrInput
  } = _ref2;
  const tabItems = [{
    key: 'recent',
    label: 'Recent',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(RecentTab, {
      handleAddrInput: handleAddrInput
    })
  }, {
    key: 'contacts',
    label: 'Contacts',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(ContactsTab, {
      handleAddrInput: handleAddrInput
    })
    // disabled: true,
  }, {
    key: 'my_account',
    label: 'My account',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(MyAccountTab, {
      handleAddrInput: handleAddrInput
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .c, {
    placement: 'bottom',
    closable: false,
    onClose: onClose,
    open: drawerVisible,
    bodyStyle: {
      padding: '0px 10px 16px'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_45__["default"], {
      size: 'small',
      defaultActiveKey: "0",
      items: tabItems,
      onTabClick: key => {
        // console.log(key);
      },
      tabBarStyle: {
        zIndex: 1,
        position: 'sticky',
        top: '0px',
        background: '#fff',
        height: '50px',
        padding: '0',
        fontSize: '14px'
      }
    })
  }, 'bottom');
};
function SubInputAmount(_ref3) {
  let {
    inputAmountType,
    setInputAmountType,
    inputAmountUsd,
    kasPrice,
    inputAmount
  } = _ref3;
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .wl)();
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  if (kasPrice > 0 && (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .isNumeric */ .g5)(inputAmount)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
        itemsCenter: true,
        onClick: () => {
          inputAmountType == 'kas' ? setInputAmountType('usd') : setInputAmountType('kas');
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Icon */ .GW, {
          icon: "send",
          color: hover ? 'text' : 'white_minor',
          size: 12,
          style: {
            marginRight: '4px'
          }
        }), inputAmountType == 'kas' && kasPrice > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
          text: "$".concat((0,bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c)(Number(inputAmount) * Number(kasPrice)).toFixed(6)),
          color: hover ? 'text' : 'white_minor'
        }), inputAmountType == 'usd' && kasPrice > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
          text: "".concat((0,bignumber_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c)(Number(inputAmount)).toFixed(6), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
          color: hover ? 'text' : 'white_minor'
        })]
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {});
  }
}
function RecentTab(_ref4) {
  let {
    handleAddrInput
  } = _ref4;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useCurrentAccount */ ._A)();
  const currentNetworkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useNetworkType */ .qS)();
  const address = currentAccount.address;
  const [transactionInfos, setTransactionInfos] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .wl)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAccountAddressL2 */ .gt)();
  const {
    activeToken
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_17__/* .useAccountContext */ .wB)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        let list = [];
        if (currentLayer === 'L1') {
          if (activeToken) {
            const networkName = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : '';
            const data = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_31__/* .fetch_krc20_oplist */ .mq)(networkName, address, activeToken.tick);
            list = data.map(item => {
              const isSelfAddress = (item === null || item === void 0 ? void 0 : item.from) === address;
              return {
                block_time: Number(item.mtsAdd),
                mode: isSelfAddress ? 'Sent' : 'Receive',
                relatedAddresses: [isSelfAddress ? item === null || item === void 0 ? void 0 : item.to : item === null || item === void 0 ? void 0 : item.from],
                transaction_id: item.hashRev
              };
            });
          } else {
            const baseUrl = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet ? 'https://api.kaspa.org' : 'https://api-tn10.kaspa.org';
            const response = await fetch("".concat(baseUrl, "/addresses/").concat(address, "/full-transactions?limit=10&resolve_previous_outpoints=light"));
            const data = await response.json();
            const datas = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .handleTransactionsAddresses */ .Mv)(data, address);
            if (datas && datas.length) {
              list = datas.filter(item => {
                return item === null || item === void 0 ? void 0 : item.relatedAddresses.length;
              });
            }
          }
        }
        if (currentLayer === 'L2') {
          const baseUrl = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_8__/* .NetworkType */ .U5.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_MAINNET_L2 */ .Qy : _shared_constant__WEBPACK_IMPORTED_MODULE_7__/* .OPENAPI_URL_TESTNET_L2 */ .E$;
          if (activeToken) {
            const res = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_31__/* .fetch_erc20 */ .UF)(currentNetworkType, addressL2, activeToken.contractAddress);
            res.data.items.forEach(item => {
              var _item$from, _item$to, _item$from2;
              const isSelfAddress = (item === null || item === void 0 ? void 0 : (_item$from = item.from) === null || _item$from === void 0 ? void 0 : _item$from.hash) === addressL2;
              list.push({
                block_time: new Date(item.timestamp).getTime(),
                mode: isSelfAddress ? 'Sent' : 'Receive',
                relatedAddresses: [isSelfAddress ? item === null || item === void 0 ? void 0 : (_item$to = item.to) === null || _item$to === void 0 ? void 0 : _item$to.hash : item === null || item === void 0 ? void 0 : (_item$from2 = item.from) === null || _item$from2 === void 0 ? void 0 : _item$from2.hash],
                transaction_id: item.transaction_hash
              });
            });
          } else {
            const response = await fetch("".concat(baseUrl, "/api/v2/addresses/").concat(addressL2, "/transactions"));
            const data = await response.json();
            if (data && data.items.length) {
              data.items.filter(item => item.to).forEach(item => {
                var _item$from3, _item$from4;
                const isSelfAddress = (item === null || item === void 0 ? void 0 : (_item$from3 = item.from) === null || _item$from3 === void 0 ? void 0 : _item$from3.hash) === addressL2;
                list.push({
                  block_time: new Date(item.timestamp).getTime(),
                  mode: isSelfAddress ? 'Sent' : 'Receive',
                  relatedAddresses: [isSelfAddress ? item.to.hash : item === null || item === void 0 ? void 0 : (_item$from4 = item.from) === null || _item$from4 === void 0 ? void 0 : _item$from4.hash],
                  transaction_id: item.hash
                });
              });
            } else {
              list = [];
            }
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      children: transactionInfos.map(e => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Card */ .M1, {
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
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Row */ .WA, {
          full: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
            full: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
              text: "".concat(e.mode, " on ").concat(new Date(e.block_time).toLocaleString()),
              style: {
                fontSize: '14px',
                color: '#0A2463'
              }
            }), e.relatedAddresses.length > 0 && e.relatedAddresses.map((e, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
                classname: "recent-account-select",
                onClick: async () => {
                  handleAddrInput(e);
                  (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .copyToClipboard */ .ye)(e).then(() => {
                    // tools.toastSuccess('Copied');
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
                  text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .shortAddress */ .SO)(e, 15),
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
          className: "text-center py-7",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .c, {
            size: 20,
            color: "inherit"
          })
        })
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__/* .Empty */ .c, {});
    }
  }
}
function ContactsTab(_ref5) {
  let {
    handleAddrInput
  } = _ref5;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .useWallet */ .e6)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .wl)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_36__/* .useTranslation */ .G)();
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__/* .Empty */ .c, {
      text: t('No contacts')
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      children: items.map(account => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(AddressTypeCard, {
          name: account.name,
          address: account.address,
          handleAddrInput: handleAddrInput
        }, account.address);
      })
    });
  }
}
function MyAccountTab(_ref6) {
  let {
    handleAddrInput
  } = _ref6;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useCurrentAccount */ ._A)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useLayerType */ .wl)();
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useKeyrings */ .C)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
    children: keyrings.map(keyring => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
        style: {
          marginBottom: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
          text: keyring.alianName,
          mt: "md",
          style: {
            fontSize: '16px',
            color: '#0A2463'
          }
        }), keyring.accounts.map(account => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(AddressTypeCard, {
            name: currentAccount.address == account.address ? account.alianName + ' (Self)' : account.alianName,
            address: currentLayer === 'L2' ? account.addressL2 : account.address,
            handleAddrInput: handleAddrInput
          }, account.pubkey);
        })]
      }, keyring.key);
    })
  });
}
function AddressTypeCard(_ref7) {
  let {
    address,
    name,
    handleAddrInput
  } = _ref7;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Card */ .M1, {
    classname: "hover",
    justifyBetween: true,
    mt: "md",
    onClick: async () => {
      handleAddrInput(address);
      (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .copyToClipboard */ .ye)(address).then(() => {
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
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .ou, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
        text: name,
        style: {
          fontSize: '14px',
          color: '#0A2463'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .a, {
        text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_27__/* .shortAddress */ .SO)(address, 15),
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

/***/ }),

/***/ 93468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/contacts-book.20e6c10c.svg";

/***/ }),

/***/ 15728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/right.db8fa8d4.svg";

/***/ })

}]);